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
- Multiple plateau heights at different CO₂ levels confirm CO₂ is still limiting even when light is high.

**Light intensity and distance — the inverse-square law:** in practicals (such as counting oxygen bubbles from pondweed at different distances from a lamp), light intensity is *not* proportional to distance. It is proportional to **1/distance²**, so doubling the distance reduces the intensity to one quarter. Always describe such results in terms of *intensity*, not raw distance.

**The temperature graph has a different shape from the light and CO₂ graphs.** Light intensity and CO₂ concentration each give a line that rises and then **levels off into a plateau**. Temperature instead gives a curve that rises to a **peak at the optimum** (about 35–40 °C) and then **falls sharply** as the enzymes denature — the active site changes shape and can no longer bind the substrate. This rise-then-fall shape is the tell-tale sign that a graph is plotting temperature.`,
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
        {
          caption: "Rate of photosynthesis vs temperature — rises to an optimum, then falls as enzymes denature",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Graph showing rate of photosynthesis rising to an optimum temperature then falling sharply as enzymes denature">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Axes -->
  <line x1="40" y1="170" x2="290" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="40" y1="170" x2="40" y2="20" stroke="#b7bce0" stroke-width="1.5"/>
  <!-- Axis labels -->
  <text x="165" y="190" text-anchor="middle" font-size="11" fill="#b7bce0" font-family="sans-serif">Temperature / °C</text>
  <text x="12" y="100" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif" transform="rotate(-90,12,100)">Rate of photosynthesis</text>
  <!-- Curve: rise to optimum then sharp fall -->
  <path d="M40,165 Q110,150 170,55 Q185,40 200,45 Q215,52 245,160" stroke="#34d399" stroke-width="2" fill="none"/>
  <!-- optimum marker -->
  <line x1="190" y1="42" x2="190" y2="170" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="190" y="184" text-anchor="middle" font-size="9" fill="#fbbf24" font-family="sans-serif">optimum ~35-40</text>
  <!-- rising-section label -->
  <text x="78" y="120" font-size="9" fill="#38bdf8" font-family="sans-serif">rate rises:</text>
  <text x="70" y="131" font-size="9" fill="#38bdf8" font-family="sans-serif">more kinetic</text>
  <text x="70" y="142" font-size="9" fill="#38bdf8" font-family="sans-serif">energy</text>
  <!-- falling-section label -->
  <text x="226" y="95" font-size="9" fill="#fb7185" font-family="sans-serif">rate falls:</text>
  <text x="222" y="106" font-size="9" fill="#fb7185" font-family="sans-serif">enzymes</text>
  <text x="222" y="117" font-size="9" fill="#fb7185" font-family="sans-serif">denatured</text>
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
      "Temperature graphs rise to an optimum (~35–40 °C) then fall sharply as enzymes denature — unlike light/CO₂ graphs, which plateau.",
      "Light intensity is proportional to 1/distance² — doubling the distance from a lamp quarters the intensity.",
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
        front: "How does the shape of a temperature graph differ from a light-intensity graph for photosynthesis?",
        back: "Light intensity rises then plateaus. Temperature rises to an optimum (~35–40 °C) then falls sharply, because above the optimum the enzymes denature.",
      },
      {
        front: "In a pondweed practical, why is doubling the distance from the lamp not the same as halving the light?",
        back: "Light intensity ∝ 1/distance², so doubling the distance reduces the intensity to one quarter, not one half.",
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
      // ── MCQ PAPER 1 ── equation, chlorophyll, glucose uses, basic limiting factors
      {
        id: "bio-plant-nutrition-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description:
          "Photosynthesis word and symbol equations, chlorophyll, uses of glucose and an introduction to limiting factors.",
        questions: [
          {
            id: "bio-plant-nutrition-bm1-01",
            question:
              "Which word equation correctly summarises photosynthesis?",
            options: [
              "glucose + oxygen → carbon dioxide + water",
              "carbon dioxide + water → glucose + oxygen",
              "carbon dioxide + oxygen → glucose + water",
              "glucose + water → carbon dioxide + oxygen",
            ],
            answerIndex: 1,
            explanation:
              "Photosynthesis builds glucose from carbon dioxide and water, releasing oxygen as a by-product: carbon dioxide + water → glucose + oxygen. Option A is the word equation for aerobic respiration (the reverse process).",
            difficulty: "warmup",
            guideRef: "The Photosynthesis Equation",
          },
          {
            id: "bio-plant-nutrition-bm1-02",
            question:
              "In the photosynthesis equation, where are light energy and chlorophyll usually written?",
            options: [
              "As reactants on the left of the arrow",
              "As products on the right of the arrow",
              "Above or below the arrow, because they are conditions, not reactants",
              "They are not shown in the equation at all",
            ],
            answerIndex: 2,
            explanation:
              "Light energy and chlorophyll are conditions needed for the reaction but are not consumed as reactants, so they are written above or below the arrow. Chlorophyll is a catalyst-like pigment that is regenerated, and light is a form of energy, not matter.",
            difficulty: "warmup",
            guideRef: "The Photosynthesis Equation",
          },
          {
            id: "bio-plant-nutrition-bm1-03",
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
              "Chlorophyll absorbs mainly red and blue wavelengths and reflects green light, which is why leaves appear green. If it absorbed green it would not be reflected to our eyes.",
            difficulty: "warmup",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
          },
          {
            id: "bio-plant-nutrition-bm1-04",
            question:
              "A leaf is green. Which statement best explains why?",
            options: [
              "Chlorophyll absorbs green light and transfers its energy to glucose",
              "Chlorophyll reflects green light, so green is the colour that reaches our eyes",
              "Green light is the only colour useful for photosynthesis",
              "The cellulose cell walls are naturally green",
            ],
            answerIndex: 1,
            explanation:
              "We see the wavelengths that are reflected, not absorbed. Chlorophyll reflects green light, so leaves look green. The red and blue light it absorbs is the light actually used to drive photosynthesis.",
            difficulty: "core",
            hints: [
              "We see the light that bounces off an object, not the light it absorbs.",
              "Chlorophyll absorbs red and blue strongly.",
              "If green is not absorbed, what happens to it?",
            ],
            guideRef: "Uses of Glucose and Role of Chlorophyll",
          },
          {
            id: "bio-plant-nutrition-bm1-05",
            question:
              "Which of these is NOT a use of the glucose made in photosynthesis?",
            options: [
              "Converted to starch for storage",
              "Used in respiration to release energy",
              "Converted to cellulose for cell walls",
              "Absorbed directly from the soil by the roots",
            ],
            answerIndex: 3,
            explanation:
              "Glucose is made inside the plant by photosynthesis, not absorbed from soil. It is used in respiration and converted to starch (storage), cellulose (cell walls), sucrose (transport) and combined with nitrate to make amino acids. Roots absorb water and mineral ions, not glucose.",
            difficulty: "core",
            hints: [
              "Glucose is a product the plant makes itself.",
              "What do roots actually take up from the soil?",
              "Three options are things the plant does WITH glucose it has made.",
            ],
            guideRef: "Uses of Glucose and Role of Chlorophyll",
          },
          {
            id: "bio-plant-nutrition-bm1-06",
            question:
              "Why is starch, rather than glucose, used as the storage carbohydrate in plant cells?",
            options: [
              "Starch contains more energy per molecule than glucose",
              "Starch is insoluble, so it does not affect the water potential of the cell",
              "Starch can be transported in the phloem more easily than glucose",
              "Starch is the form that is used directly in respiration",
            ],
            answerIndex: 1,
            explanation:
              "Starch is insoluble and osmotically inactive, so storing it does not draw water into the cell by osmosis or change its water potential. Glucose is soluble and would affect osmosis. Sucrose, not starch, is the transport sugar; glucose is the form used in respiration.",
            difficulty: "core",
            hints: [
              "Think about what dissolved glucose would do to the cell's water balance.",
              "A soluble sugar lowers water potential and draws in water.",
              "Why is an insoluble store an advantage?",
            ],
            guideRef: "Uses of Glucose and Role of Chlorophyll",
          },
          {
            id: "bio-plant-nutrition-bm1-07",
            question:
              "Which form of carbohydrate is transported away from the leaf in the phloem?",
            options: ["Starch", "Cellulose", "Sucrose", "Glycogen"],
            answerIndex: 2,
            explanation:
              "Glucose is converted to sucrose for transport in the phloem because sucrose is soluble yet relatively unreactive. Starch and cellulose are insoluble and cannot be transported; glycogen is an animal storage carbohydrate.",
            difficulty: "core",
            hints: [
              "The transport sugar must be soluble to move in sap.",
              "It is a disaccharide, not the storage polymer.",
              "Glycogen is found in animals, not plants.",
            ],
            guideRef: "Uses of Glucose and Role of Chlorophyll",
          },
          {
            id: "bio-plant-nutrition-bm1-08",
            question:
              "Glucose is combined with which mineral ion to make amino acids?",
            options: [
              "Magnesium ions",
              "Nitrate ions",
              "Phosphate ions",
              "Chloride ions",
            ],
            answerIndex: 1,
            explanation:
              "Nitrate ions supply the nitrogen atoms needed to convert glucose-derived carbon skeletons into amino acids, which are then joined to form proteins. Magnesium is used for chlorophyll, not amino acids.",
            difficulty: "core",
            hints: [
              "Amino acids and proteins all contain nitrogen.",
              "Which ion is a source of nitrogen from the soil?",
              "Magnesium is linked to chlorophyll, not proteins.",
            ],
            guideRef: "Uses of Glucose and Role of Chlorophyll",
          },
          {
            id: "bio-plant-nutrition-bm1-09",
            question:
              "Counting atoms in 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂, how many oxygen atoms are present on each side?",
            options: ["12", "16", "18", "24"],
            answerIndex: 2,
            explanation:
              "Left side: 6CO₂ gives 12 O and 6H₂O gives 6 O = 18 O. Right side: C₆H₁₂O₆ gives 6 O and 6O₂ gives 12 O = 18 O. The equation is balanced with 18 oxygen atoms on each side.",
            difficulty: "challenge",
            hints: [
              "Count oxygens separately in each formula, then add.",
              "Left: (6 × 2) from CO₂ plus (6 × 1) from H₂O.",
              "Right: 6 from glucose plus (6 × 2) from O₂.",
              "Both sides must be equal if the equation is balanced.",
            ],
            strategy: "count atoms element by element",
            guideRef: "The Photosynthesis Equation",
          },
          {
            id: "bio-plant-nutrition-bm1-10",
            question:
              "A plant is kept in continuous bright light. Over 24 hours, why might the mass of starch in its leaves still rise and fall rather than only rise?",
            options: [
              "Starch is constantly broken down and respired or exported as sucrose, even while photosynthesis adds more",
              "Photosynthesis stops completely once enough starch is made",
              "Chlorophyll is destroyed and remade in a daily cycle",
              "Starch is converted directly back into light energy",
            ],
            answerIndex: 0,
            explanation:
              "Leaf starch is a dynamic store: photosynthesis adds to it while respiration and conversion to sucrose for export remove it. The net level reflects the balance of these processes, so it can fall even in light if export and respiration exceed production. Energy cannot be converted back from starch into light.",
            difficulty: "challenge",
            hints: [
              "Starch level is a balance between what is added and what is removed.",
              "What removes glucose/starch from a leaf even in daylight?",
              "Respiration and export to phloem both consume sugars continuously.",
              "Net change = production − (respiration + export).",
            ],
            strategy: "think of stores as a balance of inputs and outputs",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
          },
        ],
      },

      // ── MCQ PAPER 2 ── leaf structure, gas exchange, adaptations
      {
        id: "bio-plant-nutrition-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description:
          "Leaf structure, adaptations for photosynthesis, gas exchange and stomata.",
        questions: [
          {
            id: "bio-plant-nutrition-bm2-01",
            question:
              "Which leaf tissue is adapted for maximum light absorption by being tightly packed with chloroplasts near the upper surface?",
            options: [
              "Spongy mesophyll",
              "Palisade mesophyll",
              "Lower epidermis",
              "Xylem",
            ],
            answerIndex: 1,
            explanation:
              "Palisade mesophyll cells are column-shaped, tightly packed and packed with chloroplasts, sitting just below the transparent upper epidermis to catch the most light. Spongy mesophyll has fewer chloroplasts and is specialised for gas exchange.",
            difficulty: "warmup",
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bm2-02",
            question: "What is the main function of the waxy cuticle of a leaf?",
            options: [
              "To absorb light energy for photosynthesis",
              "To reduce water loss while allowing light through",
              "To carry out gas exchange with the air",
              "To transport sucrose to the roots",
            ],
            answerIndex: 1,
            explanation:
              "The waxy cuticle is transparent and waterproof: it lets light reach the photosynthetic cells below while reducing evaporation of water from the upper surface. It contains no chlorophyll and does not transport substances.",
            difficulty: "warmup",
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bm2-03",
            question:
              "What is the main role of the air spaces in the spongy mesophyll?",
            options: [
              "To store starch made by photosynthesis",
              "To allow rapid diffusion of carbon dioxide and oxygen through the leaf",
              "To strengthen and support the leaf",
              "To absorb red and blue light",
            ],
            answerIndex: 1,
            explanation:
              "The interconnected air spaces let CO₂ diffuse quickly to the photosynthesising cells and O₂ diffuse out, and they provide a large moist surface area for gas exchange. They are not for storage, support or light absorption.",
            difficulty: "warmup",
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bm2-04",
            question:
              "Through which structures does most carbon dioxide enter a leaf?",
            options: [
              "The xylem vessels",
              "The waxy cuticle",
              "The stomata",
              "The palisade cell walls directly from the upper surface",
            ],
            answerIndex: 2,
            explanation:
              "CO₂ enters by diffusion through the stomata, mostly on the lower epidermis, then travels through the air spaces of the spongy mesophyll to the cells. The waxy cuticle blocks gas movement, and xylem carries water, not CO₂.",
            difficulty: "core",
            hints: [
              "Gases must cross a pore, not a waterproof layer.",
              "These pores are controlled by guard cells.",
              "They are found mainly on the lower epidermis.",
            ],
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bm2-05",
            question:
              "During the day in bright light, what is the NET movement of gases through the stomata of a photosynthesising leaf?",
            options: [
              "Net CO₂ out and net O₂ in",
              "Net CO₂ in and net O₂ out",
              "Only water vapour moves; no gas exchange occurs",
              "Equal amounts of CO₂ and O₂ move in",
            ],
            answerIndex: 1,
            explanation:
              "In bright light, photosynthesis exceeds respiration, so the leaf takes in more CO₂ than it releases and gives out more O₂ than it uses. The net flow is CO₂ in and O₂ out. (At night, with no photosynthesis, the net flow reverses.)",
            difficulty: "core",
            hints: [
              "In bright light, which process dominates: photosynthesis or respiration?",
              "Photosynthesis uses CO₂ and makes O₂.",
              "Net flow is the difference between photosynthesis and respiration.",
            ],
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bm2-06",
            question:
              "Why does the upper epidermis of a leaf contain few or no chloroplasts?",
            options: [
              "It is too far from the veins to receive water",
              "It is transparent so that light can pass through to the palisade layer below",
              "It is responsible only for gas exchange",
              "It is always in shade",
            ],
            answerIndex: 1,
            explanation:
              "The upper epidermis is a transparent protective layer; having no chloroplasts lets light pass straight through to the palisade mesophyll, where most photosynthesis happens. It is not primarily a gas-exchange or water-distributing layer.",
            difficulty: "core",
            hints: [
              "Where in the leaf does most photosynthesis happen?",
              "Light must reach that layer.",
              "A transparent layer above helps light penetrate.",
            ],
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bm2-07",
            question:
              "Which feature increases the surface area for the absorption of light and CO₂ by a leaf?",
            options: [
              "Its thick waxy cuticle",
              "Its broad, flat, thin lamina (leaf blade)",
              "Its woody stem",
              "Its deep root system",
            ],
            answerIndex: 1,
            explanation:
              "A broad, flat, thin lamina gives a large surface area for capturing light and absorbing CO₂, and keeps diffusion distances short. The cuticle reduces water loss, while stems and roots are not light-capturing surfaces.",
            difficulty: "core",
            hints: [
              "Think about the overall shape of a leaf.",
              "A large flat surface catches more light.",
              "Thin means short diffusion distances for gases.",
            ],
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bm2-08",
            question:
              "What causes guard cells to open the stoma during the day?",
            options: [
              "They lose water, become flaccid and pull apart",
              "They gain water by osmosis, become turgid and bow outwards",
              "They actively pump CO₂ into the leaf",
              "They are pushed open by the waxy cuticle",
            ],
            answerIndex: 1,
            explanation:
              "When guard cells take up water by osmosis they become turgid. Because their inner walls are thicker and less elastic, they bow outwards, opening the pore between them. Losing water makes them flaccid and closes the stoma.",
            difficulty: "core",
            hints: [
              "Open stomata occur when guard cells are full of water.",
              "Water entering a cell by osmosis makes it turgid.",
              "Uneven wall thickness makes turgid guard cells curve apart.",
            ],
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bm2-09",
            question:
              "A leaf adapted to deep shade is often larger and thinner with chloroplasts spread through more layers than a leaf in full sun. Which is the best explanation?",
            options: [
              "Larger, thinner leaves capture the limited available light over a bigger area, and spread-out chloroplasts intercept more of the weak light",
              "Shade leaves photosynthesise faster than sun leaves at all light intensities",
              "Thin leaves lose less water, which is the main limit in shade",
              "Shade leaves do not need stomata because there is little light",
            ],
            answerIndex: 0,
            explanation:
              "In low light, light is the limiting factor, so maximising light capture matters most. A larger, thinner blade with chloroplasts through more cell layers intercepts more of the dim light. Shade leaves are not faster at high light, and all leaves need stomata for CO₂.",
            difficulty: "challenge",
            hints: [
              "In deep shade, what is the limiting factor?",
              "How would you redesign a leaf to catch more of very weak light?",
              "Bigger area and more light-absorbing layers help capture scarce photons.",
              "Speed at high light is not relevant where light is always low.",
            ],
            strategy: "match the adaptation to the limiting factor",
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bm2-10",
            question:
              "Removing the lower epidermis of a leaf (so the spongy mesophyll is exposed) would most directly increase which process, assuming the leaf survives?",
            options: [
              "Light absorption by the palisade layer",
              "Water loss by transpiration and gas diffusion, because the stomatal/cuticle barrier is gone",
              "The rate of the light-independent reactions only",
              "Active transport of mineral ions in the root",
            ],
            answerIndex: 1,
            explanation:
              "The lower epidermis with its cuticle and controllable stomata regulates water loss and gas exchange. Exposing the spongy mesophyll directly to air removes that barrier, so water vapour and gases move much more freely (faster, uncontrolled diffusion and water loss). It does not change light absorption or root uptake directly.",
            difficulty: "challenge",
            hints: [
              "What barrier does the lower epidermis provide?",
              "Stomata normally CONTROL gas and water movement.",
              "Remove the barrier and diffusion becomes uncontrolled.",
              "Think about the moist exposed cell surfaces meeting dry air.",
            ],
            strategy: "predict the effect of removing a structure",
            guideRef: "Leaf Structure and Adaptations",
          },
        ],
      },

      // ── MCQ PAPER 3 ── limiting factors and graph interpretation
      {
        id: "bio-plant-nutrition-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description:
          "Limiting factors of photosynthesis, temperature effects, and graph interpretation.",
        questions: [
          {
            id: "bio-plant-nutrition-bm3-01",
            question: "Which three factors can limit the rate of photosynthesis?",
            options: [
              "Light intensity, oxygen concentration and pH",
              "Light intensity, carbon dioxide concentration and temperature",
              "Water depth, wind speed and humidity",
              "Glucose concentration, oxygen concentration and light intensity",
            ],
            answerIndex: 1,
            explanation:
              "The three main limiting factors are light intensity, carbon dioxide concentration and temperature. Oxygen and glucose are products, not factors that limit the rate, and pH/wind are not standard IGCSE limiting factors.",
            difficulty: "warmup",
            guideRef: "Limiting Factors of Photosynthesis",
          },
          {
            id: "bio-plant-nutrition-bm3-02",
            question:
              "On a graph of rate of photosynthesis against light intensity, what does a flat plateau region indicate?",
            options: [
              "Light intensity is the limiting factor",
              "A different factor (CO₂ or temperature) has become the limiting factor",
              "The plant has stopped respiring",
              "Chlorophyll has run out",
            ],
            answerIndex: 1,
            explanation:
              "A plateau means increasing light no longer raises the rate, so light is no longer limiting — another factor such as CO₂ concentration or temperature now limits the rate. Plants always respire, and chlorophyll is not used up.",
            difficulty: "warmup",
            guideRef: "Limiting Factors of Photosynthesis",
          },
          {
            id: "bio-plant-nutrition-bm3-03",
            question:
              "Why do commercial greenhouse growers sometimes add extra carbon dioxide to the air?",
            options: [
              "To kill pests and diseases",
              "To increase the rate of photosynthesis and crop yield when CO₂ is limiting",
              "To reduce the temperature inside the greenhouse",
              "To replace the need for watering the plants",
            ],
            answerIndex: 1,
            explanation:
              "CO₂ is a reactant in photosynthesis. If light and temperature are already favourable, CO₂ can be limiting, so raising it increases the photosynthesis rate and therefore growth and yield. It does not control pests, temperature or watering.",
            difficulty: "warmup",
            guideRef: "Limiting Factors of Photosynthesis",
          },
          {
            id: "bio-plant-nutrition-bm3-04",
            question:
              "As temperature rises from 5 °C towards about 35 °C, the rate of photosynthesis increases. Why?",
            options: [
              "Enzymes are denatured, speeding up the reaction",
              "Molecules gain kinetic energy, so enzyme-controlled reactions speed up",
              "More light is absorbed at higher temperatures",
              "Carbon dioxide becomes more soluble, so less is available",
            ],
            answerIndex: 1,
            explanation:
              "Higher temperature gives molecules more kinetic energy, increasing the frequency of successful enzyme–substrate collisions, so enzyme-controlled reactions in photosynthesis speed up. Denaturing only happens above the optimum, and temperature does not increase light absorption.",
            difficulty: "core",
            hints: [
              "Photosynthesis involves enzymes.",
              "What does heat do to the movement of molecules?",
              "More kinetic energy means more frequent collisions.",
            ],
            guideRef: "Limiting Factors of Photosynthesis",
          },
          {
            id: "bio-plant-nutrition-bm3-05",
            question:
              "Above about 40 °C the rate of photosynthesis falls sharply. What is the main reason?",
            options: [
              "The plant runs out of carbon dioxide",
              "The enzymes controlling photosynthesis are denatured",
              "Light can no longer be absorbed by chlorophyll",
              "Glucose is produced too quickly to be stored",
            ],
            answerIndex: 1,
            explanation:
              "Above the optimum temperature, the high kinetic energy distorts the enzymes' active sites (denaturation), so substrates no longer fit and the reaction rate falls. This is a property of the enzymes, not of CO₂ supply or chlorophyll.",
            difficulty: "core",
            hints: [
              "What happens to enzymes at very high temperatures?",
              "The active site changes shape.",
              "If substrates no longer fit, the reaction slows or stops.",
            ],
            guideRef: "Limiting Factors of Photosynthesis",
          },
          {
            id: "bio-plant-nutrition-bm3-06",
            question:
              "Two curves of rate against light intensity are drawn: curve B (high CO₂) plateaus higher than curve A (low CO₂). What does this show?",
            options: [
              "Light intensity is the only limiting factor",
              "At high light intensities, CO₂ concentration is limiting the rate",
              "Temperature must be different for the two curves",
              "CO₂ has no effect on photosynthesis",
            ],
            answerIndex: 1,
            explanation:
              "If raising CO₂ lifts the plateau, then at high light intensities CO₂ was the factor limiting the rate; with more CO₂ available the rate can rise higher before something else limits it. This directly shows CO₂ acting as a limiting factor.",
            difficulty: "core",
            hints: [
              "The only difference between the curves is CO₂ level.",
              "If more CO₂ allows a higher rate, CO₂ was holding the rate back.",
              "Compare the heights of the plateaus.",
            ],
            guideRef: "Limiting Factors of Photosynthesis",
          },
          {
            id: "bio-plant-nutrition-bm3-07",
            question:
              "A plant is in conditions of high light and warm temperature but low CO₂. Which single change would most increase the rate of photosynthesis?",
            options: [
              "Increasing the light intensity further",
              "Increasing the carbon dioxide concentration",
              "Lowering the temperature",
              "Adding more water to the soil",
            ],
            answerIndex: 1,
            explanation:
              "Only the factor in shortest supply limits the rate. Here light and temperature are already high, so CO₂ is the limiting factor — increasing it will raise the rate. Adding more light or water will not help while CO₂ is limiting.",
            difficulty: "core",
            hints: [
              "Identify which factor is in shortest supply.",
              "Increasing a non-limiting factor does nothing.",
              "Light and temperature are already high.",
            ],
            strategy: "identify the limiting factor",
            guideRef: "Limiting Factors of Photosynthesis",
          },
          {
            id: "bio-plant-nutrition-bm3-08",
            question:
              "In a bubbler experiment, an Elodea plant produces 20 bubbles per minute at 10 cm from a lamp and 5 bubbles per minute at 20 cm. If the only factor changing is light intensity, this is consistent with which relationship between intensity and distance?",
            options: [
              "Intensity is proportional to distance",
              "Intensity is proportional to 1 ÷ distance",
              "Intensity is proportional to 1 ÷ distance²",
              "Intensity does not depend on distance",
            ],
            answerIndex: 2,
            explanation:
              "Doubling the distance from 10 cm to 20 cm quarters the light intensity (inverse-square law: intensity ∝ 1/distance²). The bubble rate falling from 20 to 5 per minute (a quarter) matches this, assuming light is limiting and rate ∝ intensity over this range.",
            difficulty: "challenge",
            hints: [
              "Distance doubled from 10 cm to 20 cm.",
              "The bubble rate fell to one quarter (20 → 5).",
              "A quarter from doubling distance suggests 1/distance².",
              "This is the inverse-square law for light.",
            ],
            strategy: "spot the inverse-square relationship",
            guideRef: "Limiting Factors of Photosynthesis",
          },
          {
            id: "bio-plant-nutrition-bm3-09",
            question:
              "At a given moment only one factor is described as 'the limiting factor'. Which statement is correct?",
            options: [
              "Increasing any factor will always increase the rate",
              "Only increasing the limiting factor will increase the rate; increasing the others will not",
              "All three factors limit the rate at the same time",
              "The limiting factor is always carbon dioxide",
            ],
            answerIndex: 1,
            explanation:
              "The limiting factor is the one in shortest supply that sets the maximum rate. Only by increasing it can the rate rise; increasing factors that are already in excess has no effect until the limiting one is changed.",
            difficulty: "core",
            hints: [
              "The limiting factor is the bottleneck.",
              "Adding more of something already in excess does nothing.",
              "Which factor limits depends on the conditions, not always CO₂.",
            ],
            guideRef: "Limiting Factors of Photosynthesis",
          },
          {
            id: "bio-plant-nutrition-bm3-10",
            question:
              "An Elodea plant gives 12 bubbles per minute at 25 °C and 24 bubbles per minute at 35 °C, but only 2 bubbles per minute at 45 °C. Which statement best explains the full pattern?",
            options: [
              "Rate always increases with temperature",
              "Rate roughly doubles from 25 to 35 °C as enzymes work faster, then falls at 45 °C as enzymes denature",
              "Light became limiting only at 45 °C",
              "Bubbles are oxygen, so more bubbles mean less photosynthesis",
            ],
            answerIndex: 1,
            explanation:
              "From 25 to 35 °C the rate rises (here it roughly doubles) because higher kinetic energy speeds enzyme-controlled reactions up to the optimum. At 45 °C the rate collapses to 2 because the enzymes are denatured above their optimum. The bubbles are oxygen, and more bubbles mean MORE photosynthesis.",
            difficulty: "challenge",
            hints: [
              "Compare 25 °C and 35 °C — what happens to the rate?",
              "Then look at the big drop at 45 °C.",
              "Below the optimum, heat speeds enzyme reactions; above it, they denature.",
              "More oxygen bubbles indicate faster photosynthesis.",
            ],
            strategy: "describe the trend then explain each part",
            guideRef: "Limiting Factors of Photosynthesis",
          },
        ],
      },

      // ── MCQ PAPER 4 ── experiments and mineral nutrition
      {
        id: "bio-plant-nutrition-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description:
          "Starch-test method, controlled photosynthesis experiments, controls and mineral nutrition.",
        questions: [
          {
            id: "bio-plant-nutrition-bm4-01",
            question:
              "Which colour change with iodine solution shows that starch is present in a leaf?",
            options: [
              "Orange-brown to blue-black",
              "Blue-black to colourless",
              "Green to red",
              "Colourless to pink",
            ],
            answerIndex: 0,
            explanation:
              "Iodine solution is orange-brown and turns blue-black where starch is present. No colour change (it stays orange-brown) means no starch. The green/red and pink changes are not the iodine starch test.",
            difficulty: "warmup",
            guideRef:
              "Experiments: Testing for Starch and Controlled Investigations",
          },
          {
            id: "bio-plant-nutrition-bm4-02",
            question:
              "Why is a plant 'destarched' by keeping it in the dark for 24–48 hours before a photosynthesis experiment?",
            options: [
              "To kill the leaf cells before testing",
              "To use up existing starch so any new starch must come from the experiment",
              "To make the chlorophyll dissolve more easily",
              "To increase the amount of CO₂ in the leaf",
            ],
            answerIndex: 1,
            explanation:
              "Destarching removes starch already stored in the leaf, so a positive iodine test afterwards can only be due to photosynthesis during the experiment. It does not kill cells, dissolve chlorophyll or change CO₂.",
            difficulty: "warmup",
            guideRef:
              "Experiments: Testing for Starch and Controlled Investigations",
          },
          {
            id: "bio-plant-nutrition-bm4-03",
            question:
              "In the leaf starch test, why is the leaf placed in hot ethanol?",
            options: [
              "To kill the leaf",
              "To remove (decolourise) the chlorophyll so the iodine colour can be seen",
              "To add starch to the leaf",
              "To supply carbon dioxide",
            ],
            answerIndex: 1,
            explanation:
              "Hot ethanol dissolves out the green chlorophyll, leaving the leaf pale so the blue-black colour with iodine is clearly visible. The leaf is killed earlier by boiling water; ethanol does not add starch or CO₂.",
            difficulty: "core",
            hints: [
              "Green chlorophyll would hide the iodine colour.",
              "Ethanol is a solvent for the green pigment.",
              "We want the leaf pale before adding iodine.",
            ],
            guideRef:
              "Experiments: Testing for Starch and Controlled Investigations",
          },
          {
            id: "bio-plant-nutrition-bm4-04",
            question:
              "Why must the ethanol be heated using a water bath rather than directly over a Bunsen flame?",
            options: [
              "Ethanol freezes over a direct flame",
              "Ethanol is flammable and could catch fire if heated directly",
              "A water bath makes the ethanol boil faster",
              "Direct heating destroys the starch",
            ],
            answerIndex: 1,
            explanation:
              "Ethanol is highly flammable, so heating it directly over a naked flame risks igniting the vapour. A hot water bath heats it safely without a flame near the ethanol. The reason is a safety one, not about freezing or starch.",
            difficulty: "core",
            hints: [
              "Think about a safety hazard of ethanol.",
              "Ethanol vapour catches fire easily.",
              "A water bath keeps the flame away from the ethanol.",
            ],
            guideRef:
              "Experiments: Testing for Starch and Controlled Investigations",
          },
          {
            id: "bio-plant-nutrition-bm4-05",
            question:
              "A destarched variegated leaf (green and white areas) is left in light, then tested with iodine. Which result is expected?",
            options: [
              "The whole leaf turns blue-black",
              "Only the green areas turn blue-black; the white areas stay orange-brown",
              "Only the white areas turn blue-black",
              "The whole leaf stays orange-brown",
            ],
            answerIndex: 1,
            explanation:
              "Only the green areas contain chlorophyll and can photosynthesise to make starch, so only they turn blue-black. The white areas lack chlorophyll, make no starch, and stay orange-brown. This shows chlorophyll is needed for photosynthesis.",
            difficulty: "core",
            hints: [
              "Which parts of the leaf contain chlorophyll?",
              "Only chlorophyll-containing cells can photosynthesise.",
              "Starch forms only where photosynthesis occurred.",
            ],
            guideRef:
              "Experiments: Testing for Starch and Controlled Investigations",
          },
          {
            id: "bio-plant-nutrition-bm4-06",
            question:
              "In an experiment to show light is needed, part of a destarched leaf is covered with opaque foil while it stays attached to the plant in the light. What is the role of the uncovered part of the SAME leaf?",
            options: [
              "It is a distraction with no purpose",
              "It acts as a control showing starch forms where light reaches",
              "It absorbs the carbon dioxide for the covered part",
              "It removes chlorophyll from the leaf",
            ],
            answerIndex: 1,
            explanation:
              "The uncovered part is the control: it experiences the same plant, temperature and CO₂ but does receive light, so it should make starch (blue-black). Comparing it with the foil-covered part (no starch) shows light is the variable responsible.",
            difficulty: "core",
            hints: [
              "A control differs in only the one variable being tested.",
              "Here the variable is light.",
              "The lit part shows what happens WHEN light is present.",
            ],
            strategy: "use a control to isolate one variable",
            guideRef:
              "Experiments: Testing for Starch and Controlled Investigations",
          },
          {
            id: "bio-plant-nutrition-bm4-07",
            question:
              "In a sealed flask experiment, sodium hydroxide solution is placed beside a destarched leaf. What is the purpose of the sodium hydroxide?",
            options: [
              "To provide extra carbon dioxide",
              "To absorb carbon dioxide so the leaf is deprived of it",
              "To supply light energy",
              "To kill any bacteria on the leaf",
            ],
            answerIndex: 1,
            explanation:
              "Sodium hydroxide absorbs CO₂ from the air in the flask, depriving the leaf of this reactant. With no CO₂, no starch is made, so the leaf stays orange-brown — showing CO₂ is needed for photosynthesis.",
            difficulty: "core",
            hints: [
              "Which reactant is being removed in this experiment?",
              "NaOH reacts with and removes CO₂.",
              "No CO₂ means photosynthesis cannot occur.",
            ],
            guideRef:
              "Experiments: Testing for Starch and Controlled Investigations",
          },
          {
            id: "bio-plant-nutrition-bm4-08",
            question:
              "Which mineral ion deficiency is best matched with 'yellow leaves AND stunted growth'?",
            options: [
              "Magnesium ion deficiency",
              "Nitrate ion deficiency",
              "Excess of oxygen",
              "Excess of glucose",
            ],
            answerIndex: 1,
            explanation:
              "Nitrate ions are needed for amino acids and proteins; without them growth is stunted (poor protein synthesis) and older leaves yellow. Magnesium deficiency mainly causes yellowing without the same severe stunting. Excess oxygen or glucose are not deficiency states.",
            difficulty: "core",
            hints: [
              "Which ion is needed for proteins and growth?",
              "No protein synthesis → poor growth.",
              "Stunting plus yellowing points to one specific ion.",
            ],
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
          },
          {
            id: "bio-plant-nutrition-bm4-09",
            question:
              "A grower wants to test whether magnesium is essential for healthy leaf colour. Which experimental design is most valid?",
            options: [
              "Grow one plant in soil and observe it",
              "Grow plants in a complete mineral solution and an identical solution lacking only magnesium, keeping all other conditions the same",
              "Grow plants in solutions lacking both magnesium and nitrate, and compare with soil-grown plants",
              "Grow plants in bright and dim light with normal soil",
            ],
            answerIndex: 1,
            explanation:
              "A valid test changes only one variable: the presence of magnesium. Comparing a complete solution with one identical except for missing magnesium isolates magnesium's effect. Removing two ions, using soil, or varying light would confound the result.",
            difficulty: "challenge",
            hints: [
              "Change only ONE variable.",
              "You need a 'complete' control and a 'minus magnesium' treatment.",
              "Everything else (light, temperature, other ions) must be identical.",
              "Removing two ions at once confuses which one matters.",
            ],
            strategy: "control variables to isolate one factor",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
          },
          {
            id: "bio-plant-nutrition-bm4-10",
            question:
              "Mineral ions are usually more concentrated inside root cells than in the surrounding soil water. How are they taken up, and what does this require?",
            options: [
              "By diffusion, which requires no energy",
              "By active transport, which requires energy from respiration (ATP)",
              "By osmosis, which moves the ions down a gradient",
              "By photosynthesis in the root cells",
            ],
            answerIndex: 1,
            explanation:
              "Because the ions move from a lower concentration (soil) to a higher concentration (inside the cell), they are absorbed against the gradient by active transport, which needs energy (ATP) from respiration. Diffusion and osmosis move substances down gradients; roots do not photosynthesise.",
            difficulty: "challenge",
            hints: [
              "Is the movement with or against the concentration gradient?",
              "Moving against a gradient needs energy.",
              "Which process uses ATP to move ions?",
              "Osmosis is for water; diffusion is passive.",
            ],
            strategy: "link direction of movement to the transport process",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
          },
        ],
      },
    ],
    qaPapers: [
      // ── QA PAPER 1 ── equations, chlorophyll, uses of glucose
      {
        id: "bio-plant-nutrition-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description:
          "Photosynthesis equations, the role of chlorophyll and the fate of glucose.",
        questions: [
          {
            id: "bio-plant-nutrition-bq1-01",
            question:
              "State the word equation for photosynthesis and name the two conditions needed for it to occur. [3]",
            marks: 3,
            modelAnswer:
              "Word equation: carbon dioxide + water → glucose + oxygen. The two conditions needed are light (light energy) and chlorophyll.",
            markScheme: [
              "carbon dioxide + water → glucose + oxygen (correct reactants and products)",
              "light energy / light",
              "chlorophyll",
            ],
            commonError:
              "Writing oxygen or glucose as a reactant, or listing chlorophyll as a reactant rather than a condition.",
            difficulty: "warmup",
            guideRef: "The Photosynthesis Equation",
          },
          {
            id: "bio-plant-nutrition-bq1-02",
            question:
              "Write the balanced symbol equation for photosynthesis and show how the carbon and hydrogen atoms balance on each side. [4]",
            marks: 4,
            modelAnswer:
              "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.\nCarbon: left has 6 C (from 6CO₂); right has 6 C (in C₆H₁₂O₆) — balanced.\nHydrogen: left has 12 H (from 6H₂O); right has 12 H (in C₆H₁₂O₆) — balanced.",
            markScheme: [
              "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (fully correct and balanced)",
              "carbon: 6 on left (6CO₂) and 6 on right (glucose)",
              "hydrogen: 12 on left (6H₂O) and 12 on right (glucose)",
              "states atoms are conserved / equal on both sides",
            ],
            commonError:
              "Forgetting the coefficient 6 in front of CO₂, H₂O and O₂, or writing C₆H₁₂O₆ with the wrong subscripts.",
            difficulty: "core",
            hints: [
              "Start from glucose C₆H₁₂O₆ and work out how many CO₂ and H₂O are needed.",
              "6 carbons in glucose means 6 CO₂.",
              "12 hydrogens in glucose means 6 H₂O.",
              "Then count oxygens to find the number of O₂.",
            ],
            strategy: "balance the equation",
            guideRef: "The Photosynthesis Equation",
            solutions: [
              {
                label: "Balancing the equation step by step",
                steps: [
                  "Write the unbalanced skeleton: CO₂ + H₂O → C₆H₁₂O₆ + O₂.",
                  "Balance carbon: glucose has 6 C, so put 6 in front of CO₂ → 6CO₂.",
                  "Balance hydrogen: glucose has 12 H, so put 6 in front of H₂O → 6H₂O (6 × 2 = 12 H).",
                  "Count oxygen on the left: 6CO₂ gives 12 O and 6H₂O gives 6 O = 18 O.",
                  "Right side glucose holds 6 O, leaving 12 O for oxygen gas, so 6O₂ (6 × 2 = 12 O).",
                  "Final balanced equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂, with 6 C, 12 H and 18 O on each side.",
                ],
              },
            ],
          },
          {
            id: "bio-plant-nutrition-bq1-03",
            question:
              "Explain the role of chlorophyll in photosynthesis and why most leaves appear green. [3]",
            marks: 3,
            modelAnswer:
              "Chlorophyll is a green pigment in chloroplasts that absorbs light energy (mainly red and blue wavelengths) and transfers it to drive the chemical reactions that convert CO₂ and water into glucose. Leaves appear green because chlorophyll reflects green light rather than absorbing it, so green is the colour that reaches our eyes.",
            markScheme: [
              "chlorophyll absorbs light energy",
              "transfers light energy to chemical energy / drives the reactions making glucose",
              "leaves look green because green light is reflected / not absorbed",
            ],
            commonError:
              "Saying chlorophyll absorbs green light — it reflects green, which is why we see green.",
            difficulty: "warmup",
            guideRef: "Uses of Glucose and Role of Chlorophyll",
          },
          {
            id: "bio-plant-nutrition-bq1-04",
            question:
              "List four different uses or fates of the glucose made by photosynthesis in a plant, and for each give a reason or product. [4]",
            marks: 4,
            modelAnswer:
              "1. Respiration — glucose is broken down to release energy for cell processes. 2. Converted to starch — an insoluble store that does not affect osmosis. 3. Converted to cellulose — to build cell walls for growth and support. 4. Converted to sucrose — a soluble sugar transported in the phloem to other parts of the plant. (Also accept: combined with nitrate to make amino acids/proteins; converted to fats/oils for storage in seeds.)",
            markScheme: [
              "respiration / released energy",
              "starch for storage (insoluble)",
              "cellulose for cell walls",
              "sucrose for transport in phloem / amino acids with nitrate / fats and oils for storage",
            ],
            commonError:
              "Giving 'making oxygen' or 'absorbed by roots' — oxygen is a by-product and glucose is not absorbed from soil.",
            difficulty: "core",
            hints: [
              "Think about energy, storage, building, and transport.",
              "Which insoluble polymer is the storage form?",
              "Which polymer builds the cell wall?",
              "Which soluble sugar moves in the phloem?",
            ],
            guideRef: "Uses of Glucose and Role of Chlorophyll",
          },
          {
            id: "bio-plant-nutrition-bq1-05",
            question:
              "Explain why plants store carbohydrate as starch rather than as glucose. [3]",
            marks: 3,
            modelAnswer:
              "Starch is insoluble, so it does not dissolve in the cell cytoplasm and does not affect the water potential of the cell — it will not draw water in by osmosis. Glucose is soluble and would lower the water potential, causing water to enter by osmosis and possibly damaging the cell. Starch is also a compact polymer, storing many glucose units in a small space.",
            markScheme: [
              "starch is insoluble",
              "does not affect water potential / does not cause osmosis (water uptake)",
              "glucose is soluble and would draw in water by osmosis / starch is compact store",
            ],
            commonError:
              "Saying starch 'contains more energy' — the energy comes from the glucose units; the real advantage is that it is insoluble and osmotically inactive.",
            difficulty: "core",
            hints: [
              "Compare the solubility of starch and glucose.",
              "What would a dissolved sugar do to the cell's water balance?",
              "Insoluble means osmotically inactive.",
            ],
            guideRef: "Uses of Glucose and Role of Chlorophyll",
          },
          {
            id: "bio-plant-nutrition-bq1-06",
            question:
              "Glucose can be combined with nitrate ions in a plant. Describe what is made, and explain why this product is essential for the plant. [3]",
            marks: 3,
            modelAnswer:
              "Glucose provides carbon-containing skeletons which, combined with nitrate ions (a source of nitrogen), are used to make amino acids. Amino acids are joined together to form proteins. Proteins are essential because they are needed for growth (new cells), and to make enzymes that control the plant's metabolic reactions.",
            markScheme: [
              "amino acids are made (from glucose + nitrate)",
              "amino acids are joined to make proteins",
              "proteins needed for growth / making enzymes",
            ],
            commonError:
              "Saying nitrate is used to make chlorophyll — that is magnesium. Nitrate is for amino acids and proteins.",
            difficulty: "core",
            hints: [
              "Nitrate supplies nitrogen — what nitrogen-containing molecules are built?",
              "Amino acids link up to form which large molecules?",
              "Why does a plant need proteins?",
            ],
            guideRef: "Uses of Glucose and Role of Chlorophyll",
          },
          {
            id: "bio-plant-nutrition-bq1-07",
            question:
              "A student claims, 'Plants only photosynthesise; they do not respire.' Use your knowledge of how glucose is used to explain why this statement is wrong. [3]",
            marks: 3,
            modelAnswer:
              "Plants respire all the time, day and night, like all living organisms. One of the main uses of the glucose made in photosynthesis is to be broken down in respiration to release energy for processes such as active transport of mineral ions and protein synthesis. In the light, photosynthesis usually exceeds respiration, but respiration never stops, so the statement is wrong.",
            markScheme: [
              "plants respire (all the time / day and night)",
              "glucose is used in respiration to release energy",
              "energy needed for processes e.g. active transport / growth / synthesis",
            ],
            commonError:
              "Thinking plants respire only at night. They respire continuously; in light, photosynthesis simply outpaces it.",
            difficulty: "core",
            hints: [
              "Do all living things need energy from respiration?",
              "One fate of glucose is to be respired.",
              "Photosynthesis and respiration happen at the same time in the light.",
            ],
            guideRef: "Uses of Glucose and Role of Chlorophyll",
          },
          {
            id: "bio-plant-nutrition-bq1-08",
            question:
              "Oxygen produced in photosynthesis comes from the splitting of water. A plant is given water containing a heavy isotope of oxygen. Predict where this labelled oxygen will appear and explain your reasoning. [4]",
            marks: 4,
            modelAnswer:
              "The labelled (heavy) oxygen will appear in the oxygen gas released, not in the glucose. In photosynthesis, water is split and the oxygen atoms from water are released as oxygen gas (O₂). The oxygen atoms that end up in glucose and the carbon come from carbon dioxide. So if the water is labelled, the O₂ given off will carry the label, showing that the oxygen by-product originates from water, not from carbon dioxide.",
            markScheme: [
              "labelled oxygen appears in the oxygen gas (O₂) released",
              "water is split in photosynthesis",
              "oxygen released comes from water (not from CO₂)",
              "carbon/oxygen in glucose comes from carbon dioxide",
            ],
            commonError:
              "Assuming the oxygen released comes from carbon dioxide. Isotope experiments show it comes from water.",
            difficulty: "challenge",
            hints: [
              "Where does the oxygen gas released in photosynthesis come from?",
              "Water is split during the reaction.",
              "Track the labelled atoms from water to a product.",
              "Glucose's atoms come from CO₂; the released O₂ comes from water.",
            ],
            strategy: "follow the labelled atoms",
            guideRef: "The Photosynthesis Equation",
          },
          {
            id: "bio-plant-nutrition-bq1-09",
            question:
              "Photosynthesis and aerobic respiration are sometimes described as opposite processes. Compare them by giving their word equations and stating one further difference. [4]",
            marks: 4,
            modelAnswer:
              "Photosynthesis: carbon dioxide + water → glucose + oxygen (requires light energy and chlorophyll; stores energy in glucose). Aerobic respiration: glucose + oxygen → carbon dioxide + water (releases energy; occurs in all living cells, in the dark and light). A further difference: photosynthesis builds up glucose (anabolic/energy-storing) and only occurs in chlorophyll-containing cells in light, whereas respiration breaks glucose down (catabolic/energy-releasing) and occurs continuously in all cells.",
            markScheme: [
              "photosynthesis: carbon dioxide + water → glucose + oxygen",
              "respiration: glucose + oxygen → carbon dioxide + water",
              "photosynthesis stores energy / needs light; respiration releases energy",
              "respiration occurs in all cells continuously / photosynthesis only in light in chlorophyll-containing cells",
            ],
            commonError:
              "Reversing one of the equations incorrectly, or forgetting that respiration occurs in plants too, all the time.",
            difficulty: "challenge",
            hints: [
              "Write each word equation carefully — they are near-reverses.",
              "One stores energy, the other releases it.",
              "Think about which cells and when each process happens.",
            ],
            guideRef: "The Photosynthesis Equation",
          },
          {
            id: "bio-plant-nutrition-bq1-10",
            question:
              "Explain why the rate of photosynthesis in a sealed greenhouse might be highest in the morning and fall during a bright, still afternoon even though light is intense. [4]",
            marks: 4,
            modelAnswer:
              "In the morning, after a night of respiration by plants (and possibly soil organisms), the CO₂ concentration in the sealed greenhouse is relatively high, and light is rising, so photosynthesis is rapid. As the day continues, the plants use up CO₂ faster than it is replaced (the greenhouse is sealed and still, with little fresh air), so CO₂ concentration falls. CO₂ becomes the limiting factor, so even though light is intense, the rate of photosynthesis falls. Adding CO₂ or ventilating would relieve this limitation.",
            markScheme: [
              "CO₂ is higher in the morning (built up overnight by respiration)",
              "plants use up CO₂ during the day faster than it is replaced",
              "CO₂ concentration falls / becomes the limiting factor",
              "so rate falls despite intense light / adding CO₂ would help",
            ],
            commonError:
              "Blaming the light for falling, when light is intense — the limiting factor here is the depleting CO₂.",
            difficulty: "challenge",
            hints: [
              "What is the CO₂ level like after a night of respiration?",
              "In a sealed greenhouse, what happens to CO₂ as the plants photosynthesise all day?",
              "If light is high but rate falls, which factor must be limiting?",
              "How could the grower fix the problem?",
            ],
            strategy: "identify the limiting factor",
            guideRef: "Limiting Factors of Photosynthesis",
          },
        ],
      },

      // ── QA PAPER 2 ── leaf structure and adaptations
      {
        id: "bio-plant-nutrition-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description:
          "Leaf structure, adaptations for photosynthesis and gas exchange.",
        questions: [
          {
            id: "bio-plant-nutrition-bq2-01",
            question:
              "Name the leaf tissue where most photosynthesis occurs and give two features that adapt it for this role. [3]",
            marks: 3,
            modelAnswer:
              "Most photosynthesis occurs in the palisade mesophyll. Two adaptations: (1) the cells contain many chloroplasts (so they absorb a lot of light); (2) they are tightly packed in a column shape near the upper surface, so they receive the most light. (Also accept: positioned just below the transparent upper epidermis.)",
            markScheme: [
              "palisade mesophyll",
              "many chloroplasts (to absorb light)",
              "tightly packed / column-shaped / near the upper surface for maximum light",
            ],
            commonError:
              "Naming the spongy mesophyll (which is mainly for gas exchange) instead of the palisade layer.",
            difficulty: "warmup",
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bq2-02",
            question:
              "Describe how carbon dioxide gets from the air to a palisade cell inside a leaf. [3]",
            marks: 3,
            modelAnswer:
              "Carbon dioxide diffuses from the air into the leaf through the stomata (pores mainly on the lower epidermis). It then diffuses through the interconnected air spaces of the spongy mesophyll. From the air spaces it diffuses into the cells, dissolving in the moisture on the cell surfaces, and reaches the palisade cells where it is used in photosynthesis. It moves down a concentration gradient because photosynthesis keeps the internal CO₂ concentration low.",
            markScheme: [
              "enters through the stomata by diffusion",
              "diffuses through the air spaces of the spongy mesophyll",
              "diffuses down a concentration gradient into the cells (kept low by photosynthesis)",
            ],
            commonError:
              "Saying CO₂ is carried in the xylem — xylem carries water and ions, not CO₂. CO₂ moves by diffusion.",
            difficulty: "core",
            hints: [
              "Which pores let gases in?",
              "Then which spaces does it travel through?",
              "What keeps the gradient steep so CO₂ keeps diffusing in?",
            ],
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bq2-03",
            question:
              "Explain how each of the following adapts a leaf for efficient photosynthesis: (a) a broad, thin lamina; (b) air spaces in the spongy mesophyll; (c) a network of veins. [3]",
            marks: 3,
            modelAnswer:
              "(a) A broad, thin lamina gives a large surface area to capture light and absorb CO₂, and the thinness gives short diffusion distances for gases and light. (b) Air spaces in the spongy mesophyll allow rapid diffusion of CO₂ to the cells and O₂ away, and provide a large moist surface area for gas exchange. (c) The veins (vascular bundles) bring water (and mineral ions) to the cells in the xylem and carry away the sucrose made, in the phloem, supplying every part of the leaf.",
            markScheme: [
              "(a) broad/thin lamina = large surface area for light/CO₂ / short diffusion distance",
              "(b) air spaces allow rapid diffusion of gases / large surface area for gas exchange",
              "(c) veins bring water (xylem) and remove sucrose (phloem)",
            ],
            commonError:
              "Vaguely saying a feature 'helps photosynthesis' without explaining HOW (surface area, diffusion, supply).",
            difficulty: "core",
            hints: [
              "For each feature, ask: how does it help capture light, exchange gases, or supply materials?",
              "Surface area and diffusion distance matter for (a) and (b).",
              "Veins are about transport — what do xylem and phloem carry?",
            ],
            strategy: "function follows structure",
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bq2-04",
            question:
              "Explain why a leaf has a transparent waxy cuticle on its upper surface but most of its stomata on the lower surface. [4]",
            marks: 4,
            modelAnswer:
              "The waxy cuticle is transparent so light can pass through it to reach the palisade cells below, and it is waterproof so it reduces water loss by evaporation from the upper surface. Having most stomata on the lower surface, which is shaded and cooler than the upper surface, reduces the rate of evaporation of water vapour through them (less heating from direct sunlight), so the plant loses less water while still allowing CO₂ in and O₂ out for gas exchange.",
            markScheme: [
              "cuticle transparent — lets light through to palisade",
              "cuticle waterproof — reduces water loss by evaporation",
              "stomata on lower surface = cooler/shaded",
              "reduces evaporation/water loss while still allowing gas exchange",
            ],
            commonError:
              "Saying the cuticle 'prevents all water loss' — it reduces it. Also forgetting to explain why the underside reduces evaporation.",
            difficulty: "core",
            hints: [
              "Treat the cuticle and the stomatal position as two separate ideas.",
              "What two properties of the cuticle are useful?",
              "Why is the underside of a leaf cooler than the top?",
              "Cooler surface → slower evaporation.",
            ],
            strategy: "function follows structure",
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bq2-05",
            question:
              "Describe how guard cells open and close a stoma, and explain why a plant might close its stomata on a hot, dry day. [4]",
            marks: 4,
            modelAnswer:
              "When guard cells take in water by osmosis they become turgid; because their inner walls are thicker/less elastic, they bow outwards and the stoma opens. When they lose water they become flaccid, straighten and the stoma closes. On a hot, dry day the rate of water loss (transpiration) through open stomata is very high, so the plant may close its stomata to conserve water and avoid wilting, even though this also reduces CO₂ uptake and slows photosynthesis.",
            markScheme: [
              "guard cells gain water by osmosis → turgid → stoma opens (bow outwards)",
              "guard cells lose water → flaccid → stoma closes",
              "on a hot dry day water loss/transpiration is high",
              "closing stomata conserves water (accept: at the cost of reduced CO₂/photosynthesis)",
            ],
            commonError:
              "Saying guard cells 'pump air' to open — opening is due to osmotic water movement and turgor, not pumping air.",
            difficulty: "core",
            hints: [
              "Opening and closing depend on whether guard cells are turgid or flaccid.",
              "Osmosis moves the water in or out.",
              "What is the danger of leaving stomata open in hot dry conditions?",
              "There is a trade-off with CO₂ uptake.",
            ],
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bq2-06",
            question:
              "Describe the net direction of gas exchange in a leaf (a) in bright light and (b) in darkness, and explain the difference. [4]",
            marks: 4,
            modelAnswer:
              "(a) In bright light, photosynthesis occurs faster than respiration, so the leaf takes in more CO₂ than it releases and releases more O₂ than it uses: net CO₂ in, net O₂ out. (b) In darkness there is no photosynthesis, only respiration, so the leaf takes in O₂ and releases CO₂: net O₂ in, net CO₂ out. The difference arises because photosynthesis (which uses CO₂ and makes O₂) only happens in the light, while respiration (which uses O₂ and makes CO₂) happens all the time.",
            markScheme: [
              "(a) bright light: net CO₂ in, net O₂ out",
              "(b) darkness: net O₂ in, net CO₂ out",
              "photosynthesis only in light, faster than respiration → net flows reverse direction",
              "respiration occurs all the time / in both",
            ],
            commonError:
              "Forgetting that respiration continues in the light too; the NET flow is the difference between the two processes.",
            difficulty: "core",
            hints: [
              "In light, which process is faster?",
              "Net flow = photosynthesis minus respiration.",
              "In the dark, only respiration happens.",
              "State the net direction of each gas for both cases.",
            ],
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bq2-07",
            question:
              "At one point during the day, a leaf releases neither net CO₂ nor net O₂. Explain what is happening at this point. [3]",
            marks: 3,
            modelAnswer:
              "At this point (the compensation point), the rate of photosynthesis exactly equals the rate of respiration. The CO₂ released by respiration is exactly used up by photosynthesis, and the O₂ released by photosynthesis is exactly used by respiration, so there is no net exchange of either gas with the surroundings. This happens at low light intensities, for example at dawn or dusk.",
            markScheme: [
              "rate of photosynthesis equals rate of respiration",
              "CO₂ from respiration used by photosynthesis (and O₂ from photosynthesis used by respiration)",
              "occurs at low light / dawn or dusk (compensation point)",
            ],
            commonError:
              "Saying the plant has 'stopped' all activity — in fact both processes are occurring at equal rates, so they cancel.",
            difficulty: "challenge",
            hints: [
              "Two processes are happening at once.",
              "When would their rates be exactly equal?",
              "If they are equal, the gases each one makes are used by the other.",
            ],
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bq2-08",
            question:
              "Plants that live in very dry (desert) conditions often have thick cuticles, sunken stomata and fewer stomata. Explain how these features help such plants survive, and what trade-off they involve. [4]",
            marks: 4,
            modelAnswer:
              "A thick cuticle is more waterproof, so less water evaporates from the leaf surface. Sunken stomata sit in pits that trap a layer of humid air, reducing the concentration gradient for water vapour and so slowing transpiration. Having fewer stomata reduces the total area through which water can be lost. All these features reduce water loss, which is vital where water is scarce. The trade-off is that reducing stomatal openings and area also reduces the rate at which CO₂ can enter, which can limit photosynthesis and growth.",
            markScheme: [
              "thick cuticle reduces evaporation/water loss",
              "sunken stomata trap humid air / reduce water vapour gradient → less transpiration",
              "fewer stomata reduce area for water loss",
              "trade-off: less CO₂ uptake / slower photosynthesis",
            ],
            commonError:
              "Listing the features without explaining the mechanism, or forgetting the cost to CO₂ uptake.",
            difficulty: "challenge",
            hints: [
              "Each feature reduces water loss in a different way.",
              "How does trapping humid air slow transpiration?",
              "Fewer/smaller openings cut water loss — but what else do those openings let in?",
              "State the disadvantage clearly.",
            ],
            strategy: "match adaptation to environment, then state the trade-off",
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bq2-09",
            question:
              "Xylem and phloem are both found in the veins of a leaf. State what each transports and the direction of transport relative to the leaf. [3]",
            marks: 3,
            modelAnswer:
              "Xylem transports water and dissolved mineral ions from the roots up to the leaf (towards the leaf). Phloem transports dissolved sugars, mainly sucrose, made in the leaf away from the leaf to other parts of the plant (such as roots, growing points and storage organs). So xylem brings materials in for photosynthesis and phloem carries the products away.",
            markScheme: [
              "xylem: water (and mineral ions) towards/into the leaf",
              "phloem: sucrose/sugars away from the leaf",
              "correct directions (xylem in, phloem out) / to the rest of the plant",
            ],
            commonError:
              "Swapping xylem and phloem, or saying phloem carries water (that is xylem).",
            difficulty: "core",
            hints: [
              "Xylem and water both start with similar ideas — water and minerals.",
              "Phloem carries food (sucrose).",
              "Which way does each substance travel relative to the leaf?",
            ],
            guideRef: "Leaf Structure and Adaptations",
          },
          {
            id: "bio-plant-nutrition-bq2-10",
            question:
              "A student looks at the lower epidermis of a leaf under a microscope and counts 60 stomata in a measured area of 2 mm². Calculate the stomatal density per mm², and suggest one reason why a leaf grown in bright, dry conditions might have a higher stomatal density than one grown in shade. [3]",
            marks: 3,
            modelAnswer:
              "Stomatal density = number of stomata ÷ area = 60 ÷ 2 mm² = 30 stomata per mm². A leaf grown in bright conditions photosynthesises rapidly and so needs to take in CO₂ quickly; a higher stomatal density provides more pores for CO₂ to diffuse in (supporting a higher photosynthesis rate). (Accept: more stomata allow greater gas exchange to match the higher demand in bright light.)",
            markScheme: [
              "density = 60 ÷ 2 = 30 stomata per mm²",
              "bright light → faster photosynthesis → more CO₂ needed",
              "higher stomatal density allows more CO₂ uptake / gas exchange",
            ],
            commonError:
              "Forgetting to divide by the area (giving 60 instead of 30 per mm²), or omitting units.",
            difficulty: "core",
            hints: [
              "Density = count ÷ area.",
              "Divide 60 by 2 mm².",
              "Then link more stomata to faster gas exchange where light is high.",
            ],
            strategy: "show the division clearly with units",
            guideRef: "Leaf Structure and Adaptations",
            solutions: [
              {
                label: "Calculating stomatal density",
                steps: [
                  "Write the formula: stomatal density = number of stomata ÷ area examined.",
                  "Substitute the values: 60 stomata ÷ 2 mm².",
                  "Divide: 60 ÷ 2 = 30.",
                  "Add the unit: stomatal density = 30 stomata per mm².",
                ],
              },
            ],
          },
        ],
      },

      // ── QA PAPER 3 ── limiting factors, graphs, calculations
      {
        id: "bio-plant-nutrition-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description:
          "Limiting factors, rate calculations and interpretation of photosynthesis graphs.",
        questions: [
          {
            id: "bio-plant-nutrition-bq3-01",
            question:
              "Define the term 'limiting factor' and name the three main limiting factors of photosynthesis. [3]",
            marks: 3,
            modelAnswer:
              "A limiting factor is the factor that is in shortest supply and therefore controls (limits) the rate of a process; increasing any other factor will not increase the rate until the limiting factor is increased. The three main limiting factors of photosynthesis are light intensity, carbon dioxide concentration and temperature.",
            markScheme: [
              "limiting factor = factor in shortest supply that controls/limits the rate",
              "increasing other factors has no effect until the limiting one is changed",
              "light intensity, CO₂ concentration and temperature",
            ],
            commonError:
              "Listing oxygen or water availability instead of the three standard factors.",
            difficulty: "warmup",
            guideRef: "Limiting Factors of Photosynthesis",
          },
          {
            id: "bio-plant-nutrition-bq3-02",
            question:
              "A graph shows the rate of photosynthesis rising as light intensity increases, then levelling off to a plateau. Describe and explain the two parts of the graph. [4]",
            marks: 4,
            modelAnswer:
              "In the first (rising) part, as light intensity increases the rate of photosynthesis increases. Here light is the limiting factor — more light means more energy absorbed by chlorophyll, so the rate goes up. In the second (plateau) part, the rate stays constant even though light intensity keeps increasing. Here light is no longer limiting; a different factor (carbon dioxide concentration or temperature) has become the limiting factor, so adding more light has no further effect.",
            markScheme: [
              "rising part: rate increases as light increases",
              "light is the limiting factor in the rising part",
              "plateau: rate stays constant despite more light",
              "another factor (CO₂ or temperature) is now limiting",
            ],
            commonError:
              "Saying the plant is 'tired' or has 'used up the light' — light is not used up; another factor simply becomes limiting.",
            difficulty: "core",
            hints: [
              "Split the graph into the sloping part and the flat part.",
              "What is limiting where the line rises?",
              "What does a flat line tell you about light?",
              "Name the factor that takes over as limiting.",
            ],
            strategy: "identify the plateau",
            guideRef: "Limiting Factors of Photosynthesis",
          },
          {
            id: "bio-plant-nutrition-bq3-03",
            question:
              "An aquatic plant produces 90 bubbles of oxygen in 3 minutes at a steady rate. (a) Calculate the rate in bubbles per minute. [1] (b) Explain why counting bubbles is only an estimate of the true rate of photosynthesis. [2]",
            marks: 3,
            modelAnswer:
              "(a) Rate = 90 bubbles ÷ 3 minutes = 30 bubbles per minute. (b) Counting bubbles is only an estimate because bubbles can be different sizes, so the same number of bubbles may not contain the same volume of gas; some gas may dissolve in the water instead of forming bubbles; and bubbles may form too fast to count accurately. Measuring the volume of gas collected would be more reliable.",
            markScheme: [
              "(a) 90 ÷ 3 = 30 bubbles per minute",
              "(b) bubbles vary in size / same number ≠ same volume",
              "(b) some gas dissolves / hard to count fast / volume measurement more reliable",
            ],
            commonError:
              "Forgetting the unit 'per minute', or treating bubble count as an exact volume measure.",
            difficulty: "core",
            hints: [
              "Rate = quantity ÷ time.",
              "Divide 90 by 3.",
              "Think about whether every bubble is the same size.",
              "What would be a more accurate measurement?",
            ],
            strategy: "show the division and state limitations",
            guideRef: "Limiting Factors of Photosynthesis",
            solutions: [
              {
                label: "Calculating bubble rate",
                steps: [
                  "Write the formula: rate = number of bubbles ÷ time.",
                  "Substitute: 90 bubbles ÷ 3 minutes.",
                  "Divide: 90 ÷ 3 = 30.",
                  "State with units: 30 bubbles per minute.",
                ],
              },
            ],
          },
          {
            id: "bio-plant-nutrition-bq3-04",
            question:
              "Explain, in terms of enzymes, why the rate of photosynthesis increases as temperature rises to about 35 °C, but then falls sharply at higher temperatures. [4]",
            marks: 4,
            modelAnswer:
              "Photosynthesis is controlled by enzymes. As temperature rises towards the optimum (~35 °C), the molecules gain kinetic energy and move faster, so there are more frequent successful collisions between enzymes and substrates, increasing the reaction rate. Above the optimum temperature, the heat causes the enzymes to denature: the active site changes shape so the substrate no longer fits, so fewer reactions occur and the rate falls sharply. At very high temperatures most enzymes are denatured and photosynthesis almost stops.",
            markScheme: [
              "photosynthesis is enzyme-controlled",
              "higher temperature → more kinetic energy → more frequent collisions → faster rate (up to optimum)",
              "above optimum, enzymes denature / active site changes shape",
              "substrate no longer fits, so rate falls sharply",
            ],
            commonError:
              "Saying enzymes are 'killed' — enzymes are not alive; they are denatured (their shape is permanently changed).",
            difficulty: "core",
            hints: [
              "Photosynthesis depends on enzymes.",
              "What does heat do to molecular movement and collisions below the optimum?",
              "What happens to the enzyme's shape above the optimum?",
              "If the active site changes, can the substrate bind?",
            ],
            guideRef: "Limiting Factors of Photosynthesis",
          },
          {
            id: "bio-plant-nutrition-bq3-05",
            question:
              "Greenhouse growers may increase light, carbon dioxide and temperature to boost crop yield. Explain why simply increasing one of these may not increase the yield, and how a grower could find the most economical combination. [4]",
            marks: 4,
            modelAnswer:
              "Only the limiting factor controls the rate, so increasing a factor that is already in excess has no effect — for example, adding more light when CO₂ is limiting will not increase photosynthesis. To increase yield, the grower must raise whichever factor is currently limiting. To find the most economical combination, the grower could investigate by changing one factor at a time, keeping the others constant, and measuring growth or yield, until increasing a factor no longer improves yield. They balance the cost of providing each factor (heating, lighting, CO₂) against the extra yield gained, choosing the combination where all three are at levels that no longer limit growth without wasteful overspending.",
            markScheme: [
              "only the limiting factor controls the rate",
              "increasing a non-limiting factor has no effect",
              "must raise the factor that is currently limiting",
              "change one factor at a time / balance cost against extra yield",
            ],
            commonError:
              "Assuming 'more is always better' — increasing a factor that is not limiting wastes money without raising yield, and too much temperature denatures enzymes.",
            difficulty: "core",
            hints: [
              "What controls the rate at any moment?",
              "Why might extra light do nothing?",
              "How would you test one factor fairly?",
              "Costs must be weighed against the yield gained.",
            ],
            strategy: "identify the limiting factor",
            guideRef: "Limiting Factors of Photosynthesis",
          },
          {
            id: "bio-plant-nutrition-bq3-06",
            question:
              "An Elodea plant gives 40 bubbles per minute at 10 cm from a lamp. Using the inverse-square law for light, predict the bubble rate at 20 cm if light intensity is the only limiting factor and the rate is proportional to light intensity. Show your reasoning. [3]",
            marks: 3,
            modelAnswer:
              "Light intensity is proportional to 1/distance². Moving from 10 cm to 20 cm doubles the distance, so the intensity becomes 1/2² = 1/4 of its original value. If the rate is proportional to light intensity, the bubble rate also becomes one quarter: 40 ÷ 4 = 10 bubbles per minute. So the predicted rate at 20 cm is about 10 bubbles per minute.",
            markScheme: [
              "doubling distance quarters the intensity (1/distance²)",
              "rate becomes one quarter: 40 ÷ 4",
              "predicted rate = 10 bubbles per minute",
            ],
            commonError:
              "Halving instead of quartering — light follows an inverse-SQUARE law, so doubling distance cuts intensity to a quarter, not a half.",
            difficulty: "challenge",
            hints: [
              "Light intensity ∝ 1/distance².",
              "Distance goes from 10 cm to 20 cm — by what factor?",
              "Square that factor to find how intensity changes.",
              "Apply the same fraction to the bubble rate.",
            ],
            strategy: "apply the inverse-square law",
            guideRef: "Limiting Factors of Photosynthesis",
            solutions: [
              {
                label: "Using the inverse-square law",
                steps: [
                  "State the law: light intensity ∝ 1 ÷ distance².",
                  "Find the distance ratio: 20 cm ÷ 10 cm = 2 (distance doubled).",
                  "Square it: intensity changes by 1 ÷ 2² = 1 ÷ 4.",
                  "Apply to the rate (rate ∝ intensity here): 40 × 1/4 = 10.",
                  "Answer: about 10 bubbles per minute at 20 cm.",
                ],
              },
            ],
          },
          {
            id: "bio-plant-nutrition-bq3-07",
            question:
              "A student measures the volume of oxygen collected from a water plant: 0.5 cm³ in the first 5 minutes and 1.5 cm³ in the next 5 minutes after sodium hydrogencarbonate is added to the water. Calculate the rate of oxygen production (in cm³ per minute) before and after adding the chemical, and explain the change. [4]",
            marks: 4,
            modelAnswer:
              "Before: rate = 0.5 cm³ ÷ 5 min = 0.1 cm³ per minute. After: rate = 1.5 cm³ ÷ 5 min = 0.3 cm³ per minute. The rate increased (tripled, from 0.1 to 0.3 cm³ per minute) after adding sodium hydrogencarbonate. Sodium hydrogencarbonate releases carbon dioxide into the water, increasing the CO₂ concentration available to the plant. This shows CO₂ was a limiting factor: increasing CO₂ removed that limitation, so the rate of photosynthesis (and oxygen production) rose.",
            markScheme: [
              "before: 0.5 ÷ 5 = 0.1 cm³ per minute",
              "after: 1.5 ÷ 5 = 0.3 cm³ per minute",
              "rate increased / tripled",
              "CO₂ was limiting; adding NaHCO₃ raised CO₂ so rate rose",
            ],
            commonError:
              "Forgetting to divide by time (quoting 0.5 and 1.5 as rates), or omitting the cm³ per minute units.",
            difficulty: "core",
            hints: [
              "Rate = volume ÷ time for each period.",
              "Both periods last 5 minutes.",
              "Compare the two rates.",
              "What does sodium hydrogencarbonate supply to the plant?",
            ],
            strategy: "calculate each rate, then compare",
            guideRef: "Limiting Factors of Photosynthesis",
            solutions: [
              {
                label: "Calculating and comparing rates",
                steps: [
                  "Rate = volume of oxygen ÷ time.",
                  "Before: 0.5 cm³ ÷ 5 min = 0.1 cm³ per minute.",
                  "After: 1.5 cm³ ÷ 5 min = 0.3 cm³ per minute.",
                  "Compare: 0.3 ÷ 0.1 = 3, so the rate tripled.",
                  "Explain: extra CO₂ from NaHCO₃ relieved the CO₂ limitation, raising the rate.",
                ],
              },
            ],
          },
          {
            id: "bio-plant-nutrition-bq3-08",
            question:
              "Two curves of rate of photosynthesis against light intensity are plotted at the same temperature: curve X is at 0.04% CO₂ and curve Y at 0.4% CO₂. Both rise then plateau, but curve Y plateaus higher. Explain fully what these curves show about limiting factors. [4]",
            marks: 4,
            modelAnswer:
              "On the rising parts of both curves, light intensity is the limiting factor — increasing light raises the rate. Curve X plateaus at a lower rate: at high light, the lower CO₂ concentration (0.04%) becomes the limiting factor, capping the rate. Curve Y, with ten times more CO₂ (0.4%), plateaus higher because CO₂ is less limiting, so the rate can rise further before another factor (e.g. temperature) limits it. The fact that raising CO₂ lifts the plateau proves that CO₂ concentration was limiting the rate at high light intensities in curve X.",
            markScheme: [
              "rising part of both: light is limiting",
              "plateau of X: CO₂ (0.04%) becomes limiting at high light",
              "Y plateaus higher because more CO₂ available (less limiting)",
              "raising CO₂ lifts the plateau → CO₂ was limiting at high light",
            ],
            commonError:
              "Saying the curves differ because of light — the only stated difference is CO₂, so CO₂ must explain the different plateau heights.",
            difficulty: "challenge",
            hints: [
              "What is limiting on the sloping parts?",
              "The only difference between the curves is CO₂ level.",
              "Why does more CO₂ allow a higher plateau?",
              "What can limit curve Y once CO₂ is plentiful?",
            ],
            strategy: "compare two curves to identify the variable",
            guideRef: "Limiting Factors of Photosynthesis",
          },
          {
            id: "bio-plant-nutrition-bq3-09",
            question:
              "Design an investigation to find the effect of light intensity on the rate of photosynthesis of an aquatic plant such as Elodea. State the variable you change, the variable you measure, and three variables you must keep constant. [5]",
            marks: 5,
            modelAnswer:
              "Place a piece of Elodea in water (with sodium hydrogencarbonate to supply CO₂) and shine a lamp at it. Change the light intensity by moving the lamp to different measured distances from the plant (independent variable). Measure the rate of photosynthesis by counting the number of oxygen bubbles released per minute, or by collecting and measuring the volume of oxygen produced in a fixed time (dependent variable). Keep these constant for a fair test: the temperature of the water (use a heat shield/water bath to absorb the lamp's heat), the CO₂ concentration (same amount of sodium hydrogencarbonate), and the same piece/length of the same species of plant. Repeat readings at each distance and take an average to improve reliability.",
            markScheme: [
              "independent variable: change light intensity by lamp distance",
              "dependent variable: count bubbles per minute / measure volume of O₂ in fixed time",
              "control variable 1: temperature (use heat shield/water bath)",
              "control variable 2: CO₂ concentration (same NaHCO₃)",
              "control variable 3: same plant/length/species (accept repeats for reliability)",
            ],
            commonError:
              "Forgetting that the lamp heats the water — temperature must be controlled with a heat shield or water bath, or it becomes a second variable.",
            difficulty: "core",
            hints: [
              "What will you deliberately change?",
              "How will you measure the rate?",
              "List things that could affect the rate but must stay the same.",
              "Remember the lamp produces heat as well as light.",
            ],
            strategy: "change one variable at a time",
            guideRef: "Limiting Factors of Photosynthesis",
          },
          {
            id: "bio-plant-nutrition-bq3-10",
            question:
              "On a sunny day, the rate of photosynthesis of a field crop rises through the morning, dips slightly around midday, then recovers in the afternoon. Suggest and explain reasons for the midday dip. [4]",
            marks: 4,
            modelAnswer:
              "Around midday the conditions can become very hot and dry. In response, the plants may partially close their stomata to reduce water loss by transpiration and avoid wilting. Closing the stomata reduces the entry of carbon dioxide, so CO₂ becomes limiting and the rate of photosynthesis dips. Very high midday temperatures may also begin to reduce enzyme efficiency. In the afternoon, as it becomes cooler and less water-stressed, the stomata reopen, CO₂ enters again and the rate recovers. (Accept: local CO₂ around leaves becoming depleted in still, intense conditions.)",
            markScheme: [
              "midday is hot/dry → high transpiration risk",
              "stomata close (partially) to conserve water",
              "less CO₂ enters → CO₂ becomes limiting → rate dips",
              "afternoon: cooler, stomata reopen, CO₂ enters, rate recovers (accept high temp reducing enzyme activity)",
            ],
            commonError:
              "Blaming a fall in light at midday — light is actually highest at midday; the dip is mainly due to stomatal closure cutting CO₂.",
            difficulty: "challenge",
            hints: [
              "Midday is the hottest, brightest, driest part of the day.",
              "How does a plant respond to the risk of water loss?",
              "Closing stomata has a side effect on CO₂.",
              "Why does the rate recover later?",
            ],
            strategy: "link environmental change to stomatal behaviour",
            guideRef: "Limiting Factors of Photosynthesis",
          },
        ],
      },

      // ── QA PAPER 4 ── experiments and mineral nutrition
      {
        id: "bio-plant-nutrition-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description:
          "Starch-testing method, controlled photosynthesis experiments and mineral nutrition.",
        questions: [
          {
            id: "bio-plant-nutrition-bq4-01",
            question:
              "Describe the steps used to test a leaf for the presence of starch. [4]",
            marks: 4,
            modelAnswer:
              "1. Dip the leaf in boiling water for about 30 seconds to kill it and stop enzyme activity (and soften it). 2. Place the leaf in hot ethanol (heated in a water bath) to remove the green chlorophyll, so the colour change can be seen. 3. Rinse the decolourised leaf in cold water to soften it (and remove ethanol). 4. Spread the leaf out and add iodine solution: a blue-black colour shows starch is present, while it stays orange-brown if no starch is present.",
            markScheme: [
              "boil leaf in water to kill it / stop enzymes",
              "place in hot ethanol (water bath) to remove chlorophyll",
              "rinse in water to soften the leaf",
              "add iodine: blue-black = starch present (orange-brown = none)",
            ],
            commonError:
              "Putting the steps in the wrong order, or forgetting to decolourise — the green chlorophyll would mask the iodine colour.",
            difficulty: "core",
            hints: [
              "First make the leaf safe to handle and stop reactions.",
              "Then remove the green colour with a solvent.",
              "What is added last to reveal starch?",
              "State both possible iodine results.",
            ],
            guideRef:
              "Experiments: Testing for Starch and Controlled Investigations",
          },
          {
            id: "bio-plant-nutrition-bq4-02",
            question:
              "Explain why a plant is destarched before a photosynthesis experiment, and how this is done. [3]",
            marks: 3,
            modelAnswer:
              "The plant is kept in darkness for 24–48 hours (destarching). With no light, photosynthesis stops, so the plant uses up its existing starch (through respiration and conversion to sucrose for transport). This removes the starch already present. As a result, any starch found in a leaf after the experiment must have been made during the experiment, making the result valid and unambiguous.",
            markScheme: [
              "keep plant in darkness for 24–48 hours",
              "existing starch is used up (no photosynthesis to replace it)",
              "so any new starch must come from the experiment / results are valid",
            ],
            commonError:
              "Thinking destarching adds starch or kills the leaf — it removes existing starch by keeping the plant in the dark.",
            difficulty: "warmup",
            guideRef:
              "Experiments: Testing for Starch and Controlled Investigations",
          },
          {
            id: "bio-plant-nutrition-bq4-03",
            question:
              "A destarched leaf is partly covered with opaque foil and left attached to a plant in bright light for several hours. The leaf is then tested for starch. (a) Predict the result for the covered and uncovered parts. [2] (b) State the conclusion. [1]",
            marks: 3,
            modelAnswer:
              "(a) The uncovered part received light and photosynthesised, so it makes starch and turns blue-black with iodine. The covered part received no light, could not photosynthesise, made no starch, and stays orange-brown. (b) Conclusion: light is necessary for photosynthesis (and therefore for starch production).",
            markScheme: [
              "(a) uncovered part: blue-black / starch present",
              "(a) covered part: orange-brown / no starch",
              "(b) light is needed for photosynthesis/starch production",
            ],
            commonError:
              "Forgetting that the leaf must be destarched first, or stating the conclusion the wrong way round.",
            difficulty: "core",
            hints: [
              "Which part of the leaf could photosynthesise?",
              "Starch forms only where photosynthesis happened.",
              "Match each region to its iodine colour.",
              "What single variable differed between the two parts?",
            ],
            strategy: "use a control to isolate one variable",
            guideRef:
              "Experiments: Testing for Starch and Controlled Investigations",
          },
          {
            id: "bio-plant-nutrition-bq4-04",
            question:
              "Describe how you would use a variegated leaf to show that chlorophyll is needed for photosynthesis, including the expected result. [4]",
            marks: 4,
            modelAnswer:
              "Take a destarched plant with a variegated leaf (green and white areas) and record (or draw) which parts are green and which are white. Leave the plant in bright light for several hours so photosynthesis can occur. Remove the leaf and test it for starch (boil in water, decolourise in hot ethanol, rinse, add iodine). Expected result: only the green areas (which contain chlorophyll) turn blue-black, showing they made starch, while the white areas (no chlorophyll) stay orange-brown. Because only the chlorophyll-containing parts produced starch, this shows chlorophyll is needed for photosynthesis.",
            markScheme: [
              "destarch plant; record/draw green and white areas first",
              "leave in light, then test the leaf for starch",
              "green areas turn blue-black (starch); white areas stay orange-brown",
              "conclusion: chlorophyll is needed for photosynthesis",
            ],
            commonError:
              "Forgetting to record which areas were green before the test, so you cannot match the colour result to the original pattern.",
            difficulty: "core",
            hints: [
              "Start by destarching and noting the green/white pattern.",
              "Give it light, then run the standard starch test.",
              "Which areas can make starch?",
              "Link the result back to chlorophyll.",
            ],
            strategy: "control variables",
            guideRef:
              "Experiments: Testing for Starch and Controlled Investigations",
          },
          {
            id: "bio-plant-nutrition-bq4-05",
            question:
              "In an experiment to show carbon dioxide is needed for photosynthesis, a destarched potted plant is enclosed in a sealed transparent bag with a dish of sodium hydroxide solution and left in light. (a) Explain the purpose of the sodium hydroxide. [1] (b) Predict and explain the result of the starch test. [2] (c) Suggest a suitable control for this experiment. [1]",
            marks: 4,
            modelAnswer:
              "(a) Sodium hydroxide absorbs the carbon dioxide from the air inside the bag, depriving the leaf of CO₂. (b) The leaf gives a negative starch test (stays orange-brown) because, with no CO₂ (a reactant), photosynthesis cannot occur and no starch is made — even though light and water are available. (c) A suitable control is an identical destarched plant in a sealed bag containing sodium hydrogencarbonate (or just water) instead of sodium hydroxide, so CO₂ is present; this leaf should make starch (turn blue-black), showing the only difference is the presence of CO₂.",
            markScheme: [
              "(a) NaOH absorbs/removes CO₂ from the air in the bag",
              "(b) leaf stays orange-brown / no starch",
              "(b) because no CO₂ (reactant) means no photosynthesis",
              "(c) identical plant with CO₂ present (e.g. NaHCO₃/water) as a control → makes starch",
            ],
            commonError:
              "Concluding CO₂ is not needed; the negative result actually shows CO₂ IS needed. Also forgetting a valid control.",
            difficulty: "core",
            hints: [
              "What does sodium hydroxide do to CO₂?",
              "If a reactant is missing, can starch form?",
              "State the iodine colour for no starch.",
              "A good control keeps everything the same but supplies CO₂.",
            ],
            strategy: "use positive and negative controls",
            guideRef:
              "Experiments: Testing for Starch and Controlled Investigations",
          },
          {
            id: "bio-plant-nutrition-bq4-06",
            question:
              "State two safety precautions that must be taken during the leaf starch test, giving a reason for each. [4]",
            marks: 4,
            modelAnswer:
              "1. Heat the ethanol in a water bath (hot water) and away from a naked flame, because ethanol is highly flammable and could catch fire if heated directly. 2. Use forceps/tongs and care when handling the leaf in boiling water and hot ethanol, and wear eye protection, because the hot liquids can scald or burn the skin (and iodine can irritate/stain). (Accept: switch off the Bunsen before pouring ethanol; handle iodine with care as it stains and irritates.)",
            markScheme: [
              "ethanol heated in water bath / away from flame — because it is flammable",
              "use forceps/care with hot water and ethanol — to avoid scalds/burns",
              "wear eye protection / handle iodine carefully — irritant/stains (any valid second precaution + reason)",
            ],
            commonError:
              "Giving a precaution without a reason, or only mentioning the flammable ethanol point twice in different words.",
            difficulty: "warmup",
            guideRef:
              "Experiments: Testing for Starch and Controlled Investigations",
          },
          {
            id: "bio-plant-nutrition-bq4-07",
            question:
              "Explain why nitrate ions are needed by plants and describe the symptoms of nitrate ion deficiency. [4]",
            marks: 4,
            modelAnswer:
              "Nitrate ions are absorbed from the soil and provide the nitrogen needed to make amino acids, which are joined together to form proteins. Proteins are needed for growth (building new cells) and to make enzymes. If a plant is short of nitrate, it cannot make enough protein, so it shows stunted growth (the plant stays small) and yellowing (chlorosis) of the older leaves, as nitrogen is moved from older leaves to support new growth.",
            markScheme: [
              "nitrate provides nitrogen for amino acids",
              "amino acids form proteins (for growth/enzymes)",
              "deficiency: stunted/poor growth",
              "deficiency: yellowing/chlorosis of (older) leaves",
            ],
            commonError:
              "Confusing nitrate (proteins) with magnesium (chlorophyll). Nitrate deficiency gives stunted growth as well as yellowing.",
            difficulty: "core",
            hints: [
              "Nitrate supplies nitrogen — for which molecules?",
              "Amino acids build up into what?",
              "Without protein, what happens to growth?",
              "Name the leaf-colour symptom too.",
            ],
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
          },
          {
            id: "bio-plant-nutrition-bq4-08",
            question:
              "A plant grown without magnesium ions develops yellow leaves but is not as severely stunted as one grown without nitrate. Explain these observations. [4]",
            marks: 4,
            modelAnswer:
              "Magnesium ions are needed to make chlorophyll (magnesium is the central atom of the chlorophyll molecule). Without magnesium the plant cannot make enough chlorophyll, so the leaves turn yellow (chlorosis). However, the plant can still make amino acids and proteins (it still has nitrate), so growth is less severely affected than in a nitrate-deficient plant. A nitrate-deficient plant cannot make proteins for new cells, so its growth is badly stunted as well as yellow. This is why magnesium deficiency mainly shows as yellowing, whereas nitrate deficiency shows yellowing plus severe stunting.",
            markScheme: [
              "magnesium needed to make chlorophyll → without it, yellow leaves (chlorosis)",
              "magnesium-deficient plant can still make proteins (has nitrate) → growth less affected",
              "nitrate needed for proteins → nitrate deficiency stunts growth",
              "comparison: Mg deficiency mainly yellowing; nitrate deficiency yellowing + stunting",
            ],
            commonError:
              "Saying magnesium is needed for proteins — it is needed for chlorophyll. Nitrate is the one needed for proteins/growth.",
            difficulty: "challenge",
            hints: [
              "What is magnesium used to make?",
              "No chlorophyll → what leaf colour?",
              "Can a magnesium-deficient plant still make proteins?",
              "Why is the nitrate-deficient plant more stunted?",
            ],
            strategy: "cause → consequence → symptom",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
          },
          {
            id: "bio-plant-nutrition-bq4-09",
            question:
              "Explain why plant roots use active transport, rather than diffusion, to absorb mineral ions such as nitrate from the soil. [3]",
            marks: 3,
            modelAnswer:
              "The concentration of mineral ions like nitrate is often higher inside the root cells than in the surrounding soil water. This means the ions would have to move against their concentration gradient to enter the cell, which diffusion cannot do (diffusion only moves substances down a gradient). Active transport moves the ions against the gradient using energy (ATP) released by respiration, allowing the root to take up ions even when they are more concentrated inside than outside.",
            markScheme: [
              "ion concentration is higher inside the root cell than in the soil",
              "ions must move against the concentration gradient (diffusion cannot do this)",
              "active transport uses energy (ATP from respiration) to move ions against the gradient",
            ],
            commonError:
              "Saying ions move by osmosis — osmosis is for water only. Active transport (not diffusion) moves ions against the gradient.",
            difficulty: "core",
            hints: [
              "Compare the ion concentration inside the cell with the soil.",
              "Which way would the ions have to move to get in?",
              "Diffusion only works down a gradient — what is needed to go against it?",
            ],
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
          },
          {
            id: "bio-plant-nutrition-bq4-10",
            question:
              "A student grows seedlings in three water cultures: A = complete mineral solution; B = solution with no nitrate; C = solution with no magnesium. After three weeks, describe and explain the expected appearance of the seedlings in B and C compared with A. [5]",
            marks: 5,
            modelAnswer:
              "Seedling A (complete solution) is the control and should be healthy: green and growing well, because all the mineral ions it needs are present. Seedling B (no nitrate) cannot make enough amino acids and proteins, so it shows stunted/poor growth and yellowing (chlorosis), especially of the older leaves — it is clearly smaller and less healthy than A. Seedling C (no magnesium) cannot make enough chlorophyll, so its leaves turn yellow (chlorosis), but because it can still make proteins its growth is less stunted than B — it may be a fairly normal size but pale/yellow. Comparing each with A (which differs only by the missing ion) shows that the changes are caused by the absence of that specific mineral ion.",
            markScheme: [
              "A is the healthy control (green, growing well)",
              "B (no nitrate): stunted/poor growth",
              "B: yellowing/chlorosis (of older leaves)",
              "C (no magnesium): yellowing/chlorosis of leaves",
              "C: growth less stunted than B / comparison with A isolates the missing ion",
            ],
            commonError:
              "Giving the same symptoms for B and C — nitrate deficiency causes stunting plus yellowing, while magnesium deficiency mainly causes yellowing with less stunting.",
            hints: [
              "What is the role of culture A?",
              "What can seedling B not make without nitrate?",
              "What can seedling C not make without magnesium?",
              "Which seedling is more stunted, and why?",
              "How does comparing with A make the test valid?",
            ],
            strategy: "control variables; cause → consequence → symptom",
            guideRef: "Mineral Nutrition: Nitrate and Magnesium Ions",
            difficulty: "challenge",
          },
        ],
      },
    ],
  },
};
