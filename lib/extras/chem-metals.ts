import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "chem-metals",
  hook:
    "The iron in your blood was forged inside a dying star billions of years ago — and right now, that same element is rusting your bike, holding up skyscrapers, and keeping you alive. Metals are the backbone of civilisation, and understanding their reactivity tells you exactly why.",
  didYouKnow: [
    "Potassium is so reactive it bursts into a lilac flame the instant it touches water — the heat of the reaction ignites the hydrogen gas produced, making it one of the most dramatic demonstrations in chemistry.",
    "Gold has been used continuously for over 7,000 years without corroding — archaeologists still find bright, shiny gold artefacts in Bronze Age tombs because gold sits at the very bottom of the reactivity series.",
    "The reactivity series was not invented by scientists — it was effectively discovered by metallurgists and blacksmiths over thousands of years of trial and error, long before anyone understood electrons or atomic structure.",
    "Aluminium is the most abundant metal in Earth's crust, yet humans only began extracting it in large quantities in the 1880s — before that, it was more expensive than gold because it was so hard to separate from its ore.",
    "Zinc is used to coat steel in a process called galvanising — even if the zinc coating is scratched and the steel is exposed, the zinc preferentially corrodes (sacrificial protection) because it is higher in the reactivity series, protecting the steel beneath.",
    "Copper was the first metal humans worked with extensively (the Copper Age predates the Bronze Age) precisely because native copper — pure copper metal — is found in the ground, requiring no smelting to extract.",
  ],
  experiments: [
    {
      title: "Build a Reactivity Series from Your Kitchen",
      materials: [
        "White vinegar (dilute ethanoic acid)",
        "Small dishes or egg cups (4–5)",
        "Small pieces of: iron (a nail or steel wool), copper (a coin or wire), zinc (galvanised nail), aluminium foil",
        "Optional: magnesium ribbon (from a school science kit)",
        "Magnifying glass",
      ],
      steps: [
        "Pour a small amount of white vinegar into each dish.",
        "Place one metal sample into each dish, ensuring the metal is fully submerged.",
        "Observe each dish immediately for bubbling (hydrogen gas production).",
        "Wait 15–30 minutes, then compare the amount of bubbling and any colour changes in the vinegar.",
        "Rank the metals from most reactive (most bubbling) to least reactive (no reaction).",
        "Record your observations and compare your ranking to the standard reactivity series.",
      ],
      science:
        "Metals above hydrogen in the reactivity series react with dilute acids to displace hydrogen gas: Metal + Acid → Salt + Hydrogen. The more reactive the metal, the faster and more vigorous the fizzing. Iron reacts slowly, zinc moderately quickly, magnesium very rapidly, while copper (below hydrogen) produces no bubbles at all. The colour change in the vinegar also reflects the metal salt dissolving into solution.",
      safety:
        "Vinegar is a mild acid — avoid touching your eyes and wash hands after. Do not use stronger acids. If using magnesium ribbon, keep quantities small (less than 1 cm) as the reaction with acid is vigorous. Adult supervision recommended for magnesium.",
    },
    {
      title: "Copper Displacement — Watching a Metal Born from Solution",
      materials: [
        "Copper sulfate solution (dissolve 1 teaspoon of copper sulfate crystals in 100 mL warm water) OR blue ink as a substitute",
        "Iron nail or steel wool",
        "A clear glass or beaker",
        "Paper towels",
      ],
      steps: [
        "Pour the blue copper sulfate solution into the glass.",
        "Place the iron nail or a small clump of steel wool into the solution.",
        "Leave undisturbed for 20–30 minutes.",
        "Carefully remove the iron and observe its surface with a magnifying glass.",
        "Notice the colour change of both the solution and the metal surface.",
        "Compare the starting blue colour of the solution to the final colour.",
      ],
      science:
        "This is a displacement reaction: Fe(s) + CuSO4(aq) → FeSO4(aq) + Cu(s). Because iron is more reactive than copper, iron atoms lose electrons (oxidise) and go into solution as Fe2+ ions, while Cu2+ ions in the solution gain those electrons (reduce) and deposit as solid copper metal on the nail's surface. The reddish-brown coating is pure copper metal. The solution turns from blue (Cu2+) to pale green (Fe2+) as the reaction proceeds.",
      safety:
        "Copper sulfate is an irritant and is toxic if swallowed. Wear gloves if available and wash hands thoroughly. Dispose of the solution by diluting heavily with water before pouring down the drain.",
    },
  ],
};
