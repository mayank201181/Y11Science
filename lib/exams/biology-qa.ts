import type { Paper, QA } from "../types";

export const biologyExamQaPapers: Paper<QA>[] = [
  {
    id: "exam-biology-qa-1",
    title: "Paper 1 — Structured",
    description:
      "Whole-subject structured (short-answer) mock covering cell biology, movement in and out of cells, enzymes, biological molecules and human nutrition. Twenty questions with full model answers, keyword mark schemes and worked calculations.",
    questions: [
      {
        id: "exam-biology-q1-01",
        question: "Name the organelle that controls the activities of a cell and state what it contains. [2]",
        marks: 2,
        modelAnswer:
          "The nucleus controls the activities of the cell. It contains chromosomes made of DNA, which carry the genetic information.",
        markScheme: [
          "Nucleus",
          "Contains chromosomes / DNA / genetic material"
        ],
        commonError: "Confusing the nucleus with the nucleolus, or saying it contains genes without mentioning DNA/chromosomes.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q1-02",
        question: "State three structures found in a plant cell that are not present in an animal cell. [3]",
        marks: 3,
        modelAnswer:
          "A cellulose cell wall, chloroplasts, and a large permanent (sap) vacuole are present in a plant cell but absent from an animal cell.",
        markScheme: [
          "Cell wall (cellulose)",
          "Chloroplast(s)",
          "Large permanent sap / central vacuole"
        ],
        commonError: "Listing 'cell membrane' or 'nucleus' as plant-only — both are present in animal cells too.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q1-03",
        question:
          "A red blood cell appears 14 mm in diameter in a photomicrograph taken at a magnification of x2000. Calculate the actual diameter of the red blood cell in micrometres. Show your working. [3]",
        marks: 3,
        modelAnswer:
          "Actual size = image size / magnification = 14 mm / 2000 = 0.007 mm. Converting to micrometres: 0.007 mm x 1000 = 7 micrometres. The actual diameter is 7 micrometres.",
        markScheme: [
          "Use of actual size = image size / magnification",
          "14 / 2000 = 0.007 mm",
          "Conversion to 7 micrometres (x1000)"
        ],
        commonError: "Forgetting to convert mm to micrometres, leaving the answer as 0.007.",
        difficulty: "core",
        hints: [
          "Write the magnification formula and rearrange for actual size.",
          "Actual size = image size / magnification.",
          "Work in mm first: 14 / 2000.",
          "Convert mm to micrometres by multiplying by 1000."
        ],
        solutions: [
          {
            label: "Rearrange then convert",
            steps: [
              "Magnification = image size / actual size",
              "Rearrange: actual size = image size / magnification",
              "Substitute: actual size = 14 mm / 2000 = 0.007 mm",
              "Convert: 0.007 mm x 1000 = 7 micrometres"
            ]
          }
        ]
      },
      {
        id: "exam-biology-q1-04",
        question: "Define the term diffusion. [2]",
        marks: 2,
        modelAnswer:
          "Diffusion is the net movement of particles from a region of their higher concentration to a region of their lower concentration, down a concentration gradient, as a result of their random motion.",
        markScheme: [
          "Net movement of particles from high to low concentration / down a concentration gradient",
          "Due to random movement of particles / passive (no energy from the cell)"
        ],
        commonError: "Omitting the word 'net' or saying particles move 'until they run out' rather than down a gradient.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q1-05",
        question:
          "Explain why a piece of potato placed in pure (distilled) water becomes firm and increases in mass. [4]",
        marks: 4,
        modelAnswer:
          "The cell sap inside the potato cells has a lower water potential (more concentrated solution) than the pure water outside. Water therefore moves into the cells by osmosis through the partially permeable cell membranes, down a water potential gradient. The cells gain water and become turgid, pushing against the cell walls, so the tissue becomes firm and the mass increases.",
        markScheme: [
          "Water potential of cell sap lower than pure water / cells more concentrated",
          "Water enters by osmosis through partially permeable membrane",
          "Down a water potential / concentration gradient",
          "Cells become turgid / mass increases as water enters"
        ],
        commonError: "Saying salt or sugar moves out of the potato — osmosis only involves water movement.",
        difficulty: "core",
        hints: [
          "Compare the concentration of the cell contents with the pure water.",
          "Which substance moves across the membrane in osmosis?",
          "State the direction of movement using water potential.",
          "Link water entry to turgidity and gain in mass."
        ]
      },
      {
        id: "exam-biology-q1-06",
        question:
          "Active transport is used by root hair cells to absorb mineral ions. Explain how active transport differs from diffusion. [3]",
        marks: 3,
        modelAnswer:
          "Active transport moves particles against a concentration gradient, from a lower to a higher concentration, whereas diffusion moves particles down a gradient. Active transport requires energy from respiration (ATP) and uses carrier/transport proteins, while diffusion is passive and needs no energy from the cell.",
        markScheme: [
          "Active transport moves substances against the concentration gradient (low to high) / diffusion is down the gradient",
          "Active transport requires energy / ATP from respiration / diffusion is passive",
          "Active transport uses carrier (transport) proteins"
        ],
        commonError: "Stating diffusion uses energy, or that active transport does not need proteins.",
        difficulty: "core",
        hints: [
          "Compare the direction of movement relative to the gradient.",
          "Which process needs energy from respiration?",
          "Name the type of protein active transport relies on."
        ]
      },
      {
        id: "exam-biology-q1-07",
        question: "State what is meant by an enzyme. [2]",
        marks: 2,
        modelAnswer:
          "An enzyme is a biological catalyst made of protein that speeds up the rate of a chemical reaction without being used up or changed permanently in the reaction.",
        markScheme: [
          "Biological catalyst / speeds up rate of reaction",
          "Made of protein / not used up / unchanged"
        ],
        commonError: "Describing enzymes as 'living things' — they are molecules, not organisms.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q1-08",
        question:
          "Describe and explain the effect of increasing temperature from 10 C to 60 C on the rate of an enzyme-controlled reaction. [4]",
        marks: 4,
        modelAnswer:
          "As temperature increases from 10 C towards the optimum (around 37 C), the rate increases because the enzyme and substrate molecules gain kinetic energy and collide more frequently, forming more enzyme-substrate complexes. Above the optimum, the rate falls sharply because the high temperature breaks bonds holding the enzyme's tertiary structure together. The active site changes shape (the enzyme is denatured) so the substrate no longer fits, and at 60 C most enzyme molecules are denatured.",
        markScheme: [
          "Rate increases up to the optimum temperature",
          "Increased kinetic energy / more frequent collisions / more enzyme-substrate complexes",
          "Above optimum rate decreases / enzyme denatured",
          "Active site changes shape so substrate no longer fits"
        ],
        commonError: "Saying the enzyme is 'killed' — enzymes are not alive; they are denatured.",
        difficulty: "core",
        hints: [
          "Describe the rate below and above the optimum separately.",
          "Use the idea of kinetic energy and collisions for the rise.",
          "Explain the fall using denaturation.",
          "Link the changed active site to the substrate no longer fitting."
        ]
      },
      {
        id: "exam-biology-q1-09",
        question:
          "An enzyme works best at pH 2. Suggest where in the human body this enzyme is most likely to act and name the enzyme. [2]",
        marks: 2,
        modelAnswer:
          "An optimum of pH 2 is very acidic, matching conditions in the stomach. The enzyme is most likely pepsin, a protease that digests proteins in the acidic stomach.",
        markScheme: [
          "Stomach (acidic conditions)",
          "Pepsin / a (stomach) protease"
        ],
        commonError: "Naming amylase, which works in the neutral/slightly alkaline mouth and small intestine, not at pH 2.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q1-10",
        question:
          "Describe the chemical test for reducing sugars and state the positive result. [3]",
        marks: 3,
        modelAnswer:
          "Add Benedict's solution to the sample and heat in a water bath at about 80 C. If a reducing sugar is present, the blue solution changes colour through green, yellow and orange to a brick-red precipitate. A blue colour that remains is a negative result.",
        markScheme: [
          "Add Benedict's solution",
          "Heat / water bath",
          "Positive result: blue to brick-red / orange-red precipitate"
        ],
        commonError: "Forgetting that heating is required, or stating the colour change in the wrong direction.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q1-11",
        question:
          "Iodine solution is used to test for starch. State the colour change for a positive result and name one food rich in starch. [2]",
        marks: 2,
        modelAnswer:
          "With starch present, the orange-brown iodine solution changes to a blue-black colour. Potato (or bread/rice) is rich in starch.",
        markScheme: [
          "Orange-brown / brown to blue-black",
          "Named starchy food, e.g. potato / bread / rice"
        ],
        commonError: "Saying the iodine turns 'black only' or describing the Benedict's colour change instead.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q1-12",
        question:
          "Explain the role of bile in the digestion of fats, including why it is described as emulsification. [3]",
        marks: 3,
        modelAnswer:
          "Bile is released into the small intestine where it emulsifies fats. Emulsification means breaking large fat droplets into many small droplets, which greatly increases the surface area of the fat. This larger surface area allows the enzyme lipase to digest the fat more rapidly. Bile is also alkaline and neutralises the acidic mixture from the stomach.",
        markScheme: [
          "Bile emulsifies fats / breaks large fat droplets into small droplets",
          "Increases surface area (for lipase / enzyme action)",
          "Allows faster digestion by lipase / bile neutralises stomach acid"
        ],
        commonError: "Stating that bile is an enzyme or that it chemically digests fats — bile is not an enzyme.",
        difficulty: "core",
        hints: [
          "Bile is not an enzyme — what physical change does it cause?",
          "Think about droplet size and surface area.",
          "Link the larger surface area to the action of lipase."
        ]
      },
      {
        id: "exam-biology-q1-13",
        question:
          "A child's diet lacks vitamin C. Name the deficiency disease that may result and state one food that would prevent it. [2]",
        marks: 2,
        modelAnswer:
          "A lack of vitamin C causes scurvy. Eating citrus fruits such as oranges (or other fresh fruit and vegetables) would prevent it.",
        markScheme: [
          "Scurvy",
          "Named source of vitamin C, e.g. oranges / citrus fruit / fresh vegetables"
        ],
        commonError: "Confusing scurvy (vitamin C) with rickets (vitamin D) or anaemia (iron).",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q1-14",
        question:
          "Describe the function of the villi in the small intestine and give two ways they are adapted for absorption. [4]",
        marks: 4,
        modelAnswer:
          "Villi are finger-like projections of the small intestine wall whose function is to absorb the soluble products of digestion into the blood and lymph. They are adapted by having a very large surface area (many villi, each covered in microvilli) which increases the rate of absorption. They also have a thin wall (one cell thick) giving a short diffusion distance, and a rich blood supply (a network of capillaries) plus a lacteal that maintains a steep concentration gradient.",
        markScheme: [
          "Function: absorb (soluble) products of digestion into blood / lymph",
          "Large surface area (villi / microvilli)",
          "Thin wall / one cell thick / short diffusion distance",
          "Good blood supply (capillaries) / lacteal maintains concentration gradient"
        ],
        commonError: "Confusing villi with vili in the lungs (alveoli) or stating they secrete enzymes only.",
        difficulty: "core",
        hints: [
          "State what the villi absorb and where it goes.",
          "Think about surface area and microvilli.",
          "How thin is the wall and why does that help?",
          "What maintains the concentration gradient?"
        ]
      },
      {
        id: "exam-biology-q1-15",
        question:
          "Mechanical and chemical digestion both occur in the human gut. Explain the difference between them, giving one example of each. [3]",
        marks: 3,
        modelAnswer:
          "Mechanical (physical) digestion is the physical breakdown of food into smaller pieces without changing it chemically, for example chewing by the teeth or churning by the stomach muscles. Chemical digestion is the breakdown of large insoluble molecules into small soluble molecules by enzymes, for example amylase breaking starch into maltose.",
        markScheme: [
          "Mechanical: physical breakdown into smaller pieces / no chemical change, e.g. teeth chewing / stomach churning",
          "Chemical: breakdown of large molecules into small soluble molecules by enzymes",
          "Correct enzyme example, e.g. amylase to starch / protease to protein"
        ],
        commonError: "Calling chewing 'chemical digestion' or saying mechanical digestion uses enzymes.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q1-16",
        question:
          "Define osmosis using the term water potential. [3]",
        marks: 3,
        modelAnswer:
          "Osmosis is the net movement of water molecules from a region of higher water potential (a dilute solution) to a region of lower water potential (a concentrated solution), through a partially permeable membrane.",
        markScheme: [
          "Net movement of water molecules",
          "From higher to lower water potential / dilute to concentrated",
          "Through a partially (selectively) permeable membrane"
        ],
        commonError: "Forgetting to mention the partially permeable membrane, or saying solute moves.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q1-17",
        question:
          "An experiment measured the volume of oxygen produced by catalase acting on hydrogen peroxide. In 2 minutes, 60 cm3 of oxygen was collected. Calculate the rate of reaction in cm3 per second. Show your working. [3]",
        marks: 3,
        modelAnswer:
          "Convert the time to seconds: 2 minutes = 120 seconds. Rate = volume / time = 60 cm3 / 120 s = 0.5 cm3 per second.",
        markScheme: [
          "Time converted to 120 s",
          "Rate = volume / time = 60 / 120",
          "0.5 cm3 per second (with unit)"
        ],
        commonError: "Dividing by 2 (minutes) instead of converting to seconds, giving 30 instead of 0.5.",
        difficulty: "core",
        hints: [
          "Convert minutes to seconds first.",
          "Rate = quantity divided by time.",
          "60 divided by 120.",
          "Include the unit cm3 per second."
        ],
        solutions: [
          {
            label: "Rate calculation",
            steps: [
              "Convert time: 2 min x 60 = 120 s",
              "Rate = volume / time",
              "Rate = 60 cm3 / 120 s",
              "Rate = 0.5 cm3 per second"
            ]
          }
        ]
      },
      {
        id: "exam-biology-q1-18",
        question:
          "Explain why the rate of an enzyme-controlled reaction levels off (plateaus) at high substrate concentration. [3]",
        marks: 3,
        modelAnswer:
          "At low substrate concentration, increasing substrate increases the rate because more active sites are occupied and more enzyme-substrate complexes form. At high substrate concentration the rate plateaus because all the available active sites are occupied (the enzyme is saturated). Adding more substrate cannot increase the rate further, so enzyme concentration becomes the limiting factor.",
        markScheme: [
          "All active sites occupied / enzyme saturated",
          "Adding more substrate has no further effect",
          "Enzyme concentration (number of active sites) is now the limiting factor"
        ],
        commonError: "Saying the enzyme is denatured — saturation, not denaturation, causes the plateau.",
        difficulty: "challenge",
        hints: [
          "Think about what happens to the active sites as substrate increases.",
          "What does saturated mean in this context?",
          "Identify the new limiting factor at high substrate levels."
        ]
      },
      {
        id: "exam-biology-q1-19",
        question:
          "Describe the structure of a typical animal cell membrane and state its main function. [2]",
        marks: 2,
        modelAnswer:
          "The cell membrane is a partially permeable layer made of phospholipids and proteins. Its main function is to control the movement of substances into and out of the cell.",
        markScheme: [
          "Partially permeable / made of phospholipids and proteins",
          "Controls movement of substances in and out of the cell"
        ],
        commonError: "Calling the membrane fully permeable or confusing it with the cell wall.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q1-20",
        question:
          "Carbohydrates, proteins and fats are large biological molecules. State the smaller units (building blocks) from which each is made. [3]",
        marks: 3,
        modelAnswer:
          "Carbohydrates such as starch are made from simple sugars (for example glucose). Proteins are made from amino acids. Fats (lipids) are made from fatty acids and glycerol.",
        markScheme: [
          "Carbohydrates from simple sugars / glucose",
          "Proteins from amino acids",
          "Fats from fatty acids and glycerol"
        ],
        commonError: "Saying fats are made only from fatty acids, omitting glycerol.",
        difficulty: "warmup"
      }
    ]
  },
  {
    id: "exam-biology-qa-2",
    title: "Paper 2 — Structured",
    description:
      "Whole-subject structured mock covering photosynthesis, plant nutrition and transport, gas exchange in humans, respiration and the transport system in animals. Includes data analysis and worked calculations.",
    questions: [
      {
        id: "exam-biology-q2-01",
        question: "Write the word equation for photosynthesis. [2]",
        marks: 2,
        modelAnswer:
          "Carbon dioxide + water, in the presence of light energy and chlorophyll, produce glucose + oxygen.",
        markScheme: [
          "Carbon dioxide + water on the left",
          "Glucose + oxygen on the right (light and chlorophyll required)"
        ],
        commonError: "Writing 'sunlight' as a reactant in the equation rather than a condition above the arrow.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q2-02",
        question:
          "Name three factors that can limit the rate of photosynthesis. [3]",
        marks: 3,
        modelAnswer:
          "Light intensity, carbon dioxide concentration, and temperature can all limit the rate of photosynthesis.",
        markScheme: [
          "Light intensity",
          "Carbon dioxide concentration",
          "Temperature"
        ],
        commonError: "Listing 'oxygen' or 'water' as the main limiting factors in exam contexts.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q2-03",
        question:
          "Explain why increasing light intensity eventually stops increasing the rate of photosynthesis even when more light is provided. [3]",
        marks: 3,
        modelAnswer:
          "At low light intensity, light is the limiting factor, so increasing it increases the rate. Beyond a certain point the rate stays constant because another factor, such as carbon dioxide concentration or temperature, has become the limiting factor. Providing more light cannot increase the rate while a different factor is in short supply.",
        markScheme: [
          "At first light is the limiting factor / rate increases",
          "Rate plateaus because another factor becomes limiting",
          "Named other factor, e.g. carbon dioxide concentration / temperature"
        ],
        commonError: "Saying the plant 'gets tired' or that chlorophyll runs out.",
        difficulty: "core",
        hints: [
          "Identify the limiting factor at low light.",
          "What must be true for the rate to stop rising?",
          "Name another factor that could become limiting."
        ]
      },
      {
        id: "exam-biology-q2-04",
        question:
          "Describe how a leaf is adapted for efficient photosynthesis. Give three adaptations. [3]",
        marks: 3,
        modelAnswer:
          "A leaf has a large, flat surface area (lamina) to absorb the maximum amount of light. It is thin so gases diffuse only a short distance to the cells. The palisade mesophyll cells near the top contain many chloroplasts to capture light, and there are stomata and air spaces to allow carbon dioxide to reach the cells and oxygen to leave.",
        markScheme: [
          "Large surface area / broad flat lamina to absorb light",
          "Thin for short diffusion distance / palisade cells full of chloroplasts near top",
          "Stomata / air spaces for gas exchange / vascular bundles supply water"
        ],
        commonError: "Stating the waxy cuticle helps gas exchange — the cuticle reduces water loss, it does not aid gas exchange.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q2-05",
        question:
          "Explain the function of xylem and phloem in a plant. [4]",
        marks: 4,
        modelAnswer:
          "Xylem transports water and dissolved mineral ions from the roots up to the leaves in one direction only (the transpiration stream). Xylem vessels are dead, hollow, lignified tubes. Phloem transports sucrose and amino acids (assimilates) made in the leaves to all parts of the plant for use or storage; this is called translocation and can occur in both directions. Phloem is made of living sieve tube cells with companion cells.",
        markScheme: [
          "Xylem transports water and mineral ions",
          "Xylem: from roots to leaves / one direction / dead lignified tubes",
          "Phloem transports sucrose / amino acids (assimilates) / translocation",
          "Phloem: living cells / sieve tubes / movement to all parts (both directions)"
        ],
        commonError: "Saying xylem carries food or that phloem carries water from the roots.",
        difficulty: "core",
        hints: [
          "State what each tissue transports.",
          "Give the direction of movement in each.",
          "Mention whether the cells are living or dead.",
          "Name the process carried out by phloem."
        ]
      },
      {
        id: "exam-biology-q2-06",
        question:
          "Define transpiration and state two environmental factors that increase its rate. [3]",
        marks: 3,
        modelAnswer:
          "Transpiration is the loss of water vapour from the leaves (and other aerial parts) of a plant by evaporation from the mesophyll cell surfaces and diffusion of water vapour out through the stomata. Increasing temperature and increasing wind speed (air movement) both increase the rate of transpiration, as does decreasing humidity and increasing light intensity.",
        markScheme: [
          "Loss of water vapour from leaves / evaporation then diffusion through stomata",
          "Increased temperature increases rate",
          "Increased wind speed / lower humidity / higher light intensity increases rate"
        ],
        commonError: "Describing transpiration as water 'being used up' by the plant rather than evaporating and diffusing out.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q2-07",
        question:
          "A potometer measured that a shoot took up 18 cm3 of water in 30 minutes. Calculate the rate of water uptake in cm3 per hour. Show your working. [2]",
        marks: 2,
        modelAnswer:
          "In 30 minutes the uptake was 18 cm3. There are two 30-minute periods in an hour, so rate = 18 x 2 = 36 cm3 per hour.",
        markScheme: [
          "Recognises 30 min is half an hour / multiplies by 2",
          "36 cm3 per hour (with unit)"
        ],
        commonError: "Dividing instead of multiplying, giving 9 cm3 per hour.",
        difficulty: "core",
        hints: [
          "How many 30-minute periods are in one hour?",
          "Scale the volume up to a full hour.",
          "18 multiplied by 2."
        ],
        solutions: [
          {
            label: "Scaling to per hour",
            steps: [
              "30 minutes = half an hour",
              "1 hour = 2 x 30 minutes",
              "Rate = 18 cm3 x 2 = 36 cm3 per hour"
            ]
          }
        ]
      },
      {
        id: "exam-biology-q2-08",
        question:
          "Describe how the structure of an alveolus is adapted for efficient gas exchange. [4]",
        marks: 4,
        modelAnswer:
          "Alveoli provide a very large surface area for diffusion because there are millions of them. Their walls are only one cell thick, giving a short diffusion distance. They have a rich blood supply from a dense network of capillaries, which maintains a steep concentration gradient. The surfaces are moist so that oxygen can dissolve before diffusing into the blood.",
        markScheme: [
          "Large surface area (many alveoli)",
          "Wall one cell thick / short diffusion distance",
          "Good blood supply / dense capillary network maintains concentration gradient",
          "Moist surface for gases to dissolve"
        ],
        commonError: "Saying alveoli have a thick wall for protection — a thin wall is essential for fast diffusion.",
        difficulty: "core",
        hints: [
          "Think about the four features that speed up diffusion.",
          "Consider surface area and wall thickness.",
          "What keeps the concentration gradient steep?",
          "Why are the surfaces moist?"
        ]
      },
      {
        id: "exam-biology-q2-09",
        question:
          "Explain why the percentage of carbon dioxide is higher in exhaled air than in inhaled air. [2]",
        marks: 2,
        modelAnswer:
          "Body cells carry out aerobic respiration, which produces carbon dioxide as a waste product. This carbon dioxide is carried in the blood to the lungs and diffuses into the alveoli, so exhaled air contains more carbon dioxide than the inhaled air.",
        markScheme: [
          "Carbon dioxide produced by (aerobic) respiration in cells",
          "Diffuses from blood into alveoli and is breathed out"
        ],
        commonError: "Saying carbon dioxide is made in the lungs rather than by respiring body cells.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q2-10",
        question: "Write the word equation for aerobic respiration. [2]",
        marks: 2,
        modelAnswer:
          "Glucose + oxygen produce carbon dioxide + water (and release energy).",
        markScheme: [
          "Glucose + oxygen on the left",
          "Carbon dioxide + water on the right / energy released"
        ],
        commonError: "Writing energy as a product inside the equation as if it were a substance, or omitting oxygen.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q2-11",
        question:
          "Compare aerobic and anaerobic respiration in human muscle cells. [4]",
        marks: 4,
        modelAnswer:
          "Aerobic respiration uses oxygen and completely breaks down glucose into carbon dioxide and water, releasing a large amount of energy. Anaerobic respiration in muscles occurs without oxygen and breaks glucose down only partially into lactic acid, releasing much less energy. Anaerobic respiration is faster for short bursts but the build-up of lactic acid causes muscle fatigue and creates an oxygen debt that must be repaid.",
        markScheme: [
          "Aerobic uses oxygen / anaerobic does not",
          "Aerobic produces carbon dioxide and water / anaerobic produces lactic acid",
          "Aerobic releases more energy / anaerobic releases less energy",
          "Anaerobic causes lactic acid build-up / oxygen debt / muscle fatigue"
        ],
        commonError: "Stating that anaerobic respiration in muscle produces ethanol and carbon dioxide — that is anaerobic respiration in yeast.",
        difficulty: "core",
        hints: [
          "Compare the use of oxygen.",
          "Compare the products of each process.",
          "Compare the amount of energy released.",
          "What problem does lactic acid cause?"
        ]
      },
      {
        id: "exam-biology-q2-12",
        question:
          "During hard exercise a runner breathes deeply for some minutes after stopping. Explain why, using the term oxygen debt. [3]",
        marks: 3,
        modelAnswer:
          "During hard exercise the muscles respire anaerobically and lactic acid builds up, creating an oxygen debt. After exercise, extra oxygen is needed to break down (oxidise) the accumulated lactic acid into carbon dioxide and water. Deep, rapid breathing continues to supply this extra oxygen until the lactic acid is removed and the oxygen debt is repaid.",
        markScheme: [
          "Anaerobic respiration produced lactic acid / oxygen debt built up",
          "Extra oxygen needed to break down / oxidise lactic acid",
          "Deep breathing repays the oxygen debt / removes lactic acid"
        ],
        commonError: "Saying the runner needs oxygen to make more lactic acid, the reverse of what happens.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q2-13",
        question:
          "Describe the path taken by a red blood cell as it travels from the right ventricle of the heart to the left atrium. [3]",
        marks: 3,
        modelAnswer:
          "From the right ventricle the blood is pumped through the pulmonary artery to the lungs. In the lung capillaries it picks up oxygen and loses carbon dioxide. The oxygenated blood then returns through the pulmonary vein to the left atrium of the heart.",
        markScheme: [
          "Right ventricle to pulmonary artery to lungs",
          "Gas exchange in lung capillaries (gains oxygen)",
          "Pulmonary vein back to left atrium"
        ],
        commonError: "Naming the aorta instead of the pulmonary artery, or muddling the vessels carrying blood to and from the lungs.",
        difficulty: "core",
        hints: [
          "Which vessel leaves the right ventricle?",
          "Where does that vessel take the blood?",
          "Which vessel returns blood from the lungs to the heart?"
        ]
      },
      {
        id: "exam-biology-q2-14",
        question:
          "Explain why the wall of the left ventricle is thicker than the wall of the right ventricle. [2]",
        marks: 2,
        modelAnswer:
          "The left ventricle pumps oxygenated blood all the way around the whole body, which requires a higher pressure. The right ventricle only pumps blood the short distance to the lungs at lower pressure. The thicker, more muscular left ventricle wall generates the greater force needed.",
        markScheme: [
          "Left ventricle pumps blood to the whole body / further / at higher pressure",
          "Right ventricle pumps only to the lungs / shorter distance / lower pressure"
        ],
        commonError: "Saying the left side carries more blood — both sides pump equal volumes; the difference is pressure.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q2-15",
        question:
          "Compare the structure of an artery with that of a vein. Give two differences. [2]",
        marks: 2,
        modelAnswer:
          "An artery has a thick, muscular and elastic wall to withstand the high pressure of blood pumped from the heart, and it has a narrow lumen. A vein has a thinner wall, a wider lumen, and contains valves to prevent the backflow of blood at low pressure.",
        markScheme: [
          "Artery thick muscular/elastic wall / narrow lumen; vein thinner wall / wider lumen",
          "Veins have valves (to prevent backflow); arteries (generally) do not"
        ],
        commonError: "Saying arteries always carry oxygenated blood — the pulmonary artery carries deoxygenated blood.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q2-16",
        question:
          "State the role of haemoglobin and name the molecule it forms when it combines with oxygen. [2]",
        marks: 2,
        modelAnswer:
          "Haemoglobin in red blood cells combines with oxygen in the lungs to transport it around the body. When it combines with oxygen it forms oxyhaemoglobin.",
        markScheme: [
          "Haemoglobin carries / transports oxygen",
          "Forms oxyhaemoglobin"
        ],
        commonError: "Spelling errors aside, stating it forms 'carbohaemoglobin' with oxygen rather than oxyhaemoglobin.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q2-17",
        question:
          "A leafy shoot loses 12 g of water by transpiration in 4 hours under bright conditions. Calculate the mean rate of water loss in grams per hour. Show your working. [2]",
        marks: 2,
        modelAnswer:
          "Rate = mass lost / time = 12 g / 4 h = 3 g per hour.",
        markScheme: [
          "Rate = mass / time = 12 / 4",
          "3 g per hour (with unit)"
        ],
        commonError: "Multiplying rather than dividing, giving 48.",
        difficulty: "warmup",
        solutions: [
          {
            label: "Mean rate",
            steps: [
              "Rate = mass lost / time taken",
              "Rate = 12 g / 4 h",
              "Rate = 3 g per hour"
            ]
          }
        ]
      },
      {
        id: "exam-biology-q2-18",
        question:
          "Explain how guard cells control the size of the stomatal pore and why stomata usually close at night. [4]",
        marks: 4,
        modelAnswer:
          "When guard cells take in water by osmosis they become turgid. Because their inner walls are thicker and less elastic than their outer walls, they curve apart, opening the stomatal pore. When the guard cells lose water they become flaccid, straighten and the pore closes. At night there is no light, so photosynthesis stops and carbon dioxide is no longer needed; closing the stomata reduces unnecessary water loss by transpiration.",
        markScheme: [
          "Guard cells gain water by osmosis and become turgid",
          "Unequal wall thickness causes them to curve apart / open the pore",
          "Loss of water makes them flaccid / pore closes",
          "At night no photosynthesis so stomata close to reduce water loss"
        ],
        commonError: "Saying stomata open at night to take in oxygen — they generally close when there is no photosynthesis.",
        difficulty: "challenge",
        hints: [
          "What happens to guard cells when they gain water?",
          "Why does the unequal wall thickness matter?",
          "Describe what happens when guard cells lose water.",
          "Link night-time closure to the lack of photosynthesis."
        ]
      },
      {
        id: "exam-biology-q2-19",
        question:
          "Magnesium ions and nitrate ions are absorbed by plant roots. State what each is needed for. [2]",
        marks: 2,
        modelAnswer:
          "Magnesium ions are needed to make chlorophyll. Nitrate ions are needed to make amino acids, which are used to build proteins.",
        markScheme: [
          "Magnesium for making chlorophyll",
          "Nitrate for making amino acids / proteins"
        ],
        commonError: "Swapping the two roles, e.g. saying nitrate is for chlorophyll.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q2-20",
        question:
          "Explain why a plant kept in the dark for 48 hours before a starch test gives a negative result with iodine. [3]",
        marks: 3,
        modelAnswer:
          "In the dark the plant cannot photosynthesise, so no new glucose (and therefore no starch) is made. Any starch already stored in the leaves is broken down and used in respiration or moved away to other parts of the plant. The leaf is therefore destarched, so the iodine test gives a negative (orange-brown, not blue-black) result.",
        markScheme: [
          "No light so no photosynthesis / no glucose made",
          "Existing starch used in respiration / removed (translocated)",
          "Leaf destarched so iodine stays orange-brown (negative)"
        ],
        commonError: "Saying the leaf makes starch from respiration in the dark.",
        difficulty: "core"
      }
    ]
  },
  {
    id: "exam-biology-qa-3",
    title: "Paper 3 — Structured",
    description:
      "Whole-subject structured mock covering coordination and response, homeostasis, excretion, drugs, and human reproduction. Features applied explanation questions and full mark schemes.",
    questions: [
      {
        id: "exam-biology-q3-01",
        question:
          "Define the term homeostasis. [2]",
        marks: 2,
        modelAnswer:
          "Homeostasis is the maintenance of a constant internal environment within the body, keeping conditions such as temperature, water content and blood glucose within narrow limits despite changes in the surroundings.",
        markScheme: [
          "Maintenance of a constant internal environment",
          "Keeping conditions within (narrow) limits / despite external changes"
        ],
        commonError: "Defining homeostasis as keeping the outside environment constant rather than the internal one.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q3-02",
        question:
          "Describe the sequence of events in a reflex arc, in the correct order, from stimulus to response. [4]",
        marks: 4,
        modelAnswer:
          "A stimulus is detected by a receptor. The receptor sends an electrical impulse along a sensory neurone to the central nervous system (spinal cord). There the impulse passes across a synapse to a relay neurone and then across another synapse to a motor neurone. The motor neurone carries the impulse to an effector (a muscle or gland), which carries out the response.",
        markScheme: [
          "Stimulus detected by receptor",
          "Sensory neurone carries impulse to CNS / spinal cord",
          "Relay neurone (via synapses) to motor neurone",
          "Motor neurone to effector (muscle/gland) which produces response"
        ],
        commonError: "Leaving out the relay neurone or putting the neurones in the wrong order.",
        difficulty: "core",
        hints: [
          "Start with the stimulus and the structure that detects it.",
          "Which neurone carries the impulse into the CNS?",
          "What connects the sensory and motor neurones inside the CNS?",
          "End with the effector and the response."
        ]
      },
      {
        id: "exam-biology-q3-03",
        question:
          "Explain how a synapse transmits an impulse from one neurone to the next. [3]",
        marks: 3,
        modelAnswer:
          "When an impulse arrives at the end of the first neurone, it triggers the release of a chemical neurotransmitter into the synaptic gap. The neurotransmitter diffuses across the gap and binds to receptor molecules on the membrane of the next neurone. This triggers a new electrical impulse in the second neurone.",
        markScheme: [
          "Neurotransmitter (chemical) released into the synaptic gap",
          "Diffuses across the gap and binds to receptors on the next neurone",
          "Triggers a new impulse in the next neurone"
        ],
        commonError: "Saying the electrical impulse jumps directly across the gap — transmission across a synapse is chemical.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q3-04",
        question:
          "Describe how the body responds to a fall in body temperature on a cold day. Give three responses. [3]",
        marks: 3,
        modelAnswer:
          "The blood vessels supplying the skin capillaries constrict (vasoconstriction) so less blood flows near the surface and less heat is lost. Shivering occurs, where muscles contract rapidly, releasing heat from respiration. Hairs on the skin are raised by erector muscles to trap an insulating layer of air, and less sweat is produced.",
        markScheme: [
          "Vasoconstriction / blood vessels narrow so less heat lost from skin",
          "Shivering / muscle contraction releases heat from respiration",
          "Hairs raised to trap air / less sweat produced"
        ],
        commonError: "Saying blood vessels move up and down in the skin — they constrict or dilate; they do not move.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q3-05",
        question:
          "Insulin and glucagon control blood glucose concentration. Describe what happens when blood glucose rises after a meal. [3]",
        marks: 3,
        modelAnswer:
          "When blood glucose rises, the pancreas detects this and secretes insulin into the blood. Insulin causes liver and muscle cells to take up glucose and convert the excess into glycogen for storage. It also increases the rate at which cells respire glucose. As a result the blood glucose concentration falls back to normal.",
        markScheme: [
          "Pancreas secretes insulin",
          "Insulin causes liver / muscle cells to take up glucose and store it as glycogen",
          "Blood glucose concentration falls / returns to normal"
        ],
        commonError: "Saying insulin converts glucose to glucagon — glucagon is a hormone, not a storage molecule (the store is glycogen).",
        difficulty: "core",
        hints: [
          "Which organ detects and responds to the change?",
          "Which hormone is released when glucose is high?",
          "What is excess glucose converted into for storage?"
        ]
      },
      {
        id: "exam-biology-q3-06",
        question:
          "Explain why Type 1 diabetes is treated with insulin injections and why insulin cannot be taken as a tablet. [3]",
        marks: 3,
        modelAnswer:
          "In Type 1 diabetes the pancreas does not produce enough (or any) insulin, so blood glucose cannot be controlled; injecting insulin replaces the missing hormone and allows glucose to be stored. Insulin cannot be taken as a tablet because it is a protein and would be digested (broken down) by protease enzymes in the stomach and small intestine before it could act.",
        markScheme: [
          "Pancreas does not produce (enough) insulin / injections replace it",
          "Insulin is a protein",
          "Would be digested / broken down by enzymes in the gut if swallowed"
        ],
        commonError: "Saying insulin would not be absorbed because it is too large, rather than because it is digested as a protein.",
        difficulty: "challenge",
        hints: [
          "What is wrong with the pancreas in Type 1 diabetes?",
          "What type of molecule is insulin?",
          "What would happen to a protein in the digestive system?"
        ]
      },
      {
        id: "exam-biology-q3-07",
        question:
          "Describe the role of the kidneys in excretion and name the main substance they remove. [3]",
        marks: 3,
        modelAnswer:
          "The kidneys filter the blood and remove waste products, in particular urea, which is formed in the liver from the breakdown of excess amino acids. They also regulate the water and salt content of the blood. The waste, together with excess water, leaves the body as urine.",
        markScheme: [
          "Kidneys filter the blood / remove waste",
          "Main substance removed is urea",
          "Regulate water / salt content / waste leaves as urine"
        ],
        commonError: "Naming carbon dioxide as the substance removed by the kidneys — that is excreted by the lungs.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q3-08",
        question:
          "Explain the difference between excretion and egestion. [2]",
        marks: 2,
        modelAnswer:
          "Excretion is the removal of toxic waste products of metabolism (such as urea and carbon dioxide) made by the body's cells. Egestion is the removal of undigested food (faeces) that has never been absorbed into the body's cells and passes out through the anus.",
        markScheme: [
          "Excretion: removal of (toxic) metabolic waste / substances made by the body, e.g. urea / carbon dioxide",
          "Egestion: removal of undigested food / faeces that was never absorbed"
        ],
        commonError: "Treating faeces as an excretory product — faeces is egested, not excreted.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q3-09",
        question:
          "Auxin controls plant growth responses. Explain how auxin causes a shoot to bend towards light (phototropism). [4]",
        marks: 4,
        modelAnswer:
          "Auxin is a plant hormone made at the shoot tip. When light shines from one side, auxin moves to the shaded side of the shoot, so more auxin accumulates there. Auxin stimulates the cells on the shaded side to elongate (grow longer). Because the shaded side grows more than the lit side, the shoot bends towards the light.",
        markScheme: [
          "Auxin made at the shoot tip",
          "Auxin moves to / accumulates on the shaded side",
          "Auxin causes cells to elongate / grow more",
          "Shaded side grows more so shoot bends towards the light"
        ],
        commonError: "Saying auxin makes cells divide more, or that the lit side grows faster.",
        difficulty: "challenge",
        hints: [
          "Where is auxin produced?",
          "Which side of the shoot does auxin move to?",
          "What effect does auxin have on cells?",
          "Link uneven growth to the direction of bending."
        ]
      },
      {
        id: "exam-biology-q3-10",
        question:
          "Alcohol is a depressant drug. State two effects of alcohol on the body. [2]",
        marks: 2,
        modelAnswer:
          "Alcohol slows down reaction times and impairs judgement and coordination. Long term, it can cause damage to the liver, for example cirrhosis.",
        markScheme: [
          "Slows reactions / impairs judgement / reduced self-control or coordination",
          "Long-term liver damage / cirrhosis (or other valid effect)"
        ],
        commonError: "Describing alcohol as a stimulant — it is a depressant.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q3-11",
        question:
          "Explain why smoking tobacco increases the risk of bronchitis and reduces oxygen uptake. [3]",
        marks: 3,
        modelAnswer:
          "Tobacco smoke contains tar, which damages the cilia lining the airways so mucus and trapped microbes are no longer swept out; mucus collects and the airways become infected and inflamed, causing bronchitis. Smoke also contains carbon monoxide, which binds to haemoglobin in red blood cells more strongly than oxygen, reducing the amount of oxygen the blood can carry.",
        markScheme: [
          "Tar damages / paralyses cilia so mucus and microbes build up",
          "Leads to infection / inflammation of airways / bronchitis",
          "Carbon monoxide binds to haemoglobin so less oxygen carried"
        ],
        commonError: "Saying nicotine is what reduces oxygen carriage — it is carbon monoxide that binds to haemoglobin.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q3-12",
        question:
          "Name the male and female gametes in humans and state where each is produced. [2]",
        marks: 2,
        modelAnswer:
          "The male gamete is the sperm, produced in the testes. The female gamete is the egg cell (ovum), produced in the ovaries.",
        markScheme: [
          "Sperm produced in the testes",
          "Egg / ovum produced in the ovaries"
        ],
        commonError: "Saying eggs are produced in the uterus, or sperm in the penis.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q3-13",
        question:
          "Describe the function of the placenta during pregnancy. [3]",
        marks: 3,
        modelAnswer:
          "The placenta allows exchange of substances between the mother's blood and the fetus's blood without the two bloods mixing. Dissolved food (glucose, amino acids) and oxygen diffuse from the mother to the fetus, while carbon dioxide and other waste such as urea diffuse from the fetus to the mother. It provides a large surface area for this exchange.",
        markScheme: [
          "Exchange of substances between mother and fetus (without bloods mixing)",
          "Oxygen and nutrients pass from mother to fetus",
          "Carbon dioxide and waste / urea pass from fetus to mother"
        ],
        commonError: "Saying the mother's and fetus's blood mix in the placenta — they remain separate.",
        difficulty: "core",
        hints: [
          "What is exchanged across the placenta?",
          "Which substances go from mother to fetus?",
          "Which substances go from fetus to mother?"
        ]
      },
      {
        id: "exam-biology-q3-14",
        question:
          "Oestrogen and progesterone are involved in the menstrual cycle. State one role of each hormone. [2]",
        marks: 2,
        modelAnswer:
          "Oestrogen causes the lining of the uterus to repair and thicken after menstruation (and stimulates the release of LH that triggers ovulation). Progesterone maintains the thickened uterus lining ready for and during pregnancy; a fall in progesterone causes the lining to break down (menstruation).",
        markScheme: [
          "Oestrogen: repairs / thickens the uterus lining (or stimulates ovulation)",
          "Progesterone: maintains the uterus lining (its fall causes menstruation)"
        ],
        commonError: "Swapping the two hormones' roles.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q3-15",
        question:
          "Explain the difference between sexual and asexual reproduction in terms of the genetic make-up of the offspring. [3]",
        marks: 3,
        modelAnswer:
          "In sexual reproduction two gametes fuse, mixing genetic material from two parents, so the offspring are genetically different from each other and from their parents, producing variation. In asexual reproduction there is only one parent and no gamete fusion, so the offspring are genetically identical to the parent and to each other (clones).",
        markScheme: [
          "Sexual: fusion of gametes / two parents / genetic material mixed",
          "Sexual offspring show variation / genetically different",
          "Asexual: one parent, offspring genetically identical / clones"
        ],
        commonError: "Saying asexual offspring 'look similar' rather than being genetically identical.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q3-16",
        question:
          "State two ways in which the body controls its water content and which organ is mainly responsible. [3]",
        marks: 3,
        modelAnswer:
          "The kidneys are mainly responsible for controlling water content. If the blood is too concentrated (too little water), more water is reabsorbed in the kidneys and a small volume of concentrated urine is produced. If the blood is too dilute (too much water), less water is reabsorbed and a large volume of dilute urine is produced.",
        markScheme: [
          "Kidney(s) main organ",
          "When water is low: more water reabsorbed / less concentrated urine produced",
          "When water is high: less water reabsorbed / more dilute urine produced"
        ],
        commonError: "Naming the bladder as the organ that controls water content — the bladder only stores urine.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q3-17",
        question:
          "A nerve impulse travels 1.2 m along a neurone in 0.006 seconds. Calculate the speed of the impulse in metres per second. Show your working. [2]",
        marks: 2,
        modelAnswer:
          "Speed = distance / time = 1.2 m / 0.006 s = 200 m per second.",
        markScheme: [
          "Speed = distance / time = 1.2 / 0.006",
          "200 m per second (with unit)"
        ],
        commonError: "Misplacing the decimal point when dividing by 0.006.",
        difficulty: "core",
        hints: [
          "Use speed = distance / time.",
          "Substitute 1.2 and 0.006.",
          "1.2 divided by 0.006 = 1200 / 6."
        ],
        solutions: [
          {
            label: "Speed calculation",
            steps: [
              "Speed = distance / time",
              "Speed = 1.2 m / 0.006 s",
              "Convert: 1.2 / 0.006 = 1200 / 6",
              "Speed = 200 m per second"
            ]
          }
        ]
      },
      {
        id: "exam-biology-q3-18",
        question:
          "Compare the nervous and hormonal (endocrine) systems as means of communication in the body. Give two differences. [2]",
        marks: 2,
        modelAnswer:
          "Nervous responses are very fast and short-lasting, using electrical impulses carried along neurones to specific targets. Hormonal responses are slower and longer-lasting, using chemicals (hormones) transported in the blood to all parts of the body.",
        markScheme: [
          "Nervous fast / short-lived; hormonal slower / longer-lasting",
          "Nervous uses electrical impulses along neurones; hormonal uses chemicals carried in the blood"
        ],
        commonError: "Saying hormones travel along nerves — they are carried in the blood.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q3-19",
        question:
          "Adrenaline is released in a frightening situation. Describe two effects it has that prepare the body for action. [2]",
        marks: 2,
        modelAnswer:
          "Adrenaline increases the heart rate so more blood (carrying oxygen and glucose) is pumped to the muscles. It also widens the airways and increases the breathing rate, and causes the liver to release glucose, providing more energy from respiration for muscle action.",
        markScheme: [
          "Increases heart rate / pulse",
          "Increases breathing rate / releases glucose / widens airways (any valid second effect)"
        ],
        commonError: "Saying adrenaline is a neurotransmitter released at synapses — here it acts as a hormone in the blood.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q3-20",
        question:
          "Describe how sweating helps to cool the body when it is too hot. [3]",
        marks: 3,
        modelAnswer:
          "When the body is too hot, sweat glands release more sweat onto the skin surface. As the water in the sweat evaporates, it takes heat energy (latent heat) from the body, cooling the skin and the blood beneath it. Blood vessels supplying the skin also dilate (vasodilation), bringing more blood to the surface so more heat is lost.",
        markScheme: [
          "More sweat produced onto skin surface",
          "Water in sweat evaporates, taking heat energy from the body",
          "Cools the body / vasodilation brings more blood to surface to lose heat"
        ],
        commonError: "Saying sweat itself is cold and cools the body — it is the evaporation of sweat that removes heat.",
        difficulty: "core"
      }
    ]
  },
  {
    id: "exam-biology-qa-4",
    title: "Paper 4 — Structured",
    description:
      "Whole-subject structured mock covering inheritance and genetics, variation and natural selection, ecology and energy flow, human impact on ecosystems, disease and immunity, and biotechnology. Includes genetics ratio calculations.",
    questions: [
      {
        id: "exam-biology-q4-01",
        question:
          "Define the terms gene and allele. [2]",
        marks: 2,
        modelAnswer:
          "A gene is a length of DNA that codes for a particular protein (and so a characteristic). An allele is one of the alternative forms (versions) of the same gene.",
        markScheme: [
          "Gene: a length / section of DNA that codes for a protein / characteristic",
          "Allele: an alternative version / form of a gene"
        ],
        commonError: "Using gene and allele as if they mean the same thing.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q4-02",
        question:
          "In pea plants, the allele for tall (T) is dominant to the allele for short (t). A heterozygous tall plant is crossed with a short plant. Use a genetic diagram to predict the ratio of tall to short offspring. [4]",
        marks: 4,
        modelAnswer:
          "Parent genotypes: Tt (tall) x tt (short). Gametes from Tt are T and t; gametes from tt are t and t. The offspring genotypes are Tt, Tt, tt, tt. So 2 are Tt (tall) and 2 are tt (short), giving a ratio of 1 tall : 1 short.",
        markScheme: [
          "Parental genotypes Tt and tt",
          "Correct gametes (T and t from Tt; t from tt)",
          "Offspring genotypes Tt, Tt, tt, tt",
          "Ratio 1 tall : 1 short (50% : 50%)"
        ],
        commonError: "Giving a 3:1 ratio, which is the result of crossing two heterozygotes, not a heterozygote with a homozygous recessive.",
        difficulty: "core",
        hints: [
          "Write the genotype of each parent.",
          "List the gametes each parent can produce.",
          "Combine the gametes in a Punnett square.",
          "Count the phenotypes to find the ratio."
        ],
        solutions: [
          {
            label: "Punnett square method",
            steps: [
              "Parents: Tt (tall) x tt (short)",
              "Gametes: Tt gives T and t; tt gives t and t",
              "Cross: T x t = Tt; t x t = tt (each twice)",
              "Offspring: Tt, Tt, tt, tt = 2 tall : 2 short",
              "Ratio = 1 tall : 1 short"
            ]
          }
        ]
      },
      {
        id: "exam-biology-q4-03",
        question:
          "Explain what is meant by codominance and give one example. [2]",
        marks: 2,
        modelAnswer:
          "Codominance is when both alleles of a gene are expressed equally in the phenotype of a heterozygote, with neither being dominant over the other. An example is the human ABO blood group, where alleles for A and B are codominant, giving blood group AB.",
        markScheme: [
          "Both alleles expressed / neither is dominant in the heterozygote",
          "Valid example, e.g. AB blood group / ABO system"
        ],
        commonError: "Confusing codominance with incomplete dominance (a blended intermediate phenotype).",
        difficulty: "core"
      },
      {
        id: "exam-biology-q4-04",
        question:
          "In humans, sex is determined by the sex chromosomes. Using a genetic diagram, explain why the ratio of males to females in offspring is expected to be 1:1. [4]",
        marks: 4,
        modelAnswer:
          "The mother is XX and the father is XY. The mother produces only X gametes; the father produces half X and half Y gametes. At fertilisation, an X from the mother combines with either an X (giving XX, female) or a Y (giving XY, male) from the father. This produces equal numbers of XX and XY, so the expected ratio of females to males is 1:1.",
        markScheme: [
          "Mother XX, father XY",
          "Mother gives only X gametes; father gives X and Y gametes in equal numbers",
          "Offspring XX (female) and XY (male)",
          "Equal numbers / 1:1 ratio"
        ],
        commonError: "Saying the mother determines the sex of the child — it is the father's X or Y sperm.",
        difficulty: "core",
        hints: [
          "Write the sex chromosomes of each parent.",
          "Which parent produces two kinds of gamete?",
          "Combine the gametes to find the offspring.",
          "Count the male and female outcomes."
        ],
        solutions: [
          {
            label: "Sex inheritance",
            steps: [
              "Parents: XX (mother) x XY (father)",
              "Gametes: mother X and X; father X and Y",
              "Cross: X x X = XX (female); X x Y = XY (male)",
              "Outcomes: XX, XX, XY, XY = 2 female : 2 male",
              "Ratio = 1 female : 1 male"
            ]
          }
        ]
      },
      {
        id: "exam-biology-q4-05",
        question:
          "Distinguish between continuous and discontinuous variation, giving one example of each. [3]",
        marks: 3,
        modelAnswer:
          "Continuous variation shows a range of values between two extremes with no distinct categories, for example human height or mass. Discontinuous variation shows distinct categories with no intermediate values, for example human blood group (A, B, AB or O) or tongue rolling.",
        markScheme: [
          "Continuous: a range of values / no distinct categories",
          "Continuous example, e.g. height / mass",
          "Discontinuous: distinct categories / no in-betweens, e.g. blood group / tongue rolling"
        ],
        commonError: "Giving blood group as an example of continuous variation.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q4-06",
        question:
          "Explain how natural selection can lead to a population of bacteria becoming resistant to an antibiotic. [4]",
        marks: 4,
        modelAnswer:
          "Within a bacterial population there is genetic variation, and by chance mutation a few bacteria have an allele giving resistance to the antibiotic. When the antibiotic is used, the non-resistant bacteria are killed but the resistant bacteria survive. The survivors reproduce and pass on the resistance allele to their offspring. Over time the proportion of resistant bacteria increases until most of the population is resistant.",
        markScheme: [
          "Variation in the population caused by mutation / some bacteria are resistant",
          "Antibiotic kills non-resistant bacteria / resistant ones survive",
          "Survivors reproduce and pass on the resistance allele",
          "Proportion of resistant bacteria increases over generations"
        ],
        commonError: "Saying bacteria 'choose' or 'try' to become resistant — resistance arises by random mutation, then selection acts.",
        difficulty: "challenge",
        hints: [
          "Where does the variation come from?",
          "What does the antibiotic do to non-resistant bacteria?",
          "What happens to the survivors and their genes?",
          "Describe the change in the population over generations."
        ]
      },
      {
        id: "exam-biology-q4-07",
        question:
          "Describe what is meant by a mutation and state one factor that increases the rate of mutation. [2]",
        marks: 2,
        modelAnswer:
          "A mutation is a random change in the base sequence of DNA (a gene or chromosome). Ionising radiation (such as X-rays or ultraviolet light) or certain chemicals (mutagens) increase the rate of mutation.",
        markScheme: [
          "A (random) change in the DNA / base sequence / gene or chromosome",
          "Named factor, e.g. ionising radiation / UV / X-rays / chemical mutagens"
        ],
        commonError: "Describing a mutation as always harmful — mutations may be harmful, neutral or beneficial.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q4-08",
        question:
          "Define the terms producer and consumer in a food chain, and explain why energy is lost between trophic levels. [4]",
        marks: 4,
        modelAnswer:
          "A producer is an organism, usually a green plant, that makes its own food by photosynthesis. A consumer is an organism that obtains energy by feeding on (eating) other organisms. Energy is lost between trophic levels because organisms use energy in respiration (released as heat), in movement, and energy is also lost in undigested material (egestion) and in excretion. Only the energy stored in the body of one level is available to the next.",
        markScheme: [
          "Producer makes its own food by photosynthesis / a green plant",
          "Consumer eats / feeds on other organisms",
          "Energy lost through respiration / heat / movement",
          "Energy lost in egestion (faeces) / excretion"
        ],
        commonError: "Saying energy is 'destroyed' — energy is transferred to the surroundings, mainly as heat, not destroyed.",
        difficulty: "core",
        hints: [
          "Define a producer in terms of how it gets food.",
          "Define a consumer in terms of how it gets food.",
          "List the ways an organism uses or loses energy.",
          "Think about respiration, movement and waste."
        ]
      },
      {
        id: "exam-biology-q4-09",
        question:
          "Explain why food chains rarely have more than four or five trophic levels. [2]",
        marks: 2,
        modelAnswer:
          "Energy is lost at each trophic level (in respiration, movement, heat and waste), so only about ten percent is passed on to the next level. After four or five levels there is too little energy left to support another level of consumers.",
        markScheme: [
          "Energy is lost at each trophic level (only about 10% passed on)",
          "Too little energy remains to support further levels"
        ],
        commonError: "Saying predators run out of prey rather than energy being the limiting factor.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q4-10",
        question:
          "Describe the role of decomposers in the carbon cycle. [3]",
        marks: 3,
        modelAnswer:
          "Decomposers, such as bacteria and fungi, break down dead organisms and waste material. As they feed they respire, releasing carbon dioxide back into the atmosphere. They also return mineral nutrients to the soil. This recycles carbon so it can be used again by producers in photosynthesis.",
        markScheme: [
          "Decomposers (bacteria / fungi) break down dead organisms / waste",
          "They respire, releasing carbon dioxide back to the atmosphere",
          "Recycles carbon / returns nutrients so producers can reuse it"
        ],
        commonError: "Saying decomposers photosynthesise — they respire and break down material, they do not make food.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q4-11",
        question:
          "Explain how the burning of fossil fuels contributes to the greenhouse effect and global warming. [3]",
        marks: 3,
        modelAnswer:
          "Burning fossil fuels releases carbon dioxide, a greenhouse gas, into the atmosphere. Greenhouse gases absorb and trap heat (long-wave radiation) that would otherwise escape from the Earth. The increased concentration of carbon dioxide traps more heat, raising the average global temperature, which is global warming.",
        markScheme: [
          "Burning fossil fuels releases carbon dioxide (a greenhouse gas)",
          "Greenhouse gases absorb / trap heat radiation",
          "More heat trapped raises global temperature / global warming"
        ],
        commonError: "Confusing global warming with ozone layer damage — they are separate issues.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q4-12",
        question:
          "A pond contains 5000 algae, 400 small fish and 20 large fish. Calculate the percentage of the algae number represented by the large fish. Show your working. [2]",
        marks: 2,
        modelAnswer:
          "Percentage = (number of large fish / number of algae) x 100 = (20 / 5000) x 100 = 0.4 percent.",
        markScheme: [
          "(20 / 5000) x 100",
          "0.4 percent"
        ],
        commonError: "Dividing the wrong way round (5000/20) or forgetting to multiply by 100.",
        difficulty: "core",
        hints: [
          "Percentage = part / whole x 100.",
          "The part is the large fish; the whole is the algae.",
          "20 divided by 5000, then multiply by 100."
        ],
        solutions: [
          {
            label: "Percentage calculation",
            steps: [
              "Percentage = (part / whole) x 100",
              "= (20 / 5000) x 100",
              "= 0.004 x 100",
              "= 0.4 percent"
            ]
          }
        ]
      },
      {
        id: "exam-biology-q4-13",
        question:
          "Describe two ways in which deforestation can damage the environment. [2]",
        marks: 2,
        modelAnswer:
          "Deforestation reduces the number of trees that remove carbon dioxide by photosynthesis, so atmospheric carbon dioxide rises, increasing global warming. It also destroys habitats, reducing biodiversity, and the loss of tree roots can lead to soil erosion and flooding.",
        markScheme: [
          "Less carbon dioxide removed / more CO2 in atmosphere / contributes to global warming",
          "Loss of habitat / reduced biodiversity / soil erosion / flooding (any valid second point)"
        ],
        commonError: "Stating deforestation reduces oxygen so we cannot breathe — the main exam points are CO2 and habitat/biodiversity.",
        difficulty: "warmup"
      },
      {
        id: "exam-biology-q4-14",
        question:
          "Explain how white blood cells defend the body against pathogens. Refer to two types of white blood cell. [4]",
        marks: 4,
        modelAnswer:
          "Phagocytes defend the body by engulfing and digesting pathogens (phagocytosis), destroying them. Lymphocytes produce antibodies, which are proteins that have a specific shape complementary to antigens on the pathogen. The antibodies bind to the pathogens, causing them to clump together and be destroyed. Some lymphocytes also produce antitoxins to neutralise toxins released by pathogens.",
        markScheme: [
          "Phagocytes engulf / ingest / digest pathogens (phagocytosis)",
          "Lymphocytes produce antibodies",
          "Antibodies are specific / complementary to antigens / cause clumping",
          "Lymphocytes produce antitoxins to neutralise toxins"
        ],
        commonError: "Saying antibodies are produced by phagocytes — antibodies come from lymphocytes.",
        difficulty: "core",
        hints: [
          "Name the cell that engulfs pathogens and the process it uses.",
          "Name the cell that makes antibodies.",
          "Explain how antibodies recognise a specific pathogen.",
          "What else can lymphocytes produce against toxins?"
        ]
      },
      {
        id: "exam-biology-q4-15",
        question:
          "Explain how a vaccine produces immunity to a disease. [4]",
        marks: 4,
        modelAnswer:
          "A vaccine contains a weakened, dead or harmless form of the pathogen (or its antigens). When injected, the antigens stimulate lymphocytes to produce the specific antibodies against the pathogen. Memory cells are also produced and remain in the body. If the real pathogen later enters the body, the memory cells respond quickly to produce large amounts of antibody, destroying the pathogen before it causes illness, so the person is immune.",
        markScheme: [
          "Vaccine contains weakened / dead / inactive pathogen or its antigens",
          "Antigens stimulate lymphocytes to produce specific antibodies",
          "Memory cells are produced and remain in the body",
          "On re-infection antibodies made quickly / in large amounts so no illness"
        ],
        commonError: "Saying a vaccine contains antibodies — it contains antigens that cause the body to make its own antibodies.",
        difficulty: "challenge",
        hints: [
          "What does a vaccine actually contain?",
          "What do the antigens stimulate the lymphocytes to make?",
          "What type of cell gives long-term protection?",
          "Describe what happens if the real pathogen enters later."
        ]
      },
      {
        id: "exam-biology-q4-16",
        question:
          "State what is meant by an antibiotic and explain why antibiotics do not work against viruses. [3]",
        marks: 3,
        modelAnswer:
          "An antibiotic is a drug that kills or stops the growth of bacteria. Antibiotics do not work against viruses because viruses reproduce inside the body's own cells and do not have the bacterial structures or metabolic processes (such as cell walls or protein-making machinery) that antibiotics target.",
        markScheme: [
          "Antibiotic kills / stops the growth of bacteria",
          "Viruses live / reproduce inside host cells",
          "Viruses lack the bacterial structures / processes the antibiotic targets"
        ],
        commonError: "Saying antibiotics kill all pathogens including viruses.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q4-17",
        question:
          "Describe how yeast is used in the production of bread, including the gas responsible for the dough rising. [3]",
        marks: 3,
        modelAnswer:
          "Yeast respires anaerobically (fermentation), breaking down the sugars in the dough to produce ethanol and carbon dioxide. The carbon dioxide gas forms bubbles that are trapped in the stretchy dough, making it rise. During baking the heat kills the yeast and evaporates the ethanol, and the trapped gas gives the bread its light texture.",
        markScheme: [
          "Yeast respires anaerobically / ferments the sugar",
          "Produces carbon dioxide (and ethanol)",
          "Carbon dioxide bubbles are trapped, making the dough rise"
        ],
        commonError: "Saying oxygen makes the bread rise — it is carbon dioxide from fermentation.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q4-18",
        question:
          "Pectinase is an enzyme used in fruit juice production. Explain one advantage of using this enzyme. [2]",
        marks: 2,
        modelAnswer:
          "Pectinase breaks down pectin in the cell walls of fruit, which releases more juice from the fruit and increases the yield. It also makes the juice clearer rather than cloudy.",
        markScheme: [
          "Breaks down pectin (in fruit cell walls)",
          "Increases juice yield / volume / makes the juice clearer"
        ],
        commonError: "Confusing pectinase with an enzyme that breaks down protein or starch.",
        difficulty: "core"
      },
      {
        id: "exam-biology-q4-19",
        question:
          "Explain how bacteria are used to produce human insulin by genetic engineering. [4]",
        marks: 4,
        modelAnswer:
          "The human gene for insulin is cut out of human DNA using restriction enzymes. A bacterial plasmid is cut open with the same restriction enzyme so the ends match, and the insulin gene is inserted and joined using ligase enzyme, forming a recombinant plasmid. The plasmid is put back into a bacterium, which then divides many times. As the bacteria reproduce and follow the inserted gene's instructions, they produce human insulin, which is collected and purified.",
        markScheme: [
          "Insulin gene cut from human DNA using restriction enzyme(s)",
          "Plasmid cut with the same enzyme and gene inserted using ligase / recombinant plasmid formed",
          "Plasmid put into a bacterium",
          "Bacteria reproduce / multiply and make / express the insulin which is collected"
        ],
        commonError: "Saying the human gene is inserted into the bacterial chromosome rather than a plasmid, or omitting the restriction enzyme.",
        difficulty: "challenge",
        hints: [
          "How is the insulin gene removed from human DNA?",
          "What is the gene inserted into, and how is it joined?",
          "Where is the recombinant plasmid placed?",
          "How is large-scale insulin obtained?"
        ]
      },
      {
        id: "exam-biology-q4-20",
        question:
          "Describe two adaptive features of a named organism that help it survive in its environment, and explain how each helps. [4]",
        marks: 4,
        modelAnswer:
          "A camel living in a hot desert has two helpful adaptive features. It stores fat in its hump, which can be respired to release water and energy, allowing it to survive long periods without food and water. It also has thick eyelashes and the ability to close its nostrils, which keep out blowing sand and reduce water loss, helping it cope with the dry, windy desert conditions.",
        markScheme: [
          "Named organism with appropriate habitat (e.g. camel in desert)",
          "First adaptation correctly described",
          "Explanation of how the first adaptation aids survival",
          "Second adaptation described with explanation of how it aids survival"
        ],
        commonError: "Listing features without explaining how each one helps survival in the named environment.",
        difficulty: "core",
        hints: [
          "Choose an organism and state its environment.",
          "Name one structural or behavioural feature.",
          "Explain how that feature helps it survive.",
          "Repeat for a second, different feature."
        ]
      }
    ]
  }
];
