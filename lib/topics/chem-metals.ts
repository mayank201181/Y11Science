import type { Topic } from "../types";

export const chemMetals: Topic = {
  id: "chem-metals",
  title: "Metals",
  subject: "chemistry",
  icon: "🪙",
  blurb: "Reactivity series, reactions, extraction, rusting, alloys and recycling.",
  intro:
    "Metals are the backbone of civilisation — from the iron in a blast furnace to the aluminium in an aircraft wing. In this topic you will build a mental ladder of reactivity, use it to predict chemical behaviour, understand how we extract metals from ores, explain why iron rusts and how to stop it, and discover why alloys outperform pure metals. Every idea follows from a small set of underlying principles you can reason from, not just memorise.",

  // ─── GUIDE ───────────────────────────────────────────────────────────────────
  guide: [
    // ── Section 1 ──────────────────────────────────────────────────────────────
    {
      heading: "Physical Properties of Metals",
      body: `Metals share a distinctive set of physical properties that arise from their giant metallic structure — a lattice of positive ions surrounded by a 'sea' of delocalised electrons.

**Appearance and lustre:** Most metals have a shiny surface when freshly cut, because free electrons reflect light well. Tarnishing (surface reactions with air) dulls this over time.

**Electrical and thermal conductivity:** Delocalised electrons can move freely through the lattice, carrying charge (electricity) and kinetic energy (heat) with very little resistance.

**Malleability and ductility:** Layers of ions can slide over one another without breaking bonds, because the electron sea adapts to new positions. This allows metals to be hammered into sheets (malleability) or drawn into wires (ductility).

**Density and melting points:** Most metals are dense (close-packed ionic lattice) and have high melting and boiling points because metallic bonds are strong — large amounts of energy are needed to break the lattice. Exceptions include sodium and potassium (low density, soft) and mercury (liquid at room temperature).

**Sonority:** Metals ring when struck — useful for bells and musical instruments.

- Metals are good conductors of heat and electricity.
- Metals are malleable (can be hammered into shapes) and ductile (can be drawn into wires).
- Most metals have high melting points and high densities.
- The properties arise from the giant metallic lattice with delocalised electrons.`,
      keyPoints: [
        "Metals conduct electricity and heat because of delocalised electrons.",
        "Malleability and ductility arise because ionic layers can slide over each other.",
        "Most metals have high melting points, high densities, and a shiny lustre.",
        "Mercury is exceptional — it is a liquid metal at room temperature.",
        "Sonority (ringing when struck) is a distinctive metal property.",
      ],
      whyItWorks:
        "In a metallic lattice, valence electrons are not tied to individual atoms but are shared across the whole structure. This 'electron sea' is the origin of conductivity (electrons move to carry charge), malleability (electrons re-arrange when layers shift), and lustre (electrons oscillate to reflect photons across the visible spectrum).",
      diagrams: [
        {
          caption: "Giant metallic lattice — delocalised electrons (dots) surround positive ions (circles)",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Metallic lattice diagram showing positive ions and delocalised electrons">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- ions in a grid -->
  <circle cx="50" cy="50" r="20" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="50" y="55" text-anchor="middle" fill="#38bdf8" font-size="11">M+</text>
  <circle cx="120" cy="50" r="20" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="120" y="55" text-anchor="middle" fill="#38bdf8" font-size="11">M+</text>
  <circle cx="190" cy="50" r="20" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="190" y="55" text-anchor="middle" fill="#38bdf8" font-size="11">M+</text>
  <circle cx="260" cy="50" r="20" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="260" y="55" text-anchor="middle" fill="#38bdf8" font-size="11">M+</text>
  <circle cx="50" cy="120" r="20" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="50" y="125" text-anchor="middle" fill="#38bdf8" font-size="11">M+</text>
  <circle cx="120" cy="120" r="20" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="120" y="125" text-anchor="middle" fill="#38bdf8" font-size="11">M+</text>
  <circle cx="190" cy="120" r="20" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="190" y="125" text-anchor="middle" fill="#38bdf8" font-size="11">M+</text>
  <circle cx="260" cy="120" r="20" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="260" y="125" text-anchor="middle" fill="#38bdf8" font-size="11">M+</text>
  <!-- delocalised electrons -->
  <circle cx="85" cy="85" r="4" fill="#fbbf24"/>
  <circle cx="155" cy="85" r="4" fill="#fbbf24"/>
  <circle cx="225" cy="85" r="4" fill="#fbbf24"/>
  <circle cx="295" cy="85" r="4" fill="#fbbf24"/>
  <circle cx="85" cy="155" r="4" fill="#fbbf24"/>
  <circle cx="155" cy="155" r="4" fill="#fbbf24"/>
  <circle cx="225" cy="155" r="4" fill="#fbbf24"/>
  <circle cx="20" cy="85" r="4" fill="#fbbf24"/>
  <circle cx="20" cy="155" r="4" fill="#fbbf24"/>
  <!-- labels -->
  <rect x="5" y="168" width="160" height="18" fill="#0f172a"/>
  <text x="8" y="181" fill="#fbbf24" font-size="11">Delocalised electrons (e-)</text>
  <rect x="175" y="168" width="140" height="18" fill="#0f172a"/>
  <text x="178" y="181" fill="#38bdf8" font-size="11">Positive metal ions (M+)</text>
</svg>`,
        },
      ],
    },

    // ── Section 2 ──────────────────────────────────────────────────────────────
    {
      heading: "The Reactivity Series",
      body: `The reactivity series is an ordered list of metals from most reactive (top) to least reactive (bottom), with two non-metals (carbon and hydrogen) included as reference points.

**Order (most to least reactive):**
Potassium (K) > Sodium (Na) > Calcium (Ca) > Magnesium (Mg) > Aluminium (Al) > **(Carbon)** > Zinc (Zn) > Iron (Fe) > **(Hydrogen)** > Copper (Cu) > Silver (Ag) > Gold (Au)

**Reactions with cold water and steam** (with cold water the products are a metal hydroxide + hydrogen; with steam they are a metal oxide + hydrogen):
- K, Na, Ca react with cold water to give a hydroxide and hydrogen:
  - 2K(s) + 2H₂O(l) → 2KOH(aq) + H₂(g) — most violent; the hydrogen often ignites with a lilac flame.
  - 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g) — floats, fizzes, melts into a ball and skates across the surface.
  - Ca(s) + 2H₂O(l) → Ca(OH)₂(aq) + H₂(g) — steady stream of bubbles; the solution turns milky.
- Mg reacts very slowly with cold water but vigorously with steam: Mg(s) + H₂O(g) → MgO(s) + H₂(g)
- Zn and Fe react with steam only (not cold water): e.g. 3Fe(s) + 4H₂O(g) ⇌ Fe₃O₄(s) + 4H₂(g) (reversible)
- Cu, Ag, Au do not react with water or steam at all.

**Reactions with dilute acids (e.g. dilute H₂SO₄ or HCl) — metal + acid → salt + hydrogen:**
- Metals above hydrogen in the series displace hydrogen gas from dilute acids.
- e.g. Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g); Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g); Fe(s) + 2HCl(aq) → FeCl₂(aq) + H₂(g)
- The higher up the series, the faster the fizzing and the larger the temperature rise (Mg fizzes faster than Zn, which fizzes faster than Fe).
- Metals below hydrogen (Cu, Ag, Au) do NOT react with dilute acids.
- K, Na and Ca react too violently (dangerously) to be tested safely with dilute acids.

**Reactions with oxygen — metal + oxygen → metal oxide:**
- Most metals react with oxygen on heating to form metal oxides:
  - 2Mg(s) + O₂(g) → 2MgO(s) (brilliant white flame, white ash)
  - 4Na(s) + O₂(g) → 2Na₂O(s)
  - 2Cu(s) + O₂(g) → 2CuO(s) (copper turns black on heating but does not burst into flame)
  - 4Fe(s) + 3O₂(g) → 2Fe₂O₃(s) (slow oxidation — the basis of rusting)
- Gold and platinum do not tarnish because they do not react with oxygen even when strongly heated.

The more reactive the metal, the more vigorously it reacts and the more stable (harder to break down) its compounds are — which is exactly why the most reactive metals are the hardest to extract from their ores.`,
      keyPoints: [
        "Order (most reactive first): K, Na, Ca, Mg, Al, (C), Zn, Fe, (H), Cu, Ag, Au.",
        "K, Na, Ca react with cold water; Mg with steam; Zn and Fe with steam only.",
        "Metals above H in the series displace H₂ from dilute acids; metals below H do not react with dilute acids.",
        "Most metals form oxides on heating; gold and platinum are unreactive with oxygen.",
        "Reactivity can be deduced from observations: rate of reaction, vigour of fizzing, temperature change.",
      ],
      discovery: {
        problem:
          "Three unknown metals X, Y and Z are tested. X fizzes slowly in dilute HCl but does not react with cold water. Y does not react with cold water, steam OR dilute HCl, but slowly turns black when heated in air. Z reacts vigorously with cold water, giving off a gas that pops. Arrange X, Y, Z in order of decreasing reactivity and suggest which known metals they might be.",
        idea:
          "Take each metal to its slot in the series. Z reacts with COLD water, so it sits at the very top, above Ca (it behaves like Na or K). X reacts with dilute acid but NOT cold water, so it lies between Mg and H — it displaces hydrogen from the acid but is not reactive enough for cold water (it behaves like Zn or Fe). Y reacts with neither water nor acid, so it is below hydrogen; the fact that it still forms an oxide when heated in air (turning black) points to copper (2Cu + O₂ → 2CuO), not the totally inert Au. So the order of decreasing reactivity is Z > X > Y, for example Na > Fe > Cu. The key move: each test (cold water → acid → heating in air) probes a different band of the series, so the three observations together pin each metal down.",
      },
      whyItWorks:
        "Reactivity reflects how readily a metal atom loses electrons to form a positive ion (oxidation). Metals with low ionisation energies and large atomic radii (like K and Na) lose electrons easily, making them highly reactive. Gold, with its filled d-subshell and relativistic contraction, holds electrons very tightly — hence it is inert.",
      strategies: ["Rank by observations — water, acid, oxygen reactions each give evidence", "Use the reactivity series as a reference ladder"],
      thinkDeeper:
        "Aluminium is above zinc in the reactivity series, yet aluminium objects (drinks cans, bicycle frames) seem unreactive in everyday use. Why? Aluminium instantly forms a thin, tough layer of Al₂O₃ on its surface that is impermeable to further attack — this 'passivation' layer protects the underlying metal. Zinc does the same to a lesser degree. This is why position in the reactivity series and observed reactivity in everyday life can seem inconsistent.",
      diagrams: [
        {
          caption: "Reactivity series ladder — from most reactive (top) to least reactive (bottom), with C and H as reference points",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Reactivity series ladder diagram">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- ladder rails -->
  <line x1="80" y1="10" x2="80" y2="190" stroke="#475569" stroke-width="3"/>
  <line x1="240" y1="10" x2="240" y2="190" stroke="#475569" stroke-width="3"/>
  <!-- rungs and labels — 11 levels, spacing 16px -->
  <!-- K -->
  <line x1="80" y1="18" x2="240" y2="18" stroke="#fb7185" stroke-width="2"/>
  <text x="45" y="22" fill="#fb7185" font-size="11" text-anchor="end">K</text>
  <text x="255" y="22" fill="#b7bce0" font-size="10">Potassium</text>
  <!-- Na -->
  <line x1="80" y1="34" x2="240" y2="34" stroke="#fb7185" stroke-width="2"/>
  <text x="45" y="38" fill="#fb7185" font-size="11" text-anchor="end">Na</text>
  <text x="255" y="38" fill="#b7bce0" font-size="10">Sodium</text>
  <!-- Ca -->
  <line x1="80" y1="50" x2="240" y2="50" stroke="#fb7185" stroke-width="2"/>
  <text x="45" y="54" fill="#fb7185" font-size="11" text-anchor="end">Ca</text>
  <text x="255" y="54" fill="#b7bce0" font-size="10">Calcium</text>
  <!-- Mg -->
  <line x1="80" y1="66" x2="240" y2="66" stroke="#fbbf24" stroke-width="2"/>
  <text x="45" y="70" fill="#fbbf24" font-size="11" text-anchor="end">Mg</text>
  <text x="255" y="70" fill="#b7bce0" font-size="10">Magnesium</text>
  <!-- Al -->
  <line x1="80" y1="82" x2="240" y2="82" stroke="#fbbf24" stroke-width="2"/>
  <text x="45" y="86" fill="#fbbf24" font-size="11" text-anchor="end">Al</text>
  <text x="255" y="86" fill="#b7bce0" font-size="10">Aluminium</text>
  <!-- C -->
  <line x1="80" y1="98" x2="240" y2="98" stroke="#a78bfa" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="45" y="102" fill="#a78bfa" font-size="11" text-anchor="end">(C)</text>
  <text x="255" y="102" fill="#a78bfa" font-size="10">Carbon</text>
  <!-- Zn -->
  <line x1="80" y1="114" x2="240" y2="114" stroke="#34d399" stroke-width="2"/>
  <text x="45" y="118" fill="#34d399" font-size="11" text-anchor="end">Zn</text>
  <text x="255" y="118" fill="#b7bce0" font-size="10">Zinc</text>
  <!-- Fe -->
  <line x1="80" y1="130" x2="240" y2="130" stroke="#34d399" stroke-width="2"/>
  <text x="45" y="134" fill="#34d399" font-size="11" text-anchor="end">Fe</text>
  <text x="255" y="134" fill="#b7bce0" font-size="10">Iron</text>
  <!-- H -->
  <line x1="80" y1="146" x2="240" y2="146" stroke="#a78bfa" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="45" y="150" fill="#a78bfa" font-size="11" text-anchor="end">(H)</text>
  <text x="255" y="150" fill="#a78bfa" font-size="10">Hydrogen</text>
  <!-- Cu -->
  <line x1="80" y1="162" x2="240" y2="162" stroke="#38bdf8" stroke-width="2"/>
  <text x="45" y="166" fill="#38bdf8" font-size="11" text-anchor="end">Cu</text>
  <text x="255" y="166" fill="#b7bce0" font-size="10">Copper</text>
  <!-- Ag, Au -->
  <line x1="80" y1="178" x2="240" y2="178" stroke="#38bdf8" stroke-width="2"/>
  <text x="45" y="182" fill="#38bdf8" font-size="11" text-anchor="end">Ag/Au</text>
  <text x="255" y="182" fill="#b7bce0" font-size="10">Silver/Gold</text>
  <!-- arrow -->
  <text x="13" y="15" fill="#fb7185" font-size="9">Most</text>
  <text x="8" y="190" fill="#38bdf8" font-size="9">Least</text>
  <line x1="20" y1="18" x2="20" y2="182" stroke="#475569" stroke-width="1" marker-end="url(#arr)"/>
</svg>`,
        },
      ],
    },

    // ── Section 3 ──────────────────────────────────────────────────────────────
    {
      heading: "Displacement Reactions and Links to Extraction",
      body: `A displacement reaction occurs when a more reactive metal displaces (pushes out) a less reactive metal from a solution of its salt, or from its oxide.

**General rule:** More reactive metal + less reactive metal's compound → less reactive metal + more reactive metal's compound.

**Example 1 — displacement from solution:**
Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)
Zinc is above copper in the reactivity series, so zinc displaces copper from copper sulfate solution. You observe the blue solution decolourising and a reddish-brown copper deposit forming on the zinc.

**Example 2 — thermite (displacement from oxide):**
2Al(s) + Fe₂O₃(s) → Al₂O₃(s) + 2Fe(l)
Aluminium (more reactive) displaces iron (less reactive) from iron(III) oxide, releasing enormous heat.

**Why displacement works — an ionic view:**
The sulfate ions (SO₄²⁻) are spectator ions — they appear unchanged on both sides, so we can cancel them to leave the **ionic equation**:
Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)
Splitting this into half-equations shows the electron transfer:
- Zn → Zn²⁺ + 2e⁻ (oxidation — zinc loses electrons)
- Cu²⁺ + 2e⁻ → Cu (reduction — copper ions gain electrons)
The more reactive metal is the better reducing agent — it more readily loses (donates) electrons, reducing the less reactive metal ion. This is a redox reaction: oxidation and reduction always happen together (OIL RIG — Oxidation Is Loss, Reduction Is Gain of electrons).

**Link to extraction:**
Carbon and hydrogen are included in the reactivity series as reference points because they can also act as reducing agents. If a metal is below carbon in the series, it can be extracted from its ore by reduction with carbon (or carbon monoxide) — a cheap, industrial process. If the metal is above carbon, this method fails (the metal oxide is too stable), and more energetic methods (electrolysis) are needed.`,
      keyPoints: [
        "A more reactive metal displaces a less reactive metal from its salt solution or oxide.",
        "In displacement, the more reactive metal is oxidised (loses electrons); the less reactive metal ion is reduced (gains electrons).",
        "Metals below carbon in the reactivity series can be extracted by reduction with carbon.",
        "Metals above carbon require electrolysis for extraction.",
        "Observations: solution colour change, temperature rise, solid deposit forming.",
      ],
      discovery: {
        problem:
          "You add iron filings to copper sulfate solution and separately add copper to iron sulfate solution. Predict what you will observe in each case, and explain which reactions will occur.",
        idea:
          "Iron is above copper in the reactivity series, so iron will displace copper: Fe + CuSO₄ → FeSO₄ + Cu. You observe: blue solution decolourises (Cu²⁺ ions removed), iron filings become coated with reddish copper, solution warms up. In the reverse experiment, copper is below iron, so copper cannot displace iron from iron sulfate — no reaction occurs.",
      },
      whyItWorks:
        "Displacement is a competition for electrons. The metal with the lower reduction potential (higher reactivity) has a stronger thermodynamic drive to be oxidised. The overall cell potential (E°cell = E°cathode − E°anode) is positive for a spontaneous displacement, and the more reactive metal always gives the positive overall value when it acts as the anode.",
      strategies: ["Check position in reactivity series before predicting displacement", "Write the ionic half-equations to confirm oxidation/reduction"],
    },

    // ── Section 4 ──────────────────────────────────────────────────────────────
    {
      heading: "Extraction of Metals",
      body: `How a metal is extracted from its ore depends on its position in the reactivity series — specifically whether it is above or below carbon.

**Very reactive metals — electrolysis:**
Metals above carbon (K, Na, Ca, Mg, Al) form very stable oxides or chlorides that carbon cannot reduce at economically viable temperatures. They are extracted by **electrolysis** of their molten compounds.

*Aluminium (from bauxite ore, mainly Al₂O₃):*
- Aluminium oxide has a very high melting point (~2072 °C) so cryolite (Na₃AlF₆) is dissolved in it to lower the melting point to ~970 °C.
- Molten mixture is electrolysed in a steel tank lined with graphite (the cathode).
- Cathode (reduction): Al³⁺ + 3e⁻ → Al (liquid aluminium sinks to the bottom)
- Anode (oxidation): 2O²⁻ → O₂ + 4e⁻
- The graphite anodes burn away in the oxygen and must be replaced regularly.
- Al₂O₃ → 2Al + 3/2 O₂ (overall)

**Less reactive metals — reduction with carbon:**
Metals below carbon but above hydrogen (Zn, Fe) can be extracted by heating their oxides with carbon (coke) in a furnace.

*Iron (from haematite ore, mainly Fe₂O₃) in the blast furnace:*
1. Raw materials: iron ore (haematite), coke (C), limestone (CaCO₃), air.
2. Coke burns: C + O₂ → CO₂, then CO₂ + C → 2CO (carbon monoxide is the main reducing agent).
3. Reduction of iron ore: Fe₂O₃ + 3CO → 2Fe + 3CO₂.
4. Limestone removes acidic silica impurities: CaCO₃ → CaO + CO₂; CaO + SiO₂ → CaSiO₃ (slag).
5. Molten iron (pig iron) collects at the bottom; slag floats on top.

**Very unreactive metals:**
Copper, silver, and gold are sometimes found as native (uncombined) elements or in easily reduced ores and require only simple heating or minimal processing.`,
      keyPoints: [
        "Metals above carbon in the reactivity series are extracted by electrolysis of their molten compounds.",
        "Aluminium is extracted from molten aluminium oxide (dissolved in cryolite) by electrolysis.",
        "Cryolite lowers the melting point of Al₂O₃ from ~2072 °C to ~970 °C, saving energy.",
        "Iron is extracted in the blast furnace: CO reduces Fe₂O₃; limestone removes silica as slag.",
        "The graphite anodes in the aluminium cell are consumed by oxygen and need periodic replacement.",
      ],
      whyItWorks:
        "Carbon reduction only works if the Gibbs free energy change (ΔG) for the reaction C + metal oxide → metal + CO/CO₂ is negative. For metals above carbon, their oxides are too stable (too negative a ΔG of formation) and the reduction by carbon would require temperatures so high they are impractical. Electrolysis uses electrical energy to drive the thermodynamically unfavourable reduction, bypassing the temperature limitation.",
      strategies: ["Use the reactivity series to choose extraction method: above C → electrolysis, below C → reduction with carbon"],
      thinkDeeper:
        "The extraction of aluminium is extremely energy-intensive because it requires continuous electrical power for electrolysis. Yet aluminium is the most abundant metal in Earth's crust. Recycling aluminium uses only ~5% of the energy needed to extract it from ore — this is why recycling aluminium is so economically and environmentally significant.",
    },

    // ── Section 5 ──────────────────────────────────────────────────────────────
    {
      heading: "Rusting of Iron and Prevention",
      body: `Rusting is the corrosion of iron (and steel) to form hydrated iron(III) oxide, Fe₂O₃·xH₂O. It is an electrochemical oxidation process.

**Conditions required:**
Rust forms ONLY when BOTH water AND oxygen are present simultaneously. Salt water accelerates rusting by improving electrical conductivity (electrolyte effect), but salt itself is not a reactant.

**Evidence:** Iron nails in (a) dry air, (b) boiled water (no dissolved oxygen) sealed with oil, and (c) normal air + water. Only (c) rusts — confirming both water AND oxygen are needed.

**Why it matters:** Rust is flaky and non-protective — once it forms, it allows further attack of the underlying iron. This is unlike the oxide layer on aluminium, which is dense and self-protecting.

**Methods of prevention:**

1. **Barrier methods** — physically exclude water and oxygen:
   - Painting (car bodies, bridges)
   - Oiling or greasing (tools, machinery)
   - Electroplating (tin-plating on food cans, chromium-plating on taps)
   - Plastic coating (garden furniture)
   - **Galvanising** — coating steel with zinc (e.g. corrugated iron roofing, fence wire)

2. **Sacrificial protection:**
   - Attach or coat steel with a more reactive metal (zinc or magnesium). The more reactive metal oxidises preferentially — it is sacrificed to protect the steel.
   - Even if the zinc coating is scratched and iron is exposed, the zinc still corrodes first because Zn is above Fe in the reactivity series.
   - Used on ships' hulls (blocks of zinc or magnesium bolted on), underground pipelines, and offshore oil rigs.

**Chemical equations (overall rusting):**
4Fe(s) + 3O₂(g) + xH₂O(l) → 2Fe₂O₃·xH₂O(s)`,
      keyPoints: [
        "Rusting requires BOTH water AND oxygen — removing either one prevents rusting.",
        "Rust (Fe₂O₃·xH₂O) is hydrated iron(III) oxide; it is flaky and non-protective.",
        "Barrier methods (paint, oil, plastic, tin-plate, galvanising) exclude air and water.",
        "Sacrificial protection uses a more reactive metal (Zn or Mg) that preferentially oxidises to protect iron.",
        "Galvanising provides both barrier AND sacrificial protection.",
      ],
      discovery: {
        problem:
          "A student sets up three test tubes: (1) iron nail in dry air (silica gel), (2) iron nail in boiled water sealed with a layer of oil, (3) iron nail in air and tap water. After one week, only tube 3 shows rust. What does this prove? And why does galvanised iron not rust even when the zinc coating is scratched?",
        idea:
          "The three-tube experiment proves that BOTH water AND oxygen are required — removing either prevents rusting. Galvanised iron provides two layers of protection: first, the zinc layer is a physical barrier; second, if scratched, zinc (above iron in the reactivity series) acts as a sacrificial anode — it oxidises preferentially, so iron ions are not formed even when iron metal is exposed.",
      },
      whyItWorks:
        "Rusting is an electrochemical process: iron acts as an anode (Fe → Fe²⁺ + 2e⁻), while oxygen is reduced at a cathode site (O₂ + 2H₂O + 4e⁻ → 4OH⁻). These ions combine to form Fe(OH)₂, which oxidises further to Fe₂O₃·xH₂O. Sacrificial protection short-circuits this by providing a different, more reactive anode (Zn or Mg) that is consumed instead of iron.",
      strategies: ["Identify what both water AND oxygen do in the rusting mechanism", "Link sacrificial protection to reactivity series position"],
    },

    // ── Section 6 ──────────────────────────────────────────────────────────────
    {
      heading: "Alloys, Uses of Metals, and Recycling",
      body: `**What is an alloy?**
An alloy is a mixture of a metal with one or more other elements (metals or non-metals) that changes its properties. Alloys are NOT compounds — their composition can vary.

**Why alloys are harder than pure metals:**
In a pure metal, layers of same-sized ions can slide easily over one another (this is why pure metals are soft and malleable). When atoms of different sizes are introduced (forming an alloy), they distort the regular lattice, preventing layers from sliding. The metal becomes harder and stronger.

**Common alloys:**
- **Steel** = iron + carbon (0.1–1.5%) — much stronger and harder than pure iron; used in construction, tools, car bodies.
- **Stainless steel** = iron + chromium + nickel — resistant to corrosion; used in cutlery, surgical instruments.
- **Brass** = copper + zinc — harder than either pure metal; used in musical instruments, taps, electrical fittings.
- **Bronze** = copper + tin — very hard; used in statues, ship propellers, bearings.

**Uses of specific metals (linked to properties):**

*Aluminium:*
- Low density → aircraft fuselages, bicycle frames, drink cans.
- Good conductor of electricity → overhead power cables (with steel core for strength).
- Resistant to corrosion (due to oxide layer) → greenhouse frames, food packaging.
- Malleable and ductile → rolled into thin foil for kitchen use.

*Copper:*
- Excellent electrical conductor (better than aluminium) → electrical wiring in buildings.
- Good thermal conductor → saucepan bases, heat exchangers.
- Malleable and ductile → plumbing pipes.
- Does not react with water → water pipes, roofing.

*Iron and steel:*
- Pure iron is soft and rusts easily, so it is almost always converted into steel (an alloy of iron + carbon) which is much harder and stronger.
- Strong and cheap → girders and reinforcing bars in buildings and bridges, car bodies, ships, railway lines.
- Mild steel (low carbon, ~0.25%) is easily shaped → car body panels, nails, wire.
- High-carbon steel (up to ~1.5%) is very hard but brittle → cutting tools, chisels, drill bits.
- Iron is magnetic → cores of electromagnets and transformers.

**Recycling of metals:**
Recycling metals uses far less energy than extracting them from ores. For aluminium, recycling uses ~5% of the energy of electrolysis. Benefits: conserves finite ore reserves, reduces CO₂ emissions, reduces landfill, and reduces energy costs. Steel is the most widely recycled metal in the world (collected using magnets, since iron is magnetic).`,
      keyPoints: [
        "An alloy is a mixture (not a compound) of a metal with other elements, with variable composition.",
        "Alloys are harder than pure metals because differently sized atoms disrupt layer-sliding in the lattice.",
        "Steel (Fe + C), brass (Cu + Zn), and bronze (Cu + Sn) are important alloys.",
        "Aluminium: low density, corrosion-resistant, good conductor — used in aircraft and electrical cables.",
        "Recycling metals saves energy, conserves ore reserves, and reduces CO₂ emissions.",
      ],
      whyItWorks:
        "The hardness of an alloy relative to its component pure metals is a direct consequence of lattice distortion. Plastic deformation of a metal requires dislocation movement — a defect in the lattice sliding under stress. Solute atoms of a different size pin these dislocations (the Cottrell atmosphere effect), so more stress is needed to move them. This is the atomic-scale explanation for why alloys are stronger.",
      diagrams: [
        {
          caption: "Pure metal vs alloy — different-sized atoms in an alloy disrupt layer sliding, making it harder",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram comparing pure metal lattice with alloy lattice showing different sized atoms">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Pure metal left panel -->
  <rect x="5" y="5" width="145" height="185" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="77" y="20" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">Pure Metal</text>
  <!-- Row 1 -->
  <circle cx="30" cy="40" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="62" cy="40" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="94" cy="40" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="126" cy="40" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <!-- Row 2 -->
  <circle cx="30" cy="75" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="62" cy="75" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="94" cy="75" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="126" cy="75" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <!-- Row 3 -->
  <circle cx="30" cy="110" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="62" cy="110" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="94" cy="110" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="126" cy="110" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <!-- sliding arrow -->
  <text x="77" y="138" text-anchor="middle" fill="#b7bce0" font-size="9">Layers slide easily</text>
  <line x1="30" y1="148" x2="120" y2="148" stroke="#34d399" stroke-width="2" marker-end="url(#ar)"/>
  <text x="77" y="175" text-anchor="middle" fill="#34d399" font-size="9">SOFT / MALLEABLE</text>

  <!-- Alloy right panel -->
  <rect x="170" y="5" width="145" height="185" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="242" y="20" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">Alloy</text>
  <!-- Row 1 -->
  <circle cx="195" cy="40" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="227" cy="40" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="259" cy="40" r="21" fill="#fbbf24" fill-opacity="0.2" stroke="#fbbf24" stroke-width="2"/>
  <circle cx="295" cy="40" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <!-- Row 2 -->
  <circle cx="195" cy="80" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="232" cy="77" r="9" fill="#fb7185" fill-opacity="0.3" stroke="#fb7185" stroke-width="2"/>
  <circle cx="259" cy="80" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="295" cy="80" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <!-- Row 3 -->
  <circle cx="195" cy="113" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="227" cy="113" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="259" cy="113" r="14" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="295" cy="113" r="21" fill="#fbbf24" fill-opacity="0.2" stroke="#fbbf24" stroke-width="2"/>
  <!-- blocked arrow -->
  <text x="242" y="138" text-anchor="middle" fill="#b7bce0" font-size="9">Layers CANNOT slide</text>
  <line x1="195" y1="148" x2="280" y2="148" stroke="#fb7185" stroke-width="2"/>
  <line x1="275" y1="143" x2="285" y2="153" stroke="#fb7185" stroke-width="2"/>
  <line x1="275" y1="153" x2="285" y2="143" stroke="#fb7185" stroke-width="2"/>
  <text x="242" y="175" text-anchor="middle" fill="#fb7185" font-size="9">HARD / STRONG</text>
  <!-- legend -->
  <circle cx="185" cy="190" r="5" fill="#fbbf24" fill-opacity="0.4" stroke="#fbbf24" stroke-width="1"/>
  <text x="193" y="194" fill="#fbbf24" font-size="8">Larger atom</text>
  <circle cx="240" cy="190" r="4" fill="#fb7185" fill-opacity="0.4" stroke="#fb7185" stroke-width="1"/>
  <text x="248" y="194" fill="#fb7185" font-size="8">Smaller atom</text>
</svg>`,
        },
      ],
      strategies: [
        "Link each metal's use to a specific property — never use 'good metal' as a reason",
        "For recycling, quantify the energy saving (aluminium: ~95% less energy) to strengthen exam answers",
      ],
    },
  ],

  // ─── LEARN SMART ─────────────────────────────────────────────────────────────
  learn: {
    keyFacts: [
      "Reactivity series order (most to least): K, Na, Ca, Mg, Al, (C), Zn, Fe, (H), Cu, Ag, Au.",
      "K, Na, Ca react with cold water (metal + water → metal hydroxide + hydrogen, e.g. Ca + 2H₂O → Ca(OH)₂ + H₂); Mg reacts only with steam (giving the oxide MgO).",
      "Metal + dilute acid → salt + hydrogen (only for metals above H); metal + oxygen → metal oxide.",
      "Rusting requires BOTH water AND oxygen — removing either prevents rusting.",
      "Aluminium is extracted by electrolysis of molten Al₂O₃ dissolved in cryolite.",
      "Iron is extracted by reduction with CO in the blast furnace: Fe₂O₃ + 3CO → 2Fe + 3CO₂.",
      "Sacrificial protection: a more reactive metal (Zn or Mg) is attached to iron and corrodes preferentially.",
      "Alloys are harder than pure metals because differently sized atoms disrupt layer sliding in the lattice.",
      "Recycling aluminium uses approximately 5% of the energy needed to extract it from ore.",
      "Galvanising provides both a barrier and sacrificial protection for steel.",
      "Brass = Cu + Zn; Steel = Fe + C; Bronze = Cu + Sn.",
    ],
    flashcards: [
      { front: "What two conditions are required for iron to rust?", back: "Water AND oxygen (both needed simultaneously)." },
      { front: "Why is cryolite added in aluminium extraction?", back: "To lower the melting point of Al₂O₃ from ~2072 °C to ~970 °C, saving energy." },
      { front: "Why are alloys harder than pure metals?", back: "Differently sized atoms disrupt the regular lattice, preventing layers of ions from sliding over each other." },
      { front: "State the main reducing agent in the blast furnace.", back: "Carbon monoxide (CO), produced by C + CO₂ → 2CO." },
      { front: "Which metals react with cold water?", back: "Potassium (K), Sodium (Na), and Calcium (Ca)." },
      { front: "Why can carbon reduce iron oxide but not aluminium oxide?", back: "Aluminium is above carbon in the reactivity series, so Al₂O₃ is too stable to be reduced by carbon." },
      { front: "What is sacrificial protection and give an example?", back: "Attaching a more reactive metal (e.g. zinc or magnesium) to iron so it corrodes preferentially, protecting the iron. Example: zinc blocks on a ship's hull." },
      { front: "Give two properties of aluminium that make it suitable for aircraft frames.", back: "Low density (lightweight) and resistant to corrosion (due to protective Al₂O₃ layer)." },
      { front: "What is displacement in chemistry?", back: "A more reactive metal pushes out a less reactive metal from its compound. E.g. Zn + CuSO₄ → ZnSO₄ + Cu." },
      { front: "Write the ionic equation for zinc displacing copper from copper sulfate solution.", back: "Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s). The SO₄²⁻ ions are spectator ions and cancel." },
      { front: "Why is pure iron usually turned into steel before use?", back: "Pure iron is soft and rusts easily; adding carbon (forming steel) distorts the lattice, making it much harder and stronger." },
      { front: "Give one barrier method and one sacrificial method of preventing rust.", back: "Barrier: painting/oiling/plastic-coating/tin-plating. Sacrificial: attaching a more reactive metal such as zinc or magnesium that corrodes instead of the iron." },
      { front: "What is the role of limestone in the blast furnace?", back: "CaCO₃ decomposes to CaO, which reacts with acidic silica impurities (SiO₂) to form slag (CaSiO₃), removing them from the iron." },
      { front: "Name the electrode reactions in aluminium electrolysis.", back: "Cathode: Al³⁺ + 3e⁻ → Al. Anode: 2O²⁻ → O₂ + 4e⁻." },
      { front: "Why does copper not react with dilute hydrochloric acid?", back: "Copper is below hydrogen in the reactivity series, so it cannot displace hydrogen from the acid." },
    ],
    keyTerms: [
      { term: "Reactivity series", definition: "A list of metals arranged in order of decreasing reactivity, from most reactive (K) to least reactive (Au), with carbon and hydrogen as reference points." },
      { term: "Displacement reaction", definition: "A reaction in which a more reactive metal displaces a less reactive metal from a solution of its salt or from its oxide." },
      { term: "Electrolysis", definition: "The decomposition of an ionic compound (molten or in solution) by passing a direct electric current through it." },
      { term: "Reduction (in extraction)", definition: "The removal of oxygen from a metal oxide (or gain of electrons by metal ions) to produce the free metal." },
      { term: "Blast furnace", definition: "An industrial furnace in which iron ore is reduced by carbon monoxide at high temperature to extract iron." },
      { term: "Cryolite", definition: "Sodium aluminium fluoride (Na₃AlF₆) added to molten aluminium oxide to lower its melting point during electrolytic extraction of aluminium." },
      { term: "Corrosion", definition: "The gradual destruction of a metal by chemical reaction with its environment (e.g. oxygen, water, acids)." },
      { term: "Rusting", definition: "The specific corrosion of iron (or steel) by water and oxygen to form hydrated iron(III) oxide, Fe₂O₃·xH₂O." },
      { term: "Sacrificial protection", definition: "A method of preventing rusting by attaching a more reactive metal (zinc or magnesium) to iron; the more reactive metal corrodes preferentially." },
      { term: "Galvanising", definition: "Coating iron or steel with a layer of zinc to protect against corrosion — provides both a physical barrier and sacrificial protection." },
      { term: "Alloy", definition: "A mixture of a metal with one or more other elements (metals or non-metals), designed to improve properties such as hardness or corrosion resistance." },
      { term: "Slag", definition: "The waste product formed in the blast furnace when calcium oxide reacts with silica impurities to form calcium silicate (CaSiO₃)." },
    ],
  },

  // ─── QUICK QUIZ ──────────────────────────────────────────────────────────────
  quiz: {
    mcq: [
      {
        id: "chem-metals-mcq-q01",
        question: "Which set of conditions is required for iron to rust?",
        options: [
          "Water only",
          "Oxygen only",
          "Water and oxygen",
          "Water, oxygen, and carbon dioxide",
        ],
        answerIndex: 2,
        explanation: "Rusting requires BOTH water AND oxygen simultaneously. Carbon dioxide is not required (though it can accelerate the process in some conditions, it is not listed in the IGCSE essential conditions).",
        guideRef: "Rusting of Iron and Prevention",
        difficulty: "warmup",
      },
      {
        id: "chem-metals-mcq-q02",
        question: "In the reactivity series, which metal is most reactive?",
        options: ["Sodium", "Calcium", "Magnesium", "Potassium"],
        answerIndex: 3,
        explanation: "Potassium is the most reactive of the common metals, reacting explosively with cold water. The order is K > Na > Ca > Mg.",
        guideRef: "The Reactivity Series",
        difficulty: "warmup",
      },
      {
        id: "chem-metals-mcq-q03",
        question: "Iron nail X is placed in copper sulfate solution. Which observation is correct?",
        options: [
          "No reaction occurs because iron is below copper in the reactivity series.",
          "The blue solution decolourises and a reddish-brown deposit forms on the nail.",
          "The nail dissolves and the solution turns green.",
          "Bubbles of hydrogen gas are produced.",
        ],
        answerIndex: 1,
        explanation: "Iron is above copper in the reactivity series, so it displaces copper: Fe + CuSO₄ → FeSO₄ + Cu. The blue Cu²⁺ ions are removed (solution loses colour) and copper metal (reddish-brown) deposits on the iron nail.",
        guideRef: "Displacement Reactions and Links to Extraction",
        difficulty: "core",
        hints: [
          "Check the positions of iron and copper in the reactivity series.",
          "A more reactive metal displaces a less reactive metal from its salt solution.",
          "Cu²⁺ ions in solution give the blue colour — when Cu²⁺ is removed, what happens to the colour?",
          "The product metal (Cu) deposits as a solid on the iron surface — what colour is copper?",
        ],
      },
      {
        id: "chem-metals-mcq-q04",
        question: "Why is cryolite added to aluminium oxide in the industrial extraction of aluminium?",
        options: [
          "To act as an electrolyte",
          "To provide aluminium ions for electrolysis",
          "To lower the melting point of aluminium oxide",
          "To act as a reducing agent",
        ],
        answerIndex: 2,
        explanation: "Aluminium oxide melts at approximately 2072 °C, which is too high to be economically viable. Cryolite (Na₃AlF₆) dissolves in Al₂O₃ and lowers the melting point to around 970 °C, making the electrolysis process practical and energy-efficient.",
        guideRef: "Extraction of Metals",
        difficulty: "core",
        hints: [
          "Think about why we might need to melt the aluminium oxide before electrolysis.",
          "Aluminium oxide has a very high melting point — what problem does this cause?",
          "Cryolite is a solvent for aluminium oxide that makes the mixture liquid at a lower temperature.",
        ],
      },
      {
        id: "chem-metals-mcq-q05",
        question: "Why are alloys harder than the pure metals from which they are made?",
        options: [
          "Alloys have more electrons available for bonding.",
          "Differently sized atoms distort the lattice and prevent layers from sliding.",
          "The metals form covalent bonds in the alloy.",
          "Alloys have a higher melting point so they are more rigid.",
        ],
        answerIndex: 1,
        explanation: "In a pure metal, all ions are the same size and layers can slide over each other easily (giving malleability). When differently sized atoms are added (forming an alloy), they disrupt the regular lattice, preventing layer movement, so the alloy is harder and stronger.",
        guideRef: "Alloys, Uses of Metals, and Recycling",
        difficulty: "core",
        hints: [
          "Think about what makes a pure metal soft — what happens at the atomic level?",
          "Consider what changes when a different-sized atom is added to the lattice.",
        ],
      },
      {
        id: "chem-metals-mcq-q06",
        question: "A student attaches blocks of magnesium to the steel hull of a ship. Which statement explains why this prevents the ship from rusting?",
        options: [
          "Magnesium reacts with water to form a protective layer over the steel.",
          "Magnesium is below iron in the reactivity series, so it corrodes first.",
          "Magnesium is above iron in the reactivity series, so it oxidises preferentially, protecting the iron.",
          "Magnesium forms a physical barrier that stops water reaching the steel.",
        ],
        answerIndex: 2,
        explanation: "This is sacrificial protection. Magnesium is above iron in the reactivity series, meaning it is more reactive and more easily oxidised. Mg preferentially loses electrons (is oxidised) instead of Fe, so iron ions are never formed and rusting is prevented — even when the steel is exposed.",
        guideRef: "Rusting of Iron and Prevention",
        difficulty: "core",
        hints: [
          "Compare the positions of magnesium and iron in the reactivity series.",
          "The more reactive metal will oxidise preferentially in a competition.",
        ],
      },
    ],
    qa: [
      {
        id: "chem-metals-qa-q01",
        question: "Describe, with a balanced equation, what happens when magnesium is added to dilute sulfuric acid. State the observations.",
        marks: 4,
        modelAnswer:
          "Magnesium reacts vigorously with dilute sulfuric acid because it is above hydrogen in the reactivity series. The magnesium ribbon dissolves and bubbles of hydrogen gas are produced. The reaction mixture warms up. The balanced equation is: Mg(s) + H₂SO₄(aq) → MgSO₄(aq) + H₂(g).",
        markScheme: [
          "Mg is above hydrogen in the reactivity series / Mg displaces hydrogen from acid",
          "Magnesium dissolves / the solid disappears",
          "Bubbles of (hydrogen) gas produced",
          "Balanced equation: Mg + H₂SO₄ → MgSO₄ + H₂ with correct state symbols",
        ],
        commonError: "Students often forget state symbols or write MgSO₄ without balancing. Also, some say carbon dioxide is produced — bubbles here are hydrogen, not CO₂.",
        guideRef: "The Reactivity Series",
        difficulty: "core",
        hints: [
          "Magnesium is above hydrogen in the reactivity series — what does this mean for the reaction?",
          "Metals above hydrogen in the series displace H₂ from dilute acids.",
          "Write the word equation first: magnesium + sulfuric acid → magnesium sulfate + hydrogen.",
          "Now write and balance the symbol equation with state symbols.",
        ],
      },
      {
        id: "chem-metals-qa-q02",
        question: "Explain, using the reactivity series, why aluminium is extracted by electrolysis but iron is extracted by reduction with carbon. Include equations for the extraction of each metal.",
        marks: 6,
        modelAnswer:
          "Aluminium is above carbon in the reactivity series, so its oxide (Al₂O₃) is too stable to be reduced by carbon — carbon is not a strong enough reducing agent to extract aluminium. Electrolysis of molten aluminium oxide (dissolved in cryolite) is used instead. At the cathode: Al³⁺ + 3e⁻ → Al. At the anode: 2O²⁻ → O₂ + 4e⁻.\n\nIron is below carbon in the reactivity series, so carbon (as carbon monoxide) is able to reduce iron oxide. In the blast furnace: Fe₂O₃ + 3CO → 2Fe + 3CO₂. This is a much cheaper process than electrolysis.",
        markScheme: [
          "Aluminium is above carbon in the reactivity series",
          "Al₂O₃ is too stable / carbon cannot reduce Al₂O₃",
          "Electrolysis of molten aluminium oxide / with cryolite to lower melting point",
          "Cathode equation: Al³⁺ + 3e⁻ → Al",
          "Iron is below carbon in the reactivity series",
          "Reduction with carbon (CO): Fe₂O₃ + 3CO → 2Fe + 3CO₂ / balanced equation",
        ],
        commonError: "Students often reverse the logic — saying iron requires electrolysis because it is 'more reactive'. Always check positions relative to carbon in the series.",
        guideRef: "Extraction of Metals",
        difficulty: "core",
        hints: [
          "Find the positions of Al and Fe relative to carbon (C) in the reactivity series.",
          "If a metal is above carbon, carbon cannot reduce it — electrolysis is needed.",
          "If a metal is below carbon, carbon (as CO) can act as a reducing agent.",
          "Write the half-equations for aluminium electrolysis and the full equation for the blast furnace.",
        ],
        solutions: [
          {
            label: "Method 1: Reactivity-series argument",
            steps: [
              "Place Al and C and Fe in the reactivity series: Al > C > Fe (in terms of reactivity).",
              "Carbon can only reduce a metal oxide if the metal is BELOW carbon in the series.",
              "Fe is below C, so C (as CO) can reduce Fe₂O₃: Fe₂O₃ + 3CO → 2Fe + 3CO₂.",
              "Al is above C, so C cannot reduce Al₂O₃ — electrolysis is needed.",
              "Electrolysis of molten Al₂O₃ in cryolite: cathode Al³⁺ + 3e⁻ → Al; anode 2O²⁻ → O₂ + 4e⁻.",
            ],
          },
        ],
      },
      {
        id: "chem-metals-qa-q03",
        question: "A student investigates the reactivity of three metals P, Q, and R using the following results:\n- Metal P reacts slowly with dilute HCl to produce bubbles.\n- Metal Q does not react with dilute HCl or steam.\n- Metal R reacts vigorously with cold water, producing a gas that burns with a squeaky pop.\n(a) Identify the gas produced by R reacting with cold water. [1]\n(b) Arrange P, Q, and R in order of decreasing reactivity. Explain your reasoning. [3]\n(c) Which method of extraction would you use for metal Q? Explain why. [2]",
        marks: 6,
        modelAnswer:
          "(a) Hydrogen gas (H₂). The squeaky pop test confirms hydrogen.\n\n(b) Order: R > P > Q (most to least reactive). R reacts with cold water — it must be above Ca in the reactivity series (e.g. K, Na, or Ca). P reacts with dilute acid but not with cold water — it lies between Mg and H (e.g. Zn, Fe). Q does not react with acid or steam — it must be below hydrogen in the reactivity series (e.g. Cu, Ag, Au).\n\n(c) Metal Q is below carbon in the reactivity series (it is less reactive than hydrogen). However, since it does not react with dilute acids or steam, it is likely native (uncombined) or only requires simple heating/smelting for extraction. It could be extracted by simple heating or by reduction with carbon — electrolysis would not be needed, as Q is clearly unreactive. The simplest answer: Q can be extracted by reduction with carbon (or even found as the native metal), because it is well below carbon in the reactivity series.",
        markScheme: [
          "(a) Hydrogen / H₂",
          "(b) R is most reactive — reacts with cold water, so above Mg in the series",
          "(b) P is between Mg and H — reacts with acid but not cold water",
          "(b) Q is least reactive — below hydrogen, does not react with acid or steam",
          "(c) Q is below carbon in the reactivity series (very unreactive)",
          "(c) Extracted by reduction with carbon / simple smelting / found native — electrolysis not required",
        ],
        commonError: "Students often say Q requires electrolysis because they confuse 'unreactive metal' with 'requires high-energy extraction'. Very unreactive metals (Cu, Ag, Au) actually need the LEAST energy to extract.",
        guideRef: "Displacement Reactions and Links to Extraction",
        difficulty: "challenge",
        hints: [
          "The squeaky pop test identifies a specific gas — which one?",
          "Use each observation to place P, Q, and R into a section of the reactivity series (above Ca? between Ca and H? below H?).",
          "The extraction method depends on position relative to carbon (C) in the reactivity series, not just 'reactive' or 'unreactive'.",
          "A metal below hydrogen in the series is below carbon too — what does this mean for its extraction?",
        ],
        strategy: "Rank by observations, then place relative to key reference points (C and H) in the series",
      },
    ],
  },

  // ─── QUESTION BANK ───────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      // ── MCQ PAPER 1 ── physical properties, reactivity series, reactions with water/acid/oxygen
      {
        id: "chem-metals-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Physical properties, the reactivity series, and reactions with water, acid and oxygen.",
        questions: [
          {
            id: "chem-metals-bm1-01",
            question: "Which property is NOT typical of most metals?",
            options: [
              "Good conductor of electricity",
              "Malleable",
              "Low melting point and low density",
              "Shiny when freshly cut",
            ],
            answerIndex: 2,
            explanation: "Most metals have HIGH melting points and HIGH densities because the metallic bonding in the giant lattice is strong. Good conductivity, malleability and lustre are all typical metallic properties. (A few exceptions like sodium are soft and low-density, but this is not typical.)",
            difficulty: "warmup",
            guideRef: "Physical Properties of Metals",
          },
          {
            id: "chem-metals-bm1-02",
            question: "Why are metals good conductors of electricity?",
            options: [
              "They contain delocalised electrons that are free to move and carry charge",
              "Their positive ions move through the lattice carrying charge",
              "They form covalent bonds that allow electrons to flow",
              "Their atoms vibrate and pass charge from one to the next",
            ],
            answerIndex: 0,
            explanation: "In the metallic lattice, valence electrons are delocalised — not held by individual atoms. These free electrons move through the structure to carry an electric current. The positive ions stay fixed in position (they only vibrate); it is the electrons that flow.",
            difficulty: "warmup",
            guideRef: "Physical Properties of Metals",
          },
          {
            id: "chem-metals-bm1-03",
            question: "Which list shows three metals in order of DECREASING reactivity?",
            options: [
              "Copper, iron, magnesium",
              "Iron, magnesium, copper",
              "Copper, magnesium, iron",
              "Magnesium, iron, copper",
            ],
            answerIndex: 3,
            explanation: "The reactivity series runs Mg > (C) > Zn > Fe > (H) > Cu. So decreasing reactivity is magnesium, then iron, then copper.",
            difficulty: "warmup",
            guideRef: "The Reactivity Series",
          },
          {
            id: "chem-metals-bm1-04",
            question: "A metal reacts only slowly with cold water but vigorously with steam, forming a white oxide and hydrogen. Which metal is it?",
            options: [
              "Sodium",
              "Copper",
              "Magnesium",
              "Gold",
            ],
            answerIndex: 2,
            explanation: "Magnesium reacts only slowly with cold water but vigorously with steam: Mg + H₂O(g) → MgO + H₂. Sodium reacts violently with COLD water; copper and gold do not react with water or steam at all.",
            difficulty: "core",
            hints: [
              "Sodium reacts vigorously even with cold water — so it cannot be sodium.",
              "Copper and gold are below hydrogen and do not react with water or steam.",
              "Which metal forms a WHITE oxide (MgO) and sits just above zinc?",
            ],
            guideRef: "The Reactivity Series",
          },
          {
            id: "chem-metals-bm1-05",
            question: "Which equation correctly represents the reaction of sodium with cold water?",
            options: [
              "2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)",
              "Na(s) + H₂O(l) → NaOH(aq) + H₂(g)",
              "2Na(s) + H₂O(l) → Na₂O(s) + H₂(g)",
              "Na(s) + 2H₂O(l) → NaOH₂(aq) + H₂(g)",
            ],
            answerIndex: 0,
            explanation: "Sodium reacts with cold water to give sodium hydroxide and hydrogen: 2Na + 2H₂O → 2NaOH + H₂. The balanced equation needs 2 Na and 2 H₂O to balance the hydrogens (4 H on each side: 4 in 2H₂O = 2 in 2NaOH + 2 in H₂).",
            difficulty: "core",
            hints: [
              "Reaction of a Group 1 metal with water gives a metal hydroxide plus hydrogen.",
              "Count hydrogen atoms on each side and adjust coefficients.",
              "NaOH₂ and Na₂O are not the products — the product is the hydroxide NaOH.",
            ],
            guideRef: "The Reactivity Series",
          },
          {
            id: "chem-metals-bm1-06",
            question: "Zinc is added to dilute sulfuric acid. Which products form?",
            options: [
              "Zinc oxide and water",
              "Zinc sulfide and oxygen",
              "No reaction occurs",
              "Zinc sulfate and hydrogen",
            ],
            answerIndex: 3,
            explanation: "Zinc is above hydrogen in the reactivity series, so it displaces hydrogen from the acid: Zn + H₂SO₄ → ZnSO₄ + H₂. A salt (zinc sulfate) and hydrogen gas are formed.",
            difficulty: "core",
            hints: [
              "Metal + dilute acid → salt + hydrogen, IF the metal is above hydrogen.",
              "The acid is sulfuric acid, so the salt is a sulfate.",
              "Is zinc above or below hydrogen in the reactivity series?",
            ],
            guideRef: "The Reactivity Series",
          },
          {
            id: "chem-metals-bm1-07",
            question: "Why does copper NOT react with dilute hydrochloric acid?",
            options: [
              "Copper is below hydrogen in the reactivity series",
              "Copper forms a protective oxide layer that blocks the acid",
              "Hydrochloric acid is too weak to react with any metal",
              "Copper is a transition metal and transition metals are inert",
            ],
            answerIndex: 0,
            explanation: "Copper is below hydrogen in the reactivity series, so it cannot displace hydrogen from dilute acids — no reaction occurs. This is the defining test that places copper below hydrogen.",
            difficulty: "core",
            hints: [
              "A metal must be ABOVE hydrogen in the series to displace H₂ from an acid.",
              "Think about where copper sits relative to hydrogen.",
              "It is not about an oxide layer here — it is about position in the series.",
            ],
            guideRef: "The Reactivity Series",
          },
          {
            id: "chem-metals-bm1-08",
            question: "When magnesium burns in oxygen, the correct balanced equation is:",
            options: [
              "Mg + O₂ → MgO₂",
              "2Mg + O₂ → 2MgO",
              "Mg + O → MgO",
              "2Mg + 3O₂ → 2MgO₃",
            ],
            answerIndex: 1,
            explanation: "Magnesium burns with a brilliant white flame to form magnesium oxide: 2Mg + O₂ → 2MgO. Two Mg combine with one O₂ molecule (2 O atoms) to give 2 MgO. Oxygen exists as O₂ molecules, and MgO₂/MgO₃ are not real magnesium products.",
            difficulty: "core",
            hints: [
              "Oxygen gas is diatomic — write it as O₂.",
              "Magnesium oxide is MgO (Mg²⁺ and O²⁻).",
              "Balance so the number of O atoms matches on both sides.",
            ],
            guideRef: "The Reactivity Series",
          },
          {
            id: "chem-metals-bm1-09",
            question: "Two metals, X and Y, are each added to dilute hydrochloric acid. X fizzes very rapidly with a vigorous stream of bubbles; Y fizzes only slowly. The temperature rise is larger with X. What can be concluded?",
            options: [
              "Y is more reactive than X",
              "X and Y are equally reactive",
              "X is more reactive than Y",
              "Neither metal reacts with acid",
            ],
            answerIndex: 2,
            explanation: "A more reactive metal reacts faster with dilute acid — more vigorous bubbling and a greater temperature rise. X fizzes faster and releases more heat, so X is more reactive than Y. Rate of reaction and temperature change are valid evidence for ranking reactivity.",
            difficulty: "challenge",
            hints: [
              "More vigorous bubbling means a faster reaction.",
              "A faster reaction and a bigger temperature rise indicate a more reactive metal.",
              "Compare the observations for X and Y directly.",
            ],
            strategy: "Rank reactivity by rate of fizzing and size of temperature change — faster and hotter means more reactive.",
            guideRef: "The Reactivity Series",
          },
          {
            id: "chem-metals-bm1-10",
            question: "Iron reacts with steam (but not readily with cold water). Which equation represents this reaction?",
            options: [
              "Fe(s) + H₂O(g) → FeO(s) + H₂(g)",
              "2Fe(s) + 3H₂O(g) → Fe₂O₃(s) + 3H₂(g)",
              "Fe(s) + 2H₂O(g) → Fe(OH)₂(s) + H₂(g)",
              "3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)",
            ],
            answerIndex: 3,
            explanation: "Hot iron reacts reversibly with steam to form the mixed oxide tri-iron tetroxide: 3Fe + 4H₂O → Fe₃O₄ + 4H₂. Check the balance: 3 Fe, 8 H and 4 O on each side. With steam the product is Fe₃O₄ (not Fe₂O₃ or a hydroxide).",
            difficulty: "challenge",
            hints: [
              "Iron + steam gives an iron oxide plus hydrogen.",
              "The oxide formed with steam is Fe₃O₄ (the mixed oxide).",
              "Balance Fe, then O, then H atoms across the equation.",
            ],
            guideRef: "The Reactivity Series",
          },
        ],
      },

      // ── MCQ PAPER 2 ── displacement, ionic equations, oxidation/reduction
      {
        id: "chem-metals-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Displacement reactions, ionic equations, and oxidation and reduction.",
        questions: [
          {
            id: "chem-metals-bm2-01",
            question: "In a displacement reaction, a metal can displace another metal from its salt solution if the first metal is:",
            options: [
              "Less reactive than the second",
              "More reactive than the second",
              "Equal in reactivity to the second",
              "Below hydrogen in the reactivity series",
            ],
            answerIndex: 1,
            explanation: "A more reactive metal displaces a less reactive metal from a solution of its salt. The more reactive metal forms ions more readily and pushes the less reactive metal out of solution as the free metal.",
            difficulty: "warmup",
            guideRef: "Displacement Reactions and Links to Extraction",
          },
          {
            id: "chem-metals-bm2-02",
            question: "Which of these mixtures will produce a displacement reaction?",
            options: [
              "Copper added to zinc sulfate solution",
              "Silver added to copper(II) nitrate solution",
              "Zinc added to copper(II) sulfate solution",
              "Copper added to magnesium chloride solution",
            ],
            answerIndex: 2,
            explanation: "Zinc is more reactive than copper, so zinc displaces copper: Zn + CuSO₄ → ZnSO₄ + Cu. The other three pair a less reactive metal with a more reactive metal's salt, so no reaction occurs.",
            difficulty: "warmup",
            guideRef: "Displacement Reactions and Links to Extraction",
          },
          {
            id: "chem-metals-bm2-03",
            question: "When zinc displaces copper from copper(II) sulfate solution, which observation is correct?",
            options: [
              "The blue colour deepens and a silvery deposit forms",
              "The solution turns green and a gas is given off",
              "The blue solution fades and a reddish-brown deposit forms",
              "No visible change occurs",
            ],
            answerIndex: 2,
            explanation: "The blue colour is due to Cu²⁺ ions. As zinc displaces copper, Cu²⁺ is removed (the blue fades) and reddish-brown copper metal deposits on the zinc. Zn²⁺ ions formed are colourless.",
            difficulty: "core",
            hints: [
              "The blue colour of the solution comes from Cu²⁺ ions.",
              "As Cu²⁺ is converted to copper metal, what happens to the blue colour?",
              "Copper metal is reddish-brown; the zinc ions formed are colourless.",
            ],
            guideRef: "Displacement Reactions and Links to Extraction",
          },
          {
            id: "chem-metals-bm2-04",
            question: "Which is the correct ionic equation for the displacement of copper by zinc?",
            options: [
              "Zn²⁺ + Cu → Zn + Cu²⁺",
              "Zn + Cu²⁺ → Zn²⁺ + Cu",
              "Zn + Cu → Zn²⁺ + Cu²⁺",
              "Zn²⁺ + Cu²⁺ → Zn + Cu",
            ],
            answerIndex: 1,
            explanation: "Zinc atoms are oxidised to Zn²⁺ and copper ions are reduced to Cu: Zn + Cu²⁺ → Zn²⁺ + Cu. The sulfate ions are spectators and are left out of the ionic equation.",
            difficulty: "core",
            hints: [
              "The reactive metal (Zn) starts as an atom and becomes an ion.",
              "The less reactive metal ion (Cu²⁺) starts as an ion and becomes an atom.",
              "Leave out the spectator sulfate ions.",
            ],
            guideRef: "Displacement Reactions and Links to Extraction",
          },
          {
            id: "chem-metals-bm2-05",
            question: "In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, which species is OXIDISED?",
            options: [
              "Cu²⁺, because it gains electrons",
              "Cu, because it loses electrons",
              "Zn²⁺, because it gains electrons",
              "Zn, because it loses electrons",
            ],
            answerIndex: 3,
            explanation: "Oxidation is loss of electrons (OIL RIG). Zn → Zn²⁺ + 2e⁻ is loss of electrons, so zinc is oxidised. Cu²⁺ + 2e⁻ → Cu is gain of electrons, so the copper ion is reduced.",
            difficulty: "core",
            hints: [
              "Remember OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons).",
              "Zn goes from 0 to +2 — does it lose or gain electrons?",
              "The species that loses electrons is oxidised.",
            ],
            guideRef: "Displacement Reactions and Links to Extraction",
          },
          {
            id: "chem-metals-bm2-06",
            question: "Iron filings are added to silver nitrate solution, AgNO₃. Given that iron is much more reactive than silver, what is observed?",
            options: [
              "Silver is displaced and a grey/silver deposit forms on the iron",
              "No reaction, because silver is a precious metal",
              "Hydrogen gas is given off",
              "The iron dissolves to give a blue solution",
            ],
            answerIndex: 0,
            explanation: "Iron is above silver in the reactivity series, so it displaces silver: Fe + 2AgNO₃ → Fe(NO₃)₂ + 2Ag. Silver metal deposits as a grey/silvery solid and the iron dissolves to form iron(II) nitrate. No hydrogen is produced (this is not an acid).",
            difficulty: "core",
            hints: [
              "More reactive metal displaces less reactive metal from its salt.",
              "Iron is well above silver, so the reaction does occur.",
              "The displaced metal (silver) appears as a solid deposit.",
            ],
            guideRef: "Displacement Reactions and Links to Extraction",
          },
          {
            id: "chem-metals-bm2-07",
            question: "The thermite reaction is 2Al + Fe₂O₃ → Al₂O₃ + 2Fe. Which statement about this reaction is correct?",
            options: [
              "Iron is oxidised and aluminium is reduced",
              "Aluminium is oxidised and iron(III) is reduced",
              "Both metals are oxidised",
              "No electrons are transferred",
            ],
            answerIndex: 1,
            explanation: "Aluminium (more reactive) takes oxygen from iron(III) oxide: Al is oxidised (Al → Al³⁺, gains oxygen/loses electrons) and Fe³⁺ is reduced to Fe (loses oxygen/gains electrons). Aluminium acts as the reducing agent.",
            difficulty: "core",
            hints: [
              "The more reactive metal removes oxygen from the less reactive metal's oxide.",
              "Gaining oxygen = oxidation; losing oxygen = reduction.",
              "Aluminium ends up combined with oxygen — so it has been oxidised.",
            ],
            guideRef: "Displacement Reactions and Links to Extraction",
          },
          {
            id: "chem-metals-bm2-08",
            question: "A student tests metal M by adding it to solutions of iron(II) sulfate and zinc sulfate. M displaces iron but does NOT displace zinc. Where does M sit in the reactivity series?",
            options: [
              "Above zinc",
              "Below iron",
              "Between zinc and iron",
              "Below copper",
            ],
            answerIndex: 2,
            explanation: "M displaces iron, so M is more reactive than iron (above Fe). M does not displace zinc, so M is less reactive than zinc (below Zn). Therefore M lies between zinc and iron in the series. (Order: Zn > M > Fe.)",
            difficulty: "challenge",
            hints: [
              "If M displaces iron, M must be above iron.",
              "If M cannot displace zinc, M must be below zinc.",
              "Combine both clues to locate M between two known metals.",
            ],
            strategy: "Each successful displacement places M above that metal; each failure places M below it — combine the constraints.",
            guideRef: "Displacement Reactions and Links to Extraction",
          },
          {
            id: "chem-metals-bm2-09",
            question: "Why is a displacement reaction between a metal and a metal-salt solution always exothermic when it occurs?",
            options: [
              "Because gas is released, which carries away energy",
              "Because bonds in the products are weaker than in the reactants",
              "Because the more reactive metal forms a more stable compound, releasing energy",
              "Because the solution always cools down",
            ],
            answerIndex: 2,
            explanation: "The more reactive metal forms a more stable (lower-energy) compound than the less reactive metal did. The difference in stability is released as heat, so the temperature of the solution rises — the reaction is exothermic.",
            difficulty: "challenge",
            hints: [
              "Compare the stability of the compound before and after the swap.",
              "A more reactive metal bonds more strongly / forms a more stable compound.",
              "Energy is released when a more stable product forms — heating the mixture.",
            ],
            guideRef: "Displacement Reactions and Links to Extraction",
          },
          {
            id: "chem-metals-bm2-10",
            question: "Carbon and hydrogen are included in the reactivity series mainly because:",
            options: [
              "They are metals that react with water",
              "They are produced in every displacement reaction",
              "They are the most reactive elements known",
              "They can act as reducing agents and act as reference points for choosing an extraction method",
            ],
            answerIndex: 3,
            explanation: "Carbon and hydrogen are non-metals, but they can reduce some metal oxides. Their positions in the series act as reference points: a metal below carbon can be extracted by reduction with carbon, while a metal above carbon needs electrolysis.",
            difficulty: "challenge",
            hints: [
              "Carbon and hydrogen are not metals — why list them at all?",
              "Both can remove oxygen from certain metal oxides (act as reducing agents).",
              "Their position helps decide which extraction method a metal needs.",
            ],
            guideRef: "Displacement Reactions and Links to Extraction",
          },
        ],
      },

      // ── MCQ PAPER 3 ── extraction, electrolysis of aluminium, blast furnace
      {
        id: "chem-metals-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Extraction of metals, electrolysis of aluminium, and the blast furnace.",
        questions: [
          {
            id: "chem-metals-bm3-01",
            question: "Which method is used to extract metals that are ABOVE carbon in the reactivity series?",
            options: [
              "Electrolysis of the molten compound",
              "Reduction with carbon",
              "Heating the ore in air",
              "Found native, no extraction needed",
            ],
            answerIndex: 0,
            explanation: "Metals above carbon (K, Na, Ca, Mg, Al) form oxides too stable for carbon to reduce, so they are extracted by electrolysis of their molten compounds. Carbon reduction works only for metals below carbon.",
            difficulty: "warmup",
            guideRef: "Extraction of Metals",
          },
          {
            id: "chem-metals-bm3-02",
            question: "The main ore of aluminium, from which aluminium oxide is obtained, is:",
            options: [
              "Haematite",
              "Bauxite",
              "Limestone",
              "Cryolite",
            ],
            answerIndex: 1,
            explanation: "Aluminium is extracted from bauxite, which contains aluminium oxide (Al₂O₃). Haematite is iron ore (Fe₂O₃); limestone is CaCO₃ (used in the blast furnace); cryolite is added to lower the melting point of the alumina, not the ore.",
            difficulty: "warmup",
            guideRef: "Extraction of Metals",
          },
          {
            id: "chem-metals-bm3-03",
            question: "Why is cryolite used in the electrolytic extraction of aluminium?",
            options: [
              "It reacts with aluminium oxide to form aluminium",
              "It is the source of the aluminium ions",
              "It prevents the carbon anodes from burning away",
              "It lowers the melting point of aluminium oxide, saving energy",
            ],
            answerIndex: 3,
            explanation: "Aluminium oxide melts at about 2072 °C. Dissolving it in molten cryolite (Na₃AlF₆) lowers the operating temperature to about 970 °C, which greatly reduces the energy (and cost) needed. The aluminium still comes from the Al₂O₃.",
            difficulty: "core",
            hints: [
              "Al₂O₃ has a very high melting point — what problem does that cause?",
              "Melting at a lower temperature uses less energy.",
              "Cryolite is a solvent for the alumina, not the source of aluminium.",
            ],
            guideRef: "Extraction of Metals",
          },
          {
            id: "chem-metals-bm3-04",
            question: "During the electrolysis of aluminium oxide, the reaction at the CATHODE is:",
            options: [
              "2O²⁻ → O₂ + 4e⁻",
              "Al³⁺ + 3e⁻ → Al",
              "Al → Al³⁺ + 3e⁻",
              "2O²⁻ + 4e⁻ → O₂",
            ],
            answerIndex: 1,
            explanation: "At the cathode (negative electrode), aluminium ions gain electrons (reduction): Al³⁺ + 3e⁻ → Al. Molten aluminium collects at the bottom of the cell. Oxidation of O²⁻ to O₂ happens at the anode.",
            difficulty: "core",
            hints: [
              "The cathode is negative and attracts positive ions.",
              "Reduction (gain of electrons) happens at the cathode.",
              "Aluminium ions are Al³⁺ — how many electrons do they gain?",
            ],
            guideRef: "Extraction of Metals",
          },
          {
            id: "chem-metals-bm3-05",
            question: "Why do the carbon (graphite) anodes in the aluminium cell need to be replaced regularly?",
            options: [
              "They dissolve into the molten aluminium",
              "They become coated with aluminium",
              "They react with the oxygen produced, forming carbon dioxide and burning away",
              "They cool down and crack",
            ],
            answerIndex: 2,
            explanation: "Oxygen is produced at the hot carbon anodes (2O²⁻ → O₂ + 4e⁻). At the high operating temperature the oxygen reacts with the carbon: C + O₂ → CO₂, so the anodes gradually burn away and must be replaced.",
            difficulty: "core",
            hints: [
              "What gas is produced at the anode?",
              "The anodes are made of carbon and the cell is very hot.",
              "Hot carbon reacts with oxygen to form a gas — which gas?",
            ],
            guideRef: "Extraction of Metals",
          },
          {
            id: "chem-metals-bm3-06",
            question: "In the blast furnace, which substance is the MAIN reducing agent that converts iron(III) oxide to iron?",
            options: [
              "Carbon monoxide",
              "Carbon (coke)",
              "Calcium oxide",
              "Oxygen",
            ],
            answerIndex: 0,
            explanation: "Although coke burns to start the process, the main reducing agent is carbon monoxide: Fe₂O₃ + 3CO → 2Fe + 3CO₂. The CO is produced by CO₂ + C → 2CO higher up the furnace.",
            difficulty: "core",
            hints: [
              "Coke first burns in air, then makes a gas that does most of the reducing.",
              "CO₂ + C → 2CO produces the key reducing gas.",
              "Which gas actually reacts with Fe₂O₃ to give iron?",
            ],
            guideRef: "Extraction of Metals",
          },
          {
            id: "chem-metals-bm3-07",
            question: "What is the role of limestone (calcium carbonate) added to the blast furnace?",
            options: [
              "It reduces the iron oxide directly to iron",
              "It increases the temperature by burning",
              "It provides carbon monoxide for reduction",
              "It decomposes to form CaO, which reacts with silica impurities to form slag",
            ],
            answerIndex: 3,
            explanation: "Limestone decomposes: CaCO₃ → CaO + CO₂. The calcium oxide then reacts with acidic silica (sand) impurities: CaO + SiO₂ → CaSiO₃ (slag). The molten slag floats on the iron and is tapped off separately.",
            difficulty: "core",
            hints: [
              "Limestone first decomposes when heated.",
              "The product CaO reacts with an acidic impurity (SiO₂).",
              "The result is slag — calcium silicate.",
            ],
            guideRef: "Extraction of Metals",
          },
          {
            id: "chem-metals-bm3-08",
            question: "Which set of equations correctly shows how carbon monoxide is generated in the blast furnace?",
            options: [
              "C + O₂ → CO₂, then CO₂ + C → 2CO",
              "2C + O₂ → 2CO only",
              "C + 2O₂ → 2CO, then CO + C → CO₂",
              "CaCO₃ → CaO + CO, then CO + Fe₂O₃ → Fe",
            ],
            answerIndex: 0,
            explanation: "First coke burns completely in the hot air blast: C + O₂ → CO₂. Then, higher up where carbon is in excess, the carbon dioxide is reduced by more carbon: CO₂ + C → 2CO. This CO is the main reducing agent.",
            difficulty: "challenge",
            hints: [
              "Coke first burns in the air blast to give a fully oxidised gas.",
              "That gas then reacts with MORE hot carbon higher in the furnace.",
              "CO₂ + C → 2CO is the second step.",
            ],
            guideRef: "Extraction of Metals",
          },
          {
            id: "chem-metals-bm3-09",
            question: "Gold is usually found in the Earth as the uncombined (native) metal, rather than as a compound. Why?",
            options: [
              "Gold is too rare to form compounds",
              "Gold oxide decomposes as soon as it forms",
              "Gold is so unreactive that it does not readily combine with other elements",
              "Gold only forms compounds at very high temperatures",
            ],
            answerIndex: 2,
            explanation: "Gold is at the very bottom of the reactivity series — extremely unreactive. It does not react with oxygen, water or acids under normal conditions, so it stays as the free metal in the ground and needs no chemical extraction.",
            difficulty: "challenge",
            hints: [
              "Where is gold in the reactivity series?",
              "Unreactive metals do not combine easily with oxygen or other elements.",
              "If a metal will not form compounds, how is it found in nature?",
            ],
            guideRef: "Extraction of Metals",
          },
          {
            id: "chem-metals-bm3-10",
            question: "Zinc lies below carbon but above hydrogen in the reactivity series. Based only on this, which extraction method is appropriate for zinc?",
            options: [
              "Electrolysis of molten zinc oxide",
              "Reduction of zinc oxide with carbon",
              "Found native, no extraction",
              "Reduction with a more reactive metal such as gold",
            ],
            answerIndex: 1,
            explanation: "Because zinc is BELOW carbon in the reactivity series, carbon can reduce zinc oxide: ZnO + C → Zn + CO (or with CO). Electrolysis is reserved for metals above carbon; zinc is reactive enough that it is not found native; gold is far less reactive than zinc.",
            difficulty: "challenge",
            hints: [
              "The deciding factor is the metal's position relative to carbon.",
              "Below carbon → carbon reduction is possible.",
              "Electrolysis is needed only for metals above carbon.",
            ],
            guideRef: "Extraction of Metals",
          },
        ],
      },

      // ── MCQ PAPER 4 ── rusting, alloys, uses of metals, recycling
      {
        id: "chem-metals-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Rusting and its prevention, alloys, uses of metals, and recycling.",
        questions: [
          {
            id: "chem-metals-bm4-01",
            question: "Which two substances must BOTH be present for iron to rust?",
            options: [
              "Oxygen and carbon dioxide",
              "Water and salt",
              "Water and oxygen",
              "Salt and carbon dioxide",
            ],
            answerIndex: 2,
            explanation: "Rusting needs both water AND oxygen present together. Removing either one prevents rust. Salt is not required (though it speeds rusting by acting as an electrolyte); carbon dioxide is not one of the essential conditions.",
            difficulty: "warmup",
            guideRef: "Rusting of Iron and Prevention",
          },
          {
            id: "chem-metals-bm4-02",
            question: "Rust is best described chemically as:",
            options: [
              "Iron(II) carbonate",
              "Hydrated iron(III) oxide",
              "Iron(II) hydroxide only",
              "Pure iron(III) chloride",
            ],
            answerIndex: 1,
            explanation: "Rust is hydrated iron(III) oxide, Fe₂O₃·xH₂O — a flaky orange-brown solid. Because it is flaky and non-protective, it allows further attack on the iron beneath.",
            difficulty: "warmup",
            guideRef: "Rusting of Iron and Prevention",
          },
          {
            id: "chem-metals-bm4-03",
            question: "An alloy is best described as:",
            options: [
              "A compound of two metals in fixed proportions",
              "A pure metal that has been heat-treated",
              "A metal coated with a layer of a different metal",
              "A mixture of a metal with one or more other elements",
            ],
            answerIndex: 3,
            explanation: "An alloy is a MIXTURE of a metal with one or more other elements (metals or non-metals). It is not a compound — its composition can vary, and it is not just a coated or heat-treated pure metal.",
            difficulty: "warmup",
            guideRef: "Alloys, Uses of Metals, and Recycling",
          },
          {
            id: "chem-metals-bm4-04",
            question: "Why is an alloy usually harder than the pure metal it is mainly made from?",
            options: [
              "The added atoms form strong covalent bonds",
              "Alloys contain more delocalised electrons",
              "Alloys have smaller ions that pack more tightly",
              "Differently sized atoms distort the layers, making it harder for them to slide",
            ],
            answerIndex: 3,
            explanation: "In a pure metal, identical-sized ions slide over each other in regular layers, making it soft. Atoms of a different size in an alloy disrupt the regular layers, so they cannot slide easily — the alloy is harder and stronger.",
            difficulty: "core",
            hints: [
              "Think about what makes a pure metal soft at the atomic level.",
              "Layers of identical ions can slide past each other easily.",
              "Adding different-sized atoms disturbs this regular arrangement.",
            ],
            guideRef: "Alloys, Uses of Metals, and Recycling",
          },
          {
            id: "chem-metals-bm4-05",
            question: "Which alloy is made from copper and zinc?",
            options: [
              "Brass",
              "Bronze",
              "Steel",
              "Stainless steel",
            ],
            answerIndex: 0,
            explanation: "Brass = copper + zinc. Bronze is copper + tin; steel is iron + carbon; stainless steel is iron + chromium + nickel.",
            difficulty: "core",
            hints: [
              "Bronze and brass are both copper alloys — one uses tin, the other zinc.",
              "Brass is used for musical instruments and taps.",
              "Match the copper alloy that contains zinc.",
            ],
            guideRef: "Alloys, Uses of Metals, and Recycling",
          },
          {
            id: "chem-metals-bm4-06",
            question: "Galvanising protects iron from rusting. Which statement best describes how galvanising works?",
            options: [
              "It coats the iron with zinc, giving a barrier AND sacrificial protection",
              "It coats the iron with tin, which is more reactive than iron",
              "It paints the iron to keep out only oxygen",
              "It alloys the iron with carbon to make it rust-proof",
            ],
            answerIndex: 0,
            explanation: "Galvanising coats steel with zinc. The zinc acts as a physical barrier, and because zinc is above iron in the reactivity series it also provides sacrificial protection: even if scratched, the zinc corrodes preferentially and the iron is protected.",
            difficulty: "core",
            hints: [
              "Galvanising uses a coating of zinc.",
              "Zinc is more reactive than iron — what does that allow even if scratched?",
              "Two kinds of protection are involved: barrier and sacrificial.",
            ],
            guideRef: "Rusting of Iron and Prevention",
          },
          {
            id: "chem-metals-bm4-07",
            question: "Aluminium is used for overhead electricity power cables. Which combination of properties best explains this use?",
            options: [
              "Low density and good electrical conductivity",
              "High density and high reactivity",
              "Magnetic and very hard",
              "High melting point and brittleness",
            ],
            answerIndex: 0,
            explanation: "Aluminium has a low density (so the cables are light and do not sag too much between pylons) and is a good conductor of electricity. A steel core is added for extra strength. Reactivity and magnetism are irrelevant here.",
            difficulty: "core",
            hints: [
              "Cables strung between tall pylons must not be too heavy.",
              "A cable must also carry electricity well.",
              "Link low density to the weight of the cable.",
            ],
            guideRef: "Alloys, Uses of Metals, and Recycling",
          },
          {
            id: "chem-metals-bm4-08",
            question: "In three sealed tubes, an iron nail is placed in: (1) dry air over a drying agent, (2) boiled water with a layer of oil on top, (3) ordinary tap water open to the air. After a week, which tube(s) show rust?",
            options: [
              "Tube 1 only",
              "Tube 2 only",
              "Tube 3 only",
              "All three tubes",
            ],
            answerIndex: 2,
            explanation: "Only tube 3 has both water AND oxygen, so only tube 3 rusts. Tube 1 has air (oxygen) but no water; tube 2 has water but the boiling removed dissolved oxygen and the oil keeps air out. This classic experiment proves both conditions are needed.",
            difficulty: "challenge",
            hints: [
              "Identify which of water and oxygen is present in each tube.",
              "Drying agent removes water; boiling + oil removes oxygen.",
              "Rust forms only where BOTH are present.",
            ],
            strategy: "For control experiments, check each tube against the requirement (here: both water and oxygen) and rust appears only when all conditions are met.",
            guideRef: "Rusting of Iron and Prevention",
          },
          {
            id: "chem-metals-bm4-09",
            question: "Recycling aluminium rather than extracting it from its ore is favoured mainly because:",
            options: [
              "Recycled aluminium is stronger than new aluminium",
              "There is no more bauxite left to mine",
              "Recycled aluminium does not need to be melted",
              "Recycling uses far less energy (about 5% of that needed for electrolysis)",
            ],
            answerIndex: 3,
            explanation: "Extracting aluminium by electrolysis is very energy-intensive. Recycling aluminium uses only about 5% of that energy, conserving ore reserves, cutting CO₂ emissions and reducing costs. It is not stronger, and it does still need melting.",
            difficulty: "challenge",
            hints: [
              "Compare the energy used to extract vs to recycle aluminium.",
              "Electrolysis needs a large, continuous electrical supply.",
              "Recycling avoids most of that energy cost.",
            ],
            guideRef: "Alloys, Uses of Metals, and Recycling",
          },
          {
            id: "chem-metals-bm4-10",
            question: "Stainless steel is preferred over ordinary steel for cutlery and surgical instruments mainly because it:",
            options: [
              "Is much cheaper to produce",
              "Is magnetic, so it can be sterilised easily",
              "Is resistant to corrosion (does not rust)",
              "Conducts electricity better",
            ],
            answerIndex: 2,
            explanation: "Stainless steel contains chromium (and nickel), which makes it resistant to corrosion so it does not rust. This is essential for cutlery and surgical tools that are repeatedly washed or sterilised. It is more expensive, not cheaper, than ordinary steel.",
            difficulty: "challenge",
            hints: [
              "Ordinary steel rusts; stainless steel does not.",
              "Think about what cutlery and surgical tools are exposed to.",
              "Chromium gives the corrosion resistance.",
            ],
            guideRef: "Alloys, Uses of Metals, and Recycling",
          },
        ],
      },
    ],
    qaPapers: [
      // ── STRUCTURED PAPER 1 ── properties, reactivity series, reactions
      {
        id: "chem-metals-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Physical properties and reactions of metals with water, acids and oxygen.",
        questions: [
          {
            id: "chem-metals-bq1-01",
            question: "Explain, in terms of structure, why metals are (a) good conductors of electricity and (b) malleable. [4]",
            marks: 4,
            modelAnswer:
              "(a) A metal has a giant lattice of positive ions in a 'sea' of delocalised electrons. These electrons are free to move through the structure, so they can carry an electric current.\n(b) The layers of positive ions can slide over one another without breaking the metallic bonding, because the delocalised electrons adjust around the new positions. This allows the metal to be hammered into shape (malleable).",
            markScheme: [
              "(a) Delocalised / free electrons present",
              "(a) Electrons move / flow to carry charge / current",
              "(b) Layers of (positive) ions can slide / slip over each other",
              "(b) Metallic bonding / electron sea is maintained as layers move",
            ],
            commonError: "Saying the IONS move to carry the current. It is the delocalised electrons that move; the ions stay in place (they only vibrate).",
            guideRef: "Physical Properties of Metals",
            difficulty: "core",
            hints: [
              "Describe the metallic structure: positive ions plus delocalised electrons.",
              "For conduction, focus on what is free to MOVE.",
              "For malleability, think about layers of ions sliding.",
              "Stress that the bonding is not broken when the layers move.",
            ],
          },
          {
            id: "chem-metals-bq1-02",
            question: "The reactivity series places metals in order of reactivity. (a) Write the order of these five metals from most to least reactive: copper, magnesium, potassium, zinc, iron. [2] (b) State one observation you would make when potassium is added to cold water. [1]",
            marks: 3,
            modelAnswer:
              "(a) Potassium > magnesium > zinc > iron > copper.\n(b) Any one of: it reacts very vigorously/violently; it floats and moves about on the surface; it melts into a ball; a lilac flame / it ignites; bubbles of gas (hydrogen) are produced; it fizzes and disappears.",
            markScheme: [
              "(a) Correct order K, Mg, Zn (2 marks; 1 mark if one pair transposed)",
              "(a) ... Fe, Cu completing the order",
              "(b) Any valid observation: vigorous reaction / floats and moves / melts into ball / lilac flame / effervescence (gas given off)",
            ],
            commonError: "Reversing the order (listing least reactive first) or placing zinc below iron. The order is Zn ABOVE Fe.",
            guideRef: "The Reactivity Series",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bq1-03",
            question: "Calcium reacts with cold water. (a) Write a balanced symbol equation, including state symbols, for the reaction of calcium with cold water. [2] (b) Name the two products and state what you would observe. [2]",
            marks: 4,
            modelAnswer:
              "(a) Ca(s) + 2H₂O(l) → Ca(OH)₂(aq) + H₂(g). (Calcium hydroxide is only slightly soluble, so (aq)/(s) for a cloudy suspension is acceptable.)\n(b) Products: calcium hydroxide and hydrogen. Observations: steady stream of bubbles (gas given off), the calcium gradually disappears, and the solution turns cloudy/milky as calcium hydroxide forms.",
            markScheme: [
              "(a) Correct formulae and products: Ca + H₂O → Ca(OH)₂ + H₂",
              "(a) Balanced (2H₂O) with state symbols",
              "(b) Products named: calcium hydroxide and hydrogen",
              "(b) Observation: bubbles/effervescence / cloudy suspension / calcium dissolves",
            ],
            commonError: "Writing CaOH or Ca(OH) instead of Ca(OH)₂. Calcium is 2+ so it needs two hydroxide ions. Also forgetting to balance the 2H₂O.",
            guideRef: "The Reactivity Series",
            difficulty: "core",
            hints: [
              "Metal + water → metal hydroxide + hydrogen.",
              "Calcium forms a 2+ ion, so the hydroxide is Ca(OH)₂.",
              "Balance the hydrogens by adjusting the number of water molecules.",
              "Add state symbols: (s), (l), (aq), (g).",
            ],
            solutions: [
              {
                label: "Balancing the equation",
                steps: [
                  "Write the skeleton: Ca + H₂O → Ca(OH)₂ + H₂.",
                  "Count O: 1 on the left (in H₂O) vs 2 on the right (in Ca(OH)₂) — put 2 in front of H₂O.",
                  "Now: Ca + 2H₂O → Ca(OH)₂ + H₂. Count H: left 4, right 2 + 2 = 4. Balanced.",
                  "Count Ca: 1 each side. Add states: Ca(s) + 2H₂O(l) → Ca(OH)₂(aq) + H₂(g).",
                ],
              },
            ],
          },
          {
            id: "chem-metals-bq1-04",
            question: "Magnesium burns brightly in oxygen and also reacts with steam. (a) Write the balanced equation for magnesium burning in oxygen. [2] (b) Write the balanced equation for magnesium reacting with steam, and name the gas produced. [2]",
            marks: 4,
            modelAnswer:
              "(a) 2Mg(s) + O₂(g) → 2MgO(s). A brilliant white flame is seen and a white solid (magnesium oxide) forms.\n(b) Mg(s) + H₂O(g) → MgO(s) + H₂(g). The gas produced is hydrogen.",
            markScheme: [
              "(a) Correct products MgO and balanced: 2Mg + O₂ → 2MgO",
              "(a) State symbols / observation of bright white flame (allow either for the second mark)",
              "(b) Mg + H₂O → MgO + H₂ (balanced)",
              "(b) Gas named as hydrogen",
            ],
            commonError: "Writing MgO₂ for magnesium oxide, or forgetting that oxygen is O₂. Magnesium oxide is MgO (Mg²⁺ + O²⁻).",
            guideRef: "The Reactivity Series",
            difficulty: "core",
            hints: [
              "Oxygen gas is O₂ and magnesium oxide is MgO.",
              "Balance the oxygen atoms: you need two MgO for one O₂.",
              "With steam, the products are the oxide and hydrogen gas.",
            ],
          },
          {
            id: "chem-metals-bq1-05",
            question: "A teacher tests three metals — sodium, iron and copper — by adding each to cold water and (separately) to dilute hydrochloric acid. Predict and explain what happens in each test, using the reactivity series. [6]",
            marks: 6,
            modelAnswer:
              "Sodium: reacts vigorously with COLD water (2Na + 2H₂O → 2NaOH + H₂), because it is very high in the reactivity series; it is too dangerous to add to dilute acid. \nIron: does NOT react noticeably with cold water (only with steam), but DOES react with dilute hydrochloric acid because iron is above hydrogen: Fe + 2HCl → FeCl₂ + H₂, giving bubbles of hydrogen. \nCopper: does NOT react with cold water and does NOT react with dilute acid, because copper is below hydrogen in the reactivity series. \nOverall the reactivity decreases sodium > iron > copper, which matches the strength of the reactions observed.",
            markScheme: [
              "Sodium reacts vigorously with cold water (very reactive / above Ca)",
              "Sodium too reactive/dangerous for acid OR equation 2Na + 2H₂O → 2NaOH + H₂",
              "Iron does not react with cold water but reacts with acid",
              "Iron + HCl → FeCl₂ + H₂ (gives hydrogen, as iron is above hydrogen)",
              "Copper does not react with cold water or dilute acid",
              "Copper is below hydrogen in the series (so no reaction with acid)",
            ],
            commonError: "Saying copper reacts with dilute acid (it does not — it is below hydrogen), or that iron reacts vigorously with cold water (it needs steam).",
            guideRef: "The Reactivity Series",
            difficulty: "challenge",
            hints: [
              "Place each metal relative to (a) calcium for the water test and (b) hydrogen for the acid test.",
              "Sodium is so reactive it should not be added to acids in school.",
              "A metal reacts with dilute acid only if it is above hydrogen.",
              "Use the spread of results to confirm the order of reactivity.",
            ],
          },
          {
            id: "chem-metals-bq1-06",
            question: "Aluminium is high in the reactivity series, yet aluminium objects such as drink cans appear unreactive in everyday use. Explain this apparent contradiction. [3]",
            marks: 3,
            modelAnswer:
              "Aluminium reacts quickly with oxygen in the air to form a thin layer of aluminium oxide (Al₂O₃) on its surface. This oxide layer is tough, unreactive and impermeable, and it sticks firmly to the metal. It acts as a barrier that stops air, water and other substances from reaching the aluminium underneath, so the metal beneath is protected and appears unreactive — even though aluminium itself is actually reactive.",
            markScheme: [
              "Aluminium forms a layer of aluminium oxide / Al₂O₃ on its surface",
              "The oxide layer is unreactive / tough / impermeable / firmly attached",
              "It acts as a barrier preventing further reaction / protects the metal beneath",
            ],
            commonError: "Saying aluminium is genuinely unreactive. It is reactive — it is the protective oxide layer (passivation) that makes it SEEM unreactive.",
            guideRef: "The Reactivity Series",
            difficulty: "core",
            hints: [
              "Think about what forms immediately when aluminium meets air.",
              "The oxide layer has special properties — is it loose or firmly attached?",
              "Explain how that layer prevents further reaction.",
            ],
          },
          {
            id: "chem-metals-bq1-07",
            question: "State three physical properties that are typical of most metals, and for each give one everyday use that depends on that property. [6]",
            marks: 6,
            modelAnswer:
              "1. Good electrical conductor → used for electrical wiring (e.g. copper wires). \n2. Good thermal (heat) conductor → used for saucepans/cooking pans. \n3. Malleable (can be hammered into shape) → used for car body panels / shaping into sheets. \n(Other acceptable pairs: ductile → drawn into wires; high melting point → structural use; high density/strength → construction; sonorous → bells.)",
            markScheme: [
              "Property 1 with matching use (e.g. electrical conductor → wiring)",
              "Property 2 with matching use (e.g. thermal conductor → cooking pans)",
              "Property 3 with matching use (e.g. malleable → car bodies / ductile → wires)",
              "Each property correctly linked to an appropriate use (3 valid links scored)",
            ],
            commonError: "Listing properties without linking each to a use, or giving a vague use like 'making things'. Each property must be matched to a use that depends on it.",
            guideRef: "Physical Properties of Metals",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bq1-08",
            question: "Sodium, magnesium and calcium are all in the reactivity series above zinc. (a) State which of these three reacts most vigorously with cold water. [1] (b) Explain, in terms of electron loss, what 'more reactive' means for these metals. [3]",
            marks: 4,
            modelAnswer:
              "(a) Sodium (of the three listed, sodium is the most reactive and reacts most vigorously with cold water; potassium would be even more so but is not listed).\n(b) A metal reacts by losing electrons from its atoms to form positive ions (e.g. Na → Na⁺ + e⁻). The more reactive a metal is, the more readily it loses these outer electrons. Sodium loses its single outer electron very easily, so it is highly reactive; a less reactive metal holds its electrons more tightly and reacts less readily.",
            markScheme: [
              "(a) Sodium",
              "(b) Metals react by losing electrons / forming positive ions",
              "(b) More reactive = loses electrons more easily / more readily",
              "(b) Example or comparison: e.g. Na → Na⁺ + e⁻ / less reactive metal holds electrons more tightly",
            ],
            commonError: "Saying reactive metals GAIN electrons. Metals LOSE electrons to form positive ions; reactivity increases with how easily they do so.",
            guideRef: "The Reactivity Series",
            difficulty: "core",
            hints: [
              "Among the three named metals, which is highest in the series?",
              "Metals form POSITIVE ions — do they gain or lose electrons?",
              "Link 'more reactive' to losing electrons more easily.",
            ],
          },
          {
            id: "chem-metals-bq1-09",
            question: "A piece of magnesium ribbon (mass 0.48 g) reacts completely with excess dilute hydrochloric acid. (a) Write the balanced equation. [1] (b) Calculate the mass of magnesium chloride formed. (Ar: Mg = 24, Cl = 35.5) [3]",
            marks: 4,
            modelAnswer:
              "(a) Mg + 2HCl → MgCl₂ + H₂.\n(b) Moles of Mg = 0.48 / 24 = 0.02 mol. From the equation, 1 mol Mg gives 1 mol MgCl₂, so moles of MgCl₂ = 0.02 mol. Mr of MgCl₂ = 24 + (2 × 35.5) = 95. Mass of MgCl₂ = 0.02 × 95 = 1.9 g.",
            markScheme: [
              "(a) Balanced equation: Mg + 2HCl → MgCl₂ + H₂",
              "(b) Moles of Mg = 0.48 / 24 = 0.02 mol",
              "(b) 1:1 ratio, so moles MgCl₂ = 0.02; Mr(MgCl₂) = 95",
              "(b) Mass = 0.02 × 95 = 1.9 g",
            ],
            commonError: "Using Mr of MgCl₂ = 24 + 35.5 = 59.5 (forgetting there are TWO chlorine atoms). MgCl₂ has Mr = 95.",
            guideRef: "The Reactivity Series",
            difficulty: "challenge",
            hints: [
              "Start by writing and balancing the equation.",
              "Convert the mass of magnesium to moles (moles = mass / Ar).",
              "Use the 1:1 mole ratio between Mg and MgCl₂.",
              "Find Mr of MgCl₂ (remember TWO chlorines), then mass = moles × Mr.",
            ],
            solutions: [
              {
                label: "Mole calculation",
                steps: [
                  "Equation: Mg + 2HCl → MgCl₂ + H₂.",
                  "Moles of Mg = mass / Ar = 0.48 / 24 = 0.02 mol.",
                  "Mole ratio Mg : MgCl₂ = 1 : 1, so moles of MgCl₂ = 0.02 mol.",
                  "Mr of MgCl₂ = 24 + 2 × 35.5 = 24 + 71 = 95.",
                  "Mass of MgCl₂ = moles × Mr = 0.02 × 95 = 1.9 g.",
                ],
              },
            ],
          },
          {
            id: "chem-metals-bq1-10",
            question: "Define the term 'reactivity series' and explain why it is useful to chemists. [3]",
            marks: 3,
            modelAnswer:
              "The reactivity series is a list of metals arranged in order of their reactivity, from the most reactive at the top to the least reactive at the bottom (with carbon and hydrogen included as reference points). It is useful because it allows chemists to predict the behaviour of metals — for example whether a metal will react with water or acid, whether one metal will displace another from solution, and which extraction method (electrolysis or reduction with carbon) is suitable.",
            markScheme: [
              "A list of metals in order of reactivity (most reactive to least reactive)",
              "Carbon and hydrogen included as reference points (allow this as a detail)",
              "Useful to predict reactions / displacement / choice of extraction method (any one valid use)",
            ],
            commonError: "Describing it only as a 'list of metals' without mentioning order of reactivity, or not giving a use.",
            guideRef: "The Reactivity Series",
            difficulty: "warmup",
          },
        ],
      },

      // ── STRUCTURED PAPER 2 ── displacement, ionic equations, redox
      {
        id: "chem-metals-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Displacement reactions, ionic equations and redox.",
        questions: [
          {
            id: "chem-metals-bq2-01",
            question: "State, in words, the rule for whether a displacement reaction between a metal and a metal-salt solution will occur. [2]",
            marks: 2,
            modelAnswer:
              "A displacement reaction occurs only if the added metal is MORE reactive than the metal in the salt. A more reactive metal will displace a less reactive metal from a solution of its salt; if the added metal is less reactive, no reaction occurs.",
            markScheme: [
              "More reactive metal displaces a less reactive metal",
              "... from a solution of its salt / its compound (no reaction if added metal is less reactive)",
            ],
            commonError: "Reversing the rule, or omitting that it must be from the salt/solution of the less reactive metal.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bq2-02",
            question: "Magnesium is added to copper(II) sulfate solution. (a) Write the balanced symbol equation (with state symbols). [2] (b) Describe two observations. [2]",
            marks: 4,
            modelAnswer:
              "(a) Mg(s) + CuSO₄(aq) → MgSO₄(aq) + Cu(s).\n(b) Two of: the blue colour of the solution fades / becomes colourless (Cu²⁺ removed); a reddish-brown (copper) solid forms / coats the magnesium; the magnesium gradually dissolves; the mixture warms up (exothermic).",
            markScheme: [
              "(a) Correct products MgSO₄ and Cu",
              "(a) Balanced with state symbols",
              "(b) Blue colour fades / solution decolourises",
              "(b) Reddish-brown copper deposit forms / temperature rises (any second valid observation)",
            ],
            commonError: "Writing Mg₂SO₄ or MgSO₄ wrongly. Magnesium sulfate is MgSO₄ (Mg²⁺ with SO₄²⁻ in a 1:1 ratio).",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "core",
            hints: [
              "Magnesium is more reactive than copper, so the reaction occurs.",
              "Products are magnesium sulfate and copper metal.",
              "Think about the colour from Cu²⁺ ions and the colour of the deposited metal.",
            ],
          },
          {
            id: "chem-metals-bq2-03",
            question: "For the reaction Mg(s) + CuSO₄(aq) → MgSO₄(aq) + Cu(s): (a) write the ionic equation, omitting spectator ions [2]; (b) identify the spectator ion [1]; (c) state which species is oxidised and which is reduced [2].",
            marks: 5,
            modelAnswer:
              "(a) Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s).\n(b) The spectator ion is the sulfate ion, SO₄²⁻ (it is unchanged on both sides).\n(c) Magnesium is oxidised (Mg → Mg²⁺ + 2e⁻; it loses electrons). The copper ion is reduced (Cu²⁺ + 2e⁻ → Cu; it gains electrons).",
            markScheme: [
              "(a) Correct ionic equation Mg + Cu²⁺ → Mg²⁺ + Cu",
              "(a) Correct charges/state symbols shown",
              "(b) Spectator ion = sulfate / SO₄²⁻",
              "(c) Mg is oxidised (loses electrons)",
              "(c) Cu²⁺ is reduced (gains electrons)",
            ],
            commonError: "Stating Cu is oxidised — it is the Cu²⁺ ion that is REDUCED to copper. Also forgetting to remove the spectator sulfate ions.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "core",
            hints: [
              "Cancel any ion that appears unchanged on both sides — that is the spectator.",
              "Write the half-changes: Mg → Mg²⁺ and Cu²⁺ → Cu.",
              "Use OIL RIG: which species loses electrons, which gains?",
            ],
          },
          {
            id: "chem-metals-bq2-04",
            question: "The thermite reaction, 2Al + Fe₂O₃ → Al₂O₃ + 2Fe, is highly exothermic and produces molten iron. (a) Explain why aluminium is able to displace iron from iron(III) oxide. [2] (b) State, with a reason, which substance has been reduced. [2]",
            marks: 4,
            modelAnswer:
              "(a) Aluminium is more reactive than iron (it is above iron in the reactivity series), so aluminium can take the oxygen from iron(III) oxide, displacing the less reactive iron.\n(b) Iron(III) oxide (Fe₂O₃) is reduced, because it loses oxygen (the iron ions gain electrons to become iron metal). Aluminium is oxidised, as it gains oxygen.",
            markScheme: [
              "(a) Aluminium is more reactive than iron / above iron in the series",
              "(a) So Al removes the oxygen / displaces iron from its oxide",
              "(b) Fe₂O₃ / iron(III) oxide is reduced",
              "(b) Reason: it loses oxygen / iron ions gain electrons",
            ],
            commonError: "Confusing which is reduced. Reduction = loss of oxygen (or gain of electrons), so it is the iron oxide that is reduced, not the aluminium.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "core",
            hints: [
              "Compare aluminium and iron in the reactivity series.",
              "The more reactive metal pulls oxygen away from the less reactive metal's oxide.",
              "Reduction is loss of oxygen — which substance loses its oxygen?",
            ],
          },
          {
            id: "chem-metals-bq2-05",
            question: "A student wants to confirm the order of reactivity of zinc, iron and copper using displacement reactions. Describe an experiment they could carry out and the results that would establish the order. [5]",
            marks: 5,
            modelAnswer:
              "Add each metal to solutions of the salts of the other two metals — for example add zinc to iron(II) sulfate and to copper(II) sulfate, add iron to zinc sulfate and to copper(II) sulfate, and add copper to zinc sulfate and to iron(II) sulfate. Observe which mixtures react (colour change, deposit forming, temperature rise). Results: zinc displaces both iron and copper (zinc most reactive); iron displaces copper but not zinc (iron in the middle); copper displaces neither (copper least reactive). This gives the order zinc > iron > copper. Use the same volume and concentration of each solution and the same mass/form of metal to make it a fair test.",
            markScheme: [
              "Add each metal to salt solutions of the other metals (cross-test)",
              "State what to observe: deposit / colour change / temperature rise",
              "Zinc displaces iron and copper (so zinc most reactive)",
              "Iron displaces copper but not zinc; copper displaces neither",
              "Conclude order Zn > Fe > Cu / mention a fair-test control",
            ],
            commonError: "Only doing one test, or not stating the observations that distinguish a reaction from no reaction. A full ranking needs the cross-comparison.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "challenge",
            hints: [
              "Plan to test each metal against the salts of the others.",
              "Decide what counts as evidence of a reaction (deposit, colour, heat).",
              "Reason from which metals are displaced to rank them.",
              "Mention a control to keep it a fair test.",
            ],
          },
          {
            id: "chem-metals-bq2-06",
            question: "Define oxidation and reduction in terms of (a) oxygen and (b) electrons. [4]",
            marks: 4,
            modelAnswer:
              "(a) In terms of oxygen: oxidation is the gain of oxygen by a substance; reduction is the loss of oxygen from a substance.\n(b) In terms of electrons: oxidation is the loss of electrons; reduction is the gain of electrons (OIL RIG — Oxidation Is Loss, Reduction Is Gain).",
            markScheme: [
              "(a) Oxidation = gain of oxygen",
              "(a) Reduction = loss of oxygen",
              "(b) Oxidation = loss of electrons",
              "(b) Reduction = gain of electrons",
            ],
            commonError: "Mixing up the electron definitions. Remember OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons).",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bq2-07",
            question: "Explain why the more reactive metal in a displacement reaction is described as the 'reducing agent'. Use the reaction of zinc with copper(II) ions as an example. [4]",
            marks: 4,
            modelAnswer:
              "In Zn + Cu²⁺ → Zn²⁺ + Cu, zinc gives its electrons to the copper ions. Because zinc supplies the electrons that REDUCE the Cu²⁺ ions to copper (Cu²⁺ + 2e⁻ → Cu), zinc is the reducing agent. In doing so, zinc itself is oxidised (Zn → Zn²⁺ + 2e⁻). The more reactive a metal, the more readily it loses electrons, so the better a reducing agent it is.",
            markScheme: [
              "Zinc donates / loses electrons (Zn → Zn²⁺ + 2e⁻)",
              "These electrons reduce Cu²⁺ to Cu (Cu²⁺ + 2e⁻ → Cu)",
              "Substance that causes reduction (donates electrons) = reducing agent",
              "More reactive metal loses electrons more readily / is a better reducing agent",
            ],
            commonError: "Calling zinc the 'oxidising agent'. Zinc is itself oxidised, but it causes reduction of the copper ions, so it is the REDUCING agent.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "challenge",
            hints: [
              "Write both half-equations for the zinc/copper reaction.",
              "Identify which species supplies electrons to the other.",
              "A reducing agent is the species that CAUSES reduction (by giving electrons).",
              "Link 'more reactive' to losing electrons more easily.",
            ],
          },
          {
            id: "chem-metals-bq2-08",
            question: "Four metals W, X, Y and Z are tested with each other's salt solutions. Results: W displaces X and Y but not Z; Z displaces W, X and Y; X displaces Y only. Arrange W, X, Y and Z in order of decreasing reactivity, explaining your reasoning. [4]",
            marks: 4,
            modelAnswer:
              "Z displaces all the others (W, X, Y), so Z is the most reactive. W displaces X and Y but not Z, so W is below Z but above X and Y. X displaces only Y, so X is above Y but below W. Y displaces none, so Y is the least reactive. Order (most to least reactive): Z > W > X > Y.",
            markScheme: [
              "Z most reactive (displaces all others)",
              "W second (displaces X and Y, but not Z)",
              "X third (displaces only Y)",
              "Y least reactive (displaces none); final order Z > W > X > Y",
            ],
            commonError: "Not using every clue consistently. Each successful displacement means the displacing metal is more reactive than the one displaced — cross-check all results.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "challenge",
            hints: [
              "The metal that displaces all others is the most reactive.",
              "The metal that displaces none is the least reactive.",
              "Use 'A displaces B' to mean A is more reactive than B, and chain the results.",
            ],
          },
          {
            id: "chem-metals-bq2-09",
            question: "Iron is added to silver nitrate solution. (a) Write the balanced symbol equation. [2] (b) Write the ionic equation. [2] (Iron forms Fe²⁺ ions in this reaction.)",
            marks: 4,
            modelAnswer:
              "(a) Fe(s) + 2AgNO₃(aq) → Fe(NO₃)₂(aq) + 2Ag(s).\n(b) Fe(s) + 2Ag⁺(aq) → Fe²⁺(aq) + 2Ag(s). (The nitrate ions, NO₃⁻, are spectators.)",
            markScheme: [
              "(a) Correct products Fe(NO₃)₂ and Ag",
              "(a) Balanced: Fe + 2AgNO₃ → Fe(NO₃)₂ + 2Ag",
              "(b) Ionic equation with Ag⁺: Fe + 2Ag⁺ → Fe²⁺ + 2Ag",
              "(b) Charges balanced / electrons accounted for (2Ag⁺ for one Fe²⁺)",
            ],
            commonError: "Forgetting the '2' in front of Ag⁺/AgNO₃. Each silver ion is 1+, so two are needed to balance the 2+ charge on Fe²⁺.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "core",
            hints: [
              "Silver nitrate is AgNO₃ (Ag⁺ with NO₃⁻).",
              "Iron forms Fe²⁺, so you need two Ag to balance the charge.",
              "For the ionic equation, remove the spectator nitrate ions.",
            ],
            solutions: [
              {
                label: "Balancing both equations",
                steps: [
                  "Iron displaces silver (Fe is above Ag): Fe + AgNO₃ → Fe(NO₃)₂ + Ag.",
                  "Iron is 2+ so it needs 2 NO₃⁻: balance with 2AgNO₃ and 2Ag.",
                  "Full equation: Fe + 2AgNO₃ → Fe(NO₃)₂ + 2Ag.",
                  "Remove spectator NO₃⁻: Fe + 2Ag⁺ → Fe²⁺ + 2Ag. Charges: left +2, right +2. Balanced.",
                ],
              },
            ],
          },
          {
            id: "chem-metals-bq2-10",
            question: "Explain the link between a metal's position in the reactivity series and the method used to extract it. Refer to carbon in your answer. [3]",
            marks: 3,
            modelAnswer:
              "Carbon is placed in the reactivity series as a reference point. A metal that is BELOW carbon (e.g. zinc, iron, copper) is less reactive than carbon, so carbon can reduce its oxide and the metal is extracted by reduction with carbon. A metal that is ABOVE carbon (e.g. aluminium, magnesium, sodium) is too reactive — its oxide is too stable for carbon to reduce — so it must be extracted by electrolysis of its molten compound.",
            markScheme: [
              "Carbon used as a reference point in the series",
              "Metals below carbon → extracted by reduction with carbon",
              "Metals above carbon → extracted by electrolysis (oxide too stable for carbon)",
            ],
            commonError: "Linking the method to 'reactive vs unreactive' in general, rather than to position relative to CARBON specifically.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "core",
            hints: [
              "Carbon's position is the key dividing line.",
              "Below carbon: carbon can reduce the oxide.",
              "Above carbon: electrolysis is required.",
            ],
          },
        ],
      },

      // ── STRUCTURED PAPER 3 ── extraction, aluminium electrolysis, blast furnace
      {
        id: "chem-metals-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Extraction of aluminium by electrolysis and iron in the blast furnace.",
        questions: [
          {
            id: "chem-metals-bq3-01",
            question: "Aluminium is extracted by electrolysis of aluminium oxide. (a) Name the ore aluminium oxide is obtained from. [1] (b) Why is the aluminium oxide melted (rather than dissolved in water) for electrolysis? [2]",
            marks: 3,
            modelAnswer:
              "(a) Bauxite.\n(b) The ions in aluminium oxide must be free to move so that the compound can conduct electricity and be electrolysed. In the solid the ions are fixed, so it must be molten to let the ions move. Aluminium oxide is not used in aqueous solution because it is insoluble in water (and water would interfere with the products).",
            markScheme: [
              "(a) Bauxite",
              "(b) Ions must be free to move to conduct / carry charge",
              "(b) Must be molten (solid ions are fixed) / Al₂O₃ is insoluble in water",
            ],
            commonError: "Saying the molten state 'makes it react faster'. The real reason is that the ions become mobile and can carry charge to the electrodes.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "Electrolysis needs ions that can MOVE.",
              "Are ions free to move in a solid?",
              "Consider whether aluminium oxide dissolves in water.",
            ],
          },
          {
            id: "chem-metals-bq3-02",
            question: "Write the electrode reactions for the electrolysis of molten aluminium oxide. (a) At the cathode. [1] (b) At the anode. [1] (c) State which electrode reaction is reduction. [1]",
            marks: 3,
            modelAnswer:
              "(a) Cathode: Al³⁺ + 3e⁻ → Al.\n(b) Anode: 2O²⁻ → O₂ + 4e⁻.\n(c) The cathode reaction is reduction (aluminium ions gain electrons).",
            markScheme: [
              "(a) Al³⁺ + 3e⁻ → Al",
              "(b) 2O²⁻ → O₂ + 4e⁻",
              "(c) Cathode reaction is reduction (gain of electrons)",
            ],
            commonError: "Writing the anode reaction with electrons on the wrong side, or as O²⁻ → O₂ unbalanced. It must lose electrons: 2O²⁻ → O₂ + 4e⁻.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "Positive ions go to the (negative) cathode and gain electrons.",
              "Negative oxide ions go to the anode and lose electrons.",
              "Balance the electrons: O²⁻ → O₂ needs 4 electrons removed.",
            ],
          },
          {
            id: "chem-metals-bq3-03",
            question: "Explain fully why cryolite is added during the extraction of aluminium, and one consequence of the high temperature for the carbon anodes. [4]",
            marks: 4,
            modelAnswer:
              "Aluminium oxide has a very high melting point (about 2072 °C). Dissolving it in molten cryolite (Na₃AlF₆) lowers the melting point of the mixture to around 970 °C. This means less energy is needed to keep the electrolyte molten, lowering the cost of the process. A consequence of the high temperature is that the oxygen produced at the carbon (graphite) anodes reacts with the carbon: C + O₂ → CO₂, so the anodes gradually burn away and must be replaced regularly.",
            markScheme: [
              "Al₂O₃ has a very high melting point (~2072 °C)",
              "Cryolite lowers the melting point (to ~970 °C) / saves energy / reduces cost",
              "Oxygen at the anode reacts with the carbon anode",
              "C + O₂ → CO₂ so the anodes burn away / need replacing",
            ],
            commonError: "Saying cryolite is the source of the aluminium. Cryolite is a solvent that lowers the melting point; the aluminium comes from Al₂O₃.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "Start with the melting point of pure aluminium oxide.",
              "Explain how cryolite changes the temperature needed.",
              "Link the lower temperature to energy and cost.",
              "For the anodes, think about what oxygen does to hot carbon.",
            ],
          },
          {
            id: "chem-metals-bq3-04",
            question: "The blast furnace extracts iron from iron ore. (a) Name the three solid raw materials added at the top. [3] (b) State which gas is blown in at the bottom. [1]",
            marks: 4,
            modelAnswer:
              "(a) Iron ore (haematite, Fe₂O₃); coke (carbon, C); limestone (calcium carbonate, CaCO₃).\n(b) Hot air (which provides the oxygen).",
            markScheme: [
              "(a) Iron ore / haematite / Fe₂O₃",
              "(a) Coke / carbon / C",
              "(a) Limestone / calcium carbonate / CaCO₃",
              "(b) (Hot) air / oxygen",
            ],
            commonError: "Naming 'oxygen' as a solid raw material, or forgetting limestone. The three solids are ore, coke and limestone; air is blown in.",
            guideRef: "Extraction of Metals",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bq3-05",
            question: "Write balanced equations for the following stages in the blast furnace: (a) coke burning in the air blast [1]; (b) formation of the main reducing agent [1]; (c) reduction of iron(III) oxide [1].",
            marks: 3,
            modelAnswer:
              "(a) C + O₂ → CO₂.\n(b) CO₂ + C → 2CO.\n(c) Fe₂O₃ + 3CO → 2Fe + 3CO₂.",
            markScheme: [
              "(a) C + O₂ → CO₂",
              "(b) CO₂ + C → 2CO",
              "(c) Fe₂O₃ + 3CO → 2Fe + 3CO₂",
            ],
            commonError: "Not balancing the iron(III) oxide reduction. There must be 3CO and 3CO₂ to balance the 3 oxygens in Fe₂O₃ plus the carbons.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "First coke burns completely in oxygen.",
              "Carbon dioxide then reacts with more hot carbon to make the reducing gas.",
              "Balance Fe₂O₃ + CO → Fe + CO₂ by trying 3CO.",
            ],
            solutions: [
              {
                label: "Balancing the reduction step",
                steps: [
                  "Skeleton: Fe₂O₃ + CO → Fe + CO₂.",
                  "Balance Fe: 2 Fe on the right → 2Fe.",
                  "Fe₂O₃ has 3 oxygens to remove; each CO removes one O and becomes CO₂, so use 3CO → 3CO₂.",
                  "Final: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Check O: left 3 + 3 = 6; right 6. Balanced.",
                ],
              },
            ],
          },
          {
            id: "chem-metals-bq3-06",
            question: "Explain the role of limestone in the blast furnace, giving the two equations involved and naming the waste product. [4]",
            marks: 4,
            modelAnswer:
              "Limestone (calcium carbonate) removes acidic impurities, mainly sand (silicon dioxide, SiO₂). First the limestone is decomposed by the heat: CaCO₃ → CaO + CO₂. The calcium oxide then reacts with the silicon dioxide: CaO + SiO₂ → CaSiO₃. The waste product, calcium silicate (CaSiO₃), is called slag. The molten slag floats on top of the denser molten iron and is run off separately.",
            markScheme: [
              "Limestone removes (acidic) silica / SiO₂ impurities",
              "Decomposition: CaCO₃ → CaO + CO₂",
              "Reaction: CaO + SiO₂ → CaSiO₃",
              "Waste product named as slag / calcium silicate",
            ],
            commonError: "Saying limestone reduces the iron oxide. Limestone's job is to remove silica impurities as slag, not to reduce the ore.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "Limestone deals with impurities, not the iron itself.",
              "It first decomposes when heated to give an oxide.",
              "That oxide reacts with acidic silica.",
              "Name the product that floats off as waste.",
            ],
          },
          {
            id: "chem-metals-bq3-07",
            question: "Suggest two reasons why extracting aluminium by electrolysis is more expensive than extracting iron in the blast furnace. [4]",
            marks: 4,
            modelAnswer:
              "1. Electrolysis requires a very large amount of electrical energy to keep the electrolyte molten and to drive the decomposition; electricity is expensive. 2. The aluminium oxide must first be melted (or dissolved in cryolite) at high temperature, which uses additional energy. (Also acceptable: the carbon anodes are continually burnt away and must be replaced, adding cost; iron is extracted using cheaper coke/air, and CO does the reducing without electricity.)",
            markScheme: [
              "Electrolysis uses a lot of (expensive) electrical energy",
              "Need to melt / heat the aluminium oxide (high temperature) — extra energy",
              "Any valid second reason: anodes burn away and need replacing / iron uses cheap coke and air instead of electricity",
              "Comparison made to the cheaper blast-furnace process",
            ],
            commonError: "Vague answers like 'aluminium is harder to get'. Examiners want specific cost reasons: electrical energy, high temperatures, anode replacement.",
            guideRef: "Extraction of Metals",
            difficulty: "challenge",
            hints: [
              "Electrolysis needs a particular form of energy — what is it, and is it cheap?",
              "Think about the temperatures and melting involved.",
              "Compare with the blast furnace, which uses coke and air.",
              "Consider the carbon anodes that are consumed.",
            ],
          },
          {
            id: "chem-metals-bq3-08",
            question: "A sample of haematite contains 80% iron(III) oxide, Fe₂O₃, by mass. Calculate the maximum mass of iron that could be extracted from 200 tonnes of this haematite. (Ar: Fe = 56, O = 16) [4]",
            marks: 4,
            modelAnswer:
              "Mass of Fe₂O₃ = 80% of 200 = 0.80 × 200 = 160 tonnes. Mr of Fe₂O₃ = (2 × 56) + (3 × 16) = 112 + 48 = 160. The fraction of iron by mass in Fe₂O₃ = 112 / 160 = 0.70. Mass of iron = 0.70 × 160 = 112 tonnes.",
            markScheme: [
              "Mass of Fe₂O₃ = 0.80 × 200 = 160 tonnes",
              "Mr(Fe₂O₃) = 160 and mass of Fe in it = 112",
              "Fraction of Fe = 112/160 (= 0.70)",
              "Mass of iron = 0.70 × 160 = 112 tonnes",
            ],
            commonError: "Forgetting to take 80% first, or using Mr of Fe₂O₃ with only one Fe/one O. The mass ratio of Fe is 112/160 of the oxide present.",
            guideRef: "Extraction of Metals",
            difficulty: "challenge",
            hints: [
              "First find the mass of pure Fe₂O₃ (80% of the ore).",
              "Work out Mr of Fe₂O₃ and the mass of iron within it (2 × 56).",
              "The iron fraction is (mass of Fe) / (Mr of Fe₂O₃).",
              "Multiply that fraction by the mass of Fe₂O₃.",
            ],
            solutions: [
              {
                label: "Mass-fraction method",
                steps: [
                  "Mass of Fe₂O₃ = 80% × 200 t = 0.80 × 200 = 160 t.",
                  "Mr(Fe₂O₃) = 2(56) + 3(16) = 112 + 48 = 160.",
                  "Mass of Fe inside Fe₂O₃ = 2 × 56 = 112 (per 160 of oxide).",
                  "Fraction of Fe = 112/160 = 0.70.",
                  "Mass of iron = 0.70 × 160 t = 112 tonnes.",
                ],
              },
            ],
          },
          {
            id: "chem-metals-bq3-09",
            question: "Copper, silver and gold are sometimes found as native (uncombined) metals. Explain why, and state how this affects the energy needed to obtain them compared with aluminium. [3]",
            marks: 3,
            modelAnswer:
              "Copper, silver and gold are very low in the reactivity series, so they are unreactive and do not readily combine with oxygen or other elements. As a result they can occur naturally as the free (native) metal, or in ores that are easily reduced. This means little or no energy-intensive processing is required — far less energy than the electrolysis needed for the very reactive metal aluminium, which is high in the series and forms a very stable oxide.",
            markScheme: [
              "These metals are unreactive / low in the reactivity series",
              "So they do not readily combine / can be found native (uncombined)",
              "Need much less energy to extract than aluminium (which needs electrolysis)",
            ],
            commonError: "Thinking 'precious' metals are hard to extract. They are precious partly because they are rare, but chemically they are easy to obtain because they are unreactive.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "Where are copper, silver and gold in the reactivity series?",
              "Unreactive metals tend not to be combined in compounds.",
              "Compare the processing energy with electrolysis of aluminium.",
            ],
          },
          {
            id: "chem-metals-bq3-10",
            question: "Define the term 'native metal' and give one example. Explain why such metals do not need to be extracted by reduction or electrolysis. [3]",
            marks: 3,
            modelAnswer:
              "A native metal is a metal that is found in the Earth as the free (uncombined) element, rather than as a compound in an ore. An example is gold (also acceptable: silver, or sometimes copper). Such metals are very unreactive (low in the reactivity series), so they do not combine with oxygen or other elements to form compounds; because they are already present as the pure metal, no chemical reduction or electrolysis is needed — they only require physical separation, such as panning or simple purification.",
            markScheme: [
              "Native metal = found uncombined / as the free element",
              "Example: gold / silver / copper",
              "Unreactive so already present as the metal — only physical separation needed (no reduction/electrolysis)",
            ],
            commonError: "Confusing 'native' with 'pure ore'. Native means the element itself is found uncombined, not just a rich ore.",
            guideRef: "Extraction of Metals",
            difficulty: "warmup",
          },
        ],
      },

      // ── STRUCTURED PAPER 4 ── rusting, alloys, uses, recycling
      {
        id: "chem-metals-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Rusting and its prevention, alloys, uses of metals and recycling.",
        questions: [
          {
            id: "chem-metals-bq4-01",
            question: "(a) Name the two substances that must be present for iron to rust. [2] (b) Name the compound that rust is, and give its formula. [2]",
            marks: 4,
            modelAnswer:
              "(a) Water and oxygen (both must be present together).\n(b) Rust is hydrated iron(III) oxide; formula Fe₂O₃·xH₂O.",
            markScheme: [
              "(a) Water",
              "(a) Oxygen",
              "(b) Hydrated iron(III) oxide",
              "(b) Formula Fe₂O₃·xH₂O (allow Fe₂O₃ with water of crystallisation indicated)",
            ],
            commonError: "Including carbon dioxide or salt as a required substance. Only water and oxygen are essential; salt merely speeds up the process.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bq4-02",
            question: "Describe an experiment, using boiled water and a drying agent, that shows BOTH water and oxygen are needed for iron to rust. State the expected results. [5]",
            marks: 5,
            modelAnswer:
              "Set up three boiling tubes, each with a clean iron nail. Tube 1: nail in air with a drying agent (e.g. anhydrous calcium chloride) to remove water — air but no water. Tube 2: nail in water that has been boiled (to remove dissolved oxygen) with a layer of oil on top to keep air out — water but no oxygen. Tube 3: nail in ordinary tap water open to the air — both water and oxygen present. Leave for about a week. Result: only the nail in tube 3 rusts; the nails in tubes 1 and 2 do not rust. This shows that BOTH water and oxygen must be present for rusting to occur.",
            markScheme: [
              "Tube with drying agent — air but no water",
              "Tube with boiled water + oil layer — water but no oxygen",
              "Tube with tap water open to air — both present (control)",
              "Only the tube with both water and oxygen rusts",
              "Conclusion: both water and oxygen are needed",
            ],
            commonError: "Forgetting WHY the water is boiled (to remove dissolved oxygen) and why oil is added (to stop air re-dissolving). Both steps are needed to give 'water but no oxygen'.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "core",
            hints: [
              "You need a tube with water but no oxygen, and one with oxygen but no water.",
              "A drying agent removes water; boiling removes dissolved oxygen.",
              "An oil layer stops air dissolving back into the boiled water.",
              "The control tube has both — only it should rust.",
            ],
          },
          {
            id: "chem-metals-bq4-03",
            question: "Explain the difference between barrier protection and sacrificial protection as methods of preventing rusting. Give one example of each. [4]",
            marks: 4,
            modelAnswer:
              "Barrier protection works by physically keeping water and oxygen away from the iron, e.g. painting a bridge or oiling/greasing tools, or coating with plastic or tin. If the barrier is broken (scratched), the iron beneath can begin to rust. Sacrificial protection works by attaching a MORE reactive metal (e.g. zinc or magnesium blocks on a ship's hull). The more reactive metal is oxidised preferentially (sacrificed), so the iron is protected even if it is exposed, because the more reactive metal corrodes instead of the iron.",
            markScheme: [
              "Barrier: physically excludes water/oxygen from the iron",
              "Barrier example: painting / oiling / plastic coating / tin-plating",
              "Sacrificial: a more reactive metal corrodes preferentially / instead of iron",
              "Sacrificial example: zinc or magnesium blocks (e.g. on a ship's hull / pipeline)",
            ],
            commonError: "Saying galvanising is purely a barrier method. Galvanising (zinc coating) is BOTH a barrier and sacrificial — be careful which method is being asked about.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "core",
            hints: [
              "Barrier methods keep the air and water physically out.",
              "Sacrificial protection relies on reactivity, not a barrier.",
              "For sacrificial, the protecting metal must be MORE reactive than iron.",
              "Give a clear, specific example of each.",
            ],
          },
          {
            id: "chem-metals-bq4-04",
            question: "Galvanised steel is steel coated with zinc. Explain why galvanising still protects the steel even if the zinc layer is scratched and the steel underneath is exposed. [3]",
            marks: 3,
            modelAnswer:
              "Zinc is more reactive than iron (it is above iron in the reactivity series). So even where the steel is exposed by a scratch, the zinc is oxidised in preference to the iron — the zinc acts as a sacrificial metal. Electrons flow from the zinc to the iron, so the iron does not form ions and does not rust until all the surrounding zinc has corroded away.",
            markScheme: [
              "Zinc is more reactive than iron / above iron in the series",
              "Zinc is oxidised / corrodes preferentially (sacrificial protection)",
              "Iron is protected even when exposed / does not rust while zinc remains",
            ],
            commonError: "Saying the scratch is 'sealed' by zinc. The key point is sacrificial protection — zinc corrodes instead of iron because it is more reactive.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "core",
            hints: [
              "Compare the reactivity of zinc and iron.",
              "Which metal will be oxidised first when both are exposed?",
              "Explain why the iron is spared while zinc remains.",
            ],
          },
          {
            id: "chem-metals-bq4-05",
            question: "(a) What is an alloy? [1] (b) Explain, in terms of the arrangement of atoms, why an alloy is harder than the pure metal. [3]",
            marks: 4,
            modelAnswer:
              "(a) An alloy is a mixture of a metal with one or more other elements (metals or non-metals).\n(b) In a pure metal, all the atoms (ions) are the same size and are arranged in regular layers that can slide over one another easily, so the metal is soft. In an alloy, atoms of a different size are present; these distort the regular layers and stop them from sliding over each other. More force is therefore needed to deform the metal, so the alloy is harder and stronger.",
            markScheme: [
              "(a) A mixture of a metal with one or more other elements",
              "(b) Pure metal has same-sized atoms in layers that slide easily (soft)",
              "(b) Different-sized atoms in the alloy distort the layers",
              "(b) Layers can no longer slide easily, so the alloy is harder",
            ],
            commonError: "Saying alloys are harder 'because they are mixtures' without the atomic explanation. The marks are for the disruption of layer-sliding by different-sized atoms.",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "core",
            hints: [
              "Define an alloy as a mixture, not a compound.",
              "Describe how a pure metal's layers slide (why it is soft).",
              "Explain what different-sized atoms do to those layers.",
              "Link the blocked sliding to greater hardness.",
            ],
          },
          {
            id: "chem-metals-bq4-06",
            question: "Name the main components of each of the following alloys and give one use of each: (a) steel, (b) brass. [4]",
            marks: 4,
            modelAnswer:
              "(a) Steel = iron + carbon (a small percentage of carbon). Use: construction / buildings / bridges / car bodies / tools. \n(b) Brass = copper + zinc. Use: musical instruments / taps / electrical fittings / decorative items.",
            markScheme: [
              "(a) Steel = iron + carbon",
              "(a) Valid use of steel (construction / car bodies / tools)",
              "(b) Brass = copper + zinc",
              "(b) Valid use of brass (instruments / taps / fittings)",
            ],
            commonError: "Confusing brass (Cu + Zn) with bronze (Cu + Sn), or stating steel is iron + chromium (that is stainless steel).",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bq4-07",
            question: "Aluminium and copper are both used in everyday life because of their properties. (a) Give one use of aluminium and the property that makes it suitable. [2] (b) Give one use of copper and the property that makes it suitable. [2]",
            marks: 4,
            modelAnswer:
              "(a) Aluminium: used for aircraft bodies because of its low density (lightweight) — or drink cans / overhead cables (low density and good conductor) / window frames (corrosion resistant). \n(b) Copper: used for electrical wiring because it is an excellent electrical conductor — or saucepan bases (good thermal conductor) / water pipes (malleable and does not react with water).",
            markScheme: [
              "(a) Use of aluminium stated",
              "(a) Property correctly linked (low density / corrosion resistant / good conductor)",
              "(b) Use of copper stated",
              "(b) Property correctly linked (good electrical / thermal conductor / malleable / unreactive with water)",
            ],
            commonError: "Giving the use without the matching property, or matching the wrong property (e.g. saying aluminium is used because it is a good conductor for aircraft — there it is the low density).",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bq4-08",
            question: "Discuss the benefits of recycling metals such as aluminium and steel. Refer to energy, raw materials and the environment in your answer. [5]",
            marks: 5,
            modelAnswer:
              "Recycling metals uses much less energy than extracting them from ore — recycling aluminium uses only about 5% of the energy of electrolysis — which lowers costs and reduces the burning of fossil fuels. It conserves finite ore reserves (e.g. bauxite, iron ore), so these limited raw materials last longer. Environmentally, recycling reduces carbon dioxide emissions (less energy and less ore processing), reduces the amount of metal waste sent to landfill, and reduces the damage caused by mining and quarrying. Steel is easily separated from other waste using magnets, making it especially practical to recycle.",
            markScheme: [
              "Recycling uses much less energy (aluminium ~5% of extraction energy)",
              "Conserves finite ore / raw-material reserves",
              "Reduces CO₂ emissions / fossil-fuel use",
              "Reduces landfill waste / mining and quarrying damage",
              "Any further valid point (e.g. steel separated by magnets / lower cost)",
            ],
            commonError: "Giving only one benefit (usually 'saves energy'). The question asks for energy, raw materials AND environment — cover all three areas.",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "challenge",
            hints: [
              "Compare the energy of recycling with extraction (quote the ~5% figure for aluminium).",
              "Think about the finite nature of ore reserves.",
              "List environmental benefits: emissions, landfill, mining damage.",
              "Add a practical point, such as separating steel with magnets.",
            ],
          },
          {
            id: "chem-metals-bq4-09",
            question: "Stainless steel and ordinary steel are both alloys of iron. (a) State the additional elements in stainless steel. [1] (b) Explain why stainless steel is chosen for cutlery, while ordinary steel is used for car bodies. [3]",
            marks: 4,
            modelAnswer:
              "(a) Chromium and nickel.\n(b) Stainless steel contains chromium (and nickel), which makes it resistant to corrosion so it does not rust — important for cutlery that is washed repeatedly and must stay clean and hygienic. Ordinary steel rusts more easily but is cheaper and very strong, so it is used for car bodies where cost and strength matter and the surface can be protected by painting. Using stainless steel for a whole car body would be far too expensive.",
            markScheme: [
              "(a) Chromium and nickel",
              "(b) Stainless steel resists corrosion / does not rust — suits cutlery (washed, hygienic)",
              "(b) Ordinary steel is cheaper / stronger",
              "(b) Car bodies can be painted / cost matters, so ordinary steel is used",
            ],
            commonError: "Just saying 'stainless steel is better'. The answer must compare corrosion resistance with cost/strength to justify each choice.",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "core",
            hints: [
              "Recall the extra elements that make steel 'stainless'.",
              "Link corrosion resistance to why cutlery needs it.",
              "Think about cost and strength for car bodies.",
              "Explain why we don't simply use stainless steel for everything.",
            ],
          },
          {
            id: "chem-metals-bq4-10",
            question: "The overall reaction for rusting can be written 4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O. (a) State the oxidation taking place at the iron in terms of electrons. [2] (b) Suggest why salty/sea water makes iron rust faster, even though salt is not a reactant. [2]",
            marks: 4,
            modelAnswer:
              "(a) Iron atoms are oxidised by losing electrons: Fe → Fe²⁺ + 2e⁻ (each iron atom loses two electrons to form an iron(II) ion). \n(b) Dissolved salt makes the water a better electrical conductor (a stronger electrolyte). Rusting is an electrochemical process involving the flow of ions and electrons, so improving the conductivity of the water speeds up the electron transfer and therefore the rate of rusting, even though the salt itself is not used up.",
            markScheme: [
              "(a) Fe → Fe²⁺ + 2e⁻ / iron loses electrons",
              "(a) Oxidation = loss of electrons (allow this for the second mark)",
              "(b) Salt water is a better conductor / stronger electrolyte",
              "(b) Rusting is electrochemical, so faster ion/electron flow speeds it up",
            ],
            commonError: "Thinking salt is a reactant in rusting. Salt is not consumed; it simply increases the conductivity of the water (electrolyte effect), accelerating the electrochemical process.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "challenge",
            hints: [
              "Write the half-equation for iron being oxidised.",
              "Oxidation is loss of electrons — show this for iron.",
              "Rusting involves moving ions and electrons (electrochemistry).",
              "How does dissolved salt change the conductivity of water?",
            ],
          },
        ],
      },
    ],
  },
};
