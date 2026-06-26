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
        description: "Foundations: ion movement, molten electrolysis, and basic half-equations.",
        questions: [
          {
            id: "chem-electrochemistry-bm1-01",
            question: "Which condition must be met for an ionic compound to conduct electricity and be electrolysed?",
            options: [
              "It must be a solid at room temperature.",
              "Its ions must be free to move (molten or dissolved in water).",
              "It must contain a transition metal.",
              "It must be a strong covalent network.",
            ],
            answerIndex: 1,
            explanation: "Electrolysis requires mobile charge carriers. A solid ionic lattice holds ions in fixed positions, so it cannot conduct. Melting or dissolving frees the ions to move to the electrodes.",
            guideRef: "What is Electrolysis?",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm1-02",
            question: "To which electrode are anions attracted, and what happens to them there?",
            options: [
              "Cathode; they are reduced.",
              "Cathode; they are oxidised.",
              "Anode; they are oxidised.",
              "Anode; they are reduced.",
            ],
            answerIndex: 2,
            explanation: "Anions are negative, so they move to the positive anode. There they lose electrons (oxidation). OIL RIG: Oxidation Is Loss.",
            guideRef: "What is Electrolysis?",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm1-03",
            question: "Molten lead(II) bromide is electrolysed with carbon electrodes. What forms at the cathode?",
            options: ["Bromine gas", "Lead metal", "Oxygen gas", "Hydrogen gas"],
            answerIndex: 1,
            explanation: "Only Pb2+ and Br- are present. Cations (Pb2+) move to the cathode and are reduced: Pb2+ + 2e- → Pb. Lead metal forms.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm1-04",
            question: "Which half-equation correctly represents the discharge of chloride ions at an anode?",
            options: [
              "Cl- + e- → Cl",
              "2Cl- → Cl₂ + 2e-",
              "Cl₂ + 2e- → 2Cl-",
              "2Cl- + 2e- → Cl₂",
            ],
            answerIndex: 1,
            explanation: "At the anode, chloride is oxidised (electrons on the right) and chlorine is diatomic: 2Cl- → Cl₂ + 2e-. Option C is reduction; options A and D are unbalanced or reduction.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "The anode oxidises ions, so electrons appear on which side?",
              "Chlorine gas is diatomic — Cl₂, not Cl.",
              "Balance charge: two Cl- (total -2) must release two electrons.",
            ],
          },
          {
            id: "chem-electrochemistry-bm1-05",
            question: "Aqueous copper(II) sulfate is electrolysed with carbon electrodes. What is seen at the cathode?",
            options: [
              "A yellow-green gas is released.",
              "A pink/brown solid is deposited.",
              "The electrode dissolves away.",
              "A colourless, odourless gas bubbles off.",
            ],
            answerIndex: 1,
            explanation: "Cu2+ is less reactive than hydrogen, so copper is discharged: Cu2+ + 2e- → Cu. A pink/brown copper coating forms and the blue colour of the solution fades.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "List all ions: Cu2+, SO₄2-, H+, OH-.",
              "Cathode rule: is copper above or below hydrogen in reactivity?",
              "A metal less reactive than hydrogen is deposited as solid.",
            ],
          },
          {
            id: "chem-electrochemistry-bm1-06",
            question: "Which electrode product is obtained at the cathode when dilute sulfuric acid is electrolysed with platinum electrodes?",
            options: ["Oxygen", "Sulfur dioxide", "Hydrogen", "Sulfur"],
            answerIndex: 2,
            explanation: "Dilute H₂SO₄ contains H+, SO₄2-, OH-. At the cathode the only cation that can be discharged is H+: 2H+ + 2e- → H₂. Hydrogen gas is produced.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "Which positive ions are present in dilute sulfuric acid?",
              "The cathode reduces cations — only H+ is available to discharge.",
              "Write 2H+ + 2e- → H₂.",
            ],
          },
          {
            id: "chem-electrochemistry-bm1-07",
            question: "What is the correct half-equation for the formation of oxygen at an inert anode in aqueous solution?",
            options: [
              "O₂ + 4e- → 2O2-",
              "4OH- → O₂ + 2H₂O + 4e-",
              "2O2- → O₂ + 4e-",
              "O₂ + 2H₂O + 4e- → 4OH-",
            ],
            answerIndex: 1,
            explanation: "In aqueous solution the OH- ions from water are oxidised: 4OH- → O₂ + 2H₂O + 4e-. Option C is the molten-oxide route; option D is reduction of oxygen.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "In water, the source of oxygen at the anode is OH-, not O2-.",
              "Oxidation: electrons on the right.",
              "Check both atom and charge balance for 4OH-.",
            ],
          },
          {
            id: "chem-electrochemistry-bm1-08",
            question: "Concentrated aqueous sodium chloride is electrolysed with inert electrodes. Which pair of products is correct (cathode, anode)?",
            options: [
              "Sodium, oxygen",
              "Hydrogen, chlorine",
              "Hydrogen, oxygen",
              "Sodium, chlorine",
            ],
            answerIndex: 1,
            explanation: "Na+ is more reactive than H, so H₂ forms at the cathode. The concentrated halide rule gives Cl₂ at the anode. The leftover Na+ and OH- form NaOH solution.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "Cathode: compare reactivity of sodium with hydrogen.",
              "Anode: is the halide concentrated?",
              "Concentrated halide is discharged in preference to OH-.",
            ],
          },
          {
            id: "chem-electrochemistry-bm1-09",
            question: "A current of 2 A flows for 5 minutes. Using the charge equation Q = I x t, what charge passes? (1 minute = 60 s)",
            options: ["10 C", "150 C", "600 C", "1000 C"],
            answerIndex: 2,
            explanation: "Q = I x t = 2 A x (5 x 60) s = 2 x 300 = 600 C. Always convert time to seconds first.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "Convert 5 minutes to seconds: 5 x 60.",
              "Q = I x t.",
              "Multiply 2 A by the number of seconds.",
            ],
            strategy: "Convert units to SI (seconds) before substituting into Q = I x t.",
          },
          {
            id: "chem-electrochemistry-bm1-10",
            question: "Molten aluminium oxide is electrolysed in the extraction of aluminium. Which species is reduced at the cathode?",
            options: ["O2-", "Al3+", "Na+", "F-"],
            answerIndex: 1,
            explanation: "Al3+ ions are the cations; they gain electrons at the cathode: Al3+ + 3e- → Al. The cryolite (Na₃AlF₆) is only a solvent and its ions are not the intended products.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "challenge",
            hints: [
              "Reduction = gain of electrons at the cathode.",
              "Which ion carries the positive charge that aluminium needs to lose?",
              "Cryolite is a solvent — it is not there to be discharged.",
            ],
          },
        ],
      },
      {
        id: "chem-electrochemistry-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Aqueous selectivity, active electrodes, electroplating, and observations.",
        questions: [
          {
            id: "chem-electrochemistry-bm2-01",
            question: "Which electrode is connected to the negative terminal of the d.c. supply?",
            options: ["The anode", "The cathode", "Both electrodes", "Neither electrode"],
            answerIndex: 1,
            explanation: "The cathode is the negative electrode (connected to the negative terminal); the anode is positive. Cations are attracted to the negative cathode.",
            guideRef: "What is Electrolysis?",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm2-02",
            question: "Which of these is an example of an inert electrode?",
            options: ["Copper", "Silver", "Graphite (carbon)", "Iron"],
            answerIndex: 2,
            explanation: "Graphite (carbon) and platinum are inert — they do not react with the electrolyte or the products. Copper, silver and iron can act as active electrodes.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm2-03",
            question: "Dilute aqueous sodium chloride is electrolysed with carbon electrodes. What is the product at the anode?",
            options: ["Chlorine", "Oxygen", "Hydrogen", "Sodium"],
            answerIndex: 1,
            explanation: "When the chloride is dilute, OH- outnumbers Cl- at the anode and is preferentially discharged: 4OH- → O₂ + 2H₂O + 4e-. Oxygen forms (concentration matters at the anode).",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "core",
            hints: [
              "The halide rule depends on concentration.",
              "When halide is dilute, which anion wins at the anode?",
              "OH- gives oxygen.",
            ],
          },
          {
            id: "chem-electrochemistry-bm2-04",
            question: "Copper(II) sulfate solution is electrolysed using copper electrodes. What happens to the mass of the anode?",
            options: [
              "It increases as copper is deposited.",
              "It decreases as copper dissolves.",
              "It stays the same.",
              "It increases as oxygen is absorbed.",
            ],
            answerIndex: 1,
            explanation: "The copper anode is active and dissolves: Cu → Cu2+ + 2e-. Its mass decreases. The cathode gains the same mass, and [Cu2+] stays constant.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "Is a copper anode inert or active in CuSO₄?",
              "An active anode is oxidised: Cu → Cu2+ + 2e-.",
              "If copper leaves the anode, what happens to its mass?",
            ],
          },
          {
            id: "chem-electrochemistry-bm2-05",
            question: "To electroplate a steel fork with nickel, how should the apparatus be arranged?",
            options: [
              "Fork as anode, nickel as cathode, nickel salt electrolyte.",
              "Fork as cathode, nickel as anode, nickel salt electrolyte.",
              "Fork as cathode, carbon as anode, dilute acid electrolyte.",
              "Fork as anode, carbon as cathode, nickel salt electrolyte.",
            ],
            answerIndex: 1,
            explanation: "The object to be plated is the cathode (it gains metal). The plating metal (nickel) is the anode and dissolves to keep the electrolyte topped up. The electrolyte must contain Ni2+ ions.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "The object being coated must gain metal — which electrode reduces cations?",
              "The plating metal forms the anode so it can replenish the ions.",
              "The electrolyte must contain ions of the plating metal.",
            ],
          },
          {
            id: "chem-electrochemistry-bm2-06",
            question: "Which observation indicates that copper is being deposited at the cathode during electrolysis of CuSO₄ with carbon electrodes?",
            options: [
              "The solution turns a deeper blue.",
              "A pink/brown coating forms and the blue colour fades.",
              "A green gas is given off at the cathode.",
              "The cathode dissolves.",
            ],
            answerIndex: 1,
            explanation: "Cu2+ is removed from solution as copper metal coats the cathode, so the blue colour fades while a pink/brown solid builds up.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "Blue colour comes from Cu2+ ions in solution.",
              "If Cu2+ is being removed, what happens to the colour?",
              "Copper metal is pink/brown.",
            ],
          },
          {
            id: "chem-electrochemistry-bm2-07",
            question: "Which statement about the electrolysis of dilute sulfuric acid is correct?",
            options: [
              "The H₂SO₄ is used up and the volume of acid falls.",
              "Equal volumes of gas form at each electrode.",
              "Twice the volume of hydrogen forms compared with oxygen.",
              "Sulfur is deposited at the cathode.",
            ],
            answerIndex: 2,
            explanation: "Overall water is decomposed: 2H₂O → 2H₂ + O₂. Hydrogen and oxygen form in a 2:1 volume ratio. The acid acts as electrolyte and is not consumed.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "What is the overall reaction — what is actually decomposed?",
              "Balance 2H₂O → 2H₂ + O₂.",
              "Read off the H₂:O₂ volume ratio from the equation.",
            ],
          },
          {
            id: "chem-electrochemistry-bm2-08",
            question: "In the chlor-alkali process (electrolysis of concentrated brine), which useful product remains dissolved in the solution?",
            options: ["Sodium chloride", "Sodium hydroxide", "Hydrochloric acid", "Sodium carbonate"],
            answerIndex: 1,
            explanation: "H₂ is removed at the cathode and Cl₂ at the anode. The Na+ and OH- left behind form sodium hydroxide (NaOH) solution.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "challenge",
            hints: [
              "Which ions are removed at the electrodes (as H₂ and Cl₂)?",
              "Which ions are left behind in solution?",
              "Na+ and OH- together make which compound?",
            ],
          },
          {
            id: "chem-electrochemistry-bm2-09",
            question: "During the purification of copper by electrolysis, where do the silver and gold impurities end up?",
            options: [
              "Deposited on the pure cathode.",
              "Dissolved as ions in the electrolyte.",
              "Collected as anode sludge below the impure anode.",
              "Released as gases at the anode.",
            ],
            answerIndex: 2,
            explanation: "Silver, gold and platinum are less reactive than copper and are not oxidised, so they fall from the dissolving impure anode as anode sludge, a valuable by-product.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "challenge",
            hints: [
              "Precious metals are less reactive than copper.",
              "If they are not oxidised, they cannot dissolve.",
              "Where do undissolved particles fall?",
            ],
          },
          {
            id: "chem-electrochemistry-bm2-10",
            question: "A copper anode loses 0.64 g of copper. Given that 0.64 g of copper is 0.010 mol, and each Cu uses 2 electrons, how many moles of electrons passed? (You do not need the Faraday constant.)",
            options: ["0.005 mol", "0.010 mol", "0.020 mol", "0.040 mol"],
            answerIndex: 2,
            explanation: "Cu → Cu2+ + 2e-. Moles of electrons = 2 x moles of copper = 2 x 0.010 = 0.020 mol.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Write the anode half-equation for copper.",
              "How many electrons per copper atom?",
              "Multiply moles of Cu by the electron ratio.",
            ],
            strategy: "Use the half-equation ratio: mol electrons = (electrons per ion) x mol of metal.",
          },
        ],
      },
      {
        id: "chem-electrochemistry-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Half-equations, fuel cells, and quantitative reasoning.",
        questions: [
          {
            id: "chem-electrochemistry-bm3-01",
            question: "In the term OIL RIG, what does the RIG part describe?",
            options: [
              "Reduction Is Gain of electrons.",
              "Reduction Is Giving of electrons.",
              "Reaction In Gas phase.",
              "Reduction In Graphite.",
            ],
            answerIndex: 0,
            explanation: "RIG = Reduction Is Gain of electrons, which happens at the cathode. OIL = Oxidation Is Loss, at the anode.",
            guideRef: "What is Electrolysis?",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm3-02",
            question: "What is the overall equation for the hydrogen–oxygen fuel cell?",
            options: [
              "2H₂ + O₂ → 2H₂O",
              "H₂ + O₂ → H₂O₂",
              "2H₂O → 2H₂ + O₂",
              "H₂ + O → H₂O",
            ],
            answerIndex: 0,
            explanation: "The fuel cell combines hydrogen and oxygen to form water: 2H₂ + O₂ → 2H₂O. Water is the only product, releasing energy as electricity.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm3-03",
            question: "Which half-equation shows the oxidation of hydrogen at the anode of an acidic hydrogen-oxygen fuel cell?",
            options: [
              "2H+ + 2e- → H₂",
              "H₂ → 2H+ + 2e-",
              "O₂ + 4H+ + 4e- → 2H₂O",
              "H₂ + 2OH- → 2H₂O + 2e-",
            ],
            answerIndex: 1,
            explanation: "In an acidic fuel cell, hydrogen is oxidised at the anode: H₂ → 2H+ + 2e- (electrons on the right). Option D is the alkaline version; option C is the cathode reaction.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "The anode is where oxidation occurs — electrons on the right.",
              "In acidic conditions hydrogen forms H+, not water.",
              "Balance charge: H₂ losing 2 electrons gives 2H+.",
            ],
          },
          {
            id: "chem-electrochemistry-bm3-04",
            question: "Which is a correct disadvantage of the hydrogen–oxygen fuel cell?",
            options: [
              "It produces large amounts of carbon dioxide.",
              "Hydrogen is difficult and hazardous to store and transport.",
              "It has very low efficiency compared with a petrol engine.",
              "It produces toxic nitrogen oxides.",
            ],
            answerIndex: 1,
            explanation: "Hydrogen is a flammable gas that must be stored at high pressure or cryogenically, posing safety and engineering challenges. The cell itself emits only water and is more efficient than combustion.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "The cell's only product is water — so CO₂/NOₓ options are wrong.",
              "Fuel cells are more efficient than engines.",
              "Think about the physical properties of hydrogen gas.",
            ],
          },
          {
            id: "chem-electrochemistry-bm3-05",
            question: "When the half-equations Cu2+ + 2e- → Cu (cathode) and 4OH- → O₂ + 2H₂O + 4e- (anode) are combined, how must the copper half-equation be scaled so the electrons cancel?",
            options: [
              "Leave it as written.",
              "Multiply it by 2.",
              "Multiply it by 4.",
              "Divide it by 2.",
            ],
            answerIndex: 1,
            explanation: "The anode releases 4 electrons; the copper half-equation uses 2. Multiplying the copper step by 2 gives 2Cu2+ + 4e- → 2Cu, so 4 electrons cancel on both sides.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "Count electrons in each half-equation.",
              "Find the lowest common multiple of 2 and 4.",
              "Scale the smaller one up to match.",
            ],
          },
          {
            id: "chem-electrochemistry-bm3-06",
            question: "A current of 0.5 A passes for 20 minutes. What charge has flowed?",
            options: ["10 C", "100 C", "600 C", "1200 C"],
            answerIndex: 2,
            explanation: "Q = I x t = 0.5 A x (20 x 60) s = 0.5 x 1200 = 600 C. Convert minutes to seconds first.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "Convert 20 minutes to seconds.",
              "Q = I x t.",
              "0.5 x 1200.",
            ],
            strategy: "Always work in seconds for charge calculations.",
          },
          {
            id: "chem-electrochemistry-bm3-07",
            question: "Two cells in series electrolyse different solutions. Which quantity is guaranteed to be the same at both cathodes?",
            options: [
              "The mass of metal deposited.",
              "The number of moles of electrons passed.",
              "The volume of gas released.",
              "The colour change observed.",
            ],
            answerIndex: 1,
            explanation: "In a series circuit the same charge (and so the same number of electrons) flows through both cells. The mass deposited then depends on each metal's molar mass and ionic charge.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "What is identical in a series circuit — current or voltage?",
              "Same current for the same time means the same charge.",
              "Charge fixes moles of electrons, not directly mass.",
            ],
          },
          {
            id: "chem-electrochemistry-bm3-08",
            question: "In an alkaline hydrogen-oxygen fuel cell, which half-equation occurs at the cathode?",
            options: [
              "H₂ + 2OH- → 2H₂O + 2e-",
              "O₂ + 2H₂O + 4e- → 4OH-",
              "4OH- → O₂ + 2H₂O + 4e-",
              "2H₂O → O₂ + 4H+ + 4e-",
            ],
            answerIndex: 1,
            explanation: "Oxygen is reduced at the cathode in an alkaline fuel cell: O₂ + 2H₂O + 4e- → 4OH- (electrons on the left = reduction). Option A is the anode; option C is oxidation.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "challenge",
            hints: [
              "The cathode reduces — electrons on the left.",
              "In alkaline conditions the product is OH-, not water alone.",
              "Oxygen gains electrons here.",
            ],
          },
          {
            id: "chem-electrochemistry-bm3-09",
            question: "0.020 mol of electrons passes through molten aluminium oxide. Using Al3+ + 3e- → Al, how many moles of aluminium are produced?",
            options: ["0.0067 mol", "0.020 mol", "0.060 mol", "0.040 mol"],
            answerIndex: 0,
            explanation: "Each Al needs 3 electrons. Moles of Al = moles of electrons / 3 = 0.020 / 3 = 0.0067 mol (2 s.f.).",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "challenge",
            hints: [
              "Read the electron ratio from the half-equation (3e- per Al).",
              "Divide moles of electrons by 3.",
              "0.020 / 3 = 0.0067 (2 s.f.).",
            ],
            strategy: "mol of product = mol of electrons / (electrons per ion).",
          },
          {
            id: "chem-electrochemistry-bm3-10",
            question: "The same charge is passed through silver nitrate (Ag+) and copper(II) sulfate (Cu2+) solutions in series. Compared with copper, the number of moles of silver deposited is:",
            options: [
              "Half as many.",
              "The same.",
              "Twice as many.",
              "Four times as many.",
            ],
            answerIndex: 2,
            explanation: "Ag+ needs 1 electron (Ag+ + e- → Ag) while Cu2+ needs 2 (Cu2+ + 2e- → Cu). For the same electrons, twice as many moles of silver are deposited as moles of copper.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Compare electrons needed per atom: Ag+ vs Cu2+.",
              "Same charge = same moles of electrons.",
              "Fewer electrons per ion means more atoms deposited.",
            ],
            strategy: "Divide the fixed moles of electrons by the electrons-per-ion to compare amounts.",
          },
        ],
      },
      {
        id: "chem-electrochemistry-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Synoptic mix: predictions, extraction, and exam-style discrimination.",
        questions: [
          {
            id: "chem-electrochemistry-bm4-01",
            question: "Which process is the decomposition of an ionic compound using a direct electric current?",
            options: ["Electrolysis", "Neutralisation", "Combustion", "Distillation"],
            answerIndex: 0,
            explanation: "Electrolysis is the breaking down of an ionic compound (molten or aqueous) by passing a direct current through it.",
            guideRef: "What is Electrolysis?",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm4-02",
            question: "Which metal is extracted from its ore by electrolysis because it is too reactive to be reduced by carbon?",
            options: ["Iron", "Aluminium", "Copper", "Lead"],
            answerIndex: 1,
            explanation: "Aluminium is above carbon in the reactivity series, so it cannot be reduced by carbon and must be extracted by electrolysis of molten Al₂O₃.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bm4-03",
            question: "Aqueous silver nitrate is electrolysed with inert electrodes. What forms at the cathode?",
            options: ["Hydrogen", "Silver", "Oxygen", "Nitrogen"],
            answerIndex: 1,
            explanation: "Silver is below hydrogen in reactivity, so Ag+ is discharged: Ag+ + e- → Ag. A silver coating forms at the cathode.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "core",
            hints: [
              "Is silver more or less reactive than hydrogen?",
              "A metal less reactive than hydrogen is deposited.",
              "Ag+ + e- → Ag.",
            ],
          },
          {
            id: "chem-electrochemistry-bm4-04",
            question: "Which change would switch the anode product in NaCl(aq) from oxygen to chlorine?",
            options: [
              "Lowering the temperature.",
              "Increasing the concentration of the chloride.",
              "Using a smaller current.",
              "Adding more water.",
            ],
            answerIndex: 1,
            explanation: "The anode product depends on halide concentration. Dilute NaCl gives O₂; concentrated NaCl gives Cl₂ because abundant Cl- outcompetes OH-.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "core",
            hints: [
              "Which factor controls the anode product for halides?",
              "More chloride favours chlorine.",
              "Adding water dilutes, favouring oxygen.",
            ],
          },
          {
            id: "chem-electrochemistry-bm4-05",
            question: "Why is molten cryolite used in the extraction of aluminium?",
            options: [
              "It provides the aluminium ions.",
              "It lowers the melting point of aluminium oxide, saving energy.",
              "It acts as the cathode.",
              "It prevents oxygen forming at the anode.",
            ],
            answerIndex: 1,
            explanation: "Cryolite (Na₃AlF₆) dissolves Al₂O₃ and lowers the operating temperature from ~2050 °C to ~950 °C, greatly reducing energy costs. The aluminium ions still come from Al₂O₃.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "core",
            hints: [
              "Al₂O₃ has a very high melting point.",
              "Cryolite is a solvent, not a source of Al3+.",
              "Lower temperature = lower energy cost.",
            ],
          },
          {
            id: "chem-electrochemistry-bm4-06",
            question: "Which statement about an active copper anode in CuSO₄ solution is correct?",
            options: [
              "Oxygen is released at the anode.",
              "The anode dissolves and [Cu2+] stays constant.",
              "Sulfate ions are oxidised.",
              "The anode gains mass.",
            ],
            answerIndex: 1,
            explanation: "An active copper anode is oxidised: Cu → Cu2+ + 2e-. It dissolves, replacing the Cu2+ removed at the cathode, so [Cu2+] is unchanged and no oxygen forms.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "Active anode means the electrode itself is oxidised.",
              "Cu → Cu2+ + 2e-.",
              "Ions lost at the cathode are replaced from the anode.",
            ],
          },
          {
            id: "chem-electrochemistry-bm4-07",
            question: "Which row matches the molten electrolyte to its cathode product correctly?",
            options: [
              "Molten NaCl → chlorine",
              "Molten PbBr₂ → bromine",
              "Molten Al₂O₃ → aluminium",
              "Molten KI → oxygen",
            ],
            answerIndex: 2,
            explanation: "Cathode products are metals. Molten Al₂O₃ gives aluminium at the cathode. The other rows list anode (non-metal) products, not cathode products.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "core",
            hints: [
              "Cathode products are always the metals (cations reduced).",
              "Chlorine, bromine and iodine are anode products.",
              "Find the row naming a metal.",
            ],
          },
          {
            id: "chem-electrochemistry-bm4-08",
            question: "0.005 mol of Ag+ is fully discharged at a cathode (Ag = 108). What mass of silver is deposited?",
            options: ["0.108 g", "0.54 g", "1.08 g", "5.4 g"],
            answerIndex: 1,
            explanation: "Mass = moles x molar mass = 0.005 x 108 = 0.54 g.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Ag+ + e- → Ag, so moles of Ag = moles of Ag+.",
              "Mass = moles x Ar.",
              "0.005 x 108.",
            ],
            strategy: "Convert moles to mass with mass = moles x molar mass.",
          },
          {
            id: "chem-electrochemistry-bm4-09",
            question: "Why does sulfate (SO₄2-) remain undischarged at an inert anode in aqueous Na₂SO₄?",
            options: [
              "Sulfate is a cation and moves to the cathode.",
              "OH- from water is discharged in preference to sulfate.",
              "Sulfate is reduced instead of oxidised.",
              "Sulfate is not attracted to the anode.",
            ],
            answerIndex: 1,
            explanation: "Sulfate is a stable oxoanion and is not discharged under IGCSE conditions. With no halide present, OH- is oxidised to give oxygen, leaving sulfate in solution.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "challenge",
            hints: [
              "Sulfate is an anion, so it does go to the anode.",
              "When no halide is present, what is the default anode product?",
              "OH- is discharged in preference to stable oxoanions.",
            ],
          },
          {
            id: "chem-electrochemistry-bm4-10",
            question: "A current of 1.0 A is passed through aqueous CuSO₄ for 32 minutes 10 seconds (about 1930 s), depositing copper at the cathode. Approximately 0.020 mol of electrons flow. How many moles of copper are deposited?",
            options: ["0.005 mol", "0.010 mol", "0.020 mol", "0.040 mol"],
            answerIndex: 1,
            explanation: "Cu2+ + 2e- → Cu needs 2 electrons per atom. Moles of Cu = 0.020 / 2 = 0.010 mol.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Cu2+ needs 2 electrons per copper atom.",
              "Divide moles of electrons by 2.",
              "0.020 / 2 = 0.010 mol.",
            ],
            strategy: "mol metal = mol electrons / electrons-per-ion (here 2 for Cu2+).",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-electrochemistry-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Core structured questions on molten and aqueous electrolysis and half-equations.",
        questions: [
          {
            id: "chem-electrochemistry-bq1-01",
            question: "Define electrolysis. State two conditions an ionic compound must meet before it can be electrolysed, and explain why a solid ionic compound does not conduct electricity.",
            marks: 4,
            modelAnswer:
              "Electrolysis is the decomposition (breaking down) of an ionic compound by passing a direct electric current through it.\n" +
              "Conditions: the compound must contain ions, and those ions must be free to move — achieved by melting the compound or dissolving it in water.\n" +
              "A solid ionic compound does not conduct because its ions are held in fixed positions in the lattice and cannot move to carry charge.",
            markScheme: [
              "Decomposition of an ionic compound by a direct current [1]",
              "Must be molten / dissolved in water [1]",
              "So that the ions are free to move [1]",
              "Solid: ions fixed in lattice / cannot move to carry charge [1]",
            ],
            commonError: "Students write that solids 'have no ions' — they do have ions, but the ions are fixed and cannot move.",
            guideRef: "What is Electrolysis?",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bq1-02",
            question: "Molten zinc chloride is electrolysed with graphite electrodes. (a) Name the product at each electrode. (b) Write a half-equation for each electrode. (c) State, with a reason, whether each process is oxidation or reduction.",
            marks: 6,
            modelAnswer:
              "(a) Cathode: zinc metal. Anode: chlorine gas.\n" +
              "(b) Cathode: Zn2+ + 2e- → Zn. Anode: 2Cl- → Cl₂ + 2e-.\n" +
              "(c) Cathode is reduction because Zn2+ gains electrons. Anode is oxidation because Cl- loses electrons.",
            markScheme: [
              "Cathode product: zinc [1]",
              "Anode product: chlorine [1]",
              "Cathode half-equation Zn2+ + 2e- → Zn balanced [1]",
              "Anode half-equation 2Cl- → Cl₂ + 2e- balanced [1]",
              "Cathode = reduction (gain of electrons) [1]",
              "Anode = oxidation (loss of electrons) [1]",
            ],
            commonError: "Forgetting that chlorine is diatomic (writing Cl instead of Cl₂).",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bq1-03",
            question: "Aqueous copper(II) sulfate is electrolysed using carbon electrodes. (a) List all the ions present in the solution. (b) Predict the product at each electrode and justify each using a selectivity rule. (c) Describe two observations you would make during the experiment.",
            marks: 7,
            modelAnswer:
              "(a) Cu2+, SO₄2-, H+, OH- (the last two from water).\n" +
              "(b) Cathode: copper is deposited because Cu2+ is less reactive than hydrogen, so it is discharged in preference to H+ (Cu2+ + 2e- → Cu). Anode: oxygen is evolved because no halide is present, so OH- is discharged (4OH- → O₂ + 2H₂O + 4e-).\n" +
              "(c) A pink/brown solid forms on the cathode; the blue colour of the solution fades; gas bubbles form at the anode.",
            markScheme: [
              "Ions: Cu2+ and SO₄2- [1]",
              "Plus H+ and OH- from water [1]",
              "Cathode: copper, because Cu less reactive than H [1]",
              "Cathode half-equation Cu2+ + 2e- → Cu [1]",
              "Anode: oxygen, because no halide present / OH- discharged [1]",
              "Anode half-equation 4OH- → O₂ + 2H₂O + 4e- [1]",
              "Observation: blue fades / brown solid on cathode / bubbles at anode (any two) [1]",
            ],
            commonError: "Students forget the H+ and OH- ions from water when listing ions.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "Remember water itself ionises: H₂O gives H+ and OH-.",
              "Cathode: compare copper with hydrogen in reactivity.",
              "Anode: is a halide present? If not, what is the default product?",
              "Link the fading blue colour to the removal of Cu2+.",
            ],
            strategy: "List all ions (include water) → apply cathode rule → apply anode rule → describe observations.",
          },
          {
            id: "chem-electrochemistry-bq1-04",
            question: "(a) Write half-equations for the formation of hydrogen and of chlorine during the electrolysis of concentrated hydrochloric acid. (b) Combine them into the overall ionic equation. (c) State the colour and smell you would expect of the anode gas.",
            marks: 5,
            modelAnswer:
              "(a) Cathode: 2H+ + 2e- → H₂. Anode: 2Cl- → Cl₂ + 2e-.\n" +
              "(b) The electrons already balance (2 each), so adding gives: 2H+ + 2Cl- → H₂ + Cl₂.\n" +
              "(c) The anode gas is chlorine: pale yellow-green with a sharp, choking (bleach-like) smell.",
            markScheme: [
              "Cathode: 2H+ + 2e- → H₂ [1]",
              "Anode: 2Cl- → Cl₂ + 2e- [1]",
              "Overall: 2H+ + 2Cl- → H₂ + Cl₂ (electrons cancelled) [1]",
              "Chlorine colour: pale yellow-green [1]",
              "Chlorine smell: sharp / choking / bleach-like [1]",
            ],
            commonError: "Leaving electrons in the overall equation instead of cancelling them.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "Both half-equations involve 2 electrons.",
              "Add the two equations and cancel the electrons.",
              "Recall the characteristic colour of chlorine gas.",
            ],
            strategy: "Match electron numbers (here equal) → add half-equations → cancel electrons.",
          },
          {
            id: "chem-electrochemistry-bq1-05",
            question: "A student electrolyses dilute sulfuric acid using inert electrodes and collects the gases. (a) Name the gas at each electrode. (b) State the expected ratio of their volumes and explain it. (c) Describe a test for each gas.",
            marks: 6,
            modelAnswer:
              "(a) Cathode: hydrogen. Anode: oxygen.\n" +
              "(b) Hydrogen to oxygen volume ratio is 2:1. This is because water is decomposed (2H₂O → 2H₂ + O₂), giving twice as many moles of hydrogen as oxygen, and equal volumes of gases contain equal numbers of moles.\n" +
              "(c) Hydrogen: a lighted splint gives a squeaky pop. Oxygen: it relights a glowing splint.",
            markScheme: [
              "Cathode gas: hydrogen [1]",
              "Anode gas: oxygen [1]",
              "Volume ratio H₂:O₂ = 2:1 [1]",
              "Because water decomposed 2H₂O → 2H₂ + O₂ / equal volumes = equal moles [1]",
              "Test for hydrogen: squeaky pop with lighted splint [1]",
              "Test for oxygen: relights a glowing splint [1]",
            ],
            commonError: "Stating the ratio as 1:2 (oxygen larger) — hydrogen is the larger volume.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "Identify the overall reaction (decomposition of water).",
              "Use the balanced equation to find the mole/volume ratio.",
              "Recall the standard gas tests for H₂ and O₂.",
            ],
            strategy: "Find overall equation → ratio of moles = ratio of gas volumes → recall gas tests.",
          },
          {
            id: "chem-electrochemistry-bq1-06",
            question: "Explain, using half-equations, what happens at each electrode when aqueous sodium sulfate is electrolysed with inert electrodes, and state the net chemical change to the solution.",
            marks: 6,
            modelAnswer:
              "Ions present: Na+, SO₄2-, H+, OH-.\n" +
              "Cathode: Na+ is more reactive than hydrogen, so hydrogen is discharged: 2H+ + 2e- → H₂.\n" +
              "Anode: no halide present and sulfate is stable, so OH- is discharged: 4OH- → O₂ + 2H₂O + 4e-.\n" +
              "Net change: H₂ and O₂ are removed (water is decomposed). Na+ and SO₄2- remain, so the sodium sulfate becomes more concentrated.",
            markScheme: [
              "Ions identified including H+ and OH- [1]",
              "Cathode: 2H+ + 2e- → H₂ (Na more reactive than H) [1]",
              "Anode: 4OH- → O₂ + 2H₂O + 4e- [1]",
              "No halide / sulfate not discharged [1]",
              "Net: water decomposed / H₂ and O₂ produced [1]",
              "Na₂SO₄ becomes more concentrated [1]",
            ],
            commonError: "Predicting sulfur or SO₂ at the anode; sulfate is not discharged.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "List all ions including those from water.",
              "Sodium is more reactive than hydrogen.",
              "With no halide, OH- gives oxygen.",
              "Track which ions are removed and which remain.",
            ],
            strategy: "List ions → apply both rules → identify what leaves and what stays.",
          },
          {
            id: "chem-electrochemistry-bq1-07",
            question: "Aqueous potassium iodide is electrolysed with carbon electrodes. (a) Predict the product at each electrode. (b) The solution around the cathode is tested with universal indicator. State and explain the colour change. (c) Write the cathode half-equation.",
            marks: 6,
            modelAnswer:
              "(a) Cathode: hydrogen gas. Anode: iodine.\n" +
              "(b) The indicator turns purple/blue (alkaline). At the cathode H+ from water is discharged as hydrogen, leaving an excess of OH- ions, so the solution around the cathode becomes alkaline.\n" +
              "(c) 2H+ + 2e- → H₂.",
            markScheme: [
              "Cathode: hydrogen [1]",
              "Anode: iodine [1]",
              "Indicator turns purple/blue / alkaline [1]",
              "H+ discharged leaving excess OH- [1]",
              "OH- makes the solution alkaline [1]",
              "Cathode half-equation 2H+ + 2e- → H₂ [1]",
            ],
            commonError: "Saying potassium is deposited — potassium is too reactive, so hydrogen is discharged instead.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "core",
            hints: [
              "Compare potassium with hydrogen in reactivity.",
              "If H+ is removed, which ion is left in excess near the cathode?",
              "Excess OH- means acidic or alkaline?",
            ],
            strategy: "Apply cathode rule → see which water ion is removed → deduce the pH change.",
          },
          {
            id: "chem-electrochemistry-bq1-08",
            question: "Describe how the products of electrolysing sodium chloride solution change as the solution goes from very dilute to saturated. Explain the change at the anode in terms of ion concentration.",
            marks: 5,
            modelAnswer:
              "At all concentrations the cathode product is hydrogen, because Na+ is more reactive than H.\n" +
              "In very dilute solution the anode product is oxygen; in saturated solution the anode product is chlorine.\n" +
              "The anode change occurs because the anode product depends on the relative concentrations of Cl- and OH-. When dilute, OH- ions are in higher proportion and are discharged to give oxygen. When concentrated, the large number of Cl- ions outcompetes OH- and chlorine is discharged instead.",
            markScheme: [
              "Cathode product is hydrogen at all concentrations [1]",
              "Dilute anode product: oxygen [1]",
              "Concentrated anode product: chlorine [1]",
              "Depends on relative concentration of Cl- and OH- [1]",
              "High [Cl-] outcompetes OH- / preferential discharge [1]",
            ],
            commonError: "Claiming the chloride 'runs out' — it is about relative concentration and preferential discharge, not depletion.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "core",
            hints: [
              "Does the cathode product change with concentration? (No.)",
              "Which product appears at low vs high chloride concentration?",
              "Explain using competition between Cl- and OH-.",
            ],
            strategy: "Separate cathode (fixed) from anode (concentration-dependent) and explain via competition.",
          },
          {
            id: "chem-electrochemistry-bq1-09",
            question: "Aluminium is extracted by electrolysis of molten aluminium oxide dissolved in cryolite. (a) Write the half-equation at each electrode. (b) Explain why the carbon anodes must be replaced regularly. (c) Give one reason the process is expensive.",
            marks: 6,
            modelAnswer:
              "(a) Cathode: Al3+ + 3e- → Al. Anode: 2O2- → O₂ + 4e-.\n" +
              "(b) The oxygen produced reacts with the hot carbon anodes (C + O₂ → CO₂), so the anodes gradually burn away and must be replaced.\n" +
              "(c) The process uses very large amounts of electrical energy (to melt and to electrolyse), which is costly. (Accept: cost of continually replacing anodes.)",
            markScheme: [
              "Cathode: Al3+ + 3e- → Al [1]",
              "Anode: 2O2- → O₂ + 4e- [1]",
              "Oxygen reacts with carbon anode [1]",
              "C + O₂ → CO₂ / anode burns away [1]",
              "Anodes must be replaced regularly [1]",
              "High electrical energy cost / anode replacement cost [1]",
            ],
            commonError: "Writing the anode product as oxide rather than oxygen, or forgetting the carbon-anode burning.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "challenge",
            hints: [
              "Aluminium is Al3+, needing 3 electrons.",
              "Oxide ion is oxidised to oxygen at the anode.",
              "What does hot oxygen do to a carbon electrode?",
              "Think about energy demand as a cost.",
            ],
            strategy: "Write both half-equations → link anode oxygen to carbon burning → identify energy as the main cost.",
          },
          {
            id: "chem-electrochemistry-bq1-10",
            question: "A current of 0.40 A is passed through molten lead(II) bromide for 25 minutes. (a) Calculate the charge passed. (b) Given that this charge corresponds to 0.0062 mol of electrons, calculate the mass of lead deposited at the cathode. (Pb = 207; Pb2+ + 2e- → Pb.)",
            marks: 5,
            modelAnswer:
              "(a) Convert time: 25 x 60 = 1500 s. Q = I x t = 0.40 x 1500 = 600 C.\n" +
              "(b) Pb2+ + 2e- → Pb, so moles of Pb = moles of electrons / 2 = 0.0062 / 2 = 0.0031 mol. Mass = moles x molar mass = 0.0031 x 207 = 0.64 g (2 s.f.).",
            markScheme: [
              "Time in seconds: 1500 s [1]",
              "Q = I x t = 0.40 x 1500 = 600 C [1]",
              "Moles of Pb = 0.0062 / 2 = 0.0031 mol [1]",
              "Mass = moles x 207 [1]",
              "Mass = 0.64 g (accept 0.63-0.65 g) [1]",
            ],
            commonError: "Forgetting to divide the moles of electrons by 2 for the 2+ charge on lead.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Convert minutes to seconds before using Q = I x t.",
              "Use the half-equation to find the electron-to-lead ratio (2:1).",
              "Mass = moles x molar mass.",
              "Round sensibly to 2 significant figures.",
            ],
            strategy: "Q = I x t → mol electrons → divide by electron ratio → mass = mol x Ar.",
            solutions: [
              {
                label: "Worked calculation",
                steps: [
                  "Time = 25 min x 60 = 1500 s.",
                  "Charge Q = I x t = 0.40 A x 1500 s = 600 C.",
                  "Given moles of electrons = 0.0062 mol.",
                  "Half-equation Pb2+ + 2e- → Pb: 2 electrons per Pb atom.",
                  "Moles of Pb = 0.0062 / 2 = 0.0031 mol.",
                  "Mass = 0.0031 mol x 207 g/mol = 0.64 g (2 s.f.).",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-electrochemistry-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Electroplating, copper purification, and active versus inert electrodes.",
        questions: [
          {
            id: "chem-electrochemistry-bq2-01",
            question: "State what is meant by (a) an inert electrode and (b) an active electrode. Give one example of each.",
            marks: 4,
            modelAnswer:
              "(a) An inert electrode does not react with the electrolyte or the products of electrolysis. Example: carbon (graphite) or platinum.\n" +
              "(b) An active electrode is made of the same metal as the cation in solution and takes part in the reaction (it dissolves at the anode). Example: a copper electrode in copper(II) sulfate solution.",
            markScheme: [
              "Inert: does not react with electrolyte/products [1]",
              "Inert example: carbon/graphite or platinum [1]",
              "Active: takes part / dissolves (same metal as cation) [1]",
              "Active example: copper in CuSO₄ [1]",
            ],
            commonError: "Describing carbon as 'active because it conducts' — conducting does not make an electrode active.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bq2-02",
            question: "Describe how you would electroplate an iron key with copper. State the cathode, the anode, the electrolyte, and the half-equation at each electrode.",
            marks: 6,
            modelAnswer:
              "Make the iron key the cathode (negative electrode). Use a piece of copper as the anode (positive electrode). Use copper(II) sulfate solution as the electrolyte.\n" +
              "Cathode: Cu2+ + 2e- → Cu (copper deposited on the key).\n" +
              "Anode: Cu → Cu2+ + 2e- (copper anode dissolves, replacing Cu2+).",
            markScheme: [
              "Key (object) = cathode [1]",
              "Copper = anode [1]",
              "Electrolyte = copper(II) sulfate / a soluble copper salt [1]",
              "Cathode: Cu2+ + 2e- → Cu [1]",
              "Anode: Cu → Cu2+ + 2e- [1]",
              "Copper deposited on key / anode dissolves [1]",
            ],
            commonError: "Making the object the anode by mistake — the object to be plated is always the cathode.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bq2-03",
            question: "Explain why objects are electroplated. Give two different reasons and a real example for each.",
            marks: 4,
            modelAnswer:
              "Objects are electroplated to improve appearance, to protect against corrosion, or to make a cheaper metal look like a more expensive one.\n" +
              "Example 1 (corrosion protection / appearance): chromium-plating steel car parts to resist rust and look shiny.\n" +
              "Example 2 (appearance/cost): silver-plating cutlery so cheap steel looks like solid silver.",
            markScheme: [
              "Reason 1: appearance / decoration / corrosion protection [1]",
              "Example for reason 1 (e.g. chromium on steel) [1]",
              "Reason 2: different from reason 1 (e.g. make cheap metal look expensive) [1]",
              "Example for reason 2 (e.g. silver-plated cutlery) [1]",
            ],
            commonError: "Giving two examples of the same reason rather than two distinct reasons.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bq2-04",
            question: "Impure copper is purified by electrolysis. (a) State the material of the anode and of the cathode. (b) Write the half-equation at each electrode. (c) Explain why the concentration of copper ions in the electrolyte stays constant.",
            marks: 6,
            modelAnswer:
              "(a) Anode: impure copper. Cathode: pure copper (a thin sheet of pure copper).\n" +
              "(b) Anode: Cu → Cu2+ + 2e-. Cathode: Cu2+ + 2e- → Cu.\n" +
              "(c) For every Cu2+ removed from solution and deposited at the cathode, one Cu2+ is released into solution by the dissolving anode, so the concentration stays constant.",
            markScheme: [
              "Anode: impure copper [1]",
              "Cathode: pure copper [1]",
              "Anode half-equation: Cu → Cu2+ + 2e- [1]",
              "Cathode half-equation: Cu2+ + 2e- → Cu [1]",
              "Cu2+ removed at cathode replaced by anode [1]",
              "Therefore concentration constant [1]",
            ],
            commonError: "Swapping the electrodes — the impure copper must be the anode (it dissolves).",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "Which electrode must dissolve — pure or impure copper?",
              "The dissolving electrode is the anode (oxidation).",
              "Balance copper leaving solution against copper entering it.",
            ],
            strategy: "Assign impure copper to the anode (dissolves) and pure to the cathode (grows); balance the two flows of Cu2+.",
          },
          {
            id: "chem-electrochemistry-bq2-05",
            question: "During copper purification, a layer of sludge collects below the anode. (a) What does this sludge contain? (b) Explain why these substances are not deposited on the cathode. (c) State one economic value of the sludge.",
            marks: 5,
            modelAnswer:
              "(a) The sludge contains the less reactive metal impurities, such as silver, gold and platinum.\n" +
              "(b) These metals are less reactive than copper and are not oxidised to ions, so they do not dissolve from the anode and never reach the cathode; they simply fall off as solid.\n" +
              "(c) The sludge is valuable because the precious metals it contains (silver, gold, platinum) can be recovered and sold.",
            markScheme: [
              "Sludge contains silver / gold / platinum (precious/less reactive metals) [1]",
              "These metals are less reactive than copper [1]",
              "They are not oxidised / do not dissolve as ions [1]",
              "So they fall below the anode as solid [1]",
              "Economic value: precious metals recovered and sold [1]",
            ],
            commonError: "Saying the impurities 'dissolve and stay in solution' — the precious metals do not dissolve; reactive impurities may stay as ions but precious metals form the sludge.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "Which impurities are less reactive than copper?",
              "Less reactive metals are not easily oxidised.",
              "If they are not oxidised, they cannot dissolve and travel.",
            ],
            strategy: "Use the reactivity series: metals below copper are not oxidised and collect as sludge.",
          },
          {
            id: "chem-electrochemistry-bq2-06",
            question: "Two beakers of copper(II) sulfate are electrolysed for the same time with the same current. Beaker A uses carbon electrodes; Beaker B uses copper electrodes. Compare what happens to (a) the cathode, (b) the anode, and (c) the colour of the solution in each beaker.",
            marks: 6,
            modelAnswer:
              "(a) Cathode: in both beakers copper is deposited (Cu2+ + 2e- → Cu), so both cathodes gain a copper coating.\n" +
              "(b) Anode: in Beaker A (carbon) oxygen is evolved (4OH- → O₂ + 2H₂O + 4e-) and the electrode is unchanged. In Beaker B (copper) the anode dissolves (Cu → Cu2+ + 2e-).\n" +
              "(c) Colour: in Beaker A the blue colour fades because Cu2+ is removed and not replaced. In Beaker B the blue colour stays the same because dissolving anode replaces the Cu2+.",
            markScheme: [
              "Both cathodes: copper deposited [1]",
              "Beaker A anode: oxygen evolved / carbon unchanged [1]",
              "Beaker B anode: copper dissolves [1]",
              "Beaker A: blue colour fades [1]",
              "Beaker B: blue colour stays constant [1]",
              "Reason linked to Cu2+ being replaced or not [1]",
            ],
            commonError: "Assuming the colour fades in both — it only fades with inert (carbon) electrodes.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "core",
            hints: [
              "Cathode reaction is the same in both — copper deposits.",
              "The difference is the anode: inert gives oxygen, active dissolves.",
              "Colour depends on whether Cu2+ is replenished.",
            ],
            strategy: "Compare cathode (same), anode (inert vs active), then deduce the colour outcome.",
          },
          {
            id: "chem-electrochemistry-bq2-07",
            question: "A nickel spoon is to be silver-plated. (a) State which electrode is the spoon, which is the silver, and name the electrolyte. (b) Write both half-equations. (c) Explain what would happen to the thickness of the plating if the current were doubled for the same time.",
            marks: 6,
            modelAnswer:
              "(a) The spoon is the cathode (negative). The silver block is the anode (positive). The electrolyte is silver nitrate solution (contains Ag+).\n" +
              "(b) Cathode: Ag+ + e- → Ag. Anode: Ag → Ag+ + e-.\n" +
              "(c) Doubling the current doubles the charge passed in the same time, so about twice as much silver is deposited and the plating layer is roughly twice as thick.",
            markScheme: [
              "Spoon = cathode [1]",
              "Silver = anode [1]",
              "Electrolyte: silver nitrate / soluble silver salt [1]",
              "Cathode: Ag+ + e- → Ag [1]",
              "Anode: Ag → Ag+ + e- [1]",
              "Double current → double charge → roughly double thickness [1]",
            ],
            commonError: "Writing Ag2+ — silver forms only Ag+ ions.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "Object to be plated is the cathode.",
              "Silver only forms a 1+ ion.",
              "Amount deposited is proportional to charge (Q = I x t).",
            ],
            strategy: "Set up electroplating cell → write 1-electron silver half-equations → link mass to charge.",
          },
          {
            id: "chem-electrochemistry-bq2-08",
            question: "Explain why electroplating with an active anode keeps the electrolyte concentration steady, whereas using a carbon anode in the same plating bath would cause the plating metal ions to run low. Refer to half-equations.",
            marks: 5,
            modelAnswer:
              "With an active anode of the plating metal (e.g. silver), the anode is oxidised and dissolves: Ag → Ag+ + e-. This releases Ag+ into solution at the same rate as Ag+ is deposited at the cathode (Ag+ + e- → Ag), so the concentration stays steady.\n" +
              "With a carbon (inert) anode, the anode does not dissolve; instead OH- is oxidised to oxygen (4OH- → O₂ + 2H₂O + 4e-). No Ag+ is added back, so as Ag+ is deposited at the cathode the concentration steadily falls and plating slows or stops.",
            markScheme: [
              "Active anode dissolves: Ag → Ag+ + e- [1]",
              "Releases Ag+ at the same rate it is removed at cathode [1]",
              "So concentration constant [1]",
              "Carbon anode: OH- oxidised / O₂ evolved, anode does not add Ag+ [1]",
              "So Ag+ concentration falls / plating slows or stops [1]",
            ],
            commonError: "Forgetting to say what the carbon anode does instead (oxygen from OH-).",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "challenge",
            hints: [
              "What is oxidised at an active silver anode?",
              "What is oxidised at a carbon anode if no halide is present?",
              "Balance the ions added against the ions removed.",
            ],
            strategy: "Compare the anode half-equation for active vs inert and balance ion supply against removal.",
          },
          {
            id: "chem-electrochemistry-bq2-09",
            question: "A current of 1.5 A is passed through silver nitrate solution for 10 minutes during electroplating. (a) Calculate the charge passed. (b) Given that this charge is 0.0093 mol of electrons, calculate the mass of silver deposited (Ag = 108; Ag+ + e- → Ag).",
            marks: 5,
            modelAnswer:
              "(a) Time = 10 x 60 = 600 s. Q = I x t = 1.5 x 600 = 900 C.\n" +
              "(b) Ag+ + e- → Ag, so moles of Ag = moles of electrons = 0.0093 mol. Mass = moles x molar mass = 0.0093 x 108 = 1.0 g (2 s.f.).",
            markScheme: [
              "Time = 600 s [1]",
              "Q = 1.5 x 600 = 900 C [1]",
              "Moles of Ag = moles of electrons = 0.0093 mol [1]",
              "Mass = 0.0093 x 108 [1]",
              "Mass = 1.0 g (accept 1.00-1.01 g) [1]",
            ],
            commonError: "Dividing the moles of electrons by 2 — silver only needs one electron per atom (Ag+).",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Convert minutes to seconds first.",
              "Ag+ needs only 1 electron per atom.",
              "Mass = moles x Ar.",
            ],
            strategy: "Q = I x t → mol electrons → (1:1 for Ag) → mass = mol x Ar.",
            solutions: [
              {
                label: "Worked calculation",
                steps: [
                  "Time = 10 min x 60 = 600 s.",
                  "Q = I x t = 1.5 A x 600 s = 900 C.",
                  "Given moles of electrons = 0.0093 mol.",
                  "Ag+ + e- → Ag: 1 electron per silver atom, so mol Ag = 0.0093 mol.",
                  "Mass = 0.0093 mol x 108 g/mol = 1.0 g (2 s.f.).",
                ],
              },
            ],
          },
          {
            id: "chem-electrochemistry-bq2-10",
            question: "The same quantity of charge is passed in series through one cell containing silver nitrate and another containing copper(II) sulfate. Explain, with reference to the half-equations, why more moles of silver are deposited than copper, and state the ratio of moles of silver to moles of copper.",
            marks: 5,
            modelAnswer:
              "Silver: Ag+ + e- → Ag needs 1 electron per atom. Copper: Cu2+ + 2e- → Cu needs 2 electrons per atom.\n" +
              "Because the cells are in series, the same number of electrons passes through each. With only 1 electron needed per silver atom but 2 per copper atom, twice as many silver atoms are produced for the same electrons.\n" +
              "Therefore the ratio of moles of silver to moles of copper is 2:1.",
            markScheme: [
              "Ag+ + e- → Ag (1 electron) [1]",
              "Cu2+ + 2e- → Cu (2 electrons) [1]",
              "Same electrons pass (series) [1]",
              "Silver needs fewer electrons per atom → more atoms [1]",
              "Ratio moles Ag : moles Cu = 2 : 1 [1]",
            ],
            commonError: "Giving the ratio as 1:2 (the wrong way round) — silver is the larger amount.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Compare electrons per atom for Ag+ and Cu2+.",
              "Series circuit means equal electrons through both cells.",
              "Fewer electrons per atom means more atoms deposited.",
            ],
            strategy: "Use electrons-per-ion ratios with equal total electrons to compare amounts deposited.",
          },
        ],
      },
      {
        id: "chem-electrochemistry-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Half-equations, fuel cells, and quantitative electrolysis.",
        questions: [
          {
            id: "chem-electrochemistry-bq3-01",
            question: "State whether each of the following is oxidation or reduction, and explain your choice in terms of electrons: (a) Cu2+ + 2e- → Cu, (b) 2Cl- → Cl₂ + 2e-, (c) Cu → Cu2+ + 2e-.",
            marks: 3,
            modelAnswer:
              "(a) Reduction — Cu2+ gains electrons.\n" +
              "(b) Oxidation — Cl- loses electrons.\n" +
              "(c) Oxidation — copper atoms lose electrons to form ions.",
            markScheme: [
              "(a) reduction (gain of electrons) [1]",
              "(b) oxidation (loss of electrons) [1]",
              "(c) oxidation (loss of electrons) [1]",
            ],
            commonError: "Confusing oxidation and reduction; use OIL RIG to keep them straight.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bq3-02",
            question: "(a) Write the overall equation for the hydrogen–oxygen fuel cell. (b) State the energy conversion that takes place. (c) Give one reason a fuel cell is more environmentally friendly than burning a hydrocarbon fuel.",
            marks: 4,
            modelAnswer:
              "(a) 2H₂ + O₂ → 2H₂O.\n" +
              "(b) Chemical energy is converted directly into electrical energy.\n" +
              "(c) The only product is water, so no carbon dioxide or other pollutants are produced (unlike burning a hydrocarbon, which releases CO₂).",
            markScheme: [
              "Overall equation 2H₂ + O₂ → 2H₂O [1]",
              "Chemical to electrical energy [1]",
              "Only product is water [1]",
              "No CO₂ / no pollutants (vs hydrocarbon) [1]",
            ],
            commonError: "Writing the energy conversion as chemical to heat — the point of a fuel cell is direct conversion to electricity.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bq3-03",
            question: "Write balanced half-equations for the following discharges: (a) hydrogen at a cathode, (b) bromine at an anode, (c) aluminium at a cathode, (d) oxygen from hydroxide at an anode.",
            marks: 4,
            modelAnswer:
              "(a) 2H+ + 2e- → H₂.\n" +
              "(b) 2Br- → Br₂ + 2e-.\n" +
              "(c) Al3+ + 3e- → Al.\n" +
              "(d) 4OH- → O₂ + 2H₂O + 4e-.",
            markScheme: [
              "(a) 2H+ + 2e- → H₂ [1]",
              "(b) 2Br- → Br₂ + 2e- [1]",
              "(c) Al3+ + 3e- → Al [1]",
              "(d) 4OH- → O₂ + 2H₂O + 4e- [1]",
            ],
            commonError: "Leaving halogens or hydrogen as single atoms instead of diatomic molecules.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "Hydrogen, oxygen and the halogens are diatomic.",
              "Cathode: electrons on the left; anode: electrons on the right.",
              "Balance charge after balancing atoms.",
            ],
            strategy: "Balance atoms (including diatomics) then add electrons to balance charge.",
          },
          {
            id: "chem-electrochemistry-bq3-04",
            question: "Combine the half-equations for the electrolysis of dilute sulfuric acid into a single overall equation, showing your scaling. The half-equations are 2H+ + 2e- → H₂ (cathode) and 4OH- → O₂ + 2H₂O + 4e- (anode).",
            marks: 4,
            modelAnswer:
              "The anode releases 4 electrons but the cathode uses only 2, so multiply the cathode equation by 2: 4H+ + 4e- → 2H₂.\n" +
              "Now add to the anode equation: 4H+ + 4OH- → 2H₂ + O₂ + 2H₂O.\n" +
              "Since 4H+ + 4OH- = 4H₂O, this simplifies to 4H₂O → 2H₂ + O₂ + 2H₂O, i.e. 2H₂O → 2H₂ + O₂.",
            markScheme: [
              "Multiply cathode by 2: 4H+ + 4e- → 2H₂ [1]",
              "Electrons cancel (4 each side) [1]",
              "Combine: 4H+ + 4OH- → 2H₂ + O₂ + 2H₂O [1]",
              "Simplify to 2H₂O → 2H₂ + O₂ [1]",
            ],
            commonError: "Not scaling the cathode equation so the electrons do not cancel.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "Make the electrons equal: scale the cathode by 2.",
              "Add the equations and cancel electrons.",
              "Recognise 4H+ + 4OH- = 4H₂O and simplify.",
            ],
            strategy: "Equalise electrons → add → combine H+ and OH- into water → simplify.",
          },
          {
            id: "chem-electrochemistry-bq3-05",
            question: "A current of 2.0 A is passed through molten sodium chloride for 16 minutes 5 seconds (965 s). (a) Calculate the charge passed. (b) Given that 1930 C corresponds to about 0.020 mol of electrons, estimate the moles of electrons passed here. (c) State the half-equation for the product at the cathode.",
            marks: 5,
            modelAnswer:
              "(a) Q = I x t = 2.0 x 965 = 1930 C.\n" +
              "(b) The charge here (1930 C) is the stated reference value, so the moles of electrons = 0.020 mol.\n" +
              "(c) Cathode: Na+ + e- → Na (sodium is the only cation in the molten salt).",
            markScheme: [
              "Q = 2.0 x 965 = 1930 C [1]",
              "Recognise 1930 C = 0.020 mol electrons [1]",
              "Moles of electrons = 0.020 mol [1]",
              "Cathode half-equation Na+ + e- → Na [1]",
              "Correct product = sodium [1]",
            ],
            commonError: "Writing the cathode as 2H+ + 2e- → H₂ — there is no water in a MOLTEN salt, so sodium is discharged.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "core",
            hints: [
              "Q = I x t with time already in seconds.",
              "Molten (not aqueous) means no water and no H+.",
              "The cathode discharges the metal cation Na+.",
            ],
            strategy: "Calculate Q → map to moles of electrons → remember molten means metal is discharged.",
          },
          {
            id: "chem-electrochemistry-bq3-06",
            question: "0.030 mol of electrons is passed through three separate cells. Calculate the moles of product formed at the cathode in each: (a) silver from Ag+, (b) copper from Cu2+, (c) aluminium from Al3+.",
            marks: 3,
            modelAnswer:
              "(a) Ag+ + e- → Ag: 1 electron per atom, so moles of Ag = 0.030 mol.\n" +
              "(b) Cu2+ + 2e- → Cu: 2 electrons per atom, so moles of Cu = 0.030 / 2 = 0.015 mol.\n" +
              "(c) Al3+ + 3e- → Al: 3 electrons per atom, so moles of Al = 0.030 / 3 = 0.010 mol.",
            markScheme: [
              "(a) 0.030 mol Ag [1]",
              "(b) 0.015 mol Cu [1]",
              "(c) 0.010 mol Al [1]",
            ],
            commonError: "Using the same divisor for all three; the divisor is the ionic charge (1, 2, 3).",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "core",
            hints: [
              "Divide moles of electrons by the charge on each ion.",
              "Ag+ divide by 1, Cu2+ by 2, Al3+ by 3.",
              "Check each half-equation for the electron count.",
            ],
            strategy: "mol product = mol electrons / ionic charge.",
          },
          {
            id: "chem-electrochemistry-bq3-07",
            question: "Write the anode and cathode half-equations for an alkaline hydrogen–oxygen fuel cell, then show that they combine to give 2H₂ + O₂ → 2H₂O.",
            marks: 5,
            modelAnswer:
              "Anode (oxidation): H₂ + 2OH- → 2H₂O + 2e-. Multiply by 2: 2H₂ + 4OH- → 4H₂O + 4e-.\n" +
              "Cathode (reduction): O₂ + 2H₂O + 4e- → 4OH-.\n" +
              "Add: 2H₂ + 4OH- + O₂ + 2H₂O → 4H₂O + 4OH-. Cancel 4OH- from both sides and 2H₂O: 2H₂ + O₂ → 2H₂O.",
            markScheme: [
              "Anode: H₂ + 2OH- → 2H₂O + 2e- [1]",
              "Cathode: O₂ + 2H₂O + 4e- → 4OH- [1]",
              "Scale anode by 2 so electrons match (4e-) [1]",
              "Add and cancel OH- and H₂O [1]",
              "Overall 2H₂ + O₂ → 2H₂O [1]",
            ],
            commonError: "Not scaling the hydrogen half-equation to match the 4 electrons of the oxygen step.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "challenge",
            hints: [
              "Anode oxidises H₂ (electrons on the right).",
              "Cathode reduces O₂ (electrons on the left).",
              "Match the electrons (4) before adding.",
              "Cancel OH- and water that appear on both sides.",
            ],
            strategy: "Write both half-equations → equalise electrons → add → cancel common species.",
          },
          {
            id: "chem-electrochemistry-bq3-08",
            question: "A current of 0.80 A flows for 1 hour through copper(II) sulfate solution with copper electrodes. (a) Calculate the charge passed. (b) Given that 2880 C corresponds to 0.0299 mol of electrons, calculate the mass of copper deposited (Cu = 64). (c) State what happens to the mass of the anode.",
            marks: 6,
            modelAnswer:
              "(a) Time = 1 hour = 3600 s. Q = I x t = 0.80 x 3600 = 2880 C.\n" +
              "(b) Cu2+ + 2e- → Cu, so moles of Cu = 0.0299 / 2 = 0.0150 mol. Mass = moles x molar mass = 0.0150 x 64 = 0.96 g (2 s.f.).\n" +
              "(c) The copper anode loses the same mass (0.96 g) as it dissolves: Cu → Cu2+ + 2e-.",
            markScheme: [
              "Time = 3600 s [1]",
              "Q = 0.80 x 3600 = 2880 C [1]",
              "Moles of Cu = 0.0299 / 2 = 0.0150 mol [1]",
              "Mass = 0.0150 x 64 [1]",
              "Mass deposited = 0.96 g (accept 0.95-0.96 g) [1]",
              "Anode loses the same mass / about 0.96 g [1]",
            ],
            commonError: "Forgetting to convert 1 hour to 3600 s, or not dividing the electrons by 2 for Cu2+.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Convert 1 hour to seconds (3600 s).",
              "Q = I x t.",
              "Cu2+ needs 2 electrons per atom.",
              "Mass = moles x Ar; the anode loses the same mass.",
            ],
            strategy: "Q = I x t → mol electrons → divide by 2 for Cu → mass = mol x Ar → anode mirrors cathode.",
            solutions: [
              {
                label: "Worked calculation",
                steps: [
                  "Time = 1 h x 3600 = 3600 s.",
                  "Q = I x t = 0.80 A x 3600 s = 2880 C.",
                  "Given moles of electrons = 0.0299 mol.",
                  "Cu2+ + 2e- → Cu: 2 electrons per copper atom.",
                  "Moles of Cu = 0.0299 / 2 = 0.0150 mol.",
                  "Mass = 0.0150 mol x 64 g/mol = 0.96 g (2 s.f.).",
                  "Active copper anode dissolves by the same amount, losing about 0.96 g.",
                ],
              },
            ],
          },
          {
            id: "chem-electrochemistry-bq3-09",
            question: "Explain, in terms of electron flow and ion movement, how the electric circuit is completed during the electrolysis of molten lead(II) bromide. Refer to the external wires and to the electrolyte.",
            marks: 5,
            modelAnswer:
              "In the external wires, electrons flow from the negative terminal of the supply to the cathode, and from the anode back to the positive terminal of the supply.\n" +
              "In the electrolyte, charge is carried by moving ions, not electrons: Pb2+ cations move towards the cathode and Br- anions move towards the anode.\n" +
              "At the cathode electrons are given to Pb2+ (Pb2+ + 2e- → Pb); at the anode Br- gives up electrons (2Br- → Br₂ + 2e-). The movement of ions in the melt plus electrons in the wires forms a complete circuit.",
            markScheme: [
              "Electrons flow in wires from supply to cathode [1]",
              "Electrons flow from anode back to supply [1]",
              "In the electrolyte, ions (not electrons) carry the charge [1]",
              "Pb2+ to cathode, Br- to anode [1]",
              "Discharge at each electrode completes the circuit [1]",
            ],
            commonError: "Saying electrons travel through the electrolyte — in the melt the charge is carried by ions.",
            guideRef: "What is Electrolysis?",
            difficulty: "challenge",
            hints: [
              "What carries charge in the metal wires?",
              "What carries charge in the molten electrolyte?",
              "Connect electron flow at the electrodes to ion discharge.",
            ],
            strategy: "Separate the two charge carriers: electrons in wires, ions in the electrolyte.",
          },
          {
            id: "chem-electrochemistry-bq3-10",
            question: "In the electrolysis of acidified water, 48 cm³ of hydrogen is collected at the cathode. (a) Predict the volume of oxygen collected at the anode under the same conditions. (b) Explain your answer using the overall equation. (c) State why the volumes are measured under the same conditions of temperature and pressure.",
            marks: 4,
            modelAnswer:
              "(a) 24 cm³ of oxygen.\n" +
              "(b) The overall reaction is 2H₂O → 2H₂ + O₂, giving hydrogen and oxygen in a 2:1 mole ratio. By Avogadro's law equal volumes of gas (at the same T and p) contain equal moles, so the volume of oxygen is half that of hydrogen: 48 / 2 = 24 cm³.\n" +
              "(c) Gas volume depends on temperature and pressure, so the comparison is only valid if both gases are measured under the same conditions.",
            markScheme: [
              "Volume of oxygen = 24 cm³ [1]",
              "Overall equation 2H₂O → 2H₂ + O₂ / 2:1 ratio [1]",
              "Equal volumes = equal moles (Avogadro) so O₂ is half [1]",
              "Same T and p needed because gas volume depends on them [1]",
            ],
            commonError: "Giving 96 cm³ (doubling instead of halving) — oxygen is the smaller volume.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "challenge",
            hints: [
              "Write the overall equation for water decomposition.",
              "Use the mole ratio with Avogadro's law (equal volumes = equal moles).",
              "Hydrogen volume is twice the oxygen volume.",
            ],
            strategy: "Overall equation → mole ratio → apply equal volumes = equal moles → halve for oxygen.",
            solutions: [
              {
                label: "Worked calculation",
                steps: [
                  "Overall: 2H₂O → 2H₂ + O₂.",
                  "Mole ratio H₂ : O₂ = 2 : 1.",
                  "At the same T and p, volume ratio equals mole ratio (Avogadro).",
                  "Volume of O₂ = 48 cm³ / 2 = 24 cm³.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-electrochemistry-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Synoptic and challenge structured questions across the whole topic.",
        questions: [
          {
            id: "chem-electrochemistry-bq4-01",
            question: "Define the terms (a) cation, (b) anion, and (c) discharge, as used in electrolysis.",
            marks: 3,
            modelAnswer:
              "(a) A cation is a positively charged ion, attracted to the cathode.\n" +
              "(b) An anion is a negatively charged ion, attracted to the anode.\n" +
              "(c) Discharge is the process in which an ion gains or loses electrons at an electrode to become a neutral atom or molecule.",
            markScheme: [
              "Cation: positive ion (to cathode) [1]",
              "Anion: negative ion (to anode) [1]",
              "Discharge: ion gains/loses electrons to become neutral [1]",
            ],
            commonError: "Mixing up cation and anion — cations go to the cathode; remember: anions to anode.",
            guideRef: "What is Electrolysis?",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bq4-02",
            question: "Aluminium and copper are both extracted from compounds. (a) State why aluminium is extracted by electrolysis but copper can be obtained by reduction with carbon. (b) Name the aluminium compound electrolysed and the substance added to lower its melting point.",
            marks: 4,
            modelAnswer:
              "(a) Aluminium is more reactive than carbon, so carbon cannot reduce its oxide; electrolysis is needed. Copper is less reactive than carbon, so carbon can reduce copper oxide to copper.\n" +
              "(b) The compound electrolysed is aluminium oxide (Al₂O₃, from purified bauxite). Cryolite (Na₃AlF₆) is added to lower the melting point.",
            markScheme: [
              "Aluminium more reactive than carbon / cannot be reduced by carbon [1]",
              "Copper less reactive than carbon / can be reduced by carbon [1]",
              "Compound: aluminium oxide / Al₂O₃ [1]",
              "Cryolite added to lower the melting point [1]",
            ],
            commonError: "Saying aluminium is electrolysed because 'it is a metal' — the real reason is its position above carbon in the reactivity series.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "warmup",
          },
          {
            id: "chem-electrochemistry-bq4-03",
            question: "A solution contains a mixture of copper(II) nitrate and dilute nitric acid and is electrolysed with carbon electrodes. (a) List all the ions present. (b) Predict the product at each electrode with reasons. (c) Suggest what happens to the pH of the solution near the cathode and explain why.",
            marks: 7,
            modelAnswer:
              "(a) Cu2+, NO₃-, H+, OH- (H+ from the acid and water; OH- from water).\n" +
              "(b) Cathode: copper, because Cu2+ is less reactive than hydrogen, so it is discharged in preference: Cu2+ + 2e- → Cu. Anode: oxygen, because nitrate is not discharged and no halide is present, so OH- is oxidised: 4OH- → O₂ + 2H₂O + 4e-.\n" +
              "(c) As copper is deposited, Cu2+ is removed; H+ ions are not discharged (copper goes first) and remain, while the anode reaction removes OH- (it is oxidised), so the solution stays acidic or becomes slightly more acidic. (Accept: pH decreases / stays low.)",
            markScheme: [
              "Cu2+ and NO₃- [1]",
              "H+ and OH- (from acid/water) [1]",
              "Cathode: copper, Cu less reactive than H [1]",
              "Cathode half-equation Cu2+ + 2e- → Cu [1]",
              "Anode: oxygen (nitrate not discharged, no halide) [1]",
              "Anode half-equation 4OH- → O₂ + 2H₂O + 4e- [1]",
              "Solution stays/becomes more acidic (OH- removed, H+ remains) [1]",
            ],
            commonError: "Predicting hydrogen at the cathode — copper is discharged in preference because it is less reactive than hydrogen.",
            guideRef: "Worked Examples — Aqueous Electrolysis",
            difficulty: "challenge",
            hints: [
              "Include H+ from both the acid and water.",
              "Cathode: copper is below hydrogen, so it discharges first.",
              "Nitrate behaves like sulfate — it is not discharged.",
              "Removing OH- at the anode while H+ remains affects the pH.",
            ],
            strategy: "List all ions → apply selectivity rules → track H+ and OH- to deduce the pH change.",
          },
          {
            id: "chem-electrochemistry-bq4-04",
            question: "Compare the products of electrolysing (a) molten lead(II) bromide and (b) concentrated aqueous lead(II) bromide, both with inert electrodes. Explain any differences.",
            marks: 6,
            modelAnswer:
              "(a) Molten PbBr₂: cathode gives lead (Pb2+ + 2e- → Pb); anode gives bromine (2Br- → Br₂ + 2e-). Only Pb2+ and Br- are present.\n" +
              "(b) Concentrated aqueous PbBr₂: cathode still gives lead, because Pb is less reactive than hydrogen, so Pb2+ is discharged in preference to H+ (Pb2+ + 2e- → Pb). Anode gives bromine, because the bromide is concentrated (2Br- → Br₂ + 2e-).\n" +
              "Difference: in the aqueous case water provides extra H+ and OH- ions, but here the products are the same because lead is below hydrogen and the bromide is concentrated. The key idea is that the selectivity rules still predict lead and bromine.",
            markScheme: [
              "Molten cathode: lead / Pb2+ + 2e- → Pb [1]",
              "Molten anode: bromine / 2Br- → Br₂ + 2e- [1]",
              "Aqueous cathode: still lead (Pb less reactive than H) [1]",
              "Aqueous anode: bromine (concentrated halide) [1]",
              "Recognise water adds H+ and OH- in the aqueous case [1]",
              "Conclude products are the same here (rules still give Pb and Br₂) [1]",
            ],
            commonError: "Assuming the aqueous case must differ — here it does not, because lead is below hydrogen and the bromide is concentrated.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "challenge",
            hints: [
              "Molten contains only Pb2+ and Br-.",
              "Aqueous adds H+ and OH- from water — apply the rules.",
              "Is lead above or below hydrogen?",
              "Is the bromide concentrated?",
            ],
            strategy: "Identify ions in each case → apply selectivity rules → compare and explain why they match here.",
          },
          {
            id: "chem-electrochemistry-bq4-05",
            question: "Hydrogen for fuel cells can be made by electrolysis of water using electricity from renewable sources. (a) Write the half-equations for the production of hydrogen and oxygen from acidified water. (b) Explain why making hydrogen this way can be described as 'green'. (c) State one practical disadvantage of using hydrogen as a fuel.",
            marks: 5,
            modelAnswer:
              "(a) Cathode: 2H+ + 2e- → H₂. Anode: 4OH- → O₂ + 2H₂O + 4e- (accept 2H₂O → O₂ + 4H+ + 4e-).\n" +
              "(b) If the electricity comes from a renewable source (e.g. solar or wind), no fossil fuels are burned, so no CO₂ is released in making the hydrogen; the fuel cell then produces only water. The whole cycle can be effectively carbon-free.\n" +
              "(c) Hydrogen is a flammable gas that is difficult and potentially dangerous to store and transport (needs high pressure or very low temperature).",
            markScheme: [
              "Cathode: 2H+ + 2e- → H₂ [1]",
              "Anode: 4OH- → O₂ + 2H₂O + 4e- (or 2H₂O → O₂ + 4H+ + 4e-) [1]",
              "Renewable electricity → no CO₂ in making H₂ [1]",
              "Fuel cell then emits only water / carbon-free cycle [1]",
              "Disadvantage: H₂ hard/dangerous to store or transport [1]",
            ],
            commonError: "Calling hydrogen green without noting that it is only green if the electricity is from a renewable source.",
            guideRef: "Electroplating, Copper Purification, and the Hydrogen–Oxygen Fuel Cell",
            difficulty: "core",
            hints: [
              "Electrolysis of water gives H₂ at the cathode and O₂ at the anode.",
              "The carbon footprint depends on where the electricity comes from.",
              "Recall a storage/transport problem with hydrogen.",
            ],
            strategy: "Write water-splitting half-equations → tie 'green' to renewable electricity → recall a hydrogen drawback.",
          },
          {
            id: "chem-electrochemistry-bq4-06",
            question: "Predict the products and write the half-equations for the electrolysis of concentrated magnesium chloride solution with inert electrodes. Explain the cathode product carefully.",
            marks: 5,
            modelAnswer:
              "Ions present: Mg2+, Cl-, H+, OH-.\n" +
              "Cathode: hydrogen is produced, not magnesium, because magnesium is more reactive than hydrogen, so H+ is discharged in preference: 2H+ + 2e- → H₂.\n" +
              "Anode: chlorine is produced because the chloride is concentrated (halide rule): 2Cl- → Cl₂ + 2e-.",
            markScheme: [
              "Ions: Mg2+, Cl-, H+, OH- [1]",
              "Cathode product: hydrogen [1]",
              "Reason: Mg more reactive than H, so H+ discharged [1]",
              "Cathode half-equation 2H+ + 2e- → H₂ [1]",
              "Anode: chlorine / 2Cl- → Cl₂ + 2e- (concentrated halide) [1]",
            ],
            commonError: "Predicting magnesium at the cathode — magnesium is too reactive, so hydrogen is discharged instead.",
            guideRef: "Electrolysis of Aqueous Solutions — Selectivity Rules",
            difficulty: "core",
            hints: [
              "List ions including those from water.",
              "Is magnesium above or below hydrogen in reactivity?",
              "Concentrated halide at the anode gives the halogen.",
            ],
            strategy: "List ions → cathode rule (reactivity) → anode rule (concentration).",
          },
          {
            id: "chem-electrochemistry-bq4-07",
            question: "A student passes a current through two cells in series: cell 1 contains AgNO₃ and cell 2 contains CuSO₄, both with inert cathodes. After the experiment, 0.108 g of silver is deposited (Ag = 108). (a) Calculate the moles of silver deposited. (b) Calculate the moles of electrons passed. (c) Calculate the mass of copper deposited in cell 2 (Cu = 64; Cu2+ + 2e- → Cu).",
            marks: 6,
            modelAnswer:
              "(a) Moles of Ag = mass / Ar = 0.108 / 108 = 0.00100 mol.\n" +
              "(b) Ag+ + e- → Ag, so moles of electrons = moles of Ag = 0.00100 mol.\n" +
              "(c) The same charge passes through cell 2, so 0.00100 mol of electrons. Cu2+ + 2e- → Cu, so moles of Cu = 0.00100 / 2 = 0.000500 mol. Mass = 0.000500 x 64 = 0.032 g.",
            markScheme: [
              "Moles of Ag = 0.108 / 108 = 0.00100 mol [1]",
              "Moles of electrons = 0.00100 mol (1:1 for Ag) [1]",
              "Same electrons in cell 2 (series) [1]",
              "Moles of Cu = 0.00100 / 2 = 0.000500 mol [1]",
              "Mass = 0.000500 x 64 [1]",
              "Mass of copper = 0.032 g [1]",
            ],
            commonError: "Using the same number of moles for copper as for silver — copper needs 2 electrons per atom, so half the moles form.",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Moles = mass / Ar.",
              "Ag+ needs 1 electron; same electrons flow through both cells.",
              "Cu2+ needs 2 electrons, so divide by 2.",
              "Mass = moles x Ar.",
            ],
            strategy: "mol Ag → mol electrons → (series, same electrons) → mol Cu = electrons/2 → mass.",
            solutions: [
              {
                label: "Worked calculation",
                steps: [
                  "Moles of Ag = 0.108 g / 108 g/mol = 0.00100 mol.",
                  "Ag+ + e- → Ag: 1 electron per atom, so moles of electrons = 0.00100 mol.",
                  "Series circuit: the same 0.00100 mol of electrons flows through cell 2.",
                  "Cu2+ + 2e- → Cu: moles of Cu = 0.00100 / 2 = 0.000500 mol.",
                  "Mass of Cu = 0.000500 mol x 64 g/mol = 0.032 g.",
                ],
              },
            ],
          },
          {
            id: "chem-electrochemistry-bq4-08",
            question: "Steel ships are sometimes protected from corrosion by attaching blocks of a more reactive metal. Although this is sacrificial protection rather than electrolysis, the underlying ideas overlap. (a) State which species is oxidised. (b) Explain, in terms of electrons, why the steel is protected. (c) Suggest one reason electroplating with tin protects steel only while the coating is intact.",
            marks: 5,
            modelAnswer:
              "(a) The more reactive metal block (e.g. zinc or magnesium) is oxidised.\n" +
              "(b) The more reactive metal loses electrons more readily, so it is oxidised in preference to iron. By supplying electrons to the steel, it stops the iron from losing electrons (being oxidised), so the steel does not rust.\n" +
              "(c) Tin is less reactive than iron, so if the tin coating is scratched, the exposed iron is oxidised in preference to tin and rusts faster; protection only works while the coating fully covers the steel.",
            markScheme: [
              "Reactive metal (zinc/magnesium) is oxidised [1]",
              "It loses electrons more readily than iron [1]",
              "Supplies electrons to steel / iron not oxidised [1]",
              "Tin less reactive than iron [1]",
              "If scratched, iron is oxidised in preference / rusts faster [1]",
            ],
            commonError: "Saying the steel is oxidised — in sacrificial protection the reactive metal is the one oxidised, protecting the steel.",
            guideRef: "What is Electrolysis?",
            difficulty: "challenge",
            hints: [
              "Which metal loses electrons more readily?",
              "Oxidation is loss of electrons (OIL RIG).",
              "Compare the reactivity of tin and iron when the coating breaks.",
            ],
            strategy: "Identify the more reactive metal as the one oxidised; relate electron supply to protection of iron.",
          },
          {
            id: "chem-electrochemistry-bq4-09",
            question: "A current of 5.0 A is passed through molten aluminium oxide for 1 hour. (a) Calculate the charge passed. (b) Given that 18000 C corresponds to about 0.187 mol of electrons, calculate the mass of aluminium produced (Al = 27; Al3+ + 3e- → Al). (c) State the half-equation at the anode.",
            marks: 6,
            modelAnswer:
              "(a) Time = 1 hour = 3600 s. Q = I x t = 5.0 x 3600 = 18000 C.\n" +
              "(b) Al3+ + 3e- → Al, so moles of Al = moles of electrons / 3 = 0.187 / 3 = 0.0623 mol. Mass = moles x molar mass = 0.0623 x 27 = 1.7 g (2 s.f.).\n" +
              "(c) Anode: 2O2- → O₂ + 4e-.",
            markScheme: [
              "Time = 3600 s [1]",
              "Q = 5.0 x 3600 = 18000 C [1]",
              "Moles of Al = 0.187 / 3 = 0.0623 mol [1]",
              "Mass = 0.0623 x 27 [1]",
              "Mass = 1.7 g (accept 1.68-1.69 g) [1]",
              "Anode half-equation 2O2- → O₂ + 4e- [1]",
            ],
            commonError: "Dividing the electrons by 2 instead of 3 — aluminium ions carry a 3+ charge.",
            guideRef: "Electrolysis of Molten Compounds",
            difficulty: "challenge",
            hints: [
              "Convert 1 hour to seconds.",
              "Q = I x t.",
              "Al3+ needs 3 electrons per atom.",
              "Mass = moles x Ar.",
            ],
            strategy: "Q = I x t → mol electrons → divide by 3 for Al3+ → mass = mol x Ar.",
            solutions: [
              {
                label: "Worked calculation",
                steps: [
                  "Time = 1 h x 3600 = 3600 s.",
                  "Q = I x t = 5.0 A x 3600 s = 18000 C.",
                  "Given moles of electrons = 0.187 mol.",
                  "Al3+ + 3e- → Al: 3 electrons per aluminium atom.",
                  "Moles of Al = 0.187 / 3 = 0.0623 mol.",
                  "Mass = 0.0623 mol x 27 g/mol = 1.7 g (2 s.f.).",
                ],
              },
            ],
          },
          {
            id: "chem-electrochemistry-bq4-10",
            question: "Design an experiment to compare how the mass of copper deposited at a cathode depends on the time for which a fixed current is passed through copper(II) sulfate solution. State the variables, the measurements, and the expected shape of a graph of mass against time, with an explanation.",
            marks: 6,
            modelAnswer:
              "Independent variable: time the current flows. Dependent variable: mass of copper deposited. Control variables: current (kept constant with a variable resistor/ammeter), concentration of CuSO₄, same electrodes, same temperature.\n" +
              "Method: weigh the clean dry cathode, pass a fixed current for a measured time, then remove, wash, dry and reweigh the cathode; the increase in mass is the copper deposited. Repeat for several different times.\n" +
              "Expected graph: a straight line through the origin (mass directly proportional to time). This is because, at constant current, charge Q = I x t increases in proportion to time, and the mass deposited is proportional to the charge passed.",
            markScheme: [
              "Independent variable: time; dependent: mass of copper [1]",
              "Control: constant current (named) and any one other (concentration/electrodes/temperature) [1]",
              "Method: weigh cathode before and after [1]",
              "Dry before reweighing / find increase in mass [1]",
              "Graph: straight line through the origin / proportional [1]",
              "Because Q = I x t and mass proportional to charge [1]",
            ],
            commonError: "Not keeping the current constant, or forgetting to dry the cathode before reweighing (trapped solution adds mass).",
            guideRef: "Writing Ionic Half-Equations",
            difficulty: "challenge",
            hints: [
              "Identify which variable you change and which you measure.",
              "List the variables you must keep constant for a fair test.",
              "How do you find the mass deposited from before/after readings?",
              "Link the graph shape to Q = I x t.",
            ],
            strategy: "Define variables → describe weigh-before-and-after method → predict proportional graph from Q = I x t.",
          },
        ],
      },
    ],
  },
};
