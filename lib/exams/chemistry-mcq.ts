import type { Paper, MCQ } from "../types";

export const chemistryExamMcqPapers: Paper<MCQ>[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // PAPER 1 — Particles, atoms, bonding, periodic table
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "exam-chemistry-mcq-1",
    title: "Paper 1 — Multiple Choice",
    description:
      "Whole-subject mock (Paper 1 of 4). Focus on states of matter, the particle model, atomic structure, isotopes, electronic configuration, chemical bonding and the structure of substances.",
    questions: [
      {
        id: "exam-chemistry-m1-01",
        difficulty: "warmup",
        question:
          "Which change of state involves a gas turning directly into a solid without becoming a liquid first?",
        options: ["Condensation", "Deposition", "Sublimation", "Freezing"],
        answerIndex: 1,
        explanation:
          "Deposition is the direct gas-to-solid change (the reverse of sublimation). Condensation is gas to liquid, freezing is liquid to solid, and sublimation is solid to gas.",
      },
      {
        id: "exam-chemistry-m1-02",
        difficulty: "warmup",
        question:
          "In which state of matter are the particles arranged in a regular, fixed lattice and only able to vibrate about fixed positions?",
        options: ["Gas", "Liquid", "Solid", "Plasma"],
        answerIndex: 2,
        explanation:
          "In a solid the particles are closely packed in a regular arrangement and can only vibrate. Liquids have particles that can move past each other; gas particles move freely and far apart.",
      },
      {
        id: "exam-chemistry-m1-03",
        difficulty: "warmup",
        question:
          "Which observation provides direct evidence that gas particles are in constant random motion?",
        options: [
          "Brownian motion of smoke particles",
          "Rusting of iron",
          "Melting of ice at 0 degrees C",
          "Electrolysis of water",
        ],
        answerIndex: 0,
        explanation:
          "Brownian motion — the random jerky movement of small visible particles such as smoke — is caused by collisions with fast-moving, randomly moving gas molecules, providing evidence for the kinetic particle theory.",
      },
      {
        id: "exam-chemistry-m1-04",
        difficulty: "core",
        question:
          "A gas X diffuses more slowly than a gas Y under the same conditions. What can be concluded about gas X?",
        options: [
          "It has a higher relative molecular mass than Y",
          "It has a lower relative molecular mass than Y",
          "It is more reactive than Y",
          "It is at a higher temperature than Y",
        ],
        answerIndex: 0,
        explanation:
          "Rate of diffusion decreases as relative molecular mass increases, because heavier molecules move more slowly at a given temperature. The slower diffuser X must be the heavier molecule.",
        hints: [
          "Diffusion depends on how fast the molecules move.",
          "At the same temperature, lighter molecules move faster.",
          "Slower diffusion means heavier (greater Mr) molecules.",
        ],
      },
      {
        id: "exam-chemistry-m1-05",
        difficulty: "core",
        question:
          "An atom has a proton number of 17 and a nucleon number of 35. How many neutrons does it contain?",
        options: ["17", "18", "35", "52"],
        answerIndex: 1,
        explanation:
          "Number of neutrons = nucleon number minus proton number = 35 minus 17 = 18. The proton number 17 also equals the number of electrons in the neutral atom.",
        hints: [
          "Neutrons = nucleon number (mass number) minus proton number.",
          "Proton number = 17, nucleon number = 35.",
          "35 minus 17 = 18.",
        ],
      },
      {
        id: "exam-chemistry-m1-06",
        difficulty: "warmup",
        question: "What are isotopes?",
        options: [
          "Atoms of the same element with different numbers of protons",
          "Atoms of the same element with different numbers of neutrons",
          "Atoms of different elements with the same number of neutrons",
          "Atoms of the same element with different numbers of electrons",
        ],
        answerIndex: 1,
        explanation:
          "Isotopes are atoms of the same element (same proton number) that have different numbers of neutrons, and therefore different nucleon (mass) numbers. They have identical chemical properties.",
      },
      {
        id: "exam-chemistry-m1-07",
        difficulty: "core",
        question:
          "Chlorine consists of two isotopes: 75 percent chlorine-35 and 25 percent chlorine-37. What is the relative atomic mass of chlorine?",
        options: ["35.0", "35.5", "36.0", "37.0"],
        answerIndex: 1,
        explanation:
          "Relative atomic mass = (35 x 75 + 37 x 25) / 100 = (2625 + 925) / 100 = 3550 / 100 = 35.5.",
        hints: [
          "Multiply each isotope mass by its percentage abundance.",
          "Add the products together, then divide by 100.",
          "(35 x 75 + 37 x 25) / 100 = 3550 / 100.",
        ],
        strategy:
          "For weighted averages, multiply each value by its fraction (or percentage) and sum; dividing percentages by 100 at the end keeps the arithmetic tidy.",
      },
      {
        id: "exam-chemistry-m1-08",
        difficulty: "core",
        question:
          "What is the electronic configuration of a neutral sulfur atom (proton number 16)?",
        options: ["2,8,6", "2,8,8", "2,6,8", "2,8,4,2"],
        answerIndex: 0,
        explanation:
          "Sulfur has 16 electrons. Filling shells (2 then 8 then up to 8): 2 + 8 + 6 = 16, giving 2,8,6. The 6 outer-shell electrons place sulfur in Group VI.",
        hints: [
          "A neutral atom has the same number of electrons as protons.",
          "Fill shells in order: first holds 2, second holds 8.",
          "16 electrons: 2 + 8 leaves 6 in the third shell.",
        ],
      },
      {
        id: "exam-chemistry-m1-09",
        difficulty: "warmup",
        question:
          "Which type of bonding involves the transfer of electrons from a metal atom to a non-metal atom?",
        options: ["Covalent bonding", "Metallic bonding", "Ionic bonding", "Hydrogen bonding"],
        answerIndex: 2,
        explanation:
          "Ionic bonding occurs when electrons transfer from a metal to a non-metal, forming positive and negative ions held together by strong electrostatic attraction.",
      },
      {
        id: "exam-chemistry-m1-10",
        difficulty: "core",
        question:
          "What is the formula of the ionic compound formed between magnesium and chlorine?",
        options: ["MgCl", "MgCl2", "Mg2Cl", "Mg2Cl3"],
        answerIndex: 1,
        explanation:
          "Magnesium forms Mg2+ and chlorine forms Cl-. To balance charges, one Mg2+ needs two Cl- ions, giving MgCl2.",
        hints: [
          "Magnesium is in Group II, so it forms a 2+ ion.",
          "Chlorine is in Group VII, so it forms a 1- ion.",
          "Two 1- ions are needed to balance one 2+ ion.",
        ],
      },
      {
        id: "exam-chemistry-m1-11",
        difficulty: "core",
        question:
          "How many electrons are shared in total in a molecule of nitrogen, N2, which contains a triple bond?",
        options: ["2", "4", "6", "8"],
        answerIndex: 2,
        explanation:
          "A triple bond consists of three shared pairs of electrons. Three pairs equals 6 shared electrons, allowing each nitrogen atom to reach a stable outer octet.",
        hints: [
          "A triple bond is made of three shared pairs.",
          "Each shared pair contains 2 electrons.",
          "3 pairs x 2 electrons = 6.",
        ],
      },
      {
        id: "exam-chemistry-m1-12",
        difficulty: "warmup",
        question:
          "Which property is characteristic of simple molecular substances such as carbon dioxide?",
        options: [
          "Very high melting points",
          "Conduct electricity when solid",
          "Low melting and boiling points",
          "Made of a giant lattice of ions",
        ],
        answerIndex: 2,
        explanation:
          "Simple molecular substances have low melting and boiling points because only weak intermolecular forces (not the strong covalent bonds) need to be overcome when they melt or boil.",
      },
      {
        id: "exam-chemistry-m1-13",
        difficulty: "challenge",
        question:
          "Diamond and graphite are both giant covalent forms of carbon, yet graphite conducts electricity and diamond does not. Why?",
        options: [
          "Graphite contains ions that move",
          "Each carbon in graphite bonds to three others, leaving one delocalised electron per atom",
          "Diamond contains weak metallic bonds",
          "Graphite has a higher melting point",
        ],
        answerIndex: 1,
        explanation:
          "In graphite each carbon forms only three covalent bonds, leaving one delocalised electron per atom free to move along the layers and carry charge. In diamond all four outer electrons are used in bonding, so none are free.",
        hints: [
          "Conduction needs charged particles that are free to move.",
          "Count how many bonds each carbon atom forms in each structure.",
          "Diamond uses all 4 outer electrons; graphite uses only 3.",
        ],
        strategy:
          "Link structure to property: identify what mobile charge carriers exist (delocalised electrons or moving ions) before deciding whether a substance conducts.",
      },
      {
        id: "exam-chemistry-m1-14",
        difficulty: "core",
        question:
          "Why can metals be bent and shaped (are malleable) without shattering?",
        options: [
          "Their covalent bonds are flexible",
          "Layers of positive ions can slide over each other while still held by delocalised electrons",
          "They contain mobile negative ions",
          "Their molecules are held by weak forces",
        ],
        answerIndex: 1,
        explanation:
          "In a metallic lattice, layers of positive ions can slide over one another. The sea of delocalised electrons continues to hold the structure together, so the metal deforms rather than breaks.",
        hints: [
          "Metals are giant structures of positive ions in a sea of electrons.",
          "Think about whether the layers can move relative to each other.",
          "The delocalised electrons keep holding the ions after they slide.",
        ],
      },
      {
        id: "exam-chemistry-m1-15",
        difficulty: "core",
        question:
          "An element is in Period 3 and Group IV of the Periodic Table. What is its electronic configuration?",
        options: ["2,8,4", "2,4", "2,8,8,4", "2,8,2"],
        answerIndex: 0,
        explanation:
          "Period 3 means three occupied electron shells; Group IV means four electrons in the outer shell. This gives 2,8,4, which is silicon (proton number 14).",
        hints: [
          "The period number equals the number of occupied shells.",
          "The group number equals the number of outer-shell electrons.",
          "Three shells with 4 outer electrons: 2,8,4.",
        ],
      },
      {
        id: "exam-chemistry-m1-16",
        difficulty: "warmup",
        question:
          "Which group of the Periodic Table contains the very unreactive noble gases?",
        options: ["Group I", "Group VII", "Group 0", "Group II"],
        answerIndex: 2,
        explanation:
          "The noble gases are in Group 0 (also called Group VIII). They are unreactive because they have full outer electron shells.",
      },
      {
        id: "exam-chemistry-m1-17",
        difficulty: "core",
        question:
          "Going down Group I (the alkali metals), how does reactivity change and why?",
        options: [
          "Reactivity decreases because atoms get smaller",
          "Reactivity increases because the outer electron is more easily lost",
          "Reactivity stays the same throughout the group",
          "Reactivity decreases because nuclear charge increases",
        ],
        answerIndex: 1,
        explanation:
          "Down Group I, atoms get larger and the outer electron is further from the nucleus and more shielded, so it is lost more easily, making the metals more reactive.",
        hints: [
          "Group I metals react by losing their single outer electron.",
          "Down the group, atoms have more shells and are larger.",
          "An outer electron further from the nucleus is easier to remove.",
        ],
      },
      {
        id: "exam-chemistry-m1-18",
        difficulty: "core",
        question:
          "Which Group VII displacement reaction will occur?",
        options: [
          "Chlorine added to potassium bromide solution",
          "Iodine added to potassium chloride solution",
          "Bromine added to potassium chloride solution",
          "Iodine added to potassium bromide solution",
        ],
        answerIndex: 0,
        explanation:
          "A more reactive halogen displaces a less reactive one from solution. Chlorine is more reactive than bromine, so chlorine displaces bromine from potassium bromide. The other options pair a less reactive halogen with a salt of a more reactive one.",
        hints: [
          "Reactivity of halogens decreases down the group: Cl > Br > I.",
          "A halogen can only displace one less reactive than itself.",
          "Chlorine can displace bromide and iodide; iodine displaces neither.",
        ],
      },
      {
        id: "exam-chemistry-m1-19",
        difficulty: "challenge",
        question:
          "An ion has the electronic configuration 2,8,8 and a charge of 2+. What is the proton number of the element it came from?",
        options: ["18", "20", "16", "12"],
        answerIndex: 1,
        explanation:
          "The ion has 2+8+8 = 18 electrons. A 2+ charge means the atom lost 2 electrons, so the neutral atom had 18 + 2 = 20 electrons and therefore 20 protons. This is calcium.",
        hints: [
          "Add up the electrons shown in the configuration.",
          "A 2+ ion has lost 2 electrons compared with the atom.",
          "Neutral atom electrons = ion electrons + charge lost = 18 + 2.",
        ],
        strategy:
          "For ions, work back to the neutral atom first: positive charge means add electrons back; negative charge means subtract.",
      },
      {
        id: "exam-chemistry-m1-20",
        difficulty: "core",
        question:
          "Why do magnesium oxide (MgO) and sodium chloride (NaCl) have high melting points?",
        options: [
          "They are simple molecules with strong covalent bonds",
          "They contain delocalised electrons",
          "They are giant ionic lattices with strong electrostatic forces between ions",
          "They have weak intermolecular forces",
        ],
        answerIndex: 2,
        explanation:
          "Both are giant ionic lattices. A large amount of energy is needed to overcome the many strong electrostatic forces of attraction between the oppositely charged ions, giving high melting points.",
        hints: [
          "These compounds are ionic, not molecular.",
          "Ionic compounds form giant lattices, not separate molecules.",
          "Many strong ion-to-ion attractions must be broken to melt them.",
        ],
      },
      {
        id: "exam-chemistry-m1-21",
        difficulty: "challenge",
        question:
          "MgO has a higher melting point than NaCl. Which is the best explanation?",
        options: [
          "Mg2+ and O2- carry larger charges, giving stronger electrostatic attraction",
          "MgO is a simple molecule",
          "NaCl contains covalent bonds",
          "Oxygen atoms are heavier than chlorine atoms",
        ],
        answerIndex: 0,
        explanation:
          "MgO contains 2+ and 2- ions, whereas NaCl contains 1+ and 1- ions. The higher ionic charges in MgO produce stronger electrostatic attractions, so more energy is needed to break the lattice and the melting point is higher.",
        hints: [
          "Both are ionic lattices, so compare the strength of the attractions.",
          "Higher ionic charge means stronger attraction.",
          "Mg2+ and O2- versus Na+ and Cl-.",
        ],
      },
      {
        id: "exam-chemistry-m1-22",
        difficulty: "core",
        question:
          "Which statement about the transition elements (compared with Group I metals) is correct?",
        options: [
          "They have low densities and low melting points",
          "They form coloured compounds and can act as catalysts",
          "They never form ions with different charges",
          "They are stored under oil because they are so reactive",
        ],
        answerIndex: 1,
        explanation:
          "Transition elements typically form coloured compounds, often act as catalysts, have variable oxidation states, and have high densities and melting points — unlike the soft, low-density, very reactive Group I metals.",
        hints: [
          "Compare transition metals with the soft, reactive alkali metals.",
          "Think about the colours of transition-metal compounds.",
          "Iron and other transition metals are common catalysts.",
        ],
      },
      {
        id: "exam-chemistry-m1-23",
        difficulty: "warmup",
        question:
          "Which substance is an element rather than a compound or a mixture?",
        options: ["Air", "Water", "Argon", "Sodium chloride"],
        answerIndex: 2,
        explanation:
          "Argon is an element — it is made of only one type of atom. Water and sodium chloride are compounds, and air is a mixture of gases.",
      },
      {
        id: "exam-chemistry-m1-24",
        difficulty: "core",
        question:
          "Two atoms are isotopes of the same element. Which quantity must be the same in both atoms?",
        options: [
          "The number of neutrons",
          "The nucleon (mass) number",
          "The number of protons",
          "The number of occupied shells in every case",
        ],
        answerIndex: 2,
        explanation:
          "Isotopes have the same proton number (which defines the element) but different numbers of neutrons, and hence different nucleon numbers. Same element therefore means same number of protons.",
        hints: [
          "What single quantity defines which element an atom is?",
          "Isotopes differ in neutron number.",
          "The proton number is fixed for a given element.",
        ],
      },
      {
        id: "exam-chemistry-m1-25",
        difficulty: "challenge",
        question:
          "Solid sodium chloride does not conduct electricity, but molten sodium chloride does. Why?",
        options: [
          "Melting creates new delocalised electrons",
          "In the solid the ions are fixed in the lattice; when molten the ions are free to move and carry charge",
          "Melting turns the ions into atoms",
          "Molten NaCl contains covalent bonds that conduct",
        ],
        answerIndex: 1,
        explanation:
          "Electrical conduction requires charged particles free to move. In solid NaCl the ions are locked in the lattice. When melted, the ions become mobile and can carry charge, so the liquid conducts.",
        hints: [
          "Conduction needs mobile charged particles.",
          "Ionic solids contain ions, but are they free to move?",
          "Melting frees the ions from their fixed lattice positions.",
        ],
        strategy:
          "Whenever asked about conduction, ask: are there charged particles, and are they free to move? Both must be yes.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // PAPER 2 — Stoichiometry, mole calculations, electrochemistry, energetics
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "exam-chemistry-mcq-2",
    title: "Paper 2 — Multiple Choice",
    description:
      "Whole-subject mock (Paper 2 of 4). Focus on formulae and equations, the mole concept and stoichiometric calculations, electrolysis and electrochemistry, and energy changes in reactions.",
    questions: [
      {
        id: "exam-chemistry-m2-01",
        difficulty: "warmup",
        question: "What is the relative formula mass (Mr) of water, H2O? (Ar: H = 1, O = 16)",
        options: ["17", "18", "16", "20"],
        answerIndex: 1,
        explanation:
          "Mr of H2O = (2 x 1) + 16 = 2 + 16 = 18.",
      },
      {
        id: "exam-chemistry-m2-02",
        difficulty: "warmup",
        question:
          "How many atoms in total are represented by the formula Ca(OH)2?",
        options: ["3", "4", "5", "6"],
        answerIndex: 2,
        explanation:
          "Ca(OH)2 contains 1 calcium, 2 oxygen and 2 hydrogen atoms: 1 + 2 + 2 = 5 atoms in total.",
      },
      {
        id: "exam-chemistry-m2-03",
        difficulty: "core",
        question:
          "What is the relative formula mass of calcium carbonate, CaCO3? (Ar: Ca = 40, C = 12, O = 16)",
        options: ["68", "84", "100", "116"],
        answerIndex: 2,
        explanation:
          "Mr = 40 + 12 + (3 x 16) = 40 + 12 + 48 = 100.",
        hints: [
          "Add the relative atomic mass of every atom in the formula.",
          "There are three oxygen atoms, each 16.",
          "40 + 12 + 48 = 100.",
        ],
      },
      {
        id: "exam-chemistry-m2-04",
        difficulty: "core",
        question:
          "How many moles are there in 22 g of carbon dioxide, CO2? (Mr of CO2 = 44)",
        options: ["0.25 mol", "0.5 mol", "1 mol", "2 mol"],
        answerIndex: 1,
        explanation:
          "Moles = mass / Mr = 22 / 44 = 0.5 mol.",
        hints: [
          "Use moles = mass divided by relative formula mass.",
          "Mr of CO2 = 12 + (2 x 16) = 44.",
          "22 / 44 = 0.5.",
        ],
        strategy:
          "Always identify the triangle relationship moles = mass / Mr first, then substitute the numbers.",
      },
      {
        id: "exam-chemistry-m2-05",
        difficulty: "core",
        question:
          "When balanced, the equation N2 + ? H2 gives 2 NH3. What is the coefficient of H2?",
        options: ["1", "2", "3", "4"],
        answerIndex: 2,
        explanation:
          "N2 + 3H2 -> 2NH3 balances: 2 N atoms each side and 6 H atoms each side. The coefficient of H2 is 3.",
        hints: [
          "There are 2 N and 6 H atoms in 2NH3.",
          "N2 supplies 2 nitrogen atoms already.",
          "Each H2 has 2 atoms, so 3 of them give 6 H.",
        ],
      },
      {
        id: "exam-chemistry-m2-06",
        difficulty: "challenge",
        question:
          "What mass of magnesium oxide is produced when 12 g of magnesium burns completely? (2Mg + O2 -> 2MgO; Ar: Mg = 24, O = 16)",
        options: ["10 g", "16 g", "20 g", "40 g"],
        answerIndex: 2,
        explanation:
          "Moles of Mg = 12 / 24 = 0.5 mol. From the 2:2 (i.e. 1:1) ratio, moles of MgO = 0.5 mol. Mr of MgO = 24 + 16 = 40, so mass = 0.5 x 40 = 20 g.",
        hints: [
          "First find moles of magnesium: mass / Ar.",
          "The mole ratio of Mg to MgO is 1:1.",
          "Mass of MgO = moles x Mr, with Mr = 40.",
        ],
        strategy:
          "Reacting-mass problems: convert to moles, apply the balanced ratio, then convert back to mass.",
      },
      {
        id: "exam-chemistry-m2-07",
        difficulty: "core",
        question:
          "What volume does 0.5 mol of any gas occupy at room temperature and pressure (r.t.p.)? (Molar gas volume = 24 dm3/mol)",
        options: ["6 dm3", "12 dm3", "24 dm3", "48 dm3"],
        answerIndex: 1,
        explanation:
          "Volume = moles x 24 = 0.5 x 24 = 12 dm3 at r.t.p.",
        hints: [
          "At r.t.p. one mole of any gas occupies 24 dm3.",
          "Volume = moles x molar gas volume.",
          "0.5 x 24 = 12.",
        ],
      },
      {
        id: "exam-chemistry-m2-08",
        difficulty: "core",
        question:
          "What is the concentration of a solution containing 0.2 mol of solute dissolved in 500 cm3 of solution?",
        options: ["0.1 mol/dm3", "0.2 mol/dm3", "0.4 mol/dm3", "4 mol/dm3"],
        answerIndex: 2,
        explanation:
          "500 cm3 = 0.5 dm3. Concentration = moles / volume = 0.2 / 0.5 = 0.4 mol/dm3.",
        hints: [
          "Convert the volume from cm3 to dm3 by dividing by 1000.",
          "Concentration = moles divided by volume in dm3.",
          "0.2 / 0.5 = 0.4.",
        ],
      },
      {
        id: "exam-chemistry-m2-09",
        difficulty: "challenge",
        question:
          "A compound contains 40 percent carbon, 6.7 percent hydrogen and 53.3 percent oxygen by mass. What is its empirical formula? (Ar: C = 12, H = 1, O = 16)",
        options: ["CHO", "CH2O", "C2H4O2", "CH3O"],
        answerIndex: 1,
        explanation:
          "Divide each percentage by its Ar: C = 40/12 = 3.33; H = 6.7/1 = 6.7; O = 53.3/16 = 3.33. Dividing by the smallest (3.33) gives C 1, H 2, O 1, so the empirical formula is CH2O.",
        hints: [
          "Divide each mass percentage by the relevant Ar to get a mole ratio.",
          "Then divide all the answers by the smallest of them.",
          "The simplest whole-number ratio of C:H:O is 1:2:1.",
        ],
        strategy:
          "Empirical formula method: percentage (or mass) divided by Ar, then divide all results by the smallest value to get the simplest ratio.",
      },
      {
        id: "exam-chemistry-m2-10",
        difficulty: "core",
        question:
          "In a titration, 25.0 cm3 of 0.10 mol/dm3 sodium hydroxide is exactly neutralised by hydrochloric acid: NaOH + HCl -> NaCl + H2O. How many moles of HCl reacted?",
        options: ["0.0025 mol", "0.025 mol", "0.25 mol", "0.0010 mol"],
        answerIndex: 0,
        explanation:
          "Moles of NaOH = concentration x volume in dm3 = 0.10 x (25.0/1000) = 0.10 x 0.025 = 0.0025 mol. The 1:1 ratio means 0.0025 mol of HCl reacted.",
        hints: [
          "Moles = concentration x volume in dm3.",
          "25.0 cm3 = 0.025 dm3.",
          "The NaOH:HCl ratio in the equation is 1:1.",
        ],
      },
      {
        id: "exam-chemistry-m2-11",
        difficulty: "warmup",
        question: "During electrolysis, where are positive ions (cations) attracted?",
        options: [
          "To the anode (positive electrode)",
          "To the cathode (negative electrode)",
          "They remain in the middle of the solution",
          "To both electrodes equally",
        ],
        answerIndex: 1,
        explanation:
          "Positive ions (cations) are attracted to the negatively charged cathode, where they gain electrons and are reduced. Negative ions move to the anode.",
      },
      {
        id: "exam-chemistry-m2-12",
        difficulty: "core",
        question:
          "What is produced at the cathode during the electrolysis of molten lead(II) bromide, PbBr2?",
        options: ["Bromine gas", "Lead metal", "Hydrogen gas", "Oxygen gas"],
        answerIndex: 1,
        explanation:
          "At the cathode, Pb2+ ions gain electrons and are reduced to lead metal: Pb2+ + 2e- -> Pb. Bromine gas forms at the anode.",
        hints: [
          "The cathode is negative, so it attracts positive ions.",
          "The positive ion in PbBr2 is Pb2+.",
          "Cations gain electrons (reduction) to form the metal.",
        ],
      },
      {
        id: "exam-chemistry-m2-13",
        difficulty: "challenge",
        question:
          "During the electrolysis of concentrated aqueous sodium chloride (brine), which products form at the anode and cathode respectively?",
        options: [
          "Hydrogen at the anode and chlorine at the cathode",
          "Chlorine at the anode and hydrogen at the cathode",
          "Oxygen at the anode and sodium at the cathode",
          "Chlorine at the anode and sodium at the cathode",
        ],
        answerIndex: 1,
        explanation:
          "In concentrated brine, chloride ions are discharged at the anode to give chlorine gas, and at the cathode hydrogen is discharged in preference to sodium because hydrogen is less reactive. Sodium hydroxide remains in solution.",
        hints: [
          "Concentrated chloride solution favours discharge of chlorine at the anode.",
          "At the cathode, the less reactive ion (H+ vs Na+) is discharged.",
          "Sodium is very reactive, so hydrogen is produced instead.",
        ],
        strategy:
          "For aqueous electrolysis, weigh up the ions present and the reactivity series: less reactive ions are discharged in preference at each electrode.",
      },
      {
        id: "exam-chemistry-m2-14",
        difficulty: "core",
        question:
          "Why is cryolite added to aluminium oxide in the electrolytic extraction of aluminium?",
        options: [
          "To increase the melting point so it stays solid",
          "To lower the melting point and reduce energy costs",
          "To act as the negative electrode",
          "To react with the aluminium produced",
        ],
        answerIndex: 1,
        explanation:
          "Pure aluminium oxide melts at a very high temperature. Dissolving it in molten cryolite lowers the operating temperature, reducing the large amount of energy (and cost) needed for electrolysis.",
        hints: [
          "Aluminium oxide has a very high melting point.",
          "Heating to that temperature uses huge amounts of energy.",
          "Cryolite makes the mixture melt at a lower temperature.",
        ],
      },
      {
        id: "exam-chemistry-m2-15",
        difficulty: "core",
        question:
          "In the electrolysis of dilute sulfuric acid using inert electrodes, the gases hydrogen and oxygen are produced. In what ratio (by volume) are they made?",
        options: [
          "1 part hydrogen to 1 part oxygen",
          "2 parts hydrogen to 1 part oxygen",
          "1 part hydrogen to 2 parts oxygen",
          "3 parts hydrogen to 1 part oxygen",
        ],
        answerIndex: 1,
        explanation:
          "This is effectively the electrolysis of water: 2H2O -> 2H2 + O2. Twice as much hydrogen as oxygen is produced by volume, a 2:1 ratio.",
        hints: [
          "Overall this splits water into hydrogen and oxygen.",
          "Water is H2O, with twice as many H atoms as O atoms.",
          "The volume ratio mirrors 2H2 : O2.",
        ],
      },
      {
        id: "exam-chemistry-m2-16",
        difficulty: "warmup",
        question: "What name is given to a reaction that releases heat energy to the surroundings?",
        options: ["Endothermic", "Exothermic", "Electrolytic", "Reversible"],
        answerIndex: 1,
        explanation:
          "An exothermic reaction transfers heat energy to the surroundings, causing the temperature to rise. Combustion and neutralisation are common examples.",
      },
      {
        id: "exam-chemistry-m2-17",
        difficulty: "core",
        question:
          "In an exothermic reaction, how does the energy of the products compare with the energy of the reactants?",
        options: [
          "Products have more energy than reactants",
          "Products have less energy than reactants",
          "Products and reactants have equal energy",
          "It depends on the catalyst used",
        ],
        answerIndex: 1,
        explanation:
          "In an exothermic reaction energy is released, so the products have less stored chemical energy than the reactants. The energy difference is given out, usually as heat, making the enthalpy change negative.",
        hints: [
          "Exothermic reactions give out energy.",
          "Energy released comes from the chemicals losing stored energy.",
          "So the products end up lower in energy than the reactants.",
        ],
      },
      {
        id: "exam-chemistry-m2-18",
        difficulty: "challenge",
        question:
          "Which statement correctly describes bond breaking and bond making in terms of energy?",
        options: [
          "Bond breaking releases energy; bond making absorbs energy",
          "Bond breaking absorbs energy; bond making releases energy",
          "Both bond breaking and bond making release energy",
          "Both bond breaking and bond making absorb energy",
        ],
        answerIndex: 1,
        explanation:
          "Breaking bonds requires energy (endothermic); forming bonds releases energy (exothermic). If more energy is released making bonds than is used breaking them, the overall reaction is exothermic.",
        hints: [
          "Think about whether you need to put energy in to break a bond.",
          "Bond breaking is endothermic; bond making is exothermic.",
          "Compare the totals to decide the overall energy change.",
        ],
        strategy:
          "Energy change = energy to break bonds (in) minus energy released making bonds (out). A negative result means exothermic.",
      },
      {
        id: "exam-chemistry-m2-19",
        difficulty: "core",
        question:
          "Which everyday process is an example of an endothermic change?",
        options: [
          "Burning natural gas",
          "Neutralising acid with alkali",
          "A self-cooling instant cold pack dissolving a salt",
          "Respiration in cells",
        ],
        answerIndex: 2,
        explanation:
          "An instant cold pack works because dissolving certain salts is endothermic, absorbing heat from the surroundings and lowering the temperature. The other options release energy and are exothermic.",
        hints: [
          "Endothermic changes take in heat and feel cold.",
          "Which option produces a cooling effect?",
          "Combustion, neutralisation and respiration all release energy.",
        ],
      },
      {
        id: "exam-chemistry-m2-20",
        difficulty: "challenge",
        question:
          "A reaction uses 1500 kJ to break bonds and releases 1800 kJ when new bonds form. What is the overall energy change?",
        options: [
          "+300 kJ, endothermic",
          "-300 kJ, exothermic",
          "+3300 kJ, endothermic",
          "-3300 kJ, exothermic",
        ],
        answerIndex: 1,
        explanation:
          "Overall energy change = energy in (breaking) minus energy out (making) = 1500 - 1800 = -300 kJ. The negative sign and the fact that more energy is released than absorbed mean the reaction is exothermic.",
        hints: [
          "Energy change = bonds broken (in) minus bonds made (out).",
          "1500 - 1800 = -300.",
          "A negative value means exothermic.",
        ],
      },
      {
        id: "exam-chemistry-m2-21",
        difficulty: "core",
        question:
          "How many molecules (approximately) are there in 2 mol of any substance? (Avogadro constant = 6.0 x 10^23 per mol)",
        options: [
          "3.0 x 10^23",
          "6.0 x 10^23",
          "1.2 x 10^24",
          "1.2 x 10^23",
        ],
        answerIndex: 2,
        explanation:
          "Number of particles = moles x Avogadro constant = 2 x 6.0 x 10^23 = 1.2 x 10^24.",
        hints: [
          "One mole contains 6.0 x 10^23 particles.",
          "Multiply the number of moles by the Avogadro constant.",
          "2 x 6.0 x 10^23 = 1.2 x 10^24.",
        ],
      },
      {
        id: "exam-chemistry-m2-22",
        difficulty: "core",
        question:
          "A reaction has a theoretical yield of 8.0 g but only 6.0 g is actually obtained. What is the percentage yield?",
        options: ["48 percent", "60 percent", "75 percent", "133 percent"],
        answerIndex: 2,
        explanation:
          "Percentage yield = (actual yield / theoretical yield) x 100 = (6.0 / 8.0) x 100 = 75 percent.",
        hints: [
          "Percentage yield = actual divided by theoretical, times 100.",
          "Actual = 6.0 g, theoretical = 8.0 g.",
          "(6.0 / 8.0) x 100 = 75.",
        ],
      },
      {
        id: "exam-chemistry-m2-23",
        difficulty: "warmup",
        question:
          "What is the charge on a sulfate ion?",
        options: ["1-", "2-", "1+", "3-"],
        answerIndex: 1,
        explanation:
          "The sulfate ion is SO4 with a 2- charge. This is why sodium sulfate is Na2SO4, needing two 1+ sodium ions to balance it.",
      },
      {
        id: "exam-chemistry-m2-24",
        difficulty: "core",
        question:
          "Which process at an electrode is described as oxidation?",
        options: [
          "Gain of electrons at the cathode",
          "Loss of electrons at the anode",
          "Gain of protons at the anode",
          "Loss of neutrons at the cathode",
        ],
        answerIndex: 1,
        explanation:
          "Oxidation is loss of electrons. At the anode, negative ions lose electrons, so oxidation occurs there. Reduction (gain of electrons) occurs at the cathode.",
        hints: [
          "Remember OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons).",
          "The anode is where electrons are lost.",
          "So oxidation happens at the anode.",
        ],
      },
      {
        id: "exam-chemistry-m2-25",
        difficulty: "challenge",
        question:
          "25.0 cm3 of sodium hydroxide is neutralised by 20.0 cm3 of 0.10 mol/dm3 hydrochloric acid (1:1 reaction). What is the concentration of the sodium hydroxide?",
        options: ["0.08 mol/dm3", "0.10 mol/dm3", "0.125 mol/dm3", "0.16 mol/dm3"],
        answerIndex: 0,
        explanation:
          "Moles HCl = 0.10 x (20.0/1000) = 0.0020 mol. The 1:1 ratio gives 0.0020 mol NaOH. Concentration of NaOH = moles / volume = 0.0020 / (25.0/1000) = 0.0020 / 0.025 = 0.08 mol/dm3.",
        hints: [
          "Find moles of acid first: concentration x volume in dm3.",
          "Use the 1:1 ratio to get moles of NaOH.",
          "Divide moles of NaOH by its volume in dm3 (0.025).",
        ],
        strategy:
          "Titration calculations: moles of known reagent, apply the equation ratio, then divide by the volume of the unknown to get its concentration.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // PAPER 3 — Rates, equilibria, acids/bases/salts, chemical analysis
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "exam-chemistry-mcq-3",
    title: "Paper 3 — Multiple Choice",
    description:
      "Whole-subject mock (Paper 3 of 4). Focus on rates of reaction, reversible reactions and equilibrium, acids, bases and salt preparation, and qualitative chemical analysis and tests.",
    questions: [
      {
        id: "exam-chemistry-m3-01",
        difficulty: "warmup",
        question:
          "Which change would generally increase the rate of a reaction between a solid and a solution?",
        options: [
          "Using larger lumps of the solid",
          "Lowering the temperature",
          "Increasing the concentration of the solution",
          "Decreasing the surface area of the solid",
        ],
        answerIndex: 2,
        explanation:
          "Increasing concentration means more reactant particles per unit volume, so there are more frequent collisions and the reaction rate increases.",
      },
      {
        id: "exam-chemistry-m3-02",
        difficulty: "warmup",
        question: "What is the role of a catalyst in a chemical reaction?",
        options: [
          "It increases the rate by providing an alternative pathway with lower activation energy",
          "It increases the yield of product",
          "It is used up during the reaction",
          "It raises the activation energy",
        ],
        answerIndex: 0,
        explanation:
          "A catalyst speeds up a reaction by providing an alternative pathway with a lower activation energy. It is not used up and does not change the amount of product formed.",
      },
      {
        id: "exam-chemistry-m3-03",
        difficulty: "core",
        question:
          "According to collision theory, why does increasing temperature increase reaction rate?",
        options: [
          "Particles collide less often but harder",
          "Particles move faster, colliding more frequently and with more energy",
          "The activation energy is lowered",
          "More catalyst is produced",
        ],
        answerIndex: 1,
        explanation:
          "Higher temperature gives particles more kinetic energy, so they move faster and collide more often. A greater proportion of collisions also have energy above the activation energy, so successful collisions increase.",
        hints: [
          "Temperature affects how fast particles move.",
          "Faster particles collide more often and harder.",
          "More collisions exceed the activation energy.",
        ],
      },
      {
        id: "exam-chemistry-m3-04",
        difficulty: "core",
        question:
          "In an experiment measuring gas produced over time, the curve becomes less steep and eventually flat. What does the flat part indicate?",
        options: [
          "The reaction is speeding up",
          "The reaction has stopped because a reactant has run out",
          "A catalyst has been added",
          "The temperature has increased",
        ],
        answerIndex: 1,
        explanation:
          "The gradient of a volume-time graph shows the rate. A flat line means no more gas is produced, so the reaction has finished, usually because a reactant (the limiting one) has been used up.",
        hints: [
          "The steepness of the line shows how fast gas is made.",
          "A flat line means the volume is no longer changing.",
          "No change means the reaction has stopped.",
        ],
      },
      {
        id: "exam-chemistry-m3-05",
        difficulty: "challenge",
        question:
          "Two experiments use the same mass of marble (calcium carbonate) and the same volume and concentration of acid, but experiment B uses powder instead of chips. How does experiment B compare?",
        options: [
          "Faster initial rate and a larger final volume of gas",
          "Faster initial rate but the same final volume of gas",
          "Slower initial rate and the same final volume of gas",
          "Same initial rate but a larger final volume of gas",
        ],
        answerIndex: 1,
        explanation:
          "Powder has a larger surface area, so the initial rate is faster. Because the amount of reactants is unchanged, the final volume of gas produced is the same.",
        hints: [
          "Powder has more exposed surface than chips.",
          "Surface area affects rate, not the total amount of product.",
          "Same reactants means the same final gas volume.",
        ],
        strategy:
          "Separate rate (how fast) from yield (how much): surface area, temperature and concentration change the rate, but the total product depends on the quantity of reactants.",
      },
      {
        id: "exam-chemistry-m3-06",
        difficulty: "warmup",
        question:
          "What does the symbol of two half-arrows pointing in opposite directions represent in a chemical equation?",
        options: [
          "A reaction that has stopped",
          "A reversible reaction",
          "A combustion reaction",
          "A precipitation reaction",
        ],
        answerIndex: 1,
        explanation:
          "Two opposing half-arrows indicate a reversible reaction, where products can react to re-form the reactants. At equilibrium the forward and backward reactions occur at the same rate.",
      },
      {
        id: "exam-chemistry-m3-07",
        difficulty: "core",
        question:
          "At dynamic equilibrium in a closed system, which statement is true?",
        options: [
          "Both forward and backward reactions have stopped",
          "The forward and backward reactions occur at equal rates",
          "All the reactants have been used up",
          "Only the forward reaction occurs",
        ],
        answerIndex: 1,
        explanation:
          "At dynamic equilibrium the forward and backward reactions continue but at equal rates, so the concentrations of reactants and products stay constant.",
        hints: [
          "Dynamic means the reactions are still happening.",
          "Equilibrium means concentrations stay constant.",
          "This requires the two rates to be equal.",
        ],
      },
      {
        id: "exam-chemistry-m3-08",
        difficulty: "challenge",
        question:
          "The Haber process is N2 + 3H2 reversible 2NH3 and is exothermic in the forward direction. Increasing the pressure shifts the equilibrium which way, and why?",
        options: [
          "Towards the reactants, because there are fewer gas molecules on that side",
          "Towards the products, because there are fewer gas molecules on that side",
          "It has no effect because gases are involved",
          "Towards the reactants, because the forward reaction is exothermic",
        ],
        answerIndex: 1,
        explanation:
          "Increasing pressure shifts the equilibrium to the side with fewer gas molecules. There are 4 molecules of gas on the left (1 + 3) and only 2 on the right, so higher pressure favours the products (ammonia).",
        hints: [
          "Count the moles of gas on each side.",
          "Higher pressure favours the side with fewer gas molecules.",
          "Left has 4 (N2 + 3H2); right has 2 (2NH3).",
        ],
        strategy:
          "For gas equilibria, count gas moles each side: increased pressure shifts towards fewer moles; temperature shifts depend on which direction is exothermic.",
      },
      {
        id: "exam-chemistry-m3-09",
        difficulty: "core",
        question:
          "What are the typical conditions used in the Haber process for manufacturing ammonia?",
        options: [
          "About 450 degrees C, 200 atmospheres, iron catalyst",
          "About 25 degrees C, 1 atmosphere, platinum catalyst",
          "About 1000 degrees C, 1 atmosphere, no catalyst",
          "About 450 degrees C, 1 atmosphere, nickel catalyst",
        ],
        answerIndex: 0,
        explanation:
          "Industrial conditions for the Haber process are around 450 degrees C, about 200 atmospheres pressure, and an iron catalyst. These represent a compromise between rate, yield and cost.",
        hints: [
          "The process needs a high pressure to favour ammonia.",
          "The catalyst used is iron.",
          "A moderate-to-high temperature near 450 degrees C is used as a compromise.",
        ],
      },
      {
        id: "exam-chemistry-m3-10",
        difficulty: "warmup",
        question: "What is the approximate pH of a strongly acidic solution?",
        options: ["pH 1", "pH 7", "pH 9", "pH 14"],
        answerIndex: 0,
        explanation:
          "A strongly acidic solution has a low pH, around 1. pH 7 is neutral and values above 7 are alkaline, with pH 14 strongly alkaline.",
      },
      {
        id: "exam-chemistry-m3-11",
        difficulty: "core",
        question:
          "Which ion is responsible for the acidic properties of all acids in aqueous solution?",
        options: ["OH-", "H+", "Na+", "Cl-"],
        answerIndex: 1,
        explanation:
          "Acids produce hydrogen ions, H+, in aqueous solution. The concentration of H+ ions determines acidity; OH- ions are responsible for alkalinity.",
        hints: [
          "Acids release a particular ion when dissolved in water.",
          "The ion is positively charged.",
          "It is the hydrogen ion, H+.",
        ],
      },
      {
        id: "exam-chemistry-m3-12",
        difficulty: "core",
        question:
          "Which products are formed when a metal carbonate reacts with a dilute acid?",
        options: [
          "Salt and hydrogen only",
          "Salt, water and carbon dioxide",
          "Salt and water only",
          "Hydrogen and carbon dioxide only",
        ],
        answerIndex: 1,
        explanation:
          "Acid plus metal carbonate gives a salt, water and carbon dioxide. For example, CaCO3 + 2HCl -> CaCl2 + H2O + CO2.",
        hints: [
          "Carbonates fizz with acids, releasing a gas.",
          "The gas given off is carbon dioxide.",
          "The other products are a salt and water.",
        ],
      },
      {
        id: "exam-chemistry-m3-13",
        difficulty: "core",
        question:
          "What is the difference between a strong acid and a weak acid?",
        options: [
          "A strong acid is more concentrated than a weak acid",
          "A strong acid fully ionises in water; a weak acid only partially ionises",
          "A strong acid contains more hydrogen atoms",
          "A weak acid cannot react with metals",
        ],
        answerIndex: 1,
        explanation:
          "Strength refers to the degree of ionisation, not concentration. A strong acid such as HCl fully ionises in water; a weak acid such as ethanoic acid only partially ionises, giving fewer H+ ions for the same concentration.",
        hints: [
          "Strength is about ionisation, not how concentrated it is.",
          "Strong acids ionise completely.",
          "Weak acids ionise only partially.",
        ],
      },
      {
        id: "exam-chemistry-m3-14",
        difficulty: "challenge",
        question:
          "Which method is most suitable for preparing a pure, dry sample of an insoluble salt such as barium sulfate?",
        options: [
          "Titration of two solutions",
          "Electrolysis of a molten salt",
          "Precipitation by mixing two soluble salt solutions, then filtering",
          "Adding excess metal to an acid",
        ],
        answerIndex: 2,
        explanation:
          "Insoluble salts are made by precipitation: mixing two solutions that each contain one of the required ions. The precipitate is filtered off, washed and dried. Barium sulfate forms from barium chloride and a sulfate solution.",
        hints: [
          "The salt is insoluble, so it will form a solid in solution.",
          "Mixing two soluble salts can create an insoluble product.",
          "The solid is then filtered, washed and dried.",
        ],
        strategy:
          "Choose the salt-preparation route by solubility: soluble salts by titration or excess-solid-and-filter; insoluble salts by precipitation.",
      },
      {
        id: "exam-chemistry-m3-15",
        difficulty: "core",
        question:
          "An oxide dissolves in water to give a solution of pH 12. What type of oxide is it likely to be?",
        options: [
          "An acidic non-metal oxide",
          "A basic metal oxide",
          "A neutral oxide",
          "An amphoteric oxide",
        ],
        answerIndex: 1,
        explanation:
          "A pH of 12 is alkaline. Soluble metal oxides (such as sodium oxide) are basic and form alkaline solutions, so this is a basic metal oxide.",
        hints: [
          "pH 12 is well above 7, so the solution is alkaline.",
          "Non-metal oxides tend to be acidic.",
          "Metal oxides tend to be basic.",
        ],
      },
      {
        id: "exam-chemistry-m3-16",
        difficulty: "warmup",
        question:
          "Which gas turns damp red litmus paper blue?",
        options: ["Carbon dioxide", "Hydrogen", "Ammonia", "Chlorine"],
        answerIndex: 2,
        explanation:
          "Ammonia is alkaline and turns damp red litmus paper blue. Chlorine bleaches litmus, carbon dioxide turns limewater milky, and hydrogen gives a squeaky pop.",
      },
      {
        id: "exam-chemistry-m3-17",
        difficulty: "core",
        question:
          "A few drops of acidified silver nitrate solution are added to a halide solution and a cream precipitate forms. Which halide ion is present?",
        options: ["Chloride", "Bromide", "Iodide", "Sulfate"],
        answerIndex: 1,
        explanation:
          "With acidified silver nitrate: chloride gives a white precipitate, bromide a cream precipitate, and iodide a yellow precipitate. A cream precipitate indicates bromide ions.",
        hints: [
          "Silver nitrate tests for halide ions by precipitate colour.",
          "White means chloride, yellow means iodide.",
          "Cream is between them, indicating bromide.",
        ],
      },
      {
        id: "exam-chemistry-m3-18",
        difficulty: "core",
        question:
          "What is observed when carbon dioxide gas is bubbled through limewater?",
        options: [
          "It turns limewater blue",
          "It turns limewater milky/cloudy white",
          "It bleaches the limewater",
          "It produces a squeaky pop",
        ],
        answerIndex: 1,
        explanation:
          "Carbon dioxide turns limewater (calcium hydroxide solution) milky or cloudy white due to the formation of insoluble calcium carbonate. This is the standard test for carbon dioxide.",
        hints: [
          "Limewater is the standard test for carbon dioxide.",
          "An insoluble white solid forms.",
          "The result is described as milky or cloudy.",
        ],
      },
      {
        id: "exam-chemistry-m3-19",
        difficulty: "challenge",
        question:
          "A solution gives a brick-red colour in a flame test and forms a white precipitate with sodium hydroxide that does not dissolve in excess. Which cation is present?",
        options: ["Calcium (Ca2+)", "Copper (Cu2+)", "Iron(II) (Fe2+)", "Zinc (Zn2+)"],
        answerIndex: 0,
        explanation:
          "A brick-red flame colour is characteristic of calcium ions. Calcium also gives a white precipitate with sodium hydroxide that is insoluble in excess, confirming Ca2+.",
        hints: [
          "Flame colour identifies the metal: brick-red is a key clue.",
          "Copper gives blue-green; the precipitate colours differ too.",
          "Brick-red flame points to calcium.",
        ],
        strategy:
          "Combine tests: use flame colour and the colour/behaviour of the hydroxide precipitate together to pin down the cation.",
      },
      {
        id: "exam-chemistry-m3-20",
        difficulty: "core",
        question:
          "How can you test for the presence of water and confirm that it is pure?",
        options: [
          "Anhydrous copper(II) sulfate turns blue; boils at exactly 100 degrees C",
          "Limewater turns milky; melts at 0 degrees C",
          "It turns red litmus blue; boils at 50 degrees C",
          "It gives a lilac flame; boils at 78 degrees C",
        ],
        answerIndex: 0,
        explanation:
          "Water turns anhydrous (white) copper(II) sulfate blue, or turns blue cobalt chloride paper pink. To confirm it is pure water, it should boil at exactly 100 degrees C (and freeze at 0 degrees C) at normal pressure.",
        hints: [
          "There is a chemical test using a white anhydrous salt.",
          "Anhydrous copper(II) sulfate goes from white to blue with water.",
          "Purity is confirmed by an exact boiling point of 100 degrees C.",
        ],
      },
      {
        id: "exam-chemistry-m3-21",
        difficulty: "core",
        question:
          "Adding excess sodium hydroxide solution to a salt solution gives a green precipitate. Which cation is present?",
        options: ["Iron(III) (Fe3+)", "Iron(II) (Fe2+)", "Copper (Cu2+)", "Aluminium (Al3+)"],
        answerIndex: 1,
        explanation:
          "Iron(II) ions give a green precipitate of iron(II) hydroxide with sodium hydroxide. Iron(III) gives a red-brown precipitate, copper gives a blue precipitate, and aluminium gives a white precipitate that dissolves in excess.",
        hints: [
          "The precipitate is a metal hydroxide; its colour identifies the metal.",
          "Iron(III) hydroxide is red-brown.",
          "Green indicates iron(II).",
        ],
      },
      {
        id: "exam-chemistry-m3-22",
        difficulty: "warmup",
        question:
          "Which gas relights a glowing splint?",
        options: ["Hydrogen", "Carbon dioxide", "Oxygen", "Ammonia"],
        answerIndex: 2,
        explanation:
          "Oxygen relights a glowing splint because it supports combustion. Hydrogen gives a squeaky pop with a lit splint, and carbon dioxide extinguishes a lit splint.",
      },
      {
        id: "exam-chemistry-m3-23",
        difficulty: "core",
        question:
          "Why is a catalyst used in the contact process for making sulfuric acid?",
        options: [
          "To shift the equilibrium and increase yield",
          "To speed up the reaction so equilibrium is reached faster",
          "To lower the temperature needed below room temperature",
          "To remove the need for sulfur dioxide",
        ],
        answerIndex: 1,
        explanation:
          "A catalyst (vanadium(V) oxide) speeds up the rate at which equilibrium is reached but does not change the position of equilibrium or the final yield. It makes the process faster and more economical.",
        hints: [
          "A catalyst affects rate, not the position of equilibrium.",
          "It lets equilibrium be reached more quickly.",
          "The vanadium(V) oxide catalyst speeds the reaction up.",
        ],
      },
      {
        id: "exam-chemistry-m3-24",
        difficulty: "challenge",
        question:
          "Adding a few drops of sodium hydroxide to a copper salt gives a light blue precipitate. Adding ammonia drop by drop then in excess gives a deep blue solution. What does the deep blue solution indicate?",
        options: [
          "The original ion was iron(II)",
          "Copper(II) ions are present, confirmed by the deep blue with excess ammonia",
          "The solution is now alkaline only",
          "A gas has been produced",
        ],
        answerIndex: 1,
        explanation:
          "Copper(II) ions give a light blue precipitate with sodium hydroxide. With ammonia, the precipitate first forms then redissolves in excess to give a characteristic deep blue solution, confirming copper(II) ions.",
        hints: [
          "Light blue precipitate already suggests copper(II).",
          "Copper(II) hydroxide redissolves in excess ammonia.",
          "The deep blue solution confirms copper(II).",
        ],
        strategy:
          "Use the behaviour of a hydroxide precipitate with excess ammonia as a confirming test, not just the initial sodium hydroxide result.",
      },
      {
        id: "exam-chemistry-m3-25",
        difficulty: "core",
        question:
          "Which set of conditions would give the fastest reaction between magnesium and hydrochloric acid?",
        options: [
          "Large magnesium ribbon, 0.5 mol/dm3 acid, 20 degrees C",
          "Magnesium powder, 2 mol/dm3 acid, 40 degrees C",
          "Magnesium powder, 0.5 mol/dm3 acid, 20 degrees C",
          "Large magnesium ribbon, 2 mol/dm3 acid, 40 degrees C",
        ],
        answerIndex: 1,
        explanation:
          "The fastest reaction combines the largest surface area (powder), the highest concentration (2 mol/dm3) and the highest temperature (40 degrees C). All three factors increase the frequency and energy of collisions.",
        hints: [
          "Consider surface area, concentration and temperature together.",
          "Powder beats ribbon; higher concentration and temperature both help.",
          "Pick the option that maximises all three factors.",
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // PAPER 4 — Metals/reactivity/extraction, organic chemistry, environmental
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "exam-chemistry-mcq-4",
    title: "Paper 4 — Multiple Choice",
    description:
      "Whole-subject mock (Paper 4 of 4). Focus on the reactivity series, extraction and uses of metals, organic chemistry (fuels, homologous series, reactions and polymers) and the atmosphere and environmental chemistry.",
    questions: [
      {
        id: "exam-chemistry-m4-01",
        difficulty: "warmup",
        question:
          "Which metal is the most reactive of the following?",
        options: ["Copper", "Iron", "Potassium", "Gold"],
        answerIndex: 2,
        explanation:
          "Potassium is a Group I alkali metal and is the most reactive of these. Gold is one of the least reactive metals, while copper and iron are in between.",
      },
      {
        id: "exam-chemistry-m4-02",
        difficulty: "warmup",
        question:
          "Why are gold and platinum found in the Earth as the uncombined (native) metals?",
        options: [
          "They are very reactive",
          "They are very unreactive",
          "They are magnetic",
          "They have low melting points",
        ],
        answerIndex: 1,
        explanation:
          "Gold and platinum are very unreactive, so they do not readily form compounds and can be found as the free, uncombined metal in the Earth.",
      },
      {
        id: "exam-chemistry-m4-03",
        difficulty: "core",
        question:
          "Which metal can be extracted from its oxide by heating with carbon (reduction by carbon)?",
        options: ["Aluminium", "Calcium", "Zinc", "Sodium"],
        answerIndex: 2,
        explanation:
          "Metals less reactive than carbon (such as zinc, iron and copper) can be extracted by reduction with carbon. Metals more reactive than carbon, like aluminium, calcium and sodium, must be extracted by electrolysis.",
        hints: [
          "Carbon can only displace metals less reactive than itself.",
          "Very reactive metals (above carbon) need electrolysis.",
          "Zinc is below carbon in the reactivity series.",
        ],
      },
      {
        id: "exam-chemistry-m4-04",
        difficulty: "core",
        question:
          "In the blast furnace, what is the main reducing agent that removes oxygen from iron(III) oxide?",
        options: ["Oxygen", "Carbon monoxide", "Calcium carbonate", "Nitrogen"],
        answerIndex: 1,
        explanation:
          "Carbon monoxide is the main reducing agent: Fe2O3 + 3CO -> 2Fe + 3CO2. The carbon monoxide is produced from coke and limited oxygen in the furnace.",
        hints: [
          "A reducing agent removes oxygen from the iron oxide.",
          "It is a gas formed from coke in the furnace.",
          "Carbon monoxide reacts with iron(III) oxide to give iron.",
        ],
      },
      {
        id: "exam-chemistry-m4-05",
        difficulty: "challenge",
        question:
          "An iron nail is attached to a block of zinc and left in damp conditions. Why does this protect the iron from rusting?",
        options: [
          "The zinc coats the iron with paint",
          "Zinc is more reactive and acts as a sacrificial metal, being oxidised instead of the iron",
          "Zinc is less reactive so the iron is protected",
          "Zinc prevents oxygen from reaching the surface only",
        ],
        answerIndex: 1,
        explanation:
          "This is sacrificial protection. Zinc is more reactive than iron, so it loses electrons (is oxidised) in preference to the iron. The zinc corrodes instead of the iron, protecting it.",
        hints: [
          "Compare the reactivity of zinc and iron.",
          "The more reactive metal is oxidised first.",
          "Zinc is sacrificed so the iron is protected.",
        ],
        strategy:
          "For corrosion protection questions, decide whether the method is a barrier (paint, oil) or sacrificial (more reactive metal corroding instead).",
      },
      {
        id: "exam-chemistry-m4-06",
        difficulty: "core",
        question:
          "What are the two conditions necessary for iron to rust?",
        options: [
          "Oxygen and carbon dioxide",
          "Water and oxygen",
          "Water and nitrogen",
          "Heat and oxygen only",
        ],
        answerIndex: 1,
        explanation:
          "Rusting of iron requires both water and oxygen. Removing either, for example by keeping the iron dry or excluding air, prevents rust forming. Salt speeds up rusting but is not essential.",
        hints: [
          "Rusting is the oxidation of iron in the presence of moisture.",
          "Two substances must both be present.",
          "They are water and oxygen.",
        ],
      },
      {
        id: "exam-chemistry-m4-07",
        difficulty: "core",
        question:
          "Why is aluminium used for aircraft bodies despite being fairly reactive?",
        options: [
          "It is very dense and heavy",
          "It is low density and has a protective oxide layer that resists corrosion",
          "It is magnetic and easy to weld",
          "It reacts rapidly with air to stay shiny",
        ],
        answerIndex: 1,
        explanation:
          "Aluminium has a low density (light) and forms a thin, tough layer of aluminium oxide on its surface that prevents further corrosion. These properties make it ideal for aircraft.",
        hints: [
          "Aircraft need to be as light as possible.",
          "Aluminium has a low density.",
          "A surface oxide layer protects it from further reaction.",
        ],
      },
      {
        id: "exam-chemistry-m4-08",
        difficulty: "warmup",
        question:
          "What is the general name for the family of compounds with similar properties and the same general formula, such as the alkanes?",
        options: [
          "An isotope series",
          "A homologous series",
          "An allotrope set",
          "A reactivity series",
        ],
        answerIndex: 1,
        explanation:
          "A homologous series is a family of organic compounds with the same general formula, similar chemical properties, and a gradual change in physical properties. The alkanes and alkenes are examples.",
      },
      {
        id: "exam-chemistry-m4-09",
        difficulty: "core",
        question:
          "Which is the correct molecular formula for the alkane propane?",
        options: ["C3H6", "C3H8", "C2H6", "C4H10"],
        answerIndex: 1,
        explanation:
          "Alkanes follow the general formula CnH(2n+2). For propane, n = 3, so the formula is C3H(2x3+2) = C3H8.",
        hints: [
          "Alkanes have the general formula CnH(2n+2).",
          "Propane has 3 carbon atoms, so n = 3.",
          "2 x 3 + 2 = 8 hydrogen atoms.",
        ],
      },
      {
        id: "exam-chemistry-m4-10",
        difficulty: "core",
        question:
          "Which chemical test distinguishes an alkene from an alkane?",
        options: [
          "Alkenes turn limewater milky",
          "Alkenes decolourise bromine water; alkanes do not (without UV light)",
          "Alkanes decolourise bromine water; alkenes do not",
          "Alkenes give a squeaky pop with a lit splint",
        ],
        answerIndex: 1,
        explanation:
          "Alkenes contain a carbon-carbon double bond and undergo a rapid addition reaction with bromine water, decolourising it from orange to colourless. Alkanes do not react with bromine water under normal conditions.",
        hints: [
          "Alkenes have a reactive carbon-carbon double bond.",
          "Bromine water is the standard test.",
          "Alkenes turn orange bromine water colourless.",
        ],
      },
      {
        id: "exam-chemistry-m4-11",
        difficulty: "challenge",
        question:
          "Long-chain alkanes can be broken into smaller, more useful molecules. Which equation represents cracking?",
        options: [
          "C2H4 + H2O -> C2H5OH",
          "C10H22 -> C8H18 + C2H4",
          "CH4 + 2O2 -> CO2 + 2H2O",
          "C2H4 + Br2 -> C2H4Br2",
        ],
        answerIndex: 1,
        explanation:
          "Cracking breaks a large alkane into a smaller alkane plus an alkene: C10H22 -> C8H18 + C2H4. Both sides have 10 carbon and 22 hydrogen atoms, so the equation balances. The other options are hydration, combustion and addition.",
        hints: [
          "Cracking splits one large molecule into smaller ones.",
          "It produces a smaller alkane and at least one alkene.",
          "Check the carbon and hydrogen atoms balance on each side.",
        ],
        strategy:
          "Identify reaction type by the change: cracking (one large to smaller + alkene), combustion (with O2 to CO2 and water), addition (across a double bond).",
      },
      {
        id: "exam-chemistry-m4-12",
        difficulty: "core",
        question:
          "What is the main product, besides carbon dioxide, when a hydrocarbon burns completely in plenty of oxygen?",
        options: ["Carbon monoxide", "Water", "Hydrogen", "Soot (carbon)"],
        answerIndex: 1,
        explanation:
          "Complete combustion of a hydrocarbon produces carbon dioxide and water. Carbon monoxide and soot are products of incomplete combustion when oxygen is limited.",
        hints: [
          "Complete combustion happens with plenty of oxygen.",
          "The carbon becomes carbon dioxide.",
          "The hydrogen in the fuel becomes water.",
        ],
      },
      {
        id: "exam-chemistry-m4-13",
        difficulty: "core",
        question:
          "Ethanol can be manufactured by fermentation. Which conditions are used?",
        options: [
          "Glucose with yeast, about 30 degrees C, no air",
          "Ethene with steam, 300 degrees C, catalyst",
          "Glucose burned in oxygen",
          "Ethene with bromine water",
        ],
        answerIndex: 0,
        explanation:
          "Fermentation uses an aqueous solution of sugar (glucose) with yeast at around 30 degrees C in the absence of air. The yeast enzymes convert glucose into ethanol and carbon dioxide. The second option describes hydration of ethene.",
        hints: [
          "Fermentation uses a living organism, yeast.",
          "It needs warm, anaerobic (no air) conditions.",
          "The temperature is around 30 degrees C to keep the enzymes active.",
        ],
      },
      {
        id: "exam-chemistry-m4-14",
        difficulty: "challenge",
        question:
          "Ethene molecules join together to form poly(ethene). What type of reaction and product is this?",
        options: [
          "Condensation polymerisation, releasing water",
          "Addition polymerisation, forming a single long-chain molecule with no other product",
          "Cracking, forming smaller alkanes",
          "Combustion, forming carbon dioxide",
        ],
        answerIndex: 1,
        explanation:
          "Many ethene (alkene) monomers add together across their double bonds to form one long poly(ethene) chain with no other product. This is addition polymerisation. Condensation polymerisation, by contrast, releases a small molecule such as water.",
        hints: [
          "Ethene has a carbon-carbon double bond that can open up.",
          "Monomers join with no small molecule lost.",
          "This is addition polymerisation.",
        ],
        strategy:
          "Distinguish addition (alkene monomers, double bond opens, no by-product) from condensation (two functional groups, small molecule like water released).",
      },
      {
        id: "exam-chemistry-m4-15",
        difficulty: "core",
        question:
          "Which functional group is present in the carboxylic acid ethanoic acid?",
        options: ["-OH (hydroxyl)", "-COOH (carboxyl)", "C=C (double bond)", "-O- (ether)"],
        answerIndex: 1,
        explanation:
          "Carboxylic acids contain the carboxyl functional group, -COOH. In ethanoic acid (CH3COOH) this group gives the molecule its acidic properties.",
        hints: [
          "Carboxylic acids are acidic organic compounds.",
          "Their functional group includes both C=O and O-H.",
          "It is written as -COOH.",
        ],
      },
      {
        id: "exam-chemistry-m4-16",
        difficulty: "warmup",
        question:
          "Which two gases make up most of clean, dry air?",
        options: [
          "Oxygen and carbon dioxide",
          "Nitrogen and oxygen",
          "Nitrogen and carbon dioxide",
          "Oxygen and argon",
        ],
        answerIndex: 1,
        explanation:
          "Clean dry air is about 78 percent nitrogen and 21 percent oxygen. The remaining 1 percent is mostly argon, with small amounts of carbon dioxide and other gases.",
      },
      {
        id: "exam-chemistry-m4-17",
        difficulty: "core",
        question:
          "How is the pollutant carbon monoxide formed, and why is it dangerous?",
        options: [
          "By complete combustion; it is harmless",
          "By incomplete combustion of fuels; it is toxic because it reduces the blood's ability to carry oxygen",
          "By electrolysis; it causes acid rain",
          "From nitrogen in the air; it depletes ozone",
        ],
        answerIndex: 1,
        explanation:
          "Carbon monoxide forms during incomplete combustion (limited oxygen). It is a toxic gas because it binds to haemoglobin, reducing the blood's capacity to carry oxygen around the body.",
        hints: [
          "Carbon monoxide forms when there is not enough oxygen to burn fully.",
          "It is a colourless, odourless toxic gas.",
          "It interferes with oxygen transport in the blood.",
        ],
      },
      {
        id: "exam-chemistry-m4-18",
        difficulty: "core",
        question:
          "Which gases dissolved in rainwater are the main cause of acid rain?",
        options: [
          "Carbon monoxide and methane",
          "Sulfur dioxide and oxides of nitrogen",
          "Nitrogen and argon",
          "Oxygen and water vapour",
        ],
        answerIndex: 1,
        explanation:
          "Acid rain is caused mainly by sulfur dioxide (from burning fossil fuels containing sulfur) and oxides of nitrogen (formed in engines), which dissolve in rainwater to form sulfuric and nitric acids.",
        hints: [
          "Acid rain comes from acidic non-metal oxides.",
          "One comes from sulfur impurities in fuels.",
          "The other is nitrogen oxides made in hot engines.",
        ],
      },
      {
        id: "exam-chemistry-m4-19",
        difficulty: "challenge",
        question:
          "How does a catalytic converter in a car reduce pollution?",
        options: [
          "It traps carbon dioxide as a solid",
          "It converts carbon monoxide and oxides of nitrogen into carbon dioxide and nitrogen",
          "It removes all carbon dioxide from the exhaust",
          "It increases the amount of sulfur dioxide produced",
        ],
        answerIndex: 1,
        explanation:
          "A catalytic converter uses metal catalysts to convert harmful gases into less harmful ones: carbon monoxide and oxides of nitrogen react together to form carbon dioxide and nitrogen. For example, 2CO + 2NO -> 2CO2 + N2.",
        hints: [
          "Catalytic converters change pollutant gases into less harmful gases.",
          "Carbon monoxide is oxidised; nitrogen oxides are reduced.",
          "The products are carbon dioxide and nitrogen.",
        ],
        strategy:
          "Track each pollutant to its safer product: CO becomes CO2, and NO/NO2 become harmless N2.",
      },
      {
        id: "exam-chemistry-m4-20",
        difficulty: "core",
        question:
          "Which statement about carbon dioxide and methane as greenhouse gases is correct?",
        options: [
          "They cool the Earth by reflecting sunlight",
          "They absorb and re-emit heat (infrared) radiation, contributing to global warming",
          "They destroy the ozone layer directly",
          "They are not present in the atmosphere",
        ],
        answerIndex: 1,
        explanation:
          "Carbon dioxide and methane are greenhouse gases: they absorb heat (infrared) radiated from the Earth's surface and re-emit some back, increasing the average temperature and contributing to global warming and climate change.",
        hints: [
          "Greenhouse gases trap heat energy.",
          "They absorb infrared radiation leaving the Earth.",
          "This raises the average surface temperature.",
        ],
      },
      {
        id: "exam-chemistry-m4-21",
        difficulty: "core",
        question:
          "Magnesium is added to copper(II) sulfate solution. What happens?",
        options: [
          "No reaction occurs",
          "Magnesium displaces copper, because magnesium is more reactive",
          "Copper displaces magnesium, because copper is more reactive",
          "Hydrogen gas is produced",
        ],
        answerIndex: 1,
        explanation:
          "Magnesium is more reactive than copper, so it displaces copper from copper(II) sulfate solution: Mg + CuSO4 -> MgSO4 + Cu. Copper metal is deposited and the blue colour fades.",
        hints: [
          "Compare the reactivity of magnesium and copper.",
          "A more reactive metal displaces a less reactive one from its salt.",
          "Magnesium is well above copper in the reactivity series.",
        ],
      },
      {
        id: "exam-chemistry-m4-22",
        difficulty: "warmup",
        question:
          "What is an alloy?",
        options: [
          "A pure metal element",
          "A mixture of a metal with one or more other elements",
          "A non-metal compound",
          "A type of acid",
        ],
        answerIndex: 1,
        explanation:
          "An alloy is a mixture of a metal with one or more other elements (often other metals or carbon). Alloys such as steel and brass are usually harder and more useful than the pure metals.",
      },
      {
        id: "exam-chemistry-m4-23",
        difficulty: "challenge",
        question:
          "Why is an alloy such as steel usually harder than the pure metal iron?",
        options: [
          "The added atoms are all the same size, so layers slide easily",
          "Different-sized atoms disrupt the regular layers, making it harder for them to slide",
          "Alloys contain covalent bonds",
          "Alloys have fewer delocalised electrons",
        ],
        answerIndex: 1,
        explanation:
          "In a pure metal, identical atoms form regular layers that can slide over each other. In an alloy, atoms of different sizes distort these layers, making it harder for them to slide, so the alloy is harder and stronger.",
        hints: [
          "Think about why pure metals are relatively soft.",
          "Regular layers of identical atoms can slide.",
          "Different-sized atoms disrupt the layers.",
        ],
        strategy:
          "Relate hardness to whether atomic layers can slide: uniform atoms slide easily (soft); mixed-size atoms block sliding (harder alloy).",
      },
      {
        id: "exam-chemistry-m4-24",
        difficulty: "core",
        question:
          "How does the fractional distillation of crude oil separate the different fractions?",
        options: [
          "By differences in colour",
          "By differences in boiling point, with smaller molecules condensing higher up the column",
          "By differences in density only, using a centrifuge",
          "By chemical reaction with catalysts",
        ],
        answerIndex: 1,
        explanation:
          "Fractional distillation separates crude oil by boiling point. The column is hot at the bottom and cooler at the top; fractions with lower boiling points (smaller molecules) rise higher before condensing, while larger molecules condense lower down.",
        hints: [
          "The separation depends on a physical property linked to molecule size.",
          "Smaller molecules have lower boiling points.",
          "The column is hotter at the bottom and cooler at the top.",
        ],
      },
      {
        id: "exam-chemistry-m4-25",
        difficulty: "core",
        question:
          "Which environmental problem is caused by the build-up of non-biodegradable addition polymers such as poly(ethene)?",
        options: [
          "They cause acid rain",
          "They persist as waste and pollution because microorganisms cannot break them down",
          "They deplete the ozone layer",
          "They dissolve harmlessly in seawater",
        ],
        answerIndex: 1,
        explanation:
          "Addition polymers like poly(ethene) are largely non-biodegradable, so microorganisms cannot break them down. They persist in the environment as litter and waste, causing pollution and harm to wildlife.",
        hints: [
          "Think about whether bacteria can break these plastics down.",
          "Non-biodegradable means they do not rot away.",
          "They accumulate as long-lasting waste.",
        ],
      },
    ],
  },
];
