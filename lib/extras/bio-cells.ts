import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "bio-cells",
  hook:
    "Every living thing on Earth — from the bacterium clinging to your skin to the blue whale cruising the ocean — is built from cells. Right now, 37 trillion of them are working in perfect coordination to keep you alive and reading this.",
  didYouKnow: [
    "The human body contains roughly 37 trillion cells, but also carries around 38 trillion bacterial cells — meaning you are, by cell count, slightly more microbe than human.",
    "The largest known single cell is the ostrich egg yolk, which can measure about 8 cm across and is still technically one cell.",
    "Neurons in your cerebral cortex can be over a metre long when you include their axon — making them the longest cells in the human body.",
    "A typical human cell replaces itself roughly every 7–10 years on average, though some neurons in the cerebral cortex last an entire lifetime.",
    "Plant cells have rigid cell walls made of cellulose — the same material that makes up cotton and paper — giving them structural strength without a skeleton.",
    "Mitochondria have their own separate DNA (circular, like bacterial DNA), strong evidence that they were once free-living bacteria engulfed by a host cell over 1.5 billion years ago.",
  ],
  experiments: [
    {
      title: "Observe Onion Cells Under a Makeshift Microscope",
      materials: [
        "Half an onion",
        "Sharp knife and chopping board (ask an adult)",
        "Tweezers or fingernails",
        "A drop of iodine solution (from a pharmacy)",
        "A clear glass slide or a piece of cling film stretched flat",
        "A magnifying glass or phone macro lens clip",
      ],
      steps: [
        "Peel away one layer of onion and locate the thin, papery inner membrane on the concave side.",
        "Use tweezers to carefully peel off a small piece of this transparent membrane (about 1 cm square).",
        "Lay it flat on your slide or cling film — avoid wrinkles.",
        "Place one small drop of iodine solution on the membrane to stain the cell walls and nuclei.",
        "Hold the slide up to natural light and examine it through the magnifying glass or phone macro lens.",
        "Sketch what you see — look for the rectangular cell walls forming a brick-like pattern, and darker-stained nuclei.",
      ],
      science:
        "Onion epidermal cells are large, regularly shaped, and almost colourless, making them ideal for microscopy. Iodine reacts with starch and proteins, staining the cell wall and nucleus a yellow-brown colour and making them visible. You can clearly see the cell wall, cell membrane (pressed against the wall), cytoplasm, and nucleus — all key plant cell structures.",
      safety:
        "Ask an adult to help with the knife. Iodine stains skin and fabric — handle carefully and wash hands afterwards. Avoid contact with eyes.",
    },
    {
      title: "Model Cell Membranes with Washing-Up Liquid",
      materials: [
        "A bowl of water",
        "A few drops of washing-up liquid",
        "A thin straw or wire loop",
        "Optional: glycerine (from a pharmacy) to make bubbles last longer",
      ],
      steps: [
        "Mix 1 part washing-up liquid with 6 parts water in the bowl. Add a small splash of glycerine if you have it.",
        "Dip the straw or wire loop into the mixture and blow slowly to create a bubble.",
        "Observe the bubble surface — notice it is two-layered (a soap bilayer) just like a phospholipid bilayer.",
        "Try gently touching the bubble with a dry finger versus a wet finger and record what happens.",
        "Observe colour swirls on the bubble surface — these show the extremely thin bilayer.",
      ],
      science:
        "Soap molecules are amphipathic — they have a water-loving (hydrophilic) head and a water-hating (hydrophobic) tail. In a bubble, two layers of soap molecules arrange tail-to-tail with a thin film of water between them, forming a bilayer. This is structurally identical to the phospholipid bilayer of a cell membrane. The colour swirls (thin-film interference) reveal the membrane is only nanometres thick. A wet finger does not pop the bubble because it is compatible with the hydrophilic surface — just like how polar molecules can pass through the membrane.",
      safety: "No significant hazards. Keep soap solution away from eyes.",
    },
  ],
};
