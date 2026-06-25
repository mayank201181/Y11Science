import type { Topic } from "../types";

// STUB — replace with full audited content. Keep the export name and id.
export const chemOrganic: Topic = {
  id: "chem-organic",
  title: "Organic Chemistry",
  subject: "chemistry",
  icon: "🛢️",
  blurb: "Hydrocarbons, fuels, alkanes, alkenes, alcohols and polymers.",
  intro: "Hydrocarbons, fuels, alkanes, alkenes, alcohols and polymers.",
  guide: [
    {
      heading: "Coming soon",
      body: "This topic's full study guide is being prepared.",
      keyPoints: ["Content in progress"],
    },
  ],
  learn: {
    keyFacts: ["Content in progress"],
    flashcards: [{ front: "Topic", back: "Organic Chemistry" }],
    keyTerms: [{ term: "Organic Chemistry", definition: "Hydrocarbons, fuels, alkanes, alkenes, alcohols and polymers." }],
  },
  quiz: {
    mcq: [
      {
        id: "chem-organic-mcq-stub-01",
        question: "Placeholder question for Organic Chemistry?",
        options: ["A", "B", "C", "D"],
        answerIndex: 0,
        explanation: "Placeholder.",
        difficulty: "warmup",
      },
    ],
    qa: [],
  },
  questionBank: { mcqPapers: [], qaPapers: [] },
};
