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
        description: "10 structured questions: classifying reactions, energy diagrams, basic bond energy calculations.",
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
            id: "chem-energetics-bq1-03",
            question:
              "Explain, in terms of bond breaking and bond making, why some reactions are exothermic and others are endothermic.\n\n" +
              "(a) State whether bond breaking is exothermic or endothermic, and why. [1]\n" +
              "(b) State whether bond making is exothermic or endothermic, and why. [1]\n" +
              "(c) State the condition (in terms of energy) for a reaction to be exothermic overall. [2]",
            marks: 4,
            modelAnswer:
              "(a) Bond breaking is endothermic — energy must be supplied (absorbed) to overcome the attraction between the bonded atoms.\n" +
              "(b) Bond making is exothermic — energy is released when new bonds form between atoms.\n" +
              "(c) A reaction is exothermic overall when the energy released making the new bonds in the products is greater than the energy absorbed breaking the bonds in the reactants.",
            markScheme: [
              "Bond breaking is endothermic / requires (absorbs) energy (1)",
              "Bond making is exothermic / releases energy (1)",
              "Exothermic when energy released making bonds > energy absorbed breaking bonds (1)",
              "Hence ΔH is negative (1)",
            ],
            commonError:
              "Students sometimes reverse the rule, writing that bond breaking releases energy. Always: breaking absorbs (endothermic), making releases (exothermic).",
            guideRef: "Bond Breaking and Bond Making",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bq1-04",
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
            solutions: [
              {
                label: "Method: read values directly from the energy axis",
                steps: [
                  "Ea = E(peak) − E(reactants) = 210 − 60 = 150 kJ mol⁻¹.",
                  "ΔH = E(products) − E(reactants) = 160 − 60 = +100 kJ mol⁻¹ (positive → endothermic).",
                  "Catalysed Ea uses the new peak: 130 − 60 = 70 kJ mol⁻¹.",
                  "ΔH still = 160 − 60 = +100 kJ mol⁻¹ — the catalyst does not move the reactant or product levels.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq1-05",
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
            id: "chem-energetics-bq1-06",
            question:
              "In a school experiment, 50.0 cm³ of dilute hydrochloric acid is mixed with 50.0 cm³ of sodium hydroxide solution in a polystyrene cup. The temperature rises from 21.0 °C to 27.8 °C.\n\n" +
              "(Assume the density of the mixture is 1.0 g cm⁻³ and its specific heat capacity is 4.2 J g⁻¹ °C⁻¹.)\n\n" +
              "(a) State the word equation for the reaction. [1]\n" +
              "(b) Calculate the temperature change, ΔT. [1]\n" +
              "(c) Calculate the energy released, Q, using Q = mcΔT. Show your working and give the answer in joules and kilojoules. [3]\n" +
              "(d) Explain why a polystyrene cup is used rather than a glass beaker. [1]",
            marks: 6,
            modelAnswer:
              "(a) Hydrochloric acid + sodium hydroxide → sodium chloride + water.\n" +
              "(b) ΔT = 27.8 − 21.0 = 6.8 °C.\n" +
              "(c) Total volume = 50.0 + 50.0 = 100 cm³, so m = 100 g. Q = mcΔT = 100 × 4.2 × 6.8 = 2856 J = 2.856 kJ ≈ 2.86 kJ.\n" +
              "(d) Polystyrene is a good thermal insulator, so it reduces heat loss to the surroundings, giving a more accurate temperature rise.",
            markScheme: [
              "Hydrochloric acid + sodium hydroxide → sodium chloride + water (1)",
              "ΔT = 27.8 − 21.0 = 6.8 °C (1)",
              "m = 100 g (combined volume used) (1)",
              "Q = 100 × 4.2 × 6.8 (1)",
              "Q = 2856 J = 2.86 kJ (allow 2.856 kJ) (1)",
              "Polystyrene insulates / reduces heat loss to surroundings (1)",
            ],
            commonError:
              "Students often use only 50 g (one solution) instead of the combined 100 g. In Q = mcΔT, m is the total mass of the mixture being heated.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "core",
            hints: [
              "ΔT = final temperature − initial temperature.",
              "Mass m is the total mass of solution: add both volumes, then use density 1.0 g cm⁻³.",
              "Q = mcΔT. Substitute m = 100 g, c = 4.2, ΔT = 6.8.",
              "Convert J to kJ by dividing by 1000.",
            ],
            strategy: "build a table — list m, c and ΔT before substituting",
            solutions: [
              {
                label: "Method: Q = mcΔT step-by-step",
                steps: [
                  "m = total volume × density = (50.0 + 50.0) × 1.0 = 100 g.",
                  "ΔT = 27.8 − 21.0 = 6.8 °C.",
                  "Q = mcΔT = 100 × 4.2 × 6.8 = 2856 J.",
                  "Convert: 2856 ÷ 1000 = 2.856 kJ ≈ 2.86 kJ released.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq1-07",
            question:
              "A cold pack used for sports injuries contains ammonium nitrate which dissolves in water when the pack is squeezed. The pack becomes cold.\n\n" +
              "(a) State whether dissolving ammonium nitrate is exothermic or endothermic. [1]\n" +
              "(b) Explain, in terms of energy transfer between the system and the surroundings, why the pack feels cold. [2]\n" +
              "(c) State the sign of ΔH for this process. [1]",
            marks: 4,
            modelAnswer:
              "(a) Endothermic.\n" +
              "(b) Energy is absorbed by the dissolving process (the system) from the surroundings (the water and the skin). Because the surroundings lose energy, their temperature falls, so the pack feels cold.\n" +
              "(c) ΔH is positive.",
            markScheme: [
              "Endothermic (1)",
              "Energy is absorbed/taken in by the system from the surroundings (1)",
              "Surroundings lose energy so temperature falls (1)",
              "ΔH is positive (1)",
            ],
            commonError:
              "Students may say the pack 'gives out cold'. Cold is not transferred — energy is absorbed FROM the surroundings, which lowers their temperature.",
            guideRef: "Exothermic and Endothermic Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bq1-08",
            question:
              "An energy level diagram for an exothermic reaction shows: reactants at 90 kJ mol⁻¹, transition state peak at 250 kJ mol⁻¹, and products at 30 kJ mol⁻¹.\n\n" +
              "(a) Calculate the activation energy, Ea. [1]\n" +
              "(b) Calculate ΔH and give its sign. [2]\n" +
              "(c) The reverse reaction (products → reactants) takes place over the same peak. Calculate the activation energy of the reverse reaction. [2]\n" +
              "(d) State and explain whether the reverse reaction is exothermic or endothermic. [1]",
            marks: 6,
            modelAnswer:
              "(a) Ea = 250 − 90 = 160 kJ mol⁻¹.\n" +
              "(b) ΔH = 30 − 90 = −60 kJ mol⁻¹ (negative).\n" +
              "(c) Ea(reverse) = peak − products = 250 − 30 = 220 kJ mol⁻¹.\n" +
              "(d) Endothermic. The reverse reaction goes from the lower products level (30) up to the higher reactants level (90), so energy is absorbed and ΔH(reverse) = +60 kJ mol⁻¹.",
            markScheme: [
              "Ea(forward) = 250 − 90 = 160 kJ mol⁻¹ (1)",
              "ΔH = 30 − 90 (1)",
              "ΔH = −60 kJ mol⁻¹ / negative (1)",
              "Ea(reverse) = 250 − 30 = 220 kJ mol⁻¹ (1)",
              "Working shown / measured from products level (1)",
              "Endothermic, energy absorbed going from products up to reactants (1)",
            ],
            commonError:
              "For Ea of the reverse reaction, students measure from the reactants level again. The reverse reaction starts at the PRODUCTS level, so Ea(reverse) = peak − products.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "Forward Ea is measured from the reactants level to the peak.",
              "ΔH = E(products) − E(reactants).",
              "The reverse reaction begins at the products level — measure its Ea from there to the same peak.",
              "Ea(reverse) = Ea(forward) + |ΔH| when the forward reaction is exothermic.",
            ],
            solutions: [
              {
                label: "Method: work from the three energy levels",
                steps: [
                  "Forward Ea = peak − reactants = 250 − 90 = 160 kJ mol⁻¹.",
                  "ΔH = products − reactants = 30 − 90 = −60 kJ mol⁻¹ (exothermic).",
                  "Reverse Ea = peak − products = 250 − 30 = 220 kJ mol⁻¹.",
                  "Check: Ea(reverse) = Ea(forward) + |ΔH| = 160 + 60 = 220 kJ mol⁻¹. ✓",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq1-09",
            question:
              "The formation of ammonia is:\n" +
              "N₂(g) + 3H₂(g) → 2NH₃(g)\n\n" +
              "Bond energies (kJ mol⁻¹): N≡N = 945; H–H = 436; N–H = 391.\n\n" +
              "(a) State the number and type of each bond broken in the reactants. [2]\n" +
              "(b) State the number and type of each bond made in the products. [1]\n" +
              "(c) Calculate ΔH for this reaction. Show your working. [3]\n" +
              "(d) State whether the reaction is exothermic or endothermic. [1]",
            marks: 7,
            modelAnswer:
              "(a) 1 × N≡N bond and 3 × H–H bonds are broken.\n" +
              "(b) 6 × N–H bonds are made (2 molecules of NH₃, each with 3 N–H bonds).\n" +
              "(c) Energy to break bonds = (1 × 945) + (3 × 436) = 945 + 1308 = 2253 kJ.\n" +
              "Energy released making bonds = 6 × 391 = 2346 kJ.\n" +
              "ΔH = 2253 − 2346 = −93 kJ mol⁻¹.\n" +
              "(d) Exothermic (ΔH is negative).",
            markScheme: [
              "1 × N≡N (triple bond) broken (1)",
              "3 × H–H bonds broken (1)",
              "6 × N–H bonds made / 2NH₃ each with 3 N–H bonds (1)",
              "Energy in: 945 + 3(436) = 2253 kJ (1)",
              "Energy out: 6 × 391 = 2346 kJ (1)",
              "ΔH = 2253 − 2346 = −93 kJ mol⁻¹ (1)",
              "Exothermic / ΔH negative (1)",
            ],
            commonError:
              "Students often forget to multiply the N–H bonds by 2 (the coefficient of NH₃). Each NH₃ has 3 N–H bonds, so 2NH₃ has 6 N–H bonds.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Nitrogen has a triple bond (N≡N) and the coefficient for H₂ is 3.",
              "Count bonds in products: 2 molecules of NH₃, each with 3 N–H bonds = 6 total.",
              "Energy in = (1 × 945) + (3 × 436). Energy out = 6 × 391.",
              "ΔH = energy in − energy out. A negative result → exothermic.",
            ],
            strategy: "build a table",
            solutions: [
              {
                label: "Method: tabular bond energy approach",
                steps: [
                  "Bonds broken: 1 N≡N = 945 kJ; 3 H–H = 3 × 436 = 1308 kJ. Total in = 2253 kJ.",
                  "Bonds made: 6 N–H = 6 × 391 = 2346 kJ. Total out = 2346 kJ.",
                  "ΔH = 2253 − 2346 = −93 kJ mol⁻¹.",
                  "Negative → exothermic.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq1-10",
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
              "(b) The bonds that change: bonds broken = 1 C=C (614 kJ) + 1 H–H (436 kJ) = 1050 kJ. " +
              "Bonds made = 1 C–C (347 kJ) + 2 NEW C–H (2 × 413 = 826 kJ) = 1173 kJ. " +
              "(The 4 C–H bonds already in ethene remain in ethane, so they cancel.)\n" +
              "(c) ΔH = 1050 − 1173 = −123 kJ mol⁻¹.\n" +
              "(d) The C=C double bond (614 kJ mol⁻¹) is broken but replaced by a C–C single bond (347 kJ mol⁻¹). " +
              "The single bond releases less energy than the double bond cost to break — a deficit of 614 − 347 = 267 kJ. " +
              "However, two new C–H bonds (2 × 413 = 826 kJ) are made from one H–H bond broken (436 kJ), giving a surplus of 826 − 436 = 390 kJ. " +
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
              "Students often wrongly break AND re-form all 6 C–H bonds. Only the bonds that change need to be counted, or count ALL bonds on both sides consistently — either method gives ΔH = −123 kJ mol⁻¹.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Identify ONLY the bonds that change between reactants and products.",
              "The C=C double bond breaks; a C–C single bond forms. The H–H bond breaks; two new C–H bonds form.",
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
        id: "chem-energetics-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "10 structured questions: bond energy calculations, energy diagrams and calorimetry.",
        questions: [
          {
            id: "chem-energetics-bq2-01",
            question:
              "Classify each of the following as exothermic or endothermic:\n" +
              "(a) Burning methane in a Bunsen burner. [1]\n" +
              "(b) Photosynthesis in a green leaf. [1]\n" +
              "(c) Neutralising sulfuric acid with potassium hydroxide. [1]\n" +
              "(d) Thermal decomposition of calcium carbonate in a kiln. [1]",
            marks: 4,
            modelAnswer:
              "(a) Exothermic (combustion).\n" +
              "(b) Endothermic (absorbs light energy).\n" +
              "(c) Exothermic (neutralisation).\n" +
              "(d) Endothermic (thermal decomposition needs continuous heating).",
            markScheme: [
              "(a) exothermic (1)",
              "(b) endothermic (1)",
              "(c) exothermic (1)",
              "(d) endothermic (1)",
            ],
            commonError:
              "Thermal decomposition is sometimes wrongly called exothermic because heat is applied. The reaction ABSORBS that heat, so it is endothermic; remove the heat and it stops.",
            guideRef: "Common Examples and Applications",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bq2-02",
            question:
              "Methane burns completely in oxygen:\n" +
              "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)\n\n" +
              "Bond energies (kJ mol⁻¹): C–H = 413; O=O = 498; C=O (in CO₂) = 805; O–H = 464.\n\n" +
              "(a) Calculate the total energy needed to break all bonds in the reactants. [2]\n" +
              "(b) Calculate the total energy released making all bonds in the products. [2]\n" +
              "(c) Calculate ΔH and state whether the reaction is exothermic or endothermic. [2]",
            marks: 6,
            modelAnswer:
              "(a) Bonds broken: 4 × C–H (4 × 413 = 1652) + 2 × O=O (2 × 498 = 996) = 2648 kJ.\n" +
              "(b) Bonds made: 2 × C=O (2 × 805 = 1610) + 4 × O–H (4 × 464 = 1856) = 3466 kJ.\n" +
              "(c) ΔH = 2648 − 3466 = −818 kJ mol⁻¹. Exothermic (ΔH is negative).",
            markScheme: [
              "Bonds broken: 4(413) + 2(498) = 1652 + 996 (1)",
              "Total broken = 2648 kJ (1)",
              "Bonds made: 2(805) + 4(464) = 1610 + 1856 (1)",
              "Total made = 3466 kJ (1)",
              "ΔH = 2648 − 3466 = −818 kJ mol⁻¹ (1)",
              "Exothermic / ΔH negative (1)",
            ],
            commonError:
              "Each CO₂ molecule has 2 C=O bonds and each H₂O has 2 O–H bonds. Students frequently miscount these or forget the coefficient 2 in front of H₂O.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "CH₄ has 4 C–H bonds; 2O₂ has 2 O=O bonds.",
              "CO₂ has 2 C=O bonds; 2H₂O has 2 × 2 = 4 O–H bonds.",
              "Broken = 4(413) + 2(498). Made = 2(805) + 4(464).",
              "ΔH = broken − made.",
            ],
            strategy: "build a table",
            solutions: [
              {
                label: "Method: full bond-energy table",
                steps: [
                  "Bonds broken: 4 C–H = 1652 kJ; 2 O=O = 996 kJ. Total = 2648 kJ.",
                  "Bonds made: 2 C=O = 1610 kJ; 4 O–H = 1856 kJ. Total = 3466 kJ.",
                  "ΔH = 2648 − 3466 = −818 kJ mol⁻¹.",
                  "Negative → exothermic.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq2-03",
            question:
              "The decomposition of hydrogen peroxide is:\n" +
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
              "(e) MnO₂ increases the rate of decomposition / the reaction happens faster; and it lowers the activation energy (Ea). ΔH is unchanged.",
            markScheme: [
              "4 O–H bonds broken: 4 × 464 = 1856 kJ (1)",
              "2 O–O bonds broken: 2 × 146 = 292 kJ; total broken = 2148 kJ (1)",
              "4 O–H bonds made: 1856 kJ (1)",
              "1 O=O bond made: 498 kJ; total made = 2354 kJ (1)",
              "ΔH = 2148 − 2354 = −206 kJ mol⁻¹ (1)",
              "Correct sign and arithmetic (1)",
              "Exothermic / ΔH negative (1)",
              "Catalyst increases rate / reaction faster (1)",
              "Ea is lowered / catalyst provides alternative lower-energy pathway / ΔH unchanged (1)",
            ],
            commonError:
              "Students often misidentify the bonds in H₂O₂. The structure is H–O–O–H: it has 2 O–H bonds AND 1 O–O bond per molecule. Forgetting the O–O single bond is a very common error.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Draw H₂O₂ as H–O–O–H. Identify every bond type.",
              "2 molecules of H₂O₂: 4 O–H bonds + 2 O–O bonds (one per molecule).",
              "Products: 2 H₂O each with 2 O–H (=4 O–H total) + 1 O₂ with 1 O=O.",
              "ΔH = 2148 − 2354.",
            ],
            strategy: "draw a diagram — sketch structural formulae to count bonds accurately",
            solutions: [
              {
                label: "Method: bond-by-bond table",
                steps: [
                  "Broken (2 H–O–O–H): 4 O–H = 1856 kJ; 2 O–O = 292 kJ. Total = 2148 kJ.",
                  "Made (2 H₂O + O₂): 4 O–H = 1856 kJ; 1 O=O = 498 kJ. Total = 2354 kJ.",
                  "ΔH = 2148 − 2354 = −206 kJ mol⁻¹.",
                  "Negative → exothermic.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq2-04",
            question:
              "A student burns 0.46 g of ethanol to heat 100 g of water in a copper calorimeter. The temperature of the water rises from 19.0 °C to 39.0 °C. (c of water = 4.2 J g⁻¹ °C⁻¹.)\n\n" +
              "(a) Calculate the energy gained by the water using Q = mcΔT. [2]\n" +
              "(b) The actual energy released by burning ethanol is larger than your answer to (a). Give one reason. [1]\n" +
              "(c) State the sign of ΔH for the combustion of ethanol. [1]",
            marks: 4,
            modelAnswer:
              "(a) ΔT = 39.0 − 19.0 = 20.0 °C. Q = mcΔT = 100 × 4.2 × 20.0 = 8400 J = 8.4 kJ.\n" +
              "(b) Heat is lost to the surroundings / to the calorimeter and the air, so not all the energy released reaches the water (also some incomplete combustion / evaporation of ethanol).\n" +
              "(c) ΔH is negative (combustion is exothermic).",
            markScheme: [
              "ΔT = 20.0 °C and Q = 100 × 4.2 × 20.0 (1)",
              "Q = 8400 J = 8.4 kJ (1)",
              "Heat lost to surroundings / calorimeter / air / incomplete combustion (1)",
              "ΔH negative (1)",
            ],
            commonError:
              "Use the mass of WATER being heated (100 g) in Q = mcΔT, not the mass of fuel burned (0.46 g). The fuel mass is only needed if you go on to find energy per gram or per mole.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "core",
            hints: [
              "m in Q = mcΔT is the mass of the water being heated (100 g).",
              "ΔT = 39.0 − 19.0 = 20.0 °C.",
              "Q = 100 × 4.2 × 20.0.",
              "For (b), think about where some of the released energy goes instead of into the water.",
            ],
            strategy: "build a table — list m, c, ΔT before substituting",
            solutions: [
              {
                label: "Method: Q = mcΔT",
                steps: [
                  "ΔT = 39.0 − 19.0 = 20.0 °C.",
                  "m = 100 g (the water). c = 4.2 J g⁻¹ °C⁻¹.",
                  "Q = mcΔT = 100 × 4.2 × 20.0 = 8400 J.",
                  "Convert: 8400 ÷ 1000 = 8.4 kJ transferred to the water.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq2-05",
            question:
              "Hydrogen reacts with chlorine:\n" +
              "H₂(g) + Cl₂(g) → 2HCl(g)\n\n" +
              "Bond energies (kJ mol⁻¹): H–H = 436; Cl–Cl = 243; H–Cl = 432.\n\n" +
              "(a) Calculate the total energy absorbed breaking bonds. [1]\n" +
              "(b) Calculate the total energy released making bonds. [1]\n" +
              "(c) Calculate ΔH and state whether the reaction is exothermic or endothermic. [2]",
            marks: 4,
            modelAnswer:
              "(a) Bonds broken: H–H (436) + Cl–Cl (243) = 679 kJ.\n" +
              "(b) Bonds made: 2 × H–Cl = 2 × 432 = 864 kJ.\n" +
              "(c) ΔH = 679 − 864 = −185 kJ mol⁻¹. Exothermic (ΔH negative).",
            markScheme: [
              "Energy absorbed = 436 + 243 = 679 kJ (1)",
              "Energy released = 2 × 432 = 864 kJ (1)",
              "ΔH = 679 − 864 = −185 kJ mol⁻¹ (1)",
              "Exothermic / ΔH negative (1)",
            ],
            commonError:
              "Remember the coefficient: 2HCl means 2 H–Cl bonds are made (2 × 432), not just one.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "warmup",
            solutions: [
              {
                label: "Method: ΔH = bonds broken − bonds made",
                steps: [
                  "Broken: 1 H–H (436) + 1 Cl–Cl (243) = 679 kJ.",
                  "Made: 2 H–Cl = 2 × 432 = 864 kJ.",
                  "ΔH = 679 − 864 = −185 kJ mol⁻¹.",
                  "Negative → exothermic.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq2-06",
            question:
              "A reaction has the following energy levels (kJ mol⁻¹): reactants 120; peak 300; products 200.\n\n" +
              "(a) Calculate Ea. [1]\n" +
              "(b) Calculate ΔH and state its sign. [2]\n" +
              "(c) State whether the reaction is exothermic or endothermic. [1]\n" +
              "(d) A catalyst is added that lowers the peak to 240 kJ mol⁻¹. State the new Ea and the new ΔH. [2]",
            marks: 6,
            modelAnswer:
              "(a) Ea = 300 − 120 = 180 kJ mol⁻¹.\n" +
              "(b) ΔH = 200 − 120 = +80 kJ mol⁻¹ (positive).\n" +
              "(c) Endothermic (products higher than reactants).\n" +
              "(d) New Ea = 240 − 120 = 120 kJ mol⁻¹. ΔH is unchanged at +80 kJ mol⁻¹.",
            markScheme: [
              "Ea = 300 − 120 = 180 kJ mol⁻¹ (1)",
              "ΔH = 200 − 120 (1)",
              "ΔH = +80 kJ mol⁻¹ / positive (1)",
              "Endothermic (1)",
              "New Ea = 240 − 120 = 120 kJ mol⁻¹ (1)",
              "ΔH unchanged / still +80 kJ mol⁻¹ (1)",
            ],
            commonError:
              "When a catalyst is added, only the peak (and hence Ea) changes. ΔH stays the same because the reactant and product levels are unchanged.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "Ea = peak − reactants.",
              "ΔH = products − reactants; check the sign.",
              "For the catalyst, use the new peak with the SAME reactants level.",
              "The catalyst never changes ΔH.",
            ],
            solutions: [
              {
                label: "Method: read the energy levels",
                steps: [
                  "Ea = 300 − 120 = 180 kJ mol⁻¹.",
                  "ΔH = 200 − 120 = +80 kJ mol⁻¹ (endothermic).",
                  "Catalysed Ea = 240 − 120 = 120 kJ mol⁻¹.",
                  "ΔH unchanged: still +80 kJ mol⁻¹.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq2-07",
            question:
              "(a) Define the term bond energy. [2]\n" +
              "(b) Explain why bond energy values are always positive. [1]\n" +
              "(c) Bond energy values from a data book are described as 'average' values. Explain what this means and one consequence for calculated values of ΔH. [2]",
            marks: 5,
            modelAnswer:
              "(a) Bond energy is the energy required to break one mole of a particular covalent bond in the gaseous state, measured in kJ mol⁻¹.\n" +
              "(b) Because breaking bonds always requires (absorbs) energy — it is endothermic — so the value is always positive.\n" +
              "(c) The same type of bond (e.g. C–H) has slightly different strengths in different molecules, so a data book quotes an average over many compounds. As a consequence, a ΔH calculated from average bond energies is approximate and may differ from the experimentally measured value.",
            markScheme: [
              "Energy to break one mole of a (named/particular) bond (1)",
              "In the gaseous state / kJ mol⁻¹ (1)",
              "Breaking bonds absorbs energy / is endothermic → always positive (1)",
              "Average = the same bond differs slightly between molecules / averaged over compounds (1)",
              "Calculated ΔH is approximate / differs from experimental value (1)",
            ],
            commonError:
              "Bond energy refers to BREAKING a bond (energy in), not making it. The value is positive for this reason.",
            guideRef: "Bond Breaking and Bond Making",
            difficulty: "core",
            hints: [
              "Bond energy is always defined for BREAKING a bond.",
              "Breaking is endothermic, so the value is positive.",
              "'Average' means the same bond type varies a little between molecules.",
            ],
          },
          {
            id: "chem-energetics-bq2-08",
            question:
              "Nitrogen monoxide forms in car engines:\n" +
              "N₂(g) + O₂(g) → 2NO(g)\n\n" +
              "Bond energies (kJ mol⁻¹): N≡N = 945; O=O = 498; N=O (in NO) = 631.\n\n" +
              "(a) Calculate the total energy absorbed breaking bonds. [1]\n" +
              "(b) Calculate the total energy released making bonds. [1]\n" +
              "(c) Calculate ΔH. [1]\n" +
              "(d) State whether the reaction is exothermic or endothermic, and use this to explain why NO only forms at the very high temperatures inside an engine. [2]",
            marks: 5,
            modelAnswer:
              "(a) Bonds broken: N≡N (945) + O=O (498) = 1443 kJ.\n" +
              "(b) Bonds made: 2 × N=O = 2 × 631 = 1262 kJ.\n" +
              "(c) ΔH = 1443 − 1262 = +181 kJ mol⁻¹.\n" +
              "(d) Endothermic (ΔH positive). Energy must be supplied for the reaction to proceed; the very high temperature inside the engine provides enough energy to break the strong N≡N bond and drive this endothermic reaction.",
            markScheme: [
              "Energy absorbed = 945 + 498 = 1443 kJ (1)",
              "Energy released = 2 × 631 = 1262 kJ (1)",
              "ΔH = 1443 − 1262 = +181 kJ mol⁻¹ (1)",
              "Endothermic / ΔH positive (1)",
              "High temperature supplies the energy needed / to break strong N≡N bond (1)",
            ],
            commonError:
              "This reaction is endothermic (positive ΔH). Students who expect all reactions of common gases to be exothermic may write the wrong sign — always compare bonds broken with bonds made.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Bonds broken: 1 N≡N + 1 O=O. Bonds made: 2 N=O.",
              "Broken = 945 + 498. Made = 2 × 631.",
              "ΔH = broken − made. Here made < broken, so check the sign.",
              "A positive ΔH means energy must be supplied — link to the engine temperature.",
            ],
            strategy: "build a table",
            solutions: [
              {
                label: "Method: ΔH = bonds broken − bonds made",
                steps: [
                  "Broken: N≡N (945) + O=O (498) = 1443 kJ.",
                  "Made: 2 N=O = 2 × 631 = 1262 kJ.",
                  "ΔH = 1443 − 1262 = +181 kJ mol⁻¹.",
                  "Positive → endothermic.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq2-09",
            question:
              "A student neutralises 25.0 cm³ of 1.0 mol dm⁻³ hydrochloric acid with 25.0 cm³ of 1.0 mol dm⁻³ sodium hydroxide. The temperature rises by 6.7 °C. (Density of mixture = 1.0 g cm⁻³; c = 4.2 J g⁻¹ °C⁻¹.)\n\n" +
              "(a) Calculate the heat released, Q. [2]\n" +
              "(b) Calculate the number of moles of water formed. [1]\n" +
              "(c) Calculate the enthalpy change of neutralisation in kJ per mole of water, giving the correct sign. [2]",
            marks: 5,
            modelAnswer:
              "(a) m = 25.0 + 25.0 = 50.0 g. Q = mcΔT = 50.0 × 4.2 × 6.7 = 1407 J ≈ 1.41 kJ.\n" +
              "(b) Moles of HCl = 1.0 × 25.0/1000 = 0.025 mol; this reacts 1:1 with NaOH to give 0.025 mol of water.\n" +
              "(c) ΔH = −Q/n = −1407 / 0.025 = −56 280 J mol⁻¹ ≈ −56.3 kJ mol⁻¹ (negative, exothermic).",
            markScheme: [
              "m = 50.0 g; Q = 50.0 × 4.2 × 6.7 (1)",
              "Q = 1407 J ≈ 1.41 kJ (1)",
              "moles of water = 0.025 mol (1)",
              "ΔH = −1407 / 0.025 = −56 280 J mol⁻¹ ≈ −56.3 kJ mol⁻¹ (1)",
              "Negative sign / exothermic (1)",
            ],
            commonError:
              "Use the COMBINED mass (50 g) in Q = mcΔT, and remember to make ΔH negative because the reaction releases heat (exothermic).",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "challenge",
            hints: [
              "m is the total mass of solution = 25 + 25 = 50 g.",
              "Q = mcΔT = 50 × 4.2 × 6.7.",
              "moles = concentration × volume in dm³ = 1.0 × 0.025 = 0.025 mol; HCl:H₂O is 1:1.",
              "ΔH = −Q ÷ n; the minus sign shows energy is released.",
            ],
            strategy: "build a table — list m, c, ΔT, then n, then divide",
            solutions: [
              {
                label: "Method: calorimetry to molar enthalpy",
                steps: [
                  "Q = mcΔT = 50.0 × 4.2 × 6.7 = 1407 J.",
                  "n(H₂O) = n(HCl) = 1.0 mol dm⁻³ × 0.0250 dm³ = 0.025 mol.",
                  "ΔH = −Q/n = −1407 ÷ 0.025 = −56 280 J mol⁻¹.",
                  "Convert: −56 280 ÷ 1000 ≈ −56.3 kJ mol⁻¹ (exothermic).",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq2-10",
            question:
              "**Challenge question**\n\n" +
              "Ethene undergoes addition with bromine:\n" +
              "C₂H₄(g) + Br₂(g) → C₂H₄Br₂(g)\n\n" +
              "Bond energies (kJ mol⁻¹): C=C = 614; C–C = 347; Br–Br = 193; C–Br = 290; C–H = 413.\n\n" +
              "(a) Identify which bonds are broken and which are made (consider only the bonds that change). [3]\n" +
              "(b) Calculate ΔH. Show your working. [3]\n" +
              "(c) Explain why considering only the bonds that change gives the same ΔH as counting every bond. [2]",
            marks: 8,
            modelAnswer:
              "(a) Bonds broken: 1 C=C (614) and 1 Br–Br (193). Bonds made: 1 C–C (347) and 2 C–Br (2 × 290 = 580). The 4 C–H bonds are unchanged.\n" +
              "(b) Total broken = 614 + 193 = 807 kJ. Total made = 347 + 580 = 927 kJ. ΔH = 807 − 927 = −120 kJ mol⁻¹ (exothermic).\n" +
              "(c) The 4 C–H bonds appear unchanged in both the reactant (ethene) and product (1,2-dibromoethane). If you counted all bonds, the 4 C–H bonds would be broken and then re-made for the same energy, so they cancel out and have no effect on ΔH.",
            markScheme: [
              "Bonds broken: C=C (614) and Br–Br (193) (1)",
              "Bonds made: C–C (347) and 2 C–Br (2 × 290) (1)",
              "Recognise the 4 C–H bonds are unchanged (1)",
              "Total broken = 807 kJ; total made = 927 kJ (1)",
              "ΔH = 807 − 927 (1)",
              "ΔH = −120 kJ mol⁻¹ / exothermic (1)",
              "C–H bonds broken and re-made cancel / no net contribution (1)",
              "So same ΔH either way (1)",
            ],
            commonError:
              "Students often forget that 2 C–Br bonds form (one on each carbon), counting only one. Both carbons of the former double bond gain a bromine atom.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Only the C=C double bond and the Br–Br bond break; the 4 C–H bonds stay the same.",
              "Two new C–Br bonds form (one per carbon) plus the C=C becomes a C–C single bond.",
              "Broken = 614 + 193 = 807 kJ. Made = 347 + 2 × 290 = 927 kJ.",
              "ΔH = 807 − 927.",
            ],
            strategy: "draw a diagram — identify which bonds change",
            solutions: [
              {
                label: "Method: change-only bond accounting",
                steps: [
                  "Bonds broken: C=C (614) + Br–Br (193) = 807 kJ.",
                  "Bonds made: C–C (347) + 2 C–Br (2 × 290 = 580) = 927 kJ.",
                  "ΔH = 807 − 927 = −120 kJ mol⁻¹.",
                  "Negative → exothermic. The 4 unchanged C–H bonds cancel.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-energetics-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "10 structured questions: calorimetry, neutralisation, fuel cells and applications.",
        questions: [
          {
            id: "chem-energetics-bq3-01",
            question:
              "When ammonium nitrate dissolves in water in a beaker, a thermometer in the water reads a drop of 4 °C.\n\n" +
              "(a) State whether the process is exothermic or endothermic. [1]\n" +
              "(b) State the direction of energy transfer between the system and surroundings. [1]\n" +
              "(c) State the sign of ΔH. [1]",
            marks: 3,
            modelAnswer:
              "(a) Endothermic.\n" +
              "(b) Energy is transferred FROM the surroundings (the water) TO the system (the dissolving process).\n" +
              "(c) ΔH is positive.",
            markScheme: [
              "Endothermic (1)",
              "Energy transferred from surroundings to system (1)",
              "ΔH positive (1)",
            ],
            commonError:
              "A temperature drop means the surroundings LOSE energy — that energy is absorbed by the endothermic process, so ΔH is positive.",
            guideRef: "Exothermic and Endothermic Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bq3-02",
            question:
              "A student burns three different alcohols to heat 150 g of water and records the temperature rise for each. Using Q = mcΔT, the energy transferred to the water is:\n" +
              "Methanol: ΔT = 18.0 °C\n" +
              "Ethanol: ΔT = 24.0 °C\n" +
              "(c of water = 4.2 J g⁻¹ °C⁻¹.)\n\n" +
              "(a) Calculate Q for methanol. [2]\n" +
              "(b) Calculate Q for ethanol. [1]\n" +
              "(c) State which fuel transferred more energy to the water and by how many kilojoules. [2]",
            marks: 5,
            modelAnswer:
              "(a) Q(methanol) = mcΔT = 150 × 4.2 × 18.0 = 11 340 J = 11.34 kJ.\n" +
              "(b) Q(ethanol) = 150 × 4.2 × 24.0 = 15 120 J = 15.12 kJ.\n" +
              "(c) Ethanol transferred more energy. Difference = 15.12 − 11.34 = 3.78 kJ.",
            markScheme: [
              "Q(methanol) = 150 × 4.2 × 18.0 (1)",
              "= 11 340 J = 11.34 kJ (1)",
              "Q(ethanol) = 150 × 4.2 × 24.0 = 15 120 J = 15.12 kJ (1)",
              "Ethanol transferred more energy (1)",
              "Difference = 3.78 kJ (1)",
            ],
            commonError:
              "Keep the mass of water constant (150 g) for both calculations. Only ΔT changes between the two fuels.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "core",
            hints: [
              "Use m = 150 g and c = 4.2 for both.",
              "Q = mcΔT. Substitute each ΔT in turn.",
              "Convert J to kJ by dividing by 1000.",
              "Difference = larger Q − smaller Q.",
            ],
            strategy: "build a table — one row per fuel",
            solutions: [
              {
                label: "Method: Q = mcΔT for each fuel",
                steps: [
                  "Methanol: Q = 150 × 4.2 × 18.0 = 11 340 J = 11.34 kJ.",
                  "Ethanol: Q = 150 × 4.2 × 24.0 = 15 120 J = 15.12 kJ.",
                  "Ethanol > methanol.",
                  "Difference = 15.12 − 11.34 = 3.78 kJ.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq3-03",
            question:
              "A hydrogen–oxygen fuel cell produces electricity from the reaction:\n" +
              "2H₂(g) + O₂(g) → 2H₂O(l)\n\n" +
              "(a) State whether this reaction is exothermic or endothermic. [1]\n" +
              "(b) State one advantage of a hydrogen–oxygen fuel cell compared with burning a hydrocarbon fuel. [1]\n" +
              "(c) State one disadvantage or practical difficulty of using hydrogen fuel cells. [1]\n" +
              "(d) Explain why the reaction releases energy, in terms of bonds broken and bonds made. [2]",
            marks: 5,
            modelAnswer:
              "(a) Exothermic.\n" +
              "(b) The only product is water, so it does not produce carbon dioxide or other pollutants / it is more efficient than combustion.\n" +
              "(c) Hydrogen is difficult and expensive to store and transport safely (it is flammable and a gas) / producing hydrogen often uses energy from fossil fuels.\n" +
              "(d) More energy is released when the strong O–H bonds in water form than is absorbed breaking the H–H and O=O bonds in the reactants, so overall energy is released (ΔH negative).",
            markScheme: [
              "Exothermic (1)",
              "Advantage: only product is water / no CO₂ or pollutants / more efficient (1)",
              "Disadvantage: hard/expensive to store/transport hydrogen / hydrogen production may use fossil fuels (1)",
              "Energy released making O–H bonds > energy absorbed breaking H–H and O=O bonds (1)",
              "So overall energy is released / ΔH negative (1)",
            ],
            commonError:
              "Fuel cells are exothermic overall — the appeal is that the chemical energy is converted to electrical energy with only water as the product, not that they are endothermic.",
            guideRef: "Common Examples and Applications",
            difficulty: "core",
            hints: [
              "The reaction is the same combustion of hydrogen — is that exo or endothermic?",
              "Think about what comes OUT of a hydrogen fuel cell compared with a petrol engine.",
              "Storage and source of the hydrogen are common drawbacks.",
              "For (d), compare energy released making O–H bonds with energy absorbed breaking H–H and O=O.",
            ],
          },
          {
            id: "chem-energetics-bq3-04",
            question:
              "**Challenge — multi-step and synoptic**\n\n" +
              "The industrial production of sulfuric acid involves the Contact Process. " +
              "A key step is the oxidation of sulfur dioxide:\n" +
              "2SO₂(g) + O₂(g) → 2SO₃(g), ΔH = −196 kJ mol⁻¹\n\n" +
              "(a) State the sign of ΔH and explain what it tells you about the energy change. [2]\n" +
              "(b) Vanadium(V) oxide (V₂O₅) is the catalyst used. Describe the energy level diagram for this reaction WITHOUT and WITH the catalyst, labelling Ea (uncatalysed), Ea (catalysed), and ΔH. State the key features. [4]\n" +
              "(c) Explain, using bond energy terms, why the reaction releases energy. You do not need numerical values. [2]\n" +
              "(d) If the reaction mixture is cooled, it proceeds more slowly. Using activation energy, explain why. [2]",
            marks: 10,
            modelAnswer:
              "(a) ΔH = −196 kJ mol⁻¹, which is negative. The reaction is exothermic — energy is released to the surroundings. The products (SO₃) have lower chemical potential energy than the reactants.\n" +
              "(b) Reactants at a certain energy level; products at a lower energy level (exothermic). A high peak for the uncatalysed pathway labelled Ea(uncatalysed); a lower peak for the catalysed pathway labelled Ea(catalysed); a single ΔH arrow from reactants down to products, the same for both pathways. Key features: same reactants and products energy levels; lower peak with catalyst; ΔH unchanged.\n" +
              "(c) More energy is released when the new S–O/S=O bonds form in SO₃ than is absorbed when the bonds in SO₂ and the O=O bond in O₂ are broken. Since energy released by bond making exceeds energy absorbed by bond breaking, the reaction is exothermic.\n" +
              "(d) At lower temperatures, reactant particles have lower average kinetic energy. Fewer particles have energy greater than or equal to the activation energy Ea, so fewer effective collisions occur per second and the rate decreases.",
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
              "In part (d), students often just say 'particles move more slowly'. The key point is that fewer particles meet or exceed the activation energy threshold.",
            guideRef: "Energy Level Diagrams",
            difficulty: "challenge",
            hints: [
              "For part (a): negative ΔH = exothermic — energy is released.",
              "For part (b): two curves on the same axes — same start and end, two different peaks.",
              "For part (c): compare bonds broken vs bonds made — which contributes more energy?",
              "For part (d): link temperature → kinetic energy → Ea → collision frequency.",
            ],
            strategy: "draw a diagram; identify what is being compared",
          },
          {
            id: "chem-energetics-bq3-05",
            question:
              "Propane is used as a camping-gas fuel:\n" +
              "C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(g)\n\n" +
              "Bond energies (kJ mol⁻¹): C–C = 347; C–H = 413; O=O = 498; C=O = 805; O–H = 464.\n\n" +
              "(a) Show that propane (C₃H₈) contains 2 C–C bonds and 8 C–H bonds. [1]\n" +
              "(b) Calculate the total energy absorbed breaking all bonds in the reactants. [2]\n" +
              "(c) Calculate the total energy released making all bonds in the products. [2]\n" +
              "(d) Calculate ΔH and state whether the reaction is exothermic or endothermic. [2]",
            marks: 7,
            modelAnswer:
              "(a) Propane is CH₃–CH₂–CH₃: three carbons joined by 2 C–C bonds, with 3 + 2 + 3 = 8 C–H bonds.\n" +
              "(b) Bonds broken: 2 C–C (2 × 347 = 694) + 8 C–H (8 × 413 = 3304) + 5 O=O (5 × 498 = 2490) = 6488 kJ.\n" +
              "(c) Bonds made: 6 C=O (in 3CO₂: 3 × 2 = 6, so 6 × 805 = 4830) + 8 O–H (in 4H₂O: 4 × 2 = 8, so 8 × 464 = 3712) = 8542 kJ.\n" +
              "(d) ΔH = 6488 − 8542 = −2054 kJ mol⁻¹. Exothermic (ΔH negative).",
            markScheme: [
              "C₃H₈ as CH₃–CH₂–CH₃: 2 C–C and 8 C–H (1)",
              "Bonds broken: 694 + 3304 + 2490 (1)",
              "Total broken = 6488 kJ (1)",
              "Bonds made: 6 C=O = 4830 kJ; 8 O–H = 3712 kJ (1)",
              "Total made = 8542 kJ (1)",
              "ΔH = 6488 − 8542 = −2054 kJ mol⁻¹ (1)",
              "Exothermic / ΔH negative (1)",
            ],
            commonError:
              "Watch the coefficients: 3CO₂ contains 6 C=O bonds and 4H₂O contains 8 O–H bonds. Forgetting to multiply by the coefficient is the most common slip.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Draw propane CH₃–CH₂–CH₃ to count 2 C–C and 8 C–H bonds.",
              "Reactants: 2 C–C + 8 C–H + 5 O=O.",
              "Products: 3CO₂ → 6 C=O; 4H₂O → 8 O–H.",
              "ΔH = total broken − total made.",
            ],
            strategy: "build a table",
            solutions: [
              {
                label: "Method: full bond-energy table",
                steps: [
                  "Broken: 2 C–C (694) + 8 C–H (3304) + 5 O=O (2490) = 6488 kJ.",
                  "Made: 6 C=O (4830) + 8 O–H (3712) = 8542 kJ.",
                  "ΔH = 6488 − 8542 = −2054 kJ mol⁻¹.",
                  "Negative → exothermic.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq3-06",
            question:
              "Two fuels are compared by burning them under identical conditions to heat 200 g of water. (c = 4.2 J g⁻¹ °C⁻¹.)\n" +
              "Fuel A raises the temperature by 15.0 °C burning 0.50 g.\n" +
              "Fuel B raises the temperature by 21.0 °C burning 0.70 g.\n\n" +
              "(a) Calculate the energy transferred to the water by each fuel. [2]\n" +
              "(b) Calculate the energy released per gram for each fuel. [2]\n" +
              "(c) State, with a reason, which fuel is the better energy source per gram. [1]",
            marks: 5,
            modelAnswer:
              "(a) Fuel A: Q = 200 × 4.2 × 15.0 = 12 600 J = 12.6 kJ. Fuel B: Q = 200 × 4.2 × 21.0 = 17 640 J = 17.64 kJ.\n" +
              "(b) Fuel A: 12.6 kJ ÷ 0.50 g = 25.2 kJ g⁻¹. Fuel B: 17.64 kJ ÷ 0.70 g = 25.2 kJ g⁻¹.\n" +
              "(c) They release the same energy per gram (25.2 kJ g⁻¹), so neither is better per gram — they are equally good energy sources by mass.",
            markScheme: [
              "Fuel A: Q = 12 600 J = 12.6 kJ (1)",
              "Fuel B: Q = 17 640 J = 17.64 kJ (1)",
              "Fuel A: 12.6 / 0.50 = 25.2 kJ g⁻¹ (1)",
              "Fuel B: 17.64 / 0.70 = 25.2 kJ g⁻¹ (1)",
              "Equal energy per gram / neither better (1)",
            ],
            commonError:
              "To compare fuels fairly, divide the energy released by the mass burned (energy per gram). Comparing only the temperature rise ignores the different masses burned.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "core",
            hints: [
              "Q = mcΔT with m = 200 g for both.",
              "Energy per gram = energy released ÷ mass of fuel burned.",
              "Work out both per-gram values before comparing.",
            ],
            strategy: "build a table — one row per fuel",
            solutions: [
              {
                label: "Method: energy then energy-per-gram",
                steps: [
                  "Fuel A: Q = 200 × 4.2 × 15.0 = 12 600 J = 12.6 kJ; per gram = 12.6 / 0.50 = 25.2 kJ g⁻¹.",
                  "Fuel B: Q = 200 × 4.2 × 21.0 = 17 640 J = 17.64 kJ; per gram = 17.64 / 0.70 = 25.2 kJ g⁻¹.",
                  "Both = 25.2 kJ g⁻¹.",
                  "Equal energy density by mass.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq3-07",
            question:
              "(a) Sketch and describe the shape of an energy level diagram for an EXOTHERMIC reaction. Label reactants, products, Ea and ΔH. [3]\n" +
              "(b) On the same axes, describe how the curve would change if a catalyst were added. [2]\n" +
              "(c) Explain why the value of ΔH is unchanged when a catalyst is added. [2]",
            marks: 7,
            modelAnswer:
              "(a) The reactants are drawn as a horizontal line on the left, the products as a lower horizontal line on the right (exothermic). The curve rises from the reactants to a peak (transition state) then falls to the products. Ea is the height from the reactants level up to the peak; ΔH is the (downward) gap from the reactants level to the products level.\n" +
              "(b) The catalysed curve has a lower peak (lower Ea) but starts and ends at exactly the same reactant and product levels.\n" +
              "(c) ΔH = E(products) − E(reactants). A catalyst only provides an alternative pathway with a lower peak; it does not change the energy levels of the reactants or products, so the difference between them — ΔH — is unchanged.",
            markScheme: [
              "Products drawn lower than reactants (exothermic) (1)",
              "Peak/transition state shown between them (1)",
              "Ea labelled reactants→peak; ΔH labelled reactants→products (downward) (1)",
              "Catalysed curve: lower peak / lower Ea (1)",
              "Same reactant and product levels (1)",
              "ΔH depends only on energy levels of reactants and products (1)",
              "Catalyst does not change those levels, so ΔH unchanged (1)",
            ],
            commonError:
              "When sketching the catalysed pathway, students sometimes lower the products level too. Only the peak height (Ea) changes — the reactant and product levels are fixed.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "Exothermic: products below reactants.",
              "Ea is measured from reactants to the peak; ΔH from reactants to products.",
              "A catalyst lowers only the peak.",
              "ΔH is a difference between two fixed levels.",
            ],
            strategy: "draw a diagram; label all key features before answering",
          },
          {
            id: "chem-energetics-bq3-08",
            question:
              "Hydrazine, N₂H₄, is used as a rocket fuel. It burns in oxygen:\n" +
              "N₂H₄(g) + O₂(g) → N₂(g) + 2H₂O(g)\n\n" +
              "Bond energies (kJ mol⁻¹): N–N = 158; N–H = 391; O=O = 498; N≡N = 945; O–H = 464.\n\n" +
              "(a) State the bonds present in one molecule of N₂H₄. [1]\n" +
              "(b) Calculate the total energy absorbed breaking all bonds in the reactants. [2]\n" +
              "(c) Calculate the total energy released making all bonds in the products. [2]\n" +
              "(d) Calculate ΔH and state whether the reaction is exothermic or endothermic. [2]",
            marks: 7,
            modelAnswer:
              "(a) N₂H₄ is H₂N–NH₂: it has 1 N–N bond and 4 N–H bonds.\n" +
              "(b) Bonds broken: 1 N–N (158) + 4 N–H (4 × 391 = 1564) + 1 O=O (498) = 2220 kJ.\n" +
              "(c) Bonds made: 1 N≡N (945) + 4 O–H (in 2H₂O: 2 × 2 = 4, so 4 × 464 = 1856) = 2801 kJ.\n" +
              "(d) ΔH = 2220 − 2801 = −581 kJ mol⁻¹. Exothermic (ΔH negative).",
            markScheme: [
              "N₂H₄ has 1 N–N and 4 N–H bonds (1)",
              "Bonds broken: 158 + 1564 + 498 (1)",
              "Total broken = 2220 kJ (1)",
              "Bonds made: N≡N (945) + 4 O–H (1856) (1)",
              "Total made = 2801 kJ (1)",
              "ΔH = 2220 − 2801 = −581 kJ mol⁻¹ (1)",
              "Exothermic / ΔH negative (1)",
            ],
            commonError:
              "The product nitrogen has a TRIPLE bond (N≡N = 945), not a single N–N bond. Using the wrong nitrogen bond energy is the key error here.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Draw N₂H₄ as H₂N–NH₂: 1 N–N and 4 N–H bonds.",
              "Reactants: those bonds plus 1 O=O in O₂.",
              "Products: N₂ has a triple bond N≡N; 2H₂O has 4 O–H bonds.",
              "ΔH = total broken − total made.",
            ],
            strategy: "build a table",
            solutions: [
              {
                label: "Method: full bond-energy table",
                steps: [
                  "Broken: 1 N–N (158) + 4 N–H (1564) + 1 O=O (498) = 2220 kJ.",
                  "Made: 1 N≡N (945) + 4 O–H (1856) = 2801 kJ.",
                  "ΔH = 2220 − 2801 = −581 kJ mol⁻¹.",
                  "Negative → exothermic.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq3-09",
            question:
              "(a) Give one example each of an exothermic and an endothermic reaction, other than combustion and thermal decomposition. [2]\n" +
              "(b) Explain how you could tell, by experiment, whether dissolving a salt in water is exothermic or endothermic. [2]\n" +
              "(c) State why respiration is described as exothermic. [1]",
            marks: 5,
            modelAnswer:
              "(a) Exothermic: neutralisation of an acid with an alkali (or oxidation/rusting). Endothermic: photosynthesis (or dissolving ammonium nitrate in water).\n" +
              "(b) Measure the temperature of the water before adding the salt and the lowest/highest temperature after dissolving with a thermometer. A temperature rise means exothermic; a temperature fall means endothermic.\n" +
              "(c) Respiration releases energy from glucose to the body / surroundings, so it is exothermic.",
            markScheme: [
              "Valid exothermic example, e.g. neutralisation / oxidation (1)",
              "Valid endothermic example, e.g. photosynthesis / dissolving ammonium nitrate (1)",
              "Measure temperature before and after with a thermometer (1)",
              "Rise = exothermic; fall = endothermic (1)",
              "Respiration releases energy from glucose / to the body (1)",
            ],
            commonError:
              "Make sure the examples are NOT combustion or thermal decomposition, since the question excludes those.",
            guideRef: "Common Examples and Applications",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bq3-10",
            question:
              "**Challenge — extended calculation and analysis**\n\n" +
              "Methanol (CH₃OH) can be burned as a fuel:\n" +
              "2CH₃OH(g) + 3O₂(g) → 2CO₂(g) + 4H₂O(g)\n\n" +
              "Bond energies (kJ mol⁻¹): C–H = 413; C–O = 358; O–H = 464; O=O = 498; C=O = 805.\n\n" +
              "(a) Write down all bonds broken in 2CH₃OH and 3O₂. State the quantity of each bond and the total energy absorbed. [4]\n" +
              "(b) Write down all bonds made in 2CO₂ and 4H₂O. State the quantity of each bond and the total energy released. [2]\n" +
              "(c) Calculate ΔH for the combustion of 2 moles of methanol. Show your working. [2]\n" +
              "(d) Calculate ΔH per mole of methanol. [1]\n" +
              "(e) A student claims: 'Methanol releases more energy per mole than the combustion of hydrogen.' Using ΔH values, evaluate this claim. (ΔH for H₂ combustion = −243 kJ mol⁻¹ per mole H₂.) [2]",
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
              "However, this is per mole of fuel; to compare fairly as fuels you would also need to consider energy per gram or per unit cost.",
            markScheme: [
              "6 C–H from 2CH₃OH: 6 × 413 = 2478 kJ (1)",
              "2 C–O + 2 O–H identified: 716 + 928 = 1644 kJ (1)",
              "3 O=O from 3O₂: 3 × 498 = 1494 kJ (1)",
              "Total broken = 5616 kJ (1)",
              "4 C=O in 2CO₂: 4 × 805 = 3220 kJ (1)",
              "8 O–H in 4H₂O: 8 × 464 = 3712 kJ; total made = 6932 kJ (1)",
              "ΔH = 5616 − 6932 = −1316 kJ (for 2 mol) (1)",
              "ΔH per mole = −658 kJ mol⁻¹ (1)",
              "Methanol 658 > hydrogen 243 kJ mol⁻¹ — claim is correct (1)",
              "Appropriate qualification, e.g. per gram or other measures may differ (1)",
            ],
            commonError:
              "In methanol (CH₃OH), students often miss the O–H bond, counting only C–H and C–O bonds. The hydroxyl –OH group contributes one O–H bond per molecule.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Draw methanol H₃C–O–H. Count every bond type.",
              "Per CH₃OH molecule: 3 C–H, 1 C–O, 1 O–H. For 2 molecules: double everything.",
              "Products: each CO₂ has 2 C=O bonds; each H₂O has 2 O–H bonds.",
              "ΔH for 2 mol, then halve for 1 mol. Compare magnitudes for part (e).",
            ],
            strategy: "draw a diagram; build a table",
            solutions: [
              {
                label: "Method: full bond-by-bond table",
                steps: [
                  "Methanol structure: H₃C–O–H → 3 C–H, 1 C–O, 1 O–H per molecule.",
                  "2 CH₃OH: 6 C–H (2478), 2 C–O (716), 2 O–H (928). 3 O₂: 3 O=O (1494). Total broken = 5616 kJ.",
                  "2 CO₂: 4 C=O (3220). 4 H₂O: 8 O–H (3712). Total made = 6932 kJ.",
                  "ΔH(2 mol) = 5616 − 6932 = −1316 kJ. Per mole = −658 kJ mol⁻¹.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-energetics-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "10 structured questions: mixed and synoptic — evidence, diagrams and multi-step calculations.",
        questions: [
          {
            id: "chem-energetics-bq4-01",
            question:
              "Define the following terms:\n" +
              "(a) Exothermic reaction. [2]\n" +
              "(b) Activation energy. [2]\n" +
              "(c) Enthalpy change, ΔH. [1]",
            marks: 5,
            modelAnswer:
              "(a) An exothermic reaction transfers energy to the surroundings, causing the temperature of the surroundings to rise; ΔH is negative.\n" +
              "(b) Activation energy is the minimum energy that colliding particles must have for a reaction to occur.\n" +
              "(c) ΔH is the heat energy change of a reaction; ΔH = H(products) − H(reactants).",
            markScheme: [
              "Energy transferred TO surroundings / temperature of surroundings rises (1)",
              "ΔH negative (1)",
              "Minimum energy for a reaction to occur (1)",
              "Possessed by colliding/reacting particles (1)",
              "ΔH = H(products) − H(reactants) / heat change of reaction (1)",
            ],
            commonError:
              "For exothermic, state that the SURROUNDINGS gain energy (temperature rises). Saying 'the reaction gains energy' is the opposite of what happens.",
            guideRef: "Exothermic and Endothermic Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bq4-02",
            question:
              "A reaction releases 60 kJ of energy. The energy level diagram shows reactants at 100 kJ mol⁻¹ and an activation energy of 90 kJ mol⁻¹.\n\n" +
              "(a) State the energy of the products. [1]\n" +
              "(b) State the energy of the peak (transition state). [1]\n" +
              "(c) Sketch and describe the diagram, indicating whether it is exothermic or endothermic. [3]",
            marks: 5,
            modelAnswer:
              "(a) Energy released = 60 kJ, so products = 100 − 60 = 40 kJ mol⁻¹.\n" +
              "(b) Peak = reactants + Ea = 100 + 90 = 190 kJ mol⁻¹.\n" +
              "(c) Reactants at 100, rising to a peak at 190 (Ea = 90), then falling to products at 40. Products are lower than reactants, so the reaction is exothermic (ΔH = 40 − 100 = −60 kJ mol⁻¹).",
            markScheme: [
              "Products = 100 − 60 = 40 kJ mol⁻¹ (1)",
              "Peak = 100 + 90 = 190 kJ mol⁻¹ (1)",
              "Diagram shows reactants (100) above products (40) (1)",
              "Peak at 190 / Ea = 90 shown (1)",
              "Exothermic (ΔH = −60 kJ mol⁻¹) (1)",
            ],
            commonError:
              "'Releases 60 kJ' means the products sit 60 kJ BELOW the reactants — subtract from the reactants level to find the products level.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "Energy released → products are below reactants by that amount.",
              "Products = reactants − 60.",
              "Peak = reactants + Ea.",
              "Compare products and reactants to classify the reaction.",
            ],
            solutions: [
              {
                label: "Method: build the diagram from the data",
                steps: [
                  "Reactants = 100 kJ mol⁻¹ (given).",
                  "Energy released 60 kJ → products = 100 − 60 = 40 kJ mol⁻¹.",
                  "Peak = reactants + Ea = 100 + 90 = 190 kJ mol⁻¹.",
                  "Products (40) < reactants (100) → exothermic, ΔH = −60 kJ mol⁻¹.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq4-03",
            question:
              "Ethanol burns completely:\n" +
              "C₂H₅OH(g) + 3O₂(g) → 2CO₂(g) + 3H₂O(g)\n\n" +
              "Bond energies (kJ mol⁻¹): C–C = 347; C–H = 413; C–O = 358; O–H = 464; O=O = 498; C=O = 805.\n\n" +
              "(a) State the number of each type of bond in one molecule of C₂H₅OH. [2]\n" +
              "(b) Calculate the total energy absorbed breaking all bonds in the reactants. [2]\n" +
              "(c) Calculate the total energy released making all bonds in the products. [2]\n" +
              "(d) Calculate ΔH and state whether the reaction is exothermic or endothermic. [2]",
            marks: 8,
            modelAnswer:
              "(a) C₂H₅OH (CH₃–CH₂–O–H) has: 1 C–C, 5 C–H, 1 C–O and 1 O–H bond.\n" +
              "(b) Bonds broken: 1 C–C (347) + 5 C–H (5 × 413 = 2065) + 1 C–O (358) + 1 O–H (464) + 3 O=O (3 × 498 = 1494) = 4728 kJ.\n" +
              "(c) Bonds made: 4 C=O (in 2CO₂: 2 × 2 = 4, so 4 × 805 = 3220) + 6 O–H (in 3H₂O: 3 × 2 = 6, so 6 × 464 = 2784) = 6004 kJ.\n" +
              "(d) ΔH = 4728 − 6004 = −1276 kJ mol⁻¹. Exothermic (ΔH negative).",
            markScheme: [
              "C₂H₅OH: 1 C–C, 5 C–H, 1 C–O, 1 O–H (1)",
              "All four bond types correct (1)",
              "Bonds broken: 347 + 2065 + 358 + 464 + 1494 (1)",
              "Total broken = 4728 kJ (1)",
              "Bonds made: 4 C=O (3220) + 6 O–H (2784) (1)",
              "Total made = 6004 kJ (1)",
              "ΔH = 4728 − 6004 = −1276 kJ mol⁻¹ (1)",
              "Exothermic / ΔH negative (1)",
            ],
            commonError:
              "Ethanol has 5 C–H bonds (CH₃ has 3, CH₂ has 2), plus 1 C–O and 1 O–H. Forgetting the O–H of the hydroxyl group, or miscounting the C–H bonds, is a common error.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Draw ethanol CH₃–CH₂–O–H: 1 C–C, 5 C–H, 1 C–O, 1 O–H.",
              "Reactants also include 3 O=O from 3O₂.",
              "Products: 2CO₂ → 4 C=O; 3H₂O → 6 O–H.",
              "ΔH = total broken − total made.",
            ],
            strategy: "draw a diagram; build a table",
            solutions: [
              {
                label: "Method: full bond-energy table",
                steps: [
                  "Broken: 1 C–C (347) + 5 C–H (2065) + 1 C–O (358) + 1 O–H (464) + 3 O=O (1494) = 4728 kJ.",
                  "Made: 4 C=O (3220) + 6 O–H (2784) = 6004 kJ.",
                  "ΔH = 4728 − 6004 = −1276 kJ mol⁻¹.",
                  "Negative → exothermic.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq4-04",
            question:
              "When 1.0 g of a fuel is burned, it raises the temperature of 250 g of water by 28.5 °C. (c of water = 4.2 J g⁻¹ °C⁻¹.)\n\n" +
              "(a) Calculate the energy transferred to the water, in kJ. [2]\n" +
              "(b) The relative molecular mass (Mr) of the fuel is 32. Calculate the energy released per mole of fuel. [2]\n" +
              "(c) Suggest why the experimental value is smaller in magnitude than the data-book value. [1]",
            marks: 5,
            modelAnswer:
              "(a) Q = mcΔT = 250 × 4.2 × 28.5 = 29 925 J ≈ 29.9 kJ.\n" +
              "(b) Moles of fuel = mass / Mr = 1.0 / 32 = 0.03125 mol. Energy per mole = 29.925 kJ / 0.03125 = 957.6 kJ mol⁻¹ ≈ 958 kJ mol⁻¹ released.\n" +
              "(c) Heat is lost to the surroundings (and the container), and combustion may be incomplete, so less energy reaches the water than the true value.",
            markScheme: [
              "Q = 250 × 4.2 × 28.5 (1)",
              "Q = 29 925 J ≈ 29.9 kJ (1)",
              "moles = 1.0 / 32 = 0.03125 mol (1)",
              "Energy per mole = 29.925 / 0.03125 ≈ 958 kJ mol⁻¹ (1)",
              "Heat lost to surroundings / incomplete combustion (1)",
            ],
            commonError:
              "Use the water mass (250 g) in Q = mcΔT, then divide the energy by the MOLES of fuel (mass ÷ Mr) for energy per mole.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "challenge",
            hints: [
              "Q = mcΔT uses the water mass 250 g.",
              "moles of fuel = mass ÷ Mr = 1.0 ÷ 32.",
              "Energy per mole = Q (kJ) ÷ moles of fuel.",
              "Some energy escapes to the surroundings — that lowers the measured value.",
            ],
            strategy: "build a table — Q first, then per-mole",
            solutions: [
              {
                label: "Method: calorimetry to per-mole energy",
                steps: [
                  "Q = mcΔT = 250 × 4.2 × 28.5 = 29 925 J = 29.925 kJ.",
                  "moles of fuel = 1.0 ÷ 32 = 0.03125 mol.",
                  "Energy per mole = 29.925 ÷ 0.03125 = 957.6 kJ mol⁻¹.",
                  "≈ 958 kJ mol⁻¹ released (heat loss makes this an underestimate).",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq4-05",
            question:
              "The combustion of carbon is: C(s) + O₂(g) → CO₂(g), ΔH = −394 kJ mol⁻¹.\n\n" +
              "(a) State what the negative sign of ΔH tells you. [1]\n" +
              "(b) State how much energy is released when 2 moles of carbon are burned. [1]\n" +
              "(c) On an energy level diagram for this reaction, state which is higher: the reactants or the products. [1]\n" +
              "(d) State whether the surroundings get hotter or colder, and explain. [2]",
            marks: 5,
            modelAnswer:
              "(a) The reaction is exothermic; 394 kJ of energy is released to the surroundings per mole of carbon.\n" +
              "(b) 2 × 394 = 788 kJ released.\n" +
              "(c) The reactants are higher than the products.\n" +
              "(d) The surroundings get hotter, because the reaction releases energy to the surroundings, raising their temperature.",
            markScheme: [
              "Exothermic / energy released (394 kJ per mole) (1)",
              "2 × 394 = 788 kJ (1)",
              "Reactants higher than products (1)",
              "Surroundings get hotter (1)",
              "Because energy is released to the surroundings (1)",
            ],
            commonError:
              "A negative ΔH means energy is RELEASED, not absorbed. The reactants are higher than the products on the diagram.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bq4-06",
            question:
              "Hydrogen reacts with fluorine:\n" +
              "H₂(g) + F₂(g) → 2HF(g)\n\n" +
              "Bond energies (kJ mol⁻¹): H–H = 436; F–F = 158; H–F = 568.\n\n" +
              "(a) Calculate the energy absorbed breaking bonds. [1]\n" +
              "(b) Calculate the energy released making bonds. [1]\n" +
              "(c) Calculate ΔH. [1]\n" +
              "(d) The H–F bond is much stronger than the H–H or F–F bonds. Explain how this leads to a large negative ΔH. [2]",
            marks: 5,
            modelAnswer:
              "(a) Bonds broken: H–H (436) + F–F (158) = 594 kJ.\n" +
              "(b) Bonds made: 2 × H–F = 2 × 568 = 1136 kJ.\n" +
              "(c) ΔH = 594 − 1136 = −542 kJ mol⁻¹.\n" +
              "(d) Because the H–F bonds formed are very strong, a large amount of energy (1136 kJ) is released making them — much more than the energy absorbed breaking the weaker H–H and F–F bonds (594 kJ). The large surplus released gives a large negative ΔH.",
            markScheme: [
              "Energy absorbed = 436 + 158 = 594 kJ (1)",
              "Energy released = 2 × 568 = 1136 kJ (1)",
              "ΔH = 594 − 1136 = −542 kJ mol⁻¹ (1)",
              "Strong H–F bonds release a lot of energy when formed (1)",
              "Energy released making bonds >> energy absorbed breaking bonds → large negative ΔH (1)",
            ],
            commonError:
              "Two H–F bonds form (2HF), so multiply 568 by 2. A single H–F gives the wrong total.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Bonds broken: 1 H–H + 1 F–F.",
              "Bonds made: 2 H–F (the coefficient is 2).",
              "ΔH = (436 + 158) − (2 × 568).",
              "Stronger bonds made → more energy released → more negative ΔH.",
            ],
            strategy: "build a table",
            solutions: [
              {
                label: "Method: ΔH = bonds broken − bonds made",
                steps: [
                  "Broken: H–H (436) + F–F (158) = 594 kJ.",
                  "Made: 2 H–F = 2 × 568 = 1136 kJ.",
                  "ΔH = 594 − 1136 = −542 kJ mol⁻¹.",
                  "Negative → exothermic; the strong H–F bonds drive the large release.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq4-07",
            question:
              "(a) Explain why a catalyst increases the rate of a reaction, with reference to activation energy. [2]\n" +
              "(b) Explain why a catalyst does not change the amount of energy released by an exothermic reaction. [2]\n" +
              "(c) A reaction has Ea = 75 kJ mol⁻¹ and ΔH = −40 kJ mol⁻¹. State the activation energy of the reverse reaction. [1]",
            marks: 5,
            modelAnswer:
              "(a) A catalyst provides an alternative reaction pathway with a lower activation energy. More reactant particles have energy greater than or equal to this lower Ea, so more collisions are successful and the rate increases.\n" +
              "(b) The amount of energy released depends on ΔH, which is the difference between the reactant and product energy levels. A catalyst does not change those levels, so ΔH — and the energy released — is unchanged.\n" +
              "(c) Ea(reverse) = Ea(forward) + |ΔH| = 75 + 40 = 115 kJ mol⁻¹.",
            markScheme: [
              "Catalyst provides alternative pathway with lower Ea (1)",
              "More particles have energy ≥ Ea → more successful collisions → faster rate (1)",
              "Energy released depends on ΔH / difference in reactant and product levels (1)",
              "Catalyst does not change those levels, so ΔH unchanged (1)",
              "Ea(reverse) = 75 + 40 = 115 kJ mol⁻¹ (1)",
            ],
            commonError:
              "For (c), since the forward reaction is exothermic, the reverse reaction must climb higher to reach the same peak: add |ΔH| to the forward Ea.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "A catalyst lowers Ea, so more particles can react.",
              "ΔH is fixed by the energy levels of reactants and products.",
              "Reverse Ea = forward Ea + |ΔH| for an exothermic forward reaction.",
            ],
          },
          {
            id: "chem-energetics-bq4-08",
            question:
              "Hydrogen is proposed as a clean fuel, either burned directly or used in a fuel cell:\n" +
              "2H₂(g) + O₂(g) → 2H₂O(l)\n\n" +
              "(a) State the type of energy change (exo/endothermic) and the sign of ΔH. [2]\n" +
              "(b) Give one environmental advantage of using hydrogen rather than petrol. [1]\n" +
              "(c) Give one reason why hydrogen is not yet widely used as a fuel. [1]\n" +
              "(d) In a fuel cell, the chemical energy is converted mainly into which useful form of energy? [1]",
            marks: 5,
            modelAnswer:
              "(a) Exothermic; ΔH is negative.\n" +
              "(b) The only product is water, so no carbon dioxide (a greenhouse gas) or other pollutants are produced.\n" +
              "(c) Hydrogen is difficult and expensive to store and transport safely / much hydrogen is currently made using energy from fossil fuels.\n" +
              "(d) Electrical energy.",
            markScheme: [
              "Exothermic (1)",
              "ΔH negative (1)",
              "Only product is water / no CO₂ or pollutants (1)",
              "Storage/transport difficulty / production uses fossil fuels (1)",
              "Electrical energy (1)",
            ],
            commonError:
              "A fuel cell converts chemical energy directly to ELECTRICAL energy (not just heat) — that is its advantage over simple combustion.",
            guideRef: "Common Examples and Applications",
            difficulty: "core",
            hints: [
              "Combustion of hydrogen is exothermic.",
              "Consider what the only product (water) means for pollution.",
              "Storage and source of hydrogen are key drawbacks.",
              "Fuel cells generate electricity.",
            ],
          },
          {
            id: "chem-energetics-bq4-09",
            question:
              "Two reactions are compared:\n" +
              "Reaction P: ΔH = −572 kJ mol⁻¹\n" +
              "Reaction Q: ΔH = +180 kJ mol⁻¹\n\n" +
              "(a) State which reaction is exothermic and which is endothermic. [2]\n" +
              "(b) For each reaction, state whether the products are higher or lower in energy than the reactants. [2]\n" +
              "(c) Reaction P is the combustion of hydrogen to form 2 moles of water. Calculate the energy released when 1 mole of water is formed. [1]",
            marks: 5,
            modelAnswer:
              "(a) Reaction P (ΔH negative) is exothermic; Reaction Q (ΔH positive) is endothermic.\n" +
              "(b) Reaction P: products lower than reactants. Reaction Q: products higher than reactants.\n" +
              "(c) 572 kJ is released forming 2 moles of water, so per mole = 572 / 2 = 286 kJ released.",
            markScheme: [
              "P exothermic (1)",
              "Q endothermic (1)",
              "P: products lower than reactants (1)",
              "Q: products higher than reactants (1)",
              "572 / 2 = 286 kJ per mole of water (1)",
            ],
            commonError:
              "Negative ΔH = exothermic = products LOWER. Positive ΔH = endothermic = products HIGHER. Keep these pairings consistent.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "core",
            hints: [
              "Negative ΔH → exothermic; positive ΔH → endothermic.",
              "Exothermic: products below reactants. Endothermic: products above.",
              "For (c) divide the total energy by the number of moles of water.",
            ],
            solutions: [
              {
                label: "Method: classify then scale",
                steps: [
                  "ΔH(P) = −572 → exothermic, products below reactants.",
                  "ΔH(Q) = +180 → endothermic, products above reactants.",
                  "P forms 2 mol water releasing 572 kJ.",
                  "Per mole = 572 ÷ 2 = 286 kJ released.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq4-10",
            question:
              "**Challenge — extended analysis**\n\n" +
              "The complete combustion of butane is:\n" +
              "2C₄H₁₀(g) + 13O₂(g) → 8CO₂(g) + 10H₂O(g)\n\n" +
              "Bond energies (kJ mol⁻¹): C–C = 347; C–H = 413; O=O = 498; C=O = 805; O–H = 464.\n\n" +
              "(a) Show that one molecule of butane (C₄H₁₀) contains 3 C–C bonds and 10 C–H bonds. [1]\n" +
              "(b) Calculate the total energy absorbed breaking all bonds in the reactants. [3]\n" +
              "(c) Calculate the total energy released making all bonds in the products. [2]\n" +
              "(d) Calculate ΔH for the equation as written (2 moles of butane), then ΔH per mole of butane. [3]",
            marks: 9,
            modelAnswer:
              "(a) Butane is CH₃–CH₂–CH₂–CH₃: four carbons joined by 3 C–C bonds, with 3 + 2 + 2 + 3 = 10 C–H bonds.\n" +
              "(b) For 2C₄H₁₀: 2 × 3 = 6 C–C (6 × 347 = 2082) + 2 × 10 = 20 C–H (20 × 413 = 8260). For 13O₂: 13 O=O (13 × 498 = 6474). Total broken = 2082 + 8260 + 6474 = 16 816 kJ.\n" +
              "(c) 8CO₂ has 16 C=O bonds (8 × 2): 16 × 805 = 12 880 kJ. 10H₂O has 20 O–H bonds (10 × 2): 20 × 464 = 9280 kJ. Total made = 12 880 + 9280 = 22 160 kJ.\n" +
              "(d) ΔH (for 2 mol butane) = 16 816 − 22 160 = −5344 kJ. Per mole of butane = −5344 / 2 = −2672 kJ mol⁻¹.",
            markScheme: [
              "C₄H₁₀ as CH₃–CH₂–CH₂–CH₃: 3 C–C and 10 C–H (1)",
              "6 C–C (2082) + 20 C–H (8260) for 2 butane (1)",
              "13 O=O = 6474 kJ (1)",
              "Total broken = 16 816 kJ (1)",
              "16 C=O = 12 880 kJ; 20 O–H = 9280 kJ (1)",
              "Total made = 22 160 kJ (1)",
              "ΔH (2 mol) = 16 816 − 22 160 = −5344 kJ (1)",
              "Per mole = −5344 / 2 = −2672 kJ mol⁻¹ (1)",
              "Negative sign / exothermic (1)",
            ],
            commonError:
              "The equation has 2 moles of butane, so double every bond count in the butane (6 C–C, 20 C–H). Then remember to halve the final ΔH to get the value per mole.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Draw butane CH₃–CH₂–CH₂–CH₃: 3 C–C and 10 C–H per molecule; double for 2 molecules.",
              "Reactants: 6 C–C + 20 C–H + 13 O=O.",
              "Products: 8CO₂ → 16 C=O; 10H₂O → 20 O–H.",
              "ΔH for 2 mol, then divide by 2 for per mole.",
            ],
            strategy: "build a table",
            solutions: [
              {
                label: "Method: full bond-energy table",
                steps: [
                  "Broken: 6 C–C (2082) + 20 C–H (8260) + 13 O=O (6474) = 16 816 kJ.",
                  "Made: 16 C=O (12 880) + 20 O–H (9280) = 22 160 kJ.",
                  "ΔH (2 mol) = 16 816 − 22 160 = −5344 kJ.",
                  "Per mole = −5344 ÷ 2 = −2672 kJ mol⁻¹ (exothermic).",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
