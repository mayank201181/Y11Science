import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "phys-thermal",
  hook:
    "Heat is not a substance — it is the invisible, chaotic jostling of trillions of atoms. Touch a metal spoon left in a hot pan and you feel billions of electrons transferring kinetic energy straight into your fingertips in a fraction of a second.",
  didYouKnow: [
    "Absolute zero (−273.15 °C) is the point at which particles theoretically stop vibrating entirely — it has never been reached in the universe, though laboratories have cooled gases to within a billionth of a degree of it.",
    "The metal handrail on a staircase and the wooden bannister beside it are at exactly the same room temperature, yet the metal feels colder because it conducts heat away from your hand roughly 400 times faster than wood does.",
    "The surface of the Sun reaches about 5,500 °C, yet the corona (its outer atmosphere) can exceed 1,000,000 °C — scientists still do not fully understand why the outer layer is hotter than the surface.",
    "Water has an unusually high specific heat capacity (4,200 J kg⁻¹ K⁻¹), which is why coastal cities have milder climates than inland cities at the same latitude — the sea acts as a giant thermal buffer.",
    "A vacuum flask (Thermos) prevents heat loss by all three mechanisms: the vacuum blocks conduction and convection, and the silvered walls reflect infrared radiation back in.",
    "Thermal expansion causes the Eiffel Tower to grow by about 15 cm in summer compared to winter, which is why engineers leave expansion gaps in bridges and railway tracks.",
  ],
  experiments: [
    {
      title: "Comparing Thermal Conductivity with Butter and Nails",
      materials: [
        "A metal rod or long metal spoon",
        "A wooden stick or wooden spoon of similar length",
        "Small equal lumps of butter or petroleum jelly",
        "A mug of hot (not boiling) water",
        "A timer",
      ],
      steps: [
        "Press a small lump of butter onto the far end of the metal rod and another equal lump onto the far end of the wooden stick.",
        "Lean both objects so their near ends dip into the hot water at the same time.",
        "Start the timer and watch the butter on each object.",
        "Record the time at which each butter lump starts to melt and slide.",
        "Compare the two times and explain the difference in terms of conduction.",
      ],
      science:
        "Metals contain free (delocalised) electrons that can carry kinetic energy rapidly along the rod through electron collisions — this makes metals excellent thermal conductors. Wood has no free electrons and its atoms are held in a rigid lattice where vibrations transfer energy slowly, making it a poor conductor (good insulator). The butter on the metal end melts significantly faster because thermal energy travels from the hot water end to the cool butter end much more quickly through the metal than through the wood.",
      safety:
        "Use hot tap water, not boiling water from a kettle. Take care not to burn fingers on the hot metal rod — use a cloth or oven glove to hold it. Ask an adult to supervise.",
    },
    {
      title: "Convection Currents in a Glass of Water",
      materials: [
        "A tall clear glass or heatproof jug",
        "Cold water",
        "A few drops of food colouring",
        "A small piece of ice",
        "Optional: a torch to shine through the glass",
      ],
      steps: [
        "Fill the glass about three-quarters full with cold water and let it settle until still.",
        "Carefully place an ice cube on one side of the water surface.",
        "Add two or three drops of food colouring next to the ice cube — do not stir.",
        "Watch from the side (use a torch if available for better visibility) for at least two minutes.",
        "Sketch the path the coloured water takes and explain it using particle theory.",
      ],
      science:
        "Water cooled by the ice becomes denser because its particles slow down and pack closer together. This denser, cold water sinks while warmer, less dense water from the bottom rises to replace it, creating a convection current. The food colouring makes the cold, sinking water visible as it curls down and across the bottom of the glass. This is the same mechanism that drives ocean currents and weather systems on a planetary scale.",
      safety: "No significant hazards. Mop up any spills to avoid slipping.",
    },
  ],
};
