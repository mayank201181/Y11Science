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
      {
        id: "chem-acids-bases-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Ten multiple-choice questions spanning ion definitions, the pH scale, acid reactions, oxide types, and salt preparation.",
        questions: [
          {
            id: "chem-acids-bases-bm1-01",
            question: "Which ion must be present in any aqueous solution for it to behave as an acid?",
            options: ["OH⁻(aq)", "H⁺(aq)", "Cl⁻(aq)", "Na⁺(aq)"],
            answerIndex: 1,
            explanation: "An acid is defined as a substance that produces H⁺(aq) ions in water. OH⁻ is the alkaline ion; Cl⁻ and Na⁺ are spectator ions that do not cause acidity.",
            difficulty: "warmup",
            guideRef: "Acids and Alkalis: Ion Definitions",
          },
          {
            id: "chem-acids-bases-bm1-02",
            question: "What colour does universal indicator turn in a neutral solution?",
            options: ["Red", "Yellow", "Green", "Purple"],
            answerIndex: 2,
            explanation: "Universal indicator is green at pH 7 (neutral). Red is strongly acidic (pH 1–3), yellow is weakly acidic (pH 4–6), and purple is strongly alkaline (pH 11–14).",
            difficulty: "warmup",
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bm1-03",
            question: "Which of the following is a base but NOT an alkali?",
            options: ["Sodium hydroxide", "Potassium hydroxide", "Copper(II) oxide", "Aqueous ammonia"],
            answerIndex: 2,
            explanation: "Copper(II) oxide neutralises acids (so it is a base) but is insoluble in water, so it cannot produce OH⁻(aq) and is not an alkali. NaOH, KOH and aqueous ammonia are all soluble bases (alkalis).",
            difficulty: "warmup",
            guideRef: "Acids and Alkalis: Ion Definitions",
          },
          {
            id: "chem-acids-bases-bm1-04",
            question: "Magnesium ribbon is added to dilute hydrochloric acid. Which set of products is correct?",
            options: [
              "Magnesium chloride and water",
              "Magnesium chloride and hydrogen",
              "Magnesium oxide and hydrogen",
              "Magnesium chloride, water and carbon dioxide",
            ],
            answerIndex: 1,
            explanation: "Acid + reactive metal → salt + hydrogen. Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g). Water forms with bases; carbon dioxide forms with carbonates.",
            difficulty: "core",
            hints: [
              "Identify the reaction type: acid + metal.",
              "Acid + metal gives a salt and one gas — which gas?",
              "The salt is the metal chloride; the gas gives a squeaky pop.",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bm1-05",
            question: "Which gas test result correctly identifies the gas?",
            options: [
              "Hydrogen relights a glowing splint",
              "Carbon dioxide turns limewater milky",
              "Oxygen gives a squeaky pop with a lit splint",
              "Ammonia bleaches damp blue litmus paper",
            ],
            answerIndex: 1,
            explanation: "CO₂ turns limewater (Ca(OH)₂(aq)) milky. Hydrogen gives a squeaky pop (not relight); oxygen relights a glowing splint (not pop); ammonia turns damp red litmus blue — it is chlorine that bleaches litmus.",
            difficulty: "core",
            hints: [
              "Match each gas to its standard IGCSE test.",
              "Squeaky pop = H₂; relights glowing splint = O₂.",
              "Limewater milky = CO₂; bleaching = Cl₂.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm1-06",
            question: "Which oxide is classified as acidic?",
            options: ["MgO", "CuO", "SO₃", "ZnO"],
            answerIndex: 2,
            explanation: "SO₃ is a non-metal oxide that reacts with alkalis (and dissolves in water to give sulfuric acid), so it is an acidic oxide. MgO and CuO are basic; ZnO is amphoteric.",
            difficulty: "core",
            hints: [
              "Acidic oxides are usually non-metal oxides.",
              "Which of these contains a non-metal that is not in the amphoteric border zone?",
            ],
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bm1-07",
            question: "A solution has a pH of 3. By what factor is its H⁺ concentration greater than a solution of pH 6?",
            options: ["3 times", "30 times", "100 times", "1000 times"],
            answerIndex: 3,
            explanation: "Each pH unit represents a tenfold change in [H⁺]. From pH 6 to pH 3 is 3 units, so the change is 10 × 10 × 10 = 1000 times greater [H⁺].",
            difficulty: "core",
            hints: [
              "Each pH unit = a factor of 10 in [H⁺].",
              "How many units apart are pH 6 and pH 3?",
              "Multiply 10 by itself once for each unit difference.",
            ],
            guideRef: "The pH Scale and Indicators",
            strategy: "Count pH units, then raise 10 to that power",
          },
          {
            id: "chem-acids-bases-bm1-08",
            question: "Which is the correct net ionic equation for neutralisation?",
            options: [
              "H⁺(aq) + Cl⁻(aq) → HCl(aq)",
              "H⁺(aq) + OH⁻(aq) → H₂O(l)",
              "Na⁺(aq) + OH⁻(aq) → NaOH(aq)",
              "2H⁺(aq) + O²⁻(aq) → H₂O(l)",
            ],
            answerIndex: 1,
            explanation: "Neutralisation always reduces to H⁺(aq) + OH⁻(aq) → H₂O(l) once spectator ions are removed. The other options either re-form a reactant or are not balanced/valid in aqueous solution.",
            difficulty: "core",
            hints: [
              "What two ions actually combine to form water?",
              "Spectator ions (Na⁺, Cl⁻) are cancelled.",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bm1-09",
            question: "A 0.1 mol/dm³ solution of ethanoic acid is compared with a 0.1 mol/dm³ solution of hydrochloric acid. Which statement is correct?",
            options: [
              "Both have the same pH because they have the same concentration.",
              "The ethanoic acid has the lower pH because it is the stronger acid.",
              "The hydrochloric acid has the lower pH because it is fully dissociated.",
              "The hydrochloric acid has the higher pH because it is more concentrated.",
            ],
            answerIndex: 2,
            explanation: "At equal concentration, the strong acid (HCl, fully dissociated) produces far more H⁺(aq) than the weak acid (ethanoic acid, only partially dissociated), so HCl has the lower pH. Strength, not concentration, governs the difference here.",
            difficulty: "challenge",
            hints: [
              "Same concentration — so the difference must come from strength.",
              "Which acid fully dissociates and so gives the most H⁺?",
              "More H⁺ means a lower pH.",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
            strategy: "Separate strength (dissociation) from concentration (moles/dm³)",
          },
          {
            id: "chem-acids-bases-bm1-10",
            question: "25.0 cm³ of 0.200 mol/dm³ NaOH is exactly neutralised by dilute HCl. How many moles of HCl are required?",
            options: ["0.00250 mol", "0.00500 mol", "0.0100 mol", "0.0500 mol"],
            answerIndex: 1,
            explanation: "Moles NaOH = 0.200 × (25.0/1000) = 0.00500 mol. NaOH + HCl → NaCl + H₂O is a 1:1 ratio, so moles HCl = 0.00500 mol.",
            difficulty: "challenge",
            hints: [
              "First find moles of NaOH: moles = concentration × volume (in dm³).",
              "Convert 25.0 cm³ to dm³ by dividing by 1000.",
              "The mole ratio NaOH : HCl is 1 : 1.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "moles = c × V; apply the 1:1 mole ratio",
          },
        ],
      },
      {
        id: "chem-acids-bases-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Ten multiple-choice questions on indicators, oxide classification, solubility rules, and salt-preparation methods.",
        questions: [
          {
            id: "chem-acids-bases-bm2-01",
            question: "Which colour does litmus show in an alkaline solution?",
            options: ["Red", "Green", "Blue", "Colourless"],
            answerIndex: 2,
            explanation: "Litmus turns blue in alkalis and red in acids (purple at neutral). It is a single-colour-change indicator for acid/alkali identification.",
            difficulty: "warmup",
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bm2-02",
            question: "Which of these salts is always soluble in water?",
            options: ["Barium sulfate", "Silver chloride", "Sodium nitrate", "Calcium carbonate"],
            answerIndex: 2,
            explanation: "All nitrates and all sodium salts are soluble, so sodium nitrate is soluble. BaSO₄, AgCl and CaCO₃ are all insoluble exceptions.",
            difficulty: "warmup",
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm2-03",
            question: "Which substance is an alkali?",
            options: ["Copper(II) oxide", "Iron(III) oxide", "Potassium hydroxide", "Carbon dioxide"],
            answerIndex: 2,
            explanation: "Potassium hydroxide is a soluble base (alkali) producing OH⁻(aq). Copper(II) oxide and iron(III) oxide are insoluble bases (not alkalis); carbon dioxide is an acidic oxide.",
            difficulty: "warmup",
            guideRef: "Acids and Alkalis: Ion Definitions",
          },
          {
            id: "chem-acids-bases-bm2-04",
            question: "Which salt would be prepared by precipitation?",
            options: ["Potassium nitrate", "Sodium sulfate", "Lead(II) iodide", "Copper(II) chloride"],
            answerIndex: 2,
            explanation: "Lead(II) iodide (PbI₂) is insoluble, so it is made by mixing two solutions: Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq). The other three salts are soluble and are made by other methods.",
            difficulty: "core",
            hints: [
              "Precipitation makes insoluble salts.",
              "Which of these salts is insoluble? Check the solubility rules.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm2-05",
            question: "Which oxide reacts with BOTH dilute hydrochloric acid AND aqueous sodium hydroxide?",
            options: ["Sodium oxide", "Carbon dioxide", "Zinc oxide", "Magnesium oxide"],
            answerIndex: 2,
            explanation: "Zinc oxide is amphoteric: ZnO + 2HCl → ZnCl₂ + H₂O (with acid) and ZnO + 2NaOH → Na₂ZnO₂ + H₂O (with alkali). Na₂O and MgO are basic; CO₂ is acidic.",
            difficulty: "core",
            hints: [
              "Reacting with both acid and alkali defines an amphoteric oxide.",
              "ZnO and Al₂O₃ are the key IGCSE amphoteric oxides.",
            ],
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bm2-06",
            question: "When excess copper(II) carbonate is added to dilute nitric acid and the mixture is filtered, what does the filtrate contain?",
            options: [
              "Copper(II) nitrate and excess nitric acid",
              "Copper(II) nitrate only",
              "Copper(II) carbonate and copper(II) nitrate",
              "Nitric acid only",
            ],
            answerIndex: 1,
            explanation: "Excess CuCO₃ guarantees all the acid is used up: CuCO₃ + 2HNO₃ → Cu(NO₃)₂ + H₂O + CO₂. Filtering removes the unreacted solid CuCO₃, leaving a filtrate of pure Cu(NO₃)₂(aq).",
            difficulty: "core",
            hints: [
              "What does using 'excess' solid guarantee about the acid?",
              "Filtering removes any leftover solid — what stays dissolved?",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm2-07",
            question: "Which method is most suitable for preparing pure, dry sodium chloride crystals?",
            options: [
              "Add excess sodium to hydrochloric acid, then filter",
              "Titrate sodium hydroxide against hydrochloric acid, then evaporate",
              "Mix sodium nitrate solution with hydrochloric acid, then filter",
              "Heat solid sodium carbonate with hydrochloric acid until dry",
            ],
            answerIndex: 1,
            explanation: "NaCl is a soluble salt of a soluble alkali (NaOH), so titration is used: find the exact volumes, repeat without indicator, then evaporate to crystallise. Adding sodium metal to acid is far too violent/dangerous; the other routes do not give a controlled pure product.",
            difficulty: "core",
            hints: [
              "Both the acid (HCl) and the base (NaOH) are soluble.",
              "When both reactants are soluble, you cannot filter off an excess — which method is used?",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm2-08",
            question: "Sulfur dioxide is bubbled into aqueous sodium hydroxide. Which equation is correct and balanced?",
            options: [
              "SO₂ + NaOH → NaSO₂ + H₂",
              "SO₂ + 2NaOH → Na₂SO₃ + H₂O",
              "SO₂ + 2NaOH → Na₂SO₄ + H₂",
              "SO₂ + NaOH → Na₂SO₃ + H₂O",
            ],
            answerIndex: 1,
            explanation: "SO₂ is acidic and reacts with the alkali to give the salt sodium sulfite and water: SO₂ + 2NaOH → Na₂SO₃ + H₂O. The sulfur stays +4 (sulfite, SO₃²⁻), and no hydrogen gas is produced.",
            difficulty: "challenge",
            hints: [
              "Acidic oxide + alkali → salt + water (no H₂).",
              "SO₂ gives the sulfite ion SO₃²⁻, so the salt is Na₂SO₃.",
              "Balance Na and H/O once the formulae are correct.",
            ],
            guideRef: "Classification of Oxides",
            strategy: "Acidic oxide + alkali → salt + water; balance after fixing formulae",
          },
          {
            id: "chem-acids-bases-bm2-09",
            question: "Which observation correctly distinguishes dilute sulfuric acid added to magnesium from dilute sulfuric acid added to magnesium carbonate?",
            options: [
              "Both fizz, but only the magnesium gives a gas that turns limewater milky",
              "Both fizz; the metal gives a gas that pops with a lit splint, the carbonate gives a gas that turns limewater milky",
              "Only the carbonate fizzes; the metal does not react",
              "Both give the same gas, which relights a glowing splint",
            ],
            answerIndex: 1,
            explanation: "Mg + H₂SO₄ → MgSO₄ + H₂ (gas pops with a lit splint). MgCO₃ + H₂SO₄ → MgSO₄ + H₂O + CO₂ (gas turns limewater milky). Both effervesce, but the gases differ, allowing them to be distinguished by gas test.",
            difficulty: "challenge",
            hints: [
              "Write both reactions: acid + metal vs acid + carbonate.",
              "What gas does each produce?",
              "Match each gas to its test: pop vs milky limewater.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "Identify reaction type → product gas → gas test",
          },
          {
            id: "chem-acids-bases-bm2-10",
            question: "10.0 g of calcium carbonate (Mr = 100) reacts completely with excess hydrochloric acid. What volume of CO₂ is produced at room temperature and pressure (molar gas volume = 24 dm³/mol)?",
            options: ["1.2 dm³", "2.4 dm³", "4.8 dm³", "24 dm³"],
            answerIndex: 1,
            explanation: "Moles CaCO₃ = 10.0 / 100 = 0.100 mol. CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂ gives a 1:1 ratio, so moles CO₂ = 0.100 mol. Volume = 0.100 × 24 = 2.4 dm³.",
            difficulty: "challenge",
            hints: [
              "Moles = mass / Mr.",
              "Mole ratio CaCO₃ : CO₂ from the balanced equation is 1 : 1.",
              "Volume of gas = moles × 24 dm³/mol at r.t.p.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "mass → moles → mole ratio → volume of gas",
          },
        ],
      },
      {
        id: "chem-acids-bases-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Ten multiple-choice questions on strength vs concentration, indicators for titrations, amphoteric oxides, and gas tests.",
        questions: [
          {
            id: "chem-acids-bases-bm3-01",
            question: "Which is a common laboratory acid?",
            options: ["Sodium hydroxide", "Nitric acid", "Calcium hydroxide", "Ammonia"],
            answerIndex: 1,
            explanation: "Nitric acid (HNO₃) is one of the three common lab acids (with HCl and H₂SO₄). The other three options are common alkalis.",
            difficulty: "warmup",
            guideRef: "Acids and Alkalis: Ion Definitions",
          },
          {
            id: "chem-acids-bases-bm3-02",
            question: "What is the colour of thymolphthalein indicator in an acidic solution?",
            options: ["Pink", "Blue", "Colourless", "Yellow"],
            answerIndex: 2,
            explanation: "Thymolphthalein is colourless in acid and blue in alkali (colour change around pH 9.3–10.5). It is used for strong-alkali/weak-acid titrations.",
            difficulty: "warmup",
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bm3-03",
            question: "Which of the following is the salt formed when nitric acid is neutralised by potassium hydroxide?",
            options: ["Potassium nitrate", "Potassium nitrite", "Potassium sulfate", "Potassium chloride"],
            answerIndex: 0,
            explanation: "Salt name = metal cation + acid anion. HNO₃ gives the nitrate ion, so KOH + HNO₃ → KNO₃ + H₂O. The salt is potassium nitrate.",
            difficulty: "warmup",
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bm3-04",
            question: "Which statement about a concentrated solution of a weak acid is correct?",
            options: [
              "It must have a very low pH because it is concentrated",
              "It is fully dissociated because it is concentrated",
              "It has many acid molecules per dm³ but only a small fraction are dissociated",
              "It behaves identically to a concentrated strong acid",
            ],
            answerIndex: 2,
            explanation: "Concentration (moles per dm³) is independent of strength (degree of dissociation). A concentrated weak acid has many molecules per dm³, but being weak, only a small fraction ionise to give H⁺.",
            difficulty: "core",
            hints: [
              "Separate the ideas of concentration and strength.",
              "Weak = partially dissociated, no matter how concentrated.",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
          },
          {
            id: "chem-acids-bases-bm3-05",
            question: "Which indicator is most suitable for a titration between a strong acid and a weak alkali (e.g. HCl and aqueous ammonia)?",
            options: ["Thymolphthalein", "Methyl orange", "Universal indicator", "Litmus"],
            answerIndex: 1,
            explanation: "Methyl orange (red→yellow, endpoint near pH 4) is suited to strong-acid/weak-alkali titrations because the equivalence point lies on the acidic side. Thymolphthalein suits strong-alkali/weak-acid titrations; universal indicator and litmus change too gradually for a sharp endpoint.",
            difficulty: "core",
            hints: [
              "A strong acid + weak alkali endpoint is slightly acidic.",
              "Which indicator changes colour in the acidic region around pH 4?",
            ],
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bm3-06",
            question: "Aluminium oxide reacts with hydrochloric acid. Which equation is correct and balanced?",
            options: [
              "Al₂O₃ + 3HCl → 2AlCl₃ + 3H₂O",
              "Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O",
              "Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂",
              "AlO + 2HCl → AlCl₂ + H₂O",
            ],
            answerIndex: 1,
            explanation: "Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O is balanced: 2 Al, 6 Cl, 6 H, and 3 O on each side. Acid + oxide gives salt + water (not H₂), and the formula of the oxide is Al₂O₃.",
            difficulty: "core",
            hints: [
              "Basic/amphoteric oxide + acid → salt + water (no H₂).",
              "Al³⁺ with Cl⁻ gives AlCl₃; now balance Cl, then H and O.",
            ],
            guideRef: "Classification of Oxides",
            strategy: "Fix formulae first, then balance Al → Cl → H/O",
          },
          {
            id: "chem-acids-bases-bm3-07",
            question: "A gas turns damp blue litmus paper red and then bleaches it white. The gas is also pale yellow-green. Which gas is it?",
            options: ["Ammonia", "Hydrogen", "Chlorine", "Carbon dioxide"],
            answerIndex: 2,
            explanation: "Chlorine (Cl₂) is a pale yellow-green, pungent gas that turns damp blue litmus red (acidic) and then bleaches it white. Ammonia turns red litmus blue; H₂ pops; CO₂ turns limewater milky.",
            difficulty: "core",
            hints: [
              "Bleaching of litmus is a signature test.",
              "Which gas is yellow-green and an oxidising bleach?",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm3-08",
            question: "Equal concentrations of HCl and CH₃COOH are each added to identical pieces of magnesium ribbon. Which statement is correct?",
            options: [
              "No reaction occurs with the ethanoic acid because it is weak",
              "Both react, but the HCl reacts faster because it has a higher [H⁺]",
              "The ethanoic acid reacts faster because it is more reactive",
              "Both react at exactly the same rate because they have the same concentration",
            ],
            answerIndex: 1,
            explanation: "Both acids react with Mg to give a salt and H₂. At equal concentration the strong acid (HCl) has a higher [H⁺], so its reaction is faster. The weak acid still reacts (it is not unreactive), just more slowly.",
            difficulty: "challenge",
            hints: [
              "Rate depends on [H⁺], which depends on degree of dissociation.",
              "Which acid has the higher [H⁺] at the same concentration?",
              "A weak acid still reacts — does it just go slower or not at all?",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
            strategy: "Higher [H⁺] → faster reaction with the metal",
          },
          {
            id: "chem-acids-bases-bm3-09",
            question: "Which row correctly pairs an oxide with its classification?",
            options: [
              "CO — acidic; ZnO — basic",
              "NO — neutral; Al₂O₃ — amphoteric",
              "SO₂ — basic; MgO — acidic",
              "CO₂ — neutral; Na₂O — amphoteric",
            ],
            answerIndex: 1,
            explanation: "NO is a neutral oxide and Al₂O₃ is amphoteric — both correct. CO is neutral (not acidic) and ZnO is amphoteric (not basic); SO₂ is acidic and MgO basic; CO₂ is acidic and Na₂O is basic.",
            difficulty: "challenge",
            hints: [
              "Recall: CO, NO, H₂O are the neutral oxides.",
              "ZnO and Al₂O₃ are amphoteric.",
              "Check both halves of each row before choosing.",
            ],
            guideRef: "Classification of Oxides",
            strategy: "Eliminate any row with one wrong classification",
          },
          {
            id: "chem-acids-bases-bm3-10",
            question: "A 0.250 mol/dm³ solution of HCl has a volume of 40.0 cm³. How many moles of HCl does it contain?",
            options: ["0.00625 mol", "0.0100 mol", "0.0625 mol", "0.100 mol"],
            answerIndex: 1,
            explanation: "Moles = concentration × volume(dm³) = 0.250 × (40.0/1000) = 0.250 × 0.0400 = 0.0100 mol.",
            difficulty: "core",
            hints: [
              "Convert 40.0 cm³ to dm³ (÷1000).",
              "Moles = concentration × volume in dm³.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "moles = c × V (V in dm³)",
          },
        ],
      },
      {
        id: "chem-acids-bases-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ten multiple-choice questions covering the full topic with several multi-step calculation challenges.",
        questions: [
          {
            id: "chem-acids-bases-bm4-01",
            question: "Which equation correctly shows sodium hydroxide dissolving in water?",
            options: [
              "NaOH(s) → Na⁺(aq) + OH⁻(aq)",
              "NaOH(s) → Na⁻(aq) + OH⁺(aq)",
              "NaOH(s) → Na(s) + OH(g)",
              "NaOH(s) → NaO⁻(aq) + H⁺(aq)",
            ],
            answerIndex: 0,
            explanation: "Sodium hydroxide dissolves to give sodium ions and hydroxide ions: NaOH(s) → Na⁺(aq) + OH⁻(aq). The hydroxide ion makes the solution alkaline.",
            difficulty: "warmup",
            guideRef: "Acids and Alkalis: Ion Definitions",
          },
          {
            id: "chem-acids-bases-bm4-02",
            question: "What is the approximate pH of a strongly alkaline solution such as concentrated sodium hydroxide?",
            options: ["pH 1", "pH 4", "pH 7", "pH 14"],
            answerIndex: 3,
            explanation: "Strong, concentrated alkalis lie at the top of the pH scale, near pH 14. pH 1 is strongly acidic, pH 4 weakly acidic, pH 7 neutral.",
            difficulty: "warmup",
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bm4-03",
            question: "Which pair of substances would react together to produce a gas that turns limewater milky?",
            options: [
              "Zinc and hydrochloric acid",
              "Sodium carbonate and hydrochloric acid",
              "Sodium hydroxide and hydrochloric acid",
              "Copper and hydrochloric acid",
            ],
            answerIndex: 1,
            explanation: "Acid + carbonate → salt + water + CO₂, and CO₂ turns limewater milky. Zinc + acid gives H₂ (pops); NaOH + acid gives no gas; copper is below hydrogen and does not react with dilute HCl.",
            difficulty: "core",
            hints: [
              "Limewater milky = CO₂.",
              "Which reactant type releases CO₂ with an acid?",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bm4-04",
            question: "A student prepares lead(II) sulfate, which is insoluble. Which procedure is correct?",
            options: [
              "Titrate lead(II) nitrate against sulfuric acid using an indicator",
              "Add excess lead to dilute sulfuric acid, then filter and evaporate",
              "Mix lead(II) nitrate solution with dilute sulfuric acid, then filter, wash and dry the precipitate",
              "Dissolve lead(II) oxide in sulfuric acid and evaporate to crystallise",
            ],
            answerIndex: 2,
            explanation: "PbSO₄ is insoluble, so precipitation is used: Pb(NO₃)₂(aq) + H₂SO₄(aq) → PbSO₄(s) + 2HNO₃(aq). The solid is filtered, washed with distilled water, and dried.",
            difficulty: "core",
            hints: [
              "Insoluble salt → precipitation.",
              "Mix two solutions providing Pb²⁺ and SO₄²⁻, then filter the solid.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm4-05",
            question: "Why is the indicator omitted in the second run of a titration used to prepare a pure salt?",
            options: [
              "Because the indicator would react with the acid",
              "Because the indicator would contaminate (colour) the pure salt product",
              "Because the indicator changes the volume of acid needed",
              "Because the indicator only works once",
            ],
            answerIndex: 1,
            explanation: "The exact volumes are found in the first run (with indicator). The second run repeats those volumes with no indicator so that the crystallised salt is not contaminated by coloured indicator dye.",
            difficulty: "core",
            hints: [
              "Indicator is a coloured dye dissolved in the mixture.",
              "What would happen to its colour if you evaporated the solution?",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bm4-06",
            question: "Which statement about the reactivity of acids with metals is correct?",
            options: [
              "All metals react with dilute acids to give hydrogen",
              "Copper reacts vigorously with dilute hydrochloric acid",
              "Only metals above hydrogen in the reactivity series react with dilute acids to give hydrogen",
              "Gold reacts slowly with dilute sulfuric acid",
            ],
            answerIndex: 2,
            explanation: "Only metals more reactive than hydrogen (above it in the reactivity series) displace hydrogen from dilute acids. Copper and gold are below hydrogen and do not react with dilute acids.",
            difficulty: "core",
            hints: [
              "Compare the metal's reactivity with hydrogen.",
              "Metals below hydrogen (Cu, Ag, Au) do not react with dilute acids.",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bm4-07",
            question: "25.0 cm³ of NaOH solution is exactly neutralised by 20.0 cm³ of 0.100 mol/dm³ HCl. What is the concentration of the NaOH?",
            options: ["0.0625 mol/dm³", "0.0800 mol/dm³", "0.125 mol/dm³", "0.160 mol/dm³"],
            answerIndex: 1,
            explanation: "Moles HCl = 0.100 × (20.0/1000) = 0.00200 mol. Ratio NaOH:HCl = 1:1, so moles NaOH = 0.00200 mol. Concentration = 0.00200 / (25.0/1000) = 0.00200 / 0.0250 = 0.0800 mol/dm³.",
            difficulty: "challenge",
            hints: [
              "Find moles of HCl first (c × V).",
              "NaOH : HCl is 1 : 1, so moles NaOH = moles HCl.",
              "Concentration NaOH = moles / volume in dm³.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "moles HCl → 1:1 ratio → c(NaOH) = n / V",
          },
          {
            id: "chem-acids-bases-bm4-08",
            question: "What mass of magnesium oxide (Mr = 40) is needed to exactly neutralise 50.0 cm³ of 0.500 mol/dm³ sulfuric acid? (MgO + H₂SO₄ → MgSO₄ + H₂O)",
            options: ["0.500 g", "1.00 g", "2.00 g", "4.00 g"],
            answerIndex: 1,
            explanation: "Moles H₂SO₄ = 0.500 × (50.0/1000) = 0.0250 mol. Ratio MgO:H₂SO₄ = 1:1, so moles MgO = 0.0250 mol. Mass = moles × Mr = 0.0250 × 40 = 1.00 g.",
            difficulty: "challenge",
            hints: [
              "Moles H₂SO₄ = c × V (V in dm³).",
              "From the equation, MgO : H₂SO₄ is 1 : 1.",
              "Mass = moles × Mr.",
            ],
            guideRef: "Classification of Oxides",
            strategy: "moles acid → 1:1 ratio → mass = n × Mr",
          },
          {
            id: "chem-acids-bases-bm4-09",
            question: "Which combination, when mixed as solutions, produces NO precipitate?",
            options: [
              "Silver nitrate and sodium chloride",
              "Barium chloride and sodium sulfate",
              "Potassium nitrate and sodium chloride",
              "Lead(II) nitrate and potassium iodide",
            ],
            answerIndex: 2,
            explanation: "Potassium nitrate + sodium chloride: all of K⁺, NO₃⁻, Na⁺, Cl⁻ are soluble, so no precipitate forms. The others give AgCl, BaSO₄ and PbI₂ respectively — all insoluble.",
            difficulty: "challenge",
            hints: [
              "Apply the solubility rules to every possible ion swap.",
              "Nitrates and sodium/potassium salts are always soluble.",
              "Look for a pair where no insoluble combination is possible.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
            strategy: "Swap the ions and test each new pairing against the solubility rules",
          },
          {
            id: "chem-acids-bases-bm4-10",
            question: "0.0500 mol of zinc reacts completely with excess dilute sulfuric acid. What volume of hydrogen gas is produced at r.t.p. (molar gas volume = 24 dm³/mol)? (Zn + H₂SO₄ → ZnSO₄ + H₂)",
            options: ["0.600 dm³", "1.20 dm³", "2.40 dm³", "4.80 dm³"],
            answerIndex: 1,
            explanation: "Ratio Zn:H₂ = 1:1, so moles H₂ = 0.0500 mol. Volume = moles × 24 = 0.0500 × 24 = 1.20 dm³.",
            difficulty: "challenge",
            hints: [
              "Mole ratio Zn : H₂ from the equation is 1 : 1.",
              "Volume of gas = moles × 24 dm³/mol at r.t.p.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "moles metal → 1:1 ratio → V = n × 24",
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "chem-acids-bases-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ten structured questions on definitions, the pH scale, acid reactions, and basic salt preparation.",
        questions: [
          {
            id: "chem-acids-bases-bq1-01",
            question: "Define each of the following terms: (a) acid, (b) base, (c) alkali. [3 marks]",
            marks: 3,
            modelAnswer:
              "(a) An acid is a substance that produces hydrogen ions, H⁺(aq), when dissolved in water.\n(b) A base is a substance that neutralises an acid (e.g. a metal oxide or hydroxide).\n(c) An alkali is a soluble base that produces hydroxide ions, OH⁻(aq), in solution.",
            markScheme: [
              "(a) Acid produces H⁺(aq) ions in water [1]",
              "(b) Base neutralises an acid / metal oxide or hydroxide [1]",
              "(c) Alkali is a soluble base producing OH⁻(aq) [1]",
            ],
            commonError: "Saying an alkali simply 'is a base' without the key idea that it is the soluble subset that releases OH⁻(aq).",
            difficulty: "warmup",
            guideRef: "Acids and Alkalis: Ion Definitions",
          },
          {
            id: "chem-acids-bases-bq1-02",
            question: "Describe the colour of universal indicator at (a) pH 1, (b) pH 7, and (c) pH 13. [3 marks]",
            marks: 3,
            modelAnswer:
              "(a) pH 1: red (strongly acidic).\n(b) pH 7: green (neutral).\n(c) pH 13: purple/violet (strongly alkaline).",
            markScheme: [
              "(a) Red [1]",
              "(b) Green [1]",
              "(c) Purple / violet [1]",
            ],
            commonError: "Confusing the alkaline end (blue→purple) with the acidic end (red→orange).",
            difficulty: "warmup",
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bq1-03",
            question: "Dilute hydrochloric acid is added to zinc.\n\n(a) Write the balanced symbol equation with state symbols. [2 marks]\n(b) Name the gas produced and describe the test and result for it. [2 marks]",
            marks: 4,
            modelAnswer:
              "(a) Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)\n\n(b) The gas is hydrogen. Test: hold a lit splint at the mouth of the test tube. Result: a squeaky pop is heard, confirming hydrogen.",
            markScheme: [
              "(a) Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g) — correct formulae and balancing [1]",
              "(a) Correct state symbols [1]",
              "(b) Gas is hydrogen; test with lit splint [1]",
              "(b) Squeaky pop [1]",
            ],
            commonError: "Writing ZnCl instead of ZnCl₂ (zinc forms Zn²⁺, so two Cl⁻ are needed), or omitting state symbols.",
            difficulty: "warmup",
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bq1-04",
            question: "Sodium carbonate reacts with dilute hydrochloric acid.\n\n(a) Write the balanced symbol equation with state symbols. [2 marks]\n(b) State two observations you would make. [2 marks]\n(c) Give the test and result that confirm the gas produced. [2 marks]",
            marks: 6,
            modelAnswer:
              "(a) Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)\n\n(b) Observations: effervescence/fizzing (gas given off) and the solid dissolves to leave a colourless solution.\n\n(c) Bubble the gas through limewater; the limewater turns milky/cloudy, confirming carbon dioxide.",
            markScheme: [
              "(a) Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂ correct formulae [1]",
              "(a) Balanced with correct state symbols [1]",
              "(b) Effervescence/bubbles [1]",
              "(b) Solid dissolves / colourless solution [1]",
              "(c) Bubble through limewater [1]",
              "(c) Turns milky/cloudy [1]",
            ],
            commonError: "Forgetting to balance the 2HCl and 2NaCl, or writing the gas as hydrogen rather than carbon dioxide.",
            difficulty: "core",
            hints: [
              "Acid + carbonate → salt + water + CO₂.",
              "Balance Na first, then Cl, then check H and O.",
              "What is the standard test for CO₂?",
            ],
            guideRef: "Reactions of Acids",
            strategy: "Identify products → balance → observations → gas test",
          },
          {
            id: "chem-acids-bases-bq1-05",
            question: "Explain the difference between the terms 'strong acid' and 'concentrated acid'. Use an example to support your answer. [4 marks]",
            marks: 4,
            modelAnswer:
              "Strength refers to the degree of dissociation (ionisation) of an acid in water: a strong acid is fully dissociated into ions, whereas a weak acid is only partially dissociated. Concentration refers to the number of moles of acid dissolved per dm³ of solution. The two are independent: for example, glacial ethanoic acid is concentrated (many moles per dm³) but weak (only partially ionised), while very dilute hydrochloric acid is dilute but strong (fully ionised).",
            markScheme: [
              "Strength = degree of dissociation / ionisation [1]",
              "Concentration = moles of acid per dm³ (amount per volume) [1]",
              "They are independent of each other [1]",
              "Correct example, e.g. concentrated weak (ethanoic) or dilute strong (HCl) [1]",
            ],
            commonError: "Treating 'strong' and 'concentrated' as synonyms — they describe different properties.",
            difficulty: "core",
            hints: [
              "Define each term separately.",
              "Strength = how much it dissociates; concentration = how much is dissolved.",
              "Give an example that shows the two can vary independently.",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
            strategy: "Define each term, state independence, give a contrasting example",
          },
          {
            id: "chem-acids-bases-bq1-06",
            question: "Classify each oxide as acidic, basic, amphoteric or neutral: (a) CaO, (b) CO₂, (c) Al₂O₃, (d) NO. [4 marks]",
            marks: 4,
            modelAnswer:
              "(a) CaO — basic (metal oxide; reacts with acids).\n(b) CO₂ — acidic (non-metal oxide; reacts with alkalis).\n(c) Al₂O₃ — amphoteric (reacts with both acids and alkalis).\n(d) NO — neutral (reacts with neither acids nor alkalis).",
            markScheme: [
              "(a) Basic [1]",
              "(b) Acidic [1]",
              "(c) Amphoteric [1]",
              "(d) Neutral [1]",
            ],
            commonError: "Classifying Al₂O₃ as basic (it is amphoteric) or NO as acidic (it is neutral, like CO and H₂O).",
            difficulty: "core",
            hints: [
              "Metal oxides tend to be basic; non-metal oxides tend to be acidic.",
              "Al and Zn oxides are the amphoteric ones.",
              "CO, NO and H₂O are the neutral oxides.",
            ],
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bq1-07",
            question: "A student prepares copper(II) sulfate crystals from copper(II) oxide and dilute sulfuric acid using the excess-base method.\n\n(a) Write the balanced equation. [1 mark]\n(b) State the four main steps of the method in order. [4 marks]\n(c) Explain why excess copper(II) oxide is used. [1 mark]",
            marks: 6,
            modelAnswer:
              "(a) CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l)\n\n(b) 1. Warm the dilute sulfuric acid and add excess copper(II) oxide, stirring until no more reacts.\n2. Filter to remove the excess (unreacted) copper(II) oxide.\n3. Heat the blue filtrate to evaporate some water until the point of crystallisation, then leave to cool so crystals form.\n4. Filter off the crystals, wash with a little distilled water, and dry (e.g. between filter papers / in a warm oven).\n\n(c) Excess copper(II) oxide ensures all the sulfuric acid is used up, so no acid contaminates the final salt; the excess solid is then easily removed by filtration.",
            markScheme: [
              "(a) CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l) [1]",
              "(b) Add excess CuO to (warm) acid until no more reacts [1]",
              "(b) Filter to remove excess CuO [1]",
              "(b) Evaporate filtrate to point of crystallisation / heat then cool [1]",
              "(b) Filter, wash and dry the crystals [1]",
              "(c) Excess ensures all acid reacts (no acid contamination); excess removed by filtering [1]",
            ],
            commonError: "Evaporating to complete dryness (this can decompose the hydrated salt) instead of evaporating only to the point of crystallisation and then cooling.",
            difficulty: "core",
            hints: [
              "This is the excess insoluble base method.",
              "The sequence is react → filter → evaporate → crystallise → dry.",
              "Why does using excess solid guarantee a pure salt?",
            ],
            guideRef: "Preparing Salts and Gas Tests",
            strategy: "React with excess → filter → crystallise → dry; justify the excess",
          },
          {
            id: "chem-acids-bases-bq1-08",
            question: "Write balanced symbol equations (state symbols not required) for: (a) the neutralisation of sodium hydroxide by sulfuric acid, and (b) the reaction of potassium carbonate with dilute nitric acid. [4 marks]",
            marks: 4,
            modelAnswer:
              "(a) H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O\n\n(b) K₂CO₃ + 2HNO₃ → 2KNO₃ + H₂O + CO₂",
            markScheme: [
              "(a) Correct formulae H₂SO₄, NaOH, Na₂SO₄, H₂O [1]",
              "(a) Correctly balanced (2NaOH, 2H₂O) [1]",
              "(b) Correct formulae K₂CO₃, HNO₃, KNO₃, H₂O, CO₂ [1]",
              "(b) Correctly balanced (2HNO₃, 2KNO₃) [1]",
            ],
            commonError: "Forgetting that sulfuric acid is diprotic, so it needs 2NaOH; and that K⁺ and NO₃⁻ are both singly charged, requiring 2HNO₃ and 2KNO₃.",
            difficulty: "core",
            hints: [
              "Sulfuric acid provides two H⁺, so two NaOH are needed.",
              "Acid + carbonate → salt + water + CO₂.",
              "Balance the metal ion first, then the acid anion.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "Fix formulae from ion charges, then balance",
          },
          {
            id: "chem-acids-bases-bq1-09",
            question: "(Challenge) 24.0 cm³ of dilute hydrochloric acid exactly neutralises 25.0 cm³ of 0.120 mol/dm³ sodium hydroxide.\n\n(a) Write the balanced equation. [1 mark]\n(b) Calculate the concentration of the hydrochloric acid. Show all working and give your answer to 3 significant figures. [4 marks]",
            marks: 5,
            modelAnswer:
              "(a) HCl + NaOH → NaCl + H₂O\n\n(b) Moles NaOH = 0.120 × (25.0/1000) = 0.00300 mol.\nMole ratio HCl : NaOH = 1 : 1, so moles HCl = 0.00300 mol.\nConcentration HCl = moles / volume = 0.00300 / (24.0/1000) = 0.00300 / 0.0240 = 0.125 mol/dm³ (3 s.f.).",
            markScheme: [
              "(a) HCl + NaOH → NaCl + H₂O [1]",
              "(b) Moles NaOH = 0.120 × 0.0250 = 0.00300 mol [1]",
              "(b) Mole ratio 1:1 → moles HCl = 0.00300 mol [1]",
              "(b) Concentration = 0.00300 / 0.0240 = 0.125 mol/dm³ [1]",
              "(b) Correct units and 3 s.f. [1]",
            ],
            commonError: "Using the acid volume to find moles of NaOH, or forgetting to convert cm³ to dm³ (÷1000).",
            difficulty: "challenge",
            hints: [
              "Find moles of the substance you have full data for (NaOH).",
              "Use the 1:1 mole ratio to get moles of HCl.",
              "Concentration = moles / volume in dm³ — divide by the acid volume.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "moles known reagent → mole ratio → c = n / V of unknown",
            solutions: [
              {
                label: "Method: titration calculation",
                steps: [
                  "Convert volumes: 25.0 cm³ = 0.0250 dm³; 24.0 cm³ = 0.0240 dm³",
                  "Moles NaOH = 0.120 mol/dm³ × 0.0250 dm³ = 0.00300 mol",
                  "Mole ratio HCl : NaOH = 1 : 1 (from HCl + NaOH → NaCl + H₂O)",
                  "Moles HCl = 0.00300 mol",
                  "Concentration HCl = 0.00300 mol / 0.0240 dm³ = 0.125 mol/dm³ (3 s.f.)",
                ],
              },
            ],
          },
          {
            id: "chem-acids-bases-bq1-10",
            question: "(Challenge) A pure dry sample of the insoluble salt barium sulfate is required.\n\n(a) Name the method used and explain why it is chosen. [2 marks]\n(b) Name two soluble solutions that could be mixed to make barium sulfate, and write the balanced equation. [2 marks]\n(c) Describe how you would obtain a pure, dry sample of the barium sulfate from the mixture. [3 marks]",
            marks: 7,
            modelAnswer:
              "(a) Precipitation is used, because barium sulfate is insoluble — it forms as a solid when two soluble solutions are mixed, so it cannot be made by evaporation/titration.\n\n(b) Barium chloride solution and sodium sulfate solution (or dilute sulfuric acid). Equation: BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq).\n\n(c) Filter the mixture to collect the barium sulfate precipitate as the residue. Wash the residue with distilled water (to remove soluble impurities such as NaCl). Then dry the solid, e.g. in a warm oven or between sheets of filter paper.",
            markScheme: [
              "(a) Precipitation [1]; because the salt is insoluble [1]",
              "(b) Two suitable soluble solutions, e.g. BaCl₂ + Na₂SO₄ (or H₂SO₄) [1]",
              "(b) Balanced equation, e.g. BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl [1]",
              "(c) Filter to collect precipitate [1]; wash with distilled water [1]; dry the solid [1]",
            ],
            commonError: "Trying to evaporate the mixture to dryness, which leaves the soluble by-product (e.g. NaCl) mixed with the barium sulfate instead of giving a pure sample.",
            difficulty: "challenge",
            hints: [
              "Insoluble salt → which preparation method?",
              "You need a soluble source of Ba²⁺ and a soluble source of SO₄²⁻.",
              "The pure solid is the residue — filter, wash, dry.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
            strategy: "Insoluble salt → precipitation → filter, wash, dry",
          },
        ],
      },
      {
        id: "chem-acids-bases-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Ten structured questions on indicators, oxides, gas tests, and method selection, with multi-step calculations.",
        questions: [
          {
            id: "chem-acids-bases-bq2-01",
            question: "State the colour change you would observe when litmus is added to: (a) dilute hydrochloric acid, (b) aqueous sodium hydroxide. [2 marks]",
            marks: 2,
            modelAnswer:
              "(a) In dilute hydrochloric acid, litmus is red.\n(b) In aqueous sodium hydroxide, litmus is blue.",
            markScheme: [
              "(a) Red (in acid) [1]",
              "(b) Blue (in alkali) [1]",
            ],
            commonError: "Reversing the colours — remember 'acid = red, alkali = blue' for litmus.",
            difficulty: "warmup",
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bq2-02",
            question: "Give the standard laboratory test (reagent/method and positive result) for each gas: (a) hydrogen, (b) oxygen, (c) carbon dioxide. [3 marks]",
            marks: 3,
            modelAnswer:
              "(a) Hydrogen: hold a lit splint at the mouth of the tube — a squeaky pop is heard.\n(b) Oxygen: insert a glowing splint — it relights.\n(c) Carbon dioxide: bubble the gas through limewater — it turns milky/cloudy.",
            markScheme: [
              "(a) Lit splint → squeaky pop [1]",
              "(b) Glowing splint → relights [1]",
              "(c) Limewater → turns milky [1]",
            ],
            commonError: "Mixing up the splint tests — a lit splint pops with H₂; a glowing splint relights with O₂.",
            difficulty: "warmup",
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bq2-03",
            question: "Name the salt formed and write a balanced equation for each neutralisation: (a) hydrochloric acid + potassium hydroxide, (b) nitric acid + calcium hydroxide. [4 marks]",
            marks: 4,
            modelAnswer:
              "(a) Salt: potassium chloride. HCl + KOH → KCl + H₂O\n\n(b) Salt: calcium nitrate. 2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O",
            markScheme: [
              "(a) Potassium chloride named [1]; HCl + KOH → KCl + H₂O [1]",
              "(b) Calcium nitrate named [1]; 2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O balanced [1]",
            ],
            commonError: "Forgetting that calcium forms Ca²⁺, so Ca(OH)₂ needs 2HNO₃ and gives Ca(NO₃)₂ with two nitrate ions.",
            difficulty: "core",
            hints: [
              "Salt name = metal + acid anion.",
              "Calcium is 2+, so balance two nitrates and two waters.",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bq2-04",
            question: "Zinc oxide is described as amphoteric.\n\n(a) Explain what 'amphoteric' means. [1 mark]\n(b) Write a balanced equation for zinc oxide reacting with dilute hydrochloric acid. [1 mark]\n(c) Write a balanced equation for zinc oxide reacting with aqueous sodium hydroxide (forming sodium zincate, Na₂ZnO₂). [2 marks]",
            marks: 4,
            modelAnswer:
              "(a) Amphoteric means the oxide reacts with both acids and alkalis (bases) to form salts.\n\n(b) ZnO + 2HCl → ZnCl₂ + H₂O\n\n(c) ZnO + 2NaOH → Na₂ZnO₂ + H₂O",
            markScheme: [
              "(a) Reacts with both acids and alkalis [1]",
              "(b) ZnO + 2HCl → ZnCl₂ + H₂O [1]",
              "(c) Correct formula Na₂ZnO₂ [1]; balanced ZnO + 2NaOH → Na₂ZnO₂ + H₂O [1]",
            ],
            commonError: "Producing hydrogen in the NaOH reaction — oxide + alkali gives salt + water only, no H₂.",
            difficulty: "core",
            hints: [
              "Amphoteric = reacts with both acids and alkalis.",
              "Oxide + acid/alkali → salt + water (never H₂).",
              "Sodium zincate is Na₂ZnO₂; balance Na, then O and H.",
            ],
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bq2-05",
            question: "Describe how you could distinguish between ammonia gas and chlorine gas using damp litmus paper. Include the litmus colour used and the observation for each gas. [4 marks]",
            marks: 4,
            modelAnswer:
              "For ammonia: hold a piece of damp red litmus paper in the gas — it turns blue (ammonia is alkaline). For chlorine: hold a piece of damp blue litmus paper in the gas — it turns red and is then bleached white (chlorine is an acidic, oxidising gas). The bleaching effect is unique to chlorine and confirms its identity.",
            markScheme: [
              "Ammonia turns damp red litmus blue [1]",
              "Ammonia is alkaline (reason) [1]",
              "Chlorine turns damp blue litmus red then bleaches it white [1]",
              "Bleaching is characteristic of chlorine [1]",
            ],
            commonError: "Saying chlorine only 'turns litmus red' and omitting the bleaching, which is the key distinguishing observation.",
            difficulty: "core",
            hints: [
              "Ammonia is alkaline; chlorine is acidic and bleaches.",
              "Choose red litmus to show ammonia's effect, blue litmus for chlorine.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bq2-06",
            question: "A student must prepare each of these salts. State the most suitable method for each and justify it: (a) potassium nitrate, (b) silver chloride. [4 marks]",
            marks: 4,
            modelAnswer:
              "(a) Potassium nitrate is soluble and is made from a soluble alkali (KOH) and a soluble acid (HNO₃), so titration is used: titrate to find the exact volumes, repeat without indicator, then evaporate to crystallise.\n\n(b) Silver chloride is insoluble, so precipitation is used: mix silver nitrate solution with sodium chloride solution, then filter, wash and dry the precipitate.",
            markScheme: [
              "(a) Titration [1]; because both reactants are soluble / salt is soluble [1]",
              "(b) Precipitation [1]; because AgCl is insoluble [1]",
            ],
            commonError: "Choosing the excess-solid method for KNO₃ — there is no insoluble solid to filter off because both KOH and HNO₃ are soluble, so titration is required.",
            difficulty: "core",
            hints: [
              "First decide if the salt is soluble or insoluble.",
              "Soluble salt from soluble base → titration; insoluble salt → precipitation.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
            strategy: "Decide solubility → match the preparation method",
          },
          {
            id: "chem-acids-bases-bq2-07",
            question: "Explain, in terms of ions and dissociation, why a 0.1 mol/dm³ solution of hydrochloric acid has a lower pH than a 0.1 mol/dm³ solution of ethanoic acid. Include an equation for the dissociation of each acid. [4 marks]",
            marks: 4,
            modelAnswer:
              "Hydrochloric acid is a strong acid and is fully dissociated: HCl(aq) → H⁺(aq) + Cl⁻(aq). This gives the maximum possible H⁺ concentration. Ethanoic acid is a weak acid and only partially dissociates: CH₃COOH(aq) ⇌ CH₃COO⁻(aq) + H⁺(aq), with most molecules remaining undissociated. At the same concentration, the HCl solution therefore contains more H⁺(aq) ions, giving it a lower pH.",
            markScheme: [
              "HCl fully dissociated: HCl → H⁺ + Cl⁻ (one-way arrow) [1]",
              "Ethanoic acid partially dissociated: CH₃COOH ⇌ CH₃COO⁻ + H⁺ (reversible arrow) [1]",
              "HCl produces more H⁺(aq) at the same concentration [1]",
              "More H⁺ → lower pH [1]",
            ],
            commonError: "Attributing the difference to concentration — both are 0.1 mol/dm³; the difference is the degree of dissociation (strength).",
            difficulty: "core",
            hints: [
              "Same concentration — so look to strength/dissociation.",
              "Use a one-way arrow for HCl, a reversible arrow for ethanoic acid.",
              "Link [H⁺] to pH.",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
            strategy: "State dissociation of each → compare [H⁺] → link to pH",
          },
          {
            id: "chem-acids-bases-bq2-08",
            question: "(Challenge) 50.0 cm³ of 0.100 mol/dm³ sulfuric acid is neutralised by aqueous sodium hydroxide of concentration 0.200 mol/dm³.\n\n(a) Write the balanced equation. [1 mark]\n(b) Calculate the volume of sodium hydroxide solution required. Show all working. [4 marks]",
            marks: 5,
            modelAnswer:
              "(a) H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O\n\n(b) Moles H₂SO₄ = 0.100 × (50.0/1000) = 0.00500 mol.\nMole ratio H₂SO₄ : NaOH = 1 : 2, so moles NaOH = 2 × 0.00500 = 0.0100 mol.\nVolume NaOH = moles / concentration = 0.0100 / 0.200 = 0.0500 dm³ = 50.0 cm³.",
            markScheme: [
              "(a) H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O [1]",
              "(b) Moles H₂SO₄ = 0.100 × 0.0500 = 0.00500 mol [1]",
              "(b) Mole ratio 1:2 → moles NaOH = 0.0100 mol [1]",
              "(b) Volume = 0.0100 / 0.200 = 0.0500 dm³ [1]",
              "(b) Convert to 50.0 cm³ with correct units [1]",
            ],
            commonError: "Using a 1:1 ratio and getting 25.0 cm³ — sulfuric acid is diprotic, so the ratio is 1:2.",
            difficulty: "challenge",
            hints: [
              "Moles H₂SO₄ = c × V (V in dm³).",
              "The mole ratio H₂SO₄ : NaOH is 1 : 2.",
              "Volume = moles / concentration; convert dm³ back to cm³.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "moles acid → 1:2 ratio → V = n / c",
            solutions: [
              {
                label: "Method: volume from moles",
                steps: [
                  "Convert volume: 50.0 cm³ = 0.0500 dm³",
                  "Moles H₂SO₄ = 0.100 mol/dm³ × 0.0500 dm³ = 0.00500 mol",
                  "Mole ratio H₂SO₄ : NaOH = 1 : 2, so moles NaOH = 0.0100 mol",
                  "Volume NaOH = 0.0100 mol / 0.200 mol/dm³ = 0.0500 dm³",
                  "Convert: 0.0500 dm³ = 50.0 cm³",
                ],
              },
            ],
          },
          {
            id: "chem-acids-bases-bq2-09",
            question: "(Challenge) A 1.00 g sample of impure calcium carbonate is added to excess dilute hydrochloric acid. The carbon dioxide produced occupies 0.216 dm³ at r.t.p. (molar gas volume = 24 dm³/mol; Mr of CaCO₃ = 100).\n\n(a) Write the balanced equation. [1 mark]\n(b) Calculate the moles of CO₂ produced. [1 mark]\n(c) Calculate the mass of calcium carbonate that reacted, and hence its percentage purity in the sample. Show your working. [4 marks]",
            marks: 6,
            modelAnswer:
              "(a) CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂\n\n(b) Moles CO₂ = volume / molar gas volume = 0.216 / 24 = 0.00900 mol.\n\n(c) Mole ratio CaCO₃ : CO₂ = 1 : 1, so moles CaCO₃ = 0.00900 mol.\nMass CaCO₃ = moles × Mr = 0.00900 × 100 = 0.900 g.\nPercentage purity = (0.900 / 1.00) × 100 = 90.0%.",
            markScheme: [
              "(a) CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂ [1]",
              "(b) Moles CO₂ = 0.216 / 24 = 0.00900 mol [1]",
              "(c) Moles CaCO₃ = 0.00900 mol (1:1 ratio) [1]",
              "(c) Mass CaCO₃ = 0.00900 × 100 = 0.900 g [1]",
              "(c) Percentage purity = (0.900 / 1.00) × 100 [1]",
              "(c) = 90.0% with correct working/units [1]",
            ],
            commonError: "Dividing the gas volume by the wrong number, or forgetting that the CaCO₃:CO₂ ratio is 1:1 when converting moles of gas to mass of solid.",
            difficulty: "challenge",
            hints: [
              "Moles of gas = volume / 24 at r.t.p.",
              "CaCO₃ : CO₂ is 1 : 1, so moles of CaCO₃ = moles of CO₂.",
              "Purity = (mass reacted / sample mass) × 100.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "gas volume → moles → mole ratio → mass → percentage purity",
            solutions: [
              {
                label: "Method: gas volume to percentage purity",
                steps: [
                  "Moles CO₂ = 0.216 dm³ / 24 dm³ mol⁻¹ = 0.00900 mol",
                  "Mole ratio CaCO₃ : CO₂ = 1 : 1, so moles CaCO₃ = 0.00900 mol",
                  "Mass CaCO₃ = 0.00900 mol × 100 g/mol = 0.900 g",
                  "Percentage purity = (0.900 g / 1.00 g) × 100 = 90.0%",
                ],
              },
            ],
          },
          {
            id: "chem-acids-bases-bq2-10",
            question: "(Challenge) An oxide of an unknown element X reacts with both dilute hydrochloric acid and aqueous sodium hydroxide.\n\n(a) What type of oxide is this, and what does this suggest about the position of element X in the Periodic Table? [2 marks]\n(b) Name two elements whose oxides behave in this way. [1 mark]\n(c) The student claims the oxide must be a metal oxide because it reacts with acid. Comment on whether this claim is fully justified. [2 marks]",
            marks: 5,
            modelAnswer:
              "(a) It is an amphoteric oxide (reacts with both acids and alkalis). This suggests element X lies in the border ('staircase') region between metals and non-metals in the Periodic Table.\n\n(b) Zinc and aluminium (ZnO and Al₂O₃ are amphoteric). (Lead and tin oxides are also accepted.)\n\n(c) The claim is only partly justified. Reacting with acid is consistent with a basic/metal oxide, but an amphoteric oxide also reacts with alkali, which is non-metal-like behaviour. The element (e.g. Zn or Al) is in fact a metal, but the acid reaction alone does not prove this — the oxide behaves with both acid and alkali, so reacting with acid is necessary but not sufficient evidence on its own.",
            markScheme: [
              "(a) Amphoteric oxide [1]; element in metal/non-metal border region [1]",
              "(b) Two correct elements, e.g. zinc and aluminium [1]",
              "(c) Acid reaction alone does not prove it is a metal oxide / amphoteric oxides also react with alkali [1]",
              "(c) Reasoned conclusion (e.g. Zn/Al are metals but evidence is incomplete) [1]",
            ],
            commonError: "Assuming any oxide that reacts with acid must be basic; amphoteric oxides react with acid as well, so the acid test alone is not conclusive.",
            difficulty: "challenge",
            hints: [
              "Reacting with both acid and alkali defines one oxide type.",
              "Where in the Periodic Table are amphoteric elements found?",
              "To evaluate the claim, ask what the acid reaction does and does not prove.",
            ],
            guideRef: "Classification of Oxides",
            strategy: "Classify → locate in table → evaluate the evidence critically",
          },
        ],
      },
      {
        id: "chem-acids-bases-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Ten structured questions on ion definitions, indicators, oxide reactions, and salt preparation, including calculation challenges.",
        questions: [
          {
            id: "chem-acids-bases-bq3-01",
            question: "Name the ion produced in solution by (a) all acids and (b) all alkalis, and give one example of a common acid and one common alkali. [4 marks]",
            marks: 4,
            modelAnswer:
              "(a) Acids produce the hydrogen ion, H⁺(aq). Example: hydrochloric acid (HCl).\n(b) Alkalis produce the hydroxide ion, OH⁻(aq). Example: sodium hydroxide (NaOH).",
            markScheme: [
              "(a) H⁺(aq) [1]; example acid e.g. HCl [1]",
              "(b) OH⁻(aq) [1]; example alkali e.g. NaOH [1]",
            ],
            commonError: "Writing H instead of H⁺ or omitting the (aq) state, which is needed to show the ion is in solution.",
            difficulty: "warmup",
            guideRef: "Acids and Alkalis: Ion Definitions",
          },
          {
            id: "chem-acids-bases-bq3-02",
            question: "State whether each substance is acidic, neutral, or alkaline and give an approximate pH: (a) pure water, (b) lemon juice, (c) oven cleaner (concentrated NaOH). [3 marks]",
            marks: 3,
            modelAnswer:
              "(a) Pure water: neutral, pH 7.\n(b) Lemon juice: acidic, around pH 2–3.\n(c) Oven cleaner (concentrated NaOH): strongly alkaline, around pH 13–14.",
            markScheme: [
              "(a) Neutral, pH 7 [1]",
              "(b) Acidic, pH ~2–3 (accept 1–4) [1]",
              "(c) Strongly alkaline, pH ~13–14 (accept 12–14) [1]",
            ],
            commonError: "Giving a single exact pH where a sensible range is expected, or placing a strong alkali below pH 10.",
            difficulty: "warmup",
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bq3-03",
            question: "Copper(II) oxide is added to warm dilute sulfuric acid.\n\n(a) Write the balanced equation with state symbols. [2 marks]\n(b) State two observations. [2 marks]",
            marks: 4,
            modelAnswer:
              "(a) CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l)\n\n(b) Observations: the black copper(II) oxide solid dissolves/disappears, and the solution turns blue (due to copper(II) sulfate forming).",
            markScheme: [
              "(a) CuO + H₂SO₄ → CuSO₄ + H₂O correct formulae [1]",
              "(a) Balanced with correct state symbols [1]",
              "(b) Black solid dissolves/disappears [1]",
              "(b) Solution turns blue [1]",
            ],
            commonError: "Stating that a gas is produced — basic oxide + acid gives only salt + water, no gas.",
            difficulty: "core",
            hints: [
              "Basic oxide + acid → salt + water (no gas).",
              "Think about the colour of CuO and of copper(II) sulfate solution.",
            ],
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bq3-04",
            question: "A teacher demonstrates that ethanoic acid is a weak acid.\n\n(a) Write an equation, with the correct type of arrow, for the dissociation of ethanoic acid in water. [1 mark]\n(b) Explain what the arrow shows about the dissociation. [1 mark]\n(c) Suggest one experiment that would show ethanoic acid is weaker than hydrochloric acid of the same concentration. [2 marks]",
            marks: 4,
            modelAnswer:
              "(a) CH₃COOH(aq) ⇌ CH₃COO⁻(aq) + H⁺(aq)\n\n(b) The reversible arrow (⇌) shows that an equilibrium is set up: the acid is only partially dissociated, with most molecules remaining undissociated.\n\n(c) Compare the pH of equal concentrations of the two acids with a pH meter (ethanoic acid has the higher pH), or compare the rate of reaction with magnesium/marble chips (ethanoic acid reacts more slowly because it has a lower [H⁺]).",
            markScheme: [
              "(a) CH₃COOH ⇌ CH₃COO⁻ + H⁺ with reversible arrow [1]",
              "(b) Partial dissociation / equilibrium between molecules and ions [1]",
              "(c) Sensible comparative experiment (pH, rate with metal/carbonate, conductivity) [1]",
              "(c) Correct expected result for the weak acid (higher pH / slower rate / lower conductivity) [1]",
            ],
            commonError: "Using a one-way arrow for a weak acid, which wrongly implies full dissociation.",
            difficulty: "core",
            hints: [
              "Weak acid → reversible arrow.",
              "What measurable property differs at equal concentration: pH, rate, or conductivity?",
              "State the expected result for the weaker acid.",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
          },
          {
            id: "chem-acids-bases-bq3-05",
            question: "Describe how a student could prepare pure dry crystals of magnesium sulfate from magnesium carbonate and dilute sulfuric acid. Include the balanced equation and the reason excess magnesium carbonate is used. [6 marks]",
            marks: 6,
            modelAnswer:
              "Equation: MgCO₃(s) + H₂SO₄(aq) → MgSO₄(aq) + H₂O(l) + CO₂(g)\n\nMethod: 1. Add excess magnesium carbonate to the dilute sulfuric acid, stirring until no more fizzing occurs (effervescence stops) and excess solid remains. The excess ensures all the acid reacts, so no acid contaminates the product.\n2. Filter to remove the excess magnesium carbonate.\n3. Heat the filtrate (MgSO₄ solution) to evaporate some water to the point of crystallisation, then leave to cool so that crystals form.\n4. Filter off the crystals, wash with a little distilled water, and dry between filter papers or in a warm oven.",
            markScheme: [
              "MgCO₃ + H₂SO₄ → MgSO₄ + H₂O + CO₂ balanced [1]",
              "Add excess MgCO₃ to acid until fizzing stops / excess remains [1]",
              "Excess ensures all acid used up / no acid contamination [1]",
              "Filter to remove excess solid [1]",
              "Evaporate filtrate to point of crystallisation / cool to crystallise [1]",
              "Filter, wash and dry the crystals [1]",
            ],
            commonError: "Treating it like the metal + acid method and forgetting the CO₂ produced, or evaporating to dryness rather than to the point of crystallisation.",
            difficulty: "core",
            hints: [
              "Acid + carbonate → salt + water + CO₂.",
              "Excess insoluble carbonate is the signal for the excess-solid method.",
              "React → filter → evaporate to crystallisation → dry.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
            strategy: "React with excess carbonate → filter → crystallise → dry",
          },
          {
            id: "chem-acids-bases-bq3-06",
            question: "Using the solubility rules, predict whether a precipitate forms when the following solutions are mixed. If one does, name the precipitate and write the balanced equation. (a) silver nitrate + sodium chloride, (b) sodium nitrate + potassium chloride. [4 marks]",
            marks: 4,
            modelAnswer:
              "(a) A precipitate forms: silver chloride (AgCl) is insoluble. AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq).\n\n(b) No precipitate forms: all of sodium nitrate, potassium nitrate, sodium chloride and potassium chloride are soluble, so all ions remain in solution.",
            markScheme: [
              "(a) Precipitate forms; named as silver chloride / AgCl [1]",
              "(a) AgNO₃ + NaCl → AgCl + NaNO₃ balanced [1]",
              "(b) No precipitate [1]",
              "(b) Correct reason: all possible products are soluble [1]",
            ],
            commonError: "Predicting a precipitate for (b) — sodium and potassium salts and nitrates are always soluble, so nothing is insoluble.",
            difficulty: "core",
            hints: [
              "Swap the ions and check each new combination.",
              "Chlorides are soluble except AgCl and PbCl₂.",
              "All Na⁺, K⁺ and nitrate salts are soluble.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
            strategy: "Swap ions → apply solubility rules → identify any insoluble product",
          },
          {
            id: "chem-acids-bases-bq3-07",
            question: "(a) State the ionic equation for any neutralisation reaction. [1 mark]\n(b) Explain why this single ionic equation applies to the reaction of any strong acid with any strong alkali. [3 marks]",
            marks: 4,
            modelAnswer:
              "(a) H⁺(aq) + OH⁻(aq) → H₂O(l)\n\n(b) In solution, strong acids fully dissociate to give H⁺(aq) and strong alkalis fully dissociate to give OH⁻(aq). The metal cation (e.g. Na⁺, K⁺) and the acid anion (e.g. Cl⁻, NO₃⁻) are spectator ions — they remain unchanged in solution and appear on both sides. Removing the spectator ions leaves only H⁺(aq) + OH⁻(aq) → H₂O(l), which is the same for every strong acid–strong alkali combination.",
            markScheme: [
              "(a) H⁺(aq) + OH⁻(aq) → H₂O(l) [1]",
              "(b) Strong acids/alkalis fully dissociate into ions [1]",
              "(b) Metal cation and acid anion are spectator ions [1]",
              "(b) Spectators cancel, leaving the same H⁺ + OH⁻ → H₂O for all [1]",
            ],
            commonError: "Including spectator ions in the 'ionic equation' instead of cancelling them.",
            difficulty: "core",
            hints: [
              "What two ions actually combine?",
              "Which ions take no part (spectators)?",
              "Explain why the spectators differ but always cancel.",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bq3-08",
            question: "(Challenge) A student titrates 25.0 cm³ of sodium hydroxide solution with dilute nitric acid. The mean titre of 0.150 mol/dm³ nitric acid is 22.4 cm³.\n\n(a) Write the balanced equation. [1 mark]\n(b) Calculate the concentration of the sodium hydroxide in mol/dm³, to 3 significant figures. Show your working. [4 marks]",
            marks: 5,
            modelAnswer:
              "(a) HNO₃ + NaOH → NaNO₃ + H₂O\n\n(b) Moles HNO₃ = 0.150 × (22.4/1000) = 0.00336 mol.\nMole ratio HNO₃ : NaOH = 1 : 1, so moles NaOH = 0.00336 mol.\nConcentration NaOH = 0.00336 / (25.0/1000) = 0.00336 / 0.0250 = 0.1344 = 0.134 mol/dm³ (3 s.f.).",
            markScheme: [
              "(a) HNO₃ + NaOH → NaNO₃ + H₂O [1]",
              "(b) Moles HNO₃ = 0.150 × 0.0224 = 0.00336 mol [1]",
              "(b) Mole ratio 1:1 → moles NaOH = 0.00336 mol [1]",
              "(b) Concentration = 0.00336 / 0.0250 = 0.1344 mol/dm³ [1]",
              "(b) Answer 0.134 mol/dm³ to 3 s.f. with units [1]",
            ],
            commonError: "Rounding too early, or dividing by the wrong volume (use the NaOH volume, 25.0 cm³, for the NaOH concentration).",
            difficulty: "challenge",
            hints: [
              "Find moles of the acid first (c × V).",
              "1:1 ratio gives moles of NaOH directly.",
              "Divide by the NaOH volume in dm³, then round at the end.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "moles acid → 1:1 ratio → c(NaOH) = n / V",
            solutions: [
              {
                label: "Method: titration calculation",
                steps: [
                  "Convert volumes: 22.4 cm³ = 0.0224 dm³; 25.0 cm³ = 0.0250 dm³",
                  "Moles HNO₃ = 0.150 mol/dm³ × 0.0224 dm³ = 0.00336 mol",
                  "Mole ratio HNO₃ : NaOH = 1 : 1, so moles NaOH = 0.00336 mol",
                  "Concentration NaOH = 0.00336 mol / 0.0250 dm³ = 0.1344 mol/dm³",
                  "To 3 s.f.: 0.134 mol/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-acids-bases-bq3-09",
            question: "(Challenge) Dilute sulfuric acid reacts with sodium hydroxide. A student mixes 30.0 cm³ of 0.100 mol/dm³ H₂SO₄ with 30.0 cm³ of 0.100 mol/dm³ NaOH.\n\n(a) Write the balanced equation. [1 mark]\n(b) By calculating the moles of each reactant, determine which reactant is in excess and by how many moles. [4 marks]\n(c) State whether the final mixture is acidic, neutral, or alkaline. [1 mark]",
            marks: 6,
            modelAnswer:
              "(a) H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O\n\n(b) Moles H₂SO₄ = 0.100 × (30.0/1000) = 0.00300 mol.\nMoles NaOH = 0.100 × (30.0/1000) = 0.00300 mol.\nThe ratio required is 1 H₂SO₄ : 2 NaOH, so 0.00300 mol H₂SO₄ needs 0.00600 mol NaOH. Only 0.00300 mol NaOH is available, so NaOH is the limiting reactant and H₂SO₄ is in excess.\nNaOH used reacts with 0.00150 mol H₂SO₄, leaving 0.00300 − 0.00150 = 0.00150 mol H₂SO₄ in excess.\n\n(c) The mixture is acidic (unreacted sulfuric acid remains).",
            markScheme: [
              "(a) H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O [1]",
              "(b) Moles H₂SO₄ = 0.00300 mol and moles NaOH = 0.00300 mol [1]",
              "(b) Uses 1:2 ratio: 0.00300 mol NaOH reacts with 0.00150 mol H₂SO₄ [1]",
              "(b) H₂SO₄ in excess [1]",
              "(b) Excess H₂SO₄ = 0.00150 mol [1]",
              "(c) Acidic [1]",
            ],
            commonError: "Assuming equal moles means exact neutralisation — the 1:2 ratio means the acid is actually in excess here.",
            difficulty: "challenge",
            hints: [
              "Find moles of each reactant separately.",
              "Apply the 1:2 ratio to see how much NaOH the acid would need.",
              "The reactant that runs out first is limiting; the other is in excess.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "moles of each → compare to required ratio → find excess → judge pH",
            solutions: [
              {
                label: "Method: limiting reactant",
                steps: [
                  "Moles H₂SO₄ = 0.100 × 0.0300 = 0.00300 mol",
                  "Moles NaOH = 0.100 × 0.0300 = 0.00300 mol",
                  "Required ratio H₂SO₄ : NaOH = 1 : 2",
                  "0.00300 mol NaOH reacts with 0.00300 ÷ 2 = 0.00150 mol H₂SO₄",
                  "Excess H₂SO₄ = 0.00300 − 0.00150 = 0.00150 mol → mixture is acidic",
                ],
              },
            ],
          },
          {
            id: "chem-acids-bases-bq3-10",
            question: "(Challenge) Aluminium oxide (Al₂O₃) is amphoteric.\n\n(a) Write balanced equations for its reaction with (i) dilute hydrochloric acid and (ii) aqueous sodium hydroxide (forming sodium aluminate, NaAlO₂). [3 marks]\n(b) Calculate the mass of aluminium oxide (Mr = 102) needed to react completely with 0.300 mol of hydrochloric acid. Show your working. [3 marks]",
            marks: 6,
            modelAnswer:
              "(a) (i) Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O\n(ii) Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O\n\n(b) From the equation, Al₂O₃ : HCl = 1 : 6.\nMoles Al₂O₃ = 0.300 / 6 = 0.0500 mol.\nMass Al₂O₃ = moles × Mr = 0.0500 × 102 = 5.10 g.",
            markScheme: [
              "(a)(i) Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O [1]",
              "(a)(ii) Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O [1]",
              "(a) Both correctly balanced [1]",
              "(b) Ratio Al₂O₃ : HCl = 1 : 6 used; moles Al₂O₃ = 0.0500 mol [1]",
              "(b) Mass = moles × Mr [1]",
              "(b) = 0.0500 × 102 = 5.10 g [1]",
            ],
            commonError: "Using a 1:1 ratio for Al₂O₃ : HCl instead of 1:6, which is set by the balanced equation.",
            difficulty: "challenge",
            hints: [
              "Balance the acid reaction first: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O.",
              "The mole ratio Al₂O₃ : HCl is 1 : 6.",
              "Mass = moles × Mr.",
            ],
            guideRef: "Classification of Oxides",
            strategy: "Balance → mole ratio → moles → mass = n × Mr",
            solutions: [
              {
                label: "Method: mass from mole ratio",
                steps: [
                  "Balanced acid equation: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O",
                  "Mole ratio Al₂O₃ : HCl = 1 : 6",
                  "Moles Al₂O₃ = 0.300 mol HCl ÷ 6 = 0.0500 mol",
                  "Mass Al₂O₃ = 0.0500 mol × 102 g/mol = 5.10 g",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-acids-bases-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Ten structured questions integrating the whole topic, with several multi-step quantitative challenges.",
        questions: [
          {
            id: "chem-acids-bases-bq4-01",
            question: "(a) Name the three common laboratory acids. [1 mark]\n(b) Name three common laboratory alkalis. [1 mark]\n(c) State which one of your alkalis does not contain a metal. [1 mark]",
            marks: 3,
            modelAnswer:
              "(a) Hydrochloric acid (HCl), sulfuric acid (H₂SO₄), nitric acid (HNO₃).\n(b) Sodium hydroxide (NaOH), potassium hydroxide (KOH), calcium hydroxide (Ca(OH)₂) (aqueous ammonia is also acceptable).\n(c) Aqueous ammonia (NH₃) — it contains no metal.",
            markScheme: [
              "(a) HCl, H₂SO₄, HNO₃ (all three) [1]",
              "(b) Three correct alkalis (e.g. NaOH, KOH, Ca(OH)₂, NH₃(aq)) [1]",
              "(c) Aqueous ammonia / NH₃ [1]",
            ],
            commonError: "Listing ethanoic acid or carbonic acid as a 'common laboratory acid' — the three standard strong lab acids are HCl, H₂SO₄ and HNO₃.",
            difficulty: "warmup",
            guideRef: "Acids and Alkalis: Ion Definitions",
          },
          {
            id: "chem-acids-bases-bq4-02",
            question: "A student tests four solutions with universal indicator and records the colours: A = red, B = green, C = orange, D = purple.\n\n(a) Place A, B, C and D in order from most acidic to most alkaline. [1 mark]\n(b) Which solution is neutral? [1 mark]\n(c) Estimate the pH of solution D. [1 mark]",
            marks: 3,
            modelAnswer:
              "(a) Most acidic to most alkaline: A (red), C (orange), B (green), D (purple).\n(b) Solution B (green) is neutral.\n(c) Solution D (purple) is strongly alkaline, approximately pH 13–14 (accept 12–14).",
            markScheme: [
              "(a) Order A, C, B, D [1]",
              "(b) B is neutral [1]",
              "(c) pH ~13–14 (accept 12–14) [1]",
            ],
            commonError: "Confusing orange (weakly acidic, ~pH 3–4) with the strongly acidic red end, or treating purple as neutral.",
            difficulty: "warmup",
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bq4-03",
            question: "Complete and balance the following word/symbol equations:\n(a) iron + dilute sulfuric acid → ...\n(b) sodium hydroxide + nitric acid → ...\n(c) calcium carbonate + hydrochloric acid → ...\nWrite balanced symbol equations for each. [6 marks]",
            marks: 6,
            modelAnswer:
              "(a) Fe + H₂SO₄ → FeSO₄ + H₂\n(b) NaOH + HNO₃ → NaNO₃ + H₂O\n(c) CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂",
            markScheme: [
              "(a) Correct products FeSO₄ + H₂ [1]; balanced [1]",
              "(b) Correct products NaNO₃ + H₂O [1]; balanced [1]",
              "(c) Correct products CaCl₂ + H₂O + CO₂ [1]; balanced (2HCl) [1]",
            ],
            commonError: "Writing Fe₂(SO₄)₃ for (a) — dilute acid + iron gives iron(II), FeSO₄; and forgetting the 2HCl needed in (c).",
            difficulty: "core",
            hints: [
              "Acid + metal → salt + H₂; acid + alkali → salt + water; acid + carbonate → salt + water + CO₂.",
              "Iron with dilute acid gives Fe²⁺ (FeSO₄).",
              "Balance the metal/anion, then H and O.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "Classify each reaction type → write products → balance",
          },
          {
            id: "chem-acids-bases-bq4-04",
            question: "Explain why copper does not react with dilute hydrochloric acid, whereas magnesium reacts vigorously. Refer to the reactivity series in your answer. [3 marks]",
            marks: 3,
            modelAnswer:
              "Magnesium is above hydrogen in the reactivity series, so it is reactive enough to displace hydrogen from the acid: Mg + 2HCl → MgCl₂ + H₂. Copper is below hydrogen in the reactivity series, so it cannot displace hydrogen from dilute acid and therefore does not react.",
            markScheme: [
              "Magnesium is above hydrogen in the reactivity series [1]",
              "So Mg displaces hydrogen / reacts to give H₂ [1]",
              "Copper is below hydrogen, so it does not displace hydrogen / no reaction [1]",
            ],
            commonError: "Saying copper is 'unreactive' generally — the key point is its position below hydrogen specifically, which is why it cannot react with dilute acids.",
            difficulty: "core",
            hints: [
              "Compare each metal's position with hydrogen.",
              "Only metals above hydrogen displace it from acids.",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bq4-05",
            question: "A student is asked to prepare three salts: lead(II) chloride (insoluble), zinc sulfate (soluble, from an insoluble base), and potassium sulfate (soluble, from a soluble alkali). For each, name the preparation method. [3 marks]",
            marks: 3,
            modelAnswer:
              "Lead(II) chloride: precipitation (mix two soluble solutions, e.g. lead(II) nitrate + sodium chloride, then filter).\nZinc sulfate: excess insoluble base/carbonate + acid (add excess zinc oxide or zinc carbonate to dilute sulfuric acid, filter, evaporate).\nPotassium sulfate: titration (titrate potassium hydroxide against sulfuric acid, repeat without indicator, evaporate).",
            markScheme: [
              "Lead(II) chloride: precipitation [1]",
              "Zinc sulfate: excess insoluble base/carbonate + acid (filter then evaporate) [1]",
              "Potassium sulfate: titration [1]",
            ],
            commonError: "Choosing the excess-solid method for potassium sulfate — KOH is soluble, so it cannot be filtered off; titration is required.",
            difficulty: "core",
            hints: [
              "Insoluble salt → precipitation.",
              "Soluble salt + insoluble base → excess-solid method.",
              "Soluble salt + soluble alkali → titration.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
            strategy: "Solubility of salt and of base → method",
          },
          {
            id: "chem-acids-bases-bq4-06",
            question: "(a) Define 'amphoteric oxide'. [1 mark]\n(b) Zinc oxide reacts with both hydrochloric acid and sodium hydroxide. Write a balanced equation for each reaction. [2 marks]\n(c) Suggest why magnesium oxide reacts with hydrochloric acid but not with sodium hydroxide. [1 mark]",
            marks: 4,
            modelAnswer:
              "(a) An amphoteric oxide is one that reacts with both acids and alkalis (bases) to form a salt and water.\n\n(b) ZnO + 2HCl → ZnCl₂ + H₂O\nZnO + 2NaOH → Na₂ZnO₂ + H₂O\n\n(c) Magnesium oxide is a basic (metallic) oxide, so it reacts only with acids; it has no acidic character and so does not react with the alkali sodium hydroxide.",
            markScheme: [
              "(a) Reacts with both acids and alkalis [1]",
              "(b) ZnO + 2HCl → ZnCl₂ + H₂O [1]",
              "(b) ZnO + 2NaOH → Na₂ZnO₂ + H₂O [1]",
              "(c) MgO is a basic oxide (reacts only with acids) [1]",
            ],
            commonError: "Suggesting MgO is amphoteric — it is purely basic, unlike ZnO.",
            difficulty: "core",
            hints: [
              "Amphoteric = both acid and alkali reactions.",
              "Balance the zinc equations carefully (Na₂ZnO₂).",
              "Why does a basic oxide not react with an alkali?",
            ],
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bq4-07",
            question: "(Challenge) 0.65 g of zinc (Ar = 65) is added to 50.0 cm³ of 0.500 mol/dm³ hydrochloric acid.\n\n(a) Write the balanced equation. [1 mark]\n(b) Show by calculation which reactant is in excess. [3 marks]\n(c) Calculate the volume of hydrogen produced at r.t.p. (molar gas volume = 24 dm³/mol). [2 marks]",
            marks: 6,
            modelAnswer:
              "(a) Zn + 2HCl → ZnCl₂ + H₂\n\n(b) Moles Zn = 0.65 / 65 = 0.0100 mol.\nMoles HCl = 0.500 × (50.0/1000) = 0.0250 mol.\nThe ratio Zn : HCl required is 1 : 2, so 0.0100 mol Zn needs 0.0200 mol HCl. There is 0.0250 mol HCl available, so HCl is in excess (by 0.0050 mol) and zinc is the limiting reactant.\n\n(c) Zn : H₂ = 1 : 1, so moles H₂ = 0.0100 mol (based on the limiting reactant zinc). Volume = 0.0100 × 24 = 0.240 dm³ (240 cm³).",
            markScheme: [
              "(a) Zn + 2HCl → ZnCl₂ + H₂ [1]",
              "(b) Moles Zn = 0.0100 mol and moles HCl = 0.0250 mol [1]",
              "(b) 0.0100 mol Zn needs 0.0200 mol HCl (1:2 ratio) [1]",
              "(b) HCl in excess / Zn limiting [1]",
              "(c) Moles H₂ = 0.0100 mol (Zn limiting, 1:1) [1]",
              "(c) Volume = 0.0100 × 24 = 0.240 dm³ [1]",
            ],
            commonError: "Calculating H₂ from the acid (the excess reactant) instead of from zinc (the limiting reactant), which would overestimate the gas volume.",
            difficulty: "challenge",
            hints: [
              "Find moles of both reactants.",
              "Use the 1:2 ratio to decide which runs out first (limiting).",
              "Base the H₂ volume on the limiting reactant; V = n × 24.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "moles of each → find limiting → use limiting for product gas",
            solutions: [
              {
                label: "Method: limiting reactant then gas volume",
                steps: [
                  "Moles Zn = 0.65 g / 65 g/mol = 0.0100 mol",
                  "Moles HCl = 0.500 mol/dm³ × 0.0500 dm³ = 0.0250 mol",
                  "Ratio Zn : HCl = 1 : 2, so 0.0100 mol Zn needs 0.0200 mol HCl",
                  "0.0250 mol HCl > 0.0200 mol needed, so HCl is in excess; Zn is limiting",
                  "Zn : H₂ = 1 : 1, so moles H₂ = 0.0100 mol",
                  "Volume H₂ = 0.0100 mol × 24 dm³/mol = 0.240 dm³ (240 cm³)",
                ],
              },
            ],
          },
          {
            id: "chem-acids-bases-bq4-08",
            question: "(Challenge) In a titration, 25.0 cm³ of 0.0800 mol/dm³ sodium hydroxide is neutralised by sulfuric acid.\n\n(a) Write the balanced equation. [1 mark]\n(b) Calculate the moles of sulfuric acid that reacted. [2 marks]\n(c) If the titre of sulfuric acid was 20.0 cm³, calculate the concentration of the sulfuric acid to 3 significant figures. [3 marks]",
            marks: 6,
            modelAnswer:
              "(a) 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O\n\n(b) Moles NaOH = 0.0800 × (25.0/1000) = 0.00200 mol. Ratio NaOH : H₂SO₄ = 2 : 1, so moles H₂SO₄ = 0.00200 / 2 = 0.00100 mol.\n\n(c) Concentration H₂SO₄ = moles / volume = 0.00100 / (20.0/1000) = 0.00100 / 0.0200 = 0.0500 mol/dm³ (3 s.f.).",
            markScheme: [
              "(a) 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O [1]",
              "(b) Moles NaOH = 0.00200 mol [1]",
              "(b) Ratio 2:1 → moles H₂SO₄ = 0.00100 mol [1]",
              "(c) Concentration = 0.00100 / 0.0200 [1]",
              "(c) = 0.0500 mol/dm³ [1]",
              "(c) Correct units and 3 s.f. [1]",
            ],
            commonError: "Forgetting the 2:1 ratio (NaOH:H₂SO₄) — using 1:1 would double the acid concentration incorrectly.",
            difficulty: "challenge",
            hints: [
              "Find moles of NaOH first.",
              "The ratio NaOH : H₂SO₄ is 2 : 1, so divide by 2.",
              "Concentration = moles / volume of acid in dm³.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "moles NaOH → 2:1 ratio → c = n / V of acid",
            solutions: [
              {
                label: "Method: titration with 2:1 ratio",
                steps: [
                  "Moles NaOH = 0.0800 mol/dm³ × 0.0250 dm³ = 0.00200 mol",
                  "Ratio NaOH : H₂SO₄ = 2 : 1, so moles H₂SO₄ = 0.00200 ÷ 2 = 0.00100 mol",
                  "Volume acid = 20.0 cm³ = 0.0200 dm³",
                  "Concentration H₂SO₄ = 0.00100 mol / 0.0200 dm³ = 0.0500 mol/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-acids-bases-bq4-09",
            question: "(Challenge) A student wants to determine whether an unknown white solid is a carbonate. Describe a chemical test, including the reagent, the expected observation, and a confirmatory gas test. Write a general equation for the reaction of a carbonate with an acid. [4 marks]",
            marks: 4,
            modelAnswer:
              "Add dilute acid (e.g. dilute hydrochloric acid) to the white solid. If it is a carbonate, it will effervesce (fizz) as carbon dioxide gas is produced. To confirm the gas is CO₂, bubble it through limewater — the limewater turns milky/cloudy. General equation: carbonate + acid → salt + water + carbon dioxide, e.g. MCO₃ + 2HCl → MCl₂ + H₂O + CO₂ (for a metal M forming M²⁺).",
            markScheme: [
              "Add dilute acid to the solid [1]",
              "Effervescence / fizzing observed if a carbonate [1]",
              "Bubble gas through limewater → turns milky (confirms CO₂) [1]",
              "Correct general equation: carbonate + acid → salt + water + CO₂ [1]",
            ],
            commonError: "Stating only that it 'fizzes' without the confirmatory limewater test, or naming the wrong gas.",
            difficulty: "challenge",
            hints: [
              "Carbonates react with acids to give a gas.",
              "Which gas, and how is it confirmed?",
              "Give a general equation that works for any carbonate.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "Add acid → observe gas → confirm with limewater → general equation",
          },
          {
            id: "chem-acids-bases-bq4-10",
            question: "(Challenge) Two solutions, X and Y, are both 0.100 mol/dm³. X is hydrochloric acid and Y is sulfuric acid.\n\n(a) Calculate the maximum [H⁺] each solution can provide. [2 marks]\n(b) Which solution has the lower pH, and why? [2 marks]\n(c) Equal volumes (25.0 cm³) of X and Y are each titrated against 0.100 mol/dm³ NaOH. Calculate the volume of NaOH needed to neutralise each. [3 marks]",
            marks: 7,
            modelAnswer:
              "(a) HCl is monoprotic and fully dissociates: [H⁺] = 0.100 mol/dm³. H₂SO₄ is diprotic and (treated as) fully dissociating to give two H⁺ per molecule: [H⁺] = 2 × 0.100 = 0.200 mol/dm³.\n\n(b) The sulfuric acid (Y) has the lower pH, because at the same concentration it provides twice the H⁺ concentration (0.200 vs 0.100 mol/dm³).\n\n(c) For X (HCl): moles HCl = 0.100 × (25.0/1000) = 0.00250 mol; HCl : NaOH = 1 : 1, so moles NaOH = 0.00250 mol; volume NaOH = 0.00250 / 0.100 = 0.0250 dm³ = 25.0 cm³.\nFor Y (H₂SO₄): moles H₂SO₄ = 0.00250 mol; H₂SO₄ : NaOH = 1 : 2, so moles NaOH = 0.00500 mol; volume NaOH = 0.00500 / 0.100 = 0.0500 dm³ = 50.0 cm³.",
            markScheme: [
              "(a) HCl: [H⁺] = 0.100 mol/dm³ [1]",
              "(a) H₂SO₄: [H⁺] = 0.200 mol/dm³ (diprotic, 2 H⁺) [1]",
              "(b) Sulfuric acid (Y) lower pH [1]; because it gives twice the [H⁺] at same concentration [1]",
              "(c) HCl needs 25.0 cm³ NaOH (1:1) [1]",
              "(c) H₂SO₄ needs 50.0 cm³ NaOH (1:2) [1]",
              "(c) Both with correct working/units [1]",
            ],
            commonError: "Treating sulfuric acid as if it gives only one H⁺ — it is diprotic, providing two H⁺ per molecule, which doubles both [H⁺] and the NaOH volume needed.",
            difficulty: "challenge",
            hints: [
              "How many H⁺ does each acid molecule release?",
              "More H⁺ at the same concentration means a lower pH.",
              "Use the correct mole ratio (1:1 for HCl, 1:2 for H₂SO₄) for the titration.",
            ],
            guideRef: "Reactions of Acids",
            strategy: "Count protons per acid → compare [H⁺]/pH → use ratio for titre",
            solutions: [
              {
                label: "Method: protonicity and titration",
                steps: [
                  "HCl is monoprotic: [H⁺] = 0.100 mol/dm³",
                  "H₂SO₄ is diprotic: [H⁺] = 2 × 0.100 = 0.200 mol/dm³ → lower pH",
                  "Moles of each acid in 25.0 cm³ = 0.100 × 0.0250 = 0.00250 mol",
                  "HCl : NaOH = 1 : 1 → moles NaOH = 0.00250 mol → V = 0.00250/0.100 = 25.0 cm³",
                  "H₂SO₄ : NaOH = 1 : 2 → moles NaOH = 0.00500 mol → V = 0.00500/0.100 = 50.0 cm³",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
