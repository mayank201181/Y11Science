import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "bio-human-nutrition",

  hook:
    "Your small intestine, if spread flat, would cover half a tennis court — all that surface area exists for one purpose: absorbing the nutrients that every cell in your body depends on. The digestive system is essentially a 9-metre-long chemical factory running 24 hours a day.",

  didYouKnow: [
    "The lining of the small intestine is replaced entirely roughly every 2–4 days — one of the fastest cell-renewal rates in the human body, because the cells are constantly battered by digestive enzymes.",
    "Bile is not an enzyme; it is an emulsifier produced by the liver and stored in the gallbladder. It breaks fat globules into tiny droplets, massively increasing the surface area for lipase to act on.",
    "Amylase is present in saliva, which means carbohydrate digestion begins in your mouth — you can taste this if you chew plain bread for a minute or two and notice it becoming slightly sweet as starch converts to maltose.",
    "The appendix, long considered vestigial, is now thought to act as a reservoir of beneficial gut bacteria that can help repopulate the large intestine after infection.",
    "Vitamin C cannot be stored in the body — it is water-soluble and any excess is excreted in urine — which is why a continuous dietary supply is essential to prevent scurvy.",
    "Iron from plant sources (non-haem iron) is absorbed far less efficiently than iron from meat (haem iron), but vitamin C consumed in the same meal chemically converts non-haem iron into a more absorbable form."
  ],

  experiments: [
    {
      title: "Emulsification of Fat with Washing-Up Liquid",
      materials: [
        "Two small clear jars or glasses with lids (or cling film to cover)",
        "Cooking oil (about 2 tablespoons per jar)",
        "Water",
        "A drop of washing-up liquid (representing the emulsifying action of bile salts)",
        "Food colouring (optional, to make water visible)"
      ],
      steps: [
        "Pour an equal amount of water and oil into each jar (roughly 50 ml each).",
        "Add a drop of food colouring to the water if using it.",
        "Label one jar 'control' and one jar 'bile model'.",
        "Seal both jars and shake each vigorously for 10 seconds.",
        "Set both jars down and observe for 30 seconds — the oil and water in both will separate, but note how quickly.",
        "Now add one drop of washing-up liquid to the 'bile model' jar only, seal it, and shake again for 10 seconds.",
        "Compare the two jars. The bile-model jar should remain cloudy and milky for much longer as tiny oil droplets stay suspended."
      ],
      science:
        "Bile salts are amphiphilic molecules — they have a water-attracting end and a fat-attracting end — just like the surfactants in washing-up liquid. They coat tiny oil droplets and prevent them from coalescing, a process called emulsification. This is not digestion (no covalent bonds are broken), but it increases the surface area available for lipase to hydrolyse triglycerides into fatty acids and glycerol.",
      safety:
        "Washing-up liquid is a mild irritant; wash hands after handling and do not ingest the mixture."
    },
    {
      title: "Testing Food Samples for Starch and Glucose",
      materials: [
        "Small samples of: bread, apple, raw potato, plain pasta (cooked), and plain biscuit",
        "Iodine solution (available from pharmacies or school science kits)",
        "Benedict's solution (blue) — from a school kit or online science supplier",
        "A heatproof bowl of very hot water from a kettle",
        "A white tile or white plate",
        "Dropper or pipette",
        "Small test tubes or shot glasses"
      ],
      steps: [
        "Crush or mash each food sample slightly and place a small amount on separate areas of the white tile.",
        "Add 2 drops of iodine solution to each sample. Blue-black = starch present; orange-brown = no starch. Record results.",
        "For the glucose test, dissolve a small amount of each food in a little water in separate test tubes.",
        "Add 10 drops of Benedict's solution to each test tube.",
        "Place all test tubes in the bowl of very hot water and leave for 3–5 minutes.",
        "A colour change from blue to green, yellow, orange, or brick-red indicates reducing sugars (including glucose) — the more sugar present, the further the colour shifts toward red."
      ],
      science:
        "Iodine tests for starch because iodine molecules slot into the helical coils of amylose (a component of starch), forming a blue-black complex. Benedict's test detects reducing sugars: glucose reduces the copper(II) ions in the blue Benedict's solution to copper(I) oxide, a brick-red precipitate. Foods with high starch content (potato, bread, pasta) will test positive for starch; ripe apple contains mostly fructose and glucose so will show a strong Benedict's result but little starch.",
      safety:
        "Iodine will stain skin and fabrics. Use adult supervision when handling hot water. Do not allow boiling water to splash. Benedict's solution is a mild irritant — wash hands if contact occurs."
    }
  ]
};
