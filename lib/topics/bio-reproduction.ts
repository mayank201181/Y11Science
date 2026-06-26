import type { Topic } from "../types";

export const bioReproduction: Topic = {
  id: "bio-reproduction",
  title: "Reproduction",
  subject: "biology",
  icon: "🌸",
  blurb: "Asexual vs sexual reproduction, plant and human reproductive systems, hormones, and STIs.",
  intro: "Reproduction is the biological process by which living organisms produce offspring, ensuring the continuation of species. In this topic we contrast asexual and sexual reproduction, explore how flowering plants attract pollinators and form seeds, and unpack the human reproductive system — from gamete production to pregnancy, hormonal control, and protection against sexually transmitted infections.",

  guide: [
    {
      heading: "Asexual vs Sexual Reproduction",
      body: `**Asexual reproduction** produces genetically identical offspring (clones) from a single parent, with no fusion of gametes. Examples include binary fission in bacteria, budding in yeast, runners in strawberries, and tubers in potatoes.

**Sexual reproduction** involves the fusion of two gametes — one from each parent — to form a zygote. The offspring inherit a combination of genetic material from both parents, producing genetic variation.

- Asexual advantages: rapid population growth; no need for a mate; all offspring can reproduce; well-adapted genotype preserved.
- Asexual disadvantages: no genetic variation; entire population vulnerable to the same disease or environmental change.
- Sexual advantages: genetic variation enables natural selection and adaptation; new combinations of alleles may give some offspring better survival.
- Sexual disadvantages: slower; requires finding a mate; only half the population (females) can produce offspring.

**Variation** arises in sexual reproduction because gametes are formed by meiosis (which shuffles alleles) and fertilisation combines alleles from two different individuals.`,
      keyPoints: [
        "Asexual reproduction: one parent, no gametes, clones produced.",
        "Sexual reproduction: two gametes fuse; offspring show genetic variation.",
        "Variation from sexual reproduction is an advantage under changing environments.",
        "Asexual reproduction is faster and all offspring can reproduce.",
        "Variation arises through meiosis and random fertilisation.",
      ],
      discovery: {
        problem: "A field of potato plants all catch the same blight disease and die. A strawberry patch nearby is unaffected. Both reproduce asexually. What does this tell you about the risk of asexual reproduction, and why might some potato varieties survive while others do not?",
        idea: "Because asexual offspring are genetic clones, they share the same susceptibility to a pathogen. If the disease can infect one plant, it can infect all. Any resistant potato variety would arise only by rare mutation, not by sexual recombination — illustrating why genetic variation from sexual reproduction is so important for species survival.",
      },
      whyItWorks: "In sexual reproduction, meiosis independently assorts homologous chromosomes and crossing over shuffles alleles within chromosomes. Fertilisation then combines two unique sets of alleles. Mathematically, even with just 23 chromosome pairs in humans, meiosis alone can produce over 8 million different gamete types — explaining the enormous variation seen in sexually reproducing populations.",
      strategies: ["Compare and contrast", "Identify advantages/disadvantages for specific scenarios"],
    },
    {
      heading: "Sexual Reproduction in Flowering Plants",
      body: `A flower is the reproductive organ of an angiosperm (flowering plant). Its parts can be divided into male (stamen) and female (carpel) structures.

**Stamen (male):**
- **Anther** — produces and releases pollen grains (each contains male gametes)
- **Filament** — stalk supporting the anther

**Carpel (female):**
- **Stigma** — sticky surface that receives pollen
- **Style** — connects stigma to ovary
- **Ovary** — contains one or more ovules
- **Ovule** — contains the female gamete (egg cell); becomes a seed after fertilisation

**Accessory parts:**
- **Petals** — often coloured/scented to attract insect pollinators
- **Sepals** — protect the flower bud before opening

**Pollination** is the transfer of pollen from an anther to a stigma of the same species. It is not fertilisation.

- **Self-pollination**: pollen lands on the stigma of the same flower or another flower on the same plant. Less genetic variation produced.
- **Cross-pollination**: pollen transferred between different plants of the same species. Produces more genetic variation.

Pollination is carried out by **insect** or **wind** vectors. The two flower types have very different adaptations (see comparison table below).

**Fertilisation in plants:** After pollination, the pollen grain germinates on the stigma, growing a pollen tube down the style to the ovule. The male nucleus travels down the tube and fuses with the female gamete (egg cell) in the ovule — this is fertilisation. The fertilised egg (zygote) develops into an embryo inside the ovule. The ovule becomes a **seed**; the ovary wall becomes the **fruit**.

**Seed dispersal** spreads seeds away from the parent to reduce competition (wind, animals, water, explosive mechanisms).

**Germination** is the resumption of growth by the embryo in the seed. Conditions required: water (activates enzymes, needed for metabolism), oxygen (aerobic respiration for energy), suitable temperature (enzymes work at optimum rate). Light is NOT required for germination itself.`,
      diagrams: [
        {
          caption: "Labelled cross-section of an insect-pollinated flower",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="Cross-section of an insect-pollinated flower showing petal, sepal, anther, filament, stigma, style, ovary and ovule">
  <!-- stem -->
  <rect x="152" y="170" width="16" height="45" fill="#34d399" rx="3"/>
  <!-- receptacle -->
  <ellipse cx="160" cy="170" rx="28" ry="10" fill="#34d399"/>
  <!-- sepals -->
  <ellipse cx="120" cy="158" rx="22" ry="9" fill="#34d399" transform="rotate(-25 120 158)"/>
  <ellipse cx="200" cy="158" rx="22" ry="9" fill="#34d399" transform="rotate(25 200 158)"/>
  <!-- petals -->
  <ellipse cx="80" cy="115" rx="28" ry="12" fill="#fb7185" transform="rotate(-40 80 115)"/>
  <ellipse cx="100" cy="80" rx="28" ry="12" fill="#fb7185" transform="rotate(-15 100 80)"/>
  <ellipse cx="160" cy="65" rx="28" ry="12" fill="#fb7185"/>
  <ellipse cx="220" cy="80" rx="28" ry="12" fill="#fb7185" transform="rotate(15 220 80)"/>
  <ellipse cx="240" cy="115" rx="28" ry="12" fill="#fb7185" transform="rotate(40 240 115)"/>
  <!-- ovary -->
  <ellipse cx="160" cy="155" rx="22" ry="16" fill="#fbbf24" opacity="0.85"/>
  <!-- ovule inside -->
  <ellipse cx="160" cy="158" rx="9" ry="7" fill="#a78bfa"/>
  <!-- style -->
  <rect x="156" y="118" width="8" height="37" fill="#fbbf24" rx="2"/>
  <!-- stigma -->
  <ellipse cx="160" cy="115" rx="13" ry="6" fill="#fbbf24"/>
  <!-- filaments -->
  <line x1="130" y1="150" x2="118" y2="112" stroke="#38bdf8" stroke-width="3"/>
  <line x1="145" y1="148" x2="138" y2="112" stroke="#38bdf8" stroke-width="3"/>
  <line x1="175" y1="148" x2="182" y2="112" stroke="#38bdf8" stroke-width="3"/>
  <line x1="190" y1="150" x2="202" y2="112" stroke="#38bdf8" stroke-width="3"/>
  <!-- anthers -->
  <rect x="111" y="107" width="14" height="8" fill="#38bdf8" rx="3"/>
  <rect x="131" y="107" width="14" height="8" fill="#38bdf8" rx="3"/>
  <rect x="175" y="107" width="14" height="8" fill="#38bdf8" rx="3"/>
  <rect x="195" y="107" width="14" height="8" fill="#38bdf8" rx="3"/>
  <!-- labels -->
  <text x="48" y="100" font-size="9" fill="#eef0ff" text-anchor="middle">Petal</text>
  <line x1="65" y1="102" x2="82" y2="110" stroke="#eef0ff" stroke-width="0.8"/>
  <text x="270" y="100" font-size="9" fill="#eef0ff" text-anchor="middle">Sepal</text>
  <line x1="254" y1="102" x2="218" y2="148" stroke="#eef0ff" stroke-width="0.8"/>
  <text x="270" y="115" font-size="9" fill="#38bdf8" text-anchor="start">Anther</text>
  <line x1="268" y1="113" x2="210" y2="112" stroke="#38bdf8" stroke-width="0.8"/>
  <text x="270" y="130" font-size="9" fill="#38bdf8" text-anchor="start">Filament</text>
  <line x1="268" y1="128" x2="194" y2="128" stroke="#38bdf8" stroke-width="0.8"/>
  <text x="185" y="88" font-size="9" fill="#fbbf24" text-anchor="start">Stigma</text>
  <line x1="184" y1="90" x2="170" y2="114" stroke="#fbbf24" stroke-width="0.8"/>
  <text x="270" y="148" font-size="9" fill="#fbbf24" text-anchor="start">Style</text>
  <line x1="268" y1="146" x2="165" y2="135" stroke="#fbbf24" stroke-width="0.8"/>
  <text x="50" y="160" font-size="9" fill="#fbbf24" text-anchor="middle">Ovary</text>
  <line x1="68" y1="158" x2="138" y2="155" stroke="#fbbf24" stroke-width="0.8"/>
  <text x="50" y="175" font-size="9" fill="#a78bfa" text-anchor="middle">Ovule</text>
  <line x1="68" y1="173" x2="151" y2="160" stroke="#a78bfa" stroke-width="0.8"/>
  <text x="160" y="215" font-size="8" fill="#b7bce0" text-anchor="middle">Insect-pollinated flower (e.g. buttercup)</text>
</svg>`,
        },
        {
          caption: "Pollen tube growth and fertilisation in a flowering plant",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram showing pollen grain on stigma, pollen tube growing through style to ovule containing egg cell">
  <!-- stigma surface -->
  <rect x="100" y="15" width="120" height="18" rx="8" fill="#fbbf24" opacity="0.85"/>
  <text x="160" y="27" font-size="10" fill="#1e293b" text-anchor="middle" font-weight="bold">Stigma (sticky surface)</text>
  <!-- pollen grain on stigma -->
  <circle cx="160" cy="14" r="10" fill="#a78bfa" stroke="#eef0ff" stroke-width="1.5"/>
  <text x="195" y="10" font-size="9" fill="#a78bfa">Pollen grain</text>
  <line x1="171" y1="10" x2="193" y2="9" stroke="#a78bfa" stroke-width="0.8"/>
  <!-- style -->
  <rect x="148" y="33" width="24" height="80" fill="#fbbf24" opacity="0.6" rx="4"/>
  <text x="185" y="75" font-size="9" fill="#fbbf24">Style</text>
  <!-- pollen tube -->
  <line x1="160" y1="24" x2="160" y2="113" stroke="#a78bfa" stroke-width="3"/>
  <text x="105" y="80" font-size="9" fill="#a78bfa" text-anchor="middle">Pollen tube</text>
  <line x1="130" y1="78" x2="148" y2="78" stroke="#a78bfa" stroke-width="0.8"/>
  <!-- male nucleus arrow -->
  <circle cx="160" cy="65" r="5" fill="#fb7185"/>
  <text x="90" y="60" font-size="8" fill="#fb7185" text-anchor="middle">Male nucleus</text>
  <line x1="115" y1="61" x2="154" y2="63" stroke="#fb7185" stroke-width="0.8"/>
  <!-- ovary -->
  <ellipse cx="160" cy="138" rx="45" ry="38" fill="#fbbf24" opacity="0.25" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="220" y="125" font-size="9" fill="#fbbf24">Ovary</text>
  <line x1="210" y1="126" x2="195" y2="130" stroke="#fbbf24" stroke-width="0.8"/>
  <!-- ovule -->
  <ellipse cx="160" cy="143" rx="22" ry="18" fill="#34d399" opacity="0.3" stroke="#34d399" stroke-width="1.5"/>
  <text x="100" y="148" font-size="9" fill="#34d399" text-anchor="middle">Ovule</text>
  <line x1="118" y1="147" x2="138" y2="144" stroke="#34d399" stroke-width="0.8"/>
  <!-- egg cell -->
  <circle cx="160" cy="148" r="8" fill="#34d399" opacity="0.7"/>
  <text x="220" y="152" font-size="9" fill="#34d399">Egg cell</text>
  <line x1="215" y1="151" x2="169" y2="149" stroke="#34d399" stroke-width="0.8"/>
  <!-- fertilisation label -->
  <text x="160" y="195" font-size="8" fill="#b7bce0" text-anchor="middle">Male nucleus fuses with egg cell -- fertilisation</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Stamen = anther + filament (male); carpel = stigma + style + ovary + ovule (female).",
        "Pollination is pollen transfer to a stigma; fertilisation is gamete fusion inside the ovule.",
        "Pollen tube grows from stigma through style to ovule.",
        "Ovule becomes seed; ovary wall becomes fruit after fertilisation.",
        "Germination requires water, oxygen, and suitable temperature (not necessarily light).",
      ],
      thinkDeeper: "Many plants have mechanisms to prevent self-pollination (e.g. timing — anthers release pollen before the stigma is receptive; or structural separation). Why would natural selection favour cross-pollination despite it being more costly (requiring pollinators or wind)?",
      strategies: ["Identify structure-function links", "Sequence the process steps"],
      whyItWorks: "The pollen tube allows the male gamete to travel internally through the style in a moist channel, protecting it from desiccation. This is a key adaptation for life on land — unlike mosses and ferns, which need surface water for sperm to swim to the egg, flowering plants can fertilise even in dry conditions.",
    },
    {
      heading: "Insect- vs Wind-Pollinated Flowers",
      body: `The two main pollination strategies impose very different selection pressures on flower design. Comparing them illustrates how structure reflects function.

**Insect-pollinated flowers (e.g. buttercup, clover):**
- Large, brightly coloured petals — attract insects visually
- Scented — attract insects by smell
- Nectar present — reward for insect visit
- Pollen grains large, sticky, or spiky — cling to insect body
- Stigma inside flower, sticky — traps pollen from visiting insect
- Anthers inside flower, positioned to brush insect

**Wind-pollinated flowers (e.g. grass, hazel):**
- Small, dull/green petals or no petals — no need to attract insects
- No scent, no nectar — no insect reward needed
- Pollen grains tiny, light, smooth, produced in huge quantities — carried by air currents
- Stigma large, feathery, hangs outside flower — large surface area to catch airborne pollen
- Anthers large, hang outside flower on long filaments — shed pollen freely into the wind

**Challenge: flower adaptation comparison** — given an unknown flower description, deduce its pollinator and justify each feature (see challenge question in the question bank).`,
      diagrams: [
        {
          caption: "Insect-pollinated vs wind-pollinated flower adaptations — comparison",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Side-by-side comparison of insect-pollinated and wind-pollinated flower features">
  <!-- dividing line -->
  <line x1="160" y1="10" x2="160" y2="195" stroke="#b7bce0" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- headers -->
  <text x="80" y="20" font-size="10" fill="#fb7185" text-anchor="middle" font-weight="bold">Insect-pollinated</text>
  <text x="240" y="20" font-size="10" fill="#38bdf8" text-anchor="middle" font-weight="bold">Wind-pollinated</text>
  <!-- Feature rows -->
  <!-- Petals -->
  <text x="80" y="38" font-size="8.5" fill="#eef0ff" text-anchor="middle">Large, coloured petals</text>
  <text x="240" y="38" font-size="8.5" fill="#eef0ff" text-anchor="middle">Small/no petals</text>
  <line x1="20" y1="42" x2="300" y2="42" stroke="#334155" stroke-width="0.8"/>
  <!-- Scent/Nectar -->
  <text x="80" y="56" font-size="8.5" fill="#eef0ff" text-anchor="middle">Scented; nectar present</text>
  <text x="240" y="56" font-size="8.5" fill="#eef0ff" text-anchor="middle">No scent or nectar</text>
  <line x1="20" y1="60" x2="300" y2="60" stroke="#334155" stroke-width="0.8"/>
  <!-- Pollen -->
  <text x="80" y="76" font-size="8.5" fill="#fb7185" text-anchor="middle">Pollen: sticky, large,</text>
  <text x="80" y="87" font-size="8.5" fill="#fb7185" text-anchor="middle">spiky; small amounts</text>
  <text x="240" y="76" font-size="8.5" fill="#38bdf8" text-anchor="middle">Pollen: smooth, light,</text>
  <text x="240" y="87" font-size="8.5" fill="#38bdf8" text-anchor="middle">tiny; huge amounts</text>
  <line x1="20" y1="92" x2="300" y2="92" stroke="#334155" stroke-width="0.8"/>
  <!-- Stigma -->
  <text x="80" y="108" font-size="8.5" fill="#fbbf24" text-anchor="middle">Stigma: sticky,</text>
  <text x="80" y="119" font-size="8.5" fill="#fbbf24" text-anchor="middle">inside flower</text>
  <text x="240" y="108" font-size="8.5" fill="#fbbf24" text-anchor="middle">Stigma: feathery, large,</text>
  <text x="240" y="119" font-size="8.5" fill="#fbbf24" text-anchor="middle">hangs outside flower</text>
  <line x1="20" y1="124" x2="300" y2="124" stroke="#334155" stroke-width="0.8"/>
  <!-- Anthers -->
  <text x="80" y="140" font-size="8.5" fill="#34d399" text-anchor="middle">Anthers: inside flower,</text>
  <text x="80" y="151" font-size="8.5" fill="#34d399" text-anchor="middle">brush visiting insects</text>
  <text x="240" y="140" font-size="8.5" fill="#34d399" text-anchor="middle">Anthers: long filaments,</text>
  <text x="240" y="151" font-size="8.5" fill="#34d399" text-anchor="middle">hang outside, shed freely</text>
  <line x1="20" y1="156" x2="300" y2="156" stroke="#334155" stroke-width="0.8"/>
  <!-- Example -->
  <text x="80" y="170" font-size="8" fill="#b7bce0" text-anchor="middle">e.g. buttercup, rose</text>
  <text x="240" y="170" font-size="8" fill="#b7bce0" text-anchor="middle">e.g. grass, hazel</text>
  <text x="160" y="193" font-size="7.5" fill="#b7bce0" text-anchor="middle">Structure reflects pollination strategy</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Insect-pollinated: bright petals, scent, nectar, sticky/spiky pollen, sticky stigma inside.",
        "Wind-pollinated: no petals, no scent, no nectar, smooth light pollen in large amounts, feathery stigma outside.",
        "Pollen quantity is vastly greater in wind-pollinated plants to compensate for random dispersal.",
        "Feathery stigma maximises surface area for catching airborne pollen grains.",
      ],
      discovery: {
        problem: "You are given a flower with: no scent; tiny, pale green petals; very long stamens dangling outside the flower; a branched, feathery stigma. Is this flower insect- or wind-pollinated? List three pieces of evidence and explain each.",
        idea: "This is a wind-pollinated flower. Evidence: (1) No scent — no need to attract insects. (2) Pale/tiny petals — insects don't need to find it. (3) Dangling anthers — positioned to shed pollen freely into moving air. (4) Feathery stigma — large surface area to trap randomly drifting pollen grains.",
      },
      strategies: ["Evidence-based reasoning", "Feature-function matching"],
    },
    {
      heading: "Human Reproductive Systems",
      body: `**Male reproductive system:**
- **Testes** — produce sperm (spermatogenesis) and testosterone; located in the scrotum (slightly cooler than body temperature, optimal for sperm production)
- **Sperm duct (vas deferens)** — carries sperm from testis towards the urethra
- **Glands (seminal vesicles, prostate)** — add fluids to form semen
- **Urethra** — carries semen (or urine, but not simultaneously) out of the penis
- **Penis** — deposits semen into the vagina during sexual intercourse

**Sperm (male gamete) adaptations:**
- Streamlined head with acrosome (contains enzymes to penetrate egg)
- Nucleus containing haploid chromosomes (23)
- Midpiece packed with mitochondria — aerobic respiration for energy (ATP) for movement
- Long tail (flagellum) — propulsion through fluid

**Female reproductive system:**
- **Ovaries** — produce eggs (ova) by meiosis; secrete oestrogen and progesterone
- **Oviducts (Fallopian tubes)** — carry egg from ovary to uterus; ciliated lining wafts egg along; site of fertilisation
- **Uterus (womb)** — muscular organ where the embryo implants and develops; lined with endometrium (uterine lining)
- **Cervix** — lower entrance to uterus
- **Vagina** — receives penis during intercourse; birth canal

**Egg (female gamete) adaptations:**
- Much larger than sperm (contains food reserves — yolk)
- Haploid nucleus (23 chromosomes)
- Jelly coat around cell membrane — hardens after fertilisation to prevent polyspermy (entry of more than one sperm)
- Cytoplasm rich in nutrients to support early embryo development

**Fertilisation in humans:** one sperm fuses with the egg cell in the oviduct forming a diploid zygote (46 chromosomes). The zygote divides by mitosis as it travels to the uterus, forming a ball of cells (embryo) which **implants** into the uterine lining (endometrium) about 6–10 days after fertilisation.`,
      keyPoints: [
        "Testes produce sperm and testosterone; ovaries produce eggs and sex hormones.",
        "Fertilisation occurs in the oviduct; implantation occurs in the uterus.",
        "Sperm: streamlined, flagellum, many mitochondria, acrosome.",
        "Egg: large, food reserves, jelly coat prevents polyspermy.",
        "Diploid zygote (46 chromosomes) forms on fertilisation of two haploid gametes (23 each).",
      ],
      strategies: ["Structure-function analysis", "Compare male and female gametes"],
    },
    {
      heading: "The Menstrual Cycle, Pregnancy and the Placenta",
      body: `**The menstrual cycle** is approximately 28 days and prepares the uterus for a possible pregnancy each month.

Key events (approximate days):
- **Day 1–5**: Menstruation — uterine lining (endometrium) breaks down and is shed; blood loss occurs.
- **Day 6–13**: Repair and thickening of uterine lining under the influence of oestrogen.
- **Day 14**: Ovulation — one mature egg is released from an ovary (triggered by a surge in LH).
- **Day 15–28**: Uterine lining maintained and thickened by progesterone (secreted by corpus luteum). If fertilisation does not occur, progesterone falls, lining breaks down, and menstruation begins again.

**Hormonal control:**
- **FSH** (follicle-stimulating hormone, from pituitary): stimulates maturation of follicles in the ovary; stimulates oestrogen secretion.
- **LH** (luteinising hormone, from pituitary): surge on day ~13 triggers ovulation; stimulates corpus luteum to form and secrete progesterone.
- **Oestrogen** (from ovary): repairs and thickens uterine lining; at high levels feeds back positively to trigger LH surge; inhibits FSH.
- **Progesterone** (from corpus luteum): maintains thickened uterine lining; inhibits FSH and LH (prevents further ovulation during potential pregnancy).

**The Placenta:**
The placenta forms from embryonic and maternal tissues embedded in the uterine wall. It is the exchange organ between mother and fetus.

Substances exchanged **from mother to fetus** via the placenta: oxygen, glucose, amino acids, water, minerals, vitamins, antibodies (passive immunity).

Substances exchanged **from fetus to mother**: carbon dioxide, urea (metabolic waste).

The placenta has:
- Vast surface area (villi) — maximises exchange
- Thin walls — reduces diffusion distance
- Rich blood supply on both sides
- The maternal and fetal blood supplies do NOT mix — exchange is by diffusion/active transport across the placental membranes.

**Amniotic fluid** surrounds the fetus inside the amniotic sac. It cushions the fetus against mechanical shock, maintains a stable temperature, and allows fetal movement.

**Secondary sexual characteristics** appear at puberty, triggered by sex hormones:
- Males (testosterone): deepening voice, facial/body hair, muscle development, pubic hair, testicular/penile growth, sperm production.
- Females (oestrogen): breast development, widening of hips, pubic/underarm hair, beginning of menstrual cycle, growth of ovaries and uterus.`,
      diagrams: [
        {
          caption: "The 28-day menstrual cycle — hormone levels and uterine lining changes",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Graph showing oestrogen and progesterone levels across 28-day menstrual cycle with uterine lining and ovulation marked">
  <!-- axes -->
  <line x1="35" y1="15" x2="35" y2="155" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="35" y1="155" x2="305" y2="155" stroke="#b7bce0" stroke-width="1.5"/>
  <text x="18" y="85" font-size="8" fill="#b7bce0" text-anchor="middle" transform="rotate(-90 18 85)">Hormone level</text>
  <text x="170" y="170" font-size="8" fill="#b7bce0" text-anchor="middle">Days of cycle</text>
  <!-- day markers -->
  <text x="35" y="163" font-size="7" fill="#b7bce0" text-anchor="middle">1</text>
  <text x="105" y="163" font-size="7" fill="#b7bce0" text-anchor="middle">7</text>
  <text x="168" y="163" font-size="7" fill="#b7bce0" text-anchor="middle">14</text>
  <text x="237" y="163" font-size="7" fill="#b7bce0" text-anchor="middle">21</text>
  <text x="305" y="163" font-size="7" fill="#b7bce0" text-anchor="middle">28</text>
  <!-- oestrogen curve (peaks day 12-13) -->
  <polyline points="35,145 60,140 90,120 125,60 145,50 165,70 185,105 210,100 240,105 270,110 305,140" fill="none" stroke="#fb7185" stroke-width="2"/>
  <text x="145" y="44" font-size="8" fill="#fb7185">Oestrogen</text>
  <!-- progesterone curve (peaks day 21) -->
  <polyline points="35,150 60,150 90,149 125,148 165,145 185,105 210,75 240,65 265,85 290,130 305,148" fill="none" stroke="#a78bfa" stroke-width="2"/>
  <text x="230" y="58" font-size="8" fill="#a78bfa">Progesterone</text>
  <!-- ovulation line -->
  <line x1="168" y1="15" x2="168" y2="155" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4,2"/>
  <text x="172" y="25" font-size="7.5" fill="#fbbf24">Ovulation</text>
  <text x="172" y="34" font-size="7.5" fill="#fbbf24">(day 14)</text>
  <!-- menstruation bar -->
  <rect x="35" y="175" width="42" height="8" fill="#fb7185" opacity="0.5" rx="2"/>
  <text x="56" y="196" font-size="7" fill="#fb7185" text-anchor="middle">Menstruation</text>
  <!-- lining thickening bar -->
  <rect x="77" y="175" width="228" height="8" fill="#34d399" opacity="0.4" rx="2"/>
  <text x="191" y="190" font-size="7" fill="#34d399" text-anchor="middle">Uterine lining thickens then maintained</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Menstrual cycle ~28 days: menstruation (day 1-5), repair (6-13), ovulation (day 14), maintenance (15-28).",
        "FSH: stimulates follicle and oestrogen production. LH surge triggers ovulation.",
        "Oestrogen: thickens uterine lining. Progesterone: maintains it.",
        "Placenta exchanges oxygen and nutrients to fetus; CO2 and urea from fetus; maternal and fetal blood do not mix.",
        "Amniotic fluid cushions and protects the fetus.",
      ],
      thinkDeeper: "If a woman's progesterone level remains high (e.g. due to pregnancy), the menstrual cycle stops. Explain in terms of hormone feedback why this happens, naming which hormones are inhibited and what consequence this has for the ovaries.",
      discovery: {
        problem: "A student says: 'The mother's blood flows into the fetus through the placenta.' Identify what is wrong with this statement and explain the actual mechanism of exchange.",
        idea: "The mother's blood does NOT flow into the fetus. Maternal and fetal blood circulations are separate. Exchange occurs by diffusion (e.g. O2, CO2) and active transport (e.g. glucose, amino acids) across the thin walls of placental villi — the concentration gradient drives diffusion, and a rich blood supply on both sides maintains the gradient.",
      },
      strategies: ["Correct the misconception", "Apply diffusion principles"],
      whyItWorks: "The placenta's villi create an enormous surface area (estimated 12–14 m2 at term) and are extremely thin (a few micrometres). This maximises the rate of diffusion according to Fick's law: rate of diffusion is proportional to (surface area x concentration difference) / diffusion distance. Keeping maternal and fetal blood separate prevents immune rejection of the fetus (which has different antigens).",
    },
    {
      heading: "Sex Hormones and Sexually Transmitted Infections",
      body: `**Summary of sex hormones:**
- **Testosterone** (male, from testes): stimulates sperm production; responsible for male secondary sexual characteristics.
- **Oestrogen** (female, from ovaries): stimulates female secondary sexual characteristics; repairs/thickens uterine lining; at high levels triggers LH surge; inhibits FSH.
- **Progesterone** (female, from corpus luteum/placenta in pregnancy): maintains uterine lining; inhibits FSH and LH.
- **FSH** (pituitary): follicle-stimulating hormone — matures follicles in ovary, stimulates oestrogen.
- **LH** (pituitary): luteinising hormone — triggers ovulation and corpus luteum formation.

**Sexually transmitted infections (STIs):**

STIs are infections spread mainly through sexual contact (exchange of body fluids or skin-to-skin contact).

**HIV/AIDS:**
- **Causative agent**: HIV (Human Immunodeficiency Virus) — a retrovirus.
- **Mode of transmission**: unprotected sexual intercourse (vaginal/anal); sharing contaminated needles (IV drug use); transfusion of infected blood; mother to child (during birth or breastfeeding).
- **Effect on body**: HIV infects and destroys T-helper lymphocytes (white blood cells), progressively destroying the immune system. AIDS (Acquired Immune Deficiency Syndrome) is the late stage where immunity is so compromised that opportunistic infections (e.g. pneumonia, tuberculosis) and some cancers become life-threatening.
- **Prevention**:
  - Use of condoms during sexual intercourse
  - Not sharing needles or syringes
  - Screening blood and blood products before transfusion
  - Antiretroviral therapy (ART) — does not cure HIV but suppresses virus to undetectable levels, preventing transmission and progression to AIDS
  - Mother-to-child transmission can be prevented with ART during pregnancy

HIV does NOT spread through casual contact (handshakes, hugging, sharing food, insect bites, toilet seats).`,
      keyPoints: [
        "Testosterone: male secondary sexual characteristics and sperm production.",
        "Oestrogen and progesterone regulate the menstrual cycle and pregnancy.",
        "FSH and LH are pituitary hormones controlling ovarian function.",
        "HIV destroys T-helper lymphocytes, causing AIDS when immunity fails severely.",
        "HIV transmission: unprotected sex, shared needles, infected blood, mother to child — prevented by condoms, screening, ART.",
      ],
      strategies: ["Know transmission routes to deduce prevention strategies", "Link hormone to target organ and effect"],
    },
  ],

  learn: {
    keyFacts: [
      "Asexual reproduction produces clones from one parent; sexual reproduction involves gamete fusion and produces genetic variation.",
      "Meiosis produces haploid gametes (sperm and egg, each with 23 chromosomes in humans); fertilisation restores 46.",
      "Pollination = pollen transfer to stigma; fertilisation = gamete fusion inside ovule.",
      "Insect-pollinated flowers: bright petals, scent, nectar, sticky pollen, sticky stigma inside.",
      "Wind-pollinated flowers: no petals/scent/nectar, light smooth pollen in large amounts, feathery hanging stigma.",
      "Germination requires water, oxygen, and suitable temperature (not light).",
      "Ovulation occurs on day ~14 of the menstrual cycle, triggered by an LH surge.",
      "The placenta exchanges substances between mother and fetus; their blood supplies do not mix.",
      "HIV destroys T-helper lymphocytes, eventually causing AIDS.",
      "Testosterone drives male secondary sexual characteristics; oestrogen drives female.",
    ],
    flashcards: [
      { front: "What is pollination?", back: "The transfer of pollen from an anther to a stigma of the same species." },
      { front: "What structures make up the stamen?", back: "Anther (produces pollen) and filament (supports anther)." },
      { front: "What structures make up the carpel?", back: "Stigma, style, ovary, and ovule." },
      { front: "What conditions are needed for germination?", back: "Water, oxygen, and a suitable temperature. (Light is NOT required.)" },
      { front: "What does FSH do in the menstrual cycle?", back: "Stimulates follicle maturation in the ovary and stimulates oestrogen secretion." },
      { front: "What triggers ovulation?", back: "A surge in LH (luteinising hormone) on around day 13–14." },
      { front: "What is the role of the placenta?", back: "Exchanges substances between mother and fetus: O2, glucose, antibodies to fetus; CO2 and urea from fetus. Blood supplies do not mix." },
      { front: "What does progesterone do?", back: "Maintains the thickened uterine lining; inhibits FSH and LH to prevent further ovulation." },
      { front: "How is HIV transmitted?", back: "Unprotected sexual intercourse; sharing contaminated needles; infected blood transfusions; mother to child (birth/breastfeeding)." },
      { front: "Why does HIV lead to AIDS?", back: "HIV destroys T-helper lymphocytes, crippling the immune system so opportunistic infections become life-threatening." },
      { front: "What is an advantage of sexual over asexual reproduction?", back: "Produces genetic variation, enabling natural selection and adaptation to changing environments." },
      { front: "What sperm adaptation provides energy for swimming?", back: "Many mitochondria in the midpiece provide ATP via aerobic respiration." },
    ],
    keyTerms: [
      { term: "Pollination", definition: "Transfer of pollen from the anther of one flower to the stigma of a flower of the same species." },
      { term: "Fertilisation (plants)", definition: "Fusion of the male nucleus (from pollen tube) with the female gamete (egg cell) inside the ovule." },
      { term: "Germination", definition: "The resumption of growth of an embryo within a seed, requiring water, oxygen, and suitable temperature." },
      { term: "Ovulation", definition: "Release of a mature egg cell from the ovary, triggered by an LH surge (around day 14 of the menstrual cycle)." },
      { term: "Implantation", definition: "Embedding of the embryo into the uterine lining (endometrium), approximately 6–10 days after fertilisation." },
      { term: "Placenta", definition: "The organ formed from maternal and fetal tissues in the uterine wall that allows exchange of substances between mother and fetus without mixing of blood." },
      { term: "Amniotic fluid", definition: "Fluid surrounding the fetus inside the amniotic sac, providing protection from physical shock and maintaining a stable environment." },
      { term: "HIV", definition: "Human Immunodeficiency Virus — a retrovirus that infects and destroys T-helper lymphocytes, progressively destroying the immune system." },
      { term: "AIDS", definition: "Acquired Immune Deficiency Syndrome — late stage HIV infection in which the immune system is so damaged that opportunistic infections and cancers become life-threatening." },
      { term: "Corpus luteum", definition: "The structure formed from the ruptured follicle after ovulation; secretes progesterone to maintain the uterine lining." },
      { term: "Gamete", definition: "A sex cell (sperm or egg in animals; pollen or egg cell in plants) containing half the normal chromosome number (haploid)." },
      { term: "Secondary sexual characteristics", definition: "Features that appear at puberty under the influence of sex hormones but are not directly involved in reproduction (e.g. facial hair in males, breast development in females)." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "bio-reproduction-mcq-q01",
        question: "Which of the following is an advantage of sexual reproduction over asexual reproduction?",
        options: [
          "All offspring can reproduce",
          "Produces genetic variation in offspring",
          "Does not require a mate",
          "Offspring are produced more rapidly",
        ],
        answerIndex: 1,
        explanation: "Sexual reproduction involves the fusion of gametes from two parents, producing offspring with new combinations of alleles. This genetic variation allows natural selection to act, giving populations greater adaptability. Asexual reproduction produces clones (no variation), does not require a mate, allows all offspring to reproduce, and is faster — these are advantages of asexual, not sexual, reproduction.",
        guideRef: "Asexual vs Sexual Reproduction",
        difficulty: "warmup",
      },
      {
        id: "bio-reproduction-mcq-q02",
        question: "Which part of the flower contains the female gamete?",
        options: ["Anther", "Filament", "Ovule", "Stigma"],
        answerIndex: 2,
        explanation: "The ovule contains the egg cell (female gamete). It is located inside the ovary. After fertilisation, the ovule develops into a seed. The anther produces pollen (male gametes); the filament supports the anther; the stigma is the sticky surface where pollen lands.",
        guideRef: "Sexual Reproduction in Flowering Plants",
        difficulty: "warmup",
      },
      {
        id: "bio-reproduction-mcq-q03",
        question: "A flower has large, brightly coloured petals, sticky pollen, and nectar. What does this suggest about its pollination?",
        options: [
          "It is pollinated by wind",
          "It is pollinated by insects",
          "It pollinates itself",
          "It does not require pollination",
        ],
        answerIndex: 1,
        explanation: "Bright petals attract insects visually, sticky pollen clings to insect bodies, and nectar rewards visiting insects. All three features are adaptations for insect pollination. Wind-pollinated plants have no need to attract insects, so they lack colourful petals, scent, or nectar.",
        guideRef: "Insect- vs Wind-Pollinated Flowers",
        difficulty: "warmup",
      },
      {
        id: "bio-reproduction-mcq-q04",
        question: "Which hormone triggers ovulation in the human menstrual cycle?",
        options: ["Oestrogen", "Progesterone", "FSH", "LH"],
        answerIndex: 3,
        explanation: "A surge in LH (luteinising hormone) on around day 13–14 of the menstrual cycle triggers the release of the mature egg from the ovary (ovulation). FSH stimulates follicle maturation and oestrogen production. Oestrogen thickens the uterine lining and at high levels triggers the LH surge. Progesterone maintains the uterine lining after ovulation.",
        guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
        difficulty: "core",
        hints: [
          "Recall which hormones come from the pituitary gland.",
          "Think about which event causes a sudden release of a ripe egg.",
          "Which hormone shows a sharp peak on day 13-14 in cycle graphs?",
        ],
      },
      {
        id: "bio-reproduction-mcq-q05",
        question: "What is the role of the amniotic fluid during pregnancy?",
        options: [
          "Supplies oxygen and glucose to the fetus",
          "Removes carbon dioxide from the fetus",
          "Cushions the fetus against mechanical shock",
          "Prevents the mother's immune system attacking the fetus",
        ],
        answerIndex: 2,
        explanation: "Amniotic fluid surrounds and cushions the fetus, protecting it from physical impact and maintaining a stable, warm environment. Exchange of oxygen, glucose, and waste occurs via the placenta (not amniotic fluid). Prevention of immune rejection is largely achieved by the placental barrier.",
        guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
        difficulty: "core",
        hints: [
          "Think about what 'fluid surrounding the fetus' would physically do.",
          "Rule out options that describe the placenta's functions.",
        ],
      },
      {
        id: "bio-reproduction-mcq-q06",
        question: "HIV infection leads to AIDS because the virus destroys which type of cell?",
        options: ["Red blood cells", "T-helper lymphocytes", "B lymphocytes", "Phagocytes"],
        answerIndex: 1,
        explanation: "HIV specifically targets and destroys T-helper lymphocytes (CD4+ T cells). These cells coordinate the immune response — without them, neither antibody production nor cell-mediated immunity can function properly. The resulting immune deficiency allows opportunistic infections and cancers to take hold, producing the condition known as AIDS.",
        guideRef: "Sex Hormones and Sexually Transmitted Infections",
        difficulty: "core",
        hints: [
          "Recall which white blood cells 'help' coordinate the immune system.",
          "Think about why someone with AIDS gets infections that healthy people fight off easily.",
        ],
      },
    ],
    qa: [
      {
        id: "bio-reproduction-qa-q01",
        question: "Describe the process of fertilisation in a flowering plant, starting from when a pollen grain lands on the stigma. [4 marks]",
        marks: 4,
        modelAnswer: "When a pollen grain lands on the (compatible) stigma, it germinates and produces a pollen tube. The pollen tube grows down through the style, guided by chemical attractants, until it reaches the ovule in the ovary. The male nucleus travels along the pollen tube into the ovule. Inside the ovule, the male nucleus fuses with the female gamete (egg cell), forming a diploid zygote. This is fertilisation.",
        markScheme: [
          "Pollen grain germinates on the stigma",
          "Pollen tube grows down through the style (to the ovule/ovary)",
          "Male nucleus travels down the pollen tube",
          "Male nucleus fuses with the egg cell (female gamete) / fertilisation occurs inside the ovule",
        ],
        commonError: "Students often say 'pollen fertilises the egg' without mentioning the pollen tube or the male nucleus — fertilisation involves gamete nuclei fusing, not whole pollen grains.",
        guideRef: "Sexual Reproduction in Flowering Plants",
        difficulty: "core",
        hints: [
          "Start with what happens to the pollen grain after landing.",
          "A tube must grow — where does it grow to?",
          "What travels inside the tube?",
          "What is the final event that counts as fertilisation?",
        ],
        strategy: "Sequence the steps in order; make sure to name the male nucleus specifically.",
      },
      {
        id: "bio-reproduction-qa-q02",
        question: "Describe the role of the placenta in pregnancy, including what substances are exchanged and how the structure of the placenta enables efficient exchange. [5 marks]",
        marks: 5,
        modelAnswer: "The placenta is an organ embedded in the uterine wall that connects the mother's and fetus's blood supplies while keeping them separate. Oxygen, glucose, amino acids, water, minerals, vitamins, and maternal antibodies pass from mother to fetus. Carbon dioxide and urea (metabolic waste) pass from fetus to mother. Exchange occurs by diffusion and active transport across the placental membranes. The placenta is adapted for efficient exchange: it has a very large surface area (formed by many finger-like villi), thin walls to minimise the diffusion distance, and a rich blood supply on both sides to maintain steep concentration gradients.",
        markScheme: [
          "Maternal and fetal blood do not mix",
          "O2 and glucose (and/or amino acids/antibodies) pass from mother to fetus",
          "CO2 and urea pass from fetus to mother",
          "Large surface area (villi) maximises rate of exchange",
          "Thin walls reduce diffusion distance / exchange by diffusion",
        ],
        commonError: "A very common error is stating that 'the mother's blood flows into the fetus' — the two circulations are always separate; only dissolved substances cross the placental membranes.",
        guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
        difficulty: "core",
        hints: [
          "First state whether blood mixes or not.",
          "List at least two substances in each direction.",
          "Apply Fick's law principles: what features reduce diffusion distance or increase surface area?",
          "Mention the role of concentration gradients being maintained by blood flow.",
        ],
        strategy: "Use Fick's law framework: surface area, diffusion distance, concentration gradient.",
      },
      {
        id: "bio-reproduction-qa-q03",
        question: "Compare the features of a wind-pollinated flower with an insect-pollinated flower, explaining in each case how the feature is an adaptation for its pollination method. [6 marks]",
        marks: 6,
        modelAnswer: "Wind-pollinated flowers have small or absent petals (no need to attract insects — wind is non-selective). They produce no nectar or scent (no insect reward required). Their pollen grains are tiny, light, and smooth, produced in vast quantities — this increases the chance that some land on a stigma by chance in moving air. Their anthers hang on long filaments outside the flower, where they are caught by air currents and shed pollen freely. Their stigmas are large, feathery, and hang outside the flower — the large surface area maximises the chance of trapping airborne pollen.\n\nInsect-pollinated flowers have large, brightly coloured petals to attract insects visually. They produce scent and nectar to attract and reward insects. Their pollen is sticky or spiky in small quantities — it clings to the insect's body during feeding. Their stigmas are sticky and inside the flower — pollen is deposited directly by the visiting insect.",
        markScheme: [
          "Wind: small/no petals — no need to attract insects (1)",
          "Wind: pollen light, smooth, large quantity — carried by air currents / compensates for random dispersal (1)",
          "Wind: anthers/stigma hanging outside — exposed to air movement (1)",
          "Wind: feathery stigma — large surface area to catch airborne pollen (1)",
          "Insect: large coloured petals / scent / nectar — attract insects (1)",
          "Insect: sticky/spiky pollen — adheres to insect body for transport (1)",
        ],
        commonError: "Students often list features without explaining why each feature is an adaptation — the examiner expects a functional reason for each feature.",
        guideRef: "Insect- vs Wind-Pollinated Flowers",
        difficulty: "core",
        hints: [
          "For each feature, ask: 'What problem does this solve for this pollination method?'",
          "Think about what wind-pollinated plants do NOT need (no insect, so no lure needed).",
          "Consider the amount and type of pollen needed when leaving delivery to chance.",
          "Stigma shape — what shape maximises catching probability?",
        ],
        strategy: "Feature → adaptation explanation; use the word 'because' or 'so that' to force yourself to explain function.",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "bio-reproduction-bank-mcq-1",
        title: "Reproduction MCQ Paper 1",
        description: "Asexual/sexual reproduction, plant reproduction, germination.",
        questions: [
          {
            id: "bio-reproduction-bank-mcq1-q01",
            question: "Which of the following is produced by asexual reproduction?",
            options: [
              "Offspring with genetic variation",
              "Offspring that are genetically identical to the parent",
              "Offspring formed by gamete fusion",
              "Offspring with new allele combinations",
            ],
            answerIndex: 1,
            explanation: "Asexual reproduction produces clones — offspring genetically identical to the single parent, as no meiosis or gamete fusion occurs. Options A, C, and D all describe features of sexual reproduction.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bank-mcq1-q02",
            question: "After fertilisation in a flowering plant, what does the ovule develop into?",
            options: ["Fruit", "Seed", "Pollen grain", "Petal"],
            answerIndex: 1,
            explanation: "After fertilisation, the ovule develops into a seed (containing the embryo). The ovary wall develops into the fruit. Pollen grains and petals are not products of fertilisation.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bank-mcq1-q03",
            question: "A seed is placed in water in a sealed container (no oxygen) at 20°C. What will happen?",
            options: [
              "The seed will germinate normally",
              "The seed will germinate faster than usual",
              "The seed will not germinate because oxygen is absent",
              "The seed will not germinate because light is absent",
            ],
            answerIndex: 2,
            explanation: "Germination requires water, oxygen, and a suitable temperature. Without oxygen, the embryo cannot carry out aerobic respiration to release the energy needed for growth, so germination will not occur. Light is not a requirement for germination.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "List the three conditions required for germination.",
              "Which condition does 'sealed container' remove?",
              "Why does the embryo need that condition?",
            ],
          },
          {
            id: "bio-reproduction-bank-mcq1-q04",
            question: "Which feature is found in BOTH insect-pollinated and wind-pollinated flowers?",
            options: [
              "Large brightly coloured petals",
              "Pollen grains",
              "Nectar",
              "Feathery stigma",
            ],
            answerIndex: 1,
            explanation: "All flowering plants produce pollen grains — this is what is transferred during pollination, regardless of the vector. Large petals and nectar are insect-pollinated adaptations; feathery stigma is a wind-pollinated adaptation.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "core",
            hints: [
              "Ask: what is the fundamental substance transferred in ALL pollination?",
              "Eliminate options that are specific to one pollination type.",
            ],
          },
          {
            id: "bio-reproduction-bank-mcq1-q05",
            question: "Which process in flowering plants is equivalent to fertilisation in humans?",
            options: [
              "Pollen landing on the stigma",
              "The pollen tube reaching the ovary",
              "The male nucleus fusing with the egg cell in the ovule",
              "The seed being dispersed",
            ],
            answerIndex: 2,
            explanation: "Fertilisation, in both plants and animals, is defined as the fusion of male and female gamete nuclei. In plants this is the fusion of the male nucleus (from the pollen tube) with the egg cell inside the ovule. Pollination (pollen on stigma) is equivalent to insemination, not fertilisation.",
            guideRef: "Sexual Reproduction in Flowering Plants",
            difficulty: "core",
            hints: [
              "Define fertilisation precisely — what is it in humans?",
              "Apply that same definition to plants.",
            ],
          },
          {
            id: "bio-reproduction-bank-mcq1-q06",
            question: "A student crosses two different varieties of tomato plant and grows the seeds. The offspring show more variation than either parent variety grown by self-pollination. What is the best explanation?",
            options: [
              "Cross-pollination produces more seeds.",
              "Cross-pollination introduces new allele combinations from two different parents.",
              "Self-pollination always produces fewer seeds.",
              "Cross-pollination increases mutation rate.",
            ],
            answerIndex: 1,
            explanation: "Cross-pollination (sexual reproduction between two genetically different plants) combines alleles from two parents, producing offspring with new combinations not present in either parent alone. This is the genetic variation advantage of sexual/cross-pollination. Mutation rate is not increased by cross-pollination.",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "challenge",
            hints: [
              "Recall what genetic material is exchanged during sexual reproduction.",
              "What does cross-pollination provide that self-pollination does not?",
              "Think about meiosis producing unique gametes from each parent.",
              "New combinations of alleles arise when gametes from two genetically different individuals combine.",
            ],
            strategy: "Apply the concept of allele recombination; distinguish cross from self-pollination.",
          },
        ],
      },
      {
        id: "bio-reproduction-bank-mcq-2",
        title: "Reproduction MCQ Paper 2",
        description: "Human reproductive system, hormones, placenta, HIV.",
        questions: [
          {
            id: "bio-reproduction-bank-mcq2-q01",
            question: "Where does fertilisation normally occur in the human female reproductive system?",
            options: ["Uterus", "Ovary", "Oviduct (Fallopian tube)", "Vagina"],
            answerIndex: 2,
            explanation: "Fertilisation in humans occurs in the oviduct (Fallopian tube), where the egg cell is met by sperm after ovulation. The embryo then travels to the uterus for implantation. Fertilisation does not occur in the uterus, ovary, or vagina under normal circumstances.",
            guideRef: "Human Reproductive Systems",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bank-mcq2-q02",
            question: "What is the chromosome number in a human sperm cell?",
            options: ["46", "23", "92", "48"],
            answerIndex: 1,
            explanation: "Sperm cells are haploid gametes formed by meiosis and contain 23 chromosomes (half the diploid number of 46). When a sperm fuses with an egg (also 23 chromosomes) at fertilisation, the resulting zygote has 46 chromosomes.",
            guideRef: "Human Reproductive Systems",
            difficulty: "warmup",
          },
          {
            id: "bio-reproduction-bank-mcq2-q03",
            question: "Which hormone is responsible for maintaining the uterine lining during the second half of the menstrual cycle?",
            options: ["Testosterone", "FSH", "LH", "Progesterone"],
            answerIndex: 3,
            explanation: "After ovulation (day 14), the corpus luteum secretes progesterone, which maintains the thickened uterine lining ready for implantation. If fertilisation does not occur, progesterone levels fall and menstruation begins. FSH stimulates follicles; LH triggers ovulation; testosterone is a male hormone.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "Identify which half of the cycle (before or after ovulation) we are discussing.",
              "Which hormone comes from the corpus luteum?",
              "What happens to the uterine lining when this hormone drops?",
            ],
          },
          {
            id: "bio-reproduction-bank-mcq2-q04",
            question: "Which substance does the placenta transfer from the fetus to the mother?",
            options: ["Oxygen", "Glucose", "Urea", "Antibodies"],
            answerIndex: 2,
            explanation: "Urea is a metabolic waste product produced by the fetus and transferred to the mother's blood via the placenta for excretion. Oxygen, glucose, and antibodies all move from the mother to the fetus.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "Think about what the fetus produces as waste.",
              "Which direction do nutrients flow?",
            ],
          },
          {
            id: "bio-reproduction-bank-mcq2-q05",
            question: "Which is NOT a recognised route of HIV transmission?",
            options: [
              "Unprotected sexual intercourse",
              "Sharing needles for intravenous drug use",
              "Sharing food with an infected person",
              "Mother to child during breastfeeding",
            ],
            answerIndex: 2,
            explanation: "HIV is transmitted through specific body fluids (blood, semen, vaginal fluid, breast milk) — not through casual contact such as sharing food, handshakes, or insect bites. The other three options are all recognised transmission routes.",
            guideRef: "Sex Hormones and Sexually Transmitted Infections",
            difficulty: "core",
            hints: [
              "HIV is in which body fluids?",
              "Does sharing food involve those body fluids?",
            ],
          },
          {
            id: "bio-reproduction-bank-mcq2-q06",
            question: "A woman's blood oestrogen level rises sharply over several days, then drops just before a sharp rise in LH. What event follows the LH surge?",
            options: [
              "Menstruation",
              "Implantation of the embryo",
              "Ovulation",
              "Formation of the corpus luteum begins before the LH surge",
            ],
            answerIndex: 2,
            explanation: "High oestrogen levels create a positive feedback causing a sharp LH surge around day 13–14. This LH surge triggers ovulation — the release of a mature egg from the follicle. Menstruation occurs if progesterone falls at the end of the cycle. Implantation occurs days after fertilisation, not immediately after the LH surge. The corpus luteum forms from the ruptured follicle AFTER ovulation.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "challenge",
            hints: [
              "Recall the sequence of hormonal events in the menstrual cycle.",
              "A rising then falling oestrogen before LH surge — what part of the cycle is this?",
              "What physically happens to the follicle after the LH surge?",
              "LH surge → ? → corpus luteum forms.",
            ],
            strategy: "Map out the hormone sequence on a timeline.",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-reproduction-bank-qa-1",
        title: "Reproduction Structured Questions Paper 1",
        description: "Plant reproduction, gametes, germination.",
        questions: [
          {
            id: "bio-reproduction-bank-qa1-q01",
            question: "A student examines two flowers, X and Y. Flower X has large, colourful petals, a sticky stigma inside the flower, and sticky pollen grains. Flower Y has no petals, a feathery stigma hanging outside, and smooth, lightweight pollen produced in large amounts.\n\n(a) State the pollination method of flower X and flower Y. [2]\n(b) Explain how the stigma of flower Y is adapted for its pollination method. [2]\n(c) Suggest one reason why wind-pollinated plants produce much more pollen than insect-pollinated plants. [1]",
            marks: 5,
            modelAnswer: "(a) Flower X: insect pollination. Flower Y: wind pollination.\n\n(b) The stigma of flower Y is large and feathery. This increases the surface area of the stigma, making it more likely to trap pollen grains that are carried past at random by air currents.\n\n(c) Wind dispersal is random/non-targeted, so many pollen grains are wasted and never reach a stigma. Producing large amounts increases the probability that at least some grains will land on an appropriate stigma.",
            markScheme: [
              "(a) X: insect-pollinated (1); Y: wind-pollinated (1)",
              "(b) Feathery/large stigma = large surface area (1); to trap/catch airborne pollen grains (1)",
              "(c) Wind is non-directed so most pollen does not land on a stigma / large quantity compensates for random dispersal (1)",
            ],
            commonError: "Students write 'more pollen because wind blows harder' — the reason is about probability of reaching a stigma, not about wind strength.",
            guideRef: "Insect- vs Wind-Pollinated Flowers",
            difficulty: "core",
            hints: [
              "For (a) match the feature cluster to pollination type.",
              "For (b) focus on the feathery shape — what does it do for capture?",
              "For (c) think about how targeted/efficient each pollination method is.",
            ],
            strategy: "Feature → function reasoning for each part.",
          },
          {
            id: "bio-reproduction-bank-qa1-q02",
            question: "Compare the structure of a sperm cell and an egg cell, and explain how each is adapted for its function. [6 marks]",
            marks: 6,
            modelAnswer: "A sperm cell is small and streamlined with a long flagellum (tail) for swimming through fluid to reach the egg. It has many mitochondria in the midpiece to provide ATP for flagellum movement by aerobic respiration. The head contains the nucleus (23 chromosomes) and an acrosome, which contains enzymes that digest through the egg's outer layers to allow fertilisation.\n\nAn egg cell is much larger than a sperm cell and contains large amounts of cytoplasm with nutrient reserves (yolk) to nourish the developing embryo before implantation. Like the sperm, it contains a haploid nucleus (23 chromosomes). It is surrounded by a jelly coat that hardens after one sperm enters, preventing polyspermy (entry of more than one sperm) which would give the embryo too many chromosomes.",
            markScheme: [
              "Sperm: streamlined / small — moves efficiently through fluid (1)",
              "Sperm: flagellum — for swimming / movement towards egg (1)",
              "Sperm: many mitochondria — aerobic respiration for ATP / energy for movement (1)",
              "Sperm: acrosome — contains enzymes to penetrate egg (1)",
              "Egg: large with nutrient/yolk reserves — nourishes embryo before implantation (1)",
              "Egg: jelly coat hardens after fertilisation — prevents polyspermy (1)",
            ],
            commonError: "Students say the acrosome 'is the head of the sperm' rather than specifying it contains digestive enzymes to penetrate the egg.",
            guideRef: "Human Reproductive Systems",
            difficulty: "core",
            hints: [
              "For each cell, list structural features first, then give the function of each.",
              "Sperm must reach and enter the egg — what adaptations support each step?",
              "Egg must survive until implantation and prevent entry of extra sperm.",
              "Remember mitochondria produce ATP via aerobic respiration.",
            ],
            strategy: "Structure-function pairs: state the feature, then the function it serves.",
          },
          {
            id: "bio-reproduction-bank-qa1-q03",
            question: "Explain the advantages and disadvantages of asexual reproduction compared to sexual reproduction. In your answer, refer to genetic variation and speed of reproduction. [4 marks]",
            marks: 4,
            modelAnswer: "Asexual reproduction has the advantage of being faster — organisms can reproduce rapidly without needing to find a mate, and all offspring can reproduce. This is useful in stable environments where the parent's genotype is well adapted. However, asexual reproduction produces clones (genetically identical offspring), meaning no genetic variation. This is a disadvantage if the environment changes or a new disease arises, as all offspring are equally vulnerable.\n\nSexual reproduction is slower and requires a mate, but the genetic variation it produces through meiosis and fertilisation allows natural selection to act on differences between individuals. This means some offspring may survive environmental changes or new pathogens, giving the species greater long-term adaptability.",
            markScheme: [
              "Asexual: faster reproduction / no mate needed / all offspring reproduce (advantage) (1)",
              "Asexual: no genetic variation produced — clones (disadvantage) (1)",
              "All clones equally vulnerable to same disease/environmental change (supporting the disadvantage) (1)",
              "Sexual: genetic variation enables natural selection / adaptability to change (advantage) (1)",
            ],
            commonError: "Students state asexual is 'always better' without recognising the disadvantage, or forget to explain WHY variation is advantageous (not just that it exists).",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "core",
            hints: [
              "Identify one advantage AND one disadvantage of asexual for full marks.",
              "Variation advantage needs explanation — what does it allow organisms to do?",
              "Refer specifically to disease or environmental change when discussing clone vulnerability.",
            ],
            strategy: "Balance: give both sides; link variation to natural selection explicitly.",
          },
          {
            id: "bio-reproduction-bank-qa1-q04",
            question: "[Challenge] A scientist studies two plant populations: Population A reproduces only asexually; Population B reproduces sexually. A new fungal pathogen arrives in the region and kills 80% of Population A but only 30% of Population B.\n\n(a) Explain, using your knowledge of genetics and reproduction, why Population A suffered greater losses. [3]\n(b) Predict what would happen to Population A over successive generations if the pathogen persists, and explain your reasoning. [2]\n(c) Suggest how Population A could gain resistance to the pathogen in the future, even without sexual reproduction. [1]",
            marks: 6,
            modelAnswer: "(a) Population A reproduces asexually, producing clones that are genetically identical to the parent. This means all individuals have the same alleles and the same susceptibility or resistance to the pathogen. If the parent genotype is susceptible, all offspring are equally susceptible, and the pathogen kills the vast majority. In Population B, sexual reproduction (meiosis and fertilisation) produces genetic variation — different individuals have different allele combinations, so some may carry alleles conferring resistance. These individuals survive and reproduce, so the population as a whole suffers fewer losses.\n\n(b) If the pathogen persists, the surviving 20% of Population A are likely to be those individuals with any chance mutations giving partial resistance. However, all offspring of survivors are still clones of those survivors. Without variation, the pathogen could evolve to overcome even that resistance. Over successive generations, if no resistance alleles exist, Population A would continue to decline and could face extinction.\n\n(c) Random mutation in the DNA of an individual in Population A could produce a new allele giving resistance to the pathogen, even without sexual reproduction.",
            markScheme: [
              "(a) Asexual = clones / all genetically identical (1)",
              "(a) All individuals equally susceptible to pathogen (1)",
              "(a) Sexual reproduction produces variation — some individuals have resistance alleles / fewer die (1)",
              "(b) Population A continues to decline / risk of extinction if no resistance present (1)",
              "(b) No variation means no selection advantage for survivors / pathogen can overcome population (1)",
              "(c) Random mutation (in DNA) can produce a resistance allele (1)",
            ],
            commonError: "Students say Population A 'adapts' to the pathogen — adaptation requires selection acting on variation; without variation in a clone population, true adaptation cannot occur (only mutation can introduce change).",
            guideRef: "Asexual vs Sexual Reproduction",
            difficulty: "challenge",
            hints: [
              "For (a): What does 'genetically identical' mean for disease resistance across the whole population?",
              "For (a): Compare this with what variation means for Population B's chance of survival.",
              "For (b): If survivors are clones of each other, what variation exists in the next generation?",
              "For (c): What is the only source of NEW genetic variation without sex?",
            ],
            strategy: "Apply evolution principles: variation → selection → differential survival → population change.",
            solutions: [
              {
                label: "Genetics approach",
                steps: [
                  "All clones share one genotype → same susceptibility alleles.",
                  "No variation → no individuals with resistance alleles by recombination.",
                  "Pathogen kills nearly all; only rare mutations could confer resistance.",
                  "Sexual population has many genotypes → some may have resistance → differential survival → population retains a proportion.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "bio-reproduction-bank-qa-2",
        title: "Reproduction Structured Questions Paper 2",
        description: "Menstrual cycle, placenta, hormones, HIV/AIDS.",
        questions: [
          {
            id: "bio-reproduction-bank-qa2-q01",
            question: "Describe the changes that occur in the uterus and the hormone levels during days 1–14 of the human menstrual cycle. [5 marks]",
            marks: 5,
            modelAnswer: "On days 1–5 (menstruation), the uterine lining (endometrium) breaks down and is shed, causing menstrual bleeding. Oestrogen and progesterone levels are low at the start of this phase.\n\nFrom days 6–13, FSH from the pituitary gland stimulates a follicle in the ovary to develop. The follicle secretes oestrogen, so oestrogen levels rise steadily. Oestrogen causes the uterine lining to repair and thicken, preparing it for potential implantation.\n\nAs oestrogen levels peak (around day 12–13), this triggers a positive feedback response causing a surge in LH from the pituitary gland. On day 14, the LH surge triggers ovulation — the release of the mature egg from the follicle.",
            markScheme: [
              "Day 1–5: uterine lining breaks down / menstruation / blood loss (1)",
              "FSH stimulates follicle development / oestrogen production (1)",
              "Oestrogen causes uterine lining to repair and thicken (1)",
              "Oestrogen peak triggers LH surge (1)",
              "LH surge triggers ovulation on day 14 (1)",
            ],
            commonError: "Students describe progesterone acting in the first half of the cycle — progesterone is secreted by the corpus luteum and acts mainly in days 15–28 (after ovulation).",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "Break your answer into three phases: menstruation, repair, ovulation.",
              "For each phase, name the key hormone and its source.",
              "Link each hormone to what it does to the uterine lining.",
              "End with what triggers ovulation — name both the hormone and the event.",
            ],
            strategy: "Chronological sequencing; link hormone → target organ → effect.",
          },
          {
            id: "bio-reproduction-bank-qa2-q02",
            question: "Explain how the structure of the placenta is adapted for the efficient exchange of substances between the mother and fetus. [4 marks]",
            marks: 4,
            modelAnswer: "The placenta has a very large surface area, formed by many finger-like projections called villi. This large surface area maximises the rate of diffusion. The walls of the villi are very thin, minimising the diffusion distance between the maternal and fetal blood. Both the mother and fetus have a rich blood supply to and from the placenta, which maintains steep concentration gradients on each side, keeping the rate of diffusion high. Because the maternal and fetal blood do not mix, there is no immune rejection of the fetus, but dissolved substances such as oxygen and glucose can still pass across the thin membrane by diffusion or active transport.",
            markScheme: [
              "Villi / large surface area — increases rate of diffusion (1)",
              "Thin walls — short diffusion distance (1)",
              "Rich blood supply — maintains concentration gradient on both sides (1)",
              "Maternal and fetal blood do not mix (1)",
            ],
            commonError: "Students say the placenta has 'holes' or that blood mixes — the exchange is across intact membranes, not through gaps.",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "core",
            hints: [
              "Apply Fick's law: rate of diffusion depends on surface area, distance, and concentration gradient.",
              "For each structural feature, state what aspect of Fick's law it optimises.",
              "Don't forget to mention blood supply and concentration gradient maintenance.",
            ],
            strategy: "Use Fick's law as a framework: surface area → thin walls → concentration gradient.",
          },
          {
            id: "bio-reproduction-bank-qa2-q03",
            question: "Describe how HIV is transmitted between people, and outline the methods that can be used to prevent HIV transmission. [5 marks]",
            marks: 5,
            modelAnswer: "HIV is transmitted when infected body fluids (blood, semen, vaginal fluid, or breast milk) enter another person's bloodstream. This occurs through: unprotected sexual intercourse (vaginal or anal); sharing needles or syringes contaminated with infected blood (e.g. during intravenous drug use); receiving a transfusion of infected blood or blood products; or from mother to child during childbirth or breastfeeding.\n\nPrevention methods include: using condoms during sexual intercourse (creates a physical barrier preventing exchange of body fluids); not sharing needles (prevents blood-to-blood contact); screening donated blood before transfusion (ensures infected blood is not used); antiretroviral therapy (ART) for HIV-positive individuals, which reduces the viral load to undetectable levels and prevents transmission; administering ART to HIV-positive pregnant women and their newborns to prevent mother-to-child transmission.",
            markScheme: [
              "Unprotected sexual intercourse (1)",
              "Sharing contaminated needles (1)",
              "Infected blood transfusion / contaminated blood products (1)",
              "Mother to child during birth or breastfeeding (1)",
              "At least two prevention methods correctly described: condoms / not sharing needles / blood screening / ART (1)",
            ],
            commonError: "Students say HIV is transmitted by mosquito bites or casual contact — HIV is NOT transmitted this way. Only listed body fluids in direct bloodstream contact transmit HIV.",
            guideRef: "Sex Hormones and Sexually Transmitted Infections",
            difficulty: "core",
            hints: [
              "HIV needs a route from one person's body fluid into another's bloodstream.",
              "List four recognised routes of transmission.",
              "For prevention, think of barriers, testing, and medical treatment.",
            ],
            strategy: "Transmission route → prevention strategy pairing.",
          },
          {
            id: "bio-reproduction-bank-qa2-q04",
            question: "[Challenge] A student argues: 'If progesterone inhibits FSH and LH, then during pregnancy (when progesterone is very high) no new follicles can mature and ovulation cannot occur. This is why pregnancy prevents further pregnancies.' Evaluate this student's reasoning and explain the hormonal basis for why menstruation stops during pregnancy. [5 marks]",
            marks: 5,
            modelAnswer: "The student's reasoning is largely correct. During pregnancy, the placenta (and initially the corpus luteum) secretes very high levels of progesterone. Progesterone (and high oestrogen) exerts negative feedback on the pituitary gland, strongly inhibiting the release of FSH and LH. Without FSH, no follicles mature in the ovaries, so no oestrogen is produced to repair or thicken the uterine lining as in a normal cycle. Without LH, ovulation cannot occur, preventing the release of another egg.\n\nBecause progesterone also maintains the thickened uterine lining (preventing its breakdown), menstruation does not occur — there is no fall in progesterone to trigger shedding. The uterine lining remains intact to support the growing embryo/fetus. This is why pregnancy both prevents ovulation and stops menstruation — both effects result from elevated progesterone inhibiting the normal hormonal cycle.",
            markScheme: [
              "Progesterone (and oestrogen) inhibit FSH and LH via negative feedback (1)",
              "Without FSH: follicles do not mature / no new follicle development (1)",
              "Without LH surge: ovulation cannot occur (1)",
              "High progesterone maintains uterine lining — it is not shed (1)",
              "Therefore menstruation does not occur / cycles stop during pregnancy (1)",
            ],
            commonError: "Students confuse the direction of feedback (say 'progesterone stimulates FSH') or fail to explain why menstruation stops (just say 'the baby is there' without linking to hormone levels).",
            guideRef: "The Menstrual Cycle, Pregnancy and the Placenta",
            difficulty: "challenge",
            hints: [
              "First decide: is the student correct? List the hormonal steps they described.",
              "What does high progesterone do to the pituitary?",
              "Without FSH, what cannot develop?",
              "Without LH, what cannot happen?",
              "Progesterone also acts on the uterine lining — what does it prevent?",
            ],
            strategy: "Evaluate the claim by tracing the hormone cascade step by step; connect each hormone to its target organ.",
            solutions: [
              {
                label: "Hormone cascade analysis",
                steps: [
                  "High progesterone → negative feedback → pituitary produces very little FSH and LH.",
                  "Low FSH → follicles do not mature → oestrogen not produced by ovary.",
                  "Low LH → no LH surge → ovulation does not occur.",
                  "High progesterone maintains endometrium → no drop in progesterone → lining not shed → no menstruation.",
                  "Conclusion: student is correct; the mechanism involves negative feedback at the pituitary.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
