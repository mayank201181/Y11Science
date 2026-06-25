import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "phys-nuclear",
  hook:
    "The iron in your blood and the calcium in your bones were forged inside a star that died before our Sun was born — every atom heavier than hydrogen in your body is stellar ash scattered by an ancient supernova. Nuclear physics is not abstract: it is the story of where matter itself comes from.",
  didYouKnow: [
    "Carbon-14 dating works because living organisms continuously absorb carbon from the atmosphere (including radioactive C-14 produced by cosmic rays). When an organism dies, C-14 stops being replenished and decays with a half-life of 5 730 years — allowing scientists to date organic material up to about 50 000 years old.",
    "The nucleus of an atom is extraordinarily dense: if you scaled a hydrogen atom up to the size of a sports stadium, the nucleus (a proton) would be about the size of a marble at the centre. Over 99.9999% of an atom's volume is empty space.",
    "Nuclear fusion powers the Sun: every second, the Sun converts about 620 million tonnes of hydrogen into 616 million tonnes of helium — the missing 4 million tonnes becomes energy via E = mc², releasing 3.8 × 10²⁶ joules per second.",
    "The most abundant naturally occurring radioactive element on Earth is radon, a colourless, odourless gas that seeps from granite rock into basements in some regions. It is the second-leading cause of lung cancer after smoking in the UK.",
    "Technetium-99m (an excited nuclear isomer) is the most widely used medical radioisotope: it emits only gamma radiation (no alpha or beta, so minimal tissue damage), has a 6-hour half-life so it decays quickly from the body, and is used in over 40 million diagnostic scans worldwide each year.",
    "Alpha particles are stopped by a sheet of paper or a few centimetres of air, yet they are the most ionising radiation — they cause intense local damage to DNA if an alpha-emitting source is inhaled or ingested, which is why radon gas is so dangerous indoors.",
  ],
  experiments: [
    {
      title: "Simulate Radioactive Decay with Dice",
      materials: [
        "100 standard six-sided dice (or use a free online dice-roller and record results in a table)",
        "A large tray or box lid to contain the dice",
        "Graph paper or a spreadsheet",
      ],
      steps: [
        "Place all 100 dice in the tray. These represent undecayed radioactive nuclei.",
        "Roll all the dice simultaneously and remove every die showing a 6 — these have 'decayed' in this time step (probability of decay = 1/6 per roll).",
        "Record the number of dice remaining after this roll in a table (Roll 0: 100, Roll 1: ?).",
        "Roll the remaining dice, again removing all 6s. Record the new count.",
        "Repeat for at least 20 rolls or until fewer than 5 dice remain.",
        "Plot 'number of dice remaining' (y-axis) against 'roll number' (x-axis).",
        "On the same graph, draw the theoretical curve: N = 100 × (5/6)^n where n is the roll number.",
        "Estimate your experimental half-life (the roll number at which roughly 50 dice remain) and compare with the theoretical value: log(0.5) / log(5/6) ≈ 3.8 rolls.",
      ],
      science:
        "Each die represents a nucleus, and rolling a 6 represents the random probability of decay in one time interval. Because radioactive decay is a random process with a fixed probability per unit time, the number of undecayed nuclei decreases exponentially — exactly as real radioactive samples do. The graph should closely follow N = N₀(5/6)^n, the discrete analogue of the continuous decay equation N = N₀e^(−λt). With 100 dice the graph is smooth; with only 10 it would be jagged — showing why small samples display more statistical scatter (noise) than large ones. This captures the stochastic nature of nuclear decay that makes individual decays unpredictable while bulk behaviour is highly predictable.",
      safety: "No hazards — dice only.",
    },
    {
      title: "Explore Penetrating Power with Paper and Cardboard",
      materials: [
        "A Geiger counter app on a smartphone (e.g. 'GQ GMC' paired with a GMC-300 detector, or use a school Geiger counter)",
        "Alternatively: use a free online simulation of a Geiger counter experiment (search 'PHET radiation simulation')",
        "If using a real detector: sheets of paper, cardboard, and a thin piece of aluminium foil",
        "Notebook to record counts per minute (CPM)",
      ],
      steps: [
        "Record the background count rate (CPM) with no source present for two minutes. Average the readings.",
        "If using a simulation: open the PhET 'Alpha Decay' or 'Nuclear Fission' simulation and explore the penetration section.",
        "If using a real detector near a safe check source (school setting): measure CPM with no shielding, then add one sheet of paper and remeasure, then five sheets, then cardboard, then aluminium foil.",
        "Record all readings and subtract the background count to obtain the corrected count rate.",
        "Plot shielding thickness against corrected CPM and describe the pattern.",
        "Research: what thickness of lead is needed to halve gamma radiation? (Answer: roughly 1 cm of lead for common gamma emitters.)",
      ],
      science:
        "The three types of nuclear radiation differ dramatically in penetrating power, directly linked to their ionising ability. Alpha particles (helium-4 nuclei) are large, doubly charged, and interact strongly with matter — they are stopped by a sheet of paper or 5 cm of air. Beta particles (fast electrons) penetrate paper but are stopped by a few mm of aluminium. Gamma rays (high-energy photons) have no charge or mass and require several cm of lead or metres of concrete for significant attenuation. This inverse relationship (high ionising power = low penetrating power) follows from how strongly each particle interacts with electrons in matter.",
      safety:
        "Only use sealed, school-approved radioactive sources or PhET online simulations. Never handle open radioactive sources. Smartphone Geiger counter apps alone (without a detector module) measure nothing meaningful and are for illustration only.",
    },
  ],
  interactive: "half-life",
};
