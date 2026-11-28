/* Shared UI helpers: content binding, scroll reveal, navbar shadow, footer year, embed mode, tabs, lightbox, copy */
(() => {
  // Hydrate written text from root content.js (window.SITE_CONTENT)
  const content = window.SITE_CONTENT;
  if (content) {
    const get = path => path.split('.').reduce((acc, k) => (acc != null ? acc[k] : undefined), content);

    document.querySelectorAll('[data-text]').forEach(el => {
      const v = get(el.dataset.text);
      if (v !== undefined) el.textContent = v;
      else el.hidden = true;
    });

    document.querySelectorAll('[data-html]').forEach(el => {
      const v = get(el.dataset.html);
      if (v !== undefined) el.innerHTML = v;
      else el.hidden = true;
    });

    document.querySelectorAll('[data-cap-key]').forEach(el => {
      const v = get(el.dataset.capKey);
      if (v !== undefined) el.dataset.cap = v;
    });

    document.querySelectorAll('[data-list]').forEach(el => {
      const items = get(el.dataset.list);
      if (!Array.isArray(items)) { el.hidden = true; return; }
      const cls = el.dataset.itemClass || '';
      const sep = el.dataset.sep || ': ';
      const wrap = el.dataset.wrap === 'span';
      el.innerHTML = '';
      items.forEach(item => {
        const li = document.createElement('li');
        if (cls) li.className = cls;
        if (typeof item === 'string') {
          li.textContent = item;
        } else if (item && typeof item === 'object') {
          const b = document.createElement('strong');
          b.textContent = item.label + sep;
          li.appendChild(b);
          if (wrap) {
            const sp = document.createElement('span');
            if (item.html !== undefined) sp.innerHTML = item.html;
            else sp.textContent = item.text || '';
            li.appendChild(sp);
          } else if (item.html !== undefined) {
            const sp = document.createElement('span');
            sp.innerHTML = item.html;
            li.appendChild(sp);
          } else {
            li.appendChild(document.createTextNode(item.text || ''));
          }
        }
        el.appendChild(li);
      });
    });

    document.querySelectorAll('[data-cards]').forEach(el => {
      const items = get(el.dataset.cards);
      if (!Array.isArray(items)) { el.hidden = true; return; }
      el.innerHTML = '';
      items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'panel';
        div.style.margin = '0';
        const h3 = document.createElement('h3');
        h3.textContent = item.title || '';
        const p = document.createElement('p');
        p.className = 'small muted';
        if (item.html !== undefined) p.innerHTML = item.html;
        else p.textContent = item.text || '';
        div.append(h3, p);
        el.appendChild(div);
      });
    });
  }

  // Embed mode (?embed=1)
  const embedded = new URLSearchParams(location.search).has('embed');
  if (embedded) {
    document.body.classList.add('embedded');
  }

  // Footer year
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Frosted navbar elevation on scroll
  const nav = document.querySelector('.nav');
  if (nav && !embedded) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Subtle staggered scroll-reveal animations (respects prefers-reduced-motion)
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!embedded && !reduceMotion && 'IntersectionObserver' in window) {
    const targets = document.querySelectorAll(
      'main > .hero, main > .about-hero, main > .section-hd, main > .grid > .card, main > .meta, main > .panel, main > .tool-grid .tool-card, main > .btn-row'
    );
    if (targets.length) {
      document.documentElement.classList.add('has-anim');
      targets.forEach(el => {
        el.classList.add('reveal');
        const parent = el.parentElement;
        if (parent && parent.classList.contains('grid')) {
          const idx = [...parent.children].indexOf(el);
          el.style.setProperty('--d', `${Math.min(idx, 5) * 75}ms`);
        }
      });
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });
      targets.forEach(el => io.observe(el));
    }
  }

  // Accessible tabs with shareable hash URLs
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  if (tabs.length) {
    const show = (name, push) => {
      if (!tabs.some(t => t.id === 'tab-' + name)) name = tabs[0].id.slice(4);
      tabs.forEach(t => {
        const on = t.id === 'tab-' + name;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) {
          panel.hidden = !on;
          panel.classList.toggle('anim-in', on && !reduceMotion);
        }
      });
      if (push && location.hash.slice(1) !== name) {
        history.replaceState(null, '', '#' + name);
      }
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => show(t.id.slice(4), true));
      t.addEventListener('keydown', e => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        const next = tabs[(i + d + tabs.length) % tabs.length];
        next.focus();
        show(next.id.slice(4), true);
      });
    });
    show(location.hash.slice(1) || tabs[0].id.slice(4), false);
    window.addEventListener('hashchange', () => show(location.hash.slice(1), false));
  }

  // Lightbox for .media-grid images
  const lb = document.getElementById('lb');
  if (lb) {
    const lbImg = lb.querySelector('img');
    const lbCap = lb.querySelector('p');
    document.addEventListener('click', e => {
      const img = e.target.closest('.media-grid img');
      if (img) {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lbCap.textContent = img.dataset.cap || img.alt;
        lb.classList.add('on');
        lb.querySelector('button')?.focus();
        return;
      }
      if (e.target.closest('#lb')) lb.classList.remove('on');
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') lb.classList.remove('on');
    });
  }

  // Copy helper exposed globally for tools/docs
  window.copyText = async (text, onDone, onFail) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      if (onDone) onDone();
    } catch {
      if (onFail) onFail();
    }
  };
})();
