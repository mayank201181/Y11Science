import type { Topic } from "../types";

export const bioGasRespiration: Topic = {
  id: "bio-gas-respiration",
  title: "Gas Exchange & Respiration",
  subject: "biology",
  icon: "🫁",
  blurb: "Lungs, breathing mechanics, gas exchange adaptations, aerobic and anaerobic respiration.",
  intro: "Every cell in your body needs a constant energy supply — and that energy comes from respiration, the controlled release of chemical energy from glucose. To fuel aerobic respiration, your breathing system must deliver oxygen deep into the lungs where it can diffuse into the blood, while simultaneously removing carbon dioxide. Understanding how the breathing apparatus is built, how ventilation works, and why the alveoli are so effective at gas exchange gives you the full picture of one of biology's most elegant systems.",

  guide: [
    {
      heading: "The Human Breathing System",
      body: `Air enters through the nose or mouth and travels down the **trachea** (windpipe), a tube reinforced with C-shaped rings of cartilage to keep it open. The trachea branches into two **bronchi** (singular: bronchus), one entering each lung. Each bronchus divides repeatedly into smaller **bronchioles**, finally ending in clusters of tiny air sacs called **alveoli** (singular: alveolus).

The lungs are surrounded by the **pleural membranes** and sit inside the **thoracic cavity**, which is bounded by the **ribcage** and the **diaphragm** — a dome-shaped sheet of muscle below the lungs.

**Key cell types in the airway:**

- **Goblet cells**: secrete **mucus** that traps dust, bacteria, and other particles, preventing them reaching the alveoli.
- **Ciliated epithelial cells**: have hair-like **cilia** that beat rhythmically upward, sweeping mucus (and trapped particles) toward the throat to be swallowed — a process called the **mucociliary escalator**.

Together these cells form a physical and biological barrier protecting the delicate gas exchange surface.`,
      diagrams: [
        {
          caption: "The human breathing system — major structures labelled",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram of the human breathing system showing trachea, bronchi, bronchioles, alveoli, ribs and diaphragm"><rect width="320" height="200" fill="#0f172a"/><rect x="148" y="10" width="24" height="50" rx="4" fill="none" stroke="#38bdf8" stroke-width="2"/><text x="178" y="36" fill="#b7bce0" font-size="10" font-family="sans-serif">Trachea</text><path d="M148 60 Q120 75 100 90" fill="none" stroke="#38bdf8" stroke-width="2"/><path d="M172 60 Q200 75 220 90" fill="none" stroke="#38bdf8" stroke-width="2"/><ellipse cx="90" cy="120" rx="45" ry="55" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/><ellipse cx="230" cy="120" rx="45" ry="55" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/><path d="M100 90 Q85 105 75 115" fill="none" stroke="#34d399" stroke-width="1.5"/><path d="M100 90 Q95 110 90 125" fill="none" stroke="#34d399" stroke-width="1.5"/><path d="M100 90 Q110 108 105 122" fill="none" stroke="#34d399" stroke-width="1.5"/><path d="M220 90 Q215 105 215 118" fill="none" stroke="#34d399" stroke-width="1.5"/><path d="M220 90 Q225 108 230 122" fill="none" stroke="#34d399" stroke-width="1.5"/><path d="M220 90 Q235 105 242 117" fill="none" stroke="#34d399" stroke-width="1.5"/><circle cx="72" cy="120" r="7" fill="#a78bfa" opacity="0.7"/><circle cx="87" cy="130" r="7" fill="#a78bfa" opacity="0.7"/><circle cx="102" cy="128" r="7" fill="#a78bfa" opacity="0.7"/><circle cx="212" cy="123" r="7" fill="#a78bfa" opacity="0.7"/><circle cx="228" cy="130" r="7" fill="#a78bfa" opacity="0.7"/><circle cx="245" cy="122" r="7" fill="#a78bfa" opacity="0.7"/><path d="M60 85 Q65 70 160 68 Q255 70 260 85" fill="none" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4,3"/><path d="M55 100 Q60 85 160 83 Q260 85 265 100" fill="none" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4,3"/><path d="M45 170 Q160 148 275 170" fill="none" stroke="#fb7185" stroke-width="2.5"/><text x="42" y="108" fill="#b7bce0" font-size="9" font-family="sans-serif">Left lung</text><text x="225" y="78" fill="#b7bce0" font-size="9" font-family="sans-serif">Right lung</text><text x="63" y="115" fill="#a78bfa" font-size="8" font-family="sans-serif">Alveoli</text><text x="118" y="88" fill="#34d399" font-size="8" font-family="sans-serif">Bronchioles</text><text x="155" y="185" fill="#fb7185" font-size="9" font-family="sans-serif">Diaphragm</text><text x="268" y="108" fill="#fbbf24" font-size="9" font-family="sans-serif">Ribs</text></svg>',
        },
      ],
      keyPoints: [
        "Air pathway: nose/mouth → trachea → bronchi → bronchioles → alveoli.",
        "Cartilage rings keep the trachea open at all times.",
        "Goblet cells produce mucus to trap pathogens and particles.",
        "Ciliated cells beat mucus upwards away from the lungs (mucociliary escalator).",
        "The diaphragm and intercostal muscles are the engines of ventilation.",
      ],
      strategies: ["Draw and label the pathway — a simple flow diagram fixes the sequence."],
    },

    {
      heading: "Ventilation — Breathing In and Out",
      body: `Breathing is driven by **pressure changes** inside the thoracic cavity. Gas always moves from high pressure to low pressure.

**Inspiration (breathing in):**
1. The **diaphragm contracts** — it flattens from a dome shape downward.
2. The **external intercostal muscles contract** — the ribs move **up and out**.
3. The volume of the thoracic cavity **increases**.
4. Pressure inside falls **below atmospheric pressure**.
5. Air rushes into the lungs.

**Expiration (breathing out) — at rest this is largely passive:**
1. The **diaphragm relaxes** — it returns to a dome shape.
2. The **external intercostal muscles relax** — the ribs move **down and in**.
3. The volume of the thoracic cavity **decreases**.
4. Pressure inside rises **above atmospheric pressure**.
5. Air is pushed out of the lungs.

During **forced expiration** (e.g., blowing hard), the **internal intercostal muscles** contract to pull the ribs down more rapidly.

**Key principle:** Volume ↑ → Pressure ↓ → air in. Volume ↓ → Pressure ↑ → air out. (Boyle's Law at work.)`,
      diagrams: [
        {
          caption: "Breathing mechanism — inspiration (left) vs expiration (right)",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Comparison diagram showing rib and diaphragm positions during inspiration and expiration"><rect width="320" height="200" fill="#0f172a"/><line x1="160" y1="5" x2="160" y2="195" stroke="#334155" stroke-width="1" stroke-dasharray="5,4"/><text x="30" y="18" fill="#38bdf8" font-size="11" font-family="sans-serif" font-weight="bold">INSPIRATION</text><ellipse cx="80" cy="90" rx="55" ry="65" fill="none" stroke="#38bdf8" stroke-width="1.5"/><path d="M30 155 Q80 152 130 155" fill="none" stroke="#fb7185" stroke-width="2.5"/><line x1="20" y1="90" x2="8" y2="90" stroke="#34d399" stroke-width="1.5" marker-end="url(#arr)"/><line x1="140" y1="90" x2="152" y2="90" stroke="#34d399" stroke-width="1.5" marker-end="url(#arr)"/><line x1="80" y1="148" x2="80" y2="162" stroke="#34d399" stroke-width="1.5" marker-end="url(#arr)"/><text x="14" y="170" fill="#34d399" font-size="9" font-family="sans-serif">Volume increases</text><text x="18" y="180" fill="#34d399" font-size="9" font-family="sans-serif">Pressure decreases</text><text x="28" y="190" fill="#38bdf8" font-size="9" font-family="sans-serif">Air flows IN</text><text x="56" y="110" fill="#b7bce0" font-size="8" font-family="sans-serif">Diaphragm</text><text x="50" y="120" fill="#b7bce0" font-size="8" font-family="sans-serif">contracts (flat)</text><text x="172" y="18" fill="#fb7185" font-size="11" font-family="sans-serif" font-weight="bold">EXPIRATION</text><ellipse cx="240" cy="95" rx="45" ry="57" fill="none" stroke="#fb7185" stroke-width="1.5"/><path d="M195 148 Q240 130 285 148" fill="none" stroke="#fb7185" stroke-width="2.5"/><line x1="200" y1="95" x2="210" y2="95" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arr2)"/><line x1="280" y1="95" x2="270" y2="95" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arr2)"/><line x1="240" y1="140" x2="240" y2="128" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arr2)"/><text x="174" y="170" fill="#fbbf24" font-size="9" font-family="sans-serif">Volume decreases</text><text x="174" y="180" fill="#fbbf24" font-size="9" font-family="sans-serif">Pressure increases</text><text x="182" y="190" fill="#fb7185" font-size="9" font-family="sans-serif">Air flows OUT</text><text x="212" y="110" fill="#b7bce0" font-size="8" font-family="sans-serif">Diaphragm</text><text x="210" y="120" fill="#b7bce0" font-size="8" font-family="sans-serif">relaxes (domed)</text><defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#34d399"/></marker><marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/></marker></defs></svg>',
        },
      ],
      keyPoints: [
        "Inspiration: diaphragm contracts (flattens) + external intercostals contract → ribs up/out → volume increases → pressure drops → air in.",
        "Expiration (rest): both muscle groups relax → ribs down/in, diaphragm domes up → volume decreases → pressure rises → air out.",
        "Forced expiration uses internal intercostal muscles to pull ribs down faster.",
        "Volume ↑ → pressure ↓ (Boyle's Law): this is the underlying physical principle.",
        "The lungs themselves have no muscle — they are moved passively by the thoracic cavity.",
      ],
      discovery: {
        problem: "If you push on a sealed syringe plunger (reducing the volume), what happens to the air pressure inside — and why? Predict before reading on.",
        idea: "Pressure increases because the same number of gas molecules are now in a smaller space, colliding with the walls more frequently. This is Boyle's Law (P ∝ 1/V at constant temperature). Breathing exploits this: the body changes thoracic volume using muscles, and the resulting pressure gradient moves air.",
      },
      whyItWorks: "The lungs are elastic — they tend to recoil inward. At rest, expiration is passive: when the muscles relax the elastic recoil of the lungs (and the weight of the ribs) restores the smaller volume, raising pressure above atmospheric and expelling air without any muscular effort.",
      strategies: ["Sequence the steps: muscle action → volume change → pressure change → air movement.", "Never say 'the lungs expand themselves' — muscles drive the change."],
    },

    {
      heading: "Alveoli — Adaptations for Gas Exchange",
      body: `Gas exchange happens across the walls of the **alveoli**. Oxygen diffuses from the alveolar air into the blood; carbon dioxide diffuses in the opposite direction. For this to be fast enough to supply the body, the alveoli have a set of interlocking adaptations:

**1. Enormous surface area:** There are about 300–500 million alveoli in human lungs, giving a total surface area of roughly **70 m²** — about the size of a tennis court.

**2. Very thin walls (short diffusion distance):** Each alveolus is lined with a single layer of epithelial cells, and is surrounded by capillaries whose walls are also one cell thick. The total diffusion distance is only about **1–2 micrometres**.

**3. Moist surface:** Gas dissolves in the thin film of moisture lining the alveolus before diffusing through the membrane.

**4. Rich blood supply (steep concentration gradient):** Pulmonary capillaries constantly carry away oxygenated blood and deliver deoxygenated blood. This maintains a **steep concentration gradient**: high O₂ in alveolus / low O₂ in blood → rapid diffusion. The reverse gradient applies to CO₂.

**5. Good ventilation:** Breathing constantly refreshes the air in the alveoli, keeping O₂ concentration high and CO₂ concentration low.

All five features work together to maximise the **rate of diffusion** described by Fick's Law:

*Rate of diffusion ∝ (surface area × concentration difference) / diffusion distance*`,
      diagrams: [
        {
          caption: "Alveolus and surrounding capillary — gas exchange across the thin membrane",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Cross-section diagram showing gas exchange between an alveolus and surrounding blood capillary, with oxygen and carbon dioxide arrows"><rect width="320" height="200" fill="#0f172a"/><ellipse cx="130" cy="100" rx="80" ry="70" fill="#1e3a5f" stroke="#38bdf8" stroke-width="2"/><text x="90" y="55" fill="#38bdf8" font-size="11" font-family="sans-serif" font-weight="bold">Alveolus</text><text x="85" y="68" fill="#b7bce0" font-size="9" font-family="sans-serif">(air space)</text><text x="190" y="72" fill="#34d399" font-size="9" font-family="sans-serif">Alveolar</text><text x="190" y="82" fill="#34d399" font-size="9" font-family="sans-serif">epithelium</text><text x="190" y="92" fill="#34d399" font-size="9" font-family="sans-serif">(1 cell thick)</text><ellipse cx="230" cy="110" rx="58" ry="48" fill="#7f1d1d" stroke="#fb7185" stroke-width="2"/><text x="210" y="145" fill="#fb7185" font-size="9" font-family="sans-serif">Capillary</text><text x="205" y="155" fill="#fb7185" font-size="9" font-family="sans-serif">(1 cell thick)</text><ellipse cx="222" cy="108" rx="14" ry="9" fill="#dc2626" opacity="0.8"/><ellipse cx="248" cy="118" rx="13" ry="8" fill="#dc2626" opacity="0.8"/><line x1="175" y1="95" x2="210" y2="100" stroke="#34d399" stroke-width="2" marker-end="url(#o2arr)"/><text x="178" y="88" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">O2</text><line x1="208" y1="118" x2="175" y2="115" stroke="#fbbf24" stroke-width="2" marker-end="url(#co2arr)"/><text x="178" y="130" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">CO2</text><line x1="172" y1="103" x2="208" y2="103" stroke="#a78bfa" stroke-width="1" stroke-dasharray="3,2"/><text x="165" y="140" fill="#a78bfa" font-size="8" font-family="sans-serif">~1-2 um</text><text x="155" y="150" fill="#a78bfa" font-size="8" font-family="sans-serif">diffusion distance</text><text x="50" y="105" fill="#b7bce0" font-size="8" font-family="sans-serif">Moist</text><text x="45" y="115" fill="#b7bce0" font-size="8" font-family="sans-serif">lining</text><text x="278" y="85" fill="#b7bce0" font-size="8" font-family="sans-serif">Blood</text><text x="276" y="94" fill="#b7bce0" font-size="8" font-family="sans-serif">flow</text><line x1="286" y1="97" x2="286" y2="115" stroke="#b7bce0" stroke-width="1" marker-end="url(#blarr)"/><defs><marker id="o2arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#34d399"/></marker><marker id="co2arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/></marker><marker id="blarr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#b7bce0"/></marker></defs></svg>',
        },
      ],
      keyPoints: [
        "~300–500 million alveoli give ~70 m² total surface area — huge for diffusion.",
        "Alveolar walls and capillary walls are each one cell thick → diffusion distance ~1–2 µm.",
        "Moist lining dissolves gases before they diffuse across the membrane.",
        "Continuous blood flow maintains a steep concentration gradient for both O₂ and CO₂.",
        "Fick's Law: rate ∝ (surface area × concentration difference) / diffusion distance.",
      ],
      thinkDeeper: "In emphysema, alveolar walls break down, reducing surface area dramatically. Using Fick's Law, predict two quantitative effects on gas exchange rate, and explain why emphysema patients feel breathless even at rest.",
      whyItWorks: "Each adaptation independently increases the rate predicted by Fick's Law — and they multiply. Doubling surface area doubles rate; halving diffusion distance also doubles rate. An alveolus achieves both simultaneously, so diffusion can be tens of thousands of times faster than across a flat, thick, dry membrane of the same overall area.",
    },

    {
      heading: "Inspired vs Expired Air & Experimental Tests",
      body: `The composition of air changes as it passes through the lungs:

| Gas | Inspired air (%) | Expired air (%) |
|---|---|---|
| Oxygen | 21 | 16 |
| Carbon dioxide | 0.04 | 4 |
| Nitrogen | 78 | 78 |
| Water vapour | Variable | Saturated |

Key points:
- O₂ decreases (absorbed into blood)
- CO₂ increases (released from blood)
- Nitrogen is unchanged (not used in metabolism)
- Water vapour increases to saturation (moisture from lung lining)
- Temperature of expired air is higher (body temperature ~37°C)

**Testing for CO₂ — limewater experiment:**
Breathe through a straw into **limewater** (calcium hydroxide solution). Exhaled air turns it **milky/cloudy** much faster than inspired air, because CO₂ reacts with Ca(OH)₂ to form insoluble calcium carbonate:

Ca(OH)₂ (aq) + CO₂ (g) → CaCO₃ (s) + H₂O (l)

A control flask with inspired (atmospheric) air bubbled through it should show little or no change, confirming the extra CO₂ comes from respiration.

**Testing for water vapour:** breathe onto a cold mirror — condensation (misting) proves water vapour in exhaled air.

**Effect of exercise:** after exercise, both the **rate** (breaths per minute) and **depth** (tidal volume — volume per breath) increase. More CO₂ is produced by working muscles; dissolved CO₂ lowers blood pH; chemoreceptors in the brain detect this and signal the breathing muscles to work harder and faster. This increases O₂ supply and removes excess CO₂.`,
      keyPoints: [
        "Expired air has more CO₂ (~4%), less O₂ (~16%), more water vapour, and is warmer than inspired air.",
        "Nitrogen % is unchanged — it is physiologically inert.",
        "Limewater turns milky with CO₂: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O.",
        "Exercise increases both rate and depth of breathing to meet higher O₂ demand and remove more CO₂.",
        "Chemoreceptors detect rising blood CO₂ / falling pH → brain increases ventilation rate.",
      ],
      discovery: {
        problem: "Suppose you bubble both inspired air and expired air through separate limewater flasks for the same length of time. Predict which flask turns milky first — and design a control to make your comparison fair.",
        idea: "The expired-air flask turns milky first (or more strongly) because exhaled air contains ~4% CO₂ vs 0.04% in inspired air — 100× more. A fair test needs the same volume of gas, same flow rate, same volume and concentration of limewater in both flasks, and an observer who does not know which flask is which (blind assessment).",
      },
      strategies: ["Always compare inspired vs expired — don't just describe expired alone.", "Name the chemical reaction when limewater is used, not just the colour change."],
    },

    {
      heading: "Aerobic Respiration",
      body: `**Aerobic respiration** is the complete oxidation of glucose using oxygen, releasing a large amount of energy as ATP.

**Word equation:**
glucose + oxygen → carbon dioxide + water (+ energy)

**Symbol equation (balanced):**
C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O

This reaction takes place mainly in the **mitochondria** (the cristae of the inner mitochondrial membrane) and releases approximately **2870 kJ per mole** of glucose.

Energy released is used for:
- **Muscle contraction** (movement)
- **Active transport** (moving molecules against concentration gradients across cell membranes)
- **Protein synthesis** (growth and repair)
- **Cell division** (growth)
- **Maintaining body temperature** in warm-blooded animals

Aerobic respiration is far more efficient than anaerobic respiration — it fully oxidises glucose to CO₂ and water, releasing much more energy per glucose molecule.`,
      keyPoints: [
        "Word equation: glucose + oxygen → carbon dioxide + water (+ energy released as ATP).",
        "Symbol equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O.",
        "Occurs in mitochondria; releases ~2870 kJ mol⁻¹ of glucose.",
        "Energy is used for muscle contraction, active transport, growth, synthesis, thermoregulation.",
        "Aerobic respiration releases far more energy per glucose than anaerobic.",
      ],
      whyItWorks: "Complete combustion of glucose fully breaks all C–H and C–C bonds, transferring electrons through the electron transport chain to oxygen (the terminal electron acceptor). Each step releases energy in small, manageable packets as ATP, rather than all at once as heat. The mitochondrial cristae maximise surface area for these ATP-synthesising enzymes.",
    },

    {
      heading: "Anaerobic Respiration — Humans & Yeast",
      body: `When oxygen is **unavailable** or in short supply, cells switch to **anaerobic respiration** — partial breakdown of glucose without oxygen, releasing far less energy.

**In humans (muscle cells):**

glucose → lactic acid (+ small amount of energy)

This occurs during intense exercise when the cardiovascular system cannot deliver oxygen fast enough. Lactic acid accumulates in muscles, causing fatigue and the characteristic burning sensation. When exercise stops, oxygen is used to convert lactic acid back to glucose (in the liver) or to oxidise it directly. The extra oxygen needed for this recovery is called the **oxygen debt** (excess post-exercise oxygen consumption, EPOC).

**In yeast (and other microorganisms) — fermentation:**

glucose → ethanol + carbon dioxide (+ small amount of energy)

C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂

This process, called **fermentation**, is exploited commercially:
- **Brewing** (beer, wine): yeast ferments sugars in grapes/grains; ethanol is the desired product.
- **Baking**: CO₂ produced by yeast causes bread dough to rise (ethanol evaporates during baking).
- **Biofuel production**: ethanol from fermented plant material (bioethanol).

**Comparison summary:**

| Feature | Aerobic | Anaerobic (human) | Anaerobic (yeast) |
|---|---|---|---|
| Oxygen needed | Yes | No | No |
| Products | CO₂ + H₂O | Lactic acid | Ethanol + CO₂ |
| Energy yield | High | Low | Low |
| Location | Mitochondria | Cytoplasm | Cytoplasm |`,
      keyPoints: [
        "Human anaerobic: glucose → lactic acid; causes muscle fatigue; reversible when O₂ returns (oxygen debt).",
        "Yeast anaerobic (fermentation): glucose → ethanol + CO₂; used in brewing and baking.",
        "Symbol equation for fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.",
        "Anaerobic yields far less energy than aerobic per glucose molecule.",
        "Oxygen debt = extra O₂ consumed after exercise to break down / remove lactic acid.",
      ],
      thinkDeeper: "Lactic acid fermentation in humans is reversible; yeast fermentation produces ethanol which is toxic to yeast above ~15% concentration. Why might this difference in end-product toxicity be an evolutionary advantage for yeast (think about competition with bacteria)?",
      discovery: {
        problem: "A student sets up two identical boiling tubes, each containing yeast suspension and glucose solution. Tube A is sealed with a layer of oil (no air); Tube B is left open. Both are incubated at 30°C. After 30 minutes, which tube produces more CO₂ — and why?",
        idea: "Tube A (sealed, anaerobic) produces CO₂ through fermentation — glucose → ethanol + CO₂. Tube B (aerobic) still produces CO₂ from aerobic respiration (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O), and actually produces the same molar ratio of CO₂ per glucose (6 CO₂ per glucose aerobically vs 2 CO₂ per glucose anaerobically). So Tube B produces more CO₂ per glucose, but Tube A may respire faster (no feedback inhibition). The key teaching point: both produce CO₂, but for different chemical reasons.",
      },
      strategies: ["Draw a two-column comparison table: aerobic vs anaerobic.", "Balance the fermentation equation — 1 glucose → 2 ethanol + 2 CO₂."],
    },
  ],

  learn: {
    keyFacts: [
      "The trachea, bronchi, bronchioles and alveoli form the gas exchange pathway in humans.",
      "Goblet cells secrete mucus; ciliated cells beat it upward — together they protect the airway.",
      "Inspiration: diaphragm contracts + external intercostals contract → volume up, pressure down, air in.",
      "Expiration (rest): muscles relax → volume down, pressure up, air out (passive process).",
      "Alveoli adaptations: large surface area (~70 m²), one-cell-thick walls, moist lining, rich blood supply.",
      "Fick's Law: diffusion rate ∝ (surface area × concentration difference) / diffusion distance.",
      "Expired air: ~16% O₂, ~4% CO₂, saturated with water vapour — vs inspired air: 21% O₂, 0.04% CO₂.",
      "Limewater (Ca(OH)₂) turns milky white with CO₂, forming insoluble CaCO₃.",
      "Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O; occurs in mitochondria; high energy yield.",
      "Human anaerobic respiration: glucose → lactic acid; occurs in cytoplasm; causes oxygen debt.",
      "Yeast fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂; used in brewing and baking.",
      "Exercise increases both rate AND depth of breathing due to rising blood CO₂ detected by chemoreceptors.",
    ],
    flashcards: [
      { front: "What is the function of goblet cells in the trachea?", back: "They secrete mucus that traps dust, bacteria, and other particles, preventing them from reaching the alveoli." },
      { front: "What happens to the diaphragm during inspiration?", back: "The diaphragm contracts and flattens (moves downward), increasing thoracic volume and reducing pressure so air flows in." },
      { front: "Name five adaptations of alveoli for efficient gas exchange.", back: "1) Large surface area (~70 m²). 2) Walls one cell thick (short diffusion distance). 3) Moist lining. 4) Rich blood supply (concentration gradient). 5) Good ventilation refreshing air." },
      { front: "State Fick's Law of Diffusion.", back: "Rate of diffusion ∝ (surface area × concentration difference) / diffusion distance." },
      { front: "What are the percentages of O₂ and CO₂ in expired air?", back: "Expired air: approximately 16% O₂ and 4% CO₂ (compared with 21% O₂ and 0.04% CO₂ in inspired air)." },
      { front: "Write the balanced symbol equation for aerobic respiration.", back: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O" },
      { front: "What is the product of anaerobic respiration in human muscle cells?", back: "Lactic acid (and a small amount of energy/ATP)." },
      { front: "Write the equation for yeast fermentation.", back: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (glucose → ethanol + carbon dioxide)." },
      { front: "What is oxygen debt?", back: "The extra oxygen required after exercise to oxidise / remove lactic acid that accumulated during anaerobic respiration." },
      { front: "Why does breathing rate increase during exercise?", back: "Muscles produce more CO₂, lowering blood pH; chemoreceptors in the brain detect this and signal breathing muscles to increase rate and depth of breathing." },
      { front: "What chemical test confirms CO₂ in expired air?", back: "Limewater (calcium hydroxide solution) turns milky/cloudy as insoluble calcium carbonate (CaCO₃) forms: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O." },
      { front: "Why does aerobic respiration release more energy than anaerobic?", back: "Aerobic respiration completely oxidises glucose to CO₂ and H₂O, breaking all C–H bonds and passing electrons through the full electron transport chain. Anaerobic only partially breaks down glucose, leaving energy locked in lactic acid or ethanol." },
    ],
    keyTerms: [
      { term: "Alveolus", definition: "Tiny air sac at the end of bronchioles in the lungs; the site of gas exchange between air and blood." },
      { term: "Ventilation", definition: "The process of moving air into and out of the lungs by muscular action (breathing)." },
      { term: "Tidal volume", definition: "The volume of air inhaled or exhaled in one normal breath at rest." },
      { term: "Goblet cell", definition: "Specialised epithelial cell in the airway lining that secretes mucus to trap particles and pathogens." },
      { term: "Ciliated epithelial cell", definition: "Airway cell bearing cilia that beat rhythmically to sweep mucus and trapped particles upward away from the lungs." },
      { term: "Oxygen debt", definition: "The extra oxygen consumed after exercise to metabolise the lactic acid produced during anaerobic respiration." },
      { term: "Fermentation", definition: "Anaerobic respiration in yeast and some bacteria; glucose is converted to ethanol and carbon dioxide." },
      { term: "Aerobic respiration", definition: "The complete oxidation of glucose using oxygen, releasing a large amount of energy: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O." },
      { term: "Anaerobic respiration", definition: "The partial breakdown of glucose without oxygen, releasing a small amount of energy; produces lactic acid (in humans) or ethanol and CO₂ (in yeast)." },
      { term: "Concentration gradient", definition: "The difference in concentration of a substance across a distance; steeper gradients drive faster diffusion." },
      { term: "Intercostal muscles", definition: "Muscles between the ribs; external intercostals raise ribs during inspiration, internal intercostals lower ribs during forced expiration." },
      { term: "Limewater", definition: "Calcium hydroxide solution (Ca(OH)₂aq) used to test for CO₂; turns milky/cloudy when CO₂ is present." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "bio-gas-respiration-mcq-q01",
        question: "Which cells in the tracheal lining produce mucus to trap bacteria and dust?",
        options: ["Ciliated epithelial cells", "Goblet cells", "Red blood cells", "Alveolar cells"],
        answerIndex: 1,
        explanation: "Goblet cells secrete mucus. Ciliated cells beat the mucus upward — they move mucus but do not produce it. Red blood cells carry oxygen. Alveolar cells are for gas exchange.",
        guideRef: "The Human Breathing System",
        difficulty: "warmup",
      },
      {
        id: "bio-gas-respiration-mcq-q02",
        question: "During inspiration, which of the following correctly describes the pressure change inside the thorax?",
        options: [
          "Pressure rises above atmospheric, so air flows in",
          "Pressure falls below atmospheric, so air flows in",
          "Pressure falls below atmospheric, so air flows out",
          "Pressure rises above atmospheric, so air flows out",
        ],
        answerIndex: 1,
        explanation: "Inspiration increases thoracic volume (diaphragm flattens, ribs rise). By Boyle's Law, pressure falls below atmospheric — air then flows from high (atmosphere) to low (lungs) pressure. Options A and D describe expiration; C has the direction wrong.",
        guideRef: "Ventilation — Breathing In and Out",
        difficulty: "core",
        hints: [
          "Think about what happens to volume when the diaphragm contracts.",
          "Boyle's Law: if volume increases, what happens to pressure?",
          "Air always moves from high pressure to low pressure.",
          "Inspiration = air flowing in, so the thorax must be at lower pressure than atmosphere.",
        ],
      },
      {
        id: "bio-gas-respiration-mcq-q03",
        question: "A student compares inspired and expired air. Which statement correctly identifies a difference?",
        options: [
          "Expired air contains less nitrogen than inspired air",
          "Expired air contains more oxygen than inspired air",
          "Expired air contains more carbon dioxide than inspired air",
          "Expired air contains less water vapour than inspired air",
        ],
        answerIndex: 2,
        explanation: "Expired air contains ~4% CO₂ vs only 0.04% in inspired air. Nitrogen is unchanged (~78%). Expired air has less O₂ (~16% vs 21%). Expired air is warmer and saturated with more water vapour than inspired air.",
        guideRef: "Inspired vs Expired Air & Experimental Tests",
        difficulty: "warmup",
      },
      {
        id: "bio-gas-respiration-mcq-q04",
        question: "Which adaptation of the alveolus is MOST directly explained by Fick's Law of Diffusion?",
        options: [
          "The alveolus is lined with cilia",
          "The alveolar wall is one cell thick",
          "The alveolus contains goblet cells",
          "The alveolus is surrounded by cartilage rings",
        ],
        answerIndex: 1,
        explanation: "Fick's Law states rate ∝ 1/diffusion distance. A wall that is one cell thick (~1–2 µm) minimises diffusion distance, maximising rate. Cilia and goblet cells are airway protection features, not alveolar adaptations. Cartilage rings are in the trachea, not around alveoli.",
        guideRef: "Alveoli — Adaptations for Gas Exchange",
        difficulty: "core",
        hints: [
          "Write down Fick's Law first.",
          "Which part of the law does wall thickness affect?",
          "Thinner wall → shorter distance → faster rate.",
        ],
      },
      {
        id: "bio-gas-respiration-mcq-q05",
        question: "The balanced symbol equation for aerobic respiration is:",
        options: [
          "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
          "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",
          "C₆H₁₂O₆ → 2C₃H₆O₃",
          "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
        ],
        answerIndex: 0,
        explanation: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O is aerobic respiration. Option B is yeast fermentation. Option C is anaerobic respiration in muscle (lactic acid C₃H₆O₃). Option D is the reverse (photosynthesis).",
        guideRef: "Aerobic Respiration",
        difficulty: "warmup",
      },
      {
        id: "bio-gas-respiration-mcq-q06",
        question: "A runner finishes a 400 m sprint and continues to breathe rapidly for several minutes. The most accurate explanation is:",
        options: [
          "The runner needs extra O₂ to produce more glucose",
          "Extra O₂ is needed to oxidise lactic acid accumulated during the sprint",
          "The runner is inhaling extra nitrogen to dilute CO₂",
          "Aerobic respiration stops after exercise, so O₂ is stored in muscles",
        ],
        answerIndex: 1,
        explanation: "During sprinting, insufficient O₂ leads to anaerobic respiration and lactic acid buildup. After the sprint, excess oxygen is consumed to break down (oxidise or reconvert) lactic acid — this is oxygen debt. Glucose is not produced from O₂ (that is photosynthesis). Nitrogen has no metabolic role. Aerobic respiration continues after exercise.",
        guideRef: "Anaerobic Respiration — Humans & Yeast",
        difficulty: "core",
        hints: [
          "What metabolic pathway produced lactic acid during the sprint?",
          "What happens to lactic acid after exercise stops?",
          "The term 'oxygen debt' directly refers to this extra post-exercise O₂ consumption.",
        ],
      },
    ],
    qa: [
      {
        id: "bio-gas-respiration-qa-q01",
        question: "Describe the sequence of events that occurs during one inspiration (breathing in). Include the role of the diaphragm and intercostal muscles, the pressure change, and the resulting air movement. (4 marks)",
        marks: 4,
        modelAnswer: "During inspiration, the diaphragm contracts and flattens (moves downward). Simultaneously, the external intercostal muscles contract, pulling the ribcage upward and outward. These actions increase the volume of the thoracic cavity. As volume increases, pressure inside the lungs decreases below atmospheric pressure. Air therefore flows from the atmosphere (high pressure) into the lungs (low pressure) until pressures equalise.",
        markScheme: [
          "Diaphragm contracts / flattens / moves downward",
          "External intercostal muscles contract / ribs move up and out",
          "Volume of thoracic cavity increases",
          "Pressure inside lungs decreases / falls below atmospheric",
          "Air flows into lungs from atmosphere (high to low pressure)",
        ],
        commonError: "Students often state 'the lungs expand on their own' — the lungs have no muscle and are moved passively by the thoracic cavity.",
        guideRef: "Ventilation — Breathing In and Out",
        difficulty: "core",
        hints: [
          "Start with the muscles — which two contract during inspiration?",
          "Think about what happens to thoracic volume as both muscles contract.",
          "Apply Boyle's Law: volume up → pressure ?",
          "Air always moves from high to low pressure.",
        ],
        strategy: "Sequence the steps: muscle → volume → pressure → airflow.",
      },
      {
        id: "bio-gas-respiration-qa-q02",
        question: "Compare aerobic respiration and anaerobic respiration in humans. For each, state: (a) whether oxygen is required; (b) the products; (c) the relative energy yield; (d) where in the cell it occurs. (6 marks)",
        marks: 6,
        modelAnswer: "Aerobic respiration requires oxygen. It produces carbon dioxide and water. It releases a large amount of energy (approximately 2870 kJ per mole of glucose). It occurs mainly in the mitochondria.\n\nAnaerobic respiration in humans does not require oxygen. It produces lactic acid. It releases only a small amount of energy. It occurs in the cytoplasm.\n\nAerobic respiration is therefore far more efficient in terms of energy yield per glucose molecule.",
        markScheme: [
          "Aerobic: requires oxygen",
          "Aerobic: products are carbon dioxide and water",
          "Aerobic: high / large energy yield",
          "Aerobic: occurs in mitochondria",
          "Anaerobic (human): no oxygen required",
          "Anaerobic (human): product is lactic acid",
          "Anaerobic (human): low / small energy yield",
          "Anaerobic (human): occurs in cytoplasm",
        ],
        commonError: "Students often say anaerobic respiration produces 'CO₂ and water' — this is wrong for human muscle cells. CO₂ and ethanol is the yeast product, not the human product.",
        guideRef: "Anaerobic Respiration — Humans & Yeast",
        difficulty: "core",
        hints: [
          "Set up a two-column table: aerobic vs anaerobic.",
          "For each row: oxygen needed? products? energy? location?",
          "Recall: lactic acid is the human product; ethanol + CO₂ is the yeast product.",
        ],
        strategy: "Comparison questions: use a table structure mentally, then convert to prose.",
      },
      {
        id: "bio-gas-respiration-qa-q03",
        question: "A student measures the breathing rate and tidal volume of a person at rest, after 5 minutes of moderate exercise, and after 10 minutes of intense exercise. The results are shown below:\n\nAt rest: 14 breaths/min, 500 cm³/breath\nAfter moderate exercise: 22 breaths/min, 800 cm³/breath\nAfter intense exercise: 38 breaths/min, 1600 cm³/breath\n\n(a) Calculate the total volume of air breathed per minute at rest and after intense exercise. Show your working. (2 marks)\n(b) Explain why both rate AND depth of breathing increase during intense exercise. (3 marks)\n(c) State one reason why it is important that depth (tidal volume) increases, not just rate. (1 mark)",
        marks: 6,
        modelAnswer: "(a) At rest: 14 × 500 = 7000 cm³/min (7 dm³/min). After intense exercise: 38 × 1600 = 60 800 cm³/min (60.8 dm³/min).\n\n(b) During intense exercise, muscles respire aerobically at a faster rate, producing much more CO₂. This CO₂ dissolves in the blood plasma, forming carbonic acid, which lowers blood pH. Chemoreceptors in the brain (medulla oblongata) and aortic/carotid bodies detect this drop in pH (rise in CO₂). They send nerve signals to the intercostal muscles and diaphragm to contract more frequently (increasing rate) and more forcefully (increasing depth/tidal volume). This removes excess CO₂ and delivers more O₂ to the respiring muscles.\n\n(c) Increasing tidal volume ensures that fresh air reaches deep into the alveoli (rather than just ventilating the dead space of the trachea and bronchi), making gas exchange more efficient.",
        markScheme: [
          "At rest: 14 × 500 = 7000 cm³ min⁻¹ (correctly calculated)",
          "Intense exercise: 38 × 1600 = 60 800 cm³ min⁻¹ (correctly calculated)",
          "Muscles produce more CO₂ during intense exercise",
          "CO₂ dissolves in blood / lowers blood pH",
          "Chemoreceptors detect rise in CO₂ / fall in pH",
          "Nerve signals increase rate and depth of contraction of breathing muscles",
          "Increased tidal volume ventilates alveoli / not just dead space",
        ],
        commonError: "Students often say 'more O₂ is needed so breathing increases' — while true, the primary trigger is rising CO₂/falling pH, not falling O₂. Chemoreceptors are primarily CO₂-sensitive.",
        guideRef: "Inspired vs Expired Air & Experimental Tests",
        difficulty: "challenge",
        hints: [
          "Part (a): total volume per minute = breaths per minute × volume per breath.",
          "Part (b): think about what metabolic waste product muscles produce at high intensity.",
          "How does that waste product affect blood chemistry?",
          "What detects the blood chemistry change, and what response does it trigger?",
        ],
        strategy: "For data questions: calculate first, then explain using the data values in your answer.",
        solutions: [
          {
            label: "Method: minute ventilation formula",
            steps: [
              "Minute ventilation = breathing rate (breaths min⁻¹) × tidal volume (cm³ breath⁻¹)",
              "At rest: 14 × 500 = 7000 cm³ min⁻¹",
              "Intense exercise: 38 × 1600 = 60 800 cm³ min⁻¹",
              "Ratio: 60 800 / 7000 ≈ 8.7× increase in total ventilation",
            ],
          },
        ],
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "bio-gas-respiration-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Ten multiple-choice questions on the breathing system, airway protection, and ventilation mechanics.",
        questions: [
          {
            id: "bio-gas-respiration-bm1-01",
            question: "Which structure carries air directly into each lung from the trachea?",
            options: ["A bronchiole", "An alveolus", "A bronchus", "The diaphragm"],
            answerIndex: 2,
            explanation: "The trachea branches into two bronchi (one per lung). Each bronchus then divides repeatedly into smaller bronchioles, which end in alveoli. The diaphragm is a muscle, not an airway.",
            guideRef: "The Human Breathing System",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm1-02",
            question: "Which feature of the trachea prevents it from collapsing when pressure inside falls during inspiration?",
            options: ["Goblet cells", "C-shaped rings of cartilage", "Cilia", "Mucus"],
            answerIndex: 1,
            explanation: "C-shaped rings of cartilage are rigid supports that hold the trachea open. Goblet cells secrete mucus and cilia move it — these protect against pathogens but do not provide structural support.",
            guideRef: "The Human Breathing System",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm1-03",
            question: "The mucociliary escalator protects the lungs by:",
            options: [
              "Pumping air into the alveoli faster",
              "Trapping particles in mucus and sweeping them up to the throat",
              "Killing all bacteria with stomach acid",
              "Increasing the surface area for gas exchange",
            ],
            answerIndex: 1,
            explanation: "Goblet cells secrete mucus that traps dust and pathogens; cilia beat upward to sweep the mucus toward the throat where it is swallowed. It does not move air, kill bacteria with acid, or aid gas exchange.",
            guideRef: "The Human Breathing System",
            difficulty: "core",
            hints: [
              "Which two cell types line the airway and protect it?",
              "One produces mucus; the other moves it. In which direction is mucus moved?",
              "The mucus carries trapped particles toward the throat to be swallowed.",
            ],
          },
          {
            id: "bio-gas-respiration-bm1-04",
            question: "During inspiration, the external intercostal muscles:",
            options: [
              "Relax, moving the ribs down and in",
              "Contract, moving the ribs up and out",
              "Contract, pulling the diaphragm flat",
              "Relax, doming the diaphragm upward",
            ],
            answerIndex: 1,
            explanation: "The external intercostal muscles contract during inspiration, pulling the ribcage up and out to increase thoracic volume. The diaphragm is a separate muscle (it contracts and flattens). Relaxing the externals (and doming the diaphragm) occurs during expiration.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "Inspiration increases the volume of the thorax — do the ribs move up/out or down/in?",
              "Muscles can only pull, so to raise the ribs the external intercostals must contract.",
              "Do not confuse the intercostal action with the diaphragm action.",
            ],
          },
          {
            id: "bio-gas-respiration-bm1-05",
            question: "Why does air flow into the lungs during inspiration?",
            options: [
              "The lungs actively expand using their own muscle",
              "Thoracic volume decreases, raising the pressure inside",
              "Thoracic volume increases, lowering the pressure below atmospheric",
              "Oxygen is pulled in by the blood directly",
            ],
            answerIndex: 2,
            explanation: "Increasing thoracic volume lowers the pressure inside the lungs below atmospheric pressure (Boyle's Law). Air then moves from high pressure (atmosphere) to low pressure (lungs). The lungs have no muscle of their own and are moved passively.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "Gas always moves from high pressure to low pressure.",
              "Boyle's Law: volume up → pressure ?",
              "For air to flow IN, the inside pressure must be lower than atmospheric.",
            ],
          },
          {
            id: "bio-gas-respiration-bm1-06",
            question: "At rest, expiration is described as 'largely passive' because:",
            options: [
              "The internal intercostal muscles do all the work",
              "The diaphragm contracts to push air out",
              "The muscles relax and the elastic recoil of the lungs reduces the volume",
              "Air diffuses out without any pressure change",
            ],
            answerIndex: 2,
            explanation: "At rest, expiration requires no active muscular effort: the diaphragm and external intercostals simply relax, and the elastic recoil of the lungs (plus the weight of the ribs) reduces thoracic volume, raising pressure and pushing air out. Internal intercostals are used only in forced expiration.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "What do the breathing muscles do during quiet expiration?",
              "What property of lung tissue helps it return to a smaller volume?",
              "Internal intercostals are reserved for forced (active) expiration.",
            ],
          },
          {
            id: "bio-gas-respiration-bm1-07",
            question: "Which muscles contract during FORCED expiration (e.g. blowing out hard) that are not used during quiet breathing out?",
            options: [
              "External intercostal muscles",
              "Internal intercostal muscles",
              "The diaphragm",
              "Goblet cells",
            ],
            answerIndex: 1,
            explanation: "Forced expiration uses the internal intercostal muscles, which pull the ribs down and in more rapidly than passive recoil alone. The external intercostals and diaphragm contract during inspiration; goblet cells are secretory cells, not muscle.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "Quiet expiration is passive — so the relevant muscle is only used when you push air out hard.",
              "There are two sets of intercostal muscles — which set lowers the ribs?",
              "External = raise ribs (inspiration); internal = lower ribs (forced expiration).",
            ],
          },
          {
            id: "bio-gas-respiration-bm1-08",
            question: "A sealed syringe contains 60 cm³ of air. The plunger is pushed in until the volume is 20 cm³ at constant temperature. By what factor does the pressure inside change?",
            options: ["It falls to one third", "It stays the same", "It rises by a factor of 3", "It rises by a factor of 9"],
            answerIndex: 2,
            explanation: "By Boyle's Law, P ∝ 1/V at constant temperature, so P₁V₁ = P₂V₂. Volume falls from 60 to 20 cm³ — a factor of 3 decrease — so pressure rises by a factor of 3. This is the same principle the thorax uses to move air.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "challenge",
            hints: [
              "Boyle's Law: pressure is inversely proportional to volume at constant temperature.",
              "Find the ratio of the volumes: 60 ÷ 20 = ?",
              "If volume becomes one third, pressure must become three times larger.",
              "P₂ = P₁ × (V₁/V₂) = P₁ × (60/20) = 3 P₁.",
            ],
            strategy: "For Boyle's Law, use P₁V₁ = P₂V₂ and solve for the unknown ratio.",
          },
          {
            id: "bio-gas-respiration-bm1-09",
            question: "Which statement about the lungs and pleural membranes is correct?",
            options: [
              "The lungs contain muscle that actively pumps air",
              "The lungs sit in the thoracic cavity and are moved passively by changes in its volume",
              "The pleural membranes produce mucus to trap dust",
              "The diaphragm lies above the lungs",
            ],
            answerIndex: 1,
            explanation: "The lungs have no muscle of their own; they sit within the thoracic cavity and are moved passively as the ribcage and diaphragm change the cavity's volume. The diaphragm lies below the lungs, and the pleural membranes reduce friction rather than trap dust.",
            guideRef: "The Human Breathing System",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm1-10",
            question: "A patient's external intercostal muscles are paralysed but the diaphragm works normally. The most likely effect on quiet breathing is:",
            options: [
              "Breathing stops completely",
              "Inspiration can still occur but is shallower, relying mainly on the diaphragm",
              "Only expiration is affected; inspiration is normal",
              "The lungs collapse permanently",
            ],
            answerIndex: 1,
            explanation: "The diaphragm is the major muscle of inspiration, contributing most of the tidal volume. With the external intercostals paralysed, inspiration can still occur via diaphragm contraction, but the rib-raising contribution is lost, so breaths are shallower. Breathing does not stop, and the lungs do not collapse.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "challenge",
            hints: [
              "Inspiration normally uses two muscle groups — name them.",
              "If one group fails, can the other still increase thoracic volume?",
              "Which muscle is the larger contributor to a normal breath?",
              "Think 'reduced tidal volume', not 'no breathing'.",
            ],
          },
        ],
      },
      {
        id: "bio-gas-respiration-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Ten multiple-choice questions on alveolar adaptations, gas exchange, and inspired versus expired air.",
        questions: [
          {
            id: "bio-gas-respiration-bm2-01",
            question: "Where in the lungs does gas exchange between air and blood take place?",
            options: ["The trachea", "The bronchi", "The alveoli", "The pleural membranes"],
            answerIndex: 2,
            explanation: "Gas exchange occurs across the thin walls of the alveoli, where oxygen diffuses into the blood and carbon dioxide diffuses out. The trachea, bronchi and pleural membranes are conducting/support structures, not exchange surfaces.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm2-02",
            question: "Approximately what total surface area do the alveoli of human lungs provide for gas exchange?",
            options: ["Less than 1 m²", "About 7 m²", "About 70 m²", "About 700 m²"],
            answerIndex: 2,
            explanation: "There are around 300–500 million alveoli giving a total surface area of roughly 70 m² — about the size of a tennis court. This huge surface area maximises the rate of diffusion.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm2-03",
            question: "Why is a moist lining important for the alveolar surface?",
            options: [
              "It keeps the alveoli warm",
              "Gases dissolve in the film of moisture before diffusing across the membrane",
              "It traps bacteria like mucus does",
              "It increases the surface area",
            ],
            answerIndex: 1,
            explanation: "Gases must dissolve in the thin film of moisture lining the alveolus before they can diffuse through the membrane into the blood. The moisture is not primarily for warmth, trapping bacteria, or increasing surface area.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "core",
            hints: [
              "How does a gas get from the air space into the watery blood?",
              "Gases must first dissolve before they can diffuse across a membrane.",
              "Think about the order: dissolve, then diffuse.",
            ],
          },
          {
            id: "bio-gas-respiration-bm2-04",
            question: "How does a continuous blood supply in the pulmonary capillaries speed up gas exchange?",
            options: [
              "It increases the diffusion distance",
              "It maintains a steep concentration gradient for O₂ and CO₂",
              "It reduces the surface area",
              "It warms the alveolar air",
            ],
            answerIndex: 1,
            explanation: "Blood flow constantly removes oxygenated blood and brings in deoxygenated blood, keeping blood O₂ low and CO₂ high relative to the alveolar air. This maintains a steep concentration gradient, which (by Fick's Law) maximises the diffusion rate.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "core",
            hints: [
              "Diffusion is fastest when the concentration difference is large.",
              "What does flowing blood do to the concentration of O₂ on the blood side?",
              "Removing diffused gas keeps the gradient steep.",
            ],
          },
          {
            id: "bio-gas-respiration-bm2-05",
            question: "Which row correctly compares inspired and expired air?",
            options: [
              "Inspired 21% O₂, 0.04% CO₂; Expired 16% O₂, 4% CO₂",
              "Inspired 16% O₂, 4% CO₂; Expired 21% O₂, 0.04% CO₂",
              "Inspired 21% O₂, 4% CO₂; Expired 16% O₂, 0.04% CO₂",
              "Inspired 78% O₂, 21% CO₂; Expired 78% O₂, 16% CO₂",
            ],
            answerIndex: 0,
            explanation: "Inspired air contains ~21% O₂ and ~0.04% CO₂; expired air contains ~16% O₂ (oxygen absorbed) and ~4% CO₂ (carbon dioxide released). Nitrogen (~78%) is unchanged. Option D confuses nitrogen with oxygen.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm2-06",
            question: "Why is the percentage of nitrogen the same in inspired and expired air?",
            options: [
              "Nitrogen is converted into oxygen in the lungs",
              "Nitrogen is not used or produced by the body's metabolism",
              "Nitrogen dissolves completely in the blood",
              "Nitrogen is filtered out by the goblet cells",
            ],
            answerIndex: 1,
            explanation: "Nitrogen is physiologically inert in humans — it is neither used nor produced by metabolism — so its percentage is unchanged. (The slight apparent change is only because O₂ and CO₂ percentages shift.) It is not converted, fully dissolved, or filtered out.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "Which gas in air takes part in respiration? Which does not?",
              "If a gas is not used or made by the body, its amount should not change.",
              "Nitrogen is described as inert.",
            ],
          },
          {
            id: "bio-gas-respiration-bm2-07",
            question: "A cold mirror mists over when you breathe onto it. This demonstrates that expired air, compared with inspired air, contains more:",
            options: ["Oxygen", "Nitrogen", "Water vapour", "Carbon dioxide"],
            answerIndex: 2,
            explanation: "The misting is condensation of water vapour. Expired air is saturated with water vapour (picked up from the moist lung lining), so it condenses on a cold surface. This test shows water vapour, not CO₂ (which is tested with limewater).",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "Misting on a cold surface is condensation of which substance?",
              "Where does the lung add this substance to the air?",
              "The limewater test is for CO₂; the mirror test is for something else.",
            ],
          },
          {
            id: "bio-gas-respiration-bm2-08",
            question: "Two alveoli, X and Y, are identical except that Y has a wall twice as thick as X. Using Fick's Law, the rate of diffusion across Y compared with X is approximately:",
            options: ["Twice as fast", "The same", "Half as fast", "Four times as fast"],
            answerIndex: 2,
            explanation: "Fick's Law: rate ∝ 1/diffusion distance. Doubling the wall thickness doubles the diffusion distance, so the rate is halved. (Surface area and concentration difference are unchanged here.)",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "challenge",
            hints: [
              "Write Fick's Law and isolate the diffusion-distance term.",
              "Rate is inversely proportional to distance.",
              "If distance doubles, the rate becomes 1/2.",
              "Only the thickness changed, so only that term matters.",
            ],
            strategy: "Hold all but one Fick's-Law variable constant, then apply the proportionality.",
          },
          {
            id: "bio-gas-respiration-bm2-09",
            question: "In a patient with pulmonary oedema, fluid builds up between the alveoli and the capillaries. Using Fick's Law, this most directly:",
            options: [
              "Increases the surface area for gas exchange",
              "Increases the diffusion distance, slowing gas exchange",
              "Steepens the concentration gradient",
              "Has no effect on gas exchange",
            ],
            answerIndex: 1,
            explanation: "Extra fluid between alveolus and capillary increases the distance oxygen must diffuse. By Fick's Law (rate ∝ 1/distance), this slows gas exchange, causing breathlessness. It does not increase surface area or steepen the gradient.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "challenge",
            hints: [
              "Which Fick's Law variable is changed by adding a layer of fluid in the path?",
              "Fluid sits between the air and the blood — what does it add to the journey?",
              "A longer path means a slower rate.",
            ],
          },
          {
            id: "bio-gas-respiration-bm2-10",
            question: "Which statement about expired air is INCORRECT?",
            options: [
              "It is warmer than inspired air",
              "It contains more carbon dioxide than inspired air",
              "It contains more oxygen than inspired air",
              "It is saturated with water vapour",
            ],
            answerIndex: 2,
            explanation: "Expired air contains LESS oxygen (~16%) than inspired air (~21%) because oxygen is absorbed by the blood. The other statements are all correct: expired air is warmer, has more CO₂, and is saturated with water vapour.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "warmup",
          },
        ],
      },
      {
        id: "bio-gas-respiration-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Ten multiple-choice questions on aerobic respiration, its equations, sites, and energy uses.",
        questions: [
          {
            id: "bio-gas-respiration-bm3-01",
            question: "The word equation for aerobic respiration is:",
            options: [
              "glucose + oxygen → carbon dioxide + water",
              "glucose → lactic acid",
              "glucose → ethanol + carbon dioxide",
              "carbon dioxide + water → glucose + oxygen",
            ],
            answerIndex: 0,
            explanation: "Aerobic respiration: glucose + oxygen → carbon dioxide + water (+ energy). Option B is human anaerobic respiration, option C is yeast fermentation, and option D is photosynthesis (the reverse).",
            guideRef: "Aerobic Respiration",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm3-02",
            question: "In which organelle does most aerobic respiration occur?",
            options: ["Chloroplast", "Mitochondrion", "Nucleus", "Vacuole"],
            answerIndex: 1,
            explanation: "Aerobic respiration occurs mainly in the mitochondria, on the cristae of the inner membrane. Chloroplasts carry out photosynthesis, the nucleus stores DNA, and the vacuole stores cell sap.",
            guideRef: "Aerobic Respiration",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm3-03",
            question: "How many molecules of oxygen are required to fully oxidise one molecule of glucose in aerobic respiration?",
            options: ["2", "3", "6", "12"],
            answerIndex: 2,
            explanation: "The balanced equation C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O shows that 6 molecules of O₂ are needed per glucose molecule, producing 6 CO₂ and 6 H₂O.",
            guideRef: "Aerobic Respiration",
            difficulty: "core",
            hints: [
              "Recall the balanced symbol equation for aerobic respiration.",
              "Look at the coefficient in front of O₂.",
              "It is the same as the number of CO₂ molecules produced.",
            ],
          },
          {
            id: "bio-gas-respiration-bm3-04",
            question: "Which of the following is NOT a typical use of the energy released by respiration?",
            options: [
              "Active transport of ions across membranes",
              "Synthesis of proteins for growth",
              "Trapping light energy in chlorophyll",
              "Contraction of muscles",
            ],
            answerIndex: 2,
            explanation: "Trapping light is the job of chlorophyll in photosynthesis and uses light energy, not energy from respiration. Active transport, protein synthesis and muscle contraction all require energy released by respiration.",
            guideRef: "Aerobic Respiration",
            difficulty: "core",
            hints: [
              "Energy from respiration powers cellular work — list some examples.",
              "Which option is an INPUT of light energy rather than a use of respiratory energy?",
              "Photosynthesis captures energy; respiration releases it.",
            ],
          },
          {
            id: "bio-gas-respiration-bm3-05",
            question: "Which best explains why aerobic respiration releases far more energy per glucose molecule than anaerobic respiration?",
            options: [
              "Aerobic respiration occurs faster",
              "Aerobic respiration fully oxidises glucose to CO₂ and water, releasing all its energy",
              "Aerobic respiration produces lactic acid which stores energy",
              "Anaerobic respiration uses more oxygen",
            ],
            answerIndex: 1,
            explanation: "Aerobic respiration completely oxidises glucose to CO₂ and water, breaking all the C–H and C–C bonds and releasing the maximum energy (~2870 kJ mol⁻¹). Anaerobic respiration only partially breaks down glucose, leaving most of the energy locked in lactic acid or ethanol.",
            guideRef: "Aerobic Respiration",
            difficulty: "core",
            hints: [
              "Compare how completely glucose is broken down in each pathway.",
              "Anaerobic products (lactic acid, ethanol) still contain a lot of chemical energy.",
              "More complete oxidation means more energy released.",
            ],
          },
          {
            id: "bio-gas-respiration-bm3-06",
            question: "Aerobic respiration releases approximately how much energy per mole of glucose?",
            options: ["28.7 kJ", "287 kJ", "2870 kJ", "28 700 kJ"],
            answerIndex: 2,
            explanation: "Aerobic respiration releases approximately 2870 kJ per mole of glucose — far more than the small yield of anaerobic respiration. This high yield is why aerobic respiration is the body's main energy source.",
            guideRef: "Aerobic Respiration",
            difficulty: "core",
            hints: [
              "This is a standard IGCSE value worth memorising.",
              "It is close to 2.9 megajoules per mole.",
              "The value is in the thousands of kJ.",
            ],
          },
          {
            id: "bio-gas-respiration-bm3-07",
            question: "In the balanced equation C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O, how many oxygen atoms are present on the RIGHT-hand side in total?",
            options: ["12", "18", "6", "24"],
            answerIndex: 1,
            explanation: "On the right: 6CO₂ contributes 6 × 2 = 12 oxygen atoms, and 6H₂O contributes 6 × 1 = 6 oxygen atoms. Total = 12 + 6 = 18. This matches the left side (6 from glucose + 12 from 6O₂ = 18), confirming the equation is balanced.",
            guideRef: "Aerobic Respiration",
            difficulty: "challenge",
            hints: [
              "Count oxygen atoms in 6CO₂ first.",
              "Then count oxygen atoms in 6H₂O.",
              "Add them: (6 × 2) + (6 × 1).",
              "Check it equals the left side (6 in glucose + 12 in 6O₂).",
            ],
            strategy: "When checking a balanced equation, count each element separately on both sides.",
          },
          {
            id: "bio-gas-respiration-bm3-08",
            question: "Warm-blooded mammals use some of the energy from respiration to maintain body temperature. In very cold conditions, you would expect their rate of aerobic respiration to:",
            options: [
              "Decrease, to save glucose",
              "Increase, to release more heat energy",
              "Stop completely",
              "Stay exactly the same",
            ],
            answerIndex: 1,
            explanation: "Maintaining a constant body temperature in the cold requires extra heat, so the rate of aerobic respiration increases to release more energy (some as heat). This is why oxygen and food demand rise in cold conditions.",
            guideRef: "Aerobic Respiration",
            difficulty: "core",
            hints: [
              "Respiration releases energy, some of which is heat.",
              "In the cold, the body must replace heat lost to the surroundings.",
              "More heat needed → more respiration.",
            ],
          },
          {
            id: "bio-gas-respiration-bm3-09",
            question: "A respiring tissue uses 9 mol of oxygen to fully respire glucose aerobically. How many moles of glucose were respired?",
            options: ["1.5 mol", "3 mol", "9 mol", "54 mol"],
            answerIndex: 0,
            explanation: "Each mole of glucose requires 6 mol O₂ (from C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O). Moles of glucose = 9 ÷ 6 = 1.5 mol.",
            guideRef: "Aerobic Respiration",
            difficulty: "challenge",
            hints: [
              "What is the ratio of glucose to oxygen in the balanced equation?",
              "1 glucose : 6 oxygen.",
              "Divide the moles of O₂ by 6.",
              "9 ÷ 6 = 1.5 mol.",
            ],
            strategy: "Use the mole ratio from the balanced equation to convert between reactants.",
          },
          {
            id: "bio-gas-respiration-bm3-10",
            question: "The cristae (inner folded membranes) of mitochondria are important because they:",
            options: [
              "Store the cell's genetic information",
              "Provide a large surface area for the enzymes/reactions of aerobic respiration",
              "Trap light for photosynthesis",
              "Secrete mucus into the airway",
            ],
            answerIndex: 1,
            explanation: "The cristae greatly increase the inner-membrane surface area, providing more space for the enzymes and electron-transport processes that synthesise ATP. They do not store genes, trap light, or secrete mucus.",
            guideRef: "Aerobic Respiration",
            difficulty: "warmup",
          },
        ],
      },
      {
        id: "bio-gas-respiration-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ten multiple-choice questions on anaerobic respiration, fermentation, oxygen debt, and exercise.",
        questions: [
          {
            id: "bio-gas-respiration-bm4-01",
            question: "The product of anaerobic respiration in human muscle cells is:",
            options: ["Ethanol and carbon dioxide", "Lactic acid", "Carbon dioxide and water", "Glucose"],
            answerIndex: 1,
            explanation: "Human muscle cells produce lactic acid during anaerobic respiration (glucose → lactic acid). Ethanol + CO₂ is the yeast product; CO₂ + water is the aerobic product; glucose is the substrate.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm4-02",
            question: "The balanced symbol equation for yeast fermentation is:",
            options: [
              "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",
              "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
              "C₆H₁₂O₆ → 2C₃H₆O₃",
              "2C₂H₅OH + 2CO₂ → C₆H₁₂O₆",
            ],
            answerIndex: 0,
            explanation: "Yeast fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (glucose → ethanol + carbon dioxide). Option B is aerobic respiration, option C is the lactic acid pathway, and option D is the reverse of fermentation.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "core",
            hints: [
              "Fermentation makes ethanol and carbon dioxide from glucose.",
              "One glucose gives two ethanol and two CO₂.",
              "Check the atoms balance: C₆ → 2(C₂) + 2(C); H₁₂ → 2(H₆); O₆ → 2(O) + 2(O₂).",
            ],
          },
          {
            id: "bio-gas-respiration-bm4-03",
            question: "Which TWO products of yeast fermentation are exploited in baking and brewing respectively?",
            options: [
              "Lactic acid (baking) and ethanol (brewing)",
              "Carbon dioxide (baking) and ethanol (brewing)",
              "Ethanol (baking) and carbon dioxide (brewing)",
              "Water (baking) and oxygen (brewing)",
            ],
            answerIndex: 1,
            explanation: "In baking, the CO₂ produced makes dough rise (the ethanol evaporates during baking). In brewing, the ethanol is the desired product. Yeast does not produce lactic acid.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "core",
            hints: [
              "What gas makes bread dough rise?",
              "What substance gives beer and wine their alcohol?",
              "Match each use to the product it relies on.",
            ],
          },
          {
            id: "bio-gas-respiration-bm4-04",
            question: "In which part of the cell does anaerobic respiration take place?",
            options: ["Mitochondria", "Cytoplasm", "Nucleus", "Cell membrane"],
            answerIndex: 1,
            explanation: "Anaerobic respiration (in both human muscle and yeast) takes place in the cytoplasm. Aerobic respiration occurs mainly in the mitochondria. The nucleus and cell membrane are not respiration sites.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm4-05",
            question: "Oxygen debt is best defined as:",
            options: [
              "The oxygen used during exercise",
              "The extra oxygen needed after exercise to break down accumulated lactic acid",
              "The oxygen stored permanently in muscles",
              "The oxygen lost in expired air",
            ],
            answerIndex: 1,
            explanation: "Oxygen debt (EPOC) is the extra oxygen consumed after exercise to oxidise or convert the lactic acid produced anaerobically during exercise. It is not the oxygen used during exercise, stored oxygen, or oxygen in expired air.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "core",
            hints: [
              "It is the oxygen consumed AFTER exercise, not during.",
              "What waste product built up during anaerobic exercise?",
              "The extra oxygen is used to deal with that product.",
            ],
          },
          {
            id: "bio-gas-respiration-bm4-06",
            question: "During exercise, the body increases both the rate AND depth of breathing. The primary chemical signal detected by chemoreceptors is:",
            options: [
              "A fall in blood oxygen only",
              "A rise in blood carbon dioxide / fall in blood pH",
              "A rise in blood glucose",
              "A fall in body temperature",
            ],
            answerIndex: 1,
            explanation: "Working muscles produce more CO₂, which dissolves in the blood, lowering pH. Chemoreceptors are primarily sensitive to this rise in CO₂ / fall in pH and trigger increased ventilation. Falling O₂ plays a smaller role; glucose and temperature are not the primary signals.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "Which gas builds up when muscles respire harder?",
              "How does dissolved CO₂ affect blood pH?",
              "Chemoreceptors respond mainly to CO₂/pH, not O₂.",
            ],
          },
          {
            id: "bio-gas-respiration-bm4-07",
            question: "Why does increasing the DEPTH of breathing (tidal volume) during exercise improve gas exchange more than increasing rate alone?",
            options: [
              "It warms the air more",
              "It ensures fresh air reaches deep into the alveoli rather than only the dead space",
              "It removes nitrogen from the lungs",
              "It increases the number of alveoli",
            ],
            answerIndex: 1,
            explanation: "Shallow rapid breaths mainly move air in and out of the dead space (trachea and bronchi), which has no gas exchange. Deeper breaths push fresh air right into the alveoli, refreshing alveolar air and keeping concentration gradients steep. It does not change air temperature, remove nitrogen, or create new alveoli.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "challenge",
            hints: [
              "Not all inhaled air reaches the alveoli — some stays in the airways.",
              "The airways that do no gas exchange are called the dead space.",
              "Deeper breaths overcome the dead space and reach the alveoli.",
            ],
          },
          {
            id: "bio-gas-respiration-bm4-08",
            question: "A yeast culture ferments 3 mol of glucose completely. Using C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂, what volume of CO₂ is produced at RTP (24 dm³ mol⁻¹)?",
            options: ["72 dm³", "144 dm³", "48 dm³", "288 dm³"],
            answerIndex: 1,
            explanation: "Each mole of glucose yields 2 mol CO₂, so 3 mol glucose → 6 mol CO₂. Volume = 6 × 24 = 144 dm³. (Option A wrongly uses a 1:1 ratio; option C uses 2 mol total.)",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "challenge",
            hints: [
              "From the equation, how many CO₂ per glucose? (2)",
              "Moles of CO₂ = 3 × 2 = 6 mol.",
              "Volume = moles × 24 dm³ mol⁻¹.",
              "6 × 24 = 144 dm³.",
            ],
            strategy: "Use the mole ratio first, then convert moles to volume with the molar gas volume.",
          },
          {
            id: "bio-gas-respiration-bm4-09",
            question: "Compared with one molecule of glucose respired aerobically, fermentation of one glucose molecule by yeast produces:",
            options: [
              "The same amount of CO₂ (6 molecules)",
              "More CO₂ (more than 6 molecules)",
              "Fewer CO₂ molecules (2 instead of 6) and far less energy",
              "No CO₂ at all",
            ],
            answerIndex: 2,
            explanation: "Aerobic respiration of one glucose gives 6 CO₂ (and high energy), whereas fermentation gives only 2 CO₂ plus 2 ethanol and much less energy. Fermentation does produce CO₂, but less per glucose, because glucose is only partially broken down.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "challenge",
            hints: [
              "Compare CO₂ coefficients: aerobic gives 6; fermentation gives 2.",
              "Fermentation leaves energy locked in ethanol.",
              "So less CO₂ and less energy per glucose.",
            ],
          },
          {
            id: "bio-gas-respiration-bm4-10",
            question: "After intense exercise, a sprinter continues to breathe deeply and rapidly for several minutes. The best explanation is that:",
            options: [
              "The lungs are still full of carbon dioxide that cannot escape",
              "Extra oxygen is being taken in to repay the oxygen debt by oxidising lactic acid",
              "The muscles are still respiring anaerobically at the same rate",
              "Aerobic respiration has permanently stopped",
            ],
            answerIndex: 1,
            explanation: "The sprinter accumulated lactic acid during anaerobic respiration. Recovery breathing supplies the extra oxygen (the oxygen debt) used to oxidise or convert that lactic acid in the liver and muscles. Aerobic respiration continues throughout; CO₂ is not trapped.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "core",
            hints: [
              "What built up in the muscles during the sprint?",
              "What is needed after exercise to deal with lactic acid?",
              "This extra post-exercise oxygen has a specific name.",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-gas-respiration-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ten structured questions on the breathing system, airway protection, and ventilation mechanics.",
        questions: [
          {
            id: "bio-gas-respiration-bq1-01",
            question: "List, in order, the structures that air passes through from the mouth to the gas exchange surface. (3 marks)",
            marks: 3,
            modelAnswer: "Mouth (or nose) → trachea → bronchi → bronchioles → alveoli. The trachea is the windpipe, it branches into two bronchi (one per lung), each bronchus branches into many smaller bronchioles, and these end in tiny air sacs called alveoli, where gas exchange occurs.",
            markScheme: [
              "Trachea (before bronchi)",
              "Bronchi → bronchioles (correct order)",
              "Alveoli named as the final/gas-exchange structure",
            ],
            commonError: "Students often swap bronchi and bronchioles — bronchi are the large tubes; bronchioles are the small branches.",
            guideRef: "The Human Breathing System",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bq1-02",
            question: "Describe the functions of (a) goblet cells and (b) ciliated epithelial cells in the airways, and explain how they work together to protect the lungs. (4 marks)",
            marks: 4,
            modelAnswer: "(a) Goblet cells secrete mucus, a sticky fluid that traps dust, bacteria and other particles in the air. (b) Ciliated epithelial cells have hair-like cilia on their surface that beat rhythmically in coordinated waves. Working together: the mucus traps inhaled pathogens and particles, and the cilia sweep this contaminated mucus upward toward the throat (the mucociliary escalator), where it is swallowed. This prevents particles and pathogens reaching and damaging the delicate alveoli.",
            markScheme: [
              "Goblet cells secrete/produce mucus",
              "Mucus traps dust / bacteria / particles",
              "Ciliated cells have cilia that beat / sweep mucus upward (toward throat)",
              "Prevents particles/pathogens reaching the alveoli (and is swallowed)",
            ],
            commonError: "Do not say cilia produce mucus — goblet cells make it; cilia only move it.",
            guideRef: "The Human Breathing System",
            difficulty: "core",
            hints: [
              "State what each cell type produces or does.",
              "Mucus traps; cilia move — in which direction?",
              "Finish with the protective outcome for the alveoli.",
            ],
          },
          {
            id: "bio-gas-respiration-bq1-03",
            question: "Explain why the trachea is reinforced with rings of cartilage, and suggest why the rings are C-shaped (incomplete) rather than complete rings. (3 marks)",
            marks: 3,
            modelAnswer: "The cartilage rings are rigid and hold the trachea open at all times, preventing it collapsing when the air pressure inside falls during inspiration. The rings are C-shaped (incomplete at the back) so that the soft, flexible gap lies against the oesophagus; this allows the oesophagus to bulge into that space when a bolus of food is swallowed, without the rigid cartilage obstructing swallowing.",
            markScheme: [
              "Cartilage keeps trachea open / prevents collapse",
              "Especially when pressure inside falls during inspiration",
              "C-shape/gap allows oesophagus to expand during swallowing",
            ],
            commonError: "Students explain the rings keep the airway open but forget the second mark about the oesophagus needing room to expand.",
            guideRef: "The Human Breathing System",
            difficulty: "core",
            hints: [
              "Why must an airway tube be held open?",
              "When pressure drops inside, what could happen to a soft tube?",
              "What lies just behind the trachea that needs room to expand?",
            ],
          },
          {
            id: "bio-gas-respiration-bq1-04",
            question: "Describe the sequence of events during expiration at rest, explaining how the pressure change causes air to leave the lungs. (4 marks)",
            marks: 4,
            modelAnswer: "During expiration at rest, the diaphragm relaxes and returns to its dome shape (moving upward), and the external intercostal muscles relax so the ribcage moves down and in. These changes, helped by the elastic recoil of the lungs, decrease the volume of the thoracic cavity. As volume decreases, the pressure inside the lungs rises above atmospheric pressure. Air therefore flows from the lungs (high pressure) out to the atmosphere (low pressure).",
            markScheme: [
              "Diaphragm relaxes / domes upward",
              "External intercostals relax / ribs move down and in",
              "Thoracic volume decreases (elastic recoil helps)",
              "Pressure rises above atmospheric → air flows out",
            ],
            commonError: "Students sometimes say muscles 'contract' during quiet expiration — at rest the muscles RELAX and recoil does the work.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "What do the diaphragm and external intercostals do during quiet breathing out?",
              "What happens to thoracic volume as a result?",
              "Apply Boyle's Law: volume down → pressure ? → air moves which way?",
            ],
          },
          {
            id: "bio-gas-respiration-bq1-05",
            question: "Explain, using the idea of pressure, why air moves into the lungs during inspiration. Refer to Boyle's Law in your answer. (3 marks)",
            marks: 3,
            modelAnswer: "During inspiration, the diaphragm and external intercostal muscles contract, increasing the volume of the thoracic cavity. By Boyle's Law, at constant temperature pressure is inversely proportional to volume, so as the volume increases the pressure inside the lungs falls below atmospheric pressure. Because gas always moves from a region of higher pressure to lower pressure, air flows from the atmosphere into the lungs until the pressures are equal.",
            markScheme: [
              "Thoracic volume increases (muscles contract)",
              "Boyle's Law: pressure inversely proportional to volume → pressure falls",
              "Air moves from high (atmosphere) to low (lungs) pressure",
            ],
            commonError: "Avoid saying 'the lungs suck air in' — describe the pressure gradient instead.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "What happens to thoracic volume during inspiration?",
              "Boyle's Law links volume and pressure how?",
              "Air flows from high to low pressure.",
            ],
          },
          {
            id: "bio-gas-respiration-bq1-06",
            question: "A student wants to compare the depth of breathing at rest and after exercise using a spirometer.\n\n(a) Define tidal volume. (1 mark)\n(b) The student records a tidal volume of 0.5 dm³ at rest and 2.4 dm³ after exercise. Calculate the factor by which tidal volume increased. Show your working. (2 marks)\n(c) State two variables that should be kept constant for a fair comparison. (2 marks)",
            marks: 5,
            modelAnswer: "(a) Tidal volume is the volume of air inhaled or exhaled in one normal breath (at rest).\n\n(b) Factor = 2.4 ÷ 0.5 = 4.8. Tidal volume increased by a factor of 4.8 (it became 4.8 times larger).\n\n(c) Any two from: the same person tested each time; the same type/intensity of exercise; the same posture (sitting/standing); the same time of day; the same spirometer/apparatus; allowing the same recovery period before measuring.",
            markScheme: [
              "Tidal volume = volume of air in/out per (normal) breath",
              "Working shown: 2.4 ÷ 0.5",
              "Factor = 4.8",
              "Two valid controlled variables (e.g. same person; same exercise intensity; same posture; same apparatus)",
            ],
            commonError: "When asked for a 'factor', divide the two values; do not subtract them.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "Tidal volume is per single breath.",
              "Factor of increase = new value ÷ original value.",
              "2.4 ÷ 0.5 = ?",
              "For fair tests, change only the variable being investigated.",
            ],
            solutions: [
              {
                label: "Method: factor of increase",
                steps: [
                  "Factor = new value ÷ original value",
                  "Factor = 2.4 dm³ ÷ 0.5 dm³",
                  "Factor = 4.8 (no units, since it is a ratio)",
                ],
              },
            ],
          },
          {
            id: "bio-gas-respiration-bq1-07",
            question: "Explain why the lungs themselves are described as having 'no muscle of their own', and describe how they are nevertheless moved during breathing. (3 marks)",
            marks: 3,
            modelAnswer: "Lung tissue contains elastic tissue but no skeletal muscle that can actively change its size, so the lungs cannot expand or contract on their own. Instead, they are moved passively: the diaphragm and intercostal muscles change the volume of the thoracic cavity, which alters the pressure around the lungs. Because the lungs are elastic and effectively sealed within the thorax, they follow these volume changes — expanding when thoracic volume increases and recoiling when it decreases.",
            markScheme: [
              "Lungs have no (skeletal) muscle to change their own size",
              "They are moved passively by the thoracic cavity (diaphragm/intercostals)",
              "Lungs are elastic and follow the volume/pressure changes of the thorax",
            ],
            commonError: "Students wrongly say 'the lungs expand themselves' — emphasise the muscles of the thorax do the work.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "Can lung tissue actively contract like a bicep?",
              "Which muscles actually change the size of the chest cavity?",
              "How does the elastic lung respond to those changes?",
            ],
          },
          {
            id: "bio-gas-respiration-bq1-08",
            question: "A sealed model lung uses a bell jar with a rubber sheet across the bottom (representing the diaphragm) and a balloon inside (representing a lung).\n\n(a) Describe what happens to the balloon when the rubber sheet is pulled downward, and explain why. (3 marks)\n(b) Explain one way in which this model is NOT a good representation of real breathing. (2 marks)",
            marks: 5,
            modelAnswer: "(a) When the rubber sheet is pulled downward, the volume inside the bell jar increases, so the air pressure inside the jar (around the balloon) decreases. The higher pressure of the air inside the balloon (connected to the outside atmosphere) now pushes the balloon walls outward, so the balloon inflates. This models inspiration: diaphragm down → volume up → pressure down → 'lung' inflates.\n\n(b) Any one from: the model has only one balloon, whereas there are two lungs; the model has no ribcage/intercostal muscle movement (only the diaphragm acts); the rubber sheet is pulled by hand rather than by muscle contraction; the balloon does not have alveoli/branching airways; the model does not show gas exchange.",
            markScheme: [
              "Balloon inflates / gets bigger",
              "Pulling sheet down increases volume → decreases pressure inside the jar",
              "Atmospheric/inside-balloon pressure now greater → pushes balloon open",
              "One valid limitation (no ribs/intercostals; single balloon; no alveoli/gas exchange; hand not muscle)",
            ],
            commonError: "Students say the balloon 'sucks in air' — describe the pressure difference rather than suction.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "challenge",
            hints: [
              "Pulling the sheet down changes the volume inside the jar — up or down?",
              "Volume up → pressure inside jar down → what happens to the balloon?",
              "For (b): what real features of breathing does the simple model leave out?",
            ],
          },
          {
            id: "bio-gas-respiration-bq1-09",
            question: "Compare the muscle actions and rib/diaphragm positions during inspiration and expiration at rest. Present your comparison clearly. (4 marks)",
            marks: 4,
            modelAnswer: "Inspiration: the diaphragm contracts and flattens (moves down); the external intercostal muscles contract, moving the ribs up and out; thoracic volume increases and pressure falls so air flows in.\n\nExpiration (at rest): the diaphragm relaxes and domes upward; the external intercostal muscles relax, so the ribs move down and in; thoracic volume decreases and pressure rises so air flows out. Expiration at rest is passive, relying on relaxation and elastic recoil, whereas inspiration is always active (requires muscle contraction).",
            markScheme: [
              "Inspiration: diaphragm contracts/flattens; ribs up and out",
              "Expiration: diaphragm relaxes/domes; ribs down and in",
              "Volume increases (inspiration) vs decreases (expiration) with matching pressure change",
              "Inspiration active; quiet expiration passive (elastic recoil)",
            ],
            commonError: "Students describe inspiration well but write the opposite muscle action incorrectly for expiration — be precise about contract vs relax.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "Set out two columns: inspiration and expiration.",
              "For each: diaphragm action, intercostal action, rib movement.",
              "Then add the volume/pressure consequence and which is active vs passive.",
            ],
            strategy: "Comparison questions are clearest as a point-by-point contrast.",
          },
          {
            id: "bio-gas-respiration-bq1-10",
            question: "Smoking over many years can lead to chronic bronchitis (excess mucus, damaged cilia) and emphysema (destruction of alveolar walls).\n\n(a) Explain why a person with damaged cilia is more likely to develop chest infections. (2 marks)\n(b) Using Fick's Law, explain why a person with emphysema becomes breathless even at rest. (3 marks)",
            marks: 5,
            modelAnswer: "(a) With cilia damaged or paralysed, mucus (and the bacteria, dust and particles trapped in it) is no longer swept up out of the airways. The mucus and pathogens accumulate in the airways and lungs, providing conditions for bacteria to multiply, so infections such as bronchitis become more frequent.\n\n(b) Emphysema destroys the walls between alveoli, merging them into fewer, larger air sacs. This greatly reduces the total surface area available for gas exchange. According to Fick's Law (rate ∝ surface area × concentration difference ÷ diffusion distance), a smaller surface area reduces the rate of oxygen diffusion into the blood. Damaged walls may also be thicker/scarred, increasing diffusion distance and slowing the rate further. As a result, not enough oxygen can be absorbed to meet even resting demand, so the person feels breathless.",
            markScheme: [
              "Cilia cannot sweep mucus up / mucus and pathogens accumulate",
              "Bacteria multiply / reach lungs → more infections",
              "Emphysema reduces surface area (alveolar walls destroyed/merged)",
              "States Fick's Law / rate ∝ surface area (÷ distance)",
              "Reduced surface area (and/or greater distance) → slower O₂ diffusion → breathless",
            ],
            commonError: "In (b) students state alveoli are destroyed but do not link reduced surface area to Fick's Law and the slower diffusion rate.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "challenge",
            hints: [
              "For (a): if cilia fail, what happens to the mucus and trapped pathogens?",
              "For (b): which Fick's Law variable does destroying alveolar walls reduce?",
              "Link smaller surface area to a slower rate of oxygen diffusion.",
              "Less O₂ absorbed even at rest → breathlessness.",
            ],
          },
        ],
      },
      {
        id: "bio-gas-respiration-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Ten structured questions on alveolar adaptations, gas exchange, and inspired versus expired air.",
        questions: [
          {
            id: "bio-gas-respiration-bq2-01",
            question: "State Fick's Law of diffusion as it applies to gas exchange. (2 marks)",
            marks: 2,
            modelAnswer: "Fick's Law: the rate of diffusion is proportional to (surface area × concentration difference) divided by the diffusion distance. In words, diffusion is faster when the surface area is larger, the concentration difference (gradient) is steeper, and the diffusion distance is shorter.",
            markScheme: [
              "Rate ∝ surface area × concentration difference",
              "Divided by / inversely proportional to diffusion distance",
            ],
            commonError: "Students often forget that diffusion distance is on the bottom (inversely related) — a SHORTER distance increases rate.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bq2-02",
            question: "List four structural adaptations of an alveolus for efficient gas exchange. (4 marks)",
            marks: 4,
            modelAnswer: "1. A very large total surface area (about 70 m² from 300–500 million alveoli). 2. Walls only one cell thick, giving a very short diffusion distance (~1–2 µm). 3. A moist lining so gases dissolve before diffusing. 4. A rich blood supply from surrounding capillaries that maintains a steep concentration gradient. (Good ventilation refreshing the air is also acceptable.)",
            markScheme: [
              "Large surface area (~70 m² / many alveoli)",
              "Thin walls / one cell thick / short diffusion distance",
              "Moist lining (gases dissolve)",
              "Rich blood supply / good ventilation (steep gradient)",
            ],
            commonError: "Students list 'thin' and 'short diffusion distance' as two separate points — they are the same adaptation and earn one mark.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bq2-03",
            question: "Explain how a steep concentration gradient is maintained across the alveolar surface, and why this is important for gas exchange. (4 marks)",
            marks: 4,
            modelAnswer: "On the blood side, the continuous flow of blood through the pulmonary capillaries constantly carries away oxygenated blood and brings in deoxygenated blood, keeping the oxygen concentration in the blood low and the carbon dioxide concentration high. On the air side, ventilation (breathing) continually refreshes the air in the alveoli, keeping the oxygen concentration high and carbon dioxide low. Together these keep a large difference in concentration between air and blood. This steep concentration gradient is important because, by Fick's Law, the rate of diffusion is proportional to the concentration difference, so a steep gradient maximises the rate of oxygen uptake and carbon dioxide removal.",
            markScheme: [
              "Blood flow removes oxygenated blood / brings deoxygenated blood",
              "Ventilation refreshes alveolar air (high O₂, low CO₂)",
              "Maintains a large concentration difference between air and blood",
              "Steeper gradient → faster diffusion (Fick's Law)",
            ],
            commonError: "Students mention blood flow but forget that ventilation on the air side is equally important for maintaining the gradient.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "core",
            hints: [
              "Think about both sides of the membrane: blood and air.",
              "What keeps blood O₂ low? What keeps alveolar O₂ high?",
              "Link the steep gradient back to Fick's Law.",
            ],
          },
          {
            id: "bio-gas-respiration-bq2-04",
            question: "The table shows the percentage composition of inspired and expired air.\n\nGas | Inspired (%) | Expired (%)\nOxygen | 21 | 16\nCarbon dioxide | 0.04 | 4\nNitrogen | 78 | 78\n\n(a) Calculate the percentage of oxygen that is removed from the inspired air (as a percentage of the inspired oxygen). Show your working. (2 marks)\n(b) Explain the change in carbon dioxide between inspired and expired air. (2 marks)\n(c) Explain why the nitrogen percentage does not change. (1 mark)",
            marks: 5,
            modelAnswer: "(a) Oxygen removed = 21 − 16 = 5 percentage points. As a percentage of the inspired oxygen: (5 ÷ 21) × 100 = 23.8% ≈ 24% (to 2 significant figures).\n\n(b) The carbon dioxide rises from 0.04% to 4% — about a hundredfold increase. This extra CO₂ is produced by aerobic respiration in the body's cells and is carried by the blood to the lungs, where it diffuses into the alveoli and is breathed out.\n\n(c) Nitrogen is physiologically inert — it is neither used nor produced by the body's metabolism — so the amount of nitrogen breathed out equals the amount breathed in, and its percentage is unchanged.",
            markScheme: [
              "Oxygen removed = 21 − 16 = 5",
              "(5 ÷ 21) × 100 = 23.8% ≈ 24%",
              "CO₂ increases (~0.04% to 4%) because produced by respiration in cells",
              "CO₂ carried by blood / diffuses into alveoli to be exhaled",
              "Nitrogen unchanged because it is inert / not used or made by the body",
            ],
            commonError: "In (a) students give 5% (the difference in percentage points) instead of expressing it as a fraction of the original 21%.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "First find the drop in oxygen: 21 − 16.",
              "Then express it as a fraction of the INSPIRED oxygen (21).",
              "(5 ÷ 21) × 100.",
              "For (b): where is CO₂ made in the body?",
            ],
            solutions: [
              {
                label: "Method: percentage of oxygen removed",
                steps: [
                  "Oxygen difference = 21% − 16% = 5 percentage points",
                  "Express as a fraction of inspired oxygen: 5 ÷ 21",
                  "Multiply by 100: (5 ÷ 21) × 100 = 23.8%",
                  "Round to 2 significant figures: ≈ 24%",
                ],
              },
            ],
          },
          {
            id: "bio-gas-respiration-bq2-05",
            question: "Describe a simple experiment, using limewater, to compare the carbon dioxide content of inspired and expired air. State the expected results and the conclusion. (5 marks)",
            marks: 5,
            modelAnswer: "Set up two boiling tubes (or flasks) each containing the same volume of limewater. Using a J-tube/two-way apparatus, breathe in through one tube and out through the other so that inspired (atmospheric) air bubbles through tube A and expired air bubbles through tube B, for the same length of time and at a similar flow rate. Expected result: the limewater in tube B (expired air) turns milky/cloudy much faster and more strongly than tube A, which stays almost clear. Conclusion: expired air contains much more carbon dioxide than inspired air, showing CO₂ is produced by respiration. (Controls: same volume and concentration of limewater, same time, same flow rate.)",
            markScheme: [
              "Two tubes of limewater, one for inspired and one for expired air",
              "Bubble air through for the same time / flow rate (fair test)",
              "Expired-air limewater turns milky/cloudy (faster/more)",
              "Inspired-air limewater stays clear or changes little",
              "Conclusion: expired air has more CO₂ (from respiration)",
            ],
            commonError: "Students forget the control (inspired-air tube) — without it the comparison is not valid.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "You need TWO tubes to compare inspired vs expired.",
              "What does limewater do when CO₂ is present?",
              "Keep volume, time and flow rate the same for fairness.",
              "State which tube changes and what that proves.",
            ],
          },
          {
            id: "bio-gas-respiration-bq2-06",
            question: "Write a balanced chemical equation, including state symbols, for the reaction between limewater and carbon dioxide, and explain what is observed. (3 marks)",
            marks: 3,
            modelAnswer: "Ca(OH)₂ (aq) + CO₂ (g) → CaCO₃ (s) + H₂O (l). Calcium hydroxide solution reacts with carbon dioxide to form calcium carbonate and water. Calcium carbonate is insoluble, so it forms a fine white precipitate that makes the limewater turn milky/cloudy.",
            markScheme: [
              "Correct equation: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O",
              "Correct state symbols: (aq), (g), (s), (l)",
              "Observation: milky/cloudy due to insoluble CaCO₃ precipitate",
            ],
            commonError: "State symbols are frequently omitted or wrong — calcium carbonate must be (s) because it is insoluble.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "Limewater is calcium hydroxide solution, Ca(OH)₂.",
              "It reacts with CO₂ to give a carbonate and water.",
              "Which product is insoluble (s) and causes the cloudiness?",
            ],
          },
          {
            id: "bio-gas-respiration-bq2-07",
            question: "Explain why a single cell such as an amoeba can rely on simple diffusion across its surface for gas exchange, whereas a large mammal needs specialised gas exchange organs (lungs). Use surface area to volume ratio in your answer. (4 marks)",
            marks: 4,
            modelAnswer: "A small organism such as an amoeba has a very large surface area to volume ratio, so its outer surface is large relative to the amount of cytoplasm that needs oxygen, and no part of it is far from the surface. Diffusion across the body surface is therefore fast enough to supply all its needs. As an organism gets larger, its volume increases faster than its surface area, so the surface area to volume ratio falls. The body surface becomes too small, and diffusion distances to inner cells too great, to supply oxygen by simple diffusion alone. A large mammal therefore needs specialised gas exchange organs (lungs) that provide a huge surface area, short diffusion distances and a transport system (blood) to carry gases to and from every cell.",
            markScheme: [
              "Small organism has large surface area to volume ratio",
              "Diffusion across surface is fast enough / distances short",
              "As size increases, volume rises faster than surface area → ratio falls",
              "Large organism needs lungs (large SA) + transport system to supply all cells",
            ],
            commonError: "Students state the SA:V ratio decreases with size but do not explain why this makes simple diffusion insufficient.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "challenge",
            hints: [
              "How does surface area to volume ratio change as size increases?",
              "Why is a high ratio good for diffusion?",
              "What two problems does a large organism face (surface area and distance)?",
              "How do lungs and blood solve these problems?",
            ],
            strategy: "Link the geometric idea (SA:V falls with size) to the biological need for exchange organs.",
          },
          {
            id: "bio-gas-respiration-bq2-08",
            question: "An alveolus has an effective surface area of 0.0002 mm² and a diffusion distance of 1.0 µm. A diseased alveolus has half the surface area and twice the diffusion distance. Using Fick's Law (assume the same concentration difference), calculate how many times slower the diffusion rate is in the diseased alveolus. Show your working. (3 marks)",
            marks: 3,
            modelAnswer: "Fick's Law: rate ∝ (surface area × concentration difference) ÷ diffusion distance. With the concentration difference constant, rate ∝ surface area ÷ diffusion distance.\n\nHealthy: rate ∝ A ÷ d.\nDiseased: surface area = A/2, diffusion distance = 2d, so rate ∝ (A/2) ÷ (2d) = A ÷ (4d).\n\nRatio of diseased to healthy rate = [A ÷ (4d)] ÷ [A ÷ d] = 1/4. The diseased alveolus has one quarter of the rate, i.e. diffusion is 4 times slower.",
            markScheme: [
              "States rate ∝ surface area ÷ diffusion distance (concentration constant)",
              "Combines halved area and doubled distance: (1/2) ÷ 2 = 1/4",
              "Concludes diffusion is 4 times slower (rate is one quarter)",
            ],
            commonError: "Students change only one variable (e.g. just the area) and get 2× instead of 4× — both effects multiply.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "challenge",
            hints: [
              "Write rate ∝ surface area ÷ distance.",
              "Halving the area multiplies the rate by 1/2.",
              "Doubling the distance multiplies the rate by 1/2 again.",
              "Combine: 1/2 × 1/2 = 1/4, so 4 times slower.",
            ],
            solutions: [
              {
                label: "Method: combine two proportional changes",
                steps: [
                  "Rate ∝ surface area ÷ diffusion distance (concentration difference constant)",
                  "Surface area changes by factor 1/2 → rate factor 1/2",
                  "Diffusion distance changes by factor 2 → rate factor 1/2 (since distance is on the bottom)",
                  "Overall factor = 1/2 × 1/2 = 1/4",
                  "Diseased rate is one quarter of healthy → 4 times slower",
                ],
              },
            ],
          },
          {
            id: "bio-gas-respiration-bq2-09",
            question: "Explain why the moist lining of the alveoli, although necessary for gas exchange, can also cause a problem (water loss), and state one way the body limits this. (3 marks)",
            marks: 3,
            modelAnswer: "Gases such as oxygen must dissolve in the thin film of moisture lining the alveoli before they can diffuse across the membrane into the blood, so a moist surface is essential. However, because the surface is moist, water continually evaporates from it into the alveolar air, and this water vapour is lost from the body when air is breathed out (expired air is saturated with water vapour). The body limits this loss partly because the alveoli are deep inside the body where the air is warm and largely saturated, reducing further evaporation, and the airways are not directly exposed to dry outside air; nasal passages also help warm and moisten incoming air, reducing the drying effect.",
            markScheme: [
              "Moist surface needed so gases dissolve before diffusing",
              "Water evaporates from the moist surface and is lost in expired air",
              "One valid limiting feature (alveoli deep inside / air already moist; nose moistens incoming air)",
            ],
            commonError: "Students explain why moisture is needed but do not address the water-loss trade-off the question asks for.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "challenge",
            hints: [
              "Why must the gas exchange surface be moist?",
              "What happens to water on a moist surface exposed to air?",
              "Recall that expired air is saturated with water vapour.",
              "How does the position of the alveoli (deep inside) help reduce loss?",
            ],
          },
          {
            id: "bio-gas-respiration-bq2-10",
            question: "Suggest and explain three features you would expect to find on ANY efficient gas exchange surface, whether in a human lung, a fish gill or a leaf. (3 marks)",
            marks: 3,
            modelAnswer: "Any efficient gas exchange surface should have: (1) a large surface area, so that many gas molecules can diffuse at once; (2) a thin surface / short diffusion distance, so gases cross quickly; and (3) a means of maintaining a steep concentration gradient (such as a good blood supply in lungs and gills, or rapid use/production of gases in a leaf), so diffusion continues at a fast rate. A moist surface is also commonly present so gases can dissolve. These features all follow from Fick's Law, which applies to any diffusion surface.",
            markScheme: [
              "Large surface area (more diffusion at once)",
              "Thin / short diffusion distance (fast crossing)",
              "Steep concentration gradient maintained (e.g. blood supply / ventilation / use of gas)",
            ],
            commonError: "Students give human-specific structures (e.g. 'alveoli') rather than the general PRINCIPLES that apply to all exchange surfaces.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "core",
            hints: [
              "Think about the three variables in Fick's Law.",
              "Each variable suggests one general feature.",
              "Keep your answer general — not specific to lungs only.",
            ],
          },
        ],
      },
      {
        id: "bio-gas-respiration-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Ten structured questions on aerobic respiration, its equations, sites, and energy uses.",
        questions: [
          {
            id: "bio-gas-respiration-bq3-01",
            question: "Define aerobic respiration and state where in the cell it mainly occurs. (2 marks)",
            marks: 2,
            modelAnswer: "Aerobic respiration is the chemical breakdown (complete oxidation) of glucose using oxygen to release energy. It occurs mainly in the mitochondria of the cell.",
            markScheme: [
              "Release of energy from glucose using oxygen / complete oxidation of glucose with oxygen",
              "Occurs in the mitochondria",
            ],
            commonError: "Students say respiration 'makes energy' — energy is released/transferred, not created.",
            guideRef: "Aerobic Respiration",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bq3-02",
            question: "Write the word equation and the balanced symbol equation for aerobic respiration. (3 marks)",
            marks: 3,
            modelAnswer: "Word equation: glucose + oxygen → carbon dioxide + water (+ energy released). Balanced symbol equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O.",
            markScheme: [
              "Word equation: glucose + oxygen → carbon dioxide + water",
              "Symbol equation reactants: C₆H₁₂O₆ + 6O₂",
              "Symbol equation products balanced: 6CO₂ + 6H₂O",
            ],
            commonError: "Students forget the coefficient 6 in front of O₂, CO₂ and H₂O, leaving the equation unbalanced.",
            guideRef: "Aerobic Respiration",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bq3-03",
            question: "Show, by counting atoms of each element, that the equation C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O is balanced. (3 marks)",
            marks: 3,
            modelAnswer: "Carbon: left = 6 (in glucose); right = 6 (in 6CO₂). Balanced. Hydrogen: left = 12 (in glucose); right = 12 (in 6H₂O, since 6 × 2 = 12). Balanced. Oxygen: left = 6 (in glucose) + 12 (in 6O₂) = 18; right = 12 (in 6CO₂, 6 × 2) + 6 (in 6H₂O, 6 × 1) = 18. Balanced. All three elements balance, so the equation is correct.",
            markScheme: [
              "Carbon: 6 left = 6 right",
              "Hydrogen: 12 left = 12 right",
              "Oxygen: 18 left (6 + 12) = 18 right (12 + 6)",
            ],
            commonError: "Students forget the 6 oxygen atoms already inside glucose when counting the left-hand side, getting 12 instead of 18.",
            guideRef: "Aerobic Respiration",
            difficulty: "core",
            hints: [
              "Count carbon atoms on each side first.",
              "Then hydrogen (remember each water has 2 H).",
              "For oxygen, include the 6 O in glucose AND the 12 in 6O₂.",
              "Right side oxygen: 6CO₂ gives 12, 6H₂O gives 6.",
            ],
            solutions: [
              {
                label: "Atom count by element",
                steps: [
                  "C: left 6 (glucose) = right 6 (6CO₂)",
                  "H: left 12 (glucose) = right 12 (6 × H₂O)",
                  "O left: 6 (glucose) + 12 (6O₂) = 18",
                  "O right: 12 (6CO₂) + 6 (6H₂O) = 18",
                  "All balance → equation is correct",
                ],
              },
            ],
          },
          {
            id: "bio-gas-respiration-bq3-04",
            question: "List four processes in living organisms that use the energy released by respiration, and for each state briefly why energy is needed. (4 marks)",
            marks: 4,
            modelAnswer: "1. Muscle contraction — energy is needed to make muscle fibres shorten for movement. 2. Active transport — energy is needed to move ions/molecules across membranes against a concentration gradient. 3. Protein synthesis (and other build-up reactions) — energy is needed to join amino acids/monomers together for growth and repair. 4. Cell division / growth — energy is needed to copy DNA and build new cell components; (also acceptable: maintaining a constant body temperature in mammals/birds, which needs heat energy).",
            markScheme: [
              "Muscle contraction / movement (energy to shorten fibres)",
              "Active transport (move substances against the gradient)",
              "Protein synthesis / building molecules (growth and repair)",
              "Cell division/growth OR maintaining body temperature (with reason)",
            ],
            commonError: "Students list processes but do not say WHY energy is needed, losing marks for the explanation.",
            guideRef: "Aerobic Respiration",
            difficulty: "core",
            hints: [
              "Think of movement, transport, building molecules, and growth.",
              "For each, add a short reason energy is required.",
              "Thermoregulation (keeping warm) is also valid for mammals/birds.",
            ],
          },
          {
            id: "bio-gas-respiration-bq3-05",
            question: "Explain, in terms of bonds and oxidation, why aerobic respiration of glucose releases far more energy than anaerobic respiration of the same amount of glucose. (4 marks)",
            marks: 4,
            modelAnswer: "In aerobic respiration, glucose is completely oxidised: all of its carbon–carbon and carbon–hydrogen bonds are broken and the carbon and hydrogen end up as fully oxidised carbon dioxide and water. This transfers the maximum amount of energy (about 2870 kJ per mole of glucose). In anaerobic respiration, glucose is only partially broken down: it becomes lactic acid (in muscle) or ethanol and carbon dioxide (in yeast), molecules that still contain many unbroken, energy-rich bonds. Because much of the chemical energy remains locked in these products, far less energy is released per glucose molecule than in aerobic respiration.",
            markScheme: [
              "Aerobic: glucose completely/fully oxidised to CO₂ and water",
              "All energy-rich C–H / C–C bonds broken → maximum energy released (~2870 kJ mol⁻¹)",
              "Anaerobic: glucose only partially broken down (lactic acid / ethanol)",
              "Products still contain unbroken energy-rich bonds → much less energy released",
            ],
            commonError: "Students just state 'aerobic releases more energy' without explaining the partial vs complete breakdown of glucose.",
            guideRef: "Aerobic Respiration",
            difficulty: "challenge",
            hints: [
              "How completely is glucose broken down in each pathway?",
              "What are the end products of each, and do they still hold energy?",
              "Link 'energy still in the products' to less energy released.",
            ],
          },
          {
            id: "bio-gas-respiration-bq3-06",
            question: "A culture of respiring cells consumes 480 cm³ of oxygen during aerobic respiration at RTP (molar gas volume = 24 000 cm³ mol⁻¹).\n\n(a) Calculate the number of moles of oxygen used. (1 mark)\n(b) Using the balanced equation, calculate the moles of glucose respired and the moles of carbon dioxide produced. (2 marks)\n(c) Calculate the volume of carbon dioxide produced at RTP. (1 mark)",
            marks: 4,
            modelAnswer: "(a) Moles of O₂ = volume ÷ molar volume = 480 ÷ 24 000 = 0.020 mol.\n\n(b) From C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O, glucose : O₂ = 1 : 6, so moles of glucose = 0.020 ÷ 6 = 0.0033 mol (3.3 × 10⁻³ mol). CO₂ : O₂ = 6 : 6 = 1 : 1, so moles of CO₂ = 0.020 mol.\n\n(c) Volume of CO₂ = moles × molar volume = 0.020 × 24 000 = 480 cm³.",
            markScheme: [
              "Moles O₂ = 480 ÷ 24 000 = 0.020 mol",
              "Moles glucose = 0.020 ÷ 6 = 0.0033 mol (3.3 × 10⁻³)",
              "Moles CO₂ = 0.020 mol (1:1 with O₂)",
              "Volume CO₂ = 0.020 × 24 000 = 480 cm³",
            ],
            commonError: "Students forget that CO₂ and O₂ are in a 1:1 ratio in aerobic respiration, so the CO₂ volume equals the O₂ volume.",
            guideRef: "Aerobic Respiration",
            difficulty: "challenge",
            hints: [
              "Moles = volume ÷ molar volume.",
              "Use the equation ratios: glucose:O₂ = 1:6; CO₂:O₂ = 1:1.",
              "Volume = moles × 24 000 cm³ mol⁻¹.",
              "Because CO₂:O₂ = 1:1, the CO₂ volume equals the O₂ volume.",
            ],
            solutions: [
              {
                label: "Method: moles and gas volumes",
                steps: [
                  "Moles O₂ = 480 cm³ ÷ 24 000 cm³ mol⁻¹ = 0.020 mol",
                  "Glucose:O₂ = 1:6 → moles glucose = 0.020 ÷ 6 = 0.0033 mol",
                  "CO₂:O₂ = 6:6 = 1:1 → moles CO₂ = 0.020 mol",
                  "Volume CO₂ = 0.020 mol × 24 000 cm³ mol⁻¹ = 480 cm³",
                ],
              },
            ],
          },
          {
            id: "bio-gas-respiration-bq3-07",
            question: "Aerobic respiration releases approximately 2870 kJ per mole of glucose. A person respires 0.50 mol of glucose aerobically in one hour. Calculate the energy released, and suggest two reasons why not all of this energy is available for useful work. (3 marks)",
            marks: 3,
            modelAnswer: "Energy released = 2870 kJ mol⁻¹ × 0.50 mol = 1435 kJ (≈ 1400 kJ to 2 significant figures). Not all of this is available for useful work because a large proportion is always transferred as heat energy (which warms the body but is not 'work'), and the process of transferring energy into a usable form (ATP) is not 100% efficient, so some energy is lost at each step.",
            markScheme: [
              "Energy = 2870 × 0.50 = 1435 kJ (≈ 1400 kJ)",
              "Some energy is lost/transferred as heat",
              "Energy transfer (e.g. to ATP) is not 100% efficient",
            ],
            commonError: "Students calculate the energy but cannot give valid reasons for inefficiency (heat loss; imperfect energy transfer).",
            guideRef: "Aerobic Respiration",
            difficulty: "core",
            hints: [
              "Energy = energy per mole × number of moles.",
              "2870 × 0.50 = ?",
              "Where does some of the released energy always go (think temperature)?",
              "Is any energy transfer perfectly efficient?",
            ],
            solutions: [
              {
                label: "Method: total energy released",
                steps: [
                  "Energy = energy per mole × moles of glucose",
                  "Energy = 2870 kJ mol⁻¹ × 0.50 mol",
                  "Energy = 1435 kJ ≈ 1400 kJ (2 s.f.)",
                ],
              },
            ],
          },
          {
            id: "bio-gas-respiration-bq3-08",
            question: "Explain why cells that are very active (for example, muscle cells or the cells lining the small intestine that carry out active transport) tend to contain large numbers of mitochondria. (3 marks)",
            marks: 3,
            modelAnswer: "Very active cells need a lot of energy: muscle cells need energy for repeated contraction, and the cells lining the small intestine need energy for active transport of digested food molecules against a concentration gradient. Aerobic respiration, which releases this energy, takes place in the mitochondria. Having a large number of mitochondria means more aerobic respiration can occur at once, so more energy can be released quickly to meet the high demand of these cells.",
            markScheme: [
              "These cells have a high energy demand (named reason, e.g. contraction / active transport)",
              "Aerobic respiration (energy release) occurs in mitochondria",
              "More mitochondria → more respiration → more energy released to meet demand",
            ],
            commonError: "Students state 'mitochondria make energy' rather than 'release energy by aerobic respiration'.",
            guideRef: "Aerobic Respiration",
            difficulty: "core",
            hints: [
              "Why do muscle or absorbing cells need lots of energy?",
              "Where is energy released by aerobic respiration?",
              "Link the number of mitochondria to the amount of energy released.",
            ],
          },
          {
            id: "bio-gas-respiration-bq3-09",
            question: "A small mammal and a similar-sized reptile are kept at 5°C. The mammal consumes far more oxygen per hour than the reptile. Explain this difference in terms of respiration and temperature regulation. (4 marks)",
            marks: 4,
            modelAnswer: "Mammals are endothermic (warm-blooded): they maintain a constant, high body temperature regardless of the surroundings. At 5°C, the mammal loses heat rapidly to the cold surroundings, so it must replace this heat by increasing its rate of aerobic respiration, which releases energy (including heat). Faster aerobic respiration requires more oxygen, so the mammal's oxygen consumption is high. The reptile is ectothermic (cold-blooded): it does not use respiration to keep itself warm, so at 5°C its body temperature and metabolic rate fall. Its rate of respiration is therefore low and it consumes far less oxygen.",
            markScheme: [
              "Mammal is endothermic / keeps constant body temperature",
              "Loses heat to cold surroundings, so respires faster to release heat",
              "Faster aerobic respiration needs more oxygen",
              "Reptile is ectothermic; metabolic/respiration rate falls in the cold → less oxygen used",
            ],
            commonError: "Students know mammals are warm-blooded but do not link maintaining temperature to a higher rate of respiration and oxygen use.",
            guideRef: "Aerobic Respiration",
            difficulty: "challenge",
            hints: [
              "How do mammals and reptiles differ in controlling body temperature?",
              "What must a mammal do in the cold to stay warm?",
              "How does respiration rate relate to oxygen demand?",
              "What happens to a reptile's metabolism when it is cold?",
            ],
            strategy: "Compare the two animals point by point: temperature strategy → respiration rate → oxygen use.",
          },
          {
            id: "bio-gas-respiration-bq3-10",
            question: "Photosynthesis and aerobic respiration are sometimes described as 'opposite' reactions. (a) Write both word equations to show this. (2 marks) (b) Explain one important way in which the two processes are NOT simply the exact reverse of each other. (2 marks)",
            marks: 4,
            modelAnswer: "(a) Photosynthesis: carbon dioxide + water → glucose + oxygen (using light energy). Aerobic respiration: glucose + oxygen → carbon dioxide + water (releasing energy). The reactants of one are the products of the other.\n\n(b) They are not simply the exact reverse because they involve energy in opposite ways and by different mechanisms: photosynthesis absorbs/stores light energy (it is endothermic, requiring chlorophyll and light), whereas respiration releases chemical energy (it is exothermic). They also occur in different organelles (chloroplasts vs mitochondria) and proceed through entirely different series of enzyme-controlled steps, not a single reversed reaction. (Also acceptable: photosynthesis happens only in light, respiration happens continuously.)",
            markScheme: [
              "Photosynthesis: CO₂ + water → glucose + oxygen (light)",
              "Respiration: glucose + oxygen → CO₂ + water (energy released)",
              "Energy difference: photosynthesis stores/absorbs energy; respiration releases it",
              "Different organelles / different enzyme steps / not a single reversed reaction",
            ],
            commonError: "Students treat the two as a perfect reverse and miss that they use different pathways, organelles and energy directions.",
            guideRef: "Aerobic Respiration",
            difficulty: "core",
            hints: [
              "Write each word equation and notice the reactants/products swap.",
              "Think about energy: which process stores it, which releases it?",
              "Do they occur in the same organelle and by the same steps?",
            ],
          },
        ],
      },
      {
        id: "bio-gas-respiration-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Ten structured questions on anaerobic respiration, fermentation, oxygen debt, and exercise physiology.",
        questions: [
          {
            id: "bio-gas-respiration-bq4-01",
            question: "State the word equation for anaerobic respiration (a) in human muscle cells and (b) in yeast. (2 marks)",
            marks: 2,
            modelAnswer: "(a) In human muscle cells: glucose → lactic acid (+ a small amount of energy). (b) In yeast: glucose → ethanol + carbon dioxide (+ a small amount of energy).",
            markScheme: [
              "Human: glucose → lactic acid",
              "Yeast: glucose → ethanol + carbon dioxide",
            ],
            commonError: "Students swap the products — lactic acid is the human product; ethanol + CO₂ is the yeast product.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bq4-02",
            question: "Write the balanced symbol equation for fermentation in yeast and identify two commercial uses of this reaction. (3 marks)",
            marks: 3,
            modelAnswer: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Two commercial uses: (1) brewing of alcoholic drinks such as beer and wine, where the ethanol produced is the desired product; (2) baking, where the carbon dioxide produced makes bread dough rise (the ethanol evaporates during baking). (Production of bioethanol fuel is also acceptable.)",
            markScheme: [
              "Balanced equation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",
              "Use 1: brewing (ethanol is the product)",
              "Use 2: baking (CO₂ makes dough rise) OR biofuel production",
            ],
            commonError: "Students write only 1 ethanol and 1 CO₂ — the balanced equation has 2 of each per glucose.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bq4-03",
            question: "Explain what is meant by 'oxygen debt' and describe how the body repays it after vigorous exercise. (4 marks)",
            marks: 4,
            modelAnswer: "During vigorous exercise, the muscles cannot get enough oxygen, so they respire anaerobically, producing lactic acid. The oxygen debt is the extra amount of oxygen that the body must take in after exercise to deal with this lactic acid. After exercise, the person continues to breathe deeply and rapidly (and the heart keeps beating fast) so that extra oxygen is delivered to the tissues and the liver. This oxygen is used to oxidise the lactic acid (breaking it down to carbon dioxide and water) or to convert it back into glucose in the liver. Once the lactic acid is removed and the debt repaid, breathing and heart rate return to normal.",
            markScheme: [
              "Oxygen debt = extra oxygen needed after exercise (to deal with lactic acid)",
              "Lactic acid was made by anaerobic respiration during exercise",
              "After exercise breathing/heart rate stay high to supply extra O₂",
              "Oxygen used to oxidise lactic acid (to CO₂ + water) / convert it back to glucose in the liver",
            ],
            commonError: "Students define oxygen debt as the oxygen used DURING exercise — it is the EXTRA oxygen consumed AFTER exercise.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "core",
            hints: [
              "What pathway during exercise produced lactic acid?",
              "Oxygen debt is the EXTRA oxygen needed afterwards.",
              "What does that oxygen do to the lactic acid?",
              "Where is some lactic acid converted back to glucose?",
            ],
          },
          {
            id: "bio-gas-respiration-bq4-04",
            question: "Compare aerobic and anaerobic respiration in humans by stating, for each, whether oxygen is needed, the products formed, the relative energy yield, and the site in the cell. (4 marks)",
            marks: 4,
            modelAnswer: "Aerobic respiration requires oxygen; its products are carbon dioxide and water; it has a high energy yield; and it occurs mainly in the mitochondria. Anaerobic respiration in humans does not require oxygen; its product is lactic acid; it has a low energy yield; and it occurs in the cytoplasm. Aerobic respiration therefore releases much more energy per molecule of glucose than anaerobic respiration.",
            markScheme: [
              "Oxygen: aerobic yes / anaerobic no",
              "Products: aerobic CO₂ + water / anaerobic lactic acid",
              "Energy yield: aerobic high / anaerobic low",
              "Site: aerobic mitochondria / anaerobic cytoplasm",
            ],
            commonError: "Students give the yeast product (ethanol) for human anaerobic respiration — in humans the product is lactic acid.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "core",
            hints: [
              "Make four comparison points: oxygen, products, energy, site.",
              "Give the answer for both pathways in each point.",
              "Human anaerobic product = lactic acid (not ethanol).",
            ],
            strategy: "Answer comparison questions point by point so every mark is clearly shown.",
          },
          {
            id: "bio-gas-respiration-bq4-05",
            question: "During a 100 m sprint, an athlete's leg muscles switch to anaerobic respiration even though the athlete is breathing hard. Explain why anaerobic respiration occurs, and why the muscles begin to ache. (4 marks)",
            marks: 4,
            modelAnswer: "During a sprint, the leg muscles are working extremely hard and demand energy (and therefore oxygen) faster than the breathing and circulatory systems can deliver oxygen to them. Because oxygen supply cannot keep up with demand, the muscles supplement aerobic respiration with anaerobic respiration, breaking down glucose to lactic acid without oxygen to release energy quickly. The lactic acid produced builds up in the muscle tissue; this accumulation lowers the pH and is associated with the burning, aching sensation and muscle fatigue felt during and just after the sprint.",
            markScheme: [
              "Energy/oxygen demand exceeds the rate oxygen can be supplied",
              "Muscles respire anaerobically to release energy quickly without oxygen",
              "Lactic acid is produced and accumulates in the muscle",
              "Lactic acid build-up causes fatigue / aching / burning sensation",
            ],
            commonError: "Students say breathing hard means there is plenty of oxygen — the key point is that oxygen DELIVERY still cannot match the very high demand.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "core",
            hints: [
              "Why might oxygen supply not match demand even when breathing hard?",
              "What pathway lets muscles release energy fast without oxygen?",
              "What product builds up, and what does it cause?",
            ],
          },
          {
            id: "bio-gas-respiration-bq4-06",
            question: "A student investigates yeast fermentation by measuring the volume of CO₂ produced at different temperatures, keeping glucose concentration constant. The results are:\n\n20°C: 12 cm³ in 5 min\n30°C: 30 cm³ in 5 min\n40°C: 40 cm³ in 5 min\n50°C: 8 cm³ in 5 min\n60°C: 0 cm³ in 5 min\n\n(a) Calculate the rate of CO₂ production at 30°C in cm³ min⁻¹. (1 mark)\n(b) Describe and explain the trend in the results as temperature increases from 20°C to 60°C. (4 marks)\n(c) Suggest the approximate optimum temperature for this yeast and justify your answer. (2 marks)",
            marks: 7,
            modelAnswer: "(a) Rate at 30°C = 30 cm³ ÷ 5 min = 6 cm³ min⁻¹.\n\n(b) From 20°C to 40°C the volume of CO₂ produced increases (12 → 30 → 40 cm³). This is because increasing temperature gives the molecules more kinetic energy, so there are more frequent, successful collisions between the respiration enzymes and glucose, increasing the rate. Above about 40°C the rate falls sharply (40 → 8 → 0 cm³). This is because the high temperature denatures the yeast enzymes: their active sites change shape and can no longer bind glucose, so by 60°C respiration has stopped completely.\n\n(c) The optimum is approximately 40°C, because this temperature produced the greatest volume of CO₂ (40 cm³ in 5 min), i.e. the fastest rate of fermentation; above it the rate falls because of enzyme denaturation.",
            markScheme: [
              "Rate at 30°C = 30 ÷ 5 = 6 cm³ min⁻¹",
              "20–40°C: rate/volume increases with temperature",
              "Explanation: more kinetic energy / more frequent successful enzyme–substrate collisions",
              "Above 40°C: rate falls / enzymes denature (active site changes shape)",
              "Optimum ≈ 40°C, justified by the highest CO₂ volume / fastest rate",
            ],
            commonError: "Students say enzymes are 'killed' at high temperature — use 'denatured' and explain the active site changes shape.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "challenge",
            hints: [
              "Rate = volume ÷ time.",
              "Describe what happens to the CO₂ volume as temperature rises, then explain it.",
              "Two phases: faster up to a point, then a sharp fall.",
              "The optimum is the temperature giving the largest volume.",
            ],
            solutions: [
              {
                label: "Method: rate at 30°C",
                steps: [
                  "Rate = volume of gas ÷ time",
                  "Rate = 30 cm³ ÷ 5 min",
                  "Rate = 6 cm³ min⁻¹",
                ],
              },
            ],
          },
          {
            id: "bio-gas-respiration-bq4-07",
            question: "Yeast can respire both aerobically and anaerobically. (a) State the products when yeast respires aerobically. (1 mark) (b) Compare the amount of carbon dioxide and energy produced per glucose molecule when yeast respires aerobically versus anaerobically. (3 marks)",
            marks: 4,
            modelAnswer: "(a) When yeast respires aerobically, the products are carbon dioxide and water (using oxygen), the same as in any aerobic respiration.\n\n(b) Per glucose molecule, aerobic respiration produces 6 molecules of carbon dioxide (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O), whereas anaerobic fermentation produces only 2 molecules of carbon dioxide (C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂). Aerobic respiration also releases far more energy per glucose, because glucose is completely oxidised, while in fermentation much of the energy remains locked in the ethanol that is also produced.",
            markScheme: [
              "Aerobic products: carbon dioxide and water",
              "Aerobic: 6 CO₂ per glucose; anaerobic: 2 CO₂ per glucose",
              "Aerobic releases far more energy than anaerobic per glucose",
              "Because aerobic fully oxidises glucose / fermentation leaves energy in ethanol",
            ],
            commonError: "Students assume anaerobic respiration produces no CO₂ — yeast fermentation does produce CO₂ (2 per glucose), just less than aerobic.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "core",
            hints: [
              "Aerobic respiration in yeast gives the usual CO₂ + water.",
              "Compare the CO₂ coefficients: 6 vs 2 per glucose.",
              "Which pathway leaves energy locked in its products?",
            ],
          },
          {
            id: "bio-gas-respiration-bq4-08",
            question: "A 60 kg athlete builds up 0.40 mol of lactic acid during a race. To remove it during recovery, the lactic acid is oxidised, and 1 mol of lactic acid (C₃H₆O₃) requires 3 mol of oxygen. (a) Calculate the moles of oxygen needed to remove all the lactic acid. (1 mark) (b) Calculate the volume of this oxygen at RTP (molar gas volume = 24 dm³ mol⁻¹). (1 mark) (c) Suggest why the athlete continues to breathe deeply for some minutes after the race. (2 marks)",
            marks: 4,
            modelAnswer: "(a) Moles of O₂ = 0.40 mol lactic acid × 3 mol O₂ per mol = 1.2 mol O₂.\n\n(b) Volume of O₂ = moles × molar gas volume = 1.2 × 24 = 28.8 dm³.\n\n(c) The athlete must take in this extra oxygen (the oxygen debt) to oxidise the lactic acid that accumulated during anaerobic respiration. Because a large extra volume of oxygen is needed, the athlete continues to breathe deeply and rapidly for several minutes until the lactic acid has been removed and the oxygen debt repaid.",
            markScheme: [
              "Moles O₂ = 0.40 × 3 = 1.2 mol",
              "Volume O₂ = 1.2 × 24 = 28.8 dm³",
              "Extra oxygen (oxygen debt) needed to oxidise/remove lactic acid",
              "Deep breathing continues until lactic acid removed / debt repaid",
            ],
            commonError: "Students forget the 1:3 ratio and multiply by the wrong factor, or forget to convert moles to volume using 24 dm³ mol⁻¹.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "challenge",
            hints: [
              "Use the ratio: 1 mol lactic acid needs 3 mol O₂.",
              "Moles O₂ = 0.40 × 3.",
              "Volume = moles × 24 dm³ mol⁻¹.",
              "Link the large oxygen requirement to continued deep breathing (oxygen debt).",
            ],
            solutions: [
              {
                label: "Method: oxygen needed to remove lactic acid",
                steps: [
                  "Moles O₂ = moles lactic acid × 3 = 0.40 × 3 = 1.2 mol",
                  "Volume O₂ = moles × molar gas volume = 1.2 × 24 dm³ mol⁻¹",
                  "Volume O₂ = 28.8 dm³",
                ],
              },
            ],
          },
          {
            id: "bio-gas-respiration-bq4-09",
            question: "Explain why, during the first few minutes of moderate exercise, breathing rate increases, and why it stays elevated for a time after the exercise stops. Refer to carbon dioxide and chemoreceptors in your answer. (4 marks)",
            marks: 4,
            modelAnswer: "During exercise the muscles respire faster and produce more carbon dioxide. This CO₂ dissolves in the blood, lowering its pH (making it more acidic). Chemoreceptors (in the brain and in the walls of major arteries) detect this rise in CO₂ / fall in pH and send nerve impulses to the breathing muscles, increasing the rate and depth of breathing. This removes the excess CO₂ and supplies more oxygen. After exercise stops, the blood CO₂ (and any lactic acid produced) remains higher than normal for a time, so the chemoreceptors continue to detect the raised acidity and keep breathing elevated until the CO₂ is removed and the blood pH returns to normal.",
            markScheme: [
              "Muscles produce more CO₂ during exercise",
              "CO₂ dissolves in blood, lowering pH / raising acidity",
              "Chemoreceptors detect the rise in CO₂ / fall in pH → increase breathing rate and depth",
              "After exercise CO₂/acidity still raised, so breathing stays high until pH restored",
            ],
            commonError: "Students attribute the increase only to 'needing more oxygen' — the primary detected signal is rising CO₂ / falling pH.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "What gas builds up when muscles respire faster?",
              "How does dissolved CO₂ change blood pH?",
              "What detects this change and what response does it trigger?",
              "Why does breathing stay high after exercise stops?",
            ],
          },
          {
            id: "bio-gas-respiration-bq4-10",
            question: "Bioethanol made by fermenting plant sugars is promoted as a more sustainable fuel than petrol. Evaluate the claim that bioethanol is 'carbon neutral'. (4 marks)",
            marks: 4,
            modelAnswer: "In favour of the claim: bioethanol is made by fermenting sugars from plants, and those plants absorbed carbon dioxide from the atmosphere by photosynthesis as they grew. When the bioethanol is burned, it releases carbon dioxide that was only recently removed from the air, so in principle the CO₂ released balances the CO₂ absorbed, giving no net increase in atmospheric CO₂ ('carbon neutral'). Against the claim: in practice extra carbon dioxide is released that is not balanced — for example by the fossil fuels used to make fertilisers, run farm machinery, transport the crops and distil the ethanol. In addition, if forests or grassland are cleared to grow the fuel crops, the carbon stored in that vegetation and soil is released, creating a carbon debt. Conclusion: bioethanol is closer to carbon neutral than petrol, but a full life-cycle assessment shows it is not truly carbon neutral, so the claim is an oversimplification.",
            markScheme: [
              "For: plants absorb CO₂ by photosynthesis as they grow",
              "For: CO₂ released on burning was recently taken from the air → balances out in principle",
              "Against: CO₂ from farming / transport / processing (fossil fuels) not balanced",
              "Against: clearing land/forests releases stored carbon (with balanced conclusion)",
            ],
            commonError: "Students argue only one side; an 'evaluate' question needs points FOR and AGAINST plus a conclusion.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "challenge",
            hints: [
              "Why might bioethanol be considered carbon neutral (think photosynthesis)?",
              "What CO₂ is released that the growing crop did not absorb?",
              "Consider land clearance releasing stored carbon.",
              "Finish with a balanced conclusion.",
            ],
            strategy: "For 'evaluate', give the case for, the case against, then a justified conclusion.",
          },
        ],
      },
    ],
  },
};
