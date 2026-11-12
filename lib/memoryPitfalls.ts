// Auto-generated high-yield Edexcel IGCSE Triple Science Memory Hooks & Examiner Pitfalls across all 37 topics.

export interface MemoryMnemonic {
  label: string;
  hook: string;
  detail: string;
}

export interface ExaminerPitfall {
  spec: string;
  wrong: string;
  verdict: string;
  why: string;
  right: string;
}

export interface RapidMarkCheck {
  q: string;
  marks: string;
  points: string[];
  hook: string;
}

export interface TopicMemoryVault {
  topicId: string;
  specCode: string;
  specRefs: string;
  epTitle: string;
  mnemonics: MemoryMnemonic[];
  pitfalls: ExaminerPitfall[];
  rapidChecks: RapidMarkCheck[];
}

export const MEMORY_PITFALLS: Record<string, TopicMemoryVault> = {
  "bio-cells": {
    "topicId": "bio-cells",
    "specCode": "Edexcel 4BI1",
    "specRefs": "Edexcel 4BI1 · 1.1–1.4 & 2.1–2.6B",
    "epTitle": "VIP Velvet Ropes, Naked Bacterial DNA & Stem-Cell Drama",
    "mnemonics": [
      {
        "label": "Saprotrophic Fungi vs Plants (1.2–1.3)",
        "hook": "🍄 Bread Mould Rule: Chitin wall + Spit-out enzymes + Store glycogen!",
        "detail": "Mucor cell wall is <strong>chitin</strong> vs plant <strong>cellulose</strong>. · Mucor has <strong>no chloroplasts</strong> and forms multinucleate <strong>hyphae/mycelium</strong>."
      },
      {
        "label": "Prokaryotes vs Viruses (1.3–1.4)",
        "hook": "💊 Antibiotics smash bacterial walls — viruses don't own walls!",
        "detail": "<em>Pneumococcus</em> is a living <strong>bacterium</strong> with a peptidoglycan wall & bacterial ribosomes targeted by antibiotics. · Influenza is a <strong>non-living virus</strong> (protein coat + RNA, no cell wall or metabolism) replicating inside host cells."
      },
      {
        "label": "Stem Cells Evaluation (2.5B–2.6B)",
        "hook": "⚖️ 1 Clinical Pro + 1 Clinical Risk + 1 Ethical Point!",
        "detail": "<strong>Embryonic</strong> differentiate into <strong>any cell type</strong> (wider treatments) vs <strong>adult</strong> (limited cell types, painful bone-marrow extraction). · Risks/ethics: embryo destruction (ethical issue), <strong>immune rejection</strong> by host, or tumour risk from rapid division."
      },
      {
        "label": "Animal Cell Structure",
        "hook": "Draw and label from memory",
        "detail": "The nucleus houses DNA and directs all cellular activities."
      },
      {
        "label": "Plant Cell Structure",
        "hook": "Plant vs animal comparison table",
        "detail": "Cell wall (cellulose) provides rigidity and prevents the cell bursting."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4BI1 · 1.2",
        "wrong": "Bacteria are single-celled organisms with a small nucleus and plasmids in their cytoplasm.",
        "verdict": "🚨 RED-PEN TRAP! Zero Nucleus in Bacteria!",
        "why": "Did Lactobacillus sneak into the eukaryote lounge?!",
        "right": "Prokaryotes have NO nucleus — circular DNA floats free in cytoplasm alongside plasmids."
      },
      {
        "spec": "Edexcel 4BI1 · 2.1",
        "wrong": "Starch is stored inside fungal hyphae of Mucor to fuel respiration.",
        "verdict": "🚨 FUNGI STORE GLYCOGEN, NOT STARCH!",
        "why": "Plants own the patent on starch — animals and fungi store GLYCOGEN!",
        "right": "Animals & fungi store carbohydrate as insoluble glycogen; plants store starch."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Stating 'plants have a nucleus and animals do not' — both cell types have a membrane-bound nucleus.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe three ways in which a plant cell differs from an animal cell. [3]",
        "right": "Cell wall (made of cellulose) present in plant cell / absent in animal cell; Chloroplasts present in plant cell / absent in animal cell"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Forgetting to convert mm to µm at the end, giving 0.06 as the final answer without units or with wrong units.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A photograph of a cell shows it to be 45 mm in length. The magnification is ×750. Calculate the actual length of the cel",
        "right": "Correct use of formula: Actual size = Image size / Magnification; Correct arithmetic: 45 / 750 = 0.06 mm (or equivalent)"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Describing the midpiece as 'containing chloroplasts' — chloroplasts are plant organelles; sperm use mitochondria for energy.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain how the structure of a sperm cell is adapted to its function of fertilising an egg cell. [4]",
        "right": "Streamlined/pointed head — reduces water resistance / aids swimming; Acrosome contains enzymes — to digest / break down egg cell coat / zona pellucida"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Saying fungi 'eat' or 'engulf' decaying matter — examiners require 'extracellular secretion of enzymes' and 'absorption of soluble products'.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe how a fungus such as Mucor obtains its nutrition from bread, and state two structural differences between a Muc",
        "right": "saprotrophic nutrition / secretes digestive enzymes extracellularly onto food; digests large insoluble molecules into small soluble products that are absorbed"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain two structural differences and one nutritional difference between Mucor and a palisade plant cell.",
        "marks": "4 Marks",
        "points": [
          "Mucor cell wall is <strong>chitin</strong> vs plant <strong>cellulose</strong>.",
          "Mucor has <strong>no chloroplasts</strong> and forms multinucleate <strong>hyphae/mycelium</strong>.",
          "Mucor uses <strong>saprotrophic nutrition</strong> (secretes <strong>extracellular enzymes</strong> onto organic matter and absorbs soluble products) vs plant photosynthesis."
        ],
        "hook": "🍄 Bread Mould Rule: Chitin wall + Spit-out enzymes + Store glycogen!"
      },
      {
        "q": "Why can antibiotics kill Pneumococcus without curing influenza?",
        "marks": "3 Marks",
        "points": [
          "<em>Pneumococcus</em> is a living <strong>bacterium</strong> with a peptidoglycan wall & bacterial ribosomes targeted by antibiotics.",
          "Influenza is a <strong>non-living virus</strong> (protein coat + RNA, no cell wall or metabolism) replicating inside host cells."
        ],
        "hook": "💊 Antibiotics smash bacterial walls — viruses don't own walls!"
      },
      {
        "q": "Evaluate embryonic vs adult stem cells in medicine.",
        "marks": "4 Marks",
        "points": [
          "<strong>Embryonic</strong> differentiate into <strong>any cell type</strong> (wider treatments) vs <strong>adult</strong> (limited cell types, painful bone-marrow extraction).",
          "Risks/ethics: embryo destruction (ethical issue), <strong>immune rejection</strong> by host, or tumour risk from rapid division."
        ],
        "hook": "⚖️ 1 Clinical Pro + 1 Clinical Risk + 1 Ethical Point!"
      }
    ]
  },
  "bio-transport-cell": {
    "topicId": "bio-transport-cell",
    "specCode": "Edexcel 4BI1",
    "specRefs": "Edexcel 4BI1 · 2.15–2.17",
    "epTitle": "Shrivelled Fries, Exploding RBCs & The ATP Escalator",
    "mnemonics": [
      {
        "label": "SA:V Agar Cube Practical (2.15–2.17)",
        "hook": "🧊 Bigger SA:V + Shorter Trek = Faster Diffusion!",
        "detail": "1 cm cube SA:V = <strong>6:1</strong> vs 3 cm cube SA:V = <strong>2:1</strong>. · Smaller block has <strong>larger SA:V</strong> AND <strong>shorter diffusion pathway</strong> (0.5 cm vs 1.5 cm to centre)."
      },
      {
        "label": "Osmosis vs Active Transport (2.15)",
        "hook": "🎢 Passive water slide vs Paid ATP escalator!",
        "detail": "Substance: Osmosis = <strong>water only</strong>; Active transport = <strong>ions/sugars</strong>. · Direction: Osmosis = <strong>down water potential gradient</strong>; Active = <strong>against concentration gradient</strong>."
      },
      {
        "label": "Turgor Support in Plants (2.17)",
        "hook": "🎈 Inflated vacuoles press firm against cellulose walls!",
        "detail": "Water enters vacuole by <strong>osmosis</strong> → vacuole swells and pushes cytoplasm/membrane outward against inelastic <strong>cellulose cell wall</strong> → <strong>turgid</strong> cells support stem."
      },
      {
        "label": "Diffusion",
        "hook": "Think about probability: more particles on one side → more likely to cross toward the other side.",
        "detail": "Diffusion is the net movement of particles from high to low concentration — down the concentration gradient."
      },
      {
        "label": "Osmosis in Plant and Animal Cells",
        "hook": "Label the solution concentration and cell contents, then apply the rule: water moves from high WP to low WP.",
        "detail": "Turgid plant cells have water-filled vacuoles pressing the membrane against the rigid wall — this gives plants structural support."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4BI1 · 2.15",
        "wrong": "Osmosis is the movement of glucose molecules from dilute to concentrated solution across a membrane.",
        "verdict": "🚨 OSMOSIS IS WATER ONLY!",
        "why": "Glucose doing osmosis?! Never on my planet!",
        "right": "Osmosis moves WATER molecules only across a partially permeable membrane."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often say 'water is attracted to salt' rather than explaining water potential gradients — examiners want the term 'water potential' and the direction (high to low WP).",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain why a piece of celery becomes crisp when placed in water, and limp when placed in a concentrated salt solution. ",
        "right": "In water: water moves into cells by osmosis (1 mark); Because water potential of water is higher than water potential of cell contents / water moves from higher to lower WP (1 mark)"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Forgetting to express mass change as a percentage (so cylinders of different sizes can be compared), or giving % change as a positive number for mass loss.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student investigates osmosis using potato cylinders. She cuts 5 cylinders of equal mass (each 4.0 g) and places them i",
        "right": "(a) Correct working: (4.5 − 4.0) / 4.0 × 100 (1 mark); answer +12.5% with correct sign (1 mark); (b) 0.4 mol/dm³ (1 mark); because mass does not change at this concentration / no net water movement / isotonic (1 mark)"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often confuse the direction — active transport goes from LOW to HIGH concentration (against the gradient). Diffusion always goes from HIGH to LOW.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Compare diffusion and active transport. Include in your answer: direction of movement relative to the concentration grad",
        "right": "Diffusion: down concentration gradient / high to low concentration (1 mark); Diffusion: passive / no energy / no ATP required (1 mark)"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Omitting the word 'net' or saying particles move 'from low to high' (which is the reverse).",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Define diffusion and state whether it is an active or passive process. (2 marks)",
        "right": "Net movement of particles from higher to lower concentration / down the concentration gradient (1 mark); Passive / requires no energy (1 mark)"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Naming a factor without stating the direction of its effect — both are needed for the mark.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: State four factors that affect the rate of diffusion, and for each give the direction of its effect. (4 marks)",
        "right": "Steeper concentration gradient → faster (1 mark); Higher temperature → faster (1 mark)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain why HCl decolourises a 1 cm³ pink agar block much faster than a 3 cm³ block.",
        "marks": "4 Marks",
        "points": [
          "1 cm cube SA:V = <strong>6:1</strong> vs 3 cm cube SA:V = <strong>2:1</strong>.",
          "Smaller block has <strong>larger SA:V</strong> AND <strong>shorter diffusion pathway</strong> (0.5 cm vs 1.5 cm to centre)."
        ],
        "hook": "🧊 Bigger SA:V + Shorter Trek = Faster Diffusion!"
      },
      {
        "q": "Contrast osmosis and active transport across four features.",
        "marks": "4 Marks",
        "points": [
          "Substance: Osmosis = <strong>water only</strong>; Active transport = <strong>ions/sugars</strong>.",
          "Direction: Osmosis = <strong>down water potential gradient</strong>; Active = <strong>against concentration gradient</strong>.",
          "Mechanism & Energy: Osmosis = passive (no ATP); Active = <strong>carrier proteins + ATP from respiration</strong>."
        ],
        "hook": "🎢 Passive water slide vs Paid ATP escalator!"
      },
      {
        "q": "Explain how osmosis keeps non-woody plant stems upright.",
        "marks": "3 Marks",
        "points": [
          "Water enters vacuole by <strong>osmosis</strong> → vacuole swells and pushes cytoplasm/membrane outward against inelastic <strong>cellulose cell wall</strong> → <strong>turgid</strong> cells support stem."
        ],
        "hook": "🎈 Inflated vacuoles press firm against cellulose walls!"
      }
    ]
  },
  "bio-molecules": {
    "topicId": "bio-molecules",
    "specCode": "Edexcel 4BI1",
    "specRefs": "Edexcel 4BI1 · 2.7–2.9 & 2.33B",
    "epTitle": "Boba Sugar Traps, Lilac Shakes & Flaming Crisps",
    "mnemonics": [
      {
        "label": "Complete Food Test Protocol (2.9)",
        "hook": "🎨 Only Benedict's needs the hot tub!",
        "detail": "Starch: <strong>Iodine</strong> (no heat) → <strong>blue-black</strong>. · Glucose: <strong>Benedict's + 80 °C heat</strong> → <strong>brick-red precipitate</strong>."
      },
      {
        "label": "Calorimetry Error & Bomb Calorimeter (2.33B)",
        "hook": "🔥 Shield it, Stir it, Oxygenate it!",
        "detail": "Heat loss to air → add <strong>insulated jacket / draught shield & lid</strong>. · Incomplete combustion (soot) → supply <strong>oxygen</strong> and relight food if flame goes out."
      },
      {
        "label": "Monomers & Elements (2.7–2.8)",
        "hook": "🧱 Only Proteins invite Nitrogen to the party!",
        "detail": "Carbohydrates (C, H, O): simple sugars (glucose). · Proteins (C, H, O, <strong>N</strong>): amino acids."
      },
      {
        "label": "Elements in Biological Molecules",
        "hook": "List elements first, then consider ratios and proportions.",
        "detail": "Carbohydrates: C, H, O only (H:O ratio 2:1)."
      },
      {
        "label": "Small Molecules Building Large Ones",
        "hook": "Compare structure to function: what shape does the monomer arrangement create, and how does that suit its role?",
        "detail": "Condensation joins monomers and releases water; hydrolysis breaks polymers and adds water."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4BI1 · 2.9",
        "wrong": "Add Biuret solution and boil at 90 °C; protein turns brick-red.",
        "verdict": "🚨 MIXED UP BIURET & BENEDICT'S!",
        "why": "Biuret needs ZERO heat and turns PURPLE!",
        "right": "Biuret (no heat) → lilac/purple for protein; Benedict's (+ heat) → brick-red for glucose."
      },
      {
        "spec": "Edexcel 4BI1 · 2.9",
        "wrong": "To test crisps for lipid, shake with cold water first and then pour into ethanol.",
        "verdict": "🚨 BACKWARDS EMULSION ORDER!",
        "why": "Oil doesn't dissolve in water first — dissolve in ETHANOL first, THEN decant into cold water!",
        "right": "Dissolve lipid in ethanol first, then pour ethanol extract into cold water → milky-white emulsion."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Many students write 'add iodine solution' — iodine tests for starch, not protein. Others forget to state the negative result colour (blue).",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student wishes to find out whether a sample of cow's milk contains protein. Describe how she should carry out the Biur",
        "right": "Adds Biuret reagent (or NaOH then CuSO₄ solution) to the milk sample.; Observation: positive result is purple / violet colour."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often state that starch and cellulose are 'different molecules' without explaining that the difference lies in the type of glycosidic bond between identical glucose monomers.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain why starch is a suitable molecule for energy storage in plants, while cellulose is suitable for forming cell wal",
        "right": "Starch has alpha glycosidic bonds / alpha-1,4 or alpha-1,6 linkages.; Alpha bonds cause coiling / branching → compact molecule."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often say 'there is no vitamin C in stored juice' — but 20 drops still decolourised it, so vitamin C is present; it is just less concentrated.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A scientist compares the vitamin C content of fresh orange juice and stored orange juice using the DCPIP test. She uses ",
        "right": "(a) Stored juice has lower vitamin C concentration than fresh juice / more drops needed means less vitamin C per drop.; (a) Vitamin C is lost / broken down during storage (accept 'oxidised')."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Adding nitrogen to carbohydrates, or forgetting nitrogen in proteins. Nitrogen is the element that distinguishes proteins.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: State the elements present in (a) a carbohydrate, and (b) a protein. [2]",
        "right": "(a) Carbon, hydrogen and oxygen (only) (1); (b) Carbon, hydrogen, oxygen and nitrogen / also sulfur accepted (1)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Give reagents, heating rules, and positive results for starch, glucose, protein, and lipid.",
        "marks": "4 Marks",
        "points": [
          "Starch: <strong>Iodine</strong> (no heat) → <strong>blue-black</strong>.",
          "Glucose: <strong>Benedict's + 80 °C heat</strong> → <strong>brick-red precipitate</strong>.",
          "Protein: <strong>Biuret</strong> (no heat) → <strong>purple/lilac</strong>.",
          "Lipid: <strong>Ethanol + water</strong> (no heat) → <strong>cloudy white emulsion</strong>."
        ],
        "hook": "🎨 Only Benedict's needs the hot tub!"
      },
      {
        "q": "Explain three sources of inaccuracy in test-tube food calorimetry and how to reduce each.",
        "marks": "4 Marks",
        "points": [
          "Heat loss to air → add <strong>insulated jacket / draught shield & lid</strong>.",
          "Incomplete combustion (soot) → supply <strong>oxygen</strong> and relight food if flame goes out.",
          "Uneven water temp → <strong>stir water</strong> before reading thermometer."
        ],
        "hook": "🔥 Shield it, Stir it, Oxygenate it!"
      },
      {
        "q": "State the elements and subunits of carbohydrates, proteins, and lipids.",
        "marks": "3 Marks",
        "points": [
          "Carbohydrates (C, H, O): simple sugars (glucose).",
          "Proteins (C, H, O, <strong>N</strong>): amino acids.",
          "Lipids (C, H, O): 1 glycerol + 3 fatty acids."
        ],
        "hook": "🧱 Only Proteins invite Nitrogen to the party!"
      }
    ]
  },
  "bio-enzymes": {
    "topicId": "bio-enzymes",
    "specCode": "Edexcel 4BI1",
    "specRefs": "Edexcel 4BI1 · 2.10–2.14B",
    "epTitle": "37 °C Goldilocks, Melted Locks & The 'Dead Enzyme' Crime",
    "mnemonics": [
      {
        "label": "Rate vs Temperature Curve (2.11)",
        "hook": "🔑 Collisions up → 37 °C Peak → Active site warps!",
        "detail": "10 → 37 °C: more <strong>kinetic energy</strong> → faster molecular motion → <strong>more frequent successful collisions</strong> forming enzyme-substrate complexes. · Above 45 °C: thermal vibrations break bonds → <strong>active site changes shape irreversibly (denatures)</strong> → substrate no longer fits."
      },
      {
        "label": "Testing pH on Amylase (2.13–2.14B)",
        "hook": "🧪 Buffers vary pH; Water bath locks 37 °C!",
        "detail": "Use <strong>buffer solutions</strong> of pH 4, 6, 7, 8, 10 (independent variable). · Control temperature at 37 °C with a <strong>water bath</strong>, and control volumes/concentrations of starch & amylase."
      },
      {
        "label": "Biological Washing Powders (2.10)",
        "hook": "👕 Dissolve stains at 35 °C — boiling ruins the active sites!",
        "detail": "Proteases digest insoluble blood/egg protein stains into <strong>soluble amino acids</strong>; lipases digest grease into fatty acids & glycerol. · 30–40 °C is near optimum (saves electricity!); 90 °C would <strong>denature</strong> the enzymes."
      },
      {
        "label": "The Lock-and-Key Model",
        "hook": "Visualise the 3D shape",
        "detail": "The active site has a precise 3D shape complementary to the substrate."
      },
      {
        "label": "Effect of Temperature on Enzyme Activity",
        "hook": "Sketch the rate–temperature curve first",
        "detail": "Rate increases with temperature up to the optimum (more kinetic energy → more collisions)."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4BI1 · 2.11",
        "wrong": "Above 60 °C the enzyme is killed so it cannot digest starch.",
        "verdict": "🚨 ZERO MARKS! Never say 'killed'!",
        "why": "Proteins do not have a pulse!",
        "right": "High temperature DENATURES the enzyme by changing the 3D shape of its active site."
      },
      {
        "spec": "Edexcel 4BI1 · 2.11",
        "wrong": "Putting amylase in a freezer at -10 °C permanently denatures its active site.",
        "verdict": "🚨 COLD NEVER DENATURES!",
        "why": "Freezing just steals kinetic energy — warm it to 37 °C and it works fine!",
        "right": "Low temperatures slow collisions reversibly; only high temp or extreme pH denatures active sites."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Saying the enzyme 'chooses' its substrate or 'recognises' it — credit is only given for shape-based explanations (complementary).",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain why amylase can digest starch but cannot digest protein. Use the lock-and-key model in your answer. [3 marks]",
        "right": "Active site has a specific / precise 3D shape; Shape is complementary to starch / substrate"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Saying the enzyme is 'killed' above the optimum — penalised. Also failing to explain both sides of the curve separately.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student investigates the effect of temperature on catalase activity by measuring the volume of oxygen produced per min",
        "right": "Rate increases from 10 °C to optimum (~40 °C) / bell-shaped curve described or sketched; Reason for increase: more kinetic energy / more frequent collisions between substrate and active site"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Saying the enzyme 'does not like' the pH — answers must refer to shape of active site. Also confusing which enzyme works at pH 2 (pepsin, not amylase).",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student repeats an amylase–starch experiment using iodine solution at pH 2, pH 7, and pH 11. She finds the starch is d",
        "right": "Amylase has an optimum pH of 7 / works best at pH 7; At pH 7 active site is complementary to starch / enzyme–substrate complex forms / starch is digested"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Writing only 'speeds up reactions' without stating it is a protein, or omitting 'not used up'.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Define the term 'enzyme'. [2 marks]",
        "right": "(A) protein molecule / made of protein; biological catalyst / speeds up a reaction / increases rate of reaction"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain why enzyme activity rises from 10 °C to 37 °C and falls sharply above 45 °C.",
        "marks": "4 Marks",
        "points": [
          "10 → 37 °C: more <strong>kinetic energy</strong> → faster molecular motion → <strong>more frequent successful collisions</strong> forming enzyme-substrate complexes.",
          "Above 45 °C: thermal vibrations break bonds → <strong>active site changes shape irreversibly (denatures)</strong> → substrate no longer fits."
        ],
        "hook": "🔑 Collisions up → 37 °C Peak → Active site warps!"
      },
      {
        "q": "Describe how to investigate the effect of pH on amylase activity validly.",
        "marks": "4 Marks",
        "points": [
          "Use <strong>buffer solutions</strong> of pH 4, 6, 7, 8, 10 (independent variable).",
          "Control temperature at 37 °C with a <strong>water bath</strong>, and control volumes/concentrations of starch & amylase.",
          "Sample every 15–30 s onto iodine tile until iodine stays yellow-brown; repeat & calculate mean rate = 1/t."
        ],
        "hook": "🧪 Buffers vary pH; Water bath locks 37 °C!"
      },
      {
        "q": "Why do biological washing powders contain proteases & lipases and work best at 30–40 °C rather than 90 °C?",
        "marks": "3 Marks",
        "points": [
          "Proteases digest insoluble blood/egg protein stains into <strong>soluble amino acids</strong>; lipases digest grease into fatty acids & glycerol.",
          "30–40 °C is near optimum (saves electricity!); 90 °C would <strong>denature</strong> the enzymes."
        ],
        "hook": "👕 Dissolve stains at 35 °C — boiling ruins the active sites!"
      }
    ]
  },
  "bio-plant-nutrition": {
    "topicId": "bio-plant-nutrition",
    "specCode": "Edexcel 4BI1",
    "specRefs": "Edexcel 4BI1 · 2.18–2.23 & 2.40B",
    "epTitle": "Solar Panel Leaves, Foil Tan-Lines & Purple Indicator Drama",
    "mnemonics": [
      {
        "label": "Leaf Adaptations (2.20)",
        "hook": "🌿 Waterproof top + Clear window + Solar palisade + Airy sponge!",
        "detail": "<strong>Waxy cuticle</strong>: reduces water loss by evaporation. · <strong>Upper epidermis</strong>: transparent to let light reach <strong>palisade cells</strong> packed vertically with chloroplasts."
      },
      {
        "label": "Nitrate vs Magnesium Ions (2.22)",
        "hook": "🧪 Nitrate = Tall Protein; Magnesium = Green Chlorophyll!",
        "detail": "<strong>NO₃⁻</strong>: source of nitrogen to make <strong>amino acids & proteins</strong> for growth (deficiency = stunted growth). · <strong>Mg²⁺</strong>: component of <strong>chlorophyll</strong> (deficiency = yellow chlorosis, less light absorbed)."
      },
      {
        "label": "Pondweed Gas Volume Precision (2.19)",
        "hook": "🫧 Bubbles vary in size — measure cm³ in a syringe!",
        "detail": "Bubbles have <strong>different sizes/volumes</strong>, and fast streams are easy to miscount; measuring <strong>volume of gas (cm³) per minute</strong> is accurate and precise."
      },
      {
        "label": "The Photosynthesis Equation",
        "hook": "balance the equation",
        "detail": "Photosynthesis converts light energy into chemical energy stored in glucose."
      },
      {
        "label": "Leaf Structure and Adaptations",
        "hook": "draw a diagram",
        "detail": "Waxy cuticle: transparent and waterproof — lets light in, reduces water loss."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4BI1 · 2.40B",
        "wrong": "In bright sunlight a leaf stops respiring and only carries out photosynthesis.",
        "verdict": "🚨 RESPIRATION NEVER STOPS!",
        "why": "Living cells respire 24/7 — photosynthesis just goes faster in bright light!",
        "right": "Respiration is continuous; in bright light photosynthesis rate > respiration rate."
      },
      {
        "spec": "Edexcel 4BI1 · 2.22",
        "wrong": "Yellow leaves on the lower stem are caused by nitrate deficiency preventing chlorophyll synthesis.",
        "verdict": "🚨 MAGNESIUM MAKES CHLOROPHYLL!",
        "why": "Nitrate makes amino acids (stunted growth); MAGNESIUM makes green chlorophyll!",
        "right": "Mg2+ deficiency causes yellow chlorosis; NO3- deficiency causes stunted growth."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Many students say the cuticle 'prevents all water loss' — it reduces water loss but does not prevent it entirely. Also, some forget to explain WHY being on the underside reduces evaporation.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain why a leaf has a waxy cuticle on its upper surface but stomata mainly on its lower surface. [4]",
        "right": "waxy cuticle is waterproof / reduces water loss by evaporation; waxy cuticle is transparent / allows light to reach palisade cells"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often say 'the plant is tired' or 'the plant has used up all the light' — there is no such thing as using up light. The plateau always means a different factor is limiting.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student investigates the effect of light intensity on the rate of photosynthesis using an aquatic plant (Elodea). She ",
        "right": "(a) as light intensity increases, rate of photosynthesis increases / positive correlation; (b) another factor has become limiting (CO₂ / temperature)"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Many students confuse the two deficiencies. Remember: No₃⁻ → No proteins → No growth (stunted). Mg²⁺ → No chlorophyll → No green colour (yellow).",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Compare the deficiency symptoms and causes of nitrate ion deficiency and magnesium ion deficiency in plants. [6]",
        "right": "nitrate ions needed for amino acid / protein synthesis; nitrate deficiency: stunted growth / small plant"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Writing oxygen or glucose as a reactant, or listing chlorophyll as a reactant rather than a condition.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: State the word equation for photosynthesis and name the two conditions needed for it to occur. [3]",
        "right": "carbon dioxide + water → glucose + oxygen (correct reactants and products); light energy / light"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain how palisade mesophyll, spongy mesophyll, upper epidermis, and waxy cuticle adapt a leaf.",
        "marks": "4 Marks",
        "points": [
          "<strong>Waxy cuticle</strong>: reduces water loss by evaporation.",
          "<strong>Upper epidermis</strong>: transparent to let light reach <strong>palisade cells</strong> packed vertically with chloroplasts.",
          "<strong>Spongy mesophyll</strong>: large air spaces for rapid CO₂/O₂ diffusion to/from stomata."
        ],
        "hook": "🌿 Waterproof top + Clear window + Solar palisade + Airy sponge!"
      },
      {
        "q": "Explain the role and deficiency symptom of NO3- and Mg2+ in plants.",
        "marks": "4 Marks",
        "points": [
          "<strong>NO₃⁻</strong>: source of nitrogen to make <strong>amino acids & proteins</strong> for growth (deficiency = stunted growth).",
          "<strong>Mg²⁺</strong>: component of <strong>chlorophyll</strong> (deficiency = yellow chlorosis, less light absorbed)."
        ],
        "hook": "🧪 Nitrate = Tall Protein; Magnesium = Green Chlorophyll!"
      },
      {
        "q": "In pondweed rate experiments, why is collecting O2 in a gas syringe or inverted measuring cylinder better than counting bubbles?",
        "marks": "3 Marks",
        "points": [
          "Bubbles have <strong>different sizes/volumes</strong>, and fast streams are easy to miscount; measuring <strong>volume of gas (cm³) per minute</strong> is accurate and precise."
        ],
        "hook": "🫧 Bubbles vary in size — measure cm³ in a syringe!"
      }
    ]
  },
  "bio-human-nutrition": {
    "topicId": "bio-human-nutrition",
    "specCode": "Edexcel 4BI1",
    "specRefs": "Edexcel 4BI1 · 2.24–2.33B",
    "epTitle": "Bile Emulsifier Soap, Peristalsis Wave & Villi Carpet",
    "mnemonics": [
      {
        "label": "Origin & Dual Role of Bile (2.31)",
        "hook": "🧼 Liver makes dish-soap bile: Neutralise acid + Emulsify grease!",
        "detail": "Produced in <strong>liver</strong>, stored in <strong>gall bladder</strong>. · 1) Alkaline — <strong>neutralises stomach HCl</strong> to provide optimum alkaline pH for pancreatic enzymes."
      },
      {
        "label": "Adaptations of the Small Intestine (2.30)",
        "hook": "🖐️ Long + Microvilli + 1-Cell Thin + Capillaries & Lacteal!",
        "detail": "Very long + folded + <strong>villi & microvilli</strong> → huge surface area. · <strong>One-cell-thick</strong> wall → short diffusion path."
      },
      {
        "label": "Starch-to-Glucose Relay (2.29)",
        "hook": "✂️ Amylase → Maltose; Maltase → Glucose!",
        "detail": "<strong>Amylase</strong> (salivary glands & pancreas): starch → maltose. · <strong>Maltase</strong> (small intestine epithelium membrane): maltose → glucose."
      },
      {
        "label": "Balanced Diet and Nutrients",
        "hook": "Categorise by function (energy, structure, regulation) to remember which nutrient does what.",
        "detail": "A balanced diet supplies carbohydrates, fats, proteins, vitamins, minerals, fibre, and water in correct proportions."
      },
      {
        "label": "Energy Requirements",
        "hook": "When asked about factors, list them systematically: biological (age, sex, size) then lifestyle (activity, pregnancy, climate).",
        "detail": "Age, activity level, and pregnancy are major factors affecting daily energy requirements."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4BI1 · 2.31",
        "wrong": "Bile is an enzyme made in the gall bladder that chemically digests fat.",
        "verdict": "🚨 TRIPLE ERROR!",
        "why": "Made in LIVER, NOT an enzyme, physically EMULSIFIES!",
        "right": "Bile is made in the liver, stored in the gall bladder, and emulsifies lipids."
      },
      {
        "spec": "Edexcel 4BI1 · 2.26",
        "wrong": "Cellulose dietary fibre is digested in the colon to release slow-release glucose energy.",
        "verdict": "🚨 HUMANS CANNOT DIGEST CELLULOSE!",
        "why": "Zero cellulase enzymes in human guts — fibre stays undigested to give bulk for peristalsis!",
        "right": "Dietary fibre is indigestible in humans; provides bulk for peristalsis to prevent constipation."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Stating that glucose enters the lacteal — glucose and amino acids enter blood capillaries; only fatty acids and glycerol enter the lacteal.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe how a villus in the ileum is adapted for the absorption of glucose. [4 marks]",
        "right": "Large surface area due to villi / microvilli / brush border; Single layer of epithelial cells / thin wall for short diffusion distance"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Confusing pepsin and pepsinogen — pepsin is the active enzyme; it is secreted as inactive pepsinogen and activated by HCl. At IGCSE level, 'pepsin' is sufficient.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain why the stomach produces both pepsin and hydrochloric acid. [4 marks]",
        "right": "Pepsin is a protease / digests proteins into peptides / amino acids; HCl provides optimal (acidic) pH for pepsin activity"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Forgetting to state a control tube (without bile) — without it the experiment cannot show the effect of bile specifically.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student designs an experiment to investigate the effect of bile on the digestion of fat by lipase. Describe how the st",
        "right": "Two test tubes: one with bile, one without (water as control) / fair test; Both contain lipase and fat (e.g. milk) at same concentrations"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Listing 'glucose' or 'starch' as separate components — these are types of carbohydrate, not extra classes. Forgetting fibre and water is also common.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Name the seven components of a balanced diet. [3 marks]",
        "right": "Carbohydrate; fat / lipid; protein (all three); Vitamins; minerals / mineral ions (both)"
      }
    ],
    "rapidChecks": [
      {
        "q": "State where bile is produced and stored, and explain both of its functions in digestion.",
        "marks": "4 Marks",
        "points": [
          "Produced in <strong>liver</strong>, stored in <strong>gall bladder</strong>.",
          "1) Alkaline — <strong>neutralises stomach HCl</strong> to provide optimum alkaline pH for pancreatic enzymes.",
          "2) <strong>Emulsifies lipids</strong> into tiny droplets, increasing surface area for faster digestion by <strong>lipase</strong>."
        ],
        "hook": "🧼 Liver makes dish-soap bile: Neutralise acid + Emulsify grease!"
      },
      {
        "q": "Explain four adaptations of the ileum for rapid absorption.",
        "marks": "4 Marks",
        "points": [
          "Very long + folded + <strong>villi & microvilli</strong> → huge surface area.",
          "<strong>One-cell-thick</strong> wall → short diffusion path.",
          "<strong>Blood capillaries</strong> maintain steep gradient (glucose/amino acids) + mitochondria for active transport.",
          "<strong>Lacteal</strong> absorbs fatty acids & glycerol."
        ],
        "hook": "🖐️ Long + Microvilli + 1-Cell Thin + Capillaries & Lacteal!"
      },
      {
        "q": "Name the two enzymes and sites that convert starch completely into glucose.",
        "marks": "3 Marks",
        "points": [
          "<strong>Amylase</strong> (salivary glands & pancreas): starch → maltose.",
          "<strong>Maltase</strong> (small intestine epithelium membrane): maltose → glucose."
        ],
        "hook": "✂️ Amylase → Maltose; Maltase → Glucose!"
      }
    ]
  },
  "bio-transport-plants": {
    "topicId": "bio-transport-plants",
    "specCode": "Edexcel 4BI1",
    "specRefs": "Edexcel 4BI1 · 2.51–2.58B",
    "epTitle": "Dead Straw Xylem, Sugar-Courier Phloem & Potometer Bubbles",
    "mnemonics": [
      {
        "label": "Xylem vs Phloem Structure & Function (2.51–2.52B)",
        "hook": "🪵 Dead Lignin Straw UP vs Living Sucrose Lift UP & DOWN!",
        "detail": "Xylem = <strong>dead</strong> hollow tubes vs Phloem = <strong>living</strong> sieve tubes + companion cells. · Xylem has <strong>lignin</strong> rings & no end walls vs Phloem has perforated <strong>sieve plates</strong>."
      },
      {
        "label": "Potometer Precautions & Xerophytes (2.58B)",
        "hook": "🌵 Spines + Wax + Sunken Stomata Pits!",
        "detail": "Potometer: cut stem <strong>underwater</strong> (no airlock in xylem) + seal joints <strong>airtight</strong>. · Desert xerophytes: leaves reduced to <strong>spines</strong> (small SA), <strong>thick waxy cuticle</strong>, <strong>sunken/fewer stomata</strong> trapping humid air."
      },
      {
        "label": "Stomatal Distribution & Guard Cells (2.54 & 2.57B)",
        "hook": "🌿 Shaded Underside + Night Lock = Zero Wasted Water!",
        "detail": "Lower epidermis is <strong>cooler / shaded from direct sun</strong> → reduces rate of evaporation & water loss by transpiration. · At night no light for photosynthesis → CO₂ not needed → <strong>guard cells become flaccid and close stomata</strong> to conserve water and prevent wilting."
      },
      {
        "label": "Xylem and Phloem — Structure and Function",
        "hook": "Draw a diagram",
        "detail": "Xylem carries water and mineral ions upward only; vessels are dead, hollow and lignified."
      },
      {
        "label": "Transpiration — Loss of Water Vapour",
        "hook": "Cause-and-effect chain",
        "detail": "Transpiration = loss of water vapour from leaves mainly through stomata by evaporation then diffusion."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4BI1 · 2.57B",
        "wrong": "Wind slows transpiration down by cooling the stomata shut.",
        "verdict": "🚨 WIND SPEEDS TRANSPIRATION UP!",
        "why": "Wind blows moist boundary air away, steepening the diffusion gradient!",
        "right": "Higher wind speed removes humid air around stomata, maintaining a steep concentration gradient and INCREASING transpiration."
      },
      {
        "spec": "Edexcel 4BI1 · 2.51",
        "wrong": "Root hair cells contain many chloroplasts to make ATP for active transport of nitrates.",
        "verdict": "🚨 UNDERGROUND = ZERO CHLOROPLASTS!",
        "why": "Mitochondria make ATP underground — chloroplasts would sit in pitch darkness!",
        "right": "Root hair cells have NO chloroplasts and MANY mitochondria for aerobic respiration."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often say water moves by 'diffusion' rather than 'osmosis', or fail to mention the water potential gradient explicitly. Osmosis must be named.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe how water moves from the soil into the xylem of a root. In your answer include the process involved and the str",
        "right": "Water enters root hair cells by osmosis; Root hair cell sap has lower water potential / higher solute concentration than soil water"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "In part (a), students often forget to divide by time and give total volume rather than rate. In (b), students say 'less evaporation' without explaining the gradient — the gradient explanation is what the mark scheme rewards.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student investigates transpiration using a potometer. They record the distance moved by an air bubble in 5 minutes und",
        "right": "(a) Correct volume = 16.96 mm³ (or 17.0 mm³) [1]; Rate = 3.4 mm³ min⁻¹ [1]; (b) High humidity reduces the water vapour concentration gradient between leaf interior and outside air [1]"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often describe guard cells 'pumping water out' to close stomata. In fact, guard cells passively lose water by osmosis when they become more concentrated, or when K⁺ ions leave — stomatal closure is the result of guard cells losing turgor, not active pumping of water.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain why plants wilt on a hot, dry, windy afternoon, and describe what happens at the stomata to limit further water ",
        "right": "High temperature / dry air / wind all increase transpiration rate (any two) [1]; Transpiration rate exceeds rate of water uptake from roots [1]"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Confusing the direction or substance transported rather than describing structural features.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: State two structural differences between xylem vessels and phloem sieve tubes.",
        "right": "One mark for each correct structural difference, up to 2 marks.; Accept: xylem dead / phloem living; xylem lignified / phloem not lignified; xylem no end walls / phloem has sieve plates; xylem no cytoplasm / phloem has cytoplasm."
      }
    ],
    "rapidChecks": [
      {
        "q": "Give four differences between xylem vessels and phloem tissue.",
        "marks": "4 Marks",
        "points": [
          "Xylem = <strong>dead</strong> hollow tubes vs Phloem = <strong>living</strong> sieve tubes + companion cells.",
          "Xylem has <strong>lignin</strong> rings & no end walls vs Phloem has perforated <strong>sieve plates</strong>.",
          "Xylem carries <strong>water & mineral ions upward only</strong> vs Phloem carries <strong>sucrose & amino acids up & down</strong>."
        ],
        "hook": "🪵 Dead Lignin Straw UP vs Living Sucrose Lift UP & DOWN!"
      },
      {
        "q": "State two setup precautions for a potometer and two desert-plant adaptations reducing transpiration.",
        "marks": "4 Marks",
        "points": [
          "Potometer: cut stem <strong>underwater</strong> (no airlock in xylem) + seal joints <strong>airtight</strong>.",
          "Desert xerophytes: leaves reduced to <strong>spines</strong> (small SA), <strong>thick waxy cuticle</strong>, <strong>sunken/fewer stomata</strong> trapping humid air."
        ],
        "hook": "🌵 Spines + Wax + Sunken Stomata Pits!"
      },
      {
        "q": "Explain why having most stomata on the lower epidermis and closing them at night benefits a terrestrial plant.",
        "marks": "3 Marks",
        "points": [
          "Lower epidermis is <strong>cooler / shaded from direct sun</strong> → reduces rate of evaporation & water loss by transpiration.",
          "At night no light for photosynthesis → CO₂ not needed → <strong>guard cells become flaccid and close stomata</strong> to conserve water and prevent wilting."
        ],
        "hook": "🌿 Shaded Underside + Night Lock = Zero Wasted Water!"
      }
    ]
  },
  "bio-transport-animals": {
    "topicId": "bio-transport-animals",
    "specCode": "Edexcel 4BI1",
    "specRefs": "Edexcel 4BI1 · 2.59–2.69",
    "epTitle": "Left-Ventricle Gym Bro, Biconcave Donuts & Memory-Cell Receipts",
    "mnemonics": [
      {
        "label": "Arteries vs Veins vs Capillaries (2.66)",
        "hook": "🩸 Elastic Hose → 1-Cell Exchange Mesh → Valved Return Pipe!",
        "detail": "<strong>Arteries</strong>: thick muscular & elastic walls + narrow lumen withstand & recoil with high-pressure pulses. · <strong>Veins</strong>: thin walls, wide lumen (low resistance) + <strong>valves</strong> prevent backflow at low pressure."
      },
      {
        "label": "Four Blood Components (2.59–2.63B)",
        "hook": "🍩 Donuts + Pac-Men + Snipers + Fibrin Net!",
        "detail": "<strong>RBCs</strong>: biconcave, no nucleus, haemoglobin → O₂ transport. · <strong>Phagocytes</strong>: engulf & digest pathogens with enzymes."
      },
      {
        "label": "Exercise & Heart Rate Control (2.64)",
        "hook": "🏃 More CO₂ → Lower Blood pH → Brain Medulla → Faster Heartbeat!",
        "detail": "Contracting muscles respire faster, releasing more <strong>CO₂ into blood</strong> (lowering blood pH / weakly acidic). · Chemoreceptors in aorta/carotid arteries send impulses to the <strong>medulla</strong> in the brain → accelerator nerve stimulates pacemaker to increase heart rate & stroke volume."
      },
      {
        "label": "Structure of the Heart",
        "hook": "Draw a diagram: sketch the heart from memory, label atria, ventricles, valves, and vessels before reading — then correct it.",
        "detail": "Four chambers: right atrium, right ventricle, left atrium, left ventricle."
      },
      {
        "label": "Blood Vessels: Structure and Function",
        "hook": "Mnemonic: 'Arteries Away, Veins Visit' — arteries carry blood away from the heart.",
        "detail": "Arteries: thick muscular/elastic walls, narrow lumen, no valves — high pressure, away from heart."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4BI1 · 2.65",
        "wrong": "All arteries carry oxygenated blood and all veins carry deoxygenated blood.",
        "verdict": "🚨 PULMONARY EXCEPTION TRAP!",
        "why": "Pulmonary artery carries DEOXYGENATED blood to lungs; pulmonary vein carries OXYGENATED blood back!",
        "right": "Arteries carry blood AWAY from the heart (pulmonary artery is deoxygenated); veins carry blood TO the heart."
      },
      {
        "spec": "Edexcel 4BI1 · 2.66",
        "wrong": "Capillaries have thick muscular walls to withstand high blood pressure from the aorta.",
        "verdict": "🚨 ARTERIES ARE THICK; CAPILLARIES ARE 1-CELL THIN!",
        "why": "Thick muscle on a capillary would block all oxygen diffusion!",
        "right": "Arteries have thick muscular/elastic walls; capillaries have permeable walls just one cell thick."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often say valves are 'controlled by muscles' — they are passive, operated solely by pressure differences on each side.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe the sequence of events in one complete cardiac cycle, including the role of valves in preventing backflow. [6]",
        "right": "Diastole: atria and ventricles relax / blood flows into atria from vena cava and pulmonary veins; AV valves open when atrial pressure exceeds ventricular pressure"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "A common error is stating that veins carry deoxygenated blood — this is mostly true but the pulmonary vein is an important exception. Focus answers on structure-function links rather than O₂ content.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Compare the structure of an artery and a vein, explaining how each structural difference relates to function. [5]",
        "right": "Arteries: thick muscular/elastic walls — withstand/smooth high pressure from heart; Veins: thin walls — blood is at low pressure after capillaries"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often say athletes' hearts 'beat stronger' without explaining stroke volume or cardiac output. The examiner wants a mechanistic explanation: stroke volume up → rate can be lower for same output.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A study measured the resting heart rate and recovery time after standard exercise in trained athletes and untrained indi",
        "right": "Training increases stroke volume (volume per beat) due to stronger/larger heart / cardiac hypertrophy; Lower resting heart rate in athletes because higher stroke volume maintains adequate cardiac output at lower rate"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students sometimes swap left and right because heart diagrams are usually drawn as if facing the patient, so the heart's left appears on the right of the page.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Name the four chambers of the heart and state whether each handles oxygenated or deoxygenated blood. [4]",
        "right": "Right atrium — deoxygenated blood (1); Right ventricle — deoxygenated blood (1)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Relate wall structure and lumen size to blood pressure and function in arteries, veins, and capillaries.",
        "marks": "4 Marks",
        "points": [
          "<strong>Arteries</strong>: thick muscular & elastic walls + narrow lumen withstand & recoil with high-pressure pulses.",
          "<strong>Veins</strong>: thin walls, wide lumen (low resistance) + <strong>valves</strong> prevent backflow at low pressure.",
          "<strong>Capillaries</strong>: <strong>one-cell-thick</strong> permeable wall slows blood for rapid diffusion with tissues."
        ],
        "hook": "🩸 Elastic Hose → 1-Cell Exchange Mesh → Valved Return Pipe!"
      },
      {
        "q": "State the key adaptation and function of RBCs, phagocytes, lymphocytes, and platelets.",
        "marks": "4 Marks",
        "points": [
          "<strong>RBCs</strong>: biconcave, no nucleus, haemoglobin → O₂ transport.",
          "<strong>Phagocytes</strong>: engulf & digest pathogens with enzymes.",
          "<strong>Lymphocytes</strong>: secrete specific antibodies + form memory cells.",
          "<strong>Platelets</strong>: convert soluble fibrinogen → insoluble fibrin mesh to clot wounds."
        ],
        "hook": "🍩 Donuts + Pac-Men + Snipers + Fibrin Net!"
      },
      {
        "q": "Explain the physiological chain that increases heart rate during vigorous exercise.",
        "marks": "3 Marks",
        "points": [
          "Contracting muscles respire faster, releasing more <strong>CO₂ into blood</strong> (lowering blood pH / weakly acidic).",
          "Chemoreceptors in aorta/carotid arteries send impulses to the <strong>medulla</strong> in the brain → accelerator nerve stimulates pacemaker to increase heart rate & stroke volume."
        ],
        "hook": "🏃 More CO₂ → Lower Blood pH → Brain Medulla → Faster Heartbeat!"
      }
    ]
  },
  "bio-disease-immunity": {
    "topicId": "bio-disease-immunity",
    "specCode": "Edexcel 4BI1",
    "specRefs": "Edexcel 4BI1 · 1.3–1.4, 2.60–2.63B & 3.39",
    "epTitle": "Mosquito Uber, Mucus Escalators & Superbug Villain Origin Stories",
    "mnemonics": [
      {
        "label": "Antibiotic Resistance Natural Selection (3.39)",
        "hook": "🧬 Mutation → Antibiotic Filter → Survivors Multiply → Allele Passed!",
        "detail": "<strong>Random mutation</strong> produces an allele giving resistance to the antibiotic. · Frequent antibiotic use creates strong <strong>selection pressure</strong>, killing non-resistant bacteria."
      },
      {
        "label": "Trachea Defences & Vaccination (2.60–2.63B)",
        "hook": "🧹 Sticky Mucus + Beating Cilia Escalator!",
        "detail": "Goblet cells secrete <strong>mucus</strong> trapping pathogens/dust; <strong>cilia</strong> beat to sweep mucus up to throat to be swallowed into stomach HCl. · Vaccines introduce harmless pathogen <strong>antigens</strong> → lymphocytes produce antibodies + <strong>memory cells</strong> for rapid secondary response."
      },
      {
        "label": "HIV/AIDS & Opportunistic Infections (1.3 & 2.62)",
        "hook": "🦠 HIV wipes out the antibody-making Lymphocyte army!",
        "detail": "HIV virus infects and <strong>destroys lymphocytes</strong>. · Body can no longer produce sufficient <strong>specific antibodies</strong> when secondary pathogens invade, so normally mild infections become fatal (AIDS)."
      },
      {
        "label": "Pathogens and Transmissible Disease",
        "hook": "Classify the route before naming the disease",
        "detail": "A pathogen is an organism (bacterium, virus, fungus, parasite) that causes disease."
      },
      {
        "label": "The Immune Response: Phagocytosis and Lymphocytes",
        "hook": "Lock-and-key analogy",
        "detail": "Phagocytes engulf pathogens into a phagosome; lysosomes digest them."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4BI1 · 3.39",
        "wrong": "Bacteria mutate because they want to survive the penicillin in the patient's blood.",
        "verdict": "🚨 TELEOLOGICAL MUTATION TRAP!",
        "why": "Bacteria don't sit around wishing for superpowers — mutations are RANDOM!",
        "right": "Mutations occur RANDOMLY; the antibiotic then selects for bacteria that already possess the resistance mutation."
      },
      {
        "spec": "Edexcel 4BI1 · 2.63B",
        "wrong": "Injecting dead cholera bacteria gives passive immunity because the bacteria are inactive.",
        "verdict": "🚨 VACCINES GIVE ACTIVE IMMUNITY!",
        "why": "Your own lymphocytes still do the work and build memory cells = ACTIVE!",
        "right": "Dead/attenuated antigen vaccines stimulate the host's own lymphocytes & memory cells = active artificial immunity."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often credit 'white blood cells in the lungs' — these are part of the specific immune response, not the non-specific physical barrier described here.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe how the body's non-specific defences prevent a pathogen inhaled in a droplet from reaching the lungs. [4]",
        "right": "Mucus produced by goblet cells in respiratory epithelium / mucus traps pathogen (1); Cilia beat (upward / toward throat) moving mucus and trapped pathogen (1)"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "A common error is to say the vaccine 'teaches the body about the virus' without naming memory cells as the mechanism. Always state that memory cells are produced and that they are responsible for the faster secondary response.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain how a vaccine against influenza virus protects a person when they later encounter the real influenza virus. [5]",
        "right": "Vaccine contains weakened/killed/inactivated influenza antigen (1); Antigen stimulates B-lymphocytes whose receptors are complementary / immune response produces antibodies (1)"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often attribute the secondary response to 'more antibodies already in the blood' — the critical point is that it is memory CELLS (not pre-existing antibodies) that provide the rapid second response, because the antibodies from the primary response have already been broken down.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: The graph below shows antibody levels in a person's blood after a first and second exposure to the same antigen. Analyse",
        "right": "Primary: lag before antibody rise / slow response / low peak antibody level (1); Primary response slow because naive B-cells must be activated / clonal expansion takes time (1)"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Saying a pathogen is 'a disease' rather than the organism that causes the disease.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Define the term 'pathogen'.",
        "right": "A disease-causing organism / microorganism that causes disease (1)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain step-by-step how antibiotic-resistant bacteria become common in hospitals.",
        "marks": "4 Marks",
        "points": [
          "<strong>Random mutation</strong> produces an allele giving resistance to the antibiotic.",
          "Frequent antibiotic use creates strong <strong>selection pressure</strong>, killing non-resistant bacteria.",
          "Resistant bacteria <strong>survive and reproduce</strong> without competition, <strong>passing the resistance allele</strong> to offspring."
        ],
        "hook": "🧬 Mutation → Antibiotic Filter → Survivors Multiply → Allele Passed!"
      },
      {
        "q": "Explain how goblet cells and cilia protect the lungs, and how vaccines prevent viral diseases.",
        "marks": "4 Marks",
        "points": [
          "Goblet cells secrete <strong>mucus</strong> trapping pathogens/dust; <strong>cilia</strong> beat to sweep mucus up to throat to be swallowed into stomach HCl.",
          "Vaccines introduce harmless pathogen <strong>antigens</strong> → lymphocytes produce antibodies + <strong>memory cells</strong> for rapid secondary response."
        ],
        "hook": "🧹 Sticky Mucus + Beating Cilia Escalator!"
      },
      {
        "q": "Explain how HIV leads to death from secondary infections such as tuberculosis or pneumonia.",
        "marks": "3 Marks",
        "points": [
          "HIV virus infects and <strong>destroys lymphocytes</strong>.",
          "Body can no longer produce sufficient <strong>specific antibodies</strong> when secondary pathogens invade, so normally mild infections become fatal (AIDS)."
        ],
        "hook": "🦠 HIV wipes out the antibody-making Lymphocyte army!"
      }
    ]
  },
  "bio-gas-respiration": {
    "topicId": "bio-gas-respiration",
    "specCode": "Edexcel 4BI1",
    "specRefs": "Edexcel 4BI1 · 2.34–2.50",
    "epTitle": "Bell-Jar Lungs, Lactic-Acid Leg Burn & Fizzy Yeast Balloons",
    "mnemonics": [
      {
        "label": "Exhalation vs Inhalation (2.46)",
        "hook": "🫁 Expand Thorax = Drop Pressure; Squeeze Thorax = Push Air Out!",
        "detail": "<strong>Inhalation</strong>: external intercostals & diaphragm contract → ribs up/out, diaphragm flattens → volume increases → pressure drops below atmospheric → air in. · <strong>Exhalation</strong>: external intercostals & diaphragm relax (internal intercostals contract in forced exhalation) → ribs down/in, diaphragm domes up → volume decreases → pressure rises above atmospheric → air out."
      },
      {
        "label": "Thermos Flask Germinating Peas (2.39 & 2.50)",
        "hook": "🌡️ Disinfectant kills sneaky heat-making bacteria on boiled control seeds!",
        "detail": "Flask A: live peas carry out <strong>aerobic respiration</strong>, releasing exothermic <strong>heat energy</strong>; vacuum flask insulates against heat loss. · Flask B: boiling denatured pea enzymes (dead control); <strong>disinfectant kills bacteria/fungi</strong> on dead peas whose saprotrophic respiration would otherwise release heat!"
      },
      {
        "label": "Inhaled vs Exhaled Air Composition (2.47)",
        "hook": "😮‍💨 16% O₂ left + 4% CO₂ + Warm Steam!",
        "detail": "<strong>Lower O₂</strong> (21% → ~16%): absorbed into blood for aerobic respiration. · <strong>Higher CO₂</strong> (0.04% → ~4%): diffusing out of blood from cellular respiration."
      },
      {
        "label": "The Human Breathing System",
        "hook": "Draw and label the pathway — a simple flow diagram fixes the sequence.",
        "detail": "Air pathway: nose/mouth → trachea → bronchi → bronchioles → alveoli."
      },
      {
        "label": "Ventilation — Breathing In and Out",
        "hook": "Sequence the steps: muscle action → volume change → pressure change → air movement.",
        "detail": "Inspiration: diaphragm contracts (flattens) + external intercostals contract → ribs up/out → volume increases → pressure drops → air in."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4BI1 · 2.49",
        "wrong": "Carbon monoxide in cigarette smoke causes lung cancer, while tar binds to haemoglobin.",
        "verdict": "🚨 SWAPPED CO & TAR!",
        "why": "Other way round! CO hijacks haemoglobin; TAR contains carcinogens!",
        "right": "CO binds irreversibly to haemoglobin reducing O2 transport; tar contains carcinogens causing lung cancer and paralyses cilia."
      },
      {
        "spec": "Edexcel 4BI1 · 2.34",
        "wrong": "Aerobic respiration creates energy from glucose and oxygen inside mitochondria.",
        "verdict": "🚨 NEVER WRITE 'CREATES ENERGY'!",
        "why": "Thermodynamics violation! Energy cannot be created — write RELEASES energy!",
        "right": "Respiration RELEASES energy from glucose (transferring chemical energy to ATP + heat)."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often state 'the lungs expand on their own' — the lungs have no muscle and are moved passively by the thoracic cavity.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe the sequence of events that occurs during one inspiration (breathing in). Include the role of the diaphragm and",
        "right": "Diaphragm contracts / flattens / moves downward; External intercostal muscles contract / ribs move up and out"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often say anaerobic respiration produces 'CO₂ and water' — this is wrong for human muscle cells. CO₂ and ethanol is the yeast product, not the human product.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Compare aerobic respiration and anaerobic respiration in humans. For each, state: (a) whether oxygen is required; (b) th",
        "right": "Aerobic: requires oxygen; Aerobic: products are carbon dioxide and water"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often say 'more O₂ is needed so breathing increases' — while true, the primary trigger is rising CO₂/falling pH, not falling O₂. Chemoreceptors are primarily CO₂-sensitive.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student measures the breathing rate and tidal volume of a person at rest, after 5 minutes of moderate exercise, and af",
        "right": "At rest: 14 × 500 = 7000 cm³ min⁻¹ (correctly calculated); Intense exercise: 38 × 1600 = 60 800 cm³ min⁻¹ (correctly calculated)"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Swapping the order of bronchi and bronchioles — bronchi are the larger tubes that come first; bronchioles are the smaller branches.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: List, in order, the structures that a molecule of oxygen passes through from the mouth to the site of gas exchange. (3 m",
        "right": "Trachea (after mouth/nose); Bronchus / bronchi"
      }
    ],
    "rapidChecks": [
      {
        "q": "Contrast muscle actions, volume, and pressure changes in inhalation vs forced exhalation.",
        "marks": "4 Marks",
        "points": [
          "<strong>Inhalation</strong>: external intercostals & diaphragm contract → ribs up/out, diaphragm flattens → volume increases → pressure drops below atmospheric → air in.",
          "<strong>Exhalation</strong>: external intercostals & diaphragm relax (internal intercostals contract in forced exhalation) → ribs down/in, diaphragm domes up → volume decreases → pressure rises above atmospheric → air out."
        ],
        "hook": "🫁 Expand Thorax = Drop Pressure; Squeeze Thorax = Push Air Out!"
      },
      {
        "q": "Live peas in Flask A reach 34 °C while boiled peas washed in disinfectant in Flask B stay at 20 °C. Explain both flasks.",
        "marks": "4 Marks",
        "points": [
          "Flask A: live peas carry out <strong>aerobic respiration</strong>, releasing exothermic <strong>heat energy</strong>; vacuum flask insulates against heat loss.",
          "Flask B: boiling denatured pea enzymes (dead control); <strong>disinfectant kills bacteria/fungi</strong> on dead peas whose saprotrophic respiration would otherwise release heat!"
        ],
        "hook": "🌡️ Disinfectant kills sneaky heat-making bacteria on boiled control seeds!"
      },
      {
        "q": "State and explain three differences between inhaled atmospheric air and exhaled air.",
        "marks": "3 Marks",
        "points": [
          "<strong>Lower O₂</strong> (21% → ~16%): absorbed into blood for aerobic respiration.",
          "<strong>Higher CO₂</strong> (0.04% → ~4%): diffusing out of blood from cellular respiration.",
          "<strong>Higher water vapour & warmer</strong>: evaporation from moist warm alveolar surfaces (N₂ stays ~78%)."
        ],
        "hook": "😮‍💨 16% O₂ left + 4% CO₂ + Warm Steam!"
      }
    ]
  },
  "bio-coordination": {
    "topicId": "bio-coordination",
    "specCode": "Edexcel 4BI1",
    "specRefs": "Edexcel 4BI1 · 2.70–2.95B (Triple Kidney & ADH)",
    "epTitle": "92 °C Oat Lattes, Boba Spikes & Mock-Week Chaos",
    "mnemonics": [
      {
        "label": "Nerves vs. Hormones (Spec 2.82 & 2.86)",
        "hook": "📱 Teen-TV Hook: AirDrop emergency DM (nerve) vs. 24-hour Close Friends story (hormone)!",
        "detail": "Nervous system sends <strong>electrical impulses</strong> along neurones very <strong>rapidly</strong> to a specific muscle effector for an immediate, short-lived survival response. · Endocrine glands secrete <strong>chemical hormones</strong> into <strong>blood plasma</strong>."
      },
      {
        "label": "Synapses & Drug Action (Spec 2.89–2.90)",
        "hook": "🧪 Bridge Rule: Electricity stops at the cliff if neurotransmitter ferries stay docked!",
        "detail": "Skin pain receptors still generate electrical impulses along the <strong>sensory neurone</strong> to the presynaptic knob. · Because vesicles cannot fuse, <strong>no chemical neurotransmitters are released</strong> into the synaptic cleft."
      },
      {
        "label": "Antagonistic Iris Reflex (Spec 2.91)",
        "hook": "💍 Ring-Light Rule: Circular squeezes closed; R for Radial pulls open like bicycle spokes!",
        "detail": "Retina photoreceptors detect bright light → impulse travels via optic nerve to CNS → motor neurone to iris. · <strong>Circular iris muscles contract</strong> while <strong>radial iris muscles relax</strong> (antagonistic pair)."
      },
      {
        "label": "Eye Accommodation (C.C.S.L.) (Spec 2.92)",
        "hook": "🎯 Flip C-C-S-L: Close = Contract, Slacken, Thick Lens → Far = Relax, Taut, Thin Lens!",
        "detail": "Viewing 60 m distant object: light rays arrive nearly parallel and require <strong>less refraction</strong>. · <strong>Ciliary muscles relax</strong> (forming a wider ring)."
      },
      {
        "label": "Thermoregulation & Vasodilation (Spec 2.93)",
        "hook": "🚨 Sterling Warning: Capillaries have no muscle and NEVER move closer to skin!",
        "detail": "Thermoregulatory centre in the <strong>hypothalamus</strong> detects the rise in blood temperature. · <strong>Arterioles</strong> supplying skin capillaries widen (<strong>vasodilation</strong>), so <strong>more blood flows</strong> through fixed surface capillaries and more heat is lost by <strong>radiation</strong>."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4BI1 · Edexcel 2.93",
        "wrong": "“When a runner overheats, skin capillaries move closer to the surface of the skin so more heat is lost by radiation.”",
        "verdict": "Examiner Mark-Scheme Trap",
        "why": "ZERO MARKS! Capillaries do not slither through your dermis like earthworms! My red pen just broke its nib.",
        "right": "Arterioles supplying skin capillaries dilate (vasodilation), increasing blood flow through capillaries near the skin surface so more heat is transferred by radiation."
      },
      {
        "spec": "Edexcel 4BI1 · Edexcel 2.92",
        "wrong": "“To focus on a nearby book, the ciliary muscles relax and the suspensory ligaments contract to pull the lens fat.”",
        "verdict": "Examiner Mark-Scheme Trap",
        "why": "DOUBLE ZERO! Everything is backwards AND suspensory ligaments are non-muscular cables — they CANNOT contract!",
        "right": "Arterioles supplying skin capillaries dilate (vasodilation), increasing blood flow through capillaries near the skin surface so more heat is transferred by radiation."
      },
      {
        "spec": "Edexcel 4BI1 · Triple 2.78B",
        "wrong": "“On a hot day, the kidneys secrete more ADH, which makes the proximal tubule impermeable so urine becomes concentrated.”",
        "verdict": "Examiner Mark-Scheme Trap",
        "why": "WRONG GLAND, WRONG TUBULE, WRONG PERMEABILITY! Three strikes in one sentence!",
        "right": "Arterioles supplying skin capillaries dilate (vasodilation), increasing blood flow through capillaries near the skin surface so more heat is transferred by radiation."
      },
      {
        "spec": "Edexcel 4BI1 · Edexcel 2.85",
        "wrong": "“Sunlight destroys all the auxin on the sunny side of the shoot, causing the shaded side to divide faster.”",
        "verdict": "Examiner Mark-Scheme Trap",
        "why": "Classic urban myth! Light doesn't 'destroy' auxin, and tropism bends stems by cell ELONGATION, not mitosis!",
        "right": "Arterioles supplying skin capillaries dilate (vasodilation), increasing blood flow through capillaries near the skin surface so more heat is transferred by radiation."
      },
      {
        "spec": "Edexcel 4BI1 · Edexcel 2.71",
        "wrong": "“Egestion of undigested dietary fibre in faeces is an example of excretion by the digestive system.”",
        "verdict": "Examiner Mark-Scheme Trap",
        "why": "TRAP TRIGGERED! Undigested cellulose never entered a body cell or took part in metabolism — that's egestion, NEVER excretion!",
        "right": "Arterioles supplying skin capillaries dilate (vasodilation), increasing blood flow through capillaries near the skin surface so more heat is transferred by radiation."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often say the electrical impulse 'jumps' across the synapse — it cannot; only the chemical neurotransmitter crosses the gap.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe how a synapse transmits an impulse from one neurone to the next. [4 marks]",
        "right": "Impulse causes neurotransmitter to be released from pre-synaptic knob / vesicles; Neurotransmitter diffuses across the synaptic cleft / gap"
      }
    ],
    "rapidChecks": [
      {
        "q": "1. Why does pulling your hand off a hot pan use the nervous system, whereas puberty or blood glucose control uses hormones?",
        "marks": "4 Marks",
        "points": [
          "Nervous system sends <strong>electrical impulses</strong> along neurones very <strong>rapidly</strong> to a specific muscle effector for an immediate, short-lived survival response.",
          "Endocrine glands secrete <strong>chemical hormones</strong> into <strong>blood plasma</strong>.",
          "Hormonal transport is <strong>slower</strong>, <strong>longer-lasting</strong>, and can act on <strong>multiple target organs</strong> simultaneously (ideal for sustained metabolic or growth control)."
        ],
        "hook": "📱 Teen-TV Hook: AirDrop emergency DM (nerve) vs. 24-hour Close Friends story (hormone)!"
      },
      {
        "q": "2. Painkiller X prevents vesicles fusing with the presynaptic membrane in spinal synapses. Explain why a patient feels no pain even when skin pain receptors still fire.",
        "marks": "4 Marks",
        "points": [
          "Skin pain receptors still generate electrical impulses along the <strong>sensory neurone</strong> to the presynaptic knob.",
          "Because vesicles cannot fuse, <strong>no chemical neurotransmitters are released</strong> into the synaptic cleft.",
          "No neurotransmitters <strong>diffuse</strong> across the cleft or bind to <strong>receptor molecules</strong> on the relay/postsynaptic neurone.",
          "Therefore, <strong>no new electrical impulse</strong> is transmitted up the spinal cord to the conscious brain."
        ],
        "hook": "🧪 Bridge Rule: Electricity stops at the cliff if neurotransmitter ferries stay docked!"
      },
      {
        "q": "3. Maya walks out of a dark cinema into bright noon Singapore sunlight. Explain how the iris muscles prevent damage to her retina.",
        "marks": "3 Marks",
        "points": [
          "Retina photoreceptors detect bright light → impulse travels via optic nerve to CNS → motor neurone to iris.",
          "<strong>Circular iris muscles contract</strong> while <strong>radial iris muscles relax</strong> (antagonistic pair).",
          "The <strong>pupil constricts</strong> (becomes narrower), letting less light enter the eye so high-intensity light does not damage/bleach retina rods and cones."
        ],
        "hook": "💍 Ring-Light Rule: Circular squeezes closed; R for Radial pulls open like bicycle spokes!"
      },
      {
        "q": "4. Explain how the eye adjusts when looking up from a revision flashcard at 20 cm to a scoreboard 60 m away.",
        "marks": "4 Marks",
        "points": [
          "Viewing 60 m distant object: light rays arrive nearly parallel and require <strong>less refraction</strong>.",
          "<strong>Ciliary muscles relax</strong> (forming a wider ring).",
          "<strong>Suspensory ligaments are pulled taut</strong> (tight).",
          "The elastic <strong>lens is pulled thinner / flatter (less convex)</strong>, refracting light less so it focuses sharply on the retina."
        ],
        "hook": "🎯 Flip C-C-S-L: Close = Contract, Slacken, Thick Lens → Far = Relax, Taut, Thin Lens!"
      }
    ]
  },
  "bio-reproduction": {
    "topicId": "bio-reproduction",
    "specCode": "Edexcel 4BI1",
    "specRefs": "Edexcel 4BI1 · 3.1–3.13B",
    "epTitle": "Bumblebee VIP vs Wind Pollen, WOW Seeds & The 4-Hormone Squad",
    "mnemonics": [
      {
        "label": "From Pollination to Seed & Fruit (3.3–3.4)",
        "hook": "🌸 Pollen Tube Tunnel → Nucleus Fusion → Ovule=Seed, Ovary=Fruit!",
        "detail": "Pollen grain grows a <strong>pollen tube</strong> down the style (secreting digestive enzymes) and enters the ovule via the micropyle. · Male gamete nucleus travels down tube and <strong>fuses with female egg nucleus (fertilisation)</strong> to form a diploid zygote."
      },
      {
        "label": "Menstrual Cycle Feedback (3.13B)",
        "hook": "🔁 Acronyms (FSH/LH) from Pituitary; Full Names from Ovary!",
        "detail": "Pituitary <strong>FSH</strong> matures follicle & stimulates ovarian <strong>oestrogen</strong>. · High oestrogen thickens uterus lining, <strong>inhibits FSH</strong>, and stimulates pituitary <strong>LH surge</strong> (ovulation)."
      },
      {
        "label": "Asexual Cuttings vs Sexual Seeds (3.1–3.2)",
        "hook": "🍓 Clones lock perfection; Sex buys insurance against new plagues!",
        "detail": "<strong>Asexual advantages</strong>: fast, requires only 1 parent plant, all offspring are <strong>genetically identical clones</strong> preserving high-yield/sweet fruit phenotype. · <strong>Sexual advantage / Asexual risk</strong>: clones have <strong>zero genetic variation</strong> so all are susceptible to the same new pathogen or climate shift; sexual meiosis creates variation for disease resistance."
      },
      {
        "label": "Asexual vs Sexual Reproduction",
        "hook": "Compare and contrast",
        "detail": "Asexual reproduction: one parent, no gametes, clones produced."
      },
      {
        "label": "Sexual Reproduction in Flowering Plants",
        "hook": "Identify structure-function links",
        "detail": "Stamen = anther + filament (male); carpel = stigma + style + ovary + ovule (female)."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4BI1 · 3.5",
        "wrong": "Seeds fail to germinate 3 cm underground because there is no sunlight for photosynthesis.",
        "verdict": "🚨 SEEDS DON'T NEED LIGHT!",
        "why": "If seeds needed sunlight underground, every farm on Earth would be barren!",
        "right": "Germination requires only Water, Oxygen, and Warmth (WOW); cotyledon food stores fuel growth until shoots reach light."
      },
      {
        "spec": "Edexcel 4BI1 · 3.8",
        "wrong": "Human fertilisation occurs when a sperm fuses with an egg inside the uterus.",
        "verdict": "🚨 FERTILISATION HAPPENS IN THE OVIDUCT!",
        "why": "By the time it reaches the uterus, it's already a dividing ball of cells ready to implant!",
        "right": "Fertilisation occurs in the oviduct (Fallopian tube); implantation occurs in the uterus lining."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often say 'pollen fertilises the egg' without mentioning the pollen tube or the male nucleus — fertilisation involves gamete nuclei fusing, not whole pollen grains.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe the process of fertilisation in a flowering plant, starting from when a pollen grain lands on the stigma. [4 ma",
        "right": "Pollen grain germinates on the stigma; Pollen tube grows down through the style (to the ovule/ovary)"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "A very common error is stating that 'the mother's blood flows into the fetus' — the two circulations are always separate; only dissolved substances cross the placental membranes.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe the role of the placenta in pregnancy, including what substances are exchanged and how the structure of the pla",
        "right": "Maternal and fetal blood do not mix; O2 and glucose (and/or amino acids/antibodies) pass from mother to fetus"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often list features without explaining why each feature is an adaptation — the examiner expects a functional reason for each feature.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Compare the features of a wind-pollinated flower with an insect-pollinated flower, explaining in each case how the featu",
        "right": "Wind: small/no petals — no need to attract insects (1); Wind: pollen light, smooth, large quantity — carried by air currents / compensates for random dispersal (1)"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Listing the same idea twice in different words (e.g. 'clones' and 'identical') counts as only one difference.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: State two differences between asexual and sexual reproduction. [2 marks]",
        "right": "Asexual: one parent / sexual: two parents (gametes from two); Asexual: identical offspring / clones / no variation — sexual: genetic variation"
      }
    ],
    "rapidChecks": [
      {
        "q": "Describe events in a flower after a compatible pollen grain lands on the stigma.",
        "marks": "4 Marks",
        "points": [
          "Pollen grain grows a <strong>pollen tube</strong> down the style (secreting digestive enzymes) and enters the ovule via the micropyle.",
          "Male gamete nucleus travels down tube and <strong>fuses with female egg nucleus (fertilisation)</strong> to form a diploid zygote.",
          "Zygote divides by mitosis into embryo; <strong>ovule becomes seed</strong>; <strong>ovary wall becomes fruit</strong>."
        ],
        "hook": "🌸 Pollen Tube Tunnel → Nucleus Fusion → Ovule=Seed, Ovary=Fruit!"
      },
      {
        "q": "Explain the interactions between FSH, oestrogen, LH, and progesterone across the menstrual cycle.",
        "marks": "4 Marks",
        "points": [
          "Pituitary <strong>FSH</strong> matures follicle & stimulates ovarian <strong>oestrogen</strong>.",
          "High oestrogen thickens uterus lining, <strong>inhibits FSH</strong>, and stimulates pituitary <strong>LH surge</strong> (ovulation).",
          "Corpus luteum secretes <strong>progesterone</strong> to maintain lining & inhibit FSH/LH."
        ],
        "hook": "🔁 Acronyms (FSH/LH) from Pituitary; Full Names from Ovary!"
      },
      {
        "q": "Evaluate propagating commercial fruit crops by asexual cuttings versus sexual seeds.",
        "marks": "4 Marks",
        "points": [
          "<strong>Asexual advantages</strong>: fast, requires only 1 parent plant, all offspring are <strong>genetically identical clones</strong> preserving high-yield/sweet fruit phenotype.",
          "<strong>Sexual advantage / Asexual risk</strong>: clones have <strong>zero genetic variation</strong> so all are susceptible to the same new pathogen or climate shift; sexual meiosis creates variation for disease resistance."
        ],
        "hook": "🍓 Clones lock perfection; Sex buys insurance against new plagues!"
      }
    ]
  },
  "bio-inheritance": {
    "topicId": "bio-inheritance",
    "specCode": "Edexcel 4BI1",
    "specRefs": "Edexcel 4BI1 · 3.14–3.39",
    "epTitle": "mRNA Photocopies, Ribosome Boba-Readers & Punnett Drama",
    "mnemonics": [
      {
        "label": "Transcription, Translation & Mutation (3.17B–3.18B)",
        "hook": "🧬 Base swap → Codon swap → Amino-acid swap → Warped active site (unless silent)!",
        "detail": "(a) Altered DNA base changes <strong>mRNA codon</strong> (transcription) → <strong>tRNA</strong> brings a different <strong>amino acid</strong> at ribosome (translation) → protein folds differently, changing <strong>3D active site shape</strong> so substrate no longer binds. · (b) Zero effect if mutation is in <strong>non-coding DNA</strong>, OR the new triplet still codes for the <strong>same amino acid</strong> (degenerate code), OR doesn't alter the active site."
      },
      {
        "label": "ABO Blood Group Cross (3.21B & 3.24)",
        "hook": "🩸 Hidden recessive Iᴼ + Iᴼ = 25% Group O surprise!",
        "detail": "Parental genotypes: <strong>IᴬIᴼ × IᴮIᴼ</strong>; Gametes: (Iᴬ, Iᴼ) and (Iᴮ, Iᴼ). · Offspring genotypes: IᴬIᴮ (AB), IᴬIᴼ (A), IᴮIᴼ (B), <strong>IᴼIᴼ (Group O = 25% / 0.25 probability)</strong>."
      },
      {
        "label": "Genetic vs Environmental Variation (3.31–3.33)",
        "hook": "📊 Blood Group = Genes Only; Height = Genes + Diet!",
        "detail": "<strong>Discontinuous</strong> (e.g. ABO blood group): distinct categories, no intermediates, controlled by <strong>genes/alleles alone</strong>. · <strong>Continuous</strong> (e.g. human height, leaf length): continuous range between extremes (normal distribution), controlled by <strong>multiple genes (polygenes) AND environment</strong> (diet, light, minerals)."
      },
      {
        "label": "Mitosis and Meiosis",
        "hook": "Compare and contrast",
        "detail": "Mitosis: one division → 2 genetically identical diploid (2n) cells; used for growth and repair."
      },
      {
        "label": "Monohybrid Crosses and Punnett Squares",
        "hook": "Punnett square",
        "detail": "Dominant alleles (capital letter) mask recessive alleles (lower-case) when present."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4BI1 · 3.26",
        "wrong": "Because a couple already has three sons, there is an 87.5% chance their fourth baby will be a daughter.",
        "verdict": "🚨 GAMBLER'S FALLACY TRAP!",
        "why": "Sperm cells do not check family photo albums before fertilisation!",
        "right": "Each pregnancy is an independent event: half of sperm carry X and half carry Y, so probability is ALWAYS 50% (0.5)."
      },
      {
        "spec": "Edexcel 4BI1 · 3.14",
        "wrong": "A gene is an entire chromosome made of amino acids coiled inside the nucleus.",
        "verdict": "🚨 GENE = DNA SECTION, NOT AMINO ACIDS!",
        "why": "DNA is made of NUCLEOTIDES — it CODES for amino acids!",
        "right": "A gene is a section of a DNA molecule on a chromosome that codes for a specific protein."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Confusing the number of divisions (meiosis has TWO divisions, not one) or stating that mitosis produces haploid cells.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain the difference between mitosis and meiosis, including the type of cells produced and their role in the organism.",
        "right": "Mitosis produces two / genetically identical daughter cells; Daughter cells of mitosis are diploid / have same chromosome number as parent"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "In part (a), students often write Bb instead of BB, forgetting that ALL offspring being black requires the black parent to provide only B alleles — a heterozygous parent would sometimes pass b, but the white parent (bb) also passes b, so bb offspring (white) would appear if the black parent were Bb.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: In guinea pigs, black fur (B) is dominant over white fur (b). A black guinea pig is crossed with a white guinea pig and ",
        "right": "(a) BB (homozygous dominant); (b) Correct gametes listed on Punnett square (B and b for each parent)"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Stating that bacteria 'develop' or 'evolve' resistance in response to antibiotics — implying a deliberate or directed change. Natural selection acts on pre-existing random mutations; the antibiotic does not cause the mutation.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe how natural selection leads to an increase in the frequency of antibiotic-resistant bacteria in a population. [",
        "right": "Mutation / random change in DNA produces resistance allele; Variation exists in the population (some bacteria resistant, most not)"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Writing that 'amino acids pair with codons' — tRNA anticodons pair with mRNA codons; tRNA carries the amino acid.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe the stages of protein synthesis (transcription and translation) by which a gene in the nucleus directs the prod",
        "right": "transcription in nucleus: DNA unwinds / template strand used; complementary mRNA synthesised (using U instead of T) and moves to ribosome"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain how a base-substitution mutation in DNA might (a) alter an enzyme's activity OR (b) have zero effect.",
        "marks": "5 Marks",
        "points": [
          "(a) Altered DNA base changes <strong>mRNA codon</strong> (transcription) → <strong>tRNA</strong> brings a different <strong>amino acid</strong> at ribosome (translation) → protein folds differently, changing <strong>3D active site shape</strong> so substrate no longer binds.",
          "(b) Zero effect if mutation is in <strong>non-coding DNA</strong>, OR the new triplet still codes for the <strong>same amino acid</strong> (degenerate code), OR doesn't alter the active site."
        ],
        "hook": "🧬 Base swap → Codon swap → Amino-acid swap → Warped active site (unless silent)!"
      },
      {
        "q": "Show with a genetic cross how parents with Blood Groups A and B can have a child with Blood Group O.",
        "marks": "4 Marks",
        "points": [
          "Parental genotypes: <strong>IᴬIᴼ × IᴮIᴼ</strong>; Gametes: (Iᴬ, Iᴼ) and (Iᴮ, Iᴼ).",
          "Offspring genotypes: IᴬIᴮ (AB), IᴬIᴼ (A), IᴮIᴼ (B), <strong>IᴼIᴼ (Group O = 25% / 0.25 probability)</strong>."
        ],
        "hook": "🩸 Hidden recessive Iᴼ + Iᴼ = 25% Group O surprise!"
      },
      {
        "q": "Distinguish discontinuous and continuous variation with examples and state their causes.",
        "marks": "3 Marks",
        "points": [
          "<strong>Discontinuous</strong> (e.g. ABO blood group): distinct categories, no intermediates, controlled by <strong>genes/alleles alone</strong>.",
          "<strong>Continuous</strong> (e.g. human height, leaf length): continuous range between extremes (normal distribution), controlled by <strong>multiple genes (polygenes) AND environment</strong> (diet, light, minerals)."
        ],
        "hook": "📊 Blood Group = Genes Only; Height = Genes + Diet!"
      }
    ]
  },
  "bio-ecology": {
    "topicId": "bio-ecology",
    "specCode": "Edexcel 4BI1",
    "specRefs": "Edexcel 4BI1 · 4.1–4.18B & 5.1–5.20B",
    "epTitle": "10% Energy Tax, Nitrogen Bacteria Squad & GM Insulin Vats",
    "mnemonics": [
      {
        "label": "Yoghurt & Industrial Fermenters (5.5 & 5.8B)",
        "hook": "🥛 Boil 90 °C → Cool 45 °C → Lactose to Lactic Acid!",
        "detail": "Pasteurise milk (85–90 °C) to kill competing bacteria → <strong>cool to ~45 °C</strong> (optimum without denaturing) → add <em>Lactobacillus</em> → anaerobically converts <strong>lactose into lactic acid</strong> → lower pH coagulates milk proteins. · Fermenter <strong>cooling jacket</strong> removes heat from microbial respiration so enzymes don't denature."
      },
      {
        "label": "GM Plasmids vs Transgenic Mammalian Cloning (5.12–5.20B)",
        "hook": "🐑 Enucleated Egg + Diploid Nucleus + Electric Zap + Surrogate!",
        "detail": "(a) Cut gene & plasmid with <strong>restriction enzyme</strong> → join sticky ends with <strong>DNA ligase</strong> → insert recombinant plasmid vector into bacteria. · (b) Insert diploid nucleus of genetically modified cell into an <strong>enucleated egg cell</strong> → stimulate mitosis with an <strong>electric shock</strong> → implant embryo into <strong>surrogate mother's uterus</strong>."
      },
      {
        "label": "Consequences of Deforestation (4.16)",
        "hook": "🌳 CO₂ Up + Soil Washed Out + Rain Disrupted + Habitats Lost!",
        "detail": "<strong>Global warming / CO₂ rise</strong>: burning/decaying trees releases CO₂ AND removes trees that absorb CO₂ by photosynthesis. · <strong>Soil erosion & leaching</strong>: removing canopy & roots exposes soil to heavy rain, washing away topsoil and mineral ions."
      },
      {
        "label": "Food Chains, Food Webs & Trophic Levels",
        "hook": "Trace the arrows",
        "detail": "Producers (TL1) capture light energy via photosynthesis."
      },
      {
        "label": "Energy Flow & Pyramids",
        "hook": "Apply 10% rule at each step",
        "detail": "The Sun is the principal energy source for almost all ecosystems."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4BI1 · 4.2",
        "wrong": "Stand in the middle of the field and throw the quadrat over your shoulder with your eyes shut so sampling is random.",
        "verdict": "🚨 BIASED QUADRAT SIN!",
        "why": "Never throw metal frames over your shoulder! Use X-Y tape axes and random numbers!",
        "right": "Set up a coordinate grid with two tape measures and generate coordinates using a random number generator."
      },
      {
        "spec": "Edexcel 4BI1 · 4.6",
        "wrong": "Arrows in a food chain point from the predator to the prey it eats.",
        "verdict": "🚨 ARROWS MEAN 'ENERGY TRANSFERRED TO'!",
        "why": "Grass → Rabbit → Fox shows energy flowing FROM grass INTO rabbit INTO fox!",
        "right": "Food-chain arrows represent the direction of energy and biomass transfer."
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Students often say 'algae use up the oxygen' — it is the DECOMPOSING BACTERIA, not the algae, that deplete dissolved oxygen.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain the sequence of events in eutrophication, starting with the application of fertilisers and ending with fish deat",
        "right": "Fertiliser/nitrate/phosphate washes into water body (run-off/leaching); Causes algal bloom / rapid algal growth on surface"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Applying 10% only once to the whole chain (200 000 × 0.1 = 20 000) instead of at each step — the correct answer is 20 kJ, not 20 000 kJ.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A food chain in a meadow is: clover → aphid → ladybird → sparrow → hawk. The clover contains 200 000 kJ of energy. Assum",
        "right": "(a) Shows 10% applied at EACH of 4 steps (accept working shown); (a) Correct final answer: 20 kJ (allow ecf for method shown)"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Confusing restriction enzymes (cut DNA) with ligase (joins DNA). Also, some students say the plasmid is inserted into the bacterium's chromosome — it remains as a separate plasmid.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe how human insulin is produced using genetically modified bacteria. [5]",
        "right": "Human insulin gene identified / cut from human DNA; Restriction enzyme(s) used to cut gene and open plasmid"
      },
      {
        "spec": "Edexcel 4BI1 · Structured QA",
        "wrong": "Mixing up the two: a population is ONE species; a community is MANY species. An example of a community must include several different species, not just one.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Define the terms population and community, and give one example of each from a woodland. [4]",
        "right": "Population = all individuals of one species / one type of organism in an area (1); Suitable example of a population, e.g. all oak trees / all grey squirrels (1)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain the steps of making yoghurt with Lactobacillus and why fermenters need a cooling jacket.",
        "marks": "4 Marks",
        "points": [
          "Pasteurise milk (85–90 °C) to kill competing bacteria → <strong>cool to ~45 °C</strong> (optimum without denaturing) → add <em>Lactobacillus</em> → anaerobically converts <strong>lactose into lactic acid</strong> → lower pH coagulates milk proteins.",
          "Fermenter <strong>cooling jacket</strong> removes heat from microbial respiration so enzymes don't denature."
        ],
        "hook": "🥛 Boil 90 °C → Cool 45 °C → Lactose to Lactic Acid!"
      },
      {
        "q": "Outline (a) inserting a human gene into bacteria and (b) producing cloned transgenic mammals that secrete human proteins in milk.",
        "marks": "5 Marks",
        "points": [
          "(a) Cut gene & plasmid with <strong>restriction enzyme</strong> → join sticky ends with <strong>DNA ligase</strong> → insert recombinant plasmid vector into bacteria.",
          "(b) Insert diploid nucleus of genetically modified cell into an <strong>enucleated egg cell</strong> → stimulate mitosis with an <strong>electric shock</strong> → implant embryo into <strong>surrogate mother's uterus</strong>."
        ],
        "hook": "🐑 Enucleated Egg + Diploid Nucleus + Electric Zap + Surrogate!"
      },
      {
        "q": "Explain four distinct environmental consequences of large-scale tropical deforestation.",
        "marks": "4 Marks",
        "points": [
          "<strong>Global warming / CO₂ rise</strong>: burning/decaying trees releases CO₂ AND removes trees that absorb CO₂ by photosynthesis.",
          "<strong>Soil erosion & leaching</strong>: removing canopy & roots exposes soil to heavy rain, washing away topsoil and mineral ions.",
          "<strong>Disturbed water cycle</strong>: less transpiration reduces local cloud formation & rainfall (plus flooding from rapid runoff) + <strong>loss of biodiversity</strong>."
        ],
        "hook": "🌳 CO₂ Up + Soil Washed Out + Rain Disrupted + Habitats Lost!"
      }
    ]
  },
  "chem-particles": {
    "topicId": "chem-particles",
    "specCode": "Edexcel 4CH1",
    "specRefs": "Edexcel 4CH1 · 1.1–1.7C",
    "epTitle": "Flat Heating Curves, NH₃ vs HCl Smoke-Ring Race & Solubility Tea",
    "mnemonics": [
      {
        "label": "NH3 + HCl Diffusion Experiment (1.2–1.3)",
        "hook": "💨 Light NH₃ (17) sprints past heavy HCl (36.5)!",
        "detail": "<strong>NH₃(g) + HCl(g) → NH₄Cl(s)</strong>. · Ring forms closer to HCl because <strong>NH₃ has lower Mr (17 vs 36.5)</strong> so diffuses faster."
      },
      {
        "label": "Measuring Solubility at 40 °C (1.5C–1.7C)",
        "hook": "⚖️ Saturated → Filter → Evaporate to Constant Mass → Scale to 100 g!",
        "detail": "Hold water bath at 40 °C; add excess solid to known mass of water with stirring until <strong>undissolved solid remains (saturated)</strong>. · Weigh empty evaporating basin → add known portion of filtered solution & reweigh → heat to <strong>constant mass</strong> to evaporate all water → calculate (mass of dry solid ÷ mass of water lost) × 100."
      },
      {
        "label": "Cooling Curve Freezing Plateau (1.1–1.2)",
        "hook": "❄️ Freezing makes intermolecular attractions → releases heat → flat line!",
        "detail": "As particles slow down and lock into a regular solid lattice, <strong>intermolecular attractions/bonds are formed</strong>. · Bond/attraction formation is <strong>exothermic</strong> — releasing thermal energy at the exact same rate heat is lost to the room, keeping temperature constant until all liquid freezes."
      },
      {
        "label": "The Effect of Temperature and Pressure on Gases",
        "hook": "particle collision model",
        "detail": "Increasing temperature increases gas pressure (at constant volume) because particles move faster and collide harder and more often."
      },
      {
        "label": "Diffusion",
        "hook": "Mr comparison",
        "detail": "Diffusion is net movement of particles from high to low concentration due to random motion."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4CH1 · 1.1",
        "wrong": "When liquid water boils at 100 °C, covalent O-H bonds inside H2O break into hydrogen and oxygen gases.",
        "verdict": "🚨 INTERMOLECULAR ≠ COVALENT!",
        "why": "Boiling kettle water does NOT fill your kitchen with explosive rocket fuel!",
        "right": "Boiling only overcomes weak INTERMOLECULAR forces between H2O molecules; covalent O-H bonds stay intact."
      },
      {
        "spec": "Edexcel 4CH1 · 1.3",
        "wrong": "In the NH3 + HCl tube, the white ring forms closer to NH3 because NH3 is lighter.",
        "verdict": "🚨 LIGHTER = FASTER = TRAVELS FURTHER!",
        "why": "Light NH3 sprints past halfway and meets slow heavy HCl near the HCl end!",
        "right": "NH3 (Mr=17) diffuses faster than HCl (Mr=36.5), so NH4Cl forms closer to the HCl end."
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Many students say temperature rises steadily throughout — they forget that plateaus occur because energy goes into breaking forces, not raising kinetic energy.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe and explain what happens to the particles when a solid is heated until it becomes a gas. Your answer should ref",
        "right": "Solid particles vibrate / gain kinetic energy on heating (1); Temperature constant during melting / energy breaks forces between particles / latent heat absorbed (1)"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often state 'NH₃ diffuses faster because it is a gas' — this is not the reason. The reason is the difference in relative molecular mass.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A cotton-wool pad soaked in ammonia solution is placed at one end of a 60 cm horizontal glass tube, and a cotton-wool pa",
        "right": "(a) Ammonia + hydrogen chloride → ammonium chloride (1); (b) NH₃ has lower Mr (17) than HCl (36.5) / NH₃ molecules are lighter (1)"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students say 'the particles get bigger when heated' — incorrect. The particles themselves do not change size; they move faster.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student compresses a gas-filled syringe by pushing in the plunger. The volume of gas decreases. (a) Using kinetic part",
        "right": "(a) Gas particles are widely separated / large empty spaces between gas particles (1); (a) Compressing forces particles closer / reduces empty space (1)"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Confusing liquid and gas volume — a liquid has a fixed volume, only a gas has no fixed volume.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: State the three states of matter and, for each, give one property of its shape and one property of its volume. [3]",
        "right": "Solid: fixed shape and fixed volume (1); Liquid: no fixed shape but fixed volume (1)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Write the balanced symbol equation with state symbols for the white ring and explain both its position and time delay.",
        "marks": "4 Marks",
        "points": [
          "<strong>NH₃(g) + HCl(g) → NH₄Cl(s)</strong>.",
          "Ring forms closer to HCl because <strong>NH₃ has lower Mr (17 vs 36.5)</strong> so diffuses faster.",
          "Takes several minutes because gas molecules repeatedly <strong>collide with air particles</strong>."
        ],
        "hook": "💨 Light NH₃ (17) sprints past heavy HCl (36.5)!"
      },
      {
        "q": "Describe how to find the solubility of ammonium chloride in g per 100 g water at 40 °C.",
        "marks": "4 Marks",
        "points": [
          "Hold water bath at 40 °C; add excess solid to known mass of water with stirring until <strong>undissolved solid remains (saturated)</strong>.",
          "Weigh empty evaporating basin → add known portion of filtered solution & reweigh → heat to <strong>constant mass</strong> to evaporate all water → calculate (mass of dry solid ÷ mass of water lost) × 100."
        ],
        "hook": "⚖️ Saturated → Filter → Evaporate to Constant Mass → Scale to 100 g!"
      },
      {
        "q": "Explain why the temperature of liquid stearic acid stays constant at 69 °C while it freezes into a solid.",
        "marks": "3 Marks",
        "points": [
          "As particles slow down and lock into a regular solid lattice, <strong>intermolecular attractions/bonds are formed</strong>.",
          "Bond/attraction formation is <strong>exothermic</strong> — releasing thermal energy at the exact same rate heat is lost to the room, keeping temperature constant until all liquid freezes."
        ],
        "hook": "❄️ Freezing makes intermolecular attractions → releases heat → flat line!"
      }
    ]
  },
  "chem-atoms": {
    "topicId": "chem-atoms",
    "specCode": "Edexcel 4CH1",
    "specRefs": "Edexcel 4CH1 · 1.14–1.17",
    "epTitle": "Twin Isotopes, Chlorine's 35.5 Decimal & 2.8.8 VIP Shells",
    "mnemonics": [
      {
        "label": "Isotopes & Weighted Ar (1.15–1.16)",
        "hook": "⚖️ Algebra hack: x and (100 - x) cracks reverse Ar questions every time!",
        "detail": "<strong>Isotopes</strong>: atoms of the same element with the <strong>same number of protons</strong> and <strong>different numbers of neutrons</strong>. · Let % of ⁶³Cu = x, then ⁶⁵Cu = (100 - x): [63x + 65(100 - x)] / 100 = 63.5 → 6500 - 2x = 6350 → 2x = 150 → <strong>75% ⁶³Cu and 25% ⁶⁵Cu</strong>."
      },
      {
        "label": "Electronic Configuration & Periodic Position (1.17)",
        "hook": "🔢 Count dots = Period; Last number = Group!",
        "detail": "6 outer electrons → <strong>Group 6</strong>; 3 occupied shells → <strong>Period 3</strong>; total electrons = 16 → Sulfur (Z = 16); gains 2 electrons → <strong>S²⁻</strong>."
      },
      {
        "label": "Subatomic Table & Ion Charges (1.14–1.15)",
        "hook": "⚡ 3+ Cation = LOST 3 negative electrons!",
        "detail": "Proton: mass 1, charge +1; Neutron: mass 1, charge 0; Electron: mass 1/1836 (negligible), charge −1. · ²⁷₁₃Al³⁺ has <strong>13 protons</strong>, 27 − 13 = <strong>14 neutrons</strong>, and 13 − 3 = <strong>10 electrons</strong> (2.8)."
      },
      {
        "label": "Inside the Atom: Nucleus and Sub-atomic Particles",
        "hook": "Memorise the triangle: A at the top, Z and (A−Z) below.",
        "detail": "Protons: relative charge +1, relative mass 1 (in the nucleus)."
      },
      {
        "label": "Isotopes and Their Properties",
        "hook": "Check Z to identify the element, check A to identify the specific isotope.",
        "detail": "Isotopes: same element (same Z), different A (different neutron count)."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4CH1 · 1.15",
        "wrong": "Isotopes of carbon have the same number of neutrons and different numbers of protons.",
        "verdict": "🚨 CHANGE PROTONS = DIFFERENT ELEMENT!",
        "why": "Change 6 protons to 7 and Carbon literally turns into Nitrogen!",
        "right": "Isotopes have the SAME number of protons (atomic number) and DIFFERENT numbers of neutrons."
      },
      {
        "spec": "Edexcel 4CH1 · 1.17",
        "wrong": "Potassium (atomic number 19) has electronic configuration 2.8.9.",
        "verdict": "🚨 THIRD SHELL CAPS AT 8 FOR FIRST 20 ELEMENTS!",
        "why": "Write 2.8.8.1 — putting Potassium cleanly in Group 1, Period 4!",
        "right": "Potassium (Z=19) has electronic configuration 2.8.8.1."
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often change the proton number when forming an ion. Only electrons change; protons and neutrons stay the same.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Calcium (Ca) has proton number 20 and mass number 40. (a) State the number of protons, neutrons, and electrons in a neut",
        "right": "Protons = 20; Neutrons = 20 (accept A − Z shown)"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Forgetting to divide by 100 (treating percentages as fractions without converting, giving an answer ≈ 2811). Also: dividing by 3 instead of 100 (treating it as a simple mean).",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Silicon (Si, Z = 14) has three naturally occurring isotopes: ²⁸Si (92.2%), ²⁹Si (4.7%), ³⁰Si (3.1%). Calculate the relat",
        "right": "Correct formula used: Σ(isotopic mass × % abundance) ÷ 100; Correct substitution: 28 × 92.2 + 29 × 4.7 + 30 × 3.1"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Stating that isotopes have different chemical properties because they are different 'types' of atom — isotopes are the same element with identical electron arrangements.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain why ¹²C and ¹⁴C (carbon-12 and carbon-14) are isotopes of carbon. Explain why they have identical chemical prope",
        "right": "Same proton number (Z = 6) / same element; Different mass numbers / different number of neutrons (6 vs 8)"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Mixing up charge and mass, e.g. giving the electron a relative mass of −1. The −1 is its charge; its mass is negligible.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Complete the following about the three sub-atomic particles. (a) State the relative charge and relative mass of a proton",
        "right": "Proton +1 charge / mass 1; Neutron 0 charge / mass 1"
      }
    ],
    "rapidChecks": [
      {
        "q": "Define isotopes and calculate the % abundance of ⁶³Cu and ⁶⁵Cu given Ar(Cu) = 63.5.",
        "marks": "4 Marks",
        "points": [
          "<strong>Isotopes</strong>: atoms of the same element with the <strong>same number of protons</strong> and <strong>different numbers of neutrons</strong>.",
          "Let % of ⁶³Cu = x, then ⁶⁵Cu = (100 - x): [63x + 65(100 - x)] / 100 = 63.5 → 6500 - 2x = 6350 → 2x = 150 → <strong>75% ⁶³Cu and 25% ⁶⁵Cu</strong>."
        ],
        "hook": "⚖️ Algebra hack: x and (100 - x) cracks reverse Ar questions every time!"
      },
      {
        "q": "Element X has electronic configuration 2.8.6. State its Group, Period, atomic number, and ion formula.",
        "marks": "3 Marks",
        "points": [
          "6 outer electrons → <strong>Group 6</strong>; 3 occupied shells → <strong>Period 3</strong>; total electrons = 16 → Sulfur (Z = 16); gains 2 electrons → <strong>S²⁻</strong>."
        ],
        "hook": "🔢 Count dots = Period; Last number = Group!"
      },
      {
        "q": "State relative mass and charge of a proton, neutron, and electron, and deduce p, n, e in ²⁷₁₃Al³⁺.",
        "marks": "3 Marks",
        "points": [
          "Proton: mass 1, charge +1; Neutron: mass 1, charge 0; Electron: mass 1/1836 (negligible), charge −1.",
          "²⁷₁₃Al³⁺ has <strong>13 protons</strong>, 27 − 13 = <strong>14 neutrons</strong>, and 13 − 3 = <strong>10 electrons</strong> (2.8)."
        ],
        "hook": "⚡ 3+ Cation = LOST 3 negative electrons!"
      }
    ]
  },
  "chem-periodic": {
    "topicId": "chem-periodic",
    "specCode": "Edexcel 4CH1",
    "specRefs": "Edexcel 4CH1 · 1.18–1.26",
    "epTitle": "Exploding Potassium, Halogen Muggers & Unbothered Noble Gases",
    "mnemonics": [
      {
        "label": "Group 1 vs Group 7 Reactivity Trends (1.22 vs 1.26)",
        "hook": "🧲 Same weaker nuclear pull — makes Losing easier (G1) and Gaining harder (G7)!",
        "detail": "Both groups gain extra electron shells down the group → <strong>greater distance from positive nucleus</strong> and more inner-electron <strong>shielding</strong> → <strong>weaker electrostatic attraction</strong>. · Group 1 reacts by <strong>losing 1 outer electron</strong> (easier when attraction is weaker → more reactive down group)."
      },
      {
        "label": "Astatine Predictions (1.23–1.25)",
        "hook": "📈 Gas (Cl₂) → Liquid (Br₂) → Solid (I₂, At₂) darker & higher BP!",
        "detail": "Diatomic molecule <strong>At₂</strong>; <strong>black/very dark solid</strong> at room temperature (BP increases down Group 7 due to stronger intermolecular forces); less reactive than iodine."
      },
      {
        "label": "HCl in Water vs Methylbenzene (1.25 & 2.28)",
        "hook": "💧 No Water = No H⁺ Ions = Not Acidic!",
        "detail": "In <strong>water</strong>, HCl molecules dissociate/ionise to form <strong>mobile H⁺(aq) and Cl⁻(aq) ions</strong> → mobile ions carry charge, and H⁺(aq) reacts with Mg to form H₂ gas. · In <strong>methylbenzene</strong>, HCl remains as neutral <strong>simple covalent molecules</strong> → no mobile ions and no H⁺ ions (not acidic)."
      },
      {
        "label": "Arrangement of the Periodic Table",
        "hook": "Read the group number for outer electrons",
        "detail": "Elements are ordered by increasing proton number, not atomic mass."
      },
      {
        "label": "Group I — The Alkali Metals",
        "hook": "Explain trends using electron configuration",
        "detail": "Group I metals (Li, Na, K) all have 1 outer electron and react similarly."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4CH1 · 1.20",
        "wrong": "Sulfur dioxide dissolves in rainwater to form an alkaline solution because sulfur is in Period 3.",
        "verdict": "🚨 NON-METAL OXIDES ARE ACIDIC!",
        "why": "SO2 makes sulfurous/sulfuric acid rain — pH way below 7!",
        "right": "Sulfur is a non-metal so SO2 is an ACIDIC oxide (metal oxides are basic)."
      },
      {
        "spec": "Edexcel 4CH1 · 1.25",
        "wrong": "Adding bromine water to sodium chloride solution turns it pale green as chlorine is displaced.",
        "verdict": "🚨 BROMINE IS LESS REACTIVE THAN CHLORINE!",
        "why": "Br2 cannot mug Cl- — zero reaction, stays orange!",
        "right": "More reactive halogen displaces less reactive halide only (Cl2 > Br2 > I2)."
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often say 'the nucleus attracts the electron less because the atom is bigger' without mentioning shielding — the examiner expects shielding to be named explicitly.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain why the reactivity of Group I metals increases from lithium to potassium. Refer to electron configuration in you",
        "right": "More electron shells going down the group / outer electron further from the nucleus; Greater electron shielding from inner shells"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "A common mistake is predicting that bromine reacts with KBr (it cannot displace itself). Another is omitting state symbols from the ionic equation.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student adds a few drops of bromine water to three test tubes containing aqueous solutions of KCl, KBr, and KI respect",
        "right": "KCl: no colour change / no reaction (1 mark); KBr: no colour change / no reaction (1 mark)"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often forget to include a specific named example for each property, losing the 'with example' mark in each pair.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe four characteristic properties of transition elements. For each property, give a named example.",
        "right": "High melting points / high density — with a named example (e.g. iron 1538 °C) (2 marks); Variable oxidation states — with a named example (e.g. Fe²⁺ and Fe³⁺ / Cu⁺ and Cu²⁺) (2 marks)"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students sometimes count the shells as the group number or vice versa — remember group = outer electrons, period = number of shells.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: An atom of element Z has the electron configuration 2,8,8,1. (a) State the group and period of Z. [2] (b) Predict whethe",
        "right": "(a) Group I (1); Period 4 (1); (b) Metal (1); forms a 1+ ion / Z⁺ (1)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain why reactivity increases down Group 1 yet decreases down Group 7.",
        "marks": "5 Marks",
        "points": [
          "Both groups gain extra electron shells down the group → <strong>greater distance from positive nucleus</strong> and more inner-electron <strong>shielding</strong> → <strong>weaker electrostatic attraction</strong>.",
          "Group 1 reacts by <strong>losing 1 outer electron</strong> (easier when attraction is weaker → more reactive down group).",
          "Group 7 reacts by <strong>gaining 1 electron</strong> into outer shell (harder when attraction is weaker → less reactive down group)."
        ],
        "hook": "🧲 Same weaker nuclear pull — makes Losing easier (G1) and Gaining harder (G7)!"
      },
      {
        "q": "Predict the physical state, colour, and formula of Astatine (below Iodine in Group 7).",
        "marks": "3 Marks",
        "points": [
          "Diatomic molecule <strong>At₂</strong>; <strong>black/very dark solid</strong> at room temperature (BP increases down Group 7 due to stronger intermolecular forces); less reactive than iodine."
        ],
        "hook": "📈 Gas (Cl₂) → Liquid (Br₂) → Solid (I₂, At₂) darker & higher BP!"
      },
      {
        "q": "Explain why hydrogen chloride dissolved in water conducts electricity and reacts with magnesium, whereas HCl in methylbenzene does neither.",
        "marks": "4 Marks",
        "points": [
          "In <strong>water</strong>, HCl molecules dissociate/ionise to form <strong>mobile H⁺(aq) and Cl⁻(aq) ions</strong> → mobile ions carry charge, and H⁺(aq) reacts with Mg to form H₂ gas.",
          "In <strong>methylbenzene</strong>, HCl remains as neutral <strong>simple covalent molecules</strong> → no mobile ions and no H⁺ ions (not acidic)."
        ],
        "hook": "💧 No Water = No H⁺ Ions = Not Acidic!"
      }
    ]
  },
  "chem-bonding": {
    "topicId": "chem-bonding",
    "specCode": "Edexcel 4CH1",
    "specRefs": "Edexcel 4CH1 · 1.37–1.54",
    "epTitle": "Electron Muggers, Slippery Graphite, C₆₀ Footballs & Mobile Ions",
    "mnemonics": [
      {
        "label": "Diamond vs Graphite vs C60 Fullerene (1.48–1.51)",
        "hook": "💎 4-Bond Drill · ✏️ 3-Bond + Free e⁻ Layers · ⚽ C₆₀ Simple Cage!",
        "detail": "<strong>Diamond</strong>: giant covalent, 4 C–C bonds per C → very high MP, very hard, does NOT conduct (no delocalised e⁻). · <strong>Graphite</strong>: giant covalent layers, 3 C–C bonds per C → very high MP, soft/slippery (weak forces between layers slide), <strong>conducts</strong> (1 delocalised e⁻ per C moves along layers)."
      },
      {
        "label": "MgO vs NaCl Melting Point & Conductivity (1.40–1.42)",
        "hook": "⚡ 2+ / 2- = Double Charge = Super-Glue Lattice!",
        "detail": "Both are giant ionic lattices; <strong>Mg²⁺ and O²⁻ have double the charge</strong> of Na⁺ and Cl⁻ → much stronger electrostatic attraction requiring more heat energy to overcome. · In solid MgO, ions are held in <strong>fixed lattice positions</strong> and cannot move to carry charge."
      },
      {
        "label": "Dot-and-Cross & Boiling Trend in Simple Molecules (1.44–1.46)",
        "hook": "📈 Bigger Mr = Stronger Intermolecular Grip = Higher BP!",
        "detail": "Both have <strong>simple molecular structures</strong>. · C₆H₁₄ has a larger relative molecular mass / larger molecules → <strong>stronger intermolecular forces of attraction</strong> between molecules → more thermal energy required to overcome them."
      },
      {
        "label": "Ionic Bonding",
        "hook": "Identify group number to find charge",
        "detail": "Ionic bonding is the transfer of electrons from a metal atom to a non-metal atom."
      },
      {
        "label": "Properties of Ionic Compounds",
        "hook": "Link each property back to the strength and number of electrostatic attractions",
        "detail": "Ionic compounds have high melting and boiling points due to the many strong electrostatic forces in the lattice."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4CH1 · 1.46",
        "wrong": "Methane (CH4) is a gas at room temperature because very little energy is needed to break its weak C-H covalent bonds.",
        "verdict": "🚨 NUMBER ONE CHEMISTRY EXAM TRAP!",
        "why": "C-H covalent bonds are rock-solid! You overcome weak INTERMOLECULAR forces!",
        "right": "CH4 is simple molecular: weak intermolecular forces of attraction between CH4 molecules require little thermal energy to overcome."
      },
      {
        "spec": "Edexcel 4CH1 · 1.42",
        "wrong": "Solid sodium chloride conducts electricity because it contains charged Na+ and Cl- ions.",
        "verdict": "🚨 FIXED IONS CANNOT FLOW!",
        "why": "Having ions isn't enough — in a SOLID lattice they vibrate on one spot! Must be MOLTEN or AQUEOUS!",
        "right": "Solid ionic lattices do not conduct because ions are fixed in position and cannot move."
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often say 'the bonds in methane are weak' — the covalent bonds are strong; it is the forces BETWEEN molecules that are weak. The covalent bonds are not broken on boiling.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Draw a dot-and-cross diagram for a molecule of methane (CH₄) and explain why methane has a very low boiling point (−161 ",
        "right": "Correct dot-and-cross diagram with C central and 4 H atoms / shared pairs shown correctly; No lone pairs shown on C; one or two lone pairs not shown on H (H only needs 2 electrons total)"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "A very common error is to say solid NaCl 'has no electrons' — it does have electrons, but they are all localised in ionic bonds. The issue is mobility, not existence of charge carriers.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Compare the electrical conductivity of (i) solid NaCl, (ii) molten NaCl, and (iii) graphite. Explain each answer in term",
        "right": "(i) Solid NaCl does not conduct; Ions are fixed / cannot move in the solid lattice"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students sometimes say 'SiO₂ has stronger bonds than H₂O' — this conflates bond strength (both have strong covalent bonds within each unit) with structure type. The key difference is giant vs. simple molecular, not bond strength per se.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Silicon(IV) oxide (SiO₂) and ice (H₂O) are both oxides that are solids at room temperature. However, SiO₂ has a melting ",
        "right": "Ice / H₂O identified as a simple molecular substance; Weak intermolecular forces between H₂O molecules"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Writing 'attraction between atoms' instead of 'between ions', or omitting the word 'electrostatic'.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: State what is meant by an ionic bond. [2 marks]",
        "right": "Strong electrostatic attraction / attraction between opposite charges; Between (positive and negative) ions / formed by transfer of electrons from metal to non-metal"
      }
    ],
    "rapidChecks": [
      {
        "q": "Compare bonding, melting point, hardness, and electrical conductivity across diamond, graphite, and C60 fullerene.",
        "marks": "5 Marks",
        "points": [
          "<strong>Diamond</strong>: giant covalent, 4 C–C bonds per C → very high MP, very hard, does NOT conduct (no delocalised e⁻).",
          "<strong>Graphite</strong>: giant covalent layers, 3 C–C bonds per C → very high MP, soft/slippery (weak forces between layers slide), <strong>conducts</strong> (1 delocalised e⁻ per C moves along layers).",
          "<strong>C₆₀ Fullerene</strong>: <strong>simple molecular</strong> cages → lower MP/sublimation point & soft (weak intermolecular forces between C₆₀ molecules), poor conductor (delocalised e⁻ trapped on each molecule)."
        ],
        "hook": "💎 4-Bond Drill · ✏️ 3-Bond + Free e⁻ Layers · ⚽ C₆₀ Simple Cage!"
      },
      {
        "q": "Explain why MgO has a higher melting point than NaCl and why solid MgO does not conduct electricity.",
        "marks": "4 Marks",
        "points": [
          "Both are giant ionic lattices; <strong>Mg²⁺ and O²⁻ have double the charge</strong> of Na⁺ and Cl⁻ → much stronger electrostatic attraction requiring more heat energy to overcome.",
          "In solid MgO, ions are held in <strong>fixed lattice positions</strong> and cannot move to carry charge."
        ],
        "hook": "⚡ 2+ / 2- = Double Charge = Super-Glue Lattice!"
      },
      {
        "q": "Why does hexane (C₆H₁₄) have a higher boiling point than methane (CH₄)?",
        "marks": "3 Marks",
        "points": [
          "Both have <strong>simple molecular structures</strong>.",
          "C₆H₁₄ has a larger relative molecular mass / larger molecules → <strong>stronger intermolecular forces of attraction</strong> between molecules → more thermal energy required to overcome them."
        ],
        "hook": "📈 Bigger Mr = Stronger Intermolecular Grip = Higher BP!"
      }
    ]
  },
  "chem-stoichiometry": {
    "topicId": "chem-stoichiometry",
    "specCode": "Edexcel 4CH1",
    "specRefs": "Edexcel 4CH1 · 1.25–1.36C",
    "epTitle": "Boba-Pearl Moles, MgO Crucible Lid Lifts & 24 dm³ Balloons",
    "mnemonics": [
      {
        "label": "MgO Crucible Experimental Errors (1.33)",
        "hook": "🏺 Peek for O₂, shut for smoke, heat to constant mass!",
        "detail": "(a) White MgO smoke escaping makes final crucible mass <strong>too low</strong> → apparent mass of O₂ gained seems lower. · (b) Leaving lid closed stops O₂ entering → unreacted Mg remains → reheat & reweigh to <strong>constant mass</strong>."
      },
      {
        "label": "Sulfuric Acid 1:2 Titration Calculation (1.34C)",
        "hook": "🧪 Watch diprotic H₂SO₄'s 2:1 mole ratio!",
        "detail": "n(H₂SO₄) = 0.100 × (20.0/1000) = <strong>0.00200 mol</strong>. · 2:1 ratio → n(NaOH) = 2 × 0.00200 = <strong>0.00400 mol</strong>."
      },
      {
        "label": "Finding x in Hydrated Salt MgSO₄·xH₂O (1.36C)",
        "hook": "💧 Mass lost = H₂O → Divide by 18 → Ratio to anhydrous salt!",
        "detail": "Mass of H₂O driven off = 2.46 − 1.20 = <strong>1.26 g</strong>. · n(MgSO₄) = 1.20 / 120 = <strong>0.010 mol</strong>; n(H₂O) = 1.26 / 18 = <strong>0.070 mol</strong>."
      },
      {
        "label": "Chemical Symbols, Formulae and Equations",
        "hook": "Balance largest formula first",
        "detail": "Symbols are 1–2 letters; first letter always capitalised (e.g. Co ≠ CO)."
      },
      {
        "label": "Relative Mass and the Mole",
        "hook": "Unit analysis (g ÷ g/mol = mol)",
        "detail": "Aᵣ is dimensionless; read it from the periodic table."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4CH1 · 1.34C",
        "wrong": "Moles of NaOH in 25 cm³ of 0.2 mol/dm³ solution = 0.2 × 25 = 5.0 moles.",
        "verdict": "🚨 FORGOT ÷ 1000 INTO dm³!",
        "why": "Five whole moles in one tiny pipette?! Divide 25 by 1,000 → 0.005 moles!",
        "right": "V(dm³) = V(cm³) / 1000 → n = 0.2 × 0.025 = 0.005 mol."
      },
      {
        "spec": "Edexcel 4CH1 · 1.28",
        "wrong": "In NH4NO3, there is 1 nitrogen atom so % N = (14 / 80) × 100 = 17.5%.",
        "verdict": "🚨 MISSED THE SECOND NITROGEN IN NH4NO3!",
        "why": "NH4 + NO3 has TWO nitrogen atoms (2 × 14 = 28 → 35%)!",
        "right": "Count every atom of the element across the entire formula."
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Forgetting to divide by Mᵣ of CO₂ first and using 4.40 g directly as moles.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Calcium carbonate reacts with excess hydrochloric acid according to: CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g) (",
        "right": "n(CO₂) = 4.40/44 = 0.100 mol [1]; n(CaCO₃) = 0.100 mol (by 1:1 ratio) [1]"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Assuming the reactant present in greater mass is in excess — you must compare moles, not masses.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student reacts 4.00 g of iron with 3.20 g of sulfur to form iron(II) sulfide: Fe(s) + S(s) → FeS(s) (Aᵣ: Fe = 56, S = ",
        "right": "n(Fe) = 4.00/56 = 0.0714 mol [1]; n(S) = 3.20/32 = 0.100 mol [1]"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Using a 1:1 mole ratio instead of 1:2 (H₂SO₄ reacts with 2 NaOH); giving the concentration of NaOH not H₂SO₄.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: In a titration, 20.0 cm³ of sulfuric acid of unknown concentration is titrated against 0.100 mol/dm³ sodium hydroxide so",
        "right": "n(NaOH) = 0.100 × 0.02400 = 0.00240 mol [1]; n(H₂SO₄) = 0.00240/2 = 0.00120 mol [1]"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Saying simply 'the mass of an atom' without the comparison to carbon-12, or omitting that it is an average over isotopes.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Define the term relative atomic mass (Aᵣ). [2]",
        "right": "weighted mean / average mass of an atom (of the element) [1]; compared with / relative to 1/12 the mass of a carbon-12 atom [1]"
      }
    ],
    "rapidChecks": [
      {
        "q": "In finding the empirical formula of MgO in a crucible, explain how (a) losing white smoke and (b) incomplete reaction affect calculated oxygen mass.",
        "marks": "4 Marks",
        "points": [
          "(a) White MgO smoke escaping makes final crucible mass <strong>too low</strong> → apparent mass of O₂ gained seems lower.",
          "(b) Leaving lid closed stops O₂ entering → unreacted Mg remains → reheat & reweigh to <strong>constant mass</strong>."
        ],
        "hook": "🏺 Peek for O₂, shut for smoke, heat to constant mass!"
      },
      {
        "q": "25.0 cm³ of NaOH is neutralised by 20.0 cm³ of 0.100 mol/dm³ H₂SO₄ (2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O). Calculate c(NaOH) in mol/dm³ and g/dm³ (Mr=40).",
        "marks": "4 Marks",
        "points": [
          "n(H₂SO₄) = 0.100 × (20.0/1000) = <strong>0.00200 mol</strong>.",
          "2:1 ratio → n(NaOH) = 2 × 0.00200 = <strong>0.00400 mol</strong>.",
          "c(NaOH) = 0.00400 ÷ 0.0250 = <strong>0.160 mol/dm³</strong> = 0.160 × 40 = <strong>6.40 g/dm³</strong>."
        ],
        "hook": "🧪 Watch diprotic H₂SO₄'s 2:1 mole ratio!"
      },
      {
        "q": "2.46 g of MgSO₄·xH₂O is heated to constant mass giving 1.20 g of anhydrous MgSO₄ (Mr = 120; Mr H₂O = 18). Find x.",
        "marks": "4 Marks",
        "points": [
          "Mass of H₂O driven off = 2.46 − 1.20 = <strong>1.26 g</strong>.",
          "n(MgSO₄) = 1.20 / 120 = <strong>0.010 mol</strong>; n(H₂O) = 1.26 / 18 = <strong>0.070 mol</strong>.",
          "Ratio 0.010 : 0.070 = 1 : 7 → <strong>x = 7</strong> (MgSO₄·7H₂O)."
        ],
        "hook": "💧 Mass lost = H₂O → Divide by 18 → Ratio to anhydrous salt!"
      }
    ]
  },
  "chem-electrochemistry": {
    "topicId": "chem-electrochemistry",
    "specCode": "Edexcel 4CH1",
    "specRefs": "Edexcel 4CH1 · 1.55C–1.60C",
    "epTitle": "PANIC at the Electrodes, OIL RIG & The Aqueous Brine Plot Twist",
    "mnemonics": [
      {
        "label": "Electrolysis of Aqueous NaCl (Brine) (1.58C–1.59C)",
        "hook": "🧂 Brine Trio: H₂ + Cl₂ + NaOH left in the tub!",
        "detail": "Cathode (-): <strong>Hydrogen gas</strong>, <strong>2H⁺ + 2e⁻ → H₂</strong> (H less reactive than Na). · Anode (+): <strong>Chlorine gas</strong>, <strong>2Cl⁻ → Cl₂ + 2e⁻</strong> (halide ion present)."
      },
      {
        "label": "The Non-Halide Anode Half-Equation (1.59C)",
        "hook": "🫧 Memorise 4OH⁻ → 2H₂O + O₂ + 4e⁻ cold!",
        "detail": "No halide ion present, so OH⁻ is oxidised: <strong>4OH⁻ → 2H₂O + O₂ + 4e⁻</strong>. · Observation: bubbles/effervescence of colourless gas (relights a glowing splint)."
      },
      {
        "label": "Electroplating a Spoon with Silver (1.58C–1.60C)",
        "hook": "🥄 Object to coat ALWAYS goes on the Negative Cathode!",
        "detail": "<strong>Cathode (−)</strong>: iron spoon → <strong>Ag⁺ + e⁻ → Ag</strong>. · <strong>Anode (+)</strong>: pure silver rod → <strong>Ag → Ag⁺ + e⁻</strong>."
      },
      {
        "label": "What is Electrolysis?",
        "hook": "Identify charges of ions first",
        "detail": "The electrolyte must be molten or dissolved in water so ions can move freely."
      },
      {
        "label": "Electrolysis of Molten Compounds",
        "hook": "Write the ions present first",
        "detail": "Molten compounds contain only the ions of that compound — no water, so no competition."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4CH1 · 1.56C",
        "wrong": "During electrolysis of molten lead bromide, electrons swim through the molten liquid from cathode to anode.",
        "verdict": "🚨 ELECTRONS NEVER SWIM IN ELECTROLYTES!",
        "why": "Electrons stay in the metal wires! Mobile Pb²⁺ and Br⁻ IONS carry charge in the liquid!",
        "right": "Ions move through the electrolyte; electrons flow only in the external circuit."
      },
      {
        "spec": "Edexcel 4CH1 · 1.58C",
        "wrong": "Electrolysing aqueous potassium bromide (KBr) produces shiny potassium metal at the cathode.",
        "verdict": "🚨 POTASSIUM IN WATER?!",
        "why": "K is way above H in reactivity — H+ discharges to make H2 gas instead!",
        "right": "In aqueous electrolysis, metals more reactive than hydrogen stay in solution while H2 gas forms at the cathode."
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often write the anode as Br- → Br + e- without forming the diatomic Br₂. Always remember halogens are diatomic.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Molten lead(II) bromide is electrolysed using carbon electrodes. (a) State which ions are present and where each moves. ",
        "right": "Pb2+ to cathode / Br- to anode [1]; Cathode half-equation: Pb2+ + 2e- → Pb, balanced [1]"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often say the solution 'runs out' of bromide — the correct explanation is about relative concentration and preferential discharge, not depletion.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student electrolyses aqueous potassium bromide solution using carbon electrodes. (a) Predict the product at each elect",
        "right": "Cathode: hydrogen / H₂ [1]; Anode: bromine / Br₂ [1]"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often forget to specify that the spoon must be the cathode — many write 'one electrode' without identifying which one.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: (a) Describe how you would use electrolysis to silver-plate a steel spoon. Include the electrode materials, the electrol",
        "right": "Spoon as cathode / silver block as anode [1]; Silver nitrate solution as electrolyte [1]"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students sometimes say solid ionic compounds have no ions. They DO have ions — the ions simply cannot move.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: (a) Define the terms electrolysis and electrolyte. (b) Explain why an ionic compound conducts electricity when molten or",
        "right": "Electrolysis = breaking down / decomposing an ionic compound using electricity / d.c. [1]; Electrolyte = ionic compound molten or dissolved (in water) [1]"
      }
    ],
    "rapidChecks": [
      {
        "q": "Name all three products of electrolysing concentrated NaCl(aq) and write half-equations for both electrodes.",
        "marks": "4 Marks",
        "points": [
          "Cathode (-): <strong>Hydrogen gas</strong>, <strong>2H⁺ + 2e⁻ → H₂</strong> (H less reactive than Na).",
          "Anode (+): <strong>Chlorine gas</strong>, <strong>2Cl⁻ → Cl₂ + 2e⁻</strong> (halide ion present).",
          "Remaining solution: <strong>Sodium hydroxide, NaOH(aq)</strong> (from Na⁺ and OH⁻ left behind)."
        ],
        "hook": "🧂 Brine Trio: H₂ + Cl₂ + NaOH left in the tub!"
      },
      {
        "q": "Write the balanced half-equation at an inert anode during electrolysis of aqueous sodium sulfate, Na₂SO₄(aq), and state the observation.",
        "marks": "3 Marks",
        "points": [
          "No halide ion present, so OH⁻ is oxidised: <strong>4OH⁻ → 2H₂O + O₂ + 4e⁻</strong>.",
          "Observation: bubbles/effervescence of colourless gas (relights a glowing splint)."
        ],
        "hook": "🫧 Memorise 4OH⁻ → 2H₂O + O₂ + 4e⁻ cold!"
      },
      {
        "q": "State the anode, cathode, electrolyte, and both half-equations to silver-plate an iron spoon.",
        "marks": "4 Marks",
        "points": [
          "<strong>Cathode (−)</strong>: iron spoon → <strong>Ag⁺ + e⁻ → Ag</strong>.",
          "<strong>Anode (+)</strong>: pure silver rod → <strong>Ag → Ag⁺ + e⁻</strong>.",
          "<strong>Electrolyte</strong>: aqueous silver nitrate, <strong>AgNO₃(aq)</strong>."
        ],
        "hook": "🥄 Object to coat ALWAYS goes on the Negative Cathode!"
      }
    ]
  },
  "chem-energetics": {
    "topicId": "chem-energetics",
    "specCode": "Edexcel 4CH1",
    "specRefs": "Edexcel 4CH1 · 3.1–3.8",
    "epTitle": "Polystyrene Boba-Cup Calorimetry & MEXOBENDO Breakup Drama",
    "mnemonics": [
      {
        "label": "Explaining Exothermic via Bonds (3.5C–3.6C)",
        "hook": "💥 MEXOBENDO: Payout from making bonds beats cost of breaking bonds!",
        "detail": "Energy is absorbed to <strong>break bonds</strong> in CH₄ and O₂ (endothermic), and energy is released when <strong>new bonds are made</strong> in CO₂ and H₂O (exothermic). · <strong>More energy is released making new bonds than is absorbed breaking old bonds</strong>, so overall ΔH is negative."
      },
      {
        "label": "Polystyrene Cup Neutralisation Practical (3.4 & 3.8)",
        "hook": "📈 Add both volumes (25+25=50 g) + extrapolate cooling line!",
        "detail": "Combined volume = 50 cm³ → assume density = 1 g/cm³, so <strong>m = 50 g</strong>. · Plot temp vs time before & after mixing and <strong>extrapolate the cooling line back to time of mixing</strong> to find true maximum ΔT."
      },
      {
        "label": "Spirit-Burner Combustion Calorimetry (3.2–3.4)",
        "hook": "🕯️ Cap the wick immediately so ethanol doesn't evaporate unburned!",
        "detail": "Measure known mass/volume of water into copper can & record initial temp; weigh spirit burner + cap before lighting. · Burn beneath draught-shielded can, stirring water until temp rises ~20 °C; extinguish with cap & <strong>reweigh burner immediately</strong> (prevents evaporation loss)."
      },
      {
        "label": "Energy Level Diagrams",
        "hook": "draw a diagram",
        "detail": "Energy level diagrams show reactants, products, the transition state peak, Ea, and ΔH."
      },
      {
        "label": "Calculating ΔH from Bond Energies",
        "hook": "draw a diagram — sketch structural formulae to count bonds accurately",
        "detail": "ΔH = Σ(bond energies of bonds broken) − Σ(bond energies of bonds formed)."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4CH1 · 3.5C",
        "wrong": "Combustion is exothermic because breaking C-H bonds releases large amounts of heat energy.",
        "verdict": "🚨 BOND BREAKING NEVER RELEASES ENERGY!",
        "why": "Breaking bonds ALWAYS requires energy input! MAKING CO2 and H2O bonds releases the heat!",
        "right": "Bond breaking is endothermic; bond making is exothermic."
      },
      {
        "spec": "Edexcel 4CH1 · 3.8",
        "wrong": "When ammonium nitrate dissolves in water, the temperature drops from 21 °C to 14 °C, so ΔH is -28 kJ/mol.",
        "verdict": "🚨 TEMP DROP = ENDOTHERMIC = POSITIVE +ΔH!",
        "why": "Surroundings got colder because the reaction absorbed heat → ΔH MUST BE POSITIVE (+28 kJ/mol)!",
        "right": "Temperature decrease = endothermic = positive ΔH."
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often confuse ΔH sign with temperature change. Temperature RISES (surroundings gain energy) means energy was RELEASED → ΔH is NEGATIVE (not positive).",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student mixes dilute sulfuric acid with sodium hydroxide solution and measures the temperature every 30 seconds. The t",
        "right": "Exothermic (1); ΔH is negative / ΔH < 0 (1)"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "A common mistake is to calculate Ea from zero (taking the peak at 200 kJ mol⁻¹ as Ea) rather than measuring from the reactants level (200 − 80 = 120). Ea is always measured from the reactants level.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: The energy level diagram for a reaction shows the following energy values: Reactants: 80 kJ mol⁻¹ Peak (transition state",
        "right": "Ea = 200 − 80 = 120 kJ mol⁻¹ (1); ΔH = 120 − 80 = +40 kJ mol⁻¹ (1)"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often forget to multiply the number of N–H bonds by 2 (the coefficient of NH₃). Each NH₃ has 3 N–H bonds, so 2NH₃ has 6 N–H bonds. Missing the coefficient is the most common error in bond energy calculations.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: The reaction between nitrogen and hydrogen to form ammonia is: N₂(g) + 3H₂(g) → 2NH₃(g) Bond energies (kJ mol⁻¹): N≡N = ",
        "right": "1 × N≡N (triple bond) broken (1); 3 × H–H bonds broken (1)"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Linking a temperature RISE with a positive ΔH. A rise in temperature means energy is RELEASED, so ΔH is NEGATIVE.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student adds dilute hydrochloric acid to potassium hydroxide solution. The temperature rises by 7 °C. (a) State whethe",
        "right": "Exothermic (1); ΔH negative / ΔH < 0 (1)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain in terms of bond breaking and bond making why methane combustion is exothermic.",
        "marks": "3 Marks",
        "points": [
          "Energy is absorbed to <strong>break bonds</strong> in CH₄ and O₂ (endothermic), and energy is released when <strong>new bonds are made</strong> in CO₂ and H₂O (exothermic).",
          "<strong>More energy is released making new bonds than is absorbed breaking old bonds</strong>, so overall ΔH is negative."
        ],
        "hook": "💥 MEXOBENDO: Payout from making bonds beats cost of breaking bonds!"
      },
      {
        "q": "In mixing 25 cm³ HCl with 25 cm³ NaOH in a polystyrene cup, what total mass m is used in Q = mcΔT, and how do you account for cooling?",
        "marks": "4 Marks",
        "points": [
          "Combined volume = 50 cm³ → assume density = 1 g/cm³, so <strong>m = 50 g</strong>.",
          "Plot temp vs time before & after mixing and <strong>extrapolate the cooling line back to time of mixing</strong> to find true maximum ΔT."
        ],
        "hook": "📈 Add both volumes (25+25=50 g) + extrapolate cooling line!"
      },
      {
        "q": "Describe how to measure the molar enthalpy of combustion of ethanol using a spirit burner and copper calorimeter can.",
        "marks": "4 Marks",
        "points": [
          "Measure known mass/volume of water into copper can & record initial temp; weigh spirit burner + cap before lighting.",
          "Burn beneath draught-shielded can, stirring water until temp rises ~20 °C; extinguish with cap & <strong>reweigh burner immediately</strong> (prevents evaporation loss).",
          "Calculate Q = mcΔT, convert to kJ, divide by moles burned (mass loss ÷ 46), attach <strong>negative sign</strong>."
        ],
        "hook": "🕯️ Cap the wick immediately so ethanol doesn't evaporate unburned!"
      }
    ]
  },
  "chem-rates": {
    "topicId": "chem-rates",
    "specCode": "Edexcel 4CH1",
    "specRefs": "Edexcel 4CH1 · 3.9–3.22C",
    "epTitle": "Disappearing X-Cross, Catalyst Shortcuts & Stubborn Le Chatelier",
    "mnemonics": [
      {
        "label": "Temperature & Catalysts via Collision Theory (3.15–3.16)",
        "hook": "🏔️ Temp jumps higher over the wall; Catalyst builds a lower tunnel through it!",
        "detail": "(a) Particles gain <strong>kinetic energy</strong> → move faster (more frequent collisions) AND a much <strong>larger proportion of collisions have energy ≥ activation energy (Ea)</strong>. · (b) Catalyst provides an <strong>alternative reaction pathway with a lower activation energy</strong>, so more colliding particles exceed Ea (chemically unchanged at end)."
      },
      {
        "label": "Dynamic Equilibrium & Le Chatelier (3.21C–3.22C)",
        "hook": "❄️ Cool it down → Shifts Exothermic to warm back up!",
        "detail": "Dynamic equilibrium (closed system): <strong>rate of forward reaction = rate of reverse reaction</strong>, and <strong>concentrations of reactants and products remain constant</strong>. · Forward is exothermic (-58 kJ/mol) → cooling shifts equilibrium <strong>right (exothermic direction)</strong> → mixture turns <strong>paler / less brown</strong> as more colourless N₂O₄ forms."
      },
      {
        "label": "Drawing Tangents & Why Reactions Slow Down (3.11 & 3.15)",
        "hook": "📉 High Conc → Used Up → Limiting Reactant Gone (Flat)!",
        "detail": "<strong>Steepest at t = 0</strong>: reactant concentration is highest → maximum collision frequency. · <strong>Gets shallower</strong>: reactants are used up → concentration falls → fewer collisions per second."
      },
      {
        "label": "Factors Affecting Rate of Reaction",
        "hook": "Identify which variable changes, then explain using collision frequency OR collision energy OR both.",
        "detail": "Higher concentration/pressure → more particles per unit volume → more frequent collisions → faster rate."
      },
      {
        "label": "Measuring Rate & Interpreting Rate Graphs",
        "hook": "When comparing rate graphs: check (1) initial gradient — tells you relative rate; (2) final plateau — tells you how much product formed (amount of reactant).",
        "detail": "Rate = change in quantity of product (or reactant) ÷ time taken."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4CH1 · 3.20C",
        "wrong": "At dynamic equilibrium, the reactions stop and the concentrations of reactants and products are equal.",
        "verdict": "🚨 DOUBLE EQUILIBRIUM SIN!",
        "why": "Neither stops NOR equal! Both reactions keep going at EQUAL RATES, and concentrations stay CONSTANT!",
        "right": "Forward and reverse reactions continue at equal rates; concentrations remain constant."
      },
      {
        "spec": "Edexcel 4CH1 · 3.21C",
        "wrong": "Adding powdered iron catalyst to N2 + 3H2 ⇌ 2NH3 shifts equilibrium to the right and increases % yield of ammonia.",
        "verdict": "🚨 CATALYSTS NEVER SHIFT EQUILIBRIUM!",
        "why": "Catalysts speed up forward AND backward reactions equally — reaches equilibrium faster, SAME yield!",
        "right": "A catalyst increases rates equally in both directions and has NO effect on equilibrium position/yield."
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often state 'particles collide more frequently' as the only explanation, omitting the crucial point that a greater proportion of collisions exceed Ea. The energy effect is more important than the frequency effect for temperature.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student reacts zinc with dilute sulfuric acid and collects the hydrogen gas produced. She repeats the experiment at a ",
        "right": "Rate increases at higher temperature (1); Particles have more/greater kinetic energy at higher temperature (1)"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Confusing 'yield' (the equilibrium position) with 'rate'. Students sometimes say high temperature is needed for 'a better yield' — it is not; high temperature gives a faster rate but a LOWER yield for an exothermic reaction.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Consider the equilibrium: 2SO2(g) + O2(g) ⇌ 2SO3(g) ΔH = −196 kJ/mol (a) State the conditions of temperature and pressur",
        "right": "Low temperature stated (1); Forward reaction is exothermic / lower temperature shifts equilibrium in exothermic direction / toward right (1)"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students sometimes say 'the reaction produces more sulfur' at higher concentration — the amount of precipitate is the same; what changes is how quickly it forms.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student uses the 'disappearing cross' method to investigate the rate of the reaction between sodium thiosulfate soluti",
        "right": "Rate ∝ 1/time / rate = 1/t (1); Shorter time = faster rate (1)"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Listing 'stir the mixture' or 'add more acid' (more volume at the same concentration) — neither reliably increases the rate per the collision-theory marks expected here.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Magnesium ribbon reacts with dilute hydrochloric acid to produce hydrogen gas: Mg(s) + 2HCl(aq) → MgCl2(aq) + H2(g). (a)",
        "right": "One correct method: increase concentration / increase surface area (smaller pieces or powder) / add a catalyst (1); A second, different correct method (1)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain using collision theory and activation energy how (a) raising temperature and (b) adding a catalyst increase reaction rate.",
        "marks": "4 Marks",
        "points": [
          "(a) Particles gain <strong>kinetic energy</strong> → move faster (more frequent collisions) AND a much <strong>larger proportion of collisions have energy ≥ activation energy (Ea)</strong>.",
          "(b) Catalyst provides an <strong>alternative reaction pathway with a lower activation energy</strong>, so more colliding particles exceed Ea (chemically unchanged at end)."
        ],
        "hook": "🏔️ Temp jumps higher over the wall; Catalyst builds a lower tunnel through it!"
      },
      {
        "q": "State two features of dynamic equilibrium and explain how cooling affects 2NO₂(g, brown) ⇌ N₂O₄(g, colourless), ΔH = -58 kJ/mol.",
        "marks": "4 Marks",
        "points": [
          "Dynamic equilibrium (closed system): <strong>rate of forward reaction = rate of reverse reaction</strong>, and <strong>concentrations of reactants and products remain constant</strong>.",
          "Forward is exothermic (-58 kJ/mol) → cooling shifts equilibrium <strong>right (exothermic direction)</strong> → mixture turns <strong>paler / less brown</strong> as more colourless N₂O₄ forms."
        ],
        "hook": "❄️ Cool it down → Shifts Exothermic to warm back up!"
      },
      {
        "q": "Explain why the gradient of a gas-volume vs time curve starts steep, gets shallower, and becomes horizontal.",
        "marks": "3 Marks",
        "points": [
          "<strong>Steepest at t = 0</strong>: reactant concentration is highest → maximum collision frequency.",
          "<strong>Gets shallower</strong>: reactants are used up → concentration falls → fewer collisions per second.",
          "<strong>Horizontal plateau</strong>: <strong>limiting reactant is completely used up</strong> → reaction stops."
        ],
        "hook": "📉 High Conc → Used Up → Limiting Reactant Gone (Flat)!"
      }
    ]
  },
  "chem-acids-bases": {
    "topicId": "chem-acids-bases",
    "specCode": "Edexcel 4CH1",
    "specRefs": "Edexcel 4CH1 · 2.28–2.43C",
    "epTitle": "Hot-Pink Phenolphthalein, Excess Copper Oxide & Precipitate Matchmaking",
    "mnemonics": [
      {
        "label": "Comparing All 3 Salt Preparation Methods (2.39–2.42C)",
        "hook": "🧂 Excess Base · Titration (SNAP) · Precipitation (Insoluble)!",
        "detail": "(a) <strong>Excess insoluble base/carbonate</strong>: warm H₂SO₄(aq) + excess MgO or MgCO₃ → filter excess solid → heat to crystallisation point, cool, filter & pat dry. · (b) <strong>Titration</strong> (K⁺ salt, soluble alkali): KOH(aq) + HNO₃(aq) with phenolphthalein to find exact titre → repeat without indicator → crystallise."
      },
      {
        "label": "Brønsted-Lowry Proton Transfer (2.33C)",
        "hook": "⚾ Proton Donor = Acid; Proton Catcher = Base!",
        "detail": "<strong>H₂O donates H⁺</strong> → acts as the <strong>acid</strong>; <strong>NH₃ accepts H⁺</strong> → acts as the <strong>base</strong>."
      },
      {
        "label": "Titration Apparatus Rinsing & Precision (2.42C)",
        "hook": "🧪 Burette ±0.05 cm³ · Flask = Distilled H₂O Only!",
        "detail": "Burette has much finer graduations (reads to ±0.05 cm³) and a tap for drop-by-drop addition near the end-point. · (a) Rinse pipette with the <strong>solution it will measure</strong> (water droplets would dilute it); (b) Rinse conical flask with <strong>distilled water</strong> (does not change the exact number of moles already pipetted in)."
      },
      {
        "label": "Acids and Alkalis: Ion Definitions",
        "hook": "Identify the characteristic ion",
        "detail": "Acids produce H⁺(aq) in solution; the H⁺ ion (proton) is what makes solutions acidic."
      },
      {
        "label": "The pH Scale and Indicators",
        "hook": "Read the colour, estimate the pH range",
        "detail": "pH scale: 0–14; pH < 7 acidic, pH = 7 neutral, pH > 7 alkaline."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4CH1 · 2.39",
        "wrong": "To make copper(II) sulfate, add excess copper metal to dilute sulfuric acid until fizzing stops.",
        "verdict": "🚨 COPPER IS BELOW HYDROGEN!",
        "why": "You'll be waiting till retirement — copper doesn't displace hydrogen from dilute acid! Use CuO or CuCO3!",
        "right": "Copper is less reactive than hydrogen so does not react with dilute H2SO4; use copper(II) oxide or carbonate."
      },
      {
        "spec": "Edexcel 4CH1 · 2.34",
        "wrong": "Universal indicator is the best indicator for an acid-alkali titration because it shows every pH value.",
        "verdict": "🚨 WORST INDICATOR FOR TITRATIONS!",
        "why": "Gradual rainbow = impossible to spot the exact drop! Use phenolphthalein or methyl orange!",
        "right": "Universal indicator has no sharp single-drop colour change; use methyl orange or phenolphthalein."
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Writing MgCl instead of MgCl₂ — magnesium forms Mg²⁺ ions so two Cl⁻ ions are needed. Also omitting state symbols entirely.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Write the balanced chemical equation, including state symbols, for the reaction of magnesium with dilute hydrochloric ac",
        "right": "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g) — correct formulae and balancing [1 mark]; Correct state symbols throughout [1 mark]"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Confusing strength with concentration — stating that ethanoic acid has a higher pH because it is 'less concentrated'. Both solutions are 0.1 mol/dm³; the difference is the degree of dissociation.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student has 0.1 mol/dm³ solutions of hydrochloric acid (HCl) and ethanoic acid (CH₃COOH). She measures the pH of each ",
        "right": "(a) HCl has the lower pH [1]; (a) HCl fully dissociates / is a strong acid, producing more H⁺ ions [1]"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Adding the acid to the base rather than the base to the acid — while both work here, the question asks you to add excess base to acid. A common omission is not explaining WHY excess solid is used (to consume all the acid).",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student wishes to prepare a pure dry sample of copper(II) sulfate crystals (CuSO₄·5H₂O) starting from copper(II) oxide",
        "right": "CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l) correct and balanced [1]; Add excess CuO to acid; stir until no more dissolves / black residue remains [1]"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Defining an acid as something 'corrosive' or 'sour' rather than in terms of H⁺ ions; confusing alkali (soluble base) with all bases.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Define the terms 'acid' and 'alkali' in terms of the ions they produce in aqueous solution. [2]",
        "right": "Acid produces H⁺(aq) / hydrogen ions in solution (1); Alkali produces OH⁻(aq) / hydroxide ions in solution (1)"
      }
    ],
    "rapidChecks": [
      {
        "q": "State the method and reagents needed to prepare pure dry samples of (a) MgSO₄·7H₂O, (b) KNO₃, and (c) AgCl.",
        "marks": "6 Marks",
        "points": [
          "(a) <strong>Excess insoluble base/carbonate</strong>: warm H₂SO₄(aq) + excess MgO or MgCO₃ → filter excess solid → heat to crystallisation point, cool, filter & pat dry.",
          "(b) <strong>Titration</strong> (K⁺ salt, soluble alkali): KOH(aq) + HNO₃(aq) with phenolphthalein to find exact titre → repeat without indicator → crystallise.",
          "(c) <strong>Precipitation</strong> (insoluble salt): mix AgNO₃(aq) + NaCl(aq) → filter white AgCl(s) → <strong>wash with distilled water</strong> → dry."
        ],
        "hook": "🧂 Excess Base · Titration (SNAP) · Precipitation (Insoluble)!"
      },
      {
        "q": "Identify the acid and base in NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq).",
        "marks": "2 Marks",
        "points": [
          "<strong>H₂O donates H⁺</strong> → acts as the <strong>acid</strong>; <strong>NH₃ accepts H⁺</strong> → acts as the <strong>base</strong>."
        ],
        "hook": "⚾ Proton Donor = Acid; Proton Catcher = Base!"
      },
      {
        "q": "Explain why a burette outperforms a measuring cylinder and what liquid should rinse (a) the pipette and (b) the conical flask.",
        "marks": "4 Marks",
        "points": [
          "Burette has much finer graduations (reads to ±0.05 cm³) and a tap for drop-by-drop addition near the end-point.",
          "(a) Rinse pipette with the <strong>solution it will measure</strong> (water droplets would dilute it); (b) Rinse conical flask with <strong>distilled water</strong> (does not change the exact number of moles already pipetted in)."
        ],
        "hook": "🧪 Burette ±0.05 cm³ · Flask = Distilled H₂O Only!"
      }
    ]
  },
  "chem-metals": {
    "topicId": "chem-metals",
    "specCode": "Edexcel 4CH1",
    "specRefs": "Edexcel 4CH1 · 2.15–2.27C",
    "epTitle": "Displacement Muggers, Blast-Furnace Slag & Cryolite Aluminium",
    "mnemonics": [
      {
        "label": "Blast Furnace Equations & Slag (2.23C–2.24C)",
        "hook": "🔥 Coke heats + makes CO; Limestone mops up sandy SiO₂ as slag!",
        "detail": "Coke burns exothermically: <strong>C + O₂ → CO₂</strong>, then forms reducing agent: <strong>CO₂ + C → 2CO</strong>. · Reduction of ore: <strong>Fe₂O₃ + 3CO → 2Fe + 3CO₂</strong>."
      },
      {
        "label": "Why Alloys Are Harder Than Pure Metals (2.27C)",
        "hook": "🧱 Different-sized atoms jam the sliding layers!",
        "detail": "Pure iron has regular rows of identical-sized Fe²⁺ ions that slide easily when force is applied. · Steel contains <strong>different-sized carbon atoms</strong> that <strong>distort/disrupt the regular layers</strong>, making it much <strong>harder for layers to slide</strong> over one another."
      },
      {
        "label": "Thermite Redox & Metal Uses (2.20 & 2.26C)",
        "hook": "⚡ Say LOW DENSITY (never 'lightweight')!",
        "detail": "<strong>Fe₂O₃ is the oxidising agent</strong> because it gives oxygen to Al (or Fe³⁺ accepts electrons from Al, oxidising Al). · Overhead cables: <strong>good electrical conductor</strong> AND <strong>low density</strong> (doesn't sag pylons heavily)."
      },
      {
        "label": "The Reactivity Series",
        "hook": "Rank by observations — water, acid, oxygen reactions each give evidence",
        "detail": "Order (most reactive first): K, Na, Ca, Mg, Al, (C), Zn, Fe, (H), Cu, Ag, Au."
      },
      {
        "label": "Displacement Reactions and Links to Extraction",
        "hook": "Check position in reactivity series before predicting displacement",
        "detail": "A more reactive metal displaces a less reactive metal from its salt solution or oxide."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4CH1 · 2.21",
        "wrong": "Zinc-coated garden buckets last longer because zinc rusts instead of the iron underneath.",
        "verdict": "🚨 ZINC CANNOT 'RUST'!",
        "why": "ONLY IRON AND STEEL RUST! Say 'zinc oxidises / corrodes preferentially'!",
        "right": "More reactive zinc loses electrons / oxidises (corrodes) in preference to iron."
      },
      {
        "spec": "Edexcel 4CH1 · 2.26C",
        "wrong": "Overhead electricity cables are made of aluminium because aluminium is light and strong.",
        "verdict": "🚨 VAGUE 'LIGHT' SCORES ZERO!",
        "why": "Say LOW DENSITY and GOOD ELECTRICAL CONDUCTOR!",
        "right": "Use scientific properties: low density + good conductor of electricity."
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often forget state symbols or write MgSO₄ without balancing. Also, some say carbon dioxide is produced — bubbles here are hydrogen, not CO₂.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe, with a balanced equation, what happens when magnesium is added to dilute sulfuric acid. State the observations",
        "right": "Mg is above hydrogen in the reactivity series / Mg displaces hydrogen from acid; Magnesium dissolves / the solid disappears"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often reverse the logic — saying iron requires electrolysis because it is 'more reactive'. Always check positions relative to carbon in the series.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain, using the reactivity series, why aluminium is extracted by electrolysis but iron is extracted by reduction with",
        "right": "Aluminium is above carbon in the reactivity series; Al₂O₃ is too stable / carbon cannot reduce Al₂O₃"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often say Q requires electrolysis because they confuse 'unreactive metal' with 'requires high-energy extraction'. Very unreactive metals (Cu, Ag, Au) actually need the LEAST energy to extract.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student investigates the reactivity of three metals P, Q, and R using the following results: - Metal P reacts slowly w",
        "right": "(a) Hydrogen / H₂; (b) R is most reactive — reacts with cold water, so above Mg in the series"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Saying the IONS move to carry the current. It is the delocalised electrons that move; the ions stay in place (they only vibrate).",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain, in terms of structure, why metals are (a) good conductors of electricity and (b) malleable. [4]",
        "right": "(a) Delocalised / free electrons present; (a) Electrons move / flow to carry charge / current"
      }
    ],
    "rapidChecks": [
      {
        "q": "Give four key equations occurring in the Blast Furnace extraction of iron, explaining the role of coke and limestone.",
        "marks": "5 Marks",
        "points": [
          "Coke burns exothermically: <strong>C + O₂ → CO₂</strong>, then forms reducing agent: <strong>CO₂ + C → 2CO</strong>.",
          "Reduction of ore: <strong>Fe₂O₃ + 3CO → 2Fe + 3CO₂</strong>.",
          "Removing acidic sand (SiO₂): <strong>CaCO₃ → CaO + CO₂</strong>, then neutralisation <strong>CaO + SiO₂ → CaSiO₃ (slag)</strong>."
        ],
        "hook": "🔥 Coke heats + makes CO; Limestone mops up sandy SiO₂ as slag!"
      },
      {
        "q": "Explain with particle-layer structure why steel is much harder than pure iron.",
        "marks": "3 Marks",
        "points": [
          "Pure iron has regular rows of identical-sized Fe²⁺ ions that slide easily when force is applied.",
          "Steel contains <strong>different-sized carbon atoms</strong> that <strong>distort/disrupt the regular layers</strong>, making it much <strong>harder for layers to slide</strong> over one another."
        ],
        "hook": "🧱 Different-sized atoms jam the sliding layers!"
      },
      {
        "q": "In Fe₂O₃ + 2Al → 2Fe + Al₂O₃, identify the oxidising agent with reason, and give two properties making aluminium suitable for overhead power cables.",
        "marks": "4 Marks",
        "points": [
          "<strong>Fe₂O₃ is the oxidising agent</strong> because it gives oxygen to Al (or Fe³⁺ accepts electrons from Al, oxidising Al).",
          "Overhead cables: <strong>good electrical conductor</strong> AND <strong>low density</strong> (doesn't sag pylons heavily)."
        ],
        "hook": "⚡ Say LOW DENSITY (never 'lightweight')!"
      }
    ]
  },
  "chem-environment": {
    "topicId": "chem-environment",
    "specCode": "Edexcel 4CH1",
    "specRefs": "Edexcel 4CH1 · 2.9–2.14 & 2.44",
    "epTitle": "21% Copper-Syringe Air, CO Haemoglobin Hijack & Acid Rain",
    "mnemonics": [
      {
        "label": "% Oxygen in Air Practical (2.10)",
        "hook": "🔥 Excess Copper + Cool Before Reading = Exact 21%!",
        "detail": "<strong>Insufficient copper</strong> used (all Cu oxidised before all O₂ reacted — some pink Cu must remain at the end to prove excess). · Apparatus was <strong>not cooled back to room temperature</strong> before reading final gas volume (hot gas occupies larger volume), OR heating stopped too early."
      },
      {
        "label": "Origins of CO, SO₂, and NOₓ (4.14–4.16 / 2.14)",
        "hook": "🚗 CO = Limited O₂ · SO₂ = Dirty Fuel · NOₓ = Scorching Air!",
        "detail": "<strong>CO</strong>: incomplete combustion of hydrocarbon fuel in a <strong>limited supply of oxygen</strong>. · <strong>SO₂</strong>: sulfur impurities naturally present in fossil fuels react with oxygen."
      },
      {
        "label": "Properties & Uses of Carbon Dioxide (2.11–2.12)",
        "hook": "🧯 Heavy + Non-flammable smothers O₂; Pressure dissolves fizz!",
        "detail": "(a) CO₂ is <strong>denser than air</strong> and <strong>does not support combustion</strong>, forming a heavy blanket over fire that excludes oxygen. · (b) CO₂ is moderately <strong>soluble in water under pressure</strong> and reacts slightly to form weakly acidic <strong>carbonic acid (H₂CO₃)</strong> giving tangy fizz."
      },
      {
        "label": "Treatment of the Domestic Water Supply",
        "hook": "Compare methods by energy cost and scale",
        "detail": "Filtration through sand/gravel beds removes suspended solids and some microorganisms."
      },
      {
        "label": "Air Pollutants: Sources and Adverse Effects",
        "hook": "Separate source from effect",
        "detail": "CO forms from incomplete combustion; it is toxic because it binds to haemoglobin."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4CH1 · 2.13",
        "wrong": "Carbon dioxide causes global warming by creating a hole in the ozone layer that lets extra UV light in.",
        "verdict": "🚨 GREENHOUSE ≠ OZONE HOLE!",
        "why": "CFCs damaged ozone; CO2 absorbs outgoing INFRARED radiation!",
        "right": "Greenhouse gases absorb long-wavelength infrared radiation emitted from Earth's surface and re-emit it."
      },
      {
        "spec": "Edexcel 4CH1 · 2.14",
        "wrong": "Nitrogen oxides in car exhausts form when nitrogen impurities inside petrol burn.",
        "verdict": "🚨 PETROL HAS ALMOST ZERO NITROGEN!",
        "why": "N2 and O2 come from ordinary AIR reacting at extreme engine spark temperatures!",
        "right": "High temperature inside car engines causes nitrogen and oxygen from the AIR to react."
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Many students confuse the two water tests — saying CuSO₄ turns pink (it turns blue) or saying cobalt chloride turns blue when wet (it starts blue and turns pink). Also, students often say 'filter the water' as a purity test, which only removes suspended solids, not dissolved impurities.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student suspects that a liquid is water but wants to confirm its presence and test whether it is pure. Describe TWO te",
        "right": "Test 1: anhydrous CuSO₄ / white to blue [1]; Test 2: cobalt(II) chloride paper / blue to pink [1]"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often state SO₂ directly dissolves in water to form sulfuric acid. In reality, SO₂ forms the weaker H₂SO₃ (sulfurous acid) directly; atmospheric oxidation to SO₃ is needed for H₂SO₄. At IGCSE, either pathway is acceptable, but confusing the two oxides or acids loses marks.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain, using balanced equations where appropriate, how sulfur dioxide released from a coal-fired power station contrib",
        "right": "S + O₂ → SO₂ (balanced) [1]; SO₂ oxidised to SO₃ in atmosphere (2SO₂ + O₂ → 2SO₃) OR SO₂ dissolves directly; forms H₂SO₄/H₂SO₃ in rain [1]"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "A very common error is to say greenhouse gases 'trap heat like a blanket' without explaining the mechanism — this loses the marks about IR absorption. Another error is confusing the greenhouse effect (which is natural and necessary) with its enhancement (which is the problem). Claiming that ozone depletion causes global warming is also incorrect at IGCSE.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain the greenhouse effect and discuss how increasing concentrations of methane from agricultural sources contribute ",
        "right": "Solar radiation (visible/UV) passes through atmosphere and warms surface [1]; Surface re-emits infrared / longer wavelength radiation [1]"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Mixing up the two tests, e.g. saying copper(II) sulfate turns pink or that cobalt chloride paper turns blue when wet.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: State the colour change seen in each test for water: (a) anhydrous copper(II) sulfate, and (b) cobalt(II) chloride paper",
        "right": "(a) white to blue [1]; (b) blue to pink [1]"
      }
    ],
    "rapidChecks": [
      {
        "q": "State two reasons why a student's copper-syringe experiment might give 17% O₂ instead of 21%.",
        "marks": "4 Marks",
        "points": [
          "<strong>Insufficient copper</strong> used (all Cu oxidised before all O₂ reacted — some pink Cu must remain at the end to prove excess).",
          "Apparatus was <strong>not cooled back to room temperature</strong> before reading final gas volume (hot gas occupies larger volume), OR heating stopped too early."
        ],
        "hook": "🔥 Excess Copper + Cool Before Reading = Exact 21%!"
      },
      {
        "q": "State exactly how Carbon Monoxide, Sulfur Dioxide, and Nitrogen Oxides form when fuels burn in car/power-station engines.",
        "marks": "4 Marks",
        "points": [
          "<strong>CO</strong>: incomplete combustion of hydrocarbon fuel in a <strong>limited supply of oxygen</strong>.",
          "<strong>SO₂</strong>: sulfur impurities naturally present in fossil fuels react with oxygen.",
          "<strong>NOₓ</strong>: <strong>high temperature</strong> inside internal combustion engines provides Ea for <strong>N₂ and O₂ from the air</strong> to react."
        ],
        "hook": "🚗 CO = Limited O₂ · SO₂ = Dirty Fuel · NOₓ = Scorching Air!"
      },
      {
        "q": "Explain why CO₂ is used in (a) fire extinguishers and (b) carbonated drinks.",
        "marks": "3 Marks",
        "points": [
          "(a) CO₂ is <strong>denser than air</strong> and <strong>does not support combustion</strong>, forming a heavy blanket over fire that excludes oxygen.",
          "(b) CO₂ is moderately <strong>soluble in water under pressure</strong> and reacts slightly to form weakly acidic <strong>carbonic acid (H₂CO₃)</strong> giving tangy fizz."
        ],
        "hook": "🧯 Heavy + Non-flammable smothers O₂; Pressure dissolves fizz!"
      }
    ]
  },
  "chem-organic": {
    "topicId": "chem-organic",
    "specCode": "Edexcel 4CH1",
    "specRefs": "Edexcel 4CH1 · 4.1–4.47C",
    "epTitle": "Crude-Oil Towers, Bromine-Water Glow-Downs & Fruity Ester Perfumes",
    "mnemonics": [
      {
        "label": "Fermentation vs Hydration of Ethene (4.29C–4.30C)",
        "hook": "🍞 Eco Slow Batch (Yeast 30 °C) vs ⚡ Fast Pure Fossil (Ethene 300 °C, 65 atm, H₃PO₄)!",
        "detail": "<strong>Fermentation</strong> (30 °C, anaerobic, yeast enzymes): uses <strong>renewable</strong> sugar crops & low energy/temp, but is a <strong>slow batch process</strong> yielding impure (~15%) aqueous ethanol needing fractional distillation. · <strong>Hydration of ethene</strong> (300 °C, 60–70 atm, H₃PO₄ catalyst): <strong>fast continuous</strong> process with 100% atom economy & pure product, but uses <strong>non-renewable</strong> crude-oil ethene and high energy."
      },
      {
        "label": "Addition vs Condensation Polymerisation (4.44C–4.47C)",
        "hook": "🔗 C=C Single Product vs Diol+Diacid + Water Out!",
        "detail": "Monomers: Addition uses 1 monomer type with a <strong>C=C double bond</strong>; Condensation uses monomers with <strong>two functional groups at both ends</strong> (e.g. diol + dicarboxylic acid). · Products: Addition forms <strong>1 product only</strong> (polymer); Condensation eliminates a <strong>small molecule (H₂O)</strong> alongside the polyester."
      },
      {
        "label": "Structural Isomers & UV Alkane Substitution (4.11 & 4.22)",
        "hook": "☀️ Alkanes need UV sunbeds for Br₂ substitution; Alkenes add Br₂ in the dark!",
        "detail": "<strong>Structural isomers</strong>: same molecular formula, different structural formulae — e.g. butane (CH₃CH₂CH₂CH₃) and methylpropane (CH₃CH(CH₃)CH₃). · Substitution under <strong>ultraviolet (UV) light</strong>: <strong>CH₄ + Br₂ → CH₃Br + HBr</strong> (bromomethane + hydrogen bromide)."
      },
      {
        "label": "Naming, Formulae and Structural Isomerism",
        "hook": "To find isomers: keep the atom count fixed, then redraw the carbon skeleton with a branch or move the functional group.",
        "detail": "Names = stem (carbon count: meth, eth, prop, but…) + suffix (-ane, -ene, -ol, -oic acid)."
      },
      {
        "label": "Alkenes, Cracking and Addition Reactions",
        "hook": "Balance cracking equations by counting C and H atoms on each side.",
        "detail": "Alkenes are unsaturated (contain C=C); general formula CₙH₂ₙ."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4CH1 · 4.28",
        "wrong": "Shaking ethene with bromine water turns it from orange to clear.",
        "verdict": "🚨 NEVER WRITE 'CLEAR'!",
        "why": "Clear means see-through! Write COLOURLESS!",
        "right": "Unsaturated alkenes turn bromine water from orange to COLOURLESS."
      },
      {
        "spec": "Edexcel 4CH1 · 4.41C",
        "wrong": "Warming methanol with propanoic acid and acid catalyst forms propyl methanoate.",
        "verdict": "🚨 BACKWARDS ESTER NAME!",
        "why": "Methanol gives METHYL; propanoic acid gives PROPANOATE → METHYL PROPANOATE!",
        "right": "Alcohol → alkyl (-yl) prefix; Carboxylic acid → alkanoate (-oate) suffix."
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Saying the solution turns brown or black — bromine water goes colourless (or very pale yellow), not brown. Also, some students forget to specify 'in the dark', which excludes the UV-driven radical substitution that would occur with alkanes in bright light.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe the test you would carry out to distinguish between ethane and ethene, and state the result for each gas. (3 ma",
        "right": "Reagent: bromine water / bromine solution (must not say 'bromine gas'); Observation for ethene: decolourises / turns colourless / orange to colourless"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Confusing the two routes — e.g., saying fermentation uses a catalyst, or that hydration uses yeast. Also, omitting 'anaerobic' for fermentation conditions.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Compare the manufacture of ethanol by fermentation and by hydration of ethene. In your answer, include the raw materials",
        "right": "Fermentation raw material: glucose / sugars / sugar cane / biomass (renewable); Fermentation conditions: yeast / enzyme zymase; ~35 °C; anaerobic/no air"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "For (b), students often draw ethene (forgetting the Cl atoms) or draw the repeat unit instead of restoring the C=C. Always check: the monomer must contain a double bond.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A polymer has the repeat unit shown: [–CH₂–CCl₂–]ₙ. (a) Name the type of polymerisation that produced this polymer. (b) ",
        "right": "(a) Addition polymerisation (1 mark); (b) Monomer: CH₂=CCl₂ / 1,1-dichloroethene — must show C=C double bond (1 mark)"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Saying crude oil is a 'compound'. It is a mixture, which is why a physical method works.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: State what is meant by a hydrocarbon and explain why crude oil can be separated by fractional distillation rather than b",
        "right": "Hydrocarbon = compound of carbon and hydrogen only (1); Crude oil is a mixture / hydrocarbons not chemically bonded together (1)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Evaluate making ethanol by yeast fermentation vs catalytic hydration of ethene.",
        "marks": "4 Marks",
        "points": [
          "<strong>Fermentation</strong> (30 °C, anaerobic, yeast enzymes): uses <strong>renewable</strong> sugar crops & low energy/temp, but is a <strong>slow batch process</strong> yielding impure (~15%) aqueous ethanol needing fractional distillation.",
          "<strong>Hydration of ethene</strong> (300 °C, 60–70 atm, H₃PO₄ catalyst): <strong>fast continuous</strong> process with 100% atom economy & pure product, but uses <strong>non-renewable</strong> crude-oil ethene and high energy."
        ],
        "hook": "🍞 Eco Slow Batch (Yeast 30 °C) vs ⚡ Fast Pure Fossil (Ethene 300 °C, 65 atm, H₃PO₄)!"
      },
      {
        "q": "State three differences between addition polymerisation and condensation polymerisation.",
        "marks": "4 Marks",
        "points": [
          "Monomers: Addition uses 1 monomer type with a <strong>C=C double bond</strong>; Condensation uses monomers with <strong>two functional groups at both ends</strong> (e.g. diol + dicarboxylic acid).",
          "Products: Addition forms <strong>1 product only</strong> (polymer); Condensation eliminates a <strong>small molecule (H₂O)</strong> alongside the polyester.",
          "Disposal: Addition polymers are inert/non-biodegradable; <strong>biopolyesters are biodegradable</strong>."
        ],
        "hook": "🔗 C=C Single Product vs Diol+Diacid + Water Out!"
      },
      {
        "q": "Define structural isomers (giving both isomers of C₄H₁₀) and write the equation + condition for methane reacting with bromine.",
        "marks": "4 Marks",
        "points": [
          "<strong>Structural isomers</strong>: same molecular formula, different structural formulae — e.g. butane (CH₃CH₂CH₂CH₃) and methylpropane (CH₃CH(CH₃)CH₃).",
          "Substitution under <strong>ultraviolet (UV) light</strong>: <strong>CH₄ + Br₂ → CH₃Br + HBr</strong> (bromomethane + hydrogen bromide)."
        ],
        "hook": "☀️ Alkanes need UV sunbeds for Br₂ substitution; Alkenes add Br₂ in the dark!"
      }
    ]
  },
  "chem-analysis": {
    "topicId": "chem-analysis",
    "specCode": "Edexcel 4CH1",
    "specRefs": "Edexcel 4CH1 · 1.8–1.13 & 2.44–2.50",
    "epTitle": "Forensic Rf Pencils, Lilac Fireworks & Halide Cream-Cheese Shades",
    "mnemonics": [
      {
        "label": "Complete Cation Identification Master Key (2.46–2.47)",
        "hook": "🎆 Crimson Li · Yellow Na · Lilac K · Orange-Red Ca · Blue-Green Cu!",
        "detail": "Flames: <strong>Li⁺ = red/crimson, Na⁺ = yellow, K⁺ = lilac, Ca²⁺ = orange-red, Cu²⁺ = blue-green</strong>. · NaOH(aq): <strong>Cu²⁺ = blue ppt, Fe²⁺ = green ppt, Fe³⁺ = brown/red-brown ppt</strong>; <strong>NH₄⁺</strong> + warm NaOH → NH₃ gas turns damp red litmus blue."
      },
      {
        "label": "Complete Anion Identification Master Key (2.48)",
        "hook": "🥛 Milk (White Cl⁻) → Cream (Br⁻) → Butter (Yellow I⁻)!",
        "detail": "<strong>CO₃²⁻</strong>: dilute HCl → effervescence, gas turns limewater cloudy. · <strong>SO₄²⁻</strong>: dilute HCl + BaCl₂(aq) → <strong>white ppt</strong>."
      },
      {
        "label": "Simple vs Fractional Distillation & Rf (1.9–1.13)",
        "hook": "🌡️ Close BPs need a Fractionating Column; Rf = Spot ÷ Solvent Front!",
        "detail": "Liquids are miscible with relatively close boiling points → glass-bead <strong>fractionating column</strong> gives repeated condensation/evaporation so pure lower-BP ethanol distils over first at 78 °C. · <strong>Rf = distance moved by spot from baseline ÷ distance moved by solvent front from baseline</strong>."
      },
      {
        "label": "Purity and Why It Matters",
        "hook": "Compare to a literature value",
        "detail": "A pure substance has a sharp, fixed melting point and boiling point."
      },
      {
        "label": "Separation and Purification Techniques",
        "hook": "Match technique to physical property (solubility, boiling point, particle size)",
        "detail": "Filtration: separates insoluble solid from liquid — residue stays on paper, filtrate passes through."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4CH1 · 1.10",
        "wrong": "Draw the chromatography baseline in blue ballpoint pen 2 cm from the bottom of the paper.",
        "verdict": "🚨 INK DISSOLVES IN SOLVENT!",
        "why": "Your baseline will race up the paper with the samples! Use PENCIL!",
        "right": "Draw baseline in pencil because graphite is insoluble in the solvent."
      },
      {
        "spec": "Edexcel 4CH1 · 2.45",
        "wrong": "Test for chlorine gas by holding dry blue litmus paper in the gas; it turns blue to purple.",
        "verdict": "🚨 DAMP LITMUS → RED THEN BLEACHED WHITE!",
        "why": "Dry chlorine doesn't form bleach acid, and Cl2 bleaches litmus WHITE!",
        "right": "Chlorine turns DAMP blue litmus paper red and then bleaches it white."
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Students often forget to acidify the solution before adding silver nitrate, which can give false positives with carbonate or sulfite ions present.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student performs a flame test on an unknown compound and observes a yellow flame. They then dissolve the compound in w",
        "right": "Na⁺ / sodium ion identified from yellow flame [1]; Cl⁻ / chloride ion identified from white precipitate with acidified AgNO3 [1]"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "A common error is measuring distances from the solvent surface or the top of the paper rather than from the pencil baseline, giving incorrect Rf values.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A mixture of two inks (A and B) is analysed by paper chromatography. The solvent front moves 12.6 cm from the baseline. ",
        "right": "Rf(A) = 5.04 / 12.6 = 0.40 [1]; Rf(B) = 10.08 / 12.6 = 0.80 [1]"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Using the everyday meaning of 'pure' (e.g. natural or unadulterated) rather than the chemical definition of one type of particle.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Define what is meant by a 'pure substance' in chemistry, and state the two physical measurements used to test purity. [3",
        "right": "Pure substance = only one element / one compound (single type of particle) [1]; Melting point used to test purity (sharp/fixed for pure) [1]"
      },
      {
        "spec": "Edexcel 4CH1 · Structured QA",
        "wrong": "Swapping the terms 'residue' and 'filtrate', or not naming both fractions.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe how filtration separates an insoluble solid from a liquid. Name the solid and liquid fractions. [3 marks]",
        "right": "Pour mixture through filter paper in a funnel [1]; Solid trapped on the paper = residue [1]"
      }
    ],
    "rapidChecks": [
      {
        "q": "List the five flame-test colours and four NaOH(aq) cation tests required by Edexcel.",
        "marks": "5 Marks",
        "points": [
          "Flames: <strong>Li⁺ = red/crimson, Na⁺ = yellow, K⁺ = lilac, Ca²⁺ = orange-red, Cu²⁺ = blue-green</strong>.",
          "NaOH(aq): <strong>Cu²⁺ = blue ppt, Fe²⁺ = green ppt, Fe³⁺ = brown/red-brown ppt</strong>; <strong>NH₄⁺</strong> + warm NaOH → NH₃ gas turns damp red litmus blue."
        ],
        "hook": "🎆 Crimson Li · Yellow Na · Lilac K · Orange-Red Ca · Blue-Green Cu!"
      },
      {
        "q": "Give reagents and positive observations for CO₃²⁻, SO₄²⁻, Cl⁻, Br⁻, and I⁻.",
        "marks": "4 Marks",
        "points": [
          "<strong>CO₃²⁻</strong>: dilute HCl → effervescence, gas turns limewater cloudy.",
          "<strong>SO₄²⁻</strong>: dilute HCl + BaCl₂(aq) → <strong>white ppt</strong>.",
          "<strong>Cl⁻ / Br⁻ / I⁻</strong>: dilute <strong>HNO₃ + AgNO₃(aq)</strong> → <strong>white / cream / yellow ppt</strong> (milk → cream → butter!)."
        ],
        "hook": "🥛 Milk (White Cl⁻) → Cream (Br⁻) → Butter (Yellow I⁻)!"
      },
      {
        "q": "When separating ethanol (BP 78 °C) from water (BP 100 °C), why use fractional distillation instead of simple distillation, and how is Rf calculated?",
        "marks": "4 Marks",
        "points": [
          "Liquids are miscible with relatively close boiling points → glass-bead <strong>fractionating column</strong> gives repeated condensation/evaporation so pure lower-BP ethanol distils over first at 78 °C.",
          "<strong>Rf = distance moved by spot from baseline ÷ distance moved by solvent front from baseline</strong>."
        ],
        "hook": "🌡️ Close BPs need a Fractionating Column; Rf = Spot ÷ Solvent Front!"
      }
    ]
  },
  "phys-motion": {
    "topicId": "phys-motion",
    "specCode": "Edexcel 4PH1",
    "specRefs": "Edexcel 4PH1 · 1.1–1.10 & 1.20–1.21",
    "epTitle": "Velocity-Time Area Triangles, SUVAT Traps & Hairdryer Skydivers",
    "mnemonics": [
      {
        "label": "Skydiver Terminal Velocity Narrative (1.21)",
        "hook": "🪂 Speed ↑ → Drag ↑ → Resultant ↓ → Drag = Weight = Zero Acceleration!",
        "detail": "Initially only <strong>weight acts downward</strong> (drag = 0), so large downward resultant force causes acceleration. · As speed increases, <strong>air resistance (drag) increases</strong> upward, reducing downward resultant force and decreasing acceleration."
      },
      {
        "label": "Thinking vs Braking Distance (1.19–1.20)",
        "hook": "🚗 Brain = Thinking; Tyres/Brakes/Mass = Braking; Speed = BOTH!",
        "detail": "<strong>Tiredness</strong>: increases reaction time → increases <strong>thinking distance only</strong>. · <strong>Icy roads / heavier mass</strong>: less friction / larger KE → increases <strong>braking distance only</strong>."
      },
      {
        "label": "Light-Gate Trolley Acceleration Practical (1.3 & 1.5)",
        "hook": "🚦 Card width ÷ block time = Instant Speed at each Gate!",
        "detail": "Measure width <strong>L</strong> of interrupt card on trolley with a ruler. · Gate 1 records block time t₁ → initial velocity <strong>u = L / t₁</strong>; Gate 2 records t₂ → final velocity <strong>v = L / t₂</strong>."
      },
      {
        "label": "Distance, Displacement, Speed and Velocity",
        "hook": "Draw a number line or sketch and mark start/finish to identify displacement direction.",
        "detail": "Distance is a scalar (magnitude only); displacement is a vector (magnitude + direction)."
      },
      {
        "label": "Acceleration",
        "hook": "Always define a positive direction first, then assign signs to u and v.",
        "detail": "a = (v − u) / t, units m/s²."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4PH1 · 1.6",
        "wrong": "On a velocity-time graph, a flat horizontal line at 15 m/s shows the car has stopped at traffic lights.",
        "verdict": "🚨 v-t ≠ d-t GRAPH TRAP!",
        "why": "Stopped at 15 metres per second?! That's running a red light at 54 km/h!",
        "right": "Horizontal line on v-t graph = constant velocity (zero acceleration); stopped requires v = 0 on the x-axis."
      },
      {
        "spec": "Edexcel 4PH1 · 1.21",
        "wrong": "When the skydiver opens her parachute, air resistance exceeds weight so she accelerates upwards for 3 seconds.",
        "verdict": "🚨 SHE NEVER FLIES UPWARDS!",
        "why": "Upward resultant force while moving DOWNWARD means she DECELERATES (slows down while still falling)!",
        "right": "Resultant force acts upward opposite to downward velocity, causing rapid deceleration to a lower downward terminal velocity."
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Using base × height (72 m) instead of ½ × base × height for the triangular area, doubling the acceleration-phase distance.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A cyclist starts from rest and accelerates uniformly to 12 m/s in 6 s. She then travels at constant speed for 10 s. (a) ",
        "right": "a = (v − u) / t or correct substitution (1 mark); a = 2.0 m/s² with unit (1 mark)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Stating that 'forces balance so the drop stops' — it stops accelerating, not stops moving; it continues at terminal velocity.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe, in terms of forces, the motion of a raindrop falling from a cloud to the ground. Include the terms weight, dra",
        "right": "Initially weight > drag / resultant force is downward (1 mark); Raindrop accelerates downward (1 mark)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Using the time from 0 to 9 (total 9 s) as the base of one big triangle, giving ½ × 9 × 20 = 90 m — coincidentally correct here but wrong method; would fail if the peak speed occurred at a different time.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: The velocity–time graph for an object shows a straight line from (0, 0) to (5 s, 20 m/s), then a straight line from (5 s",
        "right": "Phase 1: a = (20 − 0) / 5 (1 mark); a = 4.0 m/s² (1 mark)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Calling velocity a scalar — it is a vector because it specifies a direction as well as a magnitude.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: (a) State the difference between a scalar quantity and a vector quantity. [2] (b) For each of the following, state wheth",
        "right": "Scalar = magnitude only (1 mark); Vector = magnitude and direction (1 mark)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain in terms of forces why a falling ball reaches a constant terminal velocity.",
        "marks": "5 Marks",
        "points": [
          "Initially only <strong>weight acts downward</strong> (drag = 0), so large downward resultant force causes acceleration.",
          "As speed increases, <strong>air resistance (drag) increases</strong> upward, reducing downward resultant force and decreasing acceleration.",
          "Eventually <strong>air resistance equals weight</strong> → <strong>resultant force is zero</strong> → zero acceleration → constant <strong>terminal velocity</strong>."
        ],
        "hook": "🪂 Speed ↑ → Drag ↑ → Resultant ↓ → Drag = Weight = Zero Acceleration!"
      },
      {
        "q": "Categorise tiredness, icy roads, heavier car load, and higher speed by whether they increase thinking distance, braking distance, or both.",
        "marks": "4 Marks",
        "points": [
          "<strong>Tiredness</strong>: increases reaction time → increases <strong>thinking distance only</strong>.",
          "<strong>Icy roads / heavier mass</strong>: less friction / larger KE → increases <strong>braking distance only</strong>.",
          "<strong>Higher speed</strong>: increases <strong>BOTH</strong> (d_think ∝ v, d_brake ∝ v²)."
        ],
        "hook": "🚗 Brain = Thinking; Tyres/Brakes/Mass = Braking; Speed = BOTH!"
      },
      {
        "q": "Describe how to use a single card and two light gates connected to a data logger to find the acceleration of a trolley on a ramp.",
        "marks": "4 Marks",
        "points": [
          "Measure width <strong>L</strong> of interrupt card on trolley with a ruler.",
          "Gate 1 records block time t₁ → initial velocity <strong>u = L / t₁</strong>; Gate 2 records t₂ → final velocity <strong>v = L / t₂</strong>.",
          "Timer records travel time <strong>T</strong> from Gate 1 to Gate 2 → calculate <strong>a = (v − u) / T</strong>."
        ],
        "hook": "🚦 Card width ÷ block time = Instant Speed at each Gate!"
      }
    ]
  },
  "phys-forces": {
    "topicId": "phys-forces",
    "specCode": "Edexcel 4PH1",
    "specRefs": "Edexcel 4PH1 · 1.11–1.33P",
    "epTitle": "g = 10 N/kg Law, Stretched Springs, Seesaw Moments & Egg Crumple Zones",
    "mnemonics": [
      {
        "label": "Crumple Zones & Seatbelts (F = Δp/Δt) (1.27P)",
        "hook": "🛡️ Longer Time Δt → Smaller Rate of Δp → Smaller Force F!",
        "detail": "Passenger/car undergoes the same change in momentum (Δp = mv − mu to zero). · Deforming crumple zone <strong>increases the time taken (Δt)</strong> to come to rest."
      },
      {
        "label": "Hooke's Law Practical (1.22–1.24)",
        "hook": "📏 Subtract original length + Eye-level pointer avoids parallax!",
        "detail": "Measure unstretched length with ruler (+ pointer at eye level to avoid parallax); hang slotted masses in 1 N steps and record new length → calculate <strong>extension = new − original length</strong>. · Plot Force vs Extension: <strong>straight line through the origin</strong> confirms Hooke's Law up to limit of proportionality. <strong>Elastic</strong> = returns to original length when force removed."
      },
      {
        "label": "Cannon / Skater Recoil Conservation of Momentum (1.25P–1.26P)",
        "hook": "⛸️ Zero Before = Zero After → Heavy skater moves 10× slower backwards!",
        "detail": "Total momentum before = <strong>0 kg m/s</strong> (both stationary). · By conservation of momentum, total momentum after = 0: (5 × 8.0) + (50 × v) = 0 → 40 + 50v = 0 → <strong>v = −0.80 m/s (0.80 m/s backwards)</strong>."
      },
      {
        "label": "Newton's Laws of Motion",
        "hook": "draw a free-body diagram first",
        "detail": "N1L: zero resultant → constant velocity (including rest)."
      },
      {
        "label": "Hooke's Law and Force–Extension Graphs",
        "hook": "read gradient carefully — rise/run in correct units (N and m)",
        "detail": "F = kx, where k is the spring constant in N/m."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4PH1 · 1.27P",
        "wrong": "Seatbelts protect drivers because they absorb the momentum so the driver doesn't lose as much momentum.",
        "verdict": "🚨 SAME Δp — LONGER TIME!",
        "why": "Whether you hit the windscreen or stretch a seatbelt, your velocity drops from 20 m/s to 0 — SAME Δp! It increases TIME!",
        "right": "Same change in momentum occurs over a longer time (F = Δp/t), reducing force."
      },
      {
        "spec": "Edexcel 4PH1 · 1.22",
        "wrong": "A spring has unstretched length 12 cm and stretches to 18 cm under a 3 N load, so spring constant k = 3 / 18 N/cm.",
        "verdict": "🚨 DIVIDED BY TOTAL LENGTH INSTEAD OF EXTENSION!",
        "why": "Extension = 18 − 12 = 6 cm → k = 3 / 6 = 0.5 N/cm!",
        "right": "Always subtract original unstretched length to find extension e = l - l0."
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Confusing the limit of proportionality with the elastic limit — the elastic limit (where permanent deformation begins) is typically slightly beyond the limit of proportionality.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student hangs different masses from a spring and measures the extension each time. The results show a straight line th",
        "right": "Hooke's law / F = kx stated; k identified as spring constant"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Forgetting to account for the existing 20 N weight's moment when placing the third weight — students often write 10 × d = 18 instead of 10 × d = 8.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A uniform plank of length 2.0 m is balanced on a pivot at its centre. A 30 N weight is placed 0.6 m to the left of the p",
        "right": "ACW moment = 30 × 0.6 = 18 N m; CW moment = 20 × 0.5 = 10 N m"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Using v = 15/2 = 7.5 m/s instead of applying conservation of momentum — this only works if both masses are equal.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A 1200 kg car travelling at 15 m/s collides with a stationary 800 kg car. They stick together after the collision (perfe",
        "right": "p_before = 1200 × 15 = 18 000 kg m/s; Conservation of momentum stated or applied"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Giving 'speeds up' and 'slows down' as two separate effects — both are changes of speed and count as one effect.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Define a force and state two effects a force can have on an object. State the SI unit of force.",
        "right": "Force is a push or a pull; Effect 1: change shape / change speed / change direction"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain using momentum why a car crumple zone reduces injury in a crash.",
        "marks": "3 Marks",
        "points": [
          "Passenger/car undergoes the same change in momentum (Δp = mv − mu to zero).",
          "Deforming crumple zone <strong>increases the time taken (Δt)</strong> to come to rest.",
          "Since <strong>F = (mv − mu) / t</strong>, larger Δt <strong>reduces the rate of change of momentum / resultant force</strong> acting on passengers."
        ],
        "hook": "🛡️ Longer Time Δt → Smaller Rate of Δp → Smaller Force F!"
      },
      {
        "q": "Describe how to test whether a spring obeys Hooke's Law and define elastic behaviour.",
        "marks": "4 Marks",
        "points": [
          "Measure unstretched length with ruler (+ pointer at eye level to avoid parallax); hang slotted masses in 1 N steps and record new length → calculate <strong>extension = new − original length</strong>.",
          "Plot Force vs Extension: <strong>straight line through the origin</strong> confirms Hooke's Law up to limit of proportionality. <strong>Elastic</strong> = returns to original length when force removed."
        ],
        "hook": "📏 Subtract original length + Eye-level pointer avoids parallax!"
      },
      {
        "q": "A stationary 50 kg ice skater throws a 5 kg medicine ball forward at +8.0 m/s. Calculate the skater's recoil velocity.",
        "marks": "4 Marks",
        "points": [
          "Total momentum before = <strong>0 kg m/s</strong> (both stationary).",
          "By conservation of momentum, total momentum after = 0: (5 × 8.0) + (50 × v) = 0 → 40 + 50v = 0 → <strong>v = −0.80 m/s (0.80 m/s backwards)</strong>."
        ],
        "hook": "⛸️ Zero Before = Zero After → Heavy skater moves 10× slower backwards!"
      }
    ]
  },
  "phys-energy": {
    "topicId": "phys-energy",
    "specCode": "Edexcel 4PH1",
    "specRefs": "Edexcel 4PH1 · 4.1–4.18",
    "epTitle": "Speed-Squared KE Trap, Sankey Fat Arrows & Matte-Black Boba Mugs",
    "mnemonics": [
      {
        "label": "Vacuum Flask / Loft Insulation Design (4.6–4.10)",
        "hook": "🏠 Trapped Air stops Conduction & Convection; Shiny Foil bounces IR!",
        "detail": "Fibreglass traps small pockets of air: air is a poor <strong>conductor</strong> (insulator), and trapping it in tiny pockets prevents <strong>convection currents</strong> circulating. · Shiny silver foil has low emissivity & high reflectivity, reflecting <strong>infrared radiation</strong> back into the room."
      },
      {
        "label": "Crane Motor Efficiency & Power (4.11–4.17)",
        "hook": "🏗️ Useful mgh ÷ Input Pt = Clean % Efficiency!",
        "detail": "Useful output = GPE = mgh = 150 × 10 × 2.0 = <strong>3,000 J</strong>. · Total electrical input = P × t = 500 × 8 = <strong>4,000 J</strong>."
      },
      {
        "label": "Comparing IR Absorption of Matte Black vs Shiny Cans (4.9–4.10)",
        "hook": "🥫 Same Distance + Same Water Mass + Lids On = Fair IR Test!",
        "detail": "Use identical metal cans filled with <strong>equal volume/mass of water at the same starting temperature</strong>. · Place both at the <strong>exact same distance</strong> from a central radiant heater (equal IR intensity) with insulated lids (preventing convection/evaporation difference) → measure ΔT after 10 min; matte black shows larger temp rise."
      },
      {
        "label": "Energy Stores and Transfers",
        "hook": "List all stores at each stage",
        "detail": "There are 8 key energy stores: kinetic, GPE, chemical, elastic, nuclear, internal (thermal), electrostatic, magnetic."
      },
      {
        "label": "Conservation of Energy and Key Equations",
        "hook": "Identify the energy stores at start and end",
        "detail": "Conservation of energy: total energy is always constant in a closed system."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4PH1 · 4.7",
        "wrong": "When water at the bottom of a pan is heated, the water particles expand, become less dense, and float to the top.",
        "verdict": "🚨 PARTICLES NEVER EXPAND!",
        "why": "Individual H2O molecules do not puff up like marshmallows! Particles move faster and further apart so the FLUID becomes less dense!",
        "right": "Heated water molecules move faster & further apart → bulk liquid expands → becomes less dense and rises."
      },
      {
        "spec": "Edexcel 4PH1 · 4.2",
        "wrong": "A lamp is 25% efficient because 25% of the electrical energy stays useful light and 75% is destroyed.",
        "verdict": "🚨 ENERGY IS NEVER DESTROYED!",
        "why": "75% is dissipated/transferred to the thermal store of the surroundings!",
        "right": "Conservation of energy: energy cannot be created or destroyed, only transferred/dissipated."
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Using v = u + at or other kinematics — energy conservation is the intended route and is simpler here.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A skier of mass 70 kg starts from rest at the top of a ski slope that is 40 m high. Assuming no friction, calculate (a) ",
        "right": "GPE = mgh used correctly (1 mark); GPE = 28 000 J (1 mark)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Multiplying by efficiency instead of dividing: 30 000 × 0.60 = 18 000 W (incorrect — this would be less than useful output).",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A pump raises 200 kg of water per second from a well 15 m deep. (a) Calculate the useful power output of the pump. (b) I",
        "right": "P_useful = mgh/t or mgh per second (1 mark); P_useful = 30 000 W / 30 kW (1 mark)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Saying wind produces 'no pollution' without qualification — manufacturing turbines and transmitting electricity do have environmental impacts.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Compare the advantages and disadvantages of using (a) coal-fired power stations and (b) wind turbines to generate electr",
        "right": "Coal: reliable / not weather-dependent (1 mark); Coal: releases CO₂ / greenhouse gas / contributes to climate change (1 mark)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Calling electricity an energy 'store' — it is a transfer mechanism (electrical working), not a store.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A torch contains a battery, a bulb and a switch. (a) Name the energy store in the battery. [1] (b) Describe the sequence",
        "right": "Chemical store (1 mark); Energy transferred electrically / by electrical working from battery to bulb (1 mark)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain how trapped air in fibreglass loft insulation AND shiny foil backing reduce household heat loss.",
        "marks": "4 Marks",
        "points": [
          "Fibreglass traps small pockets of air: air is a poor <strong>conductor</strong> (insulator), and trapping it in tiny pockets prevents <strong>convection currents</strong> circulating.",
          "Shiny silver foil has low emissivity & high reflectivity, reflecting <strong>infrared radiation</strong> back into the room."
        ],
        "hook": "🏠 Trapped Air stops Conduction & Convection; Shiny Foil bounces IR!"
      },
      {
        "q": "An electric motor draws 500 W for 8 s to lift a 150 kg crate by 2.0 m (g = 10 N/kg). Calculate useful GPE gained, total input energy, and % efficiency.",
        "marks": "4 Marks",
        "points": [
          "Useful output = GPE = mgh = 150 × 10 × 2.0 = <strong>3,000 J</strong>.",
          "Total electrical input = P × t = 500 × 8 = <strong>4,000 J</strong>.",
          "Efficiency = (3,000 ÷ 4,000) × 100% = <strong>75%</strong> (1,000 J dissipated as heat via friction & wire resistance)."
        ],
        "hook": "🏗️ Useful mgh ÷ Input Pt = Clean % Efficiency!"
      },
      {
        "q": "Describe a fair test comparing infrared absorption by a matte black can and a shiny silver can placed near a radiant heater.",
        "marks": "4 Marks",
        "points": [
          "Use identical metal cans filled with <strong>equal volume/mass of water at the same starting temperature</strong>.",
          "Place both at the <strong>exact same distance</strong> from a central radiant heater (equal IR intensity) with insulated lids (preventing convection/evaporation difference) → measure ΔT after 10 min; matte black shows larger temp rise."
        ],
        "hook": "🥫 Same Distance + Same Water Mass + Lids On = Fair IR Test!"
      }
    ]
  },
  "phys-thermal": {
    "topicId": "phys-thermal",
    "specCode": "Edexcel 4PH1",
    "specRefs": "Edexcel 4PH1 · 5.8P–5.22",
    "epTitle": "−273 °C Absolute Zero, Kelvin Traps & Piston Gas Laws",
    "mnemonics": [
      {
        "label": "Particle Explanation of Gas Pressure vs T (5.15–5.21)",
        "hook": "🔥 Faster molecules = Hit Oftener + Hit Harder → Bigger F/A!",
        "detail": "Higher Kelvin temperature increases the <strong>average kinetic energy and speed</strong> of gas molecules. · Molecules collide with the container walls <strong>more frequently</strong> AND each collision exerts a <strong>greater force (larger change in momentum)</strong>."
      },
      {
        "label": "Liquid Pressure P = hρg & SHC Practical (5.4–5.7 & 5.13P)",
        "hook": "🌊 Total Pressure = Air on top + hρg water column!",
        "detail": "Water pressure ΔP = hρg = 15 × 1,030 × 10 = <strong>154,500 Pa</strong>. · Total pressure = P_atm + hρg = 101,000 + 154,500 = <strong>255,500 Pa (256 kPa)</strong>."
      },
      {
        "label": "Density of an Irregular Solid Practical (5.1–5.3)",
        "hook": "🪨 Weigh DRY first + Eye-Level Meniscus!",
        "detail": "Measure mass <strong>m</strong> of the <strong>dry</strong> pebble on an electronic balance. · Fill a measuring cylinder partly with water, record initial volume V₁ at eye level (bottom of meniscus); gently lower pebble on thin thread until submerged, record V₂ → <strong>V = V₂ − V₁</strong>."
      },
      {
        "label": "The Kinetic Particle Model",
        "hook": "visualise particle scale",
        "detail": "Solids: closely packed, regular lattice, vibrate about fixed positions."
      },
      {
        "label": "Temperature, Internal Energy and Thermal Expansion",
        "hook": "link macroscopic observation to particle-level explanation",
        "detail": "Temperature measures average kinetic energy of particles; it is NOT the same as internal energy."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4PH1 · 5.20",
        "wrong": "Heating a gas from 20 °C to 40 °C doubles the average kinetic energy of its molecules.",
        "verdict": "🚨 CELSIUS RATIO CRIME!",
        "why": "293 K to 313 K is barely a 7% bump! Average KE is proportional to KELVIN temperature!",
        "right": "Average KE ∝ Kelvin temperature (T in K = °C + 273)."
      },
      {
        "spec": "Edexcel 4PH1 · 5.4",
        "wrong": "Sharpening a knife increases the force your hand applies to the tomato.",
        "verdict": "🚨 SAME FORCE — SMALLER AREA!",
        "why": "Blade edge has tiny surface area A → since P = F/A, smaller A produces HUGE PRESSURE!",
        "right": "Sharp edge reduces contact area A so the same force F creates much larger pressure P = F/A."
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Many students describe only lattice vibration and forget the crucial role of free electrons in metals — the primary reason metals conduct so much better than non-metals.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain how thermal energy is transferred through a metal rod when one end is heated, using the kinetic particle model. ",
        "right": "Particles at the hot end gain kinetic energy / vibrate more vigorously; Energy transferred to neighbours by collisions / lattice vibration"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Using the final temperature (100 °C) instead of the temperature change (ΔT = 80 °C) — always subtract initial from final temperature.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student heats 0.25 kg of water in a kettle. The water starts at 20 °C and reaches 100 °C. Calculate the energy transfe",
        "right": "ΔT = 80 °C / 80 K (correct temperature change); Correct substitution into E = mcΔT"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Students often state that the vacuum 'stops radiation' — it does not. The vacuum eliminates conduction and convection; the silvered walls reduce radiation.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A vacuum flask keeps hot liquids hot and cold liquids cold. Explain how the design of a vacuum flask reduces heat transf",
        "right": "Conduction: vacuum has no / very few particles, so conduction cannot occur (1 mark); Conduction: glass is a poor conductor (1 mark, credit either point)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Confusing liquids and gases by saying liquid particles are 'far apart' — liquid particles are close together (only the arrangement is random), it is gas particles that are widely separated.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Using the kinetic particle model, describe the arrangement, separation and motion of the particles in (a) a solid, (b) a",
        "right": "Solid: regularly arranged / lattice and closely packed (1); Solid: vibrate about fixed positions / cannot move past each other (1)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain in terms of particles why heating a fixed mass of gas in a rigid container increases its pressure.",
        "marks": "4 Marks",
        "points": [
          "Higher Kelvin temperature increases the <strong>average kinetic energy and speed</strong> of gas molecules.",
          "Molecules collide with the container walls <strong>more frequently</strong> AND each collision exerts a <strong>greater force (larger change in momentum)</strong>.",
          "Since <strong>Pressure = Force / Area</strong> (and area is constant), pressure increases."
        ],
        "hook": "🔥 Faster molecules = Hit Oftener + Hit Harder → Bigger F/A!"
      },
      {
        "q": "A diver descends 15 m in seawater (ρ = 1,030 kg/m³, g = 10 N/kg) where atmospheric pressure is 101,000 Pa. Calculate total pressure on the diver.",
        "marks": "4 Marks",
        "points": [
          "Water pressure ΔP = hρg = 15 × 1,030 × 10 = <strong>154,500 Pa</strong>.",
          "Total pressure = P_atm + hρg = 101,000 + 154,500 = <strong>255,500 Pa (256 kPa)</strong>."
        ],
        "hook": "🌊 Total Pressure = Air on top + hρg water column!"
      },
      {
        "q": "Describe how to determine the density of a small irregular pebble accurately.",
        "marks": "4 Marks",
        "points": [
          "Measure mass <strong>m</strong> of the <strong>dry</strong> pebble on an electronic balance.",
          "Fill a measuring cylinder partly with water, record initial volume V₁ at eye level (bottom of meniscus); gently lower pebble on thin thread until submerged, record V₂ → <strong>V = V₂ − V₁</strong>.",
          "Calculate <strong>ρ = m / V</strong>."
        ],
        "hook": "🪨 Weigh DRY first + Eye-Level Meniscus!"
      }
    ]
  },
  "phys-waves": {
    "topicId": "phys-waves",
    "specCode": "Edexcel 4PH1",
    "specRefs": "Edexcel 4PH1 · 3.1–3.9 & 3.14–3.22",
    "epTitle": "Ripple-Tank Wavefronts, Snell's Ray-Box & Diamond Critical Angles",
    "mnemonics": [
      {
        "label": "Two Conditions & Optical Fibre Cladding (3.20–3.21)",
        "hook": "💡 Denser-to-Less-Dense + i > c = 100% Bounce!",
        "detail": "Condition 1: Light must travel from a <strong>more optically dense medium (higher n core) toward a less optically dense medium (lower n cladding/air)</strong>. · Condition 2: Angle of incidence <strong>i must be greater than the critical angle c</strong> (sin c = 1/n) at every bounce along the inner core wall."
      },
      {
        "label": "Refraction Practical Precision (3.15–3.17)",
        "hook": "📐 Narrow beam + Sharp X crosses + sin i vs sin r gradient!",
        "detail": "Use a <strong>narrow single slit / thin beam</strong> and mark the <strong>centre</strong> of the beam with sharp pencil crosses far apart. · Repeat for <strong>at least 5 different angles of incidence</strong> (e.g. 20° to 70°) and plot <strong>sin i vs sin r</strong> so gradient averages out random protractor errors."
      },
      {
        "label": "Role of Cladding in Optical Fibres (3.14 & 3.21)",
        "hook": "🔬 High-n Core + Lower-n Cladding = Leak-Proof TIR!",
        "detail": "TIR requires light to meet a boundary with a <strong>less optically dense medium (n_core > n_cladding)</strong>. · Cladding protects the core surface from scratches/moisture and prevents light leaking between touching fibres in a bundle."
      },
      {
        "label": "Wave Quantities and the Wave Equation",
        "hook": "unit analysis",
        "detail": "T = 1/f: period and frequency are reciprocals."
      },
      {
        "label": "Reflection of Light",
        "hook": "draw a diagram",
        "detail": "Angles of incidence and reflection are measured from the normal, not the surface."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4PH1 · 3.5 & 3.14",
        "wrong": "When red light enters glass from air, its speed and frequency both decrease while wavelength stays constant.",
        "verdict": "🚨 FREQUENCY NEVER CHANGES IN REFRACTION!",
        "why": "If frequency changed, red light would change colour inside your spectacles!",
        "right": "Frequency f stays CONSTANT; wave speed v decreases so wavelength λ decreases (v = fλ)."
      },
      {
        "spec": "Edexcel 4PH1 · 3.15",
        "wrong": "When measuring wavelength in a ripple tank, measure from one crest to the adjacent trough.",
        "verdict": "🚨 CREST-TO-TROUGH IS ONLY HALF A WAVELENGTH (½λ)!",
        "why": "Measure CREST-TO-CREST (or across 10 wavelengths and divide by 10)!",
        "right": "Wavelength λ is the distance between two consecutive points in phase (crest to next crest)."
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Confusing period and frequency — e.g. writing T = 40/8 = 5 s instead of using T = 1/f. Also forgetting units on the final answer.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student measures that 40 complete water waves pass a fixed point in 8 seconds, and adjacent crests are 0.25 m apart. (",
        "right": "f = 40/8 = 5 Hz (1 mark); T = 1/5 = 0.2 s (1 mark)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Inverting Snell's law and writing n = sin r / sin i (giving n less than 1 for glass). Also: forgetting to check whether TIR occurs by comparing angles.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A ray of light in air strikes a glass block at an angle of incidence of 48°. The angle of refraction inside the glass is",
        "right": "n = sin 48° / sin 30° (correct substitution) (1 mark); n = 1.49 (accept 1.48–1.50) with no unit (1 mark)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "For part (b): using image height and object height instead of image and object distances (both methods are valid, but students sometimes mix them). For part (c): saying light is reflected by mirrors inside the fibre, rather than TIR.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A student uses a converging lens of focal length 5 cm to examine a postage stamp placed 3 cm from the lens. (a) State wh",
        "right": "Virtual (1 mark); Upright / same side as object; object inside F / inside focal length (1 mark)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Saying waves transfer 'particles' or matter — only energy is transferred.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: (a) State one difference between a transverse wave and a longitudinal wave. [1] (b) Give one example of each type of wav",
        "right": "Transverse = oscillation perpendicular to travel; longitudinal = oscillation parallel to travel (1 mark); Correct transverse example, e.g. light / water surface / string (1 mark)"
      }
    ],
    "rapidChecks": [
      {
        "q": "State both conditions required for Total Internal Reflection and explain how an optical fibre transmits light pulses round bends.",
        "marks": "4 Marks",
        "points": [
          "Condition 1: Light must travel from a <strong>more optically dense medium (higher n core) toward a less optically dense medium (lower n cladding/air)</strong>.",
          "Condition 2: Angle of incidence <strong>i must be greater than the critical angle c</strong> (sin c = 1/n) at every bounce along the inner core wall."
        ],
        "hook": "💡 Denser-to-Less-Dense + i > c = 100% Bounce!"
      },
      {
        "q": "Give three ways to improve accuracy when measuring refractive index with a ray box and Perspex block.",
        "marks": "4 Marks",
        "points": [
          "Use a <strong>narrow single slit / thin beam</strong> and mark the <strong>centre</strong> of the beam with sharp pencil crosses far apart.",
          "Repeat for <strong>at least 5 different angles of incidence</strong> (e.g. 20° to 70°) and plot <strong>sin i vs sin r</strong> so gradient averages out random protractor errors."
        ],
        "hook": "📐 Narrow beam + Sharp X crosses + sin i vs sin r gradient!"
      },
      {
        "q": "Explain why optical fibres in endoscopes have a high-refractive-index glass core surrounded by a lower-refractive-index glass cladding.",
        "marks": "3 Marks",
        "points": [
          "TIR requires light to meet a boundary with a <strong>less optically dense medium (n_core > n_cladding)</strong>.",
          "Cladding protects the core surface from scratches/moisture and prevents light leaking between touching fibres in a bundle."
        ],
        "hook": "🔬 High-n Core + Lower-n Cladding = Leak-Proof TIR!"
      }
    ]
  },
  "phys-sound-em": {
    "topicId": "phys-sound-em",
    "specCode": "Edexcel 4PH1",
    "specRefs": "Edexcel 4PH1 · 3.8–3.13 & 3.23–3.29P",
    "epTitle": "Ambulance Wavefront Squash, Oscilloscope Pitch & Gamma Sterilisers",
    "mnemonics": [
      {
        "label": "EM Spectrum Dangers & Precautions (3.10–3.13)",
        "hook": "☢️ Short λ = High f = High Ionising Punch!",
        "detail": "Higher frequency = <strong>greater energy per wave/photon</strong> = more ionising. · <strong>UV</strong>: damages surface cells (sunburn, skin cancer, snow blindness) → wear sunscreen & UV-absorbing glasses."
      },
      {
        "label": "Two-Microphone Speed of Sound Practical (3.24–3.25P)",
        "hook": "🎤 Two Mics + Electronic Timer = Zero Reaction-Time Error!",
        "detail": "Place two microphones a measured distance <strong>d</strong> apart (e.g. 2.00 m with metre rule) connected to a fast <strong>digital timer / dual-beam oscilloscope</strong>. · Tap two metal blocks near Mic 1 (starts timer) → stops at Mic 2 → record time <strong>t</strong>, repeat for several distances, and find gradient of d vs t (<strong>v = d / t</strong>)."
      },
      {
        "label": "Ultrasound Echo Depth Calculation (3.23–3.25P)",
        "hook": "🐬 Echoes go Down AND Up — Always ÷ 2!",
        "detail": "Total distance = v × t = 1,520 × 0.80 = 1,216 m → Depth = 1,216 ÷ 2 = <strong>608 m</strong>. · Ultrasound frequency is <strong>above 20,000 Hz (20 kHz)</strong>, exceeding the upper limit of human hearing (20 Hz – 20 kHz)."
      },
      {
        "label": "Sound as a Longitudinal Wave",
        "hook": "Visualise particle motion",
        "detail": "Sound is a longitudinal wave — particle vibrations are parallel to the direction of wave travel."
      },
      {
        "label": "Speed of Sound and Measuring It",
        "hook": "Use v = f × λ",
        "detail": "Speed of sound in air ≈ 330–340 m/s; faster in liquids and solids."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4PH1 · 3.10",
        "wrong": "Gamma rays reach Earth from a distant supernova much earlier than radio waves because gamma rays have higher frequency so travel faster in space.",
        "verdict": "🚨 ALL EM WAVES HAVE IDENTICAL VACUUM SPEED!",
        "why": "3.0 × 10^8 m/s for every single member of the EM family in a vacuum!",
        "right": "All electromagnetic waves travel at the same speed (3 × 10^8 m/s) in a vacuum."
      },
      {
        "spec": "Edexcel 4PH1 · 3.12",
        "wrong": "Microwave ovens cook food by emitting radioactive nuclear waves into water.",
        "verdict": "🚨 MICROWAVES ARE NON-IONISING EM WAVES, NOT NUCLEAR!",
        "why": "Zero radioactivity in your kitchen microwave — water molecules simply absorb microwave energy and heat up!",
        "right": "Microwaves are non-ionising electromagnetic waves absorbed by water/fat molecules in food."
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Stating that light travels faster than sound without explaining WHY sound cannot travel through a vacuum at all.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain why sound cannot travel through a vacuum, but light can.",
        "right": "Sound requires a medium / sound requires particles to vibrate; In a vacuum there are no particles / nothing to carry the vibration"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Forgetting to divide by 2 in part (a), giving 0.123 m instead of 0.0616 m.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A doctor uses an ultrasound scanner to find a kidney stone. A pulse is sent into the body and an echo is detected 80 mic",
        "right": "(a) Use of depth = (v × t) / 2 (or equivalent); (a) Correct substitution: 1540 × 80 × 10^-6"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Confusing infrared with ultraviolet, or placing visible light at the wrong position relative to UV and IR.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: State the order of the electromagnetic spectrum from lowest to highest frequency, and for any TWO regions, describe one ",
        "right": "Correct order of all seven regions (1 mark); Region 1: correct use stated (1 mark)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Describing the particles as travelling along with the wave, rather than vibrating about a fixed rest position.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe how a vibrating loudspeaker cone produces a sound wave in the air in front of it. Use the words compression and",
        "right": "Cone moving forward pushes particles together / creates a compression (high pressure); Cone moving back lets particles spread apart / creates a rarefaction (low pressure)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Link increasing frequency across the EM spectrum to hazard severity, naming hazards and precautions for UV and X-rays/Gamma.",
        "marks": "4 Marks",
        "points": [
          "Higher frequency = <strong>greater energy per wave/photon</strong> = more ionising.",
          "<strong>UV</strong>: damages surface cells (sunburn, skin cancer, snow blindness) → wear sunscreen & UV-absorbing glasses.",
          "<strong>X-rays & Gamma</strong>: penetrating ionising radiation mutates DNA / causes cancer → lead shielding, stand behind screen, film-badge dosimeters."
        ],
        "hook": "☢️ Short λ = High f = High Ionising Punch!"
      },
      {
        "q": "Describe an accurate lab method to measure the speed of sound in air without relying on human reaction time.",
        "marks": "4 Marks",
        "points": [
          "Place two microphones a measured distance <strong>d</strong> apart (e.g. 2.00 m with metre rule) connected to a fast <strong>digital timer / dual-beam oscilloscope</strong>.",
          "Tap two metal blocks near Mic 1 (starts timer) → stops at Mic 2 → record time <strong>t</strong>, repeat for several distances, and find gradient of d vs t (<strong>v = d / t</strong>)."
        ],
        "hook": "🎤 Two Mics + Electronic Timer = Zero Reaction-Time Error!"
      },
      {
        "q": "A ship sends an ultrasound pulse into water (v = 1,520 m/s) and detects the seabed echo 0.80 s later. Calculate seabed depth and state why humans can't hear ultrasound.",
        "marks": "3 Marks",
        "points": [
          "Total distance = v × t = 1,520 × 0.80 = 1,216 m → Depth = 1,216 ÷ 2 = <strong>608 m</strong>.",
          "Ultrasound frequency is <strong>above 20,000 Hz (20 kHz)</strong>, exceeding the upper limit of human hearing (20 Hz – 20 kHz)."
        ],
        "hook": "🐬 Echoes go Down AND Up — Always ÷ 2!"
      }
    ]
  },
  "phys-electricity": {
    "topicId": "phys-electricity",
    "specCode": "Edexcel 4PH1",
    "specRefs": "Edexcel 4PH1 · 2.1–2.28P",
    "epTitle": "E=QV Volt-Backpacks, Filament S-Curves & Balloon Hair Static",
    "mnemonics": [
      {
        "label": "Earth Wire + Fuse Fault Chain (2.2–2.3)",
        "hook": "🔌 Live hits Metal → Earth Surge → Fuse Melts → Safe!",
        "detail": "Current flows through the very low-resistance <strong>earth wire</strong> to ground, causing a <strong>very large surge in current</strong>. · Large current heats and <strong>melts the thin fuse wire</strong> in the live line, breaking the circuit so casing cannot electrocute user."
      },
      {
        "label": "Electrostatic Spray Painting (2.27P–2.28P)",
        "hook": "🎨 Like charges spread mist; Opposite charges hug the frame!",
        "detail": "Paint droplets all have the <strong>same (+) charge so they repel each other</strong>, spreading into a fine, even mist (no clumps). · Opposite charges attract: (+) paint is <strong>attracted to the (−) metal frame</strong>, coating evenly into awkward corners/back surfaces with far less wasted overspray."
      },
      {
        "label": "Thermistor / LDR Sensing Circuits (2.11–2.13)",
        "hook": "🌡️ Hotter → Thermistor R ↓ → Current I ↑ → V_fixed = IR ↑!",
        "detail": "As temperature increases, <strong>resistance of the thermistor decreases</strong> (TURD). · Total circuit resistance decreases → <strong>circuit current I increases</strong>."
      },
      {
        "label": "Current, Charge and EMF",
        "hook": "Write out what you know (I, Q, t, W, V)",
        "detail": "I = Q / t; current (A) = charge (C) ÷ time (s)."
      },
      {
        "label": "Resistance and Ohm's Law",
        "hook": "Sketch the I–V graph shape first before calculating",
        "detail": "R = V / I; unit is ohm (Ω)."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4PH1 · 2.24P",
        "wrong": "Rubbing an acetate rod with a cloth makes the rod positive because positive protons rub off the cloth onto the rod.",
        "verdict": "🚨 PROTON MOVEMENT CRIME!",
        "why": "If protons rubbed off your jumper, you'd be performing nuclear transmutation in your bedroom!",
        "right": "Acetate becomes positive because negative ELECTRONS transfer from the rod onto the cloth."
      },
      {
        "spec": "Edexcel 4PH1 · 2.9",
        "wrong": "Adding a second lamp in parallel with the first lamp increases the total resistance of the circuit.",
        "verdict": "🚨 PARALLEL PATHS LOWER TOTAL RESISTANCE!",
        "why": "Opening a second checkout lane at FairPrice reduces the bottleneck — total R drops and battery current rises!",
        "right": "Adding components in parallel provides an extra current path, decreasing total resistance."
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Students often calculate the total p.d. (9 V) divided by one resistor alone, ignoring that p.d. is shared in series.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A battery of e.m.f. 9 V is connected to a 6 Ω resistor and a 3 Ω resistor in series. (a) Calculate the total resistance ",
        "right": "R_T = 9 Ω (1 mark); I = V / R_T with V = 9 V / correct substitution (1 mark)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Choosing the 5 A fuse without checking if it exceeds the operating current (5.2 A > 5 A means it would blow immediately).",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A 1200 W kettle and a 60 W lamp are both connected to the 230 V mains supply. (a) Calculate the current drawn by the ket",
        "right": "I = P / V (1 mark); I = 1200 / 230 = 5.2 A (accept 5.0–5.3 A) (1 mark)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Saying 'the lamp is non-ohmic because it uses alternating current' — the non-linear behaviour is due to temperature change, not AC/DC.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain, using ideas about electrons, why a filament lamp has a non-linear (curved) I–V characteristic. In your answer i",
        "right": "Graph curves / becomes less steep at higher voltage (not a straight line) (1 mark); As current increases, filament temperature increases / the lamp gets hotter (1 mark)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Saying protons were transferred from rod to cloth — protons are fixed in the nucleus.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Name the type of charge on a polythene rod after it has been rubbed with a woollen cloth, and state which particles were",
        "right": "Negatively charged (1 mark); Electrons transferred from cloth to rod (1 mark)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain how an earth wire and fuse work together if a frayed live wire touches a toaster's metal casing, and why plastic hairdryers lack an earth wire.",
        "marks": "4 Marks",
        "points": [
          "Current flows through the very low-resistance <strong>earth wire</strong> to ground, causing a <strong>very large surge in current</strong>.",
          "Large current heats and <strong>melts the thin fuse wire</strong> in the live line, breaking the circuit so casing cannot electrocute user.",
          "Plastic casing is an electrical insulator (<strong>double insulation</strong>) — cannot become live, so no earth wire needed."
        ],
        "hook": "🔌 Live hits Metal → Earth Surge → Fuse Melts → Safe!"
      },
      {
        "q": "Explain two advantages of giving paint droplets a positive charge and a bicycle frame a negative charge.",
        "marks": "4 Marks",
        "points": [
          "Paint droplets all have the <strong>same (+) charge so they repel each other</strong>, spreading into a fine, even mist (no clumps).",
          "Opposite charges attract: (+) paint is <strong>attracted to the (−) metal frame</strong>, coating evenly into awkward corners/back surfaces with far less wasted overspray."
        ],
        "hook": "🎨 Like charges spread mist; Opposite charges hug the frame!"
      },
      {
        "q": "Explain how an NTC thermistor in series with a fixed resistor can produce an increasing voltmeter reading across the fixed resistor when a room gets hotter.",
        "marks": "4 Marks",
        "points": [
          "As temperature increases, <strong>resistance of the thermistor decreases</strong> (TURD).",
          "Total circuit resistance decreases → <strong>circuit current I increases</strong>.",
          "For the fixed resistor (constant R), <strong>V = I × R increases</strong> (it takes a larger share of the supply voltage)."
        ],
        "hook": "🌡️ Hotter → Thermistor R ↓ → Current I ↑ → V_fixed = IR ↑!"
      }
    ]
  },
  "phys-magnetism": {
    "topicId": "phys-magnetism",
    "specCode": "Edexcel 4PH1",
    "specRefs": "Edexcel 4PH1 · 6.1–6.20P",
    "epTitle": "Left-Hand Gang Signs, Split-Ring Motors & High-Voltage Grid Math",
    "mnemonics": [
      {
        "label": "How a Transformer Works & Grid Efficiency (6.17P & 6.20P)",
        "hook": "⚡ AC Primary → Changing Iron Flux → Secondary Cut; V ↑ means I ↓ means I²R Loss ↓↓!",
        "detail": "<strong>AC in primary coil</strong> produces a <strong>changing magnetic field</strong> in the laminated <strong>soft-iron core</strong>, which cuts the secondary coil (more turns Ns > Np) to <strong>induce a larger AC voltage</strong>. · For fixed power (P = VI), stepping up voltage <strong>reduces current I</strong> in transmission cables → reduces thermal energy wasted via <strong>P = I²R</strong> (step-down lowers V to safe 230 V before homes)."
      },
      {
        "label": "DC Motor & Split-Ring Commutator (6.12–6.14)",
        "hook": "🔄 Split-Ring flips current every 180° = non-stop spin!",
        "detail": "Current flows in opposite directions along opposite sides of the coil perpendicular to B-field → <strong>equal and opposite forces</strong> (up on one side, down on the other via Fleming's LHR) produce turning moment. · <strong>Split-ring commutator reverses current direction in the coil every half-turn (180°)</strong> so force keeps pushing rotation in the same continuous direction."
      },
      {
        "label": "Moving-Coil Loudspeaker vs Microphone (6.13–6.15)",
        "hook": "🔊 Speaker = Motor Effect; 🎤 Mic = Generator Induction!",
        "detail": "<strong>Loudspeaker (Motor effect)</strong>: AC in coil inside permanent magnetic field experiences a reversing force (Fleming's LHR) → vibrates cone → creates longitudinal sound waves. · <strong>Microphone (Electromagnetic induction)</strong>: sound waves vibrate diaphragm & coil inside magnetic field → coil cuts field lines → induces alternating voltage of matching frequency."
      },
      {
        "label": "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
        "hook": "Compare and contrast permanent vs temporary magnets using concrete examples.",
        "detail": "Soft iron loses magnetism easily (temporary); steel retains it (permanent)."
      },
      {
        "label": "The Motor Effect and Fleming's Left-Hand Rule",
        "hook": "Use FLHR mnemonic: FBI (Field-first finger, Current-seCond finger, Motion-thuMb) — same letter order as the rule.",
        "detail": "Motor effect: a current-carrying conductor in a magnetic field experiences a force F = BIL."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4PH1 · 6.15",
        "wrong": "Placing a very strong neodymium magnet stationary inside a 10,000-turn coil induces a large continuous voltage.",
        "verdict": "🚨 NO RELATIVE MOTION = ZERO VOLTS!",
        "why": "Stationary flux cuts nothing! Move the magnet or spin the coil!",
        "right": "Voltage is induced only when magnetic field lines are CUT (changing flux)."
      },
      {
        "spec": "Edexcel 4PH1 · 6.17P",
        "wrong": "A transformer steps 12 V DC from a car battery straight up to 240 V DC.",
        "verdict": "🚨 TRANSFORMERS DO NOT WORK WITH STEADY DC!",
        "why": "DC creates a constant magnetic field — zero changing flux, zero continuous induced voltage!",
        "right": "Transformers require AC so a continuously changing magnetic field cuts the secondary coil."
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Doubling the current and then simply stating the force doubles — forgetting that the force becomes zero because the wire is now parallel to the field.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A straight wire carries a current of 4.0 A. It lies perpendicular to a magnetic field of flux density 0.25 T. A length o",
        "right": "Correct use of F = BIL / F = 0.25 × 4.0 × 0.30; F = 0.30 N (with unit)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Describing the relay as passing the large current through the electromagnet itself — the key point is that the two circuits are electrically isolated.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe how a relay uses an electromagnet to allow a small control current to switch a large current in a separate circ",
        "right": "Control current in coil magnetises the electromagnet / attracts soft-iron armature; Armature pivots / moves towards the electromagnet"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Using P = VI to calculate cable power loss instead of P = I²R — V here is the voltage drop across the cables (not the transmission voltage).",
        "verdict": "Common Exam Slip",
        "why": "Question focus: A power station generates 500 MW at 25 kV. A step-up transformer raises this to 400 kV for transmission along cables of ",
        "right": "I = P/V / I = 500×10⁶ / 400×10³; I = 1250 A (with unit)"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Writing 'opposite poles repel' — it is opposite (unlike) poles that attract.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: State the basic law of magnetic poles, and use it to explain what happens when the north pole of one bar magnet is broug",
        "right": "Like poles repel / unlike poles attract; North and south are unlike poles"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain how a step-up transformer works and why high-voltage transmission improves National Grid efficiency.",
        "marks": "5 Marks",
        "points": [
          "<strong>AC in primary coil</strong> produces a <strong>changing magnetic field</strong> in the laminated <strong>soft-iron core</strong>, which cuts the secondary coil (more turns Ns > Np) to <strong>induce a larger AC voltage</strong>.",
          "For fixed power (P = VI), stepping up voltage <strong>reduces current I</strong> in transmission cables → reduces thermal energy wasted via <strong>P = I²R</strong> (step-down lowers V to safe 230 V before homes)."
        ],
        "hook": "⚡ AC Primary → Changing Iron Flux → Secondary Cut; V ↑ means I ↓ means I²R Loss ↓↓!"
      },
      {
        "q": "Explain why a current-carrying coil turns in a magnetic field and state the role of the split-ring commutator.",
        "marks": "4 Marks",
        "points": [
          "Current flows in opposite directions along opposite sides of the coil perpendicular to B-field → <strong>equal and opposite forces</strong> (up on one side, down on the other via Fleming's LHR) produce turning moment.",
          "<strong>Split-ring commutator reverses current direction in the coil every half-turn (180°)</strong> so force keeps pushing rotation in the same continuous direction."
        ],
        "hook": "🔄 Split-Ring flips current every 180° = non-stop spin!"
      },
      {
        "q": "Contrast the physics principles operating a moving-coil loudspeaker and a moving-coil microphone.",
        "marks": "4 Marks",
        "points": [
          "<strong>Loudspeaker (Motor effect)</strong>: AC in coil inside permanent magnetic field experiences a reversing force (Fleming's LHR) → vibrates cone → creates longitudinal sound waves.",
          "<strong>Microphone (Electromagnetic induction)</strong>: sound waves vibrate diaphragm & coil inside magnetic field → coil cuts field lines → induces alternating voltage of matching frequency."
        ],
        "hook": "🔊 Speaker = Motor Effect; 🎤 Mic = Generator Induction!"
      }
    ]
  },
  "phys-nuclear": {
    "topicId": "phys-nuclear",
    "specCode": "Edexcel 4PH1",
    "specRefs": "Edexcel 4PH1 · 7.1–7.26",
    "epTitle": "Gold-Foil Ricochets, Half-Life Strawberries & Control-Rod Brakes",
    "mnemonics": [
      {
        "label": "Moderator vs Control Rods vs Shielding (7.21–7.23)",
        "hook": "🛑 Moderator = Speed Bump (Slows); Boron = Sponge (Absorbs)!",
        "detail": "<strong>Moderator (graphite/water)</strong>: <strong>slows down</strong> fast neutrons so they are readily absorbed by U-235 nuclei. · <strong>Control rods (boron/cadmium)</strong>: <strong>absorb</strong> surplus neutrons to keep the chain reaction steady (lowered fully to shut down)."
      },
      {
        "label": "Conditions for Nuclear Fusion (7.24–7.26)",
        "hook": "☀️ Positive + Positive Repel → Need Million-Degree KE Slam!",
        "detail": "Two positively charged hydrogen nuclei experience strong <strong>electrostatic repulsion</strong>. · Very <strong>high temperature</strong> gives nuclei huge <strong>kinetic energy</strong> to get close enough to fuse, and <strong>high pressure/density</strong> increases collision frequency (hard to contain plasma on Earth)."
      },
      {
        "label": "Choosing Isotopes for Industrial Foil Rollers vs Smoke Alarms (7.13)",
        "hook": "🏭 Beta = Foil Gauge; 🔥 Alpha = Smoke Gap Ioniser!",
        "detail": "(a) <strong>Beta + long half-life</strong>: alpha is stopped completely, gamma passes unaffected, whereas beta count varies sensitively with mm changes in Al thickness; long half-life avoids frequent replacement/recalibration. · (b) <strong>Alpha + long half-life</strong> (Americium-241): alpha strongly ionises air in gap to carry tiny current; smoke particles absorb alpha → current drops → alarm sounds (safe outside case as stopped by a few cm of air)."
      },
      {
        "label": "Proton Number, Nucleon Number and Isotopes",
        "hook": "Read A and Z directly from nuclide notation; compute N = A − Z.",
        "detail": "Z (proton number) = number of protons; defines the element."
      },
      {
        "label": "Types of Nuclear Radiation",
        "hook": "Charge tells you deflection direction: in the same field, alpha (+) deflects one way, beta (−) deflects the opposite way, gamma (0) goes straight.",
        "detail": "Alpha: helium nucleus (+2), stopped by paper, very high ionisation — most dangerous if ingested."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4PH1 · 7.9",
        "wrong": "In Carbon-14 beta-minus decay (¹⁴₆C -> β⁻), the daughter nucleus is Boron-14 (¹⁴₅B).",
        "verdict": "🚨 SUBTRACTED −1 BACKWARDS!",
        "why": "6 minus (−1) is SEVEN — Nitrogen-14 (¹⁴₇N)! Neutron became a PROTON!",
        "right": "¹⁴₆C → ¹⁴₇N + ⁰₋₁e (mass stays 14, atomic number increases by +1 to 7)."
      },
      {
        "spec": "Edexcel 4PH1 · 7.22",
        "wrong": "Graphite control rods are lowered into the reactor to slow down fast neutrons.",
        "verdict": "🚨 SWAPPED MODERATOR & CONTROL RODS!",
        "why": "Graphite MODERATOR slows neutrons; Boron CONTROL RODS absorb neutrons!",
        "right": "Moderator slows fast neutrons; boron/cadmium control rods absorb neutrons to control reaction rate."
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Many students say 'electrons repel alpha particles' — electrons are too light and carry the wrong sign to cause large deflections. It is the nucleus that matters.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Explain why most alpha particles pass straight through the gold foil in the Rutherford experiment, but a small number ar",
        "right": "atom is mostly empty space / very little matter for alpha to interact with; most alphas are undeflected / pass straight through"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "In part (a), students often write the daughter nucleus as ⁹⁰₃₈Sr (no change) — forgetting that Z increases by 1 in beta decay, giving a different element.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Strontium-90 (⁹⁰₃₈Sr) is a beta-minus emitter with a half-life of 28.8 years. (a) Write a balanced nuclear equation for ",
        "right": "(a) correct daughter symbol Y / yttrium; (a) correct A = 90 for daughter"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Students often say gamma is 'stopped by lead' — in fact, lead only reduces gamma intensity; no practical thickness stops it completely.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Compare alpha, beta and gamma radiation under the following headings: nature, relative charge, penetrating power (which ",
        "right": "alpha: helium nucleus / 2 protons + 2 neutrons; beta: (fast) electron / emitted from nucleus"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Some students place electrons inside the nucleus or give the neutron a charge. Neutrons are neutral and electrons orbit outside the nucleus.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe the structure of an atom according to the nuclear model. In your answer name the particles, state their relativ",
        "right": "nucleus is central, tiny and dense / contains most of the mass; nucleus contains protons (+1) and neutrons (0/neutral)"
      }
    ],
    "rapidChecks": [
      {
        "q": "Explain the distinct roles of the moderator, boron control rods, and concrete biological shield in a U-235 fission reactor.",
        "marks": "4 Marks",
        "points": [
          "<strong>Moderator (graphite/water)</strong>: <strong>slows down</strong> fast neutrons so they are readily absorbed by U-235 nuclei.",
          "<strong>Control rods (boron/cadmium)</strong>: <strong>absorb</strong> surplus neutrons to keep the chain reaction steady (lowered fully to shut down).",
          "<strong>Thick concrete/lead shield</strong>: absorbs penetrating gamma rays and neutrons to protect workers."
        ],
        "hook": "🛑 Moderator = Speed Bump (Slows); Boron = Sponge (Absorbs)!"
      },
      {
        "q": "Explain why nuclear fusion requires extreme temperature and pressure and is difficult to sustain on Earth.",
        "marks": "3 Marks",
        "points": [
          "Two positively charged hydrogen nuclei experience strong <strong>electrostatic repulsion</strong>.",
          "Very <strong>high temperature</strong> gives nuclei huge <strong>kinetic energy</strong> to get close enough to fuse, and <strong>high pressure/density</strong> increases collision frequency (hard to contain plasma on Earth)."
        ],
        "hook": "☀️ Positive + Positive Repel → Need Million-Degree KE Slam!"
      },
      {
        "q": "Justify the radiation type and half-life required for (a) an aluminium-foil thickness gauge and (b) a household smoke detector.",
        "marks": "4 Marks",
        "points": [
          "(a) <strong>Beta + long half-life</strong>: alpha is stopped completely, gamma passes unaffected, whereas beta count varies sensitively with mm changes in Al thickness; long half-life avoids frequent replacement/recalibration.",
          "(b) <strong>Alpha + long half-life</strong> (Americium-241): alpha strongly ionises air in gap to carry tiny current; smoke particles absorb alpha → current drops → alarm sounds (safe outside case as stopped by a few cm of air)."
        ],
        "hook": "🏭 Beta = Foil Gauge; 🔥 Alpha = Smoke Gap Ioniser!"
      }
    ]
  },
  "phys-space": {
    "topicId": "phys-space",
    "specCode": "Edexcel 4PH1",
    "specRefs": "Edexcel 4PH1 · 8.1–8.18P",
    "epTitle": "Comet Ellipses, Supernova Bling, HR Diagrams & Big Bang Redshift",
    "mnemonics": [
      {
        "label": "Solar-Mass vs Massive Star Lifecycles (8.8–8.10P)",
        "hook": "🌟 Sun → Red Giant → White Dwarf; Giant → Supernova → Neutron Star / Black Hole!",
        "detail": "<strong>Sun-mass star</strong>: expands & cools into a <strong>Red Giant</strong> → sheds outer shells → hot dense core remains as a <strong>White Dwarf</strong> → cools to a dark <strong>Black Dwarf</strong>. · <strong>Massive star</strong>: expands into a <strong>Red Supergiant</strong> → explodes violently as a <strong>Supernova</strong> (fusing elements heavier than iron & scattering them) → core collapses into an ultra-dense <strong>Neutron Star</strong> or (if massive enough) a <strong>Black Hole</strong>."
      },
      {
        "label": "Redshift & CMBR Evidence for the Big Bang (8.14P–8.16P)",
        "hook": "🌌 Redshift proves Expansion; CMBR proves the Hot Beginning!",
        "detail": "<strong>Redshift</strong>: more distant galaxies show greater shift to longer wavelengths → receding faster → Universe is expanding from a single point. · <strong>CMBR</strong>: uniform microwave radiation from all directions is stretched remnant gamma radiation from the hot, dense early Universe — <strong>predicted ONLY by Big Bang</strong> (Steady State has no hot origin)."
      },
      {
        "label": "Comet Elliptical Orbit Energy & Speed (8.4–8.6)",
        "hook": "☄️ Dive In: GPE → KE = Max Speed near Sun!",
        "detail": "Comet has a highly <strong>elliptical orbit</strong> with the Sun near one focus (not at the centre). · As comet approaches the Sun, gravitational pull increases and <strong>gravitational potential energy (GPE) transfers into kinetic energy (KE)</strong> → reaches <strong>maximum speed closest to the Sun</strong> (reversing as it moves away)."
      },
      {
        "label": "Orbits and Gravitational Force",
        "hook": "Use v = 2πr / T; always convert T to seconds first.",
        "detail": "Gravitational attraction provides the centripetal force that keeps planets, moons and satellites in circular orbits."
      },
      {
        "label": "Galaxies and the Scale of the Universe",
        "hook": "To convert light-years to metres, use distance = c × time with time in seconds (1 year ≈ 3.15 × 10⁷ s).",
        "detail": "A galaxy is a collection of billions of stars held together by gravity."
      }
    ],
    "pitfalls": [
      {
        "spec": "Edexcel 4PH1 · 8.7",
        "wrong": "Red supergiant stars have a higher surface temperature than blue main-sequence stars because red means hot.",
        "verdict": "🚨 BATHROOM-TAP COLOUR TRAP!",
        "why": "Physics isn't plumbing! Blue-white stars (~25,000 K) are WAY hotter than red stars (~3,000 K)!",
        "right": "Star colour order from hottest to coolest: Blue-white → White → Yellow → Orange → Red."
      },
      {
        "spec": "Edexcel 4PH1 · 8.16P",
        "wrong": "Both the Steady State theory and the Big Bang theory predict Cosmic Microwave Background Radiation (CMBR).",
        "verdict": "🚨 ONLY BIG BANG EXPLAINS CMBR!",
        "why": "Steady State has no hot dense beginning — CMBR is the smoking gun of the Big Bang!",
        "right": "CMBR is cooled remnant radiation from the hot early Universe, predicted ONLY by the Big Bang theory."
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Forgetting to convert the period from days to seconds — using T = 365.25 gives an answer in m/day rather than m/s.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: The Earth orbits the Sun at a radius of 1.50 × 10¹¹ m with a period of 365.25 days. (a) Show that the orbital speed of t",
        "right": "T converted to seconds correctly (3.156 × 10⁷ s or equivalent) [1]; Correct substitution into v = 2πr / T [1]"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Confusing the fate of massive stars with Sun-like stars — a common error is to say the massive star becomes a red giant and then a white dwarf.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Describe the life cycle of a star much more massive than the Sun, starting from a nebula. Include the names of all key s",
        "right": "Nebula (gas and dust cloud contracting under gravity) [1]; Protostar formed as material heats up; fusion not yet started [1]"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Stating that redshift means the light itself becomes red, rather than that the wavelength is longer than it would be from a stationary source.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: Astronomers observe that light from distant galaxies is redshifted, and that the redshift is greater for more distant ga",
        "right": "Redshift: observed wavelength longer than expected / shifted toward red end of spectrum [1]; Caused by galaxies moving away from us / Doppler effect for a receding source [1]"
      },
      {
        "spec": "Edexcel 4PH1 · Structured QA",
        "wrong": "Dividing Δλ by the observed wavelength 689 nm instead of the reference laboratory wavelength λ₀ = 656 nm.",
        "verdict": "Common Exam Slip",
        "why": "Question focus: (a) State what is meant by the absolute magnitude of a star and explain why White Dwarfs lie in the bottom-left of the H",
        "right": "brightness of star at a fixed / standard distance (measures luminosity); high surface temperature → left side of HR diagram"
      }
    ],
    "rapidChecks": [
      {
        "q": "Compare the future evolution of the Sun with a star 15 times more massive after leaving the Main Sequence.",
        "marks": "5 Marks",
        "points": [
          "<strong>Sun-mass star</strong>: expands & cools into a <strong>Red Giant</strong> → sheds outer shells → hot dense core remains as a <strong>White Dwarf</strong> → cools to a dark <strong>Black Dwarf</strong>.",
          "<strong>Massive star</strong>: expands into a <strong>Red Supergiant</strong> → explodes violently as a <strong>Supernova</strong> (fusing elements heavier than iron & scattering them) → core collapses into an ultra-dense <strong>Neutron Star</strong> or (if massive enough) a <strong>Black Hole</strong>."
        ],
        "hook": "🌟 Sun → Red Giant → White Dwarf; Giant → Supernova → Neutron Star / Black Hole!"
      },
      {
        "q": "Explain how both galactic redshift and CMBR support the Big Bang theory over Steady State theory.",
        "marks": "4 Marks",
        "points": [
          "<strong>Redshift</strong>: more distant galaxies show greater shift to longer wavelengths → receding faster → Universe is expanding from a single point.",
          "<strong>CMBR</strong>: uniform microwave radiation from all directions is stretched remnant gamma radiation from the hot, dense early Universe — <strong>predicted ONLY by Big Bang</strong> (Steady State has no hot origin)."
        ],
        "hook": "🌌 Redshift proves Expansion; CMBR proves the Hot Beginning!"
      },
      {
        "q": "Describe the shape of a comet's orbit around the Sun and explain using energy conservation why its speed changes.",
        "marks": "4 Marks",
        "points": [
          "Comet has a highly <strong>elliptical orbit</strong> with the Sun near one focus (not at the centre).",
          "As comet approaches the Sun, gravitational pull increases and <strong>gravitational potential energy (GPE) transfers into kinetic energy (KE)</strong> → reaches <strong>maximum speed closest to the Sun</strong> (reversing as it moves away)."
        ],
        "hook": "☄️ Dive In: GPE → KE = Max Speed near Sun!"
      }
    ]
  }
};

export function getMemoryVault(topicId: string): TopicMemoryVault | null {
  return MEMORY_PITFALLS[topicId] || null;
}
