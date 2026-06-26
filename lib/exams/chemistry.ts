import type { ComprehensiveExam } from "../types";

export const chemistryExam: ComprehensiveExam = {
  id: "exam-chemistry",
  subject: "chemistry",
  title: "Chemistry — Full Mock Exam",

  mcqPapers: [
    {
      id: "exam-chemistry-mcq-1",
      title: "Mock Exam — MCQ Paper 1",
      description:
        "25 multiple-choice questions spanning the full Cambridge IGCSE 0620 Extended syllabus. Allow 45 minutes.",
      questions: [
        {
          id: "exam-chemistry-mcq-p1-01",
          question:
            "Which change of state occurs when a solid turns directly into a gas without becoming a liquid?",
          options: [
            "Condensation",
            "Freezing",
            "Evaporation",
            "Sublimation",
          ],
          answerIndex: 3,
          explanation:
            "Sublimation is the direct change from solid to gas (e.g. solid carbon dioxide / iodine). Condensation is gas → liquid, evaporation is liquid → gas, freezing is liquid → solid.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p1-02",
          question:
            "Why do gases diffuse faster than liquids?",
          options: [
            "Gas particles move faster and are much further apart",
            "Gas particles are larger",
            "Gases have stronger forces between particles",
            "Gas particles have no kinetic energy",
          ],
          answerIndex: 0,
          explanation:
            "In a gas the particles move quickly in random directions and are far apart with negligible forces between them, so they spread (diffuse) rapidly. In a liquid particles are close together with stronger forces, so diffusion is much slower.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p1-03",
          question:
            "An atom has the electron configuration 2,8,7. In which group and period of the Periodic Table is it found?",
          options: [
            "Group VII, Period 2",
            "Group I, Period 3",
            "Group V, Period 3",
            "Group VII, Period 3",
          ],
          answerIndex: 3,
          explanation:
            "The number of outer-shell electrons (7) gives the group (VII), and the number of occupied shells (3) gives the period (3). This element is chlorine.",
          difficulty: "core",
          hints: [
            "The number of outer electrons gives the group number.",
            "The number of electron shells gives the period number.",
            "2,8,7 → outer shell has 7 electrons, three shells used.",
          ],
          strategy: "read group from outer electrons, period from shell count",
        },
        {
          id: "exam-chemistry-mcq-p1-04",
          question:
            "Which statement about the isotopes ¹²C and ¹⁴C is correct?",
          options: [
            "They have different numbers of protons",
            "They have the same number of neutrons",
            "They have the same number of electrons in a neutral atom",
            "They have different chemical properties",
          ],
          answerIndex: 2,
          explanation:
            "Isotopes have the same proton number (6 for carbon) and therefore the same number of electrons in the neutral atom, giving identical chemical properties. They differ only in neutron number (6 vs 8).",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p1-05",
          question:
            "Which of the following is a property typical of a Group I metal (alkali metal)?",
          options: [
            "Reacts vigorously with water to form an alkaline solution",
            "High density and high melting point",
            "Forms coloured compounds",
            "Has a full outer electron shell",
          ],
          answerIndex: 0,
          explanation:
            "Group I metals react vigorously with water, releasing hydrogen and forming an alkaline metal hydroxide solution. They are soft, have low densities and low melting points, form white (not coloured) compounds, and have ONE outer electron, not a full shell.",
          difficulty: "core",
        },
        {
          id: "exam-chemistry-mcq-p1-06",
          question:
            "What is the relative formula mass (Mr) of calcium hydroxide, Ca(OH)₂? (Ar: Ca = 40, O = 16, H = 1)",
          options: [
            "57",
            "112",
            "58",
            "74",
          ],
          answerIndex: 3,
          explanation:
            "Mr = 40 + 2×(16 + 1) = 40 + 2×17 = 40 + 34 = 74. The bracket means there are two O and two H atoms.",
          difficulty: "core",
          hints: [
            "The subscript 2 outside the bracket multiplies both O and H.",
            "Mr = Ca + 2×(O + H).",
            "40 + 2×17.",
          ],
          strategy: "expand the bracket before summing atomic masses",
        },
        {
          id: "exam-chemistry-mcq-p1-07",
          question:
            "How many atoms in total are present in one formula unit of ammonium sulfate, (NH₄)₂SO₄?",
          options: ["12", "14", "15", "11"],
          answerIndex: 2,
          explanation:
            "(NH₄)₂ = 2 N + 8 H = 10 atoms; SO₄ = 1 S + 4 O = 5 atoms. Total = 10 + 5 = 15 atoms.",
          difficulty: "core",
          hints: [
            "Multiply everything inside the bracket by 2.",
            "(NH₄)₂ gives 2 nitrogen and 8 hydrogen.",
            "Add the S and O atoms from SO₄.",
          ],
          strategy: "count atoms group by group, applying the bracket multiplier",
        },
        {
          id: "exam-chemistry-mcq-p1-08",
          question:
            "Which type of bonding is present in a sample of magnesium metal?",
          options: [
            "Ionic bonding",
            "Simple molecular covalent bonding",
            "Metallic bonding: a lattice of positive ions in a sea of delocalised electrons",
            "Giant covalent bonding",
          ],
          answerIndex: 2,
          explanation:
            "Metals consist of a lattice of positive metal ions surrounded by a 'sea' of delocalised outer electrons. The electrostatic attraction between the ions and the mobile electrons is the metallic bond, which explains conductivity and malleability.",
          difficulty: "core",
        },
        {
          id: "exam-chemistry-mcq-p1-09",
          question:
            "Diamond and graphite are both forms of carbon. Why can graphite conduct electricity but diamond cannot?",
          options: [
            "In graphite each carbon forms three bonds, leaving one delocalised electron per atom that is free to move",
            "Graphite has ionic bonds",
            "Diamond contains no carbon-carbon bonds",
            "Graphite is a metal",
          ],
          answerIndex: 0,
          explanation:
            "In graphite each carbon atom is covalently bonded to three others in layers, leaving one delocalised electron per atom free to move between layers and carry charge. In diamond every carbon forms four covalent bonds, so there are no free electrons and it cannot conduct.",
          difficulty: "core",
          hints: [
            "Count how many covalent bonds each carbon forms in each structure.",
            "Conduction needs charged particles free to move.",
            "Graphite leaves one electron per carbon delocalised.",
          ],
          strategy: "link structure (bonds per atom) to free electrons and conduction",
        },
        {
          id: "exam-chemistry-mcq-p1-10",
          question:
            "How many moles are there in 8.0 g of methane, CH₄? (Mr CH₄ = 16)",
          options: [
            "0.25 mol",
            "128 mol",
            "2.0 mol",
            "0.50 mol",
          ],
          answerIndex: 3,
          explanation:
            "Moles = mass ÷ Mr = 8.0 ÷ 16 = 0.50 mol.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p1-11",
          question:
            "A 0.0500 mol sample of sodium hydroxide is dissolved to make 250 cm³ of solution. What is its concentration in mol/dm³?",
          options: ["0.200 mol/dm³", "0.0125 mol/dm³", "0.500 mol/dm³", "12.5 mol/dm³"],
          answerIndex: 0,
          explanation:
            "Concentration = moles ÷ volume in dm³ = 0.0500 ÷ 0.250 = 0.200 mol/dm³. (250 cm³ = 0.250 dm³.)",
          difficulty: "core",
          hints: [
            "Convert the volume to dm³: divide cm³ by 1000.",
            "Concentration = moles ÷ volume (dm³).",
            "0.0500 ÷ 0.250.",
          ],
          strategy: "concentration = moles ÷ volume in dm³; convert units first",
        },
        {
          id: "exam-chemistry-mcq-p1-12",
          question:
            "During electrolysis, at which electrode does reduction always occur?",
          options: [
            "The cathode, because positive ions gain electrons there",
            "The anode, because it is positive",
            "The anode, because negative ions lose electrons there",
            "Neither electrode",
          ],
          answerIndex: 0,
          explanation:
            "Reduction is gain of electrons. At the cathode (negative electrode) positive ions (cations) gain electrons, so reduction always occurs there. Oxidation (loss of electrons) occurs at the anode.",
          difficulty: "warmup",
          hints: [
            "Reduction means gain of electrons (OIL RIG).",
            "Which electrode attracts the positive ions?",
            "Cations move to the cathode and gain electrons.",
          ],
          strategy: "OIL RIG; cathode = reduction (cations gain electrons)",
        },
        {
          id: "exam-chemistry-mcq-p1-13",
          question:
            "Which statement best describes an exothermic reaction?",
          options: [
            "Energy is taken in from the surroundings and ΔH is positive",
            "No energy change occurs",
            "The temperature of the surroundings decreases",
            "Energy is released to the surroundings and ΔH is negative",
          ],
          answerIndex: 3,
          explanation:
            "In an exothermic reaction energy is transferred TO the surroundings (which warm up), and the enthalpy change ΔH is negative. Endothermic reactions take in energy and have a positive ΔH.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p1-14",
          question:
            "Which of the following would increase the rate of a reaction between zinc and dilute sulfuric acid?",
          options: [
            "Using larger pieces of zinc",
            "Cooling the mixture",
            "Increasing the concentration of the acid",
            "Adding water to dilute the acid",
          ],
          answerIndex: 2,
          explanation:
            "Increasing acid concentration increases the number of acid particles per unit volume, so collisions are more frequent and the rate increases. Larger pieces reduce surface area (slower), cooling slows the reaction, and diluting reduces concentration (slower).",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p1-15",
          question:
            "What colour change is seen when blue litmus paper is dipped into a dilute acid?",
          options: ["Blue to red", "Red to blue", "Blue to green", "No change"],
          answerIndex: 0,
          explanation:
            "Acids turn blue litmus red. (Alkalis turn red litmus blue.)",
          difficulty: "core",
        },
        {
          id: "exam-chemistry-mcq-p1-16",
          question:
            "25.0 cm³ of sodium hydroxide solution is exactly neutralised by 20.0 cm³ of 0.100 mol/dm³ hydrochloric acid. What is the concentration of the sodium hydroxide? (NaOH + HCl → NaCl + H₂O)",
          options: ["0.080 mol/dm³", "0.125 mol/dm³", "0.100 mol/dm³", "0.050 mol/dm³"],
          answerIndex: 0,
          explanation:
            "Moles HCl = 0.100 × (20.0/1000) = 0.00200 mol. Ratio HCl:NaOH = 1:1, so moles NaOH = 0.00200 mol. Concentration NaOH = 0.00200 ÷ (25.0/1000) = 0.00200 ÷ 0.0250 = 0.080 mol/dm³.",
          difficulty: "challenge",
          hints: [
            "Find moles of HCl from concentration × volume (in dm³).",
            "Use the 1:1 mole ratio to get moles of NaOH.",
            "Concentration NaOH = moles NaOH ÷ its volume in dm³.",
          ],
          strategy: "titration: moles of known → mole ratio → concentration of unknown",
        },
        {
          id: "exam-chemistry-mcq-p1-17",
          question:
            "Which metal could be used to displace copper from copper(II) sulfate solution?",
          options: ["Silver", "Gold", "Iron", "Copper"],
          answerIndex: 2,
          explanation:
            "A more reactive metal displaces a less reactive one from its salt solution. Iron is above copper in the reactivity series, so iron displaces copper: Fe + CuSO₄ → FeSO₄ + Cu. Silver and gold are below copper and cannot.",
          difficulty: "core",
          hints: [
            "A metal can only displace one less reactive than itself.",
            "Where is copper in the reactivity series compared with the options?",
            "Iron is more reactive than copper.",
          ],
          strategy: "displacement: more reactive metal displaces less reactive from solution",
        },
        {
          id: "exam-chemistry-mcq-p1-18",
          question:
            "Which gas turns damp red litmus paper blue?",
          options: ["Carbon dioxide", "Chlorine", "Ammonia", "Hydrogen"],
          answerIndex: 2,
          explanation:
            "Ammonia (NH₃) is alkaline and turns damp red litmus paper blue. Carbon dioxide is weakly acidic, chlorine bleaches litmus (turning it white), and hydrogen has no effect on litmus (it gives a squeaky pop with a lit splint).",
          difficulty: "core",
        },
        {
          id: "exam-chemistry-mcq-p1-19",
          question:
            "What is the general formula of the alkanes?",
          options: [
            "CₙH₂ₙ₊₂",
            "CₙH₂ₙ",
            "CₙH₂ₙ₋₂",
            "CₙH₂ₙ₊₁OH",
          ],
          answerIndex: 0,
          explanation:
            "Alkanes are saturated hydrocarbons with the general formula CₙH₂ₙ₊₂ (e.g. methane CH₄, ethane C₂H₆). CₙH₂ₙ is the alkene formula; CₙH₂ₙ₊₁OH is the alcohol formula.",
          difficulty: "warmup",
          hints: [
            "Alkanes are saturated (only single bonds).",
            "Check against methane: n = 1 should give 4 hydrogens.",
            "2n + 2 with n = 1 gives 4.",
          ],
          strategy: "test general formula against a known member (methane)",
        },
        {
          id: "exam-chemistry-mcq-p1-20",
          question:
            "Which process is used to separate the coloured pigments in a sample of ink?",
          options: ["Fractional distillation", "Filtration", "Chromatography", "Crystallisation"],
          answerIndex: 2,
          explanation:
            "Paper chromatography separates a mixture of soluble coloured substances based on their different solubilities/affinities, giving separate spots. Filtration separates insoluble solids; distillation separates liquids; crystallisation obtains a solid from solution.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p1-21",
          question:
            "What is the empirical formula of a compound containing 40.0% carbon, 6.7% hydrogen and 53.3% oxygen by mass? (Ar: C = 12, H = 1, O = 16)",
          options: [
            "CHO",
            "CH₃O",
            "C₂H₄O₂",
            "CH₂O",
          ],
          answerIndex: 3,
          explanation:
            "Divide each % by Ar: C = 40.0/12 = 3.33; H = 6.7/1 = 6.7; O = 53.3/16 = 3.33. Divide by the smallest (3.33): C = 1, H = 2.0, O = 1. Empirical formula = CH₂O.",
          difficulty: "challenge",
          hints: [
            "Divide each percentage by the relevant Ar to get moles.",
            "Divide all the results by the smallest value.",
            "Round to whole-number ratios.",
          ],
          strategy: "empirical formula: % ÷ Ar, then divide by smallest",
        },
        {
          id: "exam-chemistry-mcq-p1-22",
          question:
            "Which one of these is a greenhouse gas that contributes to global warming?",
          options: ["Nitrogen", "Oxygen", "Methane", "Argon"],
          answerIndex: 2,
          explanation:
            "Methane (CH₄) and carbon dioxide are greenhouse gases that absorb re-radiated infrared and contribute to the enhanced greenhouse effect. Nitrogen, oxygen and argon are not greenhouse gases.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p1-23",
          question:
            "The complete combustion of a hydrocarbon always produces which two products?",
          options: [
            "Carbon dioxide and water",
            "Carbon monoxide and water",
            "Carbon and hydrogen",
            "Carbon dioxide and hydrogen",
          ],
          answerIndex: 0,
          explanation:
            "Complete combustion (plenty of oxygen) of a hydrocarbon produces carbon dioxide and water only, e.g. CH₄ + 2O₂ → CO₂ + 2H₂O. Incomplete combustion (limited oxygen) can produce carbon monoxide and/or carbon (soot).",
          difficulty: "warmup",
          hints: [
            "Complete combustion means a plentiful supply of oxygen.",
            "Carbon ends up fully oxidised; hydrogen forms water.",
            "Full oxidation of carbon gives CO₂, not CO.",
          ],
          strategy: "complete vs incomplete combustion: CO₂+H₂O vs CO/C",
        },
        {
          id: "exam-chemistry-mcq-p1-24",
          question:
            "Which statement about a reversible reaction at equilibrium in a closed system is correct?",
          options: [
            "The forward reaction has stopped",
            "The concentrations of reactants and products are equal",
            "The rate of the forward reaction equals the rate of the reverse reaction",
            "All the reactants have been used up",
          ],
          answerIndex: 2,
          explanation:
            "At dynamic equilibrium the forward and reverse reactions continue at equal rates, so the concentrations of reactants and products remain constant (but are not necessarily equal). Nothing stops and reactants are not fully used up.",
          difficulty: "core",
          hints: [
            "Equilibrium is dynamic, not static.",
            "Constant concentration is not the same as equal concentration.",
            "Compare the two opposing rates.",
          ],
          strategy: "dynamic equilibrium: equal opposing rates, constant concentrations",
        },
        {
          id: "exam-chemistry-mcq-p1-25",
          question:
            "24.0 dm³ of a gas at r.t.p. contains how many moles? (molar gas volume = 24.0 dm³/mol at r.t.p.)",
          options: [
            "0.5 mol",
            "24 mol",
            "2.0 mol",
            "1.0 mol",
          ],
          answerIndex: 3,
          explanation:
            "Moles of gas = volume ÷ molar gas volume = 24.0 ÷ 24.0 = 1.0 mol at r.t.p.",
          difficulty: "warmup",
        },
      ],
    },
    {
      id: "exam-chemistry-mcq-2",
      title: "Mock Exam — MCQ Paper 2",
      description:
        "25 multiple-choice questions spanning the full Cambridge IGCSE 0620 Extended syllabus. Allow 45 minutes.",
      questions: [
        {
          id: "exam-chemistry-mcq-p2-01",
          question:
            "Which row correctly describes the arrangement and movement of particles in a solid?",
          options: [
            "Particles close together in a regular pattern, vibrating about fixed positions",
            "Particles far apart, moving randomly at high speed",
            "Particles close together but able to move past one another",
            "Particles with no forces between them",
          ],
          answerIndex: 0,
          explanation:
            "In a solid the particles are packed closely in a regular (ordered) arrangement and can only vibrate about fixed positions. Liquids have particles that move past one another; gases have particles far apart moving rapidly.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p2-02",
          question:
            "Two gas jars, one containing dense brown bromine vapour and one containing air, are connected. After some time the brown colour spreads evenly through both jars. This is evidence for which idea?",
          options: [
            "Particles are joined together rigidly",
            "Gases cannot mix",
            "Bromine is denser than air",
            "Particles are in constant random motion",
          ],
          answerIndex: 3,
          explanation:
            "The spreading (diffusion) of bromine through the air shows that gas particles are in constant, random motion and move into the spaces between the air particles until evenly mixed.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p2-03",
          question:
            "When two gases diffuse, the lighter gas diffuses faster. Which gas would diffuse fastest at the same temperature?",
          options: ["Cl₂ (Mr = 71)", "O₂ (Mr = 32)", "CO₂ (Mr = 44)", "H₂ (Mr = 2)"],
          answerIndex: 3,
          explanation:
            "At the same temperature lighter molecules move faster on average, so they diffuse faster. Hydrogen has the smallest relative molecular mass (2), so it diffuses fastest.",
          difficulty: "core",
          hints: [
            "Lighter particles move faster at a given temperature.",
            "Compare the relative molecular masses.",
            "Smallest Mr diffuses fastest.",
          ],
          strategy: "rate of diffusion increases as molecular mass decreases",
        },
        {
          id: "exam-chemistry-mcq-p2-04",
          question:
            "An element X forms an ion X³⁺. If X has the electron configuration 2,8,3, what is the electron configuration of the X³⁺ ion?",
          options: ["2,8", "2,8,3", "2,8,6", "2,8,8"],
          answerIndex: 0,
          explanation:
            "X (aluminium) loses its 3 outer electrons to form X³⁺, leaving 2,8. This is a stable full-outer-shell configuration like neon.",
          difficulty: "core",
          hints: [
            "A 3+ charge means three electrons have been lost.",
            "Remove electrons from the outermost shell.",
            "2,8,3 loses 3 → 2,8.",
          ],
          strategy: "form a positive ion by removing outer electrons",
        },
        {
          id: "exam-chemistry-mcq-p2-05",
          question:
            "Why are the noble gases (Group VIII / 0) very unreactive?",
          options: [
            "They have full outer electron shells",
            "They are very dense",
            "They have no protons",
            "They readily form ions",
          ],
          answerIndex: 0,
          explanation:
            "Noble gases have full outer electron shells (a stable electron arrangement), so they have little tendency to gain, lose or share electrons and are therefore very unreactive.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p2-06",
          question:
            "Going DOWN Group VII (the halogens), how do the reactivity and the colour change?",
          options: [
            "Reactivity decreases; colour gets darker",
            "Reactivity increases; colour gets lighter",
            "Reactivity increases; colour gets darker",
            "Reactivity decreases; colour gets lighter",
          ],
          answerIndex: 0,
          explanation:
            "Down Group VII reactivity DECREASES (atoms are larger, so the outer shell is further from the nucleus and gains an electron less easily) and the elements get DARKER and denser (pale yellow Cl₂ → red-brown Br₂ → dark grey/purple I₂).",
          difficulty: "core",
          hints: [
            "Halogens react by GAINING an electron — what makes that harder down the group?",
            "Larger atoms attract an incoming electron less strongly.",
            "Recall the colours: chlorine, bromine, iodine.",
          ],
          strategy: "Group VII trend: reactivity falls, colour darkens down the group",
        },
        {
          id: "exam-chemistry-mcq-p2-07",
          question:
            "In the dot-and-cross diagram of a water molecule (H₂O), how many lone (non-bonding) pairs of electrons are on the oxygen atom?",
          options: ["0", "1", "2", "4"],
          answerIndex: 2,
          explanation:
            "Oxygen has 6 outer electrons. Two are used in the two O–H bonding pairs, leaving 4 electrons as 2 lone pairs on the oxygen atom.",
          difficulty: "core",
          hints: [
            "Oxygen has 6 outer electrons.",
            "Two electrons are shared in each of the two O–H bonds.",
            "The remaining electrons form lone pairs.",
          ],
          strategy: "account for all outer electrons: bonding pairs then lone pairs",
        },
        {
          id: "exam-chemistry-mcq-p2-08",
          question:
            "Which substance has a giant covalent (macromolecular) structure?",
          options: ["Sodium chloride", "Carbon dioxide", "Silicon dioxide", "Iodine"],
          answerIndex: 2,
          explanation:
            "Silicon dioxide (SiO₂, silica) is a giant covalent structure with a high melting point. Sodium chloride is giant ionic; carbon dioxide and iodine are simple molecular.",
          difficulty: "core",
          hints: [
            "Giant covalent structures have very high melting points.",
            "Sodium chloride is ionic, not covalent.",
            "SiO₂ is related to diamond's bonding type.",
          ],
          strategy: "classify structures: giant ionic, giant covalent, simple molecular, metallic",
        },
        {
          id: "exam-chemistry-mcq-p2-09",
          question:
            "What mass of oxygen reacts with 12.0 g of magnesium? (2Mg + O₂ → 2MgO; Ar: Mg = 24, O = 16)",
          options: ["8.0 g", "16.0 g", "4.0 g", "24.0 g"],
          answerIndex: 0,
          explanation:
            "Moles Mg = 12.0 ÷ 24 = 0.500 mol. From 2Mg : O₂ = 2 : 1, moles O₂ = 0.250 mol. Mr(O₂) = 32, so mass O₂ = 0.250 × 32 = 8.0 g.",
          difficulty: "core",
          hints: [
            "Moles Mg = mass ÷ Ar.",
            "Use the 2:1 ratio of Mg to O₂.",
            "Mass O₂ = moles × 32.",
          ],
          strategy: "reacting masses: moles → ratio → mass (remember O₂ is 32)",
        },
        {
          id: "exam-chemistry-mcq-p2-10",
          question:
            "A reaction has an atom-efficient design. 50 g of a product was expected but only 40 g was obtained. What is the percentage yield?",
          options: [
            "125%",
            "90%",
            "10%",
            "80%",
          ],
          answerIndex: 3,
          explanation:
            "Percentage yield = (actual ÷ theoretical) × 100 = (40 ÷ 50) × 100 = 80%.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p2-11",
          question:
            "Molten lead(II) bromide (PbBr₂) is electrolysed using inert electrodes. What is formed at the cathode and anode?",
          options: [
            "Lead at the cathode; bromine at the anode",
            "Bromine at the cathode; lead at the anode",
            "Hydrogen at the cathode; oxygen at the anode",
            "Lead at both electrodes",
          ],
          answerIndex: 0,
          explanation:
            "In molten PbBr₂ the ions are Pb²⁺ and Br⁻. At the cathode Pb²⁺ is reduced to lead metal (Pb²⁺ + 2e⁻ → Pb). At the anode Br⁻ is oxidised to bromine (2Br⁻ → Br₂ + 2e⁻). No water present, so no H₂ or O₂.",
          difficulty: "core",
          hints: [
            "Identify the ions present in molten PbBr₂.",
            "Positive metal ions are reduced at the cathode.",
            "Negative bromide ions are oxidised at the anode.",
          ],
          strategy: "electrolysis of a molten binary salt: metal at cathode, non-metal at anode",
        },
        {
          id: "exam-chemistry-mcq-p2-12",
          question:
            "In the electrolysis of concentrated aqueous sodium chloride (brine) with inert electrodes, which product forms at the anode?",
          options: ["Sodium", "Hydrogen", "Chlorine", "Oxygen"],
          answerIndex: 2,
          explanation:
            "In concentrated brine the chloride ion is discharged in preference to OH⁻, so chlorine gas forms at the anode. Hydrogen forms at the cathode, and sodium hydroxide remains in solution.",
          difficulty: "warmup",
          hints: [
            "Concentrated chloride solutions favour discharge of Cl⁻.",
            "The anode is where oxidation of negative ions occurs.",
            "Compare with dilute solution (which would give oxygen).",
          ],
          strategy: "concentrated halide → halogen at anode (concentration effect)",
        },
        {
          id: "exam-chemistry-mcq-p2-13",
          question:
            "On a reaction profile (energy level) diagram for an exothermic reaction, which is true?",
          options: [
            "The products are at a higher energy than the reactants",
            "The products are at a lower energy than the reactants",
            "There is no activation energy",
            "Reactants and products are at the same energy",
          ],
          answerIndex: 1,
          explanation:
            "In an exothermic reaction the products are at a lower energy than the reactants (energy is released), so ΔH is negative. There is still an activation energy barrier (the 'hump') to overcome.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p2-14",
          question:
            "A catalyst speeds up a reaction. How does it do this?",
          options: [
            "By increasing the activation energy",
            "By increasing the concentration of reactants",
            "By increasing the temperature of the reaction",
            "By providing an alternative pathway with a lower activation energy",
          ],
          answerIndex: 3,
          explanation:
            "A catalyst provides an alternative reaction pathway with a lower activation energy, so a greater proportion of collisions are successful and the rate increases. The catalyst is not used up.",
          difficulty: "core",
          hints: [
            "A catalyst lowers the energy barrier.",
            "More particles then have enough energy to react.",
            "The catalyst itself is unchanged at the end.",
          ],
          strategy: "catalyst lowers activation energy → more successful collisions",
        },
        {
          id: "exam-chemistry-mcq-p2-15",
          question:
            "Which oxide is amphoteric (reacting with both acids and bases)?",
          options: ["Sodium oxide", "Carbon dioxide", "Aluminium oxide", "Sulfur dioxide"],
          answerIndex: 2,
          explanation:
            "Aluminium oxide (Al₂O₃) is amphoteric: it reacts with acids (as a base) and with alkalis (as an acid). Sodium oxide is basic; carbon dioxide and sulfur dioxide are acidic oxides.",
          difficulty: "warmup",
          hints: [
            "Amphoteric means reacting with both acids and bases.",
            "Metal oxides are usually basic, non-metal oxides acidic.",
            "Aluminium and zinc oxides are the classic amphoteric examples.",
          ],
          strategy: "classify oxides: basic, acidic, amphoteric, neutral",
        },
        {
          id: "exam-chemistry-mcq-p2-16",
          question:
            "Which method is most suitable for preparing the soluble salt copper(II) sulfate from copper(II) oxide and dilute sulfuric acid?",
          options: [
            "Titration",
            "Adding excess copper(II) oxide, filtering, then evaporating and crystallising the filtrate",
            "Mixing two soluble solutions and filtering off the salt",
            "Electrolysis of the oxide",
          ],
          answerIndex: 1,
          explanation:
            "CuO + H₂SO₄ → CuSO₄ + H₂O. Adding excess insoluble CuO ensures all the acid reacts; the excess solid is filtered off, then the filtrate is evaporated and crystallised to obtain pure CuSO₄ crystals.",
          difficulty: "core",
          hints: [
            "Use excess of the insoluble reactant to remove all the acid.",
            "Filter off the unreacted solid.",
            "Crystallise the salt from the filtrate.",
          ],
          strategy: "insoluble base + acid → excess solid, filter, crystallise",
        },
        {
          id: "exam-chemistry-mcq-p2-17",
          question:
            "Aluminium is extracted by electrolysis rather than by reduction with carbon. Why?",
          options: [
            "Aluminium is less reactive than carbon",
            "Aluminium is found as the pure metal",
            "Aluminium oxide does not melt",
            "Aluminium is more reactive than carbon, so carbon cannot reduce its oxide",
          ],
          answerIndex: 3,
          explanation:
            "Aluminium is more reactive than carbon, so carbon cannot reduce aluminium oxide. Therefore electrolysis (of molten Al₂O₃ dissolved in cryolite) is used. Metals below carbon in reactivity (e.g. iron, zinc) can be extracted by carbon reduction.",
          difficulty: "core",
          hints: [
            "Carbon reduction only works for metals less reactive than carbon.",
            "Where is aluminium relative to carbon in reactivity?",
            "Very reactive metals are extracted by electrolysis.",
          ],
          strategy: "extraction method depends on position relative to carbon",
        },
        {
          id: "exam-chemistry-mcq-p2-18",
          question:
            "A flame test on a compound gives a lilac (light purple) flame. Which metal ion is present?",
          options: ["Sodium", "Potassium", "Copper(II)", "Calcium"],
          answerIndex: 1,
          explanation:
            "Potassium ions give a lilac flame. Sodium gives yellow, copper(II) gives blue-green, and calcium gives an orange-red (brick-red) flame.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p2-19",
          question:
            "Which homologous series has the general formula CₙH₂ₙ and decolourises bromine water?",
          options: [
            "Alkanes",
            "Carboxylic acids",
            "Alcohols",
            "Alkenes",
          ],
          answerIndex: 3,
          explanation:
            "Alkenes have the general formula CₙH₂ₙ and contain a C=C double bond, which undergoes addition with bromine, decolourising bromine water. Alkanes are saturated and do not decolourise it readily.",
          difficulty: "warmup",
          hints: [
            "The general formula CₙH₂ₙ indicates one degree of unsaturation.",
            "Bromine water tests for a C=C double bond.",
            "Unsaturated hydrocarbons decolourise bromine water.",
          ],
          strategy: "match general formula and functional-group test",
        },
        {
          id: "exam-chemistry-mcq-p2-20",
          question:
            "Ethene molecules join together to form poly(ethene). What name is given to this type of reaction?",
          options: ["Condensation polymerisation", "Addition polymerisation", "Cracking", "Neutralisation"],
          answerIndex: 1,
          explanation:
            "Many ethene (alkene) monomers add together via their double bonds to form the long-chain polymer poly(ethene) with no other product. This is addition polymerisation. Condensation polymerisation releases a small molecule such as water.",
          difficulty: "warmup",
          hints: [
            "Alkene monomers contain C=C double bonds.",
            "No small molecule is lost in this process.",
            "Monomers simply 'add' together.",
          ],
          strategy: "addition polymerisation: unsaturated monomers, no by-product",
        },
        {
          id: "exam-chemistry-mcq-p2-21",
          question:
            "What volume of carbon dioxide (at r.t.p.) is produced when 0.20 mol of calcium carbonate decomposes? (CaCO₃ → CaO + CO₂; molar gas volume = 24.0 dm³/mol)",
          options: [
            "2.4 dm³",
            "24 dm³",
            "0.20 dm³",
            "4.8 dm³",
          ],
          answerIndex: 3,
          explanation:
            "Mole ratio CaCO₃ : CO₂ = 1 : 1, so moles CO₂ = 0.20 mol. Volume = 0.20 × 24.0 = 4.8 dm³ at r.t.p.",
          difficulty: "core",
          hints: [
            "Use the 1:1 mole ratio from the equation.",
            "Volume of gas = moles × molar gas volume.",
            "0.20 × 24.0.",
          ],
          strategy: "gas volume = moles × 24.0 dm³/mol at r.t.p.",
        },
        {
          id: "exam-chemistry-mcq-p2-22",
          question:
            "Which gas, present in clean dry air, makes up approximately 78% by volume?",
          options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
          answerIndex: 2,
          explanation:
            "Clean dry air is about 78% nitrogen and 21% oxygen by volume, with around 1% argon and about 0.04% carbon dioxide.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p2-23",
          question:
            "Iron rusts in the presence of which two substances?",
          options: ["Oxygen and nitrogen", "Water and oxygen", "Water and carbon dioxide", "Oxygen only"],
          answerIndex: 1,
          explanation:
            "Rusting of iron requires BOTH water and oxygen. The product is hydrated iron(III) oxide. Removing either water or oxygen (e.g. by a barrier or sacrificial protection) prevents rusting.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p2-24",
          question:
            "In the Contact process for making sulfuric acid, sulfur dioxide is converted to sulfur trioxide: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH negative. Which conditions give a good yield at an acceptable rate?",
          options: [
            "High temperature, low pressure, no catalyst",
            "Room temperature with a platinum catalyst",
            "Very low temperature and very high pressure",
            "About 450 °C, ~1–2 atm, vanadium(V) oxide catalyst",
          ],
          answerIndex: 3,
          explanation:
            "The Contact process uses around 450 °C (a compromise temperature: lower favours yield as the forward reaction is exothermic, but too low is slow), a modest pressure of about 1–2 atm (the reaction already gives a high yield, so high pressure is not needed), and a vanadium(V) oxide (V₂O₅) catalyst.",
          difficulty: "challenge",
          hints: [
            "The forward reaction is exothermic, so low temperature favours yield but is slow.",
            "A moderate temperature is a compromise for rate and yield.",
            "Recall the catalyst used in the Contact process.",
          ],
          strategy: "industrial compromise: temperature, pressure, catalyst (V₂O₅)",
        },
        {
          id: "exam-chemistry-mcq-p2-25",
          question:
            "A solution has a pH of 2. By what factor is its hydrogen ion concentration greater than that of a solution with pH 4?",
          options: ["2 times", "10 times", "100 times", "1000 times"],
          answerIndex: 2,
          explanation:
            "Each unit decrease in pH represents a ten-fold increase in H⁺ concentration. From pH 4 to pH 2 is a decrease of 2 units, so the H⁺ concentration is 10 × 10 = 100 times greater.",
          difficulty: "challenge",
          hints: [
            "The pH scale is logarithmic (base 10).",
            "One pH unit = ×10 change in H⁺ concentration.",
            "Two units = ×10 ×10.",
          ],
          strategy: "pH logarithmic: each unit is a factor of 10 in [H⁺]",
        },
      ],
    },
    {
      id: "exam-chemistry-mcq-3",
      title: "Mock Exam — MCQ Paper 3",
      description:
        "25 multiple-choice questions spanning the full Cambridge IGCSE 0620 Extended syllabus. Allow 45 minutes.",
      questions: [
        {
          id: "exam-chemistry-mcq-p3-01",
          question:
            "Which statement about an element is always true?",
          options: [
            "It contains atoms with the same number of neutrons",
            "It contains only one type of atom (same proton number)",
            "It cannot be a gas",
            "It is always a metal",
          ],
          answerIndex: 1,
          explanation:
            "An element is a substance made of only one type of atom — all its atoms have the same proton (atomic) number. They can differ in neutron number (isotopes), can be metals or non-metals, and can be solid, liquid or gas.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p3-02",
          question:
            "Which statement correctly distinguishes a compound from a mixture?",
          options: [
            "A compound can be separated by physical means; a mixture cannot",
            "A compound has the same properties as its constituent elements",
            "A mixture always has a fixed composition",
            "A compound has its elements chemically combined in fixed proportions; a mixture does not",
          ],
          answerIndex: 3,
          explanation:
            "In a compound the elements are chemically bonded in fixed proportions and the compound has properties different from its elements; it can only be separated chemically. A mixture has variable composition and can be separated by physical means.",
          difficulty: "core",
          hints: [
            "Compounds involve chemical bonds; mixtures do not.",
            "Think about whether composition is fixed or variable.",
            "Consider how each can be separated.",
          ],
          strategy: "compound = chemically combined, fixed ratio; mixture = physical, variable",
        },
        {
          id: "exam-chemistry-mcq-p3-03",
          question:
            "An element is in Group II and Period 4 of the Periodic Table. Which statement about it is correct?",
          options: [
            "It has 2 outer-shell electrons and forms 2+ ions",
            "It has 4 outer-shell electrons",
            "It is a non-metal",
            "It forms 2− ions",
          ],
          answerIndex: 0,
          explanation:
            "Group II elements have 2 outer-shell electrons and lose them to form 2+ ions (this element is calcium). They are reactive metals, not non-metals.",
          difficulty: "core",
          hints: [
            "The group number equals the number of outer electrons.",
            "Metals lose their outer electrons to form positive ions.",
            "Group II → loses 2 electrons.",
          ],
          strategy: "group number → outer electrons → ion charge for metals",
        },
        {
          id: "exam-chemistry-mcq-p3-04",
          question:
            "Which formula correctly represents aluminium oxide?",
          options: ["AlO", "Al₂O", "Al₂O₃", "AlO₃"],
          answerIndex: 2,
          explanation:
            "Aluminium forms Al³⁺ and oxygen forms O²⁻. To balance charges, the formula is Al₂O₃ (2 × 3+ = 6+, balanced by 3 × 2− = 6−).",
          difficulty: "warmup",
          hints: [
            "Aluminium ion is 3+, oxide ion is 2−.",
            "Cross over the charges to find the ratio.",
            "Balance total positive and negative charge.",
          ],
          strategy: "ionic formula by balancing charges",
        },
        {
          id: "exam-chemistry-mcq-p3-05",
          question:
            "Which property is typical of a transition element?",
          options: [
            "Low density and very low melting point",
            "Forms ions of only one fixed charge",
            "Forms coloured compounds and can act as a catalyst",
            "Is very reactive with cold water",
          ],
          answerIndex: 2,
          explanation:
            "Transition elements form coloured compounds, often have variable oxidation states (more than one ion charge), act as catalysts, and have high densities and high melting points. They are far less reactive with water than Group I metals.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p3-06",
          question:
            "Sodium chloride is described as having a giant ionic lattice. Which property does this explain?",
          options: [
            "It is a gas at room temperature",
            "It has a high melting point",
            "It conducts electricity when solid",
            "It is soft and easily compressed",
          ],
          answerIndex: 1,
          explanation:
            "The giant ionic lattice is held together by strong electrostatic forces between oppositely charged ions throughout the structure, so a large amount of energy is needed to break them — giving a high melting point. It does not conduct when solid (ions are fixed).",
          difficulty: "core",
          hints: [
            "Strong forces throughout a giant structure need lots of energy to break.",
            "Solid ionic compounds have fixed ions.",
            "Relate melting point to the strength of forces.",
          ],
          strategy: "giant ionic lattice → strong electrostatic forces → high melting point",
        },
        {
          id: "exam-chemistry-mcq-p3-07",
          question:
            "Which equation is correctly balanced?",
          options: [
            "H₂ + O₂ → H₂O",
            "2H₂ + 2O₂ → 2H₂O",
            "H₂ + O₂ → 2H₂O",
            "2H₂ + O₂ → 2H₂O",
          ],
          answerIndex: 3,
          explanation:
            "2H₂ + O₂ → 2H₂O balances: left has 4 H and 2 O; right has 4 H (2×2) and 2 O (2×1). The other options have unequal numbers of atoms.",
          difficulty: "core",
          hints: [
            "Count hydrogen and oxygen atoms on each side.",
            "Water is H₂O; each molecule has 2 H and 1 O.",
            "Balance oxygen using O₂ (2 atoms).",
          ],
          strategy: "balance equations by counting atoms of each element",
        },
        {
          id: "exam-chemistry-mcq-p3-08",
          question:
            "What is the oxidation state (number) of sulfur in sulfuric acid, H₂SO₄?",
          options: ["+2", "+4", "+6", "−2"],
          answerIndex: 2,
          explanation:
            "H is +1 (×2 = +2), O is −2 (×4 = −8). For a neutral molecule the total is 0: (+2) + S + (−8) = 0, so S = +6.",
          difficulty: "challenge",
          hints: [
            "Hydrogen is usually +1, oxygen usually −2.",
            "The oxidation numbers must sum to zero in a neutral compound.",
            "(2 × +1) + S + (4 × −2) = 0.",
          ],
          strategy: "oxidation states sum to the overall charge (0 for a molecule)",
        },
        {
          id: "exam-chemistry-mcq-p3-09",
          question:
            "How many molecules are present in 0.50 mol of carbon dioxide? (Avogadro constant = 6.0 × 10²³ /mol)",
          options: ["3.0 × 10²³", "6.0 × 10²³", "1.2 × 10²⁴", "0.50"],
          answerIndex: 0,
          explanation:
            "Number of molecules = moles × Avogadro constant = 0.50 × 6.0 × 10²³ = 3.0 × 10²³ molecules.",
          difficulty: "core",
          hints: [
            "Number of particles = moles × Avogadro constant.",
            "0.50 × 6.0 × 10²³.",
            "Half of 6.0 × 10²³.",
          ],
          strategy: "particles = moles × 6.0 × 10²³",
        },
        {
          id: "exam-chemistry-mcq-p3-10",
          question:
            "Which substance, when added to water, produces a solution with a pH greater than 7?",
          options: ["Carbon dioxide", "Sodium oxide", "Sulfur dioxide", "Hydrogen chloride"],
          answerIndex: 1,
          explanation:
            "Sodium oxide is a basic (metal) oxide that reacts with water to form sodium hydroxide, an alkali (pH > 7). CO₂ and SO₂ form acidic solutions; HCl forms a strongly acidic solution.",
          difficulty: "core",
          hints: [
            "Metal oxides tend to be basic; non-metal oxides acidic.",
            "An alkali gives pH > 7.",
            "Which option is a metal oxide?",
          ],
          strategy: "metal oxide + water → alkali (pH > 7)",
        },
        {
          id: "exam-chemistry-mcq-p3-11",
          question:
            "A student measures 50 cm³ of 0.40 mol/dm³ hydrochloric acid. How many moles of HCl are present?",
          options: ["0.020 mol", "0.20 mol", "0.0080 mol", "20 mol"],
          answerIndex: 0,
          explanation:
            "Moles = concentration × volume (dm³) = 0.40 × (50/1000) = 0.40 × 0.050 = 0.020 mol.",
          difficulty: "core",
          hints: [
            "Convert 50 cm³ to dm³ (÷1000).",
            "Moles = concentration × volume (dm³).",
            "0.40 × 0.050.",
          ],
          strategy: "moles in solution = concentration × volume (dm³)",
        },
        {
          id: "exam-chemistry-mcq-p3-12",
          question:
            "Which is the correct ionic half-equation for the formation of chlorine at the anode during electrolysis?",
          options: [
            "Cl₂ + 2e⁻ → 2Cl⁻",
            "2Cl⁻ + 2e⁻ → Cl₂",
            "Cl⁻ → Cl + e⁻",
            "2Cl⁻ → Cl₂ + 2e⁻",
          ],
          answerIndex: 3,
          explanation:
            "At the anode oxidation occurs (loss of electrons): 2Cl⁻ → Cl₂ + 2e⁻. Electrons are released (shown on the right). The other options show reduction or are unbalanced.",
          difficulty: "warmup",
          hints: [
            "Oxidation at the anode = loss of electrons.",
            "Electrons should appear on the product side.",
            "Balance charge and atoms.",
          ],
          strategy: "anode half-equation: lose electrons, balance charge",
        },
        {
          id: "exam-chemistry-mcq-p3-13",
          question:
            "When 0.10 mol of hydrochloric acid is neutralised by sodium hydroxide, 5.7 kJ of heat is released. What is the enthalpy of neutralisation per mole?",
          options: ["−5.7 kJ/mol", "−57 kJ/mol", "+57 kJ/mol", "−570 kJ/mol"],
          answerIndex: 1,
          explanation:
            "Energy per mole = 5.7 ÷ 0.10 = 57 kJ released per mole. As it is exothermic (heat released), ΔH = −57 kJ/mol.",
          difficulty: "challenge",
          hints: [
            "Energy per mole = energy ÷ moles.",
            "5.7 ÷ 0.10.",
            "Releasing heat means a negative ΔH.",
          ],
          strategy: "ΔH per mole = energy ÷ moles; sign negative if exothermic",
        },
        {
          id: "exam-chemistry-mcq-p3-14",
          question:
            "On a graph of volume of gas produced against time for a reaction, what does the gradient (steepness) of the curve represent?",
          options: [
            "The total amount of product",
            "The activation energy",
            "The temperature",
            "The rate of reaction",
          ],
          answerIndex: 3,
          explanation:
            "The gradient (slope) of a volume–time graph gives the rate of reaction at that moment. The curve is steepest at the start (fastest rate) and levels off as reactants are used up; the final level shows the total amount of product.",
          difficulty: "core",
          hints: [
            "Rate is how fast product forms per unit time.",
            "Steeper slope means faster reaction.",
            "The plateau shows the total, not the rate.",
          ],
          strategy: "gradient of volume–time graph = rate; plateau = total product",
        },
        {
          id: "exam-chemistry-mcq-p3-15",
          question:
            "Which salt is INSOLUBLE in water?",
          options: ["Sodium nitrate", "Potassium sulfate", "Barium sulfate", "Ammonium chloride"],
          answerIndex: 2,
          explanation:
            "Barium sulfate is insoluble (this is the basis of the sulfate test). All sodium, potassium and ammonium salts are soluble, and most nitrates are soluble.",
          difficulty: "warmup",
          hints: [
            "All sodium, potassium and ammonium salts are soluble.",
            "Most sulfates are soluble EXCEPT a few (barium, lead, calcium).",
            "Recall the insoluble sulfate used in the anion test.",
          ],
          strategy: "apply solubility rules; barium sulfate is insoluble",
        },
        {
          id: "exam-chemistry-mcq-p3-16",
          question:
            "Which method is used to prepare an insoluble salt such as lead(II) iodide?",
          options: [
            "Titration",
            "Precipitation: mixing two soluble solutions then filtering",
            "Adding excess metal to acid",
            "Electrolysis",
          ],
          answerIndex: 1,
          explanation:
            "An insoluble salt is made by precipitation: mixing two soluble solutions whose ions combine, e.g. lead(II) nitrate + potassium iodide → lead(II) iodide (yellow precipitate) + potassium nitrate. The precipitate is filtered, washed and dried.",
          difficulty: "core",
          hints: [
            "Insoluble salts cannot be crystallised from solution.",
            "Combine two soluble solutions containing the right ions.",
            "Filter off the solid that forms.",
          ],
          strategy: "insoluble salt → precipitation then filter, wash, dry",
        },
        {
          id: "exam-chemistry-mcq-p3-17",
          question:
            "Which of these metals is the MOST reactive?",
          options: ["Copper", "Zinc", "Potassium", "Iron"],
          answerIndex: 2,
          explanation:
            "Order of reactivity (most to least, of these four): potassium > zinc > iron > copper. Potassium (a Group I metal) is by far the most reactive.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p3-18",
          question:
            "Limewater turns milky/cloudy when a certain gas is bubbled through it. Which gas is it?",
          options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Ammonia"],
          answerIndex: 2,
          explanation:
            "Carbon dioxide turns limewater (calcium hydroxide solution) milky/cloudy by forming insoluble calcium carbonate: CO₂ + Ca(OH)₂ → CaCO₃ + H₂O. This is the standard test for CO₂.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p3-19",
          question:
            "Crude oil is separated into fractions by fractional distillation. On what property does this separation depend?",
          options: [
            "Differences in colour of the fractions",
            "Differences in density only",
            "Differences in reactivity",
            "Differences in boiling point (related to chain length)",
          ],
          answerIndex: 3,
          explanation:
            "Fractional distillation separates crude oil by differences in boiling point. Longer hydrocarbon molecules have stronger intermolecular forces and higher boiling points, so they condense lower down the hot column; shorter molecules rise higher.",
          difficulty: "warmup",
          hints: [
            "The column is hot at the bottom and cooler at the top.",
            "Boiling point depends on molecule size/chain length.",
            "Larger molecules condense lower down.",
          ],
          strategy: "fractional distillation separates by boiling point / chain length",
        },
        {
          id: "exam-chemistry-mcq-p3-20",
          question:
            "Long-chain alkane molecules are broken into smaller, more useful molecules including alkenes. What is this process called?",
          options: ["Polymerisation", "Cracking", "Fermentation", "Combustion"],
          answerIndex: 1,
          explanation:
            "Cracking breaks long-chain hydrocarbons into shorter, more useful molecules (smaller alkanes and alkenes) using heat and a catalyst. It increases the supply of valuable short-chain products and produces alkenes for making polymers.",
          difficulty: "warmup",
          hints: [
            "The process splits large molecules into smaller ones.",
            "It produces alkenes used to make plastics.",
            "It uses heat and a catalyst.",
          ],
          strategy: "cracking: large alkane → smaller alkane + alkene",
        },
        {
          id: "exam-chemistry-mcq-p3-21",
          question:
            "A hydrocarbon contains 85.7% carbon and 14.3% hydrogen by mass. What is its empirical formula? (Ar: C = 12, H = 1)",
          options: [
            "CH",
            "CH₄",
            "CH₃",
            "CH₂",
          ],
          answerIndex: 3,
          explanation:
            "C: 85.7/12 = 7.14; H: 14.3/1 = 14.3. Divide by smallest (7.14): C = 1, H = 2.00. Empirical formula = CH₂ (the alkene general unit).",
          difficulty: "challenge",
          hints: [
            "Divide each percentage by its Ar to get a mole ratio.",
            "Divide both by the smaller number.",
            "7.14 and 14.3 give roughly 1 : 2.",
          ],
          strategy: "empirical formula from % composition",
        },
        {
          id: "exam-chemistry-mcq-p3-22",
          question:
            "Carbon monoxide is a harmful pollutant from car engines. Why is it dangerous?",
          options: [
            "It causes acid rain",
            "It is a toxic gas that combines with haemoglobin, reducing oxygen transport in the blood",
            "It depletes the ozone layer",
            "It is highly explosive in air at all concentrations",
          ],
          answerIndex: 1,
          explanation:
            "Carbon monoxide is toxic because it binds strongly to haemoglobin in red blood cells, preventing them from carrying oxygen. It is produced by incomplete combustion of fuels in a limited oxygen supply.",
          difficulty: "warmup",
          hints: [
            "Think about how the body transports oxygen.",
            "CO interferes with haemoglobin.",
            "It comes from incomplete combustion.",
          ],
          strategy: "CO toxicity: binds haemoglobin, blocks oxygen transport",
        },
        {
          id: "exam-chemistry-mcq-p3-23",
          question:
            "Which statement about the catalytic converter in a car exhaust is correct?",
          options: [
            "It converts carbon dioxide into oxygen",
            "It converts carbon monoxide and oxides of nitrogen into less harmful carbon dioxide and nitrogen",
            "It removes carbon dioxide completely",
            "It produces sulfur dioxide",
          ],
          answerIndex: 1,
          explanation:
            "A catalytic converter (with platinum/rhodium catalysts) converts harmful CO and NOₓ into less harmful CO₂ and N₂, e.g. 2CO + 2NO → 2CO₂ + N₂.",
          difficulty: "warmup",
          hints: [
            "The converter targets CO and oxides of nitrogen.",
            "It turns them into common atmospheric gases.",
            "Products are CO₂ and N₂.",
          ],
          strategy: "catalytic converter: CO + NOₓ → CO₂ + N₂",
        },
        {
          id: "exam-chemistry-mcq-p3-24",
          question:
            "For the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) (ΔH negative), what happens to the equilibrium yield of SO₃ if the temperature is increased?",
          options: [
            "The yield increases",
            "The yield decreases",
            "The yield is unchanged",
            "The equilibrium is destroyed",
          ],
          answerIndex: 1,
          explanation:
            "The forward reaction is exothermic. Increasing temperature shifts the equilibrium in the endothermic (reverse) direction to absorb the added heat, so less SO₃ is formed — the yield decreases (though the rate increases).",
          difficulty: "challenge",
          hints: [
            "The forward reaction releases heat (exothermic).",
            "Adding heat favours the endothermic direction.",
            "That is the reverse reaction here.",
          ],
          strategy: "Le Chatelier: raising T favours the endothermic direction",
        },
        {
          id: "exam-chemistry-mcq-p3-25",
          question:
            "Which procedure would give a pure dry sample of sodium chloride from a sodium chloride solution?",
          options: [
            "Filtration",
            "Chromatography",
            "Crystallisation / evaporation of the water",
            "Adding excess acid",
          ],
          answerIndex: 2,
          explanation:
            "Sodium chloride is soluble, so it cannot be filtered out. Heating the solution to evaporate the water (crystallisation) leaves the solid salt behind.",
          difficulty: "warmup",
        },
      ],
    },
    {
      id: "exam-chemistry-mcq-4",
      title: "Mock Exam — MCQ Paper 4",
      description:
        "25 multiple-choice questions spanning the full Cambridge IGCSE 0620 Extended syllabus. Allow 45 minutes.",
      questions: [
        {
          id: "exam-chemistry-mcq-p4-01",
          question:
            "When a substance is heated and changes from a liquid to a gas, what happens to the spacing of its particles?",
          options: [
            "They move much closer together",
            "They become much more widely spaced",
            "The spacing stays the same",
            "They form a regular pattern",
          ],
          answerIndex: 1,
          explanation:
            "On boiling, particles gain energy, overcome the forces holding them in the liquid, and move far apart in the gas phase. Gas particles are much more widely spaced than in a liquid.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p4-02",
          question:
            "What is meant by the relative atomic mass (Ar) of an element?",
          options: [
            "The mass of one atom in grams",
            "The number of protons in an atom",
            "The average mass of its atoms compared with 1/12 the mass of a carbon-12 atom",
            "The total number of protons and neutrons in one atom",
          ],
          answerIndex: 2,
          explanation:
            "Relative atomic mass is the average mass of the atoms of an element (taking isotope abundances into account) measured on a scale where a carbon-12 atom is exactly 12 (i.e. relative to 1/12 of a carbon-12 atom).",
          difficulty: "core",
          hints: [
            "It is a relative (comparative) quantity, not in grams.",
            "It is an average over the isotopes present.",
            "The reference standard is carbon-12.",
          ],
          strategy: "Ar = weighted average mass relative to carbon-12 standard",
        },
        {
          id: "exam-chemistry-mcq-p4-03",
          question:
            "Element Q has isotopes of mass 63 (69%) and 65 (31%). What is its relative atomic mass to 1 decimal place?",
          options: ["63.6", "64.0", "64.6", "65.0"],
          answerIndex: 0,
          explanation:
            "Ar = (63 × 69 + 65 × 31) ÷ 100 = (4347 + 2015) ÷ 100 = 6362 ÷ 100 = 63.6. (This element is copper.)",
          difficulty: "core",
          hints: [
            "Multiply each isotope mass by its percentage abundance.",
            "Add the products and divide by 100.",
            "(63 × 69 + 65 × 31) ÷ 100.",
          ],
          strategy: "Ar = weighted average of isotope masses",
        },
        {
          id: "exam-chemistry-mcq-p4-04",
          question:
            "Which statement about a covalent bond is correct?",
          options: [
            "Electrons are transferred from one atom to another",
            "A pair of electrons is shared between two atoms",
            "It only occurs between metals",
            "It produces charged ions",
          ],
          answerIndex: 1,
          explanation:
            "A covalent bond is a shared pair of electrons between two (usually non-metal) atoms. Electron transfer producing ions is ionic bonding.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p4-05",
          question:
            "Which would conduct electricity?",
          options: [
            "Solid sodium chloride",
            "Molten sodium chloride",
            "Solid sulfur",
            "Liquid bromine",
          ],
          answerIndex: 1,
          explanation:
            "Molten sodium chloride conducts because the ions are free to move and carry charge. Solid NaCl has fixed ions (no conduction); sulfur and bromine are non-metals with no free charged particles.",
          difficulty: "core",
          hints: [
            "Conduction needs charged particles free to move.",
            "Ionic solids only conduct when molten or dissolved.",
            "Which option has mobile ions?",
          ],
          strategy: "ionic compounds conduct when molten/aqueous, not solid",
        },
        {
          id: "exam-chemistry-mcq-p4-06",
          question:
            "10.0 g of calcium carbonate (Mr = 100) is heated and fully decomposes: CaCO₃ → CaO + CO₂. What mass of calcium oxide (Mr = 56) is formed?",
          options: ["4.4 g", "5.6 g", "10.0 g", "56 g"],
          answerIndex: 1,
          explanation:
            "Moles CaCO₃ = 10.0 ÷ 100 = 0.100 mol. Ratio CaCO₃ : CaO = 1 : 1, so moles CaO = 0.100 mol. Mass CaO = 0.100 × 56 = 5.6 g.",
          difficulty: "core",
          hints: [
            "Moles = mass ÷ Mr.",
            "1:1 ratio of carbonate to oxide.",
            "Mass = moles × Mr of CaO.",
          ],
          strategy: "decomposition mass calculation via moles and 1:1 ratio",
        },
        {
          id: "exam-chemistry-mcq-p4-07",
          question:
            "Concentrated sulfuric acid is added to a sample of hydrated copper(II) sulfate (CuSO₄·5H₂O). Which best describes water of crystallisation?",
          options: [
            "Water chemically bonded into the crystal structure in a fixed ratio",
            "Water left on the surface after washing",
            "Water that is part of the solvent",
            "Water produced when the salt dissolves",
          ],
          answerIndex: 0,
          explanation:
            "Water of crystallisation is water that is chemically combined within a crystalline structure in a fixed molar ratio (here 5 H₂O per CuSO₄). Heating drives it off, turning blue hydrated crystals to white anhydrous powder.",
          difficulty: "warmup",
          hints: [
            "It is part of the crystal, in a fixed ratio.",
            "Think of the dot formula CuSO₄·5H₂O.",
            "Heating removes it (blue → white).",
          ],
          strategy: "water of crystallisation = fixed-ratio water in the crystal lattice",
        },
        {
          id: "exam-chemistry-mcq-p4-08",
          question:
            "What is the concentration in g/dm³ of a solution containing 0.0500 mol of sodium hydroxide (Mr = 40) in 250 cm³?",
          options: ["2.0 g/dm³", "8.0 g/dm³", "0.20 g/dm³", "0.50 g/dm³"],
          answerIndex: 1,
          explanation:
            "Mass NaOH = 0.0500 × 40 = 2.0 g. Volume = 0.250 dm³. Concentration = 2.0 ÷ 0.250 = 8.0 g/dm³.",
          difficulty: "challenge",
          hints: [
            "First find the mass: moles × Mr.",
            "Convert the volume to dm³.",
            "Concentration (g/dm³) = mass ÷ volume (dm³).",
          ],
          strategy: "convert moles to mass, then divide by volume in dm³",
        },
        {
          id: "exam-chemistry-mcq-p4-09",
          question:
            "Which change at the cathode would deposit MORE metal during electrolysis (using the same solution)?",
          options: [
            "Decreasing the current",
            "Decreasing the time",
            "Increasing both the current and the time",
            "Using a smaller electrode",
          ],
          answerIndex: 2,
          explanation:
            "The amount of substance deposited depends on the charge passed (Q = I × t). Increasing both the current and the time increases the total charge and therefore the mass of metal deposited.",
          difficulty: "warmup",
          hints: [
            "Mass deposited depends on the charge passed.",
            "Charge = current × time.",
            "Bigger current and longer time → more charge.",
          ],
          strategy: "Q = It controls amount deposited in electrolysis",
        },
        {
          id: "exam-chemistry-mcq-p4-10",
          question:
            "Which reaction is endothermic?",
          options: [
            "Combustion of methane",
            "Neutralisation of an acid by an alkali",
            "Thermal decomposition of calcium carbonate",
            "Respiration",
          ],
          answerIndex: 2,
          explanation:
            "Thermal decomposition of calcium carbonate requires continuous heating (energy is absorbed), so it is endothermic. Combustion, neutralisation and respiration are all exothermic.",
          difficulty: "core",
          hints: [
            "Endothermic reactions take in energy.",
            "Which reaction needs constant heating to continue?",
            "Decomposition by heat absorbs energy.",
          ],
          strategy: "thermal decomposition is endothermic (energy absorbed)",
        },
        {
          id: "exam-chemistry-mcq-p4-11",
          question:
            "Two experiments react the same mass of magnesium with excess acid. Experiment 2 uses warmer acid. How do the graphs of volume of hydrogen against time compare?",
          options: [
            "Experiment 2 is faster and reaches a higher final volume",
            "Experiment 2 is faster but reaches the same final volume",
            "Experiment 2 is slower and reaches the same final volume",
            "Both are identical",
          ],
          answerIndex: 1,
          explanation:
            "Higher temperature increases the rate (steeper initial curve), so experiment 2 reaches the plateau sooner. Because the same mass of magnesium is used (the limiting reactant), the FINAL volume of hydrogen is the same.",
          difficulty: "challenge",
          hints: [
            "Temperature affects the rate, not the total amount of product.",
            "Same mass of magnesium → same moles of hydrogen.",
            "Compare the steepness and the final plateau separately.",
          ],
          strategy: "separate rate (gradient) from total yield (plateau)",
        },
        {
          id: "exam-chemistry-mcq-p4-12",
          question:
            "A reaction is at equilibrium. The concentration of a reactant is suddenly increased. What happens?",
          options: [
            "The equilibrium shifts to oppose the change, forming more products",
            "The equilibrium shifts to form more reactants",
            "Nothing happens",
            "The reaction stops",
          ],
          answerIndex: 0,
          explanation:
            "By Le Chatelier's principle, increasing the concentration of a reactant shifts the equilibrium to the right (towards products) to oppose the change and reduce the added reactant.",
          difficulty: "core",
          hints: [
            "Le Chatelier: the system opposes the change made.",
            "Adding reactant pushes the position towards products.",
            "More reactant → more product formed.",
          ],
          strategy: "Le Chatelier: increasing reactant shifts equilibrium to products",
        },
        {
          id: "exam-chemistry-mcq-p4-13",
          question:
            "Which is the strongest acid in solution at the same concentration?",
          options: [
            "Ethanoic acid (a weak acid)",
            "Carbonic acid (a weak acid)",
            "Hydrochloric acid (a strong acid)",
            "Citric acid (a weak acid)",
          ],
          answerIndex: 2,
          explanation:
            "Hydrochloric acid is a strong acid: it is fully ionised in water, giving the highest H⁺ concentration and the lowest pH of the four at the same concentration. The others are weak acids (only partially ionised).",
          difficulty: "warmup",
          hints: [
            "Strong acids ionise completely; weak acids only partially.",
            "More ionisation → more H⁺ → lower pH.",
            "Which is described as strong?",
          ],
          strategy: "strong acid = fully ionised → higher [H⁺] than weak acids",
        },
        {
          id: "exam-chemistry-mcq-p4-14",
          question:
            "What is produced when a dilute acid reacts with a metal carbonate?",
          options: [
            "Salt + hydrogen only",
            "Salt + water + carbon dioxide",
            "Salt + oxygen",
            "Salt + ammonia",
          ],
          answerIndex: 1,
          explanation:
            "Acid + metal carbonate → salt + water + carbon dioxide, e.g. 2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂. (Acid + metal gives salt + hydrogen.)",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p4-15",
          question:
            "Zinc is used to protect iron from rusting by sacrificial protection. Why does this work?",
          options: [
            "Zinc is less reactive than iron",
            "Zinc is more reactive than iron, so it is oxidised in preference to the iron",
            "Zinc forms a waterproof paint",
            "Zinc is a non-metal",
          ],
          answerIndex: 1,
          explanation:
            "Zinc is more reactive than iron, so it loses electrons (is oxidised) in preference to the iron. The zinc corrodes sacrificially, protecting the iron even if the coating is scratched.",
          difficulty: "core",
          hints: [
            "Sacrificial protection uses a MORE reactive metal.",
            "The more reactive metal is oxidised instead of the iron.",
            "Compare zinc and iron in the reactivity series.",
          ],
          strategy: "sacrificial protection: more reactive metal corrodes first",
        },
        {
          id: "exam-chemistry-mcq-p4-16",
          question:
            "Aqueous sodium hydroxide is added to a solution of an unknown metal salt, giving a blue precipitate. Which ion is present?",
          options: ["Fe²⁺", "Cu²⁺", "Fe³⁺", "Zn²⁺"],
          answerIndex: 1,
          explanation:
            "Copper(II) ions give a blue precipitate of copper(II) hydroxide with NaOH. Fe²⁺ gives green, Fe³⁺ gives red-brown, and Zn²⁺ gives a white precipitate (soluble in excess).",
          difficulty: "core",
          hints: [
            "Learn the precipitate colours with sodium hydroxide.",
            "Blue is characteristic of one transition metal ion.",
            "Cu(OH)₂ is blue.",
          ],
          strategy: "identify cation by hydroxide precipitate colour",
        },
        {
          id: "exam-chemistry-mcq-p4-17",
          question:
            "Which structural feature is present in the alcohol functional group?",
          options: ["−COOH", "−OH", "C=C", "−O−"],
          answerIndex: 1,
          explanation:
            "Alcohols contain the hydroxyl group −OH (e.g. ethanol, CH₃CH₂OH). −COOH is the carboxylic acid group and C=C is the alkene double bond.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p4-18",
          question:
            "Ethanoic acid is added to magnesium ribbon. What is observed and what salt forms?",
          options: [
            "No reaction occurs",
            "Effervescence (hydrogen gas); magnesium ethanoate forms",
            "A precipitate forms; magnesium oxide",
            "The mixture turns blue; magnesium carbonate forms",
          ],
          answerIndex: 1,
          explanation:
            "Ethanoic acid reacts with magnesium like other acids with metals: effervescence of hydrogen gas is seen, and the salt magnesium ethanoate forms. 2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂.",
          difficulty: "warmup",
          hints: [
            "Carboxylic acids behave as typical (weak) acids.",
            "Acid + metal → salt + hydrogen.",
            "The salt of ethanoic acid is an ethanoate.",
          ],
          strategy: "carboxylic acid + metal → metal carboxylate salt + hydrogen",
        },
        {
          id: "exam-chemistry-mcq-p4-19",
          question:
            "Which statement about a condensation polymer such as a polyester is correct?",
          options: [
            "It is made from a single alkene monomer with no by-product",
            "It is made from two different monomers (e.g. a diol and a dicarboxylic acid) with loss of a small molecule such as water",
            "It contains C=C double bonds along its backbone",
            "It cannot be hydrolysed",
          ],
          answerIndex: 1,
          explanation:
            "A condensation polymer (e.g. a polyester) forms from two monomers each with two reactive groups (a diol and a dicarboxylic acid), joining with the loss of a small molecule such as water at each link. Addition polymers come from a single unsaturated monomer with no by-product.",
          difficulty: "challenge",
          hints: [
            "Condensation reactions release a small molecule.",
            "Two different monomers each have two functional groups.",
            "Contrast with addition polymerisation.",
          ],
          strategy: "condensation polymer: two monomers, small molecule lost",
        },
        {
          id: "exam-chemistry-mcq-p4-20",
          question:
            "A sample of water is tested. Which result confirms it is pure water?",
          options: [
            "It turns blue cobalt chloride paper pink",
            "It boils at exactly 100 °C and freezes at exactly 0 °C (at standard pressure)",
            "It turns anhydrous copper(II) sulfate blue",
            "It is colourless",
          ],
          answerIndex: 1,
          explanation:
            "Cobalt chloride paper and anhydrous copper(II) sulfate only show the PRESENCE of water, not its purity. PURE water boils at exactly 100 °C and freezes at exactly 0 °C at standard pressure; impurities change these values. Being colourless is not proof of purity.",
          difficulty: "warmup",
          hints: [
            "Some tests show the presence of water but not purity.",
            "Pure substances have sharp, fixed melting and boiling points.",
            "Impurities raise the boiling point and lower the freezing point.",
          ],
          strategy: "purity is shown by fixed boiling/melting points, not water tests",
        },
        {
          id: "exam-chemistry-mcq-p4-21",
          question:
            "In a titration, 25.0 cm³ of 0.200 mol/dm³ sodium hydroxide reacts exactly with sulfuric acid: 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O. How many moles of sulfuric acid react?",
          options: ["0.00250 mol", "0.00500 mol", "0.0100 mol", "0.0500 mol"],
          answerIndex: 0,
          explanation:
            "Moles NaOH = 0.200 × (25.0/1000) = 0.00500 mol. Ratio NaOH : H₂SO₄ = 2 : 1, so moles H₂SO₄ = 0.00500 ÷ 2 = 0.00250 mol.",
          difficulty: "challenge",
          hints: [
            "Find moles of NaOH first (concentration × volume in dm³).",
            "The ratio of NaOH to H₂SO₄ is 2 : 1.",
            "Divide the NaOH moles by 2.",
          ],
          strategy: "titration with a 2:1 ratio — divide by 2 for the diprotic acid",
        },
        {
          id: "exam-chemistry-mcq-p4-22",
          question:
            "Which process removes carbon dioxide from the atmosphere?",
          options: [
            "Combustion of fossil fuels",
            "Respiration",
            "Photosynthesis",
            "Volcanic activity",
          ],
          answerIndex: 2,
          explanation:
            "Photosynthesis takes in carbon dioxide (and water), using light energy to make glucose and oxygen, removing CO₂ from the air. Combustion, respiration and volcanic activity all release CO₂.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p4-23",
          question:
            "Nitrogen and hydrogen are reacted in the Haber process. What is the mole ratio in which they combine? (N₂ + 3H₂ ⇌ 2NH₃)",
          options: ["1 : 1", "1 : 2", "1 : 3", "3 : 1"],
          answerIndex: 2,
          explanation:
            "From the balanced equation N₂ + 3H₂ ⇌ 2NH₃, nitrogen and hydrogen combine in a 1 : 3 mole ratio.",
          difficulty: "warmup",
        },
        {
          id: "exam-chemistry-mcq-p4-24",
          question:
            "A 4.00 g sample of impure calcium carbonate is reacted with excess acid and produces 0.0350 mol of CO₂. Assuming all the carbonate reacted (CaCO₃ → CO₂, 1:1), what is the percentage purity of the calcium carbonate? (Mr CaCO₃ = 100)",
          options: ["35.0%", "70.0%", "87.5%", "100%"],
          answerIndex: 2,
          explanation:
            "Moles CaCO₃ = moles CO₂ = 0.0350 mol (1:1). Mass of CaCO₃ = 0.0350 × 100 = 3.50 g. Percentage purity = (3.50 ÷ 4.00) × 100 = 87.5%.",
          difficulty: "challenge",
          hints: [
            "Moles of CaCO₃ equal moles of CO₂ (1:1).",
            "Mass of pure CaCO₃ = moles × 100.",
            "Purity = (pure mass ÷ sample mass) × 100.",
          ],
          strategy: "purity = (mass of pure substance ÷ mass of sample) × 100",
        },
        {
          id: "exam-chemistry-mcq-p4-25",
          question:
            "Which set of conditions and catalyst is used in the Haber process for making ammonia?",
          options: [
            "About 450 °C, 200 atm, iron catalyst",
            "About 25 °C, 1 atm, nickel catalyst",
            "About 450 °C, 2 atm, vanadium(V) oxide catalyst",
            "About 1000 °C, 1 atm, no catalyst",
          ],
          answerIndex: 0,
          explanation:
            "The Haber process uses approximately 450 °C, about 200 atm pressure, and an iron catalyst. (450 °C is a compromise between yield and rate; high pressure favours the side with fewer gas moles.) Vanadium(V) oxide at ~1–2 atm is used in the Contact process, not the Haber process.",
          difficulty: "core",
          hints: [
            "Distinguish the Haber process from the Contact process.",
            "Recall the Haber catalyst is a metal.",
            "High pressure favours fewer moles of gas (the NH₃ side).",
          ],
          strategy: "Haber conditions: ~450 °C, ~200 atm, iron catalyst",
        },
      ],
    },
  ],

  qaPapers: [
    {
      id: "exam-chemistry-qa-1",
      title: "Mock Exam — Structured Paper 1",
      description:
        "20 structured questions spanning the full Cambridge IGCSE 0620 Extended syllabus. Show all working for calculations. Allow 90 minutes.",
      questions: [
        {
          id: "exam-chemistry-qa-p1-01",
          question:
            "Describe, in terms of particles, what happens when ice is heated until it melts and then continues to be heated until it boils. [4]",
          marks: 4,
          difficulty: "warmup",
          modelAnswer:
            "In ice the water particles are held closely together in a fixed, regular arrangement and only vibrate. As heat is supplied, the particles gain kinetic energy and vibrate more; at the melting point the particles gain enough energy to overcome some of the forces, so they can move past one another — the solid melts to a liquid. Further heating gives the particles more kinetic energy until, at the boiling point, they have enough energy to overcome the forces holding them in the liquid and escape into the gas phase, becoming widely spaced and moving freely.",
          markScheme: [
            "in solid, particles in fixed regular arrangement / only vibrate [1]",
            "heating increases kinetic energy / particles move more [1]",
            "melting: particles overcome some forces and move past each other [1]",
            "boiling: particles gain enough energy to escape / become widely spaced gas [1]",
          ],
          commonError:
            "Saying that bonds within molecules break — only the forces BETWEEN particles are overcome.",
        },
        {
          id: "exam-chemistry-qa-p1-02",
          question:
            "An atom of an element is represented as ²³₁₁Na.\n\n(a) State the number of protons, neutrons and electrons in this atom. [3]\n(b) Write the electron configuration of this atom. [1]\n(c) State the group and period of sodium and explain your answer in terms of its electron configuration. [2]",
          marks: 6,
          difficulty: "core",
          modelAnswer:
            "(a) Protons = 11; electrons = 11 (neutral atom); neutrons = mass number − proton number = 23 − 11 = 12.\n\n(b) Electron configuration: 2,8,1.\n\n(c) Sodium is in Group I (it has 1 electron in its outer shell) and Period 3 (it has 3 occupied electron shells).",
          markScheme: [
            "(a) protons = 11 and electrons = 11 [1]",
            "(a) neutrons = 12 [1]",
            "(a) link: neutrons = mass number − proton number [1]",
            "(b) 2,8,1 [1]",
            "(c) Group I because 1 outer-shell electron [1]",
            "(c) Period 3 because 3 electron shells [1]",
          ],
          commonError:
            "Confusing mass number with neutron number — neutrons = mass number − protons, not the mass number itself.",
          hints: [
            "Proton number is the bottom number; mass number is the top.",
            "Neutrons = mass number − proton number.",
            "Group = outer electrons; Period = number of shells.",
          ],
          strategy: "decode nuclide symbol, then read group/period from configuration",
        },
        {
          id: "exam-chemistry-qa-p1-03",
          question:
            "Bromine (Br) and chlorine (Cl) are both in Group VII of the Periodic Table.\n\n(a) State and explain the trend in reactivity going down Group VII. [3]\n(b) Chlorine is bubbled through a solution of potassium bromide. Describe what you would see and write a balanced equation for the reaction. [3]",
          marks: 6,
          difficulty: "core",
          modelAnswer:
            "(a) Reactivity decreases going down Group VII. Going down the group the atoms get larger and the outer shell is further from the nucleus, with more inner shells shielding the nuclear charge. The atom therefore attracts an incoming electron less strongly, so it gains an electron less easily and is less reactive.\n\n(b) Chlorine is more reactive than bromine, so it displaces bromine from the solution. The colourless solution turns orange/brown as bromine is formed.\n    Equation: Cl₂ + 2KBr → 2KCl + Br₂.",
          markScheme: [
            "(a) reactivity decreases down the group [1]",
            "(a) atoms larger / outer shell further from nucleus / more shielding [1]",
            "(a) weaker attraction for incoming electron → gains electron less easily [1]",
            "(b) solution turns orange / brown (bromine formed) [1]",
            "(b) correct products (KCl and Br₂) [1]",
            "(b) balanced: Cl₂ + 2KBr → 2KCl + Br₂ [1]",
          ],
          commonError:
            "Explaining reactivity by 'losing' an electron — halogens react by GAINING an electron, so the explanation must be about attracting an electron.",
          hints: [
            "Halogens react by gaining one electron.",
            "Larger atoms attract an incoming electron less strongly.",
            "A more reactive halogen displaces a less reactive one.",
          ],
          strategy: "Group VII trend by atomic size/shielding; displacement reaction",
        },
        {
          id: "exam-chemistry-qa-p1-04",
          question:
            "Draw on the structure of the elements to answer the following.\n\n(a) Explain why metals are good conductors of electricity. [2]\n(b) Explain why metals are malleable (can be hammered into shape). [2]",
          marks: 4,
          difficulty: "core",
          modelAnswer:
            "(a) Metals have delocalised (free) outer electrons that are able to move through the lattice of positive metal ions. When a voltage is applied, these electrons move and carry the electric charge, so the metal conducts.\n\n(b) The metal ions are arranged in regular layers. When a force is applied, the layers of ions can slide over one another without breaking the metallic bonding (the sea of delocalised electrons still holds the ions together), so the metal changes shape rather than shattering.",
          markScheme: [
            "(a) delocalised / free electrons present [1]",
            "(a) electrons move and carry charge [1]",
            "(b) layers of ions can slide over one another [1]",
            "(b) metallic bonding / electron sea is maintained, so it does not shatter [1]",
          ],
          commonError:
            "For malleability, forgetting that the bonding is maintained as layers slide — the structure does not simply 'break'.",
          hints: [
            "Conduction needs mobile charged particles.",
            "In metals the outer electrons are delocalised.",
            "For malleability, think about layers of ions sliding.",
          ],
          strategy: "explain metal properties from delocalised electrons and ion layers",
        },
        {
          id: "exam-chemistry-qa-p1-05",
          question:
            "Magnesium reacts with hydrochloric acid:\nMg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)\n\nCalculate the volume of hydrogen gas produced at r.t.p. when 0.12 g of magnesium reacts completely with excess acid. (Ar Mg = 24; molar gas volume = 24.0 dm³/mol at r.t.p.) [4]",
          marks: 4,
          difficulty: "core",
          modelAnswer:
            "Moles Mg = mass ÷ Ar = 0.12 ÷ 24 = 0.0050 mol.\nFrom the equation, Mg : H₂ = 1 : 1, so moles H₂ = 0.0050 mol.\nVolume H₂ = moles × molar gas volume = 0.0050 × 24.0 = 0.12 dm³ (= 120 cm³).",
          markScheme: [
            "moles Mg = 0.12 ÷ 24 = 0.0050 mol [1]",
            "mole ratio Mg : H₂ = 1 : 1, so moles H₂ = 0.0050 mol [1]",
            "volume = moles × 24.0 [1]",
            "volume H₂ = 0.12 dm³ / 120 cm³ [1]",
          ],
          commonError:
            "Forgetting that hydrogen is H₂ (1:1 ratio with Mg here) and mixing dm³ with cm³ (1 dm³ = 1000 cm³).",
          hints: [
            "Moles = mass ÷ Ar.",
            "Use the 1:1 ratio from the equation.",
            "Volume = moles × 24.0 dm³/mol.",
          ],
          strategy: "moles → ratio → gas volume at r.t.p.",
          solutions: [
            {
              label: "Method: moles to gas volume",
              steps: [
                "n(Mg) = 0.12 / 24 = 0.0050 mol",
                "n(H₂) = 0.0050 mol (1:1 ratio)",
                "V(H₂) = 0.0050 × 24.0 = 0.12 dm³ = 120 cm³",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p1-06",
          question:
            "Hydrogen burns in oxygen: 2H₂(g) + O₂(g) → 2H₂O(g)\n\nUse the bond energies below to calculate ΔH for this reaction and state whether it is exothermic or endothermic.\nBond energies (kJ/mol): H–H = 436; O=O = 498; O–H = 463 [5]",
          marks: 5,
          difficulty: "challenge",
          modelAnswer:
            "Bonds broken (reactants): 2 × (H–H) + 1 × (O=O) = 2(436) + 498 = 872 + 498 = 1370 kJ.\nBonds formed (products): 2 molecules of H₂O, each with 2 O–H bonds = 4 × (O–H) = 4 × 463 = 1852 kJ.\nΔH = energy in (bonds broken) − energy out (bonds formed) = 1370 − 1852 = −482 kJ/mol.\nΔH is negative, so the reaction is exothermic.",
          markScheme: [
            "bonds broken = 2(436) + 498 = 1370 kJ [1]",
            "bonds formed = 4 × 463 (4 O–H bonds) [1]",
            "bonds formed = 1852 kJ [1]",
            "ΔH = 1370 − 1852 = −482 kJ/mol [1]",
            "exothermic (ΔH negative) [1]",
          ],
          commonError:
            "Counting only 2 O–H bonds — there are 2 water molecules, so 4 O–H bonds form. Also reversing the subtraction (must be bonds broken − bonds formed).",
          hints: [
            "Count every bond, including the 2 O–H bonds in each of the 2 water molecules.",
            "Bonds broken absorb energy; bonds formed release energy.",
            "ΔH = Σ(bonds broken) − Σ(bonds formed).",
          ],
          strategy: "bond energies: broken − formed; count bonds carefully",
          solutions: [
            {
              label: "Bond energy method",
              steps: [
                "Broken: 2(H–H) + (O=O) = 2(436) + 498 = 1370 kJ",
                "Formed: 4(O–H) = 4(463) = 1852 kJ",
                "ΔH = 1370 − 1852 = −482 kJ/mol (exothermic)",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p1-07",
          question:
            "Define the following terms used in rates of reaction:\n(a) activation energy [1]\n(b) Using collision theory, explain why increasing the temperature increases the rate of a reaction. [3]",
          marks: 4,
          difficulty: "core",
          modelAnswer:
            "(a) Activation energy is the minimum amount of energy that colliding particles must have for a reaction to occur.\n\n(b) Increasing the temperature gives the particles more kinetic energy, so they move faster and collide more frequently. More importantly, a greater proportion of the particles now have energy equal to or greater than the activation energy, so a larger fraction of collisions are successful. Both effects increase the rate of reaction (the proportion of successful collisions is the larger effect).",
          markScheme: [
            "(a) minimum energy for a reaction to occur on collision [1]",
            "(b) particles move faster / collide more frequently [1]",
            "(b) greater proportion of particles have energy ≥ activation energy [1]",
            "(b) more successful collisions per second → faster rate [1]",
          ],
          commonError:
            "Only stating 'particles collide more often' — at IGCSE Extended the key point is that more collisions exceed the activation energy.",
          hints: [
            "Activation energy is a threshold for reacting.",
            "Higher temperature → more kinetic energy.",
            "Think about the proportion of collisions that succeed.",
          ],
          strategy: "collision theory: frequency AND proportion exceeding Ea",
        },
        {
          id: "exam-chemistry-qa-p1-08",
          question:
            "A student wants to prepare pure dry crystals of magnesium sulfate (a soluble salt) from magnesium carbonate (an insoluble solid) and dilute sulfuric acid.\n\n(a) Write a balanced equation for the reaction. [2]\n(b) Describe the steps the student should follow to obtain pure dry crystals. [4]",
          marks: 6,
          difficulty: "core",
          modelAnswer:
            "(a) MgCO₃ + H₂SO₄ → MgSO₄ + H₂O + CO₂.\n\n(b) 1. Add excess magnesium carbonate to the dilute sulfuric acid and warm/stir until no more effervescence occurs (this ensures all the acid has reacted). 2. Filter to remove the excess (unreacted) solid magnesium carbonate, leaving a solution of magnesium sulfate. 3. Heat the filtrate to evaporate some of the water until the point of crystallisation (a hot saturated solution). 4. Leave to cool so that crystals form, then filter off the crystals and dry them between filter papers (or in a warm oven).",
          markScheme: [
            "(a) correct products MgSO₄, H₂O, CO₂ [1]",
            "(a) balanced equation [1]",
            "(b) add excess MgCO₃ to acid (ensures acid used up) [1]",
            "(b) filter off excess solid [1]",
            "(b) evaporate filtrate to point of crystallisation [1]",
            "(b) cool to crystallise, then filter and dry crystals [1]",
          ],
          commonError:
            "Evaporating the solution to complete dryness — this would not give good crystals and could decompose the salt. Heat only until crystallisation point, then cool.",
          hints: [
            "Carbonate + acid → salt + water + carbon dioxide.",
            "Use excess solid so no acid remains, then filter.",
            "Crystallise rather than evaporating to dryness.",
          ],
          strategy: "insoluble carbonate + acid: excess → filter → crystallise → dry",
        },
        {
          id: "exam-chemistry-qa-p1-09",
          question:
            "Iron is extracted from haematite (iron(III) oxide) in the blast furnace.\n\n(a) Coke (carbon) burns in the hot air blast. Write the equation for the complete combustion of carbon. [1]\n(b) The carbon dioxide formed reacts with more coke to form carbon monoxide. Write this equation. [1]\n(c) Write the equation for the reduction of iron(III) oxide by carbon monoxide, and identify which substance is reduced. [3]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) C + O₂ → CO₂.\n\n(b) CO₂ + C → 2CO.\n\n(c) Fe₂O₃ + 3CO → 2Fe + 3CO₂. The iron(III) oxide is reduced (it loses oxygen / iron gains electrons); the carbon monoxide is the reducing agent and is oxidised to carbon dioxide.",
          markScheme: [
            "(a) C + O₂ → CO₂ [1]",
            "(b) CO₂ + C → 2CO [1]",
            "(c) Fe₂O₃ + 3CO → 2Fe + 3CO₂ (balanced) [1]",
            "(c) iron(III) oxide is reduced [1]",
            "(c) reduction = loss of oxygen / gain of electrons [1]",
          ],
          commonError:
            "Stating that carbon (not carbon monoxide) is the main reducing agent — in the blast furnace the main reduction of Fe₂O₃ is by CO.",
          hints: [
            "Combustion of carbon in plenty of oxygen gives CO₂.",
            "CO₂ + C gives carbon monoxide.",
            "Reduction = loss of oxygen here.",
          ],
          strategy: "blast furnace equations; reduction = loss of oxygen",
        },
        {
          id: "exam-chemistry-qa-p1-10",
          question:
            "Define oxidation and reduction in terms of (a) oxygen and (b) electrons. Then, for the reaction Zn + CuSO₄ → ZnSO₄ + Cu, state which species is oxidised and which is reduced, with reasons. [5]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) In terms of oxygen: oxidation is the gain of oxygen; reduction is the loss of oxygen.\n(b) In terms of electrons: oxidation is the loss of electrons; reduction is the gain of electrons (OIL RIG).\n\nFor Zn + CuSO₄ → ZnSO₄ + Cu: the zinc atom loses two electrons to form Zn²⁺ (Zn → Zn²⁺ + 2e⁻), so zinc is oxidised. The copper ion gains two electrons to form copper metal (Cu²⁺ + 2e⁻ → Cu), so the copper(II) ion is reduced.",
          markScheme: [
            "(a) oxidation = gain of oxygen; reduction = loss of oxygen [1]",
            "(b) oxidation = loss of electrons; reduction = gain of electrons [1]",
            "zinc is oxidised [1]",
            "because Zn loses electrons / Zn → Zn²⁺ + 2e⁻ [1]",
            "copper(II) ion is reduced (gains electrons / Cu²⁺ + 2e⁻ → Cu) [1]",
          ],
          commonError:
            "Reversing OIL RIG. Oxidation Is Loss (of electrons), Reduction Is Gain.",
          hints: [
            "Remember OIL RIG.",
            "Track which species loses electrons and which gains them.",
            "Zn becomes Zn²⁺; Cu²⁺ becomes Cu.",
          ],
          strategy: "OIL RIG; identify electron transfer in a displacement reaction",
        },
        {
          id: "exam-chemistry-qa-p1-11",
          question:
            "Ethene (C₂H₄) is an unsaturated hydrocarbon.\n\n(a) State the meaning of 'unsaturated'. [1]\n(b) Describe a chemical test, including the result, to distinguish ethene from ethane. [2]\n(c) Write an equation for the addition reaction of ethene with bromine, and name the product. [2]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) Unsaturated means the molecule contains at least one carbon–carbon double (C=C) bond.\n\n(b) Add bromine water (orange/brown) to each. Ethene rapidly decolourises the bromine water (orange to colourless) because it undergoes addition across the double bond; ethane does not decolourise it (no reaction in the absence of UV light).\n\n(c) C₂H₄ + Br₂ → C₂H₄Br₂. The product is 1,2-dibromoethane.",
          markScheme: [
            "(a) contains a C=C double bond [1]",
            "(b) add bromine water; ethene decolourises it (orange → colourless) [1]",
            "(b) ethane does not decolourise bromine water [1]",
            "(c) C₂H₄ + Br₂ → C₂H₄Br₂ [1]",
            "(c) product named 1,2-dibromoethane / dibromoethane [1]",
          ],
          commonError:
            "Describing the bromine water colour change the wrong way round — it goes FROM orange/brown TO colourless when decolourised.",
          hints: [
            "Unsaturated relates to the C=C double bond.",
            "Bromine water is the standard test for unsaturation.",
            "Addition adds a Br to each carbon of the double bond.",
          ],
          strategy: "unsaturation test and addition reaction of an alkene",
        },
        {
          id: "exam-chemistry-qa-p1-12",
          question:
            "Ammonia is manufactured in the Haber process:\nN₂(g) + 3H₂(g) ⇌ 2NH₃(g)  ΔH = −92 kJ/mol\n\n(a) State the typical conditions of temperature, pressure and catalyst used. [3]\n(b) Explain why a high pressure increases the equilibrium yield of ammonia. [2]\n(c) Explain why a moderate temperature of around 450 °C is used rather than a lower temperature, even though a lower temperature would give a higher yield. [2]",
          marks: 7,
          difficulty: "challenge",
          modelAnswer:
            "(a) Temperature: about 450 °C; pressure: about 200 atm; catalyst: iron.\n\n(b) The left-hand side has 4 moles of gas (1 N₂ + 3 H₂) and the right has 2 moles (2 NH₃). Increasing the pressure shifts the equilibrium towards the side with fewer moles of gas (the right) to reduce the pressure, so more ammonia is formed (higher yield).\n\n(c) The forward reaction is exothermic, so a lower temperature would give a higher equilibrium yield. However, at a low temperature the rate of reaction is very slow, so it would take too long to reach equilibrium. 450 °C is a compromise: it gives an acceptable rate and a reasonable yield, making the process economically viable.",
          markScheme: [
            "(a) ~450 °C [1]",
            "(a) ~200 atm [1]",
            "(a) iron catalyst [1]",
            "(b) fewer moles of gas on the right (2 vs 4) [1]",
            "(b) higher pressure shifts equilibrium to side with fewer gas moles → more NH₃ [1]",
            "(c) low temperature gives higher yield but rate too slow [1]",
            "(c) 450 °C is a compromise for acceptable rate and reasonable yield [1]",
          ],
          commonError:
            "Saying the catalyst increases the yield — it only speeds up reaching equilibrium and does not change the position.",
          hints: [
            "Count the moles of gas on each side.",
            "Le Chatelier: pressure favours fewer gas moles.",
            "Low temperature = high yield but slow; explain the compromise.",
          ],
          strategy: "Haber conditions + Le Chatelier + compromise reasoning",
        },
        {
          id: "exam-chemistry-qa-p1-13",
          question:
            "A solution contains an unknown metal ion. When aqueous sodium hydroxide is added drop by drop and then in excess:\n- a green precipitate forms with a little sodium hydroxide;\n- the precipitate does NOT dissolve in excess sodium hydroxide.\n\n(a) Identify the metal ion present. [1]\n(b) Write an ionic equation for the formation of the precipitate. [2]\n(c) Iron(II) compounds slowly turn into iron(III) compounds in air. State the colour of the precipitate formed by iron(III) ions with sodium hydroxide. [1]",
          marks: 4,
          difficulty: "core",
          modelAnswer:
            "(a) Iron(II) ions, Fe²⁺.\n\n(b) Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s).\n\n(c) Iron(III) ions give a red-brown (rust-coloured) precipitate of iron(III) hydroxide.",
          markScheme: [
            "(a) Fe²⁺ / iron(II) [1]",
            "(b) Fe²⁺ + 2OH⁻ → Fe(OH)₂ — correct species [1]",
            "(b) balanced (2 OH⁻) and state symbols / correct formula [1]",
            "(c) red-brown [1]",
          ],
          commonError:
            "Confusing the green Fe²⁺ precipitate with the red-brown Fe³⁺ precipitate. Also forgetting the precipitate does not dissolve in excess (distinguishes from Al³⁺/Zn²⁺ which do).",
          hints: [
            "Green hydroxide precipitate suggests iron(II).",
            "Balance the charge: Fe²⁺ needs two OH⁻.",
            "Iron(III) hydroxide is red-brown.",
          ],
          strategy: "cation identification by hydroxide colour and solubility in excess",
        },
        {
          id: "exam-chemistry-qa-p1-14",
          question:
            "Calculate the percentage by mass of iron in iron(III) oxide, Fe₂O₃. (Ar: Fe = 56, O = 16) [3]",
          marks: 3,
          difficulty: "core",
          modelAnswer:
            "Mr of Fe₂O₃ = 2(56) + 3(16) = 112 + 48 = 160.\nMass of iron in the formula = 2 × 56 = 112.\nPercentage by mass of iron = (112 ÷ 160) × 100 = 70.0%.",
          markScheme: [
            "Mr Fe₂O₃ = 160 [1]",
            "mass of Fe = 112 [1]",
            "% Fe = (112 ÷ 160) × 100 = 70.0% [1]",
          ],
          commonError:
            "Forgetting there are 2 iron atoms (using 56 instead of 112) or 3 oxygen atoms.",
          hints: [
            "Work out the Mr of the whole formula.",
            "Total the mass of iron (2 atoms).",
            "% = (mass of element ÷ Mr) × 100.",
          ],
          strategy: "percentage composition: element mass ÷ Mr × 100",
          solutions: [
            {
              label: "Percentage composition",
              steps: [
                "Mr(Fe₂O₃) = 2×56 + 3×16 = 112 + 48 = 160",
                "Mass of Fe = 2×56 = 112",
                "% Fe = 112/160 × 100 = 70.0%",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p1-15",
          question:
            "(a) State two products formed at the electrodes during the electrolysis of molten aluminium oxide in the extraction of aluminium, and name the electrode at which each forms. [2]\n(b) The carbon (graphite) anodes need to be replaced regularly. Explain why. [2]",
          marks: 4,
          difficulty: "core",
          modelAnswer:
            "(a) At the cathode (negative electrode): aluminium metal forms (Al³⁺ + 3e⁻ → Al). At the anode (positive electrode): oxygen forms (2O²⁻ → O₂ + 4e⁻).\n\n(b) The oxygen produced at the hot carbon anodes reacts with the carbon, burning it away to form carbon dioxide (C + O₂ → CO₂). This gradually wears the anodes away, so they must be replaced regularly.",
          markScheme: [
            "(a) aluminium at the cathode [1]",
            "(a) oxygen at the anode [1]",
            "(b) oxygen reacts with the hot carbon anode [1]",
            "(b) carbon burns away forming CO₂ → anode wears down [1]",
          ],
          commonError:
            "Forgetting to name WHICH electrode each product forms at, and not linking anode wear to oxygen reacting with carbon.",
          hints: [
            "Metal forms at the cathode; the non-metal at the anode.",
            "The anodes are made of carbon and get hot.",
            "Oxygen reacts with hot carbon.",
          ],
          strategy: "aluminium extraction: electrode products and anode wear",
        },
        {
          id: "exam-chemistry-qa-p1-16",
          question:
            "Hydrochloric acid is a strong acid and ethanoic acid is a weak acid.\n\n(a) Explain the difference between a strong acid and a weak acid in terms of ionisation. [2]\n(b) Equal volumes and concentrations of the two acids are compared. State and explain which has the lower pH. [2]",
          marks: 4,
          difficulty: "challenge",
          modelAnswer:
            "(a) A strong acid is fully (completely) ionised in water, releasing all of its hydrogen ions. A weak acid is only partially ionised in water, so only a small fraction of its molecules release hydrogen ions.\n\n(b) Hydrochloric acid has the lower pH. Because it is fully ionised, it produces a higher concentration of hydrogen ions than the same concentration of ethanoic acid (which is only partially ionised), and a higher [H⁺] gives a lower pH.",
          markScheme: [
            "(a) strong acid fully / completely ionised [1]",
            "(a) weak acid only partially ionised [1]",
            "(b) hydrochloric acid has lower pH [1]",
            "(b) because it gives a higher [H⁺] (fully ionised) [1]",
          ],
          commonError:
            "Confusing 'strong' with 'concentrated'. Strength is about degree of ionisation; concentration is about amount dissolved per volume.",
          hints: [
            "Strength refers to how fully the acid ionises.",
            "More ionisation means more H⁺ ions.",
            "Higher [H⁺] means lower pH.",
          ],
          strategy: "distinguish strong/weak (ionisation) from concentrated/dilute",
        },
        {
          id: "exam-chemistry-qa-p1-17",
          question:
            "Ethanol can be made by fermentation of glucose: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂\n\nCalculate the maximum mass of ethanol that can be made from 90.0 g of glucose. (Mr: glucose = 180; ethanol = 46) [4]",
          marks: 4,
          difficulty: "core",
          modelAnswer:
            "Moles glucose = 90.0 ÷ 180 = 0.500 mol.\nFrom the equation, 1 mol glucose → 2 mol ethanol, so moles ethanol = 2 × 0.500 = 1.00 mol.\nMass ethanol = moles × Mr = 1.00 × 46 = 46.0 g.",
          markScheme: [
            "moles glucose = 90.0 ÷ 180 = 0.500 mol [1]",
            "mole ratio glucose : ethanol = 1 : 2 [1]",
            "moles ethanol = 1.00 mol [1]",
            "mass ethanol = 1.00 × 46 = 46.0 g [1]",
          ],
          commonError:
            "Forgetting the 1:2 ratio (each glucose gives TWO ethanol molecules).",
          hints: [
            "Moles glucose = mass ÷ Mr.",
            "Each glucose gives two ethanol molecules.",
            "Mass = moles × 46.",
          ],
          strategy: "moles → 1:2 ratio → mass of ethanol",
          solutions: [
            {
              label: "Moles pathway",
              steps: [
                "n(glucose) = 90.0 / 180 = 0.500 mol",
                "n(ethanol) = 2 × 0.500 = 1.00 mol",
                "mass ethanol = 1.00 × 46 = 46.0 g",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p1-18",
          question:
            "Carbon dioxide and methane are both greenhouse gases.\n\n(a) Name one source of each gas (a different source for each). [2]\n(b) Describe how greenhouse gases cause the Earth's atmosphere to warm. [3]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) Carbon dioxide: combustion of fossil fuels (or respiration). Methane: from cattle/livestock digestion (or decomposition in rice paddies / landfill / swamps).\n\n(b) The Sun's energy reaches the Earth's surface (mostly as visible/short-wavelength radiation) and warms it. The warm Earth re-emits energy as longer-wavelength infrared radiation. Greenhouse gases such as CO₂ and CH₄ absorb this infrared radiation and re-emit some of it back towards the Earth's surface, trapping heat in the atmosphere and raising the temperature (the enhanced greenhouse effect).",
          markScheme: [
            "(a) valid CO₂ source (combustion of fossil fuels / respiration) [1]",
            "(a) valid CH₄ source (cattle / landfill / decomposition / rice paddies) [1]",
            "(b) Earth absorbs solar energy and re-emits infrared [1]",
            "(b) greenhouse gases absorb the infrared radiation [1]",
            "(b) heat re-emitted/trapped → atmosphere warms [1]",
          ],
          commonError:
            "Confusing the greenhouse effect with ozone depletion — they are different problems with different causes.",
          hints: [
            "Give a clear source for each gas.",
            "Energy arrives as short-wavelength, leaves as infrared.",
            "Greenhouse gases absorb and re-emit infrared.",
          ],
          strategy: "name sources; describe absorption/re-emission of infrared",
        },
        {
          id: "exam-chemistry-qa-p1-19",
          question:
            "A student investigates the rate of reaction between sodium thiosulfate solution and dilute hydrochloric acid, which produces a cloudy precipitate of sulfur. The time taken for a cross marked under the flask to disappear is measured.\n\n(a) Explain how this measures the rate of reaction. [2]\n(b) The experiment is repeated at higher temperatures. Predict and explain how the time for the cross to disappear changes as temperature increases. [3]",
          marks: 5,
          difficulty: "challenge",
          modelAnswer:
            "(a) As the reaction proceeds, a precipitate of sulfur forms and makes the mixture cloudy/opaque, eventually hiding the cross. The time taken for the cross to disappear indicates how quickly enough sulfur has formed; a shorter time means a faster rate of reaction (rate is approximately proportional to 1 ÷ time).\n\n(b) As the temperature increases, the time for the cross to disappear decreases (gets shorter). At higher temperature the particles have more kinetic energy, move faster and collide more frequently, and a greater proportion of collisions have energy greater than the activation energy. So there are more successful collisions per second, the sulfur forms more quickly, and the cross disappears sooner.",
          markScheme: [
            "(a) cloudiness/sulfur hides the cross; time taken indicates how fast it forms [1]",
            "(a) shorter time = faster rate / rate ∝ 1/time [1]",
            "(b) time decreases as temperature increases [1]",
            "(b) particles move faster / collide more frequently [1]",
            "(b) more collisions exceed the activation energy → more successful collisions [1]",
          ],
          commonError:
            "Saying rate is proportional to time — it is inversely proportional (rate ∝ 1/time).",
          hints: [
            "The cross disappears when enough sulfur has formed.",
            "Shorter time means a faster reaction.",
            "Use collision theory for the temperature effect.",
          ],
          strategy: "rate ∝ 1/time; collision theory for temperature",
        },
        {
          id: "exam-chemistry-qa-p1-20",
          question:
            "25.0 cm³ of sodium hydroxide solution is neutralised by 18.0 cm³ of 0.150 mol/dm³ hydrochloric acid.\nNaOH + HCl → NaCl + H₂O\n\nCalculate the concentration of the sodium hydroxide solution in mol/dm³. Show all your working. [4]",
          marks: 4,
          difficulty: "challenge",
          modelAnswer:
            "Moles HCl = concentration × volume (dm³) = 0.150 × (18.0/1000) = 0.150 × 0.0180 = 0.00270 mol.\nMole ratio HCl : NaOH = 1 : 1, so moles NaOH = 0.00270 mol.\nConcentration NaOH = moles ÷ volume (dm³) = 0.00270 ÷ (25.0/1000) = 0.00270 ÷ 0.0250 = 0.108 mol/dm³.",
          markScheme: [
            "moles HCl = 0.150 × 0.0180 = 0.00270 mol [1]",
            "mole ratio 1:1 → moles NaOH = 0.00270 mol [1]",
            "concentration = moles ÷ volume in dm³ [1]",
            "concentration NaOH = 0.108 mol/dm³ [1]",
          ],
          commonError:
            "Not converting cm³ to dm³ (÷1000) before using the concentration formula, giving an answer 1000 times too large or small.",
          hints: [
            "Convert all volumes to dm³.",
            "moles = concentration × volume (dm³).",
            "Use the 1:1 ratio, then divide by the NaOH volume.",
          ],
          strategy: "titration calculation: moles known → ratio → concentration unknown",
          solutions: [
            {
              label: "Titration method",
              steps: [
                "n(HCl) = 0.150 × (18.0/1000) = 0.00270 mol",
                "n(NaOH) = 0.00270 mol (1:1 ratio)",
                "c(NaOH) = 0.00270 / (25.0/1000) = 0.00270 / 0.0250 = 0.108 mol/dm³",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "exam-chemistry-qa-2",
      title: "Mock Exam — Structured Paper 2",
      description:
        "20 structured questions spanning the full Cambridge IGCSE 0620 Extended syllabus. Show all working for calculations. Allow 90 minutes.",
      questions: [
        {
          id: "exam-chemistry-qa-p2-01",
          question:
            "(a) Define the term diffusion. [1]\n(b) Cotton wool soaked in concentrated ammonia solution and cotton wool soaked in concentrated hydrochloric acid are placed at opposite ends of a long glass tube. A white ring (ammonium chloride) forms inside the tube, nearer the hydrochloric acid end. Explain this observation. [3]",
          marks: 4,
          difficulty: "core",
          modelAnswer:
            "(a) Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration (spreading out) due to their random motion.\n\n(b) Both gases diffuse along the tube and meet to form solid ammonium chloride (NH₃ + HCl → NH₄Cl). The white ring forms nearer the hydrochloric acid end because ammonia (NH₃, Mr = 17) is lighter than hydrogen chloride (HCl, Mr = 36.5). The lighter ammonia molecules move faster, so they travel further along the tube before the gases meet.",
          markScheme: [
            "(a) movement of particles from high to low concentration [1]",
            "(b) gases diffuse and meet to form NH₄Cl [1]",
            "(b) NH₃ is lighter / lower Mr than HCl [1]",
            "(b) lighter NH₃ diffuses faster / travels further [1]",
          ],
          commonError:
            "Getting the relationship backwards: the lighter gas (ammonia) travels further, so the ring is nearer the HEAVIER gas (HCl).",
          hints: [
            "Both gases move toward each other and react.",
            "Compare the masses of NH₃ and HCl.",
            "Lighter molecules diffuse faster and travel further.",
          ],
          strategy: "diffusion rate depends on molecular mass; lighter = faster",
        },
        {
          id: "exam-chemistry-qa-p2-02",
          question:
            "Chlorine has two isotopes, ³⁵Cl and ³⁷Cl. A sample of chlorine has a relative atomic mass of 35.5.\n\n(a) Define the term isotope. [2]\n(b) Calculate the percentage abundance of each isotope. Show your working. [3]",
          marks: 5,
          difficulty: "challenge",
          modelAnswer:
            "(a) Isotopes are atoms of the same element (same proton number) that have different numbers of neutrons (different mass numbers).\n\n(b) Let the percentage of ³⁵Cl be x, so the percentage of ³⁷Cl is (100 − x).\nAr = [35x + 37(100 − x)] ÷ 100 = 35.5\n35x + 3700 − 37x = 3550\n−2x + 3700 = 3550\n−2x = −150\nx = 75.\nSo ³⁵Cl = 75% and ³⁷Cl = 25%.",
          markScheme: [
            "(a) same element / same proton number [1]",
            "(a) different number of neutrons / different mass number [1]",
            "(b) sets up equation: [35x + 37(100 − x)]/100 = 35.5 [1]",
            "(b) solves to x = 75 [1]",
            "(b) ³⁵Cl = 75%, ³⁷Cl = 25% [1]",
          ],
          commonError:
            "Not realising the two abundances must add to 100%, so only one unknown is needed.",
          hints: [
            "Let one abundance be x and the other be (100 − x).",
            "Set the weighted average equal to 35.5.",
            "Solve the linear equation for x.",
          ],
          strategy: "set up and solve a weighted-average equation for abundance",
          solutions: [
            {
              label: "Algebraic method",
              steps: [
                "Let % of ³⁵Cl = x, % of ³⁷Cl = 100 − x",
                "(35x + 37(100 − x)) / 100 = 35.5",
                "35x + 3700 − 37x = 3550 → −2x = −150 → x = 75",
                "³⁵Cl = 75%, ³⁷Cl = 25%",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p2-03",
          question:
            "Sodium reacts with chlorine to form sodium chloride.\n\n(a) Describe, in terms of electron transfer, how sodium and chlorine atoms form ions. Give the charge of each ion formed. [3]\n(b) Sodium chloride has a giant ionic lattice. Explain why it has a high melting point but does not conduct electricity when solid. [3]",
          marks: 6,
          difficulty: "core",
          modelAnswer:
            "(a) A sodium atom (2,8,1) loses its single outer electron to achieve a full outer shell, forming a Na⁺ ion (charge 1+). A chlorine atom (2,8,7) gains one electron to achieve a full outer shell, forming a Cl⁻ ion (charge 1−). The electron is transferred from sodium to chlorine.\n\n(b) High melting point: the lattice is held together by strong electrostatic forces of attraction between the oppositely charged Na⁺ and Cl⁻ ions throughout the structure; a large amount of energy is needed to overcome these forces. No conduction when solid: the ions are held in fixed positions in the lattice and cannot move, so there are no mobile charged particles to carry the current.",
          markScheme: [
            "(a) Na loses 1 electron → Na⁺ [1]",
            "(a) Cl gains 1 electron → Cl⁻ [1]",
            "(a) electron transferred from Na to Cl / correct charges stated [1]",
            "(b) strong electrostatic forces between oppositely charged ions [1]",
            "(b) much energy needed to overcome forces → high melting point [1]",
            "(b) ions fixed in solid / cannot move → no conduction [1]",
          ],
          commonError:
            "Saying ionic solids 'share electrons' — ionic bonding involves electron TRANSFER, not sharing.",
          hints: [
            "Sodium is in Group I; chlorine in Group VII.",
            "Electrons transfer from metal to non-metal.",
            "Conduction needs ions free to move.",
          ],
          strategy: "ionic bonding by electron transfer; properties from the lattice",
        },
        {
          id: "exam-chemistry-qa-p2-04",
          question:
            "Carbon can exist as diamond, graphite, and graphene/fullerenes.\n\n(a) Describe the structure of diamond and explain why it is very hard. [3]\n(b) Explain why graphite is soft and slippery and can be used as a lubricant. [3]",
          marks: 6,
          difficulty: "core",
          modelAnswer:
            "(a) In diamond each carbon atom is covalently bonded to four other carbon atoms in a rigid three-dimensional giant covalent (macromolecular) lattice. All bonds are strong covalent bonds, and to break or distort the structure many strong bonds must be broken, so diamond is extremely hard.\n\n(b) In graphite each carbon atom is covalently bonded to three others, forming flat layers of hexagonal rings. The layers are held together only by weak forces (weak intermolecular/van der Waals forces) between them, so the layers can slide over one another easily. This makes graphite soft and slippery, allowing it to act as a lubricant.",
          markScheme: [
            "(a) each carbon bonded to 4 others / giant covalent 3D lattice [1]",
            "(a) all strong covalent bonds [1]",
            "(a) many strong bonds must be broken → very hard [1]",
            "(b) layers of carbon atoms (each bonded to 3 others) [1]",
            "(b) weak forces between layers [1]",
            "(b) layers slide over one another → soft/slippery [1]",
          ],
          commonError:
            "Saying the weak forces in graphite are between atoms — they are between the LAYERS; within a layer the bonding is strong covalent.",
          hints: [
            "Count the bonds per carbon in each structure.",
            "Hardness comes from a rigid 3D network.",
            "In graphite, focus on the forces between layers.",
          ],
          strategy: "relate structure (bonds, layers) to hardness and lubrication",
        },
        {
          id: "exam-chemistry-qa-p2-05",
          question:
            "Aluminium reacts with oxygen to form aluminium oxide: 4Al + 3O₂ → 2Al₂O₃\n\nCalculate the mass of aluminium oxide formed when 5.4 g of aluminium reacts completely. (Ar: Al = 27, O = 16) [4]",
          marks: 4,
          difficulty: "core",
          modelAnswer:
            "Moles Al = 5.4 ÷ 27 = 0.20 mol.\nFrom the equation, 4 Al : 2 Al₂O₃, i.e. ratio 2 : 1, so moles Al₂O₃ = 0.20 ÷ 2 = 0.10 mol.\nMr of Al₂O₃ = 2(27) + 3(16) = 54 + 48 = 102.\nMass Al₂O₃ = 0.10 × 102 = 10.2 g.",
          markScheme: [
            "moles Al = 5.4 ÷ 27 = 0.20 mol [1]",
            "moles Al₂O₃ = 0.20 ÷ 2 = 0.10 mol (4:2 ratio) [1]",
            "Mr Al₂O₃ = 102 [1]",
            "mass Al₂O₃ = 0.10 × 102 = 10.2 g [1]",
          ],
          commonError:
            "Using a 1:1 ratio instead of 4:2 (= 2:1) between Al and Al₂O₃.",
          hints: [
            "Moles = mass ÷ Ar.",
            "The ratio of Al to Al₂O₃ is 4 : 2.",
            "Work out the Mr of Al₂O₃ (= 102).",
          ],
          strategy: "reacting masses: watch the 4:2 mole ratio",
          solutions: [
            {
              label: "Moles pathway",
              steps: [
                "n(Al) = 5.4 / 27 = 0.20 mol",
                "n(Al₂O₃) = 0.20 / 2 = 0.10 mol",
                "Mr(Al₂O₃) = 54 + 48 = 102",
                "mass = 0.10 × 102 = 10.2 g",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p2-06",
          question:
            "A compound contains 32.4% sodium, 22.5% sulfur and 45.1% oxygen by mass. (Ar: Na = 23, S = 32, O = 16)\n\nCalculate the empirical formula of the compound. Show your working. [4]",
          marks: 4,
          difficulty: "challenge",
          modelAnswer:
            "Divide each percentage by its Ar to get a mole ratio:\nNa: 32.4 ÷ 23 = 1.409\nS: 22.5 ÷ 32 = 0.703\nO: 45.1 ÷ 16 = 2.819\nDivide each by the smallest (0.703):\nNa: 1.409 ÷ 0.703 = 2.00\nS: 0.703 ÷ 0.703 = 1.00\nO: 2.819 ÷ 0.703 = 4.01 ≈ 4\nSo the ratio Na : S : O = 2 : 1 : 4, giving the empirical formula Na₂SO₄.",
          markScheme: [
            "divide each % by Ar (1.409, 0.703, 2.819) [1]",
            "divide by the smallest value [1]",
            "ratio Na : S : O = 2 : 1 : 4 [1]",
            "empirical formula Na₂SO₄ [1]",
          ],
          commonError:
            "Stopping before dividing by the smallest value, or rounding too early so the ratio is wrong.",
          hints: [
            "Divide each percentage by the element's Ar.",
            "Divide all results by the smallest number.",
            "Round to the nearest whole-number ratio.",
          ],
          strategy: "empirical formula: % ÷ Ar then divide by smallest",
          solutions: [
            {
              label: "Empirical formula method",
              steps: [
                "Na: 32.4/23 = 1.409; S: 22.5/32 = 0.703; O: 45.1/16 = 2.819",
                "Divide by 0.703: Na = 2.00, S = 1.00, O = 4.01",
                "Ratio 2 : 1 : 4 → Na₂SO₄",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p2-07",
          question:
            "Concentrated aqueous sodium chloride (brine) is electrolysed using inert electrodes.\n\n(a) Name the product formed at the cathode and write the half-equation. [2]\n(b) Name the product formed at the anode and write the half-equation. [2]\n(c) Name the useful substance that remains in the solution. [1]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) Hydrogen is formed at the cathode: 2H⁺ + 2e⁻ → H₂ (accept 2H₂O + 2e⁻ → H₂ + 2OH⁻).\n\n(b) Chlorine is formed at the anode: 2Cl⁻ → Cl₂ + 2e⁻.\n\n(c) Sodium hydroxide (NaOH) remains in solution.",
          markScheme: [
            "(a) hydrogen at the cathode [1]",
            "(a) 2H⁺ + 2e⁻ → H₂ (or water version) [1]",
            "(b) chlorine at the anode [1]",
            "(b) 2Cl⁻ → Cl₂ + 2e⁻ [1]",
            "(c) sodium hydroxide [1]",
          ],
          commonError:
            "Predicting sodium metal at the cathode — in aqueous solution hydrogen is discharged in preference to the more reactive sodium.",
          hints: [
            "In aqueous solution, hydrogen is usually discharged at the cathode in preference to a reactive metal.",
            "Concentrated chloride gives chlorine at the anode.",
            "The remaining ions form an alkali.",
          ],
          strategy: "electrolysis of brine: H₂, Cl₂, NaOH products",
        },
        {
          id: "exam-chemistry-qa-p2-08",
          question:
            "In an experiment, 50.0 cm³ of dilute hydrochloric acid is added to 2.00 g of an excess of magnesium carbonate. The temperature of the mixture rises by 6.0 °C. (Assume the solution has a mass of 50.0 g and specific heat capacity 4.2 J/g°C.)\n\n(a) Calculate the energy released, in joules, using energy = mass × specific heat capacity × temperature change. [2]\n(b) State whether the reaction is exothermic or endothermic and give a reason. [2]",
          marks: 4,
          difficulty: "core",
          modelAnswer:
            "(a) Energy = m × c × ΔT = 50.0 × 4.2 × 6.0 = 1260 J (= 1.26 kJ).\n\n(b) The reaction is exothermic because the temperature of the surroundings (the solution) increased, showing that energy was released to the surroundings.",
          markScheme: [
            "(a) substitution: 50.0 × 4.2 × 6.0 [1]",
            "(a) energy = 1260 J / 1.26 kJ [1]",
            "(b) exothermic [1]",
            "(b) temperature rose / energy released to surroundings [1]",
          ],
          commonError:
            "Forgetting the units (J) or mixing up mass of solution with mass of magnesium carbonate (use the solution mass for m×c×ΔT).",
          hints: [
            "Use energy = m × c × ΔT.",
            "Use the mass of the solution (50.0 g).",
            "A temperature rise means heat is released (exothermic).",
          ],
          strategy: "calorimetry: q = mcΔT; rising temperature → exothermic",
          solutions: [
            {
              label: "Energy released",
              steps: [
                "q = m × c × ΔT",
                "q = 50.0 × 4.2 × 6.0",
                "q = 1260 J = 1.26 kJ",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p2-09",
          question:
            "A student measures the volume of carbon dioxide produced over time when marble chips react with hydrochloric acid. The graph of volume against time rises steeply at first, then levels off.\n\n(a) Explain why the graph is steepest at the start. [2]\n(b) Explain why the graph eventually levels off. [2]\n(c) The experiment is repeated using the same mass of marble as a powder instead of chips. Sketch in words how the new graph would compare. [2]",
          marks: 6,
          difficulty: "challenge",
          modelAnswer:
            "(a) At the start the concentration of the reactants is highest, so there are the most frequent collisions per second between reacting particles, giving the fastest rate; therefore the graph is steepest at the beginning.\n\n(b) As the reaction proceeds the reactants are used up, so their concentration falls and collisions become less frequent; the rate slows. When one reactant is completely used up the reaction stops and no more gas is produced, so the graph becomes horizontal (levels off).\n\n(c) Using a powder increases the surface area, so the initial rate is faster and the graph is steeper at the start (reaches the plateau sooner). Because the same mass of marble is used, the total volume of CO₂ produced is the same, so the graph levels off at the same final volume.",
          markScheme: [
            "(a) highest reactant concentration at the start [1]",
            "(a) most frequent collisions → fastest rate → steepest [1]",
            "(b) reactants used up / concentration falls → rate slows [1]",
            "(b) reaction stops when a reactant is used up → levels off [1]",
            "(c) powder: steeper initial gradient (larger surface area) [1]",
            "(c) same final volume (same mass of marble) [1]",
          ],
          commonError:
            "Claiming powder gives MORE gas — surface area changes the rate, not the total amount of product (same mass = same moles).",
          hints: [
            "Rate depends on collision frequency, which depends on concentration.",
            "The plateau means a reactant has run out.",
            "Surface area changes rate but not total product.",
          ],
          strategy: "interpret rate graphs; separate rate from total yield",
        },
        {
          id: "exam-chemistry-qa-p2-10",
          question:
            "Sulfuric acid is manufactured by the Contact process. A key step is:\n2SO₂(g) + O₂(g) ⇌ 2SO₃(g)  ΔH = −196 kJ/mol\n\n(a) State the catalyst used and the typical operating temperature. [2]\n(b) Explain why a very high temperature is NOT used, even though it would increase the rate. [2]\n(c) Explain why a very high pressure is not necessary for this step. [2]",
          marks: 6,
          difficulty: "challenge",
          modelAnswer:
            "(a) Catalyst: vanadium(V) oxide (V₂O₅). Temperature: about 450 °C.\n\n(b) The forward reaction is exothermic, so a higher temperature would shift the equilibrium to the left (towards the reactants), reducing the equilibrium yield of SO₃. A very high temperature would therefore lower the yield, so a compromise temperature (~450 °C) is used to give a good yield at an acceptable rate.\n\n(c) The forward reaction already gives a very high yield of SO₃ at around 1–2 atm. Although the left has more moles of gas (3) than the right (2), so high pressure would favour SO₃ slightly, the yield is already so high (about 99%) that the extra cost and danger of using very high pressure is not worthwhile.",
          markScheme: [
            "(a) vanadium(V) oxide / V₂O₅ [1]",
            "(a) ~450 °C [1]",
            "(b) forward reaction exothermic; high temperature lowers yield [1]",
            "(b) compromise temperature for yield and rate [1]",
            "(c) yield already very high at low/moderate pressure [1]",
            "(c) high pressure costly/dangerous and not needed [1]",
          ],
          commonError:
            "Confusing the Contact process catalyst (V₂O₅) with the Haber process catalyst (iron).",
          hints: [
            "Recall the Contact process catalyst.",
            "The forward reaction is exothermic — what does high temperature do to yield?",
            "Consider whether high pressure is needed if the yield is already high.",
          ],
          strategy: "Contact process: catalyst, compromise temperature, low pressure rationale",
        },
        {
          id: "exam-chemistry-qa-p2-11",
          question:
            "Copper(II) carbonate (an insoluble green solid) reacts with dilute nitric acid.\n\n(a) Write a balanced equation for the reaction. [2]\n(b) Describe what you would observe during the reaction. [2]\n(c) Name a chemical test for the gas produced and the result. [2]",
          marks: 6,
          difficulty: "core",
          modelAnswer:
            "(a) CuCO₃ + 2HNO₃ → Cu(NO₃)₂ + H₂O + CO₂.\n\n(b) Effervescence (bubbles/fizzing) of a gas is seen as carbon dioxide is released; the green solid dissolves/disappears and the solution turns blue (because copper(II) nitrate is formed).\n\n(c) Bubble the gas through limewater (calcium hydroxide solution). If carbon dioxide is present, the limewater turns milky/cloudy.",
          markScheme: [
            "(a) correct products: Cu(NO₃)₂, H₂O, CO₂ [1]",
            "(a) balanced (2HNO₃) [1]",
            "(b) effervescence / green solid dissolves [1]",
            "(b) solution turns blue [1]",
            "(c) limewater test [1]",
            "(c) turns milky/cloudy with CO₂ [1]",
          ],
          commonError:
            "Forgetting the coefficient 2 in front of HNO₃ when balancing.",
          hints: [
            "Carbonate + acid → salt + water + carbon dioxide.",
            "Copper(II) salts give blue solutions.",
            "Limewater is the standard test for CO₂.",
          ],
          strategy: "carbonate + acid reaction, observations, gas test",
        },
        {
          id: "exam-chemistry-qa-p2-12",
          question:
            "The reactivity series places potassium, calcium, zinc and copper in order.\n\n(a) Write the four metals in order from MOST to LEAST reactive. [1]\n(b) Describe what you would observe when each of calcium and copper is added to cold water. [2]\n(c) Explain, using the reactivity series, why zinc can be extracted from its oxide by heating with carbon, but potassium cannot. [2]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) Potassium > calcium > zinc > copper.\n\n(b) Calcium reacts with cold water: effervescence (hydrogen released), the metal sinks/moves and a white suspension (calcium hydroxide) forms; the reaction is moderately vigorous. Copper does NOT react with cold water — no observable change.\n\n(c) Carbon can only reduce (extract) metals that are LESS reactive than carbon. Zinc is below carbon in reactivity, so carbon can remove the oxygen from zinc oxide. Potassium is more reactive than carbon, so carbon cannot reduce potassium oxide; potassium must be extracted by electrolysis.",
          markScheme: [
            "(a) K > Ca > Zn > Cu [1]",
            "(b) calcium: effervescence / reacts with cold water [1]",
            "(b) copper: no reaction with cold water [1]",
            "(c) carbon reduces metals less reactive than itself (zinc) [1]",
            "(c) potassium more reactive than carbon → electrolysis needed [1]",
          ],
          commonError:
            "Forgetting that the metal must be BELOW carbon for carbon reduction to work.",
          hints: [
            "Group I metals are the most reactive.",
            "Only some metals react with cold water.",
            "Compare each metal with carbon's position.",
          ],
          strategy: "reactivity series predicts reactions and extraction method",
        },
        {
          id: "exam-chemistry-qa-p2-13",
          question:
            "Paper chromatography is used to analyse the dyes in a food colouring.\n\n(a) Describe how you would set up and run the chromatography experiment. [3]\n(b) Explain how to calculate the Rf value of a spot and what it tells you. [2]",
          marks: 5,
          difficulty: "warmup",
          modelAnswer:
            "(a) Draw a pencil baseline near the bottom of the chromatography paper. Place a small spot of the food colouring on the baseline and let it dry. Stand the paper in a container with a shallow depth of solvent so the solvent level is BELOW the baseline (so the spot is not directly in the solvent). The solvent rises up the paper by capillary action, carrying the dyes different distances, separating them into spots. Remove the paper before the solvent reaches the top and mark the solvent front.\n\n(b) Rf = distance moved by the spot ÷ distance moved by the solvent (front), measured from the baseline. The Rf value is a constant for a given substance in a given solvent (between 0 and 1) and can be used to identify the substances by comparing with known values.",
          markScheme: [
            "(a) pencil baseline; spot of sample applied [1]",
            "(a) solvent level below the baseline [1]",
            "(a) solvent rises and separates the dyes / mark the solvent front [1]",
            "(b) Rf = distance moved by spot ÷ distance moved by solvent [1]",
            "(b) Rf is characteristic of a substance / used to identify it [1]",
          ],
          commonError:
            "Drawing the baseline in ink (it would run) or having the solvent level above the spot (the sample would dissolve away).",
          hints: [
            "Use a pencil line, not ink.",
            "Keep the solvent below the spots at the start.",
            "Rf compares spot distance to solvent distance.",
          ],
          strategy: "chromatography method and Rf calculation",
        },
        {
          id: "exam-chemistry-qa-p2-14",
          question:
            "Methane (CH₄) and ethane (C₂H₆) are members of the alkane homologous series.\n\n(a) State three characteristics of a homologous series. [3]\n(b) Write the balanced equation for the complete combustion of ethane. [2]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) Any three of: members have the same general formula (here CₙH₂ₙ₊₂); they differ from the next member by a CH₂ unit; they have similar chemical properties; they show a gradual trend/change in physical properties (e.g. boiling point increases with chain length); they have the same functional group.\n\n(b) 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O.",
          markScheme: [
            "(a) same general formula [1]",
            "(a) differ by CH₂ / similar chemical properties [1]",
            "(a) gradual trend in physical properties [1]",
            "(b) correct products 4CO₂ and 6H₂O [1]",
            "(b) balanced with 7O₂ (and 2 ethane) [1]",
          ],
          commonError:
            "Mis-balancing combustion equations — count H and C first, then balance O last (here using a coefficient of 2 for ethane avoids fractions).",
          hints: [
            "Recall the defining features of a homologous series.",
            "Complete combustion gives CO₂ and H₂O.",
            "Balance C and H first, then O.",
          ],
          strategy: "homologous series features; balance a combustion equation",
        },
        {
          id: "exam-chemistry-qa-p2-15",
          question:
            "Poly(ethene) is an addition polymer made from ethene.\n\n(a) Draw or describe the repeat unit of poly(ethene). [2]\n(b) State one environmental problem caused by the disposal of poly(ethene) and explain why it occurs. [2]",
          marks: 4,
          difficulty: "core",
          modelAnswer:
            "(a) The repeat unit of poly(ethene) is –(CH₂–CH₂)– (a –CH₂CH₂– unit with bonds extending out on each side to show it repeats). It is formed by the C=C double bonds of many ethene monomers opening and joining.\n\n(b) Poly(ethene) is non-biodegradable: micro-organisms cannot break it down because it is chemically unreactive and the bonds are difficult to break, so waste persists in the environment / landfill for a very long time, causing pollution. (Accept: burning it can release toxic gases / carbon dioxide.)",
          markScheme: [
            "(a) repeat unit –CH₂–CH₂– with continuation bonds [1]",
            "(a) shown as a repeating unit (brackets / n) [1]",
            "(b) non-biodegradable / not broken down / persists [1]",
            "(b) reason: micro-organisms cannot break it down / unreactive bonds [1]",
          ],
          commonError:
            "Drawing the repeat unit still showing a C=C double bond — in the polymer the double bond has become a single bond.",
          hints: [
            "The double bond opens to form single bonds in the chain.",
            "Show the unit repeating, not the monomer.",
            "Think about why plastics last so long in the environment.",
          ],
          strategy: "polymer repeat unit; disposal issues",
        },
        {
          id: "exam-chemistry-qa-p2-16",
          question:
            "Ethanol can be oxidised to ethanoic acid.\n\n(a) Name a suitable oxidising agent and state the colour change observed. [2]\n(b) Ethanoic acid is a weak acid. Write the equation for the reaction of ethanoic acid with sodium carbonate. [2]",
          marks: 4,
          difficulty: "core",
          modelAnswer:
            "(a) Acidified potassium dichromate(VI) (or potassium manganate(VII)). With acidified potassium dichromate(VI) the colour changes from orange to green. (With acidified potassium manganate(VII): purple to colourless.)\n\n(b) 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂.",
          markScheme: [
            "(a) acidified potassium dichromate(VI) / manganate(VII) [1]",
            "(a) correct colour change (orange to green / purple to colourless) [1]",
            "(b) products: sodium ethanoate, water, carbon dioxide [1]",
            "(b) balanced equation (2 CH₃COOH) [1]",
          ],
          commonError:
            "Giving the colour change for the wrong reagent (orange→green is dichromate; purple→colourless is manganate).",
          hints: [
            "An orange→green change indicates dichromate(VI).",
            "Carboxylic acid + carbonate → salt + water + CO₂.",
            "The salt of ethanoic acid is an ethanoate.",
          ],
          strategy: "oxidation of ethanol; carboxylic acid reactions",
        },
        {
          id: "exam-chemistry-qa-p2-17",
          question:
            "Calculate the mass of sodium chloride (Mr = 58.5) needed to make 250 cm³ of a 0.200 mol/dm³ solution. Show all your working. [4]",
          marks: 4,
          difficulty: "core",
          modelAnswer:
            "Volume = 250 cm³ = 0.250 dm³.\nMoles NaCl = concentration × volume = 0.200 × 0.250 = 0.0500 mol.\nMass = moles × Mr = 0.0500 × 58.5 = 2.925 g ≈ 2.93 g (3 s.f.).",
          markScheme: [
            "volume = 0.250 dm³ [1]",
            "moles = 0.200 × 0.250 = 0.0500 mol [1]",
            "mass = moles × Mr [1]",
            "mass = 2.93 g (accept 2.925 g) [1]",
          ],
          commonError:
            "Not converting cm³ to dm³ before multiplying by concentration.",
          hints: [
            "Convert the volume to dm³.",
            "Moles = concentration × volume (dm³).",
            "Mass = moles × Mr.",
          ],
          strategy: "solution mass: concentration × volume → moles → mass",
          solutions: [
            {
              label: "Concentration to mass",
              steps: [
                "V = 250/1000 = 0.250 dm³",
                "n = 0.200 × 0.250 = 0.0500 mol",
                "mass = 0.0500 × 58.5 = 2.93 g",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p2-18",
          question:
            "An unknown white solid is tested.\n- Test 1: a flame test gives a yellow flame.\n- Test 2: when dilute hydrochloric acid is added, a gas is produced that turns limewater milky.\n\n(a) Identify the cation and the anion present. [2]\n(b) Name the solid. [1]\n(c) Write a balanced equation for the reaction in Test 2 (with hydrochloric acid). [2]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) Cation: sodium ion, Na⁺ (yellow flame). Anion: carbonate ion, CO₃²⁻ (gives CO₂ with acid, turning limewater milky).\n\n(b) Sodium carbonate, Na₂CO₃.\n\n(c) Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂.",
          markScheme: [
            "(a) sodium / Na⁺ [1]",
            "(a) carbonate / CO₃²⁻ [1]",
            "(b) sodium carbonate / Na₂CO₃ [1]",
            "(c) correct products (NaCl, H₂O, CO₂) [1]",
            "(c) balanced (2HCl, 2NaCl) [1]",
          ],
          commonError:
            "Forgetting to balance the equation (2HCl and 2NaCl needed).",
          hints: [
            "Yellow flame indicates sodium.",
            "A gas turning limewater milky is carbon dioxide → carbonate.",
            "Carbonate + acid → salt + water + CO₂.",
          ],
          strategy: "combine flame test and gas test to identify a salt",
        },
        {
          id: "exam-chemistry-qa-p2-19",
          question:
            "A 6.0 g sample of magnesium is burned in air. It reacts to form magnesium oxide and magnesium nitride. Consider only the reaction with oxygen: 2Mg + O₂ → 2MgO.\n\nIf all 6.0 g of magnesium reacted with oxygen only, calculate the theoretical mass of magnesium oxide formed, and then the percentage yield if 9.0 g of magnesium oxide was actually collected. (Ar: Mg = 24, O = 16) [5]",
          marks: 5,
          difficulty: "challenge",
          modelAnswer:
            "Moles Mg = 6.0 ÷ 24 = 0.25 mol.\nFrom 2Mg : 2MgO (1:1), moles MgO = 0.25 mol.\nMr of MgO = 24 + 16 = 40.\nTheoretical mass MgO = 0.25 × 40 = 10.0 g.\nPercentage yield = (actual ÷ theoretical) × 100 = (9.0 ÷ 10.0) × 100 = 90.0%.",
          markScheme: [
            "moles Mg = 6.0 ÷ 24 = 0.25 mol [1]",
            "moles MgO = 0.25 mol (1:1) [1]",
            "Mr MgO = 40 [1]",
            "theoretical mass = 0.25 × 40 = 10.0 g [1]",
            "% yield = (9.0 ÷ 10.0) × 100 = 90.0% [1]",
          ],
          commonError:
            "Using the wrong Mr for MgO or forgetting that the ratio of Mg to MgO is 1:1.",
          hints: [
            "Moles Mg = mass ÷ Ar.",
            "Mg : MgO is 1:1.",
            "% yield = (actual ÷ theoretical) × 100.",
          ],
          strategy: "theoretical mass then percentage yield",
          solutions: [
            {
              label: "Yield calculation",
              steps: [
                "n(Mg) = 6.0/24 = 0.25 mol",
                "n(MgO) = 0.25 mol; Mr(MgO) = 40",
                "theoretical mass = 0.25 × 40 = 10.0 g",
                "% yield = 9.0/10.0 × 100 = 90.0%",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p2-20",
          question:
            "(a) State two essential conditions for iron to rust. [2]\n(b) Describe two different methods of preventing iron from rusting, and explain how each works. [4]",
          marks: 6,
          difficulty: "warmup",
          modelAnswer:
            "(a) Water (moisture) and oxygen (from the air) are both required for iron to rust.\n\n(b) Method 1 — Barrier method (e.g. painting, oiling/greasing, or coating with plastic): the coating keeps out water and oxygen, so the iron cannot react. Method 2 — Sacrificial protection (e.g. attaching blocks of zinc, or galvanising with zinc): zinc is more reactive than iron, so the zinc is oxidised (corrodes) in preference to the iron, protecting it even if the surface is scratched. (Accept galvanising as a combined barrier + sacrificial method.)",
          markScheme: [
            "(a) water [1]",
            "(a) oxygen [1]",
            "(b) barrier method named (paint/oil/plastic) and explained: keeps out water/oxygen [2]",
            "(b) sacrificial protection named (zinc/galvanising) and explained: more reactive metal corrodes instead [2]",
          ],
          commonError:
            "Just listing methods without explaining HOW each prevents rusting.",
          hints: [
            "Rusting needs both water and oxygen.",
            "Barrier methods exclude water and air.",
            "Sacrificial protection uses a more reactive metal.",
          ],
          strategy: "conditions for rusting and prevention methods with reasons",
        },
      ],
    },
    {
      id: "exam-chemistry-qa-3",
      title: "Mock Exam — Structured Paper 3",
      description:
        "20 structured questions spanning the full Cambridge IGCSE 0620 Extended syllabus. Show all working for calculations. Allow 90 minutes.",
      questions: [
        {
          id: "exam-chemistry-qa-p3-01",
          question:
            "(a) Explain, in terms of energy and particle movement, what happens to a gas when it is cooled until it condenses to a liquid. [3]\n(b) Explain why a gas can be compressed easily but a liquid cannot. [2]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) As the gas is cooled, its particles lose kinetic energy and move more slowly. When they slow down sufficiently, the attractive forces between them are able to pull them closer together; at the condensation (boiling) point the gas condenses to a liquid, in which the particles are close together and can move past one another.\n\n(b) In a gas the particles are very far apart with large spaces between them, so applying pressure can push them much closer together (compression). In a liquid the particles are already close together with little space between them, so they cannot be pushed significantly closer, and the liquid cannot be compressed.",
          markScheme: [
            "(a) particles lose kinetic energy / move more slowly [1]",
            "(a) attractive forces pull particles closer [1]",
            "(a) particles end up close together (liquid) [1]",
            "(b) gas particles far apart / large spaces → can be pushed closer [1]",
            "(b) liquid particles already close together → cannot compress [1]",
          ],
          commonError:
            "Saying the particles 'disappear' or change size — only their spacing and motion change.",
          hints: [
            "Cooling removes kinetic energy.",
            "Compressibility depends on the spaces between particles.",
            "Gas particles are far apart; liquid particles are close.",
          ],
          strategy: "link energy, spacing and forces to state changes and compressibility",
        },
        {
          id: "exam-chemistry-qa-p3-02",
          question:
            "The table shows information about three particles, P, Q and R.\nP: 11 protons, 12 neutrons, 11 electrons.\nQ: 11 protons, 12 neutrons, 10 electrons.\nR: 12 protons, 12 neutrons, 12 electrons.\n\n(a) Which two particles are isotopes? Explain. [1]\n(b) Identify particle Q (give its formula including charge). [2]\n(c) State whether P and R are atoms of the same element. Explain. [2]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) None of P, Q, R are isotopes of each other: isotopes are atoms of the same element (same proton number) with different neutron numbers. P and Q have the same proton number (11) but Q is an ion (different electrons), and they have the same number of neutrons too, so they are not isotopes; R has a different proton number. (P and Q are the atom and ion of the same element, not isotopes.)\n\n(b) Q has 11 protons (so it is sodium) but only 10 electrons, meaning it has lost one electron and has a 1+ charge. Q is Na⁺.\n\n(c) P and R are NOT the same element. P has 11 protons (sodium) and R has 12 protons (magnesium); elements are defined by proton number, which differs.",
          markScheme: [
            "(a) none are isotopes / explanation that isotopes need same protons but different neutrons [1]",
            "(b) sodium ion / 11 protons but 10 electrons → 1+ [1]",
            "(b) Na⁺ [1]",
            "(c) not the same element [1]",
            "(c) because they have different proton numbers (11 vs 12) [1]",
          ],
          commonError:
            "Calling P and Q isotopes — they are an atom and its ion (same neutrons here), differing only in electrons.",
          hints: [
            "Isotopes: same protons, DIFFERENT neutrons.",
            "An ion has unequal protons and electrons.",
            "Element identity = proton number.",
          ],
          strategy: "use proton/neutron/electron counts to classify particles",
        },
        {
          id: "exam-chemistry-qa-p3-03",
          question:
            "(a) Explain why the noble gases are chemically very unreactive. [2]\n(b) Sodium is in Group I and chlorine is in Group VII. State the type of ion each forms and explain why their compound (NaCl) is more stable than the separate elements. [3]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) Noble gases have a full outer electron shell (a stable electron arrangement). They have no tendency to gain, lose or share electrons, so they do not readily react.\n\n(b) Sodium forms a positive ion, Na⁺ (it loses one electron). Chlorine forms a negative ion, Cl⁻ (it gains one electron). By transferring the electron, both ions achieve full outer electron shells (stable, noble-gas-like arrangements), and the oppositely charged ions are held together by strong electrostatic attraction, so the compound is more stable (lower in energy) than the separate reactive elements.",
          markScheme: [
            "(a) full outer shell / stable electron arrangement [1]",
            "(a) no tendency to gain/lose/share electrons → unreactive [1]",
            "(b) Na forms Na⁺ (positive); Cl forms Cl⁻ (negative) [1]",
            "(b) both achieve full outer shells / stable arrangements [1]",
            "(b) strong electrostatic attraction holds ions → more stable [1]",
          ],
          commonError:
            "Saying noble gases have 'no electrons in the outer shell' — they have a FULL outer shell.",
          hints: [
            "Full outer shells are stable.",
            "Group I loses electrons; Group VII gains them.",
            "Stability comes from full shells and attraction between ions.",
          ],
          strategy: "stability from full outer shells; ion formation by transfer",
        },
        {
          id: "exam-chemistry-qa-p3-04",
          question:
            "Methane (CH₄) is a simple molecular substance.\n\n(a) Draw a dot-and-cross diagram (describe it) showing the bonding in a molecule of methane. [2]\n(b) Explain why methane has a low boiling point. [2]",
          marks: 4,
          difficulty: "core",
          modelAnswer:
            "(a) A carbon atom is in the centre with four hydrogen atoms around it. Carbon shares one of its four outer electrons with each hydrogen, and each hydrogen shares its single electron with carbon, forming four single covalent bonds (four shared pairs of electrons, each shown as one dot and one cross between C and H). All atoms then have full outer shells (C has 8 shared electrons; each H has 2).\n\n(b) Methane is made of small, simple molecules. The covalent bonds within the molecule are strong, but the forces of attraction BETWEEN molecules (intermolecular forces) are weak. Only a small amount of energy is needed to overcome these weak intermolecular forces, so methane has a low boiling point.",
          markScheme: [
            "(a) four shared pairs of electrons (one between C and each H) [1]",
            "(a) shows full outer shells (C: 8, H: 2) [1]",
            "(b) weak forces BETWEEN molecules (intermolecular) [1]",
            "(b) little energy needed to overcome them → low boiling point [1]",
          ],
          commonError:
            "Attributing the low boiling point to weak covalent bonds — the covalent bonds are strong; it is the intermolecular forces that are weak.",
          hints: [
            "Carbon needs four bonds; each H needs one.",
            "Distinguish bonds within molecules from forces between them.",
            "Low boiling point = weak intermolecular forces.",
          ],
          strategy: "covalent bonding diagram; intermolecular forces and boiling point",
        },
        {
          id: "exam-chemistry-qa-p3-05",
          question:
            "Lead(II) bromide is electrolysed when molten.\n\n(a) Explain why solid lead(II) bromide does not conduct electricity but molten lead(II) bromide does. [2]\n(b) Write the half-equations for the reactions at the cathode and the anode. [2]\n(c) State why the lead(II) bromide must be molten rather than solid for electrolysis. [1]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) In the solid, the ions are held in fixed positions in the lattice and cannot move. When molten, the lattice breaks down and the ions are free to move and carry the electric charge, so it conducts.\n\n(b) Cathode: Pb²⁺ + 2e⁻ → Pb. Anode: 2Br⁻ → Br₂ + 2e⁻.\n\n(c) The ions must be free to move (mobile) to carry the current and be discharged; this only happens when the compound is molten (or dissolved).",
          markScheme: [
            "(a) solid: ions fixed / cannot move [1]",
            "(a) molten: ions free to move and carry charge [1]",
            "(b) cathode: Pb²⁺ + 2e⁻ → Pb [1]",
            "(b) anode: 2Br⁻ → Br₂ + 2e⁻ [1]",
            "(c) ions must be mobile to conduct/be discharged [1]",
          ],
          commonError:
            "Forgetting the balancing electrons or the factor of 2 for bromide in the anode equation.",
          hints: [
            "Conduction needs mobile charged particles.",
            "Cathode reduces the metal ion; anode oxidises the halide.",
            "Balance electrons and atoms in each half-equation.",
          ],
          strategy: "electrolysis of molten salt: conductivity and half-equations",
        },
        {
          id: "exam-chemistry-qa-p3-06",
          question:
            "In a titration, 25.0 cm³ of sulfuric acid is neutralised by 30.0 cm³ of 0.500 mol/dm³ sodium hydroxide.\nH₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O\n\nCalculate the concentration of the sulfuric acid in mol/dm³. Show all working. [4]",
          marks: 4,
          difficulty: "challenge",
          modelAnswer:
            "Moles NaOH = concentration × volume (dm³) = 0.500 × (30.0/1000) = 0.500 × 0.0300 = 0.0150 mol.\nMole ratio H₂SO₄ : NaOH = 1 : 2, so moles H₂SO₄ = 0.0150 ÷ 2 = 0.00750 mol.\nConcentration H₂SO₄ = moles ÷ volume (dm³) = 0.00750 ÷ (25.0/1000) = 0.00750 ÷ 0.0250 = 0.300 mol/dm³.",
          markScheme: [
            "moles NaOH = 0.500 × 0.0300 = 0.0150 mol [1]",
            "mole ratio 1 : 2 → moles H₂SO₄ = 0.00750 mol [1]",
            "concentration = moles ÷ volume in dm³ [1]",
            "concentration H₂SO₄ = 0.300 mol/dm³ [1]",
          ],
          commonError:
            "Forgetting the 1:2 ratio and dividing wrongly — H₂SO₄ reacts with TWICE as many moles of NaOH.",
          hints: [
            "Find moles of NaOH first.",
            "The ratio of acid to base is 1 : 2.",
            "Divide the NaOH moles by 2 to get the acid moles.",
          ],
          strategy: "titration with 1:2 ratio; divide by 2 for the diprotic acid",
          solutions: [
            {
              label: "Titration method",
              steps: [
                "n(NaOH) = 0.500 × (30.0/1000) = 0.0150 mol",
                "n(H₂SO₄) = 0.0150 / 2 = 0.00750 mol",
                "c(H₂SO₄) = 0.00750 / (25.0/1000) = 0.300 mol/dm³",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p3-07",
          question:
            "The decomposition of hydrogen peroxide is catalysed by manganese(IV) oxide:\n2H₂O₂(aq) → 2H₂O(l) + O₂(g)\n\n(a) Define the term catalyst. [2]\n(b) Explain, in terms of activation energy, how the catalyst speeds up the reaction. [2]\n(c) State how you could show that the manganese(IV) oxide is a catalyst and not a reactant. [1]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) A catalyst is a substance that increases the rate of a chemical reaction but is not used up (is chemically unchanged) at the end of the reaction.\n\n(b) The catalyst provides an alternative reaction pathway with a lower activation energy. This means a greater proportion of the colliding particles have enough energy (≥ the lower activation energy) to react, so there are more successful collisions per second and the rate increases.\n\n(c) Filter off, dry and reweigh the manganese(IV) oxide at the end — its mass is unchanged, showing it was not used up (it is a catalyst).",
          markScheme: [
            "(a) increases rate of reaction [1]",
            "(a) not used up / chemically unchanged [1]",
            "(b) provides alternative pathway with lower activation energy [1]",
            "(b) more particles have energy ≥ Ea → more successful collisions [1]",
            "(c) reweigh the catalyst — mass unchanged [1]",
          ],
          commonError:
            "Saying the catalyst 'lowers the energy of the reactants' — it lowers the activation energy (the barrier), not the energy of the reactants/products.",
          hints: [
            "A catalyst is not consumed.",
            "It lowers the activation energy.",
            "How would you prove its mass is unchanged?",
          ],
          strategy: "define catalyst; activation energy lowering; show mass unchanged",
        },
        {
          id: "exam-chemistry-qa-p3-08",
          question:
            "Hydrogen and iodine reach equilibrium in a sealed container:\nH₂(g) + I₂(g) ⇌ 2HI(g)  ΔH = −10 kJ/mol\n\n(a) Explain what is meant by a dynamic equilibrium. [2]\n(b) State and explain the effect on the position of equilibrium of: (i) increasing the temperature; (ii) increasing the pressure. [4]",
          marks: 6,
          difficulty: "challenge",
          modelAnswer:
            "(a) At dynamic equilibrium the forward and reverse reactions are still occurring, but at equal rates, so the concentrations of reactants and products remain constant (it is a closed system).\n\n(b) (i) Increasing the temperature shifts the equilibrium in the endothermic (reverse) direction to absorb the added heat (since the forward reaction is exothermic). So the position shifts to the left and the yield of HI decreases.\n(ii) There are 2 moles of gas on the left (1 + 1) and 2 moles of gas on the right (2 HI). Since the number of moles of gas is the same on both sides, changing the pressure has NO effect on the position of equilibrium.",
          markScheme: [
            "(a) forward and reverse reactions both occur at equal rates [1]",
            "(a) concentrations remain constant / closed system [1]",
            "(b)(i) shifts left / yield of HI decreases [1]",
            "(b)(i) high temperature favours endothermic (reverse) direction [1]",
            "(b)(ii) no effect on position [1]",
            "(b)(ii) equal moles of gas on both sides (2 and 2) [1]",
          ],
          commonError:
            "Assuming pressure always shifts equilibrium — when the moles of gas are equal on both sides, pressure has NO effect on the position.",
          hints: [
            "Equilibrium is dynamic with equal opposing rates.",
            "Temperature change favours the endothermic direction when heated.",
            "Count moles of gas on each side for the pressure effect.",
          ],
          strategy: "Le Chatelier; recognise equal gas moles → no pressure effect",
        },
        {
          id: "exam-chemistry-qa-p3-09",
          question:
            "Dilute sulfuric acid reacts with potassium hydroxide solution.\n\n(a) Write the balanced symbol equation, including state symbols. [2]\n(b) Write the ionic equation for the neutralisation. [1]\n(c) Name the type of reaction and define it in terms of ions. [2]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) H₂SO₄(aq) + 2KOH(aq) → K₂SO₄(aq) + 2H₂O(l).\n\n(b) H⁺(aq) + OH⁻(aq) → H₂O(l).\n\n(c) It is a neutralisation reaction. In terms of ions, neutralisation is the reaction of hydrogen ions (H⁺) from the acid with hydroxide ions (OH⁻) from the alkali to form water.",
          markScheme: [
            "(a) correct products K₂SO₄ and H₂O [1]",
            "(a) balanced with state symbols (2KOH, 2H₂O) [1]",
            "(b) H⁺ + OH⁻ → H₂O [1]",
            "(c) neutralisation [1]",
            "(c) H⁺ reacts with OH⁻ to form water [1]",
          ],
          commonError:
            "Forgetting to balance (need 2KOH and 2H₂O) or omitting state symbols where asked.",
          hints: [
            "Acid + alkali → salt + water.",
            "The salt of sulfuric acid is a sulfate.",
            "The ionic equation is the same for all strong acid–alkali neutralisations.",
          ],
          strategy: "neutralisation equation, ionic equation and definition",
        },
        {
          id: "exam-chemistry-qa-p3-10",
          question:
            "Zinc is added to copper(II) sulfate solution.\n\n(a) Describe two observations. [2]\n(b) Write the balanced symbol equation and the ionic equation for the reaction. [3]\n(c) Explain why this is described as a redox reaction. [2]",
          marks: 7,
          difficulty: "core",
          modelAnswer:
            "(a) The blue colour of the copper(II) sulfate solution fades (becomes paler/colourless); a reddish-brown solid (copper) is deposited on the zinc; the zinc gradually dissolves; the temperature of the mixture rises (the reaction is exothermic).\n\n(b) Symbol equation: Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s).\nIonic equation: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s).\n\n(c) It is a redox reaction because both oxidation and reduction occur: zinc loses electrons (Zn → Zn²⁺ + 2e⁻), so it is oxidised; copper(II) ions gain electrons (Cu²⁺ + 2e⁻ → Cu), so they are reduced.",
          markScheme: [
            "(a) blue colour fades [1]",
            "(a) reddish-brown copper deposited / zinc dissolves / temperature rises [1]",
            "(b) symbol equation correct [1]",
            "(b) ionic equation: Zn + Cu²⁺ → Zn²⁺ + Cu [1]",
            "(b) balanced (charges/atoms) [1]",
            "(c) zinc oxidised (loses electrons) [1]",
            "(c) copper(II) ion reduced (gains electrons) [1]",
          ],
          commonError:
            "Writing the ionic equation including spectator ions (SO₄²⁻) — these should be left out of the ionic equation.",
          hints: [
            "A more reactive metal displaces a less reactive one.",
            "Leave out spectator ions in the ionic equation.",
            "Redox = both oxidation and reduction occur.",
          ],
          strategy: "displacement: observations, ionic equation, redox explanation",
        },
        {
          id: "exam-chemistry-qa-p3-11",
          question:
            "Crude oil is a mixture separated by fractional distillation.\n\n(a) Explain why crude oil can be separated by fractional distillation. [2]\n(b) As you go UP the fractionating column, describe how the following properties of the fractions change: boiling point, ease of ignition (flammability), and viscosity. [3]",
          marks: 5,
          difficulty: "warmup",
          modelAnswer:
            "(a) Crude oil is a mixture of hydrocarbons with different chain lengths and therefore different boiling points. Because the components have different boiling points, they can be separated by fractional distillation: each fraction condenses at a different height/temperature in the column.\n\n(b) Going up the column (cooler, shorter molecules): boiling point decreases; ease of ignition (flammability) increases (lighter fractions ignite more easily); viscosity decreases (lighter fractions are less viscous / flow more easily).",
          markScheme: [
            "(a) crude oil is a mixture of hydrocarbons with different boiling points [1]",
            "(a) separation possible because boiling points differ [1]",
            "(b) boiling point decreases up the column [1]",
            "(b) flammability/ease of ignition increases [1]",
            "(b) viscosity decreases [1]",
          ],
          commonError:
            "Getting the trends the wrong way round — UP the column means smaller molecules: lower boiling point, more flammable, less viscous.",
          hints: [
            "Fractions differ in boiling point because they differ in chain length.",
            "The top of the column is cooler.",
            "Smaller molecules: lower bp, more flammable, runnier.",
          ],
          strategy: "fractional distillation; trends up the column",
        },
        {
          id: "exam-chemistry-qa-p3-12",
          question:
            "Long-chain alkanes are cracked to produce smaller molecules.\n\n(a) State the conditions used for cracking. [2]\n(b) Decane (C₁₀H₂₂) is cracked to form octane (C₈H₁₈) and one other product. Write a balanced equation and name the other product. [2]\n(c) Give one reason why cracking is economically important. [1]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) A high temperature and a catalyst (e.g. ~600–700 °C with a silica/alumina catalyst). (Accept: heat plus a catalyst.)\n\n(b) C₁₀H₂₂ → C₈H₁₈ + C₂H₄. The other product is ethene (an alkene). Check atoms: C: 10 = 8 + 2; H: 22 = 18 + 4.\n\n(c) Cracking converts less useful long-chain hydrocarbons (in low demand) into shorter, more useful ones (e.g. petrol/fuels in high demand) and produces alkenes used to make plastics.",
          markScheme: [
            "(a) high temperature [1]",
            "(a) catalyst [1]",
            "(b) balanced equation C₁₀H₂₂ → C₈H₁₈ + C₂H₄ [1]",
            "(b) other product = ethene / an alkene [1]",
            "(c) makes more useful/short-chain products / provides alkenes for plastics [1]",
          ],
          commonError:
            "Writing an unbalanced cracking equation — the carbon and hydrogen atoms must balance.",
          hints: [
            "Cracking needs heat and a catalyst.",
            "Balance carbon and hydrogen across the equation.",
            "The smaller fragment here is an alkene.",
          ],
          strategy: "cracking conditions, balanced equation and economic value",
        },
        {
          id: "exam-chemistry-qa-p3-13",
          question:
            "Ethanol (C₂H₅OH) burns completely in oxygen.\n\n(a) Write a balanced equation for the complete combustion of ethanol. [2]\n(b) 4.6 g of ethanol (Mr = 46) is burned completely. Calculate the mass of carbon dioxide produced. (Mr CO₂ = 44) [4]",
          marks: 6,
          difficulty: "challenge",
          modelAnswer:
            "(a) C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.\n\n(b) Moles ethanol = 4.6 ÷ 46 = 0.10 mol.\nFrom the equation, 1 mol ethanol → 2 mol CO₂, so moles CO₂ = 0.20 mol.\nMass CO₂ = moles × Mr = 0.20 × 44 = 8.8 g.",
          markScheme: [
            "(a) correct products 2CO₂ and 3H₂O [1]",
            "(a) balanced with 3O₂ [1]",
            "(b) moles ethanol = 4.6 ÷ 46 = 0.10 mol [1]",
            "(b) mole ratio 1 : 2 → moles CO₂ = 0.20 mol [1]",
            "(b) mass CO₂ = 0.20 × 44 [1]",
            "(b) mass = 8.8 g [1]",
          ],
          commonError:
            "Forgetting the 1:2 ratio (each ethanol gives two CO₂) or mis-balancing the combustion equation.",
          hints: [
            "Balance the combustion equation first.",
            "Moles ethanol = mass ÷ 46.",
            "Each ethanol produces two CO₂.",
          ],
          strategy: "balance combustion; moles → ratio → mass of CO₂",
          solutions: [
            {
              label: "Combustion mass calculation",
              steps: [
                "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O",
                "n(ethanol) = 4.6 / 46 = 0.10 mol",
                "n(CO₂) = 2 × 0.10 = 0.20 mol",
                "mass CO₂ = 0.20 × 44 = 8.8 g",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p3-14",
          question:
            "A student tests an unknown solution.\n- Adding aqueous sodium hydroxide and warming gives a gas that turns damp red litmus paper blue.\n- Adding dilute nitric acid then aqueous silver nitrate gives a cream precipitate, insoluble in dilute ammonia but soluble in concentrated ammonia.\n\n(a) Identify the gas produced in the first test and the ion it indicates. [2]\n(b) Identify the anion shown by the second test. [1]\n(c) Suggest the identity of the unknown compound. [1]",
          marks: 4,
          difficulty: "challenge",
          modelAnswer:
            "(a) The gas is ammonia (NH₃), which turns damp red litmus paper blue. It indicates the ammonium ion, NH₄⁺.\n\n(b) The cream precipitate (silver bromide) that is insoluble in dilute ammonia but soluble in concentrated ammonia indicates the bromide ion, Br⁻.\n\n(c) The compound is ammonium bromide, NH₄Br.",
          markScheme: [
            "(a) gas is ammonia / NH₃ [1]",
            "(a) indicates ammonium ion NH₄⁺ [1]",
            "(b) bromide / Br⁻ [1]",
            "(c) ammonium bromide / NH₄Br [1]",
          ],
          commonError:
            "Confusing the silver halide precipitates: AgCl is white (soluble in dilute ammonia), AgBr is cream (soluble only in concentrated ammonia), AgI is yellow (insoluble in ammonia).",
          hints: [
            "A gas turning red litmus blue and made with NaOH is ammonia.",
            "Cream silver halide that needs concentrated ammonia to dissolve is the bromide.",
            "Combine the cation and anion.",
          ],
          strategy: "identify ammonium and bromide; name the salt",
        },
        {
          id: "exam-chemistry-qa-p3-15",
          question:
            "Aluminium is extracted by electrolysis of molten aluminium oxide dissolved in cryolite.\n\n(a) State why cryolite is added to the aluminium oxide. [1]\n(b) Write the half-equations at the cathode and anode. [2]\n(c) Explain why the extraction of aluminium by electrolysis is expensive. [2]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) Cryolite is added to lower the melting point of the aluminium oxide, so less energy is needed (the mixture melts at a lower temperature than pure Al₂O₃).\n\n(b) Cathode: Al³⁺ + 3e⁻ → Al. Anode: 2O²⁻ → O₂ + 4e⁻.\n\n(c) Electrolysis requires a very large amount of electrical energy (electricity is expensive) to melt the ore and to carry out the electrolysis; in addition, the carbon anodes are burned away by the oxygen produced and must be replaced regularly, adding to the cost.",
          markScheme: [
            "(a) lowers the melting point (saves energy) [1]",
            "(b) cathode: Al³⁺ + 3e⁻ → Al [1]",
            "(b) anode: 2O²⁻ → O₂ + 4e⁻ [1]",
            "(c) large amount of (electrical) energy needed / electricity expensive [1]",
            "(c) anodes burn away and must be replaced [1]",
          ],
          commonError:
            "Saying cryolite is a catalyst — it is a solvent/melting-point lowerer, not a catalyst.",
          hints: [
            "Cryolite affects the melting point.",
            "Metal at the cathode, oxygen at the anode.",
            "Think about energy cost and anode replacement.",
          ],
          strategy: "aluminium extraction: cryolite role, half-equations, cost",
        },
        {
          id: "exam-chemistry-qa-p3-16",
          question:
            "A current of 1.50 A is passed through molten aluminium oxide for 1.00 hour during the extraction of aluminium.\n\nCalculate the mass of aluminium produced at the cathode. (F = 96 500 C/mol; Ar Al = 27; half-equation: Al³⁺ + 3e⁻ → Al) [5]",
          marks: 5,
          difficulty: "challenge",
          modelAnswer:
            "Time = 1.00 hour = 3600 s.\nCharge Q = I × t = 1.50 × 3600 = 5400 C.\nMoles of electrons = Q ÷ F = 5400 ÷ 96 500 = 0.05596 mol.\nFrom the half-equation, 3 mol of electrons produce 1 mol of aluminium, so moles Al = 0.05596 ÷ 3 = 0.01865 mol.\nMass Al = moles × Ar = 0.01865 × 27 = 0.504 g (3 s.f.).",
          markScheme: [
            "time = 3600 s [1]",
            "Q = 1.50 × 3600 = 5400 C [1]",
            "moles e⁻ = 5400 ÷ 96500 = 0.0560 mol [1]",
            "moles Al = moles e⁻ ÷ 3 = 0.01865 mol [1]",
            "mass Al = 0.01865 × 27 = 0.504 g [1]",
          ],
          commonError:
            "Forgetting to divide by 3 (three electrons per aluminium ion) or not converting hours to seconds.",
          hints: [
            "Convert the time to seconds (× 3600).",
            "Charge Q = current × time.",
            "Each Al needs 3 electrons.",
          ],
          strategy: "Q = It → moles e⁻ → divide by 3 → mass of Al",
          solutions: [
            {
              label: "Electrolysis mass calculation",
              steps: [
                "t = 3600 s; Q = 1.50 × 3600 = 5400 C",
                "n(e⁻) = 5400 / 96500 = 0.0560 mol",
                "n(Al) = 0.0560 / 3 = 0.01865 mol",
                "mass Al = 0.01865 × 27 = 0.504 g",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p3-17",
          question:
            "(a) Explain the difference between a strong acid and a concentrated acid. [2]\n(b) A sample of hydrochloric acid has a pH of 1. The acid is diluted with water until its pH is 3. By what factor has the hydrogen ion concentration changed, and has it increased or decreased? [2]",
          marks: 4,
          difficulty: "challenge",
          modelAnswer:
            "(a) A STRONG acid is one that is fully (completely) ionised in water (it is about the degree of ionisation). A CONCENTRATED acid is one that has a large amount of acid (many moles) dissolved per unit volume of solution (it is about the amount dissolved). The two terms are independent: an acid can be strong but dilute, or weak but concentrated.\n\n(b) Going from pH 1 to pH 3 is an increase of 2 pH units. Each pH unit increase corresponds to a ten-fold DECREASE in hydrogen ion concentration, so [H⁺] has decreased by a factor of 10 × 10 = 100.",
          markScheme: [
            "(a) strong = fully/completely ionised (degree of ionisation) [1]",
            "(a) concentrated = large amount/moles per volume (amount dissolved) [1]",
            "(b) [H⁺] decreased [1]",
            "(b) by a factor of 100 (two pH units) [1]",
          ],
          commonError:
            "Treating 'strong' and 'concentrated' as the same thing — they describe different properties.",
          hints: [
            "Strength = ionisation; concentration = amount per volume.",
            "Each pH unit is a factor of 10 in [H⁺].",
            "Higher pH means lower [H⁺].",
          ],
          strategy: "strong vs concentrated; logarithmic pH scale",
        },
        {
          id: "exam-chemistry-qa-p3-18",
          question:
            "(a) State two adverse effects of acid rain. [2]\n(b) Acid rain is caused partly by sulfur dioxide. Explain how sulfur dioxide is produced and how it leads to acid rain. [3]",
          marks: 5,
          difficulty: "warmup",
          modelAnswer:
            "(a) Any two of: corrodes/damages buildings and statues (especially those made of limestone/marble); kills trees / damages forests / damages leaves; lowers the pH of lakes and rivers, killing fish and aquatic life; corrodes metals.\n\n(b) Sulfur dioxide is produced when fossil fuels (such as coal and some oils) that contain sulfur impurities are burned (S + O₂ → SO₂). The sulfur dioxide rises into the atmosphere and dissolves in rainwater (and is oxidised) to form sulfurous/sulfuric acid, which falls as acid rain.",
          markScheme: [
            "(a) damages buildings/limestone (corrosion) [1]",
            "(a) harms trees/plants or acidifies lakes/kills aquatic life [1]",
            "(b) sulfur impurities in fossil fuels burn to form SO₂ [1]",
            "(b) SO₂ dissolves in rainwater [1]",
            "(b) forms sulfurous/sulfuric acid → acid rain [1]",
          ],
          commonError:
            "Confusing the cause of acid rain (SO₂ and NOₓ) with the cause of global warming (CO₂, CH₄).",
          hints: [
            "Acid rain damages buildings and ecosystems.",
            "SO₂ comes from burning sulfur-containing fuels.",
            "SO₂ dissolves in rain to make acid.",
          ],
          strategy: "acid rain: source of SO₂, formation, effects",
        },
        {
          id: "exam-chemistry-qa-p3-19",
          question:
            "Ammonia is used to make nitric acid and fertilisers.\n\n(a) Ammonium sulfate is a fertiliser made by reacting ammonia with sulfuric acid. Write the balanced equation. [2]\n(b) Explain why nitrogen-containing fertilisers are added to soil. [2]\n(c) State one environmental problem caused by overuse of fertilisers and name it. [1]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) 2NH₃ + H₂SO₄ → (NH₄)₂SO₄.\n\n(b) Nitrogen is an essential element for plant growth (it is needed to make proteins). Fertilisers replace the nitrogen removed from the soil by growing/harvesting crops, increasing crop yield and helping plants grow well.\n\n(c) Eutrophication: excess fertiliser washes into rivers and lakes, causing rapid growth of algae (an algal bloom). When the algae and plants die, micro-organisms decompose them and use up the dissolved oxygen in the water, so fish and other aquatic organisms die.",
          markScheme: [
            "(a) correct product (NH₄)₂SO₄ [1]",
            "(a) balanced with 2NH₃ [1]",
            "(b) nitrogen needed for plant growth / making proteins [1]",
            "(b) replaces nitrogen removed / increases crop yield [1]",
            "(c) eutrophication (or named effect: algal bloom / oxygen depletion / fish die) [1]",
          ],
          commonError:
            "Not balancing the equation (need 2NH₃) and confusing eutrophication with acid rain.",
          hints: [
            "Ammonia is a base; sulfuric acid + base → salt.",
            "Plants need nitrogen for proteins.",
            "Excess fertiliser in water causes algal blooms.",
          ],
          strategy: "fertiliser equation, role of nitrogen, eutrophication",
        },
        {
          id: "exam-chemistry-qa-p3-20",
          question:
            "5.00 g of hydrated copper(II) sulfate (CuSO₄·xH₂O) is heated until all the water of crystallisation is driven off, leaving 3.20 g of anhydrous copper(II) sulfate (CuSO₄).\n\nDetermine the value of x in the formula. (Mr: CuSO₄ = 160; H₂O = 18) [5]",
          marks: 5,
          difficulty: "challenge",
          modelAnswer:
            "Mass of water lost = 5.00 − 3.20 = 1.80 g.\nMoles CuSO₄ = 3.20 ÷ 160 = 0.0200 mol.\nMoles H₂O = 1.80 ÷ 18 = 0.100 mol.\nRatio CuSO₄ : H₂O = 0.0200 : 0.100 = 1 : 5.\nTherefore x = 5, and the formula is CuSO₄·5H₂O.",
          markScheme: [
            "mass of water = 5.00 − 3.20 = 1.80 g [1]",
            "moles CuSO₄ = 3.20 ÷ 160 = 0.0200 mol [1]",
            "moles H₂O = 1.80 ÷ 18 = 0.100 mol [1]",
            "ratio CuSO₄ : H₂O = 1 : 5 [1]",
            "x = 5 [1]",
          ],
          commonError:
            "Using the original 5.00 g (hydrated) mass to find moles of CuSO₄ — you must use the anhydrous mass (3.20 g).",
          hints: [
            "Mass of water = hydrated mass − anhydrous mass.",
            "Find moles of CuSO₄ from the anhydrous mass.",
            "x = moles H₂O ÷ moles CuSO₄.",
          ],
          strategy: "water of crystallisation: mass loss → mole ratio → x",
          solutions: [
            {
              label: "Water of crystallisation method",
              steps: [
                "mass H₂O = 5.00 − 3.20 = 1.80 g",
                "n(CuSO₄) = 3.20 / 160 = 0.0200 mol",
                "n(H₂O) = 1.80 / 18 = 0.100 mol",
                "ratio = 0.100 / 0.0200 = 5 → x = 5",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "exam-chemistry-qa-4",
      title: "Mock Exam — Structured Paper 4",
      description:
        "20 structured questions spanning the full Cambridge IGCSE 0620 Extended syllabus. Show all working for calculations. Allow 90 minutes.",
      questions: [
        {
          id: "exam-chemistry-qa-p4-01",
          question:
            "A measured amount of a purple solid (potassium manganate(VII)) is placed in the bottom of a beaker of cold water and left without stirring. After several hours the whole solution has turned purple.\n\n(a) Name the process responsible. [1]\n(b) Explain the observation in terms of particles. [2]\n(c) Predict how the result would differ if hot water had been used, and explain why. [2]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) Diffusion.\n\n(b) The particles of the purple solid dissolve and then spread out (diffuse) through the water because both the dissolved particles and the water particles are in constant random motion; the particles move from the region of high concentration (the bottom) to areas of lower concentration until evenly spread.\n\n(c) In hot water the colour would spread faster (the solution would turn purple more quickly). This is because the particles have more kinetic energy and move faster, so they diffuse more rapidly.",
          markScheme: [
            "(a) diffusion [1]",
            "(b) particles in constant random motion [1]",
            "(b) spread from high to low concentration until even [1]",
            "(c) faster in hot water [1]",
            "(c) particles have more kinetic energy / move faster [1]",
          ],
          commonError:
            "Saying the colour spreads because of stirring or currents — here it is purely due to the random motion of particles (diffusion).",
          hints: [
            "The colour spreads without stirring.",
            "Particles are in constant random motion.",
            "Higher temperature → faster particle movement.",
          ],
          strategy: "diffusion explained by particle motion; temperature effect",
        },
        {
          id: "exam-chemistry-qa-p4-02",
          question:
            "(a) The element boron has two isotopes, ¹⁰B and ¹¹B. The relative atomic mass of boron is 10.8. Calculate the percentage abundance of each isotope. [3]\n(b) Explain why the relative atomic mass of boron is not a whole number. [1]",
          marks: 4,
          difficulty: "challenge",
          modelAnswer:
            "(a) Let the percentage of ¹¹B be x, so ¹⁰B is (100 − x).\nAr = [11x + 10(100 − x)] ÷ 100 = 10.8\n11x + 1000 − 10x = 1080\nx + 1000 = 1080\nx = 80.\nSo ¹¹B = 80% and ¹⁰B = 20%.\n\n(b) The relative atomic mass is a weighted average of the masses of the different isotopes (taking their abundances into account), so it is generally not a whole number.",
          markScheme: [
            "(a) sets up equation [11x + 10(100 − x)]/100 = 10.8 [1]",
            "(a) solves to x = 80 [1]",
            "(a) ¹¹B = 80%, ¹⁰B = 20% [1]",
            "(b) Ar is a (weighted) average of isotope masses [1]",
          ],
          commonError:
            "Setting up the equation with the masses assigned to the wrong abundances.",
          hints: [
            "Let one abundance be x and the other (100 − x).",
            "Set the weighted average equal to 10.8.",
            "Ar is an average, hence not a whole number.",
          ],
          strategy: "solve for isotope abundance from Ar; explain non-integer Ar",
          solutions: [
            {
              label: "Algebraic method",
              steps: [
                "Let % of ¹¹B = x, % of ¹⁰B = 100 − x",
                "(11x + 10(100 − x))/100 = 10.8",
                "x + 1000 = 1080 → x = 80",
                "¹¹B = 80%, ¹⁰B = 20%",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p4-03",
          question:
            "Calcium is in Group II and chlorine is in Group VII of the Periodic Table.\n\n(a) Write the electron configurations of a calcium atom and a chlorine atom. [2]\n(b) Calcium reacts with chlorine to form calcium chloride. Deduce the formula of calcium chloride and explain how you worked it out from the ions formed. [3]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) Calcium: 2,8,8,2. Chlorine: 2,8,7.\n\n(b) Calcium loses its 2 outer electrons to form Ca²⁺. Each chlorine atom gains 1 electron to form Cl⁻. To balance the charges, two Cl⁻ ions are needed for each Ca²⁺ ion (2 × 1− = 2−, balancing the 2+). So the formula is CaCl₂.",
          markScheme: [
            "(a) calcium 2,8,8,2 [1]",
            "(a) chlorine 2,8,7 [1]",
            "(b) Ca forms Ca²⁺ (loses 2 e⁻); Cl forms Cl⁻ (gains 1 e⁻) [1]",
            "(b) two Cl⁻ needed per Ca²⁺ to balance charge [1]",
            "(b) formula CaCl₂ [1]",
          ],
          commonError:
            "Writing the calcium configuration as 2,8,2 (forgetting the third shell holds 8 before the fourth shell fills) — calcium (Z=20) is 2,8,8,2.",
          hints: [
            "Calcium has 20 electrons; chlorine has 17.",
            "Group II loses 2 electrons; Group VII gains 1.",
            "Balance the charges to find the ratio.",
          ],
          strategy: "electron configurations and ionic formula by charge balance",
        },
        {
          id: "exam-chemistry-qa-p4-04",
          question:
            "Silicon(IV) oxide (SiO₂) and carbon dioxide (CO₂) both contain a Group IV element bonded to oxygen, but their physical properties are very different. SiO₂ melts at about 1700 °C; CO₂ sublimes at about −78 °C.\n\nExplain this large difference in terms of their structure and bonding. [4]",
          marks: 4,
          difficulty: "challenge",
          modelAnswer:
            "Silicon(IV) oxide has a giant covalent (macromolecular) structure in which every atom is joined to its neighbours by strong covalent bonds throughout the whole structure. To melt it, many strong covalent bonds must be broken, which requires a great deal of energy, giving a very high melting point. Carbon dioxide, although it contains strong C=O covalent bonds, exists as small, separate (simple) molecules. The forces of attraction BETWEEN the CO₂ molecules (intermolecular forces) are weak, so only a little energy is needed to separate the molecules; therefore CO₂ has a very low melting/sublimation point.",
          markScheme: [
            "SiO₂ is giant covalent / macromolecular structure [1]",
            "many strong covalent bonds must be broken → much energy → high mp [1]",
            "CO₂ is simple molecular (small separate molecules) [1]",
            "weak intermolecular forces broken (not the covalent bonds) → low mp [1]",
          ],
          commonError:
            "Saying CO₂ has weak covalent bonds — the C=O bonds are strong; it is the intermolecular forces that are weak.",
          hints: [
            "Compare giant covalent with simple molecular structures.",
            "What is broken on melting each substance?",
            "Distinguish covalent bonds from intermolecular forces.",
          ],
          strategy: "giant covalent vs simple molecular explains the melting points",
        },
        {
          id: "exam-chemistry-qa-p4-05",
          question:
            "When 25.0 cm³ of 0.100 mol/dm³ silver nitrate solution is mixed with excess sodium chloride solution, a white precipitate of silver chloride forms:\nAgNO₃ + NaCl → AgCl + NaNO₃\n\nCalculate the maximum mass of silver chloride that can be formed. (Mr AgCl = 143.5) [4]",
          marks: 4,
          difficulty: "core",
          modelAnswer:
            "Moles AgNO₃ = concentration × volume (dm³) = 0.100 × (25.0/1000) = 0.100 × 0.0250 = 0.00250 mol.\nFrom the equation, AgNO₃ : AgCl = 1 : 1, so moles AgCl = 0.00250 mol.\nMass AgCl = moles × Mr = 0.00250 × 143.5 = 0.359 g (3 s.f.).",
          markScheme: [
            "moles AgNO₃ = 0.100 × 0.0250 = 0.00250 mol [1]",
            "moles AgCl = 0.00250 mol (1:1 ratio) [1]",
            "mass = moles × Mr [1]",
            "mass AgCl = 0.359 g [1]",
          ],
          commonError:
            "Not converting 25.0 cm³ to dm³, or using the sodium chloride (which is in excess) for the calculation instead of the limiting silver nitrate.",
          hints: [
            "Silver nitrate is the limiting reagent (NaCl is in excess).",
            "Moles = concentration × volume (dm³).",
            "Mass = moles × 143.5.",
          ],
          strategy: "use the limiting reagent; moles → mass of precipitate",
          solutions: [
            {
              label: "Precipitate mass",
              steps: [
                "n(AgNO₃) = 0.100 × (25.0/1000) = 0.00250 mol",
                "n(AgCl) = 0.00250 mol (1:1)",
                "mass = 0.00250 × 143.5 = 0.359 g",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p4-06",
          question:
            "The reaction between hydrogen and chlorine is exothermic:\nH₂(g) + Cl₂(g) → 2HCl(g)\n\nBond energies (kJ/mol): H–H = 436; Cl–Cl = 242; H–Cl = 431\n\n(a) Calculate ΔH for the reaction, showing all working. [3]\n(b) Draw (describe) the reaction profile (energy level diagram) for this reaction, labelling the activation energy and ΔH. [3]",
          marks: 6,
          difficulty: "challenge",
          modelAnswer:
            "(a) Bonds broken: H–H + Cl–Cl = 436 + 242 = 678 kJ.\nBonds formed: 2 × H–Cl = 2 × 431 = 862 kJ.\nΔH = bonds broken − bonds formed = 678 − 862 = −184 kJ/mol.\n\n(b) The reaction profile shows the reactants (H₂ + Cl₂) at a higher energy level on the left and the products (2HCl) at a lower energy level on the right (because the reaction is exothermic). Between them is an energy 'hump'. The activation energy (Ea) is the height from the reactants' energy level up to the top of the hump. ΔH is the (downward) vertical difference between the reactant and product energy levels, and it is negative (energy released).",
          markScheme: [
            "(a) bonds broken = 436 + 242 = 678 kJ [1]",
            "(a) bonds formed = 2 × 431 = 862 kJ [1]",
            "(a) ΔH = 678 − 862 = −184 kJ/mol [1]",
            "(b) reactants higher than products (exothermic) [1]",
            "(b) activation energy = reactants up to peak [1]",
            "(b) ΔH = difference between reactant and product levels (negative) [1]",
          ],
          commonError:
            "On the profile, measuring activation energy from the products instead of the reactants, or drawing products above reactants for an exothermic reaction.",
          hints: [
            "ΔH = bonds broken − bonds formed.",
            "Exothermic: products lower than reactants.",
            "Ea is measured from the reactants up to the peak.",
          ],
          strategy: "bond energies for ΔH; sketch an exothermic profile",
          solutions: [
            {
              label: "Bond energy calculation",
              steps: [
                "Broken: 436 + 242 = 678 kJ",
                "Formed: 2 × 431 = 862 kJ",
                "ΔH = 678 − 862 = −184 kJ/mol",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p4-07",
          question:
            "A student investigates how the rate of reaction between calcium carbonate and dilute hydrochloric acid depends on acid concentration, by measuring the loss in mass over time.\n\n(a) Explain, using collision theory, why increasing the acid concentration increases the rate. [2]\n(b) Suggest two other variables the student should keep constant for a fair test. [2]\n(c) Explain why the total mass lost is the same regardless of acid concentration, provided the acid is in excess. [2]",
          marks: 6,
          difficulty: "challenge",
          modelAnswer:
            "(a) Increasing the concentration of the acid means there are more acid particles in a given volume. The reacting particles therefore collide more frequently (more collisions per second), so there are more successful collisions per second and the rate increases.\n\n(b) Any two of: the mass/size of the calcium carbonate chips (surface area); the temperature; the volume of acid used; the same total amount of calcium carbonate.\n\n(c) Provided the acid is in excess, the calcium carbonate is the limiting reactant. The same amount (moles) of calcium carbonate always produces the same amount (moles) of carbon dioxide, so the same mass of gas is lost overall — concentration only affects how FAST it is lost, not the total.",
          markScheme: [
            "(a) higher concentration → more particles per volume [1]",
            "(a) more frequent collisions → more successful collisions → faster rate [1]",
            "(b) two valid control variables (surface area/temperature/volume of acid/amount of CaCO₃) [2]",
            "(c) CaCO₃ is the limiting reactant (acid in excess) [1]",
            "(c) same moles CaCO₃ → same moles/mass CO₂ produced [1]",
          ],
          commonError:
            "Confusing rate with total yield — concentration changes the rate but, with limiting CaCO₃, not the total CO₂.",
          hints: [
            "Higher concentration = more particles per volume.",
            "A fair test controls all other variables.",
            "Total product depends on the limiting reactant.",
          ],
          strategy: "collision theory; fair test; limiting reactant vs rate",
        },
        {
          id: "exam-chemistry-qa-p4-08",
          question:
            "Hydrogen iodide decomposes in a reversible reaction:\n2HI(g) ⇌ H₂(g) + I₂(g)  ΔH = +10 kJ/mol\n\n(a) State and explain the effect of increasing the temperature on the equilibrium yield of hydrogen. [3]\n(b) State and explain the effect of increasing the pressure on the position of equilibrium. [2]",
          marks: 5,
          difficulty: "challenge",
          modelAnswer:
            "(a) The forward reaction is endothermic (ΔH positive). Increasing the temperature shifts the equilibrium in the endothermic (forward) direction to absorb the added heat, so the position moves to the right and the yield of hydrogen increases.\n\n(b) There are 2 moles of gas on the left (2 HI) and 2 moles of gas on the right (H₂ + I₂). Because the number of moles of gas is equal on both sides, increasing the pressure has NO effect on the position of equilibrium.",
          markScheme: [
            "(a) forward reaction is endothermic [1]",
            "(a) higher temperature favours endothermic (forward) direction [1]",
            "(a) yield of hydrogen increases / shifts right [1]",
            "(b) no effect on position [1]",
            "(b) equal moles of gas on both sides (2 and 2) [1]",
          ],
          commonError:
            "Assuming pressure always has an effect — with equal gas moles on each side it does not.",
          hints: [
            "Decide whether the forward reaction is exo- or endothermic.",
            "Heating favours the endothermic direction.",
            "Count gas moles on each side for the pressure effect.",
          ],
          strategy: "Le Chatelier for endothermic reaction; equal moles → no pressure effect",
        },
        {
          id: "exam-chemistry-qa-p4-09",
          question:
            "Dilute hydrochloric acid reacts with magnesium.\n\n(a) Write the balanced equation, including state symbols. [2]\n(b) Describe a test for the gas produced and the positive result. [2]\n(c) Classify the reaction (acid + metal) and name the type of salt produced. [2]",
          marks: 6,
          difficulty: "core",
          modelAnswer:
            "(a) Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g).\n\n(b) Collect the gas in a test tube and hold a lighted splint at the mouth: hydrogen burns with a squeaky 'pop' sound, confirming hydrogen.\n\n(c) It is an acid + metal reaction (which produces a salt + hydrogen, a type of redox/displacement reaction). The salt produced is a chloride (magnesium chloride).",
          markScheme: [
            "(a) correct products MgCl₂ and H₂ [1]",
            "(a) balanced with state symbols (2HCl) [1]",
            "(b) lighted splint test [1]",
            "(b) squeaky pop indicates hydrogen [1]",
            "(c) acid + metal → salt + hydrogen [1]",
            "(c) salt is a chloride (magnesium chloride) [1]",
          ],
          commonError:
            "Forgetting the 2 in front of HCl or naming the gas test result incorrectly (the pop test is for hydrogen).",
          hints: [
            "Acid + metal → salt + hydrogen.",
            "Use a lighted splint for hydrogen.",
            "Hydrochloric acid forms chloride salts.",
          ],
          strategy: "acid + metal equation, gas test, salt type",
        },
        {
          id: "exam-chemistry-qa-p4-10",
          question:
            "(a) Define the term salt. [1]\n(b) Describe how you could prepare a pure dry sample of the soluble salt sodium chloride by titration, explaining why titration is the appropriate method here. [4]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) A salt is the compound formed when the hydrogen ion(s) of an acid are replaced by a metal ion (or ammonium ion).\n\n(b) Sodium hydroxide is a soluble base (alkali), so you cannot add it in excess and filter it off. Instead use titration: Using a pipette, measure a known volume of sodium hydroxide into a conical flask with a few drops of indicator. Add hydrochloric acid from a burette until the indicator just changes colour (the end-point); record the volume of acid used. Repeat WITHOUT indicator, adding exactly the same volume of acid to the same volume of alkali, so the solution contains only salt and water. Then evaporate the solution to the point of crystallisation and allow it to crystallise, then filter and dry the crystals.",
          markScheme: [
            "(a) acid's hydrogen replaced by a metal/ammonium ion [1]",
            "(b) titrate acid against alkali with indicator to find the volume [1]",
            "(b) repeat with the same volumes but no indicator (so salt is pure) [1]",
            "(b) evaporate to crystallisation point / crystallise [1]",
            "(b) reason: both reactants soluble, so cannot filter off an excess [1]",
          ],
          commonError:
            "Trying to use the 'excess solid' method for two soluble reactants — there is no solid to filter off, so titration is needed.",
          hints: [
            "A salt comes from replacing the H of an acid.",
            "Both acid and alkali are soluble — no solid to filter.",
            "Find the volume with indicator, then repeat without it.",
          ],
          strategy: "titration method for a salt from two soluble reactants",
        },
        {
          id: "exam-chemistry-qa-p4-11",
          question:
            "The reactivity series can be investigated using displacement reactions.\n\n(a) Define a displacement reaction. [1]\n(b) Strips of three metals X, Y and Z are placed in solutions of their nitrates. Results: X displaces Y and Z; Y displaces Z; Z displaces neither. Place X, Y and Z in order of reactivity (most reactive first) and explain your reasoning. [3]",
          marks: 4,
          difficulty: "challenge",
          modelAnswer:
            "(a) A displacement reaction is one in which a more reactive metal takes the place of (displaces) a less reactive metal from a solution of its compound (salt).\n\n(b) Order (most to least reactive): X > Y > Z. X can displace both Y and Z, so X is more reactive than both. Y can displace Z but not X, so Y is more reactive than Z but less reactive than X. Z displaces neither, so it is the least reactive. A metal can only displace one that is LESS reactive than itself.",
          markScheme: [
            "(a) more reactive metal displaces a less reactive metal from its compound/solution [1]",
            "(b) order X > Y > Z [1]",
            "(b) X displaces both → most reactive [1]",
            "(b) Z displaces neither → least reactive (a metal only displaces a less reactive one) [1]",
          ],
          commonError:
            "Reversing the logic — the metal that DOES the displacing is the MORE reactive one.",
          hints: [
            "A metal displaces only those less reactive than itself.",
            "X displaces the most, so it is the most reactive.",
            "Z displaces nothing, so it is the least reactive.",
          ],
          strategy: "deduce reactivity order from displacement results",
        },
        {
          id: "exam-chemistry-qa-p4-12",
          question:
            "An organic compound A has the molecular formula C₂H₆O and reacts with sodium to release hydrogen gas; it also burns readily. Compound A can be oxidised to compound B (C₂H₄O₂), which turns blue litmus red.\n\n(a) Identify compounds A and B (names and functional groups). [3]\n(b) Write the equation for the reaction of A with sodium. [2]",
          marks: 5,
          difficulty: "challenge",
          modelAnswer:
            "(a) Compound A is ethanol, an alcohol (functional group –OH). It reacts with sodium to release hydrogen, characteristic of the –OH group. Compound B is ethanoic acid, a carboxylic acid (functional group –COOH); it is acidic, so it turns blue litmus red.\n\n(b) 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂ (sodium ethoxide + hydrogen). (Accept 2CH₃CH₂OH + 2Na → 2CH₃CH₂ONa + H₂.)",
          markScheme: [
            "(a) A is ethanol; functional group –OH (alcohol) [1]",
            "(a) B is ethanoic acid; functional group –COOH (carboxylic acid) [1]",
            "(a) link: A oxidised to B / B acidic turns litmus red [1]",
            "(b) products: sodium ethoxide (C₂H₅ONa) and H₂ [1]",
            "(b) balanced (2 ethanol, 2 Na) [1]",
          ],
          commonError:
            "Identifying A as an alkane — alkanes do not react with sodium; the reaction with sodium and oxidation to an acid both point to an alcohol.",
          hints: [
            "Reaction with sodium releasing hydrogen suggests an –OH group.",
            "Oxidation to an acid (turns litmus red) confirms ethanol → ethanoic acid.",
            "Balance the sodium reaction (2 of each on the left).",
          ],
          strategy: "use chemical tests to identify functional groups",
        },
        {
          id: "exam-chemistry-qa-p4-13",
          question:
            "Nylon is a condensation polymer; poly(ethene) is an addition polymer.\n\n(a) State two differences between addition polymerisation and condensation polymerisation. [2]\n(b) Explain why condensation polymers such as polyesters can be broken down (hydrolysed) more easily than addition polymers such as poly(ethene). [2]",
          marks: 4,
          difficulty: "challenge",
          modelAnswer:
            "(a) Any two of: addition polymerisation uses ONE type of monomer (an unsaturated monomer with a C=C double bond), whereas condensation uses TWO different monomers (each with two functional groups); addition produces only the polymer with NO other product, whereas condensation releases a small molecule (e.g. water) at each link; the monomers join across a double bond (addition) versus joining through functional groups (condensation).\n\n(b) Condensation polymers have polar linking groups (e.g. ester or amide bonds) along the backbone that can be attacked and split (hydrolysed) by water, so the chain can be broken back into smaller molecules. Poly(ethene) has only strong, unreactive C–C and C–H bonds with no such linkages, so it is very resistant to hydrolysis (and non-biodegradable).",
          markScheme: [
            "(a) one correct difference (one vs two monomers / unsaturated monomer) [1]",
            "(a) second correct difference (small molecule lost vs no by-product) [1]",
            "(b) condensation polymers have ester/amide linkages that can be hydrolysed [1]",
            "(b) poly(ethene) has only unreactive C–C/C–H bonds → resistant [1]",
          ],
          commonError:
            "Stating that addition polymers lose a small molecule — it is condensation polymers that release a small molecule.",
          hints: [
            "Count the number of monomer types in each process.",
            "Consider whether a small molecule is lost.",
            "Look for the linking groups in the backbone.",
          ],
          strategy: "contrast polymerisation types; link structure to hydrolysis",
        },
        {
          id: "exam-chemistry-qa-p4-14",
          question:
            "A solution may contain Cu²⁺, Fe³⁺ or Zn²⁺ ions.\n\n(a) Describe how you would use aqueous sodium hydroxide to distinguish between these three ions, including all observations. [4]\n(b) Write an ionic equation for the reaction of Fe³⁺ with hydroxide ions. [2]",
          marks: 6,
          difficulty: "core",
          modelAnswer:
            "(a) Add aqueous sodium hydroxide a little at a time and then in excess.\n- Cu²⁺ gives a light blue precipitate (copper(II) hydroxide) which is INSOLUBLE in excess sodium hydroxide.\n- Fe³⁺ gives a red-brown precipitate (iron(III) hydroxide) which is INSOLUBLE in excess.\n- Zn²⁺ gives a WHITE precipitate (zinc hydroxide) which DISSOLVES in excess sodium hydroxide (giving a colourless solution).\nThe colours (blue, red-brown, white) and the behaviour in excess distinguish the three.\n\n(b) Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s).",
          markScheme: [
            "(a) Cu²⁺: blue precipitate (insoluble in excess) [1]",
            "(a) Fe³⁺: red-brown precipitate (insoluble in excess) [1]",
            "(a) Zn²⁺: white precipitate that dissolves in excess [1]",
            "(a) method: add NaOH then add excess [1]",
            "(b) correct species Fe³⁺ + 3OH⁻ → Fe(OH)₃ [1]",
            "(b) balanced (3 OH⁻) [1]",
          ],
          commonError:
            "Forgetting to add the alkali in EXCESS — the behaviour in excess (Zn(OH)₂ dissolves) is essential to distinguish zinc from copper/iron.",
          hints: [
            "Note the precipitate colour for each ion.",
            "Test whether the precipitate dissolves in excess.",
            "Balance the iron(III) equation with 3 OH⁻.",
          ],
          strategy: "cation tests with NaOH: colour + behaviour in excess",
        },
        {
          id: "exam-chemistry-qa-p4-15",
          question:
            "When 50.0 cm³ of 1.00 mol/dm³ hydrochloric acid is added to 50.0 cm³ of 1.00 mol/dm³ sodium hydroxide in a polystyrene cup, the temperature rises by 6.8 °C.\n\nCalculate the molar enthalpy change of neutralisation (in kJ/mol). (Assume the mixture has a total mass of 100 g and specific heat capacity 4.2 J/g°C.) [5]",
          marks: 5,
          difficulty: "challenge",
          modelAnswer:
            "Energy released = m × c × ΔT = 100 × 4.2 × 6.8 = 2856 J = 2.856 kJ.\nMoles HCl = concentration × volume = 1.00 × (50.0/1000) = 0.0500 mol. (NaOH also 0.0500 mol; they react 1:1, so 0.0500 mol of water is formed.)\nMolar enthalpy of neutralisation = energy ÷ moles = 2.856 ÷ 0.0500 = 57.1 kJ/mol released.\nSince the temperature rose (exothermic), ΔH = −57.1 kJ/mol (≈ −57 kJ/mol).",
          markScheme: [
            "energy = 100 × 4.2 × 6.8 = 2856 J / 2.856 kJ [1]",
            "moles of acid (= moles water) = 0.0500 mol [1]",
            "ΔH = energy ÷ moles [1]",
            "magnitude = 57.1 kJ/mol [1]",
            "negative sign / exothermic (≈ −57 kJ/mol) [1]",
          ],
          commonError:
            "Using only 50 g (one solution) for the mass — the total mass of the mixture (100 g) should be used. Also forgetting that the answer is per mole of water formed.",
          hints: [
            "Energy = m × c × ΔT (use total mass 100 g).",
            "Find the moles that reacted (0.0500 mol).",
            "Divide energy (in kJ) by moles; exothermic means negative.",
          ],
          strategy: "calorimetry: q = mcΔT, then ΔH = q ÷ moles (sign for exo/endo)",
          solutions: [
            {
              label: "Enthalpy of neutralisation",
              steps: [
                "q = 100 × 4.2 × 6.8 = 2856 J = 2.856 kJ",
                "n(HCl) = 1.00 × (50.0/1000) = 0.0500 mol",
                "ΔH = 2.856 / 0.0500 = 57.1 kJ/mol",
                "Exothermic → ΔH = −57.1 kJ/mol",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p4-16",
          question:
            "(a) Air is a mixture. State the approximate percentage by volume of nitrogen and of oxygen in clean dry air. [2]\n(b) Describe how oxygen and nitrogen are separated from liquid air, and explain the principle behind the separation. [3]",
          marks: 5,
          difficulty: "warmup",
          modelAnswer:
            "(a) Nitrogen: about 78%. Oxygen: about 21%.\n\n(b) Air is cooled and compressed until it liquefies. The liquid air is then warmed in a fractional distillation column. Because nitrogen and oxygen have different boiling points (nitrogen boils at about −196 °C, oxygen at about −183 °C), they can be separated: nitrogen (lower boiling point) boils off first and is collected near the top, while oxygen (higher boiling point) remains as a liquid lower down. The separation depends on the difference in boiling points.",
          markScheme: [
            "(a) nitrogen ~78% [1]",
            "(a) oxygen ~21% [1]",
            "(b) air liquefied by cooling/compression [1]",
            "(b) fractional distillation of liquid air [1]",
            "(b) separation by difference in boiling points (nitrogen lower) [1]",
          ],
          commonError:
            "Mixing up which gas boils off first — nitrogen has the LOWER boiling point, so it boils off first.",
          hints: [
            "Air is roughly 78% N₂ and 21% O₂.",
            "Cool and compress the air to liquefy it.",
            "Separate by boiling point: nitrogen boils first.",
          ],
          strategy: "composition of air; fractional distillation of liquid air",
        },
        {
          id: "exam-chemistry-qa-p4-17",
          question:
            "Ammonia (NH₃) is made in the Haber process and oxidised to make nitric acid.\n\n(a) Calculate the mass of ammonia that can be made from 28.0 g of nitrogen, assuming complete conversion. N₂ + 3H₂ → 2NH₃. (Ar: N = 14, H = 1) [4]\n(b) Give one large-scale use of ammonia. [1]",
          marks: 5,
          difficulty: "core",
          modelAnswer:
            "(a) Mr of N₂ = 28; moles N₂ = 28.0 ÷ 28 = 1.00 mol.\nFrom the equation, 1 mol N₂ → 2 mol NH₃, so moles NH₃ = 2.00 mol.\nMr of NH₃ = 14 + 3(1) = 17.\nMass NH₃ = moles × Mr = 2.00 × 17 = 34.0 g.\n\n(b) Used to make fertilisers (e.g. ammonium nitrate / ammonium sulfate) — accept: to make nitric acid.",
          markScheme: [
            "(a) moles N₂ = 28.0 ÷ 28 = 1.00 mol [1]",
            "(a) moles NH₃ = 2.00 mol (1:2 ratio) [1]",
            "(a) Mr NH₃ = 17 [1]",
            "(a) mass NH₃ = 2.00 × 17 = 34.0 g [1]",
            "(b) valid use: fertilisers / nitric acid manufacture [1]",
          ],
          commonError:
            "Using Ar of N (14) instead of Mr of N₂ (28) for the moles of nitrogen, or forgetting the 1:2 mole ratio.",
          hints: [
            "Nitrogen is N₂ (Mr = 28).",
            "Each N₂ gives two NH₃.",
            "Mass = moles × 17.",
          ],
          strategy: "moles → 1:2 ratio → mass of ammonia",
          solutions: [
            {
              label: "Haber mass calculation",
              steps: [
                "n(N₂) = 28.0 / 28 = 1.00 mol",
                "n(NH₃) = 2 × 1.00 = 2.00 mol",
                "Mr(NH₃) = 17",
                "mass = 2.00 × 17 = 34.0 g",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p4-18",
          question:
            "Hard water contains dissolved calcium ions.\n\n(a) State one disadvantage of hard water in the home. [1]\n(b) Limestone (calcium carbonate) is heated strongly in a lime kiln. Write the equation for the thermal decomposition and state whether this reaction is exothermic or endothermic. [2]\n(c) The product of (b) is added to acidic soil. Explain why this is useful. [2]",
          marks: 5,
          difficulty: "warmup",
          modelAnswer:
            "(a) Any one of: forms scale (limescale) in kettles/pipes/boilers, wasting energy and blocking pipes; wastes soap / forms scum, so more soap is needed.\n\n(b) CaCO₃ → CaO + CO₂. This thermal decomposition is endothermic (it requires continuous heating / takes in energy).\n\n(c) Calcium oxide (lime) is a base. Acidic soils are harmful to many crops, so adding the base neutralises the excess acid in the soil, raising the pH towards neutral and improving conditions for plant growth.",
          markScheme: [
            "(a) valid disadvantage (limescale / wastes soap / scum) [1]",
            "(b) CaCO₃ → CaO + CO₂ [1]",
            "(b) endothermic [1]",
            "(c) lime/calcium oxide is a base [1]",
            "(c) neutralises excess acid / raises soil pH [1]",
          ],
          commonError:
            "Stating thermal decomposition is exothermic — it requires continuous heating, so it is endothermic.",
          hints: [
            "Hard water affects kettles and soap.",
            "Heating a carbonate gives the oxide and CO₂.",
            "Lime is basic — think about neutralising acid.",
          ],
          strategy: "hard water issues; decomposition of limestone; neutralising soil",
        },
        {
          id: "exam-chemistry-qa-p4-19",
          question:
            "An iron ore contains iron(III) oxide, Fe₂O₃. A factory processes 1.00 tonne (1.00 × 10⁶ g) of pure Fe₂O₃.\n\nCalculate the maximum mass of iron, in kg, that could be extracted. (Fe₂O₃ + 3CO → 2Fe + 3CO₂; Ar: Fe = 56, O = 16) [5]",
          marks: 5,
          difficulty: "challenge",
          modelAnswer:
            "Mr of Fe₂O₃ = 2(56) + 3(16) = 112 + 48 = 160.\nMoles Fe₂O₃ = 1.00 × 10⁶ ÷ 160 = 6250 mol.\nFrom the equation, 1 mol Fe₂O₃ → 2 mol Fe, so moles Fe = 2 × 6250 = 12 500 mol.\nMass Fe = moles × Ar = 12 500 × 56 = 700 000 g = 700 kg.",
          markScheme: [
            "Mr Fe₂O₃ = 160 [1]",
            "moles Fe₂O₃ = 1.00 × 10⁶ ÷ 160 = 6250 mol [1]",
            "moles Fe = 2 × 6250 = 12 500 mol [1]",
            "mass Fe = 12 500 × 56 = 700 000 g [1]",
            "= 700 kg [1]",
          ],
          commonError:
            "Forgetting the 1:2 ratio (each Fe₂O₃ gives TWO Fe) or not converting grams to kilograms at the end.",
          hints: [
            "Work in grams first; Mr of Fe₂O₃ = 160.",
            "Each Fe₂O₃ provides two Fe atoms.",
            "Convert the final mass from g to kg (÷1000).",
          ],
          strategy: "large-scale stoichiometry; 1:2 ratio; unit conversion",
          solutions: [
            {
              label: "Mass of iron extracted",
              steps: [
                "Mr(Fe₂O₃) = 160",
                "n(Fe₂O₃) = 1.00 × 10⁶ / 160 = 6250 mol",
                "n(Fe) = 2 × 6250 = 12 500 mol",
                "mass Fe = 12 500 × 56 = 700 000 g = 700 kg",
              ],
            },
          ],
        },
        {
          id: "exam-chemistry-qa-p4-20",
          question:
            "A gaseous hydrocarbon X has a relative molecular mass of 44. When 0.50 mol of X is completely burned, it produces 1.50 mol of carbon dioxide and 2.00 mol of water.\n\n(a) Determine the number of carbon and hydrogen atoms in one molecule of X, showing your reasoning. [3]\n(b) Deduce the molecular formula of X and name it. [2]",
          marks: 5,
          difficulty: "challenge",
          modelAnswer:
            "(a) All the carbon in X ends up in CO₂. Moles CO₂ = 1.50 mol from 0.50 mol of X, so carbon atoms per molecule = 1.50 ÷ 0.50 = 3.\nAll the hydrogen in X ends up in H₂O. Moles H₂O = 2.00 mol, which contains 2 × 2.00 = 4.00 mol of H atoms. Hydrogen atoms per molecule = 4.00 ÷ 0.50 = 8.\nSo each molecule contains 3 carbon atoms and 8 hydrogen atoms.\n\n(b) Molecular formula = C₃H₈. Check Mr = 3(12) + 8(1) = 36 + 8 = 44 ✓. X is propane.",
          markScheme: [
            "(a) carbon atoms = 1.50 ÷ 0.50 = 3 [1]",
            "(a) moles of H atoms = 2 × 2.00 = 4.00 mol [1]",
            "(a) hydrogen atoms = 4.00 ÷ 0.50 = 8 [1]",
            "(b) molecular formula C₃H₈ (consistent with Mr = 44) [1]",
            "(b) named as propane [1]",
          ],
          commonError:
            "Forgetting that each water molecule contains TWO hydrogen atoms when counting H, or not dividing by the moles of X (0.50) to get atoms per molecule.",
          hints: [
            "All carbon goes to CO₂; all hydrogen goes to H₂O.",
            "Each H₂O has two H atoms.",
            "Divide total atoms by the moles of X to get atoms per molecule.",
          ],
          strategy: "combustion analysis: count C and H per molecule, check against Mr",
          solutions: [
            {
              label: "Combustion analysis",
              steps: [
                "C per molecule = n(CO₂)/n(X) = 1.50/0.50 = 3",
                "H atoms = 2 × n(H₂O) = 2 × 2.00 = 4.00 mol",
                "H per molecule = 4.00/0.50 = 8",
                "Formula C₃H₈; Mr = 36 + 8 = 44 → propane",
              ],
            },
          ],
        },
      ],
    },
  ],
};
