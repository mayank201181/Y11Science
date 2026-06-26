import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "chem-periodic",
  hook:
    "In 1869 Dmitri Mendeleev arranged the 63 known elements by atomic mass and left deliberate gaps — then predicted the properties of undiscovered elements with such accuracy that when gallium was found in 1875 it matched his 'eka-aluminium' almost perfectly. The periodic table isn't just a list; it's one of science's greatest predictive tools.",
  didYouKnow: [
    "Mendeleev's original table was arranged by atomic mass, but it had a few anomalies. Henry Moseley's X-ray experiments in 1913 showed atomic number (proton count) is the true organising principle — fixing the order and explaining why argon (Ar, mass 40) comes before potassium (K, mass 39).",
    "Group 1 metals (alkalis) are stored under oil because they react so violently with moisture in the air. Caesium reacts explosively with water at room temperature and even ignites spontaneously in air.",
    "Helium was first discovered in the Sun via spectroscopy in 1868 — 27 years before it was isolated on Earth. Its name comes from 'Helios', the Greek sun god.",
    "The periodic table currently has 118 confirmed elements. Elements with atomic numbers above 92 (uranium) do not occur naturally on Earth and have all been created artificially in particle accelerators, usually lasting only fractions of a second before decaying.",
    "Reactivity trends are predictable from the table: metals become more reactive going down a group (outer electrons are further from the nucleus and easier to lose), while non-metals become more reactive going up a group (smaller atoms attract electrons more strongly).",
    "Period 3 contains eight elements from sodium to argon whose properties shift from very metallic (sodium, a soft reactive solid) through a semiconductor (silicon) to a non-reactive gas (argon) — a perfect illustration of how physical and chemical properties change across a period."
  ],
  experiments: [
    {
      title: "Reactivity series investigation: metals and acid",
      materials: [
        "Small pieces of zinc (from a hardware store or old batteries casing)",
        "Copper wire or a small copper coin",
        "Steel wool or iron filings",
        "White wine vinegar or dilute lemon juice (a mild acid)",
        "3 small clear cups or glasses",
        "Magnifying glass (optional)"
      ],
      steps: [
        "Pour roughly 50 ml of vinegar into each of the three cups.",
        "Place a small piece of zinc in the first cup, some steel wool (iron) in the second, and a piece of copper in the third.",
        "Observe each cup for 5–10 minutes. Look for bubbles (hydrogen gas being produced) and any colour change in the liquid.",
        "Rank the metals by how vigorously they react — most bubbles = most reactive.",
        "Compare your ranking to the reactivity series: K, Na, Ca, Mg, Al, Zn, Fe, Cu, Ag, Au (most to least reactive)."
      ],
      science:
        "More reactive metals displace hydrogen from the acid more readily because they lose electrons more easily. Zinc and iron both sit above hydrogen in the reactivity series, so they react with the acid (producing bubbles of H₂ gas). Copper is below hydrogen and shows little or no reaction. This experiment demonstrates how position in the periodic table (group and period) relates to reactivity — metals in lower periods of Group 1 and 2 are more reactive because their outer electrons are further from the nucleus and shielded by more inner electrons.",
      safety:
        "Vinegar and lemon juice are safe mild acids — no concentrated acids. Keep away from eyes. Adult supervision recommended for younger students. Do not use alkali metals or magnesium shavings in this experiment."
    },
    {
      title: "Identify unknowns using periodic table trends",
      materials: [
        "Paper and pen",
        "A periodic table (printed or on screen)",
        "3 unlabelled 'mystery element' cards you prepare yourself (write clues on index cards)"
      ],
      steps: [
        "Prepare three mystery element cards. On each card write: number of protons, number of electron shells, number of outer electrons, and whether it is a metal or non-metal. Do NOT write the element name.",
        "Using the periodic table, determine the period (= number of shells), the group (= number of outer electrons for main-group elements), and the metal/non-metal region.",
        "Identify each element and predict: is it more or less reactive than its neighbours? What type of ion does it form? Is it a solid, liquid, or gas at room temperature?",
        "Check your predictions against actual data in a data booklet or online.",
        "Swap cards with a friend or family member and challenge them to identify your mystery elements."
      ],
      science:
        "This activity builds the skill of reading the periodic table as a map of atomic structure. Period = number of occupied electron shells. Group (for Groups 1–0) = number of outer electrons, which controls valency and typical ion charge. Position in the table predicts reactivity trends, physical state, and bonding type — demonstrating that the periodic table encodes enormous predictive power from just a few pieces of information.",
      safety: "No chemicals involved. Entirely safe."
    }
  ]
};
