import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "bio-inheritance",

  hook:
    "You are a walking archive of roughly 20,000 genes — a mosaic stitched together from two parents, four grandparents, and thousands of ancestors stretching back millions of years. Understanding inheritance is understanding why you have your grandmother's eyes and your father's blood type.",

  didYouKnow: [
    "Gregor Mendel studied roughly 29,000 pea plants over eight years in a monastery garden — and his meticulous records were so detailed that modern statisticians argue the results are almost too clean, suggesting he may have unconsciously selected data that fit his hypothesis.",
    "You share about 50% of your DNA with a banana plant. All eukaryotes share core genes for cell division, energy production, and protein synthesis because we share a common ancestor over a billion years ago.",
    "Blood type is controlled by three alleles (I^A, I^B, i) at one gene locus — making it one of the clearest real-world examples of codominance (AB blood type) and multiple alleles in humans.",
    "Huntington's disease is caused by a dominant allele, which means a single copy causes the condition. Because symptoms appear in mid-adulthood (after typical reproductive age), the allele has not been eliminated by natural selection — a striking example of how selection pressure weakens after reproductive age.",
    "The human genome contains approximately 3 billion base pairs, but only about 1.5% codes for proteins. The rest includes regulatory sequences, introns, and sequences from ancient viral infections (endogenous retroviruses make up about 8% of your genome).",
    "Sex determination in humans relies on the SRY gene on the Y chromosome. Rare cases exist where SRY moves to an X chromosome during meiosis, producing XX males — demonstrating that chromosomal sex and genetic sex can diverge.",
  ],

  experiments: [
    {
      title: "Coin-flip inheritance — simulating Mendelian ratios",
      materials: [
        "2 coins",
        "Pencil and paper or a tally chart",
        "Optional: coloured counters (2 colours) to represent alleles",
      ],
      steps: [
        "Label one coin 'Parent 1' and the other 'Parent 2'. Heads = dominant allele (A), tails = recessive allele (a). This models two heterozygous parents (Aa × Aa).",
        "Flip both coins simultaneously. Record the combination: HH = AA, HT or TH = Aa, TT = aa.",
        "Repeat 40 times, tallying each genotype.",
        "Calculate your observed ratios: count AA : Aa : aa. Convert to a ratio with aa = 1 (e.g. 10 AA : 21 Aa : 9 aa ≈ 1.1 : 2.3 : 1).",
        "Compare with the expected 1:2:1 genotype ratio and 3:1 phenotype ratio (dominant : recessive).",
        "Repeat with 100 flips and compare. Notice how larger samples get closer to the theoretical ratio — this is the law of large numbers in action.",
        "Extension: use two different coins (e.g. a 1p and a 2p) to model a dihybrid cross (AaBb × AaBb) and tally the four phenotype combinations. Expected: 9:3:3:1.",
      ],
      science:
        "Each coin flip models meiosis: gametes carry one allele chosen randomly from each parent's two alleles (the law of segregation). The random combination of two gametes at fertilisation generates the Mendelian ratios. The activity also demonstrates sampling error — small sample sizes can deviate significantly from expected ratios, which is why Mendel needed thousands of plants to see clean results. Biological inheritance follows the same probability rules as coin flips because allele segregation and random fertilisation are genuinely random events.",
      safety: "No hazards — coins and paper only.",
    },
    {
      title: "Extracting your own DNA (from cheek cells)",
      materials: [
        "A small cup of cold water",
        "1 teaspoon of washing-up liquid (dish soap)",
        "A pinch of table salt",
        "Chilled isopropyl alcohol (rubbing alcohol) — or very cold surgical spirit. Must be at least 70%.",
        "A clear glass or small jar",
        "A wooden skewer, toothpick, or cocktail stick",
      ],
      steps: [
        "Mix 50 ml of cold water, 1 teaspoon of washing-up liquid, and a pinch of salt in the glass. This is your extraction buffer.",
        "Swish 2 teaspoons of cold water vigorously around your mouth for 60 seconds to collect cheek cells. Spit into the extraction buffer.",
        "Stir gently (do not froth) for 2 minutes. The soap breaks open cell membranes; salt causes the DNA to clump by neutralising its negative charge.",
        "Slowly pour chilled isopropyl alcohol down the inside of the glass so it forms a separate layer on top (tilt the glass at 45° and pour slowly).",
        "Wait 1–2 minutes. A white, stringy, mucus-like precipitate will form at the alcohol–water boundary — this is your DNA (with proteins).",
        "Gently spool the strands onto a toothpick and observe.",
      ],
      science:
        "Cheek cells shed naturally from the inside of your mouth. The detergent (sodium lauryl sulphate in dish soap) dissolves the lipid bilayer of cell and nuclear membranes, releasing the DNA. Salt (NaCl) provides positive sodium ions that neutralise the negative phosphate backbone of DNA, causing strands to come closer together. Alcohol is added because DNA is insoluble in ethanol/isopropanol but soluble in the water below — the DNA precipitates visibly at the interface. What you see is millions of DNA molecules tangled together, not a single strand.",
      safety:
        "Isopropyl alcohol is flammable — keep away from flames or sparks. Do not ingest. Conduct in a well-ventilated space. Adult supervision recommended when handling alcohol. Dish soap is a mild irritant — wash hands after.",
    },
  ],
};
