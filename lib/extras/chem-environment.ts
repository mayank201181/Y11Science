import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "chem-environment",
  hook:
    "The atmosphere you breathe today is a fragile chemical system that took 2.5 billion years of photosynthesis to build — and human industry has measurably altered it in just 200 years. Chemistry is not just in the lab; it is literally the air around you.",
  didYouKnow: [
    "Carbon dioxide makes up only about 0.042% of the atmosphere by volume, yet it is responsible for the greenhouse effect that keeps Earth around 33°C warmer than it would otherwise be — without it, the oceans would be permanently frozen.",
    "Acid rain can have a pH as low as 4.2 — roughly as acidic as tomato juice — caused mainly by sulfur dioxide (from burning coal) and nitrogen oxides (from vehicle engines) dissolving in rainwater to form sulfuric and nitric acids.",
    "The hole in the ozone layer was first detected in 1985 over Antarctica. By the mid-1990s it was larger than the continental United States. The Montreal Protocol (1987) banned CFCs globally, and the ozone layer is now slowly recovering — one of the few success stories of international environmental chemistry action.",
    "Oceans absorb roughly 25–30% of the CO2 humans emit each year. This forms carbonic acid in seawater, lowering ocean pH — a process called ocean acidification — which dissolves the calcium carbonate shells of corals and shellfish.",
    "A single molecule of sulfur hexafluoride (SF6), used in electrical insulation, has a global warming potential 23,500 times greater than CO2 over 100 years, making it the most potent greenhouse gas known to the IPCC.",
    "Catalytic converters in car exhausts contain platinum, palladium, and rhodium as catalysts. They convert toxic carbon monoxide and nitrogen oxides into less harmful carbon dioxide and nitrogen gas — turning a chemistry problem into a chemistry solution.",
  ],
  experiments: [
    {
      title: "Make Acid Rain and Test Its Effect",
      materials: [
        "Red cabbage (quarter of a head)",
        "Water",
        "Saucepan or microwave-safe bowl",
        "Strainer",
        "3–4 clear glasses or jars",
        "Bicarbonate of soda (sodium bicarbonate)",
        "White vinegar",
        "Straw",
        "Chalk or a small seashell",
      ],
      steps: [
        "Chop the red cabbage and simmer in water for 10 minutes (or microwave for 5 minutes). Let cool, then strain to collect the purple indicator liquid.",
        "Pour equal amounts of indicator liquid into 3 glasses.",
        "To glass 1: add a pinch of bicarbonate of soda (alkaline) — note the colour change.",
        "To glass 2: add a splash of vinegar (acidic) — note the colour change.",
        "To glass 3: blow through a straw into the liquid for 30 seconds — your breath contains CO2 which dissolves to form carbonic acid. Observe the colour shift.",
        "Drop a piece of chalk or a small shell into the acidified glass 2 and observe what happens over 10 minutes.",
      ],
      science:
        "Red cabbage contains anthocyanin pigments that change colour across the pH scale (red in acid, purple in neutral, green/yellow in alkali). Blowing CO2 into the indicator mimics how CO2 dissolves in rainwater and ocean water to form carbonic acid (H2O + CO2 → H2CO3), lowering the pH — just as acid rain and ocean acidification work. The chalk (calcium carbonate) fizzes and dissolves in acid, demonstrating how acid rain damages limestone buildings and acidified oceans dissolve coral and shell.",
      safety:
        "Adult supervision required when heating water. Vinegar and bicarbonate of soda are household safe. Avoid getting indicator liquid on clothes — it stains.",
    },
    {
      title: "Model the Greenhouse Effect with a Bottle and a Thermometer",
      materials: [
        "Two identical clear plastic bottles (2-litre)",
        "Two digital or liquid thermometers",
        "Bicarbonate of soda (3 tablespoons)",
        "White vinegar (100 mL)",
        "Funnel",
        "Bright desk lamp or sunny windowsill",
        "Cling film and rubber band",
        "Stopwatch",
      ],
      steps: [
        "Bottle A (control): seal with cling film and rubber band with just air inside.",
        "Bottle B (CO2): use the funnel to add 3 tablespoons of bicarbonate of soda. Then carefully pour in 100 mL of vinegar — this generates CO2. Quickly seal with cling film.",
        "Insert a thermometer into each bottle through a small hole in the cling film, sealing loosely around it.",
        "Place both bottles equidistant from the lamp (or in sunlight) and record the starting temperatures.",
        "Record temperature every 2 minutes for 20 minutes.",
        "Compare the temperature rise in Bottle B (CO2-enriched) versus Bottle A (air).",
      ],
      science:
        "Carbon dioxide and water vapour are greenhouse gases — they absorb infrared radiation (heat) rather than letting it pass straight through. The CO2-filled bottle should warm slightly faster or reach a higher temperature than the air-filled control. This models how increased CO2 concentration in Earth's atmosphere traps more outgoing infrared radiation from Earth's surface, raising global temperatures. The effect is real but subtle in a small bottle — in Earth's atmosphere, even a 0.01% increase in CO2 has measurable climate consequences.",
      safety:
        "Vinegar and bicarbonate of soda reaction is safe but can fizz vigorously — add vinegar slowly. Do not use a sealed, rigid container as CO2 pressure could build. Cling film allows slight pressure release.",
    },
  ],
};
