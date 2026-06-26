import type { Topic } from "../types";

export const chemAtoms: Topic = {
  id: "chem-atoms",
  title: "Atomic Structure",
  subject: "chemistry",
  icon: "⚛️",
  blurb: "Protons, neutrons, electrons, isotopes, electron shells, and relative atomic mass.",
  intro:
    "Every substance in the universe is built from atoms — but what is inside an atom? In this topic you will discover the charged particles that make up the nucleus, see how electrons arrange themselves in shells, and learn how atoms of the same element can differ. Mastering atomic structure unlocks the rest of IGCSE Chemistry: it explains the Periodic Table, bonding, and reactivity.",

  // ─────────────────────────────────────────────────────────────────────────────
  // GUIDE
  // ─────────────────────────────────────────────────────────────────────────────
  guide: [
    // ── SECTION 1 ─────────────────────────────────────────────────────────────
    {
      heading: "Inside the Atom: Nucleus and Sub-atomic Particles",
      body: `An atom consists of a tiny, dense **nucleus** at its centre surrounded by electrons that occupy regions of space called **shells** (or energy levels).

The nucleus contains two types of particle:
- **Protons** — each carries a relative charge of **+1** and a relative mass of **1**.
- **Neutrons** — electrically neutral (relative charge **0**), relative mass **1**.

Surrounding the nucleus, moving at high speed, are **electrons**:
- Relative charge **−1**, relative mass approximately **1/1836 ≈ 0** (negligible).

Because atoms are electrically neutral, the number of electrons always equals the number of protons in an uncharged atom.

The **proton number** (also called **atomic number**, symbol **Z**) equals the number of protons and uniquely identifies an element.

The **nucleon number** (also called **mass number**, symbol **A**) equals the total number of protons plus neutrons:

A = Z + number of neutrons → number of neutrons = A − Z`,

      diagrams: [
        {
          caption: "Structure of the atom: nucleus (protons + neutrons) surrounded by electron shells",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram of an atom showing nucleus with protons and neutrons and two electron shells">
  <!-- background -->
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- shell 2 -->
  <circle cx="160" cy="100" r="82" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="5,4"/>
  <!-- shell 1 -->
  <circle cx="160" cy="100" r="50" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="5,4"/>
  <!-- nucleus background -->
  <circle cx="160" cy="100" r="22" fill="#1e3a5f" stroke="#fbbf24" stroke-width="2"/>
  <!-- proton -->
  <circle cx="152" cy="95" r="8" fill="#fb7185"/>
  <text x="152" y="99" text-anchor="middle" font-size="9" fill="#0f172a" font-family="sans-serif">p+</text>
  <!-- neutron -->
  <circle cx="168" cy="108" r="8" fill="#a78bfa"/>
  <text x="168" y="112" text-anchor="middle" font-size="9" fill="#0f172a" font-family="sans-serif">n</text>
  <!-- electron shell 1 -->
  <circle cx="160" cy="50" r="5" fill="#34d399"/>
  <circle cx="210" cy="100" r="5" fill="#34d399"/>
  <!-- electron shell 2 -->
  <circle cx="100" cy="68" r="5" fill="#34d399"/>
  <circle cx="220" cy="68" r="5" fill="#34d399"/>
  <circle cx="220" cy="132" r="5" fill="#34d399"/>
  <circle cx="100" cy="132" r="5" fill="#34d399"/>
  <circle cx="160" cy="182" r="5" fill="#34d399"/>
  <circle cx="78" cy="100" r="5" fill="#34d399"/>
  <!-- labels -->
  <text x="160" y="13" text-anchor="middle" font-size="11" fill="#b7bce0" font-family="sans-serif">Electron shells</text>
  <text x="238" y="94" font-size="10" fill="#34d399" font-family="sans-serif">e-</text>
  <text x="162" y="40" font-size="10" fill="#34d399" font-family="sans-serif">e-</text>
  <text x="141" y="104" font-size="10" fill="#fbbf24" font-family="sans-serif" font-weight="bold">Nucleus</text>
  <!-- legend -->
  <circle cx="20" cy="175" r="5" fill="#fb7185"/>
  <text x="30" y="179" font-size="10" fill="#b7bce0" font-family="sans-serif">proton (p+)</text>
  <circle cx="100" cy="175" r="5" fill="#a78bfa"/>
  <text x="110" y="179" font-size="10" fill="#b7bce0" font-family="sans-serif">neutron (n)</text>
  <circle cx="185" cy="175" r="5" fill="#34d399"/>
  <text x="195" y="179" font-size="10" fill="#b7bce0" font-family="sans-serif">electron (e-)</text>
</svg>`,
        },
        {
          caption: "Relative masses and charges of the three sub-atomic particles",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Table of sub-atomic particle properties: relative charge and relative mass">
  <!-- background -->
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- header row -->
  <rect x="10" y="20" width="300" height="28" fill="#1e3a5f" rx="4"/>
  <text x="60" y="39" font-size="12" fill="#38bdf8" font-family="sans-serif" font-weight="bold">Particle</text>
  <text x="155" y="39" font-size="12" fill="#38bdf8" font-family="sans-serif" font-weight="bold">Rel. charge</text>
  <text x="245" y="39" font-size="12" fill="#38bdf8" font-family="sans-serif" font-weight="bold">Rel. mass</text>
  <!-- proton row -->
  <rect x="10" y="52" width="300" height="36" fill="#1a2744" rx="2"/>
  <circle cx="40" cy="70" r="11" fill="#fb7185"/>
  <text x="40" y="74" text-anchor="middle" font-size="10" fill="#0f172a" font-family="sans-serif">p+</text>
  <text x="120" y="74" text-anchor="middle" font-size="13" fill="#eef0ff" font-family="sans-serif">Proton</text>
  <text x="185" y="74" text-anchor="middle" font-size="13" fill="#34d399" font-family="sans-serif">+1</text>
  <text x="270" y="74" text-anchor="middle" font-size="13" fill="#34d399" font-family="sans-serif">1</text>
  <!-- neutron row -->
  <rect x="10" y="92" width="300" height="36" fill="#0f172a" rx="2"/>
  <circle cx="40" cy="110" r="11" fill="#a78bfa"/>
  <text x="40" y="114" text-anchor="middle" font-size="10" fill="#0f172a" font-family="sans-serif">n</text>
  <text x="120" y="114" text-anchor="middle" font-size="13" fill="#eef0ff" font-family="sans-serif">Neutron</text>
  <text x="185" y="114" text-anchor="middle" font-size="13" fill="#fbbf24" font-family="sans-serif">0</text>
  <text x="270" y="114" text-anchor="middle" font-size="13" fill="#34d399" font-family="sans-serif">1</text>
  <!-- electron row -->
  <rect x="10" y="132" width="300" height="36" fill="#1a2744" rx="2"/>
  <circle cx="40" cy="150" r="11" fill="#34d399"/>
  <text x="40" y="154" text-anchor="middle" font-size="10" fill="#0f172a" font-family="sans-serif">e-</text>
  <text x="120" y="150" text-anchor="middle" font-size="13" fill="#eef0ff" font-family="sans-serif">Electron</text>
  <text x="185" y="150" text-anchor="middle" font-size="13" fill="#fb7185" font-family="sans-serif">-1</text>
  <text x="270" y="150" text-anchor="middle" font-size="9" fill="#34d399" font-family="sans-serif">~0 (1/1836)</text>
  <!-- note -->
  <text x="160" y="190" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif">Mass of electron is negligible compared to nucleons</text>
</svg>`,
        },
      ],

      keyPoints: [
        "Protons: relative charge +1, relative mass 1 (in the nucleus).",
        "Neutrons: relative charge 0, relative mass 1 (in the nucleus).",
        "Electrons: relative charge −1, relative mass ≈ 0 (in shells around the nucleus).",
        "Proton number Z = number of protons; nucleon number A = protons + neutrons.",
        "Number of neutrons = A − Z.",
      ],

      discovery: {
        problem:
          "A neutral atom has 19 protons and its mass number is 39. How many neutrons and electrons does it have? Can you work this out before reading on?",
        idea:
          "Number of neutrons = A − Z = 39 − 19 = 20. Number of electrons = Z = 19 (atom is neutral). This element is potassium, K.",
      },

      whyItWorks:
        "The mass number counts every particle that contributes meaningfully to the atom's mass. Because electron mass is about 1/1836 that of a proton, it is negligible — so A rounds to an integer equal to the nucleon count. Proton number alone identifies the element because the number of protons determines the nuclear charge and hence the number and arrangement of electrons, which govern all chemistry.",

      strategies: ["Memorise the triangle: A at the top, Z and (A−Z) below.", "Always identify Z first from the element symbol, then deduce neutron count."],
    },

    // ── SECTION 2 ─────────────────────────────────────────────────────────────
    {
      heading: "Isotopes and Their Properties",
      body: `**Isotopes** are atoms of the **same element** that have the **same number of protons** but **different numbers of neutrons**. Because they have identical proton numbers, they occupy the same position on the Periodic Table.

**Example — chlorine:**
- Chlorine-35: Z = 17, A = 35, neutrons = 18. Symbol: ³⁵₁₇Cl
- Chlorine-37: Z = 17, A = 37, neutrons = 20. Symbol: ³⁷₁₇Cl

**Chemical properties of isotopes are identical** because they have the same number and arrangement of electrons. Electron configuration determines how an atom reacts, and since proton number (and therefore electron number) is the same, isotopes behave identically in chemical reactions.

**Physical properties differ** because the atoms have different masses. This leads to small differences in properties such as rate of diffusion, density, and melting point, though these differences are usually small.

Isotopes can be **stable** or **unstable (radioactive)**. Radioactive isotopes (radioisotopes) decay, emitting radiation — used in medicine (e.g. iodine-131 in thyroid treatment) and carbon dating (carbon-14).`,

      keyPoints: [
        "Isotopes: same element (same Z), different A (different neutron count).",
        "Isotopes have identical chemical properties (same electronic configuration).",
        "Isotopes have slightly different physical properties (different mass).",
        "A stable nucleus needs a suitable neutron-to-proton ratio; excess neutrons → radioactive decay.",
        "The notation ᴬ_Z X shows mass number A (top) and proton number Z (bottom).",
      ],

      thinkDeeper:
        "Carbon-14 (¹⁴C) has 6 protons and 8 neutrons. It is radioactive and decays slowly. Living organisms constantly absorb ¹⁴C from the atmosphere, so the ratio of ¹⁴C to ¹²C stays constant while alive. After death, ¹⁴C decays without replacement. Measuring the ratio reveals how long ago the organism died — carbon dating. What assumption must hold for this technique to be valid?",

      discovery: {
        problem:
          "Two atoms: atom X has 17 protons and 18 neutrons; atom Y has 17 protons and 20 neutrons. Are these the same element? The same substance? Do they have the same chemical properties?",
        idea:
          "Both have Z = 17 → both are chlorine. They are the same element but different isotopes: ³⁵Cl and ³⁷Cl. They have identical chemical properties (same electron configuration: 2,8,7) but different masses.",
      },

      whyItWorks:
        "Chemical reactivity is governed by the electrons — specifically the outer-shell electrons that form bonds. The number of electrons equals the number of protons (Z). Because isotopes share the same Z, they share the same electron arrangement, so they react identically. The extra neutrons add mass but do not alter the electron configuration at all.",

      strategies: ["Check Z to identify the element, check A to identify the specific isotope.", "Isotope ≠ different element — same element, different mass."],
    },

    // ── SECTION 3 ─────────────────────────────────────────────────────────────
    {
      heading: "Relative Atomic Mass from Isotopic Abundances",
      body: `Most elements exist as a mixture of isotopes. The **relative atomic mass (Ar)** is the weighted mean mass of an atom of the element relative to 1/12 of the mass of a carbon-12 atom.

**Formula:**

Ar = Σ (isotopic mass × fractional abundance)

Or equivalently:

Ar = (mass₁ × %abundance₁ + mass₂ × %abundance₂ + …) ÷ 100

**Worked example — chlorine:**
- ³⁵Cl: mass = 35, abundance = 75%
- ³⁷Cl: mass = 37, abundance = 25%

Ar = (35 × 75 + 37 × 25) ÷ 100 = (2625 + 925) ÷ 100 = 3550 ÷ 100 = **35.5**

This matches the value on the Periodic Table.

**Key point:** Ar is almost never a whole number when an element has more than one naturally occurring isotope, because it is a weighted average. When Ar is close to a whole number it usually means one isotope dominates.`,

      keyPoints: [
        "Ar is a weighted mean mass relative to 1/12 the mass of carbon-12.",
        "Ar = Σ(isotopic mass × percentage abundance) ÷ 100.",
        "Ar is rarely a whole number for elements with multiple stable isotopes.",
        "The isotope present in greater abundance pulls Ar closer to its mass number.",
        "Ar appears on the Periodic Table below the element symbol.",
      ],

      discovery: {
        problem:
          "Boron has two naturally occurring isotopes: ¹⁰B (20.0%) and ¹¹B (80.0%). Before calculating, predict: will Ar be closer to 10 or to 11? Then calculate Ar.",
        idea:
          "Because ¹¹B is four times more abundant, Ar should be much closer to 11. Calculation: Ar = (10 × 20.0 + 11 × 80.0) ÷ 100 = (200 + 880) ÷ 100 = 1080 ÷ 100 = **10.8**. Confirmed: closer to 11.",
      },

      whyItWorks:
        "A weighted average multiplies each value by how often it occurs, then divides by the total. Using percentage abundances that sum to 100 means dividing by 100 gives the correct average mass per atom across a natural sample. The result represents the average mass you would measure for a large collection of atoms of that element.",

      strategies: [
        "Always check abundances sum to 100% before calculating.",
        "Predict which isotope 'wins' before calculating — a sanity check for your answer.",
        "Unit analysis: (mass × %) has units of 'mass-%', dividing by % gives just mass.",
      ],
    },

    // ── SECTION 4 ─────────────────────────────────────────────────────────────
    {
      heading: "Electronic Configuration and Electron Shells",
      body: `Electrons occupy **shells** (energy levels) around the nucleus. Shells fill from the inside outward, and each shell has a maximum capacity:

- **Shell 1** (closest to nucleus): maximum **2** electrons
- **Shell 2**: maximum **8** electrons
- **Shell 3**: maximum **8** electrons (for the first 20 elements in IGCSE)

The **electronic configuration** is written as the number of electrons in each shell, separated by commas, from innermost outward.

**Examples:**
- Hydrogen (Z = 1): 1
- Carbon (Z = 6): 2,4
- Sodium (Z = 11): 2,8,1
- Chlorine (Z = 17): 2,8,7
- Calcium (Z = 20): 2,8,8,2

**Linking to the Periodic Table:**
- The **period number** tells you how many shells are occupied.
- The **group number** (for Groups 1–7 / VII) equals the number of **outer-shell electrons** (valence electrons).
- Elements in the same group have the same number of valence electrons → same chemical behaviour.`,

      diagrams: [
        {
          caption: "Electron shell diagram for sodium (Na): configuration 2,8,1",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Electron shell diagram for sodium showing 2 electrons in shell 1, 8 in shell 2, 1 in shell 3">
  <!-- background -->
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- shell 3 -->
  <circle cx="160" cy="100" r="88" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- shell 2 -->
  <circle cx="160" cy="100" r="58" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- shell 1 -->
  <circle cx="160" cy="100" r="28" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- nucleus -->
  <circle cx="160" cy="100" r="12" fill="#1e3a5f" stroke="#fbbf24" stroke-width="2"/>
  <text x="160" y="96" text-anchor="middle" font-size="8" fill="#fbbf24" font-family="sans-serif">11p</text>
  <text x="160" y="107" text-anchor="middle" font-size="8" fill="#fbbf24" font-family="sans-serif">12n</text>
  <!-- shell 1 electrons: 2 -->
  <circle cx="160" cy="72" r="5" fill="#34d399"/>
  <circle cx="160" cy="128" r="5" fill="#34d399"/>
  <!-- shell 2 electrons: 8 at 45 degree intervals -->
  <circle cx="160" cy="42" r="5" fill="#34d399"/>
  <circle cx="201" cy="59" r="5" fill="#34d399"/>
  <circle cx="218" cy="100" r="5" fill="#34d399"/>
  <circle cx="201" cy="141" r="5" fill="#34d399"/>
  <circle cx="160" cy="158" r="5" fill="#34d399"/>
  <circle cx="119" cy="141" r="5" fill="#34d399"/>
  <circle cx="102" cy="100" r="5" fill="#34d399"/>
  <circle cx="119" cy="59" r="5" fill="#34d399"/>
  <!-- shell 3 electron: 1 -->
  <circle cx="160" cy="12" r="5" fill="#fbbf24"/>
  <!-- shell labels -->
  <text x="183" y="104" font-size="10" fill="#b7bce0" font-family="sans-serif">n=1 (2e)</text>
  <text x="221" y="72" font-size="10" fill="#b7bce0" font-family="sans-serif">n=2 (8e)</text>
  <text x="165" y="18" font-size="10" fill="#fbbf24" font-family="sans-serif">n=3 (1e) valence</text>
  <!-- title -->
  <text x="160" y="196" text-anchor="middle" font-size="11" fill="#38bdf8" font-family="sans-serif">Na (sodium): electronic configuration 2,8,1</text>
</svg>`,
        },
      ],

      keyPoints: [
        "Shells fill from the innermost outward: 2, 8, 8 for the first 20 elements.",
        "Electronic configuration is written shell by shell, e.g. 2,8,1 for Na.",
        "Period number = number of occupied shells.",
        "Group number (Groups 1–7) = number of outer-shell (valence) electrons.",
        "Elements in the same group share the same valence electron count → similar chemistry.",
      ],

      strategies: [
        "Count up from Z: fill shell 1 first (max 2), then shell 2 (max 8), then shell 3 (max 8).",
        "Cross-check: sum of electrons in configuration = Z (for neutral atom).",
      ],
    },

    // ── SECTION 5 ─────────────────────────────────────────────────────────────
    {
      heading: "Ion Formation: Electron Loss and Gain",
      body: `Atoms can gain or lose electrons to form **ions** — charged particles.

**Metal atoms** (left side of Periodic Table) tend to **lose** electrons, forming **positive ions (cations)**:
- Na → Na⁺ + e⁻ (loses 1 electron; Group 1)
- Mg → Mg²⁺ + 2e⁻ (loses 2 electrons; Group 2)
- Al → Al³⁺ + 3e⁻ (loses 3 electrons; Group 3)

**Non-metal atoms** (right side) tend to **gain** electrons, forming **negative ions (anions)**:
- Cl + e⁻ → Cl⁻ (gains 1 electron; Group 7/VII)
- O + 2e⁻ → O²⁻ (gains 2 electrons; Group 6/VI)

**Effect on particle counts:**
- Proton number (Z) does **not** change — the element stays the same.
- The number of electrons changes, creating a net charge.
- For an ion with charge n+: electrons = Z − n
- For an ion with charge n−: electrons = Z + n

**Example:** A chloride ion Cl⁻ has Z = 17, charge = −1, so electrons = 17 + 1 = 18. It has the same electronic configuration (2,8,8) as argon — a noble gas configuration, which is stable.`,

      keyPoints: [
        "Ions form when atoms gain or lose electrons — proton number is unchanged.",
        "Metal atoms lose electrons → positive ions (cations).",
        "Non-metal atoms gain electrons → negative ions (anions).",
        "Ion charge = protons − electrons. (Positive when protons > electrons.)",
        "Ions are isoelectronic with noble gases when they achieve a full outer shell.",
      ],

      thinkDeeper:
        "A sulphide ion S²⁻ and an argon atom Ar both have 18 electrons. What is their electronic configuration? Why does Ar not form ions naturally, while sulphur readily forms S²⁻?",

      whyItWorks:
        "A full outer shell (noble gas configuration) is particularly stable because all the available sub-levels within that shell are occupied. Atoms 'strive' (energetically favoured) to reach this configuration through electron transfer, which is the driving force behind ionic bonding. The number of electrons gained or lost is predicted directly from the group number — it is the smallest number of moves to reach a full shell.",

      strategies: [
        "From the group, predict the ion charge: Group 1 → 1+, Group 7 → 1−.",
        "To find electrons in an ion: start from Z, then add (for negative ions) or subtract (for positive ions) the charge number.",
      ],
    },

    // ── SECTION 6 ─────────────────────────────────────────────────────────────
    {
      heading: "The Nuclear Symbol and Calculations: Pulling It All Together",
      body: `The **nuclear symbol** conveys all the key information about a specific nuclide:

ᴬ_Z X

where X = element symbol, A = mass number (top), Z = proton number (bottom).

**Reading the symbol:**
- Number of protons = Z
- Number of neutrons = A − Z
- Number of electrons (neutral atom) = Z
- Number of electrons (ion) = Z ± charge

**Step-by-step particle counting:**
1. Identify Z from the symbol (or from the Periodic Table using the element name).
2. Identify A from the symbol.
3. Neutrons = A − Z.
4. If ion: adjust electron count by the charge (add for negative, subtract for positive).

**Example: ⁵⁶₂₆Fe²⁺**
- Z = 26, A = 56
- Protons = 26, Neutrons = 56 − 26 = 30
- Electrons = 26 − 2 = 24 (lost 2 due to 2+ charge)

**Example: ³¹₁₅P³⁻**
- Z = 15, A = 31
- Protons = 15, Neutrons = 31 − 15 = 16
- Electrons = 15 + 3 = 18 (gained 3 due to 3− charge)`,

      keyPoints: [
        "Nuclear symbol ᴬ_Z X: A = mass number (top), Z = proton number (bottom).",
        "Neutrons = A − Z (always the same for neutral atom or ion).",
        "For an ion, protons and neutrons are unchanged — only electrons change.",
        "For a positive ion (n+): electrons = Z − n.",
        "For a negative ion (n−): electrons = Z + n.",
      ],

      strategies: [
        "Draw a three-row table: protons | neutrons | electrons. Fill in Z first.",
        "Charge is the final adjustment — always applied to electrons, never to protons or neutrons.",
      ],
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // LEARN SMART
  // ─────────────────────────────────────────────────────────────────────────────
  learn: {
    keyFacts: [
      "Proton: relative charge +1, relative mass 1, located in nucleus.",
      "Neutron: relative charge 0, relative mass 1, located in nucleus.",
      "Electron: relative charge −1, relative mass ≈ 0 (negligible), in shells.",
      "Proton number Z = number of protons = number of electrons (neutral atom).",
      "Mass number A = protons + neutrons; neutrons = A − Z.",
      "Isotopes have the same Z (same element) but different A (different neutrons).",
      "Isotopes have identical chemical properties (same electronic configuration).",
      "Ar = Σ(isotopic mass × % abundance) ÷ 100.",
      "Shell capacities: shell 1 = 2, shell 2 = 8, shell 3 = 8 (for Z ≤ 20).",
      "Group number = outer-shell electron count (Groups 1–7).",
    ],

    flashcards: [
      { front: "What is the proton number (Z)?", back: "The number of protons in the nucleus; it identifies the element and equals the number of electrons in a neutral atom." },
      { front: "What is the mass number (A)?", back: "The total number of protons plus neutrons in the nucleus (nucleon number)." },
      { front: "How do you find the number of neutrons?", back: "Neutrons = A − Z (mass number minus proton number)." },
      { front: "Define isotopes.", back: "Atoms of the same element with the same proton number but different numbers of neutrons (and therefore different mass numbers)." },
      { front: "Why do isotopes have identical chemical properties?", back: "Because they have the same number of electrons in the same arrangement (electronic configuration), which determines chemical behaviour." },
      { front: "Formula for relative atomic mass (Ar)?", back: "Ar = Σ(isotopic mass × % abundance) ÷ 100 (weighted mean mass relative to 1/12 of carbon-12)." },
      { front: "Electron shell filling order (first 20 elements)?", back: "Shell 1: up to 2; Shell 2: up to 8; Shell 3: up to 8." },
      { front: "What is the electronic configuration of calcium (Z = 20)?", back: "2,8,8,2 — four shells occupied, 2 valence electrons, Group 2." },
      { front: "How many electrons does a Na⁺ ion have?", back: "10 electrons. Sodium (Z = 11) loses 1 electron: 11 − 1 = 10." },
      { front: "How many electrons does an O²⁻ ion have?", back: "10 electrons. Oxygen (Z = 8) gains 2 electrons: 8 + 2 = 10." },
      { front: "What does the group number tell you about an element?", back: "The number of outer-shell (valence) electrons, which determines the element's typical ionic charge and chemical behaviour." },
      { front: "Chlorine has two isotopes: ³⁵Cl (75%) and ³⁷Cl (25%). What is Ar?", back: "Ar = (35×75 + 37×25) ÷ 100 = 35.5" },
    ],

    keyTerms: [
      { term: "Proton", definition: "A sub-atomic particle in the nucleus with relative charge +1 and relative mass 1." },
      { term: "Neutron", definition: "A sub-atomic particle in the nucleus with relative charge 0 and relative mass 1." },
      { term: "Electron", definition: "A sub-atomic particle in shells around the nucleus with relative charge −1 and negligible mass." },
      { term: "Proton number (Z)", definition: "The number of protons in the nucleus of an atom; it uniquely identifies the element." },
      { term: "Mass number (A)", definition: "The total number of protons plus neutrons in the nucleus of an atom." },
      { term: "Isotopes", definition: "Atoms of the same element with the same proton number but different mass numbers (different numbers of neutrons)." },
      { term: "Relative atomic mass (Ar)", definition: "The weighted mean mass of an atom of an element relative to 1/12 of the mass of a carbon-12 atom." },
      { term: "Electronic configuration", definition: "The arrangement of electrons in shells around the nucleus, written as the number of electrons per shell (e.g. 2,8,1)." },
      { term: "Valence electrons", definition: "The electrons in the outermost occupied shell of an atom; they determine the element's chemical properties and bonding behaviour." },
      { term: "Cation", definition: "A positively charged ion formed when an atom loses one or more electrons." },
      { term: "Anion", definition: "A negatively charged ion formed when an atom gains one or more electrons." },
      { term: "Nucleon", definition: "Any particle in the nucleus — a collective term for protons and neutrons." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // QUICK QUIZ
  // ─────────────────────────────────────────────────────────────────────────────
  quiz: {
    mcq: [
      {
        id: "chem-atoms-mcq-q01",
        question: "Which of the following correctly describes a neutron?",
        options: [
          "Relative charge +1, relative mass 1, found in shells",
          "Relative charge 0, relative mass 1, found in the nucleus",
          "Relative charge −1, relative mass 0, found in the nucleus",
          "Relative charge 0, relative mass 0, found in shells",
        ],
        answerIndex: 1,
        explanation: "Neutrons are found in the nucleus, carry no charge (0), and have a relative mass of 1. Electrons are in shells with charge −1 and negligible mass.",
        guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
        difficulty: "warmup",
      },
      {
        id: "chem-atoms-mcq-q02",
        question: "An atom has 15 protons and mass number 31. How many neutrons does it have?",
        options: ["15", "16", "31", "46"],
        answerIndex: 1,
        explanation: "Neutrons = A − Z = 31 − 15 = 16. This is phosphorus-31.",
        guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
        difficulty: "warmup",
      },
      {
        id: "chem-atoms-mcq-q03",
        question: "Which statement about isotopes is correct?",
        options: [
          "They have different proton numbers but the same mass number.",
          "They have the same proton number but different numbers of neutrons.",
          "They have different chemical properties because their electron configurations differ.",
          "They are atoms of different elements with the same mass number.",
        ],
        answerIndex: 1,
        explanation: "Isotopes are atoms of the same element (same Z) with different numbers of neutrons (so different A). They have identical chemical properties because their electron configuration is the same.",
        guideRef: "Isotopes and Their Properties",
        difficulty: "warmup",
      },
      {
        id: "chem-atoms-mcq-q04",
        question: "Magnesium has three isotopes: ²⁴Mg (79%), ²⁵Mg (10%), ²⁶Mg (11%). Which calculation gives the correct Ar?",
        options: [
          "(24 + 25 + 26) ÷ 3",
          "(24 × 79 + 25 × 10 + 26 × 11) ÷ 100",
          "(24 × 79 + 25 × 10 + 26 × 11) ÷ 3",
          "24 × 0.79 + 25 × 0.10 + 26 × 0.11 × 100",
        ],
        answerIndex: 1,
        explanation: "Ar = Σ(mass × % abundance) ÷ 100. Option A is a simple mean (ignores abundance). Option C divides by 3 instead of 100. Option D incorrectly multiplies by 100 at the end.",
        guideRef: "Relative Atomic Mass from Isotopic Abundances",
        difficulty: "core",
        hints: [
          "Ar is a weighted average — each isotope's contribution is weighted by how common it is.",
          "Percentage abundances must be divided by 100 to give fractions, OR you multiply by % and divide the total by 100.",
          "Check: if you use the formula correctly, the abundances (79 + 10 + 11) must sum to 100.",
        ],
      },
      {
        id: "chem-atoms-mcq-q05",
        question: "Element X has electronic configuration 2,8,6. In which group and period of the Periodic Table is it found?",
        options: [
          "Group 6, Period 3",
          "Group 6, Period 2",
          "Group 3, Period 6",
          "Group 8, Period 3",
        ],
        answerIndex: 0,
        explanation: "Three shells occupied → Period 3. Outer shell has 6 electrons → Group 6 (e.g. sulphur, S, Z = 16).",
        guideRef: "Electronic Configuration and Electron Shells",
        difficulty: "core",
        hints: [
          "Count the number of commas plus one: that gives the number of shells = period number.",
          "The last number in the configuration gives the outer-shell (valence) electron count = group number (for Groups 1–7).",
        ],
      },
      {
        id: "chem-atoms-mcq-q06",
        question: "A fluoride ion F⁻ (Z = 9) has the same number of electrons as which species?",
        options: ["Ne (Z = 10)", "O²⁻ (Z = 8)", "Na⁺ (Z = 11)", "All three of the above"],
        answerIndex: 3,
        explanation: "F⁻: 9 + 1 = 10 electrons. Ne: 10 electrons. O²⁻: 8 + 2 = 10 electrons. Na⁺: 11 − 1 = 10 electrons. All have 10 electrons and configuration 2,8.",
        guideRef: "Ion Formation: Electron Loss and Gain",
        difficulty: "core",
        hints: [
          "Calculate electrons for each species: F⁻ first.",
          "For a negative ion, electrons = Z + charge number. For a positive ion, electrons = Z − charge number.",
        ],
      },
    ],

    qa: [
      {
        id: "chem-atoms-qa-q01",
        question: "Calcium (Ca) has proton number 20 and mass number 40. (a) State the number of protons, neutrons, and electrons in a neutral calcium atom. (b) A Ca²⁺ ion is formed. State how the number of each sub-atomic particle changes.",
        marks: 5,
        modelAnswer:
          "(a) Protons = 20; Neutrons = 40 − 20 = 20; Electrons = 20. (b) When Ca²⁺ forms, the atom loses 2 electrons. Protons remain 20 (unchanged); Neutrons remain 20 (unchanged); Electrons = 20 − 2 = 18.",
        markScheme: [
          "Protons = 20",
          "Neutrons = 20 (accept A − Z shown)",
          "Electrons = 20 (neutral atom)",
          "Protons and neutrons unchanged when ion forms",
          "Electrons = 18 for Ca²⁺ (or: 2 electrons lost)",
        ],
        commonError: "Students often change the proton number when forming an ion. Only electrons change; protons and neutrons stay the same.",
        guideRef: "Ion Formation: Electron Loss and Gain",
        difficulty: "core",
        hints: [
          "Start with the neutral atom: protons = Z, neutrons = A − Z, electrons = Z.",
          "Ion formation only affects electrons. The nucleus (protons + neutrons) is unchanged.",
          "Ca²⁺ means calcium has lost 2 electrons (the 2+ tells you how many electrons were removed).",
        ],
        strategy: "particle-count table",
      },
      {
        id: "chem-atoms-qa-q02",
        question: "Silicon (Si, Z = 14) has three naturally occurring isotopes: ²⁸Si (92.2%), ²⁹Si (4.7%), ³⁰Si (3.1%). Calculate the relative atomic mass of silicon. Show your working and give your answer to 3 significant figures.",
        marks: 3,
        modelAnswer:
          "Ar = (28 × 92.2 + 29 × 4.7 + 30 × 3.1) ÷ 100\n= (2581.6 + 136.3 + 93.0) ÷ 100\n= 2810.9 ÷ 100\n= 28.109\n≈ 28.1 (3 s.f.)",
        markScheme: [
          "Correct formula used: Σ(isotopic mass × % abundance) ÷ 100",
          "Correct substitution: 28 × 92.2 + 29 × 4.7 + 30 × 3.1",
          "Correct answer: 28.1 (accept 28.109; accept answers that round correctly to 3 s.f.)",
        ],
        commonError: "Forgetting to divide by 100 (treating percentages as fractions without converting, giving an answer ≈ 2811). Also: dividing by 3 instead of 100 (treating it as a simple mean).",
        guideRef: "Relative Atomic Mass from Isotopic Abundances",
        difficulty: "core",
        hints: [
          "Write out the formula: Ar = Σ(mass × %) ÷ 100 before substituting numbers.",
          "Calculate each term separately: 28 × 92.2 = 2581.6; 29 × 4.7 = 136.3; 30 × 3.1 = 93.0.",
          "Add the terms, then divide by 100.",
          "Check: your answer should be between 28 and 30, and close to 28 since ²⁸Si dominates.",
        ],
        strategy: "weighted average calculation",
        solutions: [
          {
            label: "Method 1: Multiply by % then divide by 100",
            steps: [
              "Ar = (28 × 92.2 + 29 × 4.7 + 30 × 3.1) ÷ 100",
              "= (2581.6 + 136.3 + 93.0) ÷ 100",
              "= 2810.9 ÷ 100",
              "= 28.1 (3 s.f.)",
            ],
          },
          {
            label: "Method 2: Convert % to decimal fractions first",
            steps: [
              "Fractions: 0.922, 0.047, 0.031",
              "Ar = 28 × 0.922 + 29 × 0.047 + 30 × 0.031",
              "= 25.816 + 1.363 + 0.930",
              "= 28.109",
              "= 28.1 (3 s.f.)",
            ],
          },
        ],
      },
      {
        id: "chem-atoms-qa-q03",
        question: "Explain why ¹²C and ¹⁴C (carbon-12 and carbon-14) are isotopes of carbon. Explain why they have identical chemical properties but different physical properties.",
        marks: 4,
        modelAnswer:
          "¹²C and ¹⁴C are isotopes because they both have the same proton number (Z = 6), so they are both carbon atoms, but they have different mass numbers (12 and 14), meaning they have different numbers of neutrons (6 and 8 respectively). They have identical chemical properties because they have the same number of electrons (6) arranged in the same electronic configuration (2,4), and it is the electrons — especially the outer-shell electrons — that determine chemical behaviour. Their physical properties differ because ¹⁴C atoms are heavier (mass number 14 vs 12); this affects properties such as rate of diffusion and density.",
        markScheme: [
          "Same proton number (Z = 6) / same element",
          "Different mass numbers / different number of neutrons (6 vs 8)",
          "Same number of electrons / same electronic configuration (2,4)",
          "Chemical properties determined by electron configuration / outer-shell electrons",
          "Physical properties differ because of different mass / mass number",
        ],
        commonError: "Stating that isotopes have different chemical properties because they are different 'types' of atom — isotopes are the same element with identical electron arrangements.",
        guideRef: "Isotopes and Their Properties",
        difficulty: "core",
        hints: [
          "Start with the definition: what makes two atoms 'isotopes'?",
          "Then separate into two parts: why are chemical properties the same? (Think: what controls chemistry?)",
          "And: why are physical properties different? (Think: what is different between the two isotopes?)",
        ],
        strategy: "compare and contrast",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // QUESTION BANK
  // ─────────────────────────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      // ── MCQ PAPER 1 ── particles, proton/nucleon numbers, nuclear symbols
      {
        id: "chem-atoms-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Sub-atomic particles, proton and nucleon numbers, and reading nuclear symbols.",
        questions: [
          {
            id: "chem-atoms-bm1-01",
            question: "Where in the atom are the protons and neutrons found?",
            options: ["In shells around the nucleus", "Spread evenly throughout the atom", "In the nucleus", "Outside the atom entirely"],
            answerIndex: 2,
            explanation: "Protons and neutrons (the nucleons) make up the tiny, dense nucleus at the centre of the atom. Electrons occupy shells around the nucleus.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm1-02",
            question: "What is the relative charge on an electron?",
            options: ["+1", "0", "−1", "−1836"],
            answerIndex: 2,
            explanation: "An electron carries a relative charge of −1. Its relative mass is about 1/1836, which is treated as negligible (≈0).",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm1-03",
            question: "An atom has a proton number of 11 and a nucleon number of 23. How many neutrons does it contain?",
            options: ["11", "12", "23", "34"],
            answerIndex: 1,
            explanation: "Number of neutrons = A − Z = 23 − 11 = 12. This is a sodium atom.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm1-04",
            question: "The nuclear symbol of an atom is written ⁵⁹₂₇Co. How many protons and how many neutrons does it have?",
            options: ["27 protons, 59 neutrons", "27 protons, 32 neutrons", "32 protons, 27 neutrons", "59 protons, 27 neutrons"],
            answerIndex: 1,
            explanation: "Z = 27 gives 27 protons. Neutrons = A − Z = 59 − 27 = 32. The bottom number is the proton number and the top number is the nucleon number.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "core",
            hints: [
              "In the symbol ᴬ_Z X, the bottom number Z is the proton number.",
              "The top number A is the nucleon number (protons + neutrons).",
              "Neutrons = A − Z.",
            ],
          },
          {
            id: "chem-atoms-bm1-05",
            question: "Which quantity uniquely identifies which element an atom is?",
            options: ["The nucleon number", "The number of neutrons", "The proton number", "The number of occupied shells"],
            answerIndex: 2,
            explanation: "The proton number (atomic number, Z) defines the element. Atoms with the same Z but different neutron counts are isotopes of the same element; changing Z changes the element.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "core",
            hints: [
              "Isotopes are the same element but have different numbers of neutrons — so neutron count cannot define the element.",
              "What never changes for atoms of one particular element?",
              "It is the number of protons.",
            ],
          },
          {
            id: "chem-atoms-bm1-06",
            question: "An atom contains 17 protons, 18 neutrons and 17 electrons. What is its nucleon number?",
            options: ["17", "18", "35", "52"],
            answerIndex: 2,
            explanation: "Nucleon number A = protons + neutrons = 17 + 18 = 35. Electrons are not counted because their mass is negligible. This is chlorine-35.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "core",
            hints: [
              "Nucleon number counts only the particles in the nucleus.",
              "Electrons have negligible mass and are not nucleons.",
              "A = protons + neutrons.",
            ],
          },
          {
            id: "chem-atoms-bm1-07",
            question: "Which statement about a neutral atom is always true?",
            options: [
              "Number of neutrons = number of protons",
              "Number of electrons = number of protons",
              "Number of electrons = number of neutrons",
              "Nucleon number = proton number",
            ],
            answerIndex: 1,
            explanation: "A neutral atom has no overall charge, so the number of negative electrons must equal the number of positive protons. Neutron number can differ from proton number (e.g. chlorine-35 has 17 protons but 18 neutrons).",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "core",
            hints: [
              "Neutral means zero overall charge.",
              "Protons are +1 each and electrons are −1 each — they must balance.",
              "Neutrons are uncharged, so their number is not fixed by neutrality.",
            ],
          },
          {
            id: "chem-atoms-bm1-08",
            question: "The relative mass of a proton is 1. Approximately how many electrons would have the same mass as one proton?",
            options: ["About 2", "About 18", "About 1836", "About 100000"],
            answerIndex: 2,
            explanation: "An electron has a relative mass of about 1/1836 of a proton, so roughly 1836 electrons together equal the mass of a single proton. This is why electron mass is treated as negligible.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "challenge",
            hints: [
              "The electron's relative mass is written as 1/1836.",
              "If one electron is 1/1836 of a proton, how many make a whole proton mass?",
              "Take the reciprocal of 1/1836.",
            ],
          },
          {
            id: "chem-atoms-bm1-09",
            question: "A particle has 9 protons, 10 neutrons and 10 electrons. Which description is correct?",
            options: [
              "A neutral atom of neon",
              "A fluoride ion, F⁻",
              "A neutral atom of fluorine",
              "A sodium ion, Na⁺",
            ],
            answerIndex: 1,
            explanation: "Proton number 9 means the element is fluorine. It has 10 electrons but only 9 protons, so the overall charge is 9 − 10 = −1: it is a fluoride ion F⁻. Neon would need Z = 10.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "challenge",
            hints: [
              "Identify the element from the proton number first (Z = 9).",
              "Compare electrons (10) with protons (9) to find the charge.",
              "More electrons than protons means a negative ion.",
            ],
            strategy: "Identify the element from Z, then compare electrons with protons to find the charge.",
          },
          {
            id: "chem-atoms-bm1-10",
            question: "Which of these correctly lists, in order, the relative masses of a proton, a neutron and an electron?",
            options: ["1, 1, 1", "1, 1, 0 (negligible)", "1, 0, 1", "0, 1, 1"],
            answerIndex: 1,
            explanation: "Proton and neutron each have a relative mass of 1; the electron's relative mass is negligible (≈0). Do not confuse this with the charges, which are +1, 0 and −1.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "core",
            hints: [
              "Both nucleons (proton and neutron) have a relative mass of 1.",
              "The electron's mass is negligible compared with a nucleon.",
              "Be careful not to give the charges instead of the masses.",
            ],
          },
        ],
      },
      // ── MCQ PAPER 2 ── isotopes and relative atomic mass
      {
        id: "chem-atoms-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Isotopes, their properties, and relative atomic mass from abundances.",
        questions: [
          {
            id: "chem-atoms-bm2-01",
            question: "Which is the best definition of isotopes?",
            options: [
              "Atoms of different elements with the same mass number",
              "Atoms of the same element with different numbers of neutrons",
              "Atoms of the same element with different numbers of protons",
              "Atoms of the same element with different numbers of electrons",
            ],
            answerIndex: 1,
            explanation: "Isotopes are atoms of the same element (same proton number) that have different numbers of neutrons, and therefore different nucleon numbers.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm2-02",
            question: "What is the relative atomic mass of an element measured relative to?",
            options: [
              "1/12 of the mass of a carbon-12 atom",
              "The mass of a hydrogen atom",
              "The mass of a proton",
              "1/16 of the mass of an oxygen-16 atom",
            ],
            answerIndex: 0,
            explanation: "Relative atomic mass is the weighted average mass of an atom of an element measured relative to 1/12 of the mass of a carbon-12 atom.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm2-03",
            question: "²⁰₁₀Ne and ²²₁₀Ne are isotopes. How do their numbers of neutrons compare?",
            options: ["10 and 10", "10 and 12", "20 and 22", "0 and 2"],
            answerIndex: 1,
            explanation: "Neon-20 has 20 − 10 = 10 neutrons; neon-22 has 22 − 10 = 12 neutrons. Both still have 10 protons, so they are the same element.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm2-04",
            question: "Why do the two isotopes ³⁵Cl and ³⁷Cl have identical chemical properties?",
            options: [
              "They have the same number of neutrons",
              "They have the same mass",
              "They have the same number and arrangement of electrons",
              "They have different numbers of protons",
            ],
            answerIndex: 2,
            explanation: "Chemical properties are determined by the electrons, especially the outer-shell electrons. Both chlorine isotopes have 17 electrons arranged as 2,8,7, so they react identically. The extra neutrons only change the mass.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "core",
            hints: [
              "Chemical reactions involve electrons, not neutrons.",
              "Both isotopes have the same proton number, so they have the same number of electrons.",
              "Same electron arrangement means the same chemistry.",
            ],
          },
          {
            id: "chem-atoms-bm2-05",
            question: "Gallium has two isotopes: ⁶⁹Ga (60%) and ⁷¹Ga (40%). What is its relative atomic mass?",
            options: ["69.4", "69.8", "70.0", "70.4"],
            answerIndex: 1,
            explanation: "Ar = (69 × 60 + 71 × 40) ÷ 100 = (4140 + 2840) ÷ 100 = 6980 ÷ 100 = 69.8. Because ⁶⁹Ga is the more abundant isotope, Ar lies below the midpoint of 70.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Use Ar = Σ(isotopic mass × % abundance) ÷ 100.",
              "Substitute: (69 × 60 + 71 × 40) ÷ 100.",
              "The more abundant isotope (⁶⁹Ga) pulls the answer below 70.",
            ],
          },
          {
            id: "chem-atoms-bm2-06",
            question: "Which physical property would you expect to differ slightly between ²⁰Ne and ²²Ne?",
            options: ["Reactivity with fluorine", "Density of the gas", "Electronic configuration", "Number of outer-shell electrons"],
            answerIndex: 1,
            explanation: "Density depends on mass, and ²²Ne atoms are heavier than ²⁰Ne atoms, so the densities differ slightly. Reactivity, electron configuration and outer-shell electron count are identical because they depend on electrons.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "core",
            hints: [
              "Isotopes differ in mass but not in electrons.",
              "Chemical and electron-based properties are identical.",
              "Which listed property depends on the mass of the atoms?",
            ],
          },
          {
            id: "chem-atoms-bm2-07",
            question: "Copper has Ar = 63.5 and two isotopes, ⁶³Cu and ⁶⁵Cu. What does this Ar value tell you?",
            options: [
              "⁶³Cu and ⁶⁵Cu are equally abundant",
              "⁶³Cu is more abundant than ⁶⁵Cu",
              "⁶⁵Cu is more abundant than ⁶³Cu",
              "Copper has a third heavier isotope",
            ],
            answerIndex: 1,
            explanation: "The midpoint of 63 and 65 is 64. Because Ar = 63.5 is below 64, the weighted average is pulled toward 63, so ⁶³Cu must be the more abundant isotope.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Find the midpoint of the two mass numbers (63 and 65).",
              "A weighted average is pulled toward the more abundant isotope.",
              "63.5 is below the midpoint of 64 — which isotope is it closer to?",
            ],
          },
          {
            id: "chem-atoms-bm2-08",
            question: "An element X has two isotopes of mass 24 and 26, with Ar = 24.5. What is the percentage abundance of the mass-24 isotope?",
            options: ["25%", "50%", "75%", "80%"],
            answerIndex: 2,
            explanation: "Let the mass-24 isotope be x%. (24x + 26(100 − x)) ÷ 100 = 24.5 → 24x + 2600 − 26x = 2450 → −2x = −150 → x = 75. So the mass-24 isotope is 75% abundant.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "challenge",
            hints: [
              "Let the mass-24 abundance be x%, so the mass-26 abundance is (100 − x)%.",
              "Set up: (24x + 26(100 − x)) ÷ 100 = 24.5.",
              "Multiply through by 100 and expand: 24x + 2600 − 26x = 2450.",
              "Solve −2x = −150 to get x = 75.",
            ],
            strategy: "Reverse the Ar calculation: set up an equation with one unknown abundance.",
          },
          {
            id: "chem-atoms-bm2-09",
            question: "Magnesium consists of ²⁴Mg (78.6%), ²⁵Mg (10.1%) and ²⁶Mg (11.3%). Which value is closest to its Ar?",
            options: ["24.0", "24.3", "25.0", "25.7"],
            answerIndex: 1,
            explanation: "Ar = (24 × 78.6 + 25 × 10.1 + 26 × 11.3) ÷ 100 = (1886.4 + 252.5 + 293.8) ÷ 100 = 2432.7 ÷ 100 = 24.327 ≈ 24.3. The dominant ²⁴Mg keeps Ar close to 24.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "challenge",
            hints: [
              "Include all three isotopes in the weighted average.",
              "Ar = (24 × 78.6 + 25 × 10.1 + 26 × 11.3) ÷ 100.",
              "Because ²⁴Mg is by far the most abundant, expect an answer just above 24.",
            ],
            strategy: "For three isotopes, add three weighted terms before dividing by 100.",
          },
          {
            id: "chem-atoms-bm2-10",
            question: "Which statement explains why the relative atomic mass of chlorine (35.5) is not a whole number?",
            options: [
              "Some chlorine atoms have half a neutron",
              "It is the weighted mean mass of two isotopes of different masses",
              "Chlorine atoms are unstable and decay",
              "The mass of the electrons has been added in",
            ],
            answerIndex: 1,
            explanation: "Ar = 35.5 is the weighted average of ³⁵Cl (≈75%) and ³⁷Cl (≈25%). No single atom has mass 35.5; the value is a statistical average across the natural mixture of isotopes.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Individual atoms always have whole-number nucleon numbers.",
              "Ar averages over all the naturally occurring isotopes.",
              "A weighted mean of 35 and 37 need not be a whole number.",
            ],
          },
        ],
      },
      // ── MCQ PAPER 3 ── electronic configuration and the Periodic Table
      {
        id: "chem-atoms-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Electron shells, electronic configuration, and links to the Periodic Table.",
        questions: [
          {
            id: "chem-atoms-bm3-01",
            question: "What is the maximum number of electrons that the first shell (closest to the nucleus) can hold?",
            options: ["1", "2", "8", "18"],
            answerIndex: 1,
            explanation: "The first shell can hold a maximum of 2 electrons. The second and third shells each hold up to 8 for the first 20 elements.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm3-02",
            question: "What is the electronic configuration of a carbon atom (Z = 6)?",
            options: ["6", "2,4", "4,2", "2,2,2"],
            answerIndex: 1,
            explanation: "Fill the first shell with 2 electrons, then place the remaining 4 in the second shell: 2,4. The numbers must add up to Z = 6.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm3-03",
            question: "An atom has the electronic configuration 2,8,2. In which group of the Periodic Table is it found?",
            options: ["Group 2", "Group 8", "Group 10", "Group 12"],
            answerIndex: 0,
            explanation: "The number of outer-shell electrons equals the group number (for Groups 1–7 and 0). The outer shell holds 2 electrons, so this element (magnesium) is in Group 2.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm3-04",
            question: "An atom has the electronic configuration 2,8,7. What are its period and group?",
            options: ["Period 2, Group 7", "Period 3, Group 7", "Period 7, Group 3", "Period 3, Group 17"],
            answerIndex: 1,
            explanation: "Three occupied shells means Period 3; seven outer-shell electrons means Group 7. This is chlorine (Z = 17).",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Count the number of shells (groups of electrons) — that gives the period.",
              "The last number is the outer-shell electron count, which gives the group.",
              "2,8,7 has three shells and 7 outer electrons.",
            ],
          },
          {
            id: "chem-atoms-bm3-05",
            question: "Which element has the electronic configuration 2,8,8,2?",
            options: ["Argon (Z = 18)", "Calcium (Z = 20)", "Magnesium (Z = 12)", "Potassium (Z = 19)"],
            answerIndex: 1,
            explanation: "The configuration sums to 2 + 8 + 8 + 2 = 20, so Z = 20, which is calcium. It is in Period 4, Group 2.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Add up the electrons in the configuration to find Z.",
              "2 + 8 + 8 + 2 = 20.",
              "Match that proton number to the element.",
            ],
          },
          {
            id: "chem-atoms-bm3-06",
            question: "Why do all the elements in Group 1 of the Periodic Table have similar chemical properties?",
            options: [
              "They all have one occupied shell",
              "They all have the same number of neutrons",
              "They all have one electron in their outer shell",
              "They all have the same relative atomic mass",
            ],
            answerIndex: 2,
            explanation: "Group 1 elements all have a single electron in their outer shell. The outer-shell electrons control chemical behaviour, so they react in similar ways (for example, all lose one electron to form 1+ ions).",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Group number tells you the number of outer-shell electrons.",
              "Chemical behaviour depends on the outer-shell electrons.",
              "What do all Group 1 atoms share in their outer shell?",
            ],
          },
          {
            id: "chem-atoms-bm3-07",
            question: "An element is in Period 3 and Group 5. What is its electronic configuration?",
            options: ["2,8,5", "2,5,8", "3,5", "2,8,8,5"],
            answerIndex: 0,
            explanation: "Period 3 means three occupied shells; Group 5 means 5 outer-shell electrons. Filling 2 then 8 then 5 gives 2,8,5 (phosphorus, Z = 15).",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Period number = number of shells.",
              "Group number = number of outer-shell electrons.",
              "Fill 2, then 8, then put 5 in the third shell.",
            ],
          },
          {
            id: "chem-atoms-bm3-08",
            question: "Which atom has a full outer shell in its neutral state?",
            options: ["Sodium, 2,8,1", "Fluorine, 2,7", "Argon, 2,8,8", "Lithium, 2,1"],
            answerIndex: 2,
            explanation: "Argon has the configuration 2,8,8 — its outer (third) shell is full with 8 electrons. This stable noble-gas arrangement explains why argon is unreactive.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "A full outer shell holds 8 electrons (or 2 for shell 1).",
              "Look for the configuration whose last number is 8.",
              "Noble gases have full outer shells.",
            ],
          },
          {
            id: "chem-atoms-bm3-09",
            question: "An element X reacts to form an X²⁻ ion with a noble-gas configuration of 2,8,8. What is the electronic configuration of a neutral atom of X?",
            options: ["2,8,8", "2,8,6", "2,8,8,2", "2,8,10"],
            answerIndex: 1,
            explanation: "The X²⁻ ion gained 2 electrons to reach 2,8,8 (18 electrons). A neutral X atom therefore has 18 − 2 = 16 electrons, configuration 2,8,6 (sulphur, Z = 16).",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "challenge",
            hints: [
              "The 2− ion has gained 2 electrons compared with the neutral atom.",
              "Count the electrons in 2,8,8 (that is 18).",
              "Remove the 2 gained electrons: 18 − 2 = 16 electrons in the neutral atom.",
            ],
            strategy: "Work backwards from the ion: subtract the gained electrons to get the neutral atom.",
          },
          {
            id: "chem-atoms-bm3-10",
            question: "An atom has 19 electrons. What is its electronic configuration?",
            options: ["2,8,9", "2,8,8,1", "2,17", "2,8,7,2"],
            answerIndex: 1,
            explanation: "Fill shells in order with maxima 2, 8, 8: that uses 18 electrons, leaving 1 for a fourth shell. So 2,8,8,1 (potassium, Z = 19). The third shell holds a maximum of 8 in the first 20 elements, so 2,8,9 is wrong.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "challenge",
            hints: [
              "The third shell holds a maximum of 8 electrons for the first 20 elements.",
              "Fill 2, then 8, then 8 — that accounts for 18 electrons.",
              "The 19th electron starts a fourth shell.",
            ],
            strategy: "Respect the 2,8,8 maxima for Z ≤ 20; the next electron opens a new shell.",
          },
        ],
      },
      // ── MCQ PAPER 4 ── ions, synoptic and mixed challenge
      {
        id: "chem-atoms-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ion formation, isoelectronic species, and mixed synoptic challenge questions.",
        questions: [
          {
            id: "chem-atoms-bm4-01",
            question: "When a metal atom forms an ion, what does it usually do to its electrons?",
            options: ["Gains electrons to form a negative ion", "Loses electrons to form a positive ion", "Gains electrons to form a positive ion", "Shares electrons with no charge"],
            answerIndex: 1,
            explanation: "Metal atoms tend to lose their outer-shell electrons to form positive ions (cations), for example Na → Na⁺ + e⁻.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm4-02",
            question: "What is the charge on an ion formed by a Group 7 (VII) element such as chlorine?",
            options: ["1+", "1−", "2−", "7−"],
            answerIndex: 1,
            explanation: "Group 7 atoms have 7 outer-shell electrons and gain 1 electron to complete the outer shell, forming a 1− ion (e.g. Cl⁻).",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm4-03",
            question: "How many electrons are there in a sodium ion, Na⁺ (Z = 11)?",
            options: ["8", "10", "11", "12"],
            answerIndex: 1,
            explanation: "Sodium loses 1 electron to form Na⁺: electrons = 11 − 1 = 10. Its configuration becomes 2,8, the same as neon.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm4-04",
            question: "An oxide ion is written O²⁻ (Z = 8). How many electrons does it contain?",
            options: ["6", "8", "10", "16"],
            answerIndex: 2,
            explanation: "Oxygen gains 2 electrons to form O²⁻: electrons = 8 + 2 = 10. The configuration becomes 2,8 — a full outer shell.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "A 2− charge means the atom has gained 2 electrons.",
              "Start from Z = 8 electrons in the neutral atom.",
              "Electrons = Z + charge number for a negative ion.",
            ],
          },
          {
            id: "chem-atoms-bm4-05",
            question: "Which species does NOT have 10 electrons?",
            options: ["Na⁺ (Z = 11)", "F⁻ (Z = 9)", "Mg²⁺ (Z = 12)", "Cl⁻ (Z = 17)"],
            answerIndex: 3,
            explanation: "Na⁺: 11 − 1 = 10; F⁻: 9 + 1 = 10; Mg²⁺: 12 − 2 = 10; but Cl⁻: 17 + 1 = 18, not 10. Cl⁻ is the odd one out.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "For a positive ion: electrons = Z − charge. For a negative ion: electrons = Z + charge.",
              "Work out the electron count for each species.",
              "Three of them equal 10 electrons (the neon configuration).",
            ],
          },
          {
            id: "chem-atoms-bm4-06",
            question: "Which pair of ions is isoelectronic (has the same number of electrons)?",
            options: ["Na⁺ and Cl⁻", "K⁺ and Cl⁻", "Li⁺ and F⁻", "Mg²⁺ and O⁻"],
            answerIndex: 1,
            explanation: "K⁺: 19 − 1 = 18 electrons; Cl⁻: 17 + 1 = 18 electrons. Both have 18 electrons (argon configuration 2,8,8), so they are isoelectronic.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "Isoelectronic means the same number of electrons.",
              "Calculate electrons for each ion using electrons = Z ∓ charge.",
              "Look for the pair that both reach 18 electrons.",
            ],
          },
          {
            id: "chem-atoms-bm4-07",
            question: "When an aluminium atom forms Al³⁺, which particles change in number?",
            options: ["Only protons", "Only electrons", "Protons and electrons", "Neutrons and electrons"],
            answerIndex: 1,
            explanation: "Ion formation only transfers electrons. Al loses 3 electrons to form Al³⁺; the number of protons (13) and neutrons stays the same, so only the electron count changes.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "The nucleus is untouched when an ion forms.",
              "Protons and neutrons stay constant.",
              "Only the electrons are lost or gained.",
            ],
          },
          {
            id: "chem-atoms-bm4-08",
            question: "A ³¹P³⁻ ion is formed (P has Z = 15). How many protons, neutrons and electrons does it have?",
            options: [
              "15 protons, 16 neutrons, 18 electrons",
              "15 protons, 16 neutrons, 12 electrons",
              "18 protons, 16 neutrons, 18 electrons",
              "15 protons, 31 neutrons, 18 electrons",
            ],
            answerIndex: 0,
            explanation: "Protons = Z = 15; neutrons = 31 − 15 = 16; electrons = 15 + 3 = 18 (3 gained for the 3− charge). The nucleus is unchanged by ion formation.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "challenge",
            hints: [
              "Protons = Z (always unchanged by charge).",
              "Neutrons = A − Z = 31 − 15.",
              "A 3− charge means 3 electrons gained: electrons = 15 + 3.",
            ],
            strategy: "Make a protons | neutrons | electrons table; apply the charge only to electrons.",
          },
          {
            id: "chem-atoms-bm4-09",
            question: "An ion M²⁺ has 18 electrons and 20 neutrons. What is the nucleon number of M?",
            options: ["38", "40", "42", "36"],
            answerIndex: 1,
            explanation: "M²⁺ has 18 electrons after losing 2, so neutral M has Z = 18 + 2 = 20 protons (calcium). Nucleon number A = protons + neutrons = 20 + 20 = 40.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "challenge",
            hints: [
              "A 2+ ion has lost 2 electrons, so protons = electrons + 2 = 18 + 2.",
              "That gives Z = 20.",
              "Nucleon number = protons + neutrons = 20 + 20.",
            ],
            strategy: "Recover Z from the ion (protons = electrons + positive charge), then add neutrons.",
          },
          {
            id: "chem-atoms-bm4-10",
            question: "Which statement comparing a sulphide ion S²⁻ (Z = 16) with an argon atom (Z = 18) is correct?",
            options: [
              "They have the same number of protons",
              "They have the same number of electrons and the same configuration 2,8,8",
              "They are isotopes of each other",
              "They have the same number of neutrons",
            ],
            answerIndex: 1,
            explanation: "S²⁻ has 16 + 2 = 18 electrons, the same as argon's 18, both with configuration 2,8,8. They are isoelectronic but NOT isotopes (different proton numbers, 16 vs 18) and not the same element.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "challenge",
            hints: [
              "Find the electron count of S²⁻: 16 + 2.",
              "Compare with argon's 18 electrons.",
              "Isotopes need the same proton number — do S and Ar share that?",
            ],
            strategy: "Distinguish isoelectronic (same electrons) from isotopes (same protons).",
          },
        ],
      },
    ],

    qaPapers: [
      // ── STRUCTURED PAPER 1 ── particles, nuclear symbols, basic counting
      {
        id: "chem-atoms-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Sub-atomic particles, nuclear symbols, and particle counting.",
        questions: [
          {
            id: "chem-atoms-bq1-01",
            question: "Complete the following about the three sub-atomic particles.\n(a) State the relative charge and relative mass of a proton, a neutron and an electron. [3]\n(b) State where in the atom each particle is found. [2]",
            marks: 5,
            modelAnswer:
              "(a) Proton: relative charge +1, relative mass 1. Neutron: relative charge 0, relative mass 1. Electron: relative charge −1, relative mass ≈0 (negligible, about 1/1836).\n(b) Protons and neutrons are found in the nucleus. Electrons are found in shells (energy levels) around the nucleus.",
            markScheme: [
              "Proton +1 charge / mass 1",
              "Neutron 0 charge / mass 1",
              "Electron −1 charge / mass ≈0 / negligible",
              "Protons and neutrons in the nucleus",
              "Electrons in shells / energy levels around the nucleus",
            ],
            commonError: "Mixing up charge and mass, e.g. giving the electron a relative mass of −1. The −1 is its charge; its mass is negligible.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bq1-02",
            question: "An atom of aluminium has proton number 13 and nucleon number 27.\n(a) State the number of protons, neutrons and electrons in this neutral atom. [3]\n(b) Explain why the atom has no overall electrical charge. [1]",
            marks: 4,
            modelAnswer:
              "(a) Protons = 13; neutrons = 27 − 13 = 14; electrons = 13.\n(b) The atom has 13 protons (each +1) and 13 electrons (each −1). The positive and negative charges are equal in number and so cancel out, giving no overall charge.",
            markScheme: [
              "Protons = 13",
              "Neutrons = 14 (accept 27 − 13 working)",
              "Electrons = 13",
              "Equal numbers of protons and electrons / charges cancel / balance",
            ],
            commonError: "Counting electrons from the nucleon number rather than the proton number. Electrons = proton number in a neutral atom.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bq1-03",
            question: "The nuclear symbol of a potassium atom is ³⁹₁₉K.\n(a) State what the numbers 39 and 19 represent. [2]\n(b) Calculate the number of neutrons in this atom. [1]\n(c) Another potassium atom is ⁴¹₁₉K. State how it differs from ³⁹₁₉K and what the two atoms are called. [2]",
            marks: 5,
            modelAnswer:
              "(a) 39 is the nucleon number (mass number) — the total number of protons and neutrons. 19 is the proton number (atomic number) — the number of protons.\n(b) Neutrons = A − Z = 39 − 19 = 20.\n(c) ⁴¹K has 41 − 19 = 22 neutrons, which is 2 more than ³⁹K (20 neutrons). The proton number is the same (19). They are isotopes of potassium.",
            markScheme: [
              "39 = nucleon number / mass number (protons + neutrons)",
              "19 = proton number / atomic number (number of protons)",
              "Neutrons = 39 − 19 = 20",
              "⁴¹K has 22 neutrons / 2 more neutrons; same proton number 19",
              "They are isotopes",
            ],
            commonError: "Saying the two atoms are different elements. Same proton number means same element — potassium — they are simply isotopes.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "core",
            hints: [
              "The top number is the nucleon (mass) number; the bottom number is the proton number.",
              "Neutrons = nucleon number − proton number.",
              "Same proton number, different neutron number → isotopes of the same element.",
            ],
          },
          {
            id: "chem-atoms-bq1-04",
            question: "A particle has 12 protons, 12 neutrons and 10 electrons.\n(a) Identify the element. [1]\n(b) State whether the particle is an atom or an ion, and give its charge and formula. [2]\n(c) Explain how this particle was formed from a neutral atom. [2]",
            marks: 5,
            modelAnswer:
              "(a) Proton number 12 means the element is magnesium (Mg).\n(b) It is an ion. It has 12 protons (+12) and 10 electrons (−10), giving an overall charge of +2. The formula is Mg²⁺.\n(c) A neutral magnesium atom has 12 electrons (2,8,2). It lost 2 electrons (the two outer-shell electrons) to form Mg²⁺, which has 10 electrons and a stable configuration 2,8.",
            markScheme: [
              "Element is magnesium / Mg",
              "It is an ion (not a neutral atom)",
              "Charge +2 / formula Mg²⁺",
              "Neutral atom lost 2 electrons",
              "Loses the 2 outer-shell electrons to reach 2,8 / full outer shell",
            ],
            commonError: "Calculating the charge as electrons − protons (−2) instead of protons − electrons (+2). For a cation, protons outnumber electrons, so the charge is positive.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "Identify the element from the proton number.",
              "Charge = number of protons − number of electrons.",
              "Fewer electrons than protons means a positive ion.",
            ],
          },
          {
            id: "chem-atoms-bq1-05",
            question: "State and explain whether each of the following changes would turn an atom into a different element.\n(a) Adding a neutron. [1]\n(b) Removing an electron. [1]\n(c) Adding a proton. [1]\n(d) Use your answers to explain what determines the identity of an element. [1]",
            marks: 4,
            modelAnswer:
              "(a) No. Adding a neutron changes the mass number, making an isotope of the same element, not a new element.\n(b) No. Removing an electron makes a positive ion of the same element; the proton number is unchanged.\n(c) Yes. Adding a proton increases the proton number, which makes it a different element.\n(d) The proton number (atomic number) determines the identity of an element, because only a change in proton number changes which element the atom is.",
            markScheme: [
              "(a) No — makes an isotope / changes mass number only",
              "(b) No — makes an ion / proton number unchanged",
              "(c) Yes — proton number changes / different element",
              "(d) Proton number / atomic number determines the element",
            ],
            commonError: "Thinking that gaining or losing electrons or neutrons changes the element. Only changing the number of protons changes the element.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "core",
            hints: [
              "Recall that isotopes (different neutrons) are still the same element.",
              "Recall that ions (different electrons) are still the same element.",
              "Which particle number, when changed, changes the element?",
            ],
          },
          {
            id: "chem-atoms-bq1-06",
            question: "Iron-56 has the nuclear symbol ⁵⁶₂₆Fe. In compounds, iron commonly forms Fe²⁺ and Fe³⁺ ions.\n(a) State the number of protons, neutrons and electrons in a neutral ⁵⁶Fe atom. [3]\n(b) State the number of electrons in Fe²⁺ and in Fe³⁺. [2]",
            marks: 5,
            modelAnswer:
              "(a) Protons = 26; neutrons = 56 − 26 = 30; electrons = 26.\n(b) Fe²⁺ has lost 2 electrons: 26 − 2 = 24 electrons. Fe³⁺ has lost 3 electrons: 26 − 3 = 23 electrons.",
            markScheme: [
              "Protons = 26",
              "Neutrons = 30 (accept 56 − 26)",
              "Electrons = 26 in neutral atom",
              "Fe²⁺ has 24 electrons",
              "Fe³⁺ has 23 electrons",
            ],
            commonError: "Changing the proton or neutron count when forming the ions. Only the electron count changes; the nucleus is unaffected.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "Use neutrons = nucleon number − proton number.",
              "For a positive ion, electrons = proton number − charge.",
              "Fe²⁺ lost 2 electrons; Fe³⁺ lost 3.",
            ],
          },
          {
            id: "chem-atoms-bq1-07",
            question: "Two particles, P and Q, are described below.\nP: 8 protons, 8 neutrons, 8 electrons.\nQ: 8 protons, 10 neutrons, 8 electrons.\n(a) State, with a reason, whether P and Q are isotopes. [2]\n(b) Write the nuclear symbols for P and Q. [2]\n(c) State one chemical property and one physical property and say whether each is the same or different for P and Q. [2]",
            marks: 6,
            modelAnswer:
              "(a) Yes, P and Q are isotopes. They have the same proton number (8, so both are oxygen) but different numbers of neutrons (8 and 10), giving different nucleon numbers.\n(b) P: nucleon number = 8 + 8 = 16, so ¹⁶₈O. Q: nucleon number = 8 + 10 = 18, so ¹⁸₈O.\n(c) Chemical property (e.g. reactivity with hydrogen): the same, because both have the same electronic configuration (2,6). Physical property (e.g. density): different, because Q is heavier (mass 18 vs 16).",
            markScheme: [
              "Yes, isotopes",
              "Same proton number (8) but different neutron number (8 vs 10) / different nucleon number",
              "P = ¹⁶₈O",
              "Q = ¹⁸₈O",
              "Chemical property the same (same electron configuration)",
              "Physical property (e.g. density / mass) different (different mass number)",
            ],
            commonError: "Writing the nucleon number as the number of neutrons. The nucleon number is protons + neutrons, not neutrons alone.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "core",
            hints: [
              "Isotopes: same proton number, different neutron number.",
              "Nucleon number = protons + neutrons.",
              "Chemistry depends on electrons (same); mass-based physical properties differ.",
            ],
          },
          {
            id: "chem-atoms-bq1-08",
            question: "A student writes: 'The mass number of an atom is just the sum of all its particles: protons, neutrons and electrons.'\n(a) Explain why this statement is not correct. [2]\n(b) State the correct definition of the nucleon (mass) number. [1]\n(c) For a ³⁵Cl atom, show that the mass number is the same whether or not you include the electrons in your reasoning, and explain why. [2]",
            marks: 5,
            modelAnswer:
              "(a) The statement is wrong because electrons are not counted in the mass number. Electrons have negligible mass (about 1/1836 of a nucleon), so they do not contribute to the mass number.\n(b) The nucleon (mass) number is the total number of protons and neutrons in the nucleus.\n(c) ³⁵Cl has 17 protons, 18 neutrons and 17 electrons. Protons + neutrons = 17 + 18 = 35. Even if you tried to add the electrons, their relative mass is ≈0, so they add nothing measurable; the mass number is still effectively 35. This is why electron mass is ignored.",
            markScheme: [
              "Electrons are not included in the mass number",
              "Because electron mass is negligible / ≈1/1836 of a nucleon",
              "Nucleon number = number of protons + number of neutrons",
              "³⁵Cl: 17 + 18 = 35",
              "Electrons contribute negligible mass, so the value is unchanged",
            ],
            commonError: "Adding electrons into the mass number. Only nucleons (protons and neutrons) count because electron mass is negligible.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "challenge",
            hints: [
              "Recall the relative masses: proton 1, neutron 1, electron ≈0.",
              "Which particles actually contribute to the mass?",
              "Add only the nucleons for ³⁵Cl: 17 + 18.",
            ],
            strategy: "Tie the definition back to relative masses: negligible electron mass justifies leaving them out.",
          },
          {
            id: "chem-atoms-bq1-09",
            question: "An unknown neutral atom Z has 2 more neutrons than protons, and a nucleon number of 40.\n(a) Calculate the number of protons and the number of neutrons in Z. Show your working. [3]\n(b) Identify element Z. [1]\n(c) Write the electronic configuration of a neutral atom of Z. [1]",
            marks: 5,
            modelAnswer:
              "(a) Let protons = p, so neutrons = p + 2. Nucleon number: p + (p + 2) = 40 → 2p + 2 = 40 → 2p = 38 → p = 19. Protons = 19; neutrons = 19 + 2 = 21.\n(b) Proton number 19 is potassium (K).\n(c) 19 electrons fill as 2,8,8,1.",
            markScheme: [
              "Set up equation p + (p + 2) = 40 / equivalent reasoning",
              "Protons = 19",
              "Neutrons = 21",
              "Element = potassium / K",
              "Configuration 2,8,8,1",
            ],
            commonError: "Splitting 40 evenly (20 and 20) and ignoring the '2 more neutrons' condition. Set up an equation to honour the constraint.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "challenge",
            hints: [
              "Let the number of protons be p; then neutrons = p + 2.",
              "Protons + neutrons = nucleon number, so p + (p + 2) = 40.",
              "Solve for p, then find the neutrons and the element.",
            ],
            strategy: "Turn the word condition into an algebraic equation in one unknown.",
            solutions: [
              {
                label: "Algebraic method",
                steps: [
                  "Let protons = p, neutrons = p + 2",
                  "p + (p + 2) = 40",
                  "2p + 2 = 40",
                  "2p = 38 → p = 19 protons, 21 neutrons",
                  "Z = 19 → potassium, configuration 2,8,8,1",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq1-10",
            question: "Use ⁵⁶₂₆Fe³⁺ to answer the following.\n(a) State the number of protons, neutrons and electrons in this ion. Show your working. [3]\n(b) Explain why the proton and neutron numbers are unchanged when the ion forms, but the electron number changes. [2]",
            marks: 5,
            modelAnswer:
              "(a) Protons = 26 (Z). Neutrons = 56 − 26 = 30. Electrons = 26 − 3 = 23 (3 lost for the 3+ charge).\n(b) Ions form by the transfer of electrons only. Protons and neutrons are held tightly in the nucleus and are not transferred during chemical changes, so their numbers stay the same. Electrons are in the outer shells and can be removed (or added), so only the electron number changes — here, 3 electrons are lost.",
            markScheme: [
              "Protons = 26",
              "Neutrons = 30 (accept 56 − 26)",
              "Electrons = 23 (26 − 3)",
              "Ion formation transfers electrons only / nucleus unchanged",
              "Protons and neutrons stay in the nucleus; electrons removed/added",
            ],
            commonError: "Adding electrons for a positive ion. A 3+ charge means 3 electrons were lost, so electrons = Z − 3.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "core",
            hints: [
              "Protons = Z; neutrons = A − Z; both unchanged by charge.",
              "A 3+ charge means 3 electrons were lost.",
              "Electrons = Z − 3.",
            ],
          },
        ],
      },
      // ── STRUCTURED PAPER 2 ── isotopes and relative atomic mass calculations
      {
        id: "chem-atoms-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Isotopes and relative atomic mass calculations.",
        questions: [
          {
            id: "chem-atoms-bq2-01",
            question: "Define the following terms.\n(a) Isotopes. [2]\n(b) Relative atomic mass. [2]",
            marks: 4,
            modelAnswer:
              "(a) Isotopes are atoms of the same element (same proton number) that have different numbers of neutrons, and therefore different nucleon (mass) numbers.\n(b) Relative atomic mass is the weighted average (mean) mass of the atoms of an element, measured relative to 1/12 of the mass of a carbon-12 atom.",
            markScheme: [
              "Isotopes: same proton number / same element",
              "Isotopes: different number of neutrons / different mass number",
              "Ar: weighted average / mean mass of the atoms (of the isotopes)",
              "Ar: relative to 1/12 of the mass of a carbon-12 atom",
            ],
            commonError: "Defining isotopes as 'atoms with different masses' without stating they are the same element with the same proton number.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bq2-02",
            question: "Chlorine exists as ³⁵Cl (75%) and ³⁷Cl (25%).\n(a) Calculate the relative atomic mass of chlorine. Show your working. [2]\n(b) Explain why your answer is not a whole number. [2]",
            marks: 4,
            modelAnswer:
              "(a) Ar = (35 × 75 + 37 × 25) ÷ 100 = (2625 + 925) ÷ 100 = 3550 ÷ 100 = 35.5.\n(b) Ar is a weighted average of the masses of the two isotopes. Because the sample is a mixture of ³⁵Cl and ³⁷Cl in a 3:1 ratio, the average mass lies between 35 and 37 and need not be a whole number, even though every individual atom has a whole-number mass.",
            markScheme: [
              "Correct substitution (35 × 75 + 37 × 25) ÷ 100",
              "Ar = 35.5",
              "Ar is a weighted average / mean of the isotopes",
              "Average of different whole-number masses need not itself be whole",
            ],
            commonError: "Taking a simple average (35 + 37) ÷ 2 = 36 and ignoring the unequal abundances.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "warmup",
            solutions: [
              {
                label: "Weighted average",
                steps: [
                  "Ar = (35 × 75 + 37 × 25) ÷ 100",
                  "= (2625 + 925) ÷ 100",
                  "= 3550 ÷ 100",
                  "= 35.5",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq2-03",
            question: "Silicon has three isotopes: ²⁸Si (92.2%), ²⁹Si (4.7%) and ³⁰Si (3.1%).\n(a) Calculate the relative atomic mass of silicon to 1 decimal place. Show your working. [3]\n(b) State which isotope contributes most to the value of Ar and why. [1]",
            marks: 4,
            modelAnswer:
              "(a) Ar = (28 × 92.2 + 29 × 4.7 + 30 × 3.1) ÷ 100 = (2581.6 + 136.3 + 93.0) ÷ 100 = 2810.9 ÷ 100 = 28.109 ≈ 28.1.\n(b) ²⁸Si contributes most because it is by far the most abundant isotope (92.2%), so it dominates the weighted average.",
            markScheme: [
              "Correct formula / substitution for all three isotopes",
              "2810.9 ÷ 100 (or equivalent working)",
              "Ar = 28.1 (accept 28.109 rounded)",
              "²⁸Si contributes most because it is the most abundant (92.2%)",
            ],
            commonError: "Forgetting to divide by 100, giving an answer near 2811, or omitting a minor isotope.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Use Ar = Σ(mass × %) ÷ 100 for all three isotopes.",
              "Compute each product: 28 × 92.2, 29 × 4.7, 30 × 3.1.",
              "Add the products, then divide by 100.",
            ],
            solutions: [
              {
                label: "Weighted average",
                steps: [
                  "Ar = (28 × 92.2 + 29 × 4.7 + 30 × 3.1) ÷ 100",
                  "= (2581.6 + 136.3 + 93.0) ÷ 100",
                  "= 2810.9 ÷ 100",
                  "= 28.1 (1 d.p.)",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq2-04",
            question: "Carbon-12 and carbon-14 are both isotopes of carbon.\n(a) State the number of protons and neutrons in each. [2]\n(b) Explain why the two isotopes have identical chemical properties. [2]\n(c) Explain why they have slightly different physical properties. [1]",
            marks: 5,
            modelAnswer:
              "(a) ¹²C: 6 protons, 6 neutrons. ¹⁴C: 6 protons, 8 neutrons.\n(b) Both isotopes have the same number of electrons (6) arranged in the same configuration (2,4). Chemical properties are determined by the outer-shell electrons, so identical electron arrangements give identical chemistry.\n(c) Physical properties such as density and rate of diffusion depend on mass. ¹⁴C atoms are heavier than ¹²C atoms, so these properties differ slightly.",
            markScheme: [
              "¹²C: 6 protons, 6 neutrons",
              "¹⁴C: 6 protons, 8 neutrons",
              "Same number/arrangement of electrons (2,4)",
              "Chemistry determined by (outer-shell) electrons → identical",
              "Different mass → slightly different physical properties",
            ],
            commonError: "Saying the chemical properties differ because the masses differ. Mass affects only physical properties; chemistry depends on electrons.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "core",
            hints: [
              "Both have proton number 6, so both are carbon.",
              "Neutrons = mass number − 6.",
              "Chemistry depends on electrons; physical properties depend on mass.",
            ],
          },
          {
            id: "chem-atoms-bq2-05",
            question: "Boron has two isotopes, ¹⁰B and ¹¹B, and a relative atomic mass of 10.8.\n(a) Calculate the percentage abundance of each isotope. Show your working. [3]\n(b) State which isotope is more abundant and how the value of Ar confirms this. [2]",
            marks: 5,
            modelAnswer:
              "(a) Let the abundance of ¹¹B = x%, so ¹⁰B = (100 − x)%. Ar = (11x + 10(100 − x)) ÷ 100 = 10.8 → 11x + 1000 − 10x = 1080 → x = 80. So ¹¹B = 80% and ¹⁰B = 20%.\n(b) ¹¹B is more abundant (80%). Ar = 10.8 lies much closer to 11 than to 10, showing the weighted average is pulled toward the heavier ¹¹B isotope, confirming it is the majority isotope.",
            markScheme: [
              "Set up equation with one unknown (e.g. ¹¹B = x, ¹⁰B = 100 − x)",
              "Correct equation (11x + 10(100 − x)) ÷ 100 = 10.8",
              "¹¹B = 80%, ¹⁰B = 20%",
              "¹¹B more abundant",
              "Ar = 10.8 is closer to 11 → average pulled toward more abundant isotope",
            ],
            commonError: "Setting up the equation with the abundances attached to the wrong masses, or forgetting that the two abundances must sum to 100%.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "challenge",
            hints: [
              "Let ¹¹B = x% and ¹⁰B = (100 − x)%.",
              "Write (11x + 10(100 − x)) ÷ 100 = 10.8.",
              "Multiply by 100 and expand: 11x + 1000 − 10x = 1080.",
              "Solve x = 80, then ¹⁰B = 20%.",
            ],
            strategy: "Reverse the Ar formula: one unknown abundance, the other is 100 minus it.",
            solutions: [
              {
                label: "Algebraic method",
                steps: [
                  "Let ¹¹B = x%, ¹⁰B = (100 − x)%",
                  "(11x + 10(100 − x)) ÷ 100 = 10.8",
                  "11x + 1000 − 10x = 1080",
                  "x = 80 → ¹¹B = 80%, ¹⁰B = 20%",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq2-06",
            question: "A sample of element R contains only two isotopes, ⁶³R and ⁶⁵R. The relative atomic mass of R is 63.5.\n(a) Calculate the percentage abundance of each isotope. Show your working. [3]\n(b) R has proton number 29. Write the electronic configuration of a neutral atom of R and identify it. [2]",
            marks: 5,
            modelAnswer:
              "(a) Let ⁶³R = x%, so ⁶⁵R = (100 − x)%. (63x + 65(100 − x)) ÷ 100 = 63.5 → 63x + 6500 − 65x = 6350 → −2x = −150 → x = 75. So ⁶³R = 75% and ⁶⁵R = 25%.\n(b) Z = 29, so the configuration is 2,8,18,1. The element is copper (Cu).",
            markScheme: [
              "Let ⁶³R = x%, ⁶⁵R = (100 − x)% (or equivalent)",
              "Equation (63x + 65(100 − x)) ÷ 100 = 63.5",
              "⁶³R = 75%, ⁶⁵R = 25%",
              "Configuration 2,8,18,1",
              "Element is copper / Cu",
            ],
            commonError: "Assuming the two isotopes must be 50:50. The Ar of 63.5 is closer to 63, showing ⁶³R is the more abundant.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "challenge",
            hints: [
              "Let ⁶³R = x%, ⁶⁵R = (100 − x)%.",
              "Set up (63x + 65(100 − x)) ÷ 100 = 63.5.",
              "Solve to find x = 75.",
              "For the configuration, fill 2, 8, 18 then place the last electron.",
            ],
            strategy: "Combine a reverse Ar calculation with a configuration to identify the element.",
            solutions: [
              {
                label: "Algebraic method",
                steps: [
                  "Let ⁶³R = x%, ⁶⁵R = (100 − x)%",
                  "(63x + 65(100 − x)) ÷ 100 = 63.5",
                  "63x + 6500 − 65x = 6350",
                  "−2x = −150 → x = 75",
                  "⁶³R = 75%, ⁶⁵R = 25%",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq2-07",
            question: "Neon has three isotopes: ²⁰Ne (90.5%), ²¹Ne (0.3%) and ²²Ne (9.2%).\n(a) Calculate the relative atomic mass of neon to 1 decimal place. Show your working. [3]\n(b) A student leaves out the ²¹Ne term because 'it is too small to matter'. State whether this changes the answer to 1 decimal place, with justification. [2]",
            marks: 5,
            modelAnswer:
              "(a) Ar = (20 × 90.5 + 21 × 0.3 + 22 × 9.2) ÷ 100 = (1810 + 6.3 + 202.4) ÷ 100 = 2018.7 ÷ 100 = 20.187 ≈ 20.2.\n(b) Leaving out the ²¹Ne term gives (1810 + 202.4) ÷ 100 = 2012.4 ÷ 100 = 20.124 ≈ 20.1. This differs from 20.2, so omitting the minor isotope DOES change the answer to 1 decimal place. All isotopes should be included.",
            markScheme: [
              "Correct substitution of all three isotopes",
              "2018.7 ÷ 100 (or equivalent working)",
              "Ar = 20.2 (1 d.p.)",
              "Without ²¹Ne the abundances no longer total 100% / value becomes 20.1",
              "Conclusion: it does change the 1 d.p. answer, so include all isotopes",
            ],
            commonError: "Assuming small abundances never matter. Here, dropping the 0.3% isotope shifts the answer from 20.2 to 20.1 at 1 d.p.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "challenge",
            hints: [
              "Use all three weighted terms for part (a).",
              "For part (b), recompute leaving out the 0.3% term.",
              "Compare the two answers rounded to 1 d.p.",
            ],
            strategy: "Test the 'negligible' claim by recomputing without the term and comparing at the stated precision.",
            solutions: [
              {
                label: "Full three-isotope calculation",
                steps: [
                  "Ar = (20 × 90.5 + 21 × 0.3 + 22 × 9.2) ÷ 100",
                  "= (1810 + 6.3 + 202.4) ÷ 100",
                  "= 2018.7 ÷ 100",
                  "= 20.2 (1 d.p.)",
                ],
              },
              {
                label: "Omitting the ²¹Ne term",
                steps: [
                  "(20 × 90.5 + 22 × 9.2) ÷ 100",
                  "= (1810 + 202.4) ÷ 100",
                  "= 2012.4 ÷ 100",
                  "= 20.1 (1 d.p.) — different, so it matters",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq2-08",
            question: "Bromine has two isotopes, ⁷⁹Br (50.5%) and ⁸¹Br (49.5%).\n(a) Without a detailed calculation, predict whether the Ar is above or below 80, and explain your reasoning. [2]\n(b) Calculate the relative atomic mass of bromine to 1 decimal place. Show your working. [2]",
            marks: 4,
            modelAnswer:
              "(a) The midpoint of 79 and 81 is 80. Since ⁷⁹Br is slightly more abundant (50.5% vs 49.5%), the weighted average is pulled slightly toward 79, so Ar should be just below 80.\n(b) Ar = (79 × 50.5 + 81 × 49.5) ÷ 100 = (3989.5 + 4009.5) ÷ 100 = 7999 ÷ 100 = 79.99 ≈ 80.0.",
            markScheme: [
              "Midpoint of 79 and 81 is 80",
              "⁷⁹Br slightly more abundant → Ar just below 80",
              "Correct substitution (79 × 50.5 + 81 × 49.5) ÷ 100",
              "Ar = 80.0 (accept 79.99)",
            ],
            commonError: "Rounding too early and losing the fact that the value is just under 80. Carry full figures, then round at the end.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "The midpoint of the two masses is the 50:50 value.",
              "The more abundant isotope shifts the average toward its mass.",
              "Then substitute the percentages and divide by 100.",
            ],
            solutions: [
              {
                label: "Weighted average",
                steps: [
                  "Ar = (79 × 50.5 + 81 × 49.5) ÷ 100",
                  "= (3989.5 + 4009.5) ÷ 100",
                  "= 7999 ÷ 100",
                  "= 80.0 (1 d.p.)",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq2-09",
            question: "Carbon-14 is a radioactive isotope of carbon used in carbon dating.\n(a) State what is meant by a radioactive isotope. [1]\n(b) State the number of protons, neutrons and electrons in a neutral ¹⁴C atom. [2]\n(c) Explain why ¹⁴C behaves the same as ¹²C in chemical reactions, even though it is radioactive. [2]",
            marks: 5,
            modelAnswer:
              "(a) A radioactive isotope is an isotope with an unstable nucleus that decays over time, emitting radiation.\n(b) ¹⁴C: protons = 6, neutrons = 14 − 6 = 8, electrons = 6.\n(c) Chemical behaviour depends on the electrons, especially the outer-shell electrons. ¹⁴C and ¹²C both have 6 electrons arranged as 2,4, so they react identically. Radioactivity is a nuclear property and does not affect the electron arrangement, so it does not change the chemistry.",
            markScheme: [
              "Radioactive isotope: unstable nucleus / decays / emits radiation",
              "Protons = 6, electrons = 6",
              "Neutrons = 8 (14 − 6)",
              "Same number/arrangement of electrons (2,4) → same chemistry",
              "Radioactivity is a nuclear property, not an electron property",
            ],
            commonError: "Thinking radioactivity changes chemical behaviour. Radioactivity is a property of the nucleus; chemistry depends on electrons.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "core",
            hints: [
              "Radioactivity is about the stability of the nucleus.",
              "Neutrons = mass number − proton number.",
              "Chemistry depends on electrons, which are the same for both isotopes.",
            ],
          },
          {
            id: "chem-atoms-bq2-10",
            question: "An element has two isotopes. The lighter isotope has mass number 6 and abundance 7.5%; the heavier has mass number 7 and abundance 92.5%.\n(a) Calculate the relative atomic mass to 2 decimal places. Show your working. [3]\n(b) The element is in Group 1. Write the electronic configuration and identify it. [2]",
            marks: 5,
            modelAnswer:
              "(a) Ar = (6 × 7.5 + 7 × 92.5) ÷ 100 = (45 + 647.5) ÷ 100 = 692.5 ÷ 100 = 6.925 ≈ 6.93.\n(b) The element is lithium (Li), Z = 3. Configuration: 2,1. The single outer-shell electron places it in Group 1.",
            markScheme: [
              "Correct substitution (6 × 7.5 + 7 × 92.5) ÷ 100",
              "692.5 ÷ 100 / 6.925",
              "Ar = 6.93 (2 d.p.)",
              "Configuration 2,1",
              "Element is lithium / Li",
            ],
            commonError: "Rounding 6.925 to 6.92 instead of 6.93 — the digit after the 2 is 5, so it rounds up.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Use Ar = Σ(mass × %) ÷ 100.",
              "Substitute (6 × 7.5 + 7 × 92.5) ÷ 100.",
              "An Ar near 7 with a Group 1 element points to lithium.",
            ],
            solutions: [
              {
                label: "Weighted average",
                steps: [
                  "Ar = (6 × 7.5 + 7 × 92.5) ÷ 100",
                  "= (45 + 647.5) ÷ 100",
                  "= 692.5 ÷ 100",
                  "= 6.93 (2 d.p.)",
                ],
              },
            ],
          },
        ],
      },
      // ── STRUCTURED PAPER 3 ── electronic configuration and the Periodic Table
      {
        id: "chem-atoms-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Electronic configuration, shells, and links to the Periodic Table.",
        questions: [
          {
            id: "chem-atoms-bq3-01",
            question: "(a) State the maximum number of electrons that can occupy the first, second and third shells (for the first 20 elements). [2]\n(b) Write the electronic configuration of a sodium atom (Z = 11) and a chlorine atom (Z = 17). [2]",
            marks: 4,
            modelAnswer:
              "(a) First shell: 2; second shell: 8; third shell: 8 (for the first 20 elements).\n(b) Sodium (Z = 11): 2,8,1. Chlorine (Z = 17): 2,8,7.",
            markScheme: [
              "Shell maxima 2, 8, 8",
              "Sodium 2,8,1",
              "Chlorine 2,8,7",
              "Configurations sum to the correct Z",
            ],
            commonError: "Putting too many electrons in the second or third shell (more than 8) instead of opening a new shell.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bq3-02",
            question: "An element has the electronic configuration 2,8,6.\n(a) State its proton number. [1]\n(b) State its group and period. [2]\n(c) Identify the element. [1]",
            marks: 4,
            modelAnswer:
              "(a) Proton number = 2 + 8 + 6 = 16.\n(b) Three occupied shells → Period 3. Six outer-shell electrons → Group 6.\n(c) The element is sulphur (S).",
            markScheme: [
              "Proton number = 16",
              "Period 3",
              "Group 6",
              "Element is sulphur / S",
            ],
            commonError: "Reading the first number (2) as the group instead of the last number (6). The outer-shell (last) number gives the group.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bq3-03",
            question: "Explain, using electronic configurations, why sodium (Z = 11) and potassium (Z = 19) have similar chemical properties. [4]",
            marks: 4,
            modelAnswer:
              "Sodium has the configuration 2,8,1 and potassium has the configuration 2,8,8,1. Both have exactly one electron in their outer shell, so both are in Group 1. Chemical properties are determined by the number of outer-shell electrons, because these are the electrons involved in bonding and reactions. Since both atoms lose their single outer electron to form a 1+ ion, they react in similar ways (for example, vigorously with water), giving them similar chemical properties.",
            markScheme: [
              "Na = 2,8,1",
              "K = 2,8,8,1",
              "Both have 1 outer-shell electron / both in Group 1",
              "Outer-shell electrons determine chemistry / both lose 1 electron to form 1+ ion",
            ],
            commonError: "Saying they are similar because they have similar masses or are metals. The key reason is the identical number of outer-shell electrons.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Write out both configurations.",
              "Compare the number of electrons in the outer shell.",
              "Link the outer-shell electron count to group and to chemical behaviour.",
            ],
          },
          {
            id: "chem-atoms-bq3-04",
            question: "For the element calcium (Z = 20):\n(a) Write its electronic configuration. [1]\n(b) State its group and period and justify each from the configuration. [2]\n(c) State the formula of the ion calcium forms, and explain why it forms this ion. [2]",
            marks: 5,
            modelAnswer:
              "(a) 2,8,8,2.\n(b) Four occupied shells → Period 4. Two outer-shell electrons → Group 2.\n(c) Calcium forms Ca²⁺. It has 2 outer-shell electrons, and by losing both it achieves a full outer shell (configuration 2,8,8, the same as argon), which is stable.",
            markScheme: [
              "Configuration 2,8,8,2",
              "Period 4 (four shells)",
              "Group 2 (two outer electrons)",
              "Ion is Ca²⁺",
              "Loses 2 electrons to reach full outer shell / noble-gas configuration",
            ],
            commonError: "Writing the calcium ion as Ca²⁻ or Ca⁺. As a Group 2 metal it loses 2 electrons to form Ca²⁺.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Fill shells 2, 8, 8 then place the last 2 electrons.",
              "Period = number of shells; group = outer-shell electrons.",
              "Group 2 metals lose 2 electrons to empty the outer shell.",
            ],
          },
          {
            id: "chem-atoms-bq3-05",
            question: "Draw or describe the electron-shell arrangement of a magnesium atom (Z = 12) and explain how the diagram shows it is in Group 2 and Period 3. [4]",
            marks: 4,
            modelAnswer:
              "Magnesium has 12 electrons arranged as 2,8,2: 2 electrons in the first shell, 8 in the second shell, and 2 in the third (outer) shell, drawn as concentric circles around a nucleus labelled 12 protons (and 12 neutrons for ²⁴Mg). The diagram shows three occupied shells, which means it is in Period 3. It shows 2 electrons in the outer shell, which means it is in Group 2.",
            markScheme: [
              "Configuration 2,8,2 (2 inner, 8 middle, 2 outer)",
              "Nucleus with 12 protons indicated",
              "Three shells → Period 3",
              "Two outer-shell electrons → Group 2",
            ],
            commonError: "Drawing the outer electrons but miscounting the shells, or putting 9+ electrons in the second shell. Keep to the 2, 8, 8 maxima.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Place electrons shell by shell: 2, then 8, then the rest.",
              "Count the occupied shells for the period.",
              "Count the outer-shell electrons for the group.",
            ],
          },
          {
            id: "chem-atoms-bq3-06",
            question: "An element is in Period 4 and Group 1.\n(a) Write its electronic configuration. [1]\n(b) State its proton number and identify the element. [2]\n(c) Explain why this element is more reactive than sodium. [2]",
            marks: 5,
            modelAnswer:
              "(a) Period 4 means four shells; Group 1 means 1 outer electron: 2,8,8,1.\n(b) Proton number = 2 + 8 + 8 + 1 = 19. The element is potassium (K).\n(c) Potassium's single outer electron is in the fourth shell, further from the nucleus than sodium's outer electron (third shell). The outer electron is more weakly attracted (more shielded and further away), so it is lost more easily, making potassium more reactive than sodium.",
            markScheme: [
              "Configuration 2,8,8,1",
              "Proton number 19",
              "Element is potassium / K",
              "Outer electron further from nucleus / more shielding",
              "Outer electron lost more easily → more reactive",
            ],
            commonError: "Just stating 'potassium is lower in the group so more reactive' without explaining in terms of distance/shielding of the outer electron.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "challenge",
            hints: [
              "Period number gives the number of shells.",
              "Group 1 means one outer-shell electron.",
              "Compare how far the outer electron is from the nucleus in K versus Na.",
            ],
            strategy: "Link reactivity in Group 1 to how easily the single outer electron is lost (distance and shielding).",
          },
          {
            id: "chem-atoms-bq3-07",
            question: "Atoms W, X and Y have the configurations W = 2,8,1; X = 2,8,7; Y = 2,8,8.\n(a) State the group of each atom. [3]\n(b) State which atom is unreactive and explain why. [2]\n(c) Predict the formula of the compound formed between W and X. [1]",
            marks: 6,
            modelAnswer:
              "(a) W (2,8,1) → Group 1. X (2,8,7) → Group 7. Y (2,8,8) → Group 0 (8 outer electrons, a noble gas).\n(b) Y is unreactive because it has a full outer shell (8 electrons), a stable noble-gas configuration, so it has no tendency to lose or gain electrons.\n(c) W forms 1+ ions and X forms 1− ions, so they combine in a 1:1 ratio: WX.",
            markScheme: [
              "W = Group 1",
              "X = Group 7",
              "Y = Group 0 / noble gas",
              "Y is unreactive: full outer shell / stable configuration",
              "Formula WX (1:1 from 1+ and 1− ions)",
            ],
            commonError: "Calling Y 'Group 8' rather than Group 0, or expecting it to react. A full outer shell makes it unreactive.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "The last number in each configuration is the outer-shell electron count.",
              "A full outer shell (8) means a stable, unreactive noble gas.",
              "1+ and 1− ions combine in a 1:1 ratio.",
            ],
          },
          {
            id: "chem-atoms-bq3-08",
            question: "An atom of element T has 17 electrons.\n(a) Write the electronic configuration of T. [1]\n(b) Predict the charge of the ion that T forms and explain your reasoning using the configuration. [2]\n(c) Write the electronic configuration of this ion and state which noble gas it matches. [2]",
            marks: 5,
            modelAnswer:
              "(a) 17 electrons → 2,8,7.\n(b) T has 7 outer-shell electrons. It is easier to gain 1 electron than to lose 7, so T gains 1 electron to complete its outer shell, forming a 1− ion (T⁻).\n(c) T⁻ has 18 electrons: 2,8,8. This matches the noble gas argon.",
            markScheme: [
              "Configuration 2,8,7",
              "Forms a 1− ion / gains 1 electron",
              "Reason: only 1 electron needed to complete outer shell (easier than losing 7)",
              "Ion configuration 2,8,8",
              "Matches argon",
            ],
            commonError: "Predicting that T loses 7 electrons. Non-metals near a full shell gain the few electrons needed rather than lose many.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "Fill shells to find the configuration of 17 electrons.",
              "Count how many electrons are needed to fill the outer shell.",
              "Gaining 1 electron is easier than losing 7.",
            ],
          },
          {
            id: "chem-atoms-bq3-09",
            question: "The first 20 elements fill shells with maxima 2, 8, 8.\n(a) Explain why the electronic configuration of argon is 2,8,8 and not 2,8,8,0. [1]\n(b) Explain why potassium (Z = 19) has the configuration 2,8,8,1 rather than 2,8,9. [2]\n(c) Calcium is the 20th element. State its configuration and explain why it begins a new shell. [2]",
            marks: 5,
            modelAnswer:
              "(a) Argon has 18 electrons, which exactly fill the first three shells (2 + 8 + 8). There is no fourth shell occupied, so it is written 2,8,8; an empty shell is not shown.\n(b) The third shell holds a maximum of 8 electrons for these elements. After 2,8,8 (18 electrons), the third shell is full, so the 19th electron must start the fourth shell, giving 2,8,8,1 — not 2,8,9.\n(c) Calcium (Z = 20) is 2,8,8,2. After the third shell is full at 18 electrons, the remaining 2 electrons go into the fourth shell, so a new shell begins.",
            markScheme: [
              "Argon: 18 electrons fill three shells exactly; empty shells not written",
              "Third shell maximum is 8 / fills at 18 electrons",
              "19th electron starts the fourth shell → 2,8,8,1",
              "Calcium configuration 2,8,8,2",
              "Extra electrons go into a new (fourth) shell once the third is full",
            ],
            commonError: "Putting 9 or more electrons into the third shell. For the first 20 elements the third shell is treated as full at 8.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "challenge",
            hints: [
              "Empty outer shells are never written in the configuration.",
              "Recall the third-shell maximum for the first 20 elements.",
              "Once a shell is full, the next electron starts a new shell.",
            ],
            strategy: "Apply the 2,8,8 maxima strictly and never write a trailing zero shell.",
          },
          {
            id: "chem-atoms-bq3-10",
            question: "Element J is in Period 3 and forms a J³⁺ ion.\n(a) Deduce the group of J and its electronic configuration as a neutral atom. [2]\n(b) Write the electronic configuration of the J³⁺ ion and state which noble gas it is isoelectronic with. [2]\n(c) Explain, using the configurations, why J forms a 3+ ion rather than a 3− ion. [2]",
            marks: 6,
            modelAnswer:
              "(a) Forming a 3+ ion means losing 3 electrons, so J has 3 outer-shell electrons and is in Group 3. As a Period 3 atom, its configuration is 2,8,3 (aluminium, Z = 13).\n(b) J³⁺ loses the 3 outer electrons: 2,8. This is isoelectronic with neon (10 electrons).\n(c) J has only 3 outer-shell electrons. Losing these 3 to reach 2,8 needs the removal of just 3 electrons, whereas forming a 3− ion would require gaining 5 electrons to fill the outer shell. Losing 3 is far easier than gaining 5, so J forms a 3+ ion.",
            markScheme: [
              "Group 3 (loses 3 electrons)",
              "Neutral configuration 2,8,3",
              "J³⁺ configuration 2,8",
              "Isoelectronic with neon",
              "Losing 3 electrons easier than gaining 5 / reaches full shell by losing",
            ],
            commonError: "Assuming any atom can form either ion. The number of outer electrons decides which is easier; Group 3 metals lose 3 to empty the outer shell.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "challenge",
            hints: [
              "A 3+ ion forms by losing 3 electrons → 3 outer-shell electrons → Group 3.",
              "Period 3 + Group 3 gives 2,8,3.",
              "Compare losing 3 electrons with gaining 5 to decide which ion forms.",
            ],
            strategy: "Decide the ion by the smaller electron move needed to reach a full outer shell.",
          },
        ],
      },
      // ── STRUCTURED PAPER 4 ── ions, synoptic and multi-step challenge
      {
        id: "chem-atoms-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Ion formation, isoelectronic species, and multi-step synoptic problems.",
        questions: [
          {
            id: "chem-atoms-bq4-01",
            question: "(a) State what is meant by an ion. [1]\n(b) State whether metals typically form positive or negative ions, and explain why in terms of electrons. [2]\n(c) Give the formula of the ion formed by a Group 6 element such as oxygen, and explain how it forms. [2]",
            marks: 5,
            modelAnswer:
              "(a) An ion is a charged particle formed when an atom (or group of atoms) loses or gains electrons.\n(b) Metals typically form positive ions (cations). Metal atoms have few outer-shell electrons, which they lose to achieve a full outer shell; losing negative electrons leaves more protons than electrons, giving a positive charge.\n(c) Oxygen forms O²⁻. It has 6 outer-shell electrons and gains 2 electrons to complete its outer shell (reaching 2,8), giving a 2− charge.",
            markScheme: [
              "Ion: charged particle / atom that has lost or gained electrons",
              "Metals form positive ions",
              "Metals lose (outer) electrons → more protons than electrons → positive",
              "Oxide ion formula O²⁻",
              "Oxygen gains 2 electrons to fill outer shell",
            ],
            commonError: "Saying metals gain electrons. Metals lose their few outer electrons to form positive ions.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bq4-02",
            question: "A magnesium ion is written Mg²⁺ (Z = 12).\n(a) State how many electrons it has and write its electronic configuration. [2]\n(b) Name a neutral atom that has the same electronic configuration as Mg²⁺. [1]\n(c) State whether Mg²⁺ and that atom are isotopes, and justify your answer. [2]",
            marks: 5,
            modelAnswer:
              "(a) Mg²⁺ has lost 2 electrons: 12 − 2 = 10 electrons. Configuration: 2,8.\n(b) Neon has 10 electrons with the configuration 2,8.\n(c) They are not isotopes. Isotopes must have the same proton number; Mg²⁺ has 12 protons but neon has 10 protons. They are isoelectronic (same number of electrons) but they are different elements, not isotopes.",
            markScheme: [
              "10 electrons",
              "Configuration 2,8",
              "Neon / Ne",
              "Not isotopes",
              "Different proton numbers (12 vs 10); same electrons = isoelectronic, not isotopes",
            ],
            commonError: "Confusing isoelectronic (same electrons) with isotopes (same protons). Mg²⁺ and Ne are isoelectronic, not isotopes.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "A 2+ ion has lost 2 electrons.",
              "Find a neutral atom with the same electron count.",
              "Isotopes need the same proton number — check the protons.",
            ],
          },
          {
            id: "chem-atoms-bq4-03",
            question: "Sodium reacts with chlorine to form sodium chloride.\n(a) Write the electronic configurations of a sodium atom (Z = 11) and a chlorine atom (Z = 17). [2]\n(b) Describe, in terms of electron transfer, how the Na⁺ and Cl⁻ ions form. [2]\n(c) State the electronic configuration of each ion and the noble gas it matches. [2]",
            marks: 6,
            modelAnswer:
              "(a) Sodium: 2,8,1. Chlorine: 2,8,7.\n(b) The sodium atom loses its single outer-shell electron to form Na⁺. That electron is transferred to the chlorine atom, which gains 1 electron to form Cl⁻.\n(c) Na⁺: 2,8 (matches neon). Cl⁻: 2,8,8 (matches argon). Both ions now have full outer shells.",
            markScheme: [
              "Na = 2,8,1",
              "Cl = 2,8,7",
              "Na loses 1 electron to form Na⁺",
              "Cl gains that electron to form Cl⁻",
              "Na⁺ = 2,8 (neon)",
              "Cl⁻ = 2,8,8 (argon)",
            ],
            commonError: "Saying chlorine loses electrons or that electrons are shared. In forming NaCl the electron is transferred from sodium to chlorine.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "Write each atom's configuration first.",
              "Sodium has 1 outer electron to lose; chlorine needs 1 to gain.",
              "Match each ion to the nearest noble-gas configuration.",
            ],
          },
          {
            id: "chem-atoms-bq4-04",
            question: "The species ³¹P³⁻ is formed from a phosphorus atom (Z = 15).\n(a) State the number of protons, neutrons and electrons in this ion. Show your working. [3]\n(b) Write its electronic configuration and state the noble gas it is isoelectronic with. [2]",
            marks: 5,
            modelAnswer:
              "(a) Protons = 15; neutrons = 31 − 15 = 16; electrons = 15 + 3 = 18 (gained 3 for the 3− charge).\n(b) 18 electrons → 2,8,8. This is isoelectronic with argon.",
            markScheme: [
              "Protons = 15",
              "Neutrons = 16 (31 − 15)",
              "Electrons = 18 (15 + 3)",
              "Configuration 2,8,8",
              "Isoelectronic with argon",
            ],
            commonError: "Subtracting the 3 for a negative ion. A 3− charge means 3 electrons were gained, so electrons = Z + 3.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "core",
            hints: [
              "Protons = Z; neutrons = A − Z.",
              "A 3− charge means 3 electrons gained.",
              "Electrons = 15 + 3 = 18.",
            ],
          },
          {
            id: "chem-atoms-bq4-05",
            question: "Four species are listed: Na⁺, F⁻, Mg²⁺, O²⁻.\n(a) Show that all four are isoelectronic, stating the number of electrons. (Z: Na = 11, F = 9, Mg = 12, O = 8.) [4]\n(b) State the electronic configuration they share and the noble gas it matches. [2]",
            marks: 6,
            modelAnswer:
              "(a) Na⁺: 11 − 1 = 10. F⁻: 9 + 1 = 10. Mg²⁺: 12 − 2 = 10. O²⁻: 8 + 2 = 10. All four have 10 electrons, so they are isoelectronic.\n(b) They share the configuration 2,8, which matches the noble gas neon.",
            markScheme: [
              "Na⁺ = 10 electrons",
              "F⁻ = 10 electrons",
              "Mg²⁺ = 10 electrons",
              "O²⁻ = 10 electrons (all isoelectronic)",
              "Configuration 2,8",
              "Matches neon",
            ],
            commonError: "Adding the charge for positive ions or subtracting it for negative ions. Positive ions lose electrons (Z − charge); negative ions gain them (Z + charge).",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "For each ion: electrons = Z − charge (positive) or Z + charge (negative).",
              "Work through all four species.",
              "If they all give 10, they are isoelectronic with neon.",
            ],
          },
          {
            id: "chem-atoms-bq4-06",
            question: "An ion X²⁺ has 18 electrons and 20 neutrons.\n(a) Determine the proton number of X. [1]\n(b) Calculate the nucleon number of X. [1]\n(c) Identify X and write the electronic configuration of the neutral atom. [2]\n(d) Write the electronic configuration of the X²⁺ ion. [1]",
            marks: 5,
            modelAnswer:
              "(a) X²⁺ has 18 electrons after losing 2, so neutral X has Z = 18 + 2 = 20 protons.\n(b) Nucleon number = protons + neutrons = 20 + 20 = 40.\n(c) Z = 20 is calcium (Ca). Neutral configuration: 2,8,8,2.\n(d) X²⁺ has 18 electrons: 2,8,8.",
            markScheme: [
              "Z = 18 + 2 = 20",
              "Nucleon number = 20 + 20 = 40",
              "Element is calcium / Ca",
              "Neutral configuration 2,8,8,2",
              "Ion configuration 2,8,8",
            ],
            commonError: "Taking Z as 18 (the electron count of the ion). A 2+ ion has lost 2 electrons, so protons = electrons + 2.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "challenge",
            hints: [
              "Recover Z: protons = electrons in the ion + the positive charge.",
              "Nucleon number = protons + neutrons.",
              "Identify the element from Z, then build the configuration.",
            ],
            strategy: "Reverse from the ion to the neutral atom before identifying the element.",
          },
          {
            id: "chem-atoms-bq4-07",
            question: "Element M forms an ion M³⁺ that has 10 electrons and a nucleon number of 27.\n(a) Determine the proton number of M and identify it. [2]\n(b) Calculate the number of neutrons in M. [1]\n(c) Write the configurations of M and M³⁺. [2]\n(d) Explain, using configurations, why M forms a 3+ ion rather than a 2+ ion. [2]",
            marks: 7,
            modelAnswer:
              "(a) M³⁺ has 10 electrons and lost 3, so Z = 10 + 3 = 13. The element is aluminium (Al).\n(b) Neutrons = 27 − 13 = 14.\n(c) Al (neutral): 2,8,3. Al³⁺: 2,8.\n(d) Aluminium has 3 outer-shell electrons (2,8,3). Losing all 3 gives the full, stable outer shell 2,8 (a noble-gas configuration). Losing only 2 would leave 2,8,1, with one electron still in the third shell — not a full outer shell and less stable. So aluminium forms a 3+ ion rather than a 2+ ion.",
            markScheme: [
              "Z = 10 + 3 = 13; element is aluminium / Al",
              "Neutrons = 27 − 13 = 14",
              "Al configuration 2,8,3",
              "Al³⁺ configuration 2,8",
              "Losing 3 electrons gives full outer shell (2,8) / noble-gas configuration",
              "Losing only 2 leaves 2,8,1, an incomplete outer shell / less stable",
            ],
            commonError: "Just stating 'aluminium is in Group 3 so forms 3+'. The mark scheme wants the electron-configuration reasoning about reaching a full outer shell.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "challenge",
            hints: [
              "Recover Z from the ion: protons = electrons + charge = 10 + 3.",
              "Neutrons = nucleon number − proton number.",
              "Compare the configurations after losing 2 versus 3 electrons.",
              "A full outer shell (2,8) is the stable target.",
            ],
            strategy: "Work back to Z, then compare candidate ions by which reaches a full outer shell.",
            solutions: [
              {
                label: "Working through the ion",
                steps: [
                  "M³⁺ has 10 electrons, lost 3 → Z = 10 + 3 = 13 (aluminium)",
                  "Neutrons = 27 − 13 = 14",
                  "Al = 2,8,3; Al³⁺ = 2,8",
                  "Losing 3 → 2,8 (full shell); losing 2 → 2,8,1 (incomplete) → 3+ preferred",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq4-08",
            question: "Element E has two isotopes, ⁶³E (69%) and ⁶⁵E (31%), and forms an E²⁺ ion that has 27 electrons.\n(a) Calculate the relative atomic mass of E to 2 decimal places. Show your working. [2]\n(b) Determine the proton number of E and identify it. [2]\n(c) State one physical difference and one chemical similarity between the ⁶³E²⁺ and ⁶⁵E²⁺ ions. [2]",
            marks: 6,
            modelAnswer:
              "(a) Ar = (63 × 69 + 65 × 31) ÷ 100 = (4347 + 2015) ÷ 100 = 6362 ÷ 100 = 63.62.\n(b) E²⁺ has 27 electrons and lost 2, so Z = 27 + 2 = 29. The element is copper (Cu).\n(c) Physical difference: ⁶⁵E²⁺ ions are heavier than ⁶³E²⁺ ions (different mass / density). Chemical similarity: both ions have the same charge (2+) and the same electron arrangement, so they react identically and form the same compounds.",
            markScheme: [
              "Ar substitution (63 × 69 + 65 × 31) ÷ 100",
              "Ar = 63.62",
              "Z = 27 + 2 = 29",
              "Element is copper / Cu",
              "Physical difference: different mass / density",
              "Chemical similarity: same electron arrangement / same charge / same reactions",
            ],
            commonError: "Using Z = 27 (the ion's electron count) instead of recovering Z = 29 by adding the 2+ charge.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "challenge",
            hints: [
              "Part (a): substitute into Ar = (63 × 69 + 65 × 31) ÷ 100.",
              "Part (b): E²⁺ lost 2 electrons, so protons = 27 + 2.",
              "Part (c): physical = mass-based; chemical = electron-based.",
            ],
            strategy: "Combine an Ar calculation with ion-to-atom reasoning, then separate physical and chemical effects.",
            solutions: [
              {
                label: "Ar calculation",
                steps: [
                  "Ar = (63 × 69 + 65 × 31) ÷ 100",
                  "= (4347 + 2015) ÷ 100",
                  "= 6362 ÷ 100",
                  "= 63.62",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq4-09",
            question: "A neutral atom of element D has 2,8,7 as its electronic configuration. A neutral atom of element G has 2,8,1.\n(a) State the formula of the ions each forms and the noble gas each ion matches. [3]\n(b) Predict the formula of the compound formed between G and D. [1]\n(c) Explain, in terms of stability, why both atoms form ions when they react together. [2]",
            marks: 6,
            modelAnswer:
              "(a) D (2,8,7) gains 1 electron to form D⁻ (2,8,8), matching argon. G (2,8,1) loses 1 electron to form G⁺ (2,8), matching neon.\n(b) G⁺ and D⁻ combine in a 1:1 ratio, so the compound is GD.\n(c) Both atoms have outer shells that are not full. By transferring one electron from G to D, each achieves a full outer shell (a stable noble-gas configuration), which is energetically favourable. This is why both form ions when they react.",
            markScheme: [
              "D forms D⁻ (2,8,8) / matches argon",
              "G forms G⁺ (2,8) / matches neon",
              "Ion charges 1− and 1+ identified",
              "Compound formula GD",
              "Each reaches a full outer shell / noble-gas configuration",
              "Full outer shell is more stable / favourable",
            ],
            commonError: "Giving the compound as G₂D or GD₂. With 1+ and 1− ions the ratio is 1:1, so the formula is GD.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "Decide whether each atom gains or loses electrons to reach a full shell.",
              "Match each resulting ion to a noble gas.",
              "Balance the 1+ and 1− charges to get the formula.",
            ],
          },
          {
            id: "chem-atoms-bq4-10",
            question: "An ion of element L is written ⁸¹₃₅L⁻.\n(a) State the number of protons, neutrons and electrons in this ion. Show your working. [3]\n(b) Identify L and state the group it belongs to. [2]\n(c) The element L has another isotope ⁷⁹L. Calculate the relative atomic mass of L given that ⁷⁹L is 50.5% abundant and ⁸¹L is 49.5% abundant, to 1 decimal place. [2]",
            marks: 7,
            modelAnswer:
              "(a) Protons = 35; neutrons = 81 − 35 = 46; electrons = 35 + 1 = 36 (gained 1 for the 1− charge).\n(b) Z = 35 is bromine (Br). It gains 1 electron to form a 1− ion, so it is in Group 7.\n(c) Ar = (79 × 50.5 + 81 × 49.5) ÷ 100 = (3989.5 + 4009.5) ÷ 100 = 7999 ÷ 100 = 79.99 ≈ 80.0.",
            markScheme: [
              "Protons = 35",
              "Neutrons = 46 (81 − 35)",
              "Electrons = 36 (35 + 1)",
              "Element is bromine / Br; Group 7",
              "Ar substitution (79 × 50.5 + 81 × 49.5) ÷ 100",
              "Ar = 80.0 (accept 79.99)",
            ],
            commonError: "Forgetting that L⁻ has gained an electron (electrons = Z + 1), or treating ⁸¹L as the only isotope when calculating Ar.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "challenge",
            hints: [
              "Protons = Z = 35; neutrons = A − Z = 81 − 35.",
              "The 1− charge means 1 electron gained: electrons = 35 + 1.",
              "For part (c), use both isotopes in the weighted average.",
            ],
            strategy: "Count particles for the ion first, then run the two-isotope Ar calculation.",
            solutions: [
              {
                label: "Ar calculation",
                steps: [
                  "Ar = (79 × 50.5 + 81 × 49.5) ÷ 100",
                  "= (3989.5 + 4009.5) ÷ 100",
                  "= 7999 ÷ 100",
                  "= 80.0 (1 d.p.)",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
