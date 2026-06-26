import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "chem-bonding",

  hook:
    "The screen you are reading this on exists because silicon atoms share electrons in a giant covalent lattice — the same bonding principle that makes diamond the hardest natural material on Earth. Every material humans have ever built with, from steel bridges to plastic packaging, is ultimately a story of electrons deciding whether to share, donate, or attract.",

  didYouKnow: [
    "Diamond and graphite are both pure carbon, yet diamond is the hardest natural substance while graphite is soft enough to write with — the entire difference comes down to bonding structure: diamond has four covalent bonds per carbon in a rigid 3D lattice, whereas graphite has only three, leaving one delocalised electron per carbon that lets layers slide over each other.",
    "Ionic compounds can conduct electricity when molten or dissolved in water but not as solids — in the solid state the ions are locked in fixed lattice positions and cannot move, but melting or dissolving frees them to carry charge.",
    "The melting point of sodium chloride is 801 °C, while the melting point of ice is 0 °C — both are held together by electrostatic forces, but NaCl has strong ionic bonds between highly charged ions while water molecules are held by comparatively weak intermolecular hydrogen bonds.",
    "Metallic bonding is why metals can be hammered into sheets (malleable) and drawn into wires (ductile): the positive ion cores can slide past each other because the delocalised electron 'sea' flows around them, maintaining the bond without breaking it.",
    "Fullerenes such as Buckminsterfullerene (C60) have exactly the same type of bonding as graphite — covalent bonds and delocalised electrons — yet form closed spherical cages rather than flat layers, making them candidates for drug delivery inside the body.",
    "Giant ionic lattices are always electrically neutral overall: the ratio of ions is determined by charge balance, which is why calcium chloride is CaCl2 (one Ca2+ balanced by two Cl−) rather than CaCl."
  ],

  experiments: [
    {
      title: "Conductivity of ionic vs covalent substances",
      materials: [
        "Table salt (sodium chloride)",
        "Sugar (sucrose)",
        "Distilled water",
        "Two glasses or beakers",
        "A simple conductivity tester (9 V battery, two wires with metal probes, an LED or small bulb)",
        "A teaspoon"
      ],
      steps: [
        "Set up your conductivity tester: connect the battery to the LED/bulb in series, leaving two bare wire ends as probes.",
        "Fill one glass with about 150 cm3 of distilled water and dissolve a heaped teaspoon of salt in it; fill the second glass with the same volume of distilled water and dissolve a heaped teaspoon of sugar.",
        "Dip the two probes into the salt solution (do not let them touch each other). Observe the LED.",
        "Remove the probes, dry them, and dip them into the sugar solution. Observe the LED.",
        "Try dipping the probes into plain distilled water as a control.",
        "Record your results: which solution lights the LED and which does not?"
      ],
      science:
        "Salt (NaCl) is an ionic compound. When dissolved in water, it dissociates into free Na+ and Cl− ions that can carry electric charge, completing the circuit and lighting the LED. Sugar (sucrose) is a molecular covalent compound: it dissolves as neutral molecules with no free ions, so it cannot conduct electricity. This demonstrates the key difference between ionic and covalent bonding — ionic compounds produce ions in solution, covalent compounds do not.",
      safety:
        "Use only a low-voltage battery (9 V or less). Keep probes well apart in solution to prevent short-circuit. Do not submerge the battery or any connections."
    },
    {
      title: "Modelling giant lattice vs simple molecular structures with sweets",
      materials: [
        "Two types of small sweets or marshmallows (two colours for two ion types, or two atom types)",
        "Cocktail sticks or toothpicks",
        "A flat surface"
      ],
      steps: [
        "Use one colour of sweet to represent Na+ ions and a second colour to represent Cl− ions.",
        "Build a 3 x 3 x 2 layer section of an NaCl lattice: alternate the two colours so every ion is surrounded only by the opposite type, joined with cocktail sticks.",
        "Count how many neighbours each interior ion has — you should find six (this is the coordination number of NaCl).",
        "Now use the same sweets and sticks to build a single water molecule (one large sweet = O, two small sweets = H, with stick 'bonds' at roughly 104° angles) and then a cluster of three such molecules held loosely together.",
        "Compare the two models: how easy is it to separate a single unit from the lattice versus from the molecular cluster? What does this tell you about melting points?"
      ],
      science:
        "The lattice model shows why ionic compounds have high melting points: you must break many strong electrostatic forces simultaneously to release even one ion. The molecular model shows why simple covalent compounds (like water) have much lower melting points: only weak intermolecular forces between whole molecules need to be overcome, not the covalent bonds within each molecule. The activity makes the abstract idea of 'structure' visible and physically intuitive.",
      safety: "No hazards — edible materials only. Wash hands before and after."
    }
  ]
};
