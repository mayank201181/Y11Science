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
        id: "chem-metals-bank-mcq-1",
        title: "Metals — MCQ Paper 1",
        description: "Reactivity series, reactions with water/acid, displacement reactions.",
        questions: [
          {
            id: "chem-metals-bank-mcq1-q01",
            question: "Which metal reacts with steam but NOT with cold water?",
            options: ["Potassium", "Sodium", "Magnesium", "Copper"],
            answerIndex: 2,
            explanation: "Magnesium is reactive enough to reduce steam but too slow to react noticeably with cold water. K and Na both react vigorously with cold water. Copper does not react with water or steam.",
            guideRef: "The Reactivity Series",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bank-mcq1-q02",
            question: "Which equation correctly represents a displacement reaction?",
            options: [
              "Cu + ZnSO₄ → CuSO₄ + Zn",
              "Zn + CuSO₄ → ZnSO₄ + Cu",
              "Fe + MgSO₄ → FeSO₄ + Mg",
              "Ag + FeSO₄ → AgSO₄ + Fe",
            ],
            answerIndex: 1,
            explanation: "Zinc is more reactive than copper, so Zn displaces Cu from CuSO₄: Zn + CuSO₄ → ZnSO₄ + Cu. In option A, copper is less reactive than zinc and cannot displace it. Options C and D also have the less reactive metal trying to displace the more reactive one.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bank-mcq1-q03",
            question: "A student adds pieces of zinc to dilute hydrochloric acid. Which observation is correct?",
            options: [
              "No reaction occurs because zinc is below hydrogen in the reactivity series.",
              "Bubbles of oxygen are produced and the zinc dissolves.",
              "Bubbles of hydrogen are produced and the zinc dissolves.",
              "The solution turns blue.",
            ],
            answerIndex: 2,
            explanation: "Zinc is above hydrogen in the reactivity series, so it reacts with dilute HCl: Zn + 2HCl → ZnCl₂ + H₂. Hydrogen gas bubbles are produced and the zinc metal dissolves. The solution does not turn blue (that would suggest copper ions).",
            guideRef: "The Reactivity Series",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bank-mcq1-q04",
            question: "The reactivity of metals can be deduced from their reactions with water. Which list correctly orders the metals from most to least reactive based on their reactions with water?",
            options: [
              "Mg > Ca > Na > K",
              "K > Na > Ca > Mg",
              "Ca > Mg > Na > K",
              "Na > K > Mg > Ca",
            ],
            answerIndex: 1,
            explanation: "The correct order is K > Na > Ca > Mg. Potassium reacts most explosively with cold water, sodium reacts vigorously (fizzing, catching fire), calcium reacts steadily, and magnesium reacts very slowly with cold water (but rapidly with steam).",
            guideRef: "The Reactivity Series",
            difficulty: "core",
            hints: [
              "Recall which metals react with cold water and which react only with steam.",
              "The more vigorous the reaction with cold water, the higher the metal's position in the reactivity series.",
              "K reacts explosively, Na ignites, Ca fizzes steadily, Mg barely reacts with cold water.",
            ],
          },
          {
            id: "chem-metals-bank-mcq1-q05",
            question: "Metal X does not react with dilute acid and does not corrode in air. Metal Y reacts vigorously with cold water. When Y is added to a solution of a salt of X, a reaction occurs. Which statement is correct?",
            options: [
              "X is more reactive than Y.",
              "Y is displaced from solution by X.",
              "Y displaces X from the salt solution.",
              "No reaction occurs because Y is too reactive.",
            ],
            answerIndex: 2,
            explanation: "Y reacts with cold water (very reactive — above Ca in the series). X doesn't react with acid or corrode (very unreactive — likely below H). Since Y is more reactive than X, Y displaces X from the salt solution. Option B is the reverse, which is incorrect.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "core",
            hints: [
              "Identify where X and Y sit in the reactivity series from the clues given.",
              "X doesn't react with acid → X is below hydrogen in the series.",
              "Y reacts vigorously with cold water → Y is above calcium in the series.",
              "A more reactive metal (Y) displaces a less reactive metal (X) from its salt solution.",
            ],
          },
          {
            id: "chem-metals-bank-mcq1-q06",
            question: "An experiment measures the temperature rise when different metals are added in excess to the same volume of dilute hydrochloric acid. The results are: Fe: +8 °C, Mg: +35 °C, Zn: +15 °C. Based on this data, what is the order of reactivity from most to least reactive?",
            options: [
              "Fe > Zn > Mg",
              "Mg > Fe > Zn",
              "Mg > Zn > Fe",
              "Zn > Mg > Fe",
            ],
            answerIndex: 2,
            explanation: "A greater temperature rise indicates a more vigorous (exothermic) reaction, reflecting higher reactivity. Mg produced the greatest temperature rise (+35 °C), then Zn (+15 °C), then Fe (+8 °C). Order: Mg > Zn > Fe — this matches the reactivity series.",
            guideRef: "The Reactivity Series",
            difficulty: "core",
            hints: [
              "A more reactive metal reacts more vigorously with acid, releasing more heat (larger temperature rise).",
              "Rank the temperature rises from largest to smallest.",
              "The metal with the largest ΔT is the most reactive.",
            ],
            strategy: "Use temperature rise as a proxy for reaction rate and reactivity",
          },
        ],
      },
      {
        id: "chem-metals-bank-mcq-2",
        title: "Metals — MCQ Paper 2",
        description: "Extraction, rusting, alloys, uses and recycling.",
        questions: [
          {
            id: "chem-metals-bank-mcq2-q01",
            question: "In the electrolytic extraction of aluminium, which product forms at the cathode?",
            options: ["Oxygen gas", "Aluminium metal", "Carbon dioxide", "Aluminium oxide"],
            answerIndex: 1,
            explanation: "At the cathode (negative electrode), Al³⁺ ions are reduced: Al³⁺ + 3e⁻ → Al. Liquid aluminium sinks to the bottom of the cell. Oxygen forms at the anode (positive electrode).",
            guideRef: "Extraction of Metals",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bank-mcq2-q02",
            question: "Which of the following correctly describes the process of galvanising?",
            options: [
              "Coating iron with tin to prevent rusting",
              "Coating iron with zinc to prevent rusting",
              "Attaching magnesium blocks to iron to prevent rusting",
              "Passing an electric current through iron to prevent rusting",
            ],
            answerIndex: 1,
            explanation: "Galvanising is the process of coating iron or steel with a layer of zinc. The zinc layer acts as a physical barrier and also provides sacrificial protection because zinc is above iron in the reactivity series.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "warmup",
          },
          {
            id: "chem-metals-bank-mcq2-q03",
            question: "The graphite anodes in the aluminium extraction cell must be replaced regularly. Why?",
            options: [
              "They dissolve in the molten cryolite mixture.",
              "They react with the aluminium produced at the cathode.",
              "They react with the oxygen produced at the anode and burn away.",
              "They become negatively charged and stop functioning.",
            ],
            answerIndex: 2,
            explanation: "At the anode, oxide ions are oxidised to produce oxygen: 2O²⁻ → O₂ + 4e⁻. At the high temperatures inside the cell, this oxygen attacks the graphite (carbon) anode: C + O₂ → CO₂. The anodes gradually burn away and must be replaced periodically.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "What gas is produced at the anode during aluminium electrolysis?",
              "Consider what happens when oxygen reacts with carbon at high temperature.",
              "C + O₂ → CO₂ at high temperatures — the anode is made of carbon (graphite).",
            ],
          },
          {
            id: "chem-metals-bank-mcq2-q04",
            question: "Brass is an alloy of copper and zinc. Which property makes brass more suitable than pure copper for use in door handles?",
            options: [
              "Brass is a better electrical conductor than copper.",
              "Brass is harder and more resistant to wear than pure copper.",
              "Brass is less dense than pure copper.",
              "Brass melts at a higher temperature than pure copper.",
            ],
            answerIndex: 1,
            explanation: "Brass is harder than pure copper because the zinc atoms have a different size from copper atoms, disrupting the regular lattice and preventing layers from sliding. This makes brass more resistant to wear and scratching — important for door handles. Brass is not a better conductor than copper.",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "core",
            hints: [
              "Think about what makes alloys harder than their component pure metals.",
              "Door handles need to resist scratching and wear over time — which property is most relevant?",
            ],
          },
          {
            id: "chem-metals-bank-mcq2-q05",
            question: "A student sets up three experiments to investigate rusting:\n- Tube 1: iron nail in dry air (silica gel present)\n- Tube 2: iron nail in boiled water sealed with oil\n- Tube 3: iron nail in normal tap water open to air\n\nAfter two weeks, only the nail in Tube 3 has rusted. What conclusion can be drawn?",
            options: [
              "Only water is needed for rusting.",
              "Only oxygen is needed for rusting.",
              "Both water and oxygen are required for rusting.",
              "Carbon dioxide causes rusting.",
            ],
            answerIndex: 2,
            explanation: "Tube 1 has oxygen but no water (dry air) — no rust. Tube 2 has water but no dissolved oxygen (boiled water, sealed with oil to exclude air) — no rust. Tube 3 has both water and oxygen — rusts. The conclusion is that BOTH water AND oxygen are required simultaneously for rusting.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "core",
            hints: [
              "Compare what is present/absent in each tube.",
              "Tube 1: oxygen yes, water no. Tube 2: water yes, oxygen no. Tube 3: both present.",
              "Rust only appears where both conditions are met.",
            ],
            strategy: "Use controlled variables — identify what each tube tests",
          },
          {
            id: "chem-metals-bank-mcq2-q06",
            question: "The table shows data for four metals W, X, Y, Z:\n\nW: reacts with cold water; found as carbonate ore; extracted by electrolysis.\nX: reacts with steam; found as oxide ore; extracted by reduction with carbon.\nY: reacts with dilute HCl; found as sulfide ore; extraction involves roasting then reduction with carbon.\nZ: found as native element; does not react with dilute HCl.\n\nUsing only these data, which order correctly gives decreasing reactivity?",
            options: ["W > X > Y > Z", "Z > Y > X > W", "X > W > Z > Y", "W > Z > X > Y"],
            answerIndex: 0,
            explanation: "W reacts with cold water → very reactive (above Ca). X reacts with steam but not cold water → moderately reactive (between Ca and H, like Mg). Y reacts with dilute HCl but not water → less reactive (between Mg and H, like Zn or Fe). Z is found native and doesn't react with acid → very unreactive (below H, like Cu or Au). Order: W > X > Y > Z.",
            guideRef: "The Reactivity Series",
            difficulty: "challenge",
            hints: [
              "Use each observation to place the metal in a section of the reactivity series.",
              "Reacts with cold water → above Ca. Reacts with steam only → between Ca and H. Reacts with dilute acid only → between Mg and H. No reaction with acid → below H.",
              "Extraction method also confirms position: electrolysis → above C; reduction with carbon → below C.",
              "W is extracted by electrolysis (above C) and reacts with water (above Ca) → most reactive.",
            ],
            strategy: "Build a reactivity ranking from multiple independent pieces of evidence",
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "chem-metals-bank-qa-1",
        title: "Metals — Structured Questions Paper 1",
        description: "Reactivity series evidence, displacement, and rusting prevention.",
        questions: [
          {
            id: "chem-metals-bank-qa1-q01",
            question: "The reactivity series can be determined by observing reactions of metals with water and dilute acids.\n(a) Write a balanced equation, including state symbols, for the reaction of sodium with cold water. [2]\n(b) Calcium also reacts with cold water. A student claims that sodium is more reactive than calcium based on the observation that sodium reacts more vigorously. Describe one further piece of experimental evidence that could support this ordering. [2]\n(c) Iron reacts with steam but not with cold water. Write a balanced equation for this reaction. [2]",
            marks: 6,
            modelAnswer:
              "(a) 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)\n\n(b) Any one of: React both metals with the same dilute acid and measure the temperature rise — sodium should give a larger temperature rise. OR collect and measure the volume of hydrogen gas produced per unit time — sodium produces gas faster. OR observe that sodium ignites/melts on the water surface whereas calcium simply fizzes steadily.\n\n(c) 3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)",
            markScheme: [
              "(a) 2Na + 2H₂O → 2NaOH + H₂",
              "(a) Correct state symbols: (s), (l), (aq), (g)",
              "(b) Any valid comparative experiment: temperature rise / rate of gas production / vigour of reaction in acid / visual observation with water",
              "(b) Prediction stated (sodium gives larger/faster result)",
              "(c) 3Fe + 4H₂O → Fe₃O₄ + 4H₂ (balanced)",
              "(c) State symbols: 3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)",
            ],
            commonError: "Students write H₂O(l) instead of H₂O(g) for the steam reaction with iron — steam is a gas, not a liquid. Also, NaOH is often omitted from the sodium + water equation.",
            guideRef: "The Reactivity Series",
            difficulty: "core",
            hints: [
              "Recall the products of sodium + water: a metal hydroxide and a gas.",
              "Balance by making Na atoms equal on both sides first.",
              "For part (b), think about what you could measure to compare two reactions.",
              "For part (c), iron reacts with steam to form an iron oxide and hydrogen gas.",
            ],
          },
          {
            id: "chem-metals-bank-qa1-q02",
            question: "A student places a piece of magnesium ribbon into blue copper sulfate solution.\n(a) State two observations the student would make. [2]\n(b) Write an ionic equation for this displacement reaction. [2]\n(c) State which species is oxidised and which is reduced in this reaction. Explain your answer in terms of electron transfer. [3]\n(d) The student now tries the reverse — placing copper metal into magnesium sulfate solution. State and explain whether a reaction occurs. [2]",
            marks: 9,
            modelAnswer:
              "(a) The blue colour of the solution fades/disappears (copper ions are removed from solution). A grey/pink solid (copper metal) deposits on the magnesium surface. The magnesium ribbon becomes coated with copper and may dissolve/decrease in size. The solution warms up (exothermic).\n\n(b) Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s)\n\n(c) Magnesium is oxidised: Mg → Mg²⁺ + 2e⁻ (magnesium loses electrons). Cu²⁺ is reduced: Cu²⁺ + 2e⁻ → Cu (copper ions gain electrons).\n\n(d) No reaction occurs. Copper is below magnesium in the reactivity series, so copper is less reactive than magnesium. A less reactive metal cannot displace a more reactive metal from its salt solution — copper cannot displace magnesium.",
            markScheme: [
              "(a) Blue colour fades / decolourises",
              "(a) Reddish-brown / pink solid forms on magnesium / copper deposits",
              "(b) Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s) — correct ionic equation",
              "(c) Mg is oxidised — loses electrons (Mg → Mg²⁺ + 2e⁻)",
              "(c) Cu²⁺ is reduced — gains electrons (Cu²⁺ + 2e⁻ → Cu)",
              "(d) No reaction",
              "(d) Copper is less reactive than magnesium / below Mg in reactivity series so cannot displace it",
            ],
            commonError: "Many students say 'copper is oxidised' — but in this reaction copper ions are REDUCED (they gain electrons to become copper atoms). The metal that dissolves (Mg) is the one being oxidised.",
            guideRef: "Displacement Reactions and Links to Extraction",
            difficulty: "core",
            hints: [
              "Magnesium is above copper in the reactivity series — predict whether displacement occurs.",
              "Displacement = colour change in solution + solid deposit forming.",
              "The ionic equation shows only the species that change — spectator ions (SO₄²⁻) are omitted.",
              "Oxidation = loss of electrons; reduction = gain of electrons. Which species loses electrons here?",
            ],
            strategy: "Write ionic half-equations to identify oxidation and reduction separately",
          },
          {
            id: "chem-metals-bank-qa1-q03",
            question: "Iron undergoes corrosion (rusting) to form Fe₂O₃·xH₂O.\n(a) State the two substances that must both be present for rusting to occur. [1]\n(b) Explain why painting a steel car body prevents rusting. [2]\n(c) A steel pipeline is buried underground. Blocks of magnesium are attached to the pipeline at intervals. Explain, using the reactivity series, how the magnesium blocks protect the pipeline from rusting. [3]\n(d) A student suggests that attaching copper blocks to the pipeline would work equally well. Evaluate this suggestion. [2]",
            marks: 8,
            modelAnswer:
              "(a) Water and oxygen.\n\n(b) Paint provides a physical barrier that excludes (prevents contact with) both water and oxygen. Without water and oxygen reaching the iron surface, the conditions for rusting are not met.\n\n(c) Magnesium is above iron in the reactivity series, meaning it is more reactive. When both magnesium and iron are in contact with water and oxygen in the soil, magnesium is preferentially oxidised (Mg → Mg²⁺ + 2e⁻) rather than iron. The magnesium acts as a sacrificial anode — it corrodes instead of the iron, protecting the pipeline. This works even if the pipeline is scratched or has gaps in any protective coating.\n\n(d) This would not work. Copper is below iron in the reactivity series, meaning copper is less reactive than iron. Copper would not be oxidised preferentially — iron would still corrode. To provide sacrificial protection, the attached metal must be MORE reactive than iron, not less reactive.",
            markScheme: [
              "(a) Water and oxygen",
              "(b) Paint is a physical barrier / excludes water and/or oxygen from the iron surface",
              "(b) Without water AND oxygen, rusting cannot occur",
              "(c) Magnesium is above iron in the reactivity series / more reactive than iron",
              "(c) Magnesium is preferentially oxidised / corrodes instead of iron",
              "(c) Iron is protected even when the pipe surface is exposed (sacrificial protection)",
              "(d) Copper is less reactive than iron / below Fe in the reactivity series",
              "(d) Copper would not be preferentially oxidised / iron would still rust — suggestion is incorrect",
            ],
            commonError: "In part (c), students often just say 'magnesium reacts with oxygen' without explaining the competition (preferential oxidation). The key word is 'preferentially' — magnesium is oxidised INSTEAD of iron.",
            guideRef: "Rusting of Iron and Prevention",
            difficulty: "core",
            hints: [
              "Part (b): what does paint do physically to prevent rusting?",
              "Part (c): compare the positions of Mg and Fe in the reactivity series.",
              "If two metals are in contact, the more reactive one is oxidised first.",
              "Part (d): think about whether copper is above or below iron in the reactivity series.",
            ],
          },
          {
            id: "chem-metals-bank-qa1-q04",
            question: "The table gives properties of five metals A–E. Use these data to answer the questions.\n\nMetal A: reacts vigorously with cold water; extracted by electrolysis.\nMetal B: reacts slowly with steam; extracted by reduction with carbon.\nMetal C: reacts rapidly with dilute HCl; extracted by reduction with carbon; used in galvanising.\nMetal D: does not react with dilute HCl; found native; used in jewellery.\nMetal E: reacts with cold water (moderate); extracted by electrolysis; used in aircraft frames.\n\n(a) Identify the most likely identity of metal C and metal D, with reasons. [4]\n(b) Explain why metals A and E require electrolysis for extraction but metal B does not. [3]\n(c) Explain what the data suggest about the position of metal E relative to metal A in the reactivity series, and suggest a reason why metal E objects do not corrode easily in everyday life despite its position in the series. [3]",
            marks: 10,
            modelAnswer:
              "(a) Metal C is most likely zinc (Zn). Reasons: reacts with dilute HCl (above H in series); extracted by reduction with carbon (below C in series); used in galvanising, which is a well-known use of zinc.\n\nMetal D is most likely gold (Au) or silver (Ag). Reasons: does not react with dilute HCl (below H in series); found as a native element (very unreactive); used in jewellery (requires corrosion resistance and aesthetic appeal).\n\n(b) Metals A and E are extracted by electrolysis, which means they must both be above carbon in the reactivity series — their oxides are too stable to be reduced by carbon. The electrical energy in electrolysis provides enough energy to decompose the oxide. Metal B is extracted by reduction with carbon, meaning B is below carbon in the series; carbon acts as a reducing agent and reduces the metal oxide to the metal at achievable temperatures. Electrolysis is not needed for B because carbon is a cheaper and sufficient reducing agent.\n\n(c) Metal E reacts with cold water (moderate rate), suggesting it is above calcium or around the Ca–Mg region — and its extraction by electrolysis confirms it is above carbon. Since A also reacts with cold water vigorously and is extracted by electrolysis, A is likely above E (A is more reactive). E is most likely aluminium. Although Al is highly reactive by the series, aluminium forms a very thin, dense, and adherent layer of Al₂O₃ on its surface that acts as a passivation layer, preventing further reaction with oxygen or water. This 'self-protecting' oxide layer explains why aluminium objects appear corrosion-resistant despite aluminium's high reactivity.",
            markScheme: [
              "(a) C is zinc — reacts with HCl (above H), reduced by carbon (below C), used in galvanising",
              "(a) D is gold or silver — below H (no acid reaction), found native, used in jewellery",
              "(b) A and E above carbon — their oxides too stable for carbon to reduce",
              "(b) Electrolysis provides electrical energy to decompose the stable oxide",
              "(b) B below carbon — carbon (CO) can act as reducing agent cheaply",
              "(c) E reacts with cold water → above Ca in series / high reactivity confirmed by electrolysis",
              "(c) A reacts more vigorously with cold water → A is above E / A is more reactive",
              "(c) Al forms a protective Al₂O₃ passivation layer that prevents further corrosion",
            ],
            commonError: "Students often confuse reactivity (position in series) with observed reactivity in everyday life. Aluminium is highly reactive but appears inert due to passivation — these are different things.",
            guideRef: "The Reactivity Series",
            difficulty: "challenge",
            hints: [
              "For part (a), use ALL the data — reaction with acid, reaction with water, extraction method, and use.",
              "Galvanising is specifically associated with one metal — which one?",
              "For part (b), the extraction method tells you whether the metal is above or below carbon in the series.",
              "For part (c), recall the 'Think Deeper' point about aluminium — it is reactive but forms a protective oxide layer.",
            ],
            strategy: "Use multiple data points as converging evidence to identify unknowns",
          },
        ],
      },
      {
        id: "chem-metals-bank-qa-2",
        title: "Metals — Structured Questions Paper 2",
        description: "Blast furnace, electrolysis, alloys, and challenge deduction questions.",
        questions: [
          {
            id: "chem-metals-bank-qa2-q01",
            question: "Iron is extracted from haematite (Fe₂O₃) in the blast furnace.\n(a) State the four raw materials added to the blast furnace. [2]\n(b) Write equations for:\n   (i) the formation of carbon monoxide from carbon and carbon dioxide [1]\n   (ii) the reduction of iron(III) oxide by carbon monoxide [1]\n(c) State the role of limestone in the blast furnace, and write equations to show this. [3]\n(d) Give one reason why the iron produced in the blast furnace is not pure, and explain how it is treated to make steel. [2]",
            marks: 9,
            modelAnswer:
              "(a) Iron ore (haematite/Fe₂O₃), coke (carbon/C), limestone (calcium carbonate/CaCO₃), and hot air (oxygen).\n\n(b)(i) CO₂ + C → 2CO\n(b)(ii) Fe₂O₃ + 3CO → 2Fe + 3CO₂\n\n(c) Limestone removes acidic silica (SiO₂) impurities from the iron ore. Equations: CaCO₃(s) → CaO(s) + CO₂(g) [thermal decomposition]; CaO(s) + SiO₂(s) → CaSiO₃(l) [formation of slag]. The slag floats on top of the molten iron and is tapped off separately.\n\n(d) The iron from the blast furnace (pig iron) contains about 4% carbon, making it brittle. To make steel, the molten iron is reacted with oxygen in a furnace (basic oxygen steelmaking) to oxidise and remove most of the carbon, reducing the carbon content to 0.1–1.5%. Controlled amounts of carbon (and other elements) are then added to give the desired properties.",
            markScheme: [
              "(a) Iron ore / haematite / Fe₂O₃",
              "(a) Coke / carbon; limestone / CaCO₃; hot air / oxygen (any three of four for 2 marks)",
              "(b)(i) CO₂ + C → 2CO balanced",
              "(b)(ii) Fe₂O₃ + 3CO → 2Fe + 3CO₂ balanced",
              "(c) Removes silica / acidic impurities",
              "(c) CaCO₃ → CaO + CO₂",
              "(c) CaO + SiO₂ → CaSiO₃ (slag formation)",
              "(d) Contains excess carbon (~4%) / is impure / brittle",
              "(d) Oxygen blown through to oxidise/remove carbon to make steel",
            ],
            commonError: "Students often omit the limestone role or just say 'removes impurities' without specifying which impurity (silica) and without writing the CaO + SiO₂ → CaSiO₃ equation.",
            guideRef: "Extraction of Metals",
            difficulty: "core",
            hints: [
              "The blast furnace has four raw materials — don't forget the hot air/oxygen.",
              "Carbon monoxide (CO) is formed when CO₂ rises through the hot coke layer.",
              "Limestone decomposes first, then CaO reacts with SiO₂ — two separate equations.",
              "Pig iron is brittle because of excess carbon — steel has less carbon.",
            ],
          },
          {
            id: "chem-metals-bank-qa2-q02",
            question: "Aluminium is manufactured by electrolysis of aluminium oxide dissolved in cryolite.\n(a) Explain why the aluminium oxide must be melted (not dissolved in water) for electrolysis. [2]\n(b) Explain the purpose of cryolite in this process. [2]\n(c) Write the half-equations for the reactions at:\n   (i) the cathode [1]\n   (ii) the anode [1]\n(d) Explain why the graphite anodes must be replaced regularly. [2]\n(e) Suggest one economic and one environmental advantage of recycling aluminium rather than extracting it from ore. [2]",
            marks: 10,
            modelAnswer:
              "(a) Aluminium oxide dissolved in water would give aluminium hydroxide (Al(OH)₄⁻ ions) when electrolysed, producing aluminium hydroxide rather than aluminium metal. The Al³⁺ ions need to be free to move and be discharged at the cathode, which only occurs in the molten state where the ionic lattice is broken down. In aqueous solution, hydrogen would be preferentially discharged at the cathode instead of Al³⁺.\n\n(b) Cryolite (Na₃AlF₆) dissolves aluminium oxide and lowers its melting point from approximately 2072 °C to approximately 970 °C. This makes the process more economical by reducing the energy needed to maintain the molten state.\n\n(c)(i) Cathode: Al³⁺ + 3e⁻ → Al\n(c)(ii) Anode: 2O²⁻ → O₂ + 4e⁻\n\n(d) Oxygen gas is produced at the graphite (carbon) anodes. At the high operating temperature (~970 °C), this oxygen reacts with the carbon of the anode: C + O₂ → CO₂. The anodes are gradually oxidised and burned away, reducing in size, and must be replaced to maintain efficient electrolysis.\n\n(e) Economic advantage: recycling uses approximately 5% of the energy required for electrolysis, significantly reducing production costs. Environmental advantage: reduces the amount of bauxite ore that must be mined (conserves natural resources) and reduces CO₂ emissions from the energy-intensive electrolysis process.",
            markScheme: [
              "(a) In aqueous solution, H⁺ ions are preferentially discharged at cathode / hydrogen produced instead of Al",
              "(a) Al³⁺ ions must be mobile/free to move to cathode — requires molten state",
              "(b) Cryolite lowers the melting point of Al₂O₃ from ~2072 °C to ~970 °C",
              "(b) Reduces energy cost / makes process economically viable",
              "(c)(i) Al³⁺ + 3e⁻ → Al",
              "(c)(ii) 2O²⁻ → O₂ + 4e⁻",
              "(d) Oxygen reacts with carbon anode at high temperature: C + O₂ → CO₂",
              "(d) Anodes are burned away / must be replaced periodically",
              "(e) Economic: saves energy / lower production cost",
              "(e) Environmental: conserves ore / reduces CO₂ emissions / reduces mining",
            ],
            commonError: "Students often omit the reason why aqueous electrolysis fails (hydrogen is discharged instead of Al). This is a common exam point.",
            guideRef: "Extraction of Metals",
            difficulty: "challenge",
            hints: [
              "In aqueous solution, what is discharged at the cathode — Al³⁺ or H⁺? (H⁺ wins as it is easier to reduce.)",
              "Cryolite's role is purely to lower the melting point — it provides no aluminium ions.",
              "The anode reaction produces O₂, and the anode is made of carbon (graphite) — what happens to carbon in oxygen at high temperature?",
              "Energy saving for recycling is quantifiable (~95% less) — use it to strengthen your economic argument.",
            ],
            strategy: "For electrolysis questions, always address cathode and anode separately with half-equations",
            solutions: [
              {
                label: "Part (a) — why not aqueous solution",
                steps: [
                  "In aqueous Al₂O₃ solution, ions present include Al³⁺, OH⁻, and H⁺.",
                  "At the cathode, the species discharged is the one easiest to reduce (most positive E° value).",
                  "H⁺ (E° = 0.00 V) is much easier to reduce than Al³⁺ (E° = −1.66 V).",
                  "Therefore H₂ gas is produced at the cathode, not aluminium metal.",
                  "Molten Al₂O₃ contains only Al³⁺ and O²⁻ — no H⁺ — so Al is the only species reduced.",
                ],
              },
            ],
          },
          {
            id: "chem-metals-bank-qa2-q03",
            question: "Pure iron is a soft metal that is rarely used directly in industry. Steel, an alloy of iron and carbon, is much harder.\n(a) Explain, in terms of the arrangement of atoms, why pure iron is soft and malleable. [2]\n(b) Explain, using the same atomic model, why adding carbon to iron to make steel makes it harder. [3]\n(c) State two uses of steel and link each use to a specific property. [2]\n(d) Stainless steel contains chromium and nickel in addition to iron and carbon. Stainless steel does not rust. Suggest, in terms of the reactivity series, why the addition of chromium might prevent rusting of the iron. [2]",
            marks: 9,
            modelAnswer:
              "(a) In pure iron, all atoms are the same size and are arranged in regular layers in the metallic lattice. These layers can slide over each other easily when a force is applied (because the delocalised electrons re-arrange to allow movement), making iron soft and malleable.\n\n(b) Carbon atoms have a different (smaller) size compared to iron atoms. When carbon is added, the carbon atoms sit in the gaps between iron atoms, distorting the regular iron lattice. This makes it more difficult for layers to slide over each other because the differently sized atoms act as 'pegs' or obstacles to layer movement. Therefore steel is harder and stronger than pure iron.\n\n(c) Example uses:\n- Construction (bridges, beams): steel has high tensile strength and can support large loads.\n- Car bodies: steel is malleable and can be stamped into complex shapes, yet strong enough to protect passengers.\n- Cutting tools: high-carbon steel is very hard and maintains a sharp edge.\n\n(d) Chromium is more reactive than iron (or at a similar level in the reactivity series) and forms a very stable, thin layer of chromium oxide (Cr₂O₃) on the surface. This oxide layer is dense and adherent, acting as a passivation layer similar to the Al₂O₃ on aluminium, preventing water and oxygen from reaching the iron. Alternatively: chromium may preferentially oxidise instead of iron (similar to sacrificial protection), or the Cr₂O₃ layer physically excludes water and oxygen from the iron surface.",
            markScheme: [
              "(a) Same-sized atoms arranged in regular layers in the lattice",
              "(a) Layers can slide over each other easily / atom sliding = malleability",
              "(b) Carbon atoms are a different size from iron atoms",
              "(b) Carbon atoms disrupt the regular lattice / act as obstacles",
              "(b) Layers cannot slide as easily → harder / stronger",
              "(c) Two uses each linked to a specific property (e.g. strength for construction, malleability for car bodies)",
              "(d) Chromium forms a stable/dense oxide layer (Cr₂O₃) on the surface",
              "(d) This passivation layer excludes water and/or oxygen from the iron / prevents rusting",
            ],
            commonError: "Students often say alloys are harder 'because the atoms bond more strongly' — this is imprecise and loses marks. The correct explanation is about different-sized atoms disrupting layer sliding.",
            guideRef: "Alloys, Uses of Metals, and Recycling",
            difficulty: "core",
            hints: [
              "For (a): think about what makes metals malleable in terms of atomic layers.",
              "For (b): what changes when a differently sized atom is introduced to the lattice?",
              "For (d): think about the passivation layer concept from the aluminium discussion.",
            ],
          },
          {
            id: "chem-metals-bank-qa2-q04",
            question: "This question asks you to deduce information from experimental data.\n\nA student investigates four metals W, X, Y, and Z using the following experiments:\n\nExperiment 1 — Reaction with dilute sulfuric acid:\nW: vigorous fizzing, dissolves quickly, solution warms significantly.\nX: slow fizzing, dissolves slowly, small temperature rise.\nY: no reaction.\nZ: no reaction.\n\nExperiment 2 — Displacement from salt solutions:\n- W metal added to X salt solution: reaction occurs (deposit of X forms).\n- X metal added to W salt solution: no reaction.\n- W metal added to Y salt solution: reaction occurs (deposit of Y forms).\n- Y metal added to W salt solution: no reaction.\n- X metal added to Y salt solution: reaction occurs (deposit of Y forms on X).\n\nExperiment 3 — Reaction with oxygen:\nW: burns brightly in air when powdered.\nX: forms a black oxide on the surface when heated.\nY: no reaction when heated in air.\nZ: no reaction when heated in air even at very high temperatures.\n\n(a) Using all three experiments, arrange W, X, Y, Z in order of decreasing reactivity. Justify each step of your reasoning. [5]\n(b) Suggest which extraction method would be appropriate for each metal. Justify your answers using the reactivity series. [4]\n(c) A new metal T is added to Z salt solution and T is displaced. T is also displaced when added to a solution of a Y salt. Determine the position of T in the reactivity series relative to W, X, Y, and Z. [3]",
            marks: 12,
            modelAnswer:
              "(a) Order: W > X > Y > Z (most to least reactive).\n\nJustification:\n- W reacts vigorously with dilute H₂SO₄ → W is above H in the series and more reactive than X.\n- X reacts slowly with dilute H₂SO₄ → X is above H but less reactive than W.\n- Y and Z do not react with dilute H₂SO₄ → Y and Z are below H in the series.\n- Displacement (Exp 2): W displaces both X and Y → W > X and W > Y. X displaces Y → X > Y. This is consistent: X > H > Y.\n- Experiment 3 (oxygen): W burns brightly (very reactive); X oxidises on heating (moderately reactive); Y and Z show no reaction with oxygen (unreactive). This confirms W > X > Y ≈ Z.\n- Z shows no reaction in any experiment (acid, oxygen, displacement) → Z is less reactive than Y → Z is least reactive.\n\nFinal order: W > X > Y > Z.\n\n(b) W: reacts vigorously with acid, burns in oxygen — very reactive, above carbon in the reactivity series. Extraction by electrolysis of molten compound.\nX: reacts slowly with acid, forms oxide on heating — moderately reactive; likely between C and H in the series (e.g. Zn or Fe). Extraction by reduction with carbon.\nY: does not react with acid or oxygen — below H in the series, below carbon. Extraction by reduction with carbon, or found as a native element / requiring simple heating.\nZ: no reactions in any experiment — very unreactive, well below H and carbon. Likely found as a native element (e.g. gold or silver); little or no extraction process required.\n\n(c) T is displaced from T's salt by Z (Z > T in reactivity). T is also displaced when added to a Y salt (Y > T in reactivity). Since both Z and Y are more reactive than T, and Z is already the least reactive in the original set (W > X > Y > Z), T must be less reactive than Z. Final order: W > X > Y > Z > T.",
            markScheme: [
              "(a) W is most reactive — vigorous acid reaction and displaces both X and Y (1 mark)",
              "(a) Y > X — X cannot displace Y in displacement experiment; displacement is definitive evidence (1 mark)",
              "(a) X > H — X reacts with dilute acid (1 mark)",
              "(a) Z is least reactive — no reactions in any experiment (1 mark)",
              "(a) Final order W > Y > X > Z with all steps justified (1 mark for complete ordered series)",
              "(b) W: above carbon — electrolysis (1 mark)",
              "(b) Y/X: near or below carbon — reduction with carbon (1 mark)",
              "(b) Z: very unreactive — native element / simple heating / reduction with carbon (1 mark)",
              "(b) Justification links extraction method to position relative to C in series (1 mark)",
              "(c) T is displaced by Z → Z is more reactive than T (1 mark)",
              "(c) T is displaced by Y → Y is more reactive than T (1 mark)",
              "(c) T is less reactive than Z (the least reactive in the original set) → T is the least reactive overall / W > Y > X > Z > T (1 mark)",
            ],
            commonError: "In part (a), students often ignore conflicting evidence rather than resolving it. The key skill is to use multiple data sources and recognise that displacement experiments give the most direct reactivity comparison — use them to resolve apparent contradictions with acid reactions.",
            guideRef: "The Reactivity Series",
            difficulty: "challenge",
            hints: [
              "Start by separating metals that react with acid from those that don't — this places them relative to H in the series.",
              "Use displacement results to rank metals against each other directly: if A displaces B, then A > B in reactivity.",
              "If two experiments give conflicting rankings, use the most direct evidence (displacement is more reliable than acid reaction rate).",
              "For part (c), 'T is displaced by Z' means Z > T in reactivity — extend this logic systematically.",
            ],
            strategy: "Build the reactivity ranking step by step using each experiment as independent evidence; resolve conflicts by prioritising displacement over acid-reaction-rate data",
            solutions: [
              {
                label: "Systematic ranking from evidence",
                steps: [
                  "Acid reactions: W and X react with H₂SO₄ → W, X are above H. Y, Z do not react → Y, Z are below H.",
                  "Acid rate: W reacts vigorously, X slowly → W is more reactive than X. So W > X > H > Y ≈ Z (from acid data alone).",
                  "Displacement (Exp 2): W displaces X and Y → W > X and W > Y. Confirmed.",
                  "Critical point: X added to Y salt → no displacement. So X cannot displace Y → Y > X in the reactivity series.",
                  "But Y < H (no acid reaction) and X > H (acid reaction)? This means X > H > Y, but Y > X from displacement. Contradiction — use displacement as the more reliable indicator: Y > X.",
                  "Most likely resolution: Y barely reacts with acid (not detected) but Y > X in the series. Final order: W > Y > X > Z.",
                  "Part (c): Z displaces T and Y displaces T → both Z and Y are more reactive than T → T < Z. Final order: W > Y > X > Z > T.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
