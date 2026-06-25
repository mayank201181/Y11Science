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
      {
        id: "chem-atoms-bank-mcq-1",
        title: "Atomic Structure MCQ Paper 1",
        description: "Protons, neutrons, electrons, isotopes, and electronic configuration.",
        questions: [
          {
            id: "chem-atoms-bank-mcq1-q01",
            question: "What is the relative charge of an electron?",
            options: ["+1", "0", "−1", "+½"],
            answerIndex: 2,
            explanation: "Electrons carry a relative charge of −1. Protons are +1, neutrons are 0.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bank-mcq1-q02",
            question: "An atom of element Q has the nuclear symbol ⁶⁴₂₉Q. How many neutrons does it contain?",
            options: ["29", "35", "64", "93"],
            answerIndex: 1,
            explanation: "Neutrons = A − Z = 64 − 29 = 35. This is copper-64.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bank-mcq1-q03",
            question: "Which of the following pairs are isotopes of the same element?",
            options: [
              "¹²₆C and ¹²₇N",
              "¹H and ²H",
              "⁴₂He and ⁴₃Li",
              "³⁵₁₇Cl and ³⁶₁₈Ar",
            ],
            answerIndex: 1,
            explanation: "¹H and ²H (hydrogen and deuterium) both have Z = 1 but different A (1 and 2). All other pairs have different proton numbers, so they are different elements.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bank-mcq1-q04",
            question: "Bromine has two isotopes: ⁷⁹Br (50.5%) and ⁸¹Br (49.5%). Which value is closest to the Ar of bromine?",
            options: ["79.0", "79.5", "80.0", "81.0"],
            answerIndex: 2,
            explanation: "Ar = (79 × 50.5 + 81 × 49.5) ÷ 100 = (3989.5 + 4009.5) ÷ 100 = 7999 ÷ 100 = 79.99 ≈ 80.0. The near-equal abundances give an Ar midway between 79 and 81.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Since the two abundances are almost equal (50.5% and 49.5%), Ar will be almost exactly the average of 79 and 81.",
              "Average of 79 and 81 = (79 + 81) ÷ 2 = 80. The small difference in abundances shifts it only slightly.",
            ],
          },
          {
            id: "chem-atoms-bank-mcq1-q05",
            question: "An element has electronic configuration 2,8,8,1. Which statement is correct?",
            options: [
              "It is in Period 3 and Group 1.",
              "It is in Period 4 and Group 1.",
              "It is in Period 1 and Group 4.",
              "It is in Period 4 and Group 8.",
            ],
            answerIndex: 1,
            explanation: "Four shells are occupied → Period 4. One outer-shell electron → Group 1. This is potassium (K, Z = 19).",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Count the terms in the configuration (separated by commas): 2,8,8,1 has four terms → four shells → Period 4.",
              "The last number (1) is the outer-shell electron count → Group 1.",
            ],
          },
          {
            id: "chem-atoms-bank-mcq1-q06",
            question: "A phosphide ion P³⁻ has proton number 15 and mass number 31. How many electrons does P³⁻ have?",
            options: ["12", "15", "18", "31"],
            answerIndex: 2,
            explanation: "P has Z = 15 electrons when neutral. Gaining 3 electrons (3− charge): electrons = 15 + 3 = 18. Protons remain 15; neutrons remain 31 − 15 = 16.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "Anion (negative ion): the atom has gained electrons.",
              "P³⁻ means 3 electrons were gained. Start from Z = 15 and add 3.",
            ],
          },
        ],
      },
      {
        id: "chem-atoms-bank-mcq-2",
        title: "Atomic Structure MCQ Paper 2",
        description: "Deeper application: multi-step sub-particle counting, Ar calculations, and synoptic links.",
        questions: [
          {
            id: "chem-atoms-bank-mcq2-q01",
            question: "Which row correctly states the relative mass of a proton, neutron, and electron?",
            options: [
              "Proton: 1, Neutron: 0, Electron: 1",
              "Proton: 1, Neutron: 1, Electron: 1",
              "Proton: 1, Neutron: 1, Electron: ~0",
              "Proton: +1, Neutron: 1, Electron: −1",
            ],
            answerIndex: 2,
            explanation: "Proton and neutron each have relative mass 1. Electron has relative mass ~1/1836, effectively 0. Option D lists charges, not masses.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bank-mcq2-q02",
            question: "Strontium (Sr, Z = 38) forms a Sr²⁺ ion. How many protons, neutrons, and electrons are in ⁸⁸₃₈Sr²⁺?",
            options: [
              "Protons 38, Neutrons 50, Electrons 36",
              "Protons 36, Neutrons 50, Electrons 36",
              "Protons 38, Neutrons 50, Electrons 40",
              "Protons 38, Neutrons 88, Electrons 36",
            ],
            answerIndex: 0,
            explanation: "Protons = Z = 38 (unchanged). Neutrons = 88 − 38 = 50 (unchanged). Electrons = 38 − 2 = 36 (lost 2 due to 2+ charge). Option B wrongly reduces the proton count.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "core",
            hints: [
              "Ion formation never changes the nucleus: protons and neutrons stay at Z and A − Z.",
              "Sr²⁺ means 2 electrons were lost: electrons = 38 − 2 = 36.",
            ],
          },
          {
            id: "chem-atoms-bank-mcq2-q03",
            question: "Naturally occurring lithium consists of ⁶Li (7.5%) and ⁷Li (92.5%). What is the Ar of lithium?",
            options: ["6.50", "6.93", "6.25", "7.00"],
            answerIndex: 1,
            explanation: "Ar = (6 × 7.5 + 7 × 92.5) ÷ 100 = (45 + 647.5) ÷ 100 = 692.5 ÷ 100 = 6.925 ≈ 6.93. Since ⁷Li dominates, Ar is close to 7 but below it.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "⁷Li is much more abundant (92.5%), so Ar will be close to 7.",
              "Use Ar = (6 × 7.5 + 7 × 92.5) ÷ 100.",
            ],
          },
          {
            id: "chem-atoms-bank-mcq2-q04",
            question: "Which of the following species has the same number of electrons as Ne (Z = 10)?",
            options: ["Mg⁺ (Z = 12)", "N³⁻ (Z = 7)", "Na (Z = 11)", "O⁻ (Z = 8)"],
            answerIndex: 1,
            explanation: "N³⁻: Z = 7, charge = 3−, electrons = 7 + 3 = 10. This matches Ne (10 electrons). Mg⁺: 12 − 1 = 11 electrons (not 10). Na: 11 electrons (not 10). O⁻: 8 + 1 = 9 electrons (not 10). Only N³⁻ has 10 electrons, the same as Ne.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "Ne has 10 electrons. Calculate electrons for each option.",
              "For negative ions: electrons = Z + charge number. For positive ions: electrons = Z − charge number.",
            ],
          },
          {
            id: "chem-atoms-bank-mcq2-q05",
            question: "An element has Ar = 10.8 and two isotopes. The lighter isotope has mass 10 and the heavier has mass 11. Which percentage abundance for the lighter isotope is correct?",
            options: ["20%", "40%", "60%", "80%"],
            answerIndex: 0,
            explanation: "Let lighter isotope (mass 10) have abundance x%. Then: (10x + 11(100 − x)) ÷ 100 = 10.8 → 10x + 1100 − 11x = 1080 → −x = −20 → x = 20%. So the lighter isotope is 20% abundant.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "challenge",
            hints: [
              "Set up an equation: let abundance of ¹⁰ isotope = x%, so abundance of ¹¹ isotope = (100 − x)%.",
              "Write the Ar formula: (10x + 11(100 − x)) ÷ 100 = 10.8.",
              "Multiply both sides by 100: 10x + 1100 − 11x = 1080.",
              "Solve: −x = −20, so x = 20.",
            ],
            strategy: "reverse calculation — work backwards from Ar to find abundance",
          },
          {
            id: "chem-atoms-bank-mcq2-q06",
            question: "Which statement correctly explains why elements in the same group of the Periodic Table react similarly?",
            options: [
              "They have the same mass number.",
              "They have the same number of electron shells.",
              "They have the same number of outer-shell electrons.",
              "They have the same number of protons.",
            ],
            answerIndex: 2,
            explanation: "Chemical reactivity is determined by the number and arrangement of outer-shell (valence) electrons. Elements in the same group share the same number of valence electrons, hence similar chemical behaviour. Same number of shells = same period, not group. Same proton number = same element.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Think: what controls how an atom reacts — the nucleus or the outer electrons?",
              "Group = vertical column. What is the same vertically in the Periodic Table?",
            ],
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "chem-atoms-bank-qa-1",
        title: "Atomic Structure Structured Questions Paper 1",
        description: "Sub-atomic particles, isotopes, and Ar calculations.",
        questions: [
          {
            id: "chem-atoms-bank-qa1-q01",
            question: "The table below gives information about three particles.\n\n| Particle | Protons | Neutrons | Electrons |\n|----------|---------|----------|-----------|\n| X        | 8       | 8        | 8         |\n| Y        | 8       | 10       | 8         |\n| Z        | 8       | 8        | 10        |\n\n(a) State which two particles are isotopes and explain your answer. [2]\n(b) State what type of particle Z is and explain how it formed from X. [2]\n(c) Write the electronic configuration of particle Z. [1]",
            marks: 5,
            modelAnswer:
              "(a) X and Y are isotopes. Both have the same proton number (8), so they are the same element (oxygen), but they have different numbers of neutrons (8 and 10 respectively), giving different mass numbers.\n(b) Z is a negative ion (anion), specifically O²⁻. It formed from X (a neutral oxygen atom) by gaining 2 electrons (because Z has 10 electrons vs X's 8).\n(c) Configuration of Z: 2,8 (10 electrons, filling shell 1 with 2 and shell 2 with 8).",
            markScheme: [
              "X and Y are isotopes",
              "Same proton number (8) / same element; different neutron number (8 vs 10)",
              "Z is a negative ion / anion / O²⁻",
              "X gained 2 electrons / 2 electrons added to form Z",
              "Electronic configuration 2,8",
            ],
            commonError: "Confusing X and Z — students may say Z is an isotope of Y because both have 10 neutrons. But isotopes are defined by same proton number, and Z has 8 protons like X and Y — it is simply the O²⁻ ion.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "Isotopes: look for the same proton number but different neutron numbers.",
              "To identify Z: compare its electrons to X. Same element (same protons), more electrons → negative ion.",
              "Electronic configuration: fill shells in order (2, then 8...).",
            ],
          },
          {
            id: "chem-atoms-bank-qa1-q02",
            question: "Copper (Cu, Z = 29) has two naturally occurring isotopes: ⁶³Cu and ⁶⁵Cu. The relative atomic mass of copper is 63.5.\n(a) Calculate the percentage abundance of each isotope. Show your working. [3]\n(b) Explain why ⁶³Cu and ⁶⁵Cu have the same chemical properties. [2]",
            marks: 5,
            modelAnswer:
              "(a) Let % abundance of ⁶³Cu = x. Then % ⁶⁵Cu = (100 − x).\nAr = (63x + 65(100 − x)) ÷ 100 = 63.5\n63x + 6500 − 65x = 6350\n−2x = −150\nx = 75\nSo ⁶³Cu is 75% abundant and ⁶⁵Cu is 25% abundant.\n(b) ⁶³Cu and ⁶⁵Cu have the same number of protons (Z = 29), so they have the same number of electrons arranged in the same electronic configuration (2,8,18,1). Chemical properties are determined by the number and arrangement of electrons (particularly the outer-shell electrons), so both isotopes react identically.",
            markScheme: [
              "Let abundance of ⁶³Cu = x (or equivalent algebra set-up)",
              "Correct equation: (63x + 65(100−x)) ÷ 100 = 63.5",
              "⁶³Cu = 75%, ⁶⁵Cu = 25%",
              "Same number of protons → same number of electrons / same electronic configuration",
              "Chemical properties determined by electrons (outer-shell electrons)",
            ],
            commonError: "In part (a), students often try to solve by trial and error or by assuming equal abundances. The algebraic method is more reliable and earns method marks.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "challenge",
            hints: [
              "Two unknowns (two % values) but one constraint: they must add to 100. So set one = x and the other = 100 − x.",
              "Substitute into the Ar formula: (63x + 65(100−x)) ÷ 100 = 63.5.",
              "Multiply both sides by 100, then expand and collect x terms.",
              "Solve for x to find the abundance of ⁶³Cu.",
            ],
            strategy: "algebra — set up an equation with one unknown",
            solutions: [
              {
                label: "Algebraic method",
                steps: [
                  "Let % of ⁶³Cu = x; % of ⁶⁵Cu = (100 − x)",
                  "(63x + 65(100 − x)) ÷ 100 = 63.5",
                  "63x + 6500 − 65x = 6350",
                  "−2x = −150 → x = 75",
                  "⁶³Cu = 75%, ⁶⁵Cu = 25%",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bank-qa1-q03",
            question: "Write the electronic configurations for the following species and identify the group and period each neutral atom belongs to:\n(a) Sulphur atom, Z = 16\n(b) Potassium ion K⁺, Z = 19, A = 39\n(c) Aluminium atom, Z = 13\n\nFor (b) also state the number of protons, neutrons, and electrons in K⁺.",
            marks: 7,
            modelAnswer:
              "(a) Sulphur: 16 electrons. Configuration: 2,8,6. Period 3, Group 6.\n(b) K (neutral) = 2,8,8,1. K⁺ loses 1 electron → 2,8,8. Protons = 19, Neutrons = 39 − 19 = 20, Electrons = 19 − 1 = 18.\n(c) Aluminium: 13 electrons. Configuration: 2,8,3. Period 3, Group 3.",
            markScheme: [
              "S: configuration 2,8,6",
              "S: Period 3, Group 6",
              "K⁺: configuration 2,8,8",
              "K⁺: protons = 19, neutrons = 20, electrons = 18",
              "Al: configuration 2,8,3",
              "Al: Period 3, Group 3",
              "(1 mark for correct working method shown for K⁺ particle count)",
            ],
            commonError: "Writing K⁺ configuration as 2,8,8,0 or 2,8,9 — when a shell is emptied, you drop it from the notation. The correct configuration is 2,8,8.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Fill shells in order: max 2 in shell 1, max 8 in shell 2, max 8 in shell 3.",
              "For K⁺: start with neutral K (2,8,8,1) then remove 1 electron from the outermost shell.",
              "Period = number of shells used. Group = last number in configuration (for Groups 1−7).",
            ],
          },
          {
            id: "chem-atoms-bank-qa1-q04",
            question: "A student claims: 'The relative atomic mass of chlorine is 35.5, so chlorine atoms have half a neutron.' Evaluate this statement and explain what Ar = 35.5 actually means. [4]",
            marks: 4,
            modelAnswer:
              "The student's claim is incorrect. Individual chlorine atoms cannot have half a neutron — neutrons are whole particles. The value 35.5 is the **relative atomic mass**, which is a **weighted mean** of the masses of the naturally occurring isotopes of chlorine. Chlorine has two main isotopes: ³⁵Cl (approximately 75%) and ³⁷Cl (approximately 25%). The Ar is calculated as: (35 × 75 + 37 × 25) ÷ 100 = 35.5. This means that in a large sample of chlorine atoms, the average mass per atom is 35.5 on the relative scale — but every individual atom has a mass number of either 35 or 37, never 35.5.",
            markScheme: [
              "Student's claim is incorrect / individual atoms cannot have fractional neutrons",
              "Ar is a weighted mean / average mass of naturally occurring isotopes",
              "Chlorine has two isotopes: ³⁵Cl and ³⁷Cl (or: approximately 75% and 25%)",
              "Ar calculation shown or described: (35 × 75 + 37 × 25) ÷ 100 = 35.5",
            ],
            commonError: "Students sometimes think Ar must match a real atom's mass number. In reality, Ar is a statistical average across all naturally occurring isotopes and need not correspond to any single isotope.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Think about what an 'average' means: is the average of 35 and 37 necessarily a real number of neutrons?",
              "Ar is a weighted average over a large sample — it does not describe a single atom.",
            ],
            strategy: "evaluate a misconception — separate what 'average' means from what 'individual atom' means",
          },
        ],
      },
      {
        id: "chem-atoms-bank-qa-2",
        title: "Atomic Structure Structured Questions Paper 2",
        description: "Challenge paper: reverse Ar calculations, synoptic ionic reasoning, and multi-step problems.",
        questions: [
          {
            id: "chem-atoms-bank-qa2-q01",
            question: "Neon (Z = 10) has three isotopes: ²⁰Ne (90.48%), ²¹Ne (0.27%), and ²²Ne (9.25%). Calculate the Ar of neon to 4 significant figures. [3]",
            marks: 3,
            modelAnswer:
              "Ar = (20 × 90.48 + 21 × 0.27 + 22 × 9.25) ÷ 100\n= (1809.60 + 5.67 + 203.50) ÷ 100\n= 2018.77 ÷ 100\n= 20.1877\n≈ 20.19 (4 s.f.)",
            markScheme: [
              "Correct formula applied: Σ(mass × %) ÷ 100",
              "Correct substitution of all three isotopes",
              "Answer: 20.19 (accept 20.1877 or correctly rounded to 4 s.f.)",
            ],
            commonError: "Omitting the smallest isotope (²¹Ne, 0.27%) because it seems negligible. All isotopes must be included for full marks.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Include all three isotopes — even the minor ²¹Ne contributes to the weighted average.",
              "Multiply each mass by its percentage, add all three products, then divide by 100.",
            ],
          },
          {
            id: "chem-atoms-bank-qa2-q02",
            question: "An element M forms an ion M³⁺. The M³⁺ ion has 10 electrons, 14 neutrons, and its mass number is 27.\n(a) Identify element M. [2]\n(b) Write the electronic configurations of M and M³⁺. [2]\n(c) Explain, with reference to electron configuration, why M forms a 3+ ion rather than a 2+ ion. [2]",
            marks: 6,
            modelAnswer:
              "(a) M³⁺ has 10 electrons and charge 3+, so neutral M has 10 + 3 = 13 protons. Element with Z = 13 is aluminium (Al). Mass number = 27 (given); neutrons = 27 − 13 = 14 ✓.\n(b) Al (neutral): 13 electrons → 2,8,3. Al³⁺: 10 electrons → 2,8.\n(c) Neutral Al has 3 outer-shell electrons (configuration 2,8,3). Losing all 3 outer-shell electrons achieves the stable noble gas configuration 2,8 (same as neon). Losing only 2 electrons would leave configuration 2,8,1 — one electron remains in shell 3, which is not a full outer shell and is less stable. Therefore, Al preferentially loses 3 electrons.",
            markScheme: [
              "Z = 13 (from electrons in ion + charge: 10 + 3 = 13)",
              "Element identified as aluminium / Al",
              "Al: 2,8,3",
              "Al³⁺: 2,8",
              "Losing 3 electrons achieves full outer shell / noble gas configuration (2,8)",
              "Losing 2 electrons leaves 1 electron in shell 3 / incomplete outer shell",
            ],
            commonError: "Students often just state 'Group 3 elements form 3+ ions' without explaining why in terms of electronic configuration. The examiner wants the electron-shell reasoning.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "challenge",
            hints: [
              "To find Z for M: remember M³⁺ has lost 3 electrons compared to neutral M. So Z = electrons in ion + charge = 10 + 3.",
              "Use Z to identify the element from the Periodic Table.",
              "For part (c): write out configurations for Al, Al²⁺, and Al³⁺, then compare which one has a full outer shell.",
              "Noble gas configuration (full outer shell) = maximum stability.",
            ],
            strategy: "work backwards from ion to neutral atom",
          },
          {
            id: "chem-atoms-bank-qa2-q03",
            question: "Two isotopes of an element E are ⁶³E (69%) and ⁶⁵E (31%). The element forms an ion E²⁺.\n(a) Show that Ar = 63.62 to 4 significant figures. [2]\n(b) The ion E²⁺ has 27 electrons. Identify element E and state Z. [2]\n(c) Write the electronic configuration of the E²⁺ ion. [1]\n(d) State one physical difference and one chemical similarity between ⁶³E²⁺ and ⁶⁵E²⁺. [2]",
            marks: 7,
            modelAnswer:
              "(a) Ar = (63 × 69 + 65 × 31) ÷ 100 = (4347 + 2015) ÷ 100 = 6362 ÷ 100 = 63.62.\n(b) E²⁺ has 27 electrons and charge 2+, so neutral E has Z = 27 + 2 = 29 protons. Element with Z = 29 is copper (Cu).\n(c) Cu²⁺ has 27 electrons. Configuration: 2,8,8,9. (Note: at IGCSE level, filling 2,8,8,9 is acceptable; the actual 3d/4s arrangement is A-level content.)\n(d) Physical difference: ⁶³E²⁺ and ⁶⁵E²⁺ ions have different masses (63 vs 65 relative mass) — different mass/density. Chemical similarity: both ions have the same number and arrangement of electrons (2,8,8,9), so they form the same types of compounds / have the same ionic charge (2+) / same chemical reactivity.",
            markScheme: [
              "Ar calculation: (63 × 69 + 65 × 31) ÷ 100 shown",
              "Ar = 63.62 confirmed",
              "Z = 27 + 2 = 29 electrons in neutral atom",
              "Element = copper / Cu",
              "E²⁺ configuration: 2,8,8,9 (accept 2,8,17 if student uses two shells only for remaining — check sum = 27)",
              "Physical difference: different mass / different mass number (63 vs 65)",
              "Chemical similarity: same electronic configuration / same number of outer-shell electrons / same ionic charge",
            ],
            commonError: "For part (b), students subtract 2 instead of adding 2: they write Z = 27 − 2 = 25 (manganese), which is wrong. A positive ion has fewer electrons than protons, so Z = electrons + charge.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "challenge",
            hints: [
              "Part (a): substitute directly into Ar = (63 × 69 + 65 × 31) ÷ 100 and show arithmetic.",
              "Part (b): E²⁺ has 27 electrons. It lost 2 to become 2+. So neutral E had 27 + 2 = 29 electrons = Z.",
              "Part (c): fill shells 2, 8, 8, then the remaining electrons go in shell 4 (at IGCSE level).",
              "Part (d): physical = mass/density related; chemical = electron configuration related.",
            ],
            strategy: "multi-step: Ar → identify element → configure ion → compare isotopes",
          },
          {
            id: "chem-atoms-bank-qa2-q04",
            question: "The diagram shows an atom of lithium. Use it to answer the following.\n\n[Nucleus: 3 protons, 4 neutrons. Shell 1: 2 electrons. Shell 2: 1 electron.]\n\n(a) Write the nuclear symbol for this lithium atom. [1]\n(b) A different lithium atom has the symbol ⁶Li. State the number of protons, neutrons, and electrons in ⁶Li. [3]\n(c) Explain why ⁶Li and ⁷Li are isotopes. [2]\n(d) The Ar of lithium is 6.93. Show that ⁷Li must be more abundant than ⁶Li. [2]",
            marks: 8,
            modelAnswer:
              "(a) Nuclear symbol: ⁷₃Li (A = 3 + 4 = 7; Z = 3).\n(b) ⁶Li: Z = 3, so protons = 3, neutrons = 6 − 3 = 3, electrons = 3.\n(c) ⁶Li and ⁷Li are isotopes because they have the same proton number (Z = 3), so they are both atoms of lithium (the same element), but they have different mass numbers (6 and 7) because they contain different numbers of neutrons (3 and 4 respectively).\n(d) Ar = 6.93, which lies between 6 and 7. Because 6.93 is closer to 7 than to 6, the weighted average is pulled toward 7 — this only happens if ⁷Li is more abundant. (Formally: if x% ⁷Li and (100−x)% ⁶Li, then 6.93 > 6.5 implies x > 50, confirming ⁷Li is more abundant.)",
            markScheme: [
              "Nuclear symbol ⁷₃Li (both A = 7 and Z = 3 required)",
              "Protons = 3, Neutrons = 3, Electrons = 3 for ⁶Li",
              "Isotopes: same proton number (Z = 3) / same element",
              "Isotopes: different mass numbers / different numbers of neutrons",
              "Ar = 6.93 is closer to 7 than to 6 → ⁷Li must be more abundant / majority isotope",
              "Formal reasoning or equation showing x > 50 for ⁷Li",
            ],
            commonError: "In part (d), students state 'Ar is close to 7 so ⁷Li is more common' without explaining the logic. The examiner expects the reasoning: a weighted average is pulled toward the more abundant value.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "core",
            hints: [
              "Part (a): A = protons + neutrons = 3 + 4. Z = number of protons = 3.",
              "Part (b): For ⁶Li, Z = 3 (same element as ⁷Li). Neutrons = 6 − 3.",
              "Part (c): Definition of isotopes: same Z, different A, hence different neutron count.",
              "Part (d): A weighted average always lies closer to the more abundant value. Since 6.93 > 6.5 (the midpoint of 6 and 7), ⁷Li must have more than 50% abundance.",
            ],
            strategy: "interpret a weighted average qualitatively before calculating",
          },
        ],
      },
    ],
  },
};
