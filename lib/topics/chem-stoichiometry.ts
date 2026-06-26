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
  // QUESTION BANK
  // ─────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      {
        id: "chem-stoichiometry-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Ten MCQs covering symbols, balancing equations, Mᵣ, moles from mass, and empirical formula.",
        questions: [
          {
            id: "chem-stoichiometry-bm1-01",
            question: "Which of the following correctly balances the equation for the combustion of propane?\nC₃H₈ + ? O₂ → ? CO₂ + ? H₂O",
            options: [
              "C₃H₈ + 4O₂ → 3CO₂ + 4H₂O",
              "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
              "C₃H₈ + 5O₂ → 4CO₂ + 3H₂O",
              "C₃H₈ + 6O₂ → 3CO₂ + 5H₂O",
            ],
            answerIndex: 1,
            explanation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Check: C: 3=3 ✓; H: 8=8 ✓; O: 10 = 6+4=10 ✓. Option B is correct. Option A gives only 8 O on right (6+4=10 but left has 8 O — wrong). Option C has only 3 H₂O (6 H) but C₃H₈ has 8 H.",
            guideRef: "Chemical Symbols, Formulae and Equations",
            difficulty: "core",
            hints: ["Balance C first (3 CO₂), then H (4 H₂O), then count O on the right.", "Right side O: 3×2 + 4×1 = 10. Left needs 10/2 = 5 O₂."],
          },
          {
            id: "chem-stoichiometry-bank-mcq1-q02",
            question: "What is the relative formula mass of magnesium nitrate, Mg(NO₃)₂? (Aᵣ: Mg=24, N=14, O=16)",
            options: ["86", "148", "130", "164"],
            answerIndex: 1,
            explanation: "Mg(NO₃)₂: 24 + 2×(14 + 3×16) = 24 + 2×62 = 24 + 124 = 148. Option B. A common error is to use NO₃ = 14+3×16 = 62 but only count one group, giving 24+62 = 86.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "core",
            hints: ["Two NO₃ groups: multiply all atoms in the bracket by 2.", "Mᵣ(NO₃) = 14 + 48 = 62; two groups = 124; add Mg = 24."],
          },
          {
            id: "chem-stoichiometry-bank-mcq1-q03",
            question: "How many atoms are present in 0.25 mol of oxygen gas O₂? (Nₐ = 6.02 × 10²³ mol⁻¹)",
            options: ["1.505 × 10²³", "3.01 × 10²³", "6.02 × 10²³", "1.204 × 10²³"],
            answerIndex: 1,
            explanation: "0.25 mol O₂ × 6.02×10²³ molecules/mol = 1.505×10²³ molecules. But each O₂ molecule contains 2 atoms, so atoms = 2 × 1.505×10²³ = 3.01×10²³. Option B.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "core",
            hints: ["First find molecules of O₂: n × Nₐ.", "Then multiply by 2 (each O₂ has 2 atoms)."],
          },
          {
            id: "chem-stoichiometry-bank-mcq1-q04",
            question: "What mass of copper is produced when 12.0 g of copper(II) oxide is reduced by excess hydrogen?\nCuO + H₂ → Cu + H₂O\n(Aᵣ: Cu=64, O=16)",
            options: ["9.60 g", "8.00 g", "12.0 g", "10.0 g"],
            answerIndex: 0,
            explanation: "Mᵣ(CuO) = 64+16 = 80. n(CuO) = 12.0/80 = 0.150 mol. Ratio 1:1 → n(Cu) = 0.150 mol. m(Cu) = 0.150×64 = 9.60 g. Option A.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: ["n(CuO) = 12.0/80.", "1:1 ratio so n(Cu) = n(CuO).", "m(Cu) = n × 64."],
          },
          {
            id: "chem-stoichiometry-bank-mcq1-q05",
            question: "A compound contains 75% C and 25% H by mass. Its Mᵣ is 16. What is its molecular formula?",
            options: ["CH₄", "C₂H₄", "CH₃", "C₃H₈"],
            answerIndex: 0,
            explanation: "C: 75/12=6.25; H: 25/1=25. Divide by 6.25: C=1, H=4. Empirical formula CH₄; EFM=16. Mᵣ=16, so n=1. Molecular formula = CH₄. Option A (methane).",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: ["Divide % by Aᵣ to get mole ratio.", "Divide by smallest: both divide by 6.25.", "EFM of CH₄ = 16 = Mᵣ, so n = 1."],
          },
          {
            id: "chem-stoichiometry-bank-mcq1-q06",
            question: "The theoretical yield of aspirin in a synthesis is 3.60 g, but only 2.88 g is obtained. What is the percentage yield?",
            options: ["80%", "75%", "88%", "125%"],
            answerIndex: 0,
            explanation: "% yield = (2.88/3.60) × 100 = 80.0%. Option A. 125% is impossible (actual cannot exceed theoretical).",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "warmup",
          },
        ],
      },
      {
        id: "chem-stoichiometry-bank-mcq-2",
        title: "MCQ Paper 2 — Gas Volumes, Concentration and Titration",
        description: "Six questions on molar gas volume, solution concentration, and titration calculations.",
        questions: [
          {
            id: "chem-stoichiometry-bank-mcq2-q01",
            question: "What volume of gas at r.t.p. is produced when 5.30 g of Na₂CO₃ reacts with excess HCl? (Mᵣ Na₂CO₃ = 106)\nNa₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂",
            options: ["1.20 dm³", "2.40 dm³", "0.60 dm³", "1.13 dm³"],
            answerIndex: 0,
            explanation: "n(Na₂CO₃) = 5.30/106 = 0.0500 mol. Ratio 1:1 → n(CO₂) = 0.0500 mol. V = 0.0500 × 24 = 1.20 dm³. Option A.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: ["n(Na₂CO₃) = 5.30/106 = 0.0500 mol.", "1 mol Na₂CO₃ gives 1 mol CO₂.", "V = 0.0500 × 24 dm³."],
          },
          {
            id: "chem-stoichiometry-bank-mcq2-q02",
            question: "What is the concentration in mol/dm³ of a solution made by dissolving 5.85 g of NaCl in 500 cm³ of water? (Mᵣ NaCl = 58.5)",
            options: ["0.100 mol/dm³", "0.200 mol/dm³", "0.050 mol/dm³", "0.400 mol/dm³"],
            answerIndex: 1,
            explanation: "n(NaCl) = 5.85/58.5 = 0.100 mol. V = 500/1000 = 0.500 dm³. c = 0.100/0.500 = 0.200 mol/dm³. Option B.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bank-mcq2-q03",
            question: "A solution of KOH has a concentration of 0.500 mol/dm³. What is this in g/dm³? (Mᵣ KOH = 56)",
            options: ["0.500 g/dm³", "28.0 g/dm³", "56.0 g/dm³", "112 g/dm³"],
            answerIndex: 1,
            explanation: "c(g/dm³) = c(mol/dm³) × M = 0.500 × 56 = 28.0 g/dm³. Option B.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bank-mcq2-q04",
            question: "In a titration, 10.0 cm³ of 0.200 mol/dm³ HCl neutralises 25.0 cm³ of Ba(OH)₂ solution.\n2HCl + Ba(OH)₂ → BaCl₂ + 2H₂O\nWhat is the concentration of the Ba(OH)₂?",
            options: ["0.0400 mol/dm³", "0.0800 mol/dm³", "0.100 mol/dm³", "0.200 mol/dm³"],
            answerIndex: 0,
            explanation: "n(HCl) = 0.200 × 0.0100 = 0.00200 mol. Ratio HCl:Ba(OH)₂ = 2:1 → n(Ba(OH)₂) = 0.00100 mol. c = 0.00100/0.0250 = 0.0400 mol/dm³. Option A.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "challenge",
            hints: ["n(HCl) = c × V (dm³) = 0.200 × 0.0100.", "Mole ratio HCl:Ba(OH)₂ = 2:1 → halve the moles.", "c = n/V for Ba(OH)₂ in dm³."],
            strategy: "apply mole ratio carefully — 2:1 not 1:1",
          },
          {
            id: "chem-stoichiometry-bank-mcq2-q05",
            question: "Which statement about the limiting reactant is correct?",
            options: [
              "It is always the reactant with the smaller mass.",
              "It is always the reactant with fewer moles.",
              "It determines the maximum mass of product obtainable.",
              "It is always the reactant with the larger molar mass.",
            ],
            answerIndex: 2,
            explanation: "The limiting reactant determines the theoretical maximum yield of product — when it is used up, the reaction stops. Statements A, B and D are all incorrect: the limiting reactant is determined by the moles/coefficient ratio, not raw mass or moles alone.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bank-mcq2-q06",
            question: "A sample of impure sodium chloride has a purity of 85.0%. What mass of impure salt contains 10.0 g of pure NaCl?",
            options: ["8.50 g", "11.8 g", "11.0 g", "8.00 g"],
            answerIndex: 1,
            explanation: "% purity = (pure/total) × 100; 85.0 = (10.0/total) × 100; total = 10.0×100/85.0 = 11.76 ≈ 11.8 g. Option B.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: ["Rearrange % purity formula: total mass = (mass pure / % purity) × 100.", "10.0 / 0.850 = 11.76 g."],
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "chem-stoichiometry-bank-qa-1",
        title: "QA Paper 1 — Reacting Masses and Empirical Formula",
        description: "Four structured questions on stoichiometry calculations including a multi-step challenge.",
        questions: [
          {
            id: "chem-stoichiometry-bank-qa1-q01",
            question: "Iron is extracted from haematite (iron(III) oxide) by reduction with carbon monoxide in a blast furnace:\nFe₂O₃(s) + 3CO(g) → 2Fe(l) + 3CO₂(g)\n(Aᵣ: Fe=56, O=16, C=12)\n(a) Calculate the mass of iron produced from 1.60 kg of Fe₂O₃. [3]\n(b) Calculate the volume of CO₂ produced at r.t.p. from the same amount of Fe₂O₃. [2]",
            marks: 5,
            modelAnswer: "(a) Mᵣ(Fe₂O₃)=160. n(Fe₂O₃)=1600/160=10.0 mol. Mole ratio Fe₂O₃:Fe=1:2, so n(Fe)=20.0 mol. m(Fe)=20.0×56=1120 g=1.12 kg.\n(b) Mole ratio Fe₂O₃:CO₂=1:3, so n(CO₂)=30.0 mol. V=30.0×24=720 dm³.",
            markScheme: [
              "Mᵣ(Fe₂O₃) = 160 [1]",
              "n(Fe₂O₃) = 1600/160 = 10.0 mol [1]",
              "n(Fe) = 20.0 mol; m(Fe) = 20.0 × 56 = 1120 g (1.12 kg) [1]",
              "n(CO₂) = 3 × 10.0 = 30.0 mol [1]",
              "V(CO₂) = 30.0 × 24 = 720 dm³ [1]",
            ],
            commonError: "Using a 1:1 mole ratio for Fe₂O₃:Fe instead of 1:2, giving 560 g.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "Convert kg to g: 1.60 kg = 1600 g. Find n(Fe₂O₃).",
              "From the equation: 1 mol Fe₂O₃ gives 2 mol Fe.",
              "Similarly, 1 mol Fe₂O₃ gives 3 mol CO₂.",
              "V = n × 24 dm³/mol for gas at r.t.p.",
            ],
            solutions: [
              {
                label: "Full road-map solution",
                steps: [
                  "Mᵣ(Fe₂O₃) = 2×56 + 3×16 = 112 + 48 = 160 g/mol",
                  "n(Fe₂O₃) = 1600 g / 160 g mol⁻¹ = 10.0 mol",
                  "Ratio Fe₂O₃:Fe = 1:2 → n(Fe) = 2 × 10.0 = 20.0 mol",
                  "m(Fe) = 20.0 × 56 = 1120 g = 1.12 kg",
                  "Ratio Fe₂O₃:CO₂ = 1:3 → n(CO₂) = 3 × 10.0 = 30.0 mol",
                  "V(CO₂) = 30.0 × 24 = 720 dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bank-qa1-q02",
            question: "An organic compound X contains only carbon, hydrogen and oxygen. On combustion of 0.900 g of X, 1.320 g of CO₂ and 0.540 g of H₂O are produced.\n(Aᵣ: C=12, H=1, O=16; Mᵣ: CO₂=44, H₂O=18)\n(a) Calculate the number of moles of CO₂ and H₂O produced. [2]\n(b) Hence determine the masses of C and H in 0.900 g of X, and so find the mass of O. [3]\n(c) Determine the empirical formula of X. [2]\n(d) Given that the Mᵣ of X is 60, determine its molecular formula. [2]",
            marks: 9,
            modelAnswer: "(a) n(CO₂)=1.320/44=0.0300 mol; n(H₂O)=0.540/18=0.0300 mol.\n(b) m(C)=0.0300×12=0.360 g; m(H)=0.0300×2×1=0.0600 g; m(O)=0.900−0.360−0.060=0.480 g.\n(c) n(C)=0.360/12=0.0300; n(H)=0.0600/1=0.0600; n(O)=0.480/16=0.0300. Divide by 0.0300: C:1, H:2, O:1. Empirical formula: CH₂O.\n(d) EFM(CH₂O)=12+2+16=30. n=60/30=2. Molecular formula: C₂H₄O₂.",
            markScheme: [
              "n(CO₂) = 0.0300 mol; n(H₂O) = 0.0300 mol [2]",
              "m(C) = 0.360 g; m(H) = 0.0600 g [1]",
              "m(O) = 0.900 − 0.360 − 0.060 = 0.480 g [1]",
              "Mole ratios C:H:O = 0.030:0.060:0.030 = 1:2:1 [1]",
              "Empirical formula CH₂O [1]",
              "EFM = 30; n = 60/30 = 2 [1]",
              "Molecular formula C₂H₄O₂ [1]",
            ],
            commonError: "Forgetting that each H₂O contains 2 H atoms, so moles of H = 2 × n(H₂O). Also forgetting to subtract both C and H masses when finding O.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "challenge",
            hints: [
              "n(CO₂) gives moles of C directly; n(H₂O) × 2 gives moles of H.",
              "Mass of C = n(C) × 12; mass of H = n(H) × 1; mass of O = total − C − H.",
              "Convert mass of O to moles: n(O) = mass/16.",
              "Divide all mole values by the smallest to get the ratio.",
            ],
            strategy: "combustion analysis: CO₂ → C; H₂O → H; remainder → O",
            solutions: [
              {
                label: "Full combustion analysis",
                steps: [
                  "n(CO₂) = 1.320/44 = 0.03000 mol → moles of C = 0.03000 mol",
                  "n(H₂O) = 0.540/18 = 0.03000 mol → moles of H = 2 × 0.03000 = 0.06000 mol",
                  "m(C) = 0.03000 × 12 = 0.3600 g",
                  "m(H) = 0.06000 × 1 = 0.06000 g",
                  "m(O) = 0.900 − 0.360 − 0.060 = 0.4800 g → n(O) = 0.4800/16 = 0.03000 mol",
                  "Ratio C:H:O = 0.030:0.060:0.030 → divide by 0.030 → 1:2:1",
                  "Empirical formula: CH₂O (EFM = 30)",
                  "n = 60/30 = 2 → Molecular formula: C₂H₄O₂ (acetic acid / glycolaldehyde)",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bank-qa1-q03",
            question: "Zinc reacts with dilute sulfuric acid:\nZn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)\n(Aᵣ: Zn=65)\n(a) A student reacts 6.50 g of zinc with 100 cm³ of 1.50 mol/dm³ H₂SO₄. Show, with calculations, which is the limiting reactant. [4]\n(b) Calculate the volume of H₂ produced at r.t.p. [2]",
            marks: 6,
            modelAnswer: "(a) n(Zn)=6.50/65=0.100 mol; n(H₂SO₄)=1.50×(100/1000)=0.150 mol. Ratio 1:1; Zn coefficient=1, H₂SO₄ coefficient=1. Divide by coefficient: Zn=0.100/1=0.100; H₂SO₄=0.150/1=0.150. Zn gives the smaller value → Zn is the limiting reactant.\n(b) n(H₂)=n(Zn)=0.100 mol. V=0.100×24=2.40 dm³.",
            markScheme: [
              "n(Zn) = 6.50/65 = 0.100 mol [1]",
              "n(H₂SO₄) = 1.50 × 0.100 = 0.150 mol [1]",
              "Comparison: 0.100 < 0.150 (same coefficient 1); Zn is limiting reactant [1]",
              "Statement that H₂SO₄ is in excess [1]",
              "n(H₂) = 0.100 mol [1]",
              "V(H₂) = 0.100 × 24 = 2.40 dm³ [1]",
            ],
            commonError: "Not converting cm³ to dm³ when calculating n(H₂SO₄): using 1.50 × 100 = 150 instead of 1.50 × 0.100 = 0.150 mol.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "n(Zn) = m/M. n(H₂SO₄) = c × V — remember V in dm³ (divide cm³ by 1000).",
              "For a 1:1 ratio, compare moles directly.",
              "The smaller moles value is the limiting reactant.",
              "n(H₂) = n(Zn) by 1:1 ratio; then V = n × 24.",
            ],
          },
          {
            id: "chem-stoichiometry-bank-qa1-q04",
            question: "A student prepares copper(II) sulfate crystals (CuSO₄·5H₂O, Mᵣ=250) by reacting copper(II) oxide with excess dilute sulfuric acid, then evaporating and crystallising the product.\nCuO + H₂SO₄ → CuSO₄ + H₂O\n(Mᵣ CuO=80)\n(a) Calculate the theoretical yield of CuSO₄·5H₂O from 2.00 g of CuO. [3]\n(b) The student obtained 5.00 g of crystals. Calculate the percentage yield. [1]\n(c) Suggest two reasons why the percentage yield is less than 100%. [2]",
            marks: 6,
            modelAnswer: "(a) n(CuO)=2.00/80=0.0250 mol. Ratio 1:1 → n(CuSO₄)=0.0250 mol. But the product crystallises as CuSO₄·5H₂O: n(crystals)=n(CuSO₄)=0.0250 mol. Theoretical mass=0.0250×250=6.25 g.\n(b) % yield=(5.00/6.25)×100=80.0%.\n(c) Any two of: some crystals lost when filtered/transferred; incomplete evaporation; some CuSO₄ remains dissolved in the filtrate; incomplete reaction if CuO particles large.",
            markScheme: [
              "n(CuO) = 2.00/80 = 0.0250 mol [1]",
              "n(CuSO₄·5H₂O) = 0.0250 mol [1]",
              "Theoretical mass = 0.0250 × 250 = 6.25 g [1]",
              "% yield = (5.00/6.25) × 100 = 80.0% [1]",
              "Any two valid reasons, e.g. product lost during transfer/filtration; some product remains dissolved; side reactions [2]",
            ],
            commonError: "Using Mᵣ(CuSO₄) = 160 instead of Mᵣ(CuSO₄·5H₂O) = 250 when the question specifies the hydrated crystals are collected.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "The question asks for CuSO₄·5H₂O, not anhydrous CuSO₄ — use Mᵣ = 250.",
              "n(CuSO₄·5H₂O) = n(CuO) by 1:1 ratio.",
              "Theoretical yield = n × 250.",
              "% yield = actual/theoretical × 100.",
            ],
          },
        ],
      },
      {
        id: "chem-stoichiometry-bank-qa-2",
        title: "QA Paper 2 — Concentration, Titration and Multi-step Problems",
        description: "Four structured questions with a focus on titrations, gas volumes and percentage purity.",
        questions: [
          {
            id: "chem-stoichiometry-bank-qa2-q01",
            question: "A 250 cm³ volumetric flask is used to make a standard solution of sodium carbonate, Na₂CO₃.\n(Mᵣ Na₂CO₃ = 106)\n(a) Calculate the mass of Na₂CO₃ needed to make 250 cm³ of 0.100 mol/dm³ solution. [2]\n(b) This solution is used to standardise a hydrochloric acid solution. 25.0 cm³ of the Na₂CO₃ solution requires a mean titre of 22.50 cm³ of HCl.\nNa₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂\nCalculate the concentration of the HCl in mol/dm³. [3]",
            marks: 5,
            modelAnswer: "(a) n(Na₂CO₃)=0.100×(250/1000)=0.0250 mol. m=0.0250×106=2.65 g.\n(b) n(Na₂CO₃)=0.100×(25.0/1000)=0.00250 mol. Ratio 1:2 → n(HCl)=0.00500 mol. c(HCl)=0.00500/(22.50/1000)=0.00500/0.02250=0.222 mol/dm³.",
            markScheme: [
              "n(Na₂CO₃) = 0.100 × 0.250 = 0.0250 mol [1]",
              "m = 0.0250 × 106 = 2.65 g [1]",
              "n(Na₂CO₃ in titration) = 0.100 × 0.0250 = 0.00250 mol [1]",
              "n(HCl) = 2 × 0.00250 = 0.00500 mol [1]",
              "c(HCl) = 0.00500 / 0.02250 = 0.222 mol/dm³ [1]",
            ],
            commonError: "Using a 1:1 mole ratio for Na₂CO₃:HCl instead of the correct 1:2 ratio.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "For part (a): n = c × V; then m = n × M.",
              "For part (b): start with what you know — find n(Na₂CO₃) in the 25.0 cm³ portion.",
              "Apply the 1:2 mole ratio to find n(HCl).",
              "c(HCl) = n(HCl) / V(HCl) in dm³.",
            ],
            solutions: [
              {
                label: "Full titration calculation",
                steps: [
                  "(a) n = 0.100 × 0.250 = 0.02500 mol; m = 0.02500 × 106 = 2.650 g ≈ 2.65 g",
                  "(b) n(Na₂CO₃) = 0.100 × 0.02500 = 0.002500 mol",
                  "Na₂CO₃:HCl = 1:2 → n(HCl) = 2 × 0.002500 = 0.005000 mol",
                  "c(HCl) = 0.005000 / (22.50/1000) = 0.005000/0.02250 = 0.2222 mol/dm³ ≈ 0.222 mol/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bank-qa2-q02",
            question: "An impure sample of calcium carbonate (limestone) is analysed by reacting a 5.00 g sample with excess hydrochloric acid and collecting the CO₂ gas.\nCaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂\n(Mᵣ CaCO₃ = 100)\n(a) The volume of CO₂ collected at r.t.p. is 960 cm³. Calculate the moles of CO₂. [1]\n(b) Calculate the mass of CaCO₃ in the sample. [2]\n(c) Calculate the percentage purity of the limestone. [1]\n(d) Suggest one substance that might be present as an impurity in limestone. [1]",
            marks: 5,
            modelAnswer: "(a) n(CO₂)=0.960/24=0.0400 mol.\n(b) Ratio 1:1 → n(CaCO₃)=0.0400 mol. m(CaCO₃)=0.0400×100=4.00 g.\n(c) % purity=(4.00/5.00)×100=80.0%.\n(d) Any reasonable mineral impurity: calcium silicate / silicon dioxide / magnesium carbonate / clay / iron oxide.",
            markScheme: [
              "n(CO₂) = 960/24000 = 0.0400 mol (accept 0.960/24) [1]",
              "n(CaCO₃) = 0.0400 mol [1]",
              "m(CaCO₃) = 0.0400 × 100 = 4.00 g [1]",
              "% purity = (4.00/5.00) × 100 = 80.0% [1]",
              "Suitable impurity named (SiO₂ / MgCO₃ / clay / CaSiO₃) [1]",
            ],
            commonError: "Using V in cm³ directly without converting (dividing by 24 000 instead of 24 when V is already in dm³, or forgetting to convert at all).",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: [
              "960 cm³ = 0.960 dm³. Use n = V/24 (V in dm³).",
              "The 1:1 mole ratio gives n(CaCO₃) directly.",
              "% purity = mass pure / total mass × 100.",
            ],
          },
          {
            id: "chem-stoichiometry-bank-qa2-q03",
            question: "Ammonia is manufactured by the Haber process:\nN₂(g) + 3H₂(g) ⇌ 2NH₃(g)\n(Aᵣ: N=14, H=1)\n(a) Calculate the mass of NH₃ that would theoretically be produced from 42.0 g of N₂ reacting with excess H₂. [3]\n(b) In practice, under industrial conditions, only 15% of the N₂ is converted to NH₃ per pass. Calculate the actual mass of NH₃ produced from 42.0 g of N₂ per pass. [2]\n(c) Explain why the percentage conversion is so low, referring to the equilibrium. [2]",
            marks: 7,
            modelAnswer: "(a) Mᵣ(N₂)=28. n(N₂)=42.0/28=1.50 mol. Ratio N₂:NH₃=1:2 → n(NH₃)=3.00 mol. m(NH₃)=3.00×17=51.0 g.\n(b) Actual yield=15%/100×51.0=7.65 g.\n(c) The reaction is reversible; at equilibrium the reverse reaction (decomposition of NH₃) also occurs at a significant rate. Industrial conditions (high T) favour the reverse endothermic direction, reducing equilibrium yield; the 15% represents the equilibrium position under those conditions, not a slow kinetics issue.",
            markScheme: [
              "n(N₂) = 42.0/28 = 1.50 mol [1]",
              "n(NH₃) = 2 × 1.50 = 3.00 mol [1]",
              "m(NH₃) = 3.00 × 17 = 51.0 g [1]",
              "Actual mass = 0.15 × 51.0 = 7.65 g [2]",
              "Reaction is reversible / equilibrium established [1]",
              "High temperature shifts equilibrium to left (exothermic forward direction) reducing NH₃ yield [1]",
            ],
            commonError: "Treating the 15% as a percentage yield calculation using actual/theoretical rather than applying it as a conversion fraction of the theoretical.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "challenge",
            hints: [
              "Mᵣ(N₂) = 28; find n(N₂) first.",
              "Apply the 1:2 ratio to get n(NH₃) theoretical, then m theoretical.",
              "Actual mass = (15/100) × theoretical mass.",
              "For part (c): think about Le Chatelier's principle and the reversible sign ⇌.",
            ],
            strategy: "calculate theoretical first; then apply % conversion",
          },
          {
            id: "chem-stoichiometry-bank-qa2-q04",
            question: "A student carries out a back-titration to find the percentage purity of a sample of calcium carbonate.\n- 2.60 g of the impure CaCO₃ is reacted with 50.0 cm³ of 1.00 mol/dm³ HCl (excess).\n- The unreacted HCl is titrated with 0.500 mol/dm³ NaOH. The mean titre is 20.0 cm³.\nEquations:\nCaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂\nHCl + NaOH → NaCl + H₂O\n(Mᵣ CaCO₃ = 100)\n(a) Calculate the moles of HCl added initially. [1]\n(b) Calculate the moles of unreacted HCl (from the titration with NaOH). [2]\n(c) Hence calculate the moles of HCl that reacted with CaCO₃. [1]\n(d) Calculate the mass of pure CaCO₃ and so the percentage purity. [3]",
            marks: 7,
            modelAnswer: "(a) n(HCl) initial=1.00×(50.0/1000)=0.0500 mol.\n(b) n(NaOH)=0.500×(20.0/1000)=0.0100 mol. Ratio 1:1 → n(HCl) unreacted=0.0100 mol.\n(c) n(HCl) reacted with CaCO₃=0.0500−0.0100=0.0400 mol.\n(d) Ratio CaCO₃:HCl=1:2 → n(CaCO₃)=0.0400/2=0.0200 mol. m(CaCO₃)=0.0200×100=2.00 g. % purity=(2.00/2.60)×100=76.9%.",
            markScheme: [
              "n(HCl) initial = 1.00 × 0.0500 = 0.0500 mol [1]",
              "n(NaOH) = 0.500 × 0.0200 = 0.0100 mol [1]",
              "n(HCl) unreacted = 0.0100 mol (1:1 ratio) [1]",
              "n(HCl) reacted = 0.0500 − 0.0100 = 0.0400 mol [1]",
              "n(CaCO₃) = 0.0400/2 = 0.0200 mol [1]",
              "m(CaCO₃) = 0.0200 × 100 = 2.00 g [1]",
              "% purity = (2.00/2.60) × 100 = 76.9% [1]",
            ],
            commonError: "Using a 1:1 ratio for CaCO₃:HCl instead of 1:2, giving n(CaCO₃) = 0.0400 mol and an impossibly high % purity (> 100%).",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "challenge",
            hints: [
              "Start with initial moles of HCl: n = c × V (in dm³).",
              "Find unreacted HCl via the NaOH titration (1:1 ratio).",
              "HCl that reacted with CaCO₃ = initial − unreacted.",
              "Apply the 1:2 CaCO₃:HCl ratio to find n(CaCO₃), then % purity.",
            ],
            strategy: "back-titration: total − unreacted = reacted with sample",
            solutions: [
              {
                label: "Step-by-step back-titration",
                steps: [
                  "n(HCl) added = 1.00 × 0.0500 = 0.05000 mol",
                  "n(NaOH) in titre = 0.500 × 0.02000 = 0.01000 mol",
                  "n(HCl) unreacted = 0.01000 mol (HCl + NaOH is 1:1)",
                  "n(HCl) reacted with CaCO₃ = 0.05000 − 0.01000 = 0.04000 mol",
                  "CaCO₃:HCl = 1:2 → n(CaCO₃) = 0.04000/2 = 0.02000 mol",
                  "m(CaCO₃) = 0.02000 × 100 = 2.000 g",
                  "% purity = (2.000/2.60) × 100 = 76.9%",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
