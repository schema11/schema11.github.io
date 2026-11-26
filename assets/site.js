/* Shared UI helpers: footer year, embed mode, tabs, lightbox, copy */
(() => {
  // Embed mode (?embed=1)
  if (new URLSearchParams(location.search).has('embed')) {
    document.body.classList.add('embedded');
  }

  // Footer year
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Accessible tabs with shareable hash URLs
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  if (tabs.length) {
    const show = (name, push) => {
      if (!tabs.some(t => t.id === 'tab-' + name)) name = tabs[0].id.slice(4);
      tabs.forEach(t => {
        const on = t.id === 'tab-' + name;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
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
