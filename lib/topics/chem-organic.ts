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
        description: "Crude oil, fractional distillation, homologous series, alkanes and combustion.",
        questions: [
          {
            id: "chem-organic-bm1-01",
            question: "Which term correctly describes crude oil?",
            options: [
              "A compound of carbon and hydrogen",
              "A mixture of hydrocarbons",
              "A single pure hydrocarbon",
              "A compound separated by chemical reaction",
            ],
            answerIndex: 1,
            explanation: "Crude oil is a mixture of many different hydrocarbons (compounds of carbon and hydrogen only). Because it is a mixture, its components keep their own properties and can be separated by a physical method (fractional distillation), not a chemical reaction.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm1-02",
            question: "In a fractionating column, where is the temperature highest and which fraction is collected there?",
            options: [
              "Top of the column; refinery gas",
              "Top of the column; bitumen",
              "Bottom of the column; bitumen / fuel oil",
              "Middle of the column; kerosene",
            ],
            answerIndex: 2,
            explanation: "The column is hottest at the bottom (~350 °C) and coolest at the top (~25 °C). Long-chain fractions with the highest boiling points (fuel oil, and the bitumen residue) are collected at the bottom; short-chain refinery gas leaves the top.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm1-03",
            question: "Which list places the fractions in the correct order from the TOP of the column downwards?",
            options: [
              "Bitumen, diesel, kerosene, petrol, refinery gas",
              "Refinery gas, petrol, kerosene, diesel, bitumen",
              "Petrol, refinery gas, kerosene, bitumen, diesel",
              "Refinery gas, kerosene, petrol, diesel, bitumen",
            ],
            answerIndex: 1,
            explanation: "From the top (coolest, shortest chains) downwards: refinery gas → gasoline/petrol → naphtha → kerosene → diesel → fuel oil → bitumen. Boiling point, chain length and viscosity all increase down the column.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "core",
            hints: [
              "Shortest chains have the lowest boiling points and are collected at the top.",
              "Order by increasing chain length: refinery gas is C1–C4; bitumen is C70+.",
              "Petrol comes before kerosene, which comes before diesel.",
            ],
          },
          {
            id: "chem-organic-bm1-04",
            question: "Which property DECREASES going down the fractionating column (towards longer chains)?",
            options: ["Boiling point", "Viscosity", "Flammability / ease of ignition", "Chain length"],
            answerIndex: 2,
            explanation: "Going down the column, chain length, boiling point and viscosity all increase, while flammability (ease of ignition) decreases. Longer chains have stronger intermolecular forces, so they are more viscous and harder to vaporise and ignite.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "core",
            hints: [
              "Three of these four properties increase down the column.",
              "Long, heavy molecules like fuel oil are hard to set alight.",
              "Think about which property makes a fuel easy to ignite — does that improve or worsen for long chains?",
            ],
          },
          {
            id: "chem-organic-bm1-05",
            question: "Which is the general formula of the alkanes?",
            options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁OH"],
            answerIndex: 1,
            explanation: "Alkanes are saturated hydrocarbons with the general formula CₙH₂ₙ₊₂ (e.g. CH₄, C₂H₆, C₃H₈). CₙH₂ₙ is the alkenes; CₙH₂ₙ₊₁OH is the alcohols.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm1-06",
            question: "Which feature is NOT a characteristic of a homologous series?",
            options: [
              "Members have the same general formula",
              "Members have the same functional group",
              "Successive members differ by CH₂",
              "All members have identical physical properties",
            ],
            answerIndex: 3,
            explanation: "Members of a homologous series show a GRADUAL CHANGE in physical properties (e.g. rising boiling point) as chain length increases — they are not identical. They do share the same general formula, the same functional group, and differ from each other by –CH₂–.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "Three of these statements are true for every homologous series.",
              "Do methane and butane boil at the same temperature?",
              "Physical properties change gradually; chemical properties stay similar.",
            ],
          },
          {
            id: "chem-organic-bm1-07",
            question: "Which equation correctly represents the complete combustion of methane?",
            options: [
              "CH₄ + O₂ → CO₂ + H₂O",
              "CH₄ + 2O₂ → CO₂ + 2H₂O",
              "CH₄ + 2O₂ → CO + 2H₂O",
              "2CH₄ + 3O₂ → 2CO + 4H₂O",
            ],
            answerIndex: 1,
            explanation: "Complete combustion gives CO₂ and H₂O only, and the equation must balance. CH₄ + 2O₂ → CO₂ + 2H₂O: C 1=1, H 4=4, O 4=2+2=4. Option A is unbalanced; options C and D give CO (incomplete combustion).",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "Complete combustion produces carbon dioxide and water only.",
              "Balance carbon, then hydrogen, then oxygen.",
              "Two water molecules contain 2 O; one CO₂ contains 2 O — so you need 4 O atoms = 2 O₂.",
            ],
          },
          {
            id: "chem-organic-bm1-08",
            question: "Incomplete combustion of a hydrocarbon in a faulty gas heater is dangerous mainly because it produces a gas that is",
            options: [
              "flammable and explosive (hydrogen)",
              "toxic and binds to haemoglobin (carbon monoxide)",
              "acidic and causes acid rain (sulfur dioxide)",
              "a greenhouse gas only (carbon dioxide)",
            ],
            answerIndex: 1,
            explanation: "Incomplete combustion (limited oxygen) produces carbon monoxide, CO. CO is toxic because it binds irreversibly to haemoglobin, reducing the blood's ability to carry oxygen. It is colourless and odourless, which makes it especially dangerous.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "Limited oxygen means carbon is only partly oxidised.",
              "The product has one oxygen atom per carbon, not two.",
              "It interferes with oxygen transport in the blood.",
            ],
          },
          {
            id: "chem-organic-bm1-09",
            question: "Ethane (C₂H₆) reacts with chlorine in ultraviolet light. Which set of products is correct?",
            options: [
              "C₂H₅Cl + HCl",
              "C₂H₄ + 2HCl",
              "C₂H₆Cl₂ only",
              "C₂H₅Cl + H₂",
            ],
            answerIndex: 0,
            explanation: "This is photochemical substitution: one H atom is replaced by one Cl atom, releasing HCl. C₂H₆ + Cl₂ → C₂H₅Cl (chloroethane) + HCl. No double bond forms (that would be elimination), and H₂ is not a product.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "challenge",
            hints: [
              "UV light + alkane + halogen means a substitution reaction.",
              "One hydrogen is swapped for one chlorine atom.",
              "The displaced hydrogen leaves combined with chlorine as HCl.",
              "So the products are chloroethane (C₂H₅Cl) and HCl.",
            ],
            strategy: "Substitution always gives two products: the halogenoalkane and HX.",
          },
          {
            id: "chem-organic-bm1-10",
            question: "Pentane (C₅H₁₂) burns in a plentiful supply of oxygen. How many molecules of oxygen are needed to balance the equation C₅H₁₂ + xO₂ → 5CO₂ + 6H₂O?",
            options: ["5", "6", "8", "11"],
            answerIndex: 2,
            explanation: "Count oxygen atoms on the right: 5CO₂ has 10 O and 6H₂O has 6 O, giving 16 O atoms. Each O₂ supplies 2 O atoms, so x = 16 ÷ 2 = 8. The balanced equation is C₅H₁₂ + 8O₂ → 5CO₂ + 6H₂O.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "challenge",
            hints: [
              "First balance C and H to get 5CO₂ and 6H₂O.",
              "Count all oxygen atoms on the product side.",
              "10 O (from CO₂) + 6 O (from H₂O) = 16 O atoms.",
              "Divide by 2 because oxygen is O₂: 16 ÷ 2 = 8.",
            ],
            strategy: "Balance C and H first, total the product O atoms, then divide by 2 for O₂.",
          },
        ],
      },
      {
        id: "chem-organic-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Alkenes, the bromine water test, cracking and addition reactions.",
        questions: [
          {
            id: "chem-organic-bm2-01",
            question: "What structural feature do all alkenes contain?",
            options: [
              "A carbon–carbon single bond only",
              "A carbon–carbon double bond (C=C)",
              "A hydroxyl group (–OH)",
              "A carboxyl group (–COOH)",
            ],
            answerIndex: 1,
            explanation: "Alkenes are unsaturated hydrocarbons defined by at least one C=C double bond. This makes them more reactive than alkanes. –OH is the alcohol functional group and –COOH is the carboxylic acid group.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm2-02",
            question: "What is the molecular formula of propene?",
            options: ["C₃H₈", "C₃H₆", "C₃H₄", "C₂H₄"],
            answerIndex: 1,
            explanation: "Propene has 3 carbon atoms and follows the alkene general formula CₙH₂ₙ, so n = 3 gives C₃H₆. C₃H₈ is propane (an alkane); C₂H₄ is ethene.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm2-03",
            question: "An alkene is shaken with orange bromine water. What is observed?",
            options: [
              "The solution turns from colourless to orange",
              "The solution turns from orange to colourless",
              "A white precipitate forms",
              "No change occurs",
            ],
            answerIndex: 1,
            explanation: "Bromine adds across the C=C double bond, so the orange bromine water is decolourised (orange → colourless). This is the standard test that distinguishes alkenes (positive) from alkanes (no change in the dark).",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm2-04",
            question: "Why is cracking carried out in an oil refinery?",
            options: [
              "To join small molecules into larger ones",
              "To convert less useful long-chain alkanes into more useful shorter alkanes and alkenes",
              "To remove sulfur from crude oil",
              "To turn alkenes into alkanes",
            ],
            answerIndex: 1,
            explanation: "Fractional distillation produces an excess of long-chain fractions for which demand is low. Cracking breaks these into shorter alkanes (e.g. petrol) and alkenes (e.g. ethene for plastics), matching supply to demand for high-value products.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Cracking breaks molecules apart, not together.",
              "Which fractions are in surplus, and which are in high demand?",
              "It supplies both fuels and the alkene feedstock for polymers.",
            ],
          },
          {
            id: "chem-organic-bm2-05",
            question: "Which conditions are used for the catalytic cracking of long-chain alkanes?",
            options: [
              "Low temperature and high pressure",
              "High temperature (~500 °C) with a silica/alumina catalyst",
              "Room temperature with a nickel catalyst",
              "UV light only",
            ],
            answerIndex: 1,
            explanation: "Catalytic cracking uses a high temperature (around 500 °C) and a catalyst such as silica or alumina to break C–C bonds in long-chain alkanes. Nickel is the catalyst for hydrogenation, not cracking, and UV light drives substitution of alkanes.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Breaking strong C–C bonds needs a lot of energy.",
              "A catalyst lowers the temperature/energy required.",
              "Silica/alumina is the catalyst; nickel is for adding hydrogen.",
            ],
          },
          {
            id: "chem-organic-bm2-06",
            question: "Ethene reacts with hydrogen. What are the conditions and product?",
            options: [
              "Nickel catalyst, ~150 °C, product ethane",
              "Phosphoric acid catalyst, ~300 °C, product ethanol",
              "UV light, product chloroethane",
              "Yeast, ~35 °C, product ethanol",
            ],
            answerIndex: 0,
            explanation: "Hydrogenation: CH₂=CH₂ + H₂ → CH₃CH₃ (ethane), using a nickel catalyst at about 150 °C. Adding water (steam) with a phosphoric acid catalyst would give ethanol instead.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Adding H₂ across the double bond saturates the molecule.",
              "An alkene plus hydrogen becomes the matching alkane.",
              "The catalyst for adding hydrogen is nickel.",
            ],
          },
          {
            id: "chem-organic-bm2-07",
            question: "Which equation for cracking is correctly balanced?",
            options: [
              "C₈H₁₈ → C₆H₁₄ + C₂H₄",
              "C₈H₁₈ → C₆H₁₂ + C₂H₄",
              "C₈H₁₈ → C₄H₁₀ + C₄H₁₀",
              "C₈H₁₈ → C₆H₁₄ + C₂H₆",
            ],
            answerIndex: 0,
            explanation: "Check option A: C 8 = 6 + 2 ✓; H 18 = 14 + 4 ✓ (C₆H₁₄ alkane + C₂H₄ alkene). Option B has 12+4=16 H (wrong). Option C gives two alkanes with no alkene and 20 H (wrong). Option D gives 14+6=20 H (wrong).",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "challenge",
            hints: [
              "Atoms must balance: carbons and hydrogens on each side.",
              "Cracking always produces at least one alkene (CₙH₂ₙ).",
              "Count H: the starting alkane C₈H₁₈ has 18 H to share.",
              "C₆H₁₄ + C₂H₄ gives 14 + 4 = 18 H — balanced.",
            ],
            strategy: "Balance by counting C then H; expect one alkane and one alkene product.",
          },
          {
            id: "chem-organic-bm2-08",
            question: "Ethene undergoes an addition reaction with bromine. What is the product?",
            options: [
              "Bromoethane (C₂H₅Br)",
              "1,2-dibromoethane (BrCH₂CH₂Br)",
              "Ethane (C₂H₆)",
              "Ethanol (C₂H₅OH)",
            ],
            answerIndex: 1,
            explanation: "Br₂ adds across the C=C double bond, placing one Br on each carbon: CH₂=CH₂ + Br₂ → BrCH₂CH₂Br (1,2-dibromoethane). This is why bromine water is decolourised. Bromoethane (C₂H₅Br) would come from adding HBr, not Br₂.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "challenge",
            hints: [
              "Both bromine atoms add — one to each carbon of the C=C.",
              "Addition gives a single product with no by-product.",
              "Two Br atoms on adjacent carbons gives a dibromo compound.",
            ],
            strategy: "Addition across C=C: each atom of the reagent goes on one carbon of the double bond.",
          },
          {
            id: "chem-organic-bm2-09",
            question: "Why are alkenes much more reactive than alkanes?",
            options: [
              "Alkenes have weaker C–H bonds",
              "Alkenes contain a reactive C=C double bond (pi bond) that can open in addition reactions",
              "Alkanes contain oxygen",
              "Alkenes are ionic compounds",
            ],
            answerIndex: 1,
            explanation: "The C=C double bond contains a pi bond with accessible electron density that can be attacked, allowing addition reactions. Alkanes have only strong, non-polar single bonds and are far less reactive. Neither contains oxygen and both are covalent.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Look for the extra bond alkenes have that alkanes lack.",
              "The double bond can 'open up' to let atoms add on.",
              "This is why alkenes undergo addition while alkanes mainly undergo substitution.",
            ],
          },
          {
            id: "chem-organic-bm2-10",
            question: "Ethene reacts with steam to make ethanol. Which conditions are correct?",
            options: [
              "Nickel catalyst, ~150 °C",
              "Phosphoric acid catalyst, ~300 °C, ~60 atm",
              "Yeast, ~35 °C, anaerobic",
              "Concentrated sulfuric acid, room temperature",
            ],
            answerIndex: 1,
            explanation: "Catalytic hydration: CH₂=CH₂ + H₂O(g) → CH₃CH₂OH using a phosphoric acid (H₃PO₄) catalyst at about 300 °C and 60 atm. Nickel/150 °C is for hydrogenation; yeast/35 °C/anaerobic is fermentation.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "core",
            hints: [
              "Adding water across C=C is called hydration.",
              "The industrial catalyst here is phosphoric acid.",
              "High temperature and high pressure make the process economic.",
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
            question: "Which functional group is present in all alcohols?",
            options: ["–COOH", "–OH", "C=C", "–CHO"],
            answerIndex: 1,
            explanation: "Alcohols contain the hydroxyl group, –OH. –COOH is the carboxyl group of carboxylic acids and C=C is the alkene double bond.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm3-02",
            question: "Which is the correct molecular formula of ethanol?",
            options: ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "CH₃COOH"],
            answerIndex: 1,
            explanation: "Ethanol has two carbon atoms and the –OH group: C₂H₅OH (also written CH₃CH₂OH). CH₃OH is methanol; CH₃COOH is ethanoic acid.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm3-03",
            question: "Which equation represents the fermentation of glucose?",
            options: [
              "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",
              "C₂H₄ + H₂O → C₂H₅OH",
              "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O",
              "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
            ],
            answerIndex: 0,
            explanation: "Fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂, carried out by yeast under anaerobic conditions at ~35 °C. Option B is hydration of ethene, option C is combustion of ethanol, and option D is aerobic respiration of glucose.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "core",
            hints: [
              "Fermentation has no oxygen on the left (it is anaerobic).",
              "Glucose breaks down into ethanol and carbon dioxide.",
              "One glucose gives two ethanol and two CO₂ molecules.",
            ],
          },
          {
            id: "chem-organic-bm3-04",
            question: "Which is an advantage of making ethanol by fermentation rather than by hydration of ethene?",
            options: [
              "It is a faster, continuous process",
              "It gives a purer product directly",
              "It uses a renewable raw material (sugar) and needs less energy",
              "It does not require any living organisms",
            ],
            answerIndex: 2,
            explanation: "Fermentation uses sugar from plants — a renewable resource — and runs at a low temperature (~35 °C), so it needs less energy. However, it is slow (batch), gives impure ethanol needing distillation, and requires yeast. Hydration is the route that is fast, continuous and gives a purer product.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "core",
            hints: [
              "Compare the raw materials: sugar versus ethene from crude oil.",
              "One process is renewable and low-temperature; the other is fast and pure.",
              "Three of the options are actually advantages of hydration, not fermentation.",
            ],
          },
          {
            id: "chem-organic-bm3-05",
            question: "Ethanol is widely used as a fuel and as a solvent. Which equation shows its complete combustion?",
            options: [
              "C₂H₅OH + 2O₂ → 2CO₂ + 3H₂O",
              "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O",
              "C₂H₅OH + 3O₂ → 2CO + 3H₂O",
              "2C₂H₅OH + 5O₂ → 4CO₂ + 6H₂O",
            ],
            answerIndex: 1,
            explanation: "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Check O: ethanol provides 1 O, plus 3O₂ = 6 O, total 7 O on the left; right side 2CO₂ (4 O) + 3H₂O (3 O) = 7 O ✓. Option A is short of oxygen; option C gives CO (incomplete); option D, though it scales, is not the simplest balanced form and is offered to test care — option B is the standard answer.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "challenge",
            hints: [
              "Complete combustion gives CO₂ and H₂O only.",
              "Balance C (2 CO₂) and H (3 H₂O) first.",
              "Remember ethanol already contains one oxygen atom.",
              "Left O = 1 (from ethanol) + 2x; set equal to 4 + 3 = 7, so x = 3.",
            ],
            strategy: "Include the O atom already inside the ethanol molecule when balancing oxygen.",
          },
          {
            id: "chem-organic-bm3-06",
            question: "Which functional group is present in carboxylic acids such as ethanoic acid?",
            options: ["–OH", "–COOH", "C=C", "–O– (ester linkage)"],
            answerIndex: 1,
            explanation: "Carboxylic acids contain the carboxyl group, –COOH. Ethanoic acid is CH₃COOH. The –O– linkage is found in esters, –OH in alcohols, and C=C in alkenes.",
            guideRef: "Carboxylic Acids",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm3-07",
            question: "Ethanoic acid reacts with sodium carbonate. Which products are formed?",
            options: [
              "Sodium ethanoate + water + carbon dioxide",
              "Sodium ethanoate + hydrogen",
              "Ethyl ethanoate + water",
              "Sodium hydroxide + carbon dioxide",
            ],
            answerIndex: 0,
            explanation: "Acid + carbonate → salt + water + carbon dioxide. Here: 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂. Hydrogen is given off with metals (not carbonates); an ester forms with an alcohol.",
            guideRef: "Carboxylic Acids",
            difficulty: "core",
            hints: [
              "Use the template: acid + carbonate → salt + water + carbon dioxide.",
              "The salt of ethanoic acid is an ethanoate.",
              "Effervescence here is CO₂, not hydrogen.",
            ],
          },
          {
            id: "chem-organic-bm3-08",
            question: "Ethanol can be oxidised to produce which compound, for example when wine turns sour?",
            options: ["Ethene", "Ethanoic acid", "Ethyl ethanoate", "Methanol"],
            answerIndex: 1,
            explanation: "Oxidation of ethanol (by air/microbes, or by an oxidising agent such as acidified potassium manganate(VII)) produces ethanoic acid, CH₃COOH — the acid in vinegar. This is why wine left open turns sour.",
            guideRef: "Carboxylic Acids",
            difficulty: "core",
            hints: [
              "What sharp-smelling acid is found in vinegar?",
              "Oxidation adds oxygen / removes hydrogen, converting –OH into –COOH.",
              "Ethanol (2 carbons) gives the matching 2-carbon acid.",
            ],
          },
          {
            id: "chem-organic-bm3-09",
            question: "Ethanoic acid reacts with ethanol in the presence of a concentrated sulfuric acid catalyst. What is the organic product called?",
            options: [
              "Ethyl ethanoate (an ester)",
              "Sodium ethanoate (a salt)",
              "Ethene (an alkene)",
              "Ethane (an alkane)",
            ],
            answerIndex: 0,
            explanation: "Esterification: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. The product is the ester ethyl ethanoate, named from the alcohol (ethyl) and the acid (ethanoate). A concentrated H₂SO₄ catalyst is used and the reaction is reversible.",
            guideRef: "Carboxylic Acids",
            difficulty: "challenge",
            hints: [
              "Carboxylic acid + alcohol gives an ester + water.",
              "The ester name is alkyl first (from the alcohol), then -anoate (from the acid).",
              "From ethanol you get the 'ethyl' part; from ethanoic acid the 'ethanoate' part.",
            ],
            strategy: "Name esters as (alcohol stem + -yl) + (acid stem + -anoate).",
          },
          {
            id: "chem-organic-bm3-10",
            question: "Why does ethanoic acid have a higher boiling point than ethanol, even though their molar masses are similar?",
            options: [
              "Ethanoic acid is ionic",
              "Ethanoic acid forms stronger hydrogen bonds through its –COOH group",
              "Ethanoic acid has a C=C double bond",
              "Ethanol is a gas at room temperature",
            ],
            answerIndex: 1,
            explanation: "The –COOH group has two sites (C=O and O–H) for hydrogen bonding, so ethanoic acid molecules attract one another more strongly than ethanol molecules do, raising the boiling point. Both are covalent molecular liquids; neither has a C=C bond.",
            guideRef: "Carboxylic Acids",
            difficulty: "challenge",
            hints: [
              "Boiling point depends on the strength of intermolecular forces.",
              "Look at the functional group: –OH versus –COOH.",
              "More/stronger hydrogen bonding means a higher boiling point.",
            ],
            strategy: "Compare functional groups to judge hydrogen-bonding strength and hence boiling point.",
          },
        ],
      },
      {
        id: "chem-organic-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Polymerisation, polymers, plastics disposal and mixed organic chemistry.",
        questions: [
          {
            id: "chem-organic-bm4-01",
            question: "What type of molecule is required as the monomer in addition polymerisation?",
            options: [
              "A saturated alkane",
              "An unsaturated molecule containing C=C",
              "A molecule with two different functional groups",
              "An ionic compound",
            ],
            answerIndex: 1,
            explanation: "Addition polymerisation requires unsaturated monomers (containing a C=C double bond) such as ethene. The double bond opens to link monomers with no by-product. Monomers with two functional groups are used in condensation polymerisation.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm4-02",
            question: "What is the repeat unit of poly(ethene)?",
            options: ["–(CH₂–CH₂)ₙ–", "–(CH=CH₂)ₙ–", "–(CHCl–CH₂)ₙ–", "–(CH₂–CH(CH₃))ₙ–"],
            answerIndex: 0,
            explanation: "Ethene (CH₂=CH₂) polymerises by opening the double bond to give the repeat unit –CH₂–CH₂–. The chain has only single bonds. The other options are repeat units of different polymers (e.g. PVC, poly(propene)).",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bm4-03",
            question: "A polymer has the repeat unit –CH₂–CHCl–. What is its monomer?",
            options: ["CH₂=CHCl", "CH₃–CH₂Cl", "CH₂=CH₂", "CHCl=CHCl"],
            answerIndex: 0,
            explanation: "To find the monomer, restore the C=C double bond between the two carbons of the repeat unit: CH₂=CHCl (chloroethene). The polymer is poly(chloroethene), commonly known as PVC.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "Undo polymerisation by putting the double bond back into the repeat unit.",
              "Keep the same atoms, just reintroduce the C=C between the carbons.",
              "–CH₂–CHCl– becomes CH₂=CHCl.",
            ],
          },
          {
            id: "chem-organic-bm4-04",
            question: "Which statement about the disposal of most addition polymers is correct?",
            options: [
              "They are biodegradable and rot away quickly",
              "They are non-biodegradable and persist in the environment for a long time",
              "They always dissolve harmlessly in water",
              "They cannot be recycled at all",
            ],
            answerIndex: 1,
            explanation: "Most addition polymers (e.g. poly(ethene), PVC) are non-biodegradable: microorganisms cannot break them down, so they persist for many years in landfill and oceans. They can be recycled, and burning them for energy is possible but may release toxic gases.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "Think about why plastic litter lasts so long in the environment.",
              "Microbes cannot easily break the strong carbon backbone.",
              "Non-biodegradable means it does not rot away naturally.",
            ],
          },
          {
            id: "chem-organic-bm4-05",
            question: "Burning PVC (a chlorine-containing polymer) is a particular environmental concern because it can release",
            options: [
              "only carbon dioxide and water",
              "toxic and corrosive hydrogen chloride gas",
              "oxygen",
              "nitrogen",
            ],
            answerIndex: 1,
            explanation: "PVC contains chlorine, so incineration can release toxic, corrosive hydrogen chloride (HCl) gas (and potentially dioxins). This is why halogenated plastics need careful disposal with gas scrubbing.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "Look at which element PVC contains besides carbon and hydrogen.",
              "Chlorine ends up combined with hydrogen as an acidic gas.",
              "That gas is corrosive and toxic if inhaled.",
            ],
          },
          {
            id: "chem-organic-bm4-06",
            question: "Which environmental advantage does recycling plastics have over sending them to landfill?",
            options: [
              "It produces toxic dioxins",
              "It conserves crude oil and reduces waste taking up land",
              "It releases more carbon dioxide than incineration",
              "It makes the plastic biodegradable",
            ],
            answerIndex: 1,
            explanation: "Recycling reuses the polymer, conserving the finite crude oil from which it was made and reducing the volume of waste sent to landfill. It does not make plastics biodegradable, nor is it the route that produces dioxins (that risk is from incineration).",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "Plastics are made from a non-renewable resource.",
              "Landfill takes up space and the plastic does not rot.",
              "Recycling saves raw materials and reduces waste volume.",
            ],
          },
          {
            id: "chem-organic-bm4-07",
            question: "Nylon and PET are made by condensation polymerisation. How does this differ from addition polymerisation?",
            options: [
              "It produces only one product",
              "It joins monomers and also releases a small molecule such as water",
              "It requires monomers with a C=C double bond",
              "It cannot form long chains",
            ],
            answerIndex: 1,
            explanation: "In condensation polymerisation, monomers (each with two functional groups) join together and a small molecule — usually water — is eliminated at each link. Addition polymerisation produces no by-product and needs C=C-containing monomers.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "challenge",
            hints: [
              "Compare the by-products of the two polymerisation types.",
              "Addition makes the polymer only; condensation makes the polymer plus a small molecule.",
              "That small molecule is usually water.",
            ],
            strategy: "Addition = no by-product (needs C=C); condensation = loses a small molecule like water (needs two functional groups).",
          },
          {
            id: "chem-organic-bm4-08",
            question: "How many molecules of ethene combine to form one molecule of poly(ethene) represented by –(CH₂CH₂)ₙ– when n = 2000?",
            options: ["1000", "2000", "4000", "It cannot be determined"],
            answerIndex: 1,
            explanation: "Each ethene molecule (CH₂=CH₂) supplies exactly one repeat unit –CH₂–CH₂–. So n repeat units come from n monomers: when n = 2000, 2000 ethene molecules are used.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "challenge",
            hints: [
              "One monomer gives one repeat unit.",
              "The subscript n counts the repeat units along the chain.",
              "So the number of monomers equals n.",
            ],
            strategy: "In addition polymers, number of monomers = number of repeat units = n.",
          },
          {
            id: "chem-organic-bm4-09",
            question: "Which row correctly matches a reaction type to its description?",
            options: [
              "Substitution — atoms add across a C=C double bond",
              "Addition — one product forms when atoms add across C=C",
              "Combustion — a long alkane breaks into shorter molecules",
              "Cracking — a fuel reacts with oxygen to release energy",
            ],
            answerIndex: 1,
            explanation: "Addition: atoms add across a C=C bond to give a single product (e.g. ethene + Br₂ → dibromoethane). Substitution swaps an atom (gives two products). Cracking breaks long alkanes into shorter molecules. Combustion is reaction with oxygen.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Match each name to the correct definition by elimination.",
              "Addition involves a double bond opening with no by-product.",
              "Cracking breaks molecules; combustion uses oxygen.",
            ],
          },
          {
            id: "chem-organic-bm4-10",
            question: "Which substance would NOT decolourise bromine water?",
            options: ["Ethene", "Propene", "But-1-ene", "Ethane"],
            answerIndex: 3,
            explanation: "Bromine water is decolourised by molecules containing a C=C double bond. Ethene, propene and but-1-ene are all alkenes and react. Ethane is a saturated alkane with no C=C, so it does not decolourise bromine water in the dark.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "The test responds to a C=C double bond.",
              "Three of these are alkenes; one is an alkane.",
              "The -ane ending signals a saturated, unreactive molecule here.",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-organic-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Crude oil, fractional distillation, homologous series and alkanes.",
        questions: [
          {
            id: "chem-organic-bq1-01",
            question: "State what is meant by a hydrocarbon and explain why crude oil can be separated by fractional distillation rather than by a chemical reaction. [3]",
            marks: 3,
            modelAnswer: "A hydrocarbon is a compound containing carbon and hydrogen only. Crude oil is a mixture of different hydrocarbons, so the substances have not chemically combined and keep their own properties. They have different boiling points, so they can be separated physically by fractional distillation.",
            markScheme: [
              "Hydrocarbon = compound of carbon and hydrogen only (1)",
              "Crude oil is a mixture / hydrocarbons not chemically bonded together (1)",
              "Components have different boiling points, so separated physically (1)",
            ],
            commonError: "Saying crude oil is a 'compound'. It is a mixture, which is why a physical method works.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bq1-02",
            question: "Describe how fractional distillation separates crude oil into useful fractions. In your answer refer to the temperature of the column and how the fractions condense. [4]",
            marks: 4,
            modelAnswer: "The crude oil is heated until it vaporises and the vapour enters the bottom of the fractionating column. The column is hot at the bottom (~350 °C) and cooler towards the top (~25 °C). As the vapours rise, each fraction cools and condenses to a liquid when it reaches the level where the temperature equals its boiling point. Hydrocarbons with high boiling points (long chains) condense low down; those with low boiling points (short chains) condense near the top and are collected separately.",
            markScheme: [
              "Crude oil heated/vaporised and fed into the column (1)",
              "Column is hot at the bottom and cooler at the top / temperature gradient (1)",
              "A fraction condenses when the temperature equals its boiling point (1)",
              "High boiling point (long-chain) fractions condense low down; low boiling point (short-chain) near the top (1)",
            ],
            commonError: "Describing 'melting' instead of condensing, or saying the column is cool at the bottom. The vapours condense (gas to liquid) and the bottom is the hottest part.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "core",
            hints: [
              "Start by getting the oil into the column — what state must it be in?",
              "Describe the temperature gradient from bottom to top.",
              "Explain what happens when a vapour reaches its own boiling-point level.",
            ],
          },
          {
            id: "chem-organic-bq1-03",
            question: "Name TWO fractions obtained from crude oil and give one use of each. [4]",
            marks: 4,
            modelAnswer: "Gasoline (petrol): used as fuel for cars/road vehicles. Kerosene (paraffin): used as fuel for aircraft (jet fuel) / for heating. (Other acceptable pairs: refinery gas — bottled gas/LPG; diesel — fuel for lorries/trains; bitumen — surfacing roads.)",
            markScheme: [
              "Named fraction 1 (e.g. gasoline/petrol, kerosene, diesel, refinery gas, bitumen, fuel oil) (1)",
              "Correct use of fraction 1 (1)",
              "Named fraction 2 (different from fraction 1) (1)",
              "Correct use of fraction 2 (1)",
            ],
            commonError: "Matching the wrong use to a fraction (e.g. saying bitumen is a vehicle fuel). Bitumen is for road surfacing/roofing, not fuel.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bq1-04",
            question: "Explain why the boiling points of the alkanes increase as the number of carbon atoms increases. [3]",
            marks: 3,
            modelAnswer: "As the chain gets longer, the molecules have more electrons and a larger surface area. This increases the strength of the intermolecular forces (dispersion / van der Waals forces) between the molecules. More energy is therefore needed to separate the molecules, so the boiling point is higher.",
            markScheme: [
              "Longer chains have more electrons / greater surface area (1)",
              "Stronger intermolecular / dispersion / van der Waals forces between molecules (1)",
              "More energy needed to overcome the forces, so higher boiling point (1)",
            ],
            commonError: "Saying the covalent bonds inside the molecule get harder to break. Boiling overcomes the weaker forces BETWEEN molecules, not the strong bonds within them.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "challenge",
            hints: [
              "Boiling separates whole molecules — it does not break covalent bonds.",
              "Which forces act between hydrocarbon molecules?",
              "How does chain length affect the strength of those forces?",
            ],
          },
          {
            id: "chem-organic-bq1-05",
            question: "Give the meaning of the term 'homologous series' by stating THREE characteristics that the members share. [3]",
            marks: 3,
            modelAnswer: "Members of a homologous series have the same general formula; they have the same functional group, giving similar chemical properties; and they show a gradual change in physical properties (e.g. boiling point) as chain length increases, with each member differing from the next by –CH₂–.",
            markScheme: [
              "Same general formula (1)",
              "Same functional group / similar chemical properties (1)",
              "Gradual change/trend in physical properties / differ by CH₂ (1)",
            ],
            commonError: "Saying members have identical physical properties. Physical properties change gradually; it is the chemical properties that stay similar.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "Think about formula, functional group and physical property trend.",
              "Successive members differ by a fixed group — what is it?",
              "Chemical properties similar; physical properties gradually changing.",
            ],
          },
          {
            id: "chem-organic-bq1-06",
            question: "Methane reacts with chlorine in the presence of ultraviolet light. (a) Write a balanced equation for the reaction that forms chloromethane. (b) Name the type of reaction. (c) State why ultraviolet light is needed. [4]",
            marks: 4,
            modelAnswer: "(a) CH₄ + Cl₂ → CH₃Cl + HCl. (b) Substitution (a photochemical/free-radical substitution). (c) Ultraviolet light provides the energy to break the Cl–Cl bond, forming chlorine radicals that start (initiate) the reaction.",
            markScheme: [
              "(a) Correct balanced equation CH₄ + Cl₂ → CH₃Cl + HCl (1)",
              "(b) Substitution (1)",
              "(c) UV provides energy to break Cl–Cl bond / forms chlorine radicals (1)",
              "(c) This initiates the reaction (1)",
            ],
            commonError: "Forgetting HCl as a product, or calling the reaction 'addition'. Alkanes are saturated, so they undergo substitution, not addition.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "One H atom is swapped for one Cl atom.",
              "The displaced hydrogen leaves as HCl — include it.",
              "UV light breaks the chlorine molecule to start the reaction.",
            ],
          },
          {
            id: "chem-organic-bq1-07",
            question: "Compare the products of complete and incomplete combustion of a hydrocarbon, and explain why incomplete combustion is hazardous. [4]",
            marks: 4,
            modelAnswer: "Complete combustion (plenty of oxygen) produces carbon dioxide and water only. Incomplete combustion (limited oxygen) produces carbon monoxide and/or carbon (soot), together with water. Incomplete combustion is hazardous because carbon monoxide is a toxic gas that binds to haemoglobin and reduces the blood's ability to carry oxygen; it is also colourless and odourless, so it is hard to detect. Soot can also cause breathing problems and blacken surfaces.",
            markScheme: [
              "Complete combustion → carbon dioxide + water (1)",
              "Incomplete combustion → carbon monoxide and/or carbon (soot) + water (1)",
              "Carbon monoxide is toxic / binds to haemoglobin / reduces oxygen transport (1)",
              "CO is colourless and odourless / hard to detect (or soot harm) (1)",
            ],
            commonError: "Saying complete combustion produces carbon monoxide. CO is only formed in incomplete (limited-oxygen) combustion.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "Compare the carbon-containing products of each.",
              "Limited oxygen means carbon is only partly oxidised.",
              "Explain the specific danger of carbon monoxide in the body.",
            ],
          },
          {
            id: "chem-organic-bq1-08",
            question: "Butane has the molecular formula C₄H₁₀. Write a balanced equation for the complete combustion of butane. [3]",
            marks: 3,
            modelAnswer: "2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O. Each butane gives 4 CO₂ and 5 H₂O, so two butane molecules give 8 CO₂ and 10 H₂O, needing 16 + 10 = 26 oxygen atoms = 13 O₂.",
            markScheme: [
              "Correct products CO₂ and H₂O (1)",
              "Carbon and hydrogen balanced (8CO₂ and 10H₂O for 2 butane) (1)",
              "Oxygen balanced with 13O₂ and equation fully balanced (1)",
            ],
            commonError: "Leaving an odd number of oxygen atoms unbalanced. Doubling the whole equation (2 butane) avoids fractional O₂.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "challenge",
            hints: [
              "Complete combustion gives CO₂ and H₂O.",
              "One butane gives 4 CO₂ and 5 H₂O — but that needs 13/2 O₂.",
              "Double everything to clear the fraction: 2C₄H₁₀ …",
              "Count product O atoms (16 + 10 = 26) then divide by 2 to get 13 O₂.",
            ],
            solutions: [
              {
                label: "Balancing method",
                steps: [
                  "Write the unbalanced equation: C₄H₁₀ + O₂ → CO₂ + H₂O.",
                  "Balance C: 4 carbons give 4CO₂.",
                  "Balance H: 10 hydrogens give 5H₂O.",
                  "Count O on the right: 4CO₂ = 8 O, 5H₂O = 5 O, total 13 O atoms — an odd number.",
                  "Double the whole equation to clear the fraction: 2C₄H₁₀ → 8CO₂ + 10H₂O.",
                  "Right-hand O atoms now 16 + 10 = 26, so O₂ needed = 26 ÷ 2 = 13.",
                  "Final: 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O.",
                ],
              },
            ],
          },
          {
            id: "chem-organic-bq1-09",
            question: "Explain why alkanes are described as 'saturated' and why this makes them generally unreactive. [3]",
            marks: 3,
            modelAnswer: "Alkanes are saturated because they contain only single carbon–carbon bonds, so each carbon is bonded to the maximum number of hydrogen atoms (no C=C double bonds). They are generally unreactive because the C–C and C–H bonds are strong and non-polar, and there is no reactive double bond for other species to attack.",
            markScheme: [
              "Saturated = only single C–C bonds / maximum hydrogen / no C=C (1)",
              "C–C and C–H bonds are strong (1)",
              "Bonds are non-polar / no reactive double bond to attack (1)",
            ],
            commonError: "Confusing 'saturated' (about bonding) with 'concentrated' or with solubility. Saturated here means no carbon–carbon double bonds.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "Saturated refers to the carbon–carbon bonding.",
              "How many hydrogens can each carbon hold?",
              "Link the lack of a double bond to low reactivity.",
            ],
          },
          {
            id: "chem-organic-bq1-10",
            question: "Crude oil is a finite resource. (a) Explain what 'finite' means in this context. (b) Suggest two reasons why scientists are developing alternative fuels such as ethanol and hydrogen. [3]",
            marks: 3,
            modelAnswer: "(a) Finite means crude oil is non-renewable — it formed over millions of years and is being used up far faster than it can be replaced, so supplies will eventually run out. (b) Any two of: to reduce dependence on a dwindling/limited oil supply; to reduce carbon dioxide and other pollutant emissions / slow climate change; alternatives such as bio-ethanol can be made from renewable plant material.",
            markScheme: [
              "(a) Non-renewable / will run out / used faster than replaced (1)",
              "(b) Reason 1: conserve limited oil supplies / oil running out (1)",
              "(b) Reason 2: reduce CO₂ / pollution / use renewable source (1)",
            ],
            commonError: "Treating 'finite' and 'polluting' as the same idea. Finite is about quantity (running out); pollution is a separate environmental reason.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "warmup",
          },
        ],
      },
      {
        id: "chem-organic-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Alkenes, cracking, addition reactions and the bromine water test.",
        questions: [
          {
            id: "chem-organic-bq2-01",
            question: "State the general formula of the alkenes and give the names and molecular formulae of the first two members. [3]",
            marks: 3,
            modelAnswer: "General formula: CₙH₂ₙ. First member: ethene, C₂H₄. Second member: propene, C₃H₆.",
            markScheme: [
              "General formula CₙH₂ₙ (1)",
              "Ethene, C₂H₄ (1)",
              "Propene, C₃H₆ (1)",
            ],
            commonError: "Writing CₙH₂ₙ₊₂ (that is the alkanes) or starting the alkene series with 'methene' (there is no alkene with one carbon).",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bq2-02",
            question: "Describe a chemical test to distinguish an alkene from an alkane, giving the reagent and the result for each. [3]",
            marks: 3,
            modelAnswer: "Add bromine water (orange/brown) to each hydrocarbon and shake, keeping the alkane in the dark. The alkene decolourises the bromine water (orange to colourless) because bromine adds across the C=C double bond. The alkane causes no change — the bromine water stays orange.",
            markScheme: [
              "Reagent: bromine water (1)",
              "Alkene: decolourises / orange to colourless (1)",
              "Alkane: no change / stays orange (1)",
            ],
            commonError: "Saying the solution turns brown/black, or omitting a result for the alkane. Bromine water goes colourless with an alkene and unchanged with an alkane.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bq2-03",
            question: "Explain what cracking is and give two reasons why it is carried out in industry. [4]",
            marks: 4,
            modelAnswer: "Cracking is the breaking down of long-chain alkanes into shorter alkanes and alkenes, using a high temperature and a catalyst (or steam). It is carried out because: (1) long-chain fractions are in low demand but short-chain fractions (e.g. petrol) are in high demand, so cracking matches supply to demand; and (2) it produces alkenes such as ethene, which are valuable feedstock for making polymers/plastics and other chemicals.",
            markScheme: [
              "Cracking = breaking long-chain alkanes into shorter alkanes + alkenes (1)",
              "Uses high temperature and a catalyst / steam (1)",
              "Reason 1: meets demand for short-chain fuels / converts surplus long chains (1)",
              "Reason 2: produces alkenes for making polymers/plastics (1)",
            ],
            commonError: "Saying cracking joins molecules together. It breaks large molecules into smaller ones.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Define cracking in terms of what bonds are broken and what is produced.",
              "Think about supply and demand for different fractions.",
              "Remember alkenes are needed to make plastics.",
            ],
          },
          {
            id: "chem-organic-bq2-04",
            question: "Decane (C₁₀H₂₂) is cracked to form octane (C₈H₁₈) and one other product. Identify the other product, justify your answer by balancing the equation, and state to which homologous series it belongs. [4]",
            marks: 4,
            modelAnswer: "The other product is ethene, C₂H₄. Balancing: carbons 10 = 8 + 2, hydrogens 22 = 18 + 4, so the missing fragment is C₂H₄. The full equation is C₁₀H₂₂ → C₈H₁₈ + C₂H₄. C₂H₄ fits the general formula CₙH₂ₙ (n = 2), so it is an alkene.",
            markScheme: [
              "Other product is ethene / C₂H₄ (1)",
              "Carbon balance: 10 = 8 + 2 (1)",
              "Hydrogen balance: 22 = 18 + 4 (1)",
              "Belongs to the alkenes / fits CₙH₂ₙ (1)",
            ],
            commonError: "Giving ethane (C₂H₆) as the product. That would need 24 H in total (18 + 6), but only 22 are available — and cracking produces an alkene.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "challenge",
            hints: [
              "Write C₁₀H₂₂ → C₈H₁₈ + CₓHᵧ.",
              "Carbon: 10 − 8 = 2, so x = 2.",
              "Hydrogen: 22 − 18 = 4, so y = 4.",
              "C₂H₄ matches CₙH₂ₙ — an alkene (ethene).",
            ],
            solutions: [
              {
                label: "Atom-conservation method",
                steps: [
                  "Set up: C₁₀H₂₂ → C₈H₁₈ + CₓHᵧ.",
                  "Conserve carbon: x = 10 − 8 = 2.",
                  "Conserve hydrogen: y = 22 − 18 = 4.",
                  "Missing product is C₂H₄.",
                  "Test the series: C₂H₄ has H = 2 × C (2n), so it fits CₙH₂ₙ — an alkene, ethene.",
                ],
              },
            ],
          },
          {
            id: "chem-organic-bq2-05",
            question: "Ethene undergoes addition reactions. Write equations (using molecular formulae) for the reaction of ethene with (a) hydrogen and (b) bromine, and name each organic product. [4]",
            marks: 4,
            modelAnswer: "(a) C₂H₄ + H₂ → C₂H₆ (ethane), using a nickel catalyst at ~150 °C. (b) C₂H₄ + Br₂ → C₂H₄Br₂ (1,2-dibromoethane). In each case the C=C double bond opens and atoms add across it to give a single saturated product.",
            markScheme: [
              "(a) C₂H₄ + H₂ → C₂H₆ (1)",
              "(a) Product named ethane (1)",
              "(b) C₂H₄ + Br₂ → C₂H₄Br₂ / BrCH₂CH₂Br (1)",
              "(b) Product named 1,2-dibromoethane / dibromoethane (1)",
            ],
            commonError: "Producing two products (like substitution). Addition gives a single product — the double bond simply opens and the atoms add on.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "In addition, the whole reactant molecule adds across the C=C.",
              "Ethene + hydrogen gives the matching alkane.",
              "Ethene + bromine puts one Br on each carbon.",
            ],
          },
          {
            id: "chem-organic-bq2-06",
            question: "Explain, in terms of bonding, why alkenes are more reactive than alkanes. [3]",
            marks: 3,
            modelAnswer: "Alkenes contain a carbon–carbon double bond (C=C). Part of this double bond is relatively weak and has accessible electron density that can be attacked, so it can open to allow atoms to add across it (addition reactions). Alkanes are saturated, with only strong, non-polar single bonds and no double bond, so they are much less reactive.",
            markScheme: [
              "Alkenes have a C=C double bond (1)",
              "The double bond can open / is attacked, allowing addition reactions (1)",
              "Alkanes have only strong single (saturated) bonds, so are less reactive (1)",
            ],
            commonError: "Saying alkenes have weaker single bonds. It is the presence of the additional (double) bond that makes alkenes reactive.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "What bond does an alkene have that an alkane does not?",
              "Explain what that bond can do in a reaction.",
              "Contrast with the saturated, strong bonds of alkanes.",
            ],
          },
          {
            id: "chem-organic-bq2-07",
            question: "A 0.10 mol sample of an alkene, CₙH₂ₙ, reacts completely with 0.10 mol of bromine (Br₂). Use this to explain how the bromine water test confirms the presence of one C=C double bond. [3]",
            marks: 3,
            modelAnswer: "One molecule of an alkene with a single C=C double bond reacts with exactly one molecule of bromine, because Br₂ adds across the one double bond (1 mol alkene : 1 mol Br₂). The data show 0.10 mol of alkene reacting with 0.10 mol of bromine — a 1:1 ratio — which is consistent with one C=C double bond per molecule. As the Br₂ is used up, the orange colour disappears, giving the positive (decolourising) test.",
            markScheme: [
              "Br₂ adds across the C=C in a 1:1 ratio (alkene : Br₂) (1)",
              "0.10 : 0.10 mol = 1:1, consistent with one double bond (1)",
              "Using up the bromine causes the orange colour to disappear (decolourise) (1)",
            ],
            commonError: "Assuming any decolourisation proves more than one double bond. The 1:1 mole ratio specifically indicates a single C=C.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "challenge",
            hints: [
              "How many Br₂ molecules add to one C=C double bond?",
              "Compare the moles of alkene and bromine given.",
              "Link the disappearance of colour to bromine being consumed.",
            ],
            solutions: [
              {
                label: "Mole-ratio reasoning",
                steps: [
                  "Each C=C double bond reacts with one Br₂ molecule (addition).",
                  "Moles of alkene = 0.10 mol; moles of Br₂ = 0.10 mol.",
                  "Ratio = 0.10 : 0.10 = 1 : 1.",
                  "A 1:1 ratio means one double bond per alkene molecule.",
                  "As Br₂ is consumed, the orange colour fades to colourless — the positive test.",
                ],
              },
            ],
          },
          {
            id: "chem-organic-bq2-08",
            question: "Cracking can be represented by the equation C₁₂H₂₆ → C₂H₄ + X. (a) Deduce the molecular formula of X. (b) State whether X is an alkane or alkene and justify your answer. [3]",
            marks: 3,
            modelAnswer: "(a) Carbon: 12 − 2 = 10; hydrogen: 26 − 4 = 22, so X is C₁₀H₂₂. (b) X is an alkane: it fits the general formula CₙH₂ₙ₊₂ (for n = 10, 2n + 2 = 22), which is the alkane formula.",
            markScheme: [
              "(a) X = C₁₀H₂₂ (carbon 10, hydrogen 22) (1)",
              "(b) Alkane (1)",
              "(b) Justification: fits CₙH₂ₙ₊₂ (1)",
            ],
            commonError: "Miscounting hydrogen by forgetting the 4 H in ethene. 26 − 4 = 22, not 24.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Conserve carbon atoms first.",
              "Then conserve hydrogen atoms.",
              "Check the H count against CₙH₂ₙ and CₙH₂ₙ₊₂ to classify X.",
            ],
            solutions: [
              {
                label: "Atom balance",
                steps: [
                  "Carbon: 12 − 2 = 10, so X has 10 carbons.",
                  "Hydrogen: 26 − 4 = 22, so X has 22 hydrogens.",
                  "X = C₁₀H₂₂.",
                  "For n = 10: 2n + 2 = 22, matching the alkane formula CₙH₂ₙ₊₂.",
                  "Therefore X is an alkane (decane).",
                ],
              },
            ],
          },
          {
            id: "chem-organic-bq2-09",
            question: "A student writes: 'Ethene reacts with bromine in a substitution reaction giving bromoethene and hydrogen bromide.' Identify and correct the two errors in this statement. [3]",
            marks: 3,
            modelAnswer: "Error 1: the reaction is addition, not substitution — bromine adds across the C=C double bond rather than swapping for a hydrogen. Error 2: the product is 1,2-dibromoethane (C₂H₄Br₂), not bromoethene and hydrogen bromide. Corrected: C₂H₄ + Br₂ → C₂H₄Br₂ (an addition reaction giving a single product, with no HBr formed).",
            markScheme: [
              "Reaction is addition, not substitution (1)",
              "Product is 1,2-dibromoethane / C₂H₄Br₂ (1)",
              "No HBr formed / only one product in addition (1)",
            ],
            commonError: "Correcting only the reaction type but leaving the wrong product, or vice versa. Both the mechanism name and the product must be fixed.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Does an alkene undergo substitution or addition with bromine?",
              "How many products does an addition reaction give?",
              "Work out the correct single product when Br₂ adds across C=C.",
            ],
          },
          {
            id: "chem-organic-bq2-10",
            question: "Explain why the demand for cracking has grown as the use of plastics and unleaded petrol has increased. [3]",
            marks: 3,
            modelAnswer: "Cracking produces shorter-chain alkanes used as petrol, for which demand is high, and it produces alkenes such as ethene and propene, which are the monomers used to make plastics. As the use of plastics and the demand for petrol have grown, more long-chain fractions must be cracked to supply both the fuels and the alkene feedstock, so cracking has become more important.",
            markScheme: [
              "Cracking provides short-chain alkanes used as petrol / high-demand fuel (1)",
              "Cracking provides alkenes (ethene/propene) used as monomers for plastics (1)",
              "Growing demand for fuels and plastics increases the need to crack surplus long chains (1)",
            ],
            commonError: "Saying cracking directly makes plastic. It makes the alkene monomers, which are then polymerised into plastics.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "What two kinds of useful product does cracking give?",
              "Link alkenes to the raw material for polymers.",
              "Connect rising demand to the surplus of long-chain fractions.",
            ],
          },
        ],
      },
      {
        id: "chem-organic-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Alcohols, ethanol manufacture, carboxylic acids and esters.",
        questions: [
          {
            id: "chem-organic-bq3-01",
            question: "Ethanol is the most important alcohol at IGCSE. (a) Give the functional group of alcohols. (b) Write the molecular formula of ethanol. (c) State two uses of ethanol. [4]",
            marks: 4,
            modelAnswer: "(a) The hydroxyl group, –OH. (b) C₂H₅OH (or CH₃CH₂OH). (c) Any two of: as a fuel (e.g. in 'gasohol' / mixed with petrol); as a solvent (in perfumes, cosmetics, medicines, cleaning products); in alcoholic drinks.",
            markScheme: [
              "(a) –OH / hydroxyl group (1)",
              "(b) C₂H₅OH / CH₃CH₂OH (1)",
              "(c) Use 1: fuel (1)",
              "(c) Use 2: solvent / in drinks (1)",
            ],
            commonError: "Writing the formula as C₂H₆O without showing the –OH, or giving –COOH as the functional group (that is a carboxylic acid).",
            guideRef: "Alcohols and Ethanol",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bq3-02",
            question: "Describe how ethanol is manufactured by fermentation, including the raw material, the conditions and a balanced equation. [4]",
            marks: 4,
            modelAnswer: "Glucose (sugar) solution is used as the raw material. Yeast (which contains the enzyme zymase) is added, and the mixture is kept warm at about 30–35 °C in anaerobic conditions (no air). The yeast breaks down the glucose to form ethanol and carbon dioxide: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. The ethanol can then be concentrated by fractional distillation.",
            markScheme: [
              "Raw material: glucose / sugar solution (1)",
              "Yeast / enzyme zymase used (1)",
              "Conditions: ~30–35 °C and anaerobic (no air) (1)",
              "Equation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (1)",
            ],
            commonError: "Omitting 'anaerobic', or balancing the equation without the 2 in front of ethanol and CO₂.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "core",
            hints: [
              "Name the sugar used and the organism that ferments it.",
              "State the temperature and whether air is present.",
              "Balance: one glucose gives two ethanol and two CO₂.",
            ],
          },
          {
            id: "chem-organic-bq3-03",
            question: "Ethanol can also be made by the catalytic hydration of ethene. (a) Write a balanced equation. (b) State the conditions. (c) Give one advantage and one disadvantage of this method compared with fermentation. [5]",
            marks: 5,
            modelAnswer: "(a) C₂H₄ + H₂O → C₂H₅OH. (b) Phosphoric acid (H₃PO₄) catalyst, temperature ~300 °C, pressure ~60 atm, with steam. (c) Advantage: it is a fast, continuous process giving a high-purity product. Disadvantage: it uses ethene from crude oil, which is a non-renewable (finite) raw material, and it requires a lot of energy (high temperature and pressure).",
            markScheme: [
              "(a) C₂H₄ + H₂O → C₂H₅OH (1)",
              "(b) H₃PO₄ / phosphoric acid catalyst (1)",
              "(b) ~300 °C and ~60 atm / high temperature and pressure (1)",
              "(c) Advantage: fast / continuous / high purity (1)",
              "(c) Disadvantage: uses non-renewable ethene / high energy demand (1)",
            ],
            commonError: "Listing yeast or fermentation conditions for hydration. Hydration uses a phosphoric acid catalyst at high temperature and pressure, not yeast.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "core",
            hints: [
              "Hydration adds water across the C=C of ethene.",
              "Recall the catalyst, temperature and pressure.",
              "Weigh up renewability and speed when comparing with fermentation.",
            ],
          },
          {
            id: "chem-organic-bq3-04",
            question: "Write a balanced equation for the complete combustion of ethanol and state why ethanol is sometimes described as a more sustainable fuel than petrol. [4]",
            marks: 4,
            modelAnswer: "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Ethanol can be made by fermentation of plant sugars, which is a renewable resource, whereas petrol comes from finite crude oil. The carbon dioxide released when ethanol burns was previously taken in by the plants during photosynthesis, so it can be closer to 'carbon neutral', helping to reduce net CO₂ emissions.",
            markScheme: [
              "Balanced equation C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O (1 for products, 1 for balancing) (1)",
              "Equation fully balanced including 3O₂ (1)",
              "Ethanol can be made from renewable plant material / fermentation (1)",
              "CO₂ released was absorbed by plants / closer to carbon neutral (1)",
            ],
            commonError: "Forgetting that ethanol already contains one oxygen atom when balancing the O₂, or claiming ethanol is fully carbon neutral (farming and distillation still use energy).",
            guideRef: "Alcohols and Ethanol",
            difficulty: "challenge",
            hints: [
              "Balance C and H first, then count oxygen.",
              "Ethanol contributes one O atom of its own.",
              "Explain the renewable source and the photosynthesis/CO₂ link.",
            ],
            solutions: [
              {
                label: "Balancing the combustion equation",
                steps: [
                  "Products of complete combustion: CO₂ and H₂O.",
                  "Balance C: 2 carbons give 2CO₂.",
                  "Balance H: 6 hydrogens give 3H₂O.",
                  "Right-hand O atoms: 2CO₂ = 4 O, 3H₂O = 3 O, total 7 O.",
                  "Ethanol supplies 1 O atom, so O₂ must supply 6 more = 3O₂.",
                  "Final balanced equation: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.",
                ],
              },
            ],
          },
          {
            id: "chem-organic-bq3-05",
            question: "Ethanoic acid is a weak acid. (a) Explain what is meant by a 'weak acid'. (b) Write an equation, including state symbols where helpful, to show ethanoic acid ionising in water. [3]",
            marks: 3,
            modelAnswer: "(a) A weak acid only partially ionises (dissociates) in water, so only a small proportion of its molecules release H⁺ ions. (b) CH₃COOH ⇌ CH₃COO⁻ + H⁺ — the reversible arrow shows that ionisation is incomplete.",
            markScheme: [
              "(a) Partially ionises / dissociates in water (1)",
              "(a) Only a small fraction releases H⁺ ions (1)",
              "(b) CH₃COOH ⇌ CH₃COO⁻ + H⁺ (reversible arrow) (1)",
            ],
            commonError: "Confusing 'weak' with 'dilute'. Weak refers to the degree of ionisation, not the concentration.",
            guideRef: "Carboxylic Acids",
            difficulty: "core",
            hints: [
              "Weak is about how fully the acid ionises, not how concentrated it is.",
              "Only some molecules release H⁺.",
              "Show this with a reversible (equilibrium) arrow.",
            ],
          },
          {
            id: "chem-organic-bq3-06",
            question: "Ethanoic acid shows typical acid reactions. Write word or symbol equations for its reaction with (a) magnesium and (b) sodium hydroxide, naming the salt in each case. [4]",
            marks: 4,
            modelAnswer: "(a) With magnesium: 2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂. The salt is magnesium ethanoate, and hydrogen gas is given off. (b) With sodium hydroxide (neutralisation): CH₃COOH + NaOH → CH₃COONa + H₂O. The salt is sodium ethanoate.",
            markScheme: [
              "(a) Reaction with Mg gives magnesium ethanoate + hydrogen (1)",
              "(a) Balanced equation 2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂ (1)",
              "(b) Reaction with NaOH gives sodium ethanoate + water (1)",
              "(b) Equation CH₃COOH + NaOH → CH₃COONa + H₂O (1)",
            ],
            commonError: "Forgetting that the reaction with a metal gives hydrogen (not water), and producing the wrong salt name (it should end in -ethanoate).",
            guideRef: "Carboxylic Acids",
            difficulty: "core",
            hints: [
              "Acid + metal → salt + hydrogen.",
              "Acid + base → salt + water.",
              "The salt of ethanoic acid is an ethanoate.",
            ],
          },
          {
            id: "chem-organic-bq3-07",
            question: "Describe how ethanoic acid can be produced from ethanol, and explain what is observed when a bottle of wine is left open to the air for a long time. [3]",
            marks: 3,
            modelAnswer: "Ethanol can be oxidised to ethanoic acid, for example by an oxidising agent (such as acidified potassium manganate(VII)) or by bacteria in the air. When wine is left open, oxygen and microbes oxidise the ethanol in the wine to ethanoic acid, so the wine develops a sharp, sour (vinegary) taste and smell.",
            markScheme: [
              "Ethanol is oxidised to ethanoic acid (1)",
              "Oxidation by oxidising agent / by air/bacteria (1)",
              "Wine turns sour / vinegary because ethanoic acid forms (1)",
            ],
            commonError: "Saying the wine 'evaporates' or 'ferments further'. The souring is oxidation of ethanol to ethanoic acid.",
            guideRef: "Carboxylic Acids",
            difficulty: "core",
            hints: [
              "What process converts an alcohol into a carboxylic acid?",
              "What gas from the air is involved?",
              "Link ethanoic acid to the sour taste of vinegar.",
            ],
          },
          {
            id: "chem-organic-bq3-08",
            question: "Ethanoic acid reacts with ethanol to form an ester. (a) Name the ester and write the equation. (b) State the catalyst and one observation. (c) Give one use of esters. [5]",
            marks: 5,
            modelAnswer: "(a) The ester is ethyl ethanoate: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. (b) The catalyst is concentrated sulfuric acid; on gentle warming a sweet/fruity smell is produced. (c) Esters are used as flavourings or perfumes (also as solvents).",
            markScheme: [
              "(a) Ester named ethyl ethanoate (1)",
              "(a) Equation CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (1)",
              "(b) Catalyst: concentrated sulfuric acid (1)",
              "(b) Observation: sweet / fruity smell (1)",
              "(c) Use: flavouring / perfume / solvent (1)",
            ],
            commonError: "Naming the ester 'ethanoic ethanol' or reversing the parts. The ester name is the alcohol-derived alkyl part (ethyl) followed by the acid-derived part (ethanoate).",
            guideRef: "Carboxylic Acids",
            difficulty: "challenge",
            hints: [
              "Acid + alcohol → ester + water.",
              "Name the ester: alkyl (from alcohol) then -anoate (from acid).",
              "Recall the acid catalyst and the characteristic smell.",
            ],
          },
          {
            id: "chem-organic-bq3-09",
            question: "A student adds a spatula of sodium carbonate to dilute ethanoic acid. (a) Describe and explain what is observed. (b) Write a balanced symbol equation for the reaction. [4]",
            marks: 4,
            modelAnswer: "(a) Effervescence (bubbling/fizzing) is seen as a gas is given off; the gas is carbon dioxide, which turns limewater milky. The sodium carbonate dissolves/disappears as it reacts. (b) 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂.",
            markScheme: [
              "(a) Effervescence / fizzing / gas given off (1)",
              "(a) Gas is carbon dioxide (turns limewater milky) (1)",
              "(b) Correct products: sodium ethanoate + water + carbon dioxide (1)",
              "(b) Balanced: 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂ (1)",
            ],
            commonError: "Saying the gas is hydrogen. Acid + carbonate releases carbon dioxide, not hydrogen.",
            guideRef: "Carboxylic Acids",
            difficulty: "challenge",
            hints: [
              "Use the template: acid + carbonate → salt + water + carbon dioxide.",
              "Bubbles of which gas would you expect, and how do you test for it?",
              "Two acid molecules are needed for each carbonate to balance.",
            ],
            solutions: [
              {
                label: "Balancing the equation",
                steps: [
                  "Products: sodium ethanoate (CH₃COONa), water and carbon dioxide.",
                  "Na₂CO₃ has 2 sodium atoms, so 2 ethanoate ions are needed: 2CH₃COONa.",
                  "That requires 2 acid molecules: 2CH₃COOH.",
                  "Carbonate provides C and O for one CO₂ and one H₂O.",
                  "Final: 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂.",
                ],
              },
            ],
          },
          {
            id: "chem-organic-bq3-10",
            question: "Esterification is described as a reversible reaction. Explain what this means and state how a high yield of ester can be encouraged. [3]",
            marks: 3,
            modelAnswer: "Reversible means the products (ester + water) can react together to re-form the reactants (acid + alcohol), so the reaction reaches an equilibrium rather than going to completion. To increase the yield of ester, the water (a product) can be removed as it forms, or an excess of one reactant (the acid or the alcohol) can be used, which shifts the position of equilibrium towards the ester.",
            markScheme: [
              "Reversible = products can react back to form reactants / reaches equilibrium (1)",
              "Remove water as it forms to increase ester yield (1)",
              "Use an excess of acid or alcohol (1)",
            ],
            commonError: "Thinking a reversible reaction must give 50% of each. The position of equilibrium can be shifted by changing conditions to favour the ester.",
            guideRef: "Carboxylic Acids",
            difficulty: "challenge",
            hints: [
              "What does the double (reversible) arrow tell you?",
              "Think about removing a product or adding excess reactant.",
              "Both moves shift the equilibrium towards more ester.",
            ],
          },
        ],
      },
      {
        id: "chem-organic-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Polymers, addition and condensation polymerisation, plastics and disposal.",
        questions: [
          {
            id: "chem-organic-bq4-01",
            question: "Define addition polymerisation and state the type of monomer required. [2]",
            marks: 2,
            modelAnswer: "Addition polymerisation is the joining together of many small unsaturated monomer molecules (each containing a C=C double bond) to form one long-chain polymer molecule, with no other product formed. The monomers must be unsaturated (contain a C=C double bond), e.g. ethene.",
            markScheme: [
              "Many monomers join to form a long-chain polymer / no other product formed (1)",
              "Monomers must be unsaturated / contain a C=C double bond (1)",
            ],
            commonError: "Stating that a small molecule (like water) is released. That happens in condensation, not addition polymerisation.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bq4-02",
            question: "Ethene polymerises to form poly(ethene). (a) Write an equation using n to show the formation of poly(ethene). (b) Draw or describe the repeat unit. [3]",
            marks: 3,
            modelAnswer: "(a) n CH₂=CH₂ → –(CH₂–CH₂)ₙ–. (b) The repeat unit is –CH₂–CH₂–, drawn inside square brackets with a bond crossing each bracket and a subscript n; all the bonds in the chain are single C–C bonds (the double bond has opened).",
            markScheme: [
              "(a) Equation n CH₂=CH₂ → –(CH₂–CH₂)ₙ– (1)",
              "(b) Repeat unit –CH₂–CH₂– (1)",
              "(b) Continuation bonds shown crossing the brackets / single bonds only (1)",
            ],
            commonError: "Leaving the C=C double bond in the polymer repeat unit. In addition polymerisation the double bond opens to form single bonds along the chain.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "Put n in front of the monomer and around the repeat unit.",
              "The double bond opens — the polymer backbone has single bonds.",
              "Show the bonds that continue out of each bracket.",
            ],
          },
          {
            id: "chem-organic-bq4-03",
            question: "A section of an addition polymer chain is –CH₂–CH(CH₃)–CH₂–CH(CH₃)–. (a) State the repeat unit. (b) Deduce the monomer and name it. [3]",
            marks: 3,
            modelAnswer: "(a) The repeat unit is –CH₂–CH(CH₃)–. (b) Restoring the double bond between the two carbons gives the monomer CH₂=CH(CH₃), which is propene. The polymer is poly(propene).",
            markScheme: [
              "(a) Repeat unit –CH₂–CH(CH₃)– (1)",
              "(b) Monomer CH₂=CH(CH₃) / CH₂=CHCH₃ (1)",
              "(b) Named propene (1)",
            ],
            commonError: "Treating each carbon as a separate repeat unit, or forgetting to add back the C=C when deducing the monomer.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "Find the smallest part of the chain that repeats.",
              "To get the monomer, put a double bond back between the two carbons.",
              "A CH₃ branch on the repeat unit signals propene.",
            ],
          },
          {
            id: "chem-organic-bq4-04",
            question: "Many plastics cause environmental problems when they are thrown away. Explain why this is so and describe two different methods of disposing of plastics, giving one disadvantage of each. [5]",
            marks: 5,
            modelAnswer: "Most addition polymers are non-biodegradable: microorganisms cannot break them down, so they persist for a very long time in landfill or as litter, harming wildlife. Method 1 — landfill: the plastic is buried, but it takes up large amounts of land/space and does not rot away (and can leach chemicals). Method 2 — incineration (burning for energy): this reduces the volume of waste and recovers energy, but it releases carbon dioxide (a greenhouse gas) and, for some plastics such as PVC, toxic gases like hydrogen chloride.",
            markScheme: [
              "Most plastics are non-biodegradable / not broken down by microbes (1)",
              "They persist in the environment / harm wildlife (1)",
              "Method 1 named (e.g. landfill) with a disadvantage (takes up space / does not rot) (1)",
              "Method 2 named (e.g. incineration) (1)",
              "Disadvantage of method 2 (CO₂ / toxic gases such as HCl) (1)",
            ],
            commonError: "Giving two versions of the same method, or stating an advantage instead of a disadvantage. Read carefully: each method needs a disadvantage.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "Start by explaining 'non-biodegradable'.",
              "Choose two genuinely different disposal methods.",
              "For each method, give a specific drawback.",
            ],
          },
          {
            id: "chem-organic-bq4-05",
            question: "PVC (poly(chloroethene)) is made from the monomer chloroethene, CH₂=CHCl. (a) Draw or describe the repeat unit of PVC. (b) Explain why burning PVC is more hazardous than burning poly(ethene). [3]",
            marks: 3,
            modelAnswer: "(a) The repeat unit is –CH₂–CHCl– (drawn in brackets with continuation bonds and subscript n). (b) PVC contains chlorine, so when it is burned it releases toxic, corrosive hydrogen chloride (HCl) gas (and possibly dioxins). Poly(ethene) contains only carbon and hydrogen, so it does not release these chlorine-containing toxic gases.",
            markScheme: [
              "(a) Repeat unit –CH₂–CHCl– (1)",
              "(b) PVC contains chlorine, releasing toxic HCl / hydrogen chloride (or dioxins) on burning (1)",
              "(b) Poly(ethene) has only C and H, so no such toxic gas (1)",
            ],
            commonError: "Forgetting the Cl atom in the PVC repeat unit, or not linking the hazard to the chlorine content.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "challenge",
            hints: [
              "Open the C=C of chloroethene to get the repeat unit.",
              "Which extra element does PVC contain?",
              "What harmful gas does that element form when burned?",
            ],
          },
          {
            id: "chem-organic-bq4-06",
            question: "Nylon is made by condensation polymerisation. (a) State one way in which condensation polymerisation differs from addition polymerisation. (b) Name the type of monomers needed and the small molecule usually lost. [3]",
            marks: 3,
            modelAnswer: "(a) In condensation polymerisation a small molecule (usually water) is released each time two monomers join, whereas in addition polymerisation no other product is formed. (b) The monomers each have two reactive functional groups (e.g. a diamine and a dicarboxylic acid for nylon), and the small molecule usually lost is water.",
            markScheme: [
              "(a) Condensation loses a small molecule / addition forms no by-product (1)",
              "(b) Monomers have two functional groups each / two different monomers (1)",
              "(b) Small molecule lost is water (1)",
            ],
            commonError: "Saying condensation monomers contain C=C. They contain two functional groups; it is addition monomers that need a C=C double bond.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "challenge",
            hints: [
              "Compare what is produced besides the polymer.",
              "Think about how many functional groups each monomer needs.",
              "Name the small molecule eliminated at each link.",
            ],
          },
          {
            id: "chem-organic-bq4-07",
            question: "PET is a polymer used to make drinks bottles. Explain two advantages of recycling PET bottles rather than burying them in landfill. [3]",
            marks: 3,
            modelAnswer: "Recycling PET conserves the crude oil from which the polymer is made, because the plastic is reprocessed instead of new plastic being manufactured from raw materials. It also reduces the amount of waste sent to landfill, saving land/space, and since PET is non-biodegradable, landfill waste would otherwise remain for a very long time. Recycling can also use less energy than making new plastic from scratch.",
            markScheme: [
              "Conserves crude oil / saves raw materials (1)",
              "Reduces waste going to landfill / saves land (1)",
              "Saves energy / reduces litter harming wildlife (any valid second/third point) (1)",
            ],
            commonError: "Saying recycling makes the plastic biodegradable. Recycling reuses the material; it does not change the polymer's biodegradability.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "Where does the raw material for plastics come from?",
              "What problem does landfill cause for non-biodegradable plastics?",
              "Consider energy and resource savings.",
            ],
          },
          {
            id: "chem-organic-bq4-08",
            question: "Poly(ethene) can be represented as –(CH₂CH₂)ₙ–. A sample has a relative molecular mass of 56 000. Calculate the value of n. (Mr of CH₂CH₂ repeat unit = 28.) [3]",
            marks: 3,
            modelAnswer: "n = total Mr ÷ Mr of repeat unit = 56 000 ÷ 28 = 2000. So n = 2000 repeat units (and therefore 2000 ethene molecules joined together).",
            markScheme: [
              "Method: n = total Mr ÷ Mr of repeat unit (1)",
              "56 000 ÷ 28 (1)",
              "n = 2000 (1)",
            ],
            commonError: "Dividing by the Mr of ethene as a monomer with a double bond rather than the repeat unit (here both are 28, but students sometimes use 14 for CH₂). The repeat unit –CH₂CH₂– has Mr 28.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "challenge",
            hints: [
              "The polymer Mr is n times the repeat-unit Mr.",
              "Rearrange to make n the subject.",
              "Divide 56 000 by 28.",
            ],
            solutions: [
              {
                label: "Calculation",
                steps: [
                  "Mr of repeat unit –CH₂CH₂– = (12 + 2) + (12 + 2) = 28.",
                  "Total Mr of polymer = n × 28.",
                  "Rearrange: n = total Mr ÷ 28.",
                  "n = 56 000 ÷ 28.",
                  "n = 2000 repeat units.",
                ],
              },
            ],
          },
          {
            id: "chem-organic-bq4-09",
            question: "Explain why plastics are so widely used, giving two useful properties, and then explain why these same properties contribute to a disposal problem. [4]",
            marks: 4,
            modelAnswer: "Plastics are widely used because they are cheap, strong, lightweight, flexible, waterproof and chemically unreactive (inert), making them ideal for packaging and many products. Two useful properties are: (1) they are chemically inert/unreactive, and (2) they are durable/strong. However, these same properties cause a disposal problem: because they are unreactive and durable, microorganisms cannot break them down (non-biodegradable), so discarded plastics persist in landfill and the environment for a very long time, harming wildlife.",
            markScheme: [
              "Two useful properties named (e.g. inert, durable, lightweight, waterproof, flexible) (1)",
              "Reason these make plastics useful (e.g. good for packaging) (1)",
              "Same inertness/durability means non-biodegradable (1)",
              "So plastics persist in the environment / cause long-term waste (1)",
            ],
            commonError: "Listing properties without linking them to the disposal problem. The key idea is that the very inertness that makes plastics useful also makes them non-biodegradable.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "List properties that make plastics convenient.",
              "Pick the ones connected to being unreactive and long-lasting.",
              "Explain how durability becomes a problem after disposal.",
            ],
          },
          {
            id: "chem-organic-bq4-10",
            question: "The polymer PTFE (used as a non-stick coating) has the repeat unit –CF₂–CF₂–. (a) Deduce the monomer and give its formula. (b) State the type of polymerisation. (c) Suggest why PTFE is described as chemically very unreactive. [4]",
            marks: 4,
            modelAnswer: "(a) Adding back the C=C double bond gives the monomer CF₂=CF₂ (tetrafluoroethene). (b) Addition polymerisation. (c) PTFE is very unreactive because the carbon–fluorine (C–F) bonds are very strong and the chain has only strong single covalent bonds, so it resists chemical attack (it is also non-polar and saturated).",
            markScheme: [
              "(a) Monomer CF₂=CF₂ / tetrafluoroethene (1)",
              "(a) Shows/states a C=C double bond restored (1)",
              "(b) Addition polymerisation (1)",
              "(c) Strong C–F bonds / strong single covalent bonds make it unreactive (1)",
            ],
            commonError: "Leaving the repeat unit unchanged as the 'monomer'. The monomer must contain a C=C double bond (CF₂=CF₂).",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "challenge",
            hints: [
              "Undo the polymer by adding a double bond between the carbons.",
              "C=C-containing monomers indicate which type of polymerisation.",
              "Think about the strength of the C–F bonds.",
            ],
          },
        ],
      },
    ],
  },
};
