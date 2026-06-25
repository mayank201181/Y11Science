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
        "Unstable nuclei emit **ionising radiation** as they decay towards stability. There are three main types:\n\n**Alpha (α) radiation**\n- Nature: a helium nucleus — 2 protons + 2 neutrons (⁴₂He)\n- Charge: +2\n- Relative mass: 4\n- Range in air: a few centimetres\n- Stopped by: a sheet of **paper** (or a few cm of air)\n- Ionising ability: **very high** (strips electrons from many atoms per unit path)\n- Deflection in fields: deflected (positive) — same direction as protons\n\n**Beta (β) radiation**\n- Nature: a fast-moving **electron** emitted from the nucleus when a neutron converts to a proton\n- Charge: −1\n- Relative mass: ~1/2000 (negligible)\n- Range in air: up to about 1 m\n- Stopped by: a few mm of **aluminium** (or similar metal)\n- Ionising ability: **moderate**\n- Deflection in fields: deflected (negative) — opposite direction to alpha\n\n**Gamma (γ) radiation**\n- Nature: **electromagnetic wave** (very high frequency/short wavelength photon)\n- Charge: 0\n- Relative mass: 0\n- Range in air: effectively unlimited (intensity follows inverse-square law)\n- Stopped by: several cm of **lead** or several metres of **concrete**\n- Ionising ability: **low**\n- Not deflected by electric or magnetic fields (no charge)\n\n**Background radiation** is the low-level ionising radiation present everywhere from natural and artificial sources:\n- **Radon gas** (from rocks/soil) — largest contributor in most countries (~50%)\n- **Rocks and building materials** (e.g., granite) — contain uranium, thorium\n- **Cosmic rays** — high-energy particles from space; higher at altitude/in aircraft\n- **Food and drink** — small amounts of potassium-40 and carbon-14\n- **Medical** — X-rays and radiotherapy (artificial source)\n- **Nuclear power/weapons fallout** — very small fraction",
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
        "Only charged particles (alpha, beta) are deflected by electric and magnetic fields.",
        "Background radiation comes mainly from radon gas, rocks, cosmic rays, food, and medical sources.",
      ],
      strategies: [
        "Charge tells you deflection direction: alpha (+) deflects one way, beta (−) deflects opposite, gamma (0) goes straight.",
        "Memory hook for penetrating power: P-A-L — Paper stops alpha, Aluminium stops beta, Lead reduces gamma.",
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
        "The **half-life (t½)** of a radioactive isotope is the **time taken for half of the nuclei** in a sample to decay (equivalently, the time for the count rate or activity to fall to half its initial value).\n\nKey features:\n- Half-life is **constant** for a given isotope — it does not depend on sample size, temperature or chemical form.\n- Half-lives range enormously: from microseconds (e.g., ²¹²Po, 0.3 µs) to billions of years (e.g., ²³⁸U, 4.5 × 10⁹ yr).\n\n**Calculations from the fraction remaining:**\n\nAfter each half-life, the number (or count rate) halves:\n\n| Number of half-lives (n) | Fraction remaining |\n|---|---|\n| 0 | 1 |\n| 1 | 1/2 |\n| 2 | 1/4 |\n| 3 | 1/8 |\n| n | 1/2ⁿ |\n\n**Worked example 1:** A sample has an initial count rate of 800 counts/min. The half-life is 5 years. What is the count rate after 15 years?\n- Number of half-lives = 15 ÷ 5 = 3\n- Count rate = 800 × (1/2)³ = 800 × 1/8 = **100 counts/min**\n\n**Worked example 2:** The count rate falls from 640 to 80 counts/min. How many half-lives have elapsed?\n- Ratio = 640/80 = 8 = 2³, so **n = 3 half-lives**.\n\n**Reading half-life from a decay graph:**\nPlot count rate (y-axis) against time (x-axis). Start at any count rate C₀. Find the time t₁ when count rate = C₀/2. The half-life t½ = t₁ − t₀. For reliability, repeat from a second starting point and average.",
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
        "**Uses of radioactivity:**\n\n- **Medical tracers:** A gamma-emitting isotope (e.g., technetium-99m) is injected. Because it passes through tissue, a gamma camera outside the body can image organ function. The isotope must have a short half-life (hours) so radiation dose is minimised.\n- **Cancer treatment (radiotherapy):** A focused beam of gamma radiation (or beta emitters placed near the tumour) kills cancerous cells. Healthy tissue is protected by rotating the beam or directing it precisely.\n- **Sterilisation of medical equipment:** Gamma radiation kills bacteria and viruses without heating fragile instruments.\n- **Smoke detectors:** A small amount of americium-241 (alpha emitter) ionises air between two electrodes, creating a small current. Smoke particles disrupt the current, triggering the alarm. Alpha is used because it is safely absorbed by the detector casing and does not escape.\n- **Carbon dating:** Living organisms absorb carbon-14 (¹⁴C, t½ ≈ 5 700 yr) through food and respiration. On death, uptake stops and ¹⁴C decays. Measuring the remaining ¹⁴C/¹²C ratio gives the age. Reliable up to ≈50 000 years.\n- **Rock dating (potassium-argon, uranium-lead):** Very long half-life isotopes (e.g., ²³⁸U, t½ = 4.5 × 10⁹ yr) allow the age of rocks to be determined over geological timescales.\n- **Thickness monitoring in industry:** Beta emitters are placed on one side of a metal sheet; detectors on the other. If count rate drops, the sheet is too thick; if it rises, too thin. The production line adjusts automatically.\n\n**Dangers of ionising radiation:**\n- Radiation can **ionise atoms in living cells**, damaging DNA.\n- At high doses: **radiation sickness**, cell death, organ failure, increased cancer risk.\n- **Alpha** is most dangerous if the source is **inside the body** (inhaled radon or ingested); **gamma** is most penetrating and dangerous externally.\n- Long-term low-dose exposure increases the **risk of cancer** and genetic mutation.\n\n**Safety precautions:**\n- Keep sources in **lead-lined containers** when not in use.\n- Use **long-handled tongs** (never hold sources directly).\n- **Minimise time** of exposure; **maximise distance** from source (intensity ∝ 1/d²).\n- Wear **film badges** or dosimeters to monitor cumulative dose.\n- Radioactive waste must be safely **stored or buried** in approved facilities.\n\n**Nuclear fission:** A heavy nucleus (e.g., ²³⁵U) absorbs a neutron and splits into two smaller nuclei plus several neutrons and a large release of energy. The released neutrons can trigger further fissions — a **chain reaction**. Controlled fission in a **nuclear reactor** generates electricity; uncontrolled fission is the basis of a nuclear bomb.\n\n**Nuclear fusion in stars:** In the cores of stars, hydrogen nuclei (protons) fuse to form helium nuclei, releasing enormous energy (E = mc²). Fusion requires extremely high temperatures (>10⁷ K) to overcome the electrostatic repulsion between nuclei.",
      keyPoints: [
        "Gamma emitters (short t½) are used as medical tracers; beta emitters and gamma for radiotherapy.",
        "Alpha emitters in smoke detectors are safe because alpha cannot penetrate the casing.",
        "Carbon-14 dating works because its t½ (5 700 yr) matches human/archaeological timescales.",
        "Safety: lead containers, tongs, maximise distance, minimise time, wear dosimeters.",
        "Fission splits heavy nuclei; fusion joins light nuclei — both release energy from E = mc².",
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
      "Background radiation sources: radon gas, rocks, cosmic rays, food, medical procedures.",
      "Carbon-14 has t½ ≈ 5 700 years — used to date organic remains up to ≈50 000 years old.",
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
        id: "phys-nuclear-bank-mcq-1",
        title: "Nuclear Physics MCQ Paper 1",
        description: "6 multiple-choice questions covering the nuclear model, radiation types and decay equations.",
        questions: [
          {
            id: "phys-nuclear-bank-mcq1-q01",
            question:
              "Which of the following correctly describes the nuclear atom according to the Rutherford model?",
            options: [
              "Positive charge spread evenly throughout a sphere with electrons embedded in it",
              "A tiny, dense, positively charged nucleus surrounded by electrons at a relatively large distance",
              "A tiny, dense, negatively charged nucleus with protons orbiting it",
              "A diffuse cloud of protons with electrons in the centre",
            ],
            answerIndex: 1,
            explanation:
              "Rutherford's nuclear model: tiny dense positive nucleus (containing protons and neutrons), with electrons orbiting at much greater distances. The plum-pudding (option A) was the model Rutherford's experiment disproved.",
            difficulty: "warmup",
            guideRef: "The Nuclear Model of the Atom",
          },
          {
            id: "phys-nuclear-bank-mcq1-q02",
            question: "Which pair of atoms are isotopes of the same element?",
            options: ["¹²₆C and ¹⁴₇N", "²³⁵₉₂U and ²³⁸₉₂U", "⁴₂He and ⁴₄Be", "¹H and ²He"],
            answerIndex: 1,
            explanation:
              "Isotopes must have the same proton number (Z). Both ²³⁵₉₂U and ²³⁸₉₂U have Z = 92 (uranium) — they differ only in nucleon number (neutron count). The other pairs have different Z values.",
            difficulty: "warmup",
            guideRef: "Proton Number, Nucleon Number and Isotopes",
          },
          {
            id: "phys-nuclear-bank-mcq1-q03",
            question: "A student uses a Geiger counter near a radioactive source and records a count rate of 240 counts/min, then shields the source with a sheet of paper and the count rate drops to 30 counts/min. Which conclusion is correct?",
            options: [
              "The source emits only gamma radiation",
              "The source emits only beta radiation",
              "The source emits alpha radiation (and possibly beta/gamma)",
              "The paper has absorbed all the radiation",
            ],
            answerIndex: 2,
            explanation:
              "Paper stops alpha radiation. A large reduction in count rate when paper is added indicates an alpha component. Beta and gamma would largely pass through paper, so the remaining 30 counts/min could be beta and/or gamma. We cannot conclude there is ONLY alpha from this one experiment.",
            difficulty: "core",
            guideRef: "Types of Nuclear Radiation",
            hints: [
              "Which radiation type is stopped by paper?",
              "The count rate does not drop to zero — some radiation still passes through.",
            ],
          },
          {
            id: "phys-nuclear-bank-mcq1-q04",
            question:
              "Which nuclear equation is correctly balanced for alpha decay?\n(i) ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He\n(ii) ²¹⁰₈₃Bi → ²¹⁰₈₄Po + ⁰₋₁e\n(iii) ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He",
            options: [
              "Only (i) is an alpha decay equation that balances",
              "Only (iii) is an alpha decay equation that balances",
              "Both (i) and (iii) are correctly balanced alpha decay equations",
              "(ii) is the only balanced equation shown",
            ],
            answerIndex: 2,
            explanation:
              "(i) Ra-226: 226 = 222 + 4 ✓; 88 = 86 + 2 ✓. Alpha decay. (iii) U-238: 238 = 234 + 4 ✓; 92 = 90 + 2 ✓. Alpha decay. (ii) is beta decay (not alpha). So both (i) and (iii) are correctly balanced alpha equations.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Check both A and Z are conserved in each equation.",
              "Alpha decay emits ⁴₂He; beta decay emits ⁰₋₁e.",
              "Check (i): 226 = 222+4 and 88 = 86+2.",
            ],
          },
          {
            id: "phys-nuclear-bank-mcq1-q05",
            question:
              "The activity of a radioactive sample falls from 6400 Bq to 400 Bq in 48 hours. What is the half-life of the isotope?",
            options: ["4 hours", "8 hours", "12 hours", "16 hours"],
            answerIndex: 2,
            explanation:
              "6400/400 = 16 = 2⁴, so 4 half-lives elapsed in 48 hours. t½ = 48 ÷ 4 = 12 hours. (Sequential check: 6400 → 3200 → 1600 → 800 → 400, four halvings.)",
            difficulty: "core",
            guideRef: "Half-Life",
            hints: [
              "Find the ratio: 6400/400 = 16.",
              "Express 16 as a power of 2: 16 = 2⁴, so n = 4 half-lives.",
              "t½ = total time / number of half-lives = 48/4.",
            ],
          },
          {
            id: "phys-nuclear-bank-mcq1-q06",
            question:
              "Why is gamma radiation used for sterilising medical equipment rather than alpha radiation?",
            options: [
              "Alpha cannot ionise atoms in bacteria",
              "Gamma has greater penetrating power and can sterilise equipment inside sealed packaging",
              "Alpha would make the equipment radioactive",
              "Gamma is the cheapest type of radiation to produce",
            ],
            answerIndex: 1,
            explanation:
              "Gamma radiation can penetrate the sealed packaging and the equipment itself, killing bacteria throughout. Alpha particles would be stopped by the packaging material and never reach the equipment inside. Ionising ability is not the issue — alpha actually ionises more — but penetration is the key factor.",
            difficulty: "core",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Think about which radiation penetrates packaging materials.",
              "Sterilisation requires the radiation to reach the bacteria inside sealed containers.",
            ],
          },
        ],
      },
      {
        id: "phys-nuclear-bank-mcq-2",
        title: "Nuclear Physics MCQ Paper 2",
        description: "6 multiple-choice questions covering half-life calculations, safety and synoptic applications.",
        questions: [
          {
            id: "phys-nuclear-bank-mcq2-q01",
            question:
              "What fraction of a radioactive sample remains undecayed after 5 half-lives?",
            options: ["1/16", "1/25", "1/32", "1/64"],
            answerIndex: 2,
            explanation: "(1/2)⁵ = 1/32. After 5 half-lives only 1/32 of the original sample remains undecayed.",
            difficulty: "warmup",
            guideRef: "Half-Life",
          },
          {
            id: "phys-nuclear-bank-mcq2-q02",
            question:
              "A Geiger counter near a radioactive source records 840 counts/min. The background count rate is 40 counts/min. After 2 half-lives, what is the measured count rate recorded by the counter (including background)?",
            options: ["200 counts/min", "240 counts/min", "250 counts/min", "280 counts/min"],
            answerIndex: 1,
            explanation:
              "Corrected initial count rate (source only) = 840 − 40 = 800 counts/min. After 2 half-lives: 800 / 4 = 200 counts/min from source. Measured count rate = 200 (source) + 40 (background) = 240 counts/min.",
            difficulty: "challenge",
            guideRef: "Half-Life",
            hints: [
              "First subtract background: corrected count rate = 840 − 40 = 800 counts/min.",
              "Apply half-life to the corrected (source-only) count rate: 800 / 4 = 200.",
              "Background is always present — add it back to get the measured reading: 200 + 40.",
            ],
            strategy: "subtract background before applying the half-life formula; add background back for the final measured count rate",
          },
          {
            id: "phys-nuclear-bank-mcq2-q03",
            question:
              "In which situation would alpha radiation be MOST dangerous to a person?",
            options: [
              "Standing 2 m from an alpha source in open air",
              "Holding an alpha source inside thick rubber gloves",
              "Inhaling dust containing an alpha-emitting isotope",
              "Wearing a lead apron while working with an alpha source",
            ],
            answerIndex: 2,
            explanation:
              "Alpha particles have very short range in air and are stopped by skin — so external alpha sources are not especially dangerous. However, if an alpha emitter is inhaled or ingested, it is inside the body where it can irradiate sensitive lung or gut tissue at very close range, causing serious cell damage. Lead aprons and rubber gloves both stop alpha particles completely.",
            difficulty: "core",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Alpha has very short range — what does that mean for external exposure at 2 m?",
              "What changes if the source is inside your body?",
            ],
          },
          {
            id: "phys-nuclear-bank-mcq2-q04",
            question:
              "An archaeologist finds a wooden artefact. She measures the ¹⁴C/¹²C ratio and finds it is 1/8 of the ratio in living wood. If t½(¹⁴C) = 5730 years, how old is the artefact?",
            options: ["5 730 years", "11 460 years", "17 190 years", "22 920 years"],
            answerIndex: 2,
            explanation:
              "Ratio = 1/8 = (1/2)³, so 3 half-lives have elapsed. Age = 3 × 5730 = 17 190 years.",
            difficulty: "core",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Express 1/8 as a power of 1/2: 1/8 = (1/2)³.",
              "This means 3 half-lives have passed.",
              "Age = n × t½ = 3 × 5730.",
            ],
          },
          {
            id: "phys-nuclear-bank-mcq2-q05",
            question:
              "A radioactive nucleus ²²⁸₈₈Ra undergoes alpha decay, followed immediately by beta-minus decay. What is the proton number of the final nucleus produced?",
            options: ["85", "86", "87", "88"],
            answerIndex: 2,
            explanation:
              "Alpha decay: Z = 88 − 2 = 86 (radon). Beta-minus decay: Z = 86 + 1 = 87 (francium). Final proton number = 87.",
            difficulty: "challenge",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Apply changes to Z for each decay in sequence.",
              "Alpha: Z − 2; then beta-minus: Z + 1.",
              "Start: Z = 88. After alpha: 88 − 2 = 86. After beta: 86 + 1 = 87.",
            ],
            strategy: "Apply decay rules sequentially to track proton number.",
          },
          {
            id: "phys-nuclear-bank-mcq2-q06",
            question:
              "Which statement about nuclear fission is correct?",
            options: [
              "Fission releases energy because products have more mass than reactants",
              "Fission joins two light nuclei together",
              "A neutron causes a heavy nucleus to split into smaller nuclei, releasing energy and more neutrons",
              "Fission only occurs in stars at temperatures above 10⁷ K",
            ],
            answerIndex: 2,
            explanation:
              "In fission, a neutron is absorbed by a heavy nucleus (e.g., ²³⁵U), which splits into two smaller nuclei and releases typically 2–3 neutrons plus a large amount of energy. The released neutrons can trigger further fissions (chain reaction). Fusion (not fission) joins light nuclei and requires stellar temperatures.",
            difficulty: "warmup",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "phys-nuclear-bank-qa-1",
        title: "Nuclear Physics Structured Paper 1",
        description: "4 structured questions: nuclear model, radiation properties, decay equations, half-life.",
        questions: [
          {
            id: "phys-nuclear-bank-qa1-q01",
            question:
              "Describe the structure of the nuclear atom. Include the location, relative size and charge of the nucleus compared to the atom, and state what particles are found in each region. [4]",
            marks: 4,
            modelAnswer:
              "The atom consists of a tiny, dense nucleus at the centre, surrounded by electrons that orbit at relatively large distances. The nucleus has a diameter of approximately 10⁻¹⁴ m, about 10 000 times smaller than the atom (diameter ≈ 10⁻¹⁰ m). The nucleus contains protons, which carry a positive charge, and neutrons, which are electrically neutral. The atom as a whole is mostly empty space. Electrons, which carry a negative charge, orbit the nucleus; in a neutral atom the number of electrons equals the proton number Z.",
            markScheme: [
              "nucleus is tiny / small / dense compared to the atom (quantitative e.c.f. accepted)",
              "nucleus contains protons (positive) and neutrons (neutral)",
              "electrons orbit the nucleus / are outside the nucleus",
              "atom is mostly empty space / mass concentrated in nucleus",
            ],
            commonError:
              "Students sometimes place neutrons outside the nucleus, or forget to mention that the atom is mostly empty space.",
            difficulty: "warmup",
            guideRef: "The Nuclear Model of the Atom",
          },
          {
            id: "phys-nuclear-bank-qa1-q02",
            question:
              "A student investigates a radioactive source using a Geiger–Müller tube. With no source present the background count rate is 15 counts/min. With the source present, the count rate is 735 counts/min. When a sheet of aluminium is placed between source and detector, the count rate falls to 165 counts/min. When a thick block of lead is added, the count rate falls to 20 counts/min.\n\n(a) Determine the corrected count rate from the source before any shielding. [1]\n(b) State what type(s) of radiation the aluminium stopped. [1]\n(c) State what can be deduced about the type of radiation that penetrates the aluminium. [2]\n(d) Suggest why the count rate with lead shielding (20 counts/min) is slightly higher than the background alone (15 counts/min). [1]",
            marks: 5,
            modelAnswer:
              "(a) Corrected count rate = 735 − 15 = 720 counts/min.\n\n(b) The aluminium stopped beta radiation (and possibly alpha, though alpha would already be stopped by the air gap).\n\n(c) The radiation that penetrates the aluminium is gamma radiation. Evidence: 165 − 15 = 150 counts/min of corrected count rate passes through aluminium (and is only partially reduced by thick lead), which is consistent with gamma (EM radiation with no charge, high penetrating power).\n\n(d) The lead does not fully stop gamma radiation — some gamma from the source still reaches the detector, giving a count rate slightly above background.",
            markScheme: [
              "(a) 735 − 15 = 720 counts/min",
              "(b) beta (radiation) / beta particles",
              "(c) gamma radiation penetrates the aluminium",
              "(c) gamma is only partially absorbed by lead / gamma highly penetrating",
              "(d) some gamma still penetrates the lead / lead does not completely stop gamma",
            ],
            commonError:
              "Students often omit to subtract background radiation when calculating corrected count rates.",
            difficulty: "core",
            guideRef: "Types of Nuclear Radiation",
            hints: [
              "Corrected count rate = measured − background.",
              "Which radiation is stopped by aluminium? Which passes through?",
              "What does the fact that lead reduces but doesn't eliminate the count rate tell you about the type of radiation?",
            ],
          },
          {
            id: "phys-nuclear-bank-qa1-q03",
            question:
              "Radon-222 (²²²₈₆Rn) undergoes alpha decay.\n\n(a) Write a balanced nuclear equation for this decay. [3]\n(b) The half-life of ²²²₈₆Rn is 3.8 days. A sample initially contains 1.6 × 10¹⁰ atoms of ²²²Rn. Calculate the number of ²²²Rn atoms remaining after 19 days. Show your working. [3]",
            marks: 6,
            modelAnswer:
              "(a) ²²²₈₆Rn → ²¹⁸₈₄Po + ⁴₂He\n\nDaughter: A = 222 − 4 = 218; Z = 86 − 2 = 84 → polonium (Po).\n\n(b) n = 19 / 3.8 = 5 half-lives.\nFraction remaining = (1/2)⁵ = 1/32.\nNumber remaining = 1.6 × 10¹⁰ ÷ 32 = 5.0 × 10⁸ atoms.",
            markScheme: [
              "(a) ⁴₂He written correctly (alpha particle)",
              "(a) daughter A = 218",
              "(a) daughter Z = 84 and correct symbol Po / polonium",
              "(b) n = 19 / 3.8 = 5 (half-lives)",
              "(b) fraction = (1/2)⁵ = 1/32",
              "(b) N = 1.6×10¹⁰ / 32 = 5.0×10⁸ atoms (allow 4.9–5.1×10⁸)",
            ],
            commonError:
              "In part (a) students sometimes write Z = 84 correctly but then give the wrong element symbol — always verify Z against the periodic table.",
            difficulty: "core",
            guideRef: "Radioactive Decay and Nuclear Equations",
            hints: [
              "Alpha emission: A − 4, Z − 2.",
              "New Z = 86 − 2 = 84; identify this element.",
              "For (b): divide total time by t½ to get n.",
              "Remaining = initial × (1/2)^n.",
            ],
            strategy: "balance-the-equation; count-the-halvings",
            solutions: [
              {
                label: "Fraction method",
                steps: [
                  "n = 19 / 3.8 = 5 half-lives",
                  "Fraction remaining = (1/2)^5 = 1/32",
                  "N = 1.6×10^10 / 32 = 5.0×10^8 atoms",
                ],
              },
              {
                label: "Sequential halving",
                steps: [
                  "After 1 t½ (3.8 d): 8.0×10^9",
                  "After 2 t½ (7.6 d): 4.0×10^9",
                  "After 3 t½ (11.4 d): 2.0×10^9",
                  "After 4 t½ (15.2 d): 1.0×10^9",
                  "After 5 t½ (19.0 d): 5.0×10^8 atoms",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bank-qa1-q04",
            question:
              "Evaluate the suitability of using carbon-14 dating to estimate the age of (i) a wooden Egyptian coffin thought to be about 3 000 years old, and (ii) a dinosaur bone thought to be about 70 million years old. In each case, state whether the method is suitable and explain your reasoning. [4]",
            marks: 4,
            modelAnswer:
              "(i) The Egyptian coffin: Carbon-14 dating is suitable. The half-life of ¹⁴C is ≈5 730 years. 3 000 years is about 0.5 half-lives — so approximately (1/2)^0.5 ≈ 71% of the original ¹⁴C remains. This is well above the detection threshold, and the measurement uncertainty is acceptable relative to the 3 000-year age. Carbon-14 dating works well for ages up to ≈50 000 years.\n\n(ii) The dinosaur bone: Carbon-14 dating is NOT suitable. 70 million years = 70 × 10⁶ years. Number of half-lives = 70 × 10⁶ / 5730 ≈ 12 200 half-lives. The fraction remaining = (1/2)^12200, which is effectively zero — far below any detectable level. A radioisotope with a much longer half-life (e.g., uranium-238, t½ = 4.5 × 10⁹ yr) would be needed.",
            markScheme: [
              "(i) suitable — 3000 yr is within the reliable range of ¹⁴C dating (up to ~50 000 yr)",
              "(i) ¹⁴C t½ = 5730 yr; measurable ¹⁴C remains after 3000 yr",
              "(ii) not suitable — 70 million yr is vastly longer than several ¹⁴C half-lives",
              "(ii) virtually no ¹⁴C remains after 70 million years / below detection limit; long-half-life method needed",
            ],
            commonError:
              "Students often say carbon dating is always reliable without considering the timescale. The key is whether measurable ¹⁴C remains.",
            difficulty: "challenge",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Compare the age to the half-life of ¹⁴C (5730 years).",
              "After many half-lives, essentially no ¹⁴C remains — how many half-lives is 70 million years?",
              "For dating to work, a measurable quantity of the isotope must remain.",
            ],
            strategy: "Compare the timescale of the object's age to the half-life; assess whether the isotope has decayed to below detectable levels.",
          },
        ],
      },
      {
        id: "phys-nuclear-bank-qa-2",
        title: "Nuclear Physics Structured Paper 2",
        description: "4 structured questions including challenging half-life graph reading and synoptic applications.",
        questions: [
          {
            id: "phys-nuclear-bank-qa2-q01",
            question:
              "Describe how you would use a Geiger-Müller tube and absorbers to identify whether a radioactive source emits alpha, beta, gamma, or a mixture of these radiations. State what you would measure and how you would interpret your results. [5]",
            marks: 5,
            modelAnswer:
              "First, measure the background radiation (count rate with no source present) and subtract this from all subsequent readings.\n\n1. Measure the count rate with the source and no absorber (call this R₀).\n2. Place a thin sheet of paper between source and detector. If the count rate falls significantly, alpha radiation is present.\n3. Replace the paper with a few millimetres of aluminium. If the count rate falls further compared to paper alone, beta radiation is present.\n4. Replace the aluminium with a thick block of lead (several cm). If the count rate is still above background, gamma radiation is present (since gamma is only reduced, not stopped, by lead).\n\nBy comparing the count rates at each stage, it is possible to identify which types of radiation are present. Always subtract background from each measurement.",
            markScheme: [
              "measure and subtract background radiation",
              "use paper absorber — significant reduction indicates alpha",
              "use aluminium absorber — further reduction indicates beta",
              "use lead absorber — count rate still above background indicates gamma",
              "compare corrected count rates at each stage to identify radiation type(s) present",
            ],
            commonError:
              "Students forget to subtract background radiation before comparing count rates, leading to incorrect conclusions.",
            difficulty: "core",
            guideRef: "Types of Nuclear Radiation",
            hints: [
              "Start with no absorber, then add absorbers of increasing stopping power.",
              "What does each absorber specifically stop?",
              "Remember to subtract background at each stage.",
            ],
          },
          {
            id: "phys-nuclear-bank-qa2-q02",
            question:
              "The table below shows the count rate (corrected for background) from a radioactive source at different times:\n\nTime (min): 0, 4, 8, 12, 16, 20\nCount rate (counts/min): 960, 680, 480, 340, 240, 170\n\n(a) Plot these values on a decay graph (sketch the general shape and mark key coordinates). [2]\n(b) Use the data to determine the half-life of this isotope. Show your method clearly. [3]\n(c) Predict the count rate at t = 28 min. [2]",
            marks: 7,
            modelAnswer:
              "(a) The graph is an exponential decay curve starting at (0, 960) and decreasing towards zero. [Award marks for correct starting point and smooth decreasing curve through plotted points.]\n\n(b) Method: Find the time when count rate = 960/2 = 480 counts/min.\nFrom the table, at t = 8 min, count rate = 480 counts/min.\nSo t½ ≈ 8 min.\nVerification: at t = 0, rate = 960; at t = 8 min, rate = 480 ✓ (halved).\nAlternative: at t = 8 min, rate = 480; at t = 16 min, rate = 240 — interval = 8 min ✓.\n\n(c) From t = 20 min (rate = 170 counts/min), 28 min is 8 min later = 1 half-life.\nCount rate at t = 28 min = 170/2 = 85 counts/min.",
            markScheme: [
              "(a) smooth exponential decay curve / correct shape",
              "(a) starts at (0, 960) and passes through plotted data points",
              "(b) correctly identifies that count rate halves from 960 to 480 between t=0 and t=8 min",
              "(b) states t½ = 8 min",
              "(b) verifies with a second pair of values (e.g., 480→240 also takes 8 min)",
              "(c) 28 − 20 = 8 min = 1 half-life; rate = 170/2 = 85 counts/min",
              "(c) answer 85 counts/min (allow 82–88)",
            ],
            commonError:
              "Students often read the half-life from a single point without verifying with a second — the two-point check is good practice and gains the verification mark.",
            difficulty: "core",
            guideRef: "Half-Life",
            hints: [
              "Half-life is the time for the count rate to halve — not the time for it to reach zero.",
              "Find two count rates where one is exactly double the other; the time difference is t½.",
              "For part (c), start from the last known value and apply one more halving.",
            ],
            strategy: "Read t½ from graph: find two successive values where one is half the other; the time interval is t½.",
            solutions: [
              {
                label: "Reading from table directly",
                steps: [
                  "960/2 = 480 at t = 8 min → t½ = 8 min",
                  "Check: 480/2 = 240 at t = 16 min (interval = 8 min) ✓",
                  "For t = 28 min: 28 − 20 = 8 min = 1 half-life beyond t = 20 min",
                  "Count rate = 170/2 = 85 counts/min",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bank-qa2-q03",
            question:
              "Iodine-131 (¹³¹₅₃I) is a beta-minus emitter used in the treatment of thyroid cancer. It has a half-life of 8 days.\n\n(a) Write a balanced nuclear equation for the beta-minus decay of iodine-131. [3]\n(b) A patient is given a dose containing 6.4 × 10¹⁰ atoms of ¹³¹I. Calculate the time taken for the number of ¹³¹I atoms to fall to 5.0 × 10⁹ atoms. [3]\n(c) Explain one reason why iodine-131 is suitable for treating thyroid cancer, and one safety precaution that should be taken when handling the source. [2]",
            marks: 8,
            modelAnswer:
              "(a) ¹³¹₅₃I → ¹³¹₅₄Xe + ⁰₋₁e\n\nDaughter: A = 131 (unchanged), Z = 53 + 1 = 54 → xenon (Xe).\n\n(b) Ratio = 6.4×10¹⁰ / 5.0×10⁹ = 12.8.\nThis is not a whole-number power of 2, so we use: n = log(12.8)/log(2) ≈ 3.68 half-lives.\nTime = 3.68 × 8 = 29.4 ≈ 29 days.\n\nAlternatively (approximate method): 6.4×10¹⁰ → 3.2×10¹⁰ → 1.6×10¹⁰ → 8.0×10⁹ → ~5.0×10⁹ (a little less than 4 half-lives), so between 24 and 32 days, ≈29 days.\n\n(c) Suitable: The thyroid gland selectively absorbs iodine, so ¹³¹I concentrates in the gland, delivering radiation directly to the tumour with minimal dose to surrounding tissue / the half-life of 8 days is long enough for treatment but short enough that the dose falls quickly.\n\nSafety precaution: use remote-handling tongs or robotic arms; store in lead-lined container; work behind a lead shield; minimise time of exposure; work at maximum practical distance.",
            markScheme: [
              "(a) daughter symbol Xe / xenon",
              "(a) daughter A = 131, Z = 54",
              "(a) ⁰₋₁e beta particle written correctly",
              "(b) ratio = 6.4×10¹⁰ / 5.0×10⁹ = 12.8 (or equivalent method)",
              "(b) n = log(12.8)/log(2) = 3.68 half-lives (or correct graph/iterative method)",
              "(b) time = 3.68 × 8 = 29 days (allow 28–31 days)",
              "(c) thyroid concentrates iodine / targeted delivery to tumour",
              "(c) any valid safety precaution: lead container, tongs, lead shield, maximise distance, minimise time",
            ],
            commonError:
              "In part (b) students assume a whole number of half-lives and get 32 days (4 half-lives giving 4.0×10⁹, which overshoots). The correct approach uses logarithms or interpolation.",
            difficulty: "challenge",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Set up the ratio: initial/final = 6.4×10¹⁰ / 5.0×10⁹.",
              "This ratio is not exactly a power of 2, so use n = log(ratio)/log(2).",
              "Then time = n × t½.",
              "For part (c), think about why the thyroid is the target organ for iodine.",
            ],
            strategy: "Use logarithms when the ratio is not an exact power of 2; n = log₂(N₀/N).",
            solutions: [
              {
                label: "Logarithm method",
                steps: [
                  "Ratio = 6.4×10^10 / 5.0×10^9 = 12.8",
                  "n = log(12.8) / log(2) = 1.107 / 0.301 = 3.68 half-lives",
                  "Time = 3.68 × 8 days = 29.4 days ≈ 29 days",
                ],
              },
              {
                label: "Successive halving (approximate)",
                steps: [
                  "6.4×10^10 → 3.2×10^10 (8 d) → 1.6×10^10 (16 d) → 8.0×10^9 (24 d) → 4.0×10^9 (32 d)",
                  "5.0×10^9 lies between 24 d and 32 d, closer to 24+5 = 29 d",
                  "Estimate: ~29 days",
                ],
              },
            ],
          },
          {
            id: "phys-nuclear-bank-qa2-q04",
            question:
              "A nuclear power station uses uranium-235 as fuel. Controlled nuclear fission occurs in the reactor core.\n\n(a) Explain what is meant by nuclear fission. [2]\n(b) Explain how a chain reaction is initiated and sustained in a reactor. [3]\n(c) Compare nuclear fission with nuclear fusion, identifying one similarity and two differences. [3]",
            marks: 8,
            modelAnswer:
              "(a) Nuclear fission is the splitting of a heavy nucleus (such as ²³⁵U) into two smaller (daughter) nuclei when it absorbs a neutron. A large amount of energy is released, along with two or three more neutrons.\n\n(b) A neutron is absorbed by a ²³⁵U nucleus, which becomes unstable and splits, releasing 2–3 fast neutrons and energy. These neutrons can then be absorbed by other ²³⁵U nuclei, each producing further fissions and releasing more neutrons. This self-sustaining process is a chain reaction. In a reactor, control rods (e.g., boron) absorb some neutrons to keep the reaction at a steady, controlled rate (preventing runaway reaction).\n\n(c) Similarity: both fission and fusion release energy from nuclear reactions (E = mc², mass is converted to energy in both cases).\n\nDifferences:\n1. Fission splits a heavy nucleus; fusion joins two light nuclei.\n2. Fusion requires extremely high temperatures (>10⁷ K) because the positive nuclei must overcome electrostatic repulsion to get close enough for the strong nuclear force to act; fission requires only a low-energy neutron to trigger it (no extreme temperature needed).",
            markScheme: [
              "(a) heavy nucleus splits into two smaller nuclei / daughter nuclei",
              "(a) triggered by neutron absorption; releases energy and further neutrons",
              "(b) neutron absorbed by ²³⁵U → fission → releases 2-3 neutrons",
              "(b) released neutrons trigger further fissions / chain reaction described",
              "(b) control rods absorb neutrons to regulate rate / prevent runaway",
              "(c) similarity: both release nuclear energy / energy from mass (E=mc²)",
              "(c) difference 1: fission splits heavy nucleus; fusion joins light nuclei",
              "(c) difference 2: fusion requires very high temperature; fission does not / fission needs slow neutron",
            ],
            commonError:
              "Students often confuse fission and fusion, or claim that fission joins nuclei and fusion splits them — always recall: fission = split (like 'fissure'), fusion = join (like 'fuse together').",
            difficulty: "challenge",
            guideRef: "Uses, Dangers and Safety of Radioactivity",
            hints: [
              "Fission: think 'fissure' — a crack or split.",
              "Fusion: like fusing/joining two things together.",
              "For the chain reaction: what happens to the neutrons produced in each fission?",
              "For temperature: why do nuclei need to get very close for fusion, and why is that difficult?",
            ],
          },
        ],
      },
    ],
  },
};
