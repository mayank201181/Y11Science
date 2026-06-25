import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "bio-ecology",

  hook:
    "Remove every insect from Earth and most terrestrial ecosystems collapse within decades — crops fail, soils stop recycling nutrients, birds vanish. Ecology reveals that the most inconspicuous organisms are often holding everything else together.",

  didYouKnow: [
    "A single teaspoon of healthy garden soil contains more individual bacteria than there are people who have ever lived on Earth — roughly 1 billion cells, spanning thousands of species forming complex decomposer food webs.",
    "The largest living organism on Earth (by area) is a honey fungus mycelial network in the Malheur National Forest, Oregon — spanning about 9.6 km² and estimated to be 8,000 years old. It feeds as a decomposer and parasite on tree roots.",
    "Wolves reintroduced to Yellowstone National Park in 1995 triggered a trophic cascade: elk stopped overgrazing riverbanks, willows and aspens regrew, beavers returned, their dams created wetland habitats, and river courses physically changed — a phenomenon called a 'landscape of fear' effect.",
    "Only about 10% of energy transfers between trophic levels (the 10% rule). This is why food chains rarely exceed five links — so much energy is lost as heat through cellular respiration at each level that there is not enough left to support a sixth consumer.",
    "The carbon atoms in your body have cycled through thousands of other organisms. A carbon atom you exhale today may have been in a Cretaceous fern 100 million years ago, locked in coal, burned in a power station, absorbed by an oak tree, and eaten by a caterpillar — all before reaching you.",
    "Lichens, which appear to be single organisms, are actually a mutualistic partnership between a fungus and a photosynthetic partner (an alga or cyanobacterium). They are pioneer species that can colonise bare rock, secreting acids that begin soil formation — making later plant succession possible.",
  ],

  experiments: [
    {
      title: "Quadrat sampling — estimating population size in a garden or park",
      materials: [
        "4 tent pegs or sticks",
        "About 4 metres of string",
        "A ruler or tape measure",
        "Paper and pencil",
        "Optional: a key for identifying common plants (a free app such as PlantNet works well)",
      ],
      steps: [
        "Choose a grassy or weedy area (garden lawn, verge, or park). Mark out a 1 m × 1 m square using your sticks and string — this is one quadrat.",
        "Count and record every individual of each plant species you can see within the quadrat. Include grass as one species, dandelion as another, etc.",
        "Move the quadrat to a second random location (close your eyes and toss a stick — place the quadrat where it lands to avoid bias). Repeat the count.",
        "Repeat at 5–10 random locations in total.",
        "Calculate mean number of individuals per species per quadrat. Multiply by the total area of the habitat (in m²) to estimate population size.",
        "Record species richness (total number of species found) and compare quadrats. Is the community uniform or patchy?",
        "Write up: what abiotic factors (light, soil moisture, compaction) might explain where each species was most common?",
      ],
      science:
        "Quadrat sampling is a standard ecological field method for estimating the distribution and abundance of non-motile or slow-moving organisms. Random placement avoids sampling bias — ecologists use random number tables or GPS coordinates in real surveys. The 10% energy rule predicts that primary producers (plants) should be far more abundant than herbivores, which in turn outnumber carnivores; your quadrat data will likely confirm that plant species dominate the biomass at ground level. Species richness and evenness together form 'biodiversity' — a key measure of ecosystem health.",
      safety:
        "Work in a familiar outdoor area with another person if possible. Wash hands after handling soil. Avoid areas with dog fouling. No chemical hazards.",
    },
    {
      title: "Yeast as a model decomposer — CO₂ production and temperature",
      materials: [
        "2 small plastic bottles or glass jars (250–500 ml)",
        "1 sachet (7 g) of dried baker's yeast",
        "Sugar (glucose or plain white sugar)",
        "Warm water (approx. 35–40 °C — comfortably warm, not boiling)",
        "Cold water (from the fridge, approx. 5–10 °C)",
        "2 balloons",
        "Ruler",
        "Clock or timer",
      ],
      steps: [
        "Label the bottles 'Warm' and 'Cold'. Add 1 teaspoon of sugar and half a teaspoon of yeast to each.",
        "Fill the 'Warm' bottle with 200 ml of warm water (35–40 °C) and the 'Cold' bottle with 200 ml of cold water. Swirl gently to dissolve.",
        "Quickly stretch a balloon over the mouth of each bottle, sealing them.",
        "Set both bottles in the same location and record the diameter of each balloon every 5 minutes for 30 minutes.",
        "Sketch a results table and plot a graph: time (x-axis) vs balloon diameter (y-axis) for both conditions.",
        "Conclusion: which temperature produced more CO₂? Why? Link your answer to enzyme activity and rate of respiration.",
      ],
      science:
        "Yeast are decomposers (fungi) that break down organic molecules through anaerobic respiration (fermentation): glucose → ethanol + carbon dioxide. The CO₂ inflates the balloon. Higher temperatures increase the kinetic energy of molecules, causing more frequent and successful enzyme–substrate collisions, so the rate of respiration increases. This mirrors what happens in compost heaps — warm, moist conditions accelerate decomposer activity, cycling carbon and nutrients back into the ecosystem faster. Below about 10 °C, enzyme activity slows markedly; above 45 °C, yeast enzymes denature and respiration stops — the same temperature-dependence applies to all decomposers in the carbon cycle.",
      safety:
        "Use warm (not boiling) water — test on your wrist before adding yeast. The yeast–sugar mixture is non-toxic and the gases produced (CO₂ and trace ethanol vapour) are safe in a well-ventilated room. Do not seal bottles without the balloon pressure-relief — balloons will simply inflate rather than allow pressure to build. No adult supervision required.",
    },
  ],
};
