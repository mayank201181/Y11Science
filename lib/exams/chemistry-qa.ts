import type { Paper, QA } from "../types";

// Whole-subject structured (QA) mock for Cambridge IGCSE Chemistry 0620 (Extended).
// 4 papers x 20 questions = 80 QAs spanning the full syllabus.
// Every calculation carries a worked solutions[] (working, units, sig figs).

export const chemistryExamQaPapers: Paper<QA>[] = [
  // ════════════════════════════════════════════════════════════════════════
  // PAPER 1 — Structured
  //   Particles & states · atomic structure · isotopes · bonding · structures ·
  //   intro mole calculations · separation/analysis
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "exam-chemistry-qa-1",
    title: "Paper 1 — Structured",
    description:
      "Structured questions on the particulate nature of matter, atomic structure, isotopes, chemical bonding, giant and simple structures, and introductory mole work. Allow 60 minutes.",
    questions: [
      {
        id: "exam-chemistry-q1-01",
        question:
          "A sealed gas syringe contains bromine vapour.\n(a) Describe the arrangement and motion of the particles in a gas. [2]\n(b) The syringe is cooled until the bromine condenses to a liquid. Explain, in terms of particles and forces, what happens to the bromine as it condenses. [2]",
        marks: 4,
        modelAnswer:
          "(a) In a gas the particles are far apart with no regular arrangement (random/disordered) and they move quickly in random directions, colliding with each other and the walls.\n(b) On cooling, the particles lose kinetic energy and move more slowly. The attractive forces between particles pull them close together, so they become much closer and arranged more compactly, forming a liquid.",
        markScheme: [
          "gas: particles far apart / spread out / no regular arrangement [1]",
          "gas: move quickly / randomly / in all directions [1]",
          "on cooling particles lose (kinetic) energy / slow down [1]",
          "attractive forces pull particles closer together / particles become close-packed forming liquid [1]",
        ],
        commonError:
          "Saying the molecules themselves get smaller or that bonds inside Br2 molecules break — only the spacing and the forces between molecules change.",
        guideRef: "States of Matter",
        difficulty: "warmup",
      },
      {
        id: "exam-chemistry-q1-02",
        question:
          "Bromine has two main isotopes, bromine-79 and bromine-81.\n(a) State what is meant by isotopes. [2]\n(b) A sample of bromine contains 50.0% bromine-79 and 50.0% bromine-81. Calculate the relative atomic mass of bromine in this sample. [2]",
        marks: 4,
        modelAnswer:
          "(a) Isotopes are atoms of the same element (same number of protons / same proton number) that have different numbers of neutrons (different mass numbers / nucleon numbers).\n(b) Ar = (50.0 x 79 + 50.0 x 81) / 100 = (3950 + 4050) / 100 = 8000 / 100 = 80.0",
        markScheme: [
          "same number of protons / same proton number / same element [1]",
          "different number of neutrons / different mass number [1]",
          "(50 x 79 + 50 x 81) / 100 [1]",
          "Ar = 80.0 [1]",
        ],
        commonError:
          "Just averaging the mass numbers without weighting by abundance, or dividing by 2 incorrectly when percentages do not sum simply.",
        guideRef: "Atomic Structure",
        difficulty: "core",
        hints: [
          "Isotopes differ only in the number of neutrons.",
          "Weighted mean = sum of (abundance x mass) divided by total abundance.",
          "Total abundance here is 100.",
          "Multiply each mass by its percentage, add, then divide by 100.",
        ],
        strategy: "weighted mean of isotopic masses",
        solutions: [
          {
            label: "Weighted mean",
            steps: [
              "Contribution of Br-79 = 50.0 x 79 = 3950",
              "Contribution of Br-81 = 50.0 x 81 = 4050",
              "Sum = 3950 + 4050 = 8000",
              "Ar = 8000 / 100 = 80.0 (3 sig figs, no units)",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q1-03",
        question:
          "An atom is represented as 24/12 Mg (mass number 24, proton number 12).\n(a) State the number of protons, neutrons and electrons in this atom. [3]\n(b) Write the full electronic configuration of a magnesium atom and state which group and period of the Periodic Table magnesium is in. [3]",
        marks: 6,
        modelAnswer:
          "(a) Protons = 12; electrons = 12; neutrons = mass number minus proton number = 24 - 12 = 12.\n(b) Electronic configuration: 2,8,2. Group II (2) because there are 2 electrons in the outer shell; Period 3 because there are 3 occupied electron shells.",
        markScheme: [
          "protons = 12 and electrons = 12 [1]",
          "neutrons = 24 - 12 = 12 [1]",
          "electronic configuration 2,8,2 [1]",
          "Group II / Group 2 [1]",
          "Period 3 [1]",
          "reasoning links outer electrons to group and number of shells to period [1]",
        ],
        commonError:
          "Confusing mass number with neutron number, or writing the configuration as 2,8,2 but then giving the group as 8.",
        guideRef: "Atomic Structure",
        difficulty: "core",
        hints: [
          "Neutrons = mass number - proton number.",
          "In a neutral atom protons equal electrons.",
          "Fill shells 2, then 8, then the rest.",
          "Group = outer-shell electrons; period = number of shells.",
        ],
        solutions: [
          {
            label: "Counting subatomic particles",
            steps: [
              "Protons = proton number = 12",
              "Electrons = protons (neutral atom) = 12",
              "Neutrons = 24 - 12 = 12",
              "Shells filled: 2 + 8 + 2 = 12 electrons, giving 2,8,2",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q1-04",
        question:
          "Sodium reacts with chlorine to form sodium chloride, an ionic compound.\n(a) Describe, in terms of electron transfer, how a sodium atom and a chlorine atom form ions. [3]\n(b) State the formula of each ion formed. [2]\n(c) Explain why sodium chloride has a high melting point. [2]",
        marks: 7,
        modelAnswer:
          "(a) A sodium atom (2,8,1) loses its one outer electron to achieve a full outer shell, becoming a positive ion. A chlorine atom (2,8,7) gains that one electron to complete its outer shell, becoming a negative ion. The electron is transferred from sodium to chlorine.\n(b) Sodium ion: Na+ ; chloride ion: Cl- .\n(c) Sodium chloride is a giant ionic lattice with strong electrostatic forces of attraction between oppositely charged ions. A large amount of energy is needed to overcome these forces, so the melting point is high.",
        markScheme: [
          "Na loses 1 (outer) electron to form Na+ [1]",
          "Cl gains 1 electron to form Cl- [1]",
          "both achieve full outer shell / noble gas configuration [1]",
          "Na+ correct [1]",
          "Cl- correct [1]",
          "giant ionic lattice with strong electrostatic attraction between oppositely charged ions [1]",
          "much energy needed to overcome / break these forces [1]",
        ],
        commonError:
          "Writing the chloride ion as Cl2- or saying electrons are shared (that is covalent bonding, not ionic).",
        guideRef: "Ionic Bonding",
        difficulty: "core",
        hints: [
          "Metals lose electrons; non-metals gain them.",
          "Sodium has 1 outer electron; chlorine has 7.",
          "Charge equals the number of electrons lost or gained.",
          "High melting point links to strong forces in a giant lattice.",
        ],
      },
      {
        id: "exam-chemistry-q1-05",
        question:
          "Methane (CH4) is a simple molecular substance.\n(a) Draw a dot-and-cross diagram for methane, showing only outer-shell electrons. (Describe it if you cannot draw.) [2]\n(b) Explain why methane has a low boiling point. [2]\n(c) Explain why methane does not conduct electricity. [1]",
        marks: 5,
        modelAnswer:
          "(a) Carbon is in the centre sharing one pair of electrons with each of four hydrogen atoms, giving four single covalent bonds (each bond a shared pair, shown as one dot and one cross). Carbon then has 8 outer electrons and each hydrogen has 2.\n(b) Methane consists of small molecules with only weak intermolecular forces between them. Little energy is needed to overcome these weak forces, so the boiling point is low.\n(c) It has no free/mobile charged particles (no ions and no delocalised electrons), so it cannot carry a current.",
        markScheme: [
          "four shared pairs (one dot + one cross) between C and each H [1]",
          "carbon shows 8 outer electrons, each H shows 2 [1]",
          "weak intermolecular forces (between molecules) [1]",
          "little energy needed to overcome them, so low boiling point [1]",
          "no free/mobile ions or electrons to carry charge [1]",
        ],
        commonError:
          "Confusing the strong covalent bonds within the molecule with the weak forces between molecules when explaining the low boiling point.",
        guideRef: "Covalent Bonding",
        difficulty: "core",
        hints: [
          "Each covalent bond is one shared pair of electrons.",
          "Carbon needs 4 more electrons; each H needs 1.",
          "Boiling depends on the forces BETWEEN molecules, not the bonds within.",
          "Conduction needs charged particles that are free to move.",
        ],
      },
      {
        id: "exam-chemistry-q1-06",
        question:
          "Diamond and graphite are both forms of carbon (allotropes) with giant covalent structures.\n(a) Explain why diamond is very hard. [2]\n(b) Explain why graphite is soft and slippery and can be used as a lubricant. [2]\n(c) Explain why graphite conducts electricity but diamond does not. [2]",
        marks: 6,
        modelAnswer:
          "(a) In diamond every carbon atom forms four strong covalent bonds in a rigid three-dimensional giant lattice; a great deal of energy is needed to break these bonds, so diamond is very hard.\n(b) In graphite the carbon atoms are arranged in layers; each carbon forms three covalent bonds within a layer, but there are only weak forces between the layers, so the layers can slide over each other, making graphite soft and slippery.\n(c) Each carbon in graphite uses only three of its four outer electrons in bonding, leaving one delocalised electron per atom that is free to move along the layers and carry charge. In diamond all four outer electrons are used in bonding, so there are no free electrons to conduct.",
        markScheme: [
          "diamond: each C forms 4 covalent bonds / rigid 3D giant lattice [1]",
          "many strong bonds must be broken so very hard [1]",
          "graphite: layers / weak forces between layers [1]",
          "layers slide over each other [1]",
          "graphite has 1 delocalised/free electron per C atom that moves and carries charge [1]",
          "diamond has no free electrons (all 4 used in bonding) [1]",
        ],
        commonError:
          "Saying graphite layers are held by weak covalent bonds (the within-layer bonds are strong covalent; the between-layer forces are weak intermolecular forces).",
        guideRef: "Giant Covalent Structures",
        difficulty: "challenge",
        hints: [
          "Count how many covalent bonds each carbon makes in each structure.",
          "Hardness links to a rigid 3D network of strong bonds.",
          "Slipperiness links to layers held by weak forces.",
          "Conduction needs delocalised electrons.",
        ],
      },
      {
        id: "exam-chemistry-q1-07",
        question:
          "Metals such as copper have a giant metallic structure.\n(a) Describe the structure and bonding in a metal. [3]\n(b) Use this structure to explain why metals are good conductors of electricity and are malleable. [2]",
        marks: 5,
        modelAnswer:
          "(a) A metal is a giant lattice of positive metal ions arranged in regular layers, surrounded by a sea of delocalised electrons (the outer electrons from each atom). The metallic bond is the strong electrostatic attraction between the positive ions and the delocalised electrons.\n(b) The delocalised electrons are free to move through the structure and carry charge, so metals conduct electricity. Because the ions are arranged in layers, the layers can slide over one another when a force is applied without breaking the metallic bonding, so the metal is malleable.",
        markScheme: [
          "lattice of positive (metal) ions [1]",
          "sea of delocalised/free electrons [1]",
          "metallic bond = attraction between positive ions and delocalised electrons [1]",
          "delocalised electrons move and carry charge so conducts [1]",
          "layers of ions slide over each other so malleable [1]",
        ],
        commonError:
          "Calling the mobile particles ions instead of electrons, or saying the whole atoms move when current flows.",
        guideRef: "Metallic Bonding",
        difficulty: "warmup",
        hints: [
          "Metals consist of positive ions, not neutral atoms.",
          "Where do the lost outer electrons go?",
          "Conduction needs mobile charge carriers.",
          "Malleability needs layers that can move.",
        ],
      },
      {
        id: "exam-chemistry-q1-08",
        question:
          "Calculate the relative formula mass (Mr) of the following. Show your working.\n(a) Calcium nitrate, Ca(NO3)2 [2]\n(b) Hydrated copper(II) sulfate, CuSO4.5H2O [2]\n(Ar: Ca = 40, N = 14, O = 16, Cu = 64, S = 32, H = 1)",
        marks: 4,
        modelAnswer:
          "(a) Ca(NO3)2 = 40 + 2 x (14 + 3 x 16) = 40 + 2 x (14 + 48) = 40 + 2 x 62 = 40 + 124 = 164.\n(b) CuSO4.5H2O = (64 + 32 + 4 x 16) + 5 x (2 x 1 + 16) = (64 + 32 + 64) + 5 x 18 = 160 + 90 = 250.",
        markScheme: [
          "Ca(NO3)2: NO3 = 62 and there are 2 of them [1]",
          "Mr = 164 [1]",
          "CuSO4 = 160 and 5 H2O = 90 [1]",
          "Mr = 250 [1]",
        ],
        commonError:
          "Forgetting that the bracket subscript multiplies every atom inside it, or counting only one water molecule instead of five.",
        guideRef: "Relative Mass and the Mole",
        difficulty: "core",
        hints: [
          "The subscript outside a bracket multiplies everything inside.",
          "For NO3: 14 + 3 x 16 = 62, then double it.",
          "Each H2O has Mr = 18.",
          "Add the anhydrous Mr to 5 lots of water.",
        ],
        solutions: [
          {
            label: "Ca(NO3)2",
            steps: [
              "Mr(NO3) = 14 + 3 x 16 = 14 + 48 = 62",
              "Two NO3 groups: 2 x 62 = 124",
              "Add Ca: 40 + 124 = 164 (no units)",
            ],
          },
          {
            label: "CuSO4.5H2O",
            steps: [
              "Mr(CuSO4) = 64 + 32 + 4 x 16 = 64 + 32 + 64 = 160",
              "Mr(H2O) = 2 x 1 + 16 = 18; five waters = 5 x 18 = 90",
              "Total = 160 + 90 = 250 (no units)",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q1-09",
        question:
          "A sample of carbon dioxide, CO2, has a mass of 22.0 g. (Mr CO2 = 44)\n(a) Calculate the amount, in moles, of CO2 in the sample. [2]\n(b) Calculate the number of CO2 molecules in the sample. (Avogadro constant = 6.02 x 10^23 per mol) [2]\n(c) Calculate the volume of this gas at r.t.p. (molar gas volume = 24 dm^3/mol) [1]",
        marks: 5,
        modelAnswer:
          "(a) n = m / M = 22.0 / 44 = 0.500 mol.\n(b) number of molecules = n x NA = 0.500 x 6.02 x 10^23 = 3.01 x 10^23 molecules.\n(c) V = n x 24 = 0.500 x 24 = 12.0 dm^3.",
        markScheme: [
          "n = 22.0 / 44 [1]",
          "n = 0.500 mol [1]",
          "molecules = 0.500 x 6.02 x 10^23 [1]",
          "= 3.01 x 10^23 [1]",
          "V = 0.500 x 24 = 12.0 dm^3 [1]",
        ],
        commonError:
          "Multiplying mass by Avogadro's constant directly instead of converting to moles first.",
        guideRef: "Relative Mass and the Mole",
        difficulty: "core",
        hints: [
          "First convert mass to moles with n = m/M.",
          "Number of particles = moles x Avogadro constant.",
          "Volume of gas = moles x 24 dm^3 at r.t.p.",
          "Keep 3 significant figures.",
        ],
        strategy: "moles is the hub: mass to moles, then to particles or volume",
        solutions: [
          {
            label: "Mole hub method",
            steps: [
              "n(CO2) = 22.0 g / 44 g/mol = 0.500 mol",
              "Molecules = 0.500 mol x 6.02 x 10^23 /mol = 3.01 x 10^23 molecules",
              "V = 0.500 mol x 24 dm^3/mol = 12.0 dm^3",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q1-10",
        question:
          "Magnesium burns in oxygen to form magnesium oxide:\n2Mg + O2 -> 2MgO\nCalculate the mass of magnesium oxide formed when 6.0 g of magnesium burns completely in excess oxygen. (Ar: Mg = 24, O = 16) [3]",
        marks: 3,
        modelAnswer:
          "n(Mg) = 6.0 / 24 = 0.25 mol. Mole ratio Mg:MgO = 2:2 = 1:1, so n(MgO) = 0.25 mol. Mr(MgO) = 24 + 16 = 40. Mass of MgO = 0.25 x 40 = 10.0 g.",
        markScheme: [
          "n(Mg) = 6.0 / 24 = 0.25 mol [1]",
          "n(MgO) = 0.25 mol (1:1 ratio) [1]",
          "mass(MgO) = 0.25 x 40 = 10.0 g [1]",
        ],
        commonError:
          "Using a 2:1 ratio between Mg and MgO; the balanced equation gives 2:2 = 1:1.",
        guideRef: "Reacting Masses and the Limiting Reactant",
        difficulty: "warmup",
        hints: [
          "Convert the mass of Mg to moles first.",
          "Read the mole ratio straight from the balanced equation.",
          "Mr(MgO) = 40.",
          "Mass = moles x Mr.",
        ],
        solutions: [
          {
            label: "Standard road-map",
            steps: [
              "n(Mg) = 6.0 g / 24 g/mol = 0.25 mol",
              "Ratio Mg:MgO = 2:2 = 1:1, so n(MgO) = 0.25 mol",
              "m(MgO) = 0.25 mol x 40 g/mol = 10.0 g",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q1-11",
        question:
          "A compound contains 2.4 g of carbon and 0.6 g of hydrogen only. (Ar: C = 12, H = 1)\n(a) Calculate the empirical formula of the compound. [3]\n(b) The relative molecular mass of the compound is 30. Determine its molecular formula. [2]",
        marks: 5,
        modelAnswer:
          "(a) n(C) = 2.4/12 = 0.20 mol; n(H) = 0.6/1 = 0.60 mol. Divide by the smaller (0.20): C = 1, H = 3. Empirical formula = CH3.\n(b) Empirical formula mass of CH3 = 12 + 3 = 15. n = 30/15 = 2. Molecular formula = (CH3)2 = C2H6 (ethane).",
        markScheme: [
          "n(C) = 0.20 mol and n(H) = 0.60 mol [1]",
          "divide by smallest -> C:H = 1:3 [1]",
          "empirical formula CH3 [1]",
          "EFM = 15; n = 30/15 = 2 [1]",
          "molecular formula C2H6 [1]",
        ],
        commonError:
          "Not dividing by the smallest number of moles, or stopping at the empirical formula without using the Mr.",
        guideRef: "Empirical and Molecular Formulae",
        difficulty: "core",
        hints: [
          "Convert each mass to moles using its Ar.",
          "Divide both mole values by the smaller one.",
          "Empirical formula mass = sum of Ar in the empirical unit.",
          "Molecular formula = (Mr / EFM) x empirical formula.",
        ],
        solutions: [
          {
            label: "Empirical then molecular formula",
            steps: [
              "n(C) = 2.4 / 12 = 0.20 mol; n(H) = 0.6 / 1 = 0.60 mol",
              "Divide by 0.20: C = 1, H = 3, so empirical formula CH3",
              "EFM(CH3) = 12 + 3 = 15",
              "n = Mr / EFM = 30 / 15 = 2, so molecular formula C2H6",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q1-12",
        question:
          "A mixture contains sand, salt (sodium chloride) and iodine.\n(a) Describe how you would obtain a pure, dry sample of salt from the mixture, given that iodine has already been removed. [4]\n(b) Name the technique used to separate the iodine from the mixture by gentle heating, and state the change of state involved. [2]",
        marks: 6,
        modelAnswer:
          "(a) Add water and stir to dissolve the salt (sand does not dissolve). Filter the mixture: the sand stays on the filter paper as residue and the salt solution passes through as filtrate. Evaporate the filtrate (heat gently) to remove water and crystallise the salt; or evaporate to dryness to leave dry salt. Dry the salt.\n(b) The technique is sublimation. The iodine changes directly from solid to gas (sublimes) and then back from gas to solid (deposits) on a cool surface, without becoming a liquid.",
        markScheme: [
          "dissolve in water / add water and stir [1]",
          "filter: sand = residue, salt solution = filtrate [1]",
          "evaporate / crystallise the filtrate to remove water [1]",
          "obtain dry salt [1]",
          "sublimation [1]",
          "solid changes directly to gas (and back to solid) [1]",
        ],
        commonError:
          "Saying you would filter the salt out (salt dissolves, so it passes through the filter), or calling sublimation evaporation.",
        guideRef: "Separation Techniques",
        difficulty: "core",
        hints: [
          "Which component dissolves in water?",
          "Filtration separates an insoluble solid from a solution.",
          "How do you recover a dissolved solid from its solution?",
          "Sublimation goes straight from solid to gas.",
        ],
      },
      {
        id: "exam-chemistry-q1-13",
        question:
          "Chromatography is used to investigate the dyes in a sample of black ink.\n(a) Describe how to set up a paper chromatogram of the ink, including the role of the solvent. [3]\n(b) Explain how the chromatogram shows that the ink contains more than one dye. [1]\n(c) Define the Rf value and state its formula. [2]",
        marks: 6,
        modelAnswer:
          "(a) Draw a pencil baseline near the bottom of the chromatography paper and place a small spot of the ink on the line. Stand the paper in a container with a shallow layer of solvent so the solvent level is below the baseline. The solvent rises up the paper by capillary action and carries the dyes with it; more soluble dyes travel further.\n(b) If the single ink spot separates into two or more spots of different colours at different heights, the ink contains more than one dye.\n(c) The Rf value is the ratio of the distance moved by the spot (solute) to the distance moved by the solvent front. Rf = distance moved by spot / distance moved by solvent front.",
        markScheme: [
          "pencil baseline and spot of ink on the line [1]",
          "solvent level below the baseline / spot [1]",
          "solvent rises and carries dyes; more soluble travels further [1]",
          "separation into several spots shows more than one dye [1]",
          "Rf = distance moved by solute / distance moved by solvent [1]",
          "Rf is always less than 1 / dimensionless [1]",
        ],
        commonError:
          "Drawing the baseline in ink (it would run) or starting the spot below the solvent level so the dye dissolves into the solvent reservoir.",
        guideRef: "Chromatography and Analysis",
        difficulty: "core",
        hints: [
          "Why must the baseline be drawn in pencil?",
          "The solvent must start below the spots.",
          "More soluble components travel further up the paper.",
          "Rf compares two distances measured from the baseline.",
        ],
      },
      {
        id: "exam-chemistry-q1-14",
        question:
          "Define each of the following terms used in chemistry. Give an example in each case.\n(a) Element [2]\n(b) Compound [2]\n(c) Mixture [2]",
        marks: 6,
        modelAnswer:
          "(a) An element is a substance made of only one type of atom and cannot be broken down chemically into simpler substances; example, oxygen (O2) or iron (Fe).\n(b) A compound is a substance made of two or more different elements chemically combined (bonded) in fixed proportions; example, water (H2O) or sodium chloride (NaCl).\n(c) A mixture contains two or more substances (elements or compounds) that are not chemically combined and can be separated by physical means; example, air or sea water.",
        markScheme: [
          "element: one type of atom / cannot be split chemically + example [2]",
          "compound: two or more elements chemically combined in fixed ratio + example [2]",
          "mixture: substances not chemically joined, separable physically + example [2]",
        ],
        commonError:
          "Calling a mixture a compound, or saying a compound can be separated by physical means (it requires a chemical change).",
        guideRef: "Elements, Compounds and Mixtures",
        difficulty: "warmup",
      },
      {
        id: "exam-chemistry-q1-15",
        question:
          "The ion Mg2+ and the ion O2- are present in magnesium oxide.\n(a) State the electronic configuration of the Mg2+ ion. [1]\n(b) State the electronic configuration of the O2- ion. [1]\n(c) Give the formula of magnesium oxide and explain why this is the correct ratio of ions. [2]",
        marks: 4,
        modelAnswer:
          "(a) Mg2+ : 2,8 (it has lost its two outer electrons).\n(b) O2- : 2,8 (it has gained two electrons).\n(c) Formula MgO. The 2+ charge on the magnesium ion is exactly balanced by the 2- charge on the oxide ion, so they combine in a 1:1 ratio and the compound is electrically neutral.",
        markScheme: [
          "Mg2+ = 2,8 [1]",
          "O2- = 2,8 [1]",
          "formula MgO [1]",
          "charges balance / 1:1 ratio gives neutral compound [1]",
        ],
        commonError:
          "Giving the configuration of the neutral atom rather than the ion, or writing the formula as Mg2O2 instead of the simplest ratio MgO.",
        guideRef: "Ionic Bonding",
        difficulty: "warmup",
        hints: [
          "An ion's configuration is the atom's after losing or gaining electrons.",
          "Mg loses 2 electrons; O gains 2.",
          "Both end up isoelectronic with neon (2,8).",
          "The formula uses the simplest whole-number ratio that balances charge.",
        ],
      },
      {
        id: "exam-chemistry-q1-16",
        question:
          "Aluminium has a proton number of 13.\n(a) Write the electronic configuration of an aluminium atom. [1]\n(b) Predict the charge on an aluminium ion and explain your prediction. [2]\n(c) Aluminium forms a covalently bonded chloride, AlCl3. Using outer electrons only, describe the bonding between aluminium and one chlorine atom in terms of shared electrons. [2]",
        marks: 5,
        modelAnswer:
          "(a) 2,8,3.\n(b) The aluminium ion has a 3+ charge. Aluminium has 3 electrons in its outer shell, and it loses all three to achieve a full (stable) outer shell, leaving an ion with three more protons than electrons, hence 3+.\n(c) In each Al-Cl bond, the aluminium atom and the chlorine atom each contribute one electron to a shared pair, forming a single covalent bond. Three such bonds are formed, one to each of the three chlorine atoms.",
        markScheme: [
          "2,8,3 [1]",
          "charge 3+ [1]",
          "loses 3 outer electrons to gain full outer shell [1]",
          "each Al-Cl bond is a shared pair (one electron from each atom) [1]",
          "three single covalent bonds formed [1]",
        ],
        commonError:
          "Giving aluminium a 3- charge (it loses, not gains, electrons because it is a metal).",
        guideRef: "Covalent Bonding",
        difficulty: "warmup",
        hints: [
          "Fill shells 2, 8, then the remainder.",
          "Metals in Group III lose 3 electrons.",
          "Charge = number of electrons lost.",
          "A covalent bond is one shared pair, one electron from each atom.",
        ],
      },
      {
        id: "exam-chemistry-q1-17",
        question:
          "0.060 mol of a metal M has a mass of 3.84 g.\n(a) Calculate the relative atomic mass of M. [2]\n(b) Suggest the identity of M, giving your reasoning. [1]\n(Ar values: Mg = 24, Cu = 64, Zn = 65, Ca = 40)",
        marks: 3,
        modelAnswer:
          "(a) Ar = m / n = 3.84 / 0.060 = 64.\n(b) An Ar of 64 matches copper (Cu), so M is copper.",
        markScheme: [
          "Ar = 3.84 / 0.060 [1]",
          "Ar = 64 [1]",
          "M is copper / Cu [1]",
        ],
        commonError:
          "Multiplying instead of dividing, or rounding 3.84/0.060 incorrectly.",
        guideRef: "Relative Mass and the Mole",
        difficulty: "core",
        hints: [
          "Rearrange n = m/M to make M the subject.",
          "M = m / n.",
          "Divide 3.84 by 0.060.",
          "Match the value to one of the listed Ar values.",
        ],
        solutions: [
          {
            label: "Rearrange the mole equation",
            steps: [
              "n = m / M, so M = m / n",
              "M = 3.84 g / 0.060 mol = 64 g/mol",
              "Ar = 64 (numerically equal to molar mass), matching copper",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q1-18",
        question:
          "Balance each of the following chemical equations by inserting the correct coefficients.\n(a) ___ Na + ___ H2O -> ___ NaOH + ___ H2 [1]\n(b) ___ C2H6 + ___ O2 -> ___ CO2 + ___ H2O [2]\n(c) ___ Fe2O3 + ___ CO -> ___ Fe + ___ CO2 [1]",
        marks: 4,
        modelAnswer:
          "(a) 2Na + 2H2O -> 2NaOH + H2.\n(b) 2C2H6 + 7O2 -> 4CO2 + 6H2O.\n(c) Fe2O3 + 3CO -> 2Fe + 3CO2.",
        markScheme: [
          "2, 2, 2, 1 for (a) [1]",
          "2, 7, 4, 6 for (b): C and H balanced [1]",
          "(b) oxygen balanced (14 O each side) [1]",
          "1, 3, 2, 3 for (c) [1]",
        ],
        commonError:
          "Changing subscripts inside formulae instead of placing coefficients in front, or forgetting that O2 supplies oxygen in pairs.",
        guideRef: "Chemical Symbols, Formulae and Equations",
        difficulty: "challenge",
        hints: [
          "Never alter subscripts; only place numbers in front.",
          "For (b) balance C first, then H, then O last.",
          "2 C2H6 gives 4 C and 6 H -> 4 CO2 and 6 H2O.",
          "Count total O on the right and divide by 2 for O2.",
        ],
        solutions: [
          {
            label: "Combustion of ethane (b)",
            steps: [
              "2 C2H6 has 4 C and 12 H -> needs 4 CO2 and 6 H2O",
              "Oxygen on right: 4 x 2 (from CO2) + 6 x 1 (from H2O) = 8 + 6 = 14 O atoms",
              "14 O atoms come from 7 O2 molecules",
              "Final: 2C2H6 + 7O2 -> 4CO2 + 6H2O",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q1-19",
        question:
          "Bromine (Br2) can be reduced or oxidised in reactions.\n(a) Define oxidation and reduction in terms of electron transfer. [2]\n(b) In the reaction Cl2 + 2KBr -> 2KCl + Br2, identify which species is oxidised and which is reduced, and justify each answer. [3]",
        marks: 5,
        modelAnswer:
          "(a) Oxidation is the loss of electrons; reduction is the gain of electrons (OIL RIG).\n(b) The bromide ions (Br-) are oxidised because each loses an electron to become a bromine atom (in Br2). The chlorine (Cl2) is reduced because each chlorine atom gains an electron to become a chloride ion (Cl-). Chlorine is more reactive than bromine, so it displaces bromine.",
        markScheme: [
          "oxidation = loss of electrons [1]",
          "reduction = gain of electrons [1]",
          "Br- is oxidised (loses electrons) [1]",
          "Cl2 is reduced (gains electrons) [1]",
          "justification links to electron transfer / displacement [1]",
        ],
        commonError:
          "Mixing up oxidation and reduction, or describing the change in terms of oxygen when the reaction involves none.",
        guideRef: "Redox Reactions",
        difficulty: "core",
        hints: [
          "Remember OIL RIG.",
          "Track which atoms lose electrons and which gain them.",
          "Bromide ions Br- become Br2 (neutral).",
          "Chlorine molecules Cl2 become Cl- ions.",
        ],
      },
      {
        id: "exam-chemistry-q1-20",
        question:
          "A gas jar contains 4.8 dm^3 of oxygen gas, O2, measured at r.t.p. (molar gas volume = 24 dm^3/mol; Mr O2 = 32)\n(a) Calculate the amount, in moles, of oxygen. [2]\n(b) Calculate the mass of this oxygen. [2]",
        marks: 4,
        modelAnswer:
          "(a) n = V / 24 = 4.8 / 24 = 0.20 mol.\n(b) mass = n x M = 0.20 x 32 = 6.4 g.",
        markScheme: [
          "n = 4.8 / 24 [1]",
          "n = 0.20 mol [1]",
          "mass = 0.20 x 32 [1]",
          "mass = 6.4 g [1]",
        ],
        commonError:
          "Using 24 000 with a volume already in dm^3 (24 000 is for cm^3), giving an answer 1000 times too small.",
        guideRef: "Molar Gas Volume and Gas Calculations",
        difficulty: "core",
        hints: [
          "Volume is in dm^3, so divide by 24 (not 24000).",
          "n = V / 24.",
          "Mass = moles x Mr.",
          "Mr(O2) = 32.",
        ],
        solutions: [
          {
            label: "Gas volume to mass",
            steps: [
              "n(O2) = 4.8 dm^3 / 24 dm^3/mol = 0.20 mol",
              "m(O2) = 0.20 mol x 32 g/mol = 6.4 g",
            ],
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // PAPER 2 — Structured
  //   Stoichiometry calculations · electrolysis · acids/bases/salts ·
  //   energetics & bond energies · titration · yield/purity
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "exam-chemistry-qa-2",
    title: "Paper 2 — Structured",
    description:
      "Structured questions on reacting masses, electrolysis, acids, bases and salts, energetics and bond energies, and quantitative titration work. Allow 60 minutes.",
    questions: [
      {
        id: "exam-chemistry-q2-01",
        question:
          "Iron is extracted in the blast furnace using the reaction:\nFe2O3 + 3CO -> 2Fe + 3CO2\nCalculate the mass of iron produced from 320 tonnes of iron(III) oxide, Fe2O3, assuming complete reaction. (Mr Fe2O3 = 160; Ar Fe = 56) [3]",
        marks: 3,
        modelAnswer:
          "Working in tonnes as if grams (the ratio is the same): n(Fe2O3) = 320/160 = 2.0 (tonne-moles). Mole ratio Fe2O3:Fe = 1:2, so n(Fe) = 4.0. Mass of Fe = 4.0 x 56 = 224 tonnes.",
        markScheme: [
          "n(Fe2O3) = 320/160 = 2.0 [1]",
          "n(Fe) = 2 x 2.0 = 4.0 (1:2 ratio) [1]",
          "mass(Fe) = 4.0 x 56 = 224 tonnes [1]",
        ],
        commonError:
          "Using a 1:1 ratio instead of 1:2, giving 112 tonnes.",
        guideRef: "Reacting Masses and the Limiting Reactant",
        difficulty: "core",
        hints: [
          "The same mole method works in tonnes as in grams.",
          "n = mass / Mr.",
          "Ratio Fe2O3:Fe = 1:2 from the equation.",
          "Mass = moles x Ar.",
        ],
        solutions: [
          {
            label: "Reacting masses in tonnes",
            steps: [
              "n(Fe2O3) = 320 / 160 = 2.0 (tonne-moles)",
              "Ratio Fe2O3 : Fe = 1 : 2, so n(Fe) = 4.0",
              "m(Fe) = 4.0 x 56 = 224 tonnes",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q2-02",
        question:
          "Zinc reacts with sulfuric acid:\nZn + H2SO4 -> ZnSO4 + H2\nAn impure sample of zinc of mass 5.00 g reacts with excess sulfuric acid and produces 1.44 dm^3 of hydrogen at r.t.p. (Ar Zn = 65; molar gas volume = 24 dm^3/mol)\n(a) Calculate the amount, in moles, of hydrogen produced. [1]\n(b) Calculate the mass of zinc that reacted. [2]\n(c) Calculate the percentage purity of the zinc sample. [2]",
        marks: 5,
        modelAnswer:
          "(a) n(H2) = 1.44 / 24 = 0.060 mol.\n(b) Ratio Zn:H2 = 1:1, so n(Zn) = 0.060 mol; m(Zn) = 0.060 x 65 = 3.90 g.\n(c) % purity = (3.90 / 5.00) x 100 = 78.0%.",
        markScheme: [
          "n(H2) = 1.44/24 = 0.060 mol [1]",
          "n(Zn) = 0.060 mol (1:1) [1]",
          "m(Zn) = 0.060 x 65 = 3.90 g [1]",
          "% purity = (3.90/5.00) x 100 [1]",
          "= 78.0% [1]",
        ],
        commonError:
          "Calculating purity as 5.00/3.90 (the wrong way round), giving over 100%.",
        guideRef: "Reacting Masses and the Limiting Reactant",
        difficulty: "challenge",
        hints: [
          "Convert the gas volume to moles with n = V/24.",
          "Use the 1:1 ratio to get moles of zinc.",
          "Mass of pure zinc = moles x Ar.",
          "% purity = (mass pure / total mass) x 100.",
        ],
        strategy: "find mass of pure substance, then compare with sample mass",
        solutions: [
          {
            label: "Purity via gas volume",
            steps: [
              "n(H2) = 1.44 dm^3 / 24 dm^3/mol = 0.060 mol",
              "Ratio Zn:H2 = 1:1, so n(Zn) = 0.060 mol",
              "m(Zn) = 0.060 mol x 65 g/mol = 3.90 g",
              "% purity = (3.90 / 5.00) x 100 = 78.0%",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q2-03",
        question:
          "In an industrial process, 8.0 tonnes of nitrogen reacts with excess hydrogen:\nN2 + 3H2 -> 2NH3\n(a) Calculate the theoretical (maximum) mass of ammonia, NH3, that could be made from 8.0 tonnes of nitrogen. (Mr N2 = 28; Mr NH3 = 17) [3]\n(b) The actual mass of ammonia obtained is 6.8 tonnes. Calculate the percentage yield. [2]",
        marks: 5,
        modelAnswer:
          "(a) n(N2) = 8.0/28 = 0.2857 (tonne-moles). Ratio N2:NH3 = 1:2, so n(NH3) = 0.5714. Mass = 0.5714 x 17 = 9.71 tonnes (theoretical).\n(b) % yield = (6.8 / 9.71) x 100 = 70.0% (to 3 sig figs, 70.0%).",
        markScheme: [
          "n(N2) = 8.0/28 = 0.286 [1]",
          "n(NH3) = 2 x 0.286 = 0.571 [1]",
          "theoretical mass = 0.571 x 17 = 9.71 tonnes [1]",
          "% yield = (6.8/9.71) x 100 [1]",
          "= 70.0% (accept 70%) [1]",
        ],
        commonError:
          "Forgetting the 1:2 ratio for NH3, or comparing actual mass with mass of nitrogen instead of theoretical ammonia.",
        guideRef: "Reacting Masses and the Limiting Reactant",
        difficulty: "challenge",
        hints: [
          "Convert nitrogen mass to moles.",
          "Two moles of NH3 form per mole of N2.",
          "Theoretical mass = moles NH3 x 17.",
          "% yield = (actual / theoretical) x 100.",
        ],
        solutions: [
          {
            label: "Yield calculation",
            steps: [
              "n(N2) = 8.0 / 28 = 0.2857 tonne-moles",
              "Ratio N2:NH3 = 1:2, so n(NH3) = 0.5714",
              "Theoretical m(NH3) = 0.5714 x 17 = 9.71 tonnes",
              "% yield = (6.8 / 9.71) x 100 = 70.0%",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q2-04",
        question:
          "Molten lead(II) bromide, PbBr2, is electrolysed using inert electrodes.\n(a) Name the product formed at the cathode (negative electrode) and write the half-equation for its formation. [2]\n(b) Name the product formed at the anode (positive electrode) and write the half-equation for its formation. [2]\n(c) Explain why solid lead(II) bromide does not conduct electricity but molten lead(II) bromide does. [2]",
        marks: 6,
        modelAnswer:
          "(a) Cathode product is lead (metal). Half-equation: Pb2+ + 2e- -> Pb.\n(b) Anode product is bromine. Half-equation: 2Br- -> Br2 + 2e-.\n(c) In the solid the ions are held in fixed positions in the lattice and cannot move. When molten, the ions are free to move and carry charge to the electrodes, so the liquid conducts.",
        markScheme: [
          "cathode: lead / Pb [1]",
          "Pb2+ + 2e- -> Pb [1]",
          "anode: bromine / Br2 [1]",
          "2Br- -> Br2 + 2e- [1]",
          "solid: ions fixed/cannot move [1]",
          "molten: ions free to move and carry charge [1]",
        ],
        commonError:
          "Writing the cathode half-equation with electrons on the wrong side, or forgetting bromine forms as Br2 (a molecule).",
        guideRef: "Electrolysis",
        difficulty: "warmup",
        hints: [
          "Cations (positive) go to the cathode and gain electrons.",
          "Anions (negative) go to the anode and lose electrons.",
          "Reduction at cathode, oxidation at anode.",
          "Conduction needs ions that are free to move.",
        ],
      },
      {
        id: "exam-chemistry-q2-05",
        question:
          "Concentrated aqueous sodium chloride (brine) is electrolysed using inert electrodes.\n(a) Name the gas produced at the cathode and the gas produced at the anode. [2]\n(b) Name the substance that remains in solution. [1]\n(c) Write the ionic half-equation for the reaction at the cathode. [1]\n(d) Explain why hydrogen, not sodium, is discharged at the cathode. [2]",
        marks: 6,
        modelAnswer:
          "(a) Cathode gas: hydrogen. Anode gas: chlorine.\n(b) Sodium hydroxide (NaOH) remains in solution.\n(c) 2H+ + 2e- -> H2.\n(d) The brine contains both H+ ions (from water) and Na+ ions. Hydrogen is discharged in preference to sodium because hydrogen is below sodium in the reactivity series (the less reactive ion is discharged at the cathode in aqueous solution).",
        markScheme: [
          "cathode: hydrogen [1]",
          "anode: chlorine [1]",
          "sodium hydroxide remains [1]",
          "2H+ + 2e- -> H2 [1]",
          "H+ and Na+ both present [1]",
          "less reactive ion (H, below Na) discharged [1]",
        ],
        commonError:
          "Saying sodium metal forms at the cathode (this happens for molten, not aqueous, NaCl) or forgetting that NaOH is left behind.",
        guideRef: "Electrolysis",
        difficulty: "challenge",
        hints: [
          "Aqueous solutions also contain H+ and OH- from water.",
          "At the cathode, the less reactive cation is discharged.",
          "Compare the reactivity of hydrogen and sodium.",
          "Whatever ions are not discharged stay in solution.",
        ],
      },
      {
        id: "exam-chemistry-q2-06",
        question:
          "(a) Define an acid and a base in terms of protons (H+ ions) according to the Bronsted-Lowry theory. [2]\n(b) State the difference between a strong acid and a weak acid, referring to dissociation. [2]\n(c) Hydrochloric acid and ethanoic acid have the same concentration. State and explain which has the lower pH. [2]",
        marks: 6,
        modelAnswer:
          "(a) An acid is a proton (H+) donor; a base is a proton (H+) acceptor.\n(b) A strong acid is fully (completely) dissociated/ionised into ions in water, whereas a weak acid is only partially dissociated/ionised in water.\n(c) Hydrochloric acid has the lower pH. Being a strong acid it fully dissociates, giving a higher concentration of H+ ions than the partially dissociated weak ethanoic acid at the same concentration, so its pH is lower.",
        markScheme: [
          "acid = proton/H+ donor [1]",
          "base = proton/H+ acceptor [1]",
          "strong acid fully dissociates / ionises [1]",
          "weak acid partially dissociates / ionises [1]",
          "HCl has lower pH [1]",
          "because higher [H+] (fully dissociated) [1]",
        ],
        commonError:
          "Confusing concentration with strength: a dilute strong acid can still be a strong acid; strength is about degree of dissociation.",
        guideRef: "Acids and Bases",
        difficulty: "core",
        hints: [
          "Bronsted-Lowry focuses on H+ transfer.",
          "Strong vs weak is about how fully the acid splits into ions.",
          "Lower pH means a higher H+ concentration.",
          "At equal concentration, the fully dissociated acid wins.",
        ],
      },
      {
        id: "exam-chemistry-q2-07",
        question:
          "A student prepares pure, dry crystals of copper(II) sulfate from copper(II) oxide (an insoluble base) and dilute sulfuric acid.\nCuO + H2SO4 -> CuSO4 + H2O\nDescribe the steps the student should take, in order, to obtain pure dry copper(II) sulfate crystals. [5]",
        marks: 5,
        modelAnswer:
          "Warm some dilute sulfuric acid. Add copper(II) oxide a little at a time, stirring, until some unreacted copper(II) oxide remains (the acid is now used up / in excess solid). Filter to remove the excess copper(II) oxide, leaving a blue copper(II) sulfate solution. Heat the solution to evaporate some water until the point of crystallisation (until crystals just begin to form / it is saturated). Leave the solution to cool so that crystals form. Filter off the crystals and dry them between sheets of filter paper (or in a warm oven).",
        markScheme: [
          "add excess copper(II) oxide to (warm) acid until no more reacts [1]",
          "filter to remove excess (insoluble) copper oxide [1]",
          "heat/evaporate the filtrate to the point of crystallisation [1]",
          "allow to cool so crystals form [1]",
          "filter off crystals and dry (between filter paper / warm oven) [1]",
        ],
        commonError:
          "Evaporating the solution to complete dryness (this can decompose the salt or give a powder rather than crystals).",
        guideRef: "Preparation of Salts",
        difficulty: "core",
        hints: [
          "Use an excess of the insoluble base to make sure all the acid reacts.",
          "Filtration removes the unreacted solid.",
          "Crystallise rather than evaporate to dryness.",
          "Hydrated crystals are dried gently.",
        ],
      },
      {
        id: "exam-chemistry-q2-08",
        question:
          "In a titration, 25.0 cm^3 of sodium hydroxide solution is exactly neutralised by 20.0 cm^3 of 0.150 mol/dm^3 hydrochloric acid.\nNaOH + HCl -> NaCl + H2O\n(a) Calculate the amount, in moles, of HCl used. [2]\n(b) Calculate the concentration of the sodium hydroxide solution in mol/dm^3. [3]",
        marks: 5,
        modelAnswer:
          "(a) n(HCl) = c x V = 0.150 x (20.0/1000) = 0.150 x 0.0200 = 0.00300 mol.\n(b) Ratio HCl:NaOH = 1:1, so n(NaOH) = 0.00300 mol. c(NaOH) = n/V = 0.00300 / (25.0/1000) = 0.00300 / 0.0250 = 0.120 mol/dm^3.",
        markScheme: [
          "n(HCl) = 0.150 x 0.0200 [1]",
          "= 0.00300 mol [1]",
          "n(NaOH) = 0.00300 mol (1:1) [1]",
          "c(NaOH) = 0.00300 / 0.0250 [1]",
          "= 0.120 mol/dm^3 [1]",
        ],
        commonError:
          "Forgetting to convert cm^3 to dm^3 by dividing by 1000 before using n = cV.",
        guideRef: "Concentration, Solutions and Titration Calculations",
        difficulty: "core",
        hints: [
          "Convert volumes from cm^3 to dm^3 first (divide by 1000).",
          "n = c x V.",
          "Use the 1:1 ratio to get moles of NaOH.",
          "c = n / V for the NaOH.",
        ],
        strategy: "n = cV with consistent dm^3 units",
        solutions: [
          {
            label: "Titration calculation",
            steps: [
              "V(HCl) = 20.0 cm^3 = 0.0200 dm^3",
              "n(HCl) = 0.150 mol/dm^3 x 0.0200 dm^3 = 0.00300 mol",
              "Ratio HCl:NaOH = 1:1, so n(NaOH) = 0.00300 mol",
              "V(NaOH) = 25.0 cm^3 = 0.0250 dm^3",
              "c(NaOH) = 0.00300 / 0.0250 = 0.120 mol/dm^3",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q2-09",
        question:
          "A sodium carbonate solution is titrated with hydrochloric acid:\nNa2CO3 + 2HCl -> 2NaCl + H2O + CO2\n25.0 cm^3 of 0.100 mol/dm^3 sodium carbonate solution required 22.0 cm^3 of hydrochloric acid for neutralisation.\n(a) Calculate the amount, in moles, of sodium carbonate used. [1]\n(b) Calculate the amount, in moles, of HCl that reacted. [1]\n(c) Calculate the concentration of the hydrochloric acid in mol/dm^3. [2]",
        marks: 4,
        modelAnswer:
          "(a) n(Na2CO3) = 0.100 x (25.0/1000) = 0.100 x 0.0250 = 0.00250 mol.\n(b) Ratio Na2CO3:HCl = 1:2, so n(HCl) = 2 x 0.00250 = 0.00500 mol.\n(c) c(HCl) = n/V = 0.00500 / (22.0/1000) = 0.00500 / 0.0220 = 0.227 mol/dm^3.",
        markScheme: [
          "n(Na2CO3) = 0.100 x 0.0250 = 0.00250 mol [1]",
          "n(HCl) = 2 x 0.00250 = 0.00500 mol [1]",
          "c(HCl) = 0.00500 / 0.0220 [1]",
          "= 0.227 mol/dm^3 (3 sig figs) [1]",
        ],
        commonError:
          "Using a 1:1 ratio between Na2CO3 and HCl instead of 1:2.",
        guideRef: "Concentration, Solutions and Titration Calculations",
        difficulty: "challenge",
        hints: [
          "Convert the carbonate volume to dm^3 and find its moles.",
          "Two moles of HCl react per mole of Na2CO3.",
          "Then c(HCl) = n(HCl) / V(HCl in dm^3).",
          "Watch the significant figures (3 sf).",
        ],
        solutions: [
          {
            label: "Carbonate titration",
            steps: [
              "n(Na2CO3) = 0.100 x (25.0/1000) = 0.00250 mol",
              "Ratio Na2CO3:HCl = 1:2, so n(HCl) = 0.00500 mol",
              "V(HCl) = 22.0 cm^3 = 0.0220 dm^3",
              "c(HCl) = 0.00500 / 0.0220 = 0.227 mol/dm^3",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q2-10",
        question:
          "(a) Define the term exothermic reaction in terms of energy transfer. [1]\n(b) Combustion of fuels is exothermic. Sketch (describe) and label an energy level (reaction pathway) diagram for an exothermic reaction, indicating the reactants, products and the activation energy. [3]\n(c) State whether the enthalpy change (delta H) of an exothermic reaction is positive or negative, and explain why. [2]",
        marks: 6,
        modelAnswer:
          "(a) An exothermic reaction transfers (releases) energy to the surroundings, usually as heat, so the surroundings get hotter.\n(b) The diagram has energy on the vertical axis and reaction progress on the horizontal axis. The reactants are drawn at a higher energy level than the products (so the products are lower). A curve rises from the reactants over a hump (peak) and then falls to the products; the activation energy is the height from the reactants up to the peak. The overall drop from reactants to products is delta H (energy released).\n(c) Delta H is negative, because the products have less (chemical) energy than the reactants, so energy is given out to the surroundings.",
        markScheme: [
          "exothermic = energy/heat released to surroundings [1]",
          "axes: energy vs reaction progress; products lower than reactants [1]",
          "activation energy marked from reactants to peak [1]",
          "delta H marked as drop from reactants to products [1]",
          "delta H is negative [1]",
          "products have less energy than reactants / energy released [1]",
        ],
        commonError:
          "Drawing products higher than reactants (that is endothermic) or stating delta H is positive for an exothermic change.",
        guideRef: "Energetics",
        difficulty: "core",
        hints: [
          "Exothermic releases energy; endothermic absorbs it.",
          "In an exothermic profile, products sit below reactants.",
          "Activation energy is the barrier to the peak.",
          "Energy released means delta H is negative.",
        ],
      },
      {
        id: "exam-chemistry-q2-11",
        question:
          "Hydrogen burns in oxygen:\n2H2 + O2 -> 2H2O\nUse the bond energies below to calculate the overall energy change for the reaction as written.\nBond energies (kJ/mol): H-H = 436; O=O = 498; O-H = 464\n(a) Calculate the total energy absorbed in breaking the bonds in the reactants. [2]\n(b) Calculate the total energy released in forming the bonds in the products. [2]\n(c) Calculate the overall energy change and state whether the reaction is exothermic or endothermic. [2]",
        marks: 6,
        modelAnswer:
          "(a) Bonds broken: 2 x (H-H) + 1 x (O=O) = 2 x 436 + 498 = 872 + 498 = 1370 kJ (absorbed).\n(b) Bonds formed: 2 H2O each has 2 O-H bonds, so 4 x (O-H) = 4 x 464 = 1856 kJ (released).\n(c) Energy change = bonds broken - bonds formed = 1370 - 1856 = -486 kJ. The value is negative, so the reaction is exothermic.",
        markScheme: [
          "bonds broken = 2(436) + 498 = 1370 kJ [2]",
          "bonds formed = 4 x 464 = 1856 kJ [2]",
          "delta H = 1370 - 1856 = -486 kJ [1]",
          "exothermic (negative value) [1]",
        ],
        commonError:
          "Counting only 2 O-H bonds instead of 4 (each water molecule has 2 O-H bonds, and there are 2 molecules), or doing formed minus broken with the wrong sign.",
        guideRef: "Bond Energies",
        difficulty: "challenge",
        hints: [
          "Energy change = energy to break bonds - energy released forming bonds.",
          "Count every bond carefully: 2 H-H and 1 O=O break.",
          "Each H2O has 2 O-H bonds; there are 2 H2O.",
          "A negative result means exothermic.",
        ],
        strategy: "delta H = sum(bonds broken) - sum(bonds formed)",
        solutions: [
          {
            label: "Bond energy calculation",
            steps: [
              "Bonds broken: 2 H-H + 1 O=O = 2(436) + 498 = 872 + 498 = 1370 kJ",
              "Bonds formed: 4 O-H (2 per water x 2 waters) = 4(464) = 1856 kJ",
              "delta H = 1370 - 1856 = -486 kJ",
              "Negative sign means energy is released: exothermic",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q2-12",
        question:
          "Methane burns completely in oxygen:\nCH4 + 2O2 -> CO2 + 2H2O\nUse the bond energies to calculate the enthalpy change of combustion.\nBond energies (kJ/mol): C-H = 412; O=O = 498; C=O = 805; O-H = 464 [4]",
        marks: 4,
        modelAnswer:
          "Bonds broken (reactants): 4 C-H + 2 O=O = 4 x 412 + 2 x 498 = 1648 + 996 = 2644 kJ. Bonds formed (products): in CO2 there are 2 C=O bonds, and in 2 H2O there are 4 O-H bonds: 2 x 805 + 4 x 464 = 1610 + 1856 = 3466 kJ. Delta H = bonds broken - bonds formed = 2644 - 3466 = -822 kJ (exothermic).",
        markScheme: [
          "bonds broken = 4(412) + 2(498) = 2644 kJ [1]",
          "bonds formed = 2(805) + 4(464) = 3466 kJ [1]",
          "delta H = 2644 - 3466 [1]",
          "= -822 kJ (exothermic) [1]",
        ],
        commonError:
          "Forgetting CO2 has 2 C=O bonds, or that there are 2 water molecules giving 4 O-H bonds.",
        guideRef: "Bond Energies",
        difficulty: "challenge",
        hints: [
          "List every bond in reactants and products.",
          "CH4 has 4 C-H bonds; 2 O2 has 2 O=O.",
          "CO2 has 2 C=O; each H2O has 2 O-H.",
          "delta H = broken - formed.",
        ],
        solutions: [
          {
            label: "Combustion of methane",
            steps: [
              "Bonds broken = 4 C-H + 2 O=O = 4(412) + 2(498) = 1648 + 996 = 2644 kJ",
              "Bonds formed = 2 C=O + 4 O-H = 2(805) + 4(464) = 1610 + 1856 = 3466 kJ",
              "delta H = 2644 - 3466 = -822 kJ",
              "Exothermic (negative)",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q2-13",
        question:
          "Sulfuric acid is a dibasic acid.\n(a) Write the balanced symbol equation, including state symbols, for the reaction between dilute sulfuric acid and solid magnesium carbonate. [2]\n(b) Describe the test for the carbon dioxide gas produced. [2]",
        marks: 4,
        modelAnswer:
          "(a) MgCO3(s) + H2SO4(aq) -> MgSO4(aq) + H2O(l) + CO2(g).\n(b) Bubble the gas through limewater (calcium hydroxide solution). If carbon dioxide is present, the limewater turns milky/cloudy (a white precipitate of calcium carbonate forms).",
        markScheme: [
          "correct products MgSO4 + H2O + CO2 [1]",
          "balanced with correct state symbols [1]",
          "limewater [1]",
          "turns milky/cloudy (white precipitate) [1]",
        ],
        commonError:
          "Leaving the equation unbalanced or omitting one of the three products (salt, water, carbon dioxide).",
        guideRef: "Acids and Bases",
        difficulty: "warmup",
        hints: [
          "Acid + carbonate -> salt + water + carbon dioxide.",
          "The salt is the metal sulfate.",
          "Add state symbols to every species.",
          "Carbon dioxide is tested with limewater.",
        ],
      },
      {
        id: "exam-chemistry-q2-14",
        question:
          "Copper can be purified by electrolysis using a solution of copper(II) sulfate, an impure copper anode and a pure copper cathode.\n(a) Write the half-equation for the reaction at the anode. [1]\n(b) Write the half-equation for the reaction at the cathode. [1]\n(c) Explain what happens to the mass of each electrode during the process. [2]",
        marks: 4,
        modelAnswer:
          "(a) Anode (impure copper dissolves): Cu -> Cu2+ + 2e-.\n(b) Cathode (pure copper deposited): Cu2+ + 2e- -> Cu.\n(c) The impure anode loses mass as copper atoms are oxidised to Cu2+ ions and go into solution; the pure cathode gains mass as Cu2+ ions are reduced and deposited as copper metal.",
        markScheme: [
          "anode: Cu -> Cu2+ + 2e- [1]",
          "cathode: Cu2+ + 2e- -> Cu [1]",
          "anode loses mass (dissolves) [1]",
          "cathode gains mass (copper deposited) [1]",
        ],
        commonError:
          "Swapping anode and cathode half-equations, or saying the cathode dissolves.",
        guideRef: "Electrolysis",
        difficulty: "warmup",
        hints: [
          "Oxidation (loss of electrons) happens at the anode.",
          "Reduction happens at the cathode.",
          "The impure electrode is the anode.",
          "Copper moves from anode to cathode.",
        ],
      },
      {
        id: "exam-chemistry-q2-15",
        question:
          "25.0 cm^3 of 0.200 mol/dm^3 sulfuric acid is neutralised by sodium hydroxide solution of concentration 0.250 mol/dm^3.\nH2SO4 + 2NaOH -> Na2SO4 + 2H2O\nCalculate the volume of sodium hydroxide solution required, in cm^3. [4]",
        marks: 4,
        modelAnswer:
          "n(H2SO4) = 0.200 x (25.0/1000) = 0.200 x 0.0250 = 0.00500 mol. Ratio H2SO4:NaOH = 1:2, so n(NaOH) = 2 x 0.00500 = 0.0100 mol. V(NaOH) = n/c = 0.0100 / 0.250 = 0.0400 dm^3 = 40.0 cm^3.",
        markScheme: [
          "n(H2SO4) = 0.200 x 0.0250 = 0.00500 mol [1]",
          "n(NaOH) = 2 x 0.00500 = 0.0100 mol [1]",
          "V(NaOH) = 0.0100 / 0.250 = 0.0400 dm^3 [1]",
          "= 40.0 cm^3 [1]",
        ],
        commonError:
          "Using a 1:1 ratio (giving 20.0 cm^3) or forgetting to convert dm^3 back to cm^3.",
        guideRef: "Concentration, Solutions and Titration Calculations",
        difficulty: "challenge",
        hints: [
          "Find moles of acid first.",
          "Two moles of NaOH per mole of H2SO4.",
          "V = n / c gives the volume in dm^3.",
          "Multiply by 1000 to convert to cm^3.",
        ],
        strategy: "moles of acid, apply ratio, then V = n/c",
        solutions: [
          {
            label: "Finding the titre volume",
            steps: [
              "n(H2SO4) = 0.200 x (25.0/1000) = 0.00500 mol",
              "Ratio 1:2, so n(NaOH) = 0.0100 mol",
              "V(NaOH) = 0.0100 / 0.250 = 0.0400 dm^3",
              "0.0400 dm^3 x 1000 = 40.0 cm^3",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q2-16",
        question:
          "Aqueous copper(II) sulfate is electrolysed using inert (carbon) electrodes.\n(a) Name the product formed at the cathode. [1]\n(b) Name the product formed at the anode. [1]\n(c) State and explain the change in colour of the solution as electrolysis proceeds. [2]",
        marks: 4,
        modelAnswer:
          "(a) Copper (a pink/brown deposit of copper metal).\n(b) Oxygen gas.\n(c) The blue colour fades (becomes paler). This is because the blue colour is due to Cu2+ ions, and these are removed from solution as they are discharged and deposited as copper at the cathode.",
        markScheme: [
          "cathode: copper [1]",
          "anode: oxygen [1]",
          "blue colour fades/becomes paler [1]",
          "because Cu2+ ions are removed/discharged from solution [1]",
        ],
        commonError:
          "Saying hydrogen forms at the cathode; copper is less reactive than hydrogen, so copper is deposited preferentially.",
        guideRef: "Electrolysis",
        difficulty: "warmup",
        hints: [
          "Compare the reactivity of copper and hydrogen.",
          "The less reactive cation is discharged at the cathode.",
          "With inert electrodes and a sulfate, oxygen forms at the anode.",
          "What gives copper sulfate solution its blue colour?",
        ],
      },
      {
        id: "exam-chemistry-q2-17",
        question:
          "Calcium reacts with water:\nCa + 2H2O -> Ca(OH)2 + H2\n(a) Calculate the volume of hydrogen, at r.t.p., produced when 2.0 g of calcium reacts completely. (Ar Ca = 40; molar gas volume = 24 dm^3/mol) [3]\n(b) State the pH range you would expect for the resulting solution and name the gas test that confirms hydrogen. [2]",
        marks: 5,
        modelAnswer:
          "(a) n(Ca) = 2.0/40 = 0.050 mol. Ratio Ca:H2 = 1:1, so n(H2) = 0.050 mol. V(H2) = 0.050 x 24 = 1.2 dm^3.\n(b) The solution is alkaline, pH about 8-14 (calcium hydroxide is a base), typically pH 10-12. Hydrogen is confirmed because it burns with a squeaky pop when a lighted splint is held at the mouth of the tube.",
        markScheme: [
          "n(Ca) = 2.0/40 = 0.050 mol [1]",
          "n(H2) = 0.050 mol (1:1) [1]",
          "V(H2) = 0.050 x 24 = 1.2 dm^3 [1]",
          "pH greater than 7 / alkaline [1]",
          "lighted splint gives squeaky pop [1]",
        ],
        commonError:
          "Using a 1:2 ratio between Ca and H2; the equation gives 1:1.",
        guideRef: "Molar Gas Volume and Gas Calculations",
        difficulty: "warmup",
        hints: [
          "Convert the mass of calcium to moles.",
          "Ratio Ca:H2 is 1:1.",
          "V = n x 24 dm^3 at r.t.p.",
          "Hydrogen gives a squeaky pop.",
        ],
        solutions: [
          {
            label: "Gas volume from a metal-water reaction",
            steps: [
              "n(Ca) = 2.0 g / 40 g/mol = 0.050 mol",
              "Ratio Ca:H2 = 1:1, so n(H2) = 0.050 mol",
              "V(H2) = 0.050 mol x 24 dm^3/mol = 1.2 dm^3",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q2-18",
        question:
          "A neutralisation reaction releases heat. In an experiment, 50.0 cm^3 of acid was mixed with 50.0 cm^3 of alkali and the temperature of the mixture rose from 21.0 C to 27.8 C.\n(a) Calculate the temperature rise. [1]\n(b) Calculate the heat energy released, in joules. Take the total mass of solution as 100 g, and the specific heat capacity of the solution as 4.2 J/g/C. Use energy = mass x specific heat capacity x temperature change. [3]",
        marks: 4,
        modelAnswer:
          "(a) Temperature rise = 27.8 - 21.0 = 6.8 C.\n(b) Energy = m x c x delta T = 100 x 4.2 x 6.8 = 2856 J (about 2860 J or 2.86 kJ).",
        markScheme: [
          "temperature rise = 6.8 C [1]",
          "energy = 100 x 4.2 x 6.8 [1]",
          "= 2856 J [1]",
          "correct units (J) / 2.86 kJ [1]",
        ],
        commonError:
          "Using the volume of only one solution as the mass instead of the total mass of mixed solution.",
        guideRef: "Energetics",
        difficulty: "core",
        hints: [
          "Temperature change = final - initial.",
          "Use the total mass of the combined solution (100 g).",
          "Energy = m x c x delta T.",
          "Keep the units in joules.",
        ],
        solutions: [
          {
            label: "Calorimetry calculation",
            steps: [
              "delta T = 27.8 - 21.0 = 6.8 C",
              "Energy = m x c x delta T = 100 g x 4.2 J/g/C x 6.8 C",
              "= 2856 J (approximately 2.86 kJ)",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q2-19",
        question:
          "(a) State the colour of universal indicator and the approximate pH for: a strong acid, a neutral solution, and a strong alkali. [3]\n(b) Write the ionic equation for the neutralisation of any acid by any alkali. [1]",
        marks: 4,
        modelAnswer:
          "(a) Strong acid: red, pH about 1. Neutral: green, pH 7. Strong alkali: purple/violet, pH about 13-14.\n(b) H+ + OH- -> H2O.",
        markScheme: [
          "strong acid: red, pH about 1 [1]",
          "neutral: green, pH 7 [1]",
          "strong alkali: purple/violet, pH about 13-14 [1]",
          "H+ + OH- -> H2O [1]",
        ],
        commonError:
          "Writing the neutralisation equation with full formulae instead of the ionic form, or giving an unbalanced equation.",
        guideRef: "Acids and Bases",
        difficulty: "warmup",
      },
      {
        id: "exam-chemistry-q2-20",
        question:
          "A solution of silver nitrate is prepared by dissolving 8.50 g of silver nitrate, AgNO3, in water and making the volume up to 250 cm^3. (Mr AgNO3 = 170)\n(a) Calculate the amount, in moles, of AgNO3 dissolved. [1]\n(b) Calculate the concentration of the silver nitrate solution in mol/dm^3. [2]\n(c) Calculate the concentration in g/dm^3. [1]",
        marks: 4,
        modelAnswer:
          "(a) n = m/M = 8.50/170 = 0.0500 mol.\n(b) V = 250 cm^3 = 0.250 dm^3; c = n/V = 0.0500/0.250 = 0.200 mol/dm^3.\n(c) c(g/dm^3) = c(mol/dm^3) x M = 0.200 x 170 = 34.0 g/dm^3.",
        markScheme: [
          "n = 8.50/170 = 0.0500 mol [1]",
          "c = 0.0500/0.250 [1]",
          "= 0.200 mol/dm^3 [1]",
          "c = 0.200 x 170 = 34.0 g/dm^3 [1]",
        ],
        commonError:
          "Forgetting to convert 250 cm^3 to 0.250 dm^3 before dividing.",
        guideRef: "Concentration, Solutions and Titration Calculations",
        difficulty: "core",
        hints: [
          "Convert mass to moles first.",
          "Change cm^3 to dm^3 (divide by 1000).",
          "c = n / V.",
          "Multiply by Mr to get g/dm^3.",
        ],
        solutions: [
          {
            label: "Preparing a standard solution",
            steps: [
              "n(AgNO3) = 8.50 / 170 = 0.0500 mol",
              "V = 250 cm^3 = 0.250 dm^3",
              "c = 0.0500 / 0.250 = 0.200 mol/dm^3",
              "c in g/dm^3 = 0.200 x 170 = 34.0 g/dm^3",
            ],
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // PAPER 3 — Structured
  //   Rates of reaction · equilibria · Periodic Table trends · group chemistry ·
  //   metals & reactivity series · extraction
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "exam-chemistry-qa-3",
    title: "Paper 3 — Structured",
    description:
      "Structured questions on rates of reaction, reversible reactions and equilibrium, periodic trends and group chemistry, the reactivity series, and metal extraction. Allow 60 minutes.",
    questions: [
      {
        id: "exam-chemistry-q3-01",
        question:
          "Marble chips (calcium carbonate) react with dilute hydrochloric acid:\nCaCO3 + 2HCl -> CaCl2 + H2O + CO2\n(a) Using collision theory, explain why increasing the temperature increases the rate of this reaction. [3]\n(b) State one other factor that would increase the rate, and explain its effect using collision theory. [2]",
        marks: 5,
        modelAnswer:
          "(a) Increasing the temperature gives the particles more kinetic energy so they move faster. This means they collide more frequently and, more importantly, a greater proportion of collisions have energy greater than or equal to the activation energy. So there are more successful (effective) collisions per second and the rate increases.\n(b) Increasing the concentration of the acid (or using smaller marble chips to increase surface area). Higher concentration means more acid particles in the same volume, so collisions are more frequent, increasing the number of successful collisions per second and the rate.",
        markScheme: [
          "higher temperature: particles move faster / more kinetic energy [1]",
          "collide more frequently [1]",
          "more particles have energy greater than the activation energy / more successful collisions [1]",
          "valid second factor (concentration / surface area / catalyst) [1]",
          "correct collision-theory explanation of that factor [1]",
        ],
        commonError:
          "Saying temperature increases rate only because of more frequent collisions; the key point is more collisions with energy above the activation energy.",
        guideRef: "Rates of Reaction",
        difficulty: "core",
        hints: [
          "Collision theory: reactions need frequent, energetic collisions.",
          "Temperature affects both collision frequency and energy.",
          "The activation energy is the minimum needed for a successful collision.",
          "Other factors: concentration, surface area, catalyst, pressure (gases).",
        ],
      },
      {
        id: "exam-chemistry-q3-02",
        question:
          "A student measures the volume of carbon dioxide given off over time when marble chips react with acid. The reaction is fastest at the start and then slows down, eventually stopping.\n(a) Explain why the rate is fastest at the start. [2]\n(b) Explain why the reaction eventually stops. [1]\n(c) Sketch (describe) the shape of the graph of volume of gas against time. [2]",
        marks: 5,
        modelAnswer:
          "(a) At the start the concentration of acid is highest, so there are the most frequent collisions per second and therefore the most successful collisions per second, giving the fastest rate.\n(b) The reaction stops when one reactant is used up (the acid or the marble chips is fully consumed).\n(c) The graph is a curve: it rises steeply at first (steepest gradient at the start), then the gradient gradually decreases as the reaction slows, and finally the curve levels off (becomes horizontal/flat) when the reaction is complete.",
        markScheme: [
          "concentration of acid highest at start [1]",
          "most frequent/successful collisions so fastest rate [1]",
          "stops when a reactant is used up [1]",
          "graph steep at start then less steep [1]",
          "levels off (plateau) when reaction finishes [1]",
        ],
        commonError:
          "Saying the reaction stops because it is at equilibrium; this is not reversible, it stops because a reactant runs out.",
        guideRef: "Rates of Reaction",
        difficulty: "warmup",
        hints: [
          "Rate depends on reactant concentration.",
          "Concentration falls as reactants are used up.",
          "The reaction ends when a reactant runs out.",
          "Steepest gradient means fastest rate.",
        ],
      },
      {
        id: "exam-chemistry-q3-03",
        question:
          "Hydrogen peroxide decomposes slowly:\n2H2O2 -> 2H2O + O2\nManganese(IV) oxide is added as a catalyst.\n(a) Define the term catalyst. [2]\n(b) Explain, in terms of activation energy, how a catalyst speeds up a reaction. [1]\n(c) State how you could show that the manganese(IV) oxide is a catalyst and not a reactant. [1]",
        marks: 4,
        modelAnswer:
          "(a) A catalyst is a substance that increases the rate of a chemical reaction but is not used up (it is chemically unchanged) at the end of the reaction.\n(b) A catalyst provides an alternative reaction pathway with a lower activation energy, so a greater proportion of collisions are successful.\n(c) Recover the manganese(IV) oxide at the end (filter, wash and dry) and show that its mass is unchanged, demonstrating it was not consumed.",
        markScheme: [
          "increases rate of reaction [1]",
          "not used up / chemically unchanged at the end [1]",
          "lowers activation energy / alternative pathway [1]",
          "mass of catalyst unchanged at the end [1]",
        ],
        commonError:
          "Saying a catalyst lowers the energy of the reactants or changes delta H; it only lowers the activation energy.",
        guideRef: "Rates of Reaction",
        difficulty: "warmup",
        hints: [
          "A catalyst speeds up a reaction without being consumed.",
          "Think about the energy barrier (activation energy).",
          "It is recovered unchanged at the end.",
          "Weigh it before and after.",
        ],
      },
      {
        id: "exam-chemistry-q3-04",
        question:
          "The Haber process makes ammonia:\nN2(g) + 3H2(g) -> 2NH3(g)   (forward reaction is exothermic)\n(a) Define the term dynamic equilibrium. [2]\n(b) Using Le Chatelier's principle, predict and explain the effect on the yield of ammonia of (i) increasing the pressure, and (ii) increasing the temperature. [4]",
        marks: 6,
        modelAnswer:
          "(a) A dynamic equilibrium is reached, in a closed system, when the rate of the forward reaction equals the rate of the backward reaction, so the concentrations of reactants and products stay constant (although both reactions are still occurring).\n(b)(i) Increasing the pressure shifts the position of equilibrium to the side with fewer gas molecules. There are 4 gas molecules on the left (1 + 3) and 2 on the right, so equilibrium shifts to the right, increasing the yield of ammonia.\n(ii) The forward reaction is exothermic. Increasing the temperature shifts the equilibrium in the endothermic (backward) direction to oppose the rise, so equilibrium shifts to the left and the yield of ammonia decreases.",
        markScheme: [
          "forward rate = backward rate [1]",
          "concentrations constant / closed system [1]",
          "higher pressure shifts to fewer gas molecules (right) [1]",
          "yield of ammonia increases [1]",
          "higher temperature favours endothermic (backward) direction [1]",
          "yield of ammonia decreases [1]",
        ],
        commonError:
          "Counting molecules incorrectly (4 vs 2), or saying higher temperature increases yield because it increases rate (rate and yield are different).",
        guideRef: "Reversible Reactions and Equilibrium",
        difficulty: "challenge",
        hints: [
          "Equilibrium is dynamic: forward and backward continue at equal rates.",
          "Pressure favours the side with fewer gas molecules.",
          "Count the gas molecules on each side.",
          "Temperature favours the endothermic direction when raised.",
        ],
      },
      {
        id: "exam-chemistry-q3-05",
        question:
          "(a) Explain what is meant by a reversible reaction, using the heating of hydrated copper(II) sulfate as an example. [3]\n(b) State the colour change observed when water is added to anhydrous copper(II) sulfate, and explain how this can be used as a test for water. [2]",
        marks: 5,
        modelAnswer:
          "(a) A reversible reaction is one that can go in both the forward and backward directions, shown by the sign with two opposite half-arrows. When blue hydrated copper(II) sulfate is heated, it loses its water of crystallisation to form white anhydrous copper(II) sulfate: CuSO4.5H2O -> CuSO4 + 5H2O. Adding water reverses this, reforming the blue hydrated salt.\n(b) Adding water to white anhydrous copper(II) sulfate turns it blue. This colour change (white to blue) is used as a chemical test to show that water is present.",
        markScheme: [
          "reversible = goes both forward and backward [1]",
          "heating blue hydrated salt gives white anhydrous salt (loses water) [1]",
          "adding water reverses it / reforms blue salt [1]",
          "anhydrous CuSO4 turns from white to blue with water [1]",
          "used as a test for water [1]",
        ],
        commonError:
          "Stating the colours the wrong way round (hydrated is blue; anhydrous is white).",
        guideRef: "Reversible Reactions and Equilibrium",
        difficulty: "core",
        hints: [
          "A reversible reaction can run both ways.",
          "Hydrated salt contains water of crystallisation and is blue.",
          "Heating drives off the water to give the white anhydrous form.",
          "Anhydrous copper sulfate plus water turns blue.",
        ],
      },
      {
        id: "exam-chemistry-q3-06",
        question:
          "The Group I elements (alkali metals) include lithium, sodium and potassium.\n(a) Describe the trend in reactivity going down Group I and explain it in terms of atomic structure. [3]\n(b) Write the balanced symbol equation for the reaction of potassium with water. [2]",
        marks: 5,
        modelAnswer:
          "(a) Reactivity increases going down Group I. Going down the group, atoms have more electron shells so the outer electron is further from the nucleus and is more shielded by inner shells. The outer electron is therefore held less strongly and is lost more easily, so the metal is more reactive.\n(b) 2K + 2H2O -> 2KOH + H2.",
        markScheme: [
          "reactivity increases down the group [1]",
          "outer electron further from nucleus / more shells / more shielding [1]",
          "outer electron lost more easily [1]",
          "correct products 2KOH + H2 [1]",
          "balanced equation [1]",
        ],
        commonError:
          "Explaining the trend by nuclear charge alone; the increased distance and shielding outweigh the greater nuclear charge.",
        guideRef: "Periodic Table and Group Trends",
        difficulty: "core",
        hints: [
          "Alkali metals react by losing their single outer electron.",
          "Going down, atoms gain more shells.",
          "More distance and shielding mean the electron is easier to lose.",
          "Metal + water -> metal hydroxide + hydrogen.",
        ],
      },
      {
        id: "exam-chemistry-q3-07",
        question:
          "The Group VII elements (halogens) include chlorine, bromine and iodine.\n(a) Describe the trend in reactivity going down Group VII and explain it in terms of atomic structure. [3]\n(b) Predict, with a reason, what you would observe when chlorine solution is added to potassium iodide solution, and write the ionic equation for any reaction. [3]",
        marks: 6,
        modelAnswer:
          "(a) Reactivity decreases going down Group VII. Halogens react by gaining one electron. Going down the group, atoms have more shells so the outer shell is further from the nucleus and more shielded; the nucleus attracts an incoming electron less strongly, so the electron is gained less easily and reactivity decreases.\n(b) Chlorine is more reactive than iodine, so it displaces iodine from potassium iodide. The colourless solution turns brown (iodine is formed). Ionic equation: Cl2 + 2I- -> 2Cl- + I2.",
        markScheme: [
          "reactivity decreases down the group [1]",
          "outer shell further from nucleus / more shielding so attracts electron less [1]",
          "electron gained less easily [1]",
          "chlorine displaces iodine (more reactive) [1]",
          "solution turns brown / iodine formed [1]",
          "Cl2 + 2I- -> 2Cl- + I2 [1]",
        ],
        commonError:
          "Reversing the trend (halogen reactivity decreases, unlike Group I), or not balancing the displacement equation.",
        guideRef: "Periodic Table and Group Trends",
        difficulty: "challenge",
        hints: [
          "Halogens react by gaining an electron.",
          "Group VII reactivity falls down the group (opposite to Group I).",
          "A more reactive halogen displaces a less reactive one.",
          "Iodine in solution is brown.",
        ],
      },
      {
        id: "exam-chemistry-q3-08",
        question:
          "(a) State two general physical properties of the transition elements that distinguish them from the Group I metals. [2]\n(b) Give two chemical properties that are characteristic of transition elements. [2]",
        marks: 4,
        modelAnswer:
          "(a) Transition elements have higher densities and higher melting points than the Group I metals (they are also harder and stronger). Group I metals are soft and have low densities and melting points.\n(b) Transition elements form coloured compounds and can have variable oxidation states (variable valency); they (and their compounds) often act as catalysts.",
        markScheme: [
          "higher density / higher melting point / harder / stronger (any two) [2]",
          "form coloured compounds [1]",
          "variable oxidation states / act as catalysts (any one more) [1]",
        ],
        commonError:
          "Listing properties shared with all metals (e.g. conduct electricity) rather than ones that distinguish transition metals.",
        guideRef: "Periodic Table and Group Trends",
        difficulty: "warmup",
      },
      {
        id: "exam-chemistry-q3-09",
        question:
          "The reactivity series lists metals in order of reactivity.\n(a) A piece of zinc is placed in copper(II) sulfate solution and a reaction occurs, but a piece of copper placed in zinc sulfate solution shows no reaction. Explain these observations and write the ionic equation for the reaction that does occur. [3]\n(b) Explain how a displacement reaction demonstrates the order of reactivity of two metals. [2]",
        marks: 5,
        modelAnswer:
          "(a) Zinc is more reactive than copper, so zinc displaces copper from copper(II) sulfate solution: the zinc dissolves and copper is deposited. Copper is less reactive than zinc, so it cannot displace zinc from zinc sulfate, hence no reaction. Ionic equation: Zn + Cu2+ -> Zn2+ + Cu.\n(b) A more reactive metal displaces a less reactive metal from a solution of its salt; the direction in which displacement occurs (and not the reverse) shows which metal is the more reactive.",
        markScheme: [
          "zinc more reactive than copper so displaces it [1]",
          "copper less reactive so no reaction with zinc sulfate [1]",
          "Zn + Cu2+ -> Zn2+ + Cu [1]",
          "more reactive metal displaces less reactive one [1]",
          "direction of displacement gives the reactivity order [1]",
        ],
        commonError:
          "Including the spectator sulfate ions in the ionic equation, or writing the displacement the wrong way round.",
        guideRef: "Reactivity Series and Metals",
        difficulty: "core",
        hints: [
          "A more reactive metal displaces a less reactive one.",
          "Decide which of zinc and copper is more reactive.",
          "Leave out spectator ions (sulfate) in the ionic equation.",
          "No reaction means the added metal is the less reactive.",
        ],
      },
      {
        id: "exam-chemistry-q3-10",
        question:
          "Iron is extracted from its ore in the blast furnace.\n(a) Name the main ore of iron and the substance added that is reduced to form the reducing agent carbon monoxide. [2]\n(b) Write equations for: (i) the formation of carbon monoxide from carbon dioxide and coke; (ii) the reduction of iron(III) oxide by carbon monoxide. [2]\n(c) Limestone (calcium carbonate) is added. State the function of limestone and write an equation for its thermal decomposition. [2]",
        marks: 6,
        modelAnswer:
          "(a) The main ore is haematite (iron(III) oxide, Fe2O3). Coke (carbon) is added; it burns and the carbon dioxide formed reacts further to form carbon monoxide, the reducing agent.\n(b)(i) CO2 + C -> 2CO. (ii) Fe2O3 + 3CO -> 2Fe + 3CO2.\n(c) Limestone removes acidic impurities such as silicon dioxide (sand) by forming slag. It first decomposes: CaCO3 -> CaO + CO2 (the calcium oxide then reacts with silicon dioxide to form calcium silicate slag).",
        markScheme: [
          "haematite / iron(III) oxide / Fe2O3 [1]",
          "coke / carbon (forms CO) [1]",
          "CO2 + C -> 2CO [1]",
          "Fe2O3 + 3CO -> 2Fe + 3CO2 [1]",
          "limestone removes impurities / forms slag [1]",
          "CaCO3 -> CaO + CO2 [1]",
        ],
        commonError:
          "Confusing the roles: carbon monoxide is the main reducing agent, and limestone is for removing acidic impurities, not for reduction.",
        guideRef: "Extraction of Metals",
        difficulty: "challenge",
        hints: [
          "The ore of iron is haematite.",
          "Carbon monoxide is the reducing agent.",
          "CO2 + C gives carbon monoxide.",
          "Limestone forms slag with sandy impurities.",
        ],
      },
      {
        id: "exam-chemistry-q3-11",
        question:
          "(a) Explain why aluminium is extracted by electrolysis but iron is extracted by reduction with carbon. [2]\n(b) Aluminium oxide is dissolved in molten cryolite before electrolysis. State why cryolite is used. [1]\n(c) Write the half-equations for the reactions at the cathode and the anode during the electrolysis of molten aluminium oxide. [2]",
        marks: 5,
        modelAnswer:
          "(a) Aluminium is more reactive than carbon, so carbon cannot reduce its oxide; electrolysis must be used. Iron is less reactive than carbon, so it can be reduced by carbon (cheaper than electrolysis).\n(b) Cryolite lowers the melting point of the aluminium oxide, saving energy (so electrolysis occurs at a lower temperature).\n(c) Cathode: Al3+ + 3e- -> Al. Anode: 2O2- -> O2 + 4e-.",
        markScheme: [
          "Al more reactive than carbon so cannot be reduced by carbon [1]",
          "iron less reactive than carbon so carbon reduces it [1]",
          "cryolite lowers the melting point (saves energy) [1]",
          "cathode: Al3+ + 3e- -> Al [1]",
          "anode: 2O2- -> O2 + 4e- [1]",
        ],
        commonError:
          "Saying cryolite is a catalyst; it is a solvent that lowers the melting point.",
        guideRef: "Extraction of Metals",
        difficulty: "challenge",
        hints: [
          "Compare each metal's reactivity with carbon.",
          "Metals above carbon need electrolysis.",
          "Cryolite is about lowering the melting point.",
          "Balance the electrons in each half-equation.",
        ],
      },
      {
        id: "exam-chemistry-q3-12",
        question:
          "The noble gases are in Group VIII (Group 0) of the Periodic Table.\n(a) Explain, in terms of electronic structure, why the noble gases are very unreactive. [2]\n(b) State one use of argon and one use of helium, linking each use to a property. [2]",
        marks: 4,
        modelAnswer:
          "(a) Noble gases have a full outer shell of electrons (a stable electronic configuration), so they have no tendency to gain, lose or share electrons and are therefore very unreactive (inert).\n(b) Argon is used to fill (filament) light bulbs / provide an inert atmosphere in welding, because it is unreactive and stops the hot metal reacting. Helium is used in balloons and airships because it has a very low density (and is non-flammable).",
        markScheme: [
          "full outer shell / stable electron arrangement [1]",
          "no tendency to gain/lose/share electrons so unreactive [1]",
          "argon: inert atmosphere / light bulbs (linked to being unreactive) [1]",
          "helium: balloons/airships (linked to low density) [1]",
        ],
        commonError:
          "Saying noble gases have empty outer shells; they have full outer shells.",
        guideRef: "Periodic Table and Group Trends",
        difficulty: "warmup",
      },
      {
        id: "exam-chemistry-q3-13",
        question:
          "Across Period 3 (from sodium to argon), there are clear trends.\n(a) Describe how the character of the elements changes from metallic to non-metallic across the period. [2]\n(b) State how the nature of the oxides changes from left to right across the period (from basic to acidic). [2]",
        marks: 4,
        modelAnswer:
          "(a) Going across Period 3 from left to right, the elements change from metals (sodium, magnesium, aluminium) through a metalloid (silicon) to non-metals (phosphorus, sulfur, chlorine, argon). So metallic character decreases and non-metallic character increases across the period.\n(b) The oxides change from basic (e.g. sodium oxide, magnesium oxide) on the left, through amphoteric (aluminium oxide) in the middle, to acidic (e.g. sulfur dioxide, phosphorus oxide) on the right.",
        markScheme: [
          "metals on the left, non-metals on the right [1]",
          "metallic character decreases across period [1]",
          "oxides basic on the left [1]",
          "oxides acidic on the right (amphoteric in middle) [1]",
        ],
        commonError:
          "Reversing the oxide trend; metal oxides are basic and non-metal oxides are acidic.",
        guideRef: "Periodic Table and Group Trends",
        difficulty: "core",
        hints: [
          "Metals are on the left of the period.",
          "Non-metals are on the right.",
          "Metal oxides tend to be basic.",
          "Non-metal oxides tend to be acidic.",
        ],
      },
      {
        id: "exam-chemistry-q3-14",
        question:
          "A student investigates how surface area affects reaction rate using marble chips and acid. They compare large chips with the same mass of powdered marble.\n(a) Predict which reacts faster and explain why in terms of collisions. [3]\n(b) State how the total volume of carbon dioxide produced compares for the two experiments, assuming the acid is in excess. [2]",
        marks: 5,
        modelAnswer:
          "(a) The powdered marble reacts faster. Powder has a much larger total surface area than large chips of the same mass, so a greater area is exposed to the acid. This means more frequent collisions between acid particles and the marble surface, so more successful collisions per second and a faster rate.\n(b) The total volume of carbon dioxide produced is the same in both experiments, because the same mass (and so the same number of moles) of marble reacts. Surface area changes the rate but not the total amount of product (the acid is in excess so all the marble reacts).",
        markScheme: [
          "powder reacts faster [1]",
          "larger surface area exposed [1]",
          "more frequent collisions / more successful collisions per second [1]",
          "total volume of CO2 is the same [1]",
          "because same moles of marble react [1]",
        ],
        commonError:
          "Thinking smaller particles produce more gas; surface area changes only the rate, not the final amount.",
        guideRef: "Rates of Reaction",
        difficulty: "core",
        hints: [
          "Smaller pieces expose more surface.",
          "More surface means more collision sites.",
          "Rate increases but amounts of reactant are unchanged.",
          "Same moles of marble gives the same moles of CO2.",
        ],
      },
      {
        id: "exam-chemistry-q3-15",
        question:
          "Rusting is the corrosion of iron.\n(a) State the two substances that must both be present for iron to rust. [2]\n(b) Name and describe one method of preventing rusting that works by sacrificial protection, and explain how it works. [3]",
        marks: 5,
        modelAnswer:
          "(a) Water and oxygen (air) must both be present for iron to rust.\n(b) Sacrificial protection (galvanising or attaching blocks of zinc/magnesium). For example, blocks of a more reactive metal such as zinc or magnesium are attached to the iron. Because the attached metal is more reactive than iron, it loses electrons (is oxidised) in preference to the iron, so it corrodes instead of the iron. It is sacrificed to protect the iron.",
        markScheme: [
          "water [1]",
          "oxygen / air [1]",
          "names a more reactive metal (zinc/magnesium) attached / galvanising [1]",
          "the more reactive metal is oxidised in preference [1]",
          "so iron is protected / metal is sacrificed [1]",
        ],
        commonError:
          "Saying carbon dioxide is needed for rusting; only water and oxygen are required.",
        guideRef: "Reactivity Series and Metals",
        difficulty: "warmup",
        hints: [
          "Two things are needed for rust to form.",
          "Sacrificial protection uses a more reactive metal.",
          "The more reactive metal corrodes first.",
          "Zinc and magnesium are common choices.",
        ],
      },
      {
        id: "exam-chemistry-q3-16",
        question:
          "An equilibrium mixture is established for the reaction:\n2SO2(g) + O2(g) -> 2SO3(g)   (forward reaction is exothermic)\nThis is a key step in the Contact process for making sulfuric acid.\n(a) State the conditions used in the Contact process (temperature, pressure and catalyst). [3]\n(b) Explain why a moderate temperature of about 450 C is used rather than a very low temperature, even though a low temperature would give a higher yield. [2]",
        marks: 5,
        modelAnswer:
          "(a) Temperature about 450 C; pressure of about 1-2 atmospheres (roughly atmospheric / a slightly raised pressure); catalyst is vanadium(V) oxide (V2O5).\n(b) A very low temperature would give a higher equilibrium yield (because the forward reaction is exothermic) but the rate of reaction would be very slow. A moderate temperature of about 450 C is a compromise: it gives a reasonable yield while keeping the rate fast enough to be economic.",
        markScheme: [
          "temperature about 450 C [1]",
          "pressure 1-2 atm / near atmospheric [1]",
          "catalyst vanadium(V) oxide / V2O5 [1]",
          "low temperature gives higher yield but slow rate [1]",
          "450 C is a compromise between yield and rate [1]",
        ],
        commonError:
          "Saying high temperature is used to increase yield; high temperature lowers the yield for an exothermic reaction, it is used to increase rate.",
        guideRef: "Reversible Reactions and Equilibrium",
        difficulty: "challenge",
        hints: [
          "Recall the standard Contact process conditions.",
          "The catalyst is vanadium(V) oxide.",
          "Low temperature favours the exothermic forward reaction (yield).",
          "But low temperature makes the reaction too slow.",
        ],
      },
      {
        id: "exam-chemistry-q3-17",
        question:
          "Sodium reacts vigorously with chlorine.\n(a) Write the balanced symbol equation for sodium reacting with chlorine. [1]\n(b) Describe two observations you would make during this reaction. [2]\n(c) Classify the product as ionic or covalent and justify your choice using the positions of the elements in the Periodic Table. [2]",
        marks: 5,
        modelAnswer:
          "(a) 2Na + Cl2 -> 2NaCl.\n(b) The sodium burns with a bright orange/yellow flame and white smoke (solid) of sodium chloride is produced; the reaction is vigorous.\n(c) The product, sodium chloride, is ionic. Sodium is a metal (Group I) and chlorine is a non-metal (Group VII); a metal reacting with a non-metal forms an ionic compound by transferring electrons.",
        markScheme: [
          "2Na + Cl2 -> 2NaCl [1]",
          "two valid observations (bright flame / white smoke / vigorous) [2]",
          "ionic [1]",
          "metal + non-metal so electrons transferred [1]",
        ],
        commonError:
          "Writing the equation as Na + Cl -> NaCl (chlorine is diatomic, Cl2), or classifying the product as covalent.",
        guideRef: "Ionic Bonding",
        difficulty: "core",
        hints: [
          "Chlorine exists as Cl2 molecules.",
          "Balance sodium and chlorine atoms.",
          "Sodium gives a characteristic flame colour.",
          "Metal + non-metal usually means ionic bonding.",
        ],
      },
      {
        id: "exam-chemistry-q3-18",
        question:
          "A reaction reaches equilibrium in a sealed flask:\nN2O4(g) -> 2NO2(g)\nN2O4 is colourless and NO2 is brown.\n(a) Explain what would be observed if the volume of the flask is suddenly decreased (pressure increased), once a new equilibrium is reached, and explain why using Le Chatelier's principle. [3]\n(b) State what happens to the position of equilibrium, but not the rate, when an inert gas is added at constant volume. [1]",
        marks: 4,
        modelAnswer:
          "(a) When the pressure is increased, the colour first darkens but then becomes paler than the original (compared at the same volume, the brown fades). Increasing the pressure shifts the equilibrium towards the side with fewer gas molecules; there is 1 molecule on the left (N2O4) and 2 on the right (NO2), so equilibrium shifts to the left, forming more colourless N2O4 and reducing the brown colour.\n(b) Adding an inert gas at constant volume does not change the partial pressures of the reacting gases, so the position of equilibrium does not change (it stays the same).",
        markScheme: [
          "equilibrium shifts to the side with fewer gas molecules (left) [1]",
          "more colourless N2O4 forms / colour becomes paler [1]",
          "fewer molecules on left (1 vs 2) [1]",
          "inert gas at constant volume: no change to position of equilibrium [1]",
        ],
        commonError:
          "Forgetting that adding inert gas at constant volume has no effect on the equilibrium position.",
        guideRef: "Reversible Reactions and Equilibrium",
        difficulty: "challenge",
        hints: [
          "Pressure favours the side with fewer gas molecules.",
          "Count molecules: 1 on the left, 2 on the right.",
          "More N2O4 means less brown colour.",
          "Inert gas at constant volume changes nothing for the equilibrium.",
        ],
      },
      {
        id: "exam-chemistry-q3-19",
        question:
          "Use the reactivity series to answer the following.\n(a) Place these metals in order of decreasing reactivity: copper, calcium, zinc, gold. [2]\n(b) State which of these metals could be extracted from its oxide by heating with carbon, and explain your reasoning. [2]",
        marks: 4,
        modelAnswer:
          "(a) In order of decreasing reactivity: calcium, zinc, copper, gold.\n(b) Zinc and copper can be extracted from their oxides by heating with carbon, because they are below carbon in the reactivity series, so carbon can reduce their oxides. Calcium is above carbon, so it cannot be extracted this way (it needs electrolysis). Gold is found native (unreactive) and does not need extracting from an oxide.",
        markScheme: [
          "correct order calcium, zinc, copper, gold [2]",
          "zinc and copper extractable with carbon [1]",
          "because they are below carbon in the reactivity series [1]",
        ],
        commonError:
          "Including calcium among the metals extractable by carbon; calcium is more reactive than carbon.",
        guideRef: "Reactivity Series and Metals",
        difficulty: "core",
        hints: [
          "Recall the order of common metals by reactivity.",
          "Carbon sits between zinc and aluminium in the series.",
          "Metals below carbon can be reduced by carbon.",
          "Metals above carbon need electrolysis.",
        ],
      },
      {
        id: "exam-chemistry-q3-20",
        question:
          "The rate of a reaction between sodium thiosulfate and hydrochloric acid is studied by timing how long a cross drawn under the flask takes to disappear (the mixture turns cloudy with sulfur).\n(a) Explain why the time taken for the cross to disappear is a measure of the rate of reaction. [2]\n(b) In an experiment, the cross disappeared in 40 s at 30 C and in 20 s at 40 C. State what this shows about the effect of temperature on rate, and estimate how many times faster the reaction is at 40 C than at 30 C. [2]",
        marks: 4,
        modelAnswer:
          "(a) The reaction produces a precipitate of sulfur that makes the mixture cloudy and hides the cross. A shorter time for the cross to disappear means the sulfur is produced more quickly, so the rate is higher. The rate is inversely proportional to the time taken (rate is proportional to 1/time).\n(b) Increasing the temperature increases the rate. The time halved from 40 s to 20 s, so since rate is proportional to 1/time, the reaction is about 2 times faster at 40 C than at 30 C.",
        markScheme: [
          "cloudiness/sulfur hides the cross [1]",
          "shorter time = faster rate (rate proportional to 1/time) [1]",
          "higher temperature increases rate [1]",
          "about 2 times faster (time halved) [1]",
        ],
        commonError:
          "Saying a longer time means a faster reaction; it is the opposite (rate is proportional to 1/time).",
        guideRef: "Rates of Reaction",
        difficulty: "core",
        hints: [
          "Cloudiness from sulfur obscures the cross.",
          "Rate is proportional to 1/time.",
          "Compare the two times.",
          "If time halves, rate doubles.",
        ],
        solutions: [
          {
            label: "Comparing rates from times",
            steps: [
              "Rate is proportional to 1 / time",
              "At 30 C: rate proportional to 1/40 = 0.025 per second",
              "At 40 C: rate proportional to 1/20 = 0.050 per second",
              "Ratio = 0.050 / 0.025 = 2, so about 2 times faster",
            ],
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // PAPER 4 — Structured
  //   Organic chemistry · analysis & chemical tests · air & environment ·
  //   mixed calculations
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "exam-chemistry-qa-4",
    title: "Paper 4 — Structured",
    description:
      "Structured questions on organic chemistry, qualitative analysis and chemical tests, air and the environment, and further quantitative calculations. Allow 60 minutes.",
    questions: [
      {
        id: "exam-chemistry-q4-01",
        question:
          "Crude oil is separated into useful fractions by fractional distillation.\n(a) Explain how fractional distillation separates crude oil into fractions, referring to boiling points. [3]\n(b) State the trend in viscosity and ease of ignition (flammability) as you go down the fractionating column (from top to bottom). [2]",
        marks: 5,
        modelAnswer:
          "(a) Crude oil is heated and vaporised, then passed into a fractionating column that is hot at the bottom and cooler at the top. As the vapours rise and cool, each fraction condenses at the level where the temperature equals its boiling range. Fractions with lower boiling points (smaller molecules) condense higher up; fractions with higher boiling points (larger molecules) condense lower down. This separates the mixture by boiling point.\n(b) Going down the column, the fractions become more viscous (thicker) and less easily ignited (less flammable), because the molecules are larger.",
        markScheme: [
          "crude oil heated/vaporised, fed into column [1]",
          "column hotter at bottom, cooler at top; fractions condense at different heights [1]",
          "lower boiling point fractions condense higher up [1]",
          "viscosity increases down the column [1]",
          "flammability/ease of ignition decreases down the column [1]",
        ],
        commonError:
          "Saying the column is cooler at the bottom; the column is hottest at the bottom and cools going up.",
        guideRef: "Organic Chemistry: Fuels",
        difficulty: "core",
        hints: [
          "The column has a temperature gradient.",
          "Each fraction condenses at its own boiling range.",
          "Smaller molecules have lower boiling points.",
          "Larger molecules are more viscous and less flammable.",
        ],
      },
      {
        id: "exam-chemistry-q4-02",
        question:
          "Alkanes and alkenes are two homologous series of hydrocarbons.\n(a) State the general formula of the alkanes and of the alkenes. [2]\n(b) Describe a chemical test, including the result, that distinguishes an alkene from an alkane. [3]",
        marks: 5,
        modelAnswer:
          "(a) Alkanes: CnH2n+2. Alkenes: CnH2n.\n(b) Add (shake with) aqueous bromine (bromine water) to each. With an alkene (unsaturated, has a C=C double bond) the orange/brown bromine water is decolourised (turns colourless). With an alkane (saturated) there is no change; the bromine water stays orange/brown.",
        markScheme: [
          "alkanes CnH2n+2 [1]",
          "alkenes CnH2n [1]",
          "use bromine water [1]",
          "alkene: decolourises (orange to colourless) [1]",
          "alkane: no change / stays orange [1]",
        ],
        commonError:
          "Mixing up the general formulae, or saying the alkane decolourises bromine water (it is the alkene that does).",
        guideRef: "Organic Chemistry: Hydrocarbons",
        difficulty: "warmup",
        hints: [
          "An alkene has a C=C double bond; an alkane does not.",
          "General formulae differ by 2 hydrogens.",
          "Bromine water tests for unsaturation.",
          "The double bond decolourises bromine water.",
        ],
      },
      {
        id: "exam-chemistry-q4-03",
        question:
          "Ethene (C2H4) can be made by cracking and can be hydrated to form ethanol.\n(a) State what is meant by cracking and give the conditions used. [3]\n(b) Write the equation for the hydration of ethene to ethanol, and name the type of compound ethanol is. [2]",
        marks: 5,
        modelAnswer:
          "(a) Cracking is the breaking down of larger (long-chain) alkane molecules into smaller, more useful molecules such as alkenes (and shorter alkanes). The conditions are a high temperature and a catalyst (for example, a temperature of about 600-700 C and a silica or alumina catalyst), known as catalytic cracking.\n(b) C2H4 + H2O -> C2H5OH. Ethanol is an alcohol.",
        markScheme: [
          "cracking = breaking large molecules into smaller ones [1]",
          "products include alkenes / smaller alkanes [1]",
          "high temperature and catalyst [1]",
          "C2H4 + H2O -> C2H5OH [1]",
          "ethanol is an alcohol [1]",
        ],
        commonError:
          "Writing the products of cracking as only alkanes; cracking produces alkenes (which have a double bond) as well.",
        guideRef: "Organic Chemistry: Hydrocarbons",
        difficulty: "warmup",
        hints: [
          "Cracking makes smaller molecules from larger ones.",
          "It needs heat and a catalyst.",
          "Hydration adds water across the double bond.",
          "Ethanol contains an -OH group.",
        ],
      },
      {
        id: "exam-chemistry-q4-04",
        question:
          "Ethanol can be manufactured by fermentation or by the hydration of ethene.\n(a) Write the equation for the fermentation of glucose (C6H12O6) to ethanol and state the conditions required. [3]\n(b) Give one advantage of producing ethanol by fermentation rather than by hydration of ethene. [1]",
        marks: 4,
        modelAnswer:
          "(a) C6H12O6 -> 2C2H5OH + 2CO2. Conditions: yeast (which provides enzymes), a warm temperature of about 25-35 C, and the absence of air (anaerobic conditions).\n(b) Fermentation uses a renewable resource (sugar from plants/crops) rather than crude oil, which is non-renewable; (it also uses less energy / lower temperatures).",
        markScheme: [
          "C6H12O6 -> 2C2H5OH + 2CO2 [1]",
          "yeast / enzymes [1]",
          "warm temperature (about 30 C) and no air [1]",
          "uses renewable resource (sugar/plants) [1]",
        ],
        commonError:
          "Forgetting the carbon dioxide product or not balancing the fermentation equation (2 ethanol and 2 CO2).",
        guideRef: "Organic Chemistry: Alcohols",
        difficulty: "core",
        hints: [
          "Glucose splits into ethanol and carbon dioxide.",
          "Two ethanol and two CO2 per glucose.",
          "Yeast supplies the enzymes.",
          "Fermentation needs warmth and no air.",
        ],
        solutions: [
          {
            label: "Balancing the fermentation equation",
            steps: [
              "Glucose C6H12O6 has 6 C, 12 H, 6 O",
              "Products 2 C2H5OH have 4 C, 12 H, 2 O; 2 CO2 have 2 C, 4 O",
              "Right side totals: C = 4 + 2 = 6, H = 12, O = 2 + 4 = 6, matching the left",
              "Balanced: C6H12O6 -> 2C2H5OH + 2CO2",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q4-05",
        question:
          "Ethanoic acid (CH3COOH) is a carboxylic acid.\n(a) Name the organic product and write the equation when ethanoic acid reacts with ethanol (in the presence of an acid catalyst). [2]\n(b) Name the homologous series the organic product belongs to and state one use of these compounds. [2]",
        marks: 4,
        modelAnswer:
          "(a) The organic product is ethyl ethanoate (an ester). CH3COOH + C2H5OH -> CH3COOC2H5 + H2O.\n(b) The product is an ester. Esters are used as flavourings and perfumes (or as solvents).",
        markScheme: [
          "ethyl ethanoate [1]",
          "CH3COOH + C2H5OH -> CH3COOC2H5 + H2O [1]",
          "ester [1]",
          "use: flavouring / perfume / solvent [1]",
        ],
        commonError:
          "Forgetting that water is also formed (esterification is a condensation reaction).",
        guideRef: "Organic Chemistry: Carboxylic Acids and Esters",
        difficulty: "warmup",
        hints: [
          "Acid plus alcohol gives an ester plus water.",
          "The ester is named from the alcohol then the acid.",
          "Esters often smell pleasant.",
          "An acid catalyst is used.",
        ],
      },
      {
        id: "exam-chemistry-q4-06",
        question:
          "Poly(ethene) is made from ethene by addition polymerisation.\n(a) Explain what is meant by addition polymerisation. [2]\n(b) Draw (or describe) the repeat unit of poly(ethene). [1]\n(c) Explain why poly(ethene) is difficult to dispose of and causes environmental problems. [2]",
        marks: 5,
        modelAnswer:
          "(a) Addition polymerisation is when many small unsaturated monomer molecules (each with a C=C double bond), such as ethene, join together to form one long polymer chain, with no other product formed (the double bonds open up and link).\n(b) The repeat unit is -(CH2-CH2)- (two carbons each bonded to two hydrogens, with bonds continuing on each side).\n(c) Poly(ethene) is non-biodegradable, so it is not broken down by microorganisms and persists in the environment (landfill) for a very long time; burning it can release toxic gases / carbon dioxide. It causes litter and harms wildlife.",
        markScheme: [
          "many monomers / small unsaturated molecules join [1]",
          "to form a long chain with no other product (double bonds open) [1]",
          "correct repeat unit -(CH2-CH2)- [1]",
          "non-biodegradable / not broken down by microorganisms [1]",
          "persists in environment / toxic gases on burning [1]",
        ],
        commonError:
          "Drawing the repeat unit with a double bond still present; in the polymer the double bond has opened to single bonds.",
        guideRef: "Organic Chemistry: Polymers",
        difficulty: "core",
        hints: [
          "Monomers have C=C double bonds that open up.",
          "Only one product forms in addition polymerisation.",
          "The repeat unit has single bonds.",
          "Think about whether bacteria can break it down.",
        ],
      },
      {
        id: "exam-chemistry-q4-07",
        question:
          "Describe the chemical tests, including reagents and observations, used to identify the following gases.\n(a) Hydrogen [1]\n(b) Oxygen [1]\n(c) Ammonia [1]\n(d) Chlorine [1]",
        marks: 4,
        modelAnswer:
          "(a) Hydrogen: a lighted splint gives a squeaky pop.\n(b) Oxygen: a glowing splint relights.\n(c) Ammonia: damp red litmus paper turns blue (ammonia is alkaline).\n(d) Chlorine: damp litmus paper is bleached (turns white); it first may turn red then is bleached.",
        markScheme: [
          "hydrogen: lighted splint, squeaky pop [1]",
          "oxygen: glowing splint relights [1]",
          "ammonia: damp red litmus turns blue [1]",
          "chlorine: damp litmus paper bleached/turns white [1]",
        ],
        commonError:
          "Confusing the tests for hydrogen and oxygen (pop for hydrogen, relighting for oxygen).",
        guideRef: "Chromatography and Analysis",
        difficulty: "warmup",
      },
      {
        id: "exam-chemistry-q4-08",
        question:
          "A student is given a solution and asked to identify the cation and anion present.\n(a) Describe the test, and the result for a positive identification, for ammonium ions (NH4+). [2]\n(b) Describe the test, and the positive result, for sulfate ions (SO4 2-). [2]\n(c) Describe the test, and the positive result, for carbonate ions (CO3 2-). [2]",
        marks: 6,
        modelAnswer:
          "(a) Ammonium ions: add sodium hydroxide solution and warm. A gas is given off (ammonia) that turns damp red litmus paper blue.\n(b) Sulfate ions: add dilute hydrochloric acid (to remove carbonates) then aqueous barium chloride (or barium nitrate). A white precipitate (of barium sulfate) confirms a sulfate.\n(c) Carbonate ions: add dilute (hydrochloric) acid. Effervescence (fizzing) is seen and the gas produced (carbon dioxide) turns limewater milky/cloudy.",
        markScheme: [
          "ammonium: add NaOH and warm [1]",
          "ammonia gas turns damp red litmus blue [1]",
          "sulfate: add acid then barium chloride/nitrate [1]",
          "white precipitate forms [1]",
          "carbonate: add dilute acid, effervescence [1]",
          "CO2 turns limewater milky [1]",
        ],
        commonError:
          "Forgetting to acidify before the barium chloride test for sulfate (carbonates also give a white precipitate without acid).",
        guideRef: "Chromatography and Analysis",
        difficulty: "challenge",
        hints: [
          "Ammonium ions release ammonia with warm alkali.",
          "Sulfate gives a white precipitate with barium ions.",
          "Acidify first to rule out carbonates.",
          "Carbonates fizz with acid, giving CO2.",
        ],
      },
      {
        id: "exam-chemistry-q4-09",
        question:
          "Flame tests can identify some metal cations.\n(a) State the flame colour for each of the following: lithium, sodium, potassium, copper(II). [4]\n(b) Describe how a flame test is carried out. [2]",
        marks: 6,
        modelAnswer:
          "(a) Lithium: red (crimson). Sodium: yellow (orange-yellow). Potassium: lilac (purple). Copper(II): blue-green (green).\n(b) Dip a clean (nichrome/platinum) wire into concentrated hydrochloric acid then into the solid/solution to be tested. Hold the wire in the edge of a hot, blue (non-luminous) Bunsen flame and observe the colour produced.",
        markScheme: [
          "lithium red [1]",
          "sodium yellow [1]",
          "potassium lilac/purple [1]",
          "copper(II) blue-green/green [1]",
          "clean wire dipped in acid then sample [1]",
          "held in blue Bunsen flame, observe colour [1]",
        ],
        commonError:
          "Confusing the potassium (lilac) and copper (blue-green) colours, or not cleaning the wire (sodium contamination gives yellow).",
        guideRef: "Chromatography and Analysis",
        difficulty: "warmup",
        hints: [
          "Each metal ion gives a characteristic flame colour.",
          "Sodium is a strong yellow.",
          "Potassium is lilac; copper is blue-green.",
          "Clean the wire to avoid contamination.",
        ],
      },
      {
        id: "exam-chemistry-q4-10",
        question:
          "Air is a mixture of gases.\n(a) State the approximate percentage of nitrogen and of oxygen in clean, dry air. [2]\n(b) Name two atmospheric pollutants produced by burning fuels in car engines, and for each state one harmful effect. [4]",
        marks: 6,
        modelAnswer:
          "(a) Nitrogen is about 78% and oxygen is about 21% of clean dry air.\n(b) Carbon monoxide (CO): a toxic gas that combines with haemoglobin and reduces the blood's ability to carry oxygen. Oxides of nitrogen (NOx) / nitrogen oxides: cause acid rain and respiratory problems / photochemical smog. (Sulfur dioxide from sulfur impurities also causes acid rain.)",
        markScheme: [
          "nitrogen about 78% [1]",
          "oxygen about 21% [1]",
          "carbon monoxide [1]",
          "CO toxic / reduces oxygen carrying by blood [1]",
          "oxides of nitrogen / sulfur dioxide [1]",
          "effect: acid rain / respiratory problems [1]",
        ],
        commonError:
          "Giving carbon dioxide as a toxic pollutant from incomplete combustion; carbon monoxide is the toxic gas from incomplete combustion.",
        guideRef: "Air and the Environment",
        difficulty: "core",
        hints: [
          "Two gases make up almost all of the air.",
          "Nitrogen is the most abundant.",
          "Carbon monoxide is toxic.",
          "Nitrogen and sulfur oxides cause acid rain.",
        ],
      },
      {
        id: "exam-chemistry-q4-11",
        question:
          "(a) Explain how acid rain is formed from the burning of fossil fuels containing sulfur. [3]\n(b) State two harmful effects of acid rain. [2]",
        marks: 5,
        modelAnswer:
          "(a) Fossil fuels contain sulfur impurities. When the fuel is burned, the sulfur reacts with oxygen to form sulfur dioxide (S + O2 -> SO2). The sulfur dioxide is released into the atmosphere, where it reacts with oxygen and water (rain) to form sulfuric acid (and sulfurous acid), which falls as acid rain.\n(b) Acid rain damages/kills trees and plants; it makes lakes and rivers acidic, killing fish and aquatic life; it corrodes/erodes buildings and statues made of limestone or marble; it corrodes metals. (Any two.)",
        markScheme: [
          "sulfur in fuel burns to form sulfur dioxide [1]",
          "S + O2 -> SO2 / SO2 released [1]",
          "SO2 reacts with water/oxygen to form acid (sulfuric acid) [1]",
          "one harmful effect (kills plants/fish, corrodes buildings/metals) [1]",
          "a second harmful effect [1]",
        ],
        commonError:
          "Attributing acid rain to carbon dioxide; the main culprits are sulfur dioxide and oxides of nitrogen.",
        guideRef: "Air and the Environment",
        difficulty: "core",
        hints: [
          "Sulfur impurities burn to sulfur dioxide.",
          "Sulfur dioxide dissolves in rain to form acid.",
          "Think about effects on living things and structures.",
          "Acid attacks limestone and metals.",
        ],
      },
      {
        id: "exam-chemistry-q4-12",
        question:
          "Carbon dioxide and methane are greenhouse gases.\n(a) Explain how greenhouse gases cause global warming (the enhanced greenhouse effect). [3]\n(b) State two human activities that increase the concentration of carbon dioxide in the atmosphere. [2]",
        marks: 5,
        modelAnswer:
          "(a) Greenhouse gases such as carbon dioxide and methane allow short-wavelength radiation from the Sun to pass through and reach the Earth's surface. The warm Earth re-emits energy as longer-wavelength infrared (heat) radiation. Greenhouse gases absorb this infrared radiation and re-emit some of it back towards the Earth, trapping heat in the atmosphere and raising the temperature (global warming).\n(b) Burning fossil fuels (for energy, transport, electricity) and deforestation (cutting down trees that would absorb CO2). (Either also: increased industry.)",
        markScheme: [
          "greenhouse gases let through radiation from the Sun [1]",
          "Earth re-emits infrared/heat radiation [1]",
          "greenhouse gases absorb and re-emit infrared, trapping heat [1]",
          "burning fossil fuels [1]",
          "deforestation [1]",
        ],
        commonError:
          "Saying greenhouse gases destroy the ozone layer; that is a separate problem and not the cause of global warming.",
        guideRef: "Air and the Environment",
        difficulty: "core",
        hints: [
          "Greenhouse gases trap heat (infrared) radiation.",
          "Sunlight passes in; infrared is re-emitted by the Earth.",
          "The gases absorb the infrared and warm the atmosphere.",
          "Think about activities that release CO2.",
        ],
      },
      {
        id: "exam-chemistry-q4-13",
        question:
          "When 2.30 g of ethanol (C2H5OH) is burned completely, the heat released raises the temperature of 200 g of water by 50.0 C. (Mr ethanol = 46; specific heat capacity of water = 4.2 J/g/C)\n(a) Calculate the heat energy released, in joules and in kilojoules. [2]\n(b) Calculate the amount, in moles, of ethanol burned. [1]\n(c) Calculate the energy released per mole of ethanol, in kJ/mol. [2]",
        marks: 5,
        modelAnswer:
          "(a) Energy = m x c x delta T = 200 x 4.2 x 50.0 = 42000 J = 42.0 kJ.\n(b) n(ethanol) = 2.30/46 = 0.0500 mol.\n(c) Energy per mole = 42.0 / 0.0500 = 840 kJ/mol.",
        markScheme: [
          "energy = 200 x 4.2 x 50.0 = 42000 J [1]",
          "= 42.0 kJ [1]",
          "n(ethanol) = 2.30/46 = 0.0500 mol [1]",
          "energy per mole = 42.0/0.0500 [1]",
          "= 840 kJ/mol [1]",
        ],
        commonError:
          "Using the mass of ethanol instead of the mass of water in the m x c x delta T calculation.",
        guideRef: "Energetics",
        difficulty: "challenge",
        hints: [
          "Heat goes into the water, so use the mass of water.",
          "Energy = m x c x delta T (in joules).",
          "Convert mass of ethanol to moles.",
          "Energy per mole = total energy / moles.",
        ],
        strategy: "calorimetry then divide by moles of fuel",
        solutions: [
          {
            label: "Energy per mole of fuel",
            steps: [
              "Energy = m(water) x c x delta T = 200 x 4.2 x 50.0 = 42000 J = 42.0 kJ",
              "n(ethanol) = 2.30 / 46 = 0.0500 mol",
              "Energy per mole = 42.0 kJ / 0.0500 mol = 840 kJ/mol",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q4-14",
        question:
          "Limewater is a saturated solution of calcium hydroxide.\nCa(OH)2 + CO2 -> CaCO3 + H2O\n(a) Explain why limewater turns milky when carbon dioxide is bubbled through it. [2]\n(b) Calculate the maximum mass of calcium carbonate that could form when 0.880 g of carbon dioxide is bubbled through excess limewater. (Mr CO2 = 44; Mr CaCO3 = 100) [3]",
        marks: 5,
        modelAnswer:
          "(a) The carbon dioxide reacts with the calcium hydroxide to form insoluble calcium carbonate, which appears as a white precipitate, making the limewater look milky/cloudy.\n(b) n(CO2) = 0.880/44 = 0.0200 mol. Ratio CO2:CaCO3 = 1:1, so n(CaCO3) = 0.0200 mol. Mass = 0.0200 x 100 = 2.00 g.",
        markScheme: [
          "insoluble calcium carbonate forms [1]",
          "white precipitate makes it milky [1]",
          "n(CO2) = 0.880/44 = 0.0200 mol [1]",
          "n(CaCO3) = 0.0200 mol (1:1) [1]",
          "mass = 0.0200 x 100 = 2.00 g [1]",
        ],
        commonError:
          "Using the wrong Mr or forgetting that the ratio of CO2 to CaCO3 is 1:1.",
        guideRef: "Reacting Masses and the Limiting Reactant",
        difficulty: "warmup",
        hints: [
          "A white insoluble solid causes the milkiness.",
          "Convert CO2 mass to moles.",
          "Ratio CO2:CaCO3 is 1:1.",
          "Mass = moles x 100.",
        ],
        solutions: [
          {
            label: "Reacting masses",
            steps: [
              "n(CO2) = 0.880 / 44 = 0.0200 mol",
              "Ratio CO2:CaCO3 = 1:1, so n(CaCO3) = 0.0200 mol",
              "m(CaCO3) = 0.0200 mol x 100 g/mol = 2.00 g",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q4-15",
        question:
          "Identify metal cations using sodium hydroxide solution.\n(a) Describe what you would observe when sodium hydroxide solution is added, a little at a time and then in excess, to a solution containing aluminium ions (Al3+). [2]\n(b) Describe the observations for copper(II) ions (Cu2+) and for iron(III) ions (Fe3+) on adding sodium hydroxide solution. [2]",
        marks: 4,
        modelAnswer:
          "(a) With aluminium ions, a white precipitate (of aluminium hydroxide) forms; it then dissolves in excess sodium hydroxide to give a colourless solution (aluminium hydroxide is amphoteric).\n(b) Copper(II) ions give a light blue precipitate (of copper(II) hydroxide), insoluble in excess. Iron(III) ions give a red-brown precipitate (of iron(III) hydroxide), insoluble in excess.",
        markScheme: [
          "Al3+: white precipitate [1]",
          "dissolves in excess to a colourless solution [1]",
          "Cu2+: light blue precipitate [1]",
          "Fe3+: red-brown precipitate [1]",
        ],
        commonError:
          "Confusing aluminium and magnesium (both give white precipitates, but only aluminium hydroxide redissolves in excess NaOH).",
        guideRef: "Chromatography and Analysis",
        difficulty: "challenge",
        hints: [
          "Several cations give precipitates with NaOH.",
          "Aluminium hydroxide is amphoteric and redissolves in excess.",
          "Copper(II) hydroxide is blue.",
          "Iron(III) hydroxide is red-brown.",
        ],
      },
      {
        id: "exam-chemistry-q4-16",
        question:
          "A hydrocarbon X contains 85.7% carbon and 14.3% hydrogen by mass. Its relative molecular mass is 56. (Ar: C = 12, H = 1)\n(a) Calculate the empirical formula of X. [3]\n(b) Determine the molecular formula of X and state whether it is an alkane or an alkene. [3]",
        marks: 6,
        modelAnswer:
          "(a) C: 85.7/12 = 7.142; H: 14.3/1 = 14.3. Divide by the smaller (7.142): C = 1, H = 2.00. Empirical formula = CH2.\n(b) Empirical formula mass of CH2 = 12 + 2 = 14. n = 56/14 = 4. Molecular formula = (CH2)4 = C4H8. This fits the general formula CnH2n, so X is an alkene.",
        markScheme: [
          "C: 7.14 mol and H: 14.3 mol [1]",
          "divide by smallest -> ratio 1:2 [1]",
          "empirical formula CH2 [1]",
          "EFM = 14; n = 56/14 = 4 [1]",
          "molecular formula C4H8 [1]",
          "alkene (fits CnH2n) [1]",
        ],
        commonError:
          "Stopping at the empirical formula CH2 and giving it as the molecular formula without using the Mr.",
        guideRef: "Empirical and Molecular Formulae",
        difficulty: "challenge",
        hints: [
          "Divide each percentage by its Ar.",
          "Divide both by the smaller value.",
          "EFM of CH2 = 14.",
          "n = Mr / EFM; then check CnH2n vs CnH2n+2.",
        ],
        solutions: [
          {
            label: "Empirical to molecular formula",
            steps: [
              "C: 85.7 / 12 = 7.142; H: 14.3 / 1 = 14.3",
              "Divide by 7.142: C = 1.00, H = 2.00, giving empirical formula CH2",
              "EFM(CH2) = 12 + 2 = 14",
              "n = 56 / 14 = 4, so molecular formula = C4H8",
              "C4H8 fits CnH2n, so X is an alkene",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q4-17",
        question:
          "Ethanol can be oxidised to ethanoic acid.\n(a) Name a suitable oxidising agent and the colour change you would observe. [2]\n(b) Apart from oxidation by an oxidising agent, state how ethanol can be converted to ethanoic acid by leaving wine open to the air, and name the type of organism involved. [2]",
        marks: 4,
        modelAnswer:
          "(a) Acidified potassium manganate(VII) (potassium permanganate) is a suitable oxidising agent; it changes colour from purple to colourless. (Acidified potassium dichromate(VI) is also acceptable: orange to green.)\n(b) Ethanol is oxidised by oxygen in the air to ethanoic acid through the action of bacteria (microbial oxidation / fermentation by bacteria), which is why wine turns sour (to vinegar).",
        markScheme: [
          "acidified potassium manganate(VII) or dichromate(VI) [1]",
          "correct colour change (purple to colourless / orange to green) [1]",
          "oxidised by oxygen in the air [1]",
          "bacteria involved [1]",
        ],
        commonError:
          "Giving the dichromate colour change as the manganate change or vice versa (manganate: purple to colourless; dichromate: orange to green).",
        guideRef: "Organic Chemistry: Alcohols",
        difficulty: "warmup",
        hints: [
          "Use an acidified oxidising agent.",
          "Manganate(VII) goes purple to colourless.",
          "Air can oxidise ethanol slowly.",
          "Bacteria turn wine into vinegar.",
        ],
      },
      {
        id: "exam-chemistry-q4-18",
        question:
          "A 0.500 g sample of impure calcium carbonate reacts with excess dilute hydrochloric acid. The carbon dioxide produced has a volume of 96.0 cm^3 at r.t.p.\nCaCO3 + 2HCl -> CaCl2 + H2O + CO2\n(Mr CaCO3 = 100; molar gas volume = 24 000 cm^3/mol)\n(a) Calculate the amount, in moles, of carbon dioxide produced. [2]\n(b) Calculate the mass of calcium carbonate that reacted. [2]\n(c) Calculate the percentage purity of the sample. [1]",
        marks: 5,
        modelAnswer:
          "(a) n(CO2) = V/24000 = 96.0/24000 = 0.00400 mol.\n(b) Ratio CaCO3:CO2 = 1:1, so n(CaCO3) = 0.00400 mol; mass = 0.00400 x 100 = 0.400 g.\n(c) % purity = (0.400/0.500) x 100 = 80.0%.",
        markScheme: [
          "n(CO2) = 96.0/24000 = 0.00400 mol [1]",
          "n(CaCO3) = 0.00400 mol (1:1) [1]",
          "mass CaCO3 = 0.00400 x 100 = 0.400 g [1]",
          "second mark for working/units [1]",
          "% purity = (0.400/0.500) x 100 = 80.0% [1]",
        ],
        commonError:
          "Using 24 (for dm^3) when the volume is in cm^3; with cm^3 you must divide by 24 000.",
        guideRef: "Molar Gas Volume and Gas Calculations",
        difficulty: "challenge",
        hints: [
          "Volume is in cm^3, so divide by 24 000.",
          "Ratio CaCO3:CO2 = 1:1.",
          "Mass of pure CaCO3 = moles x 100.",
          "% purity = (pure mass / sample mass) x 100.",
        ],
        strategy: "gas volume to moles, then mass, then purity",
        solutions: [
          {
            label: "Purity from gas volume",
            steps: [
              "n(CO2) = 96.0 cm^3 / 24000 cm^3/mol = 0.00400 mol",
              "Ratio CaCO3:CO2 = 1:1, so n(CaCO3) = 0.00400 mol",
              "m(CaCO3) = 0.00400 mol x 100 g/mol = 0.400 g",
              "% purity = (0.400 / 0.500) x 100 = 80.0%",
            ],
          },
        ],
      },
      {
        id: "exam-chemistry-q4-19",
        question:
          "Diamond, graphite and a buckminsterfullerene (C60) are all allotropes of carbon.\n(a) State what is meant by the term allotropes. [1]\n(b) Compare the structure of graphite with that of C60 (a fullerene), and give one use of C60 or related fullerenes/nanotubes. [3]",
        marks: 4,
        modelAnswer:
          "(a) Allotropes are different structural forms of the same element in the same physical state (different arrangements of the atoms).\n(b) Graphite has a giant covalent structure of flat layers of hexagonally arranged carbon atoms held together by weak forces between layers. C60 is a simple molecular structure: 60 carbon atoms joined in a closed cage (a hollow ball / sphere of linked hexagons and pentagons), with weak forces between the separate molecules. A use of fullerenes or carbon nanotubes is as drug delivery carriers, lubricants, or to strengthen materials / as catalysts (any one).",
        markScheme: [
          "allotropes: different forms of the same element [1]",
          "graphite: giant covalent layers [1]",
          "C60: simple molecular cage/ball of 60 carbon atoms [1]",
          "a valid use (drug delivery / lubricant / nanotube strengthening / catalyst) [1]",
        ],
        commonError:
          "Describing C60 as a giant structure; it is a simple molecular structure (discrete C60 molecules).",
        guideRef: "Giant Covalent Structures",
        difficulty: "warmup",
        hints: [
          "Allotropes are forms of one element.",
          "Graphite is a giant layered structure.",
          "C60 is a discrete molecule (a cage).",
          "Fullerenes have uses in medicine and materials.",
        ],
      },
      {
        id: "exam-chemistry-q4-20",
        question:
          "Hydrogen gas can be used as a clean fuel in a hydrogen-oxygen fuel cell.\n2H2 + O2 -> 2H2O\n(a) State one advantage and one disadvantage of using hydrogen as a fuel compared with petrol. [2]\n(b) Calculate the mass of water produced when 4.0 g of hydrogen reacts completely with oxygen. (Mr H2 = 2; Mr H2O = 18) [3]",
        marks: 5,
        modelAnswer:
          "(a) Advantage: burning hydrogen (or its use in a fuel cell) produces only water, so there is no carbon dioxide or other carbon-based pollution. Disadvantage: hydrogen is difficult and expensive to store and transport (it is highly flammable / explosive and must be compressed or liquefied), and energy is needed to produce it.\n(b) n(H2) = 4.0/2 = 2.0 mol. Ratio H2:H2O = 2:2 = 1:1, so n(H2O) = 2.0 mol. Mass = 2.0 x 18 = 36 g.",
        markScheme: [
          "advantage: only water produced / no CO2 [1]",
          "disadvantage: hard to store/transport / flammable / costly to make [1]",
          "n(H2) = 4.0/2 = 2.0 mol [1]",
          "n(H2O) = 2.0 mol (1:1) [1]",
          "mass = 2.0 x 18 = 36 g [1]",
        ],
        commonError:
          "Using the ratio H2:H2O as 2:1 instead of 2:2 = 1:1 from the balanced equation.",
        guideRef: "Reacting Masses and the Limiting Reactant",
        difficulty: "warmup",
        hints: [
          "Hydrogen fuel produces only water.",
          "Storage and safety are drawbacks.",
          "Convert hydrogen mass to moles.",
          "Ratio H2:H2O is 2:2 = 1:1.",
        ],
        solutions: [
          {
            label: "Mass of water from a fuel cell",
            steps: [
              "n(H2) = 4.0 g / 2 g/mol = 2.0 mol",
              "Ratio H2:H2O = 2:2 = 1:1, so n(H2O) = 2.0 mol",
              "m(H2O) = 2.0 mol x 18 g/mol = 36 g",
            ],
          },
        ],
      },
    ],
  },
];
