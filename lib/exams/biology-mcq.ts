import type { Paper, MCQ } from "../types";

export const biologyExamMcqPapers: Paper<MCQ>[] = [
  {
    id: "exam-biology-mcq-1",
    title: "Paper 1 — Multiple Choice",
    description:
      "25 questions across cells, movement of substances, enzymes and nutrition from the Cambridge IGCSE Biology 0610 Extended syllabus. Allow about 45 minutes.",
    questions: [
      {
        id: "exam-biology-m1-01",
        question:
          "Which structure is present in a plant cell but absent in an animal cell?",
        options: [
          "Mitochondrion",
          "Cell-surface membrane",
          "Cellulose cell wall",
          "Ribosome",
        ],
        answerIndex: 2,
        explanation:
          "A cellulose cell wall surrounds the cell membrane of plant cells, giving support and preventing bursting. Mitochondria, the cell-surface membrane and ribosomes are found in both animal and plant cells.",
        difficulty: "warmup",
        guideRef: "Plant Cell Structure",
      },
      {
        id: "exam-biology-m1-02",
        question: "What is the function of ribosomes in a cell?",
        options: [
          "Aerobic respiration",
          "Protein synthesis",
          "Photosynthesis",
          "Storage of genetic material",
        ],
        answerIndex: 1,
        explanation:
          "Ribosomes are the sites of protein synthesis, where amino acids are joined together following the instructions carried by mRNA. Respiration occurs in mitochondria, photosynthesis in chloroplasts and genetic material is stored in the nucleus.",
        difficulty: "warmup",
        guideRef: "Cell Structure",
      },
      {
        id: "exam-biology-m1-03",
        question:
          "Which feature of a bacterial cell distinguishes it from a typical plant or animal cell?",
        options: [
          "It has a cell membrane",
          "It has ribosomes",
          "Its DNA is not enclosed in a nucleus",
          "It has cytoplasm",
        ],
        answerIndex: 2,
        explanation:
          "Bacteria are prokaryotes: their single circular chromosome floats freely in the cytoplasm and is not enclosed by a nuclear membrane. They still possess a cell membrane, ribosomes and cytoplasm, which is why those options are not distinguishing features.",
        difficulty: "warmup",
        guideRef: "Bacterial Cell Structure",
      },
      {
        id: "exam-biology-m1-04",
        question:
          "A light microscope image of a cell measures 60 mm across. The actual cell is 30 micrometres wide. What is the magnification? (1 mm = 1000 micrometres)",
        options: ["x 200", "x 500", "x 1000", "x 2000"],
        answerIndex: 3,
        explanation:
          "Magnification = image size / actual size. Convert 60 mm to micrometres: 60 x 1000 = 60000 micrometres. Then 60000 / 30 = 2000, so the magnification is x 2000.",
        difficulty: "core",
        guideRef: "Magnification",
        hints: [
          "Magnification = image size divided by actual size.",
          "Both measurements must be in the same units before dividing.",
          "Convert 60 mm into micrometres by multiplying by 1000.",
          "Divide the converted image size by 30 micrometres.",
        ],
        strategy:
          "Always convert to the same unit first, then apply the magnification triangle (M = I / A).",
      },
      {
        id: "exam-biology-m1-05",
        question:
          "Red blood cells are placed in a concentrated salt solution. What happens to them?",
        options: [
          "They swell and burst",
          "They shrink and become crenated",
          "They stay exactly the same",
          "They become turgid",
        ],
        answerIndex: 1,
        explanation:
          "A concentrated salt solution is hypertonic, so water leaves the cells by osmosis from the dilute cytoplasm to the concentrated solution. The cells lose water and shrink, becoming crenated. They cannot become turgid because animal cells have no cell wall.",
        difficulty: "core",
        guideRef: "Osmosis",
        hints: [
          "Decide whether the outside solution is more or less concentrated than the cell contents.",
          "Water moves from a dilute to a more concentrated solution by osmosis.",
          "If the cell loses water, does it swell or shrink?",
          "Remember animal cells have no wall to keep their shape.",
        ],
      },
      {
        id: "exam-biology-m1-06",
        question: "Which process does NOT require the cell to use energy from respiration?",
        options: [
          "Active transport of ions into a root hair",
          "Diffusion of oxygen into a cell",
          "Uptake of glucose against a concentration gradient",
          "Phagocytosis of bacteria",
        ],
        answerIndex: 1,
        explanation:
          "Diffusion is the net movement of particles from a high to a low concentration down a gradient and is passive, needing no energy. Active transport, uptake against a gradient and phagocytosis all require energy released by respiration (ATP).",
        difficulty: "core",
        guideRef: "Movement of Substances",
        hints: [
          "Identify which processes move substances against a concentration gradient.",
          "Movement down a gradient is passive.",
          "Active transport needs ATP from respiration.",
        ],
      },
      {
        id: "exam-biology-m1-07",
        question:
          "Which row correctly describes osmosis?",
        options: [
          "Movement of any molecule down a gradient",
          "Net movement of water molecules from a dilute to a more concentrated solution through a partially permeable membrane",
          "Movement of water using energy from respiration",
          "Net movement of solute particles across a membrane",
        ],
        answerIndex: 1,
        explanation:
          "Osmosis is the net movement of water molecules from a region of higher water potential (dilute solution) to a region of lower water potential (concentrated solution) through a partially permeable membrane. It is passive and involves water, not solute particles.",
        difficulty: "warmup",
        guideRef: "Osmosis",
      },
      {
        id: "exam-biology-m1-08",
        question:
          "Which feature increases the surface area of a root hair cell for absorption?",
        options: [
          "A thick waxy cuticle",
          "A long, thin extension",
          "Many chloroplasts",
          "A large number of mitochondria only",
        ],
        answerIndex: 1,
        explanation:
          "A root hair cell has a long, narrow projection that greatly increases the surface area in contact with the soil water, speeding up absorption of water and mineral ions. It has no chloroplasts (it is underground) and a cuticle would hinder absorption.",
        difficulty: "warmup",
        guideRef: "Specialised Cells",
      },
      {
        id: "exam-biology-m1-09",
        question:
          "Enzymes are described as biological catalysts. Which statement about enzymes is correct?",
        options: [
          "They are used up during the reaction",
          "They raise the activation energy of a reaction",
          "They speed up reactions and remain unchanged at the end",
          "Each enzyme can catalyse any reaction",
        ],
        answerIndex: 2,
        explanation:
          "Enzymes increase the rate of a reaction by lowering the activation energy and are not used up, so they can be reused. Each enzyme is specific to a particular substrate because of its active site shape.",
        difficulty: "warmup",
        guideRef: "Enzymes",
      },
      {
        id: "exam-biology-m1-10",
        question:
          "An enzyme is heated to 75 degrees C and then cooled back to 37 degrees C. Its activity does not return. Why?",
        options: [
          "The substrate has been used up",
          "The active site has been permanently changed by denaturation",
          "The enzyme has become a competitive inhibitor",
          "The pH has changed",
        ],
        answerIndex: 1,
        explanation:
          "High temperature breaks the bonds holding the enzyme's tertiary structure, changing the shape of the active site. This denaturation is permanent, so the substrate can no longer fit and cooling does not restore activity.",
        difficulty: "core",
        guideRef: "Enzymes",
        hints: [
          "Think about what high temperature does to protein structure.",
          "The active site shape depends on the folded protein.",
          "Is denaturation reversible or permanent?",
        ],
      },
      {
        id: "exam-biology-m1-11",
        question:
          "The graph of an enzyme's rate against pH peaks at pH 2. This enzyme most likely works in the:",
        options: ["mouth", "stomach", "small intestine", "blood plasma"],
        answerIndex: 1,
        explanation:
          "An optimum pH of 2 indicates a highly acidic environment. The stomach contains hydrochloric acid giving a pH of about 2, which is the optimum for the protease pepsin. The mouth, small intestine and blood are near neutral or slightly alkaline.",
        difficulty: "core",
        guideRef: "Enzymes",
        hints: [
          "A low pH number means an acidic environment.",
          "Which part of the gut secretes hydrochloric acid?",
          "Match the optimum pH to the conditions found there.",
        ],
      },
      {
        id: "exam-biology-m1-12",
        question:
          "Which test and result correctly identifies the presence of starch?",
        options: [
          "Biuret reagent turns purple",
          "Iodine solution turns blue-black",
          "Benedict's solution turns brick-red",
          "Ethanol test gives a white emulsion",
        ],
        answerIndex: 1,
        explanation:
          "Iodine solution changes from orange-brown to blue-black in the presence of starch. Biuret tests for protein (purple), Benedict's tests for reducing sugar (brick-red) and the ethanol emulsion test detects fats.",
        difficulty: "warmup",
        guideRef: "Food Tests",
      },
      {
        id: "exam-biology-m1-13",
        question:
          "A sample turns Benedict's solution brick-red when heated. The sample contains:",
        options: ["protein", "fat", "reducing sugar", "starch"],
        answerIndex: 2,
        explanation:
          "Benedict's solution turns from blue through green and orange to a brick-red precipitate when heated with a reducing sugar such as glucose. The other nutrients give different test results.",
        difficulty: "warmup",
        guideRef: "Food Tests",
      },
      {
        id: "exam-biology-m1-14",
        question:
          "Which enzyme, substrate and product set is correct?",
        options: [
          "Amylase: protein to amino acids",
          "Protease: starch to maltose",
          "Lipase: fats to fatty acids and glycerol",
          "Maltase: fats to glycerol",
        ],
        answerIndex: 2,
        explanation:
          "Lipase digests fats (lipids) into fatty acids and glycerol. Amylase breaks starch into maltose, protease breaks protein into amino acids, and maltase breaks maltose into glucose.",
        difficulty: "core",
        guideRef: "Digestion",
        hints: [
          "Match each enzyme name to the food group it ends in.",
          "Lipase acts on lipids.",
          "Identify the correct products of fat digestion.",
        ],
      },
      {
        id: "exam-biology-m1-15",
        question: "What is the main function of bile in digestion?",
        options: [
          "It digests proteins into amino acids",
          "It emulsifies fats to increase surface area for lipase",
          "It breaks down starch into glucose",
          "It kills all bacteria in the gut",
        ],
        answerIndex: 1,
        explanation:
          "Bile is not an enzyme. It emulsifies large fat droplets into many small droplets, greatly increasing the surface area on which lipase can act. Bile is also alkaline, neutralising the acidic mixture from the stomach.",
        difficulty: "core",
        guideRef: "Digestion",
        hints: [
          "Bile contains no enzymes.",
          "Think about how it affects large fat droplets.",
          "More small droplets means more surface area for which enzyme?",
        ],
      },
      {
        id: "exam-biology-m1-16",
        question:
          "Villi in the small intestine are adapted for absorption. Which adaptation is NOT a feature of a villus?",
        options: [
          "A large surface area",
          "A thick muscular wall to push food along",
          "A good blood supply",
          "A thin, one-cell-thick wall",
        ],
        answerIndex: 1,
        explanation:
          "Villi increase surface area, have a thin wall (short diffusion distance), a rich capillary network to maintain a concentration gradient and a lacteal for fat absorption. A thick muscular wall is not an absorption adaptation.",
        difficulty: "core",
        guideRef: "Absorption",
        hints: [
          "List the features that speed up diffusion into the blood.",
          "A short diffusion distance needs a thin wall, not a thick one.",
          "Which option would slow, not help, absorption?",
        ],
      },
      {
        id: "exam-biology-m1-17",
        question:
          "Which deficiency disease is caused by a lack of vitamin C in the diet?",
        options: ["Rickets", "Scurvy", "Goitre", "Anaemia"],
        answerIndex: 1,
        explanation:
          "Vitamin C is needed to make collagen for healthy connective tissue. A lack of it causes scurvy. Rickets is caused by lack of vitamin D, goitre by lack of iodine and anaemia by lack of iron.",
        difficulty: "warmup",
        guideRef: "Human Nutrition",
      },
      {
        id: "exam-biology-m1-18",
        question:
          "Why must large food molecules be digested before they can be absorbed?",
        options: [
          "They are too acidic to absorb",
          "They are insoluble and too large to pass through the gut wall",
          "They contain no energy",
          "They would denature the villi",
        ],
        answerIndex: 1,
        explanation:
          "Large molecules such as starch and proteins are insoluble and too big to diffuse across the gut lining. Digestion breaks them into small, soluble molecules (such as glucose and amino acids) that can be absorbed into the blood.",
        difficulty: "core",
        guideRef: "Digestion",
        hints: [
          "Think about the size and solubility of starch compared with glucose.",
          "Only small soluble molecules can cross the gut wall.",
          "What does digestion change about the molecules?",
        ],
      },
      {
        id: "exam-biology-m1-19",
        question:
          "Which mineral ion is needed by a plant to make chlorophyll?",
        options: ["Nitrate", "Magnesium", "Phosphate", "Potassium"],
        answerIndex: 1,
        explanation:
          "Magnesium ions are required to make chlorophyll; a deficiency causes yellowing of leaves (chlorosis). Nitrate ions are needed for amino acids and proteins.",
        difficulty: "core",
        guideRef: "Plant Nutrition",
        hints: [
          "Chlorophyll contains a metal ion at its centre.",
          "A deficiency of this ion causes pale yellow leaves.",
          "It is not nitrate, which is used for protein.",
        ],
      },
      {
        id: "exam-biology-m1-20",
        question:
          "In a leaf, where does most photosynthesis take place?",
        options: [
          "Lower epidermis",
          "Palisade mesophyll",
          "Xylem vessels",
          "Waxy cuticle",
        ],
        answerIndex: 1,
        explanation:
          "The palisade mesophyll layer, near the upper surface of the leaf, contains the most chloroplasts and is positioned to absorb the most light, so it carries out most photosynthesis.",
        difficulty: "warmup",
        guideRef: "Photosynthesis",
      },
      {
        id: "exam-biology-m1-21",
        question:
          "Which word equation correctly summarises photosynthesis?",
        options: [
          "glucose + oxygen to carbon dioxide + water",
          "carbon dioxide + water to glucose + oxygen",
          "glucose + water to carbon dioxide + oxygen",
          "carbon dioxide + oxygen to glucose + water",
        ],
        answerIndex: 1,
        explanation:
          "Photosynthesis uses carbon dioxide and water, with light energy absorbed by chlorophyll, to produce glucose and oxygen. The first option is the equation for aerobic respiration.",
        difficulty: "warmup",
        guideRef: "Photosynthesis",
      },
      {
        id: "exam-biology-m1-22",
        question:
          "A plant is kept in bright light with plenty of carbon dioxide but the temperature is very low. The rate of photosynthesis is slow. The limiting factor is most likely:",
        options: ["light intensity", "carbon dioxide", "temperature", "water"],
        answerIndex: 2,
        explanation:
          "Light and carbon dioxide are plentiful, so they are not limiting. A very low temperature slows the enzyme-controlled reactions of photosynthesis, making temperature the limiting factor here.",
        difficulty: "challenge",
        guideRef: "Limiting Factors",
        hints: [
          "A limiting factor is the one in shortest supply that holds back the rate.",
          "Light and carbon dioxide are both described as plentiful.",
          "Which remaining factor is described as low?",
          "Remember photosynthesis is controlled by enzymes that are temperature sensitive.",
        ],
      },
      {
        id: "exam-biology-m1-23",
        question:
          "Guard cells control the opening and closing of stomata. When guard cells take in water and become turgid, the stomata:",
        options: [
          "close completely",
          "open, allowing gas exchange",
          "fall off the leaf",
          "stop the plant respiring",
        ],
        answerIndex: 1,
        explanation:
          "When guard cells absorb water by osmosis they become turgid and curve apart, opening the stoma. This allows carbon dioxide in for photosynthesis and lets oxygen and water vapour out. When they lose water they close the stoma.",
        difficulty: "challenge",
        guideRef: "Gas Exchange in Plants",
        hints: [
          "Turgid means the cells are full of water.",
          "The unevenly thickened walls make the cells bend when turgid.",
          "Bending apart creates a gap between the two guard cells.",
          "An open gap is needed for carbon dioxide to enter.",
        ],
      },
      {
        id: "exam-biology-m1-24",
        question:
          "A potato cylinder is placed in concentrated sugar solution and loses mass. This is because:",
        options: [
          "water entered the cells by osmosis",
          "water left the cells by osmosis",
          "sugar was actively transported in",
          "the cells respired the sugar",
        ],
        answerIndex: 1,
        explanation:
          "The sugar solution has a lower water potential than the potato cells, so water leaves the cells by osmosis. The cylinder loses water and therefore loses mass and becomes flaccid.",
        difficulty: "challenge",
        guideRef: "Osmosis",
        hints: [
          "Compare the water potential inside the cells with the sugar solution.",
          "Water moves from high to low water potential.",
          "If the cylinder loses mass, what has it lost?",
          "Osmosis moves water, not sugar.",
        ],
      },
      {
        id: "exam-biology-m1-25",
        question:
          "Which structure in a cell is correctly paired with its function?",
        options: [
          "Vacuole: site of respiration",
          "Chloroplast: absorbs light for photosynthesis",
          "Cell wall: controls what enters the cell",
          "Nucleus: stores starch",
        ],
        answerIndex: 1,
        explanation:
          "Chloroplasts contain chlorophyll that absorbs light energy for photosynthesis. Respiration occurs in mitochondria, the cell membrane (not the wall) controls entry of substances, and the nucleus stores genetic material.",
        difficulty: "core",
        guideRef: "Cell Structure",
        hints: [
          "Match each organelle to its true role.",
          "Photosynthesis happens in the green organelle.",
          "Check which structure controls movement in and out.",
        ],
      },
    ],
  },
  {
    id: "exam-biology-mcq-2",
    title: "Paper 2 — Multiple Choice",
    description:
      "25 questions on respiration, gas exchange, transport in animals and plants, and excretion. Allow about 45 minutes.",
    questions: [
      {
        id: "exam-biology-m2-01",
        question: "Which word equation represents aerobic respiration?",
        options: [
          "glucose to lactic acid + energy",
          "glucose + oxygen to carbon dioxide + water + energy",
          "glucose to ethanol + carbon dioxide + energy",
          "carbon dioxide + water to glucose + oxygen",
        ],
        answerIndex: 1,
        explanation:
          "Aerobic respiration uses oxygen to break down glucose completely into carbon dioxide and water, releasing a large amount of energy. The other options describe anaerobic respiration or photosynthesis.",
        difficulty: "warmup",
        guideRef: "Respiration",
      },
      {
        id: "exam-biology-m2-02",
        question:
          "Anaerobic respiration in human muscle produces which substance?",
        options: ["ethanol", "lactic acid", "carbon dioxide only", "oxygen"],
        answerIndex: 1,
        explanation:
          "In human muscle cells, anaerobic respiration converts glucose into lactic acid, releasing a small amount of energy without using oxygen. Yeast produces ethanol and carbon dioxide instead.",
        difficulty: "warmup",
        guideRef: "Anaerobic Respiration",
      },
      {
        id: "exam-biology-m2-03",
        question:
          "Why does aerobic respiration release more energy than anaerobic respiration from the same amount of glucose?",
        options: [
          "It is faster",
          "Glucose is broken down completely to carbon dioxide and water",
          "It produces lactic acid",
          "It does not use enzymes",
        ],
        answerIndex: 1,
        explanation:
          "Aerobic respiration fully oxidises glucose to carbon dioxide and water, releasing all its stored energy. Anaerobic respiration only partly breaks glucose down (to lactic acid or ethanol), so much energy remains locked in those products.",
        difficulty: "core",
        guideRef: "Respiration",
        hints: [
          "Compare how completely glucose is broken down in each case.",
          "Energy stays locked in lactic acid and ethanol.",
          "More complete breakdown releases more energy.",
        ],
      },
      {
        id: "exam-biology-m2-04",
        question:
          "After hard exercise a person continues to breathe deeply for several minutes. This extra oxygen is used to:",
        options: [
          "make more lactic acid",
          "break down the lactic acid that built up",
          "store energy as fat",
          "lower the body temperature",
        ],
        answerIndex: 1,
        explanation:
          "During hard exercise muscles respire anaerobically, producing lactic acid and creating an oxygen debt. The deep breathing afterwards supplies extra oxygen to break down (oxidise) the accumulated lactic acid.",
        difficulty: "core",
        guideRef: "Oxygen Debt",
        hints: [
          "What built up in the muscles during anaerobic respiration?",
          "Lactic acid must be removed afterwards.",
          "Oxygen is needed to break it down.",
        ],
      },
      {
        id: "exam-biology-m2-05",
        question:
          "Which features of the alveoli make them efficient for gas exchange?",
        options: [
          "Thick walls and a poor blood supply",
          "Large surface area, thin walls and a good blood supply",
          "A waxy waterproof lining",
          "A small surface area to limit water loss",
        ],
        answerIndex: 1,
        explanation:
          "Alveoli provide a very large surface area, have walls only one cell thick (short diffusion distance), a moist lining and a rich capillary network that maintains steep concentration gradients, all of which speed up gas exchange.",
        difficulty: "warmup",
        guideRef: "Gas Exchange",
      },
      {
        id: "exam-biology-m2-06",
        question:
          "During inhalation, which set of changes occurs?",
        options: [
          "Diaphragm relaxes, volume decreases, pressure increases",
          "Diaphragm contracts and flattens, volume increases, pressure decreases",
          "Ribs move down and in, volume decreases",
          "Diaphragm contracts, pressure increases, air leaves",
        ],
        answerIndex: 1,
        explanation:
          "On inhaling, the diaphragm contracts and flattens and the external intercostal muscles raise the ribs, increasing thorax volume. This lowers the pressure inside the lungs below atmospheric pressure, so air flows in.",
        difficulty: "core",
        guideRef: "Breathing",
        hints: [
          "Decide what the diaphragm does when breathing in.",
          "A larger thorax volume changes the pressure how?",
          "Air flows from high to low pressure.",
        ],
      },
      {
        id: "exam-biology-m2-07",
        question:
          "Which substance is used to show that exhaled air contains more carbon dioxide than inhaled air?",
        options: [
          "Iodine solution",
          "Limewater",
          "Benedict's solution",
          "Biuret reagent",
        ],
        answerIndex: 1,
        explanation:
          "Limewater turns from clear to milky (cloudy) in the presence of carbon dioxide. Exhaled air turns limewater milky faster than inhaled air, showing it contains more carbon dioxide.",
        difficulty: "warmup",
        guideRef: "Gas Exchange",
      },
      {
        id: "exam-biology-m2-08",
        question:
          "Which blood vessel carries oxygenated blood away from the heart to the body?",
        options: ["pulmonary artery", "aorta", "vena cava", "pulmonary vein"],
        answerIndex: 1,
        explanation:
          "The aorta carries oxygenated blood from the left ventricle to the body. The pulmonary artery carries deoxygenated blood to the lungs, the vena cava brings deoxygenated blood to the heart, and the pulmonary vein returns oxygenated blood from the lungs.",
        difficulty: "warmup",
        guideRef: "Circulatory System",
      },
      {
        id: "exam-biology-m2-09",
        question:
          "Why is the wall of the left ventricle thicker than that of the right ventricle?",
        options: [
          "It pumps blood only to the lungs",
          "It must pump blood at high pressure all around the body",
          "It holds more blood",
          "It contains valves",
        ],
        answerIndex: 1,
        explanation:
          "The left ventricle pumps oxygenated blood at high pressure to the whole body, so it needs a thick muscular wall to generate enough force. The right ventricle only pumps blood the short distance to the lungs, so its wall is thinner.",
        difficulty: "core",
        guideRef: "The Heart",
        hints: [
          "Consider how far each ventricle pumps blood.",
          "More distance and pressure needs more muscle.",
          "Which side serves the whole body?",
        ],
      },
      {
        id: "exam-biology-m2-10",
        question:
          "What is the function of valves in the heart and veins?",
        options: [
          "To speed up the blood",
          "To prevent the backflow of blood",
          "To add oxygen to the blood",
          "To make red blood cells",
        ],
        answerIndex: 1,
        explanation:
          "Valves ensure blood flows in one direction only by closing if blood tries to flow backwards. This is especially important in veins, where blood is under low pressure.",
        difficulty: "warmup",
        guideRef: "Circulatory System",
      },
      {
        id: "exam-biology-m2-11",
        question:
          "Which component of blood transports oxygen?",
        options: ["plasma", "platelets", "red blood cells", "white blood cells"],
        answerIndex: 2,
        explanation:
          "Red blood cells contain haemoglobin, which combines with oxygen to form oxyhaemoglobin and transports it around the body. Plasma carries dissolved substances, platelets help clotting and white blood cells fight disease.",
        difficulty: "warmup",
        guideRef: "Blood",
      },
      {
        id: "exam-biology-m2-12",
        question:
          "How are red blood cells adapted to carry oxygen efficiently?",
        options: [
          "They have a large nucleus",
          "They are biconcave and contain haemoglobin",
          "They can change shape to engulf bacteria",
          "They contain many mitochondria",
        ],
        answerIndex: 1,
        explanation:
          "Red blood cells are biconcave discs, giving a large surface area for oxygen diffusion, and they have no nucleus, leaving more room for haemoglobin, the pigment that binds oxygen.",
        difficulty: "core",
        guideRef: "Blood",
        hints: [
          "Think about the shape that gives a large surface area.",
          "What pigment binds oxygen?",
          "Why is having no nucleus an advantage?",
        ],
      },
      {
        id: "exam-biology-m2-13",
        question:
          "Which type of white blood cell produces antibodies?",
        options: ["phagocyte", "lymphocyte", "platelet", "red blood cell"],
        answerIndex: 1,
        explanation:
          "Lymphocytes produce antibodies that are specific to the antigens on a pathogen. Phagocytes engulf and digest pathogens but do not make antibodies.",
        difficulty: "core",
        guideRef: "Blood and Defence",
        hints: [
          "Two main types of white blood cell: phagocytes and lymphocytes.",
          "One engulfs pathogens, the other makes proteins.",
          "Antibodies are made by which type?",
        ],
      },
      {
        id: "exam-biology-m2-14",
        question:
          "Water moves up the xylem of a plant mainly because of:",
        options: [
          "active transport in the roots",
          "transpiration pulling water up as it evaporates from the leaves",
          "the beating of cilia",
          "photosynthesis in the stem",
        ],
        answerIndex: 1,
        explanation:
          "Evaporation of water from the leaves (transpiration) creates a pull in the continuous columns of water in the xylem, drawing water up from the roots. This is the transpiration stream.",
        difficulty: "core",
        guideRef: "Transport in Plants",
        hints: [
          "Where does water leave the plant?",
          "Evaporation from the leaves creates a pull.",
          "Xylem carries water upward in a continuous column.",
        ],
      },
      {
        id: "exam-biology-m2-15",
        question:
          "Which tissue transports sucrose and amino acids around a plant?",
        options: ["xylem", "phloem", "epidermis", "cambium"],
        answerIndex: 1,
        explanation:
          "Phloem transports dissolved sugars (sucrose) and amino acids from sources such as leaves to sinks such as growing tips and roots, a process called translocation. Xylem carries water and mineral ions.",
        difficulty: "warmup",
        guideRef: "Transport in Plants",
      },
      {
        id: "exam-biology-m2-16",
        question:
          "Which set of conditions would give the highest rate of transpiration?",
        options: [
          "cool, still, humid air",
          "hot, windy, dry air",
          "cold, humid, dark conditions",
          "warm, humid, still air",
        ],
        answerIndex: 1,
        explanation:
          "Transpiration is fastest when it is hot (more evaporation), windy (water vapour removed quickly so the gradient stays steep) and dry (low humidity gives a steep concentration gradient). Humid, still, cool conditions slow it down.",
        difficulty: "challenge",
        guideRef: "Transpiration",
        hints: [
          "Higher temperature speeds evaporation.",
          "Wind removes water vapour and keeps the gradient steep.",
          "Dry air has a steeper diffusion gradient than humid air.",
          "Combine the three factors that each increase the rate.",
        ],
      },
      {
        id: "exam-biology-m2-17",
        question:
          "The main organ that filters the blood and removes urea is the:",
        options: ["liver", "kidney", "lung", "pancreas"],
        answerIndex: 1,
        explanation:
          "The kidneys filter the blood, removing urea and excess water and salts to form urine. The liver makes urea from excess amino acids, but the kidney removes it from the blood.",
        difficulty: "warmup",
        guideRef: "Excretion",
      },
      {
        id: "exam-biology-m2-18",
        question:
          "Where is urea produced in the body?",
        options: [
          "in the kidneys",
          "in the liver from excess amino acids",
          "in the bladder",
          "in the small intestine",
        ],
        answerIndex: 1,
        explanation:
          "The liver breaks down excess amino acids by deamination, forming urea. The urea is then carried in the blood to the kidneys to be excreted in urine.",
        difficulty: "core",
        guideRef: "Excretion",
        hints: [
          "Excess amino acids cannot be stored.",
          "They are broken down in one large organ.",
          "Deamination happens in the liver.",
        ],
      },
      {
        id: "exam-biology-m2-19",
        question:
          "In the kidney nephron, useful substances such as glucose are returned to the blood by:",
        options: [
          "ultrafiltration",
          "selective reabsorption",
          "transpiration",
          "deamination",
        ],
        answerIndex: 1,
        explanation:
          "After ultrafiltration in the glomerulus, useful substances like all the glucose and some water and salts are taken back into the blood by selective reabsorption, largely in the proximal convoluted tubule.",
        difficulty: "challenge",
        guideRef: "Kidney Function",
        hints: [
          "Filtration removes small molecules first.",
          "The body must take back the useful ones.",
          "This recovery step is called selective reabsorption.",
          "All glucose is normally reabsorbed.",
        ],
      },
      {
        id: "exam-biology-m2-20",
        question:
          "Which gas is removed from the blood at the alveoli?",
        options: ["oxygen", "nitrogen", "carbon dioxide", "water vapour only"],
        answerIndex: 2,
        explanation:
          "Carbon dioxide diffuses from the blood into the alveoli to be breathed out, while oxygen diffuses from the alveoli into the blood. Each gas moves down its own concentration gradient.",
        difficulty: "warmup",
        guideRef: "Gas Exchange",
      },
      {
        id: "exam-biology-m2-21",
        question:
          "A wilting plant has cells that are no longer turgid. The cells are described as:",
        options: ["plasmolysed only", "flaccid", "turgid", "lysed"],
        answerIndex: 1,
        explanation:
          "When plant cells lose water their vacuoles shrink and they stop pushing on the cell wall; they become flaccid and the plant wilts. If even more water is lost, the membrane pulls away from the wall (plasmolysis).",
        difficulty: "core",
        guideRef: "Osmosis in Plants",
        hints: [
          "Turgid cells are full and firm.",
          "What is the opposite state when water is lost?",
          "Flaccid comes before full plasmolysis.",
        ],
      },
      {
        id: "exam-biology-m2-22",
        question:
          "Which feature of arteries helps them withstand high blood pressure?",
        options: [
          "Thin walls and valves",
          "Thick, elastic muscular walls",
          "A very wide lumen and thin walls",
          "Walls one cell thick",
        ],
        answerIndex: 1,
        explanation:
          "Arteries carry blood at high pressure, so they have thick walls with muscle and elastic fibres that stretch and recoil to maintain blood flow. Capillaries have walls one cell thick and veins have valves.",
        difficulty: "core",
        guideRef: "Blood Vessels",
        hints: [
          "Arteries carry blood under high pressure.",
          "Their walls need strength and elasticity.",
          "Valves are a feature of veins, not arteries.",
        ],
      },
      {
        id: "exam-biology-m2-23",
        question:
          "Coronary heart disease is caused by:",
        options: [
          "a viral infection of the heart valves",
          "fatty deposits narrowing the coronary arteries",
          "too many red blood cells",
          "a lack of platelets",
        ],
        answerIndex: 1,
        explanation:
          "Coronary heart disease occurs when fatty deposits build up in the coronary arteries that supply the heart muscle, reducing blood and oxygen flow. This can lead to chest pain or a heart attack.",
        difficulty: "challenge",
        guideRef: "Heart Disease",
        hints: [
          "The coronary arteries supply the heart muscle itself.",
          "Think about what could block or narrow them.",
          "Diet high in saturated fat is a risk factor.",
          "Reduced oxygen to the heart muscle is the result.",
        ],
      },
      {
        id: "exam-biology-m2-24",
        question:
          "A capillary is well suited to exchange of materials because it:",
        options: [
          "has thick muscular walls",
          "has walls one cell thick giving a short diffusion distance",
          "contains valves",
          "carries blood very fast",
        ],
        answerIndex: 1,
        explanation:
          "Capillaries have walls only one cell thick, giving a very short diffusion distance, and they form dense networks with a large surface area, allowing efficient exchange of oxygen, nutrients and wastes with tissues.",
        difficulty: "core",
        guideRef: "Blood Vessels",
        hints: [
          "Exchange is fastest over short distances.",
          "How thick is a capillary wall?",
          "Thin walls allow rapid diffusion.",
        ],
      },
      {
        id: "exam-biology-m2-25",
        question:
          "Yeast respiring anaerobically is used in brewing because it produces:",
        options: [
          "lactic acid and water",
          "ethanol and carbon dioxide",
          "oxygen and glucose",
          "urea and water",
        ],
        answerIndex: 1,
        explanation:
          "In anaerobic respiration (fermentation) yeast converts glucose into ethanol and carbon dioxide. The ethanol is used in brewing and the carbon dioxide makes bread rise.",
        difficulty: "warmup",
        guideRef: "Anaerobic Respiration",
      },
    ],
  },
  {
    id: "exam-biology-mcq-3",
    title: "Paper 3 — Multiple Choice",
    description:
      "25 questions on coordination, homeostasis, reproduction and plant responses. Allow about 45 minutes.",
    questions: [
      {
        id: "exam-biology-m3-01",
        question:
          "Which sequence correctly shows the path of a nervous reflex?",
        options: [
          "effector to motor neurone to receptor",
          "receptor to sensory neurone to relay neurone to motor neurone to effector",
          "receptor to motor neurone to sensory neurone to effector",
          "effector to relay neurone to receptor",
        ],
        answerIndex: 1,
        explanation:
          "In a reflex arc a stimulus is detected by a receptor, which sends impulses along a sensory neurone to a relay neurone in the spinal cord, then to a motor neurone, which makes the effector (a muscle or gland) respond.",
        difficulty: "core",
        guideRef: "Nervous System",
        hints: [
          "Start with the structure that detects the stimulus.",
          "End with the structure that brings about the response.",
          "The order is receptor, sensory, relay, motor, effector.",
        ],
      },
      {
        id: "exam-biology-m3-02",
        question:
          "What is the role of a synapse?",
        options: [
          "To speed up the impulse along an axon",
          "To pass an impulse from one neurone to the next using chemicals",
          "To produce hormones",
          "To detect light",
        ],
        answerIndex: 1,
        explanation:
          "A synapse is a tiny gap between two neurones. When an impulse arrives, neurotransmitter chemicals diffuse across the gap and trigger an impulse in the next neurone, allowing signals to pass in one direction.",
        difficulty: "core",
        guideRef: "Nervous System",
        hints: [
          "A synapse is a junction between neurones.",
          "Chemicals carry the signal across the gap.",
          "It ensures impulses travel one way only.",
        ],
      },
      {
        id: "exam-biology-m3-03",
        question:
          "Which part of the eye changes shape to focus light on the retina?",
        options: ["cornea", "lens", "iris", "optic nerve"],
        answerIndex: 1,
        explanation:
          "The lens changes shape (accommodation) to focus light from objects at different distances onto the retina. The cornea does most of the fixed refraction, the iris controls light entry and the optic nerve carries impulses to the brain.",
        difficulty: "warmup",
        guideRef: "The Eye",
      },
      {
        id: "exam-biology-m3-04",
        question:
          "In bright light the pupil becomes smaller. This is brought about by:",
        options: [
          "the lens becoming thinner",
          "circular muscles of the iris contracting",
          "radial muscles of the iris contracting",
          "the cornea changing shape",
        ],
        answerIndex: 1,
        explanation:
          "In bright light the circular muscles of the iris contract and the radial muscles relax, making the pupil smaller. This reduces the light entering the eye and protects the retina.",
        difficulty: "challenge",
        guideRef: "The Eye",
        hints: [
          "Two sets of iris muscles act antagonistically.",
          "A smaller pupil means circular muscles are contracting.",
          "Radial muscles widen the pupil in dim light.",
          "Bright light needs less light let in.",
        ],
      },
      {
        id: "exam-biology-m3-05",
        question:
          "Which gland releases the hormone insulin?",
        options: ["pituitary", "pancreas", "thyroid", "adrenal gland"],
        answerIndex: 1,
        explanation:
          "Insulin is produced by the pancreas. It lowers blood glucose concentration by causing cells, especially in the liver, to take up glucose and store it as glycogen.",
        difficulty: "warmup",
        guideRef: "Hormones",
      },
      {
        id: "exam-biology-m3-06",
        question:
          "After a meal high in sugar, blood glucose rises. The body responds by releasing insulin, which causes:",
        options: [
          "the liver to break down glycogen into glucose",
          "the liver and muscles to take up glucose and store it as glycogen",
          "more glucose to be absorbed from the gut",
          "the kidneys to make more urea",
        ],
        answerIndex: 1,
        explanation:
          "When blood glucose is high, insulin from the pancreas makes liver and muscle cells take up glucose and convert it to glycogen for storage, lowering blood glucose back to normal. This is an example of negative feedback.",
        difficulty: "core",
        guideRef: "Blood Glucose Control",
        hints: [
          "Insulin lowers blood glucose.",
          "Glucose is stored as glycogen.",
          "Which organs do most of this storage?",
        ],
      },
      {
        id: "exam-biology-m3-07",
        question:
          "Which describes negative feedback in homeostasis?",
        options: [
          "A change is amplified to move further from normal",
          "A change triggers a response that returns conditions to normal",
          "Conditions are kept constant without any change being detected",
          "Hormones are destroyed",
        ],
        answerIndex: 1,
        explanation:
          "Negative feedback detects a change away from the set point and triggers responses that reverse the change, returning the internal environment to normal. This keeps factors such as temperature and blood glucose stable.",
        difficulty: "challenge",
        guideRef: "Homeostasis",
        hints: [
          "Homeostasis keeps the internal environment stable.",
          "Negative feedback opposes the change detected.",
          "The response reverses, not amplifies, the change.",
          "Think temperature rising then being lowered.",
        ],
      },
      {
        id: "exam-biology-m3-08",
        question:
          "When the body is too hot, which response helps to cool it down?",
        options: [
          "shivering",
          "vasodilation of skin blood vessels and sweating",
          "hairs standing up",
          "vasoconstriction of skin blood vessels",
        ],
        answerIndex: 1,
        explanation:
          "When too hot, blood vessels near the skin surface widen (vasodilation) so more heat is lost by radiation, and sweat glands release sweat that takes heat as it evaporates. Shivering and vasoconstriction conserve heat when cold.",
        difficulty: "core",
        guideRef: "Temperature Control",
        hints: [
          "Cooling means losing heat.",
          "More blood near the surface loses more heat.",
          "Evaporation of sweat removes heat.",
        ],
      },
      {
        id: "exam-biology-m3-09",
        question:
          "Which statement comparing nervous and hormonal control is correct?",
        options: [
          "Nervous responses are slow and long-lasting",
          "Nervous responses are fast and short-lived; hormonal responses are slower and longer-lasting",
          "Hormones travel along neurones",
          "Both use electrical impulses only",
        ],
        answerIndex: 1,
        explanation:
          "Nerve impulses travel quickly along neurones and produce rapid, short-lived responses. Hormones travel more slowly in the blood and tend to produce slower, longer-lasting effects.",
        difficulty: "core",
        guideRef: "Coordination",
        hints: [
          "Compare the speed of nerves and hormones.",
          "Nerves are electrical and fast.",
          "Hormones travel in the blood and last longer.",
        ],
      },
      {
        id: "exam-biology-m3-10",
        question:
          "Adrenaline prepares the body for action. One effect of adrenaline is to:",
        options: [
          "decrease the heart rate",
          "increase the heart rate and breathing rate",
          "lower blood glucose",
          "stop the muscles working",
        ],
        answerIndex: 1,
        explanation:
          "Adrenaline, released from the adrenal glands in fear or stress, increases heart rate and breathing rate and raises blood glucose, preparing the body for fight or flight by delivering more oxygen and glucose to muscles.",
        difficulty: "warmup",
        guideRef: "Hormones",
      },
      {
        id: "exam-biology-m3-11",
        question:
          "A plant shoot grows towards light. This response is called:",
        options: [
          "positive geotropism",
          "positive phototropism",
          "negative phototropism",
          "negative gravitropism only",
        ],
        answerIndex: 1,
        explanation:
          "Growth of a shoot towards light is positive phototropism. It is controlled by the hormone auxin, which accumulates on the shaded side and causes faster growth there, bending the shoot towards the light.",
        difficulty: "core",
        guideRef: "Plant Responses",
        hints: [
          "Photo refers to light.",
          "Growth towards a stimulus is positive.",
          "Which hormone controls this growth?",
        ],
      },
      {
        id: "exam-biology-m3-12",
        question:
          "Which plant hormone is responsible for the growth responses known as tropisms?",
        options: ["insulin", "auxin", "adrenaline", "oestrogen"],
        answerIndex: 1,
        explanation:
          "Auxin is the plant hormone that controls tropisms. It is made at shoot tips and moves to regions where it promotes cell elongation, producing growth responses to light and gravity.",
        difficulty: "warmup",
        guideRef: "Plant Responses",
      },
      {
        id: "exam-biology-m3-13",
        question:
          "Which structure produces male gametes in a flowering plant?",
        options: ["ovary", "anther", "stigma", "petal"],
        answerIndex: 1,
        explanation:
          "The anther, part of the stamen, produces pollen grains that contain the male gametes. The ovary contains ovules with female gametes, and the stigma receives pollen during pollination.",
        difficulty: "warmup",
        guideRef: "Plant Reproduction",
      },
      {
        id: "exam-biology-m3-14",
        question:
          "Which features are typical of a wind-pollinated flower?",
        options: [
          "large, brightly coloured petals and scent",
          "small petals, feathery stigmas and anthers hanging outside the flower",
          "sticky pollen and nectar",
          "a closed flower with no stamens",
        ],
        answerIndex: 1,
        explanation:
          "Wind-pollinated flowers have small, dull petals, no scent or nectar, large feathery stigmas to catch pollen and anthers that hang outside to release light pollen into the air. Bright petals and nectar are features of insect-pollinated flowers.",
        difficulty: "challenge",
        guideRef: "Pollination",
        hints: [
          "Wind-pollinated flowers do not need to attract insects.",
          "So they lack bright petals, scent and nectar.",
          "Stigmas must catch pollen from the air.",
          "Anthers hang out to release pollen to the wind.",
        ],
      },
      {
        id: "exam-biology-m3-15",
        question:
          "In humans, fertilisation normally occurs in the:",
        options: ["uterus", "oviduct (fallopian tube)", "vagina", "ovary"],
        answerIndex: 1,
        explanation:
          "Fertilisation, the fusion of a sperm nucleus with an egg nucleus, usually takes place in the oviduct (fallopian tube). The fertilised egg then travels to the uterus to implant.",
        difficulty: "core",
        guideRef: "Human Reproduction",
        hints: [
          "The egg is released from the ovary.",
          "Sperm meet the egg before it reaches the uterus.",
          "Fertilisation happens in the tube between ovary and uterus.",
        ],
      },
      {
        id: "exam-biology-m3-16",
        question:
          "What is the function of the placenta?",
        options: [
          "To produce sperm",
          "To allow exchange of materials between the mother and the fetus",
          "To store urine",
          "To make red blood cells in the mother",
        ],
        answerIndex: 1,
        explanation:
          "The placenta allows the exchange of substances between the mother's blood and the fetus's blood: oxygen and nutrients pass to the fetus while carbon dioxide and urea pass back to the mother, without the two bloods mixing.",
        difficulty: "core",
        guideRef: "Pregnancy",
        hints: [
          "The fetus cannot breathe or feed itself directly.",
          "Substances must pass between two blood supplies.",
          "The bloods exchange materials but do not mix.",
        ],
      },
      {
        id: "exam-biology-m3-17",
        question:
          "Which hormone controls the development of female secondary sexual characteristics?",
        options: ["testosterone", "oestrogen", "insulin", "adrenaline"],
        answerIndex: 1,
        explanation:
          "Oestrogen, produced by the ovaries, controls the development of female secondary sexual characteristics such as breast development and the widening of the hips, and helps regulate the menstrual cycle. Testosterone has the equivalent role in males.",
        difficulty: "warmup",
        guideRef: "Reproductive Hormones",
      },
      {
        id: "exam-biology-m3-18",
        question:
          "During the menstrual cycle, the lining of the uterus thickens in preparation for:",
        options: [
          "menstruation",
          "implantation of a fertilised egg",
          "ovulation only",
          "the production of sperm",
        ],
        answerIndex: 1,
        explanation:
          "After menstruation the uterus lining is rebuilt and thickens so that, if an egg is fertilised, the embryo can implant and be supported. If no fertilisation occurs, the lining breaks down at menstruation.",
        difficulty: "challenge",
        guideRef: "Menstrual Cycle",
        hints: [
          "The lining is rebuilt each cycle.",
          "It prepares to receive an embryo.",
          "Implantation needs a thick, blood-rich lining.",
          "If no embryo arrives, the lining is shed.",
        ],
      },
      {
        id: "exam-biology-m3-19",
        question:
          "Which method of contraception works by preventing the release of eggs?",
        options: [
          "condom",
          "contraceptive pill containing hormones",
          "diaphragm",
          "spermicide",
        ],
        answerIndex: 1,
        explanation:
          "The contraceptive pill contains hormones (oestrogen and progesterone) that prevent ovulation, so no egg is released. Condoms, diaphragms and spermicides act as barriers or kill sperm but do not stop ovulation.",
        difficulty: "core",
        guideRef: "Contraception",
        hints: [
          "Look for a hormonal method.",
          "Hormones can stop an egg being released.",
          "Barrier methods do not affect ovulation.",
        ],
      },
      {
        id: "exam-biology-m3-20",
        question:
          "Which of these is a sexually transmitted infection caused by a virus?",
        options: ["scurvy", "HIV/AIDS", "diabetes", "rickets"],
        answerIndex: 1,
        explanation:
          "HIV is a virus transmitted through body fluids, including during unprotected sex, and can lead to AIDS by attacking the immune system. Scurvy, rickets and diabetes are not infections.",
        difficulty: "core",
        guideRef: "STIs",
        hints: [
          "Identify which option is an infection.",
          "It is spread through body fluids.",
          "It damages the immune system.",
        ],
      },
      {
        id: "exam-biology-m3-21",
        question:
          "Which part of a seed develops into the root of the new plant?",
        options: ["plumule", "radicle", "testa", "cotyledon"],
        answerIndex: 1,
        explanation:
          "The radicle is the embryonic root and grows downward first during germination. The plumule becomes the shoot, the testa is the seed coat and the cotyledon stores food.",
        difficulty: "warmup",
        guideRef: "Germination",
      },
      {
        id: "exam-biology-m3-22",
        question:
          "Which conditions are needed for most seeds to germinate?",
        options: [
          "light, soil and fertiliser",
          "water, oxygen and a suitable temperature",
          "carbon dioxide and chlorophyll",
          "darkness only",
        ],
        answerIndex: 1,
        explanation:
          "Germination requires water to activate enzymes and mobilise food stores, oxygen for aerobic respiration to release energy, and a suitable warm temperature for enzyme activity. Light is not generally needed at this stage.",
        difficulty: "core",
        guideRef: "Germination",
        hints: [
          "Seeds respire as they germinate.",
          "Respiration needs oxygen and produces energy.",
          "Enzymes need water and warmth to work.",
        ],
      },
      {
        id: "exam-biology-m3-23",
        question:
          "An advantage of asexual reproduction in plants is that:",
        options: [
          "it produces lots of genetic variation",
          "offspring are genetically identical to the parent, so good traits are kept",
          "it always requires two parents",
          "it needs pollinators",
        ],
        answerIndex: 1,
        explanation:
          "Asexual reproduction produces genetically identical offspring (clones), so a successful parent's useful characteristics are passed on exactly, and it can be rapid and needs only one parent. The lack of variation is a disadvantage if conditions change.",
        difficulty: "challenge",
        guideRef: "Asexual Reproduction",
        hints: [
          "Asexual reproduction involves one parent.",
          "There is no mixing of genetic material.",
          "Offspring are clones of the parent.",
          "Useful traits are passed on unchanged.",
        ],
      },
      {
        id: "exam-biology-m3-24",
        question:
          "Sweating helps cool the body because:",
        options: [
          "sweat is cold when it leaves the skin",
          "evaporation of sweat takes heat energy from the skin",
          "sweat blocks the pores",
          "sweat increases shivering",
        ],
        answerIndex: 1,
        explanation:
          "When sweat evaporates from the skin it absorbs heat energy (latent heat) from the body, cooling the skin and helping return body temperature to normal. This is most effective in dry, moving air.",
        difficulty: "core",
        guideRef: "Temperature Control",
        hints: [
          "It is not the sweat itself but what happens to it.",
          "Evaporation requires energy.",
          "That energy comes from the skin as heat.",
        ],
      },
      {
        id: "exam-biology-m3-25",
        question:
          "The brain and spinal cord together form the:",
        options: [
          "peripheral nervous system",
          "central nervous system",
          "endocrine system",
          "circulatory system",
        ],
        answerIndex: 1,
        explanation:
          "The brain and spinal cord make up the central nervous system (CNS), which coordinates responses. The nerves connecting the CNS to the rest of the body form the peripheral nervous system.",
        difficulty: "warmup",
        guideRef: "Nervous System",
      },
    ],
  },
  {
    id: "exam-biology-mcq-4",
    title: "Paper 4 — Multiple Choice",
    description:
      "25 questions on inheritance, variation, selection, ecology, disease, immunity and biotechnology. Allow about 45 minutes.",
    questions: [
      {
        id: "exam-biology-m4-01",
        question:
          "What name is given to a length of DNA that codes for a particular protein?",
        options: ["chromosome", "gene", "nucleus", "ribosome"],
        answerIndex: 1,
        explanation:
          "A gene is a length of DNA that codes for the production of a specific protein by determining the order of amino acids. Chromosomes are made of many genes, and the nucleus contains the chromosomes.",
        difficulty: "warmup",
        guideRef: "DNA and Genes",
      },
      {
        id: "exam-biology-m4-02",
        question:
          "In humans, how many chromosomes are found in a normal body cell?",
        options: ["23", "46", "92", "12"],
        answerIndex: 1,
        explanation:
          "Human body cells are diploid and contain 46 chromosomes arranged in 23 pairs. Gametes (sex cells) are haploid and contain 23 chromosomes.",
        difficulty: "warmup",
        guideRef: "Chromosomes",
      },
      {
        id: "exam-biology-m4-03",
        question:
          "Which term describes an organism with two different alleles for a characteristic?",
        options: ["homozygous", "heterozygous", "haploid", "recessive"],
        answerIndex: 1,
        explanation:
          "An organism with two different alleles for a gene is heterozygous. If both alleles are the same it is homozygous. Haploid refers to a single set of chromosomes.",
        difficulty: "core",
        guideRef: "Genetics Terms",
        hints: [
          "Hetero means different.",
          "Homo means same.",
          "Two different alleles is which term?",
        ],
      },
      {
        id: "exam-biology-m4-04",
        question:
          "Two heterozygous tall plants (Tt) are crossed, where tall (T) is dominant. What proportion of offspring are expected to be short?",
        options: ["all of them", "three quarters", "one quarter", "none"],
        answerIndex: 2,
        explanation:
          "Crossing Tt with Tt gives genotypes in the ratio 1 TT : 2 Tt : 1 tt. Only the tt plants (one quarter) are short, because short is recessive and needs two recessive alleles. Three quarters are tall.",
        difficulty: "challenge",
        guideRef: "Monohybrid Crosses",
        hints: [
          "Draw a Punnett square for Tt crossed with Tt.",
          "The genotype ratio is 1 TT : 2 Tt : 1 tt.",
          "Short needs two recessive alleles (tt).",
          "Count what fraction is tt.",
        ],
        strategy:
          "Use a Punnett square: list parent gametes on each axis, fill the grid, then count the genotypes that show the phenotype asked for.",
      },
      {
        id: "exam-biology-m4-05",
        question:
          "Which statement about a recessive allele is correct?",
        options: [
          "It is always expressed in the phenotype",
          "It is only expressed when two copies are present",
          "It cannot be inherited",
          "It is found only on the Y chromosome",
        ],
        answerIndex: 1,
        explanation:
          "A recessive allele is only expressed in the phenotype when two copies are present (homozygous recessive). When a dominant allele is also present, the dominant characteristic is shown instead.",
        difficulty: "core",
        guideRef: "Dominant and Recessive",
        hints: [
          "Recessive alleles are masked by dominant ones.",
          "How many copies are needed to show the trait?",
          "Two recessive alleles are required.",
        ],
      },
      {
        id: "exam-biology-m4-06",
        question:
          "Which type of cell division produces gametes with half the number of chromosomes?",
        options: ["mitosis", "meiosis", "binary fission", "budding"],
        answerIndex: 1,
        explanation:
          "Meiosis is a reduction division that produces four genetically different haploid gametes, each with half the chromosome number. Mitosis produces genetically identical diploid cells for growth and repair.",
        difficulty: "core",
        guideRef: "Cell Division",
        hints: [
          "Gametes have half the chromosome number.",
          "The division that halves the number is reduction division.",
          "Mitosis keeps the number the same.",
        ],
      },
      {
        id: "exam-biology-m4-07",
        question:
          "Which of the following is an example of discontinuous variation?",
        options: [
          "height in humans",
          "blood group (A, B, AB or O)",
          "body mass",
          "leaf length",
        ],
        answerIndex: 1,
        explanation:
          "Discontinuous variation falls into distinct categories with no intermediates, such as the ABO blood groups. Height, mass and leaf length show continuous variation, a range of values controlled by many genes and the environment.",
        difficulty: "challenge",
        guideRef: "Variation",
        hints: [
          "Discontinuous variation has clear separate categories.",
          "Continuous variation gives a range of values.",
          "Which option has only a few distinct types?",
          "Blood groups are either one type or another.",
        ],
      },
      {
        id: "exam-biology-m4-08",
        question:
          "A sudden change in the base sequence of DNA is called a:",
        options: ["mutation", "selection", "fertilisation", "pollination"],
        answerIndex: 0,
        explanation:
          "A mutation is a change in the base sequence of DNA. Mutations are the source of new alleles and genetic variation; their rate is increased by factors such as ionising radiation and certain chemicals.",
        difficulty: "warmup",
        guideRef: "Mutation",
      },
      {
        id: "exam-biology-m4-09",
        question:
          "Bacteria that are resistant to an antibiotic survive treatment and reproduce. This is an example of:",
        options: [
          "natural selection",
          "artificial selection",
          "asexual reproduction only",
          "selective breeding by humans",
        ],
        answerIndex: 0,
        explanation:
          "Antibiotic resistance arises by natural selection: a chance mutation makes some bacteria resistant, these survive when antibiotics are used, and they reproduce to pass on the resistance allele, so the resistant population increases.",
        difficulty: "challenge",
        guideRef: "Natural Selection",
        hints: [
          "Variation in resistance already exists by mutation.",
          "The antibiotic acts as the selection pressure.",
          "Survivors reproduce and pass on the allele.",
          "No human is deliberately choosing the survivors.",
        ],
      },
      {
        id: "exam-biology-m4-10",
        question:
          "Selective breeding (artificial selection) differs from natural selection because:",
        options: [
          "it does not involve genes",
          "humans choose which organisms reproduce",
          "it produces no variation",
          "it only happens in bacteria",
        ],
        answerIndex: 1,
        explanation:
          "In selective breeding humans choose organisms with desirable features and breed them together over generations to enhance those features. In natural selection the environment, not humans, determines which organisms survive and reproduce.",
        difficulty: "core",
        guideRef: "Selective Breeding",
        hints: [
          "Both rely on inherited variation.",
          "The difference is who does the choosing.",
          "In selective breeding humans select the parents.",
        ],
      },
      {
        id: "exam-biology-m4-11",
        question:
          "In a food chain, the arrows show the direction of:",
        options: [
          "the flow of energy",
          "the movement of predators",
          "the loss of water",
          "the flow of oxygen",
        ],
        answerIndex: 0,
        explanation:
          "Arrows in a food chain point from the organism being eaten to the one that eats it, showing the direction in which energy (and biomass) is transferred along the chain.",
        difficulty: "warmup",
        guideRef: "Food Chains",
      },
      {
        id: "exam-biology-m4-12",
        question:
          "In the food chain grass to grasshopper to frog to snake, the frog is a:",
        options: [
          "producer",
          "secondary consumer",
          "primary consumer",
          "decomposer",
        ],
        answerIndex: 1,
        explanation:
          "Grass is the producer, the grasshopper is the primary consumer (herbivore), the frog eats the grasshopper so it is the secondary consumer, and the snake is the tertiary consumer.",
        difficulty: "core",
        guideRef: "Trophic Levels",
        hints: [
          "Producers make their own food.",
          "The first animal is the primary consumer.",
          "Count along to find the frog's level.",
        ],
      },
      {
        id: "exam-biology-m4-13",
        question:
          "Why are food chains usually limited to four or five trophic levels?",
        options: [
          "There are not enough names for higher levels",
          "Energy is lost at each transfer, so little is left for higher levels",
          "Top predators do not need to eat",
          "Producers stop growing",
        ],
        answerIndex: 1,
        explanation:
          "Only about 10 percent of the energy at one trophic level is passed on to the next; the rest is lost through respiration, movement and waste. After a few transfers too little energy remains to support another level.",
        difficulty: "challenge",
        guideRef: "Energy Flow",
        hints: [
          "Energy is lost at each stage of a food chain.",
          "Respiration, movement and waste remove energy.",
          "Only a small fraction passes to the next level.",
          "Eventually too little energy is left.",
        ],
      },
      {
        id: "exam-biology-m4-14",
        question:
          "Which process in the carbon cycle removes carbon dioxide from the atmosphere?",
        options: ["respiration", "photosynthesis", "combustion", "decomposition"],
        answerIndex: 1,
        explanation:
          "Photosynthesis removes carbon dioxide from the air and fixes the carbon into glucose and other compounds in plants. Respiration, combustion and decomposition all return carbon dioxide to the atmosphere.",
        difficulty: "core",
        guideRef: "Carbon Cycle",
        hints: [
          "Which process uses carbon dioxide?",
          "It happens in green plants.",
          "Respiration and burning release carbon dioxide instead.",
        ],
      },
      {
        id: "exam-biology-m4-15",
        question:
          "Which organisms return nutrients to the soil by breaking down dead material?",
        options: ["producers", "decomposers", "herbivores", "top predators"],
        answerIndex: 1,
        explanation:
          "Decomposers, such as bacteria and fungi, break down dead organisms and waste, releasing mineral nutrients back into the soil where plants can reabsorb them. This is essential for recycling nutrients like nitrogen.",
        difficulty: "warmup",
        guideRef: "Decomposers",
      },
      {
        id: "exam-biology-m4-16",
        question:
          "In the nitrogen cycle, which bacteria convert nitrogen gas into nitrogen compounds that plants can use?",
        options: [
          "decomposing bacteria",
          "nitrogen-fixing bacteria",
          "denitrifying bacteria",
          "lactic acid bacteria",
        ],
        answerIndex: 1,
        explanation:
          "Nitrogen-fixing bacteria, found in the soil and in root nodules of legumes, convert atmospheric nitrogen into ammonium or nitrogen compounds that plants can absorb and use to make proteins.",
        difficulty: "challenge",
        guideRef: "Nitrogen Cycle",
        hints: [
          "The clue is in the name of the bacteria.",
          "Fixing means capturing nitrogen gas.",
          "Denitrifying does the opposite.",
          "Some live in legume root nodules.",
        ],
      },
      {
        id: "exam-biology-m4-17",
        question:
          "Eutrophication of a lake can be caused by:",
        options: [
          "too little sunlight",
          "fertilisers running off fields into the water",
          "removing all the fish",
          "planting trees nearby",
        ],
        answerIndex: 1,
        explanation:
          "Excess fertiliser (nitrate) washing into water causes rapid algal growth (an algal bloom). When the algae die, decomposing bacteria multiply and use up the dissolved oxygen, so aquatic animals such as fish suffocate.",
        difficulty: "challenge",
        guideRef: "Eutrophication",
        hints: [
          "Think about what adds extra nutrients to water.",
          "Nitrate from fertiliser causes algae to grow rapidly.",
          "Decomposers then use up oxygen.",
          "Low oxygen kills aquatic life.",
        ],
      },
      {
        id: "exam-biology-m4-18",
        question:
          "Which of these is a pathogen that causes disease?",
        options: [
          "a white blood cell",
          "a bacterium such as the one causing cholera",
          "an antibody",
          "a red blood cell",
        ],
        answerIndex: 1,
        explanation:
          "A pathogen is a disease-causing microorganism. The bacterium that causes cholera is a pathogen. White blood cells and antibodies are part of the body's defence, not pathogens.",
        difficulty: "warmup",
        guideRef: "Pathogens",
      },
      {
        id: "exam-biology-m4-19",
        question:
          "How do phagocytes defend the body against pathogens?",
        options: [
          "by producing antibodies",
          "by engulfing and digesting the pathogens",
          "by clotting the blood",
          "by carrying oxygen",
        ],
        answerIndex: 1,
        explanation:
          "Phagocytes are white blood cells that engulf pathogens and digest them with enzymes (phagocytosis). Lymphocytes are the white blood cells that produce antibodies.",
        difficulty: "core",
        guideRef: "Immune System",
        hints: [
          "Two types of white blood cell have different roles.",
          "Phagocytes act by surrounding pathogens.",
          "They then digest the pathogen.",
        ],
      },
      {
        id: "exam-biology-m4-20",
        question:
          "A vaccine provides protection against a disease by:",
        options: [
          "killing pathogens already in the blood with antibiotics",
          "introducing weakened or dead pathogens so lymphocytes make antibodies and memory cells",
          "supplying ready-made red blood cells",
          "providing extra oxygen",
        ],
        answerIndex: 1,
        explanation:
          "A vaccine contains weakened, dead or parts of a pathogen carrying antigens. These stimulate lymphocytes to produce antibodies and memory cells, so if the real pathogen later enters the body it can be destroyed quickly before causing illness.",
        difficulty: "challenge",
        guideRef: "Vaccination",
        hints: [
          "A vaccine contains antigens but does not cause the disease.",
          "It triggers the immune response in advance.",
          "Lymphocytes make antibodies and memory cells.",
          "Memory cells give a fast response next time.",
        ],
      },
      {
        id: "exam-biology-m4-21",
        question:
          "Which of these is the best way to reduce the spread of an infectious disease?",
        options: [
          "eating more sugar",
          "good hygiene such as hand washing and safe food handling",
          "exercising less",
          "staying indoors permanently with no ventilation",
        ],
        answerIndex: 1,
        explanation:
          "Good hygiene, including hand washing, safe preparation and storage of food, clean water and proper sewage treatment, reduces the transmission of pathogens and the spread of infectious disease.",
        difficulty: "warmup",
        guideRef: "Disease Transmission",
      },
      {
        id: "exam-biology-m4-22",
        question:
          "Antibiotics are effective against:",
        options: [
          "viruses such as influenza",
          "bacteria",
          "all pathogens equally",
          "the body's own cells",
        ],
        answerIndex: 1,
        explanation:
          "Antibiotics kill or stop the growth of bacteria, often by targeting structures such as the bacterial cell wall or ribosomes that human cells do not share. They have no effect on viruses, which is why they are not used for colds or flu.",
        difficulty: "core",
        guideRef: "Antibiotics",
        hints: [
          "Antibiotics target features unique to one group of pathogens.",
          "Viruses are not affected by them.",
          "They act against bacteria.",
        ],
      },
      {
        id: "exam-biology-m4-23",
        question:
          "In genetic engineering, which enzyme is used to cut a gene out of DNA?",
        options: [
          "amylase",
          "restriction enzyme",
          "lipase",
          "catalase",
        ],
        answerIndex: 1,
        explanation:
          "Restriction enzymes cut DNA at specific base sequences, allowing a desired gene to be isolated. Ligase enzymes are then used to join the gene into a vector such as a plasmid.",
        difficulty: "challenge",
        guideRef: "Genetic Engineering",
        hints: [
          "The enzyme must cut DNA at particular sequences.",
          "Its name relates to restricting or cutting.",
          "Ligase joins, this enzyme cuts.",
          "It is not a digestive enzyme.",
        ],
      },
      {
        id: "exam-biology-m4-24",
        question:
          "Bacteria are useful in genetic engineering to make products such as human insulin because they:",
        options: [
          "are large and easy to see",
          "reproduce rapidly and can be given a human gene to express",
          "contain chloroplasts",
          "cannot make proteins",
        ],
        answerIndex: 1,
        explanation:
          "Bacteria reproduce very quickly and, once a human gene (such as the insulin gene) is inserted into a plasmid and taken up by the bacteria, they express it to make large quantities of the human protein cheaply.",
        difficulty: "core",
        guideRef: "Biotechnology",
        hints: [
          "Think about how fast bacteria multiply.",
          "A human gene can be inserted into them.",
          "They then make the human protein in bulk.",
        ],
      },
      {
        id: "exam-biology-m4-25",
        question:
          "Pectinase is an enzyme used in industry to:",
        options: [
          "make bread rise",
          "increase the yield and clarity of fruit juice",
          "wash clothes at low temperature",
          "ferment milk into yoghurt",
        ],
        answerIndex: 1,
        explanation:
          "Pectinase breaks down pectin in plant cell walls, releasing more juice from crushed fruit and helping to clear the cloudiness, so it increases both the yield and the clarity of fruit juice.",
        difficulty: "core",
        guideRef: "Industrial Enzymes",
        hints: [
          "Pectin is found in plant cell walls of fruit.",
          "Breaking it down releases more liquid.",
          "It affects fruit juice production.",
        ],
      },
    ],
  },
];
