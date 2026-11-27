/* ============================================================================
   PORTFOLIO TEXT CONTENT - SINGLE FILE FOR EASY EDITING
   ============================================================================
   Edit any text between quotes below and save/commit to update the website.
   - Each project and tool has ONE title and ONE description below, reused
     automatically across Home, Projects, Tools, and the page itself.
   - Plain text fields accept normal sentences.
   - Fields marked with (HTML) allow simple tags like <strong>, <code>, <sub>.
   - Lists ([...]) can have items added, removed, or reordered freely.
   ============================================================================ */

window.SITE_CONTENT = {
  site: {
    brand: "Matthew Schembri"
  },

  /* ==========================================================================
     HOME, PROJECTS INDEX & TOOLS INDEX
     ========================================================================== */
  home: {
    eyebrow: "Mechatronics Engineering Portfolio",
    title: "Practical builds and interactive design tools",
    lede: "Third-year RMIT mechatronics student sharing hardware builds, CAD modelling, and browser-based engineering calculators.",
    projectsHeading: "Projects",
    toolsHeading: "Interactive tools"
  },

  projectsPage: {
    eyebrow: "Projects",
    title: "Engineering projects",
    lede: "Design, build, and test case studies."
  },

  toolsPage: {
    eyebrow: "Tools",
    title: "Interactive engineering tools",
    lede: "Offline browser calculators converted from hand calculations and spreadsheets."
  },

  /* ==========================================================================
     ABOUT PAGE (about.html)
     ========================================================================== */
  about: {
    eyebrow: "About",
    title: "Matthew Schembri",
    lede: "Third-year mechatronics engineering student at RMIT focused on practical robotics builds, CAD modelling, and testing first-principles calculations on real hardware.",
    meta: {
      degree: "Bachelor of Engineering Technology (Mechatronics), Minor in AI in Practice - RMIT University",
      location: "Melbourne & Mornington Peninsula, VIC, Australia",
      focus: "RMIT Rover Team (Arm subsystem), personal 3-DOF robot arm build, and lead-screw/linkage actuation",
      outsideUni: "AFL football, reading, fitness, and catching up with friends and family"
    },
    experienceHeading: "Education & experience",
    education: {
      title: "Bachelor of Engineering Technology (Mechatronics)",
      meta: "<strong>RMIT University</strong> · 2024–2027 (expected)",
      body: "Completed the Associate Degree in Engineering Technology (Advanced Manufacturing & Mechatronics) with Distinction and received the 2025 RMIT Dean's List for Academic Excellence (top 2%) before articulating into the Bachelor program."
    },
    work: {
      title: "Duty Manager & Pool Lifeguard",
      meta: "<strong>Yawa Aquatic Centre (Belgravia Leisure)</strong> · Dec 2022–Present (Duty Manager since June 2023)",
      body: "Leads lifeguards, customer service, and gym staff on shift, acting as chief emergency controller and managing commercial plant-room filtration, chemical dosing, water testing, and SCADA monitoring."
    },
    skillsHeading: "Skills & tools",
    skills: [
      "SolidWorks · Onshape · CATIA · Fusion 360 · AutoCAD",
      "FDM 3D Printing (Bambu Lab X1C, PLA/PETG/TPU/PA-6)",
      "MATLAB & Simulink (PID Control & Dynamics)",
      "NI LabVIEW & myRIO",
      "Python · C/C++ (Arduino) · JavaScript · SVG",
      "Siemens TIA Portal · PLC & SCADA",
      "Sensor/Actuator Integration & Calibration",
      "Plant-Room Operations & Team Leadership"
    ],
    contactHeading: "Contact",
    contactIntro: "Open to engineering internships, graduate roles, and project collaborations:"
  },

  /* ==========================================================================
     PROJECT: ROBOTIC GRIPPER (Home, Projects, projects/gripper.html)
     ========================================================================== */
  gripper: {
    title: "Robotic Gripper",
    description: "3D-printed lead-screw bell-crank inspired gripper designed around RMIT supplied hardware, using LabVIEW control to apply a controlled gripping force.",
    meta: {
      context: "Mechatronic Design (MIET2585), RMIT University · Oct 2026",
      role: "Mechanical CAD, LabVIEW programming, electronics, and assembly",
      stack: "SolidWorks · Bambu X1C (PLA, TPU, PA-6 Nylon) · NI myRIO + LabVIEW"
    },
    brief: {
      heading: "The brief",
      introHtml: "Built around supplied RMIT hardware (34:1 DC motor with encoder, Sabertooth 2x5, Sharp IR sensor, TAS606 load cell, and NI myRIO) to be mechanically capable of <strong>≥ 50 N</strong> whilst never applying over <strong>50 N</strong>. The T8 lead-screw bell-crank provides the mechanical margin, whilst LabVIEW load-cell feedback caps egg grip force at <strong>15 N</strong>.",
      motionHeading: "1. Jaw motion: linear bell-crank over rotational jaws",
      motionAssess1: "Simple to print, however the jaw rolls across the egg shell and pushes it outward.",
      motionAssess2: "Keeps faces flat, however six+ printed pin joints add backlash and flex.",
      motionAssess3: "Keeps jaws parallel on guide rods and multiplies 0.8 N·m into 369.5 N thrust without printed gears, trading off closing speed.",
      transmissionHeading: "2. Transmission",
      trans1: "High force multiplication (2.44× margin over 50 N at worst case) with no printed gear backlash.",
      trans2: "Printed teeth wear and add backlash, and a rack needs an extra gearbox for force.",
      trans3: "Cams are tolerance-sensitive, whilst belts stretch and only pull one way.",
      materialsHeading: "3. Materials (PLA, TPU & PA-6 Nylon)",
      mat1: "Stiffest and most accurate filament for bearing press-fits and clips, printed flat with 4 perimeters.",
      mat2: "Flexible gripping pad behind the load cell that conforms gently to the egg shell.",
      mat3: "Replaced the initial PLA shaft coupler after 0.8 N·m sheared it along a layer line.",
      materialsNote: "PETG and ABS/ASA were ruled out for the frame due to stringing on small clips and unnecessary chamber requirements.",
      controlHeading: "4. Control, calibration & safety",
      controlList: [
        { label: "LabVIEW loop (50 ms / 20 Hz)", html: "priority Select chain (E-Stop → Manual → 15 N force stop → Open → IR auto-close) with position PID (K<sub>p</sub> = 0.08, K<sub>i</sub> = 0.0002, K<sub>d</sub> = 1.8) clamped to 2.5 ± 1.0 V (40% speed) for gentle contact." },
        { label: "Load cell", html: "TAS606 zeroed at 0.069 V, calibrated in Excel (85.354 kg/V), and smoothed via moving-average filter: <code>F ≈ 836.5 × (V<sub>LC</sub> − 0.069)</code>." },
        { label: "IR detection", html: "Sharp GP2Y0A21YK0F fitted as <code>d = 24 / V<sub>IR</sub></code>, triggering only between 10–15 cm to avoid close-range fold-back and fail safe if unplugged." },
        { label: "Safety", html: "software E-Stop outputs 2.5 V stop and resets the myRIO, manual Force Stop is always available, and because the screw/gearbox self-locks, jaws are reopened in Manual Mode." }
      ]
    },
    calculations: {
      heading: "Design calculations",
      thrustHeading: "1. Axial screw thrust",
      thrustIntro: "Using standard power-screw mechanics (Budynas & Nisbett 2020) with T = 0.8 N·m, N = 56 rpm, quad-start T8 lead L = 8 mm (2 mm pitch × 4 starts), and steel-on-bronze μ = 0.19 (lead angle α = 14.32°, friction angle φ = 10.76°, η = 0.588):",
      thrustNote: "Note: correcting an early 2 mm pitch vs 8 mm lead error shifted both thrust and speed by 4×. Friction μ remains the largest uncertainty.",
      linkageHeading: "2. Bell-crank force transfer",
      linkageIntroHtml: "From a 30.27 mm closed datum, 36.5 mm of nut travel opens the jaws to 95 mm in CAD. Both 5 mm SolidWorks increments and the virtual-work ratio <code>q = 2(y<sub>J</sub> − y<sub>P</sub>)a / (r<sub>1</sub>² sin²φ)</code> show mechanical advantage dropping 35% from open to closed, so closed-end force (<strong>121.9 N/finger</strong>) governs capability:",
      speedHeading: "3. Speed, brief check & finger stress",
      speedBody: "Private load-cell tests reached 60–80 N before manual shutoff with no visible cracking in the PLA arms.",
      measuredHeading: "4. Calculated vs measured"
    },
    design: {
      heading: "CAD & mechanical layout",
      p1: "The mechanism comprises 15 printed parts on a Bambu Lab X1C (0.20 mm layers, 4 perimeters, 20% gyroid infill). Both finger carriages run on twin 6 mm aluminium guide rods, six 608ZZ bearings roll in the mirrored bell-crank slots to cut sliding friction, and the brass flange nut bolts into a recessed block with four M3 screws.",
      p2: "Structural parts were printed flat with 3 mm root fillets and ~0.20 mm bearing pin clearance, with the 6 mm guide-rod bores hand-reamed during assembly.",
      simHeading: "Interactive mechanism demonstration",
      simCaption: "Drag the stroke and geometry sliders to inspect bell-crank kinematics and live virtual-work force transfer.",
      buildHeading: "Manufacture & assembly",
      build1Cap: "All 15 printed parts laid out before assembly.",
      build2Cap: "Sub-assembly showing split bearing pins, 608ZZ bearings, and the brass flange nut on four M3 bolts.",
      elecHeading: "Electronics & LabVIEW debugging",
      elecBody: "All I/O uses myRIO Connector B: load cell on B/AI0, Sharp IR on B/AI1 via JST lead, encoder A/B on digital inputs, and 0–5 V motor command on B/AO0 to the Sabertooth 2x5 (2.5 V stop). Two hardware faults initially looked like LabVIEW bugs: a dead IR unit (swapped out) and the motor slipping in its friction-fit housing (secured with superglue for lab demos)."
    },
    final: {
      heading: "Working demonstration",
      videoCaptionHtml: "<strong>Demo:</strong> egg enters the 10–15 cm IR window, PID closes the jaws, and the 15 N limit stops at 13.4 N with no slip under pull testing. Reopening required manual input.",
      final1Cap: "Completed gripper at its measured 105 mm opening, wired to the myRIO and Sabertooth driver.",
      final2Cap: "Holding the artificial egg at 13.4 N against the 15 N software limit.",
      resultsHeading: "Test results",
      issuesHeading: "Unresolved issue & modelled vs measured gap",
      autoReopenHtml: "<strong>Auto-reopen failure:</strong> LabVIEW logic was verified correct, pointing to an optical cause. Once closed, the IR beam clipped the inner jaw edges inside the 10–15 cm window so the trigger never cleared. Mounting or angling the sensor ahead of the jaws fixes this.",
      openingGapHtml: "<strong>95 mm CAD vs 105 mm actual opening:</strong> Winding the screw manually to thread end before power-up plus assembly clearances gave ~40 mm nut travel instead of 36.5 mm, passing the ≥ 100 mm spec.",
      takeawaysHeading: "Key takeaways & next improvements",
      takeawaysList: [
        { label: "Check both ends of the stroke", text: "closed-end force (121.9 N) governs capability, whilst open-end force (164.8 N) governs PLA stall stress." },
        { label: "Verify thread lead early", text: "correcting pitch (2 mm) vs lead (8 mm) changed thrust and speed by 4×." },
        { label: "Filter lag vs speed", text: "moving-average smoothing stopped false triggers, however required a 40% speed cap to prevent overshoot." },
        { label: "Next revision", text: "move the IR sensor forward, replace the glued motor housing and nylon coupler with M3 face mounts and an aluminium jaw coupler, and add a LabVIEW latch with PID anti-windup." }
      ],
      downloadsHeading: "Downloads"
    }
  },

  /* ==========================================================================
     PROJECT & TOOL: ROBOT ARM CALCULATOR
     (Home, Projects, Tools, projects/robot-arm.html, tools/armActuatorCalculation.html)
     ========================================================================== */
  robotArm: {
    title: "Robot Arm Load and Link-Length Calculator",
    description: "A browser tool to determine feasible link lengths, motors, and payload for a robot arm against bending stress, actuator torque, and tip deflection, with live scaled SVG diagrams.",
    meta: {
      role: "Engineering model, UI, and vanilla JS/SVG implementation",
      context: "Personal 3-DOF 3D-printed robotic arm build and RMIT Rover arm analysis"
    },
    liveHeading: "Live tool",
    liveCaptionHtml: "Try switching to <strong>2. Find link lengths</strong>, setting a target payload, and swapping J1 from a DS3225 to an MG996R to watch the feasible reach drop.",
    whyHeading: "Why I built it",
    whyIntro: "Hobby arms often fail after printing because three coupled effects get skipped during rough sizing:",
    whyList: [
      { label: "Coupled chain loads", text: "every joint carries everything outboard of it, so wrist mass penalises every joint underneath." },
      { label: "Stall vs working torque", text: "servo kg·cm specs are stall figures, not continuous working limits." },
      { label: "Stiffness governs printed links", text: "plastic links droop out of tolerance long before yielding, and each link's end slope compounds down the chain." }
    ],
    modelHeading: "Engineering model",
    modelIntro: "Evaluated in the worst-case horizontal pose against three independent limits, with the tightest limit governing:",
    modelList: [
      { label: "1. Bending stress", html: "six solid and hollow sections checked against <code>Z × yield × k / FoS</code>, where <code>k</code> is the FDM print knockdown." },
      { label: "2. Actuator torque", html: "usable torque equals <code>rated × qty × derate × gear ratio × η</code> (default 0.50 derate)." },
      { label: "3. Tip deflection", text: "each link is solved as a cantilever under tip load, outboard moment, and self-weight, summing local droop and carried slope." }
    ],
    decisionsHeading: "Key design decisions",
    decisionsList: [
      { label: "Automatic motor mass", html: "picking a motor for joint J<sub>i+1</sub> adds its mass to the end of link <em>i</em> automatically (base joint J1 does not load the arm)." },
      { label: "Two solve modes", text: "Mode 1 solves max payload for fixed links, whilst Mode 2 bisects total reach until worst utilisation hits 1.00." },
      { label: "Payload CoG offset", text: "adds grip overhang to every joint's lever arm." },
      { label: "Offline & self-contained", text: "inline SVG diagrams, CSV export, and URL-hash state sharing need zero dependencies." }
    ],
    limitationsHeading: "Limitations",
    limitationsIntro: "Static Euler-Bernoulli beam theory in one horizontal pose excludes:",
    limitationsList: [
      "Joint stress concentrations, fastener pull-out, and servo horn/shaft strength.",
      "Base slewing torsion and compression-link buckling.",
      "Gearbox backlash, bearing play, PLA creep, and thermal softening near motors.",
      "End-effector grip force (covered by the gripper tools)."
    ],
    limitationsNote: "Built-in actuator ratings are indicative class values, not datasheet guarantees.",
    validationHeading: "Validation plan",
    validationList: [
      "Hang known masses in the horizontal pose and measure tip droop with a dial indicator.",
      "Back-calculate real print knockdown k from measured stiffness.",
      "Hold a loaded pose for one hour to measure PLA/PETG creep.",
      "Check final joint geometry and fastener stress concentrations in FEA."
    ],
    skillsHeading: "Skills demonstrated",
    skills: [
      "Mechanics of materials",
      "Beam deflection & superposition",
      "Actuator sizing",
      "Numerical bisection",
      "Vanilla JS & SVG"
    ],
    calc: {
      linksHintHtml: "Actuator mass for joint J<sub>i+1</sub> sits at the distal end of link i automatically. Base actuator J1 is carried by the base.",
      dynHintHtml: "Computed with K<sub>d</sub> = 1 to avoid double-counting against the static factor.",
      actHint: "Available torque = rated × qty × derate × gear ratio × η. Hobby servo kg·cm values are stall ratings.",
      disclaimer: "Idealised horizontal Euler-Bernoulli beam model. Excludes joint stress concentrations, fastener pull-out, horn strength, torsion, creep, and backlash. Verify critical parts with FEA and testing.",
      help: {
        mode:  ["Solve mode", "Mode 1 fixes link lengths and solves max payload. Mode 2 fixes payload and bisects total reach until worst utilisation hits 1.00."],
        glob:  ["Global factors", "Derate (0.4–0.5 servos, 0.6–0.8 steppers), FoS (3–4 FDM, 2.5 metal), print knockdown k (0.55–0.7 FDM), dynamic factor Kd, efficiency η, and deflection budget."],
        links: ["Links & joints", "Expand a link card to edit actuator, material, section, length/share, and distal mass. Joint 1 carries everything outboard of it."],
        ee:    ["End effector", "Gripper/tooling mass acts at the far tip. Payload CoG offset adds extra lever arm to every joint."],
        dyn:   ["Dynamics check", "Adds inertia torque T = J·α for target speed ω and ramp time ta, using Kd = 1 as an independent cross-check."],
        diag:  ["Scaled diagram", "Horizontal worst-case pose. Lengths and heights are to scale, droop is magnified visually, purple blocks show lumped masses, dashed purple marks deflection budget."],
        res:   ["Results", "Practical payload is the lesser of strength/torque limit and deflection limit. Worst utilisation = 1.00 sits right on the allowable limit."],
        act:   ["Actuator schedule", "Lists rated torque, usable torque, gravity demand, utilisation bar, mass, travel range, and no-load speed for each joint and gripper."],
        mb:    ["Mass budget", "Separates carried arm/actuator/gripper mass from base actuator J1."],
        joint: ["Per-joint breakdown", "Shows bending and torque utilisation, demand vs capacity (N·m), payload limit, local droop, natural frequency fn, and binding limit."],
        adv:   ["Design advice", "Flags the governing joint plus practical checks (PLA creep, stall current, gearing, CoG offset, natural frequency)."]
      }
    }
  },

  /* ==========================================================================
     TOOL: BELL-CRANK MECHANISM SIMULATOR (Home, Tools, tools/gripper-mechanism.html)
     ========================================================================== */
  gripperSim: {
    title: "Bell-Crank Inspired Lead-Screw Mechanism",
    description: "Animated bell-crank linkage model with adjustable geometry showing live jaw opening, virtual-work force transfer, and SVG export.",
    forceHeading: "How force is calculated",
    forceSteps: [
      { label: "Torque → nut force", text: "axial thrust from screw torque, lead, and efficiency η." },
      { label: "Virtual work", html: "for symmetric jaws, <code>F_tip / F_nut = 1 / |q|</code>." },
      { label: "Grip length", html: "offset contact creates carriage moment <code>F_tip · e</code> without reducing ideal horizontal force." },
      { label: "Contact only", text: "displayed force is available capacity at that opening once touching an object." }
    ],
    forceNote: "Rigid-body estimate excluding motor torque-speed curves, deflection, and measured friction."
  },

  /* ==========================================================================
     TOOL: LEAD SCREW CALCULATOR (Home, Tools, Gripper page, tools/lead-screw-calculator.html)
     ========================================================================== */
  leadScrew: {
    title: "Lead Screw & Lead Nut Calculator",
    description: "Calculates power-screw efficiency, self-locking margin, and back-driving torque from thread geometry, materials, and lubrication, with live diagrams and copyable hand working.",
    fig1CaptionHtml: "One revolution unwrapped at d<sub>m</sub>. Back-driving occurs only when lead angle λ exceeds friction angle ρ.",
    fig2Caption: "Axial section relating lead, pitch, and mean diameter.",
    fig3Caption: "Shaded zone = self-locking (λ < ρ, forward efficiency < 50%).",
    safetyHeading: "Safety note",
    safetyBody: "Friction varies with wear, speed, temperature, and lubrication. Confirm against supplier datasheets and never rely on self-locking alone for suspended loads."
  },

  /* ==========================================================================
     COMPANION DOC: ARM CALCULATOR METHOD GUIDE (tools/armToolExplanation.html)
     ========================================================================== */
  armMethod: {
    title: "Robot Arm Calculator - Method & Excel Spec",
    description: "Underlying beam model and copy-paste Excel formulas for the Robot Arm Load and Link-Length Calculator.",
    approachHeading: "1. Modelling approach",
    approachBodyHtml: "Each joint carries everything outboard of it in the <strong>worst-case horizontal pose</strong>. The model checks <strong>bending stress</strong>, <strong>actuator torque</strong>, and <strong>tip deflection</strong> independently, with the tightest limit governing.",
    approachCaptionHtml: "Horizontal worst-case pose showing reach S<sub>i</sub>, link weights m<sub>i</sub>g, and distal masses P<sub>i</sub>.",
    flowHeading: "2. Constraint logic",
    materialsHeading: "3. Material reference table (Tab 1, rows 40–45)",
    materialsBody: "Indicative in-plane (XY) FDM values. Replace with measured coupon data for critical parts.",
    sectionsHeading: "4. Cross-sections",
    sectionsBodyHtml: "Bending stiffness scales with <strong>h³</strong>, so taller hollow tubes beat solid bars for stiffness per gram.",
    tab1Heading: "5. Tab 1 \"Load Limit\" (Excel formulas)",
    tab1LinksHtml: "Enter link inputs in <strong>rows 12–17</strong>: A (link #), B (length L), C (material), D (section), E (D or b), F (h), G (wall t), P (distal lump kg), Q (motor torque N·m), R (gear ratio). Section dropdown list:",
    tab2Heading: "6. Tab 2 \"Link Lengths for Load\" (Goal Seek)",
    tab2BodyHtml: "Drive link lengths from total reach (<code>B10</code>) via length shares in column <code>AH</code>, then run <strong>Data → What-If Analysis → Goal Seek</strong> to set worst utilisation <code>B15</code> to <code>1</code> by changing <code>B10</code>.",
    extraHeading: "7. Additional engineering checks",
    extraList: [
      { label: "Dynamics", html: "\\(J = \\tfrac{1}{3}mL^2 + \\sum m_{distal}d^2\\), \\(T_{req} = T_{gravity} + J\\alpha + T_{friction}\\)." },
      { label: "Natural frequency", html: "\\(f_n \\approx \\frac{1}{2\\pi}\\sqrt{\\frac{3EI}{mL^3}}\\). Keep motion below ~0.2 f<sub>n</sub>." },
      { label: "Buckling & torsion", html: "\\(P_{cr} = \\pi^2 EI / (KL)^2\\) for struts, \\(\\tau = Tr / J_p\\) during slewing." },
      { label: "FDM practice", text: "print links flat with 4+ perimeters, derate PLA to ~40% for held poses (or use PETG/ASA), and use heat-set inserts at joints." },
      { label: "Accuracy & safety", text: "account for gearbox backlash, payload CoG overhang, E-stop, and power-off holding." }
    ],
    checklistHeading: "8. Validation checklist",
    checklist: [
      { title: "Dead-weight test", html: "Hang known masses horizontally and back-calculate real <code>k</code> from dial-indicator droop." },
      { title: "Joint FEA", text: "Check bolt holes, fillets, and bearing seats omitted by beam theory." },
      { title: "Thermal & creep check", html: "Hold a loaded pose for one hour and check temperature near motors against T<sub>g</sub>." }
    ]
  }
};
