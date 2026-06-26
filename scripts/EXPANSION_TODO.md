# Bank expansion — resume checklist

Goal: every topic bank = 4 MCQ papers x10 + 4 structured papers x10; each subject mock exam = 4 MCQ x25 + 4 structured x20.
Spec: scripts/BANK_SPEC.md (agents must write files directly, NO delegation).

## DONE (expanded to 4x10+4x10)
bio-coordination bio-disease-immunity bio-inheritance bio-transport-plants chem-energetics phys-electricity phys-nuclear
bio-cells bio-enzymes chem-atoms chem-stoichiometry phys-motion
bio-ecology bio-gas-respiration bio-human-nutrition bio-molecules bio-plant-nutrition bio-reproduction
bio-transport-animals bio-transport-cell chem-acids-bases chem-analysis chem-bonding chem-electrochemistry
chem-environment chem-metals chem-organic chem-particles chem-periodic chem-rates
phys-energy phys-forces phys-magnetism phys-sound-em phys-space phys-thermal phys-waves

## REMAINING topics (still on audited 2-paper banks)
(none — all 37 topic banks expanded to 4x10 MCQ + 4x10 structured; full build green)

## EXAMS — DONE (expanded to 4x25 MCQ + 4x20 QA)
lib/exams/biology.ts, lib/exams/chemistry.ts, lib/exams/physics.ts  (100 MCQ + 80 structured each)

## STATUS: COMPLETE ✅
All 37 topic banks expanded to 4x10 MCQ + 4x10 structured (2,960 questions) and all 3 subject
mock exams expanded to 4x25 MCQ + 4x20 structured (540 questions) = 3,500 new bank/exam questions.
Full `npm run build` green; `tsc --noEmit` clean; zero duplicate question ids across topics + exams.

Id schemes used:
- Topic banks: papers <id>-bankmcq-1..4 / <id>-bankqa-1..4 ; questions <id>-bm{1-4}-{01-10} / <id>-bq{1-4}-{01-10}.
- Exams: papers exam-<subj>-mcq-1..4 / exam-<subj>-qa-1..4 ; questions exam-<subj>-mcq-p{1-4}-{01-25} / exam-<subj>-qa-p{1-4}-{01-20}.
