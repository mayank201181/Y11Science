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
          "Six multiple-choice questions covering photosynthesis equations, leaf structure, and limiting factors.",
        questions: [
          {
            id: "bio-plant-nutrition-bank-mcq1-q01",
            question:
              "What is the role of light energy in photosynthesis?",
            options: [
              "It provides the carbon atoms for glucose.",
              "It is transferred to chemical energy stored in glucose.",
              "It breaks down glucose to release energy for the plant.",
              "It replaces the role of chlorophyll in absorbing CO₂.",
            ],
            answerIndex: 1,
            explanation:
              "Chlorophyll traps light energy and transfers it to chemical potential energy, which is stored in the bonds of glucose. Light does not provide carbon atoms (CO₂ does), does not break down glucose (respiration does that), and cannot replace chlorophyll.",
            guideRef: "The Photosynthesis Equation",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bank-mcq1-q02",
            question:
              "Which of the following is NOT an adaptation of the palisade mesophyll for photosynthesis?",
            options: [
              "Cells are closely packed near the upper surface.",
              "Cells contain many chloroplasts.",
              "Large air spaces between cells allow gas exchange.",
              "Column shape allows more cells to be stacked near the top.",
            ],
            answerIndex: 2,
            explanation:
              "Large air spaces are a feature of the SPONGY mesophyll, not the palisade mesophyll. The palisade cells are tightly packed with few air spaces. All other options correctly describe palisade mesophyll adaptations.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "core",
            hints: [
              "Which layer of the leaf has large air spaces?",
              "Think about the difference between palisade and spongy mesophyll layers.",
            ],
          },
          {
            id: "bio-plant-nutrition-bank-mcq1-q03",
            question:
              "A graph shows the rate of photosynthesis plotted against temperature. The rate increases from 10 °C to 35 °C, then falls sharply above 40 °C. What best explains the sharp fall above 40 °C?",
            options: [
              "CO₂ becomes limiting at high temperatures.",
              "The enzymes involved in photosynthesis are denatured.",
              "Chlorophyll absorbs less light at high temperatures.",
              "Water evaporates too quickly, so the stomata close.",
            ],
            answerIndex: 1,
            explanation:
              "Above the optimum temperature, the heat energy causes the enzyme molecules to vibrate excessively. The shape of the active site changes permanently (denaturation), and the enzyme can no longer catalyse its reaction. CO₂ does not become limiting simply due to high temperature; chlorophyll absorption is not significantly temperature-dependent; while stomata may close at very high temperatures, the primary cause of the sharp fall is enzyme denaturation.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "core",
            hints: [
              "What effect does very high temperature have on enzyme structure?",
              "The active site changes shape — what is this called?",
            ],
          },
          {
            id: "bio-plant-nutrition-bank-mcq1-q04",
            question:
              "Why is ethanol used in the starch test for leaves?",
            options: [
              "It kills the leaf cells to prevent further photosynthesis.",
              "It decolourises the leaf by dissolving the chlorophyll.",
              "It reacts with starch to produce a colour change.",
              "It softens the cell walls so iodine can enter.",
            ],
            answerIndex: 1,
            explanation:
              "Ethanol dissolves chlorophyll, decolourising the leaf. This is essential so that the iodine colour change (orange to blue-black) can be seen clearly against a pale background. The leaf is killed by boiling water (step 2), not ethanol. Iodine — not ethanol — reacts with starch. The leaf is softened by rinsing in warm water after the ethanol step.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bank-mcq1-q05",
            question:
              "A commercial greenhouse grower maintains a CO₂ concentration of 0.1% inside (normal air is 0.04%). The light and temperature are kept constant and optimal. What effect will the extra CO₂ have on the rate of photosynthesis, and why?",
            options: [
              "No effect, because light is now the limiting factor.",
              "Increased rate, because CO₂ is a reactant and was previously limiting.",
              "Decreased rate, because excess CO₂ inhibits the enzymes.",
              "Increased rate, because CO₂ provides extra energy for photosynthesis.",
            ],
            answerIndex: 1,
            explanation:
              "CO₂ is a reactant. At normal atmospheric concentrations (0.04%), CO₂ is often the limiting factor when light and temperature are adequate. Increasing [CO₂] to 0.1% raises the rate because more CO₂ molecules are available to react. CO₂ does not inhibit enzymes at these concentrations and it provides no energy (energy comes from light).",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "core",
            hints: [
              "Is CO₂ a reactant or a product of photosynthesis?",
              "If light and temperature are already optimal, which factor is most likely limiting?",
            ],
          },
          {
            id: "bio-plant-nutrition-bank-mcq1-q06",
            question:
              "A plant is grown in soil that is severely deficient in nitrate ions. Which of the following best describes the expected symptoms, and their cause?",
            options: [
              "Dark green, large leaves — excess chlorophyll is synthesised.",
              "Stunted growth and yellowing of older leaves — insufficient protein synthesis.",
              "Yellowing of leaves only — chlorophyll cannot be made.",
              "Wilting and root death — water cannot be absorbed without nitrate.",
            ],
            answerIndex: 1,
            explanation:
              "Nitrate ions provide nitrogen for amino acid synthesis. Without amino acids, proteins (including enzymes and structural proteins) cannot be made, so growth is stunted. Nitrogen is mobilised from older leaves to younger growing tips, so older leaves yellow first (chlorosis). Dark green leaves would indicate excess nitrogen, not deficiency. Option C describes magnesium deficiency. Water absorption does not depend on nitrate.",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "core",
            hints: [
              "What molecule do nitrate ions contribute to?",
              "If proteins cannot be made, what biological processes are affected?",
              "Why do older leaves yellow before younger ones in nitrate deficiency?",
            ],
          },
        ],
      },
      {
        id: "bio-plant-nutrition-bank-mcq-2",
        title: "Plant Nutrition MCQ Paper 2",
        description:
          "Six multiple-choice questions including application, data interpretation, and challenge questions.",
        questions: [
          {
            id: "bio-plant-nutrition-bank-mcq2-q01",
            question:
              "A student sets up three identical plants in airtight containers. Container A has normal air; Container B has air enriched with CO₂; Container C has air with all CO₂ removed by NaOH. All containers receive the same light intensity and temperature. After 6 hours, which plant will have produced the most starch?",
            options: [
              "Plant A — normal conditions are optimal.",
              "Plant B — higher CO₂ increases the rate of photosynthesis.",
              "Plant C — removing CO₂ forces the plant to use stored glucose.",
              "All three plants produce the same amount of starch.",
            ],
            answerIndex: 1,
            explanation:
              "At normal atmospheric CO₂ (0.04%), CO₂ is often the limiting factor when light and temperature are adequate. Plant B has enriched CO₂, so the rate of photosynthesis is higher, producing more glucose and therefore more starch. Plant C has no CO₂ — it cannot photosynthesize and produces no starch. Plant A is limited by normal CO₂ levels.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "core",
            hints: [
              "Which plant has the highest [CO₂] available as a reactant?",
              "What happens to photosynthesis when CO₂ is removed?",
            ],
          },
          {
            id: "bio-plant-nutrition-bank-mcq2-q02",
            question:
              "Guard cells open the stomatal pore when they become turgid. Which of the following correctly explains how they become turgid?",
            options: [
              "They produce glucose by photosynthesis, increasing the solute concentration, causing water to enter by osmosis.",
              "They lose potassium ions, decreasing the water potential, so water leaves by osmosis.",
              "They take up potassium ions, decreasing the water potential, so water enters by osmosis.",
              "They absorb water directly by active transport from surrounding cells.",
            ],
            answerIndex: 2,
            explanation:
              "Guard cells take up K⁺ ions (by active transport, using ATP). This lowers the water potential inside the guard cells. Water then moves into the guard cells by osmosis (down the water potential gradient). The cells swell and become turgid, bowing apart to open the pore. Option A is partially correct (photosynthesis does help) but the primary mechanism is K⁺ uptake. Water enters by osmosis, not by active transport.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "challenge",
            hints: [
              "What ion do guard cells actively pump in to open stomata?",
              "How does taking up ions affect the water potential of the guard cell?",
              "Water moves by osmosis from high to low water potential — which direction does it move?",
              "What happens to the shape of turgid guard cells?",
            ],
            strategy: "cause → osmosis consequence → structural change",
          },
          {
            id: "bio-plant-nutrition-bank-mcq2-q03",
            question:
              "A graph of the rate of photosynthesis vs light intensity shows two curves: Curve X levels off at a higher rate than Curve Y, even though both start at the same point. What single variable could explain why Curve X plateaus higher than Curve Y?",
            options: [
              "Curve X was measured at a lower temperature than Curve Y.",
              "Curve X was measured with a higher CO₂ concentration than Curve Y.",
              "Curve X used a plant with fewer chloroplasts than Curve Y.",
              "Curve X was taken in darkness, while Curve Y was in light.",
            ],
            answerIndex: 1,
            explanation:
              "A higher plateau on a rate-vs-light graph indicates that another factor was less limiting. If CO₂ concentration is higher in Curve X, then when light stops being limiting, CO₂ is still available — allowing a higher maximum rate. A lower temperature (Option A) would give a LOWER plateau. Fewer chloroplasts would also give a lower rate. Taking measurements in darkness (Option D) makes no sense for a rate-of-photosynthesis graph.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "challenge",
            hints: [
              "A higher plateau means less of another factor is limiting — which factor is most likely different?",
              "What would a lower temperature do to enzyme-controlled reaction rates?",
              "If CO₂ is higher, can the plant sustain a higher rate before CO₂ becomes limiting?",
              "Eliminating wrong options: lower temperature → lower plateau; fewer chloroplasts → lower rate throughout.",
            ],
            strategy: "eliminate wrong options, identify the plateau",
          },
          {
            id: "bio-plant-nutrition-bank-mcq2-q04",
            question:
              "Which row correctly matches a molecule, its role in the plant, and the mineral ion needed to make it?",
            options: [
              "Chlorophyll — light absorption — NO₃⁻",
              "Amino acid — protein building block — Mg²⁺",
              "Chlorophyll — light absorption — Mg²⁺",
              "Protein — energy storage — NO₃⁻",
            ],
            answerIndex: 2,
            explanation:
              "Chlorophyll absorbs light energy and contains Mg²⁺ at its centre — this is the correct match. Amino acids require nitrogen (from NO₃⁻, not Mg²⁺). Proteins are structural and functional molecules, not the primary energy store (that role belongs to starch/glucose and fats).",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "warmup",
          },
          {
            id: "bio-plant-nutrition-bank-mcq2-q05",
            question:
              "Glucose produced by photosynthesis can be converted to starch for storage. Why is starch a better storage molecule in leaves than glucose?",
            options: [
              "Starch releases more energy per molecule than glucose when respired.",
              "Starch is insoluble, so it does not lower the water potential of the cell.",
              "Starch can be transported in the phloem, unlike glucose.",
              "Starch is easily converted to amino acids when nitrogen is available.",
            ],
            answerIndex: 1,
            explanation:
              "Starch is insoluble and does not affect the osmotic potential (water potential) of the cell, making it an ideal storage molecule that will not cause unwanted water movements. Glucose is soluble and would lower the water potential, drawing in water by osmosis. Sucrose (not starch) is transported in the phloem. Starch is not directly converted to amino acids — glucose carbon skeletons are, after combining with nitrate-derived nitrogen.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "core",
            hints: [
              "What is the key physical property that differs between starch and glucose?",
              "Solute molecules lower the water potential — what effect would soluble glucose have on the cell?",
            ],
          },
          {
            id: "bio-plant-nutrition-bank-mcq2-q06",
            question:
              "A student measures the rate of photosynthesis in a pond plant at 20 °C and then again at 30 °C, keeping light intensity and CO₂ constant. She finds the rate has approximately doubled. She then tests at 45 °C and finds the rate has fallen to near zero. Which explanation best accounts for both observations together?",
            options: [
              "Temperature affects both diffusion rate and enzyme activity, but denaturation is irreversible above ~40 °C.",
              "At 30 °C, light intensity doubled; at 45 °C, the plant ran out of CO₂.",
              "Temperature only affects enzyme activity; the fall at 45 °C is due to stomata closing.",
              "Photosynthesis is not affected by temperature — the observer made a measurement error.",
            ],
            answerIndex: 0,
            explanation:
              "From 20–30 °C, increasing temperature increases enzyme kinetic energy and collision frequency, roughly doubling the rate (consistent with the Q10 ≈ 2 rule for enzyme reactions). Above the optimum (~35–40 °C), enzymes are denatured — the active site is permanently distorted, and catalysis ceases. This two-part explanation (faster reactions then irreversible denaturation) accounts for both observations. Light and CO₂ were kept constant, so they cannot explain the changes. Stomata closure alone would not cause the rate to fall to near zero instantly.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "challenge",
            hints: [
              "What does temperature do to enzyme-controlled reactions below the optimum?",
              "What happens to the structure of enzymes above their optimum temperature?",
              "Is denaturation reversible or irreversible?",
              "Can the near-zero rate at 45 °C be explained by anything other than enzyme denaturation?",
            ],
            strategy: "two-step reasoning: activation then denaturation",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-plant-nutrition-bank-qa-1",
        title: "Plant Nutrition Structured Questions Paper 1",
        description:
          "Four structured questions on photosynthesis equations, leaf structure, experiments and mineral nutrition.",
        questions: [
          {
            id: "bio-plant-nutrition-bank-qa1-q01",
            question:
              "Fig. 1 shows a cross-section of a leaf.\n\n(a) State the name of the layer labelled X, which is the tightly packed layer of cells near the upper surface. [1]\n(b) State TWO features of the cells in layer X that adapt them for photosynthesis. [2]\n(c) Explain why the air spaces in the spongy mesophyll increase the rate of photosynthesis. [3]\n(d) A student removes a leaf from the plant, kills it in boiling water, and then places it in hot ethanol. State the purpose of the boiling water step and explain why the ethanol must be heated in a water bath rather than over a direct flame. [2]",
            marks: 8,
            modelAnswer:
              "(a) Palisade mesophyll.\n\n(b) Any two of: cells contain many chloroplasts to absorb light energy; cells are closely packed so many can be positioned near the top surface to receive maximum light; column shape allows light to penetrate deep into the cell; large surface area of each cell for absorption of CO₂.\n\n(c) The air spaces provide a large internal surface area for CO₂ to dissolve into the cell surface. They maintain a steep concentration gradient of CO₂ between the air spaces and the photosynthesising cells. CO₂ diffuses rapidly through air (faster than through liquid), so the air spaces reduce the diffusion distance from the stomata to the mesophyll cells — all three points together significantly increase the rate of CO₂ delivery and therefore photosynthesis.\n\n(d) Boiling water kills the cells / stops enzyme activity / makes the cells permeable (softens the cell walls). Ethanol is highly flammable; heating it directly over a flame could ignite the vapour and cause a fire/explosion; a water bath keeps the temperature controlled and prevents the ethanol from reaching its flash point.",
            markScheme: [
              "(a) palisade mesophyll",
              "(b) many chloroplasts / packed with chloroplasts",
              "(b) closely packed near upper surface / column-shaped / large surface area",
              "(c) large surface area for CO₂ to dissolve into cell surface",
              "(c) maintains steep CO₂ concentration gradient",
              "(c) CO₂ diffuses faster through air / reduces diffusion distance",
              "(d) boiling water kills cells / stops enzyme activity / softens cell walls",
              "(d) ethanol is flammable / direct flame could ignite ethanol vapour",
            ],
            commonError:
              "Students often write 'the air spaces let the plant breathe' without explaining the concentration gradient or surface area. Examiners want the mechanism: steep gradient → faster diffusion.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "core",
            hints: [
              "Name the layer first, then think about features that help it absorb light.",
              "For air spaces: think about Fick's law — what three factors affect diffusion rate?",
              "For the ethanol question: what property of ethanol makes it dangerous near flames?",
            ],
          },
          {
            id: "bio-plant-nutrition-bank-qa1-q02",
            question:
              "(a) Write the balanced symbol equation for photosynthesis. Include the conditions above the arrow. [3]\n(b) State FOUR different ways in which glucose produced during photosynthesis can be used by a plant. [4]\n(c) Explain why a plant kept only in blue and red light will photosynthesise effectively, but a plant kept only in green light will not. [2]",
            marks: 9,
            modelAnswer:
              "(a) 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂, with 'light energy' and 'chlorophyll' written above/below the arrow as conditions.\n\n(b) Any four of: used in respiration to release energy; converted to starch for storage; converted to cellulose for cell walls; converted to sucrose for transport in phloem; used to make amino acids (with nitrate ions) and then proteins; used to make fats and oils for storage in seeds.\n\n(c) Chlorophyll absorbs mainly blue and red wavelengths of light. Plants kept in blue and red light can absorb this energy to drive photosynthesis. Green light is mostly reflected by chlorophyll (which is why leaves appear green) and is not absorbed — so plants in green light cannot absorb enough light energy to photosynthesise effectively.",
            markScheme: [
              "(a) 6CO₂ + 6H₂O (on left) C₆H₁₂O₆ + 6O₂ (on right)",
              "(a) balanced (correct coefficients throughout)",
              "(a) light energy / chlorophyll shown as conditions",
              "(b) respiration / energy release",
              "(b) starch storage / cellulose / sucrose transport / amino acids/proteins / fats or oils",
              "(b) any four correct uses (1 mark each, max 4)",
              "(c) chlorophyll absorbs red and blue light but reflects green light",
              "(c) green light not absorbed → cannot provide energy → photosynthesis does not proceed",
            ],
            commonError:
              "Students often list 'making food' as a use of glucose, which is circular. Examiners want specific molecules or processes: respiration, starch, cellulose, sucrose, amino acids.",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
            difficulty: "core",
            hints: [
              "Write the equation step by step: reactants (CO₂ and H₂O) → products (glucose and O₂), then balance.",
              "Think about ALL the different molecules a plant needs to build and maintain itself.",
              "What colours of light does chlorophyll absorb, and which does it reflect?",
            ],
          },
          {
            id: "bio-plant-nutrition-bank-qa1-q03",
            question:
              "A student investigates whether light is needed for photosynthesis. She uses two identical plants that have been destarched.\n\n- Plant A is placed in bright light for 6 hours.\n- Plant B is kept in complete darkness for 6 hours.\n\nAfter 6 hours, a leaf is taken from each plant and tested for starch.\n\n(a) Predict the result of the iodine test for each plant. [2]\n(b) Explain why destarching is an essential step before the investigation. [2]\n(c) State TWO variables that must be kept the same to make this a fair test. [2]\n(d) Suggest why the student uses two identical plants rather than covering half of one leaf with foil. [2]",
            marks: 8,
            modelAnswer:
              "(a) Plant A (light): blue-black colour — starch is present. Plant B (darkness): orange-brown colour — no starch present.\n\n(b) If starch was already present from before the investigation, both leaves would test positive for starch even if photosynthesis had not occurred during the 6 hours. Destarching ensures that any starch detected at the end must have been made during the investigation — making the results valid and unambiguous.\n\n(c) Any two of: temperature; water supply / watering; CO₂ concentration; the size/age/species of the plants; duration of the investigation (6 hours for both).\n\n(d) Using two separate plants (rather than half-and-half on one leaf) means that the 'dark' plant is entirely in darkness — there is no possibility of light leaking from the illuminated half. It also avoids any diffusion of sugars from the light half to the dark half through phloem connections within the same leaf, which could confuse results.",
            markScheme: [
              "(a) Plant A: blue-black / starch present",
              "(a) Plant B: orange-brown / no starch",
              "(b) ensures any starch detected was made during investigation / not pre-existing",
              "(b) makes results valid / unambiguous",
              "(c) any two: temperature; water; CO₂ concentration; light intensity (same for A); duration",
              "(d) avoids light leaking to dark area / ensures complete darkness for Plant B",
              "(d) avoids diffusion of sugars between light and dark sections / prevents contamination of results",
            ],
            commonError:
              "A very common error: students say 'destarching makes the plant hungry so it photosynthesises more.' That is incorrect. Destarching is purely about ensuring a clean baseline for the test, not about stimulating photosynthesis.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "core",
            hints: [
              "Iodine: what colour indicates starch present? What colour indicates starch absent?",
              "Think about what would happen if you tested for starch without destarching first.",
              "Fair test = same everything except the one variable being tested. What are you varying here?",
              "If both halves are on the same leaf, can you guarantee the dark half has had zero light or zero sugars?",
            ],
          },
          {
            id: "bio-plant-nutrition-bank-qa1-q04",
            question:
              "A farmer grows tomato plants in a greenhouse. He notices that some plants have small, yellowing leaves and poor growth, while others have yellowing leaves but grow to normal height. He tests the soil and finds low levels of both nitrate and magnesium ions in the affected areas.\n\n(a) Identify which deficiency (nitrate or magnesium) is more likely responsible for the plants with poor growth AND yellowing. Justify your answer. [3]\n(b) Explain, at the molecular level, why magnesium deficiency causes leaves to yellow. [2]\n(c) The farmer adds a fertiliser containing both NO₃⁻ and Mg²⁺. Explain how these ions are absorbed by the plant roots. [2]\n(d) After a month, the farmer observes that the plants receiving fertiliser have dark green, large leaves and high fruit yield. Explain how the nitrate ions contributed to this improvement. [3]",
            marks: 10,
            modelAnswer:
              "(a) Nitrate deficiency is responsible for the plants with poor growth AND yellowing. Nitrate ions provide nitrogen for amino acid synthesis. Without amino acids, proteins (including enzymes needed for growth and cell division) cannot be made — so growth is stunted. Yellowing occurs because nitrogen is mobilised from older leaves to growing tips. Magnesium deficiency alone causes yellowing but does not typically cause severely stunted growth because protein synthesis (from other pathways) can continue.\n\n(b) Magnesium ions (Mg²⁺) are the central atom of the chlorophyll molecule. Without magnesium, chlorophyll molecules cannot be synthesised. With less chlorophyll, the leaf absorbs less light and appears yellow/pale (chlorosis) rather than green.\n\n(c) Nitrate and magnesium ions are present at low concentrations in the soil solution but at higher concentrations inside root hair cells. To absorb them against this concentration gradient, root cells use active transport — a process requiring energy (ATP) from cellular respiration.\n\n(d) Nitrate ions are absorbed and provide nitrogen atoms. These are used to make amino acids, which are then joined by peptide bonds to form proteins. Proteins include structural proteins for cell growth, enzymes for all metabolic reactions (including photosynthesis), and transport proteins. More proteins → more cell division → larger leaves → more photosynthesis → more glucose → more growth and fruit production. Without adequate protein (enzyme) supply, even with light and CO₂, photosynthesis cannot proceed at maximum rate.",
            markScheme: [
              "(a) nitrate deficiency causes stunted growth AND yellowing",
              "(a) nitrate needed for amino acid/protein synthesis — without it, no growth",
              "(a) magnesium deficiency causes yellowing but not severe stunted growth",
              "(b) Mg²⁺ is central atom of chlorophyll molecule",
              "(b) without Mg²⁺, chlorophyll cannot be made → leaves appear yellow",
              "(c) ions at lower concentration in soil than in root cells",
              "(c) absorbed by active transport using ATP / energy from respiration",
              "(d) nitrate provides nitrogen for amino acid synthesis",
              "(d) amino acids assembled into proteins (enzymes, structural proteins)",
              "(d) more proteins → more growth / faster metabolism / better photosynthesis → more yield",
            ],
            commonError:
              "Students confuse 'nitrate ions provide energy' — they do not. Nitrate provides nitrogen, which is used to build amino acids. Energy comes from glucose via respiration.",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "challenge",
            hints: [
              "Which deficiency gives BOTH stunted growth AND yellowing? Nitrate or magnesium?",
              "Mg²⁺ sits at the centre of which pigment molecule?",
              "Ion concentration is higher inside the root cell than in soil solution — what type of transport overcomes a gradient?",
              "Trace the chain: NO₃⁻ → nitrogen → amino acids → proteins → enzymes/structure → growth.",
            ],
            strategy: "trace cause-effect chain: ion → molecule → function → symptom",
          },
        ],
      },
      {
        id: "bio-plant-nutrition-bank-qa-2",
        title: "Plant Nutrition Structured Questions Paper 2",
        description:
          "Four structured questions including challenge problems on limiting factors, synoptic links, and experimental design.",
        questions: [
          {
            id: "bio-plant-nutrition-bank-qa2-q01",
            question:
              "Fig. 2 shows a rate-of-photosynthesis graph with three curves: Curve P (measured at 25 °C, 0.04% CO₂), Curve Q (measured at 25 °C, 0.1% CO₂), and Curve R (measured at 35 °C, 0.1% CO₂). All curves are plotted against light intensity.\n\n(a) Explain why Curve Q has a higher plateau than Curve P. [3]\n(b) Curve R has an even higher plateau than Curve Q. Explain why increasing the temperature from 25 °C to 35 °C raises the rate at high light intensities. [3]\n(c) A student claims: 'If you increased the temperature to 50 °C, the rate would be even higher than Curve R.' Evaluate this claim. [3]",
            marks: 9,
            modelAnswer:
              "(a) At the plateau of Curve P, light is no longer limiting — CO₂ has become the limiting factor at 0.04%. In Curve Q, CO₂ is 0.1% — more than twice as high. More CO₂ molecules are available as a reactant, so photosynthesis can proceed at a higher rate before CO₂ becomes limiting again. The plateau is set by whichever factor becomes limiting next; with more CO₂, the rate can go higher before CO₂ restricts it.\n\n(b) The reactions of photosynthesis (especially the dark reactions/Calvin cycle) are catalysed by enzymes. At 35 °C, the molecules have more kinetic energy — they move faster and collide with the enzyme active sites more frequently and with more energy. This increases the rate of enzyme-catalysed reactions, raising the overall rate of photosynthesis. The higher plateau shows that temperature, not CO₂, was a secondary limiting factor in Curve Q.\n\n(c) This claim is incorrect. 50 °C is well above the optimum temperature for the enzymes involved in photosynthesis (typically ~35–40 °C). At this temperature, the excess heat energy causes the active sites of the enzymes to change shape permanently — denaturation. Denatured enzymes can no longer catalyse their reactions, so the rate would fall sharply, possibly to near zero. The student has assumed temperature always increases rate, ignoring denaturation.",
            markScheme: [
              "(a) CO₂ is higher in Curve Q (0.1% vs 0.04%)",
              "(a) more CO₂ available as reactant → rate can rise higher before CO₂ limits",
              "(a) plateau of P: CO₂ became limiting; Q delays this with more CO₂",
              "(b) higher temperature → more kinetic energy → more frequent enzyme-substrate collisions",
              "(b) enzyme-controlled reactions proceed faster / rate increases",
              "(b) temperature was also a limiting factor in Curve Q",
              "(c) claim is incorrect — 50 °C exceeds optimum temperature",
              "(c) enzymes are denatured — active sites permanently change shape",
              "(c) denatured enzymes cannot catalyse reactions → rate falls / near zero",
            ],
            commonError:
              "For part (c), many students say 'the rate slows down' without explaining denaturation. The exam requires the word 'denature' and the concept that the change to the active site is irreversible.",
            guideRef: "Limiting Factors of Photosynthesis",
            difficulty: "challenge",
            hints: [
              "Why does Curve Q plateau higher? Think about which factor was limiting at the plateau of Curve P.",
              "How does temperature affect enzyme-catalysed reaction rates below the optimum?",
              "What happens to enzyme structure above the optimum temperature? Is this reversible?",
              "The student's error is assuming the pattern continues — what evidence shows it does not?",
            ],
            strategy: "identify the limiting factor at each plateau; apply enzyme theory",
            solutions: [
              {
                label: "Systematic limiting-factor analysis",
                steps: [
                  "P plateau: light is no longer limiting. CO₂ at 0.04% is now the bottleneck → plateau set by CO₂.",
                  "Q has 0.1% CO₂: same light, higher CO₂. Rate can rise higher before CO₂ limits → higher plateau.",
                  "R is at 35 °C vs 25 °C: enzyme reactions faster → even higher plateau (temperature was a secondary limiter in Q).",
                  "At 50 °C: exceeds optimum (~35–40 °C) → enzymes denature → active sites distorted → catalysis ceases → rate collapses. Claim is wrong.",
                ],
              },
            ],
          },
          {
            id: "bio-plant-nutrition-bank-qa2-q02",
            question:
              "(a) A student claims that the xylem and phloem in a leaf vein serve opposite transport functions. Explain this statement by describing what each tissue transports and in which direction. [4]\n(b) Explain the link between the transport function of the phloem and the products of photosynthesis. [3]",
            marks: 7,
            modelAnswer:
              "(a) Xylem transports water and dissolved mineral ions (such as nitrate and magnesium ions) from the roots upward to the leaf — it delivers the raw materials needed for photosynthesis and other metabolic reactions. Phloem transports dissolved organic molecules — mainly sucrose — away from the leaf (a source) to other parts of the plant such as roots, fruits, and growing tips (sinks). Xylem flow is unidirectional (up); phloem flow can be bidirectional (up or down, depending on sources and sinks).\n\n(b) Glucose produced by photosynthesis cannot be transported efficiently in its current form because it would lower the water potential of cells and affect osmosis. The plant converts glucose to sucrose, which is then loaded into the phloem sieve tubes (companion cells use active transport to load sucrose against a concentration gradient). The sucrose solution travels by mass flow through the phloem from leaves (source) to sites of use or storage (sinks), where sucrose is unloaded and either respired, stored as starch, or used to build other molecules.",
            markScheme: [
              "(a) xylem: water and mineral ions / nitrate and magnesium",
              "(a) xylem: from roots to leaf / upward",
              "(a) phloem: dissolved sucrose / organic solutes",
              "(a) phloem: from leaf to roots / growing tips / fruits (any sink)",
              "(b) glucose converted to sucrose for transport",
              "(b) sucrose loaded into phloem by active transport (companion cells)",
              "(b) transported to sinks for respiration / storage / growth",
            ],
            commonError:
              "Students often say phloem transports 'food' or 'glucose' — the correct answer is sucrose. Also, 'xylem carries food' is a common error; xylem carries water and mineral ions.",
            guideRef: "Leaf Structure and Adaptations",
            difficulty: "core",
            hints: [
              "Xylem goes in one direction (up from roots). Phloem goes from source to sink. What is the leaf?",
              "What molecule does the plant make from glucose for transport? Why not transport glucose directly?",
              "How does sucrose get into the phloem — by diffusion or active transport?",
            ],
          },
          {
            id: "bio-plant-nutrition-bank-qa2-q03",
            question:
              "An experiment is set up to test whether CO₂ is needed for photosynthesis:\n\n- Two plants of the same species are destarched for 48 hours.\n- Plant A is enclosed in a clear polythene bag with a small beaker of NaOH solution inside.\n- Plant B is enclosed in a clear polythene bag with a small beaker of water inside.\n- Both bags are sealed and placed in bright light for 6 hours.\n- A leaf from each plant is then tested for starch.\n\n(a) State the expected iodine test result for each plant. [2]\n(b) Identify ONE variable that is controlled by using clear polythene bags, and explain why this is important. [2]\n(c) Explain the purpose of Plant B in this investigation. [2]\n(d) The student suggests that instead of NaOH, she could use a piece of black card inside the bag for Plant A, to test the same hypothesis. Evaluate this alternative design. [3]",
            marks: 9,
            modelAnswer:
              "(a) Plant A (NaOH — no CO₂): orange-brown — no starch. Plant B (water — CO₂ present): blue-black — starch present.\n\n(b) The clear polythene bags allow the same light intensity to reach both plants. Light intensity is a limiting factor for photosynthesis; if one plant received less light, this could be a confounding variable — it would be impossible to conclude whether the difference in starch was due to CO₂ availability or light availability.\n\n(c) Plant B is the control. It has all conditions identical to Plant A except that it has water instead of NaOH — so CO₂ is NOT removed. If Plant B produces starch (blue-black) and Plant A does not, the difference can be attributed to the removal of CO₂ by NaOH. Without a control, there is no baseline to compare the experimental result against.\n\n(d) This alternative is a poor design because it tests a different variable. Black card inside the bag would remove light from the plant (or at least shade it significantly), not CO₂. The hypothesis being tested is whether CO₂ is needed — but the black card design would test whether light is needed. The student would be unable to conclude anything about CO₂ from this design. To test CO₂, the variable changed must be CO₂ availability (which NaOH achieves), not light.",
            markScheme: [
              "(a) Plant A: orange-brown / no starch",
              "(a) Plant B: blue-black / starch present",
              "(b) clear bags allow equal light intensity to reach both plants",
              "(b) light is a limiting factor / controls a confounding variable",
              "(c) Plant B is the control / provides a baseline comparison",
              "(c) shows that under identical conditions WITH CO₂, starch is produced",
              "(d) black card removes light, not CO₂ — different variable",
              "(d) tests whether light is needed, NOT whether CO₂ is needed",
              "(d) conclusion about CO₂ cannot be drawn from this design",
            ],
            commonError:
              "Part (d): Students often say 'it won't work because it's too dark' — but the real issue is that this tests a different variable entirely (light, not CO₂). The hypothesis being tested changes.",
            guideRef: "Experiments: Testing for Starch and Controlled Investigations",
            difficulty: "core",
            hints: [
              "What does NaOH do to CO₂? What does water do?",
              "Clear vs opaque: what does 'clear' control for?",
              "A control has everything the same except the one thing being tested. What is Plant B controlling for?",
              "The black card changes light, not CO₂. Which hypothesis does this test?",
            ],
          },
          {
            id: "bio-plant-nutrition-bank-qa2-q04",
            question:
              "A student grows two batches of cress seedlings hydroponically (in water with dissolved minerals). Batch X receives a complete nutrient solution. Batch Y receives a solution lacking magnesium ions but containing all other minerals including nitrate.\n\n(a) Predict the appearance of Batch Y seedlings compared to Batch X after two weeks, giving reasons for each difference. [4]\n(b) The student argues that Batch Y will photosynthesize more slowly than Batch X. Explain the chain of molecular events that links magnesium deficiency to a reduced rate of photosynthesis. [4]\n(c) The student adds magnesium ions to the Batch Y solution after four weeks. Predict whether the seedlings will fully recover. Justify your answer with reference to reversibility. [3]",
            marks: 11,
            modelAnswer:
              "(a) Batch Y seedlings will have yellowing (chlorotic) leaves compared to the healthy green of Batch X. This is because without Mg²⁺, chlorophyll cannot be synthesised — the leaves lack the green pigment. However, Batch Y should be similar in height/growth to Batch X (or only slightly smaller) because nitrate is still available, so amino acids and proteins can still be made, allowing cell division and growth to proceed. Any stunting in Batch Y would be secondary — caused by reduced photosynthesis (less glucose for energy and building materials), not directly by the magnesium deficiency affecting protein synthesis.\n\n(b) 1. Mg²⁺ is the central atom of the chlorophyll molecule — without it, chlorophyll cannot be assembled. 2. With less chlorophyll, fewer photons of red and blue light are absorbed. 3. Less light energy is transferred to the chemical reactions of photosynthesis. 4. Fewer molecules of CO₂ and H₂O are converted to glucose per unit time — so the rate of photosynthesis decreases.\n\n(c) Partial recovery is likely, but full recovery is uncertain. New leaves formed after adding Mg²⁺ will be able to synthesise chlorophyll and will be green and healthy. However, already-yellowed older leaves may not fully recover. In some cases, if the chloroplasts in older leaves are still structurally intact, some chlorophyll can be resynthesised — but if the cells are severely damaged or dead, recovery is impossible. The plant will look healthier overall due to new green growth, but the oldest leaves may remain yellow.",
            markScheme: [
              "(a) Batch Y: yellow / chlorotic leaves",
              "(a) because Mg²⁺ needed for chlorophyll synthesis / without Mg²⁺ no chlorophyll",
              "(a) Batch Y: similar growth / height to Batch X (nitrate present → proteins made)",
              "(a) any stunting is secondary (less photosynthesis → less energy)",
              "(b) Mg²⁺ is central atom of chlorophyll",
              "(b) without Mg²⁺, chlorophyll cannot be made",
              "(b) less chlorophyll → less light absorbed",
              "(b) less light energy available → less CO₂ fixed → reduced rate of photosynthesis",
              "(c) new leaves will be green / can synthesise chlorophyll with added Mg²⁺",
              "(c) severely damaged / dead cells in old leaves may not recover",
              "(c) partial recovery likely; full recovery of oldest leaves uncertain / depends on cell damage",
            ],
            commonError:
              "Students often predict that Batch Y will show stunted growth as prominently as nitrate deficiency — this is incorrect. Stunted growth is the hallmark of NITRATE deficiency (proteins cannot be made). Magnesium deficiency primarily causes chlorosis. Growth continues because nitrate is present.",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "challenge",
            hints: [
              "Magnesium is needed for chlorophyll — what colour change does this cause?",
              "Nitrate IS present in Batch Y. Does this mean proteins can still be made? What does this mean for growth?",
              "Trace the chain: no Mg²⁺ → no chlorophyll → less light absorbed → less photosynthesis.",
              "Recovery: can existing damaged leaf cells always recover? What about new leaves?",
            ],
            strategy: "trace molecular chain; distinguish primary from secondary effects",
            solutions: [
              {
                label: "Chain-of-events approach",
                steps: [
                  "Mg²⁺ absent → chlorophyll molecule cannot be assembled (Mg²⁺ is the central ion).",
                  "Without chlorophyll: leaves cannot absorb red/blue light → less energy captured.",
                  "Less energy → fewer CO₂ + H₂O molecules converted per second → rate of photosynthesis falls.",
                  "Less glucose from photosynthesis → less ATP from respiration → less energy for growth → secondary stunting (but primary symptom is chlorosis, not stunting, because nitrate is present).",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
