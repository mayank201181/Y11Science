# Bank expansion — resume checklist

Goal: every topic bank = 4 MCQ papers x10 + 4 structured papers x10; each subject mock exam = 4 MCQ x25 + 4 structured x20.
Spec: scripts/BANK_SPEC.md (agents must write files directly, NO delegation).

## DONE (expanded to 4x10+4x10)
bio-coordination bio-disease-immunity bio-inheritance bio-transport-pla.ts chem-energetics phys-electricity phys-nuclear 

## REMAINING topics (still on audited 2-paper banks)
bio-cells bio-ecology bio-enzymes bio-gas-respiration bio-human-nutrition bio-molecules bio-plant-nutrition bio-reproduction bio-transport-animals bio-transport-cell chem-acids-bases chem-analysis chem-atoms chem-bonding chem-electrochemistry chem-environment chem-metals chem-organic chem-particles chem-periodic chem-rates chem-stoichiometry phys-energy phys-forces phys-magnetism phys-motion phys-sound-em phys-space phys-thermal phys-waves 

## REMAINING exams
lib/exams/biology.ts, lib/exams/chemistry.ts, lib/exams/physics.ts  (expand to 4x25 MCQ + 4x20 QA)

## How to resume (when platform throttling has cleared)
Run direct-write agents in small batches (<=6 concurrent), one topic per agent, per BANK_SPEC.md.
After each batch: npm run build (must be green), commit, push. Then deploy:
  npx vercel deploy --prod --yes --token $VERCEL_TOKEN
Ids: <id>-bankmcq-1..4 / <id>-bankqa-1..4 ; questions <id>-bm{1-4}-{01-10} / <id>-bq{1-4}-{01-10}.
