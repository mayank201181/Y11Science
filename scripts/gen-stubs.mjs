import { MANIFEST, SUBJECT_CODE } from "./topic-manifest.mjs";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const topicsDir = join(root, "lib", "topics");
mkdirSync(topicsDir, { recursive: true });

// camelCase export name from id, e.g. bio-cells -> bioCells
const camel = (id) => id.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

const FORCE = process.argv.includes("--force");

function stub(subject, id, title, icon, blurb) {
  const v = camel(id);
  return `import type { Topic } from "../types";

// STUB — replace with full audited content. Keep the export name and id.
export const ${v}: Topic = {
  id: "${id}",
  title: ${JSON.stringify(title)},
  subject: "${subject}",
  icon: ${JSON.stringify(icon)},
  blurb: ${JSON.stringify(blurb)},
  intro: ${JSON.stringify(blurb)},
  guide: [
    {
      heading: "Coming soon",
      body: "This topic's full study guide is being prepared.",
      keyPoints: ["Content in progress"],
    },
  ],
  learn: {
    keyFacts: ["Content in progress"],
    flashcards: [{ front: "Topic", back: ${JSON.stringify(title)} }],
    keyTerms: [{ term: ${JSON.stringify(title)}, definition: ${JSON.stringify(blurb)} }],
  },
  quiz: {
    mcq: [
      {
        id: "${id}-mcq-stub-01",
        question: "Placeholder question for ${title}?",
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
`;
}

let created = 0;
for (const [subject, topics] of Object.entries(MANIFEST)) {
  for (const [id, title, icon, blurb] of topics) {
    const file = join(topicsDir, id + ".ts");
    if (!existsSync(file) || FORCE) {
      writeFileSync(file, stub(subject, id, title, icon, blurb));
      created++;
    }
  }
}

// Per-subject aggregator files
for (const [subject, topics] of Object.entries(MANIFEST)) {
  const imports = topics
    .map(([id]) => `import { ${camel(id)} } from "./${id}";`)
    .join("\n");
  const arr = topics.map(([id]) => `  ${camel(id)},`).join("\n");
  const content = `import type { Topic } from "../types";
${imports}

export const ${subject}Topics: Topic[] = [
${arr}
];
`;
  writeFileSync(join(topicsDir, subject + ".ts"), content);
}

console.log("Stubs created/updated:", created);
console.log("Aggregators written for:", Object.keys(MANIFEST).join(", "));
