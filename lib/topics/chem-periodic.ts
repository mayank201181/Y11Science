import type { Topic } from "../types";

export const chemPeriodic: Topic = {
  id: "chem-periodic",
  title: "The Periodic Table",
  subject: "chemistry",
  icon: "📋",
  blurb: "Groups, periods, Group I alkali metals, Group VII halogens, noble gases, and transition elements.",
  intro: "The periodic table arranges all known elements in order of increasing proton number, revealing patterns so powerful that chemists can predict the properties of an element just from its position. In this topic you will explore why elements in the same group behave alike, how reactivity trends emerge from electron configuration, and what makes the transition metals so uniquely useful.",

  guide: [
    {
      heading: "Arrangement of the Periodic Table",
      body: `Elements are arranged in order of **increasing proton number** (atomic number). This arrangement, first proposed by Mendeleev using atomic mass, reveals repeating patterns — a **periodicity** — in physical and chemical properties.

**Periods** are the horizontal rows. The period number equals the number of **occupied electron shells**. Period 1 has 2 elements (H, He); Period 2 has 8; Period 3 has 8; and so on.

**Groups** are the vertical columns. Elements in the same group have the **same number of electrons in their outermost shell** (valence electrons). This is why they show similar chemical properties. Group I elements all have 1 outer electron; Group VII elements all have 7 outer electrons; Group 0/VIII elements have full outer shells.

A broad diagonal line separates **metals** (left and centre) from **non-metals** (right). Metals are good conductors, malleable, and form positive ions. Non-metals are generally poor conductors and form negative ions or covalent compounds.`,
      diagrams: [
        {
          caption: "Outline periodic table showing groups, periods, metals and non-metals",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Outline periodic table showing groups numbered 1 to 7 and 0, periods 1 to 4, with metals and non-metals regions marked">
  <!-- Background -->
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Title -->
  <text x="160" y="14" text-anchor="middle" font-size="9" font-weight="bold" fill="#eef0ff" font-family="sans-serif">Outline Periodic Table</text>
  <!-- Group labels -->
  <text x="22" y="27" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">I</text>
  <text x="38" y="27" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">II</text>
  <text x="138" y="27" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">III</text>
  <text x="154" y="27" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">IV</text>
  <text x="170" y="27" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">V</text>
  <text x="186" y="27" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">VI</text>
  <text x="202" y="27" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">VII</text>
  <text x="218" y="27" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">0</text>
  <!-- Period labels -->
  <text x="8" y="42" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">1</text>
  <text x="8" y="57" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">2</text>
  <text x="8" y="72" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">3</text>
  <text x="8" y="87" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">4</text>
  <!-- Axis labels -->
  <text x="160" y="196" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">Groups (vertical columns) -- same outer electrons</text>
  <text x="5" y="110" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif" transform="rotate(-90,5,110)">Periods</text>
  <!-- Period 1: H and He -->
  <rect x="14" y="31" width="13" height="11" rx="2" fill="#38bdf8" opacity="0.7"/>
  <text x="20" y="40" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">H</text>
  <rect x="211" y="31" width="13" height="11" rx="2" fill="#a78bfa" opacity="0.7"/>
  <text x="217" y="40" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">He</text>
  <!-- Period 2 Group I: Li -->
  <rect x="14" y="46" width="13" height="11" rx="2" fill="#38bdf8" opacity="0.7"/>
  <text x="20" y="55" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">Li</text>
  <!-- Period 2 Group II: Be -->
  <rect x="30" y="46" width="13" height="11" rx="2" fill="#38bdf8" opacity="0.7"/>
  <text x="36" y="55" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">Be</text>
  <!-- Period 2 Groups III-VII, 0 -->
  <rect x="130" y="46" width="13" height="11" rx="2" fill="#34d399" opacity="0.7"/>
  <text x="136" y="55" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">B</text>
  <rect x="146" y="46" width="13" height="11" rx="2" fill="#34d399" opacity="0.7"/>
  <text x="152" y="55" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">C</text>
  <rect x="162" y="46" width="13" height="11" rx="2" fill="#34d399" opacity="0.7"/>
  <text x="168" y="55" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">N</text>
  <rect x="178" y="46" width="13" height="11" rx="2" fill="#34d399" opacity="0.7"/>
  <text x="184" y="55" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">O</text>
  <rect x="194" y="46" width="13" height="11" rx="2" fill="#fbbf24" opacity="0.8"/>
  <text x="200" y="55" text-anchor="middle" font-size="6" fill="#0f172a" font-family="sans-serif">F</text>
  <rect x="210" y="46" width="13" height="11" rx="2" fill="#a78bfa" opacity="0.7"/>
  <text x="216" y="55" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">Ne</text>
  <!-- Period 3 -->
  <rect x="14" y="61" width="13" height="11" rx="2" fill="#38bdf8" opacity="0.7"/>
  <text x="20" y="70" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">Na</text>
  <rect x="30" y="61" width="13" height="11" rx="2" fill="#38bdf8" opacity="0.7"/>
  <text x="36" y="70" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">Mg</text>
  <rect x="130" y="61" width="13" height="11" rx="2" fill="#34d399" opacity="0.7"/>
  <text x="136" y="70" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">Al</text>
  <rect x="146" y="61" width="13" height="11" rx="2" fill="#34d399" opacity="0.7"/>
  <text x="152" y="70" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">Si</text>
  <rect x="162" y="61" width="13" height="11" rx="2" fill="#34d399" opacity="0.7"/>
  <text x="168" y="70" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">P</text>
  <rect x="178" y="61" width="13" height="11" rx="2" fill="#34d399" opacity="0.7"/>
  <text x="184" y="70" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">S</text>
  <rect x="194" y="61" width="13" height="11" rx="2" fill="#fbbf24" opacity="0.8"/>
  <text x="200" y="70" text-anchor="middle" font-size="6" fill="#0f172a" font-family="sans-serif">Cl</text>
  <rect x="210" y="61" width="13" height="11" rx="2" fill="#a78bfa" opacity="0.7"/>
  <text x="216" y="70" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">Ar</text>
  <!-- Period 4 Group I,II -->
  <rect x="14" y="76" width="13" height="11" rx="2" fill="#38bdf8" opacity="0.7"/>
  <text x="20" y="85" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">K</text>
  <rect x="30" y="76" width="13" height="11" rx="2" fill="#38bdf8" opacity="0.7"/>
  <text x="36" y="85" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">Ca</text>
  <!-- Transition metals block period 4 -->
  <rect x="46" y="76" width="79" height="11" rx="2" fill="#fb7185" opacity="0.7"/>
  <text x="85" y="85" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">Transition metals (Sc - Zn)</text>
  <!-- Period 4 Groups III-0 -->
  <rect x="130" y="76" width="13" height="11" rx="2" fill="#34d399" opacity="0.7"/>
  <text x="136" y="85" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">Ga</text>
  <rect x="146" y="76" width="13" height="11" rx="2" fill="#34d399" opacity="0.7"/>
  <text x="152" y="85" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">Ge</text>
  <rect x="162" y="76" width="13" height="11" rx="2" fill="#34d399" opacity="0.7"/>
  <text x="168" y="85" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">As</text>
  <rect x="178" y="76" width="13" height="11" rx="2" fill="#34d399" opacity="0.7"/>
  <text x="184" y="85" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">Se</text>
  <rect x="194" y="76" width="13" height="11" rx="2" fill="#fbbf24" opacity="0.8"/>
  <text x="200" y="85" text-anchor="middle" font-size="6" fill="#0f172a" font-family="sans-serif">Br</text>
  <rect x="210" y="76" width="13" height="11" rx="2" fill="#a78bfa" opacity="0.7"/>
  <text x="216" y="85" text-anchor="middle" font-size="6" fill="#eef0ff" font-family="sans-serif">Kr</text>
  <!-- Legend -->
  <rect x="14" y="100" width="10" height="8" rx="1" fill="#38bdf8" opacity="0.7"/>
  <text x="28" y="107" font-size="6" fill="#b7bce0" font-family="sans-serif">Metals (Gps I-II)</text>
  <rect x="90" y="100" width="10" height="8" rx="1" fill="#fb7185" opacity="0.7"/>
  <text x="104" y="107" font-size="6" fill="#b7bce0" font-family="sans-serif">Transition metals</text>
  <rect x="14" y="112" width="10" height="8" rx="1" fill="#34d399" opacity="0.7"/>
  <text x="28" y="119" font-size="6" fill="#b7bce0" font-family="sans-serif">Non-metals</text>
  <rect x="90" y="112" width="10" height="8" rx="1" fill="#fbbf24" opacity="0.8"/>
  <text x="104" y="119" font-size="6" fill="#b7bce0" font-family="sans-serif">Group VII halogens</text>
  <rect x="14" y="124" width="10" height="8" rx="1" fill="#a78bfa" opacity="0.7"/>
  <text x="28" y="131" font-size="6" fill="#b7bce0" font-family="sans-serif">Group 0 noble gases</text>
  <!-- Proton number arrow -->
  <line x1="14" y1="140" x2="225" y2="140" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arr)"/>
  <defs><marker id="arr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><polygon points="0 0, 5 2.5, 0 5" fill="#38bdf8"/></marker></defs>
  <text x="120" y="150" text-anchor="middle" font-size="7" fill="#38bdf8" font-family="sans-serif">Increasing proton number (atomic number)</text>
</svg>`
        }
      ],
      keyPoints: [
        "Elements are ordered by increasing proton number, not atomic mass.",
        "Period number = number of occupied electron shells.",
        "Group number (I–VII) = number of outer (valence) electrons.",
        "Metals occupy the left and centre; non-metals occupy the top right.",
        "Elements in the same group have similar properties because they have the same number of outer electrons."
      ],
      discovery: {
        problem: "Sodium (Na) is in Period 3, Group I. Without looking anything up, predict: how many electron shells does Na have, and how many electrons are in its outer shell? Then predict whether Na is a metal or non-metal.",
        idea: "Period 3 tells you there are 3 occupied shells. Group I tells you there is 1 outer electron. One outer electron means Na easily loses it to form Na⁺ — a classic metal behaviour. Na is indeed a highly reactive metal."
      },
      whyItWorks: "The periodic law works because chemical behaviour is governed by electron configuration. Elements with the same number of outer electrons react in chemically analogous ways — they form ions of the same charge and make compounds with the same stoichiometry.",
      strategies: ["Read the group number for outer electrons", "Read the period number for number of shells"]
    },

    {
      heading: "Group I — The Alkali Metals",
      body: `Group I contains **lithium (Li)**, **sodium (Na)**, and **potassium (K)**, along with Rb, Cs, and Fr. They are soft, low-density metals with low melting points that **decrease** down the group.

**Reactions with water** produce a metal hydroxide and hydrogen gas:

2 Na(s) + 2 H₂O(l) → 2 NaOH(aq) + H₂(g)

All Group I metals react similarly; the general equation is:

2 M(s) + 2 H₂O(l) → 2 MOH(aq) + H₂(g)

The solution formed is alkaline (pH > 7) because MOH is a strong alkali.

**Reactivity increases down the group**: Li reacts steadily; Na reacts vigorously (fizzes, moves on surface); K reacts very vigorously, igniting the hydrogen with a lilac flame.

**Physical observations**: Li — slow fizzing, stays solid; Na — faster fizzing, melts to a ball; K — very fast, purple/lilac flame, may explode.

**Other physical properties**: Group I metals are so soft they can be cut with a knife, revealing a shiny surface that quickly tarnishes in air. They have **low densities** — Li, Na and K are all less dense than water, which is why they float during the reaction.

**Reaction with oxygen and storage**: Because they are so reactive, Group I metals also react readily with oxygen in the air, forming a layer of metal oxide (for example 4 Na + O₂ → 2 Na₂O). To stop them reacting with oxygen and water vapour in the air, alkali metals are **stored under oil**. They also react vigorously with chlorine to form ionic chlorides (for example 2 Na + Cl₂ → 2 NaCl).`,
      diagrams: [
        {
          caption: "Reactivity trend down Group I: outer electron becomes easier to lose",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing Group I elements Li Na K with increasing atomic radius and decreasing ionisation energy down the group, and a reactivity arrow pointing downward">
  <rect width="320" height="200" fill="#0f172a"/>
  <text x="160" y="14" text-anchor="middle" font-size="9" font-weight="bold" fill="#eef0ff" font-family="sans-serif">Group I — Reactivity Trend</text>
  <!-- Li atom -->
  <circle cx="60" cy="75" r="18" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <circle cx="60" cy="57" r="5" fill="#38bdf8" opacity="0.85"/>
  <text x="60" y="60" text-anchor="middle" font-size="5" fill="#0f172a" font-family="sans-serif">e-</text>
  <circle cx="60" cy="75" r="4" fill="#fb7185" opacity="0.9"/>
  <text x="60" y="78" text-anchor="middle" font-size="5" fill="#eef0ff" font-family="sans-serif">3p</text>
  <text x="60" y="102" text-anchor="middle" font-size="8" font-weight="bold" fill="#38bdf8" font-family="sans-serif">Li</text>
  <text x="60" y="112" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">2 shells</text>
  <text x="60" y="122" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">Reacts steadily</text>
  <!-- Na atom -->
  <circle cx="160" cy="80" r="24" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <circle cx="160" cy="56" r="5" fill="#38bdf8" opacity="0.85"/>
  <text x="160" y="59" text-anchor="middle" font-size="5" fill="#0f172a" font-family="sans-serif">e-</text>
  <circle cx="160" cy="80" r="4" fill="#fb7185" opacity="0.9"/>
  <text x="160" y="83" text-anchor="middle" font-size="5" fill="#eef0ff" font-family="sans-serif">11p</text>
  <text x="160" y="108" text-anchor="middle" font-size="8" font-weight="bold" fill="#38bdf8" font-family="sans-serif">Na</text>
  <text x="160" y="118" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">3 shells</text>
  <text x="160" y="128" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">Reacts vigorously</text>
  <!-- K atom -->
  <circle cx="268" cy="85" r="30" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <circle cx="268" cy="55" r="5" fill="#38bdf8" opacity="0.85"/>
  <text x="268" y="58" text-anchor="middle" font-size="5" fill="#0f172a" font-family="sans-serif">e-</text>
  <circle cx="268" cy="85" r="4" fill="#fb7185" opacity="0.9"/>
  <text x="268" y="88" text-anchor="middle" font-size="5" fill="#eef0ff" font-family="sans-serif">19p</text>
  <text x="268" y="120" text-anchor="middle" font-size="8" font-weight="bold" fill="#38bdf8" font-family="sans-serif">K</text>
  <text x="268" y="130" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">4 shells</text>
  <text x="268" y="140" text-anchor="middle" font-size="7" fill="#fbbf24" font-family="sans-serif">Lilac flame!</text>
  <!-- Reactivity arrow -->
  <line x1="14" y1="160" x2="306" y2="160" stroke="#fbbf24" stroke-width="2" marker-end="url(#yarr)"/>
  <defs><marker id="yarr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#fbbf24"/></marker></defs>
  <text x="160" y="172" text-anchor="middle" font-size="7" fill="#fbbf24" font-family="sans-serif">Reactivity increases (outer electron lost more easily)</text>
  <text x="160" y="183" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">Atomic radius increases -- outer electron is further from nucleus</text>
</svg>`
        }
      ],
      keyPoints: [
        "Group I metals (Li, Na, K) all have 1 outer electron and react similarly.",
        "All react with water to form a metal hydroxide and hydrogen gas.",
        "Reactivity increases down the group: K > Na > Li.",
        "The outer electron is further from the nucleus down the group (more shells), so it is shielded more and lost more easily.",
        "The hydroxide solution formed is strongly alkaline.",
        "Group I metals are soft (cut with a knife) and have low densities (Li, Na, K float on water).",
        "They are stored under oil because they react readily with oxygen and water vapour in the air."
      ],
      discovery: {
        problem: "Caesium (Cs) is below potassium in Group I. Predict what happens when a small piece of Cs is placed in water, and explain your prediction using electron configuration.",
        idea: "Cs has 6 electron shells, so its single outer electron is very far from the nucleus and heavily shielded. It is lost extremely easily, making Cs react explosively with water — far more violently than K. The product is CsOH(aq) and H₂(g)."
      },
      whyItWorks: "As you go down Group I, each successive element has one more electron shell. The outer electron is therefore further from the nucleus and experiences more electron shielding from inner shells. The electrostatic attraction between the nucleus and the outer electron decreases, so the electron is removed more easily — meaning the element reacts more vigorously.",
      thinkDeeper: "Group I melting points decrease down the group (Li 181 °C, Na 98 °C, K 63 °C). This is because the metallic bond weakens as the ions get larger and the electron density falls. Can you see how this is the opposite of the reactivity trend explanation — both arise from the same cause (increasing atomic radius) but affect different properties differently?",
      strategies: ["Explain trends using electron configuration", "Write ionic half-equations to show electron loss"]
    },

    {
      heading: "Group VII — The Halogens",
      body: `Group VII contains **chlorine (Cl)**, **bromine (Br)**, and **iodine (I)** — and fluorine (F) above them. All halogens have **7 outer electrons** and form −1 ions (halide ions) by gaining one electron.

**Physical states and colours at room temperature:**
- Chlorine (Cl₂): pale yellow-green gas
- Bromine (Br₂): red-brown liquid (gives off orange-brown vapour)
- Iodine (I₂): shiny grey-black solid (gives off purple vapour)

**Reactivity decreases down the group**: Cl₂ > Br₂ > I₂. Fluorine (F₂) is the most reactive of all.

**Displacement reactions**: A more reactive halogen displaces a less reactive halogen from a solution of its salt. For example:

Cl₂(aq) + 2 KBr(aq) → 2 KCl(aq) + Br₂(aq)

The orange-brown colour of bromine appearing confirms the displacement. Ionic equation:

Cl₂(aq) + 2 Br⁻(aq) → 2 Cl⁻(aq) + Br₂(aq)

This is a **redox** reaction: Cl₂ is reduced (gains electrons); Br⁻ is oxidised (loses electrons). Bromine does NOT displace chloride (Cl⁻), because Br₂ is less reactive than Cl₂.

**Hydrogen halides**: Halogens react with hydrogen to form **hydrogen halides** — covalent gases such as hydrogen chloride (HCl):

H₂(g) + Cl₂(g) → 2 HCl(g)

The more reactive the halogen, the more readily it reacts with hydrogen: chlorine reacts quickly (explosively in sunlight), whereas iodine reacts only slowly and reversibly. When a hydrogen halide dissolves in water it **ionises** to release H⁺ ions, so the solution is **acidic** — for example HCl gas dissolves to form hydrochloric acid (HCl → H⁺ + Cl⁻). (In a non-aqueous solvent such as methylbenzene, hydrogen chloride does not ionise and the solution is not acidic, showing that water is needed for the H⁺ ions to form.)`,
      diagrams: [
        {
          caption: "Halogen displacement reactions: colour changes in test tubes",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three test tubes showing halogen displacement reactions: chlorine water added to KBr gives orange-brown bromine, chlorine water added to KI gives brown iodine, bromine water added to KI gives brown iodine, with no reaction for less reactive halogens displacing more reactive">
  <rect width="320" height="200" fill="#0f172a"/>
  <text x="160" y="14" text-anchor="middle" font-size="9" font-weight="bold" fill="#eef0ff" font-family="sans-serif">Halogen Displacement — Colour Changes</text>
  <!-- Test tube 1: Cl2 + KBr -->
  <rect x="20" y="30" width="60" height="100" rx="5" fill="none" stroke="#b7bce0" stroke-width="1.5"/>
  <rect x="21" y="31" width="58" height="98" rx="4" fill="#fb7185" opacity="0.55"/>
  <text x="50" y="80" text-anchor="middle" font-size="7" fill="#eef0ff" font-family="sans-serif">Cl2(aq)</text>
  <text x="50" y="90" text-anchor="middle" font-size="7" fill="#eef0ff" font-family="sans-serif">+ KBr(aq)</text>
  <text x="50" y="142" text-anchor="middle" font-size="7" fill="#fbbf24" font-family="sans-serif">Orange-brown</text>
  <text x="50" y="152" text-anchor="middle" font-size="7" fill="#fbbf24" font-family="sans-serif">Br2 formed</text>
  <text x="50" y="162" text-anchor="middle" font-size="7" fill="#34d399" font-family="sans-serif">Displacement!</text>
  <!-- Test tube 2: Cl2 + KI -->
  <rect x="130" y="30" width="60" height="100" rx="5" fill="none" stroke="#b7bce0" stroke-width="1.5"/>
  <rect x="131" y="31" width="58" height="98" rx="4" fill="#92400e" opacity="0.7"/>
  <text x="160" y="80" text-anchor="middle" font-size="7" fill="#eef0ff" font-family="sans-serif">Cl2(aq)</text>
  <text x="160" y="90" text-anchor="middle" font-size="7" fill="#eef0ff" font-family="sans-serif">+ KI(aq)</text>
  <text x="160" y="142" text-anchor="middle" font-size="7" fill="#fbbf24" font-family="sans-serif">Dark brown</text>
  <text x="160" y="152" text-anchor="middle" font-size="7" fill="#fbbf24" font-family="sans-serif">I2 formed</text>
  <text x="160" y="162" text-anchor="middle" font-size="7" fill="#34d399" font-family="sans-serif">Displacement!</text>
  <!-- Test tube 3: Br2 + KCl — no reaction -->
  <rect x="240" y="30" width="60" height="100" rx="5" fill="none" stroke="#b7bce0" stroke-width="1.5"/>
  <rect x="241" y="31" width="58" height="98" rx="4" fill="#fb7185" opacity="0.3"/>
  <text x="270" y="80" text-anchor="middle" font-size="7" fill="#eef0ff" font-family="sans-serif">Br2(aq)</text>
  <text x="270" y="90" text-anchor="middle" font-size="7" fill="#eef0ff" font-family="sans-serif">+ KCl(aq)</text>
  <text x="270" y="142" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">Stays orange</text>
  <text x="270" y="152" text-anchor="middle" font-size="7" fill="#b7bce0" font-family="sans-serif">No reaction</text>
  <text x="270" y="162" text-anchor="middle" font-size="7" fill="#fb7185" font-family="sans-serif">Br2 less reactive</text>
  <!-- Reactivity arrow -->
  <line x1="14" y1="185" x2="120" y2="185" stroke="#34d399" stroke-width="1.5" marker-end="url(#garr)"/>
  <defs><marker id="garr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#34d399"/></marker></defs>
  <text x="65" y="196" text-anchor="middle" font-size="6" fill="#34d399" font-family="sans-serif">Cl more reactive than Br</text>
</svg>`
        }
      ],
      keyPoints: [
        "Halogens all have 7 outer electrons and gain 1 electron to form −1 halide ions.",
        "At room temperature: Cl₂ is a gas, Br₂ is a liquid, I₂ is a solid.",
        "Reactivity decreases down Group VII (Cl > Br > I > …).",
        "A more reactive halogen displaces a less reactive one from its salt solution.",
        "Reactivity decreases because the incoming electron is added to a shell further from the nucleus (more shielding), making electron gain harder.",
        "Halogens react with hydrogen to form hydrogen halides (e.g. H₂ + Cl₂ → 2HCl), which dissolve in water to give acidic solutions.",
        "The more reactive the halogen, the more readily it combines with hydrogen (Cl₂ fast/explosive, I₂ slow and reversible)."
      ],
      discovery: {
        problem: "You have three unlabelled test tubes of potassium halide solutions (KCl, KBr, KI) and a bottle of bromine water. Describe how you could use bromine water to identify which tubes contain KBr and KI, and explain the reasoning.",
        idea: "Add bromine water to each tube. KI turns dark brown/black (I₂ is displaced since Br₂ is more reactive than I₂). KBr shows no colour change (Br₂ cannot displace Cl⁻ either). KCl shows no colour change. So the tube that turns dark brown is KI; the others can be distinguished by adding chlorine water — KBr turns orange-brown."
      },
      whyItWorks: "Down Group VII, each element has one more electron shell. The shell into which an incoming electron would be added is further from the nucleus and is more shielded by inner electrons. The electrostatic pull on the incoming electron decreases, so the tendency to gain an electron (and therefore reactivity) decreases.",
      strategies: ["Check reactivity order before predicting displacement", "Identify colour change as evidence of reaction"]
    },

    {
      heading: "Group 0 — The Noble Gases",
      body: `Group 0 (sometimes called Group VIII or Group 18) contains **helium (He)**, **neon (Ne)**, and **argon (Ar)**, along with Kr, Xe, and Rn.

Noble gases have **full outer electron shells** (He: 2 electrons in shell 1; Ne, Ar etc.: 8 electrons in their outer shell). A full outer shell is the most stable electron configuration.

Because they already have a full outer shell, noble gases have **no tendency to gain or lose electrons** — they do not form ions and do not form bonds with other atoms under normal conditions. They are **chemically inert (unreactive)**.

**Uses of noble gases:**
- **Helium**: filling balloons and airships (low density, non-flammable); cooling superconducting magnets; breathing mixtures for deep-sea divers.
- **Neon**: electric discharge tubes (neon signs) — the gas glows red-orange when electricity is passed through.
- **Argon**: filling light bulbs to prevent filament oxidation; welding shield gas; filling double-glazed windows.

All uses exploit their **unreactivity**. Helium's uses also exploit its very low density.`,
      keyPoints: [
        "Noble gases have full outer electron shells and are therefore unreactive/inert.",
        "They exist as monatomic gases under all normal conditions.",
        "Helium is used in balloons, airships, and cooling; neon in discharge tubes; argon in light bulbs and welding.",
        "All noble gas uses are based on their chemical inertness (and sometimes low density for He).",
        "Boiling points increase down the group as intermolecular forces (London dispersion forces) increase with more electrons."
      ],
      thinkDeeper: "Xenon (Xe) can form compounds such as XeF₂ and XeF₄ under extreme conditions. Why does this not contradict the general rule that noble gases are inert? (Hint: consider what 'inert' means at ordinary temperatures and pressures, and what conditions are needed to force Xe to react.)"
    },

    {
      heading: "Transition Elements",
      body: `The **transition elements** (also called transition metals) occupy the central block of the periodic table, between Groups II and III in periods 4 onwards. Common examples include **iron (Fe)**, **copper (Cu)**, **zinc (Zn)**, **chromium (Cr)**, **manganese (Mn)**, **nickel (Ni)**, and **cobalt (Co)**.

They have several characteristic properties that distinguish them from Groups I and II:

**1. High melting points and high density** — stronger metallic bonding than Groups I/II metals. Iron melts at 1538 °C; contrast with sodium (98 °C).

**2. Variable oxidation states (variable valency)** — transition metals can form ions with different charges. Examples: Fe²⁺ (iron(II)) and Fe³⁺ (iron(III)); Cu⁺ (copper(I)) and Cu²⁺ (copper(II)); Mn²⁺ through Mn⁷⁺. This is because electrons can be removed from more than one sub-shell.

**3. Coloured compounds** — solutions and solids are often distinctly coloured. Examples: Cu²⁺ solutions are blue; Fe²⁺ is pale green; Fe³⁺ is yellow-brown; Cr³⁺ is green; MnO₄⁻ (permanganate) is purple. The colour arises from the transition metal ion absorbing specific visible wavelengths.

**4. Catalytic activity** — many transition metals and their compounds act as catalysts:
- Iron: catalyst in the Haber process (N₂ + 3 H₂ ⇌ 2 NH₃)
- Nickel: catalyst in the hydrogenation of vegetable oils
- Vanadium(V) oxide (V₂O₅): catalyst in the Contact process (making H₂SO₄)
- Manganese(IV) oxide (MnO₂): catalyst for decomposition of hydrogen peroxide

Note: **zinc (Zn)** is sometimes debated as a transition metal because it only forms Zn²⁺ and its compounds are white/colourless, but it appears in the d-block. For IGCSE, treat it as part of the transition element block but note it lacks some typical properties.`,
      keyPoints: [
        "Transition metals have high melting points, high densities, and are hard and strong.",
        "They exhibit variable oxidation states (e.g. Fe²⁺ and Fe³⁺; Cu⁺ and Cu²⁺).",
        "Their compounds and ions are often coloured (Cu²⁺ blue, Fe³⁺ yellow-brown, MnO₄⁻ purple).",
        "Many transition metals and their oxides act as catalysts (Fe in Haber, V₂O₅ in Contact, Ni in hydrogenation).",
        "These properties contrast sharply with Group I and II metals, which are softer, have lower melting points, and form only one type of ion."
      ],
      strategies: ["List the four key transition metal properties as a checklist", "Name an example ion colour for each metal"]
    },

    {
      heading: "Trends Across a Period",
      body: `Across Period 3 (Na → Ar) properties change systematically as proton number increases and outer electrons are added to the same shell.

**Metallic to non-metallic character**: Na and Mg are metals; Al is a semi-metal/metalloid (amphoteric oxide); Si is a semiconductor; P, S, Cl are non-metals; Ar is a noble gas.

**Melting point**: rises from Na → Al (stronger metallic bonding as more delocalised electrons and smaller ions), peaks at Si (giant covalent structure, very high), then drops sharply at P₄, S₈, Cl₂, Ar (simple molecular — only weak van der Waals forces between molecules).

**Electrical conductivity**: Na, Mg, Al conduct (metals, delocalised electrons); Si is a semiconductor; P, S, Cl, Ar do not conduct (no free electrons or ions).

**Oxide character**: Na₂O and MgO are basic (react with acids); Al₂O₃ is amphoteric (reacts with both acids and bases); SiO₂ is weakly acidic; P₄O₁₀, SO₃, Cl₂O₇ are acidic (dissolve in water to form acids such as H₃PO₄, H₂SO₄, HClO₄).

**Oxidation state of oxides**: generally increases across the period (+1 for Na, +2 for Mg, +3 for Al … +7 for Cl in Cl₂O₇).`,
      keyPoints: [
        "Metallic character decreases and non-metallic character increases across a period.",
        "Melting point peaks at the giant covalent element (Si in Period 3) and drops steeply for simple molecular non-metals.",
        "Oxide character changes from basic (left) → amphoteric (Al) → acidic (right).",
        "Across a period the number of outer electrons increases while the number of shells stays the same, causing atomic radius to decrease.",
        "These trends repeat in every period — hence the term 'periodicity'."
      ]
    }
  ],

  learn: {
    keyFacts: [
      "Elements are arranged in order of increasing proton number in the periodic table.",
      "Period number = number of occupied electron shells; Group number (I–VII) = number of outer electrons.",
      "Group I alkali metals react with water to form metal hydroxide + hydrogen; reactivity increases down the group.",
      "Group VII halogens: Cl₂ (gas), Br₂ (liquid), I₂ (solid); reactivity decreases down the group.",
      "A more reactive halogen displaces a less reactive halogen from a solution of its salt.",
      "Halogens react with hydrogen to form hydrogen halides (e.g. HCl), which dissolve in water to form acidic solutions.",
      "Group I metals are soft, low-density, and stored under oil because they react with oxygen and water vapour in air.",
      "Group 0 noble gases have full outer shells, are monatomic, and are chemically inert.",
      "Transition elements have high melting points, variable oxidation states, coloured compounds, and catalytic activity.",
      "Reactivity of Group I increases down the group because the outer electron is further from the nucleus and more shielded.",
      "Reactivity of Group VII decreases down the group because the incoming electron is added to a shell further from the nucleus.",
      "Iron is the catalyst in the Haber process; V₂O₅ in the Contact process; Ni in hydrogenation."
    ],
    flashcards: [
      { front: "What is the basis for ordering elements in the periodic table?", back: "Increasing proton number (atomic number)." },
      { front: "What does the period number tell you?", back: "The number of occupied electron shells in an atom of that element." },
      { front: "What does the group number tell you (Groups I–VII)?", back: "The number of electrons in the outermost shell (valence electrons)." },
      { front: "Write the word equation for sodium reacting with water.", back: "Sodium + water → sodium hydroxide + hydrogen" },
      { front: "Why does reactivity increase down Group I?", back: "More electron shells → outer electron further from nucleus and more shielded → lost more easily → more reactive." },
      { front: "State the colours/states of Cl₂, Br₂, and I₂ at room temperature.", back: "Cl₂: pale yellow-green gas; Br₂: red-brown liquid; I₂: grey-black solid." },
      { front: "Why does reactivity decrease down Group VII?", back: "More shells → incoming electron added further from nucleus, more shielded → less easily gained → less reactive." },
      { front: "What is a halogen displacement reaction?", back: "A more reactive halogen displaces a less reactive halogen from a solution of its salt. E.g. Cl₂ + 2KBr → 2KCl + Br₂." },
      { front: "What forms when a halogen reacts with hydrogen, and what is seen when it dissolves in water?", back: "A hydrogen halide forms (e.g. H₂ + Cl₂ → 2HCl). Dissolved in water it ionises to release H⁺ ions, giving an acidic solution (e.g. hydrochloric acid)." },
      { front: "Why are Group I metals stored under oil?", back: "They are very reactive and would otherwise react with oxygen and water vapour in the air; oil keeps air and moisture away from the metal." },
      { front: "Why are noble gases unreactive?", back: "They have full outer electron shells and therefore no tendency to gain, lose, or share electrons." },
      { front: "Give three uses of noble gases and state which gas is used for each.", back: "He: balloons, airships, cooling magnets; Ne: electric discharge tubes (neon signs); Ar: filling light bulbs, welding." },
      { front: "List four characteristic properties of transition elements.", back: "1. High melting points and high density. 2. Variable oxidation states. 3. Coloured compounds. 4. Catalytic activity." },
      { front: "Which transition metal catalyst is used in the Haber process?", back: "Iron (Fe)." }
    ],
    keyTerms: [
      { term: "Proton number (atomic number)", definition: "The number of protons in the nucleus of an atom; this is the basis of ordering in the periodic table." },
      { term: "Period", definition: "A horizontal row in the periodic table; all elements in the same period have the same number of occupied electron shells." },
      { term: "Group", definition: "A vertical column in the periodic table; elements in the same group have the same number of outer electrons and similar chemical properties." },
      { term: "Alkali metals", definition: "Group I metals (Li, Na, K etc.) that react with water to form strongly alkaline hydroxide solutions and hydrogen gas." },
      { term: "Halogen", definition: "A Group VII non-metal element (F, Cl, Br, I, At) with 7 outer electrons; they gain one electron to form halide ions (X⁻)." },
      { term: "Displacement reaction (halogens)", definition: "A reaction in which a more reactive halogen displaces a less reactive halide ion from its salt solution." },
      { term: "Hydrogen halide", definition: "A covalent compound of hydrogen and a halogen (e.g. HCl, HBr, HI) formed when a halogen reacts with hydrogen; it dissolves in water to give an acidic solution." },
      { term: "Noble gas", definition: "A Group 0/18 element (He, Ne, Ar, Kr, Xe, Rn) with a full outer shell; chemically inert under ordinary conditions." },
      { term: "Transition element", definition: "An element in the d-block of the periodic table (e.g. Fe, Cu, Cr, Mn) that typically shows variable oxidation states, coloured compounds, and catalytic activity." },
      { term: "Variable oxidation state", definition: "The ability of an element (especially transition metals) to form ions with more than one charge, e.g. Fe²⁺ and Fe³⁺." },
      { term: "Electron shielding", definition: "The reduction in the effective nuclear attraction on outer electrons caused by inner electron shells." },
      { term: "Periodicity", definition: "The repeating pattern of physical and chemical properties observed across each period of the periodic table." },
      { term: "Amphoteric", definition: "Able to react with both acids and bases; aluminium oxide (Al₂O₃) is the key IGCSE example." }
    ]
  },

  quiz: {
    mcq: [
      {
        id: "chem-periodic-mcq-q01",
        question: "Elements in the same group of the periodic table have similar chemical properties because they have the same:",
        options: [
          "Number of neutrons",
          "Number of electron shells",
          "Number of outer electrons",
          "Atomic mass"
        ],
        answerIndex: 2,
        explanation: "Chemical properties depend on the number of outer (valence) electrons. Group number directly gives this. The number of shells is the same within a period, not a group.",
        guideRef: "Arrangement of the Periodic Table",
        difficulty: "warmup"
      },
      {
        id: "chem-periodic-mcq-q02",
        question: "When potassium reacts with water, the products are:",
        options: [
          "Potassium oxide and water",
          "Potassium hydroxide and oxygen",
          "Potassium hydroxide and hydrogen",
          "Potassium chloride and hydrogen"
        ],
        answerIndex: 2,
        explanation: "All Group I metals react with water to form the metal hydroxide (here KOH) and hydrogen gas (H₂). No chlorine is present, so KCl cannot form.",
        guideRef: "Group I — The Alkali Metals",
        difficulty: "warmup"
      },
      {
        id: "chem-periodic-mcq-q03",
        question: "Bromine water is added to a colourless solution of potassium iodide. Which observation would you expect?",
        options: [
          "No colour change — iodine is less reactive than bromine",
          "The solution turns pale yellow — chlorine is displaced",
          "The solution turns dark brown — iodine is displaced",
          "The solution turns blue-black — a starch indicator is formed"
        ],
        answerIndex: 2,
        explanation: "Bromine (Br₂) is more reactive than iodine, so it displaces iodide ions: Br₂ + 2I⁻ → 2Br⁻ + I₂. Iodine gives a dark brown/orange-brown colour in solution. Blue-black would require starch to be present.",
        guideRef: "Group VII — The Halogens",
        difficulty: "core",
        hints: [
          "First establish the reactivity order: Cl > Br > I.",
          "Ask: can Br₂ displace I⁻? Is Br₂ more reactive than I₂?",
          "If yes, iodine (I₂) is produced — what colour is I₂ in solution?"
        ]
      },
      {
        id: "chem-periodic-mcq-q04",
        question: "Which property is NOT a typical characteristic of transition elements?",
        options: [
          "High melting points",
          "Formation of coloured compounds",
          "Reactivity that increases rapidly down the group",
          "Variable oxidation states"
        ],
        answerIndex: 2,
        explanation: "Transition elements do not show a simple large increase in reactivity down the group in the way Group I does. The other three options — high melting points, coloured compounds, and variable oxidation states — are all characteristic transition element properties.",
        guideRef: "Transition Elements",
        difficulty: "core",
        hints: [
          "Think about what IS characteristic of transition metals.",
          "Which option sounds more like a Group I trend than a transition metal property?"
        ]
      },
      {
        id: "chem-periodic-mcq-q05",
        question: "Argon is used to fill light bulbs rather than air. The main reason is that argon:",
        options: [
          "Has a lower boiling point than nitrogen",
          "Is chemically unreactive and will not oxidise the filament",
          "Conducts electricity and improves brightness",
          "Is lighter than air, reducing the load on the bulb"
        ],
        answerIndex: 1,
        explanation: "Argon is a noble gas with a full outer shell, making it chemically inert. It prevents the hot tungsten filament from oxidising. Argon is actually denser than air (not lighter), and noble gases do not conduct electricity.",
        guideRef: "Group 0 — The Noble Gases",
        difficulty: "warmup"
      },
      {
        id: "chem-periodic-mcq-q06",
        question: "Chlorine water is added to separate solutions of KBr and KI. Which statement about the colours seen is correct?",
        options: [
          "KBr turns orange-brown; KI turns pale yellow-green",
          "KBr turns orange-brown; KI turns dark brown",
          "KBr stays colourless; KI turns orange-brown",
          "Both solutions turn pale yellow-green — chlorine does not react"
        ],
        answerIndex: 1,
        explanation: "Cl₂ displaces both Br⁻ and I⁻ because Cl is more reactive than both Br and I. Br₂ produced gives orange-brown colour; I₂ produced gives dark brown colour. The solutions do not remain colourless.",
        guideRef: "Group VII — The Halogens",
        difficulty: "challenge",
        hints: [
          "Cl₂ is more reactive than both Br₂ and I₂, so it displaces both halide ions.",
          "Recall the colour of Br₂ in solution (orange-brown) and I₂ in solution (dark brown).",
          "Which tube produces Br₂ and which produces I₂?"
        ],
        strategy: "Check reactivity order before predicting displacement"
      }
    ],
    qa: [
      {
        id: "chem-periodic-qa-q01",
        question: "Explain why the reactivity of Group I metals increases from lithium to potassium. Refer to electron configuration in your answer.",
        marks: 4,
        modelAnswer: "As you go from lithium to potassium, each element has one more electron shell. The outer electron is therefore found in a shell that is progressively further from the nucleus. The inner electron shells also provide more shielding, reducing the effective nuclear attraction experienced by the outer electron. As a result, the outer electron requires less energy to be removed (lower first ionisation energy), so the metal reacts more readily — reactivity increases from Li to K.",
        markScheme: [
          "More electron shells going down the group / outer electron further from the nucleus",
          "Greater electron shielding from inner shells",
          "Electrostatic attraction between nucleus and outer electron decreases / outer electron more easily lost",
          "Lower energy needed to remove the outer electron / lower ionisation energy → higher reactivity"
        ],
        commonError: "Students often say 'the nucleus attracts the electron less because the atom is bigger' without mentioning shielding — the examiner expects shielding to be named explicitly.",
        guideRef: "Group I — The Alkali Metals",
        difficulty: "core",
        hints: [
          "Start by stating what changes as you go down the group (number of shells).",
          "Consider how the position of the outer electron relative to the nucleus changes.",
          "Introduce the concept of electron shielding by inner shells.",
          "Conclude by linking to ease of losing the electron → reactivity."
        ],
        strategy: "Explain trends using electron configuration"
      },
      {
        id: "chem-periodic-qa-q02",
        question: "A student adds a few drops of bromine water to three test tubes containing aqueous solutions of KCl, KBr, and KI respectively. Predict the observation in each test tube and write the ionic equation for any displacement reaction that occurs.",
        marks: 5,
        modelAnswer: "KCl: No visible colour change. Bromine cannot displace chloride ions because Br₂ is less reactive than Cl₂, so no reaction occurs.\n\nKBr: No visible colour change. Bromine cannot displace bromide ions from a solution of its own salt — a halogen cannot displace itself.\n\nKI: The solution turns orange-brown or dark brown. Bromine displaces iodide because Br₂ is more reactive than I₂, producing iodine.\nIonic equation: Br₂(aq) + 2I⁻(aq) → 2Br⁻(aq) + I₂(aq)",
        markScheme: [
          "KCl: no colour change / no reaction (1 mark)",
          "KBr: no colour change / no reaction (1 mark)",
          "KI: orange-brown / dark brown colour appears (1 mark)",
          "Correct ionic equation: Br₂(aq) + 2I⁻(aq) → 2Br⁻(aq) + I₂(aq) (1 mark for species, 1 mark for balancing)"
        ],
        commonError: "A common mistake is predicting that bromine reacts with KBr (it cannot displace itself). Another is omitting state symbols from the ionic equation.",
        guideRef: "Group VII — The Halogens",
        difficulty: "core",
        hints: [
          "Write out the reactivity order of halogens first: Cl > Br > I.",
          "A halogen only displaces a LESS reactive halide — check each case.",
          "For the ionic equation, the spectator ions (K⁺) cancel out — write only the reacting species.",
          "Balance by making sure electrons are conserved: Br₂ + 2e⁻ → 2Br⁻; 2I⁻ → I₂ + 2e⁻."
        ],
        strategy: "Check reactivity order before predicting displacement"
      },
      {
        id: "chem-periodic-qa-q03",
        question: "Describe four characteristic properties of transition elements. For each property, give a named example.",
        marks: 8,
        modelAnswer: "1. High melting points: Transition metals have much higher melting points than Group I/II metals. Example: iron melts at 1538 °C, far higher than sodium (98 °C).\n\n2. Variable oxidation states: Transition metals can form ions with more than one charge. Example: iron forms Fe²⁺ (iron(II)) in iron(II) sulfate and Fe³⁺ (iron(III)) in iron(III) chloride.\n\n3. Coloured compounds: The ions and compounds of transition metals are often coloured. Example: copper(II) sulfate solution is blue (Cu²⁺ ions); potassium manganate(VII) solution is purple (MnO₄⁻ ions).\n\n4. Catalytic activity: Many transition metals and their compounds act as catalysts. Example: iron is the catalyst in the Haber process (manufacture of ammonia); vanadium(V) oxide (V₂O₅) is the catalyst in the Contact process (manufacture of sulfuric acid).",
        markScheme: [
          "High melting points / high density — with a named example (e.g. iron 1538 °C) (2 marks)",
          "Variable oxidation states — with a named example (e.g. Fe²⁺ and Fe³⁺ / Cu⁺ and Cu²⁺) (2 marks)",
          "Coloured compounds/ions — with a named example (e.g. Cu²⁺ blue / Fe³⁺ yellow-brown / MnO₄⁻ purple) (2 marks)",
          "Catalytic activity — with a named example (e.g. Fe in Haber / V₂O₅ in Contact / Ni in hydrogenation) (2 marks)"
        ],
        commonError: "Students often forget to include a specific named example for each property, losing the 'with example' mark in each pair.",
        guideRef: "Transition Elements",
        difficulty: "core",
        hints: [
          "Plan four bullet points before you write — one for each property.",
          "For each property, immediately write a named element and specific compound or example.",
          "For catalysis, name both the catalyst and the process it is used in.",
          "For colour, name both the ion and its colour."
        ]
      }
    ]
  },

  questionBank: {
    mcqPapers: [
      {
        id: "chem-periodic-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Arrangement, groups and periods, Group I and Group VII basics.",
        questions: [
          {
            id: "chem-periodic-bm1-01",
            question: "In a modern periodic table, the elements are arranged in order of increasing:",
            options: [
              "Relative atomic mass",
              "Proton number",
              "Number of neutrons",
              "Density"
            ],
            answerIndex: 1,
            explanation: "Elements are arranged in order of increasing proton number (atomic number). Mendeleev originally used atomic mass, but the modern table uses proton number, which removes the few anomalies that mass ordering produced.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm1-02",
            question: "An atom of an element has the electron configuration 2,8,7. In which group and period is the element found?",
            options: [
              "Group VII, Period 2",
              "Group V, Period 3",
              "Group VII, Period 3",
              "Group II, Period 7"
            ],
            answerIndex: 2,
            explanation: "There are 3 occupied shells (2,8,7), so it is in Period 3. There are 7 electrons in the outer shell, so it is in Group VII. The element is chlorine.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm1-03",
            question: "Which statement about a period in the periodic table is correct?",
            options: [
              "All elements in a period have the same number of outer electrons",
              "All elements in a period have the same number of occupied electron shells",
              "All elements in a period have the same proton number",
              "All elements in a period have identical chemical properties"
            ],
            answerIndex: 1,
            explanation: "A period is a horizontal row; all its elements have the same number of occupied electron shells (period number = number of shells). Having the same number of OUTER electrons is true of a group, not a period.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm1-04",
            question: "Sodium reacts with water. Which set of observations is correct?",
            options: [
              "Sinks, no reaction, solution stays neutral",
              "Floats, melts into a ball, moves on the surface, solution becomes alkaline",
              "Floats, burns with a lilac flame, solution becomes acidic",
              "Sinks, fizzes slowly, solution becomes acidic"
            ],
            answerIndex: 1,
            explanation: "Sodium is less dense than water (floats), the heat of reaction melts it into a ball that moves around fizzing, and the NaOH formed makes the solution alkaline. A lilac flame is characteristic of potassium, not sodium, and the solution is never acidic.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm1-05",
            question: "Which balanced equation correctly represents lithium reacting with water?",
            options: [
              "Li + H₂O → LiOH + H₂",
              "2Li + 2H₂O → 2LiOH + H₂",
              "2Li + H₂O → Li₂O + H₂",
              "Li + 2H₂O → Li(OH)₂ + H₂"
            ],
            answerIndex: 1,
            explanation: "2Li + 2H₂O → 2LiOH + H₂ is balanced: 2 Li, 4 H and 2 O on each side. Option A is unbalanced for hydrogen; C gives the wrong product (the metal oxide, not hydroxide); D wrongly gives Li a 2+ charge.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "Group I metals + water give a metal hydroxide + hydrogen.",
              "Lithium forms Li⁺, so the hydroxide is LiOH, not Li(OH)₂.",
              "Balance H last: hydrogen gas is H₂, so an even number of H atoms is needed."
            ]
          },
          {
            id: "chem-periodic-bm1-06",
            question: "At room temperature, which set of physical states for the halogens is correct?",
            options: [
              "Cl₂ liquid, Br₂ gas, I₂ solid",
              "Cl₂ gas, Br₂ liquid, I₂ solid",
              "Cl₂ solid, Br₂ liquid, I₂ gas",
              "Cl₂ gas, Br₂ solid, I₂ liquid"
            ],
            answerIndex: 1,
            explanation: "At room temperature chlorine is a pale yellow-green gas, bromine is a red-brown liquid, and iodine is a grey-black solid. The state goes gas → liquid → solid down the group as melting and boiling points rise.",
            guideRef: "Group VII — The Halogens",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm1-07",
            question: "Chlorine water is added to potassium iodide solution. What is observed and why?",
            options: [
              "No change, because chlorine is less reactive than iodine",
              "The solution turns dark brown, because chlorine displaces iodine",
              "The solution turns pale green, because iodine displaces chlorine",
              "A white precipitate forms, because KCl is insoluble"
            ],
            answerIndex: 1,
            explanation: "Chlorine is more reactive than iodine, so it displaces iodide ions: Cl₂ + 2I⁻ → 2Cl⁻ + I₂. The iodine produced makes the solution dark brown. KCl is soluble, so no precipitate forms.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "Reactivity order in Group VII: Cl > Br > I.",
              "A more reactive halogen displaces a less reactive halide.",
              "What colour is iodine (I₂) in solution?"
            ]
          },
          {
            id: "chem-periodic-bm1-08",
            question: "Which of these does NOT explain why all Group I elements have similar chemical properties?",
            options: [
              "They all have one electron in their outer shell",
              "They all form ions with a 1+ charge",
              "They all have the same number of occupied electron shells",
              "They all react with water to form a hydroxide and hydrogen"
            ],
            answerIndex: 2,
            explanation: "Group I elements have different numbers of shells (Li has 2, Na has 3, K has 4) — they are in different periods. Their similar chemistry comes from sharing one outer electron and forming 1+ ions, not from having the same number of shells.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "challenge",
            hints: [
              "Similar chemistry within a group comes from the OUTER electrons.",
              "Do Li, Na and K have the same number of shells, or different numbers?",
              "Pick the statement that is actually false for a group."
            ],
            strategy: "Spot the false statement by separating group facts from period facts"
          },
          {
            id: "chem-periodic-bm1-09",
            question: "Element Q is in Period 4, Group II. How many electron shells does an atom of Q have, and what charge ion will it form?",
            options: [
              "2 shells, forms a 4+ ion",
              "4 shells, forms a 2+ ion",
              "2 shells, forms a 2− ion",
              "4 shells, forms a 2− ion"
            ],
            answerIndex: 1,
            explanation: "Period 4 means 4 occupied shells. Group II means 2 outer electrons, which are lost to form a 2+ ion (this is calcium, Ca²⁺). Metals lose electrons to form positive ions.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "core",
            hints: [
              "Period number = number of occupied shells.",
              "Group number = number of outer electrons.",
              "A Group II metal loses 2 electrons — does that make a positive or negative ion?"
            ]
          },
          {
            id: "chem-periodic-bm1-10",
            question: "Astatine (At) lies below iodine in Group VII. Which prediction about astatine is most reliable?",
            options: [
              "It is a gas at room temperature and pale yellow-green",
              "It is more reactive than chlorine",
              "It is a dark/almost black solid and the least reactive halogen of those listed",
              "It forms 2− ions like oxygen"
            ],
            answerIndex: 2,
            explanation: "Down Group VII colour darkens and state goes gas → liquid → solid, so At is expected to be a dark solid. Reactivity decreases down the group, so At is less reactive than Cl, Br and I. Halogens form 1− ions (gaining one electron), not 2−.",
            guideRef: "Group VII — The Halogens",
            difficulty: "challenge",
            hints: [
              "Continue the trends below iodine: colour, state and reactivity.",
              "Down Group VII reactivity decreases — where does At sit?",
              "Halogens gain ONE electron, forming a 1− ion."
            ],
            strategy: "Extend group trends to an unfamiliar element"
          }
        ]
      },
      {
        id: "chem-periodic-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Reactivity trends, noble gases and transition elements.",
        questions: [
          {
            id: "chem-periodic-bm2-01",
            question: "Which list places the Group I metals in order of INCREASING reactivity?",
            options: [
              "K, Na, Li",
              "Li, Na, K",
              "Na, Li, K",
              "K, Li, Na"
            ],
            answerIndex: 1,
            explanation: "Reactivity increases down Group I, so the order from least to most reactive is Li, Na, K.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm2-02",
            question: "Why are the noble gases (Group 0) chemically unreactive?",
            options: [
              "They are very dense",
              "They have full outer electron shells",
              "They have only one outer electron",
              "They exist as diatomic molecules"
            ],
            answerIndex: 1,
            explanation: "A full outer shell (2 for He; 8 for Ne, Ar and the rest) is a very stable arrangement, so noble gases have no tendency to gain, lose or share electrons and are inert. They are monatomic, not diatomic.",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm2-03",
            question: "Which of these is a typical property of a transition element but NOT of a Group I metal?",
            options: [
              "It is a good conductor of electricity",
              "It forms ions with variable oxidation states",
              "It is a solid at room temperature",
              "It forms a positive ion"
            ],
            answerIndex: 1,
            explanation: "Variable oxidation states (e.g. Fe²⁺ and Fe³⁺) is characteristic of transition metals; Group I metals form only 1+ ions. Both types conduct, are solids and form positive ions, so those do not distinguish them.",
            guideRef: "Transition Elements",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm2-04",
            question: "Going down Group VII, why does reactivity decrease?",
            options: [
              "The outer electron is lost more easily",
              "The atoms have fewer outer electrons",
              "The incoming electron is added to a shell further from the nucleus and more shielded, so is gained less easily",
              "The atoms become smaller down the group"
            ],
            answerIndex: 2,
            explanation: "Halogens react by gaining an electron. Down the group there are more shells, so the incoming electron joins a shell further from the nucleus and more shielded by inner shells. The attraction is weaker, so the electron is gained less easily and reactivity falls.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "Do halogens gain or lose electrons when they react?",
              "Going down a group, how does the number of shells change?",
              "Further from the nucleus and more shielded means a weaker pull on the incoming electron."
            ]
          },
          {
            id: "chem-periodic-bm2-05",
            question: "Which use of a noble gas is matched correctly to the property responsible?",
            options: [
              "Helium in balloons — because it is denser than air",
              "Argon in light bulbs — because it conducts electricity",
              "Argon in welding — because it is inert and prevents oxidation of the hot metal",
              "Neon in discharge tubes — because it reacts with the electrodes to glow"
            ],
            answerIndex: 2,
            explanation: "Argon's inertness provides a shield that stops the hot metal being oxidised during welding. Helium is LESS dense than air (that gives lift), noble gases do not conduct, and neon glows because it is excited by the current, not because it reacts.",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "core",
            hints: [
              "Almost every noble-gas use depends on them being unreactive.",
              "Helium gives lift because it is LESS dense than air, not more.",
              "Does neon react with the electrodes, or is it simply excited by the current?"
            ]
          },
          {
            id: "chem-periodic-bm2-06",
            question: "A purple solution of potassium manganate(VII) contains the MnO₄⁻ ion. A separate manganese salt gives a very pale pink solution containing Mn²⁺. These observations best illustrate which TWO transition-metal properties?",
            options: [
              "High density and catalytic activity",
              "Coloured compounds and variable oxidation states",
              "High melting point and coloured compounds",
              "Variable oxidation states and catalytic activity"
            ],
            answerIndex: 1,
            explanation: "Different colours (purple vs pale pink) show transition metals form coloured compounds; manganese existing as Mn⁷⁺ (in MnO₄⁻) and Mn²⁺ shows variable oxidation states. Density, melting point and catalysis are not demonstrated by these colour observations.",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "There are two clues: the colours, and the different charges on manganese.",
              "Different colours point to one property; Mn⁷⁺ vs Mn²⁺ points to another.",
              "Pick the option naming BOTH of those properties."
            ]
          },
          {
            id: "chem-periodic-bm2-07",
            question: "Bromine water is added to three solutions: KCl, KBr and KI. In how many of the three tubes will a displacement reaction occur?",
            options: [
              "None",
              "One",
              "Two",
              "Three"
            ],
            answerIndex: 1,
            explanation: "Bromine can only displace a halide less reactive than itself — that is iodide. It cannot displace chloride (Cl is more reactive) and cannot displace bromide (it cannot displace itself). So only one tube (KI) reacts.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "List the reactivity order: Cl > Br > I.",
              "Bromine displaces only halides LESS reactive than bromine.",
              "Check each tube: KCl, KBr, KI — which qualifies?"
            ]
          },
          {
            id: "chem-periodic-bm2-08",
            question: "Which statement comparing sodium with iron is correct?",
            options: [
              "Sodium has a higher melting point and is harder",
              "Iron has a higher melting point, is harder and forms more than one ion",
              "Sodium forms coloured compounds and iron does not",
              "Both form only 1+ ions"
            ],
            answerIndex: 1,
            explanation: "Iron (a transition metal) has a much higher melting point (1538 °C vs 98 °C), is harder and stronger, and forms Fe²⁺ and Fe³⁺. Sodium is soft, low melting and forms only Na⁺ with white/colourless compounds; iron compounds are coloured.",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "One metal is a soft Group I metal, the other a transition metal.",
              "Compare melting point and hardness.",
              "Which metal forms more than one ion and coloured compounds?"
            ]
          },
          {
            id: "chem-periodic-bm2-09",
            question: "Caesium (Cs) is below potassium in Group I. Which observation is most likely when a small piece of caesium is dropped into water?",
            options: [
              "A slow steady fizz, less vigorous than sodium",
              "No visible reaction",
              "An extremely violent, possibly explosive reaction producing CsOH and hydrogen",
              "It dissolves quietly forming an acidic solution"
            ],
            answerIndex: 2,
            explanation: "Reactivity increases down Group I, so Cs (below K) reacts more violently than potassium — typically explosively. The products are still a hydroxide (CsOH) and hydrogen, and the solution is alkaline, not acidic.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "challenge",
            hints: [
              "Where is Cs relative to K, and how does reactivity change down the group?",
              "The reaction type is the same for all Group I metals: metal + water → hydroxide + hydrogen.",
              "Will the solution formed be acidic or alkaline?"
            ],
            strategy: "Extend group trends to an unfamiliar element"
          },
          {
            id: "chem-periodic-bm2-10",
            question: "Which pairing of an industrial process with its transition-metal catalyst is correct?",
            options: [
              "Haber process — vanadium(V) oxide",
              "Contact process — iron",
              "Hydrogenation of vegetable oils — nickel",
              "Decomposition of hydrogen peroxide — copper",
            ],
            answerIndex: 2,
            explanation: "Nickel catalyses the hydrogenation of vegetable oils (making margarine). Iron is the Haber catalyst, V₂O₅ is the Contact catalyst, and manganese(IV) oxide (MnO₂) catalyses hydrogen peroxide decomposition — so the other options are swapped or wrong.",
            guideRef: "Transition Elements",
            difficulty: "challenge",
            hints: [
              "Recall: iron → Haber; V₂O₅ → Contact.",
              "Which catalyst is used to make margarine from oils?",
              "MnO₂, not copper, speeds the decomposition of hydrogen peroxide."
            ],
            strategy: "Match each catalyst to its specific process"
          }
        ]
      },
      {
        id: "chem-periodic-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Trends across a period, valency and metallic character.",
        questions: [
          {
            id: "chem-periodic-bm3-01",
            question: "Across Period 3 from sodium to argon, the metallic character of the elements:",
            options: [
              "Increases",
              "Decreases",
              "Stays the same",
              "Increases then decreases"
            ],
            answerIndex: 1,
            explanation: "Across a period, elements change from metals on the left (Na, Mg) to non-metals on the right (P, S, Cl), so metallic character decreases and non-metallic character increases.",
            guideRef: "Trends Across a Period",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm3-02",
            question: "Which element in Period 3 is a metal?",
            options: [
              "Sulfur",
              "Chlorine",
              "Magnesium",
              "Argon"
            ],
            answerIndex: 2,
            explanation: "Magnesium is on the left of Period 3 and is a metal (good conductor, forms basic oxide, forms positive ions). Sulfur and chlorine are non-metals and argon is a noble gas.",
            guideRef: "Trends Across a Period",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm3-03",
            question: "An element is found on the right-hand side of the periodic table, near the top. It is most likely to be:",
            options: [
              "A reactive metal that forms positive ions",
              "A non-metal that forms negative ions or covalent bonds",
              "A transition metal with coloured compounds",
              "A liquid metal"
            ],
            answerIndex: 1,
            explanation: "The top right of the table holds non-metals (e.g. N, O, F). Non-metals tend to gain electrons to form negative ions or share electrons in covalent bonds. Metals lie on the left and centre.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm3-04",
            question: "What is the likely valency (combining power) of an element in Group VI?",
            options: [
              "1",
              "2",
              "3",
              "6"
            ],
            answerIndex: 1,
            explanation: "A Group VI element has 6 outer electrons and tends to gain 2 to reach a full shell, giving an ion of charge 2− (e.g. O²⁻, S²⁻). Its valency is therefore 2.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "core",
            hints: [
              "Group VI elements have 6 outer electrons.",
              "How many more electrons are needed to reach a full outer shell of 8?",
              "That number of electrons gained is the valency."
            ]
          },
          {
            id: "chem-periodic-bm3-05",
            question: "The oxides of Period 3 elements change in character across the period. Which sequence is correct from left to right?",
            options: [
              "Acidic → amphoteric → basic",
              "Basic → amphoteric → acidic",
              "Neutral → basic → acidic",
              "Amphoteric → basic → acidic"
            ],
            answerIndex: 1,
            explanation: "Na₂O and MgO are basic; Al₂O₃ is amphoteric; SiO₂, P₄O₁₀ and SO₃ are acidic. So oxide character goes basic → amphoteric → acidic across the period.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "What type of oxide does a metal like sodium form?",
              "Aluminium oxide is the special case — what term describes it?",
              "Non-metal oxides (S, P) dissolve to form acids."
            ]
          },
          {
            id: "chem-periodic-bm3-06",
            question: "Silicon has the highest melting point of the Period 3 elements. This is because silicon:",
            options: [
              "Is a metal with strong metallic bonding",
              "Has a giant covalent (macromolecular) structure with many strong covalent bonds",
              "Exists as small Si₂ molecules with weak forces",
              "Has the most delocalised electrons"
            ],
            answerIndex: 1,
            explanation: "Silicon has a giant covalent structure: each atom is bonded to four others in a continuous network. A huge amount of energy is needed to break these many strong covalent bonds, giving a very high melting point. It is not metallic and does not form small molecules.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "Think about silicon's structure — is it small molecules or a giant network?",
              "Many strong covalent bonds throughout a structure need a lot of energy to break.",
              "Compare with diamond, which has a similar structure."
            ]
          },
          {
            id: "chem-periodic-bm3-07",
            question: "Across a period the atomic radius decreases. The best explanation is that:",
            options: [
              "More electron shells are added, pulling electrons in",
              "The number of protons increases while electrons fill the same shell, so the stronger nuclear charge pulls the shell in",
              "The atoms lose electrons across the period",
              "The number of neutrons decreases"
            ],
            answerIndex: 1,
            explanation: "Across a period electrons are added to the same outer shell while the proton number rises. The shell stays the same distance out, but the greater nuclear charge pulls it in more strongly, so the atom gets smaller. No new shells are added across a period.",
            guideRef: "Trends Across a Period",
            difficulty: "challenge",
            hints: [
              "Across a period, does the number of shells change?",
              "What happens to the number of protons (nuclear charge)?",
              "A stronger pull on the same shell makes the atom smaller."
            ],
            strategy: "Separate the effect of nuclear charge from the number of shells"
          },
          {
            id: "chem-periodic-bm3-08",
            question: "Which property would you NOT expect a metal on the far left of a period to have, compared with a non-metal on the far right?",
            options: [
              "Higher electrical conductivity",
              "A tendency to form positive ions",
              "A more basic oxide",
              "A higher number of outer electrons"
            ],
            answerIndex: 3,
            explanation: "Outer electrons INCREASE across a period, so the non-metal on the right has more outer electrons, not the metal on the left. Metals do conduct better, form positive ions and have more basic oxides than the non-metals.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "Across a period the number of outer electrons rises from left to right.",
              "So which side has FEWER outer electrons?",
              "Find the statement that is therefore false for the left-hand metal."
            ]
          },
          {
            id: "chem-periodic-bm3-09",
            question: "Element X forms an oxide that reacts with both hydrochloric acid and sodium hydroxide solution. Element X is most likely to be:",
            options: [
              "Sodium",
              "Aluminium",
              "Sulfur",
              "Argon"
            ],
            answerIndex: 1,
            explanation: "An oxide that reacts with both acids and bases is amphoteric. Aluminium oxide (Al₂O₃) is the key amphoteric oxide. Sodium oxide is basic, sulfur oxides are acidic, and argon forms no oxide.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "An oxide reacting with both acid and base has a special name.",
              "Which Period 3 element's oxide is amphoteric?",
              "It sits between the metals and the non-metals."
            ]
          },
          {
            id: "chem-periodic-bm3-10",
            question: "Magnesium (Group II) reacts with chlorine (Group VII). Using their group numbers to predict valency, what is the formula of the product?",
            options: [
              "MgCl",
              "MgCl₂",
              "Mg₂Cl",
              "Mg₂Cl₃"
            ],
            answerIndex: 1,
            explanation: "Magnesium forms Mg²⁺ (loses 2 electrons) and chlorine forms Cl⁻ (gains 1 electron). To balance charges, two Cl⁻ are needed for each Mg²⁺, giving MgCl₂.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "challenge",
            hints: [
              "Group II metal → which ion charge? Group VII non-metal → which ion charge?",
              "Mg²⁺ and Cl⁻ must combine so the total charge is zero.",
              "How many Cl⁻ ions balance one Mg²⁺?"
            ],
            strategy: "Predict valency from group number, then balance the charges"
          }
        ]
      },
      {
        id: "chem-periodic-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Mixed synoptic questions across the whole topic.",
        questions: [
          {
            id: "chem-periodic-bm4-01",
            question: "Which element has atoms with 2 occupied electron shells and 6 electrons in the outer shell?",
            options: [
              "Sulfur",
              "Oxygen",
              "Carbon",
              "Magnesium"
            ],
            answerIndex: 1,
            explanation: "2 shells means Period 2; 6 outer electrons means Group VI. The Period 2, Group VI element is oxygen (2,6). Sulfur is in Period 3, carbon is Group IV, magnesium is Group II.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm4-02",
            question: "Which of the following is the most reactive metal?",
            options: [
              "Lithium",
              "Potassium",
              "Iron",
              "Copper"
            ],
            answerIndex: 1,
            explanation: "Potassium is a Group I alkali metal and is more reactive than lithium (reactivity increases down Group I) and far more reactive than the transition metals iron and copper.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm4-03",
            question: "When a Group I metal reacts with water, the resulting solution is tested with universal indicator. The colour seen is most likely:",
            options: [
              "Red",
              "Green",
              "Purple/violet",
              "Orange"
            ],
            answerIndex: 2,
            explanation: "Group I metals form a metal hydroxide (a strong alkali) which gives a high pH. Universal indicator turns purple/violet at pH 13–14. Red would indicate a strong acid.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm4-04",
            question: "Which statement about the reaction Cl₂(aq) + 2KBr(aq) → 2KCl(aq) + Br₂(aq) is correct?",
            options: [
              "Bromine is more reactive than chlorine",
              "Chlorine is reduced and bromide ions are oxidised",
              "Potassium is displaced from solution",
              "No electrons are transferred"
            ],
            answerIndex: 1,
            explanation: "This is a redox displacement. Chlorine gains electrons (Cl₂ → 2Cl⁻), so it is reduced; bromide ions lose electrons (2Br⁻ → Br₂), so they are oxidised. Chlorine is the more reactive halogen, and K⁺ is a spectator ion.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "Identify which species gains electrons and which loses them.",
              "Gain of electrons = reduction; loss of electrons = oxidation.",
              "Potassium stays as K⁺ throughout — it is a spectator."
            ]
          },
          {
            id: "chem-periodic-bm4-05",
            question: "Two unlabelled gas jars contain hydrogen and helium. Which test best distinguishes them, and what is the expected result?",
            options: [
              "Apply a lighted splint — hydrogen burns with a squeaky pop; helium does nothing",
              "Apply a lighted splint — helium burns with a squeaky pop; hydrogen does nothing",
              "Add limewater — hydrogen turns it milky; helium does not",
              "Use a glowing splint — both relight it"
            ],
            answerIndex: 0,
            explanation: "Hydrogen is flammable and gives the 'squeaky pop' with a lighted splint. Helium is a noble gas and is inert, so it gives no reaction. Limewater tests for carbon dioxide, not these gases.",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "core",
            hints: [
              "One gas is flammable, the other is inert.",
              "Which classic test result is the 'squeaky pop'?",
              "A noble gas will not react with a flame."
            ]
          },
          {
            id: "chem-periodic-bm4-06",
            question: "An element is a hard solid with a high melting point, forms a green compound and acts as a catalyst. In which part of the periodic table is it found?",
            options: [
              "Group I",
              "Group VII",
              "The transition (d-block) elements",
              "Group 0"
            ],
            answerIndex: 2,
            explanation: "High melting point, hardness, coloured compounds and catalytic activity are all characteristic of the transition elements. Group I metals are soft and form white compounds; Group VII are non-metals; Group 0 are inert gases.",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "Coloured compounds and catalysis are signature clues.",
              "Group I metals are soft with white compounds — does that fit?",
              "Which block sits in the centre of the table?"
            ]
          },
          {
            id: "chem-periodic-bm4-07",
            question: "Which comparison between Group I metals and Group VII non-metals (down each group) is correct?",
            options: [
              "Both become more reactive down the group",
              "Group I becomes more reactive while Group VII becomes less reactive down the group",
              "Both become less reactive down the group",
              "Group I becomes less reactive while Group VII becomes more reactive down the group"
            ],
            answerIndex: 1,
            explanation: "Group I metals react by LOSING an electron, which is easier down the group, so reactivity increases. Group VII non-metals react by GAINING an electron, which is harder down the group, so reactivity decreases. The trends are opposite.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "Group I reacts by losing electrons; Group VII by gaining them.",
              "Down a group, losing the outer electron gets easier.",
              "Down a group, gaining an electron gets harder."
            ]
          },
          {
            id: "chem-periodic-bm4-08",
            question: "0.40 g of an unknown Group I metal M (relative atomic mass 39) is added to water and 0.0051 mol of hydrogen is collected (allowing for rounding). Which metal is M, and what is the approximate mole ratio of metal to hydrogen?",
            options: [
              "Sodium; ratio 1:1",
              "Potassium; ratio 2:1",
              "Lithium; ratio 1:2",
              "Potassium; ratio 1:2"
            ],
            answerIndex: 1,
            explanation: "Moles of M = 0.40 / 39 ≈ 0.010 mol; Ar 39 identifies M as potassium. From 2K + 2H₂O → 2KOH + H₂, the ratio K:H₂ is 2:1, so 0.010 mol K gives about 0.0051 mol H₂. Hence potassium, ratio 2:1.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "challenge",
            hints: [
              "Use moles = mass / Ar to find moles of metal.",
              "An Ar of 39 should tell you which Group I metal it is.",
              "Compare moles of metal with moles of hydrogen to get the ratio."
            ],
            strategy: "Use mole ratio to identify an element and confirm stoichiometry"
          },
          {
            id: "chem-periodic-bm4-09",
            question: "Which statement about zinc as a transition-block element is most accurate for IGCSE?",
            options: [
              "Zinc shows all typical transition properties, including many oxidation states and coloured compounds",
              "Zinc is in the d-block but its compounds are white and it forms only Zn²⁺, so it lacks some typical transition properties",
              "Zinc is a Group II metal that forms Zn⁺ ions",
              "Zinc is a non-metal that forms a 2− ion"
            ],
            answerIndex: 1,
            explanation: "Zinc sits in the d-block but only forms Zn²⁺ and its compounds are white/colourless, so it does not show the variable oxidation states or coloured compounds typical of transition metals. It is a metal, not a non-metal, and forms 2+ (not 1+) ions.",
            guideRef: "Transition Elements",
            difficulty: "challenge",
            hints: [
              "Does zinc form more than one ion charge?",
              "Are zinc compounds coloured or white?",
              "It is in the d-block but is an exception to some transition properties."
            ],
            strategy: "Recognise exceptions within a general pattern"
          },
          {
            id: "chem-periodic-bm4-10",
            question: "An element conducts electricity, is a solid, forms a 3+ ion and has an oxide that reacts with both acids and alkalis. The element is:",
            options: [
              "Sodium",
              "Aluminium",
              "Phosphorus",
              "Chlorine"
            ],
            answerIndex: 1,
            explanation: "A 3+ ion points to Group III; an amphoteric oxide (reacts with both acids and alkalis) is the hallmark of aluminium oxide. Aluminium also conducts and is a solid. Sodium forms 1+, phosphorus and chlorine are non-metals with acidic oxides.",
            guideRef: "Trends Across a Period",
            difficulty: "challenge",
            hints: [
              "A 3+ ion comes from which group?",
              "Which oxide is amphoteric (reacts with both acids and bases)?",
              "Combine the clues: metal, 3+, amphoteric oxide."
            ],
            strategy: "Combine several clues to pin down one element"
          }
        ]
      }
    ],
    qaPapers: [
      {
        id: "chem-periodic-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Arrangement, Group I trends and reactions with water.",
        questions: [
          {
            id: "chem-periodic-bq1-01",
            question: "An atom of element Z has the electron configuration 2,8,8,1.\n\n(a) State the group and period of Z. [2]\n(b) Predict whether Z is a metal or a non-metal, and the charge of the ion it forms. [2]\n(c) Name element Z. [1]",
            marks: 5,
            modelAnswer: "(a) Z is in Group I (1 outer electron) and Period 4 (4 occupied shells).\n\n(b) Z is a metal. It has 1 outer electron, which it loses to form a 1+ ion (Z⁺).\n\n(c) Z is potassium (K).",
            markScheme: [
              "(a) Group I (1); Period 4 (1)",
              "(b) Metal (1); forms a 1+ ion / Z⁺ (1)",
              "(c) Potassium / K (1)"
            ],
            commonError: "Students sometimes count the shells as the group number or vice versa — remember group = outer electrons, period = number of shells.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq1-02",
            question: "Sodium and potassium are both in Group I.\n\n(a) Describe two observations you would see when a small piece of sodium is added to water. [2]\n(b) State one way in which the reaction of potassium with water differs from that of sodium. [1]\n(c) Write a word equation for the reaction of potassium with water. [1]",
            marks: 4,
            modelAnswer: "(a) Any two: the sodium floats on the surface; it melts into a shiny ball; it moves/fizzes on the surface; effervescence (hydrogen gas) is seen; it gradually disappears.\n\n(b) Potassium reacts more vigorously than sodium, and the hydrogen produced ignites with a lilac flame.\n\n(c) Potassium + water → potassium hydroxide + hydrogen.",
            markScheme: [
              "(a) Any two correct observations: floats / melts into a ball / moves on surface / fizzes / disappears — 1 mark each (2)",
              "(b) More vigorous / lilac flame / hydrogen ignites (1)",
              "(c) Potassium + water → potassium hydroxide + hydrogen (1)"
            ],
            commonError: "In (c) some students write an oxide or include chlorine; the products of a Group I metal with water are always the hydroxide and hydrogen.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq1-03",
            question: "Explain, in terms of electron arrangement, why elements in the same group of the periodic table have similar chemical properties. Use Group I as your example. [3]",
            marks: 3,
            modelAnswer: "Elements in the same group have the same number of electrons in their outer (valence) shell. Chemical properties are determined mainly by the outer electrons, so elements with the same outer arrangement react in similar ways. For example, every Group I element has one outer electron, which it loses to form a 1+ ion, so they all react similarly with water and oxygen.",
            markScheme: [
              "Same number of outer-shell / valence electrons within a group (1)",
              "Chemical properties depend on the outer electrons (1)",
              "Group I example: all have 1 outer electron / all form 1+ ions / react similarly (1)"
            ],
            commonError: "Students sometimes say they have the same number of shells — that is true of a period, not a group.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "core",
            hints: [
              "Which electrons control how an element reacts?",
              "What do all members of a group share about those electrons?",
              "Give the specific number of outer electrons for Group I."
            ]
          },
          {
            id: "chem-periodic-bq1-04",
            question: "Lithium, sodium and potassium are placed in separate troughs of water.\n\n(a) Place the three metals in order of increasing reactivity. [1]\n(b) Explain this order of reactivity in terms of electron configuration. You should refer to shells, distance from the nucleus and shielding. [4]",
            marks: 5,
            modelAnswer: "(a) Lithium < sodium < potassium (reactivity increases down the group).\n\n(b) Going down Group I from Li to K, each element has one more electron shell, so the single outer electron is in a shell further from the nucleus. The inner shells provide more electron shielding, reducing the effective nuclear attraction felt by the outer electron. The electrostatic attraction between the nucleus and the outer electron therefore weakens, so the outer electron is lost more easily. Losing the outer electron more readily means the metal reacts more vigorously — so potassium is the most reactive.",
            markScheme: [
              "(a) Li < Na < K (1)",
              "(b) More electron shells down the group / outer electron further from nucleus (1)",
              "(b) Greater shielding by inner shells (1)",
              "(b) Weaker nuclear attraction on the outer electron (1)",
              "(b) Outer electron lost more easily → more reactive (1)"
            ],
            commonError: "A frequent omission is failing to mention shielding explicitly — distance alone is not enough for full marks.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "First state the order from the trend down the group.",
              "What changes with each step down the group? (number of shells)",
              "Link more shells to greater distance AND greater shielding.",
              "Finish by connecting easier electron loss to higher reactivity."
            ],
            strategy: "Explain trends using electron configuration"
          },
          {
            id: "chem-periodic-bq1-05",
            question: "The melting points of three Group I metals are: lithium 181 °C, sodium 98 °C, potassium 63 °C.\n\n(a) Describe the trend in melting point down Group I. [1]\n(b) This trend is the OPPOSITE of the trend in reactivity. Explain why a single underlying change (increasing atomic radius down the group) can cause reactivity to increase yet melting point to decrease. [3]",
            marks: 4,
            modelAnswer: "(a) The melting point decreases going down Group I (181 → 98 → 63 °C).\n\n(b) Down the group the atoms get larger (atomic radius increases). For reactivity, a larger atom means the outer electron is further from the nucleus and more shielded, so it is lost more easily — reactivity increases. For melting point, the metallic bond depends on the attraction between the positive metal ions and the sea of delocalised electrons; as the ions get larger this attraction weakens and the metallic bond becomes weaker, so less energy is needed to melt the metal and the melting point decreases. The same change (larger atoms) affects the two properties in opposite ways.",
            markScheme: [
              "(a) Melting point decreases down the group (1)",
              "(b) Atomic radius increases down the group (1)",
              "(b) Reactivity: outer electron further/more shielded → lost more easily → more reactive (1)",
              "(b) Melting point: larger ions weaken the metallic bond → less energy to melt → lower melting point (1)"
            ],
            commonError: "Students often try to use the same explanation (shielding) for both properties; melting point is best explained through the strength of the metallic bond, not ionisation.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "challenge",
            hints: [
              "Name the single change that happens down the group.",
              "For reactivity, link bigger atoms to easier electron loss.",
              "For melting point, think about the strength of the metallic bond between ions and delocalised electrons.",
              "Explain how the same change pulls the two properties in opposite directions."
            ],
            strategy: "Trace two different properties back to one underlying cause"
          },
          {
            id: "chem-periodic-bq1-06",
            question: "A teacher demonstrates that 0.69 g of sodium reacts completely with excess water. (Ar of Na = 23; molar gas volume at RTP = 24 000 cm³/mol.)\n\n(a) Write the balanced symbol equation, including state symbols. [2]\n(b) Calculate the number of moles of sodium used. [1]\n(c) Calculate the volume of hydrogen gas produced at RTP. [3]",
            marks: 6,
            modelAnswer: "(a) 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)\n\n(b) Moles of Na = mass / Ar = 0.69 / 23 = 0.030 mol.\n\n(c) From the equation, 2 mol Na produce 1 mol H₂, so moles of H₂ = 0.030 / 2 = 0.015 mol. Volume = moles × 24 000 = 0.015 × 24 000 = 360 cm³.",
            markScheme: [
              "(a) Correct balanced equation 2Na + 2H₂O → 2NaOH + H₂ (1); correct state symbols (s)(l)(aq)(g) (1)",
              "(b) Moles Na = 0.69 / 23 = 0.030 mol (1)",
              "(c) Moles H₂ = 0.015 mol using 2:1 ratio (1); volume = moles × 24 000 (1); = 360 cm³ (1)"
            ],
            commonError: "The most common error is using a 1:1 ratio of Na to H₂; the balanced equation gives a 2:1 ratio, so the moles of H₂ are half the moles of Na.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "Balance Na, then O, then H — hydrogen gas is H₂.",
              "Moles = mass / Ar.",
              "Use the equation ratio (2 Na : 1 H₂) before converting to volume.",
              "Volume at RTP = moles × 24 000 cm³/mol."
            ],
            strategy: "Mole calculation: identify the ratio from the balanced equation",
            solutions: [
              {
                label: "Method: mass → moles → ratio → volume",
                steps: [
                  "Moles of Na = 0.69 / 23 = 0.030 mol",
                  "Ratio from 2Na + 2H₂O → 2NaOH + H₂ is Na : H₂ = 2 : 1",
                  "Moles of H₂ = 0.030 / 2 = 0.015 mol",
                  "Volume of H₂ = 0.015 × 24 000 = 360 cm³"
                ]
              }
            ]
          },
          {
            id: "chem-periodic-bq1-07",
            question: "The first three elements of Group I are lithium, sodium and potassium.\n\n(a) State the general formula for the reaction of a Group I metal M with water. [1]\n(b) State the type of compound formed when this hydroxide solution is added to an acid, and the type of reaction. [2]\n(c) Suggest why Group I metals are stored under oil. [1]",
            marks: 4,
            modelAnswer: "(a) 2M + 2H₂O → 2MOH + H₂.\n\n(b) A salt (and water) is formed; the reaction is a neutralisation (acid + alkali → salt + water).\n\n(c) Group I metals are very reactive and would otherwise react with oxygen and moisture (water vapour) in the air; storing them under oil keeps air and water away from the metal.",
            markScheme: [
              "(a) 2M + 2H₂O → 2MOH + H₂ (1)",
              "(b) Salt (+ water) formed (1); neutralisation reaction (1)",
              "(c) They are very reactive / react with oxygen and water in air; oil excludes air and moisture (1)"
            ],
            commonError: "In (c) students sometimes say only 'to stop it reacting' without naming what it reacts with (oxygen/water in the air).",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "Use M to stand for any Group I metal in the general equation.",
              "A hydroxide reacting with an acid produces what two things?",
              "What two things in the air would attack a reactive metal?"
            ]
          },
          {
            id: "chem-periodic-bq1-08",
            question: "Francium (Fr) is the element below caesium at the bottom of Group I.\n\n(a) Predict three properties of francium. [3]\n(b) Explain, using electron configuration, why francium would be even more reactive than caesium. [2]",
            marks: 5,
            modelAnswer: "(a) Any three: francium is a metal with one outer electron; it forms a 1+ ion (Fr⁺); it would react extremely violently (explosively) with water; it has a very low melting point; it would form a hydroxide FrOH which is strongly alkaline; it is soft and has a low density typical of Group I.\n\n(b) Francium has even more electron shells than caesium, so its single outer electron is even further from the nucleus and even more shielded by inner shells. The nuclear attraction on the outer electron is the weakest of all Group I metals, so the electron is lost most easily — making francium the most reactive.",
            markScheme: [
              "(a) Any three valid predictions: 1 outer electron / forms 1+ ion / reacts explosively with water / very low melting point / soft / forms strongly alkaline hydroxide — 1 mark each (3)",
              "(b) More shells / outer electron further from nucleus and more shielded than in Cs (1); weakest attraction → electron lost most easily → most reactive (1)"
            ],
            commonError: "Students sometimes predict francium forms a 2+ ion or an acidic solution; all Group I metals form 1+ ions and alkaline hydroxides.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "challenge",
            hints: [
              "Apply the standard Group I properties to an element even lower down.",
              "Where is Fr relative to Cs, and what does that do to reactivity?",
              "Link 'more shells and more shielding' to the easiest possible electron loss."
            ],
            strategy: "Extend group trends to an unfamiliar element"
          },
          {
            id: "chem-periodic-bq1-09",
            question: "Define the following terms as used for the periodic table.\n\n(a) Proton number (atomic number). [1]\n(b) Period. [1]\n(c) Group. [1]\n(d) State what is special about the position of an element with a full outer shell. [1]",
            marks: 4,
            modelAnswer: "(a) The proton number is the number of protons in the nucleus of an atom; it is the basis for ordering the elements.\n\n(b) A period is a horizontal row of the periodic table; all elements in it have the same number of occupied electron shells.\n\n(c) A group is a vertical column of the periodic table; all elements in it have the same number of outer-shell electrons.\n\n(d) An element with a full outer shell is found in Group 0 (the noble gases) and is chemically inert.",
            markScheme: [
              "(a) Number of protons in the nucleus / orders the elements (1)",
              "(b) Horizontal row / same number of occupied shells (1)",
              "(c) Vertical column / same number of outer electrons (1)",
              "(d) Group 0 / noble gas / inert (1)"
            ],
            commonError: "Students sometimes swap the definitions of group and period; group = same outer electrons, period = same number of shells.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq1-10",
            question: "Sodium hydroxide solution is formed when sodium reacts with water.\n\n(a) State the pH range you would expect for this solution and the colour of universal indicator in it. [2]\n(b) Write the ionic equation that shows why the solution is alkaline. [1]\n(c) A student adds dilute hydrochloric acid to the sodium hydroxide solution until it is neutral. Name the salt formed and the type of reaction. [2]",
            marks: 5,
            modelAnswer: "(a) The pH is high, in the range 13–14 (strongly alkaline). Universal indicator turns purple/violet.\n\n(b) NaOH(aq) → Na⁺(aq) + OH⁻(aq); it is the OH⁻(aq) ions that make the solution alkaline.\n\n(c) The salt formed is sodium chloride (NaCl). The reaction is neutralisation (acid + alkali → salt + water).",
            markScheme: [
              "(a) pH 13–14 / strongly alkaline (1); universal indicator purple/violet (1)",
              "(b) Solution contains OH⁻(aq) ions / NaOH → Na⁺ + OH⁻ (1)",
              "(c) Sodium chloride / NaCl (1); neutralisation (1)"
            ],
            commonError: "Students sometimes state the indicator turns blue (pH ~9); a strong alkali like NaOH gives a purple/violet colour at pH 13–14.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "NaOH is a strong alkali — what is the highest end of the pH scale?",
              "Which ion in solution makes it alkaline?",
              "Acid + alkali gives a salt and water — name the salt from HCl + NaOH."
            ]
          }
        ]
      },
      {
        id: "chem-periodic-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Group VII halogens: colours, reactivity and displacement.",
        questions: [
          {
            id: "chem-periodic-bq2-01",
            question: "Complete a description of the halogens chlorine, bromine and iodine.\n\n(a) State the colour and physical state of each at room temperature. [3]\n(b) State the trend in reactivity down Group VII. [1]",
            marks: 4,
            modelAnswer: "(a) Chlorine: pale yellow-green gas. Bromine: red-brown (orange-brown) liquid. Iodine: grey-black solid (gives off a purple vapour).\n\n(b) Reactivity decreases down Group VII (Cl > Br > I).",
            markScheme: [
              "(a) Chlorine: (pale) yellow-green / green gas (1); Bromine: red-brown / orange-brown liquid (1); Iodine: grey-black / dark solid (1)",
              "(b) Reactivity decreases down the group (1)"
            ],
            commonError: "Students often muddle the states — remember the sequence gas, liquid, solid as you go down Cl, Br, I.",
            guideRef: "Group VII — The Halogens",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq2-02",
            question: "Chlorine reacts with potassium bromide solution in a displacement reaction.\n\n(a) Write the balanced symbol equation for this reaction. [1]\n(b) Write the ionic equation, with state symbols. [2]\n(c) State the colour change you would observe. [1]",
            marks: 4,
            modelAnswer: "(a) Cl₂ + 2KBr → 2KCl + Br₂.\n\n(b) Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq).\n\n(c) The colourless solution turns orange-brown as bromine (Br₂) is formed.",
            markScheme: [
              "(a) Cl₂ + 2KBr → 2KCl + Br₂ (1)",
              "(b) Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq) — correct species (1), balanced with state symbols (1)",
              "(c) Colourless → orange-brown / orange / yellow-brown (1)"
            ],
            commonError: "In the ionic equation, students often leave in the spectator potassium ions (K⁺) or forget to balance the bromide ions (2Br⁻).",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "Chlorine is more reactive than bromine, so it displaces bromide.",
              "For the ionic equation, cancel the spectator K⁺ ions.",
              "What colour is bromine in solution?"
            ]
          },
          {
            id: "chem-periodic-bq2-03",
            question: "Explain, in terms of electron transfer and electron configuration, why chlorine is more reactive than iodine. [4]",
            marks: 4,
            modelAnswer: "Halogens react by gaining one electron to complete their outer shell, forming a 1− ion. Chlorine has 3 occupied shells while iodine has 5, so in iodine the incoming electron is added to a shell much further from the nucleus and more shielded by inner shells. The effective nuclear attraction on the incoming electron is therefore weaker in iodine. Chlorine, with the electron added closer to the nucleus and with less shielding, attracts and gains an electron much more easily, so chlorine is more reactive.",
            markScheme: [
              "Halogens react by gaining one electron / forming a 1− ion (1)",
              "Iodine has more shells, so the incoming electron is added further from the nucleus (1)",
              "Greater shielding in iodine / weaker effective nuclear attraction (1)",
              "Chlorine gains the electron more easily → more reactive (1)"
            ],
            commonError: "Students sometimes describe halogens LOSING electrons (confusing them with metals); halogens GAIN an electron when they react.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "Do halogens gain or lose electrons when reacting?",
              "Compare the number of shells in chlorine and iodine.",
              "Use distance from the nucleus and shielding to compare how easily each gains an electron."
            ],
            strategy: "Explain trends using electron configuration"
          },
          {
            id: "chem-periodic-bq2-04",
            question: "A student has three unlabelled solutions known to be potassium chloride, potassium bromide and potassium iodide. The only reagent available is chlorine water.\n\n(a) Describe what the student would observe when chlorine water is added to each solution. [3]\n(b) Explain why chlorine water cannot be used, on its own, to tell potassium chloride apart from a solution that does not react. [2]",
            marks: 5,
            modelAnswer: "(a) Potassium chloride: no colour change (chlorine cannot displace chloride / cannot displace itself). Potassium bromide: the solution turns orange-brown as bromine is displaced. Potassium iodide: the solution turns dark brown as iodine is displaced.\n\n(b) With chlorine water, potassium chloride shows no reaction at all — it looks exactly the same as any non-reacting solution. Because there is no observable change, chlorine water alone gives no positive evidence to identify the chloride; it can only confirm chloride by elimination (the tube that does not react after the other two are identified).",
            markScheme: [
              "(a) KCl: no change (1); KBr: orange-brown (1); KI: dark brown (1)",
              "(b) KCl gives no reaction / no colour change (1); a 'no change' result is not a positive identification / only identifiable by elimination (1)"
            ],
            commonError: "Students sometimes claim chlorine turns the chloride solution green; chlorine cannot displace chloride, so there is no colour change at all.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "Chlorine displaces only halides LESS reactive than chlorine.",
              "Which two of the three will react, and what colours appear?",
              "Think about what a 'no change' result can and cannot prove."
            ]
          },
          {
            id: "chem-periodic-bq2-05",
            question: "Halogens react with hydrogen to form hydrogen halides.\n\n(a) Write the balanced equation for the reaction of chlorine with hydrogen. [1]\n(b) When hydrogen chloride gas is dissolved in water, the solution is acidic. State the name of the acid formed and what this shows about hydrogen chloride in water. [2]\n(c) Suggest, with a reason, whether hydrogen reacts more readily with chlorine or with iodine. [2]",
            marks: 5,
            modelAnswer: "(a) H₂ + Cl₂ → 2HCl.\n\n(b) The acid formed is hydrochloric acid. This shows that hydrogen chloride is acidic in water because it ionises (dissociates) to release H⁺ ions in aqueous solution.\n\n(c) Hydrogen reacts more readily with chlorine than with iodine, because chlorine is more reactive than iodine (reactivity decreases down Group VII). The reaction of hydrogen with iodine is slow and reversible/incomplete.",
            markScheme: [
              "(a) H₂ + Cl₂ → 2HCl (1)",
              "(b) Hydrochloric acid (1); HCl ionises / releases H⁺ ions in water (1)",
              "(c) Chlorine (reacts more readily) (1); because chlorine is more reactive than iodine / reactivity decreases down the group (1)"
            ],
            commonError: "In (a) students may forget the coefficient 2 in front of HCl. In (b) some name 'chloric acid' instead of hydrochloric acid.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "Balance the H and Cl atoms — HCl contains one of each.",
              "Dissolving HCl gas in water gives which common laboratory acid?",
              "Use the Group VII reactivity trend to compare chlorine and iodine."
            ]
          },
          {
            id: "chem-periodic-bq2-06",
            question: "The reaction Cl₂(aq) + 2I⁻(aq) → 2Cl⁻(aq) + I₂(aq) is a redox reaction.\n\n(a) Define oxidation and reduction in terms of electron transfer. [2]\n(b) State, with a reason, which species is oxidised and which is reduced in this reaction. [2]\n(c) Explain why iodine cannot displace chloride ions from a solution of sodium chloride. [2]",
            marks: 6,
            modelAnswer: "(a) Oxidation is the loss of electrons; reduction is the gain of electrons.\n\n(b) The iodide ions (I⁻) are oxidised because they lose electrons (2I⁻ → I₂ + 2e⁻). The chlorine (Cl₂) is reduced because it gains electrons (Cl₂ + 2e⁻ → 2Cl⁻).\n\n(c) Iodine is less reactive than chlorine (reactivity decreases down Group VII), so iodine cannot take electrons from chloride ions. A halogen can only displace a halide that is LESS reactive than itself; since chlorine is more reactive than iodine, iodine cannot displace chloride.",
            markScheme: [
              "(a) Oxidation = loss of electrons (1); reduction = gain of electrons (1)",
              "(b) Iodide ions oxidised (lose electrons) (1); chlorine reduced (gains electrons) (1)",
              "(c) Iodine less reactive than chlorine (1); a halogen only displaces a less reactive halide, so no reaction (1)"
            ],
            commonError: "Students mix up OIL RIG — remember Oxidation Is Loss, Reduction Is Gain of electrons.",
            guideRef: "Group VII — The Halogens",
            difficulty: "challenge",
            hints: [
              "Recall OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons).",
              "Track which species gains electrons and which loses them.",
              "For (c), compare the reactivity of iodine and chlorine."
            ],
            strategy: "Identify oxidation and reduction by following the electrons"
          },
          {
            id: "chem-periodic-bq2-07",
            question: "When chlorine water is added to potassium iodide solution, 0.020 mol of chlorine reacts completely.\n\n(a) Write the ionic equation for the reaction. [1]\n(b) Calculate the number of moles of iodine (I₂) produced. [2]\n(c) Calculate the mass of iodine produced. (Ar of I = 127.) [2]",
            marks: 5,
            modelAnswer: "(a) Cl₂(aq) + 2I⁻(aq) → 2Cl⁻(aq) + I₂(aq).\n\n(b) From the equation, 1 mol Cl₂ produces 1 mol I₂, so moles of I₂ = 0.020 mol.\n\n(c) Mr of I₂ = 2 × 127 = 254. Mass of I₂ = moles × Mr = 0.020 × 254 = 5.08 g.",
            markScheme: [
              "(a) Cl₂(aq) + 2I⁻(aq) → 2Cl⁻(aq) + I₂(aq) (1)",
              "(b) Ratio Cl₂ : I₂ = 1 : 1 (1); moles I₂ = 0.020 mol (1)",
              "(c) Mr(I₂) = 254 (1); mass = 0.020 × 254 = 5.08 g (1)"
            ],
            commonError: "Students often use Ar of iodine (127) instead of Mr of the I₂ molecule (254) when calculating the mass of iodine produced.",
            guideRef: "Group VII — The Halogens",
            difficulty: "challenge",
            hints: [
              "Write and balance the ionic equation first.",
              "What is the mole ratio of Cl₂ to I₂?",
              "Iodine is produced as molecules I₂ — use Mr = 2 × 127.",
              "Mass = moles × Mr."
            ],
            strategy: "Use the equation ratio, then mass = moles × Mr (remember I₂ not I)",
            solutions: [
              {
                label: "Method: ratio then mass = moles × Mr",
                steps: [
                  "Ionic equation: Cl₂ + 2I⁻ → 2Cl⁻ + I₂, so Cl₂ : I₂ = 1 : 1",
                  "Moles of I₂ = moles of Cl₂ = 0.020 mol",
                  "Mr of I₂ = 2 × 127 = 254",
                  "Mass of I₂ = 0.020 × 254 = 5.08 g"
                ]
              }
            ]
          },
          {
            id: "chem-periodic-bq2-08",
            question: "Fluorine is the halogen at the top of Group VII.\n\n(a) Predict the physical state and reactivity of fluorine compared with chlorine. [2]\n(b) Predict the result of adding fluorine to a solution of sodium chloride, and explain your reasoning. [2]\n(c) Explain why it is difficult and dangerous to carry out displacement experiments with fluorine. [1]",
            marks: 5,
            modelAnswer: "(a) Fluorine is a gas at room temperature (it is above chlorine, so even lower boiling) and is more reactive than chlorine (reactivity increases up Group VII).\n\n(b) Fluorine would displace chloride ions, forming chlorine: F₂ + 2Cl⁻ → 2F⁻ + Cl₂. This happens because fluorine is more reactive than chlorine, so it can take electrons from chloride ions.\n\n(c) Fluorine is extremely reactive (the most reactive of all halogens), so it reacts violently and is very toxic/corrosive, making it hazardous to handle safely.",
            markScheme: [
              "(a) Gas at room temperature (1); more reactive than chlorine (1)",
              "(b) Displaces chloride / forms chlorine, F₂ + 2Cl⁻ → 2F⁻ + Cl₂ (1); because fluorine is more reactive than chlorine (1)",
              "(c) Fluorine is extremely reactive / toxic / corrosive → dangerous to handle (1)"
            ],
            commonError: "Students sometimes say fluorine cannot displace chloride; in fact fluorine is MORE reactive than chlorine and does displace it.",
            guideRef: "Group VII — The Halogens",
            difficulty: "challenge",
            hints: [
              "Where is fluorine relative to chlorine, and how does reactivity change up the group?",
              "A more reactive halogen displaces a less reactive halide.",
              "Why would the most reactive halogen of all be hazardous?"
            ],
            strategy: "Extend group trends to an unfamiliar element"
          },
          {
            id: "chem-periodic-bq2-09",
            question: "Halogens form coloured vapours.\n\n(a) State the colour of the vapour given off by bromine and by iodine. [2]\n(b) Explain why iodine forms a solid at room temperature while chlorine is a gas, in terms of intermolecular forces. [2]\n(c) State the charge on a halide ion and explain how it forms. [2]",
            marks: 6,
            modelAnswer: "(a) Bromine gives an orange-brown vapour; iodine gives a purple (violet) vapour.\n\n(b) Both chlorine and iodine exist as simple diatomic molecules held together by weak intermolecular (van der Waals) forces. Iodine molecules have more electrons than chlorine molecules, so the intermolecular forces between iodine molecules are stronger. More energy is needed to separate iodine molecules, so iodine is a solid while chlorine, with weaker forces, is a gas.\n\n(c) A halide ion has a charge of 1−. It forms when a halogen atom gains one electron to complete its outer shell (e.g. Cl + e⁻ → Cl⁻).",
            markScheme: [
              "(a) Bromine: orange-brown vapour (1); iodine: purple/violet vapour (1)",
              "(b) Weak intermolecular forces between molecules (1); iodine has more electrons → stronger forces → solid, more energy to separate (1)",
              "(c) 1− charge (1); halogen atom gains one electron to fill its outer shell (1)"
            ],
            commonError: "Students sometimes say iodine has 'stronger bonds'; the covalent bond within I₂ is not what is overcome on melting — it is the weak forces BETWEEN molecules.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "Recall the vapour colours of bromine and iodine.",
              "Compare the number of electrons in Cl₂ and I₂ molecules.",
              "Do halogens gain or lose electrons to form their ions?"
            ]
          },
          {
            id: "chem-periodic-bq2-10",
            question: "(Challenge) Bromine water is added to two solutions, P and Q. Solution P turns dark brown; solution Q shows no change. The solutions are potassium chloride and potassium iodide, in some order.\n\n(a) Identify solutions P and Q, justifying your choice. [3]\n(b) Write the ionic equation for the reaction that occurs in solution P. [2]\n(c) Explain why bromine water could not be used to confirm the identity of solution Q on its own, and suggest a reagent that would react with it. [2]",
            marks: 7,
            modelAnswer: "(a) Solution P is potassium iodide (KI). Bromine is more reactive than iodine, so it displaces iodide ions to form iodine, which is dark brown. Solution Q is potassium chloride (KCl): bromine is less reactive than chlorine, so it cannot displace chloride, giving no change.\n\n(b) Br₂(aq) + 2I⁻(aq) → 2Br⁻(aq) + I₂(aq).\n\n(c) Bromine water gives no reaction with KCl, so a 'no change' result cannot positively prove the solution is chloride — any non-reacting solution would look the same. Chlorine water would react with KI (but not KCl), so it does not help either; a better choice is to add silver nitrate solution (acidified with dilute nitric acid), which gives a white precipitate of silver chloride with chloride ions.",
            markScheme: [
              "(a) P is KI (1); justified — bromine displaces iodide → dark brown iodine (1); Q is KCl, no displacement as bromine less reactive than chlorine (1)",
              "(b) Br₂(aq) + 2I⁻(aq) → 2Br⁻(aq) + I₂(aq) — species (1), balanced with states (1)",
              "(c) 'No change' is not positive proof of chloride (1); suggest acidified silver nitrate → white precipitate (1)"
            ],
            commonError: "Students often state that bromine 'turns KCl green'; bromine cannot react with chloride, so there is genuinely no change, which is why a different test is needed.",
            guideRef: "Group VII — The Halogens",
            difficulty: "challenge",
            hints: [
              "Which halide can bromine displace — the more reactive or the less reactive one?",
              "Dark brown indicates iodine has been formed.",
              "Cancel the spectator K⁺ ions for the ionic equation.",
              "To test for chloride ions directly, recall the silver nitrate test."
            ],
            strategy: "Use reactivity order to assign, then pick a positive confirmatory test"
          }
        ]
      },
      {
        id: "chem-periodic-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Noble gases, transition elements and their uses.",
        questions: [
          {
            id: "chem-periodic-bq3-01",
            question: "Helium, neon and argon are noble gases in Group 0.\n\n(a) State the electronic feature that all noble gases share. [1]\n(b) State, for each gas, one common use. [3]",
            marks: 4,
            modelAnswer: "(a) They all have a full outer electron shell (helium has 2 electrons; neon and argon have 8 in their outer shell).\n\n(b) Helium: filling balloons/airships (or cooling superconducting magnets). Neon: electric discharge tubes (neon signs/lighting). Argon: filling (incandescent) light bulbs (or shielding gas in welding).",
            markScheme: [
              "(a) Full outer electron shell (1)",
              "(b) Helium: balloons / airships / cooling magnets / divers' gas (1); Neon: discharge tubes / advertising signs (1); Argon: light bulbs / welding shield / double glazing (1)"
            ],
            commonError: "Students sometimes give the same use for two gases; each noble gas should be matched to its own typical use.",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq3-02",
            question: "Explain why noble gases are described as inert (unreactive). Refer to their electron arrangement and to what 'inert' means about gaining, losing or sharing electrons. [3]",
            marks: 3,
            modelAnswer: "Noble gases have a full outer electron shell, which is a very stable arrangement. Because the outer shell is already complete, there is no energetic advantage in gaining, losing or sharing electrons. As a result they do not form ions and do not form covalent bonds under normal conditions, so they are chemically inert.",
            markScheme: [
              "Full / complete outer electron shell (1)",
              "Stable arrangement, so no tendency to gain, lose or share electrons (1)",
              "Therefore form no ions / no bonds / are unreactive (1)"
            ],
            commonError: "Students sometimes say noble gases 'have no electrons to give' — they DO have electrons, but a full shell means there is no tendency to transfer or share them.",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq3-03",
            question: "Argon is used inside filament light bulbs instead of air.\n\n(a) Explain why air would be unsuitable. [2]\n(b) Explain why argon is suitable. [1]\n(c) Explain why a vacuum (no gas at all) is not normally used instead. [1]",
            marks: 4,
            modelAnswer: "(a) Air contains oxygen. The metal filament becomes very hot when the bulb is on; the oxygen in air would react with (oxidise) the hot filament, causing it to burn away quickly and the bulb to fail.\n\n(b) Argon is chemically inert (full outer shell), so it does not react with the hot filament; it provides an unreactive atmosphere that lets the filament glow without burning away.\n\n(c) In a vacuum the hot filament would evaporate (sublime) more quickly; the inert gas pressure reduces evaporation of the filament, prolonging its life.",
            markScheme: [
              "(a) Air contains oxygen (1); oxygen would oxidise / react with the hot filament (1)",
              "(b) Argon is inert / unreactive, so does not react with the filament (1)",
              "(c) A gas reduces evaporation/sublimation of the hot filament compared with a vacuum (1)"
            ],
            commonError: "For (c) students may say a vacuum would let the filament react; in fact there is nothing to react with in a vacuum — the issue is faster evaporation of the filament.",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "core",
            hints: [
              "Which gas in the air attacks hot metal?",
              "What property of argon stops it reacting with the filament?",
              "Without any gas, what happens to a very hot metal wire over time?"
            ]
          },
          {
            id: "chem-periodic-bq3-04",
            question: "The boiling points of the noble gases are: helium −269 °C, neon −246 °C, argon −186 °C, krypton −153 °C.\n\n(a) Describe the trend in boiling point down Group 0. [1]\n(b) Explain the trend in terms of forces between atoms. [3]",
            marks: 4,
            modelAnswer: "(a) Boiling point increases going down Group 0 (from helium to krypton).\n\n(b) Noble gases exist as separate atoms held together only by weak intermolecular forces (London dispersion / van der Waals forces). Going down the group, each atom has more electrons, which makes these intermolecular forces stronger. Stronger forces require more energy to overcome (to separate the atoms into a gas), so the boiling point rises.",
            markScheme: [
              "(a) Boiling point increases down the group (1)",
              "(b) Weak intermolecular forces (London dispersion / van der Waals) between atoms (1)",
              "(b) More electrons down the group → stronger intermolecular forces (1)",
              "(b) More energy needed to overcome the forces → higher boiling point (1)"
            ],
            commonError: "Students sometimes refer to 'breaking bonds' between noble gas atoms; there are no chemical bonds between them — only weak intermolecular forces are overcome.",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "core",
            hints: [
              "Read the numbers: are boiling points rising or falling down the group?",
              "What kind of forces act between separate noble gas atoms?",
              "How does the number of electrons change down the group, and what does that do to the forces?"
            ]
          },
          {
            id: "chem-periodic-bq3-05",
            question: "Iron, copper and chromium are transition elements.\n\n(a) State four typical properties of transition elements, giving a specific named example for each. [8]\n(b) State one property of iron that is also shown by Group I metals. [1]",
            marks: 9,
            modelAnswer: "(a) 1. High melting point / high density: e.g. iron melts at 1538 °C (far above sodium's 98 °C). 2. Variable oxidation states: e.g. iron forms Fe²⁺ and Fe³⁺; copper forms Cu⁺ and Cu²⁺. 3. Coloured compounds: e.g. copper(II) sulfate solution is blue (Cu²⁺); iron(III) solutions are yellow-brown (Fe³⁺); manganate(VII) is purple (MnO₄⁻). 4. Catalytic activity: e.g. iron catalyses the Haber process; vanadium(V) oxide catalyses the Contact process; nickel catalyses the hydrogenation of oils.\n\n(b) Iron, like Group I metals, conducts electricity (and heat) and is a solid that forms positive ions.",
            markScheme: [
              "(a) High melting point/density with example (2)",
              "(a) Variable oxidation states with example, e.g. Fe²⁺/Fe³⁺ (2)",
              "(a) Coloured compounds with example, e.g. Cu²⁺ blue (2)",
              "(a) Catalytic activity with example, e.g. Fe in Haber / V₂O₅ in Contact (2)",
              "(b) Any shared property: conducts electricity / forms positive ions / is a solid metal (1)"
            ],
            commonError: "Students lose the 'example' mark by stating the property only; each of the four properties needs a specific named example.",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "Use a four-point checklist: melting point/density, oxidation states, colour, catalysis.",
              "Attach a specific named example to each property.",
              "For (b), think of a property ALL metals share."
            ]
          },
          {
            id: "chem-periodic-bq3-06",
            question: "Compare the transition metal iron with the Group I metal sodium.\n\n(a) Give two differences in physical properties. [2]\n(b) Give two differences in chemical behaviour. [2]\n(c) Explain why iron is far more useful than sodium for making the body of a car. [2]",
            marks: 6,
            modelAnswer: "(a) Iron has a much higher melting point (1538 °C vs 98 °C) and is much harder/stronger and denser than sodium, which is soft enough to cut with a knife.\n\n(b) Iron forms more than one ion (Fe²⁺ and Fe³⁺) whereas sodium forms only Na⁺; iron is much less reactive than sodium (sodium reacts violently with water, iron only slowly); iron forms coloured compounds whereas sodium compounds are white.\n\n(c) Iron is hard, strong and has a high melting point, so it keeps its shape and strength as a structural material. It is also far less reactive than sodium, so it does not react dangerously with water or air. Sodium is too soft and far too reactive (it would react violently with rain/moisture), so it is unusable for a car body.",
            markScheme: [
              "(a) Any two: iron higher melting point / harder / stronger / denser than sodium — 1 mark each (2)",
              "(b) Any two: iron variable oxidation states vs Na only 1+ / iron less reactive than Na / iron coloured compounds vs white — 1 mark each (2)",
              "(c) Iron is hard/strong/high melting → keeps shape (1); iron much less reactive than sodium / sodium reacts with water and air (1)"
            ],
            commonError: "Students often address only strength and forget reactivity (or vice versa); a full comparison for (c) needs both the mechanical and the reactivity reasons.",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "Contrast physical properties: hardness, melting point, density.",
              "Contrast chemical behaviour: number of ions, reactivity, colour.",
              "For (c), a useful structural metal must be both strong AND unreactive."
            ]
          },
          {
            id: "chem-periodic-bq3-07",
            question: "Manganese(IV) oxide (MnO₂) catalyses the decomposition of hydrogen peroxide: 2H₂O₂(aq) → 2H₂O(l) + O₂(g).\n\n(a) State what is meant by a catalyst. [1]\n(b) A student uses 0.020 mol of hydrogen peroxide. Calculate the maximum volume of oxygen produced at RTP. (Molar gas volume = 24 000 cm³/mol.) [3]\n(c) Explain how you would show that the manganese(IV) oxide is acting as a catalyst and is not used up. [2]",
            marks: 6,
            modelAnswer: "(a) A catalyst is a substance that increases the rate of a chemical reaction without being used up (chemically unchanged at the end).\n\n(b) From the equation, 2 mol H₂O₂ produce 1 mol O₂, so moles of O₂ = 0.020 / 2 = 0.010 mol. Volume of O₂ = moles × 24 000 = 0.010 × 24 000 = 240 cm³.\n\n(c) Weigh the manganese(IV) oxide before the reaction. After the reaction, filter it off, dry it and weigh it again. If its mass is unchanged (and it could be reused to speed up another batch), this shows it was not used up and was acting as a catalyst.",
            markScheme: [
              "(a) Speeds up a reaction without being used up / chemically unchanged (1)",
              "(b) Ratio H₂O₂ : O₂ = 2 : 1, moles O₂ = 0.010 mol (1); volume = moles × 24 000 (1); = 240 cm³ (1)",
              "(c) Weigh MnO₂ before and after / recover by filtering (1); same mass shows it is not used up / can be reused (1)"
            ],
            commonError: "In (b) students may forget the 2:1 ratio and use 0.020 mol of O₂; the moles of oxygen are half the moles of hydrogen peroxide.",
            guideRef: "Transition Elements",
            difficulty: "challenge",
            hints: [
              "Define a catalyst by what it does to rate and what happens to it.",
              "Use the equation ratio (2 H₂O₂ : 1 O₂) before converting to volume.",
              "Volume at RTP = moles × 24 000 cm³/mol.",
              "For (c), think about measuring its mass before and after."
            ],
            strategy: "Mole calculation: use the equation ratio, then volume = moles × 24 000",
            solutions: [
              {
                label: "Method: ratio then volume = moles × 24 000",
                steps: [
                  "Ratio from 2H₂O₂ → 2H₂O + O₂ is H₂O₂ : O₂ = 2 : 1",
                  "Moles of O₂ = 0.020 / 2 = 0.010 mol",
                  "Volume of O₂ = 0.010 × 24 000 = 240 cm³"
                ]
              }
            ]
          },
          {
            id: "chem-periodic-bq3-08",
            question: "(Challenge) A blue solution is found to contain a transition metal ion. A student suggests it could be iron(II).\n\n(a) Evaluate this suggestion, stating the colours associated with Fe²⁺ and Fe³⁺ in solution. [3]\n(b) Identify the transition metal ion most likely to give a blue solution. [1]\n(c) Describe a chemical test, with expected results, to distinguish Fe²⁺ from Fe³⁺. [3]",
            marks: 7,
            modelAnswer: "(a) The suggestion is incorrect. Iron(II) (Fe²⁺) solutions are pale green, not blue, and iron(III) (Fe³⁺) solutions are yellow-brown. Neither iron ion is blue, so the solution is unlikely to contain an iron ion at all.\n\n(b) A blue solution is most likely to contain copper(II) ions (Cu²⁺).\n\n(c) Add sodium hydroxide solution to a sample. Fe²⁺ gives a green precipitate of iron(II) hydroxide [Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s)]. Fe³⁺ gives a red-brown precipitate of iron(III) hydroxide [Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s)]. The colour of the precipitate distinguishes the two ions.",
            markScheme: [
              "(a) Suggestion is wrong (1); Fe²⁺ is pale green (1); Fe³⁺ is yellow-brown (1)",
              "(b) Copper(II) / Cu²⁺ (1)",
              "(c) Add sodium hydroxide solution (1); Fe²⁺ → green precipitate (1); Fe³⁺ → red-brown precipitate (1)"
            ],
            commonError: "Students often accept 'blue = iron' because copper(II) blue is famous but they associate the colour with whatever metal is mentioned in the question; check the actual ion colours.",
            guideRef: "Transition Elements",
            difficulty: "challenge",
            hints: [
              "Recall the actual colours of Fe²⁺ and Fe³⁺ in solution.",
              "Which transition metal ion is famously blue?",
              "Sodium hydroxide gives differently coloured precipitates with Fe²⁺ and Fe³⁺."
            ],
            strategy: "Use colour and precipitate tests as evidence; challenge the assumption"
          },
          {
            id: "chem-periodic-bq3-09",
            question: "Three industrial processes use transition-metal catalysts.\n\n(a) Name the catalyst used in the Haber process and write the equation for the reaction. [2]\n(b) Name the catalyst used in the Contact process. [1]\n(c) Name the catalyst used in the hydrogenation of vegetable oils and state the use of this process. [2]",
            marks: 5,
            modelAnswer: "(a) The catalyst is iron (Fe). The reaction is N₂(g) + 3H₂(g) ⇌ 2NH₃(g).\n\n(b) The catalyst in the Contact process is vanadium(V) oxide (V₂O₅).\n\n(c) The catalyst is nickel (Ni). The process hardens liquid vegetable oils into solid fats, used to make margarine.",
            markScheme: [
              "(a) Iron / Fe (1); N₂ + 3H₂ ⇌ 2NH₃ (1)",
              "(b) Vanadium(V) oxide / V₂O₅ (1)",
              "(c) Nickel / Ni (1); used to make margarine / harden oils into fats (1)"
            ],
            commonError: "Students sometimes swap the Haber and Contact catalysts; iron is for the Haber process and V₂O₅ for the Contact process.",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "The Haber process makes ammonia — which metal catalyses it?",
              "The Contact process makes sulfuric acid — which oxide catalyses it?",
              "Hardening oils into margarine uses which catalyst?"
            ]
          },
          {
            id: "chem-periodic-bq3-10",
            question: "Zinc lies in the d-block of the periodic table but does not show all the typical properties of a transition element.\n\n(a) State two typical transition-element properties that zinc does NOT show. [2]\n(b) State one property zinc does share with other d-block metals. [1]\n(c) Explain why, for IGCSE, it is still useful to recognise zinc as a special case rather than a typical transition metal. [2]",
            marks: 5,
            modelAnswer: "(a) Zinc does not show variable oxidation states (it forms only Zn²⁺) and does not form coloured compounds (its compounds are white/colourless).\n\n(b) Zinc shares properties such as being a fairly hard, dense metal with a relatively high melting point (or it has some catalytic uses), like other d-block metals.\n\n(c) Recognising zinc as a special case prevents the error of assuming every d-block metal must have variable oxidation states and coloured compounds. It shows that the 'typical' transition properties are general trends with exceptions, so each metal's actual behaviour should be checked rather than assumed.",
            markScheme: [
              "(a) Only one oxidation state / forms only Zn²⁺ (1); white/colourless compounds, not coloured (1)",
              "(b) Any valid shared property: hard / dense / fairly high melting point / metallic (1)",
              "(c) Avoids assuming all d-block metals are identical (1); typical properties are general trends with exceptions (1)"
            ],
            commonError: "Students often list coloured compounds and variable oxidation states as zinc properties; zinc is the common exception that lacks both.",
            guideRef: "Transition Elements",
            difficulty: "challenge",
            hints: [
              "Does zinc form more than one ion charge?",
              "Are zinc compounds coloured or white?",
              "Think about what shared d-block property zinc still keeps (e.g. hardness).",
              "Why is it useful to know the exceptions to a general rule?"
            ],
            strategy: "Recognise exceptions within a general pattern"
          }
        ]
      },
      {
        id: "chem-periodic-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Trends across a period and synoptic questions.",
        questions: [
          {
            id: "chem-periodic-bq4-01",
            question: "The elements of Period 3 are: Na, Mg, Al, Si, P, S, Cl, Ar.\n\n(a) Identify which of these are metals and which are non-metals. [2]\n(b) State how the metallic character changes across the period. [1]\n(c) State one physical property that is typical of the metals and one typical of the non-metals in this period. [2]",
            marks: 5,
            modelAnswer: "(a) Metals: Na, Mg, Al (Si is often classed as a metalloid/semi-metal). Non-metals: (Si,) P, S, Cl, Ar.\n\n(b) Metallic character decreases (and non-metallic character increases) from left to right across the period.\n\n(c) A metal property: good electrical conductivity / shiny / forms positive ions. A non-metal property: poor electrical conductor (insulator) / dull / forms negative ions or covalent bonds.",
            markScheme: [
              "(a) Metals Na, Mg, Al (1); non-metals P, S, Cl, Ar (Si as metalloid accepted) (1)",
              "(b) Metallic character decreases across the period (1)",
              "(c) Metal property e.g. conducts electricity / shiny (1); non-metal property e.g. does not conduct / dull (1)"
            ],
            commonError: "Students sometimes class silicon as a clear metal or non-metal; at IGCSE it is best described as a metalloid (semi-metal) with intermediate properties.",
            guideRef: "Trends Across a Period",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq4-02",
            question: "Across Period 3 the character of the oxides changes.\n\n(a) Name the type of oxide formed by sodium, by aluminium and by sulfur. [3]\n(b) Aluminium oxide reacts with both hydrochloric acid and sodium hydroxide. What term describes this behaviour? [1]",
            marks: 4,
            modelAnswer: "(a) Sodium oxide (Na₂O) is a basic oxide; aluminium oxide (Al₂O₃) is an amphoteric oxide; sulfur oxide (SO₃ or SO₂) is an acidic oxide.\n\n(b) Aluminium oxide is described as amphoteric (it reacts with both acids and bases).",
            markScheme: [
              "(a) Na₂O basic (1); Al₂O₃ amphoteric (1); SO₃/SO₂ acidic (1)",
              "(b) Amphoteric (1)"
            ],
            commonError: "Students sometimes call aluminium oxide 'neutral'; it is amphoteric, reacting with both acids and bases.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "Metals on the left form which type of oxide?",
              "Aluminium oxide is the special middle case.",
              "Non-metal oxides on the right dissolve to give acids."
            ]
          },
          {
            id: "chem-periodic-bq4-03",
            question: "The melting points of the Period 3 elements rise from sodium to a maximum at silicon and then fall sharply at phosphorus and sulfur.\n\n(a) Explain why the melting point rises from sodium to aluminium. [2]\n(b) Explain why silicon has a very high melting point. [2]\n(c) Explain why phosphorus and sulfur have much lower melting points than silicon. [2]",
            marks: 6,
            modelAnswer: "(a) Na, Mg and Al are metals with metallic bonding. From Na to Al the number of delocalised (outer) electrons per atom increases (1, 2 then 3) and the ions become smaller with a higher charge, so the metallic bond becomes stronger. Stronger bonding needs more energy to break, so the melting point rises.\n\n(b) Silicon has a giant covalent (macromolecular) structure in which each atom is covalently bonded to four others in a continuous network. A very large amount of energy is needed to break the many strong covalent bonds, so the melting point is very high.\n\n(c) Phosphorus (P₄) and sulfur (S₈) exist as simple molecules. The atoms within each molecule are covalently bonded, but the molecules are held to each other only by weak intermolecular (van der Waals) forces. Only a little energy is needed to overcome these weak forces, so the melting points are much lower than silicon's.",
            markScheme: [
              "(a) Metallic bonding; more delocalised electrons / smaller more highly charged ions from Na to Al (1); stronger metallic bond → higher melting point (1)",
              "(b) Giant covalent / macromolecular structure with strong covalent bonds (1); large energy needed to break many bonds → very high melting point (1)",
              "(c) P₄ / S₈ are simple molecules (1); weak intermolecular forces between molecules → little energy to overcome → low melting point (1)"
            ],
            commonError: "For (c) students often say 'phosphorus has weak bonds'; the covalent bonds within P₄ are strong — it is the forces BETWEEN molecules that are weak.",
            guideRef: "Trends Across a Period",
            difficulty: "challenge",
            hints: [
              "Na, Mg, Al are metals — what kind of bonding, and how does it change across them?",
              "Silicon's structure is like diamond — a giant network.",
              "P and S are made of small molecules — what holds the molecules to each other?",
              "Distinguish the strong bonds WITHIN molecules from the weak forces BETWEEN them."
            ],
            strategy: "Link melting point to structure type: metallic, giant covalent, simple molecular"
          },
          {
            id: "chem-periodic-bq4-04",
            question: "Use the periodic table positions of the elements to answer the following.\n\n(a) Predict the formula of the compound formed between magnesium (Group II) and oxygen (Group VI). Show your reasoning. [2]\n(b) Predict the formula of the compound formed between aluminium (Group III) and chlorine (Group VII). Show your reasoning. [2]\n(c) Explain why argon does not form a compound with any of these elements. [1]",
            marks: 5,
            modelAnswer: "(a) Magnesium forms Mg²⁺ (loses 2 electrons) and oxygen forms O²⁻ (gains 2 electrons). The charges balance one-to-one, so the formula is MgO.\n\n(b) Aluminium forms Al³⁺ (loses 3 electrons) and chlorine forms Cl⁻ (gains 1 electron). To balance the 3+ charge, three Cl⁻ are needed, giving AlCl₃.\n\n(c) Argon is a noble gas with a full outer electron shell, so it has no tendency to gain, lose or share electrons and therefore forms no compounds.",
            markScheme: [
              "(a) Mg²⁺ and O²⁻ identified (1); formula MgO (1)",
              "(b) Al³⁺ and Cl⁻ identified (1); formula AlCl₃ (1)",
              "(c) Argon has a full outer shell / is inert, so forms no compounds (1)"
            ],
            commonError: "Students sometimes write Mg₂O₂ for magnesium oxide; the formula should always be written in its simplest whole-number ratio (MgO).",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "core",
            hints: [
              "Use the group number to find each ion's charge.",
              "Combine the ions so the total positive and negative charges cancel.",
              "For (c), what is special about argon's outer shell?"
            ],
            strategy: "Predict valency from group number, then balance the charges"
          },
          {
            id: "chem-periodic-bq4-05",
            question: "An unknown element E is in Period 3. The following clues are given: E is a solid that conducts electricity; its oxide reacts with both hydrochloric acid and sodium hydroxide; it forms a 3+ ion.\n\n(a) Identify element E and give its group. [2]\n(b) Explain how each clue points to your answer. [3]",
            marks: 5,
            modelAnswer: "(a) Element E is aluminium (Al), in Group III.\n\n(b) 'Solid that conducts electricity' shows E is a metal. 'Oxide reacts with both acid and base' shows the oxide is amphoteric, which is characteristic of aluminium oxide. 'Forms a 3+ ion' shows E has 3 outer electrons, placing it in Group III. Together these clues uniquely identify aluminium.",
            markScheme: [
              "(a) Aluminium / Al (1); Group III (1)",
              "(b) Conducts → metal (1); amphoteric oxide → aluminium oxide (1); 3+ ion → Group III / 3 outer electrons (1)"
            ],
            commonError: "Students may choose sodium or magnesium; only aluminium has an amphoteric oxide and forms a 3+ ion.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "A conductor that is a solid is a metal.",
              "An oxide reacting with both acid and base is amphoteric — which element fits?",
              "A 3+ ion means 3 outer electrons — which group?"
            ]
          },
          {
            id: "chem-periodic-bq4-06",
            question: "Compare the trends in reactivity down Group I and down Group VII.\n\n(a) State how reactivity changes down each group. [2]\n(b) Explain, in terms of electron transfer, why the two trends are in opposite directions. [4]",
            marks: 6,
            modelAnswer: "(a) Reactivity increases down Group I; reactivity decreases down Group VII.\n\n(b) Group I metals react by LOSING their single outer electron. Down the group there are more shells, so the outer electron is further from the nucleus and more shielded; it is therefore lost more easily, so reactivity increases. Group VII non-metals react by GAINING one electron. Down the group the incoming electron is added to a shell further from the nucleus and more shielded; it is therefore gained less easily, so reactivity decreases. Because one group loses an electron and the other gains one, the same increase in atomic size and shielding makes Group I more reactive but Group VII less reactive — opposite trends.",
            markScheme: [
              "(a) Group I reactivity increases down the group (1); Group VII reactivity decreases down the group (1)",
              "(b) Group I reacts by losing an electron (1); easier to lose down the group (further/more shielded) → more reactive (1)",
              "(b) Group VII reacts by gaining an electron (1); harder to gain down the group (further/more shielded) → less reactive (1)"
            ],
            commonError: "Students often explain both groups in the same way; the key is that Group I LOSES an electron while Group VII GAINS one, so the same size change has opposite effects.",
            guideRef: "Group VII — The Halogens",
            difficulty: "challenge",
            hints: [
              "State the two opposite trends first.",
              "Group I reacts by losing an electron — is that easier or harder down the group?",
              "Group VII reacts by gaining an electron — is that easier or harder down the group?",
              "Explain how losing vs gaining produces opposite trends from the same cause."
            ],
            strategy: "Contrast electron loss (Group I) with electron gain (Group VII)"
          },
          {
            id: "chem-periodic-bq4-07",
            question: "A teacher reacts 0.48 g of magnesium (Group II) with excess hydrochloric acid: Mg + 2HCl → MgCl₂ + H₂. (Ar of Mg = 24; molar gas volume = 24 000 cm³/mol.)\n\n(a) Calculate the moles of magnesium used. [1]\n(b) Calculate the volume of hydrogen produced at RTP. [3]\n(c) Explain why the formula of the salt is MgCl₂ using the group numbers of magnesium and chlorine. [2]",
            marks: 6,
            modelAnswer: "(a) Moles of Mg = mass / Ar = 0.48 / 24 = 0.020 mol.\n\n(b) From the equation, 1 mol Mg produces 1 mol H₂, so moles of H₂ = 0.020 mol. Volume = moles × 24 000 = 0.020 × 24 000 = 480 cm³.\n\n(c) Magnesium is in Group II, so it forms Mg²⁺ (loses 2 electrons). Chlorine is in Group VII, so it forms Cl⁻ (gains 1 electron). Two chloride ions are needed to balance the 2+ charge on magnesium, giving the formula MgCl₂.",
            markScheme: [
              "(a) Moles Mg = 0.48 / 24 = 0.020 mol (1)",
              "(b) Ratio Mg : H₂ = 1 : 1, moles H₂ = 0.020 mol (1); volume = moles × 24 000 (1); = 480 cm³ (1)",
              "(c) Mg²⁺ from Group II and Cl⁻ from Group VII (1); two Cl⁻ balance one Mg²⁺ → MgCl₂ (1)"
            ],
            commonError: "In (b) the ratio of Mg to H₂ is 1:1 (unlike the 2:1 ratio for Group I metals); some students wrongly halve the moles of hydrogen here.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "challenge",
            hints: [
              "Moles = mass / Ar.",
              "Check the ratio of Mg to H₂ in the balanced equation (it is 1:1 here).",
              "Volume at RTP = moles × 24 000 cm³/mol.",
              "For (c), use the group numbers to find the ion charges."
            ],
            strategy: "Mole calculation: read the ratio from the balanced equation each time",
            solutions: [
              {
                label: "Method: mass → moles → ratio → volume",
                steps: [
                  "Moles of Mg = 0.48 / 24 = 0.020 mol",
                  "Ratio from Mg + 2HCl → MgCl₂ + H₂ is Mg : H₂ = 1 : 1",
                  "Moles of H₂ = 0.020 mol",
                  "Volume of H₂ = 0.020 × 24 000 = 480 cm³"
                ]
              }
            ]
          },
          {
            id: "chem-periodic-bq4-08",
            question: "(Challenge) A student is given four elements labelled W, X, Y and Z with these clues: W is a soft metal that fizzes vigorously in water; X is a yellow-green gas that bleaches damp litmus; Y is an unreactive gas used in light bulbs; Z is a hard, dense metal that forms a green and a yellow-brown compound and catalyses a reaction.\n\n(a) State the group or block of the periodic table each element belongs to. [4]\n(b) For element Z, name the two ions responsible for the green and yellow-brown colours. [2]\n(c) Predict whether W or X is more reactive with respect to its own group trend if you moved one place DOWN the table, and justify each prediction. [2]",
            marks: 8,
            modelAnswer: "(a) W is in Group I (soft, very reactive metal that fizzes in water). X is in Group VII (yellow-green gas that bleaches litmus — chlorine). Y is in Group 0 (unreactive gas used in light bulbs — argon). Z is a transition element / d-block metal (hard, dense, coloured compounds, catalytic).\n\n(b) The green compound contains Fe²⁺ (iron(II)) ions and the yellow-brown compound contains Fe³⁺ (iron(III)) ions, so Z is iron.\n\n(c) Moving one place DOWN Group I, W would become MORE reactive (the outer electron is further from the nucleus and more shielded, so lost more easily). Moving one place DOWN Group VII, X would become LESS reactive (the incoming electron is added further from the nucleus and more shielded, so gained less easily).",
            markScheme: [
              "(a) W Group I (1); X Group VII (1); Y Group 0 (1); Z transition / d-block (1)",
              "(b) Green = Fe²⁺ / iron(II) (1); yellow-brown = Fe³⁺ / iron(III) (1)",
              "(c) W more reactive down Group I — easier electron loss (1); X less reactive down Group VII — harder electron gain (1)"
            ],
            commonError: "In (c) students sometimes apply the same direction of trend to both groups; remember Group I reactivity increases down while Group VII decreases down.",
            guideRef: "Transition Elements",
            difficulty: "challenge",
            hints: [
              "Match each described property to a part of the periodic table.",
              "A metal with a green and a yellow-brown compound is a familiar transition metal.",
              "For (c), recall the opposite reactivity trends of Group I and Group VII.",
              "Justify each using whether an electron is lost or gained."
            ],
            strategy: "Combine multiple clues; apply the correct group trend to each element"
          },
          {
            id: "chem-periodic-bq4-09",
            question: "Across Period 3 the electrical conductivity of the elements changes.\n\n(a) State which Period 3 elements are good electrical conductors. [1]\n(b) Explain why metals such as sodium and aluminium conduct electricity. [2]\n(c) Explain why sulfur and chlorine do not conduct electricity. [2]",
            marks: 5,
            modelAnswer: "(a) The metals sodium, magnesium and aluminium are good conductors (silicon is a semiconductor; it conducts only slightly).\n\n(b) In metals such as sodium and aluminium there is a 'sea' of delocalised (free-moving) outer electrons. These mobile electrons can move through the structure and carry charge, so the metal conducts electricity.\n\n(c) Sulfur and chlorine are non-metals that exist as simple molecules (S₈ and Cl₂). They have no delocalised electrons and no free-moving ions, so there are no charged particles able to move and carry current, and they do not conduct.",
            markScheme: [
              "(a) Na, Mg, Al (metals) conduct (1)",
              "(b) Metals have delocalised / free / mobile outer electrons (1); these move and carry charge (1)",
              "(c) Non-metals / simple molecules with no free electrons or ions (1); no charged particles free to move → no conduction (1)"
            ],
            commonError: "Students sometimes say non-metals 'do not have electrons'; they have electrons, but the electrons are not delocalised/free to move.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "Which side of the period holds the metals?",
              "What carries the charge in a metal?",
              "Do the non-metal molecules have any free-moving charged particles?"
            ]
          },
          {
            id: "chem-periodic-bq4-10",
            question: "(Challenge) The table gives the melting points of four Period 3 elements: sodium 98 °C, aluminium 660 °C, silicon 1414 °C, sulfur 115 °C.\n\n(a) Explain why aluminium has a higher melting point than sodium. [2]\n(b) Explain why silicon has by far the highest melting point. [2]\n(c) Sulfur has a higher melting point than sodium even though sulfur is a non-metal. Explain how this is possible given that sulfur exists as simple molecules. [2]",
            marks: 6,
            modelAnswer: "(a) Both are metals with metallic bonding. Aluminium provides 3 delocalised electrons per atom while sodium provides only 1, and the Al³⁺ ion is smaller and more highly charged than Na⁺. The metallic bond in aluminium is therefore much stronger, needing more energy to break, so aluminium has the higher melting point.\n\n(b) Silicon has a giant covalent (macromolecular) structure in which every atom is covalently bonded to four others. Melting requires breaking very many strong covalent bonds throughout the structure, which needs a huge amount of energy, so silicon's melting point is by far the highest.\n\n(c) Sulfur exists as S₈ molecules held together by weak intermolecular forces, but these S₈ molecules are quite large (each has eight sulfur atoms and many electrons). The intermolecular forces, although weak compared with covalent bonds, are stronger than for very small molecules, and are enough to give sulfur a melting point a little above that of sodium. The forces overcome on melting are still only the weak intermolecular forces, not covalent bonds.",
            markScheme: [
              "(a) Aluminium has more delocalised electrons / smaller, more highly charged ion than sodium (1); stronger metallic bond → higher melting point (1)",
              "(b) Giant covalent structure / many strong covalent bonds (1); large energy to break them → highest melting point (1)",
              "(c) S₈ are relatively large molecules / more electrons → larger intermolecular forces than tiny molecules (1); only weak intermolecular forces (not covalent bonds) are overcome on melting (1)"
            ],
            commonError: "For (c) students may claim sulfur has strong covalent bonds broken on melting; only the weak intermolecular forces between S₈ molecules are overcome, not the covalent S–S bonds within them.",
            guideRef: "Trends Across a Period",
            difficulty: "challenge",
            hints: [
              "For (a), compare the number of delocalised electrons and ion charge in Na and Al.",
              "For (b), recall silicon's giant covalent structure.",
              "For (c), think about the SIZE of an S₈ molecule and how that affects intermolecular forces.",
              "Distinguish covalent bonds within molecules from forces between them."
            ],
            strategy: "Link melting point to structure and to molecule size for intermolecular forces"
          }
        ]
      }
    ]
  },
};
