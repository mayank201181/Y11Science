import type { Topic } from "../types";

export const bioEnzymes: Topic = {
  id: "bio-enzymes",
  title: "Enzymes",
  subject: "biology",
  icon: "🔑",
  blurb: "Biological catalysts — lock-and-key model, temperature, pH, and experimental investigation.",
  intro:
    "Enzymes are protein molecules that act as biological catalysts — they speed up chemical reactions inside living cells without being used up themselves. " +
    "Understanding how their three-dimensional active site provides specificity, and how temperature and pH affect their shape, is central to IGCSE biology. " +
    "In this guide you will build a complete picture: from the molecular lock-and-key model to reading rate graphs and designing controlled experiments.",

  guide: [
    // ── Section 1 ──────────────────────────────────────────────────────────────
    {
      heading: "Enzymes as Biological Catalysts",
      body:
        "A **catalyst** is a substance that increases the rate of a chemical reaction without being used up. " +
        "Enzymes are **biological catalysts** — they are protein molecules produced by living cells.\n\n" +
        "Because enzymes are not consumed during the reaction, a single enzyme molecule can catalyse the same reaction over and over again. " +
        "This makes them extremely efficient; cells can do enormous amounts of chemistry with tiny amounts of enzyme.\n\n" +
        "Enzymes are involved in virtually every metabolic process:\n" +
        "- **Digestion** — amylase breaks down starch; proteases break down proteins; lipases break down fats.\n" +
        "- **Respiration** — enzymes catalyse the reactions that release energy from glucose.\n" +
        "- **Photosynthesis** — enzymes build glucose from carbon dioxide and water.\n" +
        "- **DNA replication** — DNA polymerase copies genetic information.\n\n" +
        "The naming convention is straightforward: most enzymes end in **-ase**, often named after their substrate. " +
        "Amylase acts on amyl- (starch); lipase on lipids; protease on proteins; catalase on hydrogen peroxide.",
      keyPoints: [
        "Enzymes are protein molecules that act as biological catalysts.",
        "They speed up reactions without being used up (not consumed).",
        "A single enzyme molecule can catalyse thousands of reactions per second.",
        "Most enzyme names end in -ase; many are named after their substrate.",
        "Enzymes are involved in digestion, respiration, photosynthesis, and DNA replication.",
      ],
      discovery: {
        problem:
          "If you add a small piece of raw liver to hydrogen peroxide (H₂O₂), bubbles appear rapidly — far faster than if you heat H₂O₂ on its own. " +
          "The liver is not a chemical you would normally think of as a 'reagent'. What is doing the catalysis, and why does it keep working if you add more H₂O₂?",
        idea:
          "The liver contains the enzyme **catalase**, which catalyses the breakdown: 2H₂O₂ → 2H₂O + O₂. " +
          "Because catalase is not consumed, adding more substrate simply gives more reactions — the enzyme molecules are reused immediately. " +
          "This is the hallmark of a catalyst: it lowers activation energy and is regenerated.",
      },
      whyItWorks:
        "Enzymes lower the activation energy of a reaction — the energy barrier that must be overcome for reactants to become products. " +
        "By binding the substrate at the active site, the enzyme strains bonds, brings reactants into the correct orientation, or provides a favourable microenvironment, " +
        "all of which make the reaction proceed faster than it would unaided. The enzyme itself is released unchanged.",
    },

    // ── Section 2 ──────────────────────────────────────────────────────────────
    {
      heading: "The Lock-and-Key Model",
      body:
        "The **active site** is a region on the enzyme surface with a precise three-dimensional shape, formed by specific amino acid residues. " +
        "The **substrate** is the molecule the enzyme acts upon; it must have a **complementary shape** to the active site.\n\n" +
        "When the substrate binds to the active site, an **enzyme–substrate complex** forms. " +
        "The reaction then occurs, products are released, and the enzyme is free to accept another substrate molecule.\n\n" +
        "The **lock-and-key model** (proposed by Emil Fischer, 1894) describes this as the substrate (key) fitting precisely into the active site (lock):\n" +
        "- Only a substrate with the correct complementary shape will fit.\n" +
        "- This explains **enzyme specificity** — each enzyme catalyses only one reaction (or a very narrow range).\n" +
        "- Amylase only breaks down starch, not protein; protease only breaks down protein, not starch.\n\n" +
        "*Note for extended understanding:* The more modern **induced-fit model** refines this — the active site flexes slightly to mould around the substrate. " +
        "At IGCSE level you are expected to use the lock-and-key model, but knowing that the fit is not perfectly rigid is scientifically accurate.",
      diagrams: [
        {
          caption: "Lock-and-key model: enzyme, substrate, enzyme–substrate complex, and products",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Lock-and-key model showing enzyme active site binding substrate to form enzyme-substrate complex then releasing products">' +
            // Enzyme 1 — free
            '<rect x="10" y="60" width="70" height="80" rx="8" fill="#1e3a5f" stroke="#38bdf8" stroke-width="2"/>' +
            '<text x="45" y="52" text-anchor="middle" font-size="10" fill="#b7bce0">Enzyme</text>' +
            // active site notch
            '<rect x="70" y="88" width="20" height="24" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>' +
            '<text x="45" y="108" text-anchor="middle" font-size="8" fill="#38bdf8">Active</text>' +
            '<text x="45" y="118" text-anchor="middle" font-size="8" fill="#38bdf8">site</text>' +
            // Substrate 1 — free
            '<rect x="105" y="88" width="24" height="24" rx="4" fill="#fbbf24" stroke="#fbbf24" stroke-width="1"/>' +
            '<text x="117" y="124" text-anchor="middle" font-size="8" fill="#b7bce0">Substrate</text>' +
            // Arrow 1
            '<line x1="142" y1="100" x2="162" y2="100" stroke="#34d399" stroke-width="2" marker-end="url(#arr)"/>' +
            // Enzyme–substrate complex
            '<rect x="165" y="60" width="70" height="80" rx="8" fill="#1e3a5f" stroke="#38bdf8" stroke-width="2"/>' +
            '<text x="200" y="52" text-anchor="middle" font-size="9" fill="#b7bce0">E–S Complex</text>' +
            '<rect x="225" y="88" width="20" height="24" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>' +
            '<rect x="225" y="88" width="20" height="24" rx="4" fill="#fbbf24" fill-opacity="0.8"/>' +
            // Arrow 2
            '<line x1="248" y1="100" x2="268" y2="100" stroke="#34d399" stroke-width="2" marker-end="url(#arr)"/>' +
            // Products
            '<circle cx="282" cy="93" r="8" fill="#fb7185" stroke="#fb7185" stroke-width="1"/>' +
            '<circle cx="296" cy="108" r="7" fill="#a78bfa" stroke="#a78bfa" stroke-width="1"/>' +
            '<text x="289" y="128" text-anchor="middle" font-size="8" fill="#b7bce0">Products</text>' +
            // Enzyme released label
            '<text x="200" y="160" text-anchor="middle" font-size="8" fill="#34d399">Enzyme released unchanged</text>' +
            // Arrow marker
            '<defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#34d399"/></marker></defs>' +
            '</svg>',
        },
      ],
      keyPoints: [
        "The active site has a precise 3D shape complementary to the substrate.",
        "Enzyme + substrate → enzyme–substrate complex → products + free enzyme.",
        "Enzyme specificity means each enzyme catalyses only one (or very few) reaction(s).",
        "The lock-and-key model: substrate (key) fits active site (lock) precisely.",
        "The enzyme is released unchanged after the products leave — it is not used up.",
      ],
      strategies: ["Visualise the 3D shape", "Use complementary as a keyword", "Draw and label the sequence"],
      thinkDeeper:
        "The lock-and-key model implies a perfectly rigid active site. In reality, X-ray crystallography shows the active site subtly reshapes when the substrate arrives — " +
        "this is the **induced-fit model** (Koshland, 1958). Both models agree on specificity and complementary shape; induced-fit better explains why some enzymes can act on a small range of similar substrates.",
    },

    // ── Section 3 ──────────────────────────────────────────────────────────────
    {
      heading: "Effect of Temperature on Enzyme Activity",
      body:
        "Temperature has a dramatic and predictable effect on enzyme activity, producing a characteristic **bell-shaped curve** when rate is plotted against temperature.\n\n" +
        "**Rising temperature (below optimum):**\n" +
        "- Increasing temperature gives molecules more kinetic energy.\n" +
        "- Substrate molecules move faster and collide with the active site more frequently.\n" +
        "- Rate of reaction increases.\n\n" +
        "**Optimum temperature:**\n" +
        "- The temperature at which the enzyme works fastest.\n" +
        "- For most human body enzymes, this is close to 37 °C (body temperature).\n" +
        "- Different organisms have different optima (e.g. thermophilic bacteria have optima above 70 °C).\n\n" +
        "**Above the optimum — denaturation:**\n" +
        "- Excessive heat breaks the **hydrogen bonds** and other interactions that maintain the enzyme's 3D shape.\n" +
        "- The active site changes shape so it is no longer complementary to the substrate.\n" +
        "- The enzyme is **denatured** — its activity is permanently lost.\n" +
        "- **Important misconception:** enzymes are NOT 'killed' — they are not alive. The correct term is **denatured**.\n\n" +
        "A useful rule of thumb: the **Q₁₀ value** describes how much the rate changes for a 10 °C rise in temperature. " +
        "For many enzymes below the optimum, Q₁₀ ≈ 2 (rate roughly doubles per 10 °C rise).",
      diagrams: [
        {
          caption: "Rate of reaction vs temperature — showing optimum and denaturation",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Graph of enzyme activity rate versus temperature showing a bell curve with optimum at 40 degrees Celsius and denaturation beyond that">' +
            // Axes
            '<line x1="40" y1="170" x2="300" y2="170" stroke="#b7bce0" stroke-width="2"/>' +
            '<line x1="40" y1="170" x2="40" y2="20" stroke="#b7bce0" stroke-width="2"/>' +
            // Axis labels
            '<text x="170" y="192" text-anchor="middle" font-size="11" fill="#b7bce0">Temperature (degrees C)</text>' +
            '<text x="12" y="100" text-anchor="middle" font-size="10" fill="#b7bce0" transform="rotate(-90 12 100)">Rate of reaction</text>' +
            // X-axis ticks
            '<line x1="80" y1="170" x2="80" y2="175" stroke="#b7bce0" stroke-width="1"/>' +
            '<text x="80" y="184" text-anchor="middle" font-size="9" fill="#b7bce0">10</text>' +
            '<line x1="120" y1="170" x2="120" y2="175" stroke="#b7bce0" stroke-width="1"/>' +
            '<text x="120" y="184" text-anchor="middle" font-size="9" fill="#b7bce0">20</text>' +
            '<line x1="160" y1="170" x2="160" y2="175" stroke="#b7bce0" stroke-width="1"/>' +
            '<text x="160" y="184" text-anchor="middle" font-size="9" fill="#b7bce0">30</text>' +
            '<line x1="200" y1="170" x2="200" y2="175" stroke="#b7bce0" stroke-width="1"/>' +
            '<text x="200" y="184" text-anchor="middle" font-size="9" fill="#b7bce0">40</text>' +
            '<line x1="240" y1="170" x2="240" y2="175" stroke="#b7bce0" stroke-width="1"/>' +
            '<text x="240" y="184" text-anchor="middle" font-size="9" fill="#b7bce0">50</text>' +
            '<line x1="280" y1="170" x2="280" y2="175" stroke="#b7bce0" stroke-width="1"/>' +
            '<text x="280" y="184" text-anchor="middle" font-size="9" fill="#b7bce0">60</text>' +
            // Bell curve path (approx, peak at 40 C = x=200)
            '<path d="M40,168 C60,165 80,155 100,138 C120,118 140,72 160,42 C180,25 195,22 200,22 C205,22 215,28 230,55 C248,88 265,138 285,165 L295,168" fill="none" stroke="#38bdf8" stroke-width="2.5"/>' +
            // Optimum label
            '<line x1="200" y1="22" x2="200" y2="170" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4,3"/>' +
            '<text x="202" y="38" font-size="9" fill="#fbbf24">Optimum</text>' +
            '<text x="202" y="49" font-size="9" fill="#fbbf24">~40 C</text>' +
            // Denaturation annotation
            '<text x="248" y="85" font-size="9" fill="#fb7185">Denaturation</text>' +
            '<text x="248" y="96" font-size="9" fill="#fb7185">active site</text>' +
            '<text x="248" y="107" font-size="9" fill="#fb7185">shape changes</text>' +
            // Increasing kinetic energy label
            '<text x="70" y="130" font-size="8" fill="#34d399">More</text>' +
            '<text x="70" y="140" font-size="8" fill="#34d399">collisions</text>' +
            '</svg>',
        },
      ],
      keyPoints: [
        "Rate increases with temperature up to the optimum (more kinetic energy → more collisions).",
        "At the optimum temperature, enzyme activity is at its maximum.",
        "Above the optimum, the enzyme is denatured — the active site changes shape permanently.",
        "Denatured enzymes cannot be reactivated by cooling — the structural change is irreversible.",
        "Enzymes are NOT 'killed' by heat — they are denatured (they were never alive).",
      ],
      discovery: {
        problem:
          "A student measures how fast amylase breaks down starch at 10 °C, 20 °C, 30 °C, 40 °C, 50 °C, and 60 °C. " +
          "She finds the rate increases steadily from 10 °C to 40 °C, then drops sharply, reaching zero at 60 °C. " +
          "Predict: if she then cools the 60 °C sample back down to 40 °C, will the rate recover?",
        idea:
          "No — the activity does NOT recover. Above the optimum, the bonds maintaining the active-site shape break permanently. " +
          "Cooling cannot re-form those bonds in the original arrangement. This is the key distinction between **reversible inactivation** (low temperature just slows the enzyme — it is still intact) " +
          "and **irreversible denaturation** (high temperature destroys the active-site shape permanently).",
      },
      whyItWorks:
        "The enzyme's 3D shape is maintained by many weak interactions — hydrogen bonds, ionic bonds, and van der Waals forces — between amino acid side chains. " +
        "These bonds have a total energy comparable to thermal energy at high temperatures. " +
        "When the temperature exceeds a threshold, enough bonds break simultaneously that the polypeptide chain collapses into a different, non-functional conformation. " +
        "Re-cooling provides insufficient energy to re-form the same specific bonds in the original arrangement.",
      strategies: ["Sketch the rate–temperature curve first", "Distinguish reversible vs irreversible", "Use 'denatured' not 'killed'"],
      thinkDeeper:
        "The Q₁₀ concept: Q₁₀ = rate at (T+10)/rate at T. For a typical enzyme below its optimum, Q₁₀ ≈ 2. " +
        "So if the rate at 20 °C is 4 arbitrary units, predict the rate at 30 °C (≈8) and at 40 °C (≈16) — assuming no denaturation. " +
        "Real data deviate above ~35 °C because denaturation begins to dominate.",
    },

    // ── Section 4 ──────────────────────────────────────────────────────────────
    {
      heading: "Effect of pH on Enzyme Activity",
      body:
        "Every enzyme has an **optimum pH** at which it works fastest. Deviating from this optimum — in either direction — reduces activity, and extreme pH denatures the enzyme.\n\n" +
        "**Why pH matters:**\n" +
        "- The active site is shaped by interactions between charged amino acid side chains.\n" +
        "- H⁺ ions (from acids) and OH⁻ ions (from alkalis) interact with these side chains, altering their charge.\n" +
        "- This changes the shape of the active site, so the substrate no longer fits as well.\n" +
        "- Extreme pH breaks the bonds maintaining active-site shape — **denaturation** occurs.\n\n" +
        "**Different enzymes have very different optima:**\n" +
        "- Salivary **amylase** works best at pH 7 (neutral, matching saliva).\n" +
        "- **Pepsin** (a protease in the stomach) works best at pH 2 (strongly acidic, matching gastric acid).\n" +
        "- **Trypsin** (a protease in the small intestine) works best at pH 8 (slightly alkaline).\n" +
        "- **Catalase** works best at pH 7.\n\n" +
        "The graph of rate vs pH is also bell-shaped, but the peak is at the enzyme's specific optimum pH, not necessarily pH 7.",
      diagrams: [
        {
          caption: "Effect of pH on three different enzymes — each has a unique optimum pH",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Graph showing rate of reaction versus pH for pepsin, amylase, and trypsin with peaks at pH 2, 7, and 8 respectively">' +
            // Axes
            '<line x1="40" y1="170" x2="300" y2="170" stroke="#b7bce0" stroke-width="2"/>' +
            '<line x1="40" y1="170" x2="40" y2="20" stroke="#b7bce0" stroke-width="2"/>' +
            // Axis labels
            '<text x="170" y="192" text-anchor="middle" font-size="11" fill="#b7bce0">pH</text>' +
            '<text x="12" y="100" text-anchor="middle" font-size="10" fill="#b7bce0" transform="rotate(-90 12 100)">Rate of reaction</text>' +
            // X-axis ticks pH 1–13
            '<text x="50" y="182" text-anchor="middle" font-size="8" fill="#b7bce0">1</text>' +
            '<text x="70" y="182" text-anchor="middle" font-size="8" fill="#b7bce0">2</text>' +
            '<text x="90" y="182" text-anchor="middle" font-size="8" fill="#b7bce0">3</text>' +
            '<text x="130" y="182" text-anchor="middle" font-size="8" fill="#b7bce0">5</text>' +
            '<text x="170" y="182" text-anchor="middle" font-size="8" fill="#b7bce0">7</text>' +
            '<text x="190" y="182" text-anchor="middle" font-size="8" fill="#b7bce0">8</text>' +
            '<text x="250" y="182" text-anchor="middle" font-size="8" fill="#b7bce0">11</text>' +
            // Pepsin curve — peak at pH 2 (x=70)
            '<path d="M40,168 C50,150 60,50 70,30 C80,50 90,150 110,168" fill="none" stroke="#fb7185" stroke-width="2"/>' +
            '<text x="58" y="25" font-size="8" fill="#fb7185">Pepsin</text>' +
            '<text x="58" y="34" font-size="8" fill="#fb7185">pH 2</text>' +
            // Amylase curve — peak at pH 7 (x=170)
            '<path d="M120,168 C140,140 155,50 170,30 C185,50 200,140 220,168" fill="none" stroke="#38bdf8" stroke-width="2"/>' +
            '<text x="172" y="25" font-size="8" fill="#38bdf8">Amylase</text>' +
            '<text x="172" y="34" font-size="8" fill="#38bdf8">pH 7</text>' +
            // Trypsin curve — peak at pH 8 (x=190)
            '<path d="M150,168 C165,145 178,60 190,35 C202,60 215,145 235,168" fill="none" stroke="#a78bfa" stroke-width="2"/>' +
            '<text x="238" y="50" font-size="8" fill="#a78bfa">Trypsin</text>' +
            '<text x="238" y="59" font-size="8" fill="#a78bfa">pH 8</text>' +
            '</svg>',
        },
      ],
      keyPoints: [
        "Each enzyme has an optimum pH at which its rate of reaction is maximum.",
        "Deviation from optimum pH decreases the rate; extreme pH denatures the enzyme.",
        "Denaturation at extreme pH changes the active-site shape — substrate no longer fits.",
        "Pepsin (stomach protease): optimum pH 2; amylase (saliva): pH 7; trypsin (small intestine): pH 8.",
        "The shape of the active site depends on ionic and hydrogen bonds that are pH-sensitive.",
      ],
      strategies: ["Match enzyme location to expected pH", "Compare pH and temperature denaturation — same mechanism (active site shape change)"],
    },

    // ── Section 5 ──────────────────────────────────────────────────────────────
    {
      heading: "Investigating Enzyme Activity",
      body:
        "IGCSE biology includes practical investigations of enzyme activity. Two classic experiments are frequently examined:\n\n" +
        "**Experiment 1 — Amylase and starch (iodine test):**\n" +
        "- Iodine solution turns blue-black in the presence of starch and remains orange-brown when starch is absent.\n" +
        "- Place amylase solution + starch in a water bath at a chosen temperature.\n" +
        "- At regular intervals (e.g. every 30 s), remove a drop and add to iodine on a spotting tile.\n" +
        "- Time until the iodine no longer turns blue-black = starch completely digested.\n" +
        "- Control variables: concentration of amylase, concentration of starch, pH (buffer), volume.\n" +
        "- Independent variable: temperature (or pH). Dependent variable: time for starch to disappear.\n\n" +
        "**Experiment 2 — Catalase and hydrogen peroxide:**\n" +
        "- Catalase (e.g. from potato or liver discs) catalyses: 2H₂O₂ → 2H₂O + O₂.\n" +
        "- Measure the volume of oxygen gas collected in a gas syringe (or inverted measuring cylinder over water) per unit time.\n" +
        "- Rate = volume of O₂ / time. Compare rates at different temperatures or substrate concentrations.\n\n" +
        "**Key experimental design principles:**\n" +
        "- Change only ONE variable at a time (independent variable); keep all others constant (control variables).\n" +
        "- Repeat at least 3 times and calculate a mean to reduce the effect of random errors.\n" +
        "- Use a water bath (not direct heat) for accurate temperature control.\n" +
        "- Use a buffer solution to maintain constant pH when investigating temperature.",
      keyPoints: [
        "Iodine solution is orange-brown; it turns blue-black in the presence of starch — used to detect starch.",
        "Amylase + starch: measure time until iodine no longer turns blue-black (starch fully digested).",
        "Catalase + H₂O₂: measure volume of O₂ produced per unit time (gas syringe).",
        "Only one variable should change at a time; all others must be controlled.",
        "Repeat experiments and calculate means to improve reliability.",
      ],
      strategies: ["Identify IV, DV, CVs before designing", "Rate = product / time or 1 / time", "Buffer to fix pH; water bath to fix temperature"],
      whyItWorks:
        "The iodine test is a colourimetric assay — the colour change from orange-brown to blue-black is caused by iodine molecules fitting inside the helical coils of amylose (the linear component of starch). " +
        "When amylase has fully hydrolysed all starch into maltose, there are no amylose helices left to trap iodine, so the solution remains orange-brown. " +
        "This gives a clear, observable endpoint that does not require expensive equipment.",
    },

    // ── Section 6 ──────────────────────────────────────────────────────────────
    {
      heading: "Common Misconceptions and Exam Technique",
      body:
        "Several misconceptions about enzymes consistently cost marks in IGCSE examinations.\n\n" +
        "**Misconception 1 — 'The enzyme is killed by high temperature.'**\n" +
        "Enzymes are proteins, not living things. They cannot be killed. The correct term is **denatured**. " +
        "Denaturation means the active-site shape has changed so the substrate no longer fits. Say: 'the enzyme is denatured' or 'the active site changes shape'.\n\n" +
        "**Misconception 2 — 'The enzyme is used up in the reaction.'**\n" +
        "Enzymes are regenerated after each reaction cycle. A tiny amount of enzyme can catalyse enormous quantities of substrate. " +
        "Mark schemes penalise answers that imply the enzyme is consumed.\n\n" +
        "**Misconception 3 — 'Cooling to 0 °C destroys the enzyme.'**\n" +
        "Low temperatures slow the enzyme but do not denature it. Warming back up restores activity. " +
        "Freezing a sample (e.g. for laboratory storage) typically preserves enzyme function — this is why biological samples are often stored at −80 °C.\n\n" +
        "**Misconception 4 — 'All enzymes work best at 37 °C.'**\n" +
        "37 °C is the optimum for many human body enzymes because that is body temperature. " +
        "But enzymes from other organisms have different optima — thermophilic bacteria have optima above 70 °C.\n\n" +
        "**Exam technique for graph questions:**\n" +
        "- Read the axes carefully; note whether the y-axis is 'rate' or 'time taken'.\n" +
        "- Describe the trend in three phases for a temperature curve: rising (reason = more kinetic energy), peak (optimum), falling (denaturation).\n" +
        "- Quote values from the graph when describing results.",
      keyPoints: [
        "Use 'denatured', never 'killed' — enzymes are not alive.",
        "Enzymes are not used up — they are regenerated after each reaction.",
        "Low temperature slows enzymes reversibly; high temperature denatures them irreversibly.",
        "Not all enzymes have a 37 °C optimum — it depends on the organism.",
        "When describing graphs, identify three phases and quote data values.",
      ],
      strategies: ["Replace 'killed' with 'denatured' every time", "Give three phases when describing a rate–temperature curve", "Quote graph values in extended answers"],
    },
  ],

  // ── Learn Smart ─────────────────────────────────────────────────────────────
  learn: {
    keyFacts: [
      "Enzymes are biological catalysts — protein molecules that speed up reactions without being used up.",
      "The active site is a region of complementary shape to the substrate; together they form an enzyme–substrate complex.",
      "Specificity: each enzyme catalyses only one reaction (or a very narrow range) because only the correct substrate fits the active site.",
      "Optimum temperature for most human enzymes is ~37 °C; above this, denaturation occurs irreversibly.",
      "Denaturation means the active-site shape changes permanently so the substrate no longer fits — enzymes are NOT 'killed'.",
      "Each enzyme has an optimum pH; extremes of pH also cause denaturation.",
      "Pepsin: optimum pH 2; salivary amylase: pH 7; trypsin: pH 8; catalase: pH 7.",
      "Iodine turns blue-black with starch; used to measure when amylase has fully digested starch.",
      "Catalase catalyses 2H₂O₂ → 2H₂O + O₂; oxygen volume collected measures its activity.",
      "Q₁₀ ≈ 2 for many enzymes below their optimum: rate roughly doubles per 10 °C rise.",
    ],
    flashcards: [
      { front: "What is an enzyme?", back: "A biological catalyst — a protein molecule that speeds up a chemical reaction without being used up." },
      { front: "What is the active site?", back: "A region on the enzyme surface with a precise 3D shape complementary to the substrate." },
      { front: "What is an enzyme–substrate complex?", back: "The temporary structure formed when the substrate binds to the enzyme's active site before the reaction occurs." },
      { front: "What does 'enzyme specificity' mean?", back: "Each enzyme catalyses only one reaction (or very few) because only the correctly shaped substrate fits its active site." },
      { front: "What is denaturation?", back: "A permanent change in the 3D shape of an enzyme's active site (due to high temperature or extreme pH) so the substrate no longer fits. NOT the same as 'killing' the enzyme." },
      { front: "What happens to enzyme activity below the optimum temperature?", back: "Activity increases with temperature because molecules have more kinetic energy and collide with the active site more frequently." },
      { front: "What is the optimum temperature for most human enzymes?", back: "Approximately 37 °C (body temperature)." },
      { front: "Why does extreme pH denature enzymes?", back: "H⁺ or OH⁻ ions alter the charges on amino acid side chains, changing the active-site shape so the substrate no longer fits." },
      { front: "What is the optimum pH for pepsin?", back: "pH 2 — pepsin is a stomach protease that works in strongly acidic gastric juice." },
      { front: "How is the iodine test used to investigate amylase activity?", back: "Iodine turns blue-black in the presence of starch; when amylase has completely digested all starch, the iodine remains orange-brown. Time taken = measure of enzyme activity." },
      { front: "What does catalase do, and how is its activity measured?", back: "Catalase breaks down hydrogen peroxide: 2H₂O₂ → 2H₂O + O₂. Activity is measured as volume of O₂ produced per unit time." },
      { front: "What is Q₁₀ for a typical enzyme below its optimum?", back: "Q₁₀ ≈ 2, meaning the rate approximately doubles for every 10 °C rise in temperature." },
    ],
    keyTerms: [
      { term: "Enzyme", definition: "A protein molecule that acts as a biological catalyst, speeding up chemical reactions without being used up." },
      { term: "Active site", definition: "The specific region of an enzyme where the substrate binds; it has a shape complementary to the substrate." },
      { term: "Substrate", definition: "The molecule on which an enzyme acts." },
      { term: "Enzyme–substrate complex", definition: "The temporary combination of enzyme and substrate held together at the active site." },
      { term: "Specificity", definition: "The property of an enzyme that means it catalyses only one reaction (or a very narrow range), because only the correct substrate fits the active site." },
      { term: "Lock-and-key model", definition: "A model of enzyme action in which the substrate (key) has a shape precisely complementary to the active site (lock)." },
      { term: "Denaturation", definition: "A permanent change in the 3D shape of a protein (enzyme) due to high temperature or extreme pH, resulting in loss of function." },
      { term: "Optimum temperature", definition: "The temperature at which an enzyme's rate of reaction is at its maximum." },
      { term: "Optimum pH", definition: "The pH at which an enzyme's rate of reaction is at its maximum." },
      { term: "Catalyst", definition: "A substance that increases the rate of a chemical reaction without being used up in the reaction." },
      { term: "Q₁₀", definition: "The ratio of reaction rate at temperature T+10 °C to rate at temperature T; for many enzymes below the optimum, Q₁₀ ≈ 2." },
    ],
  },

  // ── Quick Quiz ───────────────────────────────────────────────────────────────
  quiz: {
    mcq: [
      {
        id: "bio-enzymes-mcq-q01",
        question: "Which statement best describes the role of an enzyme?",
        options: [
          "It provides energy for chemical reactions.",
          "It speeds up chemical reactions and is not used up.",
          "It is consumed during the reaction it catalyses.",
          "It changes the products of a chemical reaction.",
        ],
        answerIndex: 1,
        explanation: "Enzymes are biological catalysts — they increase the rate of reaction without being consumed. They do not provide energy, are not used up, and the products of the reaction are determined by the reactants, not the enzyme.",
        guideRef: "Enzymes as Biological Catalysts",
        difficulty: "warmup",
      },
      {
        id: "bio-enzymes-mcq-q02",
        question: "The lock-and-key model of enzyme action states that the substrate must have a shape that is:",
        options: [
          "identical to the enzyme's active site.",
          "complementary to the enzyme's active site.",
          "larger than the enzyme's active site.",
          "flexible enough to fit any enzyme.",
        ],
        answerIndex: 1,
        explanation: "The substrate must be complementary in shape to the active site — fitting it like a key in a lock. 'Identical' is incorrect (the shapes fit together, not overlay); the substrate fits into the active site, not the other way round.",
        guideRef: "The Lock-and-Key Model",
        difficulty: "warmup",
      },
      {
        id: "bio-enzymes-mcq-q03",
        question: "A student heats an enzyme solution to 80 °C for five minutes, then cools it back to 37 °C. What would she observe?",
        options: [
          "Full enzyme activity restored, because the enzyme is now at its optimum temperature.",
          "Enzyme activity remains very low, because the enzyme has been denatured.",
          "Enzyme activity doubles compared to 37 °C, because the warming has activated it.",
          "Enzyme activity falls to zero permanently because the enzyme has been killed.",
        ],
        answerIndex: 1,
        explanation: "At 80 °C the enzyme is denatured — the active-site shape is permanently altered. Cooling to 37 °C cannot restore the original shape. Option A is wrong because denaturation is irreversible. Option D uses 'killed', which is incorrect terminology; enzymes are not living things.",
        guideRef: "Effect of Temperature on Enzyme Activity",
        difficulty: "core",
        hints: [
          "Is denaturation reversible or irreversible?",
          "Does cooling re-form the bonds in the active site?",
          "Remember: enzymes are not alive — they cannot be 'killed'.",
        ],
      },
      {
        id: "bio-enzymes-mcq-q04",
        question: "Pepsin is a protease found in the stomach. Its optimum pH is 2. What would happen to pepsin's activity in the small intestine (pH ≈ 7–8)?",
        options: [
          "Activity would increase because pH 7–8 is closer to neutral.",
          "Activity would stay the same because pepsin is a stable protein.",
          "Activity would decrease significantly because pH 7–8 is far from pepsin's optimum.",
          "Activity would increase because the enzyme works best in alkaline conditions.",
        ],
        answerIndex: 2,
        explanation: "Pepsin's optimum is pH 2. At pH 7–8, the active-site shape is disrupted by the change in ionic environment. Activity would decrease significantly. Different enzymes are adapted to different pH environments.",
        guideRef: "Effect of pH on Enzyme Activity",
        difficulty: "core",
        hints: [
          "Each enzyme has a specific optimum pH.",
          "Moving away from the optimum changes the active-site shape.",
          "pH 7–8 is 5–6 units away from pepsin's optimum of pH 2.",
        ],
      },
      {
        id: "bio-enzymes-mcq-q05",
        question: "A student tests amylase activity using iodine solution. The iodine turns blue-black at t = 0. After 4 minutes at 37 °C, the iodine no longer turns blue-black. What can she conclude?",
        options: [
          "The amylase has been used up after 4 minutes.",
          "All the starch has been digested by amylase within 4 minutes.",
          "The iodine has reacted with the amylase.",
          "Temperature has changed the colour of the iodine.",
        ],
        answerIndex: 1,
        explanation: "Iodine turns blue-black only in the presence of starch. If it no longer turns blue-black, starch is no longer present — amylase has fully digested the starch into maltose within 4 minutes. Iodine does not react with amylase, and enzymes are not used up.",
        guideRef: "Investigating Enzyme Activity",
        difficulty: "core",
        hints: [
          "What does iodine detect?",
          "What does orange-brown iodine tell you about starch?",
        ],
      },
      {
        id: "bio-enzymes-mcq-q06",
        question: "The enzyme catalase has a Q₁₀ of 2.0 between 10 °C and 40 °C. If the rate of reaction at 20 °C is 6 arbitrary units, what is the predicted rate at 40 °C?",
        options: ["12 units", "18 units", "24 units", "36 units"],
        answerIndex: 2,
        explanation: "Q₁₀ = 2 means rate doubles for every 10 °C rise. From 20 °C to 30 °C: 6 × 2 = 12 units. From 30 °C to 40 °C: 12 × 2 = 24 units. This is a two-step application of Q₁₀.",
        guideRef: "Effect of Temperature on Enzyme Activity",
        difficulty: "challenge",
        hints: [
          "Q₁₀ = 2 means the rate doubles every 10 °C.",
          "From 20 °C to 40 °C is a rise of 20 °C — two lots of 10 °C.",
          "Apply Q₁₀ twice: rate × 2 × 2 = rate × 4.",
          "6 × 4 = 24 units.",
        ],
        strategy: "Apply Q₁₀ step by step for each 10 °C interval",
      },
    ],
    qa: [
      {
        id: "bio-enzymes-qa-q01",
        question:
          "Explain why amylase can digest starch but cannot digest protein. Use the lock-and-key model in your answer. [3 marks]",
        marks: 3,
        modelAnswer:
          "Amylase has an active site with a specific three-dimensional shape that is complementary to the starch molecule (substrate). When starch binds to the active site, an enzyme–substrate complex forms and starch is hydrolysed. Protein has a different molecular shape and is not complementary to amylase's active site, so it cannot bind and no reaction occurs. This specificity is explained by the lock-and-key model: only the correct substrate (key) fits the active site (lock).",
        markScheme: [
          "Active site has a specific / precise 3D shape",
          "Shape is complementary to starch / substrate",
          "Protein has a different shape / is not complementary to amylase's active site",
          "Protein cannot bind to the active site so no enzyme–substrate complex forms / no reaction",
          "Reference to lock-and-key model: substrate fits active site like key in lock",
        ],
        commonError: "Saying the enzyme 'chooses' its substrate or 'recognises' it — credit is only given for shape-based explanations (complementary).",
        guideRef: "The Lock-and-Key Model",
        difficulty: "core",
        hints: [
          "What property of the active site determines which substrate can bind?",
          "Use the word 'complementary'.",
          "What happens if the substrate shape does not match?",
          "Name the structure formed when enzyme and substrate bind.",
        ],
        strategy: "Structure: active site shape → complementary → only starch fits → no complex with protein",
      },
      {
        id: "bio-enzymes-qa-q02",
        question:
          "A student investigates the effect of temperature on catalase activity by measuring the volume of oxygen produced per minute from hydrogen peroxide solution. She tests temperatures of 10 °C, 20 °C, 30 °C, 40 °C, 50 °C, and 60 °C. Sketch and describe the expected results. Explain the trend on either side of the optimum. [5 marks]",
        marks: 5,
        modelAnswer:
          "The graph would be bell-shaped. As temperature rises from 10 °C to around 40 °C, the rate of oxygen production increases. This is because increasing temperature gives molecules more kinetic energy, so substrate molecules collide with the active site more frequently and with greater energy. The rate is maximum at approximately 40 °C (the optimum). Above 40 °C the rate falls sharply, reaching near zero by 60 °C. Above the optimum, the increased thermal energy breaks the bonds (hydrogen bonds, ionic bonds) that maintain the active site's 3D shape. The active site is denatured — its shape changes permanently so the substrate no longer fits and cannot form an enzyme–substrate complex. The enzyme is not 'killed'; it is denatured.",
        markScheme: [
          "Rate increases from 10 °C to optimum (~40 °C) / bell-shaped curve described or sketched",
          "Reason for increase: more kinetic energy / more frequent collisions between substrate and active site",
          "Maximum rate at optimum temperature (~40 °C)",
          "Rate falls above optimum / drops sharply above 40–50 °C",
          "Reason for fall: bonds maintaining active-site shape break / active site changes shape / enzyme denatured",
          "Substrate no longer fits active site / no enzyme–substrate complex formed",
          "Use of term 'denatured' (not 'killed')",
        ],
        commonError: "Saying the enzyme is 'killed' above the optimum — penalised. Also failing to explain both sides of the curve separately.",
        guideRef: "Effect of Temperature on Enzyme Activity",
        difficulty: "core",
        hints: [
          "Describe what happens on each side of the peak separately.",
          "For rising rate: think about kinetic energy and collision frequency.",
          "For falling rate: think about what holds the active site in shape.",
          "Use 'denatured' not 'killed' — enzymes are not alive.",
        ],
        strategy: "Three-phase description: rising (kinetic energy) → peak (optimum) → falling (denaturation)",
        solutions: [
          {
            label: "Full mark answer structure",
            steps: [
              "State the overall shape: bell-shaped / rises then falls.",
              "Explain the rising phase: kinetic energy increases → more collisions with active site → higher rate.",
              "Identify the optimum temperature (~40 °C for catalase).",
              "Explain the falling phase: thermal energy breaks bonds in active site → active site changes shape (denaturation) → substrate no longer fits → no enzyme–substrate complex → rate falls.",
              "Use 'denatured', not 'killed'.",
            ],
          },
        ],
      },
      {
        id: "bio-enzymes-qa-q03",
        question:
          "A student repeats an amylase–starch experiment using iodine solution at pH 2, pH 7, and pH 11. She finds the starch is digested most quickly at pH 7, and not at all at pH 2 or pH 11. Explain these results in terms of active-site shape, and state which other enzyme would work effectively at pH 2. [4 marks]",
        marks: 4,
        modelAnswer:
          "Salivary amylase has an optimum pH of 7. At pH 7, the active site has the correct three-dimensional shape complementary to starch, enzyme–substrate complexes form efficiently, and starch is hydrolysed rapidly. At pH 2 and pH 11, the extreme pH values alter the charges on the amino acid side chains that form the active site. This changes the shape of the active site so it is no longer complementary to the starch molecule; no enzyme–substrate complex can form and no digestion occurs. The enzyme is denatured at these extreme pH values. Pepsin is a protease that has an optimum pH of approximately 2, so it would be effective at pH 2.",
        markScheme: [
          "Amylase has an optimum pH of 7 / works best at pH 7",
          "At pH 7 active site is complementary to starch / enzyme–substrate complex forms / starch is digested",
          "At extreme pH (2 and 11) active-site shape changes / enzyme denatured",
          "Because H⁺ / OH⁻ ions change charges on amino acid side chains / alter ionic bonds",
          "Substrate (starch) no longer fits / no enzyme–substrate complex / no digestion",
          "Pepsin works at pH 2 (accept: it is a stomach protease with optimum ~pH 2)",
        ],
        commonError: "Saying the enzyme 'does not like' the pH — answers must refer to shape of active site. Also confusing which enzyme works at pH 2 (pepsin, not amylase).",
        guideRef: "Effect of pH on Enzyme Activity",
        difficulty: "core",
        hints: [
          "What is the optimum pH for amylase?",
          "Why does the active site change shape at extreme pH? Think about charged side chains.",
          "Which enzyme is adapted to work in the acidic stomach?",
          "Use 'denatured' for extremes of pH.",
        ],
        strategy: "Explain optimum pH first, then apply the same denaturation logic as temperature",
      },
    ],
  },

  // ── Question Bank ────────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      {
        id: "bio-enzymes-bank-mcq-1",
        title: "Enzymes MCQ Paper 1",
        description: "Six multiple-choice questions on enzyme structure, the lock-and-key model, and temperature effects.",
        questions: [
          {
            id: "bio-enzymes-bank-mcq1-q01",
            question: "Which of the following correctly identifies what is formed when an enzyme and substrate combine?",
            options: [
              "Enzyme–product complex",
              "Enzyme–substrate complex",
              "Substrate–product complex",
              "Activated enzyme",
            ],
            answerIndex: 1,
            explanation: "When an enzyme and its substrate bind at the active site, they form an enzyme–substrate complex. Products are released after the reaction; the enzyme is not 'activated' but already functional.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bank-mcq1-q02",
            question: "An enzyme has an optimum temperature of 35 °C. At 10 °C, the enzyme is inactive. What is most likely true?",
            options: [
              "The enzyme has been denatured at 10 °C.",
              "The active site has been permanently changed at 10 °C.",
              "The enzyme is intact but substrate molecules have insufficient kinetic energy to bind efficiently.",
              "The enzyme has been killed by the low temperature.",
            ],
            answerIndex: 2,
            explanation: "At low temperatures, enzymes are not denatured — the active site shape is preserved. Inactivity at 10 °C reflects the lack of kinetic energy in substrate molecules, so collisions with the active site are rare. Warming would restore activity. Option A and B are incorrect because denaturation requires high temperature (or extreme pH), not low temperature. Option D uses 'killed', which is wrong — enzymes cannot be killed.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Is denaturation caused by low temperature?",
              "What determines collision frequency between substrate and active site?",
              "Can the enzyme recover when warmed up?",
            ],
          },
          {
            id: "bio-enzymes-bank-mcq1-q03",
            question: "Which of the following is a correct definition of enzyme specificity?",
            options: [
              "An enzyme works only at a specific temperature.",
              "An enzyme catalyses only one type of reaction because only the correct substrate is complementary to its active site.",
              "An enzyme can only work in one pH environment.",
              "Each substrate is acted upon by many different enzymes.",
            ],
            answerIndex: 1,
            explanation: "Enzyme specificity means that each enzyme catalyses only one (or very few) reaction(s) because the active site shape is complementary to only one (or very few) substrate(s). Options A and C describe optima, not specificity. Option D is the reverse of the correct statement.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bank-mcq1-q04",
            question: "In an experiment, the rate of a reaction catalysed by enzyme X is measured at 25 °C, 35 °C, 45 °C, and 55 °C. The rate increases from 25 °C to 35 °C, then decreases from 35 °C to 55 °C. What is the most likely optimum temperature for enzyme X?",
            options: ["25 °C", "35 °C", "45 °C", "55 °C"],
            answerIndex: 1,
            explanation: "The optimum temperature is where the rate is highest. The rate increases up to 35 °C and then decreases, so the maximum (and therefore optimum) is at 35 °C. Note: this is not 37 °C — different enzymes have different optima.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bank-mcq1-q05",
            question: "A scientist adds excess substrate to a reaction mixture containing a fixed amount of enzyme and measures the rate. She then doubles the enzyme concentration and repeats. What should she observe if temperature and pH are unchanged?",
            options: [
              "No change — the substrate concentration limits the rate.",
              "The rate doubles — more enzyme molecules means more active sites available.",
              "The rate falls — too many enzymes compete for substrate.",
              "The rate stays the same — enzymes are not used up so concentration does not matter.",
            ],
            answerIndex: 1,
            explanation: "With excess substrate, enzyme concentration is the limiting factor. Doubling the enzyme concentration doubles the number of active sites available, so the rate of product formation approximately doubles. This assumes temperature and pH remain at optimum and substrate is in true excess.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "core",
            hints: [
              "What limits rate when substrate is in excess?",
              "More enzyme = more active sites — what does that do to collision frequency?",
              "Enzymes are not used up, but concentration still matters for rate.",
            ],
          },
          {
            id: "bio-enzymes-bank-mcq1-q06",
            question:
              "An enzyme works at pH 7 with a rate of 12 units. At pH 3 the rate is 1 unit, and at pH 11 the rate is also 1 unit. After treatment at pH 3, the enzyme is returned to pH 7. The rate remains at 1 unit. What does this suggest?",
            options: [
              "The enzyme was inhibited at pH 3 but was not denatured.",
              "The enzyme was denatured at pH 3 and cannot recover its original shape.",
              "The substrate concentration at pH 7 was too low to show full activity.",
              "The optimum pH changed from 7 to 3 after treatment.",
            ],
            answerIndex: 1,
            explanation: "If returning to pH 7 does not restore activity, the enzyme has been permanently denatured — the active-site shape has been irreversibly altered by the extreme pH. If it had been merely inhibited (reversible), activity would return at pH 7. This parallels irreversible denaturation by heat.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Would reversible inhibition be permanent?",
              "Does the activity recover at pH 7?",
              "If not recovered: permanent structural change = denaturation.",
              "Compare this to what happens after heating above the optimum temperature.",
            ],
            strategy: "Distinguish reversible inhibition from irreversible denaturation by testing recovery",
          },
        ],
      },
      {
        id: "bio-enzymes-bank-mcq-2",
        title: "Enzymes MCQ Paper 2",
        description: "Six multiple-choice questions on pH effects, experimental investigation, naming conventions, and Q10 calculations.",
        questions: [
          {
            id: "bio-enzymes-bank-mcq2-q01",
            question: "What is the correct product of the catalase-catalysed reaction?",
            options: [
              "Carbon dioxide and water",
              "Glucose and oxygen",
              "Water and oxygen",
              "Hydrogen gas and water",
            ],
            answerIndex: 2,
            explanation: "Catalase catalyses: 2H₂O₂ → 2H₂O + O₂. The products are water and oxygen. Carbon dioxide is a product of respiration, not this reaction.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bank-mcq2-q02",
            question: "A student tests amylase with starch at pH 7 and at pH 2. She adds iodine at 2-minute intervals. At pH 7 the iodine stops turning blue-black after 8 minutes. At pH 2 it still turns blue-black after 20 minutes. What is the correct interpretation?",
            options: [
              "Amylase works faster at pH 2 because the acid helps break bonds.",
              "Amylase is more active at pH 7 because pH 7 is closer to its optimum.",
              "Iodine turns blue-black faster at lower pH, which explains the difference.",
              "The substrate concentration was lower at pH 2, causing the slower rate.",
            ],
            answerIndex: 1,
            explanation: "Amylase has an optimum of approximately pH 7. At pH 7 it digests starch in 8 minutes; at pH 2 (far from optimum) the active site shape is disrupted and digestion is much slower (not yet complete at 20 minutes). Options C and D introduce confounding variables not stated in the question.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What is the optimum pH for salivary amylase?",
              "Which pH is closer to the optimum?",
              "Faster digestion means starch disappears sooner — which condition shows that?",
            ],
          },
          {
            id: "bio-enzymes-bank-mcq2-q03",
            question: "A student wants to investigate the effect of temperature on amylase activity while ensuring pH is constant. Which is the most appropriate control for pH?",
            options: [
              "Use the same volume of distilled water in each tube.",
              "Use a buffer solution of the same pH in every tube.",
              "Keep all tubes at room temperature.",
              "Repeat the experiment three times.",
            ],
            answerIndex: 1,
            explanation: "A buffer solution maintains a constant pH even when temperature changes or small amounts of acid/alkali are added. Distilled water does not buffer against pH changes. Repeating improves reliability but does not control pH. Keeping tubes at room temperature fixes temperature, not pH.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "What is the purpose of a buffer solution?",
              "Could pH change if temperature changes or reagents are mixed?",
              "The independent variable is temperature — pH must be controlled.",
            ],
          },
          {
            id: "bio-enzymes-bank-mcq2-q04",
            question: "The enzyme lipase digests fats (lipids). What does this tell you about the name of the substrate?",
            options: [
              "Lipase acts on lipids, consistent with the -ase naming convention.",
              "Lipase acts on proteins because it ends in -ase.",
              "Lipase must be named after its product, not its substrate.",
              "All enzymes ending in -ase act on fats.",
            ],
            answerIndex: 0,
            explanation: "The naming convention for enzymes is that the name often derives from the substrate with the suffix -ase added. Lipase acts on lip- (lipids/fats). This is the standard convention: amylase on starch, protease on protein. Not all -ase enzymes act on fats — each name is specific.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bank-mcq2-q05",
            question:
              "At 30 °C, enzyme X produces 10 cm³ of product per minute. The Q₁₀ for enzyme X is 2.5. Assuming denaturation does not occur, what volume of product would be produced per minute at 40 °C?",
            options: ["12.5 cm³", "20 cm³", "25 cm³", "50 cm³"],
            answerIndex: 2,
            explanation: "Q₁₀ = rate at (T+10) / rate at T = 2.5. So rate at 40 °C = 10 × 2.5 = 25 cm³ per minute. This is a single 10 °C step from 30 °C to 40 °C.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Q₁₀ tells you the rate multiplier for a 10 °C rise.",
              "From 30 °C to 40 °C is exactly one 10 °C step.",
              "Multiply the starting rate by Q₁₀.",
            ],
            strategy: "Q₁₀ calculation: new rate = old rate × Q₁₀ (per 10 °C step)",
          },
          {
            id: "bio-enzymes-bank-mcq2-q06",
            question:
              "A student discovers a bacterium living in a hot spring at 80 °C. She extracts an enzyme from this bacterium and measures its activity at 37 °C, 60 °C, and 80 °C. Which prediction is most likely correct?",
            options: [
              "The enzyme has an optimum of 37 °C because most enzymes do.",
              "The enzyme has an optimum close to 80 °C, reflecting the bacterium's natural environment.",
              "The enzyme cannot function above 40 °C because it will be denatured.",
              "The enzyme has no optimum temperature because it is from a bacterium.",
            ],
            answerIndex: 1,
            explanation: "Thermophilic bacteria are adapted to very high temperatures; their enzymes have evolved with high-temperature optima (often 70–90 °C). The 37 °C optimum is specific to human body enzymes. Enzymes are not universally denatured at 40 °C — the denaturation temperature depends on the specific enzyme and organism. All enzymes have an optimum temperature.",
            guideRef: "Common Misconceptions and Exam Technique",
            difficulty: "challenge",
            hints: [
              "Enzymes are adapted to the environment of the organism they come from.",
              "What temperature does this bacterium live at?",
              "Is 37 °C a universal optimum for all enzymes?",
              "Would an 80 °C enzyme survive at 80 °C?",
            ],
            strategy: "Apply adaptation logic: organism's environment → enzyme's optimum",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-enzymes-bank-qa-1",
        title: "Enzymes Structured Questions Paper 1",
        description: "Four structured questions on enzyme catalysis, lock-and-key model, and temperature effects with graph interpretation.",
        questions: [
          {
            id: "bio-enzymes-bank-qa1-q01",
            question:
              "Describe the lock-and-key model of enzyme action. Include in your answer: active site, substrate, enzyme–substrate complex, and the term 'complementary'. [4 marks]",
            marks: 4,
            modelAnswer:
              "Each enzyme has an active site — a region with a specific three-dimensional shape. The substrate molecule has a shape that is complementary to the active site, fitting precisely like a key fits a lock. When the substrate binds to the active site, an enzyme–substrate complex is formed. The reaction then takes place, products are released, and the enzyme is free to bind another substrate molecule. The enzyme is not used up in this process.",
            markScheme: [
              "Active site: specific / precise 3D shape on the enzyme",
              "Substrate shape is complementary to the active site",
              "Enzyme + substrate → enzyme–substrate complex",
              "Products released and enzyme freed / enzyme not consumed",
            ],
            commonError: "Writing that the substrate 'enters' or 'goes inside' the enzyme — the substrate binds to the surface active site, not inside the enzyme.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "core",
            hints: [
              "Define 'active site' first.",
              "Use 'complementary' to describe the relationship between substrate and active site.",
              "Name the temporary structure formed.",
              "What happens to the enzyme after the products leave?",
            ],
            strategy: "Sequence: active site → complementary substrate → E–S complex → products released → enzyme recycled",
          },
          {
            id: "bio-enzymes-bank-qa1-q02",
            question:
              "A student measures the rate of a reaction catalysed by enzyme Y at six different temperatures. Results:\n\n| Temperature (°C) | Rate (units/min) |\n|---|---|\n| 10 | 2 |\n| 20 | 5 |\n| 30 | 9 |\n| 40 | 14 |\n| 50 | 6 |\n| 60 | 0 |\n\n(a) State the optimum temperature for enzyme Y. [1 mark]\n(b) Explain why the rate is higher at 40 °C than at 20 °C. [2 marks]\n(c) Explain why the rate at 60 °C is zero, using the term 'denatured'. [2 marks]",
            marks: 5,
            modelAnswer:
              "(a) The optimum temperature for enzyme Y is 40 °C, as this is where the rate is highest (14 units/min).\n\n(b) At 40 °C, the substrate molecules have more kinetic energy than at 20 °C. This means they move faster and collide with the enzyme's active site more frequently, forming more enzyme–substrate complexes per unit time, so the rate is higher.\n\n(c) At 60 °C, the enzyme Y has been denatured. The high temperature has broken the bonds (such as hydrogen bonds) that maintain the 3D shape of the active site. The active site has permanently changed shape so it is no longer complementary to the substrate; no enzyme–substrate complex can form and the rate drops to zero.",
            markScheme: [
              "(a) 40 °C",
              "(b) Higher kinetic energy at 40 °C / substrate molecules move faster",
              "(b) More frequent collisions with active site / more enzyme–substrate complexes per minute",
              "(c) Enzyme denatured at 60 °C / active site shape changed permanently",
              "(c) Substrate no longer fits active site / no enzyme–substrate complex forms",
            ],
            commonError: "Part (c): writing 'the enzyme is killed at 60 °C' — must use 'denatured' and explain the active-site shape change.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "(a) Find the highest rate in the table.",
              "(b) What does higher temperature do to particle kinetic energy?",
              "(c) What breaks at very high temperature in a protein?",
              "(c) Use 'denatured' and mention the active-site shape.",
            ],
            strategy: "Table → find peak for (a); kinetic energy argument for (b); denaturation mechanism for (c)",
          },
          {
            id: "bio-enzymes-bank-qa1-q03",
            question:
              "A student investigates amylase activity using the iodine test. She places 1 cm³ of starch solution and 1 cm³ of amylase solution in a boiling tube at 37 °C and pH 7. Every 30 seconds she removes a drop and places it on a spotting tile containing iodine solution.\n\n(a) Describe what colour the iodine would be at the start of the experiment (t = 0). [1 mark]\n(b) After 3 minutes the iodine no longer changes colour when the drop is added. What does this indicate? [1 mark]\n(c) State two variables the student should keep constant in this experiment. [2 marks]\n(d) The student repeats the experiment at 60 °C and finds the iodine continues to turn blue-black even after 10 minutes. Suggest an explanation. [2 marks]",
            marks: 6,
            modelAnswer:
              "(a) Blue-black — starch is present at the start and iodine turns blue-black in the presence of starch.\n\n(b) All the starch has been digested (hydrolysed) by amylase; maltose (or simpler sugars) is the product but does not turn iodine blue-black.\n\n(c) Any two from: concentration of starch; concentration of amylase; volume of each solution; pH; method of sampling.\n\n(d) At 60 °C the amylase has been denatured — the active site has changed shape so the substrate (starch) no longer fits. No enzyme–substrate complexes can form, so starch is not digested and iodine continues to turn blue-black.",
            markScheme: [
              "(a) Blue-black / blue-black colour in presence of starch",
              "(b) All starch has been digested / hydrolysed / no starch remains",
              "(c) Any two: concentration of starch; concentration of amylase; volume; pH; sampling technique — 1 mark each",
              "(d) Amylase denatured at 60 °C / active site changes shape",
              "(d) Substrate (starch) no longer fits / no enzyme–substrate complex / no digestion",
            ],
            commonError: "Part (d): saying the enzyme is 'too hot to work' without explaining denaturation of the active site.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "(a) What does iodine do in the presence of starch?",
              "(b) If iodine does NOT turn blue-black, what does that tell you about starch?",
              "(c) What could affect the rate other than temperature?",
              "(d) At 60 °C — is this above the optimum for amylase? What happens above the optimum?",
            ],
            strategy: "Apply iodine indicator logic; use denaturation explanation for part (d)",
          },
          {
            id: "bio-enzymes-bank-qa1-q04",
            question:
              "The table below shows the rate of reaction of three enzymes (A, B, C) at different pH values.\n\n| pH | Enzyme A | Enzyme B | Enzyme C |\n|---|---|---|---|\n| 2 | 10 | 0 | 1 |\n| 4 | 7 | 0 | 2 |\n| 7 | 1 | 12 | 8 |\n| 9 | 0 | 5 | 10 |\n| 11 | 0 | 0 | 3 |\n\n(a) State the optimum pH for each enzyme. [2 marks]\n(b) Suggest where in the human digestive system enzyme A is likely to be found. Justify your answer. [2 marks]\n(c) Explain why enzyme B has a rate of 0 at pH 2 and pH 11. [3 marks]",
            marks: 7,
            modelAnswer:
              "(a) Enzyme A: optimum pH 2. Enzyme B: optimum pH 7. Enzyme C: optimum pH 9.\n\n(b) Enzyme A is likely found in the stomach. The stomach contains gastric acid and has a pH of approximately 2, which matches enzyme A's optimum pH. Pepsin is an example of a stomach enzyme with an optimum of pH 2.\n\n(c) At pH 2 and pH 11, the extreme pH values alter the charges on the amino acid side chains that form enzyme B's active site. This changes the 3D shape of the active site so it is no longer complementary to the substrate. No enzyme–substrate complex can form, so no reaction occurs and the rate is zero. Enzyme B is denatured at these extreme pH values.",
            markScheme: [
              "(a) Enzyme A: pH 2; Enzyme B: pH 7; Enzyme C: pH 9 (2 marks — 1 if two correct)",
              "(b) Stomach / gastric environment",
              "(b) Because stomach pH is ~2 / matches enzyme A's optimum / reference to gastric acid",
              "(c) Extreme pH alters charges on amino acid side chains / changes ionic bonds / hydrogen bonds in active site",
              "(c) Active-site shape changes / no longer complementary to substrate",
              "(c) No enzyme–substrate complex / no reaction / rate = 0",
            ],
            commonError: "Part (a): choosing pH 4 for enzyme A because it has a high rate — must find the maximum. Part (c): not linking the pH change to the active-site shape change specifically.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "(a) Find the highest rate value in each column.",
              "(b) Which part of the digestive system has pH ~2?",
              "(c) How does extreme pH change protein structure? Which bonds are disrupted?",
              "(c) Link bond disruption → active-site shape change → substrate cannot bind.",
            ],
            strategy: "Read table systematically for (a); match pH to body location for (b); active-site shape mechanism for (c)",
            solutions: [
              {
                label: "Full answer for part (c)",
                steps: [
                  "State what extreme pH does: alters the charges on amino acid side chains forming the active site.",
                  "Consequence: the 3D shape of the active site changes.",
                  "Result: active site is no longer complementary to the substrate.",
                  "Outcome: no enzyme–substrate complex forms → rate = 0.",
                  "Term: enzyme B is denatured at pH 2 and pH 11.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "bio-enzymes-bank-qa-2",
        title: "Enzymes Structured Questions Paper 2",
        description: "Four structured questions including Q10 calculations, experimental design, misconceptions, and synoptic application.",
        questions: [
          {
            id: "bio-enzymes-bank-qa2-q01",
            question:
              "Explain why enzymes are described as catalysts. Include reference to activation energy and to whether the enzyme is used up. [3 marks]",
            marks: 3,
            modelAnswer:
              "A catalyst speeds up a chemical reaction without being used up in the process. Enzymes fit this definition because they increase the rate of biological reactions by lowering the activation energy — the minimum energy required for the reaction to occur. After the reaction, the enzyme is released unchanged and is free to catalyse the same reaction again with another substrate molecule.",
            markScheme: [
              "Catalyst speeds up reaction / increases rate of reaction",
              "Enzyme is not used up / is regenerated / can act again",
              "Enzymes lower activation energy (the energy barrier for the reaction)",
            ],
            commonError: "Stating that enzymes 'provide energy' for reactions — they do not supply energy; they lower the energy barrier.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "core",
            hints: [
              "What is the definition of a catalyst?",
              "What is activation energy?",
              "What happens to the enzyme after the product is released?",
            ],
          },
          {
            id: "bio-enzymes-bank-qa2-q02",
            question:
              "A biologist measures the activity of enzyme Z at different temperatures. She finds: at 20 °C, rate = 8 units; at 30 °C, rate = 16 units; at 40 °C, rate = 28 units; at 50 °C, rate = 10 units.\n\n(a) Calculate Q₁₀ for enzyme Z between 20 °C and 30 °C. Show your working. [2 marks]\n(b) Explain why Q₁₀ between 40 °C and 50 °C cannot be calculated using the simple formula. [2 marks]\n(c) Predict the rate at 60 °C. Justify your prediction. [2 marks]",
            marks: 6,
            modelAnswer:
              "(a) Q₁₀ = rate at 30 °C / rate at 20 °C = 16 / 8 = 2.0\n\n(b) Between 40 °C and 50 °C, denaturation is occurring. The simple Q₁₀ formula assumes the only factor affecting rate is kinetic energy (temperature effect on collision frequency). Above the optimum, denaturation reduces the number of functional enzyme molecules, which also lowers rate. The formula does not account for this, so it gives a misleading result (Q₁₀ would appear less than 1 in this case).\n\n(c) The rate at 60 °C would be approximately 0 (or very close to zero). The enzyme is likely to be fully denatured by 60 °C — the active site has permanently changed shape, no enzyme–substrate complexes can form, and the rate is essentially zero.",
            markScheme: [
              "(a) Q₁₀ = 16 / 8 = 2.0 (method mark for division; answer mark for 2.0)",
              "(b) Denaturation is occurring above the optimum / not just kinetic energy affecting rate",
              "(b) Q₁₀ formula assumes only temperature effect on collisions / denaturation invalidates the formula",
              "(c) Rate ≈ 0 at 60 °C",
              "(c) Because enzyme is fully denatured / active site permanently altered at this temperature",
            ],
            commonError: "Part (a): dividing 20 by 30 instead of rates. Part (b): not explaining why Q₁₀ breaks down — must mention denaturation.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "(a) Q₁₀ = rate(T+10) / rate(T). Identify the right rates.",
              "(b) What else is happening above the optimum, besides kinetic energy changing?",
              "(c) At 50 °C the rate is already falling fast. What happens to the enzyme structure at 60 °C?",
              "(c) Use 'denatured' in your answer.",
            ],
            strategy: "Q₁₀ = ratio of rates; recognise denaturation invalidates the formula above the optimum",
            solutions: [
              {
                label: "Part (a) — Q10 calculation",
                steps: [
                  "Identify the two rates: 30 °C = 16, 20 °C = 8.",
                  "Q₁₀ = rate at higher temperature / rate at lower temperature.",
                  "Q₁₀ = 16 / 8 = 2.0",
                ],
              },
              {
                label: "Part (b) — why Q10 fails above optimum",
                steps: [
                  "Q₁₀ is valid only when increasing temperature only increases kinetic energy.",
                  "Above the optimum, denaturation reduces the number of functional enzyme molecules.",
                  "Rate falls due to denaturation, not lack of kinetic energy.",
                  "Q₁₀ formula does not account for irreversible loss of active enzymes.",
                ],
              },
            ],
          },
          {
            id: "bio-enzymes-bank-qa2-q03",
            question:
              "A student makes the following statement: 'When you boil an enzyme, you kill it. When you freeze it, you kill it too.'\n\nIdentify TWO errors in this statement and explain each error using scientific terminology. [4 marks]",
            marks: 4,
            modelAnswer:
              "Error 1: The word 'kill' is scientifically incorrect — enzymes are proteins, not living organisms, so they cannot be killed. The correct term for what happens when an enzyme is boiled is 'denatured': the high temperature breaks the bonds maintaining the active site's 3D shape, permanently changing it so the substrate no longer fits.\n\nError 2: Freezing does not 'kill' or denature enzymes. At very low temperatures, the enzyme is inactive because substrate molecules have insufficient kinetic energy to collide effectively with the active site. However, the active site shape is preserved. When warmed up, the enzyme recovers its activity. The student has confused irreversible denaturation (boiling) with reversible inactivation (freezing).",
            markScheme: [
              "Error 1: 'killed' is wrong — enzymes cannot be killed as they are not alive",
              "Error 1: correct term is 'denatured' — active site shape changes permanently (due to bond breaking)",
              "Error 2: freezing does not denature enzymes / active site shape is preserved at low temperature",
              "Error 2: freezing is reversible — enzyme activity returns on warming / contrast with irreversible denaturation",
            ],
            commonError: "Not explaining the mechanism — must say what 'denatured' means (active site shape change) not just use the word.",
            guideRef: "Common Misconceptions and Exam Technique",
            difficulty: "core",
            hints: [
              "Can a protein be 'killed'? What are proteins?",
              "What is the correct term for what happens to enzyme structure at high temperature?",
              "What does low temperature do to kinetic energy? Is this reversible?",
              "What is the difference between reversible inactivation and irreversible denaturation?",
            ],
            strategy: "Correct the terminology, then explain the science for each situation separately",
          },
          {
            id: "bio-enzymes-bank-qa2-q04",
            question:
              "Trypsin is a protease produced in the pancreas and secreted into the small intestine. The stomach produces pepsin, also a protease, in strongly acidic conditions (pH ~2). Both enzymes digest proteins, but they cannot substitute for each other in vivo.\n\n(a) Explain why trypsin does not work in the stomach. [3 marks]\n(b) If trypsin and pepsin both digest proteins, why are they said to be different enzymes rather than the same enzyme? [2 marks]\n(c) Suggest one advantage of having different proteases in different regions of the digestive system. [1 mark]",
            marks: 6,
            modelAnswer:
              "(a) Trypsin has an optimum pH of approximately 8, which matches the slightly alkaline conditions of the small intestine. In the stomach (pH ~2), the extreme acidity alters the charges on the amino acid side chains that form trypsin's active site. This changes the active-site shape so it is no longer complementary to protein substrates. Trypsin is denatured at pH 2, so it cannot form enzyme–substrate complexes and cannot catalyse protein digestion.\n\n(b) Although both trypsin and pepsin digest proteins, they are different enzyme molecules with different amino acid sequences, different three-dimensional structures, and different active-site shapes. Their optimum pH values differ (pepsin: ~2, trypsin: ~8). They also differ in the specific peptide bonds they cleave. Each enzyme has a slightly different substrate specificity.\n\n(c) Having different proteases in different regions allows protein digestion to continue efficiently across the entire length of the gut — pepsin begins digestion in the acidic stomach and trypsin continues it in the alkaline small intestine — maximising the surface area and time available for digestion.",
            markScheme: [
              "(a) Trypsin optimum pH ~8 / not pH 2",
              "(a) pH 2 denatures trypsin / changes active-site shape / extreme pH disrupts amino acid charges",
              "(a) Active site no longer complementary to substrate / no enzyme–substrate complex",
              "(b) Different amino acid sequence / 3D structure / active-site shape",
              "(b) Different optimum pH / different specific peptide bonds cleaved",
              "(c) Digestion can occur in different pH environments across the gut / maximises efficiency / different specificity breaks different bonds",
            ],
            commonError: "Part (b): saying they are different because they are in different locations — this is a description of where they are, not why they are different enzymes (structural difference required).",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "(a) What is trypsin's optimum pH? What is the stomach pH? What happens to an enzyme far from its optimum?",
              "(b) What makes two proteins different at a molecular level?",
              "(b) Consider active-site shape, optimum pH, amino acid sequence.",
              "(c) Think about what would happen if only one protease existed and had to function across pH 2 to pH 8.",
            ],
            strategy: "Synoptic — link location, pH, denaturation, and enzyme structure in an integrated argument",
            solutions: [
              {
                label: "Structured approach to part (a)",
                steps: [
                  "State trypsin's optimum pH (~8).",
                  "State stomach pH (~2).",
                  "State the consequence: pH 2 is far from optimum → denaturation.",
                  "Mechanism: extreme pH alters charges on amino acids → active site shape changes.",
                  "Result: active site no longer complementary → no E–S complex → no digestion.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
