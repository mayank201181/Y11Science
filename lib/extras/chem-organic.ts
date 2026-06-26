import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "chem-organic",
  hook:
    "Every plastic bottle, every fuel in every engine, every alcohol in every drink, and every drug in your medicine cabinet is an organic compound — carbon's extraordinary ability to form four bonds and chain into millions of different structures makes it the foundation of modern life and industry.",
  didYouKnow: [
    "There are more known organic compounds than all other chemical compounds combined — over 10 million identified so far, compared to fewer than 1 million inorganic compounds. Carbon's ability to bond to itself in chains, rings, and branches creates near-infinite structural variety.",
    "Crude oil is essentially a mixture of alkanes — straight-chain, branched, and cyclic hydrocarbons — formed from the compressed remains of marine organisms over 300–400 million years. When you fill a car with petrol, you are burning Devonian plankton.",
    "Ethanol (the alcohol in drinks) and methanol (wood alcohol) have almost identical formulas — C2H5OH versus CH3OH — but methanol is fatally toxic in small doses. The difference of just one carbon atom and two hydrogen atoms is the difference between a drink and a poison.",
    "Poly(ethene) — the plastic in carrier bags — was discovered accidentally in 1933 when chemists at ICI noticed a white waxy solid forming in a high-pressure ethene experiment. The monomer ethene (CH2=CH2) polymerises by addition across its double bond.",
    "Fermentation is one of humanity's oldest chemical technologies — Neolithic peoples were producing alcohol by fermenting fruit over 9,000 years ago, long before anyone understood enzymes, glucose, or carbon dioxide.",
    "Cracking — the industrial process that breaks large alkane molecules into smaller, more useful ones — happens at around 500°C using a zeolite catalyst. Without cracking, crude oil refineries would produce far too much heavy fuel oil and not nearly enough petrol and aviation fuel.",
  ],
  experiments: [
    {
      title: "Fermentation in a Bottle — Yeast Converts Sugar to CO2",
      materials: [
        "1 teaspoon of dried active yeast",
        "1 teaspoon of sugar",
        "250 mL warm water (not hot — around 35–40°C)",
        "A clean 500 mL plastic bottle",
        "A balloon",
        "A rubber band or tape",
      ],
      steps: [
        "Pour the warm water into the bottle.",
        "Add the sugar and swirl to dissolve.",
        "Add the dried yeast and swirl gently.",
        "Stretch the opening of the balloon over the bottle neck and secure with a rubber band.",
        "Place the bottle somewhere warm (e.g., near a radiator or in a bowl of warm water).",
        "Observe the balloon over 20–40 minutes — record when it starts to inflate and how large it gets.",
        "After 1 hour, unscrew and smell carefully — note the faint smell of alcohol.",
      ],
      science:
        "Yeast cells carry out anaerobic respiration (fermentation): C6H12O6 → 2C2H5OH + 2CO2. Glucose is broken down into ethanol and carbon dioxide without using oxygen. The CO2 produced inflates the balloon. The ethanol remains dissolved in the liquid. This is exactly the same reaction used to produce beer, wine, and bread (in bread-making, it is the CO2 that makes dough rise). The warm temperature speeds up enzyme activity in the yeast.",
      safety:
        "Yeast, sugar, and water are all food-safe. Do not drink the product — it is not regulated and the concentration is unpredictable. Keep the bottle loosely sealed (balloon allows expansion) to avoid pressure build-up.",
    },
    {
      title: "Cracking a Candle — Incomplete Combustion and Carbon",
      materials: [
        "A plain white candle",
        "A metal spoon",
        "A lighter or matches (adult supervision)",
        "A white ceramic tile or white plate",
      ],
      steps: [
        "Light the candle and let it burn steadily for 30 seconds.",
        "Hold the ceramic tile just 1–2 cm above the flame for 3–4 seconds.",
        "Remove and observe the black deposit on the tile.",
        "Now hold the metal spoon 10–15 cm above the flame (where the flame is cooler and oxygen is limited) for 5 seconds — observe any deposit.",
        "Try scraping a tiny amount of the black deposit with your fingernail and feel its powdery texture.",
        "Blow out the candle and observe the white smoke — this is unburned wax vapour (alkane droplets).",
      ],
      science:
        "Candle wax is a mixture of long-chain alkanes. When the candle burns with ample oxygen, complete combustion occurs: alkane + O2 → CO2 + H2O. When oxygen is limited (at a surface held close, or at the cooler edge of the flame), incomplete combustion occurs: alkane + limited O2 → CO + C + H2O. The black deposit is solid carbon (soot) — tiny particles of unburned carbon. This is directly analogous to industrial cracking and the formation of carbon-black, which is used as a pigment in printing ink and tyres.",
      safety:
        "Adult must supervise all work with naked flames. Keep hair and loose clothing tied back. Work on a heatproof surface. The spoon handle may get warm — use an oven glove or hold by the very end.",
    },
  ],
};
