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
        description: "Ten multiple-choice questions covering acid/base definitions, pH, indicators, and neutralisation reactions.",
        questions: [
          {
            id: "chem-acids-bases-bm1-01",
            question: "Which of the following is the correct ionic equation for the neutralisation of sodium hydroxide with hydrochloric acid?",
            options: [
              "Na⁺(aq) + Cl⁻(aq) → NaCl(aq)",
              "NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)",
              "H⁺(aq) + OH⁻(aq) → H₂O(l)",
              "Na⁺(aq) + OH⁻(aq) + H⁺(aq) + Cl⁻(aq) → Na⁺(aq) + Cl⁻(aq) + H₂O(l)",
            ],
            answerIndex: 2,
            explanation: "The net ionic equation for any neutralisation is H⁺(aq) + OH⁻(aq) → H₂O(l). Option B is the full molecular equation (not ionic). Options A and D are incorrect — A omits the OH⁻ and H⁺ reacting, D shows the full ionic but is not simplified to the net ionic.",
            difficulty: "core",
            hints: [
              "Spectator ions (Na⁺, Cl⁻) cancel out in the net ionic equation.",
              "What ions actually react to form water?",
            ],
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bank-mcq1-q02",
            question: "Sulfur dioxide (SO₂) reacts with sodium hydroxide solution. What type of oxide is SO₂?",
            options: ["Basic oxide", "Amphoteric oxide", "Neutral oxide", "Acidic oxide"],
            answerIndex: 3,
            explanation: "SO₂ is a non-metal oxide that reacts with alkalis (NaOH) to form a salt and water: SO₂ + 2NaOH → Na₂SO₃ + H₂O. Non-metal oxides that react with alkalis are acidic oxides.",
            difficulty: "warmup",
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bank-mcq1-q03",
            question: "A student tests a gas with damp red litmus paper and observes it turns blue. The gas also has a pungent smell. Which gas is it?",
            options: ["Chlorine", "Hydrogen", "Carbon dioxide", "Ammonia"],
            answerIndex: 3,
            explanation: "Ammonia (NH₃) is an alkaline gas that turns damp red litmus blue and has a characteristic sharp, pungent smell. Chlorine turns blue litmus red then bleaches it. Hydrogen gives a squeaky pop with a lit splint. CO₂ turns limewater milky.",
            difficulty: "warmup",
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bank-mcq1-q04",
            question: "Equal volumes and concentrations of ethanoic acid and hydrochloric acid are compared. Which row correctly describes them?",
            options: [
              "HCl: lower pH; CH₃COOH: higher pH. HCl: fully dissociated; CH₃COOH: partially dissociated.",
              "HCl: higher pH; CH₃COOH: lower pH. Both fully dissociated.",
              "HCl: lower pH; CH₃COOH: higher pH. Both partially dissociated.",
              "Both have the same pH because they have the same concentration.",
            ],
            answerIndex: 0,
            explanation: "HCl is a strong acid (fully dissociated), producing the maximum possible [H⁺] for that concentration → lower pH. CH₃COOH is weak (partially dissociated), fewer H⁺ → higher pH. They have the same concentration but different strengths, so different pH values.",
            difficulty: "core",
            hints: [
              "Strength and concentration are independent variables.",
              "Which acid produces more H⁺ ions in solution at the same concentration?",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
          },
          {
            id: "chem-acids-bases-bank-mcq1-q05",
            question: "Which of the following is NOT a product of the reaction between calcium carbonate and dilute hydrochloric acid?",
            options: ["CaCl₂", "H₂O", "CO₂", "H₂"],
            answerIndex: 3,
            explanation: "Acid + carbonate → salt + water + CO₂. The reaction is CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. Hydrogen (H₂) is produced by acid + metal reactions, not acid + carbonate.",
            difficulty: "warmup",
            guideRef: "Reactions of Acids",
          },
          {
            id: "chem-acids-bases-bank-mcq1-q06",
            question: "A student adds 25.0 cm³ of 0.100 mol/dm³ NaOH to a conical flask. She wants to prepare pure sodium chloride. After the first titration with HCl (endpoint found at exactly 25.0 cm³ of HCl), what should she do next?",
            options: [
              "Boil the mixture from the first titration to evaporate the indicator.",
              "Add more NaOH and repeat the titration to get a more accurate result.",
              "Repeat the titration using the same volumes but WITHOUT any indicator, then evaporate to crystallise.",
              "Filter the solution to remove the indicator, then evaporate.",
            ],
            answerIndex: 2,
            explanation: "The purpose of the first (rough) titration is to find the exact volume needed. The second run uses the exact same volumes (25.0 cm³ NaOH + 25.0 cm³ HCl) but no indicator, so the resulting NaCl solution is free from indicator contamination. This solution is then evaporated to crystallise pure NaCl.",
            difficulty: "core",
            hints: [
              "What would contaminate the final salt if indicator is left in?",
              "The first titration tells you the exact volumes — what do you do with that information?",
              "You need a clean salt solution to evaporate.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
        ],
      },
      {
        id: "chem-acids-bases-bank-mcq-2",
        title: "MCQ Paper 2 — Acids, Bases & Salts",
        description: "Six multiple-choice questions with challenge-level application questions on salt preparation choices and oxide reactions.",
        questions: [
          {
            id: "chem-acids-bases-bank-mcq2-q01",
            question: "Zinc oxide (ZnO) is added to dilute hydrochloric acid. Which products are formed?",
            options: [
              "Zn(OH)₂ and water",
              "ZnCl₂ and water",
              "ZnCl₂ and hydrogen",
              "Na₂ZnO₂ and water",
            ],
            answerIndex: 1,
            explanation: "Acid + basic/amphoteric oxide → salt + water. ZnO(s) + 2HCl(aq) → ZnCl₂(aq) + H₂O(l). Hydrogen is only produced by acid + reactive metal. Na₂ZnO₂ is the product when ZnO reacts with NaOH (alkali), not acid.",
            difficulty: "core",
            hints: [
              "What type of oxide is ZnO?",
              "Acid + metal oxide gives which products?",
            ],
            guideRef: "Classification of Oxides",
          },
          {
            id: "chem-acids-bases-bank-mcq2-q02",
            question: "Which salt preparation method is correct for making barium sulfate (BaSO₄)?",
            options: [
              "Add excess barium to dilute sulfuric acid; filter and evaporate.",
              "Titrate barium hydroxide against sulfuric acid with an indicator.",
              "Mix barium chloride solution with dilute sulfuric acid; filter the precipitate.",
              "Dissolve barium oxide in sulfuric acid; evaporate to crystallise.",
            ],
            answerIndex: 2,
            explanation: "BaSO₄ is insoluble (an exception to the 'sulfates are soluble' rule), so it must be made by precipitation. BaCl₂(aq) + H₂SO₄(aq) → BaSO₄(s) + 2HCl(aq). The precipitate is filtered, washed, and dried. Titration and evaporation methods are for soluble salts.",
            difficulty: "core",
            hints: [
              "Is BaSO₄ soluble or insoluble? Check the solubility rules.",
              "Insoluble salts are always made by which method?",
              "Which two solutions provide Ba²⁺ and SO₄²⁻ ions?",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bank-mcq2-q03",
            question: "What colour does methyl orange indicator show at pH 2?",
            options: ["Yellow", "Orange", "Red", "Blue"],
            answerIndex: 2,
            explanation: "Methyl orange is red below pH 3.1 (strongly acidic), orange at the endpoint (~pH 4), and yellow above pH 4.4. pH 2 is strongly acidic, so the indicator is red.",
            difficulty: "warmup",
            guideRef: "The pH Scale and Indicators",
          },
          {
            id: "chem-acids-bases-bank-mcq2-q04",
            question: "A 0.01 mol/dm³ solution of HCl is compared with a 1 mol/dm³ solution of ethanoic acid (CH₃COOH). Which statement is correct?",
            options: [
              "The ethanoic acid solution has a higher [H⁺] because it has more acid molecules per dm³.",
              "The HCl solution has the lower pH because it is fully dissociated despite being less concentrated.",
              "Both solutions have the same pH because the ethanoic acid compensates with its higher concentration.",
              "The ethanoic acid has a lower pH because it is a stronger acid.",
            ],
            answerIndex: 1,
            explanation: "This is a challenge: even though ethanoic acid is 100× more concentrated, it is a weak acid — only ~1% dissociates. [H⁺] from 1 mol/dm³ CH₃COOH ≈ 0.004 mol/dm³ (pH ≈ 2.4). [H⁺] from 0.01 mol/dm³ HCl ≈ 0.01 mol/dm³ (pH = 2.0). HCl still has the slightly lower pH due to complete dissociation. Option A confuses 'more molecules' with 'more H⁺ ions produced'.",
            difficulty: "challenge",
            hints: [
              "Calculate [H⁺] for 0.01 mol/dm³ HCl (fully dissociated).",
              "Estimate [H⁺] for 1 mol/dm³ CH₃COOH — only ~1% of molecules dissociate.",
              "Compare your two [H⁺] values to determine which has the lower pH.",
              "Remember: lower pH means higher [H⁺] concentration.",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
            strategy: "Calculate [H⁺] for each case, then compare",
          },
          {
            id: "chem-acids-bases-bank-mcq2-q05",
            question: "Which pair of solutions would produce an insoluble precipitate when mixed?",
            options: [
              "NaCl(aq) and KNO₃(aq)",
              "Na₂SO₄(aq) and KCl(aq)",
              "Pb(NO₃)₂(aq) and KI(aq)",
              "NaOH(aq) and HCl(aq)",
            ],
            answerIndex: 2,
            explanation: "Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq). PbI₂ is an insoluble yellow solid. Option A: NaCl and KNO₃ — all four ions remain in solution (all sodium, potassium, chloride, and nitrate are soluble). Option B: Na₂SO₄ + KCl — no insoluble combination. Option D: produces NaCl + H₂O (neutralisation, no precipitate).",
            difficulty: "core",
            hints: [
              "Apply the solubility rules to predict whether any combination of ions gives an insoluble product.",
              "Lead(II) iodide (PbI₂) — check: are lead iodides an exception to the 'iodides are soluble' rule?",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bank-mcq2-q06",
            question: "Aluminium oxide (Al₂O₃) is described as amphoteric. Which equation correctly shows it reacting with sodium hydroxide solution?",
            options: [
              "Al₂O₃(s) + 6NaOH(aq) → 2Al(OH)₃ + 3Na₂O",
              "Al₂O₃(s) + 2NaOH(aq) → 2NaAlO₂(aq) + H₂O(l)",
              "Al₂O₃(s) + 2NaOH(aq) → Na₂Al₂O₃(aq) + H₂",
              "Al₂O₃(s) + NaOH(aq) → AlNaO₂(s) + H₂O",
            ],
            answerIndex: 1,
            explanation: "Al₂O₃(s) + 2NaOH(aq) → 2NaAlO₂(aq) + H₂O(l). NaAlO₂ is sodium aluminate, the salt formed. This equation is balanced: 2 Al, 3+2=5 O on left... checking: Al₂O₃ has 3 O, 2NaOH has 2 O — total 5 O; right side has 2×2=4 O in NaAlO₂ plus 1 in H₂O = 5 O. Correct. Option C wrongly produces H₂ (not a product of oxide + alkali). Option A produces Al(OH)₃ rather than the aluminate salt.",
            difficulty: "challenge",
            hints: [
              "Amphoteric oxide + alkali → salt (aluminate) + water.",
              "Sodium aluminate is NaAlO₂. Balance Al, O, Na and H.",
              "No H₂ gas is produced — this is oxide reacting with alkali, not metal with alkali.",
            ],
            guideRef: "Classification of Oxides",
            strategy: "Balance by atom count: Al → O → Na → H",
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "chem-acids-bases-bank-qa-1",
        title: "Structured Questions Paper 1 — Acids, Bases & Salts",
        description: "Four structured questions on acid reactions, neutralisation, and salt preparation.",
        questions: [
          {
            id: "chem-acids-bases-bank-qa1-q01",
            question: "A student reacts dilute nitric acid (HNO₃) with copper(II) carbonate (CuCO₃).\n\n(a) Write a balanced symbol equation, with state symbols, for this reaction. [3 marks]\n(b) Describe the observations the student would make during the reaction. [2 marks]\n(c) State how the student could test the gas produced to confirm its identity. [2 marks]",
            marks: 7,
            modelAnswer:
              "(a) CuCO₃(s) + 2HNO₃(aq) → Cu(NO₃)₂(aq) + H₂O(l) + CO₂(g)\n\n(b) The student would observe: effervescence / fizzing as CO₂ gas is produced. The green solid (CuCO₃) would dissolve to produce a blue solution of Cu(NO₃)₂.\n\n(c) Bubble the gas through limewater (aqueous calcium hydroxide, Ca(OH)₂). Observation: the limewater turns milky/cloudy, confirming the gas is carbon dioxide.",
            markScheme: [
              "(a) CuCO₃(s) + 2HNO₃(aq) → Cu(NO₃)₂(aq) + H₂O(l) + CO₂(g) — correct formulae [1]",
              "(a) Balanced (2HNO₃) [1]",
              "(a) Correct state symbols throughout [1]",
              "(b) Effervescence / bubbling / fizzing [1]",
              "(b) Green solid dissolves / blue solution forms [1]",
              "(c) Bubble gas through limewater [1]",
              "(c) Limewater turns milky / cloudy [1]",
            ],
            commonError: "Writing Cu(NO₃) instead of Cu(NO₃)₂ — copper(II) forms Cu²⁺ so two NO₃⁻ ions are required. Also omitting the colour change observation (green solid → blue solution).",
            difficulty: "core",
            hints: [
              "Acid + carbonate → salt + water + CO₂. What acid anion does HNO₃ give?",
              "What charge is Cu²⁺? How many NO₃⁻ are needed to balance?",
              "CO₂ test: limewater. What is the exact observation?",
              "What colour is CuCO₃? What colour is Cu(NO₃)₂ solution?",
            ],
            guideRef: "Reactions of Acids",
            strategy: "Product identification → formula → balance → observations",
          },
          {
            id: "chem-acids-bases-bank-qa1-q02",
            question: "Explain the difference between a strong acid and a weak acid. In your answer, use ethanoic acid and hydrochloric acid as examples. Write an equation to illustrate each type of acid. [5 marks]",
            marks: 5,
            modelAnswer:
              "A strong acid is one that is fully (completely) dissociated into ions in aqueous solution, producing the maximum possible concentration of H⁺ ions for a given concentration. Hydrochloric acid is a strong acid:\n\nHCl(aq) → H⁺(aq) + Cl⁻(aq)  (one-way arrow, fully dissociated)\n\nA weak acid is only partially dissociated in aqueous solution. Most molecules remain undissociated, and an equilibrium is established between the molecules and the ions. Ethanoic acid is a weak acid:\n\nCH₃COOH(aq) ⇌ CH₃COO⁻(aq) + H⁺(aq)  (reversible arrow, equilibrium)\n\nAt the same concentration, HCl has a significantly lower pH (more H⁺ ions) than CH₃COOH.",
            markScheme: [
              "Strong acid: fully/completely dissociated into ions in solution [1]",
              "HCl → H⁺(aq) + Cl⁻(aq) with one-way arrow [1]",
              "Weak acid: partially/incompletely dissociated; equilibrium exists [1]",
              "CH₃COOH ⇌ CH₃COO⁻ + H⁺ with reversible arrow [1]",
              "At same concentration, strong acid has lower pH / more H⁺ ions than weak acid [1]",
            ],
            commonError: "Using a reversible arrow for HCl — HCl is fully dissociated, so a one-way arrow is correct. Conversely, writing a one-way arrow for ethanoic acid misrepresents the equilibrium.",
            difficulty: "core",
            hints: [
              "Key word: 'fully dissociated' for strong; 'partially dissociated' for weak.",
              "What arrow type shows a reaction that goes to completion? What shows an equilibrium?",
              "Link the degree of dissociation to the number of H⁺ ions and hence pH.",
            ],
            guideRef: "Strong vs Weak Acids — and Concentration vs Strength",
            strategy: "Define → exemplify → write equation with correct arrow → compare pH",
          },
          {
            id: "chem-acids-bases-bank-qa1-q03",
            question: "A student wants to prepare pure dry crystals of iron(II) sulfate (FeSO₄) from iron and dilute sulfuric acid.\n\n(a) Write the balanced equation for the reaction. [2 marks]\n(b) Describe, step by step, how the student should prepare the salt, explaining why excess iron is used. [4 marks]\n(c) Suggest why iron(III) sulfate (Fe₂(SO₄)₃) is not formed in this reaction. [1 mark]",
            marks: 7,
            modelAnswer:
              "(a) Fe(s) + H₂SO₄(aq) → FeSO₄(aq) + H₂(g)\n\n(b) Step 1: Add excess iron filings to the dilute sulfuric acid and warm gently; stir until no more iron dissolves (black residue of iron remains). The excess iron ensures all the sulfuric acid is used up, so no acid is present to contaminate the final salt.\n\nStep 2: Filter the mixture while still warm to remove the excess iron. The filtrate is the FeSO₄ solution.\n\nStep 3: Evaporate the filtrate gently on an evaporating dish (using a water bath, not direct flame) until crystals begin to appear, then allow to cool. Filter off the green FeSO₄·7H₂O crystals.\n\nStep 4: Pat dry with filter paper and leave to dry in a desiccator or very low oven (do not overheat — this would dehydrate/oxidise the crystals).\n\n(c) Iron reacts with dilute H₂SO₄ to form iron(II) ions (Fe²⁺), not iron(III) ions (Fe³⁺), because the acid is not a strong enough oxidising agent to oxidise iron to Fe³⁺ under these conditions.",
            markScheme: [
              "(a) Fe(s) + H₂SO₄(aq) → FeSO₄(aq) + H₂(g) [2] (1 mark if unbalanced/missing symbols)",
              "(b) Add excess iron to acid; heat/warm [1]",
              "(b) Excess iron ensures all acid is consumed / no acid contamination [1]",
              "(b) Filter to remove excess iron [1]",
              "(b) Evaporate filtrate to crystallise; dry gently [1]",
              "(c) Dilute H₂SO₄ is not a strong enough oxidising agent to form Fe³⁺ / iron reacts as Fe²⁺ with dilute acid [1]",
            ],
            commonError: "Writing Fe₂(SO₄)₃ for the product — iron reacts with dilute acids to give Fe²⁺, not Fe³⁺. Iron(III) is only formed with concentrated/oxidising acids or by further oxidation. Also forgetting to filter before evaporating.",
            difficulty: "core",
            hints: [
              "Acid + metal → salt + hydrogen. What charge does iron form with dilute acid?",
              "Excess metal serves the same purpose as excess base — it consumes all the acid.",
              "The sequence is: react → filter → evaporate → crystallise → dry.",
              "Iron(II) vs iron(III): dilute acid + iron → Fe²⁺ (not strong enough to oxidise to Fe³⁺).",
            ],
            guideRef: "Preparing Salts and Gas Tests",
            strategy: "Sequence: react with excess → filter excess → evaporate → crystallise",
          },
          {
            id: "chem-acids-bases-bank-qa1-q04",
            question: "(Challenge) A student has solutions of H₂SO₄ and NaOH and wants to determine the exact volume of acid needed to neutralise 25.0 cm³ of NaOH. She uses phenolphthalein indicator.\n\n(a) Write the balanced molecular and net ionic equations for the reaction. [3 marks]\n(b) Phenolphthalein is pink in alkali and colourless in acid. Describe what colour change the student should look for at the endpoint. [1 mark]\n(c) At the endpoint, 18.4 cm³ of 0.200 mol/dm³ H₂SO₄ was used. Calculate the concentration of the NaOH solution. Show all working. [4 marks]\n(d) Explain why, to obtain pure NaCl... wait — the salt here is Na₂SO₄. Explain why the student must repeat the titration without indicator to obtain a pure sample of Na₂SO₄. [2 marks]",
            marks: 10,
            modelAnswer:
              "(a) Molecular: H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l)\nNet ionic: H⁺(aq) + OH⁻(aq) → H₂O(l)\n\n(b) The colour change at the endpoint is from pink (alkaline, indicator coloured) to colourless (acidic, indicator colourless). The student should add acid dropwise until one drop causes the pink colour to disappear permanently.\n\n(c) Moles of H₂SO₄ = concentration × volume = 0.200 × (18.4/1000) = 0.00368 mol\nMole ratio H₂SO₄ : NaOH = 1 : 2\nMoles of NaOH = 2 × 0.00368 = 0.00736 mol\nConcentration of NaOH = moles / volume = 0.00736 / (25.0/1000) = 0.294 mol/dm³ (3 s.f.)\n\n(d) Phenolphthalein is coloured and would contaminate the Na₂SO₄ product. By repeating the titration with the exact volumes found (18.4 cm³ acid + 25.0 cm³ NaOH) but without indicator, the resulting solution contains only Na₂SO₄ and water, which can be evaporated to give pure salt.",
            markScheme: [
              "(a) H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l) balanced [1]",
              "(a) State symbols correct [1]",
              "(a) Net ionic: H⁺(aq) + OH⁻(aq) → H₂O(l) [1]",
              "(b) Pink to colourless (add acid until one drop makes pink disappear) [1]",
              "(c) Moles H₂SO₄ = 0.200 × 0.0184 = 0.00368 mol [1]",
              "(c) Mole ratio 1:2 → moles NaOH = 0.00736 mol [1]",
              "(c) Concentration = 0.00736 / 0.0250 = 0.294 mol/dm³ [1]",
              "(c) Correct units and significant figures [1]",
              "(d) Indicator would contaminate/colour the salt product [1]",
              "(d) Without indicator, only pure Na₂SO₄ solution remains / can evaporate to get pure salt [1]",
            ],
            commonError: "Forgetting the 1:2 mole ratio (H₂SO₄ : NaOH = 1:2) and using a 1:1 ratio — this gives a concentration of 0.147 mol/dm³, which is wrong. Always check the balanced equation for the mole ratio before calculating.",
            difficulty: "challenge",
            hints: [
              "Moles = concentration (mol/dm³) × volume (dm³). Convert cm³ to dm³ by dividing by 1000.",
              "From the balanced equation, what is the mole ratio of H₂SO₄ to NaOH?",
              "Use moles NaOH = (ratio) × moles H₂SO₄, then concentration = moles / volume(dm³).",
              "Why would leaving indicator in the flask ruin your salt sample?",
            ],
            guideRef: "Preparing Salts and Gas Tests",
            strategy: "moles = c × V; use mole ratio from balanced equation; c = moles / V",
            solutions: [
              {
                label: "Method 1: Standard titration calculation",
                steps: [
                  "Convert volumes: 18.4 cm³ = 0.0184 dm³; 25.0 cm³ = 0.0250 dm³",
                  "Moles H₂SO₄ = 0.200 mol/dm³ × 0.0184 dm³ = 0.00368 mol",
                  "Mole ratio H₂SO₄ : NaOH = 1 : 2 (from H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O)",
                  "Moles NaOH = 2 × 0.00368 = 0.00736 mol",
                  "Concentration NaOH = 0.00736 mol / 0.0250 dm³ = 0.294 mol/dm³",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-acids-bases-bank-qa-2",
        title: "Structured Questions Paper 2 — Acids, Bases & Salts",
        description: "Four structured questions including challenge questions on oxide classification, precipitation, and salt method selection.",
        questions: [
          {
            id: "chem-acids-bases-bank-qa2-q01",
            question: "Classify each of the following oxides as acidic, basic, amphoteric, or neutral. For each, write a chemical equation showing how it reacts with either an acid or an alkali (or both, if amphoteric): (i) MgO, (ii) CO₂, (iii) ZnO, (iv) CO. [8 marks]",
            marks: 8,
            modelAnswer:
              "(i) MgO — Basic oxide. Reacts with acids:\nMgO(s) + 2HCl(aq) → MgCl₂(aq) + H₂O(l)\n\n(ii) CO₂ — Acidic oxide. Reacts with alkalis:\nCO₂(g) + 2NaOH(aq) → Na₂CO₃(aq) + H₂O(l)\n\n(iii) ZnO — Amphoteric oxide. Reacts with both acids and alkalis:\nWith acid: ZnO(s) + 2HCl(aq) → ZnCl₂(aq) + H₂O(l)\nWith alkali: ZnO(s) + 2NaOH(aq) → Na₂ZnO₂(aq) + H₂O(l) (sodium zincate)\n\n(iv) CO — Neutral oxide. Does not react with acids or alkalis.",
            markScheme: [
              "(i) Basic [1]; MgO + 2HCl → MgCl₂ + H₂O [1]",
              "(ii) Acidic [1]; CO₂ + 2NaOH → Na₂CO₃ + H₂O [1]",
              "(iii) Amphoteric [1]; ZnO + 2HCl → ZnCl₂ + H₂O AND ZnO + 2NaOH → Na₂ZnO₂ + H₂O [1]",
              "(iv) Neutral; no reaction with acid or alkali [1]; accept 'does not react' as equation [1]",
            ],
            commonError: "Classifying ZnO as simply basic (not amphoteric) — students often know about the acid reaction but forget ZnO also reacts with concentrated alkali to form sodium zincate. Also confusing CO₂ (acidic) with CO (neutral).",
            difficulty: "core",
            hints: [
              "Metal oxides are usually basic; non-metal oxides are usually acidic.",
              "Amphoteric oxides are found near the metal/non-metal boundary — Zn and Al are the key IGCSE examples.",
              "CO and NO are the neutral oxides — they have no reaction with acid or alkali.",
              "Write acid reaction for basic/amphoteric; alkali reaction for acidic/amphoteric.",
            ],
            guideRef: "Classification of Oxides",
            strategy: "Metal/non-metal/boundary → classify → write both equations for amphoteric",
          },
          {
            id: "chem-acids-bases-bank-qa2-q02",
            question: "A student is given the following salts to prepare:\n(A) Sodium chloride (NaCl)\n(B) Copper(II) sulfate (CuSO₄)\n(C) Silver chloride (AgCl)\n\nFor each salt, (i) state the most appropriate method to prepare it, and (ii) name the starting materials you would use. Give a brief reason for your choice. [9 marks]",
            marks: 9,
            modelAnswer:
              "(A) Sodium chloride (NaCl):\nMethod: Titration, because NaCl is soluble and it is made from a soluble acid (HCl) and a soluble alkali (NaOH). Neither can be filtered as an 'excess solid'.\nStarting materials: Sodium hydroxide solution (NaOH(aq)) and dilute hydrochloric acid (HCl(aq)).\n\n(B) Copper(II) sulfate (CuSO₄):\nMethod: Excess insoluble base added to acid, because CuSO₄ is soluble and the base (CuO) is insoluble — excess can be filtered off easily.\nStarting materials: Copper(II) oxide (CuO) and dilute sulfuric acid (H₂SO₄(aq)). Alternatively, copper(II) carbonate (CuCO₃) with H₂SO₄.\n\n(C) Silver chloride (AgCl):\nMethod: Precipitation (mixing two solutions), because AgCl is insoluble.\nStarting materials: Silver nitrate solution (AgNO₃(aq)) and sodium chloride solution (NaCl(aq)). This gives AgCl(s) + NaNO₃(aq).",
            markScheme: [
              "(A) Titration method [1]; NaOH(aq) + HCl(aq) as starting materials [1]; reason: both soluble — can't filter excess [1]",
              "(B) Excess insoluble base/carbonate + acid [1]; CuO (or CuCO₃) + H₂SO₄ [1]; reason: CuSO₄ soluble, CuO insoluble — excess filtered [1]",
              "(C) Precipitation [1]; AgNO₃(aq) + NaCl(aq) [1]; reason: AgCl is insoluble [1]",
            ],
            commonError: "Using the titration method for CuSO₄ — titration requires a soluble alkali, but Cu(OH)₂ is not soluble in the way needed. Using excess insoluble CuO is the correct and simpler approach. Also choosing AgNO₃ + HCl to make AgCl — while this works chemically, it's dangerous (HCl + AgNO₃ → AgCl + HNO₃ with risk of no-excess control) and it's better practice to use NaCl(aq).",
            difficulty: "challenge",
            hints: [
              "First check: is the desired salt soluble or insoluble? Insoluble → precipitation.",
              "For soluble salts, check whether the base/alkali is soluble or insoluble.",
              "Insoluble base → excess method (filter the excess); soluble base → titration method.",
              "For precipitation: you need one solution with the cation and another with the anion of the target salt.",
            ],
            guideRef: "Preparing Salts and Gas Tests",
            strategy: "Decision tree: salt soluble? → base soluble? → pick method",
          },
          {
            id: "chem-acids-bases-bank-qa2-q03",
            question: "Describe how you would carry out a test to determine whether an unknown gas is chlorine (Cl₂) or ammonia (NH₃). State the reagent used, the procedure, and the expected observations for each gas. [4 marks]",
            marks: 4,
            modelAnswer:
              "To test for Cl₂: Hold a piece of damp blue litmus paper at the mouth of the container. Chlorine is a yellow-green gas with a pungent, choking smell. Observation: the damp blue litmus paper first turns red (acidic gas), then is bleached to white/colourless. The bleaching is a distinctive positive test for chlorine.\n\nTo test for NH₃: Hold a piece of damp red litmus paper at the mouth of the container. Observation: the damp red litmus paper turns blue. Ammonia also has a sharp, distinctive pungent smell. Alternatively, hold a glass rod dipped in concentrated HCl near the gas — white fumes of ammonium chloride form (NH₃ + HCl → NH₄Cl).",
            markScheme: [
              "Cl₂: damp blue litmus turns red then bleached/white [1]",
              "Cl₂: yellow-green colour / pungent choking smell (supporting observation) [1]",
              "NH₃: damp red litmus turns blue [1]",
              "NH₃: pungent smell / white fumes with HCl (supporting observation) [1]",
            ],
            commonError: "Stating that chlorine 'turns litmus red' without mentioning the subsequent bleaching — the bleaching is the key distinguishing test. Also confusing which litmus is used (blue litmus for Cl₂, red litmus for NH₃).",
            difficulty: "core",
            hints: [
              "Chlorine is an oxidising, acidic gas — what does it do to litmus?",
              "Which colour litmus shows a change to blue? Which shows a change when bleached?",
              "NH₃ is an alkaline gas — which litmus paper does it change and in which direction?",
            ],
            guideRef: "Preparing Salts and Gas Tests",
          },
          {
            id: "chem-acids-bases-bank-qa2-q04",
            question: "(Challenge) When zinc is added to an excess of concentrated sodium hydroxide solution, hydrogen gas is produced along with a soluble zinc compound.\n\n(a) Explain why zinc reacts with sodium hydroxide, whereas magnesium does not. [2 marks]\n(b) Write a balanced equation for the reaction of zinc with sodium hydroxide solution. The other product is sodium zincate (Na₂ZnO₂). [2 marks]\n(c) A student suggests that this shows zinc is behaving like a non-metal. Evaluate this suggestion. [3 marks]",
            marks: 7,
            modelAnswer:
              "(a) Zinc reacts with NaOH because zinc is an amphoteric metal — its oxide (ZnO) and the metal itself can react with alkalis as well as with acids. Magnesium is a more typical metal with a basic oxide (MgO) that reacts only with acids, not alkalis. Zinc's amphoteric character arises from its intermediate position between typical metals and non-metals.\n\n(b) Zn(s) + 2NaOH(aq) → Na₂ZnO₂(aq) + H₂(g)\n\n(c) The suggestion has some merit: zinc's ability to react with alkali (NaOH) is a behaviour associated with non-metals/acidic elements, since non-metal oxides typically react with bases. However, zinc also reacts with acids to produce H₂ (metal behaviour). Zinc is still classified as a metal, but its amphoteric character means it shares properties of both. The oxide ZnO reacts with both HCl (salt + water, base behaviour) and NaOH (salt + water, acid behaviour). Therefore, the student's suggestion is partially correct — zinc shows non-metal-like behaviour towards bases — but it is not a non-metal.",
            markScheme: [
              "(a) Zinc is amphoteric / ZnO reacts with alkali as well as acid [1]",
              "(a) Magnesium is a typical metal with basic oxide only; does not react with alkali [1]",
              "(b) Zn(s) + 2NaOH(aq) → Na₂ZnO₂(aq) + H₂(g) correctly balanced [2] (1 if correct formula but wrong balance)",
              "(c) Zinc's reaction with NaOH is similar to non-metal behaviour (non-metal oxides react with bases) [1]",
              "(c) However, zinc also reacts with acid like a metal (produces H₂) / zinc is still a metal [1]",
              "(c) Zinc is amphoteric — shares properties of both; student's suggestion is partially correct [1]",
            ],
            commonError: "Simply agreeing that zinc 'is a non-metal' without nuance. Zinc is definitively a metal (d-block element) but displays amphoteric character. The evaluative question requires both agreement with the partial truth AND a correction/limitation.",
            difficulty: "challenge",
            hints: [
              "What does 'amphoteric' mean in terms of acid/alkali reactions?",
              "Write the equation: Zn + NaOH → Na₂ZnO₂ + ?. What other product must form to balance H?",
              "To evaluate: list evidence FOR the suggestion, then evidence AGAINST, then conclude.",
              "A metal reacting with acid to give H₂ is classic metal behaviour — does zinc do this too?",
            ],
            guideRef: "Classification of Oxides",
            strategy: "Evaluate = evidence for + evidence against + balanced conclusion",
          },
        ],
      },
    ],
  },
};
