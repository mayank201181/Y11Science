import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "chem-particles",
  hook:
    "The air you're breathing right now contains particles moving at roughly 500 metres per second — faster than a bullet — yet you can't feel a thing because they collide equally from every direction. Everything you touch, taste, and smell is just particles arranged differently.",
  didYouKnow: [
    "A single teaspoon of water contains about 1.67 × 10²³ molecules — more molecules than there are stars in the observable universe.",
    "Gas particles in a room at 20 °C travel at an average speed of around 500 m/s, but the gas itself diffuses slowly because particles constantly collide and change direction — that's why perfume takes a few seconds to reach you across the room.",
    "When you compress a gas into a smaller volume, you don't squash the particles themselves — you just force them closer together, increasing how often they hit the walls and each other.",
    "Dry ice (solid CO₂) sublimes directly from solid to gas at −78.5 °C without becoming a liquid at normal atmospheric pressure — a dramatic demonstration that the solid–liquid–gas sequence isn't universal under all conditions.",
    "The pressure you feel from a tyre or a balloon is caused by billions of individual particle collisions with the inner surface every second — each collision is tiny, but the total force adds up.",
    "Absolute zero (0 K, −273.15 °C) is the temperature at which particles have the minimum possible energy and vibration essentially stops — no gas, liquid, or solid has ever been cooled to exactly 0 K."
  ],
  experiments: [
    {
      title: "Diffusion race: food colouring in hot vs cold water",
      materials: [
        "2 identical clear glasses or mugs",
        "Hot water (from a tap — not boiling)",
        "Cold water (with a few ice cubes removed before adding dye)",
        "Food colouring (any colour)",
        "A dropper or teaspoon"
      ],
      steps: [
        "Fill one glass with hot tap water and one with cold water. Let them settle for 30 seconds so the water is still.",
        "Carefully add one drop of food colouring to the centre of each glass at the same time, disturbing the water as little as possible.",
        "Watch without stirring for 3–5 minutes. Record which glass shows the colour spreading faster.",
        "Sketch or photograph both glasses at 1-minute intervals and compare the spread."
      ],
      science:
        "Particles in hotter water have more kinetic energy and move faster. This gives dye particles more energy to move through the water, so diffusion (the net movement of particles from high to low concentration) is faster in the hot glass. This directly demonstrates that temperature is a measure of average particle kinetic energy.",
      safety:
        "Use hot tap water only — not boiling water from a kettle — to avoid burns. Handle glasses carefully."
    },
    {
      title: "Shrinking balloon: showing gas particles and temperature",
      materials: [
        "1 inflated balloon (tied off)",
        "A large bowl or pot",
        "Ice and cold water",
        "A ruler or tape measure"
      ],
      steps: [
        "Measure the circumference of the balloon with a tape measure and record it.",
        "Fill the bowl with cold water and add several handfuls of ice. Stir until the water is very cold.",
        "Submerge the balloon in the ice water, holding it under for 2 minutes.",
        "Remove the balloon and immediately measure its circumference again.",
        "Leave it at room temperature for 5 minutes and measure a third time."
      ],
      science:
        "Cooling the air inside the balloon reduces the kinetic energy of gas particles. Slower-moving particles hit the balloon walls less frequently and with less force, so the pressure inside drops and the balloon shrinks. Warming it back to room temperature restores particle energy, pressure, and size — a direct illustration of the particle model of gases.",
      safety: "No significant hazards. Dry the balloon before measuring to get accurate results."
    }
  ],
  interactive: "particle-states"
};
