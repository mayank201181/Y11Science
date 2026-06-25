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
        id: "chem-organic-bank-mcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Crude oil fractions, homologous series, alkanes and combustion.",
        questions: [
          {
            id: "chem-organic-bank-mcq1-q01",
            question: "Which property of a hydrocarbon fraction INCREASES as chain length increases?",
            options: ["Volatility", "Flammability", "Boiling point", "Ease of ignition"],
            answerIndex: 2,
            explanation: "Boiling point increases with chain length because longer chains have greater surface area for dispersion (van der Waals) forces, requiring more energy to separate molecules. Volatility, flammability and ease of ignition all decrease with chain length.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bank-mcq1-q02",
            question: "Which of the following is a homologous series?",
            options: [
              "CH₄, C₂H₄, C₃H₄ — differ by CH₂ each time",
              "CH₄, C₂H₆, C₃H₈ — differ by CH₂ each time and same functional group",
              "CH₄, C₂H₅OH, CH₃COOH — all contain carbon",
              "C₂H₄, C₂H₅OH, CH₃COOH — each differs by one carbon",
            ],
            answerIndex: 1,
            explanation: "A homologous series requires the same general formula, the same functional group, and successive members differing by –CH₂–. Option B (alkanes: CH₄, C₂H₆, C₃H₈) meets all criteria: general formula CₙH₂ₙ₊₂, no functional group (saturated), and successive members differ by CH₂. Option A mixes series (CH₄ is an alkane; C₂H₄ is an alkene; C₃H₄ is an alkyne/diene — they do not share the same functional group). Option C mixes completely different series (alkane, alcohol, carboxylic acid). Option D also mixes different series (alkene, alcohol, carboxylic acid) with different functional groups.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "Check all four criteria: same general formula, same functional group, gradual change in physical properties, differ by CH₂.",
              "Methane CH₄, ethane C₂H₆, propane C₃H₈ — all alkanes, all differ by CH₂.",
            ],
          },
          {
            id: "chem-organic-bank-mcq1-q03",
            question: "Propane (C₃H₈) undergoes complete combustion. What are the products?",
            options: [
              "CO + H₂O",
              "CO₂ + H₂O",
              "CO₂ + H₂",
              "C + H₂O",
            ],
            answerIndex: 1,
            explanation: "Complete combustion (excess oxygen) of any hydrocarbon gives CO₂ and H₂O only. The balanced equation is: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. CO and C (soot) are products of incomplete combustion only.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bank-mcq1-q04",
            question: "Methane reacts with chlorine in the presence of ultraviolet light. What type of reaction is this?",
            options: ["Addition", "Substitution", "Combustion", "Elimination"],
            answerIndex: 1,
            explanation: "CH₄ + Cl₂ → CH₃Cl + HCl. One H atom is replaced by Cl — this is substitution. Addition reactions involve adding atoms to a double bond (alkenes). Combustion requires oxygen. Elimination removes atoms to form a double bond.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bank-mcq1-q05",
            question: "A car engine has limited oxygen in the cylinder. Which products of petrol combustion are most likely under these conditions?",
            options: [
              "CO₂ and H₂O only",
              "CO and H₂O only",
              "CO₂, CO and H₂O",
              "CO₂ and H₂",
            ],
            answerIndex: 2,
            explanation: "Under limited oxygen (incomplete combustion), both CO₂ and CO are produced alongside H₂O — in practice a real engine produces a mixture as oxygen availability varies in different parts of the cylinder. CO is toxic; that is why catalytic converters oxidise it to CO₂.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "Limited oxygen → incomplete combustion → CO forms alongside any CO₂.",
              "In practice, both CO and CO₂ are produced, not exclusively one or the other.",
            ],
          },
          {
            id: "chem-organic-bank-mcq1-q06",
            question: "Which fraction from crude oil distillation is used as the raw material for making plastics?",
            options: ["Bitumen", "Refinery gas", "Naphtha", "Fuel oil"],
            answerIndex: 2,
            explanation: "Naphtha (C8–C12) is the primary feedstock for the petrochemical industry and is cracked to produce ethene and other alkenes used to make plastics. Refinery gas is used as fuel; bitumen for roads; fuel oil for ships.",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "core",
            hints: [
              "Which fraction is described as a 'chemical feedstock' rather than directly as a fuel?",
              "Naphtha sits between gasoline and kerosene on the distillation column.",
            ],
          },
        ],
      },
      {
        id: "chem-organic-bank-mcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Alkenes, alcohols, carboxylic acids, and polymers.",
        questions: [
          {
            id: "chem-organic-bank-mcq2-q01",
            question: "Which of the following is the general formula of alkenes?",
            options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"],
            answerIndex: 1,
            explanation: "Alkenes have the general formula CₙH₂ₙ (e.g. ethene C₂H₄, propene C₃H₆). Alkanes are CₙH₂ₙ₊₂. CₙH₂ₙ₋₂ would be alkynes or dienes. CₙHₙ is not a standard homologous series.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bank-mcq2-q02",
            question: "Ethene reacts with steam in the presence of a phosphoric acid catalyst. What is the product?",
            options: ["Ethane", "Ethanol", "Ethanoic acid", "Diethyl ether"],
            answerIndex: 1,
            explanation: "H₂C=CH₂ + H₂O → CH₃CH₂OH (ethanol). This is hydration — water adds across the double bond. The phosphoric acid catalyst and conditions (~300 °C, ~60 atm) are characteristic of the industrial manufacture of ethanol.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "warmup",
          },
          {
            id: "chem-organic-bank-mcq2-q03",
            question: "Which statement correctly describes fermentation for making ethanol?",
            options: [
              "Glucose reacts with phosphoric acid at 300 °C to give ethanol",
              "Ethene reacts with water in the presence of yeast at 35 °C",
              "Glucose is broken down by yeast at ~35 °C in the absence of air to give ethanol and CO₂",
              "Glucose is oxidised by oxygen at 35 °C to give ethanol and water",
            ],
            answerIndex: 2,
            explanation: "Fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ using yeast (enzyme zymase), ~35 °C, anaerobic. Option A describes hydration. Option B confuses the raw material. Option D describes aerobic respiration, which gives CO₂ and H₂O, not ethanol.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "core",
            hints: [
              "Fermentation uses glucose (not ethene) and yeast (not a chemical catalyst).",
              "The key conditions: low temperature, anaerobic (no air), aqueous.",
            ],
          },
          {
            id: "chem-organic-bank-mcq2-q04",
            question: "Ethanoic acid reacts with sodium carbonate solution. Which products are formed?",
            options: [
              "Sodium ethanoate + water only",
              "Sodium ethanoate + water + carbon dioxide",
              "Ethanol + sodium carbonate + water",
              "Sodium ethanoate + hydrogen",
            ],
            answerIndex: 1,
            explanation: "Acid + carbonate → salt + water + CO₂. So: 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂. The effervescence (bubbles) of CO₂ is the key observation. Option A is the product of acid + base (no carbonate). Option D would be acid + metal.",
            guideRef: "Carboxylic Acids",
            difficulty: "core",
            hints: [
              "Use the template: acid + carbonate → salt + water + CO₂.",
              "The salt name: replace 'hydrogen' in the acid with the metal — sodium ethanoate.",
            ],
          },
          {
            id: "chem-organic-bank-mcq2-q05",
            question: "A monomer has the structure CF₂=CF₂ (tetrafluoroethene). What is the repeat unit of its addition polymer?",
            options: [
              "–(CF=CF)ₙ–",
              "–(CF₂–CF₂)ₙ–",
              "–(CF₂=CF₂)ₙ–",
              "–(C₂F₄)ₙ– with a double bond",
            ],
            answerIndex: 1,
            explanation: "In addition polymerisation, the C=C double bond opens and the monomers link via single bonds. Repeat unit of poly(tetrafluoroethene) / PTFE = –CF₂–CF₂– inside square brackets with subscript n. The double bond is gone in the polymer — options C and D incorrectly retain it.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "core",
            hints: [
              "The C=C double bond is broken during polymerisation — it does not appear in the repeat unit.",
              "Simply replace the '=' with '–' and add bracket bonds on each end.",
            ],
          },
          {
            id: "chem-organic-bank-mcq2-q06",
            question: "A student claims that biofuel ethanol is 'completely carbon-neutral'. Which statement BEST evaluates this claim?",
            options: [
              "True — plants absorb CO₂ as they grow, exactly balancing the CO₂ released on combustion.",
              "False — ethanol combustion releases no CO₂ at all.",
              "Partially true — while plants absorb CO₂ as they grow, energy used in farming, transport and distillation usually comes from fossil fuels, so the net CO₂ saving is less than 100%.",
              "True — ethanol contains no carbon atoms, so no CO₂ is produced.",
            ],
            answerIndex: 2,
            explanation: "In principle, plant growth absorbs CO₂ and combustion releases it — a cycle. But in practice, growing crops (fertilisers), transporting feedstock and distilling ethanol all require energy, often from fossil fuels. Therefore, the true carbon saving is less than 100%. Option A ignores these life-cycle emissions. Options B and D are factually incorrect.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "challenge",
            hints: [
              "Think beyond the combustion equation — consider the whole life cycle.",
              "What energy sources are used in agriculture, transport and distillation?",
              "Even if plant growth absorbs CO₂, what happens if a fossil-fuel tractor harvests the crop?",
            ],
            strategy: "Life-cycle analysis: consider all stages from raw material to waste.",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-organic-bank-qa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Crude oil, alkanes, alkenes and cracking.",
        questions: [
          {
            id: "chem-organic-bank-qa1-q01",
            question: "Crude oil is refined by fractional distillation.\n(a) Explain why fractional distillation can be used to separate crude oil, but not to separate a pure compound. (2 marks)\n(b) State TWO differences between the fraction collected at the top of the column and the fraction collected at the bottom. (2 marks)\n(c) Name the fraction used as jet fuel. (1 mark)",
            marks: 5,
            modelAnswer: "(a) Crude oil is a mixture of hydrocarbons with different boiling points; the components can be separated by physical means (fractional distillation). A pure compound has a single, fixed boiling point and cannot be separated into components — it would all evaporate and condense together.\n\n(b) Any two of: the fraction at the top has shorter chain length / lower boiling point / greater volatility / lower viscosity / higher flammability; the fraction at the bottom has longer chain length / higher boiling point / lower volatility / greater viscosity / lower flammability.\n\n(c) Kerosene / paraffin.",
            markScheme: [
              "(a) Crude oil is a mixture (of hydrocarbons with different boiling points) — not a pure substance (1 mark)",
              "(a) A pure compound has a single fixed boiling point, so it cannot be separated further (1 mark)",
              "(b) Top fraction: shorter chain / lower boiling point / more volatile / less viscous / more flammable (1 mark)",
              "(b) Bottom fraction: longer chain / higher boiling point / less volatile / more viscous / less flammable (1 mark) — must be a genuine contrast",
              "(c) Kerosene / paraffin (1 mark)",
            ],
            commonError: "Saying crude oil is separated by 'evaporation' alone — the key is that different components condense at different levels in the column. Also, confusing kerosene (jet fuel) with diesel (lorries/trains).",
            guideRef: "Crude Oil and Fractional Distillation",
            difficulty: "core",
            hints: [
              "Part (a): think about the definition of a mixture versus a pure substance.",
              "Part (b): pick two properties that change systematically with chain length.",
              "Part (c): recall which fraction is used in aviation — it has a medium chain length.",
            ],
          },
          {
            id: "chem-organic-bank-qa1-q02",
            question: "Long-chain alkanes from crude oil refining are converted into shorter, more useful molecules by cracking.\n(a) State the conditions needed for catalytic cracking. (2 marks)\n(b) Write a balanced equation for the cracking of hexadecane (C₁₆H₃₄) to give dodecane (C₁₂H₂₆) and one other product. Identify the other product and explain how you determined its formula. (3 marks)\n(c) Explain why cracking is economically important. (2 marks)",
            marks: 7,
            modelAnswer: "(a) High temperature (~500 °C) and a silica/alumina catalyst.\n\n(b) C₁₆H₃₄ → C₁₂H₂₆ + CₓHᵧ. Carbon: 16 – 12 = 4; hydrogen: 34 – 26 = 8. So the other product is C₄H₈. Check: CₙH₂ₙ with n=4 → C₄H₈ (butene — an alkene). Equation: C₁₆H₃₄ → C₁₂H₂₆ + C₄H₈.\n\n(c) Long-chain fractions (e.g. fuel oil) are in low demand and low value, whereas shorter-chain fractions (petrol, diesel) and alkenes (for plastics) are in high demand. Cracking converts the surplus long-chain alkanes into these more valuable, higher-demand products, increasing the commercial value of the refinery output.",
            markScheme: [
              "(a) High temperature (~500 °C) (1 mark)",
              "(a) Catalyst: silica/alumina / zeolite (1 mark)",
              "(b) Correct by atom counting: 16–12=4 C and 34–26=8 H → C₄H₈ (1 mark)",
              "(b) Balanced equation: C₁₆H₃₄ → C₁₂H₂₆ + C₄H₈ (1 mark)",
              "(b) Identifies product as an alkene (butene) — because it fits CₙH₂ₙ (1 mark)",
              "(c) Long-chain fractions are in excess / low demand; short-chain fractions and alkenes are in high demand (1 mark)",
              "(c) Cracking increases yield of useful/high-value products, improving economic value of crude oil (1 mark)",
            ],
            commonError: "For (b), students often try butane (C₄H₁₀) — but that would require 36 H atoms (26+10), not 34. Always balance H as well as C. The product of cracking is always at least one alkene.",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "challenge",
            hints: [
              "Step 1: subtract C atoms in dodecane from hexadecane to find C atoms in the other product.",
              "Step 2: subtract H atoms in dodecane from hexadecane to find H atoms in the other product.",
              "Step 3: check whether the formula fits CₙH₂ₙ (alkene) or CₙH₂ₙ₊₂ (alkane). Cracking always produces an alkene.",
              "Write the full balanced equation and double-check both C and H counts.",
            ],
            strategy: "Balance by atom conservation: solve for x and y in CₓHᵧ = C₁₆H₃₄ – C₁₂H₂₆.",
            solutions: [
              {
                label: "Atom-counting method",
                steps: [
                  "Carbon: 16 (in C₁₆H₃₄) – 12 (in C₁₂H₂₆) = 4 C atoms in the unknown.",
                  "Hydrogen: 34 – 26 = 8 H atoms in the unknown.",
                  "Formula of unknown: C₄H₈. Check: CₙH₂ₙ with n=4 → alkene confirmed.",
                  "Balanced equation: C₁₆H₃₄ → C₁₂H₂₆ + C₄H₈",
                ],
              },
            ],
          },
          {
            id: "chem-organic-bank-qa1-q03",
            question: "Alkanes undergo substitution reactions with halogens in the presence of ultraviolet light.\n(a) Write the equation for the reaction of methane with chlorine in ultraviolet light. (1 mark)\n(b) Name the type of bond breaking that initiates this reaction and explain why UV light is required. (2 marks)\n(c) Suggest why alkanes do not undergo addition reactions under normal conditions. (2 marks)",
            marks: 5,
            modelAnswer: "(a) CH₄ + Cl₂ → CH₃Cl + HCl\n\n(b) Homolytic fission — the Cl–Cl bond breaks so that each chlorine atom receives one electron, forming two chlorine radicals (Cl•). UV light provides the energy (photons) needed to break the Cl–Cl bond and initiate the chain reaction.\n\n(c) Alkanes are saturated — all C–C and C–H bonds are single sigma bonds. There is no C=C double bond (no pi bond) for electrophiles or other reagents to add across. The C–H bonds are also non-polar and strong, making them resistant to attack.",
            markScheme: [
              "(a) CH₄ + Cl₂ → CH₃Cl + HCl (1 mark — must be balanced)",
              "(b) Homolytic fission (1 mark)",
              "(b) UV provides energy to break the Cl–Cl bond / generates Cl radicals (1 mark)",
              "(c) Alkanes are saturated / no C=C double bond (1 mark)",
              "(c) No pi bond for electrophiles/reagents to add across / C–H bonds are strong and non-polar (1 mark)",
            ],
            commonError: "Writing the equation without HCl (the by-product) — substitution always gives two products. Also, confusing homolytic fission with heterolytic fission; in UV-initiated reactions it is always homolytic (radicals).",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "core",
            hints: [
              "Part (a): one H is replaced by one Cl; the displaced H combines with another Cl to make HCl.",
              "Part (b): look at what the Cl–Cl bond gives when split — two identical fragments, each with one electron → radicals → homolytic.",
              "Part (c): what structural feature do alkenes have that alkanes lack?",
            ],
          },
          {
            id: "chem-organic-bank-qa1-q04",
            question: "Ethene undergoes a variety of addition reactions.\n(a) Write the equation for the hydrogenation of ethene, stating the conditions. (2 marks)\n(b) Ethene reacts with bromine water. Describe what you would observe and write the equation for the reaction. (3 marks)\n(c) Explain why ethene undergoes addition reactions but ethane does not. (2 marks)",
            marks: 7,
            modelAnswer: "(a) CH₂=CH₂ + H₂ → CH₃CH₃ (ethane). Conditions: nickel catalyst, ~150 °C.\n\n(b) The bromine water decolourises — the orange/brown colour disappears to give a colourless solution. Equation: CH₂=CH₂ + Br₂ → CH₂BrCH₂Br (1,2-dibromoethane).\n\n(c) Ethene has a C=C double bond. The double bond consists of a sigma bond and a pi bond; the pi bond is weaker and its electron density is accessible to electrophiles, allowing addition reactions. Ethane has only single C–C and C–H sigma bonds with no available pi electrons, so it does not undergo addition reactions.",
            markScheme: [
              "(a) Equation: CH₂=CH₂ + H₂ → CH₃CH₃ / C₂H₆ (1 mark)",
              "(a) Conditions: Ni catalyst, ~150 °C (1 mark)",
              "(b) Bromine water decolourises / orange/brown → colourless (1 mark)",
              "(b) Equation: CH₂=CH₂ + Br₂ → CH₂BrCH₂Br / 1,2-dibromoethane (1 mark)",
              "(b) Addition product correctly identified (1 mark)",
              "(c) Ethene has C=C double bond / pi bond (1 mark)",
              "(c) Ethane has only single bonds / no pi bond / no accessible electrons for addition (1 mark)",
            ],
            commonError: "For (b), writing that bromine water turns brown — it goes colourless (transparent). Also omitting the product of hydrogenation (ethane, not 'ethene + H₂').",
            guideRef: "Alkenes, Cracking and Addition Reactions",
            difficulty: "core",
            hints: [
              "Part (a): hydrogenation = adding H₂. Nickel catalyst and moderate heat are standard.",
              "Part (b): state the colour change precisely; then write the product of Br₂ adding across C=C.",
              "Part (c): contrast the presence of a pi bond in ethene with the absence of one in ethane.",
            ],
          },
        ],
      },
      {
        id: "chem-organic-bank-qa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Alcohols, carboxylic acids, polymers and synoptic questions.",
        questions: [
          {
            id: "chem-organic-bank-qa2-q01",
            question: "Ethanol (C₂H₅OH) is an important industrial chemical.\n(a) Write the balanced equation for the complete combustion of ethanol. (2 marks)\n(b) State TWO uses of ethanol other than as a fuel. (2 marks)\n(c) Ethanol is sometimes described as a 'carbon-neutral' fuel. Explain what this means and evaluate whether the description is fully accurate. (3 marks)",
            marks: 7,
            modelAnswer: "(a) C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O\n\n(b) Any two of: solvent (in perfumes, medicines, cleaning products); raw material for making ethanoic acid; antiseptic/disinfectant; in alcoholic drinks.\n\n(c) 'Carbon-neutral' means that the CO₂ released when ethanol is burned is balanced by the CO₂ absorbed by the plants (e.g. sugar cane) used to make the glucose that is fermented to produce the ethanol — so there is no net addition of CO₂ to the atmosphere. However, this is not fully accurate: the agricultural processes (ploughing, fertiliser production, irrigation), transport of feedstock and distillation of ethanol all consume energy, which often comes from fossil fuels. This releases additional CO₂ that is not offset by plant growth. Therefore, the net CO₂ saving is real but less than 100%, making 'carbon-neutral' an over-simplification.",
            markScheme: [
              "(a) C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O (2 marks: 1 for correct products, 1 for balancing)",
              "(b) Any two: solvent; antiseptic; manufacturing ethanoic acid / esters; alcoholic drinks (1 mark each, max 2)",
              "(c) CO₂ released on combustion is reabsorbed by growing plants — net CO₂ balance (1 mark)",
              "(c) Not fully accurate: energy used in farming/transport/distillation often from fossil fuels (1 mark)",
              "(c) Net CO₂ saving is less than 100% / not truly carbon neutral (1 mark)",
            ],
            commonError: "Balancing (a) incorrectly — check: C: 2=2✓, H: 6=6✓, O: 1+6=7 on left; 4+3=7 on right✓. Students often write 2O₂ instead of 3O₂.",
            guideRef: "Alcohols and Ethanol",
            difficulty: "core",
            hints: [
              "Part (a): count C, H and O on each side. Ethanol has 2C, 6H, 1O. Products: 2CO₂ has 4O; 3H₂O has 3O — total 7O on right, so 7O needed on left: 1 (from ethanol) + 6 (from 3O₂) = 7. ✓",
              "Part (c): carbon-neutral = the carbon cycle is closed. But think about what energy powers the farm and the distillery.",
            ],
            solutions: [
              {
                label: "Balancing combustion by inspection",
                steps: [
                  "Write unbalanced: C₂H₅OH + O₂ → CO₂ + H₂O",
                  "Balance C: 2 C on left → 2CO₂",
                  "Balance H: 6 H on left → 3H₂O",
                  "Balance O: left = 1 (ethanol) + ? (O₂). Right = 4 + 3 = 7. So ? = 6, meaning 3O₂.",
                  "Final: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O ✓",
                ],
              },
            ],
          },
          {
            id: "chem-organic-bank-qa2-q02",
            question: "Ethanoic acid (CH₃COOH) is a weak acid found in vinegar.\n(a) What does it mean for an acid to be 'weak'? (1 mark)\n(b) Write an equation for the reaction of ethanoic acid with magnesium. Name the salt produced. (2 marks)\n(c) A student wishes to make the ester ethyl ethanoate. State the reagents and conditions needed, and write the equation for the reaction. (3 marks)\n(d) Suggest one use of esters in everyday life. (1 mark)",
            marks: 7,
            modelAnswer: "(a) A weak acid only partially ionises / dissociates in aqueous solution (the equilibrium lies mainly to the left: CH₃COOH ⇌ CH₃COO⁻ + H⁺).\n\n(b) Mg + 2CH₃COOH → (CH₃COO)₂Mg + H₂. Salt: magnesium ethanoate.\n\n(c) Reagents: ethanoic acid + ethanol (C₂H₅OH). Catalyst: concentrated sulfuric acid (H₂SO₄). Conditions: warm gently / ~60–70 °C (do not boil). Equation: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. (The reaction is reversible, shown by ⇌.)\n\n(d) Any one of: food flavourings and fragrances (e.g. in sweets, perfumes); solvents in glues, paints, nail polish remover.",
            markScheme: [
              "(a) Partially ionises / partially dissociates in solution / equilibrium position to the left (1 mark)",
              "(b) Equation: Mg + 2CH₃COOH → (CH₃COO)₂Mg + H₂ (1 mark)",
              "(b) Salt name: magnesium ethanoate (1 mark)",
              "(c) Reagents: ethanoic acid + ethanol (1 mark)",
              "(c) Catalyst: concentrated H₂SO₄ / sulfuric acid (1 mark)",
              "(c) Equation with ⇌ and correct products: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (1 mark)",
              "(d) Flavouring / fragrance / solvent / perfume ingredient (1 mark)",
            ],
            commonError: "For (a), saying 'does not fully dissolve' — solubility and ionisation are different. Ethanoic acid dissolves completely in water; the 'weakness' refers to partial ionisation of dissolved molecules. For (c), omitting the reversible sign (⇌) — esterification is always reversible.",
            guideRef: "Carboxylic Acids",
            difficulty: "core",
            hints: [
              "Part (a): 'weak' refers to the degree of ionisation, not solubility.",
              "Part (b): acid + metal → salt + hydrogen. Name the salt: replace 'hydrogen' in 'ethanoic acid' with 'magnesium'.",
              "Part (c): acid + alcohol → ester + water; use concentrated H₂SO₄ as catalyst; ⇌ for reversible.",
            ],
          },
          {
            id: "chem-organic-bank-qa2-q03",
            question: "A manufacturer produces a plastic from the monomer chloroethene (CH₂=CHCl).\n(a) Name the polymer produced and state the type of polymerisation. (2 marks)\n(b) Draw the repeat unit of the polymer. (2 marks)\n(c) The manufacturer wishes to dispose of waste plastic. Evaluate incineration as a method of disposal for this particular polymer. (4 marks)",
            marks: 8,
            modelAnswer: "(a) Poly(chloroethene) / PVC (polyvinyl chloride). Type: addition polymerisation.\n\n(b) Repeat unit: [–CH₂–CHCl–]ₙ (square brackets, bond crossing each bracket, subscript n; one CH₂ unit with 2 H, one CHCl unit with 1 H and 1 Cl hanging off).\n\n(c) Advantages of incineration: reduces volume of waste; can generate useful energy (electricity/heat). Disadvantages specific to PVC: the chlorine in the polymer produces toxic/corrosive gases on burning — hydrogen chloride (HCl) and potentially dioxins, which are persistent organic pollutants and highly toxic. These gases must be captured by scrubbers, adding cost and complexity. If gas scrubbing is inadequate, the gases pollute the atmosphere and pose health risks. For a chlorine-containing polymer, incineration is more problematic than for non-chlorinated plastics like poly(ethene).",
            markScheme: [
              "(a) Poly(chloroethene) / PVC (1 mark)",
              "(a) Addition polymerisation (1 mark)",
              "(b) [–CH₂–CHCl–]ₙ — must show square brackets, bonds crossing, subscript n, correct atoms (2 marks)",
              "(c) Advantage: reduces volume / energy recovery (1 mark)",
              "(c) Disadvantage: produces HCl / toxic gases / dioxins because of chlorine in polymer (1 mark)",
              "(c) Environmental/health impact of these gases: corrosive / air pollution / toxic to organisms (1 mark)",
              "(c) Mitigation (gas scrubbing) required — adds cost / complexity / not 100% effective (1 mark)",
            ],
            commonError: "Drawing the repeat unit with a C=C — the double bond is absent in the polymer. Also, for the evaluation, giving only generic incineration points (CO₂ produced) without addressing the specific hazard of chlorine in PVC.",
            guideRef: "Addition Polymerisation and Plastics",
            difficulty: "challenge",
            hints: [
              "Part (b): remove the '=' from the monomer and draw the two C atoms with their substituents connected by a single bond, inside square brackets.",
              "Part (c): think about ALL elements in PVC: C, H and Cl. What does Cl form when burned?",
              "A balanced evaluation states advantages AND disadvantages with reasons, specific to this polymer.",
            ],
            strategy: "Evaluate = state advantages + disadvantages with specific reasoning. Generic points score less than polymer-specific ones.",
          },
          {
            id: "chem-organic-bank-qa2-q04",
            question: "This question is about homologous series and the chemistry of organic compounds.\n(a) Define the term 'homologous series'. (3 marks)\n(b) The table below lists four organic compounds. For each one, identify the homologous series it belongs to and state its functional group.\n   (i) C₄H₁₀   (ii) C₄H₈   (iii) C₂H₅OH   (iv) CH₃COOH (4 marks)\n(c) A hydrocarbon X decolourises bromine water but does not react with bromine water when UV light is excluded and the solution is heated. Identify the type of compound X belongs to and explain its behaviour. (3 marks)",
            marks: 10,
            modelAnswer: "(a) A homologous series is a group/family of organic compounds that: share the same general formula; contain the same functional group; have similar chemical properties; show a gradual change in physical properties (e.g. boiling point) as chain length increases; successive members differ by a –CH₂– unit.\n\n(b)\n(i) C₄H₁₀ — alkane (CₙH₂ₙ₊₂ with n=4); functional group: none / C–H and C–C single bonds only.\n(ii) C₄H₈ — alkene (CₙH₂ₙ with n=4); functional group: C=C (carbon–carbon double bond).\n(iii) C₂H₅OH — alcohol; functional group: –OH (hydroxyl group).\n(iv) CH₃COOH — carboxylic acid; functional group: –COOH (carboxyl group).\n\n(c) X is an alkene (unsaturated hydrocarbon). It decolourises bromine water because bromine undergoes an addition reaction across the C=C double bond (Br₂ adds to give a dibromo compound). The condition 'UV light excluded, heated' is the condition for radical substitution of alkanes, which X does not undergo — confirming X is not an alkane. The C=C is reactive enough for addition at room temperature without UV.",
            markScheme: [
              "(a) Same general formula (1 mark); same functional group / similar chemical properties (1 mark); gradual change in physical properties / differ by CH₂ (1 mark)",
              "(b)(i) Alkane; no functional group / C–H single bonds (1 mark)",
              "(b)(ii) Alkene; C=C double bond (1 mark)",
              "(b)(iii) Alcohol; –OH / hydroxyl (1 mark)",
              "(b)(iv) Carboxylic acid; –COOH / carboxyl (1 mark)",
              "(c) X is an alkene (1 mark)",
              "(c) Decolourises bromine water: Br₂ undergoes addition reaction across C=C (1 mark)",
              "(c) No reaction under heat without UV: confirms no C=C-independent substitution; addition requires only the double bond, not UV (1 mark)",
            ],
            commonError: "For (b)(i), some students say the functional group of alkanes is 'C–H bond' — it is more precise to say alkanes have no functional group (they are the reference series). For (c), the key distinction is that addition reactions (alkenes) do not require UV; substitution reactions (alkanes) do.",
            guideRef: "Homologous Series and Alkanes",
            difficulty: "challenge",
            hints: [
              "Part (a): recall all FOUR defining features of a homologous series — hit them all for full marks.",
              "Part (b): use the general formulae as a test: CₙH₂ₙ₊₂=alkane, CₙH₂ₙ=alkene. Then identify the heteroatom groups.",
              "Part (c): what reaction requires UV light? Which reaction does not? This tells you which series X belongs to.",
            ],
            strategy: "Use general formulae as diagnostic tools: calculate 2n+2 and 2n for each compound and compare to the given formula.",
          },
        ],
      },
    ],
  },
};
