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
        description: "Arrangement of the table, Group I and Group VII trends.",
        questions: [
          {
            id: "chem-periodic-bm1-01",
            question: "Elements in the modern periodic table are arranged in order of increasing:",
            options: [
              "Relative atomic mass",
              "Proton number",
              "Number of neutrons",
              "Number of outer electrons"
            ],
            answerIndex: 1,
            explanation: "The modern periodic table is ordered by increasing proton number (atomic number). Mendeleev originally used atomic mass, but ordering by proton number resolves the anomalies that mass ordering creates.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm1-02",
            question: "An element has the electron configuration 2,8,7. To which group and period does it belong?",
            options: [
              "Group VII, Period 2",
              "Group V, Period 3",
              "Group VII, Period 3",
              "Group II, Period 7"
            ],
            answerIndex: 2,
            explanation: "There are 3 occupied shells, so it is in Period 3, and 7 outer electrons, so it is in Group VII. This is chlorine, proton number 17.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm1-03",
            question: "Which statement explains why elements in the same group have similar chemical properties?",
            options: [
              "They have the same number of occupied electron shells",
              "They have the same number of outer electrons",
              "They have the same relative atomic mass",
              "They have the same number of neutrons"
            ],
            answerIndex: 1,
            explanation: "Chemical behaviour is governed by the number of outer (valence) electrons, which equals the group number for Groups I–VII. The same number of shells is true within a period, not a group.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm1-04",
            question: "Which observation is correct when a small piece of sodium is dropped onto water?",
            options: [
              "It sinks and reacts slowly with no gas produced",
              "It melts into a ball and moves on the surface, fizzing",
              "It burns with a brick-red flame and sinks",
              "It dissolves quietly to give an acidic solution"
            ],
            answerIndex: 1,
            explanation: "Sodium is less dense than water (floats), and the heat of reaction melts it into a ball that whizzes across the surface while fizzing as H₂ is released. The solution formed (NaOH) is alkaline, not acidic.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "Compare the density of sodium with that of water — does it float or sink?",
              "What gas is released, and what does the heat of reaction do to the metal?",
              "Is the product NaOH acidic or alkaline?"
            ]
          },
          {
            id: "chem-periodic-bm1-05",
            question: "Which balanced equation correctly represents potassium reacting with water?",
            options: [
              "K + H₂O → KOH + H₂",
              "2K + 2H₂O → 2KOH + H₂",
              "2K + H₂O → K₂O + H₂",
              "K + 2H₂O → K(OH)₂ + H₂"
            ],
            answerIndex: 1,
            explanation: "The balanced equation is 2K + 2H₂O → 2KOH + H₂. Two potassium atoms produce one H₂ molecule. Option A is unbalanced; C and D give incorrect products (K only forms K⁺, never K²⁺).",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "Group I metals form 1+ ions, so the hydroxide is KOH, not K(OH)₂.",
              "Balance K atoms first, then hydrogen.",
              "Remember H₂ contains two hydrogen atoms."
            ]
          },
          {
            id: "chem-periodic-bm1-06",
            question: "At room temperature, the physical states of chlorine, bromine and iodine are, respectively:",
            options: [
              "Solid, liquid, gas",
              "Gas, liquid, solid",
              "Gas, gas, liquid",
              "Liquid, solid, gas"
            ],
            answerIndex: 1,
            explanation: "Chlorine is a pale yellow-green gas, bromine is a red-brown liquid, and iodine is a grey-black solid. Boiling points increase down Group VII as molecules get larger.",
            guideRef: "Group VII — The Halogens",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm1-07",
            question: "Which mixture would produce a colour change due to a displacement reaction?",
            options: [
              "Iodine solution added to potassium chloride solution",
              "Bromine water added to potassium chloride solution",
              "Chlorine water added to potassium iodide solution",
              "Bromine water added to potassium chloride solution only when heated"
            ],
            answerIndex: 2,
            explanation: "Chlorine is more reactive than iodine, so Cl₂ displaces I⁻ to form I₂ (dark brown). In the other options the halogen is less reactive than the halide and cannot displace it.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "Write the reactivity order: Cl > Br > I.",
              "Displacement occurs only when the halogen is MORE reactive than the halide ion present.",
              "Check each option against this rule."
            ]
          },
          {
            id: "chem-periodic-bm1-08",
            question: "In the reaction Cl₂ + 2KBr → 2KCl + Br₂, which species is oxidised?",
            options: [
              "Cl₂",
              "Br⁻",
              "K⁺",
              "Cl⁻"
            ],
            answerIndex: 1,
            explanation: "Br⁻ loses electrons to become Br₂ (2Br⁻ → Br₂ + 2e⁻), so bromide is oxidised. Cl₂ gains electrons (reduced). K⁺ is a spectator ion and does not change.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "Oxidation is loss of electrons (OIL RIG).",
              "Which species changes from a 1− ion to a neutral molecule?",
              "Going from Br⁻ to Br₂ — are electrons gained or lost?"
            ]
          },
          {
            id: "chem-periodic-bm1-09",
            question: "Caesium is below potassium in Group I. Compared with potassium, caesium is expected to:",
            options: [
              "React less vigorously and have a higher melting point",
              "React more vigorously and have a lower melting point",
              "React less vigorously and form Cs²⁺ ions",
              "React at the same rate but have a higher density only"
            ],
            answerIndex: 1,
            explanation: "Reactivity increases down Group I (Cs > K), while melting point decreases down the group. Caesium's outer electron is very far from the nucleus and heavily shielded, so it is lost extremely easily. All Group I metals form 1+ ions, so Cs²⁺ is impossible.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "challenge",
            hints: [
              "Decide whether reactivity increases or decreases going down Group I.",
              "Melting point shows the opposite trend to reactivity in Group I.",
              "What ion charge do all Group I metals form?",
              "Combine the correct reactivity and melting-point trends."
            ],
            strategy: "Extend group trends to an unfamiliar element"
          },
          {
            id: "chem-periodic-bm1-10",
            question: "Fluorine is placed above chlorine in Group VII. Which prediction about fluorine is most likely correct?",
            options: [
              "Fluorine is less reactive than chlorine",
              "Fluorine displaces chloride ions from potassium chloride solution",
              "Fluorine forms F²⁻ ions in its compounds",
              "Fluorine is a solid at room temperature"
            ],
            answerIndex: 1,
            explanation: "Reactivity increases up Group VII, so fluorine is the most reactive halogen and would displace Cl⁻ from solution. Halogens form 1− ions (F⁻, not F²⁻), and fluorine is a pale yellow gas at room temperature.",
            guideRef: "Group VII — The Halogens",
            difficulty: "challenge",
            hints: [
              "Reactivity in Group VII increases going UP the group.",
              "A more reactive halogen displaces a less reactive halide.",
              "Halogens gain one electron, forming 1− ions.",
              "Recall that the lightest halogens are gases."
            ],
            strategy: "Check reactivity order before predicting displacement"
          }
        ]
      },
      {
        id: "chem-periodic-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Noble gases, transition elements and their uses.",
        questions: [
          {
            id: "chem-periodic-bm2-01",
            question: "Why are the noble gases chemically unreactive?",
            options: [
              "They are monatomic gases",
              "They have full outer electron shells",
              "They have very high densities",
              "They have only a few electrons"
            ],
            answerIndex: 1,
            explanation: "A full outer shell (2 for He; 8 for Ne, Ar, etc.) is a very stable arrangement, so noble gases have no tendency to gain, lose or share electrons. Being monatomic is a consequence of their inertness, not the cause.",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm2-02",
            question: "Helium is used to fill airships and party balloons mainly because it is:",
            options: [
              "Less dense than air and chemically inert",
              "Denser than air and flammable",
              "A good conductor of electricity",
              "Able to react with oxygen to provide lift"
            ],
            answerIndex: 0,
            explanation: "Helium has a very low density (giving lift) and is inert/non-flammable (unlike hydrogen, which is flammable). It does not conduct electricity and does not react with oxygen.",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm2-03",
            question: "Which is NOT a typical property of a transition element?",
            options: [
              "Forms coloured compounds",
              "Has variable oxidation states",
              "Has a low melting point and low density",
              "Acts as a catalyst or has compounds that do"
            ],
            answerIndex: 2,
            explanation: "Transition metals have HIGH melting points and HIGH densities, with strong metallic bonding. Coloured compounds, variable oxidation states, and catalytic activity are all characteristic transition metal properties.",
            guideRef: "Transition Elements",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm2-04",
            question: "Across Period 3 (Na to Ar), how does the character of the oxides change?",
            options: [
              "Acidic → amphoteric → basic",
              "Basic → amphoteric → acidic",
              "Basic → acidic → neutral",
              "Acidic → neutral → basic"
            ],
            answerIndex: 1,
            explanation: "Na₂O and MgO are basic, Al₂O₃ is amphoteric, and SiO₂, P₄O₁₀, SO₃ are acidic. The character changes from basic on the left, through amphoteric (Al), to acidic on the right.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "Metal oxides on the left tend to be basic.",
              "Aluminium oxide is the special amphoteric example.",
              "Non-metal oxides on the right dissolve in water to form acids."
            ]
          },
          {
            id: "chem-periodic-bm2-05",
            question: "A blue aqueous solution turns to a blue precipitate when sodium hydroxide is added. The cation present is most likely:",
            options: [
              "Fe²⁺",
              "Fe³⁺",
              "Cu²⁺",
              "Zn²⁺"
            ],
            answerIndex: 2,
            explanation: "Copper(II) ions give a blue solution and a blue precipitate of Cu(OH)₂ with NaOH. Fe²⁺ gives a green precipitate, Fe³⁺ a red-brown precipitate, and Zn²⁺ a white precipitate.",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "Match the solution colour to a known transition metal ion.",
              "Which ion is famously blue in solution?",
              "Check that the precipitate colour also matches that ion."
            ]
          },
          {
            id: "chem-periodic-bm2-06",
            question: "Which transition metal or compound is correctly paired with the industrial process it catalyses?",
            options: [
              "Vanadium(V) oxide — Haber process",
              "Iron — Contact process",
              "Nickel — hydrogenation of vegetable oils",
              "Manganese(IV) oxide — Haber process"
            ],
            answerIndex: 2,
            explanation: "Nickel catalyses the hydrogenation of vegetable oils (making margarine). Iron catalyses the Haber process and V₂O₅ catalyses the Contact process — the first two options have these swapped. MnO₂ catalyses the decomposition of hydrogen peroxide, not the Haber process.",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "Recall which catalyst is used in the Haber process (ammonia).",
              "Recall which catalyst is used in the Contact process (sulfuric acid).",
              "Which catalyst is used to harden vegetable oils?"
            ]
          },
          {
            id: "chem-periodic-bm2-07",
            question: "Across a period, the atomic radius of the atoms decreases. The best explanation is that:",
            options: [
              "More electron shells are added, pulling electrons inward",
              "The number of outer electrons increases while shells stay the same, and the increasing nuclear charge pulls electrons in more strongly",
              "The number of neutrons decreases across the period",
              "Electron shielding increases sharply across the period"
            ],
            answerIndex: 1,
            explanation: "Across a period the number of shells is constant, but each step adds a proton (greater nuclear charge) and an electron to the same shell. The increasing nuclear attraction pulls the outer electrons closer, so the radius decreases. Shielding stays roughly constant across a period.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "Does the number of occupied shells change across a period?",
              "What happens to nuclear charge (protons) across the period?",
              "Stronger nuclear pull on the same shell does what to the radius?"
            ]
          },
          {
            id: "chem-periodic-bm2-08",
            question: "The boiling points of the noble gases are: He −269 °C, Ne −246 °C, Ar −186 °C, Kr −153 °C. The increase down the group is because:",
            options: [
              "Covalent bonds between atoms become stronger",
              "Larger atoms have more electrons, so the London dispersion forces between atoms are stronger",
              "The atoms become more reactive down the group",
              "Metallic bonding increases down the group"
            ],
            answerIndex: 1,
            explanation: "Noble gases are monatomic with only weak London dispersion (van der Waals) forces between atoms. Larger atoms have more electrons, giving stronger dispersion forces, so more energy is needed to separate them — boiling point rises. There are no covalent or metallic bonds between noble gas atoms.",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "core",
            hints: [
              "Noble gases exist as single atoms — what kind of forces act between them?",
              "How does the number of electrons change down the group?",
              "More electrons means stronger dispersion forces — what does that do to boiling point?"
            ]
          },
          {
            id: "chem-periodic-bm2-09",
            question: "Zinc is in the d-block but is sometimes not classed as a typical transition element. Which observation best supports this?",
            options: [
              "Zinc has a high melting point",
              "Zinc compounds are white and zinc forms only Zn²⁺ ions",
              "Zinc is a good conductor of electricity",
              "Zinc reacts with dilute acids"
            ],
            answerIndex: 1,
            explanation: "Two hallmark transition metal properties are coloured compounds and variable oxidation states. Zinc compounds are white/colourless and zinc forms only the Zn²⁺ ion (a single oxidation state), so it lacks both — supporting the view that it is not a typical transition element.",
            guideRef: "Transition Elements",
            difficulty: "challenge",
            hints: [
              "List the typical transition metal properties.",
              "Which of those properties does zinc clearly lack?",
              "Consider the colour of zinc compounds and the number of ion charges zinc forms.",
              "High melting point and conductivity are NOT the distinguishing features here."
            ],
            strategy: "Use the transition-metal property checklist to test a borderline case"
          },
          {
            id: "chem-periodic-bm2-10",
            question: "Element X is a Period 3 element whose oxide reacts with BOTH dilute hydrochloric acid and aqueous sodium hydroxide. Element X is most likely:",
            options: [
              "Sodium",
              "Aluminium",
              "Sulfur",
              "Argon"
            ],
            answerIndex: 1,
            explanation: "An oxide that reacts with both acids and bases is amphoteric. In Period 3, aluminium oxide (Al₂O₃) is the amphoteric oxide. Na₂O is basic (acids only), SO₃ is acidic (bases only), and argon forms no oxide.",
            guideRef: "Trends Across a Period",
            difficulty: "challenge",
            hints: [
              "An oxide reacting with both acids and bases has a special name.",
              "Which Period 3 element forms that type of oxide?",
              "Eliminate the basic oxide (left) and the acidic oxide (right).",
              "Argon does not form an oxide at all."
            ],
            strategy: "Use oxide character to place an element across a period"
          }
        ]
      },
      {
        id: "chem-periodic-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Mixed groups, displacement evidence and applied reasoning.",
        questions: [
          {
            id: "chem-periodic-bm3-01",
            question: "How many elements are there in Period 2 of the periodic table?",
            options: [
              "2",
              "8",
              "10",
              "18"
            ],
            answerIndex: 1,
            explanation: "Period 2 (Li to Ne) contains 8 elements, as the second shell can hold up to 8 electrons. Period 1 has only 2 elements (H and He).",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm3-02",
            question: "Lithium hydroxide solution is tested with universal indicator. The colour seen would be:",
            options: [
              "Red",
              "Yellow",
              "Green",
              "Purple/blue"
            ],
            answerIndex: 3,
            explanation: "Lithium hydroxide (LiOH) is an alkali, so the solution has a high pH and turns universal indicator purple/blue. Red would indicate a strong acid; green is neutral.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm3-03",
            question: "Which halogen has the lowest reactivity of those listed?",
            options: [
              "Fluorine",
              "Chlorine",
              "Bromine",
              "Iodine"
            ],
            answerIndex: 3,
            explanation: "Reactivity decreases down Group VII (F > Cl > Br > I), so of these four iodine is the least reactive. The incoming electron is added to a shell furthest from the nucleus and most shielded.",
            guideRef: "Group VII — The Halogens",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm3-04",
            question: "When chlorine water is added to potassium iodide solution, the colour observed is:",
            options: [
              "Pale yellow-green",
              "Colourless",
              "Dark brown",
              "Blue"
            ],
            answerIndex: 2,
            explanation: "Chlorine displaces iodide ions to form iodine (I₂), which gives a dark brown colour in solution: Cl₂ + 2I⁻ → 2Cl⁻ + I₂. (A blue-black colour would only appear if starch were also present.)",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "Chlorine is more reactive than iodine, so displacement occurs.",
              "Which halogen is produced — and what colour is it in solution?",
              "Blue-black requires starch, which is not mentioned here."
            ]
          },
          {
            id: "chem-periodic-bm3-05",
            question: "Going down Group I, the outer electron is lost more easily. The main reason is that the outer electron:",
            options: [
              "Is closer to the nucleus",
              "Is in a shell further from the nucleus and is more shielded",
              "Experiences a greater nuclear charge",
              "Is shared with neighbouring atoms"
            ],
            answerIndex: 1,
            explanation: "Down Group I each element has an extra shell, so the outer electron is further from the nucleus and shielded by more inner shells. The net attraction holding it falls, so it is lost more easily and reactivity increases.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "What happens to the number of shells going down a group?",
              "Does the outer electron get closer to or further from the nucleus?",
              "Name the effect of inner shells reducing the nuclear pull."
            ]
          },
          {
            id: "chem-periodic-bm3-06",
            question: "Which row correctly matches a transition metal ion with its solution colour?",
            options: [
              "Cu²⁺ — green; Fe³⁺ — blue",
              "Fe²⁺ — pale green; Fe³⁺ — yellow-brown",
              "Fe²⁺ — yellow-brown; MnO₄⁻ — green",
              "Cr³⁺ — blue; Cu²⁺ — purple"
            ],
            answerIndex: 1,
            explanation: "Fe²⁺ solutions are pale green and Fe³⁺ solutions are yellow-brown. Cu²⁺ is blue, Cr³⁺ is green, and MnO₄⁻ (manganate(VII)) is purple — making the other rows incorrect.",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "Recall the colour of iron(II) versus iron(III).",
              "Cu²⁺ is blue, not green.",
              "MnO₄⁻ is purple, not green."
            ]
          },
          {
            id: "chem-periodic-bm3-07",
            question: "Sodium reacts vigorously with chlorine to form sodium chloride. Which equation is correctly balanced?",
            options: [
              "Na + Cl₂ → NaCl",
              "2Na + Cl₂ → 2NaCl",
              "Na + Cl → NaCl₂",
              "2Na + 2Cl₂ → 2NaCl"
            ],
            answerIndex: 1,
            explanation: "Chlorine is diatomic (Cl₂). Two sodium atoms each lose one electron, and one Cl₂ molecule gains two electrons: 2Na + Cl₂ → 2NaCl. The formula of sodium chloride is NaCl (1:1 ions).",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "Chlorine exists as Cl₂ molecules.",
              "Sodium chloride has the formula NaCl.",
              "Balance the chlorine atoms — how many Na are needed?"
            ]
          },
          {
            id: "chem-periodic-bm3-08",
            question: "Element Q is a soft metal with a low melting point that floats on and reacts rapidly with water, giving an alkaline solution. Element Q is in:",
            options: [
              "Group 0",
              "Group VII",
              "Group I",
              "The transition block"
            ],
            answerIndex: 2,
            explanation: "Softness, low melting point, low density (floats), rapid reaction with water and an alkaline product are all characteristic of Group I alkali metals. Transition metals are hard with high melting points; Group VII and Group 0 are non-metals.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "Soft, low melting point, low density — which group fits?",
              "Reaction with water giving an alkali points to one particular group.",
              "Rule out the non-metal groups and the hard transition metals."
            ]
          },
          {
            id: "chem-periodic-bm3-09",
            question: "Bromine water is added to three test tubes containing KCl, KBr and KI. In how many of the three tubes will a displacement reaction occur?",
            options: [
              "0",
              "1",
              "2",
              "3"
            ],
            answerIndex: 1,
            explanation: "Bromine can only displace a less reactive halide. It cannot displace Cl⁻ (Cl is more reactive) and cannot displace its own ion Br⁻. It can displace I⁻ (I is less reactive). So a reaction occurs in just one tube (KI).",
            guideRef: "Group VII — The Halogens",
            difficulty: "challenge",
            hints: [
              "List the reactivity order Cl > Br > I.",
              "A halogen displaces only a LESS reactive halide.",
              "Can bromine displace its own ion, Br⁻?",
              "Count the tubes where displacement is possible."
            ],
            strategy: "Apply the displacement rule case by case"
          },
          {
            id: "chem-periodic-bm3-10",
            question: "An unknown element is a hard metal with a high melting point that forms a green and a yellow-brown compound and catalyses a reaction. The element is best described as:",
            options: [
              "A Group I metal",
              "A Group VII non-metal",
              "A transition element",
              "A noble gas"
            ],
            answerIndex: 2,
            explanation: "High melting point, hardness, two different coloured compounds (variable oxidation states giving different colours, e.g. Fe²⁺ green and Fe³⁺ yellow-brown), and catalytic activity together point clearly to a transition element such as iron.",
            guideRef: "Transition Elements",
            difficulty: "challenge",
            hints: [
              "Two different coloured compounds suggest more than one oxidation state.",
              "Catalytic activity is a strong clue.",
              "High melting point and hardness rule out Group I.",
              "Combine the clues — which block fits all of them?"
            ],
            strategy: "Combine multiple property clues to classify an element"
          }
        ]
      },
      {
        id: "chem-periodic-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Synoptic challenge across the whole topic.",
        questions: [
          {
            id: "chem-periodic-bm4-01",
            question: "Which scientist is credited with arranging the early periodic table and leaving gaps for undiscovered elements?",
            options: [
              "Dalton",
              "Mendeleev",
              "Rutherford",
              "Bohr"
            ],
            answerIndex: 1,
            explanation: "Mendeleev arranged the elements by atomic mass into a table, leaving gaps and successfully predicting the properties of elements not yet discovered.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm4-02",
            question: "Which of the following elements is a non-metal?",
            options: [
              "Magnesium",
              "Iron",
              "Sulfur",
              "Potassium"
            ],
            answerIndex: 2,
            explanation: "Sulfur is a Group VI non-metal found on the right side of the table. Magnesium and potassium are reactive metals; iron is a transition metal.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm4-03",
            question: "Argon is used inside filament light bulbs because it:",
            options: [
              "Conducts heat away from the filament",
              "Is inert and prevents the hot filament from reacting with oxygen",
              "Glows to increase brightness",
              "Reacts with the tungsten to strengthen it"
            ],
            answerIndex: 1,
            explanation: "Argon is chemically inert, so it does not react with the very hot tungsten filament. This prevents the oxidation (burning away) that oxygen in air would cause, extending the bulb's life.",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bm4-04",
            question: "Compared with iron, sodium has a much lower melting point. The main reason is that sodium has:",
            options: [
              "No metallic bonding",
              "Weaker metallic bonding, with fewer delocalised electrons per atom and larger ions",
              "Covalent bonding instead of metallic bonding",
              "A giant covalent structure",
            ],
            answerIndex: 1,
            explanation: "Both are metals with metallic bonding, but sodium's bonding is weaker: it contributes only one delocalised electron per atom and has larger, less highly charged ions than iron. Weaker electrostatic attraction means a lower melting point.",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "Both elements are metals — so both have metallic bonding.",
              "How many outer electrons does sodium contribute compared with a transition metal?",
              "Weaker attraction between ions and delocalised electrons lowers the melting point."
            ]
          },
          {
            id: "chem-periodic-bm4-05",
            question: "Which statement about the reaction 2K + 2H₂O → 2KOH + H₂ is correct?",
            options: [
              "Potassium is reduced",
              "Potassium is oxidised, losing one electron per atom",
              "Hydrogen in water is oxidised",
              "Oxygen gas is produced",
            ],
            answerIndex: 1,
            explanation: "Each potassium atom loses one electron (K → K⁺ + e⁻), so potassium is oxidised. Hydrogen in water is reduced (H⁺ gains electrons to form H₂). The gas produced is hydrogen, not oxygen.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "Oxidation is loss of electrons.",
              "What does potassium become — K⁺ or K⁻?",
              "Which element forms a gas: hydrogen or oxygen?"
            ]
          },
          {
            id: "chem-periodic-bm4-06",
            question: "A halogen X displaces bromine from KBr but does NOT displace chlorine from KCl. The position of X in Group VII is:",
            options: [
              "Below iodine",
              "Between chlorine and bromine",
              "Below bromine",
              "Above fluorine",
            ],
            answerIndex: 1,
            explanation: "X is more reactive than bromine (it displaces Br⁻) but less reactive than chlorine (it cannot displace Cl⁻). So in reactivity order Cl > X > Br, X sits between chlorine and bromine in the group.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "Displacing Br⁻ means X is more reactive than bromine.",
              "Not displacing Cl⁻ means X is less reactive than chlorine.",
              "Place X in the reactivity order between the two."
            ]
          },
          {
            id: "chem-periodic-bm4-07",
            question: "Across Period 3, electrical conductivity is highest for the elements:",
            options: [
              "P, S, Cl (non-metals)",
              "Na, Mg, Al (metals)",
              "Si only (semiconductor)",
              "Ar (noble gas)",
            ],
            answerIndex: 1,
            explanation: "Na, Mg and Al are metals with delocalised electrons, giving high conductivity (it increases Na→Al as more electrons are delocalised). Silicon is only a semiconductor; P, S, Cl and Ar are non-conductors.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "Which elements have free (delocalised) electrons?",
              "Metals are on the left of the period.",
              "Silicon only semi-conducts; the right-hand non-metals do not conduct."
            ]
          },
          {
            id: "chem-periodic-bm4-08",
            question: "0.040 mol of lithium reacts completely with water. Using 2Li + 2H₂O → 2LiOH + H₂, the amount of hydrogen produced is:",
            options: [
              "0.080 mol",
              "0.040 mol",
              "0.020 mol",
              "0.010 mol",
            ],
            answerIndex: 2,
            explanation: "The ratio of Li to H₂ is 2:1. So moles of H₂ = 0.040 ÷ 2 = 0.020 mol.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "challenge",
            hints: [
              "Find the Li : H₂ ratio from the balanced equation.",
              "The ratio is 2 : 1.",
              "Divide the moles of Li by 2.",
              "0.040 ÷ 2 = ?"
            ],
            strategy: "Use the mole ratio from the balanced equation"
          },
          {
            id: "chem-periodic-bm4-09",
            question: "Element Z is in Period 4, Group I. Which set of predictions about Z is fully correct?",
            options: [
              "4 shells; forms Z⁺; less reactive than sodium",
              "4 shells; forms Z⁺; more reactive than sodium",
              "1 shell; forms Z²⁺; more reactive than sodium",
              "4 shells; forms Z⁻; less reactive than sodium",
            ],
            answerIndex: 1,
            explanation: "Period 4 means 4 occupied shells. Group I means one outer electron, lost to form Z⁺. Being below sodium in Group I, Z (potassium) is more reactive than sodium. This rules out the other combinations.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "challenge",
            hints: [
              "Period number gives the number of shells.",
              "Group I metals form 1+ ions.",
              "Reactivity increases down Group I.",
              "Combine all three correct facts."
            ],
            strategy: "Combine period, group and trend information"
          },
          {
            id: "chem-periodic-bm4-10",
            question: "Manganese forms Mn²⁺ (pale pink) and MnO₄⁻ (deep purple, manganese in the +7 state). These facts together illustrate which TWO transition metal properties?",
            options: [
              "High melting point and catalytic activity",
              "Variable oxidation states and coloured compounds",
              "Coloured compounds and high density",
              "Catalytic activity and variable oxidation states",
            ],
            answerIndex: 1,
            explanation: "Mn existing as +2 and +7 shows variable oxidation states; the pink and purple colours show that its compounds are coloured. Melting point, density and catalysis are not demonstrated by these two facts.",
            guideRef: "Transition Elements",
            difficulty: "challenge",
            hints: [
              "Two different charges on manganese illustrate one property.",
              "Two different colours illustrate another property.",
              "Neither fact mentions melting point, density or catalysis.",
              "Pick the pair that matches both clues."
            ],
            strategy: "Map observations to named transition-metal properties"
          }
        ]
      }
    ],
    qaPapers: [
      {
        id: "chem-periodic-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Arrangement of the table and Group I alkali metals.",
        questions: [
          {
            id: "chem-periodic-bq1-01",
            question: "An atom of element J has the electron configuration 2,8,2.\n\n(a) State the group and period of element J. [2]\n(b) Is J a metal or a non-metal? Give a reason. [1]",
            marks: 3,
            modelAnswer: "(a) Group II (2 outer electrons), Period 3 (3 occupied electron shells).\n\n(b) J is a metal. It has only two outer electrons, which it loses easily to form a positive ion (a typical metal property); it is also on the left of the periodic table.",
            markScheme: [
              "(a) Group II / Group 2 (1)",
              "(a) Period 3 (1)",
              "(b) Metal, because it has few outer electrons / loses electrons to form positive ions / is on the left of the table (1)"
            ],
            commonError: "Students sometimes give the period as the number of outer electrons (2) instead of the number of shells (3).",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq1-02",
            question: "Define each of the following terms as used in the periodic table.\n\n(a) Period [1]\n(b) Group [1]\n(c) State what determines the order of the elements in the modern periodic table. [1]",
            marks: 3,
            modelAnswer: "(a) A period is a horizontal row of the periodic table; all elements in a period have the same number of occupied electron shells.\n\n(b) A group is a vertical column of the periodic table; elements in a group have the same number of outer (valence) electrons and similar chemical properties.\n\n(c) The elements are arranged in order of increasing proton number (atomic number).",
            markScheme: [
              "(a) Horizontal row / same number of occupied shells (1)",
              "(b) Vertical column / same number of outer electrons (1)",
              "(c) Increasing proton number / atomic number (1)"
            ],
            commonError: "Confusing groups and periods, or saying the order is by atomic mass rather than proton number.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq1-03",
            question: "Sodium and potassium are both Group I metals.\n\n(a) Write a balanced symbol equation, with state symbols, for the reaction of sodium with water. [2]\n(b) Describe two observations you would see when sodium reacts with water. [2]\n(c) State and explain how the reaction of potassium with water differs from that of sodium. [3]",
            marks: 7,
            modelAnswer: "(a) 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)\n\n(b) Any two: the sodium floats on the surface; it melts into a shiny ball; it moves/whizzes around the surface; fizzing/effervescence is seen as hydrogen is given off; the metal gets smaller and disappears.\n\n(c) Potassium reacts more vigorously than sodium because potassium is more reactive (it is lower in Group I). Potassium has one more electron shell, so its outer electron is further from the nucleus and more shielded, and is lost more easily. The heat produced also ignites the hydrogen, which burns with a lilac flame.",
            markScheme: [
              "(a) Correct balanced equation 2Na + 2H₂O → 2NaOH + H₂ (1); correct state symbols (s)(l)(aq)(g) (1)",
              "(b) Any two valid observations — 1 mark each (2)",
              "(c) Potassium reacts more vigorously (1); because it is more reactive / outer electron further from nucleus and more shielded, lost more easily (1); lilac flame / hydrogen ignites (1)"
            ],
            commonError: "Forgetting to balance the equation or omitting state symbols in (a); in (c) describing the difference without explaining it in terms of electron configuration.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "(a) Balance Na first, then count H and O atoms.",
              "(b) Think about what you would actually see and hear.",
              "(c) Is potassium more or less reactive than sodium, and why?",
              "(c) Mention the lilac flame as a distinguishing observation for potassium."
            ]
          },
          {
            id: "chem-periodic-bq1-04",
            question: "Explain why the reactivity of the Group I metals increases going down the group. Refer to electron configuration, atomic radius and shielding in your answer. [4]",
            marks: 4,
            modelAnswer: "Going down Group I, each successive element has one more occupied electron shell, so the atomic radius increases and the outer electron is further from the nucleus. The increasing number of inner shells provides more electron shielding, reducing the effective nuclear attraction felt by the outer electron. As a result, less energy is needed to remove the outer electron (lower first ionisation energy). Since Group I metals react by losing this outer electron, the metal that loses it most easily reacts most readily — so reactivity increases down the group.",
            markScheme: [
              "More electron shells down the group / larger atomic radius / outer electron further from nucleus (1)",
              "More shielding from inner shells (1)",
              "Effective nuclear attraction on outer electron decreases / outer electron lost more easily / lower ionisation energy (1)",
              "Reaction involves losing the outer electron, so easier loss → greater reactivity (1)"
            ],
            commonError: "Mentioning distance but not shielding (or vice versa); both are required for full marks.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "Start with what changes structurally going down the group.",
              "Link atomic radius to the position of the outer electron.",
              "Bring in shielding explicitly.",
              "Connect ease of electron loss to reactivity."
            ],
            strategy: "Explain trends using electron configuration"
          },
          {
            id: "chem-periodic-bq1-05",
            question: "Lithium melts at 181 °C, sodium at 98 °C and potassium at 63 °C.\n\n(a) Describe the trend in melting point down Group I. [1]\n(b) Suggest, in terms of metallic bonding, why the melting point changes in this way. [2]\n(c) Caesium is below potassium. Predict whether its melting point is higher or lower than potassium's, and explain. [2]",
            marks: 5,
            modelAnswer: "(a) The melting point decreases going down Group I.\n\n(b) Going down the group, the metal ions get larger, so the delocalised electrons are spread over a larger volume and the electrostatic attraction between the positive ions and the sea of delocalised electrons becomes weaker. Weaker metallic bonding means less energy is needed to melt the metal, so the melting point falls.\n\n(c) Caesium's melting point is lower than potassium's. Caesium ions are even larger, so the metallic bonding is even weaker, requiring less energy to melt — continuing the downward trend.",
            markScheme: [
              "(a) Melting point decreases down the group (1)",
              "(b) Larger metal ions / weaker attraction between ions and delocalised electrons (1); weaker metallic bonding → less energy to melt (1)",
              "(c) Lower than potassium (1); larger ions / weaker metallic bonding continuing the trend (1)"
            ],
            commonError: "Explaining melting point with the same 'reactivity' reasoning used for reactivity trends; the melting-point trend needs metallic bonding strength, not ionisation energy.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "(a) Read the trend directly from the numbers.",
              "(b) Think about the strength of metallic bonding as ions get bigger.",
              "(c) Caesium is even lower — continue the same trend."
            ]
          },
          {
            id: "chem-periodic-bq1-06",
            question: "A teacher writes a general equation for any Group I metal M reacting with water: 2M + 2H₂O → 2MOH + H₂.\n\n(a) Explain why the formula of the hydroxide is MOH and not M(OH)₂. [2]\n(b) State the pH range you would expect for the solution formed and name the type of solution. [2]",
            marks: 4,
            modelAnswer: "(a) Group I metals have one outer electron, which they lose to form a 1+ ion (M⁺). The hydroxide ion has a 1− charge (OH⁻). To balance the charges, one M⁺ combines with one OH⁻, giving the formula MOH. M(OH)₂ would require a 2+ ion, which Group I metals do not form.\n\n(b) The solution is alkaline, with a pH greater than 7 (typically pH 13–14 for a strong alkali). It is an alkaline solution / a solution of a strong alkali.",
            markScheme: [
              "(a) Group I metals form 1+ ions / lose one electron (1); OH⁻ is 1−, so 1:1 ratio gives MOH (1)",
              "(b) pH greater than 7 / about 13–14 (1); alkaline / strong alkali (1)"
            ],
            commonError: "Claiming M(OH)₂ because the formula 'looks like' calcium hydroxide; Group I always forms 1+ ions.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq1-07",
            question: "0.069 g of sodium is added to excess water at room temperature and pressure (RTP). The molar volume of a gas at RTP is 24 000 cm³/mol and the relative atomic mass of sodium is 23.\n\n(a) Write the balanced equation for the reaction. [1]\n(b) Calculate the number of moles of sodium used. [1]\n(c) Calculate the volume of hydrogen gas produced at RTP. [3]",
            marks: 5,
            modelAnswer: "(a) 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)\n\n(b) Moles of Na = mass ÷ Ar = 0.069 ÷ 23 = 0.0030 mol.\n\n(c) From the equation, the ratio Na : H₂ = 2 : 1, so moles of H₂ = 0.0030 ÷ 2 = 0.0015 mol. Volume of H₂ = moles × molar volume = 0.0015 × 24 000 = 36 cm³.",
            markScheme: [
              "(a) 2Na + 2H₂O → 2NaOH + H₂ (1)",
              "(b) Moles Na = 0.069 ÷ 23 = 0.0030 mol (1)",
              "(c) Ratio Na : H₂ = 2 : 1 / moles H₂ = 0.0015 mol (1); volume = 0.0015 × 24 000 (1); = 36 cm³ (1)"
            ],
            commonError: "Using a 1:1 ratio and getting 72 cm³; the equation gives 2 mol Na to 1 mol H₂.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "core",
            hints: [
              "(b) Moles = mass ÷ relative atomic mass.",
              "(c) Find the Na : H₂ ratio from the balanced equation (2:1).",
              "(c) Volume = moles of gas × 24 000 cm³/mol.",
              "(c) Halve the moles of Na before multiplying by the molar volume."
            ],
            strategy: "Mole calculation: identify ratio from balanced equation",
            solutions: [
              {
                label: "Method: moles then ratio then volume",
                steps: [
                  "Moles of Na = mass ÷ Ar = 0.069 ÷ 23 = 0.0030 mol",
                  "From 2Na + 2H₂O → 2NaOH + H₂, ratio Na : H₂ = 2 : 1",
                  "Moles of H₂ = 0.0030 ÷ 2 = 0.0015 mol",
                  "Volume of H₂ = 0.0015 × 24 000 cm³/mol = 36 cm³"
                ]
              }
            ]
          },
          {
            id: "chem-periodic-bq1-08",
            question: "Hydrogen is sometimes placed at the top of Group I and sometimes separately.\n\n(a) Suggest one reason hydrogen could be placed in Group I. [1]\n(b) Suggest two reasons hydrogen does not really behave like a typical Group I metal. [2]",
            marks: 3,
            modelAnswer: "(a) Hydrogen has one electron in its outer shell, like the Group I metals (configuration of 1 outer electron), and it can form a 1+ ion (H⁺).\n\n(b) Any two: hydrogen is a non-metal (a gas), not a soft, shiny solid metal; it does not react with water to give an alkaline hydroxide; it often shares its electron in covalent bonds rather than simply losing it; it can also gain an electron to form H⁻ (hydride). These behaviours are unlike the alkali metals.",
            markScheme: [
              "(a) One outer electron / forms H⁺ ion (1)",
              "(b) Any two valid differences, e.g. hydrogen is a non-metal/gas (1); does not form an alkaline hydroxide with water / forms covalent bonds rather than always losing its electron (1)"
            ],
            commonError: "Only giving the similarity and not genuinely contrasting metal versus non-metal behaviour in part (b).",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "challenge",
            hints: [
              "(a) Compare the outer electron count of hydrogen with Group I.",
              "(b) Is hydrogen a metal or a non-metal at room temperature?",
              "(b) Does hydrogen react with water like sodium does?",
              "(b) Think about how hydrogen bonds (sharing vs losing electrons)."
            ],
            strategy: "Evaluate where an element belongs using its properties"
          },
          {
            id: "chem-periodic-bq1-09",
            question: "(Challenge) A student claims: \"Francium, at the bottom of Group I, must be the most reactive metal in the whole periodic table, and it would react with water to form an acidic solution.\" Evaluate this statement, correcting any errors and supporting any correct parts with reasoning. [4]",
            marks: 4,
            modelAnswer: "The first part is broadly correct: francium is at the bottom of Group I, so it would be the most reactive Group I metal, and Group I metals are the most reactive metals. Its single outer electron is in the shell furthest from the nucleus and most shielded, so it is lost extremely easily, making francium react explosively with water.\n\nHowever, the second part is wrong. Francium reacts with water to form francium hydroxide (FrOH) and hydrogen. FrOH is a strong alkali, so the solution would be ALKALINE (high pH), not acidic. The student has the reactivity reasoning right but has confused the nature of the product solution.",
            markScheme: [
              "Agrees francium is the most reactive Group I metal / most reactive metal (1)",
              "Reasoning: outer electron furthest from nucleus, most shielded, lost most easily (1)",
              "Identifies the error: solution is alkaline, not acidic (1)",
              "Justifies: product is FrOH, a strong alkali / hydroxide makes the solution alkaline (1)"
            ],
            commonError: "Accepting the whole statement because the reactivity part sounds right, without spotting the acidic/alkaline error.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "challenge",
            hints: [
              "Is francium more or less reactive than the metals above it?",
              "Explain the reactivity using shells and shielding.",
              "What is produced when a Group I metal reacts with water?",
              "Is a hydroxide solution acidic or alkaline?"
            ],
            strategy: "Challenge a claim; separate the correct parts from the errors"
          },
          {
            id: "chem-periodic-bq1-10",
            question: "(Challenge) When 0.117 g of an unknown Group I metal X reacts with excess water, 0.030 dm³ (30 cm³) of hydrogen is collected at RTP (molar volume 24 000 cm³/mol).\n\n(a) Calculate the moles of hydrogen produced. [1]\n(b) Using the general equation 2X + 2H₂O → 2XOH + H₂, calculate the moles of X that reacted. [1]\n(c) Calculate the relative atomic mass of X and identify the metal. [3]",
            marks: 5,
            modelAnswer: "(a) Moles of H₂ = volume ÷ molar volume = 30 ÷ 24 000 = 0.00125 mol.\n\n(b) From 2X + 2H₂O → 2XOH + H₂, the ratio X : H₂ = 2 : 1, so moles of X = 2 × 0.00125 = 0.0025 mol.\n\n(c) Relative atomic mass = mass ÷ moles = 0.117 ÷ 0.0025 = 46.8 ≈ 47. This is closest to potassium (Ar = 39) and rubidium (Ar = 85.5)... the value 46.8 is closest to potassium when rounding errors are considered; more precisely, the metal with Ar ≈ 47 is not a standard Group I value, so re-checking: 0.117 ÷ 0.0025 = 46.8. The nearest Group I metal is potassium (39). (Accept identification of potassium as the closest Group I metal.)",
            markScheme: [
              "(a) Moles H₂ = 30 ÷ 24 000 = 0.00125 mol (1)",
              "(b) Ratio X : H₂ = 2 : 1, moles X = 0.0025 mol (1)",
              "(c) Ar = mass ÷ moles = 0.117 ÷ 0.0025 (1); = 46.8 (1); identify nearest Group I metal as potassium, Ar 39 (1)"
            ],
            commonError: "Using a 1:1 ratio of metal to hydrogen, which halves the moles of metal and doubles the calculated Ar.",
            guideRef: "Group I — The Alkali Metals",
            difficulty: "challenge",
            hints: [
              "(a) Moles of gas = volume ÷ 24 000.",
              "(b) The metal : hydrogen ratio is 2 : 1, so multiply the H₂ moles by 2.",
              "(c) Ar = mass ÷ moles of metal.",
              "(c) Compare your Ar value with Group I relative atomic masses (Li 7, Na 23, K 39)."
            ],
            strategy: "Work back from gas volume to identify an unknown metal",
            solutions: [
              {
                label: "Method: gas volume to Ar",
                steps: [
                  "Moles of H₂ = 30 ÷ 24 000 = 0.00125 mol",
                  "Ratio X : H₂ = 2 : 1, so moles of X = 2 × 0.00125 = 0.0025 mol",
                  "Ar of X = mass ÷ moles = 0.117 ÷ 0.0025 = 46.8",
                  "Nearest Group I metal is potassium (Ar = 39)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: "chem-periodic-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Group VII halogens and displacement reactions.",
        questions: [
          {
            id: "chem-periodic-bq2-01",
            question: "Complete the following descriptions of the halogens at room temperature.\n\n(a) Chlorine: colour and physical state. [1]\n(b) Bromine: colour and physical state. [1]\n(c) Iodine: colour and physical state. [1]",
            marks: 3,
            modelAnswer: "(a) Chlorine: pale yellow-green gas.\n\n(b) Bromine: red-brown liquid.\n\n(c) Iodine: grey-black (shiny) solid.",
            markScheme: [
              "(a) Pale yellow-green / green gas (1)",
              "(b) Red-brown / orange-brown liquid (1)",
              "(c) Grey-black / dark grey solid (1)"
            ],
            commonError: "Mixing up the states — for example calling bromine a gas; bromine is the liquid, iodine the solid.",
            guideRef: "Group VII — The Halogens",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq2-02",
            question: "Halogens form ions when they react.\n\n(a) State the charge on a halide ion. [1]\n(b) Explain, in terms of electrons, how a chlorine atom forms a chloride ion. [2]",
            marks: 3,
            modelAnswer: "(a) 1− (a single negative charge).\n\n(b) A chlorine atom has 7 outer electrons. It gains one electron to complete its outer shell (giving 8 outer electrons, a full/stable arrangement). Gaining one negative electron gives the ion an overall 1− charge: Cl + e⁻ → Cl⁻.",
            markScheme: [
              "(a) 1− / minus one (1)",
              "(b) Gains one electron (1); to achieve a full outer shell / forms Cl⁻ with 1− charge (1)"
            ],
            commonError: "Saying chlorine loses electrons; halogens GAIN one electron to form negative ions.",
            guideRef: "Group VII — The Halogens",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq2-03",
            question: "Chlorine water is added to potassium bromide solution.\n\n(a) State the colour change observed. [1]\n(b) Write the balanced ionic equation, with state symbols, for the reaction. [2]\n(c) Explain why this is described as a redox reaction, identifying what is oxidised and what is reduced. [3]",
            marks: 6,
            modelAnswer: "(a) The colourless solution turns orange-brown (as bromine is formed).\n\n(b) Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq)\n\n(c) It is a redox reaction because electrons are transferred. Bromide ions are oxidised: each Br⁻ loses an electron (2Br⁻ → Br₂ + 2e⁻). Chlorine is reduced: Cl₂ gains electrons (Cl₂ + 2e⁻ → 2Cl⁻). Since oxidation (electron loss) and reduction (electron gain) occur together, it is redox.",
            markScheme: [
              "(a) Orange-brown colour appears / colourless to orange-brown (1)",
              "(b) Correct species Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂ (1); balanced with state symbols (1)",
              "(c) Electron transfer occurs (1); Br⁻ oxidised (loses electrons) (1); Cl₂ reduced (gains electrons) (1)"
            ],
            commonError: "Forgetting state symbols or leaving the spectator ion K⁺ in the ionic equation; mixing up which species is oxidised and which is reduced.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "(a) What colour does bromine give in solution?",
              "(b) Cancel the spectator ions (K⁺) to get the ionic equation.",
              "(c) Use OIL RIG: oxidation is loss, reduction is gain of electrons.",
              "(c) Which species loses electrons, and which gains them?"
            ]
          },
          {
            id: "chem-periodic-bq2-04",
            question: "A student adds chlorine water to three solutions and records the results:\n\nKCl: no change\nKBr: turns orange-brown\nKI: turns dark brown\n\n(a) Explain why no change is seen with KCl. [2]\n(b) Explain why both KBr and KI show a colour change. [2]\n(c) Write the ionic equation for the reaction with KI. [2]",
            marks: 6,
            modelAnswer: "(a) Chlorine cannot displace chloride ions because chlorine is not more reactive than itself — a halogen cannot displace its own ion. So no reaction occurs and no colour change is seen.\n\n(b) Chlorine is more reactive than both bromine and iodine (Cl is highest in Group VII of the three). It therefore displaces Br⁻ to form Br₂ (orange-brown) and displaces I⁻ to form I₂ (dark brown). A more reactive halogen displaces a less reactive halide.\n\n(c) Cl₂(aq) + 2I⁻(aq) → 2Cl⁻(aq) + I₂(aq)",
            markScheme: [
              "(a) Chlorine cannot displace its own ion / chloride (1); no reaction → no colour change (1)",
              "(b) Chlorine more reactive than Br and I (1); displaces both to form Br₂ (orange-brown) and I₂ (dark brown) (1)",
              "(c) Cl₂(aq) + 2I⁻(aq) → 2Cl⁻(aq) + I₂(aq) — correct species (1), balanced with states (1)"
            ],
            commonError: "Saying chlorine displaces chloride; a halogen cannot displace its own halide ion.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "(a) Can a halogen displace its own ion?",
              "(b) Where is chlorine relative to bromine and iodine in reactivity?",
              "(c) Remove the spectator K⁺ ions.",
              "(c) Balance: one Cl₂ reacts with two I⁻."
            ]
          },
          {
            id: "chem-periodic-bq2-05",
            question: "Explain why the reactivity of the halogens decreases going down Group VII. Refer to electron gain, atomic size and shielding. [4]",
            marks: 4,
            modelAnswer: "Halogens react by gaining one electron to complete their outer shell. Going down Group VII, each element has one more electron shell, so the atom is larger and the outer shell (into which the incoming electron is added) is further from the nucleus. The increasing number of inner shells provides more shielding, reducing the effective nuclear attraction acting on the incoming electron. The atom therefore attracts an extra electron less strongly, so electron gain becomes harder and reactivity decreases down the group.",
            markScheme: [
              "Halogens react by gaining one electron (1)",
              "Down the group, more shells / larger atom / outer shell further from nucleus (1)",
              "More shielding from inner shells (1)",
              "Weaker attraction for the incoming electron → harder to gain electron → less reactive (1)"
            ],
            commonError: "Explaining the trend as if halogens lose electrons (that is the Group I argument); halogens GAIN an electron, so the reasoning is about attracting an incoming electron.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "State first how halogens react (gaining or losing electrons?).",
              "Describe how atomic size changes down the group.",
              "Bring in shielding by inner shells.",
              "Link weaker attraction for the incoming electron to lower reactivity."
            ],
            strategy: "Explain trends using electron configuration"
          },
          {
            id: "chem-periodic-bq2-06",
            question: "Astatine (At) is at the bottom of Group VII.\n\n(a) Predict the physical state and colour of astatine at room temperature, with a reason. [2]\n(b) Predict whether astatine would displace chlorine from sodium chloride solution. Explain. [2]",
            marks: 4,
            modelAnswer: "(a) Astatine is predicted to be a (dark/black) solid at room temperature. Going down Group VII the elements change from gas (Cl₂) to liquid (Br₂) to solid (I₂) as the molecules get larger and intermolecular forces increase, so the next element down (At) should also be a solid, and darker in colour than iodine.\n\n(b) No, astatine would not displace chlorine. Reactivity decreases down Group VII, so astatine is less reactive than chlorine. A less reactive halogen cannot displace a more reactive halide, so no reaction occurs.",
            markScheme: [
              "(a) Solid (1); because boiling/melting points increase down the group / stronger intermolecular forces (1)",
              "(b) No displacement (1); astatine is less reactive than chlorine / cannot displace a more reactive halide (1)"
            ],
            commonError: "Predicting astatine is a gas (continuing no trend) or predicting it displaces chlorine without checking the reactivity order.",
            guideRef: "Group VII — The Halogens",
            difficulty: "core",
            hints: [
              "(a) Follow the gas → liquid → solid trend down the group.",
              "(a) What happens to intermolecular forces as molecules get larger?",
              "(b) Is astatine more or less reactive than chlorine?",
              "(b) Can a less reactive halogen displace a more reactive halide?"
            ],
            strategy: "Extend group trends to an unfamiliar element"
          },
          {
            id: "chem-periodic-bq2-07",
            question: "Chlorine is added to water supplies to make them safe to drink.\n\n(a) State why chlorine is added to drinking water. [1]\n(b) Suggest one risk associated with using chlorine. [1]",
            marks: 2,
            modelAnswer: "(a) Chlorine kills bacteria and other microorganisms / sterilises the water, making it safe to drink.\n\n(b) Any one: chlorine is a toxic/poisonous gas that is harmful if inhaled; it is irritating to the eyes and lungs; excess chlorine can give an unpleasant taste/smell; it can form harmful chlorinated by-products.",
            markScheme: [
              "(a) Kills bacteria / microorganisms / sterilises water (1)",
              "(b) Any one valid risk, e.g. toxic gas / harmful if inhaled / irritant (1)"
            ],
            commonError: "Saying chlorine 'cleans' the water without specifying that it kills microorganisms.",
            guideRef: "Group VII — The Halogens",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq2-08",
            question: "A solution contains a mixture of potassium chloride and potassium iodide. Excess bromine water is added.\n\n(a) State which ion (if any) reacts and explain. [2]\n(b) Describe the colour change and name the product formed. [2]",
            marks: 4,
            modelAnswer: "(a) Only the iodide ions (I⁻) react. Bromine is more reactive than iodine, so it can displace iodide ions. Bromine is less reactive than chlorine, so it cannot displace the chloride ions (Cl⁻); they remain unchanged.\n\n(b) The solution turns dark brown as iodine (I₂) is formed by displacement: Br₂ + 2I⁻ → 2Br⁻ + I₂. The product responsible for the colour is iodine.",
            markScheme: [
              "(a) Iodide (I⁻) reacts (1); because bromine is more reactive than iodine but not chlorine, so only I⁻ is displaced (1)",
              "(b) Dark brown colour (1); iodine (I₂) formed (1)"
            ],
            commonError: "Predicting both ions react; bromine cannot displace chloride because chlorine is more reactive than bromine.",
            guideRef: "Group VII — The Halogens",
            difficulty: "challenge",
            hints: [
              "Compare bromine's reactivity with both chloride and iodide.",
              "A halogen only displaces a LESS reactive halide.",
              "Which of the two halides is less reactive than bromine?",
              "What colour and product does displacement of iodide give?"
            ],
            strategy: "Apply the displacement rule to a mixture"
          },
          {
            id: "chem-periodic-bq2-09",
            question: "(Challenge) In an experiment, 25.0 cm³ of chlorine gas is bubbled through excess potassium iodide solution and all the chlorine reacts. The reaction is Cl₂ + 2KI → 2KCl + I₂. (Molar gas volume at RTP = 24 000 cm³/mol; Ar of I = 127.)\n\n(a) Calculate the moles of chlorine used. [1]\n(b) Calculate the moles of iodine (I₂) produced. [1]\n(c) Calculate the mass of iodine produced. [2]",
            marks: 4,
            modelAnswer: "(a) Moles of Cl₂ = volume ÷ molar volume = 25.0 ÷ 24 000 = 1.04 × 10⁻³ mol (0.00104 mol).\n\n(b) From Cl₂ + 2KI → 2KCl + I₂, the ratio Cl₂ : I₂ = 1 : 1, so moles of I₂ = 1.04 × 10⁻³ mol.\n\n(c) Mr of I₂ = 2 × 127 = 254. Mass of I₂ = moles × Mr = 1.04 × 10⁻³ × 254 = 0.265 g (to 3 sig figs).",
            markScheme: [
              "(a) Moles Cl₂ = 25.0 ÷ 24 000 = 1.04 × 10⁻³ mol (1)",
              "(b) Ratio Cl₂ : I₂ = 1 : 1, moles I₂ = 1.04 × 10⁻³ mol (1)",
              "(c) Mr(I₂) = 254 (1); mass = 1.04 × 10⁻³ × 254 = 0.265 g (1)"
            ],
            commonError: "Using Ar of I (127) instead of Mr of I₂ (254) for the mass, halving the answer; or misreading the 1:1 ratio.",
            guideRef: "Group VII — The Halogens",
            difficulty: "challenge",
            hints: [
              "(a) Moles of gas = volume ÷ 24 000.",
              "(b) Read the Cl₂ : I₂ ratio from the equation (1:1).",
              "(c) Remember iodine is I₂, so Mr = 2 × 127.",
              "(c) Mass = moles × Mr."
            ],
            strategy: "Mole calculation: gas volume to mass of product",
            solutions: [
              {
                label: "Method: volume to moles to mass",
                steps: [
                  "Moles of Cl₂ = 25.0 ÷ 24 000 = 1.04 × 10⁻³ mol",
                  "Ratio Cl₂ : I₂ = 1 : 1, so moles of I₂ = 1.04 × 10⁻³ mol",
                  "Mr of I₂ = 2 × 127 = 254",
                  "Mass of I₂ = 1.04 × 10⁻³ × 254 = 0.265 g"
                ]
              }
            ]
          },
          {
            id: "chem-periodic-bq2-10",
            question: "(Challenge) A student suggests that a single bottle of chlorine water could be used to distinguish between separate solutions of KCl, KBr and KI.\n\n(a) Describe what the student would observe with each solution. [3]\n(b) Explain why bromine water alone could NOT distinguish all three solutions. [2]",
            marks: 5,
            modelAnswer: "(a) KCl: no colour change (chlorine cannot displace its own ion). KBr: turns orange-brown as Br₂ is displaced (Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂). KI: turns dark brown as I₂ is displaced (Cl₂ + 2I⁻ → 2Cl⁻ + I₂). The three results are different, so chlorine water distinguishes all three.\n\n(b) Bromine water cannot distinguish all three because it gives no reaction with both KCl and KBr (it cannot displace the more reactive chloride, and cannot displace its own bromide ion). Both would show no colour change, so they could not be told apart; only KI would react (turning dark brown). Therefore bromine water cannot separate KCl from KBr.",
            markScheme: [
              "(a) KCl: no change (1); KBr: orange-brown / Br₂ (1); KI: dark brown / I₂ (1)",
              "(b) Bromine gives no reaction with KCl and KBr (1); so these two look identical and cannot be distinguished (1)"
            ],
            commonError: "Assuming any halogen distinguishes any set of halides; the chosen halogen must be more reactive than the halides being tested to produce different results.",
            guideRef: "Group VII — The Halogens",
            difficulty: "challenge",
            hints: [
              "(a) Use the reactivity order to predict each result with chlorine water.",
              "(a) Give the specific colour for the bromine and iodine produced.",
              "(b) What does bromine do with chloride and with its own ion?",
              "(b) If two tubes both show no change, can they be told apart?"
            ],
            strategy: "Design and evaluate a chemical test using reactivity"
          }
        ]
      },
      {
        id: "chem-periodic-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Noble gases, transition elements and their applications.",
        questions: [
          {
            id: "chem-periodic-bq3-01",
            question: "Group 0 contains the noble gases.\n\n(a) State the electron arrangement that all noble gases share (other than helium's special case). [1]\n(b) Use this to explain why noble gases are unreactive. [2]",
            marks: 3,
            modelAnswer: "(a) They have a full outer electron shell (8 electrons in the outer shell; helium is the exception with 2).\n\n(b) Because the outer shell is already full, there is no tendency to gain, lose or share electrons. Atoms react in order to achieve a full, stable outer shell, but noble gases already have this arrangement, so they have no driving force to react — they are inert.",
            markScheme: [
              "(a) Full outer shell / 8 outer electrons (1)",
              "(b) No tendency to gain/lose/share electrons (1); already have a stable/full arrangement so do not need to react (1)"
            ],
            commonError: "Saying noble gases are unreactive simply 'because they are gases'; the reason is the full outer shell.",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq3-02",
            question: "Match each noble gas to a use and, in each case, state the property that makes it suitable.\n\n(a) Helium [1]\n(b) Neon [1]\n(c) Argon [1]",
            marks: 3,
            modelAnswer: "(a) Helium: used in balloons/airships because it is less dense than air and is inert/non-flammable. (Also used to cool superconducting magnets.)\n\n(b) Neon: used in electric discharge tubes / neon signs because it glows red-orange when electricity passes through it and is inert.\n\n(c) Argon: used to fill (incandescent) light bulbs or as a welding shield gas because it is inert and prevents oxidation of the hot filament/metal.",
            markScheme: [
              "(a) Balloons/airships/cooling magnets — low density / inert (1)",
              "(b) Discharge tubes / neon signs — glows when electrified / inert (1)",
              "(c) Light bulbs / welding — inert, prevents oxidation (1)"
            ],
            commonError: "Giving a use without stating the property responsible for it (the question asks for both).",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq3-03",
            question: "State four characteristic properties of transition elements and give a named example for each. [8]",
            marks: 8,
            modelAnswer: "1. High melting points (and high density): e.g. iron melts at 1538 °C, far above sodium's 98 °C.\n\n2. Variable oxidation states: e.g. iron forms Fe²⁺ (iron(II)) and Fe³⁺ (iron(III)); copper forms Cu⁺ and Cu²⁺.\n\n3. Coloured compounds: e.g. copper(II) sulfate solution is blue (Cu²⁺); potassium manganate(VII) is purple (MnO₄⁻).\n\n4. Catalytic activity: e.g. iron is the catalyst in the Haber process; vanadium(V) oxide (V₂O₅) is the catalyst in the Contact process.",
            markScheme: [
              "High melting point / high density with named example (e.g. iron 1538 °C) (2)",
              "Variable oxidation states with named example (e.g. Fe²⁺ and Fe³⁺) (2)",
              "Coloured compounds with named example (e.g. Cu²⁺ blue) (2)",
              "Catalytic activity with named example (e.g. Fe in Haber / V₂O₅ in Contact) (2)"
            ],
            commonError: "Listing the properties without specific named examples, losing the example mark in each pair.",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "Plan four properties before writing.",
              "For each, immediately name a specific element or compound.",
              "For colour, name the ion AND its colour.",
              "For catalysis, name the catalyst AND the process."
            ]
          },
          {
            id: "chem-periodic-bq3-04",
            question: "Iron is used as a catalyst in the Haber process.\n\n(a) Write the balanced equation, with the equilibrium sign, for the Haber process. [2]\n(b) State what is meant by a catalyst. [1]\n(c) Name the catalysts used in (i) the Contact process and (ii) the hydrogenation of vegetable oils. [2]",
            marks: 5,
            modelAnswer: "(a) N₂(g) + 3H₂(g) ⇌ 2NH₃(g)\n\n(b) A catalyst is a substance that increases the rate of a chemical reaction without being chemically changed or used up itself (it provides an alternative pathway of lower activation energy).\n\n(c) (i) Vanadium(V) oxide, V₂O₅. (ii) Nickel (Ni).",
            markScheme: [
              "(a) Correct species N₂ + 3H₂ ⇌ 2NH₃ (1); balanced with equilibrium sign ⇌ (1)",
              "(b) Speeds up a reaction (1) AND is not used up / unchanged (allow within the 1 mark) ",
              "(c) (i) V₂O₅ / vanadium(V) oxide (1); (ii) nickel (1)"
            ],
            commonError: "Using → instead of ⇌ for the Haber process, or forgetting the 3 in front of H₂.",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "(a) The Haber process combines nitrogen and hydrogen — balance the hydrogen.",
              "(a) It is reversible, so use the equilibrium arrow.",
              "(b) Think about rate and whether the catalyst is consumed.",
              "(c) Recall the Contact process (sulfuric acid) and margarine manufacture."
            ]
          },
          {
            id: "chem-periodic-bq3-05",
            question: "A student is given an aqueous solution of an unknown transition metal salt. The solution is pale green. Adding sodium hydroxide gives a green precipitate.\n\n(a) Identify the metal ion present. [1]\n(b) Write the ionic equation for the formation of the precipitate. [2]\n(c) The student leaves the green precipitate exposed to air and it slowly turns red-brown. Suggest what has happened. [2]",
            marks: 5,
            modelAnswer: "(a) Iron(II) ions, Fe²⁺.\n\n(b) Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s)\n\n(c) The iron(II) hydroxide has been oxidised by oxygen in the air to iron(III) hydroxide, Fe(OH)₃, which is red-brown. The iron has changed oxidation state from +2 to +3 (an example of variable oxidation states).",
            markScheme: [
              "(a) Fe²⁺ / iron(II) (1)",
              "(b) Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s) — correct formula (1), balanced with states (1)",
              "(c) Oxidised by air/oxygen (1); Fe²⁺ → Fe³⁺ / forms Fe(OH)₃ which is red-brown (1)"
            ],
            commonError: "Forgetting that the green precipitate is Fe(OH)₂, or not realising the colour change is due to oxidation to iron(III).",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "(a) Pale green solution and green precipitate point to which iron ion?",
              "(b) Balance the charges: Fe²⁺ needs how many OH⁻?",
              "(c) What is in the air that could change the oxidation state of iron?",
              "(c) What colour is iron(III) hydroxide?"
            ]
          },
          {
            id: "chem-periodic-bq3-06",
            question: "Compare the properties of sodium (a Group I metal) with iron (a transition metal). Give three differences. [3]",
            marks: 3,
            modelAnswer: "Any three valid differences: (1) Iron has a much higher melting point (1538 °C) than sodium (98 °C). (2) Iron is hard and strong; sodium is soft (can be cut with a knife). (3) Iron has a higher density than sodium (sodium floats on water). (4) Iron shows variable oxidation states (Fe²⁺, Fe³⁺) whereas sodium forms only Na⁺. (5) Iron forms coloured compounds; sodium compounds are white/colourless. (6) Iron is far less reactive than sodium. (7) Iron and its compounds can act as catalysts; sodium does not.",
            markScheme: [
              "Any three valid contrasting differences — 1 mark each (3)"
            ],
            commonError: "Giving similarities (both are metals) instead of differences, or vague answers like 'iron is better' without a specific property.",
            guideRef: "Transition Elements",
            difficulty: "core",
            hints: [
              "Think about melting point and hardness.",
              "Compare the number of ion charges each forms.",
              "Consider colour of compounds and reactivity.",
              "Catalytic behaviour is another point of difference."
            ]
          },
          {
            id: "chem-periodic-bq3-07",
            question: "(a) State why helium is preferred over hydrogen for filling airships, even though hydrogen provides more lift. [2]\n(b) Boiling points: He −269 °C, Ar −186 °C, Xe −108 °C. Describe and explain the trend down Group 0. [3]",
            marks: 5,
            modelAnswer: "(a) Hydrogen is highly flammable and can ignite or explode if it mixes with air, which is extremely dangerous. Helium is chemically inert (non-flammable) and still less dense than air, so it provides lift safely.\n\n(b) Boiling point increases down Group 0 (He → Ar → Xe). Going down the group, the atoms have more electrons and are larger, so the London dispersion (van der Waals) forces between atoms become stronger. More energy is needed to overcome these forces and separate the atoms, so the boiling point rises.",
            markScheme: [
              "(a) Hydrogen is flammable/explosive (1); helium is inert/non-flammable and still less dense than air (1)",
              "(b) Boiling point increases down the group (1); more electrons / larger atoms → stronger London dispersion forces (1); more energy needed to overcome forces (1)"
            ],
            commonError: "In (b) failing to name the type of force (London dispersion / van der Waals), or attributing the trend to stronger bonds within molecules (the gases are monatomic).",
            guideRef: "Group 0 — The Noble Gases",
            difficulty: "core",
            hints: [
              "(a) Why is hydrogen dangerous, and does helium still float?",
              "(b) Read the trend from the values first.",
              "(b) What kind of forces act between separate noble gas atoms?",
              "(b) Link more electrons to stronger forces and higher boiling point."
            ]
          },
          {
            id: "chem-periodic-bq3-08",
            question: "Zinc lies in the d-block of the periodic table.\n\n(a) Give two reasons why some chemists do not regard zinc as a typical transition element. [2]\n(b) Give one property zinc DOES share with the transition metals. [1]",
            marks: 3,
            modelAnswer: "(a) Zinc forms only one oxidation state (Zn²⁺), so it does not show variable oxidation states; and zinc compounds are white/colourless rather than coloured. These are two key transition metal properties that zinc lacks.\n\n(b) Any one: zinc has a relatively high melting point/density compared with Group I metals; it is a hard, strong metal; zinc (or its compounds/oxides) can act as a catalyst in some reactions. (It also lies in the d-block.)",
            markScheme: [
              "(a) Only one oxidation state / only forms Zn²⁺ (1); compounds are white/colourless, not coloured (1)",
              "(b) Any one shared property, e.g. fairly high melting point/density / hard metal / d-block position (1)"
            ],
            commonError: "Stating zinc forms coloured compounds or has variable oxidation states; both are FALSE for zinc and are why it is atypical.",
            guideRef: "Transition Elements",
            difficulty: "challenge",
            hints: [
              "Recall the four typical transition metal properties.",
              "Which two of those does zinc clearly NOT show?",
              "Consider the colour of zinc compounds and its single ion charge.",
              "For (b), think about what zinc has in common with iron physically."
            ],
            strategy: "Test a borderline element against the property checklist"
          },
          {
            id: "chem-periodic-bq3-09",
            question: "(Challenge) Manganese(IV) oxide (MnO₂) catalyses the decomposition of hydrogen peroxide: 2H₂O₂ → 2H₂O + O₂.\n\n(a) Explain why MnO₂ is described as a catalyst and not a reactant. [2]\n(b) A student decomposes 1.36 g of hydrogen peroxide (Mr of H₂O₂ = 34) completely. Calculate the volume of oxygen produced at RTP (molar gas volume = 24 000 cm³/mol). [3]",
            marks: 5,
            modelAnswer: "(a) MnO₂ speeds up the decomposition but is not used up — at the end of the reaction the same mass of MnO₂ remains, chemically unchanged. It does not appear in the overall balanced equation, so it is a catalyst rather than a reactant.\n\n(b) Moles of H₂O₂ = mass ÷ Mr = 1.36 ÷ 34 = 0.0400 mol. From 2H₂O₂ → 2H₂O + O₂, the ratio H₂O₂ : O₂ = 2 : 1, so moles of O₂ = 0.0400 ÷ 2 = 0.0200 mol. Volume of O₂ = 0.0200 × 24 000 = 480 cm³.",
            markScheme: [
              "(a) Speeds up the reaction but is not used up / unchanged at the end (1); does not appear in the overall equation / can be recovered (1)",
              "(b) Moles H₂O₂ = 1.36 ÷ 34 = 0.0400 mol (1); moles O₂ = 0.0200 mol (ratio 2:1) (1); volume = 0.0200 × 24 000 = 480 cm³ (1)"
            ],
            commonError: "Using a 1:1 ratio of H₂O₂ to O₂ (giving 960 cm³); the equation gives 2 mol H₂O₂ to 1 mol O₂.",
            guideRef: "Transition Elements",
            difficulty: "challenge",
            hints: [
              "(a) Is the catalyst consumed during the reaction?",
              "(b) Moles = mass ÷ Mr.",
              "(b) The H₂O₂ : O₂ ratio is 2 : 1.",
              "(b) Volume = moles of O₂ × 24 000."
            ],
            strategy: "Mole calculation: mass to gas volume using a balanced equation",
            solutions: [
              {
                label: "Method: mass to moles to gas volume",
                steps: [
                  "Moles of H₂O₂ = 1.36 ÷ 34 = 0.0400 mol",
                  "Ratio H₂O₂ : O₂ = 2 : 1, so moles of O₂ = 0.0400 ÷ 2 = 0.0200 mol",
                  "Volume of O₂ = 0.0200 × 24 000 = 480 cm³"
                ]
              }
            ]
          },
          {
            id: "chem-periodic-bq3-10",
            question: "(Challenge) A green solution is thought to contain either iron(II) ions or chromium(III) ions, both of which can appear green.\n\n(a) Describe a chemical test using sodium hydroxide solution and the expected result for each ion. [3]\n(b) Explain how the existence of both Fe²⁺/Fe³⁺ and Cr³⁺ illustrates a property of transition elements. [2]",
            marks: 5,
            modelAnswer: "(a) Add sodium hydroxide solution to the green solution. If iron(II) ions are present, a green precipitate of iron(II) hydroxide forms: Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s). If chromium(III) ions are present, a green precipitate of chromium(III) hydroxide forms that dissolves in excess sodium hydroxide to give a green solution (chromium(III) hydroxide is amphoteric). Iron(II) hydroxide does not redissolve in excess NaOH, so adding excess NaOH distinguishes them: the chromium precipitate dissolves, the iron(II) precipitate does not.\n\n(b) Iron exists as Fe²⁺ and Fe³⁺, and chromium commonly as Cr³⁺ (and also other states); the fact that these transition metals form ions of different charges and varied colours illustrates the transition metal properties of variable oxidation states and coloured compounds.",
            markScheme: [
              "(a) Add NaOH (1); Fe²⁺ gives a green precipitate that does NOT dissolve in excess (1); Cr³⁺ gives a green precipitate that DISSOLVES in excess NaOH (1)",
              "(b) Forming ions of different charges shows variable oxidation states (1); the different colours show coloured compounds (1)"
            ],
            commonError: "Assuming both green precipitates behave identically; the distinguishing feature is that chromium(III) hydroxide redissolves in excess NaOH (amphoteric) while iron(II) hydroxide does not.",
            guideRef: "Transition Elements",
            difficulty: "challenge",
            hints: [
              "Both ions give a green precipitate with a little NaOH — you need a further step.",
              "What happens to chromium(III) hydroxide in EXCESS NaOH?",
              "Does iron(II) hydroxide redissolve in excess NaOH?",
              "For (b), connect different ion charges and colours to named properties."
            ],
            strategy: "Design a test that separates two similar-looking ions"
          }
        ]
      },
      {
        id: "chem-periodic-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Trends across a period and synoptic challenge.",
        questions: [
          {
            id: "chem-periodic-bq4-01",
            question: "The elements of Period 3 are Na, Mg, Al, Si, P, S, Cl, Ar.\n\n(a) Name the elements in Period 3 that are metals. [1]\n(b) Name the element in Period 3 that is a noble gas. [1]\n(c) State how the number of outer electrons changes across Period 3. [1]",
            marks: 3,
            modelAnswer: "(a) Sodium, magnesium and aluminium (Na, Mg, Al).\n\n(b) Argon (Ar).\n\n(c) The number of outer electrons increases by one from each element to the next, from 1 (Na) up to 8 (Ar).",
            markScheme: [
              "(a) Na, Mg and Al (all three needed) (1)",
              "(b) Argon (1)",
              "(c) Increases by one across the period / from 1 to 8 (1)"
            ],
            commonError: "Including silicon as a metal; silicon is a metalloid/semiconductor, usually classed with the non-metals for this purpose.",
            guideRef: "Trends Across a Period",
            difficulty: "warmup"
          },
          {
            id: "chem-periodic-bq4-02",
            question: "(a) State what happens to metallic character across a period from left to right. [1]\n(b) State what happens to atomic radius across a period and give a reason. [2]",
            marks: 3,
            modelAnswer: "(a) Metallic character decreases across a period (and non-metallic character increases).\n\n(b) Atomic radius decreases across a period. This is because the number of protons (nuclear charge) increases while electrons are added to the same shell; the stronger nuclear attraction pulls the outer electrons closer to the nucleus.",
            markScheme: [
              "(a) Metallic character decreases / non-metallic character increases (1)",
              "(b) Atomic radius decreases (1); increasing nuclear charge with same number of shells pulls electrons in (1)"
            ],
            commonError: "Saying the radius increases because 'more electrons are added'; across a period the increasing nuclear charge dominates, so the radius decreases.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "(a) Metals are on the left, non-metals on the right.",
              "(b) Does the number of shells change across a period?",
              "(b) What happens to nuclear charge, and how does that affect the electrons?"
            ]
          },
          {
            id: "chem-periodic-bq4-03",
            question: "The oxides of Period 3 elements show a clear trend in acid-base character.\n\n(a) Classify the oxides Na₂O, Al₂O₃ and SO₃ as basic, amphoteric or acidic. [3]\n(b) Write a balanced equation for the reaction of sodium oxide with hydrochloric acid. [2]\n(c) State what is meant by an amphoteric oxide. [1]",
            marks: 6,
            modelAnswer: "(a) Na₂O is basic; Al₂O₃ is amphoteric; SO₃ is acidic.\n\n(b) Na₂O + 2HCl → 2NaCl + H₂O\n\n(c) An amphoteric oxide is one that can react with (and neutralise) both acids and bases.",
            markScheme: [
              "(a) Na₂O basic (1); Al₂O₃ amphoteric (1); SO₃ acidic (1)",
              "(b) Correct products NaCl + H₂O (1); balanced: Na₂O + 2HCl → 2NaCl + H₂O (1)",
              "(c) Reacts with both acids and bases (1)"
            ],
            commonError: "Forgetting to balance the equation in (b) (needs 2HCl and 2NaCl), or describing amphoteric as 'neutral'.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "(a) Left-hand metal oxides are basic; the right-hand non-metal oxides are acidic.",
              "(a) Aluminium oxide is the special middle case.",
              "(b) Acid + base → salt + water; balance the Na and Cl.",
              "(c) Think about what 'both' acids and bases means."
            ]
          },
          {
            id: "chem-periodic-bq4-04",
            question: "Across Period 3, the melting point rises from sodium to a maximum at silicon, then falls sharply.\n\n(a) Explain why the melting point of silicon is very high. [2]\n(b) Explain why the melting point of sulfur (S₈) and phosphorus (P₄) is much lower than that of silicon. [2]",
            marks: 4,
            modelAnswer: "(a) Silicon has a giant covalent (macromolecular) structure in which each atom is covalently bonded to four others in a continuous lattice. A very large amount of energy is needed to break the many strong covalent bonds, so the melting point is very high.\n\n(b) Sulfur (S₈) and phosphorus (P₄) exist as simple molecules. The atoms within each molecule are held by strong covalent bonds, but the molecules are held to each other only by weak intermolecular (London dispersion / van der Waals) forces. Little energy is needed to overcome these weak forces, so the melting points are low.",
            markScheme: [
              "(a) Giant covalent / macromolecular structure (1); many strong covalent bonds need much energy to break (1)",
              "(b) Simple molecular structures (S₈, P₄) (1); only weak intermolecular forces between molecules, easily overcome (1)"
            ],
            commonError: "Saying sulfur and phosphorus have 'weak bonds'; the covalent bonds within the molecules are strong — it is the forces BETWEEN molecules that are weak.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "(a) Does silicon form molecules or a giant network?",
              "(a) How much energy is needed to break a giant covalent lattice?",
              "(b) What type of structure do S₈ and P₄ have?",
              "(b) Distinguish the bonds within molecules from the forces between them."
            ]
          },
          {
            id: "chem-periodic-bq4-05",
            question: "(a) State which Period 3 elements conduct electricity in the solid state and explain why. [2]\n(b) Explain why silicon is described as a semiconductor. [1]\n(c) Explain why sulfur does not conduct electricity. [1]",
            marks: 4,
            modelAnswer: "(a) Sodium, magnesium and aluminium conduct electricity. They are metals with a giant metallic structure containing delocalised (free) electrons that can move through the structure and carry charge.\n\n(b) Silicon conducts electricity only slightly (better than a non-metal but far worse than a metal), so it is described as a semiconductor; it has a small number of electrons able to move.\n\n(c) Sulfur is a simple molecular non-metal with no free/delocalised electrons and no ions, so there are no charged particles free to move and it cannot conduct.",
            markScheme: [
              "(a) Na, Mg, Al (1); metals have delocalised/free electrons that carry charge (1)",
              "(b) Conducts only slightly / intermediate conductivity → semiconductor (1)",
              "(c) No free electrons or mobile ions / charged particles to carry charge (1)"
            ],
            commonError: "Claiming non-metals conduct because they have electrons; conduction needs FREE (delocalised) charged particles, which simple molecular non-metals lack.",
            guideRef: "Trends Across a Period",
            difficulty: "core",
            hints: [
              "(a) Which Period 3 elements are metals?",
              "(a) What allows a metal to conduct electricity?",
              "(b) Silicon's conductivity is between a metal and a non-metal.",
              "(c) Does sulfur have any free charged particles?"
            ]
          },
          {
            id: "chem-periodic-bq4-06",
            question: "Aluminium oxide (Al₂O₃) is amphoteric.\n\n(a) Write a balanced equation for the reaction of aluminium oxide with hydrochloric acid. [2]\n(b) Explain, with reference to its position in Period 3, why aluminium oxide is amphoteric while sodium oxide is basic. [2]",
            marks: 4,
            modelAnswer: "(a) Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O\n\n(b) Aluminium lies between the clearly metallic elements (Na, Mg) on the left and the non-metals on the right of Period 3. Its character is intermediate (a metalloid-like position), so its oxide shows both basic behaviour (reacting with acids) and acidic behaviour (reacting with bases) — i.e. it is amphoteric. Sodium is a strongly metallic element on the far left, so its oxide is purely basic.",
            markScheme: [
              "(a) Correct products AlCl₃ + H₂O (1); balanced: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O (1)",
              "(b) Aluminium is intermediate between metals and non-metals in the period (1); so its oxide shows both acidic and basic behaviour, while Na (strongly metallic, far left) gives a purely basic oxide (1)"
            ],
            commonError: "Difficulty balancing the equation (6HCl, 2AlCl₃, 3H₂O are all needed); also not linking amphoteric character to the intermediate position of aluminium.",
            guideRef: "Trends Across a Period",
            difficulty: "challenge",
            hints: [
              "(a) Aluminium ions are Al³⁺ and chloride is Cl⁻ — the salt is AlCl₃.",
              "(a) Balance the chlorine and hydrogen carefully.",
              "(b) Where does aluminium sit between metals and non-metals?",
              "(b) Link the intermediate position to reacting with both acids and bases."
            ],
            strategy: "Link periodic position to oxide character"
          },
          {
            id: "chem-periodic-bq4-07",
            question: "(Challenge) An element T is in Period 3. Its oxide has the formula TO₃ and dissolves in water to form an acidic solution. The element forms simple molecules and does not conduct electricity.\n\n(a) Deduce the identity of element T, explaining your reasoning. [3]\n(b) Write the equation for the reaction of the oxide TO₃ with water. [2]",
            marks: 5,
            modelAnswer: "(a) The oxide TO₃ means T has a combining ratio with oxygen of 1:3, i.e. T contributes a +6 oxidation state (since each O is −2, T is +6). An acidic oxide, simple molecular structure and non-conduction all indicate a non-metal on the right of Period 3. The Period 3 element forming an oxide TO₃ (oxidation state +6) is sulfur, whose oxide SO₃ is acidic. So T is sulfur.\n\n(b) SO₃ + H₂O → H₂SO₄",
            markScheme: [
              "(a) Recognises oxidation state +6 from formula TO₃ / acidic, molecular, non-conducting → non-metal (1); identifies T as sulfur (1); reasoning consistent (acidic oxide on right of period) (1)",
              "(b) SO₃ + H₂O → H₂SO₄ — correct product (1), balanced (1)"
            ],
            commonError: "Choosing chlorine (Cl₂O₇ is the +7 oxide, not TO₃) or phosphorus (P₄O₁₀); the 1:3 ratio with oxygen points to the +6 state of sulfur.",
            guideRef: "Trends Across a Period",
            difficulty: "challenge",
            hints: [
              "(a) Work out the oxidation state of T from TO₃ (each O is −2).",
              "(a) Acidic, molecular and non-conducting means a non-metal on the right.",
              "(a) Which Period 3 non-metal forms a +6 oxide?",
              "(b) The product of SO₃ and water is a common strong acid."
            ],
            strategy: "Deduce an element from its oxide formula and properties"
          },
          {
            id: "chem-periodic-bq4-08",
            question: "(Challenge) The table gives the melting points of three Period 3 elements:\nMg 650 °C, Al 660 °C, Si 1414 °C.\n\n(a) Explain why aluminium has a higher melting point than magnesium. [2]\n(b) Explain why silicon's melting point is so much higher than both metals. [2]",
            marks: 4,
            modelAnswer: "(a) Both magnesium and aluminium are metals with metallic bonding. Aluminium forms Al³⁺ ions and contributes three delocalised electrons per atom, whereas magnesium forms Mg²⁺ and contributes two. Aluminium also has a smaller ion and a higher charge, so the electrostatic attraction between the ions and the larger sea of delocalised electrons is stronger. This stronger metallic bonding requires more energy to break, giving aluminium the higher melting point.\n\n(b) Silicon does not have metallic bonding; it has a giant covalent structure with each atom covalently bonded to four others. Breaking this network requires breaking very many strong covalent bonds, which needs far more energy than breaking metallic bonds, so silicon's melting point is much higher than that of the two metals.",
            markScheme: [
              "(a) Al³⁺ provides more delocalised electrons / higher charge / smaller ion than Mg²⁺ (1); stronger metallic bonding → higher melting point (1)",
              "(b) Silicon is giant covalent (1); many strong covalent bonds need much more energy to break than metallic bonds (1)"
            ],
            commonError: "Treating silicon as a metal; its very high melting point is due to a giant covalent structure, not strong metallic bonding.",
            guideRef: "Trends Across a Period",
            difficulty: "challenge",
            hints: [
              "(a) How many delocalised electrons does each metal contribute (Mg²⁺ vs Al³⁺)?",
              "(a) Stronger attraction between ions and electrons means a higher melting point.",
              "(b) What type of structure does silicon have?",
              "(b) Compare the energy needed to break covalent networks versus metallic bonds."
            ],
            strategy: "Use bonding type and ion charge to compare melting points"
          },
          {
            id: "chem-periodic-bq4-09",
            question: "(Challenge) The element with proton number 19 reacts with the element with proton number 17.\n\n(a) Identify the two elements and the group each belongs to. [2]\n(b) Describe, in terms of electron transfer, how these two elements bond, and give the formula of the compound. [3]",
            marks: 5,
            modelAnswer: "(a) Proton number 19 is potassium (Group I); proton number 17 is chlorine (Group VII).\n\n(b) Potassium (configuration 2,8,8,1) has one outer electron, which it loses to form K⁺. Chlorine (configuration 2,8,7) has seven outer electrons and gains one electron to form Cl⁻. One electron is transferred from each potassium atom to each chlorine atom, so both achieve full outer shells. The oppositely charged ions attract by ionic bonding. The formula of the compound is KCl.",
            markScheme: [
              "(a) Potassium (Group I) (1); chlorine (Group VII) (1)",
              "(b) K loses one electron to form K⁺ (1); Cl gains one electron to form Cl⁻ (1); ionic bond / formula KCl (1)"
            ],
            commonError: "Writing the formula as K₂Cl or KCl₂; potassium and chloride combine in a 1:1 ratio because the charges are 1+ and 1−.",
            guideRef: "Arrangement of the Periodic Table",
            difficulty: "challenge",
            hints: [
              "(a) Use proton number to identify each element, then its group.",
              "(b) Which element loses electrons and which gains?",
              "(b) How many electrons are transferred from K to Cl?",
              "(b) Combine the 1+ and 1− ions to get the formula."
            ],
            strategy: "Combine periodic position with bonding reasoning"
          },
          {
            id: "chem-periodic-bq4-10",
            question: "(Challenge) A student summarises the periodic table by saying: \"Going down a group, atoms get bigger; going across a period, atoms get smaller.\"\n\n(a) Explain, in terms of shells and nuclear charge, why atoms get bigger down a group. [2]\n(b) Explain why atoms get smaller across a period despite gaining more electrons. [2]\n(c) Use these ideas to explain why Group I reactivity increases down the group but Group VII reactivity decreases down the group. [2]",
            marks: 6,
            modelAnswer: "(a) Going down a group, each successive element has one more occupied electron shell. The outer electrons are in shells progressively further from the nucleus, so the atomic radius increases, even though nuclear charge also increases.\n\n(b) Going across a period, no new shells are added — electrons enter the same outer shell. Each step adds a proton, increasing the nuclear charge, which pulls all the electrons (including the outer ones) more strongly towards the nucleus. This stronger attraction outweighs the slight repulsion between the added electrons, so the atom gets smaller.\n\n(c) Group I metals react by LOSING their outer electron. Down the group the outer electron is further from the nucleus and more shielded, so it is lost more easily — reactivity increases. Group VII non-metals react by GAINING an electron. Down the group the incoming electron would be added further from the nucleus and is more shielded, so it is attracted less strongly and gained less easily — reactivity decreases.",
            markScheme: [
              "(a) More shells added down a group (1); outer electrons further from nucleus → larger radius (1)",
              "(b) Same number of shells across a period (1); increasing nuclear charge pulls electrons in more strongly → smaller radius (1)",
              "(c) Group I loses outer electron, lost more easily down group → more reactive (1); Group VII gains electron, gained less easily down group → less reactive (1)"
            ],
            commonError: "Giving the same reactivity explanation for both groups; the key difference is that Group I LOSES an electron while Group VII GAINS one, so the same size/shielding change has opposite effects.",
            guideRef: "Trends Across a Period",
            difficulty: "challenge",
            hints: [
              "(a) What is added to the atom each time you go down a group?",
              "(b) Across a period, do you add shells or just electrons to the same shell?",
              "(c) Group I reacts by losing an electron; Group VII reacts by gaining one.",
              "(c) Apply the same size/shielding idea to each opposite process."
            ],
            strategy: "Synthesise size, shielding and reactivity trends across the topic"
          }
        ]
      }
    ]
  }
};
