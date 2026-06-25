import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "chem-stoichiometry",

  hook:
    "Every rocket launch, every tablet of aspirin, and every breath of air you exhale involves stoichiometry — the precise arithmetic of atoms. Get the ratio wrong by even a fraction and the result could be an engine explosion, a failed drug synthesis, or a chemical plant producing tonnes of expensive waste. Stoichiometry is the accountancy that makes chemistry work.",

  didYouKnow: [
    "Avogadro's number (6.022 × 10²³) is so large that if you had that many grains of sand, you could cover all the continents on Earth to a depth of several centimetres. Yet chemists work with this many particles in just one mole of any substance.",
    "The molar mass of a substance in grams per mole is numerically equal to its relative molecular mass — so if you know the Mr of water is 18, you immediately know that 18 g of water contains exactly one mole (6.022 × 10²³ molecules).",
    "The Haber process for making ammonia (N2 + 3H2 → 2NH3) feeds roughly half the world's population: without the nitrogen fertilisers produced from synthetic ammonia, current crop yields could not sustain 8 billion people.",
    "Percentage yield is rarely 100% in industry because reactions may be reversible, side reactions occur, or product is lost during purification — pharmaceutical companies achieving 80% yield over a 10-step synthesis still end up with only 0.8^10 ≈ 11% of theoretical product, which is why drugs cost so much to develop.",
    "Atom economy was invented by Barry Trost in 1991 as a 'green chemistry' metric: a reaction that produces a single desired product from all its atoms has 100% atom economy, while a reaction that makes large amounts of by-product wastes resources and creates pollution.",
    "Empirical formulas can be determined from combustion analysis: burning an organic compound and measuring the masses of CO2 and H2O produced lets chemists work backwards to find the ratio of carbon to hydrogen to other elements — a technique used routinely to identify new compounds."
  ],

  experiments: [
    {
      title: "Measuring percentage yield: making copper sulfate crystals",
      materials: [
        "Copper carbonate powder (from a school supplier or hobby chemistry kit; ~2 g)",
        "Dilute sulfuric acid (10% solution from a kit, ~25 cm3)",
        "Small saucepan or heat-proof glass",
        "Coffee filter or filter paper",
        "Kitchen scales accurate to 0.1 g",
        "Spoon"
      ],
      steps: [
        "Weigh exactly 2.0 g of copper carbonate and record the mass.",
        "Slowly add the copper carbonate to 25 cm3 of dilute sulfuric acid a little at a time, stirring after each addition. Fizzing (CO2) confirms the reaction: CuCO3 + H2SO4 → CuSO4 + H2O + CO2.",
        "Continue adding copper carbonate until fizzing stops (this ensures the acid is fully used — it is the limiting reagent you control).",
        "Filter the solution to remove any unreacted solid. Collect the clear blue filtrate.",
        "Leave the filtrate in a warm place (a sunny windowsill or near a radiator) for 24–48 hours to allow slow evaporation and crystal growth.",
        "Collect the blue crystals, pat them dry on paper, and weigh them.",
        "Calculate theoretical yield using moles: moles of CuCO3 = 2.0 / 123.5 = 0.0162 mol; moles CuSO4 = same; theoretical mass = 0.0162 × 159.6 ≈ 2.59 g. Calculate percentage yield = (actual / theoretical) × 100."
      ],
      science:
        "This experiment illustrates the entire stoichiometry chain: balanced equation → mole ratio → theoretical yield → percentage yield. The blue colour of the solution and crystals comes from the Cu2+ ion. Losses occur because some solution sticks to the filter, some crystals remain dissolved, and slow evaporation is incomplete — explaining why percentage yield is below 100%.",
      safety:
        "Dilute sulfuric acid is irritating to skin and eyes — wear safety glasses and gloves. Copper compounds are toxic if ingested; wash hands after handling. Adult supervision recommended if using any heat source to speed evaporation."
    },
    {
      title: "Finding the empirical formula of copper oxide by reduction",
      materials: [
        "Black copper oxide powder (~1 g, available from school chemistry sets)",
        "Small metal tray or crucible that can be heated",
        "Tea-light candle or small spirit lamp",
        "Kitchen scales accurate to 0.01 g",
        "Spoon",
        "Tongs or oven gloves"
      ],
      steps: [
        "Weigh the empty tray and record the mass.",
        "Add about 1 g of black copper oxide to the tray and weigh again. Record the mass of copper oxide = (tray + oxide) − tray.",
        "Heat the copper oxide gently over the candle flame for 5 minutes, occasionally stirring with the spoon so all the powder is exposed to heat.",
        "As the copper oxide is reduced by carbon (from combustion products), you may notice some colour change — but note: a candle alone may not fully reduce it; this step demonstrates the principle and what partial reduction looks like.",
        "Allow to cool and weigh the tray again. Any mass lost is oxygen that left as CO2 or water vapour.",
        "Calculate: mass of oxygen lost = initial oxide mass − final mass. Mass of copper remaining = final mass − tray. Find the ratio: moles of Cu = mass / 63.5; moles of O = mass lost / 16. Simplest ratio gives empirical formula."
      ],
      science:
        "Copper oxide (CuO) contains Cu2+ and O2− in a 1:1 ratio, so its empirical formula is CuO. By measuring mass before and after, you can calculate the mass of oxygen present and use molar mass values to find the mole ratio — exactly the same method used in industry to identify unknown compounds. The mass ratio Cu:O should be approximately 63.5:16 ≈ 4:1 by mass, confirming CuO.",
      safety:
        "Use tongs to handle hot metal tray. Keep flammable materials away from the candle. Copper oxide is harmful if inhaled — work in a well-ventilated area and avoid creating dust. Wash hands thoroughly after handling."
    }
  ]
};
