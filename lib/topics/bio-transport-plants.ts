import type { Topic } from "../types";

export const bioTransportPlants: Topic = {
  id: "bio-transport-plants",
  title: "Transport in Plants",
  subject: "biology",
  icon: "🌳",
  blurb: "Xylem, phloem, transpiration and translocation — how plants move water, minerals and sugars.",
  intro: "Plants cannot pump blood around a body, yet they manage to lift water dozens of metres against gravity and deliver sugars to every living cell. They do this with two specialised pipe systems — xylem and phloem — powered by nothing more than evaporation at the leaf surface. Understanding how these systems work, and how environmental conditions control water loss, is central to Cambridge IGCSE Biology 0610 Extended.",

  guide: [
    {
      heading: "Xylem and Phloem — Structure and Function",
      body: `Plants have two distinct vascular tissues: **xylem** and **phloem**. These run together in **vascular bundles** throughout the root, stem, and leaf.

**Xylem** transports water and dissolved mineral ions from the roots upward to the leaves. Xylem vessels are:
- Dead cells — they have no living cytoplasm
- Hollow tubes formed by cells whose end walls have broken down
- Lignified — the cell walls are strengthened with lignin, making them rigid and waterproof on their inner surface but allowing water to enter through **pits** in the wall
- Continuous columns from root to leaf

**Phloem** transports dissolved organic solutes — mainly **sucrose** and **amino acids** — in a process called **translocation**. Unlike xylem, phloem transport can occur:
- Both up and down the plant (bidirectional)
- To any living, metabolically active tissue ("sink")
- From regions of production or storage ("sources")

Phloem is composed of living **sieve tube elements** connected end-to-end through perforated **sieve plates**, assisted by companion cells that provide energy for active loading of sugars.`,
      diagrams: [
        {
          caption: "Cross-section of a dicotyledonous stem showing vascular bundle arrangement",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Stem cross-section showing vascular bundles with xylem and phloem labelled">
  <!-- dark background -->
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- stem outline (circle) -->
  <circle cx="160" cy="100" r="85" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- cortex label -->
  <text x="160" y="195" text-anchor="middle" fill="#b7bce0" font-size="10">Cortex</text>
  <!-- pith -->
  <circle cx="160" cy="100" r="38" fill="#1e3a2f" stroke="#34d399" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="160" y="103" text-anchor="middle" fill="#34d399" font-size="9">Pith</text>
  <!-- 6 vascular bundles arranged in a ring -->
  <!-- bundle 1 top -->
  <ellipse cx="160" cy="30" rx="14" ry="9" fill="#0f172a" stroke="#94a3b8" stroke-width="1"/>
  <ellipse cx="160" cy="27" rx="7" ry="5" fill="#38bdf8"/>
  <ellipse cx="160" cy="33" rx="7" ry="4" fill="#34d399"/>
  <!-- bundle 2 top-right -->
  <ellipse cx="228" cy="57" rx="14" ry="9" fill="#0f172a" stroke="#94a3b8" stroke-width="1" transform="rotate(60 228 57)"/>
  <ellipse cx="231" cy="53" rx="7" ry="5" fill="#38bdf8" transform="rotate(60 231 53)"/>
  <ellipse cx="225" cy="61" rx="7" ry="4" fill="#34d399" transform="rotate(60 225 61)"/>
  <!-- bundle 3 bottom-right -->
  <ellipse cx="228" cy="143" rx="14" ry="9" fill="#0f172a" stroke="#94a3b8" stroke-width="1" transform="rotate(-60 228 143)"/>
  <ellipse cx="225" cy="139" rx="7" ry="5" fill="#38bdf8" transform="rotate(-60 225 139)"/>
  <ellipse cx="231" cy="147" rx="7" ry="4" fill="#34d399" transform="rotate(-60 231 147)"/>
  <!-- bundle 4 bottom -->
  <ellipse cx="160" cy="170" rx="14" ry="9" fill="#0f172a" stroke="#94a3b8" stroke-width="1"/>
  <ellipse cx="160" cy="167" rx="7" ry="5" fill="#38bdf8"/>
  <ellipse cx="160" cy="173" rx="7" ry="4" fill="#34d399"/>
  <!-- bundle 5 bottom-left -->
  <ellipse cx="92" cy="143" rx="14" ry="9" fill="#0f172a" stroke="#94a3b8" stroke-width="1" transform="rotate(60 92 143)"/>
  <ellipse cx="95" cy="139" rx="7" ry="5" fill="#38bdf8" transform="rotate(60 95 139)"/>
  <ellipse cx="89" cy="147" rx="7" ry="4" fill="#34d399" transform="rotate(60 89 147)"/>
  <!-- bundle 6 top-left -->
  <ellipse cx="92" cy="57" rx="14" ry="9" fill="#0f172a" stroke="#94a3b8" stroke-width="1" transform="rotate(-60 92 57)"/>
  <ellipse cx="89" cy="53" rx="7" ry="5" fill="#38bdf8" transform="rotate(-60 89 53)"/>
  <ellipse cx="95" cy="61" rx="7" ry="4" fill="#34d399" transform="rotate(-60 95 61)"/>
  <!-- legend -->
  <rect x="8" y="8" width="12" height="8" fill="#38bdf8" rx="1"/>
  <text x="23" y="16" fill="#38bdf8" font-size="9">Xylem (inner)</text>
  <rect x="8" y="20" width="12" height="8" fill="#34d399" rx="1"/>
  <text x="23" y="28" fill="#34d399" font-size="9">Phloem (outer)</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Xylem carries water and mineral ions upward only; vessels are dead, hollow and lignified.",
        "Phloem carries sucrose and amino acids (translocation) both up and down the plant.",
        "Phloem sieve tube elements are living cells; companion cells load sugars actively.",
        "In a dicotyledonous stem, vascular bundles are arranged in a ring near the outer edge.",
        "Lignin waterproofs the inner xylem wall but pits allow lateral water movement.",
      ],
      discovery: {
        problem: "A tree is 30 m tall. Water needs to reach the top leaves, yet the tree has no pump. What force could possibly lift water that high against gravity — without a heart or motor?",
        idea: "Evaporation of water from leaves creates a tension (negative pressure) in the xylem. Because water molecules are cohesive (they stick together), this tension is transmitted all the way down the continuous water column to the roots, pulling more water up — the transpiration stream.",
      },
      whyItWorks: "Water molecules form hydrogen bonds with each other (cohesion) and with the hydrophilic xylem wall (adhesion). When a water molecule evaporates from a mesophyll cell, it is replaced by the next water molecule in the column — which in turn pulls the one below, all the way from root to leaf. This is the cohesion–tension mechanism.",
      strategies: ["Draw a diagram", "Cause-and-effect chain"],
    },

    {
      heading: "Position of Vascular Tissue in Root, Stem and Leaf",
      body: `The arrangement of xylem and phloem differs in each plant organ and is adapted to the mechanical stresses each faces.

**Root (dicotyledon)**
- Xylem forms a central star-shaped core (2–6 arms, usually 4 in exam diagrams)
- Phloem lies in the spaces between the xylem arms
- This central arrangement resists the pulling tension as water is drawn upward
- Surrounded by the endodermis (Casparian strip controls water entry) then cortex

**Stem (dicotyledon)**
- Vascular bundles arranged in a ring toward the outside of the stem
- In each bundle: **xylem is on the inside (towards the pith), phloem on the outside (towards the cortex)**
- Ring arrangement resists bending stress from wind and gravity

**Leaf**
- Vascular tissue runs in the **midrib** and veins
- In each vein: xylem is on the **upper (adaxial) surface**, phloem on the **lower (abaxial) surface**
- Thin, branched network maximises delivery to all mesophyll cells
- Xylem above phloem is easy to remember: water evaporates upward from above`,
      diagrams: [
        {
          caption: "Simplified root cross-section showing central xylem star and phloem between arms",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Root cross-section: central xylem star with phloem in between, endodermis and cortex labelled">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- cortex ring -->
  <circle cx="160" cy="100" r="80" fill="#1e2d1a" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- endodermis ring -->
  <circle cx="160" cy="100" r="55" fill="#172318" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,2"/>
  <!-- pericycle -->
  <circle cx="160" cy="100" r="48" fill="#172318" stroke="#b7bce0" stroke-width="0.8"/>
  <!-- central xylem star (4-armed) -->
  <polygon points="160,60 168,92 200,100 168,108 160,140 152,108 120,100 152,92" fill="#38bdf8"/>
  <!-- phloem patches between arms -->
  <ellipse cx="183" cy="77" rx="10" ry="8" fill="#34d399"/>
  <ellipse cx="183" cy="123" rx="10" ry="8" fill="#34d399"/>
  <ellipse cx="137" cy="77" rx="10" ry="8" fill="#34d399"/>
  <ellipse cx="137" cy="123" rx="10" ry="8" fill="#34d399"/>
  <!-- labels -->
  <text x="160" y="103" text-anchor="middle" fill="#0f172a" font-size="9" font-weight="bold">Xylem</text>
  <text x="183" y="79" text-anchor="middle" fill="#0f172a" font-size="7">Ph</text>
  <text x="183" y="125" text-anchor="middle" fill="#0f172a" font-size="7">Ph</text>
  <text x="137" y="79" text-anchor="middle" fill="#0f172a" font-size="7">Ph</text>
  <text x="137" y="125" text-anchor="middle" fill="#0f172a" font-size="7">Ph</text>
  <!-- leader lines -->
  <line x1="242" y1="60" x2="220" y2="80" stroke="#fbbf24" stroke-width="0.8"/>
  <text x="245" y="58" fill="#fbbf24" font-size="8">Endodermis</text>
  <line x1="248" y1="100" x2="242" y2="100" stroke="#94a3b8" stroke-width="0.8"/>
  <text x="250" y="103" fill="#94a3b8" font-size="8">Cortex</text>
  <line x1="50" y1="48" x2="120" y2="78" stroke="#38bdf8" stroke-width="0.8"/>
  <text x="10" y="45" fill="#38bdf8" font-size="8">Xylem (star)</text>
  <line x1="50" y1="130" x2="132" y2="118" stroke="#34d399" stroke-width="0.8"/>
  <text x="10" y="134" fill="#34d399" font-size="8">Phloem</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Root: central xylem star, phloem between arms — resists tension from water uptake.",
        "Stem: vascular bundles in a ring — xylem inner, phloem outer — resists bending.",
        "Leaf vein: xylem upper surface, phloem lower surface.",
        "The endodermis surrounds the vascular tissue in the root and controls water entry via the Casparian strip.",
        "This arrangement is consistent across dicotyledonous plants; monocots differ but are not required at IGCSE.",
      ],
      thinkDeeper: "The Casparian strip is a band of waterproof suberin in the walls of endodermal cells. It forces water moving across the root into the cytoplasm of endodermal cells (symplast route), giving the plant control over which ions enter the xylem. Without it, any ion in the soil water could reach the xylem unchecked.",
    },

    {
      heading: "Root Hair Cells and Water and Ion Uptake",
      body: `Water and mineral ions enter the plant through the **root hair cells** — extensions of epidermal cells that enormously increase the root's surface area.

**Water uptake — osmosis**
Water enters root hair cells by osmosis because the cell sap has a lower water potential (higher solute concentration) than the dilute soil water. Water then moves across the root cortex from cell to cell by osmosis (symplast or apoplast pathways) down a water potential gradient into the xylem.

- **Symplast pathway**: water moves through the cytoplasm and plasmodesmata (living connections between cells)
- **Apoplast pathway**: water moves through cell walls without entering cells (faster, but blocked at the Casparian strip in the endodermis)

**Mineral ion uptake — active transport**
Mineral ions (e.g. nitrate, magnesium, potassium) are present in the soil in very low concentrations — often lower than inside root hair cells. They cannot enter by diffusion against this concentration gradient. Instead, the plant uses **active transport**, which:
- Requires energy (ATP) from respiration
- Uses carrier proteins in the cell membrane
- Can move ions against their concentration gradient

**Evidence:** If a plant is deprived of oxygen (or treated with a respiratory inhibitor), mineral ion uptake slows dramatically, but water uptake is unaffected.`,
      keyPoints: [
        "Root hair cells have a large surface area and thin walls for efficient absorption.",
        "Water enters by osmosis — moving from high to low water potential (soil to root cell sap).",
        "Mineral ions are absorbed by active transport against their concentration gradient.",
        "Active transport requires ATP from aerobic respiration; it stops in anaerobic conditions.",
        "Water crosses the cortex via symplast (through cells) and apoplast (through cell walls) pathways.",
      ],
      discovery: {
        problem: "A farmer floods their field for several days. The crop plants begin to look unhealthy — leaves turn yellow and growth stops even though there is plenty of water. The problem is not lack of water. What is missing, and why does flooding cause it?",
        idea: "Waterlogged soil drives out oxygen, making conditions anaerobic. Root cells cannot carry out aerobic respiration efficiently, so ATP production falls. Without ATP, active transport of mineral ions into root hair cells fails. The plant becomes mineral-deficient even in the presence of abundant water.",
      },
      whyItWorks: "Active transport uses membrane-bound carrier proteins that are driven by ATP hydrolysis. Each carrier changes shape to move a specific ion across the membrane against its electrochemical gradient — a process thermodynamically impossible without an energy input. Respiration (specifically oxidative phosphorylation) provides this ATP.",
    },

    {
      heading: "Transpiration — Loss of Water Vapour",
      body: `**Transpiration** is the loss of water vapour from the aerial parts of a plant, mainly through **stomata** in the leaves.

**The mechanism:**
1. Water evaporates from the moist cell walls of mesophyll cells into the air spaces of the leaf
2. This creates a higher water vapour concentration inside the leaf than in the outside air
3. Water vapour diffuses out through the stomata down this concentration gradient
4. As mesophyll cells lose water, their water potential falls, and they draw in more water from the xylem by osmosis
5. This creates tension that pulls the water column upward — the **transpiration stream**

**Stomata** are pores bounded by pairs of **guard cells**. In the light, guard cells take up potassium ions (active transport), become more concentrated, and absorb water by osmosis — swelling and becoming turgid. Because the inner wall of each guard cell is thicker, the guard cells bend outward, opening the pore.

Most water loss is through stomata; a small amount passes through the waxy cuticle (**cuticular transpiration**).

**Wilting** occurs when the rate of transpiration exceeds the rate of water uptake. Cells lose turgor pressure; the plant droops. If the water deficit persists, guard cells also become flaccid and stomata close, temporarily reducing further water loss (stomatal closure).`,
      diagrams: [
        {
          caption: "Water pathway from soil through root hair, across cortex, up xylem to leaf and out via stomata",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram showing water pathway: soil arrow to root hair cell, across cortex, into xylem vessel, up stem, to leaf mesophyll, out through stoma as water vapour">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- soil region -->
  <rect x="0" y="155" width="320" height="45" fill="#1a1205" rx="0"/>
  <text x="10" y="185" fill="#b7bce0" font-size="8">Soil (dilute solution)</text>
  <!-- root outline -->
  <rect x="140" y="130" width="40" height="60" fill="#1e2d1a" stroke="#94a3b8" stroke-width="1" rx="4"/>
  <!-- root hair cell -->
  <ellipse cx="120" cy="170" rx="20" ry="10" fill="#172318" stroke="#34d399" stroke-width="1.5"/>
  <text x="120" y="172" text-anchor="middle" fill="#34d399" font-size="7">Root hair</text>
  <!-- arrow: soil to root hair -->
  <line x1="85" y1="170" x2="100" y2="170" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arr)"/>
  <text x="38" y="168" fill="#38bdf8" font-size="7">Osmosis</text>
  <!-- arrow: root hair to cortex/xylem -->
  <line x1="140" y1="170" x2="141" y2="170" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arr)"/>
  <!-- xylem in root -->
  <rect x="152" y="140" width="16" height="40" fill="#38bdf8" rx="2"/>
  <text x="160" y="165" text-anchor="middle" fill="#0f172a" font-size="7">Xylem</text>
  <!-- stem xylem column -->
  <rect x="152" y="80" width="16" height="55" fill="#38bdf8" rx="0"/>
  <text x="175" y="110" fill="#38bdf8" font-size="7">Stem xylem</text>
  <!-- leaf outline -->
  <ellipse cx="200" cy="55" rx="60" ry="28" fill="#1e2d1a" stroke="#94a3b8" stroke-width="1"/>
  <text x="200" y="52" text-anchor="middle" fill="#b7bce0" font-size="8">Leaf mesophyll</text>
  <!-- xylem in leaf midrib -->
  <rect x="152" y="45" width="16" height="38" fill="#38bdf8" rx="0"/>
  <!-- water vapour arrow out of stoma -->
  <line x1="210" y1="28" x2="230" y2="10" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arr)"/>
  <text x="232" y="9" fill="#94a3b8" font-size="8">H2O vapour</text>
  <text x="232" y="18" fill="#94a3b8" font-size="7">(via stoma)</text>
  <!-- upward arrow in xylem -->
  <line x1="160" y1="130" x2="160" y2="90" stroke="#ffffff" stroke-width="1" marker-end="url(#arr)"/>
  <!-- labels -->
  <text x="175" y="140" fill="#b7bce0" font-size="7">Active transport</text>
  <text x="175" y="148" fill="#b7bce0" font-size="7">of ions also here</text>
  <!-- arrowhead marker -->
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#38bdf8"/>
    </marker>
  </defs>
</svg>`,
        },
      ],
      keyPoints: [
        "Transpiration = loss of water vapour from leaves mainly through stomata by evaporation then diffusion.",
        "The driving force is a water vapour concentration gradient between the moist leaf interior and drier outside air.",
        "Guard cells open stomata in light by accumulating potassium ions (active transport) → osmosis → turgid.",
        "The transpiration stream is the continuous flow of water from roots to leaves driven by evaporation.",
        "Wilting occurs when transpiration rate exceeds water uptake; stomata close when guard cells become flaccid.",
      ],
      thinkDeeper: "Transpiration is often described as an unavoidable cost of gas exchange: stomata must open for CO2 to enter for photosynthesis, but whenever they open, water vapour escapes. Plants with a thick waxy cuticle (xerophytes) and sunken, hairy or few stomata reduce this cost in dry environments.",
      strategies: ["Cause-and-effect chain", "Identify the gradient"],
    },

    {
      heading: "Factors Affecting the Rate of Transpiration",
      body: `Four main environmental factors alter how quickly water vapour is lost from leaves.

**Temperature**
Higher temperature → more kinetic energy → water evaporates faster from mesophyll cell walls → steeper water vapour concentration gradient across the stomata → faster diffusion out. Also, stomata tend to open more widely at higher temperatures.

**Humidity (water vapour concentration of surrounding air)**
Higher humidity → the concentration gradient between leaf interior and surrounding air is smaller → slower diffusion of water vapour → lower transpiration rate. In very humid air (near 100% RH) transpiration may effectively stop.

**Wind / air movement**
Wind sweeps away water vapour that has accumulated just outside stomata, restoring the steep gradient → faster transpiration. In still air, a layer of humid air (the **boundary layer**) builds up around the leaf, reducing the gradient.

**Light intensity**
Higher light intensity → more light-dependent photosynthesis → guard cells take up more potassium → stomata open wider → more water vapour escapes → higher transpiration rate. In darkness, stomata close (in most species) and transpiration falls dramatically.

**Summary table mnemonic — "HWLT":** Humidity down ↑ rate; Wind up ↑ rate; Light up ↑ rate; Temperature up ↑ rate.

Remember: increased **leaf surface area** and a **thin cuticle** also increase transpiration, but these are structural factors, not environmental variables.`,
      keyPoints: [
        "Higher temperature → faster evaporation → increased transpiration rate.",
        "Higher humidity → smaller water vapour gradient → decreased transpiration rate.",
        "Higher wind speed → removes boundary layer → increased transpiration rate.",
        "Higher light intensity → stomata open → increased transpiration rate.",
        "All four factors act by altering the concentration gradient of water vapour across the stomata.",
      ],
      discovery: {
        problem: "On a hot, sunny, windy afternoon, a plant loses water much faster than on a cool, still, overcast morning. List all four environmental factors at play and predict how changing each one independently would affect transpiration rate. Which single factor do you think has the largest effect — and how would you test this?",
        idea: "Each factor works by altering either (a) how fast water evaporates inside the leaf (temperature) or (b) how steep the water vapour concentration gradient is across the stomata (humidity, wind, light). You can test one factor at a time using a potometer while controlling all others — a classic investigation.",
      },
      whyItWorks: "Diffusion rate depends on the concentration gradient, temperature (kinetic energy), and path length. Every environmental factor that increases the gradient or kinetic energy speeds up diffusion of water vapour through stomata. This is Fick's law applied to transpiration: rate ∝ surface area × concentration difference / diffusion distance.",
      strategies: ["Control variables", "Identify the gradient", "Apply Fick's Law"],
    },

    {
      heading: "Investigating Transpiration with a Potometer",
      body: `A **potometer** measures the **rate of water uptake** by a leafy shoot, which is used as an estimate of transpiration rate (since almost all water absorbed is transpired).

**Setting up a potometer:**
1. Cut a leafy shoot underwater (prevents air locks in the xylem)
2. Connect it airtight to the capillary tube of the potometer — no air gaps
3. Introduce an air bubble into the capillary tube
4. Record the position of the bubble at intervals; calculate the distance moved per minute

**Calculating water uptake:**
- If the capillary tube has a known internal radius r, volume = π r² × distance moved (in cm³ or mm³)
- Rate = volume / time (e.g. mm³ per minute)

**Changing conditions:**
To test one factor, change that variable (e.g. place the potometer in front of a fan) while keeping all others constant (temperature, light, humidity).

**Limitations:**
- The potometer measures water uptake, not direct water loss from leaves
- A small amount of water is used in photosynthesis and cell expansion (not transpired)
- Air entering the system invalidates the measurement

**Worked data example:**
A shoot in still air moves the bubble 20 mm in 5 min. In a breeze it moves 50 mm in 5 min. Capillary radius = 0.5 mm.
- Still air: rate = (π × 0.5² × 20) / 5 = (π × 0.25 × 20) / 5 = 15.71 / 5 ≈ 3.1 mm³ min⁻¹
- Breeze: rate = (π × 0.25 × 50) / 5 = 39.27 / 5 ≈ 7.9 mm³ min⁻¹
- The wind increased the rate by a factor of approximately 2.5×`,
      keyPoints: [
        "A potometer measures rate of water uptake (used as a proxy for transpiration rate).",
        "The shoot must be cut and connected underwater to prevent air bubble entry to xylem.",
        "An air bubble is introduced; its movement along the capillary is timed.",
        "Volume of water taken up = π r² × distance moved by the bubble.",
        "Only one variable should be changed at a time; all others must be controlled.",
      ],
      strategies: ["Unit analysis", "Control variables", "Calculate rate = change / time"],
    },
  ],

  learn: {
    keyFacts: [
      "Xylem transports water and mineral ions from roots to leaves; it is made of dead, hollow, lignified cells.",
      "Phloem transports sucrose and amino acids (translocation) both upward and downward through the plant.",
      "In a dicot stem, xylem is on the inner side of each vascular bundle; phloem is on the outer side.",
      "In a dicot root, xylem forms a central star shape with phloem between the arms.",
      "Root hair cells absorb water by osmosis and mineral ions by active transport.",
      "Active transport of mineral ions requires ATP from aerobic respiration — it stops in anaerobic conditions.",
      "Transpiration is the loss of water vapour from leaves mainly through stomata by evaporation and diffusion.",
      "Guard cells open stomata in light by active uptake of K⁺ ions → osmosis → turgid guard cells → pore opens.",
      "The four factors increasing transpiration rate are: higher temperature, lower humidity, higher wind speed, and higher light intensity.",
      "Wilting occurs when transpiration exceeds water uptake; guard cells become flaccid and stomata close.",
      "A potometer measures water uptake rate; the shoot must be connected airtight and cut underwater.",
      "Cohesion of water molecules allows tension from evaporating leaves to pull the water column up the xylem.",
    ],
    flashcards: [
      { front: "What does xylem transport?", back: "Water and dissolved mineral ions, from roots to leaves (upward only)." },
      { front: "What does phloem transport, and in which direction?", back: "Sucrose and amino acids (translocation), both up and down the plant." },
      { front: "Why is xylem described as dead tissue?", back: "Xylem vessels are formed from dead cells whose end walls have broken down, leaving hollow, lignified tubes." },
      { front: "How do root hair cells absorb mineral ions?", back: "By active transport — using ATP from respiration, carrier proteins move ions against their concentration gradient." },
      { front: "How does light cause stomata to open?", back: "Light triggers guard cells to actively take up K⁺ ions → solute concentration rises → water enters by osmosis → guard cells become turgid → pore opens." },
      { front: "Name the four environmental factors that affect transpiration rate.", back: "Temperature, humidity, wind speed (air movement), light intensity." },
      { front: "What is the effect of high humidity on transpiration?", back: "High humidity reduces the water vapour concentration gradient between leaf interior and air → transpiration rate decreases." },
      { front: "What is wilting? Why does it happen?", back: "Wilting is drooping of leaves/stem when transpiration rate exceeds water uptake rate, causing cells to lose turgor pressure." },
      { front: "What does a potometer measure, and what limitation does it have?", back: "It measures rate of water uptake, not transpiration directly. A tiny amount of water is used by the plant for photosynthesis, not transpired." },
      { front: "In a dicot root cross-section, where is the xylem?", back: "In the centre, forming a star shape (2–6 arms); phloem is in the spaces between the arms." },
      { front: "What property of water allows the transpiration stream to work?", back: "Cohesion — hydrogen bonds hold water molecules together so tension from evaporating leaves is transmitted down the continuous water column." },
      { front: "What is translocation?", back: "The transport of dissolved organic solutes (sucrose and amino acids) through the phloem, from sources (e.g. leaves) to sinks (e.g. roots, growing tips, fruits)." },
    ],
    keyTerms: [
      { term: "Xylem", definition: "Vascular tissue made of dead, hollow, lignified vessels that transports water and mineral ions from roots to leaves." },
      { term: "Phloem", definition: "Vascular tissue made of living sieve tube elements that transports sucrose and amino acids (translocation) both up and down the plant." },
      { term: "Translocation", definition: "The transport of dissolved organic solutes (sucrose, amino acids) through phloem from source to sink." },
      { term: "Transpiration", definition: "The loss of water vapour from the aerial parts of a plant, mainly through stomata, by evaporation and diffusion." },
      { term: "Transpiration stream", definition: "The continuous flow of water from root hair cells, through the xylem, to mesophyll cells and out through stomata, driven by evaporation at the leaf surface." },
      { term: "Cohesion", definition: "The attraction between water molecules due to hydrogen bonding, allowing water columns in xylem to be pulled up without breaking." },
      { term: "Guard cells", definition: "Pairs of specialised cells surrounding each stoma that control its opening and closing by changes in turgor pressure." },
      { term: "Stomata", definition: "Microscopic pores in the leaf epidermis (mainly lower surface) through which gas exchange and water vapour loss occur." },
      { term: "Wilting", definition: "The drooping of leaves and stem when water loss (transpiration) exceeds water uptake, causing cells to lose turgor." },
      { term: "Potometer", definition: "An instrument used to measure the rate of water uptake by a leafy shoot as a proxy for transpiration rate." },
      { term: "Active transport", definition: "The movement of substances across a cell membrane against a concentration gradient, requiring energy (ATP) from respiration and carrier proteins." },
      { term: "Osmosis", definition: "The net movement of water molecules through a partially permeable membrane from a region of higher water potential to a region of lower water potential." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "bio-transport-plants-mcq-q01",
        question: "Which of the following correctly describes xylem tissue?",
        options: [
          "Living cells that transport sucrose upward only",
          "Dead, hollow, lignified cells that transport water and mineral ions",
          "Living cells with sieve plates that transport amino acids",
          "Dead cells that transport sucrose both up and down",
        ],
        answerIndex: 1,
        explanation: "Xylem vessels are formed from dead cells (no cytoplasm), are hollow (end walls broken down), lignified, and transport water and mineral ions from root to leaf — upward only. Sucrose transport (both directions) is the role of phloem, which is living tissue.",
        guideRef: "Xylem and Phloem — Structure and Function",
        difficulty: "warmup",
      },
      {
        id: "bio-transport-plants-mcq-q02",
        question: "In a dicotyledonous stem, in which position within a vascular bundle is the xylem found?",
        options: [
          "On the outer edge, closest to the epidermis",
          "In the pith at the centre of the stem",
          "On the inner side of the bundle, closest to the pith",
          "Alternating with phloem in equal rings",
        ],
        answerIndex: 2,
        explanation: "In a dicot stem vascular bundle, xylem is on the inner side (towards the pith) and phloem is on the outer side (towards the cortex). The bundles themselves are arranged in a ring, but within each bundle xylem is the inner tissue.",
        guideRef: "Position of Vascular Tissue in Root, Stem and Leaf",
        difficulty: "core",
        hints: [
          "Think about the root vs. stem difference in xylem position.",
          "In the stem, the pith is at the very centre — which side of the bundle faces inward?",
          "A useful mnemonic: in the stem, X(ylem) is eXtra close to the centre.",
        ],
      },
      {
        id: "bio-transport-plants-mcq-q03",
        question: "A plant is placed in flooded (anaerobic) soil. Which of the following is the most likely immediate result?",
        options: [
          "Water uptake stops because osmosis requires oxygen",
          "Mineral ion uptake slows significantly because active transport requires ATP",
          "Transpiration rate increases because the roots are submerged",
          "Phloem transport stops because lignin cannot be produced",
        ],
        answerIndex: 1,
        explanation: "Active transport of mineral ions requires ATP from aerobic respiration. In anaerobic conditions, ATP production falls sharply, so mineral ion uptake slows. Water uptake by osmosis is a passive process and is not directly dependent on oxygen.",
        guideRef: "Root Hair Cells and Water and Ion Uptake",
        difficulty: "core",
        hints: [
          "Identify which uptake process requires energy.",
          "What gas is needed for aerobic respiration?",
          "What molecule provides energy for active transport?",
        ],
      },
      {
        id: "bio-transport-plants-mcq-q04",
        question: "On a windy day, transpiration rate is higher than on a still day because:",
        options: [
          "Wind increases the humidity of the air around the leaf",
          "Wind removes the humid boundary layer around the leaf, maintaining a steep water vapour gradient",
          "Wind causes stomata to open more widely by direct mechanical pressure",
          "Wind increases temperature, which speeds up evaporation",
        ],
        answerIndex: 1,
        explanation: "Wind disperses the layer of humid air (boundary layer) that accumulates just outside open stomata. This restores the concentration gradient of water vapour between the leaf interior and the surrounding air, so diffusion of water vapour out of the leaf continues at a faster rate.",
        guideRef: "Factors Affecting the Rate of Transpiration",
        difficulty: "core",
        hints: [
          "What is the 'boundary layer' and what effect does it have on diffusion?",
          "Think about the gradient — if humid air already surrounds the leaf, how does that affect further diffusion?",
        ],
      },
      {
        id: "bio-transport-plants-mcq-q05",
        question: "The diagram shows readings from a potometer. The capillary tube has an internal radius of 0.4 mm. The air bubble moved 25 mm in 10 minutes. What is the rate of water uptake?",
        options: [
          "1.0 mm³ min⁻¹",
          "1.26 mm³ min⁻¹",
          "10.0 mm³ min⁻¹",
          "0.5 mm³ min⁻¹",
        ],
        answerIndex: 1,
        explanation: "Volume = π × r² × distance = π × 0.4² × 25 = π × 0.16 × 25 = 12.57 mm³ over 10 min. Rate = 12.57 / 10 ≈ 1.26 mm³ min⁻¹. Option A incorrectly uses r = 0.5 or omits π; options C and D use wrong calculations.",
        guideRef: "Investigating Transpiration with a Potometer",
        difficulty: "challenge",
        hints: [
          "Write down the formula: Volume = π r² × distance.",
          "What is 0.4² ?",
          "Multiply by π and by the distance (25 mm) to get the total volume, then divide by time.",
        ],
        strategy: "Unit analysis; substitute carefully",
      },
      {
        id: "bio-transport-plants-mcq-q06",
        question: "Which row correctly matches the tissue, its composition, and the direction of transport?",
        options: [
          "Xylem — living cells — upward only",
          "Phloem — dead cells — both directions",
          "Xylem — dead cells — upward only",
          "Phloem — living cells — upward only",
        ],
        answerIndex: 2,
        explanation: "Xylem = dead, hollow, lignified cells; transport is upward only (water and minerals). Phloem = living sieve tube elements; translocation is bidirectional (sucrose and amino acids). Options A and D have the cell state and/or direction wrong.",
        guideRef: "Xylem and Phloem — Structure and Function",
        difficulty: "warmup",
      },
    ],
    qa: [
      {
        id: "bio-transport-plants-qa-q01",
        question: "Describe how water moves from the soil into the xylem of a root. In your answer include the process involved and the structures the water passes through. [5]",
        marks: 5,
        modelAnswer: "Water enters root hair cells by osmosis. The cell sap of root hair cells has a lower water potential (higher solute concentration) than the dilute soil water, so water moves from the soil into the root hair cell down a water potential gradient through the partially permeable cell membrane. Water then moves across the root cortex from cell to cell by osmosis (symplast through cytoplasm / apoplast through cell walls), always moving towards cells with lower water potential. At the endodermis the Casparian strip (a band of waterproof suberin) blocks the apoplast pathway, forcing water into endodermal cells. Water then passes by osmosis into the xylem, which has the lowest water potential in the root due to the tension created by the transpiration stream.",
        markScheme: [
          "Water enters root hair cells by osmosis",
          "Root hair cell sap has lower water potential / higher solute concentration than soil water",
          "Water moves down a water potential gradient / from high to low water potential",
          "Water crosses cortex cell by cell (symplast / apoplast pathway mentioned)",
          "Casparian strip forces water into endodermal cells / blocks apoplast at endodermis",
          "Water enters xylem (accept 'by osmosis into xylem')",
        ],
        commonError: "Students often say water moves by 'diffusion' rather than 'osmosis', or fail to mention the water potential gradient explicitly. Osmosis must be named.",
        guideRef: "Root Hair Cells and Water and Ion Uptake",
        difficulty: "core",
        hints: [
          "Start by naming the process by which water crosses a membrane.",
          "Describe the water potential difference between soil water and root hair cell sap.",
          "Which structure in the root endodermis controls the apoplast pathway?",
          "End with how water gets from the cortex into the xylem vessels.",
        ],
        strategy: "Sequence the pathway step by step; name each process and structure.",
      },
      {
        id: "bio-transport-plants-qa-q02",
        question: "A student investigates transpiration using a potometer. They record the distance moved by an air bubble in 5 minutes under four conditions: still air (15 mm), humid still air (5 mm), moving air/wind (38 mm), and bright light + still air (22 mm). The capillary tube radius is 0.6 mm.\n(a) Calculate the rate of water uptake in still air. Give your answer in mm³ min⁻¹. [2]\n(b) Explain why the rate was lowest in humid still air. [2]\n(c) Suggest one way the student could improve the reliability of this investigation. [1]",
        marks: 5,
        modelAnswer: "(a) Volume = π × r² × d = π × 0.6² × 15 = π × 0.36 × 15 = 16.96 mm³. Rate = 16.96 / 5 = 3.39 mm³ min⁻¹ (accept 3.4). (b) In humid air, the water vapour concentration of the surrounding air is high. This reduces (or eliminates) the concentration gradient of water vapour between the leaf interior and the outside air. Because diffusion rate depends on the concentration gradient, the rate of diffusion of water vapour out of stomata is reduced, so the rate of transpiration (and thus water uptake) decreases. (c) Any one of: repeat each condition and calculate a mean; use a thermometer to ensure temperature is constant between conditions; allow the shoot to equilibrate for 5 minutes before recording each condition.",
        markScheme: [
          "(a) Correct volume = 16.96 mm³ (or 17.0 mm³) [1]; Rate = 3.4 mm³ min⁻¹ [1]",
          "(b) High humidity reduces the water vapour concentration gradient between leaf interior and outside air [1]",
          "(b) Lower gradient → slower diffusion of water vapour / lower transpiration rate [1]",
          "(c) Repeat measurements and calculate mean / control temperature / equilibration time (any one) [1]",
        ],
        commonError: "In part (a), students often forget to divide by time and give total volume rather than rate. In (b), students say 'less evaporation' without explaining the gradient — the gradient explanation is what the mark scheme rewards.",
        guideRef: "Investigating Transpiration with a Potometer",
        difficulty: "challenge",
        hints: [
          "(a) Write the formula Volume = π r² d before substituting numbers.",
          "(a) r = 0.6 mm, so r² = 0.36. Multiply by π and by distance (15 mm), then divide by 5 minutes.",
          "(b) Think about what 'humid air' means for the concentration of water vapour outside the leaf.",
          "(b) How does the gradient (inside vs. outside) change, and what happens to diffusion rate?",
        ],
        strategy: "Calculate rate = volume / time; apply Fick's law qualitatively for part (b).",
        solutions: [
          {
            label: "Method 1: formula substitution",
            steps: [
              "Volume = π × r² × distance = π × (0.6)² × 15",
              "= π × 0.36 × 15 = 16.96 mm³",
              "Rate = 16.96 ÷ 5 = 3.39 mm³ min⁻¹",
            ],
          },
        ],
      },
      {
        id: "bio-transport-plants-qa-q03",
        question: "Explain why plants wilt on a hot, dry, windy afternoon, and describe what happens at the stomata to limit further water loss. [4]",
        marks: 4,
        modelAnswer: "On a hot, dry, windy afternoon, all four conditions increase transpiration rate: high temperature increases the rate of evaporation; dry air (low humidity) increases the water vapour concentration gradient out of stomata; wind removes the humid boundary layer, maintaining a steep gradient. As a result, water is lost faster than it can be absorbed through the roots. Cells, including mesophyll cells and guard cells, lose water by osmosis and become less turgid (flaccid). This causes the whole plant to droop — wilting. The guard cells, now flaccid, cannot maintain their curved shape and straighten, causing the stomatal pore to close. Closure reduces the rate of water vapour loss through stomata, limiting further wilting.",
        markScheme: [
          "High temperature / dry air / wind all increase transpiration rate (any two) [1]",
          "Transpiration rate exceeds rate of water uptake from roots [1]",
          "Cells lose turgor (turgidity) / become flaccid due to water loss [1]",
          "Guard cells become flaccid → stomata close → reduces water vapour loss [1]",
        ],
        commonError: "Students often describe guard cells 'pumping water out' to close stomata. In fact, guard cells passively lose water by osmosis when they become more concentrated, or when K⁺ ions leave — stomatal closure is the result of guard cells losing turgor, not active pumping of water.",
        guideRef: "Transpiration — Loss of Water Vapour",
        difficulty: "core",
        hints: [
          "List the conditions (hot, dry, windy) and how each increases transpiration.",
          "What happens when the rate of water loss exceeds water uptake?",
          "Think about what turgor pressure does for plant cells — and what happens when cells lose it.",
          "How does guard cell turgor control the stomatal pore?",
        ],
        strategy: "Cause-and-effect chain: condition → effect on gradient → effect on transpiration rate → effect on turgor → effect on stomata.",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "bio-transport-plants-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Xylem and phloem structure, function, and position of vascular tissue in root, stem and leaf.",
        questions: [
          {
            id: "bio-transport-plants-bank-mcq1-q01",
            question: "Which statement about phloem is correct?",
            options: [
              "Phloem is made of dead cells and transports water upward",
              "Phloem transports sucrose and amino acids and can transport in both directions",
              "Phloem is lignified to prevent collapse under tension",
              "Phloem carries mineral ions from root to leaf only",
            ],
            answerIndex: 1,
            explanation: "Phloem consists of living sieve tube elements and companion cells. It transports sucrose and amino acids (translocation) in both directions — from sources to sinks anywhere in the plant. Water transport, lignification, and ion transport are features of xylem.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-plants-bank-mcq1-q02",
            question: "In which part of the root is the xylem located?",
            options: [
              "Outer edge, just inside the epidermis",
              "Scattered randomly throughout the cortex",
              "Forming a central star-shaped core",
              "Immediately inside the phloem in a ring",
            ],
            answerIndex: 2,
            explanation: "In a dicotyledonous root, xylem forms a central star-shaped structure (with typically 2–6 arms). Phloem lies in the spaces between the xylem arms. This central arrangement resists the pulling tension generated by the transpiration stream.",
            guideRef: "Position of Vascular Tissue in Root, Stem and Leaf",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-plants-bank-mcq1-q03",
            question: "A student places a leafy shoot in a solution of potassium nitrate (KNO₃). She then blocks the gas exchange of the root cells with nitrogen gas (removing all oxygen). What result would she expect?",
            options: [
              "Both water uptake and nitrate uptake stop immediately",
              "Water uptake continues normally but nitrate uptake is greatly reduced",
              "Nitrate uptake continues but water uptake stops",
              "Both processes continue normally because nitrogen replaces oxygen",
            ],
            answerIndex: 1,
            explanation: "Water enters root cells by osmosis, which is a passive process requiring no ATP — so it continues in the absence of oxygen. Nitrate (NO₃⁻) is taken up by active transport against its concentration gradient, a process that requires ATP from aerobic respiration. Removing oxygen prevents aerobic respiration, so ATP production falls and nitrate uptake decreases substantially.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "core",
            hints: [
              "Classify each process: osmosis is passive; active transport needs ATP.",
              "Which of the two processes requires oxygen (via aerobic respiration)?",
              "What happens to ATP supply when oxygen is removed?",
            ],
          },
          {
            id: "bio-transport-plants-bank-mcq1-q04",
            question: "The diagram shows a cross-section of a leaf vein. Which correctly describes the position of xylem?",
            options: [
              "Xylem is on the lower (abaxial) surface of the vein",
              "Xylem is in the centre of the vein, equidistant from both surfaces",
              "Xylem is on the upper (adaxial) surface of the vein",
              "Xylem and phloem are randomly mixed within the vein",
            ],
            answerIndex: 2,
            explanation: "In a leaf vein, xylem is on the upper (adaxial) surface and phloem is on the lower (abaxial) surface. This is consistent with the stem arrangement where xylem is always on the inner side (towards the centre / upper surface in a leaf).",
            guideRef: "Position of Vascular Tissue in Root, Stem and Leaf",
            difficulty: "core",
            hints: [
              "Recall the pattern from the stem: xylem is always on the 'inner' side.",
              "In a leaf, which surface faces the light (and is therefore considered 'upper')?",
            ],
          },
          {
            id: "bio-transport-plants-bank-mcq1-q05",
            question: "What feature of xylem vessels allows them to transport water without collapsing under the tension of the transpiration stream?",
            options: [
              "Their living cytoplasm, which actively pumps water",
              "Lignin deposited in their cell walls, providing rigid support",
              "Sieve plates that regulate flow between cells",
              "Companion cells that provide structural support",
            ],
            answerIndex: 1,
            explanation: "Lignin is a hard, waterproof polymer deposited in the secondary walls of xylem vessels. It provides the rigidity to withstand the negative pressure (tension) generated when water is pulled upward. Sieve plates and companion cells are phloem features; xylem vessels have no cytoplasm.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "core",
            hints: [
              "Recall the key structural features that make xylem dead and strong.",
              "What material is deposited in the cell walls of xylem?",
            ],
          },
          {
            id: "bio-transport-plants-bank-mcq1-q06",
            question: "A plant is treated with a chemical that specifically inhibits carrier proteins in root cell membranes. Which of the following is the most likely outcome?",
            options: [
              "Water absorption stops; mineral absorption is unaffected",
              "Both water and mineral absorption stop because both require carrier proteins",
              "Mineral ion absorption is greatly reduced; water absorption continues normally",
              "Translocation in the phloem stops, but xylem transport continues",
            ],
            answerIndex: 2,
            explanation: "Carrier proteins (transporters) are essential for active transport of mineral ions across membranes. Inhibiting them blocks ion uptake. Water moves by osmosis through aquaporins (water channels) or directly through the membrane — not through ion carrier proteins — so water uptake is unaffected. Phloem translocation is a different process not directly dependent on root membrane carriers.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "challenge",
            hints: [
              "What type of process uses carrier proteins to move ions?",
              "Does water movement (osmosis) require the same type of carrier protein as ion transport?",
              "Could a root membrane carrier protein affect phloem in the leaf?",
            ],
            strategy: "Process identification — match mechanism to carrier protein dependence",
          },
        ],
      },
      {
        id: "bio-transport-plants-bank-mcq-2",
        title: "Transport in Plants — MCQ Paper 2",
        description: "Transpiration, guard cells, factors affecting transpiration and potometer calculations. 6 questions.",
        questions: [
          {
            id: "bio-transport-plants-bank-mcq2-q01",
            question: "Which of the following would decrease the rate of transpiration?",
            options: [
              "Moving the plant from indoors to a sunny windowsill",
              "Moving the plant from a warm room to a cool room",
              "Placing a fan next to the plant",
              "Moving the plant from shade to bright light",
            ],
            answerIndex: 1,
            explanation: "Lower temperature reduces the kinetic energy of water molecules, decreasing the rate of evaporation from mesophyll cell walls and reducing the water vapour concentration gradient across stomata — so transpiration rate falls. All other options increase temperature, light, or wind speed, which would increase transpiration.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-plants-bank-mcq2-q02",
            question: "Guard cells open stomata during daylight by:",
            options: [
              "Absorbing water by osmosis after actively taking up potassium ions",
              "Losing potassium ions, causing water to enter and cells to swell",
              "Producing glucose by photosynthesis, which increases cell pressure",
              "Pumping water molecules directly into the cell using ATP",
            ],
            answerIndex: 0,
            explanation: "In light, guard cells actively transport K⁺ ions into their vacuoles (using ATP). This lowers the water potential of the guard cell sap. Water then enters by osmosis from surrounding cells, making the guard cells turgid. Because the inner wall is thicker, the cells bow outward, opening the pore. Guard cells do not directly pump water molecules; water moves passively by osmosis.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "core",
            hints: [
              "What ion moves into guard cells in light?",
              "What happens to water potential when more solutes are present?",
              "How does water then move in response?",
            ],
          },
          {
            id: "bio-transport-plants-bank-mcq2-q03",
            question: "A plant is placed in a sealed transparent box with a small dish of desiccant (drying agent). After 2 hours, compared with the same plant in open air, the transpiration rate will be:",
            options: [
              "Higher, because the box traps warm air",
              "Lower, because the desiccant removes CO₂ needed for photosynthesis",
              "Higher, because the desiccant reduces humidity inside the box",
              "Lower, because water vapour builds up inside the box, reducing the concentration gradient",
            ],
            answerIndex: 3,
            explanation: "Even with a desiccant, in a sealed box transpired water vapour accumulates faster than a small desiccant dish can absorb it, so humidity inside the box rises. As humidity rises, the concentration gradient of water vapour between the leaf interior and the air decreases, so diffusion out of stomata slows and transpiration rate falls. Option C is incorrect because desiccant does remove water vapour — but the sealed box still causes humidity to increase as transpiration continues until equilibrium.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "challenge",
            hints: [
              "What happens to water vapour concentration in a sealed space as the plant transpires?",
              "How does the gradient between leaf interior and surrounding air change as humidity rises?",
              "What does Fick's law predict when the concentration gradient decreases?",
            ],
            strategy: "Apply the sealed-system argument — trace what changes over time inside the box.",
          },
          {
            id: "bio-transport-plants-bank-mcq2-q04",
            question: "In a potometer experiment, the air bubble travels 30 mm in 6 minutes. The capillary tube radius is 0.5 mm. What is the rate of water uptake in mm³ min⁻¹?",
            options: [
              "2.5 mm³ min⁻¹",
              "3.93 mm³ min⁻¹",
              "23.6 mm³ min⁻¹",
              "7.85 mm³ min⁻¹",
            ],
            answerIndex: 1,
            explanation: "Volume = π × r² × d = π × 0.5² × 30 = π × 0.25 × 30 = 23.56 mm³. Rate = 23.56 / 6 = 3.93 mm³ min⁻¹. Option C gives total volume (not dividing by time); option D gives π × 0.5² × 5 (dividing by wrong time); option A does not use π or uses wrong formula.",
            guideRef: "Investigating Transpiration with a Potometer",
            difficulty: "challenge",
            hints: [
              "Formula: Volume = π r² d. Identify r = 0.5 mm, d = 30 mm.",
              "Calculate r²: 0.5² = 0.25.",
              "Total volume = π × 0.25 × 30 ≈ 23.6 mm³. Now divide by time (6 min).",
            ],
            strategy: "Substitute into V = π r² d, then divide by time to get rate.",
          },
          {
            id: "bio-transport-plants-bank-mcq2-q05",
            question: "Which row correctly states the cause and effect of wilting?",
            options: [
              "Cause: low light; Effect: guard cells swell and stomata close",
              "Cause: transpiration exceeds water uptake; Effect: cells lose turgor and plant droops",
              "Cause: high humidity; Effect: cells become plasmolysed",
              "Cause: active transport failure; Effect: xylem vessels collapse",
            ],
            answerIndex: 1,
            explanation: "Wilting occurs when the rate of transpiration (water loss) exceeds the rate of water absorption from the soil. Water moves out of cells by osmosis, reducing turgor pressure. Without turgor, plant cells and the organs they make up cannot maintain their shape, causing drooping (wilting). Plasmolysis requires very concentrated external solutions; xylem collapse is prevented by lignin.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-plants-bank-mcq2-q06",
            question: "A student wants to compare transpiration rates in sun and shade. She sets up two identical shoots in potometers. To make the comparison valid, which variable is MOST important to control?",
            options: [
              "The colour of the potometer tubing",
              "The number of leaves on each shoot",
              "The species of plant used for each shoot",
              "Whether the capillary tube is horizontal or vertical",
            ],
            answerIndex: 1,
            explanation: "The number (and total surface area) of leaves directly determines the area available for transpiration. If one shoot has more leaves, more water will be lost regardless of light conditions — confounding the results. The species should ideally also be the same, but leaf number is the most critical quantitative variable to control. Tube colour and orientation have negligible effects.",
            guideRef: "Investigating Transpiration with a Potometer",
            difficulty: "core",
            hints: [
              "What property of a leaf drives transpiration?",
              "Which of the options directly affects the rate of water loss from the shoot?",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-transport-plants-bank-qa-1",
        title: "Transport in Plants — Structured QA Paper 1",
        description: "Xylem, phloem, root uptake, and vascular tissue. 4 questions.",
        questions: [
          {
            id: "bio-transport-plants-bank-qa1-q01",
            question: "State three structural differences between xylem and phloem. [3]",
            marks: 3,
            modelAnswer: "1. Xylem cells are dead; phloem sieve tube elements are living. 2. Xylem cell walls are impregnated with lignin making them rigid; phloem cell walls are not lignified. 3. Xylem vessels are hollow tubes (end walls absent); phloem cells retain end walls modified as sieve plates with pores.",
            markScheme: [
              "Xylem is dead / phloem is living [1]",
              "Xylem is lignified / phloem is not lignified [1]",
              "Xylem has no end walls (hollow tubes) / phloem has sieve plates [1]",
            ],
            commonError: "Students often confuse the direction of transport as a 'structural' difference. The question asks about structure, so function (direction of transport) does not earn marks.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "warmup",
          },
          {
            id: "bio-transport-plants-bank-qa1-q02",
            question: "Explain why a plant kept in waterlogged soil for several weeks shows symptoms of mineral deficiency (yellowing leaves, stunted growth) even though water is plentiful. [4]",
            marks: 4,
            modelAnswer: "Mineral ions such as nitrates and magnesium ions are absorbed by root hair cells by active transport. Active transport requires energy in the form of ATP. ATP is produced by aerobic respiration in the root cells. Waterlogged soil has very little dissolved oxygen, so the root cells cannot carry out aerobic respiration efficiently. As a result, ATP production falls dramatically and the root cells cannot actively transport mineral ions against their concentration gradient into the root. Without adequate mineral ions (e.g. nitrates for amino acid/protein synthesis; magnesium for chlorophyll) the plant shows deficiency symptoms: yellow leaves (chlorosis from lack of Mg) and stunted growth (lack of nitrogen for proteins).",
            markScheme: [
              "Mineral ions absorbed by active transport [1]",
              "Active transport requires ATP / energy from respiration [1]",
              "Waterlogged soil lacks oxygen / conditions are anaerobic [1]",
              "Aerobic respiration cannot occur efficiently → less ATP → active transport fails [1]",
              "(Bonus/alternative) Named mineral and its deficiency symptom e.g. Mg → chlorosis [not required for 4 marks]",
            ],
            commonError: "Students often say 'the roots drown' or 'water prevents mineral uptake' — neither is precise. The key mechanism is anaerobic conditions → reduced ATP → failure of active transport.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "core",
            hints: [
              "Identify the process by which mineral ions cross the root hair cell membrane.",
              "What does that process require — and which cellular process provides it?",
              "What gas is absent in waterlogged soil, and what effect does this have?",
              "Trace the chain: no O₂ → no aerobic respiration → less ATP → ...",
            ],
            strategy: "Cause-and-effect chain: flooding → anaerobic → less ATP → active transport fails → deficiency.",
          },
          {
            id: "bio-transport-plants-bank-qa1-q03",
            question: "Draw and label a simple diagram of a cross-section through a dicotyledonous root to show the arrangement of xylem and phloem. [3]",
            marks: 3,
            modelAnswer: "A correctly drawn cross-section should show: a large central mass of xylem in a star shape (4 arms is most common in exam diagrams); phloem between the arms of the xylem star; endodermis as a ring surrounding the vascular tissue; cortex surrounding the endodermis. All four structures should be correctly labelled.",
            markScheme: [
              "Central xylem shown (star/cross shape) and labelled [1]",
              "Phloem shown between xylem arms and labelled [1]",
              "Endodermis (or 'ring surrounding vascular tissue') shown [1]",
            ],
            commonError: "Students often draw the root as a stem — placing xylem bundles in a ring around a pith. In the root, xylem is central and star-shaped with no pith.",
            guideRef: "Position of Vascular Tissue in Root, Stem and Leaf",
            difficulty: "core",
            hints: [
              "In the root, is xylem at the edge or the centre?",
              "What shape does the central xylem typically take?",
              "Where exactly is the phloem in relation to the xylem?",
            ],
            strategy: "Draw, then label. Check: is xylem central and star-shaped? Is phloem between arms?",
          },
          {
            id: "bio-transport-plants-bank-qa1-q04",
            question: "A scientist rings a tree by removing a 5 cm strip of bark (which contains the phloem) all the way around the trunk. After several weeks she observes that the bark above the ring swells and sugars accumulate there, but the roots begin to die. Explain these observations using your knowledge of transport in plants. [5]",
            marks: 5,
            modelAnswer: "The phloem in the bark transports sucrose (and amino acids) produced by photosynthesis in the leaves down to the roots — translocation. When the ring of bark (phloem) is removed, this downward flow of sucrose is interrupted. Sucrose accumulates in the phloem above the ring because it can no longer pass through, causing the swelling. Below the ring, the roots no longer receive sucrose. The roots are non-photosynthetic and depend on sucrose delivered by phloem as their energy source for respiration. Without sucrose, root cells cannot carry out respiration efficiently, cannot produce ATP, and begin to die. The xylem (which is in the wood, not the bark) is undamaged, so water continues to reach the leaves and the shoot remains alive initially.",
            markScheme: [
              "Phloem (in bark) transports sucrose from leaves to roots by translocation [1]",
              "Removing phloem interrupts downward flow of sucrose [1]",
              "Sucrose accumulates above the ring / causes swelling above ring [1]",
              "Roots receive no sucrose / cannot respire efficiently / cannot produce ATP [1]",
              "Roots die because they lack an energy source [1]",
            ],
            commonError: "Students sometimes say xylem carries sugar to the roots — it does not. Xylem transports water and mineral ions. Sugar transport is exclusively phloem (translocation). Also, students may confuse the bark (phloem) with the wood (xylem).",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "challenge",
            hints: [
              "Which tissue transports sugar (sucrose) — xylem or phloem? Where is this tissue located in the trunk?",
              "What is the consequence of removing that tissue for the downward movement of sugar?",
              "Why would sugars accumulate above the ring rather than below?",
              "What do root cells need sucrose for, and what happens when it is not delivered?",
            ],
            strategy: "Synoptic: connect translocation, respiration, and tissue location in tree anatomy.",
          },
        ],
      },
      {
        id: "bio-transport-plants-bank-qa-2",
        title: "Transport in Plants — Structured QA Paper 2",
        description: "Transpiration mechanisms, factors, and potometer investigation. 4 questions.",
        questions: [
          {
            id: "bio-transport-plants-bank-qa2-q01",
            question: "Describe and explain the mechanism by which water is moved from the roots to the leaves of a tall tree. [5]",
            marks: 5,
            modelAnswer: "Water evaporates from the moist cell walls of mesophyll cells in the leaf (evaporation). The water vapour then diffuses out through the stomata into the surrounding air (diffusion) — this is transpiration. As water is lost from mesophyll cells, their water potential falls and they draw water from the xylem in the leaf veins by osmosis. This creates a tension (negative pressure) in the xylem. Water molecules are cohesive — they are held together by hydrogen bonds — so this tension is transmitted as a pulling force all the way down the continuous water column to the roots. In the root, water enters the xylem from surrounding cells and ultimately from the soil via root hair cells. This entire process is called the transpiration stream and requires no energy input from the plant.",
            markScheme: [
              "Water evaporates from mesophyll cell walls / into leaf air spaces [1]",
              "Water vapour diffuses out through stomata (transpiration) [1]",
              "Creates tension / negative pressure in xylem [1]",
              "Cohesion of water molecules (hydrogen bonds) transmits tension down the column [1]",
              "Water drawn up continuously from roots / transpiration stream [1]",
            ],
            commonError: "Students often describe an 'osmosis pump' in the roots that pushes water up. While root pressure exists, it is not the primary mechanism for tall trees. The transpiration–cohesion–tension mechanism must be described for full marks.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "core",
            hints: [
              "Start at the leaf: what happens to water at the mesophyll cell surface?",
              "What does this do to water potential in the mesophyll cell — and then in the xylem?",
              "What property of water allows tension to be transmitted all the way down the xylem?",
              "Finish by describing water entering the xylem in the root.",
            ],
            strategy: "Describe events starting at the leaf (evaporation) → tension → cohesion → water pulled up.",
            solutions: [
              {
                label: "Cohesion-tension narrative",
                steps: [
                  "Evaporation of water from mesophyll cell walls lowers water potential in mesophyll.",
                  "Water moves by osmosis from xylem into mesophyll cells.",
                  "This creates tension (pull) at the top of the xylem column.",
                  "Hydrogen bonds (cohesion) transmit this tension throughout the water column.",
                  "Water is drawn continuously from roots into xylem, completing the transpiration stream.",
                ],
              },
            ],
          },
          {
            id: "bio-transport-plants-bank-qa2-q02",
            question: "The graph below shows how the transpiration rate of a plant changes over 24 hours. The rate is highest between 12:00 and 16:00, lowest at 02:00, and rises sharply at dawn. \n(a) Explain why transpiration rate is lowest at 02:00. [3]\n(b) Suggest and explain two reasons why the rate is highest in the early afternoon (12:00–16:00). [4]",
            marks: 7,
            modelAnswer: "(a) At 02:00 it is dark. In darkness, guard cells do not carry out photosynthesis and do not actively take up potassium ions. They lose turgor and become flaccid. The stomatal pores close (or are mostly closed). Because water vapour can no longer diffuse freely through closed stomata, transpiration rate falls to a minimum. Temperature is also lower at night, reducing evaporation. (b) Reason 1 — High temperature: midday temperatures are high, increasing the kinetic energy of water molecules at the mesophyll surface, speeding evaporation and increasing the water vapour concentration gradient from leaf to air. Reason 2 — High light intensity: bright sunlight causes guard cells to actively take up K⁺ ions, raising their solute concentration, drawing in water by osmosis (turgid) and opening the stomata fully, maximising the area for water vapour to diffuse out.",
            markScheme: [
              "(a) In darkness, stomata close because guard cells lose turgor [1]",
              "(a) No/little K⁺ uptake in dark / guard cells flaccid [1]",
              "(a) Lower temperature at night reduces evaporation rate [1] (any 3 of above points)",
              "(b) High temperature → faster evaporation / steeper concentration gradient [1] + explanation [1]",
              "(b) High light → stomata fully open / K⁺ uptake → turgid guard cells [1] + explanation [1]",
            ],
            commonError: "For part (a) students often just say 'stomata are closed' without explaining why (guard cells lose turgor in darkness). The mechanism must be described.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "core",
            hints: [
              "(a) Think about what controls stomatal opening — and what the absence of light does to guard cells.",
              "(a) Which ion movement in guard cells requires light, and what happens to turgor without it?",
              "(b) Identify the two main conditions that differ at noon vs. night.",
              "(b) For each condition, explain the sequence: condition → effect on evaporation/stomata → effect on transpiration.",
            ],
            strategy: "For each factor, write: Factor → mechanism → effect on gradient or stomata → effect on rate.",
          },
          {
            id: "bio-transport-plants-bank-qa2-q03",
            question: "A student uses a potometer to investigate the effect of wind on the rate of water uptake. She records the following results:\n- Still air: bubble travels 12 mm in 4 min\n- Gentle breeze: bubble travels 30 mm in 4 min\n- Strong wind: bubble travels 54 mm in 4 min\nCapillary tube radius: 0.5 mm.\n(a) Calculate the rate of water uptake in still air and in a strong wind. [4]\n(b) Explain why wind increases the rate of transpiration. [2]\n(c) State one assumption the student makes when using a potometer to measure transpiration rate. [1]",
            marks: 7,
            modelAnswer: "(a) Still air: Volume = π × 0.5² × 12 = π × 0.25 × 12 = 9.42 mm³; Rate = 9.42 / 4 = 2.36 mm³ min⁻¹ (accept 2.4). Strong wind: Volume = π × 0.25 × 54 = 42.41 mm³; Rate = 42.41 / 4 = 10.6 mm³ min⁻¹. (b) Wind removes the layer of humid air (the boundary layer) that accumulates just outside the stomata. This restores the steep concentration gradient of water vapour between the inside of the leaf and the outside air. The steeper gradient means water vapour diffuses out faster, so the rate of transpiration increases. (c) The student assumes that the rate of water uptake equals the rate of transpiration (that no water is used in other processes such as photosynthesis or cell growth).",
            markScheme: [
              "(a) Still air: Volume = 9.42 mm³ [1]; Rate = 2.36 (or 2.4) mm³ min⁻¹ [1]",
              "(a) Strong wind: Volume = 42.4 mm³ [1]; Rate = 10.6 mm³ min⁻¹ [1]",
              "(b) Wind removes humid boundary layer around leaf [1]",
              "(b) Restores/maintains concentration gradient of water vapour → faster diffusion [1]",
              "(c) Water uptake equals transpiration rate / some water used in photosynthesis/growth not transpired [1]",
            ],
            commonError: "In part (a) students frequently forget to square the radius before multiplying by π — they use r instead of r². In part (c), many students say the potometer is inaccurate rather than naming the specific assumption about water uptake vs. transpiration.",
            guideRef: "Investigating Transpiration with a Potometer",
            difficulty: "challenge",
            hints: [
              "(a) Write V = π r² d for each condition. r² = 0.5² = 0.25.",
              "(a) Still: V = π × 0.25 × 12. Strong: V = π × 0.25 × 54. Then divide each by 4 minutes.",
              "(b) What builds up just outside the stomata in still air?",
              "(b) How does the presence of that layer affect the concentration gradient for water vapour?",
            ],
            strategy: "V = π r² d for volume; divide by time for rate. For (b) trace: wind → boundary layer removed → gradient restored → faster diffusion.",
            solutions: [
              {
                label: "Method: formula and calculation",
                steps: [
                  "r = 0.5 mm, so r² = 0.25 mm².",
                  "Still air volume = π × 0.25 × 12 = 9.42 mm³; rate = 9.42 / 4 = 2.36 mm³ min⁻¹.",
                  "Strong wind volume = π × 0.25 × 54 = 42.41 mm³; rate = 42.41 / 4 = 10.60 mm³ min⁻¹.",
                  "Wind increases rate by a factor of 10.6 / 2.36 ≈ 4.5×.",
                ],
              },
            ],
          },
          {
            id: "bio-transport-plants-bank-qa2-q04",
            question: "Desert plants (xerophytes) often have the following adaptations: thick waxy cuticle, sunken stomata in pits, few stomata, and leaves reduced to spines. For each adaptation, explain how it reduces water loss by transpiration. [5]",
            marks: 5,
            modelAnswer: "1. **Thick waxy cuticle**: The cuticle is a waterproof layer of wax. A thicker cuticle reduces cuticular transpiration (water loss directly through the leaf surface without entering stomata), because wax is hydrophobic and slows the diffusion of water vapour through the cuticle. 2. **Sunken stomata in pits**: A moist layer of air (boundary layer) builds up inside the pit, reducing the water vapour concentration gradient between the inside of the leaf and the surrounding air. With a smaller gradient, diffusion of water vapour out through the stomata is slower. 3. **Fewer stomata**: With fewer pores, there is less total surface area through which water vapour can diffuse out, reducing overall transpiration rate. 4. **Leaves reduced to spines**: Spines have a greatly reduced surface area compared to flat leaves. Transpiration rate is proportional to the surface area over which evaporation can occur. Less surface area means much less water vapour loss.",
            markScheme: [
              "Thick waxy cuticle: reduces cuticular transpiration / waterproof layer slows water diffusion through epidermis [1]",
              "Sunken stomata: humid boundary layer in pit reduces concentration gradient / less diffusion [1]",
              "Fewer stomata: less surface area for diffusion / fewer pores [1]",
              "Leaves as spines: greatly reduced surface area for evaporation [1]",
              "(One mark for overall correct application of gradient/surface area principle across any adaptation) [1]",
            ],
            commonError: "Students often say sunken stomata 'keep water in' without explaining the gradient mechanism. The examiner wants the explanation in terms of the boundary layer and the reduced concentration gradient.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "challenge",
            hints: [
              "For each adaptation, ask: how does this change the concentration gradient or the surface area for diffusion?",
              "Sunken stomata: what gas accumulates in the sunken pit around the stoma?",
              "How does Fick's law (rate ∝ surface area × gradient) apply to leaves reduced to spines?",
            ],
            strategy: "Apply Fick's law: for each adaptation, identify whether it reduces surface area, reduces gradient, or reduces diffusion path length.",
          },
        ],
      },
    ],
  },
};
