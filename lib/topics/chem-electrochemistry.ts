import type { Topic } from "../types";

export const chemElectrochemistry: Topic = {
  id: "chem-electrochemistry",
  title: "Electrochemistry",
  subject: "chemistry",
  icon: "🔌",
  blurb: "Electrolysis, electrode reactions, electroplating, and fuel cells.",
  intro:
    "Electrolysis is the decomposition of an ionic compound — molten or dissolved in water — by passing a direct electric current through it. Understanding which ions move where, and what is discharged at each electrode, is one of the most predictive and satisfying skills in IGCSE chemistry. This guide builds from first principles: ions, movement, half-equations, and real-world applications including electroplating and the hydrogen–oxygen fuel cell.",

  guide: [
    {
      heading: "What is Electrolysis?",
      body:
        "Electrolysis uses a **direct current (d.c.)** supply to decompose an ionic compound. The compound, called the **electrolyte**, must be in a state where its ions are free to move — either **molten** (ions freed by melting) or **dissolved in water (aqueous)**.\n\n" +
        "The electric circuit is completed by two conducting rods or plates called **electrodes** dipped into the electrolyte:\n\n" +
        "- The **anode** is connected to the positive terminal of the supply. It is positively charged.\n" +
        "- The **cathode** is connected to the negative terminal. It is negatively charged.\n\n" +
        "Because opposite charges attract:\n\n" +
        "- **Cations** (positive ions) are attracted to the negatively charged **cathode**.\n" +
        "- **Anions** (negative ions) are attracted to the positively charged **anode**.\n\n" +
        "When ions reach an electrode they **gain or lose electrons** — this is called **discharge**. At the cathode, cations gain electrons (**reduction**). At the anode, anions lose electrons (**oxidation**).\n\n" +
        "A useful memory aid: **OIL RIG** — Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons). The anode always oxidises; the cathode always reduces.",
      diagrams: [
        {
          caption: "Electrolysis cell — ion movement and electrode labels",
          svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of an electrolysis cell showing anode, cathode, electrolyte, and ion movement">' +
            '<rect width="320" height="200" fill="#0f172a"/>' +
            // Battery symbol
            '<line x1="60" y1="30" x2="260" y2="30" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>' +
            '<rect x="108" y="18" width="10" height="24" rx="1" fill="#38bdf8"/>' +
            '<rect x="124" y="22" width="6" height="16" rx="1" fill="#94a3b8"/>' +
            '<text x="90" y="15" font-size="9" fill="#94a3b8" font-family="sans-serif">d.c. supply</text>' +
            '<text x="100" y="47" font-size="9" fill="#38bdf8" font-family="sans-serif">+</text>' +
            '<text x="127" y="47" font-size="9" fill="#fb7185" font-family="sans-serif">-</text>' +
            // Electrode leads
            '<line x1="80" y1="30" x2="80" y2="72" stroke="#94a3b8" stroke-width="2"/>' +
            '<line x1="240" y1="30" x2="240" y2="72" stroke="#94a3b8" stroke-width="2"/>' +
            // Beaker
            '<rect x="40" y="70" width="240" height="110" rx="6" fill="none" stroke="#38bdf8" stroke-width="2"/>' +
            '<rect x="50" y="80" width="220" height="90" rx="4" fill="#1e3a5f" opacity="0.7"/>' +
            // Anode (left, +)
            '<rect x="70" y="72" width="20" height="85" rx="3" fill="#fbbf24"/>' +
            '<text x="78" y="68" font-size="10" fill="#fbbf24" font-family="sans-serif" text-anchor="middle">+</text>' +
            '<text x="80" y="175" font-size="9" fill="#fbbf24" font-family="sans-serif" text-anchor="middle">Anode</text>' +
            // Cathode (right, -)
            '<rect x="230" y="72" width="20" height="85" rx="3" fill="#34d399"/>' +
            '<text x="240" y="68" font-size="10" fill="#34d399" font-family="sans-serif" text-anchor="middle">-</text>' +
            '<text x="240" y="175" font-size="9" fill="#34d399" font-family="sans-serif" text-anchor="middle">Cathode</text>' +
            // Ion arrows
            '<text x="130" y="115" font-size="22" fill="#fb7185" font-family="sans-serif" opacity="0.8">+</text>' +
            '<text x="175" y="100" font-size="22" fill="#a78bfa" font-family="sans-serif" opacity="0.8">-</text>' +
            // Cation arrow left
            '<line x1="148" y1="112" x2="100" y2="112" stroke="#fb7185" stroke-width="1.5" marker-end="url(#arr1)"/>' +
            // Anion arrow right
            '<line x1="185" y1="100" x2="225" y2="100" stroke="#a78bfa" stroke-width="1.5" marker-end="url(#arr2)"/>' +
            '<defs>' +
            '<marker id="arr1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">' +
            '<path d="M0,0 L6,3 L0,6 Z" fill="#fb7185"/>' +
            '</marker>' +
            '<marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">' +
            '<path d="M0,0 L6,3 L0,6 Z" fill="#a78bfa"/>' +
            '</marker>' +
            '</defs>' +
            '<text x="125" y="130" font-size="8" fill="#fb7185" font-family="sans-serif">cations</text>' +
            '<text x="165" y="88" font-size="8" fill="#a78bfa" font-family="sans-serif">anions</text>' +
            '<text x="160" y="192" font-size="9" fill="#b7bce0" font-family="sans-serif" text-anchor="middle">Electrolyte (ionic compound, molten or aqueous)</text>' +
            '</svg>',
        },
      ],
      keyPoints: [
        "The electrolyte must be molten or dissolved in water so ions can move freely.",
        "Cations (positive ions) move to the cathode (negative electrode).",
        "Anions (negative ions) move to the anode (positive electrode).",
        "Discharge at the cathode is reduction (ions gain electrons); at the anode is oxidation (ions lose electrons).",
        "OIL RIG: Oxidation Is Loss, Reduction Is Gain.",
      ],
      discovery: {
        problem:
          "A student sets up two carbon rods in molten lead(II) bromide and connects them to a d.c. supply. Before switching on, predict: which electrode will the Pb2+ ions move towards, and what will happen when they get there?",
        idea:
          "Pb2+ ions are cations — they move to the cathode (negative electrode). At the cathode they each gain 2 electrons and are reduced to lead metal: Pb2+ + 2e- → Pb. The cathode becomes coated with silvery molten lead.",
      },
      whyItWorks:
        "The cathode carries excess electrons (supplied by the d.c. source). A Pb2+ ion approaching the cathode is electrostatically attracted, makes contact, and accepts 2 electrons from the electrode surface. This neutralises the ion and converts it into an uncharged lead atom. The net effect is that electrons flow from the supply into the cathode, are transferred to Pb2+ ions, and the circuit is completed by Br- ions travelling to the anode.",
      strategies: ["Identify charges of ions first", "Apply OIL RIG to each electrode"],
    },

    {
      heading: "Electrolysis of Molten Compounds",
      body:
        "When an ionic compound is **melted**, only the ions of that compound are present. The prediction of electrode products is straightforward: the cation is discharged at the cathode and the anion at the anode.\n\n" +
        "**Worked example — molten lead(II) bromide (PbBr₂):**\n\n" +
        "- Ions present: Pb2+ and Br-\n" +
        "- At the **cathode**: Pb2+ + 2e- → Pb (lead metal deposited)\n" +
        "- At the **anode**: 2Br- → Br₂ + 2e- (bromine gas evolved)\n\n" +
        "**Worked example — molten aluminium oxide (Al₂O₃)** (industrial extraction):\n\n" +
        "- Ions: Al3+ and O2-\n" +
        "- Cathode: Al3+ + 3e- → Al (liquid aluminium)\n" +
        "- Anode: 2O2- → O₂ + 4e- (oxygen gas)\n\n" +
        "**Industrial extraction of aluminium (a full IGCSE case study):**\n\n" +
        "- Aluminium is too reactive to be extracted by reduction with carbon, so **electrolysis** must be used.\n" +
        "- The ore is purified to **aluminium oxide (Al₂O₃)**, which has a very high melting point (~2050 °C). Melting it on its own would use far too much energy.\n" +
        "- Instead the Al₂O₃ is **dissolved in molten cryolite (Na₃AlF₆)**. This lowers the operating temperature to about 950 °C and produces a conducting liquid, saving energy and money.\n" +
        "- Both electrodes are made of **carbon (graphite)**. The cell is lined with carbon, which acts as the cathode; carbon blocks dipped in from above are the anodes.\n" +
        "- **Cathode:** Al3+ + 3e- → Al. Molten aluminium forms and sinks to the bottom of the cell, where it is tapped off.\n" +
        "- **Anode:** 2O2- → O₂ + 4e-. Oxygen gas is released.\n\n" +
        "**Why the anodes must be replaced regularly:** at the high operating temperature the oxygen produced reacts with the hot carbon anodes, burning them away as carbon dioxide: **C + O₂ → CO₂**. The anodes gradually get smaller and must be replaced periodically — a major running cost. (The CO₂ released is also an environmental drawback of the process.)\n\n" +
        "**Inert vs active electrodes:** Carbon (graphite) electrodes are normally **inert** — they do not react with the electrolyte or products. In aluminium extraction they behave as inert electrodes for the electrolysis itself, but the very hot oxygen still attacks them, which is why they are slowly consumed.",
      diagrams: [
        {
          caption: "Electrolysis of molten lead(II) bromide",
          svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Electrolysis of molten lead(II) bromide showing Pb deposited at cathode and Br2 at anode">' +
            '<rect width="320" height="200" fill="#0f172a"/>' +
            // Supply line
            '<line x1="60" y1="25" x2="260" y2="25" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>' +
            '<text x="130" y="18" font-size="9" fill="#94a3b8" font-family="sans-serif">d.c. supply</text>' +
            '<line x1="80" y1="25" x2="80" y2="65" stroke="#94a3b8" stroke-width="2"/>' +
            '<line x1="240" y1="25" x2="240" y2="65" stroke="#94a3b8" stroke-width="2"/>' +
            // Beaker
            '<rect x="40" y="62" width="240" height="118" rx="6" fill="none" stroke="#fbbf24" stroke-width="2"/>' +
            '<rect x="50" y="72" width="220" height="98" rx="3" fill="#1c2a3a" opacity="0.9"/>' +
            '<text x="160" y="185" font-size="8" fill="#fbbf24" font-family="sans-serif" text-anchor="middle">Molten PbBr2 (~400 C)</text>' +
            // Carbon anode (left +)
            '<rect x="70" y="64" width="18" height="80" rx="2" fill="#475569"/>' +
            '<text x="79" y="58" font-size="10" fill="#38bdf8" font-family="sans-serif" text-anchor="middle">+</text>' +
            '<text x="79" y="156" font-size="8" fill="#38bdf8" font-family="sans-serif" text-anchor="middle">Anode</text>' +
            '<text x="79" y="164" font-size="7" fill="#94a3b8" font-family="sans-serif" text-anchor="middle">(carbon)</text>' +
            // Br2 bubble at anode
            '<circle cx="68" cy="70" r="5" fill="none" stroke="#fb7185" stroke-width="1.2"/>' +
            '<circle cx="78" cy="62" r="4" fill="none" stroke="#fb7185" stroke-width="1.2"/>' +
            '<text x="50" y="58" font-size="8" fill="#fb7185" font-family="sans-serif">Br2 gas</text>' +
            // Carbon cathode (right -)
            '<rect x="232" y="64" width="18" height="80" rx="2" fill="#475569"/>' +
            '<text x="241" y="58" font-size="10" fill="#34d399" font-family="sans-serif" text-anchor="middle">-</text>' +
            '<text x="241" y="156" font-size="8" fill="#34d399" font-family="sans-serif" text-anchor="middle">Cathode</text>' +
            '<text x="241" y="164" font-size="7" fill="#94a3b8" font-family="sans-serif" text-anchor="middle">(carbon)</text>' +
            // Lead deposit at cathode
            '<rect x="230" y="130" width="22" height="12" rx="2" fill="#94a3b8"/>' +
            '<text x="259" y="140" font-size="8" fill="#94a3b8" font-family="sans-serif">Pb metal</text>' +
            // Ion labels
            '<text x="145" y="105" font-size="11" fill="#fb7185" font-family="sans-serif" text-anchor="middle">Pb2+</text>' +
            '<text x="145" y="125" font-size="11" fill="#a78bfa" font-family="sans-serif" text-anchor="middle">Br-</text>' +
            // arrows
            '<line x1="130" y1="103" x2="105" y2="103" stroke="#fb7185" stroke-width="1.2" marker-end="url(#aPb)"/>' +
            '<line x1="160" y1="123" x2="225" y2="123" stroke="#a78bfa" stroke-width="1.2" marker-end="url(#aBr)"/>' +
            '<defs>' +
            '<marker id="aPb" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">' +
            '<path d="M0,0 L5,2.5 L0,5 Z" fill="#fb7185"/>' +
            '</marker>' +
            '<marker id="aBr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">' +
            '<path d="M0,0 L5,2.5 L0,5 Z" fill="#a78bfa"/>' +
            '</marker>' +
            '</defs>' +
            '</svg>',
        },
      ],
      keyPoints: [
        "Molten compounds contain only the ions of that compound — no water, so no competition.",
        "Metal ion (cation) always discharged at cathode; non-metal ion (anion) at anode.",
        "Half-equations: include electrons (e-) and balance both charge and atoms.",
        "Carbon (graphite) electrodes are inert and do not contribute ions to the electrolyte.",
        "Industrial extraction of aluminium uses electrolysis of molten Al₂O₃ dissolved in cryolite (lowers temperature to ~950 °C, saving energy).",
        "The carbon anodes burn away (C + O₂ → CO₂) and must be replaced regularly.",
      ],
      whyItWorks:
        "In the pure molten salt there are no competing ions. Every cation arriving at the cathode must be that compound's metal ion, so prediction is unambiguous. The anion half-equation requires careful electron balancing: for Br-, two bromide ions each donate one electron to give Br₂ — a single shared electron pair in the diatomic molecule. Ensuring the total electrons lost at the anode equal total electrons gained at the cathode is how we check the overall equation.",
      strategies: ["Write the ions present first", "Balance electrons in each half-equation separately", "Combine half-equations: electrons cancel"],
    },

    {
      heading: "Electrolysis of Aqueous Solutions — Selectivity Rules",
      body:
        "When an ionic compound is dissolved in water, **water itself partially ionises**: H₂O ⇌ H+ + OH-. So there are now **competing ions** at each electrode. Deciding which ion is discharged requires a set of selectivity rules.\n\n" +
        "**At the cathode (reduction, gains electrons):**\n\n" +
        "1. If the metal ion present is **less reactive than hydrogen** (e.g. Cu2+, Ag+, Pb2+), the **metal** is deposited.\n" +
        "2. If the metal ion is **more reactive than hydrogen** (e.g. Na+, Ca2+, Zn2+), **hydrogen gas** is evolved instead (2H+ + 2e- → H₂).\n\n" +
        "**At the anode (oxidation, loses electrons) with inert electrodes:**\n\n" +
        "1. If the solution contains a **concentrated halide** (Cl-, Br-, I-), that **halogen** is evolved (e.g. 2Cl- → Cl₂ + 2e-).\n" +
        "2. In all other cases (including dilute halide), **oxygen** is evolved from the discharge of hydroxide ions: 4OH- → O₂ + 2H₂O + 4e-.\n\n" +
        "**Cathode reactivity reference:** the discharge order follows the reactivity series. Ions of metals *above* hydrogen (K, Na, Ca, Mg, Al, Zn, Fe...) stay in solution and **H₂** is given off; ions of metals *below* hydrogen (Cu, Ag, Au) are **discharged as the metal**. (Memory cue: the more reactive the metal, the more it 'prefers' to stay as an ion.)\n\n" +
        "**Rule of thumb for concentration:** Dilute NaCl → O₂ at anode. Concentrated NaCl → Cl₂ at anode. The extra chloride ions outcompete hydroxide at high concentration.\n\n" +
        "**Active (non-inert) electrodes:** If the anode is made of the same metal as the cation in solution (e.g. copper anode in copper sulfate solution), the anode **dissolves** instead of another ion being oxidised: Cu → Cu2+ + 2e-. This is used in electroplating and copper purification.",
      diagrams: [
        {
          caption: "Selectivity rules flowchart for aqueous electrolysis",
          svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flowchart showing selectivity rules at cathode and anode in aqueous electrolysis">' +
            '<rect width="320" height="200" fill="#0f172a"/>' +
            // Title
            '<text x="160" y="18" font-size="10" fill="#eef0ff" font-family="sans-serif" text-anchor="middle" font-weight="bold">Aqueous Selectivity Rules</text>' +
            // Cathode side
            '<text x="80" y="36" font-size="9" fill="#34d399" font-family="sans-serif" text-anchor="middle" font-weight="bold">CATHODE (-)</text>' +
            '<rect x="20" y="42" width="120" height="28" rx="4" fill="#134e3e" stroke="#34d399" stroke-width="1"/>' +
            '<text x="80" y="53" font-size="8" fill="#eef0ff" font-family="sans-serif" text-anchor="middle">Metal ion less reactive</text>' +
            '<text x="80" y="63" font-size="8" fill="#eef0ff" font-family="sans-serif" text-anchor="middle">than H2?</text>' +
            // Yes branch cathode
            '<line x1="80" y1="70" x2="80" y2="85" stroke="#34d399" stroke-width="1.2"/>' +
            '<text x="56" y="83" font-size="7" fill="#34d399" font-family="sans-serif">Yes</text>' +
            '<rect x="28" y="86" width="104" height="22" rx="4" fill="#1a4a2e" stroke="#34d399" stroke-width="1"/>' +
            '<text x="80" y="100" font-size="8" fill="#34d399" font-family="sans-serif" text-anchor="middle">Metal deposited</text>' +
            // No branch cathode
            '<line x1="80" y1="70" x2="80" y2="118" stroke="#fb7185" stroke-width="1.2" stroke-dasharray="3 2"/>' +
            '<text x="84" y="96" font-size="7" fill="#fb7185" font-family="sans-serif">No</text>' +
            '<rect x="28" y="119" width="104" height="22" rx="4" fill="#3b1a2c" stroke="#fb7185" stroke-width="1"/>' +
            '<text x="80" y="133" font-size="8" fill="#fb7185" font-family="sans-serif" text-anchor="middle">H2 evolved</text>' +
            // Anode side
            '<text x="240" y="36" font-size="9" fill="#38bdf8" font-family="sans-serif" text-anchor="middle" font-weight="bold">ANODE (+)</text>' +
            '<rect x="180" y="42" width="120" height="28" rx="4" fill="#0c2a45" stroke="#38bdf8" stroke-width="1"/>' +
            '<text x="240" y="53" font-size="8" fill="#eef0ff" font-family="sans-serif" text-anchor="middle">Concentrated</text>' +
            '<text x="240" y="63" font-size="8" fill="#eef0ff" font-family="sans-serif" text-anchor="middle">halide present?</text>' +
            // Yes branch anode
            '<line x1="240" y1="70" x2="240" y2="85" stroke="#38bdf8" stroke-width="1.2"/>' +
            '<text x="216" y="83" font-size="7" fill="#38bdf8" font-family="sans-serif">Yes</text>' +
            '<rect x="188" y="86" width="104" height="22" rx="4" fill="#0c2a45" stroke="#38bdf8" stroke-width="1"/>' +
            '<text x="240" y="100" font-size="8" fill="#38bdf8" font-family="sans-serif" text-anchor="middle">Halogen evolved</text>' +
            // No branch anode
            '<line x1="240" y1="70" x2="240" y2="118" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="3 2"/>' +
            '<text x="244" y="96" font-size="7" fill="#fbbf24" font-family="sans-serif">No</text>' +
            '<rect x="188" y="119" width="104" height="22" rx="4" fill="#2a1d0a" stroke="#fbbf24" stroke-width="1"/>' +
            '<text x="240" y="133" font-size="8" fill="#fbbf24" font-family="sans-serif" text-anchor="middle">O2 evolved</text>' +
            // Half equations at bottom
            '<text x="80" y="160" font-size="7.5" fill="#34d399" font-family="sans-serif" text-anchor="middle">2H+ + 2e- to H2</text>' +
            '<text x="240" y="160" font-size="7.5" fill="#fbbf24" font-family="sans-serif" text-anchor="middle">4OH- to O2 + 2H2O + 4e-</text>' +
            '<text x="80" y="172" font-size="7.5" fill="#34d399" font-family="sans-serif" text-anchor="middle">e.g. Cu2+ + 2e- to Cu</text>' +
            '<text x="240" y="172" font-size="7.5" fill="#38bdf8" font-family="sans-serif" text-anchor="middle">2Cl- to Cl2 + 2e-</text>' +
            '</svg>',
        },
      ],
      keyPoints: [
        "In aqueous solution, H+ and OH- from water compete with the salt's ions.",
        "At the cathode: metals less reactive than H are deposited; otherwise H₂ is evolved.",
        "At the anode (inert): concentrated halide → halogen; otherwise O₂ from OH-.",
        "Active anode dissolves if it is the same metal as the cation in solution.",
        "Concentration of halide is the key variable for the anode product.",
      ],
      thinkDeeper:
        "Why does concentrated chloride give Cl₂ but dilute chloride gives O₂? Both Cl- and OH- are anions, but the electrode potential needed to oxidise OH- to O₂ is lower than that for Cl-. At low [Cl-] the OH- ions reach the anode first and in greater numbers, so they are preferentially discharged. At high [Cl-], the sheer number of Cl- ions at the electrode surface overwhelms this preference, and Cl₂ is the main product. This is why the chlor-alkali industry (making Cl₂ and NaOH) uses concentrated brine.",
      discovery: {
        problem:
          "Two beakers each contain sodium chloride solution with inert carbon electrodes. Beaker A has a dilute solution; Beaker B has a saturated solution. Both are electrolysed for the same time. Predict the gas at the anode in each beaker and explain why they differ.",
        idea:
          "Beaker A (dilute): O₂ at the anode, because OH- ions from water outnumber Cl- ions and are preferentially discharged. Beaker B (saturated): Cl₂ at the anode, because the very high concentration of Cl- means chloride ions dominate the anode surface and are discharged in preference to OH-.",
      },
      strategies: [
        "List ALL ions present (including H+ and OH- from water)",
        "Apply cathode rule first, then anode rule",
        "Check concentration for halide decision at anode",
      ],
    },

    {
      heading: "Worked Examples — Aqueous Electrolysis",
      body:
        "**Example 1: Dilute sulfuric acid (H₂SO₄) / Water**\n\n" +
        "Ions: H+, SO₄2-, OH- (and trace H+ from water)\n\n" +
        "- Cathode: H+ + e- → H (so 2H+ + 2e- → H₂) — sulfate is more reactive than H, so hydrogen gas forms\n" +
        "- Anode: no halide present, so oxygen from 4OH- → O₂ + 2H₂O + 4e-\n" +
        "- Net result: water is decomposed into H₂ and O₂ (ratio 2:1 by volume). The H₂SO₄ remains — it is the electrolyte, not consumed.\n\n" +
        "**Example 2: Aqueous sodium chloride (brine)**\n\n" +
        "Ions: Na+, Cl-, H+, OH-\n\n" +
        "- Cathode: Na+ is more reactive than H, so **H₂** is evolved (2H+ + 2e- → H₂)\n" +
        "- Anode (concentrated): Cl- is a halide in high concentration, so **Cl₂** is evolved (2Cl- → Cl₂ + 2e-)\n" +
        "- As H+ is removed at the cathode and Cl- at the anode, the solution is left enriched in Na+ and OH- → it becomes **sodium hydroxide (NaOH) solution**\n" +
        "- This is the industrial **chlor-alkali process**, giving three valuable products:\n" +
        "  - **Chlorine (Cl₂):** sterilising/treating water in swimming pools and drinking water; making bleach; making hydrochloric acid; manufacturing PVC plastic.\n" +
        "  - **Hydrogen (H₂):** making ammonia (Haber process); making margarine (hydrogenation); as a fuel.\n" +
        "  - **Sodium hydroxide (NaOH):** making soap and detergents; purifying bauxite (aluminium ore); making paper; controlling pH.\n\n" +
        "**Example 3: Copper(II) sulfate with carbon (inert) electrodes**\n\n" +
        "Ions: Cu2+, SO₄2-, H+, OH-\n\n" +
        "- Cathode: Cu2+ is less reactive than H, so **copper metal** is deposited (Cu2+ + 2e- → Cu)\n" +
        "- Anode (inert, no halide): **O₂** evolved (4OH- → O₂ + 2H₂O + 4e-)\n" +
        "- The blue colour of the solution fades as Cu2+ ions are removed.\n\n" +
        "**Example 4: Copper(II) sulfate with copper electrodes (active)**\n\n" +
        "- Cathode: Cu2+ + 2e- → Cu (copper deposited, cathode grows)\n" +
        "- Anode: Cu → Cu2+ + 2e- (copper anode dissolves)\n" +
        "- The [Cu2+] in solution stays **constant** — ions removed at cathode are replaced from anode.\n" +
        "- This is used in **electroplating** and **copper purification**.\n\n" +
        "**Testing the gases at the electrodes (observations):**\n\n" +
        "- **Hydrogen (H₂):** colourless bubbles; a lit splint gives a **squeaky 'pop'**.\n" +
        "- **Oxygen (O₂):** colourless bubbles; relights a **glowing splint**.\n" +
        "- **Chlorine (Cl₂):** pale yellow-green gas with a sharp, choking smell; **bleaches damp litmus/indicator paper** (turns it white, often red first).",
      keyPoints: [
        "Dilute H₂SO₄: H₂ at cathode, O₂ at anode — net decomposition of water.",
        "Concentrated brine: H₂ at cathode, Cl₂ at anode, NaOH in solution (chlor-alkali process). Uses: Cl₂ (water treatment, bleach, PVC), H₂ (ammonia, margarine, fuel), NaOH (soap, paper).",
        "CuSO₄ with carbon electrodes: copper deposited at cathode, O₂ at anode.",
        "CuSO₄ with copper electrodes: cathode grows, anode dissolves, [Cu2+] stays constant.",
        "The blue colour of CuSO₄ solution fades with inert electrodes but stays constant with copper electrodes.",
        "Gas tests: H₂ pops a lit splint; O₂ relights a glowing splint; Cl₂ bleaches damp litmus paper.",
      ],
      strategies: [
        "Write out all ions before deciding products",
        "Check electrode material (inert vs active) before the anode decision",
        "Use colour change of solution as a clue",
      ],
    },

    {
      heading: "Writing Ionic Half-Equations",
      body:
        "A **half-equation** shows what happens at ONE electrode: the species gaining or losing electrons, balanced for both atoms and charge.\n\n" +
        "**Steps for writing a half-equation:**\n\n" +
        "1. Write the starting ion and product.\n" +
        "2. Balance the atoms of the main element.\n" +
        "3. Balance oxygen by adding H₂O; balance hydrogen by adding H+.\n" +
        "4. Balance the charge by adding electrons (e-) to the more positive side.\n\n" +
        "**Key examples:**\n\n" +
        "- Cu2+ + 2e- → Cu (cathode, reduction)\n" +
        "- 2H+ + 2e- → H₂ (cathode, reduction)\n" +
        "- 2Cl- → Cl₂ + 2e- (anode, oxidation)\n" +
        "- 4OH- → O₂ + 2H₂O + 4e- (anode, oxidation)\n" +
        "- 2Br- → Br₂ + 2e- (anode, oxidation)\n" +
        "- Cu → Cu2+ + 2e- (active anode dissolving)\n\n" +
        "**Combining half-equations to get the overall equation:**\n\n" +
        "Multiply each half-equation so that electrons cancel, then add. For CuSO₄ (inert electrodes):\n\n" +
        "- Cathode (x2): 2Cu2+ + 4e- → 2Cu\n" +
        "- Anode (x1): 4OH- → O₂ + 2H₂O + 4e-\n" +
        "- Overall: 2Cu2+ + 4OH- → 2Cu + O₂ + 2H₂O\n\n" +
        "**Check:** same number of each atom on both sides; total charge must be equal on both sides.",
      keyPoints: [
        "Half-equations must balance both atoms and charge; include electrons explicitly.",
        "Reduction (cathode) half-equations have electrons on the LEFT.",
        "Oxidation (anode) half-equations have electrons on the RIGHT.",
        "Multiply half-equations to match electron count before adding to get the overall equation.",
        "Check: atom balance AND charge balance must both be satisfied.",
      ],
      thinkDeeper:
        "In the half-equation 4OH- → O₂ + 2H₂O + 4e-, notice that oxygen goes from -2 in OH- to 0 in O₂ — an increase in oxidation state (loss of electrons, oxidation). Each O loses 2 electrons, and there are 4 oxygen atoms losing 2 electrons each — giving 8 electrons total. But wait: the hydroxide also has H. Those H atoms end up in H₂O. Think of OH- as providing both the O for O₂ and the H for H₂O — a beautiful internal rearrangement.",
      whyItWorks:
        "Electron conservation is the heart of all electrode chemistry. The number of moles of electrons flowing through the circuit is the same at both electrodes (since it is a series circuit). Writing correct half-equations then combining them is really just applying this conservation law: every electron lost at the anode is gained at the cathode.",
      strategies: ["Balance atoms first, then charge", "Electrons on left = reduction; electrons on right = oxidation", "Cross-multiply to cancel electrons before combining"],
    },

    {
      heading: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
      body:
        "**Electroplating** deposits a thin layer of metal on an object to improve appearance, prevent corrosion, or reduce cost. The object to be plated is made the **cathode**; the plating metal is the **anode**; the electrolyte is a solution of a salt of the plating metal.\n\n" +
        "Example — silver-plating a spoon: the spoon is the cathode, a silver block is the anode, silver nitrate solution is the electrolyte.\n\n" +
        "- Cathode: Ag+ + e- → Ag (silver deposited on spoon)\n" +
        "- Anode: Ag → Ag+ + e- (silver anode dissolves, maintaining [Ag+])\n\n" +
        "**Purification of copper:** Impure copper is the anode; pure copper is the cathode; copper(II) sulfate solution is the electrolyte.\n\n" +
        "- Impure anode dissolves: Cu → Cu2+ + 2e- (impurities fall as 'anode sludge')\n" +
        "- Pure cathode grows: Cu2+ + 2e- → Cu\n" +
        "- Result: pure copper transfers from anode to cathode. Precious metals (Ag, Au, Pt) collect in the sludge.\n\n" +
        "**Hydrogen–oxygen fuel cell** *(Cambridge 0620 only — not required for Edexcel 4CH1, but excellent stretch):* A fuel cell converts the chemical energy of a fuel directly to electrical energy without burning it. Hydrogen and oxygen are supplied continuously to two porous electrodes separated by an electrolyte (acidic or alkaline solution, or a polymer membrane).\n\n" +
        "- H₂ is oxidised at the **negative electrode (anode)**: H₂ + 2OH- → 2H₂O + 2e- (alkaline) OR H₂ → 2H+ + 2e- (acidic)\n" +
        "- O₂ is reduced at the **positive electrode (cathode)**: O₂ + 2H₂O + 4e- → 4OH- (alkaline) OR O₂ + 4H+ + 4e- → 2H₂O (acidic)\n" +
        "- **Overall (either electrolyte): 2H₂ + O₂ → 2H₂O**\n\n" +
        "**Advantages of fuel cell:** Higher efficiency than combustion (~60% vs ~25%); only product is water (no CO₂); no moving parts; continuous operation as long as fuels are supplied.\n\n" +
        "**Disadvantages:** H₂ is flammable and difficult to store/transport; H₂ production currently often uses fossil fuels; expensive platinum catalysts needed; infrastructure not yet widespread.",
      diagrams: [
        {
          caption: "Copper purification by electrolysis",
          svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Copper purification cell showing impure anode dissolving and pure cathode growing">' +
            '<rect width="320" height="200" fill="#0f172a"/>' +
            // Supply
            '<line x1="60" y1="25" x2="260" y2="25" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>' +
            '<text x="160" y="18" font-size="9" fill="#94a3b8" font-family="sans-serif" text-anchor="middle">d.c. supply</text>' +
            '<line x1="80" y1="25" x2="80" y2="60" stroke="#94a3b8" stroke-width="2"/>' +
            '<line x1="240" y1="25" x2="240" y2="60" stroke="#94a3b8" stroke-width="2"/>' +
            // Beaker
            '<rect x="40" y="58" width="240" height="120" rx="6" fill="none" stroke="#38bdf8" stroke-width="2"/>' +
            '<rect x="50" y="68" width="220" height="100" rx="3" fill="#0c2233" opacity="0.9"/>' +
            '<text x="160" y="188" font-size="8" fill="#38bdf8" font-family="sans-serif" text-anchor="middle">CuSO4 solution</text>' +
            // Anode — impure copper, rough
            '<rect x="68" y="60" width="22" height="88" rx="2" fill="#92400e"/>' +
            '<rect x="66" y="60" width="4" height="4" rx="1" fill="#78350f"/>' +
            '<rect x="88" y="72" width="4" height="4" rx="1" fill="#78350f"/>' +
            '<rect x="66" y="80" width="4" height="5" rx="1" fill="#78350f"/>' +
            '<text x="79" y="55" font-size="9" fill="#fbbf24" font-family="sans-serif" text-anchor="middle">+</text>' +
            '<text x="79" y="160" font-size="7.5" fill="#fbbf24" font-family="sans-serif" text-anchor="middle">Impure Cu</text>' +
            '<text x="79" y="170" font-size="7" fill="#94a3b8" font-family="sans-serif" text-anchor="middle">(anode, dissolves)</text>' +
            // Sludge
            '<rect x="62" y="145" width="30" height="8" rx="2" fill="#44403c"/>' +
            '<text x="47" y="155" font-size="6.5" fill="#a8a29e" font-family="sans-serif">sludge</text>' +
            // Cathode — pure copper, smooth + growing
            '<rect x="230" y="60" width="22" height="75" rx="2" fill="#b45309"/>' +
            '<rect x="228" y="60" width="26" height="88" rx="2" fill="none" stroke="#34d399" stroke-width="1.2" stroke-dasharray="3 2"/>' +
            '<text x="241" y="55" font-size="9" fill="#34d399" font-family="sans-serif" text-anchor="middle">-</text>' +
            '<text x="241" y="160" font-size="7.5" fill="#34d399" font-family="sans-serif" text-anchor="middle">Pure Cu</text>' +
            '<text x="241" y="170" font-size="7" fill="#94a3b8" font-family="sans-serif" text-anchor="middle">(cathode, grows)</text>' +
            // Cu2+ arrows
            '<line x1="105" y1="105" x2="225" y2="105" stroke="#fb7185" stroke-width="1.5" marker-end="url(#aCu2)"/>' +
            '<text x="160" y="100" font-size="9" fill="#fb7185" font-family="sans-serif" text-anchor="middle">Cu2+ ions</text>' +
            '<defs>' +
            '<marker id="aCu2" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">' +
            '<path d="M0,0 L5,2.5 L0,5 Z" fill="#fb7185"/>' +
            '</marker>' +
            '</defs>' +
            '</svg>',
        },
      ],
      keyPoints: [
        "In electroplating: the object to be plated is the cathode; the plating metal is the anode; the electrolyte contains ions of the plating metal.",
        "In copper purification: the impure copper anode dissolves; pure copper grows on the cathode; [Cu2+] stays constant.",
        "Anode sludge in copper purification contains precious metals (Ag, Au, Pt).",
        "Fuel cell: H₂ and O₂ react to produce electricity and water — no combustion.",
        "Fuel cell advantages: clean product (H₂O), high efficiency; disadvantages: H₂ storage, cost of catalysts.",
      ],
    },
  ],

  learn: {
    keyFacts: [
      "Electrolysis is the decomposition of an ionic compound by a direct electric current.",
      "The electrolyte must be molten or aqueous so that ions can move freely.",
      "Cations move to the cathode (negative electrode) where they are reduced.",
      "Anions move to the anode (positive electrode) where they are oxidised.",
      "At the cathode of an aqueous solution: metal deposited if less reactive than H; otherwise H₂ evolved.",
      "At the anode with inert electrodes: halogen if concentrated halide present; otherwise O₂.",
      "An active (same-metal) anode dissolves during electrolysis, keeping [cation] constant.",
      "Electrolysis of molten lead(II) bromide gives lead at cathode and bromine at anode.",
      "Electrolysis of dilute H₂SO₄ produces H₂ at cathode and O₂ at anode (net decomposition of water).",
      "Aluminium is extracted by electrolysing Al₂O₃ dissolved in molten cryolite; the carbon anodes burn away (C + O₂ → CO₂) and are replaced regularly.",
      "Electrolysis of concentrated brine (chlor-alkali process) gives chlorine (water treatment, bleach, PVC), hydrogen (ammonia, margarine), and sodium hydroxide (soap, paper).",
      "Gas tests: hydrogen 'pops' a lit splint, oxygen relights a glowing splint, chlorine bleaches damp litmus paper.",
      "The hydrogen–oxygen fuel cell (Cambridge only) produces electricity with water as its only product.",
    ],
    flashcards: [
      { front: "What is an electrolyte?", back: "An ionic compound that is molten or dissolved in water, allowing its ions to move freely and carry a current." },
      { front: "Which electrode is the anode and what charge does it carry?", back: "The anode is the positive electrode, connected to the positive terminal of the d.c. supply." },
      { front: "What is reduced at the cathode in an aqueous CuSO₄ solution with carbon electrodes?", back: "Copper ions: Cu2+ + 2e- → Cu. Copper is less reactive than hydrogen, so Cu2+ is preferentially discharged." },
      { front: "What is produced at the anode when concentrated NaCl(aq) is electrolysed with carbon electrodes?", back: "Chlorine gas: 2Cl- → Cl₂ + 2e-. The high [Cl-] means chloride is preferentially discharged over OH-." },
      { front: "What is produced at the anode when dilute NaCl(aq) is electrolysed?", back: "Oxygen gas: 4OH- → O₂ + 2H₂O + 4e-. Low [Cl-] means OH- is preferentially discharged." },
      { front: "In electrolysis, what is meant by an inert electrode?", back: "An electrode that does not react with the electrolyte or products during electrolysis — e.g. carbon (graphite) or platinum." },
      { front: "Write the half-equation for the oxidation of bromide ions at the anode.", back: "2Br- → Br₂ + 2e- (oxidation — electrons on the right)." },
      { front: "In copper purification, what happens to the anode and why does [Cu2+] stay constant?", back: "The impure copper anode dissolves: Cu → Cu2+ + 2e-. The Cu2+ lost at the cathode is replaced by Cu2+ from the dissolving anode." },
      { front: "State one advantage and one disadvantage of the hydrogen–oxygen fuel cell.", back: "Advantage: only product is water (no CO₂/pollutants). Disadvantage: hydrogen is difficult to store and transport safely, and the cell requires expensive platinum catalysts." },
      { front: "What is OIL RIG?", back: "Oxidation Is Loss (of electrons); Reduction Is Gain (of electrons). A mnemonic for electrode processes." },
      { front: "Why is aluminium extracted by electrolysis rather than reduction with carbon?", back: "Aluminium is more reactive than carbon, so carbon cannot reduce aluminium oxide. Electrolysis of molten Al₂O₃ (in cryolite) is used instead." },
      { front: "Why is cryolite used in the extraction of aluminium?", back: "Al₂O₃ melts at ~2050 °C. Dissolving it in molten cryolite (Na₃AlF₆) gives a conducting mixture that melts at ~950 °C, lowering the temperature and saving energy/money." },
      { front: "Why must the carbon anodes in aluminium extraction be replaced regularly?", back: "The hot oxygen produced at the anode reacts with the carbon: C + O₂ → CO₂. The anodes burn away and gradually get smaller, so they must be replaced." },
      { front: "State the three products of the chlor-alkali process and one use of each.", back: "Chlorine (water treatment / bleach / PVC), hydrogen (making ammonia / margarine / fuel), and sodium hydroxide (soap / paper / pH control)." },
      { front: "How do you test for chlorine gas at the anode?", back: "Chlorine is a pale yellow-green gas with a choking smell; it bleaches damp blue litmus paper white (often turning it red first)." },
    ],
    keyTerms: [
      { term: "Electrolysis", definition: "The decomposition of an ionic compound (molten or aqueous) by passing a direct electric current through it." },
      { term: "Electrolyte", definition: "An ionic compound in the molten state or dissolved in water, whose ions are free to move and carry charge." },
      { term: "Anode", definition: "The positive electrode in electrolysis, connected to the positive terminal of the d.c. supply; anions are attracted here and oxidised." },
      { term: "Cathode", definition: "The negative electrode in electrolysis, connected to the negative terminal of the d.c. supply; cations are attracted here and reduced." },
      { term: "Inert electrode", definition: "An electrode (e.g. carbon/graphite or platinum) that does not react with the electrolyte or electrode products during electrolysis." },
      { term: "Active electrode", definition: "An electrode made of the same metal as the cation in solution, which dissolves during electrolysis (anode) or is the target for deposition (cathode)." },
      { term: "Half-equation", definition: "An equation showing the reaction at one electrode only, including the electrons gained or lost, balanced for both atoms and charge." },
      { term: "Discharge (of ions)", definition: "The process by which an ion gains or loses electrons at an electrode and is converted to a neutral atom or molecule." },
      { term: "Electroplating", definition: "Using electrolysis to deposit a thin layer of metal on a surface; the object is made the cathode and the plating metal the anode." },
      { term: "Fuel cell", definition: "An electrochemical cell that converts the chemical energy of a fuel (H₂) and oxidant (O₂) directly into electrical energy, producing water as the only product." },
      { term: "Reduction", definition: "The gain of electrons by an ion or atom; occurs at the cathode in electrolysis." },
      { term: "Oxidation", definition: "The loss of electrons by an ion or atom; occurs at the anode in electrolysis." },
      { term: "Cryolite", definition: "Sodium hexafluoroaluminate (Na₃AlF₆), used as a molten solvent for aluminium oxide so that aluminium can be extracted at ~950 °C instead of ~2050 °C." },
      { term: "Chlor-alkali process", definition: "The industrial electrolysis of concentrated sodium chloride solution (brine) to make chlorine, hydrogen and sodium hydroxide." },
      { term: "Anode sludge", definition: "The insoluble residue (containing precious metals such as silver, gold and platinum) that collects below the impure anode during the purification of copper." },
      { term: "Selective (preferential) discharge", definition: "When ions compete at an electrode in aqueous solution, the rule deciding which ion is discharged — by metal/hydrogen reactivity at the cathode, and by halide concentration vs hydroxide at the anode." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "chem-electrochemistry-mcq-q01",
        question: "In an electrolysis cell, which of the following statements about ion movement is correct?",
        options: [
          "Cations move to the anode and are reduced.",
          "Anions move to the cathode and are oxidised.",
          "Cations move to the cathode and are reduced.",
          "Anions move to the cathode and are reduced.",
        ],
        answerIndex: 2,
        explanation: "Cations are positive ions; the cathode is the negative electrode. Opposite charges attract, so cations move to the cathode. At the cathode, cations gain electrons — this is reduction.",
        guideRef: "What is Electrolysis?",
        difficulty: "warmup",
      },
      {
        id: "chem-electrochemistry-mcq-q02",
        question: "Molten calcium chloride is electrolysed using carbon electrodes. What is produced at the anode?",
        options: ["Calcium metal", "Hydrogen gas", "Chlorine gas", "Oxygen gas"],
        answerIndex: 2,
        explanation: "In molten CaCl₂ only Ca2+ and Cl- ions are present. Anions (Cl-) move to the anode and are oxidised: 2Cl- → Cl₂ + 2e-. There is no water, so no competition from OH-.",
        guideRef: "Electrolysis of Molten Compounds",
        difficulty: "warmup",
      },
      {
        id: "chem-electrochemistry-mcq-q03",
        question: "Aqueous copper(II) sulfate is electrolysed using carbon electrodes. Which observation would you expect at the cathode?",
        options: [
          "A colourless gas is evolved.",
          "A brown/pink solid is deposited.",
          "The electrode dissolves.",
          "A yellow-green gas is evolved.",
        ],
        answerIndex: 1,
        explanation: "Cu2+ is less reactive than H, so copper is preferentially discharged at the cathode: Cu2+ + 2e- → Cu. Copper is a pink/brown solid. The blue colour of the solution fades as Cu2+ is removed.",
        guideRef: "Worked Examples — Aqueous Electrolysis",
        difficulty: "core",
        hints: [
          "Identify all ions present in CuSO₄(aq), including those from water.",
          "Apply the cathode selectivity rule: is Cu more or less reactive than hydrogen?",
          "Cu is below H in the reactivity series — what does this mean for the cathode product?",
        ],
      },
      {
        id: "chem-electrochemistry-mcq-q04",
        question: "Which half-equation correctly represents the reaction at the anode during the electrolysis of dilute sulfuric acid with inert electrodes?",
        options: [
          "2H+ + 2e- → H₂",
          "4OH- → O₂ + 2H₂O + 4e-",
          "SO₄2- → S + 2O₂ + 2e-",
          "2H₂O → 2H₂ + O₂",
        ],
        answerIndex: 1,
        explanation: "At the anode, oxidation occurs. Dilute H₂SO₄ contains no concentrated halide, so OH- ions from water are discharged: 4OH- → O₂ + 2H₂O + 4e-. Option A is the cathode (reduction) reaction. Option C is incorrect — SO₄2- is not discharged under these conditions. Option D is an overall equation, not a half-equation.",
        guideRef: "Worked Examples — Aqueous Electrolysis",
        difficulty: "core",
        hints: [
          "The anode is where oxidation (loss of electrons) occurs.",
          "No halide is present in H₂SO₄, so what is the default anode product in aqueous solution?",
          "Find the half-equation where electrons appear on the right-hand side.",
        ],
      },
      {
        id: "chem-electrochemistry-mcq-q05",
        question: "A student electrolyses concentrated sodium chloride solution with carbon electrodes. Which row correctly identifies the products at each electrode?",
        options: [
          "Cathode: Na; Anode: Cl₂",
          "Cathode: H₂; Anode: O₂",
          "Cathode: H₂; Anode: Cl₂",
          "Cathode: Na; Anode: O₂",
        ],
        answerIndex: 2,
        explanation: "Na+ is more reactive than H, so H₂ is produced at the cathode (2H+ + 2e- → H₂). The solution is concentrated NaCl so the halide rule applies at the anode: 2Cl- → Cl₂ + 2e-.",
        guideRef: "Worked Examples — Aqueous Electrolysis",
        difficulty: "core",
        hints: [
          "List all ions: Na+, Cl-, H+, OH-.",
          "Cathode rule: is Na more or less reactive than H? What does this predict?",
          "Anode rule: is the halide concentrated? Which halide is present?",
        ],
      },
      {
        id: "chem-electrochemistry-mcq-q06",
        question: "During the electrolysis of copper(II) sulfate solution using a copper anode, the concentration of Cu2+ ions in solution stays constant. Which explanation is correct?",
        options: [
          "Water is decomposed to provide more Cu2+ ions.",
          "The cathode dissolves to replace Cu2+ ions removed from solution.",
          "The copper anode dissolves, releasing Cu2+ ions to replace those discharged at the cathode.",
          "SO₄2- ions are converted to Cu2+ at the anode.",
        ],
        answerIndex: 2,
        explanation: "The copper anode is an active electrode: Cu → Cu2+ + 2e-. Every Cu2+ removed from solution at the cathode is replaced by one Cu2+ from the dissolving anode, so concentration stays constant. This is the basis of copper purification and electroplating.",
        guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
        difficulty: "core",
        hints: [
          "What type of electrode is a copper anode in CuSO₄ solution — inert or active?",
          "Write the half-equation for what happens at the copper anode.",
          "How does this differ from a carbon anode in the same solution?",
        ],
      },
    ],
    qa: [
      {
        id: "chem-electrochemistry-qa-q01",
        question: "Molten lead(II) bromide is electrolysed using carbon electrodes. (a) State which ions are present and where each moves. (b) Write the half-equation for the reaction at each electrode. (c) Identify the product at each electrode and its physical state at the temperature of the experiment.",
        marks: 6,
        modelAnswer:
          "(a) Pb2+ ions (cations) move to the cathode (negative electrode). Br- ions (anions) move to the anode (positive electrode).\n" +
          "(b) Cathode: Pb2+ + 2e- → Pb. Anode: 2Br- → Br₂ + 2e-.\n" +
          "(c) Cathode product: lead metal (liquid, since the experiment is done above its melting point of 327 °C). Anode product: bromine (gas at the high temperature, or orange-brown vapour).",
        markScheme: [
          "Pb2+ to cathode / Br- to anode [1]",
          "Cathode half-equation: Pb2+ + 2e- → Pb, balanced [1]",
          "Anode half-equation: 2Br- → Br₂ + 2e-, balanced [1]",
          "Cathode product: lead / Pb [1]",
          "Anode product: bromine / Br₂ [1]",
          "State of lead: liquid (molten) / state of bromine: gas or liquid [1]",
        ],
        commonError: "Students often write the anode as Br- → Br + e- without forming the diatomic Br₂. Always remember halogens are diatomic.",
        guideRef: "Electrolysis of Molten Compounds",
        difficulty: "core",
        hints: [
          "Start by listing the two ions in PbBr₂ and their charges.",
          "Which electrode do positive ions move to? Apply OIL RIG to decide if they gain or lose electrons.",
          "For bromine: is the element diatomic? Make sure your half-equation forms Br₂, not Br.",
          "The electrolysis is done at a high temperature — what does this tell you about the physical state of lead?",
        ],
        strategy: "List ions → apply electrode rules → write half-equations → consider conditions",
      },
      {
        id: "chem-electrochemistry-qa-q02",
        question: "A student electrolyses aqueous potassium bromide solution using carbon electrodes. (a) Predict the product at each electrode. (b) Write the half-equation for each electrode reaction. (c) The student then repeats the experiment with a very dilute potassium bromide solution. State how the anode product changes and explain why.",
        marks: 7,
        modelAnswer:
          "(a) Cathode: hydrogen gas. Anode: bromine.\n" +
          "(b) Cathode: 2H+ + 2e- → H₂ (K+ is more reactive than H, so H₂ forms). Anode: 2Br- → Br₂ + 2e- (bromide is a halide, concentrated → halogen discharged).\n" +
          "(c) With very dilute solution, the anode product changes to oxygen. In dilute solution, [Br-] is low. The OH- ions from water are present in a higher relative proportion and are preferentially discharged instead of Br-, giving: 4OH- → O₂ + 2H₂O + 4e-.",
        markScheme: [
          "Cathode: hydrogen / H₂ [1]",
          "Anode: bromine / Br₂ [1]",
          "Cathode half-equation: 2H+ + 2e- → H₂, balanced [1]",
          "Anode half-equation: 2Br- → Br₂ + 2e-, balanced [1]",
          "Dilute solution: anode product changes to oxygen / O₂ [1]",
          "Explanation: low [Br-] / OH- ions now more numerous / in higher proportion [1]",
          "OH- preferentially discharged / 4OH- → O₂ + 2H₂O + 4e- [1]",
        ],
        commonError: "Students often say the solution 'runs out' of bromide — the correct explanation is about relative concentration and preferential discharge, not depletion.",
        guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
        difficulty: "core",
        hints: [
          "List all ions in KBr(aq): K+, Br-, H+, OH-.",
          "Apply cathode rule: compare reactivity of K with H.",
          "Apply anode rule: is Br- a halide, and is the solution concentrated?",
          "For part (c): when [Br-] is very low, which anion has the relative advantage at the anode?",
        ],
        strategy: "List all ions → compare reactivity/concentration → apply selectivity rules",
      },
      {
        id: "chem-electrochemistry-qa-q03",
        question: "(a) Describe how you would use electrolysis to silver-plate a steel spoon. Include the electrode materials, the electrolyte, and the direction of ion movement. (b) Write the half-equation at each electrode. (c) State one difference in what you would observe at the anode if you replaced the silver anode with a carbon (inert) anode, and explain why this difference occurs.",
        marks: 8,
        modelAnswer:
          "(a) Connect the steel spoon as the cathode (negative electrode). Use a block of silver as the anode (positive electrode). Use silver nitrate solution as the electrolyte. Ag+ ions move from the anode to the cathode through the solution.\n" +
          "(b) Cathode: Ag+ + e- → Ag (silver deposited on the spoon). Anode: Ag → Ag+ + e- (silver anode dissolves).\n" +
          "(c) With a carbon anode, oxygen gas would be observed bubbling at the anode (not dissolution of the electrode). This is because carbon is an inert electrode and does not dissolve. Instead, OH- ions from water are oxidised: 4OH- → O₂ + 2H₂O + 4e-. The [Ag+] in solution would also decrease (no silver being replaced), and the spoon would eventually stop being plated.",
        markScheme: [
          "Spoon as cathode / silver block as anode [1]",
          "Silver nitrate solution as electrolyte [1]",
          "Ag+ moves toward cathode / through solution [1]",
          "Cathode half-equation: Ag+ + e- → Ag [1]",
          "Anode half-equation: Ag → Ag+ + e- [1]",
          "With carbon anode: gas (O₂) evolved at anode / electrode does not dissolve [1]",
          "Reason: carbon is inert, so OH- is discharged instead / 4OH- → O₂ + 2H₂O + 4e- [1]",
          "[Ag+] decreases over time / plating eventually stops [1]",
        ],
        commonError: "Students often forget to specify that the spoon must be the cathode — many write 'one electrode' without identifying which one.",
        guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
        difficulty: "challenge",
        hints: [
          "In electroplating, the object to be plated must gain material — which electrode does that (cathode or anode)?",
          "What material must the electrolyte contain, and why?",
          "What is special about a silver anode compared to a carbon anode in AgNO₃ solution?",
          "Predict what happens to [Ag+] over time with a carbon anode.",
        ],
        strategy: "Identify object role (cathode) → match electrolyte to plating metal → compare inert vs active anode",
        solutions: [
          {
            label: "Step-by-step build",
            steps: [
              "State the goal: coat the steel spoon in silver.",
              "The coating forms by reduction of Ag+ at the cathode → spoon must be cathode.",
              "Choose anode as silver (active) to maintain [Ag+].",
              "Electrolyte must supply Ag+ — silver nitrate solution.",
              "Write cathode half-equation: Ag+ + e- → Ag.",
              "Write anode half-equation (active): Ag → Ag+ + e-.",
              "With inert anode: OH- oxidised instead → O₂ evolved, [Ag+] falls.",
            ],
          },
        ],
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "chem-electrochemistry-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Electrolysis basics, ion movement, molten compounds, and electrode definitions.",
        questions: [
          {
            id: "chem-electrochemistry-bm1-01",
            question: "Which of the following is essential for a substance to be electrolysed?",
            options: [
              "It must be a metal that conducts electricity as a solid.",
              "Its ions must be free to move, so it must be molten or dissolved in water.",
              "It must be a covalent compound dissolved in water.",
              "It must be heated until it gives off a gas.",
            ],
            answerIndex: 1,
            explanation: "Electrolysis decomposes an ionic compound by passing a current through it. For a current to flow and ions to be discharged, the ions must be free to move — this happens only when the compound is molten or dissolved in water (aqueous). A solid ionic compound has fixed ions and cannot be electrolysed.",
            guideRef: "What is Electrolysis?",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm1-02",
            question: "In an electrolysis cell, the anode is best described as:",
            options: [
              "the negative electrode, where reduction occurs.",
              "the positive electrode, where oxidation occurs.",
              "the negative electrode, where oxidation occurs.",
              "the positive electrode, where reduction occurs.",
            ],
            answerIndex: 1,
            explanation: "The anode is connected to the positive terminal of the d.c. supply, so it is positively charged. Anions are attracted to it and lose electrons (oxidation). Remember: oxidation occurs at the anode (both start with vowels in 'an-ode'/'ox').",
            guideRef: "What is Electrolysis?",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm1-03",
            question: "Why can solid sodium chloride NOT be electrolysed, but molten sodium chloride can?",
            options: [
              "Solid NaCl contains no ions; melting creates them.",
              "In solid NaCl the ions are held in a fixed lattice and cannot move; melting frees them.",
              "Solid NaCl is a covalent compound, but molten NaCl is ionic.",
              "Solid NaCl conducts too well and would short-circuit the supply.",
            ],
            answerIndex: 1,
            explanation: "Solid NaCl already contains Na+ and Cl- ions, but they are locked in a rigid ionic lattice and cannot move to the electrodes. Melting (or dissolving) breaks the lattice apart so the ions become mobile and can carry charge and be discharged.",
            guideRef: "What is Electrolysis?",
            difficulty: "core",
            hints: [
              "Solid ionic compounds DO contain ions — so the issue is not whether ions exist.",
              "What must ions be able to do to carry a current and reach an electrode?",
              "What does melting do to the ionic lattice?",
            ],
          },
          {
            id: "chem-electrochemistry-bm1-04",
            question: "Molten magnesium chloride is electrolysed with inert electrodes. What is formed at the cathode?",
            options: ["Chlorine gas", "Magnesium metal", "Hydrogen gas", "Oxygen gas"],
            answerIndex: 1,
            explanation: "Molten MgCl₂ contains only Mg2+ and Cl- ions (no water). Cations move to the cathode, so Mg2+ is discharged: Mg2+ + 2e- → Mg. Magnesium metal forms at the cathode. (Hydrogen and oxygen require water and so cannot form here.)",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm1-05",
            question: "Which half-equation correctly represents the discharge of bromide ions at the anode during electrolysis of molten lead(II) bromide?",
            options: [
              "Br- + e- → Br",
              "2Br- → Br₂ + 2e-",
              "Br₂ + 2e- → 2Br-",
              "2Br- + 2e- → Br₂",
            ],
            answerIndex: 1,
            explanation: "At the anode, bromide ions lose electrons (oxidation, electrons on the right). Bromine is diatomic, so two Br- ions combine: 2Br- → Br₂ + 2e-. Option C is the reverse (reduction); option D has electrons on the wrong side; option A does not form the diatomic molecule.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "core",
            hints: [
              "The anode is where oxidation happens — electrons appear on which side?",
              "Bromine gas is diatomic. How many Br- ions are needed to make one Br₂?",
              "Balance the charge: two Br- (total 2-) must release how many electrons?",
            ],
          },
          {
            id: "chem-electrochemistry-bm1-06",
            question: "During the electrolysis of molten aluminium oxide, what is produced at the negative electrode?",
            options: ["Oxygen gas", "Aluminium metal", "Carbon dioxide", "Aluminium oxide vapour"],
            answerIndex: 1,
            explanation: "The negative electrode is the cathode. Al3+ ions (cations) move there and are reduced: Al3+ + 3e- → Al. Liquid aluminium collects at the bottom of the cell. Oxygen forms at the positive anode.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "core",
            hints: [
              "Which electrode is negative — anode or cathode?",
              "Which ion (Al3+ or O2-) is attracted to the negative electrode?",
              "Cations are reduced at the cathode — what does Al3+ become?",
            ],
          },
          {
            id: "chem-electrochemistry-bm1-07",
            question: "In the industrial extraction of aluminium, cryolite is used because it:",
            options: [
              "reacts with aluminium oxide to release the metal.",
              "dissolves the aluminium oxide and lowers the operating temperature, saving energy.",
              "prevents the aluminium from reacting with oxygen.",
              "increases the melting point of aluminium oxide.",
            ],
            answerIndex: 1,
            explanation: "Pure Al₂O₃ melts at about 2050 °C. Dissolving it in molten cryolite (Na₃AlF₆) gives a conducting mixture that melts at around 950 °C. This lowers the energy needed and makes the process economic. Cryolite is a solvent — it does not chemically release the aluminium.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "core",
            hints: [
              "Think about the very high melting point of pure aluminium oxide.",
              "Is cryolite reacting with the oxide, or acting as a solvent?",
              "What is the benefit of a lower operating temperature?",
            ],
          },
          {
            id: "chem-electrochemistry-bm1-08",
            question: "Which statement about cations and anions in electrolysis is correct?",
            options: [
              "Cations are negative and move to the anode.",
              "Anions are positive and move to the cathode.",
              "Cations are positive and move to the cathode; anions are negative and move to the anode.",
              "Both cations and anions move to the cathode.",
            ],
            answerIndex: 2,
            explanation: "Cations carry positive charge and are attracted to the negatively charged cathode. Anions carry negative charge and are attracted to the positively charged anode. Opposite charges attract.",
            guideRef: "What is Electrolysis?",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm1-09",
            question: "Molten lead(II) bromide is electrolysed. Using OIL RIG, which statement is correct?",
            options: [
              "Pb2+ is oxidised at the cathode because it gains electrons.",
              "Pb2+ is reduced at the cathode because it gains electrons.",
              "Br- is reduced at the anode because it loses electrons.",
              "Br- is oxidised at the cathode because it gains electrons.",
            ],
            answerIndex: 1,
            explanation: "Pb2+ + 2e- → Pb at the cathode: it gains electrons. Gain of electrons is reduction (RIG: Reduction Is Gain). Br- loses electrons at the anode (oxidation), so options C and D are wrong on both the electrode and the electron-direction. Option B correctly pairs 'cathode', 'gain electrons', and 'reduction'; only careful cross-checking of all three parts of each statement rejects the distractors.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "challenge",
            hints: [
              "OIL RIG: which letters mean gain of electrons?",
              "Check each statement on THREE counts: ion, electrode, and gain/lose.",
              "Pb2+ + 2e- → Pb: are electrons gained or lost, and at which electrode?",
              "Reject any option where even one of the three parts is wrong.",
            ],
            strategy: "Cross-check every option on ion, electrode, and electron direction",
          },
          {
            id: "chem-electrochemistry-bm1-10",
            question: "A molten ionic compound XY₂ is electrolysed. At the cathode a metal is deposited and at the anode a green-yellow gas is released. What are X and Y most likely to be?",
            options: [
              "X is a halogen and Y is a metal.",
              "X is a metal and Y is chlorine.",
              "X is hydrogen and Y is oxygen.",
              "X is oxygen and Y is a metal.",
            ],
            answerIndex: 1,
            explanation: "A metal is deposited at the cathode, so the cation X must be a metal (forming X2+). The green-yellow gas at the anode is chlorine, so the anion Y is Cl-. The formula XY₂ fits a metal forming a 2+ ion with two chloride ions, e.g. CaCl₂ or PbCl₂.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "challenge",
            hints: [
              "A metal is deposited at the cathode — what kind of ion must X be?",
              "A green-yellow gas at the anode is a strong clue — which halogen is this colour?",
              "Check the formula XY₂: a 2+ cation needs two singly-charged anions.",
            ],
            strategy: "Use the cathode product to identify the cation, then the gas colour to identify the anion",
          },
        ],
      },
      {
        id: "chem-electrochemistry-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Aqueous selectivity rules, cathode and anode products, and concentration effects.",
        questions: [
          {
            id: "chem-electrochemistry-bm2-01",
            question: "When an ionic salt is dissolved in water, which extra ions are always present that can compete at the electrodes?",
            options: [
              "Na+ and Cl-",
              "H+ and OH- (from water)",
              "O2- and H+",
              "H₂ and O₂",
            ],
            answerIndex: 1,
            explanation: "Water partially ionises: H₂O ⇌ H+ + OH-. So in any aqueous solution there are H+ and OH- ions in addition to the salt's ions. These compete for discharge at the electrodes, which is why selectivity rules are needed.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm2-02",
            question: "At the cathode in aqueous electrolysis, which factor decides whether a metal or hydrogen is discharged?",
            options: [
              "The concentration of the solution.",
              "The reactivity of the metal compared with hydrogen.",
              "Whether the anode is inert or active.",
              "The colour of the solution.",
            ],
            answerIndex: 1,
            explanation: "The cathode rule depends only on reactivity: if the metal ion is less reactive than hydrogen (e.g. Cu, Ag), the metal is deposited; if more reactive than hydrogen (e.g. Na, K, Ca), hydrogen is evolved. Concentration affects the anode choice, not the cathode.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "core",
            hints: [
              "There are two competing cations at the cathode: the metal ion and H+.",
              "Which is discharged depends on a reactivity comparison.",
              "Concentration matters at the OTHER electrode, not the cathode.",
            ],
          },
          {
            id: "chem-electrochemistry-bm2-03",
            question: "Dilute sodium chloride solution is electrolysed with inert electrodes. What is the product at the anode?",
            options: ["Chlorine", "Oxygen", "Hydrogen", "Sodium"],
            answerIndex: 1,
            explanation: "Although Cl- is present, the solution is dilute, so the chloride concentration is low. OH- ions are preferentially discharged, giving oxygen: 4OH- → O₂ + 2H₂O + 4e-. Concentrated NaCl would give chlorine instead.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "core",
            hints: [
              "Both Cl- and OH- are anions competing at the anode.",
              "The solution is dilute — is the halide concentration high or low?",
              "At low halide concentration, which anion wins?",
            ],
          },
          {
            id: "chem-electrochemistry-bm2-04",
            question: "Concentrated sodium chloride solution is electrolysed with inert electrodes. What is the product at the anode?",
            options: ["Oxygen", "Chlorine", "Hydrogen", "Sodium hydroxide"],
            answerIndex: 1,
            explanation: "In concentrated NaCl, the high chloride concentration means Cl- ions dominate the anode surface and are preferentially discharged: 2Cl- → Cl₂ + 2e-. Chlorine gas is produced. (The NaOH that builds up is in the solution, not a gas at the electrode.)",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm2-05",
            question: "Aqueous copper(II) sulfate is electrolysed with inert carbon electrodes. Which row gives the correct products?",
            options: [
              "Cathode: hydrogen; Anode: oxygen",
              "Cathode: copper; Anode: oxygen",
              "Cathode: copper; Anode: sulfur dioxide",
              "Cathode: hydrogen; Anode: copper",
            ],
            answerIndex: 1,
            explanation: "Cu2+ is less reactive than hydrogen, so copper is deposited at the cathode: Cu2+ + 2e- → Cu. There is no halide, so OH- is discharged at the anode to give oxygen: 4OH- → O₂ + 2H₂O + 4e-.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "List the ions: Cu2+, SO₄2-, H+, OH-.",
              "Cathode: is copper above or below hydrogen in reactivity?",
              "Anode: is there a concentrated halide? If not, what is the default product?",
            ],
          },
          {
            id: "chem-electrochemistry-bm2-06",
            question: "Which solution, when electrolysed with inert electrodes, gives hydrogen at the cathode AND oxygen at the anode?",
            options: [
              "Concentrated sodium chloride solution",
              "Dilute sulfuric acid",
              "Copper(II) sulfate solution",
              "Molten sodium chloride",
            ],
            answerIndex: 1,
            explanation: "Dilute sulfuric acid contains H+, SO₄2- and OH-. At the cathode H+ is discharged (2H+ + 2e- → H₂); at the anode no halide is present so OH- gives oxygen (4OH- → O₂ + 2H₂O + 4e-). This is effectively the electrolysis of water. Concentrated NaCl gives Cl₂; CuSO₄ gives Cu at the cathode; molten NaCl gives Na and Cl₂.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "You need H₂ at the cathode, so the cation must be H+ or a metal more reactive than H.",
              "You need O₂ at the anode, so there must be NO concentrated halide.",
              "Which option has only H+, a stable anion, and water?",
            ],
          },
          {
            id: "chem-electrochemistry-bm2-07",
            question: "During the electrolysis of dilute sulfuric acid, what is the ratio of the volume of gas at the cathode to that at the anode?",
            options: ["1 : 1", "1 : 2", "2 : 1", "4 : 1"],
            answerIndex: 2,
            explanation: "The cathode gives H₂ and the anode gives O₂, decomposing water: 2H₂O → 2H₂ + O₂. For every 2 volumes of hydrogen, 1 volume of oxygen forms, so cathode : anode = 2 : 1.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "Write the overall reaction: water → hydrogen + oxygen.",
              "Balance it: 2H₂O → 2H₂ + O₂.",
              "Equal volumes of gas contain equal moles — read the mole ratio of H₂ to O₂.",
            ],
            strategy: "Use the balanced equation; equal volumes contain equal moles of gas",
          },
          {
            id: "chem-electrochemistry-bm2-08",
            question: "Aqueous potassium iodide is electrolysed with carbon electrodes. Which pair of products is correct?",
            options: [
              "Potassium at the cathode, iodine at the anode",
              "Hydrogen at the cathode, iodine at the anode",
              "Hydrogen at the cathode, oxygen at the anode",
              "Potassium at the cathode, oxygen at the anode",
            ],
            answerIndex: 1,
            explanation: "K+ is much more reactive than hydrogen, so hydrogen is discharged at the cathode (2H+ + 2e- → H₂). Iodide is a halide, so iodine is discharged at the anode (2I- → I₂ + 2e-). Potassium metal is never deposited from aqueous solution.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "core",
            hints: [
              "Compare potassium with hydrogen in the reactivity series.",
              "Iodide is a halide — what does the anode rule say?",
              "Reactive metals like K are never deposited from water.",
            ],
          },
          {
            id: "chem-electrochemistry-bm2-09",
            question: "Why does concentrated sodium chloride give chlorine at the anode, while very dilute sodium chloride gives oxygen?",
            options: [
              "Chloride ions are destroyed in dilute solution.",
              "At high chloride concentration, Cl- ions outnumber OH- at the anode and are preferentially discharged; at low concentration OH- dominates.",
              "Oxygen is only soluble in dilute solutions.",
              "Dilute solutions contain no chloride ions.",
            ],
            answerIndex: 1,
            explanation: "Both Cl- and OH- compete at the anode. OH- is normally discharged more readily, but when chloride is very concentrated the sheer number of Cl- ions at the electrode surface allows chlorine to be discharged preferentially. In dilute solution there is too little Cl-, so OH- wins and oxygen forms.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "challenge",
            hints: [
              "Both anions are present in both solutions — the chloride is not destroyed.",
              "Think about the relative numbers of Cl- and OH- at the anode surface.",
              "How does concentration change which anion dominates?",
            ],
            strategy: "Compare the relative abundance of Cl- and OH- at the anode under each condition",
          },
          {
            id: "chem-electrochemistry-bm2-10",
            question: "A concentrated solution of magnesium bromide is electrolysed with inert electrodes. Which products form?",
            options: [
              "Magnesium at the cathode, bromine at the anode",
              "Hydrogen at the cathode, bromine at the anode",
              "Hydrogen at the cathode, oxygen at the anode",
              "Magnesium at the cathode, oxygen at the anode",
            ],
            answerIndex: 1,
            explanation: "Magnesium is more reactive than hydrogen, so hydrogen is discharged at the cathode (2H+ + 2e- → H₂) — magnesium is NOT deposited from aqueous solution. The solution is a concentrated halide, so bromine is discharged at the anode (2Br- → Br₂ + 2e-).",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "challenge",
            hints: [
              "List ions: Mg2+, Br-, H+, OH-.",
              "Cathode: is magnesium above or below hydrogen in reactivity? What is discharged?",
              "Anode: concentrated halide present — apply the halide rule.",
            ],
            strategy: "Apply the cathode reactivity rule and the anode halide/concentration rule independently",
          },
        ],
      },
      {
        id: "chem-electrochemistry-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Half-equations, oxidation and reduction, active electrodes, and electrode observations.",
        questions: [
          {
            id: "chem-electrochemistry-bm3-01",
            question: "In a reduction half-equation, the electrons (e-) appear on:",
            options: [
              "the right-hand side, with the products.",
              "the left-hand side, with the reactants.",
              "both sides equally.",
              "neither side — electrons are not shown.",
            ],
            answerIndex: 1,
            explanation: "Reduction is gain of electrons (RIG). The species takes IN electrons, so the electrons are written on the left (reactant side), e.g. Cu2+ + 2e- → Cu. Oxidation half-equations have electrons on the right.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm3-02",
            question: "Which of these is an oxidation half-equation?",
            options: [
              "Ag+ + e- → Ag",
              "2H+ + 2e- → H₂",
              "2Cl- → Cl₂ + 2e-",
              "Al3+ + 3e- → Al",
            ],
            answerIndex: 2,
            explanation: "Oxidation is loss of electrons, so the electrons appear on the right. 2Cl- → Cl₂ + 2e- shows chloride losing electrons (oxidation). The other three all gain electrons (reduction).",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm3-03",
            question: "Which is the correctly balanced half-equation for the discharge of oxygen from hydroxide ions?",
            options: [
              "4OH- → O₂ + 2H₂O + 4e-",
              "2OH- → O₂ + H₂ + 2e-",
              "OH- → O + H+ + 2e-",
              "4OH- + 4e- → O₂ + 2H₂O",
            ],
            answerIndex: 0,
            explanation: "The standard IGCSE half-equation is 4OH- → O₂ + 2H₂O + 4e-. Check: O balances (4 left; 2 in O₂ + 2 in H₂O = 4 right); H balances (4 left; 4 in 2H₂O right); charge balances (4- left; 4- from electrons right). Option D has electrons on the wrong side.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "This is oxidation at the anode — electrons go on the right.",
              "Start with 4 OH-. The H atoms must end up in water molecules.",
              "Balance O, then H, then charge with electrons.",
            ],
          },
          {
            id: "chem-electrochemistry-bm3-04",
            question: "Copper(II) sulfate solution is electrolysed using copper electrodes. What is the half-equation at the anode?",
            options: [
              "Cu2+ + 2e- → Cu",
              "Cu → Cu2+ + 2e-",
              "4OH- → O₂ + 2H₂O + 4e-",
              "2H+ + 2e- → H₂",
            ],
            answerIndex: 1,
            explanation: "A copper anode is an active electrode. Instead of discharging an ion from solution, the copper electrode itself dissolves (is oxidised): Cu → Cu2+ + 2e-. Option A is the cathode reaction; option C would apply only with an inert anode.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "Is a copper anode inert or active?",
              "An active anode dissolves instead of discharging another ion.",
              "Oxidation = loss of electrons → electrons on the right.",
            ],
          },
          {
            id: "chem-electrochemistry-bm3-05",
            question: "When copper(II) sulfate is electrolysed with copper electrodes, the blue colour of the solution:",
            options: [
              "fades to colourless because Cu2+ is removed.",
              "stays the same because Cu2+ removed at the cathode is replaced by the dissolving anode.",
              "turns green because chlorine is produced.",
              "deepens because more Cu2+ is created overall.",
            ],
            answerIndex: 1,
            explanation: "With copper electrodes, Cu2+ removed at the cathode (Cu2+ + 2e- → Cu) is replaced by Cu2+ from the dissolving anode (Cu → Cu2+ + 2e-). The concentration of Cu2+ stays constant, so the blue colour does not change. (With inert carbon electrodes the colour WOULD fade.)",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "What replaces the Cu2+ ions that are deposited at the cathode?",
              "Write the anode half-equation for a copper electrode.",
              "If Cu2+ is removed and replaced at equal rates, what happens to its concentration?",
            ],
          },
          {
            id: "chem-electrochemistry-bm3-06",
            question: "Which observation would you expect at the cathode when concentrated sodium chloride solution is electrolysed?",
            options: [
              "A pink-brown solid is deposited.",
              "Bubbles of a colourless gas are released.",
              "A yellow-green gas is released.",
              "The electrode dissolves.",
            ],
            answerIndex: 1,
            explanation: "At the cathode in NaCl(aq), hydrogen is discharged (2H+ + 2e- → H₂) because sodium is more reactive than hydrogen. Hydrogen is a colourless gas, so you see bubbles. The yellow-green gas (chlorine) appears at the anode.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "What is the cathode product when the metal ion is more reactive than hydrogen?",
              "Sodium is very reactive — is it deposited from solution?",
              "Hydrogen gas is colourless — what would you actually see?",
            ],
          },
          {
            id: "chem-electrochemistry-bm3-07",
            question: "The half-equations for an electrolysis are: cathode Cu2+ + 2e- → Cu, anode 4OH- → O₂ + 2H₂O + 4e-. What is the correct overall equation?",
            options: [
              "Cu2+ + 4OH- → Cu + O₂ + 2H₂O",
              "2Cu2+ + 4OH- → 2Cu + O₂ + 2H₂O",
              "Cu2+ + OH- → Cu + O₂ + H₂O",
              "2Cu2+ + 2OH- → 2Cu + O₂ + H₂O",
            ],
            answerIndex: 1,
            explanation: "To cancel electrons, multiply the cathode equation by 2 (2Cu2+ + 4e- → 2Cu) so both involve 4e-. Adding and cancelling electrons gives 2Cu2+ + 4OH- → 2Cu + O₂ + 2H₂O. Check: Cu 2=2, O 4=2+2=4, H 4=4, charge (4+ −4 = 0) = 0.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "How many electrons in each half-equation? Make them equal.",
              "Multiply the cathode equation so that 4 electrons are involved.",
              "Add the two and cancel the electrons; then check atoms and charge.",
            ],
            strategy: "Scale each half-equation so electrons match, add, then cancel electrons",
          },
          {
            id: "chem-electrochemistry-bm3-08",
            question: "Which species is oxidised during the electrolysis of molten aluminium oxide?",
            options: ["Al3+", "O2-", "Al", "O₂"],
            answerIndex: 1,
            explanation: "Oxidation is loss of electrons. At the anode, oxide ions lose electrons: 2O2- → O₂ + 4e-. So O2- is oxidised. Al3+ gains electrons at the cathode (reduction).",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "Oxidation occurs at the anode — which ion goes there?",
              "Which ion loses electrons to form a neutral molecule?",
              "Al3+ gains electrons (reduction); the other ion is oxidised.",
            ],
          },
          {
            id: "chem-electrochemistry-bm3-09",
            question: "An electrolysis cell passes the same quantity of charge through molten NaCl and molten AlCl₃ in series. Compared with sodium, the amount (in moles) of aluminium deposited will be:",
            options: [
              "the same, because the charge is the same.",
              "three times as much, because Al3+ needs more electrons.",
              "one third as much, because each Al3+ needs 3 electrons while each Na+ needs 1.",
              "twice as much, because aluminium has a higher charge.",
            ],
            answerIndex: 2,
            explanation: "The same charge delivers the same number of moles of electrons to each cell. Na+ + e- → Na needs 1 electron per atom, but Al3+ + 3e- → Al needs 3 electrons per atom. So three times as many electrons are needed per aluminium atom, giving one third as many moles of Al as Na.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Same charge = same number of moles of electrons in each cell.",
              "Write the cathode half-equation for each metal — how many electrons per atom?",
              "Compare electrons-per-atom: 1 for Na vs 3 for Al.",
            ],
            strategy: "Equal charge → equal moles of electrons → divide by electrons needed per metal atom",
          },
          {
            id: "chem-electrochemistry-bm3-10",
            question: "Which of the following correctly pairs the process with its electrode in the electrolysis of aqueous sodium sulfate using platinum electrodes?",
            options: [
              "Reduction of SO₄2- at the anode",
              "Oxidation of OH- at the anode",
              "Reduction of Na+ at the cathode",
              "Oxidation of H+ at the cathode",
            ],
            answerIndex: 1,
            explanation: "In Na₂SO₄(aq), sulfate is too stable to be discharged and sodium is too reactive, so the products come from water. At the anode OH- is oxidised: 4OH- → O₂ + 2H₂O + 4e-. At the cathode H+ is reduced: 2H+ + 2e- → H₂. Only option B is correct.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "SO₄2- is not discharged and Na+ is too reactive — products come from water.",
              "At the anode, which ion is oxidised: H+ or OH-?",
              "Reduction is at the cathode; oxidation is at the anode.",
            ],
          },
        ],
      },
      {
        id: "chem-electrochemistry-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Electroplating, copper purification, fuel cells, uses, and synoptic reasoning.",
        questions: [
          {
            id: "chem-electrochemistry-bm4-01",
            question: "In electroplating an object with silver, the object to be plated should be made the:",
            options: ["anode", "cathode", "electrolyte", "salt bridge"],
            answerIndex: 1,
            explanation: "The object to be plated is made the cathode (negative electrode). Metal ions (Ag+) from solution are reduced and deposited on its surface: Ag+ + e- → Ag. The plating metal forms the anode.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm4-02",
            question: "Which is a common reason for electroplating an object with a metal such as chromium or silver?",
            options: [
              "To make the object lighter.",
              "To improve appearance and/or protect against corrosion.",
              "To make the object a better insulator.",
              "To make the object magnetic.",
            ],
            answerIndex: 1,
            explanation: "Electroplating gives a thin metal coating that improves appearance, resists corrosion, or uses a cheaper base metal underneath an attractive or protective layer. It does not generally make objects lighter, magnetic, or insulating.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm4-03",
            question: "In the purification of copper by electrolysis, what is the cathode and what happens to it?",
            options: [
              "Impure copper; it dissolves.",
              "Pure copper; it grows as pure copper is deposited.",
              "Carbon; oxygen is released on it.",
              "Pure copper; it dissolves into the solution.",
            ],
            answerIndex: 1,
            explanation: "In copper purification the cathode is a thin sheet of pure copper. Cu2+ ions are reduced onto it (Cu2+ + 2e- → Cu), so it grows. The impure copper anode dissolves; impurities collect as anode sludge.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "Which electrode gains copper — anode or cathode?",
              "Deposition (gaining metal) happens at the cathode.",
              "The pure copper electrode grows; the impure one dissolves.",
            ],
          },
          {
            id: "chem-electrochemistry-bm4-04",
            question: "During copper purification, valuable metals such as silver and gold:",
            options: [
              "are deposited on the cathode with the copper.",
              "dissolve into the solution as ions.",
              "collect below the anode as anode sludge.",
              "are released as gases at the anode.",
            ],
            answerIndex: 2,
            explanation: "Less reactive impurities such as silver, gold and platinum are not oxidised at the anode. As the surrounding copper dissolves, these fall to the bottom of the cell as 'anode sludge', which is valuable and is collected.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "Are Ag, Au and Pt more or less reactive than copper?",
              "Less reactive metals are not oxidised at the anode.",
              "Where do these undissolved impurities end up?",
            ],
          },
          {
            id: "chem-electrochemistry-bm4-05",
            question: "What is the overall reaction in a hydrogen–oxygen fuel cell?",
            options: [
              "2H₂ + O₂ → 2H₂O",
              "H₂ + O₂ → H₂O₂",
              "2H₂O → 2H₂ + O₂",
              "H₂ + Cl₂ → 2HCl",
            ],
            answerIndex: 0,
            explanation: "A hydrogen–oxygen fuel cell combines hydrogen and oxygen to form water, releasing energy as electricity: 2H₂ + O₂ → 2H₂O. Water is the only product. Option C is the reverse (electrolysis of water).",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm4-06",
            question: "Which is a genuine advantage of a hydrogen–oxygen fuel cell over a petrol engine?",
            options: [
              "Hydrogen is very easy to store and transport.",
              "It releases no carbon dioxide at the point of use — only water is produced.",
              "It needs no catalyst.",
              "Hydrogen is cheaper than petrol everywhere.",
            ],
            answerIndex: 1,
            explanation: "The fuel cell's only product is water (2H₂ + O₂ → 2H₂O), so no CO₂ or other pollutants are emitted at the point of use, and it is more efficient than combustion. Storing hydrogen, expensive catalysts and the cost of producing hydrogen are disadvantages, not advantages.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "Which option is actually true and beneficial?",
              "Recall the only product of the fuel cell reaction.",
              "Storage of hydrogen and catalyst cost are drawbacks, not benefits.",
            ],
          },
          {
            id: "chem-electrochemistry-bm4-07",
            question: "A student silver-plates a fork using a silver anode and silver nitrate solution. Why does the concentration of Ag+ in the solution stay roughly constant?",
            options: [
              "Silver nitrate is continuously added by the teacher.",
              "Ag+ deposited on the fork is replaced by Ag+ from the dissolving silver anode.",
              "Water provides extra Ag+ ions.",
              "Nitrate ions are converted to silver ions.",
            ],
            answerIndex: 1,
            explanation: "The active silver anode dissolves (Ag → Ag+ + e-) at the same rate that Ag+ is deposited on the cathode (Ag+ + e- → Ag). So [Ag+] stays constant. This is the same principle as copper purification.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "What kind of electrode is a silver anode — inert or active?",
              "Write the anode half-equation for silver.",
              "Compare the rate Ag+ is removed with the rate it is replaced.",
            ],
          },
          {
            id: "chem-electrochemistry-bm4-08",
            question: "Chlorine, hydrogen and sodium hydroxide are all useful products of one industrial electrolysis. Which electrolyte is used?",
            options: [
              "Molten sodium chloride",
              "Concentrated sodium chloride solution (brine)",
              "Dilute sulfuric acid",
              "Copper(II) sulfate solution",
            ],
            answerIndex: 1,
            explanation: "Electrolysing concentrated brine gives chlorine at the anode (2Cl- → Cl₂ + 2e-), hydrogen at the cathode (2H+ + 2e- → H₂), and leaves Na+ and OH- in solution as sodium hydroxide. This is the chlor-alkali process. Molten NaCl gives sodium metal, not NaOH.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "You need three products: Cl₂, H₂ and NaOH.",
              "NaOH forms in solution only when water is present (aqueous, not molten).",
              "Which aqueous chloride is concentrated enough to give chlorine?",
            ],
          },
          {
            id: "chem-electrochemistry-bm4-09",
            question: "A teacher claims that electroplating with a thin gold layer can make a cheap metal look like solid gold while using very little gold. Which statement best supports this claim?",
            options: [
              "Electroplating deposits the metal throughout the whole object.",
              "Electroplating deposits only a thin surface layer, so little of the costly metal is needed.",
              "Electroplating converts the base metal entirely into gold.",
              "Electroplating works without any electrical supply.",
            ],
            answerIndex: 1,
            explanation: "Electroplating deposits a thin coating of metal on the surface of the cathode object. Because only the surface is covered, a small mass of the expensive metal (gold) gives the appearance of solid gold at low cost. It does not transform the base metal itself.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "challenge",
            hints: [
              "How thick is an electroplated layer — surface only, or all the way through?",
              "If only the surface is coated, how much gold is needed?",
              "The base metal underneath is unchanged.",
            ],
            strategy: "Link 'thin surface layer' to 'small amount of expensive metal needed'",
          },
          {
            id: "chem-electrochemistry-bm4-10",
            question: "An impure copper anode of mass 64 g dissolves completely during purification. Assuming all the copper is deposited on the cathode, and the relative atomic mass of copper is 64, how many moles of electrons must have passed?",
            options: ["0.5 mol", "1 mol", "2 mol", "4 mol"],
            answerIndex: 2,
            explanation: "Moles of Cu = 64 g ÷ 64 g/mol = 1 mol. Each Cu atom involves 2 electrons (Cu → Cu2+ + 2e- at the anode, or Cu2+ + 2e- → Cu at the cathode). So moles of electrons = 1 × 2 = 2 mol.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "First find moles of copper: mass ÷ relative atomic mass.",
              "Write the copper half-equation — how many electrons per Cu atom?",
              "Multiply moles of Cu by electrons per atom.",
            ],
            strategy: "moles of metal = mass ÷ Ar; moles of electrons = moles of metal × charge on the ion",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-electrochemistry-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Electrolysis basics, molten compounds, and ion movement.",
        questions: [
          {
            id: "chem-electrochemistry-bq1-01",
            question: "(a) Define the terms electrolysis and electrolyte. (b) Explain why an ionic compound conducts electricity when molten or in solution, but not when solid.",
            marks: 5,
            modelAnswer:
              "(a) Electrolysis is the decomposition (breaking down) of an ionic compound, when molten or in aqueous solution, by passing a direct electric current through it. An electrolyte is an ionic compound that is molten or dissolved in water, whose ions are free to move and carry the current.\n" +
              "(b) When solid, the ions are held in fixed positions in the ionic lattice and cannot move, so no charge can flow. When molten or dissolved, the lattice breaks up and the ions become free to move towards the electrodes, allowing a current to flow and the compound to be decomposed.",
            markScheme: [
              "Electrolysis = breaking down / decomposing an ionic compound using electricity / d.c. [1]",
              "Electrolyte = ionic compound molten or dissolved (in water) [1]",
              "Solid: ions fixed in lattice / cannot move [1]",
              "Molten or aqueous: ions free to move [1]",
              "Moving ions carry the charge / allow current to flow [1]",
            ],
            commonError: "Students sometimes say solid ionic compounds have no ions. They DO have ions — the ions simply cannot move.",
            guideRef: "What is Electrolysis?",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bq1-02",
            question: "An electrolysis cell uses a direct current supply and two carbon electrodes. (a) Name the electrode connected to the positive terminal and the electrode connected to the negative terminal. (b) State which ions move to each electrode. (c) State, with reasons, whether oxidation or reduction occurs at each electrode.",
            marks: 6,
            modelAnswer:
              "(a) Positive terminal: anode. Negative terminal: cathode.\n" +
              "(b) Cations (positive ions) move to the cathode; anions (negative ions) move to the anode.\n" +
              "(c) At the cathode, reduction occurs because cations gain electrons (RIG: Reduction Is Gain). At the anode, oxidation occurs because anions lose electrons (OIL: Oxidation Is Loss).",
            markScheme: [
              "Positive terminal = anode [1]",
              "Negative terminal = cathode [1]",
              "Cations move to cathode [1]",
              "Anions move to anode [1]",
              "Cathode: reduction, because electrons are gained [1]",
              "Anode: oxidation, because electrons are lost [1]",
            ],
            commonError: "Students sometimes swap anode and cathode. Anode = positive in electrolysis; cathode = negative.",
            guideRef: "What is Electrolysis?",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bq1-03",
            question: "Molten zinc chloride is electrolysed using inert electrodes. (a) Name the two ions present. (b) Write the half-equation at each electrode and name the product. (c) Explain why no hydrogen or oxygen is produced in this electrolysis.",
            marks: 6,
            modelAnswer:
              "(a) Zn2+ and Cl-.\n" +
              "(b) Cathode: Zn2+ + 2e- → Zn (zinc metal). Anode: 2Cl- → Cl₂ + 2e- (chlorine gas).\n" +
              "(c) The compound is molten, not dissolved in water, so there is no water present. Hydrogen and oxygen come from the H+ and OH- ions of water; with no water, only the ions of the compound (Zn2+ and Cl-) can be discharged.",
            markScheme: [
              "Ions: Zn2+ and Cl- [1]",
              "Cathode half-equation: Zn2+ + 2e- → Zn [1]",
              "Cathode product: zinc / Zn [1]",
              "Anode half-equation: 2Cl- → Cl₂ + 2e- [1]",
              "Anode product: chlorine / Cl₂ [1]",
              "No water present / only ions of the compound can be discharged [1]",
            ],
            commonError: "Students sometimes predict hydrogen or oxygen out of habit; with a MOLTEN compound there is no water, so only the compound's own ions are discharged.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "core",
            hints: [
              "List the ions actually in molten ZnCl₂ — is water one of them?",
              "Cation to the cathode, anion to the anode; balance electrons.",
              "Where do H₂ and O₂ normally come from in electrolysis?",
            ],
            strategy: "Identify ions present → write half-equations → explain absence of water-derived products",
          },
          {
            id: "chem-electrochemistry-bq1-04",
            question: "Molten lead(II) iodide is electrolysed. (a) Write the half-equation at the cathode and at the anode. (b) State and explain the colour change you would see at the anode. (c) Combine the two half-equations to give the overall equation for the reaction.",
            marks: 7,
            modelAnswer:
              "(a) Cathode: Pb2+ + 2e- → Pb. Anode: 2I- → I₂ + 2e-.\n" +
              "(b) At the anode a grey-black solid / purple vapour of iodine appears, because iodide ions are oxidised to iodine (I₂). Iodine is dark grey/purple, so the colourless electrolyte darkens near the anode.\n" +
              "(c) The cathode and anode half-equations both involve 2 electrons, so they combine directly: Pb2+ + 2I- → Pb + I₂.",
            markScheme: [
              "Cathode: Pb2+ + 2e- → Pb [1]",
              "Anode: 2I- → I₂ + 2e- [1]",
              "Colour: dark grey / black / purple (iodine) at anode [1]",
              "Because I- is oxidised to I₂ [1]",
              "Recognise both half-equations involve 2 electrons [1]",
              "Overall equation: Pb2+ + 2I- → Pb + I₂ [1]",
              "Overall equation balanced for atoms and charge [1]",
            ],
            commonError: "When combining half-equations, students sometimes leave the electrons in. Here both have 2e-, so the electrons cancel exactly and must not appear in the overall equation.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "Pb2+ gains 2 electrons; how many electrons do two I- ions release?",
              "Both half-equations involve 2 electrons — do you need to multiply either?",
              "Add the half-equations and cancel the electrons.",
            ],
            strategy: "Write both half-equations → check electrons already match → add and cancel electrons",
            solutions: [
              {
                label: "Combining the half-equations",
                steps: [
                  "Cathode: Pb2+ + 2e- → Pb (2 electrons gained).",
                  "Anode: 2I- → I₂ + 2e- (2 electrons lost).",
                  "Electrons are equal (2 each), so no multiplication is needed.",
                  "Add: Pb2+ + 2I- + 2e- → Pb + I₂ + 2e-.",
                  "Cancel the 2e- on both sides: Pb2+ + 2I- → Pb + I₂.",
                  "Check charge: left = (2+) + 2(1-) = 0; right = 0. Balanced.",
                ],
              },
            ],
          },
          {
            id: "chem-electrochemistry-bq1-05",
            question: "Aluminium is extracted by electrolysis of molten aluminium oxide. (a) Write the half-equation at the cathode. (b) Write the half-equation at the anode. (c) Explain why the process is carried out on the molten compound rather than the solid, and why electrolysis (not heating with carbon) is used to extract aluminium.",
            marks: 7,
            modelAnswer:
              "(a) Cathode: Al3+ + 3e- → Al.\n" +
              "(b) Anode: 2O2- → O₂ + 4e-.\n" +
              "(c) The compound must be molten so that the Al3+ and O2- ions are free to move to the electrodes (in the solid, ions are fixed). Electrolysis is used because aluminium is more reactive than carbon, so it cannot be displaced/reduced by heating its oxide with carbon; a more powerful method (electrolysis) is required to reduce Al3+ to Al.",
            markScheme: [
              "Cathode half-equation: Al3+ + 3e- → Al [1]",
              "Anode half-equation: 2O2- → O₂ + 4e- [1]",
              "Must be molten so ions can move / reach electrodes [1]",
              "Solid: ions fixed / cannot move [1]",
              "Aluminium is more reactive than carbon [1]",
              "So carbon cannot reduce/displace it / electrolysis needed [1]",
              "Electrolysis is a strong enough method to reduce Al3+ [1]",
            ],
            commonError: "Students often forget that the choice of electrolysis is linked to reactivity: metals above carbon in the reactivity series must be extracted by electrolysis.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "core",
            hints: [
              "Al3+ gains how many electrons to become a neutral atom?",
              "At the anode, oxide ions lose electrons to form O₂ — balance the electrons.",
              "Compare the reactivity of aluminium with carbon to justify using electrolysis.",
            ],
            strategy: "Write half-equations → justify molten state by ion mobility → justify electrolysis by reactivity vs carbon",
          },
          {
            id: "chem-electrochemistry-bq1-06",
            question: "A student sets up an electrolysis of molten lead(II) bromide but the lamp in the circuit does not light until the solid has melted. (a) Explain this observation. (b) Once melted, state what is seen at each electrode. (c) Predict whether solid lead(II) bromide dissolved in a non-polar solvent (which does not free the ions) would conduct. Explain.",
            marks: 6,
            modelAnswer:
              "(a) While solid, the Pb2+ and Br- ions are held in a fixed lattice and cannot move, so no current flows and the lamp stays off. Once melted, the lattice breaks and the ions are free to move and carry the current, so the lamp lights.\n" +
              "(b) Cathode: a silvery bead of molten lead forms. Anode: orange-brown bromine gas/vapour is released.\n" +
              "(c) No, it would not conduct. Conduction requires free-moving ions. If the solvent does not free the ions (they stay paired/fixed), there are no mobile charge carriers, so no current flows.",
            markScheme: [
              "Solid: ions fixed / cannot move → no current [1]",
              "Molten: ions free to move → current flows / lamp lights [1]",
              "Cathode: lead / silvery metal [1]",
              "Anode: bromine / orange-brown gas or vapour [1]",
              "Would NOT conduct [1]",
              "Because no free-moving ions / no mobile charge carriers [1]",
            ],
            commonError: "Students sometimes think melting creates the ions. The ions already exist; melting only allows them to move.",
            guideRef: "What is Electrolysis?",
            difficulty: "core",
            hints: [
              "What must charge carriers do for a current to flow?",
              "Why are the ions unable to move in the solid?",
              "For part (c): if the ions are not freed, are there mobile charge carriers?",
            ],
            strategy: "Link conduction to the presence of FREE-MOVING ions in every case",
          },
          {
            id: "chem-electrochemistry-bq1-07",
            question: "Define each of the following with a clear example from electrolysis: (a) inert electrode; (b) active electrode; (c) discharge of an ion.",
            marks: 6,
            modelAnswer:
              "(a) An inert electrode does not react with the electrolyte or the products of electrolysis. Example: carbon (graphite) or platinum electrodes used in the electrolysis of dilute sulfuric acid.\n" +
              "(b) An active electrode takes part in the reaction; for example a copper anode in copper(II) sulfate solution dissolves: Cu → Cu2+ + 2e-.\n" +
              "(c) Discharge is when an ion gains or loses electrons at an electrode and becomes a neutral atom or molecule. Example: Cu2+ + 2e- → Cu at the cathode (the Cu2+ ion is discharged to copper metal).",
            markScheme: [
              "Inert electrode: does not react with electrolyte/products [1]",
              "Inert example: carbon / graphite / platinum [1]",
              "Active electrode: takes part in / reacts during electrolysis [1]",
              "Active example: copper anode dissolving (Cu → Cu2+ + 2e-) [1]",
              "Discharge: ion gains/loses electrons → neutral atom or molecule [1]",
              "Discharge example: e.g. Cu2+ + 2e- → Cu / 2Cl- → Cl₂ + 2e- [1]",
            ],
            commonError: "Students confuse 'inert' (does not react) with 'does not conduct'. Inert electrodes still conduct electricity; they simply do not take part in the chemical reaction.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "core",
            hints: [
              "Inert = unreactive towards the electrolyte and products.",
              "Active = the electrode itself takes part (e.g. dissolves).",
              "Discharge = the moment an ion gains/loses electrons and becomes neutral.",
            ],
          },
          {
            id: "chem-electrochemistry-bq1-08",
            question: "Molten sodium chloride is electrolysed industrially in a Down's cell to extract sodium. (a) Write the half-equation at each electrode. (b) Explain why sodium can be obtained from molten sodium chloride but NOT from sodium chloride solution. (c) Combine the half-equations into the overall equation.",
            marks: 7,
            modelAnswer:
              "(a) Cathode: Na+ + e- → Na. Anode: 2Cl- → Cl₂ + 2e-.\n" +
              "(b) In molten NaCl there is no water, so the only cation is Na+; it is discharged to sodium metal. In sodium chloride solution, water is present and provides H+; because sodium is more reactive than hydrogen, hydrogen is discharged at the cathode instead of sodium, so no sodium metal is obtained.\n" +
              "(c) Multiply the cathode equation by 2 to match the 2 electrons at the anode: 2Na+ + 2e- → 2Na. Add to the anode equation and cancel electrons: 2Na+ + 2Cl- → 2Na + Cl₂.",
            markScheme: [
              "Cathode: Na+ + e- → Na [1]",
              "Anode: 2Cl- → Cl₂ + 2e- [1]",
              "Molten: no water / only Na+ to discharge → sodium formed [1]",
              "Solution: water present provides H+ [1]",
              "Sodium more reactive than hydrogen → H₂ discharged instead [1]",
              "Multiply cathode by 2 to balance electrons [1]",
              "Overall: 2Na+ + 2Cl- → 2Na + Cl₂ [1]",
            ],
            commonError: "A frequent error is writing the overall equation as Na+ + Cl- → Na + Cl₂, which is not balanced. The chlorine half-equation needs two Cl-, so two Na+ are needed too.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "challenge",
            hints: [
              "Cathode: Na+ needs only 1 electron; anode: two Cl- release 2 electrons.",
              "Multiply the cathode half-equation so the electrons match (2 each).",
              "For (b), compare sodium and hydrogen in the reactivity series — which is discharged in solution?",
            ],
            strategy: "Write half-equations → scale to match electrons → contrast molten vs aqueous using reactivity",
            solutions: [
              {
                label: "Building the overall equation",
                steps: [
                  "Cathode: Na+ + e- → Na (1 electron each).",
                  "Anode: 2Cl- → Cl₂ + 2e- (2 electrons).",
                  "Multiply cathode by 2 to get 2 electrons: 2Na+ + 2e- → 2Na.",
                  "Add: 2Na+ + 2Cl- + 2e- → 2Na + Cl₂ + 2e-.",
                  "Cancel 2e-: 2Na+ + 2Cl- → 2Na + Cl₂.",
                  "Check: Na 2=2, Cl 2=2, charge (2+ −2 = 0) = 0. Balanced.",
                ],
              },
            ],
          },
          {
            id: "chem-electrochemistry-bq1-09",
            question: "Explain, in terms of electron transfer, why the discharge of a cation at the cathode is always a reduction and the discharge of an anion at the anode is always an oxidation. Use lead(II) bromide as your example.",
            marks: 5,
            modelAnswer:
              "Cations are positive because they have lost electrons. At the cathode they regain electrons to become neutral atoms; gaining electrons is reduction (RIG). For Pb2+: Pb2+ + 2e- → Pb — the ion gains 2 electrons, so it is reduced.\n" +
              "Anions are negative because they have gained extra electrons. At the anode they give up those electrons to become neutral; losing electrons is oxidation (OIL). For Br-: 2Br- → Br₂ + 2e- — the bromide ions lose electrons, so they are oxidised.\n" +
              "Therefore the cathode is always the site of reduction and the anode always the site of oxidation.",
            markScheme: [
              "Cation gains electrons at cathode [1]",
              "Gain of electrons = reduction (RIG) / Pb2+ + 2e- → Pb [1]",
              "Anion loses electrons at anode [1]",
              "Loss of electrons = oxidation (OIL) / 2Br- → Br₂ + 2e- [1]",
              "Conclusion: cathode = reduction, anode = oxidation [1]",
            ],
            commonError: "Students sometimes mix up OIL RIG. Keep it tied to electrons: gain = reduction, loss = oxidation.",
            guideRef: "What is Electrolysis?",
            difficulty: "core",
            hints: [
              "What is the charge story behind a cation vs an anion?",
              "At the cathode, does the cation gain or lose electrons?",
              "Apply OIL RIG to each electrode for the lead bromide example.",
            ],
          },
          {
            id: "chem-electrochemistry-bq1-10",
            question: "A molten salt of an unknown metal M with chloride is electrolysed. After passing charge, 1 mol of electrons deposits 0.5 mol of metal M at the cathode. (a) Deduce the charge on the ion of M and write its cathode half-equation. (b) If the relative atomic mass of M is 24, identify the most likely metal and write the formula of its chloride.",
            marks: 6,
            modelAnswer:
              "(a) 1 mol of electrons gives 0.5 mol of M, so each atom of M requires 2 electrons. The ion must therefore be M2+. Half-equation: M2+ + 2e- → M.\n" +
              "(b) An Ar of 24 with a 2+ ion matches magnesium (Mg). The chloride is MgCl₂.",
            markScheme: [
              "Electrons per atom = 1 ÷ 0.5 = 2 [1]",
              "Charge on ion = 2+ [1]",
              "Half-equation: M2+ + 2e- → M [1]",
              "Ar 24 + 2+ charge → magnesium / Mg [1]",
              "Formula of chloride: MgCl₂ [1]",
              "Reasoning links electrons-per-atom to ionic charge [1]",
            ],
            commonError: "Students sometimes divide the wrong way. Electrons per atom = moles of electrons ÷ moles of metal = 1 ÷ 0.5 = 2.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "How many electrons are shared among 0.5 mol of atoms?",
              "Electrons per atom = moles of electrons ÷ moles of metal.",
              "A 2+ ion with Ar 24 — which Group 2 metal is this?",
            ],
            strategy: "electrons per atom = mol electrons ÷ mol metal → that gives the ion charge → match Ar to identify the metal",
            solutions: [
              {
                label: "Deducing charge and identity",
                steps: [
                  "Electrons per atom of M = 1 mol e- ÷ 0.5 mol M = 2.",
                  "Each atom gains 2 electrons, so the ion is M2+.",
                  "Cathode half-equation: M2+ + 2e- → M.",
                  "A 2+ metal with Ar = 24 is magnesium (Mg).",
                  "Mg2+ with Cl- gives the formula MgCl₂.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-electrochemistry-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Aqueous selectivity rules, products of electrolysis, and observations.",
        questions: [
          {
            id: "chem-electrochemistry-bq2-01",
            question: "State the rules for predicting the products of the electrolysis of an aqueous solution with inert electrodes. (a) Give the rule for the cathode. (b) Give the rule for the anode. (c) Use your rules to predict the products of electrolysing dilute copper(II) chloride solution, explaining your reasoning.",
            marks: 7,
            modelAnswer:
              "(a) Cathode rule: if the metal ion is less reactive than hydrogen, the metal is deposited; if it is more reactive than hydrogen, hydrogen is evolved.\n" +
              "(b) Anode rule: if a concentrated halide is present, the halogen is evolved; otherwise (including dilute halide) oxygen is evolved from OH-.\n" +
              "(c) Dilute CuCl₂: ions are Cu2+, Cl-, H+, OH-. Cathode: Cu2+ is less reactive than hydrogen, so copper is deposited (Cu2+ + 2e- → Cu). Anode: the chloride is dilute, so OH- is discharged in preference, giving oxygen (4OH- → O₂ + 2H₂O + 4e-).",
            markScheme: [
              "Cathode rule: metal if less reactive than H, else hydrogen [1]",
              "Anode rule: halogen if concentrated halide, else oxygen [1]",
              "CuCl₂ ions identified: Cu2+, Cl-, H+, OH- [1]",
              "Cathode: copper deposited; Cu less reactive than H [1]",
              "Cu2+ + 2e- → Cu [1]",
              "Anode: oxygen; chloride is dilute so OH- discharged [1]",
              "4OH- → O₂ + 2H₂O + 4e- [1]",
            ],
            commonError: "Students often assume any chloride gives chlorine. With a DILUTE halide, oxygen is produced instead.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "warmup",
            hints: [
              "Cathode rule depends on reactivity vs hydrogen.",
              "Anode rule depends on whether the halide is concentrated.",
              "For dilute CuCl₂: copper is below H (deposited); chloride is dilute (oxygen).",
            ],
            strategy: "State both rules clearly, then apply each to the specific ions present",
          },
          {
            id: "chem-electrochemistry-bq2-02",
            question: "Dilute sulfuric acid is electrolysed using inert platinum electrodes. (a) Identify all the ions present. (b) Write the half-equation at each electrode and name the product. (c) The volume of gas collected at the cathode is 24 cm³. State the volume collected at the anode and explain your answer.",
            marks: 7,
            modelAnswer:
              "(a) H+, SO₄2-, OH- (the H+ and OH- come from the water and the acid).\n" +
              "(b) Cathode: 2H+ + 2e- → H₂ (hydrogen). Anode: 4OH- → O₂ + 2H₂O + 4e- (oxygen).\n" +
              "(c) 12 cm³ of oxygen. The overall reaction is 2H₂O → 2H₂ + O₂, so hydrogen and oxygen form in a 2:1 ratio by volume. Half the cathode volume = 24 ÷ 2 = 12 cm³.",
            markScheme: [
              "Ions: H+, SO₄2-, OH- [1]",
              "Cathode: 2H+ + 2e- → H₂ [1]",
              "Cathode product: hydrogen [1]",
              "Anode: 4OH- → O₂ + 2H₂O + 4e- [1]",
              "Anode product: oxygen [1]",
              "Anode gas volume = 12 cm³ [1]",
              "Because H₂ : O₂ ratio is 2 : 1 by volume [1]",
            ],
            commonError: "Students sometimes give the anode volume as 48 cm³ (doubling instead of halving). Oxygen is HALF the volume of hydrogen.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "Write the overall equation for the electrolysis of water.",
              "Read off the mole (and therefore volume) ratio of H₂ to O₂.",
              "Hydrogen : oxygen = 2 : 1, so oxygen volume is half the hydrogen volume.",
            ],
            strategy: "Use the 2:1 H₂:O₂ volume ratio from the balanced equation",
            solutions: [
              {
                label: "Gas volume calculation",
                steps: [
                  "Overall: 2H₂O → 2H₂ + O₂.",
                  "Volume ratio H₂ : O₂ = 2 : 1 (equal volumes contain equal moles of gas).",
                  "Hydrogen volume = 24 cm³ at the cathode.",
                  "Oxygen volume = 24 ÷ 2 = 12 cm³ at the anode.",
                ],
              },
            ],
          },
          {
            id: "chem-electrochemistry-bq2-03",
            question: "Two identical cells are electrolysed with carbon electrodes: cell X contains dilute sodium chloride solution; cell Y contains concentrated sodium chloride solution. (a) State the cathode product in each cell. (b) State the anode product in each cell. (c) Explain the difference in the anode products.",
            marks: 6,
            modelAnswer:
              "(a) Cathode: hydrogen in both X and Y (sodium is more reactive than hydrogen in both, so H₂ is evolved).\n" +
              "(b) Anode: oxygen in X (dilute); chlorine in Y (concentrated).\n" +
              "(c) Both Cl- and OH- are present at the anode. In dilute solution (X), [Cl-] is low, so OH- ions are more available and are preferentially discharged to give oxygen. In concentrated solution (Y), the very high [Cl-] means chloride ions dominate the anode surface and are discharged preferentially to give chlorine.",
            markScheme: [
              "Cathode in X: hydrogen [1]",
              "Cathode in Y: hydrogen [1]",
              "Anode in X (dilute): oxygen [1]",
              "Anode in Y (concentrated): chlorine [1]",
              "Difference due to concentration of chloride [1]",
              "High [Cl-] → Cl₂ preferred; low [Cl-] → OH- discharged → O₂ [1]",
            ],
            commonError: "Students sometimes change the cathode product between the two cells. The cathode product (H₂) is the SAME in both; only the anode product changes with concentration.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "core",
            hints: [
              "Does the cathode product depend on concentration? (No — only reactivity.)",
              "The anode has two competing anions: Cl- and OH-.",
              "How does the chloride concentration change which one is discharged?",
            ],
            strategy: "Keep the cathode product fixed; vary only the anode product with concentration",
          },
          {
            id: "chem-electrochemistry-bq2-04",
            question: "Aqueous sodium sulfate is electrolysed with inert electrodes, with universal indicator added to the solution. (a) State the product at each electrode and write the half-equations. (b) Predict and explain the colour changes of the indicator near each electrode. (c) State the net chemical change to the solution overall.",
            marks: 8,
            modelAnswer:
              "(a) Cathode: hydrogen, 2H+ + 2e- → H₂. Anode: oxygen, 4OH- → O₂ + 2H₂O + 4e-.\n" +
              "(b) Near the cathode, H+ ions are removed (used to make H₂), leaving an excess of OH-, so the solution becomes alkaline and the indicator turns blue/purple. Near the anode, OH- ions are removed, leaving an excess of H+, so the solution becomes acidic and the indicator turns red/orange.\n" +
              "(c) Overall, water is decomposed: 2H₂O → 2H₂ + O₂. The Na+ and SO₄2- ions are unchanged, so sodium sulfate acts only as the conducting electrolyte. (If mixed, the solution returns to neutral.)",
            markScheme: [
              "Cathode: hydrogen; 2H+ + 2e- → H₂ [1]",
              "Anode: oxygen; 4OH- → O₂ + 2H₂O + 4e- [1]",
              "Cathode region alkaline / indicator blue/purple [1]",
              "Because H+ removed leaving excess OH- [1]",
              "Anode region acidic / indicator red/orange [1]",
              "Because OH- removed leaving excess H+ [1]",
              "Overall: decomposition of water (2H₂O → 2H₂ + O₂) [1]",
              "Na+ and SO₄2- unchanged / Na₂SO₄ is the conducting medium [1]",
            ],
            commonError: "Students sometimes predict that sulfate is discharged at the anode. SO₄2- is very stable and is not discharged; OH- is preferred, giving oxygen.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "challenge",
            hints: [
              "Neither Na+ nor SO₄2- is discharged — the products come from water.",
              "At the cathode H+ is used up; what does that do to the local pH?",
              "At the anode OH- is used up; what does that do to the local pH?",
            ],
            strategy: "Track removal of H+ (cathode) and OH- (anode) to deduce local pH changes",
          },
          {
            id: "chem-electrochemistry-bq2-05",
            question: "A student predicts that electrolysing concentrated potassium bromide solution will deposit potassium at the cathode. (a) Explain why this prediction is wrong and state the correct cathode product. (b) State the anode product and justify it. (c) Write the half-equation at each electrode.",
            marks: 6,
            modelAnswer:
              "(a) The prediction is wrong because potassium is much more reactive than hydrogen. When the metal ion is more reactive than hydrogen, hydrogen (not the metal) is discharged. The correct cathode product is hydrogen gas.\n" +
              "(b) The anode product is bromine. The solution is a concentrated halide (Br-), so the halide rule applies and bromine is discharged in preference to oxygen.\n" +
              "(c) Cathode: 2H+ + 2e- → H₂. Anode: 2Br- → Br₂ + 2e-.",
            markScheme: [
              "Prediction wrong: potassium more reactive than hydrogen [1]",
              "Correct cathode product: hydrogen [1]",
              "Anode product: bromine [1]",
              "Justification: concentrated halide present [1]",
              "Cathode half-equation: 2H+ + 2e- → H₂ [1]",
              "Anode half-equation: 2Br- → Br₂ + 2e- [1]",
            ],
            commonError: "Reactive metals (K, Na, Ca, Mg, Al) are never deposited from aqueous solution — hydrogen is discharged instead.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "core",
            hints: [
              "Where is potassium in the reactivity series relative to hydrogen?",
              "If the metal is more reactive than hydrogen, what is discharged?",
              "Concentrated bromide at the anode — which anion wins?",
            ],
          },
          {
            id: "chem-electrochemistry-bq2-06",
            question: "Concentrated copper(II) bromide solution is electrolysed with carbon electrodes. (a) List all the ions present. (b) Predict, with reasons, the product at each electrode. (c) Write the half-equation at each electrode and combine them into an overall equation.",
            marks: 8,
            modelAnswer:
              "(a) Cu2+, Br-, H+, OH-.\n" +
              "(b) Cathode: copper. Cu2+ is less reactive than hydrogen, so copper is deposited. Anode: bromine. The solution contains a concentrated halide, so bromine is discharged in preference to oxygen.\n" +
              "(c) Cathode: Cu2+ + 2e- → Cu. Anode: 2Br- → Br₂ + 2e-. Both involve 2 electrons, so they combine directly: Cu2+ + 2Br- → Cu + Br₂.",
            markScheme: [
              "Ions: Cu2+, Br-, H+, OH- [1]",
              "Cathode: copper; Cu less reactive than H [1]",
              "Anode: bromine; concentrated halide present [1]",
              "Cathode half-equation: Cu2+ + 2e- → Cu [1]",
              "Anode half-equation: 2Br- → Br₂ + 2e- [1]",
              "Recognise both involve 2 electrons [1]",
              "Overall: Cu2+ + 2Br- → Cu + Br₂ [1]",
              "Overall balanced for atoms and charge [1]",
            ],
            commonError: "Students sometimes apply the anode rule to give oxygen even though the halide is concentrated. Concentrated halide → halogen.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "challenge",
            hints: [
              "List all four ions, including those from water.",
              "Cathode: is copper above or below hydrogen?",
              "Anode: concentrated bromide — halogen or oxygen? Then combine the half-equations.",
            ],
            strategy: "Apply both selectivity rules, then add the (electron-matched) half-equations",
            solutions: [
              {
                label: "Combining the half-equations",
                steps: [
                  "Cathode: Cu2+ + 2e- → Cu (2 electrons gained).",
                  "Anode: 2Br- → Br₂ + 2e- (2 electrons lost).",
                  "Electrons match (2 each), so add directly and cancel electrons.",
                  "Overall: Cu2+ + 2Br- → Cu + Br₂.",
                  "Check charge: left = (2+) + 2(1-) = 0; right = 0. Balanced.",
                ],
              },
            ],
          },
          {
            id: "chem-electrochemistry-bq2-07",
            question: "Explain why the electrolysis of aqueous copper(II) sulfate with carbon electrodes can be described as removing copper from the solution, while with copper electrodes the amount of copper in solution stays the same. Refer to the half-equations at each electrode in both cases.",
            marks: 7,
            modelAnswer:
              "With carbon (inert) electrodes: cathode Cu2+ + 2e- → Cu removes Cu2+ from solution and deposits copper. At the anode, copper cannot be supplied (carbon is inert), so OH- is discharged: 4OH- → O₂ + 2H₂O + 4e-. Because Cu2+ is only removed and never replaced, the amount of copper in solution falls and the blue colour fades.\n" +
              "With copper (active) electrodes: cathode Cu2+ + 2e- → Cu still removes copper. But the anode now dissolves: Cu → Cu2+ + 2e-, putting Cu2+ back into solution at the same rate. The two processes balance, so the amount of Cu2+ in solution stays the same and the blue colour is unchanged.",
            markScheme: [
              "Both cases cathode: Cu2+ + 2e- → Cu (copper removed/deposited) [1]",
              "Carbon anode: 4OH- → O₂ + 2H₂O + 4e- (oxygen) [1]",
              "Carbon: copper not replaced → [Cu2+] falls / colour fades [1]",
              "Copper anode: Cu → Cu2+ + 2e- (anode dissolves) [1]",
              "Copper replaced at same rate it is removed [1]",
              "[Cu2+] stays constant / blue colour unchanged with copper electrodes [1]",
              "Clear comparison of the two anode reactions [1]",
            ],
            commonError: "Students often forget that the cathode reaction is the SAME in both cases. The difference is entirely at the anode.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "The cathode reaction is identical in both setups — write it once.",
              "What is discharged at a carbon anode vs a copper anode?",
              "Compare the rate Cu2+ is removed with the rate it is replaced.",
            ],
            strategy: "Hold the cathode reaction constant; contrast the inert vs active anode reactions",
          },
          {
            id: "chem-electrochemistry-bq2-08",
            question: "A solution of dilute hydrochloric acid is electrolysed with inert electrodes. (a) List the ions present. (b) Predict the product at each electrode, with reasons. (c) The same acid is then made very concentrated. State and explain how the anode product changes.",
            marks: 7,
            modelAnswer:
              "(a) H+, Cl-, OH- (H+ and Cl- mainly from the acid; OH- from water).\n" +
              "(b) Cathode: hydrogen, 2H+ + 2e- → H₂ (H+ is the only cation and is readily discharged). Anode: when the acid is dilute, the chloride concentration is low, so OH- is discharged in preference and oxygen is produced: 4OH- → O₂ + 2H₂O + 4e-.\n" +
              "(c) When concentrated, [Cl-] is high, so chloride is preferentially discharged and the anode product becomes chlorine: 2Cl- → Cl₂ + 2e-.",
            markScheme: [
              "Ions: H+, Cl-, OH- [1]",
              "Cathode: hydrogen / 2H+ + 2e- → H₂ [1]",
              "Dilute anode: oxygen [1]",
              "Reason: low [Cl-] so OH- discharged [1]",
              "Concentrated anode: chlorine [1]",
              "Reason: high [Cl-] preferentially discharged [1]",
              "2Cl- → Cl₂ + 2e- [1]",
            ],
            commonError: "Students sometimes assume hydrochloric acid always gives chlorine. Only when concentrated; dilute HCl gives oxygen at the anode.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "core",
            hints: [
              "The cation is H+, so the cathode product is straightforward.",
              "At the anode, compare Cl- and OH- — concentration is the deciding factor.",
              "Increasing concentration shifts the anode product from oxygen to chlorine.",
            ],
          },
          {
            id: "chem-electrochemistry-bq2-09",
            question: "Predict the products at each electrode for the electrolysis of the following aqueous solutions with inert electrodes, giving a brief reason in each case: (a) concentrated sodium iodide; (b) silver nitrate; (c) dilute potassium sulfate.",
            marks: 9,
            modelAnswer:
              "(a) Concentrated NaI: Cathode hydrogen (Na more reactive than H). Anode iodine (concentrated halide). \n" +
              "(b) AgNO₃: Cathode silver (Ag less reactive than H, so deposited: Ag+ + e- → Ag). Anode oxygen (no halide; nitrate not discharged, so OH- gives O₂). \n" +
              "(c) Dilute K₂SO₄: Cathode hydrogen (K more reactive than H). Anode oxygen (no halide; sulfate not discharged, so OH- gives O₂). Effectively electrolysis of water.",
            markScheme: [
              "(a) cathode hydrogen — Na more reactive than H [1]",
              "(a) anode iodine — concentrated halide [1]",
              "(b) cathode silver — Ag less reactive than H [1]",
              "(b) anode oxygen — no halide / nitrate not discharged [1]",
              "(b) Ag+ + e- → Ag stated or implied [1]",
              "(c) cathode hydrogen — K more reactive than H [1]",
              "(c) anode oxygen — no halide / sulfate not discharged [1]",
              "Reasoning consistent for each anode (halide vs not) [1]",
              "Reasoning consistent for each cathode (reactivity vs H) [1]",
            ],
            commonError: "Students sometimes try to discharge nitrate or sulfate at the anode. These stable oxoanions are not discharged; OH- gives oxygen instead.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "challenge",
            hints: [
              "For each, list ions and apply the cathode reactivity rule.",
              "For the anode, ask: is there a CONCENTRATED halide? If not, oxygen.",
              "Nitrate and sulfate are never discharged in IGCSE conditions.",
            ],
            strategy: "Apply the cathode (reactivity) and anode (halide vs not) rules systematically to each solution",
          },
          {
            id: "chem-electrochemistry-bq2-10",
            question: "In an experiment, 0.2 mol of electrons is passed through silver nitrate solution and then through copper(II) sulfate solution connected in series, both with inert electrodes. (a) Write the cathode half-equation for each cell. (b) Calculate the moles of silver and the moles of copper deposited. (c) Explain why these amounts differ even though the same charge flowed.",
            marks: 8,
            modelAnswer:
              "(a) Silver cell cathode: Ag+ + e- → Ag. Copper cell cathode: Cu2+ + 2e- → Cu.\n" +
              "(b) Silver: each Ag needs 1 electron, so moles of Ag = 0.2 ÷ 1 = 0.2 mol. Copper: each Cu needs 2 electrons, so moles of Cu = 0.2 ÷ 2 = 0.1 mol.\n" +
              "(c) The same charge delivers the same number of moles of electrons (0.2 mol) to each cell. But silver ions need only 1 electron each, whereas copper ions need 2 electrons each. So the same electrons deposit twice as many silver atoms as copper atoms.",
            markScheme: [
              "Silver cathode: Ag+ + e- → Ag [1]",
              "Copper cathode: Cu2+ + 2e- → Cu [1]",
              "Moles of silver = 0.2 mol [1]",
              "Working: 0.2 ÷ 1 [1]",
              "Moles of copper = 0.1 mol [1]",
              "Working: 0.2 ÷ 2 [1]",
              "Same charge = same moles of electrons in series [1]",
              "Cu2+ needs 2 e- per atom vs 1 e- for Ag+ → fewer Cu atoms [1]",
            ],
            commonError: "Students sometimes assume equal masses or equal moles are deposited. The amounts depend on the number of electrons per ion (the ionic charge).",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Write each cathode half-equation and note electrons per metal atom.",
              "Moles of metal = moles of electrons ÷ electrons per atom.",
              "Compare 1 electron (Ag+) with 2 electrons (Cu2+).",
            ],
            strategy: "Series circuit → same moles of electrons → divide by electrons per ion to get moles of each metal",
            solutions: [
              {
                label: "Moles deposited calculation",
                steps: [
                  "Same charge in series → 0.2 mol electrons through each cell.",
                  "Silver: Ag+ + e- → Ag, 1 electron per atom → 0.2 ÷ 1 = 0.2 mol Ag.",
                  "Copper: Cu2+ + 2e- → Cu, 2 electrons per atom → 0.2 ÷ 2 = 0.1 mol Cu.",
                  "Ratio Ag : Cu = 0.2 : 0.1 = 2 : 1, reflecting the 1:2 electron requirement.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-electrochemistry-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Half-equations, redox, overall equations, and quantitative electrolysis.",
        questions: [
          {
            id: "chem-electrochemistry-bq3-01",
            question: "(a) State what is meant by a half-equation. (b) Write half-equations for: (i) the formation of chlorine from chloride ions; (ii) the deposition of copper from copper(II) ions; (iii) the formation of hydrogen from hydrogen ions. (c) For each, state whether it is oxidation or reduction.",
            marks: 7,
            modelAnswer:
              "(a) A half-equation shows the reaction at one electrode only, including the electrons gained or lost, balanced for both atoms and charge.\n" +
              "(b) (i) 2Cl- → Cl₂ + 2e-. (ii) Cu2+ + 2e- → Cu. (iii) 2H+ + 2e- → H₂.\n" +
              "(c) (i) oxidation (electrons lost). (ii) reduction (electrons gained). (iii) reduction (electrons gained).",
            markScheme: [
              "Half-equation = reaction at one electrode showing electrons / balanced for atoms and charge [1]",
              "(i) 2Cl- → Cl₂ + 2e- [1]",
              "(ii) Cu2+ + 2e- → Cu [1]",
              "(iii) 2H+ + 2e- → H₂ [1]",
              "(i) oxidation [1]",
              "(ii) reduction [1]",
              "(iii) reduction [1]",
            ],
            commonError: "Students sometimes forget the diatomic molecules: chlorine must be Cl₂ and hydrogen must be H₂, each needing 2 electrons.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "warmup",
            hints: [
              "Electrons on the right = oxidation; on the left = reduction.",
              "Chlorine and hydrogen are diatomic — use 2 ions and 2 electrons.",
              "Check both atom balance and charge balance.",
            ],
          },
          {
            id: "chem-electrochemistry-bq3-02",
            question: "For the electrolysis of dilute sulfuric acid: (a) write the half-equation at the cathode and at the anode. (b) Combine them into the overall equation. (c) Show that your overall equation is balanced for both atoms and charge.",
            marks: 7,
            modelAnswer:
              "(a) Cathode: 2H+ + 2e- → H₂. Anode: 4OH- → O₂ + 2H₂O + 4e-.\n" +
              "(b) Multiply the cathode equation by 2 to match 4 electrons: 4H+ + 4e- → 2H₂. Add to the anode equation and cancel electrons: 4H+ + 4OH- → 2H₂ + O₂ + 2H₂O. Since 4H+ + 4OH- = 4H₂O, this simplifies to 4H₂O → 2H₂ + O₂ + 2H₂O, i.e. 2H₂O → 2H₂ + O₂.\n" +
              "(c) In 2H₂O → 2H₂ + O₂: H atoms = 4 left, 4 right; O atoms = 2 left, 2 right; charge = 0 on both sides. Balanced.",
            markScheme: [
              "Cathode: 2H+ + 2e- → H₂ [1]",
              "Anode: 4OH- → O₂ + 2H₂O + 4e- [1]",
              "Cathode multiplied by 2 to match electrons [1]",
              "Combined (4H+ + 4OH- → 2H₂ + O₂ + 2H₂O) [1]",
              "Simplifies to 2H₂O → 2H₂ + O₂ [1]",
              "Atom balance shown: H 4=4, O 2=2 [1]",
              "Charge balance shown: 0 = 0 [1]",
            ],
            commonError: "Students often stop at 4H+ + 4OH- → 2H₂ + O₂ + 2H₂O without combining H+ and OH- into water to reach the neat 2H₂O → 2H₂ + O₂.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Make the electrons equal (the anode has 4, the cathode 2).",
              "Add the equations and cancel the electrons.",
              "Combine H+ with OH- into water to simplify the final equation.",
            ],
            strategy: "Scale electrons → add → recognise H+ + OH- → H₂O to simplify",
            solutions: [
              {
                label: "Deriving the overall equation",
                steps: [
                  "Cathode: 2H+ + 2e- → H₂; anode: 4OH- → O₂ + 2H₂O + 4e-.",
                  "Multiply cathode by 2: 4H+ + 4e- → 2H₂.",
                  "Add: 4H+ + 4OH- → 2H₂ + O₂ + 2H₂O (electrons cancel).",
                  "4H+ + 4OH- = 4H₂O, so: 4H₂O → 2H₂ + O₂ + 2H₂O.",
                  "Subtract 2H₂O from each side: 2H₂O → 2H₂ + O₂.",
                  "Check: H 4=4, O 2=2, charge 0=0. Balanced.",
                ],
              },
            ],
          },
          {
            id: "chem-electrochemistry-bq3-03",
            question: "Explain the meaning of oxidation and reduction in terms of electrons, and show how the electrolysis of molten lead(II) bromide involves both. State which electrode is the site of each process.",
            marks: 6,
            modelAnswer:
              "Oxidation is the loss of electrons; reduction is the gain of electrons (OIL RIG).\n" +
              "In molten PbBr₂: at the cathode, Pb2+ + 2e- → Pb — the lead ion gains electrons, so it is reduced. The cathode is the site of reduction. At the anode, 2Br- → Br₂ + 2e- — the bromide ions lose electrons, so they are oxidised. The anode is the site of oxidation.\n" +
              "Because electrons lost at the anode equal those gained at the cathode, the overall process is a redox reaction: Pb2+ + 2Br- → Pb + Br₂.",
            markScheme: [
              "Oxidation = loss of electrons [1]",
              "Reduction = gain of electrons [1]",
              "Cathode: Pb2+ + 2e- → Pb, reduction [1]",
              "Anode: 2Br- → Br₂ + 2e-, oxidation [1]",
              "Cathode = reduction site; anode = oxidation site [1]",
              "Overall is redox / electrons balance / Pb2+ + 2Br- → Pb + Br₂ [1]",
            ],
            commonError: "Students sometimes describe oxidation only as 'gain of oxygen'. In electrolysis, define it by electron transfer: oxidation = loss of electrons.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "Define oxidation and reduction by electrons, not oxygen.",
              "At the cathode, does Pb2+ gain or lose electrons?",
              "At the anode, do bromide ions gain or lose electrons?",
            ],
          },
          {
            id: "chem-electrochemistry-bq3-04",
            question: "Molten aluminium oxide is electrolysed. (a) Write the cathode and anode half-equations. (b) Combine them to give the overall equation. (c) Explain, with reference to the half-equations, why far more electrical charge is needed to extract 1 mol of aluminium than 1 mol of sodium.",
            marks: 8,
            modelAnswer:
              "(a) Cathode: Al3+ + 3e- → Al. Anode: 2O2- → O₂ + 4e-.\n" +
              "(b) To balance electrons, multiply the cathode equation by 4 and the anode equation by 3 (lowest common multiple of 3 and 4 is 12): 4Al3+ + 12e- → 4Al and 6O2- → 3O₂ + 12e-. Add and cancel electrons: 4Al3+ + 6O2- → 4Al + 3O₂, i.e. 2Al₂O₃ → 4Al + 3O₂.\n" +
              "(c) Each Al3+ needs 3 electrons to be reduced (Al3+ + 3e- → Al), whereas each Na+ needs only 1 electron (Na+ + e- → Na). So extracting 1 mol of aluminium requires 3 mol of electrons, three times the charge needed for 1 mol of sodium.",
            markScheme: [
              "Cathode: Al3+ + 3e- → Al [1]",
              "Anode: 2O2- → O₂ + 4e- [1]",
              "Electrons balanced using LCM 12 (cathode ×4, anode ×3) [1]",
              "Overall: 4Al3+ + 6O2- → 4Al + 3O₂ / 2Al₂O₃ → 4Al + 3O₂ [1]",
              "Al3+ needs 3 electrons per atom [1]",
              "Na+ needs 1 electron per atom [1]",
              "1 mol Al needs 3 mol electrons (3× charge of Na) [1]",
              "Clear link: more electrons per atom → more charge [1]",
            ],
            commonError: "When balancing the overall equation, students often forget the lowest common multiple of the electrons (12), giving an unbalanced equation.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Cathode involves 3 electrons; anode involves 4. Find the LCM.",
              "Scale each half-equation to 12 electrons before adding.",
              "For (c), compare electrons per atom: 3 for Al vs 1 for Na.",
            ],
            strategy: "Use the LCM of electrons to combine; relate charge required to electrons per ion",
            solutions: [
              {
                label: "Combining and comparing charge",
                steps: [
                  "Cathode: Al3+ + 3e- → Al; anode: 2O2- → O₂ + 4e-.",
                  "LCM of 3 and 4 is 12. Multiply cathode by 4: 4Al3+ + 12e- → 4Al.",
                  "Multiply anode by 3: 6O2- → 3O₂ + 12e-.",
                  "Add and cancel 12e-: 4Al3+ + 6O2- → 4Al + 3O₂ (= 2Al₂O₃ → 4Al + 3O₂).",
                  "Charge comparison: 1 mol Al needs 3 mol e-; 1 mol Na needs 1 mol e-.",
                  "So aluminium needs three times the charge per mole of metal.",
                ],
              },
            ],
          },
          {
            id: "chem-electrochemistry-bq3-05",
            question: "An aqueous solution of copper(II) sulfate is electrolysed with inert electrodes. (a) Write the half-equation at each electrode. (b) Combine them into a balanced overall equation. (c) Verify the overall equation balances for charge.",
            marks: 7,
            modelAnswer:
              "(a) Cathode: Cu2+ + 2e- → Cu. Anode: 4OH- → O₂ + 2H₂O + 4e-.\n" +
              "(b) Multiply the cathode equation by 2 to give 4 electrons: 2Cu2+ + 4e- → 2Cu. Add to the anode equation and cancel electrons: 2Cu2+ + 4OH- → 2Cu + O₂ + 2H₂O.\n" +
              "(c) Charge: left side = 2(2+) + 4(1-) = +4 - 4 = 0; right side = 0 (all neutral species). Charge balances. Atoms: Cu 2=2, O 4=2+2=4, H 4=4. Balanced.",
            markScheme: [
              "Cathode: Cu2+ + 2e- → Cu [1]",
              "Anode: 4OH- → O₂ + 2H₂O + 4e- [1]",
              "Cathode multiplied by 2 to match 4 electrons [1]",
              "Overall: 2Cu2+ + 4OH- → 2Cu + O₂ + 2H₂O [1]",
              "Charge on left = 0 shown [1]",
              "Charge on right = 0 shown [1]",
              "Atoms balanced (Cu, O, H) [1]",
            ],
            commonError: "Students sometimes forget to multiply the cathode equation so that electrons match (2 vs 4), leaving an unbalanced overall equation.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "How many electrons in each half-equation? Make them equal.",
              "Multiply the cathode by 2 so both involve 4 electrons.",
              "Add, cancel electrons, then check charge: sum each side.",
            ],
            strategy: "Match electrons (×2 on cathode), add, cancel, then check atoms and charge",
            solutions: [
              {
                label: "Combine and verify",
                steps: [
                  "Cathode ×2: 2Cu2+ + 4e- → 2Cu.",
                  "Anode: 4OH- → O₂ + 2H₂O + 4e-.",
                  "Add: 2Cu2+ + 4OH- + 4e- → 2Cu + O₂ + 2H₂O + 4e-.",
                  "Cancel 4e-: 2Cu2+ + 4OH- → 2Cu + O₂ + 2H₂O.",
                  "Charge: left 2(2+)+4(1-) = 0; right 0. Atoms: Cu 2=2, O 4=4, H 4=4.",
                ],
              },
            ],
          },
          {
            id: "chem-electrochemistry-bq3-06",
            question: "During the electrolysis of molten lead(II) bromide, a current of 2 A flows. (a) Write the cathode half-equation. (b) If 0.4 mol of electrons passes through the cell, calculate the maximum mass of lead deposited. (Relative atomic mass of lead = 207.) (c) State one assumption you made.",
            marks: 6,
            modelAnswer:
              "(a) Pb2+ + 2e- → Pb.\n" +
              "(b) From the half-equation, 2 mol of electrons deposit 1 mol of lead. So 0.4 mol of electrons deposit 0.4 ÷ 2 = 0.2 mol of lead. Mass = moles × Ar = 0.2 × 207 = 41.4 g.\n" +
              "(c) Assumption: all the electrons are used to deposit lead (100% efficiency / no side reactions / all charge passes through the lead deposition).",
            markScheme: [
              "Cathode half-equation: Pb2+ + 2e- → Pb [1]",
              "Ratio: 2 mol electrons → 1 mol Pb [1]",
              "Moles of Pb = 0.4 ÷ 2 = 0.2 mol [1]",
              "Mass = moles × Ar = 0.2 × 207 [1]",
              "Mass = 41.4 g [1]",
              "Assumption: 100% efficiency / no side reactions / all charge deposits lead [1]",
            ],
            commonError: "Students sometimes forget the 2:1 electron-to-lead ratio and use 0.4 mol of lead directly, doubling the answer.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "From the half-equation, how many moles of electrons per mole of lead?",
              "Moles of Pb = moles of electrons ÷ 2.",
              "Mass = moles × relative atomic mass.",
            ],
            strategy: "Use the electron ratio from the half-equation, then mass = moles × Ar",
            solutions: [
              {
                label: "Mass of lead calculation",
                steps: [
                  "Half-equation: Pb2+ + 2e- → Pb, so 2 mol e- → 1 mol Pb.",
                  "Moles of Pb = 0.4 mol e- ÷ 2 = 0.2 mol.",
                  "Mass = moles × Ar = 0.2 × 207 = 41.4 g.",
                  "Answer: 41.4 g (3 s.f.), assuming all electrons deposit lead.",
                ],
              },
            ],
          },
          {
            id: "chem-electrochemistry-bq3-07",
            question: "(a) Write the half-equation for the oxidation of hydroxide ions at the anode. (b) Identify, with reasons, what is oxidised and what is reduced in this half-equation, in terms of oxidation states of oxygen. (c) Explain why this half-equation produces twice as many moles of electrons as moles of oxygen molecules.",
            marks: 6,
            modelAnswer:
              "(a) 4OH- → O₂ + 2H₂O + 4e-.\n" +
              "(b) Oxygen in OH- has oxidation state -2; in O₂ it is 0. The oxidation state increases (from -2 to 0), which is a loss of electrons, so oxygen is oxidised. (The hydrogen and oxygen that end up in water keep their oxidation states, so nothing here is reduced — this is a half-equation, the oxidation half of the overall redox.)\n" +
              "(c) The half-equation releases 4 electrons for every 1 molecule of O₂ formed (4OH- → O₂ + ... + 4e-). So the ratio of electrons to O₂ is 4 : 1 — that is, 4 mol of electrons per 1 mol of O₂, which is four times, not twice. (Note: it is four times as many electrons as O₂ molecules.)",
            markScheme: [
              "(a) 4OH- → O₂ + 2H₂O + 4e- [1]",
              "Oxygen in OH- is -2; in O₂ is 0 [1]",
              "Increase in oxidation state = oxidation / electrons lost [1]",
              "Identifies it as the oxidation half-equation [1]",
              "Electron : O₂ ratio is 4 : 1 [1]",
              "Correctly states it is four times (not twice) [1]",
            ],
            commonError: "This question contains a deliberate trap in part (c): the ratio is 4 electrons per O₂ (four times), not twice. Read half-equations carefully before answering ratio questions.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Write the balanced half-equation first.",
              "Track the oxidation state of oxygen: -2 in OH- vs 0 in O₂.",
              "Count electrons and O₂ molecules directly from the equation — is it 2:1 or 4:1?",
            ],
            strategy: "Use oxidation states to identify oxidation; read electron:product ratio straight from the balanced half-equation",
          },
          {
            id: "chem-electrochemistry-bq3-08",
            question: "A student writes the anode half-equation for the electrolysis of concentrated sodium chloride as 'Cl- → Cl + e-'. (a) Identify two errors in this half-equation. (b) Write the correct half-equation. (c) State whether the process is oxidation or reduction and explain how you know.",
            marks: 5,
            modelAnswer:
              "(a) Error 1: chlorine is not formed as single atoms — it is diatomic (Cl₂), so two chloride ions are needed. Error 2 (linked): the equation as written produces an atom Cl and only 1 electron; it does not represent the diatomic product correctly, so atoms/electrons are not properly balanced for the real product.\n" +
              "(b) Correct: 2Cl- → Cl₂ + 2e-.\n" +
              "(c) It is oxidation, because the chloride ions lose electrons (electrons appear on the product side / right-hand side). Loss of electrons is oxidation (OIL).",
            markScheme: [
              "Error: chlorine should be diatomic / Cl₂ not Cl [1]",
              "Error: should use 2 Cl- and 2 electrons / not balanced for the real product [1]",
              "Correct half-equation: 2Cl- → Cl₂ + 2e- [1]",
              "Oxidation [1]",
              "Because electrons are lost / appear on the right [1]",
            ],
            commonError: "The diatomic nature of chlorine (and other halogens and hydrogen) is the single most common source of half-equation errors.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "What is the molecular form of chlorine gas?",
              "How many chloride ions are needed to form one Cl₂ molecule?",
              "Electrons on the right means which process?",
            ],
          },
          {
            id: "chem-electrochemistry-bq3-09",
            question: "In a hydrogen–oxygen fuel cell operating in alkaline conditions: (a) write the half-equation for the oxidation of hydrogen at the negative electrode. (b) Write the half-equation for the reduction of oxygen at the positive electrode. (c) Show that the two combine to give the overall reaction 2H₂ + O₂ → 2H₂O.",
            marks: 7,
            modelAnswer:
              "(a) Negative electrode (oxidation): H₂ + 2OH- → 2H₂O + 2e-.\n" +
              "(b) Positive electrode (reduction): O₂ + 2H₂O + 4e- → 4OH-.\n" +
              "(c) Multiply the hydrogen half-equation by 2 to match 4 electrons: 2H₂ + 4OH- → 4H₂O + 4e-. Add to the oxygen half-equation: 2H₂ + 4OH- + O₂ + 2H₂O → 4H₂O + 4OH-. Cancel 4OH- from both sides and cancel 2H₂O (leaving 2H₂O on the right): 2H₂ + O₂ → 2H₂O.",
            markScheme: [
              "Hydrogen oxidation: H₂ + 2OH- → 2H₂O + 2e- [1]",
              "Oxygen reduction: O₂ + 2H₂O + 4e- → 4OH- [1]",
              "Hydrogen half-equation multiplied by 2 [1]",
              "Electrons cancel (4 each side) [1]",
              "OH- cancelled from both sides [1]",
              "H₂O cancelled correctly [1]",
              "Overall: 2H₂ + O₂ → 2H₂O [1]",
            ],
            commonError: "Students struggle to cancel water and hydroxide correctly. Track each species: 4OH- cancels fully; of 4H₂O on the right and 2H₂O on the left, 2H₂O remains on the right.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "challenge",
            hints: [
              "Make the electrons equal: the oxygen half has 4, the hydrogen half has 2.",
              "Add the equations and cancel electrons.",
              "Cancel OH- and H₂O that appear on both sides to reach the neat overall equation.",
            ],
            strategy: "Scale to equal electrons → add → cancel common species (OH-, H₂O)",
            solutions: [
              {
                label: "Deriving the fuel-cell overall equation",
                steps: [
                  "Anode (−): H₂ + 2OH- → 2H₂O + 2e-.",
                  "Cathode (+): O₂ + 2H₂O + 4e- → 4OH-.",
                  "Multiply anode by 2: 2H₂ + 4OH- → 4H₂O + 4e-.",
                  "Add: 2H₂ + 4OH- + O₂ + 2H₂O → 4H₂O + 4OH- (electrons cancel).",
                  "Cancel 4OH- from each side and 2H₂O from each side.",
                  "Result: 2H₂ + O₂ → 2H₂O.",
                ],
              },
            ],
          },
          {
            id: "chem-electrochemistry-bq3-10",
            question: "A current is passed through molten aluminium oxide and deposits 5.4 g of aluminium. (Relative atomic mass of aluminium = 27.) (a) Write the cathode half-equation. (b) Calculate the number of moles of aluminium deposited. (c) Calculate the number of moles of electrons that must have passed.",
            marks: 6,
            modelAnswer:
              "(a) Al3+ + 3e- → Al.\n" +
              "(b) Moles of Al = mass ÷ Ar = 5.4 ÷ 27 = 0.2 mol.\n" +
              "(c) From the half-equation, 3 mol of electrons are needed per mole of aluminium. So moles of electrons = 0.2 × 3 = 0.6 mol.",
            markScheme: [
              "Cathode half-equation: Al3+ + 3e- → Al [1]",
              "Moles of Al = 5.4 ÷ 27 [1]",
              "Moles of Al = 0.2 mol [1]",
              "Ratio: 3 mol electrons per mol Al [1]",
              "Moles of electrons = 0.2 × 3 [1]",
              "Moles of electrons = 0.6 mol [1]",
            ],
            commonError: "Students sometimes use a 1:1 electron ratio. The half-equation shows 3 electrons per aluminium atom, so multiply by 3.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "Moles of Al = mass ÷ relative atomic mass.",
              "How many electrons per Al atom from the half-equation?",
              "Moles of electrons = moles of Al × 3.",
            ],
            strategy: "moles of metal = mass ÷ Ar; moles of electrons = moles of metal × charge on ion",
            solutions: [
              {
                label: "Moles of electrons calculation",
                steps: [
                  "Half-equation: Al3+ + 3e- → Al (3 electrons per Al atom).",
                  "Moles of Al = 5.4 ÷ 27 = 0.2 mol.",
                  "Moles of electrons = 0.2 × 3 = 0.6 mol.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-electrochemistry-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Electroplating, copper purification, fuel cells, uses, and synoptic problems.",
        questions: [
          {
            id: "chem-electrochemistry-bq4-01",
            question: "Describe how a steel spoon could be electroplated with copper. In your answer state: (a) which electrode the spoon should be; (b) the material of the other electrode; (c) a suitable electrolyte; (d) the half-equation at the spoon.",
            marks: 6,
            modelAnswer:
              "(a) The spoon should be the cathode (negative electrode), so that copper is deposited on it.\n" +
              "(b) The other electrode (anode) should be a piece of copper, which dissolves to replenish the Cu2+ ions in solution.\n" +
              "(c) A suitable electrolyte is copper(II) sulfate solution (any soluble copper salt containing Cu2+).\n" +
              "(d) At the spoon (cathode): Cu2+ + 2e- → Cu.",
            markScheme: [
              "Spoon = cathode / negative electrode [1]",
              "Reason: so copper is deposited on it [1]",
              "Other electrode = copper [1]",
              "Electrolyte = copper(II) sulfate / soluble copper salt [1]",
              "Cathode half-equation: Cu2+ + 2e- → Cu [1]",
              "Electrolyte must contain ions of the plating metal (Cu2+) [1]",
            ],
            commonError: "Students often forget that the electrolyte must contain ions of the plating metal — pure water or a random salt will not work.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bq4-02",
            question: "Copper is purified by electrolysis. (a) State the material used for the anode and for the cathode. (b) Write the half-equation at each electrode. (c) Explain what happens to the impurities in the impure copper, and name one valuable substance recovered as a result.",
            marks: 7,
            modelAnswer:
              "(a) Anode: impure copper. Cathode: pure (thin sheet) copper.\n" +
              "(b) Anode: Cu → Cu2+ + 2e-. Cathode: Cu2+ + 2e- → Cu.\n" +
              "(c) As the impure anode dissolves, the copper goes into solution as Cu2+ and is deposited as pure copper on the cathode. Less reactive impurities (such as silver, gold and platinum) are not oxidised and fall to the bottom as anode sludge; more reactive impurities stay dissolved as ions in solution. A valuable substance recovered from the sludge is silver (or gold / platinum).",
            markScheme: [
              "Anode = impure copper [1]",
              "Cathode = pure copper [1]",
              "Anode half-equation: Cu → Cu2+ + 2e- [1]",
              "Cathode half-equation: Cu2+ + 2e- → Cu [1]",
              "Less reactive impurities fall as anode sludge [1]",
              "More reactive impurities remain in solution as ions [1]",
              "Valuable substance: silver / gold / platinum [1]",
            ],
            commonError: "Students sometimes swap the electrodes. The IMPURE copper is the anode (it dissolves); the PURE copper is the cathode (it grows).",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "Which electrode dissolves — the impure or the pure copper?",
              "Deposition (growth) happens at the cathode.",
              "Where do unreactive metals like silver and gold collect?",
            ],
          },
          {
            id: "chem-electrochemistry-bq4-03",
            question: "A hydrogen–oxygen fuel cell is being considered to power a city bus instead of a diesel engine. (a) Write the overall reaction. (b) Give two advantages of the fuel cell over the diesel engine. (c) Give two disadvantages or practical problems of using the fuel cell.",
            marks: 6,
            modelAnswer:
              "(a) 2H₂ + O₂ → 2H₂O.\n" +
              "(b) Advantages (any two): the only product is water, so there are no CO₂ or pollutant emissions at the point of use; it is more efficient than a combustion engine (more of the chemical energy becomes useful energy); it is quiet with no moving parts in the cell.\n" +
              "(c) Disadvantages (any two): hydrogen is flammable and difficult/expensive to store and transport (high pressure or very low temperature); hydrogen is often produced from fossil fuels, which releases CO₂; the cell uses expensive platinum catalysts; there is little refuelling infrastructure.",
            markScheme: [
              "Overall: 2H₂ + O₂ → 2H₂O [1]",
              "Advantage 1: only product is water / no CO₂ at point of use [1]",
              "Advantage 2: higher efficiency / quiet / no moving parts [1]",
              "Disadvantage 1: hydrogen hard to store/transport / flammable [1]",
              "Disadvantage 2: H₂ often from fossil fuels / expensive catalyst / poor infrastructure [1]",
              "Answer balanced (clear advantages AND disadvantages) [1]",
            ],
            commonError: "Saying the fuel cell is 'completely pollution-free' ignores that producing the hydrogen can release CO₂ if fossil fuels are used.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "Recall the single product of the fuel cell reaction.",
              "Compare emissions and efficiency with a diesel engine for advantages.",
              "Think about storing hydrogen, the catalyst, and how the hydrogen is made for disadvantages.",
            ],
          },
          {
            id: "chem-electrochemistry-bq4-04",
            question: "A factory electroplates spoons with silver using silver anodes and silver nitrate solution. (a) Write the half-equation at the anode and at the cathode. (b) Explain why the concentration of silver ions in the solution remains almost constant. (c) Explain what would happen to the plating if the silver anode were replaced by an inert carbon anode.",
            marks: 7,
            modelAnswer:
              "(a) Anode: Ag → Ag+ + e-. Cathode: Ag+ + e- → Ag.\n" +
              "(b) The silver anode dissolves, releasing Ag+ ions into the solution at the same rate that Ag+ ions are deposited on the spoons at the cathode. Removal and replacement balance, so [Ag+] stays almost constant.\n" +
              "(c) With a carbon (inert) anode, the anode would not dissolve; instead oxygen would be released there (4OH- → O₂ + 2H₂O + 4e-). Ag+ would still be deposited at the cathode but would no longer be replaced, so [Ag+] would steadily fall and eventually plating would slow and stop.",
            markScheme: [
              "Anode: Ag → Ag+ + e- [1]",
              "Cathode: Ag+ + e- → Ag [1]",
              "Anode dissolves, releasing Ag+ [1]",
              "Ag+ released at same rate as deposited → [Ag+] constant [1]",
              "Carbon anode: does not dissolve / O₂ released [1]",
              "4OH- → O₂ + 2H₂O + 4e- (or 'oxygen at anode') [1]",
              "[Ag+] falls / plating slows and stops [1]",
            ],
            commonError: "Students sometimes think a carbon anode would still keep [Ag+] constant. Only an active (silver) anode replenishes the silver ions.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "Write the active-anode half-equation for silver.",
              "Compare the rate Ag+ is removed at the cathode with the rate it is supplied at the anode.",
              "A carbon anode is inert — what gets discharged there instead?",
            ],
          },
          {
            id: "chem-electrochemistry-bq4-05",
            question: "Concentrated sodium chloride solution is electrolysed industrially (the chlor-alkali process). (a) Name the three useful products and state where each is obtained. (b) Write the half-equation at the anode and at the cathode. (c) State one large-scale use for each of chlorine and sodium hydroxide.",
            marks: 8,
            modelAnswer:
              "(a) Chlorine — obtained at the anode. Hydrogen — obtained at the cathode. Sodium hydroxide — left in the solution (the Na+ ions remain with the OH- as H+ is removed).\n" +
              "(b) Anode: 2Cl- → Cl₂ + 2e-. Cathode: 2H+ + 2e- → H₂.\n" +
              "(c) Chlorine: used to make bleach / to sterilise water / to make PVC / hydrochloric acid. Sodium hydroxide: used to make soap / paper / as a strong industrial alkali.",
            markScheme: [
              "Chlorine at the anode [1]",
              "Hydrogen at the cathode [1]",
              "Sodium hydroxide remains in solution [1]",
              "Anode half-equation: 2Cl- → Cl₂ + 2e- [1]",
              "Cathode half-equation: 2H+ + 2e- → H₂ [1]",
              "Use of chlorine: bleach / water treatment / PVC / HCl [1]",
              "Use of NaOH: soap / paper / strong alkali [1]",
              "All three products correctly placed [1]",
            ],
            commonError: "Students sometimes say sodium metal is a product. Sodium metal is NOT formed from solution — hydrogen is discharged at the cathode and NaOH remains in solution.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "Three products: a gas at each electrode, plus something left in solution.",
              "Sodium is too reactive to be deposited — what stays behind with the OH-?",
              "Recall everyday uses of bleach/PVC (chlorine) and soap/paper (NaOH).",
            ],
          },
          {
            id: "chem-electrochemistry-bq4-06",
            question: "A jeweller wants to gold-plate a copper ring using gold(III) chloride solution. (a) State which electrode the ring should be and write the half-equation that occurs there. (b) Explain why a gold anode is used rather than a carbon anode. (c) The gold layer is thicker at the sharp edges of the ring than on the flat faces. Suggest a reason.",
            marks: 7,
            modelAnswer:
              "(a) The ring is the cathode. Half-equation: Au3+ + 3e- → Au (gold is deposited on the ring).\n" +
              "(b) A gold anode is active and dissolves (Au → Au3+ + 3e-), replenishing the Au3+ ions removed at the cathode, so the [Au3+] stays constant and plating continues evenly. A carbon anode is inert: it would not replenish gold, oxygen would be released instead, and [Au3+] would fall.\n" +
              "(c) Electric field lines (and therefore the current density) concentrate at sharp edges and points. More Au3+ ions are attracted and discharged per unit area there, so the deposit grows thicker at the edges.",
            markScheme: [
              "Ring = cathode [1]",
              "Au3+ + 3e- → Au [1]",
              "Gold anode dissolves / Au → Au3+ + 3e- [1]",
              "Maintains [Au3+] / even plating [1]",
              "Carbon anode would release O₂ / not replenish gold / [Au3+] falls [1]",
              "Field/current density concentrates at sharp edges/points [1]",
              "More ions discharged per unit area there → thicker deposit [1]",
            ],
            commonError: "Writing Au+ + e- → Au instead of Au3+ + 3e- → Au. Gold(III) chloride contains the Au3+ ion, needing 3 electrons.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "challenge",
            hints: [
              "Gold must form ON the ring — which electrode causes deposition?",
              "Gold(III) means a 3+ charge: how many electrons per atom?",
              "Why does an active anode keep the plating even, and why are edges plated thicker?",
            ],
            strategy: "Identify cathode and correct charge (3+) → justify active anode → use field concentration at points",
          },
          {
            id: "chem-electrochemistry-bq4-07",
            question: "Explain why metals such as aluminium and sodium are extracted by electrolysis, whereas metals such as zinc and iron are usually extracted by heating their oxides with carbon. Relate your answer to the reactivity series and to the cost of the methods.",
            marks: 6,
            modelAnswer:
              "Aluminium and sodium are very reactive metals, placed above carbon in the reactivity series. Their ions hold on to electrons strongly, so carbon cannot reduce/displace them from their compounds. Electrolysis, which uses electrical energy to force the reduction, is the only way to extract them.\n" +
              "Zinc and iron are below carbon in the reactivity series, so carbon can reduce their oxides on heating (e.g. in a furnace), displacing the metal more cheaply. Electrolysis uses very large amounts of electricity and is therefore expensive, so it is used only when reduction with carbon is not possible.",
            markScheme: [
              "Aluminium/sodium are more reactive / above carbon in reactivity series [1]",
              "Carbon cannot reduce/displace metals more reactive than itself [1]",
              "So electrolysis (electrical energy) is required to reduce them [1]",
              "Zinc/iron are below carbon in reactivity series [1]",
              "Carbon can reduce their oxides (cheaper) [1]",
              "Electrolysis uses a lot of electricity / is expensive [1]",
            ],
            commonError: "Students sometimes forget the cost argument: electrolysis is reserved for reactive metals because it is energy-intensive and expensive.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "core",
            hints: [
              "Where do aluminium and sodium sit relative to carbon in the reactivity series?",
              "Can carbon reduce a metal that is more reactive than carbon?",
              "Why not use the cheaper carbon method for every metal?",
            ],
            strategy: "Use the position relative to carbon in the reactivity series to choose the method, then justify by cost",
          },
          {
            id: "chem-electrochemistry-bq4-08",
            question: "A student electroplates two identical iron nails with nickel, connected in series in the same circuit, but nail A is much larger than nail B. After 20 minutes, the mass of nickel on each nail is measured. (a) Predict whether the masses of nickel deposited will be equal or different, and explain. (b) Suggest how the thickness of the coating might differ. (c) Write the half-equation for nickel being deposited (nickel forms Ni2+ ions).",
            marks: 6,
            modelAnswer:
              "(a) The masses of nickel deposited on A and B will be (approximately) equal. In a series circuit the same charge flows through both cells/nails, so the same number of moles of electrons is delivered to each, depositing the same number of moles (and mass) of nickel.\n" +
              "(b) The coating on the larger nail A would be thinner, because the same mass of nickel is spread over a larger surface area; on the smaller nail B the same mass covers a smaller area, giving a thicker coating.\n" +
              "(c) Ni2+ + 2e- → Ni.",
            markScheme: [
              "Masses approximately equal [1]",
              "Reason: series circuit → same charge / same moles of electrons → same moles of nickel [1]",
              "Larger nail A: thinner coating [1]",
              "Because same mass spread over larger surface area [1]",
              "Smaller nail B: thicker coating [1]",
              "Half-equation: Ni2+ + 2e- → Ni [1]",
            ],
            commonError: "Students sometimes think the bigger nail collects more nickel. In series the charge (and so the mass deposited) is the same; only the thickness differs because of surface area.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "challenge",
            hints: [
              "In a series circuit, is the charge through each nail the same or different?",
              "Same charge → same moles of electrons → same mass of metal.",
              "Same mass over a larger area means what for the thickness?",
            ],
            strategy: "Series → equal charge → equal mass; then divide mass by area to compare thickness",
          },
          {
            id: "chem-electrochemistry-bq4-09",
            question: "Compare the electrolysis of molten lead(II) bromide with the electrolysis of aqueous sodium chloride. For each, state the cathode product and anode product, and explain why the cathode products differ even though both compounds contain a metal and a non-metal.",
            marks: 7,
            modelAnswer:
              "Molten PbBr₂: cathode product is lead (Pb2+ + 2e- → Pb); anode product is bromine (2Br- → Br₂ + 2e-). There is no water, so only the compound's ions are present and the metal is discharged.\n" +
              "Aqueous NaCl: cathode product is hydrogen (2H+ + 2e- → H₂); anode product is chlorine (concentrated, 2Cl- → Cl₂ + 2e-).\n" +
              "The cathode products differ because of water and reactivity. In molten PbBr₂ there is no water, so Pb2+ is discharged to give lead. In aqueous NaCl, water provides H+; sodium is more reactive than hydrogen, so hydrogen is discharged instead of sodium. Lead is less reactive (and there is no water to provide H+ in the molten case), so the metal is obtained there.",
            markScheme: [
              "Molten PbBr₂ cathode: lead / Pb [1]",
              "Molten PbBr₂ anode: bromine / Br₂ [1]",
              "Aqueous NaCl cathode: hydrogen / H₂ [1]",
              "Aqueous NaCl anode: chlorine / Cl₂ [1]",
              "Difference due to presence of water in NaCl(aq) [1]",
              "Sodium more reactive than hydrogen → H₂ discharged [1]",
              "Molten has no water / lead discharged directly [1]",
            ],
            commonError: "Students sometimes attribute the difference only to the different metals, missing the key role of water (which provides H+) in the aqueous case.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "challenge",
            hints: [
              "List the products for each cell first.",
              "What is present in the aqueous cell that is absent in the molten cell?",
              "Compare each metal's reactivity with hydrogen to explain the cathode products.",
            ],
            strategy: "Contrast molten (no water) vs aqueous (water provides H+) and use reactivity vs hydrogen",
          },
          {
            id: "chem-electrochemistry-bq4-10",
            question: "An object is to be chromium-plated to resist corrosion. The chromium ion in the electrolyte is Cr3+. A charge equivalent to 0.6 mol of electrons is passed. (a) Write the cathode half-equation. (b) Calculate the maximum mass of chromium deposited. (Relative atomic mass of chromium = 52.) (c) State and explain one reason the actual mass deposited might be less than your calculated value.",
            marks: 7,
            modelAnswer:
              "(a) Cr3+ + 3e- → Cr.\n" +
              "(b) Each chromium atom requires 3 electrons. Moles of Cr = 0.6 ÷ 3 = 0.2 mol. Mass = moles × Ar = 0.2 × 52 = 10.4 g.\n" +
              "(c) The actual mass might be less because not all the charge goes into depositing chromium — some current may be used in a side reaction (for example, discharging H+ to form hydrogen at the cathode), so the process is less than 100% efficient.",
            markScheme: [
              "Cathode half-equation: Cr3+ + 3e- → Cr [1]",
              "Electrons per Cr atom = 3 [1]",
              "Moles of Cr = 0.6 ÷ 3 = 0.2 mol [1]",
              "Mass = moles × Ar = 0.2 × 52 [1]",
              "Mass = 10.4 g [1]",
              "Actual mass less because some current does a side reaction / hydrogen also discharged [1]",
              "Process less than 100% efficient [1]",
            ],
            commonError: "Forgetting the 3 electrons per Cr3+ ion — using a 1:1 ratio would treble the answer incorrectly.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Cr3+ needs how many electrons per atom?",
              "Moles of Cr = moles of electrons ÷ 3, then mass = moles × Ar.",
              "Why might real electroplating be less than 100% efficient?",
            ],
            strategy: "moles of metal = mol electrons ÷ charge on ion; mass = moles × Ar; then consider efficiency losses",
            solutions: [
              {
                label: "Mass of chromium calculation",
                steps: [
                  "Half-equation: Cr3+ + 3e- → Cr, so 3 mol e- → 1 mol Cr.",
                  "Moles of Cr = 0.6 ÷ 3 = 0.2 mol.",
                  "Mass = moles × Ar = 0.2 × 52 = 10.4 g.",
                  "Real mass is lower if some charge drives a side reaction (e.g. H₂), so efficiency < 100%.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
