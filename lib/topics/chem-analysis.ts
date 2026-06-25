import type { Topic } from "../types";

export const chemAnalysis: Topic = {
  id: "chem-analysis",
  title: "Experimental Techniques & Analysis",
  subject: "chemistry",
  icon: "🔎",
  blurb: "Separation techniques, purity tests, ion identification, gas tests and paper chromatography.",
  intro: "Every measurement in chemistry depends on working with pure substances and reliable tests. In this topic you will master the separation techniques used to purify mixtures, learn how purity is assessed by sharp melting and boiling points, and build a systematic toolkit of chemical tests to identify cations, anions and gases — exactly the skills Cambridge IGCSE 0620 Extended examiners probe in Paper 6 (Alternative to Practical) and beyond.",

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
| Chlorine (Cl₂) | Hold damp litmus paper near the mouth | Damp litmus bleached/turns white |

**Additional details:**
- If limewater is exposed to excess CO₂, the milky precipitate redissolves (forming soluble Ca(HCO₃)₂) — useful to know for longer experiments.
- Chlorine has a distinctive sharp, choking smell (state this in a description question).
- Ammonia also has a sharp smell and is the only common alkaline gas; it turns universal indicator paper blue.
- Hydrogen burns with a 'squeaky pop' because hydrogen ignites rapidly — the pop is from the small explosion as it reacts with oxygen in the tube.

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
      ],
      whyItWorks: "Each gas test is based on a specific chemical reaction. The squeaky pop with H2 is a rapid combustion releasing energy. O2 relights a splint by sustaining combustion. CO2 reacts with Ca(OH)2 to form insoluble CaCO3. NH3 dissolves in water on the litmus to form NH4⁺ + OH⁻, making it alkaline. Cl2 reacts with water to form HClO (hypochlorous acid), a powerful oxidising bleach that destroys the dye in litmus paper.",
      strategies: ["State both the test AND the observation — half-marks are common for incomplete answers", "Order of testing: smell (if safe), then litmus, then specific tests"],
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
      {
        id: "chem-analysis-bank-mcq-1",
        title: "MCQ Paper 1 — Techniques and Purity",
        description: "Focus on separation techniques, purity criteria, and paper chromatography.",
        questions: [
          {
            id: "chem-analysis-bank-mcq1-q01",
            question: "Which technique would be best to separate a mixture of ethanol (boiling point 78 °C) and water (boiling point 100 °C)?",
            options: [
              "Simple distillation",
              "Fractional distillation",
              "Filtration",
              "Crystallisation",
            ],
            answerIndex: 1,
            explanation: "The two liquids have boiling points only 22 °C apart, so simple distillation would not give clean separation. Fractional distillation uses a fractionating column to provide many cycles of condensation and re-evaporation, enriching the vapour in ethanol and achieving clean separation.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "core",
            hints: [
              "Simple distillation works well when boiling points differ by more than about 25 °C.",
              "A difference of 22 °C is too close for simple distillation — use fractional distillation.",
            ],
          },
          {
            id: "chem-analysis-bank-mcq1-q02",
            question: "A student measures the melting point of a substance and obtains 54–61 °C. The literature value is 63 °C. What is the most likely conclusion?",
            options: [
              "The substance is pure but the thermometer is faulty.",
              "The substance is impure; impurities have depressed and broadened the melting point.",
              "The substance is impure; impurities have raised the melting point.",
              "The substance is a mixture of two pure substances each melting at exactly 54 °C and 61 °C.",
            ],
            answerIndex: 1,
            explanation: "A depressed and broadened melting range (54–61 °C vs literature 63 °C) is the classic signature of impurity. Impurities disrupt the crystal lattice, lowering the onset temperature and causing melting over a range rather than sharply. Impurities depress (lower) melting points, not raise them.",
            guideRef: "Purity and Why It Matters",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bank-mcq1-q03",
            question: "In paper chromatography, which statement about Rf values is correct?",
            options: [
              "The Rf value changes with temperature but not with the solvent used.",
              "A pure substance always gives Rf = 1.0.",
              "The Rf is a characteristic constant for a given substance in a given solvent under the same conditions.",
              "Two different substances can never have the same Rf value.",
            ],
            answerIndex: 2,
            explanation: "Rf is a reproducible ratio for a given substance and solvent under identical conditions (temperature, paper type, etc.). Rf = 1.0 means the substance moved with the solvent front — this is possible but does not indicate purity. Two different substances can coincidentally have the same Rf in one solvent (so a second solvent may be needed to distinguish them).",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Rf depends on both the substance AND the solvent — changing either changes Rf.",
              "Rf = 1.0 simply means the substance did not interact with the stationary phase.",
            ],
          },
          {
            id: "chem-analysis-bank-mcq1-q04",
            question: "A student adds excess aqueous sodium hydroxide to a green precipitate already formed in a test tube. The precipitate does not dissolve. Which ion was present in the original solution?",
            options: ["Zn²⁺", "Al³⁺", "Fe²⁺", "Cu²⁺"],
            answerIndex: 2,
            explanation: "The green precipitate is Fe(OH)2, formed from Fe²⁺ + 2OH⁻. It is insoluble in excess NaOH. Zn²⁺ gives a white precipitate that dissolves in excess NaOH; Al³⁺ gives a white precipitate that dissolves; Cu²⁺ gives a blue precipitate. Fe²⁺ is the only ion giving a green precipitate insoluble in excess.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "Match the colour: white, blue, green, or red-brown to the metal ion.",
              "Insoluble in excess NaOH rules out Zn²⁺ and Al³⁺.",
              "Green insoluble precipitate → Fe²⁺.",
            ],
          },
          {
            id: "chem-analysis-bank-mcq1-q05",
            question: "Which pair of reagents is used to test for carbonate ions in a solution?",
            options: [
              "Dilute nitric acid, then silver nitrate solution",
              "Dilute hydrochloric acid, then barium chloride solution",
              "Dilute sulfuric acid, then limewater for the evolved gas",
              "Aqueous sodium hydroxide, then filter paper",
            ],
            answerIndex: 2,
            explanation: "Carbonates react with acid to give CO2 gas. The gas is bubbled through limewater (Ca(OH)2(aq)), which turns milky due to formation of CaCO3 precipitate. Options A tests for halides; option B tests for sulfate; option D is irrelevant to carbonate testing.",
            guideRef: "Identifying Anions",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bank-mcq1-q06",
            question: "A chromatogram is run and the solvent front moves 18.0 cm. Two spots are found at 7.2 cm and 13.5 cm. A reference compound X has Rf = 0.75. Which spot, if any, corresponds to compound X?",
            options: [
              "The spot at 7.2 cm (Rf = 0.40)",
              "The spot at 13.5 cm (Rf = 0.75)",
              "Neither spot corresponds to compound X",
              "Both spots correspond to compound X",
            ],
            answerIndex: 1,
            explanation: "Rf of spot at 13.5 cm = 13.5/18.0 = 0.75. This matches compound X (Rf = 0.75). Rf of spot at 7.2 cm = 7.2/18.0 = 0.40, which does not match. Only the 13.5 cm spot corresponds to compound X.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Calculate both Rf values first: Rf = distance spot / distance solvent front.",
              "Then compare each to the reference value of 0.75.",
            ],
          },
        ],
      },
      {
        id: "chem-analysis-bank-mcq-2",
        title: "MCQ Paper 2 — Ion and Gas Identification",
        description: "Focus on cation tests, anion tests, flame tests, and gas identification.",
        questions: [
          {
            id: "chem-analysis-bank-mcq2-q01",
            question: "A student adds aqueous ammonia to a solution and a blue precipitate forms. When excess ammonia is added, the precipitate dissolves to give a deep blue solution. Which ion is present?",
            options: ["Fe²⁺", "Zn²⁺", "Cu²⁺", "Al³⁺"],
            answerIndex: 2,
            explanation: "Cu²⁺ gives a blue precipitate with ammonia (Cu(OH)2) that dissolves in excess ammonia to give the deep blue tetraamminecopper(II) complex, [Cu(NH3)4]²⁺. Fe²⁺ gives green; Zn²⁺ gives white (dissolves in excess but gives a colourless solution); Al³⁺ gives white (does not dissolve in excess NH3).",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "Both precipitate colour AND behaviour in excess are needed.",
              "Blue precipitate + dissolves in excess ammonia giving deep blue = copper(II).",
            ],
          },
          {
            id: "chem-analysis-bank-mcq2-q02",
            question: "Which flame test colour correctly identifies calcium ions (Ca²⁺)?",
            options: ["Yellow", "Lilac", "Orange-red", "Blue-green"],
            answerIndex: 2,
            explanation: "Ca²⁺ gives an orange-red flame. Yellow → Na⁺; Lilac → K⁺; Blue-green → Cu²⁺.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bank-mcq2-q03",
            question: "A gas is produced in a reaction. Damp red litmus paper held near the tube turns blue. Which gas is confirmed?",
            options: ["Chlorine", "Carbon dioxide", "Ammonia", "Hydrogen"],
            answerIndex: 2,
            explanation: "Ammonia (NH3) is the only common alkaline gas; it dissolves in the water on the damp red litmus paper forming NH4⁺ + OH⁻ ions, turning the paper blue. Chlorine bleaches (decolourises) damp litmus; CO2 and H2 have no effect on litmus.",
            guideRef: "Identifying Gases",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bank-mcq2-q04",
            question: "To test for iodide ions (I⁻) in a solution, a student adds dilute nitric acid and then silver nitrate solution. What would be observed if iodide is present?",
            options: [
              "White precipitate",
              "Cream precipitate",
              "Yellow precipitate",
              "Red-brown precipitate",
            ],
            answerIndex: 2,
            explanation: "Silver iodide (AgI) is a yellow precipitate and is insoluble even in concentrated ammonia. White = AgCl (chloride); Cream = AgBr (bromide); Red-brown precipitate is not a halide test result.",
            guideRef: "Identifying Anions",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bank-mcq2-q05",
            question: "An unknown solution is tested with NaOH(aq) — a white precipitate forms that dissolves in excess. The same solution, when tested with excess NH3(aq), gives a white precipitate that does NOT dissolve. Which ion is present?",
            options: ["Zn²⁺", "Al³⁺", "Ca²⁺", "Fe³⁺"],
            answerIndex: 1,
            explanation: "Al³⁺ gives a white precipitate with NaOH that dissolves in excess (amphoteric), but gives a white precipitate with NH3 that does NOT dissolve in excess. Zn²⁺ is different: it dissolves in both excess NaOH and excess NH3. Ca²⁺ does not dissolve in excess NaOH either. Fe³⁺ gives red-brown, not white.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "challenge",
            hints: [
              "Both reagents give white precipitates — so we need to focus on the solubility in excess.",
              "Dissolves in excess NaOH but NOT in excess NH3 — which ion fits this pattern?",
              "Al³⁺ is amphoteric toward NaOH (dissolves) but forms Al(OH)3 with NH3 that cannot dissolve in excess NH3.",
              "Zn²⁺ would dissolve in excess of BOTH — so it can be ruled out.",
            ],
          },
          {
            id: "chem-analysis-bank-mcq2-q06",
            question: "A student adds dilute hydrochloric acid to a solid and then adds barium chloride solution. A white precipitate forms immediately. What is the most likely anion in the solid?",
            options: ["CO₃²⁻", "Cl⁻", "SO₄²⁻", "NO₃⁻"],
            answerIndex: 2,
            explanation: "Acidifying removes carbonate and sulfite (these would react with the acid), then barium chloride gives a white precipitate only with sulfate (Ba²⁺ + SO₄²⁻ → BaSO₄). Cl⁻ and NO₃⁻ do not precipitate with barium. Note: some CO₃²⁻ could remain if acid is insufficient, but the definitive white precipitate with Ba²⁺ after acidification indicates sulfate.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "Acidification removes carbonate — so the precipitate is not from carbonate reacting with Ba²⁺.",
              "Which anion reacts with Ba²⁺ to form a white, insoluble precipitate?",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-analysis-bank-qa-1",
        title: "Structured Questions Paper 1",
        description: "Techniques, purity and chromatography structured questions.",
        questions: [
          {
            id: "chem-analysis-bank-qa1-q01",
            question: "A mixture contains sand (insoluble) and potassium nitrate (soluble). Describe how you would obtain a pure dry sample of potassium nitrate from this mixture. Include all steps, the equipment used, and explain the purpose of each step. [5 marks]",
            marks: 5,
            modelAnswer: "Step 1 — Add water to the mixture and stir to dissolve the potassium nitrate (sand is insoluble). Step 2 — Filter the mixture through filter paper in a funnel over a beaker; the sand remains as the residue on the filter paper and the potassium nitrate solution (filtrate) passes through. Step 3 — Heat the filtrate in an evaporating dish to evaporate most of the water and concentrate the solution. Step 4 — Allow to cool slowly; potassium nitrate crystallises out. Step 5 — Filter to collect the crystals, wash with a small amount of cold distilled water to remove surface impurities, and dry in a warm oven or between filter papers.",
            markScheme: [
              "Add water and stir / dissolve KNO3 in water [1]",
              "Filter to remove sand (residue); KNO3 solution passes as filtrate [1]",
              "Evaporate/heat filtrate to concentrate solution [1]",
              "Cool to crystallise KNO3 [1]",
              "Filter crystals, wash with cold water, and dry [1]",
            ],
            commonError: "Students often omit washing the crystals or say 'evaporate to dryness' — the latter can decompose some salts and gives impure product.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "core",
            hints: [
              "Think about what makes sand and potassium nitrate different — solubility in water.",
              "Use filtration to separate the insoluble from the soluble fraction.",
              "To get solid KNO3 from solution: concentrate then cool to crystallise.",
              "Don't forget to dry the final crystals.",
            ],
            strategy: "Plan the technique sequence: dissolve → filter → concentrate → crystallise → dry.",
          },
          {
            id: "chem-analysis-bank-qa1-q02",
            question: "A chromatogram of plant pigments is produced. The solvent front moves 16.8 cm. Four spots are observed at 3.36 cm, 6.72 cm, 12.6 cm, and 16.8 cm from the baseline. (a) Calculate the Rf for each spot. [2 marks] (b) One of the spots has Rf = 1.00. What does this tell you about that pigment? [1 mark] (c) A known reference chlorophyll a has Rf = 0.75 in this solvent. Which spot, if any, is chlorophyll a? [1 mark] (d) The spots are green and yellow — visible to the eye. Suggest why a locating agent is not needed in this experiment. [1 mark]",
            marks: 5,
            modelAnswer: "(a) Rf(spot 1) = 3.36/16.8 = 0.20; Rf(spot 2) = 6.72/16.8 = 0.40; Rf(spot 3) = 12.6/16.8 = 0.75; Rf(spot 4) = 16.8/16.8 = 1.00. (b) An Rf of 1.00 means the pigment moved with the solvent front, indicating it has very little attraction to the stationary phase (paper) and very high solubility in the mobile phase (solvent). (c) Spot 3 (Rf = 0.75) corresponds to chlorophyll a. (d) The pigments are coloured (green and yellow) and therefore visible to the naked eye without any additional reagent.",
            markScheme: [
              "All four Rf values correct: 0.20, 0.40, 0.75, 1.00 [2] (1 mark for any two correct)",
              "Rf = 1.00: pigment moved with solvent front; very low attraction to stationary phase / very soluble in solvent [1]",
              "Spot 3 identified as chlorophyll a (Rf = 0.75 matches reference) [1]",
              "Spots are coloured / visible to the eye — no locating agent needed [1]",
            ],
            commonError: "Students often give Rf values greater than 1.0 if they measure from the solvent surface rather than from the baseline — always measure from the pencil baseline.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Use Rf = spot distance / solvent front distance for each of the four spots.",
              "Rf = 1.00 is mathematically possible — think about what it means physically.",
              "To identify: match calculated Rf to the reference value.",
              "Locating agents are only needed for colourless spots.",
            ],
            strategy: "Calculate first, then interpret.",
          },
          {
            id: "chem-analysis-bank-qa1-q03",
            question: "Explain why fractional distillation is used rather than simple distillation to separate crude oil into fractions. Include in your answer the role of the fractionating column. [4 marks]",
            marks: 4,
            modelAnswer: "Crude oil is a mixture of hydrocarbons with a wide range of boiling points, many of which are quite close together. Simple distillation only provides one stage of separation and cannot cleanly separate liquids whose boiling points are within ~25 °C of each other. Fractional distillation uses a fractionating column, which is a long vertical tube packed with glass beads or plates. As vapour rises up the column, it cools and repeatedly condenses and re-evaporates. Each cycle (theoretical plate) slightly enriches the vapour in the more volatile component. After many cycles, the vapour emerging from the top of the column is enriched to near-purity in the most volatile fraction. Less volatile fractions condense and are drawn off at different heights of the column according to their boiling points.",
            markScheme: [
              "Crude oil contains hydrocarbons with similar/close boiling points [1]",
              "Simple distillation cannot cleanly separate liquids with similar boiling points [1]",
              "Fractionating column allows repeated condensation and re-evaporation (multiple theoretical plates) [1]",
              "Each cycle enriches the vapour in the more volatile component / different fractions collected at different heights [1]",
            ],
            commonError: "Students often describe fractional distillation correctly but fail to explain WHY simple distillation is insufficient — the key is the closeness of boiling points.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "core",
            hints: [
              "Think about why simple distillation fails for close boiling points.",
              "What does the fractionating column add that a plain flask-and-condenser setup lacks?",
              "Each 'plate' in the column is one cycle of condensation + re-evaporation — what does each cycle achieve?",
            ],
            strategy: "Compare and contrast with simple distillation before explaining the column's role.",
          },
          {
            id: "chem-analysis-bank-qa1-q04",
            question: "A student wants to test whether two white powders, P and Q, are the same pure substance. She measures the melting points of each and mixes them in a 1:1 ratio, measuring the melting point of the mixture. (a) If P and Q are the same substance, what would you expect for: (i) their individual melting points, and (ii) the melting point of the 1:1 mixture? [2 marks] (b) P melts sharply at 133 °C and Q melts sharply at 133 °C. The 1:1 mixture melts over 118–128 °C. What can you conclude? [2 marks] (c) State one additional test that would confirm whether P and Q are the same compound. [1 mark]",
            marks: 5,
            modelAnswer: "(a)(i) Both should have the same sharp melting point (e.g. 133 °C). (a)(ii) The mixture should also have the same sharp melting point — no depression or broadening — because mixing two samples of the same pure substance is still pure. (b) Although P and Q individually melt sharply at the same temperature, the 1:1 mixture shows a depressed and broadened melting range (118–128 °C). This indicates that P and Q are different compounds that merely happen to have the same melting point. When mixed, they act as impurities to each other, lowering and broadening the melting range. (c) Paper chromatography in a suitable solvent — if P and Q give spots with the same Rf value, this supports (but does not definitively prove) they are the same compound. Alternatively, infrared spectroscopy (not on IGCSE syllabus) or chemical tests appropriate to the expected functional groups.",
            markScheme: [
              "(a)(i) Same sharp melting point [1]",
              "(a)(ii) Mixture melts at the same sharp temperature — no depression [1]",
              "(b) Depression and broadening indicates P and Q are different compounds [1]",
              "(b) When mixed, they act as impurities to each other, causing the melting point depression [1]",
              "(c) Any valid additional test, e.g. paper chromatography comparing Rf values / chemical tests [1]",
            ],
            commonError: "Students often conclude P and Q are different from the individual melting points alone — but both melt sharply at 133 °C, which is NOT enough to distinguish them. The mixed melting point is the diagnostic test.",
            guideRef: "Purity and Why It Matters",
            difficulty: "challenge",
            hints: [
              "A pure substance + the same pure substance = still pure (no melting point change).",
              "A pure substance + a DIFFERENT substance = impure mixture → depressed melting point.",
              "What does the broadened, depressed range of the 1:1 mixture tell you about whether they are the same?",
              "Think about a confirmatory test that uses a different physical property.",
            ],
            strategy: "Use the mixed melting point as the diagnostic — identical pure substances show no depression when mixed.",
          },
        ],
      },
      {
        id: "chem-analysis-bank-qa-2",
        title: "Structured Questions Paper 2",
        description: "Ion identification and gas tests — including an 'identify the unknown' challenge.",
        questions: [
          {
            id: "chem-analysis-bank-qa2-q01",
            question: "A student performs the following tests on solution S and records the results. Test 1: A few drops of NaOH(aq) are added — a red-brown precipitate forms. Test 2: Excess NaOH(aq) is added — the precipitate does not dissolve. Test 3: A flame test is performed — a yellow flame is observed. (a) Identify the cation in solution S and give the ionic equation for its reaction with NaOH. [3 marks] (b) Explain why a yellow flame in Test 3 is not diagnostic for the cation identified in (a). [2 marks]",
            marks: 5,
            modelAnswer: "(a) The red-brown precipitate insoluble in excess NaOH indicates Fe³⁺ (iron(III) ions). Ionic equation: Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s) [red-brown precipitate]. (b) The yellow flame is produced by sodium (Na⁺), not Fe³⁺. Iron does not produce a characteristic visible flame colour in the standard Bunsen flame test. The yellow result means the solution also contains sodium ions (Na⁺), possibly as a counter-ion from the sodium hydroxide already in solution, or as an impurity. The flame test for Fe³⁺ is therefore masked by sodium. The sodium might also have been introduced as a contaminant or as part of the salt (e.g. if the compound is sodium iron(III) sulfate). The cation in question (Fe³⁺) must be identified from the precipitate test, not the flame test.",
            markScheme: [
              "Fe³⁺ identified from red-brown precipitate insoluble in excess NaOH [1]",
              "Ionic equation: Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)3(s) [1]",
              "State symbols correct [1]",
              "Yellow flame is caused by Na⁺, not Fe³⁺ [1]",
              "Na⁺ may be present as a counter-ion or contaminant / Fe³⁺ does not give a visible flame colour [1]",
            ],
            commonError: "Students may incorrectly conclude that Fe³⁺ causes the yellow flame. Fe³⁺ does not produce a characteristic flame colour in school lab conditions.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "Match precipitate colour and solubility in excess to the ion table.",
              "Red-brown + insoluble in excess → Fe³⁺.",
              "Yellow flame is always Na⁺ — consider where the sodium might come from.",
              "Fe³⁺ does not give a characteristic colour in a Bunsen flame test.",
            ],
            strategy: "Identify cation from precipitate test; evaluate flame test critically for interferences.",
          },
          {
            id: "chem-analysis-bank-qa2-q02",
            question: "Gas X is evolved when a solid reacts with dilute hydrochloric acid. Gas X turns damp red litmus paper blue. (a) Identify gas X. [1 mark] (b) Write a balanced equation for the reaction that produces gas X if the solid is ammonium carbonate. [2 marks] (c) Describe how you would confirm gas X is NOT carbon dioxide, using a separate test. [2 marks]",
            marks: 5,
            modelAnswer: "(a) Gas X is ammonia (NH3). (b) Ammonium carbonate reacts with hydrochloric acid: (NH4)2CO3(s) + 2HCl(aq) → 2NH4Cl(aq) + H2O(l) + CO2(g). However, the ammonia must come from the ammonium ion reacting with the acid: NH4+(aq) does not directly produce NH3 with HCl (this produces NH4Cl). On reconsideration: heating ammonium carbonate in the presence of HCl — the carbonate reacts with HCl to give CO2, while the ammonium ion in acid would not give NH3. To produce NH3, the ammonium carbonate must be heated alone or with alkali. Corrected: if solid ammonium carbonate is heated: (NH4)2CO3(s) → 2NH3(g) + H2O(g) + CO2(g). (c) To confirm X is NOT CO2: bubble gas X through limewater. If limewater remains clear, CO2 is absent (CO2 would turn limewater milky). Ammonia does NOT turn limewater milky, but does turn damp red litmus blue.",
            markScheme: [
              "Gas X is ammonia / NH3 [1]",
              "Equation for thermal decomposition of ammonium carbonate: (NH4)2CO3 → 2NH3 + H2O + CO2 (balanced, accept arrow instead of equation arrows) [1]",
              "State symbols not required but acceptable [1]",
              "Test: bubble gas through limewater [1]",
              "If limewater stays clear → not CO2; limewater milky → CO2 present [1]",
            ],
            commonError: "Students may say 'damp red litmus turns blue — so it must be ammonia and not CO2' — but the question asks for a separate confirmatory test. The litmus test was already performed; an additional independent test is required.",
            guideRef: "Identifying Gases",
            difficulty: "core",
            hints: [
              "Identify which gas turns damp red litmus blue — there is only one.",
              "For the equation: ammonium carbonate decomposes on heating into three products.",
              "A separate test for 'not CO2' should use CO2's characteristic test — limewater.",
            ],
            strategy: "Use the existing test result to identify gas X, then design a second independent test to rule out CO2.",
          },
          {
            id: "chem-analysis-bank-qa2-q03",
            question: "Describe two chemical tests, each on a different property, that would confirm the presence of Fe²⁺ ions in a solution. For each test, state: the reagent, the observation, and the ionic equation. [6 marks]",
            marks: 6,
            modelAnswer: "Test 1 — Sodium hydroxide test: Add aqueous sodium hydroxide. A green precipitate of iron(II) hydroxide forms. The precipitate is insoluble in excess NaOH. Ionic equation: Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)2(s) (green precipitate).\n\nTest 2 — Aqueous ammonia test: Add aqueous ammonia. A green precipitate of iron(II) hydroxide forms. The precipitate does not dissolve in excess ammonia. Ionic equation: Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)2(s).\n\nAlternatively for Test 2: Oxidation test — expose the solution to air or add a few drops of acidified potassium manganate(VII); Fe²⁺ is oxidised to Fe³⁺ (purple manganate decolourises), but this is a more advanced test. The NaOH and NH3 tests are the two IGCSE-required tests.",
            markScheme: [
              "Test 1 reagent: NaOH(aq) / aqueous sodium hydroxide [1]",
              "Observation: green precipitate formed; insoluble in excess [1]",
              "Ionic equation: Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)2(s) [1]",
              "Test 2 reagent: NH3(aq) / aqueous ammonia [1]",
              "Observation: green precipitate; does not dissolve in excess NH3 [1]",
              "Ionic equation: Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)2(s) [1]",
            ],
            commonError: "Students often write the full formula equation instead of the ionic equation, and include spectator ions. The ionic equation must omit spectator ions — only show the ions that form the precipitate.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "The two reagents for cation testing are NaOH(aq) and NH3(aq).",
              "State the observation completely: colour of precipitate AND whether it dissolves in excess.",
              "For the ionic equation: the precipitate is Fe(OH)2(s). What provides the OH⁻?",
              "Ionic equations only show species that change — omit Na⁺, K⁺, and other spectator ions.",
            ],
          },
          {
            id: "chem-analysis-bank-qa2-q04",
            question: "An unknown white solid Z gives the following test results: Test 1: Dissolves in water to give a colourless solution. Test 2: Flame test — lilac colour. Test 3: Add dilute nitric acid followed by silver nitrate — cream precipitate. Test 4: Add dilute HCl — no effervescence. (a) Identify the cation and anion present in solid Z. [2 marks] (b) Name the compound Z. [1 mark] (c) Write the full balanced equation for the reaction in Test 3. [2 marks] (d) Suggest why test 4 (no effervescence with HCl) is included in this investigation. [1 mark] [Total: 6 marks]",
            marks: 6,
            modelAnswer: "(a) Cation: K⁺ (potassium) — identified from the lilac flame. Anion: Br⁻ (bromide) — identified from the cream precipitate of AgBr with acidified silver nitrate solution. (b) Compound Z is potassium bromide, KBr. (c) KBr(aq) + AgNO3(aq) → AgBr(s) + KNO3(aq). (d) No effervescence with HCl confirms the absence of carbonate (CO3²⁻) ions, which would react with acid to produce CO2 gas. This rules out the possibility that the cream precipitate was caused by any carbonate interferent reacting with silver nitrate, and also confirms Z contains no carbonate.",
            markScheme: [
              "K⁺ identified from lilac flame [1]",
              "Br⁻ identified from cream precipitate with acidified AgNO3 [1]",
              "Compound named as potassium bromide / KBr [1]",
              "Balanced equation: KBr(aq) + AgNO3(aq) → AgBr(s) + KNO3(aq) [1]",
              "State symbols correct [1]",
              "Test 4 eliminates carbonate ions / confirms no CO2 produced (no false positives) [1]",
            ],
            commonError: "Students may identify the anion as chloride (white) rather than bromide (cream). The colour of the silver halide precipitate must be stated precisely — cream indicates bromide, not chloride.",
            guideRef: "Identifying Anions",
            difficulty: "challenge",
            hints: [
              "Start with the flame test — which colour uniquely identifies which Group I cation?",
              "Then identify the anion: the colour of the precipitate with acidified silver nitrate is crucial.",
              "Cream ≠ white and cream ≠ yellow — be precise.",
              "For Test 4: think about what would happen if carbonate were present — and why ruling it out matters.",
            ],
            strategy: "Identify cation (flame test) then anion (precipitation test), name the compound, then write the balanced equation systematically.",
            solutions: [
              {
                label: "Systematic identification approach",
                steps: [
                  "Flame test → lilac → K⁺ (lithium is red, sodium is yellow, calcium is orange-red)",
                  "AgNO3 on acidified solution → cream precipitate → Br⁻ (white = Cl⁻, yellow = I⁻)",
                  "Name: cation K⁺ + anion Br⁻ → potassium bromide, KBr",
                  "Equation: KBr(aq) + AgNO3(aq) → AgBr(s) + KNO3(aq) — check atom balance: K1Br1Ag1N1O3 on each side ✓",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
