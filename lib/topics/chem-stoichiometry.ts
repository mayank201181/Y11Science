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

**Worked example (% yield):** 8.0 g of CaCO₃ is heated. Theoretically this gives 0.080 mol CaO (Mᵣ = 56), i.e. 0.080 × 56 = 4.48 g. In practice only 3.92 g of CaO is collected.
% yield = (3.92 / 4.48) × 100 = 87.5 %.
(Always find the *theoretical* yield by the moles road-map first, then divide the actual into it.)

**Percentage purity** describes an impure sample:

% purity = (mass of pure substance / total mass of sample) × 100 %

**Worked example (% purity):** A 5.00 g sample of impure CaCO₃ is reacted with excess acid and releases 0.0400 mol CO₂. Since CaCO₃:CO₂ = 1:1, n(CaCO₃) = 0.0400 mol, so mass of pure CaCO₃ = 0.0400 × 100 = 4.00 g.
% purity = (4.00 / 5.00) × 100 = 80.0 %.
(The trick: use a measured product to work *back* to the mass of the pure reactant, then compare with the total sample mass.)

**Percentage composition by mass** tells you the fraction of a compound's mass that is due to one element:

% of element = (number of atoms × Aᵣ) / Mᵣ × 100 %

**Worked example (% composition):** Find the % by mass of nitrogen in ammonium nitrate, NH₄NO₃ (Mᵣ = 80). There are 2 N atoms, mass = 2 × 14 = 28.
% N = (28 / 80) × 100 = 35.0 %. (This is how fertiliser "N content" is quoted.)`,
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
        "% purity = (mass of pure / total sample mass) × 100; work back from a measured product.",
        "% of element by mass = (atoms × Aᵣ)/Mᵣ × 100.",
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

**From combustion data:** burning a hydrocarbon and measuring masses of CO₂ and H₂O produced gives the moles of C and H; subtract from total mass to find O if present.

**Water of crystallisation (hydrated salts):** A hydrated salt contains water locked into its crystal structure, written as salt·xH₂O (e.g. CuSO₄·5H₂O). The value of x is found by an empirical-formula method using moles of the anhydrous salt and moles of water.

**Worked example (water of crystallisation):** 6.25 g of hydrated copper(II) sulfate, CuSO₄·xH₂O, is heated until all water is driven off, leaving 4.00 g of white anhydrous CuSO₄ (Mᵣ = 160; Mᵣ H₂O = 18).
- Mass of water lost = 6.25 − 4.00 = 2.25 g
- n(CuSO₄) = 4.00/160 = 0.0250 mol; n(H₂O) = 2.25/18 = 0.125 mol
- Ratio CuSO₄ : H₂O = 0.0250 : 0.125 = 1 : 5, so x = 5 and the formula is CuSO₄·5H₂O.`,
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
        "Water of crystallisation: x = n(H₂O)/n(anhydrous salt), an empirical-formula ratio.",
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

**Reacting gas volumes (Avogadro's law shortcut):** Because equal volumes of gases contain equal moles at the same T and P, for gases only you can use the mole ratio *directly as a volume ratio* — no need to convert to moles at all.

**Example:** What volume of oxygen reacts with 50 cm³ of methane, and what volume of CO₂ forms (all at r.t.p.)?
CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)
Volume ratio CH₄ : O₂ : CO₂ = 1 : 2 : 1.
So 50 cm³ CH₄ needs 50 × 2 = 100 cm³ O₂ and produces 50 cm³ CO₂. (The water is liquid at r.t.p., so it is not counted as a gas volume.)

**Note on units:** 1 dm³ = 1 litre = 1000 cm³. Always check whether the question gives volume in dm³ or cm³ and convert if needed.

**At STP (0 °C, 1 atm)** the molar volume is 22.4 dm³/mol — but IGCSE uses r.t.p. = 24 dm³/mol.`,
      keyPoints: [
        "Molar gas volume = 24 dm³/mol at r.t.p. (25 °C, 1 atm).",
        "n = V/24 (V in dm³); V = n × 24.",
        "1 dm³ = 1000 cm³; n = V(cm³)/24 000.",
        "Applies to ALL ideal gases equally at the same T and P.",
        "Combine with mole-ratio steps for reaction volume calculations.",
        "Avogadro's law: for gas-only reactions the mole ratio is also the volume ratio (skip moles).",
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

**Worked example (units conversion):** A solution of NaOH (M = 40 g/mol) has concentration 0.250 mol/dm³.
In g/dm³: 0.250 × 40 = 10.0 g/dm³.
Reverse check: 10.0 g/dm³ ÷ 40 = 0.250 mol/dm³. ✓
**Making a solution:** to find the mass to dissolve, first get moles needed: n = c × V. For 500 cm³ (0.500 dm³) of 0.250 mol/dm³ NaOH, n = 0.250 × 0.500 = 0.125 mol, so mass = 0.125 × 40 = 5.0 g.

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
      "% of an element by mass = (number of atoms × Aᵣ) / Mᵣ × 100%.",
      "Convert concentrations: c(g/dm³) = c(mol/dm³) × M; c(mol/dm³) = c(g/dm³) / M.",
      "Avogadro's law: equal volumes of gases (same T, P) have equal moles, so the mole ratio = volume ratio for gases.",
      "Water of crystallisation x in salt·xH₂O = n(water)/n(anhydrous salt) (from mass lost on heating).",
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
      { front: "How do you find % of an element by mass in a compound?", back: "% = (number of atoms × Aᵣ) / Mᵣ × 100. e.g. N in NH₄NO₃: (28/80)×100 = 35%." },
      { front: "How do you convert mol/dm³ to g/dm³?", back: "Multiply by the molar mass M: c(g/dm³) = c(mol/dm³) × M." },
      { front: "State Avogadro's law and its use for volumes.", back: "Equal volumes of gases at the same temperature and pressure contain equal numbers of molecules — so for gas-only reactions the mole ratio equals the volume ratio." },
      { front: "How do you find x in a hydrated salt salt·xH₂O?", back: "Heat to drive off water. x = n(H₂O lost) / n(anhydrous salt) — an empirical-formula ratio." },
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
      { term: "Concentration (g/dm³)", definition: "Mass of solute (in grams) per cubic decimetre of solution; equals concentration in mol/dm³ multiplied by the molar mass." },
      { term: "Avogadro's law", definition: "Equal volumes of gases at the same temperature and pressure contain equal numbers of molecules (and therefore equal numbers of moles)." },
      { term: "Water of crystallisation", definition: "Water molecules built into the crystal structure of a hydrated salt, shown as salt·xH₂O; driven off by heating to leave the anhydrous salt." },
      { term: "Molar gas volume", definition: "The volume occupied by one mole of any gas; 24 dm³/mol at r.t.p. (25 °C, 1 atm)." },
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
      // ── MCQ PAPER 1 ── symbols · balancing · Mᵣ · moles · Avogadro ──
      {
        id: "chem-stoichiometry-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Ten MCQs on chemical formulae, balancing equations, relative formula mass, moles from mass, and the Avogadro constant.",
        questions: [
          {
            id: "chem-stoichiometry-bm1-01",
            question: "How many atoms in total are represented by one formula unit of ammonium sulfate, (NH₄)₂SO₄?",
            options: ["11", "13", "15", "9"],
            answerIndex: 2,
            explanation: "Apply the subscript 2 to everything in the bracket: 2 N, 8 H, then 1 S and 4 O. Total = 2 + 8 + 1 + 4 = 15 atoms. Option C. Forgetting to multiply the 4 H by 2 gives 11 (option A).",
            guideRef: "Chemical Symbols, Formulae and Equations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm1-02",
            question: "Which is the correctly balanced equation for the reaction of aluminium with oxygen?",
            options: [
              "Al + O₂ → AlO₂",
              "2Al + 3O₂ → Al₂O₃",
              "4Al + 3O₂ → 2Al₂O₃",
              "2Al + O₃ → Al₂O₃",
            ],
            answerIndex: 2,
            explanation: "4Al + 3O₂ → 2Al₂O₃. Check: Al 4 = 2×2 = 4 ✓; O 3×2 = 6 = 2×3 = 6 ✓. Option C. Option B is not balanced (O: 6 left, 3 right), and you must never alter subscripts as in A or D.",
            guideRef: "Chemical Symbols, Formulae and Equations",
            difficulty: "core",
            hints: [
              "Use Al₂O₃ as the product (the correct formula for aluminium oxide).",
              "Try 2Al₂O₃ to make oxygen even: that gives 6 O, needing 3 O₂.",
              "2Al₂O₃ contains 4 Al, so you need 4 Al on the left.",
            ],
          },
          {
            id: "chem-stoichiometry-bm1-03",
            question: "What is the relative formula mass of calcium hydroxide, Ca(OH)₂? (Aᵣ: Ca = 40, O = 16, H = 1)",
            options: ["57", "74", "58", "114"],
            answerIndex: 1,
            explanation: "Ca(OH)₂ = 40 + 2×(16 + 1) = 40 + 2×17 = 40 + 34 = 74. Option B. A common error is to apply the 2 to only the O, giving 40 + 16×2 + 1 = 73, or to forget the bracket entirely (57).",
            guideRef: "Relative Mass and the Mole",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm1-04",
            question: "How many moles are there in 13.5 g of aluminium? (Aᵣ Al = 27)",
            options: ["0.50 mol", "0.20 mol", "2.0 mol", "0.27 mol"],
            answerIndex: 0,
            explanation: "n = m/M = 13.5/27 = 0.50 mol. Option A.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm1-05",
            question: "What mass of sodium hydroxide is contained in 0.250 mol of NaOH? (Mᵣ NaOH = 40)",
            options: ["10.0 g", "16.0 g", "160 g", "0.00625 g"],
            answerIndex: 0,
            explanation: "m = n × M = 0.250 × 40 = 10.0 g. Option A. Dividing instead of multiplying (0.250/40) gives the wrong tiny value in D.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "core",
            hints: [
              "Rearrange n = m/M into m = n × M.",
              "M(NaOH) = 23 + 16 + 1 = 40 g/mol.",
              "m = 0.250 × 40.",
            ],
          },
          {
            id: "chem-stoichiometry-bm1-06",
            question: "Which sample contains the greatest number of molecules? (Aᵣ: H = 1, C = 12, O = 16, S = 32)",
            options: [
              "4 g of H₂",
              "16 g of O₂",
              "44 g of CO₂",
              "64 g of SO₂",
            ],
            answerIndex: 0,
            explanation: "The number of molecules depends only on the number of moles. H₂: 4/2 = 2.0 mol; O₂: 16/32 = 0.50 mol; CO₂: 44/44 = 1.0 mol; SO₂: 64/64 = 1.0 mol. The H₂ sample has the most moles (2.0), so it contains the most molecules. Option A.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "core",
            hints: [
              "Number of molecules depends only on number of moles (n × Nₐ).",
              "Convert each mass to moles using n = m/M.",
              "Compare the moles: 4 g H₂ is 2.0 mol, the largest.",
            ],
          },
          {
            id: "chem-stoichiometry-bm1-07",
            question: "How many molecules are present in 9.0 g of water? (Mᵣ H₂O = 18, Nₐ = 6.02 × 10²³ mol⁻¹)",
            options: ["3.01 × 10²³", "6.02 × 10²³", "1.20 × 10²⁴", "1.505 × 10²³"],
            answerIndex: 0,
            explanation: "n = 9.0/18 = 0.50 mol. Molecules = 0.50 × 6.02×10²³ = 3.01×10²³. Option A.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "core",
            hints: [
              "First find moles: n = m/M = 9.0/18.",
              "Number of molecules = n × Nₐ.",
              "0.50 × 6.02×10²³ = 3.01×10²³.",
            ],
          },
          {
            id: "chem-stoichiometry-bm1-08",
            question: "When the equation Fe₂O₃ + ?CO → ?Fe + ?CO₂ is balanced with the smallest whole numbers, what is the coefficient of CO?",
            options: ["1", "2", "3", "4"],
            answerIndex: 2,
            explanation: "Fe₂O₃ + 3CO → 2Fe + 3CO₂. Check: Fe 2 = 2 ✓; C 3 = 3 ✓; O 3 + 3 = 6 = 3×2 = 6 ✓. The coefficient of CO is 3. Option C.",
            guideRef: "Chemical Symbols, Formulae and Equations",
            difficulty: "core",
            hints: [
              "Balance Fe first: 2 Fe gives the coefficient 2 for Fe.",
              "Each CO carries one C, each CO₂ one C, so CO and CO₂ have equal coefficients.",
              "Total O must balance: 3 (from Fe₂O₃) + n(CO) = 2×n(CO₂).",
            ],
          },
          {
            id: "chem-stoichiometry-bm1-09",
            question: "0.10 mol of a metal carbonate MCO₃ has a mass of 8.4 g. What is the relative atomic mass of the metal M? (Aᵣ: C = 12, O = 16)",
            options: ["24", "40", "84", "60"],
            answerIndex: 0,
            explanation: "Mᵣ(MCO₃) = m/n = 8.4/0.10 = 84. CO₃ contributes 12 + 48 = 60, so Aᵣ(M) = 84 − 60 = 24 (magnesium). Option A.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "challenge",
            hints: [
              "First find the molar mass of the whole compound: M = m/n.",
              "Mᵣ(CO₃) = 12 + 3×16 = 60.",
              "Aᵣ(M) = Mᵣ(MCO₃) − 60.",
            ],
            strategy: "work backwards from molar mass to the unknown Aᵣ",
          },
          {
            id: "chem-stoichiometry-bm1-10",
            question: "A flask contains 1.204 × 10²³ molecules of carbon dioxide. What mass of CO₂ is this? (Mᵣ CO₂ = 44, Nₐ = 6.02 × 10²³ mol⁻¹)",
            options: ["4.4 g", "8.8 g", "44 g", "2.2 g"],
            answerIndex: 1,
            explanation: "n = 1.204×10²³ / 6.02×10²³ = 0.200 mol. m = 0.200 × 44 = 8.8 g. Option B.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "challenge",
            hints: [
              "Find moles from molecules: n = number / Nₐ.",
              "1.204×10²³ ÷ 6.02×10²³ = 0.200 mol.",
              "m = n × M = 0.200 × 44.",
            ],
            strategy: "molecules → moles → mass",
          },
        ],
      },

      // ── MCQ PAPER 2 ── reacting masses · % yield · % purity · limiting ──
      {
        id: "chem-stoichiometry-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Ten MCQs on reacting masses, mole ratios, limiting reactants, percentage yield and percentage purity.",
        questions: [
          {
            id: "chem-stoichiometry-bm2-01",
            question: "In the reaction 2Mg + O₂ → 2MgO, how many moles of MgO form from 0.40 mol of Mg burning in excess oxygen?",
            options: ["0.20 mol", "0.40 mol", "0.80 mol", "0.10 mol"],
            answerIndex: 1,
            explanation: "Mole ratio Mg:MgO = 2:2 = 1:1, so 0.40 mol Mg gives 0.40 mol MgO. Option B.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm2-02",
            question: "What mass of magnesium oxide is produced when 4.8 g of magnesium burns completely in oxygen? (Aᵣ: Mg = 24, O = 16)",
            options: ["6.4 g", "8.0 g", "4.0 g", "16 g"],
            answerIndex: 1,
            explanation: "n(Mg) = 4.8/24 = 0.20 mol. Ratio Mg:MgO = 1:1 → n(MgO) = 0.20 mol. Mᵣ(MgO) = 40, m = 0.20 × 40 = 8.0 g. Option B.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "n(Mg) = m/M = 4.8/24.",
              "Ratio Mg:MgO from 2Mg + O₂ → 2MgO is 1:1.",
              "m(MgO) = n × 40.",
            ],
          },
          {
            id: "chem-stoichiometry-bm2-03",
            question: "A reaction has a theoretical yield of 25.0 g but only 20.0 g of product is obtained. What is the percentage yield?",
            options: ["75%", "80%", "125%", "5%"],
            answerIndex: 1,
            explanation: "% yield = (actual/theoretical) × 100 = (20.0/25.0) × 100 = 80%. Option B.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm2-04",
            question: "For the reaction N₂ + 3H₂ → 2NH₃, a mixture of 2.0 mol N₂ and 3.0 mol H₂ reacts. Which reactant is limiting?",
            options: [
              "N₂, because it has fewer moles per coefficient",
              "H₂, because 3.0/3 = 1.0 is smaller than 2.0/1 = 2.0",
              "Neither — they react exactly",
              "N₂, because there is more of it",
            ],
            answerIndex: 1,
            explanation: "Divide moles by coefficient: N₂ = 2.0/1 = 2.0; H₂ = 3.0/3 = 1.0. H₂ gives the smaller value, so H₂ is limiting. Option B.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "Divide each reactant's moles by its coefficient in the equation.",
              "N₂ coefficient = 1; H₂ coefficient = 3.",
              "The smaller value (2.0 vs 1.0) marks the limiting reactant.",
            ],
          },
          {
            id: "chem-stoichiometry-bm2-05",
            question: "What mass of carbon dioxide is produced when 25.0 g of calcium carbonate is fully decomposed? CaCO₃ → CaO + CO₂ (Mᵣ: CaCO₃ = 100, CO₂ = 44)",
            options: ["11.0 g", "25.0 g", "44.0 g", "14.0 g"],
            answerIndex: 0,
            explanation: "n(CaCO₃) = 25.0/100 = 0.250 mol. Ratio 1:1 → n(CO₂) = 0.250 mol. m(CO₂) = 0.250 × 44 = 11.0 g. Option A.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "n(CaCO₃) = 25.0/100.",
              "1 mol CaCO₃ → 1 mol CO₂.",
              "m(CO₂) = n × 44.",
            ],
          },
          {
            id: "chem-stoichiometry-bm2-06",
            question: "An impure sample of zinc has a mass of 5.00 g and is 80.0% pure zinc. What mass of pure zinc does it contain?",
            options: ["6.25 g", "4.00 g", "0.80 g", "4.80 g"],
            answerIndex: 1,
            explanation: "Mass of pure = (80.0/100) × 5.00 = 4.00 g. Option B.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm2-07",
            question: "Hydrogen and chlorine react: H₂ + Cl₂ → 2HCl. If 2.0 g of H₂ reacts with 35.5 g of Cl₂, which is limiting? (Aᵣ: H = 1, Cl = 35.5)",
            options: [
              "H₂ (1.0 mol)",
              "Cl₂ (0.50 mol)",
              "Both react completely",
              "Cl₂ (1.0 mol)",
            ],
            answerIndex: 1,
            explanation: "n(H₂) = 2.0/2 = 1.0 mol; n(Cl₂) = 35.5/71 = 0.50 mol. Ratio 1:1, so Cl₂ (0.50 mol) is limiting and H₂ is in excess. Option B.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "Mᵣ(Cl₂) = 2 × 35.5 = 71.",
              "n(H₂) = 2.0/2; n(Cl₂) = 35.5/71.",
              "For a 1:1 ratio the smaller mole value is limiting.",
            ],
          },
          {
            id: "chem-stoichiometry-bm2-08",
            question: "5.40 g of aluminium reacts with excess copper(II) sulfate: 2Al + 3CuSO₄ → Al₂(SO₄)₃ + 3Cu. What maximum mass of copper is deposited? (Aᵣ: Al = 27, Cu = 64)",
            options: ["6.40 g", "12.8 g", "19.2 g", "9.60 g"],
            answerIndex: 2,
            explanation: "n(Al) = 5.40/27 = 0.200 mol. Ratio Al:Cu = 2:3 → n(Cu) = 0.200 × 3/2 = 0.300 mol. m(Cu) = 0.300 × 64 = 19.2 g. Option C.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "challenge",
            hints: [
              "n(Al) = 5.40/27 = 0.200 mol.",
              "Mole ratio Al:Cu = 2:3, so n(Cu) = n(Al) × 3/2.",
              "m(Cu) = n × 64.",
            ],
            strategy: "scale by the ratio 3/2, not 1:1",
          },
          {
            id: "chem-stoichiometry-bm2-09",
            question: "8.0 g of methane (CH₄) is burned. The reaction CH₄ + 2O₂ → CO₂ + 2H₂O gives a 90% yield of water. What mass of water is collected? (Mᵣ: CH₄ = 16, H₂O = 18)",
            options: ["16.2 g", "18.0 g", "9.0 g", "14.4 g"],
            answerIndex: 0,
            explanation: "n(CH₄) = 8.0/16 = 0.50 mol. Ratio CH₄:H₂O = 1:2 → theoretical n(H₂O) = 1.0 mol → 18 g. At 90% yield: 0.90 × 18 = 16.2 g. Option A.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "challenge",
            hints: [
              "n(CH₄) = 8.0/16 = 0.50 mol.",
              "Ratio CH₄:H₂O = 1:2, so theoretical H₂O = 1.0 mol = 18 g.",
              "Multiply theoretical mass by 0.90 for the actual yield.",
            ],
            strategy: "find theoretical mass first, then apply % yield",
          },
          {
            id: "chem-stoichiometry-bm2-10",
            question: "A 10.0 g sample of impure calcium carbonate is heated and loses 3.52 g as CO₂. CaCO₃ → CaO + CO₂ (Mᵣ: CaCO₃ = 100, CO₂ = 44). What is the percentage purity of the CaCO₃?",
            options: ["35.2%", "44.0%", "80.0%", "88.0%"],
            answerIndex: 2,
            explanation: "n(CO₂) = 3.52/44 = 0.0800 mol → n(CaCO₃) = 0.0800 mol → m(CaCO₃) = 0.0800 × 100 = 8.00 g. % purity = (8.00/10.0) × 100 = 80.0%. Option C.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "challenge",
            hints: [
              "Find moles of CO₂ lost: n = 3.52/44.",
              "1:1 ratio gives n(CaCO₃); m = n × 100.",
              "% purity = mass of pure CaCO₃ / 10.0 × 100.",
            ],
            strategy: "use the mass of gas lost to back-calculate pure CaCO₃",
          },
        ],
      },

      // ── MCQ PAPER 3 ── empirical/molecular formulae · % composition · gas volumes ──
      {
        id: "chem-stoichiometry-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Ten MCQs on empirical and molecular formulae, percentage composition, and molar gas volume calculations.",
        questions: [
          {
            id: "chem-stoichiometry-bm3-01",
            question: "What volume does 0.25 mol of nitrogen gas occupy at r.t.p.? (molar gas volume = 24 dm³/mol)",
            options: ["6.0 dm³", "12 dm³", "24 dm³", "96 dm³"],
            answerIndex: 0,
            explanation: "V = n × 24 = 0.25 × 24 = 6.0 dm³. Option A.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm3-02",
            question: "How many moles of gas are present in 600 cm³ of carbon dioxide at r.t.p.? (molar gas volume = 24 000 cm³/mol)",
            options: ["0.025 mol", "0.25 mol", "0.0025 mol", "25 mol"],
            answerIndex: 0,
            explanation: "n = V/24000 = 600/24000 = 0.025 mol. Option A. (Equivalently 0.600 dm³ / 24 = 0.025 mol.)",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm3-03",
            question: "What is the percentage by mass of nitrogen in ammonium nitrate, NH₄NO₃? (Aᵣ: N = 14, H = 1, O = 16)",
            options: ["17.5%", "35.0%", "28.0%", "23.3%"],
            answerIndex: 1,
            explanation: "Mᵣ(NH₄NO₃) = 14 + 4 + 14 + 48 = 80. There are 2 N atoms = 28. % N = (28/80) × 100 = 35.0%. Option B.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: [
              "Mᵣ(NH₄NO₃) = 2×14 + 4×1 + 3×16 = 80.",
              "Mass of N = 2 × 14 = 28 (count both N atoms).",
              "% N = (28/80) × 100.",
            ],
          },
          {
            id: "chem-stoichiometry-bm3-04",
            question: "A compound is 40.0% sulfur and 60.0% oxygen by mass. What is its empirical formula? (Aᵣ: S = 32, O = 16)",
            options: ["SO", "SO₂", "SO₃", "S₂O₃"],
            answerIndex: 2,
            explanation: "S: 40.0/32 = 1.25; O: 60.0/16 = 3.75. Divide by 1.25: S = 1, O = 3. Empirical formula SO₃. Option C.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: [
              "Divide each percentage by its Aᵣ to get a mole ratio.",
              "S: 40.0/32 = 1.25; O: 60.0/16 = 3.75.",
              "Divide both by the smaller (1.25) → 1 : 3.",
            ],
          },
          {
            id: "chem-stoichiometry-bm3-05",
            question: "A hydrocarbon has the empirical formula CH₂ and a relative molecular mass of 70. What is its molecular formula? (Aᵣ: C = 12, H = 1)",
            options: ["C₃H₆", "C₄H₈", "C₅H₁₀", "C₆H₁₂"],
            answerIndex: 2,
            explanation: "EFM(CH₂) = 14. n = 70/14 = 5. Molecular formula = C₅H₁₀. Option C.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: [
              "Empirical formula mass of CH₂ = 12 + 2 = 14.",
              "n = Mᵣ / EFM = 70/14.",
              "Multiply the subscripts of CH₂ by n.",
            ],
          },
          {
            id: "chem-stoichiometry-bm3-06",
            question: "What volume of oxygen at r.t.p. is needed to completely burn 0.10 mol of methane? CH₄ + 2O₂ → CO₂ + 2H₂O (molar gas volume = 24 dm³/mol)",
            options: ["2.4 dm³", "4.8 dm³", "1.2 dm³", "9.6 dm³"],
            answerIndex: 1,
            explanation: "Ratio CH₄:O₂ = 1:2 → n(O₂) = 0.20 mol. V = 0.20 × 24 = 4.8 dm³. Option B.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: [
              "Use the 1:2 mole ratio: n(O₂) = 2 × n(CH₄).",
              "n(O₂) = 0.20 mol.",
              "V = n × 24.",
            ],
          },
          {
            id: "chem-stoichiometry-bm3-07",
            question: "0.040 mol of magnesium reacts fully with excess hydrochloric acid: Mg + 2HCl → MgCl₂ + H₂. What volume of hydrogen is produced at r.t.p.? (molar gas volume = 24 dm³/mol)",
            options: ["0.96 dm³", "1.92 dm³", "0.48 dm³", "2.4 dm³"],
            answerIndex: 0,
            explanation: "Ratio Mg:H₂ = 1:1 → n(H₂) = 0.040 mol. V = 0.040 × 24 = 0.96 dm³. Option A.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: [
              "Ratio Mg:H₂ = 1:1, so n(H₂) = n(Mg) = 0.040 mol.",
              "V = n × 24.",
              "0.040 × 24 = 0.96 dm³.",
            ],
          },
          {
            id: "chem-stoichiometry-bm3-08",
            question: "Two gases react: 200 cm³ of nitrogen reacts with hydrogen to form ammonia. N₂ + 3H₂ → 2NH₃. Assuming all volumes are measured at the same temperature and pressure, what volume of NH₃ is formed?",
            options: ["100 cm³", "200 cm³", "400 cm³", "600 cm³"],
            answerIndex: 2,
            explanation: "By Avogadro's law, gas volumes are in the same ratio as moles. N₂:NH₃ = 1:2, so 200 cm³ N₂ → 400 cm³ NH₃. Option C.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: [
              "For gases at the same T and P, volume ratio = mole ratio.",
              "N₂:NH₃ = 1:2.",
              "Double the volume of N₂.",
            ],
          },
          {
            id: "chem-stoichiometry-bm3-09",
            question: "A hydrated salt has the formula MgSO₄·xH₂O. 2.46 g of the hydrated salt contains 1.20 g of anhydrous MgSO₄. What is the value of x? (Mᵣ: MgSO₄ = 120, H₂O = 18)",
            options: ["5", "6", "7", "10"],
            answerIndex: 2,
            explanation: "n(MgSO₄) = 1.20/120 = 0.0100 mol. Water = 2.46 − 1.20 = 1.26 g → n(H₂O) = 1.26/18 = 0.0700 mol. Ratio H₂O:MgSO₄ = 0.0700/0.0100 = 7. So x = 7. Option C.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "challenge",
            hints: [
              "n(MgSO₄) = 1.20/120.",
              "Mass of water = total − anhydrous; n(H₂O) = mass/18.",
              "x = n(H₂O) / n(MgSO₄).",
            ],
            strategy: "find moles of salt and water, then their ratio",
          },
          {
            id: "chem-stoichiometry-bm3-10",
            question: "0.96 g of an unknown gas occupies 720 cm³ at r.t.p. What is its relative molecular mass? (molar gas volume = 24 000 cm³/mol)",
            options: ["32", "16", "44", "28"],
            answerIndex: 0,
            explanation: "n = 720/24000 = 0.0300 mol. M = m/n = 0.96/0.0300 = 32. The gas could be oxygen (O₂) or methanol vapour. Option A.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "challenge",
            hints: [
              "Find moles from volume: n = V/24000 = 720/24000.",
              "n = 0.0300 mol.",
              "M = m/n = 0.96/0.0300.",
            ],
            strategy: "volume → moles → molar mass",
          },
        ],
      },

      // ── MCQ PAPER 4 ── concentration · titration · mixed multi-step ──
      {
        id: "chem-stoichiometry-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ten MCQs on concentration, titration, and mixed multi-step stoichiometry across the full topic.",
        questions: [
          {
            id: "chem-stoichiometry-bm4-01",
            question: "What is the concentration of a solution containing 0.20 mol of solute in 250 cm³ of solution?",
            options: ["0.80 mol/dm³", "0.050 mol/dm³", "0.20 mol/dm³", "5.0 mol/dm³"],
            answerIndex: 0,
            explanation: "c = n/V = 0.20 / (250/1000) = 0.20/0.250 = 0.80 mol/dm³. Option A.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm4-02",
            question: "How many moles of HCl are present in 50.0 cm³ of 0.200 mol/dm³ hydrochloric acid?",
            options: ["0.0100 mol", "0.100 mol", "0.0040 mol", "10.0 mol"],
            answerIndex: 0,
            explanation: "n = c × V = 0.200 × (50.0/1000) = 0.200 × 0.0500 = 0.0100 mol. Option A.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bm4-03",
            question: "A solution of sodium hydroxide has a concentration of 0.250 mol/dm³. What is this in g/dm³? (Mᵣ NaOH = 40)",
            options: ["10.0 g/dm³", "40.0 g/dm³", "0.00625 g/dm³", "160 g/dm³"],
            answerIndex: 0,
            explanation: "c(g/dm³) = c(mol/dm³) × M = 0.250 × 40 = 10.0 g/dm³. Option A.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "Multiply concentration in mol/dm³ by the molar mass.",
              "M(NaOH) = 40 g/mol.",
              "0.250 × 40 = 10.0.",
            ],
          },
          {
            id: "chem-stoichiometry-bm4-04",
            question: "25.0 cm³ of NaOH is exactly neutralised by 20.0 cm³ of 0.100 mol/dm³ HCl. HCl + NaOH → NaCl + H₂O. What is the concentration of the NaOH?",
            options: ["0.0800 mol/dm³", "0.125 mol/dm³", "0.100 mol/dm³", "0.0500 mol/dm³"],
            answerIndex: 0,
            explanation: "n(HCl) = 0.100 × 0.0200 = 0.00200 mol. Ratio 1:1 → n(NaOH) = 0.00200 mol. c = 0.00200/0.0250 = 0.0800 mol/dm³. Option A.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "n(HCl) = c × V (V in dm³).",
              "1:1 ratio gives n(NaOH) = n(HCl).",
              "c(NaOH) = n / 0.0250.",
            ],
          },
          {
            id: "chem-stoichiometry-bm4-05",
            question: "What mass of NaOH is needed to make 500 cm³ of a 0.100 mol/dm³ solution? (Mᵣ NaOH = 40)",
            options: ["2.00 g", "4.00 g", "20.0 g", "0.200 g"],
            answerIndex: 0,
            explanation: "n = c × V = 0.100 × 0.500 = 0.0500 mol. m = 0.0500 × 40 = 2.00 g. Option A.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "n = c × V = 0.100 × (500/1000).",
              "n = 0.0500 mol.",
              "m = n × M = 0.0500 × 40.",
            ],
          },
          {
            id: "chem-stoichiometry-bm4-06",
            question: "25.0 cm³ of 0.100 mol/dm³ NaOH is neutralised by 12.5 cm³ of H₂SO₄. H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. What is the concentration of the H₂SO₄?",
            options: ["0.100 mol/dm³", "0.200 mol/dm³", "0.0500 mol/dm³", "0.400 mol/dm³"],
            answerIndex: 0,
            explanation: "n(NaOH) = 0.100 × 0.0250 = 0.00250 mol. Ratio H₂SO₄:NaOH = 1:2 → n(H₂SO₄) = 0.00125 mol. c = 0.00125/0.0125 = 0.100 mol/dm³. Option A.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "challenge",
            hints: [
              "n(NaOH) = 0.100 × 0.0250 = 0.00250 mol.",
              "Ratio 1:2, so n(H₂SO₄) = n(NaOH)/2 = 0.00125 mol.",
              "c = 0.00125 / (12.5/1000).",
            ],
            strategy: "halve the moles for the 1:2 ratio",
          },
          {
            id: "chem-stoichiometry-bm4-07",
            question: "10.0 cm³ of 0.500 mol/dm³ NaOH is mixed with 30.0 cm³ of water. What is the new concentration of NaOH (assuming volumes add)?",
            options: ["0.125 mol/dm³", "0.500 mol/dm³", "0.167 mol/dm³", "0.0500 mol/dm³"],
            answerIndex: 0,
            explanation: "Moles unchanged: n = 0.500 × 0.0100 = 0.00500 mol. New volume = 40.0 cm³ = 0.0400 dm³. c = 0.00500/0.0400 = 0.125 mol/dm³. Option A.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "challenge",
            hints: [
              "Diluting does not change the number of moles of solute.",
              "n = 0.500 × 0.0100 = 0.00500 mol.",
              "New total volume = 10.0 + 30.0 = 40.0 cm³; c = n/V.",
            ],
            strategy: "moles stay constant on dilution; only volume changes",
          },
          {
            id: "chem-stoichiometry-bm4-08",
            question: "23.0 cm³ of 0.200 mol/dm³ HCl exactly neutralises 25.0 cm³ of a sodium carbonate solution. Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂. What is the concentration of the Na₂CO₃?",
            options: ["0.0920 mol/dm³", "0.184 mol/dm³", "0.0460 mol/dm³", "0.230 mol/dm³"],
            answerIndex: 0,
            explanation: "n(HCl) = 0.200 × 0.0230 = 0.00460 mol. Ratio Na₂CO₃:HCl = 1:2 → n(Na₂CO₃) = 0.00230 mol. c = 0.00230/0.0250 = 0.0920 mol/dm³. Option A.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "challenge",
            hints: [
              "n(HCl) = 0.200 × 0.0230 = 0.00460 mol.",
              "Ratio 1:2, so n(Na₂CO₃) = n(HCl)/2 = 0.00230 mol.",
              "c = 0.00230 / 0.0250.",
            ],
            strategy: "apply the 1:2 carbonate ratio before dividing by volume",
          },
          {
            id: "chem-stoichiometry-bm4-09",
            question: "A sample of 0.300 mol/dm³ silver nitrate is reacted with excess sodium chloride: AgNO₃ + NaCl → AgCl + NaNO₃. What mass of AgCl precipitate forms from 50.0 cm³ of the AgNO₃ solution? (Mᵣ AgCl = 143.5)",
            options: ["2.15 g", "4.31 g", "1.08 g", "21.5 g"],
            answerIndex: 0,
            explanation: "n(AgNO₃) = 0.300 × 0.0500 = 0.0150 mol. Ratio 1:1 → n(AgCl) = 0.0150 mol. m = 0.0150 × 143.5 = 2.15 g. Option A.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "challenge",
            hints: [
              "n(AgNO₃) = c × V = 0.300 × 0.0500.",
              "1:1 ratio gives n(AgCl).",
              "m = n × 143.5.",
            ],
            strategy: "concentration → moles → mass of precipitate",
          },
          {
            id: "chem-stoichiometry-bm4-10",
            question: "Which procedure gives the most reliable mean titre in a titration?",
            options: [
              "Averaging all titres including the rough trial",
              "Averaging two or more concordant titres (within 0.10 cm³), discarding the rough trial",
              "Using only the first accurate titre",
              "Averaging the largest and smallest titres",
            ],
            answerIndex: 1,
            explanation: "Concordant titres agree within 0.10 cm³; the rough (trial) titre is discarded and the mean of the concordant results is taken to reduce random error. Option B.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "warmup",
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
            question: "Define the term relative atomic mass (Aᵣ). [2]",
            marks: 2,
            modelAnswer: "The relative atomic mass is the weighted mean mass of one atom of an element (taking isotopic abundances into account), compared with 1/12 the mass of one atom of carbon-12. It is a ratio and has no units.",
            markScheme: [
              "weighted mean / average mass of an atom (of the element) [1]",
              "compared with / relative to 1/12 the mass of a carbon-12 atom [1]",
            ],
            commonError: "Saying simply 'the mass of an atom' without the comparison to carbon-12, or omitting that it is an average over isotopes.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bq1-02",
            question: "Calculate the relative formula mass of hydrated sodium carbonate, Na₂CO₃·10H₂O. (Aᵣ: Na = 23, C = 12, O = 16, H = 1) [2]",
            marks: 2,
            modelAnswer: "Na₂CO₃ = 2×23 + 12 + 3×16 = 46 + 12 + 48 = 106. 10H₂O = 10 × 18 = 180. Total Mᵣ = 106 + 180 = 286.",
            markScheme: [
              "Mᵣ(Na₂CO₃) = 106 and 10H₂O = 180 [1]",
              "total = 286 [1]",
            ],
            commonError: "Forgetting to multiply the water of crystallisation by 10, giving 106 + 18 = 124.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "core",
            hints: [
              "Find Mᵣ of the anhydrous part Na₂CO₃ first.",
              "Each H₂O = 18; there are 10 of them.",
              "Add the two parts together.",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Mᵣ(Na₂CO₃) = 2×23 + 12 + 3×16 = 46 + 12 + 48 = 106",
                  "Mass of 10 H₂O = 10 × 18 = 180",
                  "Total Mᵣ = 106 + 180 = 286",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq1-03",
            question: "A sample contains 0.150 mol of sodium sulfate, Na₂SO₄. (Mᵣ Na₂SO₄ = 142)\n(a) Calculate the mass of the sample. [2]\n(b) Calculate the number of sodium ions present. (Nₐ = 6.02 × 10²³ mol⁻¹) [2]",
            marks: 4,
            modelAnswer: "(a) m = n × M = 0.150 × 142 = 21.3 g.\n(b) Each Na₂SO₄ contains 2 Na⁺ ions, so n(Na⁺) = 2 × 0.150 = 0.300 mol. Number = 0.300 × 6.02×10²³ = 1.806 × 10²³ ions.",
            markScheme: [
              "m = 0.150 × 142 = 21.3 g [2]",
              "n(Na⁺) = 0.300 mol; number = 0.300 × 6.02×10²³ = 1.806 × 10²³ (accept 1.81 × 10²³) [2]",
            ],
            commonError: "Forgetting that each formula unit provides 2 sodium ions, giving half the correct number.",
            guideRef: "Relative Mass and the Mole",
            difficulty: "core",
            hints: [
              "m = n × M for part (a).",
              "Each Na₂SO₄ has 2 Na⁺, so moles of Na⁺ = 2 × moles of Na₂SO₄.",
              "Number of ions = moles × Nₐ.",
            ],
            solutions: [
              {
                label: "Full working",
                steps: [
                  "(a) m = 0.150 mol × 142 g mol⁻¹ = 21.3 g",
                  "(b) n(Na⁺) = 2 × 0.150 = 0.300 mol",
                  "Number of Na⁺ = 0.300 × 6.02×10²³ = 1.806 × 10²³ ions",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq1-04",
            question: "Magnesium burns in oxygen: 2Mg + O₂ → 2MgO. (Aᵣ: Mg = 24, O = 16)\n(a) Calculate the mass of oxygen that reacts with 6.0 g of magnesium. [3]\n(b) State the mass of magnesium oxide formed and explain how you know without further calculation. [2]",
            marks: 5,
            modelAnswer: "(a) n(Mg) = 6.0/24 = 0.25 mol. Ratio Mg:O₂ = 2:1 → n(O₂) = 0.125 mol. m(O₂) = 0.125 × 32 = 4.0 g.\n(b) Mass of MgO = 6.0 + 4.0 = 10.0 g. By conservation of mass, the total mass of products equals the total mass of reactants, so MgO mass = mass of Mg + mass of O₂.",
            markScheme: [
              "n(Mg) = 6.0/24 = 0.25 mol [1]",
              "n(O₂) = 0.125 mol (2:1 ratio) [1]",
              "m(O₂) = 0.125 × 32 = 4.0 g [1]",
              "m(MgO) = 10.0 g [1]",
              "by conservation of mass (mass products = mass reactants) [1]",
            ],
            commonError: "Using a 1:1 ratio for Mg:O₂ instead of 2:1, doubling the oxygen mass.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "n(Mg) = 6.0/24 = 0.25 mol.",
              "Ratio Mg:O₂ = 2:1, so n(O₂) = half of n(Mg).",
              "Mᵣ(O₂) = 32; for part (b) use conservation of mass.",
            ],
            solutions: [
              {
                label: "Full working",
                steps: [
                  "n(Mg) = 6.0/24 = 0.25 mol",
                  "Ratio Mg:O₂ = 2:1 → n(O₂) = 0.25/2 = 0.125 mol",
                  "m(O₂) = 0.125 × 32 = 4.0 g",
                  "m(MgO) = m(Mg) + m(O₂) = 6.0 + 4.0 = 10.0 g (conservation of mass)",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq1-05",
            question: "Hydrogen peroxide decomposes: 2H₂O₂ → 2H₂O + O₂. (Mᵣ: H₂O₂ = 34)\nCalculate the mass of oxygen produced when 6.8 g of hydrogen peroxide decomposes completely. [3]",
            marks: 3,
            modelAnswer: "n(H₂O₂) = 6.8/34 = 0.20 mol. Ratio H₂O₂:O₂ = 2:1 → n(O₂) = 0.10 mol. m(O₂) = 0.10 × 32 = 3.2 g.",
            markScheme: [
              "n(H₂O₂) = 6.8/34 = 0.20 mol [1]",
              "n(O₂) = 0.10 mol (2:1 ratio) [1]",
              "m(O₂) = 0.10 × 32 = 3.2 g [1]",
            ],
            commonError: "Forgetting the 2:1 ratio and equating moles of O₂ to moles of H₂O₂.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "n(H₂O₂) = 6.8/34.",
              "Ratio H₂O₂:O₂ = 2:1, so halve the moles.",
              "m(O₂) = n × 32.",
            ],
            solutions: [
              {
                label: "Standard road-map",
                steps: [
                  "n(H₂O₂) = 6.8/34 = 0.20 mol",
                  "Ratio H₂O₂:O₂ = 2:1 → n(O₂) = 0.20/2 = 0.10 mol",
                  "m(O₂) = 0.10 × 32 = 3.2 g",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq1-06",
            question: "State the law of conservation of mass and explain, in terms of atoms, why a balanced equation must have equal numbers of each type of atom on both sides. [3]",
            marks: 3,
            modelAnswer: "The law of conservation of mass states that mass is neither created nor destroyed in a chemical reaction; the total mass of reactants equals the total mass of products. In a reaction, atoms are only rearranged — bonds break and new bonds form — but no atoms are created or destroyed. Because every atom is conserved, the number of atoms of each element must be the same on both sides of the equation.",
            markScheme: [
              "mass is not created or destroyed / total mass of reactants = total mass of products [1]",
              "atoms are rearranged / bonds break and form, atoms not created or destroyed [1]",
              "so the number of each type of atom is equal on both sides [1]",
            ],
            commonError: "Stating only that 'mass stays the same' without linking it to atoms being conserved.",
            guideRef: "Chemical Symbols, Formulae and Equations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bq1-07",
            question: "Iron(III) oxide reacts with aluminium in the thermite reaction:\nFe₂O₃ + 2Al → 2Fe + Al₂O₃\n(Aᵣ: Fe = 56, O = 16, Al = 27)\n(a) Calculate the mass of aluminium needed to react completely with 32.0 g of Fe₂O₃. [3]\n(b) Calculate the mass of iron produced. [2]",
            marks: 5,
            modelAnswer: "(a) Mᵣ(Fe₂O₃) = 160. n(Fe₂O₃) = 32.0/160 = 0.200 mol. Ratio Fe₂O₃:Al = 1:2 → n(Al) = 0.400 mol. m(Al) = 0.400 × 27 = 10.8 g.\n(b) Ratio Fe₂O₃:Fe = 1:2 → n(Fe) = 0.400 mol. m(Fe) = 0.400 × 56 = 22.4 g.",
            markScheme: [
              "n(Fe₂O₃) = 32.0/160 = 0.200 mol [1]",
              "n(Al) = 0.400 mol (1:2 ratio) [1]",
              "m(Al) = 0.400 × 27 = 10.8 g [1]",
              "n(Fe) = 0.400 mol [1]",
              "m(Fe) = 0.400 × 56 = 22.4 g [1]",
            ],
            commonError: "Using a 1:1 ratio for Fe₂O₃:Al or Fe₂O₃:Fe instead of 1:2.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "Mᵣ(Fe₂O₃) = 2×56 + 3×16 = 160.",
              "n(Fe₂O₃) = 32.0/160 = 0.200 mol.",
              "Both Al and Fe are in a 1:2 ratio with Fe₂O₃.",
            ],
            solutions: [
              {
                label: "Full road-map",
                steps: [
                  "Mᵣ(Fe₂O₃) = 112 + 48 = 160 g/mol",
                  "n(Fe₂O₃) = 32.0/160 = 0.200 mol",
                  "n(Al) = 2 × 0.200 = 0.400 mol → m(Al) = 0.400 × 27 = 10.8 g",
                  "n(Fe) = 2 × 0.200 = 0.400 mol → m(Fe) = 0.400 × 56 = 22.4 g",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq1-08",
            question: "A student heats 10.0 g of copper(II) carbonate until no further change occurs.\nCuCO₃ → CuO + CO₂\n(Mᵣ: CuCO₃ = 124, CuO = 80, CO₂ = 44)\n(a) Calculate the mass of copper(II) oxide produced. [3]\n(b) Calculate the mass of carbon dioxide given off, and show your answer is consistent with conservation of mass. [2]",
            marks: 5,
            modelAnswer: "(a) n(CuCO₃) = 10.0/124 = 0.0806 mol. Ratio 1:1 → n(CuO) = 0.0806 mol. m(CuO) = 0.0806 × 80 = 6.45 g.\n(b) n(CO₂) = 0.0806 mol → m(CO₂) = 0.0806 × 44 = 3.55 g. Check: 6.45 + 3.55 = 10.0 g = starting mass, consistent with conservation of mass.",
            markScheme: [
              "n(CuCO₃) = 10.0/124 = 0.0806 mol [1]",
              "n(CuO) = 0.0806 mol [1]",
              "m(CuO) = 0.0806 × 80 = 6.45 g [1]",
              "m(CO₂) = 0.0806 × 44 = 3.55 g [1]",
              "6.45 + 3.55 = 10.0 g shows conservation of mass [1]",
            ],
            commonError: "Rounding moles too early, causing the masses not to sum to 10.0 g.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "n(CuCO₃) = 10.0/124.",
              "1:1 ratios throughout.",
              "m(CuO) + m(CO₂) should equal the original 10.0 g.",
            ],
            solutions: [
              {
                label: "Full working",
                steps: [
                  "n(CuCO₃) = 10.0/124 = 0.08065 mol",
                  "n(CuO) = 0.08065 mol → m(CuO) = 0.08065 × 80 = 6.45 g",
                  "n(CO₂) = 0.08065 mol → m(CO₂) = 0.08065 × 44 = 3.55 g",
                  "Check: 6.45 + 3.55 = 10.0 g (mass conserved)",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq1-09",
            question: "In an experiment, 8.10 g of zinc oxide reacts with carbon in a 1:1 mole ratio to form zinc and carbon monoxide:\nZnO + C → Zn + CO\n(Aᵣ: Zn = 65, O = 16, C = 12)\n(a) Calculate the maximum mass of zinc that can be obtained. [3]\n(b) The actual mass of zinc obtained is 5.85 g. Calculate the percentage yield. [2]",
            marks: 5,
            modelAnswer: "(a) Mᵣ(ZnO) = 81. n(ZnO) = 8.10/81 = 0.100 mol. Ratio 1:1 → n(Zn) = 0.100 mol. m(Zn) = 0.100 × 65 = 6.50 g.\n(b) % yield = (5.85/6.50) × 100 = 90.0%.",
            markScheme: [
              "n(ZnO) = 8.10/81 = 0.100 mol [1]",
              "n(Zn) = 0.100 mol; m(Zn) = 0.100 × 65 = 6.50 g [2]",
              "% yield = (5.85/6.50) × 100 = 90.0% [2]",
            ],
            commonError: "Calculating % yield as theoretical/actual (giving > 100%) instead of actual/theoretical.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "core",
            hints: [
              "Mᵣ(ZnO) = 65 + 16 = 81.",
              "n(ZnO) = 8.10/81; 1:1 ratio gives n(Zn).",
              "% yield = actual / theoretical × 100.",
            ],
            solutions: [
              {
                label: "Full working",
                steps: [
                  "Mᵣ(ZnO) = 65 + 16 = 81 g/mol",
                  "n(ZnO) = 8.10/81 = 0.100 mol",
                  "n(Zn) = 0.100 mol → m(Zn) theoretical = 0.100 × 65 = 6.50 g",
                  "% yield = (5.85/6.50) × 100 = 90.0%",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq1-10",
            question: "Lead(II) nitrate decomposes on heating:\n2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂\n(Mᵣ: Pb(NO₃)₂ = 331, PbO = 223)\n(a) Calculate the number of moles in 16.55 g of lead(II) nitrate. [1]\n(b) Calculate the mass of lead(II) oxide produced. [2]\n(c) Calculate the total number of moles of gas (NO₂ + O₂) produced. [3]",
            marks: 6,
            modelAnswer: "(a) n(Pb(NO₃)₂) = 16.55/331 = 0.0500 mol.\n(b) Ratio Pb(NO₃)₂:PbO = 2:2 = 1:1 → n(PbO) = 0.0500 mol. m(PbO) = 0.0500 × 223 = 11.15 g.\n(c) From 2 mol Pb(NO₃)₂ → 4 NO₂ + 1 O₂ = 5 mol gas. So 0.0500 mol Pb(NO₃)₂ → (5/2) × 0.0500 = 0.125 mol gas. (n(NO₂) = 0.100 mol; n(O₂) = 0.025 mol; total 0.125 mol.)",
            markScheme: [
              "n(Pb(NO₃)₂) = 16.55/331 = 0.0500 mol [1]",
              "n(PbO) = 0.0500 mol; m(PbO) = 0.0500 × 223 = 11.15 g [2]",
              "n(NO₂) = 2 × 0.0500 = 0.100 mol [1]",
              "n(O₂) = 0.0500/2 = 0.025 mol [1]",
              "total gas = 0.125 mol [1]",
            ],
            commonError: "Misreading the gas ratios — there are 4 NO₂ and 1 O₂ per 2 Pb(NO₃)₂, i.e. NO₂ is 2× and O₂ is 0.5× the Pb(NO₃)₂ moles.",
            guideRef: "Reacting Masses and the Limiting Reactant",
            difficulty: "challenge",
            hints: [
              "n(Pb(NO₃)₂) = 16.55/331.",
              "Pb(NO₃)₂:PbO is 2:2 = 1:1.",
              "Per 2 mol Pb(NO₃)₂ you get 4 mol NO₂ and 1 mol O₂.",
            ],
            strategy: "read each coefficient ratio separately for the two gases",
            solutions: [
              {
                label: "Full working",
                steps: [
                  "n(Pb(NO₃)₂) = 16.55/331 = 0.0500 mol",
                  "n(PbO) = 0.0500 mol (1:1) → m(PbO) = 0.0500 × 223 = 11.15 g",
                  "n(NO₂) = (4/2) × 0.0500 = 0.100 mol",
                  "n(O₂) = (1/2) × 0.0500 = 0.025 mol",
                  "Total gas = 0.100 + 0.025 = 0.125 mol",
                ],
              },
            ],
          },
        ],
      },

      // ── QA PAPER 2 ── empirical/molecular formulae · % composition ──
      {
        id: "chem-stoichiometry-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Ten structured questions on empirical and molecular formulae, percentage composition and combustion analysis.",
        questions: [
          {
            id: "chem-stoichiometry-bq2-01",
            question: "Explain the difference between an empirical formula and a molecular formula, using ethane (C₂H₆) as an example. [3]",
            marks: 3,
            modelAnswer: "The empirical formula is the simplest whole-number ratio of atoms of each element in a compound. The molecular formula gives the actual number of atoms of each element in one molecule. For ethane, the molecular formula is C₂H₆ (2 carbons, 6 hydrogens), but the simplest ratio C:H is 1:3, so the empirical formula is CH₃.",
            markScheme: [
              "empirical = simplest whole-number ratio of atoms [1]",
              "molecular = actual number of atoms in one molecule [1]",
              "ethane: molecular C₂H₆, empirical CH₃ [1]",
            ],
            commonError: "Stating that the empirical formula of ethane is CH₂ (that is ethene's empirical formula) — for C₂H₆ the ratio is 1:3, giving CH₃.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bq2-02",
            question: "Calculate the percentage by mass of oxygen in calcium carbonate, CaCO₃. (Aᵣ: Ca = 40, C = 12, O = 16) [3]",
            marks: 3,
            modelAnswer: "Mᵣ(CaCO₃) = 40 + 12 + 3×16 = 100. Mass of oxygen = 3 × 16 = 48. % O = (48/100) × 100 = 48.0%.",
            markScheme: [
              "Mᵣ(CaCO₃) = 100 [1]",
              "mass of O = 48 [1]",
              "% O = (48/100) × 100 = 48.0% [1]",
            ],
            commonError: "Using only one oxygen atom (16) instead of all three (48).",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: [
              "Mᵣ(CaCO₃) = 40 + 12 + 48 = 100.",
              "There are 3 oxygen atoms: 3 × 16 = 48.",
              "% O = mass of O / Mᵣ × 100.",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Mᵣ(CaCO₃) = 40 + 12 + (3 × 16) = 100",
                  "Total mass of oxygen = 3 × 16 = 48",
                  "% O = (48/100) × 100 = 48.0%",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq2-03",
            question: "A compound contains 52.2% carbon, 13.0% hydrogen and 34.8% oxygen by mass. (Aᵣ: C = 12, H = 1, O = 16)\n(a) Determine the empirical formula. [3]\n(b) The relative molecular mass of the compound is 46. Determine the molecular formula. [2]",
            marks: 5,
            modelAnswer: "(a) C: 52.2/12 = 4.35; H: 13.0/1 = 13.0; O: 34.8/16 = 2.175. Divide by smallest (2.175): C = 2.00, H = 5.98 ≈ 6, O = 1. Empirical formula C₂H₆O.\n(b) EFM(C₂H₆O) = 24 + 6 + 16 = 46 = Mᵣ, so n = 1. Molecular formula = C₂H₆O (ethanol).",
            markScheme: [
              "divide % by Aᵣ: C 4.35, H 13.0, O 2.175 [1]",
              "divide by smallest → ratio 2:6:1 [1]",
              "empirical formula C₂H₆O [1]",
              "EFM = 46; n = 46/46 = 1 [1]",
              "molecular formula C₂H₆O [1]",
            ],
            commonError: "Not dividing all values by the smallest, or rounding 5.98 incorrectly to 5 instead of 6.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: [
              "Divide each percentage by its Aᵣ.",
              "Divide all three results by the smallest (2.175).",
              "Compare EFM with Mᵣ to find n.",
            ],
            solutions: [
              {
                label: "Tabulated method",
                steps: [
                  "C: 52.2/12 = 4.35;  H: 13.0/1 = 13.0;  O: 34.8/16 = 2.175",
                  "Divide by 2.175: C = 2.00, H = 5.98 ≈ 6, O = 1.00",
                  "Empirical formula = C₂H₆O",
                  "EFM = 2×12 + 6×1 + 16 = 46",
                  "n = Mᵣ/EFM = 46/46 = 1 → molecular formula C₂H₆O",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq2-04",
            question: "10.0 g of a metal M reacts completely with oxygen to form 12.7 g of the oxide. The oxide has the formula M₂O₃. (Aᵣ: O = 16)\n(a) Calculate the mass of oxygen that combined with the metal. [1]\n(b) Calculate the moles of oxygen atoms that combined. [1]\n(c) Hence calculate the relative atomic mass of M. [3]",
            marks: 5,
            modelAnswer: "(a) Mass of O = 12.7 − 10.0 = 2.7 g.\n(b) n(O atoms) = 2.7/16 = 0.16875 mol.\n(c) In M₂O₃, ratio M:O = 2:3, so n(M) = (2/3) × n(O) = (2/3) × 0.16875 = 0.1125 mol. Aᵣ(M) = mass/moles = 10.0/0.1125 = 88.9 ≈ 89. (The metal is yttrium, Aᵣ ≈ 89.)",
            markScheme: [
              "mass of O = 2.7 g [1]",
              "n(O) = 2.7/16 = 0.169 mol [1]",
              "n(M) = (2/3) × n(O) = 0.1125 mol [1]",
              "Aᵣ(M) = 10.0/0.1125 [1]",
              "Aᵣ(M) = 88.9 ≈ 89 [1]",
            ],
            commonError: "Using a 1:1 M:O ratio instead of 2:3 from the formula M₂O₃.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "challenge",
            hints: [
              "Mass of oxygen = mass of oxide − mass of metal.",
              "n(O) = mass/16.",
              "M₂O₃ means M:O = 2:3, so n(M) = (2/3) n(O); then Aᵣ = mass/moles.",
            ],
            strategy: "use the formula ratio to convert moles of O to moles of M",
            solutions: [
              {
                label: "Full working",
                steps: [
                  "Mass of O = 12.7 − 10.0 = 2.7 g",
                  "n(O atoms) = 2.7/16 = 0.16875 mol",
                  "Ratio M:O = 2:3 → n(M) = (2/3) × 0.16875 = 0.1125 mol",
                  "Aᵣ(M) = 10.0/0.1125 = 88.9 ≈ 89",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq2-05",
            question: "When 2.30 g of an alcohol (containing C, H and O only) is burned completely, 4.40 g of CO₂ and 2.70 g of H₂O are formed.\n(Aᵣ: C = 12, H = 1, O = 16; Mᵣ: CO₂ = 44, H₂O = 18)\n(a) Calculate the masses of carbon and hydrogen in the sample. [3]\n(b) Calculate the mass of oxygen in the sample. [1]\n(c) Determine the empirical formula of the alcohol. [3]",
            marks: 7,
            modelAnswer: "(a) n(CO₂) = 4.40/44 = 0.100 mol → m(C) = 0.100 × 12 = 1.20 g. n(H₂O) = 2.70/18 = 0.150 mol → moles H = 2 × 0.150 = 0.300 mol → m(H) = 0.300 × 1 = 0.300 g.\n(b) m(O) = 2.30 − 1.20 − 0.300 = 0.80 g.\n(c) n(C) = 0.100; n(H) = 0.300; n(O) = 0.80/16 = 0.050. Divide by 0.050: C = 2, H = 6, O = 1. Empirical formula C₂H₆O.",
            markScheme: [
              "m(C) = 0.100 × 12 = 1.20 g [1]",
              "moles H = 2 × 0.150 = 0.300; m(H) = 0.300 g [2]",
              "m(O) = 2.30 − 1.20 − 0.30 = 0.80 g [1]",
              "n(C):n(H):n(O) = 0.100:0.300:0.050 [1]",
              "ratio 2:6:1 [1]",
              "empirical formula C₂H₆O [1]",
            ],
            commonError: "Forgetting to double the moles of H (each H₂O has 2 H), or forgetting to find oxygen by difference.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "challenge",
            hints: [
              "moles of C = moles of CO₂; moles of H = 2 × moles of H₂O.",
              "m(O) = total mass − m(C) − m(H).",
              "Convert all masses to moles and divide by the smallest.",
            ],
            strategy: "combustion analysis: CO₂ → C, H₂O → H, oxygen by difference",
            solutions: [
              {
                label: "Full combustion analysis",
                steps: [
                  "n(CO₂) = 4.40/44 = 0.100 mol → m(C) = 0.100 × 12 = 1.20 g",
                  "n(H₂O) = 2.70/18 = 0.150 mol → n(H) = 0.300 mol → m(H) = 0.300 g",
                  "m(O) = 2.30 − 1.20 − 0.30 = 0.80 g → n(O) = 0.80/16 = 0.050 mol",
                  "Ratio C:H:O = 0.100:0.300:0.050 → divide by 0.050 → 2:6:1",
                  "Empirical formula = C₂H₆O (ethanol)",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq2-06",
            question: "A hydrated salt of iron(II) sulfate has the formula FeSO₄·xH₂O. A 2.78 g sample is heated and 1.26 g of water is driven off. (Mᵣ: FeSO₄ = 152, H₂O = 18)\nDetermine the value of x. [4]",
            marks: 4,
            modelAnswer: "Mass of anhydrous FeSO₄ = 2.78 − 1.26 = 1.52 g. n(FeSO₄) = 1.52/152 = 0.0100 mol. n(H₂O) = 1.26/18 = 0.0700 mol. Ratio H₂O:FeSO₄ = 0.0700/0.0100 = 7. So x = 7 (FeSO₄·7H₂O).",
            markScheme: [
              "mass of FeSO₄ = 2.78 − 1.26 = 1.52 g [1]",
              "n(FeSO₄) = 1.52/152 = 0.0100 mol [1]",
              "n(H₂O) = 1.26/18 = 0.0700 mol [1]",
              "x = n(H₂O)/n(FeSO₄) = 7 [1]",
            ],
            commonError: "Forgetting that the mass of anhydrous salt is the original minus the water lost, not the original mass.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "challenge",
            hints: [
              "Mass of anhydrous salt = sample mass − water lost.",
              "n(FeSO₄) = mass/152; n(H₂O) = mass/18.",
              "x = n(H₂O)/n(FeSO₄).",
            ],
            strategy: "ratio of moles of water to moles of anhydrous salt gives x",
            solutions: [
              {
                label: "Full working",
                steps: [
                  "Mass of anhydrous FeSO₄ = 2.78 − 1.26 = 1.52 g",
                  "n(FeSO₄) = 1.52/152 = 0.0100 mol",
                  "n(H₂O) = 1.26/18 = 0.0700 mol",
                  "x = 0.0700/0.0100 = 7 → FeSO₄·7H₂O",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq2-07",
            question: "Fertiliser value depends on nitrogen content. Compare the percentage by mass of nitrogen in ammonia (NH₃) and in urea (CO(NH₂)₂), and state which has the higher nitrogen content. (Aᵣ: N = 14, H = 1, C = 12, O = 16) [4]",
            marks: 4,
            modelAnswer: "NH₃: Mᵣ = 14 + 3 = 17; % N = (14/17) × 100 = 82.4%. Urea CO(NH₂)₂: Mᵣ = 12 + 16 + 2×(14 + 2) = 28 + 32 = 60; mass of N = 2×14 = 28; % N = (28/60) × 100 = 46.7%. Ammonia has the higher percentage of nitrogen by mass (82.4% vs 46.7%).",
            markScheme: [
              "% N in NH₃ = (14/17) × 100 = 82.4% [1]",
              "Mᵣ(urea) = 60 [1]",
              "% N in urea = (28/60) × 100 = 46.7% [1]",
              "ammonia has the higher % nitrogen [1]",
            ],
            commonError: "Counting only one N in urea (14) instead of two (28).",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: [
              "% N = (total mass of N / Mᵣ) × 100 for each compound.",
              "Urea CO(NH₂)₂ has 2 N atoms = 28.",
              "Mᵣ(urea) = 12 + 16 + 2×14 + 4×1 = 60.",
            ],
            solutions: [
              {
                label: "Both compounds",
                steps: [
                  "NH₃: Mᵣ = 17, % N = (14/17) × 100 = 82.4%",
                  "Urea: Mᵣ = 12 + 16 + 2×14 + 4×1 = 60",
                  "% N (urea) = (28/60) × 100 = 46.7%",
                  "Ammonia (82.4%) > urea (46.7%)",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq2-08",
            question: "0.620 g of phosphorus reacts completely with oxygen to form 1.42 g of an oxide. (Aᵣ: P = 31, O = 16)\nDetermine the empirical formula of the oxide. [4]",
            marks: 4,
            modelAnswer: "Mass of O = 1.42 − 0.620 = 0.80 g. n(P) = 0.620/31 = 0.0200 mol. n(O) = 0.80/16 = 0.0500 mol. Ratio P:O = 0.0200:0.0500 = 2:5. Empirical formula P₂O₅.",
            markScheme: [
              "mass of O = 1.42 − 0.620 = 0.80 g [1]",
              "n(P) = 0.0200 mol; n(O) = 0.0500 mol [1]",
              "ratio P:O = 0.0200:0.0500 = 2:5 [1]",
              "empirical formula P₂O₅ [1]",
            ],
            commonError: "Leaving the ratio as 1:2.5 instead of multiplying by 2 to clear the decimal.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: [
              "Mass of O = oxide mass − P mass.",
              "n(P) = 0.620/31; n(O) = 0.80/16.",
              "Ratio 0.0200:0.0500 = 1:2.5 → ×2 → 2:5.",
            ],
            solutions: [
              {
                label: "Full working",
                steps: [
                  "Mass of O = 1.42 − 0.620 = 0.80 g",
                  "n(P) = 0.620/31 = 0.0200 mol",
                  "n(O) = 0.80/16 = 0.0500 mol",
                  "Ratio P:O = 0.0200:0.0500 = 1:2.5 = 2:5 → P₂O₅",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq2-09",
            question: "A compound of nitrogen and hydrogen contains 87.5% nitrogen by mass and has a relative molecular mass of 32. (Aᵣ: N = 14, H = 1)\n(a) Determine the empirical formula. [3]\n(b) Determine the molecular formula. [2]",
            marks: 5,
            modelAnswer: "(a) N: 87.5/14 = 6.25; H: 12.5/1 = 12.5. Divide by 6.25: N = 1, H = 2. Empirical formula NH₂.\n(b) EFM(NH₂) = 14 + 2 = 16. n = 32/16 = 2. Molecular formula N₂H₄ (hydrazine).",
            markScheme: [
              "% H = 100 − 87.5 = 12.5%; divide by Aᵣ: N 6.25, H 12.5 [1]",
              "ratio 1:2 [1]",
              "empirical formula NH₂ [1]",
              "EFM = 16; n = 32/16 = 2 [1]",
              "molecular formula N₂H₄ [1]",
            ],
            commonError: "Forgetting that H% = 100 − 87.5 = 12.5%.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: [
              "Hydrogen % = 100 − 87.5.",
              "Divide each % by Aᵣ and then by the smaller.",
              "n = Mᵣ / EFM.",
            ],
            solutions: [
              {
                label: "Full working",
                steps: [
                  "% H = 100 − 87.5 = 12.5%",
                  "N: 87.5/14 = 6.25;  H: 12.5/1 = 12.5",
                  "Divide by 6.25 → N:1, H:2 → empirical NH₂",
                  "EFM = 16; n = 32/16 = 2 → molecular N₂H₄",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq2-10",
            question: "An oxide of copper is reduced by hydrogen. 1.59 g of the copper oxide gives 1.27 g of copper. (Aᵣ: Cu = 63.5, O = 16)\nDetermine the empirical formula of the copper oxide and name it. [4]",
            marks: 4,
            modelAnswer: "Mass of O = 1.59 − 1.27 = 0.32 g. n(Cu) = 1.27/63.5 = 0.0200 mol. n(O) = 0.32/16 = 0.0200 mol. Ratio Cu:O = 1:1. Empirical formula CuO, copper(II) oxide.",
            markScheme: [
              "mass of O = 1.59 − 1.27 = 0.32 g [1]",
              "n(Cu) = 0.0200 mol; n(O) = 0.0200 mol [1]",
              "ratio 1:1 → CuO [1]",
              "named copper(II) oxide [1]",
            ],
            commonError: "Confusing CuO with Cu₂O — the 1:1 mole ratio here gives CuO.",
            guideRef: "Empirical and Molecular Formulae",
            difficulty: "core",
            hints: [
              "Mass of O = oxide mass − copper mass.",
              "n(Cu) = 1.27/63.5; n(O) = 0.32/16.",
              "Equal moles give a 1:1 ratio → CuO.",
            ],
            solutions: [
              {
                label: "Full working",
                steps: [
                  "Mass of O = 1.59 − 1.27 = 0.32 g",
                  "n(Cu) = 1.27/63.5 = 0.0200 mol",
                  "n(O) = 0.32/16 = 0.0200 mol",
                  "Ratio Cu:O = 1:1 → CuO (copper(II) oxide)",
                ],
              },
            ],
          },
        ],
      },

      // ── QA PAPER 3 ── gas volumes · molar gas volume ──
      {
        id: "chem-stoichiometry-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Ten structured questions on the molar gas volume, gas-volume reaction calculations and limiting reactants.",
        questions: [
          {
            id: "chem-stoichiometry-bq3-01",
            question: "State the volume occupied by one mole of any gas at room temperature and pressure (r.t.p.), and explain why this value is the same for all gases. [2]",
            marks: 2,
            modelAnswer: "One mole of any gas occupies 24 dm³ at r.t.p. (25 °C, 1 atm). This is the same for all gases because, by Avogadro's law, equal volumes of gases at the same temperature and pressure contain equal numbers of molecules — the molecules themselves take up negligible volume compared with the space between them.",
            markScheme: [
              "24 dm³/mol (at r.t.p.) [1]",
              "equal volumes of gases contain equal numbers of molecules at same T and P / Avogadro's law [1]",
            ],
            commonError: "Quoting 22.4 dm³ (the STP value) instead of 24 dm³ (the IGCSE r.t.p. value).",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "warmup",
          },
          {
            id: "chem-stoichiometry-bq3-02",
            question: "Calculate the volume occupied at r.t.p. by:\n(a) 0.50 mol of hydrogen gas [1]\n(b) 8.0 g of oxygen gas (Mᵣ O₂ = 32) [2]\n(molar gas volume = 24 dm³/mol)",
            marks: 3,
            modelAnswer: "(a) V = 0.50 × 24 = 12 dm³.\n(b) n(O₂) = 8.0/32 = 0.25 mol. V = 0.25 × 24 = 6.0 dm³.",
            markScheme: [
              "(a) V = 0.50 × 24 = 12 dm³ [1]",
              "(b) n(O₂) = 8.0/32 = 0.25 mol [1]",
              "(b) V = 0.25 × 24 = 6.0 dm³ [1]",
            ],
            commonError: "Forgetting to convert mass to moles in part (b) before multiplying by 24.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "warmup",
            solutions: [
              {
                label: "Both parts",
                steps: [
                  "(a) V = n × 24 = 0.50 × 24 = 12 dm³",
                  "(b) n(O₂) = 8.0/32 = 0.25 mol; V = 0.25 × 24 = 6.0 dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq3-03",
            question: "Magnesium reacts with hydrochloric acid:\nMg + 2HCl → MgCl₂ + H₂\n(Aᵣ Mg = 24)\nCalculate the volume of hydrogen gas produced at r.t.p. when 0.48 g of magnesium reacts completely with excess acid. (molar gas volume = 24 dm³/mol) [3]",
            marks: 3,
            modelAnswer: "n(Mg) = 0.48/24 = 0.020 mol. Ratio Mg:H₂ = 1:1 → n(H₂) = 0.020 mol. V = 0.020 × 24 = 0.48 dm³ (480 cm³).",
            markScheme: [
              "n(Mg) = 0.48/24 = 0.020 mol [1]",
              "n(H₂) = 0.020 mol (1:1) [1]",
              "V = 0.020 × 24 = 0.48 dm³ [1]",
            ],
            commonError: "Misreading the 1:1 Mg:H₂ ratio because there are 2 HCl in the equation.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: [
              "n(Mg) = 0.48/24.",
              "The Mg:H₂ ratio is 1:1 (the 2 belongs to HCl).",
              "V = n × 24.",
            ],
            solutions: [
              {
                label: "Road-map",
                steps: [
                  "n(Mg) = 0.48/24 = 0.020 mol",
                  "Ratio Mg:H₂ = 1:1 → n(H₂) = 0.020 mol",
                  "V(H₂) = 0.020 × 24 = 0.48 dm³ = 480 cm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq3-04",
            question: "Calcium carbonate reacts with hydrochloric acid:\nCaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂\n(Mᵣ CaCO₃ = 100)\n(a) Calculate the volume of CO₂ at r.t.p. produced from 2.50 g of CaCO₃. [3]\n(b) Calculate the volume of 2.00 mol/dm³ HCl required to react with the 2.50 g of CaCO₃. [3]\n(molar gas volume = 24 dm³/mol)",
            marks: 6,
            modelAnswer: "(a) n(CaCO₃) = 2.50/100 = 0.0250 mol. Ratio 1:1 → n(CO₂) = 0.0250 mol. V = 0.0250 × 24 = 0.600 dm³ (600 cm³).\n(b) Ratio CaCO₃:HCl = 1:2 → n(HCl) = 0.0500 mol. V = n/c = 0.0500/2.00 = 0.0250 dm³ = 25.0 cm³.",
            markScheme: [
              "n(CaCO₃) = 2.50/100 = 0.0250 mol [1]",
              "n(CO₂) = 0.0250 mol; V = 0.0250 × 24 = 0.600 dm³ [2]",
              "n(HCl) = 2 × 0.0250 = 0.0500 mol [1]",
              "V(HCl) = 0.0500/2.00 = 0.0250 dm³ = 25.0 cm³ [2]",
            ],
            commonError: "Using a 1:1 ratio for CaCO₃:HCl in part (b) instead of 1:2.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: [
              "n(CaCO₃) = 2.50/100.",
              "CaCO₃:CO₂ = 1:1 (gas volume); CaCO₃:HCl = 1:2 (solution).",
              "For the acid: V = n/c.",
            ],
            solutions: [
              {
                label: "Full working",
                steps: [
                  "n(CaCO₃) = 2.50/100 = 0.0250 mol",
                  "n(CO₂) = 0.0250 mol → V = 0.0250 × 24 = 0.600 dm³",
                  "n(HCl) = 2 × 0.0250 = 0.0500 mol",
                  "V(HCl) = n/c = 0.0500/2.00 = 0.0250 dm³ = 25.0 cm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq3-05",
            question: "A sample of 0.100 mol of sodium hydrogencarbonate is heated:\n2NaHCO₃ → Na₂CO₃ + H₂O + CO₂\nCalculate the volume of carbon dioxide produced at r.t.p. (molar gas volume = 24 dm³/mol) [3]",
            marks: 3,
            modelAnswer: "Ratio NaHCO₃:CO₂ = 2:1 → n(CO₂) = 0.100/2 = 0.0500 mol. V = 0.0500 × 24 = 1.20 dm³.",
            markScheme: [
              "ratio NaHCO₃:CO₂ = 2:1 [1]",
              "n(CO₂) = 0.0500 mol [1]",
              "V = 0.0500 × 24 = 1.20 dm³ [1]",
            ],
            commonError: "Using a 1:1 ratio (giving 2.40 dm³) instead of the 2:1 ratio from the equation.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: [
              "Two NaHCO₃ give one CO₂.",
              "n(CO₂) = 0.100/2 = 0.0500 mol.",
              "V = n × 24.",
            ],
            solutions: [
              {
                label: "Working",
                steps: [
                  "Ratio NaHCO₃:CO₂ = 2:1 → n(CO₂) = 0.100/2 = 0.0500 mol",
                  "V = 0.0500 × 24 = 1.20 dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq3-06",
            question: "100 cm³ of methane is burned in 250 cm³ of oxygen. All gas volumes are measured at the same temperature and pressure.\nCH₄ + 2O₂ → CO₂ + 2H₂O(l)\n(a) Show that oxygen is in excess and find the volume of unreacted oxygen. [3]\n(b) Calculate the volume of carbon dioxide produced. [2]",
            marks: 5,
            modelAnswer: "(a) CH₄:O₂ = 1:2, so 100 cm³ CH₄ needs 200 cm³ O₂. Only 200 cm³ is needed but 250 cm³ is supplied, so O₂ is in excess by 250 − 200 = 50 cm³.\n(b) CH₄:CO₂ = 1:1, so 100 cm³ CH₄ → 100 cm³ CO₂. (Water is liquid, so not counted as gas volume.)",
            markScheme: [
              "O₂ required = 2 × 100 = 200 cm³ [1]",
              "O₂ supplied (250) > required (200), so excess [1]",
              "unreacted O₂ = 50 cm³ [1]",
              "CH₄:CO₂ = 1:1 [1]",
              "V(CO₂) = 100 cm³ [1]",
            ],
            commonError: "Including the water as a gas volume — at r.t.p. it is liquid and excluded.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "challenge",
            hints: [
              "For gases, volume ratio = mole ratio (Avogadro's law).",
              "O₂ needed = 2 × volume of CH₄.",
              "CO₂ produced = same volume as CH₄ (1:1); water is liquid.",
            ],
            strategy: "use volume ratios directly; exclude the liquid product",
            solutions: [
              {
                label: "Volume-ratio reasoning",
                steps: [
                  "CH₄:O₂ = 1:2 → 100 cm³ CH₄ needs 200 cm³ O₂",
                  "Supplied 250 cm³, so 50 cm³ O₂ remains unreacted (O₂ in excess)",
                  "CH₄:CO₂ = 1:1 → V(CO₂) = 100 cm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq3-07",
            question: "0.65 g of zinc is added to 50.0 cm³ of 0.200 mol/dm³ hydrochloric acid.\nZn + 2HCl → ZnCl₂ + H₂\n(Aᵣ Zn = 65; molar gas volume = 24 dm³/mol)\n(a) Determine the limiting reactant, showing your working. [4]\n(b) Calculate the volume of hydrogen produced at r.t.p. [2]",
            marks: 6,
            modelAnswer: "(a) n(Zn) = 0.65/65 = 0.0100 mol. n(HCl) = 0.200 × (50.0/1000) = 0.0100 mol. The equation needs 2 HCl per Zn, so 0.0100 mol Zn requires 0.0200 mol HCl — but only 0.0100 mol HCl is available. Dividing by coefficients: Zn = 0.0100/1 = 0.0100; HCl = 0.0100/2 = 0.00500. HCl gives the smaller value → HCl is the limiting reactant.\n(b) n(H₂) from HCl: ratio HCl:H₂ = 2:1 → n(H₂) = 0.0100/2 = 0.00500 mol. V = 0.00500 × 24 = 0.120 dm³ (120 cm³).",
            markScheme: [
              "n(Zn) = 0.65/65 = 0.0100 mol [1]",
              "n(HCl) = 0.200 × 0.0500 = 0.0100 mol [1]",
              "divide by coefficients: Zn 0.0100, HCl 0.00500 → HCl limiting [2]",
              "n(H₂) = 0.0100/2 = 0.00500 mol [1]",
              "V(H₂) = 0.00500 × 24 = 0.120 dm³ [1]",
            ],
            commonError: "Concluding Zn is limiting because n(Zn) = n(HCl) numerically, without dividing by the coefficients (2 HCl per Zn).",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "challenge",
            hints: [
              "Find moles of each reactant: n(Zn) = m/M, n(HCl) = cV.",
              "Divide each by its coefficient (Zn ÷ 1, HCl ÷ 2).",
              "The smaller value is limiting; base H₂ on the limiting HCl (HCl:H₂ = 2:1).",
            ],
            strategy: "divide moles by coefficient to identify the limiting reactant",
            solutions: [
              {
                label: "Full working",
                steps: [
                  "n(Zn) = 0.65/65 = 0.0100 mol",
                  "n(HCl) = 0.200 × 0.0500 = 0.0100 mol",
                  "Divide by coefficient: Zn 0.0100/1 = 0.0100; HCl 0.0100/2 = 0.00500 → HCl limiting",
                  "HCl:H₂ = 2:1 → n(H₂) = 0.0100/2 = 0.00500 mol",
                  "V(H₂) = 0.00500 × 24 = 0.120 dm³ = 120 cm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq3-08",
            question: "A 0.240 g piece of magnesium ribbon is reacted with excess dilute sulfuric acid and the hydrogen gas collected.\nMg + H₂SO₄ → MgSO₄ + H₂\n(Aᵣ Mg = 24; molar gas volume = 24 000 cm³/mol)\n(a) Calculate the volume of hydrogen collected at r.t.p., in cm³. [3]\n(b) The gas was actually collected over water and the measured volume was 228 cm³. Suggest one reason why this is slightly less than your calculated value. [1]",
            marks: 4,
            modelAnswer: "(a) n(Mg) = 0.240/24 = 0.0100 mol. Ratio 1:1 → n(H₂) = 0.0100 mol. V = 0.0100 × 24000 = 240 cm³.\n(b) Some gas may have dissolved in the water, or some was lost before collection began, or some reaction had not completed — any of these reduces the measured volume.",
            markScheme: [
              "n(Mg) = 0.240/24 = 0.0100 mol [1]",
              "n(H₂) = 0.0100 mol [1]",
              "V = 0.0100 × 24000 = 240 cm³ [1]",
              "valid reason for loss (gas dissolved / escaped / incomplete collection) [1]",
            ],
            commonError: "Using 24 dm³ but reporting the answer as cm³ without converting (e.g. writing 0.24 cm³).",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "core",
            hints: [
              "n(Mg) = 0.240/24.",
              "1:1 ratio gives n(H₂).",
              "V (cm³) = n × 24 000.",
            ],
            solutions: [
              {
                label: "Working",
                steps: [
                  "n(Mg) = 0.240/24 = 0.0100 mol",
                  "n(H₂) = 0.0100 mol (1:1)",
                  "V = 0.0100 × 24 000 = 240 cm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq3-09",
            question: "Hydrogen and oxygen react to form water:\n2H₂ + O₂ → 2H₂O\n40 cm³ of hydrogen is mixed with 40 cm³ of oxygen and the mixture is ignited. All volumes are measured at the same temperature and pressure (water formed is liquid).\nDetermine the volume and identity of any gas remaining after the reaction. [4]",
            marks: 4,
            modelAnswer: "H₂:O₂ = 2:1, so 40 cm³ H₂ reacts with 20 cm³ O₂. Oxygen supplied is 40 cm³, so O₂ is in excess. O₂ used = 20 cm³, so O₂ remaining = 40 − 20 = 20 cm³. The gas remaining is 20 cm³ of oxygen (water is liquid and occupies negligible volume).",
            markScheme: [
              "H₂:O₂ = 2:1, so 40 cm³ H₂ needs 20 cm³ O₂ [1]",
              "O₂ is in excess [1]",
              "O₂ remaining = 40 − 20 = 20 cm³ [1]",
              "remaining gas is oxygen [1]",
            ],
            commonError: "Forgetting that the water is liquid and trying to count a product gas volume.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "challenge",
            hints: [
              "Volume ratio = mole ratio for gases.",
              "40 cm³ H₂ uses only 20 cm³ O₂ (2:1).",
              "Subtract used O₂ from supplied O₂; water is liquid.",
            ],
            strategy: "compare required vs supplied volumes using the gas ratio",
            solutions: [
              {
                label: "Volume reasoning",
                steps: [
                  "H₂:O₂ = 2:1 → 40 cm³ H₂ reacts with 20 cm³ O₂",
                  "O₂ supplied = 40 cm³, used = 20 cm³, so 20 cm³ O₂ remains",
                  "Remaining gas = 20 cm³ of oxygen (water is liquid)",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq3-10",
            question: "0.250 g of a Group 1 metal M reacts with water to give 0.0768 dm³ of hydrogen at r.t.p.\n2M + 2H₂O → 2MOH + H₂\n(molar gas volume = 24 dm³/mol)\nCalculate the relative atomic mass of M and identify it. [4]",
            marks: 4,
            modelAnswer: "n(H₂) = 0.0768/24 = 0.00320 mol. Ratio M:H₂ = 2:1 → n(M) = 2 × 0.00320 = 0.00640 mol. Aᵣ(M) = mass/moles = 0.250/0.00640 = 39.1 ≈ 39. The metal is potassium (K).",
            markScheme: [
              "n(H₂) = 0.0768/24 = 0.00320 mol [1]",
              "n(M) = 2 × 0.00320 = 0.00640 mol [1]",
              "Aᵣ(M) = 0.250/0.00640 = 39.1 [1]",
              "metal is potassium (K) [1]",
            ],
            commonError: "Using a 1:1 ratio for M:H₂ instead of 2:1, which halves the moles of M and doubles the Aᵣ.",
            guideRef: "Molar Gas Volume and Gas Calculations",
            difficulty: "challenge",
            hints: [
              "n(H₂) = V/24 = 0.0768/24.",
              "Ratio M:H₂ = 2:1, so n(M) = 2 × n(H₂).",
              "Aᵣ(M) = mass/moles; compare with the periodic table.",
            ],
            strategy: "gas volume → moles H₂ → moles M (×2) → Aᵣ",
            solutions: [
              {
                label: "Full working",
                steps: [
                  "n(H₂) = 0.0768/24 = 0.00320 mol",
                  "Ratio M:H₂ = 2:1 → n(M) = 2 × 0.00320 = 0.00640 mol",
                  "Aᵣ(M) = 0.250/0.00640 = 39.1 ≈ 39 → potassium (K)",
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
        description: "Ten structured questions on concentration, titration, dilution and multi-step back-titration problems.",
        questions: [
          {
            id: "chem-stoichiometry-bq4-01",
            question: "A solution is made by dissolving 4.00 g of sodium hydroxide in water and making up to 250 cm³. (Mᵣ NaOH = 40)\nCalculate the concentration of the solution in mol/dm³. [3]",
            marks: 3,
            modelAnswer: "n(NaOH) = 4.00/40 = 0.100 mol. V = 250/1000 = 0.250 dm³. c = n/V = 0.100/0.250 = 0.400 mol/dm³.",
            markScheme: [
              "n(NaOH) = 4.00/40 = 0.100 mol [1]",
              "V = 0.250 dm³ [1]",
              "c = 0.100/0.250 = 0.400 mol/dm³ [1]",
            ],
            commonError: "Forgetting to convert 250 cm³ to 0.250 dm³ before dividing.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "warmup",
            solutions: [
              {
                label: "Working",
                steps: [
                  "n(NaOH) = 4.00/40 = 0.100 mol",
                  "V = 250/1000 = 0.250 dm³",
                  "c = 0.100/0.250 = 0.400 mol/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-02",
            question: "A solution of potassium hydroxide has a concentration of 0.150 mol/dm³. (Mᵣ KOH = 56)\n(a) Calculate the mass of KOH in 1.00 dm³ of this solution. [2]\n(b) Express the concentration in g/dm³. [1]",
            marks: 3,
            modelAnswer: "(a) n in 1.00 dm³ = 0.150 mol. m = 0.150 × 56 = 8.40 g.\n(b) c = 8.40 g/dm³ (= 0.150 × 56).",
            markScheme: [
              "n = 0.150 mol in 1.00 dm³ [1]",
              "m = 0.150 × 56 = 8.40 g [1]",
              "c = 8.40 g/dm³ [1]",
            ],
            commonError: "Confusing g/dm³ with mol/dm³, or dividing by M instead of multiplying.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "warmup",
            solutions: [
              {
                label: "Working",
                steps: [
                  "In 1.00 dm³, n = 0.150 mol",
                  "m = n × M = 0.150 × 56 = 8.40 g",
                  "c = 8.40 g/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-03",
            question: "25.0 cm³ of sodium hydroxide solution is exactly neutralised by 22.0 cm³ of 0.100 mol/dm³ hydrochloric acid.\nNaOH + HCl → NaCl + H₂O\nCalculate the concentration of the sodium hydroxide solution in mol/dm³. [3]",
            marks: 3,
            modelAnswer: "n(HCl) = 0.100 × (22.0/1000) = 0.00220 mol. Ratio 1:1 → n(NaOH) = 0.00220 mol. c(NaOH) = 0.00220/(25.0/1000) = 0.00220/0.0250 = 0.0880 mol/dm³.",
            markScheme: [
              "n(HCl) = 0.100 × 0.0220 = 0.00220 mol [1]",
              "n(NaOH) = 0.00220 mol (1:1) [1]",
              "c(NaOH) = 0.00220/0.0250 = 0.0880 mol/dm³ [1]",
            ],
            commonError: "Dividing by the acid volume (22.0) instead of the alkali volume (25.0) when finding c(NaOH).",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "n(HCl) = c × V (V in dm³).",
              "1:1 ratio gives n(NaOH).",
              "Divide by the NaOH volume (25.0 cm³ = 0.0250 dm³).",
            ],
            solutions: [
              {
                label: "Titration working",
                steps: [
                  "n(HCl) = 0.100 × (22.0/1000) = 0.00220 mol",
                  "Ratio 1:1 → n(NaOH) = 0.00220 mol",
                  "c(NaOH) = 0.00220/0.0250 = 0.0880 mol/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-04",
            question: "25.0 cm³ of 0.0500 mol/dm³ sodium carbonate is titrated with hydrochloric acid.\nNa₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂\nThe mean titre is 20.0 cm³.\n(a) Calculate the moles of Na₂CO₃ used. [1]\n(b) Calculate the moles of HCl in the titre. [1]\n(c) Calculate the concentration of the HCl in mol/dm³. [2]",
            marks: 4,
            modelAnswer: "(a) n(Na₂CO₃) = 0.0500 × (25.0/1000) = 0.00125 mol.\n(b) Ratio Na₂CO₃:HCl = 1:2 → n(HCl) = 2 × 0.00125 = 0.00250 mol.\n(c) c(HCl) = 0.00250/(20.0/1000) = 0.00250/0.0200 = 0.125 mol/dm³.",
            markScheme: [
              "n(Na₂CO₃) = 0.0500 × 0.0250 = 0.00125 mol [1]",
              "n(HCl) = 2 × 0.00125 = 0.00250 mol [1]",
              "c(HCl) = 0.00250/0.0200 = 0.125 mol/dm³ [2]",
            ],
            commonError: "Using a 1:1 ratio instead of 1:2 for Na₂CO₃:HCl.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "n(Na₂CO₃) = c × V.",
              "Ratio 1:2, so n(HCl) = 2 × n(Na₂CO₃).",
              "c(HCl) = n(HCl)/V(HCl).",
            ],
            solutions: [
              {
                label: "Full working",
                steps: [
                  "n(Na₂CO₃) = 0.0500 × 0.0250 = 0.00125 mol",
                  "Ratio 1:2 → n(HCl) = 0.00250 mol",
                  "c(HCl) = 0.00250/0.0200 = 0.125 mol/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-05",
            question: "Describe how you would prepare 250 cm³ of a 0.100 mol/dm³ standard solution of sodium carbonate (Mᵣ Na₂CO₃ = 106), starting from solid sodium carbonate. Include the mass needed and the key apparatus. [4]",
            marks: 4,
            modelAnswer: "Calculate the mass: n = 0.100 × 0.250 = 0.0250 mol; m = 0.0250 × 106 = 2.65 g. Weigh 2.65 g of anhydrous sodium carbonate accurately. Dissolve it in a beaker with some distilled water, stirring until fully dissolved. Transfer the solution (and rinsings) into a 250 cm³ volumetric flask. Add distilled water until the bottom of the meniscus reaches the graduation mark, then stopper and invert to mix thoroughly.",
            markScheme: [
              "mass needed = 0.0250 × 106 = 2.65 g [1]",
              "dissolve in distilled water (in a beaker) and transfer to a 250 cm³ volumetric flask, with rinsings [1]",
              "make up to the mark / graduation line (bottom of meniscus on the line) [1]",
              "stopper and invert/mix [1]",
            ],
            commonError: "Adding all the water first and then the solid in the volumetric flask, or filling past the graduation mark.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "First find the mass: n = cV, then m = nM.",
              "Dissolve in a beaker, then transfer to a volumetric flask.",
              "Make up to the graduation mark and mix by inversion.",
            ],
            solutions: [
              {
                label: "Mass calculation",
                steps: [
                  "n = 0.100 × 0.250 = 0.0250 mol",
                  "m = 0.0250 × 106 = 2.65 g",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-06",
            question: "100 cm³ of 0.500 mol/dm³ hydrochloric acid is diluted with water to a total volume of 500 cm³.\n(a) Calculate the moles of HCl present. [1]\n(b) Calculate the concentration of the diluted acid. [2]",
            marks: 3,
            modelAnswer: "(a) n(HCl) = 0.500 × (100/1000) = 0.0500 mol.\n(b) The moles are unchanged on dilution. New volume = 500/1000 = 0.500 dm³. c = 0.0500/0.500 = 0.100 mol/dm³.",
            markScheme: [
              "n(HCl) = 0.500 × 0.100 = 0.0500 mol [1]",
              "moles unchanged; new V = 0.500 dm³ [1]",
              "c = 0.0500/0.500 = 0.100 mol/dm³ [1]",
            ],
            commonError: "Recalculating moles after dilution — dilution adds only water, so the moles of solute do not change.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "n = c × V for the original acid.",
              "Adding water does not change the number of moles.",
              "c = n / new volume.",
            ],
            solutions: [
              {
                label: "Dilution working",
                steps: [
                  "n(HCl) = 0.500 × 0.100 = 0.0500 mol",
                  "New volume = 0.500 dm³, moles unchanged",
                  "c = 0.0500/0.500 = 0.100 mol/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-07",
            question: "In a titration, 25.0 cm³ of 0.200 mol/dm³ sulfuric acid is neutralised by potassium hydroxide solution.\nH₂SO₄ + 2KOH → K₂SO₄ + 2H₂O\nThe mean titre of KOH is 20.0 cm³.\n(a) Calculate the concentration of the KOH in mol/dm³. [3]\n(b) Calculate the concentration of the KOH in g/dm³. (Mᵣ KOH = 56) [1]",
            marks: 4,
            modelAnswer: "(a) n(H₂SO₄) = 0.200 × (25.0/1000) = 0.00500 mol. Ratio H₂SO₄:KOH = 1:2 → n(KOH) = 0.0100 mol. c(KOH) = 0.0100/(20.0/1000) = 0.0100/0.0200 = 0.500 mol/dm³.\n(b) c = 0.500 × 56 = 28.0 g/dm³.",
            markScheme: [
              "n(H₂SO₄) = 0.200 × 0.0250 = 0.00500 mol [1]",
              "n(KOH) = 2 × 0.00500 = 0.0100 mol [1]",
              "c(KOH) = 0.0100/0.0200 = 0.500 mol/dm³ [1]",
              "c(KOH) = 0.500 × 56 = 28.0 g/dm³ [1]",
            ],
            commonError: "Using a 1:1 acid:alkali ratio rather than 1:2 for H₂SO₄:KOH.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "core",
            hints: [
              "n(H₂SO₄) = c × V.",
              "Ratio 1:2, so n(KOH) = 2 × n(H₂SO₄).",
              "Convert mol/dm³ to g/dm³ by multiplying by Mᵣ.",
            ],
            solutions: [
              {
                label: "Full working",
                steps: [
                  "n(H₂SO₄) = 0.200 × 0.0250 = 0.00500 mol",
                  "Ratio 1:2 → n(KOH) = 0.0100 mol",
                  "c(KOH) = 0.0100/0.0200 = 0.500 mol/dm³",
                  "c(KOH) = 0.500 × 56 = 28.0 g/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-08",
            question: "A 1.50 g sample of impure sodium hydroxide is dissolved and made up to 250 cm³. A 25.0 cm³ portion of this solution requires 28.0 cm³ of 0.100 mol/dm³ hydrochloric acid for neutralisation.\nNaOH + HCl → NaCl + H₂O\n(Mᵣ NaOH = 40)\n(a) Calculate the moles of NaOH in the 25.0 cm³ portion. [2]\n(b) Calculate the total mass of NaOH in the original 1.50 g sample. [3]\n(c) Calculate the percentage purity of the sample. [1]",
            marks: 6,
            modelAnswer: "(a) n(HCl) = 0.100 × (28.0/1000) = 0.00280 mol. Ratio 1:1 → n(NaOH in 25.0 cm³) = 0.00280 mol.\n(b) The 250 cm³ contains 250/25.0 = 10 times as much: n(NaOH total) = 10 × 0.00280 = 0.0280 mol. m(NaOH) = 0.0280 × 40 = 1.12 g.\n(c) % purity = (1.12/1.50) × 100 = 74.7%.",
            markScheme: [
              "n(HCl) = 0.100 × 0.0280 = 0.00280 mol [1]",
              "n(NaOH in 25.0 cm³) = 0.00280 mol [1]",
              "scale up ×10: n(total) = 0.0280 mol [1]",
              "m(NaOH) = 0.0280 × 40 = 1.12 g [2]",
              "% purity = (1.12/1.50) × 100 = 74.7% [1]",
            ],
            commonError: "Forgetting to scale the 25.0 cm³ portion up to the full 250 cm³ (factor of 10).",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "challenge",
            hints: [
              "Find n(NaOH) in the 25.0 cm³ aliquot using the titre.",
              "The whole flask (250 cm³) contains 10× as much.",
              "m = n × 40; % purity = m(NaOH)/1.50 × 100.",
            ],
            strategy: "aliquot then scale up to the full volumetric flask",
            solutions: [
              {
                label: "Full working",
                steps: [
                  "n(HCl) = 0.100 × (28.0/1000) = 0.00280 mol",
                  "n(NaOH) in 25.0 cm³ = 0.00280 mol (1:1)",
                  "Scale-up factor = 250/25.0 = 10 → n(total) = 0.0280 mol",
                  "m(NaOH) = 0.0280 × 40 = 1.12 g",
                  "% purity = (1.12/1.50) × 100 = 74.7%",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-09",
            question: "An indigestion tablet of mass 1.00 g contains calcium carbonate as its only acid-neutralising ingredient. The whole tablet is added to 40.0 cm³ of 0.500 mol/dm³ hydrochloric acid (an excess). The excess acid is then titrated with 0.250 mol/dm³ NaOH, requiring 24.0 cm³.\nCaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂\nHCl + NaOH → NaCl + H₂O\n(Mᵣ CaCO₃ = 100)\n(a) Calculate the total moles of HCl added. [1]\n(b) Calculate the moles of excess (unreacted) HCl. [2]\n(c) Calculate the moles of HCl that reacted with the CaCO₃. [1]\n(d) Calculate the mass of CaCO₃ in the tablet and its percentage by mass. [3]",
            marks: 7,
            modelAnswer: "(a) n(HCl) total = 0.500 × (40.0/1000) = 0.0200 mol.\n(b) n(NaOH) = 0.250 × (24.0/1000) = 0.00600 mol. Ratio 1:1 → n(HCl) excess = 0.00600 mol.\n(c) n(HCl) reacted with CaCO₃ = 0.0200 − 0.00600 = 0.0140 mol.\n(d) Ratio CaCO₃:HCl = 1:2 → n(CaCO₃) = 0.0140/2 = 0.00700 mol. m(CaCO₃) = 0.00700 × 100 = 0.700 g. % by mass = (0.700/1.00) × 100 = 70.0%.",
            markScheme: [
              "n(HCl) total = 0.500 × 0.0400 = 0.0200 mol [1]",
              "n(NaOH) = 0.250 × 0.0240 = 0.00600 mol; n(HCl) excess = 0.00600 mol [2]",
              "n(HCl) reacted = 0.0200 − 0.00600 = 0.0140 mol [1]",
              "n(CaCO₃) = 0.0140/2 = 0.00700 mol [1]",
              "m(CaCO₃) = 0.00700 × 100 = 0.700 g [1]",
              "% by mass = (0.700/1.00) × 100 = 70.0% [1]",
            ],
            commonError: "Using a 1:1 CaCO₃:HCl ratio instead of 1:2, or forgetting to subtract the excess acid first.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "challenge",
            hints: [
              "Total HCl added = c × V.",
              "Excess HCl = moles of NaOH used (1:1).",
              "Reacted HCl = total − excess; then CaCO₃:HCl = 1:2.",
            ],
            strategy: "back-titration: subtract the excess to find what reacted with the sample",
            solutions: [
              {
                label: "Back-titration working",
                steps: [
                  "n(HCl) total = 0.500 × 0.0400 = 0.0200 mol",
                  "n(NaOH) = 0.250 × 0.0240 = 0.00600 mol → n(HCl) excess = 0.00600 mol",
                  "n(HCl) reacted with CaCO₃ = 0.0200 − 0.00600 = 0.0140 mol",
                  "CaCO₃:HCl = 1:2 → n(CaCO₃) = 0.00700 mol",
                  "m(CaCO₃) = 0.00700 × 100 = 0.700 g",
                  "% by mass = (0.700/1.00) × 100 = 70.0%",
                ],
              },
            ],
          },
          {
            id: "chem-stoichiometry-bq4-10",
            question: "A sample of hydrated ethanedioic acid, H₂C₂O₄·2H₂O (Mᵣ = 126), is used to standardise a sodium hydroxide solution. 1.26 g of the acid is dissolved and made up to 250 cm³. A 25.0 cm³ portion needs 20.0 cm³ of the NaOH solution.\nH₂C₂O₄ + 2NaOH → Na₂C₂O₄ + 2H₂O\n(a) Calculate the concentration of the acid solution in mol/dm³. [3]\n(b) Calculate the moles of acid in the 25.0 cm³ portion. [1]\n(c) Calculate the concentration of the NaOH. [3]",
            marks: 7,
            modelAnswer: "(a) n(acid) = 1.26/126 = 0.0100 mol in 250 cm³. c = 0.0100/(250/1000) = 0.0100/0.250 = 0.0400 mol/dm³.\n(b) n in 25.0 cm³ = 0.0400 × (25.0/1000) = 0.00100 mol.\n(c) Ratio acid:NaOH = 1:2 → n(NaOH) = 2 × 0.00100 = 0.00200 mol. c(NaOH) = 0.00200/(20.0/1000) = 0.00200/0.0200 = 0.100 mol/dm³.",
            markScheme: [
              "n(acid) = 1.26/126 = 0.0100 mol [1]",
              "c(acid) = 0.0100/0.250 = 0.0400 mol/dm³ [2]",
              "n(acid in 25.0 cm³) = 0.0400 × 0.0250 = 0.00100 mol [1]",
              "n(NaOH) = 2 × 0.00100 = 0.00200 mol [1]",
              "c(NaOH) = 0.00200/0.0200 = 0.100 mol/dm³ [2]",
            ],
            commonError: "Using the hydrated Mᵣ but a 1:1 ratio, or forgetting the 1:2 acid:base ratio for the diprotic acid.",
            guideRef: "Concentration, Solutions and Titration Calculations",
            difficulty: "challenge",
            hints: [
              "n(acid) = mass/126; then c = n/0.250.",
              "Find moles in the 25.0 cm³ aliquot.",
              "Acid:NaOH = 1:2 (diprotic), so n(NaOH) = 2 × n(acid).",
            ],
            strategy: "standardisation: known mass → concentration → aliquot → ratio → unknown",
            solutions: [
              {
                label: "Full standardisation",
                steps: [
                  "n(acid) = 1.26/126 = 0.0100 mol in 250 cm³",
                  "c(acid) = 0.0100/0.250 = 0.0400 mol/dm³",
                  "n(acid) in 25.0 cm³ = 0.0400 × 0.0250 = 0.00100 mol",
                  "Acid:NaOH = 1:2 → n(NaOH) = 0.00200 mol",
                  "c(NaOH) = 0.00200/0.0200 = 0.100 mol/dm³",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
