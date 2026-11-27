/* ============================================================================
   PORTFOLIO TEXT CONTENT - SINGLE FILE FOR EASY EDITING
   ============================================================================
   Edit any text between quotes below and save/commit to update the website.
   - Plain text fields accept normal sentences.
   - Fields marked with (HTML) allow simple tags like <strong>, <code>, <sub>.
   - Lists ([...]) can have items added, removed, or reordered freely.
   ============================================================================ */

window.SITE_CONTENT = {
  site: {
    brand: "Matthew Schembri"
  },

  /* ==========================================================================
     SHARED PROJECT & TOOL CARDS (used on Home, Projects, and Tools pages)
     ========================================================================== */
  cards: {
    gripper: {
      homeTitle: "Robotic Gripper",
      pageTitle: "Robotic Gripper - university project",
      homeSummary: "3D-printed lead-screw bell-crank gripper designed around supplied RMIT hardware, delivering 122–165 N capability whilst holding an egg at a 13.4 N LabVIEW force limit.",
      pageSummary: "Full design/build cycle for a 3D-printed lead-screw gripper: mechanism selection, virtual-work force calculations, SolidWorks CAD, PLA/TPU/Nylon manufacture, and LabVIEW force-threshold testing on an egg."
    },
    robotArm: {
      title: "Robot Arm Load & Link-Length Calculator",
      homeSummary: "Browser sizing tool checking bending stress, derated actuator torque, and tip deflection simultaneously across up to six serial links.",
      pageSummary: "Offline browser tool sizing a serial robot arm against bending stress, derated actuator torque, and tip deflection, complete with a 20-actuator database and scaled SVG diagrams.",
      toolSummary: "Sizes a serial robot arm against bending stress, actuator torque, and tip deflection with a 20-entry motor database, mass budget, and live scaled SVG diagrams.",
      homeToolTitle: "Arm Payload & Actuator Calculator",
      homeToolSummary: "Size link sections and motors for a serial robot arm with a 20-entry actuator database and live deflection plots."
    },
    gripperSim: {
      homeTitle: "Gripper Mechanism Simulator",
      toolTitle: "Lead-Screw Gripper Mechanism",
      homeSummary: "Animated bell-crank linkage model showing live jaw opening, virtual-work force transfer, and SVG export.",
      toolSummary: "Animated bell-crank kinematics with adjustable geometry, live jaw opening, virtual-work tip force, and SVG export."
    },
    leadScrew: {
      homeTitle: "Lead Screw & Nut Calculator",
      toolTitle: "Lead Screw & Lead Nut Calculator",
      homeSummary: "Power-screw efficiency, self-locking margin, back-drive torque, live diagrams, and step-by-step hand working.",
      toolSummary: "Calculates power-screw efficiency, self-locking margin, and back-driving torque from thread geometry, materials, and lubrication, with live diagrams and copyable hand working."
    }
  },

  /* ==========================================================================
     HOME PAGE (index.html)
     ========================================================================== */
  home: {
    eyebrow: "Mechatronics Engineering Portfolio",
    title: "Practical builds and interactive design tools",
    lede: "Third-year mechatronics engineering student at RMIT. This site brings together my hardware builds, CAD modelling, and browser-based calculation tools so the theory and physical testing sit side by side.",
    projectsHeading: "Projects",
    toolsHeading: "Interactive tools"
  },

  /* ==========================================================================
     PROJECTS INDEX (projects.html)
     ========================================================================== */
  projectsPage: {
    eyebrow: "Projects",
    title: "Engineering projects",
    lede: "Design, build, and test case studies showing how mechanical modelling, actuator sizing, and control logic fit together."
  },

  /* ==========================================================================
     TOOLS INDEX (tools.html)
     ========================================================================== */
  toolsPage: {
    eyebrow: "Tools",
    title: "Interactive engineering tools",
    lede: "Browser-based calculators converted from hand calculations and Excel spreadsheets so geometry, materials, and motors can be tested directly."
  },

  /* ==========================================================================
     ABOUT PAGE (about.html)
     ========================================================================== */
  about: {
    eyebrow: "About",
    title: "Matthew Schembri",
    lede: "Third-year mechatronics engineering student at RMIT focused on practical robotics builds, CAD modelling, and validating first-principles calculations against physical hardware.",
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
      body: "Graduated from the Associate Degree in Engineering Technology (Advanced Manufacturing & Mechatronics) with Distinction and received the 2025 RMIT Dean's List for Academic Excellence (top 2%), before articulating into the Bachelor program."
    },
    work: {
      title: "Duty Manager & Pool Lifeguard",
      meta: "<strong>Yawa Aquatic Centre (Belgravia Leisure)</strong> · Dec 2022–Present (Duty Manager since June 2023)",
      body: "Daily operational leadership across lifeguards, customer service, and gym staff, acting as chief emergency controller and managing commercial plant-room filtration, chemical dosing, water testing, and SCADA monitoring."
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
     PROJECT: ROBOTIC GRIPPER (projects/gripper.html)
     ========================================================================== */
  gripper: {
    title: "Robotic Gripper - design, build & test",
    lede: "Designed around supplied RMIT hardware (34:1 DC motor with encoder, Sabertooth 2x5 driver, Sharp IR sensor, TAS606 load cell, and NI myRIO) to deliver at least 50 N of mechanical grip capability whilst limiting applied force to 15 N on an artificial egg.",
    meta: {
      context: "Mechatronic Design (MIET2585), RMIT University · Oct 2026",
      role: "Mechanical CAD, LabVIEW programming, electronics, and assembly",
      stack: "SolidWorks · Bambu X1C (PLA, TPU, PA-6 Nylon) · NI myRIO + LabVIEW"
    },
    brief: {
      heading: "The brief",
      introHtml: "The brief had two opposing force requirements: mechanical capability of at least <strong>50 N</strong>, with operating force capped strictly below <strong>50 N</strong>. We split those roles cleanly: an 8 mm lead-screw bell-crank linkage provided high mechanical advantage, whilst LabVIEW load-cell feedback enforced the ceiling. We lowered the egg setpoint from 20 N to <strong>15 N</strong> to protect the PLA arms and added a moving-average filter to reject load-cell noise.",
      motionHeading: "1. Jaw motion: linear bell-crank over rotational jaws",
      motionAssess1: "Simplest to print, however the jaw face rolls across the egg shell and pushes it outward.",
      motionAssess2: "Keeps faces flat, however six+ printed pin joints accumulate backlash and compliance.",
      motionAssess3: "Guarantees parallel jaw contact and multiplies 0.8 N·m into 369.5 N thrust without a printed gearbox, trading off closing speed.",
      transmissionHeading: "2. Transmission",
      trans1: "High force multiplication (2.44× margin above 50 N at worst case) with zero printed gear backlash.",
      trans2: "Printed gear teeth introduce backlash and wear, and a rack needs an extra gearbox for force.",
      trans3: "Cams are highly tolerance-sensitive, whilst belts stretch and only pull in one direction.",
      materialsHeading: "3. Materials (PLA, TPU & PA-6 Nylon)",
      mat1: "Stiffest and most dimensionally accurate filament for bearing press-fits and snap clips, printed flat with 4 perimeters so loads run along XY layers.",
      mat2: "Flexible gripping face that conforms gently to the egg shell instead of creating a point load.",
      mat3: "Replaced the initial PLA shaft coupler after 0.8 N·m sheared it along a layer line.",
      materialsNote: "PETG and ABS/ASA were ruled out for the main body due to stringing on small clips and unnecessary chamber requirements. During testing, the motor cage also lost its friction grip and was secured with superglue for lab demos (a bolted flange is planned next).",
      controlHeading: "4. Control, calibration & safety",
      controlList: [
        { label: "LabVIEW loop (50 ms / 20 Hz)", html: "evaluates priority Select blocks (E-Stop → Manual → 15 N force stop → Open → IR auto-close) with discrete position PID (K<sub>p</sub> = 0.08, K<sub>i</sub> = 0.0002, K<sub>d</sub> = 1.8) clamped to 2.5 ± 1.0 V (40% speed) for gentle contact." },
        { label: "Load cell calibration", html: "TAS606 zeroed at 0.069 V, calibrated in Excel (85.354 kg/V), filtered via moving-average Express VI: <code>F ≈ 836.5 × (V<sub>LC</sub> − 0.069)</code>." },
        { label: "IR detection", html: "Sharp GP2Y0A21YK0F fitted as <code>d = 24 / V<sub>IR</sub></code>, triggering strictly between 10–15 cm (avoiding close-range fold-back and failing safe on disconnected wires)." },
        { label: "Safety", html: "software E-Stop sets 2.5 V stop and resets the myRIO, manual Force Stop override is always available, and because the T8 screw/34:1 gearbox self-locks, jaws are opened via Manual Mode rather than forced by hand." }
      ]
    },
    calculations: {
      heading: "Design calculations",
      thrustHeading: "1. Axial screw thrust",
      thrustIntro: "From standard power-screw mechanics (Budynas & Nisbett 2020) with T = 0.8 N·m, N = 56 rpm, quad-start T8 lead L = 8 mm (2 mm pitch × 4 starts), and assumed steel-on-bronze friction μ = 0.19 (lead angle α = 14.32°, friction angle φ = 10.76°, efficiency η = 0.588):",
      thrustNote: "Note: correcting our preliminary 2 mm pitch vs 8 mm lead error updated both thrust and closing speed by a factor of four. Friction μ carries the largest model uncertainty.",
      linkageHeading: "2. Bell-crank force transfer",
      linkageIntroHtml: "Starting from a 30.27 mm closed datum, 36.5 mm of nut travel opens the jaws to 95 mm in CAD. Both 5 mm Excel increments from SolidWorks and the analytical virtual-work ratio <code>q = 2(y<sub>J</sub> − y<sub>P</sub>)a / (r<sub>1</sub>² sin²φ)</code> show a 35% drop in mechanical advantage from open to closed. Because the egg sits near the closed end, the minimum closed force (<strong>121.9 N/finger</strong>) governs capability:",
      speedHeading: "3. Speed, brief check & finger stress",
      speedBody: "Private load-cell tests reached 60–80 N without cracking the PLA arms before manual shutoff. Full-stroke closing took 7–8 s physically because automatic PID output was clamped to 40% speed to curb filter-lag overshoot.",
      measuredHeading: "4. Calculated vs measured",
      relatedHeading: "Related calculator",
      relatedBody: "Test how thread pitch, starts, and friction affect screw efficiency and self-locking directly."
    },
    design: {
      heading: "CAD & mechanical layout",
      p1: "After ruling out rotational geared jaws and dual racks, we built the T8 lead-screw bell-crank layout across 15 printed parts on a Bambu Lab X1C (0.20 mm layers, 4 perimeters, 20% gyroid infill). Both finger carriages slide on twin 6 mm aluminium guide rods rather than plastic tracks, whilst six 608ZZ bearings roll inside the bell-crank slots (upper and lower arms mirrored around the frame) to minimise sliding friction. The brass flange nut mounts into a square recessed block with four evenly tightened M3 bolts.",
      p2: "All structural parts were printed flat with 3 mm root fillets and ~0.20 mm bearing pin clearance. During assembly, the 6 mm guide-rod bores were hand-reamed for smooth glide, the Finger 2 pad was printed in TPU behind the TAS606 load cell, and the sheared PLA coupler was reprinted in PA-6 nylon.",
      simHeading: "Interactive mechanism demonstration",
      simIntro: "Drag the stroke and geometry sliders below to inspect how nut position drives jaw opening and virtual-work force transfer in real time.",
      simCaption: "Adjust stroke and geometry sliders to inspect bell-crank kinematics and instantaneous force transfer.",
      buildHeading: "Manufacture & assembly",
      build1Cap: "Printed parts laid out before assembly",
      build1Lightbox: "All 15 printed components laid out before assembly.",
      build2Cap: "Sub-assembly of jaws, bearings, and lead screw",
      build2Lightbox: "Sub-assembly showing split bearing pins, 608ZZ bearings, and brass flange nut on four M3 screws.",
      elecHeading: "Electronics & LabVIEW debugging",
      elecBody: "All I/O runs through myRIO Connector B: TAS606 load cell on B/AI0, Sharp IR sensor on B/AI1 via soldered JST lead, encoder A/B on digital inputs, and 0–5 V motor command on B/AO0 to the Sabertooth 2x5 (2.5 V stop). Two hardware faults initially masqueraded as LabVIEW bugs: a dead Sharp IR unit (resolved by swapping sensors) and the motor slipping inside its friction-fit housing (fixed with superglue for testing)."
    },
    final: {
      heading: "Working demonstration",
      videoCaptionHtml: "<strong>Demo:</strong> egg enters the 10–15 cm IR window, PID closes the jaws, and the 15 N override halts at 13.4 N without slipping under pull testing. Reopening required manual LabVIEW input.",
      final1Cap: "Jaws open (105 mm)",
      final1Lightbox: "Completed gripper at its measured 105 mm opening, wired to the myRIO and Sabertooth driver.",
      final2Cap: "Holding the egg (13.4 N)",
      final2Lightbox: "Holding the artificial egg at 13.4 N against a 15 N threshold.",
      resultsHeading: "Test results",
      issuesHeading: "Unresolved issue & modelled vs measured gap",
      autoReopenHtml: "<strong>Auto-reopen failure:</strong> Lecturers confirmed the LabVIEW logic worked properly, pointing to an optical cause. Once closed, the Sharp IR beam clipped the inner edges of the jaws inside the 10–15 cm window, so the boolean never cleared. Moving or angling the sensor forward of the jaws fixes this.",
      openingGapHtml: "<strong>95 mm CAD vs 105 mm actual opening:</strong> Winding the screw manually to thread end before power-up plus bearing/reamed clearances gave ~40 mm nut travel instead of 36.5 mm, helping us pass the ≥ 100 mm spec.",
      takeawaysHeading: "Key takeaways & next improvements",
      takeawaysList: [
        { label: "Check the right end of the stroke", text: "closed-end force (121.9 N) governs capability, whilst open-end force (164.8 N) governs PLA stall stress." },
        { label: "Verify thread parameters early", text: "fixing pitch (2 mm) vs lead (8 mm) shifted force and speed by 4×." },
        { label: "Filter lag trades off speed", text: "moving-average smoothing stopped false triggers, however required capping speed to 40% to avoid overshoot." },
        { label: "Next revision", text: "relocate the IR sensor forward, replace the glued motor cage and nylon coupler with M3 face mounts and an aluminium jaw coupler, and add a LabVIEW latch plus PID anti-windup on force stop." }
      ],
      downloadsHeading: "Downloads"
    }
  },

  /* ==========================================================================
     PROJECT: ROBOT ARM CALCULATOR CASE STUDY (projects/robot-arm.html)
     ========================================================================== */
  robotArm: {
    title: "Robot Arm Load & Link-Length Calculator",
    lede: "An offline browser tool answering two sizing questions for a serial robot arm: how much can this geometry lift, and how long can the links be for a target payload? It evaluates bending stress, actuator torque, and tip deflection together and names whichever limit binds first.",
    meta: {
      role: "Engineering model, UI, and vanilla JS/SVG implementation",
      context: "Personal 3-DOF 3D-printed robotic arm build and RMIT Rover arm analysis"
    },
    liveHeading: "Live tool",
    liveIntroHtml: "Adjust any slider or dropdown below to recalculate all joint limits, tables, and scaled SVG diagrams immediately. Use the <strong>Info</strong> buttons for quick definitions without leaving the calculator.",
    liveCaptionHtml: "Try switching to <strong>2. Find link lengths</strong>, setting a payload, and swapping joint J1 from a DS3225 to an MG996R to watch the reach drop.",
    whyHeading: "Why I built it",
    whyIntro: "Hobby robot arms often fail after printing because three coupled effects get ignored during rough sizing:",
    whyList: [
      { label: "Coupled chain loads", text: "every joint carries everything outboard of it, so wrist mass penalises every joint underneath." },
      { label: "Stall torque vs working torque", text: "servo kg·cm ratings are stall figures at maximum current and heat, not continuous working capacity." },
      { label: "Stiffness governs printed links", text: "plastic links sag out of tolerance long before yielding, and each link's end slope compounds down the chain." }
    ],
    modelHeading: "Engineering model",
    modelIntro: "The arm is evaluated in its worst-case pose (fully extended horizontally) against three independent checks, with the smallest limit governing:",
    modelList: [
      { label: "1. Bending stress", html: "six solid and hollow cross-sections checked against <code>Z × yield × k / FoS</code>, where <code>k</code> accounts for FDM print anisotropy." },
      { label: "2. Actuator torque", html: "available torque equals <code>rated × qty × derate × gear ratio × η</code>, defaulting to a 0.50 derate so stall ratings are never treated as working limits." },
      { label: "3. Tip deflection", text: "each link is solved as a cantilever under tip force, outboard moment, and self-weight, summing local sag plus carried slope across all joints." }
    ],
    decisionsHeading: "Key design decisions",
    decisionsList: [
      { label: "Automatic component mass", html: "selecting a motor for joint J<sub>i+1</sub> places its mass at the distal end of link <em>i</em> automatically (J1 sits on the base and does not load the arm)." },
      { label: "Two solve directions", text: "Mode 1 evaluates payload for fixed links, whilst Mode 2 bisects total reach until worst utilisation hits 1.00." },
      { label: "Payload CoG offset", text: "adds grip overhang to every joint's lever arm, making its torque penalty obvious." },
      { label: "Zero dependencies", text: "inline SVG diagrams, CSV export, and URL-hash state sharing work completely offline." }
    ],
    limitationsHeading: "Limitations",
    limitationsIntro: "Idealised Euler-Bernoulli beam theory in one static pose excludes:",
    limitationsList: [
      "Joint stress concentrations, fastener pull-out, and servo horn/shaft strength.",
      "Torsion during base slewing and buckling of compression linkages.",
      "Gearbox backlash, bearing play, PLA creep, and thermal softening near warm motors.",
      "End-effector grip force (handled separately by the gripper tools)."
    ],
    limitationsNote: "Built-in actuator ratings are indicative class values, not datasheet guarantees.",
    validationHeading: "Validation plan",
    validationList: [
      "Hang known test masses in the horizontal pose and measure tip droop with a dial indicator.",
      "Back-calculate the real print knockdown factor k from measured stiffness.",
      "Hold a loaded pose for one hour to quantify PLA/PETG creep.",
      "Verify final joint geometry and fastener stress concentrations in FEA."
    ],
    skillsHeading: "Skills demonstrated",
    skills: [
      "Mechanics of materials",
      "Beam deflection & superposition",
      "Actuator sizing",
      "Numerical bisection",
      "Vanilla JS & SVG"
    ]
  },

  /* ==========================================================================
     TOOL: LEAD SCREW CALCULATOR (tools/lead-screw-calculator.html)
     ========================================================================== */
  leadScrewTool: {
    title: "Lead screw & lead nut calculator",
    lede: "Estimate power-screw efficiency, self-locking margin, and back-driving torque from thread geometry, materials, and lubrication. Friction coefficients are indicative only, so confirm against supplier datasheets for safety-critical designs.",
    fig1CaptionHtml: "One revolution unwrapped at d<sub>m</sub>. The load back-drives only when lead angle λ exceeds friction angle ρ.",
    fig2Caption: "Axial section relating lead, pitch, and mean diameter.",
    fig3Caption: "Shaded zone = self-locking (λ < ρ, forward efficiency < 50%).",
    safetyHeading: "Safety note",
    safetyBody: "Friction shifts with wear, speed, temperature, and lubrication. Never rely on thread self-locking alone for suspended loads, always include an independent brake or fail-safe."
  },

  /* ==========================================================================
     TOOL: GRIPPER MECHANISM SIMULATOR (tools/gripper-mechanism.html)
     ========================================================================== */
  gripperSimTool: {
    title: "Lead-screw bell-crank gripper",
    lede: "Datum y = 0 sits at the lead-screw base connector (positive upwards). Adjust stroke, drive, and linkage geometry to inspect bell-crank kinematics and virtual-work jaw force.",
    forceHeading: "How force is calculated",
    forceSteps: [
      { label: "Torque → nut force", text: "axial thrust from screw torque, lead, and efficiency η." },
      { label: "Virtual work", html: "for symmetric jaws, <code>F_tip / F_nut = 1 / |q|</code>." },
      { label: "Grip length", html: "offset contact creates carriage bending moment <code>F_tip · e</code> without reducing ideal horizontal force." },
      { label: "Contact only", text: "displayed force is available capacity at that opening, applied only once touching an object." }
    ],
    forceNote: "Rigid-body estimate excluding motor torque-speed curves, deflection, and measured friction."
  },

  /* ==========================================================================
     TOOL: ARM ACTUATOR CALCULATOR (tools/armActuatorCalculation.html)
     ========================================================================== */
  armCalcTool: {
    title: "Arm Payload & Actuator Calculator",
    subtitle: "Bending · derated torque · deflection with 20-actuator database",
    linksHintHtml: "Actuator mass for joint J<sub>i+1</sub> sits at the distal end of link i automatically. Base actuator J1 is carried by the base.",
    dynHintHtml: "Computed with K<sub>d</sub> = 1 to avoid double-counting against the static factor.",
    actHint: "Available torque = rated × qty × derate × gear ratio × η. Hobby servo kg·cm values are stall ratings.",
    disclaimer: "Idealised Euler-Bernoulli beam model in the horizontal worst-case pose. Ignores joint stress concentrations, fastener pull-out, horn strength, torsion, creep, and backlash. Verify load-bearing parts with FEA and physical tests.",
    help: {
      mode:  ["Solve mode", "Mode 1 fixes link lengths and computes max payload. Mode 2 fixes payload and bisects total reach until worst utilisation hits 1.00."],
      glob:  ["Global factors", "Derate (0.4–0.5 servos, 0.6–0.8 steppers), FoS (3–4 FDM, 2.5 metal), print knockdown k (0.55–0.7 FDM), dynamic factor Kd, efficiency η, and tip deflection budget."],
      links: ["Links & joints", "Expand any link card to edit actuator, material, cross-section, length/share, and distal mass. Joint 1 carries everything outboard of it."],
      ee:    ["End effector", "Gripper/tooling mass acts at the far tip. Payload CoG offset adds extra lever arm to every joint."],
      dyn:   ["Dynamics check", "Adds rotational inertia torque T = J·α for target slew speed ω and ramp time ta, using Kd = 1 for an independent cross-check."],
      diag:  ["Scaled diagram", "Worst-case horizontal pose. Section heights and lengths are to scale, droop is magnified visually, purple blocks show lumped masses, dashed purple marks your deflection budget."],
      res:   ["Results", "Practical payload is the lesser of strength/torque limit and deflection limit. Worst utilisation = 1.00 means sitting right on the allowable limit."],
      act:   ["Actuator schedule", "Lists rated torque, usable derated torque, gravity demand, utilisation bar, mass, travel range, and no-load speed for each joint plus the gripper."],
      mb:    ["Mass budget", "Splits structure, carried actuators/brackets, and end effector from the base actuator J1 (which sits on the base and does not load the arm)."],
      joint: ["Per-joint breakdown", "Shows bending and torque utilisation, demand vs capacity (N·m), per-joint payload limit, local droop, natural frequency fn, and binding constraint."],
      adv:   ["Design advice", "Highlights the governing joint and practical engineering checks (PLA creep, stall current, gearing, CoG offset, natural frequency)."]
    }
  },

  /* ==========================================================================
     TOOL: ARM CALCULATOR METHOD GUIDE (tools/armToolExplanation.html)
     ========================================================================== */
  armMethodTool: {
    title: "Robot Arm Calculator - Method & Excel Spec",
    lede: "The underlying beam model and copy-paste Excel specification behind the browser tool. Tab 1 solves maximum payload for fixed links, whilst Tab 2 solves maximum link lengths for a fixed payload.",
    approachHeading: "1. Modelling approach",
    approachBodyHtml: "Each joint carries the full weight and moment of everything outboard of it. The model evaluates the <strong>worst-case pose</strong> (fully extended horizontally) against three independent checks: <strong>bending stress</strong>, <strong>actuator torque</strong>, and <strong>tip deflection</strong>. The smallest limit governs (stiffness usually fails first on printed arms).",
    approachCaptionHtml: "Worst-case horizontal pose showing reach S<sub>i</sub>, link weights m<sub>i</sub>g, and distal component masses P<sub>i</sub>.",
    flowHeading: "2. Constraint logic",
    materialsHeading: "3. Material reference table (Tab 1, rows 40–45)",
    materialsBody: "In-plane (XY) reference figures for FDM parts. Replace with measured coupon values before trusting load-critical numbers.",
    sectionsHeading: "4. Cross-sections",
    sectionsBodyHtml: "Stiffness scales with <strong>h³</strong> in bending, so taller hollow tubes deliver far more stiffness per gram than solid bars.",
    tab1Heading: "5. Tab 1 \"Load Limit\" (Excel formulas)",
    tab1LinksHtml: "Link inputs go in <strong>rows 12–17</strong>: A (link #), B (length L), C (material), D (section), E (D or b), F (h), G (wall t), P (distal lump kg), Q (motor torque N·m), R (gear ratio). Section dropdown list:",
    tab2Heading: "6. Tab 2 \"Link Lengths for Load\" (Goal Seek)",
    tab2BodyHtml: "Drive all link lengths from one solver variable (total reach in <code>B10</code>) via proportional length shares in column <code>AH</code>, then run <strong>Data → What-If Analysis → Goal Seek</strong> to set worst utilisation <code>B15</code> to <code>1</code> by changing <code>B10</code>.",
    extraHeading: "7. Additional engineering checks",
    extraList: [
      { label: "Dynamics", html: "\\(J = \\tfrac{1}{3}mL^2 + \\sum m_{distal}d^2\\), \\(T_{req} = T_{gravity} + J\\alpha + T_{friction}\\). Check RMS torque against continuous ratings." },
      { label: "Natural frequency", html: "\\(f_n \\approx \\frac{1}{2\\pi}\\sqrt{\\frac{3EI}{mL^3}}\\). Keep commanded motion below ~0.2 f<sub>n</sub>." },
      { label: "Buckling & torsion", html: "\\(P_{cr} = \\pi^2 EI / (KL)^2\\) for compression linkages, \\(\\tau = Tr / J_p\\) during base slewing." },
      { label: "FDM practice", text: "print links flat along their length with 4+ perimeters, derate PLA to ~40% for held poses (or use PETG/ASA), and use heat-set inserts at joints." },
      { label: "Accuracy & safety", text: "include gearbox backlash, payload CoG overhang, E-stop, and power-off holding behaviour." }
    ],
    checklistHeading: "8. Validation checklist",
    checklist: [
      { title: "Dead-weight test", html: "Hang known masses in the horizontal pose and back-calculate real <code>k</code> from dial-indicator droop." },
      { title: "Joint FEA", text: "Check bolt holes, fillets, and bearing seats where beam theory ignores stress concentrations." },
      { title: "Thermal & creep check", html: "Hold a loaded pose for one hour and check temperature beside motors against T<sub>g</sub>." }
    ]
  }
};
