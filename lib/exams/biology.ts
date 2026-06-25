import type { ComprehensiveExam } from "../types";

export const biologyExam: ComprehensiveExam = {
  id: "exam-biology",
  subject: "biology",
  title: "Biology — Full Mock Exam",

  mcqPapers: [
    {
      id: "exam-biology-mcq-1",
      title: "Paper 1 — Multiple Choice",
      description: "20 questions spanning the Cambridge IGCSE Biology 0610 Extended syllabus. Allow 45 minutes.",
      questions: [
        // ── CELLS ──────────────────────────────────────────────────────────────
        {
          id: "exam-biology-mcq-01",
          question: "Which structure is found in a plant cell but NOT in an animal cell?",
          options: [
            "A  Mitochondrion",
            "B  Cell-surface membrane",
            "C  Large permanent vacuole",
            "D  Ribosome",
          ],
          answerIndex: 2,
          explanation:
            "Large permanent vacuoles filled with cell sap are a defining feature of mature plant cells. Mitochondria, cell-surface membranes, and ribosomes are present in both plant and animal cells.",
          difficulty: "warmup",
          guideRef: "Cell Structure",
        },
        {
          id: "exam-biology-mcq-02",
          question:
            "A student places red blood cells into a solution and observes that they shrink and become crenated. What type of solution did the student use?",
          options: [
            "A  Distilled water",
            "B  A hypotonic solution",
            "C  An isotonic solution",
            "D  A hypertonic solution",
          ],
          answerIndex: 3,
          explanation:
            "In a hypertonic solution the external solute concentration is higher than inside the cell, so water leaves the cells by osmosis, causing them to shrink (crenation). A hypotonic or distilled-water solution would cause cells to swell. An isotonic solution causes no net water movement.",
          difficulty: "core",
          guideRef: "Osmosis and Transport",
          hints: [
            "Consider the direction of osmosis: water moves from low to high solute concentration.",
            "If cells shrink, they are losing water — which direction must water be moving?",
            "Compare solute concentration inside the cell with the external solution.",
          ],
        },
        // ── BIOLOGICAL MOLECULES / ENZYMES ─────────────────────────────────────
        {
          id: "exam-biology-mcq-03",
          question:
            "An enzyme is incubated at 70 °C for 30 minutes and then cooled to its optimum temperature. Which statement correctly describes the enzyme's activity after cooling?",
          options: [
            "A  Activity returns to normal because the enzyme is no longer too hot.",
            "B  Activity is permanently lost because the enzyme is denatured.",
            "C  Activity doubles because the enzyme was 'resting' at 70 °C.",
            "D  Activity is unchanged because temperature does not affect enzymes.",
          ],
          answerIndex: 1,
          explanation:
            "At 70 °C the high thermal energy breaks the hydrogen bonds and other interactions that maintain the enzyme's tertiary structure. The active site shape changes permanently — this is denaturation. Cooling does not restore the original conformation, so substrate cannot bind and catalytic activity is irreversibly lost.",
          difficulty: "core",
          guideRef: "Enzymes",
          hints: [
            "Think about what happens to protein structure at very high temperatures.",
            "Denaturation vs. inhibition — which is reversible?",
          ],
        },
        {
          id: "exam-biology-mcq-04",
          question:
            "Which reagent and colour change correctly identify the presence of reducing sugars?",
          options: [
            "A  Biuret reagent — purple",
            "B  Benedict's reagent — brick-red precipitate",
            "C  Iodine solution — blue-black",
            "D  Ethanol emulsion test — white emulsion",
          ],
          answerIndex: 1,
          explanation:
            "Benedict's reagent (blue) is reduced by reducing sugars (e.g. glucose, maltose) to produce a brick-red/orange precipitate of copper(I) oxide when heated. Biuret detects proteins; iodine detects starch; the ethanol emulsion test detects lipids.",
          difficulty: "warmup",
          guideRef: "Biological Molecules",
        },
        // ── NUTRITION ──────────────────────────────────────────────────────────
        {
          id: "exam-biology-mcq-05",
          question:
            "In a controlled experiment, plants of the same species are grown in identical conditions except that one group receives a magnesium-deficient soil. Which symptom is most likely in the deficient plants?",
          options: [
            "A  Stunted root growth",
            "B  Yellow leaves (chlorosis)",
            "C  Wilting of stem tips",
            "D  Purple discolouration of leaves",
          ],
          answerIndex: 1,
          explanation:
            "Magnesium is a mineral ion required for the synthesis of chlorophyll. Without sufficient magnesium, chlorophyll cannot be made, so leaves turn yellow — a condition called chlorosis. Purple discolouration is associated with phosphate deficiency affecting anthocyanin.",
          difficulty: "core",
          guideRef: "Mineral Nutrition",
          hints: [
            "Recall which mineral ions are components of large biological molecules.",
            "Magnesium is part of the chlorophyll molecule.",
          ],
        },
        {
          id: "exam-biology-mcq-06",
          question:
            "Amylase is secreted into the alimentary canal from two sites. Which pair correctly identifies these sites?",
          options: [
            "A  Stomach and small intestine",
            "B  Salivary glands and pancreas",
            "C  Liver and large intestine",
            "D  Gall bladder and duodenum",
          ],
          answerIndex: 1,
          explanation:
            "Salivary amylase is produced by the salivary glands and acts in the mouth; pancreatic amylase is produced by the pancreas and secreted into the duodenum. Both catalyse the hydrolysis of starch to maltose. The stomach produces protease (pepsin) not amylase; the liver produces bile (not an enzyme); the gall bladder stores bile.",
          difficulty: "warmup",
          guideRef: "Human Nutrition and Digestion",
        },
        // ── GAS EXCHANGE / RESPIRATION ─────────────────────────────────────────
        {
          id: "exam-biology-mcq-07",
          question:
            "A student measures the rate of oxygen consumption by germinating peas at different temperatures. Which conclusion is best supported by a graph showing a peak rate at 35 °C, declining sharply above 45 °C?",
          options: [
            "A  Respiration is inhibited by oxygen at temperatures above 45 °C.",
            "B  The enzymes controlling respiration denature above 45 °C.",
            "C  Germination stops producing heat above 35 °C.",
            "D  Anaerobic respiration begins at 45 °C.",
          ],
          answerIndex: 1,
          explanation:
            "The rise to 35 °C reflects increasing kinetic energy and enzyme activity; the sharp decline above 45 °C is best explained by denaturation of respiratory enzymes (e.g. dehydrogenases), permanently reducing their activity. There is no evidence in the data for an oxygen inhibition mechanism or a switch to anaerobic respiration.",
          difficulty: "core",
          guideRef: "Respiration",
          hints: [
            "Think about how enzyme activity relates to temperature in general.",
            "The sharp fall, not a gradual decline, points to an irreversible change.",
          ],
        },
        {
          id: "exam-biology-mcq-08",
          question:
            "Which equation represents aerobic respiration in its simplest balanced form?",
          options: [
            "A  C6H12O6 + 6O2 → 6CO2 + 6H2O + energy",
            "B  6CO2 + 6H2O → C6H12O6 + 6O2",
            "C  C6H12O6 → 2C2H5OH + 2CO2 + energy",
            "D  C6H12O6 + 6H2O → 6CO2 + 12H2 + energy",
          ],
          answerIndex: 0,
          explanation:
            "Aerobic respiration oxidises glucose using oxygen to produce carbon dioxide, water, and ATP. Option B is photosynthesis; option C is anaerobic respiration (fermentation) in yeast; option D is incorrectly balanced and physically wrong.",
          difficulty: "warmup",
          guideRef: "Respiration",
        },
        // ── TRANSPORT IN PLANTS ────────────────────────────────────────────────
        {
          id: "exam-biology-mcq-09",
          question:
            "A student rings a tree by removing a complete band of bark and phloem around the trunk. Which observation would be expected within a few weeks?",
          options: [
            "A  The roots die first because water cannot be transported upward.",
            "B  The leaves wilt because xylem sap cannot reach them.",
            "C  The roots die first because assimilates cannot be transported downward.",
            "D  The whole tree dies immediately because all vascular tissue is removed.",
          ],
          answerIndex: 2,
          explanation:
            "Bark ringing removes the phloem (and associated tissue) but leaves xylem intact inside the woody trunk. Xylem continues to carry water and mineral ions upward, so leaves survive initially. However, phloem is severed, blocking the downward translocation of sucrose and other assimilates to the roots. Without an energy supply the roots starve and die, eventually killing the whole tree.",
          difficulty: "core",
          guideRef: "Transport in Plants",
          hints: [
            "Identify which vascular tissue is in the bark versus in woody tissue.",
            "Ask which direction each tissue carries materials.",
            "What do the roots need that the shoot produces?",
          ],
        },
        {
          id: "exam-biology-mcq-10",
          question:
            "On a hot, dry, windy day a plant's stomata close. What is the direct consequence for photosynthesis?",
          options: [
            "A  The rate of photosynthesis increases because water stress stimulates the light reactions.",
            "B  The rate of photosynthesis decreases because CO2 entry into the leaf is restricted.",
            "C  The rate of photosynthesis is unchanged because CO2 enters through the cuticle.",
            "D  The rate of photosynthesis decreases because O2 cannot leave the leaf.",
          ],
          answerIndex: 1,
          explanation:
            "Stomata are the main route for CO2 diffusion into the leaf. When they close to reduce water loss, CO2 supply to the mesophyll cells falls, limiting the Calvin cycle and reducing the overall rate of photosynthesis. The cuticle is largely impermeable to gases. While O2 diffusion is also restricted, it is CO2 availability that is the primary rate-limiting factor here.",
          difficulty: "core",
          guideRef: "Photosynthesis and Gas Exchange in Plants",
          hints: [
            "Through which structure do gases mainly enter and leave a leaf?",
            "Which raw material of photosynthesis is a gas?",
          ],
        },
        // ── TRANSPORT IN ANIMALS ───────────────────────────────────────────────
        {
          id: "exam-biology-mcq-11",
          question:
            "Which row correctly matches the blood vessel to one of its distinguishing features?",
          options: [
            "A  Artery — thin wall, large lumen, contains valves",
            "B  Vein — thick muscular wall, high pressure",
            "C  Capillary — wall one cell thick, large lumen",
            "D  Artery — thick muscular wall, small lumen relative to wall, no valves (generally)",
          ],
          answerIndex: 3,
          explanation:
            "Arteries carry blood under high pressure away from the heart; they have thick muscular and elastic walls to withstand and smooth out pressure pulses, and a relatively narrow lumen. Veins have thin walls, a wide lumen, and valves. Capillaries have walls one cell thick but an extremely narrow lumen (just wide enough for red blood cells).",
          difficulty: "warmup",
          guideRef: "Blood Vessels and Circulation",
        },
        {
          id: "exam-biology-mcq-12",
          question:
            "Tissue fluid is formed at the arterial end of a capillary bed by filtration. What is the net force that drives this filtration?",
          options: [
            "A  Osmotic pressure of plasma proteins exceeds blood hydrostatic pressure.",
            "B  Blood hydrostatic pressure exceeds the osmotic pressure of plasma proteins.",
            "C  Active transport pumps fluid out of capillaries against a concentration gradient.",
            "D  Red blood cells push fluid out through capillary walls by squeezing through pores.",
          ],
          answerIndex: 1,
          explanation:
            "At the arterial end, blood hydrostatic pressure (~35 mmHg) exceeds the osmotic (oncotic) pressure exerted by plasma proteins (~25 mmHg), producing a net outward pressure that forces plasma fluid (minus large proteins and cells) out through the capillary wall into the interstitial space, forming tissue fluid. At the venous end the situation reverses and fluid re-enters. No active transport is involved.",
          difficulty: "challenge",
          guideRef: "Blood Vessels and Circulation",
          hints: [
            "Two opposing pressures act at the capillary wall — identify both.",
            "At the arterial end, is blood pressure high or low?",
            "Net direction of movement = the direction of the larger force.",
          ],
        },
        // ── DISEASE AND IMMUNITY ───────────────────────────────────────────────
        {
          id: "exam-biology-mcq-13",
          question:
            "A person is infected with influenza virus for the first time. Which sequence correctly describes the primary immune response?",
          options: [
            "A  Antibodies produced immediately → phagocytosis → memory cells formed",
            "B  Phagocytosis → antigen presentation → T-helper cell activation → B-cell clonal expansion → antibody production → memory cells",
            "C  Memory cells released → B cells activated → antibodies produced → phagocytosis",
            "D  Fever kills the virus → B cells produce antibodies → memory cells stored",
          ],
          answerIndex: 1,
          explanation:
            "The primary response begins with phagocytes engulfing pathogens and presenting antigens. T-helper cells are activated and stimulate B-lymphocytes with matching receptors to undergo clonal expansion. Plasma cells produce antibodies and memory cells are formed for the secondary response. Antibodies are not produced immediately on first infection — there is a lag of days to weeks. Fever is a non-specific response, not part of the specific immune pathway.",
          difficulty: "challenge",
          guideRef: "Disease and Immunity",
          hints: [
            "What happens first — specific or non-specific responses?",
            "Which cell 'presents' the antigen after phagocytosis?",
            "Which lymphocyte activates B cells?",
            "What is the end product that actually neutralises the pathogen?",
          ],
        },
        {
          id: "exam-biology-mcq-14",
          question:
            "Monoclonal antibodies used in cancer therapy can be attached to chemotherapy drugs and delivered specifically to tumour cells. What property of antibodies makes this targeting possible?",
          options: [
            "A  Antibodies are small enough to enter all body cells.",
            "B  Antibodies bind specifically to complementary antigens on the target cell surface.",
            "C  Antibodies are produced by T-lymphocytes and naturally accumulate in tumours.",
            "D  Antibodies catalyse the breakdown of tumour cell membranes.",
          ],
          answerIndex: 1,
          explanation:
            "Antibodies have a highly specific binding site (the variable region) that is complementary in shape to a particular antigen. Tumour cells express surface antigens that differ from normal cells; monoclonal antibodies raised against these antigens bind selectively to the tumour, delivering the drug precisely. Antibodies are produced by B-lymphocytes (plasma cells), not T-lymphocytes, and they do not function as enzymes.",
          difficulty: "core",
          guideRef: "Disease and Immunity",
          hints: [
            "Recall the lock-and-key analogy for antibody-antigen binding.",
          ],
        },
        // ── COORDINATION ───────────────────────────────────────────────────────
        {
          id: "exam-biology-mcq-15",
          question:
            "Which row correctly compares nervous and hormonal coordination?",
          options: [
            "A  Nervous: slow, long-lasting; Hormonal: fast, short-lasting",
            "B  Nervous: fast, short-lasting, electrical signal; Hormonal: slow, long-lasting, chemical signal",
            "C  Nervous: chemical signal in blood; Hormonal: electrical signal along neurons",
            "D  Both coordination systems use the same type of signal carried in the blood.",
          ],
          answerIndex: 1,
          explanation:
            "Nervous coordination is fast (milliseconds), short-lasting, and localised — impulses travel electrically along neurones and chemically across synapses. Hormonal coordination uses chemical messengers (hormones) transported in the blood, acting more slowly (seconds to hours) but producing sustained, widespread effects. Options A and C reverse the descriptions; option D is incorrect.",
          difficulty: "warmup",
          guideRef: "Coordination and Response",
        },
        {
          id: "exam-biology-mcq-16",
          question:
            "During a reflex arc, what is the correct order of structures through which the nerve impulse travels?",
          options: [
            "A  Effector → motor neurone → relay neurone → sensory neurone → receptor",
            "B  Receptor → sensory neurone → relay neurone → motor neurone → effector",
            "C  Receptor → motor neurone → relay neurone → sensory neurone → effector",
            "D  Relay neurone → sensory neurone → receptor → motor neurone → effector",
          ],
          answerIndex: 1,
          explanation:
            "A reflex arc runs: receptor (detects stimulus) → sensory neurone → relay neurone (in spinal cord/brain) → motor neurone → effector (muscle or gland). This is the standard pathway tested on IGCSE papers; the other options transpose neurone types or reverse the direction.",
          difficulty: "warmup",
          guideRef: "Coordination and Response",
        },
        // ── REPRODUCTION ───────────────────────────────────────────────────────
        {
          id: "exam-biology-mcq-17",
          question:
            "What is the adaptive advantage of cross-pollination over self-pollination in flowering plants?",
          options: [
            "A  Cross-pollination requires less energy than self-pollination.",
            "B  Cross-pollination guarantees more seeds per flower.",
            "C  Cross-pollination introduces genetic variation, which may improve adaptation to changing environments.",
            "D  Cross-pollination only occurs in insect-pollinated plants, making it more reliable.",
          ],
          answerIndex: 2,
          explanation:
            "Cross-pollination transfers pollen between genetically different individuals, producing offspring with new allele combinations. This genetic variation is the raw material for natural selection, enhancing the population's ability to adapt. Self-pollination is energetically cheaper but reduces genetic variation. Cross-pollination occurs in both wind- and insect-pollinated plants and does not guarantee more seeds.",
          difficulty: "core",
          guideRef: "Reproduction in Plants",
          hints: [
            "Think about what genetic variation provides to a species in evolutionary terms.",
          ],
        },
        // ── INHERITANCE ────────────────────────────────────────────────────────
        {
          id: "exam-biology-mcq-18",
          question:
            "In humans, colour blindness is caused by an X-linked recessive allele (X^b). A woman who is a carrier (X^B X^b) has children with a man who has normal vision (X^B Y). What is the probability that their daughter is colour blind?",
          options: [
            "A  0%",
            "B  25%",
            "C  50%",
            "D  100%",
          ],
          answerIndex: 0,
          explanation:
            "The cross is X^B X^b × X^B Y. Daughters receive one X from each parent. From the mother they receive either X^B or X^b; from the father they receive X^B. Possible daughter genotypes: X^B X^B (normal) or X^B X^b (carrier). No daughter can receive X^b from the father, so no daughter can be colour blind (X^b X^b). The probability is 0%.",
          difficulty: "challenge",
          guideRef: "Inheritance",
          hints: [
            "Write out all possible gametes for each parent.",
            "Daughters must receive an X from the father — which X does the father have?",
            "For a daughter to be colour blind, she needs two X^b alleles. Is that possible here?",
          ],
        },
        // ── ECOLOGY ────────────────────────────────────────────────────────────
        {
          id: "exam-biology-mcq-19",
          question:
            "A farmer uses pesticide to control aphids on crops. Shortly after, the population of ladybirds (which eat aphids) also declines sharply. Which ecological concept best explains this?",
          options: [
            "A  Mutualism — the ladybirds depended on the aphids for shelter.",
            "B  Bioaccumulation / biomagnification — pesticide concentration increases along the food chain.",
            "C  Competitive exclusion — ladybirds and aphids compete for the same food.",
            "D  Succession — the pesticide triggers a change in community composition over time.",
          ],
          answerIndex: 1,
          explanation:
            "Pesticide residues accumulate in prey organisms and become more concentrated at each trophic level (biomagnification). Ladybirds eating many aphids accumulate high pesticide doses, leading to their population decline. This is a classic example of secondary poisoning through bioaccumulation. The ladybird–aphid relationship is predation, not mutualism or competition for the same resource.",
          difficulty: "core",
          guideRef: "Ecology and the Environment",
          hints: [
            "How does pollutant concentration change as you move up a food chain?",
          ],
        },
        {
          id: "exam-biology-mcq-20",
          question:
            "Which statement about the carbon cycle is correct?",
          options: [
            "A  Decomposers return carbon to the atmosphere as oxygen.",
            "B  Combustion of fossil fuels converts organic carbon to atmospheric CO2.",
            "C  Photosynthesis converts atmospheric CO2 into atmospheric O2 with no carbon storage.",
            "D  Animals return carbon to the soil only through excretion.",
          ],
          answerIndex: 1,
          explanation:
            "Burning fossil fuels (combustion) oxidises organic carbon compounds, releasing CO2 into the atmosphere — this is a major pathway in the carbon cycle. Decomposers release CO2 (not O2) through respiration. Photosynthesis incorporates carbon into organic molecules (glucose), not just O2. Animals return carbon via respiration (CO2), egestion, and death/decomposition.",
          difficulty: "core",
          guideRef: "Ecology and the Environment",
        },
      ],
    },
  ],

  qaPapers: [
    {
      id: "exam-biology-qa-1",
      title: "Paper 4 — Theory (Structured)",
      description: "8 structured questions; total 60 marks. Allow 75 minutes. Write in continuous prose where indicated.",
      questions: [
        // ── Q1: CELLS & MICROSCOPY ─────────────────────────────────────────────
        {
          id: "exam-biology-qa-01",
          question:
            "A student uses a light microscope to observe onion epidermal cells. The magnification is ×400 and the image of a cell measures 8 mm in length.\n\n(a) Calculate the actual length of the cell in micrometres (µm). Show your working.  [2]\n\n(b) The student then adds concentrated salt solution to the slide. Describe and explain what happens to the cells.  [4]\n\n(c) State one difference between the resolution of a light microscope and an electron microscope, and explain why this difference exists.  [2]",
          marks: 8,
          modelAnswer:
            "(a) Actual size = image size ÷ magnification = 8 mm ÷ 400 = 0.02 mm = 20 µm.\n\n(b) The cells plasmolyse. Water moves out of the cell vacuole and cytoplasm by osmosis, because the external salt solution has a lower water potential (higher solute concentration) than the cell contents. The cell-surface membrane and cytoplasm pull away from the cell wall. The cell wall remains intact because it is fully permeable and does not contract. The cell becomes flaccid and the protoplast shrinks inward.\n\n(c) An electron microscope has a much higher resolution (approximately 0.1–1 nm) than a light microscope (approximately 200 nm). This is because resolution is limited by the wavelength of the radiation used; electrons have a far shorter wavelength than visible light, so smaller structures can be distinguished.",
          markScheme: [
            "(a) Correct division: 8 mm ÷ 400 [1]; answer 20 µm with correct unit [1]",
            "(b) Water leaves by osmosis [1]; because external solution has lower water potential / higher solute concentration [1]; cell-surface membrane/protoplast pulls away from cell wall [1]; cell wall remains / cell becomes flaccid [1]",
            "(c) Electron microscope has greater/higher resolution [1]; because electrons have shorter wavelength than light / wavelength determines resolution limit [1]",
          ],
          commonError:
            "Students often multiply instead of divide for magnification calculations, giving 3 200 mm instead of 20 µm. Also, plasmolysis is sometimes confused with wilting — emphasise it is the protoplast that moves away from the wall.",
          difficulty: "core",
          hints: [
            "Actual size formula: image size ÷ magnification.",
            "Convert mm to µm: 1 mm = 1000 µm.",
            "Osmosis always moves water from high to low water potential.",
          ],
          strategy: "formula recall, unit conversion",
        },
        // ── Q2: ENZYMES ────────────────────────────────────────────────────────
        {
          id: "exam-biology-qa-02",
          question:
            "An experiment investigates the effect of pH on the rate of activity of the enzyme pepsin (a protease). Pepsin is mixed with egg-white protein at pH 2, 4, 7, and 10. After 30 minutes, the amount of protein digested is measured.\n\n(a) Predict and explain the results of this experiment.  [4]\n\n(b) Explain, using the concept of enzyme structure, why pepsin is not active in the small intestine despite the presence of proteins.  [3]\n\n(c) State one named example of enzyme inhibition and describe its effect on enzyme activity.  [2]",
          marks: 9,
          modelAnswer:
            "(a) Pepsin has an optimum pH of approximately 2 (stomach acid). At pH 2 the most protein will be digested because the active site shape is best complementary to the substrate at this pH. At pH 4 and pH 7 digestion decreases progressively. At pH 10 little or no digestion occurs because the high alkalinity alters the ionic interactions and hydrogen bonds maintaining the tertiary structure of pepsin, denaturing it and distorting the active site so substrate cannot bind.\n\n(b) In the small intestine the pH is approximately 7–8 (alkaline, due to bile and pancreatic secretions). Pepsin's tertiary structure and active-site shape are maintained only at low pH. At pH 7–8, the altered ionisation of amino acid R-groups changes the interactions (hydrogen bonds, ionic bonds) holding the enzyme's shape. The active site is no longer complementary to the protein substrate, so the enzyme-substrate complex cannot form and no catalysis occurs. The enzyme is effectively denatured under small intestine conditions.\n\n(c) Heavy metal ions (e.g. mercury or lead) act as non-competitive inhibitors. They bind to a site other than the active site (the allosteric site), changing the shape of the active site so the substrate cannot bind. This reduces the rate of reaction. Alternatively: competitive inhibition — a molecule similar in shape to the substrate occupies the active site, blocking substrate binding.",
          markScheme: [
            "(a) Most digestion at pH 2 / optimum pH of pepsin is acidic [1]; decreasing digestion at higher pH [1]; little/no activity at pH 10 [1]; active site denatured/shape changed at extreme pH [1]",
            "(b) pH of small intestine is alkaline / approximately 7–8 [1]; hydrogen/ionic bonds in tertiary structure disrupted at this pH [1]; active site shape altered / no longer complementary to substrate [1]",
            "(c) Named inhibitor or type stated [1]; correct description of effect on enzyme activity (prevents substrate binding / reduces rate) [1]",
          ],
          commonError:
            "Many students write 'the enzyme is killed' at non-optimal pH — emphasise that enzymes are not alive; the correct term is denatured. Also, students confuse pH changing the concentration of substrate with pH changing the enzyme's structure.",
          difficulty: "core",
          hints: [
            "Look up the stomach pH and connect it to pepsin's optimum.",
            "What does pH change about protein structure at the molecular level?",
            "For inhibition, distinguish competitive (blocks active site) from non-competitive (binds elsewhere).",
          ],
          strategy: "apply mechanism, predict with reasoning",
        },
        // ── Q3: PHOTOSYNTHESIS / GAS EXCHANGE ─────────────────────────────────
        {
          id: "exam-biology-qa-03",
          question:
            "A leaf cross-section shows palisade mesophyll, spongy mesophyll, and stomata.\n\n(a) State TWO structural adaptations of palisade cells for photosynthesis and explain how each adaptation increases efficiency.  [4]\n\n(b) During the day, a plant in bright light produces more oxygen than it consumes and more glucose than it respires. Explain why the compensation point must be reached before net photosynthesis is positive.  [3]\n\n(c) Describe the role of the guard cells in controlling water loss from a leaf, and explain the mechanism by which they open and close stomata in terms of water potential.  [4]",
          marks: 11,
          modelAnswer:
            "(a) 1. Palisade cells are elongated and packed tightly in columns near the upper surface — this places them close to the light source, maximising light interception without shading each other within the cell.\n2. Palisade cells contain many chloroplasts that can move within the cell — this allows chloroplasts to orientate perpendicular to incoming light for maximum light absorption.\n\n(b) At any given light intensity, both photosynthesis (absorbing CO2) and respiration (releasing CO2) occur simultaneously. The compensation point is the light intensity at which the rate of photosynthesis exactly equals the rate of respiration, so no net gas exchange occurs. Below this point respiration exceeds photosynthesis and the plant is a net CO2 producer. Only above the compensation point does photosynthesis exceed respiration, giving a net uptake of CO2 and net production of oxygen (positive net photosynthesis).\n\n(c) Guard cells are kidney-shaped cells flanking each stoma. In bright light, guard cells photosynthesise, producing glucose; they also actively pump K⁺ (potassium ions) into the cell. This lowers the water potential inside the guard cell below that of surrounding epidermal cells. Water enters by osmosis, increasing turgor pressure. Because the inner wall is thicker and less elastic than the outer wall, the guard cell bows outward, opening the pore. In darkness or when the plant is water-stressed, K⁺ leaves, water potential rises, water leaves by osmosis, guard cells become flaccid, and the stoma closes.",
          markScheme: [
            "(a) Any two: elongated cells / arranged in columns near upper surface [1] + explanation (maximises light absorption / reduces shading) [1]; many chloroplasts [1] + explanation (greater surface for light harvesting / can reposition) [1]",
            "(b) Respiration occurs all the time releasing CO2 [1]; compensation point = light intensity where PS rate equals respiration rate / no net gas exchange [1]; net photosynthesis positive only above compensation point [1]",
            "(c) Guard cells gain K⁺ (potassium ions) / produce glucose by photosynthesis [1]; water potential of guard cells decreases [1]; water enters by osmosis / guard cells become turgid [1]; thicker inner wall causes bowing / pore opens [1]; reverse in darkness / water stress [bonus mark accepted]",
          ],
          commonError:
            "Students frequently omit the role of K⁺ ions and describe only 'more water entering' without explaining the water potential change. Also, 'compensation point' is often defined as the point of maximum photosynthesis — it is actually the crossover point.",
          difficulty: "challenge",
          hints: [
            "List features of palisade cells you can see or know — then ask 'what does each one do?'",
            "Both PS and respiration happen simultaneously — think about CO2 budget.",
            "Guard cells open when turgid: what makes them turgid?",
            "Water potential: lower water potential draws water in by osmosis.",
          ],
          strategy: "structure-function link, water potential gradient reasoning",
        },
        // ── Q4: TRANSPORT IN ANIMALS ───────────────────────────────────────────
        {
          id: "exam-biology-qa-04",
          question:
            "The heart is a double pump that maintains separate pulmonary and systemic circulations.\n\n(a) Trace the path of a red blood cell from the right atrium to the aorta, naming the chambers and valves in order.  [4]\n\n(b) Explain the advantage of a double circulatory system over a single circulatory system in an active mammal.  [3]\n\n(c) Describe how the structure of a red blood cell is adapted to its function of carrying oxygen.  [4]",
          marks: 11,
          modelAnswer:
            "(a) Right atrium → tricuspid (atrioventricular) valve → right ventricle → pulmonary valve (semilunar valve) → pulmonary artery → lungs (gas exchange) → pulmonary vein → left atrium → bicuspid (mitral/atrioventricular) valve → left ventricle → aortic valve (semilunar valve) → aorta.\n\n(b) In a double circulatory system, blood returns to the heart after passing through the lungs (fully oxygenated) and is pumped again at high pressure to the body. This maintains high blood pressure in the systemic circuit, allowing rapid delivery of oxygen to metabolically active tissues. In a single system, pressure drops after one capillary bed, so delivery to the body would be slow and inefficient — inadequate for the high metabolic demands of active mammals.\n\n(c) Red blood cells (erythrocytes) are adapted as follows:\n1. Biconcave disc shape — increases surface area to volume ratio for rapid diffusion of O2.\n2. No nucleus (anucleate) — maximises the volume of cytoplasm available for haemoglobin, increasing O2-carrying capacity.\n3. Packed with haemoglobin — the pigment that reversibly binds O2 to form oxyhaemoglobin.\n4. Small and flexible — can squeeze through narrow capillaries, reducing diffusion distance to tissues.",
          markScheme: [
            "(a) Right atrium [1]; tricuspid/atrioventricular valve + right ventricle [1]; pulmonary valve + pulmonary artery + lungs + pulmonary vein [1]; left atrium + bicuspid/mitral valve + left ventricle + aortic valve + aorta [1]",
            "(b) Blood re-pressurised after pulmonary circuit [1]; high pressure maintained to systemic circuit [1]; faster/more efficient delivery of O2 to tissues / meets high metabolic demands [1]",
            "(c) Any four: biconcave shape → increased SA:V [1]; no nucleus → more haemoglobin / more O2 carried [1]; contains haemoglobin → binds O2 reversibly [1]; small and flexible → fits through capillaries / short diffusion distance [1]",
          ],
          commonError:
            "Students often reverse pulmonary and systemic circuits, stating the left side pumps to the lungs. Remind them: Right = pulmonary (to lungs); Left = systemic (to body).",
          difficulty: "core",
          hints: [
            "Start at the right atrium and follow the blood — deoxygenated to lungs first.",
            "Name the valve between each pair of adjacent chambers.",
            "For double circulation advantage: think pressure, not just separation.",
          ],
          strategy: "sequence recall, structure-function link",
        },
        // ── Q5: DISEASE AND IMMUNITY ───────────────────────────────────────────
        {
          id: "exam-biology-qa-05",
          question:
            "Vaccination programmes protect individuals and communities from infectious diseases.\n\n(a) Explain how a vaccine stimulates immunity without causing the disease.  [4]\n\n(b) Explain what is meant by 'herd immunity' and why it is important for individuals who cannot be vaccinated.  [3]\n\n(c) A new pathogen has mutated so that its surface antigens differ from those of the strain used in a vaccine. Predict the effect on the vaccinated population's immunity and justify your prediction.  [3]",
          marks: 10,
          modelAnswer:
            "(a) A vaccine contains antigens from the pathogen (as killed/attenuated pathogens, isolated surface proteins, or mRNA coding for the antigen). These antigens are recognised as foreign and stimulate the specific immune response: B-lymphocytes with complementary receptors are activated and clone. Plasma cells produce specific antibodies; memory cells are formed. Because the antigen is not part of a live virulent pathogen, it cannot replicate and cause the disease. If the person later encounters the real pathogen, the memory cells mount a rapid secondary response, producing large quantities of antibody quickly and preventing illness.\n\n(b) Herd immunity occurs when a sufficiently large proportion of the population is immune (through vaccination or previous infection) that transmission of the pathogen is broken — the pathogen cannot find enough susceptible hosts to spread. This protects individuals who cannot be vaccinated (e.g. immunocompromised patients, newborns, those with allergies to vaccine components) by reducing their chance of encountering the pathogen.\n\n(c) Immunity in the vaccinated population would be reduced or lost for the mutated strain. The memory B-cells produced after vaccination carry receptors specific to the original surface antigens. The mutated antigens have a different shape, so the existing antibodies and memory cells cannot bind effectively (poor complementary fit). The immune response would be slower and weaker — effectively a primary response to the new strain — and the pathogen could cause disease before sufficient antibodies are produced.",
          markScheme: [
            "(a) Vaccine contains antigens (safe form) [1]; stimulates B-cell activation / antibody production [1]; memory cells formed [1]; rapid secondary response if real pathogen encountered / disease not caused because no virulent replication [1]",
            "(b) Sufficient proportion immune to break chain of transmission [1]; pathogen cannot spread through population [1]; protects unvaccinated/vulnerable individuals [1]",
            "(c) Immunity reduced/lost for mutated strain [1]; existing antibodies/memory cells complementary to old antigens not new [1]; primary (slow) response to new strain / susceptible to infection [1]",
          ],
          commonError:
            "Students often state that vaccines 'inject dead white blood cells' — clarify that vaccines contain antigens (or instructions to make them), not immune cells. Also, herd immunity threshold is frequently confused with 100% vaccination requirement.",
          difficulty: "core",
          hints: [
            "Vaccines work on the same principle as infection — but safely.",
            "Memory cells are key to the secondary response.",
            "Antigen–antibody binding requires complementary shapes.",
          ],
          strategy: "mechanism explanation, prediction with reasoning",
        },
        // ── Q6: COORDINATION & HORMONES ────────────────────────────────────────
        {
          id: "exam-biology-qa-06",
          question:
            "Blood glucose concentration in a healthy person is maintained within narrow limits.\n\n(a) Describe the roles of insulin and glucagon in regulating blood glucose concentration after a carbohydrate-rich meal.  [5]\n\n(b) A person with Type 1 diabetes does not produce insulin. Explain why this leads to dangerously high blood glucose and why they require insulin injections rather than tablets.  [3]\n\n(c) Suggest why the symptoms of Type 2 diabetes (insulin resistance) may initially be managed by diet and exercise rather than insulin injections.  [2]",
          marks: 10,
          modelAnswer:
            "(a) After a carbohydrate-rich meal, blood glucose rises above the set point (approximately 90 mg per 100 cm³). The pancreatic β-cells of the islets of Langerhans detect the rise and secrete insulin into the blood. Insulin binds to receptors on body cells (especially liver and muscle) and: (1) stimulates uptake of glucose by cells; (2) stimulates the liver and muscle to convert glucose to glycogen (glycogenesis); (3) increases cellular respiration rate. Blood glucose falls back to the set point. If blood glucose falls too low, α-cells in the pancreas secrete glucagon. Glucagon stimulates the liver to break down glycogen to glucose (glycogenolysis) and convert amino acids/fat to glucose (gluconeogenesis), raising blood glucose back to normal. This is a negative feedback system.\n\n(b) Without insulin, cells cannot take up glucose efficiently and the liver does not store it as glycogen. Glucose accumulates in the blood (hyperglycaemia). At very high concentrations, glucose enters the urine (glucosuria), drawing water with it by osmosis, causing dehydration. Insulin must be injected rather than taken as a tablet because insulin is a protein; it would be digested and broken down into amino acids in the stomach/small intestine by proteases before reaching the bloodstream, destroying its biological activity.\n\n(c) In Type 2 diabetes, insulin is still produced but target cells are less responsive (insulin resistance). Dietary management (reducing refined carbohydrates) limits the rise in blood glucose, reducing demand for insulin. Exercise increases glucose uptake by muscle cells independently of insulin and can improve insulin sensitivity. These measures reduce blood glucose without needing exogenous insulin, at least in the early stages.",
          markScheme: [
            "(a) Blood glucose rises → β-cells secrete insulin [1]; insulin stimulates glucose uptake by cells [1]; insulin stimulates glycogenesis in liver/muscle [1]; blood glucose returns to normal [1]; glucagon from α-cells → glycogenolysis/gluconeogenesis → glucose released [1]",
            "(b) Glucose not taken up / not stored as glycogen → hyperglycaemia [1]; insulin is a protein → digested by proteases in gut if taken orally [1]; must be injected to reach blood intact [1]",
            "(c) Diet reduces blood glucose rise [1]; exercise increases glucose uptake / improves insulin sensitivity [1]",
          ],
          commonError:
            "Students frequently state that insulin 'destroys' glucose — it promotes storage as glycogen and cellular uptake. Also, the reason for injection (protein digestion) is often omitted.",
          difficulty: "core",
          hints: [
            "Insulin and glucagon are antagonistic hormones — one raises, one lowers.",
            "Negative feedback: the response opposes the original change.",
            "Insulin is a protein: what happens to proteins in the digestive system?",
          ],
          strategy: "feedback mechanism, chemical nature of hormones",
        },
        // ── Q7: INHERITANCE ────────────────────────────────────────────────────
        {
          id: "exam-biology-qa-07",
          question:
            "Cystic fibrosis (CF) is caused by an autosomal recessive allele (f). Normal is dominant (F).\n\n(a) Two carriers (Ff) have children. Draw a genetic diagram to show the possible genotypes and phenotypes of their offspring, and state the expected ratio.  [4]\n\n(b) Explain why some offspring of two carriers do not develop cystic fibrosis even if they inherit one f allele.  [2]\n\n(c) A prenatal genetic test reveals a foetus has genotype Ff. Discuss the implications of this result for the foetus and for future family planning, considering both genetic and ethical perspectives.  [4]",
          marks: 10,
          modelAnswer:
            "(a) Parental genotypes: Ff × Ff\nGametes: F and f (each parent)\nPunnett square:\n      F    f\n  F | FF | Ff |\n  f | Ff | ff |\n\nGenotypes: ¼ FF, ½ Ff, ¼ ff\nPhenotypes: ¾ unaffected (FF or Ff), ¼ affected with CF (ff)\nExpected ratio: 3 unaffected : 1 affected.\n\n(b) Cystic fibrosis is caused by a recessive allele, meaning two copies of the recessive allele (ff) are needed to express the condition. A carrier (Ff) has one dominant allele (F) which produces a functional CFTR protein. This functional protein is sufficient to prevent the disease phenotype, so the recessive allele is 'masked' by the dominant allele — the organism is phenotypically normal.\n\n(c) Genetic: A foetus with Ff is a carrier but will not develop CF. No immediate medical treatment of the foetus is needed. However, when this individual grows up and has children with another carrier, each child has a 1 in 4 chance of having CF. Ethical perspectives: the information may cause parental anxiety about a child who will be healthy. Genetic counselling should be offered to help parents understand probability and implications. Some families may face decisions about future pregnancies or whether to use pre-implantation genetic diagnosis (PGD) for subsequent conceptions. Respecting parental autonomy and avoiding discrimination based on carrier status are important ethical considerations.",
          markScheme: [
            "(a) Correct parental genotypes shown [1]; correct gametes (F and f) for each [1]; correct Punnett square with FF, Ff, Ff, ff [1]; correct ratio 3 unaffected : 1 affected with phenotypes named [1]",
            "(b) Recessive allele only expressed when homozygous [1]; dominant F allele produces functional protein / masks recessive [1]",
            "(c) Foetus will be carrier but unaffected [1]; future children with carrier partner at 1 in 4 risk of CF [1]; ethical point: genetic counselling / parental anxiety / autonomy / PGD option [1]; balanced discussion [1]",
          ],
          commonError:
            "Students draw Punnett squares with only two outcomes instead of four, missing the Ff carrier category. Also, dominance is often confused with 'the more common allele wins' — clarify it is about which allele produces a functional gene product.",
          difficulty: "challenge",
          hints: [
            "Both parents are Ff — list their gametes first.",
            "Fill all four cells of the Punnett square before writing the ratio.",
            "Dominant means one copy is enough for the phenotype to show.",
            "For part (c): separate the genetic fact from the ethical question.",
          ],
          strategy: "genetic diagram, dominant/recessive reasoning, ethical reasoning",
        },
        // ── Q8: ECOLOGY ────────────────────────────────────────────────────────
        {
          id: "exam-biology-qa-08",
          question:
            "A river is monitored over several years. Data show that as sewage discharge into the river increases, the concentration of dissolved oxygen falls sharply downstream of the discharge point, then recovers further downstream.\n\n(a) Explain, using your knowledge of the nitrogen cycle and microbial activity, why dissolved oxygen falls sharply near the point of discharge.  [4]\n\n(b) Indicator species such as water lice (Asellus) and stonefly larvae (Plecoptera) are used to assess water quality. Explain the principle of using indicator species for this purpose.  [3]\n\n(c) The government proposes to release treated (not raw) sewage. Suggest and explain TWO ways that proper sewage treatment before discharge could help protect the river ecosystem.  [4]",
          marks: 11,
          modelAnswer:
            "(a) Sewage contains large quantities of organic compounds (e.g. urea, faeces, food waste). Aerobic decomposer bacteria in the river rapidly break down these organic compounds, respiring aerobically and consuming large amounts of dissolved oxygen. The bacteria also release ammonium ions from organic nitrogen (ammonification). Nitrifying bacteria then oxidise ammonium to nitrate, further consuming oxygen. This high biological demand for oxygen (BOD) depletes dissolved O2 faster than it can be replenished from the atmosphere or by photosynthesis, creating a 'sag' in oxygen levels. Further downstream, the organic matter is exhausted, bacterial populations decline, and oxygen levels recover.\n\n(b) Indicator species are organisms that have known tolerances for particular environmental conditions (e.g. oxygen levels, pollution). Their presence, absence, or relative abundance in a sample indicates the environmental conditions. Water lice tolerate low oxygen levels and organic pollution, so their dominance indicates poor water quality. Stonefly larvae are sensitive to pollution and require high dissolved oxygen, so their presence indicates clean, well-oxygenated water. By sampling the community of organisms rather than just measuring one chemical, indicator species integrate conditions over time and provide a biological measure of water quality.\n\n(c) 1. Removing or reducing organic matter (BOD reduction) — treating sewage to break down organic compounds before discharge reduces the food supply for aerobic bacteria in the river. With less substrate, bacterial populations and their oxygen consumption are lower, preventing the oxygen sag and protecting aquatic organisms that need oxygen to respire.\n2. Removing excess nutrients (nitrates and phosphates) by tertiary treatment — untreated sewage causes eutrophication (algal blooms → algae die → decomposers consume O2). Removing these nutrients before discharge prevents excessive algal growth and subsequent deoxygenation.",
          markScheme: [
            "(a) Organic compounds provide substrate for aerobic decomposer bacteria [1]; bacteria respire aerobically, consuming dissolved O2 [1]; high BOD / O2 depleted faster than replenished [1]; O2 recovers downstream as organic matter exhausted / bacterial population declines [1]",
            "(b) Indicator species have known tolerance/sensitivity to pollution/O2 levels [1]; presence or absence indicates environmental conditions [1]; example: Asellus = polluted / stonefly = clean [1]",
            "(c) Any two: reduce BOD / organic matter removed → less bacterial respiration → O2 maintained [1 + 1]; remove nitrates/phosphates → prevents eutrophication / algal blooms → prevents O2 depletion [1 + 1]",
          ],
          commonError:
            "Students often state that sewage 'poisons' fish directly rather than explaining the oxygen-depletion mechanism via bacterial respiration. The indirect pathway (organic matter → bacteria → O2 depletion → death of aerobic organisms) must be shown.",
          difficulty: "challenge",
          hints: [
            "What do aerobic bacteria need to break down organic waste?",
            "BOD = Biological Oxygen Demand — what does a high BOD mean for dissolved O2?",
            "For indicator species: think about what their presence or absence tells you.",
            "For treatment: target the cause of each problem (organic load vs. nutrient load).",
          ],
          strategy: "cause-and-effect chain, ecosystem impact reasoning",
        },
      ],
    },
  ],
};
