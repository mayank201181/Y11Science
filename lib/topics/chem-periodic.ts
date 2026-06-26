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

**Physical observations**: Li — slow fizzing, stays solid; Na — faster fizzing, melts to a ball; K — very fast, purple/lilac flame, may explode.`,
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
        "The hydroxide solution formed is strongly alkaline."
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

This is a **redox** reaction: Cl₂ is reduced (gains electrons); Br⁻ is oxidised (loses electrons). Bromine does NOT displace chloride (Cl⁻), because Br₂ is less reactive than Cl₂.`,
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
        "Reactivity decreases because the incoming electron is added to a shell further from the nucleus (more shielding), making electron gain harder."
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
      "Group 0 noble gases have full outer shells and are chemically inert.",
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
        description: "Arrangement of the periodic table, Group I, and Group VII fundamentals.",
        questions: [
          {
            id: "chem-periodic-bm1-01",
            question: "An element has the electron configuration 2,8,1. To which group and period does it belong?",
            options: [
              "Group I, Period 3",
              "Group III, Period 2",
              "Group I, Period 2",
              "Group III, Period 3"
            ],
            answerIndex: 0,
            explanation: "The element has 3 electron shells (period 3) and 1 outer electron (Group I). This is sodium (Na), proton number 11.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bank-mcq1-q02",
            question: "Which of the following correctly describes what happens when lithium is placed in water?",
            options: [
              "Lithium burns with a lilac flame and sinks",
              "Lithium floats, fizzes steadily, and the solution becomes alkaline",
              "Lithium sinks immediately and reacts explosively",
              "Lithium dissolves without any gas being produced"
            ],
            answerIndex: 1,
            explanation: "Lithium (least reactive of the three common Group I metals) floats (low density), reacts steadily producing H₂ gas (fizzing), and the LiOH produced makes the solution alkaline. The lilac flame and explosion are characteristics of potassium, not lithium.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bank-mcq1-q03",
            question: "Which equation correctly represents sodium reacting with water?",
            options: [
              "Na + H₂O → NaOH + H₂",
              "2Na + 2H₂O → 2NaOH + H₂",
              "2Na + H₂O → Na₂O + H₂",
              "Na + 2H₂O → Na(OH)₂ + H₂"
            ],
            answerIndex: 1,
            explanation: "The balanced equation is 2Na + 2H₂O → 2NaOH + H₂. One formula unit of H₂ is produced per two sodium atoms. Option A is unbalanced (hydrogen not balanced); C and D give wrong products.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "Count atoms on each side — start with Na.",
              "How many H atoms are on the left? How many on the right?",
              "Remember H₂ has 2 hydrogen atoms."
            ]
          },
          {
            id: "chem-periodic-bank-mcq1-q04",
            question: "Which halogen would you expect to be the MOST reactive?",
            options: ["Iodine (I₂)", "Bromine (Br₂)", "Chlorine (Cl₂)", "Astatine (At₂)"],
            answerIndex: 2,
            explanation: "Reactivity decreases down Group VII. Chlorine is above bromine and iodine in the group. Fluorine (not listed) is even more reactive than Cl₂. Astatine is the least reactive of the four.",
            guideRef: "Group VII — The Halogens",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bank-mcq1-q05",
            question: "Which of the following mixtures would produce a colour change?",
            options: [
              "Iodine solution added to potassium chloride solution",
              "Bromine water added to potassium chloride solution",
              "Chlorine water added to potassium bromide solution",
              "Iodine solution added to potassium bromide solution"
            ],
            answerIndex: 2,
            explanation: "Chlorine is more reactive than bromine, so Cl₂ displaces Br⁻ to give Br₂, producing an orange-brown colour. In the other options, the halogen is less reactive than the halide and cannot displace it.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "Write out reactivity order: Cl > Br > I.",
              "A displacement occurs only if the halogen is MORE reactive than the halide ion in solution.",
              "Check each option against the rule."
            ]
          },
          {
            id: "chem-periodic-bank-mcq1-q06",
            question: "The transition metal copper forms two common ions: Cu⁺ and Cu²⁺. This illustrates which characteristic property of transition elements?",
            options: [
              "High melting point",
              "Catalytic activity",
              "Formation of coloured compounds",
              "Variable oxidation states"
            ],
            answerIndex: 3,
            explanation: "The ability to form ions with different charges (Cu⁺ and Cu²⁺) is variable oxidation states — a hallmark of transition metals. High melting points and catalytic activity are separate properties; coloured compounds refers to the colour of the ions, not to them having different charges.",
            guideRef: "Transition Elements",
            difficulty: "warmup"
          }
        ]
      },
      {
        id: "chem-periodic-bank-mcq-2",
        title: "Periodic Table — MCQ Paper 2",
        description: "Noble gases, trends across periods, and deeper application.",
        questions: [
          {
            id: "chem-periodic-bank-mcq2-q01",
            question: "Neon is used in electric discharge tubes. Which property makes it suitable for this use?",
            options: [
              "Neon is very light and rises to the top of the tube",
              "Neon glows when electricity passes through it and is chemically unreactive",
              "Neon reacts with the glass to produce a bright colour",
              "Neon conducts electricity very well"
            ],
            answerIndex: 1,
            explanation: "Neon emits a characteristic red-orange glow when excited by an electric current (discharge). Its chemical inertness ensures it does not react with the tube electrodes or the glass. Noble gases are poor conductors and do not react with glass.",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bank-mcq2-q02",
            question: "Across Period 3 (from Na to Ar), which trend in oxide character is correct?",
            options: [
              "Basic → amphoteric → acidic",
              "Acidic → neutral → basic",
              "Acidic → amphoteric → basic",
              "Basic → acidic → neutral"
            ],
            answerIndex: 0,
            explanation: "Going across Period 3: Na₂O and MgO are basic; Al₂O₃ is amphoteric; SiO₂, P₄O₁₀, SO₃ are acidic; Ar has no oxide. The trend is basic → amphoteric → acidic.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "Start on the left (Na): is Na₂O basic, acidic, or neutral?",
              "Move to Al (middle of metals): Al₂O₃ is special — what term describes it?",
              "Move to P and S on the right: do their oxides dissolve in water to form acids?"
            ]
          },
          {
            id: "chem-periodic-bank-mcq2-q03",
            question: "Why do noble gases not form chemical bonds under ordinary conditions?",
            options: [
              "They have very small atomic radii",
              "They have full outer electron shells and no tendency to gain, lose, or share electrons",
              "They are gases at room temperature",
              "They have very high ionisation energies only because they are monatomic"
            ],
            answerIndex: 1,
            explanation: "The full outer shell (2 for He; 8 for Ne, Ar etc.) means there is no energetic advantage in gaining, losing, or sharing electrons. Being a gas or being monatomic is a consequence of inertness, not its cause.",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bank-mcq2-q04",
            question: "Iron(III) chloride (FeCl₃) solution is yellow-brown. This observation is evidence for which property of iron?",
            options: [
              "High melting point",
              "Variable oxidation states",
              "Coloured compounds",
              "Catalytic activity"
            ],
            answerIndex: 2,
            explanation: "The yellow-brown colour of Fe³⁺ ions in solution is direct evidence that transition metal compounds are coloured. Variable oxidation states is also relevant to iron (Fe²⁺ and Fe³⁺ both exist), but the observation being described — a colour — specifically evidences the 'coloured compounds' property.",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "The question asks what the COLOUR tells you.",
              "Which property of transition metals is directly about colour?"
            ]
          },
          {
            id: "chem-periodic-bank-mcq2-q05",
            question: "A student wants to test whether an unknown halogen X is more or less reactive than bromine. She adds X to potassium bromide solution and observes an orange-brown colour developing. What can she conclude?",
            options: [
              "X is less reactive than bromine — the bromine is producing the colour",
              "X is more reactive than bromine — it has displaced bromide ions to form Br₂",
              "X is the same as bromine — Br₂ is always present in KBr solution",
              "X is less reactive than iodine — the colour indicates iodine formation"
            ],
            answerIndex: 1,
            explanation: "The orange-brown colour indicates Br₂ has formed. Br₂ can only be produced if X displaced Br⁻ ions from solution. For displacement to occur, X must be MORE reactive than bromine. Orange-brown specifically indicates Br₂, not I₂ (which is dark brown/black).",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "If a colour appears, a reaction has occurred.",
              "Orange-brown indicates Br₂ has been produced.",
              "For Br₂ to be produced from KBr, something must have displaced Br⁻.",
              "What does displacement require about the reactivity of X compared to Br?"
            ]
          },
          {
            id: "chem-periodic-bank-mcq2-q06",
            question: "Rubidium (Rb) is in Period 5, Group I. Which statement about rubidium is most likely to be correct?",
            options: [
              "Rb reacts less vigorously with water than potassium does",
              "Rb forms Rb²⁺ ions in its compounds",
              "Rb has a higher melting point than sodium",
              "Rb reacts with water to form rubidium hydroxide and hydrogen, more vigorously than potassium"
            ],
            answerIndex: 3,
            explanation: "Rb is below K in Group I, so it is MORE reactive (reactivity increases down Group I). It still reacts with water to form MOH + H₂ (all Group I metals do). Group I metals always form M⁺ ions, not M²⁺. Melting point decreases down Group I, so Rb has a LOWER melting point than Na.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "challenge",
            hints: [
              "Rb is below K in Group I — does reactivity increase or decrease going down?",
              "All Group I metals form 1+ ions — Rb cannot form Rb²⁺.",
              "Melting points in Group I decrease going down the group.",
              "The reaction type (metal + water → hydroxide + H₂) is the same for all Group I metals."
            ],
            strategy: "Extend group trends to an unfamiliar element"
          }
        ]
      }
    ],
    qaPapers: [
      {
        id: "chem-periodic-bank-qa-1",
        title: "Periodic Table — Structured Questions Paper 1",
        description: "Group trends, displacement reactions, and noble gas uses.",
        questions: [
          {
            id: "chem-periodic-bank-qa1-q01",
            question: "The table below shows some properties of Group I elements.\n\nLithium: reacts steadily with water; melting point 181 °C\nSodium: reacts vigorously with water; melting point 98 °C\nPotassium: reacts very vigorously with water; melting point 63 °C\n\n(a) Describe the trend in reactivity and the trend in melting point going down Group I. [2]\n(b) Explain why reactivity increases going down Group I, using electron configuration. [3]\n(c) Write a balanced chemical equation, with state symbols, for potassium reacting with water. [2]",
            marks: 7,
            modelAnswer: "(a) Reactivity increases going down Group I (Li → Na → K). Melting point decreases going down Group I (181 → 98 → 63 °C).\n\n(b) Going down Group I, each element has one more electron shell. The outer electron is therefore further from the nucleus. The inner shells provide increased electron shielding, reducing the effective nuclear attraction on the outer electron. The outer electron is lost more easily, so the element is more reactive.\n\n(c) 2K(s) + 2H₂O(l) → 2KOH(aq) + H₂(g)",
            markScheme: [
              "(a) Reactivity increases down the group (1); melting point decreases down the group (1)",
              "(b) More electron shells / outer electron further from nucleus (1); greater shielding by inner shells (1); outer electron lost more easily / lower ionisation energy → higher reactivity (1)",
              "(c) Correct formula for all species: 2K + 2H₂O → 2KOH + H₂ (1); correct state symbols: (s)(l)(aq)(g) (1)"
            ],
            commonError: "For part (b), many students omit shielding and only mention the distance — both distance AND shielding are needed for full marks. For part (c), students often forget to balance (writing K + H₂O → KOH + H₂) or omit state symbols.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "(a) Simply read the trend from the data — is reactivity going up or down?",
              "(b) Think: what changes with each new period? (number of shells) → what does that do to the outer electron?",
              "(b) Remember to mention shielding explicitly.",
              "(c) Balance Na first, then count H and O to balance."
            ]
          },
          {
            id: "chem-periodic-bank-qa1-q02",
            question: "A student has four solutions: potassium chloride (KCl), potassium bromide (KBr), potassium iodide (KI), and an unknown potassium halide (KX). She adds chlorine water to each.\n\n(a) State the colour change (if any) in the KBr tube and write the ionic equation for the reaction. [3]\n(b) The unknown solution KX turns orange-brown when chlorine water is added. Identify element X and explain your reasoning. [3]\n(c) Explain, in terms of electron configuration, why chlorine is more reactive than bromine. [3]",
            marks: 9,
            modelAnswer: "(a) The KBr solution turns orange-brown. This is because Cl₂ displaces Br⁻ ions, producing Br₂.\nIonic equation: Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq)\n\n(b) X is bromine (Br). The orange-brown colour indicates Br₂ has been produced. Since chlorine displaced X⁻ to produce X₂ which is orange-brown, X must be the halide that produces an orange-brown halogen — i.e. bromine. X could not be iodine (I₂ is dark brown/black) or chlorine (Cl₂ cannot displace itself).\n\n(c) Chlorine has 3 electron shells; bromine has 4. In bromine, the outer shell (and the electron shell into which an incoming electron is gained) is further from the nucleus. There is also greater electron shielding from more inner shells, reducing the effective nuclear charge experienced by the incoming electron. So bromine gains electrons less easily than chlorine — chlorine is more reactive.",
            markScheme: [
              "(a) Orange-brown colour appears (1); correct ionic equation: Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq) — accept unbalanced for 1 mark, award 2 for balanced with states (2)",
              "(b) X is bromine (1); orange-brown identifies Br₂ (1); reason that Cl₂ must have displaced Br⁻ because Br₂ is produced (1)",
              "(c) Cl has fewer shells than Br / incoming electron added to shell closer to nucleus in Cl (1); less shielding in Cl (1); incoming electron gained more easily in Cl / Cl is more reactive (1)"
            ],
            commonError: "In (b), students sometimes say X is iodine without checking the colour — iodine gives dark brown, not orange-brown. In (c), students confuse gaining electrons (halogens) with losing electrons (alkali metals) — halogens react by GAINING an electron.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "(a) Is Cl more or less reactive than Br? If more reactive, it displaces Br⁻.",
              "(a) For the ionic equation, remove the spectator ions (K⁺).",
              "(b) The product colour uniquely identifies which halogen was formed.",
              "(c) Think about what halogens do to react — they GAIN electrons; consider how easy this is in each element."
            ]
          },
          {
            id: "chem-periodic-bank-qa1-q03",
            question: "Helium, neon, and argon are all noble gases.\n\n(a) State why noble gases are chemically unreactive. [1]\n(b) Explain why helium is used in weather balloons rather than hydrogen, even though hydrogen is lighter. [2]\n(c) Explain why argon, rather than air, is used inside incandescent light bulbs. [2]\n(d) Boiling points of noble gases: He −269 °C, Ne −246 °C, Ar −186 °C, Kr −153 °C. Describe and explain the trend. [2]",
            marks: 7,
            modelAnswer: "(a) Noble gases have full outer electron shells and therefore have no tendency to gain, lose, or share electrons — they form no chemical bonds.\n\n(b) Helium is unreactive/inert. Hydrogen is flammable and can ignite or explode if it mixes with air. Helium provides lift (it is less dense than air) without any fire risk, making it far safer for weather balloons.\n\n(c) The tungsten filament becomes very hot. Air contains oxygen, which would react with (oxidise) the hot filament, causing it to burn away quickly. Argon is chemically inert and will not react with the filament, greatly extending the bulb's lifetime.\n\n(d) Boiling point increases going down the group. As the atoms get larger (more electrons), the London dispersion forces (van der Waals forces) between atoms increase. More energy is needed to overcome these forces, so boiling point rises.",
            markScheme: [
              "(a) Full outer electron shell / no tendency to gain or lose electrons (1)",
              "(b) Hydrogen is flammable / explosive (1); helium is inert/non-flammable and still less dense than air / provides sufficient lift (1)",
              "(c) Hot filament would be oxidised by oxygen in air (1); argon is inert / does not react with the filament (1)",
              "(d) Boiling point increases down the group (1); larger atoms have more electrons → stronger London dispersion forces → more energy needed to vaporise (1)"
            ],
            commonError: "For (b), students often just say 'helium is safer' without explaining WHY hydrogen is unsafe (flammability) and WHY helium still works (it is still less dense than air). For (d), students may forget to name the type of force (London dispersion / van der Waals).",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "core",
            hints: [
              "(a) Think about the outer electron shell — is it full or incomplete?",
              "(b) What happens when hydrogen catches fire? Is helium also flammable?",
              "(c) What does the oxygen in air do to hot metal?",
              "(d) As atoms get bigger, what happens to the forces between them?"
            ]
          },
          {
            id: "chem-periodic-bank-qa1-q04",
            question: "(Challenge) A student dissolves a small amount of an iron compound in water. The resulting solution is blue. Another student claims this proves the compound contains iron(II) ions (Fe²⁺). Evaluate this claim. In your answer, explain what the colour does and does not tell you, and suggest how you could confirm which iron ion is present.",
            marks: 6,
            modelAnswer: "The claim is incorrect. A blue solution does not indicate Fe²⁺ ions. Fe²⁺ (iron(II)) solutions are typically pale green, not blue. Fe³⁺ (iron(III)) solutions are yellow-brown. A blue colour in a solution containing a transition metal is most commonly produced by Cu²⁺ (copper(II)) ions. The colour of a solution indicates which ion is present, but a blue colour specifically does not correspond to iron ions at all — it points to copper.\n\nTo confirm which iron ion is present, you could add sodium hydroxide solution (NaOH). Fe²⁺ ions produce a green precipitate of iron(II) hydroxide: Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s). Fe³⁺ ions produce a red-brown precipitate of iron(III) hydroxide: Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s). Alternatively, the solid compound could be analysed — iron(II) compounds contain Fe with oxidation state +2, and iron(III) with +3.",
            markScheme: [
              "The claim is wrong — a blue colour does NOT indicate Fe²⁺ (1)",
              "Fe²⁺ is pale green; Fe³⁺ is yellow-brown — state the correct colour of each (1)",
              "Blue colour is characteristic of Cu²⁺ (copper(II)) ions (1)",
              "Suggest adding NaOH solution as a test (1)",
              "Fe²⁺ + NaOH → green precipitate Fe(OH)₂ (1)",
              "Fe³⁺ + NaOH → red-brown precipitate Fe(OH)₃ (1)"
            ],
            commonError: "Many students accept that blue = iron(II) without challenging it. This is a classic colour confusion — copper(II) blue is very well known but students conflate it with iron when iron is mentioned in context.",
            guideRef: "Transition Elements",
            difficulty: "challenge",
            hints: [
              "What colour is actually associated with Fe²⁺ ions in solution?",
              "What transition metal ion is famously blue in solution?",
              "Could the compound contain copper rather than iron?",
              "Think: how could you test for the presence of Fe²⁺ versus Fe³⁺ using a reagent you know?"
            ],
            strategy: "Challenge assumptions; use colour evidence critically"
          }
        ]
      },
      {
        id: "chem-periodic-bank-qa-2",
        title: "Periodic Table — Structured Questions Paper 2",
        description: "Trends across periods, synoptic and challenge questions.",
        questions: [
          {
            id: "chem-periodic-bank-qa2-q01",
            question: "The elements in Period 3 are: Na, Mg, Al, Si, P, S, Cl, Ar.\n\n(a) State two differences in physical properties between sodium (Na) and chlorine (Cl) that reflect their positions in the periodic table. [2]\n(b) Describe the change in oxide character from sodium oxide (Na₂O) to sulfur trioxide (SO₃). Give the name of each type of oxide. [3]\n(c) Silicon has a very high melting point (1414 °C), whereas phosphorus melts at only 44 °C. Explain this difference in terms of structure and bonding. [3]",
            marks: 8,
            modelAnswer: "(a) Any two: Sodium is a solid at room temperature; chlorine is a gas. Sodium conducts electricity; chlorine does not. Sodium has a high melting point (98 °C); chlorine has a very low boiling point (−34 °C). Sodium is shiny/lustrous; chlorine is not metallic in appearance.\n\n(b) Na₂O is a basic oxide — it reacts with acids but not bases. Al₂O₃ is an amphoteric oxide — it reacts with both acids and bases. SO₃ is an acidic oxide — it reacts with water to form sulfuric acid and reacts with bases but not acids. The oxide character changes from basic (left of period) through amphoteric (Al) to acidic (right of period).\n\n(c) Silicon has a giant covalent (macromolecular) structure in which every silicon atom is covalently bonded to four others in a continuous three-dimensional network. A very large amount of energy is needed to break these strong covalent bonds, so the melting point is very high. Phosphorus (P₄) exists as simple molecules held together only by weak London dispersion (van der Waals) forces between P₄ molecules. Little energy is needed to overcome these weak forces, so phosphorus has a very low melting point.",
            markScheme: [
              "(a) Any two valid physical property differences with Na and Cl correctly contrasted, e.g. state (solid vs gas), conductivity (conducts vs does not), melting/boiling point (high vs very low) — 1 mark each (2)",
              "(b) Na₂O: basic oxide (1); Al₂O₃: amphoteric oxide (1); SO₃: acidic oxide (1)",
              "(c) Si: giant covalent structure / strong covalent bonds throughout / much energy to break bonds → high mp (1–2); P: simple molecular / P₄ molecules / weak van der Waals forces between molecules / little energy to break forces → low mp (1–2) — max 3"
            ],
            commonError: "For (c), students often say 'silicon has strong bonds' without specifying it is a GIANT COVALENT structure (the key term). For phosphorus, students often say 'weak bonds' — the mark requires 'weak intermolecular forces' because the P–P bonds within P₄ are covalent; it is the forces BETWEEN molecules that are weak.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "(a) Na is on the left (metal); Cl is on the right (non-metal) — list properties that differ between metals and non-metals.",
              "(b) Na₂O + acid → ? ; SO₃ + water → ?, what type is each?",
              "(c) Ask: does Si have individual molecules or a network? What about P?"
            ]
          },
          {
            id: "chem-periodic-bank-qa2-q02",
            question: "Vanadium (V) and manganese (Mn) are transition elements.\n\n(a) State three properties you would expect vanadium to have as a transition element. [3]\n(b) Vanadium(V) oxide (V₂O₅) is used as a catalyst in the Contact process. Write the equation for the reaction it catalyses and state the industrial product made. [2]\n(c) MnO₄⁻ (manganate(VII) ion) is intensely purple, while Mn²⁺ is very pale pink. What does this demonstrate about manganese? [1]\n(d) Explain why transition metals are generally more useful as structural materials than Group I metals such as sodium. [3]",
            marks: 9,
            modelAnswer: "(a) Any three: high melting point / high density / hard; variable oxidation states (e.g. V²⁺, V³⁺, V⁴⁺, V⁵⁺); coloured compounds/ions; ability to act as a catalyst (or its compounds can).\n\n(b) 2SO₂(g) + O₂(g) ⇌ 2SO₃(g). The industrial product is sulfur trioxide, which is then converted to sulfuric acid (H₂SO₄).\n\n(c) Manganese has variable oxidation states: Mn⁷⁺ in MnO₄⁻ and Mn²⁺ in Mn²⁺ compounds. It also demonstrates that its compounds are coloured (different colours at different oxidation states).\n\n(d) Transition metals have much higher melting points and much greater hardness/strength than Group I metals. Sodium melts at only 98 °C and is soft enough to cut with a knife, making it useless for construction. Transition metals such as iron (melting point 1538 °C) are strong, hard, and maintain structural integrity at high temperatures. Additionally, sodium reacts rapidly with moisture in the air, whereas iron is much less reactive under ordinary conditions.",
            markScheme: [
              "(a) Any three from: high melting point, high density, variable oxidation states (with example), coloured compounds, catalytic activity — 1 mark each (3)",
              "(b) 2SO₂ + O₂ ⇌ 2SO₃ (1); sulfuric acid / H₂SO₄ as final product (1)",
              "(c) Variable oxidation states (Mn⁷⁺ in MnO₄⁻ and Mn²⁺) / coloured compounds (1)",
              "(d) Higher melting points / harder and stronger (1); comparison with Na (98 °C, soft) (1); transition metals less reactive under normal conditions / Na reacts with moisture (1)"
            ],
            commonError: "For (b), many students write SO₂ + O₂ → SO₃ (unbalanced). The equilibrium sign (⇌) should be used rather than → because this is a reversible reaction. For (d), students often only mention melting point and forget to address reactivity — both are relevant.",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "(a) Use the four key properties checklist for transition metals.",
              "(b) Look up or recall: what two gases react in the Contact process?",
              "(c) Count the different charges on Mn — what does this remind you of?",
              "(d) Compare specific properties: melting point, hardness, reactivity — all three differ."
            ]
          },
          {
            id: "chem-periodic-bank-qa2-q03",
            question: "A student carries out the following experiment:\n- She dissolves 0.46 g of sodium in excess water.\n- She measures the volume of hydrogen gas produced at room temperature and pressure (RTP, molar volume = 24 000 cm³/mol).\n- She tests the resulting solution with universal indicator.\n\n(a) Write the balanced equation for the reaction. [1]\n(b) Calculate the volume of hydrogen gas produced. (Mr of Na = 23) [3]\n(c) State and explain the colour the universal indicator would turn. [2]\n(d) Predict what you would observe if the same mass (0.46 g) of potassium were used instead of sodium, giving two differences. [2]",
            marks: 8,
            modelAnswer: "(a) 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)\n\n(b) Moles of Na = 0.46 / 23 = 0.02 mol\nFrom the equation, 2 mol Na produces 1 mol H₂, so moles of H₂ = 0.02 / 2 = 0.01 mol\nVolume of H₂ = 0.01 × 24 000 = 240 cm³\n\n(c) The universal indicator turns violet/purple (pH 13–14). The solution is strongly alkaline because NaOH is a strong base that fully dissociates to give Na⁺ and OH⁻ ions.\n\n(d) Any two: The reaction with potassium would be more vigorous / faster fizzing. The hydrogen gas produced would ignite and burn with a lilac/purple flame. The potassium would move around on the surface more rapidly. (The volume of H₂ produced would be the same — same moles of metal, same stoichiometry.)",
            markScheme: [
              "(a) 2Na + 2H₂O → 2NaOH + H₂ (1)",
              "(b) Moles Na = 0.02 mol (1); moles H₂ = 0.01 mol (1); volume = 240 cm³ (1)",
              "(c) Violet/purple / very high pH indicator colour (1); NaOH is a strong alkali / fully dissociates / produces OH⁻ ions (1)",
              "(d) Any two correct differences: more vigorous reaction / faster / ignites with lilac flame — 1 mark each (2)"
            ],
            commonError: "In (b), a common error is taking moles of H₂ = moles of Na (forgetting the 2:1 ratio from the equation). In (d), students often say 'more H₂ is produced' — this is wrong since the same moles of metal are used and the stoichiometry is the same.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "challenge",
            hints: [
              "(b) Step 1: moles Na = mass / Mr. Step 2: use ratio from equation (2 Na : 1 H₂). Step 3: volume = moles × 24 000.",
              "(b) Double-check: the ratio of Na to H₂ in the equation is 2:1, not 1:1.",
              "(c) NaOH is a strong alkali — what pH does a strong alkali give, and what colour does UI show at that pH?",
              "(d) K is below Na in Group I — is it more or less reactive? What extra observation is associated with K specifically?"
            ],
            strategy: "Mole calculation: identify ratio from balanced equation",
            solutions: [
              {
                label: "Method 1: Moles from mass, then ratio",
                steps: [
                  "Moles of Na = mass / Mr = 0.46 / 23 = 0.020 mol",
                  "From 2Na + 2H₂O → 2NaOH + H₂: ratio Na : H₂ = 2 : 1",
                  "Moles H₂ = 0.020 / 2 = 0.010 mol",
                  "Volume H₂ = 0.010 × 24 000 cm³/mol = 240 cm³"
                ]
              }
            ]
          },
          {
            id: "chem-periodic-bank-qa2-q04",
            question: "(Challenge) A student tests two solutions, labelled Solution A and Solution B, using the following tests:\n\n- Adding NaOH solution: Solution A gives a green precipitate; Solution B gives a red-brown precipitate.\n- Colour in solution: Solution A is pale green; Solution B is yellow-brown.\n- Both solutions give a positive test for sulfate ions (white precipitate with BaCl₂).\n\n(a) Identify the cation in Solution A and in Solution B. Justify your answer using the observations. [4]\n(b) Write the ionic equation for the reaction of the cation in Solution B with NaOH solution. [2]\n(c) A student adds zinc (Zn) to Solution B. Zn is above Cu but below Mg in the reactivity series, and iron is above zinc. Predict whether zinc will displace iron from Solution B. Explain your reasoning and write the ionic equation if a reaction occurs. [3]",
            marks: 9,
            modelAnswer: "(a) Solution A contains Fe²⁺ (iron(II)) ions. The pale green colour in solution is characteristic of Fe²⁺, and adding NaOH produces a green precipitate of Fe(OH)₂, which confirms Fe²⁺.\n\nSolution B contains Fe³⁺ (iron(III)) ions. The yellow-brown colour in solution is characteristic of Fe³⁺, and adding NaOH produces a red-brown precipitate of Fe(OH)₃, which confirms Fe³⁺.\n\nBoth solutions contain sulfate ions (SO₄²⁻), so Solution A is iron(II) sulfate (FeSO₄) and Solution B is iron(III) sulfate (Fe₂(SO₄)₃).\n\n(b) Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s)\n\n(c) Iron is ABOVE zinc in the reactivity series, meaning iron is MORE reactive than zinc. A more reactive metal displaces a less reactive metal from solution. However, the question asks whether zinc displaces iron — for displacement to occur, zinc would need to be MORE reactive than iron. Since iron is above zinc, zinc is LESS reactive than iron and cannot displace it. No reaction occurs. (If the question were the other way around — iron added to a zinc salt — iron would displace zinc.)",
            markScheme: [
              "(a) Solution A: Fe²⁺ (1); justified by pale green colour in solution AND green precipitate with NaOH (1)",
              "(a) Solution B: Fe³⁺ (1); justified by yellow-brown solution AND red-brown precipitate with NaOH (1)",
              "(b) Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s) — correct formula (1), correct state symbols and balancing (1)",
              "(c) No reaction (1); zinc is less reactive than iron / iron is above zinc in reactivity series (1); for displacement, zinc would need to be MORE reactive than iron — it is not (1)"
            ],
            commonError: "In (c), students often predict a reaction occurs because 'zinc reacts with iron compounds' — they forget to check which metal is MORE reactive. The direction of displacement is: more reactive metal displaces less reactive metal from its salt. Iron is above zinc, so iron displaces zinc — not the other way around.",
            guideRef: "Transition Elements",
            difficulty: "challenge",
            hints: [
              "(a) Match each observation to a known ion colour, then confirm with the precipitate colour.",
              "(b) Fe³⁺ has charge 3+; OH⁻ has charge 1−. How many OH⁻ needed to balance Fe³⁺?",
              "(c) Write out: 'iron is ABOVE zinc' — which is more reactive?",
              "(c) For displacement: the added metal must be MORE reactive than the metal ion in solution. Is Zn more reactive than Fe?"
            ],
            strategy: "Apply reactivity series logic; identify ions from multiple observations"
          }
        ]
      }
    ]
  }
};
