import type { Topic } from "../types";

export const bioCells: Topic = {
  id: "bio-cells",
  title: "Cell Structure & Organisation",
  subject: "biology",
  icon: "🔬",
  blurb: "Animal, plant and bacterial cell structure, specialised cells, levels of organisation, and magnification calculations.",
  intro: "Every living thing is made of cells — the smallest units of life. Understanding how cells are built, how they differ between animals, plants and bacteria, and how they specialise for particular jobs is the foundation of all IGCSE Biology. In this topic you will master cell ultrastructure, compare cell types, explore remarkable specialised cells, and learn to calculate magnification and actual size with confidence.",

  guide: [
    {
      heading: "Animal Cell Structure",
      body: `All animal cells share a set of core organelles. The **nucleus** contains chromosomes made of DNA and controls the cell's activities, including protein synthesis. It is surrounded by a double membrane called the nuclear envelope. The **cytoplasm** is the jelly-like fluid that fills the cell and is the site of many chemical reactions. The **cell membrane** (plasma membrane) controls the movement of substances into and out of the cell — it is selectively permeable. **Mitochondria** are the sites of aerobic respiration, releasing energy in the form of ATP; they have a folded inner membrane (cristae) that increases surface area. **Ribosomes** are tiny structures found on the endoplasmic reticulum or free in the cytoplasm; they are the sites of protein synthesis.

Animal cells do NOT have a cell wall, chloroplasts, or a permanent large vacuole. This distinguishes them sharply from plant cells.`,
      diagrams: [
        {
          caption: "Typical animal cell — labelled organelles",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Labelled diagram of a typical animal cell showing nucleus, cytoplasm, cell membrane, mitochondria and ribosomes">
  <!-- cell outline -->
  <ellipse cx="155" cy="100" rx="130" ry="85" fill="#1e2a3a" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- nucleus -->
  <ellipse cx="140" cy="95" rx="38" ry="28" fill="#2d1f4a" stroke="#a78bfa" stroke-width="2"/>
  <text x="122" y="99" font-size="9" fill="#a78bfa" font-family="sans-serif">Nucleus</text>
  <!-- mitochondrion 1 -->
  <ellipse cx="220" cy="75" rx="22" ry="11" fill="#1a2e20" stroke="#34d399" stroke-width="1.8"/>
  <path d="M204 75 Q212 68 220 75 Q228 82 236 75" fill="none" stroke="#34d399" stroke-width="1.2"/>
  <text x="200" y="64" font-size="8" fill="#34d399" font-family="sans-serif">Mitochondrion</text>
  <!-- mitochondrion 2 -->
  <ellipse cx="85" cy="140" rx="18" ry="9" fill="#1a2e20" stroke="#34d399" stroke-width="1.5"/>
  <!-- ribosomes dots -->
  <circle cx="190" cy="115" r="3" fill="#fbbf24"/>
  <circle cx="198" cy="125" r="3" fill="#fbbf24"/>
  <circle cx="175" cy="130" r="3" fill="#fbbf24"/>
  <text x="202" y="130" font-size="8" fill="#fbbf24" font-family="sans-serif">Ribosomes</text>
  <!-- cell membrane label -->
  <text x="258" y="100" font-size="8" fill="#38bdf8" font-family="sans-serif">Cell</text>
  <text x="252" y="110" font-size="8" fill="#38bdf8" font-family="sans-serif">membrane</text>
  <line x1="252" y1="104" x2="284" y2="115" stroke="#38bdf8" stroke-width="0.8"/>
  <!-- cytoplasm label -->
  <text x="108" y="148" font-size="8" fill="#b7bce0" font-family="sans-serif">Cytoplasm</text>
</svg>`
        }
      ],
      keyPoints: [
        "The nucleus houses DNA and directs all cellular activities.",
        "The cell membrane is selectively permeable, controlling entry and exit of substances.",
        "Mitochondria are the sites of aerobic respiration and ATP production.",
        "Ribosomes synthesise proteins by translating mRNA.",
        "Animal cells lack a cell wall, chloroplasts and permanent vacuole."
      ],
      discovery: {
        problem: "Before reading on: a cell needs to release energy to move a muscle. Which organelle does the work, and why does it have a folded inner membrane? Sketch your idea.",
        idea: "Mitochondria carry out aerobic respiration. The folded inner membrane (cristae) dramatically increases surface area for the enzymes that produce ATP, boosting energy output — more folds, more ATP."
      },
      whyItWorks: "Folding the inner mitochondrial membrane into cristae multiplies the surface available for ATP synthase enzymes without increasing the organelle's overall size. This is the same principle as villi in the gut — more surface area means a faster rate of the key process.",
      strategies: ["Draw and label from memory", "Compare to plant cell"]
    },

    {
      heading: "Plant Cell Structure",
      body: `Plant cells contain all the organelles found in animal cells **plus** three additional structures that are unique to (or characteristic of) plants:

- **Cell wall** — a rigid outer layer made of cellulose that surrounds the cell membrane. It provides structural support and prevents the cell from bursting when full of water (turgid).
- **Chloroplasts** — disc-shaped organelles containing the green pigment chlorophyll. They are the sites of photosynthesis and contain a system of internal membranes (thylakoids) to maximise light absorption.
- **Permanent sap vacuole** — a large, membrane-bound sac (tonoplast) filled with cell sap (a solution of sugars, salts and pigments). It keeps the cell turgid and can store useful substances.

Not all plant cells have chloroplasts — root cells, for example, are underground and have no need to photosynthesise.`,
      diagrams: [
        {
          caption: "Plant cell — additional structures vs animal cell",
          svg: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Labelled diagram of a plant cell showing cell wall, chloroplasts, large vacuole, nucleus and cell membrane">
  <!-- cell wall -->
  <rect x="20" y="15" width="260" height="175" rx="12" fill="none" stroke="#fbbf24" stroke-width="4"/>
  <!-- cell membrane -->
  <rect x="26" y="21" width="248" height="163" rx="10" fill="#1e2a3a" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- vacuole -->
  <rect x="70" y="55" width="155" height="105" rx="8" fill="#0f2233" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 2"/>
  <text x="115" y="110" font-size="9" fill="#38bdf8" font-family="sans-serif">Sap vacuole</text>
  <!-- nucleus -->
  <ellipse cx="62" cy="42" rx="26" ry="20" fill="#2d1f4a" stroke="#a78bfa" stroke-width="2"/>
  <text x="46" y="46" font-size="8" fill="#a78bfa" font-family="sans-serif">Nucleus</text>
  <!-- chloroplast 1 -->
  <ellipse cx="240" cy="50" rx="20" ry="10" fill="#14532d" stroke="#34d399" stroke-width="1.8"/>
  <line x1="222" y1="50" x2="258" y2="50" stroke="#34d399" stroke-width="0.8"/>
  <!-- chloroplast 2 -->
  <ellipse cx="235" cy="160" rx="20" ry="10" fill="#14532d" stroke="#34d399" stroke-width="1.8"/>
  <text x="218" y="40" font-size="8" fill="#34d399" font-family="sans-serif">Chloroplast</text>
  <!-- labels -->
  <text x="24" y="12" font-size="8" fill="#fbbf24" font-family="sans-serif">Cell wall (cellulose)</text>
  <text x="27" y="185" font-size="8" fill="#38bdf8" font-family="sans-serif">Cell membrane</text>
</svg>`
        }
      ],
      keyPoints: [
        "Cell wall (cellulose) provides rigidity and prevents the cell bursting.",
        "Chloroplasts contain chlorophyll and are the sites of photosynthesis.",
        "The permanent sap vacuole maintains turgor pressure.",
        "Not every plant cell has chloroplasts (e.g. root hair cells).",
        "Plant cells share nucleus, cytoplasm, cell membrane, mitochondria and ribosomes with animal cells."
      ],
      thinkDeeper: "Why do plant cells need a rigid cell wall while animal cells do not? Think about where animals store structural support (hint: skeleton) and how a plant achieves the same effect at the cellular level using turgor pressure.",
      whyItWorks: "The cellulose cell wall acts like a pressure vessel. As the vacuole absorbs water by osmosis, it pushes outward. The rigid wall resists this, building up turgor pressure that keeps the plant upright — no bones needed.",
      strategies: ["Plant vs animal comparison table", "Mnemonics: 'CCV' — Cell wall, Chloroplasts, Vacuole"]
    },

    {
      heading: "Bacterial Cell Structure",
      body: `Bacteria are **prokaryotic** cells — they are fundamentally different from animal and plant cells (which are eukaryotic). Key differences:

- **No membrane-bound nucleus** — DNA is a single circular chromosome that floats freely in the cytoplasm.
- **Plasmids** — small, circular pieces of DNA separate from the main chromosome; they often carry antibiotic-resistance genes.
- **Cell wall** — present, but made of murein (peptidoglycan), not cellulose.
- **No mitochondria, no chloroplasts** — respiration and (in photosynthetic bacteria) photosynthesis occur at the cell membrane or in membrane folds.
- **Ribosomes** — present but smaller (70S) than eukaryotic ribosomes (80S); this is why some antibiotics can target bacteria without harming our cells.
- Many bacteria also have a **flagellum** for movement and a **capsule** (slime layer) outside the cell wall.`,
      diagrams: [
        {
          caption: "Bacterial cell — prokaryotic features",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Labelled diagram of a bacterial cell showing circular DNA, plasmids, cell wall, cell membrane, ribosomes and flagellum">
  <!-- capsule hint -->
  <ellipse cx="155" cy="100" rx="135" ry="88" fill="none" stroke="#fb7185" stroke-width="1" stroke-dasharray="5 3"/>
  <text x="6" y="20" font-size="8" fill="#fb7185" font-family="sans-serif">Capsule</text>
  <!-- cell wall -->
  <ellipse cx="155" cy="100" rx="120" ry="76" fill="none" stroke="#fbbf24" stroke-width="3"/>
  <text x="250" y="32" font-size="8" fill="#fbbf24" font-family="sans-serif">Cell wall (murein)</text>
  <!-- cell body -->
  <ellipse cx="155" cy="100" rx="113" ry="70" fill="#1e2a3a" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- circular DNA -->
  <circle cx="140" cy="95" r="25" fill="none" stroke="#a78bfa" stroke-width="2" stroke-dasharray="4 2"/>
  <text x="118" y="93" font-size="8" fill="#a78bfa" font-family="sans-serif">Circular</text>
  <text x="120" y="103" font-size="8" fill="#a78bfa" font-family="sans-serif">DNA</text>
  <!-- plasmids -->
  <ellipse cx="205" cy="80" rx="10" ry="7" fill="none" stroke="#34d399" stroke-width="1.5"/>
  <ellipse cx="210" cy="115" rx="8" ry="6" fill="none" stroke="#34d399" stroke-width="1.5"/>
  <text x="218" y="90" font-size="8" fill="#34d399" font-family="sans-serif">Plasmids</text>
  <!-- ribosomes -->
  <circle cx="170" cy="130" r="3" fill="#fbbf24"/>
  <circle cx="180" cy="122" r="3" fill="#fbbf24"/>
  <circle cx="160" cy="118" r="3" fill="#fbbf24"/>
  <text x="182" y="135" font-size="8" fill="#fbbf24" font-family="sans-serif">Ribosomes</text>
  <!-- flagellum -->
  <path d="M275 100 Q295 80 305 60 Q310 45 300 35" fill="none" stroke="#b7bce0" stroke-width="1.8"/>
  <text x="285" y="155" font-size="8" fill="#b7bce0" font-family="sans-serif">Flagellum</text>
  <!-- cell membrane label -->
  <text x="28" y="150" font-size="8" fill="#38bdf8" font-family="sans-serif">Cell membrane</text>
</svg>`
        }
      ],
      keyPoints: [
        "Bacteria are prokaryotes — no membrane-bound nucleus.",
        "Genetic material is a single circular chromosome plus optional plasmids.",
        "Bacterial cell wall is made of murein, not cellulose.",
        "No mitochondria or chloroplasts — both are eukaryotic organelles.",
        "Ribosomes are present but smaller (70S) than in eukaryotic cells."
      ],
      discovery: {
        problem: "A student says 'All cells have a nucleus.' Is this correct? Try to name a type of cell that disproves this claim.",
        idea: "Bacteria disprove it — they have no membrane-bound nucleus. Additionally, mature red blood cells in mammals have lost their nucleus. The correct statement is: all EUKARYOTIC cells have a nucleus."
      },
      whyItWorks: "The distinction between prokaryote and eukaryote reflects fundamental evolutionary history. Mitochondria and chloroplasts are thought to have evolved from ancient bacteria engulfed by a host cell (endosymbiotic theory) — explaining why they have their own circular DNA and double membranes.",
      strategies: ["Pro vs Eu comparison table", "Remember: prokaryote = 'before nucleus'"]
    },

    {
      heading: "Specialised Cells and Their Adaptations",
      body: `Cells in multicellular organisms are **specialised** — their structure is modified to perform a specific function efficiently. This is a key principle: **structure relates to function**.

**Ciliated epithelial cell** — has many hair-like cilia on its surface that beat rhythmically to move mucus (and trapped particles/pathogens) up and away from the lungs. Rich in mitochondria to power cilia movement.

**Root hair cell** — has a long hair-like extension that increases the surface area for absorption of water (by osmosis) and mineral ions (by active transport) from the soil. No chloroplasts (underground). Large surface area, thin wall.

**Xylem vessel** — a dead, hollow tube with a thick lignified wall. Lignin (a waterproof polymer) strengthens the wall and prevents collapse under tension. No cross-walls (end walls broken down), forming a continuous pipe for water and mineral transport up the plant.

**Palisade mesophyll cell** — tall, column-shaped cells packed with chloroplasts and found in the upper leaf. Large surface area for CO2 absorption, maximum light capture for photosynthesis.

**Nerve cell (neurone)** — long axon to carry electrical impulses over long distances; myelin sheath for insulation and faster transmission; many dendrites to receive signals from other neurones.

**Red blood cell** — biconcave disc shape maximises surface area for oxygen diffusion; no nucleus (more space for haemoglobin); flexible membrane to squeeze through capillaries.

**Sperm cell** — streamlined head with a pointed acrosome (contains enzymes to penetrate the egg); many mitochondria in the midpiece for energy; long flagellum for swimming.

**Egg cell (ovum)** — large (stores nutrients as yolk for the developing embryo); few mitochondria before fertilisation; jelly coat (zona pellucida) prevents more than one sperm entering.`,
      keyPoints: [
        "Ciliated cells use mitochondria-powered cilia to sweep mucus in airways.",
        "Root hair cells have a large surface area to absorb water and minerals.",
        "Xylem vessels are dead, lignified, hollow tubes — no nucleus, no cytoplasm.",
        "Red blood cells are biconcave and anucleate to maximise haemoglobin and O2 capacity.",
        "Sperm cells have an acrosome, many mitochondria and a flagellum for fertilisation."
      ],
      thinkDeeper: "A xylem vessel cell dies during development and loses all its contents. Why is this an advantage rather than a waste? Consider what the cell's job is and what would block efficient transport.",
      strategies: ["For each cell: ask what its job is, then link each structural feature to that job."]
    },

    {
      heading: "Levels of Organisation",
      body: `In complex multicellular organisms, similar cells are grouped together and arranged into a hierarchy of increasing complexity:

**Organelle** → **Cell** → **Tissue** → **Organ** → **Organ System** → **Organism**

- **Organelle**: a specialised structure within a cell (e.g. mitochondrion, chloroplast).
- **Cell**: the basic unit of life (e.g. a muscle cell, a nerve cell).
- **Tissue**: a group of similar cells working together to perform a function (e.g. muscle tissue, xylem tissue).
- **Organ**: a structure made of two or more different tissues that work together (e.g. the heart contains muscle tissue, epithelial tissue and connective tissue).
- **Organ system**: a group of organs working together (e.g. the circulatory system: heart, blood vessels, blood).
- **Organism**: the complete living individual (e.g. a human, a rose plant).

In plants: leaf cells → mesophyll tissue → leaf (organ) → shoot system (organ system) → plant (organism).`,
      keyPoints: [
        "The hierarchy: organelle → cell → tissue → organ → organ system → organism.",
        "A tissue is a group of similar cells with a shared function.",
        "An organ contains two or more different tissue types.",
        "Organ systems are groups of organs with a coordinated function.",
        "Both animals and plants follow this same organisational hierarchy."
      ],
      whyItWorks: "Hierarchical organisation allows division of labour — each level specialises in a task, while coordination between levels achieves complex functions no single cell could manage alone. Natural selection has repeatedly converged on this solution across the animal and plant kingdoms.",
      strategies: ["Use the acronym O-C-T-O-OS-O: Organelle, Cell, Tissue, Organ, Organ System, Organism"]
    },

    {
      heading: "Magnification and Actual Size Calculations",
      body: `Microscopes allow us to see cells far too small to see with the naked eye. The relationship between what you see and the real size is:

**Magnification = Image size / Actual size**

Or rearranged: **Actual size = Image size / Magnification**

The formula triangle is: Image size (top) | Actual size × Magnification (bottom).

**Unit conversions — essential:**
- 1 mm = 1000 µm (micrometres)
- 1 µm = 1000 nm (nanometres)
- Always check that Image size and Actual size are in the SAME unit before calculating.

**Worked example:** A cell appears 24 mm long in a drawing. The magnification is ×400. What is the actual cell length?

Actual size = Image size / Magnification = 24 mm / 400 = 0.06 mm = 60 µm.

**Scale bars:** Exam questions often give a scale bar instead of a stated magnification. Measure the scale bar length on the image (in mm), note the real length it represents (e.g. 10 µm), then calculate magnification from these two values.`,
      keyPoints: [
        "Magnification = Image size ÷ Actual size (both in same units).",
        "1 mm = 1000 µm; convert before calculating.",
        "Scale bars let you calculate magnification without it being stated.",
        "Image size and actual size must always be in the same unit.",
        "Rearrange the formula: Actual size = Image size ÷ Magnification."
      ],
      discovery: {
        problem: "A photograph shows a bacterium that is 15 mm long. The actual bacterium is 3 µm long. Before reading on, try to calculate the magnification. Watch your units!",
        idea: "Convert: 15 mm = 15 000 µm. Magnification = 15 000 µm / 3 µm = ×5000. The key step is converting to the same unit before dividing — many students forget this and get an answer 1000× too small."
      },
      whyItWorks: "Magnification is a pure (unitless) ratio, so it only works correctly when numerator and denominator carry the same unit. Writing out unit labels and cancelling them is the safest strategy to avoid errors in multi-step problems.",
      strategies: ["Unit analysis — always write and cancel units", "Formula triangle for magnification"],
      thinkDeeper: "A light microscope can magnify up to about ×1500. An electron microscope can reach ×500 000. Why can't a light microscope reveal ribosomes (~25 nm diameter)? Think about the wavelength of visible light (~400–700 nm) and the concept of resolution."
    }
  ],

  learn: {
    keyFacts: [
      "All cells have a cell membrane, cytoplasm and ribosomes (animal, plant and bacterial).",
      "Plant cells additionally have a cellulose cell wall, chloroplasts and a permanent sap vacuole.",
      "Bacteria are prokaryotes — no membrane-bound nucleus, no mitochondria, no chloroplasts.",
      "Bacterial DNA is a single circular chromosome; plasmids are extra circular DNA fragments.",
      "Magnification = Image size / Actual size (same units). 1 mm = 1000 µm.",
      "Specialised cells are adapted in structure to perform a particular function.",
      "Red blood cells are biconcave and anucleate — maximising haemoglobin content.",
      "Xylem vessels are dead, hollow, lignified tubes for water transport.",
      "The levels of organisation: organelle → cell → tissue → organ → organ system → organism.",
      "Mitochondria are the site of aerobic respiration (ATP production)."
    ],
    flashcards: [
      { front: "What is the function of the nucleus?", back: "Controls cell activities; contains chromosomes (DNA) which carry genetic information for protein synthesis." },
      { front: "What is the function of mitochondria?", back: "Site of aerobic respiration — releases energy as ATP from glucose and oxygen." },
      { front: "What three structures does a plant cell have that an animal cell does NOT?", back: "Cell wall (cellulose), chloroplasts, permanent sap vacuole." },
      { front: "What is a plasmid?", back: "A small, circular piece of DNA found in bacterial cells, separate from the main circular chromosome." },
      { front: "What is the formula for magnification?", back: "Magnification = Image size ÷ Actual size (both measurements in the same unit)." },
      { front: "Name two adaptations of a red blood cell.", back: "Biconcave disc shape (large surface area for O2 diffusion); no nucleus (more space for haemoglobin)." },
      { front: "What makes xylem vessels efficient at water transport?", back: "Dead hollow tubes with no cross-walls (continuous pipe); lignified walls prevent collapse." },
      { front: "What is the difference between a prokaryote and a eukaryote?", back: "Prokaryotes (e.g. bacteria) have no membrane-bound nucleus; eukaryotes (animals, plants, fungi) do." },
      { front: "What organelle is the site of protein synthesis?", back: "Ribosome — found free in cytoplasm or on rough endoplasmic reticulum." },
      { front: "Put in order: organ system, cell, tissue, organelle, organism, organ.", back: "Organelle → cell → tissue → organ → organ system → organism." },
      { front: "How does a root hair cell maximise water absorption?", back: "Long hair-like extension greatly increases surface area for osmosis; thin cell wall for easy water entry." },
      { front: "Why does a sperm cell have many mitochondria in its midpiece?", back: "Aerobic respiration provides ATP to power the flagellum for swimming to the egg." }
    ],
    keyTerms: [
      { term: "Nucleus", definition: "A membrane-bound organelle containing chromosomes (DNA); controls cell activities and protein synthesis." },
      { term: "Cell membrane", definition: "The selectively permeable phospholipid bilayer surrounding all cells; controls movement of substances in and out." },
      { term: "Mitochondrion", definition: "Organelle with folded inner membrane (cristae); site of aerobic respiration producing ATP." },
      { term: "Ribosome", definition: "Tiny organelle (no membrane) that is the site of protein synthesis by translating mRNA." },
      { term: "Chloroplast", definition: "Membrane-bound plant organelle containing chlorophyll; site of photosynthesis." },
      { term: "Cell wall (plant)", definition: "Rigid outer layer of cellulose surrounding plant cells; provides structural support and prevents bursting." },
      { term: "Permanent sap vacuole", definition: "Large membrane-bound cavity in plant cells filled with cell sap; maintains turgor pressure." },
      { term: "Prokaryote", definition: "An organism (e.g. bacterium) whose cells lack a membrane-bound nucleus; DNA is circular and free in the cytoplasm." },
      { term: "Plasmid", definition: "Small circular DNA molecule in bacteria, separate from the main chromosome; often carries antibiotic-resistance genes." },
      { term: "Magnification", definition: "The ratio of image size to actual size; magnification = image size ÷ actual size (same units)." },
      { term: "Tissue", definition: "A group of similar cells working together to perform a specific function." },
      { term: "Organ", definition: "A structure composed of two or more different tissue types working together to perform a function." }
    ]
  },

  quiz: {
    mcq: [
      {
        id: "bio-cells-mcq-q01",
        question: "Which of the following is found in a plant cell but NOT in an animal cell?",
        options: ["Ribosome", "Cell membrane", "Chloroplast", "Mitochondrion"],
        answerIndex: 2,
        explanation: "Chloroplasts are present only in plant (and algal) cells. Ribosomes, cell membrane, and mitochondria are found in both animal and plant cells.",
        guideRef: "Plant Cell Structure",
        difficulty: "warmup"
      },
      {
        id: "bio-cells-mcq-q02",
        question: "A bacterial cell is described as prokaryotic. What does this mean?",
        options: [
          "It has a cell wall made of cellulose",
          "It has no membrane-bound nucleus",
          "It contains mitochondria but no chloroplasts",
          "It reproduces only by sexual reproduction"
        ],
        answerIndex: 1,
        explanation: "Prokaryotic means the cell has no membrane-bound nucleus — DNA floats freely as a circular chromosome. Bacteria do not have cellulose cell walls (they have murein), and they have no mitochondria or chloroplasts.",
        guideRef: "Bacterial Cell Structure",
        difficulty: "warmup"
      },
      {
        id: "bio-cells-mcq-q03",
        question: "A cell image measures 36 mm. The actual cell is 0.06 mm. What is the magnification?",
        options: ["×60", "×600", "×6000", "×216"],
        answerIndex: 1,
        explanation: "Magnification = image size / actual size = 36 mm / 0.06 mm = 600. Both values are already in mm so no conversion is needed.",
        guideRef: "Magnification and Actual Size Calculations",
        difficulty: "core",
        hints: [
          "Write out the formula: Magnification = Image size / Actual size.",
          "Both sizes are in mm — no conversion needed here.",
          "Divide 36 by 0.06.",
          "36 / 0.06 = 36 × (1/0.06) = 36 × 16.67 = 600."
        ],
        strategy: "Formula substitution"
      },
      {
        id: "bio-cells-mcq-q04",
        question: "Which specialised cell has a biconcave shape and no nucleus?",
        options: ["Sperm cell", "Palisade mesophyll cell", "Red blood cell", "Root hair cell"],
        answerIndex: 2,
        explanation: "Red blood cells are biconcave and anucleate (no nucleus). This maximises internal space for haemoglobin and provides a large surface area for efficient oxygen diffusion.",
        guideRef: "Specialised Cells and Their Adaptations",
        difficulty: "warmup"
      },
      {
        id: "bio-cells-mcq-q05",
        question: "Which sequence correctly represents the levels of organisation from smallest to largest?",
        options: [
          "Cell → Organelle → Tissue → Organ → Organ system → Organism",
          "Organelle → Cell → Tissue → Organ → Organ system → Organism",
          "Cell → Tissue → Organelle → Organ → Organism → Organ system",
          "Organelle → Tissue → Cell → Organ system → Organ → Organism"
        ],
        answerIndex: 1,
        explanation: "The correct hierarchy is: Organelle → Cell → Tissue → Organ → Organ system → Organism. Organelles are sub-cellular structures; cells are the basic units; tissues are groups of similar cells; organs contain multiple tissues; organ systems are groups of organs; the organism is the whole individual.",
        guideRef: "Levels of Organisation",
        difficulty: "warmup"
      },
      {
        id: "bio-cells-mcq-q06",
        question: "A student observes a cell with a large permanent vacuole, chloroplasts, and a rigid cell wall. Which type of cell is this most likely to be?",
        options: ["Bacterium", "Animal cell", "Plant cell", "Red blood cell"],
        answerIndex: 2,
        explanation: "The combination of a large permanent vacuole, chloroplasts AND a rigid cellulose cell wall is unique to plant cells. Bacteria have a cell wall (murein, not cellulose) but no chloroplasts or vacuole. Animal and red blood cells have neither.",
        guideRef: "Plant Cell Structure",
        difficulty: "core",
        hints: [
          "Which organelles on this list are exclusive to plants?",
          "Chloroplasts and permanent vacuole narrow it to plant cells.",
          "The cell wall confirms it — but check what it is made of to rule out bacteria."
        ],
        strategy: "Process of elimination"
      }
    ],
    qa: [
      {
        id: "bio-cells-qa-q01",
        question: "Describe three ways in which a plant cell differs from an animal cell. [3]",
        marks: 3,
        modelAnswer: "A plant cell has a cellulose cell wall surrounding the cell membrane, whereas an animal cell does not. A plant cell contains chloroplasts for photosynthesis, which are absent from animal cells. A plant cell has a large permanent sap vacuole, while animal cells either lack a vacuole or have only small, temporary vacuoles.",
        markScheme: [
          "Cell wall (made of cellulose) present in plant cell / absent in animal cell",
          "Chloroplasts present in plant cell / absent in animal cell",
          "Large permanent sap/central vacuole present in plant cell / absent (or only small temporary vacuoles) in animal cell"
        ],
        commonError: "Stating 'plants have a nucleus and animals do not' — both cell types have a membrane-bound nucleus.",
        guideRef: "Plant Cell Structure",
        difficulty: "core",
        hints: [
          "Think about what you can see in a plant cell diagram that you cannot see in an animal cell diagram.",
          "There are three structures unique to plant cells in the IGCSE specification.",
          "Consider the outer boundary, the organelles for energy capture, and the large fluid-filled space."
        ],
        strategy: "Compare and contrast — list unique features systematically"
      },
      {
        id: "bio-cells-qa-q02",
        question: "A photograph of a cell shows it to be 45 mm in length. The magnification is ×750. Calculate the actual length of the cell in micrometres (µm). Show your working. [3]",
        marks: 3,
        modelAnswer: "Actual size = Image size / Magnification = 45 mm / 750 = 0.06 mm. Converting to µm: 0.06 mm × 1000 = 60 µm. The actual length of the cell is 60 µm.",
        markScheme: [
          "Correct use of formula: Actual size = Image size / Magnification",
          "Correct arithmetic: 45 / 750 = 0.06 mm (or equivalent)",
          "Correct unit conversion to µm: 0.06 × 1000 = 60 µm (accept 6 × 10^-2 mm)"
        ],
        commonError: "Forgetting to convert mm to µm at the end, giving 0.06 as the final answer without units or with wrong units.",
        guideRef: "Magnification and Actual Size Calculations",
        difficulty: "core",
        hints: [
          "Write the magnification formula: Magnification = Image size / Actual size.",
          "Rearrange to find Actual size = Image size / Magnification.",
          "Substitute: 45 / 750 — calculate this in mm first.",
          "Remember: 1 mm = 1000 µm — multiply your mm answer by 1000 to convert."
        ],
        strategy: "Unit analysis — track units at every step",
        solutions: [
          {
            label: "Method 1: Rearrange formula then convert",
            steps: [
              "Formula: Magnification = Image size / Actual size",
              "Rearrange: Actual size = Image size / Magnification",
              "Substitute: Actual size = 45 mm / 750 = 0.06 mm",
              "Convert: 0.06 mm × 1000 µm/mm = 60 µm"
            ]
          },
          {
            label: "Method 2: Convert image size to µm first, then divide",
            steps: [
              "Convert image size: 45 mm = 45 × 1000 = 45 000 µm",
              "Apply formula: Actual size = 45 000 µm / 750",
              "Calculate: 45 000 / 750 = 60 µm",
              "Actual cell length = 60 µm (same answer, units correct throughout)"
            ]
          }
        ]
      },
      {
        id: "bio-cells-qa-q03",
        question: "Explain how the structure of a sperm cell is adapted to its function of fertilising an egg cell. [4]",
        marks: 4,
        modelAnswer: "The sperm cell has a streamlined, pointed head to reduce water resistance when swimming. The acrosome at the tip contains digestive enzymes that break down the egg cell's outer coat (zona pellucida) to allow entry. The midpiece is packed with mitochondria that carry out aerobic respiration to release ATP energy to power the beating of the flagellum. The long flagellum propels the sperm towards the egg.",
        markScheme: [
          "Streamlined/pointed head — reduces water resistance / aids swimming",
          "Acrosome contains enzymes — to digest / break down egg cell coat / zona pellucida",
          "Many mitochondria (in midpiece) — for aerobic respiration / release of ATP energy",
          "Flagellum / tail — for propulsion / swimming to the egg"
        ],
        commonError: "Describing the midpiece as 'containing chloroplasts' — chloroplasts are plant organelles; sperm use mitochondria for energy.",
        guideRef: "Specialised Cells and Their Adaptations",
        difficulty: "core",
        hints: [
          "Think about what the sperm must do: swim to the egg, and then get inside it.",
          "Two adaptations help with swimming — one reduces resistance, one provides propulsion.",
          "One organelle powers movement — which one releases energy?",
          "One structure at the tip helps the sperm enter the egg."
        ],
        strategy: "Structure → Function — state the structure, then state what it does"
      }
    ]
  },

  questionBank: {
    mcqPapers: [
      {
        id: "bio-cells-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        questions: [
          {
            id: "bio-cells-bm1-01",
            question: "Which organelle is the site of aerobic respiration in a eukaryotic cell?",
            options: ["Ribosome", "Nucleus", "Mitochondrion", "Chloroplast"],
            answerIndex: 2,
            explanation: "Mitochondria carry out aerobic respiration, producing ATP from glucose and oxygen. Ribosomes make proteins, the nucleus holds DNA, and chloroplasts carry out photosynthesis.",
            guideRef: "Animal Cell Structure",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bm1-02",
            question: "Which structure controls the entry and exit of substances in ALL types of cell?",
            options: ["Cell wall", "Cell membrane", "Nucleus", "Vacuole"],
            answerIndex: 1,
            explanation: "The cell membrane (plasma membrane) is selectively permeable and is present in animal, plant and bacterial cells. Cell walls are found in plants and bacteria but not animals; the nucleus controls genetic activity; the vacuole stores substances.",
            guideRef: "Animal Cell Structure",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bm1-03",
            question: "A plant cell has a cellulose cell wall, a large permanent vacuole, and chloroplasts. Which of these three structures is also found in a bacterial cell?",
            options: ["Cellulose cell wall", "Large permanent vacuole", "Chloroplasts", "None of them"],
            answerIndex: 3,
            explanation: "Bacteria have a cell wall, but it is made of murein (peptidoglycan), not cellulose. Bacteria do not have a large permanent vacuole or chloroplasts. None of the three plant-specific structures listed is found in bacteria.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "core",
            hints: [
              "Bacteria do have a cell wall — but what is it made of?",
              "The question asks about a cellulose wall specifically.",
              "Rule out each option by checking whether bacteria truly possess that structure."
            ],
            strategy: "Read precisely — note the exact material, not just the structure name"
          },
          {
            id: "bio-cells-bm1-04",
            question: "A cell image is 30 mm wide. The actual cell is 0.05 mm wide. What is the magnification?",
            options: ["×60", "×600", "×150", "×6000"],
            answerIndex: 1,
            explanation: "Magnification = Image size / Actual size = 30 mm / 0.05 mm = 600. Both values are in mm so no conversion is needed.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "Formula: Magnification = Image size / Actual size.",
              "Both measurements are already in mm — no conversion needed.",
              "30 ÷ 0.05 = 30 × 20 = 600."
            ],
            strategy: "Formula substitution"
          },
          {
            id: "bio-cells-bm1-05",
            question: "Which cell is described correctly?",
            options: [
              "Root hair cell — contains many chloroplasts to absorb sunlight underground",
              "Red blood cell — biconcave and anucleate to maximise haemoglobin content",
              "Xylem vessel — living cells with large nuclei to direct water flow",
              "Sperm cell — large and stationary, storing nutrients for the embryo"
            ],
            answerIndex: 1,
            explanation: "Red blood cells are biconcave discs with no nucleus, packing in maximum haemoglobin for oxygen transport. Root hair cells are underground so have no chloroplasts. Xylem vessels are dead with no nucleus. Sperm cells are small and motile — it is the egg cell that is large and stores nutrients.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "Eliminate options by checking each fact against what you know.",
              "Root hair cells are underground — can they photosynthesise?",
              "Xylem vessels are described as dead — do dead cells have nuclei?"
            ],
            strategy: "Elimination — one false fact disqualifies the option"
          },
          {
            id: "bio-cells-bm1-06",
            question: "Which level of organisation comes directly ABOVE tissue in the hierarchy?",
            options: ["Cell", "Organelle", "Organ system", "Organ"],
            answerIndex: 3,
            explanation: "The hierarchy is: Organelle → Cell → Tissue → Organ → Organ system → Organism. An organ is immediately above tissue.",
            guideRef: "Levels of Organisation",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bm1-07",
            question: "A bacterium has a length of 4 µm. In a microscope image it appears 12 mm long. What is the magnification?",
            options: ["×300", "×3000", "×30", "×30 000"],
            answerIndex: 1,
            explanation: "Convert: 12 mm = 12 000 µm. Magnification = 12 000 µm / 4 µm = 3000. A common error is to divide 12 by 4 = 3, forgetting the unit conversion.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "Image is in mm and actual size is in µm — you must convert to the same unit.",
              "12 mm × 1000 = 12 000 µm.",
              "12 000 ÷ 4 = 3000."
            ],
            strategy: "Unit analysis first, then calculate"
          },
          {
            id: "bio-cells-bm1-08",
            question: "Which of the following is a function of the permanent sap vacuole in a plant cell?",
            options: [
              "Carries out photosynthesis",
              "Synthesises proteins",
              "Maintains turgor pressure to keep the cell rigid",
              "Controls entry of substances across the cell wall"
            ],
            answerIndex: 2,
            explanation: "The permanent sap vacuole is filled with cell sap and pushes outward against the cell wall, maintaining turgor pressure that keeps the plant cell (and thus the plant) firm. Photosynthesis occurs in chloroplasts, protein synthesis in ribosomes, and the cell membrane (not cell wall) controls entry of substances.",
            guideRef: "Plant Cell Structure",
            difficulty: "core",
            hints: [
              "What is inside the vacuole and what does it do to the surrounding cell wall?",
              "Think about what happens to a plant when it wilts — the vacuole has lost water.",
              "Turgor = internal pressure from the vacuole pushing outward."
            ]
          },
          {
            id: "bio-cells-bm1-09",
            question: "Nerve cells (neurones) have very long axons. Which adaptation explains how they transmit signals quickly over that distance?",
            options: [
              "Many chloroplasts to produce energy",
              "A myelin sheath that insulates the axon and speeds up impulse transmission",
              "A biconcave shape to increase surface area",
              "An acrosome at the tip containing digestive enzymes"
            ],
            answerIndex: 1,
            explanation: "The myelin sheath is a fatty insulating layer that wraps around the axon, causing the electrical impulse to jump between gaps (nodes of Ranvier), greatly increasing transmission speed. Chloroplasts are plant organelles; biconcave shape describes red blood cells; acrosomes are found in sperm cells.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "Eliminate options that belong to other cell types.",
              "The key word in the question is 'quickly' — which adaptation increases speed?",
              "The myelin sheath is an insulating layer around the axon."
            ]
          },
          {
            id: "bio-cells-bm1-10",
            question: "CHALLENGE: A student discovers an organism whose cells have ribosomes, a circular chromosome, no nuclear envelope, and a murein cell wall, but also contain internal membrane systems that carry out photosynthesis. Which kingdom does this organism most likely belong to?",
            options: ["Plantae", "Animalia", "Prokaryota (Bacteria)", "Fungi"],
            answerIndex: 2,
            explanation: "All the features described — no nuclear envelope (prokaryotic), circular chromosome, murein cell wall, ribosomes — are prokaryotic. Some bacteria (cyanobacteria) do photosynthesise using internal membrane systems despite being prokaryotes. Plants are eukaryotes with chloroplasts bounded by double membranes. Fungi and animals have no cell wall (or a non-murein wall) and are eukaryotic.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "challenge",
            hints: [
              "The circular chromosome and no nuclear envelope are key — which domain of life does this describe?",
              "Murein cell wall is found only in bacteria.",
              "Some bacteria can photosynthesise — they are called cyanobacteria.",
              "Eliminate eukaryotic kingdoms (Plantae, Animalia, Fungi) using the prokaryotic clues."
            ],
            strategy: "Identify the most diagnostic features first, then assign to a kingdom"
          }
        ]
      },
      {
        id: "bio-cells-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        questions: [
          {
            id: "bio-cells-bm2-01",
            question: "Which THREE structures are found in plant cells but NOT in animal cells?",
            options: [
              "Cell wall, mitochondria, ribosome",
              "Cell wall, chloroplast, permanent sap vacuole",
              "Nucleus, cell membrane, chloroplast",
              "Chloroplast, ribosome, permanent sap vacuole"
            ],
            answerIndex: 1,
            explanation: "The three structures unique to plant cells (compared to animal cells) are: the cellulose cell wall, chloroplasts, and the permanent sap vacuole. Mitochondria, ribosomes, nucleus, and cell membrane are found in both.",
            guideRef: "Plant Cell Structure",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bm2-02",
            question: "Which statement about plasmids is correct?",
            options: [
              "Plasmids are the main chromosome of a bacterial cell",
              "Plasmids are small circular pieces of DNA separate from the main chromosome",
              "Plasmids are found only in eukaryotic cells",
              "Plasmids are membrane-bound organelles in bacteria"
            ],
            answerIndex: 1,
            explanation: "Plasmids are small, circular, double-stranded DNA molecules found in bacterial cells, separate from the main circular chromosome. They often carry genes for antibiotic resistance. They are not the main chromosome, not eukaryotic structures, and not membrane-bound.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bm2-03",
            question: "The image of a cell in a textbook is 48 mm long. The scale bar shows 10 µm and is 5 mm long on the page. What is the actual length of the cell?",
            options: ["24 µm", "96 µm", "240 µm", "9.6 µm"],
            answerIndex: 1,
            explanation: "Step 1: find magnification from scale bar. 5 mm on image = 10 µm real, so 5 mm = 5000 µm image; magnification = 5000/10 = ×500. Step 2: actual cell = image/magnification = 48 mm / 500 = 0.096 mm = 96 µm.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "Use the scale bar first to find the magnification.",
              "Convert scale bar image length to µm: 5 mm = 5000 µm. Magnification = 5000/10 = 500.",
              "Now apply: actual cell = 48 mm / 500 = 0.096 mm.",
              "Convert: 0.096 mm × 1000 = 96 µm."
            ],
            strategy: "Two-step: magnification from scale bar, then apply to the cell"
          },
          {
            id: "bio-cells-bm2-04",
            question: "Why do palisade mesophyll cells contain many more chloroplasts than root hair cells?",
            options: [
              "Palisade cells need more chloroplasts to absorb water from the soil",
              "Palisade cells are in the upper leaf where they are exposed to light for photosynthesis",
              "Root hair cells have more mitochondria so they need fewer chloroplasts",
              "Root hair cells are larger, so each cell contains proportionally fewer chloroplasts"
            ],
            answerIndex: 1,
            explanation: "Palisade mesophyll cells are positioned near the upper surface of the leaf to maximise light capture for photosynthesis, so they are densely packed with chloroplasts. Root hair cells are underground, receive no light, and therefore cannot photosynthesise — they have no chloroplasts.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "Where are palisade cells found, and what process requires light?",
              "Are root hair cells exposed to light?",
              "More chloroplasts = more capacity for photosynthesis — which cell needs this most?"
            ]
          },
          {
            id: "bio-cells-bm2-05",
            question: "A tissue is best defined as:",
            options: [
              "A single specialised cell performing a function",
              "A group of different organs working together",
              "A group of similar cells working together to perform a specific function",
              "Any structure enclosed within a membrane"
            ],
            answerIndex: 2,
            explanation: "A tissue is a group of similar (same type of) cells working together for a specific function, e.g. muscle tissue, xylem tissue. An organ is made of multiple tissue types; an organ system is a group of organs.",
            guideRef: "Levels of Organisation",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bm2-06",
            question: "Which feature of xylem vessels makes them efficient as water-conducting pipes?",
            options: [
              "They contain many ribosomes for active water pumping",
              "They are dead, hollow, lignified tubes with no cross-walls",
              "They contain chloroplasts to provide energy for transport",
              "They have a large permanent vacuole storing water"
            ],
            answerIndex: 1,
            explanation: "Mature xylem vessels are dead. Their cross-walls (end walls) have broken down, creating a continuous hollow tube. Lignin in the walls provides strength to withstand the tension of water columns. This structure allows unobstructed water flow from roots to leaves.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "Dead cells lack living contents — what does this clear from the tube?",
              "Lignin strengthens the wall so it doesn't collapse.",
              "No cross-walls = unobstructed continuous pipe."
            ]
          },
          {
            id: "bio-cells-bm2-07",
            question: "An electron micrograph shows two cells side by side. Cell X has no membrane-bound nucleus, 70S ribosomes, a murein cell wall, and a circular chromosome. Cell Y has a membrane-bound nucleus, 80S ribosomes, and no cell wall. What are cells X and Y?",
            options: [
              "X = plant cell; Y = animal cell",
              "X = bacterium; Y = animal cell",
              "X = bacterium; Y = plant cell",
              "X = animal cell; Y = bacterium"
            ],
            answerIndex: 1,
            explanation: "Cell X is prokaryotic (no membrane-bound nucleus, circular chromosome, murein wall, 70S ribosomes) — it is a bacterium. Cell Y is eukaryotic (membrane-bound nucleus, 80S ribosomes) with no cell wall, placing it as an animal cell (plant cells have a cellulose cell wall).",
            guideRef: "Bacterial Cell Structure",
            difficulty: "core",
            hints: [
              "70S ribosomes and murein wall are exclusively prokaryotic features.",
              "No nucleus boundary = prokaryote = bacterium.",
              "Cell Y has 80S ribosomes (eukaryote) and no cell wall — animal or plant?"
            ],
            strategy: "Match diagnostic features to cell type systematically"
          },
          {
            id: "bio-cells-bm2-08",
            question: "A magnification of ×2500 is used to image a mitochondrion. The image is 10 mm long. What is the actual length of the mitochondrion in µm?",
            options: ["0.4 µm", "4 µm", "40 µm", "400 µm"],
            answerIndex: 1,
            explanation: "Actual size = Image size / Magnification = 10 mm / 2500 = 0.004 mm. Convert: 0.004 mm × 1000 = 4 µm. (A typical mitochondrion is 1–10 µm, so 4 µm is biologically plausible.)",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "Rearrange: Actual size = Image size / Magnification.",
              "10 / 2500 = 0.004 mm.",
              "0.004 mm × 1000 = 4 µm."
            ],
            strategy: "Rearrange formula, calculate, convert"
          },
          {
            id: "bio-cells-bm2-09",
            question: "In which way is a sperm cell similar to a ciliated epithelial cell?",
            options: [
              "Both have an acrosome containing digestive enzymes",
              "Both rely on mitochondria to power movement",
              "Both are found lining the trachea",
              "Both are anucleate (lack a nucleus)"
            ],
            answerIndex: 1,
            explanation: "Both sperm cells and ciliated epithelial cells require a large supply of ATP to power movement (flagellum in sperm; cilia in epithelial cells), so both are rich in mitochondria. The acrosome is unique to sperm; ciliated cells line the trachea while sperm cells do not; neither cell type is anucleate (red blood cells are).",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "challenge",
            hints: [
              "What do a beating flagellum and beating cilia have in common energetically?",
              "Which organelle provides the ATP for movement?",
              "Eliminate options that are unique to only one of the two cell types."
            ],
            strategy: "Find the common functional requirement, then the shared structural feature"
          },
          {
            id: "bio-cells-bm2-10",
            question: "CHALLENGE: A light microscope has a maximum resolution of about 200 nm. A ribosome has a diameter of approximately 25 nm. Which statement explains why a light microscope cannot resolve individual ribosomes?",
            options: [
              "Ribosomes are too heavy to be illuminated by light",
              "The wavelength of visible light is longer than the size of a ribosome, so ribosomes fall below the resolution limit",
              "Ribosomes absorb all visible light, making them invisible",
              "Light microscopes cannot use stains on ribosomes"
            ],
            answerIndex: 1,
            explanation: "Resolution is limited by the wavelength of the radiation used. Visible light has a wavelength of ~400–700 nm. A ribosome at ~25 nm is far smaller than the wavelength of light; objects smaller than about half the wavelength cannot be distinguished as separate points. An electron microscope uses electrons with much shorter wavelengths, allowing resolution of ribosomes.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "challenge",
            hints: [
              "Resolution depends on wavelength — shorter wavelength = better resolution.",
              "Visible light wavelength is ~400–700 nm. Ribosome diameter is ~25 nm.",
              "You cannot resolve features smaller than roughly half the wavelength used.",
              "Electron microscopes use electrons (wavelength < 1 nm) to image ribosomes."
            ],
            strategy: "Apply the resolution-wavelength relationship to a novel scale problem"
          }
        ]
      },
      {
        id: "bio-cells-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        questions: [
          {
            id: "bio-cells-bm3-01",
            question: "What is the function of cristae (folds of the inner mitochondrial membrane)?",
            options: [
              "To store genetic information",
              "To increase surface area for ATP-producing enzymes",
              "To allow light absorption during photosynthesis",
              "To control entry of glucose into the mitochondrion"
            ],
            answerIndex: 1,
            explanation: "The inner mitochondrial membrane is folded into cristae, dramatically increasing the surface area available for the enzymes (ATP synthase and others) involved in aerobic respiration and ATP production. More cristae = more enzymes = more ATP per unit time.",
            guideRef: "Animal Cell Structure",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bm3-02",
            question: "Which of the following structures is present in a bacterial cell but NOT in a plant cell?",
            options: [
              "Cell membrane",
              "Ribosomes",
              "Plasmid",
              "Cell wall"
            ],
            answerIndex: 2,
            explanation: "Plasmids are small circular DNA fragments found in bacterial cells; they are not present in plant cells. Both cells have a cell membrane, ribosomes, and a cell wall (though the wall composition differs — murein in bacteria, cellulose in plants).",
            guideRef: "Bacterial Cell Structure",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bm3-03",
            question: "A student measures a cell's image as 72 mm and the actual cell as 90 µm. What is the magnification?",
            options: ["×80", "×800", "×8000", "×0.00125"],
            answerIndex: 1,
            explanation: "Convert image to µm: 72 mm × 1000 = 72 000 µm. Magnification = 72 000 / 90 = 800. Alternatively: actual size = 90 µm = 0.09 mm; magnification = 72 / 0.09 = 800.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "Image (mm) and actual size (µm) must be in the same unit.",
              "Convert 72 mm = 72 000 µm.",
              "72 000 / 90 = 800."
            ],
            strategy: "Unit analysis, then divide"
          },
          {
            id: "bio-cells-bm3-04",
            question: "The heart is an example of which level of biological organisation?",
            options: ["Tissue", "Cell", "Organ", "Organ system"],
            answerIndex: 2,
            explanation: "The heart is an organ. It is made of several tissue types including cardiac muscle tissue, epithelial tissue, and connective tissue. The circulatory system (heart + blood vessels + blood) is an organ system.",
            guideRef: "Levels of Organisation",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bm3-05",
            question: "An egg cell (ovum) is much larger than a sperm cell. Which feature of the egg cell explains this?",
            options: [
              "The egg has a larger nucleus to control more chromosomes",
              "The egg stores large quantities of nutrients (yolk) for the developing embryo",
              "The egg needs more mitochondria to swim to the sperm",
              "The egg has a thicker cell wall to prevent fertilisation by multiple sperm"
            ],
            answerIndex: 1,
            explanation: "The egg cell is large because it stores substantial quantities of nutrients (yolk) to sustain the developing embryo in early stages before a placenta or food source is established. The egg does not swim (sperm do), has no cell wall (only a jelly coat), and both egg and sperm carry the same number of chromosomes (haploid).",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "The question is about SIZE — what takes up most of the egg cell's volume?",
              "Think about what a fertilised egg needs immediately after fertilisation.",
              "Eggs do not move — eliminate the swimming option."
            ]
          },
          {
            id: "bio-cells-bm3-06",
            question: "Which statement correctly describes a difference between prokaryotic and eukaryotic ribosomes?",
            options: [
              "Prokaryotes have 80S ribosomes; eukaryotes have 70S ribosomes",
              "Prokaryotes have no ribosomes; eukaryotes have 80S ribosomes",
              "Prokaryotes have 70S ribosomes; eukaryotes have 80S ribosomes",
              "Both have 80S ribosomes but prokaryotic ribosomes lack rRNA"
            ],
            answerIndex: 2,
            explanation: "Prokaryotic ribosomes are 70S and eukaryotic ribosomes are 80S. This size difference is clinically important — some antibiotics (e.g. streptomycin) target 70S ribosomes to kill bacteria without harming human (80S) ribosomes.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "core",
            hints: [
              "The S stands for Svedberg — a sedimentation unit (not size directly).",
              "The smaller value belongs to bacteria.",
              "70S = prokaryote (bacteria); 80S = eukaryote (animal, plant, fungi)."
            ]
          },
          {
            id: "bio-cells-bm3-07",
            question: "A scale bar on a micrograph is 20 mm long and represents 5 µm. A red blood cell in the image is 16 mm in diameter. What is the actual diameter of the red blood cell?",
            options: ["4 µm", "8 µm", "40 µm", "0.4 µm"],
            answerIndex: 0,
            explanation: "Step 1 — magnification: 20 mm = 20 000 µm; magnification = 20 000 / 5 = ×4000. Step 2 — actual diameter = 16 mm / 4000 = 0.004 mm = 4 µm. (Human red blood cells are typically ~6–8 µm; this is a reasonable estimate.)",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "Use the scale bar to find magnification first.",
              "20 mm on image = 5 µm real. Convert: 20 mm = 20 000 µm. Magnification = 20 000 / 5 = 4000.",
              "Actual diameter = 16 mm / 4000 = 0.004 mm.",
              "Convert: 0.004 × 1000 = 4 µm."
            ],
            strategy: "Scale bar → magnification → actual size"
          },
          {
            id: "bio-cells-bm3-08",
            question: "Which adaptation allows the root hair cell to absorb mineral ions against a concentration gradient?",
            options: [
              "Its large surface area from the hair-like extension",
              "Its many chloroplasts generating ATP",
              "Its many mitochondria providing ATP for active transport",
              "Its permanent vacuole storing the absorbed minerals"
            ],
            answerIndex: 2,
            explanation: "Absorbing mineral ions against a concentration gradient requires active transport, which uses ATP. Root hair cells have many mitochondria to generate ATP by aerobic respiration, fuelling ion uptake pumps in the cell membrane. The hair-like extension increases surface area for osmosis (water) and transport, but the energy source for the active step is mitochondria.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "Active transport moves substances against a concentration gradient — what does it require?",
              "ATP is made by which organelle?",
              "Root hair cells are underground — chloroplasts would be useless there."
            ]
          },
          {
            id: "bio-cells-bm3-09",
            question: "CHALLENGE: A student claims that all cells in a multicellular organism contain identical DNA. Another claims specialised cells must have different DNA to do different jobs. Who is correct?",
            options: [
              "The second student — different cell types must have different DNA sequences",
              "The first student — all cells contain the same DNA; differences arise from which genes are expressed",
              "Neither — specialised cells have no DNA",
              "Both — some cells share DNA but red blood cells have unique DNA"
            ],
            answerIndex: 1,
            explanation: "In a multicellular organism, all nucleated cells (produced by mitosis from the zygote) contain the same complete genome. Specialisation arises from differential gene expression — different genes are switched on or off in different cell types, not from different DNA sequences. Red blood cells lose their nucleus but originally had the same DNA.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "challenge",
            hints: [
              "All body cells arise by mitosis from the zygote — what does mitosis copy?",
              "If the DNA is identical, how can cells be so different in structure?",
              "The answer involves gene expression, not DNA sequence differences."
            ],
            strategy: "Distinguish between genotype (DNA sequence) and phenotype (gene expression)"
          },
          {
            id: "bio-cells-bm3-10",
            question: "CHALLENGE: A cell with a volume of 1000 µm³ has 200 mitochondria. A second cell with the same volume has 800 mitochondria. Which conclusion is best supported?",
            options: [
              "The second cell is more likely to be a plant cell because it has more organelles",
              "The second cell has a higher rate of aerobic respiration and requires more ATP",
              "The second cell is prokaryotic because it has more internal structures",
              "The first cell must be a red blood cell because it has fewer mitochondria"
            ],
            answerIndex: 1,
            explanation: "Mitochondria are the site of aerobic respiration. A cell with 4× more mitochondria (in the same volume) is adapted to generate more ATP, strongly suggesting a higher energy demand — e.g. a muscle cell or sperm midpiece compared to a less active cell. More mitochondria = more capacity for aerobic respiration. Plants have mitochondria too; prokaryotes have no mitochondria; red blood cells have very few (not 200).",
            guideRef: "Animal Cell Structure",
            difficulty: "challenge",
            hints: [
              "What is the function of mitochondria? Link quantity to function.",
              "A higher mitochondria count means a greater capacity for which process?",
              "Eliminate options that are factually incorrect about other cell types."
            ],
            strategy: "Quantitative reasoning: more organelles = greater capacity for that organelle's function"
          }
        ]
      },
      {
        id: "bio-cells-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        questions: [
          {
            id: "bio-cells-bm4-01",
            question: "What material makes up the cell wall of a plant cell?",
            options: ["Murein", "Lignin", "Cellulose", "Chitin"],
            answerIndex: 2,
            explanation: "Plant cell walls are made of cellulose, a polysaccharide of glucose that forms strong fibres. Murein (peptidoglycan) makes bacterial walls; lignin is a secondary strengthening polymer (e.g. in xylem) deposited after cellulose; chitin is found in fungal cell walls.",
            guideRef: "Plant Cell Structure",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bm4-02",
            question: "Which organelle in a eukaryotic cell is the site of protein synthesis?",
            options: ["Mitochondrion", "Ribosome", "Nucleus", "Vacuole"],
            answerIndex: 1,
            explanation: "Ribosomes are the sites of protein synthesis, translating mRNA into polypeptide chains. They are found free in the cytoplasm or attached to the endoplasmic reticulum. The nucleus contains the DNA template but is not itself the site of synthesis.",
            guideRef: "Animal Cell Structure",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bm4-03",
            question: "At magnification ×1500 an image of a cheek cell is 36 mm long. What is the actual length of the cell in µm?",
            options: ["24 µm", "240 µm", "2.4 µm", "0.024 µm"],
            answerIndex: 0,
            explanation: "Actual size = Image size / Magnification = 36 mm / 1500 = 0.024 mm. Convert: 0.024 × 1000 = 24 µm. Human cheek (epithelial) cells are typically 40–60 µm, so 24 µm is at the lower end but plausible for this calculation.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "Actual size = Image size / Magnification.",
              "36 / 1500 = 0.024 mm.",
              "0.024 mm × 1000 = 24 µm."
            ],
            strategy: "Rearrange formula, calculate, convert units"
          },
          {
            id: "bio-cells-bm4-04",
            question: "Which correctly identifies the structure unique to the egg cell (ovum) that prevents polyspermy (entry of more than one sperm)?",
            options: [
              "Acrosome — releases enzymes to harden after fertilisation",
              "Jelly coat (zona pellucida) — hardens rapidly after one sperm has fused to block others",
              "Flagellum — sweeps away extra sperm",
              "Mitochondria — produce ATP to close the cell membrane channels"
            ],
            answerIndex: 1,
            explanation: "After a sperm fuses with the egg, the zona pellucida (jelly coat) hardens rapidly in a cortical reaction, preventing additional sperm from penetrating. The acrosome is a sperm structure; the egg has no flagellum; and mitochondria are not involved in this blocking mechanism.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "The acrosome belongs to the sperm, not the egg — eliminate that option.",
              "The egg has a protective coat — what is it called?",
              "After fertilisation something about this coat changes to block others."
            ]
          },
          {
            id: "bio-cells-bm4-05",
            question: "Which level of organisation is the circulatory system (heart, blood vessels, and blood)?",
            options: ["Tissue", "Organ", "Organ system", "Organism"],
            answerIndex: 2,
            explanation: "The circulatory system is an organ system — a group of organs (heart, blood vessels) and tissues (blood) working together to carry out a coordinated function (circulation). The heart alone is an organ.",
            guideRef: "Levels of Organisation",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bm4-06",
            question: "A student examines two cells. Cell P has no cell wall, a large nucleus, and mitochondria. Cell Q has a cell wall, a large vacuole, no chloroplasts, and a nucleus. What types of cells are P and Q?",
            options: [
              "P = plant cell; Q = bacterial cell",
              "P = animal cell; Q = plant cell (non-photosynthetic, e.g. root cell)",
              "P = bacterium; Q = plant cell",
              "P = animal cell; Q = bacterium"
            ],
            answerIndex: 1,
            explanation: "Cell P (no cell wall, large nucleus, mitochondria) is an animal cell. Cell Q (cell wall, large vacuole, nucleus, no chloroplasts) is a plant cell — specifically a non-photosynthetic one such as a root cell, which lacks chloroplasts but retains the other plant features. Bacteria have no membrane-bound nucleus.",
            guideRef: "Plant Cell Structure",
            difficulty: "core",
            hints: [
              "Does a bacterium have a membrane-bound nucleus? No — so Q with a nucleus is not a bacterium.",
              "Cell P lacks a cell wall and has a large nucleus — which cell type fits?",
              "Cell Q has a plant wall and vacuole but no chloroplasts — can a plant cell lack chloroplasts?"
            ],
            strategy: "Use absence and presence of features together — no nucleus = bacterium; no chloroplast ≠ not a plant cell"
          },
          {
            id: "bio-cells-bm4-07",
            question: "In a diagram of a cell, the image of the nucleus is 18 mm in diameter. The actual nucleus is 6 µm in diameter. What is the magnification?",
            options: ["×30", "×300", "×3000", "×30 000"],
            answerIndex: 2,
            explanation: "Convert 18 mm = 18 000 µm. Magnification = 18 000 / 6 = 3000. A nuclear diameter of 6 µm is biologically reasonable (nuclei are typically 5–10 µm).",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "Both values must be in the same unit.",
              "18 mm × 1000 = 18 000 µm.",
              "18 000 ÷ 6 = 3000."
            ],
            strategy: "Convert, then divide"
          },
          {
            id: "bio-cells-bm4-08",
            question: "Which statement about the nuclear envelope is correct?",
            options: [
              "It is a single membrane found in both prokaryotic and eukaryotic cells",
              "It is a double membrane surrounding the nucleus in eukaryotic cells only",
              "It is a single membrane found only in plant cells",
              "It is made of cellulose and found in all eukaryotic cells"
            ],
            answerIndex: 1,
            explanation: "The nuclear envelope is a double membrane (two phospholipid bilayers with a perinuclear space between them) that surrounds the nucleus. It is found only in eukaryotic cells — prokaryotes (bacteria) have no nuclear envelope. It is not made of cellulose (that is the plant cell wall).",
            guideRef: "Animal Cell Structure",
            difficulty: "core",
            hints: [
              "Prokaryotes have no membrane-bound nucleus — so the nuclear envelope must be eukaryotic.",
              "Count the membranes: the nuclear envelope is a double membrane.",
              "Cellulose is the plant cell wall material, not the nuclear envelope."
            ]
          },
          {
            id: "bio-cells-bm4-09",
            question: "CHALLENGE: An antibiotic prevents the synthesis of murein. Which type of cell would be killed and why?",
            options: [
              "Animal cells — because they rely on murein for structural support",
              "Plant cells — because murein is the main component of their cell wall",
              "Bacterial cells — because they require murein to build and maintain their cell wall",
              "All eukaryotic cells — because murein is found in mitochondria"
            ],
            answerIndex: 2,
            explanation: "Murein (peptidoglycan) is the structural component of bacterial cell walls. Without it, the wall cannot be maintained; bacteria lyse due to osmotic pressure. Animal and plant cells do not contain murein — animals have no wall, plants have a cellulose wall. Mitochondria do not contain murein.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "challenge",
            hints: [
              "Which cell type has a murein cell wall?",
              "Without a cell wall, what happens to a bacterium in a hypotonic environment?",
              "Does murein exist in any eukaryotic structure?"
            ],
            strategy: "Identify the target molecule's location, then predict the consequence of its absence"
          },
          {
            id: "bio-cells-bm4-10",
            question: "CHALLENGE: A cell biologist measures the surface area to volume ratio of four cells (all spherical). Cell W: SA/V = 6; Cell X: SA/V = 3; Cell Y: SA/V = 2; Cell Z: SA/V = 1. Which cell would have the greatest difficulty exchanging substances with its environment by diffusion alone?",
            options: ["Cell W", "Cell X", "Cell Y", "Cell Z"],
            answerIndex: 3,
            explanation: "The smaller the SA:V ratio, the more difficult diffusion becomes, as there is less surface area per unit of volume to allow gas exchange, nutrient uptake, and waste removal. Cell Z (SA/V = 1) has the lowest ratio and would struggle most with diffusion — this is why large multicellular organisms need circulatory systems rather than relying on diffusion alone.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "challenge",
            hints: [
              "A high SA:V ratio means more surface area relative to volume — exchange is easier.",
              "A low SA:V ratio means diffusion distances increase relative to the cell's volume.",
              "Which numerical value is lowest?"
            ],
            strategy: "SA:V ratio reasoning — lower ratio = greater diffusion problem"
          }
        ]
      }
    ],
    qaPapers: [
      {
        id: "bio-cells-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        questions: [
          {
            id: "bio-cells-bq1-01",
            question: "State the function of each of the following organelles:\n(a) Ribosome [1]\n(b) Mitochondrion [1]\n(c) Chloroplast [1]\n(d) Nucleus [1]",
            marks: 4,
            modelAnswer: "(a) Ribosome: site of protein synthesis — translates mRNA into polypeptide chains.\n(b) Mitochondrion: site of aerobic respiration, releasing energy as ATP from glucose and oxygen.\n(c) Chloroplast: site of photosynthesis — uses light energy (via chlorophyll) to convert CO2 and water into glucose and oxygen.\n(d) Nucleus: controls cell activities; contains chromosomal DNA which carries genetic information for protein synthesis.",
            markScheme: [
              "(a) Protein synthesis / translation of mRNA [1]",
              "(b) Aerobic respiration / ATP production from glucose [1]",
              "(c) Photosynthesis / conversion of light energy to glucose [1]",
              "(d) Controls cell activities / contains DNA / directs protein synthesis [1]"
            ],
            commonError: "Confusing mitochondria (aerobic respiration) with chloroplasts (photosynthesis) — students often reverse these two.",
            guideRef: "Animal Cell Structure",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bq1-02",
            question: "A student looks at a cheek cell and a bacterial cell through a microscope.\n(a) State TWO structures found in the cheek cell but NOT in the bacterial cell. [2]\n(b) State ONE structure found in the bacterial cell but NOT in the cheek cell. [1]\n(c) State ONE structure found in BOTH cells. [1]",
            marks: 4,
            modelAnswer: "(a) Two structures in cheek cell but not bacterium: (1) membrane-bound nucleus (nuclear envelope) and (2) mitochondria. (Also accept: endoplasmic reticulum.)\n(b) One structure in bacterium but not cheek cell: plasmid (or murein cell wall; or circular chromosome — accept 'circular DNA without nuclear membrane').\n(c) One structure in both: ribosomes (or cell membrane).",
            markScheme: [
              "(a) Membrane-bound nucleus / nuclear envelope [1]",
              "(a) Mitochondria / endoplasmic reticulum [1]",
              "(b) Plasmid / murein cell wall / circular chromosome [1]",
              "(c) Ribosomes / cell membrane [1]"
            ],
            commonError: "Giving 'nucleus' for part (c) — bacteria do not have a membrane-bound nucleus, so it cannot be a shared structure. The DNA is shared in concept but not in structural form.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "core",
            hints: [
              "For (a): think about which organelles are uniquely eukaryotic.",
              "For (b): what does a bacterium have that a cheek cell completely lacks?",
              "For (c): which structures are universal to all living cells?"
            ],
            strategy: "Venn diagram approach — list features of each, identify overlap and unique sets"
          },
          {
            id: "bio-cells-bq1-03",
            question: "A photograph of a leaf cross-section is taken at magnification ×400. A palisade mesophyll cell in the photograph is 60 mm tall.\n(a) Calculate the actual height of the cell. Give your answer in µm. Show your working. [3]\n(b) Explain why palisade mesophyll cells are tall and packed with chloroplasts. [2]",
            marks: 5,
            modelAnswer: "(a) Actual size = Image size / Magnification = 60 mm / 400 = 0.15 mm. Convert: 0.15 × 1000 = 150 µm.\n(b) Palisade cells are positioned near the upper surface of the leaf to receive the most light. Their tall, column-shaped form maximises the number of chloroplasts that can be stacked in the direction of light (i.e. exposes maximum surface area to incoming light). Being packed with chloroplasts provides a large amount of chlorophyll to absorb light energy, maximising the rate of photosynthesis.",
            markScheme: [
              "(a) Correct formula applied: Actual = Image / Magnification [1]",
              "(a) 60 / 400 = 0.15 mm [1]",
              "(a) Correct conversion: 0.15 × 1000 = 150 µm [1]",
              "(b) Tall shape / large surface area at top for maximum light capture [1]",
              "(b) Many chloroplasts = more chlorophyll = higher rate of photosynthesis [1]"
            ],
            commonError: "In (a): dividing 400 by 60 instead of 60 by 400 — always divide image size by magnification to find actual size.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "Rearrange the formula: Actual size = Image size / Magnification.",
              "60 ÷ 400 = 0.15 mm — now convert to µm.",
              "For (b): think about what palisade cells need and where they are positioned in the leaf."
            ],
            strategy: "Formula triangle for magnification; structure-function for part (b)",
            solutions: [
              {
                label: "Part (a): actual size from magnification",
                steps: [
                  "Formula: Actual size = Image size / Magnification",
                  "Substitute: 60 mm / 400 = 0.15 mm",
                  "Convert to µm: 0.15 × 1000 = 150 µm"
                ]
              }
            ]
          },
          {
            id: "bio-cells-bq1-04",
            question: "Describe and explain how the structure of a root hair cell is adapted to its function. [4]",
            marks: 4,
            modelAnswer: "Root hair cells have a long, thin hair-like extension that greatly increases the surface area of the cell. This large surface area increases the rate of absorption of water (by osmosis) and mineral ions from the soil. The thin cell wall allows easy entry of water. Root hair cells also contain many mitochondria, which carry out aerobic respiration to produce ATP. This ATP powers the active transport pumps in the cell membrane, enabling the uptake of mineral ions against their concentration gradient.",
            markScheme: [
              "Long hair-like extension / large surface area [1]",
              "Increases rate of absorption of water / mineral ions [1]",
              "Many mitochondria [1]",
              "Provide ATP for active transport of mineral ions / aerobic respiration [1]"
            ],
            commonError: "Saying root hair cells have chloroplasts — they are underground and cannot photosynthesise, so they have no chloroplasts.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "Name the structural feature that gives the cell its name.",
              "What does this feature do to the cell's surface area, and why does that matter?",
              "What process requires ATP, and which organelle provides it?"
            ],
            strategy: "Two adaptations: (1) surface area for absorption; (2) mitochondria for active transport"
          },
          {
            id: "bio-cells-bq1-05",
            question: "The diagram below represents the levels of organisation in a named animal.\n(a) Complete the hierarchy from smallest to largest: Organelle → ______ → Tissue → ______ → ______ → Organism. [3]\n(b) Give a named example of a tissue found in the human body and state its function. [2]",
            marks: 5,
            modelAnswer: "(a) Organelle → Cell → Tissue → Organ → Organ system → Organism.\n(b) Named tissue: muscle tissue (or epithelial tissue / nerve tissue / blood). Function of muscle tissue: contracts to produce movement / generates force.",
            markScheme: [
              "(a) Cell [1]",
              "(a) Organ [1]",
              "(a) Organ system [1]",
              "(b) Named tissue (muscle / epithelial / nerve / blood / connective) [1]",
              "(b) Correct matching function [1]"
            ],
            commonError: "Writing 'organ system' before 'organ' — the order is always organ then organ system.",
            guideRef: "Levels of Organisation",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bq1-06",
            question: "Explain why bacterial infections can be treated with antibiotics but viral infections cannot. [3]",
            marks: 3,
            modelAnswer: "Antibiotics work by targeting structures or processes that are unique to bacterial cells, such as the murein cell wall or the 70S ribosomes. Because human cells lack these structures (no murein wall, 80S ribosomes), antibiotics selectively kill bacteria without harming human cells. Viruses, however, are not cells — they have no cell wall, no ribosomes, and no independent metabolism. They replicate inside host cells using the host's own machinery, so any drug that disrupts replication would also damage the host cell.",
            markScheme: [
              "Antibiotics target bacterial-specific structures (e.g. murein wall / 70S ribosomes) [1]",
              "Human cells lack these structures / antibiotics do not harm human cells [1]",
              "Viruses are not cells / have no cell structures / replicate inside host cells [1]"
            ],
            commonError: "Saying 'viruses are immune to antibiotics' without explaining why — the key is that viruses have no cell structures to target.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "challenge",
            hints: [
              "What structures do antibiotics typically attack in bacteria?",
              "Do human cells have the same structures?",
              "Viruses are not cells — what does this mean for antibiotic targeting?"
            ],
            strategy: "Selective toxicity argument: drug must have a bacterial-only target"
          },
          {
            id: "bio-cells-bq1-07",
            question: "A student draws a cell at magnification ×600. The drawing shows the nucleus with a diameter of 24 mm.\n(a) Calculate the actual diameter of the nucleus in µm. [2]\n(b) The student also draws a mitochondrion at the same magnification, 6 mm long. Calculate the actual length of the mitochondrion in µm. [2]",
            marks: 4,
            modelAnswer: "(a) Actual diameter = Image / Magnification = 24 mm / 600 = 0.04 mm = 40 µm.\n(b) Actual length = 6 mm / 600 = 0.01 mm = 10 µm.",
            markScheme: [
              "(a) 24 / 600 = 0.04 mm [1]",
              "(a) Conversion: 0.04 × 1000 = 40 µm [1]",
              "(b) 6 / 600 = 0.01 mm [1]",
              "(b) Conversion: 0.01 × 1000 = 10 µm [1]"
            ],
            commonError: "Not converting mm to µm at the end, leaving the answer in mm.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "Apply the same formula to both parts: Actual = Image / Magnification.",
              "For (a): 24 / 600 = 0.04 mm → × 1000 = 40 µm.",
              "For (b): 6 / 600 = 0.01 mm → × 1000 = 10 µm."
            ],
            strategy: "Apply formula twice; remember to convert each time",
            solutions: [
              {
                label: "Both parts — same method",
                steps: [
                  "(a) Actual = 24 / 600 = 0.04 mm; 0.04 × 1000 = 40 µm",
                  "(b) Actual = 6 / 600 = 0.01 mm; 0.01 × 1000 = 10 µm"
                ]
              }
            ]
          },
          {
            id: "bio-cells-bq1-08",
            question: "Compare the structure of a plant cell with that of an animal cell. Include at least FOUR structural points. [4]",
            marks: 4,
            modelAnswer: "Both plant and animal cells have a nucleus (containing DNA), a cell membrane, cytoplasm, mitochondria and ribosomes. Plant cells additionally have: a cellulose cell wall outside the cell membrane, providing rigidity; chloroplasts containing chlorophyll for photosynthesis; and a large permanent sap vacuole filled with cell sap that maintains turgor pressure. Animal cells have none of these three structures.",
            markScheme: [
              "Both have nucleus / cell membrane / cytoplasm / mitochondria / ribosomes (any two shared features for context, not marked independently — structural comparison required) [0]",
              "Plant cell has cellulose cell wall / animal cell does not [1]",
              "Plant cell has chloroplasts / animal cell does not [1]",
              "Plant cell has large permanent sap vacuole / animal cell does not [1]",
              "Correctly states at least one shared feature (e.g. both have mitochondria / both have ribosomes) [1]"
            ],
            commonError: "Only listing plant features without comparing — the question asks to compare, so differences AND similarities must both be addressed.",
            guideRef: "Plant Cell Structure",
            difficulty: "core",
            hints: [
              "Start by listing features common to both.",
              "Then identify the three structures unique to plant cells.",
              "Use language like 'both have…' and 'plant cells have… whereas animal cells do not.'"
            ],
            strategy: "Comparative paragraph: shared features first, then unique features"
          },
          {
            id: "bio-cells-bq1-09",
            question: "CHALLENGE: A student is given an unknown cell to identify. It has: a cell membrane, cytoplasm, 80S ribosomes, a membrane-bound nucleus, no chloroplasts, no permanent vacuole, no cell wall, and many mitochondria.\n(a) Identify the type of cell. Give TWO reasons for your answer. [3]\n(b) Suggest one specific named cell of this type that would have an especially large number of mitochondria. Explain your choice. [2]",
            marks: 5,
            modelAnswer: "(a) The cell is an animal cell. Reason 1: it has a membrane-bound nucleus and 80S ribosomes, confirming it is eukaryotic. Reason 2: it has no cell wall, no chloroplasts and no permanent vacuole — the three structures that distinguish plant cells from animal cells are all absent.\n(b) A sperm cell (or cardiac muscle cell / liver cell). The sperm cell has many mitochondria in its midpiece to generate ATP for the flagellum to power swimming. (Accept cardiac muscle — which contracts continuously and requires sustained ATP supply.)",
            markScheme: [
              "(a) Animal cell [1]",
              "(a) Eukaryotic features: membrane-bound nucleus / 80S ribosomes [1]",
              "(a) Absence of plant/bacterial features: no cell wall / no chloroplasts [1]",
              "(b) Named specific cell (sperm / cardiac muscle / liver cell) [1]",
              "(b) Correct explanation linking mitochondria to energy demand of that cell [1]"
            ],
            commonError: "Identifying the cell as 'eukaryotic' without specifying animal — the absence of a cell wall and chloroplasts narrows it to animal.",
            guideRef: "Animal Cell Structure",
            difficulty: "challenge",
            hints: [
              "Use a process of elimination: eukaryotic (80S, membrane-bound nucleus) → not plant (no wall, no chloroplast) → animal.",
              "For (b): which animal cells have the highest energy demand?",
              "Link energy demand → ATP → mitochondria."
            ],
            strategy: "Systematic identification: first domain (pro/eu), then kingdom (plant/animal/fungi)"
          },
          {
            id: "bio-cells-bq1-10",
            question: "CHALLENGE: An electron micrograph is taken at ×50 000 magnification. The scale bar on the printed image is 40 mm long and represents 0.8 µm.\n(a) Show that the magnification calculated from the scale bar is consistent with the stated magnification of ×50 000. [3]\n(b) A student measures a ribosome in the image as 2.5 mm in diameter. Calculate the actual diameter of the ribosome in nm. (1 µm = 1000 nm) [3]",
            marks: 6,
            modelAnswer: "(a) Scale bar image length = 40 mm = 40 000 µm. Scale bar actual length = 0.8 µm. Magnification = 40 000 / 0.8 = 50 000. This matches the stated magnification of ×50 000. ✓\n(b) Actual diameter = Image / Magnification = 2.5 mm / 50 000 = 0.00005 mm. Convert to µm: 0.00005 × 1000 = 0.05 µm. Convert to nm: 0.05 × 1000 = 50 nm. (Ribosomes are ~25 nm; 50 nm is within the range for a drawn/measured approximation.)",
            markScheme: [
              "(a) Conversion: 40 mm = 40 000 µm [1]",
              "(a) Magnification = 40 000 / 0.8 = 50 000 [1]",
              "(a) Correct conclusion: consistent with stated magnification [1]",
              "(b) Actual = 2.5 / 50 000 = 0.00005 mm [1]",
              "(b) Convert to µm: 0.05 µm [1]",
              "(b) Convert to nm: 50 nm [1]"
            ],
            commonError: "In (b): stopping at µm instead of continuing to nm as the question requests. In (a): not showing the calculation explicitly.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "challenge",
            hints: [
              "For (a): use the scale bar exactly as in previous problems — convert to same units, divide.",
              "For (b): Actual = 2.5 / 50 000. Work carefully — lots of zeroes.",
              "Chain the conversions: mm → µm (×1000) → nm (×1000).",
              "Check: ribosomes are ~25 nm. Your answer of ~50 nm is in the right order of magnitude."
            ],
            strategy: "Scale bar verification, then chain unit conversions",
            solutions: [
              {
                label: "Part (a): scale bar check",
                steps: [
                  "Scale bar image = 40 mm = 40 000 µm",
                  "Scale bar actual = 0.8 µm",
                  "Magnification = 40 000 / 0.8 = 50 000 ✓"
                ]
              },
              {
                label: "Part (b): ribosome diameter",
                steps: [
                  "Actual = 2.5 mm / 50 000 = 0.00005 mm",
                  "Convert: 0.00005 × 1000 = 0.05 µm",
                  "Convert: 0.05 × 1000 = 50 nm"
                ]
              }
            ]
          }
        ]
      },
      {
        id: "bio-cells-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        questions: [
          {
            id: "bio-cells-bq2-01",
            question: "State what is meant by the term 'selectively permeable' as applied to the cell membrane. [2]",
            marks: 2,
            modelAnswer: "Selectively permeable means the cell membrane allows some substances to pass through it but not others. Small, non-polar molecules (e.g. oxygen, carbon dioxide, water) can pass freely, while larger molecules or ions require protein channels or carriers.",
            markScheme: [
              "Allows some substances to pass through / not all substances [1]",
              "Controls what enters and leaves the cell / specific substances pass more easily [1]"
            ],
            commonError: "Writing 'semi-permeable' — the preferred IGCSE term is 'selectively permeable'. Also: vaguely saying 'controls entry' without stating that some substances pass but others do not.",
            guideRef: "Animal Cell Structure",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bq2-02",
            question: "Explain why a plant cell placed in pure water does not burst, even though water enters by osmosis. [3]",
            marks: 3,
            modelAnswer: "When water enters the plant cell by osmosis, the vacuole expands and pushes the cytoplasm and cell membrane outward against the cell wall. The rigid cellulose cell wall resists this outward pressure and exerts an equal inward pressure (wall pressure). This prevents the cell from expanding further and bursting. The cell becomes turgid but does not lyse because the wall limits expansion.",
            markScheme: [
              "Water enters by osmosis into the vacuole / cytoplasm [1]",
              "Cell wall is rigid / made of cellulose — exerts inward pressure / prevents expansion [1]",
              "Cell becomes turgid but does not burst because cell wall resists / limits expansion [1]"
            ],
            commonError: "Saying the cell 'stops taking in water' — the cell wall provides resistance, making further entry of water increasingly difficult, but the key point is structural resistance by the wall.",
            guideRef: "Plant Cell Structure",
            difficulty: "core",
            hints: [
              "What happens to the vacuole as water enters?",
              "What surrounds the cell membrane and provides structural support?",
              "How does the cell wall prevent bursting?"
            ],
            strategy: "Cause-effect chain: osmosis → vacuole expands → wall resists → turgor builds → no burst"
          },
          {
            id: "bio-cells-bq2-03",
            question: "A student examines a prepared slide of onion root tip cells at magnification ×400. One cell is 50 mm long on the image.\n(a) Calculate the actual length of the cell. Give your answer in µm. [3]\n(b) The student then uses a ×1000 magnification lens. Calculate the new image length of the same cell. Give your answer in mm. [2]",
            marks: 5,
            modelAnswer: "(a) Actual size = Image / Magnification = 50 / 400 = 0.125 mm. Convert: 0.125 × 1000 = 125 µm.\n(b) At ×1000: Image size = Actual size × Magnification = 0.125 mm × 1000 = 125 mm.",
            markScheme: [
              "(a) Correct formula: Actual = 50 / 400 [1]",
              "(a) 50 / 400 = 0.125 mm [1]",
              "(a) Conversion: 0.125 × 1000 = 125 µm [1]",
              "(b) Image = Actual × Magnification = 0.125 × 1000 [1]",
              "(b) = 125 mm [1]"
            ],
            commonError: "In (b): dividing instead of multiplying — to find image size, multiply actual size by magnification.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "For (a): Actual = Image / Magnification. Then convert mm to µm.",
              "For (b): rearrange: Image = Actual × Magnification.",
              "Use the actual size from (a) in mm (0.125 mm) not µm."
            ],
            strategy: "Two rearrangements of the same formula — be clear which quantity you are solving for",
            solutions: [
              {
                label: "Two-way rearrangement",
                steps: [
                  "(a) Actual = 50 / 400 = 0.125 mm = 125 µm",
                  "(b) Image = 0.125 mm × 1000 = 125 mm"
                ]
              }
            ]
          },
          {
            id: "bio-cells-bq2-04",
            question: "Describe the structure of a bacterial cell under the following headings:\n(a) Genetic material [2]\n(b) Cell wall [1]\n(c) Organelles present [2]",
            marks: 5,
            modelAnswer: "(a) Bacterial genetic material consists of a single circular chromosome (double-stranded DNA) that lies free in the cytoplasm — there is no nuclear membrane surrounding it. Additionally, bacteria may contain one or more plasmids — small, circular pieces of DNA separate from the main chromosome, often carrying genes for antibiotic resistance.\n(b) The bacterial cell wall is made of murein (peptidoglycan), which is different from the cellulose cell wall of plants. It maintains cell shape and prevents the cell from bursting.\n(c) Bacteria contain ribosomes (70S, smaller than eukaryotic 80S ribosomes) for protein synthesis. They do NOT contain mitochondria or chloroplasts — these are eukaryotic organelles.",
            markScheme: [
              "(a) Single circular chromosome / circular DNA / no nuclear membrane [1]",
              "(a) Plasmids — small circular DNA fragments / may carry resistance genes [1]",
              "(b) Murein / peptidoglycan cell wall [1]",
              "(c) Ribosomes (70S) [1]",
              "(c) No mitochondria / no chloroplasts [1]"
            ],
            commonError: "Saying bacteria have 'small mitochondria' — bacteria have NO mitochondria. Respiration in bacteria occurs at the cell membrane.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "core",
            hints: [
              "For (a): two types of DNA structures — main chromosome and extras.",
              "For (b): what is the wall made of? It's not cellulose.",
              "For (c): bacteria are not eukaryotes — which organelles do they lack?"
            ]
          },
          {
            id: "bio-cells-bq2-05",
            question: "Explain how the structure of a red blood cell is adapted to transport oxygen efficiently. [4]",
            marks: 4,
            modelAnswer: "Red blood cells have a biconcave disc shape, which gives them a larger surface area relative to their volume compared with a spherical cell. This increases the rate of oxygen diffusion into and out of the cell across the cell membrane. Red blood cells also lack a nucleus — by losing the nucleus, the cell has more internal volume that can be filled with haemoglobin molecules. More haemoglobin means more oxygen can be carried per cell. The flexible membrane allows red blood cells to squeeze through narrow capillaries, maintaining contact with tissues for oxygen delivery.",
            markScheme: [
              "Biconcave shape / large surface area : volume ratio [1]",
              "Increases rate of O2 diffusion [1]",
              "No nucleus — more space for haemoglobin [1]",
              "More haemoglobin = more oxygen carried [1]"
            ],
            commonError: "Saying red blood cells 'produce oxygen' — they carry oxygen bound to haemoglobin but do not produce it.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "Name the unusual shape and explain what it does to surface area.",
              "What is absent from a red blood cell and what does this allow more of?",
              "Link haemoglobin content to oxygen-carrying capacity."
            ],
            strategy: "Two adaptations: biconcave shape (SA); anucleate (more Hb) — link each to function"
          },
          {
            id: "bio-cells-bq2-06",
            question: "A biology student states: 'The heart is a tissue because it is made of muscle cells.' Evaluate this statement. [3]",
            marks: 3,
            modelAnswer: "The statement is incorrect. The heart is an organ, not a tissue. A tissue is a group of similar cells working together (e.g. cardiac muscle tissue). An organ is made of two or more different tissue types working together to perform a function. The heart contains cardiac muscle tissue, but it also contains epithelial tissue (lining the chambers), connective tissue, and nervous tissue. Because it is composed of multiple different tissue types, the heart is classified as an organ.",
            markScheme: [
              "Statement is incorrect — the heart is an organ, not a tissue [1]",
              "A tissue is a group of similar cells; an organ contains multiple different tissue types [1]",
              "The heart contains cardiac muscle tissue plus epithelial / connective / nervous tissue [1]"
            ],
            commonError: "Agreeing with the student without questioning whether the heart contains only one tissue type — it does not.",
            guideRef: "Levels of Organisation",
            difficulty: "core",
            hints: [
              "Define tissue and define organ — which definition fits the heart?",
              "Does the heart contain only muscle cells?",
              "What other tissues are needed for the heart to function?"
            ],
            strategy: "Evaluate = judge + justify; use definitions to expose the error"
          },
          {
            id: "bio-cells-bq2-07",
            question: "CHALLENGE: A researcher finds a cell with the following features: 80S ribosomes, a membrane-bound nucleus, no cell wall, contains many mitochondria, and has a very long single projection from one end of the cell body.\n(a) Identify the most likely cell type and explain your reasoning. [3]\n(b) Suggest why this cell has a high density of mitochondria concentrated at the base of the projection. [2]",
            marks: 5,
            modelAnswer: "(a) The cell is most likely a sperm cell (or a neurone). It is eukaryotic (80S ribosomes, membrane-bound nucleus). It is an animal cell (no cell wall). The single long projection is most consistent with a flagellum (sperm) or an axon (neurone); either is acceptable with correct reasoning. For sperm: the long projection is the flagellum for swimming; for neurone: the long projection is the axon for impulse transmission.\n(b) Mitochondria at the base of the flagellum (midpiece) carry out aerobic respiration, producing ATP to power the dynein motor proteins within the flagellum that cause it to beat and propel the sperm. High mitochondria density here maximises local ATP availability where energy demand is greatest.",
            markScheme: [
              "(a) Correct identification: sperm cell (or neurone) [1]",
              "(a) Eukaryotic reasoning: 80S / membrane-bound nucleus [1]",
              "(a) Animal cell: no cell wall; long projection = flagellum/axon [1]",
              "(b) Mitochondria produce ATP by aerobic respiration [1]",
              "(b) ATP powers the flagellum (motor proteins) / highest energy demand at base of flagellum [1]"
            ],
            commonError: "Identifying the cell as a plant cell because it has 'a projection' — plant cells do not have flagella or axons.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "challenge",
            hints: [
              "For (a): work through eukaryote/prokaryote, then animal/plant systematically.",
              "The long single projection is a key distinguishing feature — which animal cells have one?",
              "For (b): what requires energy at the base of a flagellum?"
            ],
            strategy: "Systematic elimination → structure-function for the projection"
          },
          {
            id: "bio-cells-bq2-08",
            question: "Explain the importance of the levels of organisation from cell to organism in a named multicellular animal. [5]",
            marks: 5,
            modelAnswer: "In a human (a named multicellular animal), specialised cells are grouped into tissues to perform specific functions efficiently. For example, cardiac muscle cells form cardiac muscle tissue, which is specialised to contract rhythmically. Different tissues come together to form organs: cardiac muscle tissue, epithelial tissue, and connective tissue form the heart (an organ). The heart works with blood vessels and blood as part of the circulatory system (an organ system). All the organ systems together — circulatory, respiratory, digestive, nervous, etc. — form the complete human organism. This hierarchical organisation allows division of labour: each level specialises, while coordination between levels allows complex functions that no single cell could achieve alone.",
            markScheme: [
              "Named multicellular animal (e.g. human) [1]",
              "Cells → tissue: similar cells grouped for a shared function; named example [1]",
              "Tissue → organ: multiple tissues form an organ; named example [1]",
              "Organ → organ system: organs with related functions form a system; named example [1]",
              "Explains advantage/importance of organisation: division of labour / complex function / efficiency [1]"
            ],
            commonError: "Listing the levels without explaining their importance — the question asks to 'explain the importance', so the 'why' must be addressed.",
            guideRef: "Levels of Organisation",
            difficulty: "core",
            hints: [
              "Name a specific animal and trace one cell type through all levels.",
              "Explain what each level adds beyond the level below.",
              "The importance lies in division of labour and coordination."
            ],
            strategy: "Narrative answer: use one example thread from cell to organism, then state the 'why'"
          },
          {
            id: "bio-cells-bq2-09",
            question: "CHALLENGE: The endosymbiotic theory proposes that mitochondria evolved from ancient bacteria that were engulfed by a larger host cell.\n(a) Give TWO pieces of structural evidence from the study of mitochondria that support this theory. [2]\n(b) Explain one way in which this theory is relevant to distinguishing prokaryotic and eukaryotic cells. [2]",
            marks: 4,
            modelAnswer: "(a) Two pieces of evidence: (1) Mitochondria have their own circular DNA (similar to bacterial circular chromosomes), not linear chromosomes as in the eukaryotic nucleus. (2) Mitochondria have a double membrane — the inner membrane is thought to be the original bacterial cell membrane, and the outer membrane is from the engulfing host cell.\n(Also accept: mitochondria have 70S ribosomes, similar to bacteria, not 80S ribosomes as found in the eukaryotic cytoplasm.)\n(b) The theory explains why eukaryotic cells have membrane-bound organelles (mitochondria, chloroplasts) while prokaryotic cells do not. If mitochondria originated as separate bacteria, it makes sense that prokaryotes — which preceded eukaryotes — do not contain them. The presence of a double membrane and prokaryote-like internal features in mitochondria highlights the fundamental difference between cells that have internalised such organelles (eukaryotes) and those that have not (prokaryotes).",
            markScheme: [
              "(a) Circular DNA in mitochondria (similar to bacteria) [1]",
              "(a) Double membrane / 70S ribosomes in mitochondria [1]",
              "(b) Explains why eukaryotes have membrane-bound organelles / prokaryotes do not [1]",
              "(b) Links endosymbiosis to the defining prokaryote-eukaryote distinction [1]"
            ],
            commonError: "Saying mitochondria 'look like bacteria' as the evidence — the specific structural features (circular DNA, double membrane, 70S ribosomes) are required.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "challenge",
            hints: [
              "Think about what bacteria have (circular DNA, 70S ribosomes, cell membrane) and whether mitochondria share these.",
              "The double membrane of mitochondria is a clue — where might each membrane have come from?",
              "For (b): prokaryotes evolved first; mitochondria appeared when eukaryotes engulfed bacteria."
            ],
            strategy: "Structural comparison: mitochondria vs bacteria; then apply to pro/eu distinction"
          },
          {
            id: "bio-cells-bq2-10",
            question: "CHALLENGE: A student wants to calculate the magnification of an image of a cell. She measures the image length of the cell as 84 mm. She also measures the scale bar: it is 14 mm on the image and represents 2 µm.\n(a) Calculate the magnification using the scale bar. Show your working. [3]\n(b) Using the magnification calculated in (a), find the actual length of the cell in µm. [2]\n(c) The student repeats the experiment but now uses a scale bar of 5 mm (image) representing 1 µm. She finds the cell image length is 30 mm. Calculate the actual length and state whether it is consistent with your answer in (b). [3]",
            marks: 8,
            modelAnswer: "(a) Scale bar image = 14 mm = 14 000 µm. Actual = 2 µm. Magnification = 14 000 / 2 = ×7000.\n(b) Actual cell = 84 mm / 7000 = 0.012 mm = 12 µm.\n(c) New magnification: 5 mm = 5000 µm; magnification = 5000 / 1 = ×5000. Actual cell = 30 mm / 5000 = 0.006 mm = 6 µm. This is NOT consistent with (b) — 6 µm ≠ 12 µm. The inconsistency suggests a measurement error in one of the experiments (likely the cell image or scale bar measurement). (Award marks for correct working even if student says 'consistent' due to rounding — check their arithmetic.)",
            markScheme: [
              "(a) Conversion: 14 mm = 14 000 µm [1]",
              "(a) Magnification = 14 000 / 2 = 7000 [1]",
              "(a) Clearly states magnification = ×7000 [1]",
              "(b) Actual = 84 / 7000 = 0.012 mm = 12 µm [1] (or equivalent correct working); unit correct [1]",
              "(c) New mag = 5000 / 1 = ×5000; actual = 30 / 5000 = 0.006 mm = 6 µm [1]",
              "(c) Comparison: 6 µm ≠ 12 µm — not consistent [1]",
              "(c) Identifies measurement error as likely cause [1]"
            ],
            commonError: "In (c): not comparing the two actual sizes and not concluding about consistency — the question explicitly asks whether the values are consistent.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "challenge",
            hints: [
              "For (a): use scale bar only. Convert image scale bar to µm, then divide by actual.",
              "For (b): Actual = image / magnification from (a).",
              "For (c): repeat the entire process with new numbers, then compare your two actual sizes.",
              "If the two actual sizes differ significantly, there has been a measurement error."
            ],
            strategy: "Consistency check — both experiments should give the same actual size; if not, error is present",
            solutions: [
              {
                label: "Full worked solution",
                steps: [
                  "(a) 14 mm = 14 000 µm; mag = 14 000 / 2 = 7000",
                  "(b) Actual = 84 / 7000 = 0.012 mm = 12 µm",
                  "(c) New mag: 5 mm = 5000 µm; 5000 / 1 = 5000",
                  "(c) Actual = 30 / 5000 = 0.006 mm = 6 µm",
                  "(c) 6 µm ≠ 12 µm → not consistent → measurement error"
                ]
              }
            ]
          }
        ]
      },
      {
        id: "bio-cells-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        questions: [
          {
            id: "bio-cells-bq3-01",
            question: "State THREE structures that are found in ALL three of the following cell types: animal cell, plant cell, and bacterial cell. [3]",
            marks: 3,
            modelAnswer: "Three structures found in all three cell types: (1) cell membrane (plasma membrane), (2) ribosomes, (3) cytoplasm. (DNA is also present in all three, though in different forms — accept DNA/genetic material.)",
            markScheme: [
              "Cell membrane [1]",
              "Ribosomes [1]",
              "Cytoplasm / DNA / genetic material [1]"
            ],
            commonError: "Naming 'nucleus' — bacteria have no membrane-bound nucleus, so this is not shared across all three.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bq3-02",
            question: "Explain why the cellulose cell wall of a plant cell is described as 'freely permeable' while the cell membrane is described as 'selectively permeable'. [3]",
            marks: 3,
            modelAnswer: "The cellulose cell wall has large pores and does not discriminate between molecules — it allows water, dissolved ions, glucose, and most other substances to pass through freely in all directions. This is why it is 'freely permeable'. The cell membrane, however, is a phospholipid bilayer embedded with protein channels and carriers. It controls which molecules can enter or leave the cell — small non-polar molecules (e.g. O2, CO2) pass easily, while ions and large polar molecules require specific protein carriers or channels. Because it actively regulates transport, it is 'selectively permeable'.",
            markScheme: [
              "Cell wall has large pores / does not regulate passage / all molecules can pass [1]",
              "Cell membrane is a phospholipid bilayer that regulates passage [1]",
              "Cell membrane allows some substances through but not others / requires specific channels for others [1]"
            ],
            commonError: "Saying the cell wall 'blocks large molecules' — it does not; it is freely permeable to almost all molecules. The cell membrane is the selective barrier.",
            guideRef: "Plant Cell Structure",
            difficulty: "core",
            hints: [
              "Think about the structure of each barrier — what makes the cell wall different from the cell membrane?",
              "Freely permeable = no discrimination. Selectively permeable = some pass, some don't.",
              "The cell membrane has protein channels that select which molecules pass."
            ]
          },
          {
            id: "bio-cells-bq3-03",
            question: "A student draws a scale diagram of a chloroplast at magnification ×8000. The drawn chloroplast is 40 mm long.\n(a) Calculate the actual length of the chloroplast in µm. [2]\n(b) The student draws a second chloroplast next to the first. Its actual length is 7 µm. Calculate the length of this chloroplast in the drawing. Give your answer in mm. [2]",
            marks: 4,
            modelAnswer: "(a) Actual = 40 / 8000 = 0.005 mm = 5 µm.\n(b) Image = Actual × Magnification = 7 µm × 8000. Convert 7 µm to mm: 7 / 1000 = 0.007 mm. Image = 0.007 × 8000 = 56 mm.",
            markScheme: [
              "(a) 40 / 8000 = 0.005 mm = 5 µm [both values needed: 1 mark for each] [2]",
              "(b) Convert 7 µm to mm: 0.007 mm [1]",
              "(b) Image = 0.007 × 8000 = 56 mm [1]"
            ],
            commonError: "In (b): forgetting to convert µm to mm before multiplying by magnification — gives 7 × 8000 = 56 000 (wrong units).",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "For (a): Actual = Image / Magnification = 40 / 8000 = 0.005 mm → convert to µm.",
              "For (b): Image = Actual × Magnification. But first convert actual to mm.",
              "7 µm = 7 / 1000 mm = 0.007 mm. Then × 8000 = 56 mm."
            ],
            strategy: "Always work in consistent units before applying the formula",
            solutions: [
              {
                label: "Both parts",
                steps: [
                  "(a) 40 / 8000 = 0.005 mm; × 1000 = 5 µm",
                  "(b) 7 µm = 0.007 mm; 0.007 × 8000 = 56 mm"
                ]
              }
            ]
          },
          {
            id: "bio-cells-bq3-04",
            question: "Describe what happens to a plant cell when it is placed in a concentrated salt solution. [4]",
            marks: 4,
            modelAnswer: "The concentrated salt solution has a lower water potential than the cell sap in the vacuole. Water moves out of the cell by osmosis, through the cell membrane, into the surrounding solution. As the vacuole shrinks, the cell membrane and cytoplasm pull away from the cell wall — this is called plasmolysis. The cell becomes plasmolysed (flaccid). Unlike an animal cell, the plant cell does not burst when placed in a dilute solution, but when it loses water in a concentrated solution, the cellulose cell wall prevents the cell from collapsing completely, though the cytoplasm shrinks inward.",
            markScheme: [
              "Water moves out of the cell by osmosis [1]",
              "Water moves from higher (cell) to lower (solution) water potential [1]",
              "Vacuole shrinks / cell becomes flaccid [1]",
              "Cell membrane pulls away from cell wall / plasmolysis occurs [1]"
            ],
            commonError: "Saying water 'moves from low to high concentration' — water moves from high to low water potential (or from dilute to concentrated solution, by osmosis).",
            guideRef: "Plant Cell Structure",
            difficulty: "core",
            hints: [
              "In which direction does water move by osmosis — towards the more concentrated or less concentrated solution?",
              "What happens to the vacuole as water leaves?",
              "What is the term for when the membrane pulls away from the cell wall?"
            ]
          },
          {
            id: "bio-cells-bq3-05",
            question: "A nerve cell (neurone) has a cell body, many dendrites, and a long axon.\n(a) State the function of the dendrites. [1]\n(b) Explain why the axon may be up to 1 metre long in humans. [2]\n(c) Explain why many mitochondria are concentrated at synaptic terminals (the tips of the axon). [2]",
            marks: 5,
            modelAnswer: "(a) Dendrites receive electrical impulses (signals) from other neurones and conduct them towards the cell body.\n(b) The axon must carry electrical impulses over long distances in the body — for example, from the spinal cord to the muscles of the foot. A very long axon means the impulse travels to distant muscles without needing additional relay neurones, speeding communication and response.\n(c) At synaptic terminals, neurotransmitter molecules are released by exocytosis to carry signals across the synapse to the next neurone or effector. This process requires energy (ATP). Mitochondria carry out aerobic respiration to produce the ATP needed for neurotransmitter release and the active reuptake of neurotransmitters.",
            markScheme: [
              "(a) Receive signals / impulses from other neurones [1]",
              "(b) Carry impulses over long distances in the body / from spinal cord to distant muscles [1]",
              "(b) Long axon = no need for intermediate relay / faster communication [1]",
              "(c) Neurotransmitter release requires ATP / energy [1]",
              "(c) Mitochondria produce ATP by aerobic respiration [1]"
            ],
            commonError: "In (c): saying mitochondria 'store' neurotransmitters — vesicles store neurotransmitters; mitochondria provide ATP.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "Dendrites = receivers; axon = transmitter — what is the purpose of length?",
              "For (c): what process at the synapse needs energy? Which organelle provides it?"
            ]
          },
          {
            id: "bio-cells-bq3-06",
            question: "Explain what is meant by 'cell specialisation' and give TWO examples to illustrate your answer. [4]",
            marks: 4,
            modelAnswer: "Cell specialisation means that cells in a multicellular organism develop particular structures that adapt them to perform a specific function more efficiently, at the expense of losing the ability to carry out other functions. Example 1: A red blood cell is specialised for oxygen transport — it is biconcave, anucleate, and packed with haemoglobin, but it cannot divide or carry out complex metabolic reactions. Example 2: A root hair cell is specialised for water and mineral absorption — it has a long hair-like extension for maximum surface area, and many mitochondria for active transport, but it has no chloroplasts and cannot photosynthesise.",
            markScheme: [
              "Cells develop specific structures for a specific function / adapted in structure to function [1]",
              "Named example 1 with relevant structural adaptation linked to function [1] (e.g. RBC biconcave → O2 transport)",
              "Named example 2 with relevant structural adaptation linked to function [1] (e.g. root hair extension → absorption)",
              "Implies loss of other functions / all cells from same genetic information but different genes expressed [1]"
            ],
            commonError: "Listing cell types without explaining how the structure relates to the function — always link structure to function.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "Define specialisation: structure modified for function.",
              "For each example, name a structural feature and state what it enables.",
              "Bonus: mention what the specialised cell cannot do (trade-off)."
            ]
          },
          {
            id: "bio-cells-bq3-07",
            question: "CHALLENGE: A researcher isolates an organelle from a eukaryotic cell and finds it has: a double membrane, its own circular DNA, 70S ribosomes, and an internal membrane system. Identify the organelle and explain what each feature suggests about its evolutionary origin. [5]",
            marks: 5,
            modelAnswer: "The organelle is a mitochondrion (or chloroplast — both fit the description; accept either with consistent explanation). The double membrane is consistent with the endosymbiotic theory: the inner membrane is the original bacterial membrane of the engulfed bacterium, and the outer membrane is derived from the host cell's membrane during engulfment. The circular DNA mirrors the circular chromosome of bacteria, suggesting the organelle was once a free-living prokaryote. The 70S ribosomes match the prokaryotic ribosome type, further supporting bacterial ancestry and explaining why some antibiotics (targeting 70S ribosomes) can affect these organelles. The internal membrane system (cristae in mitochondria; thylakoids in chloroplasts) is derived from folding of the bacterial membrane to increase surface area for ATP or light-harvesting reactions.",
            markScheme: [
              "Correct identification: mitochondrion (or chloroplast) [1]",
              "Double membrane: inner = original bacterium; outer = host membrane during engulfment [1]",
              "Circular DNA: bacteria have circular chromosomes → organelle derived from bacterium [1]",
              "70S ribosomes: match bacterial ribosomes, support prokaryotic ancestry [1]",
              "Internal membrane: folded to increase surface area for ATP synthesis / photosynthesis [1]"
            ],
            commonError: "Identifying the organelle as the nucleus — the nucleus has a double membrane but no circular DNA or 70S ribosomes.",
            guideRef: "Animal Cell Structure",
            difficulty: "challenge",
            hints: [
              "What eukaryotic organelle has its own DNA and double membrane?",
              "The endosymbiotic theory links each of these features to a bacterial ancestor.",
              "70S ribosomes are the key: eukaryotic ribosomes are 80S, bacterial are 70S."
            ],
            strategy: "Feature → evolutionary inference for each feature"
          },
          {
            id: "bio-cells-bq3-08",
            question: "A student sets up an experiment where she places plant cells in solutions of three different concentrations and measures the length of cells before and after. In a dilute solution cells increased in length by 12%; in an isotonic solution there was no change; in a concentrated solution cells decreased in length by 15%.\n(a) Explain the result in the dilute solution. [2]\n(b) Explain the result in the concentrated solution. [2]\n(c) Predict what would happen if the same experiment were performed with animal cells in the concentrated solution. [2]",
            marks: 6,
            modelAnswer: "(a) In the dilute solution, the water potential of the solution is higher than that of the cell sap. Water enters the cell by osmosis, moving from the dilute solution into the vacuole through the cell membrane. The vacuole expands, increasing the turgor pressure and causing the cell to enlarge and increase in length. The cell wall prevents bursting.\n(b) In the concentrated solution, the water potential of the solution is lower than that of the cell sap. Water leaves the cell by osmosis. The vacuole shrinks, the cytoplasm and membrane pull away from the cell wall (plasmolysis), and the cell decreases in length.\n(c) Animal cells have no cell wall. In a concentrated solution, water leaves the animal cells by osmosis, causing them to shrink (crenate). Unlike plant cells, there is no wall to limit shrinkage, so they may crenate significantly. If placed in a very dilute solution (opposite extreme), animal cells would swell and could burst (lyse) because there is no cell wall to resist expansion.",
            markScheme: [
              "(a) Water enters by osmosis (from higher to lower water potential) [1]",
              "(a) Vacuole expands / cell becomes turgid / increases in length [1]",
              "(b) Water leaves by osmosis [1]",
              "(b) Vacuole shrinks / plasmolysis / cell decreases in length [1]",
              "(c) Animal cells crenate / shrink in concentrated solution [1]",
              "(c) No cell wall so cannot prevent loss of shape / more extreme shrinkage than plant cell [1]"
            ],
            commonError: "In (c): saying animal cells 'burst' in concentrated solution — they burst in dilute solution; in concentrated they crenate (shrink).",
            guideRef: "Plant Cell Structure",
            difficulty: "challenge",
            hints: [
              "For (a): which direction does water move by osmosis in dilute solution?",
              "For (b): opposite direction — what structural change follows?",
              "For (c): animal cells have no cell wall — what does this mean for their response?"
            ]
          },
          {
            id: "bio-cells-bq3-09",
            question: "CHALLENGE: The following data shows the number of organelles in three different cell types:\n\nCell type | Mitochondria | Ribosomes | Chloroplasts | Nuclei\nMuscle cell | 2000 | 10 000 | 0 | 1\nLeaf cell | 200 | 5 000 | 50 | 1\nBacterial cell | 0 | 3 000 | 0 | 0\n\n(a) Explain why the muscle cell has far more mitochondria than the leaf cell. [2]\n(b) Explain why the bacterial cell has zero mitochondria but still carries out aerobic respiration. [2]\n(c) Suggest why the bacterial cell has no nucleus value but still has 3000 ribosomes. [2]",
            marks: 6,
            modelAnswer: "(a) Muscle cells contract repeatedly, requiring large amounts of ATP for actomyosin cross-bridge cycling. A higher mitochondria count provides greater capacity for aerobic respiration and ATP production. Leaf cells photosynthesise and respire but do not have the same high-intensity, sustained energy demand as actively contracting muscle.\n(b) Bacteria carry out aerobic respiration, but their respiratory enzymes are embedded in the cell membrane (and membrane folds called mesosomes in some species) rather than in membrane-bound mitochondria. The absence of mitochondria does not mean the absence of aerobic respiration — it means the machinery is located at the membrane level.\n(c) The bacterial cell has no membrane-bound nucleus (it is prokaryotic), which is why the nucleus count is zero. However, protein synthesis still occurs — ribosomes translate the bacterial mRNA produced from the circular chromosome that lies free in the cytoplasm. Ribosomes are present in all living cells regardless of nuclear organisation.",
            markScheme: [
              "(a) Muscle cells have high / sustained energy demand for contraction / require more ATP [1]",
              "(a) More mitochondria = greater ATP production capacity [1]",
              "(b) Bacteria respire at the cell membrane / respiratory enzymes in cell membrane [1]",
              "(b) No mitochondria ≠ no aerobic respiration — location differs [1]",
              "(c) Bacteria are prokaryotic — no membrane-bound nucleus [1]",
              "(c) Ribosomes still needed for protein synthesis from circular chromosome / mRNA [1]"
            ],
            commonError: "In (b): saying bacteria 'cannot respire aerobically' — many bacteria can and do respire aerobically; they just lack mitochondria.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "challenge",
            hints: [
              "For (a): link mitochondria count to energy demand of the cell type.",
              "For (b): where are the respiratory enzymes in bacteria if not in mitochondria?",
              "For (c): ribosomes translate mRNA — does a cell need a nucleus to have ribosomes?"
            ]
          },
          {
            id: "bio-cells-bq3-10",
            question: "CHALLENGE: Design an experiment to determine the magnification of a microscope at a given objective lens setting, using only a stage micrometer (a microscope slide with a scale marked in µm) and a piece of graph paper. Describe the method, measurements, and calculation. [5]",
            marks: 5,
            modelAnswer: "Method: Place the stage micrometer on the microscope stage and focus at the chosen objective lens. Draw what you see on graph paper (or estimate the image length of a known distance on the stage micrometer). For example, observe a 100 µm length on the stage micrometer. Measure how large this appears in your drawn image — e.g. it may appear as 50 mm. Calculation: Magnification = Image size / Actual size = 50 mm / 100 µm. Convert: 50 mm = 50 000 µm. Magnification = 50 000 / 100 = ×500. This method works because the stage micrometer provides a known actual length; the drawing gives the corresponding image length. The ratio gives magnification.",
            markScheme: [
              "Use stage micrometer to provide a known actual length [1]",
              "Observe and record the image of a known length (e.g. in a drawing or on graph paper) [1]",
              "Measure the image length of the known actual distance [1]",
              "Convert both measurements to the same unit [1]",
              "Magnification = Image size / Actual size — correct calculation demonstrated [1]"
            ],
            commonError: "Describing the process vaguely ('look at the cells and measure them') without specifying that the stage micrometer provides the known actual length.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "challenge",
            hints: [
              "The stage micrometer gives you the actual size. You need to measure the corresponding image size.",
              "Draw or photograph what you see and measure a known interval on the image.",
              "Then apply: magnification = image / actual (same units)."
            ],
            strategy: "Experimental design: identify knowns, unknowns, and how to measure"
          }
        ]
      },
      {
        id: "bio-cells-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        questions: [
          {
            id: "bio-cells-bq4-01",
            question: "Name the organelle responsible for each of the following:\n(a) Photosynthesis [1]\n(b) Aerobic respiration [1]\n(c) Protein synthesis [1]\n(d) Storage of cell sap [1]",
            marks: 4,
            modelAnswer: "(a) Chloroplast.\n(b) Mitochondrion.\n(c) Ribosome.\n(d) Sap vacuole (permanent vacuole / tonoplast-bounded vacuole).",
            markScheme: [
              "(a) Chloroplast [1]",
              "(b) Mitochondrion [1]",
              "(c) Ribosome [1]",
              "(d) (Sap/permanent) vacuole [1]"
            ],
            commonError: "Giving 'nucleus' for protein synthesis — the nucleus holds the DNA template but ribosomes are the site of synthesis.",
            guideRef: "Plant Cell Structure",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bq4-02",
            question: "A student observes a cell that is undergoing plasmolysis. Describe what plasmolysis is, and explain the conditions that cause it. [3]",
            marks: 3,
            modelAnswer: "Plasmolysis is the shrinkage of the cytoplasm and cell membrane away from the cellulose cell wall of a plant cell. It occurs when the plant cell is placed in a solution with a lower water potential (i.e. a more concentrated / hypertonic solution) than the cell sap. Water leaves the vacuole and cytoplasm by osmosis, moving down the water potential gradient into the surrounding solution. As the vacuole shrinks, the membrane can no longer maintain contact with the rigid cell wall, so it pulls inward — this is plasmolysis.",
            markScheme: [
              "Plasmolysis: cell membrane / cytoplasm pulls away from the cell wall [1]",
              "Caused by water leaving the cell by osmosis [1]",
              "Because the external solution has lower water potential / is more concentrated / hypertonic [1]"
            ],
            commonError: "Saying the cell wall shrinks — the cell wall is rigid and does not shrink; only the membrane and cytoplasm pull away from it.",
            guideRef: "Plant Cell Structure",
            difficulty: "core",
            hints: [
              "Plasmolysis is specific to plant cells — what structure allows this to happen?",
              "The membrane separates from the wall — what must have changed inside the cell to cause this?",
              "Water leaves by osmosis when the external solution is more concentrated."
            ]
          },
          {
            id: "bio-cells-bq4-03",
            question: "A biologist photographs a cell through a microscope. The scale bar on the photograph is 25 mm and represents 10 µm.\n(a) Calculate the magnification of the photograph. [2]\n(b) The nucleus in the photograph measures 12.5 mm in diameter. Calculate the actual diameter of the nucleus in µm. [2]\n(c) Would a light microscope be able to resolve individual ribosomes (diameter ~25 nm)? Justify your answer. [2]",
            marks: 6,
            modelAnswer: "(a) 25 mm = 25 000 µm. Magnification = 25 000 / 10 = ×2500.\n(b) Actual diameter = 12.5 / 2500 = 0.005 mm = 5 µm.\n(c) No. The resolution limit of a light microscope is approximately 200 nm (0.2 µm). A ribosome at 25 nm is about 8× smaller than the resolution limit — below the limit of resolution. To visualise ribosomes, an electron microscope (resolution < 1 nm) is required.",
            markScheme: [
              "(a) 25 mm = 25 000 µm; magnification = 25 000 / 10 = 2500 [2]",
              "(b) 12.5 / 2500 = 0.005 mm = 5 µm [2]",
              "(c) No — 25 nm is below the ~200 nm resolution limit of light microscopy [1]",
              "(c) Electron microscope required / uses shorter wavelength electrons [1]"
            ],
            commonError: "In (c): saying 'a light microscope cannot magnify enough' — the issue is resolution (ability to distinguish two points), not magnification.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "For (a): convert scale bar image to µm, divide by actual.",
              "For (b): actual = image / magnification from (a).",
              "For (c): compare ribosome size (25 nm) to light microscope resolution (~200 nm)."
            ],
            strategy: "Magnification ≠ resolution; resolution depends on wavelength of light used",
            solutions: [
              {
                label: "Parts (a) and (b)",
                steps: [
                  "(a) 25 mm = 25 000 µm; mag = 25 000 / 10 = 2500",
                  "(b) Actual = 12.5 / 2500 = 0.005 mm = 5 µm"
                ]
              }
            ]
          },
          {
            id: "bio-cells-bq4-04",
            question: "Describe how the process of cell specialisation leads to the formation of tissues and organs in a multicellular organism. [4]",
            marks: 4,
            modelAnswer: "In a multicellular organism, all cells arise by mitosis from the zygote and contain identical DNA. During development, different genes are switched on in different cells — this is called differentiation — causing each cell to develop a particular structure suited to a specific function. Cells that differentiate in the same way and perform the same function are grouped together as a tissue. Different tissues may then be organised together to form an organ, which can perform a more complex function than any single tissue. For example, in a human, muscle cells differentiate to form muscle tissue, which together with connective tissue and epithelial tissue forms the heart (an organ).",
            markScheme: [
              "All cells have identical DNA / arise by mitosis from zygote [1]",
              "Differentiation: different genes expressed in different cells [1]",
              "Similar differentiated cells form a tissue [1]",
              "Multiple tissues form an organ; example given [1]"
            ],
            commonError: "Saying 'different cells have different DNA' — all nucleated body cells have the same genome; specialisation is from differential gene expression.",
            guideRef: "Levels of Organisation",
            difficulty: "core",
            hints: [
              "Start with the zygote — what does mitosis produce?",
              "How can cells with the same DNA end up looking different?",
              "Define tissue and organ in terms of cell types."
            ]
          },
          {
            id: "bio-cells-bq4-05",
            question: "Ciliated epithelial cells line the airways. Goblet cells also line the airways and secrete mucus. Explain how these two cell types work together to protect the lungs from pathogens. [4]",
            marks: 4,
            modelAnswer: "Goblet cells produce and secrete mucus, which forms a sticky layer over the surface of the airways. Dust particles, bacteria, viruses and other pathogens become trapped in this mucus layer as air passes through. Ciliated epithelial cells have cilia — hair-like projections that beat in coordinated waves. These cilia sweep the mucus (along with the trapped pathogens) upward toward the throat. At the throat, the mucus is swallowed, and the pathogens are destroyed by stomach acid. This mechanism is called the mucociliary escalator.",
            markScheme: [
              "Goblet cells secrete / produce mucus [1]",
              "Mucus traps pathogens / dust / bacteria [1]",
              "Cilia of ciliated cells beat to move / sweep mucus upward [1]",
              "Mucus moved to throat and swallowed / pathogens destroyed [1]"
            ],
            commonError: "Saying cilia 'produce' mucus — cilia move the mucus; goblet cells produce it.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "Two cell types: what does each one do on its own?",
              "How do they interact — what does one produce that the other then acts on?",
              "What happens to the pathogens at the end?"
            ]
          },
          {
            id: "bio-cells-bq4-06",
            question: "CHALLENGE: A student measures the actual diameter of a red blood cell as 8 µm. She draws the cell at magnification ×2000.\n(a) What will be the diameter of the drawn cell in mm? [2]\n(b) If the student accidentally uses ×1500 magnification instead, how much shorter (in mm) will the drawn cell's diameter be compared to the correct drawing? [3]",
            marks: 5,
            modelAnswer: "(a) Image = Actual × Magnification. Convert actual to mm: 8 µm = 0.008 mm. Image = 0.008 × 2000 = 16 mm.\n(b) At ×1500: Image = 0.008 × 1500 = 12 mm. Difference = 16 – 12 = 4 mm shorter.",
            markScheme: [
              "(a) 8 µm = 0.008 mm [1]",
              "(a) Image = 0.008 × 2000 = 16 mm [1]",
              "(b) At ×1500: image = 0.008 × 1500 = 12 mm [1]",
              "(b) Difference = 16 – 12 = 4 mm [1]",
              "(b) Correct unit and conclusion: 4 mm shorter [1]"
            ],
            commonError: "In (a): forgetting to convert µm to mm before multiplying — gives 8 × 2000 = 16 000 (wrong).",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "challenge",
            hints: [
              "Convert 8 µm to mm: divide by 1000 = 0.008 mm.",
              "Image = Actual (mm) × Magnification.",
              "For (b): calculate image at ×1500, then find the difference."
            ],
            strategy: "Rearranged formula; always convert actual size to same unit as desired image size",
            solutions: [
              {
                label: "Both parts",
                steps: [
                  "8 µm = 0.008 mm",
                  "(a) Image = 0.008 × 2000 = 16 mm",
                  "(b) Image at ×1500 = 0.008 × 1500 = 12 mm",
                  "Difference = 16 – 12 = 4 mm"
                ]
              }
            ]
          },
          {
            id: "bio-cells-bq4-07",
            question: "CHALLENGE: Explain how bacteria can acquire antibiotic resistance, and describe two structural features of bacteria that make this process possible. [5]",
            marks: 5,
            modelAnswer: "Bacteria can acquire antibiotic resistance in two main ways: (1) spontaneous mutations in chromosomal DNA that alter the target site of the antibiotic (e.g. the 70S ribosome subunit), and (2) by receiving resistance genes carried on plasmids from other bacteria via conjugation (a form of horizontal gene transfer). Once a resistance gene is present (e.g. encoding an enzyme that breaks down the antibiotic), that bacterium survives antibiotic treatment while susceptible bacteria die — natural selection then favours resistant strains. Two structural features that make this possible: (a) Plasmids — small, circular, self-replicating DNA molecules that can be transferred between bacterial cells; they can carry resistance genes such as those encoding beta-lactamase (which destroys penicillin). (b) The bacterial cell wall (murein) — many common antibiotics target murein synthesis (e.g. penicillin); mutations or plasmid-encoded enzymes that protect murein synthesis confer resistance.",
            markScheme: [
              "Mutation in chromosomal DNA can alter antibiotic target / resistance by mutation [1]",
              "Plasmids carry resistance genes between bacteria / horizontal gene transfer / conjugation [1]",
              "Natural selection: resistant bacteria survive and reproduce [1]",
              "Structural feature 1: plasmids — small circular DNA, transferable, carry resistance genes [1]",
              "Structural feature 2: murein cell wall — target of many antibiotics; alterations confer resistance [1]"
            ],
            commonError: "Saying bacteria 'develop' resistance in response to antibiotics — resistance arises by random mutation or gene transfer; antibiotics select for pre-existing resistant variants.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "challenge",
            hints: [
              "Two routes to resistance: chromosomal mutation and plasmid gene transfer.",
              "Natural selection explains why resistance spreads.",
              "Link the structural features (plasmids, murein wall) directly to resistance mechanisms."
            ],
            strategy: "Mechanism + selection + structural basis — three separate threads"
          },
          {
            id: "bio-cells-bq4-08",
            question: "Compare the structure of a xylem vessel cell with that of a palisade mesophyll cell. Include at least FOUR points of comparison. [4]",
            marks: 4,
            modelAnswer: "Xylem vessels: dead cells with no nucleus, no cytoplasm, no organelles; thick cell wall lignified with lignin; no cross-walls (end walls removed), forming a continuous hollow tube; no chloroplasts. Palisade cells: living cells with a nucleus and cytoplasm; large number of chloroplasts for photosynthesis; cellulose cell wall (not lignified); cells are not hollow. Comparison: Both are plant cells and both have a cellulose cell wall (though xylem also has lignin). Both are adapted in structure to their function — xylem as a water pipe; palisade as a photosynthetic unit.",
            markScheme: [
              "Xylem is dead; palisade is alive [1]",
              "Xylem has no nucleus/cytoplasm; palisade has nucleus and cytoplasm [1]",
              "Xylem has lignified wall / no end walls; palisade has cellulose wall / end walls present [1]",
              "Xylem has no chloroplasts; palisade is packed with chloroplasts [1]"
            ],
            commonError: "Saying xylem has 'no cell wall' — xylem has a thick, lignified cell wall; it is the contents (nucleus, cytoplasm) that are absent.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "Focus on: living/dead, nucleus, chloroplasts, cell wall composition, end walls.",
              "For each point: state what xylem has/lacks AND what palisade has/lacks.",
              "Four clear contrasting points are needed for 4 marks."
            ]
          },
          {
            id: "bio-cells-bq4-09",
            question: "CHALLENGE: A student argues that 'because all animal cells come from a single zygote by mitosis, they must all be identical'. Evaluate this argument and explain why it is incorrect. [4]",
            marks: 4,
            modelAnswer: "The argument is incorrect. While it is true that all somatic (body) cells arise from the zygote by mitotic division and therefore contain identical copies of the genome, the cells are not identical in structure or function. This is because of differentiation — during development, different combinations of genes are switched on (expressed) or off (silenced) in different cells, in response to chemical signals. This leads to cells with different structures and functions despite having the same DNA. For example, a muscle cell and a nerve cell both contain the same chromosomes, but muscle cells express genes for contractile proteins (actin, myosin) while nerve cells express genes for ion channel proteins and neurotransmitter receptors.",
            markScheme: [
              "Argument incorrect — cells are genetically identical but structurally/functionally different [1]",
              "Differentiation: different genes are expressed in different cell types [1]",
              "Same DNA in all cells; differences due to gene expression, not DNA sequence [1]",
              "Named example with correct gene expression detail [1]"
            ],
            commonError: "Agreeing with the student — many students confuse identical DNA with identical cells.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "challenge",
            hints: [
              "Does identical DNA mean identical cells? Think about neurons vs muscle cells.",
              "What process during development causes cells to become different?",
              "All cells have the same genes but not all genes are active in every cell."
            ],
            strategy: "Evaluate = judge (wrong) + explain using differentiation/gene expression"
          },
          {
            id: "bio-cells-bq4-10",
            question: "CHALLENGE: A scientist is studying a newly discovered microorganism. The following observations are made:\n• No membrane-bound nucleus\n• Contains ribosomes that are sensitive to an antibiotic targeting 70S ribosomes\n• Has a cell wall, but it is not made of murein or cellulose\n• Carries out photosynthesis using chlorophyll embedded in internal membranes\n• Has circular DNA\n\n(a) Is this organism a prokaryote or a eukaryote? Give TWO pieces of evidence. [3]\n(b) Suggest why its cell wall composition (neither murein nor cellulose) is scientifically significant for antibiotic development. [2]\n(c) In which broad group of organisms does this organism most closely fit? Explain your answer. [2]",
            marks: 7,
            modelAnswer: "(a) Prokaryote. Evidence 1: no membrane-bound nucleus — defining feature of prokaryotes. Evidence 2: 70S ribosomes — prokaryotic ribosome type. (Also accept: circular DNA.)\n(b) Most antibiotics targeting cell walls (e.g. penicillin) are designed to inhibit murein synthesis. If the cell wall is made of neither murein nor cellulose, existing antibiotics targeting murein will be ineffective. This means new drugs targeting this organism's unique cell wall material would need to be developed. This is scientifically significant because it could represent a naturally resistant organism or require novel antibiotic strategies.\n(c) This organism fits most closely into cyanobacteria (photosynthetic bacteria). It is prokaryotic (no nucleus, 70S ribosomes, circular DNA) and photosynthetic (chlorophyll in internal membranes) — these are all features of cyanobacteria. However, the non-murein wall is an unusual feature that may indicate a novel phylum or variant.",
            markScheme: [
              "(a) Prokaryote [1]",
              "(a) No membrane-bound nucleus [1]",
              "(a) 70S ribosomes / circular DNA [1]",
              "(b) Murein-targeting antibiotics ineffective / novel wall material requires new drugs [1]",
              "(b) May be resistant to existing antibiotics / significant for treatment [1]",
              "(c) Cyanobacteria / photosynthetic bacteria [1]",
              "(c) Correct reasoning: prokaryotic + photosynthetic features [1]"
            ],
            commonError: "In (c): classifying it as a plant because it photosynthesises — plants are eukaryotes; this organism is prokaryotic.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "challenge",
            hints: [
              "For (a): which two features unambiguously indicate prokaryote vs eukaryote?",
              "For (b): if murein is the normal antibiotic target and this organism lacks it, what follows?",
              "For (c): combine prokaryote + photosynthesis — which bacterial group does this describe?"
            ],
            strategy: "Evidence-based classification: use molecular/structural features as diagnostic criteria"
          }
        ]
      }
    ]
  }
};