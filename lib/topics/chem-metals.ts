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

**Reactions with cold water and steam:**
- K, Na, Ca react vigorously with cold water: e.g. 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)
- Mg reacts slowly with cold water but vigorously with steam: Mg(s) + H₂O(g) → MgO(s) + H₂(g)
- Zn and Fe react only with steam (not cold water): e.g. 3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)
- Cu, Ag, Au do not react with water or steam.

**Reactions with dilute acids (e.g. dilute H₂SO₄ or HCl):**
- Metals above hydrogen in the series displace hydrogen gas from dilute acids.
- e.g. Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)
- Metals below hydrogen (Cu, Ag, Au) do NOT react with dilute acids.
- K and Na react too violently (dangerously) to be safely tested with dilute acids.

**Reactions with oxygen:**
- Most metals react with oxygen on heating to form metal oxides: e.g. 4Fe(s) + 3O₂(g) → 2Fe₂O₃(s) (slow, rust); 2Mg(s) + O₂(g) → 2MgO(s) (bright flame)
- Gold and platinum do not tarnish because they do not react with oxygen.

The more reactive the metal, the more vigorously it reacts and the more stable its compounds are.`,
      keyPoints: [
        "Order (most reactive first): K, Na, Ca, Mg, Al, (C), Zn, Fe, (H), Cu, Ag, Au.",
        "K, Na, Ca react with cold water; Mg with steam; Zn and Fe with steam only.",
        "Metals above H in the series displace H₂ from dilute acids; metals below H do not react with dilute acids.",
        "Most metals form oxides on heating; gold and platinum are unreactive with oxygen.",
        "Reactivity can be deduced from observations: rate of reaction, vigour of fizzing, temperature change.",
      ],
      discovery: {
        problem:
          "Three unknown metals X, Y and Z are tested: X fizzes slowly in dilute HCl; Y does not react with dilute HCl but burns brightly in oxygen; Z reacts vigorously with cold water. Using only these observations, arrange X, Y, Z in order of decreasing reactivity and suggest which known metals they might be.",
        idea:
          "Z must be above Ca in the series (reacts with cold water) — possibly Na or K. X reacts with acid but not water — positioned between Mg and H, likely Zn or Fe. Y does not react with acid but burns in oxygen — this is a contradiction unless Y is a non-metal (like Mg burning very brightly is actually very reactive) — re-read: Y does not react with dilute HCl, suggesting Y is below H, e.g. copper. But copper does not burn brightly in oxygen... So Y could be Mg which burns brilliantly in oxygen AND reacts with steam (not cold water). Order: Z (most reactive) > X > Y (least), mapping to ~ Na > Fe > Cu (adjusting for the clue about oxygen).",
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
Zn → Zn²⁺ + 2e⁻ (oxidation)
Cu²⁺ + 2e⁻ → Cu (reduction)
The more reactive metal is the better reducing agent — it more readily loses electrons to reduce the metal ion in solution.

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
      "K, Na, Ca react with cold water; Mg reacts with steam but not cold water.",
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
      {
        id: "chem-metals-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Physical properties, reactivity series, reactions with water, acids and oxygen.",
        questions: [
          {
            id: "chem-metals-bm1-01",
            question: "Which property of metals is a direct result of the layers of ions being able to slide over one another?",
            options: ["High density", "Malleability", "Sonority", "High melting point"],
            answerIndex: 1,
            explanation: "Malleability (and ductility) arise because layers of metal ions can slide over each other without breaking the metallic bonds — the delocalised electron sea adapts to the new positions.",
            guideRef: "Physical Properties of Metals",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bm1-02",
            question: "Which is the only common metal that is a liquid at room temperature?",
            options: ["Sodium", "Mercury", "Gallium", "Lead"],
            answerIndex: 1,
            explanation: "Mercury is exceptional — it is a liquid metal at room temperature. Sodium and lead are solids; gallium melts only slightly above room temperature but is solid at 25 °C.",
            guideRef: "Physical Properties of Metals",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bm1-03",
            question: "Which set of metals will all react with cold water?",
            options: ["Magnesium, zinc, iron", "Potassium, sodium, calcium", "Copper, silver, gold", "Aluminium, zinc, copper"],
            answerIndex: 1,
            explanation: "Only metals high in the reactivity series — potassium, sodium and calcium — react with cold water. Magnesium reacts only with steam, and Zn/Fe with steam only; Cu/Ag/Au do not react with water at all.",
            guideRef: "The Reactivity Series",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bm1-04",
            question: "Why does copper NOT react with dilute hydrochloric acid?",
            options: [
              "Copper is above hydrogen in the reactivity series.",
              "Copper is below hydrogen in the reactivity series.",
              "Copper forms a protective oxide layer instantly.",
              "Copper is a transition metal.",
            ],
            answerIndex: 1,
            explanation: "Only metals above hydrogen in the reactivity series can displace hydrogen from a dilute acid. Copper is below hydrogen, so it cannot displace H₂ and does not react with dilute HCl.",
            guideRef: "The Reactivity Series",
            difficulty: "core",
            hints: [
              "A metal reacts with dilute acid only if it can displace hydrogen from it.",
              "Compare the position of copper with hydrogen in the reactivity series.",
              "Metals below hydrogen cannot push hydrogen out of an acid.",
            ],
          },
          {
            id: "chem-metals-bm1-05",
            question: "Magnesium burns in oxygen with a bright white flame. Which equation correctly represents this reaction?",
            options: [
              "Mg(s) + O₂(g) → MgO₂(s)",
              "2Mg(s) + O₂(g) → 2MgO(s)",
              "Mg(s) + O(g) → MgO(s)",
              "4Mg(s) + 3O₂(g) → 2Mg₂O₃(s)",
            ],
            answerIndex: 1,
            explanation: "Magnesium forms the oxide MgO (Mg²⁺ and O²⁻). Balancing gives 2Mg + O₂ → 2MgO. MgO₂ and Mg₂O₃ are not the correct formulae for magnesium oxide.",
            guideRef: "The Reactivity Series",
            difficulty: "core",
            hints: [
              "Magnesium forms Mg²⁺ ions and oxygen forms O²⁻ ions — what is the formula of the oxide?",
              "Once the formula MgO is fixed, balance the oxygen atoms.",
              "O₂ has two oxygen atoms, so two MgO are needed on the right.",
            ],
          },
          {
            id: "chem-metals-bm1-06",
            question: "A student measures the rate of hydrogen gas produced when equal masses of three metals react with excess dilute sulfuric acid. The volumes of gas after 30 seconds are: metal P = 5 cm³, metal Q = 42 cm³, metal R = 18 cm³. Which order of reactivity (most to least) do the data suggest?",
            options: ["P > Q > R", "Q > R > P", "R > Q > P", "Q > P > R"],
            answerIndex: 1,
            explanation: "A faster rate of hydrogen production indicates a more reactive metal. Q gives the most gas (fastest), then R, then P (slowest). Order: Q > R > P.",
            guideRef: "The Reactivity Series",
            difficulty: "core",
            hints: [
              "The faster a metal produces hydrogen, the more reactive it is.",
              "Rank the gas volumes from largest to smallest.",
              "Largest volume in the fixed time = most reactive metal.",
            ],
            strategy: "Use rate of gas production as a measurable proxy for reactivity",
          },
          {
            id: "chem-metals-bm1-07",
            question: "Which statement best explains why metals conduct electricity?",
            options: [
              "Positive ions move through the lattice carrying charge.",
              "Delocalised electrons are free to move through the lattice carrying charge.",
              "Covalent bonds allow electrons to be shared between atoms.",
              "Metals contain mobile protons.",
            ],
            answerIndex: 1,
            explanation: "Electrical conductivity in metals is due to the 'sea' of delocalised electrons that can move freely through the lattice, carrying charge. The positive ions stay fixed in position; protons never move.",
            guideRef: "Physical Properties of Metals",
            difficulty: "core",
            hints: [
              "What particles in a metal are free to move?",
              "The positive ions are fixed in the lattice — so what carries the current?",
              "Think about the 'electron sea' model of metallic bonding.",
            ],
          },
          {
            id: "chem-metals-bm1-08",
            question: "Three unknown metals give these results: metal J reacts with cold water; metal K reacts with steam but not cold water; metal L reacts with neither water nor steam but does react with dilute acid. What is the order of decreasing reactivity?",
            options: ["L > K > J", "J > K > L", "K > J > L", "J > L > K"],
            answerIndex: 1,
            explanation: "J reacts with cold water → very reactive (above Ca). K reacts with steam only → less reactive than J (e.g. Mg/Zn region). L reacts only with dilute acid (not water or steam) → least reactive of the three but still above hydrogen. Order: J > K > L.",
            guideRef: "The Reactivity Series",
            difficulty: "challenge",
            hints: [
              "Reacting with cold water places a metal at the very top.",
              "Reacting with steam but not cold water places a metal in the middle.",
              "Reacting only with dilute acid (not water) places a metal lower still, but above hydrogen.",
              "Rank from the metal that reacts under the mildest conditions down to the one needing the harshest.",
            ],
            strategy: "Harsher conditions needed to react = lower reactivity",
          },
          {
            id: "chem-metals-bm1-09",
            question: "Aluminium is high in the reactivity series, yet aluminium drink cans appear unreactive. Which statement best explains this?",
            options: [
              "Aluminium is actually below copper in the reactivity series.",
              "A thin, dense layer of Al₂O₃ forms on the surface and protects the metal underneath.",
              "Aluminium does not react with oxygen at all.",
              "The cans are made from an alloy that contains no aluminium.",
            ],
            answerIndex: 1,
            explanation: "Aluminium reacts rapidly with oxygen to form a thin, dense, adherent layer of Al₂O₃. This passivation layer is impermeable and protects the metal beneath from further attack, so aluminium appears unreactive in everyday use despite its high position in the series.",
            guideRef: "The Reactivity Series",
            difficulty: "challenge",
            hints: [
              "Aluminium really is reactive — so what stops everyday aluminium from corroding?",
              "Think about the oxide that forms on the surface of aluminium.",
              "Compare the aluminium oxide layer with flaky rust — one protects, one does not.",
            ],
            strategy: "Distinguish position in the series from observed everyday reactivity (passivation)",
          },
          {
            id: "chem-metals-bm1-10",
            question: "When 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g) occurs, which observation is NOT expected?",
            options: [
              "The sodium floats and moves around on the surface.",
              "A gas is produced that the universal indicator turns purple.",
              "The resulting solution turns universal indicator purple/blue.",
              "Fizzing as a gas is released.",
            ],
            answerIndex: 1,
            explanation: "The gas released is hydrogen, which is neutral and would not turn indicator purple. The solution (NaOH) is alkaline and does turn indicator purple/blue. Sodium floats and moves; fizzing occurs as hydrogen is released.",
            guideRef: "The Reactivity Series",
            difficulty: "challenge",
            hints: [
              "Identify which gas is released in this reaction.",
              "Is hydrogen gas acidic, neutral or alkaline?",
              "The alkaline product is the dissolved NaOH, not the gas.",
            ],
            strategy: "Separate the properties of the gas produced from the properties of the solution formed",
          },
        ],
      },
      {
        id: "chem-metals-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Displacement reactions, redox, and links to extraction.",
        questions: [
          {
            id: "chem-metals-bm2-01",
            question: "Which equation shows a reaction that will actually occur?",
            options: [
              "Cu(s) + MgSO₄(aq) → CuSO₄(aq) + Mg(s)",
              "Zn(s) + FeSO₄(aq) → ZnSO₄(aq) + Fe(s)",
              "Ag(s) + Cu(NO₃)₂(aq) → AgNO₃(aq) + Cu(s)",
              "Fe(s) + MgCl₂(aq) → FeCl₂(aq) + Mg(s)",
            ],
            answerIndex: 1,
            explanation: "A displacement reaction occurs only when the added metal is MORE reactive than the metal in the salt. Zinc is above iron, so Zn displaces Fe. In the other options the added metal is less reactive than the one in solution, so no reaction occurs.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bm2-02",
            question: "In the reaction Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s), which colour change is observed?",
            options: [
              "Colourless solution turns blue",
              "Blue solution fades/decolourises",
              "Green solution turns blue",
              "Blue solution turns green",
            ],
            answerIndex: 1,
            explanation: "Blue colour is due to Cu²⁺(aq) ions. As zinc displaces copper, Cu²⁺ ions are removed from solution and a reddish-brown copper deposit forms, so the blue colour fades.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bm2-03",
            question: "In a displacement reaction, the more reactive metal is described as the:",
            options: ["oxidising agent", "reducing agent", "catalyst", "electrolyte"],
            answerIndex: 1,
            explanation: "The more reactive metal loses electrons (is oxidised) and donates them to the less reactive metal ion, reducing it. A species that causes reduction by donating electrons is a reducing agent.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "core",
            hints: [
              "The more reactive metal loses electrons — it is oxidised.",
              "A species that gives away electrons causes another to be reduced.",
              "The agent that brings about reduction is the reducing agent.",
            ],
          },
          {
            id: "chem-metals-bm2-04",
            question: "In the half-equation Cu²⁺ + 2e⁻ → Cu, the copper ion is:",
            options: ["oxidised because it loses electrons", "reduced because it gains electrons", "oxidised because it gains electrons", "reduced because it loses electrons"],
            answerIndex: 1,
            explanation: "The Cu²⁺ ion gains two electrons to become a neutral Cu atom. Gain of electrons is reduction (OIL RIG: Reduction Is Gain of electrons).",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "core",
            hints: [
              "Count the electrons on the left of the half-equation.",
              "Is the species gaining or losing electrons?",
              "Use OIL RIG: Reduction Is Gain of electrons.",
            ],
          },
          {
            id: "chem-metals-bm2-05",
            question: "The thermite reaction is 2Al + Fe₂O₃ → Al₂O₃ + 2Fe. What does this reaction demonstrate about aluminium and iron?",
            options: [
              "Iron is more reactive than aluminium.",
              "Aluminium is more reactive than iron, so it displaces iron from its oxide.",
              "Aluminium and iron have equal reactivity.",
              "Iron is a stronger reducing agent than aluminium.",
            ],
            answerIndex: 1,
            explanation: "Aluminium displaces iron from iron(III) oxide, which shows aluminium is more reactive than iron. Aluminium is oxidised (the reducing agent) and Fe³⁺ is reduced to iron, releasing a large amount of heat.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "core",
            hints: [
              "Which element ends up combined with oxygen?",
              "The metal that takes the oxygen is the more reactive one.",
              "Aluminium has displaced iron from its oxide — what does that tell you?",
            ],
          },
          {
            id: "chem-metals-bm2-06",
            question: "Carbon is included in the reactivity series. Which metal oxide can be reduced by heating with carbon?",
            options: ["Aluminium oxide", "Magnesium oxide", "Zinc oxide", "Calcium oxide"],
            answerIndex: 2,
            explanation: "Carbon can reduce the oxides of metals BELOW it in the series. Zinc is below carbon, so ZnO can be reduced by carbon. Al, Mg and Ca are all above carbon, so their oxides are too stable for carbon to reduce.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "core",
            hints: [
              "Carbon can only reduce oxides of metals below it in the series.",
              "Locate carbon in the reactivity series.",
              "Which of these metals is positioned below carbon?",
            ],
          },
          {
            id: "chem-metals-bm2-07",
            question: "Iron is added to copper(II) sulfate solution and, separately, copper is added to iron(II) sulfate solution. What is observed?",
            options: [
              "Both mixtures react.",
              "Only the iron in copper sulfate reacts; copper in iron sulfate does not.",
              "Only the copper in iron sulfate reacts.",
              "Neither mixture reacts.",
            ],
            answerIndex: 1,
            explanation: "Iron is above copper, so Fe displaces Cu from CuSO₄ (reaction occurs: blue fades, copper deposits). Copper is below iron, so copper cannot displace iron from FeSO₄ — no reaction.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "core",
            hints: [
              "A reaction needs the added metal to be more reactive than the one in solution.",
              "Iron vs copper: which is higher in the series?",
              "Reverse the roles for the second experiment — does it still work?",
            ],
          },
          {
            id: "chem-metals-bm2-08",
            question: "A metal M displaces silver from silver nitrate solution but does NOT displace copper from copper(II) sulfate solution. Where does M lie in the reactivity series?",
            options: [
              "Above copper",
              "Between copper and silver",
              "Below silver",
              "Above iron",
            ],
            answerIndex: 1,
            explanation: "M displaces silver, so M is more reactive than silver (M > Ag). M does not displace copper, so M is less reactive than copper (Cu > M). Therefore M lies between copper and silver: Cu > M > Ag.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "challenge",
            hints: [
              "Displacing silver means M is more reactive than silver.",
              "Failing to displace copper means M is less reactive than copper.",
              "Combine both clues to bracket M's position.",
              "Order: Cu > M > Ag.",
            ],
            strategy: "Use each displacement result as an inequality, then combine them",
          },
          {
            id: "chem-metals-bm2-09",
            question: "Which overall ionic equation correctly represents the displacement of copper by magnesium?",
            options: [
              "Mg²⁺ + Cu → Mg + Cu²⁺",
              "Mg + Cu²⁺ → Mg²⁺ + Cu",
              "Mg + Cu → Mg²⁺ + Cu²⁺",
              "Mg²⁺ + Cu²⁺ → Mg + Cu",
            ],
            answerIndex: 1,
            explanation: "Magnesium (more reactive) is oxidised to Mg²⁺ while Cu²⁺ is reduced to Cu: Mg + Cu²⁺ → Mg²⁺ + Cu. The sulfate ions are spectators and are omitted from the ionic equation.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "challenge",
            hints: [
              "The more reactive metal (Mg) starts as the atom and ends as the ion.",
              "The less reactive metal (Cu) starts as the ion and ends as the atom.",
              "Spectator ions (SO₄²⁻) are left out of an ionic equation.",
            ],
            strategy: "Write what is oxidised and what is reduced, then combine and cancel spectators",
          },
          {
            id: "chem-metals-bm2-10",
            question: "Why are both carbon and hydrogen included in the reactivity series even though they are non-metals?",
            options: [
              "They are metals in disguise.",
              "They act as reference points because they can behave as reducing agents in extraction.",
              "They react with all metals.",
              "They are the most reactive elements known.",
            ],
            answerIndex: 1,
            explanation: "Carbon and hydrogen are included as reference points because they can also act as reducing agents. A metal below carbon can be extracted by reduction with carbon; a metal below hydrogen can be reduced by hydrogen. Their positions decide which extraction method is viable.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "challenge",
            hints: [
              "Think about what carbon does in the blast furnace.",
              "Both can remove oxygen from some metal oxides — what is that role called?",
              "Their position tells you which metals they can or cannot reduce.",
            ],
            strategy: "Link the reference points to the choice of extraction method",
          },
        ],
      },
      {
        id: "chem-metals-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Extraction of metals: blast furnace, electrolysis of aluminium, and choice of method.",
        questions: [
          {
            id: "chem-metals-bm3-01",
            question: "Which method is used to extract aluminium from its ore?",
            options: ["Reduction with carbon", "Electrolysis of the molten oxide", "Heating in air", "Displacement with iron"],
            answerIndex: 1,
            explanation: "Aluminium is above carbon in the reactivity series, so its oxide is too stable for carbon to reduce. Aluminium is extracted by electrolysis of molten aluminium oxide (dissolved in cryolite).",
            guideRef: "Extraction of Metals",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bm3-02",
            question: "What is the main reducing agent that converts iron(III) oxide to iron in the blast furnace?",
            options: ["Carbon", "Carbon monoxide", "Oxygen", "Limestone"],
            answerIndex: 1,
            explanation: "Although coke (carbon) is added, the main reducing agent is carbon monoxide: Fe₂O₃ + 3CO → 2Fe + 3CO₂. The CO is formed when CO₂ rises through the hot coke (CO₂ + C → 2CO).",
            guideRef: "Extraction of Metals",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bm3-03",
            question: "Which ore is the main source of iron?",
            options: ["Bauxite", "Haematite", "Cryolite", "Malachite"],
            answerIndex: 1,
            explanation: "Haematite is mainly Fe₂O₃ and is the principal iron ore. Bauxite (Al₂O₃) is the aluminium ore; cryolite is added during aluminium extraction; malachite is a copper ore.",
            guideRef: "Extraction of Metals",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bm3-04",
            question: "What is the role of limestone (CaCO₃) in the blast furnace?",
            options: [
              "It reduces the iron oxide to iron.",
              "It decomposes to CaO, which removes acidic silica impurities as slag.",
              "It increases the temperature of the furnace.",
              "It provides the carbon monoxide.",
            ],
            answerIndex: 1,
            explanation: "Limestone decomposes (CaCO₃ → CaO + CO₂). The CaO then reacts with acidic silica (sand) impurities: CaO + SiO₂ → CaSiO₃ (slag), which is removed. It is not the reducing agent.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "Limestone is not the reducing agent — that is carbon monoxide.",
              "What does limestone decompose into when heated?",
              "The calcium oxide reacts with the sandy (silica) impurity to form slag.",
            ],
          },
          {
            id: "chem-metals-bm3-05",
            question: "At which electrode and by which process is aluminium formed during electrolysis?",
            options: [
              "Anode, by oxidation",
              "Cathode, by reduction",
              "Anode, by reduction",
              "Cathode, by oxidation",
            ],
            answerIndex: 1,
            explanation: "Aluminium is formed at the cathode by reduction: Al³⁺ + 3e⁻ → Al. Reduction is gain of electrons and always occurs at the cathode (negative electrode).",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "Metal cations are positive — which electrode attracts them?",
              "Gaining electrons is reduction.",
              "Reduction always happens at the cathode.",
            ],
          },
          {
            id: "chem-metals-bm3-06",
            question: "Why does electrolysis of MOLTEN aluminium oxide produce aluminium, whereas electrolysis of an aqueous solution would not?",
            options: [
              "Aluminium oxide is insoluble in water.",
              "In aqueous solution, hydrogen is discharged at the cathode in preference to aluminium.",
              "Water conducts electricity better than molten oxide.",
              "Aluminium oxide reacts violently with water.",
            ],
            answerIndex: 1,
            explanation: "Aluminium is so reactive that, in aqueous solution, H⁺ is discharged at the cathode in preference to Al³⁺ (hydrogen is easier to reduce). Only in the molten state, where the only cation is Al³⁺, is aluminium metal produced.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "In water there is another positive ion competing at the cathode.",
              "Which ion is easier to reduce — Al³⁺ or H⁺?",
              "If hydrogen is discharged instead, you cannot get aluminium metal.",
            ],
          },
          {
            id: "chem-metals-bm3-07",
            question: "Roughly how much energy does recycling aluminium use compared with extracting it from bauxite by electrolysis?",
            options: ["About the same", "About 50%", "About 5%", "About 150%"],
            answerIndex: 2,
            explanation: "Recycling aluminium uses only about 5% of the energy needed to extract it by electrolysis (saving about 95%). This is because electrolysis is extremely energy-intensive, whereas recycling only requires melting.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "Electrolysis of aluminium is extremely energy intensive.",
              "Recycling only requires melting the metal, not splitting the oxide.",
              "The saving is dramatic — around 95%.",
            ],
          },
          {
            id: "chem-metals-bm3-08",
            question: "In the blast furnace, two reactions involving carbon occur near the bottom: C + O₂ → CO₂ and then CO₂ + C → 2CO. Why is the second reaction important?",
            options: [
              "It cools the furnace.",
              "It generates carbon monoxide, the main reducing agent for the ore.",
              "It removes silica impurities.",
              "It produces the slag.",
            ],
            answerIndex: 1,
            explanation: "The second reaction (CO₂ + C → 2CO) generates carbon monoxide as CO₂ rises through the hot coke. CO is the main reducing agent: Fe₂O₃ + 3CO → 2Fe + 3CO₂.",
            guideRef: "Extraction of Metals",
            difficulty: "challenge",
            hints: [
              "Identify the product of the second reaction.",
              "Which substance actually reduces the iron ore?",
              "Carbon monoxide is regenerated to keep reducing the ore.",
            ],
            strategy: "Track how each carbon reaction feeds into reducing the ore",
          },
          {
            id: "chem-metals-bm3-09",
            question: "A factory reduces 800 tonnes of pure Fe₂O₃ in a blast furnace. Assuming complete reaction, what mass of iron is produced? (Ar: Fe = 56, O = 16)",
            options: ["448 tonnes", "560 tonnes", "640 tonnes", "800 tonnes"],
            answerIndex: 1,
            explanation: "Mr(Fe₂O₃) = (2×56) + (3×16) = 160. Fraction that is iron = 112/160 = 0.70. Mass of Fe = 0.70 × 800 = 560 tonnes.",
            guideRef: "Extraction of Metals",
            difficulty: "challenge",
            hints: [
              "Work out the relative formula mass of Fe₂O₃.",
              "Find the mass fraction of iron: (2×56) ÷ Mr.",
              "Multiply that fraction by the mass of ore.",
              "112/160 = 0.70, so 0.70 × 800 = ?",
            ],
            strategy: "Use the mass fraction of the element in the compound, scaling tonnes directly",
          },
          {
            id: "chem-metals-bm3-10",
            question: "Copper, silver and gold are sometimes found as native (uncombined) elements. What does this tell you about their extraction?",
            options: [
              "They must always be extracted by electrolysis.",
              "They are very unreactive, so little or no chemical reduction is needed.",
              "They are above carbon in the reactivity series.",
              "They cannot be extracted at all.",
            ],
            answerIndex: 1,
            explanation: "Being found native shows these metals are very unreactive — they do not readily combine with other elements. As a result they need little or no reduction; gold can simply be physically separated, and copper ores require only modest processing.",
            guideRef: "Extraction of Metals",
            difficulty: "challenge",
            hints: [
              "If a metal is found uncombined, how reactive must it be?",
              "Unreactive metals form unstable compounds that are easily reduced.",
              "Less reactive = less energy required to extract.",
            ],
            strategy: "Link native occurrence to low reactivity and easy extraction",
          },
        ],
      },
      {
        id: "chem-metals-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Rusting and its prevention, alloys, properties and uses of metals, recycling.",
        questions: [
          {
            id: "chem-metals-bm4-01",
            question: "Rust is best described as:",
            options: ["iron(II) oxide", "hydrated iron(III) oxide", "iron(III) carbonate", "iron hydroxide only"],
            answerIndex: 1,
            explanation: "Rust is hydrated iron(III) oxide, Fe₂O₃·xH₂O. It forms when iron is exposed to both water and oxygen, and is flaky and non-protective.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bm4-02",
            question: "An alloy is best defined as:",
            options: [
              "a compound of two metals",
              "a mixture of a metal with one or more other elements",
              "a pure metal with no impurities",
              "a non-metal dissolved in a metal salt",
            ],
            answerIndex: 1,
            explanation: "An alloy is a mixture (not a compound) of a metal with one or more other elements. Because it is a mixture, its composition can vary.",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bm4-03",
            question: "Which alloy is correctly matched with its components?",
            options: ["Brass = copper + tin", "Bronze = copper + zinc", "Steel = iron + carbon", "Stainless steel = iron + carbon only"],
            answerIndex: 2,
            explanation: "Steel = iron + carbon. Brass = copper + zinc; bronze = copper + tin; stainless steel = iron + chromium + nickel (plus carbon). Only the steel pairing is correct here.",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bm4-04",
            question: "Galvanising protects iron from rusting in two ways. What are they?",
            options: [
              "A barrier of paint and sacrificial protection by tin",
              "A barrier of zinc and sacrificial protection by zinc",
              "A barrier of zinc and sacrificial protection by tin",
              "A barrier of tin and sacrificial protection by tin",
            ],
            answerIndex: 1,
            explanation: "Galvanising coats iron with zinc. The zinc layer is a physical barrier, AND because zinc is above iron in the reactivity series it provides sacrificial protection even if the coating is scratched.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "core",
            hints: [
              "Galvanising uses one specific metal coating — which one?",
              "The coating physically excludes air and water (barrier).",
              "Because that metal is more reactive than iron, what else does it provide?",
            ],
          },
          {
            id: "chem-metals-bm4-05",
            question: "Tin-plating is used inside steel food cans, but tin gives a different kind of protection from zinc. Which statement is correct?",
            options: [
              "Tin is more reactive than iron, so it gives sacrificial protection.",
              "Tin is less reactive than iron, so if the layer is scratched the iron rusts faster.",
              "Tin and iron have equal reactivity.",
              "Tin reacts with the food to form a protective layer.",
            ],
            answerIndex: 1,
            explanation: "Tin is below iron in the reactivity series. It acts only as a barrier. If the tin layer is scratched and iron is exposed, iron becomes the more reactive metal in contact and actually rusts faster — unlike galvanising with zinc.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "core",
            hints: [
              "Compare the reactivity of tin and iron.",
              "Sacrificial protection needs the coating to be MORE reactive than iron.",
              "If the more reactive metal of the pair is iron, what happens when the layer is scratched?",
            ],
          },
          {
            id: "chem-metals-bm4-06",
            question: "Why are alloys generally harder than the pure metals they are made from?",
            options: [
              "The atoms form stronger covalent bonds.",
              "Atoms of different sizes distort the lattice, making layers harder to slide.",
              "Alloys have more delocalised electrons.",
              "Alloys have a regular arrangement of identical atoms.",
            ],
            answerIndex: 1,
            explanation: "Different-sized atoms in an alloy distort the regular lattice and stop the layers of atoms sliding over one another. This makes alloys harder and stronger than the pure metals, which have identical, easily sliding layers.",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "core",
            hints: [
              "What makes a pure metal soft? (identical atoms in sliding layers)",
              "What is different about the atoms in an alloy?",
              "Different-sized atoms get in the way of the sliding layers.",
            ],
          },
          {
            id: "chem-metals-bm4-07",
            question: "Which property of aluminium, combined with good electrical conductivity, makes it suitable for overhead power cables?",
            options: ["High density", "Low density", "Magnetism", "High melting point"],
            answerIndex: 1,
            explanation: "Aluminium has a low density, so overhead cables are light and sag less between pylons, while still conducting electricity well. A steel core is added for strength.",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "core",
            hints: [
              "Overhead cables must be supported between tall pylons.",
              "A heavy cable would sag or snap — what property avoids this?",
              "Aluminium is valued for being lightweight.",
            ],
          },
          {
            id: "chem-metals-bm4-08",
            question: "Three iron nails are set up: nail 1 in dry air (with drying agent), nail 2 in water that has been boiled and sealed under oil, nail 3 in tap water open to air. After two weeks, which nail(s) will show rust?",
            options: ["Nail 1 only", "Nail 2 only", "Nail 3 only", "All three nails"],
            answerIndex: 2,
            explanation: "Rusting needs both water and oxygen. Nail 1 has oxygen but no water; nail 2 has water but no dissolved oxygen (boiled, sealed); only nail 3 has both, so only nail 3 rusts.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "core",
            hints: [
              "List what is present and absent in each tube.",
              "Rusting requires BOTH water and oxygen at the same time.",
              "Find the only tube where both are present.",
            ],
          },
          {
            id: "chem-metals-bm4-09",
            question: "Steel is the most widely recycled metal in the world. Which property allows it to be easily separated from mixed waste?",
            options: ["It is magnetic (it contains iron).", "It is the densest metal.", "It dissolves in water.", "It glows when heated."],
            answerIndex: 0,
            explanation: "Steel contains iron, which is magnetic, so steel objects can be separated from mixed waste using large electromagnets. This makes steel especially easy and cheap to recycle.",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "challenge",
            hints: [
              "What element in steel has a special physical property?",
              "Iron responds to magnets.",
              "A magnet can pull steel out of a mixture.",
            ],
            strategy: "Connect a metal's physical property to a practical recycling method",
          },
          {
            id: "chem-metals-bm4-10",
            question: "A ship's steel hull is protected by bolting on blocks of zinc. Over time the zinc blocks shrink and must be replaced, while the hull stays intact. Which statement best explains this?",
            options: [
              "Zinc forms a paint-like barrier over the whole hull.",
              "Zinc is more reactive than iron, so it is oxidised preferentially and is sacrificed.",
              "Zinc is less reactive than iron, so the iron is sacrificed.",
              "Zinc reacts with seawater to form a gas that protects the hull.",
            ],
            answerIndex: 1,
            explanation: "This is sacrificial protection. Zinc is above iron in the reactivity series, so it is oxidised in preference to the iron (Zn → Zn²⁺ + 2e⁻). The zinc is consumed ('sacrificed') and shrinks, while the iron hull is protected. The blocks are replaced as they corrode away.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "challenge",
            hints: [
              "The zinc is disappearing while the iron survives — which is corroding?",
              "Compare the reactivity of zinc and iron.",
              "The more reactive metal is oxidised in preference (sacrificed).",
              "This works even if the hull's coating is damaged.",
            ],
            strategy: "Identify which metal corrodes and link it to reactivity-series position",
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "chem-metals-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Physical properties, the reactivity series, and reactions with water, acid and oxygen.",
        questions: [
          {
            id: "chem-metals-bq1-01",
            question: "Metals have a giant metallic structure.\n(a) Describe the structure of a metal, including the particles present. [2]\n(b) Use this structure to explain why metals conduct electricity. [2]\n(c) Use this structure to explain why metals are malleable. [2]",
            marks: 6,
            modelAnswer:
              "(a) A metal consists of a regular lattice of positive metal ions surrounded by a 'sea' of delocalised electrons. The delocalised electrons come from the outer shells of the atoms and are free to move throughout the structure.\n\n(b) The delocalised electrons are free to move through the lattice. When a voltage is applied, these electrons drift through the metal, carrying electric charge — this is an electric current.\n\n(c) The layers of positive ions can slide over one another when a force is applied. The delocalised electron sea adjusts to the new positions, so the metallic bonding is not broken and the metal changes shape without shattering.",
            markScheme: [
              "(a) Lattice of positive (metal) ions",
              "(a) (Sea of) delocalised / free electrons",
              "(b) Delocalised electrons are free to move",
              "(b) Moving electrons carry charge / current through the metal",
              "(c) Layers of ions slide over each other",
              "(c) Metallic bonding/electron sea is maintained, so it does not break",
            ],
            commonError: "Students often say 'electrons are shared between atoms' (covalent language) or that ions move to carry current. In metals it is the delocalised ELECTRONS that move; the ions stay in the lattice.",
            guideRef: "Physical Properties of Metals",
            difficulty: "core",
            hints: [
              "Name the two types of particle in a metallic lattice.",
              "Which particle is free to move?",
              "For conduction, the moving electrons carry charge.",
              "For malleability, think about layers sliding without breaking bonds.",
            ],
          },
          {
            id: "chem-metals-bq1-02",
            question: "Sodium is stored under oil and reacts vigorously with cold water.\n(a) Write a balanced symbol equation, with state symbols, for the reaction of sodium with cold water. [2]\n(b) State two observations made during this reaction. [2]\n(c) Predict and explain how the vigour of the reaction of potassium with cold water would compare with sodium. [2]",
            marks: 6,
            modelAnswer:
              "(a) 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)\n\n(b) Any two of: the sodium floats on the surface; it moves around rapidly; it melts into a ball (heat released); fizzing/effervescence as hydrogen is released; the sodium gets smaller and disappears; the resulting solution is alkaline (turns indicator purple).\n\n(c) Potassium reacts MORE vigorously than sodium because potassium is higher in the reactivity series. The reaction is fast enough that the hydrogen produced ignites, giving a lilac flame, and the reaction may be explosive.",
            markScheme: [
              "(a) 2Na + 2H₂O → 2NaOH + H₂ (correct formulae and balanced)",
              "(a) Correct state symbols (s), (l), (aq), (g)",
              "(b) Any valid observation (floats / moves / melts into ball / fizzes / disappears)",
              "(b) A second distinct valid observation",
              "(c) Potassium reacts more vigorously",
              "(c) Because K is higher/more reactive in the reactivity series (e.g. ignites with lilac flame)",
            ],
            commonError: "Forgetting to include NaOH as a product, or writing the hydrogen as H instead of H₂. State symbols are also frequently omitted.",
            guideRef: "The Reactivity Series",
            difficulty: "core",
            hints: [
              "Products of metal + water are a metal hydroxide and hydrogen.",
              "Balance the sodium atoms first, then hydrogen and oxygen.",
              "For observations, think about what you would see and hear.",
              "Potassium is above sodium — so is it more or less reactive?",
            ],
          },
          {
            id: "chem-metals-bq1-03",
            question: "Iron does not react with cold water but does react with steam.\n(a) Write a balanced equation, with state symbols, for the reaction of iron with steam. [2]\n(b) Name the iron compound formed. [1]\n(c) The hydrogen produced is collected and tested. State the test and the positive result. [2]",
            marks: 5,
            modelAnswer:
              "(a) 3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)\n\n(b) Iron(II,III) oxide / tri-iron tetroxide (Fe₃O₄). (Accept 'iron oxide'.)\n\n(c) Test: bring a lighted splint to the mouth of the test tube of gas. Positive result: the gas burns with a squeaky 'pop', confirming hydrogen.",
            markScheme: [
              "(a) 3Fe + 4H₂O → Fe₃O₄ + 4H₂ (balanced)",
              "(a) State symbols including H₂O(g) for steam",
              "(b) Fe₃O₄ / iron oxide",
              "(c) Lighted splint",
              "(c) Squeaky pop (= hydrogen)",
            ],
            commonError: "Writing H₂O(l) instead of H₂O(g) — steam is a gas. Also writing Fe₂O₃ instead of Fe₃O₄ for the steam reaction.",
            guideRef: "The Reactivity Series",
            difficulty: "core",
            hints: [
              "The product of iron + steam is Fe₃O₄, not Fe₂O₃.",
              "Balance iron first (3 Fe), then oxygen, then hydrogen.",
              "Steam means the water is a gas — choose the right state symbol.",
              "Hydrogen gives a characteristic test with a lighted splint.",
            ],
          },
          {
            id: "chem-metals-bq1-04",
            question: "A student adds equal-sized pieces of magnesium, zinc and iron to separate test tubes containing the same volume and concentration of dilute hydrochloric acid.\n(a) Write the general word equation for a metal reacting with a dilute acid. [1]\n(b) Predict the order of reaction rate (fastest to slowest) and justify it. [2]\n(c) Explain why copper would give no reaction in this experiment. [2]",
            marks: 5,
            modelAnswer:
              "(a) metal + acid → salt + hydrogen.\n\n(b) Fastest to slowest: magnesium > zinc > iron. This matches their order in the reactivity series — the more reactive the metal, the faster it reacts with the acid and the more vigorously hydrogen is produced.\n\n(c) Copper is below hydrogen in the reactivity series, so it cannot displace hydrogen from the acid. Therefore no reaction occurs and no hydrogen is produced.",
            markScheme: [
              "(a) metal + acid → salt + hydrogen",
              "(b) Order Mg > Zn > Fe",
              "(b) Justified by position in reactivity series (more reactive = faster)",
              "(c) Copper is below hydrogen in the reactivity series",
              "(c) Cannot displace hydrogen, so no reaction",
            ],
            commonError: "Some students rank by random guesses rather than using the reactivity series. Others claim copper reacts slowly — copper does not react with dilute HCl at all.",
            guideRef: "The Reactivity Series",
            difficulty: "core",
            hints: [
              "Metal + acid gives a salt and one specific gas.",
              "Use the reactivity series to rank Mg, Zn, Fe.",
              "More reactive means a faster reaction.",
              "Where is copper relative to hydrogen?",
            ],
          },
          {
            id: "chem-metals-bq1-05",
            question: "Define each of the following terms as used in the chemistry of metals:\n(a) reactivity series [1]\n(b) corrosion [1]\n(c) Explain why gold is found in nature as the uncombined (native) metal whereas potassium is always found combined in compounds. [3]",
            marks: 5,
            modelAnswer:
              "(a) The reactivity series is a list of metals arranged in order of decreasing reactivity, from most reactive (e.g. potassium) to least reactive (e.g. gold), with carbon and hydrogen included as reference points.\n\n(b) Corrosion is the gradual destruction of a metal by chemical reaction with substances in its environment (such as oxygen, water or acids).\n\n(c) Gold is very low in the reactivity series — it is extremely unreactive and does not react with oxygen, water or most other substances, so it remains as the uncombined element. Potassium is extremely high in the reactivity series — it reacts readily with oxygen and water, so in nature it is always found combined in stable compounds (e.g. salts), never as the free metal.",
            markScheme: [
              "(a) List of metals in order of (decreasing) reactivity",
              "(b) Gradual destruction/wearing away of a metal by chemical reaction with the environment",
              "(c) Gold is very unreactive / low in series → stays uncombined",
              "(c) Potassium is very reactive / high in series",
              "(c) Potassium reacts readily with oxygen/water so is always found combined",
            ],
            commonError: "Defining corrosion as only 'rusting' — rusting is specific to iron, whereas corrosion is the general term for any metal.",
            guideRef: "The Reactivity Series",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bq1-06",
            question: "Magnesium reacts completely with excess dilute hydrochloric acid.\n(a) Write the balanced equation for the reaction. [2]\n(b) Calculate the volume of hydrogen gas (at room temperature and pressure) produced when 4.8 g of magnesium reacts completely. (Ar: Mg = 24; molar gas volume = 24 dm³/mol at rtp) [3]",
            marks: 5,
            modelAnswer:
              "(a) Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)\n\n(b) Moles of Mg = mass ÷ Ar = 4.8 ÷ 24 = 0.20 mol. From the equation, 1 mol Mg → 1 mol H₂, so moles of H₂ = 0.20 mol. Volume of H₂ = moles × molar gas volume = 0.20 × 24 = 4.8 dm³ (to 2 sig figs).",
            markScheme: [
              "(a) Mg + 2HCl → MgCl₂ + H₂ (balanced, correct formulae)",
              "(a) Correct state symbols",
              "(b) Moles of Mg = 4.8 ÷ 24 = 0.20 mol",
              "(b) Mole ratio Mg : H₂ = 1 : 1, so n(H₂) = 0.20 mol",
              "(b) Volume = 0.20 × 24 = 4.8 dm³",
            ],
            commonError: "Using the wrong mole ratio (the ratio of Mg : H₂ is 1 : 1, not 1 : 2 — the 2 belongs to HCl). Also forgetting to convert moles to volume using 24 dm³/mol.",
            guideRef: "The Reactivity Series",
            difficulty: "core",
            hints: [
              "Balance the equation first to fix the mole ratio.",
              "moles = mass ÷ Ar.",
              "Use the Mg : H₂ ratio from the equation (1 : 1).",
              "volume of gas = moles × 24 dm³/mol at rtp.",
            ],
            solutions: [
              {
                label: "Mass to gas volume",
                steps: [
                  "Write the balanced equation: Mg + 2HCl → MgCl₂ + H₂.",
                  "n(Mg) = 4.8 g ÷ 24 g/mol = 0.20 mol.",
                  "From the equation, Mg : H₂ = 1 : 1, so n(H₂) = 0.20 mol.",
                  "V(H₂) = n × 24 dm³/mol = 0.20 × 24 = 4.8 dm³ (2 s.f.).",
                ],
              },
            ],
          },
          {
            id: "chem-metals-bq1-07",
            question: "A teacher demonstrates the reactions of four metals A, B, C and D and records the results:\n- A: no reaction with cold water; reacts steadily with steam; reacts with dilute acid.\n- B: reacts violently with cold water, catching fire.\n- C: no reaction with dilute acid; found native in rocks.\n- D: no reaction with cold water; reacts slowly with dilute acid; coated with a black layer when heated in air.\n(a) Place A, B, C and D in order of decreasing reactivity. [2]\n(b) For each of A and B, suggest a metal it could be, with a reason. [2]\n(c) Explain how the data for C show it is below hydrogen in the reactivity series. [2]",
            marks: 6,
            modelAnswer:
              "(a) Order (most to least reactive): B > A > D > C.\n\n(b) B could be potassium or sodium because it reacts violently with cold water and catches fire — only the most reactive metals (top of the series) do this. A could be magnesium because it does not react with cold water but does react with steam and with dilute acid (typical of magnesium / the Mg–Zn region).\n\n(c) C does not react with dilute acid. Only metals above hydrogen in the reactivity series can displace hydrogen from a dilute acid. Since C cannot do this (and is also found native, i.e. very unreactive), C must be below hydrogen in the reactivity series.",
            markScheme: [
              "(a) B identified as most reactive (violent with cold water)",
              "(a) Full order B > A > D > C",
              "(b) B = K or Na with reason (violent reaction with cold water)",
              "(b) A = Mg (or Zn) with reason (steam not cold water / reacts with acid)",
              "(c) Metals above H displace hydrogen from acid",
              "(c) C does not react with acid, so C is below hydrogen",
            ],
            commonError: "Ranking D above A — A reacts with steam (and acid) whereas D reacts only with acid (more slowly), so A is more reactive than D.",
            guideRef: "The Reactivity Series",
            difficulty: "challenge",
            hints: [
              "Reacting with cold water = top of the series.",
              "Reacting with steam but not cold water = middle.",
              "No reaction with acid + found native = bottom.",
              "Use the acid test to position metals relative to hydrogen.",
            ],
            strategy: "Use the harshest condition each metal needs to react as a ranking tool",
          },
          {
            id: "chem-metals-bq1-08",
            question: "Aluminium is high in the reactivity series, yet aluminium window frames last for years without corroding.\n(a) Explain this apparent contradiction. [3]\n(b) Rust on iron behaves very differently from the oxide layer on aluminium. Explain why rust does not protect the iron beneath it. [2]",
            marks: 5,
            modelAnswer:
              "(a) Aluminium is reactive and reacts quickly with oxygen in the air. However, it forms a very thin, dense and strongly adherent layer of aluminium oxide (Al₂O₃) on its surface. This oxide layer is impermeable and seals the surface, preventing oxygen and water from reaching the metal beneath (passivation). So although aluminium is reactive, the protective oxide layer makes it appear unreactive and stops further corrosion.\n\n(b) Rust (hydrated iron(III) oxide) is flaky and porous, not dense or adherent. It flakes off the surface, continually exposing fresh iron underneath to water and oxygen, so corrosion continues until all the iron is consumed.",
            markScheme: [
              "(a) Aluminium reacts with oxygen forming Al₂O₃",
              "(a) The oxide layer is thin/dense/adherent/impermeable",
              "(a) It prevents further oxygen/water reaching the metal (passivation)",
              "(b) Rust is flaky/porous/non-adherent",
              "(b) It flakes off exposing fresh iron, so corrosion continues",
            ],
            commonError: "Saying aluminium 'does not react with oxygen' — it does react, but the product forms a protective layer. The key is the nature of the oxide layer, not the absence of reaction.",
            guideRef: "The Reactivity Series",
            difficulty: "challenge",
            hints: [
              "Aluminium really does react with oxygen — what forms on its surface?",
              "Describe the texture of the aluminium oxide layer.",
              "Compare that layer with the texture of rust.",
              "A protective layer must seal the surface, not flake away.",
            ],
            strategy: "Contrast a dense protective oxide with a flaky non-protective one",
          },
          {
            id: "chem-metals-bq1-09",
            question: "State and explain, for each of the following pairs, which metal is more reactive, giving the observation you would use as evidence:\n(a) magnesium and copper [2]\n(b) calcium and magnesium [2]\n(c) zinc and silver [2]",
            marks: 6,
            modelAnswer:
              "(a) Magnesium is more reactive than copper. Evidence: magnesium fizzes/reacts with dilute acid (releasing hydrogen) whereas copper shows no reaction with dilute acid. OR magnesium displaces copper from copper(II) sulfate solution.\n\n(b) Calcium is more reactive than magnesium. Evidence: calcium reacts steadily with cold water, releasing hydrogen, whereas magnesium reacts only very slowly (or not noticeably) with cold water.\n\n(c) Zinc is more reactive than silver. Evidence: zinc reacts with dilute acid releasing hydrogen while silver does not react with dilute acid. OR zinc displaces silver from silver nitrate solution (silver deposits on the zinc).",
            markScheme: [
              "(a) Mg more reactive than Cu",
              "(a) Evidence: Mg reacts with acid/displaces Cu; Cu does not react with acid",
              "(b) Ca more reactive than Mg",
              "(b) Evidence: Ca reacts with cold water; Mg only very slowly/with steam",
              "(c) Zn more reactive than Ag",
              "(c) Evidence: Zn reacts with acid/displaces Ag; Ag unreactive",
            ],
            commonError: "Stating the order without giving a specific observable test as evidence. Each comparison must be backed by an observation (water reaction, acid reaction, or displacement).",
            guideRef: "The Reactivity Series",
            difficulty: "core",
            hints: [
              "Pick a test that distinguishes the two metals (water, acid or displacement).",
              "For Mg vs Cu, the acid test gives a clear difference.",
              "For Ca vs Mg, the cold-water test separates them.",
              "Always state both the more reactive metal AND the evidence.",
            ],
          },
          {
            id: "chem-metals-bq1-10",
            question: "A pupil writes: 'All metals are hard, dense solids with high melting points and are unreactive.'\nIdentify and correct THREE errors or over-generalisations in this statement, giving a specific example for each. [6]",
            marks: 6,
            modelAnswer:
              "Error 1 — 'All metals are hard': sodium and potassium are soft enough to cut with a knife, so not all metals are hard.\n\nError 2 — 'dense solids': sodium and potassium have low densities (they float on water); mercury is not a solid at all but a liquid at room temperature. So 'dense solids' is an over-generalisation.\n\nError 3 — 'high melting points': although many metals do have high melting points, mercury is liquid at room temperature and sodium/potassium have low melting points, so this is not true of all metals.\n\nError 4 — 'unreactive': many metals are very reactive — potassium and sodium react violently with cold water, and magnesium burns brightly in oxygen. Reactivity ranges across the whole reactivity series, so metals are not all unreactive.\n(Any three corrections, each with a valid example, gain full marks.)",
            markScheme: [
              "Hardness corrected: Na/K are soft (cut with a knife)",
              "Density/state corrected: Na/K low density (float) OR mercury is a liquid",
              "Melting point corrected: mercury liquid at rtp / Na, K low m.p.",
              "Reactivity corrected: K/Na react violently with water / many metals reactive",
              "Each correction supported by a specific named example",
              "Three distinct, valid corrections given",
            ],
            commonError: "Just writing 'this is wrong' without giving a corrected statement and a specific named example. Each mark needs the correction plus an example.",
            guideRef: "Physical Properties of Metals",
            difficulty: "challenge",
            hints: [
              "Think of metals that are exceptions to each claim.",
              "Sodium and potassium break several of these generalisations.",
              "Mercury is the famous exception for state/melting point.",
              "Reactivity varies across the whole series — use a reactive metal example.",
            ],
            strategy: "For each generalisation, recall a specific counter-example metal",
          },
        ],
      },
      {
        id: "chem-metals-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Displacement reactions, redox interpretation, and reactivity deductions.",
        questions: [
          {
            id: "chem-metals-bq2-01",
            question: "A clean iron nail is placed in blue copper(II) sulfate solution and left for one hour.\n(a) Write the balanced symbol equation, with state symbols, for the reaction. [2]\n(b) State two observations the student would make. [2]\n(c) Explain, in terms of the reactivity series, why this reaction occurs. [1]",
            marks: 5,
            modelAnswer:
              "(a) Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)\n\n(b) Any two of: the blue colour of the solution fades (becomes paler / pale green as Fe²⁺ forms); a reddish-brown deposit of copper forms on the iron nail; the iron nail decreases in size / partly dissolves.\n\n(c) Iron is above copper in the reactivity series (iron is more reactive), so iron displaces copper from copper(II) sulfate solution.",
            markScheme: [
              "(a) Fe + CuSO₄ → FeSO₄ + Cu (correct formulae, balanced)",
              "(a) Correct state symbols",
              "(b) Blue colour fades / turns pale green",
              "(b) Reddish-brown copper deposit on the nail",
              "(c) Iron is more reactive / above copper in the series",
            ],
            commonError: "Writing the iron product as Fe₂(SO₄)₃ — in this displacement iron forms Fe²⁺, giving FeSO₄, not iron(III) sulfate.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "core",
            hints: [
              "Iron forms Fe²⁺ here, so the salt is FeSO₄.",
              "Balance the equation and add state symbols.",
              "Copper metal is reddish-brown.",
              "Use the relative positions of Fe and Cu to justify the reaction.",
            ],
          },
          {
            id: "chem-metals-bq2-02",
            question: "When zinc is added to copper(II) sulfate solution, a displacement reaction occurs.\n(a) Write the two ionic half-equations, identifying which is oxidation and which is reduction. [3]\n(b) Define oxidation and reduction in terms of electron transfer. [2]\n(c) State which species is the reducing agent and explain your choice. [2]",
            marks: 7,
            modelAnswer:
              "(a) Oxidation: Zn → Zn²⁺ + 2e⁻ (zinc loses electrons). Reduction: Cu²⁺ + 2e⁻ → Cu (copper ions gain electrons).\n\n(b) Oxidation is the loss of electrons; reduction is the gain of electrons (OIL RIG).\n\n(c) Zinc is the reducing agent. Zinc donates (loses) electrons to the Cu²⁺ ions, causing the copper ions to be reduced; the species that brings about reduction by donating electrons is the reducing agent.",
            markScheme: [
              "(a) Zn → Zn²⁺ + 2e⁻ labelled oxidation",
              "(a) Cu²⁺ + 2e⁻ → Cu labelled reduction",
              "(a) Both half-equations balanced for charge/electrons",
              "(b) Oxidation = loss of electrons",
              "(b) Reduction = gain of electrons",
              "(c) Zinc is the reducing agent",
              "(c) Because it donates/loses electrons (to reduce Cu²⁺)",
            ],
            commonError: "Mixing up the agent and what is oxidised — the substance OXIDISED (Zn) is the REDUCING agent. Many students wrongly call zinc the oxidising agent.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "core",
            hints: [
              "Write what happens to zinc atoms, then to copper ions.",
              "Loss of electrons is oxidation; gain is reduction.",
              "The electrons lost by zinc are gained by copper ions.",
              "The species that is oxidised acts as the reducing agent.",
            ],
          },
          {
            id: "chem-metals-bq2-03",
            question: "The table shows the results of adding each metal (rows) to each salt solution (columns). A tick (✓) means a reaction occurred; a cross (✗) means no reaction.\n\nMetal added → into solution of:\n- Zinc into copper sulfate: ✓\n- Zinc into magnesium sulfate: ✗\n- Iron into copper sulfate: ✓\n- Iron into zinc sulfate: ✗\n- Magnesium into zinc sulfate: ✓\n\n(a) Use the results to arrange magnesium, zinc, iron and copper in order of decreasing reactivity. [3]\n(b) Explain how the 'Iron into zinc sulfate: ✗' result supports your order. [2]\n(c) Predict the result of adding magnesium to copper sulfate solution and justify your prediction. [2]",
            marks: 7,
            modelAnswer:
              "(a) Order (most to least reactive): magnesium > zinc > iron > copper.\nReasoning: Mg displaces Zn (Mg > Zn). Zn displaces Cu (Zn > Cu). Fe displaces Cu (Fe > Cu) but Fe does not displace Zn (Zn > Fe). So Mg > Zn > Fe > Cu.\n\n(b) Iron does NOT displace zinc from zinc sulfate, which means iron is LESS reactive than zinc. This places zinc above iron in the series, consistent with the order Mg > Zn > Fe > Cu.\n\n(c) Magnesium WOULD react with copper sulfate solution (✓). Magnesium is more reactive than copper (it is the most reactive of the four), so it will displace copper from the solution: Mg + CuSO₄ → MgSO₄ + Cu.",
            markScheme: [
              "(a) Correct order Mg > Zn > Fe > Cu",
              "(a) Justified using Mg displaces Zn and Zn displaces Cu",
              "(a) Justified using Fe displaces Cu but not Zn",
              "(b) No reaction means iron is less reactive than zinc",
              "(b) So zinc is placed above iron (consistent with order)",
              "(c) Prediction: reaction occurs (✓)",
              "(c) Justification: Mg more reactive than Cu, so displaces it",
            ],
            commonError: "Treating a 'no reaction' result as meaningless. A cross is informative: it shows the added metal is LESS reactive than the metal in the salt.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "challenge",
            hints: [
              "Each ✓ means: added metal is more reactive than the metal in the salt.",
              "Each ✗ means: added metal is less reactive than the metal in the salt.",
              "Chain the inequalities together to build the order.",
              "For (c), compare magnesium with copper directly.",
            ],
            strategy: "Convert each tick/cross into a 'more/less reactive than' inequality, then combine",
          },
          {
            id: "chem-metals-bq2-04",
            question: "The thermite reaction is used to weld railway tracks: 2Al + Fe₂O₃ → Al₂O₃ + 2Fe.\n(a) Explain why aluminium is able to displace iron from iron(III) oxide. [1]\n(b) State which substance is oxidised and which is reduced, with reasons. [2]\n(c) Calculate the maximum mass of iron that can be produced from 80 g of iron(III) oxide. (Ar: Fe = 56, O = 16, Al = 27) [3]",
            marks: 6,
            modelAnswer:
              "(a) Aluminium is above iron in the reactivity series (more reactive), so it displaces the less reactive iron from its oxide.\n\n(b) Aluminium is oxidised: it combines with oxygen / loses electrons to form Al³⁺ in Al₂O₃. Iron(III) oxide is reduced: oxygen is removed from it / Fe³⁺ gains electrons to form Fe.\n\n(c) Mr(Fe₂O₃) = (2×56) + (3×16) = 160. Moles of Fe₂O₃ = 80 ÷ 160 = 0.50 mol. From the equation, 1 mol Fe₂O₃ → 2 mol Fe, so moles of Fe = 2 × 0.50 = 1.0 mol. Mass of Fe = moles × Ar = 1.0 × 56 = 56 g.",
            markScheme: [
              "(a) Aluminium is more reactive / above iron in the series",
              "(b) Aluminium oxidised (gains oxygen / loses electrons)",
              "(b) Iron(III) oxide reduced (loses oxygen / Fe³⁺ gains electrons)",
              "(c) Mr(Fe₂O₃) = 160 and n(Fe₂O₃) = 80 ÷ 160 = 0.50 mol",
              "(c) Mole ratio Fe₂O₃ : Fe = 1 : 2, so n(Fe) = 1.0 mol",
              "(c) Mass of Fe = 1.0 × 56 = 56 g",
            ],
            commonError: "Forgetting the 1 : 2 mole ratio (one Fe₂O₃ gives TWO Fe). Some students also miscalculate Mr(Fe₂O₃) as 112 by ignoring the oxygen.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "challenge",
            hints: [
              "Aluminium takes the oxygen, so which substance is oxidised?",
              "Work out the relative formula mass of Fe₂O₃.",
              "moles = mass ÷ Mr.",
              "Use the 1 : 2 ratio of Fe₂O₃ to Fe, then convert to mass.",
            ],
            solutions: [
              {
                label: "Mass of iron from the oxide",
                steps: [
                  "Mr(Fe₂O₃) = 2(56) + 3(16) = 112 + 48 = 160.",
                  "n(Fe₂O₃) = 80 ÷ 160 = 0.50 mol.",
                  "Equation ratio Fe₂O₃ : Fe = 1 : 2, so n(Fe) = 2 × 0.50 = 1.0 mol.",
                  "m(Fe) = 1.0 × 56 = 56 g.",
                ],
              },
            ],
          },
          {
            id: "chem-metals-bq2-05",
            question: "Explain how displacement reactions provide direct evidence for the order of the reactivity series, and why carbon and hydrogen are included in the series. [6]",
            marks: 6,
            modelAnswer:
              "In a displacement reaction, a more reactive metal displaces a less reactive metal from a solution of its salt (or from its oxide). For example, if metal X displaces metal Y from a solution of a Y salt, then X must be more reactive than Y. By carrying out many such experiments and comparing pairs of metals, the metals can be placed in a definite order — each displacement result is a direct 'more reactive than' comparison. The more reactive metal is always the one that loses electrons more readily (is oxidised), which is exactly what 'reactivity' measures.\n\nCarbon and hydrogen are included as reference points because they can also act as reducing agents. A metal that is below carbon in the series can be extracted by reduction of its oxide with carbon; a metal above carbon cannot, and needs electrolysis. Similarly, a metal below hydrogen will not displace hydrogen from a dilute acid. Their positions therefore tell us which extraction method and which acid behaviour to expect.",
            markScheme: [
              "More reactive metal displaces a less reactive one from its salt/oxide",
              "Each displacement is a direct pairwise comparison of reactivity",
              "Comparing many pairs builds up the full order",
              "Reactivity = tendency to lose electrons / be oxidised",
              "C and H included as reference points / can act as reducing agents",
              "Their position decides extraction method (above/below C) and acid behaviour (above/below H)",
            ],
            commonError: "Describing displacement without making the logical link that each result gives a direct ranking, or forgetting to explain the special role of carbon and hydrogen.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "core",
            hints: [
              "State the displacement rule precisely.",
              "Explain what a single displacement result tells you about two metals.",
              "Show how many comparisons build a full order.",
              "Then explain why two non-metals are in the list.",
            ],
          },
          {
            id: "chem-metals-bq2-06",
            question: "A student suggests using a displacement reaction between iron and copper(II) sulfate solution to obtain pure copper.\n(a) Write the ionic equation for the reaction. [2]\n(b) Explain why the copper produced is contaminated and suggest how the copper could be purified after this method. [2]\n(c) Suggest one advantage of obtaining copper this way from low-grade copper sulfate solutions rather than from rich ore. [2]",
            marks: 6,
            modelAnswer:
              "(a) Fe(s) + Cu²⁺(aq) → Fe²⁺(aq) + Cu(s).\n\n(b) The copper deposit is contaminated with unreacted iron (and iron may be physically mixed in with the copper). The copper could be purified by electrolysis (using the impure copper as the anode and pure copper as the cathode), giving very pure copper. (Accept: dissolve away the iron with dilute acid, since iron reacts with acid but copper does not, then filter off the copper.)\n\n(c) It allows copper to be recovered from low-grade sources / waste solutions that would otherwise be uneconomic to mine, conserving the limited supply of rich copper ore and reducing waste. (Also: it can be cheaper / uses less energy than smelting rich ore.)",
            markScheme: [
              "(a) Fe + Cu²⁺ → Fe²⁺ + Cu (ionic, balanced)",
              "(a) State symbols / correct charges",
              "(b) Copper contaminated with leftover iron",
              "(b) Purify by electrolysis (impure anode, pure cathode) / dissolve iron in acid",
              "(c) Recovers copper from low-grade/waste sources",
              "(c) Conserves rich ore / cheaper / less energy",
            ],
            commonError: "Suggesting the displaced copper is already pure. There is always excess/unreacted iron, so a purification step is required.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "challenge",
            hints: [
              "Write the ionic equation (spectator SO₄²⁻ omitted).",
              "What else, besides copper, is left in the mixture?",
              "Electrolysis is the standard method to purify copper.",
              "Think about why we would bother with low-grade sources.",
            ],
            strategy: "Separate the chemistry (the reaction) from the practical issue (purity)",
          },
          {
            id: "chem-metals-bq2-07",
            question: "Define the following and give one example of each:\n(a) displacement reaction [2]\n(b) oxidising agent [2]\n(c) Explain why a more reactive metal is always a better reducing agent than a less reactive metal. [2]",
            marks: 6,
            modelAnswer:
              "(a) A displacement reaction is one in which a more reactive metal displaces (replaces) a less reactive metal from a solution of its salt or from its oxide. Example: Zn + CuSO₄ → ZnSO₄ + Cu.\n\n(b) An oxidising agent is a substance that accepts (gains) electrons from another species, causing that species to be oxidised (and being itself reduced). Example: Cu²⁺ ions in CuSO₄ act as the oxidising agent when zinc is added (Cu²⁺ gains electrons).\n\n(c) A more reactive metal loses its outer electrons more readily (it has a stronger tendency to be oxidised). Because a reducing agent works by donating electrons, the metal that gives up electrons most easily is the best reducing agent — hence the more reactive metal is the better reducing agent.",
            markScheme: [
              "(a) Definition: more reactive metal replaces less reactive from salt/oxide",
              "(a) Valid example equation",
              "(b) Oxidising agent gains/accepts electrons (is itself reduced)",
              "(b) Valid example (e.g. Cu²⁺)",
              "(c) More reactive metal loses electrons more readily",
              "(c) Reducing agent donates electrons, so reactive metal = better reducing agent",
            ],
            commonError: "Confusing oxidising and reducing agents. Remember: the oxidising agent is itself REDUCED (gains electrons); the reducing agent is itself OXIDISED (loses electrons).",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "warmup",
            hints: [
              "Define displacement in terms of relative reactivity.",
              "An oxidising agent causes oxidation by taking electrons.",
              "Link 'reactivity' to how easily a metal loses electrons.",
              "A reducing agent donates electrons.",
            ],
          },
          {
            id: "chem-metals-bq2-08",
            question: "Two metals P and Q are investigated. P displaces Q from a solution of a Q salt. When P reacts with dilute acid it fizzes slowly; Q does not react with dilute acid at all.\n(a) State, with a reason, which of P and Q is more reactive. [2]\n(b) Deduce the position of each metal relative to hydrogen in the reactivity series. [2]\n(c) P could be one of several metals. Use the acid result to narrow down which part of the reactivity series P lies in, and name a metal P could be. [2]",
            marks: 6,
            modelAnswer:
              "(a) P is more reactive than Q. P displaces Q from a solution of a Q salt, and only a more reactive metal can displace a less reactive one.\n\n(b) P reacts with dilute acid, so P is above hydrogen in the reactivity series. Q does not react with dilute acid, so Q is below hydrogen.\n\n(c) P fizzes only SLOWLY with dilute acid, so it is above hydrogen but not very high in the series (the very reactive metals would react vigorously). This places P in the moderately reactive region — for example zinc or iron. (Accept Zn or Fe.)",
            markScheme: [
              "(a) P is more reactive",
              "(a) Because P displaces Q / only more reactive metals displace less reactive ones",
              "(b) P is above hydrogen (reacts with acid)",
              "(b) Q is below hydrogen (no reaction with acid)",
              "(c) Slow reaction → moderately reactive / not near the top",
              "(c) Named metal e.g. zinc or iron",
            ],
            commonError: "Concluding that any reaction with acid means a metal is highly reactive. The RATE matters — a slow reaction indicates a moderately reactive metal, not one near the top.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "challenge",
            hints: [
              "Displacement directly compares two metals.",
              "Reacting with acid places a metal above hydrogen; no reaction places it below.",
              "The SPEED of fizzing tells you how far above hydrogen.",
              "A slow fizz suggests the middle of the series.",
            ],
            strategy: "Use both whether and how fast a metal reacts to pin down its region",
          },
          {
            id: "chem-metals-bq2-09",
            question: "A grey metal is added to a colourless salt solution. After a few minutes, shiny silver-coloured crystals appear on the metal and the solution remains colourless.\n(a) Explain what type of reaction has occurred. [2]\n(b) The salt was silver nitrate (AgNO₃) and the metal was copper. Write the balanced symbol equation for the reaction. [2]\n(c) The solution slowly turns pale blue as the reaction proceeds. Explain this colour change. [2]",
            marks: 6,
            modelAnswer:
              "(a) A displacement reaction has occurred. The added metal (copper) is more reactive than silver, so it displaces silver from the silver nitrate solution; the silver metal is deposited as shiny crystals on the copper.\n\n(b) Cu(s) + 2AgNO₃(aq) → Cu(NO₃)₂(aq) + 2Ag(s).\n\n(c) As copper dissolves it forms copper(II) ions, Cu²⁺(aq), which are blue. As more Cu²⁺ enters the solution, the solution gradually turns pale blue.",
            markScheme: [
              "(a) Displacement reaction",
              "(a) Copper is more reactive than silver, so displaces it",
              "(b) Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag (balanced, correct formulae)",
              "(b) Correct state symbols",
              "(c) Copper forms Cu²⁺ ions in solution",
              "(c) Cu²⁺(aq) is blue, so the solution turns blue",
            ],
            commonError: "Not balancing the silver: the equation needs 2AgNO₃ and 2Ag because silver is Ag⁺ (1+) while copper forms Cu²⁺ (2+).",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "warmup",
            hints: [
              "Shiny crystals forming on a metal signal displacement.",
              "Copper is more reactive than silver.",
              "Balance the charges: Cu²⁺ needs two Ag⁺.",
              "Cu²⁺ ions in solution are blue.",
            ],
          },
          {
            id: "chem-metals-bq2-10",
            question: "An iron nail and a magnesium ribbon of equal mass are each placed in separate beakers of copper(II) sulfate solution of the same concentration and volume.\n(a) State and explain in which beaker the temperature rise will be greater. [3]\n(b) Suggest why the colour of the solution fades more quickly in one beaker than the other. [2]\n(c) Both reactions eventually deposit copper. Explain why measuring the mass of copper deposited would NOT, on its own, distinguish the reactivity of iron and magnesium. [2]",
            marks: 7,
            modelAnswer:
              "(a) The temperature rise will be greater in the beaker with magnesium. Magnesium is more reactive than iron (it is further from copper in the reactivity series), so its displacement reaction releases more energy per mole and reacts faster, giving a larger and faster temperature rise.\n\n(b) The blue colour fades faster in the magnesium beaker because magnesium is more reactive and reacts faster, removing Cu²⁺ ions from solution more quickly. (The faster the rate, the faster the blue colour disappears.)\n\n(c) Both metals displace the same copper from the same amount of copper sulfate, so (if the copper sulfate is the limiting reagent) the maximum mass of copper deposited is the same in both beakers regardless of which metal is used. The final mass therefore depends on the amount of CuSO₄, not on the reactivity of the metal, so it cannot distinguish the two metals. (Reactivity shows up in the RATE and temperature rise, not the final amount of copper.)",
            markScheme: [
              "(a) Greater temperature rise with magnesium",
              "(a) Magnesium is more reactive than iron",
              "(a) More reactive metal releases more energy / reacts faster",
              "(b) Blue fades faster in magnesium beaker",
              "(b) Because magnesium reacts faster, removing Cu²⁺ more quickly",
              "(c) Same amount of CuSO₄ gives the same max mass of copper either way",
              "(c) Final copper mass depends on CuSO₄, not on metal reactivity",
            ],
            commonError: "Assuming the more reactive metal must produce more copper. The amount of copper is fixed by the copper sulfate available; reactivity affects the RATE and energy released, not the final yield.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "challenge",
            hints: [
              "Which metal is more reactive, magnesium or iron?",
              "More reactive metals react faster and release more energy.",
              "Faster removal of Cu²⁺ means faster colour change.",
              "For (c), think about what limits the amount of copper produced.",
            ],
            strategy: "Distinguish quantities set by the limiting reagent from rates set by reactivity",
          },
        ],
      },
      {
        id: "chem-metals-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Extraction of iron and aluminium, choice of method, and extraction calculations.",
        questions: [
          {
            id: "chem-metals-bq3-01",
            question: "Iron is extracted from haematite in the blast furnace.\n(a) Name the three solid raw materials added at the top of the furnace. [2]\n(b) Write the equation for the formation of carbon monoxide from carbon dioxide and coke. [1]\n(c) Write the equation for the reduction of iron(III) oxide by carbon monoxide. [2]",
            marks: 5,
            modelAnswer:
              "(a) Iron ore (haematite / Fe₂O₃), coke (carbon / C) and limestone (calcium carbonate / CaCO₃). (Hot air is blasted in lower down, not added as a solid at the top.)\n\n(b) CO₂ + C → 2CO.\n\n(c) Fe₂O₃ + 3CO → 2Fe + 3CO₂.",
            markScheme: [
              "(a) Iron ore / haematite / Fe₂O₃",
              "(a) Coke / carbon AND limestone / CaCO₃ (both for the second mark)",
              "(b) CO₂ + C → 2CO (balanced)",
              "(c) Fe₂O₃ + 3CO → 2Fe + 3CO₂ correct formulae",
              "(c) Correctly balanced",
            ],
            commonError: "Listing hot air as a solid raw material — air is blasted in, not added as a solid. Also unbalanced reduction equations (forgetting the 3CO and 3CO₂).",
            guideRef: "Extraction of Metals",
            difficulty: "warmup",
            hints: [
              "Three SOLIDS go in the top; air is blasted in separately.",
              "CO forms when CO₂ rises through the hot coke.",
              "Balance Fe first, then check carbon and oxygen.",
              "One Fe₂O₃ needs three CO.",
            ],
          },
          {
            id: "chem-metals-bq3-02",
            question: "Limestone (calcium carbonate) plays an important role in the blast furnace.\n(a) Write the equation for the thermal decomposition of limestone in the furnace. [1]\n(b) Write the equation for the reaction that removes the main acidic impurity. [2]\n(c) Name the product of part (b) and state how it is removed from the furnace. [2]",
            marks: 5,
            modelAnswer:
              "(a) CaCO₃ → CaO + CO₂.\n\n(b) CaO + SiO₂ → CaSiO₃. (Calcium oxide reacts with silica, the acidic impurity.)\n\n(c) The product is calcium silicate (CaSiO₃), called slag. It is molten and less dense than iron, so it floats on top of the molten iron and is tapped off (run out) separately, above the iron.",
            markScheme: [
              "(a) CaCO₃ → CaO + CO₂",
              "(b) CaO + SiO₂ → CaSiO₃ (correct reactants)",
              "(b) Balanced / correct formulae",
              "(c) Slag / calcium silicate",
              "(c) Floats on the molten iron and is tapped/run off",
            ],
            commonError: "Confusing the two limestone steps, or saying limestone reacts directly with silica — it must first decompose to CaO, which then reacts with SiO₂.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "Limestone decomposes first when heated.",
              "The calcium oxide then reacts with the sandy silica impurity.",
              "The product is calcium silicate, called slag.",
              "Slag is less dense than iron — where does it collect?",
            ],
          },
          {
            id: "chem-metals-bq3-03",
            question: "Aluminium is extracted by electrolysis of purified aluminium oxide dissolved in molten cryolite.\n(a) Explain why aluminium cannot be extracted by reduction with carbon. [2]\n(b) State the purpose of the cryolite. [2]\n(c) Write the half-equations at the cathode and the anode. [2]",
            marks: 6,
            modelAnswer:
              "(a) Aluminium is above carbon in the reactivity series, so its oxide (Al₂O₃) is too stable to be reduced by carbon — carbon is not a strong enough reducing agent to remove the oxygen from aluminium oxide at economic temperatures.\n\n(b) Cryolite (Na₃AlF₆) dissolves the aluminium oxide and lowers its melting point from about 2072 °C to about 970 °C. This reduces the energy (and cost) needed to keep the electrolyte molten.\n\n(c) Cathode: Al³⁺ + 3e⁻ → Al. Anode: 2O²⁻ → O₂ + 4e⁻.",
            markScheme: [
              "(a) Aluminium is above carbon in the reactivity series",
              "(a) Al₂O₃ too stable / carbon cannot reduce it",
              "(b) Cryolite lowers the melting point (of Al₂O₃)",
              "(b) Saves energy / reduces cost (dissolves the oxide)",
              "(c) Cathode: Al³⁺ + 3e⁻ → Al",
              "(c) Anode: 2O²⁻ → O₂ + 4e⁻",
            ],
            commonError: "Saying cryolite is the electrolyte that provides aluminium ions — it provides none; its only job is to dissolve the oxide and lower the melting point.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "Compare aluminium's position with carbon in the series.",
              "If a metal is above carbon, what extraction is needed?",
              "Cryolite's job is about melting point and energy.",
              "Cathode = reduction (gain of electrons); anode = oxidation.",
            ],
          },
          {
            id: "chem-metals-bq3-04",
            question: "A blast furnace processes 1600 tonnes of haematite that is 80% Fe₂O₃ by mass (the rest is unreactive rock). (Ar: Fe = 56, O = 16)\n(a) Calculate the mass of pure Fe₂O₃ in the ore. [1]\n(b) Calculate the maximum mass of iron that could be extracted. [3]\n(c) The furnace actually produces 784 tonnes of iron. Calculate the percentage yield. [2]",
            marks: 6,
            modelAnswer:
              "(a) Mass of Fe₂O₃ = 80% of 1600 = 0.80 × 1600 = 1280 tonnes.\n\n(b) Mr(Fe₂O₃) = (2×56) + (3×16) = 160. Fraction of Fe₂O₃ that is iron = 112 ÷ 160 = 0.70. Maximum mass of Fe = 0.70 × 1280 = 896 tonnes.\n\n(c) Percentage yield = (actual ÷ maximum) × 100 = (784 ÷ 896) × 100 = 87.5%.",
            markScheme: [
              "(a) 0.80 × 1600 = 1280 tonnes",
              "(b) Mr(Fe₂O₃) = 160 / iron fraction = 112/160 = 0.70",
              "(b) 0.70 × 1280 = 896 tonnes",
              "(b) Correct method (mass × mass fraction of Fe)",
              "(c) (784 ÷ 896) × 100",
              "(c) = 87.5%",
            ],
            commonError: "Forgetting to use only the 80% that is Fe₂O₃ (using the full 1600 t). Also using Mr = 112 (iron only) instead of 160 for Fe₂O₃.",
            guideRef: "Extraction of Metals",
            difficulty: "challenge",
            hints: [
              "First strip out the unreactive rock: take 80% of the ore.",
              "Mass fraction of iron in Fe₂O₃ = 112 ÷ 160.",
              "Maximum Fe = pure Fe₂O₃ × iron fraction.",
              "Percentage yield = actual ÷ maximum × 100.",
            ],
            solutions: [
              {
                label: "Ore purity, theoretical yield, percentage yield",
                steps: [
                  "Pure Fe₂O₃ = 0.80 × 1600 = 1280 t.",
                  "Mr(Fe₂O₃) = 2(56) + 3(16) = 160; iron fraction = 112/160 = 0.70.",
                  "Maximum Fe = 0.70 × 1280 = 896 t.",
                  "Percentage yield = (784 / 896) × 100 = 87.5%.",
                ],
              },
            ],
          },
          {
            id: "chem-metals-bq3-05",
            question: "The graphite anodes in an aluminium electrolysis cell must be replaced regularly, which adds to the running cost.\n(a) Explain, with an equation, why the graphite anodes are consumed. [3]\n(b) The electrolysis of aluminium uses very large amounts of electrical energy. State two reasons why aluminium is still widely used despite this high extraction cost. [2]\n(c) State the approximate energy saving made by recycling aluminium rather than extracting it, and give one further environmental benefit of recycling. [2]",
            marks: 7,
            modelAnswer:
              "(a) Oxygen is produced at the anode (2O²⁻ → O₂ + 4e⁻). At the high operating temperature (~970 °C) this oxygen reacts with the carbon (graphite) of the anode: C + O₂ → CO₂. The anodes are gradually burned away (oxidised) and must be replaced.\n\n(b) Any two of: aluminium has a very low density (lightweight), so it is ideal for aircraft, vehicles and overhead cables; it is resistant to corrosion because of its protective oxide layer; it is a good conductor of electricity and heat; it is malleable and can be rolled into foil. These valuable properties justify the cost.\n\n(c) Recycling aluminium uses only about 5% of the energy needed to extract it from ore (a saving of about 95%). A further environmental benefit: it conserves bauxite ore reserves / reduces mining / reduces CO₂ emissions / reduces waste sent to landfill (any one).",
            markScheme: [
              "(a) Oxygen produced at the anode",
              "(a) Oxygen reacts with hot carbon anode: C + O₂ → CO₂",
              "(a) Anode burned away / oxidised so must be replaced",
              "(b) Two valid property-based reasons (low density / corrosion resistance / conductivity / malleability)",
              "(b) Second valid reason",
              "(c) Recycling uses ~5% of the energy (≈95% saving)",
              "(c) One further benefit (conserves ore / less mining / less CO₂ / less landfill)",
            ],
            commonError: "Saying the anodes 'dissolve in the cryolite'. They do not dissolve — they are burned away by reaction with the oxygen produced at the anode.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "What gas forms at the anode?",
              "The anode is made of carbon — what happens to carbon in hot oxygen?",
              "Justify aluminium's use through its useful properties.",
              "Recall the ~95% energy saving figure for recycling.",
            ],
          },
          {
            id: "chem-metals-bq3-06",
            question: "Explain, in terms of the reactivity series, how the method used to extract a metal depends on the metal's reactivity. Refer to specific metals and methods in your answer. [6]",
            marks: 6,
            modelAnswer:
              "The position of a metal in the reactivity series, relative to carbon, determines how it is extracted.\n\nMetals ABOVE carbon (e.g. potassium, sodium, calcium, magnesium, aluminium) form very stable oxides that carbon cannot reduce. They are extracted by ELECTROLYSIS of their molten compounds. For example, aluminium is extracted by electrolysis of molten aluminium oxide (Al₂O₃) dissolved in cryolite, with Al³⁺ + 3e⁻ → Al at the cathode.\n\nMetals BELOW carbon but above the very unreactive ones (e.g. zinc, iron) can be extracted by REDUCTION WITH CARBON (or carbon monoxide), because carbon is a strong enough reducing agent. For example, iron is extracted in the blast furnace: Fe₂O₃ + 3CO → 2Fe + 3CO₂.\n\nVery UNREACTIVE metals at the bottom of the series (e.g. copper, silver, gold) are found native or in easily decomposed ores, so they need little processing — simple heating or physical separation. In general, the more reactive the metal, the more energy and the more powerful a method is needed to extract it.",
            markScheme: [
              "Extraction method depends on position relative to carbon",
              "Metals above carbon → electrolysis",
              "Named example with method (e.g. aluminium by electrolysis of molten Al₂O₃)",
              "Metals below carbon → reduction with carbon/CO",
              "Named example with equation (e.g. iron: Fe₂O₃ + 3CO → 2Fe + 3CO₂)",
              "Very unreactive metals (Cu/Ag/Au) found native / little processing needed",
            ],
            commonError: "Stating 'reactive metals need electrolysis' without pinning the boundary to carbon. The deciding line is whether the metal is above or below CARBON, not simply 'reactive' or 'unreactive'.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "The key reference point in the series for extraction is carbon.",
              "Above carbon → electrolysis; give aluminium as the example.",
              "Below carbon → reduction with carbon; give iron as the example.",
              "At the very bottom, metals are found native.",
            ],
          },
          {
            id: "chem-metals-bq3-07",
            question: "Zinc can be extracted by reduction of zinc oxide with carbon: ZnO + C → Zn + CO.\n(a) State which substance is oxidised and which is reduced, with reasons. [2]\n(b) Calculate the mass of zinc that can be obtained from 162 g of pure zinc oxide. (Ar: Zn = 65, O = 16, C = 12) [3]\n(c) Suggest why zinc, although below carbon in the reactivity series, is sometimes extracted by electrolysis instead. [1]",
            marks: 6,
            modelAnswer:
              "(a) Zinc oxide is reduced — oxygen is removed from it (ZnO → Zn). Carbon is oxidised — it gains oxygen to form carbon monoxide (C → CO).\n\n(b) Mr(ZnO) = 65 + 16 = 81. Moles of ZnO = 162 ÷ 81 = 2.0 mol. From the equation, 1 mol ZnO → 1 mol Zn, so moles of Zn = 2.0 mol. Mass of Zn = 2.0 × 65 = 130 g.\n\n(c) Electrolysis can produce zinc of higher purity than carbon reduction (carbon reduction can leave impurities / the metal may need further purification for certain uses).",
            markScheme: [
              "(a) ZnO reduced (loses oxygen)",
              "(a) Carbon oxidised (gains oxygen)",
              "(b) Mr(ZnO) = 81 and n(ZnO) = 162 ÷ 81 = 2.0 mol",
              "(b) Ratio ZnO : Zn = 1 : 1, n(Zn) = 2.0 mol",
              "(b) Mass = 2.0 × 65 = 130 g",
              "(c) Electrolysis gives purer zinc (any sensible reason)",
            ],
            commonError: "Reversing oxidation/reduction — remember the metal oxide LOSES oxygen (reduced) while carbon GAINS oxygen (oxidised).",
            guideRef: "Extraction of Metals",
            difficulty: "challenge",
            hints: [
              "Loss of oxygen is reduction; gain of oxygen is oxidation.",
              "Mr(ZnO) = 65 + 16.",
              "moles = mass ÷ Mr; the ZnO : Zn ratio is 1 : 1.",
              "Convert moles of zinc back to mass.",
            ],
            solutions: [
              {
                label: "Mass of zinc from zinc oxide",
                steps: [
                  "Mr(ZnO) = 65 + 16 = 81.",
                  "n(ZnO) = 162 ÷ 81 = 2.0 mol.",
                  "Ratio ZnO : Zn = 1 : 1, so n(Zn) = 2.0 mol.",
                  "m(Zn) = 2.0 × 65 = 130 g.",
                ],
              },
            ],
          },
          {
            id: "chem-metals-bq3-08",
            question: "Copper is a low-reactivity metal that has been used for thousands of years.\n(a) Explain why copper was one of the earliest metals to be extracted and used by humans, whereas aluminium was only isolated in the 19th century. [3]\n(b) Copper(II) oxide can be reduced to copper by heating with carbon: 2CuO + C → 2Cu + CO₂. Calculate the mass of copper produced from 16 g of copper(II) oxide. (Ar: Cu = 64, O = 16) [3]",
            marks: 6,
            modelAnswer:
              "(a) Copper is low in the reactivity series (very unreactive), so it is found native or in ores that are easily reduced by simple heating with charcoal — a method available to early civilisations. Aluminium is high in the reactivity series; its oxide is very stable and cannot be reduced by carbon, so it can only be obtained by electrolysis, which requires a large supply of electricity. Electricity only became available on an industrial scale in the 19th century, so aluminium could not be extracted until then.\n\n(b) Mr(CuO) = 64 + 16 = 80. Moles of CuO = 16 ÷ 80 = 0.20 mol. From the equation, 2 mol CuO → 2 mol Cu (ratio 1 : 1), so moles of Cu = 0.20 mol. Mass of Cu = 0.20 × 64 = 12.8 g.",
            markScheme: [
              "(a) Copper is unreactive / low in series — found native or easily reduced by simple heating",
              "(a) Aluminium high in series / Al₂O₃ too stable for carbon",
              "(a) Aluminium needs electrolysis / electricity, only available from the 19th century",
              "(b) Mr(CuO) = 80, n(CuO) = 16 ÷ 80 = 0.20 mol",
              "(b) Ratio CuO : Cu = 1 : 1, n(Cu) = 0.20 mol",
              "(b) Mass = 0.20 × 64 = 12.8 g",
            ],
            commonError: "In (b), misreading the 2 : 1 coefficients — note CuO : Cu is 2 : 2 = 1 : 1, so the moles of Cu equal the moles of CuO.",
            guideRef: "Extraction of Metals",
            difficulty: "challenge",
            hints: [
              "Link how easy a metal is to extract to its reactivity.",
              "Aluminium needs electricity — when did that become available?",
              "Mr(CuO) = 64 + 16.",
              "The CuO : Cu ratio simplifies to 1 : 1.",
            ],
            solutions: [
              {
                label: "Mass of copper from copper(II) oxide",
                steps: [
                  "Mr(CuO) = 64 + 16 = 80.",
                  "n(CuO) = 16 ÷ 80 = 0.20 mol.",
                  "From 2CuO + C → 2Cu + CO₂, ratio CuO : Cu = 1 : 1, so n(Cu) = 0.20 mol.",
                  "m(Cu) = 0.20 × 64 = 12.8 g.",
                ],
              },
            ],
          },
          {
            id: "chem-metals-bq3-09",
            question: "In the aluminium extraction cell, electrolysis is carried out on the molten oxide rather than an aqueous solution.\n(a) Explain why an aqueous solution of an aluminium salt would not produce aluminium at the cathode. [2]\n(b) State the overall decomposition equation for aluminium oxide during electrolysis. [2]\n(c) Explain why the process is described as reduction at the cathode, referring to electron transfer. [2]",
            marks: 6,
            modelAnswer:
              "(a) In aqueous solution there are H⁺ ions (from water) as well as Al³⁺ ions. Hydrogen is below aluminium in the reactivity series and is easier to reduce, so H⁺ is discharged at the cathode in preference to Al³⁺, producing hydrogen gas instead of aluminium.\n\n(b) 2Al₂O₃ → 4Al + 3O₂ (accept Al₂O₃ → 2Al + 1½O₂).\n\n(c) At the cathode, Al³⁺ ions gain electrons: Al³⁺ + 3e⁻ → Al. Gain of electrons is reduction, so the cathode process is reduction of aluminium ions to aluminium metal.",
            markScheme: [
              "(a) Aqueous solution contains H⁺ (from water) competing with Al³⁺",
              "(a) H⁺ discharged in preference / hydrogen produced not aluminium",
              "(b) 2Al₂O₃ → 4Al + 3O₂ (or correctly balanced equivalent)",
              "(b) Balanced correctly",
              "(c) Al³⁺ + 3e⁻ → Al (gain of electrons)",
              "(c) Gain of electrons = reduction",
            ],
            commonError: "Saying aluminium oxide 'does not dissolve in water'. The deeper reason it must be molten is that, in water, hydrogen would be discharged at the cathode instead of aluminium.",
            guideRef: "Extraction of Metals",
            difficulty: "challenge",
            hints: [
              "In water there is a second cation competing at the cathode.",
              "Which is easier to reduce, H⁺ or Al³⁺?",
              "Balance the overall decomposition of Al₂O₃.",
              "Reduction means gain of electrons.",
            ],
          },
          {
            id: "chem-metals-bq3-10",
            question: "Recycling metals is increasingly important.\n(a) State two general advantages of recycling metals rather than extracting them from ores. [2]\n(b) Steel is the most recycled metal in the world. Explain how steel can be easily separated from other materials in mixed waste. [2]\n(c) Suggest one disadvantage or limitation of recycling metals. [2]",
            marks: 6,
            modelAnswer:
              "(a) Any two of: recycling conserves finite ore reserves / raw materials; it uses much less energy than extraction (lower cost and fewer emissions); it reduces the amount of waste sent to landfill; it reduces mining and the associated environmental damage; it reduces CO₂ emissions.\n\n(b) Steel contains iron, which is magnetic. Therefore steel objects can be separated from non-magnetic materials (such as aluminium, glass and plastic) in mixed waste by using large electromagnets to pick them out.\n\n(c) Any one of: collecting and sorting scrap metal can be costly and labour-intensive; different metals/alloys must be separated to avoid contaminating the recycled metal; recycled metal may contain impurities that limit its uses; the public must cooperate in collecting and sorting waste.",
            markScheme: [
              "(a) One valid advantage (conserves ore / saves energy / less landfill / less CO₂)",
              "(a) A second distinct valid advantage",
              "(b) Steel/iron is magnetic",
              "(b) Separated using electromagnets / magnets from non-magnetic waste",
              "(c) One valid limitation (cost of collecting/sorting / contamination / impurities)",
              "(c) Limitation clearly explained",
            ],
            commonError: "For (c), giving a non-reason such as 'recycling is bad for the environment' — the limitations are practical (sorting, contamination, cost), not environmental harm.",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "core",
            hints: [
              "Recycling saves energy and resources — state two distinct points.",
              "What physical property of iron helps separation?",
              "A magnet pulls steel from mixed waste.",
              "For the limitation, think about sorting and purity.",
            ],
          },
        ],
      },
      {
        id: "chem-metals-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Rusting and prevention, alloys, properties and uses of metals, and recycling.",
        questions: [
          {
            id: "chem-metals-bq4-01",
            question: "Rusting is a serious problem for iron and steel objects.\n(a) State the two substances that must both be present for iron to rust. [1]\n(b) Name the chemical substance that makes up rust. [1]\n(c) Salt water causes iron to rust faster than fresh water. Explain why, making clear that salt is not a reactant. [2]",
            marks: 4,
            modelAnswer:
              "(a) Water and oxygen.\n\n(b) Hydrated iron(III) oxide, Fe₂O₃·xH₂O.\n\n(c) Salt water rusts iron faster because the dissolved salt makes the water a better electrical conductor (a stronger electrolyte). Rusting is an electrochemical process, so improving the conductivity speeds it up. The salt itself is not used up in the reaction (it is not a reactant) — water and oxygen are still the substances that react with the iron.",
            markScheme: [
              "(a) Water and oxygen",
              "(b) (Hydrated) iron(III) oxide / Fe₂O₃·xH₂O",
              "(c) Salt water is a better conductor / electrolyte",
              "(c) Speeds up the electrochemical rusting process (salt not consumed)",
            ],
            commonError: "Claiming that salt reacts with the iron. Salt only accelerates rusting by increasing conductivity; water and oxygen are the actual reactants.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bq4-02",
            question: "Several methods are used to prevent iron and steel from rusting.\n(a) Explain how painting prevents rusting. [2]\n(b) Galvanising is described as giving 'double protection'. Explain the two ways galvanising protects iron. [3]\n(c) Tin-plating protects a steel can only while the layer is intact. Explain why, once scratched, a tin-plated can rusts faster than an unprotected steel can. [2]",
            marks: 7,
            modelAnswer:
              "(a) Paint forms a physical barrier on the surface of the iron, preventing water and oxygen from reaching the metal. Since both water and oxygen are needed for rusting, excluding them stops rust from forming.\n\n(b) Galvanising coats the iron with zinc. First, the zinc acts as a physical barrier, keeping water and oxygen away from the iron. Second, even if the zinc layer is scratched and the iron is exposed, the zinc gives sacrificial protection: zinc is above iron in the reactivity series, so the zinc is oxidised in preference to the iron and corrodes first, protecting the iron.\n\n(c) Tin is below iron in the reactivity series. While the tin layer is intact it acts as a barrier, but if it is scratched, the exposed iron is now in contact with a less reactive metal (tin). The iron becomes the more reactive metal of the pair, so it is oxidised preferentially and actually rusts FASTER than it would on its own.",
            markScheme: [
              "(a) Paint is a physical barrier",
              "(a) Excludes water and/or oxygen, so rusting cannot occur",
              "(b) Zinc acts as a physical barrier",
              "(b) Zinc also gives sacrificial protection (more reactive than iron)",
              "(b) Zinc oxidised in preference even when scratched",
              "(c) Tin is less reactive than iron",
              "(c) When scratched, iron becomes the more reactive metal and rusts faster",
            ],
            commonError: "Treating tin-plating and galvanising as equivalent. They differ because zinc is more reactive than iron (sacrificial) while tin is less reactive (barrier only, and harmful once scratched).",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "core",
            hints: [
              "Paint works by keeping out the two things needed for rust.",
              "Galvanising uses zinc — list both barrier and sacrificial roles.",
              "Compare the reactivity of zinc and tin with iron.",
              "If the coating metal is LESS reactive than iron, what happens when it is scratched?",
            ],
          },
          {
            id: "chem-metals-bq4-03",
            question: "Underground steel pipelines are protected by attaching blocks of magnesium at intervals along the pipe.\n(a) Name this method of rust prevention. [1]\n(b) Explain, in terms of the reactivity series and electron transfer, how the magnesium protects the steel. [3]\n(c) Over time the magnesium blocks must be replaced. Explain why. [2]",
            marks: 6,
            modelAnswer:
              "(a) Sacrificial protection.\n\n(b) Magnesium is above iron in the reactivity series, so it is more reactive and loses electrons more readily. When the pipeline and magnesium are both in contact with water and oxygen in the soil, the magnesium is oxidised in preference to the iron (Mg → Mg²⁺ + 2e⁻). The iron is therefore not oxidised, so it does not rust — the magnesium is 'sacrificed' instead.\n\n(c) Because the magnesium is continually being oxidised/corroded (sacrificed) in place of the iron, the blocks gradually get smaller and are eventually used up. They must be replaced so that sacrificial protection continues.",
            markScheme: [
              "(a) Sacrificial protection",
              "(b) Magnesium is above iron / more reactive",
              "(b) Magnesium is oxidised in preference: Mg → Mg²⁺ + 2e⁻",
              "(b) Iron is not oxidised, so does not rust",
              "(c) Magnesium is gradually corroded/used up (sacrificed)",
              "(c) Must be replaced to maintain protection",
            ],
            commonError: "Saying the magnesium 'covers' the pipe or forms a barrier — these blocks are bolted on at intervals, so the protection is sacrificial (electrochemical), not a barrier.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "core",
            hints: [
              "This method uses a more reactive metal attached to the iron.",
              "Compare magnesium and iron in the series.",
              "Write the oxidation half-equation for magnesium.",
              "The protecting metal is consumed over time.",
            ],
          },
          {
            id: "chem-metals-bq4-04",
            question: "Pure copper is too soft for many uses, so it is often made into alloys such as brass (copper and zinc) and bronze (copper and tin).\n(a) Explain, in terms of atoms and layers, why pure copper is soft. [2]\n(b) Explain why brass is harder than pure copper. [3]\n(c) Bronze was historically more important than pure copper for making tools and weapons. Suggest why. [1]",
            marks: 6,
            modelAnswer:
              "(a) In pure copper, all the atoms are the same size and are arranged in regular layers. When a force is applied, these layers can slide over one another easily (the metallic bonding is maintained as the electron sea adjusts), so pure copper is soft and easily bent.\n\n(b) Brass contains zinc atoms, which are a different size from copper atoms. These differently sized atoms distort the regular lattice and disrupt the ordered layers. This makes it much harder for the layers to slide over one another, so brass is harder and stronger than pure copper.\n\n(c) Bronze is harder and stronger than pure copper, so it keeps a sharper edge and is more durable — making it far more useful for tools and weapons.",
            markScheme: [
              "(a) Pure copper has identical atoms in regular layers",
              "(a) Layers slide easily over one another → soft",
              "(b) Zinc atoms are a different size from copper atoms",
              "(b) They distort the lattice / disrupt the regular layers",
              "(b) Layers cannot slide as easily → harder/stronger",
              "(c) Bronze is harder/stronger/more durable (keeps an edge)",
            ],
            commonError: "Saying alloys are harder 'because two metals bond more strongly'. The correct reason is that different-sized atoms disrupt the sliding of layers.",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "core",
            hints: [
              "What allows layers in a pure metal to slide?",
              "What is different about the atoms in an alloy?",
              "Different-sized atoms block the sliding of layers.",
              "Harder material = better tools and weapons.",
            ],
          },
          {
            id: "chem-metals-bq4-05",
            question: "For each use below, name a suitable metal or alloy and link it to a specific property:\n(a) overhead electricity power cables [2]\n(b) cutlery and surgical instruments [2]\n(c) the base of a saucepan [2]",
            marks: 6,
            modelAnswer:
              "(a) Aluminium — it is a good electrical conductor and has a low density, so the cables are light and do not sag too much between pylons (a steel core is added for strength).\n\n(b) Stainless steel — it is hard and, because it contains chromium, it is resistant to corrosion/rusting, so cutlery and surgical instruments stay clean, sharp and hygienic.\n\n(c) Copper — it is an excellent conductor of heat, so it spreads heat quickly and evenly across the base of the pan. (Accept aluminium for low density / good heat conduction.)",
            markScheme: [
              "(a) Aluminium named",
              "(a) Linked to good electrical conductivity AND/OR low density",
              "(b) Stainless steel named",
              "(b) Linked to corrosion resistance (and hardness)",
              "(c) Copper (or aluminium) named",
              "(c) Linked to good thermal/heat conductivity",
            ],
            commonError: "Giving vague reasons such as 'it is a good metal' or 'it is strong' without naming the specific property that matches the use.",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bq4-06",
            question: "A student investigates rusting using four boiling tubes, each containing an iron nail:\n- Tube A: dry air only (drying agent present)\n- Tube B: tap water that has been boiled, then sealed with a layer of oil\n- Tube C: tap water open to the air\n- Tube D: salty tap water open to the air\n(a) Predict which tube(s) will show rusting, and explain your prediction for tubes A and B. [3]\n(b) Compare the extent of rusting expected in tubes C and D, and explain the difference. [2]\n(c) State one variable the student should keep the same to make the comparison between C and D fair. [1]",
            marks: 6,
            modelAnswer:
              "(a) Tubes C and D will show rusting; tubes A and B will not. Tube A has oxygen but no water (the drying agent removes water vapour), so rusting cannot occur. Tube B has water but no oxygen — boiling removes the dissolved oxygen and the oil layer stops air re-dissolving — so again rusting cannot occur. Both water and oxygen are needed.\n\n(b) Tube D (salty water) will rust more than tube C (fresh water). The dissolved salt makes the water a better conductor (electrolyte), which speeds up the electrochemical rusting process, so D rusts faster/more.\n\n(c) Any one of: use identical (same size/mass/type) iron nails; same volume of water; same temperature; same surface area of nail; same time period.",
            markScheme: [
              "(a) C and D rust; A and B do not",
              "(a) Tube A: oxygen present but no water → no rust",
              "(a) Tube B: water present but no oxygen → no rust",
              "(b) D rusts more than C",
              "(b) Salt increases conductivity/electrolyte → faster rusting",
              "(c) One valid control variable (same nail / volume / temperature / time)",
            ],
            commonError: "Saying tube B will rust because it contains water — but the water has been boiled to remove dissolved oxygen and sealed with oil, so there is no oxygen available.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "core",
            hints: [
              "Rusting needs BOTH water and oxygen.",
              "Decide what is present and absent in each tube.",
              "Salt does not react but it speeds rusting up — why?",
              "A fair test keeps everything else the same.",
            ],
            strategy: "Treat each tube as a controlled test of one condition",
          },
          {
            id: "chem-metals-bq4-07",
            question: "Stainless steel is an alloy of iron with chromium and nickel, and it does not rust.\n(a) State what is meant by an alloy. [1]\n(b) Explain why stainless steel does not rust, even though it is mostly iron. [3]\n(c) Ordinary steel (iron + carbon) is used for car bodies even though it can rust. Suggest two reasons why ordinary steel is chosen for this use despite this drawback. [2]",
            marks: 6,
            modelAnswer:
              "(a) An alloy is a mixture of a metal with one or more other elements (metals or non-metals), with composition that can vary.\n\n(b) The chromium in stainless steel reacts with oxygen to form a thin, dense, strongly adherent layer of chromium oxide on the surface. This oxide layer is impermeable and seals the surface, preventing water and oxygen from reaching the iron beneath, so the iron cannot rust. (The layer is self-repairing if scratched.)\n\n(c) Any two of: ordinary steel is much cheaper than stainless steel; it is strong and able to absorb impact (protecting passengers); it is malleable and can be pressed into the complex shapes of car panels; the rusting can be controlled by painting/coating the steel.",
            markScheme: [
              "(a) Alloy = mixture of a metal with one or more other elements",
              "(b) Chromium forms a (chromium) oxide layer on the surface",
              "(b) The layer is dense/adherent/impermeable",
              "(b) It excludes water and oxygen from the iron, preventing rust",
              "(c) One valid reason (cheaper / strong / malleable / can be painted)",
              "(c) A second distinct valid reason",
            ],
            commonError: "Saying stainless steel 'has no iron so cannot rust' — it is mostly iron; it resists rust because of the protective chromium oxide layer.",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "challenge",
            hints: [
              "Define alloy precisely (mixture, not compound).",
              "Chromium forms a protective oxide layer — describe it.",
              "Link the layer to keeping out water and oxygen.",
              "For (c), think about cost and how car panels are made.",
            ],
          },
          {
            id: "chem-metals-bq4-08",
            question: "Aluminium and iron are two of the most widely used metals, but they corrode very differently.\n(a) Explain why aluminium does not corrode away completely in air, even though it is more reactive than iron. [3]\n(b) Explain why iron, although less reactive, can corrode away completely if left untreated. [2]\n(c) Use this comparison to explain why aluminium does not need to be painted for protection but car bodies made of steel do. [2]",
            marks: 7,
            modelAnswer:
              "(a) Aluminium reacts quickly with oxygen to form a thin, dense, strongly adherent layer of aluminium oxide (Al₂O₃) on its surface. This impermeable layer seals the surface and stops oxygen and water reaching the metal beneath, so corrosion does not continue — the metal is protected by its own oxide (passivation).\n\n(b) The rust (hydrated iron(III) oxide) formed on iron is flaky and porous, not adherent. It flakes off and continually exposes fresh iron to water and oxygen, so corrosion keeps going and the iron can eventually corrode away completely.\n\n(c) Aluminium protects itself with its dense oxide layer, so it needs no extra coating. Steel forms only flaky, non-protective rust, so it must be given an additional barrier (paint) to keep water and oxygen away and prevent it rusting away.",
            markScheme: [
              "(a) Aluminium forms an Al₂O₃ layer",
              "(a) The layer is thin/dense/adherent/impermeable",
              "(a) It prevents further oxygen/water reaching the metal (passivation)",
              "(b) Rust is flaky/porous/non-adherent",
              "(b) It flakes off exposing fresh iron, so corrosion continues",
              "(c) Aluminium self-protects so needs no paint; steel's rust is non-protective so needs a barrier (paint)",
            ],
            commonError: "Assuming a more reactive metal must corrode more in practice. Aluminium is more reactive yet corrodes less because its oxide is protective, whereas iron's rust is not.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "challenge",
            hints: [
              "Aluminium forms a protective oxide — describe its texture.",
              "Rust has a very different texture from aluminium oxide.",
              "A flaky layer keeps exposing fresh metal.",
              "Link the protective vs non-protective oxides to the need for paint.",
            ],
            strategy: "Contrast the two oxide layers, then apply the contrast to the real-world choice",
          },
          {
            id: "chem-metals-bq4-09",
            question: "Recycling aluminium is far more energy-efficient than extracting it from bauxite.\n(a) State the approximate percentage of the extraction energy that recycling uses. [1]\n(b) Explain, in terms of the extraction process, why recycling aluminium saves so much energy. [3]\n(c) Give two reasons, other than energy saving, why recycling aluminium is beneficial. [2]",
            marks: 6,
            modelAnswer:
              "(a) About 5% (i.e. recycling saves around 95% of the energy).\n\n(b) Extracting aluminium from bauxite requires electrolysis of molten aluminium oxide, which uses a very large amount of electrical energy to decompose the very stable oxide and to keep it molten at around 970 °C. Recycling does not involve electrolysis at all — the aluminium is already a metal, so it only needs to be melted down and re-cast. Melting the metal requires far less energy than electrolysing the oxide, so much energy is saved.\n\n(c) Any two of: it conserves limited bauxite ore reserves; it reduces the environmental damage caused by mining; it reduces CO₂ and other emissions associated with electrolysis; it reduces the amount of waste sent to landfill.",
            markScheme: [
              "(a) About 5% (≈95% saving)",
              "(b) Extraction uses electrolysis, which needs very large amounts of electrical energy",
              "(b) The stable oxide must be decomposed / kept molten at high temperature",
              "(b) Recycling only melts the metal (no electrolysis), so uses far less energy",
              "(c) One further benefit (conserves ore / less mining / less CO₂ / less landfill)",
              "(c) A second distinct benefit",
            ],
            commonError: "Explaining the saving only as 'recycling is greener' without linking it to avoiding the energy-intensive electrolysis step.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "Recall the ~5% figure.",
              "What energy-hungry process is used to extract aluminium?",
              "Recycling skips electrolysis — what is left to do?",
              "List non-energy benefits such as conserving ore.",
            ],
          },
          {
            id: "chem-metals-bq4-10",
            question: "A company must choose between using pure iron, mild steel (low-carbon steel) and stainless steel for three different products: (i) a kitchen sink, (ii) the structural beams of a building, (iii) a decorative item that will be bent into shape by hand.\n(a) Recommend a suitable material for EACH product, giving a clear property-based reason. [3]\n(b) Explain why pure iron is rarely used for structural purposes, even though it is cheap. [2]\n(c) Suggest why the company would not make all three products from stainless steel even though it does not rust. [2]",
            marks: 7,
            modelAnswer:
              "(a)(i) Kitchen sink: stainless steel, because it is hard, durable and resists corrosion/rusting in contact with water — important for a sink. (ii) Structural beams: mild steel, because it is strong and hard (much stronger than pure iron) and relatively cheap, suitable for load-bearing construction. (iii) Decorative item bent by hand: pure iron (or a very low-carbon, soft material), because it is soft and malleable, so it can be bent into shape easily by hand.\n\n(b) Pure iron is too soft and not strong enough — its identical atoms allow the layers to slide easily, so beams made of pure iron would bend or deform under load. Mild steel (an alloy) is much stronger, so it is used instead.\n\n(c) Stainless steel is much more expensive than mild steel (it contains chromium and nickel). Using it for beams and decorative items where rust resistance is less critical would add unnecessary cost, so the company chooses cheaper materials where corrosion resistance is not essential.",
            markScheme: [
              "(a)(i) Stainless steel for sink — corrosion resistant / hard",
              "(a)(ii) Mild steel for beams — strong/hard and cheap",
              "(a)(iii) Pure iron for decorative item — soft/malleable, easily bent",
              "(b) Pure iron is too soft (layers slide easily)",
              "(b) Not strong enough for load-bearing / mild steel used instead",
              "(c) Stainless steel is more expensive (chromium/nickel)",
              "(c) Unnecessary cost where rust resistance is not essential",
            ],
            commonError: "Recommending stainless steel for everything because 'it does not rust'. Material choice must balance the required property against cost — stainless steel is expensive and not always needed.",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "challenge",
            hints: [
              "Match each product to the property it most needs.",
              "A sink meets water constantly — corrosion resistance matters.",
              "Beams must bear loads — strength matters.",
              "Balance the ideal property against cost for part (c).",
            ],
            strategy: "Select materials by matching the dominant required property, then weigh cost",
          },
        ],
      },
    ],
  },
};
