import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "bio-enzymes",
  hook:
    "Enzymes are nature's impossibly efficient machines — a single molecule of catalase can destroy 40 million hydrogen peroxide molecules every second, and it does not wear out in the process. Without enzymes, the chemical reactions needed for life would take thousands of years to complete at body temperature.",
  didYouKnow: [
    "Catalase, found in nearly all living cells, is one of the fastest enzymes known — it can catalyse the decomposition of up to 40 million hydrogen peroxide molecules per enzyme molecule per second.",
    "The lock-and-key model of enzyme action was proposed by Emil Fischer in 1894 — before DNA was even known to be the genetic material. It remains a cornerstone of biochemistry over 130 years later.",
    "Pineapple, papaya, and kiwi contain proteases (bromelain, papain, and actinidin respectively) that break down proteins — which is why fresh pineapple prevents jelly (gelatin) from setting: the enzyme destroys the protein network.",
    "Enzymes are not consumed in reactions — they are released unchanged after each reaction. In theory, one enzyme molecule could catalyse an infinite number of reactions, limited only by temperature, pH, and substrate availability.",
    "Your stomach produces pepsin, a protease that digests proteins — but pepsin only works at the extremely acidic pH of around 2. Saliva contains amylase, which works optimally at the neutral pH of the mouth (around 7). Each enzyme is specifically tuned to its environment.",
    "Industrial enzymes are big business: the global enzyme market is worth over $10 billion per year. Biological washing powders use proteases and lipases to break down protein and fat stains at low temperatures, saving energy.",
  ],
  experiments: [
    {
      title: "Enzyme Frenzy: Catalase in Fresh vs Boiled Liver (or Potato)",
      materials: [
        "Fresh raw potato or raw liver (liver gives a more dramatic result)",
        "Boiled/cooked potato or liver (same amount)",
        "Hydrogen peroxide (3% solution from a pharmacy — hair bleach section)",
        "2 small dishes or cups",
        "A knife and chopping board (ask an adult)",
        "Tweezers",
      ],
      steps: [
        "Ask an adult to cut two equal-sized pieces of raw potato or liver, and two matching pieces of boiled/cooked potato or liver.",
        "Place one raw piece and one boiled piece into separate dishes.",
        "Add a teaspoon of hydrogen peroxide to the raw piece and observe for 30 seconds. Record what you see.",
        "Add a teaspoon of hydrogen peroxide to the boiled piece and observe. Record the difference.",
        "Optional: try holding a glowing splint (not a flame — just after blowing out a lit match) over the raw piece as it fizzes. It should re-ignite, confirming the gas produced is oxygen.",
      ],
      science:
        "Raw potato and liver contain catalase, an enzyme that breaks down hydrogen peroxide (H2O2) into water (H2O) and oxygen gas (O2). The vigorous bubbling you see is oxygen being released. Boiling denatures the enzyme — heat disrupts the weak bonds that maintain the active site's precise 3-D shape, so the substrate (H2O2) can no longer bind. The boiled sample produces little or no bubbling, demonstrating that catalase activity is destroyed by high temperature. This is direct evidence that enzymes are proteins whose function depends on their shape.",
      safety:
        "3% hydrogen peroxide is mildly irritating — avoid contact with eyes and skin, and wash hands afterwards. Raw liver: handle hygienically as you would any raw meat. Adult supervision required for the knife and for the splint test (fire).",
    },
    {
      title: "Does Temperature Affect Enzyme Speed? A Jelly and Pineapple Test",
      materials: [
        "One sachet of powdered gelatine (or a pack of jelly cubes)",
        "Fresh pineapple juice (or a few slices of fresh pineapple blended)",
        "Canned or boiled pineapple juice (the same amount)",
        "3 small cups",
        "Hot water (from the kettle — ask an adult) and cold water",
        "A measuring jug and spoon",
      ],
      steps: [
        "Make up gelatine solution according to packet instructions (dissolve in hot water, then let it cool slightly — it should be liquid but not boiling).",
        "Pour equal amounts of the liquid gelatine into 3 cups.",
        "To cup 1: add 2 tablespoons of fresh pineapple juice.",
        "To cup 2: add 2 tablespoons of canned or boiled pineapple juice.",
        "To cup 3: add 2 tablespoons of plain water (control).",
        "Place all 3 cups in the fridge for 1–2 hours. Check which cups have set solid.",
      ],
      science:
        "Gelatine sets because its protein (collagen) molecules form a network of cross-linked strands that trap water in a gel. Fresh pineapple contains bromelain, a protease enzyme that breaks peptide bonds in collagen — destroying the network so the jelly cannot set. Canned or boiled pineapple has been heated during processing, which denatures bromelain, so its jelly sets normally. The control cup also sets. This experiment demonstrates enzyme specificity (bromelain acts on protein, not carbohydrate) and the effect of denaturation by heat on enzyme activity.",
      safety:
        "Ask an adult to help with boiling water. No other significant hazards.",
    },
  ],
};
