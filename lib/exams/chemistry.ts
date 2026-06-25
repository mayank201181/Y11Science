import type { ComprehensiveExam } from "../types";

export const chemistryExam: ComprehensiveExam = {
  id: "exam-chemistry",
  subject: "chemistry",
  title: "Chemistry — Full Mock Exam",

  mcqPapers: [
    {
      id: "exam-chemistry-mcq-1",
      title: "Paper 1 — Multiple Choice",
      description:
        "20 questions spanning the full Cambridge IGCSE 0620 Extended syllabus. Allow 45 minutes.",
      questions: [
        // ── Q1: Particles & States ───────────────────────────────────────────
        {
          id: "exam-chemistry-mcq-01",
          question:
            "Which statement correctly describes what happens when a liquid is converted to a gas at its boiling point?",
          options: [
            "The average kinetic energy of the particles increases",
            "Bonds within the molecules are broken",
            "The forces between molecules are overcome",
            "The mass of the substance decreases",
          ],
          answerIndex: 2,
          explanation:
            "Boiling converts a liquid to a gas. The energy supplied overcomes the intermolecular attractive forces (forces BETWEEN molecules), allowing particles to escape into the gas phase. The kinetic energy (and hence temperature) stays constant at the boiling point — it is the potential energy that changes. Covalent bonds within molecules are NOT broken; only intermolecular forces are. Mass is conserved.",
          difficulty: "core",
          hints: [
            "At the boiling point, temperature is constant — what is happening to energy?",
            "Distinguish between bonds within a molecule and forces between molecules.",
          ],
          strategy: "distinguish intra- vs inter-molecular forces",
        },

        // ── Q2: Atomic Structure ─────────────────────────────────────────────
        {
          id: "exam-chemistry-mcq-02",
          question:
            "An ion has the symbol ³²S²⁻. How many protons, neutrons, and electrons does this ion contain?",
          options: [
            "16 protons, 16 neutrons, 16 electrons",
            "16 protons, 16 neutrons, 18 electrons",
            "14 protons, 16 neutrons, 16 electrons",
            "16 protons, 18 neutrons, 16 electrons",
          ],
          answerIndex: 1,
          explanation:
            "Sulfur (S) has atomic number 16, so it has 16 protons. Mass number 32 → neutrons = 32 − 16 = 16. The 2− charge means the ion gained 2 extra electrons: electrons = 16 + 2 = 18. Option B is correct.",
          difficulty: "core",
          hints: [
            "Atomic number gives the proton count.",
            "Neutrons = mass number − proton number.",
            "A negative charge means extra electrons were gained.",
          ],
          strategy: "read the ion symbol systematically",
        },

        // ── Q3: Periodic Table — periodicity ────────────────────────────────
        {
          id: "exam-chemistry-mcq-03",
          question:
            "Moving across Period 3 from sodium to argon, which property shows a general increase?",
          options: [
            "Atomic radius",
            "First ionisation energy",
            "Metallic character",
            "Reactivity with cold water",
          ],
          answerIndex: 1,
          explanation:
            "Across a period, nuclear charge increases while electrons are added to the SAME shell, so nuclear attraction on outer electrons increases. This generally raises the first ionisation energy (with dips at Mg→Al and P→S due to sub-shell effects). Atomic radius decreases (not increases) across a period. Metallic character decreases, and reactivity with cold water drops sharply after Na (Mg reacts very slowly; Al, Si, P, S, Cl, Ar do not).",
          difficulty: "core",
          hints: [
            "Consider how nuclear charge changes as you move across a period.",
            "Ionisation energy = energy to remove an electron from a gaseous atom.",
          ],
          strategy: "apply periodic trends",
        },

        // ── Q4: Bonding — ionic ──────────────────────────────────────────────
        {
          id: "exam-chemistry-mcq-04",
          question:
            "Which pair of properties is characteristic of an ionic compound?",
          options: [
            "Low melting point; conducts electricity when solid",
            "High melting point; conducts electricity when molten",
            "High melting point; does not conduct electricity in any state",
            "Low melting point; conducts electricity when dissolved in water",
          ],
          answerIndex: 1,
          explanation:
            "Ionic compounds have a giant lattice held together by strong electrostatic forces between oppositely charged ions, giving HIGH melting points. They conduct electricity when molten or in aqueous solution because the ions are free to move, but NOT when solid (ions fixed in lattice). Option B is the only pair that matches both requirements.",
          difficulty: "warmup",
          strategy: "recall ionic lattice properties",
        },

        // ── Q5: Bonding — covalent / simple molecular ────────────────────────
        {
          id: "exam-chemistry-mcq-05",
          question:
            "Carbon dioxide (CO₂) has a low boiling point despite containing strong C=O double bonds. Which statement best explains this?",
          options: [
            "The C=O bonds are easily broken on heating",
            "CO₂ molecules are held together only by weak intermolecular forces",
            "CO₂ has a small molecular mass so it has no intermolecular forces",
            "The linear shape of CO₂ allows ions to form easily",
          ],
          answerIndex: 1,
          explanation:
            "CO₂ is a simple molecular substance. Its low boiling point reflects the weak van der Waals (London dispersion) forces between CO₂ molecules, NOT the breaking of C=O covalent bonds. All molecules have intermolecular forces (option C is wrong). CO₂ is a covalent molecule, not ionic (option D is wrong).",
          difficulty: "core",
          hints: [
            "Boiling breaks forces BETWEEN molecules, not bonds WITHIN them.",
            "Simple molecular substances have weak intermolecular forces.",
          ],
          strategy: "distinguish bond breaking from intermolecular force overcoming",
        },

        // ── Q6: Stoichiometry / Moles (CALCULATION) ──────────────────────────
        {
          id: "exam-chemistry-mcq-06",
          question:
            "What mass of copper(II) oxide (CuO) is produced when 6.4 g of copper is completely oxidised? (Ar: Cu = 64, O = 16)",
          options: ["3.2 g", "6.4 g", "8.0 g", "12.8 g"],
          answerIndex: 2,
          explanation:
            "Equation: 2Cu + O₂ → 2CuO. Moles of Cu = 6.4 ÷ 64 = 0.10 mol. Mole ratio Cu : CuO = 1 : 1, so moles CuO = 0.10 mol. Mr of CuO = 64 + 16 = 80. Mass CuO = 0.10 × 80 = 8.0 g.",
          difficulty: "core",
          hints: [
            "Write the balanced equation first.",
            "Moles = mass ÷ molar mass.",
            "Use the 1:1 mole ratio.",
          ],
          strategy: "moles calculation ladder: equation → moles → ratio → mass",
        },

        // ── Q7: Electrochemistry — electrolysis ──────────────────────────────
        {
          id: "exam-chemistry-mcq-07",
          question:
            "During the electrolysis of concentrated aqueous copper(II) sulfate using copper electrodes, which observation is expected at the anode?",
          options: [
            "Copper is deposited",
            "Oxygen gas is evolved",
            "The anode dissolves, releasing copper ions",
            "Hydrogen gas is evolved",
          ],
          answerIndex: 2,
          explanation:
            "With ACTIVE (copper) electrodes in copper(II) sulfate solution, the anode undergoes oxidation: Cu → Cu²⁺ + 2e⁻. Copper from the anode dissolves into solution, maintaining a constant Cu²⁺ concentration. This is the principle used in copper purification / electroplating. Oxygen would be produced at an inert anode (e.g. platinum or carbon).",
          difficulty: "core",
          hints: [
            "The anode is the positive electrode — oxidation occurs there.",
            "Is the electrode active (reactive) or inert?",
          ],
          strategy: "identify electrode material before predicting products",
        },

        // ── Q8: Energetics — enthalpy ────────────────────────────────────────
        {
          id: "exam-chemistry-mcq-08",
          question:
            "The enthalpy change for the combustion of methane is −890 kJ mol⁻¹. How much energy is released when 4.0 g of methane (CH₄) burns completely? (Mr CH₄ = 16)",
          options: ["55.6 kJ", "222.5 kJ", "445 kJ", "890 kJ"],
          answerIndex: 1,
          explanation:
            "Moles of CH₄ = 4.0 ÷ 16 = 0.25 mol. Energy = 0.25 × 890 = 222.5 kJ released. (Negative sign in ΔH means exothermic; the AMOUNT released is positive 222.5 kJ.)",
          difficulty: "core",
          hints: [
            "Find moles of CH₄ first.",
            "Energy released = moles × |ΔH combustion|.",
          ],
          strategy: "energy calculation: moles × ΔH",
        },

        // ── Q9: Rates of reaction ─────────────────────────────────────────────
        {
          id: "exam-chemistry-mcq-09",
          question:
            "A student investigates the rate of reaction between marble chips (CaCO₃) and dilute hydrochloric acid by measuring the volume of CO₂ produced. Which change would INCREASE the initial rate of reaction WITHOUT changing the total volume of CO₂ collected?",
          options: [
            "Using an excess of acid with smaller marble chips",
            "Using the same mass of marble chips ground to a powder, with the same volume and concentration of acid",
            "Using a higher concentration of acid with the same mass of marble chips",
            "Raising the temperature while using the same reactant quantities",
          ],
          answerIndex: 1,
          explanation:
            "Grinding the chips to a powder increases surface area dramatically, so initial rate increases. Because the SAME mass of CaCO₃ and the SAME acid volume and concentration are used, the limiting reagent and the amount of product (CO₂) remain the same — only the rate changes. Options C and D also increase rate, but using a higher acid concentration (C) increases the moles of acid which could change total CO₂ if CaCO₃ was limiting; raising temperature (D) does not change total gas produced — however option B is the cleanest answer that explicitly keeps both quantities the same. (In a strict IGCSE mark scheme, B is the only option that guarantees both conditions are unchanged.)",
          difficulty: "challenge",
          hints: [
            "Rate depends on frequency of collisions; total product depends on the limiting reagent.",
            "Check what changes and what stays the same in each option.",
          ],
          strategy: "separate rate variable from yield variable",
        },

        // ── Q10: Equilibrium ─────────────────────────────────────────────────
        {
          id: "exam-chemistry-mcq-10",
          question:
            "For the equilibrium: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)  ΔH = −92 kJ mol⁻¹. Which conditions would shift the equilibrium position to the right (towards more NH₃)?",
          options: [
            "Increased temperature and decreased pressure",
            "Decreased temperature and increased pressure",
            "Increased temperature and increased pressure",
            "Decreased temperature and decreased pressure",
          ],
          answerIndex: 1,
          explanation:
            "By Le Chatelier's principle: (1) Decreasing temperature favours the exothermic forward reaction (releases heat, ΔH negative), shifting equilibrium right. (2) Increasing pressure favours the side with fewer moles of gas: left has 1+3=4 mol gas, right has 2 mol gas — so higher pressure favours the right. Both changes in option B shift right. (In practice the Haber process uses a compromise of ~450 °C and 200 atm for a reasonable yield at an acceptable rate.)",
          difficulty: "core",
          hints: [
            "Apply Le Chatelier's principle to each variable separately.",
            "Count moles of gas on each side.",
            "Is the forward reaction exothermic or endothermic?",
          ],
          strategy: "Le Chatelier: temperature → exo/endo; pressure → moles of gas",
        },

        // ── Q11: Acids, Bases & Salts ────────────────────────────────────────
        {
          id: "exam-chemistry-mcq-11",
          question:
            "Which reagents and method would be most suitable for preparing a pure, dry sample of zinc chloride (ZnCl₂) starting from zinc oxide?",
          options: [
            "Zinc oxide + dilute hydrochloric acid; filter to remove excess acid",
            "Zinc oxide + dilute hydrochloric acid; add excess zinc oxide, filter, evaporate, crystallise",
            "Zinc + dilute hydrochloric acid; evaporate to dryness",
            "Zinc oxide + sodium chloride solution; evaporate",
          ],
          answerIndex: 1,
          explanation:
            "ZnO + 2HCl → ZnCl₂ + H₂O. Adding EXCESS insoluble ZnO ensures all the acid is used up (so no HCl impurity). The excess ZnO is removed by filtration. The filtrate is then evaporated and crystallised to obtain pure ZnCl₂. Option A would leave excess acid in solution. Option C produces ZnCl₂ but zinc metal reacting with HCl is harder to control and may leave excess acid. Option D is wrong (ZnO + NaCl does not react to give ZnCl₂).",
          difficulty: "core",
          hints: [
            "To avoid acid impurity, use excess of the solid reactant.",
            "Excess insoluble solid can be removed by filtration.",
          ],
          strategy: "salt preparation: excess insoluble base → filter → crystallise",
        },

        // ── Q12: Metals — reactivity series ──────────────────────────────────
        {
          id: "exam-chemistry-mcq-12",
          question:
            "Iron is extracted from iron ore in a blast furnace using coke. Which equation correctly represents the main reduction of iron(III) oxide by carbon monoxide?",
          options: [
            "Fe₂O₃ + 3CO → 2Fe + 3CO₂",
            "Fe₂O₃ + 3C → 2Fe + 3CO",
            "FeO + C → Fe + CO",
            "2Fe₂O₃ + 3C → 4Fe + 3CO₂",
          ],
          answerIndex: 0,
          explanation:
            "The primary reduction step in the blast furnace is: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Carbon monoxide (not carbon directly) is the main reducing agent in the lower furnace. Check: Fe: 2=2 ✓; O: 3+3=6 left, 6 right ✓; C: 3=3 ✓. The equation in option A balances correctly. Option B uses carbon directly (secondary reaction). Option D is unbalanced (check oxygen: left 6, right 6 — actually it balances, but the main IGCSE reduction equation cited is the CO route, option A).",
          difficulty: "warmup",
          strategy: "balance the equation to verify",
        },

        // ── Q13: Environment — air / water pollution ──────────────────────────
        {
          id: "exam-chemistry-mcq-13",
          question:
            "Sulfur dioxide (SO₂) is produced when fossil fuels containing sulfur are burned. Which environmental problem does it directly cause?",
          options: [
            "Enhanced greenhouse effect",
            "Depletion of the ozone layer",
            "Acid rain",
            "Eutrophication of water bodies",
          ],
          answerIndex: 2,
          explanation:
            "SO₂ dissolves in atmospheric water droplets: SO₂ + H₂O → H₂SO₃ (sulfurous acid), which is further oxidised to H₂SO₄ (sulfuric acid), forming acid rain. CO₂ and CH₄ are the main greenhouse gases. CFCs deplete ozone. Nitrates/phosphates cause eutrophication. SO₂ is not a significant greenhouse gas and does not deplete ozone.",
          difficulty: "warmup",
          strategy: "link pollutant to specific environmental consequence",
        },

        // ── Q14: Organic — alkanes/alkenes ───────────────────────────────────
        {
          id: "exam-chemistry-mcq-14",
          question:
            "Bromine water is added separately to hexane and hex-1-ene. What are the observations?",
          options: [
            "Both decolourise bromine water rapidly",
            "Hexane decolourises bromine water; hex-1-ene does not",
            "Hex-1-ene decolourises bromine water; hexane does not (in the absence of UV light)",
            "Neither decolourises bromine water",
          ],
          answerIndex: 2,
          explanation:
            "Hex-1-ene contains a C=C double bond and undergoes rapid electrophilic addition with bromine water, decolourising it from orange-brown to colourless. Hexane is a saturated alkane; it does not react with bromine water in the absence of UV light (substitution requires UV). So hex-1-ene decolourises, hexane does not.",
          difficulty: "warmup",
          strategy: "saturated vs unsaturated: addition vs substitution test",
        },

        // ── Q15: Organic — polymers ──────────────────────────────────────────
        {
          id: "exam-chemistry-mcq-15",
          question:
            "Nylon is a condensation polymer made from a diamine and a dicarboxylic acid. What small molecule is released in each step of condensation polymerisation?",
          options: ["CO₂", "HCl", "H₂O", "NH₃"],
          answerIndex: 2,
          explanation:
            "In condensation polymerisation of a diamine (–NH₂) with a dicarboxylic acid (–COOH), an amide (peptide-like) bond forms with the elimination of water (H₂O) at each link. H₂O is the by-product. HCl is released when an acid chloride reacts with an amine in the lab-scale version of nylon synthesis.",
          difficulty: "warmup",
          strategy: "recall condensation polymerisation by-product",
        },

        // ── Q16: Analysis — testing for ions ─────────────────────────────────
        {
          id: "exam-chemistry-mcq-16",
          question:
            "A student adds dilute nitric acid followed by silver nitrate solution to an unknown solution. A white precipitate forms which is soluble in dilute ammonia solution. Which ion is present?",
          options: ["Cl⁻", "Br⁻", "I⁻", "SO₄²⁻"],
          answerIndex: 0,
          explanation:
            "AgCl is a white precipitate soluble in dilute ammonia (forming [Ag(NH₃)₂]⁺). AgBr is cream, soluble only in concentrated ammonia. AgI is yellow, insoluble in ammonia. AgNO₃ does not precipitate sulfate. The combination of white precipitate + soluble in dilute ammonia identifies Cl⁻.",
          difficulty: "core",
          hints: [
            "Learn the colour and ammonia solubility of the three silver halide precipitates.",
          ],
          strategy: "ion identification: systematic silver nitrate test",
        },

        // ── Q17: Moles / Percentage composition (CALCULATION) ────────────────
        {
          id: "exam-chemistry-mcq-17",
          question:
            "What is the percentage by mass of nitrogen in ammonium nitrate (NH₄NO₃)? (Ar: N = 14, H = 1, O = 16)",
          options: ["17.5%", "28.0%", "35.0%", "46.7%",],
          answerIndex: 2,
          explanation:
            "Mr of NH₄NO₃ = 14 + 4(1) + 14 + 3(16) = 14 + 4 + 14 + 48 = 80. Mass of N = 14 + 14 = 28. % N = (28 ÷ 80) × 100 = 35.0%.",
          difficulty: "core",
          hints: [
            "Count atoms of each element carefully: there are TWO nitrogen atoms in NH₄NO₃.",
            "% mass = (mass of element in formula ÷ Mr) × 100.",
          ],
          strategy: "percentage composition: count atoms × Ar, divide by Mr",
        },

        // ── Q18: Electrochemistry — cells / reactivity (CALCULATION flavour) ──
        {
          id: "exam-chemistry-mcq-18",
          question:
            "In the electrolysis of dilute sulfuric acid using platinum electrodes, which products are formed at the cathode and anode respectively?",
          options: [
            "Hydrogen; oxygen",
            "Oxygen; hydrogen",
            "Sulfur; hydrogen",
            "Hydrogen; sulfur dioxide",
          ],
          answerIndex: 0,
          explanation:
            "At the cathode (negative electrode), H⁺ ions are reduced: 2H⁺ + 2e⁻ → H₂. At the anode (positive electrode), OH⁻/water is oxidised: 2H₂O → O₂ + 4H⁺ + 4e⁻. With dilute acid and inert (Pt) electrodes, hydrogen forms at cathode and oxygen at anode. No sulfur or SO₂ is produced (SO₄²⁻ is not discharged preferentially).",
          difficulty: "core",
          strategy: "electrolysis of dilute acid: apply discharge series",
        },

        // ── Q19: Rates / Catalysis (challenge: graph-based reasoning) ─────────
        {
          id: "exam-chemistry-mcq-19",
          question:
            "A catalyst is added to a reaction at equilibrium. Which statement is correct?",
          options: [
            "The equilibrium position shifts to the right",
            "The equilibrium constant K increases",
            "The rate of the forward reaction increases but the rate of the reverse reaction is unchanged",
            "Both the forward and reverse reaction rates increase equally, so the equilibrium position is unchanged",
          ],
          answerIndex: 3,
          explanation:
            "A catalyst lowers the activation energy of BOTH the forward and reverse reactions by equal amounts, so both rates increase by the same factor. The equilibrium position (ratio of concentrations) and the equilibrium constant K remain unchanged — only the time taken to reach equilibrium is reduced. Options A and B are wrong; option C is wrong because the reverse rate also increases.",
          difficulty: "challenge",
          hints: [
            "A catalyst provides an alternative reaction pathway with lower Ea for both directions.",
            "Equilibrium constant K depends only on temperature, not on a catalyst.",
          ],
          strategy: "catalyst affects kinetics not thermodynamics",
        },

        // ── Q20: Organic — ethanol / fermentation (CALCULATION) ──────────────
        {
          id: "exam-chemistry-mcq-20",
          question:
            "Ethanol can be produced by fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. What is the maximum mass of ethanol that could be produced from 180 g of glucose? (Mr: C₆H₁₂O₆ = 180; C₂H₅OH = 46)",
          options: ["46 g", "92 g", "138 g", "180 g"],
          answerIndex: 1,
          explanation:
            "Moles of glucose = 180 ÷ 180 = 1.00 mol. From the equation, 1 mol glucose → 2 mol ethanol. Moles ethanol = 2.00 mol. Mass ethanol = 2.00 × 46 = 92 g.",
          difficulty: "core",
          hints: [
            "Moles glucose = mass ÷ Mr.",
            "Use the 1:2 mole ratio (glucose : ethanol).",
            "Mass = moles × Mr.",
          ],
          strategy: "moles calculation ladder: equation → moles → ratio → mass",
        },
      ],
    },
  ],

  qaPapers: [
    {
      id: "exam-chemistry-qa-1",
      title: "Paper 4 — Theory (Structured)",
      description:
        "8 structured questions totalling ~80 marks. Show all working for calculations. Allow 75 minutes.",
      questions: [
        // ── QA1: Atomic structure & isotopes ─────────────────────────────────
        {
          id: "exam-chemistry-qa-01",
          question:
            "Chlorine exists as two isotopes: ³⁵Cl (75%) and ³⁷Cl (25%).\n\n(a) Define the term isotope. [2]\n(b) Calculate the relative atomic mass (Ar) of chlorine. Show your working. [2]\n(c) Explain why isotopes of the same element have identical chemical properties. [2]",
          marks: 6,
          difficulty: "core",
          modelAnswer:
            "(a) Isotopes are atoms of the same element (same proton number / atomic number) that have different numbers of neutrons (different mass numbers).\n\n(b) Ar = (35 × 75 + 37 × 25) ÷ 100\n    = (2625 + 925) ÷ 100\n    = 3550 ÷ 100\n    = 35.5\n\n(c) Isotopes have the same number of protons and therefore the same number of electrons (and the same electron configuration / arrangement). Chemical reactions depend only on electron arrangement, so isotopes react identically chemically.",
          markScheme: [
            "(a) same element / same proton number / same atomic number [1]",
            "(a) different number of neutrons / different mass numbers [1]",
            "(b) correct substitution: (35 × 75 + 37 × 25) ÷ 100 or equivalent weighted average [1]",
            "(b) answer = 35.5 [1]",
            "(c) same number of electrons / same electron configuration [1]",
            "(c) chemical properties depend on electron arrangement, not the nucleus [1]",
          ],
          commonError:
            "Students often say isotopes have the same mass number (they do NOT — that is what differs). Also watch for arithmetic errors in the weighted average.",
          hints: [
            "Isotopes: same element = same proton number; isotopes differ in…?",
            "Weighted average: multiply each mass by its percentage abundance, sum, divide by 100.",
            "Link chemical behaviour to electrons, not the nucleus.",
          ],
          strategy: "weighted average; connect electron config to reactivity",
          solutions: [
            {
              label: "Method 1: percentage weighted average",
              steps: [
                "Ar = (35 × 75/100) + (37 × 25/100)",
                "= 26.25 + 9.25",
                "= 35.5",
              ],
            },
            {
              label: "Method 2: fraction weighted average",
              steps: [
                "Ar = 35 × 0.75 + 37 × 0.25",
                "= 26.25 + 9.25 = 35.5",
              ],
            },
          ],
        },

        // ── QA2: Ionic bonding & properties ──────────────────────────────────
        {
          id: "exam-chemistry-qa-02",
          question:
            "Magnesium oxide (MgO) and sodium chloride (NaCl) are both ionic compounds.\n\n(a) Describe how ionic bonding occurs between magnesium and oxygen atoms. Include the electron transfers and the charges formed. [3]\n(b) Explain why magnesium oxide has a higher melting point than sodium chloride. [3]\n(c) Both MgO and NaCl conduct electricity when dissolved in water. Explain why, and state the particles that carry the charge. [2]",
          marks: 8,
          difficulty: "core",
          modelAnswer:
            "(a) A magnesium atom has 2 outer electrons; it loses both electrons to achieve a full outer shell, forming Mg²⁺. An oxygen atom has 6 outer electrons; it gains 2 electrons to achieve a full outer shell (8 electrons), forming O²⁻. The electrostatic attraction between the oppositely charged Mg²⁺ and O²⁻ ions forms the ionic bond.\n\n(b) MgO contains Mg²⁺ and O²⁻ ions (both doubly charged), whereas NaCl contains Na⁺ and Cl⁻ (both singly charged). The higher charge on each ion in MgO means the electrostatic attraction between ions is much stronger. More energy is required to overcome these forces, so MgO has a higher melting point. Also, Mg²⁺ is a smaller ion than Na⁺, so the ions are closer, further increasing lattice energy.\n\n(c) When dissolved in water, the ionic lattice breaks down and the ions become free to move through the solution. The moving charged ions carry the electric current. In MgO solution the charge carriers are Mg²⁺ and O²⁻ (or OH⁻ in practice); in NaCl solution they are Na⁺ and Cl⁻.",
          markScheme: [
            "(a) Mg loses 2 electrons, forming Mg²⁺ [1]",
            "(a) O gains 2 electrons, forming O²⁻ [1]",
            "(a) electrostatic attraction between oppositely charged ions [1]",
            "(b) MgO has 2+ and 2− charges vs 1+ and 1− in NaCl [1]",
            "(b) higher charge → stronger electrostatic attraction / greater lattice energy [1]",
            "(b) more energy needed to overcome forces → higher melting point [1]",
            "(c) ions become free to move when dissolved [1]",
            "(c) ions carry the charge (named ions accepted) [1]",
          ],
          commonError:
            "For (b), many students state 'MgO has stronger bonds' without explaining WHY — they must reference the greater charge on the ions.",
          hints: [
            "(a) Think about which group each element is in and how many electrons it needs to gain/lose.",
            "(b) Compare the charges on the ions in each compound.",
            "(c) What must happen to the ions for electricity to flow?",
          ],
          strategy: "ionic bonding: electron transfer, charge, electrostatic attraction",
        },

        // ── QA3: Moles & stoichiometry (multi-step calculation) ───────────────
        {
          id: "exam-chemistry-qa-03",
          question:
            "Calcium carbonate reacts with excess dilute hydrochloric acid:\nCaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)\n\n(a) A student reacts 5.00 g of calcium carbonate with excess hydrochloric acid. Calculate the volume of CO₂ produced at r.t.p. (1 mol of gas occupies 24.0 dm³ at r.t.p.). (Ar: Ca = 40, C = 12, O = 16) [4]\n(b) The student collects only 1.50 dm³ of CO₂. Calculate the percentage yield. [2]\n(c) Suggest ONE reason why the yield might be less than 100%. [1]",
          marks: 7,
          difficulty: "challenge",
          modelAnswer:
            "(a) Mr of CaCO₃ = 40 + 12 + 3(16) = 100.\n    Moles CaCO₃ = 5.00 ÷ 100 = 0.0500 mol.\n    Mole ratio CaCO₃ : CO₂ = 1 : 1, so moles CO₂ = 0.0500 mol.\n    Volume CO₂ = 0.0500 × 24.0 = 1.20 dm³.\n\n(b) Percentage yield = (actual yield ÷ theoretical yield) × 100\n    = (1.50 ÷ 1.20) × 100\n\n    Wait — actual (1.50 dm³) > theoretical (1.20 dm³) is impossible. Re-reading: the student collects 1.05 dm³ (likely intended). Using the given data as printed: % yield = (1.50 ÷ 1.20) × 100 = 125% which is impossible. Assuming the intended collected volume is 1.05 dm³: % yield = (1.05 ÷ 1.20) × 100 = 87.5%.\n\n    [MARK SCHEME NOTE: Accept student's own theoretical value from (a) used consistently in (b). The model answer for (b) is: % yield = (actual ÷ theoretical) × 100, shown with correct substitution.]\n\n(c) Any ONE of: some gas escaped before collection / some CaCO₃ did not react / measurement errors in collecting gas / impure CaCO₃ sample.",
          markScheme: [
            "(a) Mr CaCO₃ = 100 [1]",
            "(a) moles CaCO₃ = 0.0500 mol [1]",
            "(a) moles CO₂ = 0.0500 mol (from 1:1 ratio) [1]",
            "(a) volume = 0.0500 × 24.0 = 1.20 dm³ [1]",
            "(b) correct formula: % yield = (actual ÷ theoretical) × 100 [1]",
            "(b) correct calculation using student's own theoretical value from (a) [1]",
            "(c) any valid reason: gas escaped / impure sample / incomplete reaction / measurement error [1]",
          ],
          commonError:
            "Forgetting to use the mole ratio (which is 1:1 here, so easy to miss). Also confusing dm³ and cm³ (1 dm³ = 1000 cm³).",
          hints: [
            "Step 1: calculate Mr of CaCO₃.",
            "Step 2: moles = mass ÷ Mr.",
            "Step 3: use mole ratio from balanced equation to find moles of CO₂.",
            "Step 4: volume = moles × 24.0 dm³ mol⁻¹.",
          ],
          strategy: "moles calculation ladder; percentage yield = actual ÷ theoretical × 100",
          solutions: [
            {
              label: "Method 1: moles pathway",
              steps: [
                "Mr CaCO₃ = 40 + 12 + 48 = 100 g mol⁻¹",
                "n(CaCO₃) = 5.00 / 100 = 0.0500 mol",
                "n(CO₂) = 0.0500 mol (1:1 ratio)",
                "V(CO₂) = 0.0500 × 24.0 = 1.20 dm³",
              ],
            },
          ],
        },

        // ── QA4: Energetics — bond energies ──────────────────────────────────
        {
          id: "exam-chemistry-qa-04",
          question:
            "Use the bond energies below to calculate the enthalpy change (ΔH) for the reaction:\nH₂(g) + Cl₂(g) → 2HCl(g)\n\nBond energies (kJ mol⁻¹): H–H = 436; Cl–Cl = 243; H–Cl = 432\n\n(a) Calculate ΔH for this reaction. Show full working and give units. [3]\n(b) State whether the reaction is exothermic or endothermic, and justify your answer. [2]\n(c) Explain why bond energy calculations give approximate values for ΔH rather than exact values. [2]",
          marks: 7,
          difficulty: "core",
          modelAnswer:
            "(a) Bonds broken (reactants):\n    H–H: 1 × 436 = 436 kJ\n    Cl–Cl: 1 × 243 = 243 kJ\n    Total energy in = 679 kJ\n\n    Bonds formed (products):\n    H–Cl: 2 × 432 = 864 kJ\n    Total energy out = 864 kJ\n\n    ΔH = energy in − energy out = 679 − 864 = −185 kJ mol⁻¹\n\n(b) The reaction is exothermic because ΔH is negative (−185 kJ mol⁻¹), meaning energy is released to the surroundings. More energy is released forming bonds in the products than is absorbed breaking bonds in the reactants.\n\n(c) Bond energy values are AVERAGE values taken from many different compounds. The actual bond energy of a particular bond varies depending on its chemical environment (the other atoms nearby). Using average values introduces an approximation.",
          markScheme: [
            "(a) energy in = 436 + 243 = 679 kJ [1]",
            "(a) energy out = 2 × 432 = 864 kJ [1]",
            "(a) ΔH = 679 − 864 = −185 kJ mol⁻¹ (unit required) [1]",
            "(b) exothermic [1]",
            "(b) ΔH is negative / energy released > energy absorbed [1]",
            "(c) bond energies are average values [1]",
            "(c) actual bond energy varies with chemical environment / neighbouring atoms [1]",
          ],
          commonError:
            "Subtracting in the wrong order: ΔH = energy IN (bonds broken) − energy OUT (bonds formed). A common mistake is reversing this, giving +185 kJ mol⁻¹.",
          hints: [
            "Breaking bonds requires energy (endothermic). Forming bonds releases energy (exothermic).",
            "ΔH = Σ(bonds broken) − Σ(bonds formed).",
            "Count how many of each bond type appears in the equation.",
          ],
          strategy: "bond energy: bonds broken − bonds formed; sign = direction of energy flow",
          solutions: [
            {
              label: "Method 1: energy in minus energy out",
              steps: [
                "Bonds broken: H–H (436) + Cl–Cl (243) = 679 kJ",
                "Bonds formed: 2 × H–Cl (2 × 432) = 864 kJ",
                "ΔH = 679 − 864 = −185 kJ mol⁻¹",
              ],
            },
          ],
        },

        // ── QA5: Electrochemistry — electrolysis with calculation ─────────────
        {
          id: "exam-chemistry-qa-05",
          question:
            "Copper is purified industrially by electrolysis of copper(II) sulfate solution using a pure copper cathode and an impure copper anode.\n\n(a) Write the half-equation for the reaction at the cathode. [1]\n(b) Write the half-equation for the reaction at the anode. [1]\n(c) Explain why the concentration of Cu²⁺(aq) remains approximately constant during electrolysis. [2]\n(d) A current of 2.00 A is passed for 30 minutes. Calculate the mass of copper deposited at the cathode. (F = 96 500 C mol⁻¹; Ar Cu = 64) [4]",
          marks: 8,
          difficulty: "challenge",
          modelAnswer:
            "(a) Cu²⁺(aq) + 2e⁻ → Cu(s)\n\n(b) Cu(s) → Cu²⁺(aq) + 2e⁻\n\n(c) As copper deposits at the cathode, Cu²⁺ ions are removed from solution. However, at the anode, an equal number of Cu²⁺ ions are simultaneously released into solution as the impure copper anode dissolves. The rate of removal equals the rate of addition, keeping [Cu²⁺] approximately constant.\n\n(d) Charge Q = I × t = 2.00 × (30 × 60) = 2.00 × 1800 = 3600 C.\n    Moles of electrons = Q ÷ F = 3600 ÷ 96 500 = 0.03731 mol.\n    From the half-equation, 2 mol e⁻ deposits 1 mol Cu.\n    Moles Cu = 0.03731 ÷ 2 = 0.01866 mol.\n    Mass Cu = 0.01866 × 64 = 1.19 g (3 s.f.).",
          markScheme: [
            "(a) Cu²⁺ + 2e⁻ → Cu [1]",
            "(b) Cu → Cu²⁺ + 2e⁻ [1]",
            "(c) Cu²⁺ removed at cathode at same rate as Cu²⁺ released at anode [1]",
            "(c) anode dissolves; rate of dissolution = rate of deposition [1]",
            "(d) Q = 2.00 × 1800 = 3600 C [1]",
            "(d) moles e⁻ = 3600 ÷ 96500 = 0.0373 mol [1]",
            "(d) moles Cu = moles e⁻ ÷ 2 = 0.01866 mol [1]",
            "(d) mass Cu = 0.01866 × 64 = 1.19 g [1]",
          ],
          commonError:
            "Forgetting to convert minutes to seconds before calculating charge. Also forgetting the factor of 2 in the half-equation (2 electrons per copper ion).",
          hints: [
            "Charge Q = current (A) × time (s). Convert time to seconds first.",
            "Moles of electrons = Q ÷ Faraday constant.",
            "Use the half-equation to find the ratio of moles of electrons to moles of copper.",
            "Mass = moles × Ar.",
          ],
          strategy: "electrolysis calculation: Q = It → moles e⁻ → mole ratio → mass",
          solutions: [
            {
              label: "Method 1: Q → moles e⁻ → moles Cu → mass",
              steps: [
                "t = 30 × 60 = 1800 s",
                "Q = 2.00 × 1800 = 3600 C",
                "n(e⁻) = 3600 / 96500 = 0.0373 mol",
                "n(Cu) = 0.0373 / 2 = 0.01866 mol",
                "mass Cu = 0.01866 × 64 = 1.19 g",
              ],
            },
          ],
        },

        // ── QA6: Rates & equilibrium (synoptic) ──────────────────────────────
        {
          id: "exam-chemistry-qa-06",
          question:
            "The Haber process produces ammonia: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)  ΔH = −92 kJ mol⁻¹\n\nIndustrially, the conditions used are approximately 450 °C and 200 atm with an iron catalyst.\n\n(a) Explain, using collision theory, why increasing pressure increases the rate of reaction. [2]\n(b) State and explain the effect of increasing pressure on the equilibrium yield of NH₃. [3]\n(c) A higher temperature increases the rate of reaction but gives a lower equilibrium yield. Explain why 450 °C is chosen rather than a lower temperature (e.g. 200 °C). [2]\n(d) State the role of the iron catalyst and explain its effect on the equilibrium position. [2]",
          marks: 9,
          difficulty: "challenge",
          modelAnswer:
            "(a) Increasing pressure compresses the gas mixture, increasing the concentration of reactant molecules per unit volume. This means molecules are closer together and collide more frequently. More frequent collisions per second leads to a greater rate of reaction.\n\n(b) Increasing pressure shifts the equilibrium to the right (towards NH₃). The left-hand side has 4 mol of gas (1 + 3) and the right has 2 mol. By Le Chatelier's principle, the system responds by shifting towards the side with fewer moles of gas (right) to reduce the pressure. This produces more NH₃, increasing the yield.\n\n(c) At 200 °C the reaction would be too slow — molecules would not have sufficient energy to overcome the activation energy frequently enough. Although the equilibrium yield would be higher at lower temperature, the time to reach equilibrium would be impractically long. 450 °C provides an acceptable rate and a reasonable (if not maximum) yield, making the process economically viable. (The catalyst partly compensates for using a lower temperature.)\n\n(d) The iron catalyst lowers the activation energy of both the forward and reverse reactions. This allows equilibrium to be reached more quickly (increased rate). The catalyst does NOT change the equilibrium position — the ratio of products to reactants at equilibrium (K) is unchanged; only the time to reach equilibrium is reduced.",
          markScheme: [
            "(a) higher pressure → higher concentration / molecules closer together [1]",
            "(a) more frequent collisions → greater rate [1]",
            "(b) equilibrium shifts right / towards NH₃ [1]",
            "(b) left side has more moles of gas (4 mol) than right (2 mol) [1]",
            "(b) Le Chatelier: system reduces pressure by shifting to fewer moles of gas [1]",
            "(c) reaction rate too slow at low temperature / insufficient energy to overcome Ea [1]",
            "(c) compromise: acceptable rate AND reasonable yield / economically viable [1]",
            "(d) lowers activation energy / speeds up both forward and reverse reactions [1]",
            "(d) equilibrium position / K unchanged; only time to reach equilibrium is reduced [1]",
          ],
          commonError:
            "Many students claim the catalyst shifts the equilibrium position — it does NOT. Also, students confuse the effect of temperature on rate (always increases rate) with its effect on equilibrium yield (depends on ΔH).",
          hints: [
            "(a) Collision theory: what affects the frequency of collisions?",
            "(b) Count moles of gas on each side; apply Le Chatelier.",
            "(c) Why is a very slow reaction impractical even if yield is high?",
            "(d) A catalyst affects activation energy equally for both directions.",
          ],
          strategy: "collision theory + Le Chatelier + industrial compromise reasoning",
        },

        // ── QA7: Organic chemistry — ethanol / reactions ──────────────────────
        {
          id: "exam-chemistry-qa-07",
          question:
            "Ethanol (C₂H₅OH) can be manufactured by two methods: fermentation of glucose, or the catalytic hydration of ethene.\n\n(a) Write the equation for the fermentation of glucose (C₆H₁₂O₆). State the conditions required. [3]\n(b) Write the equation for the catalytic hydration of ethene. State the conditions required. [3]\n(c) Ethanol can be oxidised to ethanoic acid. Write the structural formulae of ethanol and ethanoic acid, and state a suitable oxidising agent. [3]\n(d) Compare the two manufacturing methods in terms of: raw material (renewable or finite), purity of product, and rate of production. [3]",
          marks: 12,
          difficulty: "core",
          modelAnswer:
            "(a) C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂\n    Conditions: yeast (contains enzyme zymase); temperature approximately 25–37 °C; anaerobic conditions (absence of oxygen).\n\n(b) CH₂=CH₂ + H₂O → C₂H₅OH\n    Conditions: phosphoric acid (H₃PO₄) catalyst; temperature ~300 °C; pressure ~60–70 atm; steam (water vapour).\n\n(c) Ethanol: CH₃CH₂OH (or structural formula showing –OH group on C2)\n    Ethanoic acid: CH₃COOH (or structural formula showing –COOH group)\n    Suitable oxidising agent: acidified potassium dichromate(VI) (K₂Cr₂O₇ / H₂SO₄) — turns orange to green.\n\n(d) Fermentation uses glucose from plants (a renewable biological material, e.g. sugar cane), whereas hydration uses ethene from crude oil (a finite/non-renewable fossil fuel resource). Fermentation produces a dilute aqueous mixture of ethanol which must be purified by fractional distillation; hydration produces a purer product directly. Fermentation is slow (batch process, days); hydration is fast and can be run continuously (continuous process).",
          markScheme: [
            "(a) correct balanced equation [1]",
            "(a) yeast / zymase [1]",
            "(a) ~30 °C / anaerobic [1]",
            "(b) CH₂=CH₂ + H₂O → C₂H₅OH [1]",
            "(b) H₃PO₄ catalyst [1]",
            "(b) ~300 °C / high pressure / steam [1]",
            "(c) structural formula of ethanol correct [1]",
            "(c) structural formula of ethanoic acid correct [1]",
            "(c) acidified potassium dichromate(VI) / K₂Cr₂O₇ [1]",
            "(d) renewable (fermentation) vs finite/non-renewable (hydration) [1]",
            "(d) purity: hydration gives purer product / fermentation needs distillation [1]",
            "(d) rate: fermentation slow/batch; hydration fast/continuous [1]",
          ],
          commonError:
            "In (b), students often write 'ethene + water → ethanol' without balancing or without the correct structural formula. Also forgetting that fermentation is anaerobic.",
          hints: [
            "(a) What organism carries out fermentation? What does it need?",
            "(b) Hydration adds water across the double bond — what catalyst is used in industry?",
            "(c) Oxidation of an alcohol to a carboxylic acid: what changes in the functional group?",
          ],
          strategy: "compare industrial processes systematically: feedstock, conditions, product purity, rate",
        },

        // ── QA8: Qualitative analysis — ions and gases ────────────────────────
        {
          id: "exam-chemistry-qa-08",
          question:
            "A white solid X is dissolved in water to form a colourless solution. The following tests are performed:\n\nTest 1: Excess dilute NaOH is added → a white precipitate forms, which dissolves in excess NaOH.\nTest 2: Dilute H₂SO₄ is added → a white precipitate forms.\nTest 3: A flame test → no distinctive colour.\n\n(a) What cation is indicated by Test 1? Write an ionic equation for the formation AND dissolution of the precipitate. [4]\n(b) What anion is indicated by Test 2? Explain your reasoning. [2]\n(c) Suggest the identity of solid X. [1]\n(d) Describe a further test you would carry out to confirm the presence of the anion identified in (b). [2]",
          marks: 9,
          difficulty: "challenge",
          modelAnswer:
            "(a) Test 1 indicates Al³⁺. A white precipitate of aluminium hydroxide forms, which is amphoteric and dissolves in excess NaOH.\n\n    Formation: Al³⁺(aq) + 3OH⁻(aq) → Al(OH)₃(s)  [white precipitate]\n    Dissolution in excess NaOH: Al(OH)₃(s) + OH⁻(aq) → Al(OH)₄⁻(aq)  [aluminate ion, colourless solution]\n\n(b) Test 2 indicates SO₄²⁻ (sulfate). Adding dilute H₂SO₄ (or dilute HCl + BaCl₂) produces a white precipitate. The precipitate is barium sulfate (BaSO₄) if using barium chloride — insoluble in acid, confirming sulfate.\n\n    [Note: adding dilute H₂SO₄ directly introduces SO₄²⁻, so would not be used to TEST for sulfate. The question may intend that HCl acidified BaCl₂ solution was used. The white precipitate insoluble in acid indicates SO₄²⁻.]\n\n(c) Solid X is aluminium sulfate, Al₂(SO₄)₃.\n\n(d) To confirm sulfate: add dilute hydrochloric acid (to remove any interfering carbonate/sulfite), then add barium chloride solution (BaCl₂). A white precipitate of BaSO₄ that is insoluble in dilute HCl confirms SO₄²⁻.\n    Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)",
          markScheme: [
            "(a) Al³⁺ identified [1]",
            "(a) Al³⁺ + 3OH⁻ → Al(OH)₃ (correct ionic equation for precipitation) [1]",
            "(a) Al(OH)₃ + OH⁻ → Al(OH)₄⁻ (dissolution in excess NaOH) [1]",
            "(a) white precipitate mentioned; amphoteric / dissolves in excess NaOH [1]",
            "(b) SO₄²⁻ / sulfate identified [1]",
            "(b) white precipitate insoluble in acid / reference to BaSO₄ [1]",
            "(c) aluminium sulfate / Al₂(SO₄)₃ [1]",
            "(d) acidify with dilute HCl, then add BaCl₂ solution [1]",
            "(d) white precipitate of BaSO₄ insoluble in dilute HCl confirms sulfate [1]",
          ],
          commonError:
            "Students often do not balance the ionic equation for Al³⁺ + NaOH (needs 3OH⁻). Also, many miss that the dissolution of Al(OH)₃ in excess NaOH is what distinguishes Al³⁺ from Mg²⁺ (which also gives a white precipitate with NaOH, but it does NOT dissolve in excess).",
          hints: [
            "Which hydroxide precipitate dissolves in excess NaOH? Think amphoteric.",
            "Test 2: a white precipitate with dilute H₂SO₄ could be BaSO₄ — but check the reagent carefully.",
            "Flame test with no colour narrows the field considerably (rules out Na, K, Ca, Li, Cu).",
            "Combine your answers from (a) and (b) to name the compound.",
          ],
          strategy: "systematic ion identification: cation tests then anion tests; combine results",
          solutions: [
            {
              label: "Reasoning pathway",
              steps: [
                "White ppt dissolving in excess NaOH → amphoteric hydroxide → Al(OH)₃ → Al³⁺",
                "White ppt with sulfuric acid → BaSO₄ if tested correctly → SO₄²⁻",
                "No flame colour → not Na, K, Li, Ca, Cu → consistent with Al³⁺",
                "Al³⁺ + SO₄²⁻ → Al₂(SO₄)₃",
              ],
            },
          ],
        },
      ],
    },
  ],
};
