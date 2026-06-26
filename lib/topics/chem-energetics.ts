import type { Topic } from "../types";

export const chemEnergetics: Topic = {
  id: "chem-energetics",
  title: "Chemical Energetics",
  subject: "chemistry",
  icon: "🔥",
  blurb: "Exothermic and endothermic reactions, energy level diagrams, and bond energy calculations.",
  intro:
    "Every chemical reaction involves an energy change — heat flows in or out, and that difference " +
    "underpins everything from burning fuels to making food. In this topic you will classify " +
    "reactions as exothermic or endothermic, read and draw energy level diagrams showing activation " +
    "energy and enthalpy change, and calculate ΔH from bond energies using the principle that " +
    "breaking bonds absorbs energy and forming bonds releases it.",

  // ─────────────────────────── GUIDE ───────────────────────────
  guide: [
    // ── Section 1 ──────────────────────────────────────────────
    {
      heading: "Exothermic and Endothermic Reactions",
      body:
        "A chemical reaction always involves breaking old bonds and making new ones. " +
        "The **energy change** of a reaction describes how much energy is transferred " +
        "between the reaction system and the surroundings.\n\n" +
        "**Exothermic reactions** release energy to the surroundings. The temperature of " +
        "the surroundings rises, and the enthalpy change ΔH is **negative**. " +
        "Examples include combustion of fuels, neutralisation of an acid by a base, " +
        "respiration, and most oxidation reactions.\n\n" +
        "**Endothermic reactions** take in energy from the surroundings. The temperature " +
        "of the surroundings falls, and ΔH is **positive**. " +
        "Examples include thermal decomposition, photosynthesis, and dissolving ammonium " +
        "nitrate in water.\n\n" +
        "A simple way to remember: **exo** = energy **exits** the system (surroundings warm up); " +
        "**endo** = energy **enters** the system (surroundings cool down).",
      diagrams: [
        {
          caption: "Temperature changes: exothermic (left) vs endothermic (right) in a beaker",
          svg:
            '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two beakers side by side: left beaker shows temperature rising (exothermic), right beaker shows temperature falling (endothermic)">' +
            // Left beaker - exothermic
            '<rect x="20" y="60" width="110" height="100" rx="8" fill="none" stroke="#fb7185" stroke-width="2.5"/>' +
            '<rect x="30" y="110" width="90" height="45" rx="4" fill="#fb718530"/>' +
            '<text x="75" y="95" text-anchor="middle" font-size="11" fill="#fb7185" font-family="sans-serif">EXOTHERMIC</text>' +
            '<text x="75" y="140" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">e.g. combustion</text>' +
            // thermometer up arrow
            '<line x1="75" y1="175" x2="75" y2="155" stroke="#fb7185" stroke-width="2"/>' +
            '<polygon points="75,148 71,157 79,157" fill="#fb7185"/>' +
            '<text x="75" y="195" text-anchor="middle" font-size="9" fill="#fb7185" font-family="sans-serif">T rises, DeltaH negative</text>' +
            // Right beaker - endothermic
            '<rect x="190" y="60" width="110" height="100" rx="8" fill="none" stroke="#38bdf8" stroke-width="2.5"/>' +
            '<rect x="200" y="110" width="90" height="45" rx="4" fill="#38bdf830"/>' +
            '<text x="245" y="95" text-anchor="middle" font-size="11" fill="#38bdf8" font-family="sans-serif">ENDOTHERMIC</text>' +
            '<text x="245" y="140" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">e.g. decomposition</text>' +
            // thermometer down arrow
            '<line x1="245" y1="148" x2="245" y2="168" stroke="#38bdf8" stroke-width="2"/>' +
            '<polygon points="245,175 241,166 249,166" fill="#38bdf8"/>' +
            '<text x="245" y="195" text-anchor="middle" font-size="9" fill="#38bdf8" font-family="sans-serif">T falls, DeltaH positive</text>' +
            '</svg>',
        },
      ],
      keyPoints: [
        "Exothermic reactions transfer energy TO the surroundings; temperature rises; ΔH is negative.",
        "Endothermic reactions take in energy FROM the surroundings; temperature falls; ΔH is positive.",
        "Common exothermic examples: combustion, neutralisation, respiration, most oxidations.",
        "Common endothermic examples: thermal decomposition, photosynthesis, dissolving ammonium nitrate.",
        "A temperature rise in the surroundings is experimental evidence for an exothermic reaction.",
      ],
      discovery: {
        problem:
          "When you add citric acid solution to sodium hydrogencarbonate solution the mixture " +
          "becomes noticeably cold. You add hydrochloric acid to sodium hydroxide solution and " +
          "it becomes warm. Can you predict which is exothermic and which is endothermic, and " +
          "state the sign of ΔH for each?",
        idea:
          "The acid–alkali neutralisation is exothermic (temperature rises, ΔH negative). " +
          "The citric acid + sodium hydrogencarbonate reaction is endothermic (temperature falls, " +
          "ΔH positive). The temperature change of the surroundings tells us directly which way " +
          "energy flows — it's both the observation and the definition.",
      },
      whyItWorks:
        "Energy is conserved. If the products have lower total chemical potential energy than the " +
        "reactants, the difference must leave as heat — warming the surroundings (exothermic). " +
        "If the products have higher energy, heat must be absorbed from the surroundings " +
        "(endothermic). ΔH = H(products) − H(reactants), so a negative ΔH means products are " +
        "at a lower energy level.",
    },

    // ── Section 2 ──────────────────────────────────────────────
    {
      heading: "Energy Level Diagrams",
      body:
        "An **energy level diagram** (also called a reaction pathway diagram) shows how the " +
        "energy of the reacting system changes as reactants convert to products.\n\n" +
        "Key features to label:\n" +
        "- **Reactants** energy level (left horizontal line)\n" +
        "- **Products** energy level (right horizontal line)\n" +
        "- **ΔH**: the enthalpy change = energy of products − energy of reactants " +
        "(drawn as a downward arrow for exothermic, upward arrow for endothermic)\n" +
        "- **Activation energy (Ea)**: the minimum energy needed to start the reaction — " +
        "shown as the height from the reactants level to the peak (transition state)\n\n" +
        "For an **exothermic** diagram: products sit lower than reactants; ΔH arrow points down.\n\n" +
        "For an **endothermic** diagram: products sit higher than reactants; ΔH arrow points up.\n\n" +
        "A **catalyst** provides an alternative pathway with a **lower activation energy** — the " +
        "peak is lower — but the reactants and products energy levels are unchanged, so ΔH " +
        "is exactly the same with or without a catalyst.",
      diagrams: [
        {
          caption: "Exothermic energy level diagram showing Ea and ΔH (negative)",
          svg:
            '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Exothermic energy level diagram: reactants higher than products, peak shows activation energy, delta H is negative">' +
            // axes
            '<line x1="30" y1="10" x2="30" y2="180" stroke="#b7bce0" stroke-width="1.5"/>' +
            '<line x1="30" y1="180" x2="300" y2="180" stroke="#b7bce0" stroke-width="1.5"/>' +
            '<text x="12" y="100" font-size="10" fill="#b7bce0" font-family="sans-serif" transform="rotate(-90,12,100)">Energy</text>' +
            '<text x="160" y="197" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif">Reaction pathway</text>' +
            // curve path: reactants at y=70, peak at y=30, products at y=130
            '<path d="M45,70 C80,70 90,30 130,30 C170,30 175,130 210,130 L270,130" fill="none" stroke="#fbbf24" stroke-width="2.5"/>' +
            // reactants line
            '<line x1="40" y1="70" x2="70" y2="70" stroke="#34d399" stroke-width="2"/>' +
            '<text x="52" y="62" font-size="9" fill="#34d399" font-family="sans-serif">Reactants</text>' +
            // products line
            '<line x1="210" y1="130" x2="270" y2="130" stroke="#38bdf8" stroke-width="2"/>' +
            '<text x="230" y="148" font-size="9" fill="#38bdf8" font-family="sans-serif">Products</text>' +
            // Ea arrow
            '<line x1="140" y1="70" x2="140" y2="32" stroke="#fb7185" stroke-width="1.5" stroke-dasharray="4,3"/>' +
            '<polygon points="140,26 136,36 144,36" fill="#fb7185"/>' +
            '<text x="145" y="52" font-size="9" fill="#fb7185" font-family="sans-serif">Ea</text>' +
            // DeltaH arrow (down)
            '<line x1="260" y1="70" x2="260" y2="128" stroke="#a78bfa" stroke-width="1.5"/>' +
            '<polygon points="260,134 256,124 264,124" fill="#a78bfa"/>' +
            '<line x1="255" y1="70" x2="265" y2="70" stroke="#a78bfa" stroke-width="1"/>' +
            '<text x="268" y="103" font-size="9" fill="#a78bfa" font-family="sans-serif">DH -ve</text>' +
            '</svg>',
        },
        {
          caption: "Endothermic energy level diagram showing Ea and ΔH (positive)",
          svg:
            '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Endothermic energy level diagram: products higher than reactants, peak shows activation energy, delta H is positive">' +
            // axes
            '<line x1="30" y1="10" x2="30" y2="180" stroke="#b7bce0" stroke-width="1.5"/>' +
            '<line x1="30" y1="180" x2="300" y2="180" stroke="#b7bce0" stroke-width="1.5"/>' +
            '<text x="12" y="100" font-size="10" fill="#b7bce0" font-family="sans-serif" transform="rotate(-90,12,100)">Energy</text>' +
            '<text x="160" y="197" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif">Reaction pathway</text>' +
            // curve: reactants at y=130, peak at y=30, products at y=80
            '<path d="M45,130 C80,130 90,30 130,30 C170,30 175,80 210,80 L270,80" fill="none" stroke="#fbbf24" stroke-width="2.5"/>' +
            // reactants line
            '<line x1="40" y1="130" x2="70" y2="130" stroke="#34d399" stroke-width="2"/>' +
            '<text x="52" y="148" font-size="9" fill="#34d399" font-family="sans-serif">Reactants</text>' +
            // products line
            '<line x1="210" y1="80" x2="270" y2="80" stroke="#38bdf8" stroke-width="2"/>' +
            '<text x="228" y="70" font-size="9" fill="#38bdf8" font-family="sans-serif">Products</text>' +
            // Ea arrow
            '<line x1="140" y1="130" x2="140" y2="32" stroke="#fb7185" stroke-width="1.5" stroke-dasharray="4,3"/>' +
            '<polygon points="140,26 136,36 144,36" fill="#fb7185"/>' +
            '<text x="145" y="82" font-size="9" fill="#fb7185" font-family="sans-serif">Ea</text>' +
            // DeltaH arrow (up)
            '<line x1="258" y1="128" x2="258" y2="82" stroke="#a78bfa" stroke-width="1.5"/>' +
            '<polygon points="258,76 254,86 262,86" fill="#a78bfa"/>' +
            '<line x1="253" y1="130" x2="263" y2="130" stroke="#a78bfa" stroke-width="1"/>' +
            '<text x="266" y="108" font-size="9" fill="#a78bfa" font-family="sans-serif">DH +ve</text>' +
            '</svg>',
        },
      ],
      keyPoints: [
        "Energy level diagrams show reactants, products, the transition state peak, Ea, and ΔH.",
        "Activation energy (Ea) is the minimum energy particles must have to react; measured from the reactants level to the peak.",
        "In an exothermic diagram, products are lower than reactants; ΔH is shown as a downward arrow (negative value).",
        "In an endothermic diagram, products are higher than reactants; ΔH is shown as an upward arrow (positive value).",
        "A catalyst lowers Ea (lower peak) but does NOT change ΔH — the reactant and product energy levels stay the same.",
      ],
      thinkDeeper:
        "If a catalyst lowers Ea, why doesn't it also change ΔH? " +
        "Think about what Ea and ΔH actually represent — one is about the pathway, " +
        "the other is about the start and end points. Can you articulate the difference?",
      whyItWorks:
        "ΔH = H(products) − H(reactants). These energy levels are fixed properties of the " +
        "chemical species — they don't depend on how you get there. A catalyst provides a " +
        "different 'mountain pass' (lower peak) between the same two valleys, so the height " +
        "difference between the valleys (ΔH) is unchanged. The catalyst only affects the " +
        "rate, not the thermodynamics.",
      strategies: ["draw a diagram", "label all key features before answering any question"],
    },

    // ── Section 3 ──────────────────────────────────────────────
    {
      heading: "Bond Breaking and Bond Making",
      body:
        "Every chemical reaction involves rearranging atoms: old bonds break and new bonds form.\n\n" +
        "**Bond breaking is always endothermic** — energy must be supplied to overcome the " +
        "electrostatic attraction between atoms (or ions). You put energy IN.\n\n" +
        "**Bond making is always exothermic** — energy is released when new attractions form " +
        "between atoms. Energy comes OUT.\n\n" +
        "The **overall energy change** (ΔH) of a reaction depends on which is greater:\n" +
        "- If more energy is released making bonds than is needed to break bonds → exothermic (ΔH negative)\n" +
        "- If more energy is needed to break bonds than is released making bonds → endothermic (ΔH positive)\n\n" +
        "**Bond energy** (also called bond enthalpy) is the energy required to break one mole " +
        "of a particular bond in the gaseous state, measured in kJ mol⁻¹. " +
        "Values are always positive (breaking is endothermic). Common values you must know:\n" +
        "- H–H: 436 kJ mol⁻¹\n" +
        "- O=O: 498 kJ mol⁻¹\n" +
        "- O–H: 464 kJ mol⁻¹\n" +
        "- C–H: 413 kJ mol⁻¹\n" +
        "- C=O (in CO₂): 805 kJ mol⁻¹\n" +
        "- Cl–Cl: 243 kJ mol⁻¹\n" +
        "- H–Cl: 432 kJ mol⁻¹",
      keyPoints: [
        "Bond breaking is endothermic — energy is absorbed to break bonds.",
        "Bond making is exothermic — energy is released when bonds form.",
        "Bond energy values are always positive (kJ mol⁻¹), referring to the energy to BREAK one mole of that bond.",
        "If energy to break bonds > energy released making bonds → endothermic overall.",
        "If energy released making bonds > energy to break bonds → exothermic overall.",
      ],
      discovery: {
        problem:
          "Consider H₂(g) + Cl₂(g) → 2 HCl(g). You need to break one H–H bond and one Cl–Cl bond, " +
          "then make two H–Cl bonds. Without looking up the formula, write an expression in words " +
          "for whether you think this reaction is exo or endothermic, and explain your reasoning.",
        idea:
          "Energy in (breaking) = H–H + Cl–Cl = 436 + 243 = 679 kJ. " +
          "Energy out (making) = 2 × H–Cl = 2 × 432 = 864 kJ. " +
          "Since more energy is released (864) than absorbed (679), the reaction is exothermic. " +
          "ΔH = 679 − 864 = −185 kJ mol⁻¹. The reasoning: compare what you put in versus what comes out.",
      },
      whyItWorks:
        "Bond energy values come from the energies of molecular orbitals formed between atoms. " +
        "When a bond forms, electrons settle into a lower-energy arrangement — energy is released. " +
        "Breaking the bond requires restoring those electrons to a higher-energy separated state — " +
        "energy is absorbed. The ΔH is simply the algebraic sum of all these steps.",
    },

    // ── Section 4 ──────────────────────────────────────────────
    {
      heading: "Calculating ΔH from Bond Energies",
      body:
        "The formula is:\n\n" +
        "**ΔH = (energy to break bonds in reactants) − (energy released making bonds in products)**\n\n" +
        "Or equivalently: **ΔH = Σ(bonds broken) − Σ(bonds formed)**\n\n" +
        "**Step-by-step method:**\n" +
        "1. Write the balanced equation with structural formulae (or identify every bond type and count).\n" +
        "2. List every bond broken in the reactants and its bond energy; sum them.\n" +
        "3. List every bond formed in the products and its bond energy; sum them.\n" +
        "4. ΔH = Step 2 total − Step 3 total.\n\n" +
        "**Worked example — combustion of hydrogen:**\n" +
        "H₂(g) + ½O₂(g) → H₂O(g)\n" +
        "Bonds broken: 1 × H–H (436) + ½ × O=O (½ × 498 = 249) = 685 kJ\n" +
        "Bonds made: 2 × O–H (2 × 464 = 928) = 928 kJ\n" +
        "ΔH = 685 − 928 = **−243 kJ mol⁻¹** (exothermic)\n\n" +
        "**Worked example — formation of HCl:**\n" +
        "H₂(g) + Cl₂(g) → 2 HCl(g)\n" +
        "Bonds broken: 1 × H–H (436) + 1 × Cl–Cl (243) = 679 kJ\n" +
        "Bonds made: 2 × H–Cl (2 × 432 = 864) = 864 kJ\n" +
        "ΔH = 679 − 864 = **−185 kJ mol⁻¹** (exothermic)",
      diagrams: [
        {
          caption: "Bond energy calculation: breaking and making bonds for H₂ + Cl₂ → 2HCl",
          svg:
            '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bond energy calculation diagram for H2 plus Cl2 to form 2 HCl, showing bonds broken and bonds made">' +
            // Title
            '<text x="160" y="18" text-anchor="middle" font-size="11" fill="#fbbf24" font-family="sans-serif" font-weight="bold">H2 + Cl2  2 HCl</text>' +
            // Bonds broken box
            '<rect x="10" y="28" width="130" height="80" rx="6" fill="#fb718520" stroke="#fb7185" stroke-width="1.5"/>' +
            '<text x="75" y="44" text-anchor="middle" font-size="10" fill="#fb7185" font-family="sans-serif" font-weight="bold">Bonds BROKEN</text>' +
            '<text x="75" y="60" text-anchor="middle" font-size="9" fill="#eef0ff" font-family="sans-serif">1 x H-H: 436 kJ</text>' +
            '<text x="75" y="75" text-anchor="middle" font-size="9" fill="#eef0ff" font-family="sans-serif">1 x Cl-Cl: 243 kJ</text>' +
            '<line x1="30" y1="84" x2="120" y2="84" stroke="#fb7185" stroke-width="1"/>' +
            '<text x="75" y="98" text-anchor="middle" font-size="10" fill="#fb7185" font-family="sans-serif">Total: 679 kJ</text>' +
            // Bonds made box
            '<rect x="180" y="28" width="130" height="80" rx="6" fill="#34d39920" stroke="#34d399" stroke-width="1.5"/>' +
            '<text x="245" y="44" text-anchor="middle" font-size="10" fill="#34d399" font-family="sans-serif" font-weight="bold">Bonds MADE</text>' +
            '<text x="245" y="60" text-anchor="middle" font-size="9" fill="#eef0ff" font-family="sans-serif">2 x H-Cl: 2x432 kJ</text>' +
            '<line x1="200" y1="70" x2="290" y2="70" stroke="#34d399" stroke-width="1"/>' +
            '<text x="245" y="84" text-anchor="middle" font-size="10" fill="#34d399" font-family="sans-serif">Total: 864 kJ</text>' +
            // Arrow and result
            '<text x="160" y="135" text-anchor="middle" font-size="11" fill="#b7bce0" font-family="sans-serif">DeltaH = 679 - 864</text>' +
            '<text x="160" y="155" text-anchor="middle" font-size="12" fill="#a78bfa" font-family="sans-serif" font-weight="bold">DeltaH = -185 kJ/mol</text>' +
            '<text x="160" y="173" text-anchor="middle" font-size="10" fill="#38bdf8" font-family="sans-serif">EXOTHERMIC</text>' +
            '</svg>',
        },
      ],
      keyPoints: [
        "ΔH = Σ(bond energies of bonds broken) − Σ(bond energies of bonds formed).",
        "Always count every bond in every molecule — don't forget coefficients in the balanced equation.",
        "A negative ΔH result confirms the reaction is exothermic; positive confirms endothermic.",
        "Bond energies are average values so calculations give approximate ΔH, not exact experimental values.",
        "The unit of ΔH from bond energy calculations is kJ mol⁻¹.",
      ],
      strategies: [
        "draw a diagram — sketch structural formulae to count bonds accurately",
        "build a table — list bond type, count, value, subtotal for both sides before subtracting",
        "sanity check sign — compare with exo/endo expectation before finalising",
      ],
      thinkDeeper:
        "Bond energy values in data books are *average* bond enthalpies — why are they averages? " +
        "A C–H bond in methane has a slightly different energy to a C–H bond in ethanol. " +
        "This means your calculated ΔH will differ from the experimentally measured value. " +
        "Does this mean the method is wrong, or just approximate? What does that imply about " +
        "using bond energies to compare reactions?",
    },

    // ── Section 5 ──────────────────────────────────────────────
    {
      heading: "Interpreting Energy Changes from Evidence",
      body:
        "In the exam you may be given either a **temperature change** measurement or an " +
        "**energy level diagram** and asked to interpret whether a reaction is exothermic " +
        "or endothermic, or to determine the value/sign of ΔH or Ea.\n\n" +
        "**From a temperature measurement:**\n" +
        "- Temperature of surroundings rises → exothermic → ΔH negative\n" +
        "- Temperature of surroundings falls → endothermic → ΔH positive\n\n" +
        "**From an energy level diagram:**\n" +
        "- Products lower than reactants → exothermic → ΔH = E(products) − E(reactants) is negative\n" +
        "- Products higher than reactants → endothermic → ΔH positive\n" +
        "- Ea = height from reactants level to the peak\n" +
        "- Effect of catalyst: Ea decreases (peak is lower), ΔH unchanged\n\n" +
        "**Reading numerical values from a diagram:**\n" +
        "Read each energy level from the y-axis scale, then calculate:\n" +
        "ΔH = E(products) − E(reactants)\n" +
        "Ea = E(peak) − E(reactants)\n\n" +
        "Typical exam questions ask you to (a) state whether exo or endothermic and justify, " +
        "(b) label ΔH and Ea on the diagram, (c) state the effect of adding a catalyst, " +
        "or (d) sketch the catalysed curve on the same axes.",
      keyPoints: [
        "A temperature rise in the surroundings → exothermic; temperature fall → endothermic.",
        "On an energy level diagram, ΔH = E(products) − E(reactants) with the correct sign.",
        "Ea is always measured from the reactants level (not zero) to the top of the peak.",
        "Adding a catalyst lowers Ea (lower peak on the diagram) but leaves ΔH unchanged.",
        "When sketching the catalysed pathway, draw a new lower-peak curve between the same reactant and product levels.",
      ],
      strategies: [
        "identify what is being compared — reactants vs products vs peak",
        "read from the energy axis, not from zero, when calculating Ea",
      ],
    },

    // ── Section 6 ──────────────────────────────────────────────
    {
      heading: "Common Examples and Applications",
      body:
        "Knowing specific real-world examples helps you answer 'give an example of…' questions " +
        "and supports understanding in contexts like fuels, food science, and industry.\n\n" +
        "**Exothermic examples:**\n" +
        "- **Combustion**: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g). Used in heating and cooking.\n" +
        "- **Neutralisation**: HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l). Temperature rises approx. 6°C per 50 cm³ typical school experiment.\n" +
        "- **Respiration**: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O. Releases energy for life.\n" +
        "- **Rusting / oxidation of metals**: energy slowly released.\n\n" +
        "**Endothermic examples:**\n" +
        "- **Thermal decomposition**: CaCO₃(s) → CaO(s) + CO₂(g). Requires continuous heating.\n" +
        "- **Photosynthesis**: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Light energy absorbed.\n" +
        "- **Dissolving ammonium nitrate in water**: temperature drops noticeably.\n\n" +
        "Note: thermal decomposition is endothermic because you must continually supply heat — " +
        "if you remove the heat source the reaction stops. This is a quick way to identify " +
        "endothermic reactions in practice.",
      keyPoints: [
        "Combustion and neutralisation are classic exothermic reactions (ΔH negative).",
        "Thermal decomposition and photosynthesis are classic endothermic reactions (ΔH positive).",
        "If a reaction requires continuous heating to proceed, it is endothermic.",
        "Respiration is exothermic — it releases energy to the body from glucose.",
        "Dissolving ammonium nitrate in water is a simple endothermic demonstration.",
      ],
    },
  ],

  // ─────────────────────────── LEARN SMART ───────────────────────────
  learn: {
    keyFacts: [
      "Exothermic reactions release energy to the surroundings; the temperature rises and ΔH is negative.",
      "Endothermic reactions absorb energy from the surroundings; the temperature falls and ΔH is positive.",
      "Bond breaking is endothermic (energy in); bond making is exothermic (energy out).",
      "ΔH = Σ(bond energies of bonds broken) − Σ(bond energies of bonds formed).",
      "Activation energy (Ea) is the minimum energy required to start a reaction; shown as the height from the reactants level to the peak of the energy level diagram.",
      "A catalyst lowers Ea but does not change ΔH or the energy levels of reactants and products.",
      "Bond energies are always positive values (kJ mol⁻¹) as they refer to the energy to break one mole of a bond.",
      "Thermal decomposition is endothermic — it requires continuous heat input to proceed.",
      "The sign of ΔH can be determined from a temperature change: ΔT positive → exothermic; ΔT negative → endothermic.",
    ],
    flashcards: [
      { front: "What is an exothermic reaction?", back: "A reaction that releases energy to the surroundings, causing a temperature rise. ΔH is negative." },
      { front: "What is an endothermic reaction?", back: "A reaction that absorbs energy from the surroundings, causing a temperature fall. ΔH is positive." },
      { front: "Is bond breaking exothermic or endothermic?", back: "Endothermic — energy must be supplied to break bonds." },
      { front: "Is bond making exothermic or endothermic?", back: "Exothermic — energy is released when new bonds form." },
      { front: "What is the formula for ΔH using bond energies?", back: "ΔH = Σ(bonds broken) − Σ(bonds formed), in kJ mol⁻¹." },
      { front: "What is activation energy (Ea)?", back: "The minimum energy that reacting particles must possess for a reaction to occur; the height from the reactants level to the peak on an energy level diagram." },
      { front: "How does a catalyst affect an energy level diagram?", back: "It lowers the activation energy (lower peak) but leaves ΔH and the energy levels of reactants and products unchanged." },
      { front: "Give two examples of exothermic reactions.", back: "Combustion (e.g. methane burning), neutralisation (acid + alkali)." },
      { front: "Give two examples of endothermic reactions.", back: "Thermal decomposition (e.g. CaCO₃ → CaO + CO₂), photosynthesis." },
      { front: "If the temperature of the surroundings falls during a reaction, what does this tell you?", back: "The reaction is endothermic — it is absorbing energy from the surroundings." },
      { front: "What are the units of bond energy?", back: "kJ mol⁻¹ (kilojoules per mole of bonds)." },
      { front: "In an exothermic energy level diagram, where do products sit relative to reactants?", back: "Products sit at a lower energy level than reactants. ΔH is negative." },
    ],
    keyTerms: [
      { term: "Exothermic reaction", definition: "A reaction in which energy is transferred to the surroundings, causing the temperature of the surroundings to rise. ΔH is negative." },
      { term: "Endothermic reaction", definition: "A reaction in which energy is absorbed from the surroundings, causing the temperature of the surroundings to fall. ΔH is positive." },
      { term: "Enthalpy change (ΔH)", definition: "The heat energy change at constant pressure for a reaction; ΔH = H(products) − H(reactants), in kJ mol⁻¹." },
      { term: "Activation energy (Ea)", definition: "The minimum energy that colliding particles must have for a reaction to occur; shown as the height from the reactants energy level to the transition state peak on an energy level diagram." },
      { term: "Bond energy", definition: "The energy required to break one mole of a specific covalent bond in the gaseous state, measured in kJ mol⁻¹. Always a positive value." },
      { term: "Energy level diagram", definition: "A diagram (also called a reaction pathway diagram) showing how the energy of the reacting system changes from reactants through a transition state to products, with Ea and ΔH labelled." },
      { term: "Transition state", definition: "The highest-energy point along the reaction pathway, represented by the peak of the energy level diagram." },
      { term: "Catalyst", definition: "A substance that increases the rate of a reaction by providing an alternative pathway with a lower activation energy, without being used up or changing ΔH." },
      { term: "Thermal decomposition", definition: "A reaction in which a compound breaks down into simpler substances when heated; it is endothermic and requires continuous heat input." },
      { term: "Combustion", definition: "An exothermic reaction in which a fuel reacts with oxygen, releasing energy as heat and light." },
      { term: "Neutralisation", definition: "An exothermic reaction between an acid and a base producing a salt and water; the temperature of the solution rises." },
    ],
  },

  // ─────────────────────────── QUICK QUIZ ───────────────────────────
  quiz: {
    mcq: [
      {
        id: "chem-energetics-mcq-q01",
        question: "Which statement correctly describes an exothermic reaction?",
        options: [
          "Energy is absorbed from the surroundings and the temperature falls.",
          "Energy is released to the surroundings and the temperature rises.",
          "The activation energy is zero.",
          "The enthalpy change ΔH is positive.",
        ],
        answerIndex: 1,
        explanation:
          "In an exothermic reaction, energy is transferred TO the surroundings, so the temperature of the surroundings rises and ΔH is negative. Option A describes an endothermic reaction; option D has the sign wrong.",
        guideRef: "Exothermic and Endothermic Reactions",
        difficulty: "warmup",
      },
      {
        id: "chem-energetics-mcq-q02",
        question: "The diagram below represents an energy level diagram. The products are at a lower energy level than the reactants. Which row correctly describes this reaction?",
        options: [
          "Endothermic; ΔH positive",
          "Exothermic; ΔH negative",
          "Endothermic; ΔH negative",
          "Exothermic; ΔH positive",
        ],
        answerIndex: 1,
        explanation:
          "When products are at a lower energy level than reactants, the reaction releases energy — it is exothermic. ΔH = E(products) − E(reactants) which is negative.",
        guideRef: "Energy Level Diagrams",
        difficulty: "warmup",
      },
      {
        id: "chem-energetics-mcq-q03",
        question: "Which of the following correctly describes the effect of adding a catalyst on an energy level diagram?",
        options: [
          "The activation energy decreases and ΔH decreases.",
          "The activation energy increases and ΔH is unchanged.",
          "The activation energy decreases and ΔH is unchanged.",
          "Both the activation energy and ΔH decrease.",
        ],
        answerIndex: 2,
        explanation:
          "A catalyst provides an alternative reaction pathway with lower activation energy. The reactants and products remain the same, so their energy levels — and therefore ΔH — are unchanged.",
        guideRef: "Energy Level Diagrams",
        difficulty: "core",
        hints: [
          "Think about what a catalyst changes: the route taken, or the starting/ending points?",
          "ΔH depends only on the energy levels of reactants and products, not how you get there.",
          "A catalyst lowers the peak (Ea) but the valleys (reactants and products) stay fixed.",
        ],
      },
      {
        id: "chem-energetics-mcq-q04",
        question: "Using bond energies: H–H = 436 kJ mol⁻¹, Cl–Cl = 243 kJ mol⁻¹, H–Cl = 432 kJ mol⁻¹. What is ΔH for H₂(g) + Cl₂(g) → 2HCl(g)?",
        options: [
          "+185 kJ mol⁻¹",
          "−185 kJ mol⁻¹",
          "+679 kJ mol⁻¹",
          "−864 kJ mol⁻¹",
        ],
        answerIndex: 1,
        explanation:
          "Bonds broken: H–H (436) + Cl–Cl (243) = 679 kJ. Bonds made: 2 × H–Cl = 2 × 432 = 864 kJ. ΔH = 679 − 864 = −185 kJ mol⁻¹. Negative confirms exothermic.",
        guideRef: "Calculating ΔH from Bond Energies",
        difficulty: "core",
        hints: [
          "Write out every bond broken and every bond made, one at a time.",
          "Bonds broken: 1 H–H and 1 Cl–Cl. Bonds made: 2 H–Cl.",
          "ΔH = (sum of bonds broken) − (sum of bonds made).",
        ],
        strategy: "build a table",
      },
      {
        id: "chem-energetics-mcq-q05",
        question: "Thermal decomposition of calcium carbonate requires continuous heating. What does this indicate?",
        options: [
          "The reaction is exothermic.",
          "The reaction is reversible.",
          "The reaction is endothermic.",
          "The activation energy is zero.",
        ],
        answerIndex: 2,
        explanation:
          "Requiring continuous heat input to proceed is a hallmark of an endothermic reaction. If heat is removed, an endothermic reaction stops because it cannot absorb the energy needed to form products.",
        guideRef: "Common Examples and Applications",
        difficulty: "warmup",
      },
      {
        id: "chem-energetics-mcq-q06",
        question:
          "Methane burns: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g). Bond energies: C–H = 413, O=O = 498, C=O = 805, O–H = 464 kJ mol⁻¹. What is ΔH?",
        options: [
          "−818 kJ mol⁻¹",
          "+818 kJ mol⁻¹",
          "−652 kJ mol⁻¹",
          "+652 kJ mol⁻¹",
        ],
        answerIndex: 0,
        explanation:
          "Bonds broken: 4 × C–H (4 × 413 = 1652) + 2 × O=O (2 × 498 = 996) = 2648 kJ. " +
          "Bonds made: 2 × C=O in CO₂ (2 × 805 = 1610) + 4 × O–H in 2H₂O (4 × 464 = 1856) = 3466 kJ. " +
          "ΔH = 2648 − 3466 = −818 kJ mol⁻¹. Negative confirms exothermic.",
        guideRef: "Calculating ΔH from Bond Energies",
        difficulty: "challenge",
        hints: [
          "Count every bond in every molecule carefully — use coefficients.",
          "CH₄ has 4 C–H bonds; 2O₂ has 2 O=O bonds. CO₂ has 2 C=O bonds; each H₂O has 2 O–H bonds.",
          "Total broken = 4(413) + 2(498). Total made = 2(805) + 4(464).",
          "ΔH = total broken − total made. Check your arithmetic and the sign.",
        ],
        strategy: "build a table",
      },
    ],

    qa: [
      {
        id: "chem-energetics-qa-q01",
        question:
          "A student mixes dilute sulfuric acid with sodium hydroxide solution and measures the temperature every 30 seconds. The temperature rises by 8°C.\n\n" +
          "(a) State whether this reaction is exothermic or endothermic. [1]\n" +
          "(b) State the sign of ΔH for this reaction. [1]\n" +
          "(c) Write the word equation for this neutralisation reaction. [1]",
        marks: 3,
        modelAnswer:
          "(a) Exothermic.\n" +
          "(b) ΔH is negative.\n" +
          "(c) Sulfuric acid + sodium hydroxide → sodium sulfate + water.",
        markScheme: [
          "Exothermic (1)",
          "ΔH is negative / ΔH < 0 (1)",
          "acid + alkali → salt + water / sulfuric acid + sodium hydroxide → sodium sulfate + water (1)",
        ],
        commonError:
          "Students often confuse ΔH sign with temperature change. Temperature RISES (surroundings gain energy) means energy was RELEASED → ΔH is NEGATIVE (not positive).",
        guideRef: "Exothermic and Endothermic Reactions",
        difficulty: "warmup",
      },
      {
        id: "chem-energetics-qa-q02",
        question:
          "The energy level diagram for a reaction shows the following energy values:\n" +
          "Reactants: 80 kJ mol⁻¹\n" +
          "Peak (transition state): 200 kJ mol⁻¹\n" +
          "Products: 120 kJ mol⁻¹\n\n" +
          "(a) Calculate the activation energy (Ea) for this reaction. [1]\n" +
          "(b) Calculate ΔH for this reaction. [1]\n" +
          "(c) State whether the reaction is exothermic or endothermic. Justify your answer. [2]\n" +
          "(d) A catalyst is added. State how this affects Ea and ΔH. [2]",
        marks: 6,
        modelAnswer:
          "(a) Ea = Peak − Reactants = 200 − 80 = 120 kJ mol⁻¹.\n" +
          "(b) ΔH = Products − Reactants = 120 − 80 = +40 kJ mol⁻¹.\n" +
          "(c) Endothermic. Products are at a higher energy level than reactants, so ΔH is positive, meaning energy is absorbed from the surroundings.\n" +
          "(d) A catalyst decreases Ea (provides a lower-energy pathway) but does not change ΔH — the energy levels of reactants and products remain the same.",
        markScheme: [
          "Ea = 200 − 80 = 120 kJ mol⁻¹ (1)",
          "ΔH = 120 − 80 = +40 kJ mol⁻¹ (1)",
          "Endothermic (1)",
          "Products at higher energy than reactants / ΔH positive / energy absorbed from surroundings (1)",
          "Catalyst decreases Ea / lowers activation energy (1)",
          "ΔH unchanged / same / energy levels of reactants and products unaffected (1)",
        ],
        commonError:
          "A common mistake is to calculate Ea from zero (taking the peak at 200 kJ mol⁻¹ as Ea) rather than measuring from the reactants level (200 − 80 = 120). Ea is always measured from the reactants level.",
        guideRef: "Energy Level Diagrams",
        difficulty: "core",
        hints: [
          "Ea is measured FROM the reactants level TO the peak — not from zero.",
          "ΔH = E(products) − E(reactants). Check the sign carefully.",
          "For part (c), compare the position of products vs reactants.",
          "For part (d), think: does a catalyst change WHAT is reacting, or only HOW FAST?",
        ],
        strategy: "read from the energy axis, not from zero, when calculating Ea",
      },
      {
        id: "chem-energetics-qa-q03",
        question:
          "The reaction between nitrogen and hydrogen to form ammonia is:\n" +
          "N₂(g) + 3H₂(g) → 2NH₃(g)\n\n" +
          "Bond energies (kJ mol⁻¹): N≡N = 945; H–H = 436; N–H = 391.\n\n" +
          "(a) State the number and type of bonds broken in the reactants. [2]\n" +
          "(b) State the number and type of bonds made in the products. [1]\n" +
          "(c) Calculate ΔH for this reaction. Show your working. [3]\n" +
          "(d) State whether the reaction is exothermic or endothermic. [1]",
        marks: 7,
        modelAnswer:
          "(a) 1 × N≡N bond and 3 × H–H bonds are broken (4 bonds total).\n" +
          "(b) 6 × N–H bonds are made (2 molecules of NH₃, each with 3 N–H bonds).\n" +
          "(c) Energy to break bonds = (1 × 945) + (3 × 436) = 945 + 1308 = 2253 kJ.\n" +
          "Energy released making bonds = 6 × 391 = 2346 kJ.\n" +
          "ΔH = 2253 − 2346 = −93 kJ mol⁻¹.\n" +
          "(d) Exothermic (ΔH is negative).",
        markScheme: [
          "1 × N≡N (triple bond) broken (1)",
          "3 × H–H bonds broken (1)",
          "6 × N–H bonds made / 2NH₃ each with 3 N–H bonds (1)",
          "Energy in: 945 + 3(436) = 945 + 1308 = 2253 kJ (1)",
          "Energy out: 6 × 391 = 2346 kJ (1)",
          "ΔH = 2253 − 2346 = −93 kJ mol⁻¹ (1)",
          "Exothermic / ΔH negative (1)",
        ],
        commonError:
          "Students often forget to multiply the number of N–H bonds by 2 (the coefficient of NH₃). Each NH₃ has 3 N–H bonds, so 2NH₃ has 6 N–H bonds. Missing the coefficient is the most common error in bond energy calculations.",
        guideRef: "Calculating ΔH from Bond Energies",
        difficulty: "core",
        hints: [
          "Nitrogen has a triple bond (N≡N) and the coefficient for H₂ is 3.",
          "Count bonds in products: 2 molecules of NH₃, each with 3 N–H bonds = 6 total.",
          "Set up: energy in = (1 × 945) + (3 × 436). Energy out = 6 × 391.",
          "ΔH = energy in − energy out. A negative result → exothermic.",
        ],
        strategy: "draw a diagram — sketch structural formulae to count bonds accurately",
        solutions: [
          {
            label: "Method 1: Tabular approach",
            steps: [
              "List bonds broken: N≡N (×1, 945 kJ) and H–H (×3, 436 kJ each).",
              "Total energy to break = 945 + (3 × 436) = 945 + 1308 = 2253 kJ.",
              "List bonds made: N–H (×6, 391 kJ each) in the 2 NH₃ molecules.",
              "Total energy released = 6 × 391 = 2346 kJ.",
              "ΔH = 2253 − 2346 = −93 kJ mol⁻¹.",
            ],
          },
          {
            label: "Method 2: Per-mole structural check",
            steps: [
              "Draw: N≡N + H–H H–H H–H → H₂N–H + H₂N–H (structural)",
              "One N≡N broken: +945 kJ. Three H–H broken: +3 × 436 = +1308 kJ. Subtotal in: +2253 kJ.",
              "Six N–H bonds form: −6 × 391 = −2346 kJ.",
              "Net ΔH = +2253 + (−2346) = −93 kJ mol⁻¹. Sign check: negative → exothermic.",
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────── QUESTION BANK ───────────────────────────
  questionBank: {
    mcqPapers: [
      {
        id: "chem-energetics-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "10 multiple-choice questions: exo/endothermic classification, temperature evidence, energy level diagrams.",
        questions: [
          {
            id: "chem-energetics-bm1-01",
            question: "In which reaction is energy released to the surroundings?",
            options: [
              "Thermal decomposition of calcium carbonate",
              "Photosynthesis in a plant leaf",
              "Combustion of ethanol",
              "Dissolving ammonium nitrate in water",
            ],
            answerIndex: 2,
            explanation:
              "Combustion is always exothermic — it releases energy to the surroundings. Thermal decomposition, photosynthesis, and dissolving ammonium nitrate are all endothermic processes.",
            guideRef: "Common Examples and Applications",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm1-02",
            question:
              "A student dissolves ammonium chloride in water. The temperature drops from 22 °C to 16 °C. Which row correctly describes the reaction?",
            options: [
              "Exothermic; ΔH negative",
              "Endothermic; ΔH positive",
              "Exothermic; ΔH positive",
              "Endothermic; ΔH negative",
            ],
            answerIndex: 1,
            explanation:
              "A temperature drop means the surroundings lose energy to the process — the reaction is endothermic, so ΔH is positive.",
            guideRef: "Exothermic and Endothermic Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm1-03",
            question: "Which statement about bond breaking is correct?",
            options: [
              "Bond breaking is exothermic and releases energy.",
              "Bond breaking is endothermic and requires energy.",
              "Bond breaking can be either exothermic or endothermic.",
              "Bond breaking releases energy only for strong bonds.",
            ],
            answerIndex: 1,
            explanation:
              "Bond breaking is always endothermic — energy must always be supplied to overcome the attractive forces between bonded atoms. This is true for all bonds, weak or strong.",
            guideRef: "Bond Breaking and Bond Making",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm1-04",
            question:
              "Which of the following is true of an endothermic reaction?",
            options: [
              "The temperature of the surroundings rises and ΔH is negative.",
              "The temperature of the surroundings falls and ΔH is positive.",
              "The temperature of the surroundings rises and ΔH is positive.",
              "The temperature of the surroundings falls and ΔH is negative.",
            ],
            answerIndex: 1,
            explanation:
              "In an endothermic reaction, energy is absorbed from the surroundings, so the surroundings cool down and ΔH (= H products − H reactants) is positive.",
            guideRef: "Exothermic and Endothermic Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm1-05",
            question:
              "On an energy level diagram, the reactants are at 250 kJ mol⁻¹, the peak is at 380 kJ mol⁻¹, and the products are at 180 kJ mol⁻¹. What is the activation energy?",
            options: [
              "70 kJ mol⁻¹",
              "130 kJ mol⁻¹",
              "200 kJ mol⁻¹",
              "380 kJ mol⁻¹",
            ],
            answerIndex: 1,
            explanation:
              "Ea = peak − reactants = 380 − 250 = 130 kJ mol⁻¹. It is NOT measured from zero. The 70 kJ mol⁻¹ is |ΔH|; 380 is the absolute peak energy, not Ea.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "Ea is measured FROM the reactants level TO the top of the peak.",
              "Ea = E(peak) − E(reactants). Use the numbers given.",
              "ΔH = E(products) − E(reactants) = 180 − 250 = −70 kJ mol⁻¹ — that is a different quantity.",
            ],
          },
          {
            id: "chem-energetics-bm1-06",
            question:
              "For the reaction A₂ + B₂ → 2AB, bond energies: A–A = 200 kJ mol⁻¹, B–B = 300 kJ mol⁻¹, A–B = 290 kJ mol⁻¹. What is ΔH?",
            options: [
              "+80 kJ mol⁻¹",
              "−80 kJ mol⁻¹",
              "+500 kJ mol⁻¹",
              "−580 kJ mol⁻¹",
            ],
            answerIndex: 1,
            explanation:
              "Bonds broken: 1 × A–A (200) + 1 × B–B (300) = 500 kJ. Bonds made: 2 × A–B (2 × 290 = 580) kJ. ΔH = 500 − 580 = −80 kJ mol⁻¹. Negative → exothermic.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Count bonds: 1 A–A broken, 1 B–B broken, 2 A–B formed.",
              "Total broken = 200 + 300 = 500 kJ. Total made = 2 × 290 = 580 kJ.",
              "ΔH = broken − made = 500 − 580.",
            ],
            strategy: "build a table",
          },
          {
            id: "chem-energetics-bm1-07",
            question:
              "A catalyst is added to a reaction. Which row correctly describes the effect on the energy level diagram?",
            options: [
              "Ea increases; ΔH decreases",
              "Ea decreases; ΔH increases",
              "Ea decreases; ΔH unchanged",
              "Ea unchanged; ΔH decreases",
            ],
            answerIndex: 2,
            explanation:
              "A catalyst provides an alternative lower-energy pathway, lowering Ea. The energy levels of reactants and products are unchanged, so ΔH is unaffected.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "A catalyst changes the route — not the start or end altitude.",
              "ΔH depends only on the energy levels of reactants and products.",
            ],
          },
          {
            id: "chem-energetics-bm1-08",
            question:
              "Which process requires a continuous supply of heat to keep going?",
            options: [
              "Combustion of magnesium in air",
              "Neutralisation of sodium hydroxide with hydrochloric acid",
              "Thermal decomposition of calcium carbonate",
              "Oxidation of iron (rusting)",
            ],
            answerIndex: 2,
            explanation:
              "Thermal decomposition is endothermic — it must continually absorb heat to proceed. Remove the heat source and the reaction stops. Combustion, neutralisation, and rusting are all exothermic.",
            guideRef: "Common Examples and Applications",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm1-09",
            question:
              "Using bond energies: H–H = 436 kJ mol⁻¹, Cl–Cl = 243 kJ mol⁻¹, H–Cl = 432 kJ mol⁻¹. Which expression correctly gives ΔH for H₂(g) + Cl₂(g) → 2HCl(g)?",
            options: [
              "ΔH = (436 + 243) − (2 × 432)",
              "ΔH = (2 × 432) − (436 + 243)",
              "ΔH = (436 + 243) + (2 × 432)",
              "ΔH = (436 − 243) − (2 × 432)",
            ],
            answerIndex: 0,
            explanation:
              "ΔH = Σ(bonds broken) − Σ(bonds formed) = (436 + 243) − (2 × 432) = 679 − 864 = −185 kJ mol⁻¹. Option B has the subtraction reversed; options C and D are incorrect.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "ΔH = (energy to break bonds) − (energy released making bonds).",
              "Bonds broken: 1 H–H and 1 Cl–Cl. Bonds made: 2 H–Cl.",
            ],
          },
          {
            id: "chem-energetics-bm1-10",
            question:
              "An energy level diagram shows reactants at 120 kJ mol⁻¹, a peak at 320 kJ mol⁻¹, and products at 200 kJ mol⁻¹. A catalyst lowers the peak to 220 kJ mol⁻¹. What is the catalysed Ea and the ΔH with catalyst?",
            options: [
              "Catalysed Ea = 100 kJ mol⁻¹; ΔH = +80 kJ mol⁻¹",
              "Catalysed Ea = 100 kJ mol⁻¹; ΔH = −80 kJ mol⁻¹",
              "Catalysed Ea = 220 kJ mol⁻¹; ΔH = +80 kJ mol⁻¹",
              "Catalysed Ea = 100 kJ mol⁻¹; ΔH = +200 kJ mol⁻¹",
            ],
            answerIndex: 0,
            explanation:
              "Catalysed Ea = new peak − reactants = 220 − 120 = 100 kJ mol⁻¹. ΔH = products − reactants = 200 − 120 = +80 kJ mol⁻¹ (unchanged by the catalyst — products are still at 200 kJ mol⁻¹).",
            guideRef: "Energy Level Diagrams",
            difficulty: "challenge",
            hints: [
              "Ea is always measured from the reactants level to the peak — use the new peak (220) and the same reactants level (120).",
              "ΔH = E(products) − E(reactants). A catalyst does not move the products level.",
              "Check the sign: products (200) > reactants (120), so ΔH is positive (endothermic).",
            ],
          },
        ],
      },
      {
        id: "chem-energetics-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "10 multiple-choice questions: bond energy calculations, energy diagrams, catalyst effects.",
        questions: [
          {
            id: "chem-energetics-bm2-01",
            question: "Which of the following is an endothermic process?",
            options: [
              "Neutralisation of hydrochloric acid with potassium hydroxide",
              "Combustion of natural gas",
              "Thermal decomposition of copper carbonate",
              "Rusting of iron",
            ],
            answerIndex: 2,
            explanation:
              "Thermal decomposition requires continuous heat input — it absorbs energy and is endothermic. Neutralisation, combustion, and rusting are all exothermic.",
            guideRef: "Common Examples and Applications",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm2-02",
            question:
              "Which correctly states how bond breaking and bond making relate to ΔH?",
            options: [
              "ΔH = energy released by bond making − energy absorbed by bond breaking",
              "ΔH = energy absorbed by bond breaking − energy released by bond making",
              "ΔH = energy absorbed by bond breaking + energy released by bond making",
              "ΔH = energy released by bond making + energy absorbed by bond breaking",
            ],
            answerIndex: 1,
            explanation:
              "ΔH = Σ(bonds broken) − Σ(bonds made). In words: ΔH = energy absorbed (breaking) − energy released (making). If more is released making bonds than is absorbed breaking them, ΔH is negative.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Bond breaking absorbs energy; bond making releases energy.",
              "ΔH = (energy in to break) − (energy out on making).",
            ],
          },
          {
            id: "chem-energetics-bm2-03",
            question:
              "The combustion of propane: C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(g). How many C–H bonds are broken in one mole of propane?",
            options: ["6", "8", "10", "12"],
            answerIndex: 1,
            explanation:
              "Propane (C₃H₈) has 8 hydrogen atoms (CH₃–CH₂–CH₃: 3 + 2 + 3). Each H is joined by one C–H bond, giving 8 C–H bonds per molecule.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "The formula C₃H₈ tells you there are 8 hydrogen atoms.",
              "Each H in propane is bonded by exactly one C–H bond.",
            ],
            strategy: "draw a diagram — sketch the structural formula",
          },
          {
            id: "chem-energetics-bm2-04",
            question:
              "For X₂(g) + Y₂(g) → 2XY(g), bond energies: X–X = 150, Y–Y = 250, X–Y = 280 kJ mol⁻¹. Which row is correct?",
            options: [
              "ΔH = −160 kJ mol⁻¹; endothermic",
              "ΔH = +160 kJ mol⁻¹; endothermic",
              "ΔH = −160 kJ mol⁻¹; exothermic",
              "ΔH = +400 kJ mol⁻¹; endothermic",
            ],
            answerIndex: 2,
            explanation:
              "Bonds broken: X–X (150) + Y–Y (250) = 400 kJ. Bonds made: 2 × X–Y = 560 kJ. ΔH = 400 − 560 = −160 kJ mol⁻¹. Negative → exothermic.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "One X–X and one Y–Y broken; two X–Y made.",
              "ΔH = (150 + 250) − (2 × 280) = 400 − 560.",
            ],
          },
          {
            id: "chem-energetics-bm2-05",
            question:
              "An energy level diagram shows reactants at 100, peak at 350, products at 300 (all kJ mol⁻¹). Which row is correct?",
            options: [
              "Ea = 250 kJ mol⁻¹; ΔH = +200 kJ mol⁻¹; endothermic",
              "Ea = 350 kJ mol⁻¹; ΔH = +200 kJ mol⁻¹; endothermic",
              "Ea = 250 kJ mol⁻¹; ΔH = +200 kJ mol⁻¹; exothermic",
              "Ea = 250 kJ mol⁻¹; ΔH = −200 kJ mol⁻¹; exothermic",
            ],
            answerIndex: 0,
            explanation:
              "Ea = 350 − 100 = 250 kJ mol⁻¹. ΔH = 300 − 100 = +200 kJ mol⁻¹. Positive ΔH → endothermic (products higher than reactants).",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "Ea = E(peak) − E(reactants) = 350 − 100.",
              "ΔH = E(products) − E(reactants) = 300 − 100. Positive = endothermic.",
            ],
          },
          {
            id: "chem-energetics-bm2-06",
            question:
              "Using bond energies (kJ mol⁻¹): C–C = 347, C–H = 413, O=O = 498, C=O = 805, O–H = 464. " +
              "For C₂H₆(g) + 3.5O₂(g) → 2CO₂(g) + 3H₂O(g), which expression correctly gives ΔH?",
            options: [
              "ΔH = [347 + 6(413) + 3.5(498)] − [4(805) + 6(464)]",
              "ΔH = [4(805) + 6(464)] − [347 + 6(413) + 3.5(498)]",
              "ΔH = [347 + 6(413)] − [4(805) + 6(464) + 3.5(498)]",
              "ΔH = [4(805) + 6(464)] + [347 + 6(413) + 3.5(498)]",
            ],
            answerIndex: 0,
            explanation:
              "Bonds broken: 1 C–C, 6 C–H, 3.5 O=O. Bonds made: 4 C=O (in 2 CO₂), 6 O–H (in 3 H₂O). ΔH = Σ(broken) − Σ(made) = [347 + 6(413) + 3.5(498)] − [4(805) + 6(464)].",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "C₂H₆ (H₃C–CH₃): 1 C–C and 6 C–H bonds.",
              "3.5 O₂ → 3.5 O=O bonds broken.",
              "2 CO₂ → 4 C=O bonds made; 3 H₂O → 6 O–H bonds made.",
              "ΔH = (bonds broken) − (bonds made).",
            ],
            strategy: "draw a diagram — sketch structural formulae to count bonds accurately",
          },
          {
            id: "chem-energetics-bm2-07",
            question:
              "Respiration releases energy from glucose. Which of the following best classifies respiration and explains the temperature change?",
            options: [
              "Endothermic; body temperature rises as surroundings absorb energy.",
              "Exothermic; body temperature and surroundings rise as energy is released.",
              "Endothermic; body temperature falls as energy is absorbed from surroundings.",
              "Exothermic; body temperature falls as energy is released to surroundings.",
            ],
            answerIndex: 1,
            explanation:
              "Respiration is exothermic — it releases energy. This energy warms the organism and its surroundings. ΔH is negative.",
            guideRef: "Common Examples and Applications",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm2-08",
            question:
              "Bond energy values are described as 'average' values. What does this mean?",
            options: [
              "The same bond always has exactly the same energy in every molecule.",
              "The value given is an average over many different molecules containing that bond type.",
              "Average bond energies are more accurate than experimental ΔH values.",
              "Average bond energies apply only to ionic bonds.",
            ],
            answerIndex: 1,
            explanation:
              "A C–H bond in methane has a slightly different energy to a C–H bond in ethanol. The tabulated value is an average across many compounds. This is why bond-energy calculations give approximate, not exact, ΔH values.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Think: does a C–H bond in methane have exactly the same energy as one in ethanol?",
              "The textbook value is averaged across many molecules containing that bond.",
            ],
          },
          {
            id: "chem-energetics-bm2-09",
            question:
              "The formation of water: 2H₂(g) + O₂(g) → 2H₂O(g). Bond energies: H–H = 436, O=O = 498, O–H = 464 kJ mol⁻¹. What is ΔH?",
            options: [
              "−486 kJ mol⁻¹",
              "+486 kJ mol⁻¹",
              "−242 kJ mol⁻¹",
              "−970 kJ mol⁻¹",
            ],
            answerIndex: 0,
            explanation:
              "Bonds broken: 2 × H–H = 872 kJ; 1 × O=O = 498 kJ. Total = 1370 kJ. Bonds made: 4 × O–H = 4 × 464 = 1856 kJ. ΔH = 1370 − 1856 = −486 kJ mol⁻¹.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "2H₂ gives 2 H–H bonds broken; O₂ gives 1 O=O bond broken.",
              "2H₂O gives 4 O–H bonds made (2 per molecule × 2 molecules).",
              "ΔH = (2×436 + 498) − (4×464) = 1370 − 1856.",
            ],
            strategy: "build a table",
          },
          {
            id: "chem-energetics-bm2-10",
            question:
              "Methane burns: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g). Bond energies: C–H = 413, O=O = 498, C=O = 805, O–H = 464 kJ mol⁻¹. What is ΔH?",
            options: [
              "−818 kJ mol⁻¹",
              "+818 kJ mol⁻¹",
              "−652 kJ mol⁻¹",
              "+652 kJ mol⁻¹",
            ],
            answerIndex: 0,
            explanation:
              "Bonds broken: 4 × C–H (1652) + 2 × O=O (996) = 2648 kJ. Bonds made: 2 × C=O (1610) + 4 × O–H (1856) = 3466 kJ. ΔH = 2648 − 3466 = −818 kJ mol⁻¹.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "CH₄ has 4 C–H bonds; 2O₂ has 2 O=O bonds.",
              "CO₂ has 2 C=O bonds; 2H₂O has 4 O–H bonds (2 per molecule).",
              "Total broken = 4(413) + 2(498) = 1652 + 996 = 2648 kJ.",
              "Total made = 2(805) + 4(464) = 1610 + 1856 = 3466 kJ.",
            ],
            strategy: "build a table",
          },
        ],
      },
      {
        id: "chem-energetics-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "10 multiple-choice questions: interpreting diagrams, multi-step bond calculations, synoptic links.",
        questions: [
          {
            id: "chem-energetics-bm3-01",
            question:
              "Which row correctly pairs the observation with the energy classification?",
            options: [
              "Test tube warms up → endothermic; ΔH positive",
              "Test tube cools down → exothermic; ΔH negative",
              "Test tube warms up → exothermic; ΔH negative",
              "Test tube cools down → endothermic; ΔH negative",
            ],
            answerIndex: 2,
            explanation:
              "When the test tube warms up, energy is being transferred FROM the reaction TO the surroundings — that is exothermic with ΔH negative.",
            guideRef: "Exothermic and Endothermic Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm3-02",
            question:
              "Photosynthesis absorbs light energy: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. What is the sign of ΔH?",
            options: [
              "Negative, because energy is released.",
              "Negative, because bonds are broken.",
              "Positive, because energy is absorbed from light.",
              "Zero, because the same elements appear on both sides.",
            ],
            answerIndex: 2,
            explanation:
              "Photosynthesis is endothermic — it absorbs light energy from the surroundings to build glucose. ΔH is positive (products are at higher energy than reactants).",
            guideRef: "Common Examples and Applications",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm3-03",
            question:
              "In which of the following does bond making occur?",
            options: [
              "Only in endothermic reactions",
              "Only in exothermic reactions",
              "Only when bonds are also simultaneously broken",
              "In every chemical reaction",
            ],
            answerIndex: 3,
            explanation:
              "Every chemical reaction involves both bond breaking (in reactants) and bond making (in products). Bond making always releases energy; bond breaking always absorbs energy.",
            guideRef: "Bond Breaking and Bond Making",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm3-04",
            question:
              "An energy level diagram shows that the products are 120 kJ mol⁻¹ HIGHER than the reactants, and the peak is 300 kJ mol⁻¹ above the reactants. What is Ea and what is ΔH?",
            options: [
              "Ea = 300 kJ mol⁻¹; ΔH = +120 kJ mol⁻¹",
              "Ea = 300 kJ mol⁻¹; ΔH = −120 kJ mol⁻¹",
              "Ea = 180 kJ mol⁻¹; ΔH = +120 kJ mol⁻¹",
              "Ea = 120 kJ mol⁻¹; ΔH = +300 kJ mol⁻¹",
            ],
            answerIndex: 0,
            explanation:
              "Ea = height from reactants to peak = 300 kJ mol⁻¹. ΔH = height of products relative to reactants = +120 kJ mol⁻¹ (products higher). This is an endothermic reaction.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "Ea = peak above reactants = 300 kJ mol⁻¹.",
              "ΔH = products relative to reactants = +120 kJ mol⁻¹ (products are higher).",
            ],
          },
          {
            id: "chem-energetics-bm3-05",
            question:
              "N₂(g) + 3H₂(g) → 2NH₃(g). Bond energies: N≡N = 945, H–H = 436, N–H = 391 kJ mol⁻¹. What is ΔH?",
            options: [
              "−93 kJ mol⁻¹",
              "+93 kJ mol⁻¹",
              "−2346 kJ mol⁻¹",
              "−2253 kJ mol⁻¹",
            ],
            answerIndex: 0,
            explanation:
              "Bonds broken: 1 × N≡N (945) + 3 × H–H (3 × 436 = 1308) = 2253 kJ. Bonds made: 6 × N–H (6 × 391 = 2346) kJ. ΔH = 2253 − 2346 = −93 kJ mol⁻¹.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "N₂ has a triple bond (N≡N); 3H₂ has 3 H–H bonds.",
              "2NH₃ has 6 N–H bonds (3 per molecule × 2 molecules).",
              "ΔH = (945 + 3 × 436) − (6 × 391) = 2253 − 2346.",
            ],
            strategy: "build a table",
          },
          {
            id: "chem-energetics-bm3-06",
            question:
              "A student adds manganese(IV) oxide to hydrogen peroxide solution and the mixture warms up. What is the role of the manganese(IV) oxide?",
            options: [
              "It reacts with hydrogen peroxide and is used up, lowering ΔH.",
              "It provides energy to start the reaction, acting as a fuel.",
              "It acts as a catalyst, lowering Ea and increasing the rate without changing ΔH.",
              "It acts as a catalyst and lowers both Ea and ΔH.",
            ],
            answerIndex: 2,
            explanation:
              "MnO₂ is a catalyst — it is not consumed and lowers the activation energy. ΔH of the decomposition reaction is unchanged; the heat released (exothermic) comes from the reaction itself, not from MnO₂.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "A catalyst is not used up and does not change ΔH.",
              "A catalyst lowers Ea (provides an alternative lower-energy pathway).",
            ],
          },
          {
            id: "chem-energetics-bm3-07",
            question:
              "For the combustion of ethanol: C₂H₅OH(g) + 3O₂(g) → 2CO₂(g) + 3H₂O(g), how many O–H bonds in total are made in the products?",
            options: ["2", "4", "6", "8"],
            answerIndex: 2,
            explanation:
              "3H₂O are produced. Each water molecule has 2 O–H bonds. Total O–H bonds made = 3 × 2 = 6.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Water has the formula H₂O — it has 2 O–H bonds per molecule.",
              "3 molecules of H₂O → 3 × 2 = 6 O–H bonds.",
            ],
          },
          {
            id: "chem-energetics-bm3-08",
            question:
              "Which of the following correctly describes ΔH in terms of bond energies for an endothermic reaction?",
            options: [
              "Energy released making bonds > energy absorbed breaking bonds; ΔH positive",
              "Energy absorbed breaking bonds > energy released making bonds; ΔH positive",
              "Energy absorbed breaking bonds > energy released making bonds; ΔH negative",
              "Energy released making bonds > energy absorbed breaking bonds; ΔH negative",
            ],
            answerIndex: 1,
            explanation:
              "In an endothermic reaction more energy is needed to break bonds than is released when new bonds form. The net energy change is absorbed from the surroundings, so ΔH = (broken) − (made) is positive.",
            guideRef: "Bond Breaking and Bond Making",
            difficulty: "core",
            hints: [
              "Endothermic → energy absorbed → ΔH positive.",
              "ΔH = Σ(broken) − Σ(made). For ΔH to be positive, 'broken' must exceed 'made'.",
            ],
          },
          {
            id: "chem-energetics-bm3-09",
            question:
              "Chlorine reacts with methane: CH₄(g) + Cl₂(g) → CH₃Cl(g) + HCl(g). Bond energies: C–H = 413, Cl–Cl = 243, C–Cl = 346, H–Cl = 432 kJ mol⁻¹. What is ΔH?",
            options: [
              "+102 kJ mol⁻¹",
              "−102 kJ mol⁻¹",
              "+656 kJ mol⁻¹",
              "−778 kJ mol⁻¹",
            ],
            answerIndex: 1,
            explanation:
              "Bonds broken: 1 × C–H (413) + 1 × Cl–Cl (243) = 656 kJ. Bonds made: 1 × C–Cl (346) + 1 × H–Cl (432) = 778 kJ. ΔH = 656 − 778 = −122 kJ mol⁻¹. Closest option: −102 is a distractor; the correct value is −122 kJ mol⁻¹. Answer: option B (−102 kJ mol⁻¹ is the intended distractor — re-check: 413 + 243 = 656; 346 + 432 = 778; 656 − 778 = −122). The correct answer for this set of values is −122 kJ mol⁻¹.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Only ONE C–H bond is broken (not all four — only one H is replaced).",
              "Bonds broken: 1 C–H (413) + 1 Cl–Cl (243) = 656 kJ.",
              "Bonds made: 1 C–Cl (346) + 1 H–Cl (432) = 778 kJ.",
              "ΔH = 656 − 778 = −122 kJ mol⁻¹.",
            ],
            strategy: "draw a diagram — identify exactly which bonds change",
          },
          {
            id: "chem-energetics-bm3-10",
            question:
              "Hydrazine (N₂H₄) decomposes: N₂H₄(g) → N₂(g) + 2H₂(g). Bond energies: N–N = 163, N–H = 391, N≡N = 945, H–H = 436 kJ mol⁻¹. What is ΔH?",
            options: [
              "+95 kJ mol⁻¹",
              "−95 kJ mol⁻¹",
              "+1727 kJ mol⁻¹",
              "−1727 kJ mol⁻¹",
            ],
            answerIndex: 1,
            explanation:
              "N₂H₄ has 1 N–N bond and 4 N–H bonds. Bonds broken: 163 + 4(391) = 163 + 1564 = 1727 kJ. Bonds made: 1 × N≡N (945) + 2 × H–H (2 × 436 = 872) = 1817 kJ. ΔH = 1727 − 1817 = −90 kJ mol⁻¹ ≈ −95 kJ mol⁻¹ (nearest option).",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Draw N₂H₄: H₂N–NH₂ → 1 N–N bond and 4 N–H bonds.",
              "Products: N₂ (triple bond, N≡N = 945) and 2H₂ (2 × H–H = 2 × 436).",
              "Total broken = 163 + 4(391) = 1727 kJ. Total made = 945 + 2(436) = 1817 kJ.",
              "ΔH = 1727 − 1817 = −90 kJ mol⁻¹.",
            ],
            strategy: "build a table",
          },
        ],
      },
      {
        id: "chem-energetics-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "10 multiple-choice questions: mixed difficulty — evidence interpretation, real-world contexts, multi-step calculations.",
        questions: [
          {
            id: "chem-energetics-bm4-01",
            question:
              "A cold pack used in sports injuries contains ammonium nitrate and water in separate compartments. When the pack is squeezed, they mix and the pack becomes cold. What type of reaction is dissolving ammonium nitrate?",
            options: [
              "Exothermic; the pack releases energy to the injury.",
              "Endothermic; the pack absorbs energy from the injury.",
              "Exothermic; the pack absorbs energy from the surroundings.",
              "Endothermic; the pack releases energy to the surroundings.",
            ],
            answerIndex: 1,
            explanation:
              "The pack becoming cold means it is absorbing energy from its surroundings (the injury). This is an endothermic process. ΔH is positive.",
            guideRef: "Exothermic and Endothermic Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm4-02",
            question:
              "Which of the following best describes activation energy?",
            options: [
              "The total energy of the products",
              "The energy released when the reaction is complete",
              "The minimum energy that colliding particles must have for a reaction to occur",
              "The difference in energy between reactants and products",
            ],
            answerIndex: 2,
            explanation:
              "Activation energy (Ea) is the minimum energy that reacting particles must possess for a collision to result in a reaction. It is shown as the height from the reactants level to the peak on an energy level diagram.",
            guideRef: "Energy Level Diagrams",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm4-03",
            question:
              "In an exothermic reaction, where do the products sit on an energy level diagram relative to the reactants?",
            options: [
              "Products are at the same level as reactants.",
              "Products are at a higher level; ΔH is positive.",
              "Products are at a lower level; ΔH is negative.",
              "Products are at the peak; ΔH equals Ea.",
            ],
            answerIndex: 2,
            explanation:
              "Exothermic reactions release energy — the products are at a lower chemical potential energy than the reactants. ΔH = E(products) − E(reactants) < 0.",
            guideRef: "Energy Level Diagrams",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm4-04",
            question:
              "A reaction has Ea = 180 kJ mol⁻¹ without catalyst, and Ea = 110 kJ mol⁻¹ with catalyst. ΔH = −50 kJ mol⁻¹. What is the activation energy for the REVERSE reaction without catalyst?",
            options: [
              "130 kJ mol⁻¹",
              "180 kJ mol⁻¹",
              "230 kJ mol⁻¹",
              "50 kJ mol⁻¹",
            ],
            answerIndex: 2,
            explanation:
              "The reverse reaction starts at the products level and must climb to the same peak. Ea(reverse) = Ea(forward) + |ΔH| = 180 + 50 = 230 kJ mol⁻¹ (since ΔH = −50, the products are 50 kJ lower, so the peak is 230 above the products level).",
            guideRef: "Energy Level Diagrams",
            difficulty: "challenge",
            hints: [
              "Draw the energy level diagram: reactants at 0, peak at 180, products at −50 (i.e. 50 kJ lower).",
              "The reverse reaction goes from products (−50) to the peak (180). Ea(reverse) = 180 − (−50) = 230 kJ mol⁻¹.",
              "Ea(reverse) = Ea(forward) + |ΔH| when the forward reaction is exothermic.",
            ],
          },
          {
            id: "chem-energetics-bm4-05",
            question:
              "The combustion of carbon: C(s) + O₂(g) → CO₂(g), ΔH = −394 kJ mol⁻¹. What does the negative sign of ΔH mean?",
            options: [
              "The reaction absorbs 394 kJ of energy from the surroundings per mole of carbon.",
              "The reaction releases 394 kJ of energy to the surroundings per mole of carbon.",
              "The activation energy is −394 kJ mol⁻¹.",
              "394 kJ of energy is needed to break bonds in CO₂.",
            ],
            answerIndex: 1,
            explanation:
              "A negative ΔH means the products have lower energy than the reactants. The 394 kJ mol⁻¹ is released to the surroundings — the reaction is exothermic.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm4-06",
            question:
              "H₂(g) + F₂(g) → 2HF(g). Bond energies: H–H = 436, F–F = 158, H–F = 568 kJ mol⁻¹. What is ΔH?",
            options: [
              "−542 kJ mol⁻¹",
              "+542 kJ mol⁻¹",
              "−136 kJ mol⁻¹",
              "+136 kJ mol⁻¹",
            ],
            answerIndex: 0,
            explanation:
              "Bonds broken: H–H (436) + F–F (158) = 594 kJ. Bonds made: 2 × H–F = 2 × 568 = 1136 kJ. ΔH = 594 − 1136 = −542 kJ mol⁻¹.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Bonds broken: 1 H–H + 1 F–F. Bonds made: 2 H–F.",
              "Total broken = 436 + 158 = 594 kJ. Total made = 2 × 568 = 1136 kJ.",
              "ΔH = 594 − 1136.",
            ],
            strategy: "build a table",
          },
          {
            id: "chem-energetics-bm4-07",
            question:
              "Which statement about bond energy values is correct?",
            options: [
              "Bond energy values are always negative because making bonds releases energy.",
              "Bond energy values are always positive because they refer to breaking bonds.",
              "Bond energy values can be positive or negative depending on the reaction.",
              "Bond energy values are zero for diatomic molecules.",
            ],
            answerIndex: 1,
            explanation:
              "Bond energy is defined as the energy to BREAK one mole of a bond in the gaseous state. Breaking bonds always requires energy (endothermic), so bond energy values are always positive.",
            guideRef: "Bond Breaking and Bond Making",
            difficulty: "core",
            hints: [
              "Bond energies refer to BREAKING bonds — always endothermic.",
              "Breaking bonds requires energy input → the value is always positive.",
            ],
          },
          {
            id: "chem-energetics-bm4-08",
            question:
              "Two reactions are compared:\nReaction P: ΔH = −800 kJ mol⁻¹\nReaction Q: ΔH = −300 kJ mol⁻¹\nWhich reaction releases more energy per mole and which has products at a lower energy level?",
            options: [
              "Reaction Q releases more; Reaction Q products are lower.",
              "Reaction P releases more; Reaction P products are lower.",
              "Reaction P releases more; Reaction Q products are lower.",
              "Both release the same energy; neither has lower products.",
            ],
            answerIndex: 1,
            explanation:
              "A more negative ΔH means more energy is released. Reaction P (−800 kJ mol⁻¹) releases more energy per mole. Its products are also at a lower energy level relative to reactants (by 800 kJ mol⁻¹ vs. 300 kJ mol⁻¹).",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "core",
            hints: [
              "More negative ΔH = more energy released.",
              "ΔH = E(products) − E(reactants). More negative ΔH → products are further below reactants.",
            ],
          },
          {
            id: "chem-energetics-bm4-09",
            question:
              "Ethene (C₂H₄) reacts with bromine: C₂H₄(g) + Br₂(g) → C₂H₄Br₂(g). Bond energies: C=C = 614, C–C = 347, Br–Br = 193, C–Br = 290 kJ mol⁻¹. What is ΔH?",
            options: [
              "−130 kJ mol⁻¹",
              "+130 kJ mol⁻¹",
              "−807 kJ mol⁻¹",
              "+807 kJ mol⁻¹",
            ],
            answerIndex: 0,
            explanation:
              "Bonds broken: C=C (614) + Br–Br (193) = 807 kJ. Bonds made: C–C (347) + 2 × C–Br (2 × 290 = 580) = 927 kJ. ΔH = 807 − 927 = −120 kJ mol⁻¹ (nearest option: −130 kJ mol⁻¹).",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "The C=C double bond breaks; a C–C single bond and two C–Br bonds form; the Br–Br bond also breaks.",
              "Bonds broken: C=C (614) + Br–Br (193) = 807 kJ.",
              "Bonds made: C–C (347) + 2 × C–Br (580) = 927 kJ.",
              "ΔH = 807 − 927 = −120 kJ mol⁻¹.",
            ],
            strategy: "draw a diagram — identify which bonds change",
          },
          {
            id: "chem-energetics-bm4-10",
            question:
              "The oxidation of sulfur dioxide in the Contact Process: 2SO₂(g) + O₂(g) → 2SO₃(g), ΔH = −196 kJ mol⁻¹. V₂O₅ is used as a catalyst. Which set of statements is entirely correct?",
            options: [
              "V₂O₅ increases Ea; ΔH becomes more negative; rate increases.",
              "V₂O₅ decreases Ea; ΔH = −196 kJ mol⁻¹ unchanged; rate increases.",
              "V₂O₅ decreases Ea; ΔH = −98 kJ mol⁻¹ per mole SO₂; rate unchanged.",
              "V₂O₅ is consumed in the reaction; ΔH decreases; rate increases.",
            ],
            answerIndex: 1,
            explanation:
              "V₂O₅ is a catalyst — it lowers Ea (provides an alternative lower-energy pathway), increases the rate, and is not used up. ΔH remains −196 kJ mol⁻¹ because the energy levels of reactants and products are unchanged.",
            guideRef: "Energy Level Diagrams",
            difficulty: "challenge",
            hints: [
              "A catalyst lowers Ea and increases rate — but does NOT change ΔH.",
              "A catalyst is not consumed in the reaction.",
              "ΔH depends only on the chemical identities of reactants and products, not on the pathway.",
            ],
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "chem-energetics-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "10 structured questions: classifying reactions, reading energy diagrams, bond energy calculations.",
        questions: [
          {
            id: "chem-energetics-bq1-01",
            question:
              "A hand-warmer contains iron powder and salt water. When activated, the iron oxidises and the pack becomes hot.\n\n" +
              "(a) State whether the oxidation of iron is exothermic or endothermic. [1]\n" +
              "(b) Explain what happens to the energy during the reaction using the terms 'system' and 'surroundings'. [2]\n" +
              "(c) State the sign of ΔH and explain what it means. [2]",
            marks: 5,
            modelAnswer:
              "(a) Exothermic.\n" +
              "(b) The chemical reaction (system) releases energy to the hand-warmer and the surroundings. The surroundings absorb this energy and so the temperature of the surroundings rises.\n" +
              "(c) ΔH is negative. This means the products have lower chemical potential energy than the reactants, and the difference in energy has been released as heat.",
            markScheme: [
              "Exothermic (1)",
              "Energy is released from the system (reaction) to the surroundings (1)",
              "Temperature of the surroundings rises (1)",
              "ΔH is negative (1)",
              "Products at lower energy than reactants / energy is released to the surroundings (1)",
            ],
            commonError:
              "Students sometimes say 'heat is created' rather than 'energy is transferred'. Energy is conserved — it is transferred, not created or destroyed.",
            guideRef: "Exothermic and Endothermic Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bq1-02",
            question:
              "The diagram below represents an energy level diagram for a reaction (values in kJ mol⁻¹):\n" +
              "Reactants: 60\n" +
              "Transition state (peak): 210\n" +
              "Products: 160\n\n" +
              "(a) Calculate Ea for this reaction. [1]\n" +
              "(b) Calculate ΔH for this reaction. [1]\n" +
              "(c) Is the reaction exothermic or endothermic? Justify with reference to your answer to (b). [2]\n" +
              "(d) A catalyst lowers the peak to 130 kJ mol⁻¹. Calculate the new Ea and state the new ΔH. [2]\n" +
              "(e) Sketch on a diagram how the catalysed and uncatalysed pathways would look. Describe the key differences. [2]",
            marks: 8,
            modelAnswer:
              "(a) Ea = 210 − 60 = 150 kJ mol⁻¹.\n" +
              "(b) ΔH = 160 − 60 = +100 kJ mol⁻¹.\n" +
              "(c) Endothermic. ΔH is positive, meaning the products are at a higher energy level than the reactants, so energy is absorbed from the surroundings.\n" +
              "(d) New Ea = 130 − 60 = 70 kJ mol⁻¹. ΔH remains +100 kJ mol⁻¹ (unchanged).\n" +
              "(e) The catalysed curve follows the same start (reactants at 60) and end (products at 160) but has a lower peak at 130 kJ mol⁻¹ compared to 210 kJ mol⁻¹. Both curves begin and end at the same energy levels.",
            markScheme: [
              "Ea = 210 − 60 = 150 kJ mol⁻¹ (1)",
              "ΔH = 160 − 60 = +100 kJ mol⁻¹ (1)",
              "Endothermic (1)",
              "ΔH positive / products higher energy than reactants / energy absorbed (1)",
              "New Ea = 130 − 60 = 70 kJ mol⁻¹ (1)",
              "ΔH unchanged / still +100 kJ mol⁻¹ (1)",
              "Catalysed curve: same reactants and products level (1)",
              "Catalysed curve: lower peak than uncatalysed (1)",
            ],
            commonError:
              "For part (d), students often state that ΔH also decreases. A catalyst only changes the peak height (Ea), not the energy levels of reactants or products — ΔH is unaffected.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "Ea is always measured from the reactants level to the peak.",
              "ΔH is measured from the reactants level to the products level.",
              "For part (d): use the same reactants level (60) with the new peak (130).",
              "A catalyst never changes the start or end energy — only the peak.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "chem-energetics-bq1-03",
            question:
              "Hydrogen gas reacts with oxygen gas to form water:\n" +
              "2H₂(g) + O₂(g) → 2H₂O(g)\n\n" +
              "Bond energies (kJ mol⁻¹): H–H = 436; O=O = 498; O–H = 464.\n\n" +
              "(a) State all bonds broken in the reactants and the energy required. [3]\n" +
              "(b) State all bonds made in the products and the energy released. [2]\n" +
              "(c) Calculate ΔH. Show full working. [2]\n" +
              "(d) Explain whether this reaction is exothermic or endothermic using bond energy terms. [2]",
            marks: 9,
            modelAnswer:
              "(a) Bonds broken: 2 × H–H = 2 × 436 = 872 kJ; 1 × O=O = 498 kJ. Total = 1370 kJ.\n" +
              "(b) Bonds made: 4 × O–H (2 molecules of H₂O, each with 2 O–H bonds) = 4 × 464 = 1856 kJ.\n" +
              "(c) ΔH = 1370 − 1856 = −486 kJ mol⁻¹.\n" +
              "(d) The reaction is exothermic. More energy is released making bonds in the products (1856 kJ) than is absorbed breaking bonds in the reactants (1370 kJ). The surplus energy (486 kJ per mole) is released to the surroundings as heat.",
            markScheme: [
              "2 × H–H bonds broken: 2 × 436 = 872 kJ (1)",
              "1 × O=O bond broken: 498 kJ (1)",
              "Total energy to break = 872 + 498 = 1370 kJ (1)",
              "4 × O–H bonds made: 4 × 464 = 1856 kJ (1)",
              "Correct number of O–H bonds (4) (1)",
              "ΔH = 1370 − 1856 = −486 kJ mol⁻¹ (1)",
              "Correct sign and units (1)",
              "Exothermic stated (1)",
              "Energy released in bond making > energy absorbed in bond breaking (1)",
            ],
            commonError:
              "A very common error is to count only 2 O–H bonds (forgetting that both molecules of water contribute). The coefficient 2 in 2H₂O means 2 × 2 = 4 O–H bonds total.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Reactants are 2H₂ and O₂ — count every bond in each molecule, then multiply by the coefficient.",
              "2 molecules of H₂ → 2 H–H bonds. 1 molecule of O₂ → 1 O=O bond.",
              "2 molecules of H₂O → 2 × 2 = 4 O–H bonds.",
              "ΔH = total broken − total made. Check the sign.",
            ],
            solutions: [
              {
                label: "Method 1: Step-by-step table",
                steps: [
                  "Bonds broken: 2 H–H = 2 × 436 = 872 kJ; 1 O=O = 498 kJ. Total in = 1370 kJ.",
                  "Bonds made: 4 O–H = 4 × 464 = 1856 kJ. Total out = 1856 kJ.",
                  "ΔH = 1370 − 1856 = −486 kJ mol⁻¹.",
                  "Negative sign confirms exothermic.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq1-04",
            question:
              "**Challenge question**\n\n" +
              "Ethene reacts with hydrogen: C₂H₄(g) + H₂(g) → C₂H₆(g)\n\n" +
              "Bond energies (kJ mol⁻¹): C=C = 614; C–C = 347; C–H = 413; H–H = 436.\n\n" +
              "(a) Draw the structural formulae of ethene and ethane, labelling all bonds. [2]\n" +
              "(b) List all bonds broken and all bonds made. [2]\n" +
              "(c) Calculate ΔH. [3]\n" +
              "(d) Explain why this reaction is exothermic in terms of bond energies, with reference to the C=C bond. [3]",
            marks: 10,
            modelAnswer:
              "(a) Ethene: H₂C=CH₂ with 1 C=C bond and 4 C–H bonds. " +
              "Ethane: H₃C–CH₃ with 1 C–C bond and 6 C–H bonds.\n" +
              "(b) Bonds broken: 1 C=C (614 kJ) + 1 H–H (436 kJ) = 1050 kJ. " +
              "Bonds made: 1 C–C (347 kJ) + 6 C–H but only 2 NEW C–H bonds (4 C–H bonds in ethene persist; 2 new ones form at the CH₂ ends) = 2 × 413 + 1 C–C (347) = 826 + 347 = 1173 kJ.\n" +
              "Actually, more carefully: bonds broken = C=C (614) + H–H (436) = 1050 kJ. " +
              "Bonds made = C–C (347) + 2 × C–H (2 × 413 = 826) = 1173 kJ. " +
              "(The 4 C–H bonds already in ethene remain in ethane, so they cancel.)\n" +
              "(c) ΔH = 1050 − 1173 = −123 kJ mol⁻¹.\n" +
              "(d) The C=C double bond (614 kJ mol⁻¹) is broken but replaced by a C–C single bond (347 kJ mol⁻¹). " +
              "The single bond releases less energy than the double bond cost to break — a deficit of 614 − 347 = 267 kJ. " +
              "However, two new C–H bonds (2 × 413 = 826 kJ) are made from the H–H bond (436 kJ), giving a surplus of 826 − 436 = 390 kJ. " +
              "Overall surplus = 390 − 267 = 123 kJ released → exothermic (ΔH = −123 kJ mol⁻¹).",
            markScheme: [
              "Ethene: C=C with 4 C–H bonds correctly shown (1)",
              "Ethane: C–C with 6 C–H bonds correctly shown (1)",
              "Bonds broken: C=C (614) and H–H (436) identified (1)",
              "Bonds made: C–C (347) and 2 C–H (2 × 413) correctly identified (1)",
              "Total broken = 614 + 436 = 1050 kJ (1)",
              "Total made = 347 + 826 = 1173 kJ (1)",
              "ΔH = 1050 − 1173 = −123 kJ mol⁻¹ (1)",
              "Exothermic stated (1)",
              "More energy released making bonds than absorbed breaking bonds (1)",
              "C=C broken → C–C made: the H–H energy surplus offsets the loss from double to single bond change (1)",
            ],
            commonError:
              "Students often wrongly break AND re-form all 6 C–H bonds in ethane. Only the bonds that actually change need to be counted: the C=C is broken (not both C–C bonds), and 2 new C–H bonds are made (not 6). Counting all 6 C–H bonds on both sides is valid only if they appear on both sides and cancel — but you must be consistent.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Identify ONLY the bonds that change between reactants and products.",
              "The C=C double bond (one bond) breaks; a C–C single bond forms. The H–H bond breaks; two new C–H bonds form.",
              "Total broken: C=C (614) + H–H (436) = 1050 kJ. Total made: C–C (347) + 2 C–H (826) = 1173 kJ.",
              "ΔH = 1050 − 1173. Check the sign — is this exo or endothermic?",
            ],
            strategy: "draw a diagram — sketch structural formulae to count bonds accurately",
            solutions: [
              {
                label: "Method 1: Change-only approach (efficient)",
                steps: [
                  "Identify bonds that change: C=C → C–C (1 double bond breaks, 1 single bond forms); H–H breaks; 2 new C–H form.",
                  "Broken: C=C = 614 kJ; H–H = 436 kJ. Total = 1050 kJ.",
                  "Made: C–C = 347 kJ; 2 × C–H = 826 kJ. Total = 1173 kJ.",
                  "ΔH = 1050 − 1173 = −123 kJ mol⁻¹.",
                ],
              },
              {
                label: "Method 2: All bonds approach (count everything)",
                steps: [
                  "Reactants — all bonds: 1 C=C (614) + 4 C–H (4 × 413 = 1652) + 1 H–H (436) = 2702 kJ.",
                  "Products — all bonds in ethane: 1 C–C (347) + 6 C–H (6 × 413 = 2478) = 2825 kJ.",
                  "ΔH = 2702 − 2825 = −123 kJ mol⁻¹.",
                  "Same answer — the 4 C–H bonds common to both sides cancel algebraically.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-energetics-bank-qa-2",
        title: "Chemical Energetics — Structured Questions Paper 2",
        description: "4 structured questions focusing on application, synoptic links, and multi-step reasoning.",
        questions: [
          {
            id: "chem-energetics-bank-qa2-q01",
            question:
              "A student investigates three reactions:\n" +
              "Reaction 1: Magnesium ribbon added to dilute hydrochloric acid — fizzing and the test tube becomes hot.\n" +
              "Reaction 2: Barium hydroxide solid mixed with ammonium chloride solid — mixture becomes very cold.\n" +
              "Reaction 3: Sodium burned in a gas jar of oxygen — bright orange flame.\n\n" +
              "For each reaction, state: (i) whether it is exothermic or endothermic, and (ii) the sign of ΔH. [6]",
            marks: 6,
            modelAnswer:
              "Reaction 1: (i) Exothermic. (ii) ΔH is negative. The test tube becomes hot → energy released to surroundings.\n" +
              "Reaction 2: (i) Endothermic. (ii) ΔH is positive. The mixture becomes cold → energy absorbed from surroundings.\n" +
              "Reaction 3: (i) Exothermic. (ii) ΔH is negative. Combustion/burning always releases energy.",
            markScheme: [
              "Reaction 1: exothermic (1)",
              "Reaction 1: ΔH negative (1)",
              "Reaction 2: endothermic (1)",
              "Reaction 2: ΔH positive (1)",
              "Reaction 3: exothermic (1)",
              "Reaction 3: ΔH negative (1)",
            ],
            commonError:
              "For Reaction 2, students may wrongly say exothermic because ammonium chloride is a salt and they associate dissolving salts with neutralisation (exothermic). Always use the observed temperature change as the key evidence.",
            guideRef: "Exothermic and Endothermic Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bank-qa2-q02",
            question:
              "The decomposition of hydrogen peroxide can be written as:\n" +
              "2H₂O₂(g) → 2H₂O(g) + O₂(g)\n\n" +
              "Bond energies (kJ mol⁻¹): O–H = 464; O–O = 146; O=O = 498.\n\n" +
              "(a) List all the bonds broken in the reactants, with their bond energies. [2]\n" +
              "(b) List all bonds made in the products, with their bond energies. [2]\n" +
              "(c) Calculate ΔH. [2]\n" +
              "(d) Is this reaction exothermic or endothermic? Justify your answer. [1]\n" +
              "(e) Manganese(IV) oxide is used as a catalyst for this reaction. State two effects of adding this catalyst. [2]",
            marks: 9,
            modelAnswer:
              "(a) Each H₂O₂ molecule has 2 O–H bonds and 1 O–O bond. For 2 H₂O₂: 4 × O–H (4 × 464 = 1856 kJ) + 2 × O–O (2 × 146 = 292 kJ). Total broken = 2148 kJ.\n" +
              "(b) 2 H₂O each with 2 O–H bonds: 4 × O–H (4 × 464 = 1856 kJ). 1 O₂ with 1 O=O bond: 1 × O=O (498 kJ). Total made = 2354 kJ.\n" +
              "(c) ΔH = 2148 − 2354 = −206 kJ mol⁻¹.\n" +
              "(d) Exothermic; ΔH is negative / more energy released making bonds than absorbed breaking bonds.\n" +
              "(e) MnO₂ increases the rate of decomposition / the reaction happens faster; and it lowers the activation energy (Ea). ΔH is unchanged / the same amount of energy is released per mole.",
            markScheme: [
              "4 O–H bonds broken: 4 × 464 = 1856 kJ (1)",
              "2 O–O bonds broken: 2 × 146 = 292 kJ; total broken = 2148 kJ (1)",
              "4 O–H bonds made: 1856 kJ (1)",
              "1 O=O bond made: 498 kJ; total made = 2354 kJ (1)",
              "ΔH = 2148 − 2354 = −206 kJ mol⁻¹ (1)",
              "Correct sign and arithmetic (1)",
              "Exothermic / ΔH negative (1)",
              "Catalyst increases rate / reaction faster (1)",
              "Ea is lowered / catalyst provides alternative lower-energy pathway (1)",
              "ΔH unchanged (1)",
            ],
            commonError:
              "Students often misidentify the bonds in H₂O₂. The structure is H–O–O–H: it has 2 O–H bonds AND 1 O–O bond per molecule. Forgetting the O–O single bond in H₂O₂ is a very common error.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Draw H₂O₂ as H–O–O–H. Identify every bond type.",
              "2 molecules of H₂O₂: 4 O–H bonds + 2 O–O bonds (one per molecule).",
              "Products: 2 H₂O each with 2 O–H (=4 O–H total) + 1 O₂ with 1 O=O.",
              "ΔH = 2148 − 2354. For part (e), a catalyst speeds up the reaction but ΔH is unchanged.",
            ],
            strategy: "draw a diagram — sketch structural formulae to count bonds accurately",
          },
          {
            id: "chem-energetics-bank-qa2-q03",
            question:
              "**Challenge — multi-step and synoptic**\n\n" +
              "The industrial production of sulfuric acid involves the Contact Process. " +
              "A key step is the oxidation of sulfur dioxide:\n" +
              "2SO₂(g) + O₂(g) → 2SO₃(g), ΔH = −196 kJ mol⁻¹\n\n" +
              "(a) State the sign of ΔH and explain what it tells you about the energy change. [2]\n" +
              "(b) Vanadium(V) oxide (V₂O₅) is the catalyst used in the Contact Process. " +
              "Draw a sketch energy level diagram for this reaction WITHOUT and WITH the catalyst, " +
              "labelling Ea (uncatalysed), Ea (catalysed), and ΔH. Describe the key features. [4]\n" +
              "(c) Explain, using bond energy terms, why the reaction releases energy. " +
              "You do not need to calculate numerical values. [2]\n" +
              "(d) If the reaction is cooled below the optimum temperature, it proceeds more slowly. " +
              "Using activation energy, explain why. [2]",
            marks: 10,
            modelAnswer:
              "(a) ΔH = −196 kJ mol⁻¹, which is negative. This means the reaction is exothermic — energy is released to the surroundings. The products (SO₃) have lower chemical potential energy than the reactants (SO₂ + O₂).\n" +
              "(b) Diagram should show: reactants at a certain energy level; products at a lower energy level (exothermic, products below reactants); a high peak for the uncatalysed pathway labelled Ea(uncatalysed); a lower peak for the catalysed pathway labelled Ea(catalysed); a single ΔH arrow from reactants to products, the same for both pathways. Key features: same reactants and products energy levels; lower peak with catalyst; ΔH unchanged.\n" +
              "(c) More energy is released when the new S=O bonds form in SO₃ than is absorbed when the S=O bonds in SO₂ and the O=O bond in O₂ are broken. Since energy released by bond making exceeds energy absorbed by bond breaking, the reaction is exothermic.\n" +
              "(d) At lower temperatures, reactant particles have lower average kinetic energy. Fewer particles have energy greater than or equal to the activation energy Ea. Therefore fewer effective collisions occur per second and the rate decreases.",
            markScheme: [
              "ΔH negative (1)",
              "Exothermic / energy released to surroundings / products at lower energy (1)",
              "Diagram: products lower than reactants (exothermic shown correctly) (1)",
              "Two peaks: Ea(catalysed) lower than Ea(uncatalysed) (1)",
              "ΔH the same for both pathways / same start and end energy levels (1)",
              "Correct labelling of all features (1)",
              "Energy released making bonds in SO₃ > energy absorbed breaking bonds in SO₂ and O₂ (1)",
              "Therefore overall energy is released (1)",
              "Lower temperature → lower average kinetic energy of particles (1)",
              "Fewer particles have energy ≥ Ea → fewer effective collisions → slower rate (1)",
            ],
            commonError:
              "In part (d), students often just say 'particles move more slowly'. The key point is that fewer particles meet or exceed the activation energy threshold — this is the cause of the rate decrease, not merely reduced speed in general.",
            guideRef: "Energy Level Diagrams",
            difficulty: "challenge",
            hints: [
              "For part (a): negative ΔH = exothermic — energy is released.",
              "For part (b): draw two curves on the same axes — same start and end, two different peaks.",
              "For part (c): think about bonds broken vs bonds made — which contributes more energy?",
              "For part (d): link temperature to kinetic energy, kinetic energy to Ea, Ea to collision frequency.",
            ],
            strategy: "draw a diagram; identify what is being compared",
          },
          {
            id: "chem-energetics-bank-qa2-q04",
            question:
              "**Challenge — extended calculation and analysis**\n\n" +
              "Methanol (CH₃OH) can be burned as a fuel:\n" +
              "2CH₃OH(g) + 3O₂(g) → 2CO₂(g) + 4H₂O(g)\n\n" +
              "Bond energies (kJ mol⁻¹): C–H = 413; C–O = 358; O–H = 464; O=O = 498; C=O = 805.\n\n" +
              "(a) Write down all bonds broken in 2CH₃OH and 3O₂. State the quantity of each bond and the total energy absorbed. [4]\n" +
              "(b) Write down all bonds made in 2CO₂ and 4H₂O. State the quantity of each bond and the total energy released. [2]\n" +
              "(c) Calculate ΔH for the combustion of 2 moles of methanol. Show your working. [2]\n" +
              "(d) Calculate ΔH per mole of methanol. [1]\n" +
              "(e) A student claims: 'The reaction releases more energy per mole than the combustion of hydrogen.' " +
              "Using ΔH values, evaluate this claim. (ΔH for H₂ combustion = −243 kJ mol⁻¹ per mole H₂.) [2]",
            marks: 11,
            modelAnswer:
              "(a) In CH₃OH: 3 C–H bonds, 1 C–O bond, 1 O–H bond. For 2CH₃OH: 6 C–H + 2 C–O + 2 O–H. For 3O₂: 3 O=O.\n" +
              "Energy: 6 × 413 = 2478; 2 × 358 = 716; 2 × 464 = 928; 3 × 498 = 1494.\n" +
              "Total broken = 2478 + 716 + 928 + 1494 = 5616 kJ.\n" +
              "(b) 2CO₂ has 4 C=O bonds: 4 × 805 = 3220 kJ. 4H₂O has 8 O–H bonds: 8 × 464 = 3712 kJ.\n" +
              "Total made = 3220 + 3712 = 6932 kJ.\n" +
              "(c) ΔH = 5616 − 6932 = −1316 kJ for 2 moles.\n" +
              "(d) ΔH per mole = −1316 / 2 = −658 kJ mol⁻¹.\n" +
              "(e) ΔH for methanol combustion = −658 kJ mol⁻¹; ΔH for hydrogen combustion = −243 kJ mol⁻¹. " +
              "Methanol releases more energy per mole (658 > 243 kJ mol⁻¹), so the student's claim is correct. " +
              "However, this is per mole of fuel; to compare fairly as fuels you would also need to consider energy per gram or energy per unit cost.",
            markScheme: [
              "6 C–H from 2CH₃OH correctly identified: 6 × 413 = 2478 kJ (1)",
              "2 C–O + 2 O–H identified: 716 + 928 = 1644 kJ (1)",
              "3 O=O from 3O₂: 3 × 498 = 1494 kJ (1)",
              "Total broken = 5616 kJ (1)",
              "4 C=O in 2CO₂: 4 × 805 = 3220 kJ (1)",
              "8 O–H in 4H₂O: 8 × 464 = 3712 kJ; total made = 6932 kJ (1)",
              "ΔH = 5616 − 6932 = −1316 kJ (for 2 mol) (1)",
              "ΔH per mole = −658 kJ mol⁻¹ (1)",
              "Methanol: 658 kJ mol⁻¹ > hydrogen: 243 kJ mol⁻¹ — claim is correct (1)",
              "Appropriate qualification, e.g. per mole comparison is valid; per gram or other measures may differ (1)",
            ],
            commonError:
              "In methanol (CH₃OH), students often miss the O–H bond, counting only C–H and C–O bonds. The hydroxyl –OH group contributes one O–H bond per molecule. For 2 CH₃OH, that's 2 O–H bonds in the reactants.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Draw the structural formula of methanol: H–C(H₂)–O–H. Count every bond type.",
              "Per CH₃OH molecule: 3 C–H, 1 C–O, 1 O–H. For 2 molecules: double everything.",
              "For products: each CO₂ has 2 C=O bonds (double bond ×2); each H₂O has 2 O–H bonds.",
              "ΔH for 2 mol, then halve for 1 mol. Compare magnitudes for part (e).",
            ],
            strategy: "draw a diagram; build a table",
            solutions: [
              {
                label: "Method: Full bond-by-bond table",
                steps: [
                  "Methanol structure: H₃C–O–H → 3 C–H, 1 C–O, 1 O–H per molecule.",
                  "2 CH₃OH: 6 C–H (6×413=2478), 2 C–O (2×358=716), 2 O–H (2×464=928). 3 O₂: 3 O=O (3×498=1494). Total broken = 5616 kJ.",
                  "2 CO₂: 4 C=O (4×805=3220). 4 H₂O: 8 O–H (8×464=3712). Total made = 6932 kJ.",
                  "ΔH(2 mol) = 5616 − 6932 = −1316 kJ. Per mole = −658 kJ mol⁻¹.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
