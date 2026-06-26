import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "chem-analysis",
  hook:
    "Every criminal conviction based on forensic chemistry, every food safety test, every drug purity check, and every fake-gold scandal caught at customs relies on the same analytical techniques you learn in GCSE chemistry — the ability to identify exactly what a substance is from the signals it sends.",
  didYouKnow: [
    "Flame tests work because electrons in metal ions absorb heat energy and jump to higher energy levels. When they fall back, they release that exact energy as light of a specific wavelength — lithium gives vivid crimson (670 nm), sodium gives intense yellow (589 nm), potassium gives lilac (767 nm), and copper gives blue-green (515 nm).",
    "The first forensic use of chemistry in a criminal trial was in 1836, when James Marsh developed the Marsh test for arsenic poisoning. Before this, arsenic was called 'inheritance powder' because so many wealthy relatives died suspiciously and there was no way to prove it.",
    "Chromatography was invented in 1900 by Russian botanist Mikhail Tsvet, who used it to separate plant pigments — the word comes from the Greek for 'colour writing' (chroma + graphe). Modern variants like HPLC and GC-MS can detect individual molecules in a sample at concentrations of parts per trillion.",
    "The Rf value in thin-layer chromatography (Rf = distance moved by substance / distance moved by solvent) is a fixed constant for a given compound in a given solvent system — it does not change with the amount of substance, making it a reliable identification tool.",
    "Sodium hydroxide solution is used in qualitative analysis to identify metal ions in solution by the colour of the precipitate formed: Cu2+ gives blue, Fe2+ gives green, Fe3+ gives red-brown, and Al3+ gives white (but dissolves in excess NaOH, unlike Ca2+).",
    "Mass spectrometry — used in airports to detect explosives and drugs — works by ionising molecules and measuring the mass-to-charge ratio of the fragments. It can identify a compound from just a few nanograms of sample and is so sensitive it can detect a single drop of perfume in an Olympic-sized swimming pool.",
  ],
  experiments: [
    {
      title: "Paper Chromatography — Separate the Colours in Ink",
      materials: [
        "Coffee filter paper or blotting paper (cut into strips about 2 cm wide, 15 cm long)",
        "Water-soluble felt-tip pens (black and other colours — must be water-soluble, not permanent)",
        "A pencil",
        "A tall glass or jar",
        "Water",
        "Ruler",
        "Tape",
      ],
      steps: [
        "Draw a pencil line 2 cm from the bottom of each paper strip (pencil does not run in water).",
        "Using a felt-tip pen, make a small dot (about 3 mm across) on the pencil line. Let it dry.",
        "Pour water into the glass to a depth of about 1 cm.",
        "Tape the strip to a pencil laid across the top of the glass so the bottom of the strip just dips into the water, but the ink dot is above the water surface.",
        "Wait 10–15 minutes without disturbing the jar. Watch the water creep up the paper.",
        "Remove the strip when the water front is near the top and let it dry flat.",
        "Measure the distance each colour component moved and the distance the solvent moved. Calculate Rf for each component: Rf = distance moved by spot / distance moved by solvent front.",
      ],
      science:
        "Paper chromatography separates mixtures based on two competing interactions: each component's attraction to the stationary phase (the paper, which is coated with water) and its attraction to the mobile phase (the solvent moving up the paper). More soluble or less polar compounds travel further with the solvent. A 'black' ink is rarely pure — it is typically a mixture of cyan, magenta, yellow, and sometimes blue dyes, each with a different Rf value. This is how forensic chemists compare inks on questioned documents.",
      safety:
        "Completely safe. Water-soluble ink pens and water only. Avoid getting ink on skin or clothes.",
    },
    {
      title: "Identify Mystery Solutions with Red Cabbage Indicator",
      materials: [
        "Red cabbage indicator (simmer chopped cabbage in water, strain and cool)",
        "5–6 small glasses or egg cups",
        "Household chemicals to test: lemon juice, milk, bicarbonate of soda solution, washing soda solution, cola, plain water",
        "White labels and a pen",
        "Pipette or teaspoon",
      ],
      steps: [
        "Label each glass with a number and keep a secret record of which substance is in each glass.",
        "Pour about 2 tablespoons of each test substance into its numbered glass.",
        "Add 1 tablespoon of red cabbage indicator to each glass and swirl.",
        "Record the colour in each glass: red/pink = strongly acidic, purple = neutral, blue/green = alkaline, yellow/green = strongly alkaline.",
        "Order the samples from most acidic to most alkaline using your colour observations.",
        "Cross-reference with the key — how many did you identify correctly?",
      ],
      science:
        "Red cabbage contains anthocyanins, which are pH-sensitive pigments that act as a natural indicator across the full pH scale. This is a qualitative chemical analysis technique — you are identifying an unknown property (pH/acidity) of unknown substances from observable chemical signals. Real analytical chemistry uses the same principle: specific reagents produce characteristic, observable responses that allow identification. This experiment also demonstrates why chemists always run a known control (the plain water gives the neutral purple reference colour).",
      safety:
        "All household substances used are food-safe. Washing soda (sodium carbonate) is mildly alkaline — avoid eye contact and wash hands after. Do not mix any of the test substances together outside the experiment.",
    },
  ],
};
