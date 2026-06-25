import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "chem-atoms",
  hook:
    "Every atom in your body was forged inside a star — the carbon in your DNA, the iron in your blood, the calcium in your bones all existed inside a sun that exploded billions of years before Earth formed. You are, quite literally, made of stardust.",
  didYouKnow: [
    "Atoms are almost entirely empty space. If a hydrogen atom's nucleus were the size of a marble (about 1 cm), the electron would orbit roughly 500 metres away — the atom itself would be about 1 km across.",
    "Rutherford's famous gold-foil experiment in 1909 fired alpha particles at thin gold foil and expected them all to pass straight through — instead a tiny fraction bounced back, proving atoms contain a tiny, dense, positively charged nucleus.",
    "The number of protons in an atom (its atomic number) defines which element it is — change even one proton and you have a completely different element with different chemical properties.",
    "Electrons occupy energy levels (shells) rather than random positions. The first shell holds up to 2 electrons, the second and third up to 8 each — this arrangement directly explains why elements in the same group of the periodic table behave similarly.",
    "Isotopes are atoms of the same element with different numbers of neutrons. Carbon-14 has 2 extra neutrons compared to the common Carbon-12, making it slightly unstable and radioactive — this is the basis of carbon-14 dating used to date ancient organic material.",
    "Atoms are unimaginably small: a single human hair is roughly 1 million carbon atoms wide, and yet each of those carbon atoms contains 6 protons, 6 neutrons, and 6 electrons interacting through fundamental forces."
  ],
  experiments: [
    {
      title: "Model an atom with household materials",
      materials: [
        "A large sheet of paper or cardboard",
        "Coins, marbles, or beads (two different types/colours)",
        "String or drawn circles for electron shells",
        "Marker pen",
        "A printed or hand-drawn periodic table"
      ],
      steps: [
        "Choose an element from the first three periods of the periodic table (e.g. sodium, Na, atomic number 11).",
        "Look up its atomic number (protons) and most common mass number on the periodic table to calculate neutrons (mass number − atomic number).",
        "Use one type of bead/coin for protons and another for neutrons. Arrange them in a tight cluster in the centre of the paper to form the nucleus.",
        "Draw concentric circles around the nucleus for electron shells: shell 1, shell 2, shell 3.",
        "Place beads or draw dots for electrons: fill shell 1 with 2, shell 2 with up to 8, then the rest in shell 3.",
        "Label each part. Repeat for two or three other elements and compare the electron arrangements of elements in the same group."
      ],
      science:
        "This model makes the abstract structure of an atom concrete. Comparing different elements shows why atoms in the same group have the same number of outer (valence) electrons — and therefore similar chemical properties. It also reinforces the relationship between proton count, electron count, and the position of an element in the periodic table.",
      safety: "No hazards. This is a purely physical modelling activity."
    },
    {
      title: "Flame test colours at home (with adult supervision)",
      materials: [
        "Table salt (sodium chloride, NaCl)",
        "Copper sulfate solution (from a garden centre, labelled as fungicide — small amount)",
        "A gas hob or a long fireplace lighter/splint",
        "Metal skewer or long-handled metal spoon",
        "Small dishes of water to dissolve each substance"
      ],
      steps: [
        "Dissolve a small pinch of table salt in a few drops of water in a dish. Prepare a separate dish with a tiny amount of copper sulfate dissolved in water.",
        "Darken the room slightly if possible.",
        "With an adult present, carefully hold the metal skewer in the flame of the hob until it glows and gives no colour itself (it is 'clean').",
        "Dip the skewer into the salt solution and hold it at the edge of the blue flame. Observe the colour produced.",
        "Clean the skewer by heating until no colour appears, then repeat with the copper sulfate solution.",
        "Record the colour produced by each substance and look up which metal ion is responsible."
      ],
      science:
        "Heat gives electrons in metal ions energy, exciting them to higher energy levels. When they fall back to lower levels they release that energy as visible light of specific wavelengths — sodium produces a vivid yellow-orange (589 nm) and copper produces blue-green. Each element has a unique set of energy levels, producing a characteristic colour — this is the basis of atomic emission spectroscopy.",
      safety:
        "Adult supervision required. Keep hair and clothing away from the flame. Use only small amounts of chemicals. Copper sulfate is an irritant — wash hands thoroughly after use and keep away from eyes and mouth. Never taste chemicals."
    }
  ]
};
