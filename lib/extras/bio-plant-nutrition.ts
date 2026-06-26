import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "bio-plant-nutrition",

  hook:
    "Every mouthful of food you eat traces back to a leaf catching sunlight — plants are the solar panels that power almost every food chain on Earth. Without photosynthesis, the oxygen in your next breath simply would not exist.",

  didYouKnow: [
    "A single large oak tree can absorb around 100 kg of carbon dioxide per year and release enough oxygen to support roughly two adult humans.",
    "Plants do not 'eat' soil — the dry mass of a tree comes almost entirely from carbon dioxide in the air, a fact first demonstrated by Jan Baptist van Helmont's willow experiment in the 1640s.",
    "Chlorophyll looks green because it absorbs red and blue light for photosynthesis but reflects green wavelengths back to your eyes — the colour is essentially the plant's waste light.",
    "The overall rate of photosynthesis on Earth is so vast that plants and algae collectively fix around 120 billion tonnes of carbon per year, cycling it through the biosphere.",
    "Some deep-sea bacteria perform chemosynthesis — producing organic molecules using chemical energy rather than light — proving that photosynthesis is not the only route into a food chain.",
    "Aquatic plants such as pondweed produce measurable streams of oxygen bubbles in bright light, making photosynthesis one of the few biological processes you can watch in real time."
  ],

  experiments: [
    {
      title: "Counting Oxygen Bubbles from Pondweed",
      materials: [
        "A sprig of aquatic pondweed (Elodea or Cabomba, from a pet shop)",
        "A clear glass or beaker of water",
        "A desk lamp with an adjustable distance",
        "A ruler",
        "A timer or stopwatch",
        "Optional: a small pinch of baking soda to add CO2 to the water"
      ],
      steps: [
        "Half-fill the beaker with tap water. If using baking soda, dissolve a small pinch to boost dissolved CO2.",
        "Place the pondweed stem-down in the beaker so bubbles rise freely from the cut end.",
        "Position the lamp 10 cm from the beaker and wait 2 minutes for the plant to acclimatise.",
        "Count the number of bubbles produced in 1 minute and record it as your result for 10 cm.",
        "Move the lamp to 20 cm, wait 1 minute, then count bubbles for 1 minute again.",
        "Repeat at 30 cm and 40 cm.",
        "Plot distance (x-axis) against bubbles per minute (y-axis) — you should see bubble rate fall as distance increases, because light intensity follows an inverse-square relationship."
      ],
      science:
        "Each bubble is almost pure oxygen, a product of the light-dependent reactions where water molecules are split (photolysis). Light intensity decreases with the square of distance, so the rate of the light-dependent stage — and therefore oxygen output — drops as you move the lamp away. This is a classic demonstration of light intensity as a limiting factor for photosynthesis.",
      safety:
        "The lamp may become warm; do not leave it unattended and keep it away from water. Use a low-wattage LED lamp if possible."
    },
    {
      title: "Starch Test on a Variegated Leaf",
      materials: [
        "One variegated (green and white) leaf from a plant such as a spider plant or privet — collect from a garden or houseplant",
        "Boiling water in a kettle (adult supervision required)",
        "A heatproof bowl",
        "A small saucepan and ethanol or methylated spirits (for decolourising — adult required)",
        "Iodine solution (from a pharmacy or school kit)",
        "Tweezers"
      ],
      steps: [
        "Draw an outline of the leaf, shading in the green and white areas for comparison later.",
        "With adult help, dip the leaf in boiling water for 30 seconds to kill cells and stop enzyme reactions.",
        "Place the softened leaf in a small amount of ethanol in the saucepan. An adult should gently warm it in a water bath (saucepan of hot water) — NOT over a naked flame — until the leaf is pale yellow and the ethanol is green.",
        "Rinse the decolourised leaf gently in warm water to soften it.",
        "Spread the leaf flat and add drops of iodine solution across its surface.",
        "Observe: green areas should turn blue-black (starch present); white areas should remain orange-brown (no starch)."
      ],
      science:
        "Chloroplasts are only present in the green parts of a variegated leaf. Because photosynthesis requires chlorophyll, only the green regions can fix carbon dioxide into glucose and then convert it to stored starch. The white regions lack chloroplasts entirely, so no starch accumulates — exactly matching the pattern you coloured at the start. Iodine turns blue-black in the presence of starch (amylose), acting as a colour indicator.",
      safety:
        "Ethanol is flammable — never heat it directly over a gas or candle flame; always use a hot-water bath. Adult supervision is required for the heating step. Iodine can stain skin and fabrics."
    }
  ],

  interactive: "photosynthesis-rate"
};
