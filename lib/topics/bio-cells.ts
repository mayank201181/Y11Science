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
      // ── MCQ PAPER 1 ── core organelles, animal vs plant, magnification basics
      {
        id: "bio-cells-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Core organelle functions, animal vs plant cells, and basic magnification.",
        questions: [
          {
            id: "bio-cells-bm1-01",
            question: "Which organelle controls the activities of a cell and contains the chromosomes?",
            options: ["Mitochondrion", "Nucleus", "Ribosome", "Cell membrane"],
            answerIndex: 1,
            explanation:
              "The nucleus contains the chromosomes (DNA) and controls the cell's activities, including directing protein synthesis. Mitochondria release energy, ribosomes make proteins, and the cell membrane controls what enters and leaves.",
            difficulty: "warmup",
            guideRef: "Animal Cell Structure",
          },
          {
            id: "bio-cells-bm1-02",
            question: "Which structure controls the movement of substances into and out of a cell?",
            options: ["Cell wall", "Cytoplasm", "Cell membrane", "Nucleus"],
            answerIndex: 2,
            explanation:
              "The cell membrane is selectively permeable and controls which substances enter and leave the cell. The cell wall (in plants/bacteria) is freely permeable and provides support, not control of transport.",
            difficulty: "warmup",
            guideRef: "Animal Cell Structure",
          },
          {
            id: "bio-cells-bm1-03",
            question: "Which row correctly identifies structures present in a plant cell but absent from an animal cell?",
            options: [
              "Nucleus, ribosomes and mitochondria",
              "Cell membrane, cytoplasm and nucleus",
              "Cell wall, chloroplasts and permanent vacuole",
              "Mitochondria, chloroplasts and ribosomes",
            ],
            answerIndex: 2,
            explanation:
              "The three structures unique to plant cells in the IGCSE specification are the cellulose cell wall, chloroplasts and the permanent sap vacuole. Nucleus, ribosomes, mitochondria, cell membrane and cytoplasm are shared with animal cells.",
            difficulty: "core",
            hints: [
              "Eliminate any row that lists a structure found in animal cells.",
              "Nucleus, mitochondria and ribosomes are in BOTH cell types.",
              "Look for the row containing only plant-exclusive structures.",
            ],
            strategy: "Process of elimination",
            guideRef: "Plant Cell Structure",
          },
          {
            id: "bio-cells-bm1-04",
            question: "A cell image is 40 mm long and the actual cell is 0.1 mm long. What is the magnification?",
            options: ["×4", "×40", "×400", "×4000"],
            answerIndex: 2,
            explanation:
              "Magnification = image size / actual size = 40 mm / 0.1 mm = 400. Both values are in mm so no conversion is needed.",
            difficulty: "core",
            hints: [
              "Use Magnification = Image size / Actual size.",
              "Both lengths are already in mm — no conversion needed.",
              "Divide 40 by 0.1.",
            ],
            strategy: "Formula substitution",
            guideRef: "Magnification and Actual Size Calculations",
          },
          {
            id: "bio-cells-bm1-05",
            question: "What is the function of a ribosome?",
            options: [
              "Aerobic respiration to release energy",
              "Protein synthesis",
              "Storage of cell sap",
              "Photosynthesis",
            ],
            answerIndex: 1,
            explanation:
              "Ribosomes are the site of protein synthesis, translating mRNA into polypeptide chains. Respiration occurs in mitochondria, photosynthesis in chloroplasts, and cell sap is stored in the vacuole.",
            difficulty: "warmup",
            guideRef: "Animal Cell Structure",
          },
          {
            id: "bio-cells-bm1-06",
            question: "Why do cells that are very active, such as muscle cells, contain large numbers of mitochondria?",
            options: [
              "To store more genetic information",
              "To carry out more photosynthesis",
              "To release more energy by aerobic respiration",
              "To synthesise more cellulose for the cell wall",
            ],
            answerIndex: 2,
            explanation:
              "Mitochondria are the site of aerobic respiration, which releases energy as ATP. Cells with a high energy demand, such as muscle and sperm cells, have many mitochondria to meet that demand. Muscle cells do not photosynthesise or make cellulose.",
            difficulty: "core",
            hints: [
              "What process happens inside a mitochondrion?",
              "Active cells need a lot of energy.",
              "Link 'many mitochondria' to 'more of which process'.",
            ],
            strategy: "Structure → Function",
            guideRef: "Animal Cell Structure",
          },
          {
            id: "bio-cells-bm1-07",
            question: "A leaf cell from deep inside the stem of a plant has no chloroplasts. Which statement best explains this?",
            options: [
              "The cell is dead and has lost its organelles",
              "The cell does not receive light, so chloroplasts would serve no purpose",
              "The cell is a bacterial cell, not a plant cell",
              "The cell has converted its chloroplasts into mitochondria",
            ],
            answerIndex: 1,
            explanation:
              "Not all plant cells contain chloroplasts. Cells that are not exposed to light (e.g. root cells, internal stem cells) cannot photosynthesise, so chloroplasts would be of no use to them. Chloroplasts cannot turn into mitochondria.",
            difficulty: "challenge",
            hints: [
              "Chloroplasts are the site of which process?",
              "That process needs light.",
              "If a cell never receives light, would chloroplasts be useful?",
              "Rule out the option that wrongly claims one organelle becomes another.",
            ],
            strategy: "Reasoning from function",
            guideRef: "Plant Cell Structure",
          },
          {
            id: "bio-cells-bm1-08",
            question: "Which sequence places the levels of organisation in order from smallest to largest?",
            options: [
              "Cell → organelle → tissue → organ",
              "Organelle → cell → tissue → organ",
              "Tissue → cell → organ → organelle",
              "Organelle → tissue → cell → organ",
            ],
            answerIndex: 1,
            explanation:
              "Organelles are sub-cellular structures inside cells, cells group into tissues, and tissues combine to form organs. The full hierarchy is organelle → cell → tissue → organ → organ system → organism.",
            difficulty: "warmup",
            guideRef: "Levels of Organisation",
          },
          {
            id: "bio-cells-bm1-09",
            question: "An onion epidermal cell is drawn 90 mm wide. The magnification is ×300. What is the actual width of the cell?",
            options: ["0.3 mm", "0.03 mm", "3 mm", "30 mm"],
            answerIndex: 0,
            explanation:
              "Actual size = image size / magnification = 90 mm / 300 = 0.3 mm. (Equivalently 300 µm.)",
            difficulty: "core",
            hints: [
              "Rearrange: Actual size = Image size / Magnification.",
              "Substitute 90 mm and 300.",
              "90 / 300 = 0.3 mm.",
            ],
            strategy: "Formula rearrangement",
            guideRef: "Magnification and Actual Size Calculations",
          },
          {
            id: "bio-cells-bm1-10",
            question: "A light microscope can magnify up to about ×1500, but a ribosome (about 25 nm across) still cannot be seen with it. Which idea best explains this limitation?",
            options: [
              "The microscope's lenses are not powerful enough to magnify further",
              "The wavelength of visible light is too long to resolve such small structures",
              "Ribosomes are transparent and reflect no light at all",
              "Ribosomes only exist inside electron microscopes",
            ],
            answerIndex: 1,
            explanation:
              "The limit is resolution, not magnification. Visible light has a wavelength of about 400–700 nm, far larger than a 25 nm ribosome, so the light cannot resolve it. Electron microscopes use electron beams with much shorter wavelengths, giving far higher resolution.",
            difficulty: "challenge",
            hints: [
              "There is a difference between magnification and resolution.",
              "Compare the size of a ribosome (25 nm) with the wavelength of visible light (400–700 nm).",
              "You cannot resolve detail smaller than the wavelength you are using to look.",
              "Electron microscopes use a much shorter wavelength — that is the clue.",
            ],
            strategy: "Distinguish magnification from resolution",
            guideRef: "Magnification and Actual Size Calculations",
          },
        ],
      },
      // ── MCQ PAPER 2 ── bacteria, specialised cells, scale and units
      {
        id: "bio-cells-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Bacterial cells, specialised cells and unit/scale reasoning.",
        questions: [
          {
            id: "bio-cells-bm2-01",
            question: "Where is the genetic material found in a bacterial cell?",
            options: [
              "Inside a membrane-bound nucleus",
              "As a single circular chromosome free in the cytoplasm",
              "Within the mitochondria",
              "Attached to the inside of the cell wall only",
            ],
            answerIndex: 1,
            explanation:
              "Bacteria are prokaryotes: they have no membrane-bound nucleus. Their main DNA is a single circular chromosome floating freely in the cytoplasm, often with extra small circular plasmids.",
            difficulty: "warmup",
            guideRef: "Bacterial Cell Structure",
          },
          {
            id: "bio-cells-bm2-02",
            question: "What is a plasmid?",
            options: [
              "A small circular piece of DNA separate from the main chromosome",
              "A folded inner membrane used for respiration",
              "A protein that makes up the bacterial cell wall",
              "The jelly-like fluid filling the cell",
            ],
            answerIndex: 0,
            explanation:
              "A plasmid is a small circular piece of DNA, separate from the main bacterial chromosome. Plasmids often carry useful genes such as those for antibiotic resistance, and can be passed between bacteria.",
            difficulty: "warmup",
            guideRef: "Bacterial Cell Structure",
          },
          {
            id: "bio-cells-bm2-03",
            question: "A red blood cell is biconcave and has no nucleus. How do these features help its function?",
            options: [
              "They allow it to photosynthesise more efficiently",
              "They increase surface area and make more room for haemoglobin to carry oxygen",
              "They let it divide rapidly to replace lost cells",
              "They allow it to produce its own antibodies",
            ],
            answerIndex: 1,
            explanation:
              "The biconcave shape gives a large surface area for oxygen diffusion, and the lack of a nucleus leaves more internal space for haemoglobin, increasing oxygen-carrying capacity. Red blood cells cannot divide or photosynthesise.",
            difficulty: "core",
            hints: [
              "Think about what a red blood cell carries.",
              "What does the biconcave shape do to surface area?",
              "Losing the nucleus frees up space for what molecule?",
            ],
            strategy: "Structure → Function",
            guideRef: "Specialised Cells and Their Adaptations",
          },
          {
            id: "bio-cells-bm2-04",
            question: "Which unit conversion is correct?",
            options: ["1 mm = 100 µm", "1 mm = 1000 µm", "1 µm = 1000 mm", "1 µm = 100 nm"],
            answerIndex: 1,
            explanation:
              "1 mm = 1000 µm, and 1 µm = 1000 nm. These conversions are essential for magnification calculations — image and actual sizes must be in the same unit before dividing.",
            difficulty: "core",
            hints: [
              "There are 1000 micrometres in a millimetre.",
              "The micrometre is the smaller unit, so a millimetre contains many of them.",
              "Also recall 1 µm = 1000 nm.",
            ],
            strategy: "Recall the metric ladder",
            guideRef: "Magnification and Actual Size Calculations",
          },
          {
            id: "bio-cells-bm2-05",
            question: "A xylem vessel is described as a dead cell. Which set of features fits this description?",
            options: [
              "Full of chloroplasts and a large nucleus",
              "Hollow tube with no cytoplasm, no nucleus and lignified walls",
              "Long tail and many mitochondria",
              "Biconcave disc shape full of haemoglobin",
            ],
            answerIndex: 1,
            explanation:
              "Mature xylem vessels are dead: they lose their cytoplasm, nucleus and end walls, leaving hollow tubes with lignified (strengthened, waterproof) walls — ideal for an unobstructed column of water moving up the plant.",
            difficulty: "core",
            hints: [
              "A dead cell has lost its living contents.",
              "What is removed to make a clear pipe for water?",
              "Lignin strengthens and waterproofs the walls.",
            ],
            strategy: "Structure → Function",
            guideRef: "Specialised Cells and Their Adaptations",
          },
          {
            id: "bio-cells-bm2-06",
            question: "Some antibiotics damage bacterial ribosomes (70S) but not human ribosomes (80S). What does this suggest?",
            options: [
              "Human cells have no ribosomes",
              "The two types of ribosome differ in structure, so the drug binds only the bacterial type",
              "Antibiotics cannot enter human cells",
              "Bacterial ribosomes are stored inside a nucleus",
            ],
            answerIndex: 1,
            explanation:
              "Bacterial ribosomes (70S) and eukaryotic ribosomes (80S) differ in size and structure. An antibiotic shaped to bind the 70S ribosome will not fit the 80S ribosome, so it harms bacteria selectively. Human cells do have ribosomes.",
            difficulty: "challenge",
            hints: [
              "Do human cells have ribosomes? (Yes — rule out that option.)",
              "The numbers 70S and 80S signal a structural difference.",
              "A drug that fits one shape may not fit the other — like a key and lock.",
              "Selective targeting depends on a difference between the two cell types.",
            ],
            strategy: "Apply structure–function reasoning to a new context",
            guideRef: "Bacterial Cell Structure",
          },
          {
            id: "bio-cells-bm2-07",
            question: "A palisade mesophyll cell is found near the upper surface of a leaf. Which adaptation best suits its function?",
            options: [
              "A long flagellum for swimming",
              "Many chloroplasts and a tall column shape to capture maximum light",
              "A thick lignified wall to resist collapse",
              "No nucleus, leaving space for haemoglobin",
            ],
            answerIndex: 1,
            explanation:
              "Palisade mesophyll cells are tall and column-shaped and packed with chloroplasts so they can absorb the maximum amount of light for photosynthesis near the top of the leaf. The other options describe a sperm cell, a xylem vessel and a red blood cell.",
            difficulty: "core",
            hints: [
              "Where in the leaf does this cell sit, and what does it do?",
              "Which organelle carries out photosynthesis?",
              "A tall shape packed with chloroplasts maximises light capture.",
            ],
            strategy: "Structure → Function",
            guideRef: "Specialised Cells and Their Adaptations",
          },
          {
            id: "bio-cells-bm2-08",
            question: "Which structure is found in BOTH a typical bacterial cell and a typical plant cell?",
            options: ["Chloroplast", "Membrane-bound nucleus", "Cell wall", "Mitochondrion"],
            answerIndex: 2,
            explanation:
              "Both bacterial and plant cells have a cell wall (though made of different materials — murein in bacteria, cellulose in plants). Chloroplasts, a membrane-bound nucleus and mitochondria are all eukaryotic features absent from bacteria.",
            difficulty: "core",
            hints: [
              "Bacteria are prokaryotes — rule out eukaryote-only organelles.",
              "Mitochondria, chloroplasts and a true nucleus are eukaryotic.",
              "What rigid outer layer do both cell types share?",
            ],
            strategy: "Venn diagram thinking",
            guideRef: "Bacterial Cell Structure",
          },
          {
            id: "bio-cells-bm2-09",
            question: "A typical bacterium is about 2 µm long. A typical plant cell is about 100 µm long. About how many times longer is the plant cell?",
            options: ["×5", "×50", "×500", "×2"],
            answerIndex: 1,
            explanation:
              "100 µm / 2 µm = 50. The plant cell is about 50 times longer than the bacterium. Both values are already in µm, so no conversion is needed.",
            difficulty: "core",
            hints: [
              "Both sizes are in the same unit (µm).",
              "Divide the larger length by the smaller length.",
              "100 / 2 = 50.",
            ],
            strategy: "Ratio of sizes",
            guideRef: "Magnification and Actual Size Calculations",
          },
          {
            id: "bio-cells-bm2-10",
            question: "A nerve cell can have an axon 1 m long, while a single mitochondrion is about 2 µm long. Roughly how many mitochondria placed end to end would span the axon? (1 m = 1 000 000 µm)",
            options: ["5000", "50 000", "500 000", "5 000 000"],
            answerIndex: 2,
            explanation:
              "1 m = 1 000 000 µm. Number = 1 000 000 µm / 2 µm = 500 000. This tests metre-to-micrometre conversion and the idea of biological scale.",
            difficulty: "challenge",
            hints: [
              "Convert 1 m to µm: 1 m = 1 000 000 µm.",
              "Divide the total length by the length of one mitochondrion.",
              "1 000 000 / 2 = 500 000.",
              "Check: 500 000 × 2 µm = 1 000 000 µm = 1 m.",
            ],
            strategy: "Unit conversion then division",
            guideRef: "Magnification and Actual Size Calculations",
          },
        ],
      },
      // ── MCQ PAPER 3 ── comparisons, applications, levels of organisation
      {
        id: "bio-cells-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Cell comparisons, specialised cells in context and organisation hierarchy.",
        questions: [
          {
            id: "bio-cells-bm3-01",
            question: "Which structure is present in ALL cells — animal, plant and bacterial?",
            options: ["Cell wall", "Chloroplast", "Cell membrane", "Nucleus"],
            answerIndex: 2,
            explanation:
              "All cells have a cell membrane, cytoplasm and ribosomes. Cell walls are absent from animal cells; chloroplasts are only in some plant cells; a membrane-bound nucleus is absent from bacteria.",
            difficulty: "warmup",
            guideRef: "Animal Cell Structure",
          },
          {
            id: "bio-cells-bm3-02",
            question: "What is the function of the permanent sap vacuole in a plant cell?",
            options: [
              "It is the site of photosynthesis",
              "It stores cell sap and helps keep the cell turgid (firm)",
              "It releases energy by respiration",
              "It makes the cellulose cell wall",
            ],
            answerIndex: 1,
            explanation:
              "The permanent sap vacuole is filled with cell sap and, when full of water, pushes outward to keep the cell turgid, supporting the plant. Photosynthesis occurs in chloroplasts and respiration in mitochondria.",
            difficulty: "warmup",
            guideRef: "Plant Cell Structure",
          },
          {
            id: "bio-cells-bm3-03",
            question: "A ciliated epithelial cell in the windpipe is rich in mitochondria. Why?",
            options: [
              "To store oxygen for the lungs",
              "To provide ATP energy to power the constant beating of the cilia",
              "To photosynthesise and release oxygen",
              "To produce the mucus that traps dust",
            ],
            answerIndex: 1,
            explanation:
              "Cilia beat continuously to sweep mucus and trapped particles up and away from the lungs. This movement requires a constant supply of ATP, produced by aerobic respiration in the many mitochondria. The mucus itself is made by goblet cells, not by the cilia.",
            difficulty: "core",
            hints: [
              "What do the cilia do, and how often?",
              "Continuous movement needs a constant energy supply.",
              "Which organelle releases that energy?",
            ],
            strategy: "Structure → Function",
            guideRef: "Specialised Cells and Their Adaptations",
          },
          {
            id: "bio-cells-bm3-04",
            question: "Which of the following is an organ rather than a tissue?",
            options: ["Xylem", "Muscle tissue", "The leaf", "Epithelium"],
            answerIndex: 2,
            explanation:
              "An organ is made of two or more different tissues working together. A leaf contains palisade tissue, spongy tissue, epidermis, xylem and phloem, so it is an organ. Xylem, muscle and epithelium are each single tissue types.",
            difficulty: "core",
            hints: [
              "A tissue is a group of similar cells; an organ contains several tissue types.",
              "Which option is made of many different tissues?",
              "The leaf contains xylem, phloem, epidermis and mesophyll.",
            ],
            strategy: "Apply the definitions",
            guideRef: "Levels of Organisation",
          },
          {
            id: "bio-cells-bm3-05",
            question: "A root hair cell has no chloroplasts but a very long hair-like extension. Which pair of reasons is correct?",
            options: [
              "It is underground (no light), and the extension increases surface area for absorption",
              "It is dead, and the extension stores water",
              "It photosynthesises at night, and the extension carries oxygen",
              "It is a bacterial cell, and the extension is a flagellum",
            ],
            answerIndex: 0,
            explanation:
              "Root hair cells are below ground where there is no light, so chloroplasts would be useless. The long extension greatly increases the surface area for absorbing water (by osmosis) and mineral ions (by active transport) from the soil.",
            difficulty: "core",
            hints: [
              "Why would an underground cell not need chloroplasts?",
              "What does a larger surface area help a root do?",
              "Link the hair extension to absorption of water and minerals.",
            ],
            strategy: "Two-part structure → function",
            guideRef: "Specialised Cells and Their Adaptations",
          },
          {
            id: "bio-cells-bm3-06",
            question: "Which statement correctly compares a bacterial cell wall with a plant cell wall?",
            options: [
              "Both are made of cellulose",
              "The bacterial wall is made of murein; the plant wall is made of cellulose",
              "The bacterial wall is made of cellulose; the plant wall is made of murein",
              "Neither cell type has a cell wall",
            ],
            answerIndex: 1,
            explanation:
              "Both cell types have a wall, but they are made of different materials: bacterial walls are made of murein (peptidoglycan), while plant walls are made of cellulose.",
            difficulty: "core",
            hints: [
              "Both have walls — but of what?",
              "Plant walls are cellulose.",
              "Bacterial walls are murein (peptidoglycan).",
            ],
            strategy: "Compare compositions",
            guideRef: "Bacterial Cell Structure",
          },
          {
            id: "bio-cells-bm3-07",
            question: "A cell drawing is 60 mm tall at a magnification of ×1500. What is the actual height in micrometres (µm)?",
            options: ["4 µm", "40 µm", "400 µm", "0.4 µm"],
            answerIndex: 1,
            explanation:
              "Actual size = 60 mm / 1500 = 0.04 mm. Convert to µm: 0.04 × 1000 = 40 µm.",
            difficulty: "core",
            hints: [
              "Actual size = Image size / Magnification.",
              "60 / 1500 = 0.04 mm.",
              "Convert mm to µm by multiplying by 1000.",
            ],
            strategy: "Calculate then convert units",
            guideRef: "Magnification and Actual Size Calculations",
          },
          {
            id: "bio-cells-bm3-08",
            question: "Which statement about mitochondria and chloroplasts is correct?",
            options: [
              "Both are found in all eukaryotic cells",
              "Mitochondria release energy by respiration; chloroplasts trap light energy in photosynthesis",
              "Chloroplasts release energy by respiration; mitochondria carry out photosynthesis",
              "Both are found in bacterial cells",
            ],
            answerIndex: 1,
            explanation:
              "Mitochondria are the site of aerobic respiration (releasing ATP energy), while chloroplasts are the site of photosynthesis (trapping light energy). Chloroplasts are only in plant/algal cells, and neither organelle is found in bacteria.",
            difficulty: "core",
            hints: [
              "Match each organelle to its process.",
              "Respiration releases energy; photosynthesis captures light energy.",
              "Animal cells have mitochondria but not chloroplasts — so not 'all eukaryotes' have both.",
            ],
            strategy: "Match organelle to process",
            guideRef: "Plant Cell Structure",
          },
          {
            id: "bio-cells-bm3-09",
            question: "A scientist measures a structure as 0.5 µm across and another as 0.5 mm across. How many times bigger is the second structure?",
            options: ["×10", "×100", "×1000", "×1"],
            answerIndex: 2,
            explanation:
              "Convert to the same unit: 0.5 mm = 500 µm. Ratio = 500 µm / 0.5 µm = 1000. The second structure is 1000 times bigger. (This reflects 1 mm = 1000 µm.)",
            difficulty: "challenge",
            hints: [
              "The two values use different units (µm and mm).",
              "Convert one so both are in the same unit: 0.5 mm = 500 µm.",
              "Divide: 500 / 0.5.",
              "The answer reflects the fact that 1 mm = 1000 µm.",
            ],
            strategy: "Convert before comparing",
            guideRef: "Magnification and Actual Size Calculations",
          },
          {
            id: "bio-cells-bm3-10",
            question: "A student says: 'All living things are made of cells with a nucleus.' Which example best disproves this statement?",
            options: [
              "A palisade cell, which has chloroplasts",
              "A bacterium, which has no membrane-bound nucleus",
              "A muscle cell, which has many mitochondria",
              "A root hair cell, which has no chloroplasts",
            ],
            answerIndex: 1,
            explanation:
              "Bacteria are living and made of cells, but they have no membrane-bound nucleus — their DNA is a free circular chromosome. (Mature mammalian red blood cells also lack a nucleus.) The correct statement is that all EUKARYOTIC cells have a nucleus.",
            difficulty: "challenge",
            hints: [
              "You need a living cell that lacks a nucleus.",
              "Think about prokaryotes.",
              "A bacterium has DNA but no membrane-bound nucleus.",
              "This is why we say only eukaryotic cells have a nucleus.",
            ],
            strategy: "Find the counter-example",
            guideRef: "Bacterial Cell Structure",
          },
        ],
      },
      // ── MCQ PAPER 4 ── challenge-weighted: synoptic, multi-step, evaluation
      {
        id: "bio-cells-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Higher-challenge synoptic, multi-step and evaluation questions.",
        questions: [
          {
            id: "bio-cells-bm4-01",
            question: "Which organelle is correctly paired with its function?",
            options: [
              "Ribosome — aerobic respiration",
              "Nucleus — photosynthesis",
              "Mitochondrion — protein synthesis",
              "Chloroplast — photosynthesis",
            ],
            answerIndex: 3,
            explanation:
              "Chloroplasts are the site of photosynthesis. Ribosomes carry out protein synthesis, mitochondria carry out aerobic respiration, and the nucleus controls cell activities — none of the first three pairings is correct.",
            difficulty: "warmup",
            guideRef: "Plant Cell Structure",
          },
          {
            id: "bio-cells-bm4-02",
            question: "Which feature is shared by a sperm cell and a ciliated epithelial cell?",
            options: [
              "Both have chloroplasts",
              "Both have many mitochondria to provide energy for movement",
              "Both are dead cells",
              "Both lack a nucleus",
            ],
            answerIndex: 1,
            explanation:
              "Both cells move structures (the sperm's flagellum, the cilia of the epithelial cell) and so need many mitochondria to provide ATP for that movement. Neither has chloroplasts, both are alive, and both keep a nucleus.",
            difficulty: "core",
            hints: [
              "What do both cells need to do that costs energy?",
              "Movement requires ATP.",
              "Which organelle provides ATP in large amounts?",
            ],
            strategy: "Find the common adaptation",
            guideRef: "Specialised Cells and Their Adaptations",
          },
          {
            id: "bio-cells-bm4-03",
            question: "A microscope photograph has a scale bar labelled 10 µm that measures 20 mm long. What is the magnification?",
            options: ["×200", "×2000", "×20 000", "×2"],
            answerIndex: 1,
            explanation:
              "Convert the scale bar image length: 20 mm = 20 000 µm. Magnification = image length / real length = 20 000 µm / 10 µm = 2000.",
            difficulty: "core",
            hints: [
              "The scale bar gives both image length (20 mm) and real length (10 µm).",
              "Convert 20 mm to µm: × 1000 = 20 000 µm.",
              "Magnification = 20 000 / 10.",
            ],
            strategy: "Magnification from a scale bar",
            guideRef: "Magnification and Actual Size Calculations",
          },
          {
            id: "bio-cells-bm4-04",
            question: "An antibiotic targets the synthesis of murein. Why does it harm bacteria but not human cells?",
            options: [
              "Human cells have murein but repair it quickly",
              "Human cells have no cell wall and so no murein to target",
              "Antibiotics cannot pass through the human cell membrane",
              "Human cells replace murein with cellulose",
            ],
            answerIndex: 1,
            explanation:
              "Murein makes up the bacterial cell wall. Human (animal) cells have no cell wall at all, so they contain no murein for the antibiotic to act on. Disrupting murein causes the bacterium to burst, leaving human cells unaffected.",
            difficulty: "challenge",
            hints: [
              "What is murein, and which cells contain it?",
              "Do animal cells have a cell wall?",
              "If human cells have no murein, the drug has no target there.",
              "Selective toxicity depends on targeting something only bacteria have.",
            ],
            strategy: "Selective targeting",
            guideRef: "Bacterial Cell Structure",
          },
          {
            id: "bio-cells-bm4-05",
            question: "A cell is 0.05 mm in diameter. It is viewed at ×400. How large will it appear in the image, in mm?",
            options: ["2 mm", "20 mm", "8 mm", "0.2 mm"],
            answerIndex: 1,
            explanation:
              "Image size = actual size × magnification = 0.05 mm × 400 = 20 mm.",
            difficulty: "core",
            hints: [
              "This time you are finding the IMAGE size.",
              "Image size = Actual size × Magnification.",
              "0.05 × 400 = 20 mm.",
            ],
            strategy: "Rearrange the magnification formula",
            guideRef: "Magnification and Actual Size Calculations",
          },
          {
            id: "bio-cells-bm4-06",
            question: "Which row correctly matches the level of organisation to an example in a plant?",
            options: [
              "Tissue — a single chloroplast",
              "Organ — the leaf",
              "Cell — the xylem tissue",
              "Organ system — a palisade cell",
            ],
            answerIndex: 1,
            explanation:
              "The leaf is an organ made of several tissues (palisade, spongy, epidermis, xylem, phloem). A chloroplast is an organelle, xylem is a tissue, and a palisade cell is a cell — so the other rows are mismatched.",
            difficulty: "core",
            hints: [
              "Recall the hierarchy: organelle → cell → tissue → organ.",
              "A chloroplast is an organelle, not a tissue.",
              "Which option correctly labels a multi-tissue structure as an organ?",
            ],
            strategy: "Match level to example",
            guideRef: "Levels of Organisation",
          },
          {
            id: "bio-cells-bm4-07",
            question: "Mitochondria and chloroplasts each have their own small circular DNA and a double membrane. Which idea does this evidence support?",
            options: [
              "They evolved from ancient bacteria taken inside a host cell (endosymbiosis)",
              "They are non-living crystals",
              "They are made by the nucleus each day",
              "They are only found in bacteria",
            ],
            answerIndex: 0,
            explanation:
              "The presence of their own circular DNA and a double membrane is evidence for the endosymbiotic theory — that mitochondria and chloroplasts descended from free-living bacteria engulfed by an early host cell, explaining their bacteria-like features.",
            difficulty: "challenge",
            hints: [
              "Circular DNA is also a feature of which type of cell?",
              "A double membrane hints at one cell being taken inside another.",
              "This is the basis of the endosymbiotic theory.",
              "The organelles resemble small bacteria living inside the cell.",
            ],
            strategy: "Interpret evidence",
            guideRef: "Bacterial Cell Structure",
          },
          {
            id: "bio-cells-bm4-08",
            question: "Two cells are measured. Cell X is drawn 30 mm long at ×500. Cell Y is drawn 45 mm long at ×1500. Which cell is actually larger, and by how much?",
            options: [
              "Cell X is larger, by 2 times",
              "Cell Y is larger, by 2 times",
              "They are the same actual size",
              "Cell X is larger, by 5 times",
            ],
            answerIndex: 0,
            explanation:
              "Cell X actual size = 30 / 500 = 0.06 mm. Cell Y actual size = 45 / 1500 = 0.03 mm. Cell X (0.06 mm) is twice the actual size of Cell Y (0.03 mm).",
            difficulty: "challenge",
            hints: [
              "Find the actual size of each cell separately: actual = image / magnification.",
              "Cell X: 30 / 500. Cell Y: 45 / 1500.",
              "Compare 0.06 mm with 0.03 mm.",
              "0.06 / 0.03 = 2, so X is twice as large.",
            ],
            strategy: "Compute both, then compare",
            guideRef: "Magnification and Actual Size Calculations",
          },
          {
            id: "bio-cells-bm4-09",
            question: "Which is the best description of a tissue?",
            options: [
              "A specialised structure inside a cell",
              "A group of similar cells working together to perform a function",
              "Two or more different organs working together",
              "The complete living organism",
            ],
            answerIndex: 1,
            explanation:
              "A tissue is a group of similar cells that work together to carry out a particular function (e.g. muscle tissue, xylem tissue). The other options describe an organelle, an organ system and an organism.",
            difficulty: "warmup",
            guideRef: "Levels of Organisation",
          },
          {
            id: "bio-cells-bm4-10",
            question: "A bacterium gains a plasmid carrying a gene for an enzyme that breaks down an antibiotic. Which statement best describes the consequence?",
            options: [
              "The bacterium becomes a eukaryote",
              "The bacterium becomes resistant to that antibiotic and can pass the plasmid to others",
              "The bacterium loses its cell wall",
              "The bacterium can now photosynthesise",
            ],
            answerIndex: 1,
            explanation:
              "Plasmids carry genes independently of the main chromosome. A plasmid gene encoding an antibiotic-destroying enzyme makes the bacterium resistant, and because plasmids can be transferred between bacteria, the resistance can spread.",
            difficulty: "challenge",
            hints: [
              "What does a plasmid carry?",
              "A gene for an enzyme that destroys the antibiotic gives what advantage?",
              "Plasmids can move between bacteria.",
              "Think about how antibiotic resistance spreads in populations.",
            ],
            strategy: "Trace gene → protein → effect",
            guideRef: "Bacterial Cell Structure",
          },
        ],
      },
    ],
    qaPapers: [
      // ── STRUCTURED PAPER 1 ── organelles, animal vs plant, magnification
      {
        id: "bio-cells-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Organelle functions, animal vs plant cells and a magnification calculation.",
        questions: [
          {
            id: "bio-cells-bq1-01",
            question: "State the function of each structure:\n(a) Cell membrane [1]\n(b) Cytoplasm [1]\n(c) Nucleus [1]",
            marks: 3,
            modelAnswer:
              "(a) The cell membrane is selectively permeable and controls the movement of substances into and out of the cell.\n(b) The cytoplasm is the jelly-like fluid where many of the cell's chemical reactions take place.\n(c) The nucleus controls the cell's activities and contains the chromosomes (DNA) that carry the genetic information.",
            markScheme: [
              "(a) Controls movement of substances in/out / selectively permeable [1]",
              "(b) Site of chemical reactions / jelly-like fluid where reactions occur [1]",
              "(c) Controls cell activities / contains DNA / chromosomes / genetic material [1]",
            ],
            commonError:
              "Saying the cell membrane 'supports the cell' — that is the cell wall's job; the membrane controls transport.",
            difficulty: "warmup",
            guideRef: "Animal Cell Structure",
          },
          {
            id: "bio-cells-bq1-02",
            question: "Describe three ways in which a plant cell differs from an animal cell. [3]",
            marks: 3,
            modelAnswer:
              "A plant cell has a cellulose cell wall surrounding the cell membrane, whereas an animal cell does not. A plant cell contains chloroplasts for photosynthesis, which are absent from animal cells. A plant cell has a large permanent sap vacuole, while an animal cell has no permanent vacuole (only small temporary ones, if any).",
            markScheme: [
              "Cellulose cell wall present in plant / absent in animal [1]",
              "Chloroplasts present in plant / absent in animal [1]",
              "Large permanent sap vacuole present in plant / absent (or only small temporary) in animal [1]",
            ],
            commonError:
              "Writing 'plants have a nucleus but animals do not' — both have a membrane-bound nucleus.",
            difficulty: "core",
            hints: [
              "Picture a labelled plant cell next to an animal cell — what extras does the plant have?",
              "There are exactly three plant-only structures in the IGCSE specification.",
              "Think: outer wall, light-trapping organelle, large fluid-filled space.",
            ],
            strategy: "List unique features systematically",
            guideRef: "Plant Cell Structure",
          },
          {
            id: "bio-cells-bq1-03",
            question: "An image of a cell measures 60 mm across. The magnification of the image is ×1500. Calculate the actual diameter of the cell in micrometres (µm). Show your working. [3]",
            marks: 3,
            modelAnswer:
              "Actual size = image size / magnification = 60 mm / 1500 = 0.04 mm. Convert to µm: 0.04 mm × 1000 = 40 µm. The actual diameter of the cell is 40 µm.",
            markScheme: [
              "Correct rearrangement: Actual size = Image size / Magnification [1]",
              "Correct arithmetic: 60 / 1500 = 0.04 mm [1]",
              "Correct conversion to µm: 0.04 × 1000 = 40 µm [1]",
            ],
            commonError:
              "Leaving the answer as 0.04 with no conversion, or giving '40' without the unit µm.",
            difficulty: "core",
            hints: [
              "Magnification = Image size / Actual size — rearrange for actual size.",
              "Actual size = 60 / 1500 (in mm first).",
              "Remember 1 mm = 1000 µm — multiply your mm answer by 1000.",
            ],
            strategy: "Calculate in mm, then convert units",
            guideRef: "Magnification and Actual Size Calculations",
            solutions: [
              {
                label: "Method 1: rearrange then convert",
                steps: [
                  "Magnification = Image size / Actual size",
                  "Rearrange: Actual size = Image size / Magnification",
                  "Actual size = 60 mm / 1500 = 0.04 mm",
                  "Convert: 0.04 mm × 1000 µm/mm = 40 µm",
                ],
              },
              {
                label: "Method 2: convert image to µm first",
                steps: [
                  "Convert image size: 60 mm = 60 000 µm",
                  "Actual size = 60 000 µm / 1500",
                  "60 000 / 1500 = 40 µm",
                  "Answer: 40 µm (units consistent throughout)",
                ],
              },
            ],
          },
          {
            id: "bio-cells-bq1-04",
            question: "Explain why mitochondria are described as the site of aerobic respiration, and why a muscle cell contains many of them. [3]",
            marks: 3,
            modelAnswer:
              "Aerobic respiration takes place inside the mitochondria, where glucose reacts with oxygen to release energy in the form of ATP. The folded inner membrane (cristae) provides a large surface area for the enzymes involved. A muscle cell needs a great deal of energy to contract, so it contains many mitochondria to release enough ATP to meet this high energy demand.",
            markScheme: [
              "Mitochondria are the site of aerobic respiration / glucose + oxygen reaction releasing ATP energy [1]",
              "Folded inner membrane / cristae gives large surface area (for respiration enzymes) [1]",
              "Muscle cells need much energy to contract, so need many mitochondria to release enough ATP [1]",
            ],
            commonError:
              "Saying mitochondria 'make energy' or 'store energy' — energy is released/transferred (as ATP), it is not created.",
            difficulty: "core",
            hints: [
              "What reaction happens inside a mitochondrion?",
              "Why does folding the inner membrane help?",
              "Link the high energy demand of muscle to the number of mitochondria.",
            ],
            strategy: "Function then link to demand",
            guideRef: "Animal Cell Structure",
          },
          {
            id: "bio-cells-bq1-05",
            question: "Fig. 1 shows a bacterial cell.\n(a) State two structures in the bacterial cell that are also found in plant cells. [2]\n(b) State two structures found in a plant cell that are NOT present in this bacterial cell. [2]",
            marks: 4,
            modelAnswer:
              "(a) Two structures found in both bacterial and plant cells: the cell wall and the ribosomes. (Both also have a cell membrane and cytoplasm.)\n(b) Two structures present in a plant cell but absent from the bacterial cell: a membrane-bound nucleus and chloroplasts (also acceptable: mitochondria or a permanent sap vacuole).",
            markScheme: [
              "(a) Cell wall [1]",
              "(a) Ribosomes / cell membrane / cytoplasm [1]",
              "(b) Membrane-bound nucleus / nuclear envelope [1]",
              "(b) Chloroplasts / mitochondria / permanent sap vacuole [1]",
            ],
            commonError:
              "Naming 'nucleus' for part (a) — bacteria have no membrane-bound nucleus, only free circular DNA.",
            difficulty: "core",
            hints: [
              "For (a): which structures do nearly all cells share?",
              "Both have a wall, a membrane, cytoplasm and ribosomes.",
              "For (b): what makes plant cells eukaryotic and able to photosynthesise?",
            ],
            strategy: "Venn diagram thinking — shared vs unique",
            guideRef: "Bacterial Cell Structure",
          },
          {
            id: "bio-cells-bq1-06",
            question: "Define the terms 'tissue' and 'organ', and give one example of each from a mammal. [4]",
            marks: 4,
            modelAnswer:
              "A tissue is a group of similar cells working together to perform a particular function; for example, muscle tissue. An organ is a structure made of two or more different tissues that work together to perform a function; for example, the heart (which contains muscle tissue, epithelial tissue and connective tissue).",
            markScheme: [
              "Tissue = group of similar cells working together / with a shared function [1]",
              "Example of tissue — e.g. muscle / epithelial / nervous tissue [1]",
              "Organ = structure of two or more different tissues working together [1]",
              "Example of organ — e.g. heart / stomach / lung / kidney [1]",
            ],
            commonError:
              "Giving 'a cell' as an example of a tissue, or defining an organ as 'a group of similar cells' (that is a tissue).",
            difficulty: "warmup",
            guideRef: "Levels of Organisation",
          },
          {
            id: "bio-cells-bq1-07",
            question: "Explain how a root hair cell is adapted for the efficient absorption of water and mineral ions from the soil. [4]",
            marks: 4,
            modelAnswer:
              "The root hair cell has a long, narrow hair-like extension that greatly increases the surface area in contact with the soil, so more water and mineral ions can be absorbed at once. Water enters by osmosis through the thin cell wall and cell membrane, which offer little resistance. Mineral ions are absorbed by active transport, which requires energy from respiration, so the cell contains mitochondria. The cell has no chloroplasts because it is underground and cannot photosynthesise.",
            markScheme: [
              "Long hair-like extension increases surface area for absorption [1]",
              "Thin wall / membrane allows water to enter easily (by osmosis) [1]",
              "Mitochondria provide energy for active transport of mineral ions [1]",
              "No chloroplasts as it is underground / receives no light [1]",
            ],
            commonError:
              "Stating the root hair cell 'photosynthesises to make food' — it has no chloroplasts and is underground.",
            difficulty: "core",
            hints: [
              "What does the hair-like shape do to the surface area?",
              "By which process does water enter the cell?",
              "Active transport of minerals needs energy — which organelle supplies it?",
              "Why are there no chloroplasts?",
            ],
            strategy: "Structure → function for each feature",
            guideRef: "Specialised Cells and Their Adaptations",
          },
          {
            id: "bio-cells-bq1-08",
            question: "A scale bar on a micrograph represents 20 µm and measures 8 mm long on the image.\n(a) Calculate the magnification of the micrograph. Show your working. [2]\n(b) A cell on the micrograph measures 24 mm across. Calculate its actual diameter in µm. [2]",
            marks: 4,
            modelAnswer:
              "(a) Convert the scale bar image length: 8 mm = 8000 µm. Magnification = image length / real length = 8000 µm / 20 µm = ×400.\n(b) Actual diameter = image size / magnification = 24 mm / 400 = 0.06 mm = 60 µm.",
            markScheme: [
              "(a) Convert scale bar: 8 mm = 8000 µm [1]",
              "(a) Magnification = 8000 / 20 = 400 [1]",
              "(b) Actual size = 24 / 400 = 0.06 mm [1]",
              "(b) Convert: 0.06 mm = 60 µm [1]",
            ],
            commonError:
              "Dividing 8 by 20 without converting units (giving 0.4), or forgetting to convert the final answer in (b) to µm.",
            difficulty: "challenge",
            hints: [
              "For (a): the scale bar gives the image length (8 mm) and the real length (20 µm).",
              "Convert 8 mm to µm before dividing: 8 mm = 8000 µm.",
              "Magnification = 8000 / 20.",
              "For (b): use that magnification — actual = image / magnification, then convert to µm.",
            ],
            strategy: "Two-step: magnification from scale bar, then apply it",
            guideRef: "Magnification and Actual Size Calculations",
            solutions: [
              {
                label: "Part (a): magnification from scale bar",
                steps: [
                  "Image scale bar = 8 mm; real length = 20 µm",
                  "Convert: 8 mm = 8000 µm",
                  "Magnification = 8000 µm / 20 µm = 400",
                ],
              },
              {
                label: "Part (b): actual size of the cell",
                steps: [
                  "Actual size = Image size / Magnification",
                  "Actual size = 24 mm / 400 = 0.06 mm",
                  "Convert: 0.06 mm × 1000 = 60 µm",
                ],
              },
            ],
          },
          {
            id: "bio-cells-bq1-09",
            question: "Bacteria are described as prokaryotic cells. Explain what this means and describe two further features of a bacterial cell. [4]",
            marks: 4,
            modelAnswer:
              "Prokaryotic means the cell has no membrane-bound nucleus; instead, its genetic material is a single circular chromosome of DNA that lies free in the cytoplasm. Two further features of a bacterial cell are: it may contain one or more plasmids (small circular pieces of DNA separate from the main chromosome), and it has a cell wall made of murein (peptidoglycan) rather than cellulose. Bacterial cells also have no mitochondria or chloroplasts.",
            markScheme: [
              "Prokaryotic = no membrane-bound nucleus [1]",
              "Genetic material is a single circular chromosome / free DNA in cytoplasm [1]",
              "Plasmids (small circular DNA) present [1]",
              "Cell wall of murein (not cellulose) / no mitochondria / no chloroplasts [1]",
            ],
            commonError:
              "Saying prokaryotes 'have no DNA' — they do have DNA, just not enclosed in a membrane-bound nucleus.",
            difficulty: "core",
            hints: [
              "What does 'pro-karyote' (before nucleus) tell you?",
              "Where is the DNA if there is no nucleus?",
              "Name a small extra piece of circular DNA bacteria can carry.",
              "What is the bacterial wall made of, compared with a plant wall?",
            ],
            strategy: "Define then add supporting features",
            guideRef: "Bacterial Cell Structure",
          },
          {
            id: "bio-cells-bq1-10",
            question: "CHALLENGE: A student writes: 'A xylem vessel is a cell, so it must be alive and contain a nucleus.' Evaluate this statement and explain how the structure of a xylem vessel suits its function. [5]",
            marks: 5,
            modelAnswer:
              "The student is incorrect. A mature xylem vessel is a dead cell: during development it loses its cytoplasm and nucleus, so it is not alive and contains no nucleus. This is actually an advantage. The end walls (cross-walls) between the cells break down, so the vessels join to form a continuous hollow tube through which water can flow without obstruction. The walls are strengthened with lignin, which is waterproof and prevents the vessel from collapsing under the tension created as water is pulled up the plant. Together, these features make the xylem an efficient pathway for transporting water and dissolved mineral ions from the roots to the leaves.",
            markScheme: [
              "Student is wrong — mature xylem vessels are dead [1]",
              "They lose cytoplasm and nucleus during development [1]",
              "End walls break down to form a continuous hollow tube / unobstructed flow [1]",
              "Walls are lignified — strength / prevents collapse / waterproof [1]",
              "Adapted to transport water (and mineral ions) up the plant [1]",
            ],
            commonError:
              "Agreeing that the xylem vessel is alive, or claiming xylem 'pumps' water — water moves passively; xylem provides an open, strengthened pathway.",
            difficulty: "challenge",
            hints: [
              "Is the student's claim correct? Consider whether mature xylem is alive.",
              "What happens to the cytoplasm and nucleus as the vessel matures?",
              "Why is removing the end walls useful?",
              "What does lignin do for the walls?",
              "Finish by linking these features to the vessel's transport function.",
            ],
            strategy: "Evaluate the claim, then justify with structure → function",
            guideRef: "Specialised Cells and Their Adaptations",
          },
        ],
      },
      // ── STRUCTURED PAPER 2 ── specialised cells, organisation, calculation
      {
        id: "bio-cells-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Specialised cells, levels of organisation and a scale calculation.",
        questions: [
          {
            id: "bio-cells-bq2-01",
            question: "State the function of each organelle:\n(a) Chloroplast [1]\n(b) Mitochondrion [1]\n(c) Ribosome [1]",
            marks: 3,
            modelAnswer:
              "(a) Chloroplast: the site of photosynthesis — it traps light energy using chlorophyll to make glucose.\n(b) Mitochondrion: the site of aerobic respiration — it releases energy as ATP from glucose and oxygen.\n(c) Ribosome: the site of protein synthesis — it translates mRNA to build proteins.",
            markScheme: [
              "(a) Photosynthesis / traps light energy (using chlorophyll) [1]",
              "(b) Aerobic respiration / releases ATP energy from glucose and oxygen [1]",
              "(c) Protein synthesis / makes proteins [1]",
            ],
            commonError:
              "Swapping chloroplast and mitochondrion functions, or saying the ribosome 'makes energy'.",
            difficulty: "warmup",
            guideRef: "Plant Cell Structure",
          },
          {
            id: "bio-cells-bq2-02",
            question: "Place the following in order from the smallest to the largest level of organisation, then briefly define a 'tissue': cell, organ, organelle, organism, organ system, tissue. [4]",
            marks: 4,
            modelAnswer:
              "The order from smallest to largest is: organelle → cell → tissue → organ → organ system → organism. A tissue is a group of similar cells that work together to carry out a particular function.",
            markScheme: [
              "Organelle before cell, cell before tissue [1]",
              "Tissue before organ, organ before organ system [1]",
              "Organ system before organism (full correct order) [1]",
              "Tissue defined as a group of similar cells with a shared function [1]",
            ],
            commonError:
              "Placing 'organelle' after 'cell', or defining a tissue as 'different cells working together' (that describes an organ).",
            difficulty: "warmup",
            guideRef: "Levels of Organisation",
          },
          {
            id: "bio-cells-bq2-03",
            question: "Explain how the structure of a sperm cell is adapted to its function of reaching and fertilising an egg cell. [4]",
            marks: 4,
            modelAnswer:
              "The sperm cell has a long flagellum (tail) that beats to propel the cell, allowing it to swim towards the egg. The midpiece is packed with many mitochondria, which carry out aerobic respiration to release the ATP energy needed to power the flagellum. The head is streamlined to reduce resistance while swimming, and it contains an acrosome with digestive enzymes that break down the outer layer of the egg so the sperm can enter and fertilise it.",
            markScheme: [
              "Flagellum / tail — for swimming / propulsion towards the egg [1]",
              "Many mitochondria — release ATP energy for movement (aerobic respiration) [1]",
              "Streamlined head — reduces resistance / aids swimming [1]",
              "Acrosome contains enzymes — digest / break down egg coat to allow entry [1]",
            ],
            commonError:
              "Describing the midpiece as 'containing chloroplasts' — sperm use mitochondria, not chloroplasts.",
            difficulty: "core",
            hints: [
              "The sperm must do two things: swim to the egg and get inside it.",
              "Which structure provides propulsion, and which organelle powers it?",
              "How does the head shape help it swim?",
              "What at the tip of the head helps it enter the egg?",
            ],
            strategy: "Structure → function for each adaptation",
            guideRef: "Specialised Cells and Their Adaptations",
          },
          {
            id: "bio-cells-bq2-04",
            question: "A photograph of a plant cell is taken. The actual length of the cell is 80 µm. In the photograph it measures 56 mm long.\n(a) Calculate the magnification of the photograph. Show your working. [3]\n(b) State one reason why it is important to express both measurements in the same unit before calculating. [1]",
            marks: 4,
            modelAnswer:
              "(a) Convert the actual size to mm (or the image to µm). Image = 56 mm = 56 000 µm. Magnification = image size / actual size = 56 000 µm / 80 µm = ×700.\n(b) Magnification is a ratio with no units, so it is only correct when the image size and actual size are measured in the same unit; otherwise the answer would be wrong by a factor of 1000.",
            markScheme: [
              "(a) Convert to same unit: 56 mm = 56 000 µm (or 80 µm = 0.08 mm) [1]",
              "(a) Magnification = image / actual = 56 000 / 80 [1]",
              "(a) Magnification = ×700 [1]",
              "(b) Magnification is a ratio / has no units, so units must match or the answer is out by ×1000 [1]",
            ],
            commonError:
              "Dividing 56 by 80 without converting (giving 0.7) — units must be made the same first.",
            difficulty: "core",
            hints: [
              "Magnification = Image size / Actual size — make units match first.",
              "Convert 56 mm to µm (× 1000) or 80 µm to mm.",
              "56 000 / 80 = 700.",
              "For (b): think about why a ratio needs the same units top and bottom.",
            ],
            strategy: "Convert, divide, then justify",
            guideRef: "Magnification and Actual Size Calculations",
            solutions: [
              {
                label: "Method: convert image to µm",
                steps: [
                  "Image size = 56 mm = 56 × 1000 = 56 000 µm",
                  "Magnification = Image size / Actual size",
                  "Magnification = 56 000 µm / 80 µm",
                  "Magnification = ×700",
                ],
              },
            ],
          },
          {
            id: "bio-cells-bq2-05",
            question: "Explain how a red blood cell and a ciliated epithelial cell are each adapted to their functions. Give two adaptations of each. [4]",
            marks: 4,
            modelAnswer:
              "A red blood cell has a biconcave disc shape that gives it a large surface area for the diffusion of oxygen, and it has no nucleus, leaving more room for haemoglobin to carry oxygen. A ciliated epithelial cell has many cilia on its surface that beat to sweep mucus (and trapped particles) away from the lungs, and it contains many mitochondria to supply the ATP energy needed to power this continuous beating.",
            markScheme: [
              "Red blood cell: biconcave shape — large surface area for oxygen diffusion [1]",
              "Red blood cell: no nucleus — more space for haemoglobin/oxygen [1]",
              "Ciliated cell: cilia beat to move mucus / trapped particles [1]",
              "Ciliated cell: many mitochondria — provide ATP energy for cilia movement [1]",
            ],
            commonError:
              "Saying the red blood cell 'has no nucleus so it can divide faster' — in fact it cannot divide; the benefit is more space for haemoglobin.",
            difficulty: "core",
            hints: [
              "Red blood cell: link its shape and its missing nucleus to carrying oxygen.",
              "Ciliated cell: what do the cilia do, and what powers them?",
              "Give two clear adaptations for each cell.",
            ],
            strategy: "Two adaptations each, structure → function",
            guideRef: "Specialised Cells and Their Adaptations",
          },
          {
            id: "bio-cells-bq2-06",
            question: "Describe the levels of organisation in a flowering plant, from the cell level to the organism level, giving a named example at each level. [5]",
            marks: 5,
            modelAnswer:
              "At the cell level, a palisade mesophyll cell is a specialised plant cell adapted for photosynthesis. Many similar palisade cells together form palisade mesophyll tissue. This tissue, along with other tissues such as spongy mesophyll, epidermis, xylem and phloem, makes up the leaf, which is an organ. The leaf works with other organs such as the stem and buds to form the shoot system, an organ system. Finally, all the organ systems together form the whole plant — the organism, for example a sunflower.",
            markScheme: [
              "Cell — named, e.g. palisade mesophyll cell / root hair cell [1]",
              "Tissue — named, e.g. palisade mesophyll tissue / xylem tissue [1]",
              "Organ — named, e.g. leaf / root / stem [1]",
              "Organ system — named, e.g. shoot system / root system [1]",
              "Organism — a named plant / the whole plant [1]",
            ],
            commonError:
              "Calling a group of cells an 'organ' — a tissue is similar cells; an organ contains several tissue types.",
            difficulty: "core",
            hints: [
              "Start with a specific named plant cell.",
              "A tissue is a group of SIMILAR cells — name one in a leaf.",
              "An organ has several tissue types — the leaf fits.",
              "What group of organs forms a system in a plant?",
            ],
            strategy: "Build the ladder with named examples",
            guideRef: "Levels of Organisation",
          },
          {
            id: "bio-cells-bq2-07",
            question: "A plant cell placed in pure water becomes firm (turgid). Using your knowledge of plant cell structure, explain why the cell becomes firm but does not burst. [4]",
            marks: 4,
            modelAnswer:
              "Water enters the cell by osmosis and collects in the permanent sap vacuole, which swells and pushes the cytoplasm and cell membrane outward against the cell wall. This builds up turgor pressure inside the cell, making it firm (turgid). The cell does not burst because it is surrounded by a strong, rigid cellulose cell wall, which resists the outward pressure and prevents the membrane from rupturing.",
            markScheme: [
              "Water enters by osmosis [1]",
              "Vacuole swells / pushes membrane against the wall, raising turgor pressure [1]",
              "Cell becomes firm / turgid [1]",
              "Rigid cellulose cell wall resists the pressure / stops the cell bursting [1]",
            ],
            commonError:
              "Saying the cell membrane stops the cell bursting — it is the strong cellulose cell wall that prevents bursting; the membrane alone would rupture.",
            difficulty: "core",
            hints: [
              "How does water enter the cell?",
              "Where does the water collect, and what does that do to the pressure?",
              "What is this firm state called?",
              "Which structure is strong enough to stop the cell bursting?",
            ],
            strategy: "Trace water in → pressure up → wall resists",
            guideRef: "Plant Cell Structure",
          },
          {
            id: "bio-cells-bq2-08",
            question: "A light microscope can magnify up to about ×1500. An electron microscope can reach about ×500 000.\n(a) Calculate how many times greater the maximum magnification of the electron microscope is than that of the light microscope. Show your working. [2]\n(b) Suggest why an electron microscope is needed to see a ribosome (about 25 nm across). [2]",
            marks: 4,
            modelAnswer:
              "(a) Ratio = 500 000 / 1500 = 333.3. The electron microscope can magnify about 333 times more than the light microscope.\n(b) A ribosome (about 25 nm) is far smaller than the wavelength of visible light (about 400–700 nm), so a light microscope cannot resolve it however much it magnifies. An electron microscope uses electrons, which have a much shorter wavelength, giving much higher resolution, so the ribosome can be seen.",
            markScheme: [
              "(a) Ratio = 500 000 / 1500 [1]",
              "(a) = 333 (accept ~333 / 330) [1]",
              "(b) Ribosome is smaller than the wavelength of visible light / light cannot resolve it [1]",
              "(b) Electrons have a shorter wavelength giving higher resolution [1]",
            ],
            commonError:
              "Confusing magnification with resolution — simply 'magnifying more' with a light microscope will not reveal a ribosome; resolution is limited by wavelength.",
            difficulty: "challenge",
            hints: [
              "For (a): divide the larger magnification by the smaller one.",
              "500 000 / 1500 ≈ 333.",
              "For (b): compare 25 nm with the wavelength of visible light (400–700 nm).",
              "Electrons have a much shorter wavelength — link this to higher resolution.",
            ],
            strategy: "Ratio first, then explain via resolution",
            guideRef: "Magnification and Actual Size Calculations",
            solutions: [
              {
                label: "Part (a): ratio of magnifications",
                steps: [
                  "Ratio = electron magnification / light magnification",
                  "Ratio = 500 000 / 1500",
                  "Ratio ≈ 333 (to 3 significant figures)",
                ],
              },
            ],
          },
          {
            id: "bio-cells-bq2-09",
            question: "Compare a bacterial cell with an animal cell. Give two structures they have in common and two ways in which they differ. [4]",
            marks: 4,
            modelAnswer:
              "In common: both a bacterial cell and an animal cell have a cell membrane and ribosomes (and cytoplasm). Differences: a bacterial cell has a cell wall (made of murein) whereas an animal cell has no cell wall; and a bacterial cell has no membrane-bound nucleus (its DNA is a free circular chromosome) whereas an animal cell has a membrane-bound nucleus. Bacterial cells also lack mitochondria.",
            markScheme: [
              "In common: cell membrane [1]",
              "In common: ribosomes / cytoplasm [1]",
              "Difference: bacterium has a cell wall (murein) / animal cell has none [1]",
              "Difference: bacterium has no membrane-bound nucleus (circular DNA) / animal cell has a nucleus [1]",
            ],
            commonError:
              "Listing 'nucleus' as a shared structure — bacteria have no membrane-bound nucleus.",
            difficulty: "core",
            hints: [
              "What do almost all cells have in common?",
              "Cell membrane, cytoplasm and ribosomes are shared.",
              "For differences, think about the wall and the nucleus.",
              "Bacteria are prokaryotes; animal cells are eukaryotes.",
            ],
            strategy: "Two shared, two different — be specific",
            guideRef: "Bacterial Cell Structure",
          },
          {
            id: "bio-cells-bq2-10",
            question: "CHALLENGE: A diagram of an animal cell is drawn so that a mitochondrion, whose actual length is 3 µm, appears 30 mm long.\n(a) Calculate the magnification of the diagram. Show your working. [3]\n(b) On the same diagram (at the same magnification), the whole cell is drawn 200 mm wide. Calculate the actual width of the cell in µm. [3]",
            marks: 6,
            modelAnswer:
              "(a) Convert the image length: 30 mm = 30 000 µm. Magnification = image size / actual size = 30 000 µm / 3 µm = ×10 000.\n(b) Actual width = image size / magnification = 200 mm / 10 000 = 0.02 mm. Convert: 0.02 mm × 1000 = 20 µm. The actual width of the cell is 20 µm.",
            markScheme: [
              "(a) Convert image length: 30 mm = 30 000 µm [1]",
              "(a) Magnification = 30 000 / 3 [1]",
              "(a) Magnification = ×10 000 [1]",
              "(b) Actual width = 200 / 10 000 = 0.02 mm [1]",
              "(b) Convert: 0.02 mm × 1000 = 20 µm [1]",
              "(b) Correct unit (µm) shown [1]",
            ],
            commonError:
              "Forgetting to convert mm to µm in (a), giving ×10 instead of ×10 000; or not converting the final answer in (b) to µm.",
            difficulty: "challenge",
            hints: [
              "For (a): both measurements must be in the same unit — convert 30 mm to µm.",
              "Magnification = 30 000 / 3.",
              "For (b): use the magnification from (a): actual = image / magnification.",
              "Convert your (b) answer from mm to µm at the end.",
            ],
            strategy: "Find magnification first, then reuse it",
            guideRef: "Magnification and Actual Size Calculations",
            solutions: [
              {
                label: "Part (a): magnification of the diagram",
                steps: [
                  "Convert image length: 30 mm = 30 000 µm",
                  "Magnification = Image size / Actual size",
                  "Magnification = 30 000 µm / 3 µm = ×10 000",
                ],
              },
              {
                label: "Part (b): actual width of the cell",
                steps: [
                  "Actual width = Image size / Magnification",
                  "Actual width = 200 mm / 10 000 = 0.02 mm",
                  "Convert: 0.02 mm × 1000 = 20 µm",
                ],
              },
            ],
          },
        ],
      },
      // ── STRUCTURED PAPER 3 ── comparisons, adaptations, application
      {
        id: "bio-cells-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Cell comparisons, adaptations and applied reasoning.",
        questions: [
          {
            id: "bio-cells-bq3-01",
            question: "Name the structure in a plant cell that carries out each of the following:\n(a) photosynthesis [1]\n(b) support and prevention of bursting [1]\n(c) maintaining turgor by storing cell sap [1]",
            marks: 3,
            modelAnswer:
              "(a) Chloroplast.\n(b) Cell wall (made of cellulose).\n(c) Permanent sap vacuole.",
            markScheme: [
              "(a) Chloroplast [1]",
              "(b) Cell wall / cellulose cell wall [1]",
              "(c) Permanent sap vacuole / vacuole [1]",
            ],
            commonError:
              "Naming the 'cell membrane' for support — support comes from the rigid cellulose cell wall.",
            difficulty: "warmup",
            guideRef: "Plant Cell Structure",
          },
          {
            id: "bio-cells-bq3-02",
            question: "Explain why a palisade mesophyll cell is well suited to photosynthesis. Give three points. [3]",
            marks: 3,
            modelAnswer:
              "A palisade mesophyll cell contains many chloroplasts, which absorb light and carry out photosynthesis. It is tall and column-shaped, and these cells are arranged near the upper surface of the leaf so they receive the maximum amount of light. The cell shape and arrangement also allow many chloroplasts to be exposed to the light at once, maximising the rate of photosynthesis.",
            markScheme: [
              "Many chloroplasts — to absorb light / carry out photosynthesis [1]",
              "Tall / column shape positioned near the upper surface of the leaf [1]",
              "Arrangement maximises light absorption / rate of photosynthesis [1]",
            ],
            commonError:
              "Saying palisade cells have 'no chloroplasts' or confusing them with spongy mesophyll (whose main role is gas exchange).",
            difficulty: "core",
            hints: [
              "Which organelle does photosynthesis, and how many does this cell have?",
              "Where in the leaf are palisade cells found?",
              "How does their shape and position help capture light?",
            ],
            strategy: "Three linked structure → function points",
            guideRef: "Specialised Cells and Their Adaptations",
          },
          {
            id: "bio-cells-bq3-03",
            question: "Compare a plant cell with a bacterial cell. Give two structures they share and two ways in which they differ. [4]",
            marks: 4,
            modelAnswer:
              "Shared: both a plant cell and a bacterial cell have a cell wall and ribosomes (and a cell membrane and cytoplasm). Differences: a plant cell has a membrane-bound nucleus whereas a bacterial cell has free circular DNA with no nucleus; and a plant cell has chloroplasts and mitochondria whereas a bacterial cell has neither. Also, the plant cell wall is cellulose while the bacterial wall is murein.",
            markScheme: [
              "Shared: cell wall [1]",
              "Shared: ribosomes / cell membrane / cytoplasm [1]",
              "Difference: plant has membrane-bound nucleus / bacterium has free circular DNA [1]",
              "Difference: plant has chloroplasts and mitochondria / bacterium has neither (or wall is cellulose vs murein) [1]",
            ],
            commonError:
              "Listing 'nucleus' as a shared structure, or forgetting that both have a cell wall (of different materials).",
            difficulty: "core",
            hints: [
              "Both have a wall — but of different materials.",
              "Ribosomes, membrane and cytoplasm are shared too.",
              "For differences, think nucleus and energy-related organelles.",
              "Plant = eukaryote; bacterium = prokaryote.",
            ],
            strategy: "Two shared, two different — be specific",
            guideRef: "Bacterial Cell Structure",
          },
          {
            id: "bio-cells-bq3-04",
            question: "The diagram of a cell is 75 mm long and the scale states the magnification is ×2500.\n(a) Calculate the actual length of the cell in micrometres. Show your working. [3]\n(b) Is this cell more likely to be a typical bacterium or a typical plant cell? Justify your answer using your result. [2]",
            marks: 5,
            modelAnswer:
              "(a) Actual length = image size / magnification = 75 mm / 2500 = 0.03 mm. Convert: 0.03 mm × 1000 = 30 µm.\n(b) The cell is about 30 µm long, which is the size of a typical plant cell (tens of micrometres). A typical bacterium is only about 1–3 µm long, far smaller than this, so the cell is more likely to be a plant cell.",
            markScheme: [
              "(a) Actual length = 75 / 2500 = 0.03 mm [1]",
              "(a) Convert: 0.03 mm × 1000 = 30 µm [1]",
              "(a) Correct unit (µm) [1]",
              "(b) States 30 µm is typical of a plant cell (tens of µm) [1]",
              "(b) Bacteria are much smaller (~1–3 µm), so it is a plant cell [1]",
            ],
            commonError:
              "Forgetting to convert mm to µm in (a); or in (b) giving no numerical comparison of the sizes.",
            difficulty: "challenge",
            hints: [
              "Actual size = Image size / Magnification.",
              "75 / 2500 = 0.03 mm, then convert to µm.",
              "Recall: a bacterium is about 1–3 µm; a plant cell is tens of µm.",
              "Compare your 30 µm answer with these typical sizes.",
            ],
            strategy: "Calculate then interpret against known sizes",
            guideRef: "Magnification and Actual Size Calculations",
            solutions: [
              {
                label: "Part (a): actual length",
                steps: [
                  "Actual size = Image size / Magnification",
                  "Actual size = 75 mm / 2500 = 0.03 mm",
                  "Convert: 0.03 mm × 1000 = 30 µm",
                ],
              },
            ],
          },
          {
            id: "bio-cells-bq3-05",
            question: "Explain why disrupting the bacterial cell wall with an antibiotic can kill a bacterium without harming a human cell. [3]",
            marks: 3,
            modelAnswer:
              "The bacterial cell wall (made of murein) maintains the cell's shape and stops it bursting when water enters by osmosis. If an antibiotic disrupts the wall, the bacterium can no longer withstand the internal pressure and bursts, killing it. Human (animal) cells have no cell wall at all, so they contain no murein for the antibiotic to act on, and they are therefore unharmed.",
            markScheme: [
              "Bacterial cell wall prevents bursting / maintains shape (resists osmotic pressure) [1]",
              "Disrupting the wall causes the bacterium to burst / die [1]",
              "Human cells have no cell wall / no murein, so the antibiotic has no target [1]",
            ],
            commonError:
              "Saying the antibiotic 'cannot enter human cells' — the real reason is that human cells have no cell wall to target.",
            difficulty: "core",
            hints: [
              "What does the cell wall do for a bacterium?",
              "What happens if that wall is weakened while water keeps entering?",
              "Do human cells have a cell wall to be affected?",
            ],
            strategy: "Selective targeting reasoning",
            guideRef: "Bacterial Cell Structure",
          },
          {
            id: "bio-cells-bq3-06",
            question: "A muscle cell, a sperm cell and a ciliated epithelial cell all contain unusually large numbers of mitochondria. Explain what these three cells have in common that accounts for this. [3]",
            marks: 3,
            modelAnswer:
              "All three cells carry out processes that require a lot of energy: muscle cells must contract, sperm cells must swim using their flagellum, and ciliated epithelial cells must beat their cilia continuously. Movement of this kind needs a constant supply of ATP. Mitochondria are the site of aerobic respiration, which releases this ATP, so all three cells contain many mitochondria to meet their high energy demand.",
            markScheme: [
              "All three carry out energy-demanding movement (contraction / swimming / cilia beating) [1]",
              "Movement requires ATP energy [1]",
              "Mitochondria release ATP by aerobic respiration, so many are needed [1]",
            ],
            commonError:
              "Saying the cells 'store energy in mitochondria' — mitochondria release energy, they do not store it.",
            difficulty: "core",
            hints: [
              "What does each of these cells need to do that uses energy?",
              "What molecule supplies that energy?",
              "Which organelle releases it, and by what process?",
            ],
            strategy: "Find the common high-energy theme",
            guideRef: "Specialised Cells and Their Adaptations",
          },
          {
            id: "bio-cells-bq3-07",
            question: "Define the term 'organ' and explain, using the heart as an example, why it is classed as an organ rather than a tissue. [3]",
            marks: 3,
            modelAnswer:
              "An organ is a structure made of two or more different tissues that work together to perform a particular function. The heart is an organ because it is built from several different tissues — for example muscle tissue (which contracts to pump blood), epithelial tissue (lining the chambers and vessels) and connective tissue — all working together to pump blood. Because it contains more than one tissue type, the heart is an organ, not a single tissue.",
            markScheme: [
              "Organ = made of two or more different tissues working together [1]",
              "Heart contains several tissue types — e.g. muscle, epithelial, connective [1]",
              "These work together to pump blood, so it is an organ not a tissue [1]",
            ],
            commonError:
              "Defining an organ as 'a group of similar cells' — that is a tissue; an organ needs different tissue types.",
            difficulty: "core",
            hints: [
              "How many tissue types must an organ contain?",
              "Name two or more tissues found in the heart.",
              "Link 'more than one tissue type' to why it counts as an organ.",
            ],
            strategy: "Define, then apply to the example",
            guideRef: "Levels of Organisation",
          },
          {
            id: "bio-cells-bq3-08",
            question: "Describe how you could use a ruler and a scale bar on a micrograph to work out the real size of a structure shown on the micrograph. [4]",
            marks: 4,
            modelAnswer:
              "First, use the ruler to measure the length of the scale bar on the micrograph (in mm) and note the real length it represents (e.g. 10 µm). Convert both to the same unit and divide the measured length by the real length to find the magnification. Next, use the ruler to measure the structure of interest on the micrograph. Finally, divide that measured (image) size by the magnification to find the real size of the structure, converting units as needed.",
            markScheme: [
              "Measure the scale bar length with the ruler and note the real length it represents [1]",
              "Magnification = measured bar length / real length (same units) [1]",
              "Measure the structure of interest on the micrograph [1]",
              "Real size = measured size / magnification (convert units) [1]",
            ],
            commonError:
              "Forgetting to convert units to the same unit before dividing, or measuring the structure but not the scale bar.",
            difficulty: "core",
            hints: [
              "Start with the scale bar — it links image size to real size.",
              "Use it to find the magnification first.",
              "Then measure the structure you actually want.",
              "Divide its image size by the magnification to get the real size.",
            ],
            strategy: "Method: scale bar → magnification → real size",
            guideRef: "Magnification and Actual Size Calculations",
          },
          {
            id: "bio-cells-bq3-09",
            question: "Mature red blood cells have no nucleus, while most other body cells keep theirs. Suggest one advantage and one disadvantage to the red blood cell of having no nucleus. [2]",
            marks: 2,
            modelAnswer:
              "Advantage: losing the nucleus leaves more internal space for haemoglobin, so the cell can carry more oxygen. Disadvantage: without a nucleus (and its DNA) the cell cannot make new proteins or repair itself and cannot divide, so it has only a limited lifespan and must be replaced regularly.",
            markScheme: [
              "Advantage: more space for haemoglobin / carries more oxygen [1]",
              "Disadvantage: cannot make proteins / repair / divide, so short lifespan / must be replaced [1]",
            ],
            commonError:
              "Giving two advantages and no disadvantage — the question requires one of each.",
            difficulty: "core",
            hints: [
              "Advantage: what fills the freed-up space?",
              "Disadvantage: what does a cell need its nucleus and DNA for?",
              "Think about making proteins, repair and cell division.",
            ],
            strategy: "Weigh up benefit against cost",
            guideRef: "Specialised Cells and Their Adaptations",
          },
          {
            id: "bio-cells-bq3-10",
            question: "CHALLENGE: Plasmids are used by scientists to insert useful genes into bacteria so the bacteria make a desired protein (such as insulin).\n(a) Describe what a plasmid is. [1]\n(b) Explain why a bacterium is a convenient cell in which to do this, referring to its structure. [2]\n(c) Suggest why the bacterium's ribosomes are essential for producing the insulin protein. [2]",
            marks: 5,
            modelAnswer:
              "(a) A plasmid is a small, circular piece of DNA found in bacteria, separate from the main chromosome.\n(b) A bacterium has its DNA, including plasmids, free in the cytoplasm and not enclosed in a nucleus, so a gene can be inserted into a plasmid relatively easily. Bacteria also reproduce very rapidly, so a large number of identical cells carrying the gene can be produced quickly.\n(c) Ribosomes are the site of protein synthesis. The inserted insulin gene is translated by the bacterial ribosomes, which build the insulin protein from amino acids, so without ribosomes the protein could not be made.",
            markScheme: [
              "(a) Small circular piece of DNA, separate from the main chromosome [1]",
              "(b) DNA/plasmid is free in cytoplasm (no nucleus), so gene can be inserted easily [1]",
              "(b) Bacteria reproduce rapidly, giving many cells carrying the gene [1]",
              "(c) Ribosomes are the site of protein synthesis [1]",
              "(c) They translate the inserted gene to build the insulin protein [1]",
            ],
            commonError:
              "Confusing the plasmid (DNA carrying the instructions) with the ribosome (which builds the protein) — they have different roles.",
            difficulty: "challenge",
            hints: [
              "For (a): recall the definition of a plasmid.",
              "For (b): where is a bacterium's DNA, and how fast do bacteria reproduce?",
              "For (c): which organelle reads genes and builds proteins?",
              "Link the inserted gene to the ribosome that translates it.",
            ],
            strategy: "Gene (plasmid) → ribosome → protein chain of reasoning",
            guideRef: "Bacterial Cell Structure",
          },
        ],
      },
      // ── STRUCTURED PAPER 4 ── synoptic, multi-step, evaluation challenge
      {
        id: "bio-cells-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Higher-challenge synoptic, multi-step and evaluation questions.",
        questions: [
          {
            id: "bio-cells-bq4-01",
            question: "Name the part of an animal cell described by each clue:\n(a) Site of aerobic respiration [1]\n(b) Controls what enters and leaves the cell [1]\n(c) Contains the chromosomes [1]",
            marks: 3,
            modelAnswer:
              "(a) Mitochondrion.\n(b) Cell membrane.\n(c) Nucleus.",
            markScheme: [
              "(a) Mitochondrion [1]",
              "(b) Cell membrane [1]",
              "(c) Nucleus [1]",
            ],
            commonError:
              "Writing 'cell wall' for (b) — animal cells have no cell wall; the cell membrane controls transport.",
            difficulty: "warmup",
            guideRef: "Animal Cell Structure",
          },
          {
            id: "bio-cells-bq4-02",
            question: "State two structures found in all cells (animal, plant and bacterial), and explain why each is essential to a living cell. [4]",
            marks: 4,
            modelAnswer:
              "All cells have a cell membrane, which is selectively permeable and controls the movement of substances into and out of the cell — essential for taking in nutrients and removing waste while keeping the cell's contents together. All cells also have ribosomes, which are the site of protein synthesis — essential because proteins (including enzymes) are needed for almost all of the cell's functions. (All cells also contain cytoplasm in which reactions occur.)",
            markScheme: [
              "Cell membrane — present in all cells [1]",
              "Cell membrane controls movement of substances in/out / keeps contents together [1]",
              "Ribosomes — present in all cells [1]",
              "Ribosomes carry out protein synthesis (proteins/enzymes essential for function) [1]",
            ],
            commonError:
              "Naming the nucleus or mitochondria as present in 'all cells' — bacteria have neither.",
            difficulty: "core",
            hints: [
              "Which structures are common to prokaryotes and eukaryotes alike?",
              "The cell membrane and ribosomes (and cytoplasm) are universal.",
              "For each, state what it does and why a cell could not function without it.",
            ],
            strategy: "Identify universal structures, then justify",
            guideRef: "Animal Cell Structure",
          },
          {
            id: "bio-cells-bq4-03",
            question: "CHALLENGE: A student measures a scale bar on a micrograph. The scale bar represents 5 µm and is 25 mm long on the image. A mitochondrion on the same micrograph is 10 mm long.\n(a) Calculate the magnification of the micrograph. Show your working. [2]\n(b) Calculate the actual length of the mitochondrion in µm. Show your working. [3]",
            marks: 5,
            modelAnswer:
              "(a) Convert the scale bar image length: 25 mm = 25 000 µm. Magnification = image length / real length = 25 000 µm / 5 µm = ×5000.\n(b) Actual length = image size / magnification = 10 mm / 5000 = 0.002 mm. Convert: 0.002 mm × 1000 = 2 µm. The mitochondrion is 2 µm long.",
            markScheme: [
              "(a) Convert scale bar: 25 mm = 25 000 µm [1]",
              "(a) Magnification = 25 000 / 5 = 5000 [1]",
              "(b) Actual length = 10 / 5000 = 0.002 mm [1]",
              "(b) Convert: 0.002 mm × 1000 = 2 µm [1]",
              "(b) Correct unit (µm) [1]",
            ],
            commonError:
              "In (a), dividing 25 by 5 without converting (giving 5 instead of 5000); in (b), not converting mm to µm.",
            difficulty: "challenge",
            hints: [
              "For (a): the scale bar gives image length (25 mm) and real length (5 µm) — convert to the same unit first.",
              "25 mm = 25 000 µm, then divide by 5.",
              "For (b): use that magnification — actual = image / magnification.",
              "Convert your (b) answer to µm at the end.",
            ],
            strategy: "Magnification from scale bar, then apply it",
            guideRef: "Magnification and Actual Size Calculations",
            solutions: [
              {
                label: "Part (a): magnification",
                steps: [
                  "Image scale bar = 25 mm = 25 000 µm; real length = 5 µm",
                  "Magnification = 25 000 µm / 5 µm",
                  "Magnification = ×5000",
                ],
              },
              {
                label: "Part (b): actual length of mitochondrion",
                steps: [
                  "Actual length = Image size / Magnification",
                  "Actual length = 10 mm / 5000 = 0.002 mm",
                  "Convert: 0.002 mm × 1000 = 2 µm",
                ],
              },
            ],
          },
          {
            id: "bio-cells-bq4-04",
            question: "CHALLENGE: A newly discovered single-celled organism has a cell wall, ribosomes, a cell membrane and a single circular loop of DNA lying free in the cytoplasm, but no mitochondria and no membrane-bound nucleus.\n(a) State whether this organism is a prokaryote or a eukaryote, and give two pieces of evidence from the description. [3]\n(b) Suggest where in this cell aerobic respiration is most likely to occur, given that it has no mitochondria. [2]",
            marks: 5,
            modelAnswer:
              "(a) The organism is a prokaryote. The evidence is that it has no membrane-bound nucleus (its DNA is a single circular loop free in the cytoplasm) and it has no mitochondria — both are features of prokaryotic (bacterial) cells rather than eukaryotic cells.\n(b) As the cell has no mitochondria, aerobic respiration most likely takes place at the cell membrane (or on folds of the cell membrane), where the respiration enzymes can be located — this is how bacteria respire.",
            markScheme: [
              "(a) Prokaryote [1]",
              "(a) Evidence: no membrane-bound nucleus / DNA is a free circular loop [1]",
              "(a) Evidence: no mitochondria [1]",
              "(b) Respiration occurs at the cell membrane / folds of the cell membrane [1]",
              "(b) This is because there are no mitochondria to contain the respiration enzymes [1]",
            ],
            commonError:
              "Calling it a eukaryote because it 'has a cell wall' — plant and bacterial cells both have walls; the defining clue is the lack of a nucleus.",
            difficulty: "challenge",
            hints: [
              "Which features tell you whether a cell has a true nucleus?",
              "Free circular DNA and no nucleus point to one of the two groups.",
              "Prokaryotes also lack mitochondria.",
              "For (b): if respiration enzymes are not in mitochondria, where else could they sit?",
            ],
            strategy: "Classify from defining features, then reason about function",
            guideRef: "Bacterial Cell Structure",
          },
          {
            id: "bio-cells-bq4-05",
            question: "Explain fully how the structure of a xylem vessel is adapted to transport water up a plant. [4]",
            marks: 4,
            modelAnswer:
              "A xylem vessel is a dead cell that has lost its cytoplasm and nucleus, leaving a hollow space. The end walls between neighbouring cells break down so that the cells join end to end to form a long, continuous tube through which water can flow without obstruction. The walls are thickened and strengthened with lignin, which is waterproof and prevents the vessel from collapsing inwards under the tension created as water is pulled upwards. Together these adaptations make the xylem an efficient pathway for carrying water and dissolved mineral ions from the roots up to the leaves.",
            markScheme: [
              "Dead, hollow cell with no cytoplasm/nucleus — provides a clear space for water [1]",
              "End walls broken down — forms a continuous tube / unobstructed flow [1]",
              "Lignified walls — strength / prevent collapse / waterproof [1]",
              "Adapted to carry water (and mineral ions) up to the leaves [1]",
            ],
            commonError:
              "Saying the xylem 'pumps' water — water is pulled up passively; xylem provides a strengthened, open pathway.",
            difficulty: "core",
            hints: [
              "Why is being a dead, hollow cell useful here?",
              "What happens to the end walls between vessel cells?",
              "What does lignin add to the walls?",
              "Link these to the job of moving water upward.",
            ],
            strategy: "Each feature → its transport benefit",
            guideRef: "Specialised Cells and Their Adaptations",
          },
          {
            id: "bio-cells-bq4-06",
            question: "A student writes: 'In the levels of organisation, a cell is bigger than a tissue because a tissue is just part of a cell.' Identify the error and write a corrected statement that uses the terms cell, tissue and organ correctly. [3]",
            marks: 3,
            modelAnswer:
              "The student has the hierarchy reversed. A tissue is not part of a cell; rather, a cell is the smaller unit and a tissue is made of many similar cells. A corrected statement is: a cell is the basic unit of life; a group of similar cells working together forms a tissue; and two or more different tissues working together form an organ. So the order of increasing size is cell → tissue → organ.",
            markScheme: [
              "Identifies the error: the order is reversed / a tissue is not part of a cell [1]",
              "States a cell is smaller; a tissue is made of many similar cells [1]",
              "Correct relationship: cell → tissue → organ (tissues form organs) [1]",
            ],
            commonError:
              "Just stating the correct order without explaining that a tissue is built FROM cells (not the reverse).",
            difficulty: "core",
            hints: [
              "Is a tissue part of a cell, or a cell part of a tissue?",
              "Which is the smaller unit?",
              "State the correct order: cell → tissue → organ.",
            ],
            strategy: "Spot the reversal, then restate correctly",
            guideRef: "Levels of Organisation",
          },
          {
            id: "bio-cells-bq4-07",
            question: "CHALLENGE: The table gives the approximate sizes of three structures: a ribosome (25 nm), a mitochondrion (2 µm) and a typical animal cell (20 µm).\n(a) Convert all three sizes to nanometres (nm). [2]\n(b) How many times larger is the animal cell than the ribosome? Show your working. [2]",
            marks: 4,
            modelAnswer:
              "(a) Ribosome = 25 nm. Mitochondrion = 2 µm = 2 × 1000 = 2000 nm. Animal cell = 20 µm = 20 × 1000 = 20 000 nm.\n(b) Ratio = animal cell size / ribosome size = 20 000 nm / 25 nm = 800. The animal cell is about 800 times larger than the ribosome.",
            markScheme: [
              "(a) Mitochondrion = 2000 nm [1]",
              "(a) Animal cell = 20 000 nm (ribosome stays 25 nm) [1]",
              "(b) Ratio = 20 000 / 25 [1]",
              "(b) = 800 [1]",
            ],
            commonError:
              "Mixing units when finding the ratio — both values must be in nm (or both in µm) before dividing.",
            difficulty: "challenge",
            hints: [
              "Recall: 1 µm = 1000 nm.",
              "Convert the mitochondrion and the cell from µm to nm.",
              "For (b), divide the cell size by the ribosome size, both in nm.",
              "20 000 / 25 = 800.",
            ],
            strategy: "Convert to a common unit, then take the ratio",
            guideRef: "Magnification and Actual Size Calculations",
            solutions: [
              {
                label: "Part (a): convert µm to nm (× 1000)",
                steps: [
                  "Ribosome = 25 nm (already in nm)",
                  "Mitochondrion = 2 µm × 1000 = 2000 nm",
                  "Animal cell = 20 µm × 1000 = 20 000 nm",
                ],
              },
              {
                label: "Part (b): size ratio",
                steps: [
                  "Ratio = animal cell / ribosome (same unit)",
                  "Ratio = 20 000 nm / 25 nm",
                  "Ratio = 800 times larger",
                ],
              },
            ],
          },
          {
            id: "bio-cells-bq4-08",
            question: "Both an egg cell and a sperm cell are specialised sex cells, yet they have very different structures. Describe two ways their structures differ, and explain how each difference relates to its function. [4]",
            marks: 4,
            modelAnswer:
              "Firstly, the sperm cell is small and has a flagellum (tail) for swimming, whereas the egg cell is large and has no means of swimming. This is because the sperm must travel to reach the egg, while the egg is moved passively along the oviduct. Secondly, the egg cell contains a large store of nutrients (food reserves) in its cytoplasm to nourish the developing embryo after fertilisation, whereas the sperm cell carries very little food and instead has many mitochondria to power its swimming. These differences reflect their roles: the sperm is adapted for movement, the egg for supplying the early embryo.",
            markScheme: [
              "Difference 1: sperm has a flagellum/tail for swimming, egg does not — sperm must travel to the egg [1]",
              "Linked function for difference 1 correctly explained [1]",
              "Difference 2: egg is large with stored nutrients, sperm is small with little food — egg nourishes the embryo [1]",
              "Linked function for difference 2 correctly explained [1]",
            ],
            commonError:
              "Listing differences without explaining the function, e.g. 'sperm has a tail, egg is big' with no reasoning.",
            difficulty: "core",
            hints: [
              "One difference involves how each cell moves (or does not).",
              "Another involves food stores for after fertilisation.",
              "For each difference, say why that suits the cell's job.",
            ],
            strategy: "Difference → linked function, twice",
            guideRef: "Specialised Cells and Their Adaptations",
          },
          {
            id: "bio-cells-bq4-09",
            question: "Give one example, in a mammal, of each level of organisation and show how they connect: cell, tissue, organ, organ system. [4]",
            marks: 4,
            modelAnswer:
              "A muscle cell is a single specialised cell. Many muscle cells together form muscle tissue. Muscle tissue, together with other tissues such as epithelial and connective tissue, makes up the heart, which is an organ. The heart, blood vessels and blood together form the circulatory system, which is an organ system. Each level is built from the level below it.",
            markScheme: [
              "Cell — named, e.g. muscle cell [1]",
              "Tissue — named, e.g. muscle tissue (made of many muscle cells) [1]",
              "Organ — named, e.g. heart (made of several tissues) [1]",
              "Organ system — named, e.g. circulatory system (heart + vessels + blood) [1]",
            ],
            commonError:
              "Giving examples that do not connect (e.g. muscle cell, then nervous tissue, then stomach) — the levels should build on one another.",
            difficulty: "core",
            hints: [
              "Pick a cell, then a tissue made of that same kind of cell.",
              "Then an organ containing that tissue.",
              "Then a system that organ belongs to.",
              "Keep the examples connected through the levels.",
            ],
            strategy: "Build one connected chain",
            guideRef: "Levels of Organisation",
          },
          {
            id: "bio-cells-bq4-10",
            question: "CHALLENGE: Mitochondria and chloroplasts both contain their own small circular DNA and are surrounded by a double membrane.\n(a) State one feature in this description that mitochondria and chloroplasts share with bacteria. [1]\n(b) Scientists use these similarities to support the endosymbiotic theory. State, in simple terms, what this theory proposes. [2]\n(c) Suggest why an animal cell contains mitochondria but no chloroplasts. [2]",
            marks: 5,
            modelAnswer:
              "(a) They contain their own small circular DNA, just as bacteria have a circular chromosome (the double membrane is also acceptable).\n(b) The endosymbiotic theory proposes that mitochondria and chloroplasts evolved from ancient free-living bacteria that were taken inside (engulfed by) a larger host cell long ago, and then survived and reproduced inside it, eventually becoming permanent organelles.\n(c) An animal cell needs mitochondria to release energy by aerobic respiration, but it does not photosynthesise to make its own food (it obtains food by eating), so it has no need for chloroplasts and therefore does not contain them.",
            markScheme: [
              "(a) Their own circular DNA / double membrane (bacteria-like feature) [1]",
              "(b) Mitochondria/chloroplasts evolved from bacteria taken inside a host cell [1]",
              "(b) They survived/reproduced inside and became permanent organelles [1]",
              "(c) Animal cells respire so need mitochondria [1]",
              "(c) Animal cells do not photosynthesise (obtain food by eating), so no chloroplasts needed [1]",
            ],
            commonError:
              "In (c), saying animal cells 'cannot have chloroplasts' rather than explaining they have no need for them because they do not photosynthesise.",
            difficulty: "challenge",
            hints: [
              "For (a): which described feature is also found in bacteria?",
              "For (b): the word 'endo' means inside — one cell taken inside another.",
              "For (c): what do chloroplasts do, and do animals do that?",
              "Animals get food by eating, not by photosynthesis.",
            ],
            strategy: "Link evidence to theory, then reason about cell needs",
            guideRef: "Bacterial Cell Structure",
          },
        ],
      },
    ],
  },
};
