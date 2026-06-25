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
        id: "bio-cells-bank-mcq-1",
        title: "Cell Structure MCQ Paper 1",
        description: "6 multiple-choice questions covering animal, plant and bacterial cells.",
        questions: [
          {
            id: "bio-cells-bank-mcq1-q01",
            question: "Which organelle is the site of aerobic respiration in eukaryotic cells?",
            options: ["Ribosome", "Mitochondrion", "Chloroplast", "Nucleus"],
            answerIndex: 1,
            explanation: "Mitochondria carry out aerobic respiration, releasing energy as ATP. Ribosomes are for protein synthesis, chloroplasts for photosynthesis, and the nucleus for controlling cell activities.",
            guideRef: "Animal Cell Structure",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bank-mcq1-q02",
            question: "Which of the following is a correct statement about bacterial cells?",
            options: [
              "They contain mitochondria for aerobic respiration",
              "Their DNA is enclosed within a membrane-bound nucleus",
              "They have a cell wall made of murein (peptidoglycan)",
              "They have chloroplasts containing chlorophyll"
            ],
            answerIndex: 2,
            explanation: "Bacterial cells have a cell wall made of murein (peptidoglycan), not cellulose. They have no mitochondria, no membrane-bound nucleus, and no chloroplasts — these are eukaryotic features.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "core",
            hints: [
              "Eliminate options that describe eukaryotic organelles.",
              "Bacteria are prokaryotes — what does that mean for their nucleus?",
              "Which statement describes something that IS found in bacteria?"
            ],
            strategy: "Process of elimination"
          },
          {
            id: "bio-cells-bank-mcq1-q03",
            question: "A root hair cell is adapted for absorbing water from the soil. Which feature is most important for this?",
            options: [
              "Many chloroplasts to photosynthesise",
              "A large permanent vacuole filled with cell sap",
              "A long hair-like extension increasing surface area",
              "A thick lignified cell wall"
            ],
            answerIndex: 2,
            explanation: "The long hair-like projection greatly increases the surface area of the root hair cell, allowing more water and mineral ions to be absorbed by osmosis and active transport. Root hair cells have no chloroplasts (underground), do not need lignin, and though they have a vacuole, the hair extension is the primary adaptation.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "Root hair cells are underground — can they photosynthesise?",
              "Their job is to absorb water — what structural feature increases absorption rate?",
              "Think: more surface area = more absorption."
            ],
            strategy: "Structure → Function"
          },
          {
            id: "bio-cells-bank-mcq1-q04",
            question: "An image of a cell is 54 mm long. The actual cell is 90 µm long. What is the magnification?",
            options: ["×600", "×60", "×6000", "×1.67"],
            answerIndex: 0,
            explanation: "Convert image size to µm: 54 mm = 54 000 µm. Magnification = 54 000 µm / 90 µm = 600. Alternatively, actual size = 90 µm = 0.09 mm; magnification = 54 / 0.09 = 600.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "Both values must be in the same unit before dividing.",
              "Convert 54 mm to µm: multiply by 1000.",
              "Magnification = Image size / Actual size = 54 000 / 90."
            ],
            strategy: "Unit analysis"
          },
          {
            id: "bio-cells-bank-mcq1-q05",
            question: "Which of the following is the correct sequence of organisation in the human body?",
            options: [
              "Tissue → Cell → Organ → Organ system → Organism",
              "Cell → Organelle → Organ → Tissue → Organism",
              "Organelle → Cell → Tissue → Organ → Organ system → Organism",
              "Cell → Tissue → Organelle → Organ → Organism"
            ],
            answerIndex: 2,
            explanation: "The correct hierarchy is: Organelle → Cell → Tissue → Organ → Organ system → Organism. Each level is built from and contains the previous level.",
            guideRef: "Levels of Organisation",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bank-mcq1-q06",
            question: "A student claims that xylem vessel cells are 'dead' cells. Which evidence best supports this?",
            options: [
              "Xylem cells contain no chloroplasts",
              "Xylem cells have no nucleus, cytoplasm or end walls — forming hollow continuous tubes",
              "Xylem cells are surrounded by a cellulose cell wall",
              "Xylem cells cannot divide by mitosis"
            ],
            answerIndex: 1,
            explanation: "Mature xylem vessels are dead because they have lost their nucleus, cytoplasm and cross-walls (end walls), leaving hollow lignified tubes. This is the defining structural evidence. The absence of chloroplasts and inability to divide also apply but are not as definitive as the complete loss of cellular contents.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "What does 'dead' mean at the cellular level?",
              "Which option describes the complete absence of living components?",
              "Think: what must be removed to create an unobstructed water pipe?"
            ],
            strategy: "Evidence evaluation"
          }
        ]
      },
      {
        id: "bio-cells-bank-mcq-2",
        title: "Cell Structure MCQ Paper 2",
        description: "6 multiple-choice questions with higher challenge weighting — includes synoptic and application questions.",
        questions: [
          {
            id: "bio-cells-bank-mcq2-q01",
            question: "Which of the following correctly describes a palisade mesophyll cell?",
            options: [
              "Elongated cells with many mitochondria, found deep in the leaf",
              "Tall column-shaped cells packed with chloroplasts in the upper leaf",
              "Thin-walled cells with no organelles, forming hollow tubes",
              "Cells with long hair-like extensions for water absorption"
            ],
            answerIndex: 1,
            explanation: "Palisade mesophyll cells are tall and column-shaped, densely packed with chloroplasts, and located near the upper surface of the leaf to maximise light capture for photosynthesis. Option A describes cells with many mitochondria — palisade cells do respire but are defined by their chloroplast density. Options C and D describe xylem vessels and root hair cells respectively.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bank-mcq2-q02",
            question: "A scientist is developing an antibiotic that targets ribosomes. Why might this antibiotic affect bacteria without harming human cells?",
            options: [
              "Human cells do not have ribosomes",
              "Bacterial ribosomes (70S) are structurally different from human ribosomes (80S)",
              "Antibiotics can only enter bacterial cells, not human cells",
              "Bacteria have ribosomes in their nucleus; human cells do not"
            ],
            answerIndex: 1,
            explanation: "Bacterial ribosomes are 70S while eukaryotic (human) ribosomes are 80S — they differ in size and protein composition. A drug designed to fit the 70S ribosome will not bind the 80S ribosome, so it selectively kills bacteria. Humans do have ribosomes, and bacteria have no nucleus.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "challenge",
            hints: [
              "Do human cells have ribosomes? (Yes — rule out option A.)",
              "The key word is 'selectively' — what structural difference allows selective targeting?",
              "Look up: what are 70S and 80S ribosomes?",
              "If the shapes differ, a drug shaped for one may not fit the other — like a key and a lock."
            ],
            strategy: "Apply structure-function reasoning to a novel context"
          },
          {
            id: "bio-cells-bank-mcq2-q03",
            question: "The actual length of a chloroplast is 5 µm. In a diagram it is drawn 20 mm long. What is the magnification of the diagram?",
            options: ["×400", "×4000", "×40 000", "×40"],
            answerIndex: 1,
            explanation: "Convert: 20 mm = 20 000 µm. Magnification = 20 000 µm / 5 µm = 4000. Many students choose ×400 by forgetting to convert mm → µm (they divide 20 by 5 instead of 20 000 by 5).",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "Write the formula: Magnification = Image size / Actual size.",
              "Check units: image is in mm, actual is in µm — convert first.",
              "20 mm = 20 × 1000 µm = 20 000 µm.",
              "20 000 / 5 = 4000."
            ],
            strategy: "Unit analysis before calculation"
          },
          {
            id: "bio-cells-bank-mcq2-q04",
            question: "Which statement best explains why mature red blood cells can carry more oxygen than they could if they retained their nucleus?",
            options: [
              "The nucleus would use oxygen for its own metabolic reactions",
              "Without a nucleus there is more cytoplasmic space for haemoglobin molecules",
              "The nucleus would prevent the biconcave shape from forming",
              "A nucleus would block oxygen from entering the cell"
            ],
            answerIndex: 1,
            explanation: "By losing its nucleus, the red blood cell gains more cytoplasmic volume that can be filled with haemoglobin molecules, increasing oxygen-carrying capacity. The nucleus would not 'use oxygen' directly (it has no mitochondria), cannot block O2 entry (O2 diffuses across the membrane), and the biconcave shape is a membrane property, not nuclear.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "What takes up space inside a red blood cell — what is it packed with?",
              "If the nucleus takes up space, what does that reduce?",
              "More haemoglobin = more oxygen carried."
            ],
            strategy: "Cause and effect reasoning"
          },
          {
            id: "bio-cells-bank-mcq2-q05",
            question: "A student views a cheek cell under a light microscope and then switches to viewing a bacterium from the mouth at the same magnification. Which structure would the student expect to see in the bacterium but NOT in the cheek cell?",
            options: ["Nucleus", "Cell membrane", "Ribosome", "Circular DNA without a nuclear membrane"],
            answerIndex: 3,
            explanation: "Bacteria have circular DNA that is not enclosed within a membrane — this is a defining prokaryotic feature absent from the eukaryotic cheek cell. Cheek cells have a nucleus. Both cells have a cell membrane and ribosomes (though of different sizes).",
            guideRef: "Bacterial Cell Structure",
            difficulty: "core",
            hints: [
              "What organelles do both cell types share?",
              "What is the defining structural difference between a prokaryote and a eukaryote?",
              "The answer involves DNA arrangement, not an organelle."
            ],
            strategy: "Prokaryote vs eukaryote comparison"
          },
          {
            id: "bio-cells-bank-mcq2-q06",
            question: "A nerve cell (neurone) has a very long axon extending up to 1 metre in length. A single mitochondrion is 2 µm long. How many mitochondria placed end-to-end would span the length of the axon? (1 m = 10^6 µm)",
            options: ["500 000", "5 000 000", "50 000", "500"],
            answerIndex: 0,
            explanation: "1 m = 1 000 000 µm. Number = 1 000 000 µm / 2 µm = 500 000. This question tests unit conversion (m to µm) and the concept of scale in biology.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "challenge",
            hints: [
              "Convert the axon length to µm: 1 m = 10^6 µm = 1 000 000 µm.",
              "Divide total length by the length of one mitochondrion.",
              "1 000 000 / 2 = 500 000.",
              "Check: does 500 000 × 2 µm = 1 000 000 µm = 1 m? Yes."
            ],
            strategy: "Unit conversion + division — work in the same unit throughout"
          }
        ]
      }
    ],
    qaPapers: [
      {
        id: "bio-cells-bank-qa-1",
        title: "Cell Structure Structured Questions Paper 1",
        description: "4 structured questions on cell ultrastructure, specialisation and magnification.",
        questions: [
          {
            id: "bio-cells-bank-qa1-q01",
            question: "Fig. 1 shows a diagram of a bacterial cell.\n(a) Name TWO structures found in the bacterial cell that are also found in plant cells. [2]\n(b) State TWO structures found in a plant cell that are NOT found in the bacterial cell shown. [2]",
            marks: 4,
            modelAnswer: "(a) Two structures found in both bacterial and plant cells: (1) cell wall and (2) ribosomes. (Note: the bacterial cell wall is murein, the plant cell wall is cellulose — they are structurally different but both called cell wall.)\n(b) Two structures in a plant cell but NOT in the bacterial cell: (1) membrane-bound nucleus (or nuclear envelope) and (2) mitochondria (or chloroplasts / permanent vacuole).",
            markScheme: [
              "(a) Cell wall (accept 'cell wall' — ignore reference to composition) [1]",
              "(a) Ribosomes [1]",
              "(b) Membrane-bound nucleus / nuclear envelope [1]",
              "(b) Mitochondria / chloroplasts / permanent sap vacuole / endoplasmic reticulum [1]"
            ],
            commonError: "Stating 'nucleus' for part (a) — bacteria have no membrane-bound nucleus. Also: confusing 'cell wall' composition — both have walls but of different materials.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "core",
            hints: [
              "For (a): think about structures found in ALL cells — cell membrane, ribosomes — plus any others bacteria share with plants.",
              "For (b): think about what makes plant cells eukaryotic.",
              "Chloroplasts, mitochondria, and a membrane-bound nucleus are all absent from bacteria."
            ],
            strategy: "Venn diagram thinking — overlapping and unique sets"
          },
          {
            id: "bio-cells-bank-qa1-q02",
            question: "A student examined a cross-section of a leaf under a microscope. The scale bar on the image represents 50 µm and measures 10 mm on the image.\n(a) Calculate the magnification of the image. Show your working. [2]\n(b) A palisade mesophyll cell in the image is 18 mm tall. Calculate its actual height in µm. [2]",
            marks: 4,
            modelAnswer: "(a) Convert scale bar length to µm: 10 mm = 10 000 µm. Magnification = image length of bar / actual length of bar = 10 000 µm / 50 µm = ×200.\n(b) Actual height = image height / magnification = 18 mm / 200 = 0.09 mm. Convert: 0.09 mm × 1000 = 90 µm.",
            markScheme: [
              "(a) Correct conversion of scale bar: 10 mm = 10 000 µm [1]",
              "(a) Magnification = 10 000 / 50 = 200 (accept ×200) [1]",
              "(b) Actual size = 18 / 200 = 0.09 mm [1]",
              "(b) Correct conversion: 0.09 mm = 90 µm [1]"
            ],
            commonError: "In (a): dividing 10 by 50 without converting units, giving magnification of 0.2 (wrong). In (b): forgetting to convert mm to µm.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "core",
            hints: [
              "For (a): the scale bar tells you image size (10 mm) and actual size (50 µm). Make units match before dividing.",
              "10 mm = 10 × 1000 = 10 000 µm. Now both are in µm.",
              "Magnification = 10 000 / 50.",
              "For (b): use the magnification you found in (a): actual = image / magnification, then convert mm to µm."
            ],
            strategy: "Two-step: magnification from scale bar, then use it",
            solutions: [
              {
                label: "Part (a): scale bar method",
                steps: [
                  "Identify: image scale bar = 10 mm; actual scale bar = 50 µm",
                  "Convert to same unit: 10 mm = 10 000 µm",
                  "Magnification = 10 000 µm / 50 µm = 200"
                ]
              },
              {
                label: "Part (b): actual size calculation",
                steps: [
                  "Formula: Actual size = Image size / Magnification",
                  "Actual size = 18 mm / 200 = 0.09 mm",
                  "Convert: 0.09 mm × 1000 = 90 µm"
                ]
              }
            ]
          },
          {
            id: "bio-cells-bank-qa1-q03",
            question: "Describe and explain how the structure of a ciliated epithelial cell is adapted to its function in the trachea (windpipe). [4]",
            marks: 4,
            modelAnswer: "Ciliated epithelial cells line the trachea and have many cilia projecting from their surface. These cilia beat rhythmically in coordinated waves to move a layer of mucus (and trapped dust, bacteria and other particles) upward towards the throat, where it can be swallowed. To power the continuous beating of the cilia, the cells contain a large number of mitochondria which carry out aerobic respiration to produce the ATP energy required. The mucus itself traps pathogens and prevents them from reaching the lungs.",
            markScheme: [
              "Many cilia on the cell surface [1]",
              "Cilia beat rhythmically to move mucus up the trachea / towards the throat [1]",
              "Many mitochondria present [1]",
              "Mitochondria provide ATP / energy for cilia movement / aerobic respiration [1]"
            ],
            commonError: "Saying cilia 'absorb' pathogens or that cilia produce mucus — cilia move the mucus; goblet cells produce the mucus.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "core",
            hints: [
              "Name the structure on the cell surface that moves.",
              "What does it move, and in which direction?",
              "What organelle is needed in large numbers to power this movement?",
              "Link that organelle to its function — energy release."
            ],
            strategy: "Structure → function — link each feature to what it enables"
          },
          {
            id: "bio-cells-bank-qa1-q04",
            question: "CHALLENGE: A student compares two cells under an electron microscope. Cell A has many mitochondria, a long tail-like structure, and an acrosome. Cell B is large, contains large quantities of nutrients, and has a jelly coat.\n(a) Identify Cell A and Cell B. [2]\n(b) Explain why Cell A has many more mitochondria than Cell B. [3]\n(c) After fertilisation the zygote undergoes repeated divisions. State the level of organisation of the zygote and what it develops into after several divisions. [2]",
            marks: 7,
            modelAnswer: "(a) Cell A is a sperm cell. Cell B is an egg cell (ovum).\n(b) Sperm cells (Cell A) require large amounts of ATP energy to power the beating of their flagellum (tail) to swim through the female reproductive tract to reach the egg. Mitochondria carry out aerobic respiration to produce this ATP. Egg cells (Cell B) do not need to move — they are stationary — so far less ATP is needed and therefore fewer mitochondria are required.\n(c) The zygote is at the level of a single cell. After repeated mitotic divisions it forms a ball of cells called an embryo, which then differentiates into tissues and organs.",
            markScheme: [
              "(a) Cell A = sperm cell [1]",
              "(a) Cell B = egg cell / ovum [1]",
              "(b) Sperm must swim / move via flagellum [1]",
              "(b) Swimming requires ATP / energy [1]",
              "(b) Mitochondria produce ATP by aerobic respiration / more mitochondria = more ATP produced [1]",
              "(c) Zygote is at the cell level of organisation [1]",
              "(c) Forms an embryo / ball of cells / then tissues and organs [1]"
            ],
            commonError: "In (b): saying 'sperm cells need more energy to fertilise the egg' without explaining WHY (i.e. swimming via flagellum). In (c): saying the zygote is a 'tissue' — it is a single cell.",
            guideRef: "Specialised Cells and Their Adaptations",
            difficulty: "challenge",
            hints: [
              "For (a): identify the distinctive features — acrosome and flagellum in Cell A; nutrients and jelly coat in Cell B.",
              "For (b): the flagellum provides the clue — what does it do, what does that require?",
              "For (b): compare the two cells' need for movement.",
              "For (c): one cell → many cells → different cell types. Which level of organisation is a single fertilised cell?"
            ],
            strategy: "Feature identification → function → energy requirement chain"
          }
        ]
      },
      {
        id: "bio-cells-bank-qa-2",
        title: "Cell Structure Structured Questions Paper 2",
        description: "4 structured questions with greater challenge — includes calculation, synoptic and application items.",
        questions: [
          {
            id: "bio-cells-bank-qa2-q01",
            question: "State the function of each of the following organelles:\n(a) Ribosome [1]\n(b) Mitochondrion [1]\n(c) Nucleus [1]\n(d) Chloroplast [1]",
            marks: 4,
            modelAnswer: "(a) Ribosome: the site of protein synthesis — translates mRNA to produce polypeptide chains.\n(b) Mitochondrion: site of aerobic respiration, releasing energy in the form of ATP from glucose.\n(c) Nucleus: controls the cell's activities; contains the chromosomal DNA that carries genetic information; directs protein synthesis.\n(d) Chloroplast: the site of photosynthesis — traps light energy using chlorophyll to convert CO2 and water into glucose and oxygen.",
            markScheme: [
              "(a) Protein synthesis / translation of mRNA [1]",
              "(b) Aerobic respiration / release of ATP energy from glucose [1]",
              "(c) Controls cell activities / contains DNA / directs protein synthesis [1]",
              "(d) Photosynthesis / converts light energy to chemical energy (glucose) [1]"
            ],
            commonError: "Saying the mitochondrion 'stores energy' — it releases/produces energy (ATP) from glucose. Saying the nucleus 'contains RNA' — it contains DNA (though mRNA is transcribed from it).",
            guideRef: "Animal Cell Structure",
            difficulty: "warmup"
          },
          {
            id: "bio-cells-bank-qa2-q02",
            question: "CHALLENGE — Magnification calculation with error analysis:\nA student calculates the magnification of a diagram of a cell. They measure the image length as 45 mm. They measure the scale bar on the diagram as 9 mm, which represents 3 µm.\n(a) Calculate the actual magnification. [3]\n(b) The student made an error and calculated a magnification of 5. Identify the error the student likely made and explain how it leads to this incorrect answer. [2]",
            marks: 5,
            modelAnswer: "(a) First, find magnification from the scale bar: Scale bar image length = 9 mm = 9 000 µm; scale bar actual length = 3 µm. Magnification = 9 000 / 3 = ×3 000. Check with cell: actual cell length = 45 mm / 3 000 = 0.015 mm = 15 µm (reasonable for a small cell). Magnification = ×3 000.\n(b) The student likely divided the image scale bar (9 mm) by the actual scale bar length (3 µm) without converting units: 9 / 3 = 3, or perhaps divided 15 mm by 3 µm getting 5. If they used the cell (45 mm) and divided by 9 mm (scale bar image) = 5 — they divided image length by scale bar image length rather than using the correct formula. The error is using the scale bar image length as if it were the actual size, rather than converting 9 mm to µm and dividing by the real size in µm.",
            markScheme: [
              "(a) Scale bar magnification: 9 mm = 9 000 µm [1]",
              "(a) Magnification = 9 000 / 3 = 3 000 [1]",
              "(a) Correct final answer: ×3 000 [1]",
              "(b) Correctly identifies failure to convert units (mm to µm) OR dividing wrong pair of values [1]",
              "(b) Explains how this gives 5 (e.g. 9/3 = 3 not converted, or 45/9 = 5 using wrong denominator) [1]"
            ],
            commonError: "In (a): using the cell image measurement (45 mm) and dividing by the scale bar's actual size (3 µm) without converting: 45/3 = 15. Always use the scale bar to find magnification first.",
            guideRef: "Magnification and Actual Size Calculations",
            difficulty: "challenge",
            hints: [
              "Use only the scale bar to find magnification — the scale bar tells you image length and real length.",
              "Convert 9 mm to µm: × 1000.",
              "Magnification = scale bar image length (µm) / scale bar real length (µm).",
              "For (b): think about what 9 / 3 gives without converting, and what 45 / 9 gives — which equals 5?"
            ],
            strategy: "Error analysis — work backwards from the wrong answer",
            solutions: [
              {
                label: "Method: use scale bar only",
                steps: [
                  "Scale bar image = 9 mm; scale bar real = 3 µm",
                  "Convert: 9 mm = 9 000 µm",
                  "Magnification = 9 000 µm / 3 µm = 3 000",
                  "Verify: actual cell = 45 mm / 3000 = 0.015 mm = 15 µm (biologically plausible)"
                ]
              }
            ]
          },
          {
            id: "bio-cells-bank-qa2-q03",
            question: "Explain the levels of organisation in a named plant, starting from the cell level and ending at the organism level. Use a specific example at each level. [5]",
            marks: 5,
            modelAnswer: "Starting at the cell level, a palisade mesophyll cell is a specialised plant cell adapted for photosynthesis. Groups of palisade mesophyll cells form palisade mesophyll tissue — a tissue being a collection of similar cells with a shared function. The palisade mesophyll tissue, together with other tissues such as the spongy mesophyll, epidermis, xylem and phloem, make up the leaf — an organ. The leaf works together with other organs such as the stem and roots to form the shoot system — an organ system. Finally, all the organ systems together make up the complete plant — the organism (for example, a rose plant or a sunflower).",
            markScheme: [
              "Named cell — e.g. palisade mesophyll cell / root hair cell [1]",
              "Named tissue — e.g. palisade mesophyll tissue / xylem tissue [1]",
              "Named organ — e.g. leaf / root / stem [1]",
              "Named organ system — e.g. shoot system / root system [1]",
              "Organism — named plant or correct term [1]"
            ],
            commonError: "Confusing tissue with organ — an organ has more than one tissue type; a tissue is a group of similar (same type of) cells. Many students write 'leaf cells' as the tissue level — cells are not a tissue.",
            guideRef: "Levels of Organisation",
            difficulty: "core",
            hints: [
              "Start with a specific named plant cell.",
              "A tissue is a group of SIMILAR cells — name a tissue in a leaf.",
              "An organ has multiple tissue types — the leaf qualifies.",
              "What group of organs work together to carry out a system function in a plant?"
            ],
            strategy: "Top-down then bottom-up — draft the list, then add examples"
          },
          {
            id: "bio-cells-bank-qa2-q04",
            question: "CHALLENGE — Synoptic question:\nA student discovers that a newly identified bacterial strain is resistant to an antibiotic that targets the bacterial cell wall (murein synthesis). The bacterium also carries a plasmid.\n(a) Explain why disrupting murein synthesis kills a bacterium but would NOT kill a human cell. [2]\n(b) Suggest why the plasmid might be important in antibiotic resistance. [2]\n(c) The student views the bacteria under a microscope at ×1500 magnification. A single bacterium appears 3 mm long in the eyepiece. Calculate the actual length of the bacterium in µm. [3]",
            marks: 7,
            modelAnswer: "(a) Bacterial cells have a cell wall made of murein (peptidoglycan) that maintains their shape and prevents them from bursting due to osmotic pressure. If murein synthesis is disrupted, the cell wall cannot be maintained, and the bacterium lyses (bursts). Human cells have no cell wall — they are surrounded only by a cell membrane and rely on other mechanisms for structural support. Therefore, disrupting murein synthesis only kills bacteria.\n(b) Plasmids are small circular DNA molecules that can carry genes independently of the main chromosome. The plasmid may carry a gene (or genes) encoding an enzyme that breaks down or inactivates the antibiotic, or encodes a modified version of the enzyme the antibiotic targets, conferring resistance. Plasmids can also be transferred between bacteria (conjugation), spreading resistance rapidly.\n(c) Actual size = Image size / Magnification = 3 mm / 1500 = 0.002 mm. Convert: 0.002 mm × 1000 = 2 µm.",
            markScheme: [
              "(a) Bacterial cell wall (murein) prevents bursting / maintains shape under osmotic pressure [1]",
              "(a) Human cells have no cell wall / antibiotic only affects murein / no murein in human cells [1]",
              "(b) Plasmid may carry antibiotic-resistance gene(s) [1]",
              "(b) Gene encodes enzyme to break down antibiotic / modify target / plasmid transferred between bacteria [1]",
              "(c) Actual size = 3 / 1500 = 0.002 mm [1]",
              "(c) Convert: 0.002 × 1000 = 2 µm [1]",
              "(c) Units correct: µm [1]"
            ],
            commonError: "In (a): saying 'antibiotics enter human cells' — the key point is that human cells lack the TARGET (murein), not that the antibiotic cannot enter. In (c): forgetting to convert mm to µm.",
            guideRef: "Bacterial Cell Structure",
            difficulty: "challenge",
            hints: [
              "For (a): what does murein do, and which cells have it? If human cells lack it entirely, what happens when it is disrupted in a human?",
              "For (b): plasmids carry DNA — what type of information can DNA encode?",
              "For (c): rearrange the magnification formula; remember to convert units at the end.",
              "3 mm / 1500 = 0.002 mm. Then × 1000 to get µm."
            ],
            strategy: "Selective targeting — the drug must have a bacterial-only target; plasmids carry functional genes",
            solutions: [
              {
                label: "Part (c): magnification calculation",
                steps: [
                  "Formula: Actual size = Image size / Magnification",
                  "Substitute: 3 mm / 1500 = 0.002 mm",
                  "Convert: 0.002 mm × 1000 µm/mm = 2 µm",
                  "Answer: actual bacterium length = 2 µm"
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
