import type { Topic } from "../types";

export const chemStoichiometry: Topic = {
  id: "chem-stoichiometry",
  title: "Stoichiometry & The Mole",
  subject: "chemistry",
  icon: "🧮",
  blurb: "Master moles, reacting masses, concentrations and titration calculations for IGCSE.",
  intro:
    "Stoichiometry is the chemistry of counting — it links the macroscopic world of grams and litres to the microscopic world of atoms and molecules. Once you master the mole concept and balanced equations, every quantitative chemistry problem follows the same logical road-map: convert to moles, use the ratio, convert back. This guide builds that road-map step by step, from writing correct formulae and equations right through to multi-step titration and percentage-yield calculations.",

  // ─────────────────────────────────────────────────────────
  // GUIDE  (6 sections)
  // ─────────────────────────────────────────────────────────
  guide: [
    // ── 1. Symbols, Formulae & Equations ──────────────────
    {
      heading: "Chemical Symbols, Formulae and Equations",
      body: `Every element has a unique one- or two-letter symbol from the periodic table (e.g. Na for sodium, Fe for iron). A **chemical formula** shows the ratio of atoms in one formula unit of a substance. For example, H₂SO₄ means 2 hydrogen atoms, 1 sulfur atom and 4 oxygen atoms bonded together.

A **balanced chemical equation** must obey the law of conservation of mass: the same number of atoms of each element must appear on both sides. We achieve this by inserting whole-number **stoichiometric coefficients** in front of formulae — never by changing subscripts.

**State symbols** are placed in brackets immediately after each formula: (s) solid, (l) liquid, (g) gas, (aq) aqueous (dissolved in water). They are required in ionic equations and recommended in all equations.

**Ionic equations** simplify full equations by removing spectator ions — ions present on both sides that do not change. For example, the precipitation of barium sulfate:

Full ionic: Ba²⁺(aq) + 2Cl⁻(aq) + 2Na⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) + 2Na⁺(aq) + 2Cl⁻(aq)

Net ionic: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)

**Balancing strategy:** list atoms of each element on each side, then adjust the largest/most complex formula first, leaving H and O to last (or leave H₂O until last in aqueous equations).`,
      discovery: {
        problem:
          "Attempt to balance this equation before reading on: ? Fe + ? O₂ → ? Fe₂O₃. How many O₂ molecules do you need for 4 Fe atoms?",
        idea:
          "Start with Fe₂O₃: 2 Fe per formula unit. To get even oxygen, try 2 Fe₂O₃ (4 Fe, 6 O). Then 6 O needs 3 O₂. Balanced: 4Fe + 3O₂ → 2Fe₂O₃. The key insight: balance by inspection, choosing coefficients that make every atom count equal on both sides.",
      },
      whyItWorks:
        "Conservation of mass is a direct consequence of atoms being indestructible in chemical reactions. No atom is created or destroyed — only rearranged. The stoichiometric coefficients encode the exact integer ratio in which substances react and are produced.",
      keyPoints: [
        "Symbols are 1–2 letters; first letter always capitalised (e.g. Co ≠ CO).",
        "Subscripts in a formula are fixed — never change them when balancing.",
        "Adjust coefficients to balance; check every element including O last.",
        "State symbols (s), (l), (g), (aq) are required in ionic equations.",
        "Net ionic equations cancel spectator ions from both sides.",
      ],
      strategies: ["Balance largest formula first", "Save H and O until last", "Check atom counts element by element"],
    },

    // ── 2. Relative Mass & The Mole ───────────────────────
    {
      heading: "Relative Mass and the Mole",
      body: `**Relative atomic mass (Aᵣ)** is the weighted mean mass of one atom of an element relative to 1/12 the mass of a carbon-12 atom. It is dimensionless (has no units). Values are found on the periodic table (e.g. C = 12, O = 16, Na = 23, Cl = 35.5).

**Relative formula mass (Mᵣ)** (also called relative molecular mass for molecules) is the sum of all the Aᵣ values in one formula unit:

Mᵣ(H₂O) = 2(1) + 16 = 18
Mᵣ(CaCO₃) = 40 + 12 + 3(16) = 100
Mᵣ(Al₂(SO₄)₃) = 2(27) + 3(32 + 4×16) = 54 + 288 = 342

The **mole (mol)** is the SI unit of amount of substance. One mole contains exactly 6.02 × 10²³ particles (the **Avogadro constant, Nₐ**). This number was chosen so that the molar mass of any substance in g/mol numerically equals its Mᵣ — a convenient bridge between the invisible atomic world and the measurable macro world.

**Molar mass (M):** the mass of one mole of a substance, in g/mol. M numerically equals Mᵣ (e.g. M(H₂O) = 18 g/mol).

The fundamental mole equation:

**n = m / M** (moles = mass ÷ molar mass)

Rearranged: m = n × M and M = m / n.`,
      diagrams: [
        {
          caption: "The Mole Triangle — three quantities, one triangle",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mole triangle showing n equals m divided by M">
  <polygon points="160,20 20,180 300,180" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <line x1="20" y1="180" x2="300" y2="180" stroke="#38bdf8" stroke-width="2.5"/>
  <line x1="160" y1="90" x2="20" y2="180" stroke="#38bdf8" stroke-width="1" stroke-dasharray="6,4"/>
  <line x1="160" y1="90" x2="300" y2="180" stroke="#38bdf8" stroke-width="1" stroke-dasharray="6,4"/>
  <line x1="160" y1="90" x2="160" y2="180" stroke="#fbbf24" stroke-width="2"/>
  <!-- labels -->
  <text x="160" y="80" text-anchor="middle" font-size="18" font-weight="bold" fill="#fbbf24">m</text>
  <text x="155" y="74" text-anchor="end" font-size="10" fill="#b7bce0">(g)</text>
  <text x="80" y="175" text-anchor="middle" font-size="18" font-weight="bold" fill="#34d399">n</text>
  <text x="75" y="169" text-anchor="end" font-size="10" fill="#b7bce0">(mol)</text>
  <text x="240" y="175" text-anchor="middle" font-size="18" font-weight="bold" fill="#a78bfa">M</text>
  <text x="255" y="169" text-anchor="start" font-size="10" fill="#b7bce0">(g/mol)</text>
  <!-- dividing line label -->
  <text x="168" y="135" text-anchor="start" font-size="11" fill="#b7bce0">divide</text>
  <!-- formula -->
  <text x="160" y="198" text-anchor="middle" font-size="12" fill="#eef0ff">n = m / M</text>
</svg>`,
        },
      ],
      discovery: {
        problem:
          "Before reading: 2.24 g of iron nails are dissolved in acid. How many moles of Fe is this? (Aᵣ Fe = 56). What if you had 6.02 × 10²³ atoms — what mass would that be?",
        idea:
          "n = m/M = 2.24/56 = 0.04 mol. For 6.02×10²³ atoms: that is exactly 1 mol, so mass = 1 × 56 = 56 g. The mole is the chemist's 'dozen' — a counting unit chosen to link atom masses to gram-scale measurements.",
      },
      whyItWorks:
        "Aᵣ is defined relative to ¹²C = 12. So the mass of one ¹²C atom is 12 u (atomic mass units). The Avogadro constant is defined such that 12 g of ¹²C contains exactly Nₐ atoms — meaning 1 g = 1/Nₐ × (1 u × Nₐ) = 1 u × Nₐ. This makes the molar mass in g/mol numerically equal to Mᵣ in u, a deliberate design feature of the SI mole.",
      keyPoints: [
        "Aᵣ is dimensionless; read it from the periodic table.",
        "Mᵣ = sum of all Aᵣ values in the formula (count brackets and subscripts carefully).",
        "1 mol = 6.02 × 10²³ particles (Avogadro constant Nₐ).",
        "Molar mass M (g/mol) numerically equals Mᵣ.",
        "n = m/M; rearrange to find m or M as needed.",
      ],
      thinkDeeper:
        "Why is Aᵣ for chlorine listed as 35.5 and not a whole number? Natural chlorine is a mixture of isotopes: about 75% ³⁵Cl and 25% ³⁷Cl. The weighted mean is 0.75 × 35 + 0.25 × 37 = 35.5. Isotopic abundances, not rounding, set the Aᵣ.",
      strategies: ["Unit analysis (g ÷ g/mol = mol)", "Always write the formula first and calculate Mᵣ before anything else"],
    },

    // ── 3. Reacting Masses & Limiting Reactants ───────────
    {
      heading: "Reacting Masses and the Limiting Reactant",
      body: `A balanced equation gives the **mole ratio** in which substances react and are produced. This ratio is the core tool for all reacting-mass calculations.

**Road-map (always follow this order):**
1. Write and balance the equation.
2. Convert the known quantity to moles (n = m/M).
3. Use the mole ratio from the equation.
4. Convert moles of the required substance to the answer (m = n × M, or volume, or concentration…).

**Example:** What mass of water is produced when 8 g of hydrogen burns in excess oxygen?
2H₂ + O₂ → 2H₂O
Moles of H₂ = 8/2 = 4 mol
Mole ratio H₂:H₂O = 2:2 = 1:1, so moles of H₂O = 4 mol
Mass of H₂O = 4 × 18 = 72 g

**Limiting reactant:** When two reactants are both given in specific amounts, one will run out first — this is the **limiting reactant** and it determines the maximum amount of product. The **excess reactant** is not fully used.

**To find the limiting reactant:** divide moles of each reactant by its stoichiometric coefficient. The reactant with the **smallest** result is the limiting reactant.

**Percentage yield** accounts for the fact that real reactions rarely produce the theoretical maximum:

% yield = (actual yield / theoretical yield) × 100 %

**Percentage purity** describes an impure sample:

% purity = (mass of pure substance / total mass of sample) × 100 %`,
      diagrams: [
        {
          caption: "Stoichiometry road-map: mass → moles → ratio → moles → mass",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-step stoichiometry road-map diagram">
  <!-- Boxes -->
  <rect x="10" y="80" width="60" height="40" rx="6" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <rect x="90" y="80" width="60" height="40" rx="6" fill="#1e3a5f" stroke="#34d399" stroke-width="1.5"/>
  <rect x="170" y="80" width="60" height="40" rx="6" fill="#1e3a5f" stroke="#34d399" stroke-width="1.5"/>
  <rect x="250" y="80" width="60" height="40" rx="6" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- Arrows -->
  <line x1="70" y1="100" x2="90" y2="100" stroke="#fbbf24" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="150" y1="100" x2="170" y2="100" stroke="#fbbf24" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="230" y1="100" x2="250" y2="100" stroke="#fbbf24" stroke-width="2" marker-end="url(#arr)"/>
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/>
    </marker>
  </defs>
  <!-- Labels inside boxes -->
  <text x="40" y="97" text-anchor="middle" font-size="9" fill="#eef0ff">Known</text>
  <text x="40" y="109" text-anchor="middle" font-size="9" fill="#eef0ff">mass (g)</text>
  <text x="120" y="97" text-anchor="middle" font-size="9" fill="#eef0ff">Moles of</text>
  <text x="120" y="109" text-anchor="middle" font-size="9" fill="#eef0ff">known</text>
  <text x="200" y="97" text-anchor="middle" font-size="9" fill="#eef0ff">Moles of</text>
  <text x="200" y="109" text-anchor="middle" font-size="9" fill="#eef0ff">wanted</text>
  <text x="280" y="97" text-anchor="middle" font-size="9" fill="#eef0ff">Wanted</text>
  <text x="280" y="109" text-anchor="middle" font-size="9" fill="#eef0ff">mass (g)</text>
  <!-- Step labels -->
  <text x="80" y="72" text-anchor="middle" font-size="8" fill="#fbbf24">÷ M</text>
  <text x="160" y="72" text-anchor="middle" font-size="8" fill="#a78bfa">× ratio</text>
  <text x="240" y="72" text-anchor="middle" font-size="8" fill="#fbbf24">× M</text>
  <!-- Title -->
  <text x="160" y="165" text-anchor="middle" font-size="11" fill="#b7bce0">Steps: mass → n(known) → n(wanted) → mass</text>
  <text x="160" y="185" text-anchor="middle" font-size="10" fill="#b7bce0">Use the mole ratio from the balanced equation</text>
</svg>`,
        },
      ],
      whyItWorks:
        "The mole ratio comes directly from the law of conservation of atoms. If 2 mol H₂ produces 2 mol H₂O, then 1 mol H₂ produces 1 mol H₂O — the ratio is fixed by the balanced equation and does not depend on scale.",
      keyPoints: [
        "Always balance the equation before any calculation.",
        "Convert given mass to moles first: n = m/M.",
        "Apply the mole ratio from the balanced equation.",
        "The limiting reactant is whichever gives the smaller moles/coefficient value.",
        "% yield = (actual/theoretical) × 100; always ≤ 100%.",
      ],
      thinkDeeper:
        "Why is % yield almost never 100%? Reasons include: reversible reactions not going to completion, side reactions producing different products, mechanical losses during transfer and purification, and impure reagents reacting differently.",
      strategies: ["Write the equation first — always", "Label moles under each formula as you go", "Divide by coefficient to find limiting reactant"],
    },

    // ── 4. Empirical & Molecular Formulae ─────────────────
    {
      heading: "Empirical and Molecular Formulae",
      body: `The **empirical formula** is the simplest whole-number ratio of atoms in a compound. The **molecular formula** gives the actual number of atoms in one molecule; it is always a whole-number multiple of the empirical formula.

**Finding the empirical formula from percentage composition (or masses):**
1. Write down the percentage (or mass) of each element.
2. Divide each by its Aᵣ to get the mole ratio.
3. Divide all values by the smallest to get the simplest ratio.
4. If the ratio contains a .5, multiply all by 2; if it contains a .33, multiply by 3.

**Example:** A compound contains 40.0% C, 6.7% H, 53.3% O by mass.
- C: 40.0/12 = 3.33; H: 6.7/1 = 6.7; O: 53.3/16 = 3.33
- Divide by 3.33: C:1, H:2, O:1 → empirical formula CH₂O

**Finding the molecular formula from empirical formula + Mᵣ:**
- Empirical formula mass (EFM) of CH₂O = 12 + 2 + 16 = 30
- If Mᵣ = 180, then n = 180/30 = 6
- Molecular formula = C₆H₁₂O₆ (glucose)

**From combustion data:** burning a hydrocarbon and measuring masses of CO₂ and H₂O produced gives the moles of C and H; subtract from total mass to find O if present.`,
      discovery: {
        problem:
          "An oxide of copper contains 79.9% Cu and 20.1% O. What is its empirical formula? (Aᵣ: Cu = 64, O = 16). Try it before reading the idea.",
        idea:
          "Cu: 79.9/64 = 1.248; O: 20.1/16 = 1.256. Divide both by 1.248: Cu = 1.00, O = 1.006 ≈ 1. Empirical formula: CuO. This is copper(II) oxide. The near-perfect ratio confirms the formula — small rounding errors are normal.",
      },
      keyPoints: [
        "Empirical formula = simplest whole-number atom ratio.",
        "Molecular formula = n × empirical formula, where n = Mᵣ/EFM.",
        "Steps: % → divide by Aᵣ → divide by smallest → round to integers.",
        "If result ends in .5, multiply all by 2 to clear the fraction.",
        "Combustion analysis: moles C = moles CO₂; moles H = 2 × moles H₂O.",
      ],
      strategies: ["Tabulate elements in columns: %, ÷Aᵣ, ratio", "Check: do atom counts add up to 100% mass?"],
    },

    // ── 5. Gas Volume Calculations ─────────────────────────
    {
      heading: "Molar Gas Volume and Gas Calculations",
      body: `At **room temperature and pressure (r.t.p.)** — defined as 25 °C and 1 atm (101 kPa) — one mole of any gas occupies **24 dm³** (24 000 cm³). This is the **molar gas volume**.

The relationship is:
**Volume (dm³) = n × 24** or **n = V / 24**

This applies to ALL gases at r.t.p., regardless of their molar mass (a consequence of Avogadro's law: equal volumes of gases at the same T and P contain equal numbers of molecules).

**Gas volume in reactions:** once you have moles from a reacting-mass calculation, simply multiply by 24 to get volume in dm³.

**Example:** What volume of CO₂ at r.t.p. is produced when 10 g of CaCO₃ is completely decomposed?
CaCO₃(s) → CaO(s) + CO₂(g)
n(CaCO₃) = 10/100 = 0.1 mol → n(CO₂) = 0.1 mol
V(CO₂) = 0.1 × 24 = 2.4 dm³

**Note on units:** 1 dm³ = 1 litre = 1000 cm³. Always check whether the question gives volume in dm³ or cm³ and convert if needed.

**At STP (0 °C, 1 atm)** the molar volume is 22.4 dm³/mol — but IGCSE uses r.t.p. = 24 dm³/mol.`,
      keyPoints: [
        "Molar gas volume = 24 dm³/mol at r.t.p. (25 °C, 1 atm).",
        "n = V/24 (V in dm³); V = n × 24.",
        "1 dm³ = 1000 cm³; n = V(cm³)/24 000.",
        "Applies to ALL ideal gases equally at the same T and P.",
        "Combine with mole-ratio steps for reaction volume calculations.",
      ],
      strategies: ["Convert cm³ to dm³ first (÷1000)", "Draw the road-map: add a 'volume' box alongside the mass box"],
    },

    // ── 6. Concentration & Titration Calculations ──────────
    {
      heading: "Concentration, Solutions and Titration Calculations",
      body: `**Concentration** measures how much solute is dissolved in a given volume of solution.

Two common units:
- **mol/dm³** (molar): c = n/V → n = c × V (V in dm³)
- **g/dm³**: c(g/dm³) = c(mol/dm³) × M

**Converting between units:** multiply mol/dm³ by molar mass to get g/dm³; divide g/dm³ by molar mass to get mol/dm³.

**Titration** is a technique for finding the unknown concentration of one solution by reacting it with a standard solution of known concentration, using an indicator (or pH meter) to find the **equivalence point** (the exact point of neutralisation or complete reaction).

**Typical acid–alkali titration calculation:**
Given: 25.0 cm³ of NaOH of unknown concentration is neutralised by 18.60 cm³ of 0.100 mol/dm³ HCl.
Equation: HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)
1. n(HCl) = c × V = 0.100 × (18.60/1000) = 0.001860 mol
2. Mole ratio HCl:NaOH = 1:1, so n(NaOH) = 0.001860 mol
3. c(NaOH) = n/V = 0.001860 / (25.0/1000) = 0.0744 mol/dm³

**Back-titration** involves reacting excess of one reagent with the unknown, then titrating the leftover reagent — used when the sample doesn't dissolve easily or reacts slowly.`,
      diagrams: [
        {
          caption: "Titration apparatus: burette, conical flask, indicator",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Titration setup showing burette above conical flask with indicator">
  <!-- Stand -->
  <rect x="148" y="10" width="8" height="130" rx="2" fill="#555"/>
  <rect x="100" y="135" width="120" height="6" rx="2" fill="#555"/>
  <!-- Burette body -->
  <rect x="140" y="12" width="24" height="100" rx="4" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <!-- Acid fill -->
  <rect x="141" y="13" width="22" height="60" rx="3" fill="#38bdf847"/>
  <text x="152" y="50" text-anchor="middle" font-size="9" fill="#38bdf8">HCl</text>
  <!-- Burette tip -->
  <line x1="152" y1="112" x2="152" y2="130" stroke="#38bdf8" stroke-width="2"/>
  <!-- Scale marks -->
  <line x1="140" y1="30" x2="145" y2="30" stroke="#b7bce0" stroke-width="1"/>
  <text x="138" y="33" text-anchor="end" font-size="7" fill="#b7bce0">0</text>
  <line x1="140" y1="50" x2="145" y2="50" stroke="#b7bce0" stroke-width="1"/>
  <text x="138" y="53" text-anchor="end" font-size="7" fill="#b7bce0">10</text>
  <line x1="140" y1="70" x2="145" y2="70" stroke="#b7bce0" stroke-width="1"/>
  <text x="138" y="73" text-anchor="end" font-size="7" fill="#b7bce0">20</text>
  <line x1="140" y1="90" x2="145" y2="90" stroke="#b7bce0" stroke-width="1"/>
  <text x="138" y="93" text-anchor="end" font-size="7" fill="#b7bce0">30</text>
  <!-- Conical flask -->
  <polygon points="130,140 170,140 185,190 115,190" fill="none" stroke="#34d399" stroke-width="2"/>
  <!-- Flask contents (pink at equivalence) -->
  <polygon points="133,160 167,160 180,190 120,190" fill="#fb718544"/>
  <text x="152" y="178" text-anchor="middle" font-size="8" fill="#fb7185">NaOH</text>
  <text x="152" y="188" text-anchor="middle" font-size="7" fill="#fb7185">+ indicator</text>
  <!-- Arrow drop -->
  <line x1="152" y1="130" x2="152" y2="138" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,2"/>
  <!-- Labels -->
  <text x="175" y="25" font-size="10" fill="#b7bce0">Burette</text>
  <text x="175" y="37" font-size="8" fill="#b7bce0">(acid)</text>
  <text x="192" y="170" font-size="10" fill="#b7bce0">Flask</text>
  <text x="192" y="182" font-size="8" fill="#b7bce0">(alkali)</text>
</svg>`,
        },
      ],
      whyItWorks:
        "At the equivalence point, moles of acid exactly equal moles of alkali (for a 1:1 reaction). The indicator changes colour because its own acid-base equilibrium shifts when the solution pH crosses the equivalence point. The sharp pH jump near equivalence makes the endpoint detectable with just a half-drop of added solution.",
      keyPoints: [
        "c (mol/dm³) = n/V where V is in dm³ (divide cm³ by 1000).",
        "c (g/dm³) = c (mol/dm³) × M.",
        "n(acid) × coefficient ratio = n(alkali) at equivalence.",
        "Always convert cm³ → dm³ before using n = cV.",
        "Titration concordant results: two readings within 0.10 cm³ of each other.",
      ],
      thinkDeeper:
        "Why do we take a mean of concordant titration results (within 0.10 cm³) and discard the rough titre? The rough titre helps identify the approximate end-point colour change, but random errors in reading the meniscus mean any single titre is uncertain. Averaging concordant repeats reduces random error and gives a more reliable mean volume.",
      strategies: ["Convert cm³ → dm³ first (÷1000)", "Write n = cV with units as a check", "Use the mole ratio from the equation explicitly"],
    },
  ],

  // ─────────────────────────────────────────────────────────
  // LEARN SMART
  // ─────────────────────────────────────────────────────────
  learn: {
    keyFacts: [
      "The Avogadro constant Nₐ = 6.02 × 10²³ mol⁻¹ — the number of particles in one mole.",
      "Molar gas volume at r.t.p. (25 °C, 1 atm) = 24 dm³/mol for any gas.",
      "n = m/M (moles = mass ÷ molar mass); m = nM; M = m/n.",
      "n = cV where c is in mol/dm³ and V is in dm³; n = V/24 for gases at r.t.p.",
      "% yield = (actual yield / theoretical yield) × 100%; always ≤ 100%.",
      "% purity = (mass of pure substance / total sample mass) × 100%.",
      "Empirical formula: simplest whole-number atom ratio; molecular formula = n × empirical formula.",
      "State symbols: (s) solid, (l) liquid, (g) gas, (aq) aqueous solution.",
      "The limiting reactant runs out first and determines maximum product; found by dividing moles by coefficient.",
      "Titration concordant results must agree within 0.10 cm³; discard rough titre from mean.",
    ],
    flashcards: [
      { front: "What is the Avogadro constant?", back: "6.02 × 10²³ mol⁻¹ — the number of particles in one mole of any substance." },
      { front: "Define relative atomic mass (Aᵣ).", back: "The weighted mean mass of one atom of an element relative to 1/12 the mass of a ¹²C atom. Dimensionless." },
      { front: "Formula for moles from mass", back: "n = m / M (moles = mass in g ÷ molar mass in g/mol)" },
      { front: "Molar gas volume at r.t.p.", back: "24 dm³/mol (= 24 000 cm³/mol) at 25 °C and 1 atm." },
      { front: "Formula for moles from concentration", back: "n = c × V, where c is in mol/dm³ and V is in dm³." },
      { front: "How do you convert g/dm³ to mol/dm³?", back: "Divide by molar mass M: c(mol/dm³) = c(g/dm³) / M" },
      { front: "What is percentage yield?", back: "% yield = (actual yield / theoretical yield) × 100%" },
      { front: "What is an empirical formula?", back: "The simplest whole-number ratio of atoms in a compound (e.g. CH₂O)." },
      { front: "How do you find the limiting reactant?", back: "Divide moles of each reactant by its coefficient in the balanced equation; the smallest value identifies the limiting reactant." },
      { front: "What is a net ionic equation?", back: "An equation showing only the ions/species that change — spectator ions (unchanged on both sides) are removed." },
      { front: "Steps to find empirical formula from %", back: "1. Divide % by Aᵣ. 2. Divide all by smallest. 3. Round to integers (×2 if ending in .5)." },
      { front: "Why does % yield never exceed 100%?", back: "Mass is conserved; you cannot produce more product than the reactants allow. Losses (side reactions, incomplete reaction, mechanical) reduce yield further." },
    ],
    keyTerms: [
      { term: "Mole (mol)", definition: "The SI unit of amount of substance; one mole contains 6.02 × 10²³ particles." },
      { term: "Molar mass (M)", definition: "The mass of one mole of a substance in g/mol; numerically equal to the relative formula mass Mᵣ." },
      { term: "Relative atomic mass (Aᵣ)", definition: "The weighted mean mass of one atom of an element relative to 1/12 the mass of a carbon-12 atom; dimensionless." },
      { term: "Relative formula mass (Mᵣ)", definition: "Sum of the Aᵣ values of all atoms in one formula unit of a substance; dimensionless." },
      { term: "Stoichiometry", definition: "The quantitative relationship between reactants and products in a chemical reaction, based on the mole ratios in the balanced equation." },
      { term: "Limiting reactant", definition: "The reactant that is completely used up first, limiting the amount of product that can form." },
      { term: "Percentage yield", definition: "(Actual yield / theoretical yield) × 100%; a measure of the efficiency of a reaction." },
      { term: "Percentage purity", definition: "(Mass of pure substance / total mass of sample) × 100%; describes how pure an impure sample is." },
      { term: "Empirical formula", definition: "The simplest whole-number ratio of atoms of each element in a compound." },
      { term: "Molecular formula", definition: "The actual number of atoms of each element in one molecule; a whole-number multiple of the empirical formula." },
      { term: "Concentration (mol/dm³)", definition: "Amount of solute (in moles) per unit volume of solution (in dm³); also called molarity." },
      { term: "Titration", definition: "A technique for finding an unknown concentration by reacting a measured volume of solution against a standard solution of known concentration." },
      { term: "Equivalence point", definition: "The point in a titration at which the moles of titrant added exactly neutralise (or completely react with) the analyte." },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUICK QUIZ — 6 MCQ + 3 QA
  // ─────────────────────────────────────────────────────────
  quiz: {
    mcq: [
      {
        id: "chem-stoichiometry-mcq-q01",
        question: "What is the relative formula mass (Mᵣ) of aluminium sulfate, Al₂(SO₄)₃? (Aᵣ: Al = 27, S = 32, O = 16)",
        options: ["150", "294", "342", "318"],
        answerIndex: 2,
        explanation: "Al₂(SO₄)₃: 2×27 + 3×(32 + 4×16) = 54 + 3×96 = 54 + 288 = 342. Option C is correct. 294 is a common error from calculating SO₄ as 32+4×16=80 then 3×80=240 but forgetting Al gives 54+240=294 — check: 3×96 not 3×80.",
        guideRef: "Relative Mass and the Mole",
        difficulty: "core",
        hints: ["Count all atoms: 2 Al, 3 S, 12 O.", "Mᵣ(SO₄) = 32 + 4×16 = 96.", "3×SO₄ groups: 3×96 = 288; add 2×27 = 54."],
      },
      {
        id: "chem-stoichiometry-mcq-q02",
        question: "How many moles of CO₂ are present in 11.0 g of CO₂? (Mᵣ CO₂ = 44)",
        options: ["0.20 mol", "0.25 mol", "0.50 mol", "4.00 mol"],
        answerIndex: 1,
        explanation: "n = m/M = 11.0/44 = 0.25 mol. Option B. 11/44 = 0.25, not 11/22 = 0.5.",
        guideRef: "Relative Mass and the Mole",
        difficulty: "warmup",
      },
      {
        id: "chem-stoichiometry-mcq-q03",
        question: "Which of the following is the limiting reactant when 4 mol H₂ reacts with 1 mol N₂ to form NH₃ via: N₂ + 3H₂ → 2NH₃?",
        options: ["H₂, because there is more of it", "N₂, because it has a smaller coefficient", "H₂, because 4 mol requires 4/3 mol N₂ but only 1 mol N₂ is available — H₂ is in excess", "N₂, because dividing moles by coefficient gives 1/1 = 1 for N₂ and 4/3 = 1.33 for H₂ — N₂ gives the smaller value"],
        answerIndex: 3,
        explanation: "Divide moles by coefficient: N₂ = 1/1 = 1.00; H₂ = 4/3 = 1.33. The smaller value (1.00) identifies the limiting reactant — N₂. Option D is correct. More moles does not mean excess; it is the moles/coefficient ratio that matters.",
        guideRef: "Reacting Masses and the Limiting Reactant",
        difficulty: "core",
        hints: ["The limiting reactant is found by dividing moles of each reagent by its coefficient.", "N₂ coefficient = 1; H₂ coefficient = 3.", "Compare 1/1 and 4/3; the smaller is limiting."],
      },
      {
        id: "chem-stoichiometry-mcq-q04",
        question: "A compound has the empirical formula CH₂ and a relative molecular mass of 56. What is its molecular formula?",
        options: ["CH₂", "C₂H₄", "C₃H₆", "C₄H₈"],
        answerIndex: 3,
        explanation: "Empirical formula mass of CH₂ = 12 + 2 = 14. n = 56/14 = 4. Molecular formula = C₄H₈. Option D.",
        guideRef: "Empirical and Molecular Formulae",
        difficulty: "core",
        hints: ["Find the mass of one empirical unit: CH₂ = 14.", "n = Mᵣ / empirical formula mass = 56/14.", "Multiply each subscript by n."],
      },
      {
        id: "chem-stoichiometry-mcq-q05",
        question: "What volume of gas (at r.t.p.) is produced when 0.50 mol of a gas is evolved in a reaction?",
        options: ["12 dm³", "24 dm³", "48 dm³", "0.50 dm³"],
        answerIndex: 0,
        explanation: "V = n × 24 = 0.50 × 24 = 12 dm³. Option A. The molar volume at r.t.p. is 24 dm³/mol regardless of which gas.",
        guideRef: "Molar Gas Volume and Gas Calculations",
        difficulty: "warmup",
      },
      {
        id: "chem-stoichiometry-mcq-q06",
        question: "25.0 cm³ of 0.200 mol/dm³ H₂SO₄ is exactly neutralised by 50.0 cm³ of NaOH solution. The equation is: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. What is the concentration of the NaOH?",
        options: ["0.100 mol/dm³", "0.200 mol/dm³", "0.400 mol/dm³", "0.050 mol/dm³"],
        answerIndex: 1,
        explanation: "n(H₂SO₄) = 0.200 × (25.0/1000) = 0.00500 mol. Mole ratio H₂SO₄:NaOH = 1:2, so n(NaOH) = 2 × 0.00500 = 0.01000 mol. c(NaOH) = 0.01000 / (50.0/1000) = 0.01000/0.05000 = 0.200 mol/dm³. Option B is correct. A common error is using a 1:1 ratio (giving 0.100 mol/dm³, option A).",
        guideRef: "Concentration, Solutions and Titration Calculations",
        difficulty: "challenge",
        hints: ["n(H₂SO₄) = c × V (in dm³).", "Mole ratio H₂SO₄:NaOH = 1:2 from equation.", "c(NaOH) = n(NaOH) / V(NaOH in dm³)."],
        strategy: "unit analysis",
      },
    ],
    qa: [
      {
        id: "chem-stoichiometry-qa-q01",
        question: "Calcium carbonate reacts with excess hydrochloric acid according to:\nCaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)\n(a) Calculate the mass of CaCO₃ needed to produce 4.40 g of CO₂. (Mᵣ: CaCO₃ = 100, CO₂ = 44) [3]\n(b) Calculate the volume of CO₂ produced at r.t.p. [1]",
        marks: 4,
        modelAnswer: "(a) n(CO₂) = 4.40/44 = 0.100 mol. Mole ratio CaCO₃:CO₂ = 1:1, so n(CaCO₃) = 0.100 mol. Mass of CaCO₃ = 0.100 × 100 = 10.0 g.\n(b) V(CO₂) = 0.100 × 24 = 2.40 dm³",
        markScheme: [
          "n(CO₂) = 4.40/44 = 0.100 mol [1]",
          "n(CaCO₃) = 0.100 mol (by 1:1 ratio) [1]",
          "mass(CaCO₃) = 0.100 × 100 = 10.0 g [1]",
          "V(CO₂) = 0.100 × 24 = 2.40 dm³ [1]",
        ],
        commonError: "Forgetting to divide by Mᵣ of CO₂ first and using 4.40 g directly as moles.",
        guideRef: "Reacting Masses and the Limiting Reactant",
        difficulty: "core",
        hints: [
          "Start with what you know: find moles of CO₂ using n = m/M.",
          "Use the 1:1 mole ratio to find moles of CaCO₃.",
          "Convert moles of CaCO₃ to mass: m = n × M.",
          "For volume at r.t.p.: V = n × 24 dm³/mol.",
        ],
        strategy: "road-map: mass → moles → ratio → moles → mass/volume",
        solutions: [
          {
            label: "Method 1: Standard road-map",
            steps: [
              "n(CO₂) = m/M = 4.40 g / 44 g mol⁻¹ = 0.100 mol",
              "From equation, CaCO₃:CO₂ = 1:1, so n(CaCO₃) = 0.100 mol",
              "m(CaCO₃) = 0.100 × 100 = 10.0 g",
              "V(CO₂) = 0.100 × 24 = 2.40 dm³",
            ],
          },
          {
            label: "Method 2: Ratio of molar masses",
            steps: [
              "From equation: 100 g CaCO₃ produces 44 g CO₂ (reading the equation in grams)",
              "Scale factor: 4.40/44 = 0.100",
              "Mass of CaCO₃ = 0.100 × 100 = 10.0 g (same result)",
              "Volume of CO₂ = 0.100 × 24 = 2.40 dm³",
            ],
          },
        ],
      },
      {
        id: "chem-stoichiometry-qa-q02",
        question: "A student reacts 4.00 g of iron with 3.20 g of sulfur to form iron(II) sulfide:\nFe(s) + S(s) → FeS(s)\n(Aᵣ: Fe = 56, S = 32)\n(a) Identify the limiting reactant and justify your answer. [3]\n(b) Calculate the mass of FeS produced. [2]\n(c) Calculate the mass of the excess reactant remaining. [2]",
        marks: 7,
        modelAnswer: "(a) n(Fe) = 4.00/56 = 0.0714 mol; n(S) = 3.20/32 = 0.100 mol. Mole ratio 1:1. Divide by coefficient: Fe = 0.0714/1 = 0.0714; S = 0.100/1 = 0.100. Fe gives the smaller value → Fe is the limiting reactant.\n(b) n(FeS) = n(Fe) = 0.0714 mol; m(FeS) = 0.0714 × 88 = 6.28 g (Mᵣ FeS = 56+32=88).\n(c) S reacts: n(S reacted) = 0.0714 mol; m(S reacted) = 0.0714 × 32 = 2.29 g; m(S remaining) = 3.20 – 2.29 = 0.91 g.",
        markScheme: [
          "n(Fe) = 4.00/56 = 0.0714 mol [1]",
          "n(S) = 3.20/32 = 0.100 mol [1]",
          "Fe is limiting reactant (smaller moles/coefficient ratio) [1]",
          "n(FeS) = 0.0714 mol; Mᵣ(FeS) = 88; m(FeS) = 0.0714 × 88 = 6.28 g [2]",
          "m(S reacted) = 0.0714 × 32 = 2.29 g; m(S remaining) = 3.20 – 2.29 = 0.91 g [2]",
        ],
        commonError: "Assuming the reactant present in greater mass is in excess — you must compare moles, not masses.",
        guideRef: "Reacting Masses and the Limiting Reactant",
        difficulty: "challenge",
        hints: [
          "Convert both masses to moles first.",
          "For a 1:1 ratio, simply compare the mole values — the smaller is limiting.",
          "The amount of product equals the moles of the limiting reactant (1:1 ratio).",
          "The excess reactant remaining = initial mass – mass actually reacted (n × M).",
        ],
        strategy: "find limiting reactant before calculating product",
        solutions: [
          {
            label: "Full worked solution",
            steps: [
              "n(Fe) = 4.00/56 = 0.07143 mol",
              "n(S) = 3.20/32 = 0.1000 mol",
              "Ratio Fe:S = 1:1; divide by coefficient → Fe:0.0714, S:0.100 → Fe is limiting",
              "n(FeS) = n(Fe) = 0.07143 mol",
              "m(FeS) = 0.07143 × 88 = 6.29 g (≈ 6.28–6.29 g depending on rounding)",
              "n(S reacted) = 0.07143 mol → m(S reacted) = 0.07143 × 32 = 2.286 g",
              "m(S remaining) = 3.20 – 2.29 = 0.91 g",
            ],
          },
        ],
      },
      {
        id: "chem-stoichiometry-qa-q03",
        question: "In a titration, 20.0 cm³ of sulfuric acid of unknown concentration is titrated against 0.100 mol/dm³ sodium hydroxide solution. The mean titre is 24.00 cm³.\nH₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l)\n(a) Calculate the concentration of the sulfuric acid in mol/dm³. [3]\n(b) Calculate the concentration of the sulfuric acid in g/dm³. (Mᵣ H₂SO₄ = 98) [1]",
        marks: 4,
        modelAnswer: "(a) n(NaOH) = 0.100 × (24.00/1000) = 0.00240 mol. Mole ratio H₂SO₄:NaOH = 1:2, so n(H₂SO₄) = 0.00240/2 = 0.00120 mol. c(H₂SO₄) = 0.00120/(20.0/1000) = 0.00120/0.0200 = 0.0600 mol/dm³.\n(b) c = 0.0600 × 98 = 5.88 g/dm³",
        markScheme: [
          "n(NaOH) = 0.100 × 0.02400 = 0.00240 mol [1]",
          "n(H₂SO₄) = 0.00240/2 = 0.00120 mol [1]",
          "c(H₂SO₄) = 0.00120/0.0200 = 0.0600 mol/dm³ [1]",
          "c(H₂SO₄) in g/dm³ = 0.0600 × 98 = 5.88 g/dm³ [1]",
        ],
        commonError: "Using a 1:1 mole ratio instead of 1:2 (H₂SO₄ reacts with 2 NaOH); giving the concentration of NaOH not H₂SO₄.",
        guideRef: "Concentration, Solutions and Titration Calculations",
        difficulty: "challenge",
        hints: [
          "Start with the solution you know: find n(NaOH) = c × V (V in dm³).",
          "Apply the mole ratio: H₂SO₄:NaOH = 1:2, so n(H₂SO₄) = n(NaOH)/2.",
          "c(H₂SO₄) = n(H₂SO₄) / V(H₂SO₄ in dm³).",
          "Convert mol/dm³ to g/dm³ by multiplying by Mᵣ.",
        ],
        strategy: "unit analysis; apply mole ratio from equation",
        solutions: [
          {
            label: "Method 1: step-by-step moles",
            steps: [
              "V(NaOH) = 24.00 cm³ = 0.02400 dm³",
              "n(NaOH) = 0.100 mol/dm³ × 0.02400 dm³ = 0.002400 mol",
              "Mole ratio H₂SO₄:NaOH = 1:2 → n(H₂SO₄) = 0.002400/2 = 0.001200 mol",
              "V(H₂SO₄) = 20.0 cm³ = 0.02000 dm³",
              "c(H₂SO₄) = 0.001200/0.02000 = 0.0600 mol/dm³",
              "c in g/dm³ = 0.0600 × 98 = 5.88 g/dm³",
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // QUESTION BANK  (4 × 10 MCQ + 4 × 10 QA = 80 questions)
  // ─────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      // ── MCQ PAPER 1 ── symbols · formulae · balancing · Mᵣ ──
      {
        id: "chem-stoichiometry-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Ten MCQs on chemical symbols, formulae, balancing equations and relative formula mass.",
        questions: [
          {
            id: "chem-stoichiometry-bm1-01",
            question: "Which formula represents calcium hydroxide?",
            options: ["CaOH", "Ca(OH)₂", "Ca₂OH", "Ca(OH)₃"],
            answerIndex: 1,
            explanation: "Ca²⁺ needs two OH⁻ ions to balance charge, giving Ca(OH)₂. Option B.",
            guideRef: "Chemical Symbols, Formulae and Equations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm1-02",
            question: "Which set of state symbols correctly completes:\nNaCl(?) + H₂O(?) → Na⁺(?) + Cl⁻(?)",
            options: ["(s), (l), (aq), (aq)", "(aq), (l), (s), (s)", "(s), (g), (l), (l)", "(l), (l), (aq), (aq)"],
            answerIndex: 0,
            explanation: "Solid salt (s) dissolves in liquid water (l) to give aqueous ions (aq), (aq). Option A.",
            guideRef: "Chemical Symbols, Formulae and Equations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm1-03",
            question: "What are the coefficients (in order) that balance:\n? Al + ? Cl₂ → ? AlCl₃",
            options: ["1, 3, 1", "2, 3, 2", "2, 6, 2", "1, 1, 1"],
            answerIndex: 1,
            explanation: "2Al + 3Cl₂ → 2AlCl₃. Check Al: 2=2; Cl: 6 = 2×3 = 6. Option B.",
            guideRef: "Chemical Symbols, Formulae and Equations",
            difficulty: "core",
            hints: ["AlCl₃ has 3 Cl per unit; Cl₂ supplies Cl in pairs.", "Try 2 AlCl₃ (6 Cl) → needs 3 Cl₂ and 2 Al.", "Check each element balances."],
          },
          {
            id: "chem-stoichiometry-bm1-04",
            question: "Which is the correct net ionic equation for mixing silver nitrate and sodium chloride solutions?",
            options: [
              "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)",
              "AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)",
              "Na⁺(aq) + NO₃⁻(aq) → NaNO₃(s)",
              "Ag⁺(aq) + NO₃⁻(aq) → AgNO₃(s)",
            ],
            answerIndex: 0,
            explanation: "Na⁺ and NO₃⁻ are spectator ions; the net change is Ag⁺ + Cl⁻ → AgCl(s). Option A.",
            guideRef: "Chemical Symbols, Formulae and Equations",
            difficulty: "core",
            hints: ["Identify which ions appear unchanged on both sides (spectators).", "Remove Na⁺ and NO₃⁻.", "What precipitate forms?"],
          },
          {
            id: "chem-stoichiometry-bm1-05",
            question: "What is the relative formula mass of ammonium sulfate, (NH₄)₂SO₄? (Aᵣ: N=14, H=1, S=32, O=16)",
            options: ["114", "132", "118", "150"],
            answerIndex: 1,
            explanation: "(NH₄)₂SO₄: 2×(14+4) + 32 + 4×16 = 2×18 + 32 + 64 = 36 + 96 = 132. Option B.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "core",
            hints: ["Mᵣ(NH₄) = 14 + 4 = 18; there are two of them.", "SO₄ = 32 + 64 = 96.", "Total = 36 + 96."],
          },
          {
            id: "chem-stoichiometry-bm1-06",
            question: "What is the relative formula mass of hydrated magnesium sulfate, MgSO₄·7H₂O? (Aᵣ: Mg=24, S=32, O=16, H=1)",
            options: ["120", "246", "174", "234"],
            answerIndex: 1,
            explanation: "MgSO₄ = 24+32+64 = 120; 7H₂O = 7×18 = 126; total = 120 + 126 = 246. Option B.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "challenge",
            hints: ["First find Mᵣ of anhydrous MgSO₄ = 120.", "Each H₂O = 18; there are 7 of them.", "Add 120 + 126."],
            strategy: "treat the water of crystallisation separately, then add",
          },
          {
            id: "chem-stoichiometry-bm1-07",
            question: "How many moles are there in 8.00 g of sodium hydroxide, NaOH? (Mᵣ = 40)",
            options: ["0.100 mol", "0.200 mol", "0.300 mol", "5.00 mol"],
            answerIndex: 1,
            explanation: "n = m/M = 8.00/40 = 0.200 mol. Option B.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm1-08",
            question: "What is the mass of 0.250 mol of carbon dioxide, CO₂? (Mᵣ = 44)",
            options: ["11.0 g", "44.0 g", "176 g", "5.68 g"],
            answerIndex: 0,
            explanation: "m = n × M = 0.250 × 44 = 11.0 g. Option A.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm1-09",
            question: "0.50 mol of an element has a mass of 32 g. What is its relative atomic mass?",
            options: ["16", "32", "64", "48"],
            answerIndex: 2,
            explanation: "M = m/n = 32/0.50 = 64 g/mol, so Aᵣ = 64 (copper). Option C. Dividing instead of rearranging gives the wrong 16.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "core",
            hints: ["Rearrange n = m/M to M = m/n.", "M = 32/0.50.", "Aᵣ equals the molar mass numerically."],
          },
          {
            id: "chem-stoichiometry-bm1-10",
            question: "Which sample contains the greatest number of molecules?",
            options: [
              "3.0 g of H₂ (Mᵣ = 2)",
              "16 g of O₂ (Mᵣ = 32)",
              "44 g of CO₂ (Mᵣ = 44)",
              "18 g of H₂O (Mᵣ = 18)",
            ],
            answerIndex: 0,
            explanation: "Moles: H₂ = 3.0/2 = 1.5; O₂ = 16/32 = 0.50; CO₂ = 44/44 = 1.0; H₂O = 18/18 = 1.0. The greatest number of moles is H₂ at 1.5 mol. Since molecules are proportional to moles, H₂ has the most molecules. Option A.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "challenge",
            hints: ["Convert each to moles: n = m/M.", "Molecules are proportional to moles.", "Compare the mole values."],
            strategy: "molecules ∝ moles, so just compare moles",
          },
        ],
      },
      // ── MCQ PAPER 2 ── reacting masses · limiting reactant · yield · purity ──
      {
        id: "chem-stoichiometry-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Ten MCQs on reacting masses, the limiting reactant, percentage yield and percentage purity.",
        questions: [
          {
            id: "chem-stoichiometry-bm2-01",
            question: "What mass of MgO forms when 4.8 g of magnesium burns completely?\n2Mg + O₂ → 2MgO (Aᵣ: Mg=24, O=16)",
            options: ["8.0 g", "6.4 g", "4.0 g", "9.6 g"],
            answerIndex: 0,
            explanation: "n(Mg) = 4.8/24 = 0.20 mol; ratio Mg:MgO = 1:1 → n(MgO) = 0.20 mol; m = 0.20 × 40 = 8.0 g. Option A.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: ["n(Mg) = 4.8/24.", "1:1 ratio gives n(MgO).", "Mᵣ(MgO) = 40; m = n × 40."],
          },
          {
            id: "chem-stoichiometry-bm2-02",
            question: "What mass of oxygen reacts with 4.8 g of magnesium?\n2Mg + O₂ → 2MgO (Aᵣ: Mg=24, O=16)",
            options: ["1.6 g", "3.2 g", "6.4 g", "0.8 g"],
            answerIndex: 1,
            explanation: "n(Mg) = 0.20 mol; ratio Mg:O₂ = 2:1 → n(O₂) = 0.10 mol; m(O₂) = 0.10 × 32 = 3.2 g. Option B.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: ["n(Mg) = 0.20 mol.", "Mg:O₂ = 2:1, so halve the moles.", "Mᵣ(O₂) = 32."],
          },
          {
            id: "chem-stoichiometry-bm2-03",
            question: "2.0 mol of H₂ reacts with 1.5 mol of O₂: 2H₂ + O₂ → 2H₂O. Which is the limiting reactant?",
            options: ["H₂", "O₂", "Neither — they react exactly", "Cannot be determined"],
            answerIndex: 0,
            explanation: "Divide by coefficient: H₂ = 2.0/2 = 1.0; O₂ = 1.5/1 = 1.5. H₂ gives the smaller value, so H₂ is limiting. Option A.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: ["Divide each reactant's moles by its coefficient.", "H₂: 2.0/2; O₂: 1.5/1.", "Smaller value = limiting."],
          },
          {
            id: "chem-stoichiometry-bm2-04",
            question: "Carbon reacts with steam: C + H₂O → CO + H₂. If 6.0 g of carbon reacts completely, what mass of H₂ forms? (Aᵣ: C=12, H=1)",
            options: ["0.50 g", "1.0 g", "2.0 g", "12 g"],
            answerIndex: 1,
            explanation: "n(C) = 6.0/12 = 0.50 mol; ratio C:H₂ = 1:1 → n(H₂) = 0.50 mol; m(H₂) = 0.50 × 2 = 1.0 g. Option B.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: ["n(C) = 6.0/12.", "1:1 ratio gives n(H₂).", "Mᵣ(H₂) = 2."],
          },
          {
            id: "chem-stoichiometry-bm2-05",
            question: "A reaction has a theoretical yield of 25.0 g but the actual yield is 21.0 g. What is the percentage yield?",
            options: ["84.0%", "119%", "80.0%", "76.0%"],
            answerIndex: 0,
            explanation: "% yield = (21.0/25.0) × 100 = 84.0%. Option A.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm2-06",
            question: "An impure 8.00 g sample of zinc contains 7.20 g of zinc metal. What is its percentage purity?",
            options: ["72.0%", "90.0%", "80.0%", "111%"],
            answerIndex: 1,
            explanation: "% purity = (7.20/8.00) × 100 = 90.0%. Option B.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm2-07",
            question: "When 5.0 g of CaCO₃ is heated, 2.8 g of CaO remains. The rest is lost as CO₂.\nCaCO₃ → CaO + CO₂. What mass of CO₂ was released?",
            options: ["1.2 g", "2.2 g", "2.8 g", "7.8 g"],
            answerIndex: 1,
            explanation: "By conservation of mass, m(CO₂) = 5.0 − 2.8 = 2.2 g. Option B.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: ["Mass is conserved: reactant mass = total product mass.", "m(CO₂) = m(CaCO₃) − m(CaO)."],
          },
          {
            id: "chem-stoichiometry-bm2-08",
            question: "What mass of aluminium is needed to produce 5.10 g of aluminium oxide?\n4Al + 3O₂ → 2Al₂O₃ (Aᵣ: Al=27, O=16; Mᵣ Al₂O₃ = 102)",
            options: ["2.70 g", "5.40 g", "1.35 g", "10.2 g"],
            answerIndex: 0,
            explanation: "n(Al₂O₃) = 5.10/102 = 0.0500 mol; ratio Al:Al₂O₃ = 4:2 = 2:1 → n(Al) = 0.100 mol; m(Al) = 0.100 × 27 = 2.70 g. Option A.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "challenge",
            hints: ["n(Al₂O₃) = 5.10/102.", "Ratio Al:Al₂O₃ = 4:2 = 2:1.", "m(Al) = n(Al) × 27."],
            strategy: "simplify the 4:2 ratio to 2:1 before scaling",
          },
          {
            id: "chem-stoichiometry-bm2-09",
            question: "10.0 g of N₂ reacts with 10.0 g of H₂ in N₂ + 3H₂ → 2NH₃. Which is limiting? (Mᵣ: N₂=28, H₂=2)",
            options: ["N₂", "H₂", "Both in exact ratio", "Cannot tell"],
            answerIndex: 0,
            explanation: "n(N₂) = 10/28 = 0.357 mol; n(H₂) = 10/2 = 5.0 mol. Divide by coefficient: N₂ = 0.357/1 = 0.357; H₂ = 5.0/3 = 1.67. N₂ gives the smaller value → N₂ is limiting. Option A.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "challenge",
            hints: ["Convert both masses to moles.", "Divide each by its coefficient (N₂:1, H₂:3).", "Smaller result is limiting."],
            strategy: "moles then divide by coefficient",
          },
          {
            id: "chem-stoichiometry-bm2-10",
            question: "8.0 g of sulfur burns in excess oxygen: S + O₂ → SO₂. If the percentage yield of SO₂ is 75%, what mass of SO₂ is collected? (Aᵣ: S=32, O=16)",
            options: ["12 g", "16 g", "24 g", "48 g"],
            answerIndex: 0,
            explanation: "n(S) = 8.0/32 = 0.25 mol → theoretical n(SO₂) = 0.25 mol → theoretical m = 0.25 × 64 = 16 g. Actual = 0.75 × 16 = 12 g. Option A.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "challenge",
            hints: ["Find theoretical mass of SO₂ first (Mᵣ SO₂ = 64).", "n(S) = n(SO₂) by 1:1 ratio.", "Multiply theoretical mass by 0.75."],
            strategy: "theoretical mass first, then apply % yield",
          },
        ],
      },
      // ── MCQ PAPER 3 ── empirical/molecular formulae · gas volumes ──
      {
        id: "chem-stoichiometry-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Ten MCQs on empirical and molecular formulae, combustion data, and molar gas volume calculations.",
        questions: [
          {
            id: "chem-stoichiometry-bm3-01",
            question: "A compound contains 0.40 mol C, 0.80 mol H and 0.40 mol O. What is its empirical formula?",
            options: ["CHO", "CH₂O", "C₂H₄O₂", "CH₄O"],
            answerIndex: 1,
            explanation: "Divide by smallest (0.40): C=1, H=2, O=1 → CH₂O. Option B.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm3-02",
            question: "An oxide of nitrogen contains 30.4% N and 69.6% O by mass. What is its empirical formula? (Aᵣ: N=14, O=16)",
            options: ["NO", "NO₂", "N₂O", "N₂O₃"],
            answerIndex: 1,
            explanation: "N: 30.4/14 = 2.17; O: 69.6/16 = 4.35. Divide by 2.17: N=1, O=2.00 → NO₂. Option B.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: ["Divide each % by its Aᵣ.", "Divide both by the smaller value (2.17).", "O/N ≈ 2."],
          },
          {
            id: "chem-stoichiometry-bm3-03",
            question: "A compound has empirical formula NO₂ and Mᵣ = 92. What is its molecular formula? (empirical mass = 46)",
            options: ["NO₂", "N₂O₄", "N₂O₂", "N₄O₈"],
            answerIndex: 1,
            explanation: "n = 92/46 = 2 → molecular formula = N₂O₄. Option B.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: ["EFM(NO₂) = 14 + 32 = 46.", "n = Mᵣ / EFM = 92/46.", "Multiply subscripts by n."],
          },
          {
            id: "chem-stoichiometry-bm3-04",
            question: "A hydrocarbon contains 80% C and 20% H by mass and has Mᵣ = 30. What is its molecular formula? (Aᵣ: C=12, H=1)",
            options: ["CH₄", "C₂H₆", "C₂H₄", "CH₃"],
            answerIndex: 1,
            explanation: "C: 80/12 = 6.67; H: 20/1 = 20. Divide by 6.67: C=1, H=3 → empirical CH₃ (mass 15). n = 30/15 = 2 → C₂H₆. Option B.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "challenge",
            hints: ["% ÷ Aᵣ then ÷ smallest gives CH₃.", "EFM(CH₃) = 15.", "n = 30/15 = 2."],
            strategy: "empirical formula first, then scale to Mᵣ",
          },
          {
            id: "chem-stoichiometry-bm3-05",
            question: "When a hydrocarbon is burned, 0.20 mol CO₂ and 0.30 mol H₂O are produced. What is the ratio of C:H atoms?",
            options: ["1:1", "2:3", "1:3", "2:1"],
            answerIndex: 2,
            explanation: "Moles of C = n(CO₂) = 0.20 mol. Moles of H = 2 × n(H₂O) = 2 × 0.30 = 0.60 mol. Ratio C:H = 0.20:0.60 = 1:3. Option C. The trap (option B, 2:3) comes from forgetting that each water molecule contains 2 hydrogen atoms.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "challenge",
            hints: ["Moles of C = moles of CO₂.", "Moles of H = 2 × moles of H₂O.", "Form the ratio C:H and simplify."],
            strategy: "remember each water molecule holds two H atoms",
          },
          {
            id: "chem-stoichiometry-bm3-06",
            question: "What is the volume of 0.20 mol of any gas at r.t.p.?",
            options: ["2.4 dm³", "4.8 dm³", "24 dm³", "0.20 dm³"],
            answerIndex: 1,
            explanation: "V = n × 24 = 0.20 × 24 = 4.8 dm³. Option B.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm3-07",
            question: "How many moles of gas occupy 600 cm³ at r.t.p.?",
            options: ["0.025 mol", "0.25 mol", "0.0025 mol", "25 mol"],
            answerIndex: 0,
            explanation: "600 cm³ = 0.600 dm³; n = V/24 = 0.600/24 = 0.025 mol. Option A.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: ["Convert cm³ to dm³: ÷1000.", "n = V/24.", "0.600/24 = 0.025."],
          },
          {
            id: "chem-stoichiometry-bm3-08",
            question: "What volume of CO₂ at r.t.p. is produced when 12.0 g of carbon burns completely in oxygen? C + O₂ → CO₂ (Aᵣ: C=12)",
            options: ["12 dm³", "24 dm³", "48 dm³", "2.4 dm³"],
            answerIndex: 1,
            explanation: "n(C) = 12.0/12 = 1.00 mol → n(CO₂) = 1.00 mol → V = 1.00 × 24 = 24 dm³. Option B.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: ["n(C) = 12.0/12.", "1:1 ratio gives n(CO₂).", "V = n × 24."],
          },
          {
            id: "chem-stoichiometry-bm3-09",
            question: "What volume of hydrogen at r.t.p. is produced when 0.20 mol of magnesium reacts with excess acid? Mg + 2HCl → MgCl₂ + H₂",
            options: ["2.4 dm³", "4.8 dm³", "9.6 dm³", "0.48 dm³"],
            answerIndex: 1,
            explanation: "Ratio Mg:H₂ = 1:1 → n(H₂) = 0.20 mol → V = 0.20 × 24 = 4.8 dm³. Option B.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: ["Mg:H₂ ratio is 1:1.", "n(H₂) = 0.20 mol.", "V = 0.20 × 24."],
          },
          {
            id: "chem-stoichiometry-bm3-10",
            question: "50 cm³ of methane reacts with oxygen: CH₄ + 2O₂ → CO₂ + 2H₂O. What volume of oxygen (same conditions) is needed for complete combustion?",
            options: ["25 cm³", "50 cm³", "100 cm³", "200 cm³"],
            answerIndex: 2,
            explanation: "By Avogadro's law, gas volumes are in the mole ratio. CH₄:O₂ = 1:2, so O₂ = 2 × 50 = 100 cm³. Option C.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "challenge",
            hints: ["For gases at the same conditions, volume ratio = mole ratio.", "CH₄:O₂ = 1:2.", "O₂ = 2 × 50 cm³."],
            strategy: "equal volumes of gas contain equal moles (Avogadro's law)",
          },
        ],
      },
      // ── MCQ PAPER 4 ── concentration · titration · mixed multi-step ──
      {
        id: "chem-stoichiometry-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ten MCQs on concentration, titration calculations and mixed multi-step stoichiometry.",
        questions: [
          {
            id: "chem-stoichiometry-bm4-01",
            question: "What is the concentration of a solution containing 0.50 mol of solute in 2.0 dm³?",
            options: ["0.25 mol/dm³", "1.0 mol/dm³", "0.50 mol/dm³", "2.5 mol/dm³"],
            answerIndex: 0,
            explanation: "c = n/V = 0.50/2.0 = 0.25 mol/dm³. Option A.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm4-02",
            question: "How many moles of HCl are in 250 cm³ of 0.40 mol/dm³ hydrochloric acid?",
            options: ["0.10 mol", "0.16 mol", "1.6 mol", "0.0010 mol"],
            answerIndex: 0,
            explanation: "n = c × V = 0.40 × (250/1000) = 0.40 × 0.250 = 0.10 mol. Option A.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm4-03",
            question: "A 0.250 mol/dm³ solution of NaOH — what is its concentration in g/dm³? (Mᵣ NaOH = 40)",
            options: ["10.0 g/dm³", "40.0 g/dm³", "16.0 g/dm³", "6.25 g/dm³"],
            answerIndex: 0,
            explanation: "c(g/dm³) = 0.250 × 40 = 10.0 g/dm³. Option A.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm4-04",
            question: "25.0 cm³ of NaOH is exactly neutralised by 25.0 cm³ of 0.100 mol/dm³ HCl.\nHCl + NaOH → NaCl + H₂O. What is the concentration of the NaOH?",
            options: ["0.100 mol/dm³", "0.050 mol/dm³", "0.200 mol/dm³", "0.025 mol/dm³"],
            answerIndex: 0,
            explanation: "n(HCl) = 0.100 × 0.0250 = 0.00250 mol; 1:1 ratio → n(NaOH) = 0.00250 mol; c = 0.00250/0.0250 = 0.100 mol/dm³ (equal volumes and 1:1 ratio means equal concentration). Option A.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: ["n(HCl) = c × V (dm³).", "1:1 ratio → n(NaOH) equal.", "c(NaOH) = n/V."],
          },
          {
            id: "chem-stoichiometry-bm4-05",
            question: "20.0 cm³ of H₂SO₄ is neutralised by 40.0 cm³ of 0.100 mol/dm³ NaOH.\nH₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. What is the concentration of the H₂SO₄?",
            options: ["0.050 mol/dm³", "0.100 mol/dm³", "0.200 mol/dm³", "0.025 mol/dm³"],
            answerIndex: 1,
            explanation: "n(NaOH) = 0.100 × 0.0400 = 0.00400 mol; ratio H₂SO₄:NaOH = 1:2 → n(H₂SO₄) = 0.00200 mol; c = 0.00200/0.0200 = 0.100 mol/dm³. Option B.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "challenge",
            hints: ["n(NaOH) = c × V.", "H₂SO₄:NaOH = 1:2 → halve to get n(H₂SO₄).", "c = n(H₂SO₄)/V(H₂SO₄ in dm³)."],
            strategy: "apply the 1:2 ratio, not 1:1",
          },
          {
            id: "chem-stoichiometry-bm4-06",
            question: "What mass of NaOH is needed to make 500 cm³ of 0.200 mol/dm³ solution? (Mᵣ NaOH = 40)",
            options: ["4.00 g", "8.00 g", "40.0 g", "2.00 g"],
            answerIndex: 0,
            explanation: "n = c × V = 0.200 × 0.500 = 0.100 mol; m = 0.100 × 40 = 4.00 g. Option A.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: ["n = c × V (V in dm³).", "0.200 × 0.500 = 0.100 mol.", "m = n × M."],
          },
          {
            id: "chem-stoichiometry-bm4-07",
            question: "Which titration result should be DISCARDED when calculating the mean titre?\nTitres: 24.10, 25.20, 24.15, 24.05 cm³",
            options: ["24.10 cm³", "25.20 cm³", "24.15 cm³", "24.05 cm³"],
            answerIndex: 1,
            explanation: "Concordant titres agree within 0.10 cm³: 24.10, 24.15, 24.05 are concordant. 25.20 cm³ is an outlier (the rough/anomalous titre) and is discarded. Option B.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: ["Concordant results agree within 0.10 cm³.", "Which value is far from the others?"],
          },
          {
            id: "chem-stoichiometry-bm4-08",
            question: "0.65 g of zinc reacts completely with excess HCl: Zn + 2HCl → ZnCl₂ + H₂. What volume of H₂ forms at r.t.p.? (Aᵣ: Zn=65)",
            options: ["0.24 dm³", "0.48 dm³", "2.4 dm³", "0.12 dm³"],
            answerIndex: 0,
            explanation: "n(Zn) = 0.65/65 = 0.010 mol; 1:1 ratio → n(H₂) = 0.010 mol; V = 0.010 × 24 = 0.24 dm³. Option A.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: ["n(Zn) = 0.65/65.", "Zn:H₂ = 1:1.", "V = n × 24."],
          },
          {
            id: "chem-stoichiometry-bm4-09",
            question: "25.0 cm³ of 0.0500 mol/dm³ Na₂CO₃ is titrated with HCl: Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂. What volume of 0.100 mol/dm³ HCl is required?",
            options: ["12.5 cm³", "25.0 cm³", "50.0 cm³", "6.25 cm³"],
            answerIndex: 1,
            explanation: "n(Na₂CO₃) = 0.0500 × 0.0250 = 0.00125 mol; ratio 1:2 → n(HCl) = 0.00250 mol; V = n/c = 0.00250/0.100 = 0.0250 dm³ = 25.0 cm³. Option B.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "challenge",
            hints: ["n(Na₂CO₃) = c × V.", "Ratio Na₂CO₃:HCl = 1:2.", "V(HCl) = n(HCl)/c, then convert dm³ → cm³."],
            strategy: "work to moles of HCl, then back to volume",
          },
          {
            id: "chem-stoichiometry-bm4-10",
            question: "A 1.00 g sample of impure magnesium reacts with excess acid to give 0.840 dm³ of H₂ at r.t.p.\nMg + 2HCl → MgCl₂ + H₂. What is the percentage purity of the magnesium? (Aᵣ: Mg=24)",
            options: ["84.0%", "70.0%", "75.6%", "87.5%"],
            answerIndex: 0,
            explanation: "n(H₂) = 0.840/24 = 0.0350 mol; ratio Mg:H₂ = 1:1 → n(Mg) = 0.0350 mol; m(Mg) = 0.0350 × 24 = 0.840 g; % purity = (0.840/1.00) × 100 = 84.0%. Option A.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "challenge",
            hints: ["n(H₂) = V/24.", "Mg:H₂ = 1:1 → n(Mg); then m(Mg) = n × 24.", "% purity = mass Mg / sample mass × 100."],
            strategy: "gas volume → moles → mass → % purity",
          },
        ],
      },
    ],

    qaPapers: [
      // ── QA PAPER 1 ── Mr, moles, reacting masses ──
      {
        id: "chem-stoichiometry-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ten structured questions on relative formula mass, the mole, and reacting-mass calculations.",
        questions: [
          {
            id: "chem-stoichiometry-bq1-01",
            question: "(a) Define relative atomic mass. [2]\n(b) Calculate the relative formula mass of magnesium chloride, MgCl₂. (Aᵣ: Mg=24, Cl=35.5) [1]",
            marks: 3,
            modelAnswer: "(a) The weighted mean mass of one atom of an element, measured relative to 1/12 the mass of a carbon-12 atom.\n(b) Mᵣ(MgCl₂) = 24 + 2×35.5 = 24 + 71 = 95.",
            markScheme: [
              "Weighted mean / average mass of an atom of the element [1]",
              "Relative to 1/12 mass of carbon-12 atom [1]",
              "Mᵣ = 24 + 71 = 95 [1]",
            ],
            commonError: "Forgetting to multiply Cl by 2, giving 59.5.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bq1-02",
            question: "Balance the following equations:\n(a) Fe + O₂ → Fe₂O₃ [1]\n(b) C₂H₆ + O₂ → CO₂ + H₂O [2]",
            marks: 3,
            modelAnswer: "(a) 4Fe + 3O₂ → 2Fe₂O₃.\n(b) 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O.",
            markScheme: [
              "4Fe + 3O₂ → 2Fe₂O₃ [1]",
              "Correct C and H balance: 2C₂H₆ → 4CO₂ + 6H₂O [1]",
              "Correct O balance: 7O₂ (left O = 14 = 8 + 6) [1]",
            ],
            commonError: "Changing subscripts inside a formula instead of adjusting the coefficients in front.",
            guideRef: "Chemical Symbols, Formulae and Equations",
            difficulty: "core",
            hints: [
              "For (a): get an even number of O on the right — try 2Fe₂O₃.",
              "For (b): balance C first (4 CO₂), then H (6 H₂O).",
              "Right-side O = 4×2 + 6×1 = 14, so you need 7 O₂.",
            ],
          },
          {
            id: "chem-stoichiometry-bq1-03",
            question: "(a) Calculate the number of moles in 5.6 g of nitrogen gas, N₂. (Mᵣ = 28) [1]\n(b) How many molecules is this? (Nₐ = 6.02 × 10²³ mol⁻¹) [2]",
            marks: 3,
            modelAnswer: "(a) n = 5.6/28 = 0.20 mol.\n(b) molecules = n × Nₐ = 0.20 × 6.02×10²³ = 1.204×10²³ ≈ 1.2×10²³ molecules.",
            markScheme: [
              "n = 5.6/28 = 0.20 mol [1]",
              "molecules = n × Nₐ [1]",
              "= 1.2 × 10²³ molecules [1]",
            ],
            commonError: "Reporting atoms instead of molecules, or multiplying by 2 unnecessarily when the question asks for molecules.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "core",
            hints: [
              "n = m/M for part (a).",
              "Number of molecules = moles × Avogadro constant.",
              "0.20 × 6.02×10²³.",
            ],
            solutions: [
              {
                label: "Moles then molecules",
                steps: [
                  "n = m/M = 5.6 g / 28 g mol⁻¹ = 0.200 mol",
                  "N(molecules) = n × Nₐ = 0.200 × 6.02×10²³",
                  "= 1.204×10²³ ≈ 1.2×10²³ molecules",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq1-04",
            question: "Magnesium reacts with oxygen: 2Mg + O₂ → 2MgO. (Aᵣ: Mg=24, O=16)\n(a) Calculate the mass of magnesium oxide formed when 6.0 g of magnesium is burned in excess oxygen. [3]\n(b) Calculate the mass of oxygen that combines with the magnesium. [2]",
            marks: 5,
            modelAnswer: "(a) n(Mg) = 6.0/24 = 0.25 mol. Ratio Mg:MgO = 1:1 → n(MgO) = 0.25 mol. m(MgO) = 0.25 × 40 = 10.0 g.\n(b) Ratio Mg:O₂ = 2:1 → n(O₂) = 0.125 mol. m(O₂) = 0.125 × 32 = 4.0 g. (Check: 6.0 + 4.0 = 10.0 g ✓ conservation of mass.)",
            markScheme: [
              "n(Mg) = 6.0/24 = 0.25 mol [1]",
              "n(MgO) = 0.25 mol (1:1) [1]",
              "m(MgO) = 0.25 × 40 = 10.0 g [1]",
              "n(O₂) = 0.125 mol (2:1) [1]",
              "m(O₂) = 0.125 × 32 = 4.0 g [1]",
            ],
            commonError: "Using a 1:1 ratio for Mg:O₂ instead of 2:1, giving 8.0 g of oxygen.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "n(Mg) = m/M; Mᵣ(MgO) = 40.",
              "Mg:MgO = 1:1; Mg:O₂ = 2:1.",
              "Check your answer with conservation of mass.",
            ],
            solutions: [
              {
                label: "Reacting-mass road-map",
                steps: [
                  "n(Mg) = 6.0/24 = 0.250 mol",
                  "Mg:MgO = 1:1 → n(MgO) = 0.250 mol → m(MgO) = 0.250 × 40 = 10.0 g",
                  "Mg:O₂ = 2:1 → n(O₂) = 0.250/2 = 0.125 mol → m(O₂) = 0.125 × 32 = 4.0 g",
                  "Conservation check: 6.0 + 4.0 = 10.0 g = m(MgO) ✓",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq1-05",
            question: "Sodium reacts with water: 2Na + 2H₂O → 2NaOH + H₂. (Aᵣ: Na=23)\n(a) Calculate the mass of NaOH produced when 4.6 g of sodium reacts completely. (Mᵣ NaOH = 40) [3]\n(b) Calculate the volume of hydrogen gas produced at r.t.p. [2]",
            marks: 5,
            modelAnswer: "(a) n(Na) = 4.6/23 = 0.20 mol. Ratio Na:NaOH = 2:2 = 1:1 → n(NaOH) = 0.20 mol. m(NaOH) = 0.20 × 40 = 8.0 g.\n(b) Ratio Na:H₂ = 2:1 → n(H₂) = 0.10 mol. V = 0.10 × 24 = 2.4 dm³.",
            markScheme: [
              "n(Na) = 4.6/23 = 0.20 mol [1]",
              "n(NaOH) = 0.20 mol (1:1) [1]",
              "m(NaOH) = 0.20 × 40 = 8.0 g [1]",
              "n(H₂) = 0.10 mol (2:1) [1]",
              "V(H₂) = 0.10 × 24 = 2.4 dm³ [1]",
            ],
            commonError: "Using Na:H₂ = 1:1 instead of 2:1 for the hydrogen, giving 4.8 dm³.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "n(Na) = m/M.",
              "Na:NaOH simplifies to 1:1; Na:H₂ is 2:1.",
              "V(H₂) = n × 24.",
            ],
            solutions: [
              {
                label: "Two-product road-map",
                steps: [
                  "n(Na) = 4.6/23 = 0.200 mol",
                  "Na:NaOH = 2:2 = 1:1 → n(NaOH) = 0.200 mol → m = 0.200 × 40 = 8.0 g",
                  "Na:H₂ = 2:1 → n(H₂) = 0.100 mol",
                  "V(H₂) = 0.100 × 24 = 2.4 dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq1-06",
            question: "Potassium nitrate decomposes on heating: 2KNO₃ → 2KNO₂ + O₂. (Mᵣ: KNO₃ = 101, KNO₂ = 85)\n(a) Calculate the mass of KNO₂ formed when 20.2 g of KNO₃ decomposes completely. [3]\n(b) Calculate the volume of oxygen produced at r.t.p. [2]",
            marks: 5,
            modelAnswer: "(a) n(KNO₃) = 20.2/101 = 0.200 mol. Ratio KNO₃:KNO₂ = 2:2 = 1:1 → n(KNO₂) = 0.200 mol. m = 0.200 × 85 = 17.0 g.\n(b) Ratio KNO₃:O₂ = 2:1 → n(O₂) = 0.100 mol. V = 0.100 × 24 = 2.40 dm³.",
            markScheme: [
              "n(KNO₃) = 20.2/101 = 0.200 mol [1]",
              "n(KNO₂) = 0.200 mol (1:1) [1]",
              "m(KNO₂) = 0.200 × 85 = 17.0 g [1]",
              "n(O₂) = 0.100 mol (2:1) [1]",
              "V(O₂) = 0.100 × 24 = 2.40 dm³ [1]",
            ],
            commonError: "Using 2:1 for KNO₃:KNO₂ — it is actually 1:1; the 2:1 ratio applies only to O₂.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "n(KNO₃) = m/M.",
              "KNO₃:KNO₂ = 1:1; KNO₃:O₂ = 2:1.",
              "V(O₂) = n × 24.",
            ],
          },
          {
            id: "chem-stoichiometry-bq1-07",
            question: "Aluminium reacts with iron(III) oxide in the thermite reaction:\n2Al + Fe₂O₃ → Al₂O₃ + 2Fe. (Aᵣ: Al=27, Fe=56, O=16)\n(a) Calculate the mass of iron produced from 5.4 g of aluminium reacting with excess Fe₂O₃. [3]\n(b) Calculate the minimum mass of Fe₂O₃ required to react with this aluminium. (Mᵣ Fe₂O₃ = 160) [2]",
            marks: 5,
            modelAnswer: "(a) n(Al) = 5.4/27 = 0.20 mol. Ratio Al:Fe = 2:2 = 1:1 → n(Fe) = 0.20 mol. m(Fe) = 0.20 × 56 = 11.2 g.\n(b) Ratio Al:Fe₂O₃ = 2:1 → n(Fe₂O₃) = 0.10 mol. m = 0.10 × 160 = 16.0 g.",
            markScheme: [
              "n(Al) = 5.4/27 = 0.20 mol [1]",
              "n(Fe) = 0.20 mol (1:1) [1]",
              "m(Fe) = 0.20 × 56 = 11.2 g [1]",
              "n(Fe₂O₃) = 0.10 mol (2:1) [1]",
              "m(Fe₂O₃) = 0.10 × 160 = 16.0 g [1]",
            ],
            commonError: "Misreading the Al:Fe ratio; it simplifies to 1:1 (2:2), while Al:Fe₂O₃ is 2:1.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "challenge",
            hints: [
              "n(Al) = m/M.",
              "Al:Fe = 2:2 = 1:1; Al:Fe₂O₃ = 2:1.",
              "m = n × M for each species.",
            ],
            solutions: [
              {
                label: "Thermite reacting masses",
                steps: [
                  "n(Al) = 5.4/27 = 0.200 mol",
                  "Al:Fe = 2:2 = 1:1 → n(Fe) = 0.200 mol → m(Fe) = 0.200 × 56 = 11.2 g",
                  "Al:Fe₂O₃ = 2:1 → n(Fe₂O₃) = 0.100 mol → m = 0.100 × 160 = 16.0 g",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq1-08",
            question: "Copper(II) carbonate decomposes: CuCO₃ → CuO + CO₂. (Mᵣ: CuCO₃ = 124, CuO = 80)\n(a) Calculate the mass of copper(II) oxide produced when 6.20 g of CuCO₃ is fully decomposed. [3]\n(b) A student decomposed the sample and obtained only 3.60 g of CuO. Calculate the percentage yield. [2]",
            marks: 5,
            modelAnswer: "(a) n(CuCO₃) = 6.20/124 = 0.0500 mol. Ratio 1:1 → n(CuO) = 0.0500 mol. m(CuO) = 0.0500 × 80 = 4.00 g.\n(b) % yield = (3.60/4.00) × 100 = 90.0%.",
            markScheme: [
              "n(CuCO₃) = 6.20/124 = 0.0500 mol [1]",
              "n(CuO) = 0.0500 mol (1:1) [1]",
              "Theoretical m(CuO) = 0.0500 × 80 = 4.00 g [1]",
              "% yield = (3.60/4.00) × 100 [1]",
              "= 90.0% [1]",
            ],
            commonError: "Calculating % yield against the mass of CuCO₃ rather than the theoretical mass of CuO.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "n(CuCO₃) = m/M.",
              "1:1 ratio → n(CuO); theoretical m = n × 80.",
              "% yield = actual/theoretical × 100.",
            ],
            solutions: [
              {
                label: "Theoretical mass then % yield",
                steps: [
                  "n(CuCO₃) = 6.20/124 = 0.05000 mol",
                  "n(CuO) = 0.05000 mol → theoretical m = 0.05000 × 80 = 4.00 g",
                  "% yield = (3.60/4.00) × 100 = 90.0%",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq1-09",
            question: "A student burns 2.30 g of ethanol, C₂H₅OH, in excess oxygen.\nC₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. (Mᵣ: C₂H₅OH = 46, CO₂ = 44)\n(a) Calculate the moles of ethanol burned. [1]\n(b) Calculate the mass of carbon dioxide produced. [2]\n(c) Calculate the volume of carbon dioxide at r.t.p. [2]",
            marks: 5,
            modelAnswer: "(a) n(C₂H₅OH) = 2.30/46 = 0.0500 mol.\n(b) Ratio C₂H₅OH:CO₂ = 1:2 → n(CO₂) = 0.100 mol. m(CO₂) = 0.100 × 44 = 4.40 g.\n(c) V(CO₂) = 0.100 × 24 = 2.40 dm³.",
            markScheme: [
              "n(C₂H₅OH) = 2.30/46 = 0.0500 mol [1]",
              "n(CO₂) = 2 × 0.0500 = 0.100 mol [1]",
              "m(CO₂) = 0.100 × 44 = 4.40 g [1]",
              "V(CO₂) = 0.100 × 24 = 2.40 dm³ [2]",
            ],
            commonError: "Using a 1:1 ratio for ethanol:CO₂ instead of 1:2.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "challenge",
            hints: [
              "n(ethanol) = m/M.",
              "Each ethanol gives 2 CO₂ (1:2 ratio).",
              "m = n × 44; V = n × 24.",
            ],
            solutions: [
              {
                label: "Combustion stoichiometry",
                steps: [
                  "n(C₂H₅OH) = 2.30/46 = 0.05000 mol",
                  "C₂H₅OH:CO₂ = 1:2 → n(CO₂) = 0.1000 mol",
                  "m(CO₂) = 0.1000 × 44 = 4.40 g",
                  "V(CO₂) = 0.1000 × 24 = 2.40 dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq1-10",
            question: "Lead(II) nitrate solution reacts with potassium iodide solution to form a yellow precipitate of lead(II) iodide.\nPb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃. (Mᵣ: Pb(NO₃)₂ = 331, PbI₂ = 461)\n(a) Write the net ionic equation for the formation of the precipitate. [2]\n(b) Calculate the mass of PbI₂ precipitate formed from 3.31 g of Pb(NO₃)₂ with excess KI. [3]",
            marks: 5,
            modelAnswer: "(a) Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s). (K⁺ and NO₃⁻ are spectator ions.)\n(b) n(Pb(NO₃)₂) = 3.31/331 = 0.0100 mol. Ratio 1:1 → n(PbI₂) = 0.0100 mol. m(PbI₂) = 0.0100 × 461 = 4.61 g.",
            markScheme: [
              "Correct species Pb²⁺ + 2I⁻ → PbI₂ [1]",
              "Correct state symbols (aq), (aq), (s) [1]",
              "n(Pb(NO₃)₂) = 3.31/331 = 0.0100 mol [1]",
              "n(PbI₂) = 0.0100 mol (1:1) [1]",
              "m(PbI₂) = 0.0100 × 461 = 4.61 g [1]",
            ],
            commonError: "Including spectator ions (K⁺, NO₃⁻) in the net ionic equation, or balancing I as I⁻ without the factor of 2.",
            guideRef: "Chemical Symbols, Formulae and Equations",
            difficulty: "challenge",
            hints: [
              "Remove the spectator ions K⁺ and NO₃⁻.",
              "n(Pb(NO₃)₂) = m/M.",
              "1:1 ratio with PbI₂; m = n × 461.",
            ],
            solutions: [
              {
                label: "Precipitation calculation",
                steps: [
                  "Net ionic: Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s)",
                  "n(Pb(NO₃)₂) = 3.31/331 = 0.01000 mol",
                  "n(PbI₂) = 0.01000 mol (1:1)",
                  "m(PbI₂) = 0.01000 × 461 = 4.61 g",
                ],
              },
            ],
          },
        ],
      },
      // ── QA PAPER 2 ── empirical/molecular formulae · combustion ──
      {
        id: "chem-stoichiometry-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Ten structured questions on empirical and molecular formulae, water of crystallisation and combustion analysis.",
        questions: [
          {
            id: "chem-stoichiometry-bq2-01",
            question: "A compound contains 52.2% C, 13.0% H and 34.8% O by mass. (Aᵣ: C=12, H=1, O=16)\n(a) Determine the empirical formula. [3]\n(b) The Mᵣ of the compound is 46. State its molecular formula. [1]",
            marks: 4,
            modelAnswer: "(a) C: 52.2/12 = 4.35; H: 13.0/1 = 13.0; O: 34.8/16 = 2.175. Divide by 2.175: C = 2.00, H = 5.98 ≈ 6, O = 1. Empirical formula C₂H₆O.\n(b) EFM(C₂H₆O) = 24 + 6 + 16 = 46 = Mᵣ, so n = 1. Molecular formula C₂H₆O (ethanol).",
            markScheme: [
              "Divide each % by Aᵣ: 4.35, 13.0, 2.175 [1]",
              "Divide by smallest (2.175): 2 : 6 : 1 [1]",
              "Empirical formula C₂H₆O [1]",
              "Molecular formula C₂H₆O (n = 46/46 = 1) [1]",
            ],
            commonError: "Failing to divide by the smallest mole value, or rounding 5.98 incorrectly.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: [
              "Divide each percentage by its Aᵣ.",
              "Divide all results by the smallest (2.175).",
              "Round to whole numbers: 2:6:1.",
            ],
            solutions: [
              {
                label: "Percentage composition method",
                steps: [
                  "C: 52.2/12 = 4.350; H: 13.0/1 = 13.00; O: 34.8/16 = 2.175",
                  "Divide by 2.175 → C: 2.00, H: 5.98 ≈ 6, O: 1.00",
                  "Empirical formula = C₂H₆O (EFM = 46)",
                  "n = Mᵣ/EFM = 46/46 = 1 → molecular formula C₂H₆O",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq2-02",
            question: "An oxide of iron contains 70.0% iron by mass. (Aᵣ: Fe=56, O=16)\n(a) Show that the empirical formula is Fe₂O₃. [3]\n(b) Name this compound. [1]",
            marks: 4,
            modelAnswer: "(a) %O = 100 − 70.0 = 30.0%. Fe: 70.0/56 = 1.25; O: 30.0/16 = 1.875. Divide by 1.25: Fe = 1, O = 1.5. Multiply by 2: Fe = 2, O = 3 → Fe₂O₃.\n(b) Iron(III) oxide.",
            markScheme: [
              "Fe: 70.0/56 = 1.25; O: 30.0/16 = 1.875 [1]",
              "Divide by smallest → 1 : 1.5, then ×2 → 2 : 3 [1]",
              "Empirical formula Fe₂O₃ [1]",
              "Iron(III) oxide [1]",
            ],
            commonError: "Stopping at the 1:1.5 ratio instead of multiplying by 2 to clear the half.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: [
              "The oxygen percentage is 100 − 70.0.",
              "Divide each % by its Aᵣ, then by the smallest.",
              "A .5 in the ratio means multiply all by 2.",
            ],
            solutions: [
              {
                label: "Clearing the half-ratio",
                steps: [
                  "%O = 100 − 70.0 = 30.0%",
                  "Fe: 70.0/56 = 1.250; O: 30.0/16 = 1.875",
                  "Divide by 1.250 → Fe 1.00, O 1.50",
                  "×2 → Fe 2, O 3 → Fe₂O₃ (iron(III) oxide)",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq2-03",
            question: "5.00 g of hydrated copper(II) sulfate, CuSO₄·xH₂O, is heated until all the water is driven off, leaving 3.20 g of anhydrous CuSO₄. (Mᵣ: CuSO₄ = 160, H₂O = 18)\n(a) Calculate the mass of water lost. [1]\n(b) Calculate the moles of CuSO₄ and the moles of H₂O. [2]\n(c) Determine the value of x. [2]",
            marks: 5,
            modelAnswer: "(a) Mass of water = 5.00 − 3.20 = 1.80 g.\n(b) n(CuSO₄) = 3.20/160 = 0.0200 mol; n(H₂O) = 1.80/18 = 0.100 mol.\n(c) Ratio H₂O:CuSO₄ = 0.100/0.0200 = 5 → x = 5. Formula CuSO₄·5H₂O.",
            markScheme: [
              "Mass H₂O = 5.00 − 3.20 = 1.80 g [1]",
              "n(CuSO₄) = 3.20/160 = 0.0200 mol [1]",
              "n(H₂O) = 1.80/18 = 0.100 mol [1]",
              "x = 0.100/0.0200 = 5 [1]",
              "Formula CuSO₄·5H₂O [1]",
            ],
            commonError: "Dividing the wrong way round (CuSO₄/H₂O) when finding x.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "challenge",
            hints: [
              "Water lost = mass before − mass after heating.",
              "Find moles of CuSO₄ and moles of H₂O separately.",
              "x = moles of water ÷ moles of CuSO₄.",
            ],
            solutions: [
              {
                label: "Water of crystallisation",
                steps: [
                  "m(H₂O) = 5.00 − 3.20 = 1.80 g",
                  "n(CuSO₄) = 3.20/160 = 0.02000 mol",
                  "n(H₂O) = 1.80/18 = 0.1000 mol",
                  "x = n(H₂O)/n(CuSO₄) = 0.1000/0.02000 = 5",
                  "Formula: CuSO₄·5H₂O",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq2-04",
            question: "A hydrocarbon has empirical formula CH₂.\n(a) Explain the difference between an empirical formula and a molecular formula. [2]\n(b) The relative molecular mass of the hydrocarbon is 70. Determine its molecular formula. [2]",
            marks: 4,
            modelAnswer: "(a) The empirical formula is the simplest whole-number ratio of atoms; the molecular formula is the actual number of atoms of each element in one molecule (a whole-number multiple of the empirical formula).\n(b) EFM(CH₂) = 14. n = 70/14 = 5. Molecular formula = C₅H₁₀.",
            markScheme: [
              "Empirical = simplest whole-number ratio [1]",
              "Molecular = actual number of atoms / multiple of empirical [1]",
              "n = 70/14 = 5 [1]",
              "Molecular formula C₅H₁₀ [1]",
            ],
            commonError: "Quoting EFM(CH₂) as 12 (forgetting the 2 H) which would give the wrong multiple.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: [
              "EFM(CH₂) = 12 + 2 = 14.",
              "n = Mᵣ / EFM.",
              "Multiply each subscript by n.",
            ],
          },
          {
            id: "chem-stoichiometry-bq2-05",
            question: "When 0.46 g of an organic compound Y (containing only C, H and O) is burned, 0.88 g of CO₂ and 0.54 g of H₂O are formed. (Aᵣ: C=12, H=1, O=16; Mᵣ: CO₂=44, H₂O=18)\n(a) Calculate the masses of C, H and O in 0.46 g of Y. [4]\n(b) Determine the empirical formula of Y. [2]\n(c) Y has Mᵣ = 46. State its molecular formula. [1]",
            marks: 7,
            modelAnswer: "(a) n(CO₂) = 0.88/44 = 0.0200 mol → m(C) = 0.0200 × 12 = 0.240 g. n(H₂O) = 0.54/18 = 0.0300 mol → n(H) = 0.0600 mol → m(H) = 0.0600 g. m(O) = 0.46 − 0.240 − 0.060 = 0.160 g.\n(b) n(C) = 0.0200; n(H) = 0.0600; n(O) = 0.160/16 = 0.0100. Divide by 0.0100: C = 2, H = 6, O = 1 → C₂H₆O.\n(c) EFM = 46 = Mᵣ → molecular formula C₂H₆O.",
            markScheme: [
              "m(C) = 0.0200 × 12 = 0.240 g [1]",
              "n(H) = 2 × 0.0300 = 0.0600 mol → m(H) = 0.0600 g [1]",
              "m(O) = 0.46 − 0.240 − 0.060 = 0.160 g [1]",
              "n(O) = 0.160/16 = 0.0100 mol [1]",
              "Ratio C:H:O = 2:6:1 [1]",
              "Empirical formula C₂H₆O [1]",
              "Molecular formula C₂H₆O [1]",
            ],
            commonError: "Forgetting the factor of 2 for hydrogen atoms in water, or not subtracting both C and H to find O.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "challenge",
            hints: [
              "moles C = moles CO₂; moles H = 2 × moles H₂O.",
              "m(O) = total mass − m(C) − m(H).",
              "Convert m(O) to moles, then take the C:H:O ratio.",
            ],
            solutions: [
              {
                label: "Combustion analysis",
                steps: [
                  "n(CO₂) = 0.88/44 = 0.02000 mol → m(C) = 0.02000 × 12 = 0.240 g",
                  "n(H₂O) = 0.54/18 = 0.03000 mol → n(H) = 0.06000 mol → m(H) = 0.0600 g",
                  "m(O) = 0.46 − 0.240 − 0.060 = 0.160 g → n(O) = 0.160/16 = 0.01000 mol",
                  "Ratio C:H:O = 0.0200:0.0600:0.0100 = 2:6:1",
                  "Empirical formula C₂H₆O (EFM = 46) → molecular formula C₂H₆O",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq2-06",
            question: "A 0.60 g sample of magnesium is burned in air. (Aᵣ: Mg=24, O=16)\n(a) The mass of magnesium oxide formed is 1.00 g. Calculate the mass of oxygen that combined. [1]\n(b) Calculate the moles of Mg and the moles of O. [2]\n(c) Show that the empirical formula of the oxide is MgO. [2]",
            marks: 5,
            modelAnswer: "(a) m(O) = 1.00 − 0.60 = 0.40 g.\n(b) n(Mg) = 0.60/24 = 0.025 mol; n(O) = 0.40/16 = 0.025 mol.\n(c) Ratio Mg:O = 0.025:0.025 = 1:1 → MgO.",
            markScheme: [
              "m(O) = 1.00 − 0.60 = 0.40 g [1]",
              "n(Mg) = 0.025 mol [1]",
              "n(O) = 0.025 mol [1]",
              "Ratio 1:1 [1]",
              "Empirical formula MgO [1]",
            ],
            commonError: "Using the molar mass of O₂ (32) instead of atomic O (16) when finding moles of oxygen atoms.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: [
              "Oxygen mass = oxide mass − metal mass.",
              "Use Aᵣ(O) = 16 for moles of O atoms.",
              "Compare moles of Mg and O.",
            ],
          },
          {
            id: "chem-stoichiometry-bq2-07",
            question: "A compound of sulfur and oxygen contains 40.0% sulfur by mass. (Aᵣ: S=32, O=16)\n(a) Determine its empirical formula. [3]\n(b) The Mᵣ of the compound is 80. State the molecular formula. [1]",
            marks: 4,
            modelAnswer: "(a) %O = 60.0%. S: 40.0/32 = 1.25; O: 60.0/16 = 3.75. Divide by 1.25: S = 1, O = 3 → SO₃.\n(b) EFM(SO₃) = 80 = Mᵣ → molecular formula SO₃.",
            markScheme: [
              "S: 40.0/32 = 1.25; O: 60.0/16 = 3.75 [1]",
              "Divide by 1.25 → 1 : 3 [1]",
              "Empirical formula SO₃ [1]",
              "Molecular formula SO₃ (n = 80/80 = 1) [1]",
            ],
            commonError: "Forgetting that %O = 100 − %S.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: [
              "%O = 100 − 40.0.",
              "Divide each % by Aᵣ then by smallest.",
              "EFM(SO₃) = 32 + 48 = 80.",
            ],
          },
          {
            id: "chem-stoichiometry-bq2-08",
            question: "0.111 g of calcium reacts completely with chlorine to form 0.308 g of a chloride. (Aᵣ: Ca=40, Cl=35.5)\n(a) Calculate the mass of chlorine that combined. [1]\n(b) Calculate the moles of Ca and Cl. [2]\n(c) Determine the empirical formula of the chloride. [2]",
            marks: 5,
            modelAnswer: "(a) m(Cl) = 0.308 − 0.111 = 0.197 g.\n(b) n(Ca) = 0.111/40 = 0.002775 mol; n(Cl) = 0.197/35.5 = 0.005549 mol.\n(c) Ratio Ca:Cl = 0.002775:0.005549 = 1:2 → CaCl₂.",
            markScheme: [
              "m(Cl) = 0.308 − 0.111 = 0.197 g [1]",
              "n(Ca) = 0.111/40 = 0.00278 mol [1]",
              "n(Cl) = 0.197/35.5 = 0.00555 mol [1]",
              "Ratio Ca:Cl = 1:2 [1]",
              "Empirical formula CaCl₂ [1]",
            ],
            commonError: "Using Aᵣ(Cl₂) = 71 instead of Aᵣ(Cl) = 35.5 for chlorine atoms.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "challenge",
            hints: [
              "Chlorine mass = product mass − calcium mass.",
              "Use Aᵣ(Cl) = 35.5 for chlorine atoms.",
              "Divide both mole values by the smaller.",
            ],
            solutions: [
              {
                label: "Combining-mass method",
                steps: [
                  "m(Cl) = 0.308 − 0.111 = 0.197 g",
                  "n(Ca) = 0.111/40 = 0.002775 mol",
                  "n(Cl) = 0.197/35.5 = 0.005549 mol",
                  "Ratio = 0.005549/0.002775 ≈ 2.00 → Ca:Cl = 1:2 → CaCl₂",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq2-09",
            question: "A fertiliser compound has empirical formula NH₄NO₃ written as N₂H₄O₃.\n(a) Calculate the percentage by mass of nitrogen in NH₄NO₃. (Mᵣ NH₄NO₃ = 80; Aᵣ N = 14) [3]\n(b) State why a high nitrogen percentage is desirable in a fertiliser. [1]",
            marks: 4,
            modelAnswer: "(a) Mass of N in formula = 2 × 14 = 28. % N = (28/80) × 100 = 35.0%.\n(b) Nitrogen promotes leaf/protein growth in plants, so a higher % means more of the active element per kilogram of fertiliser.",
            markScheme: [
              "Mass of N = 2 × 14 = 28 [1]",
              "% N = (28/80) × 100 [1]",
              "= 35.0% [1]",
              "Nitrogen needed for (protein/leaf) growth; more N per mass [1]",
            ],
            commonError: "Counting only one nitrogen atom (14) instead of two (28).",
            guideRef: "Relative Mass and the Mole",
            difficulty: "core",
            hints: [
              "There are 2 nitrogen atoms per formula unit.",
              "% element = (mass of element / Mᵣ) × 100.",
              "28/80 × 100.",
            ],
          },
          {
            id: "chem-stoichiometry-bq2-10",
            question: "A 2.00 g sample of a hydrated salt MgSO₄·xH₂O loses 1.02 g of water on heating, leaving 0.98 g of anhydrous MgSO₄. (Mᵣ: MgSO₄ = 120, H₂O = 18)\n(a) Calculate the moles of anhydrous MgSO₄. [1]\n(b) Calculate the moles of water. [1]\n(c) Determine x. [2]\n(d) Suggest one reason why the calculated value of x might be lower than the true value. [1]",
            marks: 5,
            modelAnswer: "(a) n(MgSO₄) = 0.98/120 = 0.008167 mol.\n(b) n(H₂O) = 1.02/18 = 0.05667 mol.\n(c) x = 0.05667/0.008167 = 6.94 ≈ 7. So x = 7 (MgSO₄·7H₂O).\n(d) The salt may not have been heated long enough / to constant mass, so some water remained, lowering the apparent moles of water (and x).",
            markScheme: [
              "n(MgSO₄) = 0.98/120 = 0.00817 mol [1]",
              "n(H₂O) = 1.02/18 = 0.0567 mol [1]",
              "x = 0.0567/0.00817 ≈ 7 [2]",
              "Not heated to constant mass / water remains [1]",
            ],
            commonError: "Rounding x to 6 rather than recognising experimental values round to the nearest whole number (7).",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "challenge",
            hints: [
              "n(MgSO₄) = mass anhydrous / 120.",
              "n(H₂O) = mass water / 18.",
              "x = moles water / moles MgSO₄, rounded to a whole number.",
            ],
            solutions: [
              {
                label: "Hydrated salt analysis",
                steps: [
                  "n(MgSO₄) = 0.98/120 = 0.008167 mol",
                  "n(H₂O) = 1.02/18 = 0.05667 mol",
                  "x = 0.05667/0.008167 = 6.94 ≈ 7",
                  "Formula MgSO₄·7H₂O; low values arise if heating is incomplete",
                ],
              },
            ],
          },
        ],
      },
      // ── QA PAPER 3 ── gas volumes · limiting reactant · yield ──
      {
        id: "chem-stoichiometry-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Ten structured questions on molar gas volumes, the limiting reactant, percentage yield and purity.",
        questions: [
          {
            id: "chem-stoichiometry-bq3-01",
            question: "(a) State the volume occupied by one mole of any gas at r.t.p. [1]\n(b) Calculate the volume occupied by 3.2 g of oxygen gas, O₂, at r.t.p. (Mᵣ O₂ = 32) [2]",
            marks: 3,
            modelAnswer: "(a) 24 dm³ (at 25 °C and 1 atm).\n(b) n(O₂) = 3.2/32 = 0.10 mol. V = 0.10 × 24 = 2.4 dm³.",
            markScheme: [
              "24 dm³ [1]",
              "n(O₂) = 3.2/32 = 0.10 mol [1]",
              "V = 0.10 × 24 = 2.4 dm³ [1]",
            ],
            commonError: "Using 22.4 dm³ (STP) instead of 24 dm³ (r.t.p.) for IGCSE.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bq3-02",
            question: "Marble chips (calcium carbonate) react with hydrochloric acid:\nCaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. (Mᵣ CaCO₃ = 100)\n(a) Calculate the moles of CaCO₃ in 2.50 g. [1]\n(b) Calculate the volume of CO₂ produced at r.t.p. when this fully reacts. [2]",
            marks: 3,
            modelAnswer: "(a) n(CaCO₃) = 2.50/100 = 0.0250 mol.\n(b) Ratio 1:1 → n(CO₂) = 0.0250 mol. V = 0.0250 × 24 = 0.600 dm³.",
            markScheme: [
              "n(CaCO₃) = 2.50/100 = 0.0250 mol [1]",
              "n(CO₂) = 0.0250 mol (1:1) [1]",
              "V(CO₂) = 0.0250 × 24 = 0.600 dm³ [1]",
            ],
            commonError: "Forgetting V = n × 24 and instead reporting moles as the volume.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: [
              "n(CaCO₃) = m/M.",
              "1:1 ratio gives n(CO₂).",
              "V = n × 24 dm³.",
            ],
          },
          {
            id: "chem-stoichiometry-bq3-03",
            question: "Hydrogen peroxide decomposes: 2H₂O₂ → 2H₂O + O₂. (Mᵣ H₂O₂ = 34)\n(a) Calculate the moles in 6.8 g of H₂O₂. [1]\n(b) Calculate the volume of oxygen produced at r.t.p. [2]",
            marks: 3,
            modelAnswer: "(a) n(H₂O₂) = 6.8/34 = 0.20 mol.\n(b) Ratio H₂O₂:O₂ = 2:1 → n(O₂) = 0.10 mol. V = 0.10 × 24 = 2.4 dm³.",
            markScheme: [
              "n(H₂O₂) = 6.8/34 = 0.20 mol [1]",
              "n(O₂) = 0.10 mol (2:1) [1]",
              "V(O₂) = 0.10 × 24 = 2.4 dm³ [1]",
            ],
            commonError: "Using a 1:1 ratio for H₂O₂:O₂ instead of 2:1, giving double the volume.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: [
              "n(H₂O₂) = m/M.",
              "2 mol H₂O₂ give 1 mol O₂.",
              "V = n(O₂) × 24.",
            ],
          },
          {
            id: "chem-stoichiometry-bq3-04",
            question: "20 cm³ of ethene reacts with hydrogen: C₂H₄ + H₂ → C₂H₆, all gases measured at the same conditions.\n(a) State the law that lets you work with gas volumes directly. [1]\n(b) What volume of hydrogen reacts with the 20 cm³ of ethene? [1]\n(c) What volume of ethane is produced? [1]",
            marks: 3,
            modelAnswer: "(a) Avogadro's law — equal volumes of gases at the same temperature and pressure contain equal numbers of molecules (moles).\n(b) Ratio C₂H₄:H₂ = 1:1 → 20 cm³ of H₂.\n(c) Ratio C₂H₄:C₂H₆ = 1:1 → 20 cm³ of C₂H₆.",
            markScheme: [
              "Avogadro's law / equal volumes contain equal moles [1]",
              "20 cm³ of H₂ [1]",
              "20 cm³ of C₂H₆ [1]",
            ],
            commonError: "Converting to moles unnecessarily — for gas-only ratios you can use volumes directly.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: [
              "For gases at the same conditions, volume ratio = mole ratio.",
              "All coefficients here are 1.",
            ],
          },
          {
            id: "chem-stoichiometry-bq3-05",
            question: "3.00 g of magnesium is added to 50.0 cm³ of 2.00 mol/dm³ hydrochloric acid.\nMg + 2HCl → MgCl₂ + H₂. (Aᵣ: Mg=24)\n(a) Calculate the moles of Mg and the moles of HCl. [2]\n(b) Determine which reactant is limiting. [2]\n(c) Calculate the volume of H₂ produced at r.t.p. [2]",
            marks: 6,
            modelAnswer: "(a) n(Mg) = 3.00/24 = 0.125 mol; n(HCl) = 2.00 × (50.0/1000) = 0.100 mol.\n(b) Divide by coefficient: Mg = 0.125/1 = 0.125; HCl = 0.100/2 = 0.0500. HCl gives the smaller value → HCl is the limiting reactant.\n(c) n(H₂) = n(HCl)/2 = 0.100/2 = 0.0500 mol. V = 0.0500 × 24 = 1.20 dm³.",
            markScheme: [
              "n(Mg) = 3.00/24 = 0.125 mol [1]",
              "n(HCl) = 2.00 × 0.0500 = 0.100 mol [1]",
              "Divide by coefficient: HCl = 0.0500 < Mg = 0.125 [1]",
              "HCl is limiting [1]",
              "n(H₂) = 0.0500 mol [1]",
              "V(H₂) = 0.0500 × 24 = 1.20 dm³ [1]",
            ],
            commonError: "Forgetting to divide HCl moles by its coefficient (2) when identifying the limiting reactant.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "challenge",
            hints: [
              "n(Mg) = m/M; n(HCl) = c × V (dm³).",
              "Divide each by its coefficient (Mg:1, HCl:2).",
              "Use the limiting reactant to find n(H₂), then V = n × 24.",
            ],
            solutions: [
              {
                label: "Limiting reactant then gas volume",
                steps: [
                  "n(Mg) = 3.00/24 = 0.1250 mol",
                  "n(HCl) = 2.00 × 0.0500 = 0.1000 mol",
                  "Divide by coefficient: Mg 0.125, HCl 0.0500 → HCl limiting",
                  "n(H₂) = n(HCl)/2 = 0.0500 mol",
                  "V(H₂) = 0.0500 × 24 = 1.20 dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq3-06",
            question: "In an experiment, 7.45 g of potassium chloride is the theoretical yield of a reaction, but only 5.96 g is obtained. (Mᵣ KCl = 74.5)\n(a) Calculate the percentage yield. [2]\n(b) Calculate the actual yield expressed in moles. [2]",
            marks: 4,
            modelAnswer: "(a) % yield = (5.96/7.45) × 100 = 80.0%.\n(b) n(KCl) actual = 5.96/74.5 = 0.0800 mol.",
            markScheme: [
              "% yield = (5.96/7.45) × 100 [1]",
              "= 80.0% [1]",
              "n = 5.96/74.5 [1]",
              "= 0.0800 mol [1]",
            ],
            commonError: "Inverting the % yield fraction (theoretical/actual), which would give > 100%.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bq3-07",
            question: "Calcium carbonate decomposes on heating: CaCO₃ → CaO + CO₂. (Mᵣ: CaCO₃ = 100, CaO = 56)\n(a) Calculate the theoretical mass of CaO from 25.0 g of CaCO₃. [3]\n(b) Only 12.6 g of CaO is obtained. Calculate the percentage yield. [2]",
            marks: 5,
            modelAnswer: "(a) n(CaCO₃) = 25.0/100 = 0.250 mol. Ratio 1:1 → n(CaO) = 0.250 mol. m(CaO) = 0.250 × 56 = 14.0 g.\n(b) % yield = (12.6/14.0) × 100 = 90.0%.",
            markScheme: [
              "n(CaCO₃) = 25.0/100 = 0.250 mol [1]",
              "n(CaO) = 0.250 mol (1:1) [1]",
              "Theoretical m(CaO) = 0.250 × 56 = 14.0 g [1]",
              "% yield = (12.6/14.0) × 100 [1]",
              "= 90.0% [1]",
            ],
            commonError: "Calculating % yield using the mass of CaCO₃ rather than the theoretical mass of CaO.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "n(CaCO₃) = m/M.",
              "1:1 ratio gives n(CaO); theoretical m = n × 56.",
              "% yield = actual/theoretical × 100.",
            ],
            solutions: [
              {
                label: "Theoretical then % yield",
                steps: [
                  "n(CaCO₃) = 25.0/100 = 0.2500 mol",
                  "n(CaO) = 0.2500 mol → theoretical m = 0.2500 × 56 = 14.0 g",
                  "% yield = (12.6/14.0) × 100 = 90.0%",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq3-08",
            question: "An impure sample of zinc, mass 3.40 g, reacts with excess sulfuric acid:\nZn + H₂SO₄ → ZnSO₄ + H₂. The hydrogen collected is 1.20 dm³ at r.t.p. (Aᵣ: Zn=65)\n(a) Calculate the moles of H₂ produced. [1]\n(b) Calculate the mass of zinc that reacted. [2]\n(c) Calculate the percentage purity of the zinc sample. [2]",
            marks: 5,
            modelAnswer: "(a) n(H₂) = 1.20/24 = 0.0500 mol.\n(b) Ratio Zn:H₂ = 1:1 → n(Zn) = 0.0500 mol. m(Zn) = 0.0500 × 65 = 3.25 g.\n(c) % purity = (3.25/3.40) × 100 = 95.6%.",
            markScheme: [
              "n(H₂) = 1.20/24 = 0.0500 mol [1]",
              "n(Zn) = 0.0500 mol (1:1) [1]",
              "m(Zn) = 0.0500 × 65 = 3.25 g [1]",
              "% purity = (3.25/3.40) × 100 [1]",
              "= 95.6% [1]",
            ],
            commonError: "Dividing the gas volume by 24 000 when it is already in dm³, or by 24 when in cm³.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "challenge",
            hints: [
              "n(H₂) = V/24 (V in dm³).",
              "Zn:H₂ = 1:1 → n(Zn); m = n × 65.",
              "% purity = mass Zn reacted / sample mass × 100.",
            ],
            solutions: [
              {
                label: "Gas volume to % purity",
                steps: [
                  "n(H₂) = 1.20/24 = 0.05000 mol",
                  "Zn:H₂ = 1:1 → n(Zn) = 0.05000 mol → m(Zn) = 0.05000 × 65 = 3.25 g",
                  "% purity = (3.25/3.40) × 100 = 95.6%",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq3-09",
            question: "4.00 g of copper(II) oxide is reacted with 0.500 g of carbon: 2CuO + C → 2Cu + CO₂.\n(Mᵣ: CuO = 80; Aᵣ: C = 12, Cu = 64)\n(a) Calculate the moles of CuO and carbon. [2]\n(b) Determine the limiting reactant. [2]\n(c) Calculate the maximum mass of copper produced. [2]",
            marks: 6,
            modelAnswer: "(a) n(CuO) = 4.00/80 = 0.0500 mol; n(C) = 0.500/12 = 0.04167 mol.\n(b) Divide by coefficient: CuO = 0.0500/2 = 0.0250; C = 0.04167/1 = 0.04167. CuO gives the smaller value → CuO is limiting.\n(c) Ratio CuO:Cu = 2:2 = 1:1 → n(Cu) = 0.0500 mol. m(Cu) = 0.0500 × 64 = 3.20 g.",
            markScheme: [
              "n(CuO) = 4.00/80 = 0.0500 mol [1]",
              "n(C) = 0.500/12 = 0.0417 mol [1]",
              "Divide by coefficient: CuO 0.0250 < C 0.0417 [1]",
              "CuO is limiting [1]",
              "n(Cu) = 0.0500 mol (1:1 with CuO) [1]",
              "m(Cu) = 0.0500 × 64 = 3.20 g [1]",
            ],
            commonError: "Comparing raw moles (0.0500 vs 0.0417) and wrongly concluding C is limiting, instead of dividing CuO by its coefficient 2.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "challenge",
            hints: [
              "Find moles of each reactant.",
              "Divide each by its coefficient (CuO:2, C:1).",
              "Use the limiting reactant; CuO:Cu = 1:1.",
            ],
            solutions: [
              {
                label: "Limiting reactant via coefficients",
                steps: [
                  "n(CuO) = 4.00/80 = 0.05000 mol; n(C) = 0.500/12 = 0.04167 mol",
                  "Divide by coefficient: CuO 0.05000/2 = 0.02500; C 0.04167/1 = 0.04167",
                  "CuO smaller → CuO limiting",
                  "CuO:Cu = 2:2 = 1:1 → n(Cu) = 0.05000 mol",
                  "m(Cu) = 0.05000 × 64 = 3.20 g",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq3-10",
            question: "Nitrogen and hydrogen react: N₂ + 3H₂ → 2NH₃. 100 cm³ of N₂ is mixed with 240 cm³ of H₂ and the reaction goes to completion (all volumes at the same conditions).\n(a) Determine which gas is in excess and by how much. [3]\n(b) Calculate the volume of ammonia formed. [2]",
            marks: 5,
            modelAnswer: "(a) Ratio N₂:H₂ = 1:3, so 100 cm³ N₂ needs 300 cm³ H₂. Only 240 cm³ H₂ is available, so H₂ is limiting and N₂ is in excess. H₂ (240 cm³) reacts with 240/3 = 80 cm³ of N₂, leaving 100 − 80 = 20 cm³ N₂ in excess.\n(b) From 240 cm³ H₂: ratio H₂:NH₃ = 3:2 → NH₃ = (2/3) × 240 = 160 cm³.",
            markScheme: [
              "100 cm³ N₂ would need 300 cm³ H₂ (1:3) [1]",
              "H₂ is limiting; N₂ in excess [1]",
              "N₂ excess = 100 − 80 = 20 cm³ [1]",
              "H₂:NH₃ = 3:2 → NH₃ = (2/3) × 240 [1]",
              "= 160 cm³ [1]",
            ],
            commonError: "Assuming the gas present in greater volume (H₂) is automatically in excess without applying the 1:3 ratio.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "challenge",
            hints: [
              "Use volume ratios directly (Avogadro's law).",
              "How much H₂ would 100 cm³ of N₂ need (×3)?",
              "Work the product volume from the limiting gas (H₂:NH₃ = 3:2).",
            ],
            solutions: [
              {
                label: "Gas-volume limiting reactant",
                steps: [
                  "N₂:H₂ = 1:3 → 100 cm³ N₂ needs 300 cm³ H₂, but only 240 cm³ available",
                  "So H₂ is limiting; N₂ in excess",
                  "240 cm³ H₂ reacts with 240/3 = 80 cm³ N₂ → 20 cm³ N₂ left over",
                  "H₂:NH₃ = 3:2 → NH₃ = (2/3) × 240 = 160 cm³",
                ],
              },
            ],
          },
        ],
      },
      // ── QA PAPER 4 ── concentration · titration · back-titration ──
      {
        id: "chem-stoichiometry-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Ten structured questions on concentration, standard solutions, titration and back-titration calculations.",
        questions: [
          {
            id: "chem-stoichiometry-bq4-01",
            question: "(a) Calculate the concentration in mol/dm³ of a solution made by dissolving 4.00 g of NaOH in water and making up to 250 cm³. (Mᵣ NaOH = 40) [3]\n(b) Express this concentration in g/dm³. [1]",
            marks: 4,
            modelAnswer: "(a) n(NaOH) = 4.00/40 = 0.100 mol. V = 250/1000 = 0.250 dm³. c = 0.100/0.250 = 0.400 mol/dm³.\n(b) c(g/dm³) = 0.400 × 40 = 16.0 g/dm³.",
            markScheme: [
              "n(NaOH) = 4.00/40 = 0.100 mol [1]",
              "V = 0.250 dm³ [1]",
              "c = 0.100/0.250 = 0.400 mol/dm³ [1]",
              "c = 0.400 × 40 = 16.0 g/dm³ [1]",
            ],
            commonError: "Not converting 250 cm³ to 0.250 dm³ before dividing.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "n = m/M.",
              "Convert 250 cm³ to dm³ (÷1000).",
              "c = n/V; then × M for g/dm³.",
            ],
            solutions: [
              {
                label: "Standard solution",
                steps: [
                  "n(NaOH) = 4.00/40 = 0.1000 mol",
                  "V = 250/1000 = 0.2500 dm³",
                  "c = 0.1000/0.2500 = 0.400 mol/dm³",
                  "c(g/dm³) = 0.400 × 40 = 16.0 g/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-02",
            question: "25.0 cm³ of sodium hydroxide solution is neutralised by 20.0 cm³ of 0.150 mol/dm³ hydrochloric acid.\nNaOH + HCl → NaCl + H₂O\n(a) Calculate the moles of HCl used. [1]\n(b) Calculate the moles of NaOH. [1]\n(c) Calculate the concentration of the NaOH in mol/dm³. [2]",
            marks: 4,
            modelAnswer: "(a) n(HCl) = 0.150 × (20.0/1000) = 0.00300 mol.\n(b) Ratio 1:1 → n(NaOH) = 0.00300 mol.\n(c) c(NaOH) = 0.00300/(25.0/1000) = 0.00300/0.0250 = 0.120 mol/dm³.",
            markScheme: [
              "n(HCl) = 0.150 × 0.0200 = 0.00300 mol [1]",
              "n(NaOH) = 0.00300 mol (1:1) [1]",
              "c(NaOH) = 0.00300/0.0250 [1]",
              "= 0.120 mol/dm³ [1]",
            ],
            commonError: "Dividing by 20.0 cm³ instead of the NaOH volume 25.0 cm³ when finding c(NaOH).",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "n(HCl) = c × V (dm³).",
              "1:1 ratio → n(NaOH) equal.",
              "c(NaOH) = n/V using the NaOH volume.",
            ],
            solutions: [
              {
                label: "Acid–alkali titration",
                steps: [
                  "n(HCl) = 0.150 × 0.02000 = 0.003000 mol",
                  "n(NaOH) = 0.003000 mol (1:1)",
                  "c(NaOH) = 0.003000/0.02500 = 0.120 mol/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-03",
            question: "In a titration, 25.0 cm³ of 0.100 mol/dm³ NaOH is neutralised by 23.50 cm³ of sulfuric acid.\nH₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O\n(a) Calculate the moles of NaOH. [1]\n(b) Calculate the moles of H₂SO₄. [2]\n(c) Calculate the concentration of the sulfuric acid. [2]",
            marks: 5,
            modelAnswer: "(a) n(NaOH) = 0.100 × (25.0/1000) = 0.00250 mol.\n(b) Ratio H₂SO₄:NaOH = 1:2 → n(H₂SO₄) = 0.00250/2 = 0.00125 mol.\n(c) c(H₂SO₄) = 0.00125/(23.50/1000) = 0.00125/0.02350 = 0.0532 mol/dm³.",
            markScheme: [
              "n(NaOH) = 0.100 × 0.0250 = 0.00250 mol [1]",
              "n(H₂SO₄) = 0.00250/2 = 0.00125 mol [2]",
              "c(H₂SO₄) = 0.00125/0.02350 [1]",
              "= 0.0532 mol/dm³ [1]",
            ],
            commonError: "Using a 1:1 ratio (giving 0.106 mol/dm³) instead of the correct 1:2.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "challenge",
            hints: [
              "n(NaOH) = c × V (dm³).",
              "H₂SO₄:NaOH = 1:2 → halve the moles.",
              "c = n(H₂SO₄)/V(H₂SO₄ in dm³).",
            ],
            solutions: [
              {
                label: "Diprotic acid titration",
                steps: [
                  "n(NaOH) = 0.100 × 0.02500 = 0.002500 mol",
                  "H₂SO₄:NaOH = 1:2 → n(H₂SO₄) = 0.002500/2 = 0.001250 mol",
                  "c(H₂SO₄) = 0.001250/0.02350 = 0.05319 ≈ 0.0532 mol/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-04",
            question: "Describe how you would prepare 250 cm³ of a 0.100 mol/dm³ standard solution of anhydrous sodium carbonate, Na₂CO₃, starting from the solid. (Mᵣ Na₂CO₃ = 106)\nInclude the mass required (with calculation) and the key apparatus steps. [5]",
            marks: 5,
            modelAnswer: "Mass: n = c × V = 0.100 × 0.250 = 0.0250 mol; m = 0.0250 × 106 = 2.65 g. Method: weigh 2.65 g of Na₂CO₃ accurately; dissolve fully in a small volume of distilled water in a beaker; transfer the solution and washings into a 250 cm³ volumetric flask; add distilled water until the bottom of the meniscus sits on the 250 cm³ graduation mark; stopper and invert to mix thoroughly.",
            markScheme: [
              "n = 0.100 × 0.250 = 0.0250 mol [1]",
              "m = 0.0250 × 106 = 2.65 g [1]",
              "Dissolve in distilled water; transfer to 250 cm³ volumetric flask with washings [1]",
              "Make up to the mark (meniscus on graduation line) [1]",
              "Stopper and invert to mix [1]",
            ],
            commonError: "Adding water directly to the mark in a beaker rather than using a volumetric flask, or not rinsing the beaker into the flask (losing solute).",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "Mass first: n = cV then m = nM.",
              "Use a volumetric flask, not a beaker, for accurate volume.",
              "Rinse the beaker into the flask and make up to the line.",
            ],
            solutions: [
              {
                label: "Mass calculation",
                steps: [
                  "n = c × V = 0.100 × 0.250 = 0.02500 mol",
                  "m = n × M = 0.02500 × 106 = 2.65 g",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-05",
            question: "A student titrates 25.0 cm³ of a vinegar (containing ethanoic acid, CH₃COOH) against 0.500 mol/dm³ NaOH. The mean titre is 21.00 cm³.\nCH₃COOH + NaOH → CH₃COONa + H₂O. (Mᵣ CH₃COOH = 60)\n(a) Calculate the concentration of ethanoic acid in mol/dm³. [3]\n(b) Calculate the concentration in g/dm³. [2]",
            marks: 5,
            modelAnswer: "(a) n(NaOH) = 0.500 × (21.00/1000) = 0.01050 mol. Ratio 1:1 → n(CH₃COOH) = 0.01050 mol. c = 0.01050/(25.0/1000) = 0.01050/0.0250 = 0.420 mol/dm³.\n(b) c(g/dm³) = 0.420 × 60 = 25.2 g/dm³.",
            markScheme: [
              "n(NaOH) = 0.500 × 0.02100 = 0.01050 mol [1]",
              "n(CH₃COOH) = 0.01050 mol (1:1) [1]",
              "c = 0.01050/0.0250 = 0.420 mol/dm³ [1]",
              "c(g/dm³) = 0.420 × 60 = 25.2 g/dm³ [2]",
            ],
            commonError: "Using the NaOH volume (21.00 cm³) instead of the acid volume (25.0 cm³) in the final concentration step.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "n(NaOH) = c × V (dm³).",
              "1:1 ratio gives n(acid).",
              "c = n/V (acid volume); × M for g/dm³.",
            ],
            solutions: [
              {
                label: "Weak-acid titration",
                steps: [
                  "n(NaOH) = 0.500 × 0.02100 = 0.01050 mol",
                  "n(CH₃COOH) = 0.01050 mol (1:1)",
                  "c = 0.01050/0.02500 = 0.420 mol/dm³",
                  "c(g/dm³) = 0.420 × 60 = 25.2 g/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-06",
            question: "A 1.00 dm³ stock solution of 2.00 mol/dm³ HCl is diluted to make a more dilute working solution.\n(a) Calculate the moles of HCl in 50.0 cm³ of the stock solution. [1]\n(b) This 50.0 cm³ is diluted with water to a total volume of 500 cm³. Calculate the new concentration. [3]",
            marks: 4,
            modelAnswer: "(a) n(HCl) = 2.00 × (50.0/1000) = 0.100 mol.\n(b) Moles unchanged on dilution = 0.100 mol. New V = 500/1000 = 0.500 dm³. c = 0.100/0.500 = 0.200 mol/dm³.",
            markScheme: [
              "n(HCl) = 2.00 × 0.0500 = 0.100 mol [1]",
              "Moles conserved on dilution = 0.100 mol [1]",
              "New V = 0.500 dm³ [1]",
              "c = 0.100/0.500 = 0.200 mol/dm³ [1]",
            ],
            commonError: "Adding the dilution water volume to the original instead of using the final total volume (500 cm³).",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "n = c × V for the portion taken.",
              "Dilution does not change the moles of solute.",
              "c = n / new total volume in dm³.",
            ],
            solutions: [
              {
                label: "Dilution by conservation of moles",
                steps: [
                  "n(HCl) in 50.0 cm³ = 2.00 × 0.05000 = 0.1000 mol",
                  "Dilution conserves moles: still 0.1000 mol",
                  "c = 0.1000/0.5000 = 0.200 mol/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-07",
            question: "25.0 cm³ of 0.0500 mol/dm³ sodium carbonate is titrated with hydrochloric acid.\nNa₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂. The mean titre is 25.00 cm³.\n(a) Calculate the moles of Na₂CO₃. [1]\n(b) Calculate the moles of HCl. [2]\n(c) Calculate the concentration of the HCl. [2]",
            marks: 5,
            modelAnswer: "(a) n(Na₂CO₃) = 0.0500 × (25.0/1000) = 0.00125 mol.\n(b) Ratio 1:2 → n(HCl) = 2 × 0.00125 = 0.00250 mol.\n(c) c(HCl) = 0.00250/(25.00/1000) = 0.00250/0.0250 = 0.100 mol/dm³.",
            markScheme: [
              "n(Na₂CO₃) = 0.0500 × 0.0250 = 0.00125 mol [1]",
              "n(HCl) = 2 × 0.00125 = 0.00250 mol [2]",
              "c(HCl) = 0.00250/0.0250 [1]",
              "= 0.100 mol/dm³ [1]",
            ],
            commonError: "Using a 1:1 ratio for Na₂CO₃:HCl instead of 1:2.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "n(Na₂CO₃) = c × V.",
              "Na₂CO₃:HCl = 1:2 → double the moles.",
              "c(HCl) = n(HCl)/V(HCl in dm³).",
            ],
            solutions: [
              {
                label: "Carbonate–acid titration",
                steps: [
                  "n(Na₂CO₃) = 0.0500 × 0.02500 = 0.001250 mol",
                  "Na₂CO₃:HCl = 1:2 → n(HCl) = 0.002500 mol",
                  "c(HCl) = 0.002500/0.02500 = 0.100 mol/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-08",
            question: "A 0.500 g sample of impure sodium hydroxide is dissolved in water and titrated with 0.200 mol/dm³ HCl. The titre is 50.0 cm³.\nNaOH + HCl → NaCl + H₂O. (Mᵣ NaOH = 40)\n(a) Calculate the moles of HCl used. [1]\n(b) Calculate the mass of pure NaOH in the sample. [3]\n(c) Calculate the percentage purity. [1]",
            marks: 5,
            modelAnswer: "(a) n(HCl) = 0.200 × (50.0/1000) = 0.0100 mol.\n(b) Ratio 1:1 → n(NaOH) = 0.0100 mol. m(NaOH) = 0.0100 × 40 = 0.400 g.\n(c) % purity = (0.400/0.500) × 100 = 80.0%.",
            markScheme: [
              "n(HCl) = 0.200 × 0.0500 = 0.0100 mol [1]",
              "n(NaOH) = 0.0100 mol (1:1) [1]",
              "m(NaOH) = 0.0100 × 40 = 0.400 g [2]",
              "% purity = (0.400/0.500) × 100 = 80.0% [1]",
            ],
            commonError: "Reporting the moles or mass of HCl as the answer for NaOH purity instead of converting to NaOH.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "challenge",
            hints: [
              "n(HCl) = c × V (dm³).",
              "1:1 ratio → n(NaOH); m = n × 40.",
              "% purity = mass pure NaOH / sample mass × 100.",
            ],
            solutions: [
              {
                label: "Purity by titration",
                steps: [
                  "n(HCl) = 0.200 × 0.05000 = 0.01000 mol",
                  "n(NaOH) = 0.01000 mol (1:1) → m = 0.01000 × 40 = 0.400 g",
                  "% purity = (0.400/0.500) × 100 = 80.0%",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-09",
            question: "A back-titration determines the purity of impure calcium oxide.\n- 1.40 g of impure CaO is dissolved in 100 cm³ of 1.00 mol/dm³ HCl (excess).\n- The excess HCl needs 60.0 cm³ of 1.00 mol/dm³ NaOH to neutralise it.\nCaO + 2HCl → CaCl₂ + H₂O ; HCl + NaOH → NaCl + H₂O. (Mᵣ CaO = 56)\n(a) Calculate the total moles of HCl added. [1]\n(b) Calculate the moles of excess (unreacted) HCl. [1]\n(c) Calculate the moles of HCl that reacted with CaO. [1]\n(d) Calculate the mass of pure CaO and the percentage purity. [3]",
            marks: 6,
            modelAnswer: "(a) n(HCl) total = 1.00 × (100/1000) = 0.100 mol.\n(b) n(NaOH) = 1.00 × (60.0/1000) = 0.0600 mol; 1:1 → n(HCl) excess = 0.0600 mol.\n(c) n(HCl) reacted with CaO = 0.100 − 0.0600 = 0.0400 mol.\n(d) Ratio CaO:HCl = 1:2 → n(CaO) = 0.0400/2 = 0.0200 mol. m(CaO) = 0.0200 × 56 = 1.12 g. % purity = (1.12/1.40) × 100 = 80.0%.",
            markScheme: [
              "n(HCl) total = 1.00 × 0.100 = 0.100 mol [1]",
              "n(HCl) excess = n(NaOH) = 0.0600 mol [1]",
              "n(HCl) reacted with CaO = 0.100 − 0.0600 = 0.0400 mol [1]",
              "n(CaO) = 0.0400/2 = 0.0200 mol [1]",
              "m(CaO) = 0.0200 × 56 = 1.12 g [1]",
              "% purity = (1.12/1.40) × 100 = 80.0% [1]",
            ],
            commonError: "Using a 1:1 ratio for CaO:HCl instead of 1:2, or not subtracting the excess HCl before finding the CaO that reacted.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "challenge",
            hints: [
              "Total HCl = c × V.",
              "Excess HCl = moles of NaOH (1:1).",
              "HCl reacted with CaO = total − excess; then CaO:HCl = 1:2.",
            ],
            solutions: [
              {
                label: "Back-titration method",
                steps: [
                  "n(HCl) total = 1.00 × 0.1000 = 0.1000 mol",
                  "n(NaOH) = 1.00 × 0.06000 = 0.06000 mol = n(HCl) excess",
                  "n(HCl) reacted with CaO = 0.1000 − 0.06000 = 0.04000 mol",
                  "CaO:HCl = 1:2 → n(CaO) = 0.02000 mol → m(CaO) = 0.02000 × 56 = 1.12 g",
                  "% purity = (1.12/1.40) × 100 = 80.0%",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-10",
            question: "(a) Explain why, in a titration, a rough (trial) titre is carried out before the accurate runs. [2]\n(b) A student's titres are 26.50, 25.10, 25.15 and 25.05 cm³. State which results are concordant and calculate the mean titre to be used. [3]",
            marks: 5,
            modelAnswer: "(a) The rough titre quickly finds the approximate end-point volume and shows how the indicator colour changes near the end-point, so the accurate runs can be added dropwise near that volume for precision.\n(b) Concordant titres agree within 0.10 cm³: 25.10, 25.15 and 25.05 are concordant (the 26.50 cm³ rough value is discarded). Mean = (25.10 + 25.15 + 25.05)/3 = 75.30/3 = 25.10 cm³.",
            markScheme: [
              "Rough titre finds approximate end-point volume [1]",
              "Allows dropwise addition near end-point in accurate runs [1]",
              "Concordant results: 25.10, 25.15, 25.05 (within 0.10 cm³) [1]",
              "Discard 26.50 cm³ [1]",
              "Mean = 75.30/3 = 25.10 cm³ [1]",
            ],
            commonError: "Including the rough/anomalous 26.50 cm³ value in the mean, which inflates the result.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "The rough run locates the end-point quickly.",
              "Concordant means within 0.10 cm³ of each other.",
              "Average only the concordant titres.",
            ],
          },
        ],
      },
    ],
  },
};
