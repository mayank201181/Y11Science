import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "bio-molecules",
  hook:
    "Just four types of biological molecule — carbohydrates, lipids, proteins, and nucleic acids — are responsible for every structure, every reaction, and every inherited instruction in all life on Earth. The DNA in your cells, if stretched out, would reach from here to the Sun and back — over 300 times.",
  didYouKnow: [
    "DNA is not actually blue — it is a colourless molecule. The iconic double helix images are computer-generated models; in reality, extracted DNA looks like a white stringy mucus (you can see it in the experiment below).",
    "The human body contains around 100,000 different types of protein, all built from just 20 amino acids arranged in different sequences — like writing every book in existence using only 20 letters.",
    "Glucose and fructose are both C6H12O6 — exactly the same atoms — but arranged differently, giving them different properties. This is called structural isomerism, and it explains why fructose tastes sweeter than glucose despite being chemically identical in formula.",
    "Lipids are so energy-dense that a gram of fat yields about 37 kJ — more than double the 17 kJ per gram from carbohydrates or protein. That is why animals store long-term energy as fat, not starch.",
    "Starch is made of glucose monomers linked in long chains, but so is cellulose — the difference is only in the type of glycosidic bond (alpha vs beta). Humans can digest starch but cannot digest cellulose, even though they are made of identical subunits.",
    "The Benedict's test for reducing sugars turns from blue to brick-red because the sugar reduces copper(II) ions (Cu2+) to copper(I) oxide (Cu2O) — you are watching a redox reaction happen in a test tube.",
  ],
  experiments: [
    {
      title: "Extract and See Your Own DNA (from Strawberries or Bananas)",
      materials: [
        "2–3 ripe strawberries or half a ripe banana",
        "Small zip-lock bag or bowl",
        "1 teaspoon of table salt",
        "1 teaspoon of washing-up liquid",
        "100 ml of cold water",
        "Coffee filter paper or kitchen towel",
        "A tall narrow glass or test tube",
        "Ice-cold rubbing alcohol (isopropanol) — kept in the freezer for 20 minutes beforehand",
        "Tweezers or a wooden cocktail stick",
      ],
      steps: [
        "Place strawberries or banana in the zip-lock bag. Add the salt, washing-up liquid, and cold water.",
        "Seal the bag and gently squish the mixture for 1–2 minutes — do not create bubbles.",
        "Filter the mixture through coffee filter paper or kitchen towel into the tall glass. Collect 2–3 tablespoons of clear liquid.",
        "Gently pour cold isopropanol down the side of the glass so it forms a separate layer on top — do not mix.",
        "Wait 1–2 minutes. Watch for white stringy threads to appear at the alcohol-liquid boundary.",
        "Use tweezers or a cocktail stick to gently spool out the white strands — this is DNA.",
      ],
      science:
        "Crushing the fruit breaks cell walls. The detergent dissolves lipid cell membranes, releasing the cell contents. Salt causes proteins to clump together and precipitate, so the filtered liquid is rich in DNA. DNA is soluble in water but insoluble in cold alcohol — so when alcohol meets the aqueous DNA solution, the DNA precipitates out as visible white strands. Strawberries are ideal because they are octoploid (8 copies of each chromosome per cell), giving more DNA to see.",
      safety:
        "Isopropanol is flammable — keep away from flames. Do not drink. Wash hands after handling. Adult supervision recommended.",
    },
    {
      title: "Food Molecule Detectives: Testing for Starch and Sugars",
      materials: [
        "Iodine solution (from a pharmacy)",
        "Benedict's solution (optional — from a school science supplier or online)",
        "White plate or small dishes",
        "Foods to test: bread, apple slice, milk, potato, biscuit, onion",
        "Dropper or teaspoon",
        "Optional: access to a microwave or hot water for Benedict's test",
      ],
      steps: [
        "For the starch test: place a small sample of each food on the white plate. Add one drop of iodine solution to each sample.",
        "Record the colour change: blue-black indicates starch is present; orange-yellow means no starch.",
        "For the sugar test (if you have Benedict's solution): dissolve a small piece of food in a few ml of water in a cup.",
        "Add an equal volume of Benedict's solution and heat the mixture in a microwave for 30 seconds or place the cup in a bowl of very hot water.",
        "Record: blue = no reducing sugar; green/yellow/orange/brick-red = increasing amounts of reducing sugar.",
        "Compare your results with predictions — were any results surprising?",
      ],
      science:
        "Iodine molecules slot into the helical structure of amylose (a component of starch), forming a charge-transfer complex that absorbs light in the orange range and appears blue-black. This is a highly specific test for starch. Benedict's solution contains copper(II) sulfate; reducing sugars (like glucose and fructose) donate electrons to Cu2+ ions, reducing them to Cu2O, which is brick-red. The colour indicates the concentration of reducing sugar present. These are the same food tests used in professional nutrition laboratories.",
      safety:
        "Iodine stains skin and fabric. Benedict's solution is mildly corrosive — avoid skin contact and wash hands after use. If heating, take care with hot water or steam. Adult supervision recommended for the heating step.",
    },
  ],
};
