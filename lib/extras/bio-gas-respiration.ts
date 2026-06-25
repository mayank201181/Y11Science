import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "bio-gas-respiration",

  hook:
    "Every breath you draw feeds an ancient chemical engine running inside 37 trillion cells. In the time it takes you to read this sentence, your mitochondria will have split roughly 100 million ATP molecules to power your heartbeat, thoughts, and the tiny movements of your eyes — and each one must be instantly rebuilt or you would be dead within seconds.",

  didYouKnow: [
    "At rest, a human body produces roughly its own body weight in ATP every single day — the same ATP molecules are recycled hundreds of times, constantly being broken down and rebuilt.",
    "The oxygen debt (now more accurately called excess post-exercise oxygen consumption, EPOC) after intense exercise can persist for up to 24 hours, meaning you continue burning extra calories long after you stop working out.",
    "Anaerobic respiration in yeast has been exploited by humans for over 7,000 years — ancient Egyptians used yeast fermentation to make both bread and beer, though they had no idea microorganisms were responsible.",
    "Muscle cells can sustain maximum sprint effort for only 8–10 seconds using stored ATP and phosphocreatine before they must switch to glycolysis; this is why 100 m sprinters breathe relatively little during the race itself.",
    "Mitochondria have their own DNA and reproduce by splitting in two — evidence that they were once free-living bacteria engulfed by a larger cell around 1.5 billion years ago (the endosymbiotic theory).",
    "At the top of Mount Everest, atmospheric oxygen concentration is still about 21%, but the air pressure is so low that each breath delivers only a third as much oxygen as at sea level — climbers' cells are forced into partial anaerobic respiration."
  ],

  experiments: [
    {
      title: "Limewater Breath Test: Comparing Inspired and Expired Air",
      materials: [
        "2 boiling tubes or small glass jars",
        "Limewater (calcium hydroxide solution — available from hardware stores as whitewash or school lab suppliers)",
        "2 drinking straws",
        "Stopwatch",
        "Marker pen for labelling"
      ],
      steps: [
        "Pour equal volumes (about 20 cm³) of limewater into both boiling tubes. Label one 'inspired air' and one 'expired air'.",
        "For the 'inspired air' tube: use a straw to pump room air gently into the limewater by blowing in short, sharp puffs. Count 30 puffs.",
        "For the 'expired air' tube: take a deep breath, then exhale slowly through the straw into the limewater. Repeat until you have blown 30 breaths of exhaled air through it.",
        "Observe and compare the cloudiness (turbidity) of both tubes. Record how many breaths it took for the expired-air tube to turn noticeably milky.",
        "If available, hold both tubes up to a light source and judge which is more opaque."
      ],
      science:
        "Limewater (Ca(OH)2 solution) reacts with carbon dioxide to form insoluble calcium carbonate (CaCO3), turning the solution milky white: Ca(OH)2 + CO2 → CaCO3 + H2O. Expired air contains approximately 4% CO2 compared to 0.04% in inspired air — 100 times more — so the expired-air tube turns milky far faster. This directly demonstrates that aerobic respiration in body cells produces carbon dioxide, which diffuses into the blood and is exhaled from the lungs.",
      safety:
        "Limewater is mildly alkaline (irritant). Avoid contact with eyes. Do not share straws. Wash hands after handling the solution."
    },
    {
      title: "Yeast and Sugar Fermentation — Measuring CO2 Production",
      materials: [
        "Dried active yeast (from a supermarket baking aisle)",
        "White granulated sugar",
        "Warm water (about 35–40 °C — use a thermometer if possible)",
        "3 small plastic bottles (500 mL)",
        "3 balloons",
        "Measuring spoons",
        "Ruler",
        "Stopwatch or phone timer"
      ],
      steps: [
        "Prepare three bottles with 200 mL of warm water each.",
        "Add 1 teaspoon of yeast to each bottle. To bottle 1 add NO sugar, to bottle 2 add 1 teaspoon of sugar, and to bottle 3 add 3 teaspoons of sugar.",
        "Quickly stretch a balloon over the neck of each bottle and stand them in a warm location (near (but not on) a radiator, or in a bowl of warm water).",
        "After 15 minutes, 30 minutes, and 60 minutes, measure the circumference or diameter of each balloon at its widest point using a ruler.",
        "Record results in a table and plot a bar chart comparing balloon sizes across the three conditions at each time point.",
        "Optional: place one bottle in the fridge and one in a bowl of hot water (50 °C) to investigate temperature effects."
      ],
      science:
        "Yeast cells carry out anaerobic respiration (fermentation) in the absence of oxygen, converting glucose into ethanol and carbon dioxide: C6H12O6 → 2C2H5OH + 2CO2. The CO2 gas produced inflates the balloon. The bottle with no sugar produces little or no gas because yeast cannot respire without a substrate. The bottle with more sugar produces more CO2 (up to a point), showing that the rate of fermentation depends on substrate concentration. This is the same process used in bread-making (CO2 makes dough rise) and brewing.",
      safety:
        "Use water no hotter than 40 °C to avoid scalding. Do not seal the bottles — balloons allow gas to escape safely. Dispose of yeast mixture by rinsing down the sink with plenty of water."
    }
  ]
};
