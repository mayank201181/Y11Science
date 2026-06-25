import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "bio-transport-cell",
  hook:
    "Without osmosis, a freshwater fish placed in the sea would shrivel and die within minutes — and a marine fish dropped into a river would burst. The same invisible water movement happening across cell membranes is keeping every cell in your body from meeting the same fate right now.",
  didYouKnow: [
    "Osmosis is powerful enough to lift water to the tops of the tallest trees — the giant sequoia can be over 80 m tall, and no pump drives the water up; osmotic pressure and transpiration pull does the work.",
    "Red blood cells placed in pure water swell and burst (lyse) within seconds, because water floods in by osmosis down a massive concentration gradient — this is why IV drips must use saline solution, not pure water.",
    "Active transport allows cells to move molecules against their concentration gradient, but it costs energy — about 30% of all the ATP your body makes is spent just running the sodium-potassium pumps in nerve and muscle cells.",
    "The pressure a solution exerts due to osmosis (osmotic pressure) can be enormous: a concentrated sugar solution can generate osmotic pressures exceeding 30 atmospheres — enough to push water up a 300 m column.",
    "Facilitated diffusion uses protein channels called aquaporins to move water across membranes up to a billion molecules per second per channel — much faster than simple diffusion through the lipid bilayer.",
    "Plant cell turgor pressure, created by osmosis, is what makes a fresh salad crisp; a wilted lettuce has lost turgor because water has left the cells.",
  ],
  experiments: [
    {
      title: "Osmosis in Potato Strips",
      materials: [
        "1 medium potato",
        "Sharp knife and chopping board (ask an adult to help)",
        "Ruler",
        "3 glasses or cups",
        "Table salt",
        "Water",
        "Weighing scales or a ruler to measure length",
      ],
      steps: [
        "Cut 6 potato strips of identical size — approximately 5 cm long and 1 cm wide. Remove the skin.",
        "Label three cups: 'Pure water', 'Weak salt' (1 teaspoon salt per 200 ml), 'Strong salt' (3 teaspoons salt per 200 ml).",
        "Place 2 strips in each cup, ensuring they are fully submerged.",
        "Leave for at least 30 minutes (1 hour gives clearer results).",
        "Remove the strips, pat them dry gently, and measure or weigh each one.",
        "Compare the results: record whether each strip is softer or firmer than the original, and note any change in length or mass.",
      ],
      science:
        "Potato cells contain a solution of sugars and salts. In pure water, the solution inside the cell is more concentrated than outside, so water enters the cell by osmosis — the strip becomes turgid and firm, and may increase in mass. In the strong salt solution, the external solution is more concentrated, so water leaves the cells by osmosis — the strip becomes flaccid, soft, and may lose mass. In weak salt solution, results may be intermediate. This directly demonstrates how osmosis depends on relative concentration gradients across a partially permeable membrane.",
      safety:
        "Ask an adult to help with the knife. No other significant hazards.",
    },
    {
      title: "Diffusion of Food Colouring in Hot vs Cold Water",
      materials: [
        "2 clear glasses or jars",
        "Hot water (from a tap — not boiling)",
        "Cold water (add ice cubes if available)",
        "Food colouring (any colour)",
        "A dropper or teaspoon",
      ],
      steps: [
        "Fill one glass with hot tap water and one with cold water. Let them settle for 30 seconds so there is no movement.",
        "Carefully add one drop of food colouring to the centre of each glass — try not to stir.",
        "Observe both glasses without disturbing them for 2–3 minutes.",
        "Record which glass shows faster spreading of the colour and describe the pattern.",
      ],
      science:
        "Diffusion is the net movement of particles from a region of high concentration to low concentration down a concentration gradient. The rate of diffusion increases with temperature because molecules have more kinetic energy and move faster. In the hot water, food colouring molecules spread visibly faster than in cold water, demonstrating this relationship. This is the same principle that controls how quickly oxygen diffuses from alveoli into blood, or glucose moves across the gut wall — temperature and concentration gradient are key factors.",
      safety: "Use hot tap water only, not boiling water. No other hazards.",
    },
  ],
};
