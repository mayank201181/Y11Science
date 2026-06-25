import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "chem-rates",

  hook:
    "Iron rusts over years, but TNT explodes in microseconds — both are chemical reactions, yet their rates differ by a factor of billions. Understanding what controls reaction rate is what lets chemists brew medicines in hours, keep food fresh for months, and engineer catalytic converters that clean car exhaust in milliseconds.",

  didYouKnow: [
    "Collision theory requires not just any collision but one with sufficient energy (the activation energy) and the correct orientation of molecules — most collisions in a gas at room temperature are simply not energetic enough to react.",
    "Increasing temperature by just 10 °C typically doubles the rate of many reactions, because the Maxwell–Boltzmann distribution shifts so that a much larger fraction of molecules exceed the activation energy.",
    "Catalysts work by providing an alternative reaction pathway with a lower activation energy — they are chemically unchanged at the end of the reaction, which is why a tiny amount can process enormous quantities of reactant.",
    "The enzyme catalase, found in almost every living cell, can decompose hydrogen peroxide at a rate of up to 6 million molecules per second per enzyme molecule — one of the fastest known biological catalysts.",
    "Powdered sugar can explode in the right conditions: when dispersed as fine dust in air, the hugely increased surface area allows combustion to propagate almost instantaneously — a real hazard in food factories.",
    "Glow-in-the-dark 'chemiluminescent' reactions in deep-sea organisms proceed extremely slowly at near-freezing temperatures, conserving the chemical 'fuel' for when it is most needed — a natural example of temperature controlling rate.",
  ],

  experiments: [
    {
      title: "Alka-Seltzer race: surface area and temperature",
      materials: [
        "4 Alka-Seltzer tablets (or generic effervescent vitamin C tablets)",
        "4 clear glasses or beakers",
        "Cold water, room-temperature water, and hot water (from a kettle, allowed to cool to ~60 °C — not boiling)",
        "Stopwatch or phone timer",
        "Pestle and mortar, or a spoon and hard surface to crush one tablet",
      ],
      steps: [
        "Label your glasses: 'cold whole', 'room whole', 'hot whole', 'room crushed'.",
        "Pour 200 ml of the appropriate water into each glass.",
        "Drop a whole tablet into the cold water glass and start the timer. Stop when fizzing completely stops. Record the time.",
        "Repeat with room-temperature water and a whole tablet.",
        "Repeat with hot water and a whole tablet.",
        "Crush one tablet into a fine powder, then add to room-temperature water and time it.",
        "Record all four times in a table and write a conclusion about the effect of temperature and surface area on rate.",
      ],
      science:
        "The tablet reacts with water to produce CO₂ gas (the fizzing). Higher temperature gives water molecules more kinetic energy, increasing the frequency and energy of successful collisions with the tablet surface — so the reaction is faster. Crushing the tablet dramatically increases the surface area exposed to water molecules, providing far more sites where collisions can occur simultaneously, also speeding up the reaction. Both observations are explained by collision theory.",
      safety:
        "Use hot water carefully — ask an adult to pour water above 60 °C. Do not use boiling water directly. The chemicals are safe and the tablets are designed for human use. Avoid eye contact with splashes.",
    },
    {
      title: "Disappearing cross: concentration and rate",
      materials: [
        "Sodium thiosulfate solution (from a school/pharmacy) OR lemon juice (citric acid) + a packet of sodium thiosulfate from a pool-testing kit",
        "Dilute hydrochloric acid (bench acid, 1 mol/L) OR white vinegar as a safer substitute",
        "3–4 clear glasses",
        "Black marker pen and white paper",
        "Measuring jug and teaspoons",
        "Stopwatch",
      ],
      steps: [
        "Draw a bold X on a piece of white paper and place it on a flat surface.",
        "Mix 50 ml of sodium thiosulfate solution with 10 ml of dilute acid in a glass placed over the X. Start the timer.",
        "Look down through the liquid at the X. Stop the timer when the X is no longer visible.",
        "Repeat with a more dilute sodium thiosulfate solution (add water to halve the concentration) and the same amount of acid.",
        "Compare the two times and discuss which was faster and why.",
        "Optional: repeat at a warmer temperature (place the glass in a bowl of warm water for 2 minutes first) and note the difference.",
      ],
      science:
        "When sodium thiosulfate reacts with acid, sulfur precipitates as a cloudy yellow-white solid, obscuring the X. The more concentrated the thiosulfate, the more particles are present per unit volume, so collisions with acid particles happen more frequently. This increases the reaction rate, so the X disappears sooner. The experiment provides a measurable proxy (time for the X to vanish) for comparing rates at different concentrations — a classic demonstration of how concentration affects rate via collision frequency.",
      safety:
        "Dilute hydrochloric acid is an irritant — wear eye protection if available and avoid skin contact. White vinegar is a safer household substitute. Sodium thiosulfate is non-toxic but should not be ingested. Perform in a ventilated room as a small amount of sulfur dioxide can be produced. An adult should supervise acid handling.",
    },
  ],

  interactive: "reaction-rate",
};
