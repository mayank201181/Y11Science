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
        id: "bio-enzymes-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Ten MCQs covering enzyme catalysis basics, lock-and-key model, specificity, and naming conventions.",
        questions: [
          {
            id: "bio-enzymes-bm1-01",
            question: "Which statement correctly describes an enzyme?",
            options: [
              "A carbohydrate that provides energy for chemical reactions.",
              "A protein that speeds up a chemical reaction without being used up.",
              "A protein that is consumed during the reaction it catalyses.",
              "A lipid that lowers the temperature needed for reactions.",
            ],
            answerIndex: 1,
            explanation: "Enzymes are protein molecules that act as biological catalysts — they increase the rate of reaction without being consumed. They are proteins (not carbohydrates or lipids) and are regenerated after each reaction cycle.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm1-02",
            question: "What is the name of the specific region on an enzyme surface where the substrate binds?",
            options: [
              "Binding channel",
              "Reaction groove",
              "Active site",
              "Substrate pocket",
            ],
            answerIndex: 2,
            explanation: "The active site is the specific region of the enzyme surface with a precise three-dimensional shape complementary to the substrate. The other terms are not standard IGCSE terminology.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm1-03",
            question: "According to the lock-and-key model, what must be true about the substrate shape relative to the enzyme active site?",
            options: [
              "The substrate must be identical in shape to the active site.",
              "The substrate must be larger than the active site.",
              "The substrate must be complementary in shape to the active site.",
              "The substrate must be flexible enough to fit any active site.",
            ],
            answerIndex: 2,
            explanation: "The substrate must be complementary in shape to the active site — they fit together like a key in a lock. Identical would mean the shapes are the same rather than fitting together. The substrate must fit one specific enzyme, not any enzyme.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm1-04",
            question: "What is the temporary structure formed when an enzyme and substrate bind together at the active site?",
            options: [
              "Enzyme-product complex",
              "Enzyme-substrate complex",
              "Activated substrate",
              "Substrate-product complex",
            ],
            answerIndex: 1,
            explanation: "When enzyme and substrate bind at the active site, an enzyme-substrate complex is formed. This is temporary — products are released and the enzyme is freed unchanged.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm1-05",
            question: "Amylase digests starch but cannot digest protein. This property is called enzyme:",
            options: [
              "Denaturation",
              "Inhibition",
              "Specificity",
              "Saturation",
            ],
            answerIndex: 2,
            explanation: "Enzyme specificity means each enzyme catalyses only one (or very few) reaction(s) because only the correct substrate is complementary to its active site. Amylase's active site is complementary to starch, not protein.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm1-06",
            question: "Which enzyme catalyses the breakdown of hydrogen peroxide into water and oxygen?",
            options: [
              "Amylase",
              "Lipase",
              "Protease",
              "Catalase",
            ],
            answerIndex: 3,
            explanation: "Catalase catalyses: 2H2O2 -> 2H2O + O2. Amylase acts on starch, lipase on fats, protease on proteins.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm1-07",
            question: "With excess substrate present, a scientist doubles the enzyme concentration. What happens to the rate of reaction?",
            options: [
              "Rate stays the same — enzymes are not used up so concentration is irrelevant.",
              "Rate halves — more enzymes slow each other.",
              "Rate approximately doubles — more active sites are available simultaneously.",
              "Rate falls to zero — enzyme excess inhibits the reaction.",
            ],
            answerIndex: 2,
            explanation: "With substrate in excess, enzyme concentration is the limiting factor. Doubling enzyme concentration doubles the number of active sites available, so approximately twice as many enzyme-substrate complexes form per unit time.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "core",
            hints: [
              "When substrate is in excess, what factor limits rate?",
              "More enzyme molecules = more active sites available.",
              "More active sites means more substrate can bind simultaneously.",
            ],
          },
          {
            id: "bio-enzymes-bm1-08",
            question: "The enzyme lipase acts on fats (lipids). What does the name 'lipase' illustrate about enzyme naming conventions?",
            options: [
              "Enzymes are named after the organ that produces them.",
              "Enzymes are named after their products, with -ase added.",
              "Enzymes are often named after their substrate, with the suffix -ase.",
              "All enzymes ending in -ase act on fats.",
            ],
            answerIndex: 2,
            explanation: "Enzymes are named after their substrate with the suffix -ase: lipase acts on lipids, amylase on starch, protease on proteins, catalase on hydrogen peroxide. Not all -ase enzymes act on fats.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "core",
            hints: [
              "Lip- relates to lipids (fats).",
              "What suffix do most enzyme names share?",
              "Amylase acts on starch (amyl-) — same pattern.",
            ],
          },
          {
            id: "bio-enzymes-bm1-09",
            question: "An enzyme lowers the activation energy of a reaction. What is activation energy?",
            options: [
              "Energy provided by the enzyme to start the reaction.",
              "The minimum energy reactants must have to react and form products.",
              "The energy released when products form.",
              "The energy needed to denature the enzyme.",
            ],
            answerIndex: 1,
            explanation: "Activation energy is the minimum energy barrier that reactants must overcome to form products. Enzymes lower this barrier — they do not supply energy themselves. Lowering the barrier means more reactant molecules have sufficient energy to react, increasing rate.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "core",
            hints: [
              "Activation energy is an energy barrier, not energy supplied by the enzyme.",
              "Lowering a barrier makes it easier to cross.",
              "Enzymes do not appear in the balanced equation for the overall reaction.",
            ],
          },
          {
            id: "bio-enzymes-bm1-10",
            question: "A student claims: 'Enzymes are used up during reactions, so more enzyme must be added regularly.' Which statement correctly challenges this?",
            options: [
              "The student is correct — enzymes slowly dissolve during reactions.",
              "Enzymes are biological catalysts — they are regenerated after each reaction and can catalyse thousands of reactions.",
              "Enzymes are consumed only at high temperatures.",
              "Enzymes are consumed only when substrate concentration is very high.",
            ],
            answerIndex: 1,
            explanation: "Enzymes are biological catalysts — they are not consumed. After the enzyme-substrate complex forms and products are released, the enzyme is freed unchanged and can bind another substrate molecule. A tiny amount of enzyme can catalyse enormous quantities of substrate.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "core",
            hints: [
              "What is the defining property of a catalyst?",
              "What happens to the enzyme after products are released?",
              "Can the same enzyme molecule catalyse many reactions in succession?",
            ],
          },
        ],
      },
      {
        id: "bio-enzymes-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Ten MCQs on temperature effects, optimum temperature, denaturation, and Q10 calculations.",
        questions: [
          {
            id: "bio-enzymes-bm2-01",
            question: "Why does the rate of an enzyme-catalysed reaction increase as temperature rises from 10 degrees C to the optimum?",
            options: [
              "The enzyme is produced faster at higher temperatures.",
              "More substrate molecules are created at higher temperatures.",
              "Molecules have more kinetic energy so substrate collides with the active site more often.",
              "The active site becomes larger, fitting more substrate molecules simultaneously.",
            ],
            answerIndex: 2,
            explanation: "Rising temperature increases molecular kinetic energy. Substrate molecules move faster and collide with the enzyme active site more frequently, forming more enzyme-substrate complexes per unit time and increasing rate.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm2-02",
            question: "What is the optimum temperature of an enzyme?",
            options: [
              "The temperature at which the enzyme is first produced.",
              "The temperature at which the enzyme rate of reaction is maximum.",
              "The temperature at which the enzyme becomes denatured.",
              "Always 37 degrees C, regardless of the organism.",
            ],
            answerIndex: 1,
            explanation: "The optimum temperature is the temperature at which the enzyme rate is highest. 37 degrees C is only the optimum for most human enzymes — other organisms have different optima.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm2-03",
            question: "An enzyme is heated to 80 degrees C for 5 minutes, then cooled to its optimum of 37 degrees C. What would you observe?",
            options: [
              "Full activity returns because the enzyme is back at its optimum.",
              "Activity remains very low because the enzyme has been irreversibly denatured.",
              "Activity doubles because heating then cooling activates the enzyme.",
              "Activity is zero because the enzyme has been killed.",
            ],
            answerIndex: 1,
            explanation: "At 80 degrees C the enzyme is denatured — bonds maintaining the active site shape break permanently. Cooling to 37 degrees C cannot re-form these bonds in their original arrangement. Option D uses 'killed', which is incorrect — enzymes are not alive. Denaturation is irreversible.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Is denaturation reversible or irreversible?",
              "Can cooling re-form broken hydrogen bonds in their original arrangement?",
              "Use 'denatured' not 'killed'.",
            ],
          },
          {
            id: "bio-enzymes-bm2-04",
            question: "Why does an enzyme become denatured above its optimum temperature?",
            options: [
              "Excess substrate blocks the active site.",
              "pH of the solution changes at high temperature.",
              "High thermal energy breaks bonds maintaining the active site 3D shape.",
              "The substrate is destroyed by high temperature before it can bind.",
            ],
            answerIndex: 2,
            explanation: "The enzyme 3D shape is maintained by hydrogen bonds and other weak interactions between amino acid side chains. Above the optimum, thermal energy breaks these bonds. The active site shape changes permanently so it is no longer complementary to the substrate.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What holds the active site in its precise 3D shape?",
              "What happens to hydrogen bonds when thermal energy is very high?",
              "What does a permanently changed active site shape mean for substrate binding?",
            ],
          },
          {
            id: "bio-enzymes-bm2-05",
            question: "A student stores an enzyme solution in a freezer at minus 20 degrees C overnight, thaws it, and measures activity at 37 degrees C. What would she most likely find?",
            options: [
              "No activity — the enzyme was destroyed by freezing.",
              "Normal activity — freezing preserved the enzyme and the active site is intact.",
              "Double activity — freezing concentrated the enzyme.",
              "Half activity — freezing partially denatured the enzyme.",
            ],
            answerIndex: 1,
            explanation: "Low temperatures do not denature enzymes — the active site shape is preserved at minus 20 degrees C. Freezing slows molecular motion but does not break the bonds maintaining enzyme structure. When returned to 37 degrees C, the enzyme is fully functional.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Does low temperature cause denaturation?",
              "What is the difference between slowing an enzyme and denaturing it?",
              "Why do laboratories store enzymes frozen?",
            ],
          },
          {
            id: "bio-enzymes-bm2-06",
            question: "Enzyme P has Q10 = 2. The rate at 20 degrees C is 5 units/min. What is the predicted rate at 30 degrees C?",
            options: [
              "5 units/min",
              "7 units/min",
              "10 units/min",
              "20 units/min",
            ],
            answerIndex: 2,
            explanation: "Q10 = 2 means rate doubles for each 10 degree C rise. From 20 to 30 degrees C is one 10 degree step: rate = 5 x 2 = 10 units/min.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Q10 = 2 means multiply rate by 2 for each 10 degree C rise.",
              "20 to 30 degrees C is exactly one 10 degree step.",
              "5 x 2 = ?",
            ],
            strategy: "Q10 calculation: new rate = old rate x Q10 per 10 degree step",
          },
          {
            id: "bio-enzymes-bm2-07",
            question: "Enzyme Q has Q10 = 2. Rate at 20 degrees C = 3 units/min. Assuming no denaturation, what is the predicted rate at 40 degrees C?",
            options: [
              "6 units/min",
              "9 units/min",
              "12 units/min",
              "24 units/min",
            ],
            answerIndex: 2,
            explanation: "From 20 to 40 degrees C = 20 degree rise = two 10 degree steps. Apply Q10 = 2 twice: 3 x 2 = 6 (at 30 degrees C), then 6 x 2 = 12 (at 40 degrees C). Rate = 12 units/min.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "20 to 40 degrees C = two 10 degree steps.",
              "Apply Q10 = 2 twice: multiply by 2 then multiply by 2 again.",
              "3 x 2 x 2 = 3 x 4 = 12.",
            ],
            strategy: "Count 10 degree steps, apply Q10 once per step",
          },
          {
            id: "bio-enzymes-bm2-08",
            question: "A rate-temperature graph peaks at 40 degrees C, then falls. A student says: 'Rate falls above 40 degrees C because substrate molecules slow down at high temperature.' What is wrong with this explanation?",
            options: [
              "Substrate molecules do slow down above 40 degrees C — the student is correct.",
              "Rate falls because the enzyme is denatured — bonds in the active site break, changing its shape permanently.",
              "Rate falls because the enzyme is killed at temperatures above 40 degrees C.",
              "Rate falls because pH changes above 40 degrees C.",
            ],
            answerIndex: 1,
            explanation: "Above the optimum, substrate molecules actually have MORE kinetic energy — they move faster. The rate falls because the enzyme is denatured: bonds maintaining the active site 3D shape break, the shape changes permanently, and substrate can no longer bind. Option C uses 'killed', which is incorrect.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Higher temperature means more kinetic energy — do molecules slow down?",
              "What happens to the enzyme itself above the optimum?",
              "Denaturation is the key — what does it mean for the active site?",
              "Which option uses the correct mechanism?",
            ],
            strategy: "Distinguish substrate kinetic energy (increases) from enzyme denaturation (causes rate fall)",
          },
          {
            id: "bio-enzymes-bm2-09",
            question: "Which organism would you expect to have enzymes with the highest optimum temperature?",
            options: [
              "A deep-sea fish living at 2 degrees C.",
              "A human.",
              "A bacterium living in a hot spring at 85 degrees C.",
              "A plant growing in a temperate climate.",
            ],
            answerIndex: 2,
            explanation: "Enzymes are adapted to the environment of the organism. A thermophilic bacterium at 85 degrees C requires enzymes that function at that temperature — their optima are typically 70-90 degrees C. Human enzymes have optima near 37 degrees C.",
            guideRef: "Common Misconceptions and Exam Technique",
            difficulty: "core",
            hints: [
              "Enzymes are adapted to the environment of the organism they come from.",
              "What temperature does the hot-spring bacterium live at?",
              "Is 37 degrees C a universal optimum for all organisms?",
            ],
          },
          {
            id: "bio-enzymes-bm2-10",
            question: "An enzyme-catalysed reaction is run at 5 degrees C — very slow but detectable. The temperature is raised to 35 degrees C (the optimum). What happens to the rate?",
            options: [
              "Rate stays the same — denaturation has already occurred at 5 degrees C.",
              "Rate increases — more kinetic energy means more frequent substrate-active site collisions.",
              "Rate falls — raising temperature always denatures enzymes.",
              "Rate falls to zero — the enzyme needs recovery time.",
            ],
            answerIndex: 1,
            explanation: "At 5 degrees C the enzyme is intact (not denatured) — it is simply cold. Raising to 35 degrees C (the optimum) increases molecular kinetic energy, substrate collides with the active site more frequently, and rate increases. Denaturation does not occur at 5 degrees C.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Does 5 degrees C denature enzymes?",
              "What does low temperature do to kinetic energy?",
              "Is inactivity at low temperature reversible?",
              "At the optimum temperature, what is maximised?",
            ],
            strategy: "Distinguish reversible cold-slowing from irreversible heat-denaturation",
          },
        ],
      },
      {
        id: "bio-enzymes-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Ten MCQs on pH effects, enzyme location in digestion, and experimental investigation design.",
        questions: [
          {
            id: "bio-enzymes-bm3-01",
            question: "What is the optimum pH for salivary amylase?",
            options: [
              "pH 2",
              "pH 4",
              "pH 7",
              "pH 9",
            ],
            answerIndex: 2,
            explanation: "Salivary amylase works best at pH 7 (neutral), matching the pH of saliva. Pepsin has an optimum of pH 2, and trypsin has an optimum of approximately pH 8.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm3-02",
            question: "Pepsin is a protease in the stomach with optimum pH 2. Which statement is correct?",
            options: [
              "Pepsin works fastest in the small intestine where protein digestion is completed.",
              "Pepsin works fastest in the strongly acidic stomach, where conditions match its optimum pH.",
              "Pepsin works at any pH because it is a stable protein.",
              "Pepsin is denatured in the stomach by the high acid concentration.",
            ],
            answerIndex: 1,
            explanation: "Pepsin optimum pH is 2, matching the strongly acidic stomach. The small intestine is approximately pH 7-8, far from pepsin optimum. Pepsin is adapted to the acidic environment — it is not denatured by it.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm3-03",
            question: "Why does extreme pH denature an enzyme?",
            options: [
              "Extreme pH dissolves the enzyme molecule.",
              "H+ or OH- ions alter charges on amino acid side chains, changing the active site shape.",
              "Extreme pH increases temperature, breaking the enzyme apart.",
              "Extreme pH removes the substrate from the active site permanently.",
            ],
            answerIndex: 1,
            explanation: "The active site shape is maintained by bonds between charged amino acid side chains. At extreme pH, H+ or OH- ions interact with these side chains, altering their charge and disrupting these bonds. The active site changes shape permanently (denaturation) so the substrate no longer fits.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What maintains the 3D shape of the active site?",
              "What do H+ ions do to charged amino acid side chains?",
              "Link altered charges to changed active site shape to substrate cannot bind.",
            ],
          },
          {
            id: "bio-enzymes-bm3-04",
            question: "A student tests enzyme M at pH 2, 5, 7, 9, and 12. The highest rate occurs at pH 9. What is enzyme M optimum pH?",
            options: [
              "pH 2",
              "pH 7",
              "pH 9",
              "pH 12",
            ],
            answerIndex: 2,
            explanation: "The optimum pH is where the enzyme rate of reaction is highest. From the data, the highest rate is at pH 9, so the optimum pH for enzyme M is 9.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm3-05",
            question: "In an amylase-starch experiment using iodine, what does it indicate when the iodine no longer turns blue-black?",
            options: [
              "The amylase has been used up.",
              "The iodine has reacted with amylase instead of starch.",
              "All the starch has been digested by amylase.",
              "The iodine has been denatured.",
            ],
            answerIndex: 2,
            explanation: "Iodine turns blue-black only in the presence of starch. Orange-brown iodine means starch is absent — amylase has fully hydrolysed all starch into maltose. Amylase is not used up (it is a catalyst), and iodine does not react with amylase.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm3-06",
            question: "A student investigates amylase activity at different temperatures but uses distilled water instead of a buffer solution. What is the problem?",
            options: [
              "Distilled water reacts with starch and invalidates results.",
              "Distilled water does not control pH — pH may vary between tubes, confounding results.",
              "Distilled water is too cold and will slow enzyme activity.",
              "Distilled water will wash away the enzyme.",
            ],
            answerIndex: 1,
            explanation: "A buffer solution maintains constant pH. Distilled water has no buffering capacity — pH could shift between tubes, introducing an uncontrolled variable. Since pH affects enzyme activity, this would confound the temperature results.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "What is the purpose of a buffer solution?",
              "If pH is not controlled, what else might be changing besides temperature?",
              "Would you be able to attribute rate differences solely to temperature?",
            ],
          },
          {
            id: "bio-enzymes-bm3-07",
            question: "In a catalase experiment, 6 cm3 of oxygen is collected in 3 minutes. What is the rate of reaction?",
            options: [
              "6 cm3/min",
              "2 cm3/min",
              "18 cm3/min",
              "0.5 cm3/min",
            ],
            answerIndex: 1,
            explanation: "Rate = volume of oxygen produced / time = 6 cm3 divided by 3 min = 2 cm3/min. Always express rate as amount per unit time.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "Rate = amount produced / time taken.",
              "6 cm3 in 3 minutes = ? cm3 per minute.",
            ],
            strategy: "Rate = quantity / time",
          },
          {
            id: "bio-enzymes-bm3-08",
            question: "A student repeats her amylase experiment three times and calculates a mean. Why is this important?",
            options: [
              "To make the experiment take longer.",
              "To ensure the enzyme concentration is identical in each tube.",
              "To reduce the effect of random errors and improve reliability.",
              "To check that the iodine colour is always consistent.",
            ],
            answerIndex: 2,
            explanation: "Repeating experiments and calculating means reduces the impact of random errors (timing inaccuracies, volume errors etc.). This improves reliability — results reproducible across repeats are more trustworthy.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "What is a random error?",
              "How does averaging multiple results reduce random error impact?",
              "Reliability means results can be reproduced.",
            ],
          },
          {
            id: "bio-enzymes-bm3-09",
            question: "A student investigates pH effects on amylase but forgets to control temperature. Results show lower activity at pH 5 compared to pH 7. Which is the correct conclusion?",
            options: [
              "Amylase works best at pH 7 — this result is valid.",
              "The result is unreliable because temperature was uncontrolled — pH or temperature (or both) may have caused the difference.",
              "Temperature does not affect enzyme activity, so the result is valid.",
              "The result proves amylase is denatured at pH 5.",
            ],
            answerIndex: 1,
            explanation: "If temperature is not controlled, it is a confounding variable. The observed difference in activity could be due to pH, temperature, or both. For a valid conclusion about pH, only pH should change — all other variables must be controlled.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "What must be controlled in a fair test?",
              "If temperature also changed, can you be sure pH caused the difference?",
              "A confounding variable changes alongside the independent variable.",
            ],
            strategy: "Check all control variables — if any are uncontrolled, conclusions are invalid",
          },
          {
            id: "bio-enzymes-bm3-10",
            question: "Why is a water bath used rather than a Bunsen burner when investigating enzyme activity at a fixed temperature?",
            options: [
              "Water baths are cheaper than Bunsen burners.",
              "A water bath provides a stable, even temperature; a Bunsen burner causes uneven heating.",
              "A Bunsen burner would evaporate the enzyme solution.",
              "Water baths prevent the solution from boiling.",
            ],
            answerIndex: 1,
            explanation: "A water bath surrounds the tube with water at a fixed temperature, providing uniform, stable heat. A Bunsen burner heats unevenly — temperature fluctuates and gradients form within the solution. Precise temperature control is essential when temperature is the independent variable.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "What is the independent variable when investigating temperature effects?",
              "How even is the temperature produced by a Bunsen burner?",
              "Why does uneven heating make results unreliable?",
            ],
            strategy: "Controlled temperature leads to valid comparison and reliable results",
          },
        ],
      },
      {
        id: "bio-enzymes-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ten MCQs on misconceptions, synoptic applications, graph analysis, and challenge problems.",
        questions: [
          {
            id: "bio-enzymes-bm4-01",
            question: "A student writes: 'Enzymes are killed at high temperature.' Which word should replace 'killed'?",
            options: [
              "Inactivated",
              "Dissolved",
              "Denatured",
              "Digested",
            ],
            answerIndex: 2,
            explanation: "Enzymes are proteins, not living things — they cannot be killed. The correct term is 'denatured': high temperature breaks bonds maintaining the active site 3D shape, permanently altering it.",
            guideRef: "Common Misconceptions and Exam Technique",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm4-02",
            question: "A pH-activity graph shows a bell-shaped curve peaking at pH 6. A student concludes: 'The enzyme is denatured at every pH except pH 6.' Is this conclusion correct?",
            options: [
              "Yes — the enzyme only functions at exactly pH 6.",
              "No — the enzyme works across a range of pH values; denaturation occurs only at extreme pH, not at every non-optimum pH.",
              "Yes — any deviation from the optimum pH immediately denatures the enzyme.",
              "No — the graph shows the enzyme has no optimum pH.",
            ],
            answerIndex: 1,
            explanation: "A bell-shaped curve shows rate decreasing as pH moves from the optimum, but denaturation (irreversible structural change) occurs only at extreme pH values. At pH values near (but not at) the optimum, the enzyme still functions — just less efficiently.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Distinguish between reduced activity and full denaturation.",
              "Denaturation occurs at extreme pH, not at every non-optimum pH.",
              "A reduced rate does not automatically mean the enzyme is denatured.",
            ],
          },
          {
            id: "bio-enzymes-bm4-03",
            question: "Which statement correctly describes the effect of LOW temperature on enzyme activity?",
            options: [
              "Low temperature permanently denatures the enzyme.",
              "Low temperature kills the enzyme.",
              "Low temperature slows the enzyme reversibly — activity returns on warming.",
              "Low temperature increases enzyme activity by reducing competing reactions.",
            ],
            answerIndex: 2,
            explanation: "Low temperature does not denature enzymes — it simply reduces kinetic energy so substrate-active site collisions are less frequent. The active site shape is preserved. Warming restores activity. This contrasts with high temperature, which causes irreversible denaturation.",
            guideRef: "Common Misconceptions and Exam Technique",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm4-04",
            question: "Trypsin (optimum pH approximately 8) is secreted into the small intestine. If trypsin entered the stomach (pH approximately 2), what would happen?",
            options: [
              "Trypsin would work faster because acid helps break proteins.",
              "Trypsin would be denatured — extreme acidity changes its active site shape permanently.",
              "Trypsin would be unaffected because all proteases work at any pH.",
              "Trypsin would change its optimum pH to match the stomach.",
            ],
            answerIndex: 1,
            explanation: "Trypsin optimum pH is approximately 8. At pH 2 (far from optimum), extreme acidity alters charges on amino acid side chains forming the active site, changing its shape permanently. Trypsin is denatured and cannot form enzyme-substrate complexes. Enzymes cannot change their optimum pH.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What is trypsin optimum pH?",
              "What happens to an enzyme exposed to pH far from its optimum?",
              "What changes in the active site during denaturation?",
            ],
          },
          {
            id: "bio-enzymes-bm4-05",
            question: "On a rate-versus-temperature graph, what does the region near 0 degrees C (very low rate) represent?",
            options: [
              "Denaturation has already occurred near 0 degrees C.",
              "Very low activity — substrate molecules have minimal kinetic energy so collisions with the active site are extremely rare.",
              "Maximum enzyme concentration is reached at 0 degrees C.",
              "The enzyme has not yet been produced at 0 degrees C.",
            ],
            answerIndex: 1,
            explanation: "Near 0 degrees C, molecules have very little kinetic energy. Substrate molecules barely move, so collisions with the active site are extremely infrequent. The enzyme is intact (not denatured) but essentially inactive. This is reversible — warming increases activity.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Does 0 degrees C denature enzymes?",
              "What determines how often substrate collides with the active site?",
              "Is this very low activity at 0 degrees C permanent or reversible?",
            ],
          },
          {
            id: "bio-enzymes-bm4-06",
            question: "Enzyme samples are incubated at 35 degrees C and 45 degrees C for 10 minutes, then both returned to 35 degrees C. What would be observed?",
            options: [
              "Both samples show the same rate at 35 degrees C — denaturation is reversible.",
              "The sample previously at 35 degrees C shows higher rate; the sample previously at 45 degrees C shows lower rate (denatured).",
              "The sample previously at 45 degrees C shows higher rate — it was pre-warmed.",
              "Both samples show zero activity after cooling.",
            ],
            answerIndex: 1,
            explanation: "The sample at 35 degrees C (at or near optimum) has active enzyme. The sample at 45 degrees C (above optimum) was denatured — the active site permanently altered. Returning to 35 degrees C cannot restore denatured enzyme.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Is denaturation reversible?",
              "What happened to the active site at 45 degrees C?",
              "Cooling cannot re-form bonds in the active site in their original arrangement.",
            ],
            strategy: "Denaturation test: if activity does not return on cooling, denaturation has occurred",
          },
          {
            id: "bio-enzymes-bm4-07",
            question: "Enzyme R has Q10 = 2 between 20 degrees C and 40 degrees C. Rate at 20 degrees C = 4 units/min. The Q10 prediction for 50 degrees C gives 32 units/min. Why would the actual rate at 50 degrees C be much lower?",
            options: [
              "Q10 is always less than 2 above 40 degrees C.",
              "Substrate runs out above 40 degrees C.",
              "Denaturation above the optimum reduces the number of functional enzyme molecules.",
              "The enzyme becomes more specific at high temperature.",
            ],
            answerIndex: 2,
            explanation: "Q10 predicts rate based on kinetic energy alone. Above the optimum, denaturation occurs — the active site changes shape permanently, reducing functional enzyme molecules. The Q10 formula does not account for denaturation, so it overestimates rate above the optimum.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Q10 only accounts for kinetic energy effects on rate.",
              "What else happens to enzyme molecules above the optimum?",
              "Fewer functional enzyme molecules means rate is lower than Q10 predicts.",
            ],
            strategy: "Q10 breaks down above the optimum because denaturation adds a second factor reducing rate",
          },
          {
            id: "bio-enzymes-bm4-08",
            question: "Which graph shape correctly describes the relationship between pH and enzyme activity for a single enzyme?",
            options: [
              "Straight line rising from pH 1 to pH 14.",
              "Bell-shaped curve with a peak at the enzyme specific optimum pH.",
              "Straight line falling from pH 1 to pH 14.",
              "Flat line showing no change with pH.",
            ],
            answerIndex: 1,
            explanation: "The rate-vs-pH graph is bell-shaped: rate rises to a maximum at the optimum pH, then falls on either side as the active site shape is disrupted. The peak is at the enzyme specific optimum pH, which varies between enzymes.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm4-09",
            question: "A food technologist uses a protease enzyme to tenderise meat before cooking at 80 degrees C plus. What happens to the enzyme during cooking?",
            options: [
              "The enzyme continues to tenderise the meat during cooking.",
              "The enzyme is denatured during cooking — its active site changes shape permanently.",
              "The enzyme is preserved by the cooking process.",
              "The enzyme converts the meat proteins into fats during cooking.",
            ],
            answerIndex: 1,
            explanation: "At 80 degrees C plus (well above any enzyme optimum), the protease is denatured — bonds in its active site break permanently so it can no longer catalyse protein digestion. This is why the enzyme is applied before cooking, not during.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "What happens to enzymes above their optimum temperature?",
              "Is denaturation reversible?",
              "Can a denatured enzyme still catalyse reactions?",
            ],
          },
          {
            id: "bio-enzymes-bm4-10",
            question: "Enzyme X (from human liver) and enzyme Y (from yeast) both have an optimum temperature of 37 degrees C. Which statement is most likely true?",
            options: [
              "Enzymes X and Y are the same enzyme because they share the same optimum temperature.",
              "Enzymes X and Y are different molecules — sharing an optimum temperature does not mean identical structure or substrate.",
              "Enzyme Y must also have an optimum pH of 7 because it shares the same temperature optimum.",
              "Enzyme X works faster than enzyme Y because human enzymes are always more efficient.",
            ],
            answerIndex: 1,
            explanation: "Same optimum temperature does not mean identical enzymes. Different enzymes can have similar temperature optima but completely different amino acid sequences, active site shapes, substrates, optimum pH values, and functions. Enzyme identity is determined by structure and function, not by a single shared property.",
            guideRef: "Common Misconceptions and Exam Technique",
            difficulty: "challenge",
            hints: [
              "What makes two enzymes different at a molecular level?",
              "Can two different proteins have similar temperature optima?",
              "Think about active site shape, substrate, amino acid sequence.",
            ],
            strategy: "Enzyme identity is determined by structure and function, not a single shared property",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-enzymes-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ten structured questions on enzyme catalysis, lock-and-key model, and specificity.",
        questions: [
          {
            id: "bio-enzymes-bq1-01",
            question: "State what is meant by the term 'biological catalyst'. [2 marks]",
            marks: 2,
            modelAnswer: "A biological catalyst is a substance produced by living cells that increases the rate of a chemical reaction without being used up in the process. Enzymes are biological catalysts and are protein molecules.",
            markScheme: [
              "Speeds up / increases rate of chemical reaction",
              "Without being used up / not consumed / is regenerated after the reaction",
            ],
            commonError: "Writing that enzymes 'provide energy' for reactions — they lower the activation energy barrier but do not supply energy.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bq1-02",
            question: "Describe the lock-and-key model of enzyme action. Use the terms: active site, substrate, complementary, enzyme-substrate complex. [4 marks]",
            marks: 4,
            modelAnswer: "Each enzyme has an active site — a region with a specific three-dimensional shape. The substrate molecule has a shape complementary to the active site, fitting precisely like a key into a lock. When the substrate binds to the active site, an enzyme-substrate complex is formed. The reaction then takes place, products are released, and the enzyme is freed unchanged to catalyse the reaction again.",
            markScheme: [
              "Active site: specific / precise 3D shape on the enzyme surface",
              "Substrate shape is complementary to the active site",
              "Enzyme + substrate forms enzyme-substrate complex (temporary structure)",
              "Products released and enzyme freed / enzyme not consumed",
            ],
            commonError: "Describing the substrate as entering 'inside' the enzyme — the substrate binds to the active site on the enzyme surface.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "core",
            hints: [
              "Start by defining active site.",
              "Use the word 'complementary' for the shape relationship.",
              "Name the structure formed when substrate binds.",
              "What happens to the enzyme after products are released?",
            ],
            strategy: "Sequence: define active site, complementary substrate, enzyme-substrate complex, enzyme recycled",
          },
          {
            id: "bio-enzymes-bq1-03",
            question: "Explain what is meant by enzyme specificity, using amylase as an example. [3 marks]",
            marks: 3,
            modelAnswer: "Enzyme specificity means that each enzyme catalyses only one reaction or acts on one substrate (or a very narrow range). This is because the active site has a precise three-dimensional shape that is complementary to only one substrate. For example, amylase has an active site complementary to starch — it can hydrolyse starch but cannot bind to protein, because protein has a different molecular shape and is not complementary to amylase active site.",
            markScheme: [
              "Each enzyme catalyses only one reaction / acts on one or very few substrates",
              "Because active site shape is complementary to only one substrate",
              "Example: amylase acts on starch but not protein (must reference shape)",
            ],
            commonError: "Saying enzymes only work at one temperature or pH — specificity refers to substrate selectivity, not environmental conditions.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "core",
            hints: [
              "Specificity relates to which substrate the enzyme acts on.",
              "Link specificity to active site shape being complementary to one substrate.",
              "Give a concrete example with amylase and starch.",
            ],
          },
          {
            id: "bio-enzymes-bq1-04",
            question: "Explain how an enzyme lowers the activation energy of a reaction and why this increases the rate. [3 marks]",
            marks: 3,
            modelAnswer: "Activation energy is the minimum energy required for a reaction to occur — the energy barrier that reactants must overcome to form products. An enzyme lowers this barrier by binding the substrate at the active site, which strains chemical bonds, brings reactants into the correct orientation, or provides a favourable chemical environment. Because the energy barrier is lower, more reactant molecules have sufficient energy to react at any given moment, so the rate of reaction is faster.",
            markScheme: [
              "Activation energy defined: minimum energy needed for reaction / energy barrier reactants must overcome",
              "Enzyme lowers activation energy / reduces the energy barrier",
              "More molecules have sufficient energy to react / reaction proceeds faster",
            ],
            commonError: "Confusing 'lowering activation energy' with 'providing energy' — enzymes do not supply energy; they lower the energy requirement.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "core",
            hints: [
              "Define activation energy first.",
              "What does lowering a barrier do to the number of molecules that can cross it?",
              "Enzymes do not provide energy — they lower the amount of energy required.",
            ],
          },
          {
            id: "bio-enzymes-bq1-05",
            question: "An amylase solution is heated to 90 degrees C for 5 minutes, then cooled to 37 degrees C and mixed with starch. After 20 minutes, iodine still turns blue-black. Explain this result. [3 marks]",
            marks: 3,
            modelAnswer: "Heating to 90 degrees C causes the amylase to denature — the high temperature breaks the hydrogen bonds and other weak bonds that maintain the 3D shape of the active site. The active site changes shape permanently so it is no longer complementary to the starch substrate. Even after cooling to 37 degrees C, denaturation is irreversible — the enzyme cannot refold to its original shape. No enzyme-substrate complexes form, so starch is not digested and iodine continues to turn blue-black.",
            markScheme: [
              "90 degrees C denatures the amylase / active site changes shape permanently",
              "High temperature breaks bonds (hydrogen bonds) maintaining active site shape",
              "Denaturation is irreversible — cooling does not restore original active site shape / no enzyme-substrate complex forms",
            ],
            commonError: "Saying the enzyme was 'killed' — must use 'denatured' and explain the active site shape change.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "90 degrees C is far above amylase optimum — what does this do?",
              "Is denaturation reversible?",
              "What must happen before starch can be digested?",
            ],
          },
          {
            id: "bio-enzymes-bq1-06",
            question: "State three roles of enzymes in the human body, naming the enzyme and its function in each case. [3 marks]",
            marks: 3,
            modelAnswer: "1. Amylase — catalyses hydrolysis of starch into maltose in saliva (mouth) and small intestine. 2. Pepsin — catalyses hydrolysis of proteins into peptides in the stomach. 3. Catalase — catalyses breakdown of hydrogen peroxide (2H2O2 -> 2H2O + O2) in liver cells.",
            markScheme: [
              "Any valid enzyme + correct function: amylase/starch to maltose; pepsin or trypsin/protein to peptides; lipase/fats to fatty acids and glycerol; catalase/H2O2 to water and oxygen; DNA polymerase/DNA replication — 1 mark per correct pair up to 3",
            ],
            commonError: "Naming an enzyme but giving the wrong substrate or product (e.g. saying amylase digests protein).",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bq1-07",
            question: "Explain why amylase cannot digest fat. [2 marks]",
            marks: 2,
            modelAnswer: "Amylase active site has a specific three-dimensional shape that is complementary to starch (its substrate). Fat molecules have a different molecular shape and are not complementary to amylase active site. Fat cannot bind to the active site, so no enzyme-substrate complex forms and no digestion occurs. Lipase is the enzyme with an active site complementary to fat.",
            markScheme: [
              "Amylase active site is complementary to starch / not complementary to fat",
              "Fat cannot bind to amylase active site / no enzyme-substrate complex forms / no digestion",
            ],
            commonError: "Saying amylase 'does not recognise' fat — must use shape-based language (complementary, active site).",
            guideRef: "The Lock-and-Key Model",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bq1-08",
            question: "A scientist investigates whether enzyme concentration affects reaction rate, using 1%, 2%, 3%, and 4% enzyme solutions with excess substrate at 37 degrees C and pH 7. Predict and explain the results. [4 marks]",
            marks: 4,
            modelAnswer: "As enzyme concentration increases from 1% to 4%, the rate of reaction increases. A higher enzyme concentration means more enzyme molecules and more active sites available simultaneously. With substrate in excess, more active sites means more enzyme-substrate complexes form per unit time, increasing the rate. The relationship is approximately proportional — doubling enzyme concentration approximately doubles the rate — because substrate is not the limiting factor.",
            markScheme: [
              "Rate increases as enzyme concentration increases",
              "More enzyme molecules means more active sites available",
              "More enzyme-substrate complexes form per unit time means higher rate",
              "Substrate in excess so enzyme concentration is the limiting factor / approximately proportional relationship",
            ],
            commonError: "Saying rate stays the same because enzymes are not used up — enzyme concentration still matters for rate even though enzymes are regenerated.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "core",
            hints: [
              "More enzyme = more active sites simultaneously available.",
              "With substrate in excess, what limits how many complexes form?",
              "Enzymes not being used up means they are recycled, not that concentration is irrelevant.",
            ],
          },
          {
            id: "bio-enzymes-bq1-09",
            question: "The enzyme urease catalyses: (NH2)2CO + H2O -> 2NH3 + CO2. Explain why urease cannot also catalyse the breakdown of starch. [3 marks]",
            marks: 3,
            modelAnswer: "Urease has an active site with a specific three-dimensional shape that is complementary to the urea molecule. Starch is a large polymer with a different molecular shape and is not complementary to urease active site. Therefore starch cannot bind to the active site, no enzyme-substrate complex forms, and the reaction cannot be catalysed. This is enzyme specificity — each enzyme acts on only one substrate or a very narrow range.",
            markScheme: [
              "Urease active site shape is complementary to urea only",
              "Starch has a different shape / is not complementary to urease active site",
              "Starch cannot bind / no enzyme-substrate complex / no reaction — enzyme specificity",
            ],
            commonError: "Saying urease 'does not have the right chemicals' — must use shape-based reasoning (complementary, active site).",
            guideRef: "The Lock-and-Key Model",
            difficulty: "core",
            hints: [
              "What determines which substrate an enzyme can act on?",
              "Is starch the same shape as urea?",
              "Use 'complementary' and 'active site' in your answer.",
            ],
          },
          {
            id: "bio-enzymes-bq1-10",
            question: "A student claims that after an enzyme has catalysed 1000 reactions it will need to be replaced. Evaluate this claim. [3 marks]",
            marks: 3,
            modelAnswer: "The claim is incorrect. Enzymes are biological catalysts — they are not used up or consumed during reactions. After each reaction cycle, the enzyme-substrate complex breaks down, products are released, and the enzyme is freed in its original form. A single enzyme molecule can catalyse thousands or millions of reactions without being used up, as long as conditions remain suitable. The enzyme only loses activity if denatured by extreme temperature or extreme pH.",
            markScheme: [
              "Claim is incorrect — enzymes are not used up / are regenerated",
              "After each reaction cycle, enzyme is freed unchanged / enzyme recycled",
              "Enzyme only loses function if denatured by extreme temperature or pH",
            ],
            commonError: "Agreeing with the claim — the fundamental principle is that enzymes are catalysts and are not consumed.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "challenge",
            hints: [
              "What is the definition of a catalyst?",
              "What happens to the enzyme after products are released?",
              "Under what conditions would an enzyme actually lose activity permanently?",
            ],
            strategy: "Identify the error, correct it with the catalyst principle, then add the denaturation qualification",
          },
        ],
      },
      {
        id: "bio-enzymes-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Ten structured questions on temperature effects, Q10 calculations, and graph interpretation.",
        questions: [
          {
            id: "bio-enzymes-bq2-01",
            question: "Describe and explain how increasing temperature from 10 degrees C to the optimum affects enzyme activity. [3 marks]",
            marks: 3,
            modelAnswer: "As temperature increases from 10 degrees C to the optimum, the rate of enzyme-catalysed reaction increases. This is because higher temperatures give both enzyme and substrate molecules more kinetic energy. Substrate molecules move faster and collide with the enzyme active site more frequently. More enzyme-substrate complexes form per unit time, so the rate increases.",
            markScheme: [
              "Rate increases as temperature rises to the optimum",
              "Higher temperature gives more kinetic energy / substrate molecules move faster",
              "More frequent collisions between substrate and active site / more E-S complexes per unit time",
            ],
            commonError: "Saying the enzyme 'works harder' — must use kinetic energy and collision frequency language.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What does higher temperature do to molecular kinetic energy?",
              "How does kinetic energy affect how often substrate hits the active site?",
              "More collisions means more E-S complexes means higher rate.",
            ],
          },
          {
            id: "bio-enzymes-bq2-02",
            question: "Explain why enzyme activity decreases sharply above the optimum temperature. Use the term 'denatured'. [4 marks]",
            marks: 4,
            modelAnswer: "Above the optimum temperature, the rate of reaction decreases sharply because the enzyme is denatured. The high thermal energy breaks the hydrogen bonds and ionic bonds that maintain the precise three-dimensional shape of the active site. The active site changes shape and is no longer complementary to the substrate. Substrate molecules can no longer bind to the active site, so no enzyme-substrate complex can form and the rate falls. Denaturation is irreversible — cooling the enzyme does not restore the original active site shape.",
            markScheme: [
              "Rate decreases above optimum / enzyme is denatured",
              "High temperature breaks bonds (hydrogen bonds / ionic bonds) maintaining active site shape",
              "Active site shape changes / no longer complementary to substrate",
              "No enzyme-substrate complex forms / substrate cannot bind means rate falls",
            ],
            commonError: "Saying the enzyme is 'killed' — must use 'denatured'. Also omitting that denaturation is irreversible.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What holds the active site in its precise 3D shape?",
              "What does excessive heat do to these bonds?",
              "Use 'denatured' and explain what changed structurally.",
              "Is this change permanent?",
            ],
            strategy: "Bond breaking, active site shape change, substrate cannot bind, rate falls — all using the term 'denatured'",
          },
          {
            id: "bio-enzymes-bq2-03",
            question: "A student measures enzyme activity at 20 degrees C, 30 degrees C, 40 degrees C, and 50 degrees C, recording rates of 4, 8, 16, and 5 units/min respectively.\n\n(a) State the optimum temperature. [1 mark]\n(b) Calculate Q10 between 20 degrees C and 30 degrees C. Show working. [2 marks]\n(c) Predict and explain the rate at 60 degrees C. [2 marks]",
            marks: 5,
            modelAnswer: "(a) The optimum temperature is 40 degrees C, where the rate is highest (16 units/min).\n\n(b) Q10 = rate at 30 degrees C / rate at 20 degrees C = 8 / 4 = 2.0\n\n(c) The rate at 60 degrees C would be approximately zero. The rate falls sharply from 16 to 5 between 40 and 50 degrees C, indicating significant denaturation. By 60 degrees C, the enzyme would be fully denatured — the active site has permanently changed shape, no enzyme-substrate complexes can form, and rate is essentially zero.",
            markScheme: [
              "(a) 40 degrees C",
              "(b) Q10 = 8 / 4 = 2.0 (method: correct division; answer: 2.0)",
              "(c) Rate approximately 0 / very low at 60 degrees C",
              "(c) Enzyme fully denatured at 60 degrees C / active site permanently altered / no E-S complex",
            ],
            commonError: "(b) Dividing temperatures (30/20) instead of rates. (c) Not justifying with denaturation.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "(a) Find the highest rate value in the data.",
              "(b) Q10 = rate at higher T / rate at lower T — use rates not temperatures.",
              "(c) The trend from 40 to 50 shows rapid fall — what does this suggest about 60 degrees C?",
            ],
            strategy: "Q10 = ratio of rates; extrapolate trend using denaturation argument",
            solutions: [
              {
                label: "Q10 calculation",
                steps: [
                  "Identify the rates: 20 degrees C = 4, 30 degrees C = 8.",
                  "Q10 = rate at (T + 10) / rate at T.",
                  "Q10 = 8 / 4 = 2.0",
                ],
              },
            ],
          },
          {
            id: "bio-enzymes-bq2-04",
            question: "An enzyme has Q10 = 2. The rate at 25 degrees C is 6 units/min. Assuming no denaturation, calculate the predicted rate at 55 degrees C. Show all working. [3 marks]",
            marks: 3,
            modelAnswer: "From 25 degrees C to 55 degrees C = rise of 30 degrees C = three 10 degree steps.\nApply Q10 = 2 three times:\n25 to 35 degrees C: 6 x 2 = 12 units/min\n35 to 45 degrees C: 12 x 2 = 24 units/min\n45 to 55 degrees C: 24 x 2 = 48 units/min\nPredicted rate at 55 degrees C = 48 units/min.",
            markScheme: [
              "3 steps identified (30 / 10 = 3)",
              "Correct sequential application: 6 x 2 = 12, x 2 = 24, x 2 = 48",
              "Answer: 48 units/min",
            ],
            commonError: "Multiplying by Q10 only once for the full 30 degree rise (6 x 2 = 12) — must apply once per 10 degree step.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "How many 10 degree steps from 25 to 55 degrees C?",
              "Apply Q10 once per 10 degree step.",
              "Alternative: new rate = old rate x Q10 to the power of number of steps = 6 x 2 cubed.",
            ],
            strategy: "Count 10 degree steps (n = temperature rise / 10), then new rate = old rate x Q10 to the power n",
            solutions: [
              {
                label: "Step-by-step Q10 application",
                steps: [
                  "Temperature rise = 55 - 25 = 30 degrees C.",
                  "Number of 10 degree steps = 30 / 10 = 3.",
                  "Rate at 35 degrees C = 6 x 2 = 12 units/min.",
                  "Rate at 45 degrees C = 12 x 2 = 24 units/min.",
                  "Rate at 55 degrees C = 24 x 2 = 48 units/min.",
                ],
              },
            ],
          },
          {
            id: "bio-enzymes-bq2-05",
            question: "A student measures enzyme rate at 35 degrees C (rate = 20 units/min). She heats the enzyme to 70 degrees C for 2 minutes, cools it to 35 degrees C, and measures again — finding rate = 2 units/min. Explain why the rate did not return to 20 units/min. [3 marks]",
            marks: 3,
            modelAnswer: "At 70 degrees C, the enzyme was denatured — the high temperature broke the hydrogen bonds and other bonds maintaining the three-dimensional shape of the active site. The active site shape changed permanently. When cooled back to 35 degrees C, these bonds do not reform in the original arrangement, so the active site cannot return to its original complementary shape. The substrate can no longer bind efficiently, so few enzyme-substrate complexes form and rate remains very low. Denaturation is irreversible.",
            markScheme: [
              "Enzyme denatured at 70 degrees C / active site shape changed permanently",
              "Bonds (hydrogen bonds) maintaining active site shape broken by heat",
              "Denaturation is irreversible — cooling cannot restore original active site shape",
            ],
            commonError: "Saying the enzyme 'has not recovered yet' — denaturation is irreversible, not slow to reverse.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What does 70 degrees C do to the enzyme?",
              "Is denaturation permanent or temporary?",
              "Can cooling re-form bonds in their original arrangement?",
            ],
          },
          {
            id: "bio-enzymes-bq2-06",
            question: "Describe the expected shape of a rate-versus-temperature graph for a typical human enzyme and explain each section. [5 marks]",
            marks: 5,
            modelAnswer: "The graph is bell-shaped. Section 1 — rising phase (approximately 0 to 37 degrees C): as temperature increases, molecules gain more kinetic energy. Substrate molecules collide with the active site more frequently, so more enzyme-substrate complexes form per unit time and the rate increases. Section 2 — peak (approximately 37 degrees C): the optimum temperature, where rate is at its maximum. Section 3 — falling phase (above 37 degrees C): above the optimum, the enzyme is denatured — hydrogen bonds and other bonds holding the active site in shape break. The active site changes shape permanently; substrate can no longer bind, and rate falls sharply toward zero.",
            markScheme: [
              "Bell-shaped curve described",
              "Rising phase: more kinetic energy means more frequent substrate-active site collisions means higher rate",
              "Peak: optimum temperature approximately 37 degrees C — maximum rate",
              "Falling phase: enzyme denatured above optimum",
              "Mechanism: bonds break means active site shape changes means substrate cannot bind means rate falls",
            ],
            commonError: "Not explaining both rising and falling phases separately. Using 'killed' instead of 'denatured'.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Describe three phases: rising, peak, falling.",
              "For rising: kinetic energy and collision frequency.",
              "For falling: denaturation mechanism.",
              "Quote approximately 37 degrees C as typical human enzyme optimum.",
            ],
            strategy: "Three-phase description: rising (KE and collisions), peak (optimum), falling (denaturation mechanism)",
          },
          {
            id: "bio-enzymes-bq2-07",
            question: "Enzyme R has Q10 = 2 below its optimum. A student says: 'Raising temperature from 30 degrees C to 70 degrees C will increase rate 16-fold.' Evaluate this prediction. [4 marks]",
            marks: 4,
            modelAnswer: "The prediction is mathematically correct but scientifically flawed. From 30 to 70 degrees C is 40 degrees C — four 10 degree steps. If Q10 = 2 applied throughout: 2 to the power 4 = 16-fold — so the maths is confirmed. However, the Q10 formula applies only below the optimum, where kinetic energy is the only factor affecting rate. Above the optimum (approximately 37 degrees C for typical human enzymes), denaturation occurs — bonds in the active site break permanently, reducing the number of functional enzyme molecules. The actual rate at 70 degrees C would be far lower than 16-fold greater (likely near zero), because denaturation dominates. The prediction is a major overestimate.",
            markScheme: [
              "Mathematically: 4 steps, 2 to the power 4 = 16-fold — maths confirmed as correct",
              "Q10 only valid below the optimum / denaturation occurs above optimum",
              "Denaturation reduces functional enzyme molecules — rate falls rather than rises",
              "Actual rate at 70 degrees C would be much lower than 16-fold / near zero",
            ],
            commonError: "Simply accepting or rejecting the prediction without explaining why Q10 fails above the optimum.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Confirm the maths: 40 degrees / 10 = 4 steps; Q10 to the power 4 = 16 — is this correct?",
              "Does Q10 apply all the way to 70 degrees C?",
              "What happens to the enzyme above the optimum?",
              "Evaluate means confirm what is right AND identify the key flaw.",
            ],
            strategy: "Evaluate: confirm what is correct (maths), then identify the key flaw (denaturation invalidates Q10 above optimum)",
            solutions: [
              {
                label: "Structured evaluation",
                steps: [
                  "Confirm: 30 to 70 degrees C = 4 steps; 2 to the power 4 = 16-fold — maths is correct.",
                  "Identify limit: Q10 applies only below the optimum temperature.",
                  "State problem: above optimum, denaturation occurs — bonds in active site break.",
                  "Consequence: functional enzyme molecules decrease means rate falls.",
                  "Conclusion: actual rate at 70 degrees C is near zero — prediction is a major overestimate.",
                ],
              },
            ],
          },
          {
            id: "bio-enzymes-bq2-08",
            question: "State the difference between a reversible and an irreversible decrease in enzyme activity. Give one example of each. [4 marks]",
            marks: 4,
            modelAnswer: "A reversible decrease is a temporary loss of activity where the enzyme can return to full function when conditions are restored; the active site shape is preserved. Example: cooling an enzyme to 5 degrees C slows it greatly (insufficient kinetic energy for frequent substrate collisions), but warming back to the optimum fully restores activity.\n\nAn irreversible decrease is a permanent loss of activity that cannot be recovered even when conditions are restored; the active site shape is permanently changed. Example: heating an enzyme to 80 degrees C denatures it — bonds maintaining the active site shape break permanently, and returning to the optimum does not restore activity.",
            markScheme: [
              "Reversible: activity can be restored when conditions return to normal / active site shape preserved",
              "Example: low temperature / cooling — enzyme slows but is not denatured",
              "Irreversible: activity cannot be restored even when conditions are restored / active site permanently changed",
              "Example: high temperature causes denaturation",
            ],
            commonError: "Giving both examples as temperature effects without clearly contrasting reversible (low temp) with irreversible (high temp).",
            guideRef: "Common Misconceptions and Exam Technique",
            difficulty: "core",
            hints: [
              "Reversible = temporary; irreversible = permanent.",
              "What causes reversible inactivation? Think kinetic energy.",
              "What causes irreversible denaturation? Think bond breaking in active site.",
              "Give one example of each type.",
            ],
          },
          {
            id: "bio-enzymes-bq2-09",
            question: "A biotechnology company wants to use an enzyme in a washing powder for a 60 degrees C wash cycle to remove protein stains. Suggest and explain what property the enzyme must have, and name the type of enzyme required. [4 marks]",
            marks: 4,
            modelAnswer: "The enzyme must have a high optimum temperature — at or above 60 degrees C — so it is active (not denatured) at the washing temperature. Most standard enzymes are denatured at 60 degrees C, so a thermostable enzyme is needed, perhaps sourced from a thermophilic organism such as a bacterium from a hot spring. The type of enzyme required is a protease, because proteases break down proteins by hydrolysis — protein stains (e.g. blood, egg) consist of protein. A thermostable protease would efficiently digest these stains at 60 degrees C.",
            markScheme: [
              "High optimum temperature / thermostable / not denatured at 60 degrees C",
              "Explanation: standard enzymes denature at 60 degrees C — active site shape changes / substrate cannot bind",
              "Type of enzyme: protease (digests proteins)",
              "Rationale: protein stains need to be hydrolysed / protease acts on protein substrate",
            ],
            commonError: "Naming amylase or lipase instead of protease. Not explaining why thermostability is required.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "At 60 degrees C, what happens to most standard enzymes?",
              "What kind of enzyme would survive 60 degrees C?",
              "Protein stains — which enzyme acts on protein?",
              "Consider enzymes from thermophilic organisms.",
            ],
            strategy: "Identify substrate (protein means protease) then match to required temperature property (thermostable)",
          },
          {
            id: "bio-enzymes-bq2-10",
            question: "A student investigates how substrate concentration affects enzyme activity (fixed enzyme, 37 degrees C, pH 7), testing 0.1%, 0.2%, 0.5%, 1.0%, and 2.0% substrate.\n\n(a) Predict how rate changes as substrate concentration increases from 0.1% to 2.0%. Explain. [3 marks]\n(b) Predict what happens to rate if substrate concentration is increased to 10%. Explain. [2 marks]",
            marks: 5,
            modelAnswer: "(a) As substrate concentration increases from 0.1% to 2.0%, the rate of reaction increases. At low substrate concentrations, some enzyme active sites are unoccupied because substrate molecules are scarce. As more substrate is added, more active sites become occupied per unit time, so more enzyme-substrate complexes form per minute and the rate increases. The rate of increase becomes smaller at higher concentrations as active sites become more consistently occupied.\n\n(b) At 10% substrate concentration, the rate would plateau (reach a maximum) and increase no further. All active sites are occupied continuously — the enzyme is saturated. Adding more substrate has no effect because there are no free active sites. Rate is now limited by enzyme concentration (number of active sites), not substrate availability.",
            markScheme: [
              "(a) Rate increases as substrate concentration increases",
              "(a) Low substrate: some active sites unoccupied / fewer E-S complexes per unit time",
              "(a) More substrate means more active sites occupied means higher rate",
              "(b) Rate plateaus / reaches maximum (enzyme saturation)",
              "(b) All active sites occupied — no free sites for additional substrate / rate limited by enzyme concentration",
            ],
            commonError: "(b) Saying rate continues to increase indefinitely — must recognise enzyme saturation as the limiting factor.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "challenge",
            hints: [
              "(a) At very low substrate, are all active sites being used?",
              "(a) As substrate increases, what happens to active site occupancy?",
              "(b) Can rate increase forever when enzyme amount is fixed?",
              "(b) Saturation — all active sites occupied continuously.",
            ],
          },
        ],
      },
      {
        id: "bio-enzymes-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Ten structured questions on pH effects, digestive enzymes, and experimental investigation.",
        questions: [
          {
            id: "bio-enzymes-bq3-01",
            question: "State the optimum pH for: (a) pepsin, (b) salivary amylase, (c) trypsin. [3 marks]",
            marks: 3,
            modelAnswer: "(a) Pepsin: optimum pH 2. (b) Salivary amylase: optimum pH 7. (c) Trypsin: optimum pH 8.",
            markScheme: [
              "(a) Pepsin: pH 2",
              "(b) Salivary amylase: pH 7",
              "(c) Trypsin: pH 8 (accept 7.5 to 9)",
            ],
            commonError: "Giving pH 7 for pepsin — pepsin works in the strongly acidic stomach. Confusing trypsin and pepsin locations.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bq3-02",
            question: "Explain, in terms of active site shape, why amylase cannot work efficiently at pH 2. [3 marks]",
            marks: 3,
            modelAnswer: "Amylase optimum pH is 7. At pH 2, the high concentration of H+ ions interacts with the amino acid side chains that form the active site, altering their charges. This disrupts the bonds (ionic and hydrogen bonds) that maintain the precise three-dimensional shape of the active site. The active site changes shape so it is no longer complementary to the starch substrate. Fewer or no enzyme-substrate complexes form, so the rate decreases significantly. At extreme pH 2, the enzyme may be fully denatured.",
            markScheme: [
              "Amylase optimum pH is 7 / pH 2 is far from optimum",
              "H+ ions alter charges on amino acid side chains / disrupt bonds in active site",
              "Active site changes shape / no longer complementary to starch / reduced rate / denaturation at pH 2",
            ],
            commonError: "Saying 'the acid destroys the enzyme' without explaining the active site shape change mechanism.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What is amylase optimum pH?",
              "What do H+ ions do to charged amino acid side chains?",
              "Link altered side chains to changed active site shape to reduced substrate binding.",
            ],
          },
          {
            id: "bio-enzymes-bq3-03",
            question: "A student plots enzyme activity vs pH and gets a bell-shaped curve peaking at pH 7.\n\n(a) State the optimum pH. [1 mark]\n(b) Describe the rate at pH 11 compared to pH 7. [1 mark]\n(c) Explain why the rate is lower at pH 11. [3 marks]",
            marks: 5,
            modelAnswer: "(a) The optimum pH is 7.\n\n(b) The rate at pH 11 is much lower than at pH 7 — the enzyme has very low or zero activity.\n\n(c) At pH 11, the high concentration of OH- ions interacts with the charged amino acid side chains forming the active site, altering their charges. This disrupts the ionic and hydrogen bonds that maintain the active site three-dimensional shape. The active site changes shape and is no longer complementary to the substrate. Fewer or no enzyme-substrate complexes form, so the rate falls. The enzyme is denatured at this extreme pH.",
            markScheme: [
              "(a) pH 7",
              "(b) Rate at pH 11 is much lower than at pH 7 / very low or zero activity",
              "(c) OH- ions alter charges on amino acid side chains / disrupt bonds in active site",
              "(c) Active site shape changes / no longer complementary to substrate",
              "(c) Fewer or no enzyme-substrate complexes / rate falls / enzyme denatured",
            ],
            commonError: "(c) Not specifying that OH- ions interact with amino acid side chains. Using 'killed' instead of 'denatured'.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "(a) Find the peak on the graph.",
              "(b) Compare rates directly.",
              "(c) What ions are present at pH 11? What do they do to the active site?",
            ],
          },
          {
            id: "bio-enzymes-bq3-04",
            question: "Describe how you would investigate the effect of pH on amylase activity using iodine solution. State the independent variable, dependent variable, and two control variables. [6 marks]",
            marks: 6,
            modelAnswer: "Independent variable: pH (using buffer solutions at different pH values, e.g. pH 3, 5, 7, 9, 11). Dependent variable: time taken for iodine to stop turning blue-black (starch fully digested). Control variables: temperature (constant water bath, e.g. 37 degrees C); concentration of amylase; concentration of starch; volume of each solution.\n\nMethod: Prepare buffer solutions at each pH. Add equal volumes of starch solution and amylase solution to separate boiling tubes at each pH. Place in a water bath at 37 degrees C. Every 30 seconds, remove a drop from each tube and place on iodine on a spotting tile. Record the time when iodine no longer turns blue-black for each pH. Repeat three times and calculate mean times. Shorter time = higher enzyme activity.",
            markScheme: [
              "IV: pH (correctly identified)",
              "DV: time for iodine to stop turning blue-black / time for starch digestion",
              "CV 1: temperature (e.g. water bath at 37 degrees C)",
              "CV 2: any of — amylase concentration, starch concentration, volume",
              "Method: buffer solutions for each pH / equal volumes / spotting tile with iodine / timed intervals",
              "Repeats and mean calculated",
            ],
            commonError: "Giving temperature as the independent variable — this investigation is about pH. Forgetting to use buffer solutions.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "IV = what you change; DV = what you measure; CV = what you keep the same.",
              "How do you maintain a fixed pH? (buffer solutions)",
              "What does the iodine colour tell you about starch?",
              "How do you control temperature?",
            ],
            strategy: "IV, DV, CVs, method steps, then repeats for reliability",
          },
          {
            id: "bio-enzymes-bq3-05",
            question: "Explain why pepsin (optimum pH 2) is adapted to work in the stomach but not in the small intestine (pH approximately 7 to 8). [4 marks]",
            marks: 4,
            modelAnswer: "Pepsin active site has a three-dimensional shape maintained by bonds between amino acid side chains. This shape is complementary to protein substrates at pH 2. In the stomach (pH approximately 2), conditions match pepsin optimum — the active site is at its correct shape and enzyme-substrate complexes form efficiently with protein, digesting it rapidly.\n\nIn the small intestine (pH approximately 7 to 8), the pH is far from pepsin optimum. The charges on amino acid side chains forming the active site are altered, changing the active site shape. The protein substrate no longer fits as well — fewer enzyme-substrate complexes form and the rate falls significantly. At pH 7 to 8, pepsin is effectively inactive.",
            markScheme: [
              "Pepsin optimum pH 2 — matches stomach / active site complementary to protein at pH 2",
              "At pH 2: E-S complex forms / protein digested efficiently",
              "At pH 7 to 8: far from optimum — altered amino acid charges change active site shape",
              "Substrate no longer fits / fewer E-S complexes / pepsin inactive or denatured",
            ],
            commonError: "Stating pepsin works at pH 2 without explaining why pH 7-8 reduces activity in terms of active site shape.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Where is pepsin active? Where is it inactive?",
              "Explain in terms of active site shape and complementary substrate.",
              "What does pH 7-8 do to pepsin active site?",
            ],
          },
          {
            id: "bio-enzymes-bq3-06",
            question: "A student compares catalase activity in potato and liver at pH 7 and 37 degrees C, measuring O2 volume in 3 minutes. State two variables she must control to make a valid comparison, and explain why each is necessary. [4 marks]",
            marks: 4,
            modelAnswer: "1. Concentration of hydrogen peroxide (H2O2): must be the same in each tube. If H2O2 concentration differs, more or less substrate is available regardless of enzyme source, confounding the comparison of catalase activity between tissues.\n\n2. Mass or surface area of potato and liver tissue: must be equal. If the potato piece is larger than the liver piece, more enzyme molecules are present, which would increase rate independently of enzyme source, making differences attributable to tissue amount rather than enzyme properties.",
            markScheme: [
              "CV 1: H2O2 concentration (substrate concentration) — reason: different concentrations change rate independently",
              "CV 2: mass / surface area of tissue — reason: more tissue = more enzyme, confounds comparison",
              "(Accept any two valid CVs with correct explanations)",
            ],
            commonError: "Listing control variables without explaining why each must be controlled.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "A control variable must be kept the same so it does not affect results.",
              "What else besides the source organism could change the volume of O2?",
              "Explain the consequence of not controlling each variable.",
            ],
          },
          {
            id: "bio-enzymes-bq3-07",
            question: "An amylase experiment records time for starch digestion at five temperatures. The student calculates rate as 1/time.\n\n| Temperature (degrees C) | Time (s) | Rate (1/s) |\n|---|---|---|\n| 10 | 200 | 0.005 |\n| 20 | 100 | 0.010 |\n| 30 | 50 | 0.020 |\n| 40 | 25 | 0.040 |\n| 50 | — | — |\n\n(a) Explain why rate is calculated as 1/time. [1 mark]\n(b) Predict the rate at 50 degrees C and explain your prediction. [3 marks]",
            marks: 4,
            modelAnswer: "(a) The amount of starch digested is the same each time (all starch is hydrolysed). Since quantity is fixed, time taken is inversely proportional to rate — a faster rate means less time. Rate = 1/time gives a value proportional to the actual rate.\n\n(b) The rate at 50 degrees C would be lower than at 40 degrees C (for example approximately 0.010 or less). 50 degrees C is above the optimum for amylase (approximately 40 degrees C). Above the optimum, denaturation begins — hydrogen bonds maintaining the active site shape break, the active site changes shape, fewer enzyme-substrate complexes form, starch digestion slows, and 1/time (rate) decreases.",
            markScheme: [
              "(a) Fixed quantity of starch digested each time — time is inversely proportional to rate / rate = 1/time is proportional to actual rate",
              "(b) Rate at 50 degrees C is lower than at 40 degrees C",
              "(b) 50 degrees C is above the optimum — enzyme begins to denature",
              "(b) Active site changes shape / fewer E-S complexes / longer time / lower rate",
            ],
            commonError: "(b) Predicting rate continues to rise at 50 degrees C — must recognise 40 degrees C as optimum and 50 as above it.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "(a) If all starch is digested each time, what varies between tubes?",
              "(b) Is 50 degrees C above or below the optimum? What does that predict?",
              "(b) Apply denaturation logic for above-optimum temperatures.",
            ],
            solutions: [
              {
                label: "Why rate = 1/time",
                steps: [
                  "In each tube, the same total amount of starch is digested.",
                  "Rate = quantity / time. Since quantity is fixed: rate is proportional to 1/time.",
                  "A shorter time means a higher rate, so 1/time is proportional to rate.",
                ],
              },
            ],
          },
          {
            id: "bio-enzymes-bq3-08",
            question: "A student reduces enzyme solution pH from 7 to 2 (causing denaturation), then adds excess alkali to return pH to 7. Would enzyme activity recover? Explain. [3 marks]",
            marks: 3,
            modelAnswer: "Enzyme activity would NOT recover. At pH 2, the extreme acidity alters the charges on the amino acid side chains forming the active site — disrupting the ionic and hydrogen bonds that maintain the active site three-dimensional shape. The active site changes shape permanently (denaturation). Returning to pH 7 by adding alkali does not re-form the bonds in their original arrangement. Denaturation by extreme pH is irreversible, just as denaturation by extreme heat is irreversible. The substrate can no longer bind to the denatured active site.",
            markScheme: [
              "Activity would NOT recover",
              "pH 2 causes irreversible denaturation — active site shape changed permanently",
              "Returning to pH 7 cannot restore original active site shape — denaturation is irreversible",
            ],
            commonError: "Saying activity would recover because pH returns to 7 — denaturation is irreversible regardless of pH correction.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "What did pH 2 do to the active site?",
              "Is pH-induced denaturation reversible?",
              "Compare to heating — if you cool a boiled enzyme, does activity return?",
            ],
          },
          {
            id: "bio-enzymes-bq3-09",
            question: "Bile is not an enzyme but helps fat digestion by emulsifying fat into small droplets. Explain why emulsification helps lipase work more efficiently. [3 marks]",
            marks: 3,
            modelAnswer: "Emulsification breaks large fat globules into many smaller droplets. This greatly increases the total surface area of fat exposed to the aqueous solution. Since lipase can only act on fat at the fat-water interface (the surface of fat droplets), a greater surface area means more lipase molecules can simultaneously contact and bind to fat, forming more enzyme-substrate complexes at any moment. This significantly increases the rate of fat digestion.",
            markScheme: [
              "Emulsification increases the surface area of fat",
              "Lipase acts at the fat surface — more surface area means more enzyme-substrate complexes simultaneously",
              "Rate of fat digestion increases",
            ],
            commonError: "Saying bile digests fat — bile physically breaks fat into droplets but does not contain digestive enzymes.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "challenge",
            hints: [
              "Where does lipase act — inside the fat droplet or at its surface?",
              "How does breaking large globules into small droplets change total surface area?",
              "More surface area means more lipase can work simultaneously means faster digestion.",
            ],
          },
          {
            id: "bio-enzymes-bq3-10",
            question: "A student places potato discs into H2O2 at concentrations 1%, 2%, 3%, 4% and measures O2 (cm3/min).\n\n(a) Identify the independent and dependent variables. [2 marks]\n(b) She repeats each concentration three times and takes a mean. Explain why. [2 marks]\n(c) The rate at 4% H2O2 is the same as at 3%. Suggest an explanation. [2 marks]",
            marks: 6,
            modelAnswer: "(a) Independent variable: concentration of H2O2 (substrate concentration). Dependent variable: volume of O2 produced per minute (rate of reaction).\n\n(b) Repeating three times and calculating a mean reduces the effect of random errors (e.g. variation in disc mass, timing inaccuracies). It also allows anomalous results to be identified and discarded. Using a mean improves the reliability of results.\n\n(c) At 3% and 4% H2O2, the enzyme is saturated — all active sites of the catalase molecules in the potato tissue are occupied continuously. Adding more substrate (increasing from 3% to 4%) cannot increase rate further because there are no free active sites. Rate is now limited by enzyme concentration (the number of active sites available), not by substrate concentration.",
            markScheme: [
              "(a) IV: H2O2 concentration / substrate concentration",
              "(a) DV: volume of O2 per minute / rate of O2 production",
              "(b) Reduces random errors / identifies anomalous results",
              "(b) Improves reliability / results more reproducible",
              "(c) Enzyme saturation — all active sites occupied",
              "(c) No free active sites for additional substrate / rate limited by enzyme concentration",
            ],
            commonError: "(c) Saying the reaction is 'complete' — rate plateaus because active sites are saturated, not because substrate is exhausted.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "(a) IV = what you change; DV = what you measure.",
              "(b) What is a random error? How does averaging reduce its effect?",
              "(c) If rate stops increasing with more substrate, what is limiting rate?",
            ],
          },
        ],
      },
      {
        id: "bio-enzymes-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Ten structured questions on misconceptions, synoptic applications, multi-step calculations, and extended writing.",
        questions: [
          {
            id: "bio-enzymes-bq4-01",
            question: "A student writes: 'Enzymes are killed by boiling and killed by freezing.' Identify two errors and correct each using accurate scientific language. [4 marks]",
            marks: 4,
            modelAnswer: "Error 1: 'Killed by boiling' is wrong. Enzymes are proteins, not living organisms — they cannot be killed. Boiling denatures the enzyme: high temperature breaks the bonds maintaining the active site 3D shape permanently. The active site changes shape so the substrate can no longer bind. Correct term: 'denatured'.\n\nError 2: 'Killed by freezing' is wrong. Freezing does not denature enzymes. At very low temperatures, the enzyme is inactive because substrate molecules have insufficient kinetic energy to collide with the active site, but the active site shape is preserved. On warming, activity is fully restored. This is reversible inactivation, not denaturation.",
            markScheme: [
              "Error 1: 'killed' is wrong — enzymes are not alive / cannot be killed",
              "Error 1: correct term is 'denatured' — active site shape changes permanently at high temperature (bond breaking)",
              "Error 2: freezing does not kill or denature — active site shape preserved at low temperature",
              "Error 2: freezing causes reversible inactivation — activity is restored on warming",
            ],
            commonError: "Not explaining what 'denatured' means — must mention active site shape change due to bond breaking.",
            guideRef: "Common Misconceptions and Exam Technique",
            difficulty: "core",
            hints: [
              "Can a protein be killed?",
              "What is the correct term for permanent structural change in an enzyme?",
              "What does low temperature do — is it permanent or reversible?",
              "Contrast 'denatured' (irreversible) with reversible inactivation.",
            ],
          },
          {
            id: "bio-enzymes-bq4-02",
            question: "Trypsin is a protease from the pancreas; pepsin is a protease in the stomach.\n\n(a) State the optimum pH of each. [2 marks]\n(b) Explain why trypsin cannot function effectively in the stomach. [3 marks]\n(c) State one advantage of having two different proteases. [1 mark]",
            marks: 6,
            modelAnswer: "(a) Trypsin: optimum pH approximately 8. Pepsin: optimum pH approximately 2.\n\n(b) Trypsin optimum pH is approximately 8. In the stomach (pH approximately 2), extreme acidity disrupts bonds between amino acid side chains maintaining the 3D shape of trypsin active site. The active site changes shape and is no longer complementary to protein substrates. Trypsin is denatured at pH 2 — no enzyme-substrate complexes form, so protein is not digested.\n\n(c) Having two proteases allows protein digestion in both the acidic stomach (pepsin) and the alkaline small intestine (trypsin), maximising efficiency across the gut.",
            markScheme: [
              "(a) Trypsin: pH approximately 8 (accept 7.5 to 9); Pepsin: pH approximately 2",
              "(b) Trypsin optimum pH approximately 8 / not adapted to pH 2",
              "(b) pH 2 denatures trypsin / alters active site shape / changes amino acid charges",
              "(b) No enzyme-substrate complex / no protein digestion",
              "(c) Digestion in acidic and alkaline environments / greater efficiency / different peptide bonds cleaved",
            ],
            commonError: "(b) Saying 'trypsin doesn't work at pH 2' without explaining the denaturation mechanism.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "(a) Recall the specific optimum pH values.",
              "(b) What does pH 2 do to an enzyme with optimum pH 8?",
              "(b) Mechanism: H+ ions, altered amino acid charges, active site shape change.",
              "(c) Think about where in the gut each enzyme works.",
            ],
          },
          {
            id: "bio-enzymes-bq4-03",
            question: "Enzyme R has Q10 = 2.5 between 10 degrees C and 40 degrees C. Rate at 10 degrees C = 2 units/min.\n\n(a) Calculate the predicted rate at 40 degrees C. Show all working. [3 marks]\n(b) The actual measured rate at 40 degrees C is 30 units/min. Suggest why this differs from your calculated value. [2 marks]",
            marks: 5,
            modelAnswer: "(a) From 10 to 40 degrees C = 30 degrees C = three 10 degree steps.\n10 to 20 degrees C: 2 x 2.5 = 5 units/min\n20 to 30 degrees C: 5 x 2.5 = 12.5 units/min\n30 to 40 degrees C: 12.5 x 2.5 = 31.25 units/min\nPredicted rate at 40 degrees C = 31.25 units/min.\n\n(b) The actual rate (30 units/min) is slightly lower than predicted (31.25). The Q10 formula assumes kinetic energy is the sole factor. As temperature approaches 40 degrees C (near the optimum), onset of denaturation for some enzyme molecules begins to slightly reduce the number of fully functional enzymes. Alternatively, Q10 may not be exactly 2.5 across all temperature ranges — it often decreases as the optimum is approached.",
            markScheme: [
              "(a) 3 steps identified (30 / 10 = 3)",
              "(a) Sequential calculation: 2 to 5 to 12.5 to 31.25 units/min",
              "(a) Answer: 31.25 units/min (accept 31 or 31.3)",
              "(b) Onset of denaturation near optimum reduces functional enzyme molecules / Q10 not constant near optimum",
            ],
            commonError: "(a) Applying Q10 only once for the full 30 degree range: 2 x 2.5 = 5 — must apply three times.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "(a) Steps = (40 - 10) / 10 = 3.",
              "(a) Apply Q10 once per step sequentially.",
              "(b) Is Q10 perfectly constant? What begins to occur near the optimum?",
            ],
            strategy: "n = temperature rise / 10; new rate = old rate x Q10 to the power n",
            solutions: [
              {
                label: "Full Q10 calculation",
                steps: [
                  "Temperature rise = 40 - 10 = 30 degrees C.",
                  "Number of 10 degree steps = 30 / 10 = 3.",
                  "Step 1 (10 to 20 degrees C): 2 x 2.5 = 5 units/min.",
                  "Step 2 (20 to 30 degrees C): 5 x 2.5 = 12.5 units/min.",
                  "Step 3 (30 to 40 degrees C): 12.5 x 2.5 = 31.25 units/min.",
                ],
              },
            ],
          },
          {
            id: "bio-enzymes-bq4-04",
            question: "Scientists use thermostable DNA polymerase from Thermus aquaticus (living at approximately 70 degrees C) in PCR, which requires heating to 95 degrees C.\n\n(a) Explain why a standard human DNA polymerase cannot be used in PCR. [2 marks]\n(b) Explain why Taq polymerase from T. aquaticus can withstand 95 degrees C. [2 marks]",
            marks: 4,
            modelAnswer: "(a) Standard human DNA polymerase has an optimum of approximately 37 degrees C. At 95 degrees C, it would be denatured — bonds maintaining its active site 3D shape would break, permanently altering the active site. It could not catalyse DNA replication after this heating step, making it useless for repeated PCR cycles.\n\n(b) Taq polymerase has evolved in an organism living at approximately 70 degrees C. Its active site is stabilised by stronger interactions between amino acid side chains, making it resistant to denaturation at temperatures up to and above 95 degrees C. The active site retains its complementary shape even at 95 degrees C, allowing Taq polymerase to catalyse DNA replication throughout all PCR cycles.",
            markScheme: [
              "(a) Human DNA polymerase denatured at 95 degrees C / active site shape permanently changed",
              "(a) Cannot catalyse DNA replication after heating / useless for repeated PCR cycles",
              "(b) Taq polymerase from high-temperature organism / thermostable / active site stable at 95 degrees C",
              "(b) Stronger bonds between amino acids / not denatured at 95 degrees C / active site retains shape",
            ],
            commonError: "(b) Saying Taq polymerase 'likes heat' without explaining structural stability of the active site.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "(a) What does 95 degrees C do to a human enzyme?",
              "(a) If the enzyme denatures in cycle 1, what happens in subsequent cycles?",
              "(b) Where does T. aquaticus live and what does this tell us about its enzymes?",
              "(b) Adaptation logic: environment means enzyme structural stability.",
            ],
          },
          {
            id: "bio-enzymes-bq4-05",
            question: "Explain, using enzyme terminology, what happens to enzyme function when body temperature rises to 41 degrees C during a high fever. [4 marks]",
            marks: 4,
            modelAnswer: "At 41 degrees C, the temperature is slightly above the optimum for most human enzymes (approximately 37 degrees C). The elevated temperature begins to break some of the hydrogen bonds and ionic bonds that maintain the precise three-dimensional shape of enzyme active sites. As these bonds break, the active site changes shape and is no longer perfectly complementary to the substrate. Fewer enzyme-substrate complexes form per unit time, reducing the rate of vital metabolic reactions (e.g. respiration, protein synthesis). If the fever is prolonged or reaches higher temperatures, more extensive denaturation occurs, potentially causing life-threatening metabolic failure.",
            markScheme: [
              "41 degrees C is above the optimum for most human enzymes (approximately 37 degrees C)",
              "Bonds maintaining active site shape begin to break at elevated temperature",
              "Active site shape changes / less complementary to substrate",
              "Fewer enzyme-substrate complexes / reduced rate of metabolic reactions / potentially dangerous",
            ],
            commonError: "Saying enzymes are fully denatured at 41 degrees C — at 41 degrees C, denaturation is partial and may be reversible if temperature returns to normal quickly.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "What is the optimum temperature for most human enzymes?",
              "How far above optimum is 41 degrees C?",
              "What begins to happen to bonds in the active site at temperatures just above optimum?",
              "Consider the impact on vital metabolic reactions.",
            ],
          },
          {
            id: "bio-enzymes-bq4-06",
            question: "Compare and contrast the effects of high temperature and extreme pH on enzyme activity. [5 marks]",
            marks: 5,
            modelAnswer: "Similarities: Both high temperature (above optimum) and extreme pH cause denaturation — a permanent change in the 3D shape of the enzyme active site. In both cases, the active site is no longer complementary to the substrate, no enzyme-substrate complexes form, and activity falls to zero. Both changes are irreversible — restoring normal conditions does not recover activity.\n\nDifferences: High temperature causes denaturation by providing thermal energy that breaks hydrogen bonds and other weak bonds maintaining active site shape. Extreme pH causes denaturation through H+ or OH- ions altering the charges on amino acid side chains, disrupting ionic and hydrogen bonds. Additionally, below the optimum, temperature reduces activity reversibly (insufficient kinetic energy — no denaturation), whereas deviations from optimum pH always alter active site shape to some degree.",
            markScheme: [
              "Similarity: both cause denaturation / active site shape changes permanently",
              "Similarity: both result in no E-S complex / loss of activity",
              "Similarity: both changes are irreversible",
              "Difference: mechanism — heat breaks bonds via thermal energy; extreme pH alters amino acid charges disrupting bonds",
              "Difference: low temperature = reversible kinetic effect (no denaturation); pH deviation always alters active site shape",
            ],
            commonError: "Treating both as identical without identifying any mechanistic difference. Not addressing both similarities and differences.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Similarities: what do both ultimately cause to the active site?",
              "Differences: exactly what breaks the bonds in each case?",
              "Also contrast: low temperature (reversible, no denaturation) vs mild pH deviation (partial active site change).",
            ],
            strategy: "Structure: similarities (denaturation, irreversibility, no E-S complex) then differences (mechanism of bond disruption)",
          },
          {
            id: "bio-enzymes-bq4-07",
            question: "A newly discovered enzyme has highest activity at 55 degrees C and pH 9. Suggest where this enzyme might originate (organism type and/or body location) and explain your reasoning. [3 marks]",
            marks: 3,
            modelAnswer: "An optimum temperature of 55 degrees C suggests the enzyme comes from a thermophilic organism living in a warm environment such as a hot spring, since enzyme optima reflect the temperature of the organism natural environment. An optimum pH of 9 (alkaline) suggests the enzyme functions in an alkaline environment. It might originate from a bacterium living in an alkaline hot spring, or from an alkaline digestive compartment (similar to trypsin, which has an optimum of approximately pH 8 in the small intestine). Enzymes are adapted to the conditions of their natural environment.",
            markScheme: [
              "High optimum temperature (55 degrees C) means thermophilic organism / hot environment (hot spring)",
              "Alkaline optimum (pH 9) means alkaline environment / analogous to trypsin in small intestine",
              "Reasoning: enzymes are adapted to the conditions of the organism natural environment",
            ],
            commonError: "Saying the enzyme must be from a human — human enzymes have optima near 37 degrees C and mostly near pH 7.",
            guideRef: "Common Misconceptions and Exam Technique",
            difficulty: "challenge",
            hints: [
              "What does a high temperature optimum tell you about the organism environment?",
              "What does an alkaline pH optimum suggest about the reaction environment?",
              "Apply adaptation logic: organism environment maps to enzyme optimum conditions.",
            ],
          },
          {
            id: "bio-enzymes-bq4-08",
            question: "An enzyme reaction is measured at five substrate concentrations with fixed enzyme concentration at 37 degrees C, pH 7.\n\n| Substrate conc. (%) | Rate (units/min) |\n|---|---|\n| 0.5 | 5 |\n| 1.0 | 10 |\n| 2.0 | 18 |\n| 4.0 | 23 |\n| 8.0 | 25 |\n\n(a) Describe the relationship between substrate concentration and rate. [2 marks]\n(b) Explain why the rate at 8.0% is only slightly higher than at 4.0%. [3 marks]",
            marks: 5,
            modelAnswer: "(a) As substrate concentration increases from 0.5% to 8.0%, the rate of reaction increases but by a decreasing amount — the rate increases rapidly at low concentrations and then levels off (plateaus) at higher concentrations. The relationship is not linear.\n\n(b) At high substrate concentrations (4.0% and 8.0%), the enzyme is approaching saturation — nearly all active sites are occupied continuously by substrate molecules. Adding more substrate (from 4.0% to 8.0%) cannot significantly increase the rate because very few active sites are free at any moment. Rate is now limited by enzyme concentration (number of active sites), not substrate availability.",
            markScheme: [
              "(a) Rate increases as substrate concentration increases / rate increases then levels off / not linear",
              "(a) Rate of increase decreases at higher substrate concentrations",
              "(b) Enzyme approaching saturation — most or all active sites occupied",
              "(b) Few or no free active sites for additional substrate to bind",
              "(b) Rate limited by enzyme concentration / number of active sites",
            ],
            commonError: "(b) Saying 'the enzyme is being used up' — must use enzyme saturation concept.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "challenge",
            hints: [
              "(a) Describe the shape of the relationship — does rate increase at a constant rate?",
              "(b) At very high substrate, are all active sites occupied?",
              "(b) What limits rate when all active sites are already occupied?",
              "(b) Saturation is the key term.",
            ],
          },
          {
            id: "bio-enzymes-bq4-09",
            question: "Explain the importance of enzymes in two specific examples of human digestion, linking enzyme properties (optimum pH, substrate, product) to the body location. [6 marks]",
            marks: 6,
            modelAnswer: "Example 1 — Salivary amylase in the mouth: Amylase is secreted in saliva. It acts on starch (substrate), hydrolysing it into maltose (product). Its optimum pH is approximately 7, matching the neutral pH of saliva. At pH 7, the active site is complementary to starch, enzyme-substrate complexes form efficiently, and starch digestion begins. When food reaches the acidic stomach (pH approximately 2), amylase is denatured and digestion stops.\n\nExample 2 — Pepsin in the stomach: Pepsin is a protease secreted in gastric juice. It hydrolyses proteins (substrate) into peptides (products). Its optimum pH is approximately 2, matching the strongly acidic conditions produced by hydrochloric acid in the stomach. At pH 2, pepsin active site is in its correct complementary shape. In the small intestine (pH approximately 7 to 8), pepsin would be denatured and inactive.",
            markScheme: [
              "Example 1: enzyme named (amylase), location (mouth/saliva), substrate (starch), product (maltose)",
              "Example 1: optimum pH approximately 7 matches saliva / denatured at stomach pH 2",
              "Example 2: enzyme named (pepsin or trypsin), location, substrate, product",
              "Example 2: correct optimum pH matches location / denatured away from optimum location",
            ],
            commonError: "Giving the wrong substrate or product for an enzyme. Not linking optimum pH to the specific body location.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Choose two enzymes you know well.",
              "For each: name, location, substrate, product, optimum pH.",
              "Explain why the optimum pH matches the location.",
              "State what happens to the enzyme outside that environment.",
            ],
          },
          {
            id: "bio-enzymes-bq4-10",
            question: "Three tubes contain starch and amylase at pH 7. Tube A: 37 degrees C; Tube B: 0 degrees C; Tube C: boiled at 100 degrees C for 2 minutes then cooled to 37 degrees C. Iodine is added after 10 minutes. Predict the iodine colour in each tube and explain each result. [6 marks]",
            marks: 6,
            modelAnswer: "Tube A (37 degrees C): Iodine would be orange-brown (no blue-black). At 37 degrees C (the optimum for amylase), the enzyme is fully active — the active site is complementary to starch, enzyme-substrate complexes form rapidly, and all starch has been hydrolysed into maltose within 10 minutes. No starch remains, so iodine does not turn blue-black.\n\nTube B (0 degrees C): Iodine would turn blue-black. At 0 degrees C, substrate molecules have very little kinetic energy and rarely collide with the active site. Enzyme activity is extremely low — most starch remains undigested after 10 minutes. Starch is present, so iodine turns blue-black. The enzyme is NOT denatured at 0 degrees C — warming would restore activity.\n\nTube C (boiled then cooled): Iodine would turn blue-black. Boiling at 100 degrees C denatures the amylase — hydrogen bonds maintaining the active site shape break permanently. Cooling to 37 degrees C does not restore the original shape (denaturation is irreversible). The denatured amylase cannot form enzyme-substrate complexes, so starch is not digested and iodine turns blue-black.",
            markScheme: [
              "Tube A: orange-brown — amylase at optimum, starch fully digested in 10 min",
              "Tube B: blue-black — 0 degrees C gives very low kinetic energy; insufficient for frequent E-S complex formation; starch not digested in 10 min",
              "Tube B: enzyme NOT denatured at 0 degrees C / active site intact / activity would return on warming",
              "Tube C: blue-black — amylase denatured by boiling",
              "Tube C: active site shape changed permanently — substrate cannot bind / starch not digested",
              "Tube C: denaturation irreversible — cooling to 37 degrees C does not restore activity",
            ],
            commonError: "Saying tube B enzyme is denatured — must distinguish reversible cold-slowing (B) from irreversible denaturation (C).",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Tube A: is 37 degrees C the optimum? What does iodine show if all starch is digested?",
              "Tube B: 0 degrees C — denatured or just slow? Is the active site intact?",
              "Tube C: 100 degrees C — what happens to active site bonds? Is this reversible?",
              "Use 'denatured' only for tube C.",
            ],
            strategy: "Distinguish optimum (A) vs reversible cold-slowing (B) vs irreversible denaturation (C)",
          },
        ],
      },
    ],
  },
};
