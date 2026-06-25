import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "chem-acids-bases",

  hook:
    "Your stomach acid is strong enough to dissolve a razor blade, yet just a few centimetres away your intestinal lining is bathed in alkaline fluid — the human body is a masterclass in pH management. From the sharp tang of vinegar (pH 2.4) to the slippery feel of soapy water (pH 10), acids and bases shape almost every flavour, texture, and chemical process you encounter daily.",

  didYouKnow: [
    "The pH scale is logarithmic: pH 3 is ten times more acidic than pH 4, and one hundred times more acidic than pH 5. A seemingly small change in pH number represents a huge change in hydrogen ion concentration.",
    "Acids release H⁺ ions (protons) in water; bases accept them. The Brønsted–Lowry model extends this beyond water, explaining reactions in solvents like ammonia or even no solvent at all.",
    "Pure water is never truly neutral — it self-ionises slightly, giving [H⁺] = 10⁻⁷ mol/L at 25 °C. At 37 °C (body temperature), neutrality actually sits at about pH 6.8, not 7.0.",
    "Antacid tablets work by containing a weak base (calcium carbonate, magnesium hydroxide) that neutralises excess stomach acid — the fizz you hear is CO₂ produced as the carbonate reacts with HCl.",
    "Some fish can survive in lake water that has turned acidic (pH below 5) due to acid rain, but most aquatic organisms cannot — a drop from pH 7 to pH 5 represents a hundredfold increase in acidity.",
    "Universal indicator paper was invented by Yamada Kazuyuki in 1933, but chemists had observed colour changes in plant extracts (including red cabbage) as far back as the 17th century.",
  ],

  experiments: [
    {
      title: "Red cabbage pH indicator",
      materials: [
        "A few leaves of red cabbage",
        "Boiling water or a microwave",
        "Strainer or coffee filter",
        "6–8 small clear cups or glasses",
        "Household test substances: lemon juice, vinegar, bicarbonate of soda solution, soap solution, milk, tap water, cola",
      ],
      steps: [
        "Roughly chop 3–4 cabbage leaves and place in a heatproof jug.",
        "Pour 300 ml of boiling water over the cabbage (ask an adult to help). Leave for 10 minutes, then strain out the leaves. You now have a purple indicator solution.",
        "Pour about 20 ml of indicator into each small cup.",
        "Add a small amount (1 teaspoon) of each test substance to a separate cup and stir.",
        "Observe and record the colour: bright red/pink = very acidic; purple = neutral; green/yellow = alkaline.",
        "Arrange your substances in order from most acidic to most alkaline and estimate their pH using the colour guide.",
      ],
      science:
        "Red cabbage contains anthocyanin pigments that change shape — and therefore colour — depending on the concentration of H⁺ ions (pH). In acidic solution, excess protons protonate the molecule, shifting its colour toward red. In alkaline solution, the pigment loses protons and the colour shifts toward green or yellow. This is identical in principle to the behaviour of universal indicator. The experiment illustrates the Arrhenius definition of acids (H⁺ donors) and bases (OH⁻ donors) in a visual, memorable way.",
      safety:
        "Boiling water must be handled by an adult. The cabbage juice will stain clothing and surfaces — use an apron and work on a washable surface. All household test substances are safe at the quantities used; avoid tasting the mixtures once you've added cleaning products.",
    },
    {
      title: "Neutralisation: making your own antacid",
      materials: [
        "Diluted white vinegar (2 tablespoons in 100 ml water) — this is your 'stomach acid'",
        "Bicarbonate of soda (baking soda)",
        "Red cabbage indicator (made in the experiment above) or universal indicator paper",
        "Teaspoon",
        "Clear glass",
        "Stirring rod or spoon",
      ],
      steps: [
        "Pour the diluted vinegar into the glass. Test its colour with a few drops of cabbage indicator — it should turn red/pink.",
        "Add a tiny pinch (about 1/4 teaspoon) of bicarbonate of soda and stir. Watch for fizzing (CO₂ being released).",
        "Test the colour again. If still acidic (red), add another small pinch and stir.",
        "Continue adding tiny amounts until the indicator shows purple (neutral, around pH 7).",
        "Record how much bicarbonate was needed and note the colour changes at each stage.",
        "If you overshoot to green/yellow, discuss what happened in terms of acid–base chemistry.",
      ],
      science:
        "Acetic acid (in vinegar) reacts with sodium bicarbonate in a neutralisation reaction: CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂. The H⁺ from the acid reacts with the HCO₃⁻ (which acts as a base, accepting protons), forming water and carbon dioxide gas. When all the acid is neutralised the pH rises to ~7. Exactly the same chemistry occurs in your stomach when you take an antacid tablet. The indicator tracks the pH change throughout, making the endpoint visible.",
      safety:
        "Diluted vinegar and bicarbonate of soda are both safe food-grade substances. Avoid getting indicator solution on clothing. Perform over a sink or on a tray in case of spillage from fizzing.",
    },
  ],

  interactive: "ph-slider",
};
