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
        description: "Exothermic/endothermic classification, temperature evidence and energy level diagrams.",
        questions: [
          {
            id: "chem-energetics-bm1-01",
            question: "Which change is exothermic?",
            options: [
              "Melting ice",
              "Burning methane",
              "Dissolving ammonium nitrate in water",
              "Thermal decomposition of limestone",
            ],
            answerIndex: 1,
            explanation:
              "Burning (combustion) of methane releases energy to the surroundings, so it is exothermic. Melting, dissolving ammonium nitrate, and thermal decomposition all absorb energy and are endothermic.",
            guideRef: "Common Examples and Applications",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm1-02",
            question: "During a reaction the temperature of the surroundings falls. What does this tell you?",
            options: [
              "The reaction is exothermic and ΔH is negative.",
              "The reaction is endothermic and ΔH is positive.",
              "The reaction is exothermic and ΔH is positive.",
              "No energy change has occurred.",
            ],
            answerIndex: 1,
            explanation:
              "If the surroundings cool down, energy has been taken IN from them — the reaction is endothermic and ΔH is positive.",
            guideRef: "Exothermic and Endothermic Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm1-03",
            question: "What does the term 'enthalpy change' (ΔH) of a reaction mean?",
            options: [
              "The activation energy of the reaction",
              "The energy of the products only",
              "H(products) − H(reactants)",
              "The energy needed to break all the bonds in the reactants",
            ],
            answerIndex: 2,
            explanation:
              "ΔH is defined as the energy of the products minus the energy of the reactants: ΔH = H(products) − H(reactants). A negative value is exothermic; a positive value is endothermic.",
            guideRef: "Energy Level Diagrams",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm1-04",
            question:
              "On an energy level diagram for an exothermic reaction, where are the products drawn?",
            options: [
              "At a higher energy level than the reactants",
              "At the same energy level as the reactants",
              "At a lower energy level than the reactants",
              "At the same energy level as the peak",
            ],
            answerIndex: 2,
            explanation:
              "In an exothermic reaction energy is released, so the products have less stored chemical energy than the reactants — they are drawn at a lower energy level. ΔH is therefore negative.",
            guideRef: "Energy Level Diagrams",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm1-05",
            question:
              "An energy level diagram shows reactants at 90 kJ mol⁻¹, the peak at 250 kJ mol⁻¹ and products at 150 kJ mol⁻¹. What is the activation energy?",
            options: [
              "60 kJ mol⁻¹",
              "100 kJ mol⁻¹",
              "160 kJ mol⁻¹",
              "250 kJ mol⁻¹",
            ],
            answerIndex: 2,
            explanation:
              "Ea = peak − reactants = 250 − 90 = 160 kJ mol⁻¹. It is measured from the reactants level, not from zero. (ΔH would be 150 − 90 = +60 kJ mol⁻¹, a different quantity.)",
            guideRef: "Energy Level Diagrams",
            difficulty: "challenge",
            hints: [
              "Activation energy is the climb from the reactants level up to the top of the peak.",
              "Ea = E(peak) − E(reactants), not E(peak) − 0.",
              "Watch the distractors: 60 is |ΔH| and 250 is the absolute peak energy, not Ea.",
            ],
          },
          {
            id: "chem-energetics-bm1-06",
            question:
              "Which of these reactions is endothermic?",
            options: [
              "CH₄ + 2O₂ → CO₂ + 2H₂O",
              "HCl + NaOH → NaCl + H₂O",
              "CaCO₃ → CaO + CO₂",
              "C + O₂ → CO₂",
            ],
            answerIndex: 2,
            explanation:
              "Thermal decomposition of calcium carbonate, CaCO₃ → CaO + CO₂, absorbs heat and is endothermic. The other three (combustion and neutralisation) are exothermic.",
            guideRef: "Common Examples and Applications",
            difficulty: "core",
            hints: [
              "Combustion and neutralisation are exothermic.",
              "Which reaction needs continuous heating to keep going?",
              "Breaking a carbonate down by heating is thermal decomposition.",
            ],
          },
          {
            id: "chem-energetics-bm1-07",
            question:
              "For X₂ + Y₂ → 2XY the bond energies are X–X = 150, Y–Y = 250 and X–Y = 180 kJ mol⁻¹. What is ΔH?",
            options: [
              "+40 kJ mol⁻¹",
              "−40 kJ mol⁻¹",
              "+400 kJ mol⁻¹",
              "−360 kJ mol⁻¹",
            ],
            answerIndex: 0,
            explanation:
              "Bonds broken: X–X (150) + Y–Y (250) = 400 kJ. Bonds made: 2 × X–Y = 2 × 180 = 360 kJ. ΔH = 400 − 360 = +40 kJ mol⁻¹ (endothermic).",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Bonds broken: 1 X–X and 1 Y–Y. Bonds made: 2 X–Y.",
              "Total broken = 150 + 250 = 400. Total made = 2 × 180 = 360.",
              "ΔH = broken − made = 400 − 360.",
            ],
            strategy: "build a table",
          },
          {
            id: "chem-energetics-bm1-08",
            question:
              "Which statement about a catalyst is correct?",
            options: [
              "It makes a reaction more exothermic.",
              "It lowers the activation energy but does not change ΔH.",
              "It raises the energy level of the products.",
              "It is used up during the reaction.",
            ],
            answerIndex: 1,
            explanation:
              "A catalyst provides an alternative pathway with a lower activation energy. It is not used up, and it leaves the energy levels of reactants and products — and so ΔH — unchanged.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "A catalyst changes the route, not the start and end points.",
              "ΔH depends only on reactant and product energy levels.",
              "Is the catalyst consumed? No — it is regenerated.",
            ],
          },
          {
            id: "chem-energetics-bm1-09",
            question:
              "In a school experiment, 50 cm³ of dilute hydrochloric acid is added to 50 cm³ of sodium hydroxide solution and the temperature rises. Which conclusion is correct?",
            options: [
              "Bond breaking released more energy than bond making absorbed.",
              "Bond making released more energy than bond breaking absorbed.",
              "No bonds were broken in this reaction.",
              "The reaction is endothermic because energy was supplied.",
            ],
            answerIndex: 1,
            explanation:
              "A temperature rise shows the reaction is exothermic. Overall, more energy was released when new bonds formed (in the products) than was absorbed breaking the original bonds, giving a net release of energy.",
            guideRef: "Bond Breaking and Bond Making",
            difficulty: "core",
            hints: [
              "A temperature rise means an exothermic reaction overall.",
              "Exothermic means energy released making bonds exceeds energy absorbed breaking bonds.",
              "Bond breaking is always endothermic; bond making is always exothermic.",
            ],
          },
          {
            id: "chem-energetics-bm1-10",
            question:
              "An energy level diagram shows reactants at 200 kJ mol⁻¹, peak at 480 kJ mol⁻¹ and products at 320 kJ mol⁻¹. A catalyst lowers the peak to 400 kJ mol⁻¹. What are the catalysed Ea and ΔH?",
            options: [
              "Catalysed Ea = 200 kJ mol⁻¹; ΔH = +120 kJ mol⁻¹",
              "Catalysed Ea = 80 kJ mol⁻¹; ΔH = +120 kJ mol⁻¹",
              "Catalysed Ea = 280 kJ mol⁻¹; ΔH = +120 kJ mol⁻¹",
              "Catalysed Ea = 200 kJ mol⁻¹; ΔH = +280 kJ mol⁻¹",
            ],
            answerIndex: 0,
            explanation:
              "Catalysed Ea = new peak − reactants = 400 − 200 = 200 kJ mol⁻¹. ΔH = products − reactants = 320 − 200 = +120 kJ mol⁻¹, unchanged by the catalyst because the product level does not move.",
            guideRef: "Energy Level Diagrams",
            difficulty: "challenge",
            hints: [
              "Catalysed Ea uses the NEW peak (400) and the same reactants level (200).",
              "ΔH = E(products) − E(reactants); the catalyst does not move these levels.",
              "Check signs: products (320) > reactants (200), so ΔH is positive.",
            ],
          },
        ],
      },
      {
        id: "chem-energetics-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Bond breaking/making, bond energy calculations and reasoning about ΔH.",
        questions: [
          {
            id: "chem-energetics-bm2-01",
            question: "Which statement is always true?",
            options: [
              "Bond breaking releases energy.",
              "Bond making absorbs energy.",
              "Bond breaking absorbs energy and bond making releases energy.",
              "Both bond breaking and bond making release energy.",
            ],
            answerIndex: 2,
            explanation:
              "Bond breaking is always endothermic (energy absorbed) and bond making is always exothermic (energy released). Whether the overall reaction is exo- or endothermic depends on which is larger.",
            guideRef: "Bond Breaking and Bond Making",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm2-02",
            question: "What are the units of bond energy?",
            options: [
              "kJ",
              "kJ mol⁻¹",
              "°C",
              "mol",
            ],
            answerIndex: 1,
            explanation:
              "Bond energy is the energy needed to break one mole of a particular bond, so its units are kJ mol⁻¹.",
            guideRef: "Bond Breaking and Bond Making",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm2-03",
            question: "Bond energy values quoted in data books are always:",
            options: [
              "negative, because breaking bonds releases energy",
              "positive, because energy must be supplied to break a bond",
              "zero for very stable molecules",
              "the same for every type of bond",
            ],
            answerIndex: 1,
            explanation:
              "Breaking a bond always requires energy to be put in, so bond energies are quoted as positive values (kJ mol⁻¹).",
            guideRef: "Bond Breaking and Bond Making",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm2-04",
            question:
              "Using H–H = 436, Br–Br = 193 and H–Br = 366 kJ mol⁻¹, what is ΔH for H₂(g) + Br₂(g) → 2HBr(g)?",
            options: [
              "−103 kJ mol⁻¹",
              "+103 kJ mol⁻¹",
              "−629 kJ mol⁻¹",
              "+732 kJ mol⁻¹",
            ],
            answerIndex: 0,
            explanation:
              "Bonds broken: H–H (436) + Br–Br (193) = 629 kJ. Bonds made: 2 × H–Br = 2 × 366 = 732 kJ. ΔH = 629 − 732 = −103 kJ mol⁻¹ (exothermic).",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Bonds broken: 1 H–H and 1 Br–Br. Bonds made: 2 H–Br.",
              "Total broken = 436 + 193 = 629. Total made = 2 × 366 = 732.",
              "ΔH = 629 − 732.",
            ],
            strategy: "build a table",
          },
          {
            id: "chem-energetics-bm2-05",
            question:
              "A reaction has ΔH = −210 kJ mol⁻¹. Which statement must be true?",
            options: [
              "The reaction is endothermic.",
              "More energy was absorbed breaking bonds than released making bonds.",
              "The products are at a lower energy level than the reactants.",
              "The activation energy is 210 kJ mol⁻¹.",
            ],
            answerIndex: 2,
            explanation:
              "A negative ΔH means the reaction is exothermic: more energy is released making bonds than absorbed breaking them, and the products sit lower than the reactants. ΔH tells us nothing about the value of Ea.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "Negative ΔH → exothermic.",
              "Exothermic means products are lower in energy than reactants.",
              "ΔH and Ea are different quantities — ΔH does not give Ea.",
            ],
          },
          {
            id: "chem-energetics-bm2-06",
            question:
              "For Cl₂ + 3F₂ → 2ClF₃ assume only one bond of each type. Which is the correct expression for ΔH using bonds broken and bonds formed (Cl–Cl = 243, F–F = 158, Cl–F = 255 kJ mol⁻¹; ClF₃ has 3 Cl–F bonds)?",
            options: [
              "ΔH = [243 + 3(158)] − [6 × 255]",
              "ΔH = [6 × 255] − [243 + 3(158)]",
              "ΔH = [243 + 158] − [3 × 255]",
              "ΔH = [243 + 3(158)] + [6 × 255]",
            ],
            answerIndex: 0,
            explanation:
              "Bonds broken: 1 Cl–Cl + 3 F–F = 243 + 3(158). Bonds made: 2 ClF₃, each with 3 Cl–F bonds = 6 Cl–F = 6 × 255. ΔH = broken − made = [243 + 3(158)] − [6 × 255].",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Count molecules: 3F₂ has 3 F–F bonds; 2ClF₃ has 2 × 3 = 6 Cl–F bonds.",
              "ΔH = Σ(bonds broken) − Σ(bonds formed).",
              "Broken side gets Cl–Cl and the F–F bonds; formed side gets all the Cl–F bonds.",
            ],
          },
          {
            id: "chem-energetics-bm2-07",
            question:
              "Why is a ΔH value calculated from bond energies only approximate?",
            options: [
              "Bond energies are average values that vary slightly between molecules.",
              "Bond breaking is exothermic so the sign is uncertain.",
              "The balanced equation is never known accurately.",
              "Bond energies are measured in the solid state, not the gas state.",
            ],
            answerIndex: 0,
            explanation:
              "Tabulated bond energies are average values; the actual energy of, say, a C–H bond differs a little between compounds. So a bond-energy calculation gives an approximate, not exact, ΔH.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Think about whether a C–H bond is identical in every molecule.",
              "Data-book values are described as 'average' bond energies.",
              "Averaging introduces small differences from the true value.",
            ],
          },
          {
            id: "chem-energetics-bm2-08",
            question:
              "Hydrogen burns: 2H₂(g) + O₂(g) → 2H₂O(g). Using H–H = 436, O=O = 498, O–H = 464 kJ mol⁻¹, what is ΔH?",
            options: [
              "−486 kJ mol⁻¹",
              "+486 kJ mol⁻¹",
              "−1370 kJ mol⁻¹",
              "−243 kJ mol⁻¹",
            ],
            answerIndex: 0,
            explanation:
              "Bonds broken: 2 × H–H (2 × 436 = 872) + 1 × O=O (498) = 1370 kJ. Bonds made: 2H₂O has 4 O–H bonds = 4 × 464 = 1856 kJ. ΔH = 1370 − 1856 = −486 kJ mol⁻¹ (exothermic).",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Use the coefficients: 2H₂ gives 2 H–H bonds; 2H₂O gives 4 O–H bonds.",
              "Total broken = 2(436) + 498. Total made = 4(464).",
              "ΔH = broken − made; expect a negative answer.",
              "1370 − 1856 = −486.",
            ],
            strategy: "build a table",
          },
          {
            id: "chem-energetics-bm2-09",
            question:
              "For a certain reaction, energy absorbed breaking bonds = 2750 kJ and energy released making bonds = 2600 kJ. What is ΔH and is the reaction exo- or endothermic?",
            options: [
              "ΔH = −150 kJ mol⁻¹; exothermic",
              "ΔH = +150 kJ mol⁻¹; endothermic",
              "ΔH = +5350 kJ mol⁻¹; endothermic",
              "ΔH = −5350 kJ mol⁻¹; exothermic",
            ],
            answerIndex: 1,
            explanation:
              "ΔH = energy in − energy out = 2750 − 2600 = +150 kJ mol⁻¹. More energy was needed to break bonds than was released making them, so the reaction is endothermic.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "ΔH = (energy to break bonds) − (energy released making bonds).",
              "2750 − 2600 = +150.",
              "A positive ΔH means endothermic.",
            ],
          },
          {
            id: "chem-energetics-bm2-10",
            question:
              "Hydrogen reacts with chlorine: H₂ + Cl₂ → 2HCl, ΔH = −185 kJ mol⁻¹. The same masses react but a catalyst is added. Which statement is correct?",
            options: [
              "ΔH becomes more negative because the reaction is faster.",
              "ΔH stays −185 kJ mol⁻¹; only the activation energy is lowered.",
              "ΔH becomes positive.",
              "The bond energies of H–Cl change.",
            ],
            answerIndex: 1,
            explanation:
              "A catalyst lowers the activation energy and speeds up the reaction but does not alter the energy levels of reactants or products, so ΔH stays at −185 kJ mol⁻¹.",
            guideRef: "Energy Level Diagrams",
            difficulty: "challenge",
            hints: [
              "A catalyst affects rate, not the overall energy change.",
              "ΔH is fixed by the start and end states.",
              "Only Ea (the peak height) changes.",
            ],
          },
        ],
      },
      {
        id: "chem-energetics-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Energy level diagrams, activation energy, catalysts and interpreting evidence.",
        questions: [
          {
            id: "chem-energetics-bm3-01",
            question: "What is activation energy?",
            options: [
              "The energy released when products form",
              "The minimum energy colliding particles need for a reaction to occur",
              "The difference in energy between products and reactants",
              "The total energy stored in the reactants",
            ],
            answerIndex: 1,
            explanation:
              "Activation energy (Ea) is the minimum energy that colliding particles must have for a reaction to happen. On a diagram it is the height from the reactants level to the peak.",
            guideRef: "Energy Level Diagrams",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm3-02",
            question: "On an endothermic energy level diagram, the ΔH arrow points:",
            options: [
              "downwards, from reactants to products",
              "upwards, from reactants to products",
              "downwards, from products to reactants",
              "horizontally",
            ],
            answerIndex: 1,
            explanation:
              "In an endothermic reaction the products are higher than the reactants, so the ΔH arrow is drawn pointing upwards from the reactants level to the (higher) products level, indicating a positive ΔH.",
            guideRef: "Energy Level Diagrams",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm3-03",
            question: "Which is a classic endothermic process used in the lab?",
            options: [
              "Adding magnesium to dilute acid",
              "Dissolving ammonium nitrate in water",
              "Burning a candle",
              "Mixing acid and alkali",
            ],
            answerIndex: 1,
            explanation:
              "Dissolving ammonium nitrate in water absorbs energy and the temperature falls — a simple endothermic demonstration. The other three are exothermic.",
            guideRef: "Common Examples and Applications",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm3-04",
            question:
              "A reaction profile shows reactants at 60 kJ mol⁻¹, peak at 140 kJ mol⁻¹ and products at 100 kJ mol⁻¹. What are Ea and ΔH?",
            options: [
              "Ea = 80 kJ mol⁻¹; ΔH = +40 kJ mol⁻¹",
              "Ea = 140 kJ mol⁻¹; ΔH = +40 kJ mol⁻¹",
              "Ea = 80 kJ mol⁻¹; ΔH = −40 kJ mol⁻¹",
              "Ea = 40 kJ mol⁻¹; ΔH = +80 kJ mol⁻¹",
            ],
            answerIndex: 0,
            explanation:
              "Ea = peak − reactants = 140 − 60 = 80 kJ mol⁻¹. ΔH = products − reactants = 100 − 60 = +40 kJ mol⁻¹ (endothermic).",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "core",
            hints: [
              "Ea = E(peak) − E(reactants).",
              "ΔH = E(products) − E(reactants).",
              "Products (100) above reactants (60) → positive ΔH.",
            ],
          },
          {
            id: "chem-energetics-bm3-05",
            question:
              "Two reactions have the same ΔH but reaction P has a higher activation energy than reaction Q. Which is correct?",
            options: [
              "P releases more energy overall than Q.",
              "Q has a higher peak on its energy level diagram than P.",
              "P needs more energy to get started than Q.",
              "Q is exothermic while P is endothermic.",
            ],
            answerIndex: 2,
            explanation:
              "A higher activation energy means a higher peak, so more energy is needed for particles to react and get the reaction started. The same ΔH means the same overall energy change, so neither releases more overall.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "Higher Ea = higher peak = harder to start.",
              "Same ΔH means the same overall energy change.",
              "Ea is about starting; ΔH is about the net change.",
            ],
          },
          {
            id: "chem-energetics-bm3-06",
            question:
              "Which sketch change correctly shows the effect of a catalyst on a reaction profile?",
            options: [
              "The reactant level is raised",
              "The product level is lowered",
              "The peak is lowered, reactant and product levels unchanged",
              "Both the peak and the product level are lowered",
            ],
            answerIndex: 2,
            explanation:
              "A catalyst lowers the peak (activation energy) only. The reactant and product energy levels stay exactly the same, so ΔH is unchanged.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "core",
            hints: [
              "A catalyst changes only the height of the peak.",
              "Reactants and products keep the same energy levels.",
              "ΔH must be unchanged, so the valleys do not move.",
            ],
          },
          {
            id: "chem-energetics-bm3-07",
            question:
              "An exothermic reaction has ΔH = −120 kJ mol⁻¹ and Ea = 50 kJ mol⁻¹. If the reactants are set at 0 kJ mol⁻¹, what are the peak and product energy levels?",
            options: [
              "Peak = +50; products = −120 kJ mol⁻¹",
              "Peak = −50; products = +120 kJ mol⁻¹",
              "Peak = +120; products = −50 kJ mol⁻¹",
              "Peak = +50; products = +120 kJ mol⁻¹",
            ],
            answerIndex: 0,
            explanation:
              "From reactants at 0, the peak is +Ea = +50 kJ mol⁻¹. Products are at ΔH = −120 kJ mol⁻¹ (below the reactants, since the reaction is exothermic).",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "challenge",
            hints: [
              "Peak = reactants + Ea = 0 + 50.",
              "Products = reactants + ΔH = 0 + (−120).",
              "Exothermic means products are below the reactants level.",
            ],
          },
          {
            id: "chem-energetics-bm3-08",
            question:
              "A reaction is found to be very slow at room temperature but speeds up greatly on heating, with no change in the products. The best explanation is:",
            options: [
              "Heating makes the reaction exothermic.",
              "Heating lowers the activation energy of the reaction.",
              "Heating gives more particles energy greater than the activation energy.",
              "Heating changes ΔH to a negative value.",
            ],
            answerIndex: 2,
            explanation:
              "Heating does not change Ea or ΔH. It gives the particles more kinetic energy, so a greater proportion of collisions have energy ≥ Ea, and the rate rises.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "challenge",
            hints: [
              "Heating does not alter Ea or ΔH.",
              "What does heating do to the energy of the particles?",
              "More particles now exceed the activation energy.",
            ],
          },
          {
            id: "chem-energetics-bm3-09",
            question:
              "A diagram shows reactants at 300 kJ mol⁻¹ and products at 460 kJ mol⁻¹. Which describes the reaction?",
            options: [
              "Exothermic; ΔH = −160 kJ mol⁻¹",
              "Endothermic; ΔH = +160 kJ mol⁻¹",
              "Exothermic; ΔH = +160 kJ mol⁻¹",
              "Endothermic; ΔH = −160 kJ mol⁻¹",
            ],
            answerIndex: 1,
            explanation:
              "Products (460) are higher than reactants (300), so the reaction is endothermic. ΔH = 460 − 300 = +160 kJ mol⁻¹.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "core",
            hints: [
              "Compare product and reactant levels.",
              "Products higher → endothermic → positive ΔH.",
              "ΔH = 460 − 300.",
            ],
          },
          {
            id: "chem-energetics-bm3-10",
            question:
              "Which statement about Ea and ΔH on a reaction profile is correct?",
            options: [
              "Ea is measured from zero to the peak.",
              "ΔH is measured from the peak to the products.",
              "Ea is measured from the reactants level to the peak; ΔH from reactants to products.",
              "Ea and ΔH are always equal in magnitude.",
            ],
            answerIndex: 2,
            explanation:
              "Ea is the height from the reactants level up to the peak; ΔH is the vertical difference between reactants and products levels. They are independent quantities.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "Both are measured starting from the reactants level.",
              "Ea goes up to the peak; ΔH goes across to the products.",
              "They are not generally equal.",
            ],
          },
        ],
      },
      {
        id: "chem-energetics-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Mixed synoptic questions: classification, bond energies, profiles and applications.",
        questions: [
          {
            id: "chem-energetics-bm4-01",
            question: "Respiration in cells is best described as:",
            options: [
              "endothermic, because it requires oxygen",
              "exothermic, because it releases energy from glucose",
              "neither exothermic nor endothermic",
              "endothermic, because it absorbs light",
            ],
            answerIndex: 1,
            explanation:
              "Respiration releases energy from glucose for the body to use, so it is exothermic (ΔH negative). Photosynthesis, by contrast, is endothermic.",
            guideRef: "Common Examples and Applications",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm4-02",
            question: "In an exothermic reaction, the chemical energy stored in the system:",
            options: [
              "increases",
              "decreases",
              "stays the same",
              "becomes zero",
            ],
            answerIndex: 1,
            explanation:
              "In an exothermic reaction energy leaves the system to the surroundings, so the chemical energy stored in the products is less than that in the reactants — it decreases.",
            guideRef: "Exothermic and Endothermic Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm4-03",
            question: "Photosynthesis is endothermic. Where does the energy it absorbs come from?",
            options: [
              "Heat from respiration",
              "Light energy",
              "Chemical energy in oxygen",
              "Kinetic energy of water",
            ],
            answerIndex: 1,
            explanation:
              "Photosynthesis absorbs light energy, which is stored as chemical energy in glucose. This makes it an endothermic process.",
            guideRef: "Common Examples and Applications",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bm4-04",
            question:
              "Methane burns: CH₄ + 2O₂ → CO₂ + 2H₂O(g). Using C–H = 413, O=O = 498, C=O = 805, O–H = 464 kJ mol⁻¹, what is ΔH?",
            options: [
              "−818 kJ mol⁻¹",
              "+818 kJ mol⁻¹",
              "−498 kJ mol⁻¹",
              "−1638 kJ mol⁻¹",
            ],
            answerIndex: 0,
            explanation:
              "Bonds broken: 4 × C–H (1652) + 2 × O=O (996) = 2648 kJ. Bonds made: 2 × C=O (1610) + 4 × O–H (1856) = 3466 kJ. ΔH = 2648 − 3466 = −818 kJ mol⁻¹.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "CH₄ has 4 C–H bonds; 2O₂ has 2 O=O bonds.",
              "CO₂ has 2 C=O bonds; each H₂O has 2 O–H, so 2H₂O has 4 O–H.",
              "Broken = 4(413) + 2(498) = 2648. Made = 2(805) + 4(464) = 3466.",
              "ΔH = 2648 − 3466.",
            ],
            strategy: "build a table",
          },
          {
            id: "chem-energetics-bm4-05",
            question:
              "Which combination correctly classifies the reactions? P: CaCO₃ → CaO + CO₂; Q: HCl + NaOH → NaCl + H₂O",
            options: [
              "P endothermic, Q exothermic",
              "P exothermic, Q endothermic",
              "Both endothermic",
              "Both exothermic",
            ],
            answerIndex: 0,
            explanation:
              "P is thermal decomposition (endothermic, needs continuous heating). Q is neutralisation (exothermic, temperature rises).",
            guideRef: "Common Examples and Applications",
            difficulty: "core",
            hints: [
              "Decomposition by heating is endothermic.",
              "Acid + alkali neutralisation is exothermic.",
              "Match each one separately.",
            ],
          },
          {
            id: "chem-energetics-bm4-06",
            question:
              "The reaction H₂ + ½O₂ → H₂O(g) has ΔH = −243 kJ mol⁻¹. What is ΔH for 2H₂ + O₂ → 2H₂O(g)?",
            options: [
              "−243 kJ mol⁻¹",
              "−486 kJ mol⁻¹",
              "−121.5 kJ mol⁻¹",
              "+486 kJ mol⁻¹",
            ],
            answerIndex: 1,
            explanation:
              "Doubling the amounts of everything in the equation doubles the energy change: 2 × (−243) = −486 kJ mol⁻¹.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "The second equation is exactly twice the first.",
              "If you double the moles reacting, you double ΔH.",
              "2 × (−243).",
            ],
          },
          {
            id: "chem-energetics-bm4-07",
            question:
              "For C₂H₄ + H₂ → C₂H₆ (hydrogenation), bonds broken include 1 C=C and 1 H–H, and a C–C and 2 C–H bonds form. Using C=C = 612, H–H = 436, C–C = 347, C–H = 413 kJ mol⁻¹, what is ΔH? (Treat the four original C–H bonds in C₂H₄ as unchanged.)",
            options: [
              "−125 kJ mol⁻¹",
              "+125 kJ mol⁻¹",
              "−1048 kJ mol⁻¹",
              "+923 kJ mol⁻¹",
            ],
            answerIndex: 0,
            explanation:
              "Net bonds broken: C=C (612) + H–H (436) = 1048 kJ. Net bonds formed: C–C (347) + 2 × C–H (2 × 413 = 826) = 1173 kJ. ΔH = 1048 − 1173 = −125 kJ mol⁻¹ (exothermic).",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Only the bonds that change matter: break C=C and H–H, form one C–C and two new C–H.",
              "Broken = 612 + 436 = 1048. Formed = 347 + 2(413) = 1173.",
              "ΔH = broken − formed = 1048 − 1173.",
              "Expect a negative (exothermic) answer.",
            ],
            strategy: "build a table",
          },
          {
            id: "chem-energetics-bm4-08",
            question:
              "A reaction has ΔH = +52 kJ mol⁻¹. On a reaction profile with reactants set at 0, where are the products?",
            options: [
              "52 kJ mol⁻¹ below the reactants",
              "52 kJ mol⁻¹ above the reactants",
              "at the same level as the reactants",
              "at the peak",
            ],
            answerIndex: 1,
            explanation:
              "A positive ΔH (endothermic) means the products are higher than the reactants by the value of ΔH, i.e. 52 kJ mol⁻¹ above them.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "Positive ΔH means endothermic.",
              "Products = reactants + ΔH.",
              "0 + 52 = +52, so above the reactants.",
            ],
          },
          {
            id: "chem-energetics-bm4-09",
            question:
              "Which piece of evidence, on its own, best shows that a reaction is endothermic?",
            options: [
              "A gas is produced.",
              "The temperature of the reaction mixture falls.",
              "A colour change occurs.",
              "A precipitate forms.",
            ],
            answerIndex: 1,
            explanation:
              "A fall in the temperature of the mixture (the surroundings) shows energy is being absorbed by the reaction — direct evidence that it is endothermic. Gas, colour and precipitate changes do not indicate the direction of energy flow.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "core",
            hints: [
              "Energetics is about energy/temperature, not appearance.",
              "Endothermic = energy absorbed = surroundings cool.",
              "Which option is a temperature observation?",
            ],
          },
          {
            id: "chem-energetics-bm4-10",
            question:
              "Reaction A: ΔH = −90 kJ mol⁻¹, Ea = 30 kJ mol⁻¹. Reaction B: ΔH = −90 kJ mol⁻¹, Ea = 70 kJ mol⁻¹. Which is correct?",
            options: [
              "A and B release the same amount of energy overall, but A starts more easily.",
              "B releases more energy overall than A.",
              "A is endothermic and B is exothermic.",
              "B has a lower peak than A on its reaction profile.",
            ],
            answerIndex: 0,
            explanation:
              "Both have ΔH = −90 kJ mol⁻¹, so the same overall energy is released. A has the lower Ea (30 < 70), so it has the lower peak and starts more easily.",
            guideRef: "Energy Level Diagrams",
            difficulty: "challenge",
            hints: [
              "Same ΔH means same overall energy change.",
              "Lower Ea means a lower peak and an easier start.",
              "A's Ea (30) is lower than B's (70).",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-energetics-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Exothermic/endothermic classification, evidence and word equations.",
        questions: [
          {
            id: "chem-energetics-bq1-01",
            question:
              "A student adds dilute hydrochloric acid to potassium hydroxide solution. The temperature rises by 7 °C.\n\n" +
              "(a) State whether the reaction is exothermic or endothermic. [1]\n" +
              "(b) State the sign of ΔH. [1]\n" +
              "(c) Name the type of reaction taking place between an acid and an alkali. [1]",
            marks: 3,
            modelAnswer:
              "(a) Exothermic.\n" +
              "(b) ΔH is negative.\n" +
              "(c) Neutralisation.",
            markScheme: [
              "Exothermic (1)",
              "ΔH negative / ΔH < 0 (1)",
              "Neutralisation (1)",
            ],
            commonError:
              "Linking a temperature RISE with a positive ΔH. A rise in temperature means energy is RELEASED, so ΔH is NEGATIVE.",
            guideRef: "Exothermic and Endothermic Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bq1-02",
            question:
              "Define each term.\n\n" +
              "(a) Exothermic reaction. [2]\n" +
              "(b) Endothermic reaction. [2]",
            marks: 4,
            modelAnswer:
              "(a) A reaction that transfers/releases energy to the surroundings, so the temperature of the surroundings rises (ΔH negative).\n" +
              "(b) A reaction that takes in/absorbs energy from the surroundings, so the temperature of the surroundings falls (ΔH positive).",
            markScheme: [
              "Exothermic: energy released / transferred to surroundings (1)",
              "Exothermic: temperature of surroundings rises / ΔH negative (1)",
              "Endothermic: energy taken in / absorbed from surroundings (1)",
              "Endothermic: temperature of surroundings falls / ΔH positive (1)",
            ],
            commonError:
              "Vague answers such as 'gives out heat' without saying TO the surroundings, or muddling which way energy flows.",
            guideRef: "Exothermic and Endothermic Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bq1-03",
            question:
              "For each process, state whether it is exothermic or endothermic.\n\n" +
              "(a) Combustion of ethanol. [1]\n" +
              "(b) Thermal decomposition of copper(II) carbonate. [1]\n" +
              "(c) Dissolving ammonium nitrate in water. [1]\n" +
              "(d) Respiration. [1]",
            marks: 4,
            modelAnswer:
              "(a) Exothermic.\n" +
              "(b) Endothermic.\n" +
              "(c) Endothermic.\n" +
              "(d) Exothermic.",
            markScheme: [
              "(a) Exothermic (1)",
              "(b) Endothermic (1)",
              "(c) Endothermic (1)",
              "(d) Exothermic (1)",
            ],
            commonError:
              "Assuming all reactions that 'happen on their own' are exothermic — dissolving ammonium nitrate is spontaneous yet endothermic.",
            guideRef: "Common Examples and Applications",
            difficulty: "core",
            hints: [
              "Combustion and respiration release energy.",
              "Thermal decomposition needs continuous heating.",
              "Dissolving ammonium nitrate makes the water cold.",
            ],
          },
          {
            id: "chem-energetics-bq1-04",
            question:
              "A student investigates the reaction between citric acid solution and sodium hydrogencarbonate. The temperature drops from 21 °C to 14 °C.\n\n" +
              "(a) Calculate the temperature change. [1]\n" +
              "(b) State whether the reaction is exothermic or endothermic. [1]\n" +
              "(c) State the sign of ΔH. [1]\n" +
              "(d) Explain, in terms of energy and the surroundings, why the temperature changed as it did. [2]",
            marks: 5,
            modelAnswer:
              "(a) ΔT = 14 − 21 = −7 °C (a fall of 7 °C).\n" +
              "(b) Endothermic.\n" +
              "(c) ΔH is positive.\n" +
              "(d) The reaction absorbs/takes in energy from the surroundings (the solution). As the surroundings lose energy, their temperature falls.",
            markScheme: [
              "Temperature change = 7 °C fall / −7 °C (1)",
              "Endothermic (1)",
              "ΔH positive (1)",
              "Energy absorbed / taken in from surroundings (1)",
              "Surroundings lose energy so temperature falls (1)",
            ],
            commonError:
              "Forgetting to state the direction of the change (a fall) or giving ΔH the wrong sign for an endothermic reaction.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "core",
            hints: [
              "Temperature change = final − initial.",
              "A fall in temperature means energy is taken in.",
              "Endothermic reactions have a positive ΔH.",
              "Explain in terms of the surroundings losing energy.",
            ],
          },
          {
            id: "chem-energetics-bq1-05",
            question:
              "Magnesium reacts with dilute hydrochloric acid and the temperature of the solution rises.\n\n" +
              "(a) Is the reaction exothermic or endothermic? [1]\n" +
              "(b) Write a balanced symbol equation for the reaction. [2]\n" +
              "(c) Suggest one way the student could obtain a more reliable maximum temperature reading. [1]",
            marks: 4,
            modelAnswer:
              "(a) Exothermic.\n" +
              "(b) Mg + 2HCl → MgCl₂ + H₂.\n" +
              "(c) Take temperature readings at regular intervals and record the highest value / use a lid/insulated cup to reduce heat loss / stir the mixture.",
            markScheme: [
              "Exothermic (1)",
              "Correct formulae: Mg, HCl, MgCl₂, H₂ (1)",
              "Correctly balanced: Mg + 2HCl → MgCl₂ + H₂ (1)",
              "Sensible improvement: record max temperature / insulate / stir (1)",
            ],
            commonError:
              "Writing MgCl instead of MgCl₂, or not balancing the HCl (needs a 2).",
            guideRef: "Exothermic and Endothermic Reactions",
            difficulty: "core",
            hints: [
              "A temperature rise indicates an exothermic reaction.",
              "Magnesium is +2; chloride is −1, so the salt is MgCl₂.",
              "Balance the hydrogen and chlorine by putting 2 in front of HCl.",
            ],
          },
          {
            id: "chem-energetics-bq1-06",
            question:
              "Explain why thermal decomposition reactions are described as endothermic, referring to what happens if the heat source is removed. [3]",
            marks: 3,
            modelAnswer:
              "Thermal decomposition takes in/absorbs energy from the surroundings to break the compound down, so it is endothermic. Energy must be supplied continuously. If the heat source is removed, the reaction stops because there is no longer enough energy being supplied to keep it going.",
            markScheme: [
              "Energy taken in / absorbed (from surroundings) (1)",
              "Energy must be supplied continuously / continuous heating needed (1)",
              "Removing the heat stops the reaction (1)",
            ],
            commonError:
              "Stating only that 'it needs heat' without linking continuous energy input to the endothermic classification.",
            guideRef: "Common Examples and Applications",
            difficulty: "core",
            hints: [
              "Endothermic = energy absorbed.",
              "Why must you keep heating a decomposition?",
              "What happens to the reaction when you take the heat away?",
            ],
          },
          {
            id: "chem-energetics-bq1-07",
            question:
              "A student claims: 'If a reaction gives off a gas, it must be exothermic.' Evaluate this statement and justify your answer with an example. [3]",
            marks: 3,
            modelAnswer:
              "The statement is incorrect. Giving off a gas is not evidence about the direction of energy flow; only a temperature change tells you that. For example, thermal decomposition of calcium carbonate gives off carbon dioxide gas but is endothermic, while dissolving ammonium nitrate (no gas) is also endothermic. Energetics is judged by temperature change, not by gas production.",
            markScheme: [
              "Statement is incorrect / not necessarily true (1)",
              "Gas production does not indicate energy direction; temperature change does (1)",
              "Valid example: CaCO₃ → CaO + CO₂ gives off gas but is endothermic (1)",
            ],
            commonError:
              "Agreeing with the statement; confusing observable changes (gas, precipitate) with energy changes.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "challenge",
            hints: [
              "Is the production of a gas about energy, or about products?",
              "What single observation actually tells you the energy direction?",
              "Think of an endothermic reaction that produces a gas.",
            ],
          },
          {
            id: "chem-energetics-bq1-08",
            question:
              "Hand warmers can use the crystallisation of a supersaturated solution, which releases heat.\n\n" +
              "(a) State whether crystallisation in a hand warmer is exothermic or endothermic. [1]\n" +
              "(b) State the sign of ΔH. [1]\n" +
              "(c) Cold packs for sports injuries use ammonium nitrate dissolving in water. State whether this is exothermic or endothermic and explain how it cools the injury. [3]",
            marks: 5,
            modelAnswer:
              "(a) Exothermic.\n" +
              "(b) ΔH is negative.\n" +
              "(c) Endothermic. Dissolving ammonium nitrate absorbs energy from the surroundings (the pack and the skin). As energy is taken from the injured area, its temperature falls, cooling it.",
            markScheme: [
              "Exothermic (1)",
              "ΔH negative (1)",
              "Endothermic (1)",
              "Absorbs / takes in energy from surroundings (1)",
              "Surroundings (skin/injury) lose energy so temperature falls (1)",
            ],
            commonError:
              "Saying the cold pack 'adds cold' — cold is not added; energy is removed from the surroundings.",
            guideRef: "Common Examples and Applications",
            difficulty: "challenge",
            hints: [
              "Releasing heat = exothermic; absorbing heat = endothermic.",
              "Ammonium nitrate dissolving makes water cold.",
              "Explain cooling as energy being TAKEN FROM the surroundings.",
            ],
          },
          {
            id: "chem-energetics-bq1-09",
            question:
              "State whether each statement is true or false, and correct any that are false.\n\n" +
              "(a) In an exothermic reaction ΔH is positive. [1]\n" +
              "(b) Endothermic reactions cause the surroundings to cool. [1]\n" +
              "(c) Combustion is endothermic. [1]",
            marks: 3,
            modelAnswer:
              "(a) False — in an exothermic reaction ΔH is negative.\n" +
              "(b) True.\n" +
              "(c) False — combustion is exothermic.",
            markScheme: [
              "(a) False; ΔH is negative (1)",
              "(b) True (1)",
              "(c) False; combustion is exothermic (1)",
            ],
            commonError:
              "Marking (a) true by confusing the sign convention.",
            guideRef: "Exothermic and Endothermic Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bq1-10",
            question:
              "Two reactions both reach completion. Reaction 1 raises the surrounding temperature; reaction 2 lowers it.\n\n" +
              "(a) Classify each reaction. [2]\n" +
              "(b) Compare the chemical energy stored in the products with that in the reactants for each reaction. [2]",
            marks: 4,
            modelAnswer:
              "(a) Reaction 1 is exothermic; reaction 2 is endothermic.\n" +
              "(b) In reaction 1 (exothermic) the products store less chemical energy than the reactants. In reaction 2 (endothermic) the products store more chemical energy than the reactants.",
            markScheme: [
              "Reaction 1 exothermic (1)",
              "Reaction 2 endothermic (1)",
              "Exothermic: products store less energy than reactants (1)",
              "Endothermic: products store more energy than reactants (1)",
            ],
            commonError:
              "Reversing the energy comparison — in exothermic reactions the products are LOWER in energy.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "Temperature rise → exothermic; fall → endothermic.",
              "Exothermic releases energy, so products end up lower in energy.",
              "Endothermic stores energy, so products end up higher in energy.",
            ],
          },
        ],
      },
      {
        id: "chem-energetics-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Energy level diagrams, activation energy and the effect of catalysts.",
        questions: [
          {
            id: "chem-energetics-bq2-01",
            question:
              "Draw and label an energy level diagram for an exothermic reaction. Your diagram should include reactants, products, the activation energy (Ea) and ΔH. [4]",
            marks: 4,
            modelAnswer:
              "Diagram: a horizontal reactants line on the left, higher than a horizontal products line on the right, joined by a curve that rises to a peak (the transition state) and then falls.\n" +
              "- Reactants line labelled, higher than products.\n" +
              "- Products line labelled, lower than reactants.\n" +
              "- Ea labelled as the vertical height from the reactants level up to the peak.\n" +
              "- ΔH labelled as a downward arrow from the reactants level to the products level (negative).",
            markScheme: [
              "Reactants drawn higher than products (1)",
              "Curve rises to a peak / transition state between them (1)",
              "Ea labelled from reactants level to peak (1)",
              "ΔH labelled (downward arrow) between reactant and product levels (1)",
            ],
            commonError:
              "Measuring Ea from zero or from the products, and drawing ΔH the wrong way (it should point down for exothermic).",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "For exothermic, products must be LOWER than reactants.",
              "Ea is from the reactants level to the top of the peak.",
              "ΔH is the gap between reactant and product levels.",
              "Use a downward arrow for ΔH (negative).",
            ],
          },
          {
            id: "chem-energetics-bq2-02",
            question:
              "An energy level diagram shows: reactants at 120 kJ mol⁻¹, peak at 300 kJ mol⁻¹, products at 60 kJ mol⁻¹.\n\n" +
              "(a) Calculate the activation energy. [1]\n" +
              "(b) Calculate ΔH. [1]\n" +
              "(c) State whether the reaction is exothermic or endothermic, and justify. [2]",
            marks: 4,
            modelAnswer:
              "(a) Ea = peak − reactants = 300 − 120 = 180 kJ mol⁻¹.\n" +
              "(b) ΔH = products − reactants = 60 − 120 = −60 kJ mol⁻¹.\n" +
              "(c) Exothermic, because the products are at a lower energy level than the reactants, so ΔH is negative and energy is released to the surroundings.",
            markScheme: [
              "Ea = 300 − 120 = 180 kJ mol⁻¹ (1)",
              "ΔH = 60 − 120 = −60 kJ mol⁻¹ (1)",
              "Exothermic (1)",
              "Products lower than reactants / ΔH negative / energy released (1)",
            ],
            commonError:
              "Taking Ea as 300 (from zero) rather than 180, or dropping the negative sign on ΔH.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "Ea = E(peak) − E(reactants).",
              "ΔH = E(products) − E(reactants).",
              "Products (60) below reactants (120) → exothermic.",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Activation energy is the climb from reactants up to the peak: Ea = 300 − 120 = 180 kJ mol⁻¹.",
                  "Enthalpy change is products minus reactants: ΔH = 60 − 120 = −60 kJ mol⁻¹.",
                  "Sign check: ΔH is negative, so the reaction is exothermic (products lower than reactants).",
                  "Units: all energies in kJ mol⁻¹.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq2-03",
            question:
              "A catalyst is added to a reaction.\n\n" +
              "(a) Define a catalyst. [1]\n" +
              "(b) State the effect of the catalyst on the activation energy. [1]\n" +
              "(c) State the effect of the catalyst on ΔH. [1]\n" +
              "(d) Explain why the effect on ΔH is what you have stated. [2]",
            marks: 5,
            modelAnswer:
              "(a) A catalyst is a substance that speeds up a reaction without being used up.\n" +
              "(b) It lowers/decreases the activation energy.\n" +
              "(c) ΔH is unchanged.\n" +
              "(d) ΔH depends only on the energy levels of the reactants and products. A catalyst provides an alternative pathway (lower peak) but does not change the reactants or products, so their energy levels — and so ΔH — stay the same.",
            markScheme: [
              "Catalyst speeds up reaction / not used up (1)",
              "Lowers / decreases activation energy (1)",
              "ΔH unchanged (1)",
              "ΔH depends only on reactant and product energy levels (1)",
              "Catalyst changes the pathway/peak but not the reactants/products (1)",
            ],
            commonError:
              "Claiming a catalyst makes a reaction 'more exothermic' or changes ΔH.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "A catalyst is regenerated, not consumed.",
              "It lowers the peak (Ea).",
              "ΔH is fixed by the start and end energy levels.",
              "Explain why those levels do not move.",
            ],
          },
          {
            id: "chem-energetics-bq2-04",
            question:
              "An endothermic reaction has reactants at 50 kJ mol⁻¹, peak at 220 kJ mol⁻¹ and products at 130 kJ mol⁻¹.\n\n" +
              "(a) Calculate Ea. [1]\n" +
              "(b) Calculate ΔH. [1]\n" +
              "(c) A catalyst lowers the peak to 170 kJ mol⁻¹. Calculate the new activation energy. [1]\n" +
              "(d) State the value of ΔH after the catalyst is added. [1]",
            marks: 4,
            modelAnswer:
              "(a) Ea = 220 − 50 = 170 kJ mol⁻¹.\n" +
              "(b) ΔH = 130 − 50 = +80 kJ mol⁻¹.\n" +
              "(c) New Ea = 170 − 50 = 120 kJ mol⁻¹.\n" +
              "(d) ΔH is unchanged at +80 kJ mol⁻¹.",
            markScheme: [
              "Ea = 220 − 50 = 170 kJ mol⁻¹ (1)",
              "ΔH = 130 − 50 = +80 kJ mol⁻¹ (1)",
              "New Ea = 170 − 50 = 120 kJ mol⁻¹ (1)",
              "ΔH still +80 kJ mol⁻¹ (1)",
            ],
            commonError:
              "Changing ΔH when the catalyst is added, or using the new peak for both Ea and ΔH.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "core",
            hints: [
              "Ea uses the peak; ΔH uses the products level.",
              "New Ea uses the NEW peak (170) and the same reactants level (50).",
              "The catalyst does not move the product level, so ΔH is unchanged.",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Original Ea = peak − reactants = 220 − 50 = 170 kJ mol⁻¹.",
                  "ΔH = products − reactants = 130 − 50 = +80 kJ mol⁻¹ (endothermic).",
                  "After catalyst: new Ea = new peak − reactants = 170 − 50 = 120 kJ mol⁻¹.",
                  "ΔH depends only on reactant and product levels, which are unchanged, so ΔH stays +80 kJ mol⁻¹.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq2-05",
            question:
              "Explain the difference between activation energy and ΔH. Refer to what each measures on a reaction profile. [3]",
            marks: 3,
            modelAnswer:
              "Activation energy is the minimum energy needed to start the reaction; on the profile it is the height from the reactants level up to the peak. ΔH is the overall energy change of the reaction; on the profile it is the difference between the reactants and products energy levels. Ea is about the pathway/barrier, while ΔH is about the start and end points.",
            markScheme: [
              "Ea = minimum energy to start / from reactants to peak (1)",
              "ΔH = overall energy change / difference between reactants and products (1)",
              "Ea is about the barrier/pathway; ΔH is about start and end (1)",
            ],
            commonError:
              "Treating Ea and ΔH as the same thing, or measuring both from the same point incorrectly.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "One quantity is about getting over the barrier.",
              "The other is about the net change from start to finish.",
              "Both are measured starting at the reactants level, but go to different points.",
            ],
          },
          {
            id: "chem-energetics-bq2-06",
            question:
              "Sketch how you would draw the catalysed pathway on an existing exothermic reaction profile, and state what stays the same. [3]",
            marks: 3,
            modelAnswer:
              "Draw a second curve between the same reactants and products levels, but with a lower peak than the original (lower activation energy). The reactants level, the products level and therefore ΔH all stay the same; only the peak height (Ea) is reduced.",
            markScheme: [
              "Second curve drawn with a lower peak (1)",
              "Same reactants and products levels (1)",
              "ΔH unchanged / only Ea reduced (1)",
            ],
            commonError:
              "Drawing the catalysed curve ending at a different product level, which would wrongly change ΔH.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "challenge",
            hints: [
              "Keep the start and end levels identical.",
              "Only the peak should be lower.",
              "If ΔH changed, you have moved the wrong line.",
            ],
          },
          {
            id: "chem-energetics-bq2-07",
            question:
              "A reaction is exothermic with ΔH = −110 kJ mol⁻¹ and activation energy 40 kJ mol⁻¹.\n\n" +
              "(a) Taking the reactants energy level as 0 kJ mol⁻¹, state the energy of the peak. [1]\n" +
              "(b) State the energy of the products. [1]\n" +
              "(c) Sketch a description of the profile using these three values. [2]",
            marks: 4,
            modelAnswer:
              "(a) Peak = 0 + Ea = +40 kJ mol⁻¹.\n" +
              "(b) Products = 0 + ΔH = −110 kJ mol⁻¹.\n" +
              "(c) The curve starts at 0 (reactants), rises to +40 kJ mol⁻¹ (peak), then falls to −110 kJ mol⁻¹ (products). The products are well below the reactants, confirming an exothermic reaction.",
            markScheme: [
              "Peak at +40 kJ mol⁻¹ (1)",
              "Products at −110 kJ mol⁻¹ (1)",
              "Curve rises from 0 to +40 then falls to −110 (1)",
              "Products below reactants → exothermic (1)",
            ],
            commonError:
              "Placing the products above the reactants for an exothermic reaction, or adding Ea and ΔH together.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "challenge",
            hints: [
              "Peak = reactants level + Ea.",
              "Products = reactants level + ΔH.",
              "ΔH is negative, so the products are below the start.",
              "Ea and ΔH are independent — don't combine them.",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Set reactants at 0 kJ mol⁻¹.",
                  "Peak is Ea above the reactants: 0 + 40 = +40 kJ mol⁻¹.",
                  "Products are ΔH from the reactants: 0 + (−110) = −110 kJ mol⁻¹.",
                  "Profile: 0 → +40 (peak) → −110 (products); products below start = exothermic.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq2-08",
            question:
              "Explain, in terms of activation energy, why most reactions go faster when the temperature is increased, even though Ea is unchanged. [3]",
            marks: 3,
            modelAnswer:
              "Increasing the temperature gives the particles more kinetic energy, so they move and collide more often and, more importantly, a greater proportion of particles now have energy equal to or greater than the activation energy. More collisions are successful, so the rate increases. The activation energy itself is unchanged.",
            markScheme: [
              "Particles gain more kinetic energy / move faster (1)",
              "Greater proportion of particles have energy ≥ Ea (1)",
              "More successful collisions / faster rate (1)",
            ],
            commonError:
              "Saying heating lowers the activation energy — it does not; heating raises the energy of the particles.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "core",
            hints: [
              "Ea stays the same; what changes is the particles' energy.",
              "More particles now exceed the activation energy.",
              "Link this to the number of successful collisions.",
            ],
          },
          {
            id: "chem-energetics-bq2-09",
            question:
              "The reaction profile for the decomposition of hydrogen peroxide is endothermic-looking on paper but is actually exothermic; the question gives reactants at 100 kJ mol⁻¹, peak at 240 kJ mol⁻¹, products at 40 kJ mol⁻¹.\n\n" +
              "(a) Calculate ΔH and state the type of reaction. [2]\n" +
              "(b) A catalyst (manganese(IV) oxide) lowers the peak by 90 kJ mol⁻¹. Calculate the original and the new activation energy. [2]",
            marks: 4,
            modelAnswer:
              "(a) ΔH = 40 − 100 = −60 kJ mol⁻¹; exothermic.\n" +
              "(b) Original Ea = 240 − 100 = 140 kJ mol⁻¹. New peak = 240 − 90 = 150 kJ mol⁻¹, so new Ea = 150 − 100 = 50 kJ mol⁻¹.",
            markScheme: [
              "ΔH = 40 − 100 = −60 kJ mol⁻¹ (1)",
              "Exothermic (1)",
              "Original Ea = 240 − 100 = 140 kJ mol⁻¹ (1)",
              "New Ea = (240 − 90) − 100 = 50 kJ mol⁻¹ (1)",
            ],
            commonError:
              "Subtracting 90 from the activation energy directly is acceptable (140 − 90 = 50) but lowering the products level by mistake is wrong — the catalyst only moves the peak.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "challenge",
            hints: [
              "ΔH = products − reactants.",
              "Original Ea = peak − reactants.",
              "The catalyst lowers only the peak by 90 kJ mol⁻¹.",
              "New Ea = new peak − reactants (equivalently, old Ea − 90).",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "ΔH = products − reactants = 40 − 100 = −60 kJ mol⁻¹ → exothermic.",
                  "Original Ea = peak − reactants = 240 − 100 = 140 kJ mol⁻¹.",
                  "Catalyst lowers the peak by 90: new peak = 240 − 90 = 150 kJ mol⁻¹.",
                  "New Ea = new peak − reactants = 150 − 100 = 50 kJ mol⁻¹ (or 140 − 90 = 50).",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq2-10",
            question:
              "State two things shown by a reaction pathway (energy level) diagram and one thing it does NOT tell you. [3]",
            marks: 3,
            modelAnswer:
              "It shows the activation energy (height from reactants to the peak) and whether the reaction is exothermic or endothermic (from the relative heights of reactants and products / the value of ΔH). It does not tell you the rate of the reaction or how long it will take.",
            markScheme: [
              "Shows activation energy / Ea (1)",
              "Shows ΔH / whether exothermic or endothermic (1)",
              "Does not show the rate / speed / time of reaction (1)",
            ],
            commonError:
              "Claiming the diagram shows the rate — Ea relates to rate but the profile alone does not give a rate.",
            guideRef: "Energy Level Diagrams",
            difficulty: "warmup",
          },
        ],
      },
      {
        id: "chem-energetics-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Bond breaking and making, and calculating ΔH from bond energies.",
        questions: [
          {
            id: "chem-energetics-bq3-01",
            question:
              "(a) State whether bond breaking is exothermic or endothermic. [1]\n" +
              "(b) State whether bond making is exothermic or endothermic. [1]\n" +
              "(c) Define the term 'bond energy'. [2]",
            marks: 4,
            modelAnswer:
              "(a) Endothermic.\n" +
              "(b) Exothermic.\n" +
              "(c) The energy required to break one mole of a particular (covalent) bond in the gaseous state, measured in kJ mol⁻¹.",
            markScheme: [
              "Bond breaking endothermic (1)",
              "Bond making exothermic (1)",
              "Energy to break one mole of a bond / in the gaseous state (1)",
              "Units kJ mol⁻¹ (1)",
            ],
            commonError:
              "Reversing the two: bond breaking takes energy IN (endothermic); bond making gives energy OUT (exothermic).",
            guideRef: "Bond Breaking and Bond Making",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bq3-02",
            question:
              "For the reaction H₂(g) + Cl₂(g) → 2HCl(g):\n" +
              "Bond energies (kJ mol⁻¹): H–H = 436, Cl–Cl = 243, H–Cl = 432.\n\n" +
              "(a) Calculate the total energy needed to break the bonds in the reactants. [1]\n" +
              "(b) Calculate the total energy released when the bonds in the products form. [1]\n" +
              "(c) Calculate ΔH and state whether the reaction is exothermic or endothermic. [2]",
            marks: 4,
            modelAnswer:
              "(a) Energy in = H–H + Cl–Cl = 436 + 243 = 679 kJ.\n" +
              "(b) Energy out = 2 × H–Cl = 2 × 432 = 864 kJ.\n" +
              "(c) ΔH = 679 − 864 = −185 kJ mol⁻¹; exothermic.",
            markScheme: [
              "Bonds broken = 436 + 243 = 679 kJ (1)",
              "Bonds made = 2 × 432 = 864 kJ (1)",
              "ΔH = 679 − 864 = −185 kJ mol⁻¹ (1)",
              "Exothermic (1)",
            ],
            commonError:
              "Forgetting the 2 for H–Cl, or doing made − broken to get +185.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Break 1 H–H and 1 Cl–Cl.",
              "Make 2 H–Cl (use the coefficient).",
              "ΔH = broken − made.",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Bonds broken: 1 × H–H (436) + 1 × Cl–Cl (243) = 679 kJ.",
                  "Bonds made: 2 × H–Cl = 2 × 432 = 864 kJ.",
                  "ΔH = bonds broken − bonds made = 679 − 864 = −185 kJ mol⁻¹.",
                  "Sign: negative → exothermic. Unit: kJ mol⁻¹.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq3-03",
            question:
              "Hydrogen reacts with fluorine: H₂(g) + F₂(g) → 2HF(g).\n" +
              "Bond energies (kJ mol⁻¹): H–H = 436, F–F = 158, H–F = 568.\n\n" +
              "(a) Calculate ΔH for this reaction, showing your working. [3]\n" +
              "(b) State whether the reaction is exothermic or endothermic. [1]",
            marks: 4,
            modelAnswer:
              "(a) Bonds broken = H–H + F–F = 436 + 158 = 594 kJ. Bonds made = 2 × H–F = 2 × 568 = 1136 kJ. ΔH = 594 − 1136 = −542 kJ mol⁻¹.\n" +
              "(b) Exothermic.",
            markScheme: [
              "Bonds broken = 436 + 158 = 594 kJ (1)",
              "Bonds made = 2 × 568 = 1136 kJ (1)",
              "ΔH = 594 − 1136 = −542 kJ mol⁻¹ (1)",
              "Exothermic (1)",
            ],
            commonError:
              "Using only one H–F bond instead of two.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "Break 1 H–H and 1 F–F.",
              "Form 2 H–F.",
              "ΔH = (436 + 158) − (2 × 568).",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Bonds broken: H–H (436) + F–F (158) = 594 kJ.",
                  "Bonds made: 2 × H–F = 2 × 568 = 1136 kJ.",
                  "ΔH = 594 − 1136 = −542 kJ mol⁻¹.",
                  "Negative → exothermic.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq3-04",
            question:
              "Explain, in terms of bond breaking and bond making, why a reaction is exothermic. [3]",
            marks: 3,
            modelAnswer:
              "Breaking the bonds in the reactants absorbs energy and making the bonds in the products releases energy. In an exothermic reaction, more energy is released when the new bonds form than is absorbed breaking the old bonds, so there is a net release of energy to the surroundings and ΔH is negative.",
            markScheme: [
              "Bond breaking absorbs energy / bond making releases energy (1)",
              "Energy released making bonds > energy absorbed breaking bonds (1)",
              "Net energy released / ΔH negative (1)",
            ],
            commonError:
              "Saying 'bonds give out energy' without distinguishing breaking (in) from making (out).",
            guideRef: "Bond Breaking and Bond Making",
            difficulty: "core",
            hints: [
              "State what breaking and making each do to energy.",
              "Compare the two amounts.",
              "Which is bigger for an exothermic reaction?",
            ],
          },
          {
            id: "chem-energetics-bq3-05",
            question:
              "The combustion of hydrogen is H₂(g) + ½O₂(g) → H₂O(g).\n" +
              "Bond energies (kJ mol⁻¹): H–H = 436, O=O = 498, O–H = 464.\n\n" +
              "(a) Explain why the O=O term is multiplied by ½. [1]\n" +
              "(b) Calculate ΔH, showing your working. [3]",
            marks: 4,
            modelAnswer:
              "(a) Only half a mole of O₂ (one O=O bond per ½ mole) reacts per mole of water formed, so half of the O=O bond energy is used.\n" +
              "(b) Bonds broken = (1 × 436) + (½ × 498) = 436 + 249 = 685 kJ. Bonds made = 2 × O–H = 2 × 464 = 928 kJ. ΔH = 685 − 928 = −243 kJ mol⁻¹.",
            markScheme: [
              "½ O₂ means half an O=O bond / half the O=O energy (1)",
              "Bonds broken = 436 + 249 = 685 kJ (1)",
              "Bonds made = 2 × 464 = 928 kJ (1)",
              "ΔH = 685 − 928 = −243 kJ mol⁻¹ (1)",
            ],
            commonError:
              "Using a whole O=O (498) instead of ½ × 498 = 249, or forgetting that H₂O has 2 O–H bonds.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "½O₂ means only half of one O=O bond's energy.",
              "Bonds broken = 436 + (½ × 498).",
              "Water has 2 O–H bonds.",
              "ΔH = 685 − 928.",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Bonds broken: 1 × H–H (436) + ½ × O=O (½ × 498 = 249) = 685 kJ.",
                  "Bonds made: 2 × O–H = 2 × 464 = 928 kJ.",
                  "ΔH = 685 − 928 = −243 kJ mol⁻¹.",
                  "Negative → exothermic; unit kJ mol⁻¹.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq3-06",
            question:
              "Ammonia is made by N₂(g) + 3H₂(g) → 2NH₃(g).\n" +
              "Bond energies (kJ mol⁻¹): N≡N = 945, H–H = 436, N–H = 391.\n\n" +
              "(a) State the number and type of each bond broken. [2]\n" +
              "(b) State the number of N–H bonds made. [1]\n" +
              "(c) Calculate ΔH, showing your working, and state the type of reaction. [3]",
            marks: 6,
            modelAnswer:
              "(a) 1 × N≡N and 3 × H–H bonds are broken.\n" +
              "(b) 6 × N–H bonds are made (2 NH₃ × 3 N–H).\n" +
              "(c) Bonds broken = 945 + (3 × 436) = 945 + 1308 = 2253 kJ. Bonds made = 6 × 391 = 2346 kJ. ΔH = 2253 − 2346 = −93 kJ mol⁻¹; exothermic.",
            markScheme: [
              "1 × N≡N broken (1)",
              "3 × H–H broken (1)",
              "6 × N–H made (1)",
              "Bonds broken = 945 + 1308 = 2253 kJ (1)",
              "Bonds made = 2346 kJ; ΔH = 2253 − 2346 = −93 kJ mol⁻¹ (1)",
              "Exothermic (1)",
            ],
            commonError:
              "Forgetting the factor of 2 for the N–H bonds: 2NH₃ has 6 N–H bonds, not 3.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "N₂ has a triple bond; H₂ has the coefficient 3.",
              "Each NH₃ has 3 N–H bonds, so 2NH₃ has 6.",
              "Broken = 945 + 3(436); made = 6(391).",
              "ΔH = broken − made.",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Bonds broken: 1 × N≡N (945) + 3 × H–H (3 × 436 = 1308) = 2253 kJ.",
                  "Bonds made: 6 × N–H = 6 × 391 = 2346 kJ.",
                  "ΔH = 2253 − 2346 = −93 kJ mol⁻¹.",
                  "Negative → exothermic.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq3-07",
            question:
              "Bond energies are described as 'average' values.\n\n" +
              "(a) Explain what is meant by an average bond energy. [2]\n" +
              "(b) Explain why a ΔH calculated from bond energies may differ from the value found by experiment. [2]",
            marks: 4,
            modelAnswer:
              "(a) The energy of a particular bond (e.g. C–H) varies slightly depending on the molecule it is in, so the data-book value is an average taken over many different compounds.\n" +
              "(b) Because the actual bonds in a specific reaction have energies slightly different from the averages used, the calculated ΔH is approximate and may not match the precise experimental value.",
            markScheme: [
              "Same bond has slightly different energy in different molecules (1)",
              "Average taken over many compounds (1)",
              "Real bonds differ from the average values (1)",
              "So calculated ΔH is approximate / differs from experiment (1)",
            ],
            commonError:
              "Concluding the method is 'wrong' — it is approximate, not incorrect.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Is a C–H bond identical in every molecule?",
              "How is a single quoted value obtained from many molecules?",
              "Link the use of averages to the difference from experiment.",
            ],
          },
          {
            id: "chem-energetics-bq3-08",
            question:
              "For the reaction CH₄(g) + Cl₂(g) → CH₃Cl(g) + HCl(g):\n" +
              "Only one C–H bond and the Cl–Cl bond break; a C–Cl bond and an H–Cl bond form.\n" +
              "Bond energies (kJ mol⁻¹): C–H = 413, Cl–Cl = 243, C–Cl = 339, H–Cl = 432.\n\n" +
              "(a) Calculate the energy absorbed breaking bonds. [1]\n" +
              "(b) Calculate the energy released forming bonds. [1]\n" +
              "(c) Calculate ΔH and state the type of reaction. [2]",
            marks: 4,
            modelAnswer:
              "(a) Energy in = C–H + Cl–Cl = 413 + 243 = 656 kJ.\n" +
              "(b) Energy out = C–Cl + H–Cl = 339 + 432 = 771 kJ.\n" +
              "(c) ΔH = 656 − 771 = −115 kJ mol⁻¹; exothermic.",
            markScheme: [
              "Bonds broken = 413 + 243 = 656 kJ (1)",
              "Bonds made = 339 + 432 = 771 kJ (1)",
              "ΔH = 656 − 771 = −115 kJ mol⁻¹ (1)",
              "Exothermic (1)",
            ],
            commonError:
              "Including all four C–H bonds of methane — only the one C–H bond that is replaced changes.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Only the bonds that actually change need to be counted.",
              "Break: one C–H and the Cl–Cl. Form: one C–Cl and one H–Cl.",
              "ΔH = (413 + 243) − (339 + 432).",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Bonds broken: 1 × C–H (413) + 1 × Cl–Cl (243) = 656 kJ.",
                  "Bonds made: 1 × C–Cl (339) + 1 × H–Cl (432) = 771 kJ.",
                  "ΔH = 656 − 771 = −115 kJ mol⁻¹.",
                  "Negative → exothermic.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq3-09",
            question:
              "A student calculates ΔH = +35 kJ mol⁻¹ for a reaction using bond energies.\n\n" +
              "(a) State whether the reaction is exothermic or endothermic. [1]\n" +
              "(b) State which is greater: the energy to break bonds or the energy released making bonds. [1]\n" +
              "(c) Sketch (in words) what the energy level diagram would look like. [1]",
            marks: 3,
            modelAnswer:
              "(a) Endothermic.\n" +
              "(b) The energy to break bonds is greater than the energy released making bonds.\n" +
              "(c) The products are drawn at a higher energy level than the reactants, with ΔH shown as an upward arrow.",
            markScheme: [
              "Endothermic (1)",
              "Energy to break bonds > energy released making bonds (1)",
              "Products higher than reactants / ΔH arrow upward (1)",
            ],
            commonError:
              "Linking a positive ΔH with products lower than reactants — positive ΔH means products are HIGHER.",
            guideRef: "Bond Breaking and Bond Making",
            difficulty: "core",
            hints: [
              "Positive ΔH = endothermic.",
              "Endothermic means more energy in (breaking) than out (making).",
              "Products are higher on the diagram.",
            ],
          },
          {
            id: "chem-energetics-bq3-10",
            question:
              "Methane burns completely: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g).\n" +
              "Bond energies (kJ mol⁻¹): C–H = 413, O=O = 498, C=O = 805, O–H = 464.\n\n" +
              "(a) Calculate the total energy absorbed breaking bonds. [2]\n" +
              "(b) Calculate the total energy released forming bonds. [2]\n" +
              "(c) Calculate ΔH and state the type of reaction. [2]",
            marks: 6,
            modelAnswer:
              "(a) Bonds broken: 4 × C–H (4 × 413 = 1652) + 2 × O=O (2 × 498 = 996) = 2648 kJ.\n" +
              "(b) Bonds made: 2 × C=O (2 × 805 = 1610) + 4 × O–H (4 × 464 = 1856) = 3466 kJ.\n" +
              "(c) ΔH = 2648 − 3466 = −818 kJ mol⁻¹; exothermic.",
            markScheme: [
              "4 × C–H = 1652 and 2 × O=O = 996 (1)",
              "Total broken = 2648 kJ (1)",
              "2 × C=O = 1610 and 4 × O–H = 1856 (1)",
              "Total made = 3466 kJ (1)",
              "ΔH = 2648 − 3466 = −818 kJ mol⁻¹ (1)",
              "Exothermic (1)",
            ],
            commonError:
              "Counting only 2 O–H bonds (one water) instead of 4, or using 1 C=O instead of 2 in CO₂.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "CH₄ has 4 C–H; 2O₂ has 2 O=O.",
              "CO₂ has 2 C=O; 2H₂O has 4 O–H.",
              "Broken = 4(413) + 2(498); made = 2(805) + 4(464).",
              "ΔH = broken − made = 2648 − 3466.",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Bonds broken: 4 × C–H = 1652 kJ; 2 × O=O = 996 kJ; total = 2648 kJ.",
                  "Bonds made: 2 × C=O = 1610 kJ; 4 × O–H = 1856 kJ; total = 3466 kJ.",
                  "ΔH = 2648 − 3466 = −818 kJ mol⁻¹.",
                  "Negative → exothermic; unit kJ mol⁻¹.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-energetics-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Synoptic problems: experiments, applications and multi-step bond-energy calculations.",
        questions: [
          {
            id: "chem-energetics-bq4-01",
            question:
              "Give one example of each, with a balanced or word equation where possible.\n\n" +
              "(a) An exothermic reaction. [2]\n" +
              "(b) An endothermic reaction. [2]",
            marks: 4,
            modelAnswer:
              "(a) Combustion of methane: CH₄ + 2O₂ → CO₂ + 2H₂O (releases energy).\n" +
              "(b) Thermal decomposition of calcium carbonate: CaCO₃ → CaO + CO₂ (absorbs energy).",
            markScheme: [
              "Named exothermic example, e.g. combustion / neutralisation / respiration (1)",
              "Correct equation for the exothermic example (1)",
              "Named endothermic example, e.g. thermal decomposition / photosynthesis (1)",
              "Correct equation for the endothermic example (1)",
            ],
            commonError:
              "Giving an unbalanced equation, or naming an example without an equation.",
            guideRef: "Common Examples and Applications",
            difficulty: "warmup",
          },
          {
            id: "chem-energetics-bq4-02",
            question:
              "A student burns 1.0 g of ethanol to heat 100 g of water, raising its temperature by 18 °C. (Specific heat capacity of water = 4.2 J g⁻¹ °C⁻¹.)\n\n" +
              "(a) Calculate the energy transferred to the water, in joules. Use energy = m × c × ΔT. [2]\n" +
              "(b) Convert your answer to kilojoules. [1]\n" +
              "(c) State whether combustion of ethanol is exothermic or endothermic. [1]",
            marks: 4,
            modelAnswer:
              "(a) Energy = m × c × ΔT = 100 × 4.2 × 18 = 7560 J.\n" +
              "(b) 7560 J ÷ 1000 = 7.56 kJ.\n" +
              "(c) Exothermic.",
            markScheme: [
              "Substitution: 100 × 4.2 × 18 (1)",
              "= 7560 J (1)",
              "= 7.56 kJ (1)",
              "Exothermic (1)",
            ],
            commonError:
              "Using the mass of ethanol (1.0 g) instead of the mass of water (100 g) in m × c × ΔT.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "core",
            hints: [
              "m is the mass of WATER being heated (100 g).",
              "Energy = m × c × ΔT.",
              "1 kJ = 1000 J.",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Identify m = 100 g (water), c = 4.2 J g⁻¹ °C⁻¹, ΔT = 18 °C.",
                  "Energy = m × c × ΔT = 100 × 4.2 × 18 = 7560 J.",
                  "Convert: 7560 ÷ 1000 = 7.56 kJ.",
                  "Heat is given out to the water, so combustion is exothermic.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq4-03",
            question:
              "Using the experiment in the previous style, 1.0 g of a fuel releases 7.56 kJ. The relative molecular mass (Mr) of ethanol is 46.\n\n" +
              "(a) Calculate the number of moles of ethanol in 1.0 g. [1]\n" +
              "(b) Use this to estimate the energy released per mole of ethanol, in kJ mol⁻¹. [2]\n" +
              "(c) Suggest why this experimental value is lower (less exothermic) than data-book values. [1]",
            marks: 4,
            modelAnswer:
              "(a) moles = mass ÷ Mr = 1.0 ÷ 46 = 0.0217 mol.\n" +
              "(b) Energy per mole = 7.56 ÷ 0.0217 = 348 kJ mol⁻¹ (≈ 350 kJ mol⁻¹).\n" +
              "(c) Heat is lost to the surroundings/apparatus (not all the energy reaches the water), and combustion may be incomplete, so the measured value is too low.",
            markScheme: [
              "moles = 1.0 ÷ 46 = 0.0217 mol (1)",
              "Energy per mole = 7.56 ÷ 0.0217 (1)",
              "= 348 / ≈ 350 kJ mol⁻¹ (1)",
              "Heat loss to surroundings / incomplete combustion (1)",
            ],
            commonError:
              "Multiplying instead of dividing by moles, or forgetting that heat losses make the experimental value too low.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "challenge",
            hints: [
              "moles = mass ÷ Mr.",
              "Energy per mole = total energy ÷ number of moles.",
              "7.56 ÷ 0.0217 ≈ 348.",
              "Think about heat escaping and incomplete burning.",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "moles of ethanol = 1.0 ÷ 46 = 0.0217 mol.",
                  "Energy per mole = energy ÷ moles = 7.56 ÷ 0.0217 = 348 kJ mol⁻¹.",
                  "Round sensibly: ≈ 350 kJ mol⁻¹.",
                  "Experimental value is low because heat is lost to surroundings/apparatus and combustion is often incomplete.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq4-04",
            question:
              "The reaction 2H₂(g) + O₂(g) → 2H₂O(g) is studied.\n" +
              "Bond energies (kJ mol⁻¹): H–H = 436, O=O = 498, O–H = 464.\n\n" +
              "(a) Calculate ΔH for the reaction as written (2 mol of water). [3]\n" +
              "(b) Hence state ΔH for forming 1 mol of water vapour. [1]",
            marks: 4,
            modelAnswer:
              "(a) Bonds broken: 2 × H–H (872) + 1 × O=O (498) = 1370 kJ. Bonds made: 4 × O–H (4 × 464 = 1856) = 1856 kJ. ΔH = 1370 − 1856 = −486 kJ mol⁻¹.\n" +
              "(b) Per mole of water: −486 ÷ 2 = −243 kJ mol⁻¹.",
            markScheme: [
              "Bonds broken = 2(436) + 498 = 1370 kJ (1)",
              "Bonds made = 4 × 464 = 1856 kJ (1)",
              "ΔH = 1370 − 1856 = −486 kJ mol⁻¹ (1)",
              "Per mole of water = −243 kJ mol⁻¹ (1)",
            ],
            commonError:
              "Forgetting that 2H₂O contains 4 O–H bonds, or not halving for part (b).",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "2H₂ gives 2 H–H bonds; 2H₂O gives 4 O–H bonds.",
              "Broken = 2(436) + 498; made = 4(464).",
              "ΔH = 1370 − 1856 = −486 for 2 mol water.",
              "Divide by 2 for one mole.",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Bonds broken: 2 × H–H = 872 kJ; 1 × O=O = 498 kJ; total 1370 kJ.",
                  "Bonds made: 4 × O–H = 1856 kJ.",
                  "ΔH (for 2 mol water) = 1370 − 1856 = −486 kJ mol⁻¹.",
                  "Per mole of water: −486 ÷ 2 = −243 kJ mol⁻¹.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq4-05",
            question:
              "A reaction has these bond-energy totals: energy to break bonds = 1980 kJ; energy released making bonds = 2150 kJ.\n\n" +
              "(a) Calculate ΔH. [1]\n" +
              "(b) State whether the reaction is exothermic or endothermic. [1]\n" +
              "(c) On an energy level diagram, state whether the products are above or below the reactants. [1]",
            marks: 3,
            modelAnswer:
              "(a) ΔH = 1980 − 2150 = −170 kJ mol⁻¹.\n" +
              "(b) Exothermic.\n" +
              "(c) Products are below the reactants.",
            markScheme: [
              "ΔH = 1980 − 2150 = −170 kJ mol⁻¹ (1)",
              "Exothermic (1)",
              "Products below reactants (1)",
            ],
            commonError:
              "Doing made − broken to get +170 and so the wrong classification.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "core",
            hints: [
              "ΔH = energy in (breaking) − energy out (making).",
              "1980 − 2150 = −170.",
              "Negative ΔH → exothermic → products lower.",
            ],
          },
          {
            id: "chem-energetics-bq4-06",
            question:
              "Compare a reaction with and without a catalyst.\n\n" +
              "(a) State two quantities that are the SAME with and without the catalyst. [2]\n" +
              "(b) State the one quantity that is DIFFERENT, and how it changes. [1]\n" +
              "(c) Explain why a catalyst increases the rate of reaction. [2]",
            marks: 5,
            modelAnswer:
              "(a) ΔH (overall energy change) and the energy levels of the reactants and products are the same.\n" +
              "(b) The activation energy is lower with the catalyst.\n" +
              "(c) A lower activation energy means a greater proportion of colliding particles have enough energy to react, so more collisions are successful and the rate increases.",
            markScheme: [
              "ΔH unchanged (1)",
              "Energy levels of reactants and products unchanged (1)",
              "Activation energy is lowered (1)",
              "Lower Ea → more particles have energy ≥ Ea (1)",
              "More successful collisions / faster rate (1)",
            ],
            commonError:
              "Saying a catalyst changes ΔH, or not linking lower Ea to more successful collisions.",
            guideRef: "Energy Level Diagrams",
            difficulty: "core",
            hints: [
              "What stays fixed: the start and end energy levels.",
              "What changes: the height of the barrier (Ea).",
              "Lower barrier → more particles can get over it.",
            ],
          },
          {
            id: "chem-energetics-bq4-07",
            question:
              "Hydrogen is promoted as a clean fuel: 2H₂ + O₂ → 2H₂O.\n\n" +
              "(a) Explain, using bond breaking and bond making, why burning hydrogen is exothermic. [3]\n" +
              "(b) State one reason, in terms of energetics or products, why hydrogen is considered a clean fuel. [1]",
            marks: 4,
            modelAnswer:
              "(a) Energy is absorbed breaking the H–H and O=O bonds, and energy is released making the O–H bonds in water. More energy is released making the O–H bonds than is absorbed breaking the reactant bonds, so there is a net release of energy — the reaction is exothermic.\n" +
              "(b) Its only product is water, so it produces no carbon dioxide / no carbon-based pollutants while still releasing a large amount of energy.",
            markScheme: [
              "Energy absorbed breaking H–H and O=O (1)",
              "Energy released making O–H bonds in water (1)",
              "More released than absorbed → net release / exothermic (1)",
              "Only product is water / no CO₂ produced (1)",
            ],
            commonError:
              "Stating it is exothermic without explaining the balance of bond breaking versus bond making.",
            guideRef: "Bond Breaking and Bond Making",
            difficulty: "core",
            hints: [
              "Name the bonds broken and the bonds made.",
              "Compare the energy in versus the energy out.",
              "For part (b), what is the only product?",
            ],
          },
          {
            id: "chem-energetics-bq4-08",
            question:
              "An energy level diagram for an endothermic reaction shows reactants at 70 kJ mol⁻¹, peak at 260 kJ mol⁻¹ and products at 150 kJ mol⁻¹.\n\n" +
              "(a) Calculate Ea and ΔH. [2]\n" +
              "(b) The forward reaction is endothermic. State the sign of ΔH for the REVERSE reaction and give its value. [2]",
            marks: 4,
            modelAnswer:
              "(a) Ea = 260 − 70 = 190 kJ mol⁻¹. ΔH = 150 − 70 = +80 kJ mol⁻¹.\n" +
              "(b) The reverse reaction is exothermic, so its ΔH is negative: ΔH(reverse) = −80 kJ mol⁻¹ (same magnitude, opposite sign).",
            markScheme: [
              "Ea = 260 − 70 = 190 kJ mol⁻¹ (1)",
              "ΔH = 150 − 70 = +80 kJ mol⁻¹ (1)",
              "Reverse ΔH negative / exothermic (1)",
              "ΔH(reverse) = −80 kJ mol⁻¹ (1)",
            ],
            commonError:
              "Forgetting to reverse the sign of ΔH for the reverse reaction, or changing the magnitude.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "challenge",
            hints: [
              "Ea = peak − reactants; ΔH = products − reactants.",
              "The reverse reaction swaps reactants and products.",
              "Reversing a reaction reverses the sign of ΔH but keeps the magnitude.",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Ea = peak − reactants = 260 − 70 = 190 kJ mol⁻¹.",
                  "Forward ΔH = products − reactants = 150 − 70 = +80 kJ mol⁻¹ (endothermic).",
                  "For the reverse reaction, reactants and products swap: ΔH = 70 − 150 = −80 kJ mol⁻¹.",
                  "So the reverse reaction is exothermic with ΔH = −80 kJ mol⁻¹.",
                ],
              },
            ],
          },
          {
            id: "chem-energetics-bq4-09",
            question:
              "Two fuels are compared by burning equal masses. Fuel A raises the water temperature by 25 °C; fuel B raises it by 18 °C, using identical apparatus and the same mass of water.\n\n" +
              "(a) Which fuel transfers more energy per gram? Explain. [2]\n" +
              "(b) State two ways to make the comparison a fair test. [2]",
            marks: 4,
            modelAnswer:
              "(a) Fuel A. With the same mass of water and the same apparatus, a larger temperature rise means more energy was transferred (energy = m × c × ΔT, and ΔT is larger for A).\n" +
              "(b) Use the same mass of water, the same starting temperature, the same distance from flame to container, the same mass of fuel, and shield from draughts (any two).",
            markScheme: [
              "Fuel A transfers more energy (1)",
              "Same mass of water + larger ΔT → more energy / energy = mcΔT (1)",
              "Fair test point 1, e.g. same mass of water / same fuel mass (1)",
              "Fair test point 2, e.g. same distance to flame / shield from draughts (1)",
            ],
            commonError:
              "Concluding from temperature alone without referencing equal mass of water / fair test conditions.",
            guideRef: "Interpreting Energy Changes from Evidence",
            difficulty: "core",
            hints: [
              "Energy = m × c × ΔT; m and c are the same, so compare ΔT.",
              "A bigger temperature rise = more energy transferred.",
              "Fair test: keep all other variables the same.",
            ],
          },
          {
            id: "chem-energetics-bq4-10",
            question:
              "For the reaction C₂H₄(g) + H₂O(g) → C₂H₅OH(g) (hydration of ethene):\n" +
              "The bonds that change are: break 1 C=C and 1 O–H; form 1 C–C, 1 C–O and 1 C–H.\n" +
              "Bond energies (kJ mol⁻¹): C=C = 612, O–H = 464, C–C = 347, C–O = 358, C–H = 413.\n\n" +
              "(a) Calculate the energy absorbed breaking bonds. [1]\n" +
              "(b) Calculate the energy released forming bonds. [1]\n" +
              "(c) Calculate ΔH and state whether the reaction is exothermic or endothermic. [2]",
            marks: 4,
            modelAnswer:
              "(a) Energy in = C=C + O–H = 612 + 464 = 1076 kJ.\n" +
              "(b) Energy out = C–C + C–O + C–H = 347 + 358 + 413 = 1118 kJ.\n" +
              "(c) ΔH = 1076 − 1118 = −42 kJ mol⁻¹; exothermic.",
            markScheme: [
              "Bonds broken = 612 + 464 = 1076 kJ (1)",
              "Bonds made = 347 + 358 + 413 = 1118 kJ (1)",
              "ΔH = 1076 − 1118 = −42 kJ mol⁻¹ (1)",
              "Exothermic (1)",
            ],
            commonError:
              "Counting bonds that do not change (e.g. the C–H bonds already present in ethene); only the bonds listed as breaking/forming should be used.",
            guideRef: "Calculating ΔH from Bond Energies",
            difficulty: "challenge",
            hints: [
              "Only use the bonds the question says break or form.",
              "Break: C=C and one O–H. Form: C–C, C–O, C–H.",
              "ΔH = (612 + 464) − (347 + 358 + 413).",
              "1076 − 1118 = −42.",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Bonds broken: C=C (612) + O–H (464) = 1076 kJ.",
                  "Bonds made: C–C (347) + C–O (358) + C–H (413) = 1118 kJ.",
                  "ΔH = 1076 − 1118 = −42 kJ mol⁻¹.",
                  "Negative → exothermic.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
