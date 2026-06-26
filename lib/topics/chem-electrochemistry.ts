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
        "In the industrial extraction of aluminium, molten cryolite (Na₃AlF₆) is used as a solvent to lower the melting point of Al₂O₃ from ~2050 °C to ~950 °C, making the process economically viable.\n\n" +
        "**Inert vs active electrodes:** Carbon (graphite) electrodes are **inert** — they do not react with the electrolyte or products. However, in aluminium extraction the oxygen produced reacts with the carbon anodes, forming CO₂ and gradually burning them away, so they must be replaced regularly.",
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
        "Industrial extraction of aluminium uses electrolysis of molten Al₂O₃ dissolved in cryolite.",
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
        "- Remaining solution becomes enriched in Na+ and OH- → sodium hydroxide (NaOH) solution\n" +
        "- Industrial importance: chlorine (PVC, bleach), hydrogen (fuel), sodium hydroxide (soap, paper)\n\n" +
        "**Example 3: Copper(II) sulfate with carbon (inert) electrodes**\n\n" +
        "Ions: Cu2+, SO₄2-, H+, OH-\n\n" +
        "- Cathode: Cu2+ is less reactive than H, so **copper metal** is deposited (Cu2+ + 2e- → Cu)\n" +
        "- Anode (inert, no halide): **O₂** evolved (4OH- → O₂ + 2H₂O + 4e-)\n" +
        "- The blue colour of the solution fades as Cu2+ ions are removed.\n\n" +
        "**Example 4: Copper(II) sulfate with copper electrodes (active)**\n\n" +
        "- Cathode: Cu2+ + 2e- → Cu (copper deposited, cathode grows)\n" +
        "- Anode: Cu → Cu2+ + 2e- (copper anode dissolves)\n" +
        "- The [Cu2+] in solution stays **constant** — ions removed at cathode are replaced from anode.\n" +
        "- This is used in **electroplating** and **copper purification**.",
      keyPoints: [
        "Dilute H₂SO₄: H₂ at cathode, O₂ at anode — net decomposition of water.",
        "Concentrated brine: H₂ at cathode, Cl₂ at anode, NaOH in solution (chlor-alkali process).",
        "CuSO₄ with carbon electrodes: copper deposited at cathode, O₂ at anode.",
        "CuSO₄ with copper electrodes: cathode grows, anode dissolves, [Cu2+] stays constant.",
        "The blue colour of CuSO₄ solution fades with inert electrodes but stays constant with copper electrodes.",
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
        "**Hydrogen–oxygen fuel cell:** A fuel cell converts chemical energy directly to electrical energy without burning.\n\n" +
        "- H₂ is oxidised at the anode: H₂ + 2OH- → 2H₂O + 2e- (alkaline) OR H₂ → 2H+ + 2e- (acidic)\n" +
        "- O₂ is reduced at the cathode: O₂ + 2H₂O + 4e- → 4OH- (alkaline)\n" +
        "- Overall: 2H₂ + O₂ → 2H₂O\n\n" +
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
      "The hydrogen–oxygen fuel cell produces electricity and water as its only product.",
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
        description: "Core concepts: ion movement, electrode products in molten and aqueous systems, half-equations.",
        questions: [
          {
            id: "chem-electrochemistry-bm1-01",
            question: "PLACEHOLDER_UNIQUE_START Which statement correctly describes what happens at the cathode during electrolysis?",
            options: [
              "Anions are oxidised and give up electrons.",
              "Cations are reduced and gain electrons.",
              "Cations are oxidised and lose electrons.",
              "Anions are reduced and gain electrons.",
            ],
            answerIndex: 1,
            explanation: "At the cathode (negative electrode), cations are attracted and gain electrons — this is reduction. OIL RIG: Reduction Is Gain.",
            guideRef: "What is Electrolysis?",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bank-mcq1-q02",
            question: "Molten potassium iodide is electrolysed. What is the product at the anode?",
            options: ["Potassium", "Iodine", "Oxygen", "Hydrogen"],
            answerIndex: 1,
            explanation: "In molten KI, only K+ and I- ions are present. I- ions (anions) move to the anode and are oxidised: 2I- → I₂ + 2e-. Iodine is the product.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bank-mcq1-q03",
            question: "Which of the following is the correct half-equation for the production of oxygen at an inert anode?",
            options: [
              "O₂ + 4e- → 2O2-",
              "2O2- → O₂ + 4e-",
              "4OH- → O₂ + 2H₂O + 4e-",
              "2H₂O → O₂ + 4H+ + 4e-",
            ],
            answerIndex: 2,
            explanation: "Oxygen is produced at the anode by oxidation of hydroxide ions from water: 4OH- → O₂ + 2H₂O + 4e-. This is the standard IGCSE half-equation. Option D is also a valid representation in some contexts, but option C is the standard form using OH- ions.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "Oxygen is produced by oxidation (loss of electrons) at the anode.",
              "Which ion from water is oxidised — H+ or OH-?",
              "Electrons must appear on the right (oxidation).",
            ],
          },
          {
            id: "chem-electrochemistry-bank-mcq1-q04",
            question: "Aqueous zinc sulfate is electrolysed with carbon electrodes. What is produced at the cathode?",
            options: ["Zinc metal", "Hydrogen gas", "Sulfur dioxide", "Oxygen gas"],
            answerIndex: 1,
            explanation: "Zinc is more reactive than hydrogen. Applying the cathode rule: more reactive metal → H₂ is evolved (2H+ + 2e- → H₂). Zinc is NOT deposited.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "core",
            hints: [
              "The ions present are Zn2+, SO₄2-, H+, OH-.",
              "Compare zinc and hydrogen in the reactivity series. Where does zinc sit?",
              "The cathode rule: if the metal is more reactive than H, which species is discharged?",
            ],
          },
          {
            id: "chem-electrochemistry-bank-mcq1-q05",
            question: "During the electrolysis of copper(II) sulfate with copper electrodes, which of the following is correct?",
            options: [
              "The anode dissolves and the concentration of Cu2+ increases.",
              "The cathode dissolves and the concentration of Cu2+ decreases.",
              "The anode dissolves and the concentration of Cu2+ stays constant.",
              "Both electrodes dissolve and the solution turns colourless.",
            ],
            answerIndex: 2,
            explanation: "The copper anode dissolves (Cu → Cu2+ + 2e-), releasing Cu2+ at the same rate it is deposited at the cathode (Cu2+ + 2e- → Cu), so [Cu2+] stays constant.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "Write the half-equation for the copper anode.",
              "What is the rate of Cu2+ production vs. consumption?",
              "Net change in Cu2+ concentration?",
            ],
          },
          {
            id: "chem-electrochemistry-bank-mcq1-q06",
            question: "A fuel cell uses hydrogen and oxygen. Which statement about it is correct?",
            options: [
              "It burns hydrogen to produce electricity.",
              "It converts chemical energy directly to electrical energy, producing only water.",
              "It produces carbon dioxide and water as products.",
              "It requires combustion to generate a current.",
            ],
            answerIndex: 1,
            explanation: "A fuel cell converts chemical energy directly to electrical energy without combustion. The overall reaction is 2H₂ + O₂ → 2H₂O. The only product is water — no CO₂ is produced.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "warmup",
          },
        ],
      },
      {
        id: "chem-electrochemistry-bank-mcq-2",
        title: "Electrochemistry MCQ Paper 2",
        description: "Application, prediction of products for unfamiliar electrolytes, half-equations, and synoptic questions.",
        questions: [
          {
            id: "chem-electrochemistry-bank-mcq2-q01",
            question: "Aqueous silver nitrate (AgNO₃) is electrolysed with carbon electrodes. Which product forms at the cathode?",
            options: ["Hydrogen gas", "Silver metal", "Nitrogen dioxide", "Oxygen gas"],
            answerIndex: 1,
            explanation: "Ag+ ions are less reactive than hydrogen (silver is below hydrogen in the reactivity series). Applying the cathode selectivity rule: Ag+ + e- → Ag. Silver metal is deposited.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "core",
            hints: [
              "List the ions: Ag+, NO₃-, H+, OH-.",
              "Where does silver sit in the reactivity series relative to hydrogen?",
              "Apply the cathode rule for a metal less reactive than hydrogen.",
            ],
          },
          {
            id: "chem-electrochemistry-bank-mcq2-q02",
            question: "The half-equation 2Cl- → Cl₂ + 2e- represents a reaction at the anode. Which term best describes this process?",
            options: ["Reduction", "Precipitation", "Oxidation", "Neutralisation"],
            answerIndex: 2,
            explanation: "Cl- loses electrons (2Cl- → Cl₂ + 2e-). Loss of electrons is oxidation (OIL: Oxidation Is Loss). This occurs at the anode.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bank-mcq2-q03",
            question: "Predict-the-products challenge: Concentrated aqueous copper(II) bromide (CuBr₂) is electrolysed with carbon electrodes. Which row correctly identifies the products?",
            options: [
              "Cathode: H₂; Anode: O₂",
              "Cathode: Cu; Anode: Br₂",
              "Cathode: H₂; Anode: Br₂",
              "Cathode: Cu; Anode: O₂",
            ],
            answerIndex: 1,
            explanation: "Cathode: Cu2+ is less reactive than H, so Cu is deposited (Cu2+ + 2e- → Cu). Anode: Br- is a concentrated halide, so Br₂ is evolved (2Br- → Br₂ + 2e-). This is a predict-the-products challenge combining both selectivity rules.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "challenge",
            hints: [
              "List ALL ions: Cu2+, Br-, H+, OH-.",
              "Cathode: compare Cu2+ reactivity with H. Is Cu above or below H in reactivity?",
              "Anode: is Br- a halide? Is the solution concentrated? Apply the halide rule.",
              "Check: do both selectivity rules give a consistent answer?",
            ],
            strategy: "List all ions → apply cathode rule → apply anode halide/concentration rule",
          },
          {
            id: "chem-electrochemistry-bank-mcq2-q04",
            question: "During the industrial extraction of aluminium by electrolysis, the carbon anodes need to be replaced regularly. Why?",
            options: [
              "They melt at the high temperature used.",
              "They dissolve into the molten electrolyte.",
              "They react with the oxygen produced and burn away.",
              "They become coated with aluminium and stop conducting.",
            ],
            answerIndex: 2,
            explanation: "Oxygen is produced at the carbon anodes (2O2- → O₂ + 4e-). At the very high temperature (~950 °C), oxygen reacts with carbon: C + O₂ → CO₂. The anodes gradually burn away and must be replaced. This is a significant operating cost.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "core",
            hints: [
              "What gas is produced at the anode during electrolysis of molten Al₂O₃?",
              "Carbon + oxygen at high temperature — what reaction occurs?",
            ],
          },
          {
            id: "chem-electrochemistry-bank-mcq2-q05",
            question: "Half-equation challenge: Which of the following is the correctly balanced half-equation for the reduction of Al3+ ions at the cathode?",
            options: [
              "Al3+ + e- → Al",
              "Al3+ + 3e- → Al",
              "Al → Al3+ + 3e-",
              "Al3+ → Al + 3e-",
            ],
            answerIndex: 1,
            explanation: "Al3+ gains 3 electrons to become Al (reduction, electrons on left): Al3+ + 3e- → Al. Option A is unbalanced for charge. Option C is the reverse (anode oxidation). Option D places electrons on the wrong side.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "Al has a charge of 3+. How many electrons are needed to neutralise that charge?",
              "Reduction = gain of electrons → electrons appear on the LEFT of the arrow.",
            ],
          },
          {
            id: "chem-electrochemistry-bank-mcq2-q06",
            question: "A student claims: 'In electrolysis, the cathode always produces a metal.' This claim is incorrect. Which example best disproves it?",
            options: [
              "Electrolysis of molten lead(II) bromide.",
              "Electrolysis of aqueous copper(II) sulfate with carbon electrodes.",
              "Electrolysis of aqueous sodium chloride with carbon electrodes.",
              "Electroplating with a silver anode.",
            ],
            answerIndex: 2,
            explanation: "In aqueous NaCl, Na+ is more reactive than H, so H₂ gas (not sodium metal) is produced at the cathode: 2H+ + 2e- → H₂. This disproves the claim. The other examples do produce metal (Pb, Cu, Ag) at the cathode.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "challenge",
            hints: [
              "Consider which electrolytes contain a metal ion that is MORE reactive than hydrogen.",
              "If the metal is more reactive than H, what is the cathode product?",
              "Which option contains Na+ (a very reactive metal ion)?",
            ],
            strategy: "Apply cathode selectivity rule: find a case where the metal is above H in reactivity",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-electrochemistry-bank-qa-1",
        title: "Electrochemistry Structured Questions Paper 1",
        description: "Electrode reactions, half-equations, and explanation of selectivity rules.",
        questions: [
          {
            id: "chem-electrochemistry-bank-qa1-q01",
            question: "Aqueous copper(II) sulfate solution is electrolysed using carbon electrodes. (a) List all ions present in the solution, including those from water. (b) State the product at each electrode and write the half-equation for each electrode reaction. (c) Describe how the appearance of the solution changes during electrolysis and explain why.",
            marks: 8,
            modelAnswer:
              "(a) Cu2+, SO₄2-, H+, OH- (from the partial ionisation of water).\n" +
              "(b) Cathode: copper deposited. Half-equation: Cu2+ + 2e- → Cu. Anode: oxygen evolved. Half-equation: 4OH- → O₂ + 2H₂O + 4e-.\n" +
              "(c) The blue colour of the solution fades and eventually becomes colourless (or very pale). This is because Cu2+ ions are continuously removed at the cathode and deposited as copper metal. The Cu2+ concentration decreases, and since Cu2+ is responsible for the blue colour, the solution becomes less blue.",
            markScheme: [
              "Cu2+, SO₄2- [1]",
              "H+, OH- from water [1]",
              "Cathode product: copper / Cu [1]",
              "Cathode half-equation: Cu2+ + 2e- → Cu, balanced [1]",
              "Anode product: oxygen / O₂ [1]",
              "Anode half-equation: 4OH- → O₂ + 2H₂O + 4e-, balanced [1]",
              "Colour fades / becomes less blue / eventually colourless [1]",
              "Because [Cu2+] decreases as Cu is deposited / Cu2+ causes blue colour [1]",
            ],
            commonError: "Students often omit H+ and OH- from the ion list. Always remember: water partially ionises in any aqueous solution.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "Water in the solution ionises: H₂O ⇌ H+ + OH-. Add these to your ion list.",
              "Is Cu2+ more or less reactive than H? Apply the cathode rule.",
              "No halide is present, so what is the default anode product?",
              "Link the blue colour of the solution to the ion responsible for it.",
            ],
            strategy: "List all ions (including from water) → apply selectivity rules → link observation to ion change",
          },
          {
            id: "chem-electrochemistry-bank-qa1-q02",
            question: "A student electrolyses aqueous lead(II) nitrate, Pb(NO₃)₂, using carbon electrodes. (a) Predict the product at each electrode. (b) Write a balanced half-equation for each electrode reaction. (c) Write the overall equation for the electrolysis by combining the half-equations.",
            marks: 6,
            modelAnswer:
              "(a) Cathode: lead metal. Pb2+ is less reactive than H, so lead is deposited. Anode: oxygen gas. No halide is present, so OH- is discharged.\n" +
              "(b) Cathode: Pb2+ + 2e- → Pb. Anode: 4OH- → O₂ + 2H₂O + 4e-.\n" +
              "(c) To combine: multiply cathode equation ×2 to match 4e-: 2Pb2+ + 4e- → 2Pb. Add to anode: 2Pb2+ + 4OH- → 2Pb + O₂ + 2H₂O.",
            markScheme: [
              "Cathode: lead / Pb [1]",
              "Anode: oxygen / O₂ [1]",
              "Cathode half-equation: Pb2+ + 2e- → Pb [1]",
              "Anode half-equation: 4OH- → O₂ + 2H₂O + 4e- [1]",
              "Half-equations multiplied correctly to cancel electrons [1]",
              "Overall: 2Pb2+ + 4OH- → 2Pb + O₂ + 2H₂O (balanced atoms and charge) [1]",
            ],
            commonError: "When combining half-equations, students often forget to multiply one equation to balance the electrons. The electrons must cancel completely.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "Find the ions: Pb2+, NO₃-, H+, OH-.",
              "Apply cathode rule: Pb is below H in reactivity → Pb deposited.",
              "Apply anode rule: no halide → O₂ from OH-.",
              "To combine: make electrons equal on both sides by multiplying — then add and cancel electrons.",
            ],
            strategy: "Predict products → write half-equations → cross-multiply electrons → add and simplify",
            solutions: [
              {
                label: "Combining half-equations",
                steps: [
                  "Cathode: Pb2+ + 2e- → Pb (involves 2e-)",
                  "Anode: 4OH- → O₂ + 2H₂O + 4e- (involves 4e-)",
                  "Multiply cathode ×2: 2Pb2+ + 4e- → 2Pb",
                  "Now electrons match (4e- each side). Add both equations.",
                  "Cancel 4e-: 2Pb2+ + 4OH- → 2Pb + O₂ + 2H₂O",
                  "Check: Pb atoms 2=2 ✓, O atoms 4=3 (wait — O: left 4, right 2+2=4) ✓, H: left 4, right 4 ✓, charge: left 4+−4=0, right 0 ✓",
                ],
              },
            ],
          },
          {
            id: "chem-electrochemistry-bank-qa1-q03",
            question: "Describe and explain the industrial extraction of aluminium by electrolysis. Include: the electrolyte used, the role of cryolite, the electrode reactions, why the anodes need replacement, and one environmental concern.",
            marks: 8,
            modelAnswer:
              "Aluminium is extracted by electrolysis of molten aluminium oxide (Al₂O₃), which is an ionic compound. Al₂O₃ has a very high melting point (~2050 °C), so cryolite (Na₃AlF₆) is dissolved in it. This lowers the melting point to ~950 °C, saving large amounts of energy.\n" +
              "Cathode reaction (reduction): Al3+ + 3e- → Al. Liquid aluminium sinks to the bottom and is tapped off.\n" +
              "Anode reaction (oxidation): 2O2- → O₂ + 4e-. Oxygen gas is produced.\n" +
              "The carbon anodes react with the oxygen at high temperature: C + O₂ → CO₂. The anodes gradually burn away and must be regularly replaced — a significant operating cost.\n" +
              "Environmental concern: the process uses very large amounts of electricity, often generated from fossil fuels, producing large CO₂ emissions and contributing to climate change. Alternatively: fluoride gases from cryolite are toxic and require scrubbing.",
            markScheme: [
              "Electrolyte: molten Al₂O₃ / aluminium oxide [1]",
              "Cryolite lowers melting point / saves energy [1]",
              "Cathode half-equation: Al3+ + 3e- → Al [1]",
              "Anode half-equation: 2O2- → O₂ + 4e- [1]",
              "Aluminium collected as liquid / tapped off [1]",
              "Anodes react with O₂ / burn to CO₂ / must be replaced [1]",
              "High electricity use → CO₂ emissions / fossil fuel use / climate change OR toxic fluoride gases [1]",
              "Anodes replaced regularly / ongoing operating cost [1]",
            ],
            commonError: "Students often say cryolite 'dissolves the aluminium oxide' rather than acting as a solvent to lower the melting point.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "challenge",
            hints: [
              "Why is molten Al₂O₃ alone impractical? Think about its melting point.",
              "What is the role of cryolite — is it providing new ions, or is it a solvent?",
              "Write both half-equations. At 950 °C, what happens when O₂ meets a carbon electrode?",
              "Think about the energy source for the electricity — connect this to environmental impact.",
            ],
            strategy: "Describe electrolyte → explain cryolite → write half-equations → link anode burning to costs → evaluate environmental impact",
          },
          {
            id: "chem-electrochemistry-bank-qa1-q04",
            question: "Explain the advantages and disadvantages of the hydrogen–oxygen fuel cell compared to a conventional internal combustion engine. In your answer, refer to: efficiency, products, and practical limitations.",
            marks: 6,
            modelAnswer:
              "Advantages: (1) Higher efficiency — a fuel cell converts chemical energy directly to electrical energy at ~60% efficiency, compared to ~25% for an internal combustion engine where much energy is lost as heat. (2) Cleaner product — the only product of the fuel cell reaction (2H₂ + O₂ → 2H₂O) is water, producing no CO₂, NOₓ, or particulates. (3) Quiet operation with no moving parts in the fuel cell itself.\n" +
              "Disadvantages: (1) Hydrogen storage — H₂ is a flammable gas and must be stored at high pressure or as a cryogenic liquid, creating safety risks and engineering challenges. (2) Hydrogen production — most H₂ is currently made from natural gas (steam reforming), which releases CO₂, negating some environmental benefits. (3) Cost — platinum catalysts are expensive and rare. (4) Infrastructure — few hydrogen refuelling stations currently exist.",
            markScheme: [
              "Higher efficiency than internal combustion engine [1]",
              "Only product is water / no CO₂ / no harmful emissions [1]",
              "H₂ difficult to store / high pressure or cryogenic / flammable [1]",
              "H₂ production often uses fossil fuels / not truly clean unless H₂ from renewables [1]",
              "Expensive platinum catalyst required [1]",
              "Lack of infrastructure / refuelling stations [1]",
            ],
            commonError: "Students often state 'the fuel cell produces no pollution' without acknowledging that H₂ production itself may generate CO₂ if fossil fuels are used.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "Compare energy efficiency: how much of the chemical energy becomes useful electrical energy in each system?",
              "List the products of H₂ combustion vs. the fuel cell reaction. What does each emit?",
              "Where does the H₂ come from? Is this source clean?",
              "Think about infrastructure, cost, and safety challenges.",
            ],
            strategy: "Structure as: Advantage 1, Advantage 2, Disadvantage 1, Disadvantage 2 — with specific data where possible",
          },
        ],
      },
      {
        id: "chem-electrochemistry-bank-qa-2",
        title: "Electrochemistry Structured Questions Paper 2",
        description: "Challenge and synoptic questions: unfamiliar electrolytes, copper purification, half-equation derivation, and analysis.",
        questions: [
          {
            id: "chem-electrochemistry-bank-qa2-q01",
            question: "Predict-the-products challenge: A student electrolyses a concentrated solution of nickel(II) chloride, NiCl₂, using carbon electrodes. Nickel is below hydrogen in the reactivity series. (a) Identify all ions present, including those from water. (b) Predict and explain the product at each electrode. (c) Write a half-equation for each electrode reaction. (d) How would the products change if the solution were made very dilute? Explain your answer.",
            marks: 9,
            modelAnswer:
              "(a) Ni2+, Cl-, H+, OH-.\n" +
              "(b) Cathode: nickel metal is deposited. Ni2+ is less reactive than H (below H in reactivity series), so the nickel ion is preferentially discharged: Ni2+ + 2e- → Ni.\n" +
              "Anode: chlorine gas is evolved. The solution contains a concentrated halide (Cl-), so the halide rule applies: 2Cl- → Cl₂ + 2e-.\n" +
              "(c) Cathode: Ni2+ + 2e- → Ni. Anode: 2Cl- → Cl₂ + 2e-.\n" +
              "(d) In very dilute solution, [Cl-] is low. The relative proportion of OH- ions at the anode increases. OH- is preferentially discharged over the low-concentration Cl-, so oxygen is produced instead: 4OH- → O₂ + 2H₂O + 4e-. The cathode product remains nickel (Ni2+ is still less reactive than H regardless of concentration).",
            markScheme: [
              "Ni2+, Cl- [1]",
              "H+, OH- from water [1]",
              "Cathode: Ni / nickel deposited; reason: Ni is less reactive than H [1]",
              "Anode: Cl₂; reason: concentrated halide present [1]",
              "Cathode half-equation: Ni2+ + 2e- → Ni [1]",
              "Anode half-equation: 2Cl- → Cl₂ + 2e- [1]",
              "Dilute: anode product changes to O₂ [1]",
              "Reason: low [Cl-] means OH- is preferentially discharged / 4OH- → O₂ + 2H₂O + 4e- [1]",
              "Cathode product remains nickel / Ni reactivity unchanged by concentration [1]",
            ],
            commonError: "Students often apply the concentration rule to the cathode as well as the anode. Concentration only affects the anode product. The cathode product depends on reactivity, not concentration.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "challenge",
            hints: [
              "Step 1: Write out ALL ions (including H+ and OH- from water).",
              "Step 2: Cathode rule — is Ni above or below H in reactivity?",
              "Step 3: Anode rule — is Cl- a halide? Is the solution concentrated?",
              "Step 4: For the dilute case — only the anode is affected by concentration. Does the cathode rule change?",
            ],
            strategy: "List ions → apply reactivity rule for cathode → apply halide/concentration rule for anode → consider what changes with dilution",
          },
          {
            id: "chem-electrochemistry-bank-qa2-q02",
            question: "Half-equation challenge: Write balanced half-equations for each of the following electrode reactions, state whether each is oxidation or reduction, and name the electrode at which each occurs. (a) Formation of iodine from iodide ions. (b) Deposition of silver from silver ions. (c) Formation of oxygen from hydroxide ions.",
            marks: 9,
            modelAnswer:
              "(a) 2I- → I₂ + 2e-. Oxidation (electrons lost). Occurs at the anode (+).\n" +
              "(b) Ag+ + e- → Ag. Reduction (electrons gained). Occurs at the cathode (-).\n" +
              "(c) 4OH- → O₂ + 2H₂O + 4e-. Oxidation (electrons lost). Occurs at the anode (+).",
            markScheme: [
              "(a) 2I- → I₂ + 2e- [1]; oxidation [1]; anode [1]",
              "(b) Ag+ + e- → Ag [1]; reduction [1]; cathode [1]",
              "(c) 4OH- → O₂ + 2H₂O + 4e- [1]; oxidation [1]; anode [1]",
            ],
            commonError: "For (a), students write I- → I + e- instead of the diatomic 2I- → I₂ + 2e-. Halogens always form diatomic molecules.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "For each: does the species gain or lose electrons? This tells you oxidation vs reduction.",
              "Remember: all halogens (I₂, Cl₂, Br₂) are diatomic — balance accordingly.",
              "Anode = oxidation = electrons on right. Cathode = reduction = electrons on left.",
              "For (c): balance O with H₂O, then check H is balanced too.",
            ],
            strategy: "Determine gain/loss of electrons → balance atoms (diatomic halogens!) → balance charge with e- → identify electrode",
          },
          {
            id: "chem-electrochemistry-bank-qa2-q03",
            question: "A jeweller wants to gold-plate a copper bracelet. She dissolves gold(III) chloride in water to make the electrolyte. (a) Identify which electrode the bracelet should be and explain why. (b) What material should the other electrode be, and what is its role? (c) Write the half-equation for gold deposition at the bracelet. (d) Over time, the jeweller notices that the gold coating becomes thicker on the edges and corners of the bracelet than on flat surfaces. Suggest a reason for this.",
            marks: 8,
            modelAnswer:
              "(a) The bracelet should be the cathode (negative electrode). At the cathode, Au3+ ions are reduced and deposited as gold metal on the surface of the bracelet: Au3+ + 3e- → Au.\n" +
              "(b) The other electrode should be a gold block (active anode). Its role is to dissolve and replenish the Au3+ ions in solution as gold is removed at the cathode: Au → Au3+ + 3e-. This maintains a constant [Au3+] and consistent plating.\n" +
              "(c) Au3+ + 3e- → Au.\n" +
              "(d) Edges and corners are points of high electric field strength — the electric field lines converge at sharp points (similar to lightning conductors). More Au3+ ions are directed to these points per unit area, so a thicker deposit builds up there.",
            markScheme: [
              "Bracelet is cathode / negative electrode [1]",
              "Reason: Au3+ ions are reduced (gain electrons) and deposited at cathode [1]",
              "Other electrode: gold (active anode) [1]",
              "Role: dissolves to maintain [Au3+] / replenish gold ions [1]",
              "Half-equation: Au3+ + 3e- → Au [1]",
              "Edges/corners: higher electric field / field lines concentrate at sharp points [1]",
              "More ions attracted to those points / thicker deposit at high-field areas [1]",
              "Analogous to lightning conductor / tip effect [1] (any two of the last three points for [2])",
            ],
            commonError: "Many students write Au+ + e- → Au instead of Au3+ + 3e- → Au. Always check the charge state of gold — Au3+ is the common ion in gold(III) compounds.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "challenge",
            hints: [
              "Gold plating means gold needs to form ON the bracelet. Which electrode causes formation/deposition?",
              "Check: gold(III) chloride means gold has a 3+ charge. How many electrons to neutralise?",
              "What happens if you use a carbon anode instead of gold? How does [Au3+] change over time?",
              "Think about where electric field lines concentrate on an irregularly shaped object.",
            ],
            strategy: "Identify deposition electrode → choose active anode → write half-equation with correct charge → apply physics of electric field concentration",
          },
          {
            id: "chem-electrochemistry-bank-qa2-q04",
            question: "An electrolysis cell contains aqueous sodium sulfate, Na₂SO₄, using platinum electrodes. (a) List all ions present. (b) Predict and explain the products at each electrode, writing half-equations. (c) What happens to the overall composition of the solution over time? (d) Suggest why this result can be described as 'electrolysis of water'.",
            marks: 8,
            modelAnswer:
              "(a) Na+, SO₄2-, H+, OH- (from water).\n" +
              "(b) Cathode: H₂ evolved. Na+ is more reactive than H, so H₂ is produced: 2H+ + 2e- → H₂. Anode: O₂ evolved. No halide present, so OH- is discharged: 4OH- → O₂ + 2H₂O + 4e-.\n" +
              "(c) Water is consumed: H+ and OH- ions from water are used up at the electrodes. Na2SO4 is not consumed (Na+ and SO₄2- do not react). Over time, [Na2SO4] effectively increases (same amount of solute, less water), and the volume of solution decreases slightly.\n" +
              "(d) The Na+ and SO₄2- ions are not discharged — they remain in solution unchanged. The only net change is that water (via H+ and OH-) is decomposed into H₂ and O₂. The overall equation is 2H₂O → 2H₂ + O₂, identical to the electrolysis of water. Na₂SO₄ acts merely as the conducting medium (carrier electrolyte) to make the solution conducting enough.",
            markScheme: [
              "Na+, SO₄2- [1]",
              "H+, OH- from water [1]",
              "Cathode: H₂; reason: Na+ more reactive than H [1]",
              "Cathode half-equation: 2H+ + 2e- → H₂ [1]",
              "Anode: O₂; reason: no halide present [1]",
              "Anode half-equation: 4OH- → O₂ + 2H₂O + 4e- [1]",
              "Na+ and SO₄2- unchanged / water decreases / [Na₂SO₄] increases [1]",
              "Net reaction is decomposition of water (2H₂O → 2H₂ + O₂); Na₂SO₄ is just the conducting medium [1]",
            ],
            commonError: "Students often predict that SO₄2- is discharged at the anode to give S or SO₂. In practice, SO₄2- is very stable and is NOT discharged under normal IGCSE conditions — OH- is always preferred.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "challenge",
            hints: [
              "Na2SO4 fully dissociates: Na+, SO4(2-), plus H+, OH- from water.",
              "At the cathode: is Na more or less reactive than H? Which is discharged?",
              "At the anode: is SO4(2-) a halide? In the absence of a concentrated halide, what is always the default?",
              "Think about which ions are used up and which remain — what is the net change in the solution?",
            ],
            strategy: "List all ions → apply both selectivity rules → track which ions are consumed vs preserved → identify net reaction",
          },
        ],
      },
    ],
  },
};
