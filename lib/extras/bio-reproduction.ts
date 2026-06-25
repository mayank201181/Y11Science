import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "bio-reproduction",

  hook:
    "Every human alive today is the product of a single cell no bigger than a full stop — yet that cell already held a complete instruction manual for building an entire person. Reproduction is the most audacious biology there is.",

  didYouKnow: [
    "A human egg is the largest cell in the body (about 0.1 mm across — just visible to the naked eye), while a sperm is among the smallest and must travel the equivalent of a person swimming the English Channel relative to its own body length.",
    "The human uterus grows from roughly the size of a pear to the size of a watermelon during pregnancy, stretching its muscle fibres to more than 500 times their original length.",
    "Identical twins arise when a single fertilised egg splits — but because each embryo then develops independently, identical twins can have different fingerprints.",
    "Placental mammals evolved a protein called syncytin — originally a viral gene that became permanently incorporated into mammalian DNA millions of years ago — that is essential for building the placenta.",
    "Some organisms reproduce entirely asexually for thousands of generations: the bdelloid rotifer, a microscopic water animal, has not been observed reproducing sexually for over 40 million years, yet it has survived by stealing and incorporating genes from bacteria, fungi, and plants.",
    "Puberty timing in humans is partly genetic: a 2024 genome-wide study identified over 800 gene variants associated with the age at which puberty begins, explaining why age of onset runs in families.",
  ],

  experiments: [
    {
      title: "Modelling fertilisation — egg and sperm size comparison",
      materials: [
        "A ruler and pencil",
        "Plain paper",
        "A fine-tipped pen or compass",
        "Calculator",
      ],
      steps: [
        "Draw a circle of diameter 0.1 mm on paper (use a compass set to 0.05 mm radius, or mark it with a fine pen as a tiny dot). This represents a human egg cell to scale.",
        "A human sperm is about 60 µm long (head + tail). At 1 mm = 1 µm scale, draw a sperm shape about 60 mm (6 cm) long. Notice how much larger the egg is by volume.",
        "Now scale up: if you drew the egg as a tennis ball (65 mm diameter — roughly 650× real size), calculate how long the sperm would be at the same scale. (Answer: 60 µm × 650 ≈ 39 mm, about the length of a small finger.)",
        "Draw both the scaled egg and sperm side by side and annotate: nucleus, acrosome (on sperm head), flagellum, cell membrane.",
        "Reflect: why does the egg carry so much cytoplasm and the sperm almost none? Write one sentence explaining the energy and resource trade-off.",
      ],
      science:
        "This activity makes the size asymmetry tangible. The egg is packed with nutrients (yolk proteins and mitochondria) to fuel early embryo development before implantation, while the sperm is streamlined for motility, stripping away nearly all cytoplasm to reduce drag. The volume difference is roughly a million-fold — a vivid illustration of anisogamy (the evolution of unequal gametes) and why it arose: investing heavily in each egg and producing many cheap sperm is an evolutionarily stable strategy.",
      safety: "No hazards — pencil and paper activity only.",
    },
    {
      title: "Observing cell division stages in an onion root tip (virtual prep)",
      materials: [
        "1 small onion",
        "Glass of water",
        "Toothpicks or cocktail sticks to support the onion",
        "Ruler",
        "Notebook and pencil",
        "Optional: a magnifying glass",
      ],
      steps: [
        "Balance the onion over a glass of water so only the base touches the water. Place on a sunny windowsill.",
        "After 2–3 days, white roots 1–3 cm long should have grown from the base. These root tips are regions of rapid mitotic cell division.",
        "Using a ruler, note that the zone of active division is the first 1–2 mm behind the root tip (meristematic zone).",
        "Sketch the root tip and label: root cap, zone of cell division, zone of elongation, zone of maturation.",
        "If you have a magnifying glass, look at the very tip — you may see the slightly bulbous structure of the root cap protecting dividing cells.",
        "Write a short paragraph explaining why the root tip is a good place to study mitosis (high rate of cell division, cells dividing rapidly to push the root through soil).",
      ],
      science:
        "Plant root tips contain meristematic tissue — a region of undifferentiated cells undergoing constant mitosis to extend the root. Because cell division is rapid and cells are relatively small and regular, root tips have historically been the best preparation for studying mitosis stages under a microscope. The full lab version uses a stain (aceto-orcein or toluidine blue) to make chromosomes visible; this home version builds the conceptual framework and observation skills without chemicals.",
      safety:
        "Water and onion only — completely safe. Avoid rubbing eyes after handling the onion (mild irritant). Adult supervision is not required.",
    },
  ],
};
