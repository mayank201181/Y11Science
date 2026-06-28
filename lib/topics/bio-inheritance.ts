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

**Sickle-cell anaemia** is a second codominance example. The normal allele Hb^A and the sickle allele Hb^S are codominant: Hb^A Hb^A = normal red blood cells; Hb^S Hb^S = sickle-cell anaemia (all haemoglobin abnormal); Hb^A Hb^S (heterozygous, "sickle-cell trait") makes *both* normal and abnormal haemoglobin — so both alleles are visible in the heterozygote. The Hb^S allele arises from a single gene mutation (see the Variation section).

**Sex determination** in humans:
Sex is determined by the sex chromosomes — the 23rd pair. Females are **XX**; males are **XY**. The Y chromosome carries a gene that triggers male development. The mother (XX) can only put an X into each egg, but the father (XY) puts an X into half his sperm and a Y into the other half. Therefore **the father determines the sex of the child**.

Cross XX (mother) × XY (father): gametes X and X from mother; X and Y from father.
Punnett square gives XX : XY = 1:1 — 50% female, 50% male.

**Sex-linked inheritance** — when a gene is carried on a sex chromosome (almost always the X), the pattern of inheritance differs between the sexes. The X chromosome is much larger than the Y, so it carries genes (e.g. for clotting and for colour vision) that have **no matching allele on the Y**.

- A male has only one X, so a single recessive allele on it is expressed — he cannot be a "carrier". This is why X-linked recessive conditions are far more common in males.
- A female has two X chromosomes, so a recessive allele can be masked by a dominant allele on her other X. A heterozygous female is an unaffected **carrier**.

Two important examples (both **X-linked recessive**):
- **Red-green colour blindness** — alleles X^N (normal vision) and X^n (colour blind). A colour-blind male is X^n Y; a carrier female is X^N X^n.
- **Haemophilia** — failure of blood to clot — alleles X^H (normal) and X^h (haemophilia). A carrier mother (X^H X^h) crossed with an unaffected father (X^H Y) gives sons that are X^H Y or X^h Y in a 1:1 ratio — half the sons affected, no daughters affected.

When writing sex-linked genotypes, **always attach the allele to the X** (X^N X^n, X^h Y) — never write the allele on its own, because that loses the information that males have only one copy.

**Pedigree charts** show inheritance patterns in families. Key rules: circles = females, squares = males, shaded = affected; a horizontal line joins a couple, a vertical line drops to their children. To read one: if two *unaffected* parents have an *affected* child, the condition must be **recessive** (the parents are carriers). If the condition appears in every generation, suspect **dominant**. If nearly all affected individuals are male, suspect **X-linked (sex-linked)**.`,
      diagrams: [
        {
          caption: "Reading a pedigree: two unaffected carriers having an affected child",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Pedigree chart with unaffected parents shown as a circle and square joined by a line, and three children below of whom one is shaded to show an affected recessive individual">
  <text x="160" y="14" font-size="11" fill="#eef0ff" text-anchor="middle" font-weight="bold">Pedigree: recessive condition</text>
  <!-- Generation I: parents -->
  <circle cx="110" cy="50" r="14" fill="none" stroke="#b7bce0" stroke-width="2"/>
  <rect x="182" y="36" width="28" height="28" fill="none" stroke="#b7bce0" stroke-width="2"/>
  <line x1="124" y1="50" x2="182" y2="50" stroke="#b7bce0" stroke-width="1.5"/>
  <text x="110" y="84" font-size="8" fill="#b7bce0" text-anchor="middle">carrier ♀</text>
  <text x="196" y="84" font-size="8" fill="#b7bce0" text-anchor="middle">carrier ♂</text>
  <!-- drop line to sibship -->
  <line x1="153" y1="50" x2="153" y2="110" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="80" y1="110" x2="226" y2="110" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="80" y1="110" x2="80" y2="124" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="153" y1="110" x2="153" y2="124" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="226" y1="110" x2="226" y2="124" stroke="#b7bce0" stroke-width="1.5"/>
  <!-- Generation II: children -->
  <circle cx="80" cy="138" r="14" fill="none" stroke="#b7bce0" stroke-width="2"/>
  <rect x="139" y="124" width="28" height="28" fill="#fb7185" stroke="#fb7185" stroke-width="2"/>
  <circle cx="226" cy="138" r="14" fill="none" stroke="#b7bce0" stroke-width="2"/>
  <text x="153" y="172" font-size="8" fill="#fb7185" text-anchor="middle">affected ♂</text>
  <text x="153" y="190" font-size="9" fill="#b7bce0" text-anchor="middle">Shaded = affected. Two unaffected parents + affected child = recessive.</text>
  <!-- legend -->
  <circle cx="270" cy="40" r="7" fill="none" stroke="#b7bce0" stroke-width="2"/>
  <text x="282" y="43" font-size="8" fill="#b7bce0">female</text>
  <rect x="263" y="55" width="14" height="14" fill="none" stroke="#b7bce0" stroke-width="2"/>
  <text x="282" y="66" font-size="8" fill="#b7bce0">male</text>
</svg>`
        }
      ],
      keyPoints: [
        "Codominance: both alleles expressed in heterozygote (e.g. I^A I^B = blood group AB; Hb^A Hb^S = sickle-cell trait).",
        "ABO blood group uses three alleles (I^A, I^B, i); I^A and I^B are codominant; both dominant over i.",
        "Females are XX; males are XY — the father determines the sex of each child; the sex ratio is 1:1.",
        "X-linked recessive conditions (colour blindness, haemophilia) are commoner in males, who have only one X and cannot be carriers.",
        "A heterozygous female (e.g. X^H X^h) is an unaffected carrier; write sex-linked alleles attached to the X.",
        "Pedigrees: circles = female, squares = male, shaded = affected; two unaffected parents with an affected child means the allele is recessive."
      ],
      thinkDeeper: "Two parents both have blood group A. Could they have a child with blood group O? Yes — if both parents are heterozygous I^A i, the cross I^A i × I^A i gives a 1/4 chance of ii (group O). This is why blood group cannot rule out paternity on its own, but can rule it in certain cases.",
      discovery: {
        problem: "Colour blindness is X-linked recessive. A colour-blind man marries a woman who is not colour blind but whose father was colour blind. What fraction of their SONS would you expect to be colour blind, and could any of their daughters be colour blind?",
        idea: "The woman's father (X^n Y) must have passed X^n to her, so she is a carrier X^N X^n. The man is X^n Y. Cross X^N X^n × X^n Y. Sons get Y from the father and either X^N or X^n from the mother → half the sons (X^n Y) are colour blind. Daughters get X^n from the father plus X^N or X^n from the mother → X^N X^n (carrier) or X^n X^n (colour blind), so yes — half the daughters are colour blind here, because the father is himself affected and contributes X^n."
      },
      strategies: ["List all possible genotypes before drawing Punnett square", "Always attach sex-linked alleles to the X chromosome", "For pedigrees: unaffected parents + affected child = recessive"],
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

A **mutation** is a *random, spontaneous change in the genetic material*. Two scales are distinguished:
- **Gene (point) mutation** — a change in the base sequence of a single gene (e.g. a base swapped, inserted or deleted). This may alter one amino acid in the protein and so change the phenotype. **Sickle-cell anaemia** is the classic example: a single base change in the haemoglobin gene swaps one amino acid, producing the Hb^S allele and abnormally shaped red blood cells.
- **Chromosomal mutation** — a change involving whole chromosomes or large sections (e.g. an extra chromosome). Having three copies of chromosome 21 instead of two causes Down's syndrome; this usually arises when chromosomes fail to separate properly during meiosis.

A mutation only matters for evolution and inheritance if it occurs in a **gamete** (or a cell that forms gametes) — only then is it passed to offspring. Mutations in ordinary body (somatic) cells are not inherited. Most mutations are neutral; some are harmful; very rarely one is beneficial, and a beneficial mutation is the ultimate source of the new alleles on which natural selection acts.

Mutations happen naturally at a low rate, but the rate is increased by **mutagens**:
- **Ionising radiation** — X-rays, gamma rays, ultraviolet (UV) light.
- **Certain chemicals (carcinogens)** — e.g. the tar in tobacco smoke.
- Some viruses.

Mutations in body cells that affect genes controlling cell division can lead to uncontrolled division — i.e. **cancer**; this is why mutagens such as UV and tobacco tar are also carcinogens.`,
      diagrams: [
        {
          caption: "Continuous variation (bell curve) vs discontinuous variation (distinct bars)",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Two graphs: a smooth bell-shaped curve for continuous variation such as height, and a bar chart with separate categories for discontinuous variation such as blood group">
  <text x="160" y="13" font-size="11" fill="#eef0ff" text-anchor="middle" font-weight="bold">Variation: two patterns</text>
  <!-- LEFT: continuous bell curve -->
  <text x="80" y="30" font-size="9" fill="#38bdf8" text-anchor="middle" font-weight="bold">Continuous</text>
  <line x1="22" y1="150" x2="142" y2="150" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="22" y1="150" x2="22" y2="48" stroke="#b7bce0" stroke-width="1.5"/>
  <path d="M28,148 C55,148 60,70 82,68 C104,70 109,148 136,148" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="82" y="166" font-size="8" fill="#b7bce0" text-anchor="middle">Height (smooth range)</text>
  <text x="10" y="100" font-size="8" fill="#b7bce0" text-anchor="middle" transform="rotate(-90 10 100)">Frequency</text>
  <!-- RIGHT: discontinuous bars -->
  <text x="240" y="30" font-size="9" fill="#fbbf24" text-anchor="middle" font-weight="bold">Discontinuous</text>
  <line x1="182" y1="150" x2="306" y2="150" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="182" y1="150" x2="182" y2="48" stroke="#b7bce0" stroke-width="1.5"/>
  <rect x="192" y="80" width="20" height="70" fill="#fbbf24" opacity="0.85"/>
  <rect x="220" y="60" width="20" height="90" fill="#fbbf24" opacity="0.85"/>
  <rect x="248" y="100" width="20" height="50" fill="#fbbf24" opacity="0.85"/>
  <rect x="276" y="120" width="20" height="30" fill="#fbbf24" opacity="0.85"/>
  <text x="202" y="160" font-size="7" fill="#b7bce0" text-anchor="middle">A</text>
  <text x="230" y="160" font-size="7" fill="#b7bce0" text-anchor="middle">B</text>
  <text x="258" y="160" font-size="7" fill="#b7bce0" text-anchor="middle">AB</text>
  <text x="286" y="160" font-size="7" fill="#b7bce0" text-anchor="middle">O</text>
  <text x="244" y="176" font-size="8" fill="#b7bce0" text-anchor="middle">Blood group (categories)</text>
</svg>`
        }
      ],
      keyPoints: [
        "Continuous variation: smooth range of values, polygenic, influenced by environment (e.g. height) — plotted as a bell-shaped curve.",
        "Discontinuous variation: distinct categories, usually one or few genes, little environmental influence (e.g. blood group) — plotted as separate bars.",
        "Causes of variation: genetic (alleles, meiosis, mutation) and environmental.",
        "A mutation is a random change in the genetic material; it is the ultimate source of new alleles.",
        "Gene mutation = change to one gene (e.g. sickle cell); chromosomal mutation = change involving whole chromosomes (e.g. Down's syndrome).",
        "Mutagens — ionising radiation (X-rays, UV), certain chemicals (tobacco tar), some viruses — increase the mutation rate and can cause cancer.",
        "Only mutations in gametes are inherited; mutations in body cells are not passed on."
      ],
      thinkDeeper: "Why is a mutation in a gamete so much more significant for a species than a mutation in a liver cell? A gamete mutation is present in every cell of the resulting offspring and can be passed to future generations, so it can spread through a population and fuel evolution. A liver-cell mutation affects only that individual and dies with them.",
      strategies: ["Ask: continuous or discontinuous? → How many genes? Environment matters?", "Mutation = random change in the genetic material", "Distinguish gene vs chromosomal mutation by the scale of the change"],
    },

    // ── SECTION 6 ──────────────────────────────────────────────────────────────
    {
      heading: "Natural Selection, Evolution and Selective Breeding",
      body: `**Natural selection** is the mechanism by which evolution occurs. It was proposed by **Charles Darwin** (and independently by Alfred Russel Wallace) in the 19th century, set out in Darwin's *On the Origin of Species* (1859). **Evolution** is the gradual change in the inherited characteristics of a population over many generations, through changes in allele frequency. The argument runs:

1. **Variation**: individuals in a population show heritable variation (due to mutation and sexual reproduction via meiosis).
2. **Overproduction**: more offspring are produced than can survive.
3. **Competition / selection pressure**: individuals compete for limited resources (food, mates, space) or face predators, disease, changing environment.
4. **Survival of the fittest**: individuals whose characteristics (alleles) best suit the environment survive longer and reproduce more.
5. **Inheritance**: favourable alleles are passed to offspring, increasing in frequency each generation.
6. Over many generations, allele frequencies shift — the population *evolves*.

**Example — antibiotic-resistant bacteria:**
A population of bacteria contains rare individuals with a mutation giving antibiotic resistance. Antibiotic treatment is a selection pressure: non-resistant bacteria die; resistant bacteria survive and reproduce rapidly (bacteria reproduce quickly). The resistance allele spreads through the population. This is evolution by natural selection — it happens *within* one species and needs no external direction.

**Example — the peppered moth (Biston betularia):**
Before the Industrial Revolution most peppered moths were pale and speckled, which camouflaged them against pale, lichen-covered tree bark; a rare dark (melanic) form stood out and was eaten by birds. When industrial soot blackened the bark in cities, the situation reversed: the dark moths were now camouflaged and survived to breed, while pale moths were eaten. The dark form became the most common in polluted areas. The environment (predation by birds) selected which colour survived — a textbook case of natural selection observed within human history. As clean-air laws reduced pollution, the pale form recovered, confirming the link.

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

    // ── SECTION 7 ──────────────────────────────────────────────────────────────
    {
      heading: "Genetic Modification and Cloning",
      body: `Selective breeding moves genes slowly *within* a species. Modern techniques move genes far faster — and even *between* species.

**Genetic modification (genetic engineering)** is changing the genetic material of an organism by inserting a gene from another organism, so the modified organism makes a new, useful protein. The inserted gene is called a **transgene**, and the organism is described as **transgenic** or **genetically modified (GM)**.

The classic example is making **human insulin** from bacteria:
1. The human insulin gene is **cut out** of human DNA using a **restriction enzyme** (an enzyme that cuts DNA at a specific sequence, leaving "sticky ends").
2. A bacterial **plasmid** (a small circular loop of DNA) is cut open with the same restriction enzyme, so its ends match.
3. The insulin gene is joined into the plasmid using the enzyme **DNA ligase**, forming **recombinant DNA**. The plasmid acts as a **vector** that carries the gene into a host cell.
4. The plasmid is taken up by a **bacterium**. The bacteria are grown in large fermenters; as they multiply they make human insulin, which is harvested and purified.

Other examples: crops modified for **herbicide or pest resistance**, or rice modified to make beta-carotene ("golden rice") to combat vitamin-A deficiency.

**Benefits** of GM include making medicines (insulin) cheaply and in large amounts, higher crop yields, and crops with added nutrients. **Concerns** include possible effects on wild species and ecosystems, transfer of inserted genes to other organisms, and ethical objections to manipulating DNA.

**Cloning** produces genetically identical copies of an organism (a **clone**). Because the offspring come from one parent's cells, clones are genetically identical to that parent — like natural asexual reproduction.
- In **plants**, taking **cuttings** or growing many small pieces of tissue on agar (**micropropagation / tissue culture**) rapidly produces large numbers of identical, disease-free plants from one good parent.
- In **animals**, the nucleus of a body cell from the animal to be copied is placed into an egg cell whose own nucleus has been removed (**nuclear transfer**); the embryo is then implanted into a surrogate mother. Dolly the sheep (1996) was the first mammal cloned this way.

The trade-off with all cloning is **low genetic variation**: a clone population shares the same alleles, so a single disease or environmental change could wipe out the whole group.`,
      diagrams: [
        {
          caption: "Genetic engineering: inserting the human insulin gene into a bacterial plasmid",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram of genetic engineering: a gene cut from human DNA by a restriction enzyme is joined into a cut bacterial plasmid with ligase, then taken up by a bacterium that makes the protein">
  <text x="160" y="14" font-size="11" fill="#eef0ff" text-anchor="middle" font-weight="bold">Making insulin from bacteria</text>
  <!-- human DNA with gene -->
  <line x1="20" y1="50" x2="110" y2="50" stroke="#38bdf8" stroke-width="3"/>
  <rect x="55" y="44" width="22" height="12" rx="2" fill="#fbbf24"/>
  <text x="66" y="38" font-size="8" fill="#fbbf24" text-anchor="middle">insulin gene</text>
  <text x="65" y="72" font-size="8" fill="#b7bce0" text-anchor="middle">human DNA</text>
  <text x="65" y="84" font-size="7" fill="#b7bce0" text-anchor="middle">(cut by restriction enzyme)</text>
  <!-- arrow -->
  <line x1="118" y1="50" x2="150" y2="50" stroke="#b7bce0" stroke-width="1.5" marker-end="url(#ge)"/>
  <!-- plasmid open -->
  <circle cx="190" cy="50" r="26" fill="none" stroke="#34d399" stroke-width="3" stroke-dasharray="120 8"/>
  <rect x="179" y="22" width="22" height="12" rx="2" fill="#fbbf24"/>
  <text x="190" y="92" font-size="8" fill="#b7bce0" text-anchor="middle">plasmid + gene</text>
  <text x="190" y="104" font-size="7" fill="#b7bce0" text-anchor="middle">(joined by DNA ligase)</text>
  <text x="250" y="20" font-size="7" fill="#34d399">recombinant DNA</text>
  <!-- arrow down -->
  <line x1="190" y1="118" x2="190" y2="138" stroke="#b7bce0" stroke-width="1.5" marker-end="url(#ge)"/>
  <!-- bacterium -->
  <ellipse cx="190" cy="160" rx="30" ry="16" fill="none" stroke="#a78bfa" stroke-width="2.5"/>
  <circle cx="190" cy="160" r="7" fill="none" stroke="#34d399" stroke-width="2"/>
  <text x="190" y="190" font-size="8" fill="#b7bce0" text-anchor="middle">bacterium grows + makes insulin</text>
  <defs>
    <marker id="ge" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#b7bce0"/>
    </marker>
  </defs>
</svg>`
        }
      ],
      keyPoints: [
        "Genetic modification = inserting a gene from one organism into another so it makes a useful protein (a GM / transgenic organism).",
        "Human insulin is made by inserting the human insulin gene into a bacterial plasmid using restriction enzymes and DNA ligase.",
        "A plasmid acts as a vector; the gene + plasmid is recombinant DNA; bacteria are grown in fermenters to mass-produce the protein.",
        "Cloning makes genetically identical copies: plant cuttings / tissue culture, and animal nuclear transfer (e.g. Dolly the sheep).",
        "Clones and GM crops have low genetic variation, so the whole population is vulnerable to the same disease or change.",
        "GM and cloning have benefits (cheap medicines, high yields) and concerns (ecological and ethical risks)."
      ],
      thinkDeeper: "Why use bacteria, rather than another mammal, to manufacture human insulin? Bacteria reproduce extremely fast and cheaply in fermenters, the genetic code is universal (so a human gene works inside a bacterium), and a plasmid is easy to cut, insert a gene into, and put back. One engineered bacterium can become billions of insulin factories in a day.",
      strategies: ["Compare selective breeding (within species, slow) vs genetic engineering (between species, fast)", "Learn the insulin steps in order: cut gene → cut plasmid → join with ligase → insert into bacterium → grow"],
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
      "A mutation is a random change in the genetic material; a gene mutation changes one gene (e.g. sickle cell), a chromosomal mutation changes whole chromosomes (e.g. Down's syndrome).",
      "Mutagens — ionising radiation (X-rays, UV) and some chemicals (tobacco tar) — increase the mutation rate; only mutations in gametes are inherited.",
      "Sex-linked recessive conditions (colour blindness, haemophilia) are commoner in males, who have only one X; a heterozygous female (e.g. X^H X^h) is an unaffected carrier.",
      "In a pedigree, two unaffected parents with an affected child means the condition is recessive; circles = female, squares = male, shaded = affected.",
      "Natural selection (proposed by Darwin): variation → selection pressure → survival of the fittest → increased allele frequency; evolution = change in allele frequency over generations.",
      "Antibiotic resistance in bacteria and the peppered moth are examples of natural selection.",
      "Selective breeding = humans choose parents; differs from natural selection in that humans are the selection pressure.",
      "Genetic engineering inserts a gene (e.g. human insulin) into a bacterial plasmid using restriction enzymes and DNA ligase; cloning makes genetically identical copies (cuttings, tissue culture, nuclear transfer — e.g. Dolly the sheep)."
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
      { front: "What is a mutation?", back: "A random, spontaneous change in the genetic material — either a gene mutation (one gene, e.g. sickle cell) or a chromosomal mutation (whole chromosomes, e.g. Down's syndrome)." },
      { front: "Name three mutagens.", back: "Ionising radiation (X-rays, gamma rays, UV); certain chemicals/carcinogens (e.g. tobacco tar); some viruses. They raise the mutation rate." },
      { front: "Why are X-linked recessive conditions commoner in males?", back: "Males have only one X chromosome, so a single recessive allele on it is expressed — they cannot be carriers. Females have two Xs, so a dominant allele can mask the recessive one (carrier)." },
      { front: "How is human insulin made by genetic engineering?", back: "Cut the insulin gene from human DNA with a restriction enzyme; cut a bacterial plasmid with the same enzyme; join the gene in with DNA ligase (recombinant DNA); insert into bacteria; grow them in fermenters to make insulin." },
      { front: "What is cloning, and one method?", back: "Producing genetically identical copies of an organism. Methods: plant cuttings/tissue culture; animal nuclear transfer (body-cell nucleus into an empty egg — e.g. Dolly the sheep)." },
      { front: "Continuous vs discontinuous variation", back: "Continuous: smooth range, polygenic + environment (e.g. height), bell-curve graph. Discontinuous: distinct categories, usually one gene (e.g. blood group), bar-chart graph." },
      { front: "What is natural selection?", back: "The process by which individuals with favourable heritable traits survive and reproduce more, increasing the frequency of beneficial alleles. Proposed by Darwin." },
      { front: "How does antibiotic resistance arise by natural selection?", back: "Random mutation → resistant variant → antibiotic kills non-resistant bacteria → resistant bacteria survive and reproduce → resistance allele spreads." },
      { front: "Explain the peppered moth example.", back: "Soot from industry blackened tree bark; dark moths were now camouflaged and survived predation by birds while pale moths were eaten, so the dark form became common in polluted areas — natural selection." },
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
      { term: "Sex-linked", definition: "A characteristic controlled by a gene carried on a sex chromosome (usually the X); such conditions affect males and females differently." },
      { term: "Carrier", definition: "An individual who is heterozygous for a recessive allele and does not show the condition but can pass the allele to offspring." },
      { term: "Evolution", definition: "The change in the inherited characteristics of a population over many generations through changes in allele frequency, which may result in new species." },
      { term: "Genetic engineering", definition: "Changing the genetic material of an organism by inserting a gene from another organism so it makes a useful protein (producing a GM / transgenic organism)." },
      { term: "Plasmid", definition: "A small circular loop of DNA in bacteria, used as a vector to carry a gene into a host cell in genetic engineering." },
      { term: "Clone", definition: "A genetically identical copy of an organism, produced asexually (e.g. by cuttings, tissue culture or nuclear transfer)." },
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

  // ── QUESTION BANK ──────────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      {
        id: "bio-inheritance-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "10 multiple-choice questions covering DNA structure, genes, chromosomes and cell division basics.",
        questions: [
          {
            id: "bio-inheritance-bm1-01",
            question: "What is the complementary base pair to adenine in DNA?",
            options: ["Uracil", "Thymine", "Guanine", "Cytosine"],
            answerIndex: 1,
            explanation: "In DNA, adenine (A) always pairs with thymine (T) via two hydrogen bonds. Uracil replaces thymine only in RNA. Guanine pairs with cytosine (three hydrogen bonds).",
            guideRef: "DNA, Genes and Chromosomes",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bm1-02",
            question: "Human body cells are diploid with 46 chromosomes. After mitosis, how many chromosomes does each daughter cell contain?",
            options: ["23", "46", "92", "12"],
            answerIndex: 1,
            explanation: "Mitosis produces two genetically identical diploid daughter cells. Each daughter cell receives the same number of chromosomes as the parent cell — 46 in humans.",
            guideRef: "Mitosis and Meiosis",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bm1-03",
            question: "Which part of a cell contains the chromosomes?",
            options: ["Cell membrane", "Cytoplasm", "Nucleus", "Mitochondria"],
            answerIndex: 2,
            explanation: "Chromosomes are found in the nucleus of eukaryotic cells. The nucleus acts as the control centre of the cell, housing the cell's genetic material (DNA organised into chromosomes).",
            guideRef: "DNA, Genes and Chromosomes",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bm1-04",
            question: "A gene codes for the production of a specific:",
            options: ["Carbohydrate", "Lipid", "Protein", "Nucleotide"],
            answerIndex: 2,
            explanation: "A gene is a specific sequence of DNA bases that codes for the production of a particular protein. The sequence of bases determines the sequence of amino acids assembled at ribosomes to form the protein.",
            guideRef: "DNA, Genes and Chromosomes",
            difficulty: "core",
            hints: ["Think about what the base sequence of DNA is ultimately translated into at the ribosome."],
          },
          {
            id: "bio-inheritance-bm1-05",
            question: "An organism has 2n = 28. How many chromosomes will a gamete produced by this organism contain?",
            options: ["28", "56", "14", "7"],
            answerIndex: 2,
            explanation: "Gametes are produced by meiosis, which halves the chromosome number (2n → n). If 2n = 28, then n = 28 ÷ 2 = 14 chromosomes in each gamete.",
            guideRef: "Mitosis and Meiosis",
            difficulty: "core",
            hints: ["Meiosis halves the chromosome number from diploid (2n) to haploid (n)."],
          },
          {
            id: "bio-inheritance-bm1-06",
            question: "Which statement correctly describes the relationship between genes and alleles?",
            options: [
              "All genes are alleles",
              "An allele is a specific version of a gene",
              "A gene is a type of allele",
              "Alleles are non-coding sections of DNA"
            ],
            answerIndex: 1,
            explanation: "An allele is a specific version (variant) of a gene. Different alleles of the same gene occupy the same locus on homologous chromosomes but have slightly different base sequences, which can produce different phenotypes.",
            guideRef: "DNA, Genes and Chromosomes",
            difficulty: "core",
            hints: ["Alleles = different versions of a gene at the same chromosomal locus."],
          },
          {
            id: "bio-inheritance-bm1-07",
            question: "Which molecule carries genetic information from the nucleus to the ribosome?",
            options: ["DNA", "mRNA", "tRNA", "rRNA"],
            answerIndex: 1,
            explanation: "mRNA (messenger RNA) carries the genetic code transcribed from DNA in the nucleus to ribosomes in the cytoplasm, where the code is translated into a protein. DNA remains in the nucleus; tRNA brings amino acids to the ribosome during translation.",
            guideRef: "DNA, Genes and Chromosomes",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bm1-08",
            question: "A cell in G1 phase has 46 chromosomes. After DNA replication (S phase) but before mitosis, how many DNA molecules does the cell contain?",
            options: ["23", "46", "92", "184"],
            answerIndex: 2,
            explanation: "Each chromosome consists of one DNA molecule. After DNA replication, each chromosome consists of two identical sister chromatids, each of which is one DNA molecule. So 46 chromosomes × 2 chromatids = 92 DNA molecules.",
            guideRef: "Mitosis and Meiosis",
            difficulty: "core",
            hints: [
              "Before replication: each chromosome = 1 DNA molecule (46 total).",
              "After replication: each chromosome = 2 sister chromatids, each a separate DNA molecule.",
              "46 chromosomes × 2 DNA molecules each = ?"
            ],
          },
          {
            id: "bio-inheritance-bm1-09",
            question: "A scientist finds a section of DNA with the base sequence: A-T-G-C-C-A. What is the complementary base sequence on the other strand?",
            options: ["T-A-C-G-G-T", "U-A-C-G-G-U", "A-T-G-C-C-A", "T-A-C-G-T-A"],
            answerIndex: 0,
            explanation: "Apply the base-pairing rules: A pairs with T, T pairs with A, G pairs with C, C pairs with G. So A-T-G-C-C-A becomes T-A-C-G-G-T. Uracil (U) only appears in RNA, not DNA — option B is an RNA sequence.",
            guideRef: "DNA, Genes and Chromosomes",
            difficulty: "challenge",
            hints: [
              "Apply the rules A↔T and G↔C to each base in turn.",
              "Remember: U only appears in RNA, not DNA."
            ],
          },
          {
            id: "bio-inheritance-bm1-10",
            question: "Which of the following sequences correctly shows the levels of organisation from smallest to largest?",
            options: [
              "Gene → chromosome → allele → nucleus",
              "Allele → gene → chromosome → nucleus",
              "Chromosome → gene → allele → nucleus",
              "Nucleus → chromosome → allele → gene"
            ],
            answerIndex: 1,
            explanation: "An allele is a specific version of a gene (smallest unit here). Genes are sections of chromosomes. Chromosomes are housed within the nucleus (largest structure here). So the correct order is: allele → gene → chromosome → nucleus.",
            guideRef: "DNA, Genes and Chromosomes",
            difficulty: "challenge",
            strategy: "Build the hierarchy of biological organisation from the bottom up.",
          },
        ],
      },
      {
        id: "bio-inheritance-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "10 multiple-choice questions covering mitosis, meiosis, crossing over, independent assortment and genetic variation.",
        questions: [
          {
            id: "bio-inheritance-bm2-01",
            question: "Which of the following is the correct number of cells produced by meiosis from one parent cell?",
            options: ["1", "2", "4", "8"],
            answerIndex: 2,
            explanation: "Meiosis involves two successive divisions (meiosis I and meiosis II) producing four haploid daughter cells from one diploid parent cell.",
            guideRef: "Mitosis and Meiosis",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bm2-02",
            question: "Mitosis is used for which of the following?",
            options: [
              "Production of gametes",
              "Halving the chromosome number",
              "Growth and repair of body tissues",
              "Creating genetically different cells"
            ],
            answerIndex: 2,
            explanation: "Mitosis produces two genetically identical diploid daughter cells and is used for growth, repair and replacement of body cells (somatic cells). Gametes are produced by meiosis, which halves the chromosome number and creates genetic diversity.",
            guideRef: "Mitosis and Meiosis",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bm2-03",
            question: "During which stage of meiosis does crossing over occur?",
            options: ["Metaphase I", "Prophase I", "Anaphase II", "Telophase II"],
            answerIndex: 1,
            explanation: "Crossing over occurs during Prophase I of meiosis, when homologous chromosomes pair up (synapsis) and non-sister chromatids exchange segments at points called chiasmata. This creates new allele combinations.",
            guideRef: "Mitosis and Meiosis",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bm2-04",
            question: "Independent assortment in meiosis occurs because:",
            options: [
              "Chromosomes mutate randomly",
              "Homologous pairs align randomly at the equator in metaphase I",
              "Sister chromatids separate independently",
              "Crossing over always occurs at the same point"
            ],
            answerIndex: 1,
            explanation: "During metaphase I, each pair of homologous chromosomes lines up on the equator independently of every other pair. Which chromosome of each pair goes to which pole is random, generating 2^n possible combinations of maternal and paternal chromosomes in gametes.",
            guideRef: "Mitosis and Meiosis",
            difficulty: "core",
            hints: ["Think about what happens at the equatorial plate during meiosis I — which side does each homolog go to?"],
          },
          {
            id: "bio-inheritance-bm2-05",
            question: "A cell with 2n = 16 undergoes meiosis. How many chromosomes are in each resulting cell, and are they haploid or diploid?",
            options: ["16, diploid", "8, haploid", "4, haploid", "8, diploid"],
            answerIndex: 1,
            explanation: "Meiosis halves the chromosome number from diploid (2n) to haploid (n). If 2n = 16, then n = 8. The resulting cells are haploid (containing one set of chromosomes).",
            guideRef: "Mitosis and Meiosis",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bm2-06",
            question: "Which statement correctly distinguishes the daughter cells of mitosis from those of meiosis?",
            options: [
              "Mitosis cells are haploid; meiosis cells are diploid",
              "Mitosis cells are genetically identical; meiosis cells are genetically different",
              "Mitosis produces 4 cells; meiosis produces 2",
              "Both produce genetically identical cells"
            ],
            answerIndex: 1,
            explanation: "Mitosis produces two genetically identical diploid cells. Meiosis produces four haploid cells that are genetically different from each other and from the parent cell, due to crossing over and independent assortment.",
            guideRef: "Mitosis and Meiosis",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bm2-07",
            question: "A mutation occurs in a skin cell of an adult organism. This mutation:",
            options: [
              "Will be inherited by the organism's offspring",
              "Can only be passed on if it occurs in a gamete",
              "Cannot affect the organism's phenotype",
              "Will be inherited because it is in a somatic cell"
            ],
            answerIndex: 1,
            explanation: "Mutations in somatic (body) cells such as skin cells are NOT inherited by offspring because skin cells do not give rise to gametes. Only mutations in gametes (or cells that produce gametes) can be passed to the next generation.",
            guideRef: "Variation, Mutation and Sources of Genetic Difference",
            difficulty: "core",
            hints: ["Which cells give rise to the next generation — body cells or gametes?"],
          },
          {
            id: "bio-inheritance-bm2-08",
            question: "Which of the following increases the rate of mutation?",
            options: [
              "Eating a high-protein diet",
              "Exposure to ionising radiation",
              "Exercising regularly",
              "Taking antibiotics"
            ],
            answerIndex: 1,
            explanation: "Ionising radiation (such as X-rays, gamma rays and UV radiation) is a mutagen — it damages DNA and increases the rate at which mutations occur. Diet, exercise and antibiotics do not directly increase mutation rate.",
            guideRef: "Variation, Mutation and Sources of Genetic Difference",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bm2-09",
            question: "A cell undergoes meiosis. Before meiosis begins, there are 6 pairs of homologous chromosomes. During meiosis I, crossing over occurs at one point on each chromosome pair. How many recombinant chromosomes are produced in total?",
            options: ["6", "12", "24", "48"],
            answerIndex: 1,
            explanation: "Each crossing-over event between a pair of homologous chromosomes produces 2 recombinant chromosomes (one from each homolog that exchanged segments). With 6 pairs, each undergoing one crossover: 6 × 2 = 12 recombinant chromosomes.",
            guideRef: "Mitosis and Meiosis",
            difficulty: "challenge",
            hints: [
              "Each crossover event involves two chromatids (one from each homolog).",
              "Both chromatids involved become recombinant.",
              "6 pairs × 2 recombinant chromosomes per pair = ?"
            ],
          },
          {
            id: "bio-inheritance-bm2-10",
            question: "A species has 2n = 46. Due to independent assortment alone (ignoring crossing over), how many genetically different types of gamete are theoretically possible from one individual?",
            options: ["46", "23", "2^23", "23^2"],
            answerIndex: 2,
            explanation: "Independent assortment means each of the 23 homologous chromosome pairs can align in either of two orientations at metaphase I. The total number of possible gamete combinations = 2^23 ≈ 8.4 million.",
            guideRef: "Mitosis and Meiosis",
            difficulty: "challenge",
            strategy: "Think of each chromosome pair as a binary choice (which homolog goes to which pole). With 23 independent choices, the total is 2^23.",
          },
        ],
      },
      {
        id: "bio-inheritance-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "10 multiple-choice questions covering monohybrid crosses, Punnett squares, probability and pedigrees.",
        questions: [
          {
            id: "bio-inheritance-bm3-01",
            question: "What does the term 'phenotype' mean?",
            options: [
              "The alleles an organism carries",
              "The observable characteristics of an organism",
              "The set of dominant alleles an organism has",
              "The number of chromosomes in a cell"
            ],
            answerIndex: 1,
            explanation: "Phenotype refers to the observable characteristics of an organism — what it looks like or how it functions. Genotype refers to the alleles an organism carries. Phenotype results from an interaction between genotype and environment.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bm3-02",
            question: "An organism with genotype Tt is described as:",
            options: ["Homozygous dominant", "Homozygous recessive", "Heterozygous", "Codominant"],
            answerIndex: 2,
            explanation: "An organism with two different alleles for a gene (e.g. Tt) is described as heterozygous. Homozygous means both alleles are the same (TT or tt). Codominant describes a specific relationship between two alleles, not the term for having two different alleles.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bm3-03",
            question: "In a cross between two heterozygous organisms (Aa × Aa), what is the probability of an aa offspring?",
            options: ["0%", "25%", "50%", "75%"],
            answerIndex: 1,
            explanation: "Punnett square for Aa × Aa: offspring are AA (25%), Aa (50%), aa (25%). So the probability of a homozygous recessive (aa) offspring is 1/4 = 25%.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bm3-04",
            question: "A tall pea plant (Tt) is crossed with a short pea plant (tt). What is the expected phenotype ratio?",
            options: ["All tall", "3 tall : 1 short", "1 tall : 1 short", "1 tall : 3 short"],
            answerIndex: 2,
            explanation: "Punnett square for Tt × tt: offspring are Tt, Tt, tt, tt — 2 tall : 2 short = 1 tall : 1 short. This is a test cross (crossing a dominant-phenotype organism with a homozygous recessive).",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "core",
            hints: ["Write out the gametes: T and t from the tall parent; t and t from the short parent.", "Complete the Punnett square and count phenotypes."],
          },
          {
            id: "bio-inheritance-bm3-05",
            question: "A pedigree chart shows that two unaffected parents have an affected child. The condition is most likely:",
            options: [
              "Dominant, autosomal",
              "Recessive, autosomal",
              "Sex-linked dominant",
              "Cannot be determined from this information"
            ],
            answerIndex: 1,
            explanation: "If both parents are unaffected but have an affected child, the condition must be recessive — the parents are carriers (heterozygous) who do not show the phenotype but can pass on the recessive allele. A dominant condition would require at least one parent to be affected.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "core",
            hints: [
              "For a dominant condition, where would the allele have to come from?",
              "Can two unaffected parents both carry a recessive allele without showing it?"
            ],
          },
          {
            id: "bio-inheritance-bm3-06",
            question: "Which of the following crosses would produce offspring in a 1:2:1 genotype ratio?",
            options: ["AA × aa", "Aa × Aa", "Aa × aa", "AA × Aa"],
            answerIndex: 1,
            explanation: "Aa × Aa gives: AA (25%), Aa (50%), aa (25%) = 1 AA : 2 Aa : 1 aa. The 1:2:1 genotype ratio is the signature of a heterozygous × heterozygous cross.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "core",
            strategy: "The 1:2:1 genotype ratio always comes from a heterozygous × heterozygous cross.",
          },
          {
            id: "bio-inheritance-bm3-07",
            question: "In a test cross, an organism showing the dominant phenotype is crossed with a homozygous recessive organism. If the test cross produces ONLY dominant phenotype offspring (in a large sample), the tested organism is:",
            options: [
              "Definitely heterozygous",
              "Definitely homozygous dominant",
              "Either heterozygous or homozygous — this cross cannot distinguish them",
              "Definitely homozygous recessive"
            ],
            answerIndex: 1,
            explanation: "If the tested organism were heterozygous (Aa), crossing with aa would give approximately 50% recessive phenotype offspring. With a large sample showing ALL dominant offspring, this strongly indicates the organism is homozygous dominant (AA), since AA × aa gives only Aa (dominant phenotype).",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "core",
            hints: [
              "If the organism were Aa: cross with aa gives Aa (dominant) and aa (recessive) in 1:1 ratio.",
              "If the organism were AA: cross with aa gives only Aa (all dominant).",
              "Which scenario produces only dominant offspring?"
            ],
          },
          {
            id: "bio-inheritance-bm3-08",
            question: "In humans, freckles (F) are dominant over no freckles (f). A man with freckles whose father had no freckles is crossed with a woman with no freckles. What proportion of their children are expected to have freckles?",
            options: ["0%", "25%", "50%", "100%"],
            answerIndex: 2,
            explanation: "The man's father had no freckles (ff), so the man inherited one f allele from his father. Since the man has freckles, his genotype must be Ff. The woman has no freckles = ff. Cross: Ff × ff gives Ff and ff in 1:1 ratio. 50% of children will have freckles.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "core",
            hints: [
              "The man's father had no freckles (ff). What allele did the man inherit from his father?",
              "The man has freckles — so what must his genotype be?",
              "Now cross his genotype with the woman's genotype (ff)."
            ],
          },
          {
            id: "bio-inheritance-bm3-09",
            question: "In a species of mice, black fur (B) is dominant over brown (b), and short tail (S) is dominant over long tail (s). These genes assort independently. Two mice, both BbSs, are crossed. What fraction of offspring are expected to have brown fur and a short tail?",
            options: ["1/16", "3/16", "9/16", "3/4"],
            answerIndex: 1,
            explanation: "Treat each gene independently. From Bb × Bb: P(brown = bb) = 1/4. From Ss × Ss: P(short tail = S_) = 3/4. Combined (independent genes): P(brown AND short) = 1/4 × 3/4 = 3/16.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "challenge",
            strategy: "Treat each gene independently, then multiply probabilities using the product rule for independent events.",
          },
          {
            id: "bio-inheritance-bm3-10",
            question: "A plant heterozygous for seed colour (Gg, green dominant over yellow) is self-fertilised. Out of 400 seeds expected, how many would be expected to show the green phenotype?",
            options: ["100", "200", "300", "400"],
            answerIndex: 2,
            explanation: "Gg × Gg gives GG (25%), Gg (50%), gg (25%). Green phenotype = GG + Gg = 75% = 3/4. Expected green seeds = 3/4 × 400 = 300.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "challenge",
          },
        ],
      },
      {
        id: "bio-inheritance-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "10 multiple-choice questions covering codominance, ABO blood groups, sex determination, sex linkage, natural selection, selective breeding and variation.",
        questions: [
          {
            id: "bio-inheritance-bm4-01",
            question: "Which blood group results from the genotype I^A I^B?",
            options: ["A", "B", "AB", "O"],
            answerIndex: 2,
            explanation: "When both I^A and I^B alleles are present, this is a case of codominance — both alleles are fully expressed. The person produces both A and B antigens on their red blood cells, giving blood group AB.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bm4-02",
            question: "A woman has blood group O. What is her genotype?",
            options: ["I^A I^A", "I^A i", "I^B i", "ii"],
            answerIndex: 3,
            explanation: "Blood group O results from genotype ii (homozygous for the recessive i allele). The i allele does not code for any surface antigen. Only when no I^A or I^B allele is present does the person have blood group O.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bm4-03",
            question: "In humans, which chromosome combination determines that an individual is male?",
            options: ["XX", "XY", "YY", "X only"],
            answerIndex: 1,
            explanation: "Sex in humans is determined by the sex chromosomes. Females have two X chromosomes (XX); males have one X and one Y chromosome (XY). The Y chromosome carries the SRY gene which triggers male development.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bm4-04",
            question: "A man with blood group A (I^A i) and a woman with blood group B (I^B i) have children. Which blood groups are possible in their children?",
            options: [
              "A and B only",
              "A, B, AB and O",
              "AB only",
              "O only"
            ],
            answerIndex: 1,
            explanation: "Cross: I^A i × I^B i. Possible genotypes in offspring: I^A I^B (AB), I^A i (A), I^B i (B), ii (O). All four blood groups are possible.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "core",
            hints: [
              "List all possible gamete combinations: I^A with I^B, I^A with i, i with I^B, i with i.",
              "What blood group does each genotype produce?"
            ],
          },
          {
            id: "bio-inheritance-bm4-05",
            question: "In snapdragons, C^R C^R = red, C^W C^W = white, C^R C^W = pink. Two pink snapdragons are crossed. What is the expected ratio of flower colours in the offspring?",
            options: [
              "All pink",
              "1 red : 1 white",
              "1 red : 2 pink : 1 white",
              "3 red : 1 white"
            ],
            answerIndex: 2,
            explanation: "Cross: C^R C^W × C^R C^W. Punnett square gives: C^R C^R (red), C^R C^W (pink), C^R C^W (pink), C^W C^W (white). Ratio: 1 red : 2 pink : 1 white.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "core",
            hints: ["Both parents are C^R C^W. Draw the Punnett square and identify each genotype's phenotype."],
          },
          {
            id: "bio-inheritance-bm4-06",
            question: "A woman with normal vision whose father was colour blind (X-linked recessive) marries a man with normal vision. What is the probability that their first son is colour blind?",
            options: ["0%", "25%", "50%", "100%"],
            answerIndex: 2,
            explanation: "The woman's father was colour blind (X^n Y), so she inherited X^n from him. She has normal vision, so her genotype is X^N X^n (carrier). Her husband is X^N Y. Sons receive Y from their father and either X^N or X^n from their mother — 50% chance of X^n Y (colour blind).",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "core",
            hints: [
              "The woman's father was colour blind: what allele did she inherit from him on her X chromosome?",
              "She has normal vision: what must her other X allele be?",
              "Sons get Y from their father — what determines whether a son is colour blind?"
            ],
          },
          {
            id: "bio-inheritance-bm4-07",
            question: "Which of the following best describes the role of mutation in evolution?",
            options: [
              "Mutations cause organisms to adapt intentionally to their environment",
              "Mutations provide the heritable variation on which natural selection acts",
              "Mutations always produce beneficial changes that drive evolution",
              "Mutations only affect the next generation if they occur in somatic cells"
            ],
            answerIndex: 1,
            explanation: "Mutations create new alleles — new heritable variants. Natural selection then acts on this variation, favouring individuals whose phenotype is better suited to the environment. Mutations are random, not intentional, and most are neutral or harmful. Only mutations in gametes (not somatic cells) are heritable.",
            guideRef: "Natural Selection, Evolution and Selective Breeding",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bm4-08",
            question: "Selective breeding differs from natural selection in that:",
            options: [
              "Selective breeding never changes allele frequencies",
              "In selective breeding, humans act as the selection pressure",
              "Natural selection is always faster than selective breeding",
              "Selective breeding can only occur in plants"
            ],
            answerIndex: 1,
            explanation: "The key distinction is WHO or WHAT acts as the selection pressure. In selective breeding, humans deliberately choose which individuals reproduce based on desired traits. In natural selection, the environment determines which individuals survive and reproduce.",
            guideRef: "Natural Selection, Evolution and Selective Breeding",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bm4-09",
            question: "A woman who is a carrier for haemophilia (X^H X^h) has children with an unaffected man (X^H Y). What is the probability that a daughter is a carrier?",
            options: ["25%", "50%", "75%", "100%"],
            answerIndex: 1,
            explanation: "Cross: X^H X^h × X^H Y. Daughters receive X^H from their father, plus either X^H or X^h from their mother. Daughters: X^H X^H (normal, not a carrier) or X^H X^h (carrier), in 1:1 ratio. P(daughter is a carrier) = 1/2 = 50%.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "challenge",
            hints: [
              "Draw the Punnett square: X^H X^h × X^H Y.",
              "Identify only the daughter genotypes (those with two X chromosomes).",
              "Of the daughters, what fraction are carriers (X^H X^h)?"
            ],
          },
          {
            id: "bio-inheritance-bm4-10",
            question: "A population of dark-coloured moths lives in an industrial area where tree bark is darkened by pollution. A rare mutation produces a light-coloured moth. Over 10 generations, the frequency of the light-colour allele decreases from 5% to 0.5%. Which explanation best accounts for this observation?",
            options: [
              "The light moths mutated back to dark colour",
              "Natural selection acted against light moths because they were more visible to predators on dark bark",
              "Light moths reproduced more slowly due to a genetic defect",
              "Random mutation eliminated the light allele from the population"
            ],
            answerIndex: 1,
            explanation: "This is industrial melanism. On soot-darkened bark, light-coloured moths are more visible to predatory birds. They are selectively removed from the population. Dark moths are better camouflaged, survive and reproduce more, increasing the dark allele frequency. The light allele decreases in frequency over generations — classic directional natural selection.",
            guideRef: "Natural Selection, Evolution and Selective Breeding",
            difficulty: "challenge",
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "bio-inheritance-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "10 structured questions on DNA structure, genes, chromosomes, mitosis and related topics.",
        questions: [
          {
            id: "bio-inheritance-bq1-01",
            question: "State two structural features of the DNA double helix.",
            marks: 2,
            modelAnswer: "Two strands wound around each other in a double helix; the strands are held together by hydrogen bonds between complementary base pairs (A pairs with T; C pairs with G).",
            markScheme: [
              "Two strands / double-stranded structure",
              "Hydrogen bonds between complementary base pairs (A–T and C–G)"
            ],
            guideRef: "DNA, Genes and Chromosomes",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bq1-02",
            question: "Distinguish between a gene and an allele.",
            marks: 2,
            modelAnswer: "A gene is a specific length (sequence) of DNA that codes for the production of a particular protein. An allele is a specific version of a gene — different alleles of the same gene have slightly different base sequences and may produce different forms of the protein.",
            markScheme: [
              "Gene = a length/sequence of DNA coding for a specific protein",
              "Allele = a specific version/variant of a gene / different base sequence at the same locus"
            ],
            guideRef: "DNA, Genes and Chromosomes",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bq1-03",
            question: "Explain why human body cells are described as diploid and gametes as haploid, and explain why this difference is important for sexual reproduction.",
            marks: 4,
            modelAnswer: "Body cells are diploid (2n = 46) because they contain two copies of each chromosome — one set inherited from each parent. Gametes (sperm and egg) are haploid (n = 23) because meiosis halves the chromosome number, leaving only one chromosome from each homologous pair. This is essential for sexual reproduction: at fertilisation, a sperm (n = 23) fuses with an egg (n = 23), restoring the diploid number (2n = 46) in the zygote. Without this halving, chromosome number would double every generation.",
            markScheme: [
              "Body cells contain two sets/copies of chromosomes (diploid, 2n = 46)",
              "Gametes contain one set of chromosomes (haploid, n = 23)",
              "Meiosis halves the chromosome number",
              "Fertilisation (n + n) restores the diploid number / prevents chromosome number doubling each generation"
            ],
            commonError: "Students often say meiosis 'doubles then halves' — meiosis only halves the chromosome number; DNA replication (which doubles DNA content) occurs before meiosis begins.",
            guideRef: "Mitosis and Meiosis",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bq1-04",
            question: "A student says 'mitosis and meiosis both produce new cells, so they must have the same outcome.' Evaluate this statement, describing TWO ways in which the outcomes differ.",
            marks: 4,
            modelAnswer: "The statement is incorrect. First, mitosis produces two daughter cells, whereas meiosis produces four daughter cells. Second, the cells produced by mitosis are genetically identical to each other and to the parent cell (same chromosome number, same alleles), whereas cells produced by meiosis are genetically different from one another and haploid (half the chromosome number). Meiosis introduces genetic variation through crossing over and independent assortment; mitosis does not.",
            markScheme: [
              "Mitosis produces 2 cells; meiosis produces 4 cells",
              "Mitosis produces genetically identical/diploid cells; meiosis produces genetically different/haploid cells",
              "Meiosis introduces genetic variation (crossing over / independent assortment); mitosis does not"
            ],
            commonError: "Stating that meiosis cells are genetically identical — they are not; crossing over and independent assortment ensure each is unique.",
            guideRef: "Mitosis and Meiosis",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bq1-05",
            question: "Explain what is meant by the term 'mutation' and describe ONE way in which the rate of mutation can be increased.",
            marks: 3,
            modelAnswer: "A mutation is a random, spontaneous change in the base sequence of DNA. If a mutation occurs within a gene, it may alter the protein that gene codes for, potentially changing the organism's phenotype. The rate of mutation can be increased by exposure to mutagens, for example ionising radiation (such as X-rays or UV light from the sun), or chemical mutagens (such as carcinogens found in tobacco smoke).",
            markScheme: [
              "Mutation = random/spontaneous change in the DNA base sequence",
              "May alter protein structure/function and therefore phenotype",
              "Rate increased by a named mutagen: ionising radiation (X-rays/UV/gamma rays) OR chemical mutagen (tobacco smoke/carcinogens)"
            ],
            commonError: "Saying mutations are always harmful — the majority are neutral; occasionally they are beneficial. This misconception should be avoided.",
            guideRef: "Variation, Mutation and Sources of Genetic Difference",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bq1-06",
            question: "A cell with 2n = 8 undergoes mitosis. (a) How many chromosomes will each daughter cell contain? (b) If the same cell underwent meiosis instead, how many chromosomes would each resulting cell contain? (c) State the type of cell that meiosis produces.",
            marks: 3,
            modelAnswer: "(a) 8 chromosomes — mitosis produces diploid daughter cells with the same chromosome number as the parent cell (2n = 8). (b) 4 chromosomes — meiosis halves the chromosome number from 2n = 8 to n = 4. (c) Gametes (sex cells — sperm or egg cells).",
            markScheme: [
              "(a) 8 chromosomes",
              "(b) 4 chromosomes",
              "(c) Gametes / sex cells / sperm or egg cells"
            ],
            commonError: "Answering 4 for part (a) — this confuses mitosis with meiosis. Mitosis does NOT halve the chromosome number.",
            guideRef: "Mitosis and Meiosis",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bq1-07",
            question: "Describe the role of DNA in controlling the characteristics of an organism. Include reference to the terms gene, protein and phenotype in your answer.",
            marks: 4,
            modelAnswer: "DNA carries the genetic information of an organism. It is organised into genes — each gene is a specific sequence of DNA bases that codes for the production of a particular protein. The sequence of bases determines the sequence of amino acids assembled at ribosomes, which in turn determines the structure and function of the protein. Because proteins control the structure and chemical reactions within cells (e.g. as enzymes, structural proteins or hormones), they ultimately determine the observable characteristics (phenotype) of the organism.",
            markScheme: [
              "DNA contains genes",
              "A gene is a sequence of bases coding for a specific protein",
              "Sequence of bases determines the sequence of amino acids / protein structure",
              "Proteins determine the phenotype / characteristics of the organism"
            ],
            commonError: "Saying DNA directly makes proteins — DNA codes for proteins; the actual assembly of amino acids occurs at ribosomes in the cytoplasm.",
            guideRef: "DNA, Genes and Chromosomes",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bq1-08",
            question: "In cats, the gene for fur colour is located on the X chromosome. The allele for orange fur (X^O) is codominant with the allele for black fur (X^B). Female cats with genotype X^O X^B have tortoiseshell (patchy orange and black) fur. (a) Explain why tortoiseshell cats are almost always female. [3 marks] (b) A tortoiseshell female cat is crossed with an orange male cat. Draw a Punnett square and state the expected ratio of coat colours in female offspring only. [2 marks]",
            marks: 5,
            modelAnswer: "(a) Tortoiseshell requires both X^O and X^B alleles to be simultaneously expressed. Males have only one X chromosome (XY genotype), so they can only carry either X^O (orange) or X^B (black) — never both alleles at the same time. Therefore males cannot be tortoiseshell. Females have two X chromosomes (XX) and can be X^O X^B, making the tortoiseshell phenotype possible only in females. (b) Tortoiseshell female: X^O X^B. Orange male: X^O Y. Punnett square: X^O X^O (orange female), X^O X^B (tortoiseshell female), X^O Y (orange male), X^B Y (black male). Female offspring only: 1 X^O X^O (orange) : 1 X^O X^B (tortoiseshell). Ratio of female coat colours = 1 orange : 1 tortoiseshell.",
            markScheme: [
              "(a) Tortoiseshell requires both X^O and X^B alleles",
              "(a) Males are XY and have only one X chromosome / cannot carry both alleles",
              "(a) Females are XX and can carry both alleles simultaneously",
              "(b) Punnett square correct with all four genotypes",
              "(b) Female offspring ratio: 1 orange : 1 tortoiseshell"
            ],
            commonError: "Forgetting that the question asks for female offspring only — if all offspring are listed the ratio is different.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "challenge",
            solutions: [
              {
                label: "Punnett square for tortoiseshell × orange",
                steps: [
                  "Tortoiseshell female gametes: X^O and X^B.",
                  "Orange male gametes: X^O and Y.",
                  "Punnett square: X^O X^O, X^O X^B, X^O Y, X^B Y.",
                  "Daughters (XX): X^O X^O (orange) and X^O X^B (tortoiseshell) — ratio 1:1.",
                  "Sons (XY): X^O Y (orange) and X^B Y (black).",
                  "Female-only ratio: 1 orange : 1 tortoiseshell."
                ]
              }
            ],
          },
          {
            id: "bio-inheritance-bq1-09",
            question: "A scientist studies a population of peppered moths (Biston betularia). Before industrialisation, light-coloured moths were common; dark-coloured moths were rare. After industrialisation darkened tree bark with soot, the proportion of dark moths increased dramatically. (a) Explain, using the theory of natural selection, how the proportion of dark moths increased. [4 marks] (b) When clean-air laws were introduced and bark lightened again, the proportion of light moths increased. Explain this observation. [2 marks]",
            marks: 6,
            modelAnswer: "(a) Within the moth population, random mutations produced a heritable allele for dark colouration. Variation existed in wing colour. Before industrialisation, on pale bark, dark moths were more visible to predators (birds) and were selectively removed — dark colouration was a disadvantage. After industrialisation, soot-darkened bark meant light moths became more visible and dark moths were better camouflaged. Dark moths survived to reproduce more successfully ('survival of the fittest'), passing the dark allele to offspring. Over many generations, the frequency of the dark allele increased and the frequency of the light allele decreased. (b) When bark lightened again, the selection pressure reversed. Dark moths became more visible on pale bark and were selectively removed by predators. Light moths were now better camouflaged and survived and reproduced more successfully. The frequency of the light allele increased again over successive generations.",
            markScheme: [
              "(a) Variation in wing colour existed in the population",
              "(a) Dark moths more visible on pale bark before industrialisation / light moths camouflaged",
              "(a) On dark bark after industrialisation, dark moths better camouflaged; light moths more visible to predators",
              "(a) Dark moths survive and reproduce / pass dark allele to offspring; frequency of dark allele increases",
              "(b) Selection pressure reversed — dark moths now more visible on pale bark",
              "(b) Light moths survive and reproduce more; light allele frequency increases"
            ],
            commonError: "Saying the moths changed colour deliberately in response to pollution — they did not change; natural selection acted on pre-existing heritable variation in the population.",
            guideRef: "Natural Selection, Evolution and Selective Breeding",
            difficulty: "challenge",
            strategy: "Use the 5-step natural selection framework: variation → selection pressure → survival → reproduction → change in allele frequency.",
          },
          {
            id: "bio-inheritance-bq1-10",
            question: "A gene has two alleles: A (dominant) and a (recessive). In a population study, 36% of individuals show the recessive phenotype. Assuming Hardy-Weinberg equilibrium: (a) Calculate the frequency of the recessive allele (a). [1 mark] (b) Calculate the frequency of the dominant allele (A). [1 mark] (c) Calculate the expected frequency of heterozygous individuals (Aa) in the population. [2 marks] (d) State ONE assumption of the Hardy-Weinberg principle that, if violated, would cause natural selection to occur. [1 mark]",
            marks: 5,
            modelAnswer: "(a) Frequency of aa = 0.36; frequency of allele a = q = √0.36 = 0.6. (b) Frequency of allele A = p = 1 − q = 1 − 0.6 = 0.4. (c) Frequency of Aa (heterozygotes) = 2pq = 2 × 0.4 × 0.6 = 0.48. So 48% of the population are expected to be heterozygous. (d) Any one of: no natural selection (all genotypes survive and reproduce equally); random mating occurs; no mutation; no gene flow / no migration into or out of the population; large population size.",
            markScheme: [
              "(a) q = √0.36 = 0.6",
              "(b) p = 1 − 0.6 = 0.4",
              "(c) 2pq = 2 × 0.4 × 0.6 = 0.48 / 48%",
              "(d) Any valid Hardy-Weinberg assumption stated (no selection / random mating / no mutation / no gene flow / large population)"
            ],
            commonError: "Calculating 2pq as p × q (forgetting the factor of 2). Heterozygous individuals can be Aa in two ways, so the formula is 2pq not pq.",
            guideRef: "Natural Selection, Evolution and Selective Breeding",
            difficulty: "challenge",
            strategy: "Start from the recessive phenotype frequency = q². Take the square root to get q, then use p + q = 1 to find p.",
            hints: [
              "Recessive phenotype = aa genotype; frequency of aa = q².",
              "Take the square root of q² to find q (the allele frequency).",
              "p + q = 1, so p = 1 − q.",
              "Heterozygotes = 2pq."
            ],
          },
        ],
      },
      {
        id: "bio-inheritance-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "10 structured questions on meiosis, crossing over, genetic variation and mutation.",
        questions: [
          {
            id: "bio-inheritance-bq2-01",
            question: "State TWO differences between mitosis and meiosis.",
            marks: 2,
            modelAnswer: "Any two of: mitosis produces 2 cells / meiosis produces 4 cells; mitosis produces diploid cells / meiosis produces haploid cells; mitosis produces genetically identical cells / meiosis produces genetically different cells; mitosis involves 1 division / meiosis involves 2 divisions.",
            markScheme: [
              "Mitosis → 2 cells; meiosis → 4 cells",
              "Mitosis → diploid; meiosis → haploid",
              "Mitosis → genetically identical; meiosis → genetically different",
              "(Any two of the above, one mark each)"
            ],
            guideRef: "Mitosis and Meiosis",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bq2-02",
            question: "State the meaning of the term 'crossing over' and explain when in cell division it occurs.",
            marks: 2,
            modelAnswer: "Crossing over is the exchange of segments between non-sister chromatids of homologous chromosomes. It occurs during prophase I of meiosis, when homologous chromosomes pair up and form bivalents.",
            markScheme: [
              "Exchange of segments/portions between non-sister chromatids of homologous chromosomes",
              "Occurs during prophase I of meiosis"
            ],
            commonError: "Saying crossing over occurs in mitosis — it only occurs in meiosis (prophase I).",
            guideRef: "Mitosis and Meiosis",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bq2-03",
            question: "Explain why meiosis is described as a source of genetic variation. Your answer should refer to TWO processes that occur during meiosis.",
            marks: 4,
            modelAnswer: "Meiosis produces genetic variation through two main processes. First, crossing over occurs in prophase I, where segments are exchanged between non-sister chromatids of homologous chromosome pairs. This creates new combinations of alleles on individual chromosomes, producing recombinant chromosomes that did not exist before. Second, independent assortment occurs in metaphase I, where each pair of homologous chromosomes aligns randomly on the equatorial plate. The orientation of one pair is independent of all others. This means gametes receive a random combination of maternal and paternal chromosomes. Together, crossing over and independent assortment ensure each gamete produced is genetically unique.",
            markScheme: [
              "Crossing over: exchange of segments between homologous chromatids in prophase I",
              "Crossing over creates new combinations of alleles on chromosomes",
              "Independent assortment: random orientation of homologous pairs at metaphase I",
              "Each gamete receives a random mix of maternal and paternal chromosomes / gametes are genetically unique"
            ],
            commonError: "Only naming one process — the question specifies TWO processes. Both crossing over and independent assortment must be described.",
            guideRef: "Mitosis and Meiosis",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bq2-04",
            question: "A somatic (body) cell mutation occurs in the skin of a mouse. (a) Explain why this mutation will NOT be passed to offspring. [2 marks] (b) Describe TWO features of mutations that mean natural selection can act on them. [2 marks]",
            marks: 4,
            modelAnswer: "(a) Somatic (body) cell mutations are not present in gametes. For a mutation to be inherited, it must occur in gametes (sperm or eggs) or in the cells of the reproductive organs that produce gametes. Skin cells do not give rise to gametes, so the mutation in the skin cell cannot be transmitted to offspring. (b) Any two of: mutations are heritable if they occur in gametes — offspring inherit the new allele, providing raw material for selection; mutations alter the phenotype (by changing the protein produced), meaning that natural selection can act on the altered characteristic; mutations are random and create new alleles that may be advantageous, neutral or disadvantageous in the environment.",
            markScheme: [
              "(a) Skin/somatic cells do not produce gametes",
              "(a) Mutation must be in gamete/reproductive cell to be inherited",
              "(b) Mutations are heritable (if in gametes) / passed to offspring",
              "(b) Mutations alter phenotype (via protein change) — selection can act on the new phenotype"
            ],
            guideRef: "Variation, Mutation and Sources of Genetic Difference",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bq2-05",
            question: "Explain the difference between continuous and discontinuous variation and give one cause of each type.",
            marks: 3,
            modelAnswer: "Continuous variation describes characteristics that show a smooth, unbroken range of values with no distinct categories (e.g. height, body mass). It is caused by the combined effect of many genes (polygenic inheritance) and environmental factors. Discontinuous variation describes characteristics that fall into distinct, separate categories with no intermediate forms (e.g. ABO blood group, ability to roll tongue). It is caused by the effect of a single gene or a small number of genes, with little or no environmental influence.",
            markScheme: [
              "Continuous: smooth range of values / no distinct categories; caused by many genes (polygenic) and/or environment",
              "Discontinuous: separate distinct categories / no intermediate values; caused by one or few genes, little environmental effect",
              "(One mark for each definition with cause; accept two marks for both definitions)"
            ],
            commonError: "Giving examples that contradict the definition — blood group is always discontinuous and is never affected by environment.",
            guideRef: "Variation, Mutation and Sources of Genetic Difference",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bq2-06",
            question: "In Drosophila fruit flies, long wing (L) is dominant over vestigial (short) wing (l). A researcher crosses a long-winged fly with a vestigial-winged fly and obtains 50% long-winged and 50% vestigial-winged offspring. (a) State the genotypes of both parent flies. [2 marks] (b) A second long-winged fly from a different population is crossed with a vestigial-winged fly, and ALL offspring are long-winged. State the genotype of this second long-winged fly and explain your reasoning. [2 marks]",
            marks: 4,
            modelAnswer: "(a) Long-winged parent: Ll (heterozygous). Vestigial-winged parent: ll (homozygous recessive). A 1:1 phenotype ratio is produced by a test cross (Ll × ll). (b) The second long-winged fly must be LL (homozygous dominant). If it were Ll, crossing with ll would give some ll (vestigial-winged) offspring (1:1 ratio). Since ALL offspring are long-winged, the fly must supply only L gametes — which is only possible if its genotype is LL.",
            markScheme: [
              "(a) Long-winged parent: Ll",
              "(a) Vestigial-winged parent: ll",
              "(b) Genotype: LL",
              "(b) Reasoning: any Ll parent would give some ll (vestigial) offspring; all long-winged offspring → only L gametes possible → must be LL"
            ],
            commonError: "Writing LL for the first long-winged parent in (a) without recognising that the 1:1 ratio indicates a test cross (Ll × ll).",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "core",
            solutions: [
              {
                label: "Deduction from offspring ratios",
                steps: [
                  "Cross 1: 50% long : 50% vestigial = 1:1 ratio = test cross pattern.",
                  "Vestigial parent must be ll. Long parent must be Ll (to give 50% ll offspring).",
                  "Cross 2: all offspring long-winged.",
                  "If long parent were Ll: Ll × ll → 50% Ll (long) + 50% ll (vestigial). But NO vestigial offspring.",
                  "Therefore long parent must be LL: LL × ll → all Ll (long-winged)."
                ]
              }
            ],
          },
          {
            id: "bio-inheritance-bq2-07",
            question: "Explain how a change in a single base pair in DNA can lead to a change in the phenotype of an organism. Your answer should refer to the concept of a protein.",
            marks: 4,
            modelAnswer: "A gene contains a specific sequence of DNA base pairs that codes for the production of a particular protein. The sequence of bases determines which amino acids are assembled at ribosomes, and thus the primary structure of the protein. If a single base pair changes (a point mutation), the codon at that position may code for a different amino acid. This can alter the primary structure (amino acid sequence) of the resulting protein, which may change its three-dimensional shape. If the protein is an enzyme, a change in shape can alter or destroy the active site, affecting how it catalyses a reaction — which can change the observable characteristics (phenotype) of the organism.",
            markScheme: [
              "Gene base sequence determines amino acid sequence of a protein",
              "A point mutation changes one codon",
              "Different amino acid may be incorporated, changing the protein's primary structure",
              "Changed protein structure alters protein function (e.g. enzyme active site shape)",
              "Altered protein function changes phenotype"
            ],
            commonError: "Stopping at 'the protein is different' without explaining the chain: changed protein structure → changed function → changed phenotype.",
            guideRef: "DNA, Genes and Chromosomes",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bq2-08",
            question: "In Labrador retrievers, coat colour is controlled by two genes. Gene E: allele E (dominant) allows pigment deposition; allele e (recessive) prevents pigment (giving yellow coat). Gene B: allele B (dominant) = black pigment; allele b (recessive) = chocolate pigment (only expressed when E is present). Two black dogs, both with genotype EeBb, are crossed. (a) What fraction of offspring are expected to have a yellow coat? [2 marks] (b) Of those offspring with a black coat, what fraction are expected to be homozygous dominant at both loci (EEBB)? [3 marks]",
            marks: 5,
            modelAnswer: "(a) Yellow coat requires ee (regardless of B locus). From Ee × Ee: P(ee) = 1/4. So 1/4 of all offspring are expected to have yellow coats. (b) Black coat requires E_ B_ (at least one E and at least one B). P(E_) = 3/4; P(B_) = 3/4; P(black) = 9/16. P(EEBB) = P(EE) × P(BB) = 1/4 × 1/4 = 1/16. P(EEBB | black) = (1/16) ÷ (9/16) = 1/9.",
            markScheme: [
              "(a) Yellow = ee; P(ee) from Ee × Ee = 1/4",
              "(b) Black = E_B_; P(black) = 3/4 × 3/4 = 9/16",
              "(b) P(EEBB) = 1/4 × 1/4 = 1/16",
              "(b) Conditional probability = (1/16) ÷ (9/16) = 1/9"
            ],
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "challenge",
            solutions: [
              {
                label: "Dihybrid cross with conditional probability",
                steps: [
                  "Gene E: Ee × Ee → P(EE) = 1/4, P(Ee) = 1/2, P(ee) = 1/4.",
                  "Gene B: Bb × Bb → P(BB) = 1/4, P(Bb) = 1/2, P(bb) = 1/4.",
                  "(a) Yellow = ee: P = 1/4.",
                  "(b) Black = E_B_ = P(E_) × P(B_) = 3/4 × 3/4 = 9/16.",
                  "P(EEBB) = P(EE) × P(BB) = 1/4 × 1/4 = 1/16.",
                  "Of black offspring: P(EEBB | black) = (1/16) / (9/16) = 1/9."
                ]
              }
            ],
          },
          {
            id: "bio-inheritance-bq2-09",
            question: "A pedigree chart shows the following: Generation I: unaffected father (I-1) and unaffected mother (I-2). Generation II: affected son (II-1), unaffected daughter (II-2), unaffected son (II-3). The condition is autosomal recessive (alleles H = normal, dominant; h = affected, recessive). (a) State the genotypes of I-1 and I-2. [2 marks] (b) State the genotype of II-2 if she is a carrier. [1 mark] (c) II-2 marries an unaffected man who is not a carrier. Calculate the probability that their first child will be affected by the condition. [2 marks]",
            marks: 5,
            modelAnswer: "(a) Both parents are unaffected but have an affected child (hh). Therefore both must have passed on an h allele to that child: I-1 = Hh and I-2 = Hh. (b) If II-2 is a carrier, her genotype is Hh. (c) II-2 is unaffected and from Hh × Hh cross; unaffected offspring are HH or Hh in ratio 1:2, so P(Hh | unaffected) = 2/3. Her husband is HH (not a carrier). Cross Hh × HH → HH or Hh, both unaffected. Even if II-2 is Hh, her husband can only contribute H alleles. No child can receive two h alleles (hh). P(affected child) = 0%.",
            markScheme: [
              "(a) I-1 = Hh; I-2 = Hh (both carriers)",
              "(b) Hh",
              "(c) Husband is HH — only provides H alleles",
              "(c) Child cannot be hh; P(affected) = 0 / 0%"
            ],
            commonError: "Not recognising that the husband being HH (not a carrier) means he provides only H alleles — so children can never receive two h alleles and be affected.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "challenge",
            strategy: "Carefully track what alleles each parent can contribute before calculating probabilities.",
          },
          {
            id: "bio-inheritance-bq2-10",
            question: "Explain how the following contribute to genetic variation within a population: (a) meiosis [3 marks], (b) mutation [2 marks], (c) sexual reproduction (fertilisation) [1 mark].",
            marks: 6,
            modelAnswer: "(a) Meiosis contributes to genetic variation in two ways. Crossing over in prophase I creates new combinations of alleles on chromosomes by exchanging segments between non-sister chromatids of homologous pairs. Independent assortment in metaphase I means each pair of homologous chromosomes aligns randomly, so each gamete receives a different, random combination of maternal and paternal chromosomes. Together, crossing over and independent assortment ensure each gamete is genetically unique. (b) Mutation produces new alleles by randomly changing the base sequence of DNA. Since mutations are heritable if they occur in gametes, they introduce genuinely new genetic variants into the population — variants that did not previously exist. Natural selection can then act on these new alleles. (c) Fertilisation combines gametes from two genetically different individuals, creating new combinations of alleles in the zygote that differ from both parents.",
            markScheme: [
              "(a) Crossing over: exchange of segments → new allele combinations on chromosomes",
              "(a) Independent assortment: random chromosome orientation at metaphase I → unique gametes",
              "(a) Each gamete genetically unique",
              "(b) Mutation creates a new allele (new base sequence)",
              "(b) Heritable if in gamete; introduces new genetic variants to population",
              "(c) Fertilisation combines two unique gametes; offspring allele combination differs from both parents"
            ],
            commonError: "Describing meiosis as simply 'producing haploid cells' without explaining HOW variation is generated — the mechanism (crossing over, independent assortment) must be stated.",
            guideRef: "Variation, Mutation and Sources of Genetic Difference",
            difficulty: "challenge",
          },
        ],
      },
      {
        id: "bio-inheritance-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "10 structured questions on monohybrid crosses, Punnett squares, pedigrees and test crosses.",
        questions: [
          {
            id: "bio-inheritance-bq3-01",
            question: "Define the terms 'dominant' and 'recessive' as used in genetics.",
            marks: 2,
            modelAnswer: "A dominant allele is one that is expressed in the phenotype whenever it is present — even if only one copy is present (in a heterozygote). A recessive allele is one that is only expressed in the phenotype when two copies are present (i.e. the organism is homozygous recessive).",
            markScheme: [
              "Dominant: expressed in phenotype when one or two copies present / expressed in heterozygote",
              "Recessive: only expressed when two copies present / only in homozygous recessive"
            ],
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bq3-02",
            question: "In pea plants, yellow seed colour (Y) is dominant over green (y). A plant with genotype Yy is crossed with a plant with genotype yy. List the possible genotypes of offspring and state the phenotype ratio.",
            marks: 2,
            modelAnswer: "Gametes from Yy: Y and y. Gametes from yy: y only. Punnett square offspring: Yy and yy in equal numbers. Genotypes: 1 Yy : 1 yy. Phenotype ratio: 1 yellow : 1 green (50% yellow, 50% green).",
            markScheme: [
              "Genotypes: Yy and yy (both required)",
              "Phenotype ratio: 1 yellow : 1 green / 1:1"
            ],
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bq3-03",
            question: "In snapdragons, red flowers (R) are dominant over white flowers (r). A red-flowered plant is crossed with a white-flowered plant. All 60 offspring have red flowers. (a) State the genotypes of both parent plants. [2 marks] (b) Two of the red-flowered offspring are crossed with each other. Draw a Punnett square and calculate the expected number of white-flowered plants out of 160 total offspring from this second cross. [2 marks]",
            marks: 4,
            modelAnswer: "(a) Red parent: RR (homozygous dominant); white parent: rr (homozygous recessive). All offspring being red (Rr) indicates the red parent supplies only R alleles, so must be RR. (b) The red offspring are Rr. Cross: Rr × Rr. Punnett square: RR (25%), Rr (50%), rr (25%). Phenotype ratio: 3 red : 1 white. Expected white plants = 1/4 × 160 = 40.",
            markScheme: [
              "(a) Red parent: RR",
              "(a) White parent: rr",
              "(b) Punnett square Rr × Rr correct; ratio 3 red : 1 white",
              "(b) 1/4 × 160 = 40 white-flowered plants"
            ],
            commonError: "Answering 1/2 instead of 1/4 for the white proportion — the 3:1 ratio from Rr × Rr gives 1/4 white, not 1/2.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "core",
            solutions: [
              {
                label: "Punnett square for Rr × Rr",
                steps: [
                  "Gametes from each Rr parent: R and r.",
                  "Punnett square: RR, Rr, Rr, rr.",
                  "Phenotypes: RR = red, Rr = red, rr = white.",
                  "Ratio: 3 red : 1 white.",
                  "Expected white = 1/4 × 160 = 40."
                ]
              }
            ],
          },
          {
            id: "bio-inheritance-bq3-04",
            question: "Cystic fibrosis is an autosomal recessive condition (alleles: C = unaffected, c = cystic fibrosis). A couple are both carriers for cystic fibrosis. (a) State the genotypes of both parents. [1 mark] (b) Draw a Punnett square and calculate the probability that their first child has cystic fibrosis. [2 marks] (c) The couple already have two unaffected children. A doctor tells them the probability of a third child having cystic fibrosis is still 25%. Explain why this is correct. [2 marks]",
            marks: 5,
            modelAnswer: "(a) Both parents are Cc (heterozygous carriers). (b) Cc × Cc: Punnett square gives CC, Cc, Cc, cc. P(cc = affected) = 1/4 = 25%. (c) Each pregnancy is an independent event. The outcome of previous pregnancies does not affect the outcome of future ones. Each time gametes combine at fertilisation, there is always a 1/4 probability of producing a cc (cystic fibrosis) child, regardless of how many children have already been born.",
            markScheme: [
              "(a) Both parents: Cc",
              "(b) Punnett square correct; P(cc) = 1/4 / 25%",
              "(c) Each pregnancy is an independent event",
              "(c) Previous outcomes do not change the probability; always 1/4 chance of cc"
            ],
            commonError: "Thinking the probability changes after having unaffected children — genetic probabilities are reset for each independent pregnancy.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "core",
            solutions: [
              {
                label: "Punnett square for Cc × Cc",
                steps: [
                  "Gametes from each parent: C and c.",
                  "Punnett square: CC, Cc, Cc, cc.",
                  "Affected = cc: 1 out of 4 = 25%.",
                  "Independence: each fertilisation is a separate random event."
                ]
              }
            ],
          },
          {
            id: "bio-inheritance-bq3-05",
            question: "In Labrador retrievers, black fur (B) is dominant over chocolate (brown) fur (b). A breeder wants to determine whether a black Labrador is homozygous (BB) or heterozygous (Bb). (a) Describe the test cross the breeder could carry out. [2 marks] (b) Explain how the outcomes of the test cross would allow the breeder to determine the Labrador's genotype. [2 marks]",
            marks: 4,
            modelAnswer: "(a) The breeder should cross the black Labrador (unknown genotype) with a chocolate (brown) Labrador, which must have genotype bb (homozygous recessive). This cross is known as a test cross. (b) If the black Labrador is BB: all offspring will be Bb (black) — no chocolate offspring will appear. If the black Labrador is Bb: offspring will be Bb (black) and bb (chocolate) in approximately 1:1 ratio. If ANY chocolate (bb) offspring appear, the black Labrador must be Bb. If a large sample of offspring all show black fur, this provides evidence that the black Labrador is BB.",
            markScheme: [
              "(a) Cross with a chocolate (bb) / homozygous recessive individual",
              "(a) Test cross / back cross",
              "(b) If BB → all offspring black; if Bb → approximately 50% black : 50% chocolate",
              "(b) Any chocolate offspring → parent is Bb; all black offspring → evidence for BB"
            ],
            commonError: "Crossing with another black dog (which could be BB or Bb) rather than with a known homozygous recessive (bb) individual.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bq3-06",
            question: "A pedigree shows a family where some members have an autosomal dominant condition (allele D = affected, d = unaffected). Generation I: I-1 (affected) married to I-2 (unaffected). Generation II: II-1 (affected), II-2 (unaffected), II-3 (affected), II-4 (unaffected). (a) State the genotype of I-2. [1 mark] (b) Suggest the genotype of I-1, giving a reason. [2 marks] (c) If II-3 (affected) has children with an unaffected person, calculate the probability that a child is affected. [1 mark]",
            marks: 4,
            modelAnswer: "(a) I-2 is unaffected, so genotype is dd (homozygous recessive — must have two recessive alleles to show unaffected phenotype for a dominant condition). (b) I-1 is affected. Since some children are unaffected (dd), I-1 must have passed on a d allele to those children. Therefore I-1 is Dd (heterozygous). If I-1 were DD, all offspring would be Dd and all affected — but some are unaffected. (c) Assuming II-3 is Dd (from a Dd × dd cross): II-3 (Dd) × unaffected partner (dd) → Dd (affected) and dd (unaffected) in 1:1 ratio. P(affected) = 1/2 = 50%.",
            markScheme: [
              "(a) dd",
              "(b) Dd — some children are unaffected; I-1 must contribute d to those children; DD would give all affected",
              "(c) Dd × dd → 1:1 ratio; P(affected) = 1/2 / 50%"
            ],
            commonError: "Saying I-1 is DD without considering that unaffected children (dd) must have received a d allele from I-1.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "core",
            solutions: [
              {
                label: "Punnett square for II-3 × unaffected partner",
                steps: [
                  "II-3 is affected, from Dd × dd parents, so II-3 is Dd.",
                  "Unaffected partner: dd.",
                  "Cross: Dd × dd → Dd (affected) and dd (unaffected).",
                  "P(affected) = 1/2 = 50%."
                ]
              }
            ],
          },
          {
            id: "bio-inheritance-bq3-07",
            question: "Polydactyly (extra fingers) in humans is caused by a dominant allele (P). Two parents, both affected with polydactyly, have an unaffected child. (a) State the genotypes of both parents. [2 marks] (b) Draw a Punnett square and state all possible phenotypes and their expected probabilities. [2 marks] (c) The couple want a child without polydactyly. State the probability and explain whether they should be reassured or concerned. [1 mark]",
            marks: 5,
            modelAnswer: "(a) Both parents are affected (have at least one P allele). They have an unaffected child (pp), so each parent must have contributed one p allele to that child — each parent is Pp (heterozygous). (b) Pp × Pp: Punnett square gives PP, Pp, Pp, pp. Phenotypes: polydactyly (PP or Pp) = 3/4 = 75%; unaffected (pp) = 1/4 = 25%. (c) Probability of an unaffected child = 25% (1 in 4). There is a relatively high chance (75%) of any child having polydactyly — this is a significant concern.",
            markScheme: [
              "(a) Both parents: Pp (heterozygous) — must pass p to unaffected child",
              "(b) Punnett square correct; polydactyly 3/4 (75%); unaffected 1/4 (25%)",
              "(c) 25% / 1 in 4; relatively high risk of polydactyly (75%); concern appropriate"
            ],
            commonError: "Making one parent PP because they are affected — ignoring the unaffected child as evidence that both parents must carry a p allele.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "core",
            solutions: [
              {
                label: "Punnett square for Pp × Pp",
                steps: [
                  "Both parents Pp (each has affected phenotype and produced pp child).",
                  "Punnett: PP, Pp, Pp, pp.",
                  "PP: polydactyly; Pp: polydactyly; pp: unaffected.",
                  "P(polydactyly) = 3/4; P(unaffected) = 1/4."
                ]
              }
            ],
          },
          {
            id: "bio-inheritance-bq3-08",
            question: "Explain what is meant by the term 'test cross' and describe how a test cross can be used to determine the genotype of a plant showing a dominant phenotype. Use a named example in your answer.",
            marks: 4,
            modelAnswer: "A test cross is a cross between an organism showing the dominant phenotype (which could be homozygous dominant or heterozygous) and an organism that is homozygous recessive for the characteristic being studied. Example using pea plants: round seeds (R) dominant over wrinkled (r). A round-seeded plant could be RR or Rr. To find out, cross it with a wrinkled-seeded plant (rr). If the round plant is RR: all offspring are Rr (all round seeds). If the round plant is Rr: offspring are Rr (round) and rr (wrinkled) in approximately 1:1 ratio. If any wrinkled offspring appear, the original plant must have been Rr. If a large sample all show round seeds, this is evidence for RR.",
            markScheme: [
              "Test cross = cross with homozygous recessive individual",
              "Named example correctly identified (round × wrinkled / any valid dominant × homozygous recessive)",
              "If all dominant offspring → parent is homozygous dominant (RR)",
              "If ~50% recessive offspring → parent is heterozygous (Rr)"
            ],
            commonError: "Crossing with another dominant-phenotype plant rather than with a known homozygous recessive individual.",
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bq3-09",
            question: "In a species of plant, flower colour is controlled by two independent genes. Gene 1: A (produces pigment, dominant) / a (no pigment, recessive). Gene 2: B (blue pigment modifier, dominant) / b (red pigment modifier, recessive). Flowers with genotype A_B_ are purple; A_bb are red; aaB_ and aabb are white (no pigment). A plant with genotype AaBb is crossed with a plant with genotype Aabb. (a) List all possible genotype classes of offspring and their frequencies. [3 marks] (b) State the phenotypes and their expected proportions. [2 marks] (c) A student claims that 1/8 of offspring will be white. Evaluate this claim. [1 mark]",
            marks: 6,
            modelAnswer: "(a) For gene 1: Aa × Aa → P(A_) = 3/4; P(aa) = 1/4. For gene 2: Bb × bb → P(B_) = 1/2; P(bb) = 1/2. All combinations: A_B_ = 3/4 × 1/2 = 3/8; A_bb = 3/4 × 1/2 = 3/8; aaB_ = 1/4 × 1/2 = 1/8; aabb = 1/4 × 1/2 = 1/8. (b) Purple (A_B_) = 3/8; Red (A_bb) = 3/8; White (aaB_ + aabb) = 1/8 + 1/8 = 2/8 = 1/4. (c) The student is incorrect. White requires aa genotype, which occurs with probability 1/4 (not 1/8), combined with any B genotype. Total white = 1/4 = 2/8. The student only counted aabb (1/8) as white, but aaB_ (1/8) is also white — both lack pigment.",
            markScheme: [
              "(a) A_B_ = 3/8; A_bb = 3/8; aaB_ = 1/8; aabb = 1/8",
              "(b) Purple 3/8; Red 3/8; White 1/4 (= 2/8)",
              "(c) Student is incorrect; aaB_ is also white; total white = 2/8 = 1/4, not 1/8"
            ],
            guideRef: "Monohybrid Crosses and Punnett Squares",
            difficulty: "challenge",
            solutions: [
              {
                label: "Product rule for independent genes",
                steps: [
                  "Gene 1: Aa × Aa → P(A_) = 3/4; P(aa) = 1/4.",
                  "Gene 2: Bb × bb → P(B_) = 1/2; P(bb) = 1/2.",
                  "A_B_ = 3/4 × 1/2 = 3/8 (purple).",
                  "A_bb = 3/4 × 1/2 = 3/8 (red).",
                  "aaB_ = 1/4 × 1/2 = 1/8 (white).",
                  "aabb = 1/4 × 1/2 = 1/8 (white).",
                  "Total white = 1/8 + 1/8 = 2/8 = 1/4."
                ]
              }
            ],
          },
          {
            id: "bio-inheritance-bq3-10",
            question: "A woman (II-2) is unaffected but her brother (II-3) has an X-linked recessive condition (allele X^d). Their father (I-1) is unaffected and their mother (I-2) is an unaffected carrier. (a) State the genotype of I-2. [1 mark] (b) Using a Punnett square, show the expected genotypes of children from I-1 × I-2. [2 marks] (c) II-2 is unaffected. State the probability that she is a carrier. [1 mark] (d) II-2 marries an unaffected man. If II-2 is a carrier, what is the probability that their first child is affected? [1 mark]",
            marks: 5,
            modelAnswer: "(a) I-2 is a carrier: X^D X^d. (b) I-1: X^D Y; I-2: X^D X^d. Punnett square gives: X^D X^D (unaffected female), X^D X^d (carrier female), X^D Y (unaffected male), X^d Y (affected male). (c) Unaffected daughters from this cross: X^D X^D or X^D X^d in 1:1 ratio. P(carrier | unaffected daughter) = 1/2 = 50%. (d) If II-2 is X^D X^d and her husband is X^D Y: offspring: X^D X^D, X^D X^d, X^D Y, X^d Y. P(affected = X^d Y) = 1/4 = 25%.",
            markScheme: [
              "(a) X^D X^d",
              "(b) Punnett square: X^D X^D, X^D X^d, X^D Y, X^d Y all correctly placed",
              "(c) 50% / 1/2",
              "(d) 25% / 1/4"
            ],
            commonError: "In (c), saying 100% carrier because her brother is affected — ignoring the 50% chance she could be X^D X^D (homozygous dominant, not a carrier).",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "challenge",
            solutions: [
              {
                label: "Punnett square I-1 × I-2",
                steps: [
                  "I-1 gametes: X^D and Y.",
                  "I-2 gametes: X^D and X^d.",
                  "Punnett: X^D X^D (normal female), X^D X^d (carrier female), X^D Y (normal male), X^d Y (affected male).",
                  "Unaffected daughters: X^D X^D and X^D X^d — 50% are carriers.",
                  "If II-2 is carrier (X^D X^d) × X^D Y husband: X^D X^D, X^D X^d, X^D Y, X^d Y.",
                  "P(affected = X^d Y) = 1/4 = 25%."
                ]
              }
            ],
          },
        ],
      },
      {
        id: "bio-inheritance-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "10 structured questions on codominance, ABO blood groups, sex linkage, natural selection, selective breeding and variation.",
        questions: [
          {
            id: "bio-inheritance-bq4-01",
            question: "State what is meant by codominance and give one example.",
            marks: 2,
            modelAnswer: "Codominance is a relationship between two alleles in which both are fully expressed in the phenotype of the heterozygote — neither allele is dominant over the other. Example: ABO blood group system — a person with genotype I^A I^B has blood group AB, expressing both A and B antigens on their red blood cells. Alternative example: roan cattle — genotype C^R C^W produces a coat with both red and white hairs.",
            markScheme: [
              "Both alleles fully expressed in the heterozygote / neither allele masks the other",
              "Correct named example (I^A I^B = blood group AB; or snapdragons C^R C^W = pink; or roan cattle)"
            ],
            commonError: "Confusing codominance with incomplete dominance — codominance produces a phenotype where BOTH traits are visible simultaneously (e.g. both A and B antigens), whereas incomplete dominance produces a true blend.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bq4-02",
            question: "State the possible genotypes for a person with blood group A.",
            marks: 2,
            modelAnswer: "A person with blood group A could have genotype I^A I^A (homozygous, with two copies of the I^A allele) or I^A i (heterozygous, with one I^A allele and one recessive i allele).",
            markScheme: [
              "I^A I^A (homozygous dominant)",
              "I^A i (heterozygous) — both genotypes required for full marks"
            ],
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "warmup",
          },
          {
            id: "bio-inheritance-bq4-03",
            question: "A man with blood group AB and a woman with blood group A (genotype I^A i) have children. (a) Draw a Punnett square and list all possible blood groups of their children. [3 marks] (b) The couple have a child with blood group O. Is this genetically possible? Explain your answer. [1 mark]",
            marks: 4,
            modelAnswer: "(a) Man: I^A I^B; Woman: I^A i. Punnett square: I^A I^A (blood group A), I^A i (blood group A), I^A I^B (blood group AB), I^B i (blood group B). Possible blood groups: A, B, AB. (b) Blood group O requires genotype ii. The man (I^A I^B) can only contribute I^A or I^B — he has no i allele. Therefore no child can receive two i alleles, and blood group O is NOT genetically possible for this couple.",
            markScheme: [
              "(a) Punnett square correct: I^A I^A, I^A i, I^A I^B, I^B i",
              "(a) Blood groups listed: A, B, AB",
              "(b) Not possible; man has no i allele; child cannot be ii"
            ],
            commonError: "Forgetting that the AB father can only contribute I^A or I^B — he has no i allele, so blood group O is impossible.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "core",
            solutions: [
              {
                label: "Punnett square I^A I^B × I^A i",
                steps: [
                  "Man's gametes: I^A and I^B.",
                  "Woman's gametes: I^A and i.",
                  "Punnett: I^A I^A (A), I^A i (A), I^A I^B (AB), I^B i (B).",
                  "Blood groups possible: A, AB, B.",
                  "O requires ii — man cannot provide i; therefore O is impossible."
                ]
              }
            ],
          },
          {
            id: "bio-inheritance-bq4-04",
            question: "In humans, red-green colour blindness is X-linked recessive (X^N = normal vision; X^n = colour blind). A woman with normal vision whose mother was colour blind marries a man with normal vision. (a) State the woman's genotype. [1 mark] (b) Draw a Punnett square to show the expected genotypes of their children. [2 marks] (c) Calculate the probability of: (i) a son with normal vision; (ii) a daughter who is colour blind. [2 marks]",
            marks: 5,
            modelAnswer: "(a) The woman's mother was colour blind (X^n X^n), so the woman must have inherited one X^n from her mother. She has normal vision, so her genotype is X^N X^n (carrier). (b) Woman: X^N X^n; Man: X^N Y. Punnett square: X^N X^N (normal female), X^N X^n (carrier female), X^N Y (normal male), X^n Y (colour-blind male). (c)(i) Of sons: X^N Y (normal) or X^n Y (colour blind) — P(son has normal vision) = 1/2 = 50% of sons (or 1/4 = 25% of all children). (ii) Daughters are X^N X^N or X^N X^n — neither is colour blind. P(daughter colour blind) = 0%.",
            markScheme: [
              "(a) X^N X^n (carrier)",
              "(b) Punnett square: X^N X^N, X^N X^n, X^N Y, X^n Y correctly placed",
              "(c)(i) 50% of sons / 25% of all children (accept either with correct working)",
              "(c)(ii) 0% — no daughter can be X^n X^n in this cross"
            ],
            commonError: "Saying daughters can be colour blind in this cross — impossible because the father is X^N Y and can only give X^N to daughters; daughters will always have at least one X^N allele.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "core",
            solutions: [
              {
                label: "Punnett square X^N X^n × X^N Y",
                steps: [
                  "Mother gametes: X^N, X^n. Father gametes: X^N, Y.",
                  "Punnett: X^N X^N (normal female), X^N X^n (carrier female), X^N Y (normal male), X^n Y (colour-blind male).",
                  "Sons: X^N Y (normal) and X^n Y (colour blind) — 50% of sons are normal.",
                  "Daughters: X^N X^N and X^N X^n — 0% are colour blind."
                ]
              }
            ],
          },
          {
            id: "bio-inheritance-bq4-05",
            question: "Describe the process of natural selection using a named example. Your answer should include: variation, selection pressure, survival and reproduction, and change in allele frequency.",
            marks: 4,
            modelAnswer: "Example: antibiotic resistance in bacteria. Variation exists in the bacterial population due to random mutations — some bacteria carry an allele conferring resistance to an antibiotic. The selection pressure is the antibiotic: non-resistant bacteria are killed. Resistant bacteria survive the antibiotic and reproduce rapidly by binary fission, passing the resistance allele to all daughter cells. Over successive generations, the frequency of the resistance allele increases in the population while the frequency of the sensitive allele decreases. The population evolves to become resistant.",
            markScheme: [
              "Variation in population stated (e.g. due to mutation)",
              "Selection pressure named (antibiotic / predation / any correct example)",
              "Better-adapted individuals survive and reproduce, passing allele to offspring",
              "Allele frequency of favourable allele increases over generations"
            ],
            commonError: "Saying the antibiotic 'causes' the resistance mutation — the antibiotic only selects for resistance that already exists due to prior random mutation.",
            guideRef: "Natural Selection, Evolution and Selective Breeding",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bq4-06",
            question: "Distinguish between natural selection and selective breeding, giving an example of each.",
            marks: 4,
            modelAnswer: "In natural selection, the environment acts as the selection pressure. Individuals with heritable characteristics better suited to their environment survive and reproduce more successfully, passing favourable alleles to offspring. Over many generations, allele frequencies change — this is evolution. Example: antibiotic-resistant bacteria — the antibiotic kills sensitive bacteria; resistant bacteria survive and multiply. In selective breeding, humans act as the selection pressure. Breeders deliberately choose which individuals reproduce based on desired characteristics, repeating this over many generations. Example: selectively breeding wheat for high grain yield — farmers choose the highest-yielding plants as parents each generation. Key difference: in natural selection, the environment selects; in selective breeding, humans select.",
            markScheme: [
              "Natural selection: environment selects; heritable variation; favourable alleles increase in frequency; named example",
              "Selective breeding: humans choose parents; repeated over generations; named example",
              "Key difference: selection pressure is the environment vs. humans"
            ],
            commonError: "Saying selective breeding changes DNA directly — it only changes allele frequencies by controlling which organisms breed.",
            guideRef: "Natural Selection, Evolution and Selective Breeding",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bq4-07",
            question: "A student investigates variation in leaf length by measuring 30 leaves from an oak tree in full sunlight and 30 from an oak tree in deep shade. (a) Predict whether leaf length would show continuous or discontinuous variation. Explain your prediction. [2 marks] (b) Suggest why leaves from the shaded tree might be larger on average. [2 marks] (c) The student concludes that any differences between the two trees' leaf lengths must be due to the environment. Evaluate this conclusion. [1 mark]",
            marks: 5,
            modelAnswer: "(a) Leaf length shows continuous variation — it is a quantitative measurement that can take any value within a range, with no distinct categories. It is influenced by many genes (polygenic) and by environmental factors, producing an approximately normal distribution. (b) Leaves in shade receive less light for photosynthesis. A larger surface area increases the amount of light the leaf can intercept. There may be phenotypic plasticity — the plant adjusts leaf size in response to light availability to maximise photosynthesis. (c) The conclusion is oversimplified. Differences in leaf length could be due to: (1) environmental differences (light, water, temperature) between the two locations; (2) genetic differences between the two trees (they are different individual organisms with different genotypes); or (3) a combination of both. Without using genetically identical plants (clones) in both conditions, it is impossible to attribute differences solely to the environment.",
            markScheme: [
              "(a) Continuous; quantitative/smooth range/no distinct categories; polygenic + environmental influence",
              "(b) More surface area captures more light; phenotypic plasticity / adaptive response to low light",
              "(c) Could be genetic differences between trees; need identical genotypes (clones) to isolate environmental effect; cannot attribute solely to environment"
            ],
            commonError: "Saying leaf length is discontinuous because measurements give discrete numbers — measurements are always discrete; the underlying variation is still continuous.",
            guideRef: "Variation, Mutation and Sources of Genetic Difference",
            difficulty: "core",
          },
          {
            id: "bio-inheritance-bq4-08",
            question: "Haemophilia A is an X-linked recessive condition (alleles: X^H = normal clotting; X^h = haemophilia). A carrier woman has children with an unaffected man. (a) State the genotype of the carrier woman and the unaffected man. [1 mark] (b) Draw a Punnett square. [2 marks] (c) The couple have a son. Calculate the probability that he has haemophilia. [1 mark]",
            marks: 4,
            modelAnswer: "(a) Carrier woman: X^H X^h. Unaffected man: X^H Y. (b) Punnett square (X^H X^h × X^H Y): X^H X^H (unaffected female), X^H X^h (carrier female), X^H Y (unaffected male), X^h Y (haemophilia male). (c) Sons: X^H Y (normal) or X^h Y (haemophilia) in 1:1 ratio. P(son has haemophilia) = 1/2 = 50%.",
            markScheme: [
              "(a) Carrier woman: X^H X^h; unaffected man: X^H Y",
              "(b) Punnett square: X^H X^H, X^H X^h, X^H Y, X^h Y all correct",
              "(c) 1/2 / 50%"
            ],
            commonError: "Giving P = 1/4 — this is the probability for all children, not specifically for sons. The question asks about sons only.",
            guideRef: "Codominance, Blood Groups and Sex Determination",
            difficulty: "core",
            solutions: [
              {
                label: "Punnett square X^H X^h × X^H Y",
                steps: [
                  "Mother gametes: X^H and X^h. Father gametes: X^H and Y.",
                  "Punnett: X^H X^H (normal female), X^H X^h (carrier female), X^H Y (normal male), X^h Y (haemophilia male).",
                  "Sons: X^H Y and X^h Y — 50% of sons have haemophilia."
                ]
              }
            ],
          },
          {
            id: "bio-inheritance-bq4-09",
            question: "A population of bacteria is initially all sensitive to antibiotic X. A single bacterium develops a mutation giving resistance. (a) Explain why this single mutation cannot immediately change the population's allele frequency significantly. [1 mark] (b) Describe what happens to the resistance allele frequency when antibiotic X is applied to the population. [3 marks] (c) After several generations of antibiotic treatment the antibiotic is withdrawn. Suggest, with reasoning, what would happen to the resistance allele frequency if the resistance mutation is 'costly' (i.e. reduces bacterial fitness in the absence of antibiotic). [2 marks]",
            marks: 6,
            modelAnswer: "(a) A single resistant bacterium among millions means the resistance allele is at extremely low frequency (approximately 1 in millions). One allele in a huge population has a negligible effect on allele frequency until the bacterium reproduces and the allele spreads. (b) When antibiotic X is applied: the antibiotic acts as a selection pressure. Non-resistant bacteria are killed by the antibiotic. The resistant bacterium survives and reproduces rapidly (binary fission with short generation times). All daughter cells inherit the resistance allele. Over successive generations, the proportion of resistant bacteria increases dramatically until the resistance allele approaches fixation (near 100% frequency). (c) If resistance is costly, resistant bacteria have lower reproductive fitness than sensitive bacteria when no antibiotic is present. Sensitive bacteria (if still present or reintroduced) reproduce faster and outcompete resistant bacteria. The frequency of the resistance allele decreases and the frequency of the sensitivity allele increases over time — natural selection now favours sensitivity in the antibiotic-free environment.",
            markScheme: [
              "(a) Single bacterium = resistance allele at extremely low frequency; negligible effect on population frequency",
              "(b) Antibiotic = selection pressure; sensitive bacteria killed",
              "(b) Resistant bacteria survive and reproduce; pass allele to offspring",
              "(b) Resistance allele frequency increases rapidly towards fixation",
              "(c) Resistance reduces fitness without antibiotic; sensitive bacteria outcompete resistant",
              "(c) Resistance allele frequency decreases; natural selection now favours sensitivity"
            ],
            commonError: "Saying the antibiotic 'causes' the resistance mutation — the antibiotic only selects for pre-existing resistance. The mutation occurred before antibiotic exposure.",
            guideRef: "Natural Selection, Evolution and Selective Breeding",
            difficulty: "challenge",
            strategy: "Apply the natural selection framework: variation → selection pressure → survival → reproduction → allele frequency change.",
          },
          {
            id: "bio-inheritance-bq4-10",
            question: "English Bulldogs have been selectively bred to have an extremely flat face (brachycephaly). Modern Bulldogs commonly suffer from breathing difficulties, skin infections and cannot give birth naturally (requiring caesarean section). (a) Explain why selective breeding was able to produce such extreme characteristics over many generations. [2 marks] (b) Discuss the ethical issues raised by this example, considering both benefits and concerns. [3 marks]",
            marks: 5,
            modelAnswer: "(a) Breeders repeatedly selected individuals with the flattest faces as breeding parents each generation. Only dogs with the most extreme desired phenotype contributed to the next generation's gene pool. Alleles associated with brachycephaly increased in frequency with each generation of selection, while alleles for a more typical nose length decreased. Over many generations, the allele frequencies shifted so dramatically that extreme brachycephaly became the breed norm. (b) Benefits of selective breeding include producing predictable breeds with specific desired characteristics valued by owners, and economic value of pedigree dogs. However, serious concerns arise: the health and welfare of the dogs is severely compromised — breathing difficulties, overheating, chronic pain, and inability to give birth naturally are significant welfare issues. Selective breeding for appearance has reduced genetic diversity, increasing risk of inherited diseases. Breeders have prioritised human aesthetic preferences over animal welfare. This raises the ethical question of whether humans have a responsibility to avoid breeding practices that cause suffering, even if legal and commercially successful.",
            markScheme: [
              "(a) Repeated selection of individuals with flattest face as breeding parents each generation",
              "(a) Alleles for brachycephaly increased in frequency over many generations / extreme phenotype became norm",
              "(b) Benefit: produces specific desired traits / predictable breed characteristics",
              "(b) Concern: serious health and welfare issues for the dogs (breathing / pain / caesarean required)",
              "(b) Concern: reduced genetic diversity / ethical responsibility to animals stated"
            ],
            commonError: "Only describing the process of selective breeding without evaluating the ethical dimension — the question asks students to 'discuss ethical issues', which requires both benefits and concerns.",
            guideRef: "Natural Selection, Evolution and Selective Breeding",
            difficulty: "challenge",
          },
        ],
      },
    ],
  },
};
