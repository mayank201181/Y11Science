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
            id: "bio-transport-plants-bm1-01",
            question: "Which of the following correctly describes the structure of xylem vessels?",
            options: [
              "Living cells with perforated end walls and no lignin",
              "Dead cells with lignified walls and no end walls",
              "Living cells with cellulose walls arranged end-to-end",
              "Dead cells with thin walls and large vacuoles"
            ],
            answerIndex: 1,
            explanation: "Xylem vessels are formed from dead cells whose end walls break down. Their walls are thickened with lignin, making them strong and waterproof.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "warmup"
          },
          {
            id: "bio-transport-plants-bm1-02",
            question: "What is the main function of phloem tissue?",
            options: [
              "Transport of water from roots to leaves",
              "Support of the plant stem",
              "Transport of dissolved sugars from leaves to other parts",
              "Absorption of mineral ions from the soil"
            ],
            answerIndex: 2,
            explanation: "Phloem transports sucrose (and other organic solutes) produced by photosynthesis from the leaves to growing regions and storage organs — a process called translocation.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "warmup"
          },
          {
            id: "bio-transport-plants-bm1-03",
            question: "Phloem sieve tubes differ from xylem vessels because sieve tubes:",
            options: [
              "Are dead at maturity and have lignified walls",
              "Are living at maturity and have perforated sieve plates",
              "Contain no cytoplasm and have no end walls",
              "Are made of sclerenchyma fibres"
            ],
            answerIndex: 1,
            explanation: "Sieve tube elements are living cells with reduced cytoplasm. Their end walls form sieve plates — perforated structures that allow movement of solutes between cells.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "core",
            hints: [
              "Think about whether xylem or phloem cells are alive at maturity.",
              "Sieve plates are the defining feature of sieve tube elements — what do they look like?"
            ]
          },
          {
            id: "bio-transport-plants-bm1-04",
            question: "In a cross-section of a dicotyledonous root, where is the xylem located?",
            options: [
              "In a ring near the outside of the root",
              "Scattered throughout the cortex",
              "In the centre, arranged in a star shape",
              "In bundles on the inner edge of the cortex"
            ],
            answerIndex: 2,
            explanation: "In a dicot root, xylem forms a central star-shaped core (often X- or Y-shaped in cross-section). This central position provides mechanical strength to resist pulling forces.",
            guideRef: "Position of Vascular Tissue in Root, Stem and Leaf",
            difficulty: "core",
            hints: [
              "Think about what force acts on a root (being pulled by soil) — which position would be strongest?",
              "The word 'central' is the key: xylem is in the centre of a root."
            ]
          },
          {
            id: "bio-transport-plants-bm1-05",
            question: "In a cross-section of a dicotyledonous stem, vascular bundles are arranged:",
            options: [
              "In a central mass",
              "In a ring near the outside of the stem",
              "Scattered randomly throughout",
              "Only in the pith region"
            ],
            answerIndex: 1,
            explanation: "In a dicot stem, vascular bundles are arranged in a ring near the periphery. Within each bundle, xylem is on the inside (towards the centre) and phloem on the outside.",
            guideRef: "Position of Vascular Tissue in Root, Stem and Leaf",
            difficulty: "core",
            hints: [
              "In a monocot stem they are scattered — the question specifies dicotyledonous.",
              "This ring arrangement helps resist bending forces."
            ]
          },
          {
            id: "bio-transport-plants-bm1-06",
            question: "In a leaf, vascular tissue is found in the:",
            options: [
              "Waxy cuticle",
              "Midrib and veins",
              "Palisade mesophyll layer only",
              "Lower epidermis only"
            ],
            answerIndex: 1,
            explanation: "Vascular tissue (xylem and phloem) runs through the midrib and the network of veins in a leaf. Xylem delivers water; phloem removes sugars made by photosynthesis.",
            guideRef: "Position of Vascular Tissue in Root, Stem and Leaf",
            difficulty: "warmup"
          },
          {
            id: "bio-transport-plants-bm1-07",
            question: "Which feature of xylem vessels makes them well adapted to transport water?",
            options: [
              "They are living cells with a large central vacuole",
              "They have no end walls, forming a continuous tube",
              "They are surrounded by companion cells",
              "They have thin, flexible walls to allow expansion"
            ],
            answerIndex: 1,
            explanation: "The breakdown of end walls between xylem cells creates long, uninterrupted tubes through which water can flow with minimal resistance. Lignified walls also prevent collapse under tension.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "core",
            hints: [
              "Consider what would slow the flow of water if end walls remained intact.",
              "Think about what 'continuous' means for a transport pathway."
            ]
          },
          {
            id: "bio-transport-plants-bm1-08",
            question: "Companion cells in phloem are important because they:",
            options: [
              "Provide structural support by producing lignin",
              "Supply energy (ATP) to sieve tube elements for active loading",
              "Transport water alongside sucrose molecules",
              "Produce the sucrose that is translocated"
            ],
            answerIndex: 1,
            explanation: "Sieve tube elements have reduced cytoplasm and no nucleus. Companion cells, which retain full metabolic activity, supply ATP and other molecules needed for active loading of sucrose into the phloem.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "core",
            hints: [
              "Sieve tube elements cannot generate their own ATP — which cell assists them?",
              "Loading sucrose against a concentration gradient requires energy."
            ]
          },
          {
            id: "bio-transport-plants-bm1-09",
            question: "A student examines a cross-section of a vascular bundle from a dicot stem. Xylem is identified on the inner side of the bundle. What tissue is on the outer side?",
            options: [
              "Epidermis",
              "Phloem",
              "Endodermis",
              "Cortex"
            ],
            answerIndex: 1,
            explanation: "In a dicot stem vascular bundle, phloem lies on the outer (abaxial) side and xylem on the inner side. This arrangement is consistent across all dicot stems.",
            guideRef: "Position of Vascular Tissue in Root, Stem and Leaf",
            difficulty: "core",
            hints: [
              "Remember the mnemonic: in a stem bundle, Phloem is on the Periphery.",
              "The outer position of phloem puts it closer to the bark, where sugars need to move up and down."
            ]
          },
          {
            id: "bio-transport-plants-bm1-10",
            question: "Which statement best explains why xylem walls are impregnated with lignin?",
            options: [
              "Lignin is permeable to water, allowing absorption along the length of the vessel",
              "Lignin makes walls rigid and waterproof, preventing collapse and lateral water loss",
              "Lignin dissolves in water to provide mineral ions to the plant",
              "Lignin enables active transport of water against a concentration gradient"
            ],
            answerIndex: 1,
            explanation: "Lignin is a hard, waterproof polymer. It strengthens xylem walls so they do not collapse under the negative pressure (tension) created by transpiration, and prevents water leaking out through the walls.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "challenge",
            hints: [
              "Transpiration creates a 'pull' — what would happen to a thin-walled tube under suction?",
              "Waterproofing ensures water travels upward through the lumen, not sideways through walls."
            ]
          }
        ]
      },
      {
        id: "bio-transport-plants-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Root hair cells, water and ion uptake, osmosis and active transport.",
        questions: [
          {
            id: "bio-transport-plants-bm2-01",
            question: "Root hair cells are adapted for absorption. Which feature directly increases the rate of absorption?",
            options: [
              "A thick, waxy cuticle",
              "A very large surface area to volume ratio",
              "Chloroplasts for photosynthesis",
              "Lignified walls"
            ],
            answerIndex: 1,
            explanation: "Root hair cells extend as long, thin projections into the soil, dramatically increasing the surface area exposed to soil water and mineral ions, speeding up absorption.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "warmup"
          },
          {
            id: "bio-transport-plants-bm2-02",
            question: "Water enters root hair cells by osmosis. This occurs because:",
            options: [
              "The soil water has a lower water potential than the root hair cell cytoplasm",
              "The root hair cell cytoplasm has a lower water potential than the soil water",
              "Active transport pumps water molecules into the cell",
              "The cell wall forces water in by pressure"
            ],
            answerIndex: 1,
            explanation: "Mineral ions are actively absorbed into root hair cells, lowering their water potential. Soil water (relatively pure) has a higher water potential, so water moves in by osmosis down the water potential gradient.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "warmup"
          },
          {
            id: "bio-transport-plants-bm2-03",
            question: "Mineral ions are absorbed from the soil into root hair cells against their concentration gradient. Which process is responsible?",
            options: [
              "Osmosis",
              "Diffusion",
              "Active transport",
              "Facilitated diffusion"
            ],
            answerIndex: 2,
            explanation: "Moving ions from a low concentration (soil water) to a higher concentration (cell cytoplasm) requires energy. Carrier proteins in the membrane use ATP to pump ions in — this is active transport.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "core",
            hints: [
              "If ions move against their concentration gradient, does this require energy or not?",
              "Which process uses ATP and membrane carrier proteins to move substances?"
            ]
          },
          {
            id: "bio-transport-plants-bm2-04",
            question: "A plant is placed in a solution with a higher concentration of mineral ions than its root cells. What will happen to water uptake?",
            options: [
              "Water uptake increases because ions attract water",
              "Water uptake stops or reverses as water leaves the root by osmosis",
              "Water uptake is unaffected because it depends only on active transport",
              "Mineral ions are absorbed faster, which pulls water in"
            ],
            answerIndex: 1,
            explanation: "If the external solution is more concentrated, it has a lower water potential than root cells. Water will leave the cells by osmosis (plasmolysis can occur), so water uptake decreases or reverses.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "core",
            hints: [
              "Osmosis moves water from high to low water potential — which side is higher here?",
              "Think about what happens to cells when they lose water (plasmolysis)."
            ]
          },
          {
            id: "bio-transport-plants-bm2-05",
            question: "Which of the following would reduce the rate of active transport of ions into root hair cells?",
            options: [
              "Increasing soil temperature from 10 °C to 20 °C",
              "Adding a metabolic poison that inhibits respiration",
              "Increasing the concentration of ions in the soil",
              "Increasing the surface area of root hair cells"
            ],
            answerIndex: 1,
            explanation: "Active transport is powered by ATP from respiration. A respiratory inhibitor reduces ATP production, so the ion pumps in the membrane cannot function, drastically reducing active uptake.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "core",
            hints: [
              "Active transport requires ATP — where does ATP come from?",
              "A respiratory inhibitor would block ATP production."
            ]
          },
          {
            id: "bio-transport-plants-bm2-06",
            question: "Once water enters the root hair cell, it moves toward the xylem. What drives this movement through the cells of the cortex?",
            options: [
              "A water potential gradient from cortex cells to xylem",
              "Active transport through each cell membrane",
              "Capillary action through the cell walls of the cortex",
              "Pressure created by the expanding vacuoles"
            ],
            answerIndex: 0,
            explanation: "As xylem draws water up (due to transpiration), water potential in xylem is very low. This creates a water potential gradient across the cortex, drawing water from cell to cell by osmosis toward the xylem.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "core",
            hints: [
              "What creates the 'pull' at the xylem end — is it transpiration?",
              "Osmosis always follows a water potential gradient."
            ]
          },
          {
            id: "bio-transport-plants-bm2-07",
            question: "Root hair cells do not have chloroplasts. What is the significance of this observation?",
            options: [
              "They cannot carry out photosynthesis, so they rely on sugars from the phloem for energy",
              "They cannot produce water, so they rely entirely on osmosis",
              "They cannot perform active transport because they have no ATP",
              "They have fewer mitochondria than other cells"
            ],
            answerIndex: 0,
            explanation: "Root hair cells are underground and receive no light. They have no chloroplasts and therefore cannot photosynthesise. They obtain glucose from the phloem and respire it to produce ATP for active transport of ions.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "core",
            hints: [
              "Chloroplasts are for photosynthesis. Roots are underground — why would they not need them?",
              "Energy for active transport comes from respiration of glucose delivered by phloem."
            ]
          },
          {
            id: "bio-transport-plants-bm2-08",
            question: "A student uses a light microscope to view a cross-section of a root. She can see many elongated cells on the outer surface. What are these cells and what is their role?",
            options: [
              "Guard cells; controlling water loss by closing",
              "Companion cells; supplying ATP to the xylem",
              "Root hair cells; absorbing water and mineral ions",
              "Palisade cells; absorbing sunlight for photosynthesis"
            ],
            answerIndex: 2,
            explanation: "The elongated cells on the outer surface of a root cross-section are root hair cells. Their extended shape increases surface area, maximising absorption of water and mineral ions from the soil.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "warmup"
          },
          {
            id: "bio-transport-plants-bm2-09",
            question: "Which pair correctly matches the substance and the process by which it enters root hair cells from the soil?",
            options: [
              "Water — active transport; nitrate ions — osmosis",
              "Water — osmosis; nitrate ions — active transport",
              "Water — diffusion; nitrate ions — diffusion",
              "Water — active transport; nitrate ions — active transport"
            ],
            answerIndex: 1,
            explanation: "Water enters by osmosis (high to low water potential). Nitrate ions are absorbed against their concentration gradient using ATP — this is active transport.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "core",
            hints: [
              "Which substance moves down a water potential gradient — water or ions?",
              "Mineral ions are often in lower concentration in soil than in cells — which way does the gradient go?"
            ]
          },
          {
            id: "bio-transport-plants-bm2-10",
            question: "A farmer adds an excess of fertiliser to soil. He later notices his crops wilting. Which explanation best accounts for this?",
            options: [
              "Excess nitrate ions block the xylem vessels, preventing water flow",
              "The very concentrated soil solution has a lower water potential than the roots, causing water to leave cells",
              "Fertiliser ions are toxic and kill the root hair cells",
              "Excess ions are absorbed too quickly, using up all the ATP"
            ],
            answerIndex: 1,
            explanation: "Excess fertiliser makes the soil solution very concentrated. Its water potential drops below that of root cells. Water moves out of root cells by osmosis, causing plasmolysis and wilting.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "challenge",
            hints: [
              "Osmosis always moves water from high to low water potential.",
              "If the soil is more concentrated than the cell sap, in which direction will water move?"
            ]
          }
        ]
      },
      {
        id: "bio-transport-plants-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Transpiration, stomata, guard cells and wilting.",
        questions: [
          {
            id: "bio-transport-plants-bm3-01",
            question: "Transpiration is best defined as:",
            options: [
              "The transport of water from roots to leaves through xylem",
              "The loss of water vapour from the surfaces of a plant, mainly through stomata",
              "The absorption of water from the soil by root hair cells",
              "The evaporation of water from the surface of the soil"
            ],
            answerIndex: 1,
            explanation: "Transpiration is the evaporation and diffusion of water vapour from plant surfaces, predominantly through the stomata in leaves.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "warmup"
          },
          {
            id: "bio-transport-plants-bm3-02",
            question: "Where does evaporation of water mostly occur within a leaf before the water vapour diffuses out through stomata?",
            options: [
              "From the surface of the waxy cuticle",
              "From the cell walls of mesophyll cells into the air spaces",
              "From the xylem vessels directly",
              "From guard cells directly into the atmosphere"
            ],
            answerIndex: 1,
            explanation: "Water in the cell walls of spongy and palisade mesophyll cells evaporates into the internal air spaces. This water vapour then diffuses out through the stomata when they are open.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "core",
            hints: [
              "The leaf has large internal air spaces — where exactly does evaporation occur inside?",
              "Think about the pathway: cell walls → air spaces → stomata → atmosphere."
            ]
          },
          {
            id: "bio-transport-plants-bm3-03",
            question: "Guard cells control the opening and closing of stomata. Stomata open when guard cells:",
            options: [
              "Lose water and become flaccid",
              "Absorb water, become turgid and bow apart",
              "Produce lignin, making them rigid",
              "Die, allowing a gap to form"
            ],
            answerIndex: 1,
            explanation: "Guard cells have unevenly thickened walls. When they take up water by osmosis and become turgid, their shape bows outward, opening the stoma between them.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "warmup"
          },
          {
            id: "bio-transport-plants-bm3-04",
            question: "Guard cells become turgid in the light. Which substance is produced in guard cells in the light that lowers their water potential?",
            options: [
              "Starch",
              "Cellulose",
              "Sucrose (from conversion of starch)",
              "Lignin"
            ],
            answerIndex: 2,
            explanation: "In light, guard cells photosynthesise and convert starch to sucrose. This lowers their water potential, drawing water in by osmosis and making them turgid, opening the stoma.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "core",
            hints: [
              "Guard cells contain chloroplasts — what can they therefore do in light?",
              "Starch is insoluble and does not affect water potential; sucrose does."
            ]
          },
          {
            id: "bio-transport-plants-bm3-05",
            question: "Why do most plants close their stomata in the dark?",
            options: [
              "To retain carbon dioxide produced by respiration",
              "Because photosynthesis stops, guard cells lose sucrose, water potential rises, water leaves, they become flaccid",
              "Because temperature drops at night, freezing the guard cells",
              "To prevent excess mineral ions from leaking out"
            ],
            answerIndex: 1,
            explanation: "In darkness, guard cells stop photosynthesising. Sucrose is converted back to starch, raising their water potential. Water leaves by osmosis, guard cells become flaccid and the stoma closes.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "core",
            hints: [
              "Reverse the process that opens stomata: what happens when light is removed?",
              "Flaccid guard cells cannot bow apart, so the stomatal pore closes."
            ]
          },
          {
            id: "bio-transport-plants-bm3-06",
            question: "Most stomata are located on the lower epidermis of leaves rather than the upper epidermis. What is the main advantage of this?",
            options: [
              "The lower surface receives more light, speeding up opening",
              "Shade on the lower surface reduces evaporation, limiting water loss",
              "The lower epidermis is thicker, providing more space for stomata",
              "Carbon dioxide is heavier than air and sinks to the lower surface"
            ],
            answerIndex: 1,
            explanation: "The upper surface is exposed to direct sunlight and higher temperatures, which would greatly increase evaporation. Placing stomata on the shaded lower surface reduces water loss while still allowing gas exchange.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "core",
            hints: [
              "Think about where the sun shines on a leaf — upper or lower surface?",
              "Less evaporation means a lower transpiration rate."
            ]
          },
          {
            id: "bio-transport-plants-bm3-07",
            question: "A plant wilts when it loses too much water. What is happening at the cellular level when a plant wilts?",
            options: [
              "Cells become turgid, exerting pressure on each other",
              "Cells become plasmolysed and lose turgor pressure",
              "Cell walls break down due to water loss",
              "Chloroplasts are destroyed by excessive heat"
            ],
            answerIndex: 1,
            explanation: "When cells lose water, their contents shrink away from the cell wall (plasmolysis in extreme cases). Turgor pressure falls, so cells and the whole plant lose their rigidity — the plant wilts.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "core",
            hints: [
              "Turgor pressure is what keeps non-woody plants upright — what happens when it is lost?",
              "Plasmolysis is when the cell membrane pulls away from the wall."
            ]
          },
          {
            id: "bio-transport-plants-bm3-08",
            question: "The waxy cuticle on the leaf surface reduces water loss. Which of the following best explains why the cuticle does not completely stop transpiration?",
            options: [
              "The cuticle is made of cellulose, which is permeable to water",
              "Stomata remain open during the day to allow gas exchange, providing a route for water vapour",
              "The cuticle dissolves in high humidity",
              "Water evaporates from the xylem through the cuticle"
            ],
            answerIndex: 1,
            explanation: "Open stomata are necessary for gas exchange (CO2 in, O2 out) during photosynthesis. Water vapour also diffuses out through these open pores, which is why transpiration cannot be completely prevented.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "core",
            hints: [
              "What must remain open during the day for photosynthesis to occur?",
              "Any open pore that lets gases in will also let water vapour out."
            ]
          },
          {
            id: "bio-transport-plants-bm3-09",
            question: "Which of the following is the correct sequence for the transpiration stream in a plant?",
            options: [
              "Phloem → root → stem → leaf → stomata",
              "Soil water → root hair → cortex → xylem → mesophyll → stomata",
              "Stomata → xylem → root → soil",
              "Root hair → phloem → leaf mesophyll → guard cells"
            ],
            answerIndex: 1,
            explanation: "Water moves: soil → root hair cells → cortex cells → xylem in root → xylem in stem → xylem in leaf → mesophyll cell walls → air spaces → out through stomata.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "challenge",
            hints: [
              "Water enters at the roots (root hairs) and exits at the leaves (stomata).",
              "Xylem is the transport tissue — it links root uptake to leaf evaporation."
            ]
          },
          {
            id: "bio-transport-plants-bm3-10",
            question: "A student covers all stomata on a leaf with petroleum jelly. Compared with an untreated leaf, the treated leaf will show:",
            options: [
              "Increased water loss due to jelly trapping heat",
              "Greatly reduced water loss because stomata are blocked",
              "The same water loss because cuticle transpiration is unchanged",
              "Increased photosynthesis because CO2 is trapped inside"
            ],
            answerIndex: 1,
            explanation: "Blocking stomata removes the main route for water vapour to escape. Only minimal cuticular transpiration remains, so total water loss is greatly reduced.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "challenge",
            hints: [
              "Stomata account for the majority of water loss — blocking them has a large effect.",
              "Cuticular transpiration is very small, so water loss is not reduced to zero but is greatly reduced."
            ]
          }
        ]
      },
      {
        id: "bio-transport-plants-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Factors affecting transpiration rate, potometer use, and xerophyte adaptations.",
        questions: [
          {
            id: "bio-transport-plants-bm4-01",
            question: "Which environmental factor increases the rate of transpiration by increasing the energy available to evaporate water?",
            options: [
              "High humidity",
              "Still air (no wind)",
              "High light intensity",
              "Low temperature"
            ],
            answerIndex: 2,
            explanation: "High light intensity causes stomata to open wider and provides more energy (heat) for evaporation. It is the main environmental driver of transpiration during the day.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "warmup"
          },
          {
            id: "bio-transport-plants-bm4-02",
            question: "How does low humidity increase the rate of transpiration?",
            options: [
              "It increases the water potential inside the leaf",
              "It creates a steeper water vapour concentration gradient between leaf and air",
              "It causes guard cells to open by osmosis",
              "It reduces the thickness of the waxy cuticle"
            ],
            answerIndex: 1,
            explanation: "In dry air (low humidity), the concentration of water vapour outside the leaf is much lower than inside. This steeper gradient accelerates diffusion of water vapour out through stomata.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "warmup"
          },
          {
            id: "bio-transport-plants-bm4-03",
            question: "A plant is moved from still air to windy conditions. What effect does wind have on transpiration rate?",
            options: [
              "Decreases — wind cools the leaf, reducing evaporation",
              "No effect — wind only affects animals",
              "Increases — wind removes water vapour from around the leaf, steepening the gradient",
              "Increases — wind forces stomata to open wider"
            ],
            answerIndex: 2,
            explanation: "In still air, a humid boundary layer builds up around leaves, reducing the concentration gradient. Wind disperses this layer, maintaining a steep gradient and increasing transpiration rate.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "core",
            hints: [
              "Think about the concentration of water vapour just outside the leaf in still air versus windy conditions.",
              "A steeper gradient means faster diffusion."
            ]
          },
          {
            id: "bio-transport-plants-bm4-04",
            question: "A potometer is used to measure transpiration rate. What does the potometer actually measure?",
            options: [
              "The mass of water lost by evaporation from the soil",
              "The rate of water uptake by the cut shoot",
              "The rate of photosynthesis in the leaves",
              "The rate of water loss through the cuticle"
            ],
            answerIndex: 1,
            explanation: "A potometer measures the rate of water uptake by a cut shoot. Because most water absorbed is lost by transpiration, this is used as an indirect measure of transpiration rate.",
            guideRef: "Investigating Transpiration with a Potometer",
            difficulty: "warmup"
          },
          {
            id: "bio-transport-plants-bm4-05",
            question: "In a potometer experiment, a student records that the air bubble moves 20 mm in 5 minutes. What is the rate of water uptake?",
            options: [
              "4 mm per minute",
              "100 mm per minute",
              "20 mm per minute",
              "0.25 mm per minute"
            ],
            answerIndex: 0,
            explanation: "Rate = distance divided by time = 20 mm / 5 min = 4 mm per minute.",
            guideRef: "Investigating Transpiration with a Potometer",
            difficulty: "core",
            hints: [
              "Rate = distance / time.",
              "20 divided by 5 = ?"
            ]
          },
          {
            id: "bio-transport-plants-bm4-06",
            question: "Which of the following is the most important precaution when setting up a potometer?",
            options: [
              "Ensuring the leaves are covered with petroleum jelly",
              "Keeping the shoot in air while connecting it to the potometer",
              "Making all connections airtight and the system free of air bubbles (except the measured bubble)",
              "Using a shoot with no leaves"
            ],
            answerIndex: 2,
            explanation: "Any air leaks would break the water column and give false readings. The system must be fully airtight, with only the single introduced air bubble used to track water uptake.",
            guideRef: "Investigating Transpiration with a Potometer",
            difficulty: "core",
            hints: [
              "What would happen if air entered the xylem or the tubing — how would this affect readings?",
              "An airtight system ensures the bubble movement reflects water uptake, not air leaks."
            ]
          },
          {
            id: "bio-transport-plants-bm4-07",
            question: "A student compares transpiration rate in still air and in front of a fan. Which result would she expect?",
            options: [
              "Same rate — leaf anatomy is unchanged",
              "Lower rate in front of fan — cool air reduces evaporation",
              "Higher rate in still air — heat builds up around the leaf",
              "Higher rate in front of fan — wind removes the humid boundary layer"
            ],
            answerIndex: 3,
            explanation: "A fan mimics wind. It removes the humid air layer around the leaf, maintaining a steep water vapour gradient and increasing the rate of transpiration.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "core",
            hints: [
              "Still air allows a boundary layer of humid air to build up.",
              "Removing the boundary layer steepens the concentration gradient."
            ]
          },
          {
            id: "bio-transport-plants-bm4-08",
            question: "Cacti are xerophytes adapted to desert conditions. Which adaptation helps them reduce water loss?",
            options: [
              "Very large, broad leaves to maximise photosynthesis",
              "Stomata open only at night and leaves reduced to spines",
              "Thin cuticle to allow rapid gas exchange",
              "Dense covering of stomata on the upper surface"
            ],
            answerIndex: 1,
            explanation: "Cacti have reduced leaves (spines) to minimise surface area and stomata that open at night when it is cooler and less water would be lost. Both adaptations greatly reduce transpiration.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "challenge",
            hints: [
              "Less surface area means less evaporation — how have cacti reduced their leaf area?",
              "Opening stomata at night avoids the heat of the day when evaporation would be greatest."
            ]
          },
          {
            id: "bio-transport-plants-bm4-09",
            question: "In a potometer investigation, a student wants to test the effect of temperature on transpiration rate. Which variable must she keep constant?",
            options: [
              "Species of plant",
              "Light intensity, humidity and wind speed",
              "Length of the capillary tube",
              "Volume of the reservoir"
            ],
            answerIndex: 1,
            explanation: "To test temperature as an independent variable, all other factors that affect transpiration (light, humidity, wind) must be controlled. Light intensity, humidity and wind speed are all confounding variables.",
            guideRef: "Investigating Transpiration with a Potometer",
            difficulty: "challenge",
            hints: [
              "In a fair test, only one variable changes at a time.",
              "Light intensity, humidity and wind all affect transpiration — if they change, the results are not reliable."
            ]
          },
          {
            id: "bio-transport-plants-bm4-10",
            question: "Which combination of conditions would give the HIGHEST rate of transpiration?",
            options: [
              "Low temperature, high humidity, still air, dim light",
              "High temperature, low humidity, windy, bright light",
              "High temperature, high humidity, windy, dim light",
              "Low temperature, low humidity, still air, bright light"
            ],
            answerIndex: 1,
            explanation: "Each factor acts together: high temperature increases evaporation; low humidity steepens the gradient; wind removes humid boundary layer; bright light opens stomata. Together they maximise transpiration.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "challenge",
            hints: [
              "Think about which way each factor affects the rate — then pick the combination where all are at maximum.",
              "Each of the four factors individually increases transpiration — all four together gives the maximum rate."
            ]
          }
        ]
      }
    ],
    qaPapers: [
      {
        id: "bio-transport-plants-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Structure and function of vascular tissue, and root water and ion uptake.",
        questions: [
          {
            id: "bio-transport-plants-bq1-01",
            question: "State two structural differences between xylem vessels and phloem sieve tubes.",
            marks: 2,
            modelAnswer: "Xylem vessels are dead at maturity whereas phloem sieve tubes are living. Xylem vessel walls are lignified (waterproof) whereas phloem sieve tube walls are not lignified. Xylem vessels have no end walls (forming a continuous tube) whereas phloem sieve tubes have perforated sieve plates at their ends.",
            markScheme: [
              "One mark for each correct structural difference, up to 2 marks.",
              "Accept: xylem dead / phloem living; xylem lignified / phloem not lignified; xylem no end walls / phloem has sieve plates; xylem no cytoplasm / phloem has cytoplasm."
            ],
            commonError: "Confusing the direction or substance transported rather than describing structural features.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "warmup"
          },
          {
            id: "bio-transport-plants-bq1-02",
            question: "Explain how the structure of xylem vessels makes them well adapted for transporting water up a plant.",
            marks: 4,
            modelAnswer: "Xylem vessels are dead, hollow tubes with no end walls, forming a continuous column through which water can flow with little resistance. The walls are impregnated with lignin, which is waterproof, preventing water from leaking sideways, and rigid, preventing the vessel collapsing under the tension created by transpiration. The hollow lumen allows a large volume of water to flow per unit time.",
            markScheme: [
              "No end walls / continuous lumen — 1 mark.",
              "Allows unimpeded flow / reduces resistance — 1 mark.",
              "Lignin — waterproof, prevents leakage — 1 mark.",
              "Lignin — rigid / prevents collapse under tension — 1 mark."
            ],
            commonError: "Stating only that they are 'hollow' without explaining why this helps water flow, or omitting the role of lignin.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "core",
            hints: [
              "Structure-function questions need you to link each feature to a specific benefit.",
              "Think about: no end walls (flow), lignin (waterproof AND rigid)."
            ]
          },
          {
            id: "bio-transport-plants-bq1-03",
            question: "Describe the position of xylem and phloem in (a) a root and (b) a stem of a dicotyledonous plant.",
            marks: 4,
            modelAnswer: "(a) Root: xylem is in the centre of the root, arranged in a star (or X) shape. Phloem is located between the arms of the xylem star. (b) Stem: vascular bundles are arranged in a ring near the outside of the stem. Within each bundle, xylem is on the inner (central) side and phloem is on the outer side.",
            markScheme: [
              "(a) Xylem central / star-shaped — 1 mark.",
              "(a) Phloem between xylem arms — 1 mark.",
              "(b) Bundles in a ring near the outside — 1 mark.",
              "(b) Xylem inner, phloem outer within bundle — 1 mark."
            ],
            commonError: "Reversing the positions: putting xylem on the outside of stem bundles, or phloem in the centre of roots.",
            guideRef: "Position of Vascular Tissue in Root, Stem and Leaf",
            difficulty: "core",
            hints: [
              "For root: think 'central xylem' — it resists the pulling force on roots.",
              "For stem: bundles are near the edge; xylem is always on the inner side."
            ]
          },
          {
            id: "bio-transport-plants-bq1-04",
            question: "Explain why root hair cells are well adapted for the absorption of water from the soil.",
            marks: 3,
            modelAnswer: "Root hair cells have a long, thin extension that projects into spaces between soil particles, greatly increasing the surface area of the cell in contact with soil water. This large surface area allows a faster rate of osmosis into the cell. The cell sap has a lower water potential than the soil water (because mineral ions have been actively absorbed), so water enters by osmosis down the water potential gradient.",
            markScheme: [
              "Long thin extension / large surface area — 1 mark.",
              "Large surface area increases rate of osmosis / absorption — 1 mark.",
              "Lower water potential in cell than soil, so water enters by osmosis — 1 mark."
            ],
            commonError: "Stating that water enters by active transport rather than osmosis.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "core",
            hints: [
              "Three marks usually means three separate points — surface area, osmosis, and water potential gradient.",
              "Water always moves by osmosis: remember to mention the water potential gradient."
            ]
          },
          {
            id: "bio-transport-plants-bq1-05",
            question: "Mineral ions such as nitrate are absorbed by root hair cells against their concentration gradient. (a) Name the process by which this occurs. (b) Explain why this process requires oxygen.",
            marks: 3,
            modelAnswer: "(a) Active transport. (b) Active transport requires energy in the form of ATP. ATP is produced by aerobic respiration, which requires oxygen. Without oxygen, the rate of aerobic respiration falls, less ATP is produced, and active transport of ions slows or stops.",
            markScheme: [
              "(a) Active transport — 1 mark.",
              "(b) Active transport requires ATP — 1 mark.",
              "(b) ATP produced by aerobic respiration, which needs oxygen — 1 mark."
            ],
            commonError: "Saying oxygen is needed directly for transport, rather than for aerobic respiration to produce ATP.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "core",
            hints: [
              "Link the chain: oxygen → aerobic respiration → ATP → active transport.",
              "Remove any step and explain what fails."
            ]
          },
          {
            id: "bio-transport-plants-bq1-06",
            question: "A student waterlogged a plant pot so the roots were submerged in water with no air. After several days the plant wilted even though there was plenty of water. Suggest an explanation for this observation.",
            marks: 3,
            modelAnswer: "Waterlogging removes air from the soil, so oxygen cannot reach the root cells. Without oxygen, only anaerobic respiration can occur, producing much less ATP. Active transport of mineral ions into root hair cells stops (or greatly decreases) because there is insufficient ATP. As mineral ion concentration in the cells decreases, the water potential of the cells rises (becomes less negative), reducing the osmotic gradient. Therefore less water enters the roots by osmosis, and the plant wilts.",
            markScheme: [
              "No oxygen available to roots — 1 mark.",
              "Active transport of ions decreases / stops — 1 mark.",
              "Water potential gradient reduced, so less water absorbed by osmosis — 1 mark."
            ],
            commonError: "Stating that water cannot enter because there is no air in the water, rather than explaining the osmosis argument.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "challenge",
            hints: [
              "Why does the plant need oxygen in its roots if it is surrounded by water?",
              "Think: oxygen → ATP → active transport of ions → lower water potential → osmosis."
            ]
          },
          {
            id: "bio-transport-plants-bq1-07",
            question: "State the role of companion cells in phloem.",
            marks: 2,
            modelAnswer: "Companion cells are metabolically active cells that retain their nucleus and mitochondria. They supply ATP (produced by aerobic respiration) to the adjacent sieve tube elements, enabling active loading of sucrose into the phloem for translocation.",
            markScheme: [
              "Supply ATP / energy to sieve tube elements — 1 mark.",
              "Enable active loading of sucrose / translocation — 1 mark."
            ],
            commonError: "Confusing companion cells with guard cells or saying companion cells transport water.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "core",
            hints: [
              "Sieve tube elements have no nucleus — they need help from an adjacent cell.",
              "Active loading requires ATP — which organelle produces ATP?"
            ]
          },
          {
            id: "bio-transport-plants-bq1-08",
            question: "Explain why plants growing in very salty soil often wilt even when the soil contains liquid water.",
            marks: 3,
            modelAnswer: "Very salty soil has a high concentration of dissolved ions, giving the soil solution a very low water potential. The water potential of the soil solution is lower than that of the root cells. Therefore water moves out of the root cells by osmosis into the soil. The cells lose water, turgor pressure falls, and the plant wilts.",
            markScheme: [
              "Salty soil has low water potential — 1 mark.",
              "Lower than that of root cells — 1 mark.",
              "Water leaves cells by osmosis, turgor pressure falls / plant wilts — 1 mark."
            ],
            commonError: "Saying salt is toxic to cells rather than explaining the osmosis argument.",
            guideRef: "Root Hair Cells and Water and Ion Uptake",
            difficulty: "challenge",
            hints: [
              "Water moves by osmosis from high to low water potential — which side has lower water potential here?",
              "Losing water from cells reduces turgor — link this to wilting."
            ]
          },
          {
            id: "bio-transport-plants-bq1-09",
            question: "Describe the pathway water takes from soil to the air, naming structures it passes through.",
            marks: 4,
            modelAnswer: "Water passes from the soil into root hair cells by osmosis, then passes by osmosis through the cortex cells of the root to reach the xylem. The xylem transports water up the stem and into the leaves. In the leaf, water leaves the xylem and evaporates from the cell walls of mesophyll cells into the air spaces. Water vapour then diffuses out through the stomata into the surrounding air.",
            markScheme: [
              "Root hair cells (by osmosis) — 1 mark.",
              "Cortex cells to xylem — 1 mark.",
              "Xylem to mesophyll cells / evaporation from cell walls — 1 mark.",
              "Air spaces then out through stomata — 1 mark."
            ],
            commonError: "Missing the evaporation step inside the leaf — many students go directly from xylem to stomata.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "core",
            hints: [
              "Name the structures in order: soil → root hair → cortex → xylem → mesophyll cell walls → air spaces → stomata → air.",
              "Four marks means at least four different points or structures."
            ]
          },
          {
            id: "bio-transport-plants-bq1-10",
            question: "A scientist rings a tree (removes a ring of bark and phloem all the way around the trunk). Predict and explain what will happen to the tree over the following months.",
            marks: 4,
            modelAnswer: "Ringing removes the phloem but leaves the xylem intact. Water and mineral transport (xylem) continues normally in the short term, so leaves continue to photosynthesise. However, sucrose produced by photosynthesis can no longer be transported downward through the phloem to the roots. The roots are starved of organic nutrients. Over weeks to months, roots die as they cannot respire or grow. Once roots die, water and ion uptake stops. The entire tree dies.",
            markScheme: [
              "Phloem removed so sucrose cannot reach roots — 1 mark.",
              "Roots starved of organic nutrients — 1 mark.",
              "Roots die — 1 mark.",
              "Eventually water uptake stops / whole tree dies — 1 mark."
            ],
            commonError: "Stating that water transport stops immediately, not understanding that xylem is intact and only phloem is removed.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "challenge",
            hints: [
              "Which tissue is removed — xylem or phloem? What does each transport?",
              "Think about the consequences for the roots of losing their sugar supply over time."
            ]
          }
        ]
      },
      {
        id: "bio-transport-plants-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Transpiration mechanism, guard cells, stomata and wilting.",
        questions: [
          {
            id: "bio-transport-plants-bq2-01",
            question: "Explain what is meant by transpiration.",
            marks: 2,
            modelAnswer: "Transpiration is the loss of water vapour from a plant, mainly through the stomata in the leaves. It involves evaporation of water from the surfaces of mesophyll cells into the air spaces, followed by diffusion of water vapour out through open stomata.",
            markScheme: [
              "Loss of water vapour from the plant — 1 mark.",
              "Mainly through stomata — 1 mark."
            ],
            commonError: "Describing transpiration as simply 'sweating' or as the transport of water through xylem (which is the transpiration stream, not transpiration itself).",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "warmup"
          },
          {
            id: "bio-transport-plants-bq2-02",
            question: "Describe how guard cells control the opening and closing of stomata in response to light.",
            marks: 4,
            modelAnswer: "In bright light, guard cells photosynthesise and convert starch into sucrose. This lowers the water potential of the guard cells. Water enters by osmosis from surrounding cells. Guard cells become turgid. Because their inner walls are thicker than their outer walls, they bow outward when turgid, opening the stomatal pore. In darkness, the process reverses: sucrose is converted back to starch, water potential rises, water leaves by osmosis, guard cells become flaccid, and the pore closes.",
            markScheme: [
              "Light causes starch to sucrose conversion — 1 mark.",
              "Lower water potential, water enters by osmosis — 1 mark.",
              "Guard cells become turgid, bow apart — 1 mark.",
              "In dark, reverse: flaccid, pore closes — 1 mark."
            ],
            commonError: "Saying guard cells become turgid by active transport of water, or not mentioning the starch-sucrose conversion.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "core",
            hints: [
              "Think starch (insoluble) to sucrose (soluble) — which lowers water potential?",
              "Turgor pressure bows the guard cells apart because of their unequal wall thickness."
            ]
          },
          {
            id: "bio-transport-plants-bq2-03",
            question: "Explain why a plant kept in a dark cupboard for 24 hours will have a lower transpiration rate than the same plant in a sunny windowsill.",
            marks: 3,
            modelAnswer: "In the dark, guard cells cannot photosynthesise, so starch is not converted to sucrose. The water potential of guard cells does not fall, so water does not enter by osmosis. Guard cells remain flaccid and stomata are closed. With stomata closed, water vapour cannot diffuse out of the leaf, so transpiration rate is very low. In bright light, stomata open and allow water vapour to escape freely.",
            markScheme: [
              "In dark, stomata closed — 1 mark.",
              "Because guard cells flaccid (no sucrose made) — 1 mark.",
              "Water vapour cannot diffuse out through closed stomata — 1 mark."
            ],
            commonError: "Only stating 'stomata close in the dark' without explaining the mechanism.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "core",
            hints: [
              "Link dark conditions to the stomatal opening mechanism step by step.",
              "Closed stomata = no main route for water vapour to escape."
            ]
          },
          {
            id: "bio-transport-plants-bq2-04",
            question: "A student counts stomata on the upper and lower surfaces of a leaf using a microscope. She finds 0 stomata per mm² on the upper surface and 180 stomata per mm² on the lower surface. Explain the advantage of this distribution.",
            marks: 2,
            modelAnswer: "The upper surface of a leaf is exposed to more direct sunlight and is therefore warmer. If stomata were on the upper surface, higher temperatures would increase evaporation and transpiration, causing excessive water loss. By placing stomata on the cooler, shaded lower surface, the plant reduces the rate of transpiration and conserves water.",
            markScheme: [
              "Upper surface exposed to more light / heat — 1 mark.",
              "Stomata on lower (cooler/shaded) surface reduces water loss — 1 mark."
            ],
            commonError: "Not linking the position to temperature/heat and water conservation.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "core",
            hints: [
              "Think about which surface of a leaf is in direct sunlight.",
              "High temperature increases evaporation — stomata on the shaded surface reduce this."
            ]
          },
          {
            id: "bio-transport-plants-bq2-05",
            question: "Explain what wilting is and describe the conditions that cause it.",
            marks: 3,
            modelAnswer: "Wilting occurs when plant cells lose turgor pressure, causing the plant to droop. Turgor is lost when cells lose water. This happens when the rate of transpiration exceeds the rate of water absorption from the roots, so cells become flaccid. Wilting is most likely in hot, dry, windy conditions (high transpiration) or in waterlogged, very salty or dry soils (reduced water uptake).",
            markScheme: [
              "Cells lose turgor / water — 1 mark.",
              "Rate of transpiration exceeds rate of water uptake — 1 mark.",
              "Conditions: hot / dry / windy (or reduced uptake from soil) — 1 mark."
            ],
            commonError: "Saying wilting means cells die, or that it only occurs in drought.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "core",
            hints: [
              "Wilting is about turgor pressure — not cell death.",
              "The balance between uptake and loss determines whether cells stay turgid."
            ]
          },
          {
            id: "bio-transport-plants-bq2-06",
            question: "The waxy cuticle on the leaf surface limits water loss. However, plants must still lose some water. Explain why it is impossible for a plant to prevent all water loss during the day.",
            marks: 3,
            modelAnswer: "During the day, stomata must be open to allow carbon dioxide to diffuse in for photosynthesis. Open stomata provide a direct pathway for water vapour to diffuse out of the leaf, because the concentration of water vapour is higher inside the leaf (air spaces are saturated) than outside. Therefore, as long as stomata are open, water vapour will diffuse out, and transpiration cannot be completely stopped.",
            markScheme: [
              "Stomata must be open for CO2 to enter for photosynthesis — 1 mark.",
              "Open stomata allow water vapour to escape — 1 mark.",
              "Higher water vapour concentration inside leaf than outside drives diffusion out — 1 mark."
            ],
            commonError: "Not mentioning gas exchange as the reason stomata must stay open.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "challenge",
            hints: [
              "Why must stomata be open during the day — what gas is needed for photosynthesis?",
              "An open pore that lets CO2 in will also let water vapour out."
            ]
          },
          {
            id: "bio-transport-plants-bq2-07",
            question: "Describe an experiment you could carry out to show that most water is lost through the lower surface of a leaf. Include the method, expected result and conclusion.",
            marks: 4,
            modelAnswer: "Method: Take two similar leaves. Cover the lower surface of leaf A with petroleum jelly. Cover the upper surface of leaf B with petroleum jelly. Attach each leaf to a plant and leave in the same conditions. Measure transpiration using cobalt chloride paper placed on each surface, or weigh leaves at intervals. Expected result: Leaf A (lower surface covered) loses much less water than leaf B (upper surface covered). Conclusion: Most water is lost from the lower surface, where stomata are more abundant.",
            markScheme: [
              "Apply petroleum jelly to one surface — 1 mark.",
              "Use a control or compare upper vs lower — 1 mark.",
              "Measure water loss (cobalt chloride paper / mass loss) — 1 mark.",
              "Correct result and conclusion — 1 mark."
            ],
            commonError: "Not including a control or not stating how water loss is measured.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "challenge",
            hints: [
              "You need a fair comparison — one surface blocked each time.",
              "Use cobalt chloride paper or mass loss to quantify water loss."
            ]
          },
          {
            id: "bio-transport-plants-bq2-08",
            question: "Explain how cohesion of water molecules contributes to the movement of water up tall trees.",
            marks: 3,
            modelAnswer: "Water molecules form hydrogen bonds with each other, causing cohesion — they stick together. As water evaporates from mesophyll cells in leaves (transpiration), it creates a tension (negative pressure) at the top of the xylem. This tension pulls the column of water upward. Because water molecules are cohesive, the whole column is pulled up without breaking, even in very tall trees.",
            markScheme: [
              "Water molecules stick together / hydrogen bonds — 1 mark.",
              "Transpiration creates tension / pull at top — 1 mark.",
              "Cohesion allows the column to be pulled up intact — 1 mark."
            ],
            commonError: "Confusing cohesion with adhesion, or not mentioning transpiration as the driving force.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "challenge",
            hints: [
              "Cohesion means water molecules attract each other — like a chain.",
              "The pull comes from transpiration at the top — then cohesion transmits it down the column."
            ]
          },
          {
            id: "bio-transport-plants-bq2-09",
            question: "State two ways in which the internal structure of a leaf is adapted to maximise gas exchange.",
            marks: 2,
            modelAnswer: "Leaves have large internal air spaces in the spongy mesophyll layer, providing a large surface area for gas exchange. They also have thin mesophyll cells, reducing the diffusion distance for gases between the air spaces and the cells.",
            markScheme: [
              "Large air spaces (spongy mesophyll) — increases surface area — 1 mark.",
              "Thin cells / short diffusion distance — 1 mark."
            ],
            commonError: "Describing stomata (an external feature) instead of internal structural adaptations.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "warmup"
          },
          {
            id: "bio-transport-plants-bq2-10",
            question: "A plant is placed in the dark overnight and then moved into bright light. Describe and explain what happens to the stomata and the rate of transpiration over the first two hours in the light.",
            marks: 4,
            modelAnswer: "Initially (in the dark overnight), stomata are closed and transpiration rate is very low. When moved into bright light, guard cells begin photosynthesising and converting starch to sucrose. This lowers the water potential of guard cells. Water enters by osmosis, guard cells become turgid, and stomata open. As stomata open progressively over the first two hours, water vapour can now diffuse out of the leaf, and transpiration rate increases until stomata are fully open.",
            markScheme: [
              "Initially stomata closed — low transpiration — 1 mark.",
              "Light causes starch to sucrose conversion in guard cells — 1 mark.",
              "Osmosis causes guard cells to become turgid / stomata open — 1 mark.",
              "Transpiration rate increases as stomata open — 1 mark."
            ],
            commonError: "Not describing the initial state in the dark before explaining the change.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "challenge",
            hints: [
              "Start with the dark state, then follow the mechanism step by step as light arrives.",
              "Link each step in guard cell chemistry to the stomatal aperture and then to transpiration rate."
            ]
          }
        ]
      },
      {
        id: "bio-transport-plants-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Factors affecting transpiration rate, potometer investigations and calculations.",
        questions: [
          {
            id: "bio-transport-plants-bq3-01",
            question: "List four environmental factors that affect the rate of transpiration.",
            marks: 4,
            modelAnswer: "Light intensity, temperature, humidity (water vapour concentration in the air), and wind speed (air movement).",
            markScheme: [
              "One mark each: light intensity (1), temperature (1), humidity (1), wind speed / air movement (1)."
            ],
            commonError: "Giving leaf area or number of stomata — these are plant features not environmental factors.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "warmup"
          },
          {
            id: "bio-transport-plants-bq3-02",
            question: "Explain how an increase in temperature increases the rate of transpiration.",
            marks: 3,
            modelAnswer: "Higher temperature provides more kinetic energy to water molecules, increasing the rate of evaporation from mesophyll cell walls into the air spaces inside the leaf. The concentration of water vapour in the air spaces increases, steepening the concentration gradient between the inside and outside of the leaf. Water vapour therefore diffuses out through open stomata more rapidly.",
            markScheme: [
              "More kinetic energy — faster evaporation — 1 mark.",
              "Greater water vapour concentration inside leaf — 1 mark.",
              "Steeper gradient — faster diffusion out — 1 mark."
            ],
            commonError: "Saying temperature opens stomata (temperature has minimal direct effect on stomatal aperture; it is light that primarily triggers opening).",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "core",
            hints: [
              "Think kinetic energy → evaporation → concentration gradient → diffusion.",
              "A steeper gradient always means faster diffusion — apply this to water vapour."
            ]
          },
          {
            id: "bio-transport-plants-bq3-03",
            question: "Explain why transpiration is faster in dry air than in humid air.",
            marks: 3,
            modelAnswer: "In dry air, the concentration (or partial pressure) of water vapour outside the leaf is low. The air inside the leaf is saturated (or nearly so) with water vapour. This creates a steep concentration gradient from inside to outside the leaf. Water vapour diffuses down this gradient rapidly through the stomata. In humid air, the external concentration of water vapour is high, reducing the gradient and slowing diffusion, so transpiration is slower.",
            markScheme: [
              "Dry air has low water vapour concentration outside leaf — 1 mark.",
              "Steeper concentration gradient from inside to outside — 1 mark.",
              "Faster diffusion of water vapour through stomata — 1 mark."
            ],
            commonError: "Saying dry air sucks water out — diffusion is always described as movement down a concentration gradient, not suction.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "core",
            hints: [
              "Compare the concentration of water vapour inside the leaf versus outside.",
              "A steep gradient drives faster diffusion."
            ]
          },
          {
            id: "bio-transport-plants-bq3-04",
            question: "Describe how a potometer is used to measure transpiration rate. Include the key steps and any precautions.",
            marks: 4,
            modelAnswer: "Cut a leafy shoot underwater to prevent air entering the xylem. Assemble the potometer completely submerged, ensuring no air bubbles except the one to be measured. Connect the shoot to the potometer airtight, still underwater. Allow an air bubble to enter the capillary tube. Record the position of the bubble. Time how far the bubble moves. Calculate rate = distance / time. Precautions: keep temperature, humidity and light constant; repeat to check reliability.",
            markScheme: [
              "Cut shoot underwater — 1 mark.",
              "No air bubbles / airtight connections — 1 mark.",
              "Measure distance bubble moves in measured time — 1 mark.",
              "Control variables (temperature, light, humidity) — 1 mark."
            ],
            commonError: "Not mentioning that the shoot must be cut underwater to prevent air locks in the xylem.",
            guideRef: "Investigating Transpiration with a Potometer",
            difficulty: "core",
            hints: [
              "The most common exam error is forgetting to cut the shoot underwater.",
              "An airtight system ensures the bubble reflects water uptake, not air leaks."
            ]
          },
          {
            id: "bio-transport-plants-bq3-05",
            question: "In a potometer experiment, an air bubble travels 30 mm in 6 minutes under condition A, and 30 mm in 3 minutes under condition B. (a) Calculate the rate in each condition. (b) State which condition has the higher transpiration rate and suggest what condition B might be.",
            marks: 4,
            modelAnswer: "(a) Rate A = 30/6 = 5 mm per minute. Rate B = 30/3 = 10 mm per minute. (b) Condition B has the higher transpiration rate (10 mm/min > 5 mm/min). Condition B might be higher light intensity, higher temperature, lower humidity, or increased wind speed — any factor that increases transpiration.",
            markScheme: [
              "Rate A = 5 mm/min — 1 mark.",
              "Rate B = 10 mm/min — 1 mark.",
              "Condition B has higher rate — 1 mark.",
              "Correct suggestion for condition B — 1 mark."
            ],
            commonError: "Inverting the formula (dividing time by distance rather than distance by time).",
            guideRef: "Investigating Transpiration with a Potometer",
            difficulty: "core",
            hints: [
              "Rate = distance / time. Check your units.",
              "Higher rate means the bubble moves faster, not that it travels further in the same time."
            ]
          },
          {
            id: "bio-transport-plants-bq3-06",
            question: "A student uses a potometer to compare transpiration in still air and in front of a fan. Predict the result and explain why.",
            marks: 3,
            modelAnswer: "In front of the fan, the bubble will move faster (higher rate of water uptake). The fan increases air movement around the leaf, dispersing the humid boundary layer that builds up in still air. This reduces the concentration of water vapour just outside the stomata, steepening the concentration gradient from inside to outside the leaf. Water vapour diffuses out more rapidly, increasing transpiration rate and therefore water uptake.",
            markScheme: [
              "Bubble moves faster in front of fan — 1 mark.",
              "Fan removes humid boundary layer — 1 mark.",
              "Steeper concentration gradient — faster diffusion of water vapour — 1 mark."
            ],
            commonError: "Saying the fan blows water out of the stomata — it is diffusion, not forced air movement inside the leaf.",
            guideRef: "Investigating Transpiration with a Potometer",
            difficulty: "core",
            hints: [
              "The key term is 'boundary layer' — still air allows a humid layer to build up.",
              "Removing the boundary layer steepens the gradient outside the stomata."
            ]
          },
          {
            id: "bio-transport-plants-bq3-07",
            question: "A student wants to find the effect of leaf area on transpiration rate using a potometer. Describe how she should make this a fair test.",
            marks: 3,
            modelAnswer: "She should use shoots with different total leaf areas (the independent variable) but keep all other variables constant: same species, same light intensity, temperature, humidity and wind speed. She should measure the rate of bubble movement for each shoot. To vary leaf area, she could remove leaves (or use different sized shoots) while keeping all other conditions identical.",
            markScheme: [
              "State independent variable: leaf area — 1 mark.",
              "Keep other variables constant: light, temperature, humidity, wind — 1 mark.",
              "Measure rate (bubble distance / time) as dependent variable — 1 mark."
            ],
            commonError: "Not identifying what is kept constant, or not specifying how leaf area is changed.",
            guideRef: "Investigating Transpiration with a Potometer",
            difficulty: "core",
            hints: [
              "A fair test: one variable changes, all others are controlled.",
              "State the independent variable (leaf area) and at least two controlled variables."
            ]
          },
          {
            id: "bio-transport-plants-bq3-08",
            question: "In a potometer experiment, the capillary tube has an internal radius of 0.5 mm. The bubble moves 20 mm in 4 minutes. Calculate the volume of water taken up per minute. (Volume = pi × r² × length; use pi = 3.14)",
            marks: 3,
            modelAnswer: "Rate of bubble movement = 20/4 = 5 mm per minute. Volume per minute = 3.14 × (0.5)² × 5 = 3.14 × 0.25 × 5 = 3.925 mm³ per minute.",
            markScheme: [
              "Rate = 5 mm/min — 1 mark.",
              "Correct substitution into V = pi × r² × l — 1 mark.",
              "Answer: 3.925 mm³/min (accept 3.9) — 1 mark."
            ],
            commonError: "Using diameter instead of radius, or forgetting to square the radius.",
            guideRef: "Investigating Transpiration with a Potometer",
            difficulty: "challenge",
            hints: [
              "First find the rate of bubble movement in mm/min.",
              "Then use V = pi × r² × length. Remember r = 0.5, not 1.0 (radius, not diameter)."
            ]
          },
          {
            id: "bio-transport-plants-bq3-09",
            question: "Explain why the rate of transpiration decreases at night compared to during the day, even on a warm night.",
            marks: 3,
            modelAnswer: "At night, there is no light for photosynthesis. Guard cells cannot convert starch to sucrose, so their water potential does not decrease. Water does not enter guard cells by osmosis, they remain flaccid, and stomata close. With stomata closed, the main route for water vapour diffusion out of the leaf is blocked. Even if it is warm and evaporation from mesophyll cell walls continues, water vapour cannot escape, so transpiration rate is very low.",
            markScheme: [
              "No light — stomata close — 1 mark.",
              "Mechanism: no sucrose production, guard cells flaccid — 1 mark.",
              "Closed stomata block water vapour from escaping — 1 mark."
            ],
            commonError: "Saying temperature drops at night without addressing the stomatal mechanism.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "challenge",
            hints: [
              "Temperature is kept constant on a warm night — so something else must explain the decrease.",
              "Focus on stomata: what happens to them at night regardless of temperature?"
            ]
          },
          {
            id: "bio-transport-plants-bq3-10",
            question: "A student calculates that in one experiment, a plant takes up 50 cm³ of water per hour. Only 1% of this water is used in photosynthesis and other reactions. What volume of water is lost by transpiration in one hour? Show your working.",
            marks: 2,
            modelAnswer: "Water used in reactions = 1% of 50 = 0.5 cm³. Water lost by transpiration = 50 - 0.5 = 49.5 cm³ per hour.",
            markScheme: [
              "Correct working: 1% of 50 = 0.5 cm³ used — 1 mark.",
              "49.5 cm³ lost by transpiration — 1 mark."
            ],
            commonError: "Calculating 1% of 50 as 5 cm³ (dividing by 10 rather than 100).",
            guideRef: "Investigating Transpiration with a Potometer",
            difficulty: "core",
            hints: [
              "1% means 1/100 — divide 50 by 100 to get water used in reactions.",
              "Subtract the used amount from the total uptake."
            ]
          }
        ]
      },
      {
        id: "bio-transport-plants-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Mixed synoptic questions on translocation, xerophytes, cohesion-tension and experimental design.",
        questions: [
          {
            id: "bio-transport-plants-bq4-01",
            question: "Compare and contrast translocation and the transpiration stream.",
            marks: 4,
            modelAnswer: "Similarities: both transport substances around the plant through vascular tissue; both are continuous processes. Differences: the transpiration stream transports water and dissolved mineral ions upward through xylem, driven by evaporation (transpiration). Translocation transports dissolved organic solutes (mainly sucrose) in both directions (source to sink) through phloem, driven by active loading at the source and unloading at the sink (the pressure-flow hypothesis). Xylem cells are dead; phloem sieve tubes are living.",
            markScheme: [
              "Transpiration stream: xylem, water and minerals, upward — 1 mark.",
              "Translocation: phloem, sucrose/organic solutes, any direction — 1 mark.",
              "Transpiration driven by evaporation; translocation driven by active loading — 1 mark.",
              "Xylem dead / phloem living — 1 mark."
            ],
            commonError: "Saying translocation is in xylem or that it only moves upward.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "challenge",
            hints: [
              "Make a table: tissue, substance, direction, driving force for each process.",
              "Translocation can move in both directions — upward to growing tips and downward to roots."
            ]
          },
          {
            id: "bio-transport-plants-bq4-02",
            question: "Describe three adaptations of xerophytes that reduce water loss, and for each one explain how it reduces transpiration.",
            marks: 6,
            modelAnswer: "1. Thick waxy cuticle: reduces cuticular transpiration by forming an impermeable layer over the leaf surface. 2. Sunken stomata or stomata in pits: creates a humid microclimate around the stomatal pore, reducing the concentration gradient between inside and outside the leaf, so water vapour diffuses out more slowly. 3. Rolled leaves (or reduced leaf area / leaves modified to spines): reduces the total surface area exposed to the atmosphere, reducing overall evaporation. Other valid adaptations: hairs on leaf surface (trap moist air), opening stomata only at night (avoid peak evaporation times during the day).",
            markScheme: [
              "Thick/waxy cuticle — reduces cuticular evaporation — 1 mark + 1 mark explanation.",
              "Sunken stomata — humid microclimate, reduced gradient — 1 mark + 1 mark explanation.",
              "Rolled/reduced leaves — reduced surface area — 1 mark + 1 mark explanation.",
              "Any three adaptations with correct explanation, up to 6 marks total."
            ],
            commonError: "Listing adaptations without explaining the mechanism by which each one reduces water loss.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "challenge",
            hints: [
              "For each adaptation, ask: which factor of transpiration does it reduce?",
              "Surface area, gradient, and cuticle permeability are the key factors."
            ]
          },
          {
            id: "bio-transport-plants-bq4-03",
            question: "Explain the cohesion-tension theory of water movement up a plant.",
            marks: 4,
            modelAnswer: "Water evaporates from mesophyll cell walls into the leaf air spaces (transpiration), creating a water potential deficit at the top of the xylem. This generates a tension (negative pressure) in the xylem. Water molecules are cohesive — they form hydrogen bonds with each other — so they are pulled up as a continuous column under this tension. As water is pulled up the xylem in the stem, it draws water from the roots into the base of the xylem, which in turn draws water from the soil by osmosis through root hair cells.",
            markScheme: [
              "Transpiration creates tension at top of xylem — 1 mark.",
              "Cohesion: water molecules stick together (hydrogen bonds) — 1 mark.",
              "Continuous water column pulled up — 1 mark.",
              "Water drawn from roots into xylem, and from soil into roots — 1 mark."
            ],
            commonError: "Saying water is pushed up from the roots by root pressure, which is only a minor contributor in most plants.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "challenge",
            hints: [
              "The pull comes from the top (transpiration), not a push from the bottom.",
              "Cohesion prevents the water column from breaking under tension."
            ]
          },
          {
            id: "bio-transport-plants-bq4-04",
            question: "A scientist uses a radioactive tracer dissolved in water to track the movement of substances in a plant. She introduces the tracer into the xylem. After one hour, where would she expect to find the radioactive molecules? Explain your answer.",
            marks: 3,
            modelAnswer: "The radioactive tracer would be found mainly in the leaves (and possibly the stem), because xylem transports substances upward from roots to leaves, driven by the transpiration stream. The tracer would not be found in significant amounts in the phloem or in the downward-moving pathway toward roots, because xylem transport is unidirectional (upward).",
            markScheme: [
              "Tracer found in leaves / shoots — 1 mark.",
              "Xylem transports upward toward leaves — 1 mark.",
              "Xylem transport is unidirectional (driven by transpiration) — 1 mark."
            ],
            commonError: "Saying the tracer would be found everywhere in the plant equally.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "core",
            hints: [
              "Xylem moves in one direction only — which way?",
              "The tracer follows the water — where does the water go?"
            ]
          },
          {
            id: "bio-transport-plants-bq4-05",
            question: "Explain why a defoliated tree (one that has lost all its leaves) cannot be killed by ringing (removal of a ring of bark and phloem) in the same way that a leafy tree would eventually be killed.",
            marks: 3,
            modelAnswer: "In a leafy tree, ringing removes phloem, cutting off the supply of sucrose from leaves to roots. The roots are starved and eventually die. In a defoliated tree, there are no leaves to produce sucrose by photosynthesis, so the phloem was not carrying sucrose to the roots anyway. The roots rely on stored starch rather than phloem supply, so removing the phloem does not starve them in the short term. However, without leaves the defoliated tree will also die, but for a different reason (inability to photosynthesise).",
            markScheme: [
              "In leafy tree, ringing cuts off sucrose supply to roots — 1 mark.",
              "Defoliated tree has no leaves — no photosynthesis — no sucrose to transport — 1 mark.",
              "Ringing does not starve the roots of sucrose they were not receiving anyway — 1 mark."
            ],
            commonError: "Not recognising that the defoliated tree cannot photosynthesise and therefore its phloem carries no sucrose.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "challenge",
            hints: [
              "What substance does ringing stop moving through phloem?",
              "If there are no leaves, is sucrose being produced and transported in phloem?"
            ]
          },
          {
            id: "bio-transport-plants-bq4-06",
            question: "Design an experiment to test the hypothesis that plants with a larger total leaf area have a higher rate of transpiration. Include independent variable, dependent variable, control variables, method and how you would display results.",
            marks: 5,
            modelAnswer: "Hypothesis: greater leaf area increases transpiration rate. Independent variable: total leaf area of the shoot (varied by removing leaves). Dependent variable: rate of water uptake measured using a potometer (mm/min or volume/min). Control variables: same species of plant, same light intensity, temperature, humidity, wind speed, same length of shoot, same time allowed to equilibrate. Method: Set up a potometer with a leafy shoot. Record rate of bubble movement. Remove leaves to reduce leaf area. Allow equilibration. Record rate again. Repeat for several leaf areas. Display: plot a graph of leaf area (x-axis) against rate of water uptake (y-axis). Expected result: rate increases with increasing leaf area.",
            markScheme: [
              "Independent variable: leaf area — 1 mark.",
              "Dependent variable: rate of bubble movement / water uptake — 1 mark.",
              "Control variables (at least two): temperature, light, humidity, wind speed, same species — 1 mark.",
              "Method: potometer, remove leaves, measure rate — 1 mark.",
              "Results display: graph of leaf area vs rate — 1 mark."
            ],
            commonError: "Not controlling light intensity, temperature or humidity, which are all major confounding variables.",
            guideRef: "Investigating Transpiration with a Potometer",
            difficulty: "challenge",
            hints: [
              "State IV, DV, and at least two CVs clearly.",
              "Potometer measures water uptake — state the exact measurement (mm/min)."
            ]
          },
          {
            id: "bio-transport-plants-bq4-07",
            question: "A student measures the rate of transpiration of a plant at different wind speeds. The results are: 0 m/s: 2 mm/min; 1 m/s: 5 mm/min; 2 m/s: 7 mm/min; 3 m/s: 8 mm/min; 4 m/s: 8.5 mm/min. Describe and explain the trend in these results.",
            marks: 4,
            modelAnswer: "As wind speed increases from 0 to 2 m/s, the rate of transpiration increases steeply. From 2 to 4 m/s, the rate continues to increase but more slowly, levelling off at approximately 8.5 mm/min. The initial increase is because higher wind speed removes the humid boundary layer around the leaf more effectively, steepening the concentration gradient for water vapour, so diffusion out through stomata is faster. The levelling off (plateau) occurs because at high wind speeds, the boundary layer is already completely removed; further increases in wind speed have little additional effect on the gradient, so the rate is limited by other factors (e.g. stomatal aperture, rate of evaporation from cell walls).",
            markScheme: [
              "Rate increases with wind speed — 1 mark.",
              "Rate levels off at high wind speeds — 1 mark.",
              "Wind removes boundary layer, steepens gradient — 1 mark.",
              "At high speeds boundary layer already removed / rate limited by other factors — 1 mark."
            ],
            commonError: "Not describing the levelling off — only describing the initial increase.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "challenge",
            hints: [
              "Describe the shape of the data first (rate increases then levels off), then explain each part.",
              "The plateau is the key challenge point — what limits the rate when wind is very high?"
            ]
          },
          {
            id: "bio-transport-plants-bq4-08",
            question: "Explain how the adaptations of halophytes (salt-tolerant plants) differ from those of xerophytes. What common challenge do they face?",
            marks: 3,
            modelAnswer: "Both halophytes and xerophytes face a problem with water uptake due to a low water potential in their environment (salty soil for halophytes, dry soil for xerophytes). Both must therefore also minimise water loss. Halophytes are adapted to exclude or excrete excess salt (e.g. salt glands in the leaves) and have tissues that can tolerate high ion concentrations. Xerophytes focus on reducing water loss through thick cuticles, sunken stomata, and reduced leaf area. The common challenge is maintaining a water potential gradient to absorb water from a concentrated (low water potential) external solution.",
            markScheme: [
              "Common challenge: environment has low water potential, making water uptake difficult — 1 mark.",
              "Halophytes: adapt to high salt by excreting or tolerating it — 1 mark.",
              "Xerophytes: adapt by reducing water loss — 1 mark."
            ],
            commonError: "Saying halophytes just have the same adaptations as xerophytes without addressing salt tolerance.",
            guideRef: "Factors Affecting the Rate of Transpiration",
            difficulty: "challenge",
            hints: [
              "The shared problem is a low external water potential — think about what causes this for each plant type.",
              "The difference is in how each plant deals with the salts or the lack of water."
            ]
          },
          {
            id: "bio-transport-plants-bq4-09",
            question: "A student claims that phloem carries substances in only one direction (from leaves to roots). Evaluate this claim.",
            marks: 3,
            modelAnswer: "The claim is incorrect. Phloem transports dissolved organic solutes (mainly sucrose) from sources to sinks. Sources are regions of net production (usually leaves) and sinks are regions of net use or storage (roots, growing fruits, developing seeds, root tips). Sucrose can move upward from leaves to growing shoot tips or developing fruits, as well as downward to roots. Therefore phloem transport is bidirectional — from any source to any sink, which may be above or below the source.",
            markScheme: [
              "Claim is incorrect — 1 mark.",
              "Phloem transports from source to sink — 1 mark.",
              "Sinks can be above or below leaves (shoot tips and roots) so transport is bidirectional — 1 mark."
            ],
            commonError: "Agreeing with the claim and saying phloem is unidirectional like xylem.",
            guideRef: "Xylem and Phloem — Structure and Function",
            difficulty: "core",
            hints: [
              "Think of a fruit growing on a branch above the leaves — where does its sucrose come from?",
              "Phloem moves from source (producer) to sink (consumer) — sinks exist both above and below leaves."
            ]
          },
          {
            id: "bio-transport-plants-bq4-10",
            question: "Stomata open in response to light to allow photosynthesis, but this also causes water loss. Explain how a plant balances the need for photosynthesis against the need to conserve water.",
            marks: 4,
            modelAnswer: "Plants regulate stomatal opening to balance gas exchange with water conservation. In bright light, stomata open to allow CO2 in for photosynthesis; this inevitably allows water vapour to escape. When water stress occurs (the plant begins to lose more water than it gains), the hormone abscisic acid (ABA) is released, causing guard cells to lose water and stomata to close, reducing transpiration. Additionally, stomata close in darkness (when CO2 is not needed for photosynthesis) and in extreme heat, further limiting water loss. Xerophytic plants have evolved additional anatomical features (sunken stomata, cuticles) to tip this balance further toward water conservation.",
            markScheme: [
              "Open stomata needed for CO2 / photosynthesis, but causes water loss — 1 mark.",
              "ABA causes stomatal closure under water stress — 1 mark.",
              "Stomata close in dark / when photosynthesis not occurring — 1 mark.",
              "Balance: structural adaptations (cuticle, etc.) reduce loss without fully closing stomata — 1 mark."
            ],
            commonError: "Not mentioning ABA or the water-stress response, giving only the light/dark cycle.",
            guideRef: "Transpiration — Loss of Water Vapour",
            difficulty: "challenge",
            hints: [
              "The trade-off: open = CO2 in but water out. Closed = water stays but no photosynthesis.",
              "ABA is the key hormone for drought response in plants — mention it for a high mark."
            ]
          }
        ]
      }
    ],
  },
};
