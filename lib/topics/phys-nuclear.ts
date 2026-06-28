import type { Topic } from "../types";

export const physNuclear: Topic = {
  id: "phys-nuclear",
  title: "Nuclear Physics",
  subject: "physics",
  icon: "☢️",
  blurb: "The nuclear atom, radioactivity, half-life, decay equations and safety.",
  intro:
    "Inside every atom sits a tiny, dense nucleus packed with protons and neutrons — a discovery that overturned the plum-pudding model and revealed a hidden world of spontaneous decay. In this topic you will build the nuclear model from scattering evidence, master the three types of ionising radiation, write and balance decay equations, calculate half-lives from data and graphs, and evaluate the uses and hazards of radioactivity that shape medicine, power generation and environmental science.",

  // ─── STUDY GUIDE ──────────────────────────────────────────────────────────
  guide: [
    // ── Section 1 ──────────────────────────────────────────────────────────
    {
      heading: "The Nuclear Model of the Atom",
      body:
        'Before 1911 most physicists pictured the atom as J. J. Thomson\'s **plum-pudding model** — a diffuse blob of positive charge studded with electrons.\n\n**Geiger–Marsden (Rutherford) scattering experiment:** A thin gold foil was bombarded with alpha particles from a radioactive source. A zinc-sulfide detector screen, able to rotate around the foil, recorded flashes wherever alphas struck.\n\n- Most alpha particles passed **straight through** with little deflection.\n- A small fraction were deflected through **large angles** (> 90°).\n- A tiny fraction — about 1 in 8 000 — **bounced almost straight back** (angle ≈ 180°).\n\nThese observations could not be explained by the plum-pudding model. Rutherford concluded:\n\n- The atom is **mostly empty space** (most particles pass through).\n- Almost all the mass and **all the positive charge** is concentrated in a **tiny central nucleus** (large-angle scattering and back-scatter).\n- Electrons **orbit the nucleus** at relatively large distances.\n\nModern nuclear model values: nuclear diameter ≈ 10⁻¹⁴ m; atomic diameter ≈ 10⁻¹⁰ m — the nucleus is about 10 000 times smaller than the atom.',
      diagrams: [
        {
          caption: "Rutherford scattering experiment — most particles pass through; a few are deflected",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Rutherford alpha-particle scattering diagram showing gold foil, nucleus and particle paths">\n  <!-- Gold foil -->\n  <rect x="148" y="20" width="8" height="160" fill="#fbbf24" opacity="0.5" rx="2"/>\n  <text x="160" y="105" font-size="9" fill="#fbbf24" font-family="sans-serif">Gold foil</text>\n  <!-- Nucleus -->\n  <circle cx="152" cy="100" r="5" fill="#fb7185"/>\n  <text x="162" y="90" font-size="9" fill="#fb7185" font-family="sans-serif">Nucleus</text>\n  <!-- Straight-through paths -->\n  <line x1="20" y1="60" x2="290" y2="60" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 2"/>\n  <line x1="20" y1="80" x2="290" y2="80" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 2"/>\n  <line x1="20" y1="120" x2="290" y2="120" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 2"/>\n  <line x1="20" y1="140" x2="290" y2="140" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 2"/>\n  <!-- Small deflection path -->\n  <polyline points="20,100 148,100 200,115 290,130" stroke="#34d399" stroke-width="1.5" fill="none" stroke-dasharray="4 2"/>\n  <!-- Large deflection path -->\n  <polyline points="20,98 148,100 130,60 80,30" stroke="#fbbf24" stroke-width="2" fill="none"/>\n  <!-- Back-scatter path -->\n  <polyline points="20,102 148,100 100,100 30,102" stroke="#fb7185" stroke-width="2" fill="none"/>\n  <!-- Source label -->\n  <text x="5" y="105" font-size="9" fill="#b7bce0" font-family="sans-serif">alpha source</text>\n  <!-- Legend -->\n  <line x1="200" y1="170" x2="220" y2="170" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 2"/>\n  <text x="223" y="174" font-size="8" fill="#b7bce0" font-family="sans-serif">undeflected</text>\n  <line x1="200" y1="182" x2="220" y2="182" stroke="#fbbf24" stroke-width="2"/>\n  <text x="223" y="186" font-size="8" fill="#b7bce0" font-family="sans-serif">large deflection / back-scatter</text>\n</svg>',
        },
      ],
      keyPoints: [
        "The nucleus is tiny (≈10⁻¹⁴ m) relative to the atom (≈10⁻¹⁰ m) — the atom is mostly empty space.",
        "The nucleus contains protons (positive) and neutrons (neutral); electrons orbit outside.",
        "Alpha-particle back-scatter proved the nucleus is dense and positively charged.",
        "The plum-pudding model predicted only tiny deflections — it could not account for large-angle scattering.",
        "The repulsive Coulomb force between the positive nucleus and positive alpha particles causes deflection.",
      ],
      discovery: {
        problem:
          "Imagine firing bullets at a sheet of tissue paper. Nearly all go straight through, but very rarely one bounces back at you. What does this tell you about the internal structure of the paper?",
        idea:
          "The paper must be mostly empty — so bullets pass through easily — but contain rare tiny, hard, dense regions that can reverse a bullet's momentum completely. Rutherford applied exactly this logic to atoms: the rare back-scatter of alpha particles demanded a tiny, dense, positively charged nucleus.",
      },
      whyItWorks:
        "An alpha particle (charge +2e) approaching the nucleus (charge +Ze) experiences a repulsive Coulomb force F = kq₁q₂/r². As r decreases, F increases sharply. A head-on collision with the nucleus brings the alpha momentarily to rest and reverses it. Because the nucleus is so small, the probability of a near-head-on approach is tiny — matching the observed ~1-in-8000 back-scatter rate.",
    },

    // ── Section 2 ──────────────────────────────────────────────────────────
    {
      heading: "Proton Number, Nucleon Number and Isotopes",
      body:
        "**Proton number (Z)** — the number of protons in the nucleus. It defines which element the atom is. Also called the **atomic number**.\n\n**Nucleon number (A)** — the total number of protons AND neutrons in the nucleus. Also called the **mass number**.\n\n**Neutron number (N) = A − Z.**\n\n**Nuclide notation** (standard representation):\n\n`ᴬᴢX`  where X is the chemical symbol, A is on top, Z is on the bottom.\n\nExamples:\n- ²³⁸₉₂U — uranium-238: 92 protons, 238 − 92 = 146 neutrons\n- ¹⁴₆C — carbon-14: 6 protons, 8 neutrons\n- ⁴₂He — helium-4 (an alpha particle): 2 protons, 2 neutrons\n\n**Isotopes** are atoms of the **same element** (same Z) with **different numbers of neutrons** (different A). They have identical chemical properties (same electron arrangement) but different nuclear masses and stabilities.\n\nExamples of isotopes: carbon-12 (¹²₆C) and carbon-14 (¹⁴₆C); uranium-235 and uranium-238.",
      keyPoints: [
        "Z (proton number) = number of protons; defines the element.",
        "A (nucleon number) = protons + neutrons.",
        "Neutron number N = A − Z.",
        "Isotopes: same Z, different A (and different N); same chemistry, different nuclear stability.",
        "Nuclide notation: symbol with A superscript top-left, Z subscript bottom-left.",
      ],
      strategies: ["Read A and Z directly from nuclide notation; compute N = A − Z."],
      thinkDeeper:
        "Most elements have several stable isotopes. Carbon has two stable isotopes (¹²C and ¹³C) and one radioactive isotope (¹⁴C). Why might adding more neutrons beyond a certain point make the nucleus unstable? (Hint: think about the balance between the nuclear strong force, which is very short range, and the repulsive electrostatic force between protons.)",
    },

    // ── Section 3 ──────────────────────────────────────────────────────────
    {
      heading: "Types of Nuclear Radiation",
      body:
        "Unstable nuclei emit **ionising radiation** as they decay towards stability. There are three main types:\n\n**Alpha (α) radiation**\n- Nature: a helium nucleus — 2 protons + 2 neutrons (⁴₂He)\n- Charge: +2\n- Relative mass: 4\n- Range in air: a few centimetres\n- Stopped by: a sheet of **paper** (or a few cm of air)\n- Ionising ability: **very high** (strips electrons from many atoms per unit path)\n- Deflection in fields: deflected (positive) — same direction as protons\n\n**Beta (β) radiation**\n- Nature: a fast-moving **electron** emitted from the nucleus when a neutron converts to a proton\n- Charge: −1\n- Relative mass: ~1/2000 (negligible)\n- Range in air: up to about 1 m\n- Stopped by: a few mm of **aluminium** (or similar metal)\n- Ionising ability: **moderate**\n- Deflection in fields: deflected (negative) — opposite direction to alpha\n\n**Gamma (γ) radiation**\n- Nature: **electromagnetic wave** (very high frequency/short wavelength photon)\n- Charge: 0\n- Relative mass: 0\n- Range in air: effectively unlimited (intensity follows inverse-square law)\n- Stopped by: several cm of **lead** or several metres of **concrete**\n- Ionising ability: **low**\n- Not deflected by electric or magnetic fields (no charge)\n\n**Background radiation** is the low-level ionising radiation present everywhere from natural and artificial sources:\n- **Radon gas** (from rocks/soil) — largest contributor in most countries (~50%); a radioactive gas that seeps from the ground and collects in buildings\n- **Rocks and building materials** (e.g., granite) — contain uranium, thorium and their decay products\n- **Cosmic rays** — high-energy particles from space; higher at altitude/in aircraft\n- **Food and drink** — small amounts of potassium-40 and carbon-14 taken in by all living things\n- **Medical** — X-rays and radiotherapy (the largest artificial source)\n- **Nuclear power/weapons fallout** — a very small fraction\n\nMost background radiation is **natural** (radon, rocks, cosmic rays, food); only a small part is **artificial** (mainly medical). When measuring a source you must first record the **background count rate** with no source present, then **subtract** it from every reading to obtain the **corrected count rate** — the count due to the source alone.\n\n**Detecting radiation:**\n\n- **Geiger–Müller (GM) tube** connected to a counter or ratemeter. Radiation entering the tube ionises the low-pressure gas inside; the freed charges trigger a brief pulse of current that the counter registers as a 'count'. The **count rate** (counts per second or per minute) measures how much radiation is arriving. A GM tube is the standard way to measure activity in IGCSE experiments.\n- **Photographic film** darkens (fogs) when exposed to ionising radiation. The amount of darkening indicates the dose received, so film is used in the **film badges** worn by radiation workers to monitor their cumulative exposure.\n- A **cloud chamber** or **spark counter** can also reveal the tracks of ionising particles.\n\n**Activity** is the number of nuclear decays per second, measured in **becquerel (Bq)**, where 1 Bq = 1 decay per second. In the lab we usually measure the related **count rate** on a GM tube; like activity, the count rate halves every half-life.",
      diagrams: [
        {
          caption: "Penetrating power of alpha, beta and gamma radiation through different materials",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Penetrating power diagram showing alpha stopped by paper, beta by aluminium, gamma partially absorbed by lead">\n  <!-- Source -->\n  <rect x="10" y="80" width="30" height="40" rx="4" fill="#a78bfa" opacity="0.8"/>\n  <text x="25" y="104" text-anchor="middle" font-size="9" fill="#eef0ff" font-family="sans-serif">Source</text>\n  <!-- Paper barrier -->\n  <rect x="60" y="30" width="6" height="140" fill="#fbbf24" opacity="0.7" rx="1"/>\n  <text x="63" y="22" text-anchor="middle" font-size="8" fill="#fbbf24" font-family="sans-serif">Paper</text>\n  <!-- Aluminium barrier -->\n  <rect x="120" y="30" width="12" height="140" fill="#38bdf8" opacity="0.6" rx="1"/>\n  <text x="126" y="22" text-anchor="middle" font-size="8" fill="#38bdf8" font-family="sans-serif">Aluminium</text>\n  <!-- Lead barrier -->\n  <rect x="200" y="30" width="24" height="140" fill="#fb7185" opacity="0.5" rx="1"/>\n  <text x="212" y="22" text-anchor="middle" font-size="8" fill="#fb7185" font-family="sans-serif">Lead</text>\n  <!-- Alpha path — stopped at paper -->\n  <line x1="40" y1="90" x2="60" y2="90" stroke="#fbbf24" stroke-width="2"/>\n  <text x="43" y="85" font-size="8" fill="#fbbf24" font-family="sans-serif">alpha</text>\n  <circle cx="62" cy="90" r="3" fill="#fbbf24"/>\n  <!-- Beta path — stopped at aluminium -->\n  <line x1="40" y1="100" x2="66" y2="100" stroke="#34d399" stroke-width="2"/>\n  <line x1="66" y1="100" x2="120" y2="100" stroke="#34d399" stroke-width="2"/>\n  <text x="43" y="115" font-size="8" fill="#34d399" font-family="sans-serif">beta</text>\n  <circle cx="122" cy="100" r="3" fill="#34d399"/>\n  <!-- Gamma path — attenuated through all, exits reduced -->\n  <line x1="40" y1="110" x2="66" y2="110" stroke="#a78bfa" stroke-width="2"/>\n  <line x1="66" y1="110" x2="132" y2="110" stroke="#a78bfa" stroke-width="2"/>\n  <line x1="132" y1="110" x2="224" y2="110" stroke="#a78bfa" stroke-width="2"/>\n  <line x1="224" y1="110" x2="300" y2="110" stroke="#a78bfa" stroke-width="1" stroke-dasharray="4 2"/>\n  <text x="43" y="125" font-size="8" fill="#a78bfa" font-family="sans-serif">gamma</text>\n  <text x="255" y="106" font-size="8" fill="#a78bfa" font-family="sans-serif">reduced</text>\n  <!-- Labels bottom -->\n  <text x="63" y="185" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">stops alpha</text>\n  <text x="126" y="185" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">stops beta</text>\n  <text x="212" y="185" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">reduces gamma</text>\n</svg>',
        },
        {
          caption: "Deflection of alpha and beta in a magnetic field (gamma undeflected)",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram showing alpha particles deflecting upward and beta particles deflecting downward in a magnetic field, gamma going straight">\n  <!-- Field region label -->\n  <rect x="100" y="10" width="120" height="180" fill="#38bdf8" opacity="0.07" rx="4"/>\n  <text x="160" y="25" text-anchor="middle" font-size="9" fill="#38bdf8" font-family="sans-serif">Magnetic field (into page)</text>\n  <!-- Source -->\n  <rect x="60" y="90" width="30" height="30" rx="4" fill="#a78bfa" opacity="0.8"/>\n  <text x="75" y="108" text-anchor="middle" font-size="9" fill="#eef0ff" font-family="sans-serif">Source</text>\n  <!-- Alpha path curves upward -->\n  <path d="M 90 105 Q 160 80 220 55" stroke="#fbbf24" stroke-width="2" fill="none"/>\n  <text x="230" y="52" font-size="9" fill="#fbbf24" font-family="sans-serif">alpha (+2)</text>\n  <!-- Beta path curves downward -->\n  <path d="M 90 105 Q 160 125 220 150" stroke="#34d399" stroke-width="2" fill="none"/>\n  <text x="230" y="154" font-size="9" fill="#34d399" font-family="sans-serif">beta (-1)</text>\n  <!-- Gamma straight -->\n  <line x1="90" y1="105" x2="270" y2="105" stroke="#a78bfa" stroke-width="2" stroke-dasharray="5 3"/>\n  <text x="272" y="109" font-size="9" fill="#a78bfa" font-family="sans-serif">gamma (0)</text>\n  <!-- x symbols for field into page -->\n  <text x="115" y="50" font-size="12" fill="#38bdf8" opacity="0.5" font-family="sans-serif">x</text>\n  <text x="145" y="50" font-size="12" fill="#38bdf8" opacity="0.5" font-family="sans-serif">x</text>\n  <text x="175" y="50" font-size="12" fill="#38bdf8" opacity="0.5" font-family="sans-serif">x</text>\n  <text x="205" y="50" font-size="12" fill="#38bdf8" opacity="0.5" font-family="sans-serif">x</text>\n  <text x="115" y="75" font-size="12" fill="#38bdf8" opacity="0.5" font-family="sans-serif">x</text>\n  <text x="145" y="75" font-size="12" fill="#38bdf8" opacity="0.5" font-family="sans-serif">x</text>\n  <text x="175" y="75" font-size="12" fill="#38bdf8" opacity="0.5" font-family="sans-serif">x</text>\n  <text x="205" y="75" font-size="12" fill="#38bdf8" opacity="0.5" font-family="sans-serif">x</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Alpha: helium nucleus (+2), stopped by paper, very high ionisation — most dangerous if ingested.",
        "Beta: fast electron (−1), stopped by aluminium, moderate ionisation.",
        "Gamma: EM wave (0 charge), only reduced by lead/concrete, low ionisation but high penetration.",
        "Only charged particles (alpha, beta) are deflected by electric and magnetic fields; alpha and beta bend in opposite directions because their charges have opposite signs.",
        "Background radiation comes mainly from natural sources (radon gas, rocks, cosmic rays, food) with a smaller artificial contribution (mainly medical).",
        "Radiation is detected with a Geiger–Müller tube (gives a count rate) or photographic film (used in workers' film badges).",
        "Always subtract the background count rate to get the corrected count rate due to the source alone.",
        "Activity (decays per second) is measured in becquerel (Bq); 1 Bq = 1 decay per second.",
      ],
      strategies: [
        "Charge tells you deflection direction: in the same field, alpha (+) deflects one way, beta (−) deflects the opposite way, gamma (0) goes straight.",
        "Beta deflects far MORE than alpha in the same field: beta has a much smaller mass, so the same-size force produces a much bigger deflection.",
        "Memory hook for penetrating power: P-A-L — Paper stops alpha, Aluminium stops beta, Lead reduces gamma.",
        "Identify an unknown source by absorption: if paper stops it → alpha; if aluminium stops it → beta; if it passes through aluminium → gamma.",
      ],
      thinkDeeper:
        "Alpha radiation is the most ionising yet the least penetrating — these facts are connected. Because alpha particles cause so many ionisations per millimetre, they lose energy quickly, so their range is short. Inside the body, however, this makes them the most damaging type — all their energy is deposited in a tiny region of tissue.",
    },

    // ── Section 4 ──────────────────────────────────────────────────────────
    {
      heading: "Radioactive Decay and Nuclear Equations",
      body:
        "**Radioactive decay is random and spontaneous.**\n- **Random**: it is impossible to predict which particular nucleus will decay next, or when.\n- **Spontaneous**: decay is not triggered by external conditions (temperature, pressure, chemical state have no effect).\n\nIn every nuclear equation, two quantities are conserved:\n1. **Nucleon number (A)** — the sum of nucleon numbers on each side must be equal.\n2. **Proton number (Z)** — the sum of proton numbers on each side must be equal.\n\n**Alpha decay** — the nucleus emits a ⁴₂He nucleus; A decreases by 4, Z decreases by 2:\n\n`ᴬᴢX → ᴬ⁻⁴ᴢ₋₂Y + ⁴₂He`\n\nExample — radium-226 decays to radon-222:\n`²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He`\n\nCheck: nucleon numbers 226 = 222 + 4 ✓ ; proton numbers 88 = 86 + 2 ✓\n\n**Beta decay** — a neutron in the nucleus converts to a proton, emitting a fast electron (β⁻). A stays the same, Z increases by 1:\n\n`ᴬᴢX → ᴬᴢ₊₁Y + ⁰₋₁e`\n\nExample — carbon-14 decays to nitrogen-14:\n`¹⁴₆C → ¹⁴₇N + ⁰₋₁e`\n\nCheck: nucleon numbers 14 = 14 + 0 ✓ ; proton numbers 6 = 7 + (−1) ✓\n\n**Gamma emission** often accompanies alpha or beta decay. Because gamma is electromagnetic radiation (a photon with no mass or charge), emitting it does not change A or Z — gamma emission alone produces no new element.\n\n**Writing balanced equations — method:**\n1. Write the known nuclide and radiation type.\n2. Write the daughter nuclide with unknown A and Z as letters.\n3. Use conservation: (A left) = (A right); (Z left) = (Z right).\n4. Solve for the unknowns; identify the element from Z using the periodic table.",
      keyPoints: [
        "Decay is random (unpredictable per nucleus) and spontaneous (independent of external conditions).",
        "Alpha decay: A − 4, Z − 2; beta decay: A unchanged, Z + 1.",
        "Balance equations by conserving both nucleon number (A) and proton number (Z).",
        "Gamma emission alone does not change A or Z — no transmutation.",
        "The daughter element after alpha or beta decay is a different element (different Z).",
      ],
      discovery: {
        problem:
          "A nucleus of bismuth-214 (²¹⁴₈₃Bi) emits an alpha particle. Without looking anything up, determine the nucleon number, proton number and element symbol of the daughter nucleus.",
        idea:
          "Subtract the alpha (A=4, Z=2): new A = 214 − 4 = 210, new Z = 83 − 2 = 81. Element with Z=81 is thallium (Tl). So the daughter is ²¹⁰₈₁Tl. Check: 214 = 210 + 4 ✓; 83 = 81 + 2 ✓.",
      },
      whyItWorks:
        "Conservation of nucleon and proton numbers follows from the fundamental conservation of baryon number and electric charge in nuclear reactions. A proton and neutron each have baryon number +1; an electron has baryon number 0. In beta-minus decay, n → p + e⁻ + antineutrino, baryon number is conserved (1 → 1 + 0) and charge is conserved (0 → +1 + (−1)). These are exact conservation laws, so they provide an infallible method for balancing nuclear equations.",
      strategies: ["Balance-the-equation: set up two simultaneous conservation statements and solve for unknowns."],
    },

    // ── Section 5 ──────────────────────────────────────────────────────────
    {
      heading: "Half-Life",
      body:
        "The **half-life (t½)** of a radioactive isotope is the **time taken for half of the nuclei** in a sample to decay (equivalently, the time for the count rate or activity to fall to half its initial value).\n\nKey features:\n- Half-life is **constant** for a given isotope — it does not depend on sample size, temperature or chemical form.\n- Half-lives range enormously: from microseconds (e.g., ²¹²Po, 0.3 µs) to billions of years (e.g., ²³⁸U, 4.5 × 10⁹ yr).\n\n**Calculations from the fraction remaining:**\n\nAfter each half-life, the number (or count rate) halves:\n\n| Number of half-lives (n) | Fraction remaining |\n|---|---|\n| 0 | 1 |\n| 1 | 1/2 |\n| 2 | 1/4 |\n| 3 | 1/8 |\n| n | 1/2ⁿ |\n\n**Worked example 1:** A sample has an initial count rate of 800 counts/min. The half-life is 5 years. What is the count rate after 15 years?\n- Number of half-lives = 15 ÷ 5 = 3\n- Count rate = 800 × (1/2)³ = 800 × 1/8 = **100 counts/min**\n\n**Worked example 2:** The count rate falls from 640 to 80 counts/min. How many half-lives have elapsed?\n- Ratio = 640/80 = 8 = 2³, so **n = 3 half-lives**.\n\n**Worked example 3 (graph reading):** A decay curve passes through 1000 counts/min at t = 0 and 500 counts/min at t = 6 hours.\n- The count rate has halved once, so 6 hours = one half-life → t½ = **6 hours**.\n- Always check a second pair (e.g. 500 → 250 should also take 6 hours) to confirm.\n\n**Reading half-life from a decay graph:**\nPlot **corrected** count rate (background already subtracted) on the y-axis against time on the x-axis. Start at any count rate C₀ and find the time t₁ when the count rate has fallen to C₀/2. The half-life t½ = t₁ − t₀. For reliability, repeat from a second starting point and average — because decay is random, real data points scatter, so a best-fit smooth curve is drawn before reading values off it.",
      diagrams: [
        {
          caption: "Radioactive decay curve — count rate halves every half-life",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Radioactive decay curve graph showing exponential decrease of count rate over four half-lives">\n  <!-- Axes -->\n  <line x1="40" y1="10" x2="40" y2="170" stroke="#b7bce0" stroke-width="1.5"/>\n  <line x1="40" y1="170" x2="305" y2="170" stroke="#b7bce0" stroke-width="1.5"/>\n  <!-- Y-axis label -->\n  <text x="5" y="90" font-size="9" fill="#b7bce0" font-family="sans-serif" transform="rotate(-90 14 90)">Count rate</text>\n  <!-- X-axis label -->\n  <text x="160" y="192" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">Time</text>\n  <!-- Y tick labels -->\n  <text x="34" y="25" text-anchor="end" font-size="8" fill="#b7bce0" font-family="sans-serif">800</text>\n  <text x="34" y="62" text-anchor="end" font-size="8" fill="#b7bce0" font-family="sans-serif">400</text>\n  <text x="34" y="99" text-anchor="end" font-size="8" fill="#b7bce0" font-family="sans-serif">200</text>\n  <text x="34" y="136" text-anchor="end" font-size="8" fill="#b7bce0" font-family="sans-serif">100</text>\n  <text x="34" y="170" text-anchor="end" font-size="8" fill="#b7bce0" font-family="sans-serif">0</text>\n  <!-- X tick labels (half-life intervals) -->\n  <text x="40" y="183" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">0</text>\n  <text x="107" y="183" text-anchor="middle" font-size="8" fill="#fbbf24" font-family="sans-serif">t1/2</text>\n  <text x="173" y="183" text-anchor="middle" font-size="8" fill="#fbbf24" font-family="sans-serif">2t1/2</text>\n  <text x="240" y="183" text-anchor="middle" font-size="8" fill="#fbbf24" font-family="sans-serif">3t1/2</text>\n  <text x="305" y="183" text-anchor="middle" font-size="8" fill="#fbbf24" font-family="sans-serif">4t1/2</text>\n  <!-- Dashed half-life drop lines -->\n  <line x1="107" y1="22" x2="107" y2="170" stroke="#fbbf24" stroke-width="0.8" stroke-dasharray="3 3"/>\n  <line x1="173" y1="59" x2="173" y2="170" stroke="#fbbf24" stroke-width="0.8" stroke-dasharray="3 3"/>\n  <line x1="240" y1="96" x2="240" y2="170" stroke="#fbbf24" stroke-width="0.8" stroke-dasharray="3 3"/>\n  <line x1="40" y1="59" x2="107" y2="59" stroke="#fbbf24" stroke-width="0.8" stroke-dasharray="3 3"/>\n  <line x1="40" y1="96" x2="173" y2="96" stroke="#fbbf24" stroke-width="0.8" stroke-dasharray="3 3"/>\n  <line x1="40" y1="133" x2="240" y2="133" stroke="#fbbf24" stroke-width="0.8" stroke-dasharray="3 3"/>\n  <!-- Decay curve (exponential) -->\n  <path d="M 40 22 C 70 22 90 38 107 59 C 124 80 145 88 173 96 C 200 104 220 122 240 133 C 258 143 278 152 305 159" stroke="#38bdf8" stroke-width="2.5" fill="none"/>\n  <!-- Half-life annotation -->\n  <text x="68" y="18" font-size="8" fill="#38bdf8" font-family="sans-serif">Decay curve</text>\n  <!-- Key points -->\n  <circle cx="40" cy="22" r="3" fill="#34d399"/>\n  <circle cx="107" cy="59" r="3" fill="#34d399"/>\n  <circle cx="173" cy="96" r="3" fill="#34d399"/>\n  <circle cx="240" cy="133" r="3" fill="#34d399"/>\n</svg>',
        },
      ],
      keyPoints: [
        "Half-life (t½): time for count rate / number of nuclei to fall to half the current value.",
        "After n half-lives, fraction remaining = (1/2)ⁿ.",
        "Half-life is constant regardless of sample size or temperature.",
        "Read t½ from a graph: find time interval for count rate to halve at any point on the curve.",
        "Half-lives range from fractions of a second to billions of years — a diagnostic signature of each isotope.",
      ],
      strategies: [
        "Count-the-halvings: find how many times the count rate halved, that equals n, then t = n × t½.",
        "For graph reading: choose a round number on the y-axis, read the two times when the curve passes through C and C/2, subtract.",
      ],
      whyItWorks:
        "Each nucleus decays with the same probability per unit time (the decay constant λ). The fraction that survives a time interval t is e^(−λt). The half-life is when this equals 1/2: e^(−λt½) = 1/2, giving t½ = ln2/λ ≈ 0.693/λ. Because λ is a property of the nuclear species alone, t½ is a fixed constant — unaffected by how many nuclei you have or what they are chemically bonded to.",
    },

    // ── Section 6 ──────────────────────────────────────────────────────────
    {
      heading: "Uses, Dangers and Safety of Radioactivity",
      body:
        "**Uses of radioactivity:**\n\n- **Medical tracers:** A gamma-emitting isotope (e.g., technetium-99m) is injected. Because it passes through tissue, a gamma camera outside the body can image organ function. The isotope must have a short half-life (hours) so radiation dose is minimised.\n- **Cancer treatment (radiotherapy):** A focused beam of gamma radiation (or beta emitters placed near the tumour) kills cancerous cells. Healthy tissue is protected by rotating the beam or directing it precisely.\n- **Sterilisation of medical equipment:** Gamma radiation kills bacteria and viruses without heating fragile instruments.\n- **Smoke detectors:** A small amount of americium-241 (alpha emitter) ionises air between two electrodes, creating a small current. Smoke particles disrupt the current, triggering the alarm. Alpha is used because it is safely absorbed by the detector casing and does not escape.\n- **Carbon dating:** Living organisms absorb carbon-14 (¹⁴C, t½ ≈ 5 700 yr) through food and respiration. On death, uptake stops and ¹⁴C decays. Measuring the remaining ¹⁴C/¹²C ratio gives the age. Reliable up to ≈50 000 years.\n- **Rock dating (potassium-argon, uranium-lead):** Very long half-life isotopes (e.g., ²³⁸U, t½ = 4.5 × 10⁹ yr) allow the age of rocks to be determined over geological timescales.\n- **Thickness monitoring in industry:** Beta emitters are placed on one side of a metal sheet; detectors on the other. If count rate drops, the sheet is too thick; if it rises, too thin. The production line adjusts automatically.\n\n**Dangers of ionising radiation:**\n- Radiation can **ionise atoms in living cells**, damaging DNA.\n- At high doses: **radiation sickness**, cell death, organ failure, increased cancer risk.\n- **Alpha** is most dangerous if the source is **inside the body** (inhaled radon or ingested); **gamma** is most penetrating and dangerous externally.\n- Long-term low-dose exposure increases the **risk of cancer** and genetic mutation.\n\n**Safety precautions:**\n- Keep sources in **lead-lined containers** when not in use.\n- Use **long-handled tongs** (never hold sources directly).\n- **Minimise time** of exposure; **maximise distance** from source (intensity ∝ 1/d²).\n- Wear **film badges** or dosimeters to monitor cumulative dose.\n- Radioactive waste must be safely **stored or buried** in approved facilities.\n\n**Nuclear fission:** A heavy nucleus (e.g., ²³⁵U) absorbs a slow neutron, becomes unstable and **splits** into two smaller 'daughter' nuclei, releasing **2 or 3 fast neutrons** and a large amount of energy. A typical equation is:\n\n`²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n`\n\n(Check: A: 235 + 1 = 141 + 92 + 3 ✓; Z: 92 + 0 = 56 + 36 + 0 ✓.) The energy released comes from the loss of mass (E = mc²) and appears as kinetic energy of the fragments, which heats the reactor.\n\n**Chain reaction:** each released neutron can be absorbed by another ²³⁵U nucleus, causing further fissions. If on average more than one neutron from each fission goes on to cause another, the reaction grows rapidly. A **nuclear bomb** uses an uncontrolled chain reaction.\n\n**Nuclear reactor outline (controlled fission):**\n- **Fuel rods** of enriched uranium-235 (or plutonium-239) undergo fission.\n- A **moderator** (e.g. water or graphite) **slows** the fast neutrons so they are more readily absorbed and keep the chain reaction going.\n- **Control rods** (e.g. boron or cadmium) **absorb** surplus neutrons; lowering them slows the reaction, raising them speeds it up — keeping the rate steady (about one neutron per fission continuing).\n- A **coolant** carries away the heat, which boils water to steam; the steam turns a **turbine** and **generator** to produce electricity.\n- Thick **concrete shielding** absorbs the escaping radiation to protect workers.\n\n**Nuclear fusion in stars:** In the cores of stars, light nuclei **join** to form a heavier nucleus, releasing enormous energy (E = mc²). In the Sun, hydrogen nuclei fuse in stages to form helium; a representative fusion reaction is:\n\n`²₁H + ³₁H → ⁴₂He + ¹₀n`\n\n(deuterium + tritium → helium-4 + a neutron). Fusion requires **extremely high temperatures (>10⁷ K)** and pressures so the positively charged nuclei move fast enough to overcome their electrostatic repulsion and get close enough to fuse. Fusion (light nuclei joining) and fission (heavy nuclei splitting) both release energy because the products have **less mass** than the starting nuclei; the 'lost' mass becomes energy via E = mc².",
      keyPoints: [
        "Gamma emitters (short t½) are used as medical tracers; beta emitters and gamma for radiotherapy.",
        "Alpha emitters in smoke detectors are safe because alpha cannot penetrate the casing.",
        "Carbon-14 dating works because its t½ (5 700 yr) matches human/archaeological timescales.",
        "Safety: lead containers, tongs, maximise distance, minimise time, wear film badges/dosimeters; store and dispose of waste in shielded approved sites.",
        "Fission splits heavy nuclei (releasing 2–3 neutrons that sustain a chain reaction); fusion joins light nuclei in stars — both release energy from E = mc².",
        "In a reactor: moderator slows neutrons, control rods absorb neutrons (controlling the rate), coolant carries heat to boil water and drive a turbine.",
      ],
      strategies: [
        "Match the use to the radiation: gamma for tracers/sterilisation (penetrates out / through), beta for thickness control (partly absorbed by the sheet), alpha for smoke detectors (very short range, stays inside).",
        "Match the half-life to the job: short t½ for medical tracers (low dose), very long t½ for dating rocks.",
      ],
      thinkDeeper:
        "Why must a medical tracer have a short half-life but not too short? If t½ is too long, the patient receives an unnecessarily high cumulative dose. If t½ is too short, the isotope decays before imaging is complete. Technetium-99m (t½ = 6 hours) is ideal: it lasts long enough for a scan session but decays to near-zero within a day.",
    },
  ],

  // ─── LEARN SMART ──────────────────────────────────────────────────────────
  learn: {
    keyFacts: [
      "The nucleus is about 10 000 times smaller than the atom (10⁻¹⁴ m vs 10⁻¹⁰ m).",
      "Alpha particle = helium nucleus (⁴₂He); charge +2, stopped by paper.",
      "Beta particle = fast electron (⁰₋₁e); charge −1, stopped by a few mm of aluminium.",
      "Gamma = EM wave; no charge, no mass, only reduced by several cm of lead.",
      "Half-life is the time for activity/count rate to fall to half its current value.",
      "After n half-lives, fraction remaining = (1/2)ⁿ.",
      "Alpha decay: A − 4, Z − 2. Beta decay: A unchanged, Z + 1.",
      "Radioactive decay is random and spontaneous — unaffected by external conditions.",
      "Background radiation sources: radon gas, rocks, cosmic rays, food (natural), medical procedures (artificial).",
      "Carbon-14 has t½ ≈ 5 700 years — used to date organic remains up to ≈50 000 years old.",
      "Radiation is detected with a Geiger–Müller tube (count rate) or photographic film (film badges).",
      "Subtract the background count rate to get the corrected count rate due to the source alone.",
      "Activity is measured in becquerel (Bq); 1 Bq = 1 decay per second.",
      "Fission: ²³⁵U + a neutron splits into two smaller nuclei + 2–3 neutrons + energy → chain reaction.",
      "In a reactor the moderator slows neutrons, control rods absorb neutrons, and coolant removes the heat.",
      "Fusion in stars: light nuclei (e.g. hydrogen) join to form helium, releasing energy via E = mc².",
    ],
    flashcards: [
      {
        front: "What is the proton number Z?",
        back: "The number of protons in the nucleus; it determines which element the atom is.",
      },
      {
        front: "Define nucleon number A.",
        back: "The total number of protons AND neutrons (nucleons) in the nucleus.",
      },
      {
        front: "What are isotopes?",
        back: "Atoms of the same element (same Z) with different numbers of neutrons (different A). Same chemistry, different nuclear stability.",
      },
      {
        front: "What evidence from alpha-scattering showed the nucleus is tiny and positive?",
        back: "A small fraction of alpha particles were deflected through large angles or bounced back — impossible unless a tiny, dense, positively charged nucleus caused strong repulsion.",
      },
      {
        front: "Alpha decay rule: how do A and Z change?",
        back: "A decreases by 4; Z decreases by 2. (An ⁴₂He is emitted.)",
      },
      {
        front: "Beta-minus decay rule: how do A and Z change?",
        back: "A stays the same; Z increases by 1. (A neutron converts to a proton, emitting ⁰₋₁e.)",
      },
      {
        front: "Define half-life.",
        back: "The time taken for the number of undecayed nuclei (or the activity/count rate) to fall to half of its initial value.",
      },
      {
        front: "What fraction of a sample remains after 4 half-lives?",
        back: "(1/2)⁴ = 1/16 of the original amount.",
      },
      {
        front: "Which type of radiation is the most ionising?",
        back: "Alpha radiation — it causes the most ionisations per unit length of path, and therefore has the shortest range.",
      },
      {
        front: "Why is gamma radiation not deflected by electric or magnetic fields?",
        back: "Gamma is electromagnetic radiation (a photon) with zero electric charge — fields can only deflect charged particles.",
      },
      {
        front: "Why is americium-241 (an alpha emitter) used in smoke detectors rather than a gamma emitter?",
        back: "Alpha cannot penetrate the casing of the detector, so it poses no external radiation hazard. Gamma would be far too penetrating and dangerous to the user.",
      },
      {
        front: "State two safety precautions when handling radioactive sources.",
        back: "Use long-handled tongs (never handle directly); keep sources in lead-lined containers when not in use; maximise distance; minimise exposure time.",
      },
      {
        front: "How is the count rate from a source measured, and what must be corrected for?",
        back: "Use a Geiger–Müller (GM) tube with a counter. First measure the background count rate with no source, then subtract it from each reading to get the corrected count rate due to the source.",
      },
      {
        front: "Name a detector that uses photographic film and say where it is used.",
        back: "Photographic film fogs (darkens) when exposed to ionising radiation; it is used in film badges worn by radiation workers to monitor their cumulative dose.",
      },
      {
        front: "What is activity and in what unit is it measured?",
        back: "Activity is the number of nuclear decays per second, measured in becquerel (Bq); 1 Bq = 1 decay per second.",
      },
      {
        front: "Describe nuclear fission of uranium-235.",
        back: "A ²³⁵U nucleus absorbs a neutron, becomes unstable and splits into two smaller nuclei, releasing 2–3 neutrons and a large amount of energy. The neutrons can cause further fissions — a chain reaction.",
      },
      {
        front: "What do the moderator and control rods do in a nuclear reactor?",
        back: "The moderator slows down the fast neutrons so they can cause more fissions; the control rods absorb surplus neutrons to control (steady or stop) the chain reaction.",
      },
      {
        front: "What is nuclear fusion and where does it occur naturally?",
        back: "Fusion is the joining of two light nuclei to form a heavier nucleus, releasing energy (E = mc²). It occurs in the cores of stars, e.g. hydrogen fusing to helium in the Sun, and needs very high temperature and pressure.",
      },
      {
        front: "Why does fission/fusion release energy?",
        back: "The products have slightly less total mass than the starting nuclei. This lost mass is converted into energy according to E = mc².",
      },
    ],
    keyTerms: [
      {
        term: "Proton number (Z)",
        definition: "The number of protons in the nucleus of an atom; determines the element.",
      },
      {
        term: "Nucleon number (A)",
        definition: "The total number of protons and neutrons in the nucleus.",
      },
      {
        term: "Isotopes",
        definition: "Atoms of the same element with the same proton number but different nucleon numbers (different neutron counts).",
      },
      {
        term: "Alpha particle (α)",
        definition: "A particle emitted in alpha decay, consisting of 2 protons and 2 neutrons (identical to a helium-4 nucleus); symbol ⁴₂He.",
      },
      {
        term: "Beta particle (β)",
        definition: "A fast-moving electron emitted from the nucleus during beta-minus decay when a neutron converts to a proton; symbol ⁰₋₁e.",
      },
      {
        term: "Gamma radiation (γ)",
        definition: "High-frequency electromagnetic radiation emitted from the nucleus following alpha or beta decay; no mass, no charge.",
      },
      {
        term: "Background radiation",
        definition: "The low-level ionising radiation always present in the environment from natural sources (radon, rocks, cosmic rays, food) and artificial sources (medical, nuclear industry).",
      },
      {
        term: "Radioactive decay",
        definition: "The spontaneous, random emission of radiation from an unstable nucleus as it transforms towards a more stable state.",
      },
      {
        term: "Half-life (t½)",
        definition: "The time taken for the number of undecayed nuclei in a sample (or its activity) to fall to half its initial value.",
      },
      {
        term: "Nuclear fission",
        definition: "The splitting of a heavy nucleus (e.g. ²³⁵U) into two smaller nuclei when struck by a neutron, releasing energy and further neutrons that can sustain a chain reaction.",
      },
      {
        term: "Nuclear fusion",
        definition: "The joining of two light nuclei (e.g. hydrogen isotopes) at very high temperature to form a heavier nucleus with a large release of energy; the energy source of stars.",
      },
      {
        term: "Activity",
        definition: "The number of nuclear decays occurring per second in a source, measured in becquerel (Bq); 1 Bq = 1 decay per second.",
      },
      {
        term: "Count rate",
        definition: "The number of counts registered per second (or per minute) by a detector such as a Geiger–Müller tube; the corrected count rate has the background count subtracted.",
      },
      {
        term: "Geiger–Müller (GM) tube",
        definition: "A detector in which ionising radiation ionises a gas, producing a pulse of current that is registered as a count; used to measure count rate.",
      },
      {
        term: "Chain reaction",
        definition: "A self-sustaining process in which neutrons released by one fission go on to cause further fissions in other nuclei; controlled in a reactor, uncontrolled in a nuclear bomb.",
      },
    ],
  },

  // ─── QUICK QUIZ ───────────────────────────────────────────────────────────
  quiz: {
    mcq: [
      {
        id: "phys-nuclear-mcq-q01",
        question: "In the Rutherford scattering experiment, what did the rare back-scattering of alpha particles demonstrate?",
        options: [
          "The atom is a uniform sphere of positive charge",
          "The nucleus is tiny, dense and positively charged",
          "Electrons carry a negative charge",
          "Alpha particles are heavier than electrons",
        ],
        answerIndex: 1,
        explanation:
          "Back-scatter (deflection near 180°) could only occur if the alpha particle collided with something far more massive and positively charged concentrated in a very small volume — the nucleus. A diffuse positive charge (plum-pudding) would not exert sufficient force to reverse the alpha's momentum.",
        difficulty: "warmup",
        guideRef: "The Nuclear Model of the Atom",
      },
      {
        id: "phys-nuclear-mcq-q02",
        question: "The nuclide ²³⁵₉₂U contains how many neutrons?",
        options: ["92", "143", "235", "327"],
        answerIndex: 1,
        explanation: "Neutron number N = A − Z = 235 − 92 = 143.",
        difficulty: "warmup",
        guideRef: "Proton Number, Nucleon Number and Isotopes",
      },
      {
        id: "phys-nuclear-mcq-q03",
        question: "Which property of alpha, beta and gamma radiation is listed correctly?",
        options: [
          "Gamma has the highest ionising ability",
          "Beta is stopped by a few sheets of paper",
          "Alpha carries a charge of +2",
          "Gamma is deflected by a magnetic field",
        ],
        answerIndex: 2,
        explanation:
          "Alpha consists of 2 protons + 2 neutrons so its charge is +2. Gamma has the lowest ionising ability (not highest); beta requires aluminium to stop it (not paper); gamma has zero charge so is not deflected by fields.",
        difficulty: "core",
        guideRef: "Types of Nuclear Radiation",
        hints: [
          "Think about what an alpha particle actually is.",
          "Alpha = helium nucleus = 2 protons + 2 neutrons.",
          "Two protons means charge = 2 × (+e) = +2.",
        ],
      },
      {
        id: "phys-nuclear-mcq-q04",
        question:
          "A radioactive nucleus ²¹⁰₈₃Bi undergoes beta-minus decay. What are the nucleon number and proton number of the daughter nucleus?",
        options: ["A = 206, Z = 81", "A = 210, Z = 84", "A = 210, Z = 82", "A = 206, Z = 83"],
        answerIndex: 1,
        explanation:
          "Beta-minus decay: A is unchanged (210), Z increases by 1 (83 + 1 = 84). The daughter is ²¹⁰₈₄Po (polonium-210).",
        difficulty: "core",
        guideRef: "Radioactive Decay and Nuclear Equations",
        hints: [
          "In beta-minus decay a neutron becomes a proton.",
          "A = A (unchanged); Z = Z + 1.",
          "210 − 210 = 0 change in A; 83 + 1 = 84 for new Z.",
        ],
      },
      {
        id: "phys-nuclear-mcq-q05",
        question: "A source has an initial count rate of 640 counts/min. After 30 minutes the count rate is 80 counts/min. What is the half-life?",
        options: ["5 min", "10 min", "15 min", "30 min"],
        answerIndex: 1,
        explanation:
          "640 → 320 → 160 → 80: three halvings. 3 half-lives in 30 min → t½ = 30 ÷ 3 = 10 min.",
        difficulty: "core",
        guideRef: "Half-Life",
        hints: [
          "Count how many times the count rate was halved: 640 → 320 → 160 → 80.",
          "That's 3 halvings = 3 half-lives.",
          "t½ = total time ÷ number of half-lives.",
        ],
      },
      {
        id: "phys-nuclear-mcq-q06",
        question:
          "A hospital uses a radioactive tracer with a half-life of 6 hours. Why is a short half-life preferred for this purpose?",
        options: [
          "A short half-life means the source emits more gamma radiation",
          "The patient receives a smaller total radiation dose",
          "Short half-life tracers are always alpha emitters",
          "The tracer remains detectable in the body for longer",
        ],
        answerIndex: 1,
        explanation:
          "A short half-life means the activity falls quickly after the imaging procedure is done, so the patient is not exposed to significant radiation for days or weeks. The total dose is therefore minimised.",
        difficulty: "core",
        guideRef: "Uses, Dangers and Safety of Radioactivity",
        hints: [
          "Think about what happens to the radiation dose as the isotope decays inside the patient.",
          "Shorter t½ means activity drops to negligible levels faster.",
        ],
      },
    ],
    qa: [
      {
        id: "phys-nuclear-qa-q01",
        question:
          "Explain why most alpha particles pass straight through the gold foil in the Rutherford experiment, but a small number are deflected through large angles.",
        marks: 4,
        modelAnswer:
          "Most alpha particles pass through because the atom is mostly empty space — the electrons occupy a large volume but have negligible mass, so alpha particles are not significantly deflected by them. The tiny fraction that pass close to the nucleus experience a large repulsive Coulomb (electrostatic) force between the positive alpha (+2) and the positive nucleus. The closer the approach, the greater the repulsion. Only alphas aimed almost directly at the nucleus receive sufficient repulsive force to be deflected through large angles or bounce back. Since the nucleus is extremely small compared to the atom, the probability of a near-head-on approach is very low, so large deflections are rare.",
        markScheme: [
          "atom is mostly empty space / very little matter for alpha to interact with",
          "most alphas are undeflected / pass straight through",
          "nucleus is tiny, dense and positively charged",
          "repulsive electrostatic / Coulomb force between positive alpha and positive nucleus",
          "force large enough to cause large deflection only at very close range / near-head-on collision",
          "nucleus is so small that close approaches are rare / hence large deflections are rare",
        ],
        commonError:
          "Many students say 'electrons repel alpha particles' — electrons are too light and carry the wrong sign to cause large deflections. It is the nucleus that matters.",
        difficulty: "core",
        guideRef: "The Nuclear Model of the Atom",
        hints: [
          "Start by asking: what does the atom look like in this model (mostly empty space)?",
          "What charge does the alpha particle carry? What charge does the nucleus carry?",
          "What happens to the repulsive force as the distance decreases?",
          "Why are large deflections rare? (How big is the nucleus compared to the atom?)",
        ],
        strategy: "Use the structure of the nuclear model to explain each observation in turn.",
      },
      {
        id: "phys-nuclear-qa-q02",
        question:
          "Strontium-90 (⁹⁰₃₈Sr) is a beta-minus emitter with a half-life of 28.8 years. (a) Write a balanced nuclear equation for the beta-minus decay of strontium-90. (b) A sample initially contains 2.0 × 10¹² atoms of strontium-90. Calculate the number of strontium-90 atoms remaining after 86.4 years.",
        marks: 5,
        modelAnswer:
          "(a) ⁹⁰₃₈Sr → ⁹⁰₃₉Y + ⁰₋₁e\n\nCheck: A: 90 = 90 + 0 ✓; Z: 38 = 39 + (−1) ✓. Daughter nucleus is yttrium-90 (Y, Z = 39).\n\n(b) Number of half-lives n = 86.4 ÷ 28.8 = 3.\nFraction remaining = (1/2)³ = 1/8.\nNumber remaining = 2.0 × 10¹² × (1/8) = 2.5 × 10¹¹ atoms.",
        markScheme: [
          "(a) correct daughter symbol Y / yttrium",
          "(a) correct A = 90 for daughter",
          "(a) correct Z = 39 for daughter",
          "(a) ⁰₋₁e written correctly for beta particle",
          "(b) n = 86.4 / 28.8 = 3 half-lives",
          "(b) fraction = (1/2)³ = 1/8",
          "(b) N = 2.0 × 10¹² / 8 = 2.5 × 10¹¹ atoms (allow 2–3 sig figs)",
        ],
        commonError:
          "In part (a), students often write the daughter nucleus as ⁹⁰₃₈Sr (no change) — forgetting that Z increases by 1 in beta decay, giving a different element.",
        difficulty: "core",
        guideRef: "Radioactive Decay and Nuclear Equations",
        hints: [
          "For the equation: beta decay means A stays the same, Z goes up by 1.",
          "New Z = 38 + 1 = 39. Use the periodic table to identify the element.",
          "For the calculation: divide total time by half-life to find n.",
          "Multiply initial number by (1/2)^n.",
        ],
        strategy: "balance-the-equation then count-the-halvings",
        solutions: [
          {
            label: "Method 1: successive halving",
            steps: [
              "n = 86.4 / 28.8 = 3",
              "After 1 t½: 2.0×10¹² / 2 = 1.0×10¹²",
              "After 2 t½: 1.0×10¹² / 2 = 5.0×10¹¹",
              "After 3 t½: 5.0×10¹¹ / 2 = 2.5×10¹¹ atoms",
            ],
          },
          {
            label: "Method 2: fraction formula",
            steps: [
              "n = 86.4 / 28.8 = 3 half-lives",
              "Fraction remaining = (1/2)³ = 1/8",
              "N = 2.0×10¹² × (1/8) = 2.5×10¹¹ atoms",
            ],
          },
        ],
      },
      {
        id: "phys-nuclear-qa-q03",
        question:
          "Compare alpha, beta and gamma radiation under the following headings: nature, relative charge, penetrating power (which material stops each), and ionising ability. Arrange your answer in a table or clearly structured paragraphs. [6 marks]",
        marks: 6,
        modelAnswer:
          "Alpha (α): Nature — helium nucleus (2 protons + 2 neutrons); Charge — +2; Penetrating power — stopped by a thin sheet of paper or a few cm of air; Ionising ability — very high (most ionising).\n\nBeta (β): Nature — fast electron emitted from the nucleus; Charge — −1; Penetrating power — stopped by a few mm of aluminium; Ionising ability — moderate.\n\nGamma (γ): Nature — electromagnetic wave / high-frequency photon; Charge — 0; Penetrating power — only reduced (not fully stopped) by several cm of lead or metres of concrete; Ionising ability — low (least ionising).",
        markScheme: [
          "alpha: helium nucleus / 2 protons + 2 neutrons",
          "beta: (fast) electron / emitted from nucleus",
          "gamma: electromagnetic radiation / EM wave / photon",
          "charges: alpha +2, beta -1, gamma 0 (all three correct for 1 mark)",
          "penetration: alpha — paper; beta — aluminium; gamma — lead (all three for 1 mark)",
          "ionising: alpha highest / most; gamma lowest / least (both correct for 1 mark)",
        ],
        commonError:
          "Students often say gamma is 'stopped by lead' — in fact, lead only reduces gamma intensity; no practical thickness stops it completely.",
        difficulty: "warmup",
        guideRef: "Types of Nuclear Radiation",
      },
    ],
  },

  // ─── QUESTION BANK ────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      {
        id: "phys-nuclear-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        questions: [
          {
            id: "phys-nuclear-bm1-01",
            question: "Approximately how many times larger is the diameter of an atom than the diameter of its nucleus?",
            options: ["About 10 times", "About 100 times", "About 10 000 times", "About 1 000 000 times"],
            answerIndex: 2,
            explanation:
              "The atom is about 10 raised to the minus 10 m across, while the nucleus is about 10 raised to the minus 14 m across. The ratio is therefore about 10 000 to 1, which is why the atom is described as mostly empty space.",
            difficulty: "warmup",
            guideRef: "The Nuclear Model of the Atom",
          },
          {
            id: "phys-nuclear-bm1-02",
            question: "In the Geiger-Marsden experiment, what was used to detect the alpha particles after they passed the gold foil?",
            options: [
              "A photographic plate that turned black",
              "A zinc-sulfide screen that produced tiny flashes of light",
              "A magnetic compass needle",
              "A glass thermometer",
            ],
            answerIndex: 1,
            explanation:
              "A movable zinc-sulfide (scintillation) screen produced a small flash of light each time an alpha particle struck it, allowing the scientists to count particles at different angles.",
            difficulty: "warmup",
            guideRef: "The Nuclear Model of the Atom",
          },
          {
            id: "phys-nuclear-bm1-03",
            question: "How many neutrons are present in a nucleus of carbon-14, written as the nuclide with nucleon number 14 and proton number 6?",
            options: ["6", "8", "14", "20"],
            answerIndex: 1,
            explanation:
              "Neutron number N = A minus Z = 14 minus 6 = 8. The proton number tells you the element (carbon); the nucleon number minus the proton number gives the neutrons.",
            difficulty: "warmup",
            guideRef: "Proton Number, Nucleon Number and Isotopes",
          },
          {
            id: "phys-nuclear-bm1-04",
            question: "Which statement about isotopes of the same element is correct?",
            options: [
              "They have the same number of neutrons but different numbers of protons",
              "They have the same number of protons but different numbers of neutrons",
              "They have different chemical properties",
              "They always have the same nucleon number",
            ],
            answerIndex: 1,
            explanation:
              "Isotopes have the same proton number Z (so they are the same element with the same chemistry) but different numbers of neutrons, giving different nucleon numbers A.",
            difficulty: "core",
            guideRef: "Proton Number, Nucleon Number and Isotopes",
            hints: [
              "What single quantity defines which element an atom is?",
              "Isotopes share that quantity but differ in another nuclear particle.",
              "Same protons, different neutrons.",
            ],
          },
          {
            id: "phys-nuclear-bm1-05",
            question: "Which type of radiation is an electromagnetic wave and carries no charge?",
            options: ["Alpha", "Beta", "Gamma", "Neutron"],
            answerIndex: 2,
            explanation:
              "Gamma radiation is a high-frequency electromagnetic wave (a photon). It has no mass and no charge, so it is not deflected by electric or magnetic fields.",
            difficulty: "warmup",
            guideRef: "Types of Nuclear Radiation",
          },
          {
            id: "phys-nuclear-bm1-06",
            question: "A beam containing alpha, beta and gamma radiation passes between two charged metal plates, with the left plate positive and the right plate negative. Which radiation bends towards the negative (right) plate?",
            options: ["Alpha", "Beta", "Gamma", "None of them bend"],
            answerIndex: 0,
            explanation:
              "Alpha particles carry charge +2, so they are attracted towards the negative plate (to the right). Beta particles are negative and bend the opposite way; gamma has no charge and goes straight.",
            difficulty: "core",
            guideRef: "Types of Nuclear Radiation",
            hints: [
              "Opposite charges attract.",
              "Alpha is positive (+2), beta is negative (-1), gamma is neutral.",
              "A positive particle is pulled towards the negative plate.",
            ],
          },
          {
            id: "phys-nuclear-bm1-07",
            question: "Radium-226 (proton number 88) decays by alpha emission. What is the proton number of the daughter nucleus?",
            options: ["84", "86", "88", "90"],
            answerIndex: 1,
            explanation:
              "Alpha decay reduces the proton number by 2: 88 minus 2 = 86. The daughter is radon (Rn). The nucleon number falls from 226 to 222.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "An alpha particle carries away 2 protons and 2 neutrons.",
              "Z decreases by 2 in alpha decay.",
              "88 minus 2 = 86.",
            ],
          },
          {
            id: "phys-nuclear-bm1-08",
            question: "A sample starts with a count rate of 800 counts/min and the half-life is 4 days. What is the count rate after 12 days?",
            options: ["400 counts/min", "200 counts/min", "100 counts/min", "50 counts/min"],
            answerIndex: 2,
            explanation:
              "Number of half-lives = 12 divided by 4 = 3. The count rate halves three times: 800 to 400 to 200 to 100 counts/min.",
            difficulty: "core",
            guideRef: "Half-Life",
            hints: [
              "Number of half-lives = total time divided by half-life.",
              "12 divided by 4 = 3 half-lives.",
              "Halve the count rate three times from 800.",
            ],
            strategy: "count-the-halvings: find n, then halve repeatedly",
          },
          {
            id: "phys-nuclear-bm1-09",
            question: "Which of these is the largest single source of background radiation for most people?",
            options: ["Nuclear power stations", "Radon gas from rocks and soil", "Medical X-rays", "Cosmic rays from space"],
            answerIndex: 1,
            explanation:
              "Radon gas, which seeps from uranium-bearing rocks and soil, is typically the largest single contributor to background radiation (around half of the average dose in many countries).",
            difficulty: "core",
            guideRef: "Types of Nuclear Radiation",
            hints: [
              "The largest source is natural, not man-made.",
              "It is a radioactive gas that collects in buildings.",
              "It comes from rocks such as granite.",
            ],
          },
          {
            id: "phys-nuclear-bm1-10",
            question: "Smoke detectors commonly contain americium-241, an alpha emitter. Why is an alpha emitter a safe choice for the user?",
            options: [
              "Alpha radiation cannot ionise air, so it never reaches the user",
              "Alpha particles are absorbed by the detector casing and a short layer of air, so they do not reach the user",
              "Alpha emitters never have a long half-life",
              "Alpha radiation is the most penetrating type",
            ],
            answerIndex: 1,
            explanation:
              "Alpha particles have a very short range and are stopped by a few centimetres of air or the plastic casing, so they cannot reach or harm the user. Inside the detector they ionise the air, allowing the device to sense smoke.",
            difficulty: "challenge",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Think about the penetrating power and range of alpha radiation.",
              "Alpha is stopped by paper or a few centimetres of air.",
              "If it cannot escape the casing, it cannot reach the user.",
            ],
            strategy: "match the radiation property (short range) to the safety requirement",
          },
        ],
      },
      {
        id: "phys-nuclear-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        questions: [
          {
            id: "phys-nuclear-bm2-01",
            question: "What two particles are found inside the nucleus of an atom?",
            options: ["Protons and electrons", "Protons and neutrons", "Neutrons and electrons", "Electrons and positrons"],
            answerIndex: 1,
            explanation:
              "The nucleus contains protons (positive) and neutrons (neutral), together called nucleons. Electrons orbit outside the nucleus.",
            difficulty: "warmup",
            guideRef: "The Nuclear Model of the Atom",
          },
          {
            id: "phys-nuclear-bm2-02",
            question: "Which radiation has the greatest penetrating power?",
            options: ["Alpha", "Beta", "Gamma", "They are all equal"],
            answerIndex: 2,
            explanation:
              "Gamma is the most penetrating: it is only reduced by several centimetres of lead or metres of concrete. Alpha is stopped by paper and beta by a few millimetres of aluminium.",
            difficulty: "warmup",
            guideRef: "Types of Nuclear Radiation",
          },
          {
            id: "phys-nuclear-bm2-03",
            question: "What fraction of a radioactive sample remains undecayed after 4 half-lives?",
            options: ["1/4", "1/8", "1/16", "1/32"],
            answerIndex: 2,
            explanation:
              "Fraction remaining = (1/2) raised to the power 4 = 1/16. After 4 half-lives only one sixteenth of the original sample is left.",
            difficulty: "warmup",
            guideRef: "Half-Life",
          },
          {
            id: "phys-nuclear-bm2-04",
            question: "A neutron inside a nucleus changes into a proton. Which radiation is emitted?",
            options: ["An alpha particle", "A beta-minus particle (electron)", "A gamma ray only", "A second neutron"],
            answerIndex: 1,
            explanation:
              "When a neutron converts to a proton, a fast-moving electron is created and ejected from the nucleus. This electron is the beta-minus particle. The proton number increases by 1.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "The neutron becomes a proton, so the nuclear charge increases by one.",
              "Charge must be conserved, so a negative particle is released.",
              "That negative particle is an electron, the beta-minus particle.",
            ],
          },
          {
            id: "phys-nuclear-bm2-05",
            question: "Iodine-131 (proton number 53) is a beta-minus emitter. What is the proton number of the daughter nucleus?",
            options: ["51", "52", "54", "55"],
            answerIndex: 2,
            explanation:
              "In beta-minus decay the proton number increases by 1: 53 plus 1 = 54. The daughter is xenon (Xe). The nucleon number stays at 131.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Beta-minus decay: A unchanged, Z increases by 1.",
              "53 plus 1 = 54.",
              "Element with Z = 54 is xenon.",
            ],
          },
          {
            id: "phys-nuclear-bm2-06",
            question: "A radioactive source gives a corrected count rate of 1600 counts/min. After 18 hours it has fallen to 200 counts/min. What is the half-life?",
            options: ["3 hours", "6 hours", "9 hours", "12 hours"],
            answerIndex: 1,
            explanation:
              "1600 divided by 200 = 8 = 2 cubed, so 3 half-lives have passed. t-half = 18 divided by 3 = 6 hours. Check: 1600 to 800 to 400 to 200, three halvings.",
            difficulty: "core",
            guideRef: "Half-Life",
            hints: [
              "Find the ratio of initial to final count rate.",
              "1600 divided by 200 = 8 = 2 cubed, so n = 3.",
              "t-half = total time divided by number of half-lives = 18 divided by 3.",
            ],
            strategy: "count-the-halvings: express the ratio as a power of 2",
          },
          {
            id: "phys-nuclear-bm2-07",
            question: "Which precaution does NOT reduce a worker's radiation dose from a source?",
            options: [
              "Increasing the distance from the source",
              "Reducing the time spent near the source",
              "Storing the source in a lead-lined box when not in use",
              "Warming the source before handling it",
            ],
            answerIndex: 3,
            explanation:
              "Temperature has no effect on radioactivity or dose. Distance, time and shielding (lead) all reduce the dose received by a worker.",
            difficulty: "core",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Radioactive decay is unaffected by external conditions.",
              "Which option changes a physical condition that has no effect on radiation?",
              "Heating a source does not change its activity.",
            ],
          },
          {
            id: "phys-nuclear-bm2-08",
            question: "Why is technetium-99m, with a half-life of 6 hours, a good choice as a medical tracer?",
            options: [
              "It is an alpha emitter that stays in the body forever",
              "It lasts long enough to scan the patient but decays to a low activity within about a day",
              "It has such a long half-life that one dose lasts a lifetime",
              "It cannot be detected outside the body",
            ],
            answerIndex: 1,
            explanation:
              "A 6-hour half-life is long enough for the gamma radiation to be imaged during a scan but short enough that the activity falls to a low level within roughly a day, minimising the patient's total dose.",
            difficulty: "core",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Consider the total radiation dose to the patient over time.",
              "Too long a half-life means a high lingering dose; too short means it decays before the scan finishes.",
              "Six hours balances both needs.",
            ],
          },
          {
            id: "phys-nuclear-bm2-09",
            question: "A radioactive source is placed close to a Geiger counter. A sheet of paper is added and the count rate is almost unchanged. A few millimetres of aluminium is then added and the count rate falls almost to background. Which radiation does the source emit?",
            options: ["Alpha only", "Beta only", "Gamma only", "Alpha and gamma"],
            answerIndex: 1,
            explanation:
              "Paper does not stop the radiation, so there is no alpha. Aluminium of a few millimetres stops it almost completely, which is characteristic of beta radiation. Gamma would still pass through aluminium.",
            difficulty: "challenge",
            guideRef: "Types of Nuclear Radiation",
            hints: [
              "Paper stops alpha; if paper has no effect, there is no significant alpha.",
              "A few millimetres of aluminium stops beta.",
              "Gamma would pass through aluminium with little reduction.",
            ],
            strategy: "absorption logic: identify which barrier first removes the radiation",
          },
          {
            id: "phys-nuclear-bm2-10",
            question: "A source has a corrected count rate of 6000 counts/min and a half-life of 2 hours. After how long will the corrected count rate fall to 750 counts/min?",
            options: ["4 hours", "6 hours", "8 hours", "12 hours"],
            answerIndex: 1,
            explanation:
              "6000 divided by 750 = 8 = 2 cubed, so 3 half-lives are needed. Time = 3 times 2 hours = 6 hours. Check: 6000 to 3000 to 1500 to 750.",
            difficulty: "challenge",
            guideRef: "Half-Life",
            hints: [
              "Work out how many times the count rate must halve.",
              "6000 divided by 750 = 8 = 2 cubed, so n = 3.",
              "Time = n times half-life = 3 times 2 hours.",
            ],
            strategy: "count-the-halvings then multiply by the half-life",
          },
        ],
      },
      {
        id: "phys-nuclear-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        questions: [
          {
            id: "phys-nuclear-bm3-01",
            question: "Which statement about radioactive decay is correct?",
            options: [
              "It can be sped up by heating the source",
              "It is random and spontaneous",
              "It only happens when a nucleus is struck by light",
              "It can be predicted exactly for each individual nucleus",
            ],
            answerIndex: 1,
            explanation:
              "Radioactive decay is random (you cannot predict which nucleus decays next or when) and spontaneous (it is not triggered or changed by external conditions such as temperature, pressure or chemical state).",
            difficulty: "warmup",
            guideRef: "Radioactive Decay and Nuclear Equations",
          },
          {
            id: "phys-nuclear-bm3-02",
            question: "An alpha particle is identical to the nucleus of which atom?",
            options: ["Hydrogen-1", "Helium-4", "Lithium-7", "Carbon-12"],
            answerIndex: 1,
            explanation:
              "An alpha particle is made of 2 protons and 2 neutrons, which is exactly a helium-4 nucleus, written as the nuclide with nucleon number 4 and proton number 2.",
            difficulty: "warmup",
            guideRef: "Types of Nuclear Radiation",
          },
          {
            id: "phys-nuclear-bm3-03",
            question: "Which quantities must be conserved (equal on both sides) in a balanced nuclear equation?",
            options: [
              "Nucleon number and proton number",
              "Number of electrons and temperature",
              "Mass in grams and volume",
              "Neutron number only",
            ],
            answerIndex: 0,
            explanation:
              "Both the nucleon number A (total at top) and the proton number Z (total at bottom) must be the same on each side of a nuclear equation.",
            difficulty: "warmup",
            guideRef: "Radioactive Decay and Nuclear Equations",
          },
          {
            id: "phys-nuclear-bm3-04",
            question: "Radon-222 (proton number 86) decays by alpha emission. What is the daughter nuclide?",
            options: [
              "Polonium-218, proton number 84",
              "Radium-226, proton number 88",
              "Astatine-218, proton number 85",
              "Polonium-222, proton number 84",
            ],
            answerIndex: 0,
            explanation:
              "Alpha decay: nucleon number falls by 4 (222 to 218) and proton number falls by 2 (86 to 84). Element with Z = 84 is polonium, so the daughter is polonium-218.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Alpha decay removes 2 protons and 2 neutrons.",
              "A: 222 minus 4 = 218; Z: 86 minus 2 = 84.",
              "Element with Z = 84 is polonium.",
            ],
          },
          {
            id: "phys-nuclear-bm3-05",
            question: "The count rate of a sample falls from 960 counts/min to 120 counts/min in 9 hours. How many half-lives have passed?",
            options: ["2", "3", "4", "8"],
            answerIndex: 1,
            explanation:
              "960 divided by 120 = 8 = 2 cubed, so 3 half-lives have passed (960 to 480 to 240 to 120).",
            difficulty: "core",
            guideRef: "Half-Life",
            hints: [
              "Find the ratio of the two count rates.",
              "960 divided by 120 = 8.",
              "8 = 2 cubed, so n = 3.",
            ],
          },
          {
            id: "phys-nuclear-bm3-06",
            question: "Carbon dating is reliable only up to about 50 000 years. Which property of carbon-14 explains this limit?",
            options: [
              "Its very long half-life of billions of years",
              "Its half-life of about 5730 years, so after roughly 50 000 years very little carbon-14 remains to measure",
              "It only decays by alpha emission",
              "It is not found in living things",
            ],
            answerIndex: 1,
            explanation:
              "After about 50 000 years (roughly nine half-lives of 5730 years), so little carbon-14 remains that the measurement becomes too unreliable. This sets the practical upper limit of the method.",
            difficulty: "core",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "The half-life of carbon-14 is about 5730 years.",
              "After many half-lives almost none of the isotope is left.",
              "If too little remains, it cannot be measured accurately.",
            ],
          },
          {
            id: "phys-nuclear-bm3-07",
            question: "Why are beta emitters used to monitor the thickness of metal or paper sheets in a factory?",
            options: [
              "Alpha would not be absorbed at all by the sheet",
              "Gamma passes through almost unchanged so changes in thickness would not affect the count, while alpha is stopped completely; beta is partly absorbed so the count changes with thickness",
              "Beta cannot pass through any thickness of metal",
              "Beta makes the metal radioactive, which is useful",
            ],
            answerIndex: 1,
            explanation:
              "Beta is partly absorbed by the sheet, so the count rate that gets through depends on the thickness. Alpha would be stopped completely (no signal varies) and gamma would pass through almost unchanged (insensitive to small thickness changes), so beta is ideal.",
            difficulty: "core",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "The radiation must be partly absorbed so the detector reading depends on thickness.",
              "Alpha would be totally stopped; gamma would pass straight through.",
              "Beta sits in between and is sensitive to thickness changes.",
            ],
          },
          {
            id: "phys-nuclear-bm3-08",
            question: "Cobalt-60 (proton number 27) is a beta-minus emitter. What is the daughter nuclide?",
            options: [
              "Nickel-60, proton number 28",
              "Iron-60, proton number 26",
              "Cobalt-59, proton number 27",
              "Copper-60, proton number 29",
            ],
            answerIndex: 0,
            explanation:
              "Beta-minus decay: nucleon number unchanged (60) and proton number increases by 1 (27 to 28). Element with Z = 28 is nickel, so the daughter is nickel-60.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Beta-minus: A stays the same, Z increases by 1.",
              "27 plus 1 = 28.",
              "Element with Z = 28 is nickel.",
            ],
          },
          {
            id: "phys-nuclear-bm3-09",
            question: "A sample of 6.4 grams of a pure radioactive isotope has a half-life of 5 years. What mass of the original isotope remains after 20 years?",
            options: ["0.2 g", "0.4 g", "0.8 g", "1.6 g"],
            answerIndex: 1,
            explanation:
              "Number of half-lives = 20 divided by 5 = 4. Fraction remaining = (1/2) raised to power 4 = 1/16. Mass = 6.4 divided by 16 = 0.4 g.",
            difficulty: "challenge",
            guideRef: "Half-Life",
            hints: [
              "Number of half-lives = 20 divided by 5.",
              "Fraction remaining = (1/2) to the power 4 = 1/16.",
              "Mass = 6.4 divided by 16.",
            ],
            strategy: "find n, then multiply the starting amount by (1/2) to the power n",
          },
          {
            id: "phys-nuclear-bm3-10",
            question: "A radioactive nuclide with nucleon number 234 and proton number 90 (thorium-234) emits a beta-minus particle. The product then emits a second beta-minus particle. What is the proton number of the final nuclide?",
            options: ["88", "90", "91", "92"],
            answerIndex: 3,
            explanation:
              "Each beta-minus decay increases the proton number by 1 and leaves the nucleon number unchanged. Starting at Z = 90: after one beta, Z = 91; after a second beta, Z = 92. The nucleon number stays at 234. The final nuclide is uranium-234.",
            difficulty: "challenge",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Beta-minus increases Z by 1 each time and leaves A unchanged.",
              "Apply the change twice: 90 to 91 to 92.",
              "A stays at 234 throughout.",
            ],
            strategy: "apply the decay rule once per emission, tracking A and Z separately",
          },
        ],
      },
      {
        id: "phys-nuclear-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        questions: [
          {
            id: "phys-nuclear-bm4-01",
            question: "Which observation from the alpha-scattering experiment showed that the atom is mostly empty space?",
            options: [
              "A few alpha particles bounced straight back",
              "Most alpha particles passed straight through the foil with little or no deflection",
              "Some alpha particles were absorbed by the screen",
              "The foil became hot",
            ],
            answerIndex: 1,
            explanation:
              "The fact that the great majority of alpha particles passed straight through the thin foil shows there is very little matter in their path, so the atom must be mostly empty space.",
            difficulty: "warmup",
            guideRef: "The Nuclear Model of the Atom",
          },
          {
            id: "phys-nuclear-bm4-02",
            question: "Which radiation is the most strongly ionising?",
            options: ["Alpha", "Beta", "Gamma", "All ionise equally"],
            answerIndex: 0,
            explanation:
              "Alpha is the most ionising because its large charge (+2) and mass cause many ionisations per unit length. This also makes its range short.",
            difficulty: "warmup",
            guideRef: "Types of Nuclear Radiation",
          },
          {
            id: "phys-nuclear-bm4-03",
            question: "Which of these correctly states the change in nucleon number A and proton number Z during alpha decay?",
            options: [
              "A decreases by 4, Z decreases by 2",
              "A unchanged, Z increases by 1",
              "A decreases by 2, Z decreases by 4",
              "A increases by 4, Z increases by 2",
            ],
            answerIndex: 0,
            explanation:
              "An alpha particle carries away 2 protons and 2 neutrons, so the nucleon number falls by 4 and the proton number falls by 2.",
            difficulty: "warmup",
            guideRef: "Radioactive Decay and Nuclear Equations",
          },
          {
            id: "phys-nuclear-bm4-04",
            question: "Polonium-210 (proton number 84) decays by alpha emission. Which is the correctly balanced equation, where Pb has proton number 82 and He has proton number 2?",
            options: [
              "Po-210 gives Pb-206 (Z 82) plus He-4 (Z 2)",
              "Po-210 gives Pb-210 (Z 82) plus He-4 (Z 2)",
              "Po-210 gives Bi-210 (Z 83) plus an electron",
              "Po-210 gives Pb-206 (Z 82) plus an electron",
            ],
            answerIndex: 0,
            explanation:
              "Alpha decay: A 210 minus 4 = 206; Z 84 minus 2 = 82, which is lead (Pb). Check: 210 = 206 + 4 and 84 = 82 + 2. The daughter is lead-206.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Alpha emission gives off helium-4, not an electron.",
              "A: 210 minus 4 = 206; Z: 84 minus 2 = 82.",
              "Check that A and Z balance on both sides.",
            ],
          },
          {
            id: "phys-nuclear-bm4-05",
            question: "A decay graph shows the count rate halving from 400 to 200 counts/min between 0 and 6 minutes. What will the count rate be at 18 minutes?",
            options: ["100 counts/min", "50 counts/min", "25 counts/min", "12.5 counts/min"],
            answerIndex: 1,
            explanation:
              "The half-life is 6 minutes (time to fall from 400 to 200). At 18 minutes, n = 18 divided by 6 = 3 half-lives: 400 to 200 to 100 to 50 counts/min.",
            difficulty: "core",
            guideRef: "Half-Life",
            hints: [
              "First read the half-life: the time for the count to halve is 6 minutes.",
              "Number of half-lives at 18 minutes = 18 divided by 6 = 3.",
              "Halve 400 three times.",
            ],
            strategy: "read the half-life from the graph, then count the halvings",
          },
          {
            id: "phys-nuclear-bm4-06",
            question: "Why does a medical gamma tracer need to be a gamma emitter rather than an alpha emitter?",
            options: [
              "Alpha radiation is not ionising",
              "Gamma can pass out of the body to reach a detector, while alpha would be absorbed inside the body",
              "Gamma stays in the body longer than alpha",
              "Alpha emitters are always more expensive",
            ],
            answerIndex: 1,
            explanation:
              "Gamma radiation penetrates body tissue and reaches a detector or gamma camera outside the patient. Alpha would be absorbed within a fraction of a millimetre of tissue and could not be detected externally (and would do harm inside).",
            difficulty: "core",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "The radiation must escape the body to be detected.",
              "Alpha has a very short range and would be absorbed by tissue.",
              "Gamma is penetrating and can be picked up outside the body.",
            ],
          },
          {
            id: "phys-nuclear-bm4-07",
            question: "Which list places the three radiations in order of increasing penetrating power?",
            options: [
              "Gamma, beta, alpha",
              "Alpha, beta, gamma",
              "Beta, alpha, gamma",
              "Alpha, gamma, beta",
            ],
            answerIndex: 1,
            explanation:
              "Alpha is least penetrating (stopped by paper), beta is intermediate (stopped by a few mm of aluminium), gamma is most penetrating (only reduced by thick lead or concrete).",
            difficulty: "core",
            guideRef: "Types of Nuclear Radiation",
            hints: [
              "Recall what stops each radiation: paper, aluminium, lead.",
              "Least penetrating is stopped most easily.",
              "Order from paper-stopped to lead-needed.",
            ],
          },
          {
            id: "phys-nuclear-bm4-08",
            question: "Lead-214 (proton number 82) decays by beta-minus emission. What is the daughter nuclide, where Bi has proton number 83?",
            options: [
              "Bismuth-214, proton number 83",
              "Thallium-210, proton number 81",
              "Lead-213, proton number 82",
              "Polonium-214, proton number 84",
            ],
            answerIndex: 0,
            explanation:
              "Beta-minus decay: nucleon number stays at 214 and proton number increases by 1 (82 to 83). Element with Z = 83 is bismuth, so the daughter is bismuth-214.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Beta-minus: A unchanged, Z increases by 1.",
              "82 plus 1 = 83.",
              "Element with Z = 83 is bismuth.",
            ],
          },
          {
            id: "phys-nuclear-bm4-09",
            question: "Uranium-238 has a half-life of 4.5 billion years, while technetium-99m has a half-life of 6 hours. Which statement comparing them is correct?",
            options: [
              "Both decay to negligible activity in the same time",
              "Uranium-238 is far more useful as a short-term medical tracer",
              "Technetium-99m decays to a low activity in about a day, whereas uranium-238 remains active over geological timescales",
              "Half-life depends on the size of the sample, so neither value is fixed",
            ],
            answerIndex: 2,
            explanation:
              "The very short half-life of technetium-99m means its activity falls quickly (good for tracers), while uranium-238's enormous half-life means it stays active for billions of years (used for dating rocks). Half-life is a fixed property of the isotope, independent of sample size.",
            difficulty: "challenge",
            guideRef: "Half-Life",
            hints: [
              "Short half-life means activity drops fast.",
              "Long half-life means the isotope stays active for a very long time.",
              "Half-life does not depend on how much you have.",
            ],
            strategy: "link half-life length to the timescale of the application",
          },
          {
            id: "phys-nuclear-bm4-10",
            question: "A sealed source emits radiation that passes through paper and through several millimetres of aluminium with the count rate barely changing, but is greatly reduced by a thick lead block. Which radiation is it?",
            options: ["Alpha", "Beta", "Gamma", "A mixture of alpha and beta only"],
            answerIndex: 2,
            explanation:
              "Paper would stop alpha and aluminium would stop beta, but neither reduces this radiation. Only thick lead reduces it, which is the signature of gamma radiation.",
            difficulty: "challenge",
            guideRef: "Types of Nuclear Radiation",
            hints: [
              "Paper has no effect, so there is no alpha.",
              "Aluminium has no effect, so there is no significant beta.",
              "Only lead reduces it, which points to gamma.",
            ],
            strategy: "use the absorption results to rule out each radiation in turn",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "phys-nuclear-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        questions: [
          {
            id: "phys-nuclear-bq1-01",
            question: "Describe the structure of an atom according to the nuclear model. In your answer name the particles, state their relative charges, and state where each is found.",
            marks: 4,
            modelAnswer:
              "An atom has a tiny, dense central nucleus containing protons and neutrons. Protons have a relative charge of +1 and neutrons have a relative charge of 0 (they are neutral). Electrons, which have a relative charge of -1, orbit the nucleus at a relatively large distance. Most of the atom is empty space, and almost all of its mass is concentrated in the nucleus.",
            markScheme: [
              "nucleus is central, tiny and dense / contains most of the mass",
              "nucleus contains protons (+1) and neutrons (0/neutral)",
              "electrons (-1) orbit / surround the nucleus",
              "most of the atom is empty space",
            ],
            commonError:
              "Some students place electrons inside the nucleus or give the neutron a charge. Neutrons are neutral and electrons orbit outside the nucleus.",
            difficulty: "warmup",
            guideRef: "The Nuclear Model of the Atom",
          },
          {
            id: "phys-nuclear-bq1-02",
            question: "The nuclide notation for an atom shows a nucleon number of 27 and a proton number of 13 (aluminium). (a) State the number of protons. (b) State the number of neutrons. (c) State the number of electrons in the neutral atom.",
            marks: 3,
            modelAnswer:
              "(a) Number of protons = proton number = 13.\n(b) Number of neutrons = nucleon number minus proton number = 27 minus 13 = 14.\n(c) In a neutral atom the number of electrons equals the number of protons = 13.",
            markScheme: [
              "(a) 13 protons",
              "(b) neutrons = 27 minus 13 = 14",
              "(c) 13 electrons (equals protons in a neutral atom)",
            ],
            commonError:
              "Students sometimes give the neutron number as 27 (the nucleon number) instead of subtracting the proton number.",
            difficulty: "warmup",
            guideRef: "Proton Number, Nucleon Number and Isotopes",
          },
          {
            id: "phys-nuclear-bq1-03",
            question: "Explain what is meant by isotopes. Use chlorine-35 and chlorine-37 (both proton number 17) as an example, stating the number of neutrons in each.",
            marks: 4,
            modelAnswer:
              "Isotopes are atoms of the same element that have the same proton number but different nucleon numbers (different numbers of neutrons). Chlorine-35 and chlorine-37 both have 17 protons, so they are the same element with the same chemical properties. Chlorine-35 has 35 minus 17 = 18 neutrons; chlorine-37 has 37 minus 17 = 20 neutrons. They differ only in the number of neutrons.",
            markScheme: [
              "same proton number / same element",
              "different nucleon number / different number of neutrons",
              "chlorine-35 has 18 neutrons (35 minus 17)",
              "chlorine-37 has 20 neutrons (37 minus 17)",
            ],
            commonError:
              "A common error is to say isotopes have different numbers of protons. Isotopes always have the same proton number; only the neutron number differs.",
            difficulty: "core",
            guideRef: "Proton Number, Nucleon Number and Isotopes",
            hints: [
              "Define isotopes in terms of proton number and nucleon number.",
              "Neutrons = nucleon number minus proton number.",
              "Apply N = A minus Z to each isotope using Z = 17.",
            ],
            strategy: "state the definition, then apply N = A minus Z to each example",
          },
          {
            id: "phys-nuclear-bq1-04",
            question: "A teacher places a radioactive source near a detector and records the count rate. The class then puts different absorbers between the source and the detector. With no absorber the count rate is 500 counts/s. With a sheet of paper it falls to 360 counts/s. With a 5 mm aluminium plate added it falls to 40 counts/s, which is close to the background level. State and explain which types of radiation the source emits.",
            marks: 4,
            modelAnswer:
              "The source emits both alpha and beta radiation. The drop when paper is added (500 to 360 counts/s) shows that some alpha radiation was present, because paper stops alpha. The further large drop when aluminium is added (360 to 40 counts/s, near background) shows that beta was also present, because a few millimetres of aluminium stops beta. Since the final count rate is close to background, there is little or no gamma radiation, as gamma would pass through the aluminium and keep the count rate well above background.",
            markScheme: [
              "alpha is present: paper causes a drop, paper stops alpha",
              "beta is present: aluminium causes a further large drop, aluminium stops beta",
              "little or no gamma: final reading near background, gamma would penetrate aluminium",
              "correct overall conclusion: alpha and beta (no significant gamma)",
            ],
            commonError:
              "Students often forget to use the background reading: because the final count is near background, gamma can be ruled out. Always compare the final value with the background level.",
            difficulty: "core",
            guideRef: "Types of Nuclear Radiation",
            hints: [
              "Each absorber removes one type of radiation: paper removes alpha, aluminium removes beta.",
              "Look at which step causes a drop to decide what is present.",
              "Compare the final reading to background to decide about gamma.",
            ],
            strategy: "interpret each absorption step in turn, then check the final value against background",
          },
          {
            id: "phys-nuclear-bq1-05",
            question: "Radium-226 (nucleon number 226, proton number 88) decays by alpha emission to radon (Rn). Write the balanced nuclear equation, giving the nucleon number and proton number of the radon nuclide and of the alpha particle.",
            marks: 3,
            modelAnswer:
              "Radium-226 (A 226, Z 88) gives radon (A 222, Z 86) plus an alpha particle helium-4 (A 4, Z 2).\nCheck: nucleon numbers 226 = 222 + 4. Proton numbers 88 = 86 + 2. Both balance.",
            markScheme: [
              "alpha particle written as helium-4 (A 4, Z 2)",
              "radon daughter A = 222 (226 minus 4)",
              "radon daughter Z = 86 (88 minus 2)",
            ],
            commonError:
              "Students sometimes change A by 2 and Z by 4 (reversing the rule). Alpha removes 2 protons and 2 neutrons, so A falls by 4 and Z falls by 2.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "The alpha particle is helium-4: A = 4, Z = 2.",
              "Subtract 4 from the nucleon number and 2 from the proton number.",
              "Check both totals balance across the equation.",
            ],
            strategy: "balance-the-equation: conserve A and Z, then identify the daughter",
            solutions: [
              {
                label: "Conserving A and Z",
                steps: [
                  "Daughter nucleon number = 226 minus 4 = 222",
                  "Daughter proton number = 88 minus 2 = 86",
                  "Element with Z = 86 is radon (Rn), so daughter is radon-222",
                  "Check: 226 = 222 + 4 and 88 = 86 + 2",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bq1-06",
            question: "A radioactive sample has an initial count rate of 1280 counts/min. Its half-life is 3 hours. (a) Calculate the count rate after 12 hours. (b) State the fraction of the original undecayed nuclei remaining after 12 hours.",
            marks: 4,
            modelAnswer:
              "(a) Number of half-lives = 12 divided by 3 = 4. Count rate halves four times: 1280 to 640 to 320 to 160 to 80 counts/min. So the count rate after 12 hours is 80 counts/min.\n(b) Fraction remaining = (1/2) to the power 4 = 1/16.",
            markScheme: [
              "(a) number of half-lives n = 12 / 3 = 4",
              "(a) count rate = 1280 / 16 = 80 counts/min",
              "(b) fraction = (1/2) to power 4",
              "(b) fraction = 1/16",
            ],
            commonError:
              "A frequent error is to divide the count rate by the number of half-lives (1280 divided by 4) instead of halving it n times. Each half-life halves the value, so divide by 2 to the power n.",
            difficulty: "core",
            guideRef: "Half-Life",
            hints: [
              "Number of half-lives = total time divided by half-life.",
              "Halve the count rate once for each half-life.",
              "Fraction remaining = (1/2) to the power n.",
            ],
            strategy: "count-the-halvings",
            solutions: [
              {
                label: "Successive halving",
                steps: [
                  "n = 12 / 3 = 4 half-lives",
                  "1280 to 640 (1 half-life)",
                  "640 to 320 to 160 to 80 (half-lives 2, 3, 4)",
                  "Count rate = 80 counts/min; fraction = 1/16",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bq1-07",
            question: "State four safety precautions that should be taken when handling radioactive sources in a school laboratory, and briefly explain why each one reduces the risk.",
            marks: 4,
            modelAnswer:
              "1. Use long-handled tongs to hold the source, increasing the distance from the body so the dose received is reduced. 2. Keep the time of handling as short as possible, so less radiation is received. 3. Point the source away from people and never towards the eyes, to avoid irradiating sensitive tissue. 4. Store the source in a lead-lined container when not in use, because lead absorbs the radiation and shields people nearby.",
            markScheme: [
              "use tongs / maximise distance: dose decreases with distance",
              "minimise time of exposure: less radiation received",
              "point source away from people / body: avoid irradiating tissue",
              "store in lead-lined box: lead shields / absorbs radiation",
            ],
            commonError:
              "Some answers simply list precautions without explaining why each works. The question asks for a brief reason for each precaution.",
            difficulty: "core",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Think of the three key factors: time, distance and shielding.",
              "For each precaution, link it to reducing the dose received.",
              "Storage and handling both matter.",
            ],
            strategy: "use the time-distance-shielding framework and add a reason for each",
          },
          {
            id: "phys-nuclear-bq1-08",
            question: "Explain why alpha radiation is the most dangerous type if a source is taken into the body (for example by inhaling radioactive dust), even though alpha is the least penetrating type outside the body.",
            marks: 4,
            modelAnswer:
              "Outside the body, alpha is the least dangerous because it has a very short range and is stopped by the outer layer of dead skin, so it does not reach living tissue. Inside the body, however, the alpha source is in direct contact with living cells. Alpha is very strongly ionising, so it deposits all its energy over a very short distance within a small region of tissue, causing intense ionisation and damage to cells and DNA. This concentrated damage makes inhaled or ingested alpha emitters especially harmful.",
            markScheme: [
              "outside: alpha has short range / stopped by skin, so does not reach living tissue",
              "inside: source is in direct contact with living cells",
              "alpha is very strongly ionising / deposits energy over a short distance",
              "intense ionisation damages cells / DNA, so it is most dangerous internally",
            ],
            commonError:
              "Students sometimes say alpha is always the most dangerous or always the least dangerous. The danger depends on whether the source is inside or outside the body.",
            difficulty: "challenge",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Consider where the alpha energy is deposited inside versus outside the body.",
              "Alpha has a short range but very high ionising power.",
              "Inside the body there is no skin to absorb it before it reaches cells.",
            ],
            strategy: "contrast the external and internal cases using range and ionising power",
          },
          {
            id: "phys-nuclear-bq1-09",
            question: "A nuclide with nucleon number 218 and proton number 84 (polonium-218) decays by alpha emission. The daughter then decays by beta-minus emission. Determine the nucleon number and proton number of the final nuclide after both decays.",
            marks: 4,
            modelAnswer:
              "Step 1 (alpha decay): A falls by 4 to 218 minus 4 = 214; Z falls by 2 to 84 minus 2 = 82. The daughter has A 214, Z 82 (lead-214).\nStep 2 (beta-minus decay): A is unchanged at 214; Z increases by 1 to 82 plus 1 = 83. The final nuclide has nucleon number 214 and proton number 83 (bismuth-214).",
            markScheme: [
              "after alpha: A = 214 (218 minus 4)",
              "after alpha: Z = 82 (84 minus 2)",
              "after beta: A unchanged at 214",
              "after beta: Z = 83 (82 plus 1)",
            ],
            commonError:
              "A common slip is to change A during the beta step. Beta-minus decay leaves the nucleon number unchanged; only the proton number rises by 1.",
            difficulty: "challenge",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Apply the alpha rule first: A minus 4, Z minus 2.",
              "Then apply the beta rule: A unchanged, Z plus 1.",
              "Track A and Z separately through both steps.",
            ],
            strategy: "apply each decay rule in sequence, updating A and Z each time",
            solutions: [
              {
                label: "Two-step decay chain",
                steps: [
                  "Alpha: A = 218 minus 4 = 214; Z = 84 minus 2 = 82",
                  "Daughter after alpha is lead-214 (A 214, Z 82)",
                  "Beta-minus: A stays 214; Z = 82 plus 1 = 83",
                  "Final nuclide: nucleon number 214, proton number 83 (bismuth-214)",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bq1-10",
            question: "A sample of carbon-14, half-life 5730 years, is found in an ancient piece of wood. The activity of the carbon-14 in the wood is one quarter of the activity in living wood of the same mass. (a) State how many half-lives have passed. (b) Estimate the age of the wood.",
            marks: 4,
            modelAnswer:
              "(a) The activity has fallen to one quarter, which is (1/2) to the power 2, so 2 half-lives have passed.\n(b) Age = number of half-lives times half-life = 2 times 5730 = 11 460 years.",
            markScheme: [
              "(a) one quarter = (1/2) squared, so n = 2 half-lives",
              "(b) age = n times half-life = 2 times 5730",
              "(b) age = 11 460 years (accept about 11 500 years)",
            ],
            commonError:
              "Students sometimes treat one quarter as two half-lives of time directly without multiplying by the half-life, or read one quarter as four half-lives. One quarter equals (1/2) squared, which is 2 half-lives.",
            difficulty: "core",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Express the fraction remaining as a power of one half.",
              "One quarter = (1/2) squared, so n = 2.",
              "Age = n times the half-life.",
            ],
            strategy: "convert the fraction to a number of half-lives, then multiply by the half-life",
            solutions: [
              {
                label: "Fraction to age",
                steps: [
                  "Fraction remaining = 1/4 = (1/2) squared, so n = 2 half-lives",
                  "Age = n times half-life = 2 times 5730",
                  "Age = 11 460 years",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-nuclear-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        questions: [
          {
            id: "phys-nuclear-bq2-01",
            question: "State what is meant by the term half-life of a radioactive isotope.",
            marks: 2,
            modelAnswer:
              "The half-life is the time taken for half of the radioactive nuclei in a sample to decay. Equivalently, it is the time for the activity or count rate of the sample to fall to half its initial value.",
            markScheme: [
              "time taken for half the (radioactive) nuclei to decay",
              "or time for the activity / count rate to halve",
            ],
            commonError:
              "Students sometimes say half-life is the time for the whole sample to decay, or for half the mass of the object to disappear. It is the time for half the radioactive nuclei (or the activity) to halve.",
            difficulty: "warmup",
            guideRef: "Half-Life",
          },
          {
            id: "phys-nuclear-bq2-02",
            question: "State two natural sources and one artificial (man-made) source of background radiation.",
            marks: 3,
            modelAnswer:
              "Two natural sources: radon gas from rocks and soil; cosmic rays from space (other acceptable answers: rocks and building materials such as granite, or potassium-40 in food and drink). One artificial source: medical X-rays or radiotherapy (other acceptable answer: fallout from nuclear weapons testing or waste from the nuclear industry).",
            markScheme: [
              "first natural source (e.g. radon gas / rocks / cosmic rays / food)",
              "second different natural source",
              "one artificial source (e.g. medical X-rays / nuclear industry / weapons fallout)",
            ],
            commonError:
              "Students sometimes list two versions of the same source (for example rocks and granite) instead of two distinct sources, or give a natural source as artificial.",
            difficulty: "warmup",
            guideRef: "Types of Nuclear Radiation",
          },
          {
            id: "phys-nuclear-bq2-03",
            question: "Explain what is meant by saying that radioactive decay is random and spontaneous.",
            marks: 3,
            modelAnswer:
              "Random means it is impossible to predict which particular nucleus will decay next or exactly when any given nucleus will decay; we can only describe the behaviour of large numbers of nuclei statistically. Spontaneous means the decay happens by itself and is not triggered or affected by external conditions such as temperature, pressure or chemical state.",
            markScheme: [
              "random: cannot predict which nucleus decays / when a given nucleus decays",
              "random: only statistical / average behaviour can be predicted",
              "spontaneous: not affected by external conditions (temperature, pressure, chemistry)",
            ],
            commonError:
              "Students often confuse the two terms or only define one. Random refers to unpredictability; spontaneous refers to independence from external conditions.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Random is about not being able to predict individual nuclei.",
              "Spontaneous is about external conditions having no effect.",
              "Address both terms separately.",
            ],
            strategy: "define each term separately with a clear distinguishing idea",
          },
          {
            id: "phys-nuclear-bq2-04",
            question: "Strontium-90 (nucleon number 90, proton number 38) is a beta-minus emitter. (a) Write the balanced nuclear equation, identifying the daughter as yttrium (Y), Z = 39. (b) Explain why the daughter nucleus is a different element from strontium.",
            marks: 4,
            modelAnswer:
              "(a) Strontium-90 (A 90, Z 38) gives yttrium-90 (A 90, Z 39) plus a beta-minus particle, the electron with A 0, Z minus 1.\nCheck: nucleon numbers 90 = 90 + 0. Proton numbers 38 = 39 + (minus 1). Both balance.\n(b) In beta-minus decay a neutron in the nucleus changes into a proton, so the proton number increases by 1. Because the proton number defines the element, the daughter (Z = 39) is a different element (yttrium) from strontium (Z = 38).",
            markScheme: [
              "(a) daughter yttrium-90 with A = 90, Z = 39",
              "(a) beta particle written as electron with A 0, Z minus 1",
              "(a) equation balances for A and Z",
              "(b) proton number increases by 1 / neutron becomes a proton, so element changes",
            ],
            commonError:
              "Students sometimes keep the proton number the same in the equation. In beta-minus decay Z must increase by 1, giving a new element.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Beta-minus: A unchanged, Z increases by 1.",
              "Write the electron as A 0, Z minus 1.",
              "The element is defined by the proton number.",
            ],
            strategy: "balance-the-equation, then link the change in Z to the change of element",
            solutions: [
              {
                label: "Balancing the beta equation",
                steps: [
                  "Daughter A = 90 (unchanged in beta decay)",
                  "Daughter Z = 38 plus 1 = 39 (yttrium)",
                  "Beta particle is the electron: A 0, Z minus 1",
                  "Check: 90 = 90 + 0 and 38 = 39 + (minus 1)",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bq2-05",
            question: "A radioactive source has a measured count rate of 1640 counts/min. The background count rate is 40 counts/min. The half-life of the source is 5 minutes. Calculate the measured count rate (including background) after 15 minutes.",
            marks: 4,
            modelAnswer:
              "First correct for background: source count rate = 1640 minus 40 = 1600 counts/min.\nNumber of half-lives = 15 divided by 5 = 3.\nSource count rate after 15 minutes = 1600 times (1/2) cubed = 1600 divided by 8 = 200 counts/min.\nMeasured count rate (add background) = 200 plus 40 = 240 counts/min.",
            markScheme: [
              "subtract background: 1640 minus 40 = 1600 counts/min",
              "number of half-lives n = 15 / 5 = 3",
              "source count rate = 1600 / 8 = 200 counts/min",
              "add background back: 200 + 40 = 240 counts/min",
            ],
            commonError:
              "Students often forget to subtract the background before applying the half-life, and forget to add it back at the end. Background is always present and must be handled at both ends of the calculation.",
            difficulty: "challenge",
            guideRef: "Half-Life",
            hints: [
              "Background must be removed before applying the half-life.",
              "Apply the half-life only to the source (corrected) count rate.",
              "Add the background back to get the final measured reading.",
            ],
            strategy: "subtract background, apply the half-life, then add background back",
            solutions: [
              {
                label: "Background-corrected half-life calculation",
                steps: [
                  "Corrected source count rate = 1640 minus 40 = 1600 counts/min",
                  "n = 15 / 5 = 3 half-lives",
                  "Source after 15 min = 1600 / 8 = 200 counts/min",
                  "Measured = 200 + 40 = 240 counts/min",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bq2-06",
            question: "Describe how a beta source can be used to control the thickness of aluminium foil as it is produced on a rolling machine. Explain how the system corrects the thickness automatically.",
            marks: 4,
            modelAnswer:
              "A beta source is placed on one side of the foil and a detector on the other side. Beta radiation is partly absorbed by the foil, so the count rate reaching the detector depends on the foil thickness. If the foil becomes too thick, more beta is absorbed and the count rate falls; if too thin, less is absorbed and the count rate rises. The detector signal is fed to a control system that adjusts the pressure of the rollers: a falling count rate makes the rollers press harder to thin the foil, and a rising count rate eases the rollers, keeping the thickness constant.",
            markScheme: [
              "beta source one side, detector the other side of the foil",
              "beta is partly absorbed, so count rate depends on thickness",
              "thicker foil absorbs more (lower count); thinner foil absorbs less (higher count)",
              "detector feeds back to rollers to adjust thickness automatically",
            ],
            commonError:
              "Students sometimes choose alpha or gamma. Alpha would be stopped completely (no signal) and gamma would pass through almost unchanged (insensitive). Beta is needed because it is partly absorbed.",
            difficulty: "core",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Place source and detector on opposite sides of the foil.",
              "Relate the count rate to how much beta is absorbed.",
              "Describe the feedback that adjusts the rollers.",
            ],
            strategy: "describe the set-up, the physics of absorption, then the feedback loop",
          },
          {
            id: "phys-nuclear-bq2-07",
            question: "A nuclide of bismuth-212 has nucleon number 212 and proton number 83. It emits an alpha particle. (a) Write the nucleon number and proton number of the daughter nucleus. (b) Using the fact that Z = 81 is thallium, name the daughter nuclide.",
            marks: 3,
            modelAnswer:
              "(a) Alpha decay: A = 212 minus 4 = 208; Z = 83 minus 2 = 81.\n(b) The element with proton number 81 is thallium, so the daughter is thallium-208.",
            markScheme: [
              "(a) daughter A = 208 (212 minus 4)",
              "(a) daughter Z = 81 (83 minus 2)",
              "(b) daughter named thallium-208",
            ],
            commonError:
              "Students may subtract the wrong amounts. Alpha removes 4 from A and 2 from Z.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Alpha decay: A minus 4, Z minus 2.",
              "212 minus 4 = 208; 83 minus 2 = 81.",
              "Z = 81 is thallium.",
            ],
            strategy: "apply the alpha rule, then read off the element from Z",
            solutions: [
              {
                label: "Alpha decay of bismuth-212",
                steps: [
                  "A = 212 minus 4 = 208",
                  "Z = 83 minus 2 = 81",
                  "Element with Z = 81 is thallium",
                  "Daughter nuclide is thallium-208",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bq2-08",
            question: "Explain why a radioactive isotope used as a tracer to study the flow of liquid through underground pipes should be a gamma emitter with a half-life of a few hours rather than a few years.",
            marks: 4,
            modelAnswer:
              "A gamma emitter is needed because gamma radiation can penetrate the soil and pipe walls and be detected at the surface, whereas alpha and beta would be absorbed before reaching the detector. The half-life should be a few hours so that the tracer remains active long enough to follow the liquid through the pipes and locate a leak, but then decays to a negligible activity quickly. If the half-life were a few years, the tracer would remain radioactive in the ground and water supply for a very long time, creating a lasting contamination and safety hazard.",
            markScheme: [
              "gamma is penetrating, so it can be detected through soil / pipe walls",
              "alpha and beta would be absorbed and not detected",
              "half-life of a few hours lasts long enough to track the flow / find a leak",
              "but then decays quickly, avoiding long-term contamination",
            ],
            commonError:
              "Students may explain only the choice of gamma or only the half-life. The question asks about both the type and the half-life.",
            difficulty: "challenge",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Think about which radiation can be detected through the ground.",
              "The tracer must last long enough to follow the flow.",
              "A long half-life would leave radioactivity in the water supply.",
            ],
            strategy: "justify the radiation type and the half-life separately, both with practical reasons",
          },
          {
            id: "phys-nuclear-bq2-09",
            question: "The table shows the count rate of a sample measured every 2 hours. Time/h: 0, 2, 4, 6, 8 with count rates 2000, 1410, 1000, 707, 500 counts/min. (a) Use the data to determine the half-life of the sample. (b) Predict the count rate at 12 hours.",
            marks: 5,
            modelAnswer:
              "(a) The count rate falls from 2000 to 1000 counts/min between 0 and 4 hours, so the half-life is 4 hours. This is confirmed by the fall from 1000 (at 4 h) to 500 (at 8 h), again a 4-hour interval.\n(b) From 0 to 12 hours, number of half-lives = 12 divided by 4 = 3. Count rate = 2000 times (1/2) cubed = 2000 divided by 8 = 250 counts/min.",
            markScheme: [
              "(a) identify a halving: 2000 to 1000 takes 4 hours",
              "(a) confirm with a second halving: 1000 to 500 also takes 4 hours",
              "(a) half-life = 4 hours",
              "(b) n = 12 / 4 = 3 half-lives",
              "(b) count rate = 2000 / 8 = 250 counts/min",
            ],
            commonError:
              "Students sometimes pick two points that are not exactly half of each other. Choose points where the count rate clearly halves (for example 2000 to 1000) to read the half-life reliably.",
            difficulty: "core",
            guideRef: "Half-Life",
            hints: [
              "Find a pair of times where the count rate halves.",
              "2000 to 1000 takes 4 hours, so the half-life is 4 hours.",
              "For part (b), n = 12 divided by 4, then halve repeatedly.",
            ],
            strategy: "read the half-life from a clear halving in the data, then extrapolate",
            solutions: [
              {
                label: "Reading and extrapolating",
                steps: [
                  "2000 counts/min at 0 h halves to 1000 at 4 h, so t-half = 4 h",
                  "Confirm: 1000 at 4 h halves to 500 at 8 h (another 4 h)",
                  "At 12 h: n = 12 / 4 = 3 half-lives",
                  "Count rate = 2000 / 8 = 250 counts/min",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bq2-10",
            question: "A nuclide of uranium-238 (nucleon number 238, proton number 92) decays by alpha emission to thorium (Th). The thorium then decays by beta-minus emission to protactinium (Pa). Using Z = 90 for thorium and Z = 91 for protactinium, write the two balanced nuclear equations.",
            marks: 5,
            modelAnswer:
              "Step 1 (alpha): uranium-238 (A 238, Z 92) gives thorium-234 (A 234, Z 90) plus an alpha particle helium-4 (A 4, Z 2). Check: 238 = 234 + 4 and 92 = 90 + 2.\nStep 2 (beta-minus): thorium-234 (A 234, Z 90) gives protactinium-234 (A 234, Z 91) plus a beta particle, the electron with A 0, Z minus 1. Check: 234 = 234 + 0 and 90 = 91 + (minus 1).",
            markScheme: [
              "step 1: alpha particle helium-4 (A 4, Z 2)",
              "step 1: thorium-234 with A = 234, Z = 90 and equation balances",
              "step 2: beta particle electron with A 0, Z minus 1",
              "step 2: protactinium-234 with A = 234, Z = 91",
              "step 2: equation balances for A and Z",
            ],
            commonError:
              "Students sometimes change the nucleon number during the beta step or change the proton number by 2 during the alpha step. Alpha: A minus 4, Z minus 2. Beta-minus: A unchanged, Z plus 1.",
            difficulty: "challenge",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Do the alpha step first: A minus 4, Z minus 2.",
              "Then the beta-minus step: A unchanged, Z plus 1.",
              "Check that both equations balance for A and Z.",
            ],
            strategy: "balance each equation separately, carrying the daughter of step 1 into step 2",
            solutions: [
              {
                label: "Two-equation decay chain",
                steps: [
                  "Alpha: A = 238 minus 4 = 234; Z = 92 minus 2 = 90 (thorium-234)",
                  "Equation 1: uranium-238 gives thorium-234 plus helium-4",
                  "Beta-minus: A stays 234; Z = 90 plus 1 = 91 (protactinium-234)",
                  "Equation 2: thorium-234 gives protactinium-234 plus an electron (A 0, Z minus 1)",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-nuclear-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        questions: [
          {
            id: "phys-nuclear-bq3-01",
            question: "State the relative charge and the relative mass of a proton, a neutron and an electron.",
            marks: 3,
            modelAnswer:
              "Proton: relative charge +1, relative mass 1. Neutron: relative charge 0, relative mass 1. Electron: relative charge minus 1, relative mass about 1/2000 (negligible compared with a nucleon).",
            markScheme: [
              "proton: charge +1, mass 1",
              "neutron: charge 0, mass 1",
              "electron: charge minus 1, mass about 1/2000 (negligible)",
            ],
            commonError:
              "Students sometimes give the electron a relative mass of 1 or give the neutron a charge. The electron mass is negligible and the neutron is neutral.",
            difficulty: "warmup",
            guideRef: "The Nuclear Model of the Atom",
          },
          {
            id: "phys-nuclear-bq3-02",
            question: "Define the proton number Z and the nucleon number A of an atom.",
            marks: 2,
            modelAnswer:
              "The proton number Z is the number of protons in the nucleus; it defines which element the atom is. The nucleon number A is the total number of protons and neutrons in the nucleus.",
            markScheme: [
              "proton number = number of protons (in the nucleus)",
              "nucleon number = total number of protons and neutrons",
            ],
            commonError:
              "Students sometimes define the nucleon number as the number of neutrons only. It is the total of protons and neutrons.",
            difficulty: "warmup",
            guideRef: "Proton Number, Nucleon Number and Isotopes",
          },
          {
            id: "phys-nuclear-bq3-03",
            question: "Describe how alpha and beta particles behave differently when they pass through a uniform magnetic field, and explain why gamma radiation is undeflected.",
            marks: 4,
            modelAnswer:
              "Both alpha and beta particles are charged, so they experience a force in a magnetic field and follow curved paths. Because alpha is positive (+2) and beta is negative (minus 1), they curve in opposite directions to each other. The beta particle is much lighter and faster than the alpha, so for the same field it is deflected much more (a tighter curve). Gamma radiation has no charge, so it experiences no magnetic force and travels straight through undeflected.",
            markScheme: [
              "both alpha and beta are charged, so both are deflected",
              "alpha and beta deflect in opposite directions (opposite charges)",
              "beta deflected more than alpha (much lighter / faster)",
              "gamma has no charge so is not deflected",
            ],
            commonError:
              "Students often say alpha and beta deflect by the same amount. Because beta is far lighter, it deflects much more than alpha in the same field.",
            difficulty: "core",
            guideRef: "Types of Nuclear Radiation",
            hints: [
              "Only charged particles feel a force in a magnetic field.",
              "Opposite charges curve in opposite directions.",
              "A lighter particle is deflected more for the same field.",
            ],
            strategy: "compare charge (direction) and mass (amount of deflection), then handle gamma separately",
          },
          {
            id: "phys-nuclear-bq3-04",
            question: "Caesium-137 (nucleon number 137, proton number 55) is a beta-minus emitter. (a) Write the balanced nuclear equation, given that the daughter barium has Z = 56. (b) State how many neutrons the caesium-137 nucleus contains.",
            marks: 4,
            modelAnswer:
              "(a) Caesium-137 (A 137, Z 55) gives barium-137 (A 137, Z 56) plus a beta particle, the electron with A 0, Z minus 1. Check: 137 = 137 + 0 and 55 = 56 + (minus 1).\n(b) Neutrons in caesium-137 = A minus Z = 137 minus 55 = 82.",
            markScheme: [
              "(a) daughter barium-137 with A = 137, Z = 56",
              "(a) beta particle electron with A 0, Z minus 1",
              "(a) equation balances for A and Z",
              "(b) neutrons = 137 minus 55 = 82",
            ],
            commonError:
              "In part (b) some students use the daughter's proton number. The neutron number of caesium-137 uses its own Z = 55.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Beta-minus: A unchanged, Z plus 1.",
              "Daughter Z = 55 plus 1 = 56 (barium).",
              "Neutrons = A minus Z = 137 minus 55.",
            ],
            strategy: "balance the equation, then apply N = A minus Z to the parent",
            solutions: [
              {
                label: "Beta decay and neutron count",
                steps: [
                  "Daughter A = 137 (unchanged)",
                  "Daughter Z = 55 plus 1 = 56 (barium-137)",
                  "Beta particle is the electron: A 0, Z minus 1",
                  "Neutrons in caesium-137 = 137 minus 55 = 82",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bq3-05",
            question: "A sample contains 6.0 times 10 to the power 8 undecayed nuclei of an isotope with a half-life of 25 minutes. (a) How many nuclei remain undecayed after 75 minutes? (b) How many nuclei have decayed in this time?",
            marks: 4,
            modelAnswer:
              "(a) Number of half-lives = 75 divided by 25 = 3. Fraction remaining = (1/2) cubed = 1/8. Nuclei remaining = 6.0 times 10 to power 8, divided by 8 = 7.5 times 10 to power 7.\n(b) Nuclei decayed = initial minus remaining = 6.0 times 10 to power 8, minus 7.5 times 10 to power 7 = 5.25 times 10 to power 8.",
            markScheme: [
              "(a) number of half-lives n = 75 / 25 = 3",
              "(a) fraction remaining = (1/2) cubed = 1/8",
              "(a) nuclei remaining = 6.0e8 / 8 = 7.5e7",
              "(b) nuclei decayed = 6.0e8 minus 7.5e7 = 5.25e8",
            ],
            commonError:
              "In part (b) students sometimes give the number remaining instead of the number decayed. The number decayed is the initial number minus the number remaining.",
            difficulty: "core",
            guideRef: "Half-Life",
            hints: [
              "Find n = 75 divided by 25.",
              "Remaining = initial times (1/2) to the power n.",
              "Decayed = initial minus remaining.",
            ],
            strategy: "find the remaining nuclei first, then subtract from the start to get those decayed",
            solutions: [
              {
                label: "Remaining then decayed",
                steps: [
                  "n = 75 / 25 = 3 half-lives",
                  "Fraction remaining = (1/2) cubed = 1/8",
                  "Remaining = 6.0e8 / 8 = 7.5e7 nuclei",
                  "Decayed = 6.0e8 minus 7.5e7 = 5.25e8 nuclei",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bq3-06",
            question: "Explain why the half-life of a particular isotope is the same whether the sample is large or small, hot or cold, or chemically combined or pure.",
            marks: 3,
            modelAnswer:
              "Radioactive decay is a property of the unstable nucleus itself. Each nucleus has a fixed probability of decaying in a given time, set only by the type of nucleus. This probability is not affected by external conditions such as temperature, pressure or chemical bonding, because these involve the electrons and the surroundings, not the nucleus. The number of nuclei present does not change the probability per nucleus, so the fraction decaying in one half-life is always one half. Therefore the half-life is constant for a given isotope.",
            markScheme: [
              "decay is a property of the nucleus / each nucleus has a fixed decay probability",
              "external conditions (temperature, chemistry) do not affect the nucleus",
              "the probability per nucleus is independent of sample size, so the half-life is constant",
            ],
            commonError:
              "Students sometimes claim that a larger sample has a longer half-life. The half-life is independent of how many nuclei are present.",
            difficulty: "core",
            guideRef: "Half-Life",
            hints: [
              "Think about what controls decay: the nucleus or its surroundings?",
              "External conditions affect electrons, not the nucleus.",
              "The fraction decaying per half-life is always one half regardless of amount.",
            ],
            strategy: "argue from the nucleus having a fixed, condition-independent decay probability",
          },
          {
            id: "phys-nuclear-bq3-07",
            question: "Describe how radiation is used to treat cancer (radiotherapy) and explain one way the treatment is arranged to protect healthy tissue.",
            marks: 4,
            modelAnswer:
              "In radiotherapy a beam of gamma radiation (or another high-energy radiation) is aimed at the tumour. The radiation ionises and damages the cancer cells, killing them or stopping them dividing. To protect healthy tissue, the beam is directed from several different directions, all aimed at the tumour, or the source is rotated around the patient. This way the tumour at the centre receives a high total dose from every direction, while each path of healthy tissue receives only a small fraction of the dose.",
            markScheme: [
              "high-energy radiation (gamma) aimed at the tumour",
              "radiation kills / damages cancer cells",
              "beam directed from several directions or rotated around the patient",
              "tumour gets a high dose; surrounding healthy tissue gets a lower dose",
            ],
            commonError:
              "Students sometimes say radiotherapy avoids harming healthy cells entirely. It reduces the dose to healthy tissue, but cannot avoid it completely; rotating the beam concentrates the dose at the tumour.",
            difficulty: "core",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Radiation damages cells by ionising them.",
              "The tumour is the target, but the beam passes through healthy tissue too.",
              "Rotating or crossing beams concentrates the dose at the tumour.",
            ],
            strategy: "describe the mechanism (ionisation kills cells), then the geometry that spares healthy tissue",
          },
          {
            id: "phys-nuclear-bq3-08",
            question: "A radioactive source has an activity of 8000 Bq. After 36 days the activity has fallen to 500 Bq. (a) Determine the half-life of the source. (b) Calculate the activity that would remain after a further 12 days beyond the 36 days.",
            marks: 5,
            modelAnswer:
              "(a) 8000 divided by 500 = 16 = 2 to the power 4, so 4 half-lives have passed in 36 days. Half-life = 36 divided by 4 = 9 days.\n(b) A further 12 days is not a whole number of half-lives, so work in half-lives. From the 36-day point (activity 500 Bq), 12 days = 12 divided by 9 = 4/3 half-lives. After 1 half-life (9 days) the activity is 250 Bq; the remaining 3 days is 1/3 of a half-life. Using activity equals 500 times (1/2) to the power (12/9): (1/2) to the power 1.333 = about 0.397, so activity = 500 times 0.397 = about 198 Bq (approximately 200 Bq).",
            markScheme: [
              "(a) ratio 8000 / 500 = 16 = 2 to power 4, so n = 4 half-lives",
              "(a) half-life = 36 / 4 = 9 days",
              "(b) further 12 days = 12 / 9 = 1.33 half-lives from the 500 Bq point",
              "(b) activity = 500 times (1/2) to power (12/9)",
              "(b) activity is about 198 to 200 Bq",
            ],
            commonError:
              "Students often assume the extra 12 days is a whole number of half-lives. Here it is 12/9 of a half-life, so the activity does not simply halve a whole number of times.",
            difficulty: "challenge",
            guideRef: "Half-Life",
            hints: [
              "Find the half-life from the first part using the ratio of activities.",
              "Express the further 12 days as a number of half-lives: 12 divided by 9.",
              "Activity = starting activity times (1/2) to the power (number of half-lives).",
            ],
            strategy: "find the half-life first, then use the (1/2) to the power n formula for a non-integer number of half-lives",
            solutions: [
              {
                label: "Half-life then fractional decay",
                steps: [
                  "8000 / 500 = 16 = 2 to power 4, so n = 4 half-lives in 36 days",
                  "Half-life = 36 / 4 = 9 days",
                  "Further 12 days = 12 / 9 = 1.33 half-lives, starting from 500 Bq",
                  "Activity = 500 times (1/2) to power 1.33 = about 198 Bq (roughly 200 Bq)",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bq3-09",
            question: "A nuclide of radon-220 (nucleon number 220, proton number 86) undergoes a decay and the product is polonium-216 (proton number 84). (a) State the type of decay. (b) Justify your answer by showing the changes in nucleon number and proton number.",
            marks: 4,
            modelAnswer:
              "(a) The decay is alpha decay.\n(b) The nucleon number falls from 220 to 216, a decrease of 4, and the proton number falls from 86 to 84, a decrease of 2. A decrease of 4 in A and 2 in Z is exactly what happens when an alpha particle (helium-4, A 4, Z 2) is emitted, so the decay must be alpha decay.",
            markScheme: [
              "(a) alpha decay",
              "(b) nucleon number decreases by 4 (220 to 216)",
              "(b) proton number decreases by 2 (86 to 84)",
              "(b) these changes match the loss of a helium-4 nucleus (alpha particle)",
            ],
            commonError:
              "Students sometimes name the decay correctly but do not justify it with the changes in A and Z, which the question requires.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Compare the nucleon numbers and proton numbers of parent and product.",
              "A decrease of 4 in A and 2 in Z is the alpha signature.",
              "Link the changes to the particle emitted.",
            ],
            strategy: "find the changes in A and Z, then match them to the decay type",
            solutions: [
              {
                label: "Identifying the decay",
                steps: [
                  "Change in A = 220 minus 216 = 4 (decrease)",
                  "Change in Z = 86 minus 84 = 2 (decrease)",
                  "A minus 4 and Z minus 2 corresponds to emitting helium-4",
                  "Therefore the decay is alpha decay",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bq3-10",
            question: "Compare nuclear fission and nuclear fusion. Your answer should include one similarity and two differences, and should explain why fusion requires very high temperatures.",
            marks: 5,
            modelAnswer:
              "Similarity: both fission and fusion release a large amount of energy from the nucleus (mass is converted to energy). Difference 1: fission is the splitting of a heavy nucleus, such as uranium-235, into two smaller nuclei, while fusion is the joining of two light nuclei, such as hydrogen nuclei, to form a heavier one. Difference 2: fission is triggered when a heavy nucleus absorbs a neutron and needs no extreme temperature, whereas fusion needs extremely high temperatures and pressures. Fusion needs very high temperatures because the positively charged nuclei repel each other strongly; only at very high temperatures do the nuclei move fast enough to overcome this electrostatic repulsion and get close enough for the strong nuclear force to fuse them.",
            markScheme: [
              "similarity: both release (large amounts of) nuclear energy / from mass-energy conversion",
              "difference 1: fission splits a heavy nucleus; fusion joins light nuclei",
              "difference 2: fission triggered by neutron absorption / no high temperature needed; fusion needs very high temperature",
              "high temperature gives nuclei enough speed / energy",
              "to overcome the electrostatic repulsion between positive nuclei and get close enough to fuse",
            ],
            commonError:
              "Students often reverse the definitions of fission and fusion. Fission splits a heavy nucleus; fusion joins light nuclei.",
            difficulty: "challenge",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Both processes release energy from the nucleus.",
              "One splits heavy nuclei; the other joins light nuclei.",
              "Fusion needs to overcome repulsion between positive nuclei.",
            ],
            strategy: "structure the answer as one similarity, two differences, then the temperature explanation",
          },
        ],
      },
      {
        id: "phys-nuclear-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        questions: [
          {
            id: "phys-nuclear-bq4-01",
            question: "State which type of nuclear radiation is described by each of the following: (a) the most penetrating; (b) the most strongly ionising; (c) an electromagnetic wave.",
            marks: 3,
            modelAnswer:
              "(a) Gamma is the most penetrating. (b) Alpha is the most strongly ionising. (c) Gamma is an electromagnetic wave.",
            markScheme: [
              "(a) gamma (most penetrating)",
              "(b) alpha (most ionising)",
              "(c) gamma (electromagnetic wave)",
            ],
            commonError:
              "Students sometimes confuse penetrating and ionising power. Gamma is the most penetrating but the least ionising; alpha is the most ionising but least penetrating.",
            difficulty: "warmup",
            guideRef: "Types of Nuclear Radiation",
          },
          {
            id: "phys-nuclear-bq4-02",
            question: "An alpha particle and a beta particle are described by their make-up and charge. (a) State what an alpha particle is made of. (b) State what a beta-minus particle is and where it comes from.",
            marks: 3,
            modelAnswer:
              "(a) An alpha particle is made of 2 protons and 2 neutrons; it is a helium-4 nucleus. (b) A beta-minus particle is a fast-moving electron; it is created and emitted from the nucleus when a neutron changes into a proton.",
            markScheme: [
              "(a) alpha = 2 protons and 2 neutrons / helium nucleus",
              "(b) beta-minus = (fast) electron",
              "(b) emitted from the nucleus when a neutron becomes a proton",
            ],
            commonError:
              "Students sometimes say the beta electron comes from the electron shells. It is created in the nucleus when a neutron converts to a proton.",
            difficulty: "warmup",
            guideRef: "Types of Nuclear Radiation",
          },
          {
            id: "phys-nuclear-bq4-03",
            question: "Describe the Geiger-Marsden (Rutherford) alpha-scattering experiment and state the three main observations.",
            marks: 4,
            modelAnswer:
              "A beam of alpha particles from a radioactive source was directed at a very thin sheet of gold foil in a vacuum. A movable detector (a zinc-sulfide screen) was used to count the alpha particles arriving at different angles around the foil. The three main observations were: most alpha particles passed straight through the foil with little or no deflection; a small fraction were deflected through large angles (more than 90 degrees); and a very small fraction (about 1 in 8000) bounced almost straight back towards the source.",
            markScheme: [
              "alpha particles fired at thin gold foil (in a vacuum)",
              "movable detector / screen counts particles at different angles",
              "most pass straight through with little deflection",
              "a few deflected through large angles and a very few bounce straight back",
            ],
            commonError:
              "Students sometimes omit the back-scattering observation, which was the most important clue for the existence of a tiny, dense nucleus.",
            difficulty: "core",
            guideRef: "The Nuclear Model of the Atom",
            hints: [
              "Describe the source, the foil and how particles were detected.",
              "Give all three observations: straight through, large deflection, back-scatter.",
              "The rare back-scatter is the key observation.",
            ],
            strategy: "describe the apparatus first, then list each of the three observations",
          },
          {
            id: "phys-nuclear-bq4-04",
            question: "A nucleus of americium-241 (nucleon number 241, proton number 95) decays by alpha emission to neptunium (Np). Given that neptunium has Z = 93, write the balanced nuclear equation and state the number of neutrons in the americium-241 nucleus.",
            marks: 4,
            modelAnswer:
              "Americium-241 (A 241, Z 95) gives neptunium-237 (A 237, Z 93) plus an alpha particle helium-4 (A 4, Z 2). Check: 241 = 237 + 4 and 95 = 93 + 2.\nNeutrons in americium-241 = A minus Z = 241 minus 95 = 146.",
            markScheme: [
              "alpha particle written as helium-4 (A 4, Z 2)",
              "neptunium daughter A = 237 (241 minus 4)",
              "neptunium daughter Z = 93 (95 minus 2)",
              "neutrons in americium-241 = 241 minus 95 = 146",
            ],
            commonError:
              "Students sometimes use the daughter's data to find the neutron number. The neutron number of americium-241 uses its own A and Z.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Alpha decay: A minus 4, Z minus 2.",
              "Daughter A = 237, Z = 93 (neptunium).",
              "Neutrons in the parent = A minus Z = 241 minus 95.",
            ],
            strategy: "balance the equation, then apply N = A minus Z to the parent nucleus",
            solutions: [
              {
                label: "Alpha decay and neutron count",
                steps: [
                  "Daughter A = 241 minus 4 = 237",
                  "Daughter Z = 95 minus 2 = 93 (neptunium-237)",
                  "Alpha particle is helium-4 (A 4, Z 2)",
                  "Neutrons in americium-241 = 241 minus 95 = 146",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bq4-05",
            question: "A radioactive isotope used in a hospital has a half-life of 8 days. A delivery contains an activity of 3200 MBq. The isotope can only be used while its activity is above 100 MBq. For how many days after delivery can it be used?",
            marks: 4,
            modelAnswer:
              "Find how many half-lives reduce 3200 MBq to 100 MBq. 3200 divided by 100 = 32 = 2 to the power 5, so 5 half-lives bring the activity to exactly 100 MBq. Time for 5 half-lives = 5 times 8 = 40 days. After 40 days the activity is 100 MBq; below that it can no longer be used. So it can be used for up to 40 days after delivery.",
            markScheme: [
              "ratio 3200 / 100 = 32",
              "32 = 2 to power 5, so n = 5 half-lives",
              "time = 5 times 8 days = 40 days",
              "correct conclusion: usable for up to 40 days",
            ],
            commonError:
              "Students sometimes stop when the activity is just above 100 MBq and give 4 half-lives (200 MBq). Here 100 MBq is reached after exactly 5 half-lives, so 40 days is the limit.",
            difficulty: "core",
            guideRef: "Half-Life",
            hints: [
              "Work out how many times the activity must halve to reach 100 MBq.",
              "3200 / 100 = 32 = 2 to the power 5.",
              "Multiply the number of half-lives by the half-life.",
            ],
            strategy: "express the activity ratio as a power of 2, then convert half-lives to days",
            solutions: [
              {
                label: "Activity ratio to time",
                steps: [
                  "3200 / 100 = 32",
                  "32 = 2 to power 5, so n = 5 half-lives",
                  "Time = 5 times 8 = 40 days",
                  "Activity reaches 100 MBq at 40 days, so usable for up to 40 days",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bq4-06",
            question: "Explain why background radiation must be measured and subtracted when finding the half-life of a source from count-rate readings.",
            marks: 3,
            modelAnswer:
              "Background radiation is always present from natural and artificial sources, so every reading from the counter includes a background contribution as well as the radiation from the source. If the background is not subtracted, the count rate will not fall to half as quickly as it should appear to, because the background part does not decay. Subtracting the (constant) background count rate from each reading gives the true count rate from the source alone, which is what halves each half-life, so the half-life found is correct.",
            markScheme: [
              "background radiation is always present and adds to every reading",
              "background does not decay / stays constant",
              "subtracting it gives the true source count rate, so the half-life is measured correctly",
            ],
            commonError:
              "Students sometimes think background can be ignored if it is small. Even a small constant background distorts the apparent halving of the count rate, so it must be subtracted.",
            difficulty: "core",
            guideRef: "Half-Life",
            hints: [
              "Every reading includes background plus source.",
              "The background part does not decay over time.",
              "Subtracting it leaves the true source count rate that halves.",
            ],
            strategy: "explain that only the source decays, so the constant background must be removed first",
          },
          {
            id: "phys-nuclear-bq4-07",
            question: "A nuclide of plutonium-239 (nucleon number 239, proton number 94) decays by alpha emission. The product then decays by alpha emission again. Determine the nucleon number and proton number of the nuclide formed after both alpha decays.",
            marks: 4,
            modelAnswer:
              "Each alpha decay reduces A by 4 and Z by 2.\nAfter the first alpha: A = 239 minus 4 = 235; Z = 94 minus 2 = 92 (uranium-235).\nAfter the second alpha: A = 235 minus 4 = 231; Z = 92 minus 2 = 90 (thorium-231).\nSo the final nuclide has nucleon number 231 and proton number 90.",
            markScheme: [
              "after first alpha: A = 235, Z = 92",
              "after second alpha: A = 231",
              "after second alpha: Z = 90",
              "correct final nuclide: nucleon number 231, proton number 90",
            ],
            commonError:
              "Students sometimes apply the change only once or subtract 8 from A and 2 from Z. Each alpha decay subtracts 4 from A and 2 from Z, so two decays subtract 8 from A and 4 from Z.",
            difficulty: "challenge",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Apply A minus 4, Z minus 2 for each alpha.",
              "Do it twice in sequence.",
              "Total change: A minus 8, Z minus 4.",
            ],
            strategy: "apply the alpha rule once per emission, updating A and Z each time",
            solutions: [
              {
                label: "Two alpha decays",
                steps: [
                  "First alpha: A = 239 minus 4 = 235; Z = 94 minus 2 = 92",
                  "Second alpha: A = 235 minus 4 = 231; Z = 92 minus 2 = 90",
                  "Total change: A down by 8, Z down by 4",
                  "Final nuclide: nucleon number 231, proton number 90 (thorium-231)",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bq4-08",
            question: "Describe how carbon-14 dating is used to estimate the age of an ancient piece of bone, and state one assumption the method relies on.",
            marks: 4,
            modelAnswer:
              "While an organism is alive it takes in carbon, including a small fixed proportion of radioactive carbon-14, so the ratio of carbon-14 to ordinary carbon stays constant. When it dies it stops taking in carbon, and the carbon-14 it contains decays with a half-life of about 5730 years. By measuring the remaining carbon-14 activity (or the carbon-14 to carbon-12 ratio) in the bone and comparing it with that of living material, the number of half-lives that have passed is found, and hence the age. One assumption is that the proportion of carbon-14 in the atmosphere has stayed roughly constant over time (so the starting amount in the living organism is known).",
            markScheme: [
              "living organism takes in carbon-14, ratio stays constant while alive",
              "at death intake stops and carbon-14 decays (half-life about 5730 years)",
              "measure remaining carbon-14 and compare with living material to find number of half-lives / age",
              "assumption: proportion of carbon-14 in the atmosphere has stayed roughly constant",
            ],
            commonError:
              "Students sometimes forget to state an assumption, or assume carbon-14 is taken in after death. Intake stops at death; the method assumes a constant atmospheric carbon-14 level.",
            difficulty: "core",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "While alive, the organism keeps a constant carbon-14 level.",
              "At death the carbon-14 starts to decay.",
              "Comparing the remaining activity with living material gives the age.",
            ],
            strategy: "describe uptake while alive, decay after death, then the measurement and an assumption",
          },
          {
            id: "phys-nuclear-bq4-09",
            question: "A sample of a radioactive isotope has an initial mass of 80 g. After 36 hours, 75 g of the original isotope has decayed (so 5 g of the original isotope remains). (a) Determine how many half-lives have passed. (b) Calculate the half-life of the isotope.",
            marks: 5,
            modelAnswer:
              "(a) Mass of original isotope remaining = 80 minus 75 = 5 g. Fraction remaining = 5 divided by 80 = 1/16 = (1/2) to the power 4, so 4 half-lives have passed.\n(b) Half-life = total time divided by number of half-lives = 36 divided by 4 = 9 hours.",
            markScheme: [
              "(a) remaining original isotope = 80 minus 75 = 5 g",
              "(a) fraction remaining = 5 / 80 = 1/16",
              "(a) 1/16 = (1/2) to power 4, so n = 4 half-lives",
              "(b) half-life = 36 / 4 = 9 hours",
            ],
            commonError:
              "Students sometimes use the 75 g that has decayed as the remaining amount. The amount remaining is the original mass minus the decayed mass (80 minus 75 = 5 g).",
            difficulty: "challenge",
            guideRef: "Half-Life",
            hints: [
              "First find the mass of the original isotope still remaining: 80 minus 75.",
              "Fraction remaining = remaining divided by initial.",
              "Express the fraction as (1/2) to a power to find n, then half-life = time divided by n.",
            ],
            strategy: "find the remaining fraction, convert to a number of half-lives, then divide the time by n",
            solutions: [
              {
                label: "Mass decayed to half-life",
                steps: [
                  "Remaining original isotope = 80 minus 75 = 5 g",
                  "Fraction remaining = 5 / 80 = 1/16",
                  "1/16 = (1/2) to power 4, so n = 4 half-lives",
                  "Half-life = 36 / 4 = 9 hours",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bq4-10",
            question: "Outline how a nuclear fission chain reaction works in a reactor, and explain the role of the control rods.",
            marks: 5,
            modelAnswer:
              "A slow-moving neutron is absorbed by a heavy nucleus such as uranium-235, making it unstable so that it splits (fissions) into two smaller nuclei, releasing energy and two or three more neutrons. These released neutrons can be absorbed by other uranium-235 nuclei, causing them to fission and release still more neutrons. This self-sustaining sequence is a chain reaction, and the energy released heats the reactor. Control rods, made of a neutron-absorbing material such as boron or cadmium, are lowered into or raised out of the reactor core to absorb some of the neutrons. By adjusting how far the rods are inserted, the number of neutrons available to cause further fissions is controlled, keeping the chain reaction steady and preventing it from running out of control.",
            markScheme: [
              "neutron absorbed by uranium-235, which splits / fissions",
              "fission releases energy and 2 or 3 more neutrons",
              "released neutrons cause further fissions: chain reaction",
              "control rods absorb neutrons (made of boron / cadmium)",
              "adjusting the rods controls the rate / prevents a runaway reaction",
            ],
            commonError:
              "Students sometimes say control rods slow the neutrons down (that is the moderator) rather than absorb them. Control rods absorb neutrons to control the reaction rate.",
            difficulty: "challenge",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Start with a neutron being absorbed by a uranium-235 nucleus.",
              "Each fission releases more neutrons that can cause further fissions.",
              "Control rods absorb neutrons to keep the rate steady.",
            ],
            strategy: "describe the neutron-fission-neutron cycle, then how the rods regulate the neutron number",
          },
        ],
      },
    ],
  },
};
