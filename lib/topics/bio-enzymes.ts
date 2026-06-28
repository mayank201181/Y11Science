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
      heading: "Effect of Substrate Concentration",
      body:
        "Substrate concentration is the third factor you must be able to explain. Unlike temperature and pH, increasing substrate concentration **never denatures** the enzyme — it only changes how busy the active sites are, so this graph rises and then levels off, but it never falls.\n\n" +
        "When rate is plotted against substrate concentration, the curve has **two distinct phases**:\n\n" +
        "**Phase 1 — rising (low substrate concentration):**\n" +
        "- At low concentration there are many more free active sites than substrate molecules.\n" +
        "- Adding more substrate gives more frequent successful collisions with active sites, so more enzyme–substrate complexes form each second.\n" +
        "- The rate increases — at very low concentrations it is roughly **directly proportional** to substrate concentration.\n\n" +
        "**Phase 2 — plateau (high substrate concentration):**\n" +
        "- Eventually every active site is occupied and working as fast as it can — the enzyme is **saturated**.\n" +
        "- Adding still more substrate makes no difference, because there are no free active sites for the extra substrate to bind to.\n" +
        "- The rate levels off and stays constant. The reaction is now limited by the **enzyme concentration** (the number of active sites), not by substrate.\n\n" +
        "*Useful comparison:* if you instead increased the **enzyme** concentration with substrate in excess, the rate would keep rising, because more active sites mean more reactions can happen at the same time.",
      diagrams: [
        {
          caption: "Rate of reaction vs substrate concentration — rising phase then plateau (saturation)",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Graph of rate of reaction versus substrate concentration showing a steep initial rise that levels off into a horizontal plateau when all active sites are saturated">' +
            // Axes
            '<line x1="40" y1="170" x2="300" y2="170" stroke="#b7bce0" stroke-width="2"/>' +
            '<line x1="40" y1="170" x2="40" y2="20" stroke="#b7bce0" stroke-width="2"/>' +
            // Axis labels
            '<text x="170" y="192" text-anchor="middle" font-size="11" fill="#b7bce0">Substrate concentration</text>' +
            '<text x="12" y="100" text-anchor="middle" font-size="10" fill="#b7bce0" transform="rotate(-90 12 100)">Rate of reaction</text>' +
            // Curve: steep rise then plateau
            '<path d="M40,168 C72,118 102,55 150,42 C200,33 250,32 295,32" fill="none" stroke="#38bdf8" stroke-width="2.5"/>' +
            // Plateau guide line
            '<line x1="150" y1="40" x2="295" y2="32" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4,3"/>' +
            // Rising phase label
            '<text x="66" y="96" font-size="9" fill="#34d399">Rising:</text>' +
            '<text x="66" y="107" font-size="9" fill="#34d399">free active</text>' +
            '<text x="66" y="118" font-size="9" fill="#34d399">sites spare</text>' +
            // Plateau label
            '<text x="196" y="58" font-size="9" fill="#fb7185">Plateau: active</text>' +
            '<text x="196" y="69" font-size="9" fill="#fb7185">sites saturated</text>' +
            '<text x="196" y="80" font-size="9" fill="#fb7185">enzyme is limiting</text>' +
            '</svg>',
        },
      ],
      keyPoints: [
        "Increasing substrate concentration does NOT denature the enzyme — the curve never falls.",
        "Rising phase: more substrate → more enzyme–substrate complexes form → rate increases.",
        "At very low substrate concentration, rate is roughly proportional to substrate concentration.",
        "Plateau: all active sites are occupied (saturated), so extra substrate has no free sites to bind.",
        "On the plateau the rate is limited by enzyme concentration (number of active sites), not substrate.",
      ],
      discovery: {
        problem:
          "A student keeps the amount of catalase fixed and steadily adds more and more hydrogen peroxide, measuring the rate each time. " +
          "At first the rate climbs quickly, but past a certain concentration the rate stops increasing no matter how much more H₂O₂ she adds. Why does the rate stop rising?",
        idea:
          "Once every active site is occupied and working flat out, the enzyme is **saturated**. Extra substrate molecules cannot speed things up because there are no free active sites for them to bind to. " +
          "The only way to raise the rate now would be to add more enzyme — that is, more active sites.",
      },
      whyItWorks:
        "Picture active sites as supermarket tills and substrate molecules as shoppers. " +
        "When most tills are empty, sending in more shoppers means more get served per minute — the rate rises. " +
        "Once every till has a shopper plus a queue, sending in even more shoppers changes nothing: throughput is capped by the number of tills (enzyme molecules), not by how many shoppers are waiting.",
      strategies: ["Describe the two phases separately", "Name 'saturation' to explain the plateau", "Distinguish substrate-limited from enzyme-limited"],
      thinkDeeper:
        "Compare the three rate graphs side by side: temperature gives a bell curve (denaturation makes it fall), pH gives a bell curve (denaturation makes it fall), but substrate concentration gives a rise-then-plateau that never falls. " +
        "If your substrate-concentration curve falls at high values, something has gone wrong in your reasoning — substrate does not denature the enzyme.",
    },

    // ── Section 6 ──────────────────────────────────────────────────────────────
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

    // ── Section 7 ──────────────────────────────────────────────────────────────
    {
      heading: "Uses of Enzymes",
      body:
        "Because enzymes are fast, specific, and work in mild conditions (low temperature, no harsh chemicals), they are used widely in the home and in industry. " +
        "This topic is examined in detail on Cambridge 0610 and rewards a few concrete examples.\n\n" +
        "**Biological washing powders (detergents):**\n" +
        "- Contain **proteases** to digest protein stains (blood, egg, grass) and **lipases** to digest fat and grease stains.\n" +
        "- The enzymes break large, insoluble stain molecules into small, soluble products that wash away easily.\n" +
        "- They work effectively at **lower temperatures** than ordinary powders, saving energy and money and protecting delicate fabrics.\n" +
        "- *Limitations:* they are denatured by very hot washes, so the water must not be too hot; some people are allergic to the enzymes; they are less effective in very hard water.\n\n" +
        "**Food and industry:**\n" +
        "- **Pectinase** breaks down pectin in fruit cells to release more juice and produce clearer fruit juice — increasing the yield.\n" +
        "- **Lactase** breaks down lactose into glucose and galactose to make **lactose-free milk** for people who are lactose intolerant.\n" +
        "- **Carbohydrases / amylases** convert starch into sugar syrup (for example in the food and brewing industries).\n" +
        "- **Isomerase** converts glucose into the much sweeter **fructose**, so less is needed in slimming/diet foods.\n" +
        "- **Proteases** are used to pre-digest protein in baby foods, making them easier for infants to absorb.\n\n" +
        "The common theme: an enzyme does a useful chemical job quickly and specifically, at low temperature and without the energy cost or hazards of strong acids, alkalis, or high heat.",
      keyPoints: [
        "Biological washing powders contain proteases (protein stains) and lipases (fat/grease stains).",
        "They break large insoluble stain molecules into small soluble ones that wash out, and work at lower temperatures (saving energy).",
        "Drawbacks: denatured by very hot washes; can cause allergies in some people.",
        "Pectinase increases fruit-juice yield and clarity; lactase makes lactose-free milk.",
        "Isomerase converts glucose to sweeter fructose; proteases pre-digest protein in baby food.",
      ],
      discovery: {
        problem:
          "Two identical shirts each have a dried blood stain. One is washed with ordinary washing powder, the other with a biological washing powder — both at a cool 30 °C. " +
          "The biological powder removes the stain far better. What is in the biological powder that the ordinary powder lacks, and why does the low temperature matter?",
        idea:
          "The biological powder contains **protease** enzymes. Blood is rich in protein, and the protease digests it into small soluble fragments that rinse away. " +
          "A cool 30 °C wash works well because it is below the enzyme's denaturation temperature — a very hot wash would denature the protease and stop it working.",
      },
      whyItWorks:
        "Enzymes give industry catalysis without the cost: a strong alkali could also break down a protein stain, but it would damage fabric and skin and need careful handling. " +
        "A specific protease targets only the protein, works in mild conditions, and is needed only in tiny amounts because it is reused — so the process is cheaper, safer, and gentler.",
      strategies: ["Match the enzyme to the molecule it digests", "Always give an advantage AND a limitation", "Link 'low temperature' to energy saving and to avoiding denaturation"],
      thinkDeeper:
        "Many industrial enzymes are now **immobilised** — fixed onto an inert support such as alginate beads — so the product flows past them and the enzyme is not lost with the product. " +
        "This lets the same enzyme be reused for a long time and keeps the product enzyme-free, which is why lactase columns can continuously turn milk into lactose-free milk.",
    },

    // ── Section 8 ──────────────────────────────────────────────────────────────
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
      "Enzymes work by lowering the activation energy — the minimum energy needed for the reaction to occur.",
      "Substrate concentration: rate rises then plateaus when active sites are saturated; it never falls (no denaturation).",
      "Biological washing powders contain proteases (protein stains) and lipases (fat stains) and work at lower temperatures.",
      "Industrial uses: pectinase (fruit juice yield/clarity), lactase (lactose-free milk), isomerase (glucose → fructose).",
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
      { front: "What is activation energy, and how do enzymes affect it?", back: "Activation energy is the minimum energy needed for reactants to react. Enzymes lower the activation energy, so the reaction proceeds faster." },
      { front: "What happens to the rate as substrate concentration increases?", back: "The rate rises at first (more enzyme–substrate complexes form), then plateaus once all active sites are saturated. It never falls — substrate does not denature the enzyme." },
      { front: "Why does the rate plateau at high substrate concentration?", back: "Every active site is occupied (the enzyme is saturated), so adding more substrate has no free sites to bind to; the rate is now limited by enzyme concentration." },
      { front: "What enzymes are in biological washing powders and why?", back: "Proteases digest protein stains (blood, egg) and lipases digest fat/grease stains, breaking them into small soluble products. They also work at lower temperatures, saving energy." },
      { front: "Give one advantage and one disadvantage of biological washing powders.", back: "Advantage: remove protein/fat stains effectively at lower (energy-saving) temperatures. Disadvantage: denatured by very hot washes / can cause allergies in some people." },
      { front: "State two industrial uses of enzymes.", back: "Pectinase to increase fruit-juice yield and clarity; lactase to make lactose-free milk; isomerase to convert glucose into sweeter fructose (any two)." },
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
      { term: "Activation energy", definition: "The minimum energy that reactant molecules must have for a reaction to occur. Enzymes speed up reactions by lowering the activation energy." },
      { term: "Saturation", definition: "The state at high substrate concentration where every active site is occupied, so the rate cannot increase further by adding more substrate." },
      { term: "Biological washing powder", definition: "A detergent containing enzymes such as proteases and lipases that digest protein and fat stains into soluble products, working effectively at lower temperatures." },
      { term: "Pectinase", definition: "An enzyme that breaks down pectin in plant cell walls, used to increase the yield and clarity of fruit juice." },
      { term: "Lactase", definition: "An enzyme that breaks down lactose into glucose and galactose, used to produce lactose-free milk." },
      { term: "Immobilised enzyme", definition: "An enzyme fixed onto an inert support so it is not lost with the product and can be reused — for example lactase used to make lactose-free milk." },
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
        description: "Enzyme structure, catalysis, the lock-and-key model, and specificity.",
        questions: [
          {
            id: "bio-enzymes-bm1-01",
            question: "What type of biological molecule is an enzyme?",
            options: ["A carbohydrate", "A lipid", "A protein", "A nucleic acid"],
            answerIndex: 2,
            explanation: "Enzymes are protein molecules. Their three-dimensional shape, including the active site, is produced by the folding of a polypeptide chain.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm1-02",
            question: "Which statement about a catalyst is correct?",
            options: [
              "It is used up during the reaction.",
              "It increases the rate of a reaction without being used up.",
              "It provides the energy needed for a reaction.",
              "It changes the products formed in a reaction.",
            ],
            answerIndex: 1,
            explanation: "A catalyst speeds up a reaction and is regenerated unchanged, so it is not used up. It does not supply energy and does not alter what products are made.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm1-03",
            question: "An enzyme that digests proteins is most likely to be named:",
            options: ["lipase", "amylase", "protease", "catalase"],
            answerIndex: 2,
            explanation: "Most enzymes are named after their substrate with the suffix -ase. A protease acts on protein; lipase on lipids; amylase on starch; catalase on hydrogen peroxide.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm1-04",
            question: "The region of an enzyme where the substrate binds is called the:",
            options: ["binding zone", "active site", "reaction centre", "complementary base"],
            answerIndex: 1,
            explanation: "The active site is the specific region of the enzyme, with a 3D shape complementary to the substrate, where binding and catalysis occur.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm1-05",
            question: "In the lock-and-key model, the shape of the substrate compared with the active site is described as:",
            options: ["identical", "complementary", "larger", "random"],
            answerIndex: 1,
            explanation: "The substrate has a shape complementary to the active site — it fits like a key in a lock. The shapes are not identical; they are matching opposites that fit together.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "core",
            hints: [
              "Think how a key relates to a lock — same shape or matching shape?",
              "The substrate must fit into the active site.",
              "The keyword examiners want begins with 'compl-'.",
            ],
          },
          {
            id: "bio-enzymes-bm1-06",
            question: "Why does amylase break down starch but not protein?",
            options: [
              "Amylase only works at the pH of the mouth.",
              "Protein molecules are too large to enter any cell.",
              "Only starch has a shape complementary to amylase's active site.",
              "Amylase is used up when it meets protein.",
            ],
            answerIndex: 2,
            explanation: "Specificity arises from shape. Only starch is complementary to amylase's active site and can form an enzyme–substrate complex; protein has a different shape and cannot bind.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "core",
            hints: [
              "Specificity depends on the shape of the active site.",
              "Which substrate is complementary to amylase?",
              "If a molecule cannot bind the active site, no complex forms.",
            ],
          },
          {
            id: "bio-enzymes-bm1-07",
            question: "A single enzyme molecule can catalyse many thousands of reactions per second. This is possible because the enzyme:",
            options: [
              "is broken down and rebuilt after each reaction.",
              "is released unchanged and reused after each reaction.",
              "becomes part of the product each time.",
              "absorbs the substrate permanently.",
            ],
            answerIndex: 1,
            explanation: "After products are released, the enzyme returns to its original state and is free to bind a new substrate. Because it is not consumed, one molecule can be reused repeatedly.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "core",
            hints: [
              "Is the enzyme consumed in the reaction?",
              "What state is the enzyme in after products leave?",
              "Reuse is the hallmark of a catalyst.",
            ],
          },
          {
            id: "bio-enzymes-bm1-08",
            question: "Which sequence correctly shows the steps of enzyme action?",
            options: [
              "Products → enzyme–substrate complex → substrate + enzyme",
              "Substrate + enzyme → enzyme–substrate complex → products + enzyme",
              "Enzyme → products → enzyme–substrate complex",
              "Substrate + product → complex → enzyme",
            ],
            answerIndex: 1,
            explanation: "Substrate binds the active site to form an enzyme–substrate complex; the reaction occurs; products are released and the enzyme is freed unchanged.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "core",
            hints: [
              "Start with what binds first.",
              "A complex forms before products appear.",
              "The enzyme is released at the end, not consumed.",
            ],
          },
          {
            id: "bio-enzymes-bm1-09",
            question: "Enzymes lower the activation energy of a reaction. The activation energy is best described as:",
            options: [
              "the energy released when products form.",
              "the minimum energy needed for reactants to react.",
              "the energy stored in the enzyme.",
              "the total energy of the substrate molecules.",
            ],
            answerIndex: 1,
            explanation: "Activation energy is the energy barrier that must be overcome for a reaction to proceed. By binding and orienting the substrate, an enzyme lowers this barrier so the reaction occurs faster.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "challenge",
            hints: [
              "It is an energy barrier, not an energy release.",
              "It is the energy needed to start the reaction.",
              "Enzymes make this barrier smaller, speeding the reaction.",
            ],
            strategy: "Define the term first, then check which option matches the definition.",
          },
          {
            id: "bio-enzymes-bm1-10",
            question: "The induced-fit model differs from the simple lock-and-key model because it proposes that the active site:",
            options: [
              "never changes shape at all.",
              "moulds slightly around the substrate as it binds.",
              "is identical in shape to every substrate.",
              "is destroyed each time a substrate binds.",
            ],
            answerIndex: 1,
            explanation: "The induced-fit model refines lock-and-key: the active site is not perfectly rigid but flexes slightly to mould around the substrate. Both models agree on complementary shape and specificity.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "challenge",
            hints: [
              "Lock-and-key assumes a rigid active site.",
              "'Induced fit' implies some movement.",
              "The active site adjusts as the substrate arrives.",
            ],
            strategy: "Contrast the rigid (lock-and-key) view with the flexible (induced-fit) view.",
          },
        ],
      },
      {
        id: "bio-enzymes-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Temperature, kinetic energy, denaturation, and rate–temperature graphs.",
        questions: [
          {
            id: "bio-enzymes-bm2-01",
            question: "The optimum temperature of an enzyme is the temperature at which:",
            options: [
              "the enzyme is denatured.",
              "the rate of reaction is at its maximum.",
              "no reaction can occur.",
              "the substrate freezes.",
            ],
            answerIndex: 1,
            explanation: "The optimum temperature is where the enzyme works fastest — the rate of reaction is at its maximum on the bell-shaped curve.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm2-02",
            question: "Most enzymes in the human body have an optimum temperature of about:",
            options: ["0 °C", "20 °C", "37 °C", "100 °C"],
            answerIndex: 2,
            explanation: "Human body temperature is about 37 °C, so most human enzymes are adapted to work fastest at this temperature.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm2-03",
            question: "As temperature rises towards the optimum, the rate of an enzyme-controlled reaction increases mainly because:",
            options: [
              "the active site changes shape to fit better.",
              "molecules gain kinetic energy and collide more often.",
              "the enzyme is denatured more quickly.",
              "the substrate becomes more complementary.",
            ],
            answerIndex: 1,
            explanation: "Higher temperature gives molecules more kinetic energy, so substrate and enzyme collide more frequently and with more energy, increasing the rate up to the optimum.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What happens to molecular movement as temperature rises?",
              "More movement means more frequent collisions.",
              "The active-site shape is unchanged below the optimum.",
            ],
          },
          {
            id: "bio-enzymes-bm2-04",
            question: "Above its optimum temperature, an enzyme's rate falls because the high temperature:",
            options: [
              "freezes the substrate molecules.",
              "breaks bonds holding the active site's shape, denaturing the enzyme.",
              "kills the enzyme cells.",
              "removes the substrate from solution.",
            ],
            answerIndex: 1,
            explanation: "Excess thermal energy breaks the hydrogen and ionic bonds maintaining the 3D shape. The active site changes shape (denaturation), the substrate no longer fits, and the rate falls.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What holds the active site in its precise shape?",
              "Heat can break those bonds.",
              "Remember: enzymes are not alive and cannot be 'killed'.",
            ],
          },
          {
            id: "bio-enzymes-bm2-05",
            question: "An enzyme solution is cooled to 5 °C and shows almost no activity. It is then warmed back to 35 °C. What is the most likely result?",
            options: [
              "Activity stays near zero because the enzyme was denatured.",
              "Activity returns, because low temperature only slowed the enzyme.",
              "The enzyme works faster than ever before.",
              "The enzyme is permanently destroyed.",
            ],
            answerIndex: 1,
            explanation: "Low temperature slows enzymes reversibly — the active site is intact. Warming restores kinetic energy and activity returns. Only high temperature or extreme pH causes irreversible denaturation.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Does low temperature break bonds in the active site?",
              "Is cold inactivation reversible or irreversible?",
              "Compare cooling with overheating.",
            ],
          },
          {
            id: "bio-enzymes-bm2-06",
            question: "Which graph shape best describes rate of reaction against temperature for a typical enzyme?",
            options: [
              "A straight line increasing throughout.",
              "A curve that rises to a peak, then falls sharply.",
              "A flat horizontal line.",
              "A curve that only decreases.",
            ],
            answerIndex: 1,
            explanation: "The rate–temperature graph is bell-shaped: rising to a peak at the optimum, then falling sharply as the enzyme denatures.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm2-07",
            question: "A denatured enzyme can no longer catalyse its reaction because:",
            options: [
              "it has run out of energy.",
              "its active site shape has changed so the substrate no longer fits.",
              "it has been used up by the reaction.",
              "the substrate has also been denatured.",
            ],
            answerIndex: 1,
            explanation: "Denaturation permanently changes the active-site shape, so it is no longer complementary to the substrate and no enzyme–substrate complex can form.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What feature of the enzyme is altered by denaturation?",
              "Can the substrate still bind a misshapen active site?",
              "No binding means no complex and no reaction.",
            ],
          },
          {
            id: "bio-enzymes-bm2-08",
            question: "The Q₁₀ for an enzyme below its optimum is 2. If the rate at 20 °C is 5 units, the predicted rate at 30 °C is:",
            options: ["7 units", "10 units", "15 units", "20 units"],
            answerIndex: 1,
            explanation: "Q₁₀ = 2 means the rate doubles for a 10 °C rise. From 20 °C to 30 °C: 5 × 2 = 10 units.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Q₁₀ = 2 means rate doubles per 10 °C.",
              "20 °C to 30 °C is one 10 °C step.",
              "Multiply the rate by 2 once.",
            ],
            strategy: "Apply Q₁₀ once per 10 °C interval.",
          },
          {
            id: "bio-enzymes-bm2-09",
            question: "Thermophilic bacteria living in hot springs have enzymes with optimum temperatures above 70 °C. This shows that:",
            options: [
              "all enzymes work best at 37 °C.",
              "the optimum temperature depends on the organism the enzyme comes from.",
              "these enzymes never denature.",
              "high temperature always speeds up every enzyme.",
            ],
            answerIndex: 1,
            explanation: "Different organisms have enzymes adapted to their environment. Thermophile enzymes are stable and most active at very high temperatures, showing the optimum is not always 37 °C.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Is 37 °C the optimum for every living thing?",
              "Where do these bacteria live?",
              "Enzymes are adapted to their organism's environment.",
            ],
            strategy: "Use the example to challenge the '37 °C for all' misconception.",
          },
          {
            id: "bio-enzymes-bm2-10",
            question: "At 25 °C an enzyme gives a rate of 8 units; its Q₁₀ is 2.0. Ignoring denaturation, the predicted rate at 45 °C is:",
            options: ["16 units", "24 units", "32 units", "64 units"],
            answerIndex: 2,
            explanation: "45 °C is two 10 °C steps above 25 °C. Rate doubles each step: 8 × 2 × 2 = 32 units.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "How many 10 °C steps from 25 °C to 45 °C?",
              "Each step multiplies the rate by Q₁₀.",
              "8 × 2 × 2 = ?",
            ],
            strategy: "Count the 10 °C intervals (here 2), then apply Q₁₀ once per interval: 8 × 2 × 2 = 32.",
          },
        ],
      },
      {
        id: "bio-enzymes-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Effect of pH, substrate concentration, and digestive enzyme optima.",
        questions: [
          {
            id: "bio-enzymes-bm3-01",
            question: "The optimum pH of salivary amylase is approximately:",
            options: ["pH 2", "pH 7", "pH 9", "pH 13"],
            answerIndex: 1,
            explanation: "Salivary amylase works best at pH 7, matching the roughly neutral conditions of the mouth.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm3-02",
            question: "Pepsin is a protease that works in the stomach. Its optimum pH is about:",
            options: ["pH 2", "pH 7", "pH 8", "pH 11"],
            answerIndex: 0,
            explanation: "Pepsin is adapted to the acidic stomach and has an optimum pH of about 2, matching gastric acid.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm3-03",
            question: "Trypsin, a protease in the small intestine, works best at about pH 8. Why is this appropriate?",
            options: [
              "The small intestine is strongly acidic.",
              "The small intestine contents are made slightly alkaline by bile and pancreatic juice.",
              "Trypsin only works in the mouth.",
              "Alkaline conditions denature all proteases.",
            ],
            answerIndex: 1,
            explanation: "The acidic mixture from the stomach is neutralised and made slightly alkaline by bile and alkaline pancreatic juice, giving conditions near pH 8 — the optimum for trypsin.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Match the enzyme's optimum to where it works.",
              "What neutralises stomach acid in the small intestine?",
              "Bile and pancreatic juice are alkaline.",
            ],
          },
          {
            id: "bio-enzymes-bm3-04",
            question: "Why does an enzyme become less active when the pH moves far from its optimum?",
            options: [
              "The substrate dissolves completely.",
              "H⁺ or OH⁻ ions alter charges on amino acid side chains, changing the active-site shape.",
              "The enzyme gains kinetic energy.",
              "The enzyme is used up faster.",
            ],
            answerIndex: 1,
            explanation: "Excess H⁺ or OH⁻ ions interact with charged side chains and disrupt the ionic and hydrogen bonds holding the active site. The shape changes, so the substrate fits less well.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What is present in acids and alkalis that affects charged groups?",
              "Active-site shape depends on bonds between side chains.",
              "Change those bonds and the shape changes.",
            ],
          },
          {
            id: "bio-enzymes-bm3-05",
            question: "A graph of rate against pH for an enzyme is bell-shaped with a peak at pH 8. The enzyme is most likely:",
            options: ["pepsin", "salivary amylase", "trypsin", "catalase"],
            answerIndex: 2,
            explanation: "A peak at pH 8 matches trypsin, the small-intestine protease. Pepsin peaks at pH 2; amylase and catalase peak near pH 7.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Read the peak pH from the description.",
              "Which listed enzyme has an optimum of pH 8?",
              "Match optimum pH to enzyme.",
            ],
          },
          {
            id: "bio-enzymes-bm3-06",
            question: "At low substrate concentration, adding more substrate increases the rate of an enzyme reaction. This is because:",
            options: [
              "more active sites are created on each enzyme.",
              "more substrate molecules collide with active sites, so more complexes form.",
              "the enzyme is denatured by the extra substrate.",
              "the optimum temperature rises.",
            ],
            answerIndex: 1,
            explanation: "When substrate is scarce, many active sites are empty. Adding substrate raises collision frequency, so more enzyme–substrate complexes form per second and the rate rises.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "At low concentration, are active sites busy or often empty?",
              "More substrate means more collisions with active sites.",
              "Active sites are not created — they are occupied more often.",
            ],
          },
          {
            id: "bio-enzymes-bm3-07",
            question: "At very high substrate concentration, the rate of an enzyme reaction levels off (plateaus). The best explanation is that:",
            options: [
              "the substrate has run out.",
              "all the active sites are occupied, so enzyme concentration now limits the rate.",
              "the enzyme has denatured.",
              "the temperature has fallen.",
            ],
            answerIndex: 1,
            explanation: "When substrate is in excess, every active site is working continuously (saturation). Adding more substrate cannot increase the rate; the number of enzyme molecules now limits it.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "What happens to the active sites when substrate is plentiful?",
              "If all sites are busy, can extra substrate be processed faster?",
              "The limiting factor switches to enzyme amount.",
            ],
            strategy: "Identify the limiting factor at each end of the curve.",
          },
          {
            id: "bio-enzymes-bm3-08",
            question: "Which pair correctly matches an enzyme to its optimum pH?",
            options: [
              "Pepsin — pH 8",
              "Trypsin — pH 2",
              "Salivary amylase — pH 7",
              "Catalase — pH 2",
            ],
            answerIndex: 2,
            explanation: "Salivary amylase has an optimum of pH 7. Pepsin is pH 2, trypsin pH 8, and catalase about pH 7 — so the other pairings are mismatched.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Recall each enzyme's optimum pH.",
              "Pepsin works in acid; trypsin in slight alkali.",
              "Find the only correctly matched pair.",
            ],
          },
          {
            id: "bio-enzymes-bm3-09",
            question: "An enzyme is exposed to pH 1 and then returned to pH 7, but its activity does not recover. This shows the enzyme was:",
            options: [
              "reversibly inhibited.",
              "denatured by the extreme pH.",
              "still at its optimum.",
              "frozen.",
            ],
            answerIndex: 1,
            explanation: "Failure to recover when returned to the optimum pH indicates permanent denaturation — the active-site shape has been irreversibly altered by the extreme pH.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Reversible effects disappear when conditions return to normal.",
              "Here activity does not come back.",
              "A permanent shape change is denaturation.",
            ],
            strategy: "Test for recovery to tell reversible inhibition from irreversible denaturation.",
          },
          {
            id: "bio-enzymes-bm3-10",
            question: "Two enzymes are tested over pH 1–13. Enzyme P peaks at pH 2 and enzyme Q peaks at pH 7. Which conclusion is valid?",
            options: [
              "Enzyme P would work well in the small intestine.",
              "Enzyme Q would be denatured in the mouth.",
              "Enzyme P is suited to acidic conditions such as the stomach.",
              "Both enzymes have the same optimum.",
            ],
            answerIndex: 2,
            explanation: "Enzyme P (optimum pH 2) is suited to acidic conditions like the stomach. Enzyme Q (optimum pH 7) suits the neutral mouth. They do not share an optimum.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Match each peak pH to a body location.",
              "pH 2 is strongly acidic.",
              "Which location is acidic — mouth or stomach?",
            ],
            strategy: "Link optimum pH to the environment where the enzyme naturally acts.",
          },
        ],
      },
      {
        id: "bio-enzymes-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Experimental investigation, graph and data interpretation, and enzyme uses.",
        questions: [
          {
            id: "bio-enzymes-bm4-01",
            question: "Iodine solution is used to test for starch. In the presence of starch it turns:",
            options: ["colourless", "blue-black", "bright red", "green"],
            answerIndex: 1,
            explanation: "Orange-brown iodine solution turns blue-black when starch is present. When starch is absent it stays orange-brown.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm4-02",
            question: "In a catalase experiment using hydrogen peroxide, enzyme activity is usually measured by recording the:",
            options: [
              "colour change of iodine.",
              "volume of oxygen gas produced per unit time.",
              "mass of water lost.",
              "pH of the solution.",
            ],
            answerIndex: 1,
            explanation: "Catalase breaks down H₂O₂ to water and oxygen. The volume of oxygen collected (e.g. in a gas syringe) per unit time gives the rate of reaction.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bm4-03",
            question: "A student investigates the effect of temperature on amylase. Which is the dependent variable?",
            options: [
              "The temperature of the water bath.",
              "The concentration of amylase.",
              "The time taken for starch to be fully digested.",
              "The volume of starch solution.",
            ],
            answerIndex: 2,
            explanation: "Temperature is the independent variable (deliberately changed). Amylase concentration and starch volume are controlled. The time for starch to disappear is measured — the dependent variable.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "Which variable is deliberately changed?",
              "Which variables are kept constant?",
              "The dependent variable is the one you measure as a result.",
            ],
          },
          {
            id: "bio-enzymes-bm4-04",
            question: "Why should an enzyme experiment be repeated and a mean calculated?",
            options: [
              "To change the independent variable more often.",
              "To reduce the effect of random errors and improve reliability.",
              "To make the reaction go faster.",
              "To denature the enzyme more evenly.",
            ],
            answerIndex: 1,
            explanation: "Repeating and averaging reduces the influence of random errors, giving more reliable, representative results.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "What kind of error does averaging reduce?",
              "Repeats let you spot anomalies.",
              "More consistent results are more reliable.",
            ],
          },
          {
            id: "bio-enzymes-bm4-05",
            question: "In an amylase experiment, starch is fully digested after 50 s at 30 °C and after 25 s at 40 °C. Comparing the rates (rate ∝ 1/time), the rate at 40 °C is:",
            options: [
              "half the rate at 30 °C.",
              "the same as at 30 °C.",
              "twice the rate at 30 °C.",
              "four times the rate at 30 °C.",
            ],
            answerIndex: 2,
            explanation: "Rate is proportional to 1/time. 1/25 ÷ 1/50 = 50/25 = 2, so the rate at 40 °C is twice that at 30 °C (the reaction took half the time).",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "Rate is inversely proportional to time taken.",
              "Half the time means what for the rate?",
              "Compare 1/25 with 1/50.",
            ],
            strategy: "Use rate ∝ 1/time: ratio = (1/25) ÷ (1/50) = 50 ÷ 25 = 2, so twice the rate.",
          },
          {
            id: "bio-enzymes-bm4-06",
            question: "Which is the best reason for using a water bath rather than heating a tube directly with a flame?",
            options: [
              "It makes the reaction louder.",
              "It gives a steadier, more accurate and even temperature.",
              "It removes the need for a control.",
              "It changes the pH automatically.",
            ],
            answerIndex: 1,
            explanation: "A water bath holds the contents at a steady, even, accurately known temperature, avoiding the overheating and uneven heating caused by a direct flame.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "What problem does a direct flame cause?",
              "Even, controlled temperature matters for enzymes.",
              "Which method controls temperature more precisely?",
            ],
          },
          {
            id: "bio-enzymes-bm4-07",
            question: "In a catalase experiment, 36 cm³ of oxygen is collected in 30 s. The mean rate of oxygen production is:",
            options: ["0.6 cm³/s", "1.2 cm³/s", "6 cm³/s", "1080 cm³/s"],
            answerIndex: 1,
            explanation: "Rate = volume ÷ time = 36 cm³ ÷ 30 s = 1.2 cm³/s.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "Rate = volume of gas ÷ time.",
              "Divide 36 by 30.",
              "Include the units cm³/s.",
            ],
            strategy: "Apply rate = quantity of product ÷ time: 36 ÷ 30 = 1.2 cm³/s.",
          },
          {
            id: "bio-enzymes-bm4-08",
            question: "Biological washing powders contain enzymes such as proteases and lipases. These are useful because they:",
            options: [
              "bleach the colour out of all stains.",
              "break down protein and fat stains at lower temperatures, saving energy.",
              "only work in boiling water.",
              "make clothes shrink.",
            ],
            answerIndex: 1,
            explanation: "Protease and lipase digest protein and fat stains (e.g. blood, grass, grease) into soluble products, allowing effective washing at lower temperatures and saving energy.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "core",
            hints: [
              "Which stains are protein- or fat-based?",
              "Enzymes let washing work without very high temperatures.",
              "Think about the energy-saving benefit.",
            ],
          },
          {
            id: "bio-enzymes-bm4-09",
            question: "A graph shows rate of an enzyme reaction against substrate concentration. The curve rises steeply, then becomes a horizontal plateau. The plateau occurs because:",
            options: [
              "the substrate has denatured the enzyme.",
              "all active sites are saturated, so enzyme concentration limits the rate.",
              "the temperature has fallen to zero.",
              "the pH has become extreme.",
            ],
            answerIndex: 1,
            explanation: "As substrate increases, more active sites are occupied until all are saturated. Beyond that point, adding substrate cannot raise the rate — the amount of enzyme is now limiting.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "What is happening to the active sites as substrate rises?",
              "At the plateau, are any active sites free?",
              "Which factor now limits the rate?",
            ],
            strategy: "Read the graph in two phases: rising (substrate limited) and plateau (enzyme limited).",
          },
          {
            id: "bio-enzymes-bm4-10",
            question: "A student finds amylase digests starch in 40 s at pH 7 but takes 80 s at pH 5. Assuming rate ∝ 1/time, which statement is correct?",
            options: [
              "The rate at pH 5 is twice the rate at pH 7.",
              "The rate at pH 7 is twice the rate at pH 5.",
              "The rates are equal.",
              "pH has no effect on amylase.",
            ],
            answerIndex: 1,
            explanation: "Rate ∝ 1/time. At pH 7 the time is half that at pH 5, so the rate at pH 7 is twice the rate at pH 5 — consistent with pH 7 being nearer amylase's optimum.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Shorter time means a faster rate.",
              "Compare 1/40 with 1/80.",
              "pH 7 is closer to amylase's optimum.",
            ],
            strategy: "Convert times to rates with rate ∝ 1/time: (1/40) ÷ (1/80) = 80 ÷ 40 = 2.",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-enzymes-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Catalysis, specificity, and the lock-and-key model.",
        questions: [
          {
            id: "bio-enzymes-bq1-01",
            question: "Define the term 'enzyme'. [2 marks]",
            marks: 2,
            modelAnswer:
              "An enzyme is a protein molecule that acts as a biological catalyst, speeding up the rate of a chemical reaction without being used up (changed permanently) in the process.",
            markScheme: [
              "(A) protein molecule / made of protein",
              "biological catalyst / speeds up a reaction / increases rate of reaction",
              "without being used up / not changed permanently / can be reused",
            ],
            commonError: "Writing only 'speeds up reactions' without stating it is a protein, or omitting 'not used up'.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bq1-02",
            question: "State two metabolic processes in living organisms that depend on enzymes. [2 marks]",
            marks: 2,
            modelAnswer:
              "Digestion (e.g. amylase breaking down starch) and respiration (enzymes catalysing the release of energy from glucose). Photosynthesis and DNA replication are also acceptable.",
            markScheme: [
              "Digestion / breakdown of food molecules",
              "Respiration / release of energy from glucose",
              "(Accept) photosynthesis / DNA replication / protein synthesis",
            ],
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bq1-03",
            question: "Explain what is meant by 'enzyme specificity' and why it occurs. [3 marks]",
            marks: 3,
            modelAnswer:
              "Enzyme specificity means that each enzyme catalyses only one reaction, or a very narrow range of reactions. This occurs because the active site has a particular three-dimensional shape that is complementary to only one substrate. Only that substrate can bind to the active site to form an enzyme–substrate complex, so only that reaction is catalysed.",
            markScheme: [
              "Each enzyme catalyses only one reaction / a narrow range of reactions",
              "Because the active site has a specific 3D shape",
              "Shape is complementary to one (type of) substrate only",
              "Only the correct substrate binds / forms an enzyme–substrate complex",
            ],
            commonError: "Saying the enzyme 'recognises' or 'chooses' its substrate — marks are for shape/complementary explanations only.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "core",
            hints: [
              "Define specificity first.",
              "Link it to the shape of the active site.",
              "Use the word 'complementary'.",
              "Only the matching substrate can form a complex.",
            ],
            strategy: "Definition → cause (active-site shape) → consequence (only one substrate binds).",
          },
          {
            id: "bio-enzymes-bq1-04",
            question: "Describe the lock-and-key model of enzyme action, including the formation of products. [4 marks]",
            marks: 4,
            modelAnswer:
              "The active site of the enzyme has a precise shape that is complementary to the substrate, like a lock and key. The substrate binds to the active site to form an enzyme–substrate complex. The reaction then takes place and the substrate is converted into products. The products leave the active site, and the enzyme is released unchanged so it can be used again.",
            markScheme: [
              "Active site is complementary in shape to the substrate / substrate fits like a key in a lock",
              "Substrate binds to active site forming an enzyme–substrate complex",
              "Reaction occurs / substrate converted to product(s)",
              "Products are released / leave the active site",
              "Enzyme is unchanged / released / can be reused",
            ],
            commonError: "Stopping at complex formation without describing release of products and reuse of the enzyme.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "core",
            hints: [
              "Start with the complementary fit of the active site.",
              "Name the complex that forms.",
              "Say what happens to the substrate.",
              "Finish with products leaving and the enzyme being reused.",
            ],
            strategy: "Tell the story in order: bind → complex → react → release → reuse.",
          },
          {
            id: "bio-enzymes-bq1-05",
            question: "A small amount of catalase can break down a very large volume of hydrogen peroxide. Explain why so little enzyme is needed. [3 marks]",
            marks: 3,
            modelAnswer:
              "Catalase is a catalyst, so it is not used up in the reaction. After it converts hydrogen peroxide into water and oxygen, it is released unchanged and is free to bind another hydrogen peroxide molecule. Each enzyme molecule can therefore be reused many times per second, so a small amount can process a very large amount of substrate.",
            markScheme: [
              "Enzyme/catalase is not used up / not consumed in the reaction",
              "It is released unchanged after each reaction / regenerated",
              "Each molecule can be reused / catalyses many reactions per second",
              "So a small amount processes a large amount of substrate",
            ],
            commonError: "Implying the enzyme is gradually consumed, or that more substrate destroys the enzyme.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "core",
            hints: [
              "Is the enzyme used up?",
              "What state is it in after products leave?",
              "How many times can one molecule be used?",
            ],
            strategy: "Link 'catalyst' → 'not used up' → 'reused repeatedly'.",
          },
          {
            id: "bio-enzymes-bq1-06",
            question: "Explain why a protease cannot break down starch, using ideas about the active site. [3 marks]",
            marks: 3,
            modelAnswer:
              "A protease has an active site with a shape complementary to protein, not starch. Starch has a different molecular shape, so it is not complementary to the protease's active site and cannot bind to it. Because no enzyme–substrate complex can form, the protease cannot catalyse the breakdown of starch.",
            markScheme: [
              "Protease active site is complementary to protein / not to starch",
              "Starch has a different shape / is not complementary to the active site",
              "Starch cannot bind / no enzyme–substrate complex forms",
              "So no reaction / starch is not broken down",
            ],
            commonError: "Stating only that 'protease is for protein' without explaining shape/complementary fit.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "core",
            hints: [
              "What shape is the protease active site complementary to?",
              "Does starch have that shape?",
              "If it cannot bind, what cannot form?",
            ],
            strategy: "Apply specificity: wrong shape → no binding → no complex → no reaction.",
          },
          {
            id: "bio-enzymes-bq1-07",
            question: "Suggest two features that make enzymes important to living cells compared with using high temperatures to speed up reactions. [2 marks]",
            marks: 2,
            modelAnswer:
              "Enzymes allow reactions to occur quickly at the relatively low temperatures found inside cells (around body temperature), avoiding the damage that high temperatures would cause. They are also specific, catalysing particular reactions so the cell can control its chemistry precisely.",
            markScheme: [
              "Allow fast reactions at low / body temperature (no need for damaging heat)",
              "Specific / control particular reactions",
              "(Accept) lower activation energy / reactions otherwise too slow at body temperature",
            ],
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bq1-08",
            question: "The induced-fit model is a refinement of the lock-and-key model. Describe one way the two models differ. [2 marks]",
            marks: 2,
            modelAnswer:
              "In the lock-and-key model the active site is treated as a rigid shape that is already an exact fit for the substrate. In the induced-fit model the active site is flexible and changes shape slightly to mould around the substrate as it binds. Both still rely on a complementary fit and explain specificity.",
            markScheme: [
              "Lock-and-key: active site is rigid / fixed shape",
              "Induced-fit: active site is flexible / changes shape slightly to mould around the substrate",
              "(Accept) both still require complementary shape / explain specificity",
            ],
            commonError: "Saying induced-fit means any substrate can fit — the fit is still specific, just slightly flexible.",
            guideRef: "The Lock-and-Key Model",
            difficulty: "challenge",
            hints: [
              "Think rigid versus flexible active site.",
              "Which model has the active site change shape?",
              "Note what both models still share.",
            ],
            strategy: "Contrast rigid (lock-and-key) with flexible (induced-fit), then note the shared idea.",
          },
          {
            id: "bio-enzymes-bq1-09",
            question: "Explain, in terms of activation energy, how an enzyme increases the rate of a reaction. [3 marks]",
            marks: 3,
            modelAnswer:
              "Every reaction needs a minimum amount of energy, the activation energy, before reactants can be converted to products. An enzyme lowers the activation energy of the reaction, for example by binding the substrate at the active site and holding it in the correct orientation or straining its bonds. Because the energy barrier is lower, a greater proportion of collisions are successful, so the reaction proceeds faster.",
            markScheme: [
              "Activation energy = minimum energy needed for the reaction to occur",
              "Enzyme lowers / reduces the activation energy",
              "By binding substrate at active site / orienting / straining bonds",
              "More successful collisions / reaction proceeds faster",
            ],
            commonError: "Saying the enzyme 'gives energy' to the reaction — it lowers the energy barrier, it does not supply energy.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "challenge",
            hints: [
              "Define activation energy.",
              "State what the enzyme does to that barrier.",
              "Give one mechanism (orientation/straining bonds).",
              "Link the lower barrier to a faster rate.",
            ],
            strategy: "Define → effect (lowers barrier) → mechanism → consequence (faster).",
          },
          {
            id: "bio-enzymes-bq1-10",
            question: "An enzyme has the suffix '-ase' and acts on lipids. Name the enzyme and the products of its action, and state the general rule for naming enzymes. [3 marks]",
            marks: 3,
            modelAnswer:
              "The enzyme is lipase. It breaks down lipids (fats) into fatty acids and glycerol. The general rule is that most enzymes are named after their substrate with the suffix -ase added, for example amylase acts on starch and protease acts on protein.",
            markScheme: [
              "Enzyme is lipase",
              "Products: fatty acids and glycerol",
              "Naming rule: named after the substrate + suffix -ase / e.g. amylase on starch, protease on protein",
            ],
            commonError: "Giving only one digestion product, or confusing lipase with a protease.",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "core",
            hints: [
              "What enzyme name comes from 'lipid'?",
              "Recall the two products of fat digestion.",
              "How are enzymes generally named?",
            ],
            strategy: "Name from substrate, then recall the standard digestion products.",
          },
        ],
      },
      {
        id: "bio-enzymes-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Temperature, denaturation, and rate–temperature data.",
        questions: [
          {
            id: "bio-enzymes-bq2-01",
            question: "State what is meant by the 'optimum temperature' of an enzyme. [1 mark]",
            marks: 1,
            modelAnswer: "The optimum temperature is the temperature at which the enzyme catalyses its reaction at the fastest (maximum) rate.",
            markScheme: ["Temperature at which rate of reaction is maximum / enzyme works fastest"],
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bq2-02",
            question: "Explain why the rate of an enzyme-controlled reaction increases as temperature rises towards the optimum. [3 marks]",
            marks: 3,
            modelAnswer:
              "As temperature rises, the enzyme and substrate molecules gain more kinetic energy and move faster. This means substrate molecules collide with the active site more frequently and with greater energy. More frequent successful collisions form more enzyme–substrate complexes per second, so the rate of reaction increases.",
            markScheme: [
              "Molecules gain (more) kinetic energy / move faster",
              "More frequent collisions between substrate and active site",
              "More enzyme–substrate complexes form (per unit time)",
              "Rate increases",
            ],
            commonError: "Saying the active site 'opens up' or 'fits better' with heat — it is collision frequency that increases, not the fit.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What happens to kinetic energy as temperature rises?",
              "How does that change collision frequency?",
              "More collisions with the active site mean more complexes.",
            ],
            strategy: "Kinetic energy → collisions → complexes → rate.",
          },
          {
            id: "bio-enzymes-bq2-03",
            question: "Explain what happens to an enzyme above its optimum temperature, and why its activity falls. Use the term 'denatured'. [4 marks]",
            marks: 4,
            modelAnswer:
              "Above the optimum, the high temperature provides enough energy to break the hydrogen bonds and other interactions that hold the enzyme's three-dimensional shape together. The active site therefore changes shape and is no longer complementary to the substrate. The enzyme is described as denatured. The substrate can no longer bind to form an enzyme–substrate complex, so the rate of reaction falls (eventually to zero). This change is permanent — cooling does not restore activity.",
            markScheme: [
              "High temperature breaks bonds (hydrogen / ionic) holding the 3D shape",
              "Active site changes shape / no longer complementary to substrate",
              "Enzyme is denatured",
              "Substrate cannot bind / no enzyme–substrate complex forms, so rate falls",
              "(Accept) change is permanent / irreversible",
            ],
            commonError: "Writing that the enzyme is 'killed' — enzymes are not alive; the correct term is 'denatured'.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What holds the active site in shape?",
              "What does heat do to those bonds?",
              "Name the process (denaturation).",
              "Link the changed active site to the falling rate.",
            ],
            strategy: "Bonds break → active site changes → denatured → no complex → rate falls.",
          },
          {
            id: "bio-enzymes-bq2-04",
            question: "An enzyme is heated to 70 °C, then cooled back to its optimum of 37 °C, but its activity does not return. Explain this observation. [2 marks]",
            marks: 2,
            modelAnswer:
              "At 70 °C the enzyme was denatured — the bonds maintaining the active-site shape were broken and the active site changed shape permanently. Cooling cannot re-form these bonds in their original arrangement, so the active site stays misshapen and activity does not return.",
            markScheme: [
              "At 70 °C the enzyme is denatured / active site shape permanently changed",
              "Cooling cannot restore the original bonds / shape (denaturation is irreversible)",
            ],
            commonError: "Suggesting cooling should reverse denaturation — high-temperature denaturation is irreversible.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What happened to the active site at 70 °C?",
              "Can cooling rebuild the broken bonds?",
              "Is this change reversible?",
            ],
            strategy: "Identify denaturation, then explain why cooling cannot reverse it.",
          },
          {
            id: "bio-enzymes-bq2-05",
            question: "A student stores an enzyme sample at 4 °C in a fridge. Explain why the enzyme remains active when later warmed to room temperature. [2 marks]",
            marks: 2,
            modelAnswer:
              "Low temperature only slows the enzyme down; it does not break the bonds holding the active site in shape, so the enzyme is not denatured. When warmed, the molecules regain kinetic energy and the intact active site catalyses the reaction again, so activity is restored.",
            markScheme: [
              "Low temperature slows the enzyme but does not denature it / active site shape preserved",
              "On warming, kinetic energy increases / activity returns because active site is intact",
            ],
            commonError: "Claiming the cold 'kills' or denatures the enzyme — low temperature inactivation is reversible.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Does cold break the active-site bonds?",
              "Is the active site still the right shape?",
              "Why does warming bring activity back?",
            ],
            strategy: "Contrast reversible cold slowing with irreversible heat denaturation.",
          },
          {
            id: "bio-enzymes-bq2-06",
            question: "The Q₁₀ for an enzyme below its optimum is 2.0. At 15 °C its rate is 3 units. Calculate the predicted rate at 35 °C, assuming no denaturation. Show your working. [3 marks]",
            marks: 3,
            modelAnswer:
              "From 15 °C to 35 °C is a rise of 20 °C, which is two 10 °C steps. With Q₁₀ = 2, the rate doubles at each step: 3 × 2 = 6 units at 25 °C, then 6 × 2 = 12 units at 35 °C. The predicted rate is 12 units.",
            markScheme: [
              "Temperature rise = 20 °C = two 10 °C steps",
              "Rate doubled each step (× 2 × 2 = × 4)",
              "3 × 4 = 12 units",
            ],
            commonError: "Multiplying by 2 only once (giving 6), or by 20 instead of applying Q₁₀ per 10 °C step.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "How many 10 °C steps from 15 °C to 35 °C?",
              "Each step multiplies the rate by Q₁₀.",
              "Apply × 2 once per step.",
            ],
            strategy: "Count 10 °C intervals, then apply Q₁₀ once per interval.",
            solutions: [
              {
                label: "Two-step Q₁₀ calculation",
                steps: [
                  "Temperature rise = 35 − 15 = 20 °C.",
                  "Number of 10 °C steps = 20 ÷ 10 = 2.",
                  "Apply Q₁₀ each step: 3 × 2 = 6 (at 25 °C); 6 × 2 = 12 (at 35 °C).",
                  "Predicted rate = 12 units.",
                ],
              },
            ],
          },
          {
            id: "bio-enzymes-bq2-07",
            question: "A reaction catalysed by an enzyme produces 24 cm³ of oxygen in 40 s. Calculate the mean rate of oxygen production in cm³/s. Show your working. [2 marks]",
            marks: 2,
            modelAnswer:
              "Rate = volume of oxygen ÷ time = 24 cm³ ÷ 40 s = 0.6 cm³/s.",
            markScheme: [
              "Rate = volume ÷ time / 24 ÷ 40",
              "0.6 cm³/s (with correct units)",
            ],
            commonError: "Forgetting the units, or dividing time by volume.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "Rate = product formed ÷ time.",
              "Divide 24 by 40.",
              "State the units cm³/s.",
            ],
            strategy: "Apply rate = quantity ÷ time and keep the units.",
            solutions: [
              {
                label: "Mean rate",
                steps: [
                  "Rate = volume of oxygen ÷ time.",
                  "Rate = 24 cm³ ÷ 40 s.",
                  "Rate = 0.6 cm³/s.",
                ],
              },
            ],
          },
          {
            id: "bio-enzymes-bq2-08",
            question: "Sketch and describe the shape of a graph of rate of reaction against temperature for a typical enzyme, labelling the three main regions. [3 marks]",
            marks: 3,
            modelAnswer:
              "The graph is bell-shaped. From low temperature it rises as the rate increases (because of greater kinetic energy and more collisions), reaching a peak at the optimum temperature where the rate is maximum. Beyond the optimum the curve falls steeply as the enzyme is denatured, returning towards zero. The three regions to label are: rising phase (increasing rate), peak (optimum), and falling phase (denaturation).",
            markScheme: [
              "Curve rises to a peak then falls / bell-shaped",
              "Peak labelled as optimum temperature (maximum rate)",
              "Rising region labelled (more kinetic energy/collisions) and falling region labelled (denaturation)",
            ],
            commonError: "Drawing a curve that keeps rising, or not labelling the optimum and denaturation regions.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Is the curve a straight line or a bell shape?",
              "Where is the highest point?",
              "Label what causes the rise and the fall.",
            ],
            strategy: "Describe in three phases: rise → peak (optimum) → fall (denaturation).",
          },
          {
            id: "bio-enzymes-bq2-09",
            question: "Explain why enzymes from thermophilic ('heat-loving') bacteria can work at 80 °C, whereas a human enzyme would be denatured at this temperature. [3 marks]",
            marks: 3,
            modelAnswer:
              "Thermophilic bacteria live in very hot environments, so their enzymes are adapted to be stable at high temperatures: the bonds holding their active-site shape are not broken at 80 °C, so the enzymes are not denatured and remain active. A human enzyme is adapted to about 37 °C; at 80 °C the bonds maintaining its active site break, the active site changes shape, and the enzyme is denatured. This shows the optimum temperature depends on the organism.",
            markScheme: [
              "Thermophile enzymes are adapted/stable at high temperature (bonds not broken at 80 °C)",
              "So thermophile enzyme is not denatured / active site keeps its shape",
              "Human enzyme adapted to ~37 °C / its bonds break at 80 °C so it is denatured",
            ],
            commonError: "Assuming all enzymes share the same optimum — optima differ between organisms.",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Where do thermophiles live?",
              "Why might their active-site bonds be more heat-stable?",
              "What happens to a 37 °C-adapted enzyme at 80 °C?",
            ],
            strategy: "Link environment → adaptation of bonds → different optimum temperatures.",
          },
          {
            id: "bio-enzymes-bq2-10",
            question: "Distinguish between an enzyme being 'inactive' at 5 °C and being 'denatured' at 65 °C. [2 marks]",
            marks: 2,
            modelAnswer:
              "At 5 °C the enzyme is inactive only because there is too little kinetic energy for frequent collisions; the active site is still its correct shape, so warming restores activity (reversible). At 65 °C the enzyme is denatured: the bonds holding the active-site shape have broken and the shape has changed permanently, so activity cannot be restored by cooling (irreversible).",
            markScheme: [
              "At 5 °C: active site intact / only slowed by low kinetic energy / reversible on warming",
              "At 65 °C: active site shape permanently changed / denatured / irreversible",
            ],
            commonError: "Treating both as the same; the key difference is reversible (cold) versus irreversible (heat).",
            guideRef: "Effect of Temperature on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Is the active site changed at 5 °C?",
              "Is the change at 65 °C reversible?",
              "Contrast slowed versus denatured.",
            ],
            strategy: "Compare on two axes: active-site shape and reversibility.",
          },
        ],
      },
      {
        id: "bio-enzymes-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Effect of pH, substrate concentration, and digestive enzyme optima.",
        questions: [
          {
            id: "bio-enzymes-bq3-01",
            question: "State the optimum pH of (a) salivary amylase and (b) pepsin. [2 marks]",
            marks: 2,
            modelAnswer: "(a) Salivary amylase has an optimum pH of about 7 (neutral). (b) Pepsin has an optimum pH of about 2 (acidic).",
            markScheme: [
              "Salivary amylase: pH 7 (accept 6.5–7.5)",
              "Pepsin: pH 2 (accept 1.5–2.5)",
            ],
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "warmup",
          },
          {
            id: "bio-enzymes-bq3-02",
            question: "Explain why a change away from the optimum pH reduces the activity of an enzyme. [3 marks]",
            marks: 3,
            modelAnswer:
              "The active-site shape is held by bonds between charged amino acid side chains. When the pH changes, extra H⁺ ions (acid) or OH⁻ ions (alkali) interact with these side chains and alter their charges, disrupting the ionic and hydrogen bonds. This changes the shape of the active site so it is less complementary to the substrate, fewer enzyme–substrate complexes form, and the rate of reaction falls.",
            markScheme: [
              "H⁺ / OH⁻ ions alter charges on amino acid side chains",
              "Ionic / hydrogen bonds disrupted, changing active-site shape",
              "Active site less complementary to substrate / substrate binds less well",
              "Fewer enzyme–substrate complexes form / rate falls",
            ],
            commonError: "Saying the enzyme 'does not like' the pH; answers must refer to active-site shape changing.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What ions are present in acids and alkalis?",
              "What do they do to charged side chains?",
              "How does that affect the active-site shape and binding?",
            ],
            strategy: "Ions → bonds disrupted → shape change → less binding → lower rate.",
          },
          {
            id: "bio-enzymes-bq3-03",
            question: "Pepsin works in the stomach and trypsin works in the small intestine. Explain how their different optimum pH values suit their locations. [3 marks]",
            marks: 3,
            modelAnswer:
              "Pepsin has an optimum pH of about 2, which matches the strongly acidic conditions produced by hydrochloric acid in the stomach, so it works fastest there. Trypsin has an optimum pH of about 8, which matches the slightly alkaline conditions of the small intestine, where stomach acid is neutralised by alkaline bile and pancreatic juice. Each enzyme is therefore adapted to be most active in the environment where it is found.",
            markScheme: [
              "Pepsin optimum pH ~2 matches acidic stomach (hydrochloric acid)",
              "Trypsin optimum pH ~8 matches slightly alkaline small intestine",
              "Small intestine made alkaline by bile / pancreatic juice (neutralising acid)",
              "Each enzyme adapted/most active in its environment",
            ],
            commonError: "Swapping the two enzymes, or stating the small intestine is acidic.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What makes the stomach acidic?",
              "What neutralises the acid in the small intestine?",
              "Match each optimum pH to its location.",
            ],
            strategy: "State each optimum, then link it to the pH of its location.",
          },
          {
            id: "bio-enzymes-bq3-04",
            question: "Describe the effect of increasing substrate concentration on the rate of an enzyme-controlled reaction, from low to very high concentration. Explain the shape of the curve. [4 marks]",
            marks: 4,
            modelAnswer:
              "At low substrate concentration the rate is low because few active sites are occupied. As substrate concentration increases, the rate increases because more substrate molecules collide with active sites and more enzyme–substrate complexes form. Eventually the rate levels off to a plateau: at high substrate concentration all the active sites are occupied (the enzyme is saturated), so adding more substrate cannot increase the rate. The number of enzyme molecules (active sites) then becomes the limiting factor.",
            markScheme: [
              "Rate increases as substrate concentration increases (at first)",
              "Because more collisions with active sites / more enzyme–substrate complexes form",
              "Rate levels off / reaches a plateau at high concentration",
              "Because all active sites are occupied / enzyme is saturated",
              "Enzyme concentration becomes the limiting factor",
            ],
            commonError: "Saying the rate keeps rising indefinitely, or attributing the plateau to denaturation.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "What limits the rate when substrate is scarce?",
              "Why does adding substrate speed things up at first?",
              "What happens once all active sites are full?",
            ],
            strategy: "Two phases: rising (substrate limited) → plateau (saturation, enzyme limited).",
          },
          {
            id: "bio-enzymes-bq3-05",
            question: "A graph shows the rate of reaction for three enzymes against pH. Enzyme A peaks at pH 2, enzyme B at pH 7 and enzyme C at pH 8. Identify which could be pepsin and which could be trypsin, giving reasons. [2 marks]",
            marks: 2,
            modelAnswer:
              "Enzyme A could be pepsin because it has an optimum pH of about 2, matching the acidic stomach. Enzyme C could be trypsin because it has an optimum pH of about 8, matching the slightly alkaline small intestine.",
            markScheme: [
              "Pepsin = enzyme A (optimum pH ~2 / acidic / stomach)",
              "Trypsin = enzyme C (optimum pH ~8 / slightly alkaline / small intestine)",
            ],
            commonError: "Choosing enzyme B (pH 7) for either, when B better matches amylase or catalase.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Recall pepsin and trypsin optima.",
              "Match each to the closest peak.",
              "Justify with the body location's pH.",
            ],
            strategy: "Match peak pH to known enzyme optima.",
          },
          {
            id: "bio-enzymes-bq3-06",
            question: "A student claims: 'All enzymes work best at pH 7.' Use named examples to explain why this claim is incorrect. [3 marks]",
            marks: 3,
            modelAnswer:
              "Different enzymes have different optimum pH values, so the claim is wrong. For example, pepsin works best at about pH 2 (strongly acidic), not pH 7. Trypsin works best at about pH 8 (slightly alkaline). Although salivary amylase does have an optimum near pH 7, this is not true of all enzymes; each enzyme is adapted to the pH of the environment in which it acts.",
            markScheme: [
              "Different enzymes have different optimum pH values",
              "Example: pepsin optimum ~pH 2 (acidic)",
              "Example: trypsin optimum ~pH 8 (alkaline) / another correct non-7 example",
              "Each enzyme adapted to its environment",
            ],
            commonError: "Giving no specific non-7 example, so the rebuttal is unsupported.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Is the optimum pH the same for every enzyme?",
              "Give an enzyme with an acidic optimum.",
              "Give an enzyme with an alkaline optimum.",
            ],
            strategy: "Rebut with two named counterexamples at non-neutral pH.",
          },
          {
            id: "bio-enzymes-bq3-07",
            question: "An enzyme is treated at pH 12 and then returned to its optimum pH, but no activity is detected. Explain what has happened. [2 marks]",
            marks: 2,
            modelAnswer:
              "The strongly alkaline pH 12 has denatured the enzyme: the OH⁻ ions disrupted the bonds holding the active site in shape, so the active site changed shape permanently. Returning to the optimum pH cannot restore the original shape, so the substrate still cannot bind and no reaction occurs.",
            markScheme: [
              "Extreme pH denatured the enzyme / active site shape permanently changed",
              "Returning to optimum pH cannot restore shape, so no binding / no reaction (irreversible)",
            ],
            commonError: "Expecting activity to return at the optimum pH; extreme-pH denaturation is irreversible.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "What does pH 12 do to the active site?",
              "Is denaturation reversible?",
              "Can the substrate bind a misshapen active site?",
            ],
            strategy: "Identify irreversible pH denaturation, then explain lack of recovery.",
          },
          {
            id: "bio-enzymes-bq3-08",
            question: "Explain why both extreme pH and very high temperature reduce enzyme activity in a similar way. [2 marks]",
            marks: 2,
            modelAnswer:
              "Both extreme pH and very high temperature break the bonds (such as hydrogen and ionic bonds) that hold the active site in its precise three-dimensional shape. In both cases the active site changes shape so it is no longer complementary to the substrate, the substrate cannot bind, and the enzyme is denatured, so the rate falls.",
            markScheme: [
              "Both break the bonds maintaining active-site shape / both change active-site shape",
              "Substrate no longer fits / enzyme denatured / rate falls in both cases",
            ],
            commonError: "Describing only one factor; the question asks for the shared mechanism.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "What do both factors do to the active-site bonds?",
              "What is the common outcome for the active site?",
              "Name the shared process.",
            ],
            strategy: "Find the common mechanism: bonds broken → shape change → denaturation.",
          },
          {
            id: "bio-enzymes-bq3-09",
            question: "At low substrate concentration the rate of an enzyme reaction is directly proportional to substrate concentration, but at high concentration it is not. Explain this difference. [3 marks]",
            marks: 3,
            modelAnswer:
              "At low substrate concentration, many active sites are empty, so adding more substrate increases the chance of collisions and more enzyme–substrate complexes form; the rate is therefore proportional to substrate concentration. At high concentration the active sites are nearly all occupied (the enzyme is approaching saturation), so adding more substrate has little or no further effect, because there are not enough free active sites available. The rate then depends on enzyme concentration rather than substrate concentration.",
            markScheme: [
              "At low concentration many active sites are free / substrate is limiting",
              "Adding substrate gives more collisions / more complexes, so rate ∝ concentration",
              "At high concentration active sites are saturated / nearly all occupied",
              "Further substrate has little effect / enzyme concentration becomes limiting",
            ],
            commonError: "Not identifying saturation of active sites as the reason proportionality breaks down.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "At low concentration, are active sites mostly free or busy?",
              "Why does proportionality hold there?",
              "What changes once the active sites are saturated?",
            ],
            strategy: "Explain the two regimes by whether active sites are free or saturated.",
          },
          {
            id: "bio-enzymes-bq3-10",
            question: "Catalase has an optimum pH of about 7. Predict and explain how its rate would compare at pH 7 and at pH 3. [2 marks]",
            marks: 2,
            modelAnswer:
              "The rate would be higher at pH 7 because that is catalase's optimum, where the active site has its correct shape, complementary to hydrogen peroxide. At pH 3 the more acidic conditions change the active-site shape so it is less complementary to the substrate, fewer complexes form, and the rate is lower (the enzyme may be denatured).",
            markScheme: [
              "Rate higher at pH 7 (optimum) where active site is correct/complementary shape",
              "Rate lower at pH 3 because active-site shape changed / less complementary / denatured",
            ],
            commonError: "Saying acid always speeds enzymes up — only the enzyme's optimum maximises rate.",
            guideRef: "Effect of pH on Enzyme Activity",
            difficulty: "core",
            hints: [
              "Which pH is catalase's optimum?",
              "What happens to the active site away from the optimum?",
              "Compare the rates accordingly.",
            ],
            strategy: "Compare each pH to the optimum and link to active-site shape.",
          },
        ],
      },
      {
        id: "bio-enzymes-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Experimental design, data and graph interpretation, and uses of enzymes.",
        questions: [
          {
            id: "bio-enzymes-bq4-01",
            question: "Describe how iodine solution can be used to follow the digestion of starch by amylase. [3 marks]",
            marks: 3,
            modelAnswer:
              "Mix amylase with starch and, at regular time intervals, remove a small drop and add it to iodine solution on a spotting tile. While starch is present the iodine turns blue-black. As amylase digests the starch, less starch remains. When all the starch has been digested, the iodine no longer turns blue-black and stays orange-brown; the time taken to reach this point measures the activity of the amylase.",
            markScheme: [
              "Sample drops of the mixture at regular time intervals onto iodine (spotting tile)",
              "Iodine turns blue-black while starch is present",
              "When starch is fully digested, iodine stays orange-brown / no longer blue-black",
              "Time taken for colour to stop changing = measure of activity",
            ],
            commonError: "Saying iodine reacts with amylase; iodine detects starch, not the enzyme.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "What does iodine detect?",
              "How do you sample the mixture over time?",
              "What colour shows starch has gone?",
            ],
            strategy: "Sample over time → colour test → endpoint when starch gone.",
          },
          {
            id: "bio-enzymes-bq4-02",
            question: "In an investigation of the effect of temperature on amylase, identify the independent variable, the dependent variable, and two variables that must be controlled. [4 marks]",
            marks: 4,
            modelAnswer:
              "The independent variable is the temperature of the water bath. The dependent variable is the time taken for the starch to be fully digested (or the rate of digestion). Two control variables are the concentration (and volume) of amylase and the concentration (and volume) of starch; the pH must also be kept constant using a buffer.",
            markScheme: [
              "Independent variable: temperature",
              "Dependent variable: time for starch to be digested / rate of reaction",
              "Control variable 1: concentration/volume of amylase",
              "Control variable 2: concentration/volume of starch / pH (buffer) / volume of iodine",
            ],
            commonError: "Listing pH as the independent variable, or confusing dependent and control variables.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "Which variable is deliberately changed?",
              "Which variable is measured?",
              "Which variables must stay the same for a fair test?",
            ],
            strategy: "Sort variables: changed (IV), measured (DV), kept constant (CVs).",
          },
          {
            id: "bio-enzymes-bq4-03",
            question: "A student measures the time for starch to be digested by amylase at several temperatures. Suggest two ways she could improve the reliability of her results. [2 marks]",
            marks: 2,
            modelAnswer:
              "She could repeat the experiment at each temperature several times (at least three) and calculate a mean, which reduces the effect of random errors. She could also use a water bath to keep each temperature constant and accurate, and use a buffer to keep the pH constant so that only temperature varies.",
            markScheme: [
              "Repeat at each temperature (≥3 times) and calculate a mean / identify anomalies",
              "Control other variables accurately, e.g. water bath for temperature / buffer for pH",
            ],
            commonError: "Suggesting only 'do it again' without saying to take a mean, or naming an irrelevant change.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "How can repeating help?",
              "What do you do with repeated readings?",
              "How can you keep conditions constant?",
            ],
            strategy: "Improve reliability via repeats/means and tighter control of variables.",
          },
          {
            id: "bio-enzymes-bq4-04",
            question: "In a catalase experiment, 30 cm³ of oxygen is collected in 60 s at 20 °C, and 30 cm³ in 20 s at 40 °C. Calculate the mean rate at each temperature and state how many times faster the reaction is at 40 °C. Show your working. [3 marks]",
            marks: 3,
            modelAnswer:
              "At 20 °C: rate = 30 cm³ ÷ 60 s = 0.5 cm³/s. At 40 °C: rate = 30 cm³ ÷ 20 s = 1.5 cm³/s. The reaction at 40 °C is 1.5 ÷ 0.5 = 3 times faster than at 20 °C.",
            markScheme: [
              "Rate at 20 °C = 30 ÷ 60 = 0.5 cm³/s",
              "Rate at 40 °C = 30 ÷ 20 = 1.5 cm³/s",
              "40 °C is 1.5 ÷ 0.5 = 3 times faster",
            ],
            commonError: "Forgetting units, or comparing times the wrong way round (20 °C appears faster).",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Rate = volume ÷ time for each temperature.",
              "Work out both rates first.",
              "Divide the larger rate by the smaller to compare.",
            ],
            strategy: "Compute each rate with units, then take the ratio of rates.",
            solutions: [
              {
                label: "Rates and ratio",
                steps: [
                  "Rate at 20 °C = 30 cm³ ÷ 60 s = 0.5 cm³/s.",
                  "Rate at 40 °C = 30 cm³ ÷ 20 s = 1.5 cm³/s.",
                  "Times faster = 1.5 ÷ 0.5 = 3.",
                  "The reaction at 40 °C is 3 times faster.",
                ],
              },
            ],
          },
          {
            id: "bio-enzymes-bq4-05",
            question: "Biological washing powders contain enzymes. Explain one advantage and one possible disadvantage of using them. [2 marks]",
            marks: 2,
            modelAnswer:
              "An advantage is that proteases and lipases break down protein and fat stains into soluble products, so clothes can be cleaned effectively at lower (cooler) wash temperatures, saving energy. A possible disadvantage is that the enzymes may cause allergic reactions or skin irritation in some people, or they are denatured and stop working if the wash is too hot.",
            markScheme: [
              "Advantage: digest protein/fat stains / effective cleaning at lower temperature / saves energy",
              "Disadvantage: can cause allergy/skin irritation OR denatured (ineffective) at high temperatures",
            ],
            commonError: "Giving two advantages, or saying enzymes work better the hotter the wash (they denature).",
            guideRef: "Enzymes as Biological Catalysts",
            difficulty: "core",
            hints: [
              "Why are enzymes useful in cleaning stains?",
              "What temperature benefit do they give?",
              "Think of a drawback for users or at high temperature.",
            ],
            strategy: "Pair a clear advantage with a relevant disadvantage.",
          },
          {
            id: "bio-enzymes-bq4-06",
            question: "Explain why a buffer solution is used, and a water bath is used, when investigating the effect of substrate concentration on an enzyme. [2 marks]",
            marks: 2,
            modelAnswer:
              "A buffer is used to keep the pH constant, because pH affects the active-site shape and would otherwise be an uncontrolled variable. A water bath is used to keep the temperature constant and even, because temperature affects the rate; both ensure that only substrate concentration (the independent variable) changes, making it a fair test.",
            markScheme: [
              "Buffer keeps pH constant (pH is a controlled variable / affects active site)",
              "Water bath keeps temperature constant/even (temperature affects rate); ensures fair test",
            ],
            commonError: "Confusing the roles — buffer controls pH, water bath controls temperature.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "Which variable does a buffer fix?",
              "Which variable does a water bath fix?",
              "Why must both be controlled here?",
            ],
            strategy: "Assign each apparatus to the variable it controls.",
          },
          {
            id: "bio-enzymes-bq4-07",
            question: "A student measures the volume of oxygen produced from hydrogen peroxide by catalase every 10 s. The volume rises quickly at first, then levels off. Explain the shape of this graph. [3 marks]",
            marks: 3,
            modelAnswer:
              "At the start there is plenty of hydrogen peroxide (substrate), so the reaction is fast and oxygen is produced rapidly, giving a steep rise. As the reaction proceeds, the substrate is used up, so its concentration falls and there are fewer collisions with active sites. The rate of oxygen production slows and the curve levels off when nearly all the hydrogen peroxide has been broken down and no more oxygen is produced.",
            markScheme: [
              "Steep rise at first because substrate concentration is high / fast reaction",
              "Substrate is used up / concentration falls as reaction proceeds",
              "Rate slows / fewer collisions, so curve levels off when substrate is (almost) gone",
            ],
            commonError: "Attributing the plateau to denaturation rather than the substrate running out.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "challenge",
            hints: [
              "Why is the reaction fastest at the start?",
              "What happens to the substrate over time?",
              "Why does oxygen production stop?",
            ],
            strategy: "Track substrate concentration over time to explain rise then plateau.",
          },
          {
            id: "bio-enzymes-bq4-08",
            question: "Describe a method to investigate the effect of temperature on catalase activity using potato discs and hydrogen peroxide. Include the measurement made and one control variable. [4 marks]",
            marks: 4,
            modelAnswer:
              "Add the same number of equal-sized potato discs to a fixed volume and concentration of hydrogen peroxide in a tube connected to a gas syringe. Place the tube in a water bath at a set temperature (e.g. 20 °C) and measure the volume of oxygen collected in a fixed time (e.g. 60 s), giving the rate. Repeat at several temperatures (e.g. 20, 30, 40, 50 °C). Control variables include the volume and concentration of hydrogen peroxide, the number and surface area of potato discs, and the pH; repeat each temperature and take a mean to improve reliability.",
            markScheme: [
              "Use potato discs (catalase source) with a fixed volume/concentration of hydrogen peroxide",
              "Use a water bath set to different temperatures",
              "Measure volume of oxygen produced in a set time (gas syringe) / rate",
              "Control variable named (e.g. volume/concentration of H₂O₂, number/size of discs, pH)",
              "(Accept) repeat and take a mean for reliability",
            ],
            commonError: "Not stating what is measured (oxygen volume) or omitting a control variable.",
            guideRef: "Investigating Enzyme Activity",
            difficulty: "core",
            hints: [
              "What provides the catalase and what is the substrate?",
              "How will you set and change the temperature?",
              "What will you measure to find the rate?",
              "Name one variable to keep constant.",
            ],
            strategy: "Set IV (temperature), define DV (oxygen volume/time), and list a CV.",
          },
          {
            id: "bio-enzymes-bq4-09",
            question: "A student writes: 'When I boiled the amylase first, the starch was not digested because the enzyme was killed.' Rewrite this explanation using correct scientific terms. [2 marks]",
            marks: 2,
            modelAnswer:
              "When the amylase was boiled, the high temperature broke the bonds holding the active site in shape, so the active site changed shape permanently and the enzyme was denatured. The starch was no longer complementary to the active site, so no enzyme–substrate complex could form and the starch was not digested. (Enzymes are not alive, so they cannot be 'killed'.)",
            markScheme: [
              "Enzyme was denatured (not 'killed') / active site shape changed permanently by heat",
              "Substrate (starch) no longer fits active site / no complex / not digested",
            ],
            commonError: "Keeping the word 'killed' — enzymes are proteins and cannot be killed.",
            guideRef: "Common Misconceptions and Exam Technique",
            difficulty: "core",
            hints: [
              "Which word must be replaced?",
              "What is the correct term for the shape change?",
              "Explain why the starch is not digested.",
            ],
            strategy: "Replace 'killed' with 'denatured' and add the shape/binding explanation.",
          },
          {
            id: "bio-enzymes-bq4-10",
            question: "A graph shows the rate of an enzyme reaction against temperature. Describe, in three phases and quoting suitable values, how you would gain full marks describing such a curve. [3 marks]",
            marks: 3,
            modelAnswer:
              "First describe the rising phase: from low temperature up to the optimum (for example up to about 40 °C) the rate increases, because molecules gain kinetic energy and collide more often. Second, identify the peak: the rate is maximum at the optimum temperature (quote the value read from the graph, e.g. 40 °C). Third, describe the falling phase: above the optimum the rate falls sharply (for example reaching zero near 60 °C) because the enzyme is denatured and the active site changes shape. Quoting values from the axes and naming the three phases gains full marks.",
            markScheme: [
              "Rising phase described with a value (rate increases up to ~optimum, e.g. 40 °C) + reason (kinetic energy/collisions)",
              "Peak identified as optimum (quote the optimum temperature)",
              "Falling phase described with a value (e.g. near zero by 60 °C) + reason (denaturation/active site changes shape)",
            ],
            commonError: "Describing the trend without quoting any values, or merging the three phases into one vague sentence.",
            guideRef: "Common Misconceptions and Exam Technique",
            difficulty: "challenge",
            hints: [
              "Split the curve into rising, peak and falling.",
              "Give a reason for each phase.",
              "Quote temperature values read off the graph.",
            ],
            strategy: "Three-phase description with a quoted value and a reason for each.",
          },
        ],
      },
    ],
  },
};
