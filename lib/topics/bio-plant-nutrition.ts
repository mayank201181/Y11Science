import type { Topic } from "../types";

export const bioPlantNutrition: Topic = {
  id: "bio-plant-nutrition",
  title: "Plant Nutrition",
  subject: "biology",
  icon: "🌱",
  blurb: "Photosynthesis equations, leaf structure, limiting factors and mineral nutrition.",
  intro:
    "Plants are the only organisms that can make their own food from simple inorganic molecules — a process called photosynthesis. In this topic you will master the word and symbol equations for photosynthesis, understand exactly how a leaf is built for maximum light capture, explore the three limiting factors that control the rate of photosynthesis, learn how scientists test for photosynthesis experimentally, and find out why plants also need mineral ions like nitrate and magnesium.",

  // ─────────────────────────────────────────────────────────────────────────
  // GUIDE
  // ─────────────────────────────────────────────────────────────────────────
  guide: [
    // ── Section 1 ──────────────────────────────────────────────────────────
    {
      heading: "The Photosynthesis Equation",
      body: `Photosynthesis is the process by which green plants (and some other organisms) use **light energy** to convert **carbon dioxide** and **water** into **glucose** and **oxygen**. Chlorophyll, the green pigment inside chloroplasts, traps the light energy and transfers it to chemical energy stored in glucose molecules.

**Word equation:**

carbon dioxide + water → (light energy / chlorophyll) → glucose + oxygen

**Balanced symbol equation:**

6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂

(Light energy and chlorophyll are written above/below the arrow as they are conditions, not reactants.)

Notice the equation is perfectly balanced: 6 carbon atoms, 12 hydrogen atoms, and 18 oxygen atoms on each side. The energy stored in glucose bonds is chemical potential energy — released later by respiration.`,
      discovery: {
        problem:
          "Before reading on, try to balance the photosynthesis equation yourself. You know the reactants are CO₂ and H₂O, and the products are C₆H₁₂O₆ and O₂. What coefficients make each element equal on both sides?",
        idea:
          "Count carbons first: glucose has 6 C, so you need 6 CO₂. Count hydrogens: glucose has 12 H, so 6 H₂O (giving 12 H). Now count oxygens on the right: 6 from glucose + 12 from 6 O₂ = 18 O. On the left: 12 O from 6 CO₂ + 6 O from 6 H₂O = 18 O. Balanced! 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.",
      },
      whyItWorks:
        "Atoms are conserved in chemical reactions — they are rearranged, not created or destroyed. Balancing an equation is therefore an accounting exercise: equate each element's count on both sides by choosing the smallest whole-number coefficients.",
      strategies: ["balance the equation", "count atoms element by element"],
      keyPoints: [
        "Photosynthesis converts light energy into chemical energy stored in glucose.",
        "Chlorophyll absorbs light energy and transfers it to chemical reactions.",
        "Word equation: carbon dioxide + water → glucose + oxygen.",
        "Symbol equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (balanced).",
        "Light and chlorophyll are conditions (written above/below the arrow), not reactants.",
      ],
      diagrams: [
        {
          caption: "The balanced photosynthesis equation — atom count check",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Balanced photosynthesis equation with atom counts">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Reactants box -->
  <rect x="8" y="30" width="120" height="80" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="68" y="52" text-anchor="middle" font-size="11" fill="#38bdf8" font-family="monospace">Reactants</text>
  <text x="68" y="70" text-anchor="middle" font-size="12" fill="#eef0ff" font-family="monospace">6CO2</text>
  <text x="68" y="86" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="monospace">6C  18O</text>
  <text x="68" y="100" text-anchor="middle" font-size="12" fill="#eef0ff" font-family="monospace">6H2O</text>
  <text x="68" y="116" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="monospace">12H  6O</text>
  <!-- Arrow -->
  <text x="152" y="82" text-anchor="middle" font-size="13" fill="#fbbf24" font-family="sans-serif">light</text>
  <text x="152" y="96" text-anchor="middle" font-size="22" fill="#34d399">&#8594;</text>
  <text x="152" y="116" text-anchor="middle" font-size="10" fill="#a78bfa" font-family="sans-serif">chlorophyll</text>
  <!-- Products box -->
  <rect x="192" y="30" width="120" height="80" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="252" y="52" text-anchor="middle" font-size="11" fill="#34d399" font-family="monospace">Products</text>
  <text x="252" y="70" text-anchor="middle" font-size="10.5" fill="#eef0ff" font-family="monospace">C6H12O6</text>
  <text x="252" y="86" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="monospace">6C  12H  6O</text>
  <text x="252" y="100" text-anchor="middle" font-size="12" fill="#eef0ff" font-family="monospace">6O2</text>
  <text x="252" y="116" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="monospace">12O</text>
  <!-- Totals -->
  <text x="68" y="148" text-anchor="middle" font-size="10" fill="#fbbf24" font-family="sans-serif">Total: 6C  12H  18O</text>
  <text x="252" y="148" text-anchor="middle" font-size="10" fill="#fbbf24" font-family="sans-serif">Total: 6C  12H  18O</text>
  <text x="160" y="182" text-anchor="middle" font-size="11" fill="#34d399" font-family="sans-serif">Atoms balanced on both sides</text>
</svg>`,
        },
      ],
    },

    // ── Section 2 ──────────────────────────────────────────────────────────
    {
      heading: "Uses of Glucose and Role of Chlorophyll",
      body: `Glucose produced by photosynthesis is used in several ways by the plant:

- **Respiration** — glucose is broken down to release energy for all metabolic processes.
- **Converted to starch** — for storage (starch is insoluble and does not affect osmosis).
- **Converted to cellulose** — for cell wall synthesis and growth.
- **Converted to sucrose** — for transport in the phloem to other parts of the plant.
- **Used to make amino acids** — by combining with nitrate ions absorbed from the soil; amino acids are then assembled into proteins.
- **Used to make fats and oils** — for storage in seeds.

Chlorophyll is a green pigment found in **chloroplasts**, which are most abundant in the **palisade mesophyll** cells of the leaf. Chlorophyll absorbs mainly **red and blue** wavelengths of light and reflects green (which is why leaves appear green). The absorbed light energy drives the reactions that split water and fix carbon dioxide into glucose.`,
      keyPoints: [
        "Glucose is used in respiration, starch storage, cellulose synthesis, sucrose transport, amino acid production, and fat/oil storage.",
        "Starch is the storage form because it is insoluble — it does not affect the water potential of cells.",
        "Chlorophyll is located in chloroplasts, mainly in palisade mesophyll cells.",
        "Chlorophyll absorbs red and blue light; it reflects green light.",
        "Combining glucose with nitrate ions allows production of amino acids and proteins.",
      ],
      thinkDeeper:
        "If a plant is given radioactive CO₂ (¹⁴CO₂) during photosynthesis, the radioactive carbon atoms end up in glucose, then in starch, cellulose, and even proteins. This tracer technique (used by Calvin in the 1950s) is how scientists worked out the exact pathway of carbon in the Calvin cycle — a reminder that a single cleverly labelled molecule can unlock an entire biochemical pathway.",
    },

    // ── Section 3 ──────────────────────────────────────────────────────────
    {
      heading: "Leaf Structure and Adaptations",
      body: `A leaf is exquisitely adapted to maximise photosynthesis. From top to bottom, the key layers are:

**Waxy cuticle** — a transparent, waterproof layer on the upper epidermis. It reduces water loss by evaporation and allows light to pass through.

**Upper epidermis** — a single layer of transparent cells; no chloroplasts (no need — light passes straight through). Produces the waxy cuticle.

**Palisade mesophyll** — tightly packed, column-shaped cells packed with chloroplasts. This is where most photosynthesis occurs. The long thin shape means many can be stacked near the top surface, maximising light absorption.

**Spongy mesophyll** — irregularly shaped cells with many **air spaces** between them. The air spaces allow CO₂ and O₂ to diffuse rapidly throughout the leaf. The large surface area of the cell walls facing air spaces increases the rate of gas exchange.

**Stomata and guard cells** — pores on the lower epidermis (mainly). Guard cells change shape to open or close the stoma, controlling gas exchange and water loss. When guard cells take in water by osmosis they become turgid and bow outward, opening the pore.

**Vascular bundles (veins)** — contain **xylem** (brings water and mineral ions from roots) and **phloem** (carries dissolved sucrose away from leaves to other parts of the plant).`,
      discovery: {
        problem:
          "Imagine you are designing a leaf from scratch. Your goal: get as much CO₂ as possible to the palisade cells, while keeping water loss as low as possible and capturing maximum light. What structural features would you include, and why would each one help?",
        idea:
          "You would put most chloroplasts near the top surface (palisade layer), add internal air spaces (spongy layer) so CO₂ diffuses quickly, cover the top with a transparent waterproof cuticle to let light in while blocking evaporation, and put adjustable pores (stomata) mainly on the underside — away from the hottest sunlight — so gas exchange can be tuned to conditions. This is exactly what real leaves do.",
      },
      whyItWorks:
        "Diffusion rate depends on concentration gradient and distance (Fick's law). Air spaces in the spongy mesophyll maintain a steep CO₂ gradient right next to every cell, reducing the diffusion distance. Palisade cells stacked vertically let light penetrate deeply before being absorbed. Every structural feature is a solution to a physical constraint.",
      strategies: ["draw a diagram", "function follows structure"],
      keyPoints: [
        "Waxy cuticle: transparent and waterproof — lets light in, reduces water loss.",
        "Palisade mesophyll: tightly packed, chloroplast-rich cells near the top for maximum light absorption.",
        "Spongy mesophyll: air spaces allow rapid CO₂/O₂ diffusion throughout the leaf.",
        "Stomata open when guard cells become turgid; CO₂ enters and O₂ exits by diffusion.",
        "Xylem delivers water; phloem transports sucrose away from the leaf.",
      ],
      diagrams: [
        {
          caption: "Cross-section of a dicotyledonous leaf — labelled layers",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Labelled cross-section of a leaf showing all major layers">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Waxy cuticle -->
  <rect x="30" y="18" width="180" height="8" rx="2" fill="#fbbf24" opacity="0.85"/>
  <text x="218" y="26" font-size="9" fill="#fbbf24" font-family="sans-serif">Waxy cuticle</text>
  <!-- Upper epidermis -->
  <rect x="30" y="26" width="180" height="12" rx="0" fill="#1e40af" opacity="0.7"/>
  <text x="218" y="36" font-size="9" fill="#38bdf8" font-family="sans-serif">Upper epidermis</text>
  <!-- Palisade mesophyll -->
  <rect x="30" y="38" width="180" height="38" fill="#14532d" opacity="0.85"/>
  <!-- palisade cell outlines -->
  <line x1="50" y1="38" x2="50" y2="76" stroke="#34d399" stroke-width="0.7"/>
  <line x1="70" y1="38" x2="70" y2="76" stroke="#34d399" stroke-width="0.7"/>
  <line x1="90" y1="38" x2="90" y2="76" stroke="#34d399" stroke-width="0.7"/>
  <line x1="110" y1="38" x2="110" y2="76" stroke="#34d399" stroke-width="0.7"/>
  <line x1="130" y1="38" x2="130" y2="76" stroke="#34d399" stroke-width="0.7"/>
  <line x1="150" y1="38" x2="150" y2="76" stroke="#34d399" stroke-width="0.7"/>
  <line x1="170" y1="38" x2="170" y2="76" stroke="#34d399" stroke-width="0.7"/>
  <!-- chloroplast dots -->
  <circle cx="42" cy="50" r="3" fill="#34d399"/>
  <circle cx="60" cy="55" r="3" fill="#34d399"/>
  <circle cx="80" cy="48" r="3" fill="#34d399"/>
  <circle cx="100" cy="57" r="3" fill="#34d399"/>
  <circle cx="120" cy="50" r="3" fill="#34d399"/>
  <circle cx="140" cy="55" r="3" fill="#34d399"/>
  <circle cx="160" cy="48" r="3" fill="#34d399"/>
  <text x="218" y="57" font-size="9" fill="#34d399" font-family="sans-serif">Palisade</text>
  <text x="218" y="67" font-size="9" fill="#34d399" font-family="sans-serif">mesophyll</text>
  <!-- Spongy mesophyll -->
  <rect x="30" y="76" width="180" height="44" fill="#065f46" opacity="0.6"/>
  <!-- air space ellipses -->
  <ellipse cx="55" cy="90" rx="10" ry="7" fill="#0f172a" opacity="0.7"/>
  <ellipse cx="90" cy="98" rx="12" ry="6" fill="#0f172a" opacity="0.7"/>
  <ellipse cx="130" cy="87" rx="9" ry="5" fill="#0f172a" opacity="0.7"/>
  <ellipse cx="165" cy="102" rx="11" ry="6" fill="#0f172a" opacity="0.7"/>
  <text x="218" y="97" font-size="9" fill="#34d399" font-family="sans-serif">Spongy mesophyll</text>
  <text x="218" y="107" font-size="9" fill="#b7bce0" font-family="sans-serif">(air spaces)</text>
  <!-- Vascular bundle -->
  <rect x="75" y="93" width="20" height="14" rx="2" fill="#a78bfa" opacity="0.8"/>
  <text x="97" y="103" font-size="8" fill="#a78bfa" font-family="sans-serif">vein</text>
  <!-- Lower epidermis -->
  <rect x="30" y="120" width="180" height="12" fill="#1e40af" opacity="0.6"/>
  <text x="218" y="130" font-size="9" fill="#38bdf8" font-family="sans-serif">Lower epidermis</text>
  <!-- Stomata -->
  <ellipse cx="60" cy="126" rx="7" ry="4" fill="#0f172a"/>
  <ellipse cx="110" cy="126" rx="7" ry="4" fill="#0f172a"/>
  <text x="218" y="144" font-size="9" fill="#fbbf24" font-family="sans-serif">Stomata +</text>
  <text x="218" y="154" font-size="9" fill="#fbbf24" font-family="sans-serif">guard cells</text>
  <!-- Light arrows -->
  <line x1="8" y1="10" x2="8" y2="45" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="18" y1="10" x2="18" y2="45" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="2" y="8" font-size="8" fill="#fbbf24" font-family="sans-serif">light</text>
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L0,6 L6,3 z" fill="#fbbf24"/>
    </marker>
  </defs>
  <text x="160" y="185" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">Leaf cross-section (not to scale)</text>
</svg>`,
        },
      ],
    },

    // ── Section 4 ──────────────────────────────────────────────────────────
    {
      heading: "Limiting Factors of Photosynthesis",
      body: `The rate of photosynthesis is controlled by whichever factor is in shortest supply — the **limiting factor**. The three main limiting factors are:

**1. Light intensity** — as light intensity increases, the rate of photosynthesis increases (more photons absorbed by chlorophyll). At very high intensities the rate levels off (plateaus) because CO₂ or temperature has become limiting.

**2. Carbon dioxide concentration** — CO₂ is a reactant. Increasing [CO₂] raises the rate until another factor limits. Commercial greenhouses often pump in extra CO₂ to boost crop yields.

**3. Temperature** — photosynthesis involves enzyme-controlled reactions. Increasing temperature increases kinetic energy and collision rate, raising the reaction rate. Above the enzyme's optimum temperature (~35–40 °C for most plants), the enzyme's active site is denatured and the rate falls sharply.

**Interpreting rate graphs:**
- A rising section means the named factor is limiting — changing it changes the rate.
- A plateau means a different factor has become limiting — increasing the named factor no longer helps.
- Multiple plateau heights at different CO₂ levels confirm CO₂ is still limiting even when light is high.`,
      discovery: {
        problem:
          "A student increases light intensity on a plant in a sealed container with a fixed amount of CO₂. She notices the rate of photosynthesis rises then levels off. She then doubles the CO₂ concentration. The rate rises again, then plateaus at a higher value. What does this tell her about limiting factors, and what should she vary next?",
        idea:
          "When light alone was increased, CO₂ became the limiting factor (plateau). Doubling CO₂ removed that limitation — light was again limiting. The new, higher plateau means either light has become insufficient again or temperature is now limiting. She should next increase temperature (in small steps up to ~35 °C) to see if the rate rises further.",
      },
      whyItWorks:
        "Think of photosynthesis as a factory assembly line: the output rate is set by the slowest step. Once you speed up one step, a different step becomes the bottleneck. This 'law of the minimum' (Liebig's law) applies to any multi-step process — the overall rate cannot exceed the rate of the slowest reaction.",
      strategies: ["identify the plateau", "change one variable at a time"],
      thinkDeeper:
        "In the real world, all three factors vary simultaneously — a sunny afternoon in a greenhouse has high light, warm temperatures, and potentially lower CO₂ (already consumed). Plants sense day length and temperature to time their stomatal opening, trading water loss against CO₂ gain. This is why C4 plants (like maize) that have an extra CO₂-concentrating mechanism outperform C3 plants in hot, bright conditions.",
      keyPoints: [
        "Three main limiting factors: light intensity, CO₂ concentration, and temperature.",
        "A plateau on a rate graph means a different factor has become limiting.",
        "Increasing temperature increases rate up to the optimum; above this, enzymes denature.",
        "CO₂ is a reactant — higher [CO₂] raises the rate until light or temperature limits.",
        "Only one factor can be limiting at a time; identify it from which variable is being changed.",
      ],
      diagrams: [
        {
          caption: "Rate of photosynthesis vs light intensity — limiting factor graph",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Graph showing rate of photosynthesis against light intensity with two CO2 concentration curves and plateaus">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Axes -->
  <line x1="40" y1="170" x2="290" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="40" y1="170" x2="40" y2="20" stroke="#b7bce0" stroke-width="1.5"/>
  <!-- Axis labels -->
  <text x="165" y="190" text-anchor="middle" font-size="11" fill="#b7bce0" font-family="sans-serif">Light intensity</text>
  <text x="12" y="100" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif" transform="rotate(-90,12,100)">Rate of photosynthesis</text>
  <!-- Curve A: low CO2 — rises then plateaus low -->
  <path d="M40,160 Q90,130 130,80 L290,80" stroke="#38bdf8" stroke-width="2" fill="none"/>
  <text x="212" y="73" font-size="10" fill="#38bdf8" font-family="sans-serif">low [CO2]</text>
  <!-- Curve B: high CO2 — rises then plateaus higher -->
  <path d="M40,160 Q100,120 155,50 L290,50" stroke="#34d399" stroke-width="2" fill="none"/>
  <text x="212" y="43" font-size="10" fill="#34d399" font-family="sans-serif">high [CO2]</text>
  <!-- Plateau annotation A -->
  <line x1="130" y1="80" x2="130" y2="80" stroke="#38bdf8" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="135" y="95" font-size="9" fill="#fbbf24" font-family="sans-serif">plateau: CO2</text>
  <text x="135" y="105" font-size="9" fill="#fbbf24" font-family="sans-serif">now limiting</text>
  <!-- Plateau annotation B -->
  <text x="160" y="62" font-size="9" fill="#fb7185" font-family="sans-serif">plateau: temp</text>
  <text x="160" y="72" font-size="9" fill="#fb7185" font-family="sans-serif">now limiting</text>
  <!-- Arrow on rising section -->
  <text x="55" y="145" font-size="9" fill="#fbbf24" font-family="sans-serif">light</text>
  <text x="52" y="155" font-size="9" fill="#fbbf24" font-family="sans-serif">limiting</text>
  <text x="280" y="185" font-size="9" fill="#b7bce0" font-family="sans-serif" text-anchor="end">--></text>
</svg>`,
        },
      ],
    },

    // ── Section 5 ──────────────────────────────────────────────────────────
    {
      heading: "Experiments: Testing for Starch and Controlled Investigations",
      body: `**Starch test on a leaf (standard method):**

1. **Destarch** the plant — keep it in the dark for 24–48 hours so existing starch is used up.
2. Pick the leaf and **kill** it by dipping briefly in boiling water (stops enzyme activity, softens the cell walls).
3. **Decolourise** the leaf by placing it in hot ethanol — this removes the green chlorophyll so the iodine colour change can be seen clearly. (Ethanol is heated in a water bath — never directly over a flame as ethanol is flammable.)
4. Rinse the leaf in cold water to soften it.
5. Add **iodine solution** — a blue-black colour indicates starch is present; orange-brown indicates no starch.

**Controlled experiments to test what is needed for photosynthesis:**

| Variable tested | How to control it | Expected result |
|---|---|---|
| Light is needed | Cover half the leaf with opaque foil | Covered part: no starch (orange); uncovered part: starch (blue-black) |
| Chlorophyll is needed | Use a variegated leaf (green + white patches) | Only the green (chlorophyll-containing) areas show blue-black |
| CO₂ is needed | Enclose leaf in a sealed flask with sodium hydroxide to absorb CO₂ | No starch formed (CO₂ was removed) |

**Key principle:** Change ONE variable at a time; keep all other conditions constant. Destarch before every experiment.`,
      keyPoints: [
        "Destarch the plant (darkness 24–48 h) before testing so results are unambiguous.",
        "Ethanol in a water bath decolourises the leaf; iodine then shows where starch is present.",
        "Blue-black = starch present; orange-brown = no starch.",
        "Variegated leaf experiment: only green regions show starch, proving chlorophyll is required.",
        "NaOH absorbs CO₂ in the sealed flask experiment — no CO₂ means no starch.",
      ],
      strategies: ["control variables", "use positive and negative controls"],
      whyItWorks:
        "Iodine (I₂/KI solution) molecules fit into the helical coils of the starch polymer, forming a charge-transfer complex that absorbs visible light in the orange region — making the solution appear blue-black. Glucose and sucrose lack this helical structure and do not turn iodine blue-black. This is why we test for starch (the stored form) rather than glucose directly in leaf investigations.",
    },

    // ── Section 6 ──────────────────────────────────────────────────────────
    {
      heading: "Mineral Nutrition: Nitrate and Magnesium Ions",
      body: `Plants need more than just CO₂ and water — they also absorb **mineral ions** from the soil through their roots by active transport.

**Nitrate ions (NO₃⁻):**
- Needed to make **amino acids**, which are assembled into **proteins**.
- Nitrate provides the nitrogen atom that is essential in every amino acid (and therefore every protein).
- **Deficiency symptom:** stunted growth (cannot make enough protein for new cells) and **yellowing of older leaves** (chlorosis — nitrogen is mobilised from older leaves to younger growing tissue).

**Magnesium ions (Mg²⁺):**
- Needed to make **chlorophyll** (magnesium is the central atom of the chlorophyll molecule).
- **Deficiency symptom:** **yellowing of leaves** (chlorosis), because without chlorophyll the leaf cannot photosynthesise efficiently.

**Distinguishing the two deficiencies:**
- Magnesium deficiency causes yellowing that tends to start in older leaves and spreads uniformly.
- Nitrate deficiency causes yellowing and also small, pale, stunted plants.
- In an exam, "yellow leaves + stunted growth" → nitrate deficiency; "yellow leaves alone" → possibly magnesium.

Both ions are absorbed from soil solution by active transport — an energy-requiring process against the concentration gradient.`,
      keyPoints: [
        "Nitrate ions supply nitrogen for making amino acids and proteins.",
        "Nitrate deficiency: stunted growth and yellowing (chlorosis) of older leaves.",
        "Magnesium ions are required to synthesise chlorophyll.",
        "Magnesium deficiency: yellowing of leaves due to lack of chlorophyll.",
        "Mineral ions are absorbed by active transport — requires energy (ATP from respiration).",
      ],
      diagrams: [
        {
          caption: "Mineral ion deficiency symptoms compared",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Comparison of nitrate and magnesium deficiency symptoms in plants">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Nitrate deficient plant (left) -->
  <text x="80" y="18" text-anchor="middle" font-size="11" fill="#fb7185" font-family="sans-serif">NO3- deficient</text>
  <!-- stem -->
  <rect x="77" y="120" width="6" height="50" rx="2" fill="#4ade80" opacity="0.5"/>
  <!-- small yellow leaves -->
  <ellipse cx="68" cy="110" rx="14" ry="8" fill="#ca8a04" opacity="0.85"/>
  <ellipse cx="92" cy="100" rx="12" ry="7" fill="#ca8a04" opacity="0.85"/>
  <ellipse cx="63" cy="92" rx="10" ry="6" fill="#ca8a04" opacity="0.85"/>
  <text x="80" y="180" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">Stunted + yellow</text>
  <text x="80" y="190" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">older leaves</text>
  <!-- Magnesium deficient plant (right) -->
  <text x="240" y="18" text-anchor="middle" font-size="11" fill="#fbbf24" font-family="sans-serif">Mg2+ deficient</text>
  <!-- stem -->
  <rect x="237" y="100" width="6" height="70" rx="2" fill="#4ade80" opacity="0.8"/>
  <!-- taller plant, yellow older leaves, some green younger -->
  <ellipse cx="222" cy="90" rx="16" ry="9" fill="#ca8a04" opacity="0.85"/>
  <ellipse cx="254" cy="80" rx="16" ry="9" fill="#ca8a04" opacity="0.85"/>
  <ellipse cx="222" cy="68" rx="15" ry="8" fill="#16a34a" opacity="0.8"/>
  <ellipse cx="255" cy="60" rx="14" ry="8" fill="#16a34a" opacity="0.8"/>
  <text x="240" y="180" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">Normal height</text>
  <text x="240" y="190" text-anchor="middle" font-size="9" fill="#b7bce0" font-family="sans-serif">Yellow older leaves</text>
  <!-- divider -->
  <line x1="160" y1="15" x2="160" y2="195" stroke="#334155" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- legend -->
  <rect x="8" y="145" width="12" height="8" fill="#ca8a04"/>
  <text x="22" y="153" font-size="9" fill="#b7bce0" font-family="sans-serif">chlorotic (yellow)</text>
  <rect x="8" y="157" width="12" height="8" fill="#16a34a"/>
  <text x="22" y="165" font-size="9" fill="#b7bce0" font-family="sans-serif">healthy green</text>
</svg>`,
        },
      ],
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // LEARN SMART
  // ─────────────────────────────────────────────────────────────────────────
  learn: {
    keyFacts: [
      "Balanced photosynthesis equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.",
      "Chlorophyll absorbs light energy and transfers it to chemical energy stored in glucose.",
      "Chlorophyll absorbs mainly red and blue light; green light is reflected.",
      "Palisade mesophyll cells contain most of the chloroplasts in a leaf.",
      "Air spaces in the spongy mesophyll allow rapid diffusion of CO₂ and O₂.",
      "The three limiting factors of photosynthesis are light intensity, CO₂ concentration, and temperature.",
      "A plateau on a rate-vs-light-intensity graph signals that a different factor is limiting.",
      "Ethanol (heated in a water bath) decolourises a leaf; iodine then tests for starch.",
      "Destarch a plant (24–48 h darkness) before any starch-testing investigation.",
      "Nitrate ions are needed for amino acid and protein synthesis.",
      "Magnesium ions are needed for chlorophyll synthesis.",
      "Deficiency of either NO₃⁻ or Mg²⁺ causes yellowing (chlorosis) of leaves.",
    ],
    flashcards: [
      {
        front: "What is the balanced symbol equation for photosynthesis?",
        back: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂  (light energy + chlorophyll as conditions)",
      },
      {
        front: "Where in the leaf is most photosynthesis carried out?",
        back: "Palisade mesophyll — tightly packed cells near the upper surface, packed with chloroplasts.",
      },
      {
        front: "What is the role of the air spaces in the spongy mesophyll?",
        back: "They allow CO₂ and O₂ to diffuse rapidly throughout the leaf, maintaining concentration gradients.",
      },
      {
        front: "What happens to guard cells when they take in water by osmosis?",
        back: "They become turgid and bow outwards, opening the stomatal pore — allowing gas exchange.",
      },
      {
        front: "Name the three limiting factors of photosynthesis.",
        back: "Light intensity, carbon dioxide concentration, and temperature.",
      },
      {
        front: "Why does the rate of photosynthesis plateau even when light intensity keeps increasing?",
        back: "Another factor (CO₂ concentration or temperature) has become limiting — it is now the bottleneck.",
      },
      {
        front: "Describe the starch test procedure for a leaf.",
        back: "1) Destarch (darkness 24–48 h). 2) Kill in boiling water. 3) Decolourise in hot ethanol (water bath). 4) Rinse in water. 5) Apply iodine — blue-black = starch present.",
      },
      {
        front: "Why is ethanol heated in a water bath, not directly over a flame?",
        back: "Ethanol is highly flammable — a naked flame could ignite the vapour and cause a fire.",
      },
      {
        front: "What does a variegated leaf experiment prove?",
        back: "Only green regions (containing chlorophyll) turn blue-black with iodine — chlorophyll is required for photosynthesis.",
      },
      {
        front: "What are nitrate ions used for in plants?",
        back: "To make amino acids (combining with glucose-derived carbon skeletons) and then proteins.",
      },
      {
        front: "What symptom does magnesium deficiency cause, and why?",
        back: "Yellowing of leaves (chlorosis) — magnesium is the central atom of chlorophyll, so without it chlorophyll cannot be made.",
      },
      {
        front: "List four uses of glucose in a plant.",
        back: "Respiration (energy release); conversion to starch (storage); conversion to cellulose (cell walls); conversion to sucrose (transport in phloem).",
      },
    ],
    keyTerms: [
      {
        term: "Photosynthesis",
        definition:
          "The process by which green plants use light energy, absorbed by chlorophyll, to convert carbon dioxide and water into glucose and oxygen.",
      },
      {
        term: "Chlorophyll",
        definition:
          "A green pigment found in chloroplasts that absorbs light energy (mainly red and blue wavelengths) and transfers it to drive the reactions of photosynthesis.",
      },
      {
        term: "Limiting factor",
        definition:
          "The factor that is in shortest supply and therefore controls the rate of a process; increasing any other factor will not raise the rate until the limiting factor is increased.",
      },
      {
        term: "Palisade mesophyll",
        definition:
          "A layer of tightly packed, column-shaped cells beneath the upper epidermis of a leaf; they contain many chloroplasts and carry out most photosynthesis.",
      },
      {
        term: "Spongy mesophyll",
        definition:
          "A layer of irregularly shaped cells with large air spaces between them, allowing rapid diffusion of gases throughout the leaf.",
      },
      {
        term: "Stomata (singular: stoma)",
        definition:
          "Microscopic pores, mainly on the lower epidermis, through which CO₂, O₂, and water vapour diffuse; their size is controlled by guard cells.",
      },
      {
        term: "Guard cells",
        definition:
          "Pairs of specialised cells surrounding each stoma; they become turgid when water enters by osmosis, bowing apart to open the pore, and flaccid to close it.",
      },
      {
        term: "Chlorosis",
        definition:
          "Yellowing of leaves due to lack of chlorophyll, caused by deficiency of magnesium ions (needed to make chlorophyll) or nitrate ions (needed to make proteins including enzymes of chlorophyll synthesis).",
      },
      {
        term: "Nitrate ions (NO₃⁻)",
        definition:
          "Mineral ions absorbed from soil that provide nitrogen for the synthesis of amino acids and proteins in plants.",
      },
      {
        term: "Magnesium ions (Mg²⁺)",
        definition:
          "Mineral ions absorbed from soil that are essential for making chlorophyll; the Mg²⁺ ion sits at the centre of the chlorophyll molecule.",
      },
      {
        term: "Waxy cuticle",
        definition:
          "A transparent, waterproof layer covering the upper epidermis of a leaf; it reduces water loss by evaporation while allowing light to pass through to the photosynthetic cells below.",
      },
      {
        term: "Destarch",
        definition:
          "To remove starch from a plant by keeping it in complete darkness for 24–48 hours, allowing it to use up all stored starch; this ensures iodine tests give unambiguous results.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // QUIZ (quick: 6 MCQ + 3 QA)
  // ─────────────────────────────────────────────────────────────────────────
  quiz: {
    mcq: [
      {
        id: "bio-plant-nutrition-mcq-q01",
        question:
          "Which of the following is the correctly balanced symbol equation for photosynthesis?",
        options: [
          "CO₂ + H₂O → C₆H₁₂O₆ + O₂",
          "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
          "6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂",
          "6CO₂ + 6H₂O → C₆H₁₂O₆ + 12O₂",
        ],
        answerIndex: 1,
        explanation:
          "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ is correctly balanced: 6C, 12H, and 18O on each side. Option A is unbalanced. Option C uses 12H₂O which would give 12H₂ worth of hydrogen (i.e. 24H), but glucose only has 12H — so that equation is unbalanced. Option D has 12O₂ on the right giving 24 extra oxygens, which is unbalanced.",
        guideRef: "The Photosynthesis Equation",
        difficulty: "warmup",
      },
      {
        id: "bio-plant-nutrition-mcq-q02",
        question:
          "A student increases the light intensity shining on a plant. The rate of photosynthesis rises and then levels off. What is the most likely explanation for the plateau?",
        options: [
          "The plant has run out of glucose.",
          "The chlorophyll has been destroyed by the light.",
          "Carbon dioxide or temperature has become the limiting factor.",
          "The stomata have closed because of excess oxygen.",
        ],
        answerIndex: 2,
        explanation:
          "A plateau means increasing the stated variable (light) no longer raises the rate — a different factor is now limiting. CO₂ concentration or temperature are the other two main limiting factors. Glucose is a product, not a reactant; chlorophyll is not destroyed by normal light intensities; stomata do not close due to excess O₂.",
        guideRef: "Limiting Factors of Photosynthesis",
        difficulty: "core",
        hints: [
          "What does a plateau tell you about which factor is controlling the rate?",
          "If increasing light no longer helps, something else must be the bottleneck.",
          "Photosynthesis needs CO₂, water, light, and suitable temperature — which of these is fixed?",
        ],
      },
      {
        id: "bio-plant-nutrition-mcq-q03",
        question:
          "Which leaf layer contains the most chloroplasts and carries out the greatest proportion of photosynthesis?",
        options: [
          "Upper epidermis",
          "Palisade mesophyll",
          "Spongy mesophyll",
          "Lower epidermis",
        ],
        answerIndex: 1,
        explanation:
          "The palisade mesophyll is a layer of tightly packed, column-shaped cells beneath the upper epidermis. They are packed with chloroplasts and positioned to receive the most sunlight. The epidermis layers are largely transparent and lack chloroplasts. The spongy mesophyll has fewer chloroplasts and its main role is gas exchange.",
        guideRef: "Leaf Structure and Adaptations",
        difficulty: "warmup",
      },
      {
        id: "bio-plant-nutrition-mcq-q04",
        question:
          "A variegated leaf (green and white patches) is used in a photosynthesis experiment. After the starch test, which result is expected?",
        options: [
          "Only the white areas turn blue-black.",
          "Both green and white areas turn blue-black.",
          "Only the green areas turn blue-black.",
          "Neither area turns blue-black.",
        ],
        answerIndex: 2,
        explanation:
          "Chlorophyll is required for photosynthesis. The white areas of a variegated leaf lack chlorophyll (they contain no functional chloroplasts) and cannot photosynthesize, so no starch is made there. Only the green areas, which contain chlorophyll, produce starch and turn blue-black with iodine.",
        guideRef: "Experiments: Testing for Starch and Controlled Investigations",
        difficulty: "warmup",
      },
      {
        id: "bio-plant-nutrition-mcq-q05",
        question:
          "A plant is grown in a mineral solution that lacks magnesium ions. What symptom is most likely to develop, and why?",
        options: [
          "Stunted growth only, because magnesium is needed for cell division.",
          "Yellow leaves, because magnesium is needed to make chlorophyll.",
          "Wilting, because magnesium controls water uptake.",
          "Dark green leaves, because magnesium inhibits chlorophyll breakdown.",
        ],
        answerIndex: 1,
        explanation:
          "Magnesium (Mg²⁺) is the central atom of the chlorophyll molecule. Without it, chlorophyll cannot be synthesised, so leaves turn yellow (chlorosis). Stunted growth is a symptom of nitrate deficiency (proteins cannot be made). Magnesium does not directly control water uptake or chlorophyll breakdown.",
        guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
        difficulty: "core",
        hints: [
          "Think about what magnesium ions are used for in the leaf.",
          "Chlorophyll contains a magnesium ion at its centre.",
          "Without chlorophyll, what colour will the leaf appear?",
        ],
      },
      {
        id: "bio-plant-nutrition-mcq-q06",
        question:
          "A plant is kept in a sealed, airtight container with a sodium hydroxide solution inside (NaOH absorbs CO₂). The plant receives plenty of light and water. After 48 hours, the starch test is performed. What result is expected, and what conclusion can be drawn?",
        options: [
          "Blue-black — CO₂ is not needed for photosynthesis.",
          "Orange-brown — light is needed for photosynthesis.",
          "Blue-black — the plant used stored glucose to make starch.",
          "Orange-brown — CO₂ is needed for photosynthesis.",
        ],
        answerIndex: 3,
        explanation:
          "NaOH removes CO₂ from the air in the container. With no CO₂ (a reactant), photosynthesis cannot proceed, so no new starch is made. After destarching and running the experiment, the leaf remains orange-brown with iodine — proving CO₂ is required. Option A incorrectly concludes CO₂ is not needed. Option B incorrectly links the result to light (light is provided). Option C incorrectly states starch forms from stored glucose — that would make the leaf blue-black but the experiment shows it is orange-brown.",
        guideRef: "Experiments: Testing for Starch and Controlled Investigations",
        difficulty: "core",
        hints: [
          "NaOH absorbs CO₂ — so what is being removed from the environment?",
          "CO₂ is a reactant in photosynthesis. What happens if a reactant is missing?",
          "The plant was destarched first. What does an orange-brown iodine result mean?",
          "Which factor is being controlled/removed in this experiment?",
        ],
      },
    ],
    qa: [
      {
        id: "bio-plant-nutrition-qa-q01",
        question:
          "Explain why a leaf has a waxy cuticle on its upper surface but stomata mainly on its lower surface. [4]",
        marks: 4,
        modelAnswer:
          "The waxy cuticle is a transparent, waterproof layer that reduces water loss by evaporation from the upper epidermis while allowing light to pass through to the palisade cells below. Stomata are located mainly on the lower (underside) surface, away from direct sunlight. This reduces the rate of evaporation through the stomata (the lower surface is cooler and less exposed to the sun's energy), helping the plant conserve water while still allowing CO₂ to enter and O₂ to exit for gas exchange.",
        markScheme: [
          "waxy cuticle is waterproof / reduces water loss by evaporation",
          "waxy cuticle is transparent / allows light to reach palisade cells",
          "stomata mainly on lower surface / away from direct sunlight / lower temperature",
          "reduces water loss through stomata / conserves water while allowing gas exchange",
        ],
        commonError:
          "Many students say the cuticle 'prevents all water loss' — it reduces water loss but does not prevent it entirely. Also, some forget to explain WHY being on the underside reduces evaporation.",
        guideRef: "Leaf Structure and Adaptations",
        difficulty: "core",
        hints: [
          "Think about two separate roles: the cuticle's role and the stomata's position.",
          "What property of the cuticle lets light through but blocks water vapour?",
          "Why would evaporation be lower on the underside of a leaf?",
          "Gas exchange still has to happen — stomata must be open sometimes. How does the plant balance this?",
        ],
        strategy: "function follows structure",
      },
      {
        id: "bio-plant-nutrition-qa-q02",
        question:
          "A student investigates the effect of light intensity on the rate of photosynthesis using an aquatic plant (Elodea). She counts the number of oxygen bubbles produced per minute at different distances from a lamp. Her results are: 10 cm = 40 bubbles/min; 20 cm = 22 bubbles/min; 40 cm = 10 bubbles/min; 80 cm = 10 bubbles/min.\n\n(a) State the relationship between light intensity and rate of photosynthesis shown in the first three results. [1]\n(b) Explain why the rate does not increase between 40 cm and 80 cm distance. [2]\n(c) Suggest TWO changes to the investigation that would allow the student to determine whether CO₂ concentration is the limiting factor at 40 cm distance. [2]",
        marks: 5,
        modelAnswer:
          "(a) As light intensity increases (lamp moves closer), the rate of photosynthesis increases / there is a positive correlation between light intensity and rate of photosynthesis.\n\n(b) At 40 cm and 80 cm, the rate is the same (10 bubbles/min). The plant has reached a plateau: light intensity is no longer the limiting factor. Another factor — most likely CO₂ concentration or temperature — is now limiting the rate. Increasing light further has no effect.\n\n(c) 1. Add sodium hydrogencarbonate solution to the water surrounding the plant to increase the CO₂ concentration available to it. If the rate then increases at 40 cm, CO₂ was the limiting factor. 2. Keep the lamp at 40 cm distance (fixed light intensity) and compare bubble rates at different concentrations of sodium hydrogencarbonate — if rate rises with higher CO₂, this confirms CO₂ was limiting.",
        markScheme: [
          "(a) as light intensity increases, rate of photosynthesis increases / positive correlation",
          "(b) another factor has become limiting (CO₂ / temperature)",
          "(b) increasing light intensity no longer raises the rate / plateau reached",
          "(c) add/increase CO₂ supply (e.g. sodium hydrogencarbonate / CO₂ gas)",
          "(c) keep other variables constant (lamp at same distance / same temperature) and measure change in rate",
        ],
        commonError:
          "Students often say 'the plant is tired' or 'the plant has used up all the light' — there is no such thing as using up light. The plateau always means a different factor is limiting.",
        guideRef: "Limiting Factors of Photosynthesis",
        difficulty: "core",
        hints: [
          "What pattern do the first three data points show? Describe the direction of the relationship.",
          "At 40 cm and 80 cm the rate is identical — what does a flat section of a graph tell you?",
          "Name the other limiting factors. Which one could you change by adding a chemical to the water?",
          "Sodium hydrogencarbonate dissolves in water and releases CO₂ — how would this help?",
        ],
        strategy: "identify the plateau",
        solutions: [
          {
            label: "Method: interpreting a graph then designing an experiment",
            steps: [
              "Read off the data: 40 cm and 80 cm both give 10 bubbles/min — no change despite quartering the light intensity at 80 cm (doubling the distance reduces intensity to one quarter, since intensity ∝ 1/distance²).",
              "A flat section means that factor (light) is no longer limiting — something else controls the rate.",
              "To test CO₂: add NaHCO₃ to the water (cheap, safe CO₂ source) and repeat the bubble count at 40 cm.",
              "If the rate rises, CO₂ was limiting. If it stays at 10 bubbles/min, temperature is probably limiting.",
            ],
          },
        ],
      },
      {
        id: "bio-plant-nutrition-qa-q03",
        question:
          "Compare the deficiency symptoms and causes of nitrate ion deficiency and magnesium ion deficiency in plants. [6]",
        marks: 6,
        modelAnswer:
          "Both nitrate and magnesium ion deficiency cause yellowing (chlorosis) of leaves, but for different reasons and with different additional symptoms.\n\nNitrate ions (NO₃⁻) are needed to provide nitrogen for the synthesis of amino acids, which are assembled into proteins. Without nitrate, the plant cannot make enough protein for growth and enzyme production. Symptoms: yellowing of older leaves (nitrogen is mobilised to younger growing tissue) and stunted growth — the plant remains small because cell division and growth require proteins.\n\nMagnesium ions (Mg²⁺) are the central atom of the chlorophyll molecule. Without magnesium, chlorophyll cannot be synthesised. Symptoms: yellowing (chlorosis) of leaves, typically starting in older leaves. Unlike nitrate deficiency, growth may be less severely stunted because proteins can still be made (nitrogen from other sources may be available), but the plant cannot photosynthesize efficiently.\n\nKey distinction: nitrate deficiency causes both yellowing AND stunted growth; magnesium deficiency primarily causes yellowing. Both ions are absorbed by active transport from soil solution.",
        markScheme: [
          "nitrate ions needed for amino acid / protein synthesis",
          "nitrate deficiency: stunted growth / small plant",
          "nitrate deficiency: yellowing / chlorosis of older leaves",
          "magnesium ions needed to make chlorophyll",
          "magnesium deficiency: yellowing / chlorosis of leaves",
          "both ions absorbed by active transport from soil",
        ],
        commonError:
          "Many students confuse the two deficiencies. Remember: No₃⁻ → No proteins → No growth (stunted). Mg²⁺ → No chlorophyll → No green colour (yellow).",
        guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
        difficulty: "core",
        hints: [
          "For each ion, first state what it is used to make in the plant.",
          "If a plant cannot make that molecule, what goes wrong?",
          "What observable symptom does each deficiency cause?",
          "What is the one extra symptom that distinguishes nitrate deficiency from magnesium deficiency?",
        ],
        strategy: "structure: cause → consequence → symptom",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // QUESTION BANK
  // ─────────────────────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      {
        id: "bio-plant-nutrition-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description:
          "Ten multiple-choice questions spanning the photosynthesis equation, uses of glucose, leaf structure, and limiting factors.",
        questions: [
          {
            id: "bio-plant-nutrition-bm1-01",
            question: "Which word equation correctly summarises photosynthesis?",
            options: [
              "glucose + oxygen → carbon dioxide + water",
              "carbon dioxide + water → glucose + oxygen",
              "carbon dioxide + oxygen → glucose + water",
              "glucose + water → carbon dioxide + oxygen",
            ],
            answerIndex: 1,
            explanation:
              "Photosynthesis uses carbon dioxide and water as reactants and produces glucose and oxygen, with light energy absorbed by chlorophyll driving the reaction. Option A is the word equation for aerobic respiration (the reverse process).",
            guideRef: "The Photosynthesis Equation",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bm1-02",
            question:
              "In the photosynthesis equation, where should 'light energy' and 'chlorophyll' be written?",
            options: [
              "As reactants on the left of the arrow",
              "As products on the right of the arrow",
              "Above or below the arrow, as conditions",
              "They should not appear in the equation at all",
            ],
            answerIndex: 2,
            explanation:
              "Light energy and chlorophyll are conditions needed for the reaction, not substances that are used up or made. They are written above/below the arrow, never as reactants or products.",
            guideRef: "The Photosynthesis Equation",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bm1-03",
            question:
              "Which row correctly states the total number of each atom on one side of the balanced equation 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂?",
            options: [
              "6 carbon, 6 hydrogen, 12 oxygen",
              "6 carbon, 12 hydrogen, 18 oxygen",
              "12 carbon, 12 hydrogen, 18 oxygen",
              "6 carbon, 12 hydrogen, 24 oxygen",
            ],
            answerIndex: 1,
            explanation:
              "On the left: 6 C and 12 O from 6CO₂, plus 12 H and 6 O from 6H₂O — giving 6 C, 12 H, 18 O. The right side has the same totals (glucose 6C 12H 6O + 6O₂ giving 12 O = 18 O). The equation is balanced.",
            guideRef: "The Photosynthesis Equation",
            difficulty: "core",
            hints: [
              "Count each element from the reactants one molecule type at a time.",
              "6CO₂ gives 6 carbon and 12 oxygen; 6H₂O gives 12 hydrogen and 6 oxygen.",
              "Add the oxygen contributions: 12 + 6 = 18.",
            ],
          },
          {
            id: "bio-plant-nutrition-bm1-04",
            question:
              "Which colours of light are absorbed most strongly by chlorophyll?",
            options: [
              "Green and yellow",
              "Red and blue",
              "Only green",
              "All colours equally",
            ],
            answerIndex: 1,
            explanation:
              "Chlorophyll absorbs mainly red and blue wavelengths and reflects green light, which is why leaves appear green. It does not absorb green strongly.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bm1-05",
            question:
              "Glucose made in photosynthesis can be converted into starch for storage. Why is starch a suitable storage molecule?",
            options: [
              "It is soluble and easily transported in phloem.",
              "It is insoluble, so it does not affect the water potential of the cell.",
              "It can diffuse out of the cell quickly when needed.",
              "It is the molecule broken down directly in respiration.",
            ],
            answerIndex: 1,
            explanation:
              "Starch is insoluble, so it does not move out of cells and does not draw water in by osmosis — it has no effect on the cell's water potential. Sucrose (not starch) is the soluble transport sugar, and glucose is the respiratory substrate.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "core",
            hints: [
              "Think about what would happen to water movement if a soluble sugar were stored in large amounts.",
              "Storage molecules should not dissolve and leave the cell.",
              "Which property keeps starch from affecting osmosis?",
            ],
          },
          {
            id: "bio-plant-nutrition-bm1-06",
            question:
              "Which use of glucose requires the plant to also absorb nitrate ions from the soil?",
            options: [
              "Conversion to cellulose for cell walls",
              "Conversion to starch for storage",
              "Production of amino acids for proteins",
              "Release of energy in respiration",
            ],
            answerIndex: 2,
            explanation:
              "Amino acids contain nitrogen. The plant combines glucose-derived carbon skeletons with nitrogen from nitrate ions to make amino acids, which are then assembled into proteins. Cellulose, starch and respiration involve only carbon, hydrogen and oxygen.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "core",
            hints: [
              "Which of these products contains the element nitrogen?",
              "Nitrate ions supply nitrogen atoms.",
              "Proteins are built from amino acids.",
            ],
          },
          {
            id: "bio-plant-nutrition-bm1-07",
            question:
              "Which feature of palisade mesophyll cells makes them especially efficient at photosynthesis?",
            options: [
              "They have large air spaces between them.",
              "They are column-shaped and packed with chloroplasts near the upper surface.",
              "They are transparent and contain no chloroplasts.",
              "They contain guard cells that open and close pores.",
            ],
            answerIndex: 1,
            explanation:
              "Palisade cells are tall, column-shaped and tightly packed just below the upper epidermis, each holding many chloroplasts so they capture maximum light. Air spaces are a feature of the spongy layer; the epidermis is transparent and chloroplast-free.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bm1-08",
            question:
              "What is the main function of the air spaces in the spongy mesophyll layer?",
            options: [
              "To store water for the dry season",
              "To allow rapid diffusion of CO₂ and O₂ throughout the leaf",
              "To reflect light back up to the palisade cells",
              "To provide a site for chlorophyll synthesis",
            ],
            answerIndex: 1,
            explanation:
              "The air spaces give a large surface area of moist cell wall in contact with air and short diffusion paths, so CO₂ reaches the photosynthesising cells quickly and O₂ leaves quickly. They do not store water or make chlorophyll.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "core",
            hints: [
              "Air spaces connect to the stomata.",
              "Think about how gases move into and around the leaf.",
              "Which gases must reach every photosynthesising cell?",
            ],
          },
          {
            id: "bio-plant-nutrition-bm1-09",
            question:
              "A greenhouse grower wants to increase crop yield on a bright, warm day when light and temperature are already high. Which change is most likely to increase the rate of photosynthesis further?",
            options: [
              "Adding more lamps to increase light intensity",
              "Increasing the carbon dioxide concentration inside the greenhouse",
              "Raising the temperature to 50 °C",
              "Reducing the water supply to the plants",
            ],
            answerIndex: 1,
            explanation:
              "When light and temperature are already high, CO₂ is the most likely limiting factor, so enriching the air with CO₂ raises the rate. More light will not help once light is no longer limiting; 50 °C would denature enzymes; cutting water harms the plant.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "challenge",
            hints: [
              "If light and temperature are already high, which factor is most likely limiting?",
              "Photosynthesis needs CO₂ as a reactant.",
              "Adding more of a factor that is NOT limiting will not raise the rate.",
              "Be careful: very high temperatures denature enzymes.",
            ],
            strategy: "identify the limiting factor",
          },
          {
            id: "bio-plant-nutrition-bm1-10",
            question:
              "On a graph of rate of photosynthesis against temperature, the rate rises to a peak at about 38 °C and then falls sharply at 50 °C. What best explains the sharp fall?",
            options: [
              "The plant runs out of carbon dioxide at high temperature.",
              "Enzymes controlling photosynthesis are denatured above the optimum.",
              "Chlorophyll evaporates from the leaf.",
              "Light becomes the limiting factor at high temperature.",
            ],
            answerIndex: 1,
            explanation:
              "Photosynthesis is enzyme-controlled. Above the optimum temperature the enzymes' active sites change shape (denature), so they can no longer bind substrates and the rate drops steeply. The fall is not caused by CO₂, chlorophyll loss or light.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "challenge",
            hints: [
              "Photosynthesis depends on enzymes.",
              "What happens to enzymes above their optimum temperature?",
              "A denatured active site can no longer bind its substrate.",
            ],
          },
        ],
      },
      {
        id: "bio-plant-nutrition-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description:
          "Ten multiple-choice questions on starch testing, controlled experiments, gas exchange, and limiting-factor graphs.",
        questions: [
          {
            id: "bio-plant-nutrition-bm2-01",
            question:
              "Why must a plant be destarched before a starch-test investigation?",
            options: [
              "To kill the leaf cells before testing",
              "To remove existing starch so any new starch comes only from the experiment",
              "To remove the green chlorophyll from the leaf",
              "To increase the amount of glucose in the leaf",
            ],
            answerIndex: 1,
            explanation:
              "Destarching (24–48 h in darkness) uses up stored starch, so any starch detected afterwards must have been made during the experiment — giving an unambiguous result. Killing the leaf and removing chlorophyll are later steps; destarching does not add glucose.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bm2-02",
            question:
              "What colour change shows that starch is present when iodine solution is added to a leaf?",
            options: [
              "Orange-brown to blue-black",
              "Blue-black to colourless",
              "Green to red",
              "Colourless to milky white",
            ],
            answerIndex: 0,
            explanation:
              "Iodine solution is orange-brown and turns blue-black in the presence of starch. An area that stays orange-brown contains no starch.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bm2-03",
            question:
              "Why is a leaf placed in hot ethanol during the starch test, and why is the ethanol heated in a water bath rather than directly over a flame?",
            options: [
              "To soften the leaf; ethanol is heated indirectly because it boils too slowly otherwise",
              "To remove chlorophyll so the iodine colour is visible; ethanol is heated indirectly because it is flammable",
              "To add starch to the leaf; ethanol is heated indirectly to save energy",
              "To kill the leaf; ethanol is heated indirectly so it does not evaporate",
            ],
            answerIndex: 1,
            explanation:
              "Ethanol dissolves out the green chlorophyll so the iodine colour change can be seen clearly. Because ethanol is highly flammable, it is heated in a water bath, never over a naked flame, to avoid igniting the vapour.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "core",
            hints: [
              "What stops you seeing the iodine colour on a normal green leaf?",
              "Ethanol removes the green pigment.",
              "Think about a safety hazard of ethanol near a flame.",
            ],
          },
          {
            id: "bio-plant-nutrition-bm2-04",
            question:
              "A destarched plant has part of one leaf covered with opaque foil and is left in bright light for several hours. After the starch test, which result is expected?",
            options: [
              "The whole leaf turns blue-black.",
              "Only the covered part turns blue-black.",
              "Only the uncovered part turns blue-black.",
              "The whole leaf stays orange-brown.",
            ],
            answerIndex: 2,
            explanation:
              "Only the uncovered part received light, so only it could photosynthesise and make starch — it turns blue-black. The foil-covered part stayed in the dark, made no starch, and remains orange-brown, proving light is needed.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "core",
            hints: [
              "Which part of the leaf received light?",
              "Starch only forms where photosynthesis happened.",
              "The covered area was effectively kept in the dark.",
            ],
          },
          {
            id: "bio-plant-nutrition-bm2-05",
            question:
              "In an experiment testing whether CO₂ is needed for photosynthesis, why is sodium hydroxide placed in the sealed container with the plant?",
            options: [
              "To release extra carbon dioxide",
              "To absorb carbon dioxide from the air",
              "To kill any bacteria in the container",
              "To provide nitrate ions for the plant",
            ],
            answerIndex: 1,
            explanation:
              "Sodium hydroxide absorbs carbon dioxide, removing this reactant from the sealed air. If no starch then forms, it shows CO₂ is required for photosynthesis. NaOH does not release CO₂ or supply nitrate.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "core",
            hints: [
              "The experiment tests whether CO₂ is needed.",
              "To test if a reactant is needed, you remove it.",
              "Sodium hydroxide is a CO₂ absorber.",
            ],
          },
          {
            id: "bio-plant-nutrition-bm2-06",
            question:
              "Which of the following is the best reason for using a variegated (green-and-white) leaf in a photosynthesis investigation?",
            options: [
              "It lets the same leaf compare areas with and without chlorophyll.",
              "It absorbs more light than a fully green leaf.",
              "It produces more oxygen than a normal leaf.",
              "It removes the need to destarch the plant.",
            ],
            answerIndex: 0,
            explanation:
              "A variegated leaf provides a built-in control: the white areas lack chlorophyll while the green areas have it, under otherwise identical conditions. Only the green areas turn blue-black, showing chlorophyll is needed. It does not absorb more light or remove the destarch step.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "core",
            hints: [
              "What single variable differs between the white and green areas?",
              "A good experiment changes one variable while keeping others constant.",
              "Which area has chlorophyll and which does not?",
            ],
          },
          {
            id: "bio-plant-nutrition-bm2-07",
            question:
              "During the day, by which process and in which direction does carbon dioxide move through the stomata of a brightly lit, photosynthesising leaf?",
            options: [
              "Active transport, out of the leaf",
              "Diffusion, into the leaf",
              "Osmosis, into the leaf",
              "Diffusion, out of the leaf",
            ],
            answerIndex: 1,
            explanation:
              "In bright light photosynthesis uses up CO₂ inside the leaf, lowering its concentration there, so CO₂ diffuses in from the higher concentration in the air. Gas movement is by diffusion, not active transport or osmosis (osmosis is water only).",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "core",
            hints: [
              "Photosynthesis consumes CO₂ inside the leaf.",
              "Gases move down a concentration gradient.",
              "Which way is the gradient when CO₂ is being used up inside?",
            ],
          },
          {
            id: "bio-plant-nutrition-bm2-08",
            question:
              "What causes guard cells to open the stoma?",
            options: [
              "They lose water by osmosis and become flaccid.",
              "They take in water by osmosis, become turgid, and bow apart.",
              "They actively pump CO₂ out of the leaf.",
              "They break down starch to release oxygen.",
            ],
            answerIndex: 1,
            explanation:
              "When guard cells gain water by osmosis they become turgid; their unevenly thickened walls make them bow outward, opening the pore. Losing water makes them flaccid and closes the stoma.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bm2-09",
            question:
              "A student measures photosynthesis as oxygen bubbles per minute from pondweed at increasing light intensity. The rate rises, then becomes constant. She raises the water temperature from 20 °C to 30 °C (CO₂ kept high) and repeats. The constant (plateau) rate is now higher. What does this show?",
            options: [
              "Light was still limiting at the plateau in the first run.",
              "Temperature was limiting at the original plateau.",
              "CO₂ was limiting at the original plateau.",
              "Oxygen had become a reactant at the plateau.",
            ],
            answerIndex: 1,
            explanation:
              "At the first plateau light was no longer limiting (more light did not help). Raising temperature with CO₂ already high lifted the plateau, so temperature was the factor limiting the rate at that plateau. If CO₂ had been limiting, changing temperature alone would not have raised the plateau.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "challenge",
            hints: [
              "A plateau means light is no longer the limiting factor.",
              "What was changed to lift the plateau?",
              "If raising temperature raised the rate, temperature must have been limiting.",
              "CO₂ was deliberately kept high, so it was probably not the bottleneck.",
            ],
            strategy: "change one variable at a time",
          },
          {
            id: "bio-plant-nutrition-bm2-10",
            question:
              "In the pondweed experiment, the volume of gas collected is sometimes preferred to counting bubbles. Which is the best reason?",
            options: [
              "Bubbles are always the same size, so counting is more accurate.",
              "Bubbles vary in size, so measuring gas volume gives a more reliable, quantitative measure.",
              "Counting bubbles measures CO₂ uptake directly.",
              "Gas volume measures the rate of respiration instead.",
            ],
            answerIndex: 1,
            explanation:
              "Bubbles vary in size, so bubble count is only a rough estimate of oxygen produced. Collecting and measuring the volume of gas over a set time gives a more reliable, quantitative measure of the rate. The gas collected is oxygen (a product), not CO₂, and it reflects photosynthesis, not respiration.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "challenge",
            hints: [
              "Are all bubbles the same size?",
              "Think about which method gives a more precise quantity.",
              "Measuring a volume reduces error from variable bubble size.",
            ],
          },
        ],
      },
      {
        id: "bio-plant-nutrition-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description:
          "Ten multiple-choice questions on mineral nutrition, chlorophyll, leaf adaptations, and the fate of glucose.",
        questions: [
          {
            id: "bio-plant-nutrition-bm3-01",
            question: "Which mineral ion is needed by plants to make chlorophyll?",
            options: [
              "Nitrate ion",
              "Magnesium ion",
              "Chloride ion",
              "Calcium ion",
            ],
            answerIndex: 1,
            explanation:
              "Magnesium (Mg²⁺) sits at the centre of the chlorophyll molecule, so it is essential for chlorophyll synthesis. Nitrate supplies nitrogen for proteins, not the metal centre of chlorophyll.",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bm3-02",
            question: "Which mineral ion is needed to make amino acids and proteins?",
            options: [
              "Magnesium ion",
              "Nitrate ion",
              "Phosphate ion",
              "Potassium ion",
            ],
            answerIndex: 1,
            explanation:
              "Nitrate ions (NO₃⁻) supply the nitrogen needed to build amino acids, which are joined to form proteins. Magnesium is for chlorophyll.",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bm3-03",
            question:
              "A plant grown without nitrate ions shows stunted growth as well as yellowing leaves. Why does nitrate deficiency cause stunted growth?",
            options: [
              "Without nitrate the plant cannot make chlorophyll.",
              "Without nitrate the plant cannot make enough protein for new cells and enzymes.",
              "Without nitrate the plant cannot absorb water.",
              "Without nitrate the plant cannot carry out respiration.",
            ],
            answerIndex: 1,
            explanation:
              "Nitrate provides nitrogen for amino acids and proteins. Proteins are needed for growth (new cells) and as enzymes, so without nitrate the plant cannot grow properly and becomes stunted. Chlorophyll shortage is the magnesium-deficiency link.",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "core",
            hints: [
              "What is nitrate used to build?",
              "Growth requires making many new proteins.",
              "Enzymes are also proteins.",
            ],
          },
          {
            id: "bio-plant-nutrition-bm3-04",
            question:
              "By which process do root cells take up mineral ions such as nitrate from a dilute soil solution into the root?",
            options: [
              "Diffusion down a concentration gradient",
              "Osmosis",
              "Active transport, requiring energy from respiration",
              "Transpiration",
            ],
            answerIndex: 2,
            explanation:
              "Soil solution is usually more dilute in these ions than the root cell, so ions are absorbed against the concentration gradient by active transport, which needs energy (ATP) from respiration. Diffusion and osmosis move substances down gradients only.",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "core",
            hints: [
              "Is the ion concentration higher inside or outside the root cell?",
              "Moving against a gradient needs energy.",
              "Where does that energy come from?",
            ],
          },
          {
            id: "bio-plant-nutrition-bm3-05",
            question:
              "Two plants both show yellow leaves. Plant X is also small and stunted; plant Y is a normal height. Which deficiency best fits each plant?",
            options: [
              "X: magnesium; Y: nitrate",
              "X: nitrate; Y: magnesium",
              "Both: nitrate only",
              "Both: magnesium only",
            ],
            answerIndex: 1,
            explanation:
              "Nitrate deficiency causes yellowing AND stunted growth (no proteins for growth) — that matches plant X. Magnesium deficiency mainly causes yellowing (no chlorophyll) without such severe stunting — that matches plant Y.",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "core",
            hints: [
              "Which deficiency adds stunted growth on top of yellowing?",
              "Nitrate is needed for proteins and therefore growth.",
              "Magnesium deficiency mainly affects leaf colour.",
            ],
          },
          {
            id: "bio-plant-nutrition-bm3-06",
            question:
              "Why does a leaf lacking chlorophyll appear yellow (chlorotic) and grow poorly?",
            options: [
              "Yellow pigments are made to replace chlorophyll, which speeds up photosynthesis.",
              "Without chlorophyll less light energy is absorbed, so less glucose is made and growth slows.",
              "The leaf absorbs more green light, turning yellow and growing faster.",
              "Chlorophyll loss increases water uptake, drowning the cells.",
            ],
            answerIndex: 1,
            explanation:
              "Chlorophyll absorbs the light energy that drives photosynthesis. Without it, less light is captured, so the plant makes less glucose and therefore has less energy and material for growth. The yellow colour shows where green chlorophyll is missing.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "core",
            hints: [
              "What does chlorophyll do with light energy?",
              "Less light captured means less glucose made.",
              "Less glucose means less energy and material for growth.",
            ],
          },
          {
            id: "bio-plant-nutrition-bm3-07",
            question:
              "Which sugar is glucose converted into for transport away from the leaf in the phloem?",
            options: ["Starch", "Cellulose", "Sucrose", "Maltose"],
            answerIndex: 2,
            explanation:
              "Glucose is converted to sucrose, a soluble sugar, for transport in the phloem to other parts of the plant. Starch and cellulose are insoluble; cellulose is structural.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bm3-08",
            question:
              "The waxy cuticle on the upper surface of a leaf is transparent and waterproof. Why are both of these properties important?",
            options: [
              "Transparent lets light reach the palisade cells; waterproof reduces evaporation of water.",
              "Transparent lets CO₂ in; waterproof keeps oxygen inside.",
              "Transparent reflects light away; waterproof lets water in.",
              "Transparent stores starch; waterproof stores lipids.",
            ],
            answerIndex: 0,
            explanation:
              "Being transparent lets sunlight pass through to the photosynthesising palisade cells; being waterproof reduces water loss by evaporation from the upper surface. The cuticle is not a gas-exchange or storage surface.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "core",
            hints: [
              "Light must reach the cells below the cuticle.",
              "Water loss from a sunlit upper surface could be high.",
              "Match each property to one benefit.",
            ],
          },
          {
            id: "bio-plant-nutrition-bm3-09",
            question:
              "A scientist supplies a plant with carbon dioxide containing the radioactive isotope carbon-14. After photosynthesis, in which molecules would the radioactive carbon most likely be found shortly afterwards?",
            options: [
              "Only in oxygen gas",
              "Only in water",
              "In glucose and the substances made from it, such as starch and cellulose",
              "Only in chlorophyll",
            ],
            answerIndex: 2,
            explanation:
              "The carbon of CO₂ is fixed into glucose, so labelled carbon appears first in glucose and then in molecules made from it (starch, cellulose, sucrose, amino acids). The oxygen released comes from water, not CO₂, so it would not be labelled.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "challenge",
            hints: [
              "Follow the carbon atom: it starts in CO₂.",
              "Photosynthesis fixes CO₂ carbon into glucose.",
              "Glucose is then converted into other molecules.",
              "The released oxygen comes from water, not CO₂.",
            ],
            strategy: "follow the atom",
          },
          {
            id: "bio-plant-nutrition-bm3-10",
            question:
              "A desert plant has a thick waxy cuticle, few stomata, and most of its stomata sunk in pits on the lower surface. How do these features help it survive?",
            options: [
              "They increase water loss to cool the plant.",
              "They reduce water loss while still allowing some gas exchange for photosynthesis.",
              "They increase the rate of photosynthesis by letting in more light.",
              "They allow the plant to absorb mineral ions through the leaf.",
            ],
            answerIndex: 1,
            explanation:
              "A thick cuticle, fewer stomata, and sunken stomata all cut down water lost by evaporation/transpiration — vital in a dry habitat — while a reduced number of stomata still permits enough CO₂ uptake for photosynthesis. These features limit, not increase, water loss.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "challenge",
            hints: [
              "What is the main challenge in a desert?",
              "Each feature affects water loss.",
              "Fewer, sunken stomata trap humid air and reduce evaporation.",
              "There is a trade-off with letting CO₂ in.",
            ],
          },
        ],
      },
      {
        id: "bio-plant-nutrition-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description:
          "Ten mixed multiple-choice questions drawing together equations, gas exchange, limiting factors, experiments, and mineral nutrition.",
        questions: [
          {
            id: "bio-plant-nutrition-bm4-01",
            question:
              "Which gas is released as a product of photosynthesis?",
            options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
            answerIndex: 2,
            explanation:
              "Oxygen is produced in photosynthesis (from the splitting of water) and is released through the stomata. Carbon dioxide is a reactant, not a product.",
            guideRef: "The Photosynthesis Equation",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bm4-02",
            question:
              "Where does the oxygen released during photosynthesis originally come from?",
            options: [
              "From the carbon dioxide molecules",
              "From the water molecules",
              "From the glucose molecules",
              "From the chlorophyll",
            ],
            answerIndex: 1,
            explanation:
              "The oxygen released in photosynthesis comes from the splitting of water molecules. (Tracer experiments using labelled oxygen confirm this.) The carbon of CO₂ goes into glucose, not into the released oxygen.",
            guideRef: "The Photosynthesis Equation",
            difficulty: "core",
            hints: [
              "Tracer studies tracked the oxygen atoms.",
              "Two reactants contain oxygen: CO₂ and water.",
              "The released O₂ comes from the splitting of one of them.",
            ],
          },
          {
            id: "bio-plant-nutrition-bm4-03",
            question:
              "At night, in darkness, what happens to gas exchange in a leaf?",
            options: [
              "Only photosynthesis occurs, so CO₂ is taken in.",
              "Only respiration occurs, so O₂ is taken in and CO₂ released.",
              "Neither respiration nor photosynthesis occurs.",
              "Photosynthesis speeds up to store energy for the day.",
            ],
            answerIndex: 1,
            explanation:
              "In the dark there is no light, so photosynthesis stops, but respiration continues all the time. So the leaf takes in O₂ and releases CO₂, the net gas exchange of respiration.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "core",
            hints: [
              "Photosynthesis needs light.",
              "Respiration happens day and night.",
              "Which gases does respiration use and release?",
            ],
          },
          {
            id: "bio-plant-nutrition-bm4-04",
            question:
              "At a certain low light intensity, a leaf shows no net exchange of carbon dioxide with the air. What is happening at this point (the compensation point)?",
            options: [
              "Photosynthesis has stopped completely.",
              "The rate of photosynthesis exactly equals the rate of respiration.",
              "Respiration has stopped completely.",
              "The plant is only releasing oxygen.",
            ],
            answerIndex: 1,
            explanation:
              "At the compensation point the CO₂ used by photosynthesis exactly equals the CO₂ produced by respiration, so there is no net gas exchange with the air. Both processes are still happening; they simply balance.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "challenge",
            hints: [
              "Both photosynthesis and respiration use/produce CO₂.",
              "No net exchange means two opposite flows cancel out.",
              "What must be equal for CO₂ flow to be zero?",
            ],
            strategy: "balance opposing rates",
          },
          {
            id: "bio-plant-nutrition-bm4-05",
            question:
              "Which set of conditions would give the highest rate of photosynthesis for a typical crop plant?",
            options: [
              "Low light, low CO₂, 10 °C",
              "High light, high CO₂, 35 °C",
              "High light, low CO₂, 45 °C",
              "Low light, high CO₂, 35 °C",
            ],
            answerIndex: 1,
            explanation:
              "Rate is highest when none of the three factors is limiting and temperature is near the enzyme optimum (~35 °C). High light, high CO₂ and ~35 °C achieves this. 45 °C risks denaturing enzymes, and low light or low CO₂ would limit the rate.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "core",
            hints: [
              "All three factors should be plentiful.",
              "Temperature should be near the optimum, not too high.",
              "Watch out for 45 °C denaturing enzymes.",
            ],
          },
          {
            id: "bio-plant-nutrition-bm4-06",
            question:
              "In the leaf starch test, why is the leaf first dipped in boiling water?",
            options: [
              "To add starch to the leaf",
              "To kill the cells and stop enzyme reactions, and to soften the cell walls",
              "To remove the chlorophyll",
              "To turn the leaf blue-black",
            ],
            answerIndex: 1,
            explanation:
              "Boiling water kills the leaf (stopping any further enzyme-controlled change to the starch) and softens the cuticle and cell walls so ethanol and iodine can penetrate. Chlorophyll is removed later by ethanol; iodine produces the colour change.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "core",
            hints: [
              "What should happen to enzyme activity before testing?",
              "The leaf also needs to be made more permeable.",
              "Chlorophyll removal is a separate, later step.",
            ],
          },
          {
            id: "bio-plant-nutrition-bm4-07",
            question:
              "A plant in a sealed bell jar with sodium hydroxide and given light and water shows an orange-brown result in the starch test. Which conclusion is valid?",
            options: [
              "Light is not needed for photosynthesis.",
              "Carbon dioxide is needed for photosynthesis.",
              "Chlorophyll is not needed for photosynthesis.",
              "Water is needed for photosynthesis.",
            ],
            answerIndex: 1,
            explanation:
              "The NaOH removed CO₂, light and water were still supplied, so the only missing factor was CO₂. No starch (orange-brown) therefore shows CO₂ is needed for photosynthesis. The experiment does not test light, water or chlorophyll because those were present/unchanged.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "core",
            hints: [
              "Identify which single factor was removed.",
              "Light and water were still supplied.",
              "Sodium hydroxide absorbs CO₂.",
            ],
          },
          {
            id: "bio-plant-nutrition-bm4-08",
            question:
              "Which row correctly matches a leaf structure to its function?",
            options: [
              "Xylem — transports sucrose away from the leaf",
              "Phloem — brings water and mineral ions to the leaf",
              "Xylem — brings water and mineral ions to the leaf",
              "Stomata — site of most photosynthesis",
            ],
            answerIndex: 2,
            explanation:
              "Xylem brings water and dissolved mineral ions up from the roots to the leaf. Phloem carries dissolved sucrose away from the leaf. Stomata are pores for gas exchange, not the main photosynthetic site (that is the palisade mesophyll).",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bm4-09",
            question:
              "A farmer adds a fertiliser containing nitrate and magnesium to soil where crops have pale, yellow leaves and are growing slowly. Why should both ions help?",
            options: [
              "Nitrate makes chlorophyll and magnesium makes proteins.",
              "Nitrate provides nitrogen for proteins (growth) and magnesium is needed to make chlorophyll (green colour).",
              "Both ions are broken down to release energy.",
              "Both ions increase water uptake by osmosis.",
            ],
            answerIndex: 1,
            explanation:
              "Yellow leaves point to a lack of chlorophyll (needs magnesium) and slow growth points to a lack of protein (needs nitrate nitrogen). Supplying both ions corrects both problems. The roles in option A are swapped; the ions are not respired or used for osmosis here.",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "core",
            hints: [
              "Match each symptom to a missing ion.",
              "Yellow leaves point to chlorophyll shortage.",
              "Slow growth points to protein shortage.",
              "Be careful not to swap the two roles.",
            ],
          },
          {
            id: "bio-plant-nutrition-bm4-10",
            question:
              "Doubling the distance between a lamp and a pondweed plant reduces the light intensity reaching the plant to one quarter. This is because light intensity is:",
            options: [
              "directly proportional to distance",
              "inversely proportional to distance",
              "inversely proportional to the square of the distance",
              "independent of distance",
            ],
            answerIndex: 2,
            explanation:
              "Light obeys the inverse-square law: intensity ∝ 1 / distance². Doubling the distance (×2) reduces intensity by a factor of 2² = 4, i.e. to one quarter. This is why distance must be controlled carefully in light-intensity experiments.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "challenge",
            hints: [
              "Light spreads out over a larger area as distance grows.",
              "Doubling distance gave one quarter intensity — what power of 2 is 4?",
              "Think of the inverse-square relationship.",
            ],
            strategy: "spot the proportionality",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-plant-nutrition-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description:
          "Ten structured questions on the photosynthesis equation, uses of glucose, and the role of chlorophyll.",
        questions: [
          {
            id: "bio-plant-nutrition-bq1-01",
            question:
              "Write the word equation for photosynthesis and state the two conditions needed. [3]",
            marks: 3,
            modelAnswer:
              "carbon dioxide + water → glucose + oxygen. The two conditions needed are light energy and chlorophyll (which absorbs the light energy).",
            markScheme: [
              "carbon dioxide + water (reactants, both required)",
              "→ glucose + oxygen (products, both required)",
              "conditions: light energy / light AND chlorophyll",
            ],
            commonError:
              "Some students put light and chlorophyll on the reactant side. They are conditions, not reactants — they go above/below the arrow.",
            guideRef: "The Photosynthesis Equation",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bq1-02",
            question:
              "Show that the symbol equation 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ is balanced by counting the atoms of each element on both sides. [4]",
            marks: 4,
            modelAnswer:
              "Left side: 6CO₂ gives 6 carbon and 12 oxygen; 6H₂O gives 12 hydrogen and 6 oxygen. Totals on the left: 6 C, 12 H, 18 O. Right side: C₆H₁₂O₆ gives 6 carbon, 12 hydrogen and 6 oxygen; 6O₂ gives 12 oxygen. Totals on the right: 6 C, 12 H, 18 O. The carbon, hydrogen and oxygen totals are equal on both sides, so the equation is balanced.",
            markScheme: [
              "left carbon = 6 and right carbon = 6",
              "left hydrogen = 12 and right hydrogen = 12",
              "left oxygen = 18 (12 from CO₂ + 6 from H₂O)",
              "right oxygen = 18 (6 from glucose + 12 from O₂) / states both sides equal, so balanced",
            ],
            commonError:
              "Forgetting the oxygen inside glucose: glucose contributes 6 oxygen atoms, which must be added to the 12 from O₂ to reach 18.",
            guideRef: "The Photosynthesis Equation",
            difficulty: "core",
            hints: [
              "Work out the atom counts for each molecule separately.",
              "Remember CO₂ has 2 oxygen and H₂O has 1 oxygen.",
              "Glucose contains 6 oxygen atoms too.",
              "Add up each element on each side and compare.",
            ],
            strategy: "count atoms element by element",
            solutions: [
              {
                label: "Atom-counting table",
                steps: [
                  "Left, carbon: 6 (from 6CO₂). Right, carbon: 6 (from C₆H₁₂O₆). Equal.",
                  "Left, hydrogen: 12 (from 6H₂O). Right, hydrogen: 12 (from C₆H₁₂O₆). Equal.",
                  "Left, oxygen: 6×2 + 6×1 = 12 + 6 = 18. Right, oxygen: 6 (glucose) + 6×2 (O₂) = 6 + 12 = 18. Equal.",
                  "All three elements balance, so the equation is correctly balanced.",
                ],
              },
            ],
          },
          {
            id: "bio-plant-nutrition-bq1-03",
            question:
              "Photosynthesis and aerobic respiration are sometimes described as opposite processes. Compare the two by stating the reactants and products of each. [4]",
            marks: 4,
            modelAnswer:
              "Photosynthesis: reactants are carbon dioxide and water; products are glucose and oxygen; it requires light energy. Aerobic respiration: reactants are glucose and oxygen; products are carbon dioxide and water; it releases energy. The reactants of one are essentially the products of the other, which is why they are described as opposite (or complementary) processes.",
            markScheme: [
              "photosynthesis reactants: carbon dioxide + water",
              "photosynthesis products: glucose + oxygen",
              "respiration reactants: glucose + oxygen",
              "respiration products: carbon dioxide + water / states they are reverse of each other",
            ],
            commonError:
              "Stating that respiration only happens at night. Respiration occurs all the time in plant cells; photosynthesis only occurs in the light.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "core",
            hints: [
              "List reactants and products for each process.",
              "Photosynthesis stores energy; respiration releases it.",
              "Notice how the products of one match the reactants of the other.",
            ],
          },
          {
            id: "bio-plant-nutrition-bq1-04",
            question:
              "List four different uses the plant makes of the glucose produced in photosynthesis. [4]",
            marks: 4,
            modelAnswer:
              "1. Used in respiration to release energy. 2. Converted to starch for storage (insoluble). 3. Converted to cellulose to build cell walls for growth. 4. Converted to sucrose for transport in the phloem. (Other acceptable uses: combined with nitrate to make amino acids/proteins; converted to fats/oils for storage in seeds.)",
            markScheme: [
              "respiration / release of energy",
              "converted to starch for storage",
              "converted to cellulose for cell walls",
              "converted to sucrose for transport / used to make amino acids-proteins / made into fats and oils",
            ],
            commonError:
              "Writing 'to make energy' — energy is released (or transferred), not made or created.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bq1-05",
            question:
              "Explain why glucose is converted to starch for storage rather than being stored as glucose itself. [3]",
            marks: 3,
            modelAnswer:
              "Glucose is soluble, so storing large amounts of it would lower the water potential inside the cell, causing water to enter the cell by osmosis and possibly damaging it. Starch is insoluble, so it has no osmotic effect and does not draw water in. Starch is also compact and can be stored in large quantities, then broken down to glucose when needed.",
            markScheme: [
              "glucose is soluble / would affect water potential / cause osmosis problems",
              "starch is insoluble / no osmotic effect",
              "starch can be stored compactly / broken back down to glucose when needed",
            ],
            commonError:
              "Saying starch 'has no effect on the cell' — be specific: it has no osmotic effect because it is insoluble.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "core",
            hints: [
              "Think about solubility and osmosis.",
              "A soluble sugar lowers water potential.",
              "Why does insolubility make starch a better store?",
            ],
          },
          {
            id: "bio-plant-nutrition-bq1-06",
            question:
              "State what is meant by 'chlorophyll' and describe its role in photosynthesis. [3]",
            marks: 3,
            modelAnswer:
              "Chlorophyll is the green pigment found inside chloroplasts. It absorbs light energy (mainly red and blue wavelengths). It transfers this light energy to drive the reactions that convert carbon dioxide and water into glucose, so the light energy is changed into chemical energy stored in glucose.",
            markScheme: [
              "green pigment found in chloroplasts",
              "absorbs light energy (mainly red and blue)",
              "transfers/converts light energy to chemical energy / drives photosynthesis reactions",
            ],
            commonError:
              "Saying chlorophyll 'makes glucose'. Chlorophyll absorbs and transfers light energy; it does not itself become glucose.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bq1-07",
            question:
              "Leaves usually appear green. Explain why, in terms of how chlorophyll interacts with light. [3]",
            marks: 3,
            modelAnswer:
              "Chlorophyll absorbs mainly red and blue wavelengths of light to use in photosynthesis. It does not absorb green light well; instead green light is reflected (and transmitted). The reflected green light enters our eyes, so the leaf appears green.",
            markScheme: [
              "chlorophyll absorbs red and blue light",
              "green light is not absorbed / is reflected (or transmitted)",
              "reflected green light reaches the eye, so leaf looks green",
            ],
            commonError:
              "Saying the leaf 'absorbs green light to look green' — it is the opposite: green is reflected, which is why we see green.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "core",
            hints: [
              "Which colours does chlorophyll absorb?",
              "What happens to the colour it does not absorb?",
              "The colour we see is the reflected light.",
            ],
          },
          {
            id: "bio-plant-nutrition-bq1-08",
            question:
              "A plant makes amino acids and proteins. Describe how the products of photosynthesis and mineral ions from the soil are combined to do this. [3]",
            marks: 3,
            modelAnswer:
              "Glucose made in photosynthesis provides the carbon-containing skeleton. Nitrate ions absorbed from the soil supply nitrogen. The plant combines the glucose (carbon skeleton) with nitrogen from nitrate to make amino acids. The amino acids are then joined together to form proteins.",
            markScheme: [
              "glucose provides carbon / carbon skeleton",
              "nitrate ions supply nitrogen",
              "combined to form amino acids, which are joined to make proteins",
            ],
            commonError:
              "Forgetting the nitrogen source — amino acids cannot be made from glucose alone; nitrate (nitrogen) is essential.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "core",
            hints: [
              "Amino acids contain an element not found in glucose.",
              "Where does that element (nitrogen) come from?",
              "Amino acids join to form what larger molecule?",
            ],
          },
          {
            id: "bio-plant-nutrition-bq1-09",
            question:
              "A scientist supplies a plant with carbon dioxide labelled with radioactive carbon-14, then samples the plant over time. Predict and explain which molecules will become radioactive and in roughly what order. [4]",
            marks: 4,
            modelAnswer:
              "The carbon-14 is part of the CO₂ that is fixed in photosynthesis, so glucose will become radioactive first, because the carbon from CO₂ is built into glucose. Next, molecules made from glucose will become radioactive, for example starch, cellulose and sucrose, as the labelled carbon is converted into these. Later still, amino acids and proteins may contain the labelled carbon. The released oxygen would NOT be radioactive, because that oxygen comes from water, not from CO₂.",
            markScheme: [
              "glucose becomes radioactive first (CO₂ carbon fixed into glucose)",
              "then molecules made from glucose: starch / cellulose / sucrose",
              "later amino acids / proteins may be labelled",
              "released oxygen is NOT radioactive (it comes from water)",
            ],
            commonError:
              "Claiming the released oxygen would be radioactive. The oxygen released comes from the splitting of water, so it would not carry the carbon-14 label.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "challenge",
            hints: [
              "Follow the carbon atom from CO₂.",
              "CO₂ carbon is fixed into glucose first.",
              "Glucose is then turned into other molecules.",
              "Think carefully about the source of the released oxygen.",
            ],
            strategy: "follow the atom through the pathway",
          },
          {
            id: "bio-plant-nutrition-bq1-10",
            question:
              "Some plants store food as oils in their seeds rather than only as starch. Suggest one advantage of storing energy as oil, and explain how the oil is ultimately derived from photosynthesis. [3]",
            marks: 3,
            modelAnswer:
              "Oils (fats) store more energy per gram than carbohydrates such as starch, so a seed can store a large energy reserve in a small, light mass — useful for dispersal and for fuelling germination. The oil is derived from photosynthesis because glucose made in photosynthesis is converted by the plant into fats and oils (lipids) for storage in the seed.",
            markScheme: [
              "oil/fat stores more energy per gram than starch (compact energy store)",
              "useful for the small seed / for germination / dispersal",
              "glucose from photosynthesis is converted into fats and oils",
            ],
            commonError:
              "Saying oil is made directly in photosynthesis. The direct product is glucose; the plant then converts glucose into oils.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "challenge",
            hints: [
              "Compare energy stored per gram in fat versus carbohydrate.",
              "Seeds are small and need a concentrated store.",
              "Trace the oil back to glucose from photosynthesis.",
            ],
          },
        ],
      },
      {
        id: "bio-plant-nutrition-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description:
          "Ten structured questions on leaf structure, adaptations, gas exchange, and stomata.",
        questions: [
          {
            id: "bio-plant-nutrition-bq2-01",
            question:
              "Name, in order from the top surface downwards, the main tissue layers of a dicotyledonous leaf. [4]",
            marks: 4,
            modelAnswer:
              "From the top: waxy cuticle, then the upper epidermis, then the palisade mesophyll, then the spongy mesophyll, then the lower epidermis (with stomata and guard cells). Vascular bundles (xylem and phloem) run through the mesophyll.",
            markScheme: [
              "waxy cuticle / upper epidermis (top)",
              "palisade mesophyll below the upper epidermis",
              "spongy mesophyll below the palisade layer",
              "lower epidermis with stomata at the bottom",
            ],
            commonError:
              "Putting the spongy layer above the palisade layer. Palisade is nearer the top (more light); spongy is below it.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bq2-02",
            question:
              "Explain two ways in which the palisade mesophyll is adapted for efficient photosynthesis. [4]",
            marks: 4,
            modelAnswer:
              "1. Palisade cells contain many chloroplasts, so they can absorb a large amount of light and carry out a high rate of photosynthesis. 2. They are column-shaped (tall and narrow) and tightly packed near the upper surface, so many cells can be positioned close to the light, maximising light absorption and minimising the light that passes through unused.",
            markScheme: [
              "many chloroplasts present",
              "so absorb more light / higher rate of photosynthesis",
              "column-shaped / tall cells packed near the upper surface",
              "so positioned to receive maximum light / pack many near the top",
            ],
            commonError:
              "Just naming features without saying how each helps photosynthesis. Each adaptation must be linked to a benefit.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "core",
            hints: [
              "Think about chloroplast number.",
              "Think about cell shape and position.",
              "Link each feature to absorbing more light.",
            ],
            strategy: "function follows structure",
          },
          {
            id: "bio-plant-nutrition-bq2-03",
            question:
              "Describe how the spongy mesophyll is adapted to allow efficient gas exchange in the leaf. [3]",
            marks: 3,
            modelAnswer:
              "The spongy mesophyll has many air spaces between its irregularly shaped cells. These air spaces are continuous with the stomata, allowing carbon dioxide to diffuse in and oxygen to diffuse out quickly throughout the leaf. The large, moist surface area of cell walls facing the air spaces increases the rate of gas exchange and keeps diffusion distances short.",
            markScheme: [
              "air spaces between the cells",
              "connected to stomata / allow CO₂ in and O₂ out by diffusion",
              "large (moist) surface area of cell walls / short diffusion distance speeds exchange",
            ],
            commonError:
              "Confusing the role of the spongy layer (gas exchange) with the palisade layer (light absorption).",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "core",
            hints: [
              "What lies between the spongy cells?",
              "How do gases move into and out of the leaf?",
              "Why does a large moist surface area help?",
            ],
          },
          {
            id: "bio-plant-nutrition-bq2-04",
            question:
              "Explain the function of (a) xylem and (b) phloem in a leaf. [4]",
            marks: 4,
            modelAnswer:
              "(a) Xylem brings water and dissolved mineral ions (such as nitrate and magnesium) from the roots up to the leaf. The water is used as a reactant in photosynthesis and to keep cells turgid. (b) Phloem carries dissolved sugars, mainly sucrose, away from the leaf to other parts of the plant, such as growing tips, roots and storage organs.",
            markScheme: [
              "xylem brings water to the leaf",
              "xylem also carries dissolved mineral ions",
              "phloem carries sucrose / dissolved sugars",
              "phloem transports them away from the leaf to other parts of the plant",
            ],
            commonError:
              "Swapping the two: remember xylem = water up; phloem = food (sucrose) around the plant.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "core",
            hints: [
              "One vessel brings water; the other carries sugar.",
              "Xylem connects to the roots and water supply.",
              "Phloem transports the products of photosynthesis.",
            ],
          },
          {
            id: "bio-plant-nutrition-bq2-05",
            question:
              "Describe how guard cells open and close the stomata, and state why this is important for the plant. [4]",
            marks: 4,
            modelAnswer:
              "When guard cells take in water by osmosis they become turgid. Because the inner wall of each guard cell is thicker (less stretchy) than the outer wall, the cells bow outward, opening the stoma. When the guard cells lose water they become flaccid and straighten, closing the stoma. This control is important because it lets the plant open the stomata to allow carbon dioxide in for photosynthesis, while closing them when needed to reduce water loss by transpiration.",
            markScheme: [
              "guard cells gain water by osmosis / become turgid to open",
              "unequal wall thickness causes them to bow apart (open)",
              "lose water / become flaccid to close the stoma",
              "controls gas exchange (CO₂ in) while limiting water loss",
            ],
            commonError:
              "Saying the stoma opens when guard cells become flaccid — it is the opposite: turgid guard cells open the pore.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "core",
            hints: [
              "What happens to guard cells when water enters by osmosis?",
              "Why do they bow outward rather than just swell evenly?",
              "Link opening/closing to CO₂ supply and water conservation.",
            ],
          },
          {
            id: "bio-plant-nutrition-bq2-06",
            question:
              "Explain why most stomata are found on the lower surface of a leaf rather than the upper surface. [3]",
            marks: 3,
            modelAnswer:
              "The lower surface is shaded from direct sunlight and is cooler than the upper surface. Having stomata there reduces the temperature and so reduces the rate of evaporation of water through the stomata, helping the plant conserve water. The upper surface, which is hotter and more exposed, is instead protected by a thicker waxy cuticle to limit water loss.",
            markScheme: [
              "lower surface is cooler / shaded / less exposed to direct sun",
              "so less evaporation / less water loss through stomata",
              "conserves water while still allowing gas exchange",
            ],
            commonError:
              "Saying stomata are on the underside 'so gases can escape' without explaining the water-conservation benefit of the cooler position.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "core",
            hints: [
              "Compare temperature of the upper and lower surfaces.",
              "Higher temperature increases evaporation.",
              "Why is conserving water an advantage?",
            ],
          },
          {
            id: "bio-plant-nutrition-bq2-07",
            question:
              "State three functions of the waxy cuticle and the upper epidermis together. [3]",
            marks: 3,
            modelAnswer:
              "The waxy cuticle is waterproof, reducing water loss by evaporation. It is transparent, so it lets light pass through to the photosynthetic cells below. The upper epidermis is a protective layer of cells that has no chloroplasts (so it does not block light) and secretes the waxy cuticle; together they protect the inner tissues while letting light reach the palisade cells.",
            markScheme: [
              "waterproof / reduces water loss",
              "transparent / allows light through to palisade cells",
              "protective layer / upper epidermis has no chloroplasts so does not block light",
            ],
            commonError:
              "Saying the upper epidermis carries out photosynthesis. It has no chloroplasts; its role is protection and being transparent.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bq2-08",
            question:
              "Compare the net gas exchange of a leaf in bright sunlight with the net gas exchange of the same leaf in darkness. [4]",
            marks: 4,
            modelAnswer:
              "In bright sunlight the leaf photosynthesises faster than it respires, so overall it takes in carbon dioxide and releases oxygen (net intake of CO₂, net release of O₂). In darkness photosynthesis stops but respiration continues, so the leaf takes in oxygen and releases carbon dioxide (net intake of O₂, net release of CO₂). Respiration occurs at all times; only the balance of the two processes changes.",
            markScheme: [
              "in bright light photosynthesis exceeds respiration",
              "so net CO₂ taken in and net O₂ released",
              "in darkness only respiration occurs (no photosynthesis)",
              "so net O₂ taken in and net CO₂ released",
            ],
            commonError:
              "Stating that respiration stops in the light. Respiration continues constantly; in bright light photosynthesis simply outpaces it.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "challenge",
            hints: [
              "Both photosynthesis and respiration happen in the light.",
              "Which dominates in bright light?",
              "In darkness, which process stops and which continues?",
              "State the NET direction of each gas.",
            ],
          },
          {
            id: "bio-plant-nutrition-bq2-09",
            question:
              "A leaf has a surface area of 30 cm². A student counts an average of 120 stomata per mm² on the lower surface and 10 stomata per mm² on the upper surface. Calculate the approximate total number of stomata on the lower surface of this leaf, showing your working. [3]",
            marks: 3,
            modelAnswer:
              "Convert the leaf area to mm²: 30 cm² × 100 mm² per cm² = 3000 mm². Number of stomata on the lower surface = density × area = 120 stomata per mm² × 3000 mm² = 360 000 stomata. So there are approximately 3.6 × 10⁵ stomata on the lower surface.",
            markScheme: [
              "convert 30 cm² to 3000 mm² (×100)",
              "multiply density × area: 120 × 3000",
              "= 360 000 stomata / 3.6 × 10⁵ (with correct working)",
            ],
            commonError:
              "Using ×10 instead of ×100 to convert cm² to mm². Remember 1 cm² = 10 mm × 10 mm = 100 mm².",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "challenge",
            hints: [
              "First convert the leaf area into mm².",
              "1 cm = 10 mm, so 1 cm² = 100 mm².",
              "Multiply the stomatal density by the area in mm².",
            ],
            strategy: "convert units before calculating",
            solutions: [
              {
                label: "Unit conversion then multiply",
                steps: [
                  "Area: 1 cm² = 10 mm × 10 mm = 100 mm², so 30 cm² = 30 × 100 = 3000 mm².",
                  "Lower-surface count = density × area = 120 mm⁻² × 3000 mm² = 360 000.",
                  "Express to a sensible form: 360 000 = 3.6 × 10⁵ stomata.",
                  "(The upper-surface figure of 10 per mm² is not needed for this part.)",
                ],
              },
            ],
          },
          {
            id: "bio-plant-nutrition-bq2-10",
            question:
              "Suggest and explain three features you would expect to see in the leaves of a plant adapted to a hot, dry desert environment. [3]",
            marks: 3,
            modelAnswer:
              "1. A thick waxy cuticle, to reduce water loss by evaporation from the leaf surface. 2. Fewer stomata, and/or stomata sunk in pits or on the lower surface only, to reduce water lost by transpiration (sunken stomata trap humid air, lowering the gradient for evaporation). 3. A small surface area or rolled leaves (or spines), to reduce the area from which water can evaporate. Each feature reduces water loss while still allowing some gas exchange for photosynthesis.",
            markScheme: [
              "thick waxy cuticle to reduce evaporation",
              "fewer / sunken stomata (or stomata on lower surface) to reduce transpiration",
              "reduced surface area / rolled leaves / spines to reduce water loss",
            ],
            commonError:
              "Suggesting features that would increase water loss (e.g. many large open stomata). Desert adaptations reduce water loss.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "challenge",
            hints: [
              "The main problem is water loss.",
              "Think about the cuticle, the stomata, and the leaf shape/area.",
              "Each adaptation should reduce evaporation/transpiration.",
            ],
          },
        ],
      },
      {
        id: "bio-plant-nutrition-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description:
          "Ten structured questions on limiting factors, rate graphs, and greenhouse applications.",
        questions: [
          {
            id: "bio-plant-nutrition-bq3-01",
            question:
              "Define the term 'limiting factor' and name the three main limiting factors of photosynthesis. [3]",
            marks: 3,
            modelAnswer:
              "A limiting factor is the factor that is in shortest supply and so controls (limits) the rate of a process; increasing any other factor will not raise the rate until the limiting factor is increased. The three main limiting factors of photosynthesis are light intensity, carbon dioxide concentration, and temperature.",
            markScheme: [
              "limiting factor = the factor in shortest supply / that controls the rate",
              "increasing other factors does not raise the rate while it limits",
              "names all three: light intensity, CO₂ concentration, temperature",
            ],
            commonError:
              "Listing only two factors, or adding 'water' as a fourth main factor (water is rarely the limiting factor in these graphs).",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bq3-02",
            question:
              "A graph shows the rate of photosynthesis rising steeply as light intensity increases from zero, then levelling off to a plateau at higher light intensities. Explain the shape of this graph. [4]",
            marks: 4,
            modelAnswer:
              "At low light intensities, light is the limiting factor: as light intensity increases, more light energy is absorbed by chlorophyll, so the rate of photosynthesis rises steeply. As light intensity continues to increase, the rate eventually levels off (plateau) because light is no longer limiting — another factor, such as carbon dioxide concentration or temperature, has become the limiting factor. Increasing light beyond this point has no further effect on the rate.",
            markScheme: [
              "at low light, light intensity is the limiting factor",
              "more light absorbed → rate increases (rising part)",
              "plateau = light is no longer limiting",
              "another factor (CO₂ / temperature) now limits the rate",
            ],
            commonError:
              "Saying the plant is 'full' or 'tired' at the plateau. The plateau means a different factor has become limiting.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "core",
            hints: [
              "What limits the rate while the line is rising?",
              "A flat section means changing that factor no longer helps.",
              "Name the factor that has become limiting at the plateau.",
            ],
            strategy: "identify the limiting factor from the graph",
          },
          {
            id: "bio-plant-nutrition-bq3-03",
            question:
              "On the same axes, a second curve is drawn for the same plant but at a higher carbon dioxide concentration. Describe and explain how this second curve differs from the first. [4]",
            marks: 4,
            modelAnswer:
              "At low light intensities the two curves are similar, because light is the limiting factor for both (CO₂ is not yet limiting). At higher light intensities the second curve (higher CO₂) rises to a higher plateau than the first. This is because, with more CO₂ available, CO₂ is no longer the limiting factor as soon, so a higher rate of photosynthesis can be reached before another factor limits it. This confirms that CO₂ was limiting at the first curve's plateau.",
            markScheme: [
              "at low light both curves similar (light is limiting for both)",
              "higher CO₂ curve reaches a higher plateau",
              "because more CO₂ available / CO₂ no longer limits as soon",
              "shows CO₂ was the limiting factor at the lower plateau",
            ],
            commonError:
              "Saying the higher-CO₂ curve is steeper at the start. At low light, light limits both, so the initial gradients are essentially the same; the difference shows at the plateau.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "challenge",
            hints: [
              "Where light is limiting, does extra CO₂ help?",
              "Compare the heights of the two plateaus.",
              "What does a higher plateau tell you about the old limiting factor?",
            ],
          },
          {
            id: "bio-plant-nutrition-bq3-04",
            question:
              "Explain how and why temperature affects the rate of photosynthesis, including what happens at very high temperatures. [4]",
            marks: 4,
            modelAnswer:
              "Photosynthesis involves enzyme-controlled reactions. As temperature increases, molecules have more kinetic energy and collide more often, so the rate of the enzyme-controlled reactions increases. This continues up to the optimum temperature (about 35–40 °C for many plants). Above the optimum, the high temperature denatures the enzymes — the shape of the active site changes so it can no longer bind the substrate — so the rate falls sharply.",
            markScheme: [
              "photosynthesis is enzyme-controlled",
              "higher temperature → more kinetic energy / more frequent collisions → faster rate",
              "rate rises up to an optimum temperature",
              "above optimum, enzymes denature (active site changes shape) → rate falls",
            ],
            commonError:
              "Saying enzymes are 'killed' at high temperature. Enzymes are not alive; they are denatured (their shape changes irreversibly).",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "core",
            hints: [
              "What kind of reactions does photosynthesis depend on?",
              "How does temperature affect reaction rate up to the optimum?",
              "What happens to enzymes above the optimum temperature?",
            ],
          },
          {
            id: "bio-plant-nutrition-bq3-05",
            question:
              "Commercial greenhouse growers often add extra carbon dioxide and use heaters and lamps. Explain how each of these three measures can increase crop yield. [3]",
            marks: 3,
            modelAnswer:
              "Adding extra carbon dioxide raises the CO₂ concentration so that CO₂ is less likely to be the limiting factor, allowing a faster rate of photosynthesis. Using heaters keeps the temperature near the enzymes' optimum, so the enzyme-controlled reactions of photosynthesis proceed quickly. Using lamps increases light intensity (especially in winter or at night) so that light is less likely to be limiting. With none of the three factors limiting, photosynthesis is faster, so the plants make more glucose and grow more, increasing yield.",
            markScheme: [
              "extra CO₂ so CO₂ not limiting → faster photosynthesis",
              "heaters keep temperature near optimum for enzymes",
              "lamps increase light intensity so light not limiting / faster photosynthesis → more glucose → higher yield",
            ],
            commonError:
              "Saying more heat is always better. Temperature must be kept near the optimum; too high denatures enzymes.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "core",
            hints: [
              "Link each measure to one limiting factor.",
              "Each measure removes a possible bottleneck.",
              "Faster photosynthesis means more glucose for growth.",
            ],
          },
          {
            id: "bio-plant-nutrition-bq3-06",
            question:
              "A student investigates photosynthesis in pondweed by counting oxygen bubbles per minute at different lamp distances. Identify two variables she should keep constant (control), and for each explain why. [4]",
            marks: 4,
            modelAnswer:
              "1. Temperature of the water should be kept constant (e.g. using a water bath or beaker of water as a heat shield), because temperature is itself a limiting factor and a change in temperature would affect the rate, making it impossible to tell whether changes were due to light. 2. Carbon dioxide concentration should be kept constant (e.g. by using the same volume of the same sodium hydrogencarbonate solution), because CO₂ is a reactant and another limiting factor, so changing it would also change the rate. (Other valid controls: same piece/length of pondweed, same lamp/bulb.)",
            markScheme: [
              "temperature kept constant",
              "because temperature is a limiting factor / would otherwise affect the rate",
              "CO₂ concentration kept constant (same NaHCO₃)",
              "because CO₂ is a reactant / limiting factor that would affect the rate",
            ],
            commonError:
              "Naming the independent variable (light/distance) or the dependent variable (bubbles) as a control variable.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "core",
            hints: [
              "Control variables are the ones you keep the same.",
              "Do not name the factor you are deliberately changing.",
              "Think of the other two limiting factors.",
            ],
          },
          {
            id: "bio-plant-nutrition-bq3-07",
            question:
              "In a pondweed experiment the rate of oxygen production was 36 bubbles in 3 minutes at 10 cm from the lamp, and 12 bubbles in 3 minutes at 30 cm. Calculate the rate in bubbles per minute at each distance, and comment on how moving the lamp from 10 cm to 30 cm affected the rate. [4]",
            marks: 4,
            modelAnswer:
              "Rate at 10 cm = 36 bubbles ÷ 3 minutes = 12 bubbles per minute. Rate at 30 cm = 12 bubbles ÷ 3 minutes = 4 bubbles per minute. Moving the lamp from 10 cm to 30 cm reduced the rate from 12 to 4 bubbles per minute, i.e. to one third. This is because moving the lamp three times further away greatly reduces the light intensity reaching the plant (light intensity falls with the square of the distance), and with less light, light became more strongly limiting, so the rate of photosynthesis fell.",
            markScheme: [
              "rate at 10 cm = 12 bubbles per minute (36 ÷ 3)",
              "rate at 30 cm = 4 bubbles per minute (12 ÷ 3)",
              "rate fell to one third / decreased",
              "because greater distance lowers light intensity / light more limiting",
            ],
            commonError:
              "Forgetting to divide by the time. The question asks for a rate (per minute), so divide the bubble count by 3.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "challenge",
            hints: [
              "Rate = number of bubbles ÷ time in minutes.",
              "Do this for both distances.",
              "Compare the two rates as a ratio.",
              "Link the change to light intensity and distance.",
            ],
            strategy: "calculate a rate, then compare",
            solutions: [
              {
                label: "Rate calculation and comparison",
                steps: [
                  "At 10 cm: rate = 36 ÷ 3 = 12 bubbles per minute.",
                  "At 30 cm: rate = 12 ÷ 3 = 4 bubbles per minute.",
                  "Compare: 4 ÷ 12 = 1/3, so the rate dropped to one third of its value.",
                  "Explanation: tripling the distance sharply lowers light intensity (intensity ∝ 1/distance²), so light limits the rate more strongly and photosynthesis slows.",
                ],
              },
            ],
          },
          {
            id: "bio-plant-nutrition-bq3-08",
            question:
              "Explain why, on a graph of rate of photosynthesis against carbon dioxide concentration, the line rises and then plateaus. [3]",
            marks: 3,
            modelAnswer:
              "At low carbon dioxide concentrations, CO₂ is the limiting factor: increasing it provides more reactant, so the rate of photosynthesis rises. At higher CO₂ concentrations the line plateaus because CO₂ is no longer limiting — another factor, such as light intensity or temperature, has become the limiting factor, so adding more CO₂ does not increase the rate.",
            markScheme: [
              "at low CO₂, CO₂ is the limiting factor → rate rises as CO₂ added",
              "CO₂ is a reactant / provides more raw material",
              "plateau because another factor (light/temperature) now limits the rate",
            ],
            commonError:
              "Saying CO₂ becomes 'used up' at the plateau. The plateau is because a different factor limits the rate, not because CO₂ runs out.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "core",
            hints: [
              "CO₂ is a reactant — why does adding more help at first?",
              "What does the flat part mean?",
              "Which other factors could become limiting?",
            ],
          },
          {
            id: "bio-plant-nutrition-bq3-09",
            question:
              "A grower keeps a greenhouse at high light and high CO₂ but does not heat it on a cold night, and finds the crop grows slowly. Use the idea of limiting factors to explain this observation, and suggest how the grower could improve growth. [3]",
            marks: 3,
            modelAnswer:
              "On a cold night the temperature is low, so even though light and CO₂ are plentiful, temperature has become the limiting factor: the enzyme-controlled reactions of photosynthesis are slow at low temperature because molecules have less kinetic energy. So the rate of photosynthesis, and therefore growth, is low. The grower could improve growth by heating the greenhouse to bring the temperature closer to the optimum for the plants' enzymes, so temperature no longer limits the rate.",
            markScheme: [
              "low temperature is the limiting factor (despite high light and CO₂)",
              "enzyme reactions slow at low temperature / less kinetic energy",
              "suggestion: heat the greenhouse toward the optimum temperature",
            ],
            commonError:
              "Suggesting more light or CO₂ — these are already high and not limiting, so adding more would not help.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "challenge",
            hints: [
              "Which factor is low here?",
              "How does low temperature affect enzyme reactions?",
              "Suggest a change that fixes the actual limiting factor.",
            ],
            strategy: "identify the limiting factor",
          },
          {
            id: "bio-plant-nutrition-bq3-10",
            question:
              "Explain why only one factor can be limiting the rate of photosynthesis at any one moment, using the idea of the 'slowest step' in a process. [3]",
            marks: 3,
            modelAnswer:
              "Photosynthesis is a multi-step process, and the overall rate cannot be faster than its slowest step. At any moment, the factor that is in shortest supply controls the rate of that slowest step, so it sets the overall rate — this is the limiting factor. Increasing any other factor cannot speed up the overall process while the slowest step is still controlled by the limiting factor; only when the limiting factor is increased (so a different step becomes slowest) can the rate rise, after which a new factor becomes limiting.",
            markScheme: [
              "the overall rate cannot exceed the slowest step",
              "the factor in shortest supply controls that slowest step / sets the rate",
              "increasing other factors does not help until the limiting factor is increased",
            ],
            commonError:
              "Thinking two factors can be 'jointly' limiting. At a given instant, one factor sets the slowest step and so the rate.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "challenge",
            hints: [
              "Picture an assembly line with one slow station.",
              "The whole line runs at the speed of its slowest station.",
              "Speeding up other stations does not help until the slow one is fixed.",
            ],
          },
        ],
      },
      {
        id: "bio-plant-nutrition-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description:
          "Ten structured questions on starch testing, controlled experiments, and mineral nutrition.",
        questions: [
          {
            id: "bio-plant-nutrition-bq4-01",
            question:
              "Describe, in the correct order, the steps used to test a leaf for the presence of starch. [5]",
            marks: 5,
            modelAnswer:
              "1. Destarch the plant first by keeping it in darkness for 24–48 hours (so any starch found later was made during the experiment). 2. Remove the leaf and dip it in boiling water to kill the cells, stop enzyme activity, and soften the cell walls. 3. Place the leaf in hot ethanol (heated in a water bath, not over a naked flame) to dissolve out the green chlorophyll. 4. Rinse the leaf in cold water to soften it and remove ethanol. 5. Spread the leaf out and add iodine solution; a blue-black colour shows starch is present, while orange-brown shows no starch.",
            markScheme: [
              "destarch the plant (24–48 h darkness) first",
              "boil leaf in water to kill cells / soften it",
              "decolourise in hot ethanol (water bath) to remove chlorophyll",
              "rinse leaf in (cold) water",
              "add iodine: blue-black = starch present, orange-brown = none",
            ],
            commonError:
              "Heating ethanol directly with a flame (a fire hazard) or forgetting to destarch first, which would make results unreliable.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "core",
            hints: [
              "What must you do to the plant before the test?",
              "Why kill and soften the leaf first?",
              "How is chlorophyll removed, and how safely?",
              "What is the final reagent and its colour change?",
            ],
          },
          {
            id: "bio-plant-nutrition-bq4-02",
            question:
              "A destarched plant has one leaf partly covered with opaque foil and is left in bright light for a day, then tested for starch. Predict the result for the covered and uncovered parts, and state the conclusion. [4]",
            marks: 4,
            modelAnswer:
              "The uncovered part received light, so it could photosynthesise and make starch; it turns blue-black with iodine. The covered part was kept in darkness by the foil, so it could not photosynthesise and made no starch; it stays orange-brown. Since only the part exposed to light made starch, the conclusion is that light is needed for photosynthesis (for starch production).",
            markScheme: [
              "uncovered part turns blue-black (starch present)",
              "covered part stays orange-brown (no starch)",
              "because covered part had no light / could not photosynthesise",
              "conclusion: light is needed for photosynthesis",
            ],
            commonError:
              "Forgetting that the plant must be destarched first; otherwise both parts might already contain starch.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "core",
            hints: [
              "Which part got light?",
              "Starch forms only where photosynthesis happened.",
              "State the iodine colour for each part.",
              "What variable was being tested?",
            ],
          },
          {
            id: "bio-plant-nutrition-bq4-03",
            question:
              "Describe how you would use a variegated leaf to show that chlorophyll is needed for photosynthesis, and give the expected result. [4]",
            marks: 4,
            modelAnswer:
              "First destarch the plant (keep it in darkness for 24–48 hours). Then leave the variegated leaf in bright light for several hours. Record (or draw) which parts are green and which are white before testing. Test the leaf for starch (boil, decolourise in hot ethanol, rinse, add iodine). The expected result is that only the green parts (which contain chlorophyll) turn blue-black, showing starch is present there, while the white parts (no chlorophyll) stay orange-brown. This shows chlorophyll is needed for photosynthesis.",
            markScheme: [
              "destarch the plant first / expose leaf to light",
              "record which areas are green and which white before testing",
              "carry out starch test (ethanol decolourise, iodine)",
              "only green (chlorophyll) areas turn blue-black → chlorophyll needed",
            ],
            commonError:
              "Not recording the green/white pattern before decolourising — once the chlorophyll is removed you can no longer tell which areas were green.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "core",
            hints: [
              "What is the controlled difference between leaf areas?",
              "Why record the colour pattern before the test?",
              "Which areas should make starch?",
            ],
            strategy: "use a built-in control",
          },
          {
            id: "bio-plant-nutrition-bq4-04",
            question:
              "Explain how you would set up an experiment to show that carbon dioxide is needed for photosynthesis, including the control, and predict the results. [5]",
            marks: 5,
            modelAnswer:
              "Destarch two similar potted plants by keeping them in the dark for 24–48 hours. Enclose the first plant's leaf (or the whole plant) in a sealed transparent container with a dish of sodium hydroxide solution, which absorbs the carbon dioxide from the air inside. Set up the second plant in the same way but with a dish of water (or sodium hydrogencarbonate) instead of sodium hydroxide — this is the control, which still has CO₂. Place both in bright light for several hours, then test a leaf from each for starch. Prediction: the leaf from the plant without CO₂ (NaOH present) stays orange-brown (no starch), while the control leaf (CO₂ present) turns blue-black (starch present). This shows CO₂ is needed for photosynthesis.",
            markScheme: [
              "destarch the plant(s) first",
              "enclose plant with sodium hydroxide to absorb CO₂",
              "set up a control with CO₂ present (water / NaHCO₃) treated the same",
              "expose to light, then starch test both",
              "NaOH leaf orange-brown (no starch); control blue-black → CO₂ needed",
            ],
            commonError:
              "Omitting the control plant. Without a control with CO₂ present, you cannot be sure the lack of starch was due to removing CO₂.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "challenge",
            hints: [
              "Which chemical removes CO₂?",
              "Why do you also need a control with CO₂ present?",
              "Both plants must be destarched and given light.",
              "Predict the iodine result for each.",
            ],
            strategy: "design a fair test with a control",
          },
          {
            id: "bio-plant-nutrition-bq4-05",
            question:
              "Explain why we test leaves for starch rather than for glucose when investigating photosynthesis. [3]",
            marks: 3,
            modelAnswer:
              "Glucose made in photosynthesis is quickly used (in respiration) or converted to other substances (such as sucrose for transport), so its concentration changes rapidly and it may be present even when little photosynthesis has occurred. Starch is the stored form and builds up in the cells where photosynthesis has taken place, giving a more reliable indicator. There is also a simple, clear test for starch (iodine turns blue-black), making starch easier to detect in a leaf.",
            markScheme: [
              "glucose is quickly used / converted to other substances (e.g. sucrose, starch)",
              "starch is the stored product / accumulates where photosynthesis occurred",
              "iodine gives a simple clear test for starch (blue-black)",
            ],
            commonError:
              "Saying glucose 'cannot be tested for' — it can (e.g. Benedict's test), but it is less reliable in a leaf because it is rapidly used or converted.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "core",
            hints: [
              "What happens to glucose soon after it is made?",
              "Which molecule accumulates in the leaf?",
              "Is there a simple test for starch?",
            ],
          },
          {
            id: "bio-plant-nutrition-bq4-06",
            question:
              "State the role of nitrate ions in a plant and describe the symptoms of nitrate ion deficiency. [4]",
            marks: 4,
            modelAnswer:
              "Nitrate ions (NO₃⁻) provide the nitrogen needed to make amino acids, which are joined together to form proteins (including enzymes). Proteins are needed for growth and metabolism. The symptoms of nitrate deficiency are stunted (poor) growth, because the plant cannot make enough protein to build new cells, and yellowing (chlorosis) of the older leaves, as nitrogen is moved from older leaves to the younger, growing tissue.",
            markScheme: [
              "nitrate provides nitrogen for amino acids",
              "amino acids make proteins (for growth / enzymes)",
              "deficiency symptom: stunted / poor growth",
              "deficiency symptom: yellowing / chlorosis of (older) leaves",
            ],
            commonError:
              "Saying nitrate is needed to make chlorophyll — that is magnesium. Nitrate is for proteins (and indirectly affects growth).",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "core",
            hints: [
              "What element does nitrate supply?",
              "Which molecules need that element?",
              "Give both the growth and colour symptoms.",
            ],
          },
          {
            id: "bio-plant-nutrition-bq4-07",
            question:
              "State the role of magnesium ions in a plant and describe the symptom of magnesium ion deficiency. [3]",
            marks: 3,
            modelAnswer:
              "Magnesium ions (Mg²⁺) are needed to make chlorophyll — magnesium is the central atom of the chlorophyll molecule. Without enough magnesium, the plant cannot make enough chlorophyll, so the leaves turn yellow (chlorosis). With less chlorophyll the plant also absorbs less light, so it photosynthesises more slowly.",
            markScheme: [
              "magnesium needed to make chlorophyll",
              "deficiency causes yellowing / chlorosis of leaves",
              "less chlorophyll → less light absorbed / slower photosynthesis",
            ],
            commonError:
              "Mixing up magnesium and nitrate deficiency. Magnesium deficiency mainly causes yellowing (lack of chlorophyll), not severe stunting.",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bq4-08",
            question:
              "Two plants are grown in water cultures. Plant A lacks nitrate; plant B lacks magnesium. After two weeks, describe how you could tell the two plants apart by their appearance, and explain the difference. [4]",
            marks: 4,
            modelAnswer:
              "Plant A (no nitrate) would be small and stunted as well as having yellowing leaves, because without nitrate it cannot make enough protein for growth, so growth is poor; the yellowing tends to affect older leaves. Plant B (no magnesium) would be a more normal height but with yellow (chlorotic) leaves, because it can still make proteins (nitrate is present) and so grow, but it cannot make chlorophyll without magnesium. So the key difference: severe stunting plus yellowing points to nitrate deficiency (plant A), whereas yellowing without such severe stunting points to magnesium deficiency (plant B).",
            markScheme: [
              "plant A (no nitrate): stunted / small growth",
              "because it cannot make enough protein for growth",
              "plant B (no magnesium): more normal height but yellow leaves",
              "because it can still make protein but not chlorophyll",
            ],
            commonError:
              "Saying both look identical because both have yellow leaves — the distinguishing feature is the degree of stunting.",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "challenge",
            hints: [
              "Both deficiencies cause yellowing — what is different?",
              "Which deficiency stops the plant making proteins for growth?",
              "Which deficiency mainly affects leaf colour?",
            ],
            strategy: "compare cause to symptom",
          },
          {
            id: "bio-plant-nutrition-bq4-09",
            question:
              "Mineral ions such as nitrate are often present in soil at a lower concentration than inside the root cells. Explain how the root absorbs these ions and why this process needs energy. [3]",
            marks: 3,
            modelAnswer:
              "Because the ions are at a lower concentration in the soil than inside the root cells, they must be absorbed against the concentration gradient (from low to high concentration). This is done by active transport, using carrier proteins in the cell membrane. Active transport requires energy in the form of ATP, which is supplied by respiration in the root cells; this is why a good supply of oxygen for respiration improves mineral uptake.",
            markScheme: [
              "ions absorbed against the concentration gradient (low → high)",
              "by active transport (using carrier proteins)",
              "requires energy (ATP) from respiration",
            ],
            commonError:
              "Saying ions are absorbed by diffusion. Diffusion only moves substances down a gradient; here they move against it, so active transport is required.",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "core",
            hints: [
              "Compare the ion concentration inside and outside the root.",
              "Which transport process moves substances against a gradient?",
              "Where does the energy for it come from?",
            ],
          },
          {
            id: "bio-plant-nutrition-bq4-10",
            question:
              "A gardener notices that a plant has pale, yellow older leaves and is also stunted, while a nearby plant of the same species has only yellow leaves but normal height. Suggest a diagnosis for each plant and describe how the gardener could test these ideas. [4]",
            marks: 4,
            modelAnswer:
              "The first plant (yellow older leaves AND stunted) is most likely suffering from nitrate ion deficiency, because lack of nitrate prevents protein synthesis, causing both poor growth and yellowing. The second plant (yellow leaves but normal height) is most likely magnesium ion deficient, because lack of magnesium prevents chlorophyll synthesis (yellowing) but proteins can still be made so growth is more normal. To test these ideas, the gardener could grow similar plants in water cultures (or add fertilisers) that supply the suspected missing ion: adding nitrate should restore growth and green colour to the first type, and adding magnesium should restore the green colour to the second type. A control plant with a complete set of minerals should be grown for comparison.",
            markScheme: [
              "first plant: nitrate deficiency (stunted + yellow)",
              "second plant: magnesium deficiency (yellow, normal height)",
              "test by supplying the suspected ion (fertiliser / water culture)",
              "use a control with complete minerals / see if symptoms are cured",
            ],
            commonError:
              "Giving a diagnosis with no way to test it. A good answer suggests adding the missing ion and using a control for comparison.",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "challenge",
            hints: [
              "Match each set of symptoms to a deficiency.",
              "Stunting plus yellowing points to one ion; yellowing alone to the other.",
              "How could you test by changing the minerals supplied?",
              "Remember to include a control.",
            ],
            strategy: "diagnose then design a test",
          },
        ],
      },
    ],
  },
};
