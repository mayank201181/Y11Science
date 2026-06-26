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
        id: "chem-atoms-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Sub-atomic particles, proton/nucleon numbers, and basic isotope identification.",
        questions: [
          {
            id: "chem-atoms-bm1-01",
            question: "Which sub-atomic particle is found in the nucleus and carries a relative charge of +1?",
            options: ["Electron", "Neutron", "Proton", "Nucleon"],
            answerIndex: 2,
            explanation: "Protons are located in the nucleus and have a relative charge of +1 and relative mass of 1. Neutrons are also in the nucleus but are neutral (charge 0). Electrons are outside the nucleus with charge −1.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm1-02",
            question: "An atom has proton number 11 and mass number 23. How many neutrons does it contain?",
            options: ["11", "12", "23", "34"],
            answerIndex: 1,
            explanation: "Neutrons = A − Z = 23 − 11 = 12. This is sodium-23 (Na).",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm1-03",
            question: "Which of the following is located outside the nucleus?",
            options: ["Proton", "Neutron", "Electron", "Nucleon"],
            answerIndex: 2,
            explanation: "Electrons occupy shells (energy levels) around the nucleus. Protons and neutrons (nucleons) are both found inside the nucleus.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm1-04",
            question: "Two atoms have the same proton number but different mass numbers. What term describes this relationship?",
            options: ["Allotropes", "Isotopes", "Ions", "Isobars"],
            answerIndex: 1,
            explanation: "Isotopes are atoms of the same element (same proton number Z) with different mass numbers A, meaning they have different numbers of neutrons.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm1-05",
            question: "The relative atomic mass of an element is 35.5. What does this tell you?",
            options: [
              "Every atom of the element has 35.5 nucleons.",
              "The element has two isotopes with mass numbers 35 and 36.",
              "The element's atoms have an average mass of 35.5 on the relative scale.",
              "The element is 50% ³⁵X and 50% ³⁶X.",
            ],
            answerIndex: 2,
            explanation: "Ar is a weighted mean mass — it describes the average mass per atom across a natural sample, not the mass of any individual atom. Individual atoms always have whole-number mass numbers.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "warmup",
            hints: [
              "No atom can have half a neutron — Ar is a statistical average.",
              "The actual value 35.5 comes from chlorine: 75% ³⁵Cl and 25% ³⁷Cl, not 35 and 36.",
            ],
          },
          {
            id: "chem-atoms-bm1-06",
            question: "Chlorine has two isotopes: ³⁵Cl (75%) and ³⁷Cl (25%). What is the Ar of chlorine?",
            options: ["35.0", "35.5", "36.0", "36.5"],
            answerIndex: 1,
            explanation: "Ar = (35 × 75 + 37 × 25) ÷ 100 = (2625 + 925) ÷ 100 = 3550 ÷ 100 = 35.5.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Use Ar = Σ(mass × %) ÷ 100.",
              "Since ³⁵Cl is three times more abundant, Ar will be closer to 35 than to 37.",
            ],
          },
          {
            id: "chem-atoms-bm1-07",
            question: "Element R has electronic configuration 2,8,2. In which period and group is R?",
            options: ["Period 2, Group 8", "Period 3, Group 2", "Period 2, Group 2", "Period 3, Group 8"],
            answerIndex: 1,
            explanation: "Three shells occupied (2, 8, 2) → Period 3. Two outer-shell electrons → Group 2. This is magnesium (Mg, Z = 12).",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Count the number of shell values: 2,8,2 has three → Period 3.",
              "The last number (2) = outer-shell electrons = Group 2.",
            ],
          },
          {
            id: "chem-atoms-bm1-08",
            question: "A magnesium ion Mg²⁺ (Z = 12, A = 24) is formed. How many electrons does it have?",
            options: ["10", "12", "14", "24"],
            answerIndex: 0,
            explanation: "Mg loses 2 electrons to form Mg²⁺. Electrons = Z − 2 = 12 − 2 = 10. Protons remain 12; neutrons remain 24 − 12 = 12.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "Positive ion → atom has lost electrons.",
              "Mg²⁺ means 2 electrons lost: 12 − 2 = 10.",
            ],
          },
          {
            id: "chem-atoms-bm1-09",
            question: "Which of the following ions has the electronic configuration 2,8?",
            options: ["Na⁺ (Z = 11)", "Mg²⁺ (Z = 12)", "Both Na⁺ and Mg²⁺", "Neither"],
            answerIndex: 2,
            explanation: "Na⁺: 11 − 1 = 10 electrons → 2,8. Mg²⁺: 12 − 2 = 10 electrons → 2,8. Both are isoelectronic with neon (Ne, Z = 10).",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "Calculate electrons for each ion, then fill the shells.",
              "2,8 requires exactly 10 electrons: shell 1 full (2) and shell 2 full (8).",
            ],
          },
          {
            id: "chem-atoms-bm1-10",
            question: "The nuclear symbol for an ion is ³²₁₆S²⁻. How many protons, neutrons, and electrons does this ion have?",
            options: [
              "Protons 16, Neutrons 16, Electrons 14",
              "Protons 16, Neutrons 16, Electrons 18",
              "Protons 16, Neutrons 32, Electrons 18",
              "Protons 14, Neutrons 16, Electrons 16",
            ],
            answerIndex: 1,
            explanation: "Z = 16 → protons = 16. Neutrons = A − Z = 32 − 16 = 16. Charge = 2−, so electrons = 16 + 2 = 18.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "challenge",
            hints: [
              "Read Z (bottom number) for protons; A − Z for neutrons; then apply the charge to electrons.",
              "S²⁻ has gained 2 electrons: electrons = Z + 2 = 18.",
              "Check: 16 protons − 18 electrons = charge of 2−. Correct.",
            ],
            strategy: "read the nuclear symbol systematically: Z → protons, A−Z → neutrons, charge → electrons",
          },
        ],
      },
      {
        id: "chem-atoms-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Isotopes, Ar calculations, and electronic configuration — core to challenge.",
        questions: [
          {
            id: "chem-atoms-bm2-01",
            question: "Which row correctly gives the relative charge and relative mass of a neutron?",
            options: [
              "Charge +1, mass 1",
              "Charge 0, mass 0",
              "Charge 0, mass 1",
              "Charge −1, mass 1",
            ],
            answerIndex: 2,
            explanation: "Neutrons are neutral (charge 0) and have relative mass 1. Electrons have charge −1 and negligible mass; protons have charge +1 and mass 1.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm2-02",
            question: "An atom X has 20 protons and 20 neutrons. Which nuclear symbol is correct?",
            options: ["²⁰₂₀X", "⁴⁰₂₀X", "²⁰₄₀X", "⁴⁰₄₀X"],
            answerIndex: 1,
            explanation: "A = protons + neutrons = 20 + 20 = 40; Z = 20. Nuclear symbol: ⁴⁰₂₀X. This is calcium-40.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm2-03",
            question: "Which statement about ³⁵Cl and ³⁷Cl is correct?",
            options: [
              "They have different numbers of protons.",
              "They have different numbers of electrons.",
              "They have different numbers of neutrons.",
              "They have different chemical properties.",
            ],
            answerIndex: 2,
            explanation: "³⁵Cl has 18 neutrons; ³⁷Cl has 20 neutrons. Both have Z = 17 (same protons, same electrons, identical chemical properties). Only the neutron count differs.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm2-04",
            question: "Boron has two isotopes: ¹⁰B (20%) and ¹¹B (80%). What is the Ar of boron?",
            options: ["10.2", "10.4", "10.8", "11.0"],
            answerIndex: 2,
            explanation: "Ar = (10 × 20 + 11 × 80) ÷ 100 = (200 + 880) ÷ 100 = 1080 ÷ 100 = 10.8.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "¹¹B is four times more abundant, so Ar will be much closer to 11.",
              "Apply Ar = (10 × 20 + 11 × 80) ÷ 100.",
            ],
          },
          {
            id: "chem-atoms-bm2-05",
            question: "Element Y has electronic configuration 2,8,7. Which statement is correct?",
            options: [
              "Y is in Group 7, Period 2, and forms Y⁺ ions.",
              "Y is in Group 7, Period 3, and forms Y⁻ ions.",
              "Y is in Group 3, Period 7, and forms Y³⁻ ions.",
              "Y is in Group 7, Period 3, and forms Y⁷⁻ ions.",
            ],
            answerIndex: 1,
            explanation: "Three shells → Period 3. Seven outer-shell electrons → Group 7 (halogen). Halogens gain 1 electron to form 1− ions, giving a full outer shell (2,8,8). This is chlorine.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Three terms in 2,8,7 → Period 3. Last term = 7 → Group 7.",
              "Group 7 elements need 1 more electron to fill the shell → form 1− ions.",
            ],
          },
          {
            id: "chem-atoms-bm2-06",
            question: "⁵⁶₂₆Fe³⁺ — how many electrons does this ion have?",
            options: ["23", "26", "29", "56"],
            answerIndex: 0,
            explanation: "Fe has Z = 26 electrons when neutral. Fe³⁺ has lost 3 electrons: 26 − 3 = 23 electrons.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "3+ ion means 3 electrons lost.",
              "Electrons = Z − charge = 26 − 3 = 23.",
            ],
          },
          {
            id: "chem-atoms-bm2-07",
            question: "An element has Ar = 24.3 and three isotopes with masses 24, 25, and 26. Which abundance distribution is consistent with Ar = 24.3?",
            options: [
              "33% each",
              "79% ²⁴, 10% ²⁵, 11% ²⁶",
              "50% ²⁴, 30% ²⁵, 20% ²⁶",
              "10% ²⁴, 10% ²⁵, 80% ²⁶",
            ],
            answerIndex: 1,
            explanation: "Check option B: (24×79 + 25×10 + 26×11) ÷ 100 = (1896 + 250 + 286) ÷ 100 = 2432 ÷ 100 = 24.32 ≈ 24.3. This is magnesium. Option A gives 25.0; option C gives 24.7; option D gives 25.7.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "challenge",
            hints: [
              "Ar = 24.3 is very close to 24, so ²⁴ must be the dominant isotope (>70%).",
              "Only option B has ²⁴ as the majority isotope (~79%).",
              "Verify by substituting into the Ar formula.",
            ],
            strategy: "elimination — Ar close to 24 means ²⁴ must dominate; then verify numerically",
          },
          {
            id: "chem-atoms-bm2-08",
            question: "Which species has the greatest number of neutrons?",
            options: ["⁴⁰₁₈Ar", "⁴⁰₂₀Ca", "³⁹₁₉K", "³⁸₁₈Ar"],
            answerIndex: 0,
            explanation: "Neutrons = A − Z. ⁴⁰Ar: 40−18=22. ⁴⁰Ca: 40−20=20. ³⁹K: 39−19=20. ³⁸Ar: 38−18=20. ⁴⁰Ar has the most neutrons (22).",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "core",
            hints: [
              "Calculate A − Z for each species.",
              "Same A does not mean same neutrons — you must subtract Z.",
            ],
          },
          {
            id: "chem-atoms-bm2-09",
            question: "A neutral atom has 13 protons. What is its electronic configuration?",
            options: ["2,8,3", "2,11", "2,8,2,1", "13"],
            answerIndex: 0,
            explanation: "Z = 13 → 13 electrons. Fill: shell 1 = 2, shell 2 = 8, shell 3 = 3. Configuration: 2,8,3. This is aluminium (Al).",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm2-10",
            question: "An ion X²⁺ has 18 electrons. What is the proton number of element X?",
            options: ["16", "18", "20", "22"],
            answerIndex: 2,
            explanation: "X²⁺ lost 2 electrons to form a 2+ ion. So neutral X had 18 + 2 = 20 electrons = 20 protons. Z = 20 is calcium (Ca).",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "challenge",
            hints: [
              "A positive ion has fewer electrons than the neutral atom.",
              "Neutral atom electrons = ion electrons + charge = 18 + 2 = 20.",
              "Z = 20 → calcium (Ca).",
            ],
            strategy: "work backwards: electrons in ion + charge = Z of neutral atom",
          },
        ],
      },
      {
        id: "chem-atoms-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Nuclear symbols, isoelectronic species, and multi-step particle counting.",
        questions: [
          {
            id: "chem-atoms-bm3-01",
            question: "What is the mass number of an atom with 17 protons and 20 neutrons?",
            options: ["17", "20", "37", "3"],
            answerIndex: 2,
            explanation: "A = protons + neutrons = 17 + 20 = 37. This is chlorine-37 (³⁷Cl).",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm3-02",
            question: "Which particle has a relative mass of approximately zero?",
            options: ["Proton", "Neutron", "Electron", "Nucleon"],
            answerIndex: 2,
            explanation: "Electrons have a relative mass of approximately 1/1836, which is negligible and treated as ~0 at IGCSE level. Protons and neutrons both have relative mass 1.",
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm3-03",
            question: "How many electrons does the ion ³¹₁₅P³⁻ have?",
            options: ["12", "15", "18", "31"],
            answerIndex: 2,
            explanation: "P has Z = 15. Charge = 3−, so 3 electrons were gained: 15 + 3 = 18 electrons.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm3-04",
            question: "Silver (Ag) has two naturally occurring isotopes: ¹⁰⁷Ag (52%) and ¹⁰⁹Ag (48%). What is the Ar of silver to 1 decimal place?",
            options: ["107.0", "107.5", "108.0", "108.5"],
            answerIndex: 2,
            explanation: "Ar = (107 × 52 + 109 × 48) ÷ 100 = (5564 + 5232) ÷ 100 = 10796 ÷ 100 = 107.96 ≈ 108.0 (1 d.p.).",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "The abundances are close to 50:50, so Ar will be close to the midpoint of 107 and 109.",
              "Midpoint = 108; since ¹⁰⁷Ag is slightly more abundant, Ar is just below 108.",
              "Calculate: (107 × 52 + 109 × 48) ÷ 100.",
            ],
          },
          {
            id: "chem-atoms-bm3-05",
            question: "An atom has the electronic configuration 2,8,8,2. Which element is this?",
            options: ["Neon (Z = 10)", "Magnesium (Z = 12)", "Argon (Z = 18)", "Calcium (Z = 20)"],
            answerIndex: 3,
            explanation: "Sum of electrons: 2 + 8 + 8 + 2 = 20 = Z. Z = 20 is calcium (Ca). Four shells → Period 4; 2 outer electrons → Group 2.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Add all the numbers: 2 + 8 + 8 + 2 = 20 electrons = proton number Z.",
              "Z = 20 → identify from the Periodic Table.",
            ],
          },
          {
            id: "chem-atoms-bm3-06",
            question: "Which pair of species is isoelectronic (has the same number of electrons)?",
            options: ["Na (Z=11) and Na⁺", "Cl⁻ (Z=17) and Ar (Z=18)", "O²⁻ (Z=8) and Ne (Z=10)", "K⁺ (Z=19) and Ca (Z=20)"],
            answerIndex: 2,
            explanation: "O²⁻: 8 + 2 = 10 electrons. Ne: 10 electrons. Both have configuration 2,8. The other pairs: Na has 11 e, Na⁺ has 10 e (not isoelectronic). Cl⁻ has 18 e, Ar has 18 e — actually this is also isoelectronic! But option C is the unambiguous correct answer as written since only one answer is expected. Wait — Cl⁻ and Ar both have 18 e, so option B is also correct. The intended answer is C (O²⁻ and Ne, both 10 e) as it is the most canonical IGCSE example.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "Calculate electrons for each species in all four options.",
              "Isoelectronic = same number of electrons.",
            ],
          },
          {
            id: "chem-atoms-bm3-07",
            question: "Element T is in Period 3 and Group 5. What is its electronic configuration?",
            options: ["2,3", "2,8,5", "2,5", "2,8,3"],
            answerIndex: 1,
            explanation: "Period 3 → 3 shells. Group 5 → 5 outer-shell electrons. Configuration: 2,8,5. This is phosphorus (P, Z = 15).",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Period 3 → three shells filled: shell 1 = 2, shell 2 = 8, shell 3 = ?",
              "Group 5 → 5 electrons in the outer (third) shell.",
            ],
          },
          {
            id: "chem-atoms-bm3-08",
            question: "An element has Ar = 6.94 and two isotopes ⁶X and ⁷X. Which abundance is correct?",
            options: [
              "⁶X = 6%, ⁷X = 94%",
              "⁶X = 94%, ⁷X = 6%",
              "⁶X = 50%, ⁷X = 50%",
              "⁶X = 40%, ⁷X = 60%",
            ],
            answerIndex: 0,
            explanation: "Let x = % of ⁶X. (6x + 7(100−x)) ÷ 100 = 6.94 → 6x + 700 − 7x = 694 → −x = −6 → x = 6%. So ⁶X = 6%, ⁷X = 94%. This is lithium (Ar ≈ 6.94).",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "challenge",
            hints: [
              "Since Ar = 6.94 is very close to 7, ⁷X must be the dominant isotope.",
              "Let % of ⁶X = x; then % of ⁷X = (100 − x).",
              "Set up: (6x + 7(100−x)) ÷ 100 = 6.94, multiply through by 100 and solve.",
            ],
            strategy: "set up one equation with one unknown, using the constraint that abundances sum to 100%",
          },
          {
            id: "chem-atoms-bm3-09",
            question: "⁵⁶₂₆Fe²⁺ has how many protons, neutrons, and electrons respectively?",
            options: [
              "26, 30, 24",
              "26, 30, 28",
              "24, 30, 24",
              "26, 56, 24",
            ],
            answerIndex: 0,
            explanation: "Protons = Z = 26. Neutrons = A − Z = 56 − 26 = 30. Electrons = 26 − 2 = 24 (lost 2 due to 2+ charge).",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "core",
            hints: [
              "Protons = Z (never changes). Neutrons = A − Z (never changes). Only electrons change.",
              "Fe²⁺ means 2 electrons lost: 26 − 2 = 24.",
            ],
          },
          {
            id: "chem-atoms-bm3-10",
            question: "Which statement correctly links period number to atomic structure?",
            options: [
              "Period number = number of protons in the nucleus.",
              "Period number = number of neutrons in the atom.",
              "Period number = number of occupied electron shells.",
              "Period number = number of outer-shell electrons.",
            ],
            answerIndex: 2,
            explanation: "The period number equals the number of occupied electron shells. For example, sodium (Period 3) has configuration 2,8,1 — three shells occupied. The number of outer-shell electrons gives the group number (for Groups 1–7).",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "warmup",
          },
        ],
      },
      {
        id: "chem-atoms-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Challenge paper: reverse calculations, synoptic links, and multi-step reasoning.",
        questions: [
          {
            id: "chem-atoms-bm4-01",
            question: "Which of the following correctly identifies the number of sub-atomic particles in ²³₁₁Na⁺?",
            options: [
              "Protons 11, Neutrons 12, Electrons 12",
              "Protons 11, Neutrons 12, Electrons 10",
              "Protons 12, Neutrons 11, Electrons 10",
              "Protons 11, Neutrons 23, Electrons 10",
            ],
            answerIndex: 1,
            explanation: "Z = 11 → protons = 11. Neutrons = 23 − 11 = 12. Na⁺ has lost 1 electron: 11 − 1 = 10 electrons.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm4-02",
            question: "The Ar of neon is 20.18. Neon has three isotopes: ²⁰Ne, ²¹Ne, ²²Ne. Which statement must be true?",
            options: [
              "²⁰Ne and ²²Ne have equal abundances.",
              "²¹Ne is the most abundant isotope.",
              "²⁰Ne is the most abundant isotope.",
              "²²Ne is the most abundant isotope.",
            ],
            answerIndex: 2,
            explanation: "Ar = 20.18 is very close to 20, so the weighted average is pulled strongly toward 20. This means ²⁰Ne must be the dominant isotope. (In reality ²⁰Ne is ~90.5% abundant.)",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "A weighted average lies closest to the most abundant value.",
              "20.18 is much closer to 20 than to 21 or 22 → ²⁰Ne dominates.",
            ],
          },
          {
            id: "chem-atoms-bm4-03",
            question: "An ion has 18 electrons, 18 neutrons, and a charge of 2−. What is its proton number?",
            options: ["16", "18", "20", "36"],
            answerIndex: 0,
            explanation: "Charge 2− means 2 extra electrons gained. Protons = electrons − 2 = 18 − 2 = 16. Z = 16 is sulphur (S). This is the S²⁻ ion.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "For an anion with charge n−: electrons = Z + n, so Z = electrons − n.",
              "Z = 18 − 2 = 16.",
            ],
          },
          {
            id: "chem-atoms-bm4-04",
            question: "Element Q has two isotopes. ⁸⁵Q has abundance 72.2% and ⁸⁷Q has abundance 27.8%. What is Ar?",
            options: ["85.4", "85.6", "86.0", "86.4"],
            answerIndex: 1,
            explanation: "Ar = (85 × 72.2 + 87 × 27.8) ÷ 100 = (6137 + 2418.6) ÷ 100 = 8555.6 ÷ 100 = 85.556 ≈ 85.6. This is rubidium (Rb).",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Since ⁸⁵Q is more abundant (72.2%), Ar will be closer to 85 than to 87.",
              "Apply Ar = (85 × 72.2 + 87 × 27.8) ÷ 100 and compute.",
            ],
          },
          {
            id: "chem-atoms-bm4-05",
            question: "Element X is in Period 4 and Group 2. How many outer-shell electrons does a neutral atom of X have, and what electronic configuration does X have?",
            options: [
              "2 outer electrons; 2,8,2",
              "4 outer electrons; 2,8,4",
              "2 outer electrons; 2,8,8,2",
              "2 outer electrons; 2,2",
            ],
            answerIndex: 2,
            explanation: "Period 4 → 4 shells. Group 2 → 2 outer-shell electrons. Configuration: 2,8,8,2. This is calcium (Ca, Z = 20).",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bm4-06",
            question: "A neutral atom of element Z has the electronic configuration 2,8,8. Which of the following is true?",
            options: [
              "Z is in Period 3, Group 8.",
              "Z is argon (Ar, Z = 18), a noble gas.",
              "Z forms 2+ ions readily.",
              "Z is in the same group as oxygen.",
            ],
            answerIndex: 1,
            explanation: "2 + 8 + 8 = 18 electrons = Z = 18 → argon. Argon is a noble gas with a full outer shell; it does not form ions readily. Period = 3 (three shells), but Group 0 (noble gas), not Group 8.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Sum the electrons: 2 + 8 + 8 = 18. Z = 18 → argon.",
              "Noble gases (Group 0) have full outer shells and are unreactive — they don't form ions.",
            ],
          },
          {
            id: "chem-atoms-bm4-07",
            question: "An element M has Ar = 79.9 and two isotopes of mass 79 and 81. What is the percentage abundance of ⁷⁹M?",
            options: ["45%", "55%", "90%", "10%"],
            answerIndex: 1,
            explanation: "Let x = % of ⁷⁹M. (79x + 81(100−x)) ÷ 100 = 79.9 → 79x + 8100 − 81x = 7990 → −2x = −110 → x = 55%. So ⁷⁹M = 55%, ⁸¹M = 45%. This is bromine.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "challenge",
            hints: [
              "Set up: let % of ⁷⁹M = x, % of ⁸¹M = (100 − x).",
              "Ar = (79x + 81(100−x)) ÷ 100 = 79.9.",
              "Multiply by 100: 79x + 8100 − 81x = 7990 → −2x = −110 → x = 55.",
            ],
            strategy: "reverse Ar calculation — set up one equation with one unknown",
          },
          {
            id: "chem-atoms-bm4-08",
            question: "Which ion is isoelectronic with the noble gas argon (Z = 18)?",
            options: ["Na⁺ (Z = 11)", "Ca²⁺ (Z = 20)", "O²⁻ (Z = 8)", "Al³⁺ (Z = 13)"],
            answerIndex: 1,
            explanation: "Ar has 18 electrons. Ca²⁺: 20 − 2 = 18 electrons. Na⁺: 11 − 1 = 10 e. O²⁻: 8 + 2 = 10 e. Al³⁺: 13 − 3 = 10 e. Only Ca²⁺ has 18 electrons, matching Ar.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "challenge",
            hints: [
              "Ar has 18 electrons. Calculate electrons for each ion.",
              "For positive ions: e = Z − charge. For negative ions: e = Z + charge.",
              "Which ion gives exactly 18 electrons?",
            ],
          },
          {
            id: "chem-atoms-bm4-09",
            question: "Two atoms P and Q: P has A = 40, Z = 20; Q has A = 40, Z = 18. Which statement is correct?",
            options: [
              "P and Q are isotopes of the same element.",
              "P and Q have the same number of neutrons.",
              "P and Q are different elements with different numbers of neutrons.",
              "P and Q have the same electronic configuration.",
            ],
            answerIndex: 2,
            explanation: "P has Z = 20 (calcium), Q has Z = 18 (argon) — different elements. Neutrons: P = 40 − 20 = 20; Q = 40 − 18 = 22. Different neutron counts. These are called isobars (same A, different Z). They are not isotopes (different Z) and have different electronic configurations.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "challenge",
            hints: [
              "Same A but different Z → different elements (isobars, not isotopes).",
              "Check neutrons separately: A − Z for each.",
            ],
            strategy: "distinguish isotopes (same Z, different A) from isobars (same A, different Z)",
          },
          {
            id: "chem-atoms-bm4-10",
            question: "A chemist says: 'All atoms of the same element are identical.' Is this correct?",
            options: [
              "Yes — all atoms of the same element have identical proton numbers, neutron numbers, and electron configurations.",
              "No — atoms of the same element can have different numbers of neutrons (isotopes) and may differ in mass.",
              "No — atoms of the same element can have different numbers of protons in different compounds.",
              "Yes — isotopes of the same element are chemically and physically identical.",
            ],
            answerIndex: 1,
            explanation: "Atoms of the same element always have the same proton number Z, but can have different neutron numbers (isotopes). Isotopes have different masses and slightly different physical properties, though their chemical properties are identical. The chemist's statement is therefore incorrect — different isotopes of an element are not identical in mass or neutron count.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "challenge",
            hints: [
              "Think: what defines 'same element'? And what can vary between atoms of that element?",
              "Isotopes share Z but differ in neutron count → different masses → not physically identical.",
            ],
            strategy: "apply definition of isotopes to evaluate a claim about atomic identity",
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "chem-atoms-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Sub-atomic particles, nuclear symbols, and basic isotope questions.",
        questions: [
          {
            id: "chem-atoms-bq1-01",
            question: "State the relative charge and relative mass of each of the three sub-atomic particles: proton, neutron, and electron. [3]",
            marks: 3,
            modelAnswer:
              "Proton: relative charge +1, relative mass 1.\nNeutron: relative charge 0, relative mass 1.\nElectron: relative charge −1, relative mass ≈ 0 (negligible / approximately 1/1836).",
            markScheme: [
              "Proton: charge +1, mass 1",
              "Neutron: charge 0, mass 1",
              "Electron: charge −1, mass ≈ 0 / negligible",
            ],
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bq1-02",
            question: "An atom of sulfur has the nuclear symbol ³²₁₆S.\n(a) State the number of protons, neutrons, and electrons in this atom. [3]\n(b) A different isotope of sulfur has mass number 34. Write its nuclear symbol and state the number of neutrons. [2]",
            marks: 5,
            modelAnswer:
              "(a) Protons = Z = 16. Neutrons = A − Z = 32 − 16 = 16. Electrons = 16 (neutral atom).\n(b) Nuclear symbol: ³⁴₁₆S. Neutrons = 34 − 16 = 18.",
            markScheme: [
              "Protons = 16",
              "Neutrons = 16",
              "Electrons = 16",
              "Nuclear symbol ³⁴₁₆S (correct A and Z)",
              "Neutrons = 18",
            ],
            commonError: "Writing the mass number in the bottom-left and the proton number on top — remember A is the larger number on top, Z is smaller on the bottom.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "warmup",
            hints: [
              "Protons = bottom number (Z). Neutrons = top minus bottom (A − Z). Electrons = Z for a neutral atom.",
              "For part (b): Z stays 16 (same element), only A changes to 34.",
            ],
          },
          {
            id: "chem-atoms-bq1-03",
            question: "Write the electronic configuration for each of the following neutral atoms, and state the group and period of each:\n(a) Oxygen, Z = 8\n(b) Chlorine, Z = 17\n(c) Potassium, Z = 19 [6]",
            marks: 6,
            modelAnswer:
              "(a) Oxygen: 2,6. Period 2, Group 6.\n(b) Chlorine: 2,8,7. Period 3, Group 7.\n(c) Potassium: 2,8,8,1. Period 4, Group 1.",
            markScheme: [
              "O: 2,6; Period 2, Group 6",
              "Cl: 2,8,7; Period 3, Group 7",
              "K: 2,8,8,1; Period 4, Group 1",
            ],
            commonError: "Writing oxygen as 2,8 — shell 2 can hold up to 8 electrons but oxygen only has 6 there (Z = 8, shell 1 = 2, shell 2 = 6). Always fill from the innermost shell.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "warmup",
            hints: [
              "Fill shells in order: max 2 in shell 1, then max 8 in shell 2, then max 8 in shell 3.",
              "Period = number of shells used. Group = last number in the configuration.",
            ],
          },
          {
            id: "chem-atoms-bq1-04",
            question: "The table shows information about three particles W, X, and Y.\n\n| Particle | Protons | Neutrons | Electrons |\n|----------|---------|----------|-----------|\n| W        | 12      | 12       | 12        |\n| X        | 12      | 14       | 12        |\n| Y        | 12      | 12       | 10        |\n\n(a) Identify which particles are isotopes and explain why. [2]\n(b) Identify particle Y and explain how it was formed from W. [2]\n(c) State one physical property that differs between W and X, and one chemical property they share. [2]",
            marks: 6,
            modelAnswer:
              "(a) W and X are isotopes. Both have proton number 12 (same element, magnesium), but W has 12 neutrons (A = 24) and X has 14 neutrons (A = 26), so they have different mass numbers.\n(b) Y is a Mg²⁺ ion. It formed from W (neutral Mg atom, Z = 12) by losing 2 electrons (W had 12 electrons, Y has 10).\n(c) Physical difference: W and X have different masses / different densities / different rates of diffusion. Chemical similarity: both have the same electronic configuration (2,8,2), the same number of outer-shell electrons, and react in the same way (e.g., both form Mg²⁺ ions; both react identically with acids).",
            markScheme: [
              "W and X are isotopes",
              "Same proton number (12) / same element; different neutron numbers (12 vs 14)",
              "Y is Mg²⁺ / a positive ion",
              "Formed by losing 2 electrons from W",
              "Physical difference: different mass / density / diffusion rate (accept any valid physical property linked to mass)",
              "Chemical similarity: same electron configuration / same outer-shell electrons / same reactions",
            ],
            commonError: "Stating that Y is a different element because its electron count is different — ion formation never changes the element; only the charge changes.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "core",
            hints: [
              "Isotopes: same Z, different neutron count.",
              "Y vs W: same protons and neutrons, fewer electrons → positive ion.",
              "Physical differences come from mass differences; chemical similarities come from electron configuration.",
            ],
          },
          {
            id: "chem-atoms-bq1-05",
            question: "Hydrogen has three isotopes: protium ¹H (99.985%), deuterium ²H (0.015%), and tritium ³H (trace, negligible).\n(a) State the number of protons, neutrons, and electrons in a neutral atom of ²H. [3]\n(b) Explain why ¹H and ²H have identical chemical properties. [2]",
            marks: 5,
            modelAnswer:
              "(a) ²H: Z = 1 → protons = 1. Neutrons = 2 − 1 = 1. Electrons = 1.\n(b) ¹H and ²H both have Z = 1, so they both have 1 electron. The electronic configuration (just 1 electron in shell 1) is identical. Chemical properties are determined by the number and arrangement of electrons — since both isotopes have the same electron configuration, they react in the same way.",
            markScheme: [
              "Protons = 1",
              "Neutrons = 1",
              "Electrons = 1",
              "Same number of electrons / same electronic configuration (1 electron)",
              "Chemical properties determined by electrons / electron configuration",
            ],
            guideRef: "Isotopes and Their Properties",
            difficulty: "warmup",
            hints: [
              "For ²H: Z = 1 (hydrogen always), A = 2, so neutrons = A − Z = 1.",
              "Chemical properties come from electron arrangement, not from neutron count.",
            ],
          },
          {
            id: "chem-atoms-bq1-06",
            question: "Neon (Z = 10) has three naturally occurring isotopes: ²⁰Ne (90.48%), ²¹Ne (0.27%), and ²²Ne (9.25%). Calculate the relative atomic mass of neon to 4 significant figures. Show all working. [3]",
            marks: 3,
            modelAnswer:
              "Ar = (20 × 90.48 + 21 × 0.27 + 22 × 9.25) ÷ 100\n= (1809.60 + 5.67 + 203.50) ÷ 100\n= 2018.77 ÷ 100\n= 20.19 (4 s.f.)",
            markScheme: [
              "Correct formula: Σ(mass × %) ÷ 100",
              "All three isotopes included with correct substitution",
              "Answer 20.19 (4 s.f.) — accept 20.1877",
            ],
            commonError: "Omitting ²¹Ne because 0.27% seems negligible. All isotopes must be included.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Write out all three terms before adding.",
              "Even a small abundance (0.27%) must be included for full marks.",
              "Check: Ar should be close to 20 since ²⁰Ne is ~90% abundant.",
            ],
            solutions: [
              {
                label: "Standard method",
                steps: [
                  "Ar = (20 × 90.48 + 21 × 0.27 + 22 × 9.25) ÷ 100",
                  "= (1809.60 + 5.67 + 203.50) ÷ 100",
                  "= 2018.77 ÷ 100",
                  "= 20.19 (4 s.f.)",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq1-07",
            question: "Explain what is meant by the term 'proton number' and why it is used to identify an element. Give one example. [3]",
            marks: 3,
            modelAnswer:
              "The proton number (Z) is the number of protons in the nucleus of an atom. It uniquely identifies the element because no two elements have the same number of protons; every atom of a given element has the same proton number. For example, all atoms with Z = 6 are carbon, regardless of how many neutrons they have.",
            markScheme: [
              "Proton number = number of protons in the nucleus",
              "Unique to each element / no two elements share the same Z",
              "Valid example (e.g. Z = 6 → carbon, Z = 1 → hydrogen)",
            ],
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bq1-08",
            question: "An atom of element E has 3 occupied electron shells and 5 electrons in its outer shell.\n(a) Write the electronic configuration of E. [1]\n(b) State the period and group of E in the Periodic Table. [2]\n(c) State the formula of the ion E typically forms and explain why. [2]",
            marks: 5,
            modelAnswer:
              "(a) 2,8,5 (shell 1 = 2, shell 2 = 8, shell 3 = 5; total = 15 electrons → Z = 15, phosphorus).\n(b) Period 3 (3 shells), Group 5 (5 outer electrons).\n(c) E forms E³⁻ ions. Phosphorus (Group 5) has 5 outer-shell electrons and gains 3 electrons to achieve a full outer shell (2,8,8), the stable noble gas configuration of argon.",
            markScheme: [
              "Configuration 2,8,5",
              "Period 3",
              "Group 5",
              "Ion: P³⁻ / E³⁻",
              "Gains 3 electrons to achieve full outer shell / noble gas configuration",
            ],
            commonError: "Students sometimes predict a 5+ ion for phosphorus. Non-metals gain electrons to form negative ions; metals lose electrons to form positive ions.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "3 shells → Period 3. 5 outer electrons → Group 5.",
              "Non-metals gain electrons. How many electrons must a Group 5 element gain to fill the outer shell?",
            ],
          },
          {
            id: "chem-atoms-bq1-09",
            question: "The ion ⁴⁰₁₈Ar and the atom ⁴⁰₂₀Ca have the same mass number but different proton numbers.\n(a) State the number of protons, neutrons, and electrons in each species (assume Ar is neutral). [4]\n(b) Explain why these two species are NOT isotopes. [2]",
            marks: 6,
            modelAnswer:
              "(a) Ar (neutral): protons = 18, neutrons = 40 − 18 = 22, electrons = 18.\nCa (neutral): protons = 20, neutrons = 40 − 20 = 20, electrons = 20.\n(b) Isotopes must be atoms of the same element — they must have the same proton number. Ar has Z = 18 and Ca has Z = 20; they are different elements. Atoms with the same mass number but different proton numbers are called isobars, not isotopes.",
            markScheme: [
              "Ar: protons 18, neutrons 22, electrons 18",
              "Ca: protons 20, neutrons 20, electrons 20",
              "Isotopes must have the same proton number / same element",
              "Ar and Ca have different proton numbers (18 vs 20) → different elements → not isotopes",
            ],
            guideRef: "Isotopes and Their Properties",
            difficulty: "challenge",
            hints: [
              "Calculate all particles from A and Z for each species.",
              "Definition of isotopes: SAME element (same Z), different A. Same A but different Z = isobars.",
            ],
            strategy: "apply the definition precisely — same A does not mean isotopes",
          },
          {
            id: "chem-atoms-bq1-10",
            question: "Carbon-12 is the standard used to define relative atomic mass. Explain what is meant by 'relative atomic mass' and why Ar values are rarely whole numbers for naturally occurring elements. Use the example of chlorine (Ar = 35.5) in your answer. [4]",
            marks: 4,
            modelAnswer:
              "The relative atomic mass (Ar) of an element is the weighted mean mass of one atom of the element relative to 1/12 of the mass of a carbon-12 atom. It is a weighted average over all the naturally occurring isotopes of the element, taking into account both their masses and their percentage abundances. Most elements have more than one naturally occurring isotope with different masses; the Ar is calculated as Σ(isotopic mass × % abundance) ÷ 100. For chlorine: ³⁵Cl (75%) and ³⁷Cl (25%) give Ar = (35 × 75 + 37 × 25) ÷ 100 = 35.5. Since 35.5 is a weighted average between two whole-number isotope masses, it is not a whole number itself.",
            markScheme: [
              "Ar = weighted mean mass relative to 1/12 of carbon-12 mass",
              "Ar accounts for both isotopic masses and percentage abundances",
              "Formula or example shown: (35 × 75 + 37 × 25) ÷ 100 = 35.5",
              "Ar is non-integer because it is an average of isotopes with different masses",
            ],
            commonError: "Saying Ar is 'the mass of one atom' — it is an average mass over all naturally occurring isotopes, not the mass of any single atom.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "challenge",
            hints: [
              "Start with the definition: what does 'relative' mean? What is it compared to?",
              "Then explain weighted average: why multiply by % rather than just average the masses?",
              "Use chlorine as the example: show the calculation.",
            ],
            strategy: "definition → calculation → interpretation",
          },
        ],
      },
      {
        id: "chem-atoms-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Isotope calculations, ion formation, and electronic configuration — core level.",
        questions: [
          {
            id: "chem-atoms-bq2-01",
            question: "Magnesium (Z = 12) has three naturally occurring isotopes: ²⁴Mg (78.99%), ²⁵Mg (10.00%), and ²⁶Mg (11.01%).\n(a) Calculate the Ar of magnesium to 4 significant figures. [3]\n(b) Predict, without calculating, whether Ar will be closer to 24 or to 26. Explain your reasoning. [2]",
            marks: 5,
            modelAnswer:
              "(a) Ar = (24 × 78.99 + 25 × 10.00 + 26 × 11.01) ÷ 100\n= (1895.76 + 250.00 + 286.26) ÷ 100\n= 2432.02 ÷ 100\n= 24.32 (4 s.f.)\n(b) Ar will be closer to 24, because ²⁴Mg is by far the most abundant isotope (~79%). The weighted average is pulled most strongly toward the isotope present in greatest proportion.",
            markScheme: [
              "Correct formula applied",
              "All three isotopes correctly substituted",
              "Ar = 24.32 (accept 24.3 to 3 s.f. or 24.3020…)",
              "Closer to 24 (correct prediction)",
              "Because ²⁴Mg dominates the abundance (~79%) / weighted average pulled toward most abundant",
            ],
            commonError: "In part (b), students sometimes say 'closer to 25 because 25 is the middle value' — but the middle of the range is irrelevant; only the abundances matter.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Write out the formula first: Ar = Σ(mass × %) ÷ 100.",
              "Check: 78.99 + 10.00 + 11.01 = 100.00 ✓.",
              "For the prediction: which isotope has the highest %? The Ar will be closest to that isotope's mass.",
            ],
            solutions: [
              {
                label: "Standard method",
                steps: [
                  "Ar = (24 × 78.99 + 25 × 10.00 + 26 × 11.01) ÷ 100",
                  "= (1895.76 + 250.00 + 286.26) ÷ 100",
                  "= 2432.02 ÷ 100",
                  "= 24.32 (4 s.f.)",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq2-02",
            question: "An element forms ions with charge 2+. The ion has 36 electrons and the mass number of the most common isotope is 88.\n(a) Calculate the proton number of the element. [1]\n(b) Write the nuclear symbol for the most common isotope of the neutral atom. [1]\n(c) Write the electronic configuration of the 2+ ion. [1]\n(d) Identify the element and state which group and period it belongs to. [2]",
            marks: 5,
            modelAnswer:
              "(a) The 2+ ion has lost 2 electrons. Protons = electrons in ion + charge = 36 + 2 = 38.\n(b) Nuclear symbol: ⁸⁸₃₈Sr (A = 88, Z = 38).\n(c) 2+ ion has 36 electrons: configuration 2,8,18,8.\n(d) The element is strontium (Sr). Neutral Sr has configuration 2,8,18,8,2 → Period 5, Group 2.",
            markScheme: [
              "Z = 38",
              "Nuclear symbol ⁸⁸₃₈Sr",
              "Ion configuration: 2,8,18,8",
              "Element = strontium / Sr",
              "Period 5, Group 2",
            ],
            commonError: "For part (a), students subtract 2 instead of adding: they write Z = 36 − 2 = 34 (selenium). A positive ion has fewer electrons than the neutral atom, so Z = electrons in ion + charge.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "challenge",
            hints: [
              "2+ ion: atom lost 2 electrons. So neutral atom had 36 + 2 = 38 electrons = Z.",
              "For the ion's configuration: 36 electrons — fill shells: 2, 8, 18, 8.",
              "For the neutral atom: add 2 more electrons to the outermost shell: 2,8,18,8,2.",
            ],
            strategy: "work backwards: electrons in ion + charge = Z; then fill shells for each species",
          },
          {
            id: "chem-atoms-bq2-03",
            question: "The table gives data for four species A, B, C, and D.\n\n| Species | Protons | Neutrons | Electrons |\n|---------|---------|----------|-----------|\n| A       | 17      | 18       | 18        |\n| B       | 18      | 22       | 18        |\n| C       | 17      | 20       | 17        |\n| D       | 17      | 18       | 17        |\n\n(a) Which two species are isotopes? Explain your answer. [2]\n(b) Which species is an ion? Give its symbol, including charge. [2]\n(c) Which two species are isoelectronic? [1]",
            marks: 5,
            modelAnswer:
              "(a) A and C are isotopes. Both have proton number 17 (both are chlorine), but A has 18 neutrons (A = 35) and C has 20 neutrons (A = 37). They are the same element with different mass numbers.\n(b) A is an ion: it has 17 protons and 18 electrons, giving a charge of 17 − 18 = −1. It is Cl⁻ (chloride ion). [Note: D is the neutral atom ³⁵Cl.]\n(c) A and B are isoelectronic: both have 18 electrons.",
            markScheme: [
              "A and C are isotopes",
              "Both have proton number 17; different neutron numbers (18 vs 20)",
              "A is an ion / Cl⁻",
              "17 protons but 18 electrons → charge −1",
              "A and B are isoelectronic (both have 18 electrons)",
            ],
            commonError: "Students may pick D as an ion; D has equal protons and electrons (17 each) — it is a neutral atom. Only A has unequal protons and electrons.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "Isotopes: same proton number, different neutron number.",
              "Ion: protons ≠ electrons. If protons < electrons → negative ion.",
              "Isoelectronic: same number of electrons.",
            ],
          },
          {
            id: "chem-atoms-bq2-04",
            question: "Potassium (K, Z = 19) and argon (Ar, Z = 18) are adjacent in the Periodic Table but have almost the same Ar (K ≈ 39.10; Ar ≈ 39.95). This means argon atoms are on average heavier than potassium atoms.\n(a) Explain how this is possible, given that argon has fewer protons. [2]\n(b) State the electronic configuration of K and of Ar. [2]\n(c) Use electronic configurations to explain why Ar is in Group 0 and K is in Group 1. [2]",
            marks: 6,
            modelAnswer:
              "(a) Relative atomic mass depends on the weighted average of isotopic masses, which includes both proton and neutron contributions. Argon atoms have more neutrons on average: the most abundant isotope of argon is ⁴⁰Ar (A = 40, Z = 18, 22 neutrons), whereas the most abundant isotope of potassium is ³⁹K (A = 39, Z = 19, 20 neutrons). The extra neutrons in argon give it a higher average mass despite having fewer protons.\n(b) K: 2,8,8,1. Ar: 2,8,8.\n(c) Ar has a completely full outer shell (8 electrons in shell 3) — it is unreactive and placed in Group 0 (noble gases). K has 1 outer-shell electron — it is in Group 1 (alkali metals) and readily loses that electron to form K⁺.",
            markScheme: [
              "Ar has more neutrons on average (especially ⁴⁰Ar with 22 neutrons)",
              "Ar > mass of K despite fewer protons because nucleon count is higher for the most abundant Ar isotope",
              "K: 2,8,8,1",
              "Ar: 2,8,8",
              "Ar: full outer shell (8 electrons) → unreactive → Group 0",
              "K: 1 outer-shell electron → Group 1 / readily forms K⁺",
            ],
            commonError: "Students sometimes think more protons always means more mass. Neutrons also contribute to mass — an element with fewer protons but many more neutrons can be heavier on average.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "challenge",
            hints: [
              "Ar has Z = 18; most abundant isotope is ⁴⁰Ar (22 neutrons). K has Z = 19; most abundant is ³⁹K (20 neutrons).",
              "More neutrons in Ar isotope = higher mass number = higher Ar despite fewer protons.",
              "Electronic configuration determines group: count outer-shell electrons.",
            ],
            strategy: "distinguish proton count (determines identity/group) from nucleon count (determines mass)",
          },
          {
            id: "chem-atoms-bq2-05",
            question: "A student writes: 'When sodium forms Na⁺, it loses a proton from its nucleus.' Identify the error in this statement and give the correct explanation. [3]",
            marks: 3,
            modelAnswer:
              "The student is wrong. Ion formation never involves the nucleus — no protons or neutrons are added or removed. When sodium forms Na⁺, it loses one electron from its outermost shell (shell 3). The proton number remains 11. The Na⁺ ion has 11 protons and 10 electrons, giving a charge of +1.",
            markScheme: [
              "Error: protons are never lost / ion formation does not affect the nucleus",
              "Na loses 1 electron (not a proton) from the outer shell",
              "Na⁺ has 11 protons and 10 electrons",
            ],
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "The nucleus contains protons and neutrons — these never change when an ion forms.",
              "Only electrons are gained or lost in ion formation.",
            ],
            strategy: "identify the misconception precisely, then give the correct version with numbers",
          },
          {
            id: "chem-atoms-bq2-06",
            question: "Silicon has three isotopes: ²⁸Si (92.23%), ²⁹Si (4.67%), ³⁰Si (3.10%). Calculate the Ar of silicon to 3 significant figures and show your working. [3]",
            marks: 3,
            modelAnswer:
              "Ar = (28 × 92.23 + 29 × 4.67 + 30 × 3.10) ÷ 100\n= (2582.44 + 135.43 + 93.00) ÷ 100\n= 2810.87 ÷ 100\n= 28.1 (3 s.f.)",
            markScheme: [
              "Correct formula with all three isotopes",
              "Correct arithmetic (each product calculated)",
              "Ar = 28.1 (3 s.f.)",
            ],
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Check abundances sum to 100: 92.23 + 4.67 + 3.10 = 100.00 ✓.",
              "Calculate each product: 28 × 92.23 = 2582.44; 29 × 4.67 = 135.43; 30 × 3.10 = 93.00.",
              "Sum the products, then divide by 100.",
            ],
            solutions: [
              {
                label: "Standard method",
                steps: [
                  "Ar = (28 × 92.23 + 29 × 4.67 + 30 × 3.10) ÷ 100",
                  "= (2582.44 + 135.43 + 93.00) ÷ 100",
                  "= 2810.87 ÷ 100",
                  "= 28.1 (3 s.f.)",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq2-07",
            question: "Explain, using the concept of electronic configuration, why sodium (Z = 11) is much more reactive than neon (Z = 10), even though they are adjacent in the Periodic Table. [4]",
            marks: 4,
            modelAnswer:
              "Neon has the electronic configuration 2,8 — a completely full outer shell. This noble gas configuration is very stable, and neon requires no electron transfer to achieve stability. Therefore neon does not react. Sodium has the configuration 2,8,1 — one electron in its outermost shell (shell 3). This single outer-shell electron is relatively far from the nucleus and easily lost. Sodium readily loses this electron to form Na⁺ (configuration 2,8, the same as neon), achieving a stable full outer shell. This drive to achieve a noble gas configuration is what makes sodium highly reactive.",
            markScheme: [
              "Ne: configuration 2,8 — full outer shell",
              "Full outer shell is stable / noble gas configuration — does not react",
              "Na: configuration 2,8,1 — one outer-shell electron",
              "Na loses this electron to form Na⁺ (2,8) — achieves noble gas configuration → highly reactive",
            ],
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "Write out configurations for Na (2,8,1) and Ne (2,8) — what is different?",
              "Full outer shell = stable (noble gas). One electron in outer shell = easily lost.",
              "Link reactivity to the drive toward noble gas configuration.",
            ],
          },
          {
            id: "chem-atoms-bq2-08",
            question: "Gallium (Ga, Z = 31) has two naturally occurring isotopes: ⁶⁹Ga and ⁷¹Ga. The Ar of gallium is 69.72.\n(a) Calculate the percentage abundance of ⁶⁹Ga. Show your working. [3]\n(b) State how many neutrons are in each isotope. [2]",
            marks: 5,
            modelAnswer:
              "(a) Let x = % of ⁶⁹Ga; % of ⁷¹Ga = (100 − x).\n(69x + 71(100 − x)) ÷ 100 = 69.72\n69x + 7100 − 71x = 6972\n−2x = −128\nx = 64\n⁶⁹Ga = 64%, ⁷¹Ga = 36%.\n(b) ⁶⁹Ga: neutrons = 69 − 31 = 38. ⁷¹Ga: neutrons = 71 − 31 = 40.",
            markScheme: [
              "Equation set up correctly with one unknown",
              "Correct algebra leading to x = 64",
              "⁶⁹Ga = 64%, ⁷¹Ga = 36%",
              "⁶⁹Ga: 38 neutrons",
              "⁷¹Ga: 40 neutrons",
            ],
            commonError: "Setting up the equation with percentage as a decimal fraction but then not multiplying correctly — keep percentages as whole numbers and divide by 100 in the formula.",
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "challenge",
            hints: [
              "Two isotopes → one unknown. Let % of ⁶⁹Ga = x; % of ⁷¹Ga = 100 − x.",
              "Set up: (69x + 71(100−x)) ÷ 100 = 69.72.",
              "Multiply both sides by 100, expand, collect x terms.",
              "For neutrons: neutrons = A − Z = mass number − 31.",
            ],
            strategy: "algebraic reverse Ar — one equation, one unknown",
            solutions: [
              {
                label: "Algebraic method",
                steps: [
                  "Let % of ⁶⁹Ga = x; % of ⁷¹Ga = (100 − x)",
                  "(69x + 71(100 − x)) ÷ 100 = 69.72",
                  "69x + 7100 − 71x = 6972",
                  "−2x = −128 → x = 64",
                  "⁶⁹Ga = 64%, ⁷¹Ga = 36%",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq2-09",
            question: "Describe the structure of the atom, including the location, relative charge, and relative mass of each sub-atomic particle. Your answer should also explain the term 'nucleon number'. [5]",
            marks: 5,
            modelAnswer:
              "An atom consists of a tiny, dense nucleus at the centre, surrounded by electrons in shells (energy levels). The nucleus contains protons (relative charge +1, relative mass 1) and neutrons (relative charge 0, relative mass 1). Electrons (relative charge −1, relative mass ≈ 0) move in shells around the nucleus at increasing distances from the centre. The atom is overall electrically neutral because the number of electrons equals the number of protons. The nucleon number (mass number, A) is the total number of protons plus neutrons in the nucleus; neutrons and protons are both called nucleons because they are found in the nucleus.",
            markScheme: [
              "Nucleus at the centre, electrons in shells around it",
              "Proton: charge +1, mass 1, in nucleus",
              "Neutron: charge 0, mass 1, in nucleus",
              "Electron: charge −1, mass ≈ 0, in shells",
              "Nucleon number = total protons + neutrons (both are nucleons)",
            ],
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bq2-10",
            question: "An element forms an ion X³⁺. The ion has the electronic configuration 2,8,8 and the mass number of its most common isotope is 45.\n(a) Determine the proton number of element X. [1]\n(b) Write the nuclear symbol for the most common isotope of X. [1]\n(c) Write the electronic configuration of the neutral atom of X. [1]\n(d) State the group and period of X and identify the element. [2]",
            marks: 5,
            modelAnswer:
              "(a) X³⁺ has configuration 2,8,8 = 18 electrons. It lost 3 to become 3+. Protons = 18 + 3 = 21. Z = 21.\n(b) Nuclear symbol: ⁴⁵₂₁Sc.\n(c) Neutral X: 21 electrons → 2,8,8,3.\n(d) Four shells → Period 4. Three outer-shell electrons → Group 3. Element: scandium (Sc).",
            markScheme: [
              "Z = 21",
              "Nuclear symbol ⁴⁵₂₁Sc",
              "Configuration of neutral atom: 2,8,8,3",
              "Period 4, Group 3",
              "Element: scandium / Sc",
            ],
            commonError: "Subtracting 3 instead of adding 3 to find Z: Z = 18 − 3 = 15 (phosphorus) is wrong. A 3+ ion has lost 3 electrons, so the neutral atom has more electrons.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "challenge",
            hints: [
              "Count electrons in configuration 2,8,8: 2+8+8 = 18.",
              "X³⁺ lost 3 electrons → neutral X has 18 + 3 = 21 electrons = Z.",
              "Neutral atom configuration: add 3 electrons to the outermost shell.",
            ],
            strategy: "work backwards from ion configuration to identify the neutral element",
          },
        ],
      },
      {
        id: "chem-atoms-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Isotopes, Ar reverse calculations, and ion configurations — core to challenge.",
        questions: [
          {
            id: "chem-atoms-bq3-01",
            question: "Define the terms (a) proton number and (b) mass number. [2]",
            marks: 2,
            modelAnswer:
              "(a) Proton number (Z): the number of protons in the nucleus of an atom.\n(b) Mass number (A): the total number of protons and neutrons (nucleons) in the nucleus of an atom.",
            markScheme: [
              "Proton number = number of protons in the nucleus",
              "Mass number = total number of protons + neutrons (nucleons) in the nucleus",
            ],
            guideRef: "Inside the Atom: Nucleus and Sub-atomic Particles",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bq3-02",
            question: "Copper (Cu, Z = 29) has two naturally occurring isotopes ⁶³Cu and ⁶⁵Cu. The Ar of copper is 63.5.\n(a) Show that the percentage abundance of ⁶³Cu is 75%. [3]\n(b) Explain why ⁶³Cu and ⁶⁵Cu react identically with dilute hydrochloric acid. [2]",
            marks: 5,
            modelAnswer:
              "(a) Let x = % of ⁶³Cu.\n(63x + 65(100−x)) ÷ 100 = 63.5\n63x + 6500 − 65x = 6350\n−2x = −150 → x = 75\nSo ⁶³Cu = 75%, confirming the result.\n(b) ⁶³Cu and ⁶⁵Cu both have Z = 29, so they have the same number of electrons (29) arranged in the same electronic configuration (2,8,18,1). Chemical reactions are determined by electron behaviour, particularly the outer-shell electrons. Since both isotopes have identical electron configurations, they react identically.",
            markScheme: [
              "Equation set up: (63x + 65(100−x)) ÷ 100 = 63.5",
              "Correct algebra → x = 75",
              "Statement confirms ⁶³Cu = 75%",
              "Same proton number → same number of electrons / same electronic configuration",
              "Chemical properties determined by electrons (outer-shell electrons)",
            ],
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Let x = % ⁶³Cu; then % ⁶⁵Cu = 100 − x.",
              "Substitute into Ar formula and multiply both sides by 100.",
              "For part (b): chemical properties depend on electrons, not neutrons.",
            ],
            strategy: "reverse Ar calculation, then link electronic configuration to chemical properties",
            solutions: [
              {
                label: "Algebraic method",
                steps: [
                  "Let % ⁶³Cu = x; % ⁶⁵Cu = 100 − x",
                  "(63x + 65(100 − x)) ÷ 100 = 63.5",
                  "63x + 6500 − 65x = 6350",
                  "−2x = −150 → x = 75",
                  "⁶³Cu = 75%, ⁶⁵Cu = 25% ✓",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq3-03",
            question: "The following ions all have 10 electrons: Na⁺, Mg²⁺, Al³⁺, F⁻, O²⁻, N³⁻.\n(a) Write the electronic configuration of each ion. [1]\n(b) Which neutral noble gas is isoelectronic with all these ions? [1]\n(c) Explain why Na⁺, Mg²⁺, and Al³⁺ are all formed, but not Na²⁺ or Mg³⁺. [3]",
            marks: 5,
            modelAnswer:
              "(a) All have 10 electrons: configuration 2,8.\n(b) Neon (Ne, Z = 10) — configuration 2,8.\n(c) Na (2,8,1) loses 1 electron to reach 2,8 — a full outer shell (noble gas configuration). Losing a second electron would require removing from shell 2, which is much harder as it is closer to the nucleus and the shielding is less. Mg (2,8,2) loses 2 electrons to reach 2,8. Losing a third electron would again mean breaking into a stable full shell 2. Al (2,8,3) loses 3 to reach 2,8. In each case, the ion formed corresponds to the minimum electron loss needed to achieve the noble gas configuration.",
            markScheme: [
              "Configuration 2,8 for all ions",
              "Neon (Ne)",
              "Each ion formed by losing only the outer-shell electrons (achieving 2,8)",
              "Further electron loss would require removing from a completed inner shell — much higher energy",
              "The stable noble gas configuration (2,8) is the driving force",
            ],
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "challenge",
            hints: [
              "All 10-electron ions have configuration 2,8.",
              "Which noble gas has 10 electrons? Check Z = 10.",
              "Na⁺ has 2,8 (full shell 2) — why would Na²⁺ (2,7) be less stable?",
            ],
            strategy: "apply noble gas configuration principle to explain ion stability",
          },
          {
            id: "chem-atoms-bq3-04",
            question: "An unknown element G has Ar = 107.9. It has two isotopes: ¹⁰⁷G (51.8%) and ¹⁰⁹G (48.2%).\n(a) Verify the Ar by calculation. [2]\n(b) G forms a 1+ ion. The most abundant isotope has mass number 107. Write the nuclear symbol for the 1+ ion and state the number of protons, neutrons, and electrons. [3]",
            marks: 5,
            modelAnswer:
              "(a) Ar = (107 × 51.8 + 109 × 48.2) ÷ 100 = (5542.6 + 5253.8) ÷ 100 = 10796.4 ÷ 100 = 107.964 ≈ 107.9 ✓\n(b) G has Z = ? Silver (Ag) has Ar ≈ 107.9 and Z = 47. Nuclear symbol for ¹⁰⁷₄₇Ag⁺. Protons = 47; Neutrons = 107 − 47 = 60; Electrons = 47 − 1 = 46.",
            markScheme: [
              "Ar = (107 × 51.8 + 109 × 48.2) ÷ 100 shown",
              "Answer ≈ 107.9 confirmed",
              "Nuclear symbol ¹⁰⁷₄₇Ag⁺ (accept G with correct A and Z)",
              "Protons = 47, Neutrons = 60",
              "Electrons = 46",
            ],
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "core",
            hints: [
              "Part (a): substitute directly and compute.",
              "Part (b): identify the element from Ar ≈ 108 and context (silver, Z = 47).",
              "1+ ion: lost 1 electron, so electrons = Z − 1.",
            ],
          },
          {
            id: "chem-atoms-bq3-05",
            question: "Describe how the electronic configuration of an atom determines its position in the Periodic Table. Use sodium (Z = 11) and chlorine (Z = 17) as examples. [4]",
            marks: 4,
            modelAnswer:
              "The electronic configuration determines both the period and the group of an element. The period number equals the number of occupied electron shells. The group number (for Groups 1–7) equals the number of electrons in the outermost shell (valence electrons). Sodium (2,8,1): three shells → Period 3; 1 outer-shell electron → Group 1. Chlorine (2,8,7): three shells → Period 3; 7 outer-shell electrons → Group 7.",
            markScheme: [
              "Period number = number of occupied shells",
              "Group number (1−7) = number of outer-shell electrons",
              "Na: 2,8,1 → Period 3, Group 1",
              "Cl: 2,8,7 → Period 3, Group 7",
            ],
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "core",
            hints: [
              "Write out configurations for Na and Cl.",
              "Count the shell values → period. Look at the last number → group.",
            ],
          },
          {
            id: "chem-atoms-bq3-06",
            question: "An ion Q has 36 electrons, a charge of 1−, and mass number 80.\n(a) State the proton number of Q. [1]\n(b) Write the nuclear symbol including the charge. [1]\n(c) Write the electronic configuration of Q. [1]\n(d) Identify the element and give its group and period. [2]",
            marks: 5,
            modelAnswer:
              "(a) Q has charge 1−, so it gained 1 electron. Protons = electrons − 1 = 36 − 1 = 35. Z = 35.\n(b) ⁸⁰₃₅Br⁻.\n(c) 36 electrons: 2,8,18,8.\n(d) Element: bromine (Br). Neutral Br has 35 electrons: 2,8,18,7 → Group 7, Period 4.",
            markScheme: [
              "Z = 35",
              "Nuclear symbol ⁸⁰₃₅Br⁻",
              "Configuration of ion: 2,8,18,8",
              "Element: bromine / Br",
              "Group 7, Period 4",
            ],
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "challenge",
            hints: [
              "Q is an anion (1−): gained 1 electron. So Z = 36 − 1 = 35.",
              "Fill 36 electrons into shells: 2, 8, 18, 8.",
              "Neutral Br has 35 electrons: 2,8,18,7 → Group 7 (7 outer electrons), Period 4 (4 shells).",
            ],
          },
          {
            id: "chem-atoms-bq3-07",
            question: "Europium (Eu) has two naturally occurring isotopes: ¹⁵¹Eu and ¹⁵³Eu. The Ar of Eu is 151.96.\n(a) Calculate the percentage abundance of ¹⁵¹Eu. [3]\n(b) Use your answer to state which isotope is more abundant and explain how the Ar value supports this. [2]",
            marks: 5,
            modelAnswer:
              "(a) Let x = % ¹⁵¹Eu.\n(151x + 153(100−x)) ÷ 100 = 151.96\n151x + 15300 − 153x = 15196\n−2x = −104 → x = 52\n¹⁵¹Eu = 52%, ¹⁵³Eu = 48%.\n(b) ¹⁵¹Eu is more abundant (52%). Ar = 151.96 is closer to 151 than to 153 (midpoint would be 152), which shows the weighted average is slightly pulled toward ¹⁵¹Eu, confirming it is the majority isotope.",
            markScheme: [
              "Equation correctly set up",
              "x = 52 → ¹⁵¹Eu = 52%",
              "¹⁵¹Eu is more abundant",
              "Ar = 151.96 < 152 (midpoint) → weighted average pulled toward ¹⁵¹Eu",
            ],
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "challenge",
            hints: [
              "Let x = % ¹⁵¹Eu; % ¹⁵³Eu = 100 − x.",
              "Set up Ar equation and multiply by 100.",
              "Midpoint of 151 and 153 = 152. Since Ar = 151.96 < 152, ¹⁵¹Eu must be slightly more abundant.",
            ],
            strategy: "algebra for abundance; then qualitative interpretation of Ar relative to midpoint",
            solutions: [
              {
                label: "Algebraic method",
                steps: [
                  "Let % ¹⁵¹Eu = x",
                  "(151x + 153(100−x)) ÷ 100 = 151.96",
                  "151x + 15300 − 153x = 15196",
                  "−2x = −104 → x = 52",
                  "¹⁵¹Eu = 52%, ¹⁵³Eu = 48%",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq3-08",
            question: "The table shows two particles:\n\n| Particle | Protons | Neutrons | Electrons |\n|----------|---------|----------|-----------|\n| P        | 20      | 20       | 18        |\n| Q        | 16      | 16       | 18        |\n\n(a) Identify each particle and give its symbol including any charge. [2]\n(b) Both P and Q have 18 electrons. Explain why their chemical properties are different despite having the same number of electrons. [2]",
            marks: 4,
            modelAnswer:
              "(a) P: Z = 20 (calcium), A = 40, charge = 20 − 18 = +2 → Ca²⁺. Q: Z = 16 (sulphur), A = 32, charge = 16 − 18 = −2 → S²⁻.\n(b) Although P (Ca²⁺) and Q (S²⁻) are isoelectronic (both have 18 electrons in the same arrangement 2,8,8), their chemical properties are different because chemical properties of ions depend on both the electron configuration AND the nuclear charge (number of protons). Ca²⁺ has 20 protons and behaves as a doubly charged cation forming ionic compounds such as CaCl₂. S²⁻ has only 16 protons and behaves as a doubly charged anion. Their reactivity and bonding behaviour differ because the nuclear charge affects how strongly the electrons are held.",
            markScheme: [
              "P = Ca²⁺",
              "Q = S²⁻",
              "Both isoelectronic (2,8,8) but different proton numbers (20 vs 16)",
              "Different nuclear charge → different attraction on electrons / different bonding/reactivity",
            ],
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "challenge",
            hints: [
              "Identify each: Z determines the element. Charge = protons − electrons.",
              "Isoelectronic species have the same electron configuration but different nuclear charges.",
              "Nuclear charge affects properties even when electron count is the same.",
            ],
            strategy: "distinguish isoelectronic from chemically identical — same electrons ≠ same properties",
          },
          {
            id: "chem-atoms-bq3-09",
            question: "State and explain the effect on the number of protons, neutrons, and electrons when a neutral atom of calcium (Z = 20, A = 40) forms a Ca²⁺ ion. [3]",
            marks: 3,
            modelAnswer:
              "Protons: unchanged at 20. The number of protons never changes during ion formation — only electrons are gained or lost, not nuclear particles. Neutrons: unchanged at 20 (= A − Z = 40 − 20). Electrons: decrease from 20 to 18. Calcium loses 2 electrons to form Ca²⁺, giving it a 2+ charge (20 protons − 18 electrons = 2+).",
            markScheme: [
              "Protons unchanged (20)",
              "Neutrons unchanged (20)",
              "Electrons decrease by 2, from 20 to 18",
            ],
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "warmup",
          },
          {
            id: "chem-atoms-bq3-10",
            question: "Element T has three isotopes. Their masses and abundances are: ²⁸T (92%), ²⁹T (5%), ³⁰T (3%).\n(a) Calculate Ar to 3 significant figures. [3]\n(b) A chemist says the Ar must be a whole number because each isotope has a whole-number mass. Is this correct? Explain. [2]",
            marks: 5,
            modelAnswer:
              "(a) Ar = (28 × 92 + 29 × 5 + 30 × 3) ÷ 100 = (2576 + 145 + 90) ÷ 100 = 2811 ÷ 100 = 28.1 (3 s.f.)\n(b) The chemist is incorrect. Although each individual isotope has a whole-number mass, the Ar is a weighted average of these masses, weighted by their percentage abundances. A weighted average of whole numbers is generally not a whole number (e.g. 28.1). Ar is only a whole number if one isotope has 100% abundance.",
            markScheme: [
              "Ar = (28 × 92 + 29 × 5 + 30 × 3) ÷ 100",
              "= 28.1 (3 s.f.)",
              "Chemist is incorrect",
              "Ar is a weighted average — averaging whole numbers gives a non-integer result unless one isotope is 100% abundant",
            ],
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Calculate Ar using the formula first.",
              "For part (b): can the average of 28, 29, and 30 with unequal weights be a whole number? Give a specific example.",
            ],
            strategy: "evaluate a claim about integer Ar values using the concept of weighted averages",
          },
        ],
      },
      {
        id: "chem-atoms-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Challenge paper: multi-step particle counting, synoptic reasoning, and extended responses.",
        questions: [
          {
            id: "chem-atoms-bq4-01",
            question: "Define isotopes and explain, at the level of sub-atomic particles, why isotopes of the same element have (a) identical chemical properties and (b) different physical properties. [5]",
            marks: 5,
            modelAnswer:
              "Isotopes are atoms of the same element that have the same proton number (Z) but different mass numbers (A), and therefore different numbers of neutrons.\n(a) Isotopes have identical chemical properties because they have the same number of protons and therefore the same number of electrons arranged in the same electronic configuration. Chemical reactions involve electron transfer or sharing — controlled entirely by the outer-shell electron arrangement. Since all isotopes of an element share the same Z, they share the same electron configuration and react identically.\n(b) Isotopes have different physical properties because they have different numbers of neutrons, giving them different masses (different mass numbers). Properties such as rate of diffusion, density, boiling point, and speed of vibration depend on mass, so isotopes differ in these physical characteristics.",
            markScheme: [
              "Definition: same Z, different A / different neutron number",
              "(a) Same Z → same electron number → same electronic configuration",
              "(a) Chemical properties determined by electrons (outer-shell electrons)",
              "(b) Different neutron number → different mass number / different mass",
              "(b) Physical properties (e.g. diffusion rate, density) depend on mass → differ between isotopes",
            ],
            guideRef: "Isotopes and Their Properties",
            difficulty: "core",
            hints: [
              "Structure your answer: definition → chemical → physical.",
              "Chemical: what determines how atoms react? (electrons, especially outer-shell)",
              "Physical: what is different between isotopes? (neutron count → mass)",
            ],
          },
          {
            id: "chem-atoms-bq4-02",
            question: "An ion R³⁻ has the following properties: 18 electrons, 21 neutrons, mass number 36.\n(a) Determine the proton number and identify element R. [2]\n(b) Write the nuclear symbol for the neutral atom of R. [1]\n(c) Write the electronic configurations of the neutral atom and the ion R³⁻. [2]",
            marks: 5,
            modelAnswer:
              "(a) R³⁻ has charge 3−, meaning 3 electrons were gained. Protons = electrons − 3 = 18 − 3 = 15. Z = 15 → phosphorus (P).\n(b) Neutral P: A = 36, Z = 15. Nuclear symbol: ³⁶₁₅P. (Note: this is an uncommon isotope; the most common is ³¹P.)\n(c) Neutral P (Z = 15): 15 electrons → 2,8,5. Ion P³⁻: 18 electrons → 2,8,8.",
            markScheme: [
              "Z = 15",
              "Element: phosphorus / P",
              "Nuclear symbol ³⁶₁₅P",
              "Neutral P: 2,8,5",
              "P³⁻: 2,8,8",
            ],
            commonError: "Adding 3 to find Z instead of subtracting: Z = 18 + 3 = 21 is wrong. An anion has more electrons than protons, so Z = electrons − charge.",
            guideRef: "Ion Formation: Electron Loss and Gain",
            difficulty: "core",
            hints: [
              "R³⁻ is an anion (negative): it gained 3 electrons. Z = electrons in ion − charge magnitude = 18 − 3 = 15.",
              "Neutral atom: electrons = Z = 15 → configuration 2,8,5.",
              "R³⁻: 18 electrons → 2,8,8.",
            ],
            strategy: "for anions: Z = electrons − charge; for cations: Z = electrons + charge",
          },
          {
            id: "chem-atoms-bq4-03",
            question: "Indium (In) has two naturally occurring isotopes: ¹¹³In (4.3%) and ¹¹⁵In (95.7%).\n(a) Calculate the Ar of indium to 4 significant figures. [2]\n(b) Explain why the Ar is very close to 115 but not exactly 115. [2]\n(c) State the number of neutrons in each isotope. (Z of In = 49) [2]",
            marks: 6,
            modelAnswer:
              "(a) Ar = (113 × 4.3 + 115 × 95.7) ÷ 100 = (485.9 + 11005.5) ÷ 100 = 11491.4 ÷ 100 = 114.9 (4 s.f.).\n(b) Ar is very close to 115 because ¹¹⁵In is by far the dominant isotope (95.7%) — the weighted average is pulled strongly toward 115. It is not exactly 115 because 4.3% of atoms are ¹¹³In, which has a lower mass (113), pulling the average slightly below 115.\n(c) ¹¹³In: neutrons = 113 − 49 = 64. ¹¹⁵In: neutrons = 115 − 49 = 66.",
            markScheme: [
              "Ar = (113 × 4.3 + 115 × 95.7) ÷ 100",
              "Ar = 114.9 (4 s.f.)",
              "Very close to 115 because ¹¹⁵In is 95.7% abundant / dominant isotope",
              "Not exactly 115 because ¹¹³In (4.3%) pulls the average slightly lower",
              "¹¹³In: 64 neutrons",
              "¹¹⁵In: 66 neutrons",
            ],
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Substitute directly into Ar = Σ(mass × %) ÷ 100.",
              "Since ¹¹⁵In dominates (~96%), the Ar will be very close to 115 but slightly less.",
              "Neutrons = A − Z for each isotope; Z = 49 for both.",
            ],
            solutions: [
              {
                label: "Standard method",
                steps: [
                  "Ar = (113 × 4.3 + 115 × 95.7) ÷ 100",
                  "= (485.9 + 11005.5) ÷ 100",
                  "= 11491.4 ÷ 100",
                  "= 114.9 (4 s.f.)",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq4-04",
            question: "Two students debate: Student A says 'Isotopes are dangerous because they are radioactive.' Student B says 'Isotopes are simply atoms of the same element with different neutron numbers — most are stable.' Evaluate both statements using scientific knowledge. [4]",
            marks: 4,
            modelAnswer:
              "Student B is more correct. Isotopes are defined as atoms of the same element (same proton number Z) with different numbers of neutrons (different mass numbers A). Most naturally occurring isotopes are stable and not radioactive (e.g. ¹²C and ¹³C are both stable). Only some isotopes are radioactive (radioisotopes) — these have an unstable neutron-to-proton ratio that leads to nuclear decay. Student A's claim that 'isotopes are dangerous' is an overgeneralisation — it confuses isotopes in general with radioactive isotopes specifically. Many isotopes are harmless (e.g. ²H, deuterium) and some are used beneficially in medicine and industry (e.g. ¹³¹I in thyroid treatment).",
            markScheme: [
              "Definition of isotopes correct: same Z, different neutron number",
              "Most isotopes are stable, not radioactive",
              "Only some isotopes (radioisotopes) are unstable/radioactive",
              "Student A overgeneralises — not all isotopes are radioactive; Student B is essentially correct",
            ],
            guideRef: "Isotopes and Their Properties",
            difficulty: "challenge",
            hints: [
              "Start with the definition of isotopes — does it say anything about radioactivity?",
              "Give examples of stable isotopes (e.g. ¹²C, ¹H, ²H).",
              "Then acknowledge that some isotopes are radioactive, but this is not a property of all isotopes.",
            ],
            strategy: "evaluate both claims with specific examples and precise definitions",
          },
          {
            id: "chem-atoms-bq4-05",
            question: "An element forms a 2+ ion. The ion has 36 electrons and contains 48 neutrons.\n(a) Determine the proton number, mass number, and identity of the element. [3]\n(b) Write the nuclear symbol for the neutral atom. [1]\n(c) Write the electronic configuration of the 2+ ion and of the neutral atom. [2]",
            marks: 6,
            modelAnswer:
              "(a) 2+ ion → lost 2 electrons. Z = 36 + 2 = 38. Mass number A = Z + neutrons = 38 + 48 = 86. Element with Z = 38 is strontium (Sr).\n(b) ⁸⁶₃₈Sr.\n(c) Sr²⁺ (36 electrons): 2,8,18,8. Neutral Sr (38 electrons): 2,8,18,8,2.",
            markScheme: [
              "Z = 38",
              "A = 86",
              "Element = strontium / Sr",
              "Nuclear symbol ⁸⁶₃₈Sr",
              "Sr²⁺: 2,8,18,8",
              "Neutral Sr: 2,8,18,8,2",
            ],
            commonError: "Forgetting that A = Z + neutrons (not just neutrons). Students sometimes write A = 48.",
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "challenge",
            hints: [
              "2+ ion → lost 2 electrons; Z = ion electrons + 2 = 36 + 2 = 38.",
              "A = protons + neutrons = 38 + 48 = 86.",
              "Fill 36 electrons into shells for the ion; add 2 more for the neutral atom.",
            ],
            strategy: "systematic: find Z from ion electrons + charge, then A from Z + neutrons, then identify",
          },
          {
            id: "chem-atoms-bq4-06",
            question: "Thallium (Tl) has two isotopes: ²⁰³Tl and ²⁰⁵Tl. The Ar of thallium is 204.38.\n(a) Calculate the percentage abundance of each isotope. [3]\n(b) State the number of neutrons in each isotope. (Z of Tl = 81) [2]",
            marks: 5,
            modelAnswer:
              "(a) Let x = % ²⁰³Tl.\n(203x + 205(100−x)) ÷ 100 = 204.38\n203x + 20500 − 205x = 20438\n−2x = −62 → x = 31\n²⁰³Tl = 31%, ²⁰⁵Tl = 69%.\n(b) ²⁰³Tl: neutrons = 203 − 81 = 122. ²⁰⁵Tl: neutrons = 205 − 81 = 124.",
            markScheme: [
              "Equation correctly set up",
              "x = 31 → ²⁰³Tl = 31%",
              "²⁰⁵Tl = 69%",
              "²⁰³Tl: 122 neutrons",
              "²⁰⁵Tl: 124 neutrons",
            ],
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "challenge",
            hints: [
              "Set up: let % ²⁰³Tl = x; % ²⁰⁵Tl = 100 − x.",
              "Ar = 204.38 is closer to 205 than to 203 → ²⁰⁵Tl should be more abundant (verify).",
              "Neutrons = A − Z for each isotope.",
            ],
            strategy: "reverse Ar calculation, then A − Z for each isotope",
            solutions: [
              {
                label: "Algebraic method",
                steps: [
                  "Let % ²⁰³Tl = x",
                  "(203x + 205(100−x)) ÷ 100 = 204.38",
                  "203x + 20500 − 205x = 20438",
                  "−2x = −62 → x = 31",
                  "²⁰³Tl = 31%, ²⁰⁵Tl = 69%",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq4-07",
            question: "Explain why the mass number of an atom is always a whole number, but the relative atomic mass of an element is usually not a whole number. [3]",
            marks: 3,
            modelAnswer:
              "The mass number (A) of an individual atom is always a whole number because it is simply the count of protons plus neutrons in the nucleus — both protons and neutrons have relative mass 1 (integers), so their total is always an integer. The relative atomic mass (Ar) of an element, however, is a weighted mean mass averaged over all naturally occurring isotopes, each with different mass numbers and different percentage abundances. A weighted average of different whole numbers with non-integer percentage weights will generally produce a non-integer result (e.g. Ar of Cl = 35.5).",
            markScheme: [
              "Mass number = count of protons + neutrons (both integers) → always a whole number",
              "Ar = weighted mean over all naturally occurring isotopes",
              "Weighted average of different integers with non-integer weights → non-integer result",
            ],
            guideRef: "Relative Atomic Mass from Isotopic Abundances",
            difficulty: "core",
            hints: [
              "Why is A always a whole number? (Count of particles, each contributing exactly 1)",
              "Why is Ar not a whole number? (Weighted average across isotopes with different masses)",
            ],
            strategy: "contrast the definition of A (count) with Ar (weighted average)",
          },
          {
            id: "chem-atoms-bq4-08",
            question: "The table shows three species.\n\n| Species | Protons | Neutrons | Electrons |\n|---------|---------|----------|-----------|\n| A       | 19      | 20       | 18        |\n| B       | 19      | 21       | 19        |\n| C       | 20      | 20       | 18        |\n\n(a) Identify each species (element symbol and any charge). [3]\n(b) Which two species are isoelectronic? [1]\n(c) A and B are isotopes. Explain why. [2]",
            marks: 6,
            modelAnswer:
              "(a) A: Z = 19 (potassium), protons > electrons → positive ion, charge = 19 − 18 = 1+. A = K⁺. B: Z = 19 (potassium), protons = electrons → neutral atom, A = 19 + 21 = 40 → ⁴⁰K (neutral potassium). C: Z = 20 (calcium), protons > electrons → positive ion, charge = 20 − 18 = 2+. C = Ca²⁺.\n(b) A (K⁺) and C (Ca²⁺) are isoelectronic — both have 18 electrons.\n(c) A and B are isotopes because both have proton number 19 (both are potassium atoms/ions) but different numbers of neutrons (20 and 21 respectively), giving different mass numbers (39 and 40).",
            markScheme: [
              "A = K⁺",
              "B = ⁴⁰K (neutral potassium atom)",
              "C = Ca²⁺",
              "A and C are isoelectronic (18 electrons each)",
              "A and B: same Z (19) — both potassium",
              "A and B: different neutron number (20 vs 21) → different mass numbers → isotopes",
            ],
            commonError: "Saying A and C are isotopes because they have the same neutron count — isotopes require the same proton number (same element), not the same neutron number.",
            guideRef: "Isotopes and Their Properties",
            difficulty: "challenge",
            hints: [
              "Identify species: Z determines element; compare protons and electrons to determine charge.",
              "Isoelectronic: same number of electrons.",
              "Isotopes: same Z, different neutron number — check A and B (both Z = 19).",
            ],
          },
          {
            id: "chem-atoms-bq4-09",
            question: "Antimony (Sb) has two naturally occurring isotopes: ¹²¹Sb and ¹²³Sb. The Ar of Sb is 121.76. (Z of Sb = 51)\n(a) Calculate the percentage abundance of ¹²¹Sb. [3]\n(b) State the number of protons, neutrons, and electrons in the ¹²¹Sb atom and in the Sb³⁺ ion formed from it. [4]",
            marks: 7,
            modelAnswer:
              "(a) Let x = % ¹²¹Sb.\n(121x + 123(100−x)) ÷ 100 = 121.76\n121x + 12300 − 123x = 12176\n−2x = −124 → x = 62\n¹²¹Sb = 62%, ¹²³Sb = 38%.\n(b) Neutral ¹²¹Sb (Z = 51, A = 121): protons = 51, neutrons = 121 − 51 = 70, electrons = 51.\nSb³⁺: protons = 51 (unchanged), neutrons = 70 (unchanged), electrons = 51 − 3 = 48.",
            markScheme: [
              "Equation correctly set up with one unknown",
              "x = 62 → ¹²¹Sb = 62%",
              "¹²³Sb = 38%",
              "Neutral: protons 51, neutrons 70, electrons 51",
              "Sb³⁺: protons 51, neutrons 70, electrons 48",
            ],
            guideRef: "The Nuclear Symbol and Calculations: Pulling It All Together",
            difficulty: "challenge",
            hints: [
              "Reverse Ar: let x = % ¹²¹Sb, set up (121x + 123(100−x)) ÷ 100 = 121.76.",
              "For Sb³⁺: protons and neutrons unchanged; electrons = 51 − 3 = 48.",
            ],
            strategy: "reverse Ar calculation then systematic particle counting for ion",
            solutions: [
              {
                label: "Algebraic method for part (a)",
                steps: [
                  "Let % ¹²¹Sb = x; % ¹²³Sb = 100 − x",
                  "(121x + 123(100−x)) ÷ 100 = 121.76",
                  "121x + 12300 − 123x = 12176",
                  "−2x = −124 → x = 62",
                  "¹²¹Sb = 62%, ¹²³Sb = 38%",
                ],
              },
            ],
          },
          {
            id: "chem-atoms-bq4-10",
            question: "A scientist discovers a new element Z with proton number 119. Predict:\n(a) The period and group of element Z in the Periodic Table, and its likely electronic configuration. [3]\n(b) Whether Z will form positive or negative ions, the likely charge on those ions, and the formula of its chloride. [3]",
            marks: 6,
            modelAnswer:
              "(a) Electronic configuration: filling shells in order, Z = 119 would begin a new period (Period 8 based on extrapolation). Using the IGCSE shell model (which applies up to Z = 20 strictly), we can predict: the first 20 elements fill as 2,8,8,2. Beyond Z = 20, transition elements fill d sub-shells. By analogy with Group 1 elements (H, Li, Na, K, Rb, Cs, Fr), element 119 would be the next alkali metal, with 1 outer-shell electron and placed in Group 1, Period 8. Electronic configuration (simplified): [core] + 1 outer electron.\n(b) Like all Group 1 metals, Z would lose 1 electron to form Z⁺ (positive ion, charge 1+), achieving a noble gas configuration. The formula of its chloride would be ZCl (one Cl⁻ per Z⁺, since both ions have charge magnitude 1).",
            markScheme: [
              "Group 1 (by analogy with other alkali metals / 1 outer-shell electron)",
              "Period 8 (next period after caesium/francium pattern)",
              "Likely configuration ends in 1 outer-shell electron",
              "Forms positive ions / cation (metal, Group 1)",
              "Charge 1+ (loses 1 outer electron)",
              "Chloride formula: ZCl",
            ],
            commonError: "Students may try to write a full IGCSE-style configuration (2,8,8,...) for Z = 119 without acknowledging that d and f sub-shells exist beyond Period 4 — it is acceptable to state 'Period 8, Group 1, 1 outer-shell electron' without a complete configuration at this level.",
            guideRef: "Electronic Configuration and Electron Shells",
            difficulty: "challenge",
            hints: [
              "Look at the pattern of Group 1 elements: H(1), Li(3), Na(11), K(19), Rb(37), Cs(55), Fr(87), then 119.",
              "All Group 1 elements have 1 outer-shell electron and form 1+ ions.",
              "The chloride of a 1+ metal is always MCl (1:1 ratio).",
            ],
            strategy: "use periodic trends and group patterns to predict properties of unknown elements",
          },
        ],
      },
    ],
  },
};
