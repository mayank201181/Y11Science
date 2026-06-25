import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "bio-transport-plants",

  hook:
    "A giant redwood tree pulls water more than 100 metres straight up against gravity — with no pump, no heart, and no muscles. It does this using nothing but the physics of water molecules clinging to each other and evaporating from its leaves.",

  didYouKnow: [
    "Xylem vessels are dead at maturity — the living cell contents are broken down, leaving hollow tubes reinforced with lignin. Paradoxically, death is what makes them functional: living contents would obstruct water flow.",
    "The transpiration stream moves water upwards through a combination of three forces: cohesion (water molecules sticking to each other via hydrogen bonds), adhesion (water clinging to xylem walls), and tension created by evaporation at the leaf surface — collectively called the cohesion-tension theory.",
    "Phloem transport (translocation) is bidirectional — sugars produced in leaves travel both up to growing shoot tips and down to roots and storage organs, unlike xylem which is strictly one-way upward.",
    "A large tree can transpire more than 400 litres of water on a hot, sunny day — roughly the contents of a large bath — which is why forests significantly influence local rainfall patterns.",
    "Guard cells control stomatal opening using turgor pressure: when they absorb water by osmosis and become turgid, they bow outward and open the stoma; when they lose water they go flaccid and the stoma closes.",
    "Translocation in phloem is driven by a pressure difference: high sugar concentration at sources (leaves) draws in water by osmosis, raising pressure; low concentration at sinks (roots, fruit) loses water, lowering pressure — the resulting pressure gradient drives mass flow."
  ],

  experiments: [
    {
      title: "Coloured Water Uptake in Celery",
      materials: [
        "Two stalks of fresh celery with leaves still attached",
        "Two glasses or jars",
        "Red or blue food colouring",
        "Water",
        "A sharp knife (adult supervision for cutting)",
        "Optional: a magnifying glass or hand lens"
      ],
      steps: [
        "Fill one glass with plain water and one glass with water containing several drops of food colouring — enough to make a strong colour.",
        "With adult help, make a fresh diagonal cut across the base of each celery stalk to open the xylem vessels.",
        "Place one stalk in plain water (control) and one stalk in coloured water.",
        "Leave both in a bright location for 2–4 hours, or overnight for a stronger result.",
        "After waiting, remove the coloured-water stalk and make a cross-section cut through the stalk at several heights.",
        "Observe the cross-section — you should see small coloured dots arranged in a ring or cluster: these are the xylem vessels that transported the dye upward.",
        "Use a magnifying glass to see the individual vessels more clearly."
      ],
      science:
        "Food colouring dissolved in water is carried upward through the xylem by the transpiration stream. Evaporation of water vapour from the leaves creates a lower water potential at the top of the plant, drawing water upward by cohesion-tension. Because xylem is restricted to specific vessels, the colour appears only in those structures in cross-section — a visual map of the vascular tissue. The control stalk in plain water should show no colouration.",
      safety:
        "Adult supervision required when cutting celery stalks. Food colouring may stain surfaces and clothing."
    },
    {
      title: "Measuring Transpiration Rate with a Plastic Bag",
      materials: [
        "A healthy potted houseplant with broad leaves",
        "A clear plastic bag large enough to cover several leaves",
        "A rubber band or twist tie",
        "Kitchen scales",
        "A marker pen",
        "A timer"
      ],
      steps: [
        "Water the plant normally and allow it to drain, then pat the pot dry.",
        "Weigh the entire plant (pot included) and record the mass. This is your starting mass.",
        "Place the clear plastic bag loosely over the leafy part of the plant (not the pot) and secure it around the main stem with a rubber band — loose enough not to damage the plant.",
        "Place the plant in a well-lit spot for 30–60 minutes.",
        "After the time is up, observe condensation on the inside of the bag — this is water transpired from the leaves.",
        "Remove the bag carefully (try to keep the condensed water inside) and re-weigh the plant.",
        "The difference in mass represents water lost through transpiration. Calculate the rate: grams lost per minute."
      ],
      science:
        "Plants lose water vapour through stomata on their leaf surfaces during transpiration. The plastic bag traps this vapour and allows it to condense visibly, confirming that leaves are the main site of water loss. The mass decrease of the plant corresponds directly to the water lost — a simple application of conservation of mass. You could repeat the experiment in a darker spot or on a cooler day to investigate how light and temperature affect transpiration rate.",
      safety:
        "Keep the plastic bag away from younger children. Do not leave the bag on the plant for more than a few hours as restricted gas exchange may harm the plant."
    }
  ]
};
