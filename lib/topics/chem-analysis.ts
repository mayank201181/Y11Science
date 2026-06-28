import type { Topic } from "../types";

export const chemAnalysis: Topic = {
  id: "chem-analysis",
  title: "Experimental Techniques & Analysis",
  subject: "chemistry",
  icon: "🔎",
  blurb: "Separation techniques, purity tests, ion identification, gas tests and paper chromatography.",
  intro: "Every measurement in chemistry depends on working with pure substances and reliable tests. In this topic you will master the separation techniques used to purify mixtures, learn how purity is assessed by sharp melting and boiling points, and build a systematic toolkit of chemical tests to identify cations, anions and gases. These are exactly the skills Edexcel International GCSE 4CH1 (which places strong emphasis on separation and purification) and Cambridge IGCSE 0620 Extended examiners probe — in written papers and in the practical-skills paper (Edexcel Paper 2 / Cambridge Paper 6, Alternative to Practical).",

  // ─────────────────────────────────────────────────────────────────────────────
  // GUIDE
  // ─────────────────────────────────────────────────────────────────────────────
  guide: [
    // ── SECTION 1 ──────────────────────────────────────────────────────────────
    {
      heading: "Purity and Why It Matters",
      body: `A **pure substance** contains only one type of particle (element or compound). In everyday language "pure orange juice" means unadulterated; in chemistry it has a precise, testable meaning.

**Criterion 1 — Sharp melting point.** A pure solid melts at a single fixed temperature. An impure solid begins to melt below that temperature and finishes above it — it has a *depressed and broadened* melting range. The wider the range, the greater the impurity.

**Criterion 2 — Sharp boiling point.** A pure liquid boils at a single fixed temperature at a given pressure. Dissolved impurities *raise* the boiling point (boiling point elevation).

**Why does it matter?**
- In pharmaceuticals, an impure drug could be ineffective or toxic.
- In food science, impurities can indicate adulteration.
- In industrial chemistry, impurities reduce reaction yield and can damage catalysts.
- In analytical chemistry, you need a pure reference compound to calibrate measurements.

The melting point is the most useful purity test because it is easy to measure precisely and a range of even 1–2 °C indicates significant impurity.`,
      keyPoints: [
        "A pure substance has a sharp, fixed melting point and boiling point.",
        "Impurities depress and broaden the melting point range.",
        "Impurities elevate the boiling point of a liquid.",
        "Purity is critical in medicine, food, and industrial chemistry.",
        "A melting range wider than 1–2 °C indicates significant impurity.",
      ],
      discovery: {
        problem: "You have two samples of aspirin from different suppliers. Sample A melts at exactly 135 °C. Sample B starts melting at 128 °C and finishes at 134 °C. Which is purer, and what does the melting behaviour of Sample B tell you?",
        idea: "Sample A is purer — it has a sharp, single melting point at the literature value (135 °C for aspirin). Sample B's broad, depressed melting range reveals the presence of impurities that lower the temperature at which melting begins and widen the transition. The degree of depression and breadth is proportional to the amount of impurity.",
      },
      whyItWorks: "Impurities disrupt the regular crystal lattice of a solid, so less thermal energy is needed to break the lattice apart — hence the melting point is depressed. Different impurity molecules disrupt the lattice to different extents, so melting happens over a range rather than at one sharp temperature.",
      strategies: ["Compare to a literature value", "Measure both onset and completion temperature"],
    },

    // ── SECTION 2 ──────────────────────────────────────────────────────────────
    {
      heading: "Separation and Purification Techniques",
      body: `Choosing the right technique depends on the **physical properties** of the mixture components.

**Filtration** separates an *insoluble solid* from a *liquid* (or solution). The mixture is poured through filter paper in a funnel; the solid (residue) stays on the paper, the liquid (filtrate) passes through. Used after precipitation reactions to collect a precipitate.

**Crystallisation** obtains a *soluble solid* from its solution. The solution is heated to evaporate some solvent, then cooled slowly — the solute crystallises out as it becomes less soluble. Crystals are removed by filtration, washed with cold solvent, and dried. Gives large, pure crystals; slow cooling favours larger, purer crystals.

**Simple distillation** separates a *solvent from a dissolved solid* (e.g. water from salt solution) or separates two liquids with *very different boiling points* (>25 °C apart). The mixture is heated; the more volatile component boils, vapour passes through a condenser and is collected as the *distillate*.

**Fractional distillation** separates a mixture of liquids with *close boiling points* (e.g. ethanol/water mixture, or crude oil fractions). A fractionating column above the flask provides many theoretical plates; vapours repeatedly condense and re-evaporate, enriching the vapour in the more volatile component. Used industrially to refine crude oil and produce pure ethanol.

**Paper chromatography** separates a mixture of *soluble substances* based on how strongly each component is attracted to the stationary phase (paper/cellulose) versus the mobile phase (solvent). It is used to identify food colourings, inks, amino acids, and plant pigments.`,
      diagrams: [
        {
          caption: "Filtration apparatus — separating an insoluble precipitate from a solution",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="Filtration apparatus diagram">
  <!-- Funnel stand -->
  <rect x="148" y="10" width="24" height="6" rx="2" fill="#38bdf8"/>
  <!-- Funnel body -->
  <polygon points="90,16 230,16 170,110 150,110" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- Filter paper inside funnel -->
  <polygon points="100,20 220,20 168,106 152,106" fill="#fbbf24" fill-opacity="0.25" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Funnel stem -->
  <rect x="155" y="110" width="10" height="30" fill="#38bdf8"/>
  <!-- Beaker outline -->
  <path d="M120,145 L120,205 Q160,215 200,205 L200,145" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <line x1="120" y1="145" x2="200" y2="145" stroke="#38bdf8" stroke-width="2"/>
  <!-- Filtrate liquid in beaker -->
  <path d="M122,180 Q160,192 198,180 L198,205 Q160,215 122,205 Z" fill="#34d399" fill-opacity="0.3"/>
  <!-- Labels -->
  <text x="58" y="60" font-size="11" fill="#b7bce0" font-family="sans-serif">Filter</text>
  <text x="55" y="73" font-size="11" fill="#b7bce0" font-family="sans-serif">paper</text>
  <line x1="88" y1="67" x2="105" y2="60" stroke="#b7bce0" stroke-width="1"/>
  <text x="220" y="45" font-size="11" fill="#fbbf24" font-family="sans-serif">Residue</text>
  <line x1="218" y1="50" x2="200" y2="62" stroke="#fbbf24" stroke-width="1"/>
  <text x="207" y="195" font-size="11" fill="#34d399" font-family="sans-serif">Filtrate</text>
  <line x1="206" y1="190" x2="198" y2="183" stroke="#34d399" stroke-width="1"/>
  <text x="98" y="135" font-size="11" fill="#b7bce0" font-family="sans-serif">Funnel</text>
  <text x="130" y="162" font-size="11" fill="#b7bce0" font-family="sans-serif">Beaker</text>
</svg>`,
        },
        {
          caption: "Simple distillation apparatus — collecting a volatile solvent from solution",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 210" role="img" aria-label="Simple distillation apparatus diagram">
  <!-- Round-bottomed flask -->
  <circle cx="75" cy="150" r="38" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <rect x="68" y="112" width="14" height="22" rx="4" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- Flame below flask -->
  <path d="M55,190 Q65,175 75,185 Q85,175 95,190" fill="none" stroke="#fb7185" stroke-width="2" stroke-linecap="round"/>
  <path d="M60,193 Q75,178 90,193" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Side arm / delivery tube -->
  <path d="M82,115 Q120,70 180,75" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- Condenser outer jacket -->
  <rect x="178" y="58" width="22" height="80" rx="6" fill="none" stroke="#a78bfa" stroke-width="2.5"/>
  <!-- Condenser inner tube -->
  <rect x="185" y="62" width="8" height="72" rx="3" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- Water in/out arrows -->
  <text x="205" y="75" font-size="9" fill="#34d399" font-family="sans-serif">water</text>
  <text x="205" y="86" font-size="9" fill="#34d399" font-family="sans-serif">in</text>
  <text x="205" y="130" font-size="9" fill="#34d399" font-family="sans-serif">water</text>
  <text x="205" y="141" font-size="9" fill="#34d399" font-family="sans-serif">out</text>
  <!-- Delivery to conical flask -->
  <path d="M189,138 Q215,155 230,148" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <!-- Conical flask -->
  <path d="M225,148 L215,185 Q240,195 265,185 L255,148 Z" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <rect x="235" y="140" width="14" height="10" rx="3" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <!-- Labels -->
  <text x="18" y="150" font-size="11" fill="#b7bce0" font-family="sans-serif">Flask</text>
  <text x="18" y="162" font-size="11" fill="#b7bce0" font-family="sans-serif">(mixture)</text>
  <text x="108" y="65" font-size="11" fill="#b7bce0" font-family="sans-serif">Thermometer</text>
  <text x="172" y="50" font-size="11" fill="#a78bfa" font-family="sans-serif">Condenser</text>
  <text x="228" y="200" font-size="11" fill="#34d399" font-family="sans-serif">Distillate</text>
  <text x="42" y="200" font-size="11" fill="#fb7185" font-family="sans-serif">Heat</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Filtration: separates insoluble solid from liquid — residue stays on paper, filtrate passes through.",
        "Crystallisation: evaporate solvent, cool slowly — pure crystals form from solution.",
        "Simple distillation: separates solvent from solid OR liquids with boiling points >25 °C apart.",
        "Fractional distillation: separates liquids with close boiling points using a fractionating column.",
        "Paper chromatography: separates soluble mixtures based on differential attraction to stationary and mobile phases.",
      ],
      thinkDeeper: "Why does slow cooling in crystallisation give larger, purer crystals? When cooling is rapid, many tiny nucleation sites form simultaneously, trapping impurities. Slow cooling allows fewer, larger crystals to grow, and impurity molecules are excluded from the growing crystal lattice more effectively.",
      strategies: ["Match technique to physical property (solubility, boiling point, particle size)", "Filtration + crystallisation often used in sequence"],
    },

    // ── SECTION 3 ──────────────────────────────────────────────────────────────
    {
      heading: "Paper Chromatography and Rf Values",
      body: `**How it works.** A small spot of the mixture is placed on a pencil baseline near the bottom of chromatography paper. The paper is placed in a solvent (mobile phase) so the baseline is just above the solvent surface. The solvent rises by capillary action, carrying dissolved components upward at different rates. Components that are more attracted to the paper (stationary phase) travel slowly; those more attracted to the solvent travel quickly.

**Rf value (Retardation factor)** is a characteristic ratio used to identify substances:

Rf = distance moved by spot / distance moved by solvent front

Both distances are measured from the *original pencil baseline*. Rf values range from 0 (did not move) to 1 (moved with the solvent front). A pure substance gives a single spot. A mixture gives multiple spots.

**Key points for the exam:**
- Always use a pencil for the baseline (ink would dissolve and run).
- The solvent level must be BELOW the baseline to prevent the spots dissolving directly into the solvent.
- Run a known reference alongside the unknown to confirm identity — same Rf in the same solvent = same substance.

**Locating agents** are needed when the separated spots are colourless (e.g. amino acids). Common locating agents:
- **Ninhydrin** — sprayed on, heated; gives purple/brown spots for amino acids.
- **Ultraviolet (UV) lamp** — spots that absorb UV appear dark under UV light on a fluorescent paper.

**Worked Rf example.** Solvent front travels 9.0 cm. Spot A travels 3.6 cm, Spot B travels 7.2 cm.
- Rf(A) = 3.6 / 9.0 = **0.40**
- Rf(B) = 7.2 / 9.0 = **0.80**`,
      diagrams: [
        {
          caption: "Paper chromatogram — two-component ink mixture with Rf values calculated",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="Paper chromatogram showing Rf values for two spots">
  <!-- Paper background -->
  <rect x="90" y="10" width="140" height="195" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <!-- Solvent front line -->
  <line x1="90" y1="28" x2="230" y2="28" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="234" y="32" font-size="10" fill="#fbbf24" font-family="sans-serif">Solvent front</text>
  <!-- Spot B (high Rf) -->
  <ellipse cx="160" cy="65" rx="8" ry="5" fill="#fb7185" fill-opacity="0.85"/>
  <text x="234" y="69" font-size="10" fill="#fb7185" font-family="sans-serif">Spot B</text>
  <!-- Spot A (lower Rf) -->
  <ellipse cx="160" cy="118" rx="8" ry="5" fill="#34d399" fill-opacity="0.85"/>
  <text x="234" y="122" font-size="10" fill="#34d399" font-family="sans-serif">Spot A</text>
  <!-- Baseline -->
  <line x1="90" y1="185" x2="230" y2="185" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="234" y="189" font-size="10" fill="#a78bfa" font-family="sans-serif">Baseline</text>
  <!-- Solvent level (below baseline) -->
  <line x1="90" y1="198" x2="230" y2="198" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,4"/>
  <text x="234" y="202" font-size="10" fill="#38bdf8" font-family="sans-serif">Solvent</text>
  <!-- Distance arrows left side -->
  <!-- Arrow: baseline to spot A -->
  <line x1="83" y1="185" x2="83" y2="118" stroke="#34d399" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="83" y1="185" x2="83" y2="185" stroke="#34d399" stroke-width="1.5"/>
  <text x="40" y="157" font-size="9" fill="#34d399" font-family="sans-serif">d(A)=6.7</text>
  <!-- Arrow: baseline to spot B -->
  <line x1="73" y1="185" x2="73" y2="65" stroke="#fb7185" stroke-width="1.5"/>
  <text x="25" y="130" font-size="9" fill="#fb7185" font-family="sans-serif">d(B)=12.0</text>
  <!-- Arrow: baseline to solvent front -->
  <line x1="63" y1="185" x2="63" y2="28" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="10" y="108" font-size="9" fill="#fbbf24" font-family="sans-serif">d(S)=15.7</text>
  <!-- Rf annotations -->
  <text x="92" y="92" font-size="9" fill="#fb7185" font-family="sans-serif">Rf(B)=0.76</text>
  <text x="92" y="145" font-size="9" fill="#34d399" font-family="sans-serif">Rf(A)=0.43</text>
  <!-- Original spot on baseline -->
  <ellipse cx="160" cy="185" rx="5" ry="3" fill="#b7bce0"/>
  <text x="155" y="210" font-size="9" fill="#b7bce0" font-family="sans-serif">original spot</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Rf = distance moved by spot / distance moved by solvent front (measured from baseline).",
        "Rf is a constant for a given substance in a given solvent; used for identification.",
        "Pencil baseline; solvent level must be below the baseline.",
        "Locating agents (e.g. ninhydrin, UV) reveal colourless spots.",
        "A pure substance gives a single spot; a mixture gives multiple spots.",
      ],
      discovery: {
        problem: "A student runs a chromatogram of a dye mixture. The solvent front moves 12.0 cm. Spot X moves 4.8 cm and spot Y moves 9.6 cm. A reference dye (tartrazine, Rf = 0.40 in this solvent) is also run. Which spot, if any, is tartrazine?",
        idea: "Rf(X) = 4.8/12.0 = 0.40. Rf(Y) = 9.6/12.0 = 0.80. Spot X has the same Rf as tartrazine (0.40), so spot X is tartrazine (assuming the same solvent and conditions). Spot Y is a different, more mobile dye.",
      },
      whyItWorks: "Rf is determined by the equilibrium each molecule strikes between dissolving in the mobile phase (solvent, pulling it up) and adsorbing onto the stationary phase (paper, holding it back). A more polar molecule is more attracted to polar cellulose paper and so travels more slowly — giving a lower Rf in a non-polar solvent. The ratio cancels out the absolute distance, making Rf a reproducible, dimensionless constant for a given substance–solvent pair.",
      strategies: ["Always measure from pencil baseline", "Run a known reference alongside the unknown", "Rf = 0 means not dissolved; Rf = 1 means moves with solvent — check the solvent choice"],
    },

    // ── SECTION 4 ──────────────────────────────────────────────────────────────
    {
      heading: "Identifying Cations — NaOH, Ammonia and Flame Tests",
      body: `Cation identification uses two solution reagents (NaOH(aq) and NH3(aq)) and the flame test.

**Aqueous sodium hydroxide (NaOH) test — precipitates formed:**

| Ion | Observation with NaOH(aq) |
|-----|--------------------------|
| Cu²⁺ | Blue precipitate; insoluble in excess |
| Fe²⁺ | Green precipitate; insoluble in excess |
| Fe³⁺ | Red-brown precipitate; insoluble in excess |
| Al³⁺ | White precipitate; dissolves in excess NaOH |
| Ca²⁺ | White precipitate; insoluble in excess |
| Zn²⁺ | White precipitate; dissolves in excess NaOH |
| NH₄⁺ | Ammonia gas produced on warming; turns damp red litmus blue |

The precipitates are metal hydroxides, e.g. Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s).

**Aqueous ammonia (NH3) test** — produces similar hydroxide precipitates (ammonia is a weak base), but the key differences are:
- Cu²⁺: blue precipitate initially; dissolves in **excess** NH3 to give a deep **blue solution** (tetraamminecopper(II) complex).
- Zn²⁺: white precipitate; dissolves in excess NH3 (colourless solution).
- Al³⁺ and Ca²⁺: white precipitate; do NOT dissolve in excess NH3.
- Fe²⁺ and Fe³⁺: precipitates do NOT dissolve in excess NH3.

**Flame test colours:**
- Li⁺ — **red/crimson**
- Na⁺ — **yellow** (persistent, even traces)
- K⁺ — **lilac**
- Ca²⁺ — **orange-red**
- Cu²⁺ — **blue-green**

*Technique*: clean a platinum/nichrome wire in HCl, dip in sample, hold in blue Bunsen flame, observe colour.`,
      keyPoints: [
        "Cu²⁺ → blue precipitate with NaOH; dissolves in excess NH3 to give deep blue solution.",
        "Fe²⁺ → green precipitate; Fe³⁺ → red-brown precipitate; both insoluble in excess.",
        "Al³⁺ and Zn²⁺ → white precipitate that dissolves in excess NaOH (amphoteric); Ca²⁺ → white precipitate that does NOT dissolve.",
        "Flame test: Li⁺ red, Na⁺ yellow, K⁺ lilac, Ca²⁺ orange-red, Cu²⁺ blue-green.",
        "NH4⁺ produces ammonia gas on warming with NaOH — no precipitate.",
      ],
      thinkDeeper: "Why does Al(OH)3 dissolve in excess NaOH but Ca(OH)2 does not? Al(OH)3 is amphoteric — it acts as an acid toward the hydroxide ion, forming the aluminate ion [Al(OH)4]⁻. Ca(OH)2 is a simple ionic base and cannot accept further OH⁻ ions. Zn(OH)2 behaves like Al(OH)3 for the same reason — zinc is a transition-like metal with an amphoteric hydroxide.",
      strategies: ["Test with NaOH first to get the precipitate colour, then test with excess to check solubility", "Use the flame test only when a Group I/II or copper ion is suspected"],
    },

    // ── SECTION 5 ──────────────────────────────────────────────────────────────
    {
      heading: "Identifying Anions",
      body: `**Carbonate (CO₃²⁻):** Add dilute acid (e.g. HCl or H₂SO₄). Effervescence — colourless, odourless gas produced. Bubble the gas through limewater: limewater turns **milky** (cloudy). This confirms CO₂.
Ionic equation: CO₃²⁻(aq) + 2H⁺(aq) → H₂O(l) + CO₂(g)

**Sulfate (SO₄²⁻):** Acidify the solution with dilute HCl (to remove interfering ions such as carbonate or sulfite), then add barium nitrate solution or barium chloride solution. A **white precipitate** of barium sulfate (BaSO₄) forms immediately.
Ionic equation: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) (white precipitate)

**Halides (Cl⁻, Br⁻, I⁻):** Acidify with dilute nitric acid (to remove interfering anions like carbonate), then add silver nitrate solution:
- Cl⁻ → **white** precipitate of AgCl (soluble in dilute ammonia)
- Br⁻ → **cream** precipitate of AgBr (partially soluble in concentrated ammonia)
- I⁻ → **yellow** precipitate of AgI (insoluble in ammonia)

The solubility in ammonia is a useful extra test to distinguish the three.

**Nitrate (NO₃⁻):** Add aluminium powder and NaOH solution, then warm. Ammonia gas is produced (turns damp red litmus paper blue). This is because nitrate is reduced to ammonia by the aluminium in alkaline conditions.

*Memory tip:* "CASH IN" — Carbonates → Acid gives CO₂; Sulfates → acidified BaCl₂ gives white ppt; Halides → acidified AgNO₃; Iodide → yellow, Nitrate → Al/NaOH gives NH₃.`,
      keyPoints: [
        "Carbonate: acid → CO2 gas → limewater turns milky.",
        "Sulfate: acidify with HCl, then add Ba²⁺ solution → white precipitate of BaSO4.",
        "Halides: acidify with HNO3, then AgNO3 → white (Cl⁻), cream (Br⁻), yellow (I⁻).",
        "Nitrate: aluminium + NaOH(aq) → ammonia gas produced on warming.",
        "Always acidify before adding barium or silver — carbonate/sulfite cause false positives.",
      ],
      strategies: ["Acidify before testing sulfate or halide to remove false-positive interferents", "Use ammonia solubility to distinguish AgCl, AgBr, AgI"],
    },

    // ── SECTION 6 ──────────────────────────────────────────────────────────────
    {
      heading: "Identifying Gases",
      body: `Gas identification relies on simple, reliable tests that you can perform in a school lab. Learn the test AND the observation precisely — examiners want both.

| Gas | Test | Positive result |
|-----|------|-----------------|
| Hydrogen (H₂) | Hold a burning splint at the mouth of the tube | Squeaky pop |
| Oxygen (O₂) | Hold a glowing splint at the mouth of the tube | Glowing splint relights |
| Carbon dioxide (CO₂) | Bubble through limewater [Ca(OH)₂(aq)] | Limewater turns milky (white ppt of CaCO₃) |
| Ammonia (NH₃) | Hold damp red litmus paper near the mouth | Damp red litmus turns blue |
| Chlorine (Cl₂) | Hold damp litmus paper near the mouth | Damp (blue) litmus bleached/turns white (may flash red first) |
| Sulfur dioxide (SO₂) | Hold damp acidified potassium manganate(VII) paper near the mouth | Purple manganate(VII) decolourised (turns colourless) |

**Note on the gas set.** Edexcel 4CH1 examines the five core gases above the SO₂ line (H₂, O₂, CO₂, NH₃, Cl₂). **Sulfur dioxide (SO₂)** is the extra gas you need for Cambridge 0620 Extended — it is a colourless, choking acidic gas that turns damp acidified potassium manganate(VII) from purple to colourless (it acts as a reducing agent). It also turns damp blue litmus red because it is acidic.

**Additional details:**
- If limewater is exposed to excess CO₂, the milky precipitate redissolves (forming soluble Ca(HCO₃)₂) — useful to know for longer experiments.
- Chlorine has a distinctive sharp, choking smell (state this in a description question). It first turns blue litmus red (it is acidic), then bleaches it white — but in the exam "bleaches damp litmus" is the accepted answer.
- Ammonia also has a sharp smell and is the only common alkaline gas; it turns universal indicator paper blue. It is also the only common gas that produces white smoke (NH₄Cl) when a glass rod dipped in concentrated hydrochloric acid is held near it.
- Hydrogen burns with a 'squeaky pop' because hydrogen ignites rapidly — the pop is from the small explosion as it reacts with oxygen in the tube.
- Water vapour can be confirmed in a gas using blue cobalt(II) chloride paper (turns pink) or white anhydrous copper(II) sulfate (turns blue).

**Equation reminders:**
- CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O  (milky)
- CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂  (clears on excess CO₂)
- 2H₂ + O₂ → 2H₂O  (pop)`,
      keyPoints: [
        "H2: burning splint → squeaky pop.",
        "O2: glowing splint → relights.",
        "CO2: limewater → milky (white precipitate of CaCO3).",
        "NH3: damp red litmus → blue.",
        "Cl2: damp litmus → bleached/white.",
        "SO2 (Cambridge extension): damp acidified potassium manganate(VII) → purple to colourless.",
      ],
      whyItWorks: "Each gas test is based on a specific chemical reaction. The squeaky pop with H2 is a rapid combustion releasing energy. O2 relights a splint by sustaining combustion. CO2 reacts with Ca(OH)2 to form insoluble CaCO3. NH3 dissolves in water on the litmus to form NH4⁺ + OH⁻, making it alkaline. Cl2 reacts with water to form HClO (hypochlorous acid), a powerful oxidising bleach that destroys the dye in litmus paper. SO2 is a reducing agent: it reduces the purple manganate(VII) ion (oxidation state +7) to the almost colourless manganese(II) ion, so the colour is discharged.",
      strategies: ["State both the test AND the observation — half-marks are common for incomplete answers", "Order of testing: smell (if safe), then litmus, then specific tests"],
    },

    // ── SECTION 7 ──────────────────────────────────────────────────────────────
    {
      heading: "Instrumental Methods of Analysis",
      body: `The "wet" chemical tests in this topic are cheap and work in any school lab, but modern analysis usually relies on **instrumental methods** — machines that detect and measure substances electronically. You are not expected to know how the machines work in detail, but you ARE expected to know **why instrumental methods are used in preference to test-tube methods**.

**Advantages of instrumental methods over chemical (test-tube) tests:**
- **More sensitive** — they detect very small amounts of a substance (down to trace levels) that a chemical test would miss.
- **More accurate (and reliable)** — results are read electronically rather than judged by eye, removing human error in matching a colour.
- **Faster** — many samples can be analysed quickly, often automatically.
- **Need only a tiny sample** — useful in forensic, medical and environmental work where little material is available.

**Examples you may meet (names only at IGCSE):**
- **Mass spectrometry** — identifies elements and isotopes and measures relative atomic/molecular mass; it is how the isotopic composition of an element is found.
- **Atomic absorption / emission spectroscopy** — identifies and measures metal ions (a precise, instrumental version of the flame test).
- **Infrared (IR) spectroscopy** and **chromatography linked to detectors (e.g. GC, HPLC)** — separate and identify the components of a mixture.

**The trade-off:** instrumental methods are very powerful but the equipment is expensive, large and needs trained operators — which is why simple chemical tests are still taught and used for quick, routine identification.`,
      diagrams: [
        {
          caption: "Why instrumental methods are chosen — four key advantages over test-tube tests",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram listing four advantages of instrumental analysis: sensitive, accurate, fast, small sample">
  <rect x="10" y="10" width="300" height="180" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="160" y="34" font-size="13" fill="#e2e8f0" font-family="sans-serif" text-anchor="middle">Instrumental methods are...</text>
  <rect x="26" y="48" width="128" height="58" rx="6" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
  <text x="90" y="72" font-size="11" fill="#34d399" font-family="sans-serif" text-anchor="middle">More sensitive</text>
  <text x="90" y="90" font-size="9" fill="#b7bce0" font-family="sans-serif" text-anchor="middle">detect trace amounts</text>
  <rect x="166" y="48" width="128" height="58" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="230" y="72" font-size="11" fill="#fbbf24" font-family="sans-serif" text-anchor="middle">More accurate</text>
  <text x="230" y="90" font-size="9" fill="#b7bce0" font-family="sans-serif" text-anchor="middle">no colour-matching error</text>
  <rect x="26" y="116" width="128" height="58" rx="6" fill="#0f172a" stroke="#fb7185" stroke-width="1.5"/>
  <text x="90" y="140" font-size="11" fill="#fb7185" font-family="sans-serif" text-anchor="middle">Faster</text>
  <text x="90" y="158" font-size="9" fill="#b7bce0" font-family="sans-serif" text-anchor="middle">many samples quickly</text>
  <rect x="166" y="116" width="128" height="58" rx="6" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="230" y="140" font-size="11" fill="#a78bfa" font-family="sans-serif" text-anchor="middle">Tiny sample</text>
  <text x="230" y="158" font-size="9" fill="#b7bce0" font-family="sans-serif" text-anchor="middle">good for forensics</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Instrumental methods are more sensitive, more accurate, faster, and need only a small sample.",
        "Results are read electronically, removing human error in judging a colour.",
        "Mass spectrometry identifies isotopes and measures relative atomic/molecular mass.",
        "Drawbacks: equipment is expensive, large and needs trained operators.",
        "Simple chemical tests are still used for quick, cheap, routine identification.",
      ],
      thinkDeeper: "A flame test tells you copper is present from a blue-green colour judged by eye; an atomic emission spectrometer measures the exact wavelengths of light emitted and their intensity, so it can both identify the metal AND state precisely how much is present, even in a trace sample. The instrument is doing the same physics as the flame test — electrons dropping back to lower energy levels and emitting light — but measuring it quantitatively instead of by eye.",
      strategies: ["For 'why use instrumental methods' questions, give a comparison word: more sensitive / more accurate / faster / smaller sample", "Name a method only if asked — mass spectrometry is the safest example to quote"],
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // LEARN SMART
  // ─────────────────────────────────────────────────────────────────────────────
  learn: {
    keyFacts: [
      "A pure substance has a sharp, fixed melting point; impurities depress and broaden this range.",
      "Rf = distance moved by spot ÷ distance moved by solvent front; always measured from the pencil baseline.",
      "Filtration separates insoluble solid (residue) from liquid (filtrate).",
      "Crystallisation gives pure solid crystals from solution by evaporation then slow cooling.",
      "Fractional distillation separates liquids with close boiling points using a fractionating column.",
      "Cu²⁺ gives a blue precipitate with NaOH(aq) and a deep blue solution in excess NH3(aq).",
      "Fe²⁺ gives a green precipitate and Fe³⁺ gives a red-brown precipitate with NaOH(aq).",
      "Al³⁺ and Zn²⁺ give white precipitates with NaOH that dissolve in excess; Ca²⁺ does not dissolve.",
      "Flame test colours: Li⁺ red, Na⁺ yellow, K⁺ lilac, Ca²⁺ orange-red, Cu²⁺ blue-green.",
      "Sulfate test: acidify with HCl then add Ba²⁺ → white precipitate (BaSO4).",
      "Halide tests: acidify with HNO3 then AgNO3 → Cl⁻ white, Br⁻ cream, I⁻ yellow precipitate.",
      "Gas tests: H2 squeaky pop; O2 relights splint; CO2 milky limewater; NH3 red litmus → blue; Cl2 bleaches litmus.",
      "SO2 (Cambridge extension) decolourises damp acidified potassium manganate(VII) from purple to colourless.",
      "Test for water: anhydrous (white) copper(II) sulfate turns blue, or blue cobalt(II) chloride paper turns pink.",
      "Instrumental methods (e.g. mass spectrometry) are more sensitive, more accurate, faster and need only a small sample than chemical tests.",
    ],
    flashcards: [
      { front: "What observation confirms a pure substance at its melting point?", back: "It melts sharply at a single fixed temperature; no broadening of the melting range." },
      { front: "What does a broad, depressed melting range indicate?", back: "The presence of impurities — impurities disrupt the crystal lattice, lowering and broadening the melting point." },
      { front: "Give the formula for calculating Rf.", back: "Rf = distance moved by spot / distance moved by solvent front (both measured from the pencil baseline)." },
      { front: "Why must the solvent level be below the baseline in paper chromatography?", back: "If the baseline is submerged, the spots dissolve directly into the solvent instead of being carried up the paper." },
      { front: "What colour precipitate does Cu²⁺ give with NaOH(aq)?", back: "Blue precipitate (copper(II) hydroxide). It does NOT dissolve in excess NaOH but dissolves in excess NH3 to give a deep blue solution." },
      { front: "How do you distinguish Al³⁺ from Ca²⁺ using NaOH(aq)?", back: "Both give a white precipitate, but Al³⁺ dissolves in excess NaOH (forming aluminate); Ca²⁺ does NOT dissolve in excess." },
      { front: "What is the flame test colour for potassium?", back: "Lilac." },
      { front: "Describe the test and positive result for sulfate ions.", back: "Acidify with dilute HCl, then add barium chloride or barium nitrate solution. A white precipitate of BaSO4 forms immediately." },
      { front: "How are Cl⁻, Br⁻, and I⁻ distinguished?", back: "Acidify with dilute HNO3, add silver nitrate solution: Cl⁻ → white precipitate; Br⁻ → cream; I⁻ → yellow. Also use solubility in ammonia to confirm." },
      { front: "What gas is produced when a carbonate is added to acid?", back: "Carbon dioxide (CO2); confirmed by turning limewater milky." },
      { front: "What gas turns damp red litmus paper blue?", back: "Ammonia (NH3)." },
      { front: "What is a locating agent in paper chromatography?", back: "A reagent used to reveal colourless spots, e.g. ninhydrin (gives purple with amino acids) or UV lamp (spots appear dark under UV)." },
      { front: "How do you test for water, and prove it is PURE water?", back: "Presence of water: anhydrous white copper(II) sulfate turns blue, OR blue cobalt(II) chloride paper turns pink. Purity: a sharp boiling point of exactly 100 °C (or freezing point 0 °C) at standard pressure — an impurity would raise the boiling point." },
      { front: "Test for sulfur dioxide gas (Cambridge extension)?", back: "Hold damp acidified potassium manganate(VII) paper in the gas — the purple colour is decolourised (turns colourless), because SO2 is a reducing agent." },
      { front: "Give four reasons instrumental methods are preferred over chemical tests.", back: "They are more sensitive (detect trace amounts), more accurate (no human colour-matching error), faster, and need only a very small sample. Drawback: equipment is expensive and needs trained operators." },
    ],
    keyTerms: [
      { term: "Pure substance", definition: "A substance containing only one type of particle (element or compound), characterised by a sharp, fixed melting and boiling point." },
      { term: "Melting point range", definition: "The temperature interval over which a solid melts; a wide range indicates impurity." },
      { term: "Filtration", definition: "The separation of an insoluble solid (residue) from a liquid (filtrate) using filter paper." },
      { term: "Crystallisation", definition: "A purification technique in which a solid is dissolved, the solvent partly evaporated, then the solution cooled to allow pure crystals to form." },
      { term: "Simple distillation", definition: "Separation of a liquid from a dissolved solid, or two liquids with boiling points >25 °C apart, by heating and condensing the vapour." },
      { term: "Fractional distillation", definition: "Separation of a mixture of liquids with similar boiling points using a fractionating column that provides many cycles of condensation and re-evaporation." },
      { term: "Paper chromatography", definition: "A technique for separating soluble substances based on their differential distribution between a mobile solvent phase and a stationary paper phase." },
      { term: "Rf value", definition: "Retardation factor; the ratio of the distance moved by a substance to the distance moved by the solvent front, measured from the pencil baseline. A characteristic constant for a given substance and solvent." },
      { term: "Locating agent", definition: "A reagent (e.g. ninhydrin, UV light) used to reveal colourless separated spots on a chromatogram." },
      { term: "Precipitate", definition: "An insoluble solid formed when two solutions are mixed; used in ion identification tests." },
      { term: "Limewater", definition: "Aqueous calcium hydroxide, Ca(OH)2(aq); turns milky (white precipitate of CaCO3) in the presence of carbon dioxide gas." },
      { term: "Amphoteric hydroxide", definition: "A metal hydroxide (e.g. Al(OH)3, Zn(OH)2) that dissolves in both excess acid and excess alkali, unlike basic hydroxides such as Ca(OH)2." },
      { term: "Instrumental method", definition: "An analytical method using a machine (e.g. mass spectrometry, spectroscopy) to identify and measure substances electronically; more sensitive, accurate and faster than chemical tests and needs only a small sample." },
      { term: "Mass spectrometry", definition: "An instrumental method that identifies isotopes and measures relative atomic or molecular mass; used to determine the isotopic composition of an element." },
      { term: "Reducing agent (in gas tests)", definition: "A species that donates electrons and is itself oxidised; sulfur dioxide acts as one, decolourising purple acidified potassium manganate(VII)." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // QUICK QUIZ
  // ─────────────────────────────────────────────────────────────────────────────
  quiz: {
    mcq: [
      {
        id: "chem-analysis-mcq-q01",
        question: "A sample of benzoic acid is tested and found to melt over the range 118–124 °C. The literature value is 122 °C. What does this suggest?",
        options: [
          "The sample is pure, as it melts near the literature value.",
          "The sample contains impurities, which have depressed and broadened the melting range.",
          "The sample is a different compound — impurities raise the melting point.",
          "The melting range indicates the sample is a mixture of two pure substances with equal melting points.",
        ],
        answerIndex: 1,
        explanation: "Impurities depress and broaden the melting range. The sample begins melting below the literature value (118 °C) and finishes above (124 °C) — classic signs of impurity. Impurities lower, not raise, the melting point of a solid.",
        guideRef: "Purity and Why It Matters",
        difficulty: "warmup",
      },
      {
        id: "chem-analysis-mcq-q02",
        question: "A student wants to separate copper(II) sulfate crystals from a solution. Which sequence of steps is correct?",
        options: [
          "Filtration → evaporation to dryness",
          "Simple distillation → crystallisation",
          "Evaporation of some solvent → cooling → filtration to collect crystals",
          "Paper chromatography → crystallisation",
        ],
        answerIndex: 2,
        explanation: "Crystallisation involves partly evaporating the solvent to concentrate the solution, then cooling slowly so crystals form. The crystals are then collected by filtration. Evaporating to dryness would give an impure product (other dissolved impurities would also crystallise out) and can decompose some salts.",
        guideRef: "Separation and Purification Techniques",
        difficulty: "warmup",
      },
      {
        id: "chem-analysis-mcq-q03",
        question: "In a paper chromatography experiment the solvent front travels 15.0 cm and a spot travels 9.0 cm. What is the Rf value?",
        options: ["0.40", "0.60", "1.67", "6.00"],
        answerIndex: 1,
        explanation: "Rf = distance moved by spot / distance moved by solvent front = 9.0 / 15.0 = 0.60. The other options arise from inverting the ratio or confusing the distances.",
        guideRef: "Paper Chromatography and Rf Values",
        difficulty: "warmup",
      },
      {
        id: "chem-analysis-mcq-q04",
        question: "A solution produces a green precipitate when excess aqueous sodium hydroxide is added and the precipitate does not dissolve. Which ion is present?",
        options: ["Cu²⁺", "Fe²⁺", "Fe³⁺", "Zn²⁺"],
        answerIndex: 1,
        explanation: "Fe²⁺ gives a green precipitate of Fe(OH)2 with NaOH(aq); it is insoluble in excess. Cu²⁺ gives blue; Fe³⁺ gives red-brown; Zn²⁺ gives white (which dissolves in excess NaOH).",
        guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
        difficulty: "core",
        hints: [
          "Recall: the colour of the precipitate identifies the ion.",
          "Cu²⁺ → blue; Fe²⁺ → green; Fe³⁺ → red-brown; Zn²⁺ → white.",
          "Check insolubility in excess — this rules out Zn²⁺ (dissolves) and confirms Fe²⁺.",
        ],
      },
      {
        id: "chem-analysis-mcq-q05",
        question: "When a few drops of silver nitrate solution are added to an acidified solution and a cream precipitate forms, which anion is confirmed?",
        options: ["Cl⁻", "Br⁻", "I⁻", "SO₄²⁻"],
        answerIndex: 1,
        explanation: "Silver nitrate test on acidified solution: Cl⁻ → white (AgCl); Br⁻ → cream (AgBr); I⁻ → yellow (AgI). SO₄²⁻ does not react with silver nitrate to give a coloured precipitate under these conditions.",
        guideRef: "Identifying Anions",
        difficulty: "core",
        hints: [
          "The silver nitrate test produces three differently coloured precipitates for the three halides.",
          "Recall: white = chloride, cream = bromide, yellow = iodide.",
          "Cream lies between white and yellow — that matches bromide.",
        ],
      },
      {
        id: "chem-analysis-mcq-q06",
        question: "A colourless gas is bubbled through limewater, which remains clear. A glowing splint is then held at the mouth of the tube and relights. Which gas is most likely?",
        options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Ammonia"],
        answerIndex: 1,
        explanation: "Oxygen relights a glowing splint — this is the definitive test. Carbon dioxide would turn limewater milky. Hydrogen produces a squeaky pop with a burning (not glowing) splint. Ammonia turns damp red litmus blue and would not relight a glowing splint.",
        guideRef: "Identifying Gases",
        difficulty: "warmup",
      },
    ],
    qa: [
      {
        id: "chem-analysis-qa-q01",
        question: "A student performs a flame test on an unknown compound and observes a yellow flame. They then dissolve the compound in water and add a few drops of dilute nitric acid followed by silver nitrate solution. A white precipitate forms. (a) Identify the cation and the anion. (b) Name the compound. (c) Write an ionic equation for the reaction with silver nitrate solution. [5 marks]",
        marks: 5,
        modelAnswer: "(a) Yellow flame → Na⁺ (sodium ion). White precipitate with acidified silver nitrate → Cl⁻ (chloride ion). (b) The compound is sodium chloride, NaCl. (c) Ag⁺(aq) + Cl⁻(aq) → AgCl(s)",
        markScheme: [
          "Na⁺ / sodium ion identified from yellow flame [1]",
          "Cl⁻ / chloride ion identified from white precipitate with acidified AgNO3 [1]",
          "Compound correctly named as sodium chloride / NaCl [1]",
          "Correct ionic equation: Ag⁺(aq) + Cl⁻(aq) → AgCl(s) [1]",
          "Correct state symbols in ionic equation [1]",
        ],
        commonError: "Students often forget to acidify the solution before adding silver nitrate, which can give false positives with carbonate or sulfite ions present.",
        guideRef: "Identifying Anions",
        difficulty: "core",
        hints: [
          "Read the flame test colour first — this identifies the cation.",
          "The silver nitrate test colour tells you which halide is present.",
          "An ionic equation only shows the ions/species that change; spectator ions are omitted.",
          "State symbols: ions in solution are (aq); precipitate is (s).",
        ],
        strategy: "Identify cation first (flame test), then anion (precipitation test), then name compound.",
      },
      {
        id: "chem-analysis-qa-q02",
        question: "A mixture of two inks (A and B) is analysed by paper chromatography. The solvent front moves 12.6 cm from the baseline. Ink A produces one spot at 5.04 cm and Ink B produces one spot at 10.08 cm from the baseline. A reference dye (indigo, Rf = 0.80) is run alongside. (a) Calculate the Rf values for inks A and B. (2 marks) (b) Identify which ink, if either, contains indigo. Justify your answer. (2 marks) (c) The spots for A and B are colourless. State a locating agent you could use to reveal them, and describe the expected result. (2 marks)",
        marks: 6,
        modelAnswer: "(a) Rf(A) = 5.04 / 12.6 = 0.40. Rf(B) = 10.08 / 12.6 = 0.80. (b) Ink B contains indigo, as its Rf (0.80) matches that of the reference indigo dye (0.80) in the same solvent and conditions. Ink A has Rf = 0.40 so it is a different substance. (c) Ninhydrin solution could be sprayed on the paper and then heated; spots containing the colourless compound would appear as purple/brown marks. (Alternatively: view under UV light — spots appear dark against the fluorescent background.)",
        markScheme: [
          "Rf(A) = 5.04 / 12.6 = 0.40 [1]",
          "Rf(B) = 10.08 / 12.6 = 0.80 [1]",
          "Ink B identified as containing indigo [1]",
          "Justified by matching Rf value (0.80) in the same solvent [1]",
          "Named a valid locating agent (ninhydrin / UV light) [1]",
          "Correct expected observation (purple/brown spots with ninhydrin; dark spots under UV) [1]",
        ],
        commonError: "A common error is measuring distances from the solvent surface or the top of the paper rather than from the pencil baseline, giving incorrect Rf values.",
        guideRef: "Paper Chromatography and Rf Values",
        difficulty: "core",
        hints: [
          "Write out the Rf formula first: Rf = distance spot / distance solvent front.",
          "Both distances are measured from the same starting point — the pencil baseline.",
          "To confirm identity by chromatography, the Rf of the unknown must match the Rf of the reference in the same solvent.",
          "A locating agent makes a colourless spot visible — think ninhydrin for organic molecules or UV for UV-absorbing compounds.",
        ],
        strategy: "Calculate Rf values numerically before attempting the identification comparison.",
        solutions: [
          {
            label: "Method 1: Direct ratio",
            steps: [
              "Rf(A) = 5.04 cm / 12.6 cm = 0.40",
              "Rf(B) = 10.08 cm / 12.6 cm = 0.80",
              "Compare to reference: indigo Rf = 0.80 → matches Ink B",
            ],
          },
          {
            label: "Method 2: Check if ratio holds for Ink A",
            steps: [
              "If A were indigo, expect distance = 0.80 × 12.6 = 10.08 cm",
              "Actual distance for A = 5.04 cm ≠ 10.08 cm → A is not indigo",
              "For B: expected distance = 0.80 × 12.6 = 10.08 cm — matches exactly → B is indigo",
            ],
          },
        ],
      },
      {
        id: "chem-analysis-qa-q03",
        question: "An unknown white solid X is suspected to be either aluminium sulfate, Al2(SO4)3, or zinc chloride, ZnCl2. Describe a series of chemical tests that would distinguish between them, stating the reagents, procedure, and expected observations for each test. Explain how your results identify the compound. [6 marks]",
        marks: 6,
        modelAnswer: "Test 1 — Anion test. Dissolve X in water. Acidify with dilute HCl, then add barium chloride solution. If a white precipitate forms immediately, sulfate (SO4²⁻) is confirmed → solid X is aluminium sulfate. If no precipitate, add acidified silver nitrate solution instead: a white precipitate of AgCl confirms chloride (Cl⁻) → solid X is zinc chloride.\n\nTest 2 — Cation test (confirm). Dissolve X in water and add excess aqueous sodium hydroxide. Both Al³⁺ and Zn²⁺ give a white precipitate that dissolves in excess NaOH. To distinguish further, add excess aqueous ammonia: Al³⁺ precipitate does NOT dissolve in excess NH3; Zn²⁺ precipitate DOES dissolve. This confirms whether the cation is Al³⁺ or Zn²⁺. The two results together uniquely identify the compound.",
        markScheme: [
          "Dissolve in water / prepare aqueous solution [1]",
          "Acidify with HCl then add Ba²⁺ solution: white precipitate confirms SO4²⁻ (aluminium sulfate) / no precipitate rules out sulfate [1]",
          "If no sulfate: acidify with HNO3 then add AgNO3: white precipitate confirms Cl⁻ (zinc chloride) [1]",
          "Add excess NaOH: white precipitate in both cases [1]",
          "Add excess NH3: dissolves for Zn²⁺ but not for Al³⁺ — distinguishes cations [1]",
          "Correct conclusion linking all observations to identify the compound [1]",
        ],
        commonError: "Students often forget to acidify before the barium chloride test, allowing carbonate or other anions to give false positives. Also, they may not test cation AND anion — testing only one gives a less certain identification.",
        guideRef: "Identifying Anions",
        difficulty: "challenge",
        hints: [
          "Start by thinking: what are the two anions (sulfate and chloride) — which test distinguishes them?",
          "Sulfate test: acidify first to remove interferences, then add barium chloride — white precipitate is the positive result.",
          "Now check the cation: both Al³⁺ and Zn²⁺ give white precipitates with NaOH. How do you then tell them apart?",
          "Excess ammonia solution is the key: Zn²⁺ precipitate dissolves; Al³⁺ precipitate does not.",
        ],
        strategy: "Test anion first (more definitive here), then confirm cation with NaOH then excess NH3.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // QUESTION BANK
  // ─────────────────────────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      // ── MCQ PAPER 1 ── purity, separation techniques, distillation
      {
        id: "chem-analysis-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Purity criteria, separation and purification techniques.",
        questions: [
          {
            id: "chem-analysis-bm1-01",
            question: "Which property is the best single indicator that a solid sample is pure?",
            options: [
              "It dissolves quickly in water",
              "It melts sharply at a single fixed temperature",
              "It is colourless",
              "It is unreactive with dilute acid",
            ],
            answerIndex: 1,
            explanation: "A pure solid melts at one fixed temperature; impurities depress and broaden the melting range. Solubility, colour and reactivity do not reliably indicate purity.",
            guideRef: "Purity and Why It Matters",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm1-02",
            question: "Which technique separates an insoluble solid from a liquid?",
            options: ["Crystallisation", "Filtration", "Simple distillation", "Chromatography"],
            answerIndex: 1,
            explanation: "Filtration traps an insoluble solid (the residue) on filter paper while the liquid (filtrate) passes through. Crystallisation and distillation recover dissolved solutes; chromatography separates soluble substances.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm1-03",
            question: "A dissolved impurity is added to pure water. What happens to the boiling point of the liquid?",
            options: [
              "It is lowered",
              "It is raised",
              "It stays exactly the same",
              "It becomes a range below 100 °C",
            ],
            answerIndex: 1,
            explanation: "Dissolved impurities raise (elevate) the boiling point of a liquid. (They depress the melting point of a solid — a common point of confusion.)",
            guideRef: "Purity and Why It Matters",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm1-04",
            question: "Why is salt solution separated by simple distillation rather than fractional distillation to obtain pure water?",
            options: [
              "Salt and water have very close boiling points",
              "The solute is a non-volatile solid, so one distillation stage gives clean separation",
              "Fractional distillation would decompose the salt",
              "Water cannot pass through a fractionating column",
            ],
            answerIndex: 1,
            explanation: "Salt is a non-volatile dissolved solid: only the water evaporates, so a single distillation stage (simple distillation) cleanly separates pure water as the distillate. A fractionating column is only needed when separating liquids with close boiling points.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "core",
            hints: [
              "Ask whether the solute can evaporate at all.",
              "Fractional distillation is reserved for two liquids with close boiling points.",
              "If only one component is volatile, simple distillation is sufficient.",
            ],
          },
          {
            id: "chem-analysis-bm1-05",
            question: "To obtain large, pure crystals of a soluble salt by crystallisation, the hot saturated solution should be:",
            options: [
              "cooled very rapidly in ice",
              "cooled slowly",
              "evaporated completely to dryness",
              "filtered while still boiling",
            ],
            answerIndex: 1,
            explanation: "Slow cooling allows fewer, larger crystals to grow, excluding impurity molecules from the lattice. Rapid cooling traps impurities in many tiny crystals; evaporating to dryness leaves all dissolved impurities behind in the solid.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "core",
            hints: [
              "Think about how crystal size depends on cooling rate.",
              "Slow growth lets impurities be excluded from the lattice.",
              "Evaporating to dryness keeps every dissolved impurity in the product.",
            ],
          },
          {
            id: "chem-analysis-bm1-06",
            question: "Two liquids X (b.p. 65 °C) and Y (b.p. 80 °C) are to be separated. Which technique is most appropriate?",
            options: ["Filtration", "Crystallisation", "Fractional distillation", "Decanting"],
            answerIndex: 2,
            explanation: "The boiling points differ by only 15 °C (less than ~25 °C), so simple distillation gives poor separation. Fractional distillation provides many cycles of condensation and re-evaporation in the column for clean separation.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "core",
            hints: [
              "Compare the boiling-point gap with the ~25 °C rule of thumb.",
              "A small gap means many separation stages are needed.",
              "The fractionating column supplies those repeated stages.",
            ],
          },
          {
            id: "chem-analysis-bm1-07",
            question: "Anhydrous copper(II) sulfate is used in a test. A few drops of a liquid are added and the white solid turns blue. What does this confirm?",
            options: [
              "The liquid is pure water only",
              "Water is present in the liquid",
              "The liquid is acidic",
              "The liquid contains chloride ions",
            ],
            answerIndex: 1,
            explanation: "Anhydrous (white) copper(II) sulfate turns blue when water is added, confirming the PRESENCE of water. It does not prove the liquid is PURE water — boiling/melting point tests are needed for purity. Cobalt(II) chloride paper (blue to pink) is an alternative water test.",
            guideRef: "Purity and Why It Matters",
            difficulty: "core",
            hints: [
              "Distinguish 'water is present' from 'this is pure water'.",
              "The colour change confirms only the presence of water.",
              "Purity of water needs a boiling point of exactly 100 °C at standard pressure.",
            ],
          },
          {
            id: "chem-analysis-bm1-08",
            question: "A sample of an organic acid melts over 95–102 °C; the data book value is 104 °C. After recrystallisation it melts at 103–104 °C. What does this show?",
            options: [
              "Recrystallisation has reduced the purity",
              "Recrystallisation has increased the purity, giving a sharper, higher melting range",
              "The acid has decomposed during recrystallisation",
              "The two melting ranges are equally pure",
            ],
            answerIndex: 1,
            explanation: "After recrystallisation the melting range is narrower (103–104 °C) and closer to the data-book value (104 °C), showing higher purity. The original broad, depressed range (95–102 °C) indicated significant impurity.",
            guideRef: "Purity and Why It Matters",
            difficulty: "core",
            hints: [
              "A purer solid melts over a narrower range, nearer the literature value.",
              "Compare the width of each range and how close it is to 104 °C.",
              "Recrystallisation is a purification step — expect purity to rise.",
            ],
          },
          {
            id: "chem-analysis-bm1-09",
            question: "A student must separate a mixture of sand, common salt and iron filings. Which sequence works?",
            options: [
              "Magnet to remove iron, add water and filter to remove sand, then evaporate to recover salt",
              "Filter first, then add a magnet to the filtrate, then distil",
              "Add water and crystallise to remove sand, then use a magnet on the crystals",
              "Distil the mixture, then filter the distillate",
            ],
            answerIndex: 0,
            explanation: "Iron is magnetic, so remove it first with a magnet. Then dissolve the salt in water and filter to leave sand as residue; the salt solution is the filtrate. Finally evaporate/crystallise the filtrate to recover the salt. The other sequences mix up the order or use techniques on the wrong fractions.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "challenge",
            hints: [
              "List a distinguishing physical property for each component: magnetism, solubility, insolubility.",
              "Use the magnet on the dry mixture before adding any water.",
              "After filtering off sand, the salt is recovered from the filtrate by evaporation.",
            ],
            strategy: "Match each component to a property, then order the steps so each technique acts on the right fraction.",
          },
          {
            id: "chem-analysis-bm1-10",
            question: "In simple distillation, where should the bulb of the thermometer be positioned for an accurate reading of the distillate's boiling point?",
            options: [
              "In the liquid in the flask",
              "Level with the side-arm where vapour leaves to the condenser",
              "Inside the condenser",
              "At the top of the fractionating column",
            ],
            answerIndex: 1,
            explanation: "The thermometer bulb must be level with the side-arm (the opening to the condenser) so it reads the temperature of the vapour passing over — i.e. the boiling point of the substance being collected. In the liquid it would read the flask temperature, not the vapour temperature.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "challenge",
            hints: [
              "The thermometer should measure the vapour, not the boiling liquid.",
              "Position it where the vapour leaves the flask.",
              "Level with the side-arm gives the true boiling point of the distillate.",
            ],
          },
        ],
      },
      // ── MCQ PAPER 2 ── chromatography and Rf
      {
        id: "chem-analysis-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Paper chromatography, Rf calculations, locating agents and interpretation.",
        questions: [
          {
            id: "chem-analysis-bm2-01",
            question: "Why must the baseline on a chromatography paper be drawn in pencil rather than ink?",
            options: [
              "Pencil is easier to see",
              "Ink would dissolve in the solvent and run up the paper",
              "Pencil reacts with the locating agent",
              "Ink changes the Rf values of the spots",
            ],
            answerIndex: 1,
            explanation: "Pencil (graphite) is insoluble and stays in place. Ink would dissolve in the mobile phase and travel up the paper, ruining the chromatogram.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm2-02",
            question: "On a chromatogram, a single pure substance produces:",
            options: [
              "no spots",
              "one spot",
              "always two spots",
              "a continuous smear up the paper",
            ],
            answerIndex: 1,
            explanation: "A pure substance gives a single spot; a mixture gives two or more spots. This is a quick purity check by chromatography.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm2-03",
            question: "Why must the solvent level in the tank start BELOW the pencil baseline?",
            options: [
              "So the paper does not get wet",
              "So the spots dissolve directly into the solvent",
              "So the spots are not washed off into the solvent before separation begins",
              "So the solvent rises faster",
            ],
            answerIndex: 2,
            explanation: "If the baseline were below the solvent surface, the sample spots would dissolve straight into the solvent reservoir instead of being carried up the paper, so no separation would occur.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Picture what happens to a spot sitting in the pool of solvent.",
              "The spots must travel UP the paper, not dissolve into the tank.",
              "Keep the baseline above the solvent surface at the start.",
            ],
          },
          {
            id: "chem-analysis-bm2-04",
            question: "A solvent front travels 8.0 cm and a spot travels 2.0 cm from the baseline. What is the Rf value?",
            options: ["0.25", "0.40", "2.5", "4.0"],
            answerIndex: 0,
            explanation: "Rf = distance moved by spot ÷ distance moved by solvent front = 2.0 ÷ 8.0 = 0.25. Inverting the ratio gives 4.0 (a wrong answer that is impossible since Rf ≤ 1).",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "warmup",
            hints: [
              "Write the Rf formula first.",
              "The smaller distance (spot) goes on top of the fraction.",
              "An Rf value can never be greater than 1.",
            ],
          },
          {
            id: "chem-analysis-bm2-05",
            question: "Amino acids are colourless. Which method reveals their separated spots on a chromatogram?",
            options: [
              "Heating the paper until it chars",
              "Spraying with ninhydrin and warming",
              "Adding silver nitrate solution",
              "Dipping the paper in limewater",
            ],
            answerIndex: 1,
            explanation: "Ninhydrin is a locating agent: sprayed on and warmed, it produces purple/brown spots with amino acids. A UV lamp is the other common locating method. Silver nitrate and limewater are ion tests, not locating agents.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Colourless spots need a locating agent to be seen.",
              "Recall the reagent that gives purple/brown colours with amino acids.",
              "A UV lamp is the alternative locating method.",
            ],
          },
          {
            id: "chem-analysis-bm2-06",
            question: "Two substances P and Q have the same Rf value in one solvent. How can you best check whether they are actually the same substance?",
            options: [
              "Repeat the experiment in the same solvent",
              "Run the chromatogram again using a different solvent",
              "Measure their melting points only",
              "Use a longer strip of paper",
            ],
            answerIndex: 1,
            explanation: "Two different substances can coincidentally share an Rf in one solvent. Running the chromatogram in a second, different solvent will usually give different Rf values if they are different substances, confirming or refuting identity.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "One matching Rf is not conclusive proof of identity.",
              "Change a variable that affects how each substance partitions.",
              "Different substances usually separate differently in a new solvent.",
            ],
          },
          {
            id: "chem-analysis-bm2-07",
            question: "A spot has Rf = 1.00 in a chromatography run. What does this indicate about that substance?",
            options: [
              "It did not dissolve in the solvent",
              "It moved with the solvent front — very strongly attracted to the mobile phase",
              "It is definitely pure",
              "It is strongly attracted to the paper",
            ],
            answerIndex: 1,
            explanation: "Rf = 1.00 means the spot travelled the same distance as the solvent front, so it is very soluble in the mobile phase and barely held by the stationary phase (paper). It says nothing about purity. Rf = 0 would mean it did not move.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Rf compares spot distance to solvent-front distance.",
              "If those distances are equal, what is the ratio?",
              "Moving with the front means the mobile phase dominates.",
            ],
          },
          {
            id: "chem-analysis-bm2-08",
            question: "A chromatogram of a food dye shows three spots. The dye is labelled as a single colouring. What can you conclude?",
            options: [
              "The dye is pure",
              "The dye is a mixture of at least three components",
              "The dye contains exactly three impurities",
              "The chromatography has failed",
            ],
            answerIndex: 1,
            explanation: "Three spots means at least three different components separated, so the 'single' dye is in fact a mixture of three or more substances. You cannot label them 'impurities' without knowing the intended composition.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Count the spots — each spot is a different substance.",
              "More than one spot rules out a pure substance.",
              "Be careful calling components 'impurities' versus 'a mixture'.",
            ],
          },
          {
            id: "chem-analysis-bm2-09",
            question: "On a chromatogram the solvent front moved 10.0 cm. Reference compound R has Rf = 0.30 in this solvent. At what distance from the baseline would R's spot be expected?",
            options: ["0.30 cm", "3.0 cm", "7.0 cm", "30 cm"],
            answerIndex: 1,
            explanation: "Distance = Rf × solvent-front distance = 0.30 × 10.0 = 3.0 cm. Rearranging the Rf formula lets you predict a spot's position.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "challenge",
            hints: [
              "Start from Rf = spot distance ÷ solvent distance.",
              "Rearrange to make spot distance the subject.",
              "Multiply Rf by the solvent-front distance.",
            ],
          },
          {
            id: "chem-analysis-bm2-10",
            question: "A chromatogram shows the solvent front at 12.0 cm and a single spot at 9.0 cm. A second run of the SAME sample in the SAME solvent gives a solvent front at 8.0 cm. Where should the spot appear in the second run, and why is Rf preferred over raw distance?",
            options: [
              "At 9.0 cm, because the spot distance is fixed",
              "At 6.0 cm, because Rf (0.75) is constant for the substance and solvent",
              "At 8.0 cm, because it moves with the front",
              "At 4.0 cm, because distances always halve",
            ],
            answerIndex: 1,
            explanation: "Rf = 9.0 ÷ 12.0 = 0.75, a constant for that substance–solvent pair. In the second run the spot distance = 0.75 × 8.0 = 6.0 cm. Raw spot distance changes with how far the solvent runs, but Rf is reproducible — that is why Rf is used for identification.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "challenge",
            hints: [
              "First find Rf from the first run.",
              "Rf is a constant, so apply it to the new solvent-front distance.",
              "Spot distance scales with how far the solvent travelled; Rf does not.",
            ],
            strategy: "Convert to Rf first; Rf is the invariant, then scale to the new front distance.",
          },
        ],
      },
      // ── MCQ PAPER 3 ── cation tests (NaOH, ammonia, flame)
      {
        id: "chem-analysis-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Cation tests: NaOH precipitates, aqueous ammonia, flame tests.",
        questions: [
          {
            id: "chem-analysis-bm3-01",
            question: "Which flame test colour indicates a lithium (Li⁺) ion?",
            options: ["Yellow", "Red/crimson", "Lilac", "Blue-green"],
            answerIndex: 1,
            explanation: "Li⁺ gives a red/crimson flame. Na⁺ is yellow, K⁺ is lilac, Cu²⁺ is blue-green, Ca²⁺ is orange-red.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm3-02",
            question: "Adding aqueous sodium hydroxide to a solution gives a red-brown precipitate. Which ion is present?",
            options: ["Fe²⁺", "Fe³⁺", "Cu²⁺", "Zn²⁺"],
            answerIndex: 1,
            explanation: "Fe³⁺ gives a red-brown precipitate of Fe(OH)₃ with NaOH. Fe²⁺ gives green, Cu²⁺ gives blue, Zn²⁺ gives white.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm3-03",
            question: "Warming a solution with aqueous sodium hydroxide releases a gas that turns damp red litmus blue. Which ion is present?",
            options: ["NH₄⁺", "Na⁺", "Ca²⁺", "Al³⁺"],
            answerIndex: 0,
            explanation: "Ammonium ions (NH₄⁺) release ammonia gas (NH₃) when warmed with NaOH; the gas turns damp red litmus blue. No precipitate forms. The other ions give no such gas.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm3-04",
            question: "Which observation distinguishes Cu²⁺ from Fe²⁺ and Fe³⁺ when aqueous sodium hydroxide is added?",
            options: [
              "Cu²⁺ gives a white precipitate",
              "Cu²⁺ gives a blue precipitate",
              "Cu²⁺ gives no precipitate",
              "Cu²⁺ gives a red-brown precipitate",
            ],
            answerIndex: 1,
            explanation: "Cu²⁺ gives a distinctive blue precipitate of Cu(OH)₂. Fe²⁺ gives green and Fe³⁺ gives red-brown, so the blue colour is unique among these three.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "warmup",
            hints: [
              "Recall the precipitate colour for each ion with NaOH.",
              "Copper(II) hydroxide has a characteristic colour.",
              "Blue is unique to Cu²⁺ among these three.",
            ],
          },
          {
            id: "chem-analysis-bm3-05",
            question: "A white precipitate forms with NaOH(aq) and DISSOLVES in excess NaOH. Adding aqueous ammonia also gives a white precipitate that DISSOLVES in excess ammonia. Which ion is present?",
            options: ["Al³⁺", "Ca²⁺", "Zn²⁺", "Fe²⁺"],
            answerIndex: 2,
            explanation: "Zn²⁺ gives a white precipitate that dissolves in BOTH excess NaOH and excess ammonia. Al³⁺ dissolves in excess NaOH but NOT in excess ammonia; Ca²⁺ dissolves in neither; Fe²⁺ gives green, not white.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "All the white-precipitate ions look the same at first — use solubility in excess.",
              "Dissolving in excess ammonia is the key distinguishing clue.",
              "Only zinc dissolves in BOTH excess NaOH and excess ammonia.",
            ],
          },
          {
            id: "chem-analysis-bm3-06",
            question: "Aqueous ammonia is added to a blue solution. A precipitate forms and then dissolves in excess to give a deep blue solution. Which ion is present?",
            options: ["Fe²⁺", "Cu²⁺", "Zn²⁺", "Al³⁺"],
            answerIndex: 1,
            explanation: "Cu²⁺ forms a pale blue precipitate that dissolves in EXCESS ammonia to give a deep blue solution (the tetraamminecopper(II) complex). Zn²⁺ dissolves in excess ammonia but the solution is colourless; Al³⁺ does not dissolve in excess ammonia.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "The deep blue solution is a strong clue.",
              "Only one ion gives a deep blue colour on dissolving in excess ammonia.",
              "Zinc also dissolves in excess ammonia but stays colourless.",
            ],
          },
          {
            id: "chem-analysis-bm3-07",
            question: "Which ionic equation correctly represents the reaction of iron(III) ions with hydroxide ions?",
            options: [
              "Fe²⁺ + 2OH⁻ → Fe(OH)₂",
              "Fe³⁺ + 3OH⁻ → Fe(OH)₃",
              "Fe³⁺ + 2OH⁻ → Fe(OH)₂",
              "2Fe³⁺ + 3OH⁻ → Fe₂(OH)₃",
            ],
            answerIndex: 1,
            explanation: "Iron(III) is 3+, so it needs three OH⁻ ions: Fe³⁺ + 3OH⁻ → Fe(OH)₃. The charges balance (3+ and 3×1−) and the formula of the precipitate is Fe(OH)₃.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "Identify the charge on the iron(III) ion.",
              "The number of OH⁻ must balance that charge.",
              "Check the precipitate formula matches the ion charges.",
            ],
          },
          {
            id: "chem-analysis-bm3-08",
            question: "Why does the flame test for many metal ions need a clean wire dipped in concentrated hydrochloric acid first?",
            options: [
              "The acid colours the flame to make it easier to see",
              "To remove contaminating ions (e.g. sodium) that would mask the true colour",
              "To make the sample dissolve",
              "To cool the wire before use",
            ],
            answerIndex: 1,
            explanation: "Cleaning the wire in HCl removes contaminants — especially sodium, whose persistent yellow flame would otherwise mask the true colour of the sample. HCl also forms volatile chlorides that vaporise easily in the flame.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "Think about which contaminant gives a very persistent flame colour.",
              "Sodium's yellow flame appears from the tiniest trace.",
              "Cleaning prevents a false or masked result.",
            ],
          },
          {
            id: "chem-analysis-bm3-09",
            question: "Two colourless solutions both give a white precipitate with NaOH(aq) that is insoluble in excess. A flame test gives an orange-red colour for one and no clear colour for the other. Which two ions are present?",
            options: [
              "Ca²⁺ (orange-red flame) and Al³⁺ (no clear flame)",
              "Zn²⁺ and Al³⁺",
              "Ca²⁺ and Zn²⁺",
              "Mg²⁺ and Na⁺",
            ],
            answerIndex: 0,
            explanation: "A white precipitate insoluble in excess NaOH points to Ca²⁺ or Al³⁺ — but Al³⁺ DISSOLVES in excess NaOH, so 'insoluble in excess' fits Ca²⁺. Among the listed pairs, Ca²⁺ gives an orange-red flame; Al³⁺ gives no characteristic flame colour. (Note: of the white-precipitate cations, only Ca²⁺ is truly insoluble in excess NaOH.)",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "challenge",
            hints: [
              "Which white-precipitate cation does NOT dissolve in excess NaOH?",
              "Match the orange-red flame to its ion.",
              "Aluminium gives no characteristic Bunsen flame colour.",
            ],
            strategy: "Use the 'insoluble in excess' clue to narrow the white-precipitate ions, then assign the flame colour.",
          },
          {
            id: "chem-analysis-bm3-10",
            question: "A solution gives a green precipitate with NaOH that slowly turns brown at its surface on standing in air. What is the best explanation?",
            options: [
              "Fe(OH)₂ is decomposing into iron metal",
              "Fe²⁺ is being oxidised by air to Fe³⁺, forming red-brown Fe(OH)₃",
              "The precipitate is dissolving in excess NaOH",
              "Cu(OH)₂ is forming on top",
            ],
            answerIndex: 1,
            explanation: "The green precipitate is iron(II) hydroxide. On standing, oxygen in the air oxidises Fe²⁺ to Fe³⁺, so the surface turns red-brown as Fe(OH)₃ forms. This colour change is itself evidence the original ion was Fe²⁺.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "challenge",
            hints: [
              "Green is the colour for iron(II) hydroxide.",
              "Red-brown is the colour for iron(III) hydroxide.",
              "Air contains oxygen — what could it do to Fe²⁺?",
            ],
          },
        ],
      },
      // ── MCQ PAPER 4 ── anion tests + gas tests
      {
        id: "chem-analysis-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Anion tests (carbonate, sulfate, halides, nitrate) and gas tests.",
        questions: [
          {
            id: "chem-analysis-bm4-01",
            question: "A glowing splint relights when held at the mouth of a test tube. Which gas is present?",
            options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Ammonia"],
            answerIndex: 1,
            explanation: "Oxygen relights a glowing splint by sustaining combustion. Hydrogen gives a squeaky pop with a burning splint; CO₂ turns limewater milky; ammonia turns damp red litmus blue.",
            guideRef: "Identifying Gases",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm4-02",
            question: "Which test confirms carbon dioxide gas?",
            options: [
              "It bleaches damp litmus",
              "It turns limewater milky",
              "It gives a squeaky pop with a lit splint",
              "It relights a glowing splint",
            ],
            answerIndex: 1,
            explanation: "CO₂ turns limewater (calcium hydroxide solution) milky, forming a white precipitate of calcium carbonate. Bleaching litmus is chlorine; the squeaky pop is hydrogen; relighting a splint is oxygen.",
            guideRef: "Identifying Gases",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm4-03",
            question: "Damp litmus paper is held in a gas and is bleached (decolourised). Which gas is present?",
            options: ["Ammonia", "Chlorine", "Hydrogen", "Carbon dioxide"],
            answerIndex: 1,
            explanation: "Chlorine bleaches damp litmus paper (it first may turn red then white). Ammonia turns damp red litmus blue; hydrogen and CO₂ do not bleach litmus.",
            guideRef: "Identifying Gases",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm4-04",
            question: "To test for sulfate ions, a solution is acidified with dilute hydrochloric acid before adding barium chloride. Why is the acid added first?",
            options: [
              "To speed up the precipitation",
              "To remove carbonate (and sulfite) ions that would also give a white precipitate",
              "To dissolve the barium sulfate",
              "To change the colour of the precipitate",
            ],
            answerIndex: 1,
            explanation: "Carbonate (and sulfite) ions would also form white precipitates with barium, giving a false positive. Acidifying with HCl removes them as CO₂ (and SO₂) so only sulfate gives the white BaSO₄ precipitate.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "Other anions can also give white precipitates with barium.",
              "Acid destroys carbonate and sulfite, removing interference.",
              "Acidifying ensures the white precipitate is truly from sulfate.",
            ],
          },
          {
            id: "chem-analysis-bm4-05",
            question: "Acidified silver nitrate is added to a solution and a cream precipitate forms. Which anion is present?",
            options: ["Cl⁻", "Br⁻", "I⁻", "SO₄²⁻"],
            answerIndex: 1,
            explanation: "Cream silver halide is AgBr, so bromide (Br⁻) is present. White = AgCl (chloride), yellow = AgI (iodide). Sulfate gives no precipitate with silver nitrate.",
            guideRef: "Identifying Anions",
            difficulty: "warmup",
            hints: [
              "Recall the three silver-halide colours.",
              "Cream lies between white and yellow.",
              "White → Cl⁻, cream → Br⁻, yellow → I⁻.",
            ],
          },
          {
            id: "chem-analysis-bm4-06",
            question: "Which acid should be used to acidify a solution before the silver nitrate halide test?",
            options: [
              "Dilute hydrochloric acid",
              "Dilute nitric acid",
              "Dilute sulfuric acid",
              "Concentrated nitric acid",
            ],
            answerIndex: 1,
            explanation: "Dilute nitric acid is used because it does not introduce chloride (HCl would add Cl⁻ and give a false positive) or sulfate (H₂SO₄ would interfere). Nitric acid removes carbonate interference without adding the test ions.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "Avoid adding the very ion you are testing for.",
              "HCl would add chloride; H₂SO₄ would add sulfate.",
              "Nitric acid adds neither halide nor sulfate.",
            ],
          },
          {
            id: "chem-analysis-bm4-07",
            question: "How is the nitrate ion (NO₃⁻) tested for in solution?",
            options: [
              "Add silver nitrate — white precipitate",
              "Add aluminium powder and NaOH(aq), warm — ammonia gas evolved",
              "Add dilute acid — CO₂ evolved",
              "Add barium chloride — white precipitate",
            ],
            answerIndex: 1,
            explanation: "Nitrate is reduced by aluminium (or Devarda's alloy) in warm alkaline (NaOH) conditions to ammonia gas, which turns damp red litmus blue. The other options test for halide, carbonate and sulfate.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "Nitrate is reduced to a gas you already know how to detect.",
              "Aluminium plus warm NaOH is the reagent combination.",
              "The gas turns damp red litmus blue.",
            ],
          },
          {
            id: "chem-analysis-bm4-08",
            question: "When limewater is exposed to EXCESS carbon dioxide for a long time, the milky precipitate redissolves and the solution clears. Why?",
            options: [
              "The CaCO₃ evaporates",
              "Soluble calcium hydrogencarbonate, Ca(HCO₃)₂, forms",
              "The CO₂ stops reacting",
              "Oxygen displaces the CO₂",
            ],
            answerIndex: 1,
            explanation: "Excess CO₂ converts the insoluble CaCO₃ into soluble calcium hydrogencarbonate: CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂. The soluble product clears the milky suspension.",
            guideRef: "Identifying Gases",
            difficulty: "challenge",
            hints: [
              "The milkiness is insoluble CaCO₃.",
              "Excess CO₂ converts it to a soluble compound.",
              "Calcium hydrogencarbonate is soluble in water.",
            ],
          },
          {
            id: "chem-analysis-bm4-09",
            question: "A solid effervesces with dilute hydrochloric acid; the gas turns limewater milky. The remaining solution gives a white precipitate with acidified silver nitrate. Which compound is the solid most likely to be?",
            options: [
              "Sodium sulfate",
              "Calcium carbonate plus a chloride, e.g. a carbonate/chloride mixture",
              "Potassium nitrate",
              "Zinc bromide",
            ],
            answerIndex: 1,
            explanation: "Effervescence giving a gas that turns limewater milky shows a carbonate (CO₂ released). The white precipitate with acidified silver nitrate shows chloride. So the solid contains both carbonate and chloride. Sulfate, nitrate and bromide do not fit both observations.",
            guideRef: "Identifying Anions",
            difficulty: "challenge",
            hints: [
              "Interpret each test separately: the gas test and the precipitate test.",
              "Effervescence + milky limewater → carbonate.",
              "White precipitate with acidified AgNO₃ → chloride.",
            ],
            strategy: "Treat each observation as one piece of evidence, then combine to deduce both ions.",
          },
          {
            id: "chem-analysis-bm4-10",
            question: "A student has two unlabelled gas jars; one contains hydrogen and the other carbon dioxide. Which single test reliably tells them apart?",
            options: [
              "Both give a squeaky pop, so smell them",
              "Apply a lit splint: hydrogen gives a squeaky pop, CO₂ extinguishes the splint",
              "Both turn limewater milky",
              "Hold damp red litmus in each",
            ],
            answerIndex: 1,
            explanation: "A lit splint distinguishes them: hydrogen ignites with a squeaky pop, whereas CO₂ does not burn and extinguishes the splint. Only CO₂ turns limewater milky, and neither affects red litmus strongly, so the splint test is the clean single test.",
            guideRef: "Identifying Gases",
            difficulty: "challenge",
            hints: [
              "Think which gas is flammable and which is not.",
              "Hydrogen burns; CO₂ puts flames out.",
              "A lit splint gives opposite results for the two gases.",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      // ── QA PAPER 1 ── purity and separation
      {
        id: "chem-analysis-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Purity, separation techniques and identifying water.",
        questions: [
          {
            id: "chem-analysis-bq1-01",
            question: "Define what is meant by a 'pure substance' in chemistry, and state the two physical measurements used to test purity. [3 marks]",
            marks: 3,
            modelAnswer: "A pure substance contains only one type of particle — a single element or a single compound, with nothing else mixed in. Purity is tested by measuring (1) the melting point — a pure solid melts sharply at one fixed temperature — and (2) the boiling point — a pure liquid boils at one fixed temperature at a given pressure.",
            markScheme: [
              "Pure substance = only one element / one compound (single type of particle) [1]",
              "Melting point used to test purity (sharp/fixed for pure) [1]",
              "Boiling point used to test purity (sharp/fixed for pure) [1]",
            ],
            commonError: "Using the everyday meaning of 'pure' (e.g. natural or unadulterated) rather than the chemical definition of one type of particle.",
            guideRef: "Purity and Why It Matters",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bq1-02",
            question: "Describe how filtration separates an insoluble solid from a liquid. Name the solid and liquid fractions. [3 marks]",
            marks: 3,
            modelAnswer: "The mixture is poured through filter paper held in a filter funnel over a beaker. The filter paper has tiny pores that let liquid particles through but trap the larger insoluble solid particles. The solid left on the filter paper is called the residue, and the liquid that passes through is called the filtrate.",
            markScheme: [
              "Pour mixture through filter paper in a funnel [1]",
              "Solid trapped on the paper = residue [1]",
              "Liquid passing through = filtrate [1]",
            ],
            commonError: "Swapping the terms 'residue' and 'filtrate', or not naming both fractions.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bq1-03",
            question: "A student is given a sample of liquid and asked to show that it contains water and then to show whether it is pure water. (a) Describe a chemical test that shows water is present, with the expected result. [2 marks] (b) Explain why this test alone does NOT prove the liquid is pure water, and state what measurement would. [2 marks]",
            marks: 4,
            modelAnswer: "(a) Add the liquid to anhydrous (white) copper(II) sulfate; if water is present it turns blue. (Alternatively, add the liquid to blue cobalt(II) chloride paper, which turns pink.) (b) These tests only show that water is PRESENT; they do not show that the liquid is ONLY water. A solution such as salt water would also turn the copper(II) sulfate blue. To prove purity, measure the boiling point — pure water boils at exactly 100 °C at standard atmospheric pressure (or freezes/melts sharply at 0 °C); any impurity would raise the boiling point.",
            markScheme: [
              "Test: anhydrous copper(II) sulfate / cobalt(II) chloride paper [1]",
              "Result: white CuSO4 turns blue / blue cobalt chloride turns pink [1]",
              "Test shows water present but not that it is pure / impure solutions also turn it blue [1]",
              "Measure boiling point = 100 °C (or freezing point 0 °C) to prove purity [1]",
            ],
            commonError: "Claiming the colour change proves the liquid is pure water; it only proves water is present.",
            guideRef: "Purity and Why It Matters",
            difficulty: "core",
            hints: [
              "Recall a reagent that changes colour specifically with water.",
              "Distinguish 'water is present' from 'this is pure water'.",
              "Purity is judged by a fixed physical constant such as boiling point.",
              "Pure water boils at 100 °C at standard pressure.",
            ],
          },
          {
            id: "chem-analysis-bq1-04",
            question: "Crystallisation is used to obtain pure crystals of copper(II) sulfate from its solution. Describe the steps, and explain why slow cooling and avoiding evaporation to dryness give a purer product. [5 marks]",
            marks: 5,
            modelAnswer: "Heat the solution gently in an evaporating dish to evaporate some of the water, concentrating it until a saturated solution forms (test by dipping in a cold glass rod — crystals form on it). Stop heating and leave the solution to cool slowly. As it cools, copper(II) sulfate becomes less soluble and crystallises out. Filter to collect the crystals, wash with a little cold distilled water, and dry between filter papers or in a warm oven. Slow cooling lets fewer, larger crystals grow and excludes impurity molecules from the regular lattice, giving purer crystals. Evaporating to dryness is avoided because it would leave ALL dissolved impurities behind in the solid and can decompose hydrated salts.",
            markScheme: [
              "Heat to evaporate some solvent / form a saturated solution [1]",
              "Cool the solution (slowly) to crystallise [1]",
              "Filter, wash with cold water and dry the crystals [1]",
              "Slow cooling gives larger, purer crystals / excludes impurities from lattice [1]",
              "Evaporating to dryness leaves impurities behind / can decompose the salt [1]",
            ],
            commonError: "Writing 'evaporate to dryness' as the final step, which gives an impure product and may decompose the salt.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "core",
            hints: [
              "Concentrate the solution first, then cool.",
              "Test for saturation with a cold glass rod.",
              "Slow cooling controls crystal size and purity.",
              "Explain why drying to completeness keeps impurities in.",
            ],
            strategy: "Sequence the practical steps, then justify the two conditions the question highlights.",
          },
          {
            id: "chem-analysis-bq1-05",
            question: "Explain how a fractionating column allows two liquids with close boiling points to be separated, when simple distillation cannot. [4 marks]",
            marks: 4,
            modelAnswer: "Simple distillation provides only one stage of vapourisation and condensation, so when two liquids have boiling points close together the vapour collected still contains a significant amount of the less volatile liquid — the separation is poor. A fractionating column is a tall tube packed with glass beads or plates that provides a large surface area and a temperature gradient (hottest at the bottom, coolest at the top). As vapour rises, it repeatedly condenses on the packing and re-evaporates. Each condensation–evaporation cycle enriches the rising vapour in the more volatile component (the one with the lower boiling point). After many cycles, nearly pure vapour of the more volatile liquid reaches the top and is condensed and collected, while the less volatile liquid condenses lower down and runs back into the flask.",
            markScheme: [
              "Simple distillation = single stage, poor separation for close boiling points [1]",
              "Column gives large surface area / temperature gradient (cooler near top) [1]",
              "Repeated condensation and re-evaporation up the column [1]",
              "Each cycle enriches vapour in the more volatile (lower b.p.) component [1]",
            ],
            commonError: "Stating that the column 'heats the liquids to different temperatures' rather than describing repeated condensation and re-evaporation cycles.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "core",
            hints: [
              "Explain why one stage is not enough for close boiling points.",
              "Describe the temperature gradient up the column.",
              "Each cycle is one condensation followed by re-evaporation.",
              "Link the cycles to enrichment of the more volatile liquid.",
            ],
          },
          {
            id: "chem-analysis-bq1-06",
            question: "Two solid samples of the same compound are claimed to be pure. Sample A melts at 80 °C exactly; sample B melts over 72–78 °C. (a) State which sample is purer and justify your answer. [2 marks] (b) Explain, in terms of the crystal lattice, why impurities affect the melting point in this way. [2 marks]",
            marks: 4,
            modelAnswer: "(a) Sample A is purer because it melts sharply at a single fixed temperature (80 °C). Sample B melts over a depressed and broadened range (72–78 °C), which is the signature of impurity. (b) In a pure solid the particles are arranged in a regular, repeating crystal lattice held together by uniform forces, so they all break free at one temperature. Impurity particles disrupt this regular lattice, so less energy is needed for melting to begin (the melting point is depressed) and, because the disruption varies, melting occurs over a range rather than at a single sharp temperature.",
            markScheme: [
              "Sample A is purer [1]",
              "Justification: A melts sharply at one temperature / B melts over a depressed, broad range [1]",
              "Impurities disrupt the regular crystal lattice [1]",
              "Less energy needed so melting point lowered and spread over a range [1]",
            ],
            commonError: "Saying impurities raise the melting point (they raise boiling point but depress melting point).",
            guideRef: "Purity and Why It Matters",
            difficulty: "core",
            hints: [
              "A sharp melting point indicates purity.",
              "A broad, lowered range indicates impurity.",
              "Think about how a regular lattice melts at one temperature.",
              "Impurities make the lattice irregular.",
            ],
          },
          {
            id: "chem-analysis-bq1-07",
            question: "A mixture contains rock salt (a mixture of sodium chloride and insoluble sand). Describe, with reasons, the full sequence of practical steps to obtain pure dry sodium chloride crystals. [6 marks]",
            marks: 6,
            modelAnswer: "1. Crush the rock salt and add it to water, stirring to dissolve the sodium chloride (it is soluble); the sand does not dissolve. 2. Filter the mixture: the sand stays on the filter paper as the residue, and the salt solution passes through as the filtrate. 3. Pour the filtrate (salt solution) into an evaporating dish and heat to evaporate some of the water, concentrating the solution until it is saturated. 4. Stop heating before all the water has gone and leave the solution to cool, allowing sodium chloride crystals to form. 5. Filter off the crystals (or pour off the remaining liquid), wash with a small amount of cold distilled water to remove surface impurities, and dry between filter papers or in a warm oven to give pure dry sodium chloride.",
            markScheme: [
              "Dissolve the salt in water / sand stays undissolved [1]",
              "Filter: sand = residue, salt solution = filtrate [1]",
              "Heat filtrate to evaporate some water / concentrate the solution [1]",
              "Stop before dryness and cool to crystallise [1]",
              "Filter / separate the crystals [1]",
              "Wash with cold water and dry [1]",
            ],
            commonError: "Evaporating the solution to dryness, which leaves any dissolved impurities in the salt and gives a less pure product.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "challenge",
            hints: [
              "Separate by the difference in solubility first.",
              "Filtration removes the insoluble sand.",
              "Recover the dissolved salt by crystallisation, not evaporation to dryness.",
              "Finish with washing and drying.",
            ],
            strategy: "Order the techniques (dissolve → filter → crystallise → wash → dry) and justify each by the property it exploits.",
          },
          {
            id: "chem-analysis-bq1-08",
            question: "In a simple distillation of inky water to obtain pure water: (a) state where the thermometer bulb must be placed and why. [2 marks] (b) explain the purpose of the condenser. [2 marks] (c) the collected distillate is tested with anhydrous cobalt(II) chloride paper, which turns from blue to pink, and boils at exactly 100 °C. What do these two results together show? [2 marks]",
            marks: 6,
            modelAnswer: "(a) The thermometer bulb must be level with the side-arm (the outlet to the condenser) so that it measures the temperature of the vapour leaving the flask — i.e. the boiling point of the substance being collected — not the temperature of the boiling liquid. (b) The condenser cools the vapour so that it condenses back to a liquid (the distillate). Cold water flows through the outer jacket, entering at the bottom and leaving at the top, to keep the inner tube cold for efficient condensation. (c) The cobalt(II) chloride paper turning blue to pink shows that water is present; the sharp boiling point of exactly 100 °C at standard pressure shows the distillate is pure water (an impurity would raise the boiling point). Together they show the distillate is pure water.",
            markScheme: [
              "Thermometer bulb level with the side-arm / outlet to condenser [1]",
              "So it reads the vapour (boiling) temperature of the distillate [1]",
              "Condenser cools vapour so it condenses to liquid [1]",
              "Cold water in the jacket (in at bottom, out at top) for efficient cooling [1]",
              "Cobalt chloride blue to pink shows water present [1]",
              "Boiling at exactly 100 °C shows it is pure water [1]",
            ],
            commonError: "Placing the thermometer bulb in the liquid (it then reads the flask temperature, not the vapour), or treating the water test alone as proof of purity.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "challenge",
            hints: [
              "The thermometer should sense the vapour going to the condenser.",
              "The condenser's job is to turn vapour back into liquid.",
              "One result shows water is present; the other shows it is pure.",
              "A fixed boiling point of 100 °C indicates purity.",
            ],
            strategy: "Separate 'presence of water' (chemical test) from 'purity' (fixed boiling point) when interpreting part (c).",
          },
          {
            id: "chem-analysis-bq1-09",
            question: "Suggest, with reasons, the most suitable technique to separate each of the following: (a) pure water from copper(II) sulfate solution; (b) ethanol from a fermented mixture of ethanol and water; (c) a precipitate of barium sulfate from the solution it formed in. [3 marks]",
            marks: 3,
            modelAnswer: "(a) Simple distillation — the solute (copper(II) sulfate) is a non-volatile dissolved solid, so heating evaporates only the water, which is condensed and collected as pure water. (b) Fractional distillation — ethanol (b.p. 78 °C) and water (b.p. 100 °C) are both volatile liquids with boiling points close enough that a fractionating column is needed for clean separation. (c) Filtration — barium sulfate is an insoluble solid precipitate, so it is trapped as residue on filter paper while the solution passes through as filtrate.",
            markScheme: [
              "(a) Simple distillation (solute non-volatile, only water evaporates) [1]",
              "(b) Fractional distillation (two volatile liquids, close boiling points) [1]",
              "(c) Filtration (insoluble precipitate trapped as residue) [1]",
            ],
            commonError: "Choosing simple distillation for the ethanol/water mixture; their boiling points are close enough that a fractionating column is needed for good separation.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "core",
            hints: [
              "Decide whether the solute is volatile in each case.",
              "Close boiling points need a fractionating column.",
              "An insoluble solid is removed by filtration.",
            ],
          },
          {
            id: "chem-analysis-bq1-10",
            question: "Explain why purity matters in (a) the pharmaceutical industry and (b) industrial reactions that use catalysts. [2 marks]",
            marks: 2,
            modelAnswer: "(a) In the pharmaceutical industry an impure drug could be ineffective or even toxic, so medicines must meet strict purity standards to be safe and to act correctly at the dose given. (b) In industrial reactions, impurities can 'poison' (deactivate) catalysts and reduce the yield, increasing costs; pure reactants protect the catalyst and keep the process efficient.",
            markScheme: [
              "Pharmaceuticals: impurity could make a drug ineffective / toxic / unsafe [1]",
              "Industry: impurities poison catalysts / lower yield / raise cost [1]",
            ],
            commonError: "Giving only a vague statement ('purity is good') without linking to a specific consequence such as toxicity or catalyst poisoning.",
            guideRef: "Purity and Why It Matters",
            difficulty: "warmup",
          },
        ],
      },
      // ── QA PAPER 2 ── chromatography
      {
        id: "chem-analysis-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Paper chromatography: method, Rf calculations and interpretation.",
        questions: [
          {
            id: "chem-analysis-bq2-01",
            question: "State the Rf formula and give two precautions a student must take when setting up a paper chromatogram. [3 marks]",
            marks: 3,
            modelAnswer: "Rf = distance moved by the spot ÷ distance moved by the solvent front (both measured from the pencil baseline). Two precautions: (1) draw the baseline in pencil, not ink, so it does not dissolve and run; (2) make sure the solvent level starts below the baseline so the spots are not washed directly into the solvent.",
            markScheme: [
              "Rf = distance moved by spot ÷ distance moved by solvent front [1]",
              "Precaution 1: pencil baseline (ink would run) [1]",
              "Precaution 2: solvent level below the baseline [1]",
            ],
            commonError: "Inverting the Rf ratio, or measuring distances from the solvent surface rather than the pencil baseline.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bq2-02",
            question: "A chromatogram is run on a black food colouring. The solvent front travels 10.0 cm. Three spots are seen at 2.5 cm, 5.0 cm and 8.0 cm from the baseline. (a) Calculate the Rf value of each spot. [3 marks] (b) What does the presence of three spots tell you about the food colouring? [1 mark]",
            marks: 4,
            modelAnswer: "(a) Rf = distance of spot ÷ distance of solvent front. Spot 1: 2.5 ÷ 10.0 = 0.25. Spot 2: 5.0 ÷ 10.0 = 0.50. Spot 3: 8.0 ÷ 10.0 = 0.80. (b) Three separate spots show the food colouring is a mixture of (at least) three different coloured substances, not a single pure dye.",
            markScheme: [
              "Rf spot 1 = 0.25 [1]",
              "Rf spot 2 = 0.50 [1]",
              "Rf spot 3 = 0.80 [1]",
              "The colouring is a mixture of (at least) three substances [1]",
            ],
            commonError: "Giving Rf values greater than 1 by dividing the solvent distance by the spot distance.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Use Rf = spot distance ÷ solvent-front distance for each spot.",
              "Divide each spot distance by 10.0 cm.",
              "Each spot represents one component.",
            ],
            solutions: [
              {
                label: "Direct ratio for each spot",
                steps: [
                  "Solvent front = 10.0 cm (the denominator for all spots)",
                  "Rf(1) = 2.5 / 10.0 = 0.25",
                  "Rf(2) = 5.0 / 10.0 = 0.50",
                  "Rf(3) = 8.0 / 10.0 = 0.80",
                ],
              },
            ],
          },
          {
            id: "chem-analysis-bq2-03",
            question: "A forensic scientist compares ink from a ransom note with inks from four suspect pens (A–D) by running them side by side on one chromatogram. (a) Why is it valuable to run all the samples on the same sheet at the same time? [2 marks] (b) Suspect pen B produces spots at exactly the same heights as the note's ink. What can be concluded, and what is the limitation of this conclusion? [2 marks]",
            marks: 4,
            modelAnswer: "(a) Running all samples on the same sheet at the same time means they all experience identical conditions — the same solvent, the same paper and the same distance travelled by the solvent front — so their Rf values can be compared directly and fairly. (b) Pen B's ink gives spots at the same heights (same Rf values) as the note's ink, so pen B's ink could be the ink used to write the note — they are very likely the same. The limitation is that two different inks can coincidentally share the same Rf values in one solvent; to be more certain, the comparison should be repeated in a different solvent.",
            markScheme: [
              "Same sheet/run = identical conditions (same solvent, paper, solvent-front distance) [1]",
              "Allows a direct/fair comparison of Rf values [1]",
              "Pen B is (probably) the same ink as the note's ink (matching Rf) [1]",
              "Limitation: different substances can share an Rf; confirm with a second solvent [1]",
            ],
            commonError: "Stating that matching Rf values prove the inks are identical, ignoring that different substances can coincidentally have the same Rf in one solvent.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Think about why identical conditions matter for comparison.",
              "Matching Rf suggests the same substance, but how strong is that proof?",
              "A single solvent match is not conclusive.",
              "A second solvent strengthens the conclusion.",
            ],
          },
          {
            id: "chem-analysis-bq2-04",
            question: "A mixture of amino acids is separated by paper chromatography but the spots are colourless. (a) Explain why a locating agent is needed. [1 mark] (b) Describe how to use ninhydrin to reveal the spots and state the result. [2 marks] (c) The solvent front travelled 14.0 cm and one revealed spot is 5.6 cm from the baseline. Calculate its Rf value. [2 marks]",
            marks: 5,
            modelAnswer: "(a) The amino acids are colourless, so the separated spots cannot be seen on the paper; a locating agent is needed to make them visible. (b) Spray the dried chromatogram with ninhydrin solution and then warm it (e.g. in an oven or with a hair dryer); the amino-acid spots develop a purple/brown colour where they are located. (c) Rf = distance moved by spot ÷ distance moved by solvent front = 5.6 ÷ 14.0 = 0.40.",
            markScheme: [
              "Spots are colourless / cannot be seen, so a locating agent is needed [1]",
              "Spray with ninhydrin and warm/heat [1]",
              "Purple/brown spots appear [1]",
              "Rf = 5.6 / 14.0 [1]",
              "Rf = 0.40 [1]",
            ],
            commonError: "Forgetting that ninhydrin must be warmed/heated to develop the colour, or measuring the spot distance from the wrong line.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Colourless spots cannot be located by eye.",
              "Ninhydrin is sprayed on then warmed.",
              "The amino-acid colour is purple/brown.",
              "Apply Rf = spot ÷ solvent front for part (c).",
            ],
            solutions: [
              {
                label: "Rf calculation",
                steps: [
                  "Rf = distance moved by spot / distance moved by solvent front",
                  "Rf = 5.6 cm / 14.0 cm",
                  "Rf = 0.40 (no units, since it is a ratio of two lengths)",
                ],
              },
            ],
          },
          {
            id: "chem-analysis-bq2-05",
            question: "Substance X gives Rf = 0.60 in solvent 1. A chromatogram of an unknown mixture in solvent 1 shows a solvent front at 12.5 cm and a spot at 7.5 cm. (a) Calculate the Rf of that spot. [2 marks] (b) Could that spot be substance X? Justify your answer. [1 mark] (c) The student then runs the mixture in a different solvent and finds the same spot no longer matches X's Rf. What does this reveal? [2 marks]",
            marks: 5,
            modelAnswer: "(a) Rf = 7.5 ÷ 12.5 = 0.60. (b) Yes — the spot's Rf (0.60) is the same as substance X's Rf (0.60) in the same solvent, so the spot could be substance X. (c) In the second solvent the spot's Rf no longer matches X's, which shows the spot is NOT actually substance X; the earlier match in solvent 1 was a coincidence. This is why identity should be confirmed in more than one solvent.",
            markScheme: [
              "Rf = 7.5 / 12.5 = 0.60 [1] (working shown) [1]",
              "Yes, could be X — matching Rf in the same solvent [1]",
              "Second solvent: no match means it is NOT X / first match was coincidental [1]",
              "Confirms why two solvents are used for reliable identification [1]",
            ],
            commonError: "Concluding the spot definitely IS substance X from a single-solvent match, when a different solvent can disprove it.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "challenge",
            hints: [
              "Calculate the Rf in solvent 1 first.",
              "Compare it with X's Rf in the same solvent.",
              "A single match is only provisional evidence.",
              "A mismatch in a second solvent is decisive.",
            ],
            strategy: "Treat a single-solvent Rf match as provisional; require agreement in a second solvent for identification.",
            solutions: [
              {
                label: "Rf and interpretation",
                steps: [
                  "Rf = spot distance / solvent-front distance = 7.5 / 12.5 = 0.60",
                  "This equals X's Rf (0.60) in solvent 1, so the spot could be X",
                  "In a second solvent the Rf values differ, so the spot is not X — the first match was coincidental",
                ],
              },
            ],
          },
          {
            id: "chem-analysis-bq2-06",
            question: "Describe, step by step, how you would set up and run a paper chromatography experiment to find out how many dyes are present in a sample of green ink. Include how you would interpret the result. [5 marks]",
            marks: 5,
            modelAnswer: "1. Draw a pencil baseline near the bottom of a strip of chromatography paper. 2. Use a fine capillary tube to place a small, concentrated spot of the green ink on the baseline and allow it to dry. 3. Pour a suitable solvent into a tank/beaker so the solvent level is below the baseline, then stand the paper in the tank (baseline above the solvent) and cover it. 4. Leave the solvent to rise up the paper by capillary action; it carries the dyes up at different rates. 5. When the solvent front nears the top, remove the paper, mark the solvent front in pencil and let it dry. To interpret: count the spots — the number of separate spots equals the number of different dyes in the green ink (one spot would mean a single pure dye; several spots mean a mixture).",
            markScheme: [
              "Pencil baseline near the bottom of the paper [1]",
              "Place a small spot of ink on the baseline and let it dry [1]",
              "Solvent level below the baseline; stand paper in covered tank [1]",
              "Allow solvent to rise, then mark the solvent front and dry [1]",
              "Count spots = number of different dyes (one spot = pure, several = mixture) [1]",
            ],
            commonError: "Letting the solvent rise above the level of the baseline at the start, or using ink rather than pencil for the baseline.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Begin with a pencil baseline and a small ink spot.",
              "The solvent must start below the baseline.",
              "Cover the tank and let the solvent rise.",
              "The number of spots tells you the number of dyes.",
            ],
            strategy: "Describe the method as an ordered list, then state the interpretation rule (spots = components).",
          },
          {
            id: "chem-analysis-bq2-07",
            question: "Explain, in terms of the stationary phase and the mobile phase, why different substances travel different distances up the chromatography paper. [3 marks]",
            marks: 3,
            modelAnswer: "The paper (cellulose) is the stationary phase and the solvent is the mobile phase. Each substance reaches a balance between being attracted to (adsorbed on) the stationary paper and dissolving in the moving solvent. A substance more strongly attracted to the paper, or less soluble in the solvent, is held back and travels a short distance (low Rf). A substance more soluble in the solvent and less attracted to the paper is carried further up (high Rf). Because different substances strike this balance differently, they separate into spots at different heights.",
            markScheme: [
              "Paper = stationary phase; solvent = mobile phase [1]",
              "Each substance balances attraction to paper vs solubility in solvent [1]",
              "More soluble / less attracted to paper travels further (higher Rf); the reverse travels less [1]",
            ],
            commonError: "Saying heavier or larger molecules always travel less — separation depends on attraction to the phases and solubility, not simply on size.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Name the two phases first.",
              "Each molecule is pulled by the solvent and held by the paper.",
              "Greater solubility in the solvent means a longer journey up the paper.",
            ],
          },
          {
            id: "chem-analysis-bq2-08",
            question: "A student measures a spot at 6.0 cm but forgets to mark the solvent front before it dried, so they cannot measure it. They know the reference substance with Rf = 0.50 produced a spot at 5.0 cm on the SAME paper. (a) Use the reference to find how far the solvent front travelled. [2 marks] (b) Hence calculate the Rf of the unknown spot at 6.0 cm. [2 marks]",
            marks: 4,
            modelAnswer: "(a) For the reference: Rf = spot ÷ solvent front, so solvent front = spot ÷ Rf = 5.0 ÷ 0.50 = 10.0 cm. (b) For the unknown spot on the same paper the solvent front is also 10.0 cm, so Rf = 6.0 ÷ 10.0 = 0.60.",
            markScheme: [
              "Rearrange: solvent front = reference spot ÷ reference Rf = 5.0 / 0.50 [1]",
              "Solvent front = 10.0 cm [1]",
              "Rf(unknown) = 6.0 / 10.0 [1]",
              "Rf(unknown) = 0.60 [1]",
            ],
            commonError: "Trying to compare the two spot distances directly (6.0 vs 5.0) without first finding the solvent-front distance.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "challenge",
            hints: [
              "Use the reference's known Rf to back-calculate the solvent front.",
              "Rearrange Rf = spot ÷ front to make front the subject.",
              "The solvent front is the same for both spots on one paper.",
              "Then apply Rf = spot ÷ front for the unknown.",
            ],
            strategy: "Recover the missing denominator (solvent front) from the reference spot, then reuse it for the unknown.",
            solutions: [
              {
                label: "Back-calculate the solvent front",
                steps: [
                  "Reference: Rf = spot / front → front = spot / Rf = 5.0 / 0.50 = 10.0 cm",
                  "Same paper, so unknown also has front = 10.0 cm",
                  "Rf(unknown) = 6.0 / 10.0 = 0.60",
                ],
              },
            ],
          },
          {
            id: "chem-analysis-bq2-09",
            question: "Give two reasons why an Rf value, rather than the raw distance a spot travels, is used to identify a substance. [2 marks]",
            marks: 2,
            modelAnswer: "1. The raw distance a spot travels depends on how far the solvent front is allowed to run, which varies between experiments, whereas Rf divides by the solvent-front distance and so stays constant for a given substance and solvent. 2. Because Rf is a fixed ratio for a substance in a particular solvent, it can be compared with database or reference values to identify the substance, even if the experiments were run on different sized papers.",
            markScheme: [
              "Raw distance varies with how far the solvent runs; Rf is a constant ratio [1]",
              "Rf can be compared with reference/database values for identification (independent of paper size) [1]",
            ],
            commonError: "Giving only one reason, or confusing Rf (a reproducible ratio) with absolute distance (which is experiment-dependent).",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "warmup",
            hints: [
              "Think about what changes if you run the solvent further.",
              "Rf cancels out the solvent-front distance.",
              "A constant value can be matched to references.",
            ],
          },
          {
            id: "chem-analysis-bq2-10",
            question: "A colourless mixture is separated by chromatography and viewed under a UV lamp; two dark spots appear. (a) Explain how the UV lamp acts as a locating agent here. [2 marks] (b) Suggest one advantage of using a UV lamp instead of a chemical locating agent such as ninhydrin. [1 mark]",
            marks: 3,
            modelAnswer: "(a) The chromatography paper contains a fluorescent dye that glows under UV light. The separated spots absorb the UV light instead of fluorescing, so they appear as dark patches against the bright glowing background, revealing where the colourless substances are. (b) A UV lamp does not chemically react with or alter the substances, so the sample is not destroyed and can be recovered or tested further (and no spraying reagent is needed).",
            markScheme: [
              "Paper fluoresces under UV / spots absorb UV and appear dark [1]",
              "Dark spots show the position of the colourless substances [1]",
              "Advantage: non-destructive / does not chemically change the sample (or: no reagent needed) [1]",
            ],
            commonError: "Saying the spots glow brightly under UV; usually the background fluoresces and the spots appear dark by absorbing the UV.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "challenge",
            hints: [
              "The paper glows under UV; the spots do not.",
              "Spots appear dark because they absorb UV.",
              "Compare a physical method with a chemical reagent for one advantage.",
            ],
          },
        ],
      },
      // ── QA PAPER 3 ── cation identification
      {
        id: "chem-analysis-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Identifying cations by NaOH, aqueous ammonia and flame tests.",
        questions: [
          {
            id: "chem-analysis-bq3-01",
            question: "State the flame test colours for: (a) sodium, (b) potassium, (c) copper(II), (d) calcium. [4 marks]",
            marks: 4,
            modelAnswer: "(a) Sodium (Na⁺) — yellow. (b) Potassium (K⁺) — lilac. (c) Copper(II) (Cu²⁺) — blue-green. (d) Calcium (Ca²⁺) — orange-red.",
            markScheme: [
              "Na⁺ = yellow [1]",
              "K⁺ = lilac [1]",
              "Cu²⁺ = blue-green [1]",
              "Ca²⁺ = orange-red [1]",
            ],
            commonError: "Confusing potassium (lilac) with sodium (yellow), or giving 'green' for copper instead of blue-green.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bq3-02",
            question: "A solution is divided into two portions. Aqueous sodium hydroxide is added to the first and aqueous ammonia to the second. Both give a pale blue precipitate, and with the second portion the precipitate dissolves in excess to give a deep blue solution. (a) Identify the cation. [1 mark] (b) Write the ionic equation for the reaction with hydroxide ions. [2 marks] (c) State what is seen when excess sodium hydroxide is added to the first portion. [1 mark]",
            marks: 4,
            modelAnswer: "(a) The cation is copper(II), Cu²⁺. (b) Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s). (c) When excess sodium hydroxide is added to the first portion, the blue precipitate does NOT dissolve (it stays as a blue precipitate) — unlike with excess ammonia, where it would dissolve to a deep blue solution.",
            markScheme: [
              "Cu²⁺ / copper(II) [1]",
              "Ionic equation Cu²⁺ + 2OH⁻ → Cu(OH)2 (balanced) [1]",
              "Correct state symbols (aq, aq, s) [1]",
              "Blue precipitate does not dissolve in excess NaOH [1]",
            ],
            commonError: "Stating the precipitate dissolves in excess NaOH — with copper it only dissolves in excess AMMONIA, not excess sodium hydroxide.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "The deep blue solution in excess ammonia identifies the metal.",
              "Copper(II) is the 2+ ion, so balance with two OH⁻.",
              "Distinguish behaviour in excess NaOH from excess ammonia.",
              "Copper hydroxide does not dissolve in excess NaOH.",
            ],
          },
          {
            id: "chem-analysis-bq3-03",
            question: "Explain how aqueous sodium hydroxide alone can be used to distinguish between solutions of zinc nitrate, calcium nitrate and aluminium nitrate is NOT fully possible, and state which additional reagent resolves the ambiguity. [4 marks]",
            marks: 4,
            modelAnswer: "All three of Zn²⁺, Ca²⁺ and Al³⁺ give a WHITE precipitate with sodium hydroxide, so the initial colour does not distinguish them. Testing solubility in EXCESS sodium hydroxide helps partly: Ca²⁺ stays as a white precipitate (insoluble in excess), so calcium can be identified; but BOTH Zn²⁺ and Al³⁺ dissolve in excess sodium hydroxide, so NaOH alone cannot tell zinc from aluminium. The additional reagent is aqueous ammonia: with excess ammonia the zinc precipitate dissolves (colourless solution) but the aluminium precipitate does NOT dissolve, distinguishing Zn²⁺ from Al³⁺.",
            markScheme: [
              "All three give white precipitates with NaOH (colour does not distinguish) [1]",
              "In excess NaOH: Ca²⁺ stays (insoluble), so calcium identified [1]",
              "Both Zn²⁺ and Al³⁺ dissolve in excess NaOH, so they cannot be told apart by NaOH alone [1]",
              "Use excess aqueous ammonia: Zn²⁺ dissolves, Al³⁺ does not [1]",
            ],
            commonError: "Claiming aluminium dissolves in excess ammonia — it does not; only zinc dissolves in excess ammonia among these.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "challenge",
            hints: [
              "Note all three give a white precipitate at first.",
              "Use solubility in excess NaOH to pick out calcium.",
              "Zinc and aluminium both dissolve in excess NaOH — a problem.",
              "Excess ammonia separates zinc (dissolves) from aluminium (does not).",
            ],
            strategy: "Show what NaOH can and cannot resolve, then bring in ammonia to break the remaining tie.",
          },
          {
            id: "chem-analysis-bq3-04",
            question: "Describe the procedure for carrying out a flame test correctly, and explain why the wire is cleaned with concentrated hydrochloric acid between samples. [4 marks]",
            marks: 4,
            modelAnswer: "Clean a piece of nichrome (or platinum) wire by dipping it in concentrated hydrochloric acid and holding it in the hot (blue) Bunsen flame until no colour is given to the flame. Dip the clean wire into the concentrated acid again and then into the solid sample (or its solution) so some sticks to the wire. Hold the wire at the edge of the blue Bunsen flame and observe the flame colour. The wire is cleaned with concentrated hydrochloric acid between samples to remove traces of previous ions — especially sodium, whose persistent yellow colour would otherwise mask or give a false flame-test result; the acid also forms volatile metal chlorides that vaporise readily in the flame.",
            markScheme: [
              "Clean wire in concentrated HCl and heat until no flame colour [1]",
              "Dip wire in acid then in the sample; hold in the (blue) Bunsen flame [1]",
              "Cleaning removes traces of previous ions / contamination [1]",
              "Especially sodium (persistent yellow) which would mask the true colour [1]",
            ],
            commonError: "Not mentioning that sodium contamination in particular gives a persistent yellow flame that masks other colours.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "Start with cleaning the wire until the flame is colourless.",
              "Use the acid to pick up the sample, then heat in the flame.",
              "Explain why contamination is a problem.",
              "Sodium is the worst offender for masking colours.",
            ],
          },
          {
            id: "chem-analysis-bq3-05",
            question: "Write balanced ionic equations, with state symbols, for the formation of the metal hydroxide precipitate from: (a) iron(II) ions, (b) iron(III) ions, (c) aluminium ions, reacting with hydroxide ions. [3 marks]",
            marks: 3,
            modelAnswer: "(a) Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s). (b) Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s). (c) Al³⁺(aq) + 3OH⁻(aq) → Al(OH)₃(s).",
            markScheme: [
              "Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)2(s) [1]",
              "Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)3(s) [1]",
              "Al³⁺(aq) + 3OH⁻(aq) → Al(OH)3(s) [1]",
            ],
            commonError: "Using the wrong number of hydroxide ions for the metal charge (e.g. writing Fe³⁺ + 2OH⁻), giving an unbalanced equation.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "warmup",
            hints: [
              "Match the number of OH⁻ to the charge on the metal ion.",
              "Iron(II) is 2+, iron(III) and aluminium are 3+.",
              "Include (aq) for ions and (s) for the precipitate.",
            ],
          },
          {
            id: "chem-analysis-bq3-06",
            question: "A salt contains an ammonium ion. (a) Describe the test that confirms the ammonium ion, including reagent, condition and the positive result. [3 marks] (b) Write the equation for the reaction of ammonium ions with hydroxide ions to form ammonia gas. [2 marks]",
            marks: 5,
            modelAnswer: "(a) Add aqueous sodium hydroxide to the salt and warm the mixture gently. If ammonium ions are present, ammonia gas is given off, which is detected by holding a piece of damp red litmus paper at the mouth of the tube — it turns blue. (b) NH₄⁺(aq) + OH⁻(aq) → NH₃(g) + H₂O(l).",
            markScheme: [
              "Add sodium hydroxide / NaOH(aq) [1]",
              "Warm the mixture; test gas with damp red litmus [1]",
              "Damp red litmus turns blue (ammonia evolved) [1]",
              "Equation NH4⁺ + OH⁻ → NH3 + H2O (balanced) [1]",
              "Correct state symbols / NH3 as gas [1]",
            ],
            commonError: "Forgetting to WARM the mixture, or not specifying that the litmus paper must be DAMP for the test to work.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "The reagent is the same NaOH used for other cations.",
              "Ammonium needs warming to release the gas.",
              "Detect the gas with damp red litmus paper.",
              "Balance NH4⁺ + OH⁻ to give ammonia and water.",
            ],
          },
          {
            id: "chem-analysis-bq3-07",
            question: "Two test tubes contain colourless solutions, one of magnesium chloride giving a white precipitate with NaOH and one of zinc chloride. Both give white precipitates with sodium hydroxide. Describe how adding EXCESS of each named reagent lets you decide which tube is zinc chloride. [4 marks]",
            marks: 4,
            modelAnswer: "Add aqueous sodium hydroxide to each: both form a white precipitate. Now add EXCESS sodium hydroxide to each: the zinc precipitate dissolves to give a colourless solution (zinc hydroxide is amphoteric), while the magnesium precipitate does NOT dissolve and stays white. The tube whose precipitate dissolves in excess sodium hydroxide is the zinc chloride. (Excess aqueous ammonia gives the same distinction: zinc hydroxide dissolves in excess ammonia, magnesium hydroxide does not.)",
            markScheme: [
              "Both give a white precipitate with NaOH(aq) [1]",
              "Add excess NaOH: zinc precipitate dissolves [1]",
              "Magnesium precipitate does not dissolve / stays white [1]",
              "Tube whose precipitate dissolves in excess is zinc chloride [1]",
            ],
            commonError: "Assuming the precipitate colour distinguishes them; both are white, so the test is solubility in excess reagent.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "challenge",
            hints: [
              "Both precipitates are white initially.",
              "The difference shows only when you add excess.",
              "Zinc hydroxide is amphoteric and dissolves in excess NaOH.",
              "Magnesium hydroxide stays as a white precipitate.",
            ],
            strategy: "Reach for solubility in excess when two cations share the same precipitate colour.",
          },
          {
            id: "chem-analysis-bq3-08",
            question: "A student finds a solution gives a green precipitate with sodium hydroxide that does not dissolve in excess. On standing in air, the precipitate slowly develops a red-brown colour. (a) Identify the original cation and explain the colour change. [3 marks] (b) State how aqueous ammonia would behave with this same cation. [1 mark]",
            marks: 4,
            modelAnswer: "(a) The original cation is iron(II), Fe²⁺, which gives a green precipitate of Fe(OH)₂ that is insoluble in excess NaOH. On standing in air, oxygen oxidises the iron(II) to iron(III), so the precipitate turns red-brown as Fe(OH)₃ forms at the surface. (b) Aqueous ammonia would also give a green precipitate of iron(II) hydroxide, which does NOT dissolve in excess ammonia.",
            markScheme: [
              "Cation is Fe²⁺ / iron(II) (green precipitate) [1]",
              "Green precipitate insoluble in excess NaOH [1]",
              "Oxidised by oxygen in air to Fe³⁺ → red-brown Fe(OH)3 [1]",
              "Ammonia also gives green precipitate, insoluble in excess [1]",
            ],
            commonError: "Identifying the ion as iron(III) because of the red-brown colour seen later; the ORIGINAL ion is iron(II) (green) that is then oxidised.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "challenge",
            hints: [
              "The first colour seen (green) identifies the ion.",
              "Red-brown is the iron(III) colour.",
              "Air provides oxygen to oxidise iron(II).",
              "Ammonia mirrors NaOH for iron(II): green, insoluble in excess.",
            ],
          },
          {
            id: "chem-analysis-bq3-09",
            question: "Explain why aluminium hydroxide dissolves in excess sodium hydroxide but calcium hydroxide does not. [2 marks]",
            marks: 2,
            modelAnswer: "Aluminium hydroxide, Al(OH)₃, is amphoteric: it can react as an acid towards excess hydroxide ions, forming the soluble aluminate ion (for example [Al(OH)₄]⁻), so the precipitate dissolves in excess sodium hydroxide. Calcium hydroxide is a simple basic hydroxide and cannot react further with hydroxide ions, so it remains an insoluble white precipitate in excess sodium hydroxide.",
            markScheme: [
              "Al(OH)3 is amphoteric / reacts as an acid with excess OH⁻ to form a soluble aluminate ion [1]",
              "Ca(OH)2 is simply basic and does not react further, so stays insoluble [1]",
            ],
            commonError: "Saying calcium hydroxide is insoluble 'because it is heavier' or similar; the real reason is that it is not amphoteric.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "Recall the term 'amphoteric'.",
              "An amphoteric hydroxide can react with excess alkali.",
              "Calcium hydroxide is only basic, so it cannot dissolve in excess NaOH.",
            ],
          },
          {
            id: "chem-analysis-bq3-10",
            question: "Solution Q gives a white precipitate with aqueous ammonia that does NOT dissolve in excess ammonia, but the same white precipitate DOES dissolve when excess sodium hydroxide is used instead. A flame test gives no characteristic colour. Identify the cation and justify each observation. [4 marks]",
            marks: 4,
            modelAnswer: "The cation is aluminium, Al³⁺. With aqueous ammonia it forms a white precipitate of Al(OH)₃ that does NOT dissolve in excess ammonia (aluminium hydroxide is not soluble in ammonia). With sodium hydroxide it also forms a white Al(OH)₃ precipitate, but this DOES dissolve in excess NaOH because Al(OH)₃ is amphoteric and reacts with excess hydroxide to form the soluble aluminate ion. Aluminium does not give a characteristic flame colour, which is consistent with the 'no colour' flame-test result. (Zinc is ruled out because zinc dissolves in excess ammonia, which Al³⁺ does not.)",
            markScheme: [
              "Cation is Al³⁺ / aluminium [1]",
              "White precipitate with ammonia that does NOT dissolve in excess ammonia [1]",
              "Dissolves in excess NaOH because Al(OH)3 is amphoteric (forms aluminate) [1]",
              "No flame colour is consistent with aluminium (and rules out Zn, which dissolves in excess ammonia) [1]",
            ],
            commonError: "Choosing zinc; zinc dissolves in EXCESS AMMONIA, but here the precipitate does not dissolve in excess ammonia, so it must be aluminium.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "challenge",
            hints: [
              "Both NaOH and ammonia give white precipitates — focus on solubility in excess.",
              "Dissolves in excess NaOH but NOT in excess ammonia — which ion?",
              "Zinc dissolves in BOTH; aluminium dissolves only in excess NaOH.",
              "No flame colour fits aluminium.",
            ],
            strategy: "Use the contrasting solubility in excess NaOH versus excess ammonia to separate aluminium from zinc.",
          },
        ],
      },
      // ── QA PAPER 4 ── anion + gas tests, full identification
      {
        id: "chem-analysis-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Anion tests, gas tests and complete 'identify the salt' problems.",
        questions: [
          {
            id: "chem-analysis-bq4-01",
            question: "State the test and the positive result for each gas: (a) hydrogen, (b) oxygen, (c) carbon dioxide, (d) chlorine. [4 marks]",
            marks: 4,
            modelAnswer: "(a) Hydrogen: hold a lighted splint at the mouth of the tube — a squeaky 'pop' is heard. (b) Oxygen: hold a glowing splint in the gas — it relights. (c) Carbon dioxide: bubble the gas through limewater — the limewater turns milky/cloudy. (d) Chlorine: hold damp litmus paper in the gas — it is bleached (turns white).",
            markScheme: [
              "Hydrogen: lighted splint → squeaky pop [1]",
              "Oxygen: glowing splint → relights [1]",
              "Carbon dioxide: limewater → turns milky [1]",
              "Chlorine: damp litmus → bleached/white [1]",
            ],
            commonError: "Mixing up the splint tests — a lighted splint (pop) for hydrogen versus a glowing splint (relights) for oxygen.",
            guideRef: "Identifying Gases",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bq4-02",
            question: "Describe the test for a carbonate, including the reagent, the gas produced, and how the gas is confirmed. Write the ionic equation for the reaction of a carbonate with dilute acid. [4 marks]",
            marks: 4,
            modelAnswer: "Add dilute acid (e.g. dilute hydrochloric acid) to the solid or solution; if a carbonate is present it effervesces, producing a colourless gas. Bubble this gas through limewater: it turns the limewater milky, confirming the gas is carbon dioxide. Ionic equation: CO₃²⁻(aq) + 2H⁺(aq) → H₂O(l) + CO₂(g).",
            markScheme: [
              "Add dilute acid → effervescence / gas produced [1]",
              "Bubble gas through limewater [1]",
              "Limewater turns milky → confirms CO2 [1]",
              "Ionic equation CO3²⁻ + 2H⁺ → H2O + CO2 (balanced) [1]",
            ],
            commonError: "Not confirming the gas with limewater — effervescence alone does not prove the gas is carbon dioxide.",
            guideRef: "Identifying Anions",
            difficulty: "warmup",
            hints: [
              "Acid on a carbonate gives effervescence.",
              "Identify the gas with limewater.",
              "Milky limewater confirms carbon dioxide.",
              "Balance H⁺ with the 2− carbonate charge in the equation.",
            ],
          },
          {
            id: "chem-analysis-bq4-03",
            question: "Describe how you would test a solution for: (a) sulfate ions, (b) chloride ions. For each, state the reagents (including any acid), the procedure and the positive observation. [5 marks]",
            marks: 5,
            modelAnswer: "(a) Sulfate: first acidify the solution with a few drops of dilute hydrochloric acid (to remove carbonate/sulfite interference), then add barium chloride (or barium nitrate) solution. A white precipitate of barium sulfate forms — this confirms sulfate. (b) Chloride: first acidify the solution with a few drops of dilute nitric acid (to remove carbonate interference and to avoid adding chloride), then add silver nitrate solution. A white precipitate of silver chloride forms — this confirms chloride.",
            markScheme: [
              "Sulfate: acidify with dilute HCl first [1]",
              "Add barium chloride/nitrate → white precipitate (barium sulfate) [1]",
              "Chloride: acidify with dilute nitric acid first [1]",
              "Add silver nitrate → white precipitate (silver chloride) [1]",
              "Both 'first acidify' steps correctly justified / present [1]",
            ],
            commonError: "Using nitric acid for the sulfate test or hydrochloric acid for the chloride test; HCl would add chloride and give a false positive in the silver nitrate test.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "Both tests need acidifying first to remove interferents.",
              "Use HCl for sulfate (then barium), nitric acid for chloride (then silver nitrate).",
              "Both positive results are white precipitates.",
              "Avoid adding the ion you are testing for via the acid.",
            ],
          },
          {
            id: "chem-analysis-bq4-04",
            question: "Three colourless sodium salt solutions are sodium chloride, sodium bromide and sodium iodide. Describe a single test that distinguishes all three, stating the reagent and the three different observations. [4 marks]",
            marks: 4,
            modelAnswer: "Acidify each solution with a little dilute nitric acid, then add silver nitrate solution to each. The three halides give different coloured precipitates of silver halide: sodium chloride gives a WHITE precipitate (silver chloride), sodium bromide gives a CREAM precipitate (silver bromide), and sodium iodide gives a YELLOW precipitate (silver iodide). The colour of the precipitate identifies which halide is present in each tube.",
            markScheme: [
              "Acidify with dilute nitric acid, then add silver nitrate [1]",
              "Chloride → white precipitate [1]",
              "Bromide → cream precipitate [1]",
              "Iodide → yellow precipitate [1]",
            ],
            commonError: "Being vague about the colours (e.g. calling bromide 'pale yellow'); the standard answers are white, cream and yellow respectively.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "One reagent (silver nitrate) gives three different colours.",
              "Acidify with nitric acid first.",
              "Remember the order: white, cream, yellow.",
              "Match each colour to chloride, bromide, iodide.",
            ],
          },
          {
            id: "chem-analysis-bq4-05",
            question: "Explain why a solution must be acidified before testing for sulfate ions with barium chloride, and before testing for halide ions with silver nitrate. [3 marks]",
            marks: 3,
            modelAnswer: "Acidifying removes anions that would otherwise give a false positive. Carbonate ions react with barium to give a white barium carbonate precipitate and with silver to give a precipitate too, so they must be removed first by reacting them away with the acid (releasing CO₂). For the sulfate test, acidifying with dilute hydrochloric acid removes carbonate (and sulfite) so that only sulfate produces the white precipitate with barium. For the halide test, acidifying with dilute nitric acid removes carbonate, and nitric acid is chosen because it adds neither chloride nor sulfate, which would interfere. So acidification ensures the white precipitate observed is genuinely due to the ion being tested.",
            markScheme: [
              "Carbonate (and sulfite) would give false-positive white precipitates with barium/silver [1]",
              "Acid removes these interfering ions (as CO2 / SO2) before the test [1]",
              "Correct acid chosen so as not to add the test ion (HCl for sulfate; HNO3 for halide) [1]",
            ],
            commonError: "Saying acidification 'speeds up the reaction' rather than recognising it removes interfering carbonate/sulfite ions.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "Think which other anion also gives a white precipitate with barium or silver.",
              "Carbonate is the main interferent.",
              "The acid destroys carbonate before the test.",
              "Choose an acid that does not add the ion you are testing for.",
            ],
          },
          {
            id: "chem-analysis-bq4-06",
            question: "Describe the chemical test used to confirm the presence of nitrate ions (NO₃⁻) in a solution, including the reagents, the condition, and how the product is detected. [3 marks]",
            marks: 3,
            modelAnswer: "Add aqueous sodium hydroxide to the solution, then add aluminium powder (or aluminium foil / Devarda's alloy) and warm the mixture gently. The aluminium reduces the nitrate ions in the alkaline solution to ammonia gas. Detect the ammonia by holding a piece of damp red litmus paper at the mouth of the tube — it turns blue, confirming nitrate.",
            markScheme: [
              "Add NaOH(aq) and aluminium (powder/foil) [1]",
              "Warm the mixture [1]",
              "Ammonia produced turns damp red litmus blue (confirms nitrate) [1]",
            ],
            commonError: "Omitting the aluminium, or forgetting that the mixture must be warmed for the reduction to ammonia to occur.",
            guideRef: "Identifying Anions",
            difficulty: "warmup",
            hints: [
              "Nitrate is reduced to a familiar alkaline gas.",
              "The reducing agent is aluminium in alkali.",
              "Warming drives the reaction.",
              "Detect the gas with damp red litmus.",
            ],
          },
          {
            id: "chem-analysis-bq4-07",
            question: "An unknown white solid W is fully analysed. Test 1: a flame test gives a yellow colour. Test 2: the solid effervesces with dilute hydrochloric acid and the gas turns limewater milky. (a) Identify the cation and anion in W. [2 marks] (b) Name solid W. [1 mark] (c) Write a balanced symbol equation for the reaction of W with dilute hydrochloric acid. [3 marks]",
            marks: 6,
            modelAnswer: "(a) Cation: sodium, Na⁺ (yellow flame). Anion: carbonate, CO₃²⁻ (effervescence giving a gas that turns limewater milky shows carbon dioxide, so a carbonate). (b) Solid W is sodium carbonate, Na₂CO₃. (c) Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g).",
            markScheme: [
              "Cation Na⁺ from yellow flame [1]",
              "Anion CO3²⁻ from effervescence + milky limewater [1]",
              "Named as sodium carbonate / Na2CO3 [1]",
              "Correct formulae and products (NaCl, H2O, CO2) [1]",
              "Equation balanced (2HCl, 2NaCl) [1]",
              "State symbols correct [1]",
            ],
            commonError: "Leaving the equation unbalanced (e.g. one HCl, one NaCl) or forgetting that water and carbon dioxide are both products.",
            guideRef: "Identifying Anions",
            difficulty: "challenge",
            hints: [
              "The flame colour fixes the cation.",
              "Effervescence + milky limewater fixes the anion as carbonate.",
              "Combine the ions to name the salt.",
              "Balance the acid reaction: carbonate + acid → salt + water + CO2.",
            ],
            strategy: "Identify cation and anion separately, name the salt, then balance the acid–carbonate equation.",
            solutions: [
              {
                label: "Build and balance the equation",
                steps: [
                  "Cation Na⁺ (yellow flame) and anion CO3²⁻ (CO2 turns limewater milky) → W is Na2CO3",
                  "Carbonate + acid → salt + water + carbon dioxide",
                  "Na2CO3 + HCl → NaCl + H2O + CO2 (unbalanced)",
                  "Balance Na and Cl: Na2CO3 + 2HCl → 2NaCl + H2O + CO2 — check: Na2, C1, O3 + (H2 from 2HCl giving H2O) ✓, Cl2 ✓",
                ],
              },
            ],
          },
          {
            id: "chem-analysis-bq4-08",
            question: "A solution contains copper(II) sulfate. Describe two tests, one for the cation and one for the anion, that together confirm this identity. State reagents and observations for each. [5 marks]",
            marks: 5,
            modelAnswer: "Cation test (Cu²⁺): add aqueous sodium hydroxide — a light blue precipitate of copper(II) hydroxide forms, which is insoluble in excess NaOH. (Confirm with aqueous ammonia: a blue precipitate that dissolves in excess to a deep blue solution.) This confirms copper(II) ions. Anion test (SO₄²⁻): take a fresh portion, acidify with dilute hydrochloric acid, then add barium chloride solution — a white precipitate of barium sulfate forms, confirming sulfate ions. The two results together confirm the salt is copper(II) sulfate.",
            markScheme: [
              "Cation: add NaOH(aq) → blue precipitate (insoluble in excess) [1]",
              "Confirms Cu²⁺ / (deep blue solution in excess ammonia) [1]",
              "Anion: acidify with dilute HCl [1]",
              "Add barium chloride → white precipitate [1]",
              "White precipitate confirms sulfate (barium sulfate) [1]",
            ],
            commonError: "Forgetting to acidify before the barium chloride test, or testing only the cation and assuming the anion.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "Test the cation with sodium hydroxide first.",
              "Copper(II) gives a blue precipitate.",
              "Acidify before testing for sulfate.",
              "Barium chloride gives a white precipitate with sulfate.",
            ],
            strategy: "Always confirm BOTH ions — cation by NaOH, anion by the acidified barium test.",
          },
          {
            id: "chem-analysis-bq4-09",
            question: "A gas is produced that has a sharp, choking smell and bleaches damp litmus paper. A second gas has a sharp smell and turns damp red litmus blue. (a) Identify each gas. [2 marks] (b) Explain in terms of chemistry why one bleaches litmus and the other turns red litmus blue. [3 marks]",
            marks: 5,
            modelAnswer: "(a) The gas that bleaches damp litmus is chlorine (Cl₂); the gas that turns damp red litmus blue is ammonia (NH₃). (b) Chlorine reacts with the water on the damp litmus to form chloric(I) acid (hypochlorous acid, HClO), which is a strong oxidising bleach that destroys the coloured dye in the litmus, so the paper is decolourised. Ammonia is an alkaline gas: it dissolves in the water on the litmus to form ammonium and hydroxide ions (NH₃ + H₂O → NH₄⁺ + OH⁻), making the solution alkaline, which turns red litmus blue.",
            markScheme: [
              "Chlorine (Cl2) bleaches damp litmus [1]",
              "Ammonia (NH3) turns damp red litmus blue [1]",
              "Chlorine forms an oxidising/bleaching species (HClO) with water that destroys the dye [1]",
              "Ammonia dissolves to give an alkaline solution (OH⁻ ions) [1]",
              "Alkali turns red litmus blue [1]",
            ],
            commonError: "Saying ammonia bleaches litmus; ammonia turns red litmus blue (it is alkaline), whereas chlorine is the bleaching gas.",
            guideRef: "Identifying Gases",
            difficulty: "challenge",
            hints: [
              "One gas is a bleach; the other is alkaline.",
              "Chlorine forms an oxidising acid with water that bleaches.",
              "Ammonia is the only common alkaline gas.",
              "Alkali turns red litmus blue.",
            ],
            strategy: "Link each observation to the chemistry: bleaching = oxidising chlorine species; blue litmus = alkaline ammonia.",
          },
          {
            id: "chem-analysis-bq4-10",
            question: "An unknown salt X is investigated. Test 1: flame test → lilac. Test 2: aqueous sodium hydroxide added, then warmed → a gas turns damp red litmus blue. Test 3: a separate portion, acidified with dilute nitric acid then treated with silver nitrate → yellow precipitate. (a) Deduce the cation, the gas in Test 2 and the ion it indicates, and the anion in Test 3. [3 marks] (b) Hence name salt X and explain why Test 2 and Test 3 each detect a DIFFERENT anion-related feature. [3 marks]",
            marks: 6,
            modelAnswer: "(a) Test 1 lilac flame → cation is potassium, K⁺. Test 2 warming with NaOH gives a gas that turns damp red litmus blue → the gas is ammonia, NH₃; producing ammonia on warming with NaOH (with aluminium implied/used) indicates nitrate, NO₃⁻ (nitrate is reduced to ammonia). Test 3 acidified silver nitrate giving a yellow precipitate → iodide, I⁻. (b) The results show the salt contains potassium with BOTH nitrate and iodide — but a single simple salt has only one anion, so salt X is most consistent with a salt that gives these results being a mixture, or X is potassium nitrate with the iodide indicating contamination. Most straightforwardly, if only ONE anion is present: Test 3's yellow precipitate clearly identifies iodide, so X is potassium iodide, KI; Test 2 (ammonia on warming with NaOH and aluminium) is the dedicated NITRATE test and detects nitrate, a different anion — so its positive result indicates nitrate is ALSO present, meaning the sample is a mixture of potassium iodide and potassium nitrate. Test 2 (reduction to ammonia) detects nitrate via a redox reaction, whereas Test 3 (precipitation with silver ions) detects a halide by forming an insoluble silver salt — two chemically different detection methods for two different anions.",
            markScheme: [
              "Cation K⁺ from lilac flame [1]",
              "Test 2 gas is ammonia (NH3), indicating nitrate (NO3⁻) [1]",
              "Test 3 yellow precipitate indicates iodide (I⁻) [1]",
              "Recognise two different anions present → sample is a mixture (e.g. KI and KNO3) [1]",
              "Test 2 detects nitrate by reduction to ammonia (redox) [1]",
              "Test 3 detects iodide by precipitation of silver iodide (different method) [1]",
            ],
            commonError: "Trying to force a single formula (e.g. 'KNO3' or 'KI' alone) when two distinct anion tests are positive — the correct reading is that two anions are present (a mixture), each found by a different type of test.",
            guideRef: "Identifying Anions",
            difficulty: "challenge",
            hints: [
              "Fix the cation from the flame colour.",
              "Identify the gas in Test 2 and recall which anion test produces it.",
              "The yellow silver precipitate names the halide.",
              "Two positive anion tests means more than one anion is present.",
            ],
            strategy: "Resolve each test to one ion, then notice that two different anion tests are positive — so interpret X as a mixture rather than a single salt.",
          },
        ],
      },
    ],
  },
};
