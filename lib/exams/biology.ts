import type { ComprehensiveExam } from "../types";

export const biologyExam: ComprehensiveExam = {
  id: "exam-biology",
  subject: "biology",
  title: "Biology — Full Mock Exam",

  mcqPapers: [
    {
      id: "exam-biology-mcq-1",
      title: "Mock Exam — MCQ Paper 1",
      description:
        "25 multiple-choice questions spanning the full Cambridge IGCSE Biology 0610 Extended syllabus. Allow 45 minutes.",
      questions: [
        {
          id: "exam-biology-mcq-p1-01",
          question:
            "Which structure is found in a plant cell but NOT in an animal cell?",
          options: ["Mitochondrion", "Ribosome", "Cellulose cell wall", "Cell-surface membrane"],
          answerIndex: 2,
          explanation:
            "A cellulose cell wall is characteristic of plant cells. Mitochondria, ribosomes and the cell-surface membrane are present in both plant and animal cells.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p1-02",
          question:
            "Which characteristic of living organisms describes the chemical reactions that build up and break down molecules in cells?",
          options: ["Excretion", "Metabolism", "Sensitivity", "Respiration"],
          answerIndex: 1,
          explanation:
            "Metabolism is the sum of all chemical reactions in cells. Respiration is one such reaction; excretion removes wastes; sensitivity is detecting and responding to stimuli.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p1-03",
          question:
            "Which reagent and result correctly identify a reducing sugar?",
          options: [
            "Biuret reagent — purple",
            "Iodine solution — blue-black",
            "Benedict's solution — brick-red precipitate",
            "Ethanol — white emulsion",
          ],
          answerIndex: 2,
          explanation:
            "Benedict's solution turns from blue to a brick-red/orange precipitate when heated with a reducing sugar. Biuret detects protein, iodine detects starch, and the emulsion test detects lipids.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p1-04",
          question:
            "Red blood cells are placed in distilled water and burst. What is the name of this process?",
          options: ["Plasmolysis", "Crenation", "Haemolysis", "Active transport"],
          answerIndex: 2,
          explanation:
            "Distilled water is hypotonic to the cell, so water enters by osmosis until the cell bursts. In animal cells this bursting is called haemolysis (lysis). Plasmolysis and crenation describe water LOSS; active transport requires energy.",
          difficulty: "core",
          hints: [
            "Distilled water has a higher water potential than the cytoplasm.",
            "Which way does water move by osmosis here?",
            "Animal cells have no cell wall to resist swelling.",
          ],
        },
        {
          id: "exam-biology-mcq-p1-05",
          question:
            "An enzyme is heated to 80 °C and then cooled to 37 °C. Its activity does not return. Why?",
          options: [
            "The substrate has been used up.",
            "The active site shape has been permanently changed by denaturation.",
            "The enzyme has been inhibited reversibly.",
            "The pH has changed.",
          ],
          answerIndex: 1,
          explanation:
            "High temperature breaks the bonds holding the enzyme's tertiary structure, permanently changing the active site shape (denaturation). Substrate can no longer bind, and cooling does not restore the shape.",
          difficulty: "core",
          hints: [
            "Enzymes are proteins with a specific 3D shape.",
            "What does high temperature do to that shape?",
            "Is denaturation reversible?",
          ],
        },
        {
          id: "exam-biology-mcq-p1-06",
          question:
            "Which mineral ion deficiency in a plant causes yellowing of the leaves (chlorosis)?",
          options: ["Nitrate", "Magnesium", "Phosphate", "Potassium"],
          answerIndex: 1,
          explanation:
            "Magnesium is needed to make chlorophyll; without it leaves cannot make the green pigment and turn yellow (chlorosis). Nitrate deficiency causes stunted growth and older yellow leaves, but magnesium is the standard cause of chlorosis tested at IGCSE.",
          difficulty: "core",
          hints: [
            "Which ion is part of the chlorophyll molecule?",
            "Chlorosis = loss of green colour.",
          ],
        },
        {
          id: "exam-biology-mcq-p1-07",
          question:
            "Which word equation represents photosynthesis?",
          options: [
            "glucose + oxygen → carbon dioxide + water",
            "carbon dioxide + water → glucose + oxygen",
            "glucose → lactic acid",
            "glucose → ethanol + carbon dioxide",
          ],
          answerIndex: 1,
          explanation:
            "Photosynthesis uses light energy to combine carbon dioxide and water into glucose, releasing oxygen. Option A is aerobic respiration; C and D are anaerobic respiration.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p1-08",
          question:
            "Which enzyme is produced by both the salivary glands and the pancreas?",
          options: ["Protease", "Lipase", "Amylase", "Maltase"],
          answerIndex: 2,
          explanation:
            "Amylase (which digests starch to maltose) is secreted by the salivary glands into the mouth and by the pancreas into the duodenum.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p1-09",
          question:
            "What is the role of bile in digestion?",
          options: [
            "It chemically digests fats into fatty acids and glycerol.",
            "It emulsifies fats into small droplets to increase surface area.",
            "It neutralises stomach acid by adding hydrochloric acid.",
            "It absorbs the products of digestion.",
          ],
          answerIndex: 1,
          explanation:
            "Bile is not an enzyme; it emulsifies fats (breaks large droplets into smaller ones), increasing surface area for lipase. It also neutralises acidic chyme by being alkaline, but it does not add acid.",
          difficulty: "core",
          hints: [
            "Bile contains no enzymes.",
            "How does increasing surface area help lipase?",
          ],
        },
        {
          id: "exam-biology-mcq-p1-10",
          question:
            "Which feature of the small intestine villi increases the rate of absorption?",
          options: [
            "Thick muscular walls",
            "A large surface area and thin walls one cell thick",
            "Cilia that sweep food along",
            "A waterproof cuticle",
          ],
          answerIndex: 1,
          explanation:
            "Villi (and microvilli) provide a very large surface area and a wall one cell thick, giving a short diffusion distance. A rich blood supply maintains the concentration gradient.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p1-11",
          question:
            "In a plant, water and mineral ions are transported in which tissue, and in which direction?",
          options: [
            "Phloem, downward only",
            "Xylem, upward from roots to leaves",
            "Phloem, both directions",
            "Xylem, downward from leaves to roots",
          ],
          answerIndex: 1,
          explanation:
            "Xylem carries water and dissolved mineral ions upward from the roots to the leaves, driven by transpiration pull. Phloem translocates sucrose and amino acids in both directions.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p1-12",
          question:
            "Which environmental change would INCREASE the rate of transpiration from a leaf?",
          options: [
            "Increased humidity",
            "Decreased temperature",
            "Increased wind speed",
            "Reduced light intensity (stomata closing)",
          ],
          answerIndex: 2,
          explanation:
            "Increased wind removes water vapour from around the stomata, maintaining a steep diffusion gradient and increasing transpiration. Higher humidity, lower temperature and stomatal closure all reduce it.",
          difficulty: "core",
          hints: [
            "Transpiration is evaporation of water followed by diffusion out of stomata.",
            "What keeps the concentration gradient of water vapour steep?",
          ],
        },
        {
          id: "exam-biology-mcq-p1-13",
          question:
            "Which blood vessel carries oxygenated blood?",
          options: ["Pulmonary artery", "Vena cava", "Pulmonary vein", "Renal vein"],
          answerIndex: 2,
          explanation:
            "The pulmonary vein carries oxygenated blood from the lungs to the left atrium. The pulmonary artery (uniquely) carries deoxygenated blood; the vena cava and renal vein carry deoxygenated blood.",
          difficulty: "core",
          hints: [
            "Most arteries carry oxygenated blood, but the lungs are the exception.",
            "Which vessel comes FROM the lungs?",
          ],
        },
        {
          id: "exam-biology-mcq-p1-14",
          question:
            "Which component of blood is mainly responsible for clotting?",
          options: ["Red blood cells", "Lymphocytes", "Platelets", "Plasma proteins only"],
          answerIndex: 2,
          explanation:
            "Platelets (cell fragments) trigger the clotting cascade, converting fibrinogen to fibrin, which forms a mesh that traps cells to form a clot.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p1-15",
          question:
            "Where does gas exchange take place in the human lungs?",
          options: ["Bronchi", "Trachea", "Alveoli", "Pleural membrane"],
          answerIndex: 2,
          explanation:
            "Alveoli are tiny air sacs with a huge surface area, thin walls (one cell thick) and a rich capillary supply, making them ideal for gas exchange by diffusion.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p1-16",
          question:
            "After vigorous exercise a sprinter continues to breathe deeply. This repays the oxygen debt by oxidising which substance?",
          options: ["Glycogen", "Lactic acid", "Ethanol", "Carbon dioxide"],
          answerIndex: 1,
          explanation:
            "Anaerobic respiration in muscle produces lactic acid. Extra oxygen taken in after exercise oxidises (breaks down) the accumulated lactic acid, repaying the oxygen debt.",
          difficulty: "core",
          hints: [
            "What does anaerobic respiration in animals produce?",
            "The 'debt' is the oxygen needed to remove this product.",
          ],
        },
        {
          id: "exam-biology-mcq-p1-17",
          question:
            "Which of the following is a correct route for a nerve impulse in a reflex arc?",
          options: [
            "Receptor → motor neurone → relay neurone → sensory neurone → effector",
            "Receptor → sensory neurone → relay neurone → motor neurone → effector",
            "Effector → motor neurone → relay neurone → sensory neurone → receptor",
            "Receptor → relay neurone → sensory neurone → motor neurone → effector",
          ],
          answerIndex: 1,
          explanation:
            "A reflex arc runs receptor → sensory neurone → relay neurone → motor neurone → effector. This gives a rapid, automatic protective response.",
          difficulty: "core",
          hints: [
            "Sensory neurones carry impulses TO the CNS.",
            "Motor neurones carry impulses AWAY from the CNS to effectors.",
          ],
        },
        {
          id: "exam-biology-mcq-p1-18",
          question:
            "Which hormone prepares the body for action by increasing heart rate and breathing rate?",
          options: ["Insulin", "Adrenaline", "Oestrogen", "Glucagon"],
          answerIndex: 1,
          explanation:
            "Adrenaline, secreted by the adrenal glands, raises heart rate, breathing rate and blood glucose, preparing the body for 'fight or flight'.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p1-19",
          question:
            "A plant shoot grows towards a light source. This response is called:",
          options: [
            "Positive geotropism",
            "Negative phototropism",
            "Positive phototropism",
            "Positive hydrotropism",
          ],
          answerIndex: 2,
          explanation:
            "Growth towards light is positive phototropism, controlled by auxin, which accumulates on the shaded side and causes greater cell elongation there, bending the shoot toward the light.",
          difficulty: "core",
          hints: [
            "Photo = light; positive = towards.",
            "Which plant hormone controls this?",
          ],
        },
        {
          id: "exam-biology-mcq-p1-20",
          question:
            "Which part of the human female reproductive system is the usual site of fertilisation?",
          options: ["Ovary", "Uterus", "Oviduct (fallopian tube)", "Cervix"],
          answerIndex: 2,
          explanation:
            "Fertilisation usually occurs in the oviduct (fallopian tube), where the sperm meets the egg. The fertilised egg then implants in the uterus lining.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p1-21",
          question:
            "In a monohybrid cross between two heterozygous tall pea plants (Tt × Tt), what is the expected ratio of tall to short offspring?",
          options: ["1 : 1", "3 : 1", "9 : 3 : 3 : 1", "1 : 2 : 1"],
          answerIndex: 1,
          explanation:
            "Tt × Tt gives genotypes 1 TT : 2 Tt : 1 tt. Since T (tall) is dominant, the phenotype ratio is 3 tall : 1 short. (1 : 2 : 1 is the genotype ratio.)",
          difficulty: "core",
          hints: [
            "Draw a Punnett square with gametes T and t for each parent.",
            "Count phenotypes, treating any plant with at least one T as tall.",
          ],
        },
        {
          id: "exam-biology-mcq-p1-22",
          question:
            "Which process produces genetically identical daughter cells for growth and repair?",
          options: ["Meiosis", "Mitosis", "Fertilisation", "Mutation"],
          answerIndex: 1,
          explanation:
            "Mitosis produces two genetically identical diploid daughter cells, used for growth, repair and asexual reproduction. Meiosis produces genetically varied haploid gametes.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p1-23",
          question:
            "Which trophic level always contains the most energy in a food chain?",
          options: ["Producers", "Primary consumers", "Secondary consumers", "Decomposers"],
          answerIndex: 0,
          explanation:
            "Producers (plants) capture light energy and contain the most energy. Energy is lost at each transfer (respiration, movement, heat), so each subsequent level contains less.",
          difficulty: "core",
          hints: [
            "Energy enters the chain via photosynthesis.",
            "Roughly 90% of energy is lost between levels.",
          ],
        },
        {
          id: "exam-biology-mcq-p1-24",
          question:
            "Which gas, released by combustion and respiration, is the main contributor to the enhanced greenhouse effect?",
          options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
          answerIndex: 2,
          explanation:
            "Carbon dioxide (from burning fossil fuels and respiration) and methane are the principal greenhouse gases. CO2 traps long-wave radiation, contributing to global warming.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p1-25",
          question:
            "A bacterium is resistant to an antibiotic. The population of resistant bacteria increases over generations when the antibiotic is used regularly. This is an example of:",
          options: [
            "Acquired immunity",
            "Natural selection",
            "Genetic engineering",
            "Selective breeding by humans",
          ],
          answerIndex: 1,
          explanation:
            "Random mutation produces a resistant bacterium; the antibiotic acts as a selection pressure killing non-resistant bacteria; resistant ones survive and reproduce, passing on the allele. This is natural selection (evolution).",
          difficulty: "challenge",
          hints: [
            "Where does the resistance allele come from initially?",
            "What is the role of the antibiotic — does it create resistance or select for it?",
            "Survivors reproduce and pass on the advantageous allele.",
          ],
        },
      ],
    },
    {
      id: "exam-biology-mcq-2",
      title: "Mock Exam — MCQ Paper 2",
      description:
        "25 multiple-choice questions spanning the full Cambridge IGCSE Biology 0610 Extended syllabus. Allow 45 minutes.",
      questions: [
        {
          id: "exam-biology-mcq-p2-01",
          question:
            "Which organelle is the site of aerobic respiration?",
          options: ["Ribosome", "Nucleus", "Mitochondrion", "Chloroplast"],
          answerIndex: 2,
          explanation:
            "Mitochondria carry out aerobic respiration, releasing energy from glucose. Ribosomes make proteins; the nucleus controls the cell; chloroplasts carry out photosynthesis.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p2-02",
          question:
            "Which sequence lists structures from smallest to largest?",
          options: [
            "Organ → tissue → cell → organ system",
            "Cell → tissue → organ → organ system",
            "Tissue → cell → organ system → organ",
            "Organ system → organ → tissue → cell",
          ],
          answerIndex: 1,
          explanation:
            "The levels of organisation increase: cell → tissue → organ → organ system → organism.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p2-03",
          question:
            "Which statement about diffusion is correct?",
          options: [
            "It requires energy from respiration.",
            "It is the net movement of particles from a region of lower to higher concentration.",
            "It is the net movement of particles down a concentration gradient.",
            "It only occurs across partially permeable membranes.",
          ],
          answerIndex: 2,
          explanation:
            "Diffusion is the net movement of particles from a region of higher to lower concentration (down the gradient) due to random motion. It does not require energy and can occur in air or liquids, not only across membranes.",
          difficulty: "core",
          hints: [
            "Diffusion is passive — no energy from the cell.",
            "Which direction relative to the concentration gradient?",
          ],
        },
        {
          id: "exam-biology-mcq-p2-04",
          question:
            "Root hair cells absorb mineral ions from the soil against a concentration gradient. Which process is responsible?",
          options: ["Osmosis", "Diffusion", "Active transport", "Facilitated diffusion only"],
          answerIndex: 2,
          explanation:
            "Mineral ions are often more concentrated inside the root hair cell than in the soil, so they are absorbed against the gradient by active transport, which requires energy (ATP) from respiration.",
          difficulty: "core",
          hints: [
            "Moving against a gradient needs energy.",
            "Where does that energy come from?",
            "Root hair cells contain many mitochondria.",
          ],
        },
        {
          id: "exam-biology-mcq-p2-05",
          question:
            "Which biological molecule is the building block (monomer) of proteins?",
          options: ["Glucose", "Amino acid", "Fatty acid", "Glycerol"],
          answerIndex: 1,
          explanation:
            "Proteins are polymers of amino acids. Glucose is the monomer of starch/glycogen; fatty acids and glycerol form lipids.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p2-06",
          question:
            "An investigation measures catalase activity by the volume of oxygen produced from hydrogen peroxide. Doubling the enzyme concentration (with excess substrate) will:",
          options: [
            "Have no effect on the initial rate.",
            "Approximately double the initial rate of reaction.",
            "Halve the initial rate.",
            "Permanently denature the enzyme.",
          ],
          answerIndex: 1,
          explanation:
            "With excess substrate, more enzyme molecules mean more active sites available, so more enzyme-substrate complexes form per second, approximately doubling the initial rate.",
          difficulty: "core",
          hints: [
            "Substrate is in excess, so it is not limiting.",
            "What does adding more active sites do to the reaction rate?",
          ],
        },
        {
          id: "exam-biology-mcq-p2-07",
          question:
            "Which factor would NOT limit the rate of photosynthesis on a bright, warm day with plenty of light?",
          options: [
            "Carbon dioxide concentration",
            "Temperature",
            "Light intensity",
            "Water as a raw material being completely absent",
          ],
          answerIndex: 2,
          explanation:
            "On a bright day light is plentiful, so it is unlikely to be the limiting factor; CO2 and temperature are then more likely to limit the rate. (Water is rarely limiting as it is needed in small amounts relative to supply.)",
          difficulty: "core",
          hints: [
            "A limiting factor is the one in shortest supply.",
            "If light is plentiful, can it be limiting?",
          ],
        },
        {
          id: "exam-biology-mcq-p2-08",
          question:
            "Which test confirms that a leaf has been carrying out photosynthesis by detecting starch?",
          options: [
            "Benedict's test",
            "Iodine test after removing chlorophyll with ethanol",
            "Biuret test",
            "Limewater test",
          ],
          answerIndex: 1,
          explanation:
            "A leaf is boiled, decolourised in hot ethanol to remove chlorophyll, then iodine is added; a blue-black colour shows starch is present, indicating photosynthesis occurred.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p2-09",
          question:
            "Which component of the diet is required to prevent scurvy?",
          options: ["Vitamin C", "Vitamin D", "Iron", "Calcium"],
          answerIndex: 0,
          explanation:
            "Vitamin C deficiency causes scurvy (bleeding gums, poor wound healing). Vitamin D/calcium deficiency causes rickets; iron deficiency causes anaemia.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p2-10",
          question:
            "Peristalsis moves food along the gut. It is caused by:",
          options: [
            "Gravity pulling food downward",
            "Cilia beating in the gut lining",
            "Waves of contraction of circular and longitudinal muscle",
            "The pressure of swallowed air",
          ],
          answerIndex: 2,
          explanation:
            "Peristalsis is rhythmic waves of contraction and relaxation of the circular and longitudinal muscles in the gut wall that push the bolus along.",
          difficulty: "core",
          hints: [
            "Two muscle layers act antagonistically.",
            "It works even against gravity (e.g. lying down).",
          ],
        },
        {
          id: "exam-biology-mcq-p2-11",
          question:
            "What provides the force that pulls water up the xylem of a tall tree?",
          options: [
            "Active transport in the roots",
            "Transpiration pull (evaporation from leaves) and cohesion of water",
            "Translocation in the phloem",
            "Root pressure alone",
          ],
          answerIndex: 1,
          explanation:
            "Evaporation of water from the leaves (transpiration) lowers the pressure at the top; cohesion between water molecules (hydrogen bonding) means the whole column is pulled up the xylem — the transpiration pull.",
          difficulty: "challenge",
          hints: [
            "Where is water lost from the plant?",
            "Why does water form a continuous column in the xylem?",
            "Cohesion lets the column be pulled as one.",
          ],
        },
        {
          id: "exam-biology-mcq-p2-12",
          question:
            "Which adaptation of red blood cells increases their oxygen-carrying capacity?",
          options: [
            "Presence of a large nucleus",
            "Absence of a nucleus, giving more room for haemoglobin",
            "Thick cell wall",
            "Ability to divide rapidly",
          ],
          answerIndex: 1,
          explanation:
            "Mature red blood cells have no nucleus, leaving more room for haemoglobin, the pigment that binds oxygen. Their biconcave shape also increases surface area for diffusion.",
          difficulty: "core",
          hints: [
            "What molecule actually carries the oxygen?",
            "Removing the nucleus frees up space for that molecule.",
          ],
        },
        {
          id: "exam-biology-mcq-p2-13",
          question:
            "Coronary heart disease is caused by:",
          options: [
            "Blockage of the pulmonary vein",
            "Fatty deposits narrowing the coronary arteries supplying the heart muscle",
            "A faulty bicuspid valve only",
            "Excess red blood cells",
          ],
          answerIndex: 1,
          explanation:
            "Fatty deposits (atheroma/cholesterol) narrow the coronary arteries, reducing blood flow and oxygen supply to the heart muscle, which can cause angina or a heart attack.",
          difficulty: "core",
          hints: [
            "Which arteries supply the heart muscle itself?",
            "What happens if their lumen narrows?",
          ],
        },
        {
          id: "exam-biology-mcq-p2-14",
          question:
            "Which of these is a correct adaptation of the alveoli for efficient gas exchange?",
          options: [
            "Thick walls to withstand pressure",
            "A small surface area to limit water loss",
            "A moist surface and rich capillary network",
            "An impermeable lining",
          ],
          answerIndex: 2,
          explanation:
            "Alveoli have a moist, thin (one-cell-thick) surface, a large surface area and a dense capillary network, maintaining a steep diffusion gradient for rapid gas exchange.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p2-15",
          question:
            "Yeast respiring anaerobically produces which products?",
          options: [
            "Lactic acid only",
            "Carbon dioxide and water",
            "Ethanol and carbon dioxide",
            "Glucose and oxygen",
          ],
          answerIndex: 2,
          explanation:
            "Anaerobic respiration in yeast (fermentation) converts glucose into ethanol and carbon dioxide, releasing a small amount of energy. This is used in brewing and baking.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p2-16",
          question:
            "A person enters a cold room. Which homeostatic response helps conserve body heat?",
          options: [
            "Vasodilation of skin arterioles",
            "Increased sweating",
            "Vasoconstriction of skin arterioles and shivering",
            "Hair lying flat",
          ],
          answerIndex: 2,
          explanation:
            "In the cold, skin arterioles constrict (vasoconstriction) so less blood flows near the surface, reducing heat loss; shivering generates heat by muscle contraction; hair erector muscles contract to trap insulating air.",
          difficulty: "core",
          hints: [
            "To conserve heat, should blood flow to the skin increase or decrease?",
            "Shivering is muscle activity — what does that release?",
          ],
        },
        {
          id: "exam-biology-mcq-p2-17",
          question:
            "At a synapse, the nerve impulse is transmitted across the gap by:",
          options: [
            "An electric spark jumping the gap",
            "Diffusion of a neurotransmitter across the synaptic cleft",
            "Movement of the whole neurone",
            "Active transport of the impulse",
          ],
          answerIndex: 1,
          explanation:
            "When an impulse reaches the synapse, vesicles release a neurotransmitter that diffuses across the synaptic cleft and binds to receptors on the next neurone, triggering a new impulse.",
          difficulty: "core",
          hints: [
            "The signal becomes chemical at the synapse.",
            "How does the chemical cross the small gap?",
          ],
        },
        {
          id: "exam-biology-mcq-p2-18",
          question:
            "Which hormone is responsible for the development of female secondary sexual characteristics?",
          options: ["Testosterone", "Oestrogen", "Insulin", "Adrenaline"],
          answerIndex: 1,
          explanation:
            "Oestrogen, secreted by the ovaries, controls the development of female secondary sexual characteristics (e.g. breast development, wider hips) and the menstrual cycle.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p2-19",
          question:
            "Wind-pollinated flowers typically have:",
          options: [
            "Large, brightly coloured petals and nectar",
            "Small petals, feathery stigmas and large amounts of light pollen",
            "Sticky pollen and a scent",
            "Pollen produced in small quantities",
          ],
          answerIndex: 1,
          explanation:
            "Wind-pollinated flowers have small/dull petals, no nectar or scent, exposed feathery stigmas to catch pollen, and produce large amounts of small, light pollen that blows easily.",
          difficulty: "core",
          hints: [
            "No animal vector to attract, so no need for colour or nectar.",
            "How does pollen reach another flower?",
          ],
        },
        {
          id: "exam-biology-mcq-p2-20",
          question:
            "Which structure protects the developing fetus and allows exchange of substances with the mother's blood?",
          options: ["Amnion", "Placenta", "Umbilical artery", "Cervix"],
          answerIndex: 1,
          explanation:
            "The placenta is where the fetal and maternal blood come close (but do not mix), allowing exchange of oxygen, nutrients and wastes. The amnion (with amniotic fluid) protects and cushions the fetus.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p2-21",
          question:
            "A characteristic controlled by a single gene with two alleles, where neither allele is completely dominant, results in:",
          options: [
            "Continuous variation",
            "Codominance or incomplete dominance",
            "Sex linkage",
            "A 3 : 1 phenotype ratio always",
          ],
          answerIndex: 1,
          explanation:
            "When both alleles are expressed together (e.g. AB blood group), this is codominance. Where the heterozygote is intermediate, it is incomplete dominance. Both differ from simple dominance giving 3 : 1.",
          difficulty: "challenge",
          hints: [
            "Think about the human ABO blood group system.",
            "If both alleles show in the phenotype, what is that called?",
          ],
        },
        {
          id: "exam-biology-mcq-p2-22",
          question:
            "Which is an example of discontinuous variation?",
          options: ["Human height", "Body mass", "ABO blood group", "Leaf surface area"],
          answerIndex: 2,
          explanation:
            "ABO blood group falls into distinct categories (A, B, AB, O) with no intermediates — discontinuous variation, controlled by genes alone. Height and mass show continuous variation influenced by genes and environment.",
          difficulty: "core",
          hints: [
            "Discontinuous = distinct categories, no in-between values.",
            "Which option cannot have intermediate values?",
          ],
        },
        {
          id: "exam-biology-mcq-p2-23",
          question:
            "In a pyramid of numbers for the food chain: oak tree → caterpillar → bird, the shape is:",
          options: [
            "A regular upright pyramid",
            "Inverted at the producer level (wide top, narrow bottom)",
            "A perfect rectangle",
            "Narrow at the producer because one large tree supports many caterpillars",
          ],
          answerIndex: 3,
          explanation:
            "A single large oak tree (one producer) supports many caterpillars, so the producer bar is very narrow while the next level is wide — an inverted/irregular pyramid of numbers. A pyramid of biomass would be upright.",
          difficulty: "challenge",
          hints: [
            "Pyramids of numbers count organisms, ignoring size.",
            "How many trees support many caterpillars?",
          ],
        },
        {
          id: "exam-biology-mcq-p2-24",
          question:
            "Which process in the nitrogen cycle converts nitrogen gas into nitrogen-containing compounds in the soil?",
          options: [
            "Denitrification",
            "Nitrogen fixation",
            "Decomposition",
            "Nitrification",
          ],
          answerIndex: 1,
          explanation:
            "Nitrogen fixation (by nitrogen-fixing bacteria, e.g. in root nodules, or by lightning) converts atmospheric N2 into ammonium/nitrate compounds plants can use. Denitrification does the reverse.",
          difficulty: "core",
          hints: [
            "Which process starts with nitrogen GAS?",
            "Fixation means 'capturing' the gas into compounds.",
          ],
        },
        {
          id: "exam-biology-mcq-p2-25",
          question:
            "Deforestation can lead to increased flooding and soil erosion mainly because:",
          options: [
            "Trees no longer release oxygen",
            "Tree roots no longer bind the soil and less water is intercepted/absorbed",
            "There are fewer animals to dig the soil",
            "The soil becomes too warm",
          ],
          answerIndex: 1,
          explanation:
            "Tree roots bind soil and the canopy intercepts rainfall; removing trees means soil is washed away (erosion) and rain reaches the ground faster, increasing surface run-off and flooding.",
          difficulty: "core",
          hints: [
            "Think about what roots physically do to soil.",
            "What happens to rainwater without a tree canopy?",
          ],
        },
      ],
    },
    {
      id: "exam-biology-mcq-3",
      title: "Mock Exam — MCQ Paper 3",
      description:
        "25 multiple-choice questions spanning the full Cambridge IGCSE Biology 0610 Extended syllabus. Allow 45 minutes.",
      questions: [
        {
          id: "exam-biology-mcq-p3-01",
          question:
            "Which feature is common to ALL living organisms?",
          options: ["Movement from place to place", "Photosynthesis", "Respiration", "Possession of a nervous system"],
          answerIndex: 2,
          explanation:
            "All living organisms respire to release energy. Not all move from place to place, photosynthesise, or have a nervous system.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p3-02",
          question:
            "The function of ribosomes in a cell is to:",
          options: ["Store genetic material", "Synthesise proteins", "Release energy", "Control water content"],
          answerIndex: 1,
          explanation:
            "Ribosomes are the site of protein synthesis. The nucleus stores genetic material; mitochondria release energy; the vacuole/membrane help control water.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p3-03",
          question:
            "A piece of potato is left in concentrated sugar solution and becomes soft and decreases in mass. This is because:",
          options: [
            "Water entered the cells by osmosis",
            "Water left the cells by osmosis, making them flaccid",
            "Sugar entered the cells by active transport",
            "The cells respired the sugar",
          ],
          answerIndex: 1,
          explanation:
            "The sugar solution has a lower water potential than the potato cells, so water moves OUT by osmosis. The cells lose turgor (become flaccid/plasmolysed) and the tissue becomes soft and lighter.",
          difficulty: "core",
          hints: [
            "Compare the water potential inside the cell and in the solution.",
            "Mass decreased — did water enter or leave?",
          ],
        },
        {
          id: "exam-biology-mcq-p3-04",
          question:
            "Which statement best describes the action of an enzyme as a biological catalyst?",
          options: [
            "It is used up during the reaction.",
            "It raises the activation energy of a reaction.",
            "It speeds up a reaction and is unchanged at the end, lowering activation energy.",
            "It works on any substrate of any shape.",
          ],
          answerIndex: 2,
          explanation:
            "Enzymes speed up reactions by lowering the activation energy and are not used up (so can be reused). They are specific — each acts on a complementary substrate (lock-and-key/induced fit).",
          difficulty: "core",
          hints: [
            "Catalysts are not consumed.",
            "Do enzymes raise or lower activation energy?",
            "How specific is an enzyme's active site?",
          ],
        },
        {
          id: "exam-biology-mcq-p3-05",
          question:
            "Which structure in a leaf is the main site of photosynthesis?",
          options: ["Lower epidermis", "Palisade mesophyll", "Xylem", "Guard cells only"],
          answerIndex: 1,
          explanation:
            "The palisade mesophyll near the upper surface contains the most chloroplasts and is the main site of photosynthesis. It is positioned to receive maximum light.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p3-06",
          question:
            "Greenhouse growers sometimes burn paraffin heaters in winter. Which TWO factors does this increase to raise photosynthesis?",
          options: [
            "Oxygen and water",
            "Temperature and carbon dioxide concentration",
            "Light intensity and oxygen",
            "Humidity and nitrogen",
          ],
          answerIndex: 1,
          explanation:
            "Burning paraffin releases heat (raising temperature, increasing enzyme activity) and carbon dioxide (a raw material), both of which can increase the rate of photosynthesis if they are limiting.",
          difficulty: "core",
          hints: [
            "What two products does burning a fuel give off?",
            "Which of those are limiting factors for photosynthesis?",
          ],
        },
        {
          id: "exam-biology-mcq-p3-07",
          question:
            "Which substance is the end product of starch digestion that is absorbed into the blood?",
          options: ["Maltose", "Amino acids", "Glucose", "Fatty acids"],
          answerIndex: 2,
          explanation:
            "Starch is digested by amylase to maltose, then maltase breaks maltose into glucose, which is absorbed. Proteins give amino acids; lipids give fatty acids and glycerol.",
          difficulty: "core",
          hints: [
            "Starch → maltose → ?",
            "Which simple sugar is absorbed and respired?",
          ],
        },
        {
          id: "exam-biology-mcq-p3-08",
          question:
            "Why does the stomach produce hydrochloric acid?",
          options: [
            "To digest fats directly",
            "To provide the optimum pH for pepsin and to kill ingested bacteria",
            "To neutralise bile",
            "To emulsify proteins",
          ],
          answerIndex: 1,
          explanation:
            "Stomach acid provides a low pH optimum for the protease pepsin and kills many ingested pathogens. It does not digest fats or emulsify proteins.",
          difficulty: "core",
          hints: [
            "Which enzyme works best in acidic conditions?",
            "Acid also has a protective role against microbes.",
          ],
        },
        {
          id: "exam-biology-mcq-p3-09",
          question:
            "Which cells in a plant root are adapted for the absorption of water and have a large surface area?",
          options: ["Guard cells", "Root hair cells", "Phloem sieve cells", "Palisade cells"],
          answerIndex: 1,
          explanation:
            "Root hair cells have a long extension (root hair) giving a large surface area for absorbing water (by osmosis) and mineral ions (by active transport).",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p3-10",
          question:
            "Translocation in the phloem is best described as the transport of:",
          options: [
            "Water from roots to leaves",
            "Mineral ions from leaves to roots",
            "Sucrose and amino acids from sources to sinks",
            "Oxygen to all cells",
          ],
          answerIndex: 2,
          explanation:
            "Translocation is the movement of assimilates (mainly sucrose and amino acids) in the phloem from sources (e.g. leaves) to sinks (e.g. growing or storage regions). It can occur in either direction.",
          difficulty: "core",
          hints: [
            "Phloem carries the products of photosynthesis.",
            "Source = where made; sink = where used/stored.",
          ],
        },
        {
          id: "exam-biology-mcq-p3-11",
          question:
            "Which sequence correctly describes the path of blood through the heart from the body?",
          options: [
            "Vena cava → right atrium → right ventricle → pulmonary artery",
            "Pulmonary vein → right atrium → left ventricle → aorta",
            "Aorta → left atrium → left ventricle → vena cava",
            "Vena cava → left atrium → left ventricle → pulmonary artery",
          ],
          answerIndex: 0,
          explanation:
            "Deoxygenated blood returns via the vena cava to the right atrium, passes to the right ventricle, then is pumped through the pulmonary artery to the lungs.",
          difficulty: "core",
          hints: [
            "Deoxygenated blood enters the right side of the heart.",
            "Right ventricle pumps to the lungs.",
          ],
        },
        {
          id: "exam-biology-mcq-p3-12",
          question:
            "Lymphocytes defend the body by:",
          options: [
            "Engulfing pathogens by phagocytosis",
            "Producing antibodies specific to antigens",
            "Carrying oxygen to infected cells",
            "Forming clots",
          ],
          answerIndex: 1,
          explanation:
            "Lymphocytes produce specific antibodies complementary to a pathogen's antigens. Phagocytes (not lymphocytes) engulf pathogens by phagocytosis.",
          difficulty: "core",
          hints: [
            "There are two main white blood cell types — which makes antibodies?",
            "Antibodies are specific to antigens.",
          ],
        },
        {
          id: "exam-biology-mcq-p3-13",
          question:
            "During inhalation, the diaphragm and external intercostal muscles cause:",
          options: [
            "The volume of the thorax to decrease and pressure to increase",
            "The volume of the thorax to increase and pressure to decrease, so air flows in",
            "Air to be forced out of the lungs",
            "No change in lung volume",
          ],
          answerIndex: 1,
          explanation:
            "On inhalation the diaphragm flattens and the external intercostals raise the ribs, increasing thorax volume and lowering the internal pressure below atmospheric, so air flows in.",
          difficulty: "core",
          hints: [
            "Bigger volume → lower pressure.",
            "Air moves from high to low pressure.",
          ],
        },
        {
          id: "exam-biology-mcq-p3-14",
          question:
            "Which equation shows anaerobic respiration in human muscle?",
          options: [
            "glucose → lactic acid (+ a little energy)",
            "glucose + oxygen → carbon dioxide + water",
            "glucose → ethanol + carbon dioxide",
            "lactic acid → glucose + oxygen",
          ],
          answerIndex: 0,
          explanation:
            "In human muscle, anaerobic respiration converts glucose to lactic acid, releasing a small amount of energy without oxygen. Yeast instead produces ethanol and carbon dioxide.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p3-15",
          question:
            "The kidney controls the water content of the blood. The reabsorption of water in the kidney is controlled by:",
          options: ["Insulin", "ADH (antidiuretic hormone)", "Adrenaline", "Glucagon"],
          answerIndex: 1,
          explanation:
            "ADH increases the permeability of the collecting ducts, increasing water reabsorption when the blood is too concentrated. This is part of osmoregulation by negative feedback.",
          difficulty: "challenge",
          hints: [
            "Which hormone targets the kidney tubules?",
            "Anti-diuretic = reducing urine volume by reabsorbing water.",
            "It is released when blood water potential falls.",
          ],
        },
        {
          id: "exam-biology-mcq-p3-16",
          question:
            "In the iris reflex, in bright light the:",
          options: [
            "Radial muscles contract and the pupil widens",
            "Circular muscles contract and the pupil constricts",
            "Circular muscles relax and the pupil widens",
            "Lens becomes thinner",
          ],
          answerIndex: 1,
          explanation:
            "In bright light the circular muscles of the iris contract (and radial muscles relax), making the pupil smaller to reduce light entering and protect the retina.",
          difficulty: "core",
          hints: [
            "Bright light → less light should enter.",
            "Which muscles make the pupil smaller — circular or radial?",
          ],
        },
        {
          id: "exam-biology-mcq-p3-17",
          question:
            "Auxin causes a shoot to bend towards light because it:",
          options: [
            "Accumulates on the light side and inhibits growth there",
            "Accumulates on the shaded side and increases cell elongation there",
            "Is destroyed evenly across the shoot",
            "Causes cells on the light side to elongate faster",
          ],
          answerIndex: 1,
          explanation:
            "Auxin moves to the shaded side of the shoot, where it stimulates greater cell elongation. The shaded side grows longer, bending the shoot toward the light (positive phototropism).",
          difficulty: "challenge",
          hints: [
            "On which side does auxin build up?",
            "Auxin promotes cell elongation in shoots.",
            "The longer side ends up on the outside of the bend.",
          ],
        },
        {
          id: "exam-biology-mcq-p3-18",
          question:
            "Which statement about the menstrual cycle is correct?",
          options: [
            "Ovulation occurs at the start of menstruation.",
            "The uterus lining thickens after ovulation, ready for implantation.",
            "Progesterone causes the lining to break down while it is high.",
            "FSH is produced by the ovary to stimulate the pituitary.",
          ],
          answerIndex: 1,
          explanation:
            "After ovulation (around day 14) the corpus luteum secretes progesterone, which maintains and thickens the uterus lining for possible implantation. A fall in progesterone triggers menstruation.",
          difficulty: "challenge",
          hints: [
            "What does progesterone do to the uterus lining?",
            "Menstruation follows a FALL in progesterone, not a high level.",
          ],
        },
        {
          id: "exam-biology-mcq-p3-19",
          question:
            "Sperm cells are adapted for their function by having:",
          options: [
            "A large amount of stored food and no tail",
            "Many mitochondria and a tail (flagellum) for swimming",
            "A thick cell wall",
            "A diploid nucleus",
          ],
          answerIndex: 1,
          explanation:
            "Sperm have a tail to swim, many mitochondria to release energy for movement, an acrosome with enzymes to penetrate the egg, and a haploid nucleus.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p3-20",
          question:
            "A gene is best defined as:",
          options: [
            "A length of DNA that codes for a protein",
            "A structure made of protein only",
            "A whole chromosome",
            "A type of carbohydrate",
          ],
          answerIndex: 0,
          explanation:
            "A gene is a length of DNA that codes for a particular protein (or polypeptide). Alleles are alternative forms of a gene. A chromosome carries many genes.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p3-21",
          question:
            "A man with blood group AB and a woman with blood group O have a child. Which blood groups are possible for the child?",
          options: ["A or B", "AB only", "O only", "A, B, AB or O"],
          answerIndex: 0,
          explanation:
            "Father is I^A I^B; mother is I^O I^O. The child receives I^A or I^B from the father and I^O from the mother, giving I^A I^O (group A) or I^B I^O (group B).",
          difficulty: "challenge",
          hints: [
            "Write the genotypes: AB is I^A I^B, O is I^O I^O.",
            "List the gametes each parent can produce.",
            "Combine them — I^O is recessive.",
          ],
        },
        {
          id: "exam-biology-mcq-p3-22",
          question:
            "Which of these increases genetic variation in a population?",
          options: [
            "Asexual reproduction",
            "Mitosis",
            "Meiosis and random fertilisation",
            "Cloning",
          ],
          answerIndex: 2,
          explanation:
            "Meiosis (independent assortment and crossing over) produces genetically varied gametes, and random fertilisation combines them in new ways, increasing variation. Asexual reproduction, mitosis and cloning produce genetically identical offspring.",
          difficulty: "core",
          hints: [
            "Sexual reproduction increases variation; asexual does not.",
            "Which cell division produces varied gametes?",
          ],
        },
        {
          id: "exam-biology-mcq-p3-23",
          question:
            "Decomposers are important in an ecosystem because they:",
          options: [
            "Produce food by photosynthesis",
            "Recycle nutrients by breaking down dead organisms",
            "Are the top predators",
            "Fix carbon dioxide into glucose",
          ],
          answerIndex: 1,
          explanation:
            "Decomposers (bacteria and fungi) break down dead organisms and waste, releasing mineral ions and carbon dioxide back into the environment, recycling nutrients for producers.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p3-24",
          question:
            "Eutrophication of a lake caused by fertiliser run-off leads to fish dying mainly because:",
          options: [
            "Fertiliser is directly toxic to fish",
            "Algal blooms block light; when algae die, decomposers use up dissolved oxygen",
            "Fertiliser raises the water temperature",
            "Fish cannot eat the algae",
          ],
          answerIndex: 1,
          explanation:
            "Excess nitrate/phosphate cause algal blooms that block light, killing plants. Bacteria decomposing the dead material respire aerobically, depleting dissolved oxygen, so fish and other aerobic organisms suffocate.",
          difficulty: "challenge",
          hints: [
            "Nutrients cause rapid algal growth first.",
            "What happens when the algae die?",
            "Decomposer respiration uses dissolved oxygen.",
          ],
        },
        {
          id: "exam-biology-mcq-p3-25",
          question:
            "In genetic engineering to produce human insulin, the human insulin gene is inserted into:",
          options: [
            "A virus that infects humans",
            "A bacterial plasmid, which is then put into bacteria",
            "A plant chloroplast",
            "A red blood cell",
          ],
          answerIndex: 1,
          explanation:
            "The insulin gene is cut out with restriction enzymes and inserted into a bacterial plasmid (a vector). The plasmid is returned to bacteria, which then express the gene and produce human insulin.",
          difficulty: "challenge",
          hints: [
            "What small circular DNA acts as the vector in bacteria?",
            "Enzymes cut and join the DNA into this vector.",
          ],
        },
      ],
    },
    {
      id: "exam-biology-mcq-4",
      title: "Mock Exam — MCQ Paper 4",
      description:
        "25 multiple-choice questions spanning the full Cambridge IGCSE Biology 0610 Extended syllabus. Allow 45 minutes.",
      questions: [
        {
          id: "exam-biology-mcq-p4-01",
          question:
            "Which of the following is the correct function of the cell membrane?",
          options: [
            "To provide a rigid shape",
            "To control what enters and leaves the cell (partially permeable)",
            "To store genetic information",
            "To release energy",
          ],
          answerIndex: 1,
          explanation:
            "The cell-surface membrane is partially permeable and controls the movement of substances into and out of the cell. The cell wall provides rigidity in plants; the nucleus stores genetic information.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p4-02",
          question:
            "Which kingdom do organisms with cells that have no nucleus belong to?",
          options: ["Plants", "Animals", "Fungi", "Prokaryotes (bacteria)"],
          answerIndex: 3,
          explanation:
            "Prokaryotes (bacteria) have no true nucleus; their genetic material is a circular loop of DNA in the cytoplasm. Plants, animals and fungi are eukaryotes with a nucleus.",
          difficulty: "core",
          hints: [
            "Pro-karyote means 'before nucleus'.",
            "Which group lacks membrane-bound organelles?",
          ],
        },
        {
          id: "exam-biology-mcq-p4-03",
          question:
            "Visking (dialysis) tubing acts like a partially permeable membrane. Starch and glucose are placed inside, and the tubing is put in water. After a time, the water outside will contain:",
          options: [
            "Both starch and glucose",
            "Starch only",
            "Glucose only",
            "Neither, because nothing can pass through",
          ],
          answerIndex: 2,
          explanation:
            "Glucose molecules are small enough to diffuse through the membrane pores into the water; starch molecules are too large and remain inside. So the surrounding water contains glucose only.",
          difficulty: "core",
          hints: [
            "Which molecule is small — starch or glucose?",
            "Only small molecules pass through the pores.",
          ],
        },
        {
          id: "exam-biology-mcq-p4-04",
          question:
            "Which describes the ethanol emulsion test for lipids?",
          options: [
            "Add Benedict's and heat; a brick-red colour shows lipid.",
            "Dissolve sample in ethanol, then add water; a cloudy white emulsion shows lipid.",
            "Add iodine; a blue-black colour shows lipid.",
            "Add Biuret; a purple colour shows lipid.",
          ],
          answerIndex: 1,
          explanation:
            "In the emulsion test, the sample is dissolved in ethanol and then water is added; a cloudy white emulsion indicates lipid is present.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p4-05",
          question:
            "The lock-and-key model explains enzyme action. The 'lock' represents the:",
          options: ["Substrate", "Product", "Active site of the enzyme", "Inhibitor"],
          answerIndex: 2,
          explanation:
            "In the lock-and-key model the active site of the enzyme is the lock, and the substrate is the key that fits into it. Only a complementary substrate can bind.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p4-06",
          question:
            "An experiment shows photosynthesis rate rises as light intensity increases, then levels off. The plateau is best explained by:",
          options: [
            "Light becoming the limiting factor",
            "Another factor (CO2 or temperature) becoming the limiting factor",
            "Chlorophyll being used up",
            "The plant dying",
          ],
          answerIndex: 1,
          explanation:
            "At low light, light limits the rate. When the rate levels off despite more light, another factor (e.g. CO2 concentration or temperature) has become the limiting factor.",
          difficulty: "core",
          hints: [
            "If more light no longer increases rate, light is no longer limiting.",
            "What else could be in short supply?",
          ],
        },
        {
          id: "exam-biology-mcq-p4-07",
          question:
            "Which row correctly matches a food test reagent to the nutrient it detects?",
          options: [
            "Biuret — starch",
            "Iodine — protein",
            "Benedict's — reducing sugar",
            "Ethanol emulsion — glucose",
          ],
          answerIndex: 2,
          explanation:
            "Benedict's solution detects reducing sugars. Biuret detects protein, iodine detects starch, and the emulsion test detects lipids.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p4-08",
          question:
            "Egestion is best defined as:",
          options: [
            "The removal of undigested food (faeces) from the body",
            "The removal of metabolic waste such as urea",
            "The breakdown of large molecules into small ones",
            "The uptake of digested food into the blood",
          ],
          answerIndex: 0,
          explanation:
            "Egestion is removing undigested material (faeces) through the anus. Excretion removes metabolic wastes (e.g. urea, CO2); digestion breaks down food; absorption takes products into the blood.",
          difficulty: "core",
          hints: [
            "Egestion deals with food that was never absorbed.",
            "Do not confuse it with excretion of metabolic waste.",
          ],
        },
        {
          id: "exam-biology-mcq-p4-09",
          question:
            "Which adaptation reduces water loss in plants living in dry conditions?",
          options: [
            "Large thin leaves",
            "Many open stomata on the upper surface",
            "A thick waxy cuticle and sunken stomata",
            "No roots",
          ],
          answerIndex: 2,
          explanation:
            "A thick waxy cuticle reduces evaporation from the surface, and sunken stomata trap humid air, reducing the water vapour gradient and so reducing transpiration.",
          difficulty: "core",
          hints: [
            "How can a plant cut down evaporation from its surface?",
            "Trapping moist air near the stomata reduces the gradient.",
          ],
        },
        {
          id: "exam-biology-mcq-p4-10",
          question:
            "The pulmonary artery is unusual among arteries because it:",
          options: [
            "Carries blood towards the heart",
            "Has valves along its length",
            "Carries deoxygenated blood",
            "Has very thin walls like a vein",
          ],
          answerIndex: 2,
          explanation:
            "Arteries normally carry oxygenated blood, but the pulmonary artery carries deoxygenated blood from the right ventricle to the lungs. It still carries blood AWAY from the heart at high pressure.",
          difficulty: "core",
          hints: [
            "Arteries carry blood away from the heart.",
            "Where does the pulmonary artery go, and what is the blood like there?",
          ],
        },
        {
          id: "exam-biology-mcq-p4-11",
          question:
            "Which substance is filtered out at the kidney but then completely reabsorbed in a healthy person?",
          options: ["Urea", "Glucose", "Excess water always", "Large proteins"],
          answerIndex: 1,
          explanation:
            "Glucose is filtered in the glomerulus but is completely reabsorbed (by active transport) in the proximal tubule in a healthy person. Urea is largely excreted; large proteins are not filtered.",
          difficulty: "challenge",
          hints: [
            "Which useful substance must not be lost in urine?",
            "Glucose in urine is a sign of diabetes, not normal.",
          ],
        },
        {
          id: "exam-biology-mcq-p4-12",
          question:
            "Which white blood cell type engulfs and digests pathogens?",
          options: ["Lymphocyte", "Phagocyte", "Platelet", "Red blood cell"],
          answerIndex: 1,
          explanation:
            "Phagocytes carry out phagocytosis — engulfing and digesting pathogens. Lymphocytes produce antibodies; platelets help clotting; red cells carry oxygen.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p4-13",
          question:
            "Active immunity differs from passive immunity because active immunity:",
          options: [
            "Is always provided by injecting antibodies",
            "Involves the body making its own antibodies and memory cells, giving long-term protection",
            "Is only short-lived",
            "Does not involve antigens",
          ],
          answerIndex: 1,
          explanation:
            "Active immunity is gained when the body makes its own antibodies (after infection or vaccination) and forms memory cells, giving long-term protection. Passive immunity (e.g. antibodies via the placenta or breast milk) is temporary.",
          difficulty: "challenge",
          hints: [
            "Active = the body does the work itself.",
            "Which type forms memory cells?",
            "Which lasts longer?",
          ],
        },
        {
          id: "exam-biology-mcq-p4-14",
          question:
            "Carbon monoxide in cigarette smoke is harmful because it:",
          options: [
            "Combines irreversibly with haemoglobin, reducing oxygen transport",
            "Causes the alveoli to expand",
            "Increases the number of red blood cells",
            "Speeds up gas exchange",
          ],
          answerIndex: 0,
          explanation:
            "Carbon monoxide binds to haemoglobin (forming carboxyhaemoglobin) more readily than oxygen, reducing the blood's oxygen-carrying capacity.",
          difficulty: "core",
          hints: [
            "CO competes with oxygen for the same molecule.",
            "Which molecule normally carries oxygen?",
          ],
        },
        {
          id: "exam-biology-mcq-p4-15",
          question:
            "Which factor increases the rate of respiration in germinating seeds?",
          options: ["Decreasing temperature towards 0 °C", "Removing all oxygen", "Increasing temperature up to the optimum", "Adding more carbon dioxide"],
          answerIndex: 2,
          explanation:
            "Raising the temperature towards the optimum increases enzyme activity and so the rate of (aerobic) respiration. Beyond the optimum, enzymes denature and the rate falls.",
          difficulty: "core",
          hints: [
            "Respiration is controlled by enzymes.",
            "How does temperature affect enzyme-controlled reactions up to the optimum?",
          ],
        },
        {
          id: "exam-biology-mcq-p4-16",
          question:
            "Homeostasis is best defined as:",
          options: [
            "The maintenance of a constant internal environment",
            "Growth of an organism",
            "Reproduction of cells",
            "The response of plants to light",
          ],
          answerIndex: 0,
          explanation:
            "Homeostasis is the maintenance of a constant internal environment (e.g. temperature, blood glucose, water content) within narrow limits, usually by negative feedback.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p4-17",
          question:
            "A man and woman both have normal vision but their son is colour blind (an X-linked recessive condition). The mother must be:",
          options: [
            "Homozygous normal",
            "A carrier (X^B X^b)",
            "Colour blind herself",
            "Unable to pass on the allele",
          ],
          answerIndex: 1,
          explanation:
            "A colour-blind son (X^b Y) inherited X^b from his mother (the father provides the Y). Since the mother has normal vision, she must be a carrier (X^B X^b).",
          difficulty: "challenge",
          hints: [
            "A son gets his X chromosome from his mother.",
            "He is colour blind, so where did his X^b come from?",
            "The mother sees normally — so what is her genotype?",
          ],
        },
        {
          id: "exam-biology-mcq-p4-18",
          question:
            "Adrenaline and the nervous system both prepare the body for action. An advantage of the hormonal response is that it:",
          options: [
            "Acts faster than nerves",
            "Produces a longer-lasting, widespread effect",
            "Is more precisely targeted to one muscle",
            "Does not require the blood",
          ],
          answerIndex: 1,
          explanation:
            "Hormonal responses are slower but more widespread and longer-lasting than nervous responses, because the hormone travels in the blood to many target organs.",
          difficulty: "core",
          hints: [
            "Compare speed and duration of nervous vs hormonal control.",
            "Hormones travel in the blood to many targets.",
          ],
        },
        {
          id: "exam-biology-mcq-p4-19",
          question:
            "A seed will germinate when which conditions are present?",
          options: [
            "Light, carbon dioxide and chlorophyll",
            "Water, oxygen and a suitable (warm) temperature",
            "Nitrate, magnesium and light",
            "Carbon dioxide and high humidity only",
          ],
          answerIndex: 1,
          explanation:
            "Germination requires water (to mobilise enzymes and reactions), oxygen (for aerobic respiration to release energy) and a suitable warmth (for enzyme activity). Light is not generally required for germination.",
          difficulty: "core",
          hints: [
            "Germinating seeds respire — what do they need for that?",
            "Light and chlorophyll are needed later, for photosynthesis.",
          ],
        },
        {
          id: "exam-biology-mcq-p4-20",
          question:
            "Variation that is caused only by the environment and not inherited includes:",
          options: [
            "Blood group",
            "A scar from an accident",
            "Eye colour",
            "Ability to roll the tongue",
          ],
          answerIndex: 1,
          explanation:
            "A scar is acquired from the environment and is not passed to offspring. Blood group, eye colour and tongue-rolling are genetically (or partly genetically) determined.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p4-21",
          question:
            "In selective breeding of dairy cattle for high milk yield, a farmer should:",
          options: [
            "Breed from the cows and bulls with the best milk-yield characteristics over many generations",
            "Expose the cattle to mutagens",
            "Insert a milk gene using a plasmid",
            "Clone a single random cow",
          ],
          answerIndex: 0,
          explanation:
            "Selective (artificial) breeding chooses individuals showing the desired characteristic and breeds them together over many generations, gradually increasing the frequency of the desired alleles.",
          difficulty: "core",
          hints: [
            "Selective breeding uses choice of parents, not gene insertion.",
            "It is carried out over many generations.",
          ],
        },
        {
          id: "exam-biology-mcq-p4-22",
          question:
            "Which statement correctly describes the theory of evolution by natural selection?",
          options: [
            "Organisms change their bodies during life and pass the changes on.",
            "Variation exists; better-adapted individuals survive and reproduce, passing on advantageous alleles.",
            "All members of a species are identical.",
            "Selection pressure creates new mutations on demand.",
          ],
          answerIndex: 1,
          explanation:
            "Natural selection acts on existing variation: individuals with advantageous alleles are more likely to survive, reproduce and pass on those alleles. Selection does not create mutations; it selects from variation already present.",
          difficulty: "challenge",
          hints: [
            "Variation comes first (from mutation), then selection acts.",
            "The environment selects; it does not create the variation.",
          ],
        },
        {
          id: "exam-biology-mcq-p4-23",
          question:
            "The energy lost between trophic levels is mainly due to:",
          options: [
            "Photosynthesis",
            "Respiration, movement and heat loss (and material not eaten/egested)",
            "Active transport in roots",
            "Mineral uptake",
          ],
          answerIndex: 1,
          explanation:
            "Energy is lost at each level through respiration (released as heat), movement, and as material that is not eaten or is egested/excreted, so only about 10% is passed on.",
          difficulty: "core",
          hints: [
            "Where does most of the energy 'go' at each level?",
            "Think about heat from respiration and uneaten parts.",
          ],
        },
        {
          id: "exam-biology-mcq-p4-24",
          question:
            "Which of the following is a sustainable resource management practice for a forest?",
          options: [
            "Clear-felling the entire forest at once",
            "Replanting trees and only harvesting at a rate that allows regrowth",
            "Burning the forest to clear land",
            "Removing all the topsoil",
          ],
          answerIndex: 1,
          explanation:
            "Sustainable management harvests at a rate that the resource can replace (e.g. replanting and selective logging), maintaining the forest for future generations.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-mcq-p4-25",
          question:
            "A population of insects is sprayed with insecticide. A few survive and the population recovers, now mostly resistant. Which statement is the best explanation?",
          options: [
            "The insecticide caused the insects to develop resistance during their lifetime.",
            "Resistant insects were already present by chance (mutation); they survived and reproduced, passing on the resistance allele.",
            "All insects became resistant equally.",
            "The insects learned to avoid the insecticide.",
          ],
          answerIndex: 1,
          explanation:
            "Variation due to mutation meant some insects were already resistant. The insecticide is a selection pressure: susceptible insects die, resistant ones survive and reproduce, so the resistance allele increases in frequency — natural selection.",
          difficulty: "challenge",
          hints: [
            "Did the spray create resistance, or select for it?",
            "Where did the resistance come from before spraying?",
            "Survivors pass the allele to offspring.",
          ],
        },
      ],
    },
  ],

  qaPapers: [
    {
      id: "exam-biology-qa-1",
      title: "Mock Exam — Structured Paper 1",
      description:
        "20 structured questions spanning the full syllabus. Write clearly and show all working in calculations. Suggested time: 90 minutes.",
      questions: [
        {
          id: "exam-biology-qa-p1-01",
          question:
            "A student observes onion epidermal cells under a light microscope at a magnification of x400. The image of one cell measures 8 mm across.\n\n(a) Calculate the real width of the cell in micrometres (um). Show your working. [2]\n(b) State one structure visible in the onion cell that would NOT be present in a human cheek cell. [1]",
          marks: 3,
          modelAnswer:
            "(a) Real size = image size / magnification = 8 mm / 400 = 0.02 mm. Convert to micrometres: 0.02 x 1000 = 20 um.\n\n(b) Cellulose cell wall (accept: large permanent vacuole / chloroplasts not in cheek cell but onion epidermis usually lacks chloroplasts, so cell wall/vacuole are safest).",
          markScheme: [
            "(a) real size = image / magnification = 8/400 = 0.02 mm [1]",
            "(a) converted correctly to 20 um [1]",
            "(b) cell wall / large permanent vacuole [1]",
          ],
          commonError:
            "Multiplying by the magnification instead of dividing, or forgetting to convert mm to um (1 mm = 1000 um).",
          difficulty: "warmup",
          solutions: [
            {
              label: "Magnification calculation",
              steps: [
                "magnification = image size / real size, so real size = image size / magnification",
                "real size = 8 mm / 400 = 0.02 mm",
                "0.02 mm x 1000 um/mm = 20 um",
              ],
            },
          ],
        },
        {
          id: "exam-biology-qa-p1-02",
          question:
            "Define the term diffusion and give one example of diffusion that is important to a leaf. [3]",
          marks: 3,
          modelAnswer:
            "Diffusion is the net movement of particles (molecules or ions) from a region of higher concentration to a region of lower concentration, down a concentration gradient, due to their random movement. It does not require energy from the cell. Example: carbon dioxide diffuses into the leaf through the stomata for photosynthesis (or oxygen diffuses out).",
          markScheme: [
            "net movement from higher to lower concentration / down a concentration gradient [1]",
            "due to random movement / does not require energy [1]",
            "valid leaf example, e.g. CO2 in / O2 out through stomata [1]",
          ],
          commonError:
            "Saying 'movement' without 'net' or omitting that it is from high to low concentration.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-qa-p1-03",
          question:
            "The enzyme catalase breaks down hydrogen peroxide into water and oxygen. A student investigates how temperature affects the rate by measuring the volume of oxygen collected in 60 seconds.\n\n(a) Suggest two variables the student must keep constant for a fair test. [2]\n(b) The rate increases from 10 to 40 degrees C, then falls sharply above 45 degrees C. Explain this pattern. [4]",
          marks: 6,
          modelAnswer:
            "(a) Any two of: concentration/volume of hydrogen peroxide; concentration/mass of catalase (e.g. same source/amount); pH; volume of solution; same apparatus.\n\n(b) As temperature rises from 10 to 40 degrees C, the enzyme and substrate molecules gain kinetic energy and move faster, so there are more frequent successful collisions and more enzyme-substrate complexes form per second, increasing the rate. Above about 45 degrees C the high temperature breaks the bonds holding the enzyme's tertiary structure, so the active site changes shape (denaturation). The substrate can no longer fit, fewer complexes form, and the rate falls sharply.",
          markScheme: [
            "(a) any two suitable controlled variables [2]",
            "(b) increased kinetic energy / more collisions with more energy [1]",
            "(b) more enzyme-substrate complexes form / rate rises to optimum [1]",
            "(b) above ~45 degrees C the enzyme denatures / active site changes shape [1]",
            "(b) substrate no longer fits / fewer complexes so rate falls [1]",
          ],
          commonError:
            "Writing that the enzyme is 'killed' (enzymes are not alive) and not mentioning the change in active-site shape.",
          difficulty: "core",
          hints: [
            "A fair test changes only the independent variable (temperature).",
            "Below the optimum, think kinetic energy and collisions.",
            "Above the optimum, think denaturation of the active site.",
            "Why can substrate no longer bind after denaturation?",
          ],
          strategy: "explain in two phases: rise (collisions) then fall (denaturation)",
        },
        {
          id: "exam-biology-qa-p1-04",
          question:
            "(a) State the balanced symbol equation for photosynthesis. [2]\n(b) Describe how the structure of a leaf is adapted to obtain the raw materials for photosynthesis. [3]",
          marks: 5,
          modelAnswer:
            "(a) 6CO2 + 6H2O -> C6H12O6 + 6O2 (in the presence of light and chlorophyll).\n\n(b) The broad, flat lamina gives a large surface area to absorb light and carbon dioxide. Many stomata (mainly on the lower epidermis) allow CO2 to diffuse in. A network of veins (xylem) delivers water to the mesophyll cells. The thin leaf gives short diffusion distances, and air spaces in the spongy mesophyll allow gases to circulate to the photosynthesising cells.",
          markScheme: [
            "(a) correct reactants and products [1]",
            "(a) balanced with correct numbers (6CO2, 6H2O, 6O2) [1]",
            "(b) large surface area / thin for light and gas exchange [1]",
            "(b) stomata allow CO2 to diffuse in [1]",
            "(b) xylem/veins supply water [1]",
          ],
          commonError:
            "Unbalanced equation (forgetting the 6s) or writing oxygen as O instead of O2.",
          difficulty: "core",
          hints: [
            "Balance carbon, hydrogen and oxygen atoms on both sides.",
            "Raw materials are CO2 (gas), water (liquid) and light.",
            "Match each raw material to a leaf feature that supplies it.",
          ],
        },
        {
          id: "exam-biology-qa-p1-05",
          question:
            "Describe the roles of amylase, protease and lipase in the digestion of a meal containing bread, meat and butter. For each enzyme name its substrate and products. [6]",
          marks: 6,
          modelAnswer:
            "Amylase digests starch (in bread) into maltose; maltase then converts maltose to glucose. Protease (e.g. pepsin in the stomach, trypsin from the pancreas) digests proteins (in meat) into amino acids. Lipase digests fats/lipids (in butter) into fatty acids and glycerol. Bile (from the liver) first emulsifies the fat to increase surface area so lipase works faster. The products (glucose, amino acids, fatty acids and glycerol) are then small and soluble enough to be absorbed.",
          markScheme: [
            "amylase: starch -> maltose [1]",
            "(maltase) maltose -> glucose [1]",
            "protease: protein -> amino acids [1]",
            "named protease or site (pepsin/stomach or trypsin/pancreas) [1]",
            "lipase: fats/lipids -> fatty acids and glycerol [1]",
            "bile emulsifies fat / increases surface area for lipase [1]",
          ],
          commonError:
            "Saying lipase produces 'glucose' or that bile is an enzyme (it is not; it emulsifies fats).",
          difficulty: "core",
          hints: [
            "Match each food type to its digestive enzyme.",
            "State substrate -> products for each.",
            "Remember bile is not an enzyme but aids fat digestion.",
          ],
        },
        {
          id: "exam-biology-qa-p1-06",
          question:
            "A potato cylinder of initial mass 5.00 g is left in a sucrose solution. After 30 minutes its mass is 4.40 g.\n\n(a) Calculate the percentage change in mass. Show your working. [2]\n(b) Explain, in terms of water potential, why the mass changed. [3]",
          marks: 5,
          modelAnswer:
            "(a) Change in mass = 4.40 - 5.00 = -0.60 g. Percentage change = (-0.60 / 5.00) x 100 = -12% (a 12% decrease).\n\n(b) The sucrose solution has a lower water potential (more concentrated, less free water) than the cell sap of the potato cells. Water therefore moves out of the cells, down the water potential gradient, by osmosis through the partially permeable cell membranes. The cells lose water and become flaccid, so the cylinder loses mass.",
          markScheme: [
            "(a) mass change = -0.60 g and divides by original mass [1]",
            "(a) = -12% / 12% decrease [1]",
            "(b) solution has lower water potential than cells [1]",
            "(b) water leaves cells by osmosis down the gradient [1]",
            "(b) through partially permeable membrane / cells become flaccid [1]",
          ],
          commonError:
            "Dividing by the final mass instead of the original, or forgetting the minus sign / that it is a decrease.",
          difficulty: "core",
          hints: [
            "Percentage change = (change / original) x 100.",
            "Original mass is 5.00 g.",
            "Mass fell, so water must have left the cells.",
          ],
          solutions: [
            {
              label: "Percentage change in mass",
              steps: [
                "change = final - initial = 4.40 - 5.00 = -0.60 g",
                "percentage change = (change / original) x 100",
                "= (-0.60 / 5.00) x 100 = -12% (12% decrease)",
              ],
            },
          ],
        },
        {
          id: "exam-biology-qa-p1-07",
          question:
            "Describe the pathway of water through a plant, from the soil to the atmosphere, naming the tissues and processes involved. [5]",
          marks: 5,
          modelAnswer:
            "Water is absorbed from the soil into the root hair cells by osmosis (down a water potential gradient). It passes across the root to the xylem. Water travels up the xylem vessels from the roots to the leaves, pulled by the transpiration stream. In the leaf, water moves into the mesophyll cells and evaporates from their surfaces into the air spaces. Finally, water vapour diffuses out through the stomata into the atmosphere (transpiration).",
          markScheme: [
            "uptake into root hair cells by osmosis [1]",
            "water enters and travels up the xylem [1]",
            "moves up to the leaf / transpiration pull [1]",
            "evaporation from mesophyll cell surfaces into air spaces [1]",
            "diffusion of water vapour out of stomata [1]",
          ],
          commonError:
            "Confusing xylem with phloem, or saying water is 'pushed' up rather than pulled by transpiration.",
          difficulty: "core",
          hints: [
            "Start at the root hairs and follow the water upward.",
            "Name the transport tissue (xylem).",
            "How does water finally leave the leaf?",
          ],
        },
        {
          id: "exam-biology-qa-p1-08",
          question:
            "The heart is described as a double pump.\n\n(a) Explain what is meant by a double circulatory system. [2]\n(b) Explain why the wall of the left ventricle is thicker than the wall of the right ventricle. [3]",
          marks: 5,
          modelAnswer:
            "(a) In a double circulatory system, the blood passes through the heart twice for each complete circuit of the body: once in the pulmonary circulation (heart to lungs and back) and once in the systemic circulation (heart to the rest of the body and back).\n\n(b) The left ventricle pumps oxygenated blood out through the aorta to the whole body, which is a long, high-resistance circuit, so it must generate a high pressure. The right ventricle only pumps blood the short distance to the lungs at lower pressure. A thicker, more muscular left ventricle wall can contract more forcefully to produce this higher pressure.",
          markScheme: [
            "(a) blood passes through the heart twice per circuit [1]",
            "(a) pulmonary (to lungs) and systemic (to body) circuits named [1]",
            "(b) left ventricle pumps blood to the whole body / further distance [1]",
            "(b) needs to generate higher pressure [1]",
            "(b) thicker muscle contracts with more force [1]",
          ],
          commonError:
            "Stating the left side is 'bigger' without linking thicker muscle to greater force/pressure needed for the body.",
          difficulty: "core",
          hints: [
            "Where does each ventricle pump blood to?",
            "Which circuit needs higher pressure?",
            "Link muscle thickness to force of contraction.",
          ],
        },
        {
          id: "exam-biology-qa-p1-09",
          question:
            "Describe how the body responds to a bacterial infection, including the roles of phagocytes and lymphocytes. [5]",
          marks: 5,
          modelAnswer:
            "Phagocytes (a type of white blood cell) detect and engulf the bacteria by phagocytosis, then digest them using enzymes. Lymphocytes recognise the antigens on the surface of the bacteria. A lymphocyte with a complementary antibody is activated and divides to produce many identical cells. These produce specific antibodies that bind to the antigens, clumping the bacteria together (agglutination) and marking them for destruction, or neutralising toxins. Memory cells are also produced, allowing a faster, larger response if the same pathogen is met again.",
          markScheme: [
            "phagocytes engulf / ingest bacteria by phagocytosis [1]",
            "lymphocytes recognise antigens [1]",
            "lymphocytes produce specific antibodies [1]",
            "antibodies bind to antigens / agglutinate / neutralise toxins [1]",
            "memory cells produced for faster future response [1]",
          ],
          commonError:
            "Saying antibodies 'eat' the bacteria — antibodies bind and mark them; phagocytes do the engulfing.",
          difficulty: "core",
          hints: [
            "Two white blood cell types do different jobs.",
            "Which engulfs, which makes antibodies?",
            "Antibodies are specific to antigens.",
          ],
        },
        {
          id: "exam-biology-qa-p1-10",
          question:
            "Explain how blood glucose concentration is returned to normal after it rises following a meal. Name the hormone and gland involved and describe its effects. [5]",
          marks: 5,
          modelAnswer:
            "When blood glucose rises after a meal, this is detected by the islets of Langerhans in the pancreas, which secrete the hormone insulin into the blood. Insulin travels to the liver and muscle cells and causes them to take up glucose from the blood. It stimulates the liver to convert excess glucose into glycogen for storage. This lowers the blood glucose concentration back to normal. This is an example of negative feedback.",
          markScheme: [
            "rise detected by the pancreas / islets of Langerhans [1]",
            "insulin secreted into the blood [1]",
            "insulin causes cells (liver/muscle) to take up glucose [1]",
            "liver converts glucose to glycogen for storage [1]",
            "blood glucose returns to normal / negative feedback [1]",
          ],
          commonError:
            "Saying insulin 'breaks down' or 'destroys' glucose rather than promoting uptake and storage as glycogen.",
          difficulty: "core",
          hints: [
            "Which organ monitors and which hormone is released when glucose is high?",
            "What does insulin make cells do?",
            "Glucose is stored as which polysaccharide?",
          ],
        },
        {
          id: "exam-biology-qa-p1-11",
          question:
            "Describe the sequence of events in a reflex action when a person touches a hot object, naming the parts of the reflex arc in order. [5]",
          marks: 5,
          modelAnswer:
            "The heat is detected by temperature/pain receptors in the skin (the stimulus). An electrical impulse passes along a sensory neurone to the spinal cord (the CNS). In the spinal cord the impulse passes across a synapse to a relay neurone, and then across another synapse to a motor neurone. The motor neurone carries the impulse to the effector, a muscle in the arm, which contracts to pull the hand away (the response). This happens rapidly and automatically, without conscious thought, protecting the body from harm.",
          markScheme: [
            "receptor in skin detects stimulus [1]",
            "sensory neurone carries impulse to CNS/spinal cord [1]",
            "relay neurone in spinal cord / synapses crossed [1]",
            "motor neurone to effector [1]",
            "effector (muscle) contracts to move hand away / rapid and automatic [1]",
          ],
          commonError:
            "Putting the neurones in the wrong order, or omitting the relay neurone and synapses.",
          difficulty: "core",
          hints: [
            "Stimulus -> receptor -> ... -> effector -> response.",
            "Name the three neurone types in order.",
            "Where are the synapses?",
          ],
        },
        {
          id: "exam-biology-qa-p1-12",
          question:
            "(a) Define the term pollination. [1]\n(b) Describe two ways in which an insect-pollinated flower is adapted to attract insects and ensure pollen transfer. [4]",
          marks: 5,
          modelAnswer:
            "(a) Pollination is the transfer of pollen grains from the anther (male part) to the stigma (female part) of a flower.\n\n(b) Insect-pollinated flowers have large, brightly coloured petals and a scent to attract insects, and produce nectar as a reward. The anthers and stigma are positioned inside the flower so that a visiting insect brushes against them. The pollen is often sticky or spiky so it sticks to the insect's body, and the stigma is sticky to pick up pollen from the insect.",
          markScheme: [
            "(a) transfer of pollen from anther to stigma [1]",
            "(b) brightly coloured petals/scent/nectar to attract insects [1]",
            "(b) explanation that this draws insects in [1]",
            "(b) sticky/spiky pollen sticks to insect [1]",
            "(b) anthers/stigma positioned so insect touches them / sticky stigma [1]",
          ],
          commonError:
            "Confusing pollination with fertilisation, or giving wind-pollination features for an insect-pollinated flower.",
          difficulty: "core",
          hints: [
            "Pollination is just pollen transfer, not fertilisation.",
            "Insect flowers must attract a vector — how?",
            "How does pollen attach to the insect?",
          ],
        },
        {
          id: "exam-biology-qa-p1-13",
          question:
            "In pea plants, the allele for round seeds (R) is dominant to the allele for wrinkled seeds (r). A heterozygous round-seeded plant is crossed with a wrinkled-seeded plant.\n\n(a) State the genotypes of the two parents. [1]\n(b) Draw a genetic diagram (Punnett square) to show the offspring genotypes and give the expected phenotype ratio. [4]",
          marks: 5,
          modelAnswer:
            "(a) Heterozygous round = Rr; wrinkled = rr.\n\n(b) Parents: Rr x rr. Gametes from Rr are R and r; gametes from rr are r and r.\nPunnett square:\n      r       r\nR |  Rr  |  Rr\nr |  rr  |  rr\nOffspring genotypes: 2 Rr : 2 rr, i.e. 1 Rr : 1 rr.\nPhenotypes: 1 round : 1 wrinkled (a 1 : 1 ratio).",
          markScheme: [
            "(a) parents Rr and rr [1]",
            "(b) correct gametes R and r / r and r [1]",
            "(b) Punnett square with Rr, Rr, rr, rr [1]",
            "(b) genotype ratio 1 Rr : 1 rr [1]",
            "(b) phenotype ratio 1 round : 1 wrinkled [1]",
          ],
          commonError:
            "Giving a 3 : 1 ratio (that is for two heterozygous parents) instead of 1 : 1 for a test-cross style cross.",
          difficulty: "core",
          hints: [
            "Heterozygous means one of each allele.",
            "Wrinkled is recessive, so its genotype must be rr.",
            "Fill the Punnett square and count phenotypes.",
          ],
          solutions: [
            {
              label: "Monohybrid cross Rr x rr",
              steps: [
                "Parents: Rr x rr",
                "Gametes: R or r (from Rr); r only (from rr)",
                "Offspring: Rr, Rr, rr, rr = 1 Rr : 1 rr",
                "Phenotype: round (R_) : wrinkled (rr) = 1 : 1",
              ],
            },
          ],
        },
        {
          id: "exam-biology-qa-p1-14",
          question:
            "A food chain in a field is: grass -> grasshopper -> shrew -> owl.\n\n(a) Name the producer and a secondary consumer in this chain. [2]\n(b) Explain why the food chain rarely has more than four or five trophic levels. [3]",
          marks: 5,
          modelAnswer:
            "(a) Producer = grass; secondary consumer = shrew (it eats the grasshopper, a primary consumer).\n\n(b) Only about 10% of the energy at one trophic level is passed on to the next. The rest is lost through respiration (as heat), movement, and in materials not eaten or lost in faeces/urine. After several transfers there is too little energy left to support a further trophic level, so chains are usually limited to four or five levels.",
          markScheme: [
            "(a) producer = grass [1]",
            "(a) secondary consumer = shrew [1]",
            "(b) only ~10% energy passed to next level [1]",
            "(b) energy lost by respiration/heat/movement/egestion [1]",
            "(b) too little energy left to support higher levels [1]",
          ],
          commonError:
            "Naming the owl as the secondary consumer (it is the tertiary consumer); confusing producers with primary consumers.",
          difficulty: "core",
          hints: [
            "Producer makes its own food; count consumers in order.",
            "How much energy passes between levels?",
            "Where does the rest of the energy go?",
          ],
        },
        {
          id: "exam-biology-qa-p1-15",
          question:
            "Describe the role of microorganisms (bacteria and fungi) as decomposers in the carbon cycle, and explain how carbon is returned to the atmosphere. [4]",
          marks: 4,
          modelAnswer:
            "Decomposers (bacteria and fungi) feed on dead organisms and waste material, breaking down the complex carbon-containing molecules. As they respire, they release carbon dioxide back into the atmosphere. Decomposition also recycles other nutrients (e.g. mineral ions) for plants. Carbon is also returned to the atmosphere by the respiration of plants and animals and by the combustion of fossil fuels and wood.",
          markScheme: [
            "decomposers feed on / break down dead organisms and waste [1]",
            "they respire, releasing CO2 to the atmosphere [1]",
            "respiration of plants/animals also releases CO2 [1]",
            "combustion of fossil fuels/wood releases CO2 [1]",
          ],
          commonError:
            "Saying decomposers release oxygen instead of carbon dioxide.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-qa-p1-16",
          question:
            "Explain how the alveoli are adapted for efficient gas exchange. Give three adaptations and explain how each helps. [6]",
          marks: 6,
          modelAnswer:
            "1. Large surface area: the millions of alveoli provide a very large total surface area, so more gas can diffuse at once. 2. Thin walls (one cell thick): the alveolar wall and capillary wall are each one cell thick, giving a short diffusion distance for oxygen and carbon dioxide. 3. Rich blood (capillary) supply: blood constantly flows past carrying oxygen away and bringing carbon dioxide, maintaining a steep concentration gradient. 4. Moist lining: gases dissolve in the moisture before diffusing across. (Any three explained.)",
          markScheme: [
            "large surface area [1] + so more diffusion / faster exchange [1]",
            "thin walls / one cell thick [1] + short diffusion distance [1]",
            "good blood supply [1] + maintains concentration gradient [1]",
          ],
          commonError:
            "Listing the adaptations without explaining how each one helps gas exchange (the explanation marks are lost).",
          difficulty: "core",
          hints: [
            "Think surface area, distance and concentration gradient.",
            "For each adaptation, add 'so that...'.",
            "Diffusion is faster with bigger area, shorter distance and steeper gradient.",
          ],
        },
        {
          id: "exam-biology-qa-p1-17",
          question:
            "A student investigates the effect of light intensity on photosynthesis using pondweed, counting bubbles of gas produced per minute at different distances from a lamp.\n\n(a) Name the gas in the bubbles and how you could confirm its identity. [2]\n(b) Explain why moving the lamp closer increases the bubble rate, and why eventually the rate stops increasing. [4]",
          marks: 6,
          modelAnswer:
            "(a) The gas is oxygen. It can be confirmed because it relights a glowing splint.\n\n(b) Moving the lamp closer increases the light intensity reaching the pondweed. Light provides the energy for the light-dependent reactions of photosynthesis, so more light means a faster rate, releasing more oxygen and more bubbles per minute. Eventually the rate stops increasing because another factor becomes limiting (e.g. carbon dioxide concentration or temperature). Even though there is plenty of light, the rate is now capped by the factor in shortest supply.",
          markScheme: [
            "(a) gas is oxygen [1]",
            "(a) relights a glowing splint [1]",
            "(b) closer lamp = higher light intensity [1]",
            "(b) light is needed for photosynthesis so rate increases [1]",
            "(b) rate plateaus when another factor becomes limiting [1]",
            "(b) e.g. CO2 or temperature now limiting [1]",
          ],
          commonError:
            "Forgetting that light intensity is inversely related to distance, or not naming a specific other limiting factor.",
          difficulty: "core",
          hints: [
            "Which gas does photosynthesis release?",
            "Closer lamp = more light energy.",
            "What stops the rate rising forever?",
          ],
        },
        {
          id: "exam-biology-qa-p1-18",
          question:
            "Cystic fibrosis is caused by a recessive allele (f); the normal allele (F) is dominant. Two parents who are both carriers have a child.\n\n(a) Using a genetic diagram, find the probability that the child has cystic fibrosis. [3]\n(b) Explain why two unaffected parents can have an affected child. [2]",
          marks: 5,
          modelAnswer:
            "(a) Both parents are carriers: Ff x Ff. Gametes: F and f from each.\nPunnett square:\n      F       f\nF |  FF  |  Ff\nf |  Ff  |  ff\nOffspring: 1 FF : 2 Ff : 1 ff. Only ff has cystic fibrosis, so the probability is 1 in 4 (25%).\n\n(b) Each parent is heterozygous (Ff): they carry one recessive f allele but are unaffected because the dominant F allele produces a functional protein. If both pass on their f allele, the child is ff and is affected.",
          markScheme: [
            "(a) parents Ff x Ff with correct gametes [1]",
            "(a) Punnett square giving FF, Ff, Ff, ff [1]",
            "(a) probability of cystic fibrosis = 1/4 or 25% [1]",
            "(b) parents are carriers / heterozygous Ff [1]",
            "(b) both pass on f / dominant allele masks recessive in parents [1]",
          ],
          commonError:
            "Giving the probability as 3/4 (that is unaffected) or 1/2; confusing carrier with affected.",
          difficulty: "challenge",
          hints: [
            "Carrier means heterozygous (Ff).",
            "Draw the full Punnett square and count the ff outcome.",
            "Affected children are homozygous recessive (ff).",
          ],
          solutions: [
            {
              label: "Probability of cystic fibrosis",
              steps: [
                "Parents both carriers: Ff x Ff",
                "Punnett square gives 1 FF : 2 Ff : 1 ff",
                "Affected = ff = 1 out of 4 outcomes",
                "Probability = 1/4 = 25%",
              ],
            },
          ],
        },
        {
          id: "exam-biology-qa-p1-19",
          question:
            "Explain how natural selection could lead a population of bacteria to become resistant to an antibiotic. [5]",
          marks: 5,
          modelAnswer:
            "Within a population of bacteria there is genetic variation, caused by mutation. By chance, some bacteria have an allele giving resistance to the antibiotic. When the antibiotic is applied it acts as a selection pressure, killing the non-resistant bacteria. The resistant bacteria survive and reproduce (rapidly, by binary fission), passing on the resistance allele to their offspring. Over many generations the proportion of resistant bacteria in the population increases, so the whole population becomes resistant.",
          markScheme: [
            "variation in the population caused by mutation [1]",
            "some bacteria are resistant by chance [1]",
            "antibiotic acts as a selection pressure killing non-resistant bacteria [1]",
            "resistant bacteria survive and reproduce [1]",
            "resistance allele passed on / frequency increases over generations [1]",
          ],
          commonError:
            "Implying that the antibiotic causes the bacteria to become resistant, rather than selecting pre-existing resistant variants.",
          difficulty: "challenge",
          hints: [
            "Where does the variation come from first?",
            "What role does the antibiotic play - cause or selector?",
            "How does the allele frequency change over generations?",
          ],
          strategy: "variation -> selection pressure -> survival and reproduction -> allele frequency change",
        },
        {
          id: "exam-biology-qa-p1-20",
          question:
            "Untreated sewage is discharged into a river. Downstream, the dissolved oxygen concentration falls sharply and then recovers.\n\n(a) Explain why the dissolved oxygen falls just below the discharge point. [3]\n(b) Suggest why the oxygen concentration recovers further downstream. [2]",
          marks: 5,
          modelAnswer:
            "(a) Sewage contains a large amount of organic matter, which is food for aerobic decomposer bacteria. The bacteria multiply rapidly and respire aerobically, using up the dissolved oxygen in the water faster than it can be replaced. This high biochemical oxygen demand causes the dissolved oxygen to fall sharply, harming aerobic organisms such as fish.\n\n(b) Further downstream the organic matter has been broken down/used up, so the bacterial population falls and they use less oxygen. Oxygen also dissolves back in from the air and from photosynthesis by water plants, so the dissolved oxygen concentration recovers.",
          markScheme: [
            "(a) sewage is organic matter / food for bacteria [1]",
            "(a) aerobic bacteria multiply and respire [1]",
            "(a) they use up dissolved oxygen [1]",
            "(b) organic matter used up so fewer bacteria / less oxygen demand [1]",
            "(b) oxygen replaced from air / photosynthesis [1]",
          ],
          commonError:
            "Saying the sewage directly poisons the fish rather than explaining the oxygen-depletion mechanism via bacterial respiration.",
          difficulty: "challenge",
          hints: [
            "What do bacteria do with the organic matter, and what do they need to respire?",
            "Why does this lower dissolved oxygen?",
            "Once the organic matter is gone, how does oxygen return?",
          ],
        },
      ],
    },
    {
      id: "exam-biology-qa-2",
      title: "Mock Exam — Structured Paper 2",
      description:
        "20 structured questions spanning the full syllabus. Write clearly and show all working in calculations. Suggested time: 90 minutes.",
      questions: [
        {
          id: "exam-biology-qa-p2-01",
          question:
            "List, in order of increasing size, the levels of organisation in a multicellular organism, and give an example of each from a flowering plant. [4]",
          marks: 4,
          modelAnswer:
            "Cell (e.g. a palisade mesophyll cell) -> tissue (e.g. xylem or palisade mesophyll tissue) -> organ (e.g. a leaf) -> organ system (e.g. the shoot/transport system) -> organism (the whole plant). A tissue is a group of similar cells with a common function; an organ is several tissues working together.",
          markScheme: [
            "correct order: cell -> tissue -> organ -> organ system (-> organism) [1]",
            "valid cell example (e.g. palisade cell) [1]",
            "valid tissue example (e.g. xylem) [1]",
            "valid organ example (e.g. leaf) [1]",
          ],
          commonError:
            "Calling a leaf a 'tissue' or a single cell an 'organ'.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-qa-p2-02",
          question:
            "Explain the difference between osmosis and active transport, and give one example of each in a plant. [4]",
          marks: 4,
          modelAnswer:
            "Osmosis is the net movement of water molecules from a region of higher water potential to a region of lower water potential through a partially permeable membrane; it is passive and needs no energy. Example: water uptake into root hair cells from the soil. Active transport is the movement of particles against a concentration gradient using energy from respiration. Example: uptake of mineral ions (e.g. nitrate) into root hair cells from dilute soil water.",
          markScheme: [
            "osmosis = movement of water, high to low water potential, through partially permeable membrane, passive [1]",
            "osmosis example (water into root hair cell) [1]",
            "active transport = against gradient, requires energy from respiration [1]",
            "active transport example (mineral ion uptake) [1]",
          ],
          commonError:
            "Saying osmosis moves 'all particles' rather than specifically water molecules.",
          difficulty: "core",
          hints: [
            "Osmosis is specifically about water.",
            "Active transport needs energy and goes against the gradient.",
            "Pick a plant example for each.",
          ],
        },
        {
          id: "exam-biology-qa-p2-03",
          question:
            "(a) State the chemical elements found in carbohydrates, in lipids, and in proteins. [3]\n(b) Describe how you would test a food sample for the presence of protein. [2]",
          marks: 5,
          modelAnswer:
            "(a) Carbohydrates contain carbon, hydrogen and oxygen. Lipids contain carbon, hydrogen and oxygen (but with a lower proportion of oxygen). Proteins contain carbon, hydrogen, oxygen and nitrogen (and often sulfur).\n\n(b) Add Biuret reagent (or copper sulfate solution and sodium hydroxide) to the sample. If protein is present, the solution turns from blue to purple/violet.",
          markScheme: [
            "(a) carbohydrate = C, H, O [1]",
            "(a) lipid = C, H, O [1]",
            "(a) protein = C, H, O, N (and S) [1]",
            "(b) add Biuret reagent [1]",
            "(b) positive result is purple/violet [1]",
          ],
          commonError:
            "Forgetting that proteins additionally contain nitrogen, which distinguishes them from carbohydrates and lipids.",
          difficulty: "core",
          hints: [
            "All three contain C, H, O; one has an extra element.",
            "Which element is unique to proteins?",
            "Biuret is the protein test.",
          ],
        },
        {
          id: "exam-biology-qa-p2-04",
          question:
            "Explain how a low pH affects the activity of the enzyme amylase, which has an optimum pH of about 7. [4]",
          marks: 4,
          modelAnswer:
            "At a low pH (acidic), conditions are far from amylase's optimum of about 7. The excess hydrogen ions interfere with and break the bonds (hydrogen bonds and ionic interactions) that hold the enzyme's tertiary structure, so the active site changes shape. The substrate (starch) can no longer fit into the active site, so fewer or no enzyme-substrate complexes form. The enzyme is denatured and its activity falls greatly or stops.",
          markScheme: [
            "pH far below the optimum [1]",
            "bonds maintaining tertiary structure are broken [1]",
            "active site changes shape [1]",
            "substrate no longer fits / enzyme denatured / activity falls [1]",
          ],
          commonError:
            "Saying low pH simply 'slows' the enzyme down, without explaining the change to the active-site shape.",
          difficulty: "core",
          hints: [
            "Compare the pH to the optimum.",
            "What holds the active site in its shape?",
            "Why can the substrate no longer bind?",
          ],
        },
        {
          id: "exam-biology-qa-p2-05",
          question:
            "Describe an experiment to show that light is needed for photosynthesis, using a destarched plant. Include how you would obtain a control. [5]",
          marks: 5,
          modelAnswer:
            "Destarch the plant by keeping it in the dark for 24-48 hours so any stored starch is used up. Cover part of one leaf with aluminium foil (or a card stencil) so that part is in darkness, leaving the rest exposed to light; this provides the variable. Leave the plant in bright light for several hours. Remove the leaf, boil it in water (to kill cells/stop reactions), then boil it in ethanol to remove the chlorophyll, rinse in water to soften, and add iodine solution. The part that was exposed to light turns blue-black (starch present); the covered part stays orange-brown (no starch). This shows light is needed for photosynthesis. The covered region acts as the control, identical except for the absence of light.",
          markScheme: [
            "destarch plant by leaving in the dark [1]",
            "cover part of a leaf to exclude light (the control comparison) [1]",
            "leave in light, then test the leaf for starch with iodine (after ethanol) [1]",
            "exposed part turns blue-black; covered part stays brown [1]",
            "conclusion: light needed for photosynthesis / covered area is the control [1]",
          ],
          commonError:
            "Forgetting to destarch the plant first, so the result could be due to pre-existing starch.",
          difficulty: "core",
          hints: [
            "Why must the plant be destarched first?",
            "Only light should differ between the two parts of the leaf.",
            "Recall the starch test steps.",
          ],
        },
        {
          id: "exam-biology-qa-p2-06",
          question:
            "(a) Explain why humans need a balanced diet, naming two nutrients and their functions. [3]\n(b) Describe one deficiency disease and the nutrient that prevents it. [2]",
          marks: 5,
          modelAnswer:
            "(a) A balanced diet supplies all the nutrients in the correct amounts for health. For example: proteins provide amino acids for growth and repair of tissues; carbohydrates provide glucose for energy (respiration). (Other valid: fats for energy/insulation; vitamins and minerals for specific functions; fibre for gut movement.)\n\n(b) Scurvy is caused by a lack of vitamin C; eating fruit and vegetables containing vitamin C prevents it. (Accept: rickets - vitamin D; anaemia - iron.)",
          markScheme: [
            "(a) balanced diet supplies correct amounts of all nutrients [1]",
            "(a) named nutrient 1 with function [1]",
            "(a) named nutrient 2 with function [1]",
            "(b) named deficiency disease [1]",
            "(b) correct nutrient that prevents it [1]",
          ],
          commonError:
            "Linking the wrong nutrient to a deficiency disease (e.g. iron for scurvy instead of vitamin C).",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-qa-p2-07",
          question:
            "Explain how the small intestine is adapted for the efficient absorption of digested food. Give three adaptations. [5]",
          marks: 5,
          modelAnswer:
            "The inner surface is folded and covered in many villi, and each villus has microvilli, giving a very large surface area for absorption. The wall of each villus is one cell thick (thin), giving a short diffusion distance into the blood. Each villus has a dense network of blood capillaries that carry away absorbed glucose and amino acids, maintaining a steep concentration gradient. There is also a lacteal that absorbs fatty acids and glycerol. The intestine is also long, increasing the time and area for absorption.",
          markScheme: [
            "large surface area from villi and microvilli [1]",
            "thin wall (one cell thick) / short diffusion distance [1]",
            "good blood supply (capillaries) maintains gradient [1]",
            "lacteal for fat absorption / long length [1]",
            "any further valid adaptation explained [1]",
          ],
          commonError:
            "Confusing villi (absorption) with the function of the stomach or describing digestion rather than absorption.",
          difficulty: "core",
          hints: [
            "Think surface area, distance, and gradient.",
            "Name the structures (villi, microvilli, capillaries, lacteal).",
            "Explain how each speeds absorption.",
          ],
        },
        {
          id: "exam-biology-qa-p2-08",
          question:
            "Explain how guard cells open and close the stomata, and why stomata usually close at night. [5]",
          marks: 5,
          modelAnswer:
            "When guard cells take in water by osmosis they become turgid. Because the inner wall of each guard cell is thicker and less stretchy than the outer wall, the cells bend/bow apart, opening the stoma. To open, guard cells actively accumulate ions (e.g. potassium), lowering their water potential so water enters by osmosis. When guard cells lose water and become flaccid, they straighten and the stoma closes. At night there is no light for photosynthesis, so there is no need to take in carbon dioxide; closing the stomata reduces water loss by transpiration without affecting photosynthesis.",
          markScheme: [
            "guard cells become turgid when they gain water by osmosis [1]",
            "uneven wall thickening causes the cells to bow / open the pore [1]",
            "loss of water makes guard cells flaccid so stoma closes [1]",
            "at night no photosynthesis so no need for CO2 uptake [1]",
            "closing reduces water loss by transpiration [1]",
          ],
          commonError:
            "Saying guard cells 'push' the pore open without explaining turgor and uneven wall thickening.",
          difficulty: "challenge",
          hints: [
            "What makes a cell turgid?",
            "Why does the guard cell bend when turgid?",
            "What is the benefit of closing stomata at night?",
          ],
        },
        {
          id: "exam-biology-qa-p2-09",
          question:
            "Describe the structure and function of each of the three main types of blood vessel: arteries, veins and capillaries. [6]",
          marks: 6,
          modelAnswer:
            "Arteries carry blood away from the heart at high pressure. They have thick, muscular and elastic walls and a narrow lumen to withstand and maintain the pressure. Veins carry blood back to the heart at low pressure. They have thinner walls, a wide lumen, and valves to prevent backflow of blood. Capillaries are tiny vessels that link arteries to veins and are the site of exchange of substances with tissues. They have walls one cell thick, giving a short diffusion distance, allowing oxygen, glucose and wastes to be exchanged with cells.",
          markScheme: [
            "artery: carries blood away from heart at high pressure [1]",
            "artery: thick muscular/elastic wall, narrow lumen [1]",
            "vein: carries blood to heart at low pressure, has valves [1]",
            "vein: thin wall, wide lumen [1]",
            "capillary: one-cell-thick wall, site of exchange [1]",
            "capillary: short diffusion distance for substances [1]",
          ],
          commonError:
            "Stating veins have thick muscular walls (that is arteries) or that capillaries have valves.",
          difficulty: "core",
          hints: [
            "Match wall thickness and lumen to the blood pressure in each vessel.",
            "Which vessel has valves and why?",
            "Why are capillary walls so thin?",
          ],
        },
        {
          id: "exam-biology-qa-p2-10",
          question:
            "(a) Write the word equation for aerobic respiration. [1]\n(b) Compare the energy released and products of aerobic and anaerobic respiration in a human muscle cell. [4]",
          marks: 5,
          modelAnswer:
            "(a) glucose + oxygen -> carbon dioxide + water (+ energy).\n\n(b) Aerobic respiration uses oxygen and completely breaks down glucose to carbon dioxide and water, releasing a large amount of energy per glucose molecule. Anaerobic respiration in muscle occurs without oxygen and only partly breaks down glucose into lactic acid, releasing a much smaller amount of energy. The lactic acid builds up and must later be oxidised, creating an oxygen debt. So aerobic respiration releases more energy and has different products from anaerobic respiration.",
          markScheme: [
            "(a) glucose + oxygen -> carbon dioxide + water [1]",
            "(b) aerobic uses oxygen / anaerobic does not [1]",
            "(b) aerobic products CO2 + water; anaerobic product lactic acid [1]",
            "(b) aerobic releases much more energy than anaerobic [1]",
            "(b) anaerobic produces lactic acid / oxygen debt [1]",
          ],
          commonError:
            "Stating that anaerobic respiration in muscle produces ethanol and CO2 (that is yeast, not human muscle).",
          difficulty: "core",
          hints: [
            "Aerobic = with oxygen; anaerobic = without.",
            "Humans produce lactic acid, not ethanol.",
            "Which releases more energy per glucose?",
          ],
        },
        {
          id: "exam-biology-qa-p2-11",
          question:
            "Explain how the body controls its temperature when a person becomes too hot. Describe two responses and how each helps cool the body. [4]",
          marks: 4,
          modelAnswer:
            "When the body gets too hot, this is detected by the brain (hypothalamus). Sweat glands produce more sweat; the water in sweat evaporates from the skin, and evaporation requires heat energy from the body, cooling it down. Also, the arterioles supplying the skin capillaries widen (vasodilation), so more warm blood flows near the skin surface and more heat is lost to the surroundings by radiation. Together these responses lower body temperature back towards normal (negative feedback).",
          markScheme: [
            "more sweat produced [1]",
            "evaporation of sweat takes heat from the body / cooling [1]",
            "vasodilation - arterioles widen so more blood near skin surface [1]",
            "more heat lost to surroundings (radiation) [1]",
          ],
          commonError:
            "Saying blood vessels 'move' towards the surface (they do not move; the arterioles dilate).",
          difficulty: "core",
          hints: [
            "What does evaporation of sweat do to body heat?",
            "How does blood flow to the skin change?",
            "Why does that increase heat loss?",
          ],
        },
        {
          id: "exam-biology-qa-p2-12",
          question:
            "Describe how an impulse is passed from one neurone to the next across a synapse. [4]",
          marks: 4,
          modelAnswer:
            "When an impulse arrives at the end of the first neurone, it causes vesicles to release a chemical called a neurotransmitter into the synaptic cleft (gap). The neurotransmitter diffuses across the cleft and binds to specific receptor molecules on the membrane of the next neurone. This triggers a new electrical impulse in the next neurone. The neurotransmitter is then broken down or removed so the synapse can be used again.",
          markScheme: [
            "impulse causes release of neurotransmitter from vesicles [1]",
            "neurotransmitter diffuses across the synaptic cleft [1]",
            "binds to receptors on the next neurone [1]",
            "triggers a new impulse in the next neurone [1]",
          ],
          commonError:
            "Saying the electrical impulse jumps the gap directly, rather than being carried chemically.",
          difficulty: "core",
          hints: [
            "The signal becomes chemical at the synapse.",
            "How does the chemical cross the cleft?",
            "What does it bind to on the other side?",
          ],
        },
        {
          id: "exam-biology-qa-p2-13",
          question:
            "Describe the role of FSH, LH, oestrogen and progesterone in the menstrual cycle. [5]",
          marks: 5,
          modelAnswer:
            "FSH (from the pituitary gland) stimulates an egg follicle to mature in the ovary and stimulates the ovary to produce oestrogen. Oestrogen causes the lining of the uterus to repair and thicken, and at a high level it stimulates a surge of LH (and inhibits FSH). LH (from the pituitary) triggers ovulation (release of the egg) around day 14 and stimulates the development of the corpus luteum. The corpus luteum secretes progesterone, which maintains the thick uterus lining ready for implantation. If no fertilisation occurs, the corpus luteum breaks down, progesterone falls, and the lining breaks down (menstruation).",
          markScheme: [
            "FSH stimulates follicle maturation / oestrogen production [1]",
            "oestrogen repairs and thickens the uterus lining [1]",
            "LH triggers ovulation [1]",
            "progesterone maintains the uterus lining [1]",
            "fall in progesterone leads to menstruation [1]",
          ],
          commonError:
            "Mixing up which hormone triggers ovulation (LH) and which thickens the lining (oestrogen/progesterone).",
          difficulty: "challenge",
          hints: [
            "Two hormones come from the pituitary, two from the ovary.",
            "Which hormone causes ovulation?",
            "What maintains the lining, and what happens when it falls?",
          ],
        },
        {
          id: "exam-biology-qa-p2-14",
          question:
            "Sperm cells and egg cells are specialised for their functions.\n\n(a) Describe two adaptations of a sperm cell. [2]\n(b) Describe two adaptations of an egg cell. [2]",
          marks: 4,
          modelAnswer:
            "(a) A sperm cell has a tail (flagellum) to swim to the egg, and many mitochondria to release energy for swimming. It also has an acrosome containing enzymes to digest a path into the egg, and a haploid nucleus.\n\n(b) An egg cell is large and contains a store of food (yolk/cytoplasm) to nourish the early embryo. After fertilisation its membrane changes to prevent the entry of more than one sperm. It also has a haploid nucleus and a jelly coat.",
          markScheme: [
            "(a) tail/flagellum for swimming [1]",
            "(a) many mitochondria for energy / acrosome with enzymes [1]",
            "(b) food store (yolk/cytoplasm) for the embryo [1]",
            "(b) membrane changes after fertilisation to block more sperm / large size [1]",
          ],
          commonError:
            "Giving the same adaptation for both, or saying the egg 'swims' to the sperm.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-qa-p2-15",
          question:
            "(a) Define the terms gene and allele. [2]\n(b) Explain the difference between genotype and phenotype, using an example. [3]",
          marks: 5,
          modelAnswer:
            "(a) A gene is a length of DNA that codes for a particular protein/characteristic. An allele is an alternative version (form) of a gene.\n\n(b) The genotype is the genetic make-up of an organism - the alleles it has (e.g. Tt for a pea plant). The phenotype is the observable characteristics/features of the organism that result from the genotype interacting with the environment (e.g. the plant being tall). For example, both TT and Tt plants have the tall phenotype, but different genotypes.",
          markScheme: [
            "(a) gene = length of DNA coding for a protein/characteristic [1]",
            "(a) allele = alternative form/version of a gene [1]",
            "(b) genotype = the alleles present / genetic make-up [1]",
            "(b) phenotype = observable characteristics [1]",
            "(b) valid example linking genotype to phenotype [1]",
          ],
          commonError:
            "Using gene and allele as if they mean the same thing.",
          difficulty: "core",
          hints: [
            "A gene has different versions called alleles.",
            "Genotype = the alleles; phenotype = what you see.",
            "Give a quick example like Tt and 'tall'.",
          ],
        },
        {
          id: "exam-biology-qa-p2-16",
          question:
            "A pyramid of biomass for a food chain is almost always upright, but a pyramid of numbers is sometimes inverted.\n\n(a) Explain what a pyramid of biomass shows. [2]\n(b) Explain why a pyramid of numbers for the chain (one oak tree -> many caterpillars -> fewer birds) is not a regular pyramid shape. [3]",
          marks: 5,
          modelAnswer:
            "(a) A pyramid of biomass shows the total dry mass of all the organisms at each trophic level in an area, drawn as bars to scale. Because energy and biomass are lost between levels, each bar is usually smaller than the one below, giving an upright pyramid.\n\n(b) A pyramid of numbers counts the number of organisms at each level, ignoring their size. One very large oak tree (a single producer) supports many caterpillars, so the producer bar is narrow while the primary consumer bar is wide - the pyramid is inverted at the bottom. The birds are fewer than the caterpillars, so the top narrows again, giving an irregular shape.",
          markScheme: [
            "(a) total (dry) mass of organisms at each level [1]",
            "(a) usually upright because biomass decreases up the chain [1]",
            "(b) numbers ignore organism size [1]",
            "(b) one large tree supports many caterpillars [1]",
            "(b) so the producer bar is narrow / pyramid is inverted or irregular [1]",
          ],
          commonError:
            "Confusing biomass with numbers, or thinking a pyramid of biomass can be commonly inverted.",
          difficulty: "challenge",
          hints: [
            "Biomass = total mass; numbers = count of organisms.",
            "How big is one oak tree compared with a caterpillar?",
            "Why does counting (not weighing) distort the shape?",
          ],
        },
        {
          id: "exam-biology-qa-p2-17",
          question:
            "Describe the processes in the nitrogen cycle that (a) convert nitrogen gas into nitrogen compounds and (b) return nitrogen gas to the atmosphere. Name the type of bacteria involved in each. [5]",
          marks: 5,
          modelAnswer:
            "(a) Nitrogen fixation converts nitrogen gas (N2) from the air into ammonium compounds/nitrates that plants can use. This is carried out by nitrogen-fixing bacteria (e.g. in the root nodules of legumes) and also by lightning. Nitrifying bacteria then convert ammonium ions into nitrites and nitrates (nitrification).\n\n(b) Denitrifying bacteria convert nitrates in the soil back into nitrogen gas, which returns to the atmosphere (denitrification). This commonly happens in waterlogged, anaerobic soils.",
          markScheme: [
            "(a) nitrogen fixation converts N2 to ammonium/nitrate [1]",
            "(a) nitrogen-fixing bacteria (in root nodules) / lightning [1]",
            "(a) nitrifying bacteria convert ammonium to nitrate [1]",
            "(b) denitrification converts nitrate to nitrogen gas [1]",
            "(b) denitrifying bacteria responsible [1]",
          ],
          commonError:
            "Mixing up nitrifying and denitrifying bacteria (one makes nitrate, the other removes it).",
          difficulty: "challenge",
          hints: [
            "Fixation takes nitrogen gas INTO compounds.",
            "Nitrifying bacteria make nitrate; denitrifying ones remove it.",
            "Which process returns N2 to the air?",
          ],
        },
        {
          id: "exam-biology-qa-p2-18",
          question:
            "A field of 600 m^2 contains dandelions. A student throws ten 0.5 m x 0.5 m quadrats at random and counts a mean of 4 dandelions per quadrat.\n\n(a) Calculate the estimated total number of dandelions in the field. Show your working. [3]\n(b) Give one way the student could improve the reliability of the estimate. [1]",
          marks: 4,
          modelAnswer:
            "(a) Area of one quadrat = 0.5 x 0.5 = 0.25 m^2. Mean density = 4 dandelions / 0.25 m^2 = 16 dandelions per m^2. Estimated total = 16 x 600 = 9600 dandelions.\n\n(b) Use more quadrats / a larger number of samples (to give a more representative mean and reduce the effect of anomalies). (Accept: ensure sampling is genuinely random.)",
          markScheme: [
            "(a) quadrat area = 0.25 m^2 [1]",
            "(a) density = 4 / 0.25 = 16 per m^2 [1]",
            "(a) total = 16 x 600 = 9600 [1]",
            "(b) take more quadrats / more samples / ensure random [1]",
          ],
          commonError:
            "Forgetting to convert per-quadrat counts to per-m^2 before scaling up (multiplying 4 x 600 = 2400 is wrong because the quadrat is not 1 m^2).",
          difficulty: "core",
          hints: [
            "First find the area of one quadrat.",
            "Convert the count to a density per square metre.",
            "Then scale up to the whole field area.",
          ],
          solutions: [
            {
              label: "Estimating population from quadrats",
              steps: [
                "quadrat area = 0.5 m x 0.5 m = 0.25 m^2",
                "density = mean count / quadrat area = 4 / 0.25 = 16 per m^2",
                "total = density x field area = 16 x 600 = 9600 dandelions",
              ],
            },
          ],
        },
        {
          id: "exam-biology-qa-p2-19",
          question:
            "Explain how human activities can lead to a reduction in biodiversity, giving two named examples and the effect of each. [4]",
          marks: 4,
          modelAnswer:
            "Deforestation destroys habitats, so the species that lived there lose their food and shelter and their populations fall or become extinct, reducing biodiversity. Pollution, for example water pollution by fertilisers, causes eutrophication that kills aquatic organisms and reduces the variety of species in the water. (Other valid examples: overfishing/hunting reducing populations; introduction of non-native species outcompeting natives.) Each reduces the number and variety of species in an ecosystem.",
          markScheme: [
            "named example 1 (e.g. deforestation) [1] + effect (habitat loss / species decline) [1]",
            "named example 2 (e.g. pollution/overfishing) [1] + effect on species variety [1]",
          ],
          commonError:
            "Naming an activity but not stating how it actually reduces the number/variety of species.",
          difficulty: "core",
          hints: [
            "Pick two clear human activities.",
            "For each, explain the effect on species.",
            "Biodiversity = variety of living organisms.",
          ],
        },
        {
          id: "exam-biology-qa-p2-20",
          question:
            "Genetic engineering is used to produce human insulin in bacteria. Describe the main steps involved. [5]",
          marks: 5,
          modelAnswer:
            "1. The human insulin gene is identified and cut out of human DNA using a restriction enzyme. 2. A bacterial plasmid (the vector) is cut open with the same restriction enzyme, leaving matching sticky ends. 3. The insulin gene is inserted into the plasmid and joined using the enzyme ligase, forming recombinant DNA. 4. The plasmid is taken up by host bacteria. 5. The bacteria are grown (cultured) in large numbers in fermenters; they express the gene and produce human insulin, which is then extracted and purified.",
          markScheme: [
            "insulin gene cut out using a restriction enzyme [1]",
            "plasmid cut with the same restriction enzyme (matching sticky ends) [1]",
            "gene inserted and joined with ligase / recombinant DNA [1]",
            "plasmid taken up by bacteria [1]",
            "bacteria cultured/grown and produce insulin [1]",
          ],
          commonError:
            "Omitting the role of restriction enzymes and ligase, or not mentioning the plasmid acting as a vector.",
          difficulty: "challenge",
          hints: [
            "Which enzymes cut and join the DNA?",
            "What is the role of the plasmid?",
            "How is the insulin then made in quantity?",
          ],
          strategy: "cut gene -> cut plasmid -> insert/join -> insert into bacteria -> culture",
        },
      ],
    },
    {
      id: "exam-biology-qa-3",
      title: "Mock Exam — Structured Paper 3",
      description:
        "20 structured questions spanning the full syllabus. Write clearly and show all working in calculations. Suggested time: 90 minutes.",
      questions: [
        {
          id: "exam-biology-qa-p3-01",
          question:
            "State three characteristics that all living organisms share, and briefly explain what each means. [3]",
          marks: 3,
          modelAnswer:
            "Any three of: Nutrition - taking in materials for energy, growth and development. Respiration - chemical reactions in cells that release energy from nutrient molecules. Excretion - removal of toxic metabolic wastes. Growth - a permanent increase in size and dry mass. Movement - an action causing a change of position or place. Sensitivity - the ability to detect and respond to stimuli. Reproduction - producing more of the same kind of organism.",
          markScheme: [
            "first characteristic correctly named and explained [1]",
            "second characteristic correctly named and explained [1]",
            "third characteristic correctly named and explained [1]",
          ],
          commonError:
            "Listing the term without an explanation, or confusing excretion with egestion.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-qa-p3-02",
          question:
            "Describe how you could demonstrate osmosis using Visking (dialysis) tubing, sugar solution and water, and predict the result. [4]",
          marks: 4,
          modelAnswer:
            "Fill a length of Visking tubing with concentrated sugar solution, tie both ends, and record its starting mass (or place it through a stopper into a capillary tube to watch the level). Place the tubing in a beaker of distilled water. Leave it for a set time. Water has a higher water potential outside than inside, so water moves into the tubing by osmosis through the partially permeable Visking membrane. The tubing increases in mass / the level in the capillary rises, showing that water has moved in by osmosis. The sugar molecules are too large to pass out.",
          markScheme: [
            "set up: sugar solution in Visking tubing placed in water [1]",
            "water has higher water potential outside than inside [1]",
            "water moves in by osmosis through the partially permeable membrane [1]",
            "result: tubing gains mass / level rises [1]",
          ],
          commonError:
            "Saying sugar moves out (it is too large) instead of water moving in.",
          difficulty: "core",
          hints: [
            "Visking tubing models a partially permeable membrane.",
            "Compare water potential inside and outside.",
            "Which way does water move, and what is the measurable result?",
          ],
        },
        {
          id: "exam-biology-qa-p3-03",
          question:
            "Explain why enzymes are described as specific, using the lock-and-key model. [3]",
          marks: 3,
          modelAnswer:
            "Each enzyme has an active site with a particular three-dimensional shape. Only a substrate whose shape is complementary to the active site can fit into it, like a key fitting a specific lock. This forms an enzyme-substrate complex and allows the reaction to be catalysed. Because the active site shape is specific, each enzyme catalyses only one type of reaction (one substrate), so enzymes are described as specific.",
          markScheme: [
            "active site has a particular/complementary shape [1]",
            "only a substrate of matching shape fits (like a key in a lock) [1]",
            "so each enzyme acts on only one substrate / is specific [1]",
          ],
          commonError:
            "Saying any substrate can fit if forced; the shape must be complementary.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-qa-p3-04",
          question:
            "Carbon dioxide concentration affects the rate of photosynthesis.\n\n(a) Explain why increasing CO2 concentration increases the rate, up to a point. [3]\n(b) Suggest why a farmer might add carbon dioxide to a greenhouse. [2]",
          marks: 5,
          modelAnswer:
            "(a) Carbon dioxide is a raw material for photosynthesis. As its concentration increases, there is more CO2 available to be combined with water to make glucose, so the rate of photosynthesis increases. Eventually the rate levels off when another factor (e.g. light intensity or temperature) becomes limiting, so adding more CO2 then has no further effect.\n\n(b) Adding CO2 raises the rate of photosynthesis (when CO2 was limiting), so the crops make more glucose and grow faster/larger, increasing the yield and the farmer's profit.",
          markScheme: [
            "(a) CO2 is a raw material for photosynthesis [1]",
            "(a) more CO2 = faster rate of reaction [1]",
            "(a) rate plateaus when another factor becomes limiting [1]",
            "(b) increases photosynthesis / growth / yield [1]",
            "(b) economic benefit (more/faster crop) [1]",
          ],
          commonError:
            "Saying CO2 'gives the plant energy' - it is a raw material; light provides the energy.",
          difficulty: "core",
          hints: [
            "What role does CO2 play in photosynthesis?",
            "Why does the rate eventually level off?",
            "How does faster photosynthesis benefit a farmer?",
          ],
        },
        {
          id: "exam-biology-qa-p3-05",
          question:
            "Describe the function of the liver in digestion and in dealing with the products of digestion. [4]",
          marks: 4,
          modelAnswer:
            "The liver produces bile, which is stored in the gall bladder and released into the small intestine; bile emulsifies fats (increasing their surface area for lipase) and neutralises acidic chyme from the stomach. The liver also receives the products of digestion (e.g. glucose, amino acids) from the small intestine via the hepatic portal vein. It regulates blood glucose by converting excess glucose to glycogen for storage (under the action of insulin). Excess amino acids are broken down in the liver (deamination), forming urea, which is excreted by the kidneys.",
          markScheme: [
            "produces bile which emulsifies fat / neutralises acid [1]",
            "receives products of digestion from the small intestine [1]",
            "regulates blood glucose / stores glycogen [1]",
            "deaminates excess amino acids forming urea [1]",
          ],
          commonError:
            "Saying bile is an enzyme, or that the liver makes urine (the kidney does).",
          difficulty: "core",
          hints: [
            "What does the liver make for fat digestion?",
            "What does it do with excess glucose?",
            "What happens to excess amino acids?",
          ],
        },
        {
          id: "exam-biology-qa-p3-06",
          question:
            "(a) State what is transported in the xylem and in the phloem. [2]\n(b) Explain how the rate of transpiration is affected by temperature and by humidity. [3]",
          marks: 5,
          modelAnswer:
            "(a) Xylem transports water and dissolved mineral ions (from roots to leaves). Phloem transports dissolved food substances, mainly sucrose and amino acids (translocation).\n\n(b) Increasing temperature increases the rate of transpiration because the water molecules gain more kinetic energy and evaporate faster from the mesophyll cells, and the warmer air can hold more water vapour. Increasing humidity decreases transpiration because the air around the leaf already contains a lot of water vapour, reducing the concentration (water potential) gradient between the leaf and the air, so water vapour diffuses out more slowly.",
          markScheme: [
            "(a) xylem: water and mineral ions [1]",
            "(a) phloem: sucrose/amino acids (food) [1]",
            "(b) higher temperature increases evaporation/rate [1]",
            "(b) higher humidity decreases the water vapour gradient [1]",
            "(b) so transpiration is slower in humid air [1]",
          ],
          commonError:
            "Saying high humidity increases transpiration (it decreases it by reducing the gradient).",
          difficulty: "core",
          hints: [
            "Two tissues carry different things in different directions.",
            "Temperature affects evaporation.",
            "Humidity affects the concentration gradient of water vapour.",
          ],
        },
        {
          id: "exam-biology-qa-p3-07",
          question:
            "Explain the difference between the pulmonary circulation and the systemic circulation, and state the advantage of keeping oxygenated and deoxygenated blood separate. [4]",
          marks: 4,
          modelAnswer:
            "The pulmonary circulation carries deoxygenated blood from the heart (right ventricle) to the lungs and oxygenated blood back to the heart (left atrium). The systemic circulation carries oxygenated blood from the heart (left ventricle) to the rest of the body and deoxygenated blood back to the heart (right atrium). Keeping the two separate means fully oxygenated blood is delivered to the body, so more oxygen reaches the tissues; the blood can also be pumped at high pressure to the body, giving rapid, efficient delivery to support a high metabolic rate.",
          markScheme: [
            "pulmonary: heart to lungs and back [1]",
            "systemic: heart to body and back [1]",
            "separation means fully oxygenated blood delivered to body [1]",
            "blood can be pumped at high pressure / efficient O2 delivery [1]",
          ],
          commonError:
            "Reversing the two circuits or thinking the left side pumps to the lungs.",
          difficulty: "challenge",
          hints: [
            "Which circuit goes to the lungs and which to the body?",
            "Why is keeping the blood separate useful?",
            "Think about oxygen content and pressure.",
          ],
        },
        {
          id: "exam-biology-qa-p3-08",
          question:
            "Smoking tobacco causes several diseases.\n\n(a) Explain how tar in cigarette smoke can lead to lung disease. [3]\n(b) Explain how carbon monoxide affects the blood. [2]",
          marks: 5,
          modelAnswer:
            "(a) Tar settles on the lining of the airways and alveoli. It paralyses or destroys the cilia that normally sweep mucus and trapped dirt/microbes out, so mucus and pathogens accumulate, leading to infections such as bronchitis. Tar also contains carcinogens that can cause mutations leading to lung cancer, and it can damage the alveoli walls, reducing surface area and causing emphysema.\n\n(b) Carbon monoxide diffuses into the blood and binds irreversibly to haemoglobin (forming carboxyhaemoglobin), so less haemoglobin is available to carry oxygen. This reduces the oxygen-carrying capacity of the blood, putting strain on the heart.",
          markScheme: [
            "(a) tar paralyses/destroys cilia so mucus and microbes build up [1]",
            "(a) leads to infections such as bronchitis [1]",
            "(a) tar is carcinogenic / can cause lung cancer or damage alveoli [1]",
            "(b) CO binds to haemoglobin (forms carboxyhaemoglobin) [1]",
            "(b) reduces oxygen-carrying capacity of blood [1]",
          ],
          commonError:
            "Confusing the effects of tar (cilia/cancer) with those of carbon monoxide (haemoglobin/oxygen).",
          difficulty: "core",
          hints: [
            "What do cilia normally do, and what does tar do to them?",
            "Which molecule does carbon monoxide bind to?",
            "What is the consequence for oxygen transport?",
          ],
        },
        {
          id: "exam-biology-qa-p3-09",
          question:
            "Describe an experiment using germinating seeds to show that respiration releases heat. Include the controls you would use. [5]",
          marks: 5,
          modelAnswer:
            "Place living germinating peas (that have been soaked) into a vacuum flask with a thermometer through the bung, inverted so any heat collects. Set up a second identical flask with peas that have been killed by boiling and then disinfected (to control for microbial respiration); this is the control. Both flasks are kept in the same conditions. Record the temperature in each over several days. The flask with living germinating peas shows a rise in temperature because the respiring seeds release heat energy, while the killed seeds (control) show little or no temperature change. This shows respiration releases heat.",
          markScheme: [
            "living germinating seeds in an insulated/vacuum flask with thermometer [1]",
            "control of dead/boiled seeds (disinfected) set up identically [1]",
            "same conditions / both monitored over time [1]",
            "temperature rises in living seeds [1]",
            "little/no rise in dead seeds, showing respiration releases heat [1]",
          ],
          commonError:
            "Forgetting to disinfect the dead seeds, so microbes respiring could give a false positive in the control.",
          difficulty: "challenge",
          hints: [
            "You need living vs dead seeds to compare.",
            "Why must the dead seeds be disinfected?",
            "What measurement shows heat is released?",
          ],
        },
        {
          id: "exam-biology-qa-p3-10",
          question:
            "Explain what is meant by homeostasis and describe the principle of negative feedback, using temperature control as an example. [4]",
          marks: 4,
          modelAnswer:
            "Homeostasis is the maintenance of a constant internal environment within narrow limits, despite changes outside. Negative feedback is a control mechanism in which a change in a factor is detected and a response is triggered that opposes (reverses) the change, returning the factor to its set point. For example, if body temperature rises above normal, this is detected by the brain, which triggers sweating and vasodilation to lose heat; the body cools back to normal. If temperature falls, shivering and vasoconstriction generate and conserve heat, raising it back to normal.",
          markScheme: [
            "homeostasis = maintenance of a constant internal environment [1]",
            "negative feedback = response opposes/reverses the change [1]",
            "returns the factor to its set point / normal [1]",
            "valid temperature example (too hot -> cooling; too cold -> warming) [1]",
          ],
          commonError:
            "Describing the response without stating that it opposes/reverses the original change.",
          difficulty: "core",
          hints: [
            "Homeostasis = keeping the internal environment steady.",
            "Negative feedback reverses a change.",
            "Use too hot/too cold to illustrate.",
          ],
        },
        {
          id: "exam-biology-qa-p3-11",
          question:
            "Describe how the eye focuses light from a distant object onto the retina, including the role of the lens and ciliary muscles. [4]",
          marks: 4,
          modelAnswer:
            "Light is refracted (bent) first by the cornea and then by the lens to form a focused image on the retina. To focus on a distant object, the ciliary muscles relax. This allows the suspensory ligaments to become taut, which pulls the lens into a thinner, less curved shape. The thinner lens refracts the light less, which is appropriate for the nearly parallel rays from a distant object, so the image is focused sharply on the retina. (This adjustment is called accommodation.)",
          markScheme: [
            "cornea and lens refract/focus the light onto the retina [1]",
            "for distant object the ciliary muscles relax [1]",
            "suspensory ligaments become taut / lens pulled thin [1]",
            "thinner lens refracts light less, focusing on retina [1]",
          ],
          commonError:
            "Reversing the lens shape: for distant objects the lens is thin, for near objects it is fat.",
          difficulty: "challenge",
          hints: [
            "Two structures refract the light - name them.",
            "For a distant object, are the ciliary muscles contracted or relaxed?",
            "Is the lens thin or fat for distant vision?",
          ],
        },
        {
          id: "exam-biology-qa-p3-12",
          question:
            "Auxin controls the growth of plant shoots towards light (phototropism).\n\n(a) Describe how auxin causes a shoot to bend towards a light source. [3]\n(b) Explain why this response is an advantage to the plant. [2]",
          marks: 5,
          modelAnswer:
            "(a) Auxin is produced at the shoot tip. When light shines from one side, auxin moves to (accumulates on) the shaded side of the shoot. Auxin stimulates cell elongation, so the cells on the shaded side grow longer than those on the light side. This unequal growth makes the shoot bend towards the light.\n\n(b) Growing towards light means the leaves receive more light, so the plant can photosynthesise more efficiently and make more food, improving its growth and survival.",
          markScheme: [
            "(a) auxin moves to / accumulates on the shaded side [1]",
            "(a) auxin stimulates cell elongation [1]",
            "(a) shaded side grows more so shoot bends towards light [1]",
            "(b) leaves receive more light [1]",
            "(b) more photosynthesis / better growth and survival [1]",
          ],
          commonError:
            "Saying the light side grows faster (it is the shaded side, where auxin is more concentrated).",
          difficulty: "challenge",
          hints: [
            "Which side does auxin accumulate on?",
            "What does auxin do to cell length?",
            "Why is reaching light beneficial?",
          ],
        },
        {
          id: "exam-biology-qa-p3-13",
          question:
            "Compare sexual and asexual reproduction. Give one advantage of each to an organism. [4]",
          marks: 4,
          modelAnswer:
            "Sexual reproduction involves the fusion of two haploid gametes (fertilisation) from two parents, producing genetically different offspring. Asexual reproduction involves a single parent and produces genetically identical offspring (clones) without gametes. An advantage of sexual reproduction is that the genetic variation produced means some offspring may be better adapted to survive environmental change (raw material for natural selection). An advantage of asexual reproduction is that it is faster and needs only one parent, so a large population of well-adapted organisms can be produced quickly when conditions are favourable.",
          markScheme: [
            "sexual: fusion of gametes / two parents / genetically varied offspring [1]",
            "asexual: one parent / no gametes / genetically identical offspring [1]",
            "advantage of sexual: variation aids survival/adaptation [1]",
            "advantage of asexual: fast / only one parent needed / spreads good genotype [1]",
          ],
          commonError:
            "Listing differences but not giving a clear advantage of each.",
          difficulty: "core",
          hints: [
            "How many parents and what about variation in each type?",
            "Variation is the key benefit of sexual reproduction.",
            "Speed and a single parent benefit asexual reproduction.",
          ],
        },
        {
          id: "exam-biology-qa-p3-14",
          question:
            "In tomato plants, red fruit (R) is dominant to yellow fruit (r). A cross between two plants gives 152 red and 148 yellow fruited offspring.\n\n(a) State the most likely genotypes of the two parents. [2]\n(b) Explain how the offspring ratio supports your answer. [3]",
          marks: 5,
          modelAnswer:
            "(a) The offspring are roughly 1 red : 1 yellow. This is the result of a cross Rr x rr (a test cross). So one parent is heterozygous red (Rr) and the other is yellow (rr).\n\n(b) An Rr x rr cross gives gametes R or r from the heterozygous parent and r only from the yellow parent, producing offspring Rr (red) and rr (yellow) in a 1 : 1 ratio. The observed numbers (152 : 148) are approximately 1 : 1, which matches the expected ratio (small differences are due to the random nature of fertilisation), supporting the genotypes Rr and rr.",
          markScheme: [
            "(a) one parent Rr (heterozygous red) [1]",
            "(a) other parent rr (yellow) [1]",
            "(b) Rr x rr gives offspring Rr and rr [1]",
            "(b) expected ratio 1 red : 1 yellow [1]",
            "(b) observed ~152:148 is approximately 1:1, supporting this [1]",
          ],
          commonError:
            "Choosing Rr x Rr (which would give a 3 : 1 ratio, not the observed 1 : 1).",
          difficulty: "challenge",
          hints: [
            "What ratio do the numbers approximate to?",
            "A 1 : 1 ratio points to a test cross.",
            "Work back to the parent genotypes.",
          ],
          solutions: [
            {
              label: "Deducing parents from the ratio",
              steps: [
                "152 : 148 is approximately 1 : 1",
                "A 1 : 1 phenotype ratio comes from Rr x rr",
                "Gametes: R or r (from Rr); r only (from rr)",
                "Offspring: Rr (red) and rr (yellow) in a 1 : 1 ratio - matches the data",
              ],
            },
          ],
        },
        {
          id: "exam-biology-qa-p3-15",
          question:
            "Explain the difference between continuous and discontinuous variation, giving one example of each in humans, and state how each type is determined. [4]",
          marks: 4,
          modelAnswer:
            "Continuous variation shows a range of values with no distinct categories, for example human height or mass. It is controlled by several genes (polygenic) and is also influenced by the environment. Discontinuous variation shows distinct categories with no intermediates, for example ABO blood group or the ability to roll the tongue. It is usually controlled by one or a few genes and is little affected by the environment.",
          markScheme: [
            "continuous = range of values, no distinct categories [1]",
            "continuous example (height/mass) controlled by many genes and environment [1]",
            "discontinuous = distinct categories, no intermediates [1]",
            "discontinuous example (blood group) controlled by genes, little environmental effect [1]",
          ],
          commonError:
            "Giving blood group as continuous, or height as discontinuous.",
          difficulty: "core",
          hints: [
            "Continuous = a smooth range; discontinuous = distinct groups.",
            "Pick a human example of each.",
            "Which type is influenced by the environment?",
          ],
        },
        {
          id: "exam-biology-qa-p3-16",
          question:
            "A food web in a garden is shown by the relationships: lettuce is eaten by slugs and aphids; slugs are eaten by thrushes; aphids are eaten by ladybirds; ladybirds are eaten by thrushes.\n\n(a) Name a producer and a tertiary consumer in this web. [2]\n(b) Predict and explain what would happen to the lettuce and ladybird populations if all the thrushes were removed. [3]",
          marks: 5,
          modelAnswer:
            "(a) Producer = lettuce. Tertiary consumer = thrush (when it eats ladybirds, which eat aphids, which eat lettuce). \n\n(b) With the thrushes removed, the slug population would increase because they are no longer eaten by thrushes, so more lettuce would be eaten and the lettuce population would fall. The ladybird population would increase at first because thrushes no longer eat them; this could reduce the aphid population. The effects ripple through the web because removing one organism changes the populations it feeds on and is fed on by.",
          markScheme: [
            "(a) producer = lettuce [1]",
            "(a) tertiary consumer = thrush [1]",
            "(b) slug numbers rise (no predator) so lettuce falls [1]",
            "(b) ladybird numbers rise (no predator) [1]",
            "(b) knock-on effect through the web explained [1]",
          ],
          commonError:
            "Predicting only one population change without explaining the knock-on (cause-and-effect) reasoning.",
          difficulty: "challenge",
          hints: [
            "Trace the chain back from the thrush.",
            "Removing a predator increases its prey.",
            "Follow the effects to the lettuce and ladybirds.",
          ],
        },
        {
          id: "exam-biology-qa-p3-17",
          question:
            "Explain how increased levels of carbon dioxide and methane in the atmosphere contribute to climate change, and give one consequence. [4]",
          marks: 4,
          modelAnswer:
            "Carbon dioxide and methane are greenhouse gases. They absorb the long-wave (infra-red) radiation given off by the Earth's warmed surface and re-radiate some of it back, trapping heat in the atmosphere (the enhanced greenhouse effect). Burning fossil fuels and deforestation raise CO2 levels; livestock and decomposition raise methane levels. This causes global warming - a rise in average global temperatures. A consequence is the melting of ice caps and glaciers, raising sea levels and causing flooding (accept: more extreme weather, changes in species distribution).",
          markScheme: [
            "CO2 and methane are greenhouse gases [1]",
            "they absorb/trap long-wave (infra-red) radiation / re-radiate heat [1]",
            "leading to global warming / rise in average temperature [1]",
            "valid consequence (ice melting, sea level rise, extreme weather) [1]",
          ],
          commonError:
            "Saying greenhouse gases 'destroy the ozone layer' (that is a different problem) instead of trapping heat.",
          difficulty: "core",
          hints: [
            "Which gases are greenhouse gases?",
            "What kind of radiation do they trap?",
            "Name a real-world consequence of warming.",
          ],
        },
        {
          id: "exam-biology-qa-p3-18",
          question:
            "Antibiotic resistance in bacteria is a growing problem.\n\n(a) Explain why doctors are advised to prescribe antibiotics only when necessary and why patients should complete the full course. [4]\n(b) State why antibiotics are not used to treat viral infections. [1]",
          marks: 5,
          modelAnswer:
            "(a) The more often antibiotics are used, the greater the selection pressure favouring resistant bacteria, so resistance spreads faster; limiting use reduces this. If a patient does not complete the course, the antibiotic may kill only the less resistant bacteria, leaving the more resistant ones alive; these survive and reproduce, so a resistant population builds up and the infection may return harder to treat. Completing the course kills all the bacteria, including the more resistant ones, before they can multiply.\n\n(b) Viruses are not cells and reproduce inside host cells; antibiotics target bacterial structures/processes (e.g. cell walls) that viruses do not have, so antibiotics have no effect on viruses.",
          markScheme: [
            "(a) overuse increases selection pressure for resistance [1]",
            "(a) limiting use slows the spread of resistance [1]",
            "(a) not completing the course leaves the more resistant bacteria alive [1]",
            "(a) survivors reproduce / infection returns resistant [1]",
            "(b) viruses lack the bacterial structures antibiotics target [1]",
          ],
          commonError:
            "Saying you stop the course 'once you feel better' is fine - the more resistant bacteria may still be present.",
          difficulty: "challenge",
          hints: [
            "More antibiotic use = stronger selection for resistance.",
            "Which bacteria survive an incomplete course?",
            "Why do antibiotics not affect viruses?",
          ],
        },
        {
          id: "exam-biology-qa-p3-19",
          question:
            "Describe the process of decomposition and explain why it is important for the continued growth of plants. [4]",
          marks: 4,
          modelAnswer:
            "Decomposition is the breakdown of dead organisms and waste by decomposers (bacteria and fungi). The decomposers secrete enzymes that digest the dead material, then absorb the soluble products. As they do so, they respire (releasing carbon dioxide) and release mineral ions (e.g. nitrates) back into the soil. This recycling of nutrients is important because plants absorb these mineral ions through their roots to make proteins and other molecules needed for growth. Without decomposition, nutrients would stay locked in dead organisms and plant growth would eventually be limited.",
          markScheme: [
            "decomposers (bacteria/fungi) break down dead material [1]",
            "secrete enzymes / digest and absorb / respire [1]",
            "release mineral ions (e.g. nitrate) into the soil [1]",
            "plants absorb these ions for growth / nutrient recycling [1]",
          ],
          commonError:
            "Describing decomposition but not linking it to plants reusing the released mineral ions.",
          difficulty: "core",
          hints: [
            "What organisms carry out decomposition?",
            "What do they return to the soil?",
            "Why do plants need those substances?",
          ],
        },
        {
          id: "exam-biology-qa-p3-20",
          question:
            "(a) State what is meant by a clone. [1]\n(b) Describe how a named technique can be used to produce many genetically identical plants, and give one advantage of doing so. [4]",
          marks: 5,
          modelAnswer:
            "(a) A clone is a group of genetically identical organisms produced from a single parent (or cell) by asexual means.\n\n(b) Micropropagation (tissue culture): small pieces of tissue (explants) are cut from a parent plant with desirable features. They are placed on a sterile nutrient agar/medium containing plant hormones, which stimulate the cells to divide and grow into many small identical plantlets. These are then grown on into whole plants. Because all are produced by mitosis from one parent, they are genetically identical (clones). An advantage is that many plants with the same desirable characteristics (e.g. high yield or disease resistance) can be produced quickly and in a small space, and even from a single valuable parent.",
          markScheme: [
            "(a) genetically identical organisms from one parent [1]",
            "(b) named technique (micropropagation / tissue culture / taking cuttings) [1]",
            "(b) explant/cutting grown on sterile medium / with hormones [1]",
            "(b) cells divide by mitosis to give identical plantlets [1]",
            "(b) advantage: many identical desirable plants produced quickly [1]",
          ],
          commonError:
            "Describing the method without stating that the offspring are genetically identical (the key point of a clone).",
          difficulty: "core",
          hints: [
            "A clone is genetically identical to its parent.",
            "Name a real propagation technique.",
            "Why is mitosis key to identical offspring?",
          ],
        },
      ],
    },
    {
      id: "exam-biology-qa-4",
      title: "Mock Exam — Structured Paper 4",
      description:
        "20 structured questions spanning the full syllabus. Write clearly and show all working in calculations. Suggested time: 90 minutes.",
      questions: [
        {
          id: "exam-biology-qa-p4-01",
          question:
            "Compare the structure of a typical plant cell and a typical animal cell, giving two structures present in both and two structures present only in the plant cell. [4]",
          marks: 4,
          modelAnswer:
            "Both plant and animal cells have: a cell-surface membrane, cytoplasm, a nucleus, mitochondria and ribosomes (any two). Only the plant cell has: a cellulose cell wall, a large permanent (sap) vacuole, and chloroplasts (in green parts) (any two). The cell wall gives support and shape, the vacuole helps keep the cell turgid, and chloroplasts allow photosynthesis.",
          markScheme: [
            "two structures present in both (e.g. membrane, cytoplasm, nucleus, mitochondria) [2]",
            "first plant-only structure (cell wall / vacuole / chloroplast) [1]",
            "second plant-only structure [1]",
          ],
          commonError:
            "Listing the cell membrane as plant-only (both have it); confusing cell wall with cell membrane.",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-qa-p4-02",
          question:
            "Explain why active transport, but not diffusion, requires energy from respiration, and name one place in the body where active transport occurs. [4]",
          marks: 4,
          modelAnswer:
            "Diffusion moves particles down their concentration gradient (from high to low concentration), which happens by the random movement of particles and so needs no energy from the cell. Active transport moves particles against their concentration gradient (from low to high concentration), which cannot happen by random movement alone, so energy released by respiration (as ATP) is needed to power the carrier/transport proteins. One example: the absorption of glucose from the small intestine (or mineral ion uptake by root hair cells, or glucose reabsorption in the kidney).",
          markScheme: [
            "diffusion is down the gradient and needs no energy [1]",
            "active transport is against the gradient [1]",
            "so requires energy from respiration (ATP) / carrier proteins [1]",
            "valid example of active transport in the body [1]",
          ],
          commonError:
            "Saying diffusion needs energy, or giving an example that is actually diffusion/osmosis.",
          difficulty: "core",
          hints: [
            "Compare the direction of movement relative to the gradient.",
            "Which one needs energy and why?",
            "Where in the body must substances be moved against a gradient?",
          ],
        },
        {
          id: "exam-biology-qa-p4-03",
          question:
            "An investigation measures the volume of product made by an enzyme at substrate concentrations of 0, 2, 4, 6 and 8 units. The rate rises steeply then levels off at high substrate concentration.\n\n(a) Explain why the rate increases at low substrate concentrations. [2]\n(b) Explain why the rate levels off at high substrate concentrations. [2]",
          marks: 4,
          modelAnswer:
            "(a) At low substrate concentrations there are many free active sites but few substrate molecules. As substrate concentration increases, more substrate molecules are available, so more collisions with active sites occur and more enzyme-substrate complexes form per second, increasing the rate.\n\n(b) At high substrate concentrations, all (or nearly all) the active sites are occupied at any moment; the enzyme is working at its maximum rate. Adding more substrate cannot increase the rate because the enzyme concentration (number of active sites) is now the limiting factor, so the curve levels off.",
          markScheme: [
            "(a) more substrate = more enzyme-substrate complexes form [1]",
            "(a) more frequent collisions / more active sites used [1]",
            "(b) all active sites occupied / enzyme saturated [1]",
            "(b) enzyme concentration now limiting / max rate reached [1]",
          ],
          commonError:
            "Saying the enzyme is 'used up' or denatured at high substrate concentration - it is saturated, not destroyed.",
          difficulty: "core",
          hints: [
            "At low substrate, what is in short supply?",
            "At high substrate, what limits the rate?",
            "Think about active sites being occupied.",
          ],
        },
        {
          id: "exam-biology-qa-p4-04",
          question:
            "Describe how to carry out the Benedict's test for reducing sugar, and explain what the result tells you. [4]",
          marks: 4,
          modelAnswer:
            "Add an equal volume of blue Benedict's solution to the food sample (in solution) in a test tube. Heat the mixture in a water bath at about 80-90 degrees C for a few minutes. If a reducing sugar is present, the solution changes from blue to green, then yellow, orange and finally a brick-red precipitate, depending on the amount of sugar. If it stays blue, no reducing sugar is present. So the colour shows both the presence and the approximate amount of reducing sugar (the more reducing sugar, the closer to brick-red).",
          markScheme: [
            "add Benedict's solution to the sample [1]",
            "heat in a water bath [1]",
            "positive result: blue to green/yellow/orange/brick-red [1]",
            "stays blue if none / colour indicates amount of sugar [1]",
          ],
          commonError:
            "Forgetting to heat the mixture (no colour change occurs without heating).",
          difficulty: "warmup",
        },
        {
          id: "exam-biology-qa-p4-05",
          question:
            "Explain how the products of photosynthesis (glucose) are used and stored by a plant. Give three uses. [4]",
          marks: 4,
          modelAnswer:
            "Glucose made in photosynthesis is used by the plant in several ways: (1) it is used in respiration to release energy for the plant's processes; (2) it is converted to starch for storage (an insoluble store that does not affect water potential); (3) it is converted to cellulose to build cell walls; (4) it is used with nitrate ions to make amino acids and then proteins; (5) it is converted to lipids/oils for storage (e.g. in seeds), or to sucrose for transport. (Any three uses, plus storage as starch.)",
          markScheme: [
            "used in respiration to release energy [1]",
            "stored as starch (insoluble) [1]",
            "converted to cellulose for cell walls [1]",
            "used to make amino acids/proteins (with nitrate) or lipids/sucrose [1]",
          ],
          commonError:
            "Saying glucose is stored directly (it is converted to starch for storage, as glucose would affect water potential).",
          difficulty: "core",
          hints: [
            "Glucose is the immediate product - what can the plant turn it into?",
            "Why is starch, not glucose, used for storage?",
            "What is needed to make proteins from glucose?",
          ],
        },
        {
          id: "exam-biology-qa-p4-06",
          question:
            "(a) Name the substrate, enzyme and products for the chemical digestion of protein in the stomach. [3]\n(b) Explain why the stomach contents are acidic. [2]",
          marks: 5,
          modelAnswer:
            "(a) The substrate is protein; the enzyme is a protease (pepsin); the products are smaller peptides/amino acids.\n\n(b) Cells in the stomach lining secrete hydrochloric acid. This makes the contents acidic (about pH 2), which provides the optimum pH for pepsin to work, and it also kills many of the bacteria/pathogens that are taken in with food.",
          markScheme: [
            "(a) substrate = protein [1]",
            "(a) enzyme = protease/pepsin [1]",
            "(a) products = peptides/amino acids [1]",
            "(b) hydrochloric acid gives the optimum pH for pepsin [1]",
            "(b) acid also kills pathogens/bacteria [1]",
          ],
          commonError:
            "Saying amylase or lipase acts in the stomach, or that the stomach is alkaline.",
          difficulty: "core",
          hints: [
            "Which class of enzyme digests protein?",
            "What pH does pepsin prefer?",
            "Acid has a protective role too.",
          ],
        },
        {
          id: "exam-biology-qa-p4-07",
          question:
            "Describe how water and mineral ions reach the leaves of a tall tree from the soil, explaining the role of transpiration. [5]",
          marks: 5,
          modelAnswer:
            "Water is absorbed from the soil into root hair cells by osmosis, and mineral ions by active transport. The water passes into the xylem vessels in the root. Water evaporates from the surfaces of the mesophyll cells in the leaves and diffuses out through the stomata as water vapour (transpiration). This loss of water lowers the water potential in the leaf, drawing more water up the xylem. Because water molecules are cohesive (they stick together), the whole column of water is pulled up the xylem from the roots to the leaves - this is the transpiration pull/stream, which also carries the dissolved mineral ions up to the leaves.",
          markScheme: [
            "water enters root hair cells by osmosis (ions by active transport) [1]",
            "water moves into and up the xylem [1]",
            "evaporation from leaf mesophyll / diffusion out of stomata (transpiration) [1]",
            "transpiration lowers water potential / creates a pull [1]",
            "cohesion of water molecules / continuous column pulled up [1]",
          ],
          commonError:
            "Saying water is pushed up by the roots only; the main driving force is the transpiration pull from the top.",
          difficulty: "challenge",
          hints: [
            "How does water enter the root, and ions?",
            "What happens to water at the leaf surface?",
            "Why does that pull more water up the xylem?",
          ],
          strategy: "uptake -> xylem -> transpiration pull -> cohesion of water column",
        },
        {
          id: "exam-biology-qa-p4-08",
          question:
            "Tissue fluid forms from blood at the capillaries.\n\n(a) Explain how tissue fluid is formed at the arterial end of a capillary. [3]\n(b) State the function of tissue fluid. [2]",
          marks: 5,
          modelAnswer:
            "(a) At the arterial end of a capillary, the blood is under relatively high hydrostatic (blood) pressure. This pressure forces plasma (containing water, glucose, oxygen, ions) out through the thin, permeable capillary wall into the spaces around the cells. Large molecules such as plasma proteins and the blood cells are too big to pass through and remain in the capillary. The fluid that leaves is called tissue fluid.\n\n(b) Tissue fluid bathes the body cells and is the medium through which substances are exchanged: it supplies the cells with oxygen, glucose and other nutrients, and carries away waste products such as carbon dioxide.",
          markScheme: [
            "(a) high blood/hydrostatic pressure at the arterial end [1]",
            "(a) forces plasma/fluid out through the capillary wall [1]",
            "(a) large proteins and cells stay in the capillary [1]",
            "(b) supplies cells with oxygen/nutrients [1]",
            "(b) removes waste (CO2) from cells [1]",
          ],
          commonError:
            "Saying blood cells leave the capillary to form tissue fluid (they are too large to pass through).",
          difficulty: "challenge",
          hints: [
            "What pushes fluid out of the capillary?",
            "Which components stay behind?",
            "What is tissue fluid for?",
          ],
        },
        {
          id: "exam-biology-qa-p4-09",
          question:
            "Explain the difference between active immunity and passive immunity, giving one example of each and stating which lasts longer. [5]",
          marks: 5,
          modelAnswer:
            "Active immunity is when the body makes its own antibodies in response to an antigen, either after catching an infection or after vaccination; memory cells are produced, so it is long-lasting. An example is immunity gained after having measles or after a measles vaccine. Passive immunity is when ready-made antibodies are given to the body from another source rather than being made by the body itself; no memory cells are produced, so it is short-lasting. An example is the antibodies passed from a mother to a baby across the placenta or in breast milk. Active immunity lasts much longer than passive immunity.",
          markScheme: [
            "active immunity: body makes its own antibodies [1]",
            "active example (after infection or vaccination) / memory cells formed [1]",
            "passive immunity: ready-made antibodies received from elsewhere [1]",
            "passive example (placenta/breast milk) / no memory cells [1]",
            "active immunity lasts longer than passive [1]",
          ],
          commonError:
            "Stating both produce memory cells - only active immunity does, which is why it lasts longer.",
          difficulty: "challenge",
          hints: [
            "Who makes the antibodies in each type?",
            "Which type forms memory cells?",
            "Match an example to each.",
          ],
        },
        {
          id: "exam-biology-qa-p4-10",
          question:
            "Describe what happens during expiration (breathing out), explaining the changes in the diaphragm, ribs and pressure. [4]",
          marks: 4,
          modelAnswer:
            "During expiration the diaphragm muscles relax, so the diaphragm moves up and becomes dome-shaped again. The external intercostal muscles relax, so the ribs move down and inwards. These changes decrease the volume of the thorax (chest cavity). As the volume decreases, the pressure inside the lungs increases above atmospheric pressure. Air therefore moves out of the lungs, from the high pressure inside to the lower pressure outside, until pressures are equal.",
          markScheme: [
            "diaphragm relaxes and moves up / domes [1]",
            "ribs move down and in / intercostals relax [1]",
            "thorax volume decreases [1]",
            "pressure increases so air moves out [1]",
          ],
          commonError:
            "Describing inspiration instead of expiration (reversing the muscle and pressure changes).",
          difficulty: "core",
          hints: [
            "What happens to the diaphragm when it relaxes?",
            "Smaller volume gives what pressure change?",
            "Air moves from high to low pressure.",
          ],
        },
        {
          id: "exam-biology-qa-p4-11",
          question:
            "Explain the role of the kidneys in excretion and osmoregulation, including what is removed and what is reabsorbed. [5]",
          marks: 5,
          modelAnswer:
            "Blood is filtered in the kidney (in the glomerulus) under high pressure, so that water, glucose, urea and salts pass into the kidney tubule, while blood cells and large proteins are too big and stay in the blood. As the filtrate passes along the tubule, all of the glucose and some of the water and salts are reabsorbed back into the blood (glucose by active transport). The amount of water reabsorbed is adjusted to control the water content of the blood (osmoregulation), under the control of ADH. The remaining liquid, containing urea (the main excretory product), excess water and salts, forms urine, which is removed from the body. So the kidney excretes urea and regulates water and salt balance.",
          markScheme: [
            "blood filtered in glomerulus / under pressure [1]",
            "small molecules (water, glucose, urea, salts) filtered; cells and proteins stay [1]",
            "all glucose reabsorbed (by active transport) [1]",
            "water reabsorption adjusted to control water content (osmoregulation) [1]",
            "urea/excess water/salts form urine and are excreted [1]",
          ],
          commonError:
            "Saying glucose is excreted in normal urine - it is fully reabsorbed in a healthy person.",
          difficulty: "challenge",
          hints: [
            "What is filtered out, and what is too big to be filtered?",
            "Which useful substance is fully reabsorbed?",
            "How is water content controlled?",
          ],
        },
        {
          id: "exam-biology-qa-p4-12",
          question:
            "Adrenaline is released in a frightening situation.\n\n(a) Name the gland that secretes adrenaline. [1]\n(b) Describe three effects of adrenaline on the body and explain how each prepares the body for action. [4]",
          marks: 5,
          modelAnswer:
            "(a) The adrenal glands (on top of the kidneys).\n\n(b) Adrenaline increases the heart rate, so blood (carrying oxygen and glucose) is delivered faster to the muscles for respiration. It increases the breathing rate and depth, so more oxygen is taken in and more carbon dioxide removed. It causes the liver to release glucose (from glycogen), raising blood glucose to provide more substrate for respiration in the muscles. It can also dilate the pupils and divert blood to the muscles. These changes prepare the body for 'fight or flight'.",
          markScheme: [
            "(a) adrenal gland(s) [1]",
            "(b) increases heart rate -> faster delivery of O2/glucose to muscles [1]",
            "(b) increases breathing rate -> more oxygen taken in [1]",
            "(b) raises blood glucose (from liver glycogen) -> more respiration substrate [1]",
            "(b) explanation links the effect to readiness for action [1]",
          ],
          commonError:
            "Listing effects without explaining how each helps the body respond to danger.",
          difficulty: "core",
          hints: [
            "Where is adrenaline made?",
            "Think heart, breathing and blood glucose.",
            "For each, say how it helps you fight or run.",
          ],
        },
        {
          id: "exam-biology-qa-p4-13",
          question:
            "Describe the changes that occur in the uterus lining during the menstrual cycle and how they prepare for pregnancy or lead to menstruation. [4]",
          marks: 4,
          modelAnswer:
            "After menstruation, the uterus lining repairs and thickens, building up a layer rich in blood vessels (stimulated by oestrogen). After ovulation, progesterone (from the corpus luteum) maintains this thick lining, ready to receive and nourish an embryo if fertilisation occurs. If the egg is fertilised and implants, the lining is maintained and pregnancy continues. If no fertilisation occurs, the corpus luteum breaks down and progesterone levels fall; the thick lining can no longer be maintained, so it breaks down and is shed, along with blood, as menstruation.",
          markScheme: [
            "lining repairs and thickens (oestrogen) after menstruation [1]",
            "progesterone maintains the thick lining after ovulation [1]",
            "if fertilisation occurs, lining maintained for pregnancy [1]",
            "if not, progesterone falls and the lining breaks down (menstruation) [1]",
          ],
          commonError:
            "Saying the lining thickens at the moment of menstruation, rather than breaking down then.",
          difficulty: "core",
          hints: [
            "Which hormone thickens, which maintains the lining?",
            "What happens if the egg is fertilised?",
            "What triggers the lining to break down?",
          ],
        },
        {
          id: "exam-biology-qa-p4-14",
          question:
            "Mitosis and meiosis are two types of nuclear division.\n\n(a) State one role of mitosis and one role of meiosis. [2]\n(b) Explain two ways meiosis differs from mitosis. [3]",
          marks: 5,
          modelAnswer:
            "(a) Mitosis is used for growth, repair of tissues, and asexual reproduction (producing identical cells). Meiosis is used to produce gametes (sex cells) for sexual reproduction.\n\n(b) In meiosis the chromosome number is halved (diploid to haploid), whereas in mitosis it stays the same (diploid to diploid). Meiosis produces four genetically different (non-identical) daughter cells, whereas mitosis produces two genetically identical daughter cells. Meiosis involves two divisions; mitosis involves one. (Any two clear differences.)",
          markScheme: [
            "(a) mitosis: growth/repair/asexual reproduction [1]",
            "(a) meiosis: produces gametes for sexual reproduction [1]",
            "(b) meiosis halves chromosome number / mitosis keeps it the same [1]",
            "(b) meiosis gives genetically varied cells / mitosis gives identical cells [1]",
            "(b) meiosis four cells/two divisions vs mitosis two cells/one division [1]",
          ],
          commonError:
            "Saying mitosis produces gametes (it does not - meiosis does).",
          difficulty: "core",
          hints: [
            "What is each division used for?",
            "What happens to the chromosome number in meiosis?",
            "Are the daughter cells identical or varied?",
          ],
        },
        {
          id: "exam-biology-qa-p4-15",
          question:
            "In humans, sex is determined by the X and Y chromosomes.\n\n(a) State the sex chromosomes of a normal human male and female. [1]\n(b) Use a genetic diagram to explain why approximately equal numbers of male and female offspring are produced. [4]",
          marks: 5,
          modelAnswer:
            "(a) Male = XY; female = XX.\n\n(b) The mother (XX) produces eggs that all carry an X chromosome. The father (XY) produces sperm of two types in equal numbers: half carry X and half carry Y.\nPunnett square:\n        X        X\nX |  XX  |  XX\nY |  XY  |  XY\nFertilisation is random, so an egg (X) is equally likely to be fertilised by an X-sperm (giving XX, female) or a Y-sperm (giving XY, male). This gives a 1 : 1 ratio of females to males, so approximately equal numbers of each sex are produced.",
          markScheme: [
            "(a) male XY and female XX [1]",
            "(b) mother's gametes all X; father's gametes half X, half Y [1]",
            "(b) correct Punnett square (XX, XX, XY, XY) [1]",
            "(b) random fertilisation [1]",
            "(b) 1 : 1 ratio / equal chance of male and female [1]",
          ],
          commonError:
            "Saying the mother determines the sex - it is the father's sperm (X or Y) that does.",
          difficulty: "core",
          hints: [
            "Which parent produces two types of gamete?",
            "Draw the Punnett square with the mother's two X gametes.",
            "Count the male and female outcomes.",
          ],
          solutions: [
            {
              label: "Sex determination cross",
              steps: [
                "Mother XX -> all eggs carry X",
                "Father XY -> half of sperm carry X, half carry Y",
                "Offspring: XX, XX, XY, XY",
                "Ratio = 2 XX : 2 XY = 1 female : 1 male",
              ],
            },
          ],
        },
        {
          id: "exam-biology-qa-p4-16",
          question:
            "A scientist counts a bacterial population. It starts at 500 cells and doubles every 30 minutes under ideal conditions.\n\n(a) Calculate the number of bacteria after 2 hours. Show your working. [3]\n(b) Suggest why this exponential growth does not continue indefinitely in a closed flask. [2]",
          marks: 5,
          modelAnswer:
            "(a) In 2 hours there are 2 x 60 / 30 = 4 doubling periods. Number = 500 x 2^4 = 500 x 16 = 8000 bacteria.\n\n(b) In a closed flask the nutrients (food) become used up and toxic waste products build up; there is also limited space. These factors slow and then stop reproduction (and increase death), so the population cannot keep doubling and levels off (or declines).",
          markScheme: [
            "(a) number of doublings = 4 [1]",
            "(a) 500 x 2^4 = 500 x 16 [1]",
            "(a) = 8000 bacteria [1]",
            "(b) nutrients run out / toxic waste builds up / limited space [1]",
            "(b) reproduction slows or stops / population levels off [1]",
          ],
          commonError:
            "Multiplying 500 by 4 (the number of periods) instead of by 2^4, or using the wrong number of doublings.",
          difficulty: "challenge",
          hints: [
            "How many 30-minute periods are in 2 hours?",
            "Each period multiplies the number by 2.",
            "Number = start x 2^(number of doublings).",
          ],
          solutions: [
            {
              label: "Exponential bacterial growth",
              steps: [
                "2 hours = 120 minutes; doublings = 120 / 30 = 4",
                "final number = initial x 2^(doublings) = 500 x 2^4",
                "2^4 = 16, so 500 x 16 = 8000 bacteria",
              ],
            },
          ],
        },
        {
          id: "exam-biology-qa-p4-17",
          question:
            "Explain how selective breeding could be used to produce a variety of wheat with a higher grain yield. [4]",
          marks: 4,
          modelAnswer:
            "From the existing wheat plants, the farmer/breeder selects the plants that have the highest grain yield (showing variation) and breeds (crosses) them together. From the offspring, again only those with the highest yield are selected and bred together. This selection and breeding is repeated over many generations. Each generation the alleles for high yield become more common in the population, so the average grain yield of the variety gradually increases until a high-yielding variety is produced.",
          markScheme: [
            "select the highest-yielding plants (variation exists) [1]",
            "breed/cross these selected plants together [1]",
            "select the best offspring and breed again [1]",
            "repeat over many generations / yield increases each generation [1]",
          ],
          commonError:
            "Describing genetic engineering (inserting genes) instead of selective breeding (choosing and crossing parents).",
          difficulty: "core",
          hints: [
            "Selective breeding chooses parents - it does not insert genes.",
            "Which plants do you choose to breed?",
            "Why must this be repeated over generations?",
          ],
        },
        {
          id: "exam-biology-qa-p4-18",
          question:
            "Charles Darwin proposed the theory of evolution by natural selection. Outline the main ideas of natural selection that could explain how a population of dark-coloured moths became common in a polluted, sooty area. [5]",
          marks: 5,
          modelAnswer:
            "Within the moth population there is variation in colour, caused by mutation - some moths are light and some are dark. In a polluted, sooty area, tree bark is dark, so dark moths are better camouflaged and light moths stand out. Birds (the selection pressure) see and eat more of the light moths, so dark moths are more likely to survive. The surviving dark moths reproduce and pass on the allele for dark colour to their offspring. Over many generations, the proportion of dark moths increases and they become the most common form in the population.",
          markScheme: [
            "variation in colour exists (caused by mutation) [1]",
            "dark moths better camouflaged on sooty bark [1]",
            "predators (birds) eat more of the poorly camouflaged light moths (selection pressure) [1]",
            "dark moths survive and reproduce [1]",
            "advantageous allele passed on / dark form becomes common over generations [1]",
          ],
          commonError:
            "Saying the moths 'turned dark' to match the trees - the variation already existed and was selected for; individuals do not change colour to suit the environment.",
          difficulty: "challenge",
          hints: [
            "Variation comes first - where from?",
            "Which moths survive better in soot, and why?",
            "How does the allele frequency change over generations?",
          ],
          strategy: "variation -> selection pressure (predation) -> differential survival -> inheritance",
        },
        {
          id: "exam-biology-qa-p4-19",
          question:
            "Overuse of nitrogen fertilisers can cause eutrophication of a lake. Describe the sequence of events that leads to the death of fish. [5]",
          marks: 5,
          modelAnswer:
            "Fertiliser containing nitrate (and phosphate) is washed off the land into the lake (leaching/run-off). The extra nutrients cause rapid growth of algae and water plants - an algal bloom. The algae at the surface block light from reaching plants lower down, so these plants die. Decomposer bacteria feed on the dead plants and algae and multiply rapidly. These bacteria respire aerobically, using up the dissolved oxygen in the water. With little dissolved oxygen left, fish and other aerobic aquatic organisms cannot respire and so they die (suffocate).",
          markScheme: [
            "nitrate/fertiliser leaches/runs off into the lake [1]",
            "causes rapid algal growth / algal bloom [1]",
            "algae block light so plants die [1]",
            "decomposer bacteria multiply and respire, using up dissolved oxygen [1]",
            "fish die from lack of oxygen [1]",
          ],
          commonError:
            "Saying the fertiliser poisons the fish directly, rather than the oxygen-depletion sequence via algae and bacteria.",
          difficulty: "challenge",
          hints: [
            "What does the extra nitrate make grow first?",
            "What happens to light and then to the plants?",
            "Why does decomposition remove the oxygen the fish need?",
          ],
          strategy: "run-off -> algal bloom -> plants die -> bacteria respire -> oxygen depleted -> fish die",
        },
        {
          id: "exam-biology-qa-p4-20",
          question:
            "Conservation programmes aim to maintain biodiversity.\n\n(a) Explain two reasons why maintaining biodiversity is important. [2]\n(b) Describe two methods that can be used to conserve an endangered species. [3]",
          marks: 5,
          modelAnswer:
            "(a) Maintaining biodiversity is important because: a wide variety of species keeps ecosystems stable and able to recover from change; many species are sources of food, medicines and useful materials; and a large gene pool provides genetic variety that may be needed for future selective breeding or to cope with environmental change. (Any two reasons.)\n\n(b) Methods include: protecting habitats by creating nature reserves or national parks where the species and its food/shelter are conserved; captive breeding programmes in zoos to increase numbers, then releasing individuals back into the wild; seed banks or gene banks to store genetic material; and laws/quotas to control hunting or fishing. (Any two methods described.)",
          markScheme: [
            "(a) first valid reason (stability / resources / gene pool) [1]",
            "(a) second valid reason [1]",
            "(b) first conservation method described (e.g. protected habitats/reserves) [1]",
            "(b) second conservation method described (e.g. captive breeding/seed banks/laws) [1]",
            "(b) clear description rather than just naming [1]",
          ],
          commonError:
            "Just naming methods (e.g. 'zoos') without describing how they help conserve the species.",
          difficulty: "core",
          hints: [
            "Think about ecosystem stability and human uses.",
            "A larger gene pool is valuable - why?",
            "Describe how each conservation method actually protects the species.",
          ],
        },
      ],
    },
  ],
};
