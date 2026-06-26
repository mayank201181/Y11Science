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
        id: "chem-analysis-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Purity, separation techniques and paper chromatography.",
        questions: [
          {
            id: "chem-analysis-bm1-01",
            question: "Which property is the best evidence that a solid sample is pure?",
            options: [
              "It dissolves quickly in water",
              "It melts sharply at a single fixed temperature",
              "It is white in colour",
              "It boils over a wide temperature range",
            ],
            answerIndex: 1,
            explanation: "A pure solid melts sharply at one fixed temperature. Impurities depress and broaden the melting range, so a sharp melting point is the standard purity test. Colour and solubility do not indicate purity, and a wide boiling range would indicate impurity in a liquid.",
            guideRef: "Purity and Why It Matters",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm1-02",
            question: "Which technique separates an insoluble solid from a liquid?",
            options: ["Crystallisation", "Filtration", "Fractional distillation", "Chromatography"],
            answerIndex: 1,
            explanation: "Filtration traps the insoluble solid (residue) on the filter paper while the liquid (filtrate) passes through. Crystallisation recovers a dissolved solid; fractional distillation separates miscible liquids; chromatography separates soluble substances.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm1-03",
            question: "A solvent front moves 20.0 cm and a spot moves 8.0 cm from the baseline. What is the Rf value of the spot?",
            options: ["0.25", "0.40", "0.50", "2.50"],
            answerIndex: 1,
            explanation: "Rf = distance moved by spot / distance moved by solvent front = 8.0 / 20.0 = 0.40. Inverting the ratio gives 2.50 (a common error).",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm1-04",
            question: "Why must the baseline in paper chromatography be drawn in pencil rather than ink?",
            options: [
              "Pencil is easier to see than ink",
              "Ink would dissolve in the solvent and run up the paper",
              "Pencil reacts with the locating agent",
              "Ink changes the Rf value of the spots",
            ],
            answerIndex: 1,
            explanation: "Ink is a mixture of soluble dyes that would dissolve in the mobile phase and travel up the paper, ruining the chromatogram. Pencil (graphite) is insoluble and stays put on the baseline.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Think about what ink is made of.",
              "The mobile phase is a solvent that carries soluble substances upward.",
              "Graphite in pencil does not dissolve in the solvent.",
            ],
          },
          {
            id: "chem-analysis-bm1-05",
            question: "Which mixture is best separated by fractional rather than simple distillation?",
            options: [
              "Sand and water",
              "Salt dissolved in water",
              "Ethanol (b.p. 78 °C) and propan-1-ol (b.p. 97 °C)",
              "Copper sulfate crystals from solution",
            ],
            answerIndex: 2,
            explanation: "The two alcohols are miscible liquids with boiling points only 19 °C apart, so a fractionating column is needed for clean separation. Sand/water uses filtration; salt solution and copper sulfate solution use simple distillation or crystallisation.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "core",
            hints: [
              "Simple distillation works when boiling points differ by more than about 25 °C.",
              "Two liquids with close boiling points need many condensation cycles.",
              "Find the pair of miscible liquids with similar boiling points.",
            ],
          },
          {
            id: "chem-analysis-bm1-06",
            question: "During crystallisation, why is the solution cooled slowly rather than rapidly?",
            options: [
              "Slow cooling prevents the solvent boiling off",
              "Slow cooling forms fewer, larger and purer crystals",
              "Rapid cooling raises the yield of crystals",
              "Slow cooling lowers the solubility faster",
            ],
            answerIndex: 1,
            explanation: "Slow cooling allows a few crystals to grow large, excluding impurity molecules from the regular lattice. Rapid cooling produces many tiny crystals that trap impurities, giving a less pure product.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "core",
            hints: [
              "Crystal size depends on how fast the crystals form.",
              "A regular lattice growing slowly rejects impurity particles.",
              "Many tiny crystals trap mother liquor and impurities.",
            ],
          },
          {
            id: "chem-analysis-bm1-07",
            question: "A pure liquid X contains a dissolved non-volatile solid impurity. Compared with pure X, the impure sample will:",
            options: [
              "boil at a lower, sharp temperature",
              "boil at a higher temperature than pure X",
              "have an unchanged boiling point",
              "not boil at all",
            ],
            answerIndex: 1,
            explanation: "A dissolved impurity elevates the boiling point of a liquid (boiling point elevation). The impure liquid therefore boils above the boiling point of the pure liquid.",
            guideRef: "Purity and Why It Matters",
            difficulty: "core",
            hints: [
              "Impurities depress melting points but do the opposite to boiling points.",
              "A dissolved solute makes a liquid harder to boil.",
              "The boiling point rises above the pure value.",
            ],
          },
          {
            id: "chem-analysis-bm1-08",
            question: "In a chromatogram, the solvent front moves 12.0 cm. Spot M moves 9.6 cm and spot N moves 4.8 cm. A reference dye has Rf = 0.80. Which spot matches the reference?",
            options: [
              "Spot N, because Rf = 0.40",
              "Spot M, because Rf = 0.80",
              "Both spots match",
              "Neither spot matches",
            ],
            answerIndex: 1,
            explanation: "Rf(M) = 9.6/12.0 = 0.80, which matches the reference. Rf(N) = 4.8/12.0 = 0.40, which does not. Only spot M corresponds to the reference dye in this solvent.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Calculate the Rf of each spot using the same solvent-front distance.",
              "Rf = spot distance / 12.0 cm.",
              "Compare each Rf with 0.80.",
            ],
          },
          {
            id: "chem-analysis-bm1-09",
            question: "Two substances P and Q give a single spot with the same Rf value when run in solvent 1. Which conclusion is most valid?",
            options: [
              "P and Q are definitely the same substance",
              "P and Q may be the same substance; run them in a second solvent to confirm",
              "P and Q are definitely different substances",
              "P and Q must both be impure mixtures",
            ],
            answerIndex: 1,
            explanation: "Two different substances can coincidentally share an Rf value in one solvent. Running them in a second, different solvent provides a stronger test: if the Rf values still match, identity is much more strongly supported.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "challenge",
            hints: [
              "One matching Rf is suggestive but not conclusive.",
              "Different substances can have equal Rf by coincidence in one solvent.",
              "Changing the solvent changes Rf in a substance-specific way.",
              "A second solvent test strengthens the evidence.",
            ],
            strategy: "Treat a single matching Rf as evidence, not proof; design a confirmatory test by changing one variable (the solvent).",
          },
          {
            id: "chem-analysis-bm1-10",
            question: "A mixture of a soluble dye and an insoluble pigment in water must be fully separated into three pure samples: water, dye, and pigment. Which sequence achieves this?",
            options: [
              "Crystallisation, then filtration, then distillation",
              "Filtration to remove pigment, then simple distillation of the filtrate to recover water and leave the dye",
              "Chromatography, then filtration, then crystallisation",
              "Simple distillation first, then filtration of the distillate",
            ],
            answerIndex: 1,
            explanation: "Filter first to collect the insoluble pigment as residue. The filtrate is dye dissolved in water; simple distillation drives off and condenses pure water (distillate), leaving the soluble dye behind in the flask. This recovers all three components.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "challenge",
            hints: [
              "Deal with the insoluble component first.",
              "Filtration removes the pigment cleanly.",
              "The filtrate still contains dye dissolved in water.",
              "Distillation separates a solvent from a dissolved solid.",
            ],
            strategy: "Order the techniques by physical property: insoluble solid (filter) before dissolved solid (distil/crystallise).",
          },
        ],
      },
      {
        id: "chem-analysis-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Cation tests with sodium hydroxide, ammonia and flame tests.",
        questions: [
          {
            id: "chem-analysis-bm2-01",
            question: "Which cation gives a blue precipitate when aqueous sodium hydroxide is added?",
            options: ["Fe²⁺", "Cu²⁺", "Al³⁺", "Ca²⁺"],
            answerIndex: 1,
            explanation: "Cu²⁺ forms a blue precipitate of copper(II) hydroxide, Cu(OH)2. Fe²⁺ gives green, Al³⁺ and Ca²⁺ give white precipitates.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm2-02",
            question: "Which flame colour indicates potassium ions?",
            options: ["Yellow", "Lilac", "Red", "Blue-green"],
            answerIndex: 1,
            explanation: "Potassium gives a lilac flame. Yellow is sodium, red/crimson is lithium, and blue-green is copper.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm2-03",
            question: "Which cation produces ammonia gas (and no precipitate) when warmed with aqueous sodium hydroxide?",
            options: ["NH₄⁺", "Zn²⁺", "Fe³⁺", "Cu²⁺"],
            answerIndex: 0,
            explanation: "The ammonium ion, NH4⁺, reacts with warm NaOH to release ammonia gas (which turns damp red litmus blue); no precipitate forms. The metal ions instead form hydroxide precipitates.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm2-04",
            question: "A white precipitate forms with NaOH(aq) and dissolves in excess NaOH. With aqueous ammonia a white precipitate forms and dissolves in excess ammonia too. Which ion is present?",
            options: ["Al³⁺", "Zn²⁺", "Ca²⁺", "Mg²⁺"],
            answerIndex: 1,
            explanation: "Zn²⁺ is the ion whose white hydroxide dissolves in BOTH excess NaOH and excess ammonia. Al³⁺ dissolves in excess NaOH only (not in excess ammonia); Ca²⁺ does not dissolve in either.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "Both reagents give a white precipitate, so focus on solubility in excess.",
              "Al³⁺ dissolves in excess NaOH but not in excess ammonia.",
              "Only one ion dissolves in excess of BOTH reagents.",
            ],
          },
          {
            id: "chem-analysis-bm2-05",
            question: "What is the ionic equation for the reaction forming the precipitate when NaOH(aq) is added to iron(III) ions?",
            options: [
              "Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s)",
              "Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s)",
              "Fe³⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s)",
              "2Fe³⁺(aq) + 3OH⁻(aq) → Fe₂(OH)₃(s)",
            ],
            answerIndex: 1,
            explanation: "Iron(III) carries a 3+ charge, so it combines with three OH⁻ ions: Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)3(s), a red-brown precipitate. The charges and atoms balance.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "Match the number of OH⁻ ions to the charge on the metal ion.",
              "Iron(III) is 3+, so three OH⁻ are needed.",
              "Check both atoms and charges balance.",
            ],
          },
          {
            id: "chem-analysis-bm2-06",
            question: "Adding aqueous ammonia drop by drop to a salt solution gives a blue precipitate; in excess ammonia it dissolves to a deep blue solution. Which ion is present?",
            options: ["Fe²⁺", "Cu²⁺", "Zn²⁺", "Cr³⁺"],
            answerIndex: 1,
            explanation: "Cu²⁺ gives a blue hydroxide precipitate that dissolves in excess ammonia to form the deep blue tetraamminecopper(II) complex. Zn²⁺ dissolves in excess ammonia but gives a colourless solution.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "Both the precipitate colour and the colour in excess matter.",
              "A deep blue solution in excess ammonia is distinctive.",
              "Only copper(II) gives a deep blue complex with ammonia.",
            ],
          },
          {
            id: "chem-analysis-bm2-07",
            question: "Why is sodium contamination a common problem in flame tests?",
            options: [
              "Sodium has no flame colour, masking others",
              "Sodium gives a persistent yellow flame even from trace amounts",
              "Sodium reacts with the platinum wire",
              "Sodium only shows colour at very high temperatures",
            ],
            answerIndex: 1,
            explanation: "Even tiny traces of sodium produce an intense, persistent yellow flame that can mask the colours of other ions. This is why the wire must be cleaned thoroughly in concentrated acid before testing.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "Think about how strongly sodium colours a flame.",
              "Trace amounts are enough to show colour.",
              "A strong yellow can hide a faint lilac or red.",
            ],
          },
          {
            id: "chem-analysis-bm2-08",
            question: "Solution Y gives a white precipitate with NaOH(aq) that does NOT dissolve in excess, and an orange-red flame test. Which ion is present?",
            options: ["Al³⁺", "Zn²⁺", "Ca²⁺", "Mg²⁺"],
            answerIndex: 2,
            explanation: "A white precipitate insoluble in excess NaOH, combined with an orange-red flame, identifies Ca²⁺. Al³⁺ and Zn²⁺ dissolve in excess NaOH, and they (like Mg²⁺) do not give an orange-red flame.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "Insoluble in excess NaOH rules out Al³⁺ and Zn²⁺.",
              "Use the flame colour to decide between the remaining white-precipitate ions.",
              "Orange-red flame is characteristic of calcium.",
            ],
          },
          {
            id: "chem-analysis-bm2-09",
            question: "Two colourless solutions both give a white precipitate with NaOH(aq). One dissolves in excess NaOH; the other does not. Adding excess aqueous ammonia to each, neither dissolves. The two ions are most likely:",
            options: [
              "Zn²⁺ and Ca²⁺",
              "Al³⁺ and Ca²⁺",
              "Al³⁺ and Zn²⁺",
              "Ca²⁺ and Mg²⁺",
            ],
            answerIndex: 1,
            explanation: "One ion dissolves in excess NaOH (so Al³⁺ or Zn²⁺) and the other does not (so Ca²⁺ or Mg²⁺). Since NEITHER dissolves in excess ammonia, the dissolving-in-NaOH ion must be Al³⁺ (Zn²⁺ would dissolve in excess ammonia). The non-dissolving ion is Ca²⁺. So the pair is Al³⁺ and Ca²⁺.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "challenge",
            hints: [
              "One ion is amphoteric (dissolves in excess NaOH), the other is not.",
              "Zn²⁺ dissolves in excess ammonia; Al³⁺ does not.",
              "Neither dissolves in excess ammonia — so the amphoteric ion cannot be Zn²⁺.",
              "Identify each ion from both reagent behaviours together.",
            ],
            strategy: "Cross-reference behaviour in excess NaOH AND excess ammonia to pin down amphoteric ions uniquely.",
          },
          {
            id: "chem-analysis-bm2-10",
            question: "25.0 cm³ of a solution containing Cu²⁺ is reacted with exactly the right amount of NaOH to precipitate all the copper as Cu(OH)₂. If the copper concentration is 0.10 mol/dm³, what mass of NaOH (M = 40 g/mol) is required? (Cu²⁺ + 2OH⁻ → Cu(OH)₂)",
            options: ["0.10 g", "0.20 g", "0.40 g", "0.10 g per dm³"],
            answerIndex: 1,
            explanation: "Moles Cu²⁺ = 0.10 × 25.0/1000 = 0.0025 mol. From the 1:2 ratio, moles OH⁻ = moles NaOH = 2 × 0.0025 = 0.0050 mol. Mass NaOH = 0.0050 × 40 = 0.20 g.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "challenge",
            hints: [
              "First find moles of Cu²⁺ using moles = concentration × volume in dm³.",
              "Use the 1:2 mole ratio of Cu²⁺ to OH⁻ from the equation.",
              "Moles of NaOH equals moles of OH⁻.",
              "Mass = moles × molar mass.",
            ],
            strategy: "Convert volume to dm³, find moles, apply the equation ratio, then mass = moles × M.",
          },
        ],
      },
      {
        id: "chem-analysis-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Anion tests, gas tests and confirmatory procedures.",
        questions: [
          {
            id: "chem-analysis-bm3-01",
            question: "Which gas relights a glowing splint?",
            options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Ammonia"],
            answerIndex: 1,
            explanation: "Oxygen relights a glowing splint by supporting combustion. Hydrogen gives a squeaky pop with a lit splint; CO2 and NH3 do not relight a glowing splint.",
            guideRef: "Identifying Gases",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm3-02",
            question: "Which test confirms carbon dioxide gas?",
            options: [
              "It turns damp red litmus blue",
              "It bleaches damp litmus paper",
              "It turns limewater milky",
              "It produces a squeaky pop with a lit splint",
            ],
            answerIndex: 2,
            explanation: "Carbon dioxide turns limewater [Ca(OH)2(aq)] milky by forming insoluble calcium carbonate. The other options describe ammonia, chlorine and hydrogen respectively.",
            guideRef: "Identifying Gases",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm3-03",
            question: "A cream precipitate forms when acidified silver nitrate is added to a solution. Which ion is present?",
            options: ["Cl⁻", "Br⁻", "I⁻", "SO₄²⁻"],
            answerIndex: 1,
            explanation: "Silver bromide (AgBr) is a cream precipitate. Chloride gives white (AgCl), iodide gives yellow (AgI), and sulfate gives no precipitate with silver nitrate under these conditions.",
            guideRef: "Identifying Anions",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm3-04",
            question: "Before testing for sulfate ions with barium chloride, why is the solution first acidified with dilute hydrochloric acid?",
            options: [
              "To increase the solubility of barium sulfate",
              "To remove carbonate ions that would also give a white precipitate",
              "To convert sulfate into sulfite",
              "To speed up the precipitation of barium sulfate",
            ],
            answerIndex: 1,
            explanation: "Carbonate (and sulfite) ions would also form a white precipitate with barium ions, giving a false positive. Acidifying with dilute HCl removes carbonate as CO2 first, so any white precipitate that remains is genuinely barium sulfate.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "Other anions can give white precipitates with barium ions.",
              "Carbonate reacts with acid and is destroyed.",
              "Removing interferents prevents false positives.",
            ],
          },
          {
            id: "chem-analysis-bm3-05",
            question: "Which reagents are used to test for nitrate ions, producing ammonia gas on warming?",
            options: [
              "Dilute HCl then barium chloride",
              "Aluminium powder and aqueous sodium hydroxide",
              "Dilute HNO₃ then silver nitrate",
              "Limewater then a glowing splint",
            ],
            answerIndex: 1,
            explanation: "Nitrate is reduced to ammonia by aluminium (or Devarda's alloy) in warm alkaline conditions (NaOH). The ammonia produced turns damp red litmus blue, confirming nitrate.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "The nitrate test produces an alkaline gas.",
              "A reducing metal in alkali converts nitrate to ammonia.",
              "Aluminium plus sodium hydroxide is the standard combination.",
            ],
          },
          {
            id: "chem-analysis-bm3-06",
            question: "Chlorine gas is held next to damp blue and damp red litmus papers. What is observed?",
            options: [
              "Red turns blue, blue stays blue",
              "Both papers are bleached white (after blue first turns red)",
              "Both papers turn blue",
              "No change to either paper",
            ],
            answerIndex: 1,
            explanation: "Chlorine forms an acidic, oxidising solution in water; it first acts as an acid (blue → red) then bleaches both papers white because chlorine is a strong bleach. The overall observed result is bleaching of the litmus.",
            guideRef: "Identifying Gases",
            difficulty: "core",
            hints: [
              "Chlorine dissolves to form an acidic, oxidising solution.",
              "It is a powerful bleach.",
              "The dye in the paper is destroyed.",
            ],
          },
          {
            id: "chem-analysis-bm3-07",
            question: "A solid fizzes with dilute acid and the gas turns limewater milky. The solid is then dissolved and gives a yellow precipitate with acidified silver nitrate. The two anions present are:",
            options: [
              "Carbonate and chloride",
              "Carbonate and iodide",
              "Sulfate and bromide",
              "Nitrate and iodide",
            ],
            answerIndex: 1,
            explanation: "Fizzing with acid and milky limewater confirms carbonate (CO3²⁻ → CO2). A yellow precipitate with acidified silver nitrate confirms iodide (AgI). So both carbonate and iodide are present.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "Effervescence plus milky limewater identifies one anion.",
              "Yellow silver halide identifies the second anion.",
              "Match each observation to its specific ion.",
            ],
          },
          {
            id: "chem-analysis-bm3-08",
            question: "Why does AgCl dissolve in dilute aqueous ammonia while AgI does not?",
            options: [
              "AgCl is more soluble in water than AgI",
              "AgCl forms a soluble complex with ammonia more readily than the less soluble AgI",
              "AgI reacts with ammonia to form a gas",
              "AgCl is white and white precipitates always dissolve",
            ],
            answerIndex: 1,
            explanation: "Silver chloride is the most soluble of the three silver halides and dissolves in dilute ammonia by forming a soluble diamminesilver complex. Silver iodide is far less soluble and does not dissolve even in concentrated ammonia, allowing the halides to be distinguished.",
            guideRef: "Identifying Anions",
            difficulty: "challenge",
            hints: [
              "The three silver halides differ in solubility: AgCl > AgBr > AgI.",
              "Ammonia can pull silver ions into a soluble complex.",
              "The least soluble halide resists dissolving even in concentrated ammonia.",
              "Solubility in ammonia distinguishes the halides.",
            ],
            strategy: "Rank the silver halides by solubility and link ammonia solubility to complex formation.",
          },
          {
            id: "chem-analysis-bm3-09",
            question: "A gas turns damp red litmus blue and, when mixed with hydrogen chloride gas, produces dense white smoke. The gas is:",
            options: ["Chlorine", "Ammonia", "Carbon dioxide", "Hydrogen"],
            answerIndex: 1,
            explanation: "Ammonia is alkaline (turns damp red litmus blue) and reacts with hydrogen chloride to form white smoke of solid ammonium chloride: NH3 + HCl → NH4Cl. This double confirmation is characteristic of ammonia.",
            guideRef: "Identifying Gases",
            difficulty: "challenge",
            hints: [
              "Only one common gas is alkaline.",
              "That gas reacts with an acid gas to form a solid.",
              "The solid formed is a white ammonium salt.",
              "Combine both clues for certainty.",
            ],
            strategy: "Use two independent clues (litmus + reaction with HCl) to confirm a single identity.",
          },
          {
            id: "chem-analysis-bm3-10",
            question: "0.50 g of an impure carbonate, MCO₃, reacts completely with excess acid to release 0.0040 mol of CO₂. Each mole of MCO₃ gives one mole of CO₂. What is the percentage by mass of MCO₃ in the sample if its molar mass is 100 g/mol?",
            options: ["40%", "50%", "80%", "100%"],
            answerIndex: 2,
            explanation: "Moles MCO3 = moles CO2 = 0.0040 mol. Mass MCO3 = 0.0040 × 100 = 0.40 g. Percentage = (0.40 / 0.50) × 100 = 80%.",
            guideRef: "Identifying Anions",
            difficulty: "challenge",
            hints: [
              "Use the 1:1 ratio: moles of carbonate equal moles of CO2.",
              "Mass of carbonate = moles × molar mass.",
              "Percentage = (mass of carbonate / total sample mass) × 100.",
              "Total sample mass is 0.50 g.",
            ],
            strategy: "Convert CO2 moles to carbonate mass, then express as a percentage of the whole sample.",
          },
        ],
      },
      {
        id: "chem-analysis-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Mixed analysis: full identification, deductions and calculations.",
        questions: [
          {
            id: "chem-analysis-bm4-01",
            question: "Which gas test result correctly matches the gas?",
            options: [
              "Hydrogen — relights a glowing splint",
              "Oxygen — squeaky pop with a lit splint",
              "Carbon dioxide — turns limewater milky",
              "Ammonia — bleaches damp litmus",
            ],
            answerIndex: 2,
            explanation: "Carbon dioxide turns limewater milky. Hydrogen gives a squeaky pop, oxygen relights a glowing splint, and ammonia turns damp red litmus blue (chlorine, not ammonia, bleaches litmus).",
            guideRef: "Identifying Gases",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm4-02",
            question: "A pure substance gives how many spots on a correctly run chromatogram?",
            options: ["Zero", "One", "Two", "It depends on the solvent only"],
            answerIndex: 1,
            explanation: "A pure substance contains a single component and so produces a single spot. A mixture produces two or more spots.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm4-03",
            question: "A locating agent is required in chromatography when:",
            options: [
              "the spots are coloured",
              "the spots are colourless",
              "the solvent is water",
              "the Rf value is greater than 0.5",
            ],
            answerIndex: 1,
            explanation: "Colourless substances (e.g. amino acids) cannot be seen directly, so a locating agent such as ninhydrin or a UV lamp is used to reveal them. Coloured spots need no locating agent.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bm4-04",
            question: "Solution Z gives a green precipitate with NaOH(aq) and a white precipitate with acidified barium chloride. Which compound could Z be?",
            options: [
              "Iron(III) sulfate",
              "Iron(II) sulfate",
              "Copper(II) chloride",
              "Iron(II) chloride",
            ],
            answerIndex: 1,
            explanation: "A green hydroxide precipitate indicates Fe²⁺; a white precipitate with acidified barium chloride indicates sulfate. The compound is therefore iron(II) sulfate, FeSO4.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "Green precipitate with NaOH identifies the cation.",
              "White precipitate with acidified barium chloride identifies the anion.",
              "Combine cation and anion to name the salt.",
            ],
          },
          {
            id: "chem-analysis-bm4-05",
            question: "Which observation correctly distinguishes Fe²⁺ from Fe³⁺ using NaOH(aq)?",
            options: [
              "Fe²⁺ gives red-brown; Fe³⁺ gives green",
              "Fe²⁺ gives green; Fe³⁺ gives red-brown",
              "Both give blue precipitates",
              "Fe²⁺ dissolves in excess; Fe³⁺ does not",
            ],
            answerIndex: 1,
            explanation: "Fe²⁺ forms a green precipitate of Fe(OH)2; Fe³⁺ forms a red-brown precipitate of Fe(OH)3. Both are insoluble in excess NaOH.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "The two iron ions give different coloured hydroxides.",
              "Iron(II) is green; iron(III) is red-brown.",
              "Neither dissolves in excess NaOH.",
            ],
          },
          {
            id: "chem-analysis-bm4-06",
            question: "An unknown salt gives a lilac flame and effervescence with dilute acid, releasing a gas that turns limewater milky. The salt is:",
            options: [
              "Sodium carbonate",
              "Potassium carbonate",
              "Potassium sulfate",
              "Calcium carbonate",
            ],
            answerIndex: 1,
            explanation: "A lilac flame identifies potassium; effervescence with acid releasing CO2 (milky limewater) identifies carbonate. The salt is potassium carbonate, K2CO3.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "The flame colour gives the metal ion.",
              "Fizzing with acid plus milky limewater gives the anion.",
              "Lilac flame is potassium; CO2 indicates carbonate.",
            ],
          },
          {
            id: "chem-analysis-bm4-07",
            question: "A student tests for sulfate by adding barium chloride WITHOUT first acidifying. The solution actually contains carbonate, not sulfate. What happens?",
            options: [
              "No precipitate forms",
              "A white precipitate forms, giving a false positive for sulfate",
              "A coloured precipitate forms",
              "The carbonate dissolves the barium chloride",
            ],
            answerIndex: 1,
            explanation: "Barium carbonate is also a white precipitate, so omitting acidification gives a false positive. Acidifying first would have removed the carbonate as CO2, preventing the error.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "Barium forms more than one white precipitate.",
              "Carbonate plus barium gives barium carbonate (white).",
              "This is why acidification is required first.",
            ],
          },
          {
            id: "chem-analysis-bm4-08",
            question: "A white solid dissolves in water to a colourless solution, gives no flame colour other than a faint trace of yellow, a white precipitate with NaOH that dissolves in excess, and a white precipitate with acidified barium nitrate. The solid is most likely:",
            options: [
              "Calcium sulfate",
              "Aluminium sulfate",
              "Zinc carbonate",
              "Sodium sulfate",
            ],
            answerIndex: 1,
            explanation: "A white precipitate with NaOH that dissolves in excess indicates Al³⁺ or Zn²⁺; the white precipitate with acidified barium nitrate indicates sulfate. Aluminium sulfate fits (zinc carbonate has the wrong anion; calcium sulfate would not dissolve in excess NaOH; sodium sulfate gives no precipitate with NaOH).",
            guideRef: "Identifying Anions",
            difficulty: "challenge",
            hints: [
              "Dissolving in excess NaOH points to an amphoteric cation.",
              "The barium nitrate result identifies the anion as sulfate.",
              "Distinguish the amphoteric cation from the answer options.",
              "Only one option pairs an amphoteric cation with sulfate.",
            ],
            strategy: "Identify anion and cation separately, then choose the option consistent with both.",
          },
          {
            id: "chem-analysis-bm4-09",
            question: "In a titration-style precipitation, 20.0 cm³ of 0.050 mol/dm³ silver nitrate exactly precipitates all the chloride in a solution as AgCl. How many moles of chloride ions were present? (Ag⁺ + Cl⁻ → AgCl)",
            options: ["0.0010 mol", "0.0020 mol", "0.0050 mol", "0.010 mol"],
            answerIndex: 0,
            explanation: "Moles AgNO3 = 0.050 × 20.0/1000 = 0.0010 mol. The 1:1 ratio means moles Cl⁻ = 0.0010 mol.",
            guideRef: "Identifying Anions",
            difficulty: "challenge",
            hints: [
              "Find moles of silver nitrate: concentration × volume in dm³.",
              "20.0 cm³ = 0.0200 dm³.",
              "The equation has a 1:1 ratio of Ag⁺ to Cl⁻.",
              "Moles of chloride equal moles of silver nitrate used.",
            ],
            strategy: "Convert volume, compute moles, apply the 1:1 mole ratio.",
          },
          {
            id: "chem-analysis-bm4-10",
            question: "A 0.0030 mol sample of sulfate ions is precipitated as barium sulfate (BaSO₄, M = 233 g/mol). Assuming complete precipitation, what mass of dry barium sulfate is obtained?",
            options: ["0.233 g", "0.466 g", "0.699 g", "0.0030 g"],
            answerIndex: 2,
            explanation: "Each mole of sulfate gives one mole of BaSO4. Mass = 0.0030 × 233 = 0.699 g (to 3 sig figs).",
            guideRef: "Identifying Anions",
            difficulty: "challenge",
            hints: [
              "The mole ratio of SO4²⁻ to BaSO4 is 1:1.",
              "Moles of BaSO4 = 0.0030 mol.",
              "Mass = moles × molar mass.",
              "Multiply 0.0030 by 233.",
            ],
            strategy: "Apply the 1:1 ratio then mass = moles × M; round to 3 sig figs.",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-analysis-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Purity, separation techniques and chromatography structured questions.",
        questions: [
          {
            id: "chem-analysis-bq1-01",
            question: "Define a pure substance and state the two physical properties used to test the purity of a solid and a liquid. [3 marks]",
            marks: 3,
            modelAnswer: "A pure substance contains only one type of particle (one element or one compound), with nothing else mixed in. For a solid, purity is tested using the melting point: a pure solid melts sharply at a single fixed temperature. For a liquid, purity is tested using the boiling point: a pure liquid boils at a single fixed temperature.",
            markScheme: [
              "Pure substance = only one element / one compound / one type of particle [1]",
              "Solid: sharp / fixed melting point [1]",
              "Liquid: sharp / fixed boiling point [1]",
            ],
            commonError: "Using the everyday meaning of 'pure' (e.g. natural, unprocessed) rather than the chemical definition of a single substance.",
            guideRef: "Purity and Why It Matters",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bq1-02",
            question: "Name the separation technique most suitable for each: (a) removing sand from water; (b) obtaining pure water from seawater; (c) obtaining copper(II) sulfate crystals from copper(II) sulfate solution. [3 marks]",
            marks: 3,
            modelAnswer: "(a) Filtration — sand is insoluble and is trapped on the filter paper. (b) Simple distillation — water boils off and is condensed, leaving the dissolved salts behind. (c) Crystallisation — evaporate some water to concentrate the solution, then cool slowly so crystals form, and filter them off.",
            markScheme: [
              "(a) Filtration [1]",
              "(b) (Simple) distillation [1]",
              "(c) Crystallisation [1]",
            ],
            commonError: "Confusing evaporation to dryness with crystallisation in (c); evaporation to dryness gives a less pure product.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bq1-03",
            question: "A student separates a mixture of two soluble dyes by paper chromatography. The solvent front travels 14.0 cm. Dye A travels 3.5 cm and dye B travels 10.5 cm from the baseline. (a) Calculate the Rf value of each dye. [2 marks] (b) Which dye is more strongly attracted to the paper (stationary phase)? Explain. [2 marks]",
            marks: 4,
            modelAnswer: "(a) Rf(A) = 3.5 / 14.0 = 0.25. Rf(B) = 10.5 / 14.0 = 0.75. (b) Dye A is more strongly attracted to the paper. It has the lower Rf, meaning it travelled the shorter distance because it spent more time adsorbed on the stationary phase (paper) and less time dissolved in the moving solvent.",
            markScheme: [
              "Rf(A) = 3.5/14.0 = 0.25 [1]",
              "Rf(B) = 10.5/14.0 = 0.75 [1]",
              "Dye A is more strongly attracted to the paper [1]",
              "Lower Rf = more time on stationary phase / less time in mobile phase [1]",
            ],
            commonError: "Stating that the dye with the higher Rf is more attracted to the paper — it is the reverse; higher Rf means more attraction to the solvent.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Use Rf = spot distance / solvent front distance for each dye.",
              "A low Rf means the substance barely moved.",
              "Barely moving means it stuck to the stationary phase.",
            ],
            strategy: "Compute both Rf values, then reason from low Rf to strong attraction to the paper.",
            solutions: [
              {
                label: "Rf calculation",
                steps: [
                  "Rf(A) = 3.5 cm / 14.0 cm = 0.25",
                  "Rf(B) = 10.5 cm / 14.0 cm = 0.75",
                  "Lower Rf (dye A) = more strongly held by the paper",
                ],
              },
            ],
          },
          {
            id: "chem-analysis-bq1-04",
            question: "Describe how you would obtain pure dry crystals of potassium sulfate from a solution of potassium sulfate in water. Include the key steps and one precaution that improves crystal purity. [5 marks]",
            marks: 5,
            modelAnswer: "Heat the solution gently in an evaporating dish to evaporate some of the water and concentrate it (do not evaporate to dryness). Test that the solution is concentrated enough by dipping a cold glass rod in — crystals form on it. Leave the concentrated solution to cool slowly; crystals of potassium sulfate form as solubility falls. Filter to separate the crystals from the remaining solution (the mother liquor). Wash the crystals with a small amount of cold distilled water to remove soluble impurities on the surface, then dry them between sheets of filter paper or in a warm oven. Precaution: cool slowly to give larger, purer crystals (and stop heating before dryness).",
            markScheme: [
              "Heat/evaporate to concentrate the solution (not to dryness) [1]",
              "Cool the concentrated solution (slowly) to crystallise [1]",
              "Filter to collect the crystals [1]",
              "Wash with a little cold (distilled) water [1]",
              "Dry the crystals (oven / between filter papers) — and slow cooling improves purity [1]",
            ],
            commonError: "Evaporating to dryness, which traps soluble impurities in the solid and may decompose the salt.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "core",
            hints: [
              "Concentrate the solution first, but stop before it is dry.",
              "Cooling reduces solubility and forms crystals.",
              "Separate the crystals from the liquid.",
              "Wash and dry to finish, and recall what slow cooling does.",
            ],
            strategy: "Follow the standard sequence: concentrate → cool → filter → wash → dry.",
          },
          {
            id: "chem-analysis-bq1-05",
            question: "Explain, in terms of particles, why an impurity lowers and broadens the melting point of a solid. [3 marks]",
            marks: 3,
            modelAnswer: "In a pure solid the particles are arranged in a regular, ordered crystal lattice, so a single fixed amount of energy breaks the lattice and it melts at one sharp temperature. Impurity particles disrupt the regular lattice, so less energy is needed to start breaking it apart, lowering the temperature at which melting begins. Because different regions contain different amounts of impurity, melting occurs gradually over a range of temperatures rather than at one sharp point.",
            markScheme: [
              "Pure solid has a regular/ordered lattice melting at one fixed temperature [1]",
              "Impurity disrupts the lattice so less energy needed / melting point lowered [1]",
              "Uneven impurity distribution causes melting over a range (broadening) [1]",
            ],
            commonError: "Saying impurities raise the melting point (this is true for boiling point, not melting point of a solid).",
            guideRef: "Purity and Why It Matters",
            difficulty: "core",
            hints: [
              "Start from the regular lattice of a pure solid.",
              "Impurities break up that regular arrangement.",
              "Disruption means less energy needed and a spread of melting temperatures.",
            ],
          },
          {
            id: "chem-analysis-bq1-06",
            question: "A student sets up paper chromatography but accidentally fills the beaker so the solvent level is ABOVE the baseline where the spots were placed. (a) State what would happen to the experiment. [1 mark] (b) Explain why this ruins the result. [2 marks] (c) State two other precautions needed for a valid chromatogram. [2 marks]",
            marks: 5,
            modelAnswer: "(a) The spots would dissolve directly into the solvent in the beaker and be washed away rather than being carried up the paper. (b) Because the baseline is submerged, the sample dissolves straight into the bulk solvent instead of travelling up the paper by capillary action, so no proper separation occurs and no usable spots or Rf values are produced. (c) Any two of: draw the baseline in pencil (not ink, which would run); cover the beaker with a lid to keep the atmosphere saturated with solvent vapour and prevent uneven evaporation; allow the solvent to rise nearly to the top before removing and marking the solvent front immediately.",
            markScheme: [
              "(a) The spots dissolve into the solvent / are washed away [1]",
              "(b) Baseline submerged so sample dissolves into bulk solvent, not carried up paper [1]",
              "(b) No proper separation / no valid Rf values [1]",
              "(c) Use a pencil baseline [1]",
              "(c) Cover the container / mark the solvent front promptly (any valid second precaution) [1]",
            ],
            commonError: "Stating only that 'it would not work' without explaining that the spots dissolve into the solvent.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Picture the spots sitting below the solvent surface.",
              "What happens to a soluble substance placed directly in solvent?",
              "Separation only happens as solvent rises THROUGH the paper.",
              "Recall the standard set-up rules (pencil, covered beaker, solvent front).",
            ],
          },
          {
            id: "chem-analysis-bq1-07",
            question: "Crude oil is separated industrially by fractional distillation. (a) Explain why a fractionating column achieves better separation than a simple distillation flask. [3 marks] (b) State why fractions collected near the top of the column have lower boiling points than those collected near the bottom. [2 marks]",
            marks: 5,
            modelAnswer: "(a) A fractionating column is long and provides a temperature gradient, cool at the top and hot at the bottom. As vapour rises it repeatedly condenses and re-evaporates many times. Each condensation/re-evaporation cycle enriches the rising vapour in the more volatile (lower boiling point) component, so the separation is far more efficient than the single stage of a simple distillation. (b) The top of the column is cooler. Only substances with low boiling points remain as vapour and reach the top; higher boiling point fractions condense lower down where it is hotter, so fractions are collected at heights matching their boiling points.",
            markScheme: [
              "Column gives a temperature gradient (hot bottom, cool top) [1]",
              "Repeated condensation and re-evaporation (many cycles/plates) [1]",
              "Each cycle enriches vapour in the more volatile component → better separation [1]",
              "Top is cooler so only low boiling point substances stay as vapour and reach the top [1]",
              "Higher boiling point fractions condense lower down (hotter) [1]",
            ],
            commonError: "Describing the products of crude oil rather than explaining the separation mechanism.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "challenge",
            hints: [
              "Think about the temperature along the height of the column.",
              "Vapour does not rise in one go — it condenses and re-evaporates.",
              "Each cycle improves the purity of the rising vapour.",
              "Link collection height to boiling point.",
            ],
            strategy: "Explain the temperature gradient and repeated condensation, then connect height to boiling point.",
          },
          {
            id: "chem-analysis-bq1-08",
            question: "Two colourless amino acids are separated by chromatography. The solvent front moves 15.0 cm. After spraying with ninhydrin, spot 1 appears at 6.0 cm and spot 2 at 12.0 cm. (a) Why is ninhydrin needed here? [1 mark] (b) Calculate the Rf values. [2 marks] (c) A reference amino acid, glycine, has Rf = 0.40 in this solvent. Identify which spot is glycine and justify your answer. [2 marks]",
            marks: 5,
            modelAnswer: "(a) The amino acids are colourless, so their spots cannot be seen; ninhydrin is a locating agent that reacts with amino acids to give visible purple/brown spots. (b) Rf(spot 1) = 6.0/15.0 = 0.40; Rf(spot 2) = 12.0/15.0 = 0.80. (c) Spot 1 is glycine, because its Rf value (0.40) matches the reference Rf for glycine (0.40) in the same solvent under the same conditions. Spot 2, with Rf = 0.80, is a different amino acid.",
            markScheme: [
              "(a) Amino acids are colourless; ninhydrin reveals them as visible (purple) spots [1]",
              "Rf(spot 1) = 6.0/15.0 = 0.40 [1]",
              "Rf(spot 2) = 12.0/15.0 = 0.80 [1]",
              "Spot 1 identified as glycine [1]",
              "Justified by matching Rf (0.40) in the same solvent [1]",
            ],
            commonError: "Forgetting that identification by Rf is only valid in the SAME solvent and conditions as the reference.",
            guideRef: "Paper Chromatography and Rf Values",
            difficulty: "core",
            hints: [
              "Colourless spots need a way to be seen.",
              "Use Rf = spot distance / solvent front distance.",
              "Match the calculated Rf to the reference value.",
              "Only matching in the same solvent counts.",
            ],
            strategy: "Justify the locating agent, calculate Rf values, then match to the reference.",
            solutions: [
              {
                label: "Rf and identification",
                steps: [
                  "Rf(spot 1) = 6.0 / 15.0 = 0.40",
                  "Rf(spot 2) = 12.0 / 15.0 = 0.80",
                  "Glycine reference Rf = 0.40 → matches spot 1",
                ],
              },
            ],
          },
          {
            id: "chem-analysis-bq1-09",
            question: "A student is given two white solids, A and B, and told they may or may not be the same compound. Both melt sharply at 80 °C. Describe how a mixed melting point test could determine whether A and B are the same compound, and explain the reasoning. [4 marks]",
            marks: 4,
            modelAnswer: "Mix samples of A and B together thoroughly in roughly equal amounts and measure the melting point of the mixture. If A and B are the same pure compound, the mixture is still pure, so it will melt sharply at 80 °C, the same as each alone. If A and B are different compounds, each acts as an impurity in the other, so the mixture will melt over a lower, broadened range (below 80 °C). A sharp melting point at 80 °C for the mixture indicates they are the same compound; a depressed, broadened range indicates they are different.",
            markScheme: [
              "Mix A and B and measure the melting point of the mixture [1]",
              "Same compound → mixture still melts sharply at 80 °C [1]",
              "Different compounds → each is an impurity → depressed and broadened melting point [1]",
              "Correct conclusion linking sharp vs broadened result to same/different [1]",
            ],
            commonError: "Concluding from the individual melting points alone; two different compounds can share a melting point, so only the mixed test is diagnostic.",
            guideRef: "Purity and Why It Matters",
            difficulty: "challenge",
            hints: [
              "Equal individual melting points are not enough to prove identity.",
              "Mix the two solids and test the mixture.",
              "Same substance mixed with itself stays pure.",
              "Different substances depress each other's melting point.",
            ],
            strategy: "Use the mixed melting point as the diagnostic test: no depression means the same compound.",
          },
          {
            id: "chem-analysis-bq1-10",
            question: "A 50.0 g sample of rock salt contains sodium chloride mixed with insoluble sand. A student dissolves the sample in water, filters, and evaporates the filtrate to obtain 41.0 g of dry sodium chloride. (a) Outline the role of the filtration step. [1 mark] (b) Calculate the percentage by mass of sodium chloride in the rock salt. [2 marks] (c) Suggest one reason the recovered mass might be slightly lower than the true salt content. [1 mark]",
            marks: 4,
            modelAnswer: "(a) Filtration removes the insoluble sand (residue) from the dissolved sodium chloride solution (filtrate). (b) Percentage NaCl = (41.0 / 50.0) × 100 = 82.0%. (c) Some sodium chloride solution may remain on the sand/filter paper or be lost during transfer, so not all the salt is recovered (alternatively, some salt may not have fully dissolved).",
            markScheme: [
              "(a) Filtration separates insoluble sand (residue) from the salt solution (filtrate) [1]",
              "Percentage = (41.0/50.0) × 100 [1]",
              "= 82.0% [1]",
              "(c) Loss of salt solution on the filter/sand or during transfer (any valid reason) [1]",
            ],
            commonError: "Dividing the wrong way round (50.0/41.0) or forgetting to multiply by 100.",
            guideRef: "Separation and Purification Techniques",
            difficulty: "core",
            hints: [
              "Filtration handles the insoluble component.",
              "Percentage = (mass recovered / total mass) × 100.",
              "Use 41.0 g over 50.0 g.",
              "Think about where small amounts of salt could be lost.",
            ],
            strategy: "Identify the role, then apply percentage = part/whole × 100, and consider practical losses.",
            solutions: [
              {
                label: "Percentage calculation",
                steps: [
                  "Mass of NaCl recovered = 41.0 g",
                  "Total sample mass = 50.0 g",
                  "Percentage = (41.0 / 50.0) × 100 = 82.0%",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-analysis-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Cation identification: hydroxide, ammonia and flame tests.",
        questions: [
          {
            id: "chem-analysis-bq2-01",
            question: "State the precipitate colour formed when aqueous sodium hydroxide is added to solutions of: (a) Cu²⁺; (b) Fe²⁺; (c) Fe³⁺; (d) Al³⁺. [4 marks]",
            marks: 4,
            modelAnswer: "(a) Cu²⁺ → blue precipitate. (b) Fe²⁺ → green precipitate. (c) Fe³⁺ → red-brown precipitate. (d) Al³⁺ → white precipitate (dissolves in excess NaOH).",
            markScheme: [
              "(a) Cu²⁺ blue [1]",
              "(b) Fe²⁺ green [1]",
              "(c) Fe³⁺ red-brown [1]",
              "(d) Al³⁺ white [1]",
            ],
            commonError: "Confusing the iron(II) green with iron(III) red-brown.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bq2-02",
            question: "Describe the flame test procedure and give the flame colours for lithium, sodium and copper(II). [4 marks]",
            marks: 4,
            modelAnswer: "Procedure: clean a nichrome (or platinum) wire by dipping it in concentrated hydrochloric acid and holding it in a hot blue Bunsen flame until no colour shows. Dip the clean wire into the solid (or solution) sample and hold it in the edge of the blue flame; observe the colour. Colours: lithium → red/crimson; sodium → yellow; copper(II) → blue-green.",
            markScheme: [
              "Clean wire in (concentrated) HCl / until no colour, then dip in sample and hold in flame [1]",
              "Lithium → red/crimson [1]",
              "Sodium → yellow [1]",
              "Copper(II) → blue-green [1]",
            ],
            commonError: "Omitting the cleaning step, which is essential to avoid contamination (especially by sodium).",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bq2-03",
            question: "A solution gives a white precipitate with a few drops of aqueous sodium hydroxide. (a) State three cations this could be. [3 marks] (b) Describe how adding excess sodium hydroxide, then a fresh sample with excess ammonia, could distinguish them. [3 marks]",
            marks: 6,
            modelAnswer: "(a) The cation could be Al³⁺, Zn²⁺ or Ca²⁺ (all give white hydroxide precipitates). (b) Add excess NaOH: Al³⁺ and Zn²⁺ precipitates dissolve, Ca²⁺ does not — this separates Ca²⁺ from the other two. To distinguish Al³⁺ from Zn²⁺, take a fresh sample and add excess aqueous ammonia: the Zn²⁺ precipitate dissolves in excess ammonia, but the Al³⁺ precipitate does not. So: dissolves in excess NaOH but not excess NH3 = Al³⁺; dissolves in both = Zn²⁺; dissolves in neither = Ca²⁺.",
            markScheme: [
              "(a) Al³⁺ [1]; Zn²⁺ [1]; Ca²⁺ [1]",
              "(b) Excess NaOH: Al³⁺ and Zn²⁺ dissolve, Ca²⁺ does not [1]",
              "(b) Excess NH3: Zn²⁺ dissolves, Al³⁺ does not [1]",
              "(b) Correct overall assignment of all three ions [1]",
            ],
            commonError: "Assuming both Al³⁺ and Zn²⁺ behave the same in ammonia; only Zn²⁺ dissolves in excess ammonia.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "List the cations that give white hydroxide precipitates.",
              "Excess NaOH separates calcium from the amphoteric ions.",
              "Excess ammonia separates zinc from aluminium.",
              "Combine both tests to assign each ion.",
            ],
            strategy: "Use two reagents in excess to build a decision tree distinguishing three white-precipitate cations.",
          },
          {
            id: "chem-analysis-bq2-04",
            question: "Write ionic equations (with state symbols) for the precipitation reactions of: (a) Cu²⁺ with hydroxide ions; (b) Fe³⁺ with hydroxide ions. [4 marks]",
            marks: 4,
            modelAnswer: "(a) Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s). (b) Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s).",
            markScheme: [
              "(a) Correct formulae and 1:2 ratio: Cu²⁺ + 2OH⁻ → Cu(OH)2 [1]; state symbols correct [1]",
              "(b) Correct formulae and 1:3 ratio: Fe³⁺ + 3OH⁻ → Fe(OH)3 [1]; state symbols correct [1]",
            ],
            commonError: "Using the wrong number of hydroxide ions (not matching the metal ion charge) or omitting state symbols.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "The number of OH⁻ matches the positive charge on the metal ion.",
              "Cu²⁺ needs two OH⁻; Fe³⁺ needs three.",
              "Ions in solution are (aq); the precipitate is (s).",
            ],
          },
          {
            id: "chem-analysis-bq2-05",
            question: "An ammonium salt is warmed with aqueous sodium hydroxide. (a) Name the gas produced and the test result that identifies it. [2 marks] (b) Write the ionic equation for the reaction producing the gas. [2 marks] (c) Explain why no precipitate forms in this test. [1 mark]",
            marks: 5,
            modelAnswer: "(a) Ammonia gas is produced; it turns damp red litmus paper blue. (b) NH4⁺(aq) + OH⁻(aq) → NH3(g) + H2O(l). (c) The ammonium ion is not a metal cation that forms an insoluble hydroxide; instead it reacts with hydroxide to give ammonia gas and water, so there is no insoluble solid (precipitate) formed.",
            markScheme: [
              "(a) Ammonia / NH3 [1]; turns damp red litmus blue [1]",
              "(b) NH4⁺(aq) + OH⁻(aq) → NH3(g) + H2O(l) [1]; correct state symbols/balance [1]",
              "(c) NH4⁺ forms a gas (and water) with OH⁻, not an insoluble hydroxide [1]",
            ],
            commonError: "Writing a metal-hydroxide style precipitate; ammonium gives a gas, not a precipitate.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "An alkaline gas turns damp red litmus blue.",
              "The products are a gas and water.",
              "Balance the single-charged ions one to one.",
              "Ask whether ammonium can form an insoluble hydroxide.",
            ],
          },
          {
            id: "chem-analysis-bq2-06",
            question: "Explain why aluminium hydroxide dissolves in excess sodium hydroxide but calcium hydroxide does not. [3 marks]",
            marks: 3,
            modelAnswer: "Aluminium hydroxide, Al(OH)3, is amphoteric: it can react as an acid towards excess hydroxide ions, forming the soluble aluminate ion [Al(OH)4]⁻, so the white precipitate dissolves. Calcium hydroxide is a simple (basic) hydroxide and cannot react further with hydroxide ions, so it remains as an insoluble precipitate in excess sodium hydroxide.",
            markScheme: [
              "Al(OH)3 is amphoteric / reacts as an acid with excess OH⁻ [1]",
              "Forms a soluble aluminate ion [Al(OH)4]⁻ / soluble complex, so precipitate dissolves [1]",
              "Ca(OH)2 is a basic hydroxide that cannot react with more OH⁻, so stays insoluble [1]",
            ],
            commonError: "Stating only that aluminium 'dissolves' without explaining the amphoteric reaction with excess hydroxide.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "Aluminium hydroxide can act as both an acid and a base.",
              "Acting as an acid, it reacts with excess hydroxide.",
              "Calcium hydroxide cannot react further with hydroxide.",
            ],
          },
          {
            id: "chem-analysis-bq2-07",
            question: "A green solution gives a green precipitate with NaOH(aq). On standing in air, the precipitate slowly turns red-brown at its surface. (a) Identify the original cation. [1 mark] (b) Explain the colour change to red-brown. [2 marks] (c) State what you would observe on adding excess NaOH to the original green precipitate. [1 mark]",
            marks: 4,
            modelAnswer: "(a) The original cation is Fe²⁺ (iron(II)). (b) Iron(II) hydroxide is slowly oxidised by oxygen in the air at the surface to iron(III) hydroxide, Fe(OH)3, which is red-brown; this is why the surface changes colour over time. (c) The green precipitate does not dissolve in excess NaOH (it remains as a green precipitate).",
            markScheme: [
              "(a) Fe²⁺ / iron(II) [1]",
              "(b) Fe(OH)2 is oxidised by oxygen/air to Fe(OH)3 [1]; Fe(OH)3 is red-brown [1]",
              "(c) Precipitate insoluble in excess NaOH / remains green [1]",
            ],
            commonError: "Attributing the colour change to a reaction with NaOH rather than oxidation by air.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "challenge",
            hints: [
              "Green hydroxide indicates which iron ion?",
              "Red-brown is the colour of the other iron hydroxide.",
              "What in the air could change iron(II) to iron(III)?",
              "Recall iron hydroxides' behaviour in excess NaOH.",
            ],
            strategy: "Link the colour change to air oxidation of iron(II) to iron(III).",
          },
          {
            id: "chem-analysis-bq2-08",
            question: "A student claims a solution contains potassium ions because the flame is yellow. Evaluate this claim and describe how to test the claim correctly. [3 marks]",
            marks: 3,
            modelAnswer: "The claim is wrong: a yellow flame indicates sodium, not potassium (potassium gives a lilac flame). The yellow colour may be due to sodium contamination, which is intense and can mask a lilac potassium flame. To test correctly, the wire must be cleaned thoroughly in concentrated HCl until no colour shows, then the sample tested again; viewing the flame through blue cobalt glass can filter out the yellow sodium light and reveal a lilac potassium flame if potassium is present.",
            markScheme: [
              "Claim is incorrect: yellow = sodium, not potassium (potassium is lilac) [1]",
              "Yellow may be sodium contamination masking potassium [1]",
              "Clean wire thoroughly / view through blue cobalt glass to detect potassium [1]",
            ],
            commonError: "Accepting the yellow flame as potassium; yellow is the classic sodium colour.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "Recall the correct flame colour for potassium.",
              "Yellow is associated with a very common contaminant.",
              "Think how to remove or filter out the contaminant's colour.",
            ],
          },
          {
            id: "chem-analysis-bq2-09",
            question: "30.0 cm³ of an iron(II) sulfate solution is treated with excess NaOH, precipitating all the iron as Fe(OH)₂. The dry precipitate has a mass of 0.270 g. (Fe(OH)₂, M = 90 g/mol.) (a) Calculate the moles of Fe(OH)₂ formed. [1 mark] (b) Calculate the concentration of Fe²⁺ in the original solution in mol/dm³. [3 marks]",
            marks: 4,
            modelAnswer: "(a) Moles Fe(OH)2 = mass / M = 0.270 / 90 = 0.0030 mol. (b) Each Fe²⁺ gives one Fe(OH)2, so moles Fe²⁺ = 0.0030 mol. Volume = 30.0 cm³ = 0.0300 dm³. Concentration = moles / volume = 0.0030 / 0.0300 = 0.10 mol/dm³.",
            markScheme: [
              "(a) Moles Fe(OH)2 = 0.270/90 = 0.0030 mol [1]",
              "(b) Moles Fe²⁺ = 0.0030 mol (1:1 ratio) [1]",
              "(b) Volume = 0.0300 dm³ [1]",
              "(b) Concentration = 0.0030/0.0300 = 0.10 mol/dm³ [1]",
            ],
            commonError: "Failing to convert cm³ to dm³ (dividing by 1000), giving a concentration 1000× too small.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "challenge",
            hints: [
              "Moles = mass / molar mass.",
              "The Fe²⁺ to Fe(OH)2 ratio is 1:1.",
              "Convert 30.0 cm³ to dm³ by dividing by 1000.",
              "Concentration = moles / volume in dm³.",
            ],
            strategy: "Find moles of precipitate, apply the 1:1 ratio, convert volume, then divide.",
            solutions: [
              {
                label: "Concentration calculation",
                steps: [
                  "Moles Fe(OH)2 = 0.270 g / 90 g/mol = 0.0030 mol",
                  "Moles Fe²⁺ = 0.0030 mol (1:1)",
                  "Volume = 30.0 cm³ ÷ 1000 = 0.0300 dm³",
                  "Concentration = 0.0030 mol / 0.0300 dm³ = 0.10 mol/dm³",
                ],
              },
            ],
          },
          {
            id: "chem-analysis-bq2-10",
            question: "Three unlabelled solutions contain copper(II) sulfate, iron(III) chloride and zinc nitrate. Describe a single reagent test (and any further step) that would distinguish all three, stating the observations. [5 marks]",
            marks: 5,
            modelAnswer: "Add aqueous sodium hydroxide to a sample of each. Copper(II) sulfate gives a blue precipitate; iron(III) chloride gives a red-brown precipitate; zinc nitrate gives a white precipitate. To confirm the zinc (white) sample, add excess NaOH: the zinc precipitate dissolves to a colourless solution, while the blue and red-brown precipitates do not dissolve. The distinctive colours alone already distinguish all three cations, with the excess-NaOH step confirming zinc.",
            markScheme: [
              "Add NaOH(aq) to each sample [1]",
              "Copper(II) → blue precipitate [1]",
              "Iron(III) → red-brown precipitate [1]",
              "Zinc → white precipitate [1]",
              "Confirm zinc: white precipitate dissolves in excess NaOH (colourless) [1]",
            ],
            commonError: "Choosing flame tests, which would not cleanly distinguish all three here; NaOH gives three distinct precipitate colours in one step.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "challenge",
            hints: [
              "A single reagent that gives different coloured precipitates is ideal.",
              "Sodium hydroxide gives blue, red-brown and white for these ions.",
              "Use excess of the reagent to confirm the amphoteric one.",
              "State the colour for each cation.",
            ],
            strategy: "Pick one reagent that yields three distinct observations, then add a confirming step for the ambiguous case.",
          },
        ],
      },
      {
        id: "chem-analysis-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Anion and gas identification, including confirmatory tests.",
        questions: [
          {
            id: "chem-analysis-bq3-01",
            question: "State the test and positive result for each gas: (a) hydrogen; (b) oxygen; (c) ammonia. [3 marks]",
            marks: 3,
            modelAnswer: "(a) Hydrogen: hold a lighted splint at the mouth of the tube — a squeaky pop is heard. (b) Oxygen: hold a glowing splint at the mouth of the tube — it relights. (c) Ammonia: hold damp red litmus paper near the gas — it turns blue.",
            markScheme: [
              "(a) Lighted splint → squeaky pop [1]",
              "(b) Glowing splint → relights [1]",
              "(c) Damp red litmus → turns blue [1]",
            ],
            commonError: "Mixing up the lighted splint (hydrogen) and glowing splint (oxygen) tests.",
            guideRef: "Identifying Gases",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bq3-02",
            question: "Describe the test for carbonate ions in a solid, including the chemical that is added, the gas produced, and the confirmatory test for that gas. [3 marks]",
            marks: 3,
            modelAnswer: "Add dilute acid (e.g. dilute hydrochloric acid) to the solid. If a carbonate is present, effervescence occurs and a colourless gas is given off. Bubble this gas through limewater: the limewater turns milky (cloudy), confirming the gas is carbon dioxide and therefore that a carbonate is present.",
            markScheme: [
              "Add dilute acid (HCl) [1]",
              "Effervescence / gas produced is carbon dioxide [1]",
              "Bubble through limewater → turns milky [1]",
            ],
            commonError: "Stating only that a gas is produced without the limewater confirmatory step.",
            guideRef: "Identifying Anions",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bq3-03",
            question: "Describe the full test for sulfate ions, including why the solution is acidified first, and give the ionic equation for the positive result. [4 marks]",
            marks: 4,
            modelAnswer: "Add dilute hydrochloric acid to the solution to remove any carbonate (and sulfite) ions, which would otherwise give a false positive white precipitate. Then add barium chloride (or barium nitrate) solution. A white precipitate of barium sulfate forms if sulfate is present. Ionic equation: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s).",
            markScheme: [
              "Acidify with dilute HCl [1]",
              "Reason: removes carbonate/sulfite that would give a false positive [1]",
              "Add barium chloride/nitrate → white precipitate [1]",
              "Ba²⁺(aq) + SO4²⁻(aq) → BaSO4(s) [1]",
            ],
            commonError: "Omitting the acidification step or its reason, which is a frequent mark loss.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "First eliminate ions that also form white precipitates with barium.",
              "Acid destroys carbonate.",
              "Barium ions then precipitate sulfate.",
              "Write the 1:1 ionic equation with state symbols.",
            ],
          },
          {
            id: "chem-analysis-bq3-04",
            question: "Explain how the silver nitrate test, combined with solubility in ammonia, distinguishes chloride, bromide and iodide ions. [5 marks]",
            marks: 5,
            modelAnswer: "Acidify the solution with dilute nitric acid (to remove interfering anions such as carbonate), then add silver nitrate solution. Chloride gives a white precipitate (AgCl); bromide gives a cream precipitate (AgBr); iodide gives a yellow precipitate (AgI). To confirm: add dilute aqueous ammonia — AgCl dissolves readily. Add concentrated ammonia — AgBr dissolves (it is only partially soluble in dilute ammonia), but AgI does not dissolve even in concentrated ammonia. The differing solubilities in ammonia therefore confirm which halide is present.",
            markScheme: [
              "Acidify with dilute HNO3, then add silver nitrate [1]",
              "Cl⁻ → white; Br⁻ → cream; I⁻ → yellow [1]",
              "AgCl dissolves in dilute ammonia [1]",
              "AgBr dissolves in concentrated ammonia [1]",
              "AgI does not dissolve in ammonia (even concentrated) [1]",
            ],
            commonError: "Relying on colour alone; the cream and yellow can be hard to tell apart, so the ammonia solubility test gives confirmation.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "Acidify with nitric acid before adding silver nitrate.",
              "Each halide gives a different coloured silver precipitate.",
              "Ammonia dissolves the silver halides to different extents.",
              "AgCl > AgBr > AgI in solubility in ammonia.",
            ],
            strategy: "Use precipitate colour to narrow down, then ammonia solubility to confirm.",
          },
          {
            id: "chem-analysis-bq3-05",
            question: "Describe the chemical test for nitrate ions in solution and explain the chemistry behind the positive result. [4 marks]",
            marks: 4,
            modelAnswer: "Add aqueous sodium hydroxide to the solution, then add aluminium powder (or foil), and warm gently. If nitrate is present, ammonia gas is produced, which turns damp red litmus paper held above the tube blue. The chemistry: in the alkaline conditions, aluminium acts as a reducing agent and reduces the nitrate ion all the way to ammonia, while the aluminium is oxidised. The release of an alkaline gas (ammonia) that turns red litmus blue is the positive result.",
            markScheme: [
              "Add NaOH(aq) and aluminium (powder/foil), then warm [1]",
              "Ammonia gas produced [1]",
              "Turns damp red litmus paper blue [1]",
              "Aluminium reduces nitrate to ammonia (in alkali) [1]",
            ],
            commonError: "Forgetting the aluminium (the reducing agent) — NaOH alone does not produce ammonia from nitrate.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "The test produces an alkaline gas.",
              "A reducing metal is needed in alkaline conditions.",
              "Nitrate is reduced to ammonia.",
              "Confirm with damp red litmus.",
            ],
          },
          {
            id: "chem-analysis-bq3-06",
            question: "When limewater is left bubbling with carbon dioxide for a long time, the initial milky appearance clears again. (a) Explain why limewater first turns milky. [2 marks] (b) Explain why it then clears with excess CO₂. [2 marks]",
            marks: 4,
            modelAnswer: "(a) Carbon dioxide reacts with calcium hydroxide in limewater to form insoluble calcium carbonate, which makes the limewater appear milky/cloudy: CO2 + Ca(OH)2 → CaCO3 + H2O. (b) With excess carbon dioxide, the insoluble calcium carbonate reacts further with CO2 and water to form soluble calcium hydrogencarbonate, so the precipitate dissolves and the solution clears: CaCO3 + H2O + CO2 → Ca(HCO3)2.",
            markScheme: [
              "(a) CO2 + Ca(OH)2 → CaCO3 + H2O [1]; CaCO3 is insoluble → milky [1]",
              "(b) Excess CO2: CaCO3 + H2O + CO2 → Ca(HCO3)2 [1]; soluble hydrogencarbonate forms → clears [1]",
            ],
            commonError: "Saying the calcium carbonate simply 'disappears' without identifying the soluble hydrogencarbonate formed.",
            guideRef: "Identifying Gases",
            difficulty: "challenge",
            hints: [
              "Milkiness is an insoluble solid forming.",
              "Name the insoluble solid (calcium carbonate).",
              "Excess CO2 reacts further with that solid.",
              "The product formed is soluble.",
            ],
            strategy: "Track the calcium species: hydroxide → insoluble carbonate → soluble hydrogencarbonate.",
          },
          {
            id: "chem-analysis-bq3-07",
            question: "A gas is suspected to be chlorine. (a) Describe the test and positive result. [2 marks] (b) Give one safety precaution when handling chlorine. [1 mark] (c) Explain, with reference to a reaction, why chlorine bleaches damp litmus. [2 marks]",
            marks: 5,
            modelAnswer: "(a) Hold a piece of damp litmus paper (or damp universal indicator paper) near the mouth of the tube; with chlorine the paper is bleached white (it may briefly turn red first because chlorine is acidic). (b) Work in a fume cupboard / avoid inhaling the gas, as chlorine is toxic with a choking smell. (c) Chlorine reacts with the water on the damp paper to form hydrochloric acid and hypochlorous acid (chloric(I) acid): Cl2 + H2O → HCl + HClO. The HClO is a strong oxidising agent (bleach) that oxidises and destroys the coloured dye in the litmus, so the paper goes white.",
            markScheme: [
              "(a) Damp litmus paper held near gas [1]; bleached/turns white [1]",
              "(b) Use a fume cupboard / do not inhale (chlorine is toxic) [1]",
              "(c) Cl2 + H2O → HCl + HClO (forms hypochlorous/chloric(I) acid) [1]",
              "(c) HClO oxidises/destroys the dye → bleaching [1]",
            ],
            commonError: "Saying chlorine simply 'turns litmus red' (that is only the acidic effect) without mentioning the bleaching that follows.",
            guideRef: "Identifying Gases",
            difficulty: "challenge",
            hints: [
              "Chlorine is tested with damp litmus.",
              "The key observation is bleaching, not just a colour change.",
              "Chlorine reacts with water to form an oxidising acid.",
              "That oxidising species destroys the dye.",
            ],
            strategy: "Separate the acidic effect (red) from the bleaching effect (white) and explain via HClO.",
          },
          {
            id: "chem-analysis-bq3-08",
            question: "A solid sample is thought to be sodium hydrogencarbonate, NaHCO₃. Heating it produces a gas that turns limewater milky and water vapour. (a) Name the gas turning limewater milky. [1 mark] (b) Write a balanced equation for the thermal decomposition: 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂. Check it is balanced. [2 marks] (c) Suggest one further test to confirm sodium is present. [1 mark]",
            marks: 4,
            modelAnswer: "(a) Carbon dioxide. (b) 2NaHCO3 → Na2CO3 + H2O + CO2. Checking: Na: 2 = 2; H: 2 = 2; C: 2 = 1 + 1 = 2; O: 6 = 3 + 1 + 2 = 6. The equation is balanced. (c) A flame test: a yellow flame confirms the presence of sodium.",
            markScheme: [
              "(a) Carbon dioxide / CO2 [1]",
              "(b) Equation 2NaHCO3 → Na2CO3 + H2O + CO2 [1]; correct check that atoms balance (Na 2, H 2, C 2, O 6) [1]",
              "(c) Flame test → yellow flame confirms sodium [1]",
            ],
            commonError: "Not checking atom balance, especially oxygen, which totals 6 on each side.",
            guideRef: "Identifying Gases",
            difficulty: "core",
            hints: [
              "Milky limewater identifies which gas?",
              "Count each element on both sides of the given equation.",
              "Oxygen is the trickiest — total it carefully.",
              "Sodium is confirmed by a flame test.",
            ],
            strategy: "Identify the gas, verify the balance element by element, then add a cation confirmation.",
          },
          {
            id: "chem-analysis-bq3-09",
            question: "An unknown solution contains a single sodium salt. The following results are obtained: flame test yellow; with acidified barium chloride a white precipitate forms; with acidified silver nitrate no precipitate forms; with dilute acid no effervescence. (a) Identify the anion. [1 mark] (b) Name the salt. [1 mark] (c) Explain how the other test results support your conclusion. [3 marks]",
            marks: 5,
            modelAnswer: "(a) The anion is sulfate (SO4²⁻). (b) The salt is sodium sulfate, Na2SO4. (c) The white precipitate with acidified barium chloride is barium sulfate, confirming sulfate. No precipitate with acidified silver nitrate rules out halides (chloride, bromide, iodide). No effervescence with dilute acid rules out carbonate. The yellow flame confirms the cation is sodium. Together these results uniquely identify sodium sulfate.",
            markScheme: [
              "(a) Sulfate / SO4²⁻ [1]",
              "(b) Sodium sulfate / Na2SO4 [1]",
              "(c) White precipitate with barium chloride = sulfate [1]",
              "(c) No precipitate with silver nitrate rules out halides [1]",
              "(c) No effervescence rules out carbonate / yellow flame confirms sodium [1]",
            ],
            commonError: "Forgetting to use the negative results (no halide, no carbonate) as evidence; eliminating possibilities is part of the reasoning.",
            guideRef: "Identifying Anions",
            difficulty: "challenge",
            hints: [
              "The barium chloride result points to one anion.",
              "Use the silver nitrate result to exclude halides.",
              "Use the acid result to exclude carbonate.",
              "Combine with the flame test for the cation.",
            ],
            strategy: "Use positive results to identify and negative results to eliminate, then name the salt.",
          },
          {
            id: "chem-analysis-bq3-10",
            question: "2.50 g of impure calcium carbonate reacts with excess dilute hydrochloric acid. The reaction produces 0.480 g of carbon dioxide. (CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂; M(CO₂) = 44 g/mol, M(CaCO₃) = 100 g/mol.) (a) Calculate the moles of CO₂ produced. [1 mark] (b) Calculate the mass of CaCO₃ that reacted. [2 marks] (c) Calculate the percentage purity of the calcium carbonate. [2 marks]",
            marks: 5,
            modelAnswer: "(a) Moles CO2 = 0.480 / 44 = 0.0109 mol (to 3 sig figs, 0.01091 mol). (b) From the equation, moles CaCO3 = moles CO2 = 0.01091 mol. Mass CaCO3 = 0.01091 × 100 = 1.091 g ≈ 1.09 g. (c) Percentage purity = (1.09 / 2.50) × 100 = 43.6% (to 3 sig figs).",
            markScheme: [
              "(a) Moles CO2 = 0.480/44 = 0.0109 mol [1]",
              "(b) Moles CaCO3 = moles CO2 (1:1) [1]; mass = 0.0109 × 100 = 1.09 g [1]",
              "(c) Purity = (1.09/2.50) × 100 [1]; = 43.6% [1]",
            ],
            commonError: "Using the impure mass (2.50 g) as the moles basis; the moles must come from the CO2 produced.",
            guideRef: "Identifying Anions",
            difficulty: "challenge",
            hints: [
              "Moles = mass / molar mass for CO2.",
              "The CaCO3 to CO2 ratio is 1:1.",
              "Mass of CaCO3 = moles × 100.",
              "Purity = (mass of pure CaCO3 / total sample mass) × 100.",
            ],
            strategy: "Work from the gas mass back to the reacting CaCO3 mass, then compare with the total sample mass.",
            solutions: [
              {
                label: "Percentage purity calculation",
                steps: [
                  "Moles CO2 = 0.480 g / 44 g/mol = 0.01091 mol",
                  "Moles CaCO3 = 0.01091 mol (1:1 ratio)",
                  "Mass CaCO3 = 0.01091 × 100 = 1.091 g",
                  "Purity = (1.091 / 2.50) × 100 = 43.6%",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-analysis-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Synoptic identification: combining cation, anion and gas tests.",
        questions: [
          {
            id: "chem-analysis-bq4-01",
            question: "State whether each is a chemical test for a cation, an anion, or a gas: (a) flame test; (b) acidified silver nitrate; (c) limewater; (d) acidified barium chloride. [4 marks]",
            marks: 4,
            modelAnswer: "(a) Flame test — cation. (b) Acidified silver nitrate — anion (halides). (c) Limewater — gas (carbon dioxide). (d) Acidified barium chloride — anion (sulfate).",
            markScheme: [
              "(a) Cation [1]",
              "(b) Anion [1]",
              "(c) Gas [1]",
              "(d) Anion [1]",
            ],
            commonError: "Confusing the silver nitrate (anion test) with a cation test.",
            guideRef: "Identifying Anions",
            difficulty: "warmup",
          },
          {
            id: "chem-analysis-bq4-02",
            question: "A white solid is fully soluble in water giving a colourless solution. It gives a lilac flame and effervesces with dilute acid to give a gas that turns limewater milky. Identify the compound and justify each conclusion. [4 marks]",
            marks: 4,
            modelAnswer: "The lilac flame shows the cation is potassium (K⁺). Effervescence with acid releasing a gas that turns limewater milky shows the anion is carbonate (CO3²⁻), because the gas is carbon dioxide. Therefore the compound is potassium carbonate, K2CO3. The colourless solution is consistent with potassium and carbonate ions (no transition-metal colour).",
            markScheme: [
              "Lilac flame → potassium (K⁺) [1]",
              "Effervescence + milky limewater → carbonate (CO3²⁻) / CO2 produced [1]",
              "Compound is potassium carbonate / K2CO3 [1]",
              "Colourless solution consistent with the ions identified [1]",
            ],
            commonError: "Identifying the gas as something other than CO2 despite the limewater result.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "The flame colour gives the cation.",
              "Fizzing plus milky limewater gives the anion.",
              "Combine the two ions into a formula.",
            ],
          },
          {
            id: "chem-analysis-bq4-03",
            question: "Outline a systematic scheme of tests to fully identify an unknown soluble ionic compound (both its cation and its anion). Refer to the order of tests and at least two cation tests and two anion tests. [6 marks]",
            marks: 6,
            modelAnswer: "Step 1 — Note the colour of the solution: a blue/green solution suggests a transition-metal ion (e.g. copper or iron). Step 2 — Cation tests: (i) add aqueous sodium hydroxide and note the precipitate colour and its solubility in excess; (ii) add aqueous ammonia and note the precipitate and its solubility in excess (distinguishes Zn²⁺ from Al³⁺ and confirms Cu²⁺); (iii) a flame test for Group I/II metals (e.g. Na⁺ yellow, K⁺ lilac, Ca²⁺ orange-red). Step 3 — Anion tests: (i) add dilute acid and test any gas with limewater (carbonate → milky); (ii) acidify with HCl then add barium chloride for sulfate (white precipitate); (iii) acidify with HNO3 then add silver nitrate for halides (white/cream/yellow). Always acidify before the barium or silver tests to remove interfering carbonate. Combine the cation and anion results to name the compound.",
            markScheme: [
              "Observe solution colour (transition metals coloured) [1]",
              "Cation test 1: NaOH(aq) precipitate colour + solubility in excess [1]",
              "Cation test 2: ammonia and/or flame test [1]",
              "Anion test 1: dilute acid → limewater for carbonate [1]",
              "Anion test 2: acidified barium chloride (sulfate) and/or acidified silver nitrate (halides) [1]",
              "Acidify before barium/silver tests / combine results to name the compound [1]",
            ],
            commonError: "Testing only the cation or only the anion; both are needed to name the compound.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "Start with a simple observation before any reagent.",
              "Use NaOH and ammonia (and a flame test) for the cation.",
              "Use acid/limewater, barium and silver tests for the anion.",
              "Remember to acidify before barium and silver tests.",
            ],
            strategy: "Move from observation to cation tests to anion tests, then combine to name the compound.",
          },
          {
            id: "chem-analysis-bq4-04",
            question: "A blue solution gives a blue precipitate with NaOH(aq) that does not dissolve in excess; with aqueous ammonia the precipitate dissolves in excess to a deep blue solution. With acidified barium chloride a white precipitate forms. (a) Identify the cation and anion. [2 marks] (b) Name the compound. [1 mark] (c) Write the ionic equation for the precipitate formed with NaOH. [2 marks]",
            marks: 5,
            modelAnswer: "(a) Cation: Cu²⁺ (copper(II)) — blue precipitate, dissolving in excess ammonia to a deep blue solution. Anion: sulfate (SO4²⁻) — white precipitate with acidified barium chloride. (b) The compound is copper(II) sulfate, CuSO4. (c) Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s).",
            markScheme: [
              "Cation Cu²⁺ identified [1]",
              "Anion sulfate identified [1]",
              "Compound copper(II) sulfate / CuSO4 [1]",
              "Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)2(s) [1]; state symbols correct [1]",
            ],
            commonError: "Naming the compound copper carbonate or chloride despite the sulfate test result.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "The deep blue ammonia complex points to one cation.",
              "The barium chloride result points to one anion.",
              "Combine to name the salt.",
              "Match the OH⁻ count to the copper charge in the equation.",
            ],
          },
          {
            id: "chem-analysis-bq4-05",
            question: "A student must distinguish between solid sodium chloride and solid sodium sulfate. Both are white and both give a yellow flame. Describe one test that distinguishes them, with reagents and observations. [4 marks]",
            marks: 4,
            modelAnswer: "Dissolve each solid in water. To one portion add dilute nitric acid then silver nitrate solution: sodium chloride gives a white precipitate (silver chloride); sodium sulfate gives no precipitate. Alternatively, add dilute hydrochloric acid then barium chloride: sodium sulfate gives a white precipitate (barium sulfate); sodium chloride gives none. Either test distinguishes the two because the anions differ (chloride vs sulfate), even though both share the sodium cation.",
            markScheme: [
              "Dissolve in water and use a named anion test [1]",
              "Correct reagents (acidified silver nitrate OR acidified barium chloride) [1]",
              "Chloride: white precipitate with silver nitrate / no precipitate with barium [1]",
              "Sulfate: white precipitate with barium chloride / no precipitate with silver nitrate [1]",
            ],
            commonError: "Choosing a flame test, which is identical (yellow) for both and cannot distinguish them.",
            guideRef: "Identifying Anions",
            difficulty: "core",
            hints: [
              "The cation is the same, so test the anion.",
              "Use silver nitrate (for chloride) or barium chloride (for sulfate).",
              "State which salt gives a precipitate and which does not.",
            ],
          },
          {
            id: "chem-analysis-bq4-06",
            question: "Explain why, in qualitative analysis, it is important to (a) acidify before adding barium chloride or silver nitrate, and (b) add reagents such as NaOH and ammonia in excess rather than just a few drops. [4 marks]",
            marks: 4,
            modelAnswer: "(a) Acidifying first removes ions such as carbonate (and sulfite) that would otherwise form their own white precipitates with barium or silver, giving false positives; after acidification, any precipitate that forms is genuinely due to sulfate or halide. (b) Adding the reagent in excess reveals whether the hydroxide precipitate is amphoteric or forms a soluble complex: e.g. Al(OH)3 and Zn(OH)2 dissolve in excess NaOH, and Cu(OH)2 and Zn(OH)2 dissolve in excess ammonia. The behaviour in excess gives extra information that distinguishes ions which form similar precipitates with just a few drops.",
            markScheme: [
              "(a) Acid removes carbonate/sulfite that would give false-positive white precipitates [1]",
              "(a) Remaining precipitate is then genuinely sulfate/halide [1]",
              "(b) Excess reveals dissolving behaviour (amphoteric/complex formation) [1]",
              "(b) This distinguishes ions giving similar initial precipitates (e.g. Al³⁺ vs Zn²⁺ vs Ca²⁺) [1]",
            ],
            commonError: "Knowing the procedures but not the underlying reasons (removing interferents; revealing solubility behaviour).",
            guideRef: "Identifying Anions",
            difficulty: "challenge",
            hints: [
              "Think which ions also form white precipitates with barium/silver.",
              "Acid destroys carbonate and sulfite.",
              "Excess reagent shows whether a precipitate redissolves.",
              "Redissolving behaviour distinguishes look-alike ions.",
            ],
            strategy: "Link each procedural rule to the specific false-positive or ambiguity it prevents.",
          },
          {
            id: "chem-analysis-bq4-07",
            question: "An unknown green crystalline solid dissolves in water to a pale green solution. Tests: with NaOH(aq) a green precipitate forms, insoluble in excess; with acidified barium chloride a white precipitate forms; a flame test shows no distinctive colour beyond a faint trace. (a) Identify the cation and anion. [2 marks] (b) Name the compound and write its formula. [2 marks] (c) Explain why the flame test gives no distinctive colour. [1 mark]",
            marks: 5,
            modelAnswer: "(a) Cation: Fe²⁺ (iron(II)) — pale green solution and green hydroxide precipitate insoluble in excess. Anion: sulfate (SO4²⁻) — white precipitate with acidified barium chloride. (b) The compound is iron(II) sulfate, formula FeSO4. (c) Iron does not produce a characteristic visible flame colour in a standard school Bunsen flame test, so no distinctive colour is seen (the faint trace may be from minor sodium contamination).",
            markScheme: [
              "Cation Fe²⁺ identified [1]",
              "Anion sulfate identified [1]",
              "Compound iron(II) sulfate [1]; formula FeSO4 [1]",
              "Iron has no characteristic flame colour in a Bunsen flame [1]",
            ],
            commonError: "Expecting iron to give a flame colour; iron is not reliably identified by flame test at IGCSE.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "challenge",
            hints: [
              "Pale green solution and green hydroxide suggest which ion?",
              "The barium chloride result gives the anion.",
              "Combine to name and give the formula.",
              "Recall which common ions do not give flame colours.",
            ],
            strategy: "Use solution colour plus the hydroxide precipitate for the cation, barium test for the anion, then name.",
          },
          {
            id: "chem-analysis-bq4-08",
            question: "Solid ammonium sulfate, (NH₄)₂SO₄, is analysed. (a) Describe the test that confirms the ammonium ion and give the ionic equation. [3 marks] (b) Describe the test that confirms the sulfate ion. [2 marks]",
            marks: 5,
            modelAnswer: "(a) Add aqueous sodium hydroxide to the solid (or its solution) and warm gently. Ammonia gas is released, which turns damp red litmus paper blue, confirming the ammonium ion. Ionic equation: NH4⁺(aq) + OH⁻(aq) → NH3(g) + H2O(l). (b) Dissolve the solid in water, acidify with dilute hydrochloric acid, then add barium chloride solution. A white precipitate of barium sulfate confirms the sulfate ion: Ba²⁺(aq) + SO4²⁻(aq) → BaSO4(s).",
            markScheme: [
              "(a) Warm with NaOH(aq) → ammonia gas → damp red litmus turns blue [1]",
              "(a) Ionic equation NH4⁺(aq) + OH⁻(aq) → NH3(g) + H2O(l) [1]; correct balance/state symbols [1]",
              "(b) Acidify with HCl then add barium chloride → white precipitate [1]",
              "(b) BaSO4 / Ba²⁺ + SO4²⁻ → BaSO4 confirms sulfate [1]",
            ],
            commonError: "Forgetting to warm the mixture in the ammonium test, or omitting acidification in the sulfate test.",
            guideRef: "Identifying Cations — NaOH, Ammonia and Flame Tests",
            difficulty: "core",
            hints: [
              "Ammonium plus warm alkali gives an alkaline gas.",
              "Confirm the gas with damp red litmus.",
              "Balance the single-charged ions one to one.",
              "For sulfate, acidify then add barium chloride.",
            ],
          },
          {
            id: "chem-analysis-bq4-09",
            question: "A 1.00 g sample contains a mixture of sodium chloride and sodium nitrate only. All the chloride is precipitated with excess silver nitrate, giving 0.861 g of dry silver chloride (AgCl, M = 143.5 g/mol). (Ar: Na = 23, Cl = 35.5; M(NaCl) = 58.5 g/mol.) (a) Calculate the moles of AgCl formed. [1 mark] (b) Calculate the mass of sodium chloride in the original sample. [3 marks] (c) Calculate the percentage by mass of sodium chloride in the mixture. [1 mark]",
            marks: 5,
            modelAnswer: "(a) Moles AgCl = 0.861 / 143.5 = 0.00600 mol. (b) Each Cl⁻ comes from one NaCl, and each AgCl contains one Cl⁻, so moles NaCl = moles AgCl = 0.00600 mol. Mass NaCl = 0.00600 × 58.5 = 0.351 g. (c) Percentage NaCl = (0.351 / 1.00) × 100 = 35.1%.",
            markScheme: [
              "(a) Moles AgCl = 0.861/143.5 = 0.00600 mol [1]",
              "(b) Moles NaCl = moles AgCl = 0.00600 mol (1:1) [1]; mass = 0.00600 × 58.5 [1]; = 0.351 g [1]",
              "(c) Percentage = (0.351/1.00) × 100 = 35.1% [1]",
            ],
            commonError: "Using AgCl's molar mass for the NaCl mass, or forgetting the 1:1 chloride ratio between NaCl and AgCl.",
            guideRef: "Identifying Anions",
            difficulty: "challenge",
            hints: [
              "Moles AgCl = mass / 143.5.",
              "One Cl⁻ per NaCl and per AgCl gives a 1:1 ratio.",
              "Mass NaCl = moles × 58.5.",
              "Percentage = (mass NaCl / 1.00 g) × 100.",
            ],
            strategy: "Use the precipitate mass to find chloride moles, convert to NaCl mass via the 1:1 ratio, then a percentage.",
            solutions: [
              {
                label: "Mass and percentage of NaCl",
                steps: [
                  "Moles AgCl = 0.861 g / 143.5 g/mol = 0.00600 mol",
                  "Moles NaCl = 0.00600 mol (1:1 chloride ratio)",
                  "Mass NaCl = 0.00600 × 58.5 = 0.351 g",
                  "Percentage NaCl = (0.351 / 1.00) × 100 = 35.1%",
                ],
              },
            ],
          },
          {
            id: "chem-analysis-bq4-10",
            question: "Four unlabelled solutions are: sodium carbonate, sodium chloride, sodium sulfate and sodium nitrate. All give a yellow flame. Devise a sequence of tests using dilute nitric acid, barium nitrate and silver nitrate to identify each solution, stating the observations. [6 marks]",
            marks: 6,
            modelAnswer: "Test 1 — Add dilute nitric acid to a sample of each: only sodium carbonate effervesces (CO2, which turns limewater milky), identifying it. Test 2 — To fresh samples of the remaining three (all now safely acidified with dilute nitric acid), add barium nitrate solution: only sodium sulfate gives a white precipitate (barium sulfate), identifying it. Test 3 — To the last two acidified samples (chloride and nitrate), add silver nitrate solution: sodium chloride gives a white precipitate (silver chloride); sodium nitrate gives no precipitate. This identifies sodium chloride and, by elimination, sodium nitrate (which gives negative results in all the precipitation tests). Acidifying with nitric acid first removes carbonate so it cannot interfere with the barium and silver tests.",
            markScheme: [
              "Add dilute nitric acid: only carbonate effervesces (CO2) → sodium carbonate [1]",
              "Acidify remaining samples with dilute nitric acid (removes carbonate interference) [1]",
              "Add barium nitrate: white precipitate identifies sodium sulfate [1]",
              "Add silver nitrate: white precipitate identifies sodium chloride [1]",
              "Sodium nitrate identified by elimination (no precipitate in any test) [1]",
              "Logical sequence with correct observations throughout [1]",
            ],
            commonError: "Adding silver or barium reagents before removing carbonate, which would give false white precipitates for the carbonate sample.",
            guideRef: "Identifying Anions",
            difficulty: "challenge",
            hints: [
              "Use the acid first to find the carbonate.",
              "The acid also conveniently acidifies the rest.",
              "Barium nitrate picks out sulfate.",
              "Silver nitrate picks out chloride, leaving nitrate by elimination.",
            ],
            strategy: "Order tests so each removes/identifies one anion in turn, ending with nitrate by elimination.",
          },
        ],
      },
    ],
  },
};
