import type { Topic } from "../types";

export const chemAcidsBases: Topic = {
  id: "chem-acids-bases",
  title: "Acids, Bases & Salts",
  subject: "chemistry",
  icon: "🧂",
  blurb: "pH, neutralisation, acid reactions, oxides, and salt preparation — core IGCSE chemistry.",
  intro:
    "Acids and bases underpin much of everyday chemistry, from the vinegar in your kitchen to the antacid tablets that soothe heartburn. In this topic you will learn exactly what makes something an acid or a base at the ion level, how the pH scale quantifies acidity, and how acids react predictably with metals, bases, and carbonates to form salts. You will also master the practical techniques for preparing pure, dry samples of both soluble and insoluble salts — a skill that frequently appears in IGCSE Paper 6.",

  // ─────────────────────── GUIDE ───────────────────────
  guide: [
    // ── Section 1 ──────────────────────────────────────
    {
      heading: "Acids and Alkalis: Ion Definitions",
      body:
        "An **acid** is a substance that dissolves in water to produce hydrogen ions, H⁺(aq). A **base** is a substance that can neutralise an acid — bases include metal oxides, metal hydroxides, and ammonia. An **alkali** is a base that is *soluble* in water; it dissolves to produce hydroxide ions, OH⁻(aq).\n\n" +
        "For example, hydrochloric acid ionises completely:\n\n" +
        "HCl(g) → H⁺(aq) + Cl⁻(aq)\n\n" +
        "And sodium hydroxide dissolves to give:\n\n" +
        "NaOH(s) → Na⁺(aq) + OH⁻(aq)\n\n" +
        "All alkalis are bases, but not all bases are alkalis — copper(II) oxide is a base but it does not dissolve in water, so it is not an alkali.\n\n" +
        "Common laboratory acids: hydrochloric acid (HCl), sulfuric acid (H₂SO₄), nitric acid (HNO₃).\n\n" +
        "Common laboratory alkalis: sodium hydroxide (NaOH), potassium hydroxide (KOH), calcium hydroxide (Ca(OH)₂), aqueous ammonia (NH₃(aq)).",

      keyPoints: [
        "Acids produce H⁺(aq) in solution; the H⁺ ion (proton) is what makes solutions acidic.",
        "Bases neutralise acids; alkalis are the soluble subset of bases and produce OH⁻(aq).",
        "All alkalis are bases, but not all bases are alkalis (e.g. CuO is a base, not an alkali).",
        "The three common lab acids are HCl, H₂SO₄, and HNO₃.",
        "Ammonia solution is the only common alkali that does not contain a metal.",
      ],

      discovery: {
        problem:
          "A student tests two clear solutions — one made from HCl gas dissolved in water, the other from NaOH pellets dissolved in water. Both look identical. Before reading on, predict: what ion is present in each solution that is responsible for its chemical behaviour?",
        idea:
          "The HCl solution contains H⁺(aq) ions — these are the chemical entity responsible for ALL acidic properties (turning indicators red, reacting with metals, etc.). The NaOH solution contains OH⁻(aq) ions — these are responsible for all alkaline properties. The key insight: it is always about which ions are in solution, not about the original compound name.",
      },

      whyItWorks:
        "Brønsted–Lowry theory (which underpins IGCSE definitions) defines an acid as a proton donor. H⁺ is simply a proton. When HCl dissolves, the polar H–Cl bond breaks heterolytically and water molecules solvate the proton, forming H₃O⁺ (oxonium ion). At IGCSE we write this as H⁺(aq) for simplicity, but the real species is H₃O⁺. This is why acids only show acidic behaviour in aqueous solution.",

      strategies: ["Identify the characteristic ion", "All-bases-soluble-subset rule"],
    },

    // ── Section 2 ──────────────────────────────────────
    {
      heading: "The pH Scale and Indicators",
      body:
        "The **pH scale** runs from 0 to 14 (and beyond at extremes). pH < 7 is acidic, pH = 7 is neutral, pH > 7 is alkaline. Each unit represents a tenfold change in H⁺ concentration — pH 1 is ten times more acidic than pH 2.\n\n" +
        "**Litmus**: turns red in acids (pH < 7), blue in alkalis (pH > 7), purple/violet at neutral. It is a single-colour-change indicator useful for identifying acid or alkali.\n\n" +
        "**Universal indicator** gives a continuous range of colours: red/orange (pH 1–3), yellow (pH 4–6), green (pH 7), blue-green/blue (pH 8–10), purple/violet (pH 11–14). It can estimate the actual pH value, not just acid/alkali.\n\n" +
        "**Methyl orange**: red in acids (pH < 3.1), orange at endpoint (~pH 4), yellow in alkalis (pH > 4.4). Used for strong acid–weak alkali titrations.\n\n" +
        "**Thymolphthalein**: colourless in acids, blue in alkalis (colour change at pH 9.3–10.5). Used for strong alkali–weak acid titrations.\n\n" +
        "**pH meters** give precise numerical readings and are used instead of indicators when an exact value is needed.",

      diagrams: [
        {
          caption: "The pH scale with universal indicator colours and example substances",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="pH scale showing colours from pH 0 to 14 with example substances">\n  <!-- Background -->\n  <rect width="320" height="200" fill="#0f172a" rx="8"/>\n  <!-- Scale bar segments -->\n  <!-- pH 0-1 deep red -->\n  <rect x="10" y="40" width="20" height="28" fill="#b91c1c" rx="2"/>\n  <!-- pH 2 red -->\n  <rect x="30" y="40" width="20" height="28" fill="#dc2626" rx="2"/>\n  <!-- pH 3 orange-red -->\n  <rect x="50" y="40" width="20" height="28" fill="#ea580c" rx="2"/>\n  <!-- pH 4 orange -->\n  <rect x="70" y="40" width="20" height="28" fill="#f97316" rx="2"/>\n  <!-- pH 5 yellow-orange -->\n  <rect x="90" y="40" width="20" height="28" fill="#eab308" rx="2"/>\n  <!-- pH 6 yellow -->\n  <rect x="110" y="40" width="20" height="28" fill="#facc15" rx="2"/>\n  <!-- pH 7 green -->\n  <rect x="130" y="40" width="20" height="28" fill="#22c55e" rx="2"/>\n  <!-- pH 8 blue-green -->\n  <rect x="150" y="40" width="20" height="28" fill="#10b981" rx="2"/>\n  <!-- pH 9 teal -->\n  <rect x="170" y="40" width="20" height="28" fill="#0ea5e9" rx="2"/>\n  <!-- pH 10 blue -->\n  <rect x="190" y="40" width="20" height="28" fill="#3b82f6" rx="2"/>\n  <!-- pH 11 blue -->\n  <rect x="210" y="40" width="20" height="28" fill="#6366f1" rx="2"/>\n  <!-- pH 12 indigo -->\n  <rect x="230" y="40" width="20" height="28" fill="#7c3aed" rx="2"/>\n  <!-- pH 13 violet -->\n  <rect x="250" y="40" width="20" height="28" fill="#9333ea" rx="2"/>\n  <!-- pH 14 deep violet -->\n  <rect x="270" y="40" width="20" height="28" fill="#6b21a8" rx="2"/>\n  <!-- pH numbers -->\n  <text x="20" y="85" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">0</text>\n  <text x="40" y="85" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">2</text>\n  <text x="60" y="85" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">3</text>\n  <text x="80" y="85" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">4</text>\n  <text x="100" y="85" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">5</text>\n  <text x="120" y="85" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">6</text>\n  <text x="140" y="85" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">7</text>\n  <text x="160" y="85" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">8</text>\n  <text x="180" y="85" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">9</text>\n  <text x="200" y="85" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">10</text>\n  <text x="220" y="85" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">11</text>\n  <text x="240" y="85" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">12</text>\n  <text x="260" y="85" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">13</text>\n  <text x="280" y="85" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">14</text>\n  <!-- Zone labels -->\n  <text x="70" y="25" font-size="9" fill="#fb7185" text-anchor="middle" font-family="sans-serif" font-weight="bold">ACIDIC</text>\n  <text x="140" y="25" font-size="9" fill="#34d399" text-anchor="middle" font-family="sans-serif" font-weight="bold">NEUTRAL</text>\n  <text x="220" y="25" font-size="9" fill="#38bdf8" text-anchor="middle" font-family="sans-serif" font-weight="bold">ALKALINE</text>\n  <!-- Example substances -->\n  <text x="20" y="105" font-size="7.5" fill="#eef0ff" text-anchor="middle" font-family="sans-serif">HCl</text>\n  <text x="80" y="105" font-size="7.5" fill="#eef0ff" text-anchor="middle" font-family="sans-serif">lemon</text>\n  <text x="120" y="105" font-size="7.5" fill="#eef0ff" text-anchor="middle" font-family="sans-serif">rain</text>\n  <text x="140" y="105" font-size="7.5" fill="#eef0ff" text-anchor="middle" font-family="sans-serif">water</text>\n  <text x="165" y="105" font-size="7.5" fill="#eef0ff" text-anchor="middle" font-family="sans-serif">blood</text>\n  <text x="215" y="105" font-size="7.5" fill="#eef0ff" text-anchor="middle" font-family="sans-serif">NH3(aq)</text>\n  <text x="265" y="105" font-size="7.5" fill="#eef0ff" text-anchor="middle" font-family="sans-serif">NaOH</text>\n  <!-- Arrows for ACIDIC / ALKALINE -->\n  <line x1="20" y1="30" x2="125" y2="30" stroke="#fb7185" stroke-width="1" marker-end="url(#arr)"/>\n  <line x1="260" y1="30" x2="155" y2="30" stroke="#38bdf8" stroke-width="1"/>\n  <!-- Indicator summary -->\n  <text x="10" y="130" font-size="8" fill="#fbbf24" font-family="sans-serif" font-weight="bold">Litmus:</text>\n  <text x="55" y="130" font-size="8" fill="#fb7185" font-family="sans-serif">red (acid)</text>\n  <text x="115" y="130" font-size="8" fill="#b7bce0" font-family="sans-serif">purple (neutral)</text>\n  <text x="210" y="130" font-size="8" fill="#38bdf8" font-family="sans-serif">blue (alkali)</text>\n  <text x="10" y="148" font-size="8" fill="#fbbf24" font-family="sans-serif" font-weight="bold">Methyl orange:</text>\n  <text x="90" y="148" font-size="8" fill="#fb7185" font-family="sans-serif">red (pH &lt;3)</text>\n  <text x="150" y="148" font-size="8" fill="#fbbf24" font-family="sans-serif">orange(~4)</text>\n  <text x="210" y="148" font-size="8" fill="#fbbf24" font-family="sans-serif">yellow (&gt;4.4)</text>\n  <text x="10" y="166" font-size="8" fill="#fbbf24" font-family="sans-serif" font-weight="bold">Thymolphthalein:</text>\n  <text x="103" y="166" font-size="8" fill="#b7bce0" font-family="sans-serif">colourless (&lt;9)</text>\n  <text x="200" y="166" font-size="8" fill="#38bdf8" font-family="sans-serif">blue (&gt;10)</text>\n  <text x="10" y="184" font-size="8" fill="#fbbf24" font-family="sans-serif" font-weight="bold">UI:</text>\n  <text x="30" y="184" font-size="8" fill="#fb7185" font-family="sans-serif">red-orange(1-3)</text>\n  <text x="115" y="184" font-size="8" fill="#34d399" font-family="sans-serif">green(7)</text>\n  <text x="165" y="184" font-size="8" fill="#38bdf8" font-family="sans-serif">blue(8-10)</text>\n  <text x="230" y="184" font-size="8" fill="#a78bfa" font-family="sans-serif">purple(11-14)</text>\n</svg>',
        },
      ],

      keyPoints: [
        "pH scale: 0–14; pH < 7 acidic, pH = 7 neutral, pH > 7 alkaline.",
        "Each pH unit = tenfold change in H⁺ concentration (logarithmic scale).",
        "Litmus: red in acid, blue in alkali — good for acid/alkali identification only.",
        "Universal indicator gives a spectrum of colours allowing pH estimation.",
        "Methyl orange and thymolphthalein are sharp-endpoint indicators used in titrations.",
      ],

      thinkDeeper:
        "The pH scale is logarithmic: pH = −log₁₀[H⁺]. At pH 7, [H⁺] = 10⁻⁷ mol/dm³. At pH 5, [H⁺] = 10⁻⁵ mol/dm³ — exactly 100 times greater. Why does this matter for environmental science? Acid rain at pH 4 has 1000× the H⁺ concentration of clean rain at pH 7. Small pH changes can therefore represent enormous differences in actual acidity.",

      strategies: ["Read the colour, estimate the pH range", "Use the logarithm rule for concentration comparisons"],
    },

    // ── Section 3 ──────────────────────────────────────
    {
      heading: "Strong vs Weak Acids — and Concentration vs Strength",
      body:
        "**Strength** describes the *degree of dissociation (ionisation)* of an acid in water — not how corrosive it is or how concentrated it is.\n\n" +
        "- A **strong acid** is one that is fully (completely) dissociated into ions in aqueous solution: e.g. HCl, H₂SO₄, HNO₃.\n" +
        "  HCl → H⁺(aq) + Cl⁻(aq)  (one-way arrow: fully dissociated)\n\n" +
        "- A **weak acid** is only *partially* dissociated; an equilibrium exists between the undissociated molecules and the ions: e.g. ethanoic acid (CH₃COOH), carbonic acid (H₂CO₃).\n" +
        "  CH₃COOH ⇌ CH₃COO⁻(aq) + H⁺(aq)  (reversible arrow: equilibrium)\n\n" +
        "**Concentration** is a completely separate idea — it is the amount of solute per unit volume (mol/dm³). You can have:\n" +
        "- Concentrated weak acid (e.g. glacial ethanoic acid — high concentration but still weak)\n" +
        "- Dilute strong acid (e.g. very dilute HCl — still fully dissociated, just fewer moles per dm³)\n\n" +
        "Comparing equal concentrations of HCl and CH₃COOH: the HCl solution has a much lower pH (more H⁺ ions) because it is fully dissociated, while ethanoic acid produces far fewer H⁺ ions despite having the same number of acid molecules present.",

      keyPoints: [
        "Strong acid: fully dissociated in water (e.g. HCl, H₂SO₄, HNO₃).",
        "Weak acid: partially dissociated; equilibrium between molecules and ions (e.g. CH₃COOH).",
        "Strength (degree of dissociation) is independent of concentration (moles per dm³).",
        "At equal concentration, a strong acid has a lower pH than a weak acid.",
        "Use a one-way arrow for strong acids and a reversible arrow (⇌) for weak acids.",
      ],

      discovery: {
        problem:
          "A student has two 1 mol/dm³ acid solutions: one is HCl, the other is ethanoic acid (CH₃COOH). She tests them with a pH meter. Predict which will give the lower pH value and explain why — before reading the idea below.",
        idea:
          "HCl gives the lower pH. Both solutions have the same *concentration* of acid molecules (1 mol/dm³), but HCl is a *strong* acid — every HCl molecule releases one H⁺, giving [H⁺] ≈ 1 mol/dm³, so pH ≈ 0. Ethanoic acid is *weak* — only a small fraction (~1%) of CH₃COOH molecules dissociate, giving [H⁺] ≈ 0.004 mol/dm³, so pH ≈ 2.4. Same concentration, very different pH — because strength (not concentration) determines how many H⁺ ions actually form.",
      },

      whyItWorks:
        "Weak acids establish an equilibrium: CH₃COOH ⇌ CH₃COO⁻ + H⁺. The position of equilibrium lies heavily to the left (Ka is small), so most molecules remain undissociated. The equilibrium constant Ka (acid dissociation constant) quantifies this — a larger Ka means a stronger acid and more H⁺ produced. HCl has an astronomically large Ka (essentially infinite), confirming complete dissociation.",

      strategies: ["Strength = dissociation; Concentration = amount per volume — do not conflate", "Arrow type signals equilibrium or completion"],
    },

    // ── Section 4 ──────────────────────────────────────
    {
      heading: "Reactions of Acids",
      body:
        "Acids react in predictable patterns. You must know these four reaction types with word equations and balanced symbol equations.\n\n" +
        "**1. Acid + Metal → Salt + Hydrogen**\n" +
        "Reactive metals (above copper in the reactivity series) displace hydrogen from acids.\n" +
        "Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)\n" +
        "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)\n" +
        "Test for hydrogen: bring a lit splint to the mouth of the test tube — a squeaky pop confirms H₂.\n\n" +
        "**2. Acid + Base/Alkali → Salt + Water (neutralisation)**\n" +
        "The ionic equation for any neutralisation: H⁺(aq) + OH⁻(aq) → H₂O(l)\n" +
        "NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)\n" +
        "CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l)\n\n" +
        "**3. Acid + Carbonate → Salt + Water + Carbon Dioxide**\n" +
        "Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)\n" +
        "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)\n" +
        "Test for CO₂: bubble gas through limewater (Ca(OH)₂(aq)) — turns milky/cloudy.\n\n" +
        "**Naming salts**: the salt name = metal name (from base/metal/carbonate) + acid anion.\n" +
        "- HCl → chloride\n" +
        "- H₂SO₄ → sulfate\n" +
        "- HNO₃ → nitrate\n" +
        "- H₃PO₄ → phosphate",

      keyPoints: [
        "Acid + metal → salt + hydrogen (only reactive metals; test with lit splint — squeaky pop).",
        "Acid + base/alkali → salt + water; ionic equation: H⁺ + OH⁻ → H₂O.",
        "Acid + carbonate → salt + water + CO₂ (test CO₂ with limewater — turns milky).",
        "Salt name = metal/base cation + acid anion (chloride, sulfate, nitrate, phosphate).",
        "Balance equations by ensuring atom counts match on both sides; check charge balance in ionic equations.",
      ],

      strategies: ["Product identification: Acid + X → always salt; what else depends on X", "Balance by inspection: H and O last"],
    },

    // ── Section 5 ──────────────────────────────────────
    {
      heading: "Classification of Oxides",
      body:
        "Oxides are classified by how they react with acids and alkalis:\n\n" +
        "**Acidic oxides**: non-metal oxides that react with alkalis to form a salt and water, or dissolve in water to form an acid.\n" +
        "Examples: CO₂, SO₂, SO₃, NO₂, P₄O₁₀.\n" +
        "CO₂(g) + 2NaOH(aq) → Na₂CO₃(aq) + H₂O(l)\n\n" +
        "**Basic oxides**: metal oxides that react with acids to form a salt and water.\n" +
        "Examples: CuO, MgO, Fe₂O₃, Na₂O.\n" +
        "CuO(s) + 2HCl(aq) → CuCl₂(aq) + H₂O(l)\n\n" +
        "**Amphoteric oxides**: react with *both* acids and alkalis to form salts.\n" +
        "Examples: ZnO and Al₂O₃.\n" +
        "ZnO(s) + 2HCl(aq) → ZnCl₂(aq) + H₂O(l)  [reacts with acid]\n" +
        "ZnO(s) + 2NaOH(aq) → Na₂ZnO₂(aq) + H₂O(l)  [reacts with alkali]\n" +
        "Al₂O₃(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂O(l)\n" +
        "Al₂O₃(s) + 2NaOH(aq) → 2NaAlO₂(aq) + H₂O(l)\n\n" +
        "**Neutral oxides**: react with neither acids nor alkalis.\n" +
        "Examples: CO, H₂O, NO.",

      keyPoints: [
        "Acidic oxides: non-metals; react with alkalis (e.g. CO₂, SO₂, SO₃).",
        "Basic oxides: metals; react with acids (e.g. CuO, MgO).",
        "Amphoteric oxides: react with BOTH acids and alkalis (ZnO, Al₂O₃).",
        "Neutral oxides: react with neither (CO, H₂O, NO).",
        "ZnO + NaOH → sodium zincate; Al₂O₃ + NaOH → sodium aluminate.",
      ],

      thinkDeeper:
        "Amphoteric behaviour links to position in the periodic table: elements in the 'staircase' border region between metals and non-metals (Al, Zn, Pb, Sn) show amphoteric character. This is because their cations can behave like Lewis acids (accepting electron pairs from OH⁻) as well as reacting with Lewis bases (H⁺). This is why aluminium cookware can be attacked by both acidic foods and strongly alkaline cleaning agents.",

      strategies: ["Classify the element (metal/non-metal/border) to predict oxide type", "Amphoteric: test both acid AND alkali reactions"],
    },

    // ── Section 6 ──────────────────────────────────────
    {
      heading: "Preparing Salts and Gas Tests",
      body:
        "Choosing the right method depends on the **solubility** of the desired salt and the **nature of the base**.\n\n" +
        "**Method 1: Excess insoluble base/carbonate + acid (for soluble salts)**\n" +
        "Use this when the salt is soluble and the base or carbonate is insoluble (e.g. CuSO₄ from CuO + H₂SO₄; MgCl₂ from Mg + HCl).\n" +
        "Steps: (i) Add excess solid to acid until no more reacts. (ii) Filter to remove excess solid. (iii) Evaporate filtrate to crystallise salt. (iv) Filter crystals, dry in warm oven.\n" +
        "The excess solid ensures all acid is used up, so no acid contaminates the product.\n\n" +
        "**Method 2: Titration (for soluble salts from soluble base/alkali)**\n" +
        "Use when both acid and alkali are soluble (e.g. NaCl from NaOH + HCl).\n" +
        "Steps: (i) Titrate — add acid from burette to alkali + indicator until endpoint. (ii) Note exact volume. (iii) Repeat without indicator using exact volumes. (iv) Evaporate to crystallise.\n" +
        "Indicator is omitted in the second run to prevent contamination of the pure salt.\n\n" +
        "**Method 3: Precipitation (for insoluble salts)**\n" +
        "Mix two solutions each containing one of the ions of the desired salt.\n" +
        "Example: BaSO₄ from BaCl₂(aq) + H₂SO₄(aq) → BaSO₄(s) + 2HCl(aq)\n" +
        "Example: PbI₂ from Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq)\n" +
        "Steps: Mix solutions → filter precipitate → wash with distilled water → dry.\n\n" +
        "**Solubility rules (IGCSE)**:\n" +
        "- Nitrates: ALL soluble.\n" +
        "- Chlorides: all soluble EXCEPT AgCl, PbCl₂.\n" +
        "- Sulfates: all soluble EXCEPT BaSO₄, PbSO₄, CaSO₄ (slightly insoluble).\n" +
        "- Carbonates: INSOLUBLE except Na₂CO₃, K₂CO₃, (NH₄)₂CO₃.\n" +
        "- Hydroxides: INSOLUBLE except NaOH, KOH, Ca(OH)₂ (slightly soluble).\n" +
        "- Sodium, potassium, ammonium salts: ALL soluble.\n\n" +
        "**Gas tests**:\n" +
        "- H₂: Lit splint → squeaky pop.\n" +
        "- O₂: Glowing splint → relights.\n" +
        "- CO₂: Bubble through limewater → turns milky.\n" +
        "- NH₃: Damp red litmus → turns blue; pungent smell.\n" +
        "- Cl₂: Damp blue litmus → turns red then bleaches; pungent smell; yellow-green gas.",

      diagrams: [
        {
          caption: "Filtration and crystallisation setup for preparing a soluble salt using excess insoluble base",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Laboratory filtration setup for salt preparation showing funnel with filter paper, beaker, and evaporating dish">\n  <rect width="320" height="200" fill="#0f172a" rx="8"/>\n  <!-- STEP 1: Mix acid and excess base -->\n  <text x="20" y="18" font-size="9" fill="#fbbf24" font-weight="bold" font-family="sans-serif">Step 1: React</text>\n  <!-- Beaker -->\n  <rect x="18" y="25" width="44" height="38" fill="none" stroke="#38bdf8" stroke-width="1.5" rx="2"/>\n  <!-- liquid -->\n  <rect x="20" y="35" width="40" height="26" fill="#0369a1" opacity="0.5" rx="1"/>\n  <!-- excess solid dots -->\n  <circle cx="28" cy="52" r="3" fill="#a78bfa"/>\n  <circle cx="38" cy="55" r="3" fill="#a78bfa"/>\n  <circle cx="48" cy="51" r="3" fill="#a78bfa"/>\n  <text x="40" y="73" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">acid + excess</text>\n  <text x="40" y="82" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">insoluble base</text>\n  <!-- Arrow -->\n  <line x1="68" y1="44" x2="84" y2="44" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#a)"/>\n  <defs><marker id="a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/></marker></defs>\n  <!-- STEP 2: Filter -->\n  <text x="88" y="18" font-size="9" fill="#fbbf24" font-weight="bold" font-family="sans-serif">Step 2: Filter</text>\n  <!-- Funnel -->\n  <polygon points="88,25 118,25 110,65 96,65" fill="none" stroke="#38bdf8" stroke-width="1.5"/>\n  <!-- Filter paper -->\n  <ellipse cx="103" cy="30" rx="15" ry="4" fill="none" stroke="#34d399" stroke-width="1" stroke-dasharray="3,2"/>\n  <text x="103" y="23" font-size="6.5" fill="#34d399" text-anchor="middle" font-family="sans-serif">filter paper</text>\n  <!-- solid residue -->\n  <rect x="97" y="52" width="12" height="8" fill="#a78bfa" rx="1" opacity="0.7"/>\n  <!-- Filtrate drip -->\n  <line x1="103" y1="65" x2="103" y2="80" stroke="#38bdf8" stroke-width="1.5"/>\n  <!-- Beaker below -->\n  <rect x="88" y="80" width="30" height="22" fill="none" stroke="#38bdf8" stroke-width="1.5" rx="1"/>\n  <rect x="90" y="82" width="26" height="18" fill="#0369a1" opacity="0.4" rx="1"/>\n  <text x="103" y="112" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">filtrate</text>\n  <text x="103" y="120" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">(salt solution)</text>\n  <!-- Arrow -->\n  <line x1="124" y1="90" x2="140" y2="90" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#a)"/>\n  <!-- STEP 3: Evaporate -->\n  <text x="144" y="18" font-size="9" fill="#fbbf24" font-weight="bold" font-family="sans-serif">Step 3: Evaporate</text>\n  <!-- Evaporating dish -->\n  <ellipse cx="168" cy="80" rx="22" ry="8" fill="none" stroke="#38bdf8" stroke-width="1.5"/>\n  <ellipse cx="168" cy="83" rx="20" ry="6" fill="#0369a1" opacity="0.4"/>\n  <!-- tripod and gauze hint -->\n  <line x1="150" y1="88" x2="145" y2="108" stroke="#b7bce0" stroke-width="1"/>\n  <line x1="186" y1="88" x2="191" y2="108" stroke="#b7bce0" stroke-width="1"/>\n  <line x1="145" y1="108" x2="191" y2="108" stroke="#b7bce0" stroke-width="1"/>\n  <!-- flame -->\n  <ellipse cx="168" cy="112" rx="8" ry="6" fill="#f97316" opacity="0.6"/>\n  <ellipse cx="168" cy="110" rx="4" ry="4" fill="#fbbf24" opacity="0.8"/>\n  <text x="168" y="125" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">heat to evaporate</text>\n  <text x="168" y="133" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">water; crystallise</text>\n  <!-- Arrow -->\n  <line x1="194" y1="80" x2="210" y2="80" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#a)"/>\n  <!-- STEP 4: Dry crystals -->\n  <text x="214" y="18" font-size="9" fill="#fbbf24" font-weight="bold" font-family="sans-serif">Step 4: Dry</text>\n  <!-- Crystals shape -->\n  <rect x="218" y="68" width="32" height="22" fill="none" stroke="#38bdf8" stroke-width="1.5" rx="3"/>\n  <text x="234" y="83" font-size="8" fill="#34d399" text-anchor="middle" font-family="sans-serif">crystals</text>\n  <text x="234" y="95" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">filter + oven</text>\n  <text x="234" y="103" font-size="7" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">dry at ~50 C</text>\n  <!-- Labels at bottom -->\n  <text x="160" y="155" font-size="8.5" fill="#fbbf24" font-weight="bold" text-anchor="middle" font-family="sans-serif">Method: Excess insoluble base/carbonate + acid</text>\n  <text x="160" y="167" font-size="8" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">Excess solid ensures all acid is consumed (no acid contamination)</text>\n  <text x="160" y="179" font-size="8" fill="#34d399" text-anchor="middle" font-family="sans-serif">Examples: CuO+H2SO4; MgCO3+HCl; Mg+H2SO4</text>\n</svg>',
        },
        {
          caption: "Titration method for preparing a soluble salt from a soluble base",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Titration setup showing burette, conical flask, and steps for salt preparation">\n  <rect width="320" height="200" fill="#0f172a" rx="8"/>\n  <!-- Burette -->\n  <rect x="68" y="10" width="14" height="100" fill="none" stroke="#38bdf8" stroke-width="1.5" rx="2"/>\n  <!-- Acid in burette (partial fill) -->\n  <rect x="70" y="12" width="10" height="55" fill="#fb7185" opacity="0.4" rx="1"/>\n  <text x="75" y="8" font-size="7.5" fill="#b7bce0" text-anchor="middle" font-family="sans-serif">Burette</text>\n  <text x="55" y="50" font-size="7" fill="#fb7185" text-anchor="middle" font-family="sans-serif">acid</text>\n  <!-- Tap -->\n  <rect x="65" y="105" width="20" height="6" fill="#fbbf24" rx="2"/>\n  <!-- Drop -->\n  <ellipse cx="75" cy="116" rx="2.5" ry="3.5" fill="#fb7185" opacity="0.8"/>\n  <!-- Conical flask -->\n  <polygon points="55,120 95,120 110,165 40,165" fill="none" stroke="#38bdf8" stroke-width="1.5"/>\n  <rect x="42" y="140" width="66" height="23" fill="#38bdf8" opacity="0.2" rx="1"/>\n  <text x="75" y="155" font-size="7.5" fill="#eef0ff" text-anchor="middle" font-family="sans-serif">alkali +</text>\n  <text x="75" y="164" font-size="7.5" fill="#eef0ff" text-anchor="middle" font-family="sans-serif">indicator</text>\n  <!-- Indicator colour change arrow -->\n  <text x="120" y="130" font-size="7.5" fill="#b7bce0" font-family="sans-serif">endpoint:</text>\n  <text x="120" y="141" font-size="7.5" fill="#fbbf24" font-family="sans-serif">colour change</text>\n  <!-- Steps box -->\n  <rect x="140" y="10" width="170" height="175" fill="#1e293b" rx="6" stroke="#334155" stroke-width="1"/>\n  <text x="225" y="26" font-size="9" fill="#fbbf24" font-weight="bold" text-anchor="middle" font-family="sans-serif">Titration Steps</text>\n  <text x="148" y="42" font-size="8" fill="#34d399" font-family="sans-serif">1. Titrate with indicator</text>\n  <text x="148" y="54" font-size="7.5" fill="#b7bce0" font-family="sans-serif">   Add acid to alkali until endpoint</text>\n  <text x="148" y="66" font-size="7.5" fill="#b7bce0" font-family="sans-serif">   Record exact volume used</text>\n  <text x="148" y="82" font-size="8" fill="#34d399" font-family="sans-serif">2. Repeat without indicator</text>\n  <text x="148" y="94" font-size="7.5" fill="#b7bce0" font-family="sans-serif">   Use exact volumes from step 1</text>\n  <text x="148" y="106" font-size="7.5" fill="#b7bce0" font-family="sans-serif">   No indicator = pure product</text>\n  <text x="148" y="122" font-size="8" fill="#34d399" font-family="sans-serif">3. Evaporate to crystallise</text>\n  <text x="148" y="134" font-size="7.5" fill="#b7bce0" font-family="sans-serif">   Gently heat salt solution</text>\n  <text x="148" y="150" font-size="8" fill="#34d399" font-family="sans-serif">4. Filter and dry crystals</text>\n  <text x="148" y="166" font-size="7.5" fill="#b7bce0" font-family="sans-serif">   e.g. NaOH + HCl -> NaCl</text>\n  <text x="148" y="178" font-size="7.5" fill="#fb7185" font-family="sans-serif">   Use: soluble acid + soluble base</text>\n</svg>',
        },
      ],

      keyPoints: [
        "Soluble salts from insoluble base/carbonate: add excess solid to acid, filter, evaporate, crystallise.",
        "Soluble salts from soluble base/alkali: titration method — titrate, repeat without indicator, evaporate.",
        "Insoluble salts: precipitation — mix two solutions containing the required ions; filter, wash, dry.",
        "Solubility rules: all nitrates soluble; carbonates and most hydroxides insoluble (except Na⁺, K⁺, NH₄⁺).",
        "Gas tests: H₂ (squeaky pop), O₂ (relights glowing splint), CO₂ (milky limewater), NH₃ (red litmus blue), Cl₂ (bleaches litmus).",
      ],

      strategies: ["Match salt preparation method to solubility of salt AND solubility of base", "Precipitation = two soluble solutions → one insoluble product"],
    },
  ],

  // ─────────────────────── LEARN SMART ───────────────────────
  learn: {
    keyFacts: [
      "Acids produce H⁺(aq) ions in solution; alkalis produce OH⁻(aq) ions.",
      "Strong acids (HCl, H₂SO₄, HNO₃) are fully dissociated; weak acids (CH₃COOH) are only partially dissociated.",
      "Neutralisation ionic equation: H⁺(aq) + OH⁻(aq) → H₂O(l).",
      "Acid + carbonate → salt + water + CO₂; test CO₂ with limewater (turns milky).",
      "Acid + metal → salt + hydrogen; test H₂ with a lit splint (squeaky pop).",
      "ZnO and Al₂O₃ are amphoteric — they react with both acids and alkalis.",
      "pH < 7 acid, pH = 7 neutral, pH > 7 alkaline; each unit = tenfold [H⁺] change.",
      "Insoluble salts are made by precipitation (mixing two solutions containing the required ions).",
      "Solubility: all nitrates soluble; most carbonates and hydroxides insoluble (except Na⁺, K⁺, NH₄⁺ salts).",
      "Cl₂ gas bleaches damp blue litmus; NH₃ turns damp red litmus blue.",
    ],

    flashcards: [
      { front: "What ion is responsible for acidic properties?", back: "H⁺(aq) — the hydrogen (or oxonium) ion produced when an acid dissolves in water." },
      { front: "What is the difference between a strong and a weak acid?", back: "A strong acid is fully dissociated into ions in solution (e.g. HCl). A weak acid is only partially dissociated — an equilibrium exists between molecules and ions (e.g. CH₃COOH)." },
      { front: "Give the ionic equation for neutralisation.", back: "H⁺(aq) + OH⁻(aq) → H₂O(l)" },
      { front: "What are the products of acid + metal carbonate?", back: "Salt + water + carbon dioxide. E.g. CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂" },
      { front: "How do you test for hydrogen gas?", back: "Bring a lit splint to the mouth of the test tube — a squeaky pop confirms H₂." },
      { front: "What is an amphoteric oxide? Give two examples.", back: "An oxide that reacts with BOTH acids and alkalis. Examples: ZnO and Al₂O₃." },
      { front: "What is the colour of universal indicator at pH 7?", back: "Green (neutral)." },
      { front: "How do you prepare an insoluble salt?", back: "Precipitation: mix two solutions each containing one of the required ions; filter, wash, and dry the precipitate." },
      { front: "Which salts are always soluble?", back: "All nitrates; all sodium, potassium, and ammonium salts." },
      { front: "What is the test for CO₂?", back: "Bubble the gas through limewater (Ca(OH)₂(aq)); turns milky/cloudy if CO₂ is present." },
      { front: "Why must indicator be omitted in the second titration run?", back: "To avoid contaminating the pure salt product with coloured indicator dye." },
      { front: "What colour does thymolphthalein turn in an alkali?", back: "Blue (colourless in acid, blue above pH 9.3)." },
    ],

    keyTerms: [
      { term: "Acid", definition: "A substance that produces H⁺(aq) ions when dissolved in water." },
      { term: "Base", definition: "A substance that neutralises an acid; includes metal oxides, hydroxides, and ammonia." },
      { term: "Alkali", definition: "A soluble base that produces OH⁻(aq) ions in solution." },
      { term: "Strong acid", definition: "An acid that is completely dissociated into ions in aqueous solution (e.g. HCl, H₂SO₄, HNO₃)." },
      { term: "Weak acid", definition: "An acid that is only partially dissociated; an equilibrium exists between molecules and ions (e.g. ethanoic acid)." },
      { term: "Neutralisation", definition: "A reaction between an acid and a base/alkali producing a salt and water; ionic equation: H⁺(aq) + OH⁻(aq) → H₂O(l)." },
      { term: "Salt", definition: "A compound formed when the H⁺ of an acid is replaced by a metal ion (or ammonium ion)." },
      { term: "Amphoteric oxide", definition: "An oxide that reacts with both acids and alkalis to form salts; e.g. ZnO, Al₂O₃." },
      { term: "Precipitation", definition: "The formation of an insoluble solid (precipitate) when two solutions are mixed; used to prepare insoluble salts." },
      { term: "Universal indicator", definition: "A mixture of indicators that gives a continuous colour change across the pH range, allowing estimation of pH." },
      { term: "pH scale", definition: "A scale from 0 to 14 measuring acidity/alkalinity; pH = −log₁₀[H⁺]; each unit represents a tenfold change in H⁺ concentration." },
      { term: "Titration", definition: "A quantitative technique for finding the volume of one solution that exactly reacts with a known volume of another; used to prepare salts from soluble acids and alkalis." },
    ],
  },

  // ─────────────────────── QUICK QUIZ ───────────────────────
  quiz: {
    mcq: [
      {
        id: "chem-acids-bases-mcq-q01",
        question: "Which ion is responsible for the acidic properties of hydrochloric acid in aqueous solution?",
        options: ["Cl⁻(aq)", "H⁺(aq)", "OH⁻(aq)", "H₂O"],
        answerIndex: 1,
        explanation: "Acids are defined by the H⁺(aq) ion they produce in solution. Cl⁻ is the conjugate base and does not cause acidity. OH⁻ is the alkaline ion. H₂O is the solvent.",
        difficulty: "warmup",
        guideRef: "Acids and Alkalis: Ion Definitions",
      },
      {
        id: "chem-acids-bases-mcq-q02",
        question: "What colour does universal indicator turn at pH 1?",
        options: ["Green", "Yellow", "Orange", "Red"],
        answerIndex: 3,
        explanation: "pH 1 is a strongly acidic solution. Universal indicator is red at pH 1–2. Green is neutral (pH 7), yellow is around pH 5–6, and orange is around pH 3–4.",
        difficulty: "warmup",
        guideRef: "The pH Scale and Indicators",
      },
      {
        id: "chem-acids-bases-mcq-q03",
        question: "Which statement correctly distinguishes a strong acid from a concentrated acid?",
        options: [
          "A strong acid has more moles per dm³ than a concentrated acid.",
          "A strong acid is fully dissociated in water; concentration refers to moles per dm³.",
          "A concentrated acid has a lower pH than a strong acid of equal volume.",
          "Strong and concentrated both mean the same: high H⁺ concentration.",
        ],
        answerIndex: 1,
        explanation: "Strength describes the degree of dissociation (ionisation): a strong acid fully ionises. Concentration describes moles of acid per dm³ of solution. They are independent — you can have dilute strong acid or concentrated weak acid.",
        difficulty: "core",
        hints: [
          "Think about what happens at the molecular level when HCl dissolves vs when CH₃COOH dissolves.",
          "Does all of the HCl produce H⁺ ions, or only some?",
          "Strength = fraction that dissociates. Concentration = total moles per dm³.",
        ],
        guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
      },
      {
        id: "chem-acids-bases-mcq-q04",
        question: "When excess zinc carbonate is added to dilute sulfuric acid and the mixture is filtered, what does the filtrate contain?",
        options: [
          "ZnSO₄(aq) and excess H₂SO₄(aq)",
          "ZnSO₄(aq) only",
          "ZnCO₃(s) and ZnSO₄(aq)",
          "H₂SO₄(aq) only",
        ],
        answerIndex: 1,
        explanation: "Excess zinc carbonate ensures all the acid reacts: ZnCO₃ + H₂SO₄ → ZnSO₄ + H₂O + CO₂. The filtrate is pure ZnSO₄(aq) — all acid is consumed and excess solid is removed by filtration.",
        difficulty: "core",
        hints: [
          "What does 'excess' of the base/carbonate guarantee about the acid?",
          "After the reaction, what solids might remain? What stays in solution?",
        ],
        guideRef: "Preparing Salts and Gas Tests",
      },
      {
        id: "chem-acids-bases-mcq-q05",
        question: "Which of the following is an amphoteric oxide?",
        options: ["CO₂", "MgO", "Al₂O₃", "SO₃"],
        answerIndex: 2,
        explanation: "Al₂O₃ reacts with both acids (e.g. HCl → AlCl₃ + H₂O) and alkalis (e.g. NaOH → NaAlO₂ + H₂O). CO₂ and SO₃ are acidic oxides; MgO is a basic oxide.",
        difficulty: "core",
        hints: [
          "Amphoteric means reacting with BOTH acids AND alkalis.",
          "Which element — Al, C, Mg, or S — is in the 'border zone' between metals and non-metals?",
        ],
        guideRef: "Classification of Oxides",
      },
      {
        id: "chem-acids-bases-mcq-q06",
        question: "A student wants to prepare a pure sample of lead(II) iodide (PbI₂), which is insoluble. Which method should she use?",
        options: [
          "Add excess lead foil to hydroiodic acid, filter, and evaporate.",
          "Titrate lead(II) nitrate solution against potassium iodide solution.",
          "Mix lead(II) nitrate solution with potassium iodide solution, filter the precipitate.",
          "Dissolve lead(II) oxide in hydroiodic acid, then evaporate.",
        ],
        answerIndex: 2,
        explanation: "PbI₂ is insoluble, so it is made by precipitation. Mixing Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq). The precipitate is filtered, washed, and dried. Titration is for soluble salts from soluble bases; evaporation methods give soluble salts.",
        difficulty: "core",
        hints: [
          "The key is that PbI₂ is insoluble — which method gives an insoluble product?",
          "Precipitation = two solutions whose ions combine to form an insoluble solid.",
        ],
        guideRef: "Preparing Salts and Gas Tests",
      },
    ],

    qa: [
      {
        id: "chem-acids-bases-qa-q01",
        question: "Write the balanced chemical equation, including state symbols, for the reaction of magnesium with dilute hydrochloric acid. State the test for the gas produced and the observation. [4 marks]",
        marks: 4,
        modelAnswer:
          "Balanced equation: Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)\n\nThe gas produced is hydrogen (H₂). To test: hold a lit splint at the mouth of the test tube containing the gas. Observation: a squeaky pop is heard, confirming hydrogen.",
        markScheme: [
          "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g) — correct formulae and balancing [1 mark]",
          "Correct state symbols throughout [1 mark]",
          "Test: bring a lit splint to the mouth of the tube [1 mark]",
          "Observation: squeaky pop [1 mark]",
        ],
        commonError: "Writing MgCl instead of MgCl₂ — magnesium forms Mg²⁺ ions so two Cl⁻ ions are needed. Also omitting state symbols entirely.",
        difficulty: "warmup",
        guideRef: "Reactions of Acids",
      },
      {
        id: "chem-acids-bases-qa-q02",
        question: "A student has 0.1 mol/dm³ solutions of hydrochloric acid (HCl) and ethanoic acid (CH₃COOH). She measures the pH of each with a pH meter.\n\n(a) Predict which solution has the lower pH. Explain in terms of ions. [3 marks]\n(b) Write an equation showing the dissociation of ethanoic acid in water, using the correct arrow type. [1 mark]\n(c) Explain what is meant by a 'weak acid'. [2 marks]",
        marks: 6,
        modelAnswer:
          "(a) HCl has the lower pH. HCl is a strong acid — it is fully dissociated in solution, producing [H⁺] ≈ 0.1 mol/dm³ (pH ≈ 1). Ethanoic acid is a weak acid — only a small fraction of its molecules dissociate, producing far fewer H⁺ ions (pH ≈ 2.9), even though both solutions have the same concentration.\n\n(b) CH₃COOH(aq) ⇌ CH₃COO⁻(aq) + H⁺(aq)  [reversible arrow required]\n\n(c) A weak acid is one that is only partially dissociated (ionised) in aqueous solution. An equilibrium is established between the undissociated acid molecules and their ions, with the equilibrium lying to the left (mostly undissociated).",
        markScheme: [
          "(a) HCl has the lower pH [1]",
          "(a) HCl fully dissociates / is a strong acid, producing more H⁺ ions [1]",
          "(a) CH₃COOH only partially dissociates, fewer H⁺ ions despite same concentration [1]",
          "(b) CH₃COOH ⇌ CH₃COO⁻ + H⁺ with reversible arrow [1]",
          "(c) Only partially dissociated / ionised in solution [1]",
          "(c) Equilibrium between molecules and ions / mostly undissociated [1]",
        ],
        commonError: "Confusing strength with concentration — stating that ethanoic acid has a higher pH because it is 'less concentrated'. Both solutions are 0.1 mol/dm³; the difference is the *degree of dissociation*.",
        difficulty: "core",
        hints: [
          "Think about what fraction of HCl molecules actually become H⁺ ions versus the fraction for CH₃COOH.",
          "Which arrow type indicates an equilibrium (reversible reaction)?",
          "The key phrase for a weak acid is 'partially dissociated' — not 'partially soluble'.",
          "Remember: concentration = moles per dm³ (same for both); strength = extent of ionisation (different).",
        ],
        guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
        strategy: "Define, compare, explain with ions",
      },
      {
        id: "chem-acids-bases-qa-q03",
        question: "A student wishes to prepare a pure dry sample of copper(II) sulfate crystals (CuSO₄·5H₂O) starting from copper(II) oxide (CuO) and dilute sulfuric acid. Describe in detail the procedure, including the role of using excess copper(II) oxide. Write the balanced equation for the reaction. [6 marks]",
        marks: 6,
        modelAnswer:
          "Balanced equation: CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l)\n\nProcedure:\n1. Warm the dilute sulfuric acid gently in a beaker.\n2. Add excess copper(II) oxide (black powder) to the acid in small portions, stirring until no more dissolves and a black residue remains. (Excess CuO ensures all the acid is neutralised — preventing acid contamination of the final salt.)\n3. Filter the hot mixture through filter paper in a funnel into a conical flask to remove the excess CuO.\n4. Heat the blue filtrate (CuSO₄ solution) gently on an evaporating dish over a water bath until crystals begin to form at the edges, then allow to cool to form blue crystals.\n5. Filter to collect the crystals, wash with a small amount of distilled water, then pat dry with filter paper and leave to dry in a warm oven (below 40 °C to avoid dehydration).",
        markScheme: [
          "CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l) correct and balanced [1]",
          "Add excess CuO to acid; stir until no more dissolves / black residue remains [1]",
          "Excess CuO ensures all acid reacts / prevents acid contamination of salt [1]",
          "Filter to remove excess CuO / residue [1]",
          "Evaporate/heat filtrate until crystals start to form / allow to cool to crystallise [1]",
          "Filter crystals, wash with distilled water, dry (in oven at low temperature) [1]",
        ],
        commonError: "Adding the acid to the base rather than the base to the acid — while both work here, the question asks you to add excess base to acid. A common omission is not explaining WHY excess solid is used (to consume all the acid).",
        difficulty: "core",
        hints: [
          "This is the 'excess insoluble base + acid' method — which step guarantees no acid remains?",
          "After the reaction, you have both dissolved salt AND excess solid. How do you separate them?",
          "How do you get solid crystals from a solution?",
          "Why should you evaporate only partially (not to complete dryness)?",
        ],
        guideRef: "Preparing Salts and Gas Tests",
        strategy: "Sequence the method: react → separate → crystallise → dry",
      },
    ],
  },

  // ─────────────────────── QUESTION BANK ───────────────────────
  questionBank: {
    mcqPapers: [
      // ── MCQ PAPER 1 ── definitions, pH, indicators, ion behaviour
      {
        id: "chem-acids-bases-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Acid/base/alkali definitions, the pH scale, indicators, and the ions responsible for acidity and alkalinity.",
        questions: [
          {
            id: "chem-acids-bases-bm1-01",
            question: "Which ion is always produced when an alkali dissolves in water?",
            options: ["H⁺(aq)", "OH⁻(aq)", "O²⁻(aq)", "H₂O"],
            answerIndex: 1,
            explanation: "An alkali is a soluble base that dissolves in water to produce hydroxide ions, OH⁻(aq). H⁺(aq) is the acidic ion. O²⁻ exists in solid oxides but reacts with water rather than persisting in solution. H₂O is the solvent.",
            difficulty: "warmup",
            guideRef: "Acids and Alkalis: Ion Definitions",
          },
          {
            id: "chem-acids-bases-bm1-02",
            question: "What colour is litmus in a solution of pH 12?",
            options: ["Red", "Purple", "Blue", "Colourless"],
            answerIndex: 2,
            explanation: "pH 12 is alkaline. Litmus turns blue in alkalis (pH > 7), red in acids, and purple/violet at neutral. Litmus is never colourless.",
            difficulty: "warmup",
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bm1-03",
            question: "A solution has a pH of 3. Compared with a solution of pH 5, its hydrogen ion concentration is:",
            options: [
              "2 times greater",
              "10 times greater",
              "100 times greater",
              "1000 times greater",
            ],
            answerIndex: 2,
            explanation: "The pH scale is logarithmic: each unit represents a tenfold change in [H⁺]. From pH 5 to pH 3 is a decrease of 2 pH units, so [H⁺] increases by 10 × 10 = 100 times.",
            difficulty: "core",
            hints: [
              "Each pH unit corresponds to a factor of ten in H⁺ concentration.",
              "How many units apart are pH 3 and pH 5?",
              "Two units means 10 × 10.",
            ],
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bm1-04",
            question: "Which statement about bases and alkalis is correct?",
            options: [
              "All bases are alkalis.",
              "All alkalis are bases, but not all bases are alkalis.",
              "Alkalis are bases that are insoluble in water.",
              "A base must contain a metal; an alkali must not.",
            ],
            answerIndex: 1,
            explanation: "An alkali is simply a base that is soluble in water. Therefore every alkali is a base, but bases such as copper(II) oxide are insoluble and so are not alkalis. Aqueous ammonia is an alkali that contains no metal, disproving the last option.",
            difficulty: "core",
            hints: [
              "An alkali is a special kind of base — the soluble kind.",
              "Is copper(II) oxide soluble in water? Is it still a base?",
              "Think about whether the 'subset' relation runs base→alkali or alkali→base.",
            ],
            guideRef: "Acids and Alkalis: Ion Definitions",
          },
          {
            id: "chem-acids-bases-bm1-05",
            question: "Which indicator would be most suitable for showing the endpoint of a titration as the colour changes from colourless to blue?",
            options: ["Litmus", "Methyl orange", "Thymolphthalein", "Universal indicator"],
            answerIndex: 2,
            explanation: "Thymolphthalein is colourless in acid and blue in alkali (colour change around pH 9.3–10.5), giving a sharp colourless-to-blue endpoint. Methyl orange changes red↔yellow. Litmus and universal indicator do not give a single sharp colourless-to-blue change.",
            difficulty: "core",
            hints: [
              "Which indicator is described as colourless in acid?",
              "Methyl orange goes red to yellow, not colourless to blue.",
              "Match the stated colours (colourless → blue) to the indicator.",
            ],
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bm1-06",
            question: "When hydrogen chloride gas is dissolved in water, the species mainly responsible for acidic behaviour is best represented at IGCSE as:",
            options: ["HCl(aq)", "Cl⁻(aq)", "H⁺(aq)", "H₂(g)"],
            answerIndex: 2,
            explanation: "HCl ionises completely in water: HCl(g) → H⁺(aq) + Cl⁻(aq). The H⁺(aq) ion (in reality H₃O⁺) is responsible for all acidic properties. Cl⁻ is a spectator; no hydrogen gas is formed by simple dissolving.",
            difficulty: "warmup",
            guideRef: "Acids and Alkalis: Ion Definitions",
          },
          {
            id: "chem-acids-bases-bm1-07",
            question: "A colourless solution turns methyl orange yellow and turns red litmus blue. The solution is most likely:",
            options: [
              "A strong acid such as dilute HCl",
              "A neutral solution such as pure water",
              "An alkaline solution such as dilute NaOH",
              "A weakly acidic solution such as ethanoic acid",
            ],
            answerIndex: 2,
            explanation: "Methyl orange is yellow above pH 4.4 (i.e. in neutral and alkaline solutions), but red litmus turning blue specifically indicates an alkali (pH > 7). Only an alkaline solution satisfies both observations. An acid would turn methyl orange red and leave litmus red.",
            difficulty: "challenge",
            hints: [
              "Red litmus turning blue is a definite test — what does it prove?",
              "Methyl orange is yellow in both neutral and alkaline solutions.",
              "Combine the two clues: which single category fits both?",
            ],
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bm1-08",
            question: "Which of these is an alkali that contains no metal atom?",
            options: ["Calcium hydroxide", "Potassium hydroxide", "Aqueous ammonia", "Sodium hydroxide"],
            answerIndex: 2,
            explanation: "Aqueous ammonia, NH₃(aq), is a soluble base (alkali) that produces OH⁻ ions (NH₃ + H₂O ⇌ NH₄⁺ + OH⁻) yet contains no metal. The other three all contain a metal cation (Ca, K, Na).",
            difficulty: "warmup",
            guideRef: "Acids and Alkalis: Ion Definitions",
          },
          {
            id: "chem-acids-bases-bm1-09",
            question: "Universal indicator is added to four solutions. Which colour indicates the most strongly acidic solution?",
            options: ["Green", "Yellow", "Red", "Purple"],
            answerIndex: 2,
            explanation: "Universal indicator is red at the low (most acidic) end of the scale (pH 1–2). Yellow is mildly acidic (pH 5–6), green is neutral (pH 7), and purple is strongly alkaline (pH 11–14).",
            difficulty: "warmup",
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bm1-10",
            question: "Two solutions, X and Y, have pH values of 1 and 4 respectively. Both are monoprotic strong acids. What can be concluded?",
            options: [
              "X is a stronger acid than Y.",
              "X has 1000 times the H⁺ concentration of Y, but they may have the same strength.",
              "Y is more concentrated than X.",
              "X and Y must be different acids.",
            ],
            answerIndex: 1,
            explanation: "Both are described as strong acids, so both are fully dissociated — they have the same strength. The pH difference of 3 units means X has 10³ = 1000 times the [H⁺] of Y, which is explained by X being more concentrated, not 'stronger'. Strength (full dissociation) is fixed; concentration differs.",
            difficulty: "challenge",
            hints: [
              "Both are STRONG acids — so what can you say about their degree of dissociation?",
              "If strength is the same, what causes the different pH?",
              "Convert the 3-unit pH gap into a concentration ratio.",
              "Do not confuse 'stronger' (dissociation) with 'more concentrated' (moles per dm³).",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
          },
        ],
      },
      // ── MCQ PAPER 2 ── reactions of acids, salts, gas tests
      {
        id: "chem-acids-bases-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Reactions of acids with metals, bases, and carbonates; naming salts; gas tests.",
        questions: [
          {
            id: "chem-acids-bases-bm2-01",
            question: "Which products form when dilute hydrochloric acid reacts with magnesium?",
            options: [
              "Magnesium chloride + water",
              "Magnesium chloride + hydrogen",
              "Magnesium chloride + water + carbon dioxide",
              "Magnesium oxide + hydrogen",
            ],
            answerIndex: 1,
            explanation: "Acid + reactive metal → salt + hydrogen. Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g). Water forms with bases, and CO₂ forms with carbonates.",
            difficulty: "warmup",
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bm2-02",
            question: "Which salt is formed when nitric acid reacts with potassium hydroxide?",
            options: ["Potassium nitrate", "Potassium nitrite", "Potassium sulfate", "Potassium chloride"],
            answerIndex: 0,
            explanation: "The salt name = metal cation + acid anion. Nitric acid (HNO₃) gives the nitrate ion (NO₃⁻), so the salt is potassium nitrate, KNO₃. HNO₃ + KOH → KNO₃ + H₂O.",
            difficulty: "warmup",
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bm2-03",
            question: "A gas is bubbled through limewater and the limewater turns milky. The gas is:",
            options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Ammonia"],
            answerIndex: 2,
            explanation: "Carbon dioxide turns limewater (calcium hydroxide solution) milky/cloudy because insoluble calcium carbonate forms: CO₂ + Ca(OH)₂ → CaCO₃ + H₂O. Hydrogen gives a squeaky pop; oxygen relights a glowing splint; ammonia turns red litmus blue.",
            difficulty: "warmup",
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm2-04",
            question: "Which balanced equation correctly represents the reaction of sodium carbonate with dilute hydrochloric acid?",
            options: [
              "Na₂CO₃ + HCl → NaCl + H₂O + CO₂",
              "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂",
              "NaCO₃ + 2HCl → NaCl₂ + H₂O + CO₂",
              "Na₂CO₃ + 2HCl → 2NaCl + H₂ + CO₂",
            ],
            answerIndex: 1,
            explanation: "Sodium carbonate is Na₂CO₃; it needs 2HCl to balance the two sodium atoms. The products are 2NaCl + H₂O + CO₂. Option A is unbalanced, C uses wrong formulae, and D wrongly produces H₂ instead of H₂O.",
            difficulty: "core",
            hints: [
              "Write the correct formula for sodium carbonate first.",
              "Count the sodium atoms — how many HCl are needed to match them?",
              "Acid + carbonate gives water, not hydrogen gas.",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bm2-05",
            question: "Which reaction would you use the test 'glowing splint relights' to identify the gas produced?",
            options: [
              "Zinc + sulfuric acid",
              "Decomposition of hydrogen peroxide",
              "Calcium carbonate + hydrochloric acid",
              "Ammonium chloride + sodium hydroxide on warming",
            ],
            answerIndex: 1,
            explanation: "A glowing splint relighting is the test for oxygen. The decomposition of hydrogen peroxide (2H₂O₂ → 2H₂O + O₂) releases oxygen. Zinc + acid gives H₂ (squeaky pop); carbonate + acid gives CO₂; ammonium salt + alkali gives NH₃.",
            difficulty: "core",
            hints: [
              "Which gas relights a glowing splint?",
              "Which of the listed reactions produces that gas?",
              "Hydrogen peroxide is famous for producing one particular gas as it decomposes.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm2-06",
            question: "Dilute sulfuric acid is reacted with zinc oxide. Which salt is produced?",
            options: ["Zinc sulfide", "Zinc sulfate", "Zinc sulfite", "Zinc hydroxide"],
            answerIndex: 1,
            explanation: "Sulfuric acid (H₂SO₄) provides the sulfate ion (SO₄²⁻). ZnO + H₂SO₄ → ZnSO₄ + H₂O, so the salt is zinc sulfate. Sulfide (S²⁻) and sulfite (SO₃²⁻) come from different compounds.",
            difficulty: "warmup",
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bm2-07",
            question: "Copper does not react with dilute hydrochloric acid. The best explanation is that:",
            options: [
              "Copper is too dense to react",
              "Copper is below hydrogen in the reactivity series, so it cannot displace hydrogen from the acid",
              "Copper chloride is insoluble",
              "Hydrochloric acid is too weak to react with any metal",
            ],
            answerIndex: 1,
            explanation: "Only metals above hydrogen in the reactivity series displace hydrogen from dilute acids. Copper lies below hydrogen, so no reaction occurs. Copper(II) chloride is in fact soluble, and HCl readily reacts with reactive metals.",
            difficulty: "core",
            hints: [
              "Acid + metal → salt + hydrogen only works for certain metals.",
              "Where does copper sit relative to hydrogen in the reactivity series?",
              "A metal must be more reactive than hydrogen to push it out of the acid.",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bm2-08",
            question: "Which observation correctly identifies chlorine gas?",
            options: [
              "Turns damp blue litmus red then bleaches it white",
              "Gives a squeaky pop with a lit splint",
              "Turns limewater milky",
              "Turns damp red litmus blue",
            ],
            answerIndex: 0,
            explanation: "Chlorine is a pale yellow-green gas that turns damp blue litmus red (it is acidic) and then bleaches it white. The squeaky pop is hydrogen, milky limewater is CO₂, and red litmus turning blue is ammonia.",
            difficulty: "core",
            hints: [
              "Chlorine is acidic AND a bleach — what does it do to litmus in two stages?",
              "Which gas removes the colour from indicator paper?",
              "Distinguish chlorine's two-step effect from ammonia's single effect.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm2-09",
            question: "25.0 cm³ of dilute hydrochloric acid exactly neutralises 2.00 g of calcium carbonate (Mr = 100). Using CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂, what amount of HCl in moles reacted?",
            options: ["0.0100 mol", "0.0200 mol", "0.0400 mol", "0.0500 mol"],
            answerIndex: 2,
            explanation: "Moles of CaCO₃ = 2.00 / 100 = 0.0200 mol. The equation shows 1 CaCO₃ reacts with 2 HCl, so moles of HCl = 2 × 0.0200 = 0.0400 mol.",
            difficulty: "challenge",
            hints: [
              "First find moles of calcium carbonate (mass ÷ Mr).",
              "Read the mole ratio of CaCO₃ to HCl from the balanced equation.",
              "The ratio is 1:2 — so multiply the carbonate moles accordingly.",
              "0.0200 × 2 = ?",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bm2-10",
            question: "A metal M reacts with dilute sulfuric acid to give a salt MSO₄ and hydrogen. What is the most likely charge on the ion of metal M?",
            options: ["1+", "2+", "3+", "1−"],
            answerIndex: 1,
            explanation: "The sulfate ion is SO₄²⁻ (2−). For the salt MSO₄ to be electrically neutral with a 1:1 ratio, M must be M²⁺. (A 1+ metal would give M₂SO₄, a 3+ metal would give M₂(SO₄)₃.)",
            difficulty: "challenge",
            hints: [
              "What is the charge on the sulfate ion?",
              "The formula MSO₄ has one M to one SO₄ — so charges must balance one-to-one.",
              "If sulfate is 2−, M must be ?+",
              "Check by imagining a 1+ metal: would the formula be MSO₄ or M₂SO₄?",
            ],
            guideRef: "Reactions of Acids",
          },
        ],
      },
      // ── MCQ PAPER 3 ── oxides, salt preparation, solubility
      {
        id: "chem-acids-bases-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Classification of oxides, salt preparation methods, solubility rules, and precipitation.",
        questions: [
          {
            id: "chem-acids-bases-bm3-01",
            question: "Which of the following is a basic oxide?",
            options: ["CO₂", "SO₃", "MgO", "Al₂O₃"],
            answerIndex: 2,
            explanation: "MgO is a metal oxide that reacts with acids to form a salt and water (MgO + 2HCl → MgCl₂ + H₂O), making it basic. CO₂ and SO₃ are acidic oxides; Al₂O₃ is amphoteric.",
            difficulty: "warmup",
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bm3-02",
            question: "Which salt is INSOLUBLE in water?",
            options: ["Sodium nitrate", "Potassium sulfate", "Barium sulfate", "Ammonium chloride"],
            answerIndex: 2,
            explanation: "Barium sulfate (BaSO₄) is insoluble — most sulfates are soluble except BaSO₄, PbSO₄ and CaSO₄. All sodium, potassium, ammonium salts and all nitrates are soluble.",
            difficulty: "warmup",
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm3-03",
            question: "Zinc oxide reacts with both dilute hydrochloric acid and sodium hydroxide solution. This shows that zinc oxide is:",
            options: ["A basic oxide", "An acidic oxide", "A neutral oxide", "An amphoteric oxide"],
            answerIndex: 3,
            explanation: "An amphoteric oxide reacts with both acids and alkalis. ZnO + 2HCl → ZnCl₂ + H₂O and ZnO + 2NaOH → Na₂ZnO₂ + H₂O. Al₂O₃ behaves similarly.",
            difficulty: "core",
            hints: [
              "Reacting with an acid suggests basic character; reacting with an alkali suggests acidic character.",
              "What do we call an oxide that does BOTH?",
              "ZnO and Al₂O₃ are the two classic IGCSE examples.",
            ],
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bm3-04",
            question: "Which method is most appropriate for preparing a pure sample of insoluble silver chloride?",
            options: [
              "Adding excess silver to hydrochloric acid and filtering",
              "Titrating silver nitrate solution against hydrochloric acid using an indicator",
              "Mixing silver nitrate solution with sodium chloride solution and filtering the precipitate",
              "Evaporating a solution of silver nitrate and sodium chloride to dryness",
            ],
            answerIndex: 2,
            explanation: "Silver chloride is insoluble, so it is made by precipitation: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq). The precipitate is filtered, washed with distilled water, and dried. Evaporating to dryness would leave the soluble NaNO₃ mixed in.",
            difficulty: "core",
            hints: [
              "Is silver chloride soluble or insoluble?",
              "Insoluble salts are made by combining two soluble solutions.",
              "Choose two solutions that supply Ag⁺ and Cl⁻ separately.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm3-05",
            question: "Carbon monoxide (CO) reacts with neither acids nor alkalis. It is therefore classified as:",
            options: ["An acidic oxide", "A basic oxide", "A neutral oxide", "An amphoteric oxide"],
            answerIndex: 2,
            explanation: "Neutral oxides react with neither acids nor alkalis. CO, H₂O and NO are the common IGCSE neutral oxides. (Note CO is a non-metal oxide but is NOT acidic.)",
            difficulty: "warmup",
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bm3-06",
            question: "In preparing copper(II) sulfate crystals by adding excess copper(II) oxide to warm dilute sulfuric acid, why is excess copper(II) oxide used?",
            options: [
              "To make the reaction faster",
              "To ensure all the acid is used up so the product is not contaminated with acid",
              "To increase the yield of carbon dioxide",
              "To act as a catalyst for crystallisation",
            ],
            answerIndex: 1,
            explanation: "Using excess insoluble base guarantees that all the acid reacts. The unreacted excess solid is then filtered off, leaving pure copper(II) sulfate solution with no contaminating acid. No CO₂ is involved, and CuO is not a catalyst.",
            difficulty: "core",
            hints: [
              "What problem would leftover acid cause in the final salt?",
              "Excess solid can be removed easily by one technique — which?",
              "The aim is a pure, acid-free product.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm3-07",
            question: "Which pair of solutions, when mixed, would produce a precipitate?",
            options: [
              "Sodium chloride + potassium nitrate",
              "Lead(II) nitrate + potassium iodide",
              "Sodium sulfate + potassium chloride",
              "Ammonium nitrate + sodium chloride",
            ],
            answerIndex: 1,
            explanation: "Lead(II) nitrate + potassium iodide gives insoluble lead(II) iodide: Pb(NO₃)₂ + 2KI → PbI₂(s) + 2KNO₃ (a bright yellow precipitate). In the other pairs every possible product (NaNO₃, KCl, Na₂SO₄, KNO₃, etc.) is soluble, so no precipitate forms.",
            difficulty: "challenge",
            hints: [
              "A precipitate forms only if one of the possible products is insoluble.",
              "Swap the ions in each pair and check the solubility rules.",
              "Lead salts of halides are a classic insoluble example.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm3-08",
            question: "Which oxide would react with sodium hydroxide solution to form a salt and water?",
            options: ["MgO", "Na₂O", "SO₂", "CaO"],
            answerIndex: 2,
            explanation: "SO₂ is an acidic (non-metal) oxide and reacts with the alkali NaOH: SO₂ + 2NaOH → Na₂SO₃ + H₂O. MgO, Na₂O and CaO are basic oxides and react with acids, not alkalis.",
            difficulty: "core",
            hints: [
              "Reacting with an alkali (NaOH) is the behaviour of which class of oxide?",
              "Acidic oxides are oxides of non-metals.",
              "Pick the non-metal oxide from the list.",
            ],
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bm3-09",
            question: "A student needs to make pure dry crystals of zinc nitrate (a soluble salt) from solid zinc carbonate (insoluble) and dilute nitric acid. The correct sequence of steps is:",
            options: [
              "Mix two solutions → filter precipitate → wash → dry",
              "Titrate with indicator → repeat without indicator → evaporate",
              "Add excess zinc carbonate to warm acid → filter off excess → evaporate filtrate to crystallise → dry",
              "Add excess acid to zinc carbonate → evaporate to dryness immediately",
            ],
            answerIndex: 2,
            explanation: "Zinc nitrate is soluble and zinc carbonate is insoluble, so the excess-insoluble-base method is used: add excess ZnCO₃ until no more reacts, filter off the excess solid, then evaporate the filtrate to the point of crystallisation and dry. Titration is for soluble bases; precipitation is for insoluble salts; evaporating to dryness can decompose the salt and retain impurities.",
            difficulty: "core",
            hints: [
              "Is the base soluble or insoluble? That decides the method.",
              "Excess insoluble solid must be removed — by what step?",
              "Why not evaporate straight to dryness?",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm3-10",
            question: "Aluminium oxide reacts with both 2HCl per oxide unit pair and with NaOH. Which equation for its reaction with hydrochloric acid is correctly balanced?",
            options: [
              "Al₂O₃ + 3HCl → 2AlCl₃ + 3H₂O",
              "Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O",
              "AlO₃ + 6HCl → AlCl₆ + 3H₂O",
              "Al₂O₃ + 6HCl → 2AlCl₂ + 3H₂O",
            ],
            answerIndex: 1,
            explanation: "Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O is balanced: 2 Al, 3 O on the left; 6 H and 6 Cl on the left match 2AlCl₃ (6 Cl) and 3H₂O (6 H, 3 O). Option A has too few HCl; C and D use incorrect formulae (aluminium is Al³⁺, so AlCl₃).",
            difficulty: "challenge",
            hints: [
              "Aluminium forms Al³⁺, so the chloride is AlCl₃.",
              "Balance the 2 aluminium atoms first → 2AlCl₃, needing 6 Cl.",
              "Six Cl atoms require how many HCl?",
              "Finally balance oxygen and hydrogen with water.",
            ],
            guideRef: "Classification of Oxides",
          },
        ],
      },
      // ── MCQ PAPER 4 ── mixed synthesis & challenge
      {
        id: "chem-acids-bases-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Mixed and higher-demand questions: strength vs concentration, water of crystallisation, equations, and salt selection.",
        questions: [
          {
            id: "chem-acids-bases-bm4-01",
            question: "Hydrated copper(II) sulfate has the formula CuSO₄·5H₂O. The '·5H₂O' represents:",
            options: [
              "Five water molecules chemically bound as water of crystallisation",
              "Five hydrogen atoms in the salt",
              "An impurity that must be removed",
              "Dissolved gas trapped in the crystal",
            ],
            answerIndex: 0,
            explanation: "Water of crystallisation is a fixed number of water molecules chemically combined within the crystal structure. CuSO₄·5H₂O contains five such water molecules per formula unit; heating drives them off to give white anhydrous CuSO₄.",
            difficulty: "warmup",
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm4-02",
            question: "Which of the following correctly pairs an acid with the salt it forms?",
            options: [
              "Nitric acid → sulfate",
              "Sulfuric acid → chloride",
              "Hydrochloric acid → chloride",
              "Phosphoric acid → nitrate",
            ],
            answerIndex: 2,
            explanation: "Hydrochloric acid (HCl) forms chlorides. Nitric acid forms nitrates, sulfuric acid forms sulfates, and phosphoric acid (H₃PO₄) forms phosphates. Only option C matches correctly.",
            difficulty: "warmup",
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bm4-03",
            question: "When blue hydrated copper(II) sulfate is heated strongly, the colour change observed is:",
            options: [
              "Blue to white",
              "White to blue",
              "Blue to green",
              "Blue to black",
            ],
            answerIndex: 0,
            explanation: "Heating drives off the water of crystallisation: CuSO₄·5H₂O (blue) → CuSO₄ (white) + 5H₂O. Adding water reverses it (white → blue), which is why anhydrous copper(II) sulfate is used as a test for water.",
            difficulty: "core",
            hints: [
              "Heating removes the water of crystallisation.",
              "Which form is blue — the hydrated or the anhydrous?",
              "The reverse change (adding water) is the classic test for water.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm4-04",
            question: "A 1 mol/dm³ solution of ethanoic acid has a higher pH than a 1 mol/dm³ solution of hydrochloric acid. The best explanation is that:",
            options: [
              "Ethanoic acid is more dilute",
              "Ethanoic acid is only partially dissociated, producing fewer H⁺ ions",
              "Ethanoic acid contains no hydrogen",
              "Hydrochloric acid is a weak acid",
            ],
            answerIndex: 1,
            explanation: "Both solutions are 1 mol/dm³ (same concentration), but ethanoic acid is a weak acid that only partially dissociates, so it produces fewer H⁺ ions and thus a higher pH. HCl is strong (fully dissociated).",
            difficulty: "core",
            hints: [
              "The concentrations are equal, so concentration is not the answer.",
              "What fraction of ethanoic acid molecules actually release H⁺?",
              "Fewer H⁺ ions means a higher or lower pH?",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
          },
          {
            id: "chem-acids-bases-bm4-05",
            question: "Which statement about the reaction H⁺(aq) + OH⁻(aq) → H₂O(l) is correct?",
            options: [
              "It represents the precipitation of an insoluble salt",
              "It is the net ionic equation for any neutralisation of a strong acid by a strong alkali",
              "It only occurs with hydrochloric acid and sodium hydroxide",
              "It produces hydrogen gas",
            ],
            answerIndex: 1,
            explanation: "H⁺(aq) + OH⁻(aq) → H₂O(l) is the net ionic equation common to all strong acid–strong alkali neutralisations; the spectator ions are omitted. No gas or precipitate is formed — only water.",
            difficulty: "core",
            hints: [
              "What is left after cancelling the spectator ions in NaOH + HCl?",
              "Does this equation depend on which particular acid and alkali are used?",
              "The single product is a familiar liquid.",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bm4-06",
            question: "Which of these salts could NOT be made directly by reacting a metal with a dilute acid?",
            options: [
              "Magnesium sulfate from magnesium",
              "Zinc chloride from zinc",
              "Copper(II) sulfate from copper",
              "Iron(II) chloride from iron",
            ],
            answerIndex: 2,
            explanation: "Copper lies below hydrogen in the reactivity series, so it does not react with dilute acids; copper(II) sulfate must be made from copper(II) oxide (or carbonate) instead. Mg, Zn and Fe are all above hydrogen and react with dilute acids.",
            difficulty: "core",
            hints: [
              "Acid + metal works only for metals above hydrogen.",
              "Which of these metals is unreactive towards dilute acid?",
              "Copper salts are usually made from copper oxide, not copper metal — why?",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bm4-07",
            question: "Which observation distinguishes a strong acid from a weak acid of the SAME concentration when each is reacted with magnesium ribbon?",
            options: [
              "Only the strong acid reacts at all",
              "The strong acid produces fizzing faster (more vigorous effervescence)",
              "Only the weak acid produces hydrogen gas",
              "There is no observable difference",
            ],
            answerIndex: 1,
            explanation: "Both acids react with magnesium to give hydrogen, but the strong acid has a higher [H⁺], so the reaction is faster — more vigorous bubbling. The weak acid still reacts (eventually using the same total moles of acid) but more slowly at the start.",
            difficulty: "challenge",
            hints: [
              "Both acids contain H⁺, so both react — rule out 'only one reacts'.",
              "Strength affects the concentration of H⁺ present at any instant.",
              "Higher [H⁺] means a faster rate — what would you see?",
              "The difference is in rate/vigour, not in whether a reaction happens.",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
          },
          {
            id: "chem-acids-bases-bm4-08",
            question: "20.0 cm³ of sodium hydroxide solution is exactly neutralised by 25.0 cm³ of 0.100 mol/dm³ hydrochloric acid (NaOH + HCl → NaCl + H₂O). What is the concentration of the sodium hydroxide?",
            options: ["0.080 mol/dm³", "0.100 mol/dm³", "0.125 mol/dm³", "0.250 mol/dm³"],
            answerIndex: 2,
            explanation: "Moles HCl = 0.100 × 25.0/1000 = 0.00250 mol. Ratio NaOH:HCl = 1:1, so moles NaOH = 0.00250 mol. Concentration = 0.00250 / (20.0/1000) = 0.125 mol/dm³.",
            difficulty: "challenge",
            hints: [
              "Find moles of HCl: concentration × volume in dm³.",
              "The mole ratio NaOH:HCl is 1:1.",
              "Concentration of NaOH = moles ÷ its own volume in dm³.",
              "Remember to convert cm³ to dm³ (÷1000).",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bm4-09",
            question: "Which oxide is amphoteric AND would dissolve in both dilute sulfuric acid and hot concentrated sodium hydroxide?",
            options: ["Na₂O", "SO₃", "ZnO", "CO"],
            answerIndex: 2,
            explanation: "ZnO is amphoteric: ZnO + H₂SO₄ → ZnSO₄ + H₂O (with acid) and ZnO + 2NaOH → Na₂ZnO₂ + H₂O (with alkali). Na₂O is basic, SO₃ is acidic, and CO is neutral.",
            difficulty: "core",
            hints: [
              "Amphoteric oxides react with both acids and alkalis.",
              "The two IGCSE examples are ZnO and Al₂O₃.",
              "Pick the one listed here.",
            ],
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bm4-10",
            question: "2.4 g of magnesium reacts completely with excess dilute sulfuric acid (Mg + H₂SO₄ → MgSO₄ + H₂; Ar Mg = 24). What volume of hydrogen, measured at room temperature and pressure (24 dm³/mol), is produced?",
            options: ["1.2 dm³", "2.4 dm³", "12 dm³", "24 dm³"],
            answerIndex: 1,
            explanation: "Moles Mg = 2.4 / 24 = 0.10 mol. From the equation, 1 mol Mg → 1 mol H₂, so 0.10 mol H₂. Volume = 0.10 × 24 = 2.4 dm³.",
            difficulty: "challenge",
            hints: [
              "Find moles of magnesium (mass ÷ Ar).",
              "The mole ratio Mg : H₂ is 1 : 1.",
              "Multiply moles of gas by the molar gas volume, 24 dm³/mol.",
              "0.10 × 24 = ?",
            ],
            guideRef: "Reactions of Acids",
          },
        ],
      },
    ],
    qaPapers: [
      // ── QA PAPER 1 ── definitions, pH, indicators, strength
      {
        id: "chem-acids-bases-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Definitions of acids, bases and alkalis; the pH scale; indicators; strong vs weak acids.",
        questions: [
          {
            id: "chem-acids-bases-bq1-01",
            question: "Define the terms 'acid' and 'alkali' in terms of the ions they produce in aqueous solution. [2]",
            marks: 2,
            modelAnswer:
              "An acid is a substance that produces hydrogen ions, H⁺(aq), when dissolved in water. An alkali is a soluble base that produces hydroxide ions, OH⁻(aq), when dissolved in water.",
            markScheme: [
              "Acid produces H⁺(aq) / hydrogen ions in solution (1)",
              "Alkali produces OH⁻(aq) / hydroxide ions in solution (1)",
            ],
            commonError: "Defining an acid as something 'corrosive' or 'sour' rather than in terms of H⁺ ions; confusing alkali (soluble base) with all bases.",
            difficulty: "warmup",
            guideRef: "Acids and Alkalis: Ion Definitions",
          },
          {
            id: "chem-acids-bases-bq1-02",
            question: "State the colour of (a) litmus, (b) methyl orange, and (c) thymolphthalein in a strongly acidic solution. [3]",
            marks: 3,
            modelAnswer:
              "(a) Litmus is red in acid. (b) Methyl orange is red in acid (below about pH 3.1). (c) Thymolphthalein is colourless in acid.",
            markScheme: [
              "(a) Litmus — red (1)",
              "(b) Methyl orange — red (1)",
              "(c) Thymolphthalein — colourless (1)",
            ],
            commonError: "Stating thymolphthalein is 'white' instead of colourless, or confusing methyl orange's acid colour (red) with its alkaline colour (yellow).",
            difficulty: "warmup",
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bq1-03",
            question: "Explain the difference between a strong acid and a weak acid. Use ethanoic acid and hydrochloric acid as examples, and include an equation for the ionisation of each with the correct arrow. [4]",
            marks: 4,
            modelAnswer:
              "A strong acid is completely (fully) dissociated into ions in aqueous solution, whereas a weak acid is only partially dissociated, with an equilibrium between the molecules and the ions.\n\nHydrochloric acid (strong): HCl(aq) → H⁺(aq) + Cl⁻(aq) — one-way arrow because it fully dissociates.\n\nEthanoic acid (weak): CH₃COOH(aq) ⇌ CH₃COO⁻(aq) + H⁺(aq) — reversible arrow because only some molecules dissociate.",
            markScheme: [
              "Strong acid = fully / completely dissociated (ionised) in water (1)",
              "Weak acid = only partially dissociated / equilibrium between molecules and ions (1)",
              "HCl → H⁺ + Cl⁻ with a one-way arrow (1)",
              "CH₃COOH ⇌ CH₃COO⁻ + H⁺ with a reversible arrow (1)",
            ],
            commonError: "Confusing strength with concentration, or using a one-way arrow for the weak acid. The arrow type is essential — reversible (⇌) for weak, one-way (→) for strong.",
            difficulty: "core",
            hints: [
              "Strength is about the fraction of molecules that split into ions.",
              "Which acid splits up completely and which only partly?",
              "Choose the arrow that shows equilibrium for the weak acid.",
              "Do not mention concentration here — it is a separate idea.",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
            strategy: "Define both terms, then illustrate each with a correctly-arrowed equation.",
          },
          {
            id: "chem-acids-bases-bq1-04",
            question: "A student says: 'A concentrated acid must always be a strong acid.' Explain why this statement is incorrect, giving an example. [3]",
            marks: 3,
            modelAnswer:
              "The statement is incorrect because 'strength' and 'concentration' describe different things. Concentration is the number of moles of acid per dm³ of solution, while strength is the degree of dissociation (ionisation) of the acid. A concentrated solution of a weak acid is possible — for example, concentrated (glacial) ethanoic acid has a high concentration but is still a weak acid because only a small fraction of its molecules dissociate.",
            markScheme: [
              "Concentration = moles of acid per unit volume / dm³ (1)",
              "Strength = degree of dissociation / how fully it ionises (independent of concentration) (1)",
              "Valid example, e.g. concentrated ethanoic acid is concentrated but weak (1)",
            ],
            commonError: "Treating 'strong' and 'concentrated' as synonyms, or giving an example that does not actually separate the two ideas.",
            difficulty: "core",
            hints: [
              "Write down what 'concentration' means and what 'strength' means.",
              "Are they measuring the same property?",
              "Find an example where one is high but the other is low.",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
          },
          {
            id: "chem-acids-bases-bq1-05",
            question: "The pH scale is logarithmic. (a) State what happens to the hydrogen ion concentration as pH decreases by one unit. [1] (b) Solution A has pH 2 and solution B has pH 5. Calculate how many times greater the H⁺ concentration of A is than that of B, showing your reasoning. [2]",
            marks: 3,
            modelAnswer:
              "(a) As pH decreases by one unit, the hydrogen ion concentration increases by a factor of 10 (it becomes ten times greater).\n\n(b) The difference in pH is 5 − 2 = 3 units. Each unit is a factor of 10, so the factor is 10³ = 1000. The H⁺ concentration of A is 1000 times greater than that of B.",
            markScheme: [
              "(a) [H⁺] increases tenfold / ×10 per unit decrease (1)",
              "(b) pH difference = 3 units (1)",
              "(b) Factor = 10³ = 1000 times greater (1)",
            ],
            commonError: "Treating the scale as linear (e.g. saying pH 2 is 'just a bit more acidic' than pH 5) instead of applying the ×10 per unit rule.",
            difficulty: "core",
            hints: [
              "Each pH unit corresponds to a multiplication by 10 in [H⁺].",
              "Find the number of units between the two pH values.",
              "Raise 10 to that power.",
            ],
            guideRef: "The pH Scale and Indicators",
            solutions: [
              {
                label: "Step-by-step factor calculation",
                steps: [
                  "Lower pH means higher [H⁺]; A (pH 2) is more acidic than B (pH 5).",
                  "Number of pH units between them = 5 − 2 = 3.",
                  "Each unit = factor of 10, so total factor = 10 × 10 × 10 = 10³.",
                  "10³ = 1000, so [H⁺] of A is 1000 times that of B.",
                ],
              },
            ],
          },
          {
            id: "chem-acids-bases-bq1-06",
            question: "Describe how universal indicator differs from litmus, and explain when each would be the better choice. [3]",
            marks: 3,
            modelAnswer:
              "Universal indicator is a mixture of dyes that shows a continuous range of colours across the whole pH scale, so it can be used to estimate the approximate pH value of a solution. Litmus changes only between red (acid) and blue (alkali), so it can only tell you whether a solution is acidic or alkaline. Litmus is the better choice when you simply need to know if something is an acid or an alkali; universal indicator is better when you want an estimate of how acidic or alkaline a solution is (its pH).",
            markScheme: [
              "Universal indicator shows a range of colours / allows estimation of pH (1)",
              "Litmus only distinguishes acid (red) from alkali (blue) (1)",
              "Correct choice of when to use each (litmus = acid/alkali test; UI = estimate pH) (1)",
            ],
            commonError: "Claiming litmus can give a pH value, or that universal indicator gives an exact pH (it only estimates; a pH meter gives precise values).",
            difficulty: "warmup",
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bq1-07",
            question: "Hydrochloric acid and aqueous ammonia are both common laboratory reagents. (a) Identify which is the acid and which is the alkali, and state the ion each produces in water. [2] (b) Explain why aqueous ammonia is unusual among common alkalis. [1]",
            marks: 3,
            modelAnswer:
              "(a) Hydrochloric acid is the acid; it produces H⁺(aq) ions. Aqueous ammonia is the alkali; it produces OH⁻(aq) ions (NH₃ + H₂O ⇌ NH₄⁺ + OH⁻).\n\n(b) Aqueous ammonia is unusual because it is the only common alkali that does not contain a metal — the other common alkalis (NaOH, KOH, Ca(OH)₂) all contain a metal cation.",
            markScheme: [
              "(a) HCl = acid, produces H⁺(aq) (1)",
              "(a) Aqueous ammonia = alkali, produces OH⁻(aq) (1)",
              "(b) Ammonia contains no metal / is the only metal-free common alkali (1)",
            ],
            commonError: "Assuming all alkalis must contain a metal, or that ammonia produces NH₄⁺ alone (it is the OH⁻ ions that make it alkaline).",
            difficulty: "core",
            hints: [
              "Identify which reagent makes H⁺ and which makes OH⁻.",
              "Recall the formula of aqueous ammonia.",
              "Compare its composition with NaOH and KOH — what is missing?",
            ],
            guideRef: "Acids and Alkalis: Ion Definitions",
          },
          {
            id: "chem-acids-bases-bq1-08",
            question: "Two solutions each have a concentration of 0.1 mol/dm³. One is hydrochloric acid; the other is ethanoic acid. (a) State which has the lower pH. [1] (b) Explain your answer in terms of ions. [2]",
            marks: 3,
            modelAnswer:
              "(a) The hydrochloric acid has the lower pH.\n\n(b) Hydrochloric acid is a strong acid and is fully dissociated, so it produces the maximum number of H⁺(aq) ions for that concentration. Ethanoic acid is a weak acid and is only partially dissociated, so it produces far fewer H⁺(aq) ions even though the concentrations are equal. More H⁺ ions means a lower pH.",
            markScheme: [
              "(a) HCl has the lower pH (1)",
              "(b) HCl fully dissociated → more H⁺ ions (1)",
              "(b) Ethanoic acid only partially dissociated → fewer H⁺ ions (despite same concentration) (1)",
            ],
            commonError: "Saying ethanoic acid has a higher pH because it is 'more dilute' — both are 0.1 mol/dm³; the difference is strength (degree of dissociation).",
            difficulty: "core",
            hints: [
              "Both have the same concentration, so concentration is not the deciding factor.",
              "Which acid releases more of its H⁺ into solution?",
              "Link the number of H⁺ ions to the pH value.",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
          },
          {
            id: "chem-acids-bases-bq1-09",
            question: "Acid rain typically has a pH around 4, while normal rainwater is about pH 5.6. (a) Calculate approximately how many times greater the H⁺ concentration of pH 4 rain is than that of pH 6 rain. [2] (b) Suggest why a small change in pH number can represent a large change in acidity. [1]",
            marks: 3,
            modelAnswer:
              "(a) The difference between pH 4 and pH 6 is 2 units. Each unit is a factor of 10, so the factor is 10² = 100. The pH 4 rain has about 100 times the H⁺ concentration of pH 6 rain.\n\n(b) Because the pH scale is logarithmic (pH = −log₁₀[H⁺]), each whole-number step represents a tenfold change in H⁺ concentration, so even a difference of one or two pH numbers corresponds to a 10- or 100-fold change in actual acidity.",
            markScheme: [
              "(a) pH difference = 2 units (1)",
              "(a) Factor = 10² = 100 times (1)",
              "(b) Scale is logarithmic / each unit is ×10 in [H⁺] (1)",
            ],
            commonError: "Subtracting the pH values to get a difference of '2 times' rather than recognising the logarithmic ×10 per unit relationship.",
            difficulty: "challenge",
            hints: [
              "Use pH 4 and pH 6 (a 2-unit gap) for the comparison.",
              "Each unit multiplies [H⁺] by 10.",
              "Two units → 10 × 10.",
              "Explain the link to logarithms for part (b).",
            ],
            guideRef: "The pH Scale and Indicators",
            solutions: [
              {
                label: "Logarithmic comparison",
                steps: [
                  "pH gap = 6 − 4 = 2 units.",
                  "Each pH unit corresponds to a factor of 10 in [H⁺].",
                  "Total factor = 10² = 100.",
                  "So pH 4 rain is about 100 times more acidic (in [H⁺]) than pH 6 rain.",
                ],
              },
            ],
          },
          {
            id: "chem-acids-bases-bq1-10",
            question: "A weak acid is described by the equilibrium CH₃COOH(aq) ⇌ CH₃COO⁻(aq) + H⁺(aq). (a) Explain what the reversible arrow tells you about the dissociation. [2] (b) Predict and explain how the electrical conductivity of 0.1 mol/dm³ ethanoic acid compares with that of 0.1 mol/dm³ hydrochloric acid. [2]",
            marks: 4,
            modelAnswer:
              "(a) The reversible arrow shows that the dissociation is incomplete and reaches an equilibrium: at any moment most of the ethanoic acid exists as undissociated molecules, with only a small proportion dissociated into CH₃COO⁻ and H⁺ ions. The forward and backward reactions occur at the same rate at equilibrium.\n\n(b) The ethanoic acid has a lower electrical conductivity than the hydrochloric acid. Conductivity depends on the concentration of free ions; HCl is fully dissociated, giving many ions, whereas ethanoic acid is only partially dissociated, giving far fewer ions even at the same concentration, so it conducts less well.",
            markScheme: [
              "(a) Dissociation is incomplete / reaches equilibrium (1)",
              "(a) Mostly undissociated molecules, only a few ions present (1)",
              "(b) Ethanoic acid conducts less / lower conductivity (1)",
              "(b) Because fewer free ions (HCl fully dissociated, more ions) (1)",
            ],
            commonError: "Assuming both acids conduct equally because they have the same concentration; conductivity depends on the number of free ions, not the number of acid molecules.",
            difficulty: "challenge",
            hints: [
              "What does an equilibrium arrow imply about how much of the acid splits up?",
              "Which species carries charge in a solution — molecules or ions?",
              "Compare the number of ions produced by each acid at equal concentration.",
              "Fewer ions means weaker conduction.",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
            strategy: "Connect degree of dissociation to the number of mobile ions, then to conductivity.",
          },
        ],
      },
      // ── QA PAPER 2 ── reactions of acids, salts, gas tests
      {
        id: "chem-acids-bases-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Reactions of acids with metals, bases and carbonates; salt naming; gas tests; neutralisation.",
        questions: [
          {
            id: "chem-acids-bases-bq2-01",
            question: "Write balanced symbol equations, including state symbols, for: (a) zinc with dilute sulfuric acid, and (b) sodium carbonate with dilute hydrochloric acid. [4]",
            marks: 4,
            modelAnswer:
              "(a) Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)\n\n(b) Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)",
            markScheme: [
              "(a) Correct formulae Zn + H₂SO₄ → ZnSO₄ + H₂ (1)",
              "(a) Correct state symbols (1)",
              "(b) Correct formulae and balancing Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂ (1)",
              "(b) Correct state symbols (1)",
            ],
            commonError: "Forgetting the '2' in front of HCl in (b), or writing H₂ instead of H₂O for the carbonate reaction.",
            difficulty: "core",
            hints: [
              "Acid + metal gives salt + hydrogen; acid + carbonate gives salt + water + CO₂.",
              "Balance the sodium atoms in the carbonate equation.",
              "Add state symbols: solids (s), aqueous (aq), liquids (l), gases (g).",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bq2-02",
            question: "Name the salt and write a word equation produced when each of the following reacts: (a) nitric acid + copper(II) oxide, (b) sulfuric acid + sodium hydroxide. [4]",
            marks: 4,
            modelAnswer:
              "(a) Salt: copper(II) nitrate. Word equation: nitric acid + copper(II) oxide → copper(II) nitrate + water.\n\n(b) Salt: sodium sulfate. Word equation: sulfuric acid + sodium hydroxide → sodium sulfate + water.",
            markScheme: [
              "(a) Salt = copper(II) nitrate (1)",
              "(a) Word equation correct (acid + base → salt + water) (1)",
              "(b) Salt = sodium sulfate (1)",
              "(b) Word equation correct (1)",
            ],
            commonError: "Naming the wrong anion (e.g. 'copper nitrite' or 'sodium sulfite'). Nitric acid → nitrate; sulfuric acid → sulfate.",
            difficulty: "warmup",
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bq2-03",
            question: "Describe the chemical tests, and the positive results, you would use to identify each of the following gases: hydrogen, carbon dioxide, and ammonia. [6]",
            marks: 6,
            modelAnswer:
              "Hydrogen: hold a lit splint to the mouth of the test tube; a squeaky pop is heard.\n\nCarbon dioxide: bubble the gas through limewater (calcium hydroxide solution); the limewater turns milky/cloudy.\n\nAmmonia: hold a piece of damp red litmus paper in the gas; it turns blue (ammonia is alkaline and has a pungent smell).",
            markScheme: [
              "Hydrogen — lit splint (1); squeaky pop (1)",
              "Carbon dioxide — bubble through limewater (1); turns milky/cloudy (1)",
              "Ammonia — damp red litmus paper (1); turns blue (1)",
            ],
            commonError: "Mixing up the splint tests — a GLOWING splint relighting is oxygen, while a LIT splint giving a pop is hydrogen.",
            difficulty: "core",
            hints: [
              "Pair each gas with its specific test reagent.",
              "Two of these tests use a splint — note which splint state for which gas.",
              "Ammonia is alkaline, so think about litmus colour.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bq2-04",
            question: "A piece of marble (calcium carbonate) is dropped into dilute hydrochloric acid. (a) Write the balanced symbol equation with state symbols. [2] (b) Describe two observations. [2] (c) Identify the gas and state how you would confirm it. [2]",
            marks: 6,
            modelAnswer:
              "(a) CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)\n\n(b) Observations: effervescence/bubbling (gas given off); the marble chip gets smaller / eventually disappears (dissolves). (Heat may also be released.)\n\n(c) The gas is carbon dioxide. Confirm by bubbling it through limewater, which turns milky/cloudy.",
            markScheme: [
              "(a) Correct formulae and balancing (1)",
              "(a) Correct state symbols (1)",
              "(b) Effervescence / bubbles / fizzing (1)",
              "(b) Solid gets smaller / dissolves (1)",
              "(c) Carbon dioxide identified (1); limewater turns milky (1)",
            ],
            commonError: "Writing CaCl instead of CaCl₂ (calcium is Ca²⁺), or stating the gas is hydrogen (carbonates give CO₂, not H₂).",
            difficulty: "core",
            hints: [
              "Acid + carbonate → salt + water + carbon dioxide.",
              "Calcium forms a 2+ ion, so the chloride is CaCl₂.",
              "Think about what you would actually see and how the gas is tested.",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bq2-05",
            question: "Write the ionic equation for neutralisation and explain why the same ionic equation applies to the reaction of any strong acid with any strong alkali. [3]",
            marks: 3,
            modelAnswer:
              "Ionic equation: H⁺(aq) + OH⁻(aq) → H₂O(l).\n\nThe same equation applies because in every strong acid–strong alkali neutralisation the only chemical change is hydrogen ions combining with hydroxide ions to form water. The metal cation and the acid anion (e.g. Na⁺ and Cl⁻) are spectator ions — they are present unchanged on both sides and so are not part of the net ionic equation.",
            markScheme: [
              "H⁺(aq) + OH⁻(aq) → H₂O(l) (1)",
              "Reaction is always H⁺ combining with OH⁻ to form water (1)",
              "Other ions are spectator ions / unchanged on both sides (1)",
            ],
            commonError: "Including spectator ions in the 'ionic' equation, or forgetting state symbols on water (l).",
            difficulty: "core",
            hints: [
              "What single product forms from H⁺ and OH⁻?",
              "Identify which ions do not actually change during the reaction.",
              "Spectator ions are cancelled from both sides.",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bq2-06",
            question: "Explain why copper does not react with dilute hydrochloric acid, whereas magnesium does. State what you would observe with magnesium. [3]",
            marks: 3,
            modelAnswer:
              "Copper is below hydrogen in the reactivity series, so it cannot displace hydrogen from the acid and no reaction occurs. Magnesium is above hydrogen, so it displaces hydrogen, reacting to form magnesium chloride and hydrogen gas. With magnesium you would observe effervescence (bubbles of hydrogen gas) and the magnesium dissolving/getting smaller; the mixture may also warm up.",
            markScheme: [
              "Copper below hydrogen in reactivity series → no reaction (1)",
              "Magnesium above hydrogen → displaces hydrogen / reacts (1)",
              "Observation with Mg: effervescence/bubbles / metal dissolves (1)",
            ],
            commonError: "Saying copper is 'too heavy' or 'unreactive because it is a transition metal' rather than referring to its position relative to hydrogen in the reactivity series.",
            difficulty: "core",
            hints: [
              "Acid + metal works only for metals more reactive than hydrogen.",
              "Compare the positions of copper and magnesium relative to hydrogen.",
              "Think about the gas given off when magnesium reacts.",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bq2-07",
            question: "0.486 g of magnesium is added to excess dilute hydrochloric acid (Ar Mg = 24). (a) Write the balanced equation. [1] (b) Calculate the mass of magnesium chloride formed (Mr MgCl₂ = 95). [3]",
            marks: 4,
            modelAnswer:
              "(a) Mg + 2HCl → MgCl₂ + H₂\n\n(b) Moles of Mg = 0.486 / 24 = 0.02025 mol. From the equation, 1 mol Mg → 1 mol MgCl₂, so moles of MgCl₂ = 0.02025 mol. Mass = moles × Mr = 0.02025 × 95 = 1.92 g (3 s.f.).",
            markScheme: [
              "(a) Mg + 2HCl → MgCl₂ + H₂ (1)",
              "(b) Moles Mg = 0.486 / 24 = 0.02025 mol (1)",
              "(b) Mole ratio Mg:MgCl₂ = 1:1, so 0.02025 mol MgCl₂ (1)",
              "(b) Mass = 0.02025 × 95 = 1.92 g (1)",
            ],
            commonError: "Using the wrong mole ratio (e.g. doubling for the 2HCl) or forgetting that the Mg:MgCl₂ ratio is 1:1.",
            difficulty: "challenge",
            hints: [
              "Find moles of magnesium first (mass ÷ Ar).",
              "Use the balanced equation: how many MgCl₂ per Mg?",
              "Multiply moles of MgCl₂ by its Mr to get the mass.",
              "Express your answer to a sensible number of significant figures.",
            ],
            guideRef: "Reactions of Acids",
            solutions: [
              {
                label: "Moles → ratio → mass",
                steps: [
                  "Moles of Mg = mass ÷ Ar = 0.486 ÷ 24 = 0.02025 mol.",
                  "Balanced equation Mg + 2HCl → MgCl₂ + H₂ gives Mg : MgCl₂ = 1 : 1.",
                  "Therefore moles of MgCl₂ = 0.02025 mol.",
                  "Mass = moles × Mr = 0.02025 × 95 = 1.92 g (3 s.f.).",
                ],
              },
            ],
          },
          {
            id: "chem-acids-bases-bq2-08",
            question: "Limestone (calcium carbonate) is used to neutralise acidic soils. (a) Explain in terms of ions why adding calcium carbonate raises the pH of acidic soil. [2] (b) Write a word equation for the reaction of calcium carbonate with the acid in the soil. [1]",
            marks: 3,
            modelAnswer:
              "(a) Acidic soil contains an excess of H⁺(aq) ions. Calcium carbonate is a base/carbonate that reacts with and removes these H⁺ ions (forming water and carbon dioxide), reducing the H⁺ concentration. As [H⁺] falls, the pH rises towards neutral.\n\n(b) calcium carbonate + acid → calcium salt + water + carbon dioxide.",
            markScheme: [
              "(a) Soil acidity is due to H⁺ ions / carbonate removes/reacts with H⁺ (1)",
              "(a) Lower [H⁺] → higher pH / less acidic (1)",
              "(b) calcium carbonate + acid → salt + water + carbon dioxide (1)",
            ],
            commonError: "Saying calcium carbonate 'adds OH⁻ ions' — it actually removes H⁺ ions (it is a carbonate, not an alkali that supplies OH⁻).",
            difficulty: "core",
            hints: [
              "What ion makes the soil acidic?",
              "How does a carbonate change the amount of that ion?",
              "Lowering [H⁺] does what to the pH?",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bq2-09",
            question: "A gas turns damp blue litmus paper red and then bleaches it. (a) Identify the gas. [1] (b) Give one further physical property that helps identify it. [1] (c) Explain why this test distinguishes it from carbon dioxide, which also turns damp blue litmus red. [2]",
            marks: 4,
            modelAnswer:
              "(a) The gas is chlorine (Cl₂).\n\n(b) It is a pale yellow-green gas (and has a sharp, pungent/choking smell).\n\n(c) Both chlorine and carbon dioxide are acidic and so turn damp blue litmus red, but only chlorine then bleaches the litmus white. Carbon dioxide does not bleach the paper, so the bleaching step distinguishes chlorine from carbon dioxide.",
            markScheme: [
              "(a) Chlorine / Cl₂ (1)",
              "(b) Pale yellow-green colour / pungent smell (1)",
              "(c) Both are acidic so both turn blue litmus red (1)",
              "(c) Only chlorine bleaches the litmus, distinguishing it (1)",
            ],
            commonError: "Assuming any gas that turns blue litmus red must be chlorine; the bleaching step is essential to rule out CO₂ and other acidic gases.",
            difficulty: "challenge",
            hints: [
              "Which gas both reddens AND bleaches litmus?",
              "Recall its distinctive colour.",
              "Think about what CO₂ does and does not do to litmus.",
              "The distinguishing feature is the second stage of the colour change.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bq2-10",
            question: "25.0 cm³ of sodium hydroxide solution is neutralised by 20.0 cm³ of 0.150 mol/dm³ sulfuric acid. The equation is 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O. Calculate the concentration of the sodium hydroxide solution in mol/dm³. [4]",
            marks: 4,
            modelAnswer:
              "Moles of H₂SO₄ = concentration × volume = 0.150 × (20.0 / 1000) = 0.00300 mol. From the equation, 1 mol H₂SO₄ reacts with 2 mol NaOH, so moles of NaOH = 2 × 0.00300 = 0.00600 mol. Concentration of NaOH = moles ÷ volume = 0.00600 / (25.0 / 1000) = 0.240 mol/dm³.",
            markScheme: [
              "Moles H₂SO₄ = 0.150 × 0.0200 = 0.00300 mol (1)",
              "Mole ratio NaOH:H₂SO₄ = 2:1, so moles NaOH = 0.00600 mol (1)",
              "Volume of NaOH = 25.0/1000 = 0.0250 dm³ (1)",
              "Concentration NaOH = 0.00600 / 0.0250 = 0.240 mol/dm³ (1)",
            ],
            commonError: "Forgetting the 2:1 ratio between NaOH and H₂SO₄ (sulfuric acid is diprotic), or not converting cm³ to dm³.",
            difficulty: "challenge",
            hints: [
              "Start with moles of the acid (concentration × volume in dm³).",
              "Sulfuric acid is diprotic — note the 2:1 NaOH:H₂SO₄ ratio.",
              "Find moles of NaOH, then divide by its volume in dm³.",
              "Convert all volumes from cm³ to dm³.",
            ],
            guideRef: "Reactions of Acids",
            solutions: [
              {
                label: "Titration calculation",
                steps: [
                  "Moles H₂SO₄ = 0.150 mol/dm³ × (20.0 ÷ 1000) dm³ = 0.00300 mol.",
                  "Equation ratio NaOH : H₂SO₄ = 2 : 1.",
                  "Moles NaOH = 2 × 0.00300 = 0.00600 mol.",
                  "Volume NaOH = 25.0 ÷ 1000 = 0.0250 dm³.",
                  "Concentration NaOH = 0.00600 ÷ 0.0250 = 0.240 mol/dm³.",
                ],
              },
            ],
          },
        ],
      },
      // ── QA PAPER 3 ── oxides, salt preparation, solubility
      {
        id: "chem-acids-bases-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Classification of oxides, preparation of soluble and insoluble salts, solubility rules and water of crystallisation.",
        questions: [
          {
            id: "chem-acids-bases-bq3-01",
            question: "Oxides can be classified as acidic, basic, amphoteric or neutral. (a) Give one example of each type. [4] (b) Define an amphoteric oxide. [1]",
            marks: 5,
            modelAnswer:
              "(a) Acidic: CO₂ (or SO₂/SO₃). Basic: MgO (or CuO/Na₂O). Amphoteric: ZnO (or Al₂O₃). Neutral: CO (or H₂O/NO).\n\n(b) An amphoteric oxide is one that reacts with both acids and alkalis to form a salt and water.",
            markScheme: [
              "(a) Acidic example correct (e.g. CO₂/SO₂/SO₃) (1)",
              "(a) Basic example correct (e.g. MgO/CuO/Na₂O) (1)",
              "(a) Amphoteric example correct (ZnO/Al₂O₃) (1)",
              "(a) Neutral example correct (CO/H₂O/NO) (1)",
              "(b) Reacts with both acids and alkalis (1)",
            ],
            commonError: "Classifying CO as an acidic oxide because it is a non-metal oxide; CO (and NO) are in fact neutral.",
            difficulty: "warmup",
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bq3-02",
            question: "Zinc oxide is amphoteric. Write balanced symbol equations for its reaction with (a) dilute hydrochloric acid and (b) sodium hydroxide solution. [2]",
            marks: 2,
            modelAnswer:
              "(a) ZnO + 2HCl → ZnCl₂ + H₂O\n\n(b) ZnO + 2NaOH → Na₂ZnO₂ + H₂O (sodium zincate forms)",
            markScheme: [
              "(a) ZnO + 2HCl → ZnCl₂ + H₂O, balanced (1)",
              "(b) ZnO + 2NaOH → Na₂ZnO₂ + H₂O, balanced (1)",
            ],
            commonError: "Writing ZnCl instead of ZnCl₂ (zinc is Zn²⁺), or not knowing that the alkali reaction forms a zincate.",
            difficulty: "core",
            hints: [
              "Amphoteric means it reacts with both acid and alkali.",
              "With acid it behaves like a base → salt + water.",
              "With alkali it forms a zincate (Na₂ZnO₂) + water.",
            ],
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bq3-03",
            question: "Describe how you would prepare a pure, dry sample of copper(II) sulfate crystals starting from copper(II) oxide and dilute sulfuric acid. Include the balanced equation and explain why excess copper(II) oxide is used. [6]",
            marks: 6,
            modelAnswer:
              "Equation: CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l).\n\n1. Warm the dilute sulfuric acid gently in a beaker.\n2. Add copper(II) oxide a little at a time, stirring, until no more dissolves and some black solid remains (i.e. add it in excess). The excess CuO ensures all the acid is used up, so the product is not contaminated with acid.\n3. Filter the mixture to remove the excess (unreacted) copper(II) oxide, collecting the blue copper(II) sulfate solution as the filtrate.\n4. Heat the filtrate gently in an evaporating dish to concentrate it, until crystals just begin to form (the point of crystallisation), then stop heating.\n5. Allow the solution to cool so that blue crystals form; filter off the crystals and dry them between filter papers / in a warm oven at low temperature (to avoid removing the water of crystallisation).",
            markScheme: [
              "Equation CuO + H₂SO₄ → CuSO₄ + H₂O (1)",
              "Add excess CuO to (warm) acid, stir until no more reacts (1)",
              "Excess CuO ensures all acid reacts / prevents acid contamination (1)",
              "Filter to remove excess CuO (1)",
              "Evaporate/concentrate filtrate to point of crystallisation / allow to cool to crystallise (1)",
              "Filter and dry the crystals (low temperature) (1)",
            ],
            commonError: "Evaporating the solution to complete dryness (this can drive off the water of crystallisation and leave white anhydrous CuSO₄), or omitting the reason for using excess CuO.",
            difficulty: "core",
            hints: [
              "This is the excess-insoluble-base method.",
              "How do you separate the dissolved salt from the unreacted solid?",
              "Why heat only until crystals start to appear rather than to dryness?",
              "Explain what the excess solid achieves.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
            strategy: "Sequence the method: react with excess base → filter → crystallise → dry.",
          },
          {
            id: "chem-acids-bases-bq3-04",
            question: "Barium sulfate is an insoluble salt. (a) Name a suitable method to prepare it and explain why this method is chosen. [2] (b) Write a balanced equation, with state symbols, for its preparation from barium chloride and sodium sulfate solutions. [2] (c) State two steps needed to obtain a pure, dry sample after the reaction. [2]",
            marks: 6,
            modelAnswer:
              "(a) Precipitation is used, because barium sulfate is insoluble — mixing two solutions that each supply one of its ions makes it form as a solid precipitate.\n\n(b) BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq).\n\n(c) Filter the mixture to collect the barium sulfate precipitate; wash the residue with distilled water and then dry it (e.g. in a warm oven).",
            markScheme: [
              "(a) Precipitation method (1); because BaSO₄ is insoluble (1)",
              "(b) BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq), balanced with state symbols (1)",
              "(b) Correct identification of BaSO₄ as the (s) precipitate (1)",
              "(c) Filter to collect precipitate (1); wash with distilled water and dry (1)",
            ],
            commonError: "Choosing titration or evaporation for an insoluble salt; or forgetting to wash the precipitate with distilled water to remove soluble impurities (NaCl).",
            difficulty: "core",
            hints: [
              "Insoluble salts cannot be crystallised from solution — what method gives a solid directly?",
              "Choose two soluble solutions that supply Ba²⁺ and SO₄²⁻.",
              "After mixing, how do you separate, purify and dry the solid?",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bq3-05",
            question: "Using the IGCSE solubility rules, classify each of the following as soluble or insoluble in water: (a) potassium nitrate, (b) silver chloride, (c) calcium carbonate, (d) ammonium sulfate. [4]",
            marks: 4,
            modelAnswer:
              "(a) Potassium nitrate — soluble (all nitrates and all potassium salts are soluble).\n(b) Silver chloride — insoluble (chlorides are soluble except AgCl and PbCl₂).\n(c) Calcium carbonate — insoluble (carbonates are insoluble except those of Na⁺, K⁺, NH₄⁺).\n(d) Ammonium sulfate — soluble (all ammonium salts, and most sulfates, are soluble).",
            markScheme: [
              "(a) Potassium nitrate — soluble (1)",
              "(b) Silver chloride — insoluble (1)",
              "(c) Calcium carbonate — insoluble (1)",
              "(d) Ammonium sulfate — soluble (1)",
            ],
            commonError: "Forgetting the exceptions — e.g. assuming all chlorides are soluble (AgCl and PbCl₂ are not) or that all carbonates are insoluble (Na/K/NH₄ carbonates are soluble).",
            difficulty: "core",
            hints: [
              "All nitrates and all Na⁺/K⁺/NH₄⁺ salts are soluble.",
              "Chlorides are soluble except silver and lead.",
              "Most carbonates are insoluble.",
              "Apply the rule plus its exceptions to each salt.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bq3-06",
            question: "Explain why the method of preparing a soluble salt from a soluble alkali (such as sodium hydroxide) must use titration rather than adding excess solid base. [3]",
            marks: 3,
            modelAnswer:
              "Sodium hydroxide is soluble, so any excess added would simply dissolve in the solution and could not be removed by filtration; the product would be contaminated with leftover alkali. Therefore a titration is used to find the exact volume of acid that just neutralises a measured volume of the alkali. The titration is then repeated using these exact volumes but without indicator, so the resulting solution contains only the pure salt and water, which is then evaporated to crystallise the salt.",
            markScheme: [
              "Excess soluble base cannot be filtered out / would contaminate product (1)",
              "Titration finds the exact neutralising volume (1)",
              "Repeat without indicator to obtain pure salt / then evaporate to crystallise (1)",
            ],
            commonError: "Thinking you can still 'filter off' excess NaOH — you cannot, because it is soluble; that is precisely why titration is required.",
            difficulty: "core",
            hints: [
              "Could you filter out an excess of a soluble base? Why not?",
              "How do you ensure exactly the right amount of acid and alkali react?",
              "Why is the indicator left out of the final run?",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bq3-07",
            question: "Hydrated magnesium sulfate has the formula MgSO₄·7H₂O. (a) State what is meant by 'water of crystallisation'. [1] (b) A sample of MgSO₄·7H₂O has a mass of 24.6 g. Calculate the mass of water of crystallisation it contains. (Mr MgSO₄·7H₂O = 246; Mr of 7H₂O = 126.) [3]",
            marks: 4,
            modelAnswer:
              "(a) Water of crystallisation is water that is chemically combined within a crystal in a fixed proportion to the salt.\n\n(b) Moles of MgSO₄·7H₂O = 24.6 / 246 = 0.100 mol. Each mole contains 7 mol of water, of mass 126 g. Mass of water = 0.100 × 126 = 12.6 g. (Equivalently, fraction = 126/246 × 24.6 = 12.6 g.)",
            markScheme: [
              "(a) Water chemically combined / part of the crystal structure in a fixed ratio (1)",
              "(b) Moles of hydrated salt = 24.6/246 = 0.100 mol (1)",
              "(b) Mass of water = 0.100 × 126 (1)",
              "(b) = 12.6 g (1)",
            ],
            commonError: "Confusing water of crystallisation with water that the salt is merely dissolved in, or using the Mr of the anhydrous salt instead of the hydrated salt.",
            difficulty: "challenge",
            hints: [
              "Find moles of the hydrated salt (mass ÷ Mr of the hydrated formula).",
              "Each formula unit carries 7 water molecules (Mr 126).",
              "Mass of water = moles × 126.",
              "Or take the fraction 126/246 of the total mass.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
            solutions: [
              {
                label: "Mole method",
                steps: [
                  "Moles of MgSO₄·7H₂O = 24.6 ÷ 246 = 0.100 mol.",
                  "Each mole of the hydrate contains 7 mol H₂O = 126 g.",
                  "Mass of water = 0.100 × 126 = 12.6 g.",
                ],
              },
              {
                label: "Mass-fraction method",
                steps: [
                  "Fraction of mass that is water = 126 ÷ 246.",
                  "Mass of water = (126 ÷ 246) × 24.6 = 12.6 g.",
                ],
              },
            ],
          },
          {
            id: "chem-acids-bases-bq3-08",
            question: "A student wants to make zinc chloride (a soluble salt) from zinc metal and dilute hydrochloric acid. (a) Write the balanced equation. [1] (b) Outline the steps to obtain pure, dry zinc chloride crystals, noting how excess zinc helps. [4]",
            marks: 5,
            modelAnswer:
              "(a) Zn + 2HCl → ZnCl₂ + H₂.\n\n(b) 1. Add excess zinc to the dilute hydrochloric acid (the excess ensures all the acid reacts, so no acid contaminates the product). 2. When effervescence stops, filter the mixture to remove the unreacted excess zinc. 3. Heat the filtrate (zinc chloride solution) in an evaporating dish to concentrate it, until crystals begin to form. 4. Allow to cool so crystals form, then filter and dry the crystals (e.g. between filter papers or in a warm oven).",
            markScheme: [
              "(a) Zn + 2HCl → ZnCl₂ + H₂ (1)",
              "(b) Add excess zinc; excess ensures all acid reacts / no acid left (1)",
              "(b) Filter to remove unreacted zinc (1)",
              "(b) Evaporate/concentrate to point of crystallisation (1)",
              "(b) Cool, filter and dry the crystals (1)",
            ],
            commonError: "Forgetting to filter off the excess zinc, or evaporating to dryness instead of stopping at the point of crystallisation.",
            difficulty: "core",
            hints: [
              "Excess solid metal is used in the same way as an excess insoluble base.",
              "How is the unreacted metal removed?",
              "Concentrate the solution but do not boil to dryness.",
              "State how the crystals are finally obtained and dried.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bq3-09",
            question: "Carbon dioxide and sodium oxide are both oxides but behave very differently. (a) Classify each oxide. [2] (b) Write an equation showing carbon dioxide reacting with sodium hydroxide solution. [1] (c) Write an equation showing sodium oxide reacting with dilute hydrochloric acid. [1]",
            marks: 4,
            modelAnswer:
              "(a) Carbon dioxide is an acidic oxide; sodium oxide is a basic oxide.\n\n(b) CO₂ + 2NaOH → Na₂CO₃ + H₂O.\n\n(c) Na₂O + 2HCl → 2NaCl + H₂O.",
            markScheme: [
              "(a) CO₂ acidic; Na₂O basic (both correct) (1); (one correct only also creditable as part) — award (1) for CO₂ acidic, (1) for Na₂O basic (2 total)",
              "(b) CO₂ + 2NaOH → Na₂CO₃ + H₂O (1)",
              "(c) Na₂O + 2HCl → 2NaCl + H₂O (1)",
            ],
            commonError: "Swapping the classifications: metal oxides (Na₂O) are basic and react with acids; non-metal oxides (CO₂) are acidic and react with alkalis.",
            difficulty: "core",
            hints: [
              "Metal oxide vs non-metal oxide — which is basic and which is acidic?",
              "An acidic oxide reacts with an alkali (NaOH).",
              "A basic oxide reacts with an acid (HCl).",
            ],
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bq3-10",
            question: "A precipitate of lead(II) iodide is made by mixing lead(II) nitrate solution with potassium iodide solution. (a) Write the balanced equation with state symbols. [2] (b) State the colour of the precipitate. [1] (c) Explain why the precipitate must be washed with distilled water before drying. [1]",
            marks: 4,
            modelAnswer:
              "(a) Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq).\n\n(b) The precipitate is bright yellow.\n\n(c) It must be washed with distilled water to remove the soluble potassium nitrate (and any other soluble ions) from its surface, so that the dried sample of lead(II) iodide is pure.",
            markScheme: [
              "(a) Correct formulae and balancing (1)",
              "(a) Correct state symbols, PbI₂ as (s) (1)",
              "(b) Yellow (1)",
              "(c) Washing removes soluble impurities / KNO₃ to give a pure product (1)",
            ],
            commonError: "Omitting the '2' before KI and KNO₃, or forgetting that PbI₂ is the solid (state symbol (s)).",
            difficulty: "challenge",
            hints: [
              "Lead is Pb²⁺ and iodide is I⁻, so the precipitate is PbI₂.",
              "Balance the potassium and iodide — you need 2KI.",
              "Recall the striking colour of lead(II) iodide.",
              "Think about what soluble salt is left clinging to the precipitate.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
        ],
      },
      // ── QA PAPER 4 ── mixed synthesis & challenge
      {
        id: "chem-acids-bases-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Synthesis questions linking oxides, salt preparation, neutralisation calculations and acid strength.",
        questions: [
          {
            id: "chem-acids-bases-bq4-01",
            question: "Define the terms (a) base and (b) salt. [2]",
            marks: 2,
            modelAnswer:
              "(a) A base is a substance that neutralises an acid, forming a salt and water; bases include metal oxides, metal hydroxides and ammonia.\n\n(b) A salt is a compound formed when the hydrogen ion(s) of an acid are replaced by a metal ion (or an ammonium ion).",
            markScheme: [
              "(a) Base neutralises an acid / proton acceptor / metal oxide or hydroxide (1)",
              "(b) Salt = formed when H⁺ of acid replaced by a metal/ammonium ion (1)",
            ],
            commonError: "Defining a base simply as 'the opposite of an acid' rather than as something that neutralises an acid; or describing a salt only as 'table salt' (NaCl) rather than the general class.",
            difficulty: "warmup",
            guideRef: "Acids and Alkalis: Ion Definitions",
          },
          {
            id: "chem-acids-bases-bq4-02",
            question: "Choose the correct preparation method (titration, excess insoluble base, or precipitation) for each salt and justify each choice: (a) sodium chloride, (b) copper(II) sulfate, (c) silver chloride. [6]",
            marks: 6,
            modelAnswer:
              "(a) Sodium chloride — titration. It is a soluble salt made from a soluble acid (HCl) and a soluble alkali (NaOH); since the alkali is soluble it cannot be added in filterable excess, so titration is used to mix exact volumes.\n\n(b) Copper(II) sulfate — excess insoluble base. It is a soluble salt made from sulfuric acid and an insoluble base (copper(II) oxide or carbonate); excess solid is added and then filtered off, leaving pure salt solution.\n\n(c) Silver chloride — precipitation. It is an insoluble salt, so it is made by mixing two soluble solutions (e.g. silver nitrate and sodium chloride) and filtering off the precipitate.",
            markScheme: [
              "(a) Titration (1); because both acid and base are soluble (1)",
              "(b) Excess insoluble base (1); CuO/CuCO₃ is insoluble, excess filtered off (1)",
              "(c) Precipitation (1); because AgCl is insoluble (1)",
            ],
            commonError: "Choosing the method by the salt alone without considering whether the base is soluble or insoluble; the deciding factors are the solubility of the salt AND of the base.",
            difficulty: "core",
            hints: [
              "First ask: is the salt itself soluble or insoluble?",
              "If the salt is soluble, is the base soluble (→ titration) or insoluble (→ excess base)?",
              "Insoluble salts are always made by precipitation.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
            strategy: "Decide on salt solubility first, then base solubility, to select the method.",
          },
          {
            id: "chem-acids-bases-bq4-03",
            question: "A 0.200 mol/dm³ solution of sodium hydroxide is titrated with hydrochloric acid. 25.0 cm³ of the alkali requires 20.0 cm³ of the acid for neutralisation (NaOH + HCl → NaCl + H₂O). (a) Calculate the concentration of the hydrochloric acid. [3] (b) Describe how you would obtain pure dry sodium chloride crystals from the neutralised solution. [2]",
            marks: 5,
            modelAnswer:
              "(a) Moles of NaOH = 0.200 × (25.0 / 1000) = 0.00500 mol. Ratio NaOH:HCl = 1:1, so moles of HCl = 0.00500 mol. Concentration of HCl = 0.00500 / (20.0 / 1000) = 0.250 mol/dm³.\n\n(b) Repeat the titration using the same exact volumes but without indicator (so the salt is not contaminated), then evaporate the resulting solution gently to the point of crystallisation, allow it to cool and crystallise, and dry the crystals.",
            markScheme: [
              "(a) Moles NaOH = 0.200 × 0.0250 = 0.00500 mol (1)",
              "(a) Moles HCl = 0.00500 mol (1:1 ratio) (1)",
              "(a) Concentration HCl = 0.00500 / 0.0200 = 0.250 mol/dm³ (1)",
              "(b) Repeat without indicator / evaporate to crystallise then dry (1)",
              "(b) Reason: avoid indicator contamination / obtain pure crystals (1)",
            ],
            commonError: "Forgetting to convert cm³ to dm³, or not explaining why the final run omits the indicator.",
            difficulty: "challenge",
            hints: [
              "Find moles of NaOH (concentration × volume in dm³).",
              "The NaOH:HCl ratio is 1:1.",
              "Concentration of HCl = its moles ÷ its volume in dm³.",
              "For part (b), recall why indicator is left out of the final run.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
            solutions: [
              {
                label: "Titration calculation",
                steps: [
                  "Moles NaOH = 0.200 mol/dm³ × (25.0 ÷ 1000) dm³ = 0.00500 mol.",
                  "Ratio NaOH : HCl = 1 : 1, so moles HCl = 0.00500 mol.",
                  "Volume of acid = 20.0 ÷ 1000 = 0.0200 dm³.",
                  "Concentration HCl = 0.00500 ÷ 0.0200 = 0.250 mol/dm³.",
                ],
              },
            ],
          },
          {
            id: "chem-acids-bases-bq4-04",
            question: "Explain, in terms of dissociation and ions, why equal concentrations of hydrochloric acid and ethanoic acid react with the SAME total mass of magnesium but the hydrochloric acid reacts faster. [4]",
            marks: 4,
            modelAnswer:
              "Both acids contain the same total number of acidic hydrogen atoms per mole, so given equal volumes and concentrations they can ultimately supply the same number of H⁺ ions and react with the same total mass of magnesium (the same number of moles of acid is available). However, hydrochloric acid is a strong acid and is fully dissociated, so at any instant it has a high concentration of H⁺ ions, giving a fast reaction. Ethanoic acid is a weak acid and only partially dissociated, so at any instant the H⁺ concentration is low and the reaction is slower; as H⁺ is used up, more ethanoic acid molecules dissociate to replace it, so the same total amount eventually reacts.",
            markScheme: [
              "Both supply the same total moles of H⁺ / acid, so react with the same mass of Mg (1)",
              "HCl fully dissociated → high [H⁺] at any instant → faster (1)",
              "Ethanoic acid partially dissociated → low [H⁺] at any instant → slower (1)",
              "As H⁺ is used up, more weak acid dissociates to replace it (equilibrium shifts) (1)",
            ],
            commonError: "Concluding that the weak acid reacts with less magnesium overall; it reacts more slowly but, given the same moles of acid, with the same total mass of magnesium.",
            difficulty: "challenge",
            hints: [
              "Same concentration and volume → same total moles of acidic H available.",
              "Rate depends on the H⁺ concentration present at any moment.",
              "Which acid has more H⁺ ions at the start?",
              "What happens to the weak-acid equilibrium as H⁺ is consumed?",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
            strategy: "Separate 'total amount reacting' (depends on moles) from 'rate' (depends on instantaneous [H⁺]).",
          },
          {
            id: "chem-acids-bases-bq4-05",
            question: "Sulfuric acid reacts with both zinc oxide and zinc carbonate. (a) Write balanced equations for each reaction. [2] (b) State one observation that distinguishes the two reactions. [1] (c) Both can be used to prepare zinc sulfate by the same general method. Name the method. [1]",
            marks: 4,
            modelAnswer:
              "(a) ZnO + H₂SO₄ → ZnSO₄ + H₂O; ZnCO₃ + H₂SO₄ → ZnSO₄ + H₂O + CO₂.\n\n(b) The zinc carbonate reaction produces effervescence (bubbles of carbon dioxide), whereas the zinc oxide reaction does not produce any gas.\n\n(c) The 'excess insoluble base/carbonate + acid' method (add excess solid, filter, evaporate to crystallise).",
            markScheme: [
              "(a) ZnO + H₂SO₄ → ZnSO₄ + H₂O (1)",
              "(a) ZnCO₃ + H₂SO₄ → ZnSO₄ + H₂O + CO₂ (1)",
              "(b) Carbonate gives effervescence/CO₂; oxide gives no gas (1)",
              "(c) Excess insoluble base/carbonate + acid method (1)",
            ],
            commonError: "Forgetting that the carbonate releases CO₂ (so the oxide and carbonate equations differ by the CO₂ term), or writing ZnSO₄ formulae incorrectly.",
            difficulty: "core",
            hints: [
              "Oxide + acid → salt + water; carbonate + acid → salt + water + CO₂.",
              "Only one of the two reactions produces a gas — which observation results?",
              "Both solids are insoluble, so the same preparation method applies.",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bq4-06",
            question: "When 50.0 cm³ of 0.100 mol/dm³ hydrochloric acid is added to excess calcium carbonate, carbon dioxide is produced (CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂). Calculate the volume of carbon dioxide produced at room temperature and pressure (molar gas volume = 24 dm³/mol). [4]",
            marks: 4,
            modelAnswer:
              "Moles of HCl = 0.100 × (50.0 / 1000) = 0.00500 mol. From the equation, 2 mol HCl produce 1 mol CO₂, so moles of CO₂ = 0.00500 / 2 = 0.00250 mol. Volume of CO₂ = moles × 24 = 0.00250 × 24 = 0.0600 dm³ (= 60.0 cm³).",
            markScheme: [
              "Moles HCl = 0.100 × 0.0500 = 0.00500 mol (1)",
              "Ratio HCl:CO₂ = 2:1, so moles CO₂ = 0.00250 mol (1)",
              "Volume = 0.00250 × 24 (1)",
              "= 0.0600 dm³ / 60.0 cm³ (1)",
            ],
            commonError: "Using a 1:1 ratio between HCl and CO₂ instead of 2:1, or forgetting to convert cm³ to dm³ for the acid volume.",
            difficulty: "challenge",
            hints: [
              "The carbonate is in excess, so the acid is the limiting reagent.",
              "Find moles of HCl, then use the 2:1 HCl:CO₂ ratio.",
              "Multiply moles of CO₂ by 24 dm³/mol.",
              "Check your final units (dm³ or cm³).",
            ],
            guideRef: "Reactions of Acids",
            solutions: [
              {
                label: "Limiting reagent → gas volume",
                steps: [
                  "Moles HCl = 0.100 mol/dm³ × (50.0 ÷ 1000) dm³ = 0.00500 mol.",
                  "Equation ratio HCl : CO₂ = 2 : 1.",
                  "Moles CO₂ = 0.00500 ÷ 2 = 0.00250 mol.",
                  "Volume CO₂ = 0.00250 × 24 = 0.0600 dm³ = 60.0 cm³.",
                ],
              },
            ],
          },
          {
            id: "chem-acids-bases-bq4-07",
            question: "A solution is thought to contain either sodium hydroxide or sodium chloride. Describe two simple tests, with expected results, that would tell you which compound is present. [4]",
            marks: 4,
            modelAnswer:
              "Test 1 (indicator): Add a few drops of universal indicator (or use red litmus). Sodium hydroxide is alkaline and turns universal indicator purple/blue (turns red litmus blue); sodium chloride is neutral and turns universal indicator green (leaves litmus unchanged).\n\nTest 2 (pH): Measure the pH with a pH meter or pH paper. Sodium hydroxide gives a high pH (about 13–14); sodium chloride gives a pH of about 7. A high pH indicates the alkali, a neutral pH indicates the salt.",
            markScheme: [
              "Test 1: add indicator / litmus (1); NaOH gives alkaline colour, NaCl neutral colour (1)",
              "Test 2: measure pH (1); NaOH high pH (~13–14), NaCl neutral pH (~7) (1)",
            ],
            commonError: "Suggesting a test that gives the same result for both, or claiming sodium chloride solution is acidic (it is neutral).",
            difficulty: "core",
            hints: [
              "One compound is alkaline, the other neutral — which property separates them?",
              "An indicator or pH measurement reveals the difference.",
              "State the expected result for each compound.",
            ],
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bq4-08",
            question: "Aluminium oxide is described as amphoteric. (a) Explain what this tells you and link it to aluminium's position in the periodic table. [2] (b) Write balanced equations for Al₂O₃ reacting with (i) hydrochloric acid and (ii) sodium hydroxide solution. [2]",
            marks: 4,
            modelAnswer:
              "(a) Amphoteric means Al₂O₃ reacts with both acids and alkalis to form salts. This reflects aluminium's position on the 'staircase' borderline between metals and non-metals in the periodic table, where elements show intermediate (both metallic and non-metallic) character.\n\n(b) (i) Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O. (ii) Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O (sodium aluminate).",
            markScheme: [
              "(a) Reacts with both acids and alkalis (1)",
              "(a) Aluminium on metal/non-metal borderline / staircase (1)",
              "(b)(i) Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O (1)",
              "(b)(ii) Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O (1)",
            ],
            commonError: "Writing AlCl₂ instead of AlCl₃ (aluminium is Al³⁺), or failing to balance the acid equation (6HCl, 2AlCl₃, 3H₂O).",
            difficulty: "challenge",
            hints: [
              "Amphoteric = reacts with both acid and alkali.",
              "Locate aluminium on the periodic table's metal/non-metal divide.",
              "Aluminium forms Al³⁺ → AlCl₃; balance Al first.",
              "With NaOH the product is sodium aluminate, NaAlO₂.",
            ],
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bq4-09",
            question: "An indigestion remedy contains magnesium hydroxide, which neutralises excess stomach acid (hydrochloric acid). (a) Write the balanced equation for the neutralisation. [2] (b) Explain, in terms of pH and ions, how the remedy relieves the discomfort. [2]",
            marks: 4,
            modelAnswer:
              "(a) Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O.\n\n(b) Magnesium hydroxide is a base; its OH⁻ ions react with the excess H⁺ ions of the stomach acid to form water (H⁺ + OH⁻ → H₂O). This lowers the H⁺ concentration, raising the pH towards neutral, so the stomach is less acidic and the discomfort is relieved.",
            markScheme: [
              "(a) Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O, balanced (1); correct formulae (1)",
              "(b) OH⁻ from base reacts with/removes H⁺ ions → water (1)",
              "(b) Lower [H⁺] raises pH towards neutral / less acidic (1)",
            ],
            commonError: "Writing MgOH or MgCl instead of Mg(OH)₂ and MgCl₂ (magnesium is Mg²⁺), or not linking the removal of H⁺ to a rise in pH.",
            difficulty: "core",
            hints: [
              "Magnesium is Mg²⁺, so the hydroxide is Mg(OH)₂ and needs 2HCl.",
              "Which ions react together in neutralisation?",
              "Removing H⁺ changes the pH in which direction?",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bq4-10",
            question: "A student electrolyses water but first wants to identify the two gases collected. One relights a glowing splint; the other gives a squeaky pop with a lit splint. (a) Identify each gas and the test result that confirms it. [2] (b) The student also has a sample of an acidic gas that turns damp blue litmus red but does NOT bleach it. Suggest its identity and explain how you ruled out chlorine. [2]",
            marks: 4,
            modelAnswer:
              "(a) The gas that relights a glowing splint is oxygen. The gas that gives a squeaky pop with a lit splint is hydrogen.\n\n(b) The acidic gas is most likely carbon dioxide (it turns damp blue litmus red because it is acidic). It is not chlorine because chlorine would also bleach the litmus white; since no bleaching occurs, chlorine is ruled out.",
            markScheme: [
              "(a) Oxygen — relights glowing splint (1)",
              "(a) Hydrogen — squeaky pop with lit splint (1)",
              "(b) Carbon dioxide (acidic gas, turns blue litmus red) (1)",
              "(b) Chlorine ruled out because it would bleach the litmus (no bleaching seen) (1)",
            ],
            commonError: "Confusing the two splint tests (glowing = oxygen, lit/pop = hydrogen), or assuming any acidic gas that reddens litmus must be chlorine.",
            difficulty: "core",
            hints: [
              "One splint glows, the other is lit — match each to its gas.",
              "An acidic gas reddens blue litmus.",
              "What extra effect would chlorine have that this gas does not?",
              "No bleaching means it is not chlorine.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
        ],
      },
    ],
  },
};
