import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "chem-energetics",

  hook:
    "Every time you crack open a glow stick, you're watching a chemical reaction release light instead of heat — a vivid reminder that energy isn't created or destroyed, just shuffled between forms. The same bond-breaking and bond-making rules that power that glow also drive rocket engines, respiration, and the food you ate for breakfast.",

  didYouKnow: [
    "Breaking chemical bonds always requires energy input; forming bonds always releases energy. Whether a reaction feels 'hot' or 'cold' depends on which process wins overall.",
    "The reaction of thermite (iron oxide + aluminium) reaches over 2500 °C — hot enough to melt through steel — because the Al–O bonds formed are far stronger than the Fe–O bonds broken.",
    "Citric acid and sodium bicarbonate dissolve endothermically: the cold-pack you'd put on a sports injury exploits exactly this principle, pulling heat from your skin as the reaction proceeds.",
    "Bond enthalpy values are averages across many different molecules, so enthalpy calculations using them give estimates, not exact figures — a nuance that matters in industrial process design.",
    "Combustion of just 1 gram of hydrogen gas releases about 142 kJ of energy — roughly three times the energy per gram of petrol — which is why hydrogen is being explored as a clean fuel.",
    "Hess's Law (that enthalpy change is path-independent) was experimentally verified in 1840 by Germain Hess, decades before chemists fully understood why it works — it follows directly from conservation of energy.",
  ],

  experiments: [
    {
      title: "Hand-warmer chemistry: neutralisation in a bag",
      materials: [
        "1 teaspoon of citric acid (from a supermarket or pharmacy)",
        "1 teaspoon of bicarbonate of soda (baking soda)",
        "2 small resealable freezer bags",
        "Thermometer (or a thermometer app with a probe)",
        "Water (about 50 ml)",
      ],
      steps: [
        "Place the citric acid in one bag and the bicarbonate of soda in a second bag.",
        "Measure and record the starting temperature of the water.",
        "Add the water to the citric acid bag and seal it. Note the temperature — it should drop (endothermic).",
        "Now empty both bags into the same bag or a cup, stir gently and monitor the temperature again.",
        "Record the maximum or minimum temperature reached and compare with your starting value.",
        "Calculate the approximate temperature change (ΔT) and discuss whether the reaction is exothermic or endothermic overall.",
      ],
      science:
        "Dissolving citric acid in water is slightly endothermic, absorbing heat from the surroundings. When citric acid reacts with bicarbonate of soda, carbon dioxide gas is released and an overall endothermic neutralisation occurs, so the mixture cools. This is the same principle used in reusable cold packs. Comparing measured temperature changes illustrates the concept of enthalpy change and energy transfer to or from the surroundings.",
      safety:
        "Both chemicals are food-grade and safe to handle. Avoid eye contact. Adult supervision recommended for younger students. Do not taste or ingest.",
    },
    {
      title: "Combustion comparison: burning a peanut",
      materials: [
        "1 peanut (or small piece of cracker/crisp)",
        "Metal tin lid or small aluminium dish",
        "100 ml of water in a small metal or heat-proof container",
        "Thermometer",
        "Long barbecue match or taper",
        "Tongs or a pin pushed through a cork to hold the food",
      ],
      steps: [
        "Measure and record the mass of the peanut on a kitchen scale.",
        "Record the starting temperature of the 100 ml of water.",
        "Hold the peanut on the pin/cork over the tin lid and carefully ignite it with the match.",
        "Immediately hold the burning peanut beneath the water container so the flame heats the water from below.",
        "Keep it in place until the peanut stops burning. Record the highest water temperature reached.",
        "Calculate the energy released: Q = m × c × ΔT (use m = 0.1 kg, c = 4200 J kg⁻¹ K⁻¹).",
        "Compare your value with the food-label 'energy per gram' for the peanut and discuss sources of error.",
      ],
      science:
        "Combustion of fats and carbohydrates in food is highly exothermic — bond energy released when C–H and C–C bonds react with O₂ to form CO₂ and H₂O greatly exceeds the energy needed to break the initial bonds. This simple calorimetry experiment demonstrates enthalpy of combustion and shows why foods are energy-dense. Heat losses to the air mean the measured value will be much lower than the true value, illustrating why industrial bomb calorimeters are used for accurate measurements.",
      safety:
        "Perform near an open window or outdoors. Keep a glass of water nearby. An adult should supervise the lighting step. Never leave burning material unattended. Keep hair tied back and loose clothing away from the flame. Do not use foods that have been treated with chemicals or oils beyond normal cooking.",
    },
  ],
};
