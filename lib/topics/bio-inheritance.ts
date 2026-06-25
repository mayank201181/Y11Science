import type { Topic } from "../types";

export const bioInheritance: Topic = {
  id: "bio-inheritance",
  title: "Inheritance & Variation",
  subject: "biology",
  icon: "🧬",
  blurb: "DNA, mitosis & meiosis, Punnett squares, codominance, sex determination, variation, natural selection and evolution.",
  intro: "Every organism carries a molecular instruction manual — DNA — that is copied, shuffled and passed on through generations, explaining why offspring resemble parents yet vary. In this topic you will trace inheritance from the double helix, through cell division, all the way to evolution by natural selection, mastering the Punnett square and the language of genetics along the way.",

  guide: [
    // ── SECTION 1 ──────────────────────────────────────────────────────────────
    {
      heading: "DNA, Genes and Chromosomes",
      body: `DNA (deoxyribonucleic acid) is the chemical that carries genetic information. It is a **double helix** — two strands wound around each other and held together by complementary base pairs (A–T and C–G). The full DNA molecule of an organism is organised into thread-like structures called **chromosomes**, found in the nucleus.

A **gene** is a specific length (sequence) of DNA that codes for the production of a particular **protein**. Because proteins determine structure and function, genes ultimately control all inherited characteristics.

Human body cells contain **46 chromosomes arranged in 23 homologous pairs** — one chromosome of each pair from each parent. Body cells are said to be **diploid (2n = 46)**. Sex cells (gametes) are **haploid (n = 23)** — they contain only one chromosome from each pair.

Different versions of the same gene are called **alleles**. Because chromosomes come in pairs, each body cell carries two alleles for every gene — they may be the same (**homozygous**) or different (**heterozygous**).`,
      diagrams: [
        {
          caption: "From DNA double helix to chromosome to gene",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram showing the relationship between DNA double helix, chromosome and gene">
  <!-- chromosome body -->
  <ellipse cx="60" cy="100" rx="18" ry="70" fill="none" stroke="#a78bfa" stroke-width="3"/>
  <text x="60" y="185" font-size="10" fill="#b7bce0" text-anchor="middle">Chromosome</text>
  <!-- gene band -->
  <rect x="42" y="72" width="36" height="14" rx="3" fill="#fbbf24" opacity="0.85"/>
  <text x="60" y="82" font-size="8" fill="#1e293b" text-anchor="middle" font-weight="bold">Gene</text>
  <!-- arrow to helix -->
  <line x1="96" y1="79" x2="140" y2="79" stroke="#b7bce0" stroke-width="1.5" marker-end="url(#arr)"/>
  <!-- double helix schematic -->
  <path d="M150,40 C165,55 175,65 150,80 C125,95 135,105 150,120 C165,135 175,145 150,160" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <path d="M170,40 C155,55 145,65 170,80 C195,95 185,105 170,120 C155,135 145,145 170,160" fill="none" stroke="#34d399" stroke-width="2.5"/>
  <!-- rungs -->
  <line x1="150" y1="60" x2="170" y2="60" stroke="#fb7185" stroke-width="1.5"/>
  <line x1="150" y1="80" x2="170" y2="80" stroke="#fb7185" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="170" y2="100" stroke="#fb7185" stroke-width="1.5"/>
  <line x1="150" y1="120" x2="170" y2="120" stroke="#fb7185" stroke-width="1.5"/>
  <line x1="150" y1="140" x2="170" y2="140" stroke="#fb7185" stroke-width="1.5"/>
  <text x="160" y="185" font-size="10" fill="#b7bce0" text-anchor="middle">DNA double helix</text>
  <text x="160" y="195" font-size="9" fill="#b7bce0" text-anchor="middle">(bases A-T, C-G)</text>
  <!-- arrow marker -->
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#b7bce0"/>
    </marker>
  </defs>
  <!-- labels -->
  <text x="60" y="12" font-size="11" fill="#eef0ff" text-anchor="middle" font-weight="bold">DNA to Chromosome</text>
  <text x="220" y="60" font-size="9" fill="#38bdf8">Strand 1</text>
  <text x="220" y="80" font-size="9" fill="#34d399">Strand 2</text>
  <text x="220" y="100" font-size="9" fill="#fb7185">Base pairs</text>
</svg>`
        }
      ],
      keyPoints: [
        "A gene is a length of DNA that codes for a specific protein.",
        "DNA is a double helix held together by complementary base pairs (A–T, C–G).",
        "Human body cells are diploid (46 chromosomes / 23 pairs); gametes are haploid (23 chromosomes).",
        "Alleles are different versions of the same gene; two identical alleles = homozygous, two different = heterozygous.",
        "Chromosomes are found in the nucleus and are made of DNA wound around proteins."
      ],
      discovery: {
        problem: "If a human body cell has 46 chromosomes, how many chromosomes will be in a sperm cell, and why must it be that number rather than 46?",
        idea: "A sperm cell has 23 chromosomes (haploid). When sperm and egg fuse at fertilisation, the resulting zygote regains 46 chromosomes (diploid). If gametes had 46, fertilisation would double the number every generation — which does not happen. Meiosis halves the chromosome number specifically to allow fertilisation to restore the diploid number."
      },
      whyItWorks: "The double-helix structure gives DNA two key advantages: each strand acts as a template for copying the other (semi-conservative replication), and the linear sequence of bases can encode an almost unlimited number of different proteins via the genetic code.",
    },

    // ── SECTION 2 ──────────────────────────────────────────────────────────────
    {
      heading: "Mitosis and Meiosis",
      body: `Cells divide by two quite different processes depending on the purpose.

**Mitosis** produces two daughter cells that are genetically *identical* to the parent cell and to each other (same chromosome number, same alleles). It is used for: growth of an organism, repair of damaged tissue, and asexual reproduction. The cell first duplicates all its DNA, then divides once — both daughter cells are diploid (2n).

**Meiosis** is a *reduction division* used exclusively to produce gametes (sex cells). It involves two successive divisions. First the homologous chromosome pairs are separated; then sister chromatids are separated. The result is **four haploid (n) cells**, each genetically *different* from one another due to:
- **Crossing over** — exchange of segments between homologous chromosomes during prophase I.
- **Independent assortment** — random orientation of homologous pairs at the equator in metaphase I, so each gamete gets a random mix of maternal and paternal chromosomes.

Genetic diversity produced by meiosis is the raw material on which natural selection acts.`,
      diagrams: [
        {
          caption: "Mitosis vs meiosis: outcomes compared",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Comparison of mitosis producing 2 identical diploid cells versus meiosis producing 4 different haploid cells">
  <!-- Title -->
  <text x="160" y="14" font-size="11" fill="#eef0ff" text-anchor="middle" font-weight="bold">Mitosis vs Meiosis</text>
  <!-- MITOSIS side -->
  <text x="70" y="28" font-size="10" fill="#38bdf8" text-anchor="middle" font-weight="bold">MITOSIS</text>
  <!-- parent cell -->
  <circle cx="70" cy="52" r="18" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="70" y="56" font-size="9" fill="#38bdf8" text-anchor="middle">2n</text>
  <!-- arrow down -->
  <line x1="70" y1="70" x2="70" y2="88" stroke="#b7bce0" stroke-width="1.5" marker-end="url(#a2)"/>
  <!-- 2 daughter cells -->
  <circle cx="45" cy="108" r="16" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="45" y="112" font-size="9" fill="#38bdf8" text-anchor="middle">2n</text>
  <circle cx="95" cy="108" r="16" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="95" y="112" font-size="9" fill="#38bdf8" text-anchor="middle">2n</text>
  <text x="70" y="140" font-size="8" fill="#b7bce0" text-anchor="middle">2 identical diploid</text>
  <text x="70" y="152" font-size="8" fill="#b7bce0" text-anchor="middle">daughter cells</text>
  <!-- MEIOSIS side -->
  <text x="240" y="28" font-size="10" fill="#a78bfa" text-anchor="middle" font-weight="bold">MEIOSIS</text>
  <circle cx="240" cy="52" r="18" fill="none" stroke="#a78bfa" stroke-width="2"/>
  <text x="240" y="56" font-size="9" fill="#a78bfa" text-anchor="middle">2n</text>
  <line x1="240" y1="70" x2="240" y2="88" stroke="#b7bce0" stroke-width="1.5" marker-end="url(#a2)"/>
  <!-- 4 daughter cells (2 rows) -->
  <circle cx="210" cy="110" r="13" fill="none" stroke="#a78bfa" stroke-width="2"/>
  <text x="210" y="114" font-size="8" fill="#a78bfa" text-anchor="middle">n</text>
  <circle cx="238" cy="110" r="13" fill="none" stroke="#fb7185" stroke-width="2"/>
  <text x="238" y="114" font-size="8" fill="#fb7185" text-anchor="middle">n</text>
  <circle cx="210" cy="140" r="13" fill="none" stroke="#fb7185" stroke-width="2"/>
  <text x="210" y="144" font-size="8" fill="#fb7185" text-anchor="middle">n</text>
  <circle cx="238" cy="140" r="13" fill="none" stroke="#a78bfa" stroke-width="2"/>
  <text x="238" y="144" font-size="8" fill="#a78bfa" text-anchor="middle">n</text>
  <text x="240" y="168" font-size="8" fill="#b7bce0" text-anchor="middle">4 genetically different</text>
  <text x="240" y="180" font-size="8" fill="#b7bce0" text-anchor="middle">haploid gametes</text>
  <!-- divider -->
  <line x1="160" y1="20" x2="160" y2="190" stroke="#b7bce0" stroke-width="1" stroke-dasharray="4,3"/>
  <defs>
    <marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#b7bce0"/>
    </marker>
  </defs>
</svg>`
        }
      ],
      keyPoints: [
        "Mitosis: one division → 2 genetically identical diploid (2n) cells; used for growth and repair.",
        "Meiosis: two divisions → 4 genetically different haploid (n) cells; used to produce gametes.",
        "Crossing over and independent assortment during meiosis generate genetic variation.",
        "Diploid (2n) means two sets of chromosomes; haploid (n) means one set.",
        "Genetic variation from meiosis is the raw material for natural selection."
      ],
      thinkDeeper: "Why does meiosis produce four cells rather than two? The first division separates homologous chromosomes (reducing 2n to n); the second separates sister chromatids (like mitosis). Only both divisions together guarantee that each gamete ends up with exactly one complete set of chromosomes.",
      whyItWorks: "Halving the chromosome number in gametes is mathematically essential: if sperm and egg each contributed 46 chromosomes, every generation would double the count (92, 184, …). Meiosis (n) followed by fertilisation (n + n = 2n) locks the diploid number at a constant value across generations.",
      strategies: ["Compare and contrast", "Draw a diagram"],
    },

    // ── SECTION 3 ──────────────────────────────────────────────────────────────
    {
      heading: "Monohybrid Crosses and Punnett Squares",
      body: `**Genetics vocabulary** you must know:
- **Dominant** allele: expressed in phenotype whenever present (even one copy). Written as a capital letter.
- **Recessive** allele: only expressed when two copies are present (homozygous recessive). Written as a lower-case letter.
- **Genotype**: the alleles an organism carries (e.g. Tt, TT, tt).
- **Phenotype**: the observable characteristic (e.g. tall, short).
- **Homozygous**: both alleles the same (TT or tt). **Heterozygous**: alleles differ (Tt).

A **Punnett square** is a grid used to predict the genotypes and phenotypes of offspring from a cross.

**Example — seed shape in peas (R = round, r = wrinkled):**
Cross two heterozygous plants: Rr × Rr.

|   | R | r |
|---|---|---|
| **R** | RR | Rr |
| **r** | Rr | rr |

Genotype ratio: 1 RR : 2 Rr : 1 rr. Phenotype ratio: **3 round : 1 wrinkled**.
Probability of a wrinkled offspring = 1/4 = 25%.

A **test cross** (cross with a homozygous recessive) reveals whether an individual showing the dominant phenotype is TT or Tt. If any offspring show the recessive phenotype, the parent must be heterozygous.`,
      diagrams: [
        {
          caption: "Punnett square: Rr x Rr (3:1 phenotype ratio)",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Punnett square for Rr crossed with Rr showing 3 round to 1 wrinkled ratio">
  <text x="160" y="14" font-size="11" fill="#eef0ff" text-anchor="middle" font-weight="bold">Punnett Square: Rr x Rr</text>
  <!-- Column headers (parent 1 gametes) -->
  <text x="130" y="38" font-size="13" fill="#fbbf24" text-anchor="middle" font-weight="bold">R</text>
  <text x="210" y="38" font-size="13" fill="#fbbf24" text-anchor="middle" font-weight="bold">r</text>
  <!-- Row headers (parent 2 gametes) -->
  <text x="68" y="90" font-size="13" fill="#34d399" text-anchor="middle" font-weight="bold">R</text>
  <text x="68" y="158" font-size="13" fill="#34d399" text-anchor="middle" font-weight="bold">r</text>
  <!-- Grid -->
  <rect x="82" y="46" width="80" height="66" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <rect x="162" y="46" width="80" height="66" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <rect x="82" y="112" width="80" height="66" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <rect x="162" y="112" width="80" height="66" fill="#2d1b4e" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- Genotypes in cells -->
  <text x="122" y="82" font-size="14" fill="#34d399" text-anchor="middle" font-weight="bold">RR</text>
  <text x="122" y="95" font-size="9" fill="#b7bce0" text-anchor="middle">Round</text>
  <text x="202" y="82" font-size="14" fill="#34d399" text-anchor="middle" font-weight="bold">Rr</text>
  <text x="202" y="95" font-size="9" fill="#b7bce0" text-anchor="middle">Round</text>
  <text x="122" y="148" font-size="14" fill="#34d399" text-anchor="middle" font-weight="bold">Rr</text>
  <text x="122" y="161" font-size="9" fill="#b7bce0" text-anchor="middle">Round</text>
  <text x="202" y="148" font-size="14" fill="#fb7185" text-anchor="middle" font-weight="bold">rr</text>
  <text x="202" y="161" font-size="9" fill="#fb7185" text-anchor="middle">Wrinkled</text>
  <!-- Ratio label -->
  <text x="160" y="192" font-size="10" fill="#eef0ff" text-anchor="middle">Phenotype ratio: 3 Round : 1 Wrinkled</text>
</svg>`
        }
      ],
      keyPoints: [
        "Dominant alleles (capital letter) mask recessive alleles (lower-case) when present.",
        "Heterozygous × heterozygous cross gives a 3:1 phenotype ratio (dominant:recessive).",
        "Heterozygous × homozygous recessive (test cross) gives a 1:1 phenotype ratio.",
        "Probability from a Punnett square = number of squares with that genotype / 4.",
        "A test cross reveals whether the dominant phenotype individual is homozygous or heterozygous."
      ],
      discovery: {
        problem: "A black rabbit (dominant) is crossed with a white rabbit (recessive) and ALL offspring are black. Then two of those offspring are crossed. Predict the ratio of black to white in the grandchildren.",
        idea: "All-black F1 offspring from black × white means the black parent was homozygous (BB) and the F1 are all Bb. Crossing Bb × Bb gives Punnett square: BB, Bb, Bb, bb → 3 black : 1 white. The recessive phenotype 'disappears' in F1 but reappears in 25% of F2."
      },
      whyItWorks: "Alleles separate into different gametes (Mendel's Law of Segregation) because homologous chromosomes are pulled apart in meiosis I. Each gamete gets one allele at random, so combining two gametes independently recreates the probabilities the Punnett square predicts.",
      strategies: ["Punnett square", "Check ratios sum to 4 (or use fractions)", "Identify gametes before drawing grid"],
    },

    // ── SECTION 4 ──────────────────────────────────────────────────────────────
    {
      heading: "Codominance, Blood Groups and Sex Determination",
      body: `**Codominance** occurs when both alleles in a heterozygote are expressed, contributing equally to the phenotype. Neither is dominant over the other. Codominant alleles are written as superscripts to a common letter: e.g. C^R (red) and C^W (white) in snapdragons, giving C^R C^W = pink heterozygotes.

**ABO blood group system** — a classic codominance / multiple allele example:
There are three alleles for the ABO gene: I^A (produces antigen A), I^B (produces antigen B), and i (produces no antigen). I^A and I^B are codominant with each other; both are dominant over i.

| Genotype | Blood group (phenotype) |
|----------|------------------------|
| I^A I^A or I^A i | A |
| I^B I^B or I^B i | B |
| I^A I^B | AB (both antigens) |
| ii | O |

**Sex determination** in humans:
Sex is determined by the sex chromosomes. Females are **XX**; males are **XY**. The Y chromosome carries a gene (SRY) that triggers male development. Because fathers can pass either X or Y to offspring, the father determines the sex of the child.

Cross XX (mother) × XY (father): gametes X and X from mother; X and Y from father.
Punnett square gives XX : XY = 1:1 — 50% female, 50% male.

**Pedigree charts** show inheritance patterns in families. Key rules: circles = females, squares = males, shaded = affected. A recessive condition can skip generations (carried in heterozygotes). If all affected individuals are male, suspect X-linked (sex-linked) inheritance.`,
      keyPoints: [
        "Codominance: both alleles expressed in heterozygote (e.g. I^A I^B = blood group AB).",
        "ABO blood group uses three alleles (I^A, I^B, i); I^A and I^B are codominant; both dominant over i.",
        "Females are XX; males are XY — the father determines the sex of each child.",
        "The sex ratio is 1:1 (50% male, 50% female) from the XX × XY cross.",
        "In pedigree charts: circles = female, squares = male; shaded symbols indicate affected individuals."
      ],
      thinkDeeper: "Two parents both have blood group A. Could they have a child with blood group O? Yes — if both parents are heterozygous I^A i, the cross I^A i × I^A i gives a 1/4 chance of ii (group O). This is why blood group cannot rule out paternity on its own, but can rule it in certain cases.",
      strategies: ["List all possible genotypes before drawing Punnett square", "Check codominance by asking: are both alleles visible in the heterozygote?"],
    },

    // ── SECTION 5 ──────────────────────────────────────────────────────────────
    {
      heading: "Variation, Mutation and Sources of Genetic Difference",
      body: `**Variation** is the differences between individuals of the same species. It has two types:

**Continuous variation**: characteristics that show a smooth range of values with no distinct categories (e.g. height, mass, foot length). Usually controlled by *many* genes (polygenic) AND by the environment. Forms a normal distribution curve.

**Discontinuous variation**: characteristics that fall into discrete categories with no intermediates (e.g. blood group, tongue-rolling ability, sickle-cell disease). Usually controlled by *one or a few* genes; environment has little effect.

**Causes of variation**:
1. **Genetic (inherited)**: alleles inherited from parents; new combinations from meiosis (independent assortment, crossing over); mutations.
2. **Environmental**: nutrition, sunlight, training, disease, temperature (e.g. identical twins have the same genes but may differ in weight if they eat differently).
3. **Both**: most characteristics (height is genetic in range, but achieved height depends on nutrition).

A **mutation** is a *random, spontaneous change in the base sequence of DNA*. If it occurs in a gene, it may alter the protein coded for, potentially changing phenotype. Most mutations are neutral; some are harmful; very rarely one is beneficial.

Mutation rate can be increased by **mutagens**: ionising radiation (X-rays, UV), certain chemicals (e.g. tobacco carcinogens), some viruses.`,
      keyPoints: [
        "Continuous variation: smooth range of values, polygenic, influenced by environment (e.g. height).",
        "Discontinuous variation: distinct categories, usually one gene, little environmental influence (e.g. blood group).",
        "Causes of variation: genetic (alleles, meiosis, mutation) and environmental.",
        "A mutation is a random change in the DNA base sequence; it is the ultimate source of new alleles.",
        "Mutagens (UV radiation, X-rays, some chemicals) increase the rate of mutation."
      ],
      strategies: ["Ask: continuous or discontinuous? → How many genes? Environment matters?", "Mutation = random change in DNA sequence"],
    },

    // ── SECTION 6 ──────────────────────────────────────────────────────────────
    {
      heading: "Natural Selection, Evolution and Selective Breeding",
      body: `**Natural selection** is the mechanism by which evolution occurs. The argument runs:

1. **Variation**: individuals in a population show heritable variation (due to mutation and sexual reproduction via meiosis).
2. **Overproduction**: more offspring are produced than can survive.
3. **Competition / selection pressure**: individuals compete for limited resources (food, mates, space) or face predators, disease, changing environment.
4. **Survival of the fittest**: individuals whose characteristics (alleles) best suit the environment survive longer and reproduce more.
5. **Inheritance**: favourable alleles are passed to offspring, increasing in frequency each generation.
6. Over many generations, allele frequencies shift — the population *evolves*.

**Example — antibiotic-resistant bacteria:**
A population of bacteria contains rare individuals with a mutation giving antibiotic resistance. Antibiotic treatment is a selection pressure: non-resistant bacteria die; resistant bacteria survive and reproduce rapidly (bacteria reproduce quickly). The resistance allele spreads through the population. This is evolution by natural selection — it happens *within* one species and needs no external direction.

**Selective breeding (artificial selection):** humans act as the selection pressure. They choose individuals with desirable traits to breed together, repeat over many generations, and gradually shift the population towards the desired phenotype (e.g. high-yield crops, dairy cattle producing more milk, dog breeds). The key difference from natural selection: *humans*, not the environment, choose which individuals reproduce.

**Adaptive features** are inherited characteristics that improve an organism's survival and reproduction in its environment (e.g. the polar bear's thick fur and white camouflage; the cactus's water-storing stem and reduced leaves).`,
      keyPoints: [
        "Natural selection: variation → competition → survival of the fittest → reproduction → allele frequency change.",
        "Antibiotic resistance in bacteria is a real-world example of rapid natural selection.",
        "Mutations are the ultimate source of new alleles on which natural selection acts.",
        "Selective breeding: humans choose parents with desirable traits; differs from natural selection because humans direct the process.",
        "Adaptive features are inherited traits that increase survival/reproduction in a specific environment."
      ],
      discovery: {
        problem: "Before antibiotics were used, nearly all bacteria in a population were non-resistant. Today, some hospital infections are caused entirely by antibiotic-resistant bacteria. Explain, step by step, how this change could have happened without any bacteria 'trying' to become resistant.",
        idea: "Mutation randomly produces a resistance allele in a small number of bacteria (variation). When antibiotics are introduced (selection pressure), non-resistant bacteria are killed; resistant ones survive and reproduce (survival of the fittest). The resistance allele is passed to all daughter cells and spreads through the population. No individual bacterium changes intentionally — natural selection acts on pre-existing variation."
      },
      whyItWorks: "Natural selection requires no 'goal' or direction. It is simply a filtering process: heritable variation + differential survival/reproduction = change in allele frequencies. The environment does not create the variation; it merely selects which variants reproduce. Over millions of years this produces the diversity of life.",
      strategies: ["Use the 5-step natural selection framework for any exam question", "Distinguish: mutation creates variation; selection changes its frequency"],
    },
  ],

  // ── LEARN SMART ────────────────────────────────────────────────────────────
  learn: {
    keyFacts: [
      "A gene is a specific length of DNA that codes for the production of a protein.",
      "DNA is a double helix; strands are held together by complementary base pairs: A pairs with T, C pairs with G.",
      "Human body cells are diploid (2n = 46); gametes are haploid (n = 23).",
      "Mitosis produces 2 genetically identical diploid daughter cells (growth and repair).",
      "Meiosis produces 4 genetically different haploid gametes (sex cells) via two sequential divisions.",
      "A Rr × Rr cross gives a 3:1 phenotype ratio; a Rr × rr cross gives a 1:1 ratio.",
      "Codominance: both alleles expressed in heterozygote — e.g. I^A I^B = blood group AB.",
      "Sex determination: females XX, males XY; father determines sex of offspring.",
      "A mutation is a random change in the base sequence of DNA.",
      "Natural selection: variation → selection pressure → survival of the fittest → increased allele frequency.",
      "Antibiotic resistance in bacteria is an example of natural selection occurring rapidly.",
      "Selective breeding = humans choose parents; differs from natural selection in that humans are the selection pressure."
    ],
    flashcards: [
      { front: "What is a gene?", back: "A length of DNA that codes for the production of a specific protein." },
      { front: "What is the structure of DNA?", back: "A double helix: two strands wound together, held by complementary base pairs (A–T and C–G)." },
      { front: "Diploid vs haploid", back: "Diploid (2n) = two sets of chromosomes (e.g. human body cells, 46). Haploid (n) = one set (e.g. gametes, 23)." },
      { front: "What is the difference between mitosis and meiosis?", back: "Mitosis: 1 division → 2 identical diploid cells (growth/repair). Meiosis: 2 divisions → 4 different haploid gametes." },
      { front: "Dominant vs recessive allele", back: "Dominant: expressed even with one copy (capital letter). Recessive: only expressed when homozygous (lower-case letter)." },
      { front: "What phenotype ratio results from Tt × Tt?", back: "3 dominant : 1 recessive (e.g. 3 tall : 1 short)." },
      { front: "What is codominance?", back: "Both alleles are fully expressed in the heterozygote — neither dominates the other (e.g. blood group AB = I^A I^B)." },
      { front: "How is sex determined in humans?", back: "By the sex chromosomes: females are XX, males are XY. The father passes either X or Y to determine the child's sex." },
      { front: "What is a mutation?", back: "A random, spontaneous change in the base sequence of DNA." },
      { front: "Continuous vs discontinuous variation", back: "Continuous: smooth range, polygenic + environment (e.g. height). Discontinuous: distinct categories, usually one gene (e.g. blood group)." },
      { front: "What is natural selection?", back: "The process by which individuals with favourable heritable traits survive and reproduce more, increasing the frequency of beneficial alleles." },
      { front: "How does antibiotic resistance arise by natural selection?", back: "Random mutation → resistant variant → antibiotic kills non-resistant bacteria → resistant bacteria survive and reproduce → resistance allele spreads." },
    ],
    keyTerms: [
      { term: "Allele", definition: "A specific version of a gene; different alleles of the same gene occupy the same position (locus) on homologous chromosomes." },
      { term: "Genotype", definition: "The combination of alleles an organism carries for a particular gene (e.g. Tt, TT, tt)." },
      { term: "Phenotype", definition: "The observable characteristic of an organism resulting from its genotype and environment." },
      { term: "Homozygous", definition: "Having two identical alleles for a gene (e.g. TT or tt)." },
      { term: "Heterozygous", definition: "Having two different alleles for a gene (e.g. Tt)." },
      { term: "Dominant", definition: "An allele that is expressed in the phenotype whenever present, even in one copy." },
      { term: "Recessive", definition: "An allele that is only expressed in the phenotype when two copies are present (homozygous recessive)." },
      { term: "Codominance", definition: "A relationship between two alleles in which both are fully expressed in the heterozygote, producing a combined phenotype." },
      { term: "Mutation", definition: "A random, spontaneous change in the base sequence of DNA." },
      { term: "Meiosis", definition: "A type of nuclear division that produces four genetically different haploid cells; used to form gametes." },
      { term: "Natural selection", definition: "The process by which organisms with heritable advantageous characteristics survive to reproduce, increasing the frequency of favourable alleles in a population." },
      { term: "Selective breeding", definition: "The process by which humans choose parent organisms with desirable characteristics to breed, artificially directing the change in allele frequencies over generations." },
    ],
  },

  // ── QUICK QUIZ ─────────────────────────────────────────────────────────────
  quiz: {
    mcq: [
      {
        id: "bio-inheritance-mcq-q01",
        question: "Which statement correctly defines a gene?",
        options: [
          "A molecule of DNA that makes up an entire chromosome",
          "A length of DNA that codes for the production of a specific protein",
          "A pair of alleles that determines the phenotype of an organism",
          "A section of DNA that controls the rate of cell division"
        ],
        answerIndex: 1,
        explanation: "A gene is defined as a specific length (sequence) of DNA that codes for the production of a particular protein. Option A describes chromosomal DNA in total, not a gene. Options C and D are incorrect by definition.",
        guideRef: "DNA, Genes and Chromosomes",
        difficulty: "warmup",
      },
      {
        id: "bio-inheritance-mcq-q02",
        question: "A cell undergoing meiosis starts with 46 chromosomes. How many chromosomes will each resulting cell contain?",
        options: ["46", "23", "92", "12"],
        answerIndex: 1,
        explanation: "Meiosis is a reduction division that halves the chromosome number. Starting from 46 (diploid, 2n), the four resulting gametes each contain 23 chromosomes (haploid, n). 92 would result from DNA replication without division; 12 is incorrect.",
        guideRef: "Mitosis and Meiosis",
        difficulty: "warmup",
      },
      {
        id: "bio-inheritance-mcq-q03",
        question: "Two parents are both heterozygous for dimples (D = dimples, d = no dimples). What is the probability of a child with no dimples?",
        options: ["0%", "25%", "50%", "75%"],
        answerIndex: 1,
        explanation: "Cross: Dd × Dd. Punnett square gives DD, Dd, Dd, dd. Only dd (1 out of 4) gives no dimples. Probability = 1/4 = 25%.",
        guideRef: "Monohybrid Crosses and Punnett Squares",
        difficulty: "core",
        hints: [
          "Write out both parents' genotypes.",
          "Draw a 2×2 Punnett square — list gametes along the top and side.",
          "Count how many of the 4 cells give the recessive phenotype (dd).",
          "Express that as a fraction: 1 out of 4 = 25%."
        ],
        strategy: "Punnett square",
      },
      {
        id: "bio-inheritance-mcq-q04",
        question: "Which process produces genetically identical cells used for growth and repair?",
        options: ["Meiosis", "Fertilisation", "Mitosis", "Mutation"],
        answerIndex: 2,
        explanation: "Mitosis produces two genetically identical diploid daughter cells and is responsible for growth, repair and replacement of cells. Meiosis produces gametes (genetically different, haploid). Fertilisation combines gametes. Mutation is a change in DNA.",
        guideRef: "Mitosis and Meiosis",
        difficulty: "warmup",
      },
      {
        id: "bio-inheritance-mcq-q05",
        question: "A man with blood group AB and a woman with blood group O have a child. Which blood groups are possible in this child?",
        options: [
          "A or B only",
          "AB or O only",
          "A, B, AB or O",
          "O only"
        ],
        answerIndex: 0,
        explanation: "The man's genotype is I^A I^B; the woman's genotype is ii. Gametes from the man: I^A or I^B. Gametes from the woman: i only. Children can be I^A i (blood group A) or I^B i (blood group B). AB and O are not possible here.",
        guideRef: "Codominance, Blood Groups and Sex Determination",
        difficulty: "core",
        hints: [
          "Write out the genotypes: AB = I^A I^B; O = ii.",
          "List the gametes each parent can produce.",
          "Combine them in a Punnett square.",
          "Determine the phenotype for each resulting genotype."
        ],
        strategy: "Punnett square with codominant alleles",
      },
      {
        id: "bio-inheritance-mcq-q06",
        question: "Which of the following is the best example of discontinuous variation?",
        options: [
          "Height in a class of students",
          "Mass of apples on a tree",
          "ABO blood group in humans",
          "Leaf length in a plant"
        ],
        answerIndex: 2,
        explanation: "ABO blood group is discontinuous variation — individuals fall into distinct categories (A, B, AB, O) with no intermediates. Height, mass and leaf length all show a continuous range of values and are therefore examples of continuous variation.",
        guideRef: "Variation, Mutation and Sources of Genetic Difference",
        difficulty: "warmup",
      },
    ],
    qa: [
      {
        id: "bio-inheritance-qa-q01",
        question: "Explain the difference between mitosis and meiosis, including the type of cells produced and their role in the organism. [4 marks]",
        marks: 4,
        modelAnswer: "Mitosis is a type of nuclear division that produces two daughter cells that are genetically identical to the parent cell and to each other. Both daughter cells are diploid (containing the same chromosome number as the parent cell). Mitosis is used for growth, repair of tissues, and replacement of worn-out cells. Meiosis is a reduction division that produces four haploid daughter cells, each genetically different from one another. It occurs in the reproductive organs to produce gametes (sex cells). The genetic differences arise through crossing over and independent assortment of chromosomes.",
        markScheme: [
          "Mitosis produces two / genetically identical daughter cells",
          "Daughter cells of mitosis are diploid / have same chromosome number as parent",
          "Mitosis used for growth / repair / (asexual reproduction)",
          "Meiosis produces four haploid gametes / sex cells",
          "Meiosis daughter cells are genetically different / varied",
          "Genetic variation in meiosis from crossing over / independent assortment"
        ],
        commonError: "Confusing the number of divisions (meiosis has TWO divisions, not one) or stating that mitosis produces haploid cells.",
        guideRef: "Mitosis and Meiosis",
        difficulty: "core",
        hints: [
          "Start with how many cells each process produces.",
          "State the chromosome number (diploid/haploid) of daughter cells.",
          "State the function of each type of division.",
          "For meiosis, mention what causes the genetic differences between cells."
        ],
        strategy: "Compare and contrast systematically",
      },
      {
        id: "bio-inheritance-qa-q02",
        question: "In guinea pigs, black fur (B) is dominant over white fur (b). A black guinea pig is crossed with a white guinea pig and all offspring are black. Two of these offspring are then crossed.\n(a) State the genotype of the original black parent. [1 mark]\n(b) Draw a Punnett square for the cross between the two offspring and state the expected phenotype ratio. [3 marks]",
        marks: 4,
        modelAnswer: "(a) The original black parent must be homozygous dominant: BB. (The white parent is bb. All offspring being black means all received a B allele from the black parent — only possible if the black parent is BB, giving all Bb offspring.)\n\n(b) Both offspring are Bb (heterozygous black). Cross: Bb × Bb.\nPunnett square:\n      B    b\n  B | BB | Bb |\n  b | Bb | bb |\n\nGenotype ratio: 1 BB : 2 Bb : 1 bb\nPhenotype ratio: 3 black : 1 white",
        markScheme: [
          "(a) BB (homozygous dominant)",
          "(b) Correct gametes listed on Punnett square (B and b for each parent)",
          "(b) All four genotypes correctly filled: BB, Bb, Bb, bb",
          "(b) Phenotype ratio stated as 3 black : 1 white (allow 3:1)"
        ],
        commonError: "In part (a), students often write Bb instead of BB, forgetting that ALL offspring being black requires the black parent to provide only B alleles — a heterozygous parent would sometimes pass b, but the white parent (bb) also passes b, so bb offspring (white) would appear if the black parent were Bb.",
        guideRef: "Monohybrid Crosses and Punnett Squares",
        difficulty: "core",
        hints: [
          "If all offspring are black (dominant), and the white parent can only give b, what allele must the black parent always pass on?",
          "Work out the genotype of the F1 offspring from that logic.",
          "Now draw the Punnett square for F1 × F1.",
          "Count the ratio: how many cells give dominant phenotype vs recessive?"
        ],
        strategy: "Work backwards from offspring phenotypes to determine parent genotype",
        solutions: [
          {
            label: "Forward logic from genotypes",
            steps: [
              "White parent must be bb (recessive).",
              "All offspring are black — they all show the dominant phenotype.",
              "Each offspring received b from the white parent.",
              "For all offspring to be black, each must also have B — so the black parent provides B to every offspring.",
              "Only BB can guarantee every gamete carries B → black parent is BB.",
              "F1 offspring are all Bb. Cross Bb × Bb:",
              "Gametes: B and b from each parent.",
              "Punnett square: BB, Bb, Bb, bb → 3 black : 1 white."
            ]
          }
        ]
      },
      {
        id: "bio-inheritance-qa-q03",
        question: "Describe how natural selection leads to an increase in the frequency of antibiotic-resistant bacteria in a population. [5 marks]",
        marks: 5,
        modelAnswer: "Within a population of bacteria, there is naturally occurring genetic variation due to random mutations in DNA. A mutation in some bacteria produces an allele that gives resistance to an antibiotic. When antibiotic is administered, it acts as a selection pressure: non-resistant bacteria cannot survive and are killed. The resistant bacteria survive and reproduce rapidly (bacteria reproduce by binary fission very quickly). The resistance allele is passed to all daughter cells. Over many generations, the resistant bacteria make up an increasingly large proportion of the population, so the frequency of the resistance allele increases. Eventually the population may be entirely resistant and the antibiotic becomes ineffective.",
        markScheme: [
          "Mutation / random change in DNA produces resistance allele",
          "Variation exists in the population (some bacteria resistant, most not)",
          "Antibiotic acts as selection pressure / kills non-resistant bacteria",
          "Resistant bacteria survive / are not killed by the antibiotic",
          "Resistant bacteria reproduce / pass resistance allele to offspring",
          "Frequency of resistance allele increases over generations / population becomes predominantly resistant"
        ],
        commonError: "Stating that bacteria 'develop' or 'evolve' resistance in response to antibiotics — implying a deliberate or directed change. Natural selection acts on pre-existing random mutations; the antibiotic does not cause the mutation.",
        guideRef: "Natural Selection, Evolution and Selective Breeding",
        difficulty: "core",
        hints: [
          "Start with the source of variation in bacteria — what creates new alleles?",
          "What does the antibiotic do to non-resistant bacteria?",
          "What happens to the resistant bacteria that survive?",
          "How does the allele frequency change across many generations?"
        ],
        strategy: "Use the 5-step natural selection framework: variation → selection pressure → survival → reproduction → allele frequency change",
      },
    ],
  },

  // ── QUESTION BANK ──────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      {
        id: "bio-inheritance-bank-mcq-1",
        title: "Inheritance & Variation — MCQ Paper 1",
        description: "12 multiple-choice questions covering DNA structure, cell division, monohybrid genetics and variation.",
        questions: [
          {
            id: "bio-inheritance-bank-mcq1-q01",
            question: "Which base pairs are found in the DNA double helix?",
            options: [
              "Adenine–Guanine and Cytosine–Thymine",
              "Adenine–Thymine and Cytosine–Guanine",
              "Adenine–Cytosine and Thymine–Guanine",
              "Adenine–Uracil and Cytosine–Guanine"
            ],
            answerIndex: 1,
            explanation: "In DNA, adenine (A) pairs with thymine (T) and cytosine (C) pairs with guanine (G). Uracil replaces thymine only in RNA, not DNA.",
            guideRef: "DNA, Genes and Chromosomes",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bank-mcq1-q02",
            question: "A body cell of an organism contains 36 chromosomes. How many chromosomes would be found in one of its gametes?",
            options: ["9", "18", "36", "72"],
            answerIndex: 1,
            explanation: "Gametes are haploid — they contain half the number of chromosomes found in body cells (diploid). 36 ÷ 2 = 18. 72 would be after replication (DNA duplication), and 9 would be a quarter.",
            guideRef: "DNA, Genes and Chromosomes",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bank-mcq1-q03",
            question: "Which of the following is NOT a reason why meiosis produces genetically different cells?",
            options: [
              "Independent assortment of homologous pairs",
              "Crossing over between chromatids",
              "Random fertilisation of gametes",
              "Separation of sister chromatids"
            ],
            answerIndex: 3,
            explanation: "Separation of sister chromatids in meiosis II simply separates identical copies — it does not on its own generate genetic difference. The main sources of genetic variation in meiosis are independent assortment (metaphase I) and crossing over (prophase I). Random fertilisation adds further variation but occurs after meiosis.",
            guideRef: "Mitosis and Meiosis",
            difficulty: "core",
            hints: [
              "Identify which steps of meiosis shuffle genetic information.",
              "Separation of sister chromatids is like a simple copy — what does it actually change?"
            ],
            strategy: "Process of elimination",
          },
          {
            id: "bio-inheritance-bank-mcq1-q04",
            question: "A plant is heterozygous for flower colour (R = red, dominant; r = white, recessive). It is crossed with a white-flowered plant. What proportion of offspring will have red flowers?",
            options: ["All", "3/4", "1/2", "1/4"],
            answerIndex: 2,
            explanation: "Cross: Rr (red) × rr (white). Punnett square gives Rr, Rr, rr, rr — two red (Rr) and two white (rr). Probability of red = 2/4 = 1/2 = 50%.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "core",
            hints: [
              "Identify the genotypes: heterozygous red = Rr; white = rr.",
              "Draw the Punnett square with gametes R, r vs r, r.",
              "Count red offspring (Rr) vs white (rr)."
            ],
            strategy: "Punnett square — test cross pattern",
          },
          {
            id: "bio-inheritance-bank-mcq1-q05",
            question: "Which statement about mutations is correct?",
            options: [
              "Mutations always produce a harmful change in phenotype.",
              "Mutations are directed changes in DNA caused by environmental pressures.",
              "Mutations are random changes in the DNA base sequence.",
              "Mutations only occur in gametes, not in body cells."
            ],
            answerIndex: 2,
            explanation: "Mutations are random, spontaneous changes in the base sequence of DNA. They can occur in any cell, are not directed by the environment, and may be neutral, harmful or (rarely) beneficial.",
            guideRef: "Variation, Mutation and Sources of Genetic Difference",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bank-mcq1-q06",
            question: "Which characteristic shows continuous variation?",
            options: [
              "Ability to roll tongue",
              "ABO blood group",
              "Presence or absence of ear lobes",
              "Body mass"
            ],
            answerIndex: 3,
            explanation: "Body mass shows a continuous range of values and is influenced by both genes and environment (diet, exercise) — a classic example of continuous variation. Tongue-rolling, blood group and ear-lobe attachment all show discrete categories (discontinuous variation).",
            guideRef: "Variation, Mutation and Sources of Genetic Difference",
            difficulty: "warmup",
          },
        ],
      },
      {
        id: "bio-inheritance-bank-mcq-2",
        title: "Inheritance & Variation — MCQ Paper 2",
        description: "12 multiple-choice questions covering codominance, sex determination, natural selection and selective breeding, plus challenge genetics.",
        questions: [
          {
            id: "bio-inheritance-bank-mcq2-q01",
            question: "In snapdragons, a red-flowered plant (C^R C^R) is crossed with a white-flowered plant (C^W C^W). What is the phenotype of the F1 offspring?",
            options: [
              "All red",
              "All white",
              "All pink",
              "Half red, half white"
            ],
            answerIndex: 2,
            explanation: "This is codominance. The F1 offspring are all C^R C^W (heterozygous). Because both alleles are fully expressed (neither is dominant), the result is pink flowers — an intermediate that shows both pigments are being produced.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bank-mcq2-q02",
            question: "Two parents both have blood group B. Which blood groups could their children possibly have?",
            options: [
              "B only",
              "A or B",
              "B or O",
              "A, B, AB or O"
            ],
            answerIndex: 2,
            explanation: "Blood group B can be I^B I^B or I^B i. If both parents are I^B I^B, children are all I^B I^B (group B). If both are I^B i, children can be I^B I^B (B), I^B i (B), or ii (O). I^B I^A (group A) and I^A I^B (group AB) are not possible because neither parent has an I^A allele.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "core",
            hints: [
              "List the possible genotypes for blood group B.",
              "Consider the case where both parents are I^B i.",
              "What children can I^B i × I^B i produce?"
            ],
            strategy: "Consider all possible parental genotypes",
          },
          {
            id: "bio-inheritance-bank-mcq2-q03",
            question: "A couple want to know the probability that their next child will be a girl. What is the probability?",
            options: [
              "100% — if they already have a boy",
              "50%",
              "25%",
              "It depends on the mother's genotype"
            ],
            answerIndex: 1,
            explanation: "The mother is always XX; the father is XY. Each child independently receives X or Y from the father. The probability of XX (girl) = 1/2 = 50% for every pregnancy, regardless of previous children. The mother's genotype for sex chromosomes is always XX and does not vary.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bank-mcq2-q04",
            question: "Which feature of natural selection provides the heritable variation on which selection acts?",
            options: [
              "Competition for resources",
              "Overproduction of offspring",
              "Random mutation",
              "Survival of the fittest"
            ],
            answerIndex: 2,
            explanation: "Random mutation in DNA creates new alleles — new heritable variants — that can be passed to offspring. Competition, overproduction and differential survival/reproduction are all part of natural selection but do not themselves generate new genetic variation.",
            guideRef: "Natural Selection, Evolution and Selective Breeding",
            difficulty: "core",
            hints: [
              "Natural selection can only act on traits that are heritable.",
              "What is the original source of new alleles?"
            ],
          },
          {
            id: "bio-inheritance-bank-mcq2-q05",
            question: "A farmer selectively breeds dairy cattle to increase milk yield over 20 generations. This is different from natural selection because:",
            options: [
              "Selective breeding changes allele frequencies, but natural selection does not.",
              "Humans, not the environment, choose which individuals reproduce.",
              "Selective breeding acts faster than natural selection.",
              "Natural selection only occurs in wild animals."
            ],
            answerIndex: 1,
            explanation: "The key difference is WHO acts as the selection pressure. In selective breeding, humans deliberately choose which individuals reproduce based on desired traits. In natural selection, the environment determines which individuals survive and reproduce. Both change allele frequencies over generations; neither is exclusive to any setting.",
            guideRef: "Natural Selection, Evolution and Selective Breeding",
            difficulty: "core",
            hints: [
              "In natural selection, what decides which organisms reproduce?",
              "In selective breeding, who makes that decision?"
            ],
          },
          {
            id: "bio-inheritance-bank-mcq2-q06",
            question: "A woman is a carrier for a sex-linked recessive condition (X^N X^n). Her husband is unaffected (X^N Y). What is the probability that a son will be affected?",
            options: [
              "0%",
              "25%",
              "50%",
              "100%"
            ],
            answerIndex: 2,
            explanation: "The mother's gametes: X^N or X^n. The father's gametes: X^N or Y. Sons receive Y from father and X from mother. There is a 1/2 chance the son receives X^n (affected) and 1/2 chance X^N (unaffected). So 50% of sons will be affected. Note: 25% of ALL children (sons and daughters) will be affected, but 50% of sons specifically.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "challenge",
            hints: [
              "Draw the full Punnett square (X^N X^n mother × X^N Y father).",
              "Identify all four possible offspring genotypes.",
              "Select only the sons (those receiving Y from father).",
              "Of those sons, what fraction received X^n from the mother?"
            ],
            strategy: "Draw Punnett square, then filter for sons only",
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "bio-inheritance-bank-qa-1",
        title: "Inheritance & Variation — Structured Paper 1",
        description: "4 structured questions on DNA, cell division and monohybrid genetics.",
        questions: [
          {
            id: "bio-inheritance-bank-qa1-q01",
            question: "The diagram shows a section of a DNA molecule.\n(a) Name the type of bond that holds the two strands together. [1 mark]\n(b) State two ways in which DNA in a body cell and DNA in a gamete differ. [2 marks]\n(c) Explain why a mutation in the base sequence of a gene may alter the phenotype of an organism. [2 marks]",
            marks: 5,
            modelAnswer: "(a) The two strands of DNA are held together by hydrogen bonds (between complementary base pairs A–T and C–G).\n\n(b) Any two of: The body cell is diploid (two copies of each chromosome) / contains 46 chromosomes, whereas the gamete is haploid (one copy of each chromosome) / contains 23 chromosomes. The body cell contains two alleles for each gene; the gamete contains one. (The total amount of DNA in a gamete is half that of a body cell.)\n\n(c) A gene codes for the production of a specific protein. If the base sequence of the gene changes (mutation), the sequence of amino acids in the protein may change. This could alter the shape or function of the protein, which could change the phenotype (e.g. a non-functional enzyme).",
            markScheme: [
              "(a) Hydrogen bonds",
              "(b) Body cell diploid / 46 chromosomes; gamete haploid / 23 chromosomes",
              "(b) Body cell has two alleles per gene; gamete has one allele per gene (any second correct difference)",
              "(c) Gene codes for a protein / sequence of bases determines amino acid sequence",
              "(c) Mutation changes base sequence → may change protein structure/function → phenotype altered"
            ],
            commonError: "In (a), students often say 'covalent bonds' or 'peptide bonds' — hydrogen bonds specifically hold the two strands via base pairing. Covalent bonds link nucleotides within each strand (phosphodiester bonds), which is a different question.",
            guideRef: "DNA, Genes and Chromosomes",
            difficulty: "core",
            hints: [
              "Think about what type of bond is described as 'weak' and involved in base pairing in DNA.",
              "For (b), compare the chromosome number and allele number.",
              "For (c), follow the chain: gene → protein → phenotype."
            ],
          },
          {
            id: "bio-inheritance-bank-qa1-q02",
            question: "In tomato plants, round fruit (R) is dominant over pear-shaped fruit (r).\n(a) A plant with round fruit is crossed with a pear-shaped plant. All 48 offspring have round fruit. State the genotypes of both parent plants. [2 marks]\n(b) Two round-fruited plants from part (a) are crossed. Draw a Punnett square and state the expected phenotype ratio and the probability of pear-shaped fruit. [4 marks]\n(c) A student claims: 'If you grow 200 seeds from this cross, exactly 50 will be pear-shaped.' Evaluate this claim. [2 marks]",
            marks: 8,
            modelAnswer: "(a) Round parent: RR (homozygous dominant). Pear-shaped parent: rr (homozygous recessive). All offspring being round (Rr) confirms the round parent contributes only R alleles, so must be RR.\n\n(b) Cross: Rr × Rr. Punnett square:\n      R      r\n  R | RR  | Rr |\n  r | Rr  | rr |\n\nGenotype ratio: 1 RR : 2 Rr : 1 rr. Phenotype ratio: 3 round : 1 pear-shaped. Probability of pear-shaped fruit = 1/4 = 25%.\n\n(c) The claim is incorrect (or at best unlikely). The 3:1 ratio is a probability prediction based on random fertilisation. Individual outcomes are random events; the actual number of pear-shaped plants may not be exactly 50. With a larger sample the ratio approaches the expected probability, but exact values cannot be predicted for any one experiment.",
            markScheme: [
              "(a) Round parent: RR",
              "(a) Pear-shaped parent: rr",
              "(b) Correct gametes on Punnett square (R and r for each parent)",
              "(b) Four genotypes correctly filled: RR, Rr, Rr, rr",
              "(b) Phenotype ratio: 3 round : 1 pear-shaped",
              "(b) Probability of pear-shaped: 1/4 / 25%",
              "(c) The ratio is a probability/expected value, not a guarantee",
              "(c) Actual results vary due to random fertilisation / larger samples give closer results"
            ],
            commonError: "In (a), students often write Rr for the round parent, not noticing that the question says ALL offspring are round — a Rr parent would produce some rr (pear-shaped) offspring. Always check whether offspring are all one phenotype to diagnose homozygous vs heterozygous parents.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "core",
            hints: [
              "For (a): if all offspring are round, the pear-shaped parent (rr) provides only r. For all offspring to show dominant phenotype, the round parent must provide only R — so it must be RR.",
              "For (b): write out the gametes before drawing the grid.",
              "For (c): think about whether genetic ratios are certainties or probabilities."
            ],
            strategy: "Work backwards from offspring; then Punnett square; then evaluate statistical claims",
            solutions: [
              {
                label: "Logical deduction for parent genotypes",
                steps: [
                  "Pear-shaped = rr (homozygous recessive by definition of recessive).",
                  "All offspring are round → all must have at least one R allele.",
                  "Each offspring receives r from the pear-shaped parent.",
                  "For all offspring to be round (R_), the round parent must supply R to every offspring.",
                  "Only RR can guarantee every gamete carries R.",
                  "Therefore: round parent = RR."
                ]
              }
            ],
          },
          {
            id: "bio-inheritance-bank-qa1-q03",
            question: "A couple's pedigree chart shows that the father has sickle-cell anaemia (autosomal recessive, alleles H = normal, h = sickle-cell). The mother is a carrier. Calculate the probability that:\n(a) their first child has sickle-cell anaemia [2 marks]\n(b) their first child is a carrier [2 marks]\n(c) Given that their first child does not have sickle-cell anaemia, what is the probability that this child is a carrier? Show your working. [3 marks]",
            marks: 7,
            modelAnswer: "(a) Father has sickle-cell = hh. Mother is a carrier = Hh. Cross: hh × Hh.\nPunnett square:\n    H   h\n h |Hh | hh |\n h |Hh | hh |\n\nOutcomes: 2 Hh (carriers) : 2 hh (affected). Probability of sickle-cell (hh) = 2/4 = 1/2 = 50%.\n\n(b) Probability of carrier (Hh) = 2/4 = 1/2 = 50%.\n\n(c) If the child does not have sickle-cell, it must be Hh (carrier) — since HH is impossible (the father can only provide h). Of the children who do not have sickle-cell anaemia, ALL 2 are carriers (Hh). Probability = 2/2 = 1 = 100%.",
            markScheme: [
              "(a) Father genotype hh; mother genotype Hh stated or implied",
              "(a) Probability of hh (affected) = 1/2 / 50%",
              "(b) Probability of Hh (carrier) = 1/2 / 50%",
              "(c) Recognition that HH is impossible (father can only give h)",
              "(c) Unaffected children are all Hh",
              "(c) Conditional probability = 2/2 = 1 / 100%"
            ],
            commonError: "In (c), many students answer 2/4 = 50% without applying the condition that the child is unaffected. Conditional probability requires restricting to the relevant subset of outcomes.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "challenge",
            hints: [
              "Write out the father's genotype (affected = hh) and the mother's (carrier = Hh).",
              "Draw the Punnett square for hh × Hh.",
              "For (c), list only the children who do NOT have sickle-cell anaemia — what genotypes are they?",
              "Of those unaffected genotypes, what fraction are carriers? (This is conditional probability.)"
            ],
            strategy: "Conditional probability: restrict to the given subset of outcomes",
            solutions: [
              {
                label: "Punnett square then conditional reasoning",
                steps: [
                  "hh (father) × Hh (mother): gametes from father always h; gametes from mother: H or h.",
                  "Punnett square: offspring are Hh or hh, each with probability 1/2.",
                  "(a) P(hh) = 1/2 = 50%.",
                  "(b) P(Hh) = 1/2 = 50%.",
                  "(c) Given child is not affected, possible genotypes = {Hh} only (HH impossible since father only gives h).",
                  "All unaffected children are Hh → P(carrier | not affected) = 1 = 100%."
                ]
              }
            ],
          },
          {
            id: "bio-inheritance-bank-qa1-q04",
            question: "Describe and explain how variation within a species leads to evolution by natural selection. Use an example to illustrate your answer. [6 marks]",
            marks: 6,
            modelAnswer: "Within any species, individuals show variation in their characteristics. This variation arises from random mutations (changes in DNA base sequence), which create new alleles, and from the reshuffling of alleles during sexual reproduction (independent assortment and crossing over in meiosis). In any environment, organisms must compete for limited resources such as food, water and mates. Individuals whose characteristics best adapt them to their environment are more likely to survive and reproduce — 'survival of the fittest'. These better-adapted individuals pass on their favourable alleles to offspring. Over many generations, the frequency of favourable alleles increases in the population while unfavourable alleles decrease. This gradual change in allele frequency is evolution.\n\nExample: Antibiotic-resistant bacteria. In a bacterial population, a random mutation produces an allele conferring antibiotic resistance. The antibiotic acts as the selection pressure; non-resistant bacteria are killed. Resistant bacteria survive, reproduce rapidly and pass the resistance allele to daughter cells. The resistance allele increases in frequency; eventually the population may be entirely resistant and the antibiotic ineffective.",
            markScheme: [
              "Variation exists within the population",
              "Variation arises from mutation / reshuffling in meiosis",
              "Competition for limited resources / selection pressure named",
              "Better-adapted individuals survive and reproduce more (survival of the fittest)",
              "Favourable alleles/characteristics passed to offspring / inherited",
              "Frequency of favourable allele increases over generations",
              "Named example used correctly (e.g. antibiotic resistance; specific allele, selection pressure and outcome stated)"
            ],
            commonError: "Omitting the mechanism of inheritance — students describe 'stronger organisms survive' but fail to explain how the advantageous characteristic is passed on. The word 'heritable' (or equivalent) is essential.",
            guideRef: "Natural Selection, Evolution and Selective Breeding",
            difficulty: "core",
            hints: [
              "Start with: where does variation come from?",
              "What is the selection pressure in your example?",
              "Who survives and why?",
              "How does the allele frequency change over time?"
            ],
            strategy: "Use the 5-step natural selection framework; back it up with a named example",
          },
        ],
      },
      {
        id: "bio-inheritance-bank-qa-2",
        title: "Inheritance & Variation — Structured Paper 2",
        description: "4 structured questions on codominance, sex linkage, variation and challenge genetics.",
        questions: [
          {
            id: "bio-inheritance-bank-qa2-q01",
            question: "In a species of cattle, coat colour is controlled by codominant alleles: C^R (red) and C^W (white).\n(a) State the coat colour of a heterozygous (C^R C^W) animal. [1 mark]\n(b) A red bull and a roan cow are crossed. Draw a Punnett square and state the expected ratio of coat colours in the offspring. [3 marks]\n(c) Explain why this is an example of codominance rather than incomplete dominance. [2 marks]",
            marks: 6,
            modelAnswer: "(a) A heterozygous (C^R C^W) animal has roan colouring — a mixture of red and white hairs (both alleles fully expressed).\n\n(b) Red bull = C^R C^R; roan cow = C^R C^W.\nPunnett square:\n         C^R      C^W\n  C^R | C^R C^R | C^R C^W |\n  C^R | C^R C^R | C^R C^W |\n\nOffspring: 2 C^R C^R (red) : 2 C^R C^W (roan). Ratio: 1 red : 1 roan.\n\n(c) In codominance, both alleles are fully expressed — the roan animal has both red AND white hairs (both proteins/pigments present). In incomplete dominance, the heterozygote would show a true blend (e.g. a uniform pink, not a mix of two colours). The roan phenotype shows both alleles are active simultaneously, which is codominance.",
            markScheme: [
              "(a) Roan (accept: mixture of red and white hairs)",
              "(b) Red bull: C^R C^R; roan cow: C^R C^W (correct genotypes)",
              "(b) Punnett square: C^R C^R and C^R C^W in correct ratio",
              "(b) Ratio: 1 red : 1 roan",
              "(c) Both alleles are fully/simultaneously expressed in heterozygote",
              "(c) Distinction from incomplete dominance: roan = both colours present (not a blend)"
            ],
            commonError: "Confusing codominance with incomplete dominance — codominance produces a phenotype where BOTH parental characteristics are visible (e.g. red AND white hairs together), whereas incomplete dominance produces a truly intermediate phenotype (e.g. all pink).",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "core",
            hints: [
              "In codominance, each allele produces its own product — both products appear side by side.",
              "For the Punnett square: C^R C^R × C^R C^W — what gametes does each parent produce?",
              "For (c): what is the key difference between 'both things present' and 'an intermediate thing'?"
            ],
            strategy: "Draw Punnett square; then use definitions to distinguish codominance from incomplete dominance",
          },
          {
            id: "bio-inheritance-bank-qa2-q02",
            question: "Height in humans is an example of continuous variation.\n(a) Explain what is meant by continuous variation and give one other example. [2 marks]\n(b) State two causes of variation in height between individuals. [2 marks]\n(c) Compare continuous and discontinuous variation in terms of: (i) the number of genes involved; (ii) the effect of the environment; (iii) the distribution of values in a population. [3 marks]",
            marks: 7,
            modelAnswer: "(a) Continuous variation describes a characteristic that shows a smooth, unbroken range of values with no distinct categories. Another example: hand span, body mass, finger length (any one).\n\n(b) Causes of variation in height: genetic factors (the alleles inherited from parents for growth-related genes) and environmental factors such as nutrition (quality and quantity of food during growth).\n\n(c) (i) Continuous: controlled by many genes (polygenic); discontinuous: usually controlled by one or a few genes.\n(ii) Environment has a significant effect on continuous traits (e.g. nutrition affects height); environment has little or no effect on discontinuous traits (e.g. blood group is not changed by diet).\n(iii) Continuous variation shows a normal distribution (bell curve) when plotted; discontinuous variation shows distinct separate bars/peaks with no values in between.",
            markScheme: [
              "(a) Smooth / unbroken range of values / no distinct categories",
              "(a) Any correct example of continuous variation (other than height)",
              "(b) Genetic / inherited alleles for height",
              "(b) Environmental: nutrition / diet / health / exercise",
              "(c)(i) Continuous = many genes (polygenic); discontinuous = one or few genes",
              "(c)(ii) Environment significantly affects continuous; little/no effect on discontinuous",
              "(c)(iii) Continuous: normal distribution / bell curve; discontinuous: separate categories / no intermediate values"
            ],
            commonError: "For (b), students often give only genetic or only environmental causes. Height is influenced by both, and the question asks for two causes — specify one of each type.",
            guideRef: "Variation, Mutation and Sources of Genetic Difference",
            difficulty: "core",
            hints: [
              "Continuous = a range; discontinuous = distinct boxes.",
              "Think of the word 'polygenic' for the number of genes.",
              "Consider: can diet change your blood group? Can it change your height?"
            ],
          },
          {
            id: "bio-inheritance-bank-qa2-q03",
            question: "In humans, the allele for normal colour vision (X^N) is dominant over the allele for colour blindness (X^n). Colour blindness is a sex-linked condition.\n(a) A colour-blind man (X^n Y) and a woman with normal vision who is a carrier (X^N X^n) plan to have children. Draw a Punnett square to show the expected genotypes of their children. [3 marks]\n(b) Calculate the probability that:\n(i) a daughter is colour blind [1 mark]\n(ii) a son has normal colour vision [1 mark]\n(c) Explain why colour blindness affects males more often than females. [3 marks]",
            marks: 8,
            modelAnswer: "(a) Mother: X^N X^n; father: X^n Y.\nPunnett square:\n           X^N          X^n\n  X^n | X^N X^n    | X^n X^n  |\n  Y   | X^N Y      | X^n Y    |\n\nFour genotypes: X^N X^n (carrier female), X^n X^n (colour-blind female), X^N Y (normal male), X^n Y (colour-blind male).\n\n(b)(i) Daughters are the first two cells: X^N X^n and X^n X^n. Of 2 daughters, 1 is colour blind. P(daughter is colour blind) = 1/2 = 50%.\n\n(b)(ii) Sons are the second two cells: X^N Y and X^n Y. Of 2 sons, 1 has normal vision. P(son has normal vision) = 1/2 = 50%.\n\n(c) Males have only one X chromosome (XY). A male who inherits a single X^n allele will be colour blind, because there is no second X chromosome carrying the dominant X^N allele to mask it. Females (XX) need two copies of X^n to be colour blind — if they have one X^N and one X^n, they are carriers with normal vision. This means the condition is more likely to be expressed in males.",
            markScheme: [
              "(a) Correct gametes listed for both parents (X^N and X^n from mother; X^n and Y from father)",
              "(a) All four genotypes correctly placed: X^N X^n, X^n X^n, X^N Y, X^n Y",
              "(a) Genotypes correctly identified (carrier female, affected female, normal male, affected male)",
              "(b)(i) P(daughter colour blind) = 1/2 / 50%",
              "(b)(ii) P(son normal vision) = 1/2 / 50%",
              "(c) Males have only one X chromosome / XY",
              "(c) Single X^n allele causes colour blindness in males (no second X to mask it)",
              "(c) Females need two X^n alleles / one X^N makes female a carrier not affected"
            ],
            commonError: "A common error in (b) is to calculate overall probability of colour blindness (1/4) and use that for daughters or sons, rather than restricting to daughters-only or sons-only as the question requests.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "challenge",
            hints: [
              "Write out gametes carefully: the mother gives X^N or X^n; the father gives X^n or Y.",
              "Draw the Punnett square. Identify which cells are daughters (XX) and which are sons (XY).",
              "For (b)(i), look only at the daughter cells — of those, how many are X^n X^n?",
              "For (c), think about what difference there is between XY and XX when only one X^n allele is inherited."
            ],
            strategy: "Draw full Punnett square; then filter by sex; explain in terms of X chromosome number",
            solutions: [
              {
                label: "Punnett square and conditional probability",
                steps: [
                  "Mother gametes: X^N, X^n. Father gametes: X^n, Y.",
                  "Punnett square (2×2): Row 1 (X^n from father): X^N X^n, X^n X^n. Row 2 (Y from father): X^N Y, X^n Y.",
                  "Daughters = row 1: X^N X^n (carrier, normal) and X^n X^n (colour blind).",
                  "P(daughter colour blind) = 1 out of 2 daughters = 1/2 = 50%.",
                  "Sons = row 2: X^N Y (normal) and X^n Y (colour blind).",
                  "P(son normal) = 1 out of 2 sons = 1/2 = 50%."
                ]
              }
            ],
          },
          {
            id: "bio-inheritance-bank-qa2-q04",
            question: "Farmers in the 19th century used selective breeding to develop a new breed of sheep that produces more wool per year.\n(a) Describe the process of selective breeding the farmers would have used. [3 marks]\n(b) Explain how the frequency of alleles for high wool production would change over many generations of selective breeding. [3 marks]\n(c) A scientist suggests that the same result could eventually be achieved by natural selection if the farmers simply left the sheep to breed randomly. Evaluate this suggestion. [4 marks]",
            marks: 10,
            modelAnswer: "(a) The farmers would identify the individual sheep in their flock that produce the most wool. They would select these high-yielding individuals as breeding parents and allow only them to reproduce. The offspring are assessed for wool production, and again only those with the highest yield are chosen as the next generation's parents. This process is repeated over many generations.\n\n(b) Alleles that favour high wool production are carried by the selected breeding individuals. Each generation, these alleles are passed to offspring while alleles for lower wool yield become less common (because animals carrying them are not selected for breeding). Over many generations, the frequency of high-yield alleles increases and the frequency of low-yield alleles decreases in the flock.\n\n(c) The suggestion is unlikely to work as stated. Natural selection requires a selection pressure that favours high wool production in the wild (e.g. colder climate where woolier animals survive better). Without such a pressure, high wool production may not confer any survival advantage — in fact it might be a disadvantage (heavier coat, parasite risk). Allele frequencies would not necessarily change in the direction of more wool. Additionally, natural selection operates much more slowly than selective breeding; random mating means alleles are not concentrated in the way deliberate selection achieves. However, IF the environment provided a genuine selection pressure favouring wool production, then natural selection could theoretically move allele frequencies in a similar direction over a much longer timescale.",
            markScheme: [
              "(a) Identify individuals with the desired characteristic (high wool yield)",
              "(a) Select those individuals as breeding parents / allow only them to reproduce",
              "(a) Repeat over many generations / assess offspring and select again",
              "(b) Selected alleles (for high yield) passed to offspring each generation",
              "(b) Frequency of high-yield alleles increases over generations",
              "(b) Alleles for lower yield decrease in frequency as those animals not selected",
              "(c) Natural selection requires a real selection pressure favouring the trait in the environment",
              "(c) High wool may not be advantageous (or may be disadvantageous) in wild conditions",
              "(c) Without selection pressure, allele frequencies would not necessarily change in desired direction",
              "(c) Natural selection would be much slower / less directed than selective breeding"
            ],
            commonError: "In (c), students often simply say 'natural selection would not work' without explaining why — the key is the absence of an environmental selection pressure that specifically favours high wool production.",
            guideRef: "Natural Selection, Evolution and Selective Breeding",
            difficulty: "challenge",
            hints: [
              "For (a): think about the three steps — identify, select, repeat.",
              "For (b): alleles for a selected trait become more common; those for non-selected traits become less common.",
              "For (c): ask — what is the selection pressure in nature that would favour more wool? Does it exist?",
              "Also consider the timescale — how does selective breeding compare to natural selection in speed?"
            ],
            strategy: "Evaluate both sides — when would the suggestion work? When would it not? Justify with scientific reasoning.",
          },
        ],
      },
    ],
  },
};
