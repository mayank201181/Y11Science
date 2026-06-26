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
        description: "The breathing system, ventilation mechanism, and airway protection.",
        questions: [
          {
            id: "bio-gas-respiration-bm1-01",
            question: "Which structure carries air directly into each lung from the trachea?",
            options: ["A bronchiole", "A bronchus", "An alveolus", "The diaphragm"],
            answerIndex: 1,
            explanation: "The trachea divides into two bronchi (singular: bronchus), one entering each lung. Each bronchus then divides into many smaller bronchioles, which end in alveoli. The diaphragm is a sheet of muscle, not an airway.",
            guideRef: "The Human Breathing System",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm1-02",
            question: "What is the function of the cilia on ciliated epithelial cells in the trachea?",
            options: [
              "To secrete mucus onto the airway surface",
              "To absorb oxygen directly from the air",
              "To beat and sweep mucus upward toward the throat",
              "To produce cartilage rings that hold the airway open",
            ],
            answerIndex: 2,
            explanation: "Cilia beat rhythmically to move mucus (and trapped particles) up toward the throat to be swallowed — the mucociliary escalator. Mucus is made by goblet cells, not cilia. Gas exchange happens in alveoli, not the trachea. Cartilage is not produced by cilia.",
            guideRef: "The Human Breathing System",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm1-03",
            question: "During inspiration, which combination of muscle actions occurs?",
            options: [
              "Diaphragm relaxes and external intercostals relax",
              "Diaphragm contracts and external intercostals contract",
              "Diaphragm contracts and external intercostals relax",
              "Diaphragm relaxes and external intercostals contract",
            ],
            answerIndex: 1,
            explanation: "Inspiration requires the diaphragm to contract (flatten) and the external intercostal muscles to contract (raising the ribs up and out). Both actions increase thoracic volume, lowering pressure so air flows in. Relaxation of both produces expiration.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "Inspiration increases the volume of the thoracic cavity.",
              "Which muscle flattens to make the cavity taller?",
              "Which muscles raise the ribs up and out?",
              "Both muscle groups must contract together for inspiration.",
            ],
          },
          {
            id: "bio-gas-respiration-bm1-04",
            question: "Why does air flow into the lungs during inspiration?",
            options: [
              "The lungs actively pull air in using their own muscles",
              "Pressure inside the thorax falls below atmospheric pressure",
              "Pressure inside the thorax rises above atmospheric pressure",
              "Oxygen is attracted into the alveoli by the blood",
            ],
            answerIndex: 1,
            explanation: "Increasing thoracic volume lowers the internal pressure below atmospheric. Air then moves down the pressure gradient (high to low) into the lungs. The lungs have no muscle of their own. Pressure rising above atmospheric would push air out (expiration). Blood does not 'attract' air across the alveolar wall.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "Gases always move from high pressure to low pressure.",
              "What happens to pressure when volume increases (Boyle's Law)?",
              "For air to enter, the inside must be at lower pressure than outside.",
            ],
          },
          {
            id: "bio-gas-respiration-bm1-05",
            question: "What is the role of the C-shaped cartilage rings in the trachea?",
            options: [
              "To trap dust and bacteria entering the lungs",
              "To keep the trachea open and prevent it from collapsing",
              "To increase the surface area for gas exchange",
              "To warm the air before it reaches the alveoli",
            ],
            answerIndex: 1,
            explanation: "Cartilage rings are rigid supports that hold the trachea open even when pressure inside drops during inspiration. Dust is trapped by mucus from goblet cells. Gas exchange happens in alveoli, not the trachea.",
            guideRef: "The Human Breathing System",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm1-06",
            question: "During forced expiration (e.g. blowing out hard), which muscles contract to push the ribs down rapidly?",
            options: [
              "External intercostal muscles",
              "Internal intercostal muscles",
              "The diaphragm only",
              "The abdominal muscles only",
            ],
            answerIndex: 1,
            explanation: "Forced expiration uses the internal intercostal muscles, which pull the ribs down and in more rapidly than passive recoil. The external intercostals are used in inspiration. At rest, expiration is largely passive (muscles relax).",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "At rest, expiration is passive — muscles relax.",
              "Forced expiration needs active muscle contraction to pull ribs down.",
              "External intercostals raise the ribs; internal intercostals lower them.",
            ],
          },
          {
            id: "bio-gas-respiration-bm1-07",
            question: "A student claims 'the lungs expand by themselves to draw in air.' Why is this incorrect?",
            options: [
              "The lungs contain no muscle and are moved passively by the thoracic cavity",
              "The lungs contract during inspiration, not expand",
              "Air enters by diffusion, not by lung movement",
              "The lungs only expand during expiration",
            ],
            answerIndex: 0,
            explanation: "The lungs have no muscle of their own. They are moved passively: the diaphragm and intercostal muscles change the volume of the thoracic cavity, and the elastic lungs follow this change. Air enters by bulk flow (down a pressure gradient), not diffusion.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "Which muscles actually change the thoracic volume?",
              "Do the lungs themselves contain muscle tissue?",
              "The lungs are elastic and follow the movement of the cavity around them.",
            ],
          },
          {
            id: "bio-gas-respiration-bm1-08",
            question: "Which sequence correctly describes the path of air during inspiration?",
            options: [
              "Nose → bronchi → trachea → bronchioles → alveoli",
              "Nose → trachea → bronchioles → bronchi → alveoli",
              "Nose → trachea → bronchi → bronchioles → alveoli",
              "Nose → alveoli → bronchioles → bronchi → trachea",
            ],
            answerIndex: 2,
            explanation: "Air passes: nose/mouth → trachea → bronchi (one per lung) → bronchioles (smaller branches) → alveoli (gas exchange). Option A swaps bronchi and trachea; option B swaps bronchi and bronchioles; option D is the reverse (exhaled) order.",
            guideRef: "The Human Breathing System",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm1-09",
            question: "A person with damaged cilia (e.g. from long-term smoking) is more prone to chest infections. The BEST explanation is:",
            options: [
              "Less oxygen can diffuse across the alveoli",
              "Mucus and trapped pathogens are not swept out of the airways",
              "The diaphragm can no longer contract properly",
              "Cartilage rings collapse without working cilia",
            ],
            answerIndex: 1,
            explanation: "Cilia normally sweep mucus (with trapped bacteria and particles) up and out of the airways. If cilia are damaged, mucus accumulates and pathogens are not removed, so they multiply and reach the lungs, causing infection. Cilia do not affect O₂ diffusion, the diaphragm, or cartilage.",
            guideRef: "The Human Breathing System",
            difficulty: "challenge",
            hints: [
              "What job do cilia normally do with the mucus layer?",
              "If mucus is not moved, what happens to the pathogens trapped in it?",
              "Trace the consequence: stuck mucus → pathogens stay → multiply → reach lungs.",
              "The link is removal of pathogens, not gas exchange or muscle action.",
            ],
          },
          {
            id: "bio-gas-respiration-bm1-10",
            question: "At the very end of a deep breath in (full inhalation), the diaphragm is best described as:",
            options: [
              "Relaxed and domed upward",
              "Contracted and flattened downward",
              "Relaxed and flattened downward",
              "Contracted and domed upward",
            ],
            answerIndex: 1,
            explanation: "At the end of inspiration the diaphragm is still contracted — it has flattened and moved downward to maximise thoracic volume. It only relaxes (and domes upward) when expiration begins. A muscle that is contracted and domed upward is contradictory.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "challenge",
            hints: [
              "Full inhalation = the end of inspiration.",
              "During inspiration the diaphragm contracts — what shape does contraction give it?",
              "A contracted diaphragm is flat, not domed.",
              "It only domes upward again when it relaxes for expiration.",
            ],
          },
        ],
      },
      {
        id: "bio-gas-respiration-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Alveolar adaptations, gas exchange, and inspired vs expired air.",
        questions: [
          {
            id: "bio-gas-respiration-bm2-01",
            question: "Where in the lungs does gas exchange between air and blood take place?",
            options: ["In the trachea", "In the bronchi", "In the alveoli", "In the pleural membranes"],
            answerIndex: 2,
            explanation: "Gas exchange occurs across the thin walls of the alveoli, where oxygen diffuses into the blood and carbon dioxide diffuses out. The trachea, bronchi and pleural membranes are not gas exchange surfaces.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm2-02",
            question: "Approximately what is the total surface area of the alveoli in human lungs?",
            options: ["About 0.7 m²", "About 7 m²", "About 70 m²", "About 700 m²"],
            answerIndex: 2,
            explanation: "The roughly 300–500 million alveoli give a total surface area of about 70 m² — comparable to a tennis court. This large surface area greatly increases the rate of diffusion (Fick's Law).",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm2-03",
            question: "Which gas INCREASES in concentration between inspired and expired air?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
            answerIndex: 2,
            explanation: "Carbon dioxide rises from about 0.04% (inspired) to about 4% (expired) because it is released from the blood. Oxygen falls (21% → 16%). Nitrogen is unchanged (~78%) and is inert. Argon is a trace gas, not significantly changed.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm2-04",
            question: "The alveolar wall and the capillary wall are each only one cell thick. Using Fick's Law, this adaptation mainly increases the rate of diffusion by:",
            options: [
              "Increasing the surface area available",
              "Reducing the diffusion distance",
              "Increasing the concentration gradient",
              "Increasing the temperature of the gases",
            ],
            answerIndex: 1,
            explanation: "Fick's Law: rate ∝ (surface area × concentration difference) / diffusion distance. A wall one cell thick gives a very short diffusion distance (~1–2 µm), so dividing by a small distance gives a faster rate. Thin walls do not change surface area, gradient or temperature.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "core",
            hints: [
              "Write down the three variables in Fick's Law.",
              "Wall thickness corresponds to which variable?",
              "A thinner wall means a shorter path for the gas to cross.",
            ],
          },
          {
            id: "bio-gas-respiration-bm2-05",
            question: "Why does a continuous flow of blood through the alveolar capillaries speed up gas exchange?",
            options: [
              "It warms the alveoli so gases move faster",
              "It maintains a steep concentration gradient for oxygen and carbon dioxide",
              "It increases the surface area of the alveoli",
              "It thickens the alveolar wall for protection",
            ],
            answerIndex: 1,
            explanation: "Flowing blood carries away oxygenated blood and brings in deoxygenated blood, keeping blood O₂ low and CO₂ high. This maintains steep concentration gradients (high O₂ in alveolus → low O₂ in blood), maximising the concentration-difference term in Fick's Law.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "core",
            hints: [
              "What does diffusion depend on, according to Fick's Law?",
              "If blood did not move, what would happen to the O₂ level next to the alveolus?",
              "Continuous flow keeps the difference in concentration large.",
            ],
          },
          {
            id: "bio-gas-respiration-bm2-06",
            question: "Compared with inspired air, expired air is:",
            options: [
              "Cooler and drier",
              "Warmer and more saturated with water vapour",
              "Warmer but drier",
              "Cooler but more saturated with water vapour",
            ],
            answerIndex: 1,
            explanation: "Expired air leaves the body at around body temperature (~37°C), so it is warmer than typical inspired air, and it has picked up water vapour from the moist lung lining, so it is saturated (more humid). It is therefore warmer AND wetter.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "Where has the expired air just been — at what temperature?",
              "The lung lining is moist — what does the air pick up?",
              "Think about misting up a cold mirror when you breathe on it.",
            ],
          },
          {
            id: "bio-gas-respiration-bm2-07",
            question: "Why does the nitrogen percentage stay almost the same (~78%) in inspired and expired air?",
            options: [
              "Nitrogen is converted to oxygen in the lungs",
              "Nitrogen is not used or produced by respiration",
              "Nitrogen dissolves completely in the blood",
              "Nitrogen is absorbed by the alveoli and replaced",
            ],
            answerIndex: 1,
            explanation: "Nitrogen is physiologically inert — the body does not use it in respiration or produce it, so its percentage is essentially unchanged. (The percentage may appear to shift very slightly only because O₂ and CO₂ amounts change.)",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "Which gases are actually involved in respiration?",
              "Is nitrogen a reactant or product of respiration?",
              "If a gas is neither used nor made, its amount stays the same.",
            ],
          },
          {
            id: "bio-gas-respiration-bm2-08",
            question: "Hydrogencarbonate indicator is orange-red in equilibrium with atmospheric air. After a respiring organism is sealed in a tube with the indicator for 30 minutes, the colour most likely changes to:",
            options: [
              "Purple (more alkaline)",
              "Yellow (more acidic)",
              "Colourless",
              "Bright green (no change in pH)",
            ],
            answerIndex: 1,
            explanation: "Respiration releases CO₂, which dissolves to form a weak acid (carbonic acid), lowering the pH. Hydrogencarbonate indicator turns from orange-red toward yellow as CO₂ increases (more acidic). It turns purple/magenta only when CO₂ is removed (more alkaline), e.g. by active photosynthesis.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "challenge",
            hints: [
              "Respiration produces carbon dioxide.",
              "Dissolved CO₂ forms a weak acid, lowering pH.",
              "Hydrogencarbonate indicator goes yellow when more acidic, purple when more alkaline.",
              "More CO₂ → more acidic → yellow.",
            ],
          },
          {
            id: "bio-gas-respiration-bm2-09",
            question: "A disease destroys many alveolar walls, merging small alveoli into a few large air spaces. Using Fick's Law, the rate of gas exchange falls MAINLY because:",
            options: [
              "The concentration gradient becomes steeper",
              "The total surface area for diffusion decreases",
              "The diffusion distance decreases",
              "The breathing rate automatically increases",
            ],
            answerIndex: 1,
            explanation: "Merging many small alveoli into a few large ones drastically reduces the total surface area available for diffusion. Since rate ∝ surface area, the rate of gas exchange falls. (This is what happens in emphysema.) The gradient is set by blood flow, not wall destruction.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "challenge",
            hints: [
              "Many tiny spheres have far more total surface than a few big ones of the same volume.",
              "Which Fick's Law variable does total surface area correspond to?",
              "Rate is proportional to surface area — so less area means what?",
              "The gradient depends on blood flow, which is not changed by wall destruction.",
            ],
          },
          {
            id: "bio-gas-respiration-bm2-10",
            question: "An alveolus has air at 14% O₂ next to blood at 5% O₂, giving a gradient of 9%. If exercise lowers blood O₂ to 2% while alveolar O₂ stays at 14%, the effect on the rate of oxygen diffusion is to:",
            options: [
              "Decrease it, because less oxygen is in the blood",
              "Increase it, because the concentration gradient becomes steeper",
              "Leave it unchanged, because alveolar O₂ is the same",
              "Stop it, because diffusion needs equal concentrations",
            ],
            answerIndex: 1,
            explanation: "The gradient rises from 14−5 = 9% to 14−2 = 12%. By Fick's Law, rate ∝ concentration difference, so a steeper gradient increases the rate of O₂ diffusion into the blood. This is one reason exercising muscles get oxygen faster. Diffusion does not need equal concentrations — it needs a difference.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "challenge",
            hints: [
              "Work out the gradient before: 14 − 5 = 9%.",
              "Work out the gradient after: 14 − 2 = 12%.",
              "A bigger difference means a steeper gradient.",
              "Fick's Law: more concentration difference → faster rate.",
            ],
          },
        ],
      },
      {
        id: "bio-gas-respiration-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Aerobic and anaerobic respiration, fermentation, energy and ATP.",
        questions: [
          {
            id: "bio-gas-respiration-bm3-01",
            question: "Which word equation correctly represents aerobic respiration?",
            options: [
              "glucose + oxygen → carbon dioxide + water",
              "glucose → ethanol + carbon dioxide",
              "glucose → lactic acid",
              "carbon dioxide + water → glucose + oxygen",
            ],
            answerIndex: 0,
            explanation: "Aerobic respiration: glucose + oxygen → carbon dioxide + water (+ energy). Option B is yeast fermentation, option C is human anaerobic respiration, and option D is photosynthesis (the reverse).",
            guideRef: "Aerobic Respiration",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm3-02",
            question: "Which is the correctly balanced symbol equation for aerobic respiration?",
            options: [
              "C₆H₁₂O₆ + O₂ → CO₂ + H₂O",
              "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
              "C₆H₁₂O₆ + 3O₂ → 3CO₂ + 3H₂O",
              "C₆H₁₂O₆ → 6CO₂ + 6H₂O",
            ],
            answerIndex: 1,
            explanation: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O is balanced: 6 C, 12 H and 18 O on each side. Option A is not balanced; option C uses the wrong coefficients; option D has no oxygen reactant, so it cannot be aerobic.",
            guideRef: "Aerobic Respiration",
            difficulty: "core",
            hints: [
              "Balance carbon first: 6 carbons in glucose → how many CO₂?",
              "Balance hydrogen: 12 H in glucose → how many H₂O?",
              "Now count oxygen on the right and work out how many O₂ are needed.",
            ],
          },
          {
            id: "bio-gas-respiration-bm3-03",
            question: "What is the product of anaerobic respiration in human muscle cells?",
            options: ["Ethanol and carbon dioxide", "Lactic acid", "Carbon dioxide and water", "Glucose and oxygen"],
            answerIndex: 1,
            explanation: "Human muscle cells respiring anaerobically produce lactic acid. Ethanol + CO₂ is the yeast product. CO₂ + water is the aerobic product. Glucose + oxygen is a reactant set, not a product.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm3-04",
            question: "Which balanced equation represents anaerobic respiration (fermentation) in yeast?",
            options: [
              "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",
              "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
              "C₆H₁₂O₆ → 2C₃H₆O₃",
              "2C₂H₅OH + 2CO₂ → C₆H₁₂O₆",
            ],
            answerIndex: 0,
            explanation: "Yeast fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (glucose → ethanol + carbon dioxide). Option B is aerobic respiration; option C represents lactic acid formation; option D is the reverse direction.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "core",
            hints: [
              "Yeast anaerobic respiration produces ethanol and carbon dioxide.",
              "One glucose gives two ethanol and two carbon dioxide molecules.",
              "Check the carbons: 6 in glucose = 2×2 (ethanol) + 2×1 (CO₂).",
            ],
          },
          {
            id: "bio-gas-respiration-bm3-05",
            question: "Why does aerobic respiration release much more energy per glucose molecule than anaerobic respiration?",
            options: [
              "Aerobic respiration uses more glucose at once",
              "Aerobic respiration completely oxidises glucose to CO₂ and water",
              "Anaerobic respiration destroys ATP molecules",
              "Anaerobic respiration occurs only in the mitochondria",
            ],
            answerIndex: 1,
            explanation: "Aerobic respiration fully oxidises glucose to CO₂ and water, releasing nearly all the chemical energy (≈2870 kJ mol⁻¹). Anaerobic respiration only partially breaks glucose down, leaving energy locked in lactic acid or ethanol. Anaerobic respiration occurs in the cytoplasm, not mitochondria.",
            guideRef: "Aerobic Respiration",
            difficulty: "core",
            hints: [
              "Think about how completely glucose is broken down in each pathway.",
              "Aerobic products (CO₂ + water) hold very little remaining energy.",
              "Anaerobic products (lactic acid / ethanol) still contain a lot of energy.",
            ],
          },
          {
            id: "bio-gas-respiration-bm3-06",
            question: "Bread dough rises because yeast respiration produces which gas?",
            options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
            answerIndex: 1,
            explanation: "Yeast ferments sugars to ethanol and carbon dioxide. The CO₂ forms bubbles that make the dough rise; the ethanol evaporates during baking. Oxygen, hydrogen and nitrogen are not products of fermentation.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm3-07",
            question: "Energy released by respiration is used in cells for all of the following EXCEPT:",
            options: [
              "Active transport of ions across membranes",
              "Muscle contraction",
              "Trapping light energy during photosynthesis",
              "Synthesis of proteins for growth",
            ],
            answerIndex: 2,
            explanation: "Photosynthesis traps LIGHT energy as the input — it is not powered by ATP from respiration. Active transport, muscle contraction and protein synthesis all require energy (ATP) released by respiration.",
            guideRef: "Aerobic Respiration",
            difficulty: "core",
            hints: [
              "Three options are processes that USE energy from respiration.",
              "Which process gets its energy from sunlight instead?",
              "Photosynthesis is an energy input, not an energy user.",
            ],
          },
          {
            id: "bio-gas-respiration-bm3-08",
            question: "A waterlogged plant root respires anaerobically. Which product, if it accumulates, can be toxic to the plant cells?",
            options: ["Lactic acid", "Ethanol", "Water", "Oxygen"],
            answerIndex: 1,
            explanation: "Plant cells (and yeast) produce ethanol and CO₂ during anaerobic respiration. Ethanol is toxic to cells if it builds up, which is one reason waterlogged soils damage roots. Water and oxygen are not toxic; lactic acid is the animal/human product.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "challenge",
            hints: [
              "Plants and yeast share the same anaerobic pathway.",
              "What are the two products of that pathway?",
              "One of those products damages cells when it accumulates.",
              "It is the same substance that becomes toxic to yeast in brewing.",
            ],
          },
          {
            id: "bio-gas-respiration-bm3-09",
            question: "One mole of glucose releases about 2870 kJ when respired aerobically but only about 150 kJ when respired anaerobically by yeast. Approximately what percentage of the aerobic energy yield is released anaerobically?",
            options: ["About 0.5%", "About 5%", "About 20%", "About 50%"],
            answerIndex: 1,
            explanation: "Percentage = (150 / 2870) × 100 ≈ 5.2%, i.e. about 5%. This shows anaerobic respiration releases only a small fraction of the energy available, because glucose is only partially broken down.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "challenge",
            hints: [
              "Percentage = (anaerobic yield / aerobic yield) × 100.",
              "Divide 150 by 2870.",
              "150 / 2870 ≈ 0.052.",
              "Multiply by 100 to get about 5%.",
            ],
            strategy: "Convert 'what fraction' questions into (part / whole) × 100.",
          },
          {
            id: "bio-gas-respiration-bm3-10",
            question: "Aerobic respiration of one glucose molecule makes 6 CO₂, while anaerobic fermentation of one glucose makes only 2 CO₂. A sealed flask of respiring yeast switches from aerobic to anaerobic respiration when the oxygen runs out. For the SAME number of glucose molecules used after the switch, the volume of CO₂ produced per second will:",
            options: [
              "Stay exactly the same, because glucose is the same",
              "Fall, because each glucose now yields fewer CO₂ molecules",
              "Rise, because anaerobic respiration is always faster",
              "Stop completely, because no oxygen means no CO₂",
            ],
            answerIndex: 1,
            explanation: "Per glucose, aerobic respiration gives 6 CO₂ but fermentation gives only 2 CO₂. So for the same number of glucose molecules consumed, the CO₂ yield drops to one third. CO₂ is still produced (so it does not stop), but per glucose the amount is lower. (Reaction speed can differ separately, but per-glucose CO₂ definitely falls.)",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "challenge",
            hints: [
              "Compare the CO₂ coefficient in each equation: 6 vs 2.",
              "For the same glucose used, which pathway makes more CO₂?",
              "Fermentation still makes CO₂, so it does not stop.",
              "2 out of 6 is one third — the yield falls.",
            ],
          },
        ],
      },
      {
        id: "bio-gas-respiration-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Exercise, oxygen debt, plant gas exchange and the effect of light.",
        questions: [
          {
            id: "bio-gas-respiration-bm4-01",
            question: "Immediately after sprinting, a person breathes faster and deeper. The MAIN reason is to:",
            options: [
              "Cool the body down quickly",
              "Supply extra oxygen and remove extra carbon dioxide",
              "Increase the nitrogen content of the blood",
              "Reduce the heart rate",
            ],
            answerIndex: 1,
            explanation: "Exercise raises the demand for oxygen and produces more carbon dioxide. Faster, deeper breathing increases O₂ supply to muscles and removes the extra CO₂. Breathing does not control body cooling here, and nitrogen is not used.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm4-02",
            question: "What is meant by 'oxygen debt'?",
            options: [
              "The oxygen stored in muscles before exercise",
              "The extra oxygen needed after exercise to break down lactic acid",
              "The oxygen lost in expired air during exercise",
              "The oxygen used to make glucose after exercise",
            ],
            answerIndex: 1,
            explanation: "Oxygen debt is the extra oxygen consumed after exercise to oxidise (or reconvert) the lactic acid that built up during anaerobic respiration. It is why breathing stays elevated for a while after exercise stops.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bm4-03",
            question: "Which change is detected by chemoreceptors and triggers an increase in breathing rate during exercise?",
            options: [
              "A rise in blood carbon dioxide / fall in blood pH",
              "A rise in blood oxygen concentration",
              "A fall in blood temperature",
              "A rise in blood glucose concentration",
            ],
            answerIndex: 0,
            explanation: "Working muscles produce more CO₂, which dissolves in blood and lowers its pH. Chemoreceptors detect the rising CO₂ / falling pH and signal the breathing muscles to work harder and faster. Falling O₂ is a weaker stimulus than rising CO₂.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "What waste gas do active muscles produce in large amounts?",
              "How does that gas affect the pH of the blood?",
              "Chemoreceptors are primarily sensitive to CO₂ / pH, not O₂.",
            ],
          },
          {
            id: "bio-gas-respiration-bm4-04",
            question: "A student records a resting breathing rate of 15 breaths per minute and a post-exercise rate of 45 breaths per minute. By what factor has the breathing rate increased?",
            options: ["1.5 times", "2 times", "3 times", "30 times"],
            answerIndex: 2,
            explanation: "Factor increase = 45 ÷ 15 = 3. The breathing rate has increased threefold. (The difference, 30 breaths/min, is the increase in number, not the factor.)",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "Factor = new value ÷ original value.",
              "Divide 45 by 15.",
              "45 ÷ 15 = 3.",
            ],
            strategy: "‘By what factor’ means divide, not subtract.",
          },
          {
            id: "bio-gas-respiration-bm4-05",
            question: "In a leaf, where do gases mainly enter and leave for gas exchange?",
            options: [
              "Through the waxy cuticle",
              "Through stomata, usually on the lower epidermis",
              "Through the xylem vessels",
              "Through the midrib only",
            ],
            answerIndex: 1,
            explanation: "Gases diffuse in and out of the leaf through stomata, small pores controlled by guard cells, usually most numerous on the lower epidermis. The waxy cuticle is largely impermeable; xylem carries water, not gases for exchange.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "Which structures are pores in the leaf surface?",
              "They are controlled by guard cells.",
              "They are usually most common on the underside of the leaf.",
            ],
          },
          {
            id: "bio-gas-respiration-bm4-06",
            question: "In bright light, a healthy leaf releases oxygen overall, even though its cells are also respiring. The BEST explanation is:",
            options: [
              "Respiration stops completely in the light",
              "Photosynthesis occurs faster than respiration, so there is a net release of oxygen",
              "The leaf only respires at night and never in the light",
              "Oxygen is produced by the stomata themselves",
            ],
            answerIndex: 1,
            explanation: "In bright light, the rate of photosynthesis exceeds the rate of respiration, so the leaf produces more O₂ (and uses more CO₂) than respiration consumes/produces — giving a NET release of O₂. Respiration still occurs continuously; it does not stop in the light.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "Does respiration ever stop in living cells?",
              "Compare the RATES of photosynthesis and respiration in bright light.",
              "Net gas exchange = the difference between the two opposing processes.",
            ],
          },
          {
            id: "bio-gas-respiration-bm4-07",
            question: "At which light intensity is a plant's net exchange of carbon dioxide closest to zero?",
            options: [
              "In complete darkness",
              "At the compensation point, where photosynthesis rate equals respiration rate",
              "In the brightest possible light",
              "Net CO₂ exchange is never zero in a living plant",
            ],
            answerIndex: 1,
            explanation: "At the compensation point, the rate of photosynthesis exactly equals the rate of respiration, so the CO₂ produced by respiration is exactly used by photosynthesis — net CO₂ exchange is zero. In darkness only respiration occurs (net release of CO₂); in bright light photosynthesis dominates (net uptake of CO₂).",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "challenge",
            hints: [
              "Net exchange is zero when two opposing rates are equal.",
              "Which two processes oppose each other for CO₂?",
              "The point where photosynthesis rate = respiration rate has a special name.",
              "It is called the compensation point.",
            ],
          },
          {
            id: "bio-gas-respiration-bm4-08",
            question: "Two test tubes contain hydrogencarbonate indicator and a water plant. Tube 1 is in bright light; Tube 2 is wrapped in foil (dark). After 2 hours, the indicator in Tube 1 turns purple and in Tube 2 turns yellow. Which statement correctly interprets BOTH results?",
            options: [
              "Tube 1: net CO₂ uptake (photosynthesis > respiration); Tube 2: net CO₂ release (respiration only)",
              "Tube 1: net CO₂ release; Tube 2: net CO₂ uptake",
              "Both tubes show net CO₂ release",
              "Both tubes show net CO₂ uptake",
            ],
            answerIndex: 0,
            explanation: "Purple indicates lower CO₂ (more alkaline): in the light, photosynthesis exceeds respiration, so there is net CO₂ uptake. Yellow indicates higher CO₂ (more acidic): in the dark, only respiration occurs, releasing CO₂, so there is net CO₂ release.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "challenge",
            hints: [
              "Recall: hydrogencarbonate indicator goes purple when CO₂ falls, yellow when CO₂ rises.",
              "In light, the plant both photosynthesises and respires — which dominates?",
              "In the dark, photosynthesis cannot occur — only respiration.",
              "Match each colour to net CO₂ uptake or release.",
            ],
          },
          {
            id: "bio-gas-respiration-bm4-09",
            question: "A fit athlete and an unfit person do the same exercise. The athlete's breathing returns to resting rate much faster afterwards. The BEST explanation is:",
            options: [
              "The athlete produced no carbon dioxide during exercise",
              "The athlete relies more on aerobic respiration, building up less lactic acid / a smaller oxygen debt",
              "The athlete has no chemoreceptors",
              "The athlete stores oxygen in the lungs for later",
            ],
            answerIndex: 1,
            explanation: "A fitter person has a more efficient heart and lungs, delivering oxygen faster, so more energy is supplied aerobically and less lactic acid accumulates. The oxygen debt is therefore smaller and is repaid quickly, so breathing returns to normal sooner.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "challenge",
            hints: [
              "What causes breathing to stay high after exercise?",
              "A fitter person can supply more oxygen during exercise.",
              "More aerobic respiration → less lactic acid → smaller oxygen debt.",
              "A smaller oxygen debt is repaid faster.",
            ],
          },
          {
            id: "bio-gas-respiration-bm4-10",
            question: "A leaf cell in dim light has a photosynthesis rate that produces 4 units of O₂ per minute while respiration uses 6 units of O₂ per minute. The net effect on the cell's oxygen exchange is:",
            options: [
              "A net release of 2 units of O₂ per minute",
              "A net uptake of 2 units of O₂ per minute",
              "No net exchange of O₂",
              "A net release of 10 units of O₂ per minute",
            ],
            answerIndex: 1,
            explanation: "Photosynthesis makes 4 units O₂; respiration uses 6 units O₂. Net = 4 produced − 6 used = −2, i.e. the cell takes in 2 units of O₂ per minute (net uptake) from outside. In dim light, respiration outpaces photosynthesis, so the cell behaves like a net oxygen consumer.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "challenge",
            hints: [
              "Net O₂ = O₂ produced by photosynthesis − O₂ used by respiration.",
              "Calculate 4 − 6.",
              "A negative answer means the cell takes in O₂ (net uptake).",
              "So there is a net uptake of 2 units per minute.",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-gas-respiration-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "The breathing system, ventilation mechanism, and airway protection.",
        questions: [
          {
            id: "bio-gas-respiration-bq1-01",
            question: "List, in order, the structures that a molecule of oxygen passes through from the mouth to the site of gas exchange. (3 marks)",
            marks: 3,
            modelAnswer: "Mouth → trachea → bronchus (bronchi) → bronchiole(s) → alveolus (alveoli). The oxygen finally diffuses across the alveolar wall into the blood.",
            markScheme: [
              "Trachea (after mouth/nose)",
              "Bronchus / bronchi",
              "Bronchiole(s) then alveolus / alveoli (in correct order)",
            ],
            commonError: "Swapping the order of bronchi and bronchioles — bronchi are the larger tubes that come first; bronchioles are the smaller branches.",
            guideRef: "The Human Breathing System",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bq1-02",
            question: "Goblet cells and ciliated epithelial cells line the trachea and bronchi. (a) State the function of goblet cells. (1 mark) (b) State the function of ciliated cells. (1 mark) (c) Explain how these two cell types work together to protect the lungs. (2 marks)",
            marks: 4,
            modelAnswer: "(a) Goblet cells secrete mucus onto the airway lining. (b) Ciliated cells have cilia that beat to sweep the mucus upward toward the throat. (c) The sticky mucus made by goblet cells traps dust, bacteria and other particles in the inhaled air. The cilia then beat in coordinated waves to move this mucus (with the trapped particles) up to the throat, where it is swallowed, preventing pathogens reaching and damaging the alveoli.",
            markScheme: [
              "Goblet cells secrete / produce mucus",
              "Ciliated cells beat / move mucus upward / toward throat",
              "Mucus traps dust / bacteria / particles / pathogens",
              "Trapped material swept up and swallowed / removed so does not reach alveoli/lungs",
            ],
            commonError: "Mixing up the two cells — goblet cells PRODUCE mucus, ciliated cells MOVE it. They do not both do the same job.",
            guideRef: "The Human Breathing System",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bq1-03",
            question: "Describe the sequence of events that occurs during expiration (breathing out) at rest. Refer to the diaphragm, the intercostal muscles, the volume of the thorax, the pressure, and the movement of air. (5 marks)",
            marks: 5,
            modelAnswer: "At rest, expiration is largely passive. The diaphragm relaxes and returns to its domed (upward) shape. The external intercostal muscles relax, so the ribcage moves downward and inward. These changes decrease the volume of the thoracic cavity. As the volume decreases, the pressure inside the lungs rises above atmospheric pressure. Air therefore flows out of the lungs, from high pressure (inside) to low pressure (atmosphere), until the pressures equalise.",
            markScheme: [
              "Diaphragm relaxes / domes upward",
              "External intercostal muscles relax / ribs move down and in",
              "Volume of thoracic cavity decreases",
              "Pressure in lungs increases / rises above atmospheric",
              "Air flows out of lungs (high to low pressure)",
            ],
            commonError: "Stating that muscles 'contract' to breathe out at rest — at rest expiration is passive, with both muscle groups RELAXING.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "At rest, are the breathing muscles contracting or relaxing during expiration?",
              "What happens to the diaphragm shape when it relaxes?",
              "Relaxed external intercostals let the ribs fall — what does that do to volume?",
              "Volume down → pressure up → air moves which way?",
            ],
            strategy: "Sequence it: muscle action → volume change → pressure change → air movement.",
          },
          {
            id: "bio-gas-respiration-bq1-04",
            question: "Explain why the lungs are described as being ventilated 'passively' even though breathing requires muscular effort. (3 marks)",
            marks: 3,
            modelAnswer: "The lungs themselves contain no muscle, so they cannot move on their own. Instead, the muscular effort comes from the diaphragm and the intercostal muscles, which change the volume of the thoracic cavity around the lungs. As the cavity volume changes, the pressure inside changes, and the elastic lungs are stretched or allowed to recoil passively, following the movement of the cavity. So while breathing does need muscle effort, that effort acts on the thoracic wall and diaphragm — the lungs move passively in response.",
            markScheme: [
              "Lungs contain no muscle / cannot move themselves",
              "Diaphragm and intercostal muscles change thoracic cavity volume",
              "Pressure change makes elastic lungs follow / stretch / recoil passively",
            ],
            commonError: "Saying the lungs 'pull air in' — air is moved by pressure differences created by the chest muscles, not by the lungs.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "Do the lungs contain any muscle tissue of their own?",
              "Which structures supply the muscular effort for breathing?",
              "The lungs are elastic and follow the cavity — what does 'passive' mean here?",
            ],
          },
          {
            id: "bio-gas-respiration-bq1-05",
            question: "A model of the chest uses a bell jar with a rubber sheet stretched across the bottom, a Y-shaped glass tube through the top, and two balloons inside the tube (see Figure). (a) State which body structure each part represents: the bell jar, the rubber sheet, and the balloons. (3 marks) (b) Describe what happens to the balloons when the rubber sheet is pulled down, and explain why. (3 marks) (c) Suggest ONE way in which this model is NOT an accurate representation of real breathing. (1 mark)",
            marks: 7,
            modelAnswer: "(a) The bell jar represents the thorax / ribcage (the chest cavity wall). The rubber sheet represents the diaphragm. The balloons represent the lungs. (b) When the rubber sheet is pulled down, the volume inside the bell jar increases, so the pressure inside falls below atmospheric. Air rushes in through the glass tube and inflates the balloons (the balloons get bigger). This models inspiration. (c) Any one: the bell jar is rigid whereas the real ribcage moves (the model has no intercostal muscles / rib movement); the rubber sheet is pulled by hand rather than by muscle contraction; the balloons have thick walls unlike thin alveoli; there is no real gas exchange in the model.",
            markScheme: [
              "Bell jar = thorax / ribcage / chest wall",
              "Rubber sheet = diaphragm",
              "Balloons = lungs",
              "Volume inside increases / pressure falls below atmospheric",
              "Air enters / balloons inflate (inspiration)",
              "Any valid limitation: rigid jar/no rib movement / no intercostal muscles / no real gas exchange / thick balloon walls",
            ],
            commonError: "Saying the balloons inflate because the rubber sheet 'pushes air in' — pulling the sheet DOWN lowers the pressure inside, and atmospheric pressure pushes air in.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "challenge",
            hints: [
              "Match each part to the body structure with the same role.",
              "Pulling the sheet down is like the diaphragm contracting — what does that do to volume?",
              "Volume up → pressure down → air moves which way?",
              "For the limitation: think what the model leaves out (ribs, muscles, real gas exchange).",
            ],
          },
          {
            id: "bio-gas-respiration-bq1-06",
            question: "Smoking over many years damages the airways. Explain why a heavy smoker is more likely to suffer from a build-up of mucus and frequent chest infections. (4 marks)",
            marks: 4,
            modelAnswer: "Chemicals in cigarette smoke paralyse and eventually destroy the cilia on the ciliated epithelial cells lining the airways. Without beating cilia, mucus is no longer swept upward to the throat, so it accumulates in the airways (causing 'smoker's cough' as the smoker tries to clear it). Because the mucus is not removed, the dust, bacteria and other pathogens trapped in it are not cleared from the lungs. These pathogens multiply and can reach the alveoli, causing frequent chest infections such as bronchitis. Smoking can also increase mucus production by goblet cells, worsening the build-up.",
            markScheme: [
              "Smoke damages / paralyses / destroys cilia",
              "Mucus no longer swept upward / accumulates in airways",
              "Trapped bacteria / pathogens not removed",
              "Pathogens multiply / reach lungs → infections (e.g. bronchitis)",
            ],
            commonError: "Saying smoking 'stops oxygen reaching the lungs' — the link to infection is through damaged cilia and uncleared mucus, not blocked oxygen.",
            guideRef: "The Human Breathing System",
            difficulty: "core",
            hints: [
              "Which airway structure is damaged by smoke?",
              "If cilia stop working, what happens to the mucus?",
              "What is trapped in that mucus that should be removed?",
              "Uncleared pathogens lead to what outcome?",
            ],
          },
          {
            id: "bio-gas-respiration-bq1-07",
            question: "Define the term 'tidal volume', and explain why measuring breathing rate alone may underestimate how much extra air a person takes in during exercise. (3 marks)",
            marks: 3,
            modelAnswer: "Tidal volume is the volume of air breathed in or out in one normal breath (at rest, about 500 cm³). Measuring breathing rate alone (breaths per minute) ignores the fact that during exercise the depth of each breath also increases — the tidal volume rises. So the total volume of air moved per minute (rate × tidal volume) increases much more than the rate alone suggests, because both the number of breaths and the size of each breath increase.",
            markScheme: [
              "Tidal volume = volume of air in one (normal) breath",
              "During exercise depth/tidal volume also increases (not just rate)",
              "Total air per minute = rate × tidal volume, so rate alone underestimates the increase",
            ],
            commonError: "Confusing tidal volume (one breath) with minute ventilation (one minute) — they are different quantities.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "Tidal volume is about a single breath.",
              "During exercise, does only the number of breaths change, or their depth too?",
              "Total air per minute combines both rate and depth.",
            ],
          },
          {
            id: "bio-gas-respiration-bq1-08",
            question: "State two differences between the structure of the trachea and the structure of an alveolus, and relate each difference to its function. (4 marks)",
            marks: 4,
            modelAnswer: "1. The trachea has C-shaped rings of cartilage in its wall, whereas the alveolus has no cartilage. The cartilage keeps the trachea open as air passes through; the alveolus does not need this because its job is gas exchange, not conducting air. 2. The trachea has a relatively thick wall lined with ciliated and goblet cells, whereas the alveolus has a very thin wall (one cell thick). The thin alveolar wall gives a short diffusion distance for fast gas exchange, while the thicker tracheal wall supports its protective and conducting role.",
            markScheme: [
              "Trachea has cartilage rings / alveolus does not",
              "Cartilage keeps trachea open (function)",
              "Alveolus has thin (one-cell-thick) wall vs thicker tracheal wall",
              "Thin alveolar wall → short diffusion distance / fast gas exchange (function)",
            ],
            commonError: "Listing structural differences without linking them to FUNCTION — each mark needs the structure AND why it matters.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "core",
            hints: [
              "Think about what each structure is FOR: conducting air vs exchanging gases.",
              "What rigid structure does the trachea have that the alveolus lacks?",
              "Compare wall thickness — which needs to be thin and why?",
            ],
          },
          {
            id: "bio-gas-respiration-bq1-09",
            question: "A baby born very prematurely may have trouble keeping its alveoli open because it lacks a substance (surfactant) that lines the alveoli. Surfactant reduces the surface tension of the moist lining. (a) Explain why a moist lining is normally an advantage for gas exchange. (2 marks) (b) Suggest why, without surfactant, the alveoli may collapse and gas exchange becomes difficult. (2 marks)",
            marks: 4,
            modelAnswer: "(a) The moist lining allows oxygen and carbon dioxide to dissolve in the thin film of liquid before diffusing across the alveolar membrane; gases must be in solution to diffuse across the cell membranes, so the moisture aids gas exchange. (b) The water film creates surface tension that tends to pull the alveolar walls together. Without surfactant to reduce this surface tension, the tension is high, so the tiny alveoli collapse (close up). Collapsed alveoli have a greatly reduced surface area available for diffusion, so gas exchange becomes slow and breathing is difficult.",
            markScheme: [
              "Moist lining lets gases dissolve before diffusing",
              "Gases must be in solution to cross the membrane / aids diffusion",
              "Without surfactant, surface tension is high / pulls alveolar walls together",
              "Alveoli collapse → reduced surface area → poor / difficult gas exchange",
            ],
            commonError: "Treating surface tension and the moist lining as the same thing — the moisture helps diffusion, but its surface tension can also cause collapse without surfactant.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "challenge",
            hints: [
              "Why must gases dissolve before they can diffuse across a membrane?",
              "Surface tension in a water film tends to pull surfaces together.",
              "If alveoli close up, what happens to the surface area for diffusion?",
              "Link collapsed alveoli to a falling rate of gas exchange via Fick's Law.",
            ],
          },
          {
            id: "bio-gas-respiration-bq1-10",
            question: "An anaesthetised animal is connected to a machine measuring its breathing. Resting tidal volume is 480 cm³ and breathing rate is 12 breaths per minute. During recovery, tidal volume rises to 720 cm³ and rate to 20 breaths per minute. (a) Calculate the minute ventilation (total air breathed per minute) at rest and during recovery. Show your working. (2 marks) (b) Calculate the percentage increase in minute ventilation. (2 marks)",
            marks: 4,
            modelAnswer: "(a) Minute ventilation = breathing rate × tidal volume. At rest: 12 × 480 = 5760 cm³ min⁻¹. During recovery: 20 × 720 = 14 400 cm³ min⁻¹. (b) Increase = 14 400 − 5760 = 8640 cm³ min⁻¹. Percentage increase = (8640 / 5760) × 100 = 150%.",
            markScheme: [
              "At rest: 12 × 480 = 5760 cm³ min⁻¹",
              "Recovery: 20 × 720 = 14 400 cm³ min⁻¹",
              "Increase = 14 400 − 5760 = 8640 cm³ min⁻¹",
              "Percentage increase = (8640 / 5760) × 100 = 150%",
            ],
            commonError: "Dividing by the recovery value instead of the original (resting) value when calculating percentage increase — always divide the change by the ORIGINAL value.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "challenge",
            hints: [
              "Minute ventilation = rate × tidal volume.",
              "Work out the value at rest and during recovery separately.",
              "Percentage increase = (change / original) × 100, using the resting value as 'original'.",
            ],
            strategy: "For percentage increase, the denominator is always the ORIGINAL (starting) value.",
            solutions: [
              {
                label: "Method: minute ventilation and percentage increase",
                steps: [
                  "Minute ventilation = breathing rate × tidal volume",
                  "At rest: 12 breaths min⁻¹ × 480 cm³ = 5760 cm³ min⁻¹",
                  "Recovery: 20 breaths min⁻¹ × 720 cm³ = 14 400 cm³ min⁻¹",
                  "Change = 14 400 − 5760 = 8640 cm³ min⁻¹",
                  "Percentage increase = (8640 / 5760) × 100 = 150%",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "bio-gas-respiration-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Alveolar adaptations, gas exchange and air composition experiments.",
        questions: [
          {
            id: "bio-gas-respiration-bq2-01",
            question: "State Fick's Law of diffusion as it applies to the alveolus. (2 marks)",
            marks: 2,
            modelAnswer: "The rate of diffusion is proportional to (surface area × concentration difference) divided by the diffusion distance. In other words, gas exchange is faster when the surface area is larger, the concentration difference (gradient) is steeper, and the diffusion distance (membrane thickness) is shorter.",
            markScheme: [
              "Rate ∝ surface area × concentration difference",
              "Rate ∝ 1 / diffusion distance (inversely proportional to distance/thickness)",
            ],
            commonError: "Forgetting that distance is INVERSELY proportional to rate — thinner walls give faster, not slower, diffusion.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bq2-02",
            question: "List three adaptations of an alveolus for efficient gas exchange. (3 marks)",
            marks: 3,
            modelAnswer: "Any three of: a very large total surface area (about 70 m² from ~300–500 million alveoli); walls only one cell thick, giving a short diffusion distance; a moist lining so gases can dissolve; a rich blood supply (dense capillary network) that maintains a steep concentration gradient; good ventilation that constantly refreshes the air.",
            markScheme: [
              "Large surface area",
              "Thin wall / one cell thick / short diffusion distance",
              "Moist lining / rich blood supply / good ventilation (any of these for the third mark)",
            ],
            commonError: "Listing 'cilia' or 'cartilage' as alveolar adaptations — those belong to the airways, not the alveoli.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bq2-03",
            question: "Describe how to use limewater to show that exhaled air contains more carbon dioxide than inhaled air. Include the result you would expect and a balanced equation for the reaction. (5 marks)",
            marks: 5,
            modelAnswer: "Set up two flasks of limewater (calcium hydroxide solution). Bubble inhaled (atmospheric) air through one flask and exhaled air through the other, using the same volume and flow rate for the same time. The flask with exhaled air turns milky/cloudy white much faster (or more strongly) than the flask with inhaled air, because exhaled air contains far more CO₂ (~4% vs ~0.04%). The cloudiness is insoluble calcium carbonate forming: Ca(OH)₂ (aq) + CO₂ (g) → CaCO₃ (s) + H₂O (l). The slow or absent change in the inhaled-air flask acts as a control, confirming that the extra CO₂ comes from respiration.",
            markScheme: [
              "Bubble air through limewater / calcium hydroxide solution",
              "Compare exhaled air with inhaled (atmospheric) air as a control",
              "Exhaled air turns limewater milky / cloudy faster or more",
              "Balanced equation: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O",
              "Conclusion: exhaled air contains more CO₂ (from respiration)",
            ],
            commonError: "Only describing the exhaled-air flask — without an inhaled-air control there is no valid comparison.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "Which chemical turns milky with CO₂?",
              "You need a control — what air should the second flask receive?",
              "State the colour change and which flask changes faster.",
              "Write the equation: Ca(OH)₂ + CO₂ → ?",
            ],
          },
          {
            id: "bio-gas-respiration-bq2-04",
            question: "The table shows the approximate composition of inspired and expired air.\n\nOxygen: inspired 21%, expired 16%. Carbon dioxide: inspired 0.04%, expired 4%. Nitrogen: inspired 78%, expired 78%.\n\n(a) Explain why oxygen decreases and carbon dioxide increases between inspired and expired air. (2 marks) (b) Explain why the nitrogen percentage is unchanged. (1 mark) (c) Calculate how many times greater the CO₂ percentage is in expired air than in inspired air. (1 mark)",
            marks: 4,
            modelAnswer: "(a) Oxygen decreases because some of it diffuses from the alveoli into the blood to be used in aerobic respiration. Carbon dioxide increases because it is produced by respiration in the body cells, carried to the lungs in the blood, and diffuses into the alveoli to be breathed out. (b) Nitrogen is not used or produced by respiration (it is inert), so its percentage is essentially unchanged. (c) 4 ÷ 0.04 = 100 times greater.",
            markScheme: [
              "O₂ decreases: absorbed into blood / used in respiration",
              "CO₂ increases: produced by respiration / released from blood into alveoli",
              "Nitrogen unchanged: not used or produced by the body / inert",
              "CO₂ ratio = 4 / 0.04 = 100 times",
            ],
            commonError: "Saying oxygen is 'destroyed' — oxygen is used (as a reactant) in respiration; it is not destroyed.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "Where does the missing oxygen go, and what is it used for?",
              "Where does the extra carbon dioxide come from?",
              "Is nitrogen involved in respiration at all?",
              "For (c): divide the expired CO₂ by the inspired CO₂.",
            ],
            solutions: [
              {
                label: "Method: CO₂ ratio",
                steps: [
                  "Ratio = expired CO₂ % ÷ inspired CO₂ %",
                  "= 4 ÷ 0.04",
                  "= 100 times greater",
                ],
              },
            ],
          },
          {
            id: "bio-gas-respiration-bq2-05",
            question: "Explain how each of the following alveolar features increases the rate of gas exchange, naming the relevant part of Fick's Law in each case: (a) a network of many capillaries around each alveolus; (b) the alveolar wall being one cell thick. (4 marks)",
            marks: 4,
            modelAnswer: "(a) The dense capillary network gives a rich blood supply. Blood constantly carries away oxygenated blood and brings deoxygenated blood, keeping the oxygen concentration in the blood low and the carbon dioxide concentration high. This maintains a steep concentration gradient between the alveolar air and the blood — the concentration-difference term in Fick's Law — so diffusion is fast. (b) A wall one cell thick means a very short diffusion distance (~1–2 µm). Because rate is inversely proportional to diffusion distance, the short distance gives a high rate of diffusion.",
            markScheme: [
              "Capillaries maintain a steep concentration gradient (blood removes O₂ / brings CO₂)",
              "Links gradient to the concentration-difference term of Fick's Law",
              "Thin wall = short diffusion distance (~1–2 µm)",
              "Links short distance to faster rate (inversely proportional to distance)",
            ],
            commonError: "Describing a feature without naming the Fick's Law variable it affects — the question specifically asks you to link each to the law.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "core",
            hints: [
              "Capillaries keep blood moving — which Fick's Law term does that affect?",
              "Constant flow keeps the concentration difference large.",
              "Wall thickness corresponds to which term?",
              "Rate is inversely proportional to diffusion distance.",
            ],
          },
          {
            id: "bio-gas-respiration-bq2-06",
            question: "A student breathes onto a cold dry mirror and it mists up. (a) What does this demonstrate about expired air? (1 mark) (b) Explain where this substance in the expired air comes from. (2 marks) (c) State two further ways, besides water content, in which expired air differs from inspired air. (2 marks)",
            marks: 5,
            modelAnswer: "(a) It shows that expired air contains water vapour (it is saturated with water vapour). (b) The water vapour comes from the moist lining of the alveoli and airways; as air passes over the warm, wet surfaces of the lungs it picks up water, which then condenses on the cold mirror. (c) Any two of: expired air contains less oxygen (~16% vs 21%); expired air contains more carbon dioxide (~4% vs 0.04%); expired air is warmer (around body temperature, ~37°C).",
            markScheme: [
              "Expired air contains water vapour",
              "Water comes from the moist lining of the alveoli / airways",
              "Air picks up water as it passes the warm wet lung surfaces",
              "Two of: less O₂ / more CO₂ / warmer (any two)",
            ],
            commonError: "Saying the mist 'is the carbon dioxide' — the misting is condensed water vapour, not CO₂ (CO₂ is a colourless gas).",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "Misting on a cold surface is condensed liquid — what liquid?",
              "Where in the lungs is there a moist surface?",
              "For (c) recall the air composition table — list other differences.",
            ],
          },
          {
            id: "bio-gas-respiration-bq2-07",
            question: "Insects exchange gases through tiny tubes called tracheae that open at the body surface through pores called spiracles, rather than using lungs. Using the principles of gas exchange, suggest two reasons why this tracheal system limits how large insects can grow. (4 marks)",
            marks: 4,
            modelAnswer: "Insects rely largely on diffusion of oxygen through the tracheal tubes directly to the tissues. Diffusion is only fast enough over very short distances; in a large insect, the diffusion distance from the spiracles to the innermost cells would be too great, so oxygen could not reach deep tissues quickly enough to meet their respiratory demand. Also, as an animal gets larger its volume (and therefore its demand for oxygen) increases faster than its surface area of spiracles/tracheae for gas exchange, so a large insect would not have enough gas-exchange surface area relative to its mass. These limits keep insects small.",
            markScheme: [
              "Relies on diffusion through tracheae (no efficient transport system / no lungs)",
              "Diffusion is only fast over short distances / large insect has too great a diffusion distance",
              "Surface area to volume ratio decreases as size increases",
              "Demand (volume) outgrows gas-exchange surface area / cannot supply deep tissues",
            ],
            commonError: "Just saying 'insects are small' without explaining the diffusion-distance or surface-area-to-volume reasoning behind it.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "challenge",
            hints: [
              "How do gases move through the tracheal tubes — by diffusion or by a pump?",
              "Diffusion only works fast over short distances; what happens in a big body?",
              "Think about surface area to volume ratio as size increases.",
              "Demand grows with volume, but exchange depends on surface area.",
            ],
          },
          {
            id: "bio-gas-respiration-bq2-08",
            question: "A leaf carries out gas exchange through stomata. (a) Name the cells that open and close the stomata. (1 mark) (b) During the day, a brightly lit leaf shows a net uptake of carbon dioxide and a net release of oxygen, yet at night the opposite occurs. Explain these observations. (4 marks)",
            marks: 5,
            modelAnswer: "(a) Guard cells. (b) Leaf cells respire all the time, using oxygen and releasing carbon dioxide. In bright daylight the leaf also photosynthesises rapidly, using carbon dioxide and releasing oxygen. Because the rate of photosynthesis is greater than the rate of respiration during the day, more CO₂ is used than produced and more O₂ is produced than used — giving a net uptake of CO₂ and a net release of O₂. At night there is no light, so photosynthesis stops; only respiration occurs, so the leaf takes in O₂ and releases CO₂ (a net uptake of O₂ and release of CO₂).",
            markScheme: [
              "Guard cells",
              "Respiration occurs all the time (uses O₂, releases CO₂)",
              "In light, photosynthesis also occurs (uses CO₂, releases O₂)",
              "Day: photosynthesis rate > respiration rate → net CO₂ in / O₂ out",
              "Night: no photosynthesis, only respiration → net O₂ in / CO₂ out",
            ],
            commonError: "Stating that the leaf 'only respires at night and only photosynthesises in the day' — respiration happens continuously; it is the NET exchange that changes.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "Which cells control the stomatal pores?",
              "Does respiration ever stop in a living leaf?",
              "In the day, two processes happen at once — which one is faster?",
              "At night, which process cannot happen?",
            ],
          },
          {
            id: "bio-gas-respiration-bq2-09",
            question: "Hydrogencarbonate indicator changes colour with carbon dioxide concentration: it is purple at low CO₂, orange-red at atmospheric CO₂, and yellow at high CO₂. A student places pondweed and indicator in four sealed tubes and exposes them to different light intensities: A (bright), B (dim), C (very dim), D (dark). (a) Predict the indicator colour in tubes A and D, and explain each prediction. (4 marks) (b) Tube C stays orange-red (unchanged). Explain what this tells you about the rates of photosynthesis and respiration in tube C. (2 marks)",
            marks: 6,
            modelAnswer: "(a) Tube A (bright light): the colour turns purple. In bright light photosynthesis is much faster than respiration, so the pondweed removes more CO₂ than it produces, lowering the CO₂ concentration and turning the indicator purple. Tube D (dark): the colour turns yellow. With no light there is no photosynthesis, so only respiration occurs; this releases CO₂, raising the CO₂ concentration and turning the indicator yellow. (b) Tube C staying orange-red (unchanged) shows the CO₂ concentration is constant. This means the rate of photosynthesis exactly equals the rate of respiration — the CO₂ produced by respiration is exactly used up by photosynthesis. This is the compensation point.",
            markScheme: [
              "Tube A: purple",
              "A: photosynthesis > respiration → net CO₂ removed / CO₂ falls",
              "Tube D: yellow",
              "D: no photosynthesis, only respiration → CO₂ released / rises",
              "Tube C: rate of photosynthesis = rate of respiration",
              "No net change in CO₂ / compensation point",
            ],
            commonError: "Forgetting that respiration continues in the light — in bright light the net CO₂ change is the DIFFERENCE between photosynthesis and respiration, not photosynthesis alone.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "challenge",
            hints: [
              "Purple = low CO₂, yellow = high CO₂.",
              "In bright light, which process dominates and what does it do to CO₂?",
              "In the dark, only one process occurs — which, and what does it do to CO₂?",
              "If the colour does not change, the two opposing rates must be equal.",
            ],
          },
          {
            id: "bio-gas-respiration-bq2-10",
            question: "The diffusion distance across a healthy alveolar membrane is about 1 µm. In a patient with lung fibrosis, scar tissue thickens this to about 4 µm. The total surface area for exchange also falls from 70 m² to about 49 m². Assuming the rate of diffusion is proportional to (surface area ÷ diffusion distance), calculate how many times slower the patient's gas exchange is compared with a healthy person. Show your working. (4 marks)",
            marks: 4,
            modelAnswer: "Healthy: rate ∝ surface area ÷ distance = 70 ÷ 1 = 70 (arbitrary units). Patient: rate ∝ 49 ÷ 4 = 12.25 (arbitrary units). Ratio = healthy ÷ patient = 70 ÷ 12.25 = 5.71, which is about 5.7 times. So the patient's gas exchange is roughly 5.7 times slower than a healthy person's. (The thicker membrane alone slows it 4×, and the reduced area contributes a further factor of 70/49 ≈ 1.43; 4 × 1.43 ≈ 5.7.)",
            markScheme: [
              "Healthy rate ∝ 70 ÷ 1 = 70 (units)",
              "Patient rate ∝ 49 ÷ 4 = 12.25 (units)",
              "Ratio = 70 ÷ 12.25",
              "≈ 5.7 times slower",
            ],
            commonError: "Only accounting for the thicker membrane (factor of 4) and forgetting the reduced surface area, or multiplying instead of correctly combining both factors.",
            guideRef: "Alveoli — Adaptations for Gas Exchange",
            difficulty: "challenge",
            hints: [
              "Use rate ∝ surface area ÷ distance for each case.",
              "Healthy: 70 ÷ 1. Patient: 49 ÷ 4.",
              "Divide the healthy rate by the patient rate to get the factor.",
              "70 ÷ 12.25 ≈ 5.7.",
            ],
            solutions: [
              {
                label: "Method: combine surface area and distance",
                steps: [
                  "Rate ∝ surface area ÷ diffusion distance",
                  "Healthy: 70 m² ÷ 1 µm = 70 (arbitrary units)",
                  "Patient: 49 m² ÷ 4 µm = 12.25 (arbitrary units)",
                  "Factor slower = 70 ÷ 12.25 = 5.71",
                  "≈ 5.7 times slower",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "bio-gas-respiration-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Aerobic and anaerobic respiration, fermentation, energy and ATP.",
        questions: [
          {
            id: "bio-gas-respiration-bq3-01",
            question: "Write the word equation and the balanced symbol equation for aerobic respiration. (3 marks)",
            marks: 3,
            modelAnswer: "Word equation: glucose + oxygen → carbon dioxide + water (+ energy released). Balanced symbol equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O.",
            markScheme: [
              "glucose + oxygen → carbon dioxide + water",
              "C₆H₁₂O₆ + 6O₂ → ...",
              "... → 6CO₂ + 6H₂O (fully balanced)",
            ],
            commonError: "Writing 'energy' as a chemical product in the symbol equation — energy is released but is not a balanced chemical species.",
            guideRef: "Aerobic Respiration",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bq3-02",
            question: "Define aerobic respiration and state where in the cell it mainly takes place. (2 marks)",
            marks: 2,
            modelAnswer: "Aerobic respiration is the chemical reactions in cells that use oxygen to break down (oxidise) glucose completely, releasing a large amount of energy. It takes place mainly in the mitochondria.",
            markScheme: [
              "Use of oxygen to break down / oxidise glucose, releasing energy",
              "Occurs in the mitochondria",
            ],
            commonError: "Saying it occurs in the cytoplasm — that is where anaerobic respiration occurs; aerobic respiration is mainly in mitochondria.",
            guideRef: "Aerobic Respiration",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bq3-03",
            question: "Compare anaerobic respiration in human muscle with anaerobic respiration in yeast. State the products of each and one commercial use of the yeast process. (4 marks)",
            marks: 4,
            modelAnswer: "In human muscle, anaerobic respiration produces lactic acid (glucose → lactic acid). In yeast, anaerobic respiration (fermentation) produces ethanol and carbon dioxide (C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂). A commercial use of the yeast process is brewing (making beer or wine, where ethanol is the desired product) or baking (where the CO₂ makes bread dough rise).",
            markScheme: [
              "Human muscle product: lactic acid",
              "Yeast products: ethanol and carbon dioxide",
              "Yeast equation C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (or word equation)",
              "Commercial use: brewing / baking / biofuel (any one)",
            ],
            commonError: "Saying human muscle produces 'ethanol and CO₂' — that is the yeast product; human muscle makes lactic acid.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "core",
            hints: [
              "What single product does human muscle make anaerobically?",
              "What two products does yeast make?",
              "Where is yeast fermentation used in food/drink production?",
            ],
          },
          {
            id: "bio-gas-respiration-bq3-04",
            question: "Explain why anaerobic respiration releases far less energy per glucose molecule than aerobic respiration. (3 marks)",
            marks: 3,
            modelAnswer: "Aerobic respiration completely oxidises glucose, breaking all of its bonds and releasing nearly all of its stored chemical energy as the glucose is converted to carbon dioxide and water (≈2870 kJ per mole). Anaerobic respiration only partially breaks down glucose without oxygen; the products (lactic acid in humans, or ethanol in yeast) still contain a large amount of chemical energy locked in their bonds. Because much of the energy remains in these products and is not released, anaerobic respiration yields far less usable energy per glucose molecule.",
            markScheme: [
              "Aerobic fully oxidises / completely breaks down glucose",
              "Anaerobic only partially breaks down glucose",
              "Products (lactic acid / ethanol) still contain unreleased chemical energy",
            ],
            commonError: "Saying anaerobic respiration is 'less efficient because it is slower' — the energy difference is about how completely glucose is broken down, not the speed.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "core",
            hints: [
              "How completely is glucose broken down in each pathway?",
              "Do the anaerobic products still hold chemical energy?",
              "Energy left in lactic acid / ethanol is energy NOT released.",
            ],
          },
          {
            id: "bio-gas-respiration-bq3-05",
            question: "During a 100 m sprint an athlete's muscles respire anaerobically. (a) Explain why the muscles switch to anaerobic respiration even though oxygen is available in the air. (2 marks) (b) Explain what is meant by 'oxygen debt' and how it is repaid after the sprint. (3 marks)",
            marks: 5,
            modelAnswer: "(a) During a sprint the muscles need energy (ATP) extremely quickly. Even though oxygen is in the air, the heart and lungs cannot deliver oxygen to the muscles fast enough to supply all the energy aerobically. To make up the shortfall, the muscles also respire anaerobically, which does not need oxygen. (b) The oxygen debt is the extra oxygen that must be taken in after exercise to deal with the lactic acid that built up during anaerobic respiration. After the sprint, the athlete keeps breathing deeply and rapidly so that extra oxygen is supplied; this oxygen is used to oxidise the lactic acid (breaking it down to CO₂ and water, or converting it back to glucose in the liver). Breathing returns to normal once the lactic acid has been removed.",
            markScheme: [
              "Muscles need energy/ATP very fast",
              "Oxygen cannot be delivered fast enough for aerobic respiration alone",
              "Oxygen debt = extra O₂ needed (after exercise) to break down lactic acid",
              "Extra O₂ taken in by continued deep/fast breathing",
              "O₂ used to oxidise lactic acid / convert it back to glucose in the liver",
            ],
            commonError: "Saying there is 'no oxygen' during a sprint — oxygen is present, but it cannot be delivered fast enough to meet demand.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "core",
            hints: [
              "Is the problem that there is no oxygen, or that it cannot arrive fast enough?",
              "What builds up in muscles during anaerobic respiration?",
              "Oxygen debt is the extra O₂ needed afterwards — for what purpose?",
              "How is that extra oxygen supplied after exercise?",
            ],
          },
          {
            id: "bio-gas-respiration-bq3-06",
            question: "A student investigates respiration in germinating peas. She places germinating peas in a sealed flask with a tube leading to a drop of coloured liquid in a capillary tube, and a chemical that absorbs CO₂ in the flask. The coloured drop moves toward the flask over time. (a) Explain why the drop moves toward the flask. (3 marks) (b) State two variables she should control to make her results valid. (2 marks) (c) Suggest a suitable control experiment. (1 mark)",
            marks: 6,
            modelAnswer: "(a) The germinating peas respire aerobically, using up oxygen from the air in the flask. The carbon dioxide they produce is absorbed by the chemical, so it does not replace the lost oxygen. As oxygen is removed, the volume (and pressure) of gas in the flask decreases, so the coloured drop is drawn toward the flask. The distance moved indicates the volume of oxygen used. (b) Any two of: temperature; mass/number of peas; volume of the flask/apparatus; time allowed; same species/stage of germination. (c) A control with the same apparatus but using dead (e.g. boiled) peas, or glass beads of the same volume instead of peas — the drop should not move, showing the movement is due to living respiration.",
            markScheme: [
              "Peas use up oxygen in respiration",
              "CO₂ produced is absorbed by the chemical / not replaced",
              "Gas volume/pressure in flask falls → drop drawn toward flask",
              "Two controlled variables (temperature / mass or number of peas / volume / time)",
              "Control: dead/boiled peas or glass beads (no movement expected)",
            ],
            commonError: "Forgetting the role of the CO₂ absorber — without it, the CO₂ released would replace the oxygen used and the drop would not move.",
            guideRef: "Aerobic Respiration",
            difficulty: "challenge",
            hints: [
              "What gas do the respiring peas remove from the air?",
              "Why is a CO₂ absorber needed — what would happen without it?",
              "Removing gas lowers the pressure inside — which way does the drop move?",
              "A control should use non-living material to show the effect is due to respiration.",
            ],
          },
          {
            id: "bio-gas-respiration-bq3-07",
            question: "Yeast is mixed with glucose solution in a flask and sealed under a layer of oil. Carbon dioxide is collected over 20 minutes. (a) Explain the purpose of the layer of oil. (2 marks) (b) Write the balanced symbol equation for the reaction occurring. (1 mark) (c) The flask produces 30 cm³ of CO₂ in 20 minutes. Calculate the mean rate of CO₂ production in cm³ per minute. (1 mark)",
            marks: 4,
            modelAnswer: "(a) The layer of oil seals the surface of the liquid and prevents air (oxygen) from reaching the yeast. This keeps the conditions anaerobic, so the yeast carries out fermentation (rather than aerobic respiration), producing ethanol and CO₂. (b) C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. (c) Mean rate = 30 cm³ ÷ 20 min = 1.5 cm³ min⁻¹.",
            markScheme: [
              "Oil prevents oxygen / air reaching the yeast",
              "Keeps conditions anaerobic → fermentation occurs",
              "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",
              "Rate = 30 ÷ 20 = 1.5 cm³ min⁻¹",
            ],
            commonError: "Saying the oil 'keeps the yeast warm' — its purpose is to exclude oxygen and keep conditions anaerobic.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "core",
            hints: [
              "What does the oil layer keep out?",
              "No oxygen means which type of respiration?",
              "Rate = total volume ÷ total time.",
            ],
            solutions: [
              {
                label: "Method: mean rate of CO₂ production",
                steps: [
                  "Mean rate = total volume of CO₂ ÷ total time",
                  "= 30 cm³ ÷ 20 min",
                  "= 1.5 cm³ min⁻¹",
                ],
              },
            ],
          },
          {
            id: "bio-gas-respiration-bq3-08",
            question: "When 1 mole of glucose is respired aerobically it releases about 2870 kJ of energy; when respired anaerobically by yeast it releases about 118 kJ. (a) Calculate how many times more energy aerobic respiration releases than anaerobic respiration, per mole of glucose. (1 mark) (b) Suggest, in terms of survival, one advantage to an organism of being able to respire anaerobically despite the lower energy yield. (2 marks)",
            marks: 3,
            modelAnswer: "(a) 2870 ÷ 118 = 24.3, so aerobic respiration releases about 24 times more energy per mole of glucose. (b) Anaerobic respiration allows the organism to keep releasing some energy and stay alive when oxygen is scarce or absent — for example, muscles during intense exercise, or yeast/plant roots in oxygen-poor (waterlogged) conditions. Without it, energy release would stop completely when oxygen ran out.",
            markScheme: [
              "2870 ÷ 118 = 24.3 ≈ 24 times more",
              "Anaerobic respiration works without oxygen",
              "Allows survival/energy release when oxygen is scarce/absent (with example)",
            ],
            commonError: "Saying anaerobic respiration is 'better' — it yields far less energy; its advantage is only that it works without oxygen.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "core",
            hints: [
              "Divide the aerobic yield by the anaerobic yield.",
              "2870 ÷ 118 ≈ 24.",
              "For (b): what situations have little or no oxygen?",
            ],
            solutions: [
              {
                label: "Method: energy ratio",
                steps: [
                  "Ratio = aerobic yield ÷ anaerobic yield",
                  "= 2870 kJ ÷ 118 kJ",
                  "= 24.3, i.e. about 24 times more energy",
                ],
              },
            ],
          },
          {
            id: "bio-gas-respiration-bq3-09",
            question: "A sealed bioreactor contains yeast respiring a sugar solution. Initially oxygen is present, then it runs out. (a) Describe how the products of respiration change as the oxygen runs out. (3 marks) (b) Per mole of glucose, explain how the amount of carbon dioxide produced changes when the yeast switches from aerobic to anaerobic respiration. (3 marks)",
            marks: 6,
            modelAnswer: "(a) While oxygen is present, the yeast respires aerobically: glucose + oxygen → carbon dioxide + water, so the products are CO₂ and water. Once the oxygen runs out, the yeast switches to anaerobic respiration (fermentation): glucose → ethanol + carbon dioxide, so the products become ethanol and CO₂ (and water is no longer produced). Ethanol therefore begins to accumulate in the bioreactor. (b) Aerobic respiration produces 6 moles of CO₂ per mole of glucose (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O), whereas anaerobic fermentation produces only 2 moles of CO₂ per mole of glucose (C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂). So, for each mole of glucose used, the amount of CO₂ produced falls from 6 moles to 2 moles — a drop to one third of the aerobic amount.",
            markScheme: [
              "With O₂: products are CO₂ and water (aerobic)",
              "Without O₂: switches to fermentation / products become ethanol and CO₂",
              "Ethanol accumulates / no more water produced",
              "Aerobic: 6 mol CO₂ per mol glucose",
              "Anaerobic: 2 mol CO₂ per mol glucose",
              "CO₂ per glucose falls to one third (from 6 to 2)",
            ],
            commonError: "Claiming CO₂ production stops when oxygen runs out — fermentation still produces CO₂, just less per glucose (2 instead of 6).",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "challenge",
            hints: [
              "Write both equations: aerobic and fermentation.",
              "Which product appears (ethanol) and which disappears (water) after the switch?",
              "Count the CO₂ coefficient in each equation.",
              "Compare 6 mol with 2 mol per glucose.",
            ],
          },
          {
            id: "bio-gas-respiration-bq3-10",
            question: "Some bacteria living deep in waterlogged mud respire anaerobically. A student claims: 'Because these bacteria get so little energy from each glucose molecule, they must be at a serious disadvantage compared with aerobic organisms.' Discuss this claim, giving arguments for and against. (5 marks)",
            marks: 5,
            modelAnswer: "For the claim: anaerobic respiration releases far less energy per glucose molecule than aerobic respiration (about 24 times less), because glucose is only partially broken down. To obtain the same amount of energy, an anaerobic organism must consume much more glucose, so it may grow more slowly and could be out-competed where oxygen and food are plentiful.\n\nAgainst the claim: in waterlogged mud there is little or no oxygen, so aerobic organisms cannot survive there at all. The anaerobic bacteria are well suited to this habitat and have no competition from aerobes, so their lower energy yield is not a disadvantage in that environment. They can also continue to release energy and reproduce where aerobic organisms would die.\n\nConclusion: the low energy yield is only a disadvantage where oxygen is available; in oxygen-poor habitats the ability to respire anaerobically is actually a major advantage. So the claim is only partly correct — it depends on the environment.",
            markScheme: [
              "For: anaerobic releases much less energy per glucose / must use more glucose",
              "For: may grow slowly / be out-competed where oxygen is available",
              "Against: in waterlogged mud there is little/no oxygen",
              "Against: aerobes cannot survive there, so no competition / bacteria well adapted",
              "Balanced conclusion: disadvantage only where oxygen is available / depends on environment",
            ],
            commonError: "Giving a one-sided answer — a 'discuss' question needs arguments BOTH for and against, plus a conclusion.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "challenge",
            hints: [
              "For the claim: how much less energy does anaerobic respiration give, and what does that mean for growth?",
              "Against the claim: what is special about the bacteria's habitat?",
              "Could aerobic organisms even live in waterlogged mud?",
              "End with a conclusion that depends on the environment.",
            ],
            strategy: "‘Discuss’ questions: present the case FOR, then the case AGAINST, then a reasoned conclusion.",
          },
        ],
      },
      {
        id: "bio-gas-respiration-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Exercise, oxygen debt, breathing data, plant gas exchange and light.",
        questions: [
          {
            id: "bio-gas-respiration-bq4-01",
            question: "State two changes to a person's breathing that occur during vigorous exercise. (2 marks)",
            marks: 2,
            modelAnswer: "The breathing rate increases (more breaths per minute) and the depth of breathing increases (a larger volume of air, or tidal volume, is breathed in and out with each breath).",
            markScheme: [
              "Breathing rate increases / more breaths per minute",
              "Depth of breathing / tidal volume increases",
            ],
            commonError: "Giving only one change (rate) — the depth of each breath also increases, and both are needed.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "warmup",
          },
          {
            id: "bio-gas-respiration-bq4-02",
            question: "Explain why both the breathing rate and the heart rate increase during exercise. (4 marks)",
            marks: 4,
            modelAnswer: "During exercise the muscles respire faster and so need more oxygen and glucose and produce more carbon dioxide. Breathing rate increases so that more oxygen is taken into the blood at the lungs and more carbon dioxide is removed from the blood. Heart rate increases so that blood is pumped around the body faster, delivering the extra oxygen and glucose to the working muscles more quickly and carrying the extra carbon dioxide away to the lungs. The rise in blood carbon dioxide (and fall in pH) is detected by receptors, which trigger these increases.",
            markScheme: [
              "Muscles respire faster / need more oxygen / produce more CO₂",
              "Faster breathing takes in more O₂ and removes more CO₂ at the lungs",
              "Faster heart rate delivers O₂/glucose to muscles and removes CO₂ more quickly",
              "Rise in CO₂ / fall in pH detected and triggers the increases",
            ],
            commonError: "Explaining only the breathing change and not linking the heart rate to faster transport of oxygen and removal of CO₂.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "What do exercising muscles need more of, and produce more of?",
              "How does faster breathing help with these needs?",
              "How does a faster heart rate help deliver and remove substances?",
              "What change in the blood triggers these responses?",
            ],
          },
          {
            id: "bio-gas-respiration-bq4-03",
            question: "Describe how rising carbon dioxide levels in the blood lead to an increase in breathing rate. (3 marks)",
            marks: 3,
            modelAnswer: "When muscles respire more during exercise, they release more carbon dioxide into the blood. The carbon dioxide dissolves in the blood plasma to form a weak acid, which lowers the blood pH. Chemoreceptors (in the brain and in the walls of major arteries) detect this rise in CO₂ / fall in pH. They send nerve impulses to the diaphragm and intercostal muscles, causing them to contract more frequently and more strongly, so the breathing rate and depth increase. This removes the excess CO₂ and restores normal blood pH.",
            markScheme: [
              "CO₂ dissolves in blood / forms acid / lowers blood pH",
              "Chemoreceptors detect the rise in CO₂ / fall in pH",
              "Nerve impulses make breathing muscles contract more / faster → breathing rate increases",
            ],
            commonError: "Saying the body detects 'low oxygen' as the main trigger — the primary stimulus detected is the rise in carbon dioxide / fall in pH.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "What does dissolved CO₂ do to the pH of blood?",
              "What kind of receptor detects this chemical change?",
              "What do these receptors signal the breathing muscles to do?",
            ],
          },
          {
            id: "bio-gas-respiration-bq4-04",
            question: "A student measures her pulse rate before and after exercise. At rest it is 72 beats per minute; immediately after exercise it is 144 beats per minute; after 3 minutes of rest it returns to 90 beats per minute. (a) Calculate the percentage increase in pulse rate from rest to immediately after exercise. Show your working. (2 marks) (b) Explain why the pulse rate does not return to the resting value immediately after exercise stops. (2 marks)",
            marks: 4,
            modelAnswer: "(a) Increase = 144 − 72 = 72 beats per minute. Percentage increase = (72 / 72) × 100 = 100%. (b) After exercise, lactic acid produced during anaerobic respiration is still present in the blood and muscles. Extra oxygen is needed to break this lactic acid down (repaying the oxygen debt), so the heart continues to beat faster than resting to keep delivering oxygen to the tissues and removing carbon dioxide. Only once the lactic acid has been removed and conditions return to normal does the pulse return to the resting rate.",
            markScheme: [
              "Increase = 144 − 72 = 72 bpm",
              "Percentage increase = (72 / 72) × 100 = 100%",
              "Lactic acid / oxygen debt still has to be repaid after exercise",
              "Heart keeps beating fast to deliver extra O₂ / remove CO₂ until recovery complete",
            ],
            commonError: "In percentage increase, dividing by the post-exercise value rather than the resting (original) value.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "Percentage increase = (change ÷ original) × 100.",
              "The original value here is the resting pulse, 72.",
              "For (b): what built up during exercise that still needs dealing with?",
              "Repaying the oxygen debt keeps the heart and lungs working hard.",
            ],
            solutions: [
              {
                label: "Method: percentage increase in pulse",
                steps: [
                  "Change = 144 − 72 = 72 bpm",
                  "Percentage increase = (change ÷ original) × 100",
                  "= (72 ÷ 72) × 100",
                  "= 100%",
                ],
              },
            ],
          },
          {
            id: "bio-gas-respiration-bq4-05",
            question: "The table shows the breathing of a person at three activity levels.\n\nResting: 12 breaths/min, tidal volume 500 cm³. Walking: 18 breaths/min, tidal volume 1000 cm³. Running: 30 breaths/min, tidal volume 2500 cm³.\n\n(a) Calculate the minute ventilation (cm³ per minute) for each activity level. (3 marks) (b) Using your figures, describe how minute ventilation changes with activity level. (1 mark) (c) Explain why minute ventilation must increase during running. (2 marks)",
            marks: 6,
            modelAnswer: "(a) Minute ventilation = breathing rate × tidal volume. Resting: 12 × 500 = 6000 cm³ min⁻¹. Walking: 18 × 1000 = 18 000 cm³ min⁻¹. Running: 30 × 2500 = 75 000 cm³ min⁻¹. (b) As activity level increases, minute ventilation increases (and it increases by a larger and larger amount — from 6000 to 18 000 to 75 000 cm³ min⁻¹). (c) During running the muscles respire much faster, so they need oxygen delivered much more quickly and produce much more carbon dioxide. Increasing the minute ventilation supplies the extra oxygen and removes the extra carbon dioxide fast enough to meet the muscles' increased demand.",
            markScheme: [
              "Resting: 12 × 500 = 6000 cm³ min⁻¹",
              "Walking: 18 × 1000 = 18 000 cm³ min⁻¹",
              "Running: 30 × 2500 = 75 000 cm³ min⁻¹",
              "Minute ventilation increases with activity level",
              "Running muscles need more O₂ / produce more CO₂",
              "Higher ventilation supplies O₂ and removes CO₂ to meet demand",
            ],
            commonError: "Forgetting to multiply rate by tidal volume — minute ventilation is NOT just the breathing rate.",
            guideRef: "Ventilation — Breathing In and Out",
            difficulty: "core",
            hints: [
              "Minute ventilation = breathing rate × tidal volume.",
              "Multiply the two columns for each activity.",
              "For (c): what do running muscles need more of and produce more of?",
            ],
            solutions: [
              {
                label: "Method: minute ventilation for each activity",
                steps: [
                  "Minute ventilation = breathing rate × tidal volume",
                  "Resting: 12 × 500 = 6000 cm³ min⁻¹",
                  "Walking: 18 × 1000 = 18 000 cm³ min⁻¹",
                  "Running: 30 × 2500 = 75 000 cm³ min⁻¹",
                ],
              },
            ],
          },
          {
            id: "bio-gas-respiration-bq4-06",
            question: "A leaf exchanges gases with the air. (a) Name the small pores through which gases enter and leave a leaf, and the cells that control them. (2 marks) (b) Explain why these pores are usually more numerous on the lower surface of a leaf than the upper surface. (2 marks)",
            marks: 4,
            modelAnswer: "(a) The pores are stomata (singular: stoma), and they are controlled by guard cells, which change shape to open and close the pore. (b) The lower surface is usually cooler and more shaded than the upper surface, which is exposed to direct sunlight. Having more stomata on the lower surface reduces water loss by evaporation (transpiration), because evaporation is slower on the cooler, shaded underside, while still allowing enough gas exchange (CO₂ in for photosynthesis, O₂ out).",
            markScheme: [
              "Pores are stomata",
              "Controlled by guard cells",
              "Lower surface is cooler / more shaded / less direct sunlight",
              "Reduces water loss / transpiration while still allowing gas exchange",
            ],
            commonError: "Saying stomata are on the underside 'to catch more light' — light is captured by the upper surface; the lower position reduces water loss.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "What are the leaf pores called and what controls them?",
              "Compare the temperature and light on the upper vs lower surface.",
              "Which surface loses water faster, and how does the stomata position reduce this?",
            ],
          },
          {
            id: "bio-gas-respiration-bq4-07",
            question: "Explain how the net exchange of carbon dioxide by a leaf changes as light intensity increases from darkness to bright sunlight. Refer to both respiration and photosynthesis. (4 marks)",
            marks: 4,
            modelAnswer: "In darkness, photosynthesis does not occur, but the leaf still respires, releasing carbon dioxide; so there is a net release of CO₂. As light intensity increases, photosynthesis begins and speeds up, using carbon dioxide; the net release of CO₂ falls. At one particular light intensity — the compensation point — the rate of photosynthesis exactly equals the rate of respiration, so the CO₂ produced by respiration is all used by photosynthesis and there is no net exchange of CO₂. As light intensity increases further toward bright sunlight, photosynthesis becomes faster than respiration, so the leaf uses more CO₂ than it produces — there is a net uptake of CO₂.",
            markScheme: [
              "In darkness: only respiration → net release of CO₂",
              "As light increases, photosynthesis speeds up / uses CO₂",
              "At compensation point: photosynthesis rate = respiration rate / no net exchange",
              "In bright light: photosynthesis > respiration → net uptake of CO₂",
            ],
            commonError: "Forgetting that respiration continues at all light intensities — the NET exchange is the balance between photosynthesis and respiration.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "challenge",
            hints: [
              "In the dark, which process happens and what does it do to CO₂?",
              "As light increases, which process starts to use CO₂?",
              "There is a point where the two rates are equal — what is it called?",
              "In bright light, which process wins, and is CO₂ taken up or released?",
            ],
          },
          {
            id: "bio-gas-respiration-bq4-08",
            question: "A fit athlete and an unfit person both run on a treadmill until tired. The athlete recovers to her resting pulse rate much faster than the unfit person. Suggest and explain two reasons for this difference. (4 marks)",
            marks: 4,
            modelAnswer: "First, the fit athlete has a stronger, more efficient heart and better lung function, so she can deliver oxygen to her muscles more quickly during exercise. This means more of her energy is supplied by aerobic respiration and she produces less lactic acid, giving her a smaller oxygen debt to repay, so her pulse returns to resting more quickly. Second, the athlete's circulatory and breathing systems remove lactic acid and carbon dioxide and resupply oxygen more efficiently during recovery, so the oxygen debt she does have is repaid faster. As a result, the conditions in her blood (CO₂, pH, lactic acid) return to normal sooner, and her heart rate falls back to resting more rapidly.",
            markScheme: [
              "Athlete delivers oxygen faster / more efficient heart and lungs",
              "More aerobic respiration / less lactic acid / smaller oxygen debt",
              "More efficient removal of lactic acid and CO₂ during recovery",
              "Blood conditions return to normal sooner → faster recovery of pulse",
            ],
            commonError: "Just stating 'she is fitter' without explaining HOW fitness leads to a smaller oxygen debt and faster recovery.",
            guideRef: "Anaerobic Respiration — Humans & Yeast",
            difficulty: "challenge",
            hints: [
              "What keeps the pulse elevated after exercise?",
              "How does better fitness change how much lactic acid builds up?",
              "A smaller oxygen debt is repaid in less time.",
              "Link efficient recovery to blood conditions returning to normal.",
            ],
          },
          {
            id: "bio-gas-respiration-bq4-09",
            question: "Water plants release bubbles of gas when placed in bright light. A student counts 40 bubbles per minute at a lamp distance of 10 cm and 10 bubbles per minute at 20 cm. (a) The gas in the bubbles is mostly one gas — name it and the process producing it. (2 marks) (b) Suggest why moving the lamp from 10 cm to 20 cm reduces the bubble rate. (2 marks) (c) The student assumes bubble count is a fair measure of photosynthesis rate. State one limitation of this assumption. (1 mark)",
            marks: 5,
            modelAnswer: "(a) The gas is oxygen, produced by photosynthesis. (b) Moving the lamp from 10 cm to 20 cm reduces the light intensity reaching the plant (light intensity decreases with distance from the lamp). With less light, the rate of photosynthesis falls, so less oxygen is produced per minute and fewer bubbles are released. (c) Any one: the bubbles may not all be the same size, so counting them does not accurately measure the volume of gas produced; some oxygen may dissolve in the water rather than form bubbles; the gas also contains a little CO₂/other gases, so it is not pure oxygen.",
            markScheme: [
              "Gas is oxygen",
              "Produced by photosynthesis",
              "Greater distance → lower light intensity",
              "Lower light intensity → slower photosynthesis → fewer bubbles",
              "Limitation: bubbles vary in size / some O₂ dissolves / not pure O₂ (any one)",
            ],
            commonError: "Saying the bubbles are carbon dioxide — in the light the gas given off in excess is oxygen from photosynthesis.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "core",
            hints: [
              "In bright light, which gas does a plant produce in excess?",
              "How does light intensity change as the lamp moves further away?",
              "Less light → what happens to the rate of photosynthesis?",
              "For (c): are all bubbles the same size? Does all the gas escape?",
            ],
          },
          {
            id: "bio-gas-respiration-bq4-10",
            question: "In an experiment, a small animal and a germinating plant are sealed together in a closed, illuminated container with sensors. Over several hours the oxygen and carbon dioxide levels stay almost constant. (a) Explain how the activities of the animal and the plant could keep these gas levels almost constant. (3 marks) (b) Predict and explain what would happen to the gas levels if the container were moved into complete darkness. (3 marks)",
            marks: 6,
            modelAnswer: "(a) The animal respires, using up oxygen and releasing carbon dioxide. In the light, the plant photosynthesises, using up carbon dioxide and releasing oxygen (the plant also respires, but in bright light photosynthesis dominates). If the rate at which the plant produces oxygen and uses carbon dioxide roughly matches the rate at which the animal uses oxygen and produces carbon dioxide, then the two processes balance: oxygen and carbon dioxide are recycled between the organisms and their levels stay almost constant. (b) In complete darkness the plant can no longer photosynthesise, so it stops producing oxygen and using carbon dioxide; however, both the plant and the animal continue to respire. Therefore oxygen is used up (its level falls) and carbon dioxide is released (its level rises) by both organisms, with nothing to replace the oxygen or remove the carbon dioxide.",
            markScheme: [
              "Animal respires: uses O₂, releases CO₂",
              "Plant photosynthesises in light: uses CO₂, releases O₂",
              "Rates balance / gases recycled → levels stay constant",
              "In dark: plant cannot photosynthesise / stops producing O₂",
              "Both organisms still respire",
              "O₂ level falls and CO₂ level rises",
            ],
            commonError: "Forgetting that the plant respires too — in the dark BOTH organisms use oxygen and release carbon dioxide.",
            guideRef: "Inspired vs Expired Air & Experimental Tests",
            difficulty: "challenge",
            hints: [
              "What gases does the animal use and produce?",
              "In the light, what gases does the plant use and produce?",
              "For levels to stay constant, the two sets of rates must balance.",
              "In the dark, photosynthesis stops but respiration continues in both organisms.",
            ],
          },
        ],
      },
    ],
  },
};
