import type { Topic } from "../types";

export const chemOrganic: Topic = {
  id: "chem-organic",
  title: "Organic Chemistry",
  subject: "chemistry",
  icon: "🛢️",
  blurb: "Hydrocarbons, crude oil fractions, alkanes, alkenes, alcohols, carboxylic acids and polymers.",
  intro: "Organic chemistry is the study of carbon compounds — a vast family that includes fuels, plastics, medicines and food. We start with crude oil, a mixture of hydrocarbons separated by fractional distillation, and then explore four homologous series: alkanes, alkenes, alcohols and carboxylic acids. Understanding how structure determines reactivity is the key thread running through the whole topic.",

  guide: [
    {
      heading: "Crude Oil and Fractional Distillation",
      body: `Crude oil is a **mixture** of hydrocarbons (compounds of carbon and hydrogen only) formed over millions of years from the remains of marine organisms. Being a mixture, its components can be separated by **physical** methods — their properties have not changed.

**Fractional distillation** exploits the fact that shorter hydrocarbon chains have lower boiling points (weaker intermolecular forces, specifically dispersion forces, because there is less surface area for molecules to attract each other). The oil is vaporised and fed into a fractionating column that is hot at the bottom (~350 °C) and cool at the top (~25 °C). Hydrocarbons condense at the tray where the temperature matches their boiling point and are collected as **fractions**.

**Main fractions (top → bottom of column):**

- **Refinery gas** — C1–C4; bp below 25 °C; used as fuel (LPG, camping gas)
- **Gasoline / petrol** — C5–C10; bp 25–75 °C; road vehicle fuel
- **Naphtha** — C8–C12; bp 75–150 °C; feedstock for chemicals/plastics
- **Kerosene / paraffin** — C10–C16; bp 150–250 °C; jet fuel, heating
- **Diesel / gas oil** — C14–C20; bp 250–350 °C; lorries, trains
- **Fuel oil** — C20–C70; bp 350–400 °C; ships, industrial boilers
- **Bitumen** — C70+; bp above 400 °C (residue); road surfacing, roofing

Key trend: going **down** the column, chain length increases, boiling point increases, viscosity increases, and the fraction is less easily ignited (flammability decreases).`,
      diagrams: [
        {
          caption: "Fractional distillation column — fractions collected at different heights",
          svg: `<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fractional distillation column showing fractions from refinery gas at the top to bitumen at the bottom">
  <!-- Column body -->
  <rect x="110" y="20" width="60" height="200" rx="4" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <!-- Trays / plates -->
  <line x1="110" y1="55" x2="170" y2="55" stroke="#38bdf8" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="110" y1="90" x2="170" y2="90" stroke="#38bdf8" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="110" y1="125" x2="170" y2="125" stroke="#38bdf8" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="110" y1="160" x2="170" y2="160" stroke="#38bdf8" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="110" y1="195" x2="170" y2="195" stroke="#38bdf8" stroke-width="1" stroke-dasharray="4,2"/>
  <!-- Outlet arrows -->
  <line x1="170" y1="37" x2="200" y2="37" stroke="#34d399" stroke-width="2"/>
  <polygon points="200,33 208,37 200,41" fill="#34d399"/>
  <line x1="170" y1="72" x2="200" y2="72" stroke="#34d399" stroke-width="2"/>
  <polygon points="200,68 208,72 200,76" fill="#34d399"/>
  <line x1="170" y1="107" x2="200" y2="107" stroke="#34d399" stroke-width="2"/>
  <polygon points="200,103 208,107 200,111" fill="#34d399"/>
  <line x1="170" y1="142" x2="200" y2="142" stroke="#34d399" stroke-width="2"/>
  <polygon points="200,138 208,142 200,146" fill="#34d399"/>
  <line x1="170" y1="177" x2="200" y2="177" stroke="#34d399" stroke-width="2"/>
  <polygon points="200,173 208,177 200,181" fill="#34d399"/>
  <!-- Bitumen outlet at bottom -->
  <line x1="140" y1="220" x2="140" y2="250" stroke="#fbbf24" stroke-width="2"/>
  <polygon points="136,250 140,258 144,250" fill="#fbbf24"/>
  <!-- Labels -->
  <text x="212" y="41" fill="#b7bce0" font-size="9" font-family="sans-serif">Refinery gas (C1-C4)</text>
  <text x="212" y="76" fill="#b7bce0" font-size="9" font-family="sans-serif">Gasoline (C5-C10)</text>
  <text x="212" y="111" fill="#b7bce0" font-size="9" font-family="sans-serif">Kerosene (C10-C16)</text>
  <text x="212" y="146" fill="#b7bce0" font-size="9" font-family="sans-serif">Diesel (C14-C20)</text>
  <text x="212" y="181" fill="#b7bce0" font-size="9" font-family="sans-serif">Fuel oil (C20-C70)</text>
  <text x="105" y="268" fill="#fbbf24" font-size="9" font-family="sans-serif">Bitumen residue</text>
  <!-- Temperature labels -->
  <text x="10" y="28" fill="#fb7185" font-size="8" font-family="sans-serif">~25 C</text>
  <text x="10" y="225" fill="#fb7185" font-size="8" font-family="sans-serif">~350 C</text>
  <line x1="45" y1="30" x2="45" y2="215" stroke="#fb7185" stroke-width="1" marker-end="url(#arr)"/>
  <text x="5" y="125" fill="#fb7185" font-size="8" font-family="sans-serif" transform="rotate(-90,20,125)">HOT</text>
  <!-- Crude oil inlet -->
  <line x1="60" y1="210" x2="110" y2="210" stroke="#a78bfa" stroke-width="2"/>
  <polygon points="108,206 110,210 108,214" fill="#a78bfa"/>
  <text x="2" y="214" fill="#a78bfa" font-size="8" font-family="sans-serif">Crude oil</text>
  <text x="2" y="224" fill="#a78bfa" font-size="8" font-family="sans-serif">(vaporised)</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Crude oil is a mixture of hydrocarbons separated by fractional distillation — a physical process.",
        "Shorter chain length → lower boiling point → collected higher up the column.",
        "Main fractions (top to bottom): refinery gas, gasoline, naphtha, kerosene, diesel, fuel oil, bitumen.",
        "Flammability decreases and viscosity increases going down the column.",
        "Crude oil is a finite, non-renewable resource formed over millions of years.",
      ],
      discovery: {
        problem: "If you heat crude oil to 350 °C and pass it into a tall column cooled at the top, how would you separate out jet fuel (bp ~200 °C) from petrol (bp ~60 °C)?",
        idea: "Each hydrocarbon rises until it reaches a level where the column temperature equals its boiling point, then it condenses and is drawn off. Shorter chains (petrol) condense near the top; longer chains (kerosene) condense lower down. The column is a continuous condensation gradient.",
      },
      whyItWorks: "Dispersion (van der Waals) forces between molecules increase with chain length because longer chains have more electrons and greater surface area for induced dipole–dipole interactions. More energy (higher temperature) is needed to overcome these forces, hence higher boiling points for longer chains.",
    },
    {
      heading: "Homologous Series and Alkanes",
      body: `A **homologous series** is a family of compounds with:
- The **same general formula** (e.g. CₙH₂ₙ₊₂ for alkanes)
- The **same functional group**, giving similar chemical properties
- A **gradual change in physical properties** (e.g. boiling point, viscosity) with increasing chain length
- Each member differing from the next by –CH₂–

**Alkanes** are saturated hydrocarbons — every C–C bond is a **single bond** and every carbon carries the maximum number of hydrogen atoms. General formula: **CₙH₂ₙ₊₂**.

First four members:

| Name | Formula | Displayed formula |
|------|---------|------------------|
| Methane | CH₄ | H–C(–H)(–H)–H |
| Ethane | C₂H₆ | H₃C–CH₃ |
| Propane | C₃H₈ | H₃C–CH₂–CH₃ |
| Butane | C₄H₁₀ | H₃C–(CH₂)₂–CH₃ |

**Combustion of alkanes:**

*Complete* (excess oxygen) — produces CO₂ and H₂O only:
CH₄ + 2O₂ → CO₂ + 2H₂O

*Incomplete* (limited oxygen) — produces CO and/or C (soot) and H₂O. Carbon monoxide is toxic.

**Substitution with halogens (UV light):**
Alkanes react with chlorine (or bromine) in the presence of **UV light** — a photochemical substitution reaction. One H atom is replaced by a Cl atom:
CH₄ + Cl₂ → CH₃Cl + HCl (chloromethane + hydrogen chloride)

This proceeds as a **free-radical chain reaction** initiated by UV splitting Cl₂ → 2Cl•.

Alkanes are **fairly unreactive** under normal conditions because C–H and C–C bonds are strong and non-polar.`,
      diagrams: [
        {
          caption: "Structural (displayed) formulae of methane, ethane and propane",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Displayed structural formulae of methane, ethane and propane showing all bonds">
  <!-- Methane CH4 -->
  <text x="30" y="15" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Methane (CH4)</text>
  <!-- central C -->
  <circle cx="70" cy="80" r="10" fill="#38bdf8" stroke="none"/>
  <text x="66" y="84" fill="#0f172a" font-size="10" font-family="sans-serif" font-weight="bold">C</text>
  <!-- 4 H -->
  <circle cx="70" cy="45" r="8" fill="#34d399"/>
  <text x="67" y="49" fill="#0f172a" font-size="9" font-family="sans-serif">H</text>
  <line x1="70" y1="55" x2="70" y2="70" stroke="#eef0ff" stroke-width="1.5"/>
  <circle cx="70" cy="115" r="8" fill="#34d399"/>
  <text x="67" y="119" fill="#0f172a" font-size="9" font-family="sans-serif">H</text>
  <line x1="70" y1="90" x2="70" y2="107" stroke="#eef0ff" stroke-width="1.5"/>
  <circle cx="35" cy="80" r="8" fill="#34d399"/>
  <text x="32" y="84" fill="#0f172a" font-size="9" font-family="sans-serif">H</text>
  <line x1="43" y1="80" x2="60" y2="80" stroke="#eef0ff" stroke-width="1.5"/>
  <circle cx="105" cy="80" r="8" fill="#34d399"/>
  <text x="102" y="84" fill="#0f172a" font-size="9" font-family="sans-serif">H</text>
  <line x1="80" y1="80" x2="97" y2="80" stroke="#eef0ff" stroke-width="1.5"/>

  <!-- Ethane C2H6 -->
  <text x="130" y="15" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Ethane (C2H6)</text>
  <circle cx="155" cy="80" r="10" fill="#38bdf8"/>
  <text x="151" y="84" fill="#0f172a" font-size="10" font-family="sans-serif" font-weight="bold">C</text>
  <circle cx="195" cy="80" r="10" fill="#38bdf8"/>
  <text x="191" y="84" fill="#0f172a" font-size="10" font-family="sans-serif" font-weight="bold">C</text>
  <line x1="165" y1="80" x2="185" y2="80" stroke="#eef0ff" stroke-width="1.5"/>
  <!-- H on left C -->
  <circle cx="155" cy="48" r="8" fill="#34d399"/>
  <text x="152" y="52" fill="#0f172a" font-size="9" font-family="sans-serif">H</text>
  <line x1="155" y1="56" x2="155" y2="70" stroke="#eef0ff" stroke-width="1.5"/>
  <circle cx="155" cy="112" r="8" fill="#34d399"/>
  <text x="152" y="116" fill="#0f172a" font-size="9" font-family="sans-serif">H</text>
  <line x1="155" y1="90" x2="155" y2="104" stroke="#eef0ff" stroke-width="1.5"/>
  <circle cx="125" cy="80" r="8" fill="#34d399"/>
  <text x="122" y="84" fill="#0f172a" font-size="9" font-family="sans-serif">H</text>
  <line x1="133" y1="80" x2="145" y2="80" stroke="#eef0ff" stroke-width="1.5"/>
  <!-- H on right C -->
  <circle cx="195" cy="48" r="8" fill="#34d399"/>
  <text x="192" y="52" fill="#0f172a" font-size="9" font-family="sans-serif">H</text>
  <line x1="195" y1="56" x2="195" y2="70" stroke="#eef0ff" stroke-width="1.5"/>
  <circle cx="195" cy="112" r="8" fill="#34d399"/>
  <text x="192" y="116" fill="#0f172a" font-size="9" font-family="sans-serif">H</text>
  <line x1="195" y1="90" x2="195" y2="104" stroke="#eef0ff" stroke-width="1.5"/>
  <circle cx="225" cy="80" r="8" fill="#34d399"/>
  <text x="222" y="84" fill="#0f172a" font-size="9" font-family="sans-serif">H</text>
  <line x1="205" y1="80" x2="217" y2="80" stroke="#eef0ff" stroke-width="1.5"/>

  <!-- Labels below -->
  <text x="30" y="150" fill="#b7bce0" font-size="9" font-family="sans-serif">Saturated: all single C-C bonds</text>
  <text x="30" y="163" fill="#b7bce0" font-size="9" font-family="sans-serif">General formula: CnH2n+2</text>
  <text x="30" y="176" fill="#b7bce0" font-size="9" font-family="sans-serif">Carbon = blue, Hydrogen = green</text>
</svg>`,
        },
      ],
      keyPoints: [
        "A homologous series: same general formula, same functional group, similar chemical properties, gradual change in physical properties.",
        "Alkanes are saturated (all single bonds); general formula CₙH₂ₙ₊₂.",
        "Complete combustion → CO₂ + H₂O; incomplete combustion → CO (toxic) and/or C (soot).",
        "Alkanes undergo substitution with halogens in UV light (free-radical mechanism).",
        "Alkanes are fairly unreactive because C–H bonds are strong and non-polar.",
      ],
      thinkDeeper: "Why does incomplete combustion produce carbon monoxide rather than just soot? Carbon monoxide forms when there is enough oxygen to oxidise the carbon atom once (C → CO) but not twice (CO → CO₂). At very low oxygen levels you get solid carbon (soot) instead.",
      whyItWorks: "The saturation of alkanes (all single bonds) means there are no available pi electrons for electrophiles to attack. Reactions therefore require UV-generated radicals (highly reactive species with unpaired electrons) to abstract H atoms and initiate substitution.",
    },
    {
      heading: "Alkenes, Cracking and Addition Reactions",
      body: `**Alkenes** are **unsaturated** hydrocarbons containing at least one **C=C double bond**. General formula: **CₙH₂ₙ**.

First two members:
- Ethene: C₂H₄ — H₂C=CH₂
- Propene: C₃H₆ — H₂C=CH–CH₃

**Cracking:** Long-chain alkanes from fractional distillation are in low demand (fuel oil, bitumen). Shorter chains (petrol, ethene for plastics) are in high demand. **Cracking** breaks long-chain alkanes into shorter alkanes AND alkenes using:
- High temperature (~500 °C) and a catalyst (silica/alumina) — catalytic cracking
- Very high temperature with steam — steam cracking

Example: C₁₀H₂₂ → C₈H₁₈ + C₂H₄ (decane → octane + ethene)

Check: both sides: C atoms 10 = 8+2 ✓; H atoms 22 = 18+4 ✓

**Test for unsaturation (C=C):**
Add **bromine water** (orange/brown solution). Alkenes **decolourise** it to colourless because bromine adds across the double bond. Alkanes do not react with bromine water in the dark.

**Addition reactions of alkenes:**
The C=C double bond is reactive — it can open to allow atoms to add across it:

- **Hydrogenation:** H₂C=CH₂ + H₂ → H₃C–CH₃ (ethane); nickel catalyst, ~150 °C
- **Hydration (steam):** H₂C=CH₂ + H₂O → CH₃CH₂OH (ethanol); phosphoric acid catalyst, ~300 °C, 60 atm
- **Halogenation:** H₂C=CH₂ + Br₂ → BrCH₂–CH₂Br (1,2-dibromoethane) — this is the bromine water test
- **Hydrohalogenation:** H₂C=CH₂ + HBr → CH₃CH₂Br (bromoethane)`,
      keyPoints: [
        "Alkenes are unsaturated (contain C=C); general formula CₙH₂ₙ.",
        "Cracking breaks long-chain alkanes → shorter alkanes + alkenes; needs high temperature ± catalyst.",
        "Test for C=C: bromine water decolourises from orange to colourless.",
        "Alkenes undergo addition reactions (hydrogenation, hydration, halogenation, hydrohalogenation).",
        "The C=C double bond makes alkenes far more reactive than alkanes.",
      ],
      discovery: {
        problem: "You have a test tube of an unknown hydrocarbon gas. How would you decide whether it is ethane (an alkane) or ethene (an alkene) using only bromine water?",
        idea: "Shake the gas with bromine water in the dark. If the orange-brown colour disappears (becomes colourless), the gas is ethene — bromine has added across the C=C. Ethane does not decolourise bromine water under these conditions.",
      },
      strategies: ["Balance cracking equations by counting C and H atoms on each side.", "Remember: addition = one product; substitution = two products (the main product + HX)."],
      whyItWorks: "The C=C double bond consists of a sigma bond and a pi bond. The pi bond has electron density above and below the C–C axis, making it accessible to electrophiles such as Br₂. The bromine molecule is polarised by this electron cloud (Br⁺–Br⁻), and the pi electrons attack the Br⁺ end, breaking the pi bond and forming two new C–Br sigma bonds.",
    },
    {
      heading: "Alcohols and Ethanol",
      body: `**Alcohols** contain the –OH (hydroxyl) functional group. The simplest alcohol is **methanol** (CH₃OH); the most important for IGCSE is **ethanol** (C₂H₅OH, or CH₃CH₂OH).

**Manufacturing ethanol — two routes:**

*Route 1: Fermentation of glucose*
C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂

Conditions: yeast (contains enzyme zymase), temperature ~30–37 °C, anaerobic (no air), aqueous solution. Ethanol concentration reaches ~15% before yeast is killed; distillation concentrates it further.

*Route 2: Hydration of ethene*
H₂C=CH₂ + H₂O(g) → CH₃CH₂OH

Conditions: phosphoric acid catalyst (H₃PO₄), ~300 °C, ~60 atm. Gives a purer, continuous process but requires ethene from cracking (a non-renewable source).

**Comparison:**

| | Fermentation | Hydration |
|--|--|--|
| Raw material | glucose (sugar cane) — renewable | ethene (from crude oil) — non-renewable |
| Rate | slow (batch) | fast (continuous) |
| Purity | low (needs distillation) | high |
| Temperature | low (~35 °C) | high (~300 °C) |

**Combustion of ethanol:**
C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O

Ethanol burns cleanly and is used as a **fuel** (e.g. in Brazil mixed with petrol as "gasohol") and as a **solvent** (in perfumes, medicines, cleaning products).`,
      keyPoints: [
        "Alcohols contain the –OH functional group; ethanol formula: C₂H₅OH.",
        "Fermentation: glucose → ethanol + CO₂; yeast, ~35 °C, anaerobic.",
        "Hydration of ethene: C₂H₄ + H₂O → C₂H₅OH; H₃PO₄ catalyst, ~300 °C, ~60 atm.",
        "Fermentation uses renewable raw materials; hydration uses non-renewable ethene from crude oil.",
        "Ethanol is used as a fuel and solvent; it undergoes complete combustion to CO₂ and H₂O.",
      ],
      thinkDeeper: "Biofuels like ethanol are sometimes called 'carbon-neutral'. Is this accurate? The CO₂ released on combustion was absorbed by the plant as it grew, so in theory the cycle is balanced. However, the energy used in farming, transport and distillation (often from fossil fuels) means the net CO₂ saving is less than 100% — so 'carbon-neutral' is an idealisation.",
    },
    {
      heading: "Carboxylic Acids",
      body: `**Carboxylic acids** contain the **–COOH** (carboxyl) functional group. General formula: CₙH₂ₙ₊₁COOH for straight-chain acids.

The most important example for IGCSE is **ethanoic acid** (CH₃COOH) — the acid in vinegar.

Ethanoic acid is a **weak acid**: it partially ionises in water.
CH₃COOH ⇌ CH₃COO⁻ + H⁺

As an acid, ethanoic acid undergoes typical acid reactions:

- **With metals:** 2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂ (magnesium ethanoate + hydrogen)
- **With bases (neutralisation):** CH₃COOH + NaOH → CH₃COONa + H₂O (sodium ethanoate + water)
- **With carbonates:** 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂
- **With alcohols (esterification):** CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (ethyl ethanoate — a sweet-smelling ester)

The esterification reaction requires a **concentrated H₂SO₄ catalyst** and gentle heat. It is reversible.

Ethanoic acid has a sharp, vinegar-like smell. It has a higher boiling point than ethanol (with similar molar mass) because –COOH forms strong hydrogen bonds.`,
      keyPoints: [
        "Carboxylic acids contain –COOH; ethanoic acid CH₃COOH is the IGCSE example.",
        "Weak acid — partially ionises in water (CH₃COOH ⇌ CH₃COO⁻ + H⁺).",
        "Reacts with metals, bases, carbonates (typical acid reactions) and with alcohols to form esters.",
        "Esterification is reversible and requires an acid catalyst (conc. H₂SO₄).",
        "Ethanoic acid is used as vinegar and in manufacturing esters for food flavourings.",
      ],
      strategies: ["Use the acid-reaction templates: acid + metal → salt + H₂; acid + base → salt + water; acid + carbonate → salt + water + CO₂."],
    },
    {
      heading: "Addition Polymerisation and Plastics",
      body: `**Addition polymerisation** joins many small unsaturated monomer molecules together into a long polymer chain. No other product is formed (unlike condensation polymerisation).

**Poly(ethene) from ethene:**
n CH₂=CH₂ → –(CH₂–CH₂)ₙ–

The repeat unit is –CH₂–CH₂–. The double bond in ethene opens and the molecules link together.

**Drawing the repeat unit:**
The repeat unit is always drawn inside square brackets with a bond crossing each bracket end and "n" as the subscript. For poly(propene):

Monomer: CH₂=CH–CH₃ (propene)
Repeat unit: –(CH₂–CH(CH₃))ₙ–

**Other addition polymers:**
- **Poly(chloroethene) / PVC**: from chloroethene (CH₂=CHCl)
- **Poly(tetrafluoroethene) / PTFE**: from tetrafluoroethene (CF₂=CF₂)
- **Poly(styrene)**: from phenylethene (styrene, C₆H₅–CH=CH₂)

**Properties and problems of plastics:**
- Strong, lightweight, flexible, waterproof, chemically inert — excellent for packaging, construction, etc.
- Most addition polymers are **non-biodegradable** — they persist in the environment for centuries.
- **Disposal problems:** landfill (takes up space, leaches chemicals); incineration (produces CO₂, and toxic gases if halogenated plastics burn); littering → ocean pollution / harm to wildlife.
- **Solutions:** reduce use; reuse; recycle (mechanical or chemical); burn for energy recovery with gas scrubbing; develop biodegradable alternatives.`,
      diagrams: [
        {
          caption: "Addition polymerisation: ethene monomers link to form poly(ethene)",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Addition polymerisation diagram showing ethene monomers with C=C double bonds linking to form poly(ethene) with single C-C bonds and repeat unit bracket notation">
  <!-- Title -->
  <text x="10" y="18" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Addition Polymerisation</text>

  <!-- Monomer 1: ethene -->
  <text x="10" y="38" fill="#b7bce0" font-size="9" font-family="sans-serif">Monomers:</text>
  <!-- C=C double bond representation -->
  <circle cx="60" cy="65" r="9" fill="#38bdf8"/>
  <text x="56" y="69" fill="#0f172a" font-size="9" font-family="sans-serif" font-weight="bold">C</text>
  <line x1="69" y1="62" x2="82" y2="62" stroke="#eef0ff" stroke-width="1.5"/>
  <line x1="69" y1="68" x2="82" y2="68" stroke="#eef0ff" stroke-width="1.5"/>
  <circle cx="91" cy="65" r="9" fill="#38bdf8"/>
  <text x="87" y="69" fill="#0f172a" font-size="9" font-family="sans-serif" font-weight="bold">C</text>
  <!-- H atoms on monomer 1 -->
  <text x="48" y="53" fill="#34d399" font-size="8" font-family="sans-serif">H H</text>
  <text x="48" y="82" fill="#34d399" font-size="8" font-family="sans-serif">H H</text>
  <line x1="60" y1="56" x2="60" y2="56" stroke="#eef0ff" stroke-width="1"/>
  <line x1="91" y1="56" x2="91" y2="56" stroke="#eef0ff" stroke-width="1"/>

  <text x="105" y="69" fill="#b7bce0" font-size="14" font-family="sans-serif">...</text>

  <!-- Arrow -->
  <text x="10" y="105" fill="#b7bce0" font-size="9" font-family="sans-serif">Polymerisation (UV / initiator):</text>
  <line x1="50" y1="112" x2="270" y2="112" stroke="#a78bfa" stroke-width="2"/>
  <polygon points="268,108 276,112 268,116" fill="#a78bfa"/>

  <!-- Polymer / repeat unit -->
  <text x="10" y="135" fill="#b7bce0" font-size="9" font-family="sans-serif">Polymer (repeat unit):</text>

  <!-- Square bracket notation -->
  <!-- left bracket -->
  <line x1="40" y1="148" x2="40" y2="185" stroke="#eef0ff" stroke-width="2"/>
  <line x1="40" y1="148" x2="47" y2="148" stroke="#eef0ff" stroke-width="2"/>
  <line x1="40" y1="185" x2="47" y2="185" stroke="#eef0ff" stroke-width="2"/>
  <!-- bond into bracket -->
  <line x1="30" y1="166" x2="40" y2="166" stroke="#eef0ff" stroke-width="1.5"/>

  <!-- repeat unit: -CH2-CH2- -->
  <circle cx="68" cy="166" r="9" fill="#38bdf8"/>
  <text x="64" y="170" fill="#0f172a" font-size="9" font-family="sans-serif" font-weight="bold">C</text>
  <line x1="77" y1="166" x2="100" y2="166" stroke="#eef0ff" stroke-width="1.5"/>
  <circle cx="109" cy="166" r="9" fill="#38bdf8"/>
  <text x="105" y="170" fill="#0f172a" font-size="9" font-family="sans-serif" font-weight="bold">C</text>
  <!-- H labels -->
  <text x="60" y="155" fill="#34d399" font-size="8" font-family="sans-serif">H H</text>
  <text x="60" y="182" fill="#34d399" font-size="8" font-family="sans-serif">H H</text>
  <text x="100" y="155" fill="#34d399" font-size="8" font-family="sans-serif">H H</text>
  <text x="100" y="182" fill="#34d399" font-size="8" font-family="sans-serif">H H</text>

  <!-- right bracket -->
  <line x1="118" y1="148" x2="118" y2="185" stroke="#eef0ff" stroke-width="2"/>
  <line x1="118" y1="148" x2="111" y2="148" stroke="#eef0ff" stroke-width="2"/>
  <line x1="118" y1="185" x2="111" y2="185" stroke="#eef0ff" stroke-width="2"/>
  <!-- bond out of bracket -->
  <line x1="118" y1="166" x2="128" y2="166" stroke="#eef0ff" stroke-width="1.5"/>
  <!-- n subscript -->
  <text x="120" y="188" fill="#fbbf24" font-size="11" font-family="sans-serif" font-style="italic">n</text>

  <!-- Labels -->
  <text x="145" y="155" fill="#b7bce0" font-size="9" font-family="sans-serif">Single C-C bonds only</text>
  <text x="145" y="170" fill="#b7bce0" font-size="9" font-family="sans-serif">in the polymer chain</text>
  <text x="145" y="185" fill="#34d399" font-size="9" font-family="sans-serif">(non-biodegradable)</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Addition polymerisation: unsaturated monomers (with C=C) join to form a long-chain polymer; no other product formed.",
        "Poly(ethene): monomer = ethene (CH₂=CH₂); repeat unit = –CH₂CH₂–.",
        "To identify the monomer from the polymer: insert a C=C in the repeat unit.",
        "Most addition polymers are non-biodegradable — a major environmental problem.",
        "Disposal options: landfill, incineration (energy recovery), recycling; each has advantages and disadvantages.",
      ],
      discovery: {
        problem: "A polymer has the repeat unit –CH₂–CHCl–. What is the monomer and what is the common name of the polymer?",
        idea: "Restore the double bond in the repeat unit: CH₂=CHCl — this is chloroethene (vinyl chloride). The polymer is poly(chloroethene), better known as PVC (polyvinyl chloride).",
      },
      strategies: ["To draw the repeat unit: remove the double bond and add a bond crossing each bracket.", "To find the monomer: look at the repeat unit and add back a C=C between the two carbon atoms."],
      whyItWorks: "In addition polymerisation the pi bond (the weaker component of the C=C) breaks homolytically or under initiation to generate reactive radical/ionic sites. Each monomer's end is then bonded to the next in an exothermic chain reaction, releasing energy because the sigma bond formed is stronger than the pi bond broken.",
    },
  ],

  learn: {
    keyFacts: [
      "Crude oil is a mixture of hydrocarbons separated by fractional distillation (a physical process).",
      "Boiling point of hydrocarbons increases with chain length due to stronger dispersion forces.",
      "Alkanes: saturated, CₙH₂ₙ₊₂, fairly unreactive; react with halogens in UV light (substitution).",
      "Complete combustion of hydrocarbons: → CO₂ + H₂O. Incomplete: → CO and/or C + H₂O.",
      "Alkenes: unsaturated (contain C=C), CₙH₂ₙ; made by cracking; decolourise bromine water.",
      "Cracking breaks long-chain alkanes → shorter alkanes + alkenes (high temp ± catalyst).",
      "Ethanol made by fermentation (glucose + yeast, ~35 °C) or hydration of ethene (H₃PO₄, ~300 °C).",
      "Addition polymerisation: n(CH₂=CH₂) → –(CH₂CH₂)ₙ–; no by-product; polymer is non-biodegradable.",
      "Ethanoic acid (CH₃COOH) is a weak acid; reacts with metals, bases, carbonates, and alcohols (esterification).",
      "Homologous series: same general formula, same functional group, gradual change in physical properties.",
    ],
    flashcards: [
      { front: "General formula of alkanes", back: "CₙH₂ₙ₊₂ (e.g. methane CH₄, ethane C₂H₆)" },
      { front: "General formula of alkenes", back: "CₙH₂ₙ (e.g. ethene C₂H₄, propene C₃H₆)" },
      { front: "Test for a C=C double bond (alkene)", back: "Add bromine water: decolourises from orange/brown to colourless" },
      { front: "Conditions for cracking alkanes", back: "High temperature (~500 °C) with silica/alumina catalyst (catalytic cracking) OR steam cracking at very high temperature" },
      { front: "Products of complete combustion of a hydrocarbon", back: "Carbon dioxide (CO₂) + water (H₂O)" },
      { front: "Products of incomplete combustion", back: "Carbon monoxide (CO) and/or carbon (soot) + water (H₂O)" },
      { front: "Conditions for fermentation to make ethanol", back: "Glucose solution + yeast (enzyme zymase), ~35 °C, anaerobic (no air)" },
      { front: "Conditions for hydration of ethene to ethanol", back: "H₂O(g) + ethene; phosphoric acid catalyst, ~300 °C, ~60 atm" },
      { front: "What makes alkenes more reactive than alkanes?", back: "The C=C double bond (pi bond) is accessible to electrophiles; alkanes have only strong non-polar C–H and C–C sigma bonds" },
      { front: "Repeat unit of poly(ethene)", back: "–(CH₂–CH₂)ₙ– drawn with square brackets and subscript n" },
      { front: "Why are most plastics an environmental problem?", back: "Non-biodegradable — persist for centuries in landfill or oceans, harming wildlife" },
      { front: "What is the functional group of carboxylic acids?", back: "–COOH (carboxyl group)" },
    ],
    keyTerms: [
      { term: "Hydrocarbon", definition: "A compound containing carbon and hydrogen only." },
      { term: "Fractional distillation", definition: "Separation of a mixture of liquids with different boiling points by heating and condensing fractions at different heights in a column." },
      { term: "Homologous series", definition: "A family of compounds with the same general formula, same functional group, similar chemical properties and a gradual change in physical properties with increasing chain length." },
      { term: "Saturated", definition: "A hydrocarbon in which all carbon–carbon bonds are single bonds (no C=C or C≡C)." },
      { term: "Unsaturated", definition: "A hydrocarbon containing at least one carbon–carbon double or triple bond." },
      { term: "Cracking", definition: "Thermal decomposition of long-chain alkanes into shorter alkanes and alkenes, using heat and sometimes a catalyst." },
      { term: "Addition reaction", definition: "A reaction in which atoms add across a C=C double bond, producing a single product with no by-product." },
      { term: "Addition polymerisation", definition: "A reaction in which many unsaturated monomer molecules join together to form a long-chain polymer, with no other product formed." },
      { term: "Repeat unit", definition: "The smallest group of atoms that repeats along the polymer chain, shown in square brackets with subscript n." },
      { term: "Fermentation", definition: "The anaerobic breakdown of glucose by yeast (enzyme zymase) to form ethanol and carbon dioxide." },
      { term: "Hydration", definition: "An addition reaction in which water (steam) adds across a C=C double bond; used to manufacture ethanol from ethene." },
      { term: "Esterification", definition: "The reversible reaction between a carboxylic acid and an alcohol (with acid catalyst) to form an ester and water." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "chem-organic-mcq-q01",
        question: "Which fraction from fractional distillation of crude oil has the LOWEST boiling point?",
        options: ["Bitumen", "Diesel", "Kerosene", "Refinery gas"],
        answerIndex: 3,
        explanation: "Refinery gas (C1–C4) is collected at the top of the fractionating column where temperature is lowest (~25 °C), because these very short chains have the weakest dispersion forces and lowest boiling points.",
        guideRef: "Crude Oil and Fractional Distillation",
        difficulty: "warmup",
      },
      {
        id: "chem-organic-mcq-q02",
        question: "What type of reaction occurs when ethene reacts with bromine water?",
        options: ["Combustion", "Substitution", "Addition", "Cracking"],
        answerIndex: 2,
        explanation: "Bromine adds across the C=C double bond in ethene: CH₂=CH₂ + Br₂ → BrCH₂CH₂Br. This is an addition reaction — one product, no by-product. Substitution would give HBr as a by-product.",
        guideRef: "Alkenes, Cracking and Addition Reactions",
        difficulty: "warmup",
      },
      {
        id: "chem-organic-mcq-q03",
        question: "A student adds an unknown gas to bromine water in the dark and the orange colour disappears. Which gas is it most likely to be?",
        options: ["Methane", "Ethane", "Ethene", "Carbon dioxide"],
        answerIndex: 2,
        explanation: "Ethene (an alkene) has a C=C double bond that reacts with Br₂ in an addition reaction, decolourising bromine water. Methane and ethane are alkanes and do not react with bromine water in the dark. CO₂ dissolves to give carbonic acid but does not decolourise bromine water.",
        guideRef: "Alkenes, Cracking and Addition Reactions",
        difficulty: "core",
        hints: [
          "Think about which substance in the list contains a C=C double bond.",
          "Alkanes do not react with bromine water — they lack a reactive pi bond.",
          "The decolourisation happens because Br₂ adds across the double bond.",
        ],
      },
      {
        id: "chem-organic-mcq-q04",
        question: "Ethanol can be manufactured by two routes. Which row correctly describes the raw material and conditions for the hydration of ethene?",
        options: [
          "Raw material: glucose; conditions: yeast, 35 °C, anaerobic",
          "Raw material: ethene; conditions: H₃PO₄ catalyst, ~300 °C, ~60 atm",
          "Raw material: ethane; conditions: H₂SO₄ catalyst, 200 °C, 1 atm",
          "Raw material: ethene; conditions: yeast, 35 °C, anaerobic",
        ],
        answerIndex: 1,
        explanation: "Hydration of ethene: C₂H₄ + H₂O(g) → C₂H₅OH, using a phosphoric acid catalyst at ~300 °C and ~60 atm pressure. Fermentation uses glucose + yeast. Ethane is not a raw material for either industrial route.",
        guideRef: "Alcohols and Ethanol",
        difficulty: "core",
        hints: [
          "Hydration means adding water across the C=C; fermentation uses glucose.",
          "The industrial catalyst for hydration is phosphoric acid (H₃PO₄).",
          "High temperature and pressure are needed to make the reaction economically viable.",
        ],
      },
      {
        id: "chem-organic-mcq-q05",
        question: "Which of the following is the correct repeat unit for poly(propene), given that the monomer is CH₂=CHCH₃?",
        options: [
          "–(CH₂–CH₂)ₙ–",
          "–(CH₂–CH(CH₃))ₙ–",
          "–(CH=CHCH₃)ₙ–",
          "–(CH₃–CH₂)ₙ–",
        ],
        answerIndex: 1,
        explanation: "In addition polymerisation the C=C double bond opens to form the backbone. Propene CH₂=CHCH₃ gives repeat unit –CH₂–CH(CH₃)– where the methyl group hangs off the chain. Option A is poly(ethene). Options C and D are incorrect structures.",
        guideRef: "Addition Polymerisation and Plastics",
        difficulty: "core",
        hints: [
          "Remove the double bond from the monomer and draw the remaining atoms.",
          "The CH₃ group on propene becomes a side branch on the polymer chain.",
        ],
      },
      {
        id: "chem-organic-mcq-q06",
        question: "Decane (C₁₀H₂₂) is cracked to give octane (C₈H₁₈) and one other product. What is that product?",
        options: ["Ethene (C₂H₄)", "Ethane (C₂H₆)", "Propene (C₃H₆)", "Methane (CH₄)"],
        answerIndex: 0,
        explanation: "Carbon balance: 10 = 8 + 2, so the other fragment has 2 C atoms. Hydrogen balance: 22 = 18 + 4, so 4 H atoms remain — giving C₂H₄ (ethene). Ethane (C₂H₆) would require 24 H atoms total. The product of cracking is always an alkene, not an alkane.",
        guideRef: "Alkenes, Cracking and Addition Reactions",
        difficulty: "challenge",
        hints: [
          "Write the equation: C₁₀H₂₂ → C₈H₁₈ + CₓHᵧ and find x and y by conservation.",
          "Count carbon atoms first: 10 – 8 = 2 carbon atoms in the by-product.",
          "Count hydrogen atoms: 22 – 18 = 4 hydrogen atoms. So the formula is C₂H₄.",
          "C₂H₄ fits CₙH₂ₙ (n=2) — it is an alkene (ethene).",
        ],
        strategy: "Balance by atom counting (C then H).",
      },
    ],
    qa: [
      {
        id: "chem-organic-qa-q01",
        question: "Describe the test you would carry out to distinguish between ethane and ethene, and state the result for each gas. (3 marks)",
        marks: 3,
        modelAnswer: "Add bromine water (an orange/brown solution) to each gas in the dark. Ethene decolourises the bromine water to give a colourless solution, because bromine undergoes an addition reaction across the C=C double bond. Ethane produces no change — the bromine water remains orange — because alkanes do not react with bromine water in the dark.",
        markScheme: [
          "Reagent: bromine water / bromine solution (must not say 'bromine gas')",
          "Observation for ethene: decolourises / turns colourless / orange to colourless",
          "Observation for ethane: no change / remains orange",
        ],
        commonError: "Saying the solution turns brown or black — bromine water goes colourless (or very pale yellow), not brown. Also, some students forget to specify 'in the dark', which excludes the UV-driven radical substitution that would occur with alkanes in bright light.",
        guideRef: "Alkenes, Cracking and Addition Reactions",
        difficulty: "core",
        hints: [
          "Think about which reagent reacts specifically with a C=C double bond.",
          "State the colour change, not just 'a reaction occurs'.",
          "You need an observation for EACH gas.",
        ],
      },
      {
        id: "chem-organic-qa-q02",
        question: "Compare the manufacture of ethanol by fermentation and by hydration of ethene. In your answer, include the raw materials, conditions, and one advantage of each method. (6 marks)",
        marks: 6,
        modelAnswer: "Fermentation: the raw material is glucose (from sugar cane or other plant material — renewable). Conditions: aqueous solution, yeast (containing enzyme zymase), temperature ~35 °C, anaerobic (absence of air/oxygen). One advantage: uses a renewable raw material (sustainable), and the process requires little energy (low temperature).\n\nHydration of ethene: the raw material is ethene (derived from crude oil by cracking — non-renewable). Conditions: steam (water vapour) and ethene gas, phosphoric acid (H₃PO₄) catalyst, temperature ~300 °C, pressure ~60 atm. Equation: C₂H₄ + H₂O → C₂H₅OH. One advantage: faster, continuous process giving a purer product; useful for industrial-scale production.",
        markScheme: [
          "Fermentation raw material: glucose / sugars / sugar cane / biomass (renewable)",
          "Fermentation conditions: yeast / enzyme zymase; ~35 °C; anaerobic/no air",
          "Fermentation advantage: renewable raw material / sustainable / low energy requirement",
          "Hydration raw material: ethene (from cracking crude oil / non-renewable)",
          "Hydration conditions: H₃PO₄ / phosphoric acid catalyst; ~300 °C; ~60 atm / high pressure",
          "Hydration advantage: faster / continuous process / higher purity product",
        ],
        commonError: "Confusing the two routes — e.g., saying fermentation uses a catalyst, or that hydration uses yeast. Also, omitting 'anaerobic' for fermentation conditions.",
        guideRef: "Alcohols and Ethanol",
        difficulty: "core",
        hints: [
          "Organise your answer in two clear sections: fermentation then hydration.",
          "Raw material → conditions → one advantage for each.",
          "The key contrast: one uses biological (renewable) raw material at low temperature; the other is industrial (non-renewable) at high temperature and pressure.",
        ],
        strategy: "Systematic comparison: address each criterion for both methods before moving on.",
      },
      {
        id: "chem-organic-qa-q03",
        question: "A polymer has the repeat unit shown: [–CH₂–CCl₂–]ₙ. (a) Name the type of polymerisation that produced this polymer. (b) Draw the displayed formula of the monomer. (c) Suggest one environmental problem caused by burning this polymer and explain why this problem arises. (5 marks)",
        marks: 5,
        modelAnswer: "(a) Addition polymerisation.\n(b) The monomer is CH₂=CCl₂ (1,1-dichloroethene). Displayed formula: two carbon atoms joined by a double bond, each with two chlorine atoms on the right carbon and two hydrogen atoms on the left carbon.\n(c) When burned, the chlorine atoms in the polymer produce toxic gases such as hydrogen chloride (HCl) and potentially dioxins. This is a problem because HCl is corrosive and toxic if inhaled, and dioxins are highly toxic, persistent environmental pollutants that can cause serious health effects.",
        markScheme: [
          "(a) Addition polymerisation (1 mark)",
          "(b) Monomer: CH₂=CCl₂ / 1,1-dichloroethene — must show C=C double bond (1 mark)",
          "(c) Environmental problem: produces toxic/corrosive gases e.g. HCl / hydrogen chloride; or toxic dioxins (1 mark)",
          "(c) Explanation: chlorine atoms in the polymer are released as toxic compounds on combustion (1 mark)",
          "(c) Impact: corrosive to lungs / air pollution / long-term health/ecological harm (1 mark)",
        ],
        commonError: "For (b), students often draw ethene (forgetting the Cl atoms) or draw the repeat unit instead of restoring the C=C. Always check: the monomer must contain a double bond.",
        guideRef: "Addition Polymerisation and Plastics",
        difficulty: "challenge",
        hints: [
          "Part (b): 'undo' polymerisation by adding a C=C double bond back into the repeat unit.",
          "Count substituents: the repeat unit has two Cl atoms on one carbon and two H atoms on the other.",
          "Part (c): consider what element in addition to C and H is present in this polymer and what gases it produces when burned.",
        ],
        strategy: "Reverse-engineer the monomer from the repeat unit: add a C=C and remove the bracket bonds.",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "chem-organic-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Crude oil, fractional distillation, homologous series and alkanes.",
        questions: [
          {
            id: "chem-organic-bm1-01",
            question: "What is a hydrocarbon?",
            options: [
              "A compound containing carbon, hydrogen and oxygen only",
              "A compound containing carbon and hydrogen only",
              "Any compound that contains a carbon atom",
              "A mixture of carbon and hydrogen gases",
            ],
            answerIndex: 1,
            explanation: "A hydrocarbon is a compound made of carbon and hydrogen atoms only. Adding oxygen (as in alcohols or carboxylic acids) means the compound is no longer a hydrocarbon. It is a compound, not a mixture.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm1-02",
            question: "Crude oil is separated into fractions by fractional distillation. This separation is possible because the fractions differ in their:",
            options: ["colour", "boiling points", "chemical formulae only", "densities only"],
            answerIndex: 1,
            explanation: "Fractional distillation separates the hydrocarbons by their different boiling points: shorter chains have lower boiling points and condense higher up the cooler column, longer chains condense lower down where it is hotter.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm1-03",
            question: "Which fraction is collected NEAR THE BOTTOM of the fractionating column?",
            options: ["Refinery gas", "Gasoline (petrol)", "Kerosene", "Bitumen"],
            answerIndex: 3,
            explanation: "The bottom of the column is hottest (~350 °C). Bitumen (C70+) has the longest chains, highest boiling point and highest viscosity, so it is collected as a residue at the bottom. Refinery gas leaves at the top.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm1-04",
            question: "Going DOWN the fractionating column (towards the bottom), which set of trends is correct?",
            options: [
              "Chain length increases, boiling point increases, flammability decreases",
              "Chain length decreases, boiling point increases, viscosity decreases",
              "Chain length increases, boiling point decreases, flammability increases",
              "Chain length decreases, boiling point decreases, viscosity increases",
            ],
            answerIndex: 0,
            explanation: "Down the column it gets hotter and the fractions have longer chains. Longer chains mean higher boiling points, higher viscosity, and lower flammability (harder to ignite). Only option A has all three trends correct.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "core",
            hints: [
              "Down the column = hotter = longer chains.",
              "Longer chains have stronger dispersion forces, so higher boiling point and viscosity.",
              "Longer chains are harder to ignite — flammability decreases downwards.",
            ],
          },
          {
            id: "chem-organic-bm1-05",
            question: "Why does the boiling point of alkanes increase as the number of carbon atoms increases?",
            options: [
              "The covalent C–C bonds become stronger and must be broken",
              "There are more intermolecular dispersion forces to overcome",
              "The molecules become more polar",
              "Hydrogen bonds form between the molecules",
            ],
            answerIndex: 1,
            explanation: "Boiling involves overcoming intermolecular forces, not breaking covalent bonds. Longer chains have more electrons and greater surface area, so stronger dispersion (van der Waals) forces, requiring more energy and a higher boiling point. Alkanes are non-polar and cannot hydrogen bond.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "Boiling separates whole molecules — it does not break the bonds inside a molecule.",
              "What kind of force acts between separate non-polar molecules?",
              "More electrons and larger surface area give stronger dispersion forces.",
            ],
          },
          {
            id: "chem-organic-bm1-06",
            question: "Which of these is the general formula of the alkanes?",
            options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁OH"],
            answerIndex: 1,
            explanation: "Alkanes are saturated and follow CₙH₂ₙ₊₂ (e.g. n=1 gives CH₄, n=2 gives C₂H₆). CₙH₂ₙ is the alkenes; CₙH₂ₙ₊₁OH is the alcohols.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm1-07",
            question: "Butane has the molecular formula C₄H₁₀. How many hydrogen atoms would the alkane with 6 carbon atoms (hexane) have?",
            options: ["12", "13", "14", "16"],
            answerIndex: 2,
            explanation: "Using CₙH₂ₙ₊₂ with n = 6: H = (2 × 6) + 2 = 14. So hexane is C₆H₁₄.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "Use the alkane general formula CₙH₂ₙ₊₂.",
              "Substitute n = 6 into 2n + 2.",
              "2 × 6 + 2 = 14 hydrogen atoms.",
            ],
          },
          {
            id: "chem-organic-bm1-08",
            question: "Which statement about a homologous series is NOT correct?",
            options: [
              "Successive members differ by –CH₂–",
              "All members share the same general formula",
              "All members have identical physical properties",
              "All members have the same functional group",
            ],
            answerIndex: 2,
            explanation: "Members of a homologous series show a GRADUAL CHANGE in physical properties (e.g. boiling point rises with chain length) — they are not identical. The other three statements are defining features of a homologous series.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "Three of these are definitions of a homologous series; one is false.",
              "Do all alkanes boil at the same temperature?",
              "Physical properties change gradually; chemical properties are similar.",
            ],
          },
          {
            id: "chem-organic-bm1-09",
            question: "Methane burns in a plentiful supply of oxygen. Which equation correctly represents this complete combustion?",
            options: [
              "CH₄ + O₂ → CO₂ + H₂O",
              "CH₄ + 2O₂ → CO₂ + 2H₂O",
              "CH₄ + 2O₂ → CO + 2H₂O",
              "2CH₄ + 3O₂ → 2CO + 4H₂O",
            ],
            answerIndex: 1,
            explanation: "Complete combustion gives CO₂ and H₂O. Balancing: CH₄ + 2O₂ → CO₂ + 2H₂O. Check: 1 C, 4 H, 4 O on each side. Options C and D give CO (incomplete combustion); option A is not balanced for oxygen.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "challenge",
            hints: [
              "Complete combustion produces CO₂ and H₂O only.",
              "Balance carbon, then hydrogen, then oxygen last.",
              "2 H₂O needs 2 O, CO₂ needs 2 O, so 4 O total = 2 O₂.",
            ],
          },
          {
            id: "chem-organic-bm1-10",
            question: "Ethane (C₂H₆) reacts with chlorine in ultraviolet light. Which row gives the correct reaction type AND one organic product?",
            options: [
              "Addition; C₂H₆Cl₂",
              "Substitution; C₂H₅Cl",
              "Combustion; C₂H₅Cl",
              "Substitution; C₂H₄",
            ],
            answerIndex: 1,
            explanation: "Alkanes react with halogens by photochemical substitution: C₂H₆ + Cl₂ → C₂H₅Cl + HCl. One H is replaced by one Cl, giving chloroethane (C₂H₅Cl) plus HCl. There is no C=C, so addition is impossible; combustion needs oxygen.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "challenge",
            hints: [
              "Alkanes are saturated — they cannot do addition reactions.",
              "UV light drives a substitution: one H atom is swapped for one Cl atom.",
              "The products are the monochloro compound plus HCl.",
            ],
            strategy: "Substitution swaps one atom for another and always makes a second product (HX); addition would need a C=C double bond.",
          },
        ],
      },
      {
        id: "chem-organic-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Alkenes, cracking, addition reactions and the bromine water test.",
        questions: [
          {
            id: "chem-organic-bm2-01",
            question: "What structural feature do all alkenes contain?",
            options: ["A C–C single bond only", "A C=C double bond", "An –OH group", "A –COOH group"],
            answerIndex: 1,
            explanation: "Alkenes are unsaturated hydrocarbons defined by at least one carbon–carbon double bond (C=C). The –OH group belongs to alcohols and –COOH to carboxylic acids.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm2-02",
            question: "What is the molecular formula of propene?",
            options: ["C₃H₄", "C₃H₆", "C₃H₈", "C₂H₄"],
            answerIndex: 1,
            explanation: "Alkenes follow CₙH₂ₙ. For propene n = 3, so C₃H₆ (H₂C=CH–CH₃). C₃H₈ is propane (alkane); C₂H₄ is ethene.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm2-03",
            question: "What is the main reason long-chain alkanes are cracked in industry?",
            options: [
              "To make crude oil easier to transport",
              "To convert low-demand long chains into high-demand shorter molecules and alkenes",
              "To remove sulfur from the oil",
              "To turn alkanes directly into alcohols",
            ],
            answerIndex: 1,
            explanation: "Cracking matches supply to demand: surplus long-chain fractions are broken into smaller, more useful alkanes (e.g. petrol) and alkenes (e.g. ethene for plastics), which are in high demand.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm2-04",
            question: "Which conditions are used for catalytic cracking?",
            options: [
              "Low temperature and high pressure",
              "High temperature (~500 °C) and a silica/alumina catalyst",
              "Room temperature and UV light",
              "A nickel catalyst at 150 °C",
            ],
            answerIndex: 1,
            explanation: "Catalytic cracking uses a high temperature (~500 °C) and a silica/alumina catalyst to break C–C bonds. A nickel catalyst at ~150 °C is used for hydrogenation of alkenes, not cracking.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Cracking breaks strong C–C bonds, so it needs a lot of energy.",
              "A catalyst lowers the temperature/energy needed.",
              "Nickel at 150 °C is for adding hydrogen, not for cracking.",
            ],
          },
          {
            id: "chem-organic-bm2-05",
            question: "Which equation for cracking dodecane (C₁₂H₂₆) is correctly balanced?",
            options: [
              "C₁₂H₂₆ → C₈H₁₈ + C₄H₈",
              "C₁₂H₂₆ → C₈H₁₈ + C₄H₁₀",
              "C₁₂H₂₆ → C₁₀H₂₂ + C₂H₆",
              "C₁₂H₂₆ → C₉H₂₀ + C₃H₄",
            ],
            answerIndex: 0,
            explanation: "Atoms must balance. Option A: C 8+4 = 12 ✓, H 18+8 = 26 ✓, and C₄H₈ is an alkene (CₙH₂ₙ) — exactly what cracking produces. Option B: H = 18+10 = 28 ✗. Option C: H = 22+6 = 28 ✗. Option D: H = 20+4 = 24 ✗.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "challenge",
            hints: [
              "Carbon atoms on both sides must be equal: they should add to 12.",
              "Hydrogen atoms must also add to 26.",
              "Cracking always makes at least one alkene (CₙH₂ₙ); check which by-product fits.",
              "Only C₈H₁₈ + C₄H₈ balances both C (12) and H (26).",
            ],
            strategy: "Balance by counting C first, then H; remember an alkene by-product has the formula CₙH₂ₙ.",
          },
          {
            id: "chem-organic-bm2-06",
            question: "Bromine water is added to two test tubes, one containing hexane and one containing hexene, and both are kept in the dark. What is observed?",
            options: [
              "Both decolourise the bromine water",
              "Hexene decolourises it; hexane stays orange",
              "Hexane decolourises it; hexene stays orange",
              "Neither changes colour",
            ],
            answerIndex: 1,
            explanation: "Hexene is an alkene with a C=C, so bromine adds across the double bond and the orange colour disappears. Hexane is a saturated alkane and does not react with bromine water in the dark, so it stays orange. This is the standard test for unsaturation.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Which of the two has a C=C double bond?",
              "Bromine adds across a double bond and the colour disappears.",
              "Alkanes do not react with bromine water in the dark.",
            ],
          },
          {
            id: "chem-organic-bm2-07",
            question: "Ethene reacts with steam to make ethanol. Which reaction type is this?",
            options: ["Substitution", "Hydration (addition)", "Combustion", "Polymerisation"],
            answerIndex: 1,
            explanation: "C₂H₄ + H₂O → C₂H₅OH. Water adds across the C=C double bond, so it is an addition reaction, specifically hydration. No by-product forms.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Steam is water — adding water has a special name.",
              "The double bond opens and the atoms of water add across it.",
              "It is an addition reaction called hydration.",
            ],
          },
          {
            id: "chem-organic-bm2-08",
            question: "Ethene is reacted with hydrogen over a nickel catalyst at about 150 °C. What is the organic product?",
            options: ["Ethane (C₂H₆)", "Ethanol (C₂H₅OH)", "Ethyne (C₂H₂)", "Bromoethane (C₂H₅Br)"],
            answerIndex: 0,
            explanation: "Hydrogenation adds H₂ across the C=C: H₂C=CH₂ + H₂ → CH₃CH₃ (ethane), using a nickel catalyst at ~150 °C. Ethanol comes from adding water, not hydrogen.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Adding H₂ across a double bond is called hydrogenation.",
              "The double bond becomes a single bond, giving a saturated product.",
              "Ethene + hydrogen → ethane.",
            ],
          },
          {
            id: "chem-organic-bm2-09",
            question: "When bromine adds to ethene, what is the organic product?",
            options: ["Bromoethane (C₂H₅Br)", "1,2-dibromoethane (BrCH₂CH₂Br)", "Dibromomethane (CH₂Br₂)", "Ethene dibromide gas"],
            answerIndex: 1,
            explanation: "Both bromine atoms add across the double bond, one to each carbon: CH₂=CH₂ + Br₂ → BrCH₂–CH₂Br (1,2-dibromoethane). Bromoethane would come from HBr (only one Br atom added).",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "challenge",
            hints: [
              "Br₂ provides two bromine atoms.",
              "In addition, the double bond opens and one atom bonds to each carbon.",
              "So each carbon gains one Br — the product has two Br atoms.",
            ],
            strategy: "In addition across C=C, count how many atoms the reagent supplies (Br₂ gives two) and place one on each carbon.",
          },
          {
            id: "chem-organic-bm2-10",
            question: "Why is ethene much more reactive than ethane?",
            options: [
              "Ethene has more hydrogen atoms",
              "Ethene contains a reactive C=C double bond (pi bond) that can open in addition reactions",
              "Ethene is polar while ethane is non-polar",
              "Ethene has a higher boiling point",
            ],
            answerIndex: 1,
            explanation: "The C=C double bond contains a pi bond whose electron density is exposed and can be attacked, allowing addition reactions. Ethane has only strong, non-polar single bonds and is far less reactive. Ethene actually has fewer H atoms than ethane.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Compare the bonding: what does ethene have that ethane does not?",
              "The extra bond in C=C is a pi bond with exposed electrons.",
              "That pi bond can open to let atoms add across it.",
            ],
          },
        ],
      },
      {
        id: "chem-organic-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Alcohols, ethanol manufacture, carboxylic acids and esters.",
        questions: [
          {
            id: "chem-organic-bm3-01",
            question: "What is the functional group of the alcohols?",
            options: ["–COOH", "–OH", "C=C", "–O–"],
            answerIndex: 1,
            explanation: "Alcohols contain the hydroxyl group, –OH. –COOH is the carboxyl group (carboxylic acids) and C=C is found in alkenes.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm3-02",
            question: "Which equation represents the fermentation of glucose?",
            options: [
              "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",
              "C₂H₄ + H₂O → C₂H₅OH",
              "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
              "2C₂H₅OH → C₆H₁₂O₆ + 2CO₂",
            ],
            answerIndex: 0,
            explanation: "Fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂, using yeast under anaerobic conditions. Check: C 6 = 4+2 ✓, H 12 = 12 ✓, O 6 = 2+4 ✓. Option B is the hydration of ethene; option C is respiration/combustion of glucose.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "core",
            hints: [
              "Fermentation turns sugar into ethanol and a gas.",
              "The gas given off is carbon dioxide.",
              "Balance: one glucose gives two ethanol and two CO₂.",
            ],
          },
          {
            id: "chem-organic-bm3-03",
            question: "Which set of conditions is correct for making ethanol by fermentation?",
            options: [
              "Phosphoric acid catalyst, 300 °C, 60 atm",
              "Yeast, ~35 °C, anaerobic (no air)",
              "Nickel catalyst, 150 °C, hydrogen present",
              "Concentrated sulfuric acid, gentle heat",
            ],
            answerIndex: 1,
            explanation: "Fermentation needs yeast (which provides the enzyme zymase), a warm temperature of about 30–37 °C, and anaerobic conditions. The phosphoric acid/300 °C/60 atm conditions are for hydration of ethene.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "core",
            hints: [
              "Fermentation is a biological process — what living thing is needed?",
              "Enzymes work best at body-temperature warmth, not 300 °C.",
              "It must be done without air (anaerobic).",
            ],
          },
          {
            id: "chem-organic-bm3-04",
            question: "Which is an advantage of making ethanol by hydration of ethene rather than by fermentation?",
            options: [
              "It uses a renewable raw material",
              "It is a fast, continuous process giving a pure product",
              "It works at a lower temperature",
              "It produces no carbon dioxide at any stage",
            ],
            answerIndex: 1,
            explanation: "Hydration is continuous and fast, giving high-purity ethanol directly. Its drawback is that ethene comes from crude oil (non-renewable) and it needs high temperature and pressure. Fermentation is the one using a renewable raw material at low temperature.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "core",
            hints: [
              "Fermentation is slow, batch-based and gives dilute ethanol.",
              "Which method runs continuously and gives a purer product?",
              "Hydration is fast but uses non-renewable ethene.",
            ],
          },
          {
            id: "chem-organic-bm3-05",
            question: "Ethanol burns completely in oxygen. Which is the correctly balanced equation?",
            options: [
              "C₂H₅OH + 2O₂ → 2CO₂ + 3H₂O",
              "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O",
              "C₂H₅OH + 3O₂ → 2CO₂ + 2H₂O",
              "2C₂H₅OH + 5O₂ → 4CO₂ + 3H₂O",
            ],
            answerIndex: 1,
            explanation: "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Check oxygen: left = 1 (in ethanol) + 6 (from 3O₂) = 7; right = 4 (in 2CO₂) + 3 (in 3H₂O) = 7 ✓. Carbon 2 = 2 ✓, hydrogen 6 = 6 ✓.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "challenge",
            hints: [
              "Balance carbon (2 CO₂) and hydrogen (3 H₂O) first.",
              "Count the oxygen needed on the right: 2×2 + 3 = 7 atoms.",
              "Ethanol already supplies 1 oxygen, so O₂ must supply 6 → that is 3O₂.",
            ],
            strategy: "Remember the alcohol's own oxygen atom when balancing combustion — it reduces the O₂ required.",
          },
          {
            id: "chem-organic-bm3-06",
            question: "Which use of ethanol relies on it being a solvent?",
            options: [
              "Burning it in a 'gasohol' fuel blend",
              "Dissolving substances in perfumes and medicines",
              "Reacting it with sodium to give hydrogen",
              "Storing it as a non-renewable fuel",
            ],
            answerIndex: 1,
            explanation: "As a solvent, ethanol dissolves substances that water cannot, which is why it is used in perfumes, medicines and cleaning products. Burning it in gasohol uses it as a fuel, not a solvent.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm3-07",
            question: "What is the functional group of carboxylic acids?",
            options: ["–OH", "–COOH", "C=C", "–CO–"],
            answerIndex: 1,
            explanation: "Carboxylic acids contain the carboxyl group –COOH (a C=O and an –OH on the same carbon). Ethanoic acid, CH₃COOH, is the key IGCSE example.",
            guideRef: "Carboxylic Acids",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm3-08",
            question: "Ethanoic acid is described as a weak acid. What does this mean?",
            options: [
              "It is always very dilute",
              "It only partially ionises in water",
              "It cannot neutralise alkalis",
              "It contains few hydrogen atoms",
            ],
            answerIndex: 1,
            explanation: "A weak acid partially ionises in water: CH₃COOH ⇌ CH₃COO⁻ + H⁺, with the equilibrium lying to the left. Weakness is about the degree of ionisation, not concentration (which is how dilute it is).",
            guideRef: "Carboxylic Acids",
            difficulty: "core",
            hints: [
              "Weak/strong is about ionisation, not how dilute the acid is.",
              "A weak acid only partly splits into ions in water.",
              "The equation uses a reversible arrow (⇌).",
            ],
          },
          {
            id: "chem-organic-bm3-09",
            question: "Ethanoic acid reacts with sodium carbonate. Which gas is produced?",
            options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Chlorine"],
            answerIndex: 2,
            explanation: "Acid + carbonate → salt + water + carbon dioxide. 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂. Hydrogen would be produced if the acid reacted with a metal instead.",
            guideRef: "Carboxylic Acids",
            difficulty: "core",
            hints: [
              "Acid + carbonate has a standard set of products.",
              "Carbonates fizz with acid, releasing a gas that turns limewater milky.",
              "That gas is carbon dioxide.",
            ],
          },
          {
            id: "chem-organic-bm3-10",
            question: "Ethanoic acid is warmed with ethanol and a few drops of concentrated sulfuric acid. What is the ester product and the catalyst?",
            options: [
              "Ethyl ethanoate; H₂SO₄ catalyst",
              "Sodium ethanoate; NaOH catalyst",
              "Methyl ethanoate; H₃PO₄ catalyst",
              "Ethyl ethanoate; nickel catalyst",
            ],
            answerIndex: 0,
            explanation: "Esterification: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O, catalysed by concentrated sulfuric acid. The ester is ethyl ethanoate (sweet-smelling). The ethyl part comes from the alcohol, the ethanoate part from the acid.",
            guideRef: "Carboxylic Acids",
            difficulty: "challenge",
            hints: [
              "Acid + alcohol → ester + water (esterification).",
              "Name: alcohol part first (ethyl), acid part second (ethanoate).",
              "The catalyst for esterification is concentrated sulfuric acid.",
            ],
            strategy: "Name an ester as 'alkyl' (from the alcohol) + 'anoate' (from the acid): ethanol + ethanoic acid → ethyl ethanoate.",
          },
        ],
      },
      {
        id: "chem-organic-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Polymers, plastics, structures and synoptic organic chemistry.",
        questions: [
          {
            id: "chem-organic-bm4-01",
            question: "Which type of substance is needed as the monomer for addition polymerisation?",
            options: [
              "A saturated alkane",
              "An unsaturated molecule containing a C=C double bond",
              "A carboxylic acid",
              "An alcohol",
            ],
            answerIndex: 1,
            explanation: "Addition polymerisation requires unsaturated monomers (containing C=C). The double bond opens so the monomers can join with no other product. Saturated alkanes cannot polymerise in this way.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm4-02",
            question: "What is the repeat unit of poly(ethene)?",
            options: ["–(CH₂–CH₂)ₙ–", "–(CH=CH₂)ₙ–", "–(CH₂–CH(CH₃))ₙ–", "–(CHCl–CH₂)ₙ–"],
            answerIndex: 0,
            explanation: "Ethene (CH₂=CH₂) polymerises by opening the double bond, giving the repeat unit –CH₂–CH₂–. Option C is poly(propene) and option D is PVC.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm4-03",
            question: "How does addition polymerisation differ from condensation polymerisation?",
            options: [
              "Addition forms a small molecule by-product such as water",
              "Addition forms only the polymer, with no other product",
              "Addition requires two different monomers",
              "Addition only works with alkanes",
            ],
            answerIndex: 1,
            explanation: "In addition polymerisation the only product is the polymer — no by-product is made. Condensation polymerisation releases a small molecule (such as water) each time a link forms.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "Think about what else, if anything, is produced besides the polymer.",
              "Addition = no by-product; condensation = small molecule lost.",
              "Addition uses unsaturated monomers with C=C.",
            ],
          },
          {
            id: "chem-organic-bm4-04",
            question: "A polymer has the repeat unit –(CHCl–CH₂)ₙ–. What is the monomer?",
            options: ["CH₂=CH₂", "CH₂=CHCl", "CHCl=CHCl", "CH₃–CH₂Cl"],
            answerIndex: 1,
            explanation: "To find the monomer, restore the C=C across the two carbons of the repeat unit: CH₂=CHCl (chloroethene). This polymerises to poly(chloroethene), PVC. CH₃–CH₂Cl has no double bond, so it cannot be the monomer.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "Undo polymerisation by adding a C=C between the two carbons.",
              "Keep the same atoms attached to each carbon (one Cl, the right number of H).",
              "The monomer is CH₂=CHCl, chloroethene.",
            ],
          },
          {
            id: "chem-organic-bm4-05",
            question: "Why are most addition polymers considered an environmental problem?",
            options: [
              "They dissolve easily and pollute water",
              "They are non-biodegradable and persist for a very long time",
              "They evaporate to form greenhouse gases",
              "They react with oxygen in the air and corrode",
            ],
            answerIndex: 1,
            explanation: "Addition polymers have strong, unreactive carbon backbones, so microbes cannot break them down — they are non-biodegradable and persist in landfill and oceans for centuries, harming wildlife.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "Think about whether microbes can break the polymer down.",
              "Non-biodegradable means it does not rot away.",
              "That is why plastic waste lasts so long in the environment.",
            ],
          },
          {
            id: "chem-organic-bm4-06",
            question: "Which problem is specifically associated with INCINERATING (burning) PVC waste rather than landfilling it?",
            options: [
              "It takes up large amounts of land",
              "It releases toxic, acidic hydrogen chloride gas",
              "It leaches dyes into groundwater",
              "It cannot be set alight at all",
            ],
            answerIndex: 1,
            explanation: "PVC contains chlorine. Burning it releases toxic, corrosive hydrogen chloride (HCl) gas (and can form dioxins). Taking up land is a landfill problem, not an incineration problem.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "challenge",
            hints: [
              "PVC contains an element other than carbon and hydrogen.",
              "That element is chlorine.",
              "Burning chlorine-containing plastics releases toxic HCl gas.",
            ],
            strategy: "Match the disposal problem to the method: land use = landfill; toxic gases = incineration.",
          },
          {
            id: "chem-organic-bm4-07",
            question: "Ethene can be turned into ethanol, ethane or poly(ethene). Which row matches each product with the correct reagent/condition?",
            options: [
              "Ethanol: H₂/Ni; Ethane: steam/H₃PO₄; Poly(ethene): high pressure",
              "Ethanol: steam/H₃PO₄; Ethane: H₂/Ni; Poly(ethene): high pressure/catalyst",
              "Ethanol: Br₂; Ethane: steam; Poly(ethene): UV light",
              "Ethanol: H₂/Ni; Ethane: Br₂; Poly(ethene): yeast",
            ],
            answerIndex: 1,
            explanation: "Ethanol is made by hydration: ethene + steam with H₃PO₄ catalyst. Ethane is made by hydrogenation: ethene + H₂ over nickel. Poly(ethene) is made by addition polymerisation under high pressure with a catalyst. Option A swaps the reagents for ethanol and ethane.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "challenge",
            hints: [
              "Adding water = hydration → ethanol; adding hydrogen = hydrogenation → ethane.",
              "Hydration uses phosphoric acid; hydrogenation uses nickel.",
              "Polymerisation joins many ethene molecules under high pressure.",
            ],
            strategy: "Sort addition reactions by the reagent added across the C=C: H₂O→alcohol, H₂→alkane, many ethene→polymer.",
          },
          {
            id: "chem-organic-bm4-08",
            question: "Which compound is NOT a hydrocarbon?",
            options: ["Butane (C₄H₁₀)", "Ethene (C₂H₄)", "Ethanol (C₂H₅OH)", "Propene (C₃H₆)"],
            answerIndex: 2,
            explanation: "A hydrocarbon contains carbon and hydrogen only. Ethanol contains oxygen as well (–OH group), so it is not a hydrocarbon. The other three contain only C and H.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm4-09",
            question: "Four compounds each have two carbon atoms. Which one will decolourise bromine water?",
            options: ["C₂H₆ (ethane)", "C₂H₄ (ethene)", "C₂H₅OH (ethanol)", "CH₃COOH (ethanoic acid)"],
            answerIndex: 1,
            explanation: "Only ethene contains a C=C double bond, so only ethene undergoes the addition reaction that decolourises bromine water. The others are saturated or have functional groups that do not react with bromine water.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "The bromine water test detects a C=C double bond.",
              "Which of these is an alkene?",
              "Only ethene (C₂H₄) has the C=C double bond.",
            ],
          },
          {
            id: "chem-organic-bm4-10",
            question: "Butane (C₄H₁₀) has two structural isomers with the same molecular formula but different arrangements of atoms. Which statement about structural isomers is correct?",
            options: [
              "They have different molecular formulae",
              "They have the same molecular formula but different structures",
              "They always belong to different homologous series",
              "They must contain a C=C double bond",
            ],
            answerIndex: 1,
            explanation: "Structural isomers share the same molecular formula but differ in how the atoms are arranged (e.g. butane and methylpropane, both C₄H₁₀). They need not be in different series or contain a double bond.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "challenge",
            hints: [
              "'Isomer' means same formula, different arrangement.",
              "Butane is a straight chain; methylpropane is branched — both are C₄H₁₀.",
              "Same molecular formula, different structure.",
            ],
            strategy: "Test for isomers: write the molecular formula of each structure; if the formulae match but the structures differ, they are isomers.",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-organic-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Crude oil, fractional distillation, alkanes and combustion.",
        questions: [
          {
            id: "chem-organic-bq1-01",
            question: "State what is meant by the term 'hydrocarbon', and explain why crude oil can be separated by a physical method. (3 marks)",
            marks: 3,
            modelAnswer: "A hydrocarbon is a compound containing carbon and hydrogen atoms only. Crude oil is a mixture of different hydrocarbons. Because it is a mixture, the components are not chemically bonded together, so they can be separated by a physical method (fractional distillation) that exploits their different boiling points without any chemical change.",
            markScheme: [
              "Hydrocarbon = compound of carbon and hydrogen only",
              "Crude oil is a mixture (of hydrocarbons)",
              "Components are not chemically combined / can be separated physically by different boiling points",
            ],
            commonError: "Defining a hydrocarbon as 'anything containing carbon' — it must be carbon AND hydrogen ONLY. Also describing fractional distillation as a chemical change.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bq1-02",
            question: "Describe how fractional distillation separates crude oil into useful fractions. In your answer, refer to the temperature of the column and what happens to short-chain and long-chain hydrocarbons. (4 marks)",
            marks: 4,
            modelAnswer: "The crude oil is heated until it vaporises and is fed into a fractionating column that is hot at the bottom (~350 °C) and cooler at the top (~25 °C). The vapours rise up the column and cool. Each hydrocarbon condenses at the height where the temperature equals its boiling point. Short-chain hydrocarbons have low boiling points, so they rise high up the cool column before condensing (e.g. refinery gas, petrol). Long-chain hydrocarbons have high boiling points, so they condense low down where it is hotter (e.g. fuel oil, bitumen). The condensed liquids are collected as fractions at different heights.",
            markScheme: [
              "Crude oil is heated/vaporised and enters the column",
              "Column is hot at the bottom and cool(er) at the top / has a temperature gradient",
              "Each hydrocarbon condenses where temperature = its boiling point",
              "Short chains (low bp) condense near the top / long chains (high bp) condense near the bottom",
            ],
            commonError: "Saying short chains condense at the bottom — it is the reverse. Also forgetting that the oil must first be vaporised (heated) before separation.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "core",
            hints: [
              "Start with vaporising the oil and feeding it into the column.",
              "Describe the temperature gradient (hot bottom, cool top).",
              "Link boiling point to where each fraction condenses.",
            ],
          },
          {
            id: "chem-organic-bq1-03",
            question: "The table lists three fractions from crude oil: refinery gas, kerosene and bitumen. For each, state ONE use, and describe how viscosity and flammability change going from refinery gas down to bitumen. (5 marks)",
            marks: 5,
            modelAnswer: "Uses (any one each): refinery gas — fuel for cooking/heating (LPG, camping gas); kerosene — jet fuel / aircraft fuel (also heating); bitumen — surfacing roads / roofing. Going down from refinery gas to bitumen, the chain length increases, so viscosity increases (the fractions become thicker / flow less easily). Flammability decreases (the fractions become harder to ignite) because longer chains have higher boiling points and are less volatile.",
            markScheme: [
              "Refinery gas use: fuel / LPG / cooking / heating",
              "Kerosene use: jet/aircraft fuel / heating / paraffin",
              "Bitumen use: road surfacing / roofing",
              "Viscosity increases going down (towards bitumen)",
              "Flammability decreases going down (towards bitumen)",
            ],
            commonError: "Reversing the trends (saying bitumen is more flammable than refinery gas) or giving the same use for two different fractions.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "core",
            hints: [
              "Recall a real use for each fraction first.",
              "Longer chains = thicker liquids = higher viscosity.",
              "Longer chains are harder to set alight = lower flammability.",
            ],
          },
          {
            id: "chem-organic-bq1-04",
            question: "Define the term 'homologous series' by giving FOUR features that the members of any homologous series share. (4 marks)",
            marks: 4,
            modelAnswer: "A homologous series is a family of organic compounds in which: (1) all members have the same general formula; (2) all members contain the same functional group, giving similar chemical properties; (3) there is a gradual change in physical properties (such as boiling point) as the chain length increases; and (4) successive members differ by a –CH₂– unit.",
            markScheme: [
              "Same general formula",
              "Same functional group / similar chemical properties",
              "Gradual change/trend in physical properties (e.g. boiling point)",
              "Successive members differ by CH₂",
            ],
            commonError: "Giving only one or two features for a four-mark question. Aim for one distinct feature per mark.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bq1-05",
            question: "Methane (CH₄) is the first member of the alkanes. (a) Write the balanced equation for the complete combustion of methane. (b) Write a balanced equation showing the incomplete combustion of methane that produces carbon monoxide. (c) Explain why carbon monoxide is dangerous. (5 marks)",
            marks: 5,
            modelAnswer: "(a) CH₄ + 2O₂ → CO₂ + 2H₂O.\n(b) 2CH₄ + 3O₂ → 2CO + 4H₂O (incomplete combustion, limited oxygen, producing carbon monoxide).\n(c) Carbon monoxide is toxic: it is a colourless, odourless gas that binds strongly to haemoglobin in red blood cells (forming carboxyhaemoglobin), preventing the blood from carrying oxygen around the body. This can cause unconsciousness and death.",
            markScheme: [
              "(a) Correct formulae CO₂ + H₂O and balanced: CH₄ + 2O₂ → CO₂ + 2H₂O",
              "(b) Product is CO; equation balanced e.g. 2CH₄ + 3O₂ → 2CO + 4H₂O",
              "(c) CO is toxic / binds to haemoglobin",
              "(c) Prevents haemoglobin/blood carrying oxygen",
              "(c) Effect: causes unconsciousness/death (and it is colourless/odourless so undetectable)",
            ],
            commonError: "Leaving the incomplete-combustion equation unbalanced, or stating CO₂ is the toxic product (it is CO that binds to haemoglobin).",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "Complete combustion gives CO₂ + H₂O; incomplete (limited O₂) gives CO.",
              "Balance the incomplete equation by trying 2CH₄ first.",
              "For (c), think about what CO does inside the blood.",
            ],
            solutions: [
              {
                label: "Balancing the incomplete-combustion equation",
                steps: [
                  "Aim for CO as the carbon product: CH₄ + O₂ → CO + H₂O.",
                  "Doubling methane helps balance oxygen: 2CH₄ → 2CO + 4H₂O accounts for 4 C–H pairs.",
                  "Right side oxygen: 2 (in 2CO) + 4 (in 4H₂O) = 6 oxygen atoms = 3O₂.",
                  "Final balanced equation: 2CH₄ + 3O₂ → 2CO + 4H₂O. Check C: 2 = 2; H: 8 = 8; O: 6 = 6.",
                ],
              },
            ],
          },
          {
            id: "chem-organic-bq1-06",
            question: "Alkanes react with chlorine in the presence of ultraviolet light. (a) Write a balanced equation for the reaction of one molecule of methane with chlorine to form a single substituted product. (b) Name the type of reaction and state the essential condition. (c) Explain why alkanes are described as fairly unreactive. (5 marks)",
            marks: 5,
            modelAnswer: "(a) CH₄ + Cl₂ → CH₃Cl + HCl (chloromethane and hydrogen chloride).\n(b) It is a substitution reaction; the essential condition is ultraviolet (UV) light.\n(c) Alkanes are saturated, with only strong, non-polar C–C and C–H single (sigma) bonds. There are no double bonds (no exposed pi electrons) for reagents to attack, so alkanes do not readily undergo reactions and are described as fairly unreactive.",
            markScheme: [
              "(a) Correct products CH₃Cl + HCl and balanced equation",
              "(b) Substitution",
              "(b) Condition: UV / ultraviolet light",
              "(c) Alkanes are saturated / only single C–C and C–H bonds",
              "(c) Bonds are strong and non-polar / no C=C for reagents to attack",
            ],
            commonError: "Forgetting HCl as the second product, or calling the reaction 'addition'. Alkanes cannot do addition because they have no C=C.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "One H is replaced by one Cl — what is the second product?",
              "Replacing an atom is a substitution; UV light is essential.",
              "For (c), think about bond strength, polarity and the absence of a double bond.",
            ],
          },
          {
            id: "chem-organic-bq1-07",
            question: "Pentane has the molecular formula C₅H₁₂. (a) Use the alkane general formula to verify this formula for n = 5. (b) Predict, with a reason, whether pentane or octane (C₈H₁₈) has the higher boiling point. (4 marks)",
            marks: 4,
            modelAnswer: "(a) Alkane general formula is CₙH₂ₙ₊₂. For n = 5: hydrogen = (2 × 5) + 2 = 12, so the formula is C₅H₁₂, which matches.\n(b) Octane has the higher boiling point. Octane has a longer carbon chain (more carbon atoms) than pentane, so its molecules have more electrons and a larger surface area. This gives stronger intermolecular dispersion (van der Waals) forces, which need more energy to overcome, so octane boils at a higher temperature.",
            markScheme: [
              "(a) Uses CₙH₂ₙ₊₂ with n = 5: 2(5)+2 = 12 H, giving C₅H₁₂",
              "(b) Octane has the higher boiling point",
              "(b) Longer chain / more electrons / larger surface area",
              "(b) Stronger dispersion (intermolecular) forces need more energy to overcome",
            ],
            commonError: "Explaining the higher boiling point by 'stronger covalent bonds' — boiling overcomes intermolecular forces, not the covalent bonds within molecules.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "Substitute n = 5 into 2n + 2.",
              "More carbons = longer chain = more intermolecular force.",
              "Boiling overcomes forces between molecules, not bonds inside them.",
            ],
            solutions: [
              {
                label: "Verifying the formula",
                steps: [
                  "Alkane general formula: CₙH₂ₙ₊₂.",
                  "Substitute n = 5: H = 2(5) + 2 = 12.",
                  "So the formula is C₅H₁₂ — matches the given pentane formula.",
                ],
              },
            ],
          },
          {
            id: "chem-organic-bq1-08",
            question: "Explain, in terms of intermolecular forces, why the fractions collected at the top of a fractionating column have lower boiling points than those at the bottom. (3 marks)",
            marks: 3,
            modelAnswer: "Fractions at the top are made of short-chain hydrocarbons (few carbon atoms); fractions at the bottom are long-chain hydrocarbons. Short chains have fewer electrons and a smaller surface area, so the dispersion (van der Waals) forces between their molecules are weaker. Less energy is needed to overcome these weaker forces, so short-chain fractions have lower boiling points and condense near the cool top of the column.",
            markScheme: [
              "Top = short chains; bottom = long chains",
              "Short chains have weaker dispersion/intermolecular forces (fewer electrons / smaller surface area)",
              "Less energy needed to overcome forces → lower boiling point",
            ],
            commonError: "Attributing boiling point to covalent bond strength rather than intermolecular forces.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "core",
            hints: [
              "Top of the column = which chain length?",
              "Fewer carbons = weaker forces between molecules.",
              "Weaker forces = lower boiling point.",
            ],
          },
          {
            id: "chem-organic-bq1-09",
            question: "A student claims that incomplete combustion of a hydrocarbon can produce both carbon monoxide and soot. (a) State the condition that causes incomplete combustion. (b) Explain why sometimes carbon monoxide forms and sometimes solid carbon (soot) forms. (4 marks)",
            marks: 4,
            modelAnswer: "(a) Incomplete combustion happens when there is a limited (insufficient) supply of oxygen.\n(b) The product depends on how little oxygen is available. When there is enough oxygen to partially oxidise the carbon — once but not twice — carbon monoxide (CO) is formed. When there is even less oxygen, the carbon is not oxidised at all and is released as solid carbon (soot). So a smaller oxygen supply shifts the products from CO₂ to CO to C (soot).",
            markScheme: [
              "(a) Limited / insufficient supply of oxygen",
              "(b) CO forms when carbon is oxidised once but not fully (to CO₂)",
              "(b) Soot (C) forms when there is even less oxygen / carbon not oxidised",
              "(b) Idea that decreasing oxygen shifts products CO₂ → CO → C",
            ],
            commonError: "Saying incomplete combustion gives no water — it still produces water; it is the carbon-containing product that changes.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "challenge",
            hints: [
              "What is in short supply for incomplete combustion?",
              "CO means the carbon was oxidised only partway.",
              "Soot means the carbon was not oxidised at all — even less oxygen.",
            ],
          },
          {
            id: "chem-organic-bq1-10",
            question: "Compound Q is a saturated hydrocarbon. When 0.1 mol of Q is completely burned it produces 0.4 mol of CO₂ and 0.5 mol of H₂O. (a) Deduce the number of carbon and hydrogen atoms in one molecule of Q, showing your reasoning. (b) Give the molecular formula and name of Q. (c) Write the balanced equation for its complete combustion. (6 marks)",
            marks: 6,
            modelAnswer: "(a) 0.1 mol of Q gives 0.4 mol CO₂, so each molecule contains 0.4 / 0.1 = 4 carbon atoms. It gives 0.5 mol H₂O, which contains 2 × 0.5 = 1.0 mol H atoms, so each molecule contains 1.0 / 0.1 = 10 hydrogen atoms.\n(b) Molecular formula: C₄H₁₀. This fits CₙH₂ₙ₊₂ (n = 4), confirming it is a saturated alkane: butane.\n(c) 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O.",
            markScheme: [
              "(a) Carbon atoms = 0.4 / 0.1 = 4",
              "(a) Hydrogen atoms = (2 × 0.5) / 0.1 = 10",
              "(b) Molecular formula C₄H₁₀",
              "(b) Name: butane (and recognise it fits CₙH₂ₙ₊₂)",
              "(c) Correct products 8CO₂ + 10H₂O",
              "(c) Equation fully balanced: 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O",
            ],
            commonError: "Forgetting that each H₂O contains TWO hydrogen atoms when counting H. Also writing an odd O₂ coefficient — doubling the alkane lets you balance oxygen as a whole number.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "challenge",
            hints: [
              "Carbon atoms per molecule = mol CO₂ ÷ mol Q.",
              "Each mole of H₂O contains 2 moles of H atoms.",
              "Hydrogen atoms per molecule = (2 × mol H₂O) ÷ mol Q.",
              "Check the formula against CₙH₂ₙ₊₂ before naming it.",
            ],
            solutions: [
              {
                label: "Working from mole ratios to the formula and equation",
                steps: [
                  "Carbon: every CO₂ holds one C atom, so mol C = 0.4 mol. Per molecule: 0.4 / 0.1 = 4 carbon atoms.",
                  "Hydrogen: every H₂O holds two H atoms, so mol H = 2 × 0.5 = 1.0 mol. Per molecule: 1.0 / 0.1 = 10 hydrogen atoms.",
                  "Molecular formula = C₄H₁₀; it matches CₙH₂ₙ₊₂ (n = 4), so Q is butane.",
                  "Combustion: C₄H₁₀ + O₂ → CO₂ + H₂O. Balance C (4 CO₂) and H (5 H₂O): C₄H₁₀ + O₂ → 4CO₂ + 5H₂O.",
                  "Right-side oxygen = 8 + 5 = 13 atoms (odd). Double everything to clear the half: 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O.",
                  "Check: C 8 = 8; H 20 = 20; O 26 = 16 + 10 = 26. Balanced.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-organic-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Alkenes, cracking, addition reactions and tests for unsaturation.",
        questions: [
          {
            id: "chem-organic-bq2-01",
            question: "(a) State the general formula of the alkenes. (b) Give the names and molecular formulae of the first two members of the alkene homologous series. (3 marks)",
            marks: 3,
            modelAnswer: "(a) The general formula of the alkenes is CₙH₂ₙ.\n(b) Ethene, C₂H₄; and propene, C₃H₆.",
            markScheme: [
              "(a) CₙH₂ₙ",
              "(b) Ethene C₂H₄",
              "(b) Propene C₃H₆",
            ],
            commonError: "Writing CₙH₂ₙ₊₂ (that is the alkane formula) or naming ethane/methane instead of the alkenes ethene/propene.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bq2-02",
            question: "Describe the bromine water test for an alkene. State the reagent, the conditions, and the observation for an alkene and for an alkane. (4 marks)",
            marks: 4,
            modelAnswer: "Add bromine water (an orange/brown solution) to the substance and shake, keeping it in the dark. With an alkene, the bromine water is decolourised (changes from orange to colourless) because bromine adds across the C=C double bond. With an alkane, there is no change — the bromine water stays orange/brown — because alkanes have no C=C and do not react with bromine water in the dark.",
            markScheme: [
              "Reagent: bromine water",
              "Condition: in the dark (and shake/mix)",
              "Alkene: decolourises / orange to colourless",
              "Alkane: no change / stays orange",
            ],
            commonError: "Saying the colour turns brown or black — it goes colourless. Forgetting the 'in the dark' condition, which prevents UV substitution by alkanes.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Name the reagent and its starting colour.",
              "State the condition that prevents the alkane reacting.",
              "Give a clear observation for BOTH the alkene and the alkane.",
            ],
          },
          {
            id: "chem-organic-bq2-03",
            question: "Long-chain alkanes can be cracked. (a) State what is meant by cracking. (b) State two conditions used for cracking. (c) Explain why cracking is economically important. (4 marks)",
            marks: 4,
            modelAnswer: "(a) Cracking is the breaking down of long-chain alkane molecules into shorter, more useful alkanes and alkenes (thermal decomposition).\n(b) Any two of: high temperature (~500 °C); a catalyst (silica/alumina); or high temperature with steam.\n(c) Fractional distillation produces a surplus of long-chain fractions that are in low demand, and not enough short-chain fractions (such as petrol) and alkenes (such as ethene) that are in high demand. Cracking converts the surplus long chains into these high-demand products, so nothing is wasted and supply meets demand.",
            markScheme: [
              "(a) Breaking long-chain alkanes into shorter alkanes + alkenes",
              "(b) Any two: high temperature (~500 °C) / catalyst (silica/alumina) / steam",
              "(c) Long chains are in surplus / low demand",
              "(c) Produces high-demand shorter alkanes (fuel) and alkenes (for plastics)",
            ],
            commonError: "Saying cracking only makes alkanes — it always produces at least one alkene as well. Confusing cracking conditions with hydrogenation (nickel, 150 °C).",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Cracking breaks big molecules into smaller ones.",
              "Two conditions: a high temperature and a catalyst (or steam).",
              "Think about matching supply (long chains) to demand (petrol, ethene).",
            ],
          },
          {
            id: "chem-organic-bq2-04",
            question: "When decane (C₁₀H₂₂) is cracked, one of the products is ethene (C₂H₄). (a) Write a balanced equation for this cracking reaction if the other product is a single alkane. (b) Name the other product. (3 marks)",
            marks: 3,
            modelAnswer: "(a) C₁₀H₂₂ → C₈H₁₈ + C₂H₄. Check: carbon 10 = 8 + 2 ✓; hydrogen 22 = 18 + 4 ✓.\n(b) The other product is octane (C₈H₁₈).",
            markScheme: [
              "(a) Correct other formula C₈H₁₈",
              "(a) Balanced equation C₁₀H₂₂ → C₈H₁₈ + C₂H₄",
              "(b) Octane",
            ],
            commonError: "Writing C₈H₁₆ (an alkene) instead of C₈H₁₈ — the second product here is an alkane, so it must fit CₙH₂ₙ₊₂.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Subtract the ethene atoms from decane: 10 − 2 carbons, 22 − 4 hydrogens.",
              "That leaves C₈H₁₈.",
              "C₈H₁₈ fits CₙH₂ₙ₊₂, so it is the alkane octane.",
            ],
            solutions: [
              {
                label: "Balancing the cracking equation",
                steps: [
                  "Write: C₁₀H₂₂ → C₈H₁₈ + ? where ethene is one product.",
                  "Carbon left for the by-product: 10 − 8 = 2.",
                  "Hydrogen left: 22 − 18 = 4. So by-product = C₂H₄ (ethene).",
                  "Other product = C₈H₁₈ (octane); equation C₁₀H₂₂ → C₈H₁₈ + C₂H₄ balances.",
                ],
              },
            ],
          },
          {
            id: "chem-organic-bq2-05",
            question: "Ethene undergoes several addition reactions. For EACH of the following, name the reagent/conditions and give the organic product: (a) reaction with hydrogen; (b) reaction with steam; (c) reaction with bromine. (6 marks)",
            marks: 6,
            modelAnswer: "(a) Hydrogen with a nickel catalyst at about 150 °C: product is ethane, CH₃CH₃ (hydrogenation).\n(b) Steam (water vapour) with a phosphoric acid catalyst at about 300 °C and 60 atm: product is ethanol, CH₃CH₂OH (hydration).\n(c) Bromine (Br₂), at room temperature: product is 1,2-dibromoethane, BrCH₂CH₂Br (halogenation).",
            markScheme: [
              "(a) Conditions: H₂ + nickel catalyst (~150 °C)",
              "(a) Product: ethane (C₂H₆)",
              "(b) Conditions: steam + H₃PO₄ catalyst (~300 °C, ~60 atm)",
              "(b) Product: ethanol (C₂H₅OH)",
              "(c) Bromine; product 1,2-dibromoethane (C₂H₄Br₂)",
            ],
            commonError: "Swapping the catalysts (nickel is for hydrogenation, phosphoric acid for hydration). For bromine, writing bromoethane (only one Br) instead of the di-bromo product.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "challenge",
            hints: [
              "Each reaction adds a different reagent across the C=C.",
              "Hydrogen → ethane (Ni catalyst); steam → ethanol (H₃PO₄).",
              "Br₂ supplies two Br atoms, one to each carbon.",
            ],
          },
          {
            id: "chem-organic-bq2-06",
            question: "Explain why an alkene is more reactive than the corresponding alkane, referring to bonding. (3 marks)",
            marks: 3,
            modelAnswer: "An alkene contains a carbon–carbon double bond (C=C), which is made up of a sigma bond and a pi bond. The pi bond has electron density that is exposed/accessible above and below the line of the carbons, so it can be readily attacked by reagents, allowing addition reactions. An alkane has only strong, non-polar single (sigma) bonds with no exposed electrons, so it is much less reactive.",
            markScheme: [
              "Alkene has a C=C double bond (sigma + pi)",
              "The pi bond electrons are exposed/accessible / area of high electron density",
              "So the alkene readily undergoes addition / alkane has only strong single bonds and is unreactive",
            ],
            commonError: "Just stating 'alkenes have a double bond' without explaining that the exposed pi electrons make it reactive towards addition.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Name the bond present in alkenes but not alkanes.",
              "Describe what the pi bond's electrons allow to happen.",
              "Contrast with the strong single bonds of the alkane.",
            ],
          },
          {
            id: "chem-organic-bq2-07",
            question: "A gas decolourises bromine water and also burns with a smoky/sooty flame. (a) What does the bromine water result tell you about the gas? (b) Suggest why it burns with a sooty flame. (3 marks)",
            marks: 3,
            modelAnswer: "(a) Decolourising bromine water shows the gas is unsaturated — it contains a C=C double bond, so it is an alkene.\n(b) Alkenes have a higher proportion (ratio) of carbon to hydrogen than alkanes. When burned, this larger amount of carbon is not fully oxidised (incomplete combustion), so unburnt carbon is released as soot, giving a smoky/sooty flame.",
            markScheme: [
              "(a) Gas is unsaturated / contains C=C / is an alkene",
              "(b) Alkenes have a higher carbon:hydrogen ratio / more carbon",
              "(b) Incomplete combustion releases carbon as soot",
            ],
            commonError: "Saying the sooty flame is caused by the double bond reacting with bromine — the flame is about the high carbon content and incomplete combustion.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "challenge",
            hints: [
              "Bromine water decolourising means one specific thing about the bonds.",
              "Compare the C:H ratio of alkenes and alkanes.",
              "More carbon → more soot when combustion is incomplete.",
            ],
          },
          {
            id: "chem-organic-bq2-08",
            question: "Ethene is made by cracking. State two different sets of conditions that can be used for cracking and, for each, name the type of cracking. (4 marks)",
            marks: 4,
            modelAnswer: "Set 1 — catalytic cracking: pass the alkane vapour over a hot catalyst (silica/alumina) at a high temperature of about 500 °C. Set 2 — steam cracking: mix the alkane with steam and heat it to a very high temperature (well above 700 °C) for a short time. Both break long-chain alkanes into shorter alkanes and alkenes such as ethene.",
            markScheme: [
              "Catalytic cracking named",
              "Catalytic conditions: high temperature (~500 °C) + silica/alumina catalyst",
              "Steam cracking named",
              "Steam conditions: very high temperature + steam",
            ],
            commonError: "Describing the same method twice. The two named methods are catalytic cracking (catalyst, ~500 °C) and steam cracking (steam, very high temperature).",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "One method uses a catalyst; the other uses steam.",
              "Catalytic cracking: ~500 °C with silica/alumina.",
              "Steam cracking: very high temperature with steam.",
            ],
          },
          {
            id: "chem-organic-bq2-09",
            question: "0.05 mol of an alkene reacts completely with 8.0 g of bromine (Br₂). (a) Calculate the amount, in moles, of bromine used. (Ar: Br = 80.) (b) Use the mole ratio to show that the alkene has exactly one C=C double bond per molecule. (4 marks)",
            marks: 4,
            modelAnswer: "(a) Mr of Br₂ = 2 × 80 = 160. Moles of Br₂ = mass ÷ Mr = 8.0 ÷ 160 = 0.05 mol.\n(b) Moles of alkene : moles of Br₂ = 0.05 : 0.05 = 1 : 1. Each C=C double bond adds exactly one Br₂ molecule, so a 1 : 1 ratio shows each alkene molecule contains exactly one C=C double bond.",
            markScheme: [
              "(a) Mr(Br₂) = 160",
              "(a) Moles Br₂ = 8.0 / 160 = 0.05 mol",
              "(b) Ratio alkene : Br₂ = 1 : 1",
              "(b) One Br₂ adds per C=C, so one double bond per molecule",
            ],
            commonError: "Using Ar = 80 for Br₂ instead of Mr = 160 (Br₂ is diatomic). Also forgetting that each double bond reacts with one Br₂.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "challenge",
            hints: [
              "Bromine is Br₂ — work out its Mr (2 × 80).",
              "Moles = mass ÷ Mr.",
              "Compare moles of alkene with moles of Br₂ — what is the ratio?",
              "One Br₂ adds across each C=C.",
            ],
            solutions: [
              {
                label: "Mole calculation and ratio reasoning",
                steps: [
                  "Mr of Br₂ = 2 × 80 = 160.",
                  "Moles of Br₂ = 8.0 g ÷ 160 g/mol = 0.05 mol.",
                  "Ratio alkene : Br₂ = 0.05 : 0.05 = 1 : 1.",
                  "Since one Br₂ adds across one C=C, a 1 : 1 ratio means one double bond per alkene molecule.",
                ],
              },
            ],
          },
          {
            id: "chem-organic-bq2-10",
            question: "Distinguish between an addition reaction and a substitution reaction, using ethene + bromine and methane + bromine as your examples. Include an equation for each. (5 marks)",
            marks: 5,
            modelAnswer: "In an addition reaction, atoms add across a C=C double bond to give a single product with no by-product. Ethene + bromine: CH₂=CH₂ + Br₂ → BrCH₂CH₂Br (1,2-dibromoethane) — one product only, and it occurs without UV light.\n\nIn a substitution reaction, one atom in a saturated molecule is replaced by another atom, producing a second (by-)product. Methane + bromine (in UV light): CH₄ + Br₂ → CH₃Br + HBr — two products (bromomethane and hydrogen bromide), and UV light is needed.",
            markScheme: [
              "Addition: atoms add across C=C / one product, no by-product",
              "Addition equation: CH₂=CH₂ + Br₂ → BrCH₂CH₂Br (or C₂H₄Br₂)",
              "Substitution: one atom replaced, gives a second product",
              "Substitution equation: CH₄ + Br₂ → CH₃Br + HBr",
              "Substitution needs UV light / addition does not",
            ],
            commonError: "Giving HBr as a by-product of the addition reaction — addition makes only one product. Forgetting that substitution needs UV light.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "challenge",
            hints: [
              "Addition: how many products form, and is there a C=C?",
              "Substitution: an atom is swapped, so a second product (HBr) appears.",
              "Note the condition difference (UV light) and write both equations.",
            ],
          },
        ],
      },
      {
        id: "chem-organic-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Alcohols, ethanol manufacture and carboxylic acids.",
        questions: [
          {
            id: "chem-organic-bq3-01",
            question: "(a) Name the functional group present in all alcohols and give its formula. (b) Write the molecular formula of ethanol and draw out its structural (displayed) arrangement in words. (3 marks)",
            marks: 3,
            modelAnswer: "(a) The functional group is the hydroxyl group, –OH.\n(b) Ethanol is C₂H₅OH (or CH₃CH₂OH): a CH₃ group bonded to a CH₂ group, with the CH₂ also bonded to an –OH group, i.e. CH₃–CH₂–OH.",
            markScheme: [
              "(a) Hydroxyl group",
              "(a) Formula –OH",
              "(b) C₂H₅OH / CH₃CH₂OH (showing the OH on the end carbon)",
            ],
            commonError: "Writing the formula as C₂H₆O without showing the –OH, which hides the functional group; in organic chemistry show it as C₂H₅OH.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bq3-02",
            question: "Ethanol can be made by fermentation. (a) Write the balanced equation for the fermentation of glucose (C₆H₁₂O₆). (b) State the conditions required. (4 marks)",
            marks: 4,
            modelAnswer: "(a) C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.\n(b) Conditions: yeast (which contains the enzyme zymase); a warm temperature of about 30–37 °C; anaerobic conditions (no air/oxygen); in aqueous solution.",
            markScheme: [
              "(a) Correct products 2C₂H₅OH + 2CO₂",
              "(a) Equation balanced: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",
              "(b) Yeast / enzyme zymase",
              "(b) ~35 °C and anaerobic (no air)",
            ],
            commonError: "Forgetting to balance (one glucose gives TWO ethanol and TWO CO₂), or giving aerobic conditions — fermentation is anaerobic.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "core",
            hints: [
              "Glucose splits into ethanol and a gas.",
              "Balance: 1 glucose → 2 ethanol + 2 CO₂.",
              "Conditions: yeast, ~35 °C, no air.",
            ],
          },
          {
            id: "chem-organic-bq3-03",
            question: "Compare the manufacture of ethanol by fermentation and by hydration of ethene. Refer to raw material, rate, temperature and purity, and give one advantage of each method. (6 marks)",
            marks: 6,
            modelAnswer: "Fermentation: raw material is glucose/sugar (renewable, from plants); the process is slow and done in batches; it uses a low temperature (~35 °C); the ethanol produced is impure/dilute and needs distillation. Advantage: uses a renewable raw material and little energy.\n\nHydration of ethene: raw material is ethene (from cracking crude oil — non-renewable); the process is fast and continuous; it uses a high temperature (~300 °C) and high pressure (~60 atm) with a phosphoric acid catalyst; the product is pure. Advantage: fast, continuous and gives a high-purity product.",
            markScheme: [
              "Fermentation raw material: glucose/sugar (renewable)",
              "Fermentation: slow/batch and low temperature (~35 °C)",
              "Fermentation advantage: renewable / low energy",
              "Hydration raw material: ethene (from crude oil, non-renewable)",
              "Hydration: fast/continuous, high temperature (~300 °C)/pressure, pure product",
              "Hydration advantage: fast/continuous/pure",
            ],
            commonError: "Mixing up the two routes — e.g. saying fermentation uses a catalyst or that hydration uses yeast.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "core",
            hints: [
              "Address each factor for BOTH methods.",
              "Fermentation: renewable, slow, low temp, impure.",
              "Hydration: non-renewable, fast/continuous, high temp/pressure, pure.",
            ],
          },
          {
            id: "chem-organic-bq3-04",
            question: "(a) Write the balanced equation for the complete combustion of ethanol. (b) Give two uses of ethanol and state which property each use depends on. (5 marks)",
            marks: 5,
            modelAnswer: "(a) C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.\n(b) Use 1: as a fuel (e.g. in 'gasohol' or spirit burners) — this depends on ethanol being flammable and releasing energy when it burns. Use 2: as a solvent (in perfumes, cosmetics, medicines and cleaning products) — this depends on ethanol's ability to dissolve substances that do not dissolve well in water.",
            markScheme: [
              "(a) Correct products 2CO₂ + 3H₂O",
              "(a) Equation balanced: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O",
              "(b) Use as a fuel — flammable / releases energy",
              "(b) Use as a solvent — dissolves substances (that water cannot)",
              "(b) Both uses correctly linked to a property",
            ],
            commonError: "Forgetting ethanol's own oxygen when balancing combustion (so writing too much O₂), or giving two uses without linking each to a property.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "core",
            hints: [
              "Balance C (2 CO₂) and H (3 H₂O) first.",
              "Ethanol already contains one O atom — subtract it when finding O₂.",
              "Link each use to the property it depends on.",
            ],
            solutions: [
              {
                label: "Balancing ethanol combustion",
                steps: [
                  "Skeleton: C₂H₅OH + O₂ → CO₂ + H₂O.",
                  "Balance carbon: 2 CO₂. Balance hydrogen: 6 H → 3 H₂O.",
                  "Oxygen on the right = (2 × 2) + 3 = 7 atoms.",
                  "Ethanol supplies 1 O atom, so O₂ must supply 6 = 3O₂.",
                  "Final: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Check O: 1 + 6 = 7 = 4 + 3.",
                ],
              },
            ],
          },
          {
            id: "chem-organic-bq3-05",
            question: "Ethanol made by fermentation is sometimes described as 'carbon-neutral'. Discuss whether this description is fully accurate. (4 marks)",
            marks: 4,
            modelAnswer: "When the sugar crop grows, the plant takes in carbon dioxide from the air by photosynthesis. When the ethanol is later burned, it releases carbon dioxide. In theory the CO₂ released balances the CO₂ absorbed, so the fuel is 'carbon-neutral'. However, this is an idealisation: energy is needed to farm, harvest, transport and distil the ethanol, and this energy often comes from fossil fuels which release extra CO₂. So the net CO₂ saving is less than 100%, and 'carbon-neutral' is not fully accurate.",
            markScheme: [
              "Crop absorbs CO₂ during growth (photosynthesis)",
              "Burning ethanol releases CO₂ — in theory these balance",
              "But farming/transport/distillation use energy (often fossil fuels)",
              "So extra CO₂ is released → not fully carbon-neutral",
            ],
            commonError: "Claiming it is 100% carbon-neutral with no qualification, or ignoring the CO₂ absorbed during growth entirely.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "challenge",
            hints: [
              "Where does the carbon in the plant come from?",
              "What is released when the ethanol burns?",
              "Think about the energy used to grow, transport and distil it.",
            ],
          },
          {
            id: "chem-organic-bq3-06",
            question: "(a) Name the functional group of carboxylic acids and give the name and formula of the carboxylic acid found in vinegar. (b) Ethanoic acid is a weak acid. Write an equation, using the correct arrow, to show its behaviour in water and explain what 'weak' means. (4 marks)",
            marks: 4,
            modelAnswer: "(a) The functional group is the carboxyl group, –COOH. The acid in vinegar is ethanoic acid, CH₃COOH.\n(b) CH₃COOH ⇌ CH₃COO⁻ + H⁺. 'Weak' means the acid only partially ionises (dissociates) in water — the equilibrium lies to the left, so at any moment only a small fraction of the molecules have split into ions.",
            markScheme: [
              "(a) Carboxyl group / –COOH",
              "(a) Ethanoic acid, CH₃COOH",
              "(b) Equation with reversible arrow: CH₃COOH ⇌ CH₃COO⁻ + H⁺",
              "(b) Weak = partially ionises/dissociates in water",
            ],
            commonError: "Using a single forward arrow (→) for a weak acid — a reversible (⇌) arrow is essential. Confusing 'weak' with 'dilute'.",
            guideRef: "Carboxylic Acids",
            difficulty: "core",
            hints: [
              "Name the group; recall the acid in vinegar.",
              "A weak acid needs a reversible (⇌) arrow.",
              "'Weak' refers to partial ionisation, not concentration.",
            ],
          },
          {
            id: "chem-organic-bq3-07",
            question: "Ethanoic acid behaves as a typical acid. Write balanced equations for its reaction with: (a) magnesium; (b) sodium hydroxide; (c) sodium carbonate. Name the salt in each case. (6 marks)",
            marks: 6,
            modelAnswer: "(a) 2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂. Salt: magnesium ethanoate.\n(b) CH₃COOH + NaOH → CH₃COONa + H₂O. Salt: sodium ethanoate.\n(c) 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂. Salt: sodium ethanoate.",
            markScheme: [
              "(a) 2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂; salt = magnesium ethanoate",
              "(b) CH₃COOH + NaOH → CH₃COONa + H₂O; salt = sodium ethanoate",
              "(c) 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂; salt = sodium ethanoate",
              "Equations balanced",
              "Correct salt names (ethanoates)",
              "Correct extra products (H₂; H₂O; H₂O + CO₂)",
            ],
            commonError: "Forgetting the '2' in front of CH₃COOH when reacting with Mg or Na₂CO₃ (the metal/carbonate needs two acid molecules). Naming salts as 'acetates' is acceptable but 'ethanoate' is the IGCSE preferred name.",
            guideRef: "Carboxylic Acids",
            difficulty: "challenge",
            hints: [
              "Use the acid templates: + metal → salt + H₂; + base → salt + water; + carbonate → salt + water + CO₂.",
              "Mg is 2+, so it needs two ethanoate ions: (CH₃COO)₂Mg.",
              "Na₂CO₃ also needs two acid molecules to balance.",
            ],
          },
          {
            id: "chem-organic-bq3-08",
            question: "Ethanoic acid is warmed gently with ethanol and a few drops of concentrated sulfuric acid. (a) Write the equation for the reaction, using a reversible arrow. (b) Name the organic product. (c) State the role of the concentrated sulfuric acid. (4 marks)",
            marks: 4,
            modelAnswer: "(a) CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O.\n(b) The organic product is ethyl ethanoate (an ester, which is sweet-smelling).\n(c) The concentrated sulfuric acid acts as a catalyst (it speeds up the reaction); it also acts as a dehydrating agent that helps drive the equilibrium towards the ester.",
            markScheme: [
              "(a) Equation with reversible arrow ⇌, ester + water as products",
              "(b) Ethyl ethanoate (ester)",
              "(c) Concentrated sulfuric acid is a catalyst",
            ],
            commonError: "Writing a single forward arrow (esterification is reversible), or naming the ester the wrong way round (it is ethyl ethanoate, not ethanoate ethyl).",
            guideRef: "Carboxylic Acids",
            difficulty: "core",
            hints: [
              "Acid + alcohol → ester + water.",
              "Name the ester: ethyl (from ethanol) + ethanoate (from the acid).",
              "What does the sulfuric acid do to the rate?",
            ],
          },
          {
            id: "chem-organic-bq3-09",
            question: "Explain why ethanoic acid (Mr = 60) has a higher boiling point than ethanol (Mr = 46), even though their molar masses are similar. (3 marks)",
            marks: 3,
            modelAnswer: "Both molecules can form hydrogen bonds, but ethanoic acid contains the –COOH group, which has both a C=O and an O–H, allowing it to form stronger and more extensive hydrogen bonding between molecules (carboxylic acids can even pair up as dimers). These stronger intermolecular forces require more energy to overcome, so ethanoic acid boils at a higher temperature than ethanol.",
            markScheme: [
              "Both can hydrogen bond, but ethanoic acid hydrogen bonds more strongly/extensively (–COOH group)",
              "Stronger intermolecular forces (hydrogen bonding) between ethanoic acid molecules",
              "More energy needed to overcome forces → higher boiling point",
            ],
            commonError: "Explaining the difference by molar mass — the question states the masses are similar, so the answer must be about hydrogen bonding strength.",
            guideRef: "Carboxylic Acids",
            difficulty: "challenge",
            hints: [
              "Both have an O–H, but what extra group does the acid have?",
              "The –COOH group allows stronger hydrogen bonding.",
              "Stronger intermolecular forces → higher boiling point.",
            ],
          },
          {
            id: "chem-organic-bq3-10",
            question: "A sample of vinegar contains ethanoic acid. 25.0 cm³ of the vinegar is neutralised by 20.0 cm³ of 0.50 mol/dm³ sodium hydroxide. (a) Write the equation for the neutralisation. (b) Calculate the moles of NaOH used. (c) Calculate the concentration of ethanoic acid in the vinegar in mol/dm³. (6 marks)",
            marks: 6,
            modelAnswer: "(a) CH₃COOH + NaOH → CH₃COONa + H₂O.\n(b) Moles of NaOH = concentration × volume = 0.50 × (20.0 / 1000) = 0.010 mol.\n(c) The equation shows a 1 : 1 ratio, so moles of CH₃COOH = 0.010 mol. Concentration of ethanoic acid = moles / volume = 0.010 / (25.0 / 1000) = 0.40 mol/dm³.",
            markScheme: [
              "(a) CH₃COOH + NaOH → CH₃COONa + H₂O",
              "(b) Moles NaOH = 0.50 × 20.0/1000 = 0.010 mol",
              "(c) Ratio 1:1, so moles CH₃COOH = 0.010 mol",
              "(c) Concentration = 0.010 / (25.0/1000) = 0.40 mol/dm³",
            ],
            commonError: "Not converting cm³ to dm³ (divide by 1000), or forgetting the 1 : 1 mole ratio so that the acid moles equal the alkali moles.",
            guideRef: "Carboxylic Acids",
            difficulty: "challenge",
            hints: [
              "Write the neutralisation equation and note the 1 : 1 ratio.",
              "Moles = concentration × volume (in dm³); convert cm³ ÷ 1000.",
              "Acid moles = alkali moles here.",
              "Concentration = moles ÷ volume of acid (in dm³).",
            ],
            solutions: [
              {
                label: "Titration calculation",
                steps: [
                  "Equation: CH₃COOH + NaOH → CH₃COONa + H₂O (1 : 1 ratio).",
                  "Convert NaOH volume: 20.0 cm³ = 0.0200 dm³.",
                  "Moles NaOH = 0.50 mol/dm³ × 0.0200 dm³ = 0.010 mol.",
                  "Mole ratio 1 : 1, so moles CH₃COOH = 0.010 mol.",
                  "Convert acid volume: 25.0 cm³ = 0.0250 dm³.",
                  "Concentration = 0.010 mol ÷ 0.0250 dm³ = 0.40 mol/dm³.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-organic-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Polymers, plastics, environmental issues and synoptic organic chemistry.",
        questions: [
          {
            id: "chem-organic-bq4-01",
            question: "(a) What is addition polymerisation? (b) Name the monomer used to make poly(ethene) and give its molecular formula. (3 marks)",
            marks: 3,
            modelAnswer: "(a) Addition polymerisation is the joining together of many small unsaturated monomer molecules (containing C=C double bonds) into one long polymer chain, with no other product formed.\n(b) The monomer is ethene, C₂H₄ (CH₂=CH₂).",
            markScheme: [
              "(a) Many monomers join to form a long chain / polymer",
              "(a) Monomers are unsaturated (C=C) and no other product is formed",
              "(b) Ethene, C₂H₄",
            ],
            commonError: "Saying a small molecule (e.g. water) is also formed — that is condensation polymerisation, not addition.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bq4-02",
            question: "Ethene polymerises to form poly(ethene). (a) Write an equation for the polymerisation using n and the repeat unit. (b) State why no by-product is formed. (3 marks)",
            marks: 3,
            modelAnswer: "(a) n CH₂=CH₂ → –(CH₂–CH₂)ₙ–.\n(b) In addition polymerisation the C=C double bond in each monomer simply opens and the monomers bond directly to one another; all the atoms of the monomers end up in the polymer, so there is nothing left over to form a by-product.",
            markScheme: [
              "(a) n CH₂=CH₂ → on the left",
              "(a) Repeat unit –(CH₂–CH₂)ₙ– with brackets and n",
              "(b) Double bond opens / all atoms kept in the polymer / no atoms removed",
            ],
            commonError: "Leaving the double bond in the repeat unit (it must become a single bond) or omitting the brackets and n.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "Put n in front of the monomer.",
              "Draw the repeat unit in brackets with a single C–C bond and subscript n.",
              "For (b), think about whether any atoms are removed during the reaction.",
            ],
          },
          {
            id: "chem-organic-bq4-03",
            question: "Propene has the formula CH₂=CHCH₃. (a) Draw, in words, the repeat unit of poly(propene). (b) Explain how you can tell that propene can undergo addition polymerisation. (3 marks)",
            marks: 3,
            modelAnswer: "(a) The repeat unit is –CH₂–CH(CH₃)–, written in brackets with subscript n: –(CH₂–CH(CH₃))ₙ–. The –CH₃ group hangs off the chain as a side group.\n(b) Propene contains a C=C double bond (it is unsaturated). Addition polymerisation requires monomers with a C=C that can open and join, so propene can polymerise in this way.",
            markScheme: [
              "(a) Repeat unit –(CH₂–CH(CH₃))ₙ– with brackets and n",
              "(a) CH₃ shown as a side group / single C–C backbone",
              "(b) Propene has a C=C double bond / is unsaturated, which is required for addition polymerisation",
            ],
            commonError: "Drawing the repeat unit as –(CH₂–CH₂)ₙ– (that is poly(ethene)) and losing the methyl side group.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "Open the C=C and keep the CH₃ as a branch.",
              "Backbone is two carbons; one carries the CH₃ group.",
              "For (b), what feature must a monomer have to add-polymerise?",
            ],
          },
          {
            id: "chem-organic-bq4-04",
            question: "Part of a polymer chain is shown: –CH₂–CF₂–CH₂–CF₂–. (a) Write the repeat unit. (b) Draw, in words, the displayed formula of the monomer. (c) Name the polymer and give one use. (4 marks)",
            marks: 4,
            modelAnswer: "(a) The repeat unit is –(CH₂–CF₂)ₙ–.\n(b) The monomer is CH₂=CF₂ (1,1-difluoroethene): two carbon atoms joined by a C=C double bond, one carbon carrying two hydrogen atoms and the other carrying two fluorine atoms. (The fully fluorinated analogue CF₂=CF₂ gives PTFE.)\n(c) A poly(fluoroethene)-type polymer; PTFE (poly(tetrafluoroethene), from CF₂=CF₂) is used as a non-stick coating for pans.",
            markScheme: [
              "(a) Repeat unit –(CH₂–CF₂)ₙ–",
              "(b) Monomer contains a C=C double bond, with two H on one C and two F on the other (CH₂=CF₂)",
              "(c) PTFE / fluorinated polymer named",
              "(c) Use: non-stick coating / cookware / low-friction surfaces",
            ],
            commonError: "For (b), drawing the monomer without a C=C (it must contain the double bond) or putting the F and H atoms on the wrong carbons.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "challenge",
            hints: [
              "The repeat unit is the smallest section that repeats: –CH₂–CF₂–.",
              "Restore a C=C between the two carbons to get the monomer.",
              "Keep two H on one carbon and two F on the other.",
            ],
          },
          {
            id: "chem-organic-bq4-05",
            question: "Most addition polymers are non-biodegradable. (a) Explain what 'non-biodegradable' means and why this is an environmental problem. (b) Describe two different methods of disposing of waste plastics and give one disadvantage of each. (6 marks)",
            marks: 6,
            modelAnswer: "(a) 'Non-biodegradable' means that microorganisms (decomposers) cannot break the polymer down. This is a problem because the plastic persists in the environment for a very long time (centuries) — it accumulates in landfill and in the oceans, where it can harm or kill wildlife (e.g. animals eat it or become entangled).\n(b) Method 1 — landfill: the plastic is buried. Disadvantage: it takes up large amounts of land and the plastic remains there for a very long time (and may leach chemicals). Method 2 — incineration (burning): the plastic is burned, sometimes for energy recovery. Disadvantage: it releases carbon dioxide (a greenhouse gas), and burning some plastics (e.g. PVC) releases toxic gases such as HCl. (Recycling is another method; its disadvantage is that plastics must be sorted/cleaned, which is costly.)",
            markScheme: [
              "(a) Non-biodegradable = cannot be broken down by microorganisms/decomposers",
              "(a) Persists for a long time / accumulates in landfill or oceans / harms wildlife",
              "(b) Method 1 named (e.g. landfill) with a disadvantage (uses land / persists)",
              "(b) Method 2 named (e.g. incineration) with a disadvantage (CO₂ / toxic gases)",
              "(b) Each method clearly distinct",
              "(b) Each disadvantage correct and relevant",
            ],
            commonError: "Giving advantages instead of disadvantages, or naming two versions of the same method. Make the two disposal methods genuinely different.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "'Bio-degrade' = broken down by living things (microbes).",
              "Why is something that never rots a problem for land and oceans?",
              "Pick two truly different disposal routes (e.g. landfill vs incineration) and a flaw of each.",
            ],
          },
          {
            id: "chem-organic-bq4-06",
            question: "Burning PVC (poly(chloroethene)) for energy recovery causes particular environmental concern compared with burning poly(ethene). (a) Identify the element in PVC responsible for this. (b) Name a toxic gas produced and describe its harmful effect. (3 marks)",
            marks: 3,
            modelAnswer: "(a) The responsible element is chlorine (PVC contains chlorine atoms; poly(ethene) does not).\n(b) Burning PVC releases hydrogen chloride (HCl) gas. HCl is toxic and corrosive: it irritates and damages the lungs and airways if inhaled, and contributes to acid rain. (Toxic dioxins may also form.)",
            markScheme: [
              "(a) Chlorine",
              "(b) Toxic gas: hydrogen chloride (HCl) / or dioxins",
              "(b) Harmful effect: corrosive/toxic to lungs / causes acid rain",
            ],
            commonError: "Saying carbon dioxide is the special problem — both plastics release CO₂; the difference for PVC is the chlorine-containing toxic gases.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "Compare the atoms in PVC and poly(ethene) — what extra element does PVC have?",
              "That element forms an acidic, toxic gas when burned.",
              "Name the gas and say what it does to the body/environment.",
            ],
          },
          {
            id: "chem-organic-bq4-07",
            question: "Ethene is a key building block in organic chemistry. Starting from ethene, describe how you would make: (a) poly(ethene); (b) ethanol; (c) ethane. Give the reagents/conditions for each. (6 marks)",
            marks: 6,
            modelAnswer: "(a) Poly(ethene): subject many ethene molecules to addition polymerisation under high pressure with a catalyst (or low pressure with a Ziegler-type catalyst) — n CH₂=CH₂ → –(CH₂CH₂)ₙ–.\n(b) Ethanol: react ethene with steam (water vapour) using a phosphoric acid (H₃PO₄) catalyst at about 300 °C and 60 atm — C₂H₄ + H₂O → C₂H₅OH (hydration).\n(c) Ethane: react ethene with hydrogen over a nickel catalyst at about 150 °C — C₂H₄ + H₂ → C₂H₆ (hydrogenation).",
            markScheme: [
              "(a) Addition polymerisation; high pressure + catalyst",
              "(b) Steam + H₃PO₄ catalyst (~300 °C, ~60 atm) → ethanol",
              "(c) Hydrogen + nickel catalyst (~150 °C) → ethane",
              "Reagents and products correct for each route",
              "Conditions/catalysts correct for hydration and hydrogenation",
              "Three distinct, correct routes",
            ],
            commonError: "Swapping the catalysts for hydration and hydrogenation (phosphoric acid is for steam/hydration; nickel is for hydrogen/hydrogenation).",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "challenge",
            hints: [
              "Three different reagents add across the same C=C.",
              "Many ethene → polymer (high pressure/catalyst).",
              "Steam → ethanol (H₃PO₄); hydrogen → ethane (Ni).",
            ],
          },
          {
            id: "chem-organic-bq4-08",
            question: "Four organic compounds are: ethane, ethene, ethanol and ethanoic acid. (a) Which one decolourises bromine water, and why? (b) Which one fizzes when added to sodium carbonate, and what gas is produced? (c) Which TWO can act as fuels by complete combustion? (5 marks)",
            marks: 5,
            modelAnswer: "(a) Ethene decolourises bromine water because it is unsaturated (contains a C=C double bond) and undergoes an addition reaction with bromine.\n(b) Ethanoic acid fizzes with sodium carbonate (acid + carbonate); the gas produced is carbon dioxide (CO₂).\n(c) Ethane and ethanol can both be used as fuels — they undergo complete combustion in oxygen to give CO₂ and H₂O, releasing energy. (Ethene also burns, but ethane and ethanol are the standard fuel examples here.)",
            markScheme: [
              "(a) Ethene; because it contains a C=C / is unsaturated (addition reaction)",
              "(b) Ethanoic acid; gas = carbon dioxide",
              "(c) Two suitable fuels named (e.g. ethane and ethanol)",
              "(c) Linked to complete combustion → CO₂ + H₂O / releases energy",
              "Overall correct matching of properties to compounds",
            ],
            commonError: "Picking ethane (an alkane) for the bromine water test — alkanes do not react. Forgetting that the carbonate reaction gives CO₂, not hydrogen.",
            guideRef: "Carboxylic Acids",
            difficulty: "core",
            hints: [
              "Bromine water detects a C=C — which compound has one?",
              "Carbonates fizz with acids; which compound is the acid?",
              "Fuels burn to release energy — which compounds combust well?",
            ],
          },
          {
            id: "chem-organic-bq4-09",
            question: "0.56 g of ethene (C₂H₄) is completely polymerised to poly(ethene). (a) Calculate the moles of ethene used. (Mr of C₂H₄ = 28.) (b) State the mass of poly(ethene) formed, explaining your answer. (4 marks)",
            marks: 4,
            modelAnswer: "(a) Moles of ethene = mass ÷ Mr = 0.56 ÷ 28 = 0.020 mol.\n(b) The mass of poly(ethene) formed is 0.56 g. In addition polymerisation no atoms are lost and no by-product is formed — all the atoms of the ethene end up in the polymer — so by conservation of mass the polymer has the same mass as the ethene that reacted.",
            markScheme: [
              "(a) Moles ethene = 0.56 / 28 = 0.020 mol",
              "(b) Mass of poly(ethene) = 0.56 g",
              "(b) Reason: no by-product / no atoms lost / conservation of mass",
            ],
            commonError: "Thinking the polymer mass differs from the monomer mass — in addition polymerisation nothing is lost, so mass is conserved.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "challenge",
            hints: [
              "Moles = mass ÷ Mr.",
              "In addition polymerisation, is any atom removed?",
              "If no atoms are lost, the polymer mass equals the monomer mass.",
            ],
            solutions: [
              {
                label: "Moles and mass by conservation",
                steps: [
                  "Moles of ethene = 0.56 g ÷ 28 g/mol = 0.020 mol.",
                  "Addition polymerisation forms no by-product, so no mass is lost.",
                  "By conservation of mass, mass of poly(ethene) = mass of ethene = 0.56 g.",
                ],
              },
            ],
          },
          {
            id: "chem-organic-bq4-10",
            question: "Compound Z is an organic liquid. It dissolves magnesium with effervescence, turns moist blue litmus red, and reacts with ethanol (with a concentrated H₂SO₄ catalyst) to give a sweet-smelling product. (a) Identify the homologous series Z belongs to and explain your reasoning. (b) Name the sweet-smelling product if Z is ethanoic acid, and the type of reaction. (c) Write the equation for Z reacting with magnesium. (6 marks)",
            marks: 6,
            modelAnswer: "(a) Z is a carboxylic acid. The evidence: it reacts with a metal (magnesium) with effervescence and turns blue litmus red, showing it is an acid; and it reacts with an alcohol in the presence of a concentrated sulfuric acid catalyst to form a sweet-smelling ester, which is the characteristic reaction (esterification) of carboxylic acids.\n(b) If Z is ethanoic acid (CH₃COOH) reacting with ethanol, the sweet-smelling product is ethyl ethanoate (an ester). The reaction is esterification.\n(c) 2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂ (magnesium ethanoate + hydrogen).",
            markScheme: [
              "(a) Z is a carboxylic acid",
              "(a) Reasoning: acidic (reacts with metal/turns litmus red) AND forms an ester with an alcohol",
              "(b) Ethyl ethanoate (ester)",
              "(b) Reaction type: esterification",
              "(c) 2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂",
              "(c) Equation balanced with H₂ as the gas",
            ],
            commonError: "Identifying Z as an alcohol — alcohols do not turn litmus red or fizz with metals readily. The esterification clue plus acidity points to a carboxylic acid.",
            guideRef: "Carboxylic Acids",
            difficulty: "challenge",
            hints: [
              "What kind of compound fizzes with a metal and turns litmus red?",
              "Reaction with an alcohol to give a sweet smell is esterification — typical of acids.",
              "Balance the metal reaction: Mg needs two acid molecules.",
            ],
          },
        ],
      },
    ],
  },
};
